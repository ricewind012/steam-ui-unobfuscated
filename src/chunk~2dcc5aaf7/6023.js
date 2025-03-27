import n, { Ut } from "./19810.js";
export function D7(e) {
	try {
		return n.DX.deserializeBinary(e).toObject();
	} catch (e) {
		console.error(
			"Received a VRGamepadUI Message but couldn't deserialize the header!",
			e?.message,
		);
		return;
	}
}
function a(e) {
	try {
		return {
			result: e(),
		};
	} catch (e) {
		return {
			error: e,
		};
	}
}
export let Y7;
((e) => {
	e[(e.Success = 0)] = "Success";
	e[(e.HeaderSerializationFailure = 1)] = "HeaderSerializationFailure";
	e[(e.PayloadSerializationFailure = 2)] = "PayloadSerializationFailure";
	e[(e.SendFailure = 3)] = "SendFailure";
})((Y7 ||= {}));
export class xn extends Error {
	error;
	constructor(e) {
		let t = "";
		switch (e?.origin) {
			case 1: {
				t += "Local ";
				break;
			}
			case 2: {
				t += "Remote ";
			}
		}
		t += Ut(e?.error ?? 0);
		if (e?.description) {
			t += `: ${e.description}`;
		}
		super(t);
		this.error = e;
	}
}
export class tC {
	m_mapRequestHandlers;
	m_Endpoint;
	m_mapMethods = new Map();
	SetImplementation(e, t) {
		if (this.m_mapMethods.has(e)) {
			console.error(
				"CVRGamepadUI Message Service already has an existing implementation for method:",
				e,
			);
		}
		this.m_mapMethods.set(e, t);
	}
	ClearImplementation(e) {
		this.m_mapMethods.delete(e);
	}
	constructor(e, t) {
		this.m_Endpoint = e;
		this.m_mapRequestHandlers = t;
	}
	SendErrorResponse(e, t, r) {
		if (e?.message_id == null) {
			return;
		}
		const i = new n.iM();
		i.set_error(t);
		i.set_origin(2);
		if (r instanceof Error) {
			i.set_description(r.message);
		} else if (r && typeof r == "string") {
			i.set_description(r);
		}
		console.error(
			"Sending VRGamepadUI Message Error Response",
			Ut(t),
			":",
			i.description(),
		);
		const a = {
			message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
			response_to_message_id: e.message_id,
			is_error_response: true,
		};
		const o = this.m_Endpoint.SendVRGamepadUIMessage(a, i);
		if (o != Y7.Success) {
			console.error(
				"Failed to send VRGamepadUI Message Error Response:",
				Y7[o],
				{
					requestHeader: e,
					responseHeader: a,
				},
			);
		}
	}
	HandleVRGamepadUIMessageRequest(e, t) {
		console.assert(e.response_to_message_id == null);
		const r = this.m_mapRequestHandlers[e.name];
		if (!r) {
			this.SendErrorResponse(
				e,
				1,
				`Unknown VRGamepadUI request name: ${e.name}`,
			);
			return;
		}
		const n = this.m_mapMethods.get(r.strMethod);
		if (!n) {
			this.SendErrorResponse(
				e,
				1,
				`Unimplemented VRGamepadUI method: ${r.strMethod}`,
			);
			return;
		}
		const i = a(() => r.msgClassRequest_t.deserializeBinary(t).toObject());
		if ("error" in i) {
			this.SendErrorResponse(e, 7, i.error);
			return;
		}
		const i_result = i.result;
		const l = a(() => n(i_result));
		if ("error" in l) {
			this.SendErrorResponse(e, 2, l.error);
			return;
		}
		let l_result = l.result;
		if (l_result == null) {
			l_result = {};
		}
		(l_result instanceof Promise ? l_result : Promise.resolve(l_result)).then(
			(t) => {
				const n = a(() => r.msgClassResponse_t.fromObject(t ?? {}));
				if ("error" in n) {
					this.SendErrorResponse(e, 6, n.error);
					return;
				}
				const i = {
					message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
					response_to_message_id: e.message_id,
				};
				const o = this.m_Endpoint.SendVRGamepadUIMessage(i, n.result);
				if (o == Y7.Success) {
				} else {
					switch (o) {
						case Y7.HeaderSerializationFailure:
						case Y7.PayloadSerializationFailure: {
							this.SendErrorResponse(e, 6, `Response ${Y7[o]}`);
							break;
						}
						default: {
							console.error(
								"Failed to send VRGamepadUI Message Response:",
								Y7[o],
								{
									requestHeader: e,
									responseHeader: i,
								},
							);
						}
					}
				}
			},
			(t) => {
				this.SendErrorResponse(e, 3, t);
			},
		);
	}
}
export class $k {
	m_Endpoint;
	m_mapPendingResponses = new Map();
	constructor(e) {
		this.m_Endpoint = e;
	}
	HandleVRGamepadUIMessageResponse(e, t) {
		if (!this.m_mapPendingResponses.has(e.response_to_message_id)) {
			console.error(
				"Received a VRGamepadUI Message Response to a message we weren't awaiting a response for (or we already received one):",
				e,
			);
			return;
		}
		const r = this.m_mapPendingResponses.get(e.response_to_message_id);
		this.DeletePendingRequest(e.response_to_message_id);
		if (e.is_error_response) {
			const i = a(() => n.iM.deserializeBinary(t).toObject());
			if ("error" in i) {
				console.error(
					"Received a VRGamepadUI Message error response, but couldn't deserialize it.",
					e,
				);
				return;
			}
			const s = new xn(i.result);
			console.warn("Received a VRGamepadUI Message error response", s.message);
			r.fnReject(s);
			return;
		}
		const i = a(() =>
			r.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
		);
		if ("error" in i) {
			console.error(
				"Received a VRGamepadUI Message response, but couldn't deserialize it.",
				e,
			);
		} else {
			r.fnResolve(i.result);
		}
	}
	SendVRGamepadUIRequest(e, t, r) {
		return new Promise((n, i) => {
			const a = (e) => {
				try {
					i(e);
				} catch (e) {
					console.error("Error rejecting VRGamepadUI Message request call:", e);
				}
			};
			if (!this.m_Endpoint.IsConnected()) {
				a(
					new xn({
						error: 4,
					}),
				);
				return;
			}
			const l = this.m_Endpoint.CreateVRGamepadUIMessageId();
			const c = window.setTimeout(() => this.HandleTimeout(l), 5000);
			this.m_mapPendingResponses.set(l, {
				msgExpectedResponseClass_t: r,
				nTimeoutHandle: c,
				fnResolve: (e) => {
					try {
						n(e);
					} catch (e) {
						console.error(
							"Error resolving VRGamepadUI Message request call:",
							e,
						);
					}
				},
				fnReject: a,
			});
			const m = {
				name: e,
				message_id: l,
			};
			const u = this.m_Endpoint.SendVRGamepadUIMessage(m, t);
			if (u != Y7.Success) {
				a(
					new xn({
						error: 0,
						origin: 1,
						description: `Request ${Y7[u]}`,
					}),
				);
			}
		});
	}
	HandleTimeout(e) {
		const t = this.m_mapPendingResponses.get(e);
		this.DeletePendingRequest(e);
		t?.fnReject(
			new xn({
				error: 5,
			}),
		);
	}
	DeletePendingRequest(e) {
		const t = this.m_mapPendingResponses.get(e);
		this.m_mapPendingResponses.delete(e);
		if (t?.nTimeoutHandle) {
			window.clearTimeout(t.nTimeoutHandle);
		}
	}
}
