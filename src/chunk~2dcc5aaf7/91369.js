import n from "./56060.js";
import i from "./19810.js";
import a from "./97838.js";
import s, { D7 } from "./6023.js";
const o = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"VRGamepadUIMessages",
);

export const p = new (class {
	m_Steam_Provider = new s.tC(this, i.nV);
	m_SteamVR_Client = new s.$k(this);
	m_SteamVR_ClientMethods = new i._i(this.m_SteamVR_Client);
	m_unNextVRGamepadUIMessageId = 1;
	get Steam() {
		return this.m_Steam_Provider;
	}
	get SteamVR() {
		return this.m_SteamVR_ClientMethods;
	}
	async Init() {
		a.N.RegisterOnMsg(33, n.sR, (e) => {
			const t = D7(e.header());
			if (t) {
				if (o.IsDebugEnabled()) {
					if (t.response_to_message_id == null) {
						o.Debug(`Received ${t.name ?? "(unknown)"} request from SteamVR:`, {
							header: t,
						});
					} else {
						o.Debug("Received response from SteamVR:", {
							header: t,
						});
					}
				}
				if (t.response_to_message_id == null) {
					this.m_Steam_Provider.HandleVRGamepadUIMessageRequest(t, e.payload());
				} else {
					this.m_SteamVR_Client.HandleVRGamepadUIMessageResponse(
						t,
						e.payload(),
					);
				}
			}
		});
	}
	CreateVRGamepadUIMessageId() {
		return this.m_unNextVRGamepadUIMessageId++;
	}
	SendVRGamepadUIMessage(e, t) {
		let r;
		let l;
		try {
			r = i.DX.fromObject(e).serializeBinary();
		} catch (e) {
			return s.Y7.HeaderSerializationFailure;
		}
		try {
			l = t.serializeBinary();
		} catch (e) {
			return s.Y7.PayloadSerializationFailure;
		}
		if (o.IsDebugEnabled()) {
			if (e.response_to_message_id == null) {
				o.Debug(`Sending ${e.name ?? "(unknown)"} request to SteamVR:`, {
					header: e,
					payload: t.toObject(),
				});
			} else {
				o.Debug("Sending response to SteamVR:", {
					header: e,
					payload: t.toObject(),
				});
			}
		}
		const c = new n.sR();
		c.set_header(r);
		c.set_payload(l);
		if (a.N.BSendMsg(33, c)) {
			return s.Y7.Success;
		} else {
			return s.Y7.SendFailure;
		}
	}
	IsConnected() {
		return a.N.IsConnected();
	}
})();

export const I = () => p.Init();
