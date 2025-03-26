var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./37322.js");
var a = require(/*webcrack:missing*/ "./58663.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require(/*webcrack:missing*/ "./93960.js");
var l = require(/*webcrack:missing*/ "./83957.js");
var c = l;
var m = require(/*webcrack:missing*/ "./16583.js");
var u = require(/*webcrack:missing*/ "./8573.js");
var d = require("./51095.js");
function A(e) {
	try {
		if (!e || typeof e != "string") {
			return null;
		}
		const t = e.split(".");
		if (t.length !== 3) {
			return null;
		}
		const [r, n] = t;
		const i = (0, d.he)(r);
		const a = (0, d.he)(n);
		if (i && a) {
			return {
				header: JSON.parse(i),
				body: JSON.parse(a),
			};
		} else {
			return null;
		}
	} catch (e) {
		console.error(`Exception while attempting to decode token: "${e}"`);
		return null;
	}
}
function p(e) {
	if (e) {
		return e.body.exp;
	} else {
		return 0;
	}
}
import { VY } from "../../actual_src/utils/cookies.js";
export class D {
	m_ServiceTransport;
	m_AnonymousServiceTransport;
	m_strWebAPIBaseURL;
	m_webApiAccessToken = "";
	m_bJsonMode = false;
	m_strSpoofedSteamID = "";
	m_bJWTToken = false;
	m_fnRequestNewAccessToken;
	m_refreshAccessTokenPromise;
	m_dtLastExpireCheck = 0;
	constructor(e, t, r = false, n) {
		this.m_strWebAPIBaseURL = e;
		this.m_webApiAccessToken = t;
		this.m_bJsonMode = r;
		this.m_fnRequestNewAccessToken = n;
		this.m_bJWTToken = A(t) != null;
		this.m_ServiceTransport = {
			SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
				bSendAuth: true,
			}),
			SendNotification: this.SendNotification.bind(this, {
				bSendAuth: true,
			}),
			MakeReady: this.MakeReady.bind(this),
		};
		this.m_AnonymousServiceTransport = {
			SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
				bSendAuth: false,
			}),
			SendNotification: this.SendNotification.bind(this, {
				bSendAuth: false,
			}),
			MakeReady: this.MakeReady.bind(this),
		};
		const i = (0, VY)("steamLoginSpoofSteamID");
		if (i && /[0-9]+/g.test(i)) {
			this.m_strSpoofedSteamID = i;
		}
	}
	WaitUntilLoggedOn() {
		return Promise.resolve();
	}
	GetServerRTime32() {
		return Number(new Date());
	}
	get steamid() {
		return new u.b();
	}
	RTime32ToDate(e) {
		return new Date(e * 1000);
	}
	MakeReady() {
		return Promise.resolve({
			result: 1,
			message: "ready",
		});
	}
	GetServiceTransport() {
		return this.m_ServiceTransport;
	}
	GetWebAPIAccessToken() {
		return this.m_webApiAccessToken;
	}
	GetAnonymousServiceTransport() {
		return this.m_AnonymousServiceTransport;
	}
	async SendMsgAndAwaitResponse(e, t, r, n, i) {
		let o = null;
		try {
			if (this.m_bJWTToken && e.bSendAuth) {
				const e = Date.now() / 1000;
				if (this.m_refreshAccessTokenPromise) {
					await this.m_refreshAccessTokenPromise;
				} else if (
					this.m_fnRequestNewAccessToken &&
					e - this.m_dtLastExpireCheck > 60
				) {
					this.m_dtLastExpireCheck = e;
					const t = A(this.m_webApiAccessToken);
					if (
						t &&
						(function (e) {
							const t = p(e);
							const r = (function (e) {
								if (e) {
									return e.body.nbf || e.body.iat;
								} else {
									return 0;
								}
							})(e);
							let n = 900;
							const i = t - r;
							if (i < 1350) {
								n = i <= 60 ? 0 : 60;
							}
							return p(e) - n < Date.now() / 1000;
						})(t)
					) {
						this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken();
						this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise;
						this.m_refreshAccessTokenPromise = undefined;
					}
				}
			}
			let l = await this.Send(e, t, r, i);
			if (l.status != 200 || !l.data) {
				throw new Error("Request Error");
			}
			o = s.w.Init(n, 147);
			if (l.headers) {
				if (l.headers["x-eresult"]) {
					o.Hdr().set_eresult(parseInt(l.headers["x-eresult"]));
				}
				if (l.headers["x-error_message"]) {
					o.Hdr().set_error_message(l.headers["x-error_message"]);
				}
			}
			if (this.m_bJsonMode) {
				o.SetBodyJSON(l.data.response);
			} else {
				let e = new m.pV(l.data);
				let t = new a.BinaryReader(
					e.GetPacket(),
					e.TellGet(),
					e.GetCountBytesRemaining(),
				);
				n.deserializeBinaryFromReader(o.Body(), t);
			}
			0;
		} catch (t) {
			const r =
				t &&
				typeof t == "object" &&
				"response" in t &&
				t?.response?.status === 401;
			const i = r ? "Unauthorized" : null;
			o = this.CreateFailedMsgProtobuf(n, 3, i);
			if (
				r &&
				!this.m_refreshAccessTokenPromise &&
				this.m_bJWTToken &&
				e.bSendAuth &&
				this.m_fnRequestNewAccessToken
			) {
				this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken();
				this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise;
				this.m_refreshAccessTokenPromise = undefined;
			}
		}
		return o;
	}
	SendNotification(e, t, r, n) {
		this.Send(e, t, r, n);
		return true;
	}
	Send(e, t, r, n) {
		let a = this.CreateWebAPIURL(t);
		if (!a) {
			throw "Couldn't find service name " + t;
		}
		let s = r.SerializeBody();
		let o = i.iI(s);
		const l = n?.eWebAPIKeyRequirement;
		let m = n?.ePrivilege == 0 && l == 1;
		let u = {
			responseType: this.m_bJsonMode ? "json" : "arraybuffer",
			params: {},
			headers: n?.bConstMethod
				? {}
				: {
						"Content-Type": "multipart/form-data",
					},
		};
		if (!e.bSendAuth && l != 1) {
			console.error(
				`Attempting to invoke service ${t} without auth, but auth is required.`,
			);
		}
		if (this.m_webApiAccessToken && e.bSendAuth && !m) {
			u.params.access_token = this.m_webApiAccessToken;
			u.params.spoof_steamid = this.m_strSpoofedSteamID;
		}
		let d = n?.bConstMethod;
		if (d) {
			u.params.origin = self.origin;
			if (this.m_bJsonMode) {
				u.params.input_json = JSON.stringify(r.Body().toObject());
			} else {
				u.params.input_protobuf_encoded = o;
			}
			return c.get(a, u);
		}
		{
			const e = new FormData();
			if (this.m_bJsonMode) {
				e.append("input_json", JSON.stringify(r.Body().toObject()));
			} else {
				e.append("input_protobuf_encoded", o);
			}
			return c.post(a, e, u);
		}
	}
	CreateWebAPIURL(e) {
		let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
		if (t && t.length == 4) {
			return `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`;
		} else {
			return null;
		}
	}
	CreateFailedMsgProtobuf(e, t, r) {
		let n = s.w.Init(e);
		n.Hdr().set_eresult(2);
		n.Hdr().set_transport_error(t);
		if (r) {
			n.Hdr().set_error_message(r);
		}
		return n;
	}
}
(0, n.Cg)([o.o], D.prototype, "SendMsgAndAwaitResponse", null);
(0, n.Cg)([o.o], D.prototype, "SendNotification", null);
(0, n.Cg)([o.o], D.prototype, "Send", null);
