export var eF;
export var wI;
var a = require(/*webcrack:missing*/ "./34629.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./83957.js");
var l = o;
var c = require(/*webcrack:missing*/ "./12176.js");
var m = require(/*webcrack:missing*/ "./93960.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./36523.js");
var A = require(/*webcrack:missing*/ "./37322.js");
var p = require("./87232.js");
export function FU(e) {
	const {
		shared_secret: t,
		identity_secret: r,
		secret_1: n,
		status: i,
		uri: a,
		server_time: s,
		...o
	} = e;
	return {
		shared_secret: A.iI(t),
		identity_secret: A.iI(r),
		secret_1: A.iI(n),
		...o,
	};
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Generic = 1)] = "Generic";
	e[(e.Expired = 2)] = "Expired";
	e[(e.Network = 3)] = "Network";
	e[(e.MoveAuthenticator = 4)] = "MoveAuthenticator";
	e[(e.RateLimitExceeded = 5)] = "RateLimitExceeded";
	e[(e.AnonymousLogin = 6)] = "AnonymousLogin";
})((eF ||= {}));
(function (e) {
	e[(e.k_Success = 0)] = "k_Success";
	e[(e.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail";
	e[(e.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail";
})((wI ||= {}));
export class gf {
	m_transport;
	m_strClientID;
	m_msPollInterval;
	m_activeTimerID;
	m_rgRequestID;
	m_strTokenToRevoke;
	m_strChallengeURL = undefined;
	m_onShowAgreement;
	m_bRemoteInteraction = false;
	m_onCompleteCallback;
	m_eFailureState = eF.None;
	m_strExtendedErrorMessage = "";
	m_onDeviceDetailsCallback;
	constructor(e, t, r, n) {
		(0, s.Gn)(this);
		this.m_transport = e;
		this.m_onCompleteCallback = t;
		this.m_onDeviceDetailsCallback = r;
		this.m_onShowAgreement = n;
	}
	StartPolling(e = true) {
		if (this.m_activeTimerID != null) {
			this.StopPolling();
		}
		if (e) {
			this.PollForUpdate();
		} else {
			this.m_activeTimerID = window.setTimeout(
				this.PollForUpdate,
				this.m_msPollInterval,
			);
		}
	}
	StopPolling() {
		window.clearTimeout(this.m_activeTimerID);
		this.m_activeTimerID = undefined;
	}
	async PollForUpdate() {
		try {
			const e = c.w.Init(d.Ev);
			e.SetEMsg(9804);
			e.Body().set_client_id(this.m_strClientID);
			e.Body().set_request_id(this.m_rgRequestID);
			if (this.m_strTokenToRevoke) {
				e.Body().set_token_to_revoke(this.m_strTokenToRevoke);
			}
			const t = await d.kX.PollAuthSessionStatus(this.m_transport, e);
			const r = t.GetEResult();
			if (r !== 1) {
				if (r === 2) {
					const e = t.Hdr().transport_error();
					(0, p.ZI)(
						`Failed to poll auth session. Result ${r}. Transport Error: ${e}`,
					);
					if (e === 2 || e === 3) {
						this.m_transport.MakeReady();
						window.setTimeout(this.PollForUpdate, this.m_msPollInterval);
						return 1;
					}
				}
				if (r === 9 || r === 27) {
					this.m_eFailureState = eF.Expired;
				} else if (r === 84) {
					this.m_eFailureState = eF.RateLimitExceeded;
				} else {
					if (r == 118) {
						if (this.m_onShowAgreement) {
							this.m_onShowAgreement(t.Body().agreement_session_url());
						} else {
							const e = t.Body().agreement_session_url();
							const r = document.location.href;
							window.location.href = `${e}&redir=${encodeURIComponent(r)}`;
						}
						this.m_onCompleteCallback({
							bSuccess: false,
						});
						return r;
					}
					(0, p.ZI)(`Failed to poll auth session. Result: ${r}`);
					this.m_eFailureState = eF.Generic;
				}
				this.m_onCompleteCallback({
					bSuccess: false,
				});
				return r;
			}
			const {
				new_challenge_url: i,
				new_client_id: a,
				refresh_token: s,
				access_token: o,
				account_name: l,
				had_remote_interaction: m,
				new_guard_data: u,
			} = t.Body().toObject();
			this.m_bRemoteInteraction = !!m;
			if (s) {
				this.m_onCompleteCallback({
					bSuccess: true,
					strRefreshToken: s,
					strAccessToken: o,
					strAccountName: l,
					strNewGuardData: u,
				});
				return r;
			} else {
				if (i) {
					this.m_strChallengeURL = i;
				}
				if (a) {
					this.m_strClientID = a;
				}
				this.m_activeTimerID = window.setTimeout(
					this.PollForUpdate,
					this.m_msPollInterval,
				);
				return r;
			}
		} catch (e) {
			(0, p.ZI)(`Failed to poll auth session. ${e}`);
			this.m_eFailureState = eF.Generic;
			this.m_onCompleteCallback({
				bSuccess: false,
			});
			return 2;
		}
	}
	SetTokenToRevoke(e) {
		this.m_strTokenToRevoke = e;
	}
	GetFailureState() {
		return this.m_eFailureState;
	}
	GetExtendedErrorMessage() {
		return this.m_strExtendedErrorMessage;
	}
	BHadRemoteInteraction() {
		return this.m_bRemoteInteraction;
	}
	async GetDeviceDetails() {
		const e = await this.m_onDeviceDetailsCallback();
		return d.tS.fromObject(e);
	}
}
export function yp(e) {
	const t = new FormData();
	t.append("nonce", e);
	t.append("sessionid", u.TS.SESSIONID);
	let r = new URL(document.location.href);
	const n = new URLSearchParams(r.search);
	if (n.has("need_password")) {
		n.delete("need_password");
		r.search = n.toString();
	}
	t.append("redir", r.toString());
	const a = `${u.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
	return l
		.post(a, t, {
			withCredentials: true,
		})
		.then(
			(e) => {
				const { data: t } = e;
				if (
					!t ||
					!t.transfer_info ||
					!t.steamID ||
					!Array.isArray(t.transfer_info)
				) {
					(0, p.ZI)("Result of finalizelogin does not match expectations!");
					return wI.k_PrimaryDomainFail;
				}
				const { transfer_info: r, steamID: n, primary_domain: a } = t;
				return Promise.all(
					r.map(({ url: e, params: t }) =>
						(async function (e, t) {
							const r = new URL(e);
							let n = true;
							try {
								const i = new FormData();
								Object.keys(t).forEach((e) => i.append(e, t[e]));
								const a = await l.post(e, i, {
									withCredentials: true,
									timeout: 10000,
								});
								if (a.status !== 200) {
									(0, p.ZI)(
										`Transfer login to ${r.host} failed with status code: ${a.status}`,
									);
									n = false;
								} else if (a.data.result !== 1) {
									(0, p.ZI)(
										`Transfer login to ${r.host} failed with result: ${a.data.result}`,
									);
									n = false;
								}
							} catch (e) {
								(0, p.ZI)(`Transfer login to ${r.host} failed: "${e}"`);
								n = false;
							}
							return {
								bSuccess: n,
								domain: r.host,
							};
						})(e, {
							...t,
							steamID: n,
						}),
					),
				).then(
					(e) =>
						(function (e, t) {
							let r = wI.k_Success;
							e.forEach((e) => {
								if (!e.bSuccess) {
									if (t && e.domain.toLowerCase() === t.toLowerCase()) {
										r = wI.k_PrimaryDomainFail;
									} else if (r == wI.k_Success) {
										r = wI.k_SecondaryDomainFail;
									}
								}
							});
							return r;
						})(e, a),
					() => wI.k_SecondaryDomainFail,
				);
			},
			() => {
				(0, p.ZI)("Failed to finalize login. Initial call failed.");
				return wI.k_PrimaryDomainFail;
			},
		);
}
(0, a.Cg)([s.sH], gf.prototype, "m_strChallengeURL", undefined);
(0, a.Cg)([s.sH], gf.prototype, "m_bRemoteInteraction", undefined);
(0, a.Cg)([s.sH], gf.prototype, "m_eFailureState", undefined);
(0, a.Cg)([s.sH], gf.prototype, "m_strExtendedErrorMessage", undefined);
(0, a.Cg)([m.o], gf.prototype, "PollForUpdate", null);
(0, a.Cg)([m.o], gf.prototype, "SetTokenToRevoke", null);
