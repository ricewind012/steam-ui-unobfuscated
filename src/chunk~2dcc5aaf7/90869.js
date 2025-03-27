import a, { Cg } from "./34629.js";
import s, { Gn } from "./89193.js";
import o from "./83957.js";
import c from "./12176.js";
import m from "./93960.js";
import u from "./72476.js";
import d from "./36523.js";
import A from "./37322.js";
import { ZI } from "./87232.js";
export let eF;
export let wI;
const l = o;
export function FU(e) {
	const {
		shared_secret,
		identity_secret,
		secret_1,
		status,
		uri,
		server_time,
		...o
	} = e;
	return {
		shared_secret: A.iI(shared_secret),
		identity_secret: A.iI(identity_secret),
		secret_1: A.iI(secret_1),
		...o,
	};
}
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Generic = 1)] = "Generic";
	e[(e.Expired = 2)] = "Expired";
	e[(e.Network = 3)] = "Network";
	e[(e.MoveAuthenticator = 4)] = "MoveAuthenticator";
	e[(e.RateLimitExceeded = 5)] = "RateLimitExceeded";
	e[(e.AnonymousLogin = 6)] = "AnonymousLogin";
})((eF ||= {}));
((e) => {
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
		Gn(this);
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
					ZI(`Failed to poll auth session. Result ${r}. Transport Error: ${e}`);
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
					ZI(`Failed to poll auth session. Result: ${r}`);
					this.m_eFailureState = eF.Generic;
				}
				this.m_onCompleteCallback({
					bSuccess: false,
				});
				return r;
			}
			const {
				new_challenge_url,
				new_client_id,
				refresh_token,
				access_token,
				account_name,
				had_remote_interaction,
				new_guard_data,
			} = t.Body().toObject();
			this.m_bRemoteInteraction = !!had_remote_interaction;
			if (refresh_token) {
				this.m_onCompleteCallback({
					bSuccess: true,
					strRefreshToken: refresh_token,
					strAccessToken: access_token,
					strAccountName: account_name,
					strNewGuardData: new_guard_data,
				});
				return r;
			} else {
				if (new_challenge_url) {
					this.m_strChallengeURL = new_challenge_url;
				}
				if (new_client_id) {
					this.m_strClientID = new_client_id;
				}
				this.m_activeTimerID = window.setTimeout(
					this.PollForUpdate,
					this.m_msPollInterval,
				);
				return r;
			}
		} catch (e) {
			ZI(`Failed to poll auth session. ${e}`);
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
				const { data } = e;
				if (
					!data ||
					!data.transfer_info ||
					!data.transfer_info ||
					!data.steamID ||
					!data.transfer_info ||
					!data.steamID ||
					!Array.isArray(data.transfer_info)
				) {
					ZI("Result of finalizelogin does not match expectations!");
					return wI.k_PrimaryDomainFail;
				}
				const { transfer_info, steamID, primary_domain } = data;
				return Promise.all(
					transfer_info.map(({ url, params }) =>
						(async (e, t) => {
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
									ZI(
										`Transfer login to ${r.host} failed with status code: ${a.status}`,
									);
									n = false;
								} else if (a.data.result !== 1) {
									ZI(
										`Transfer login to ${r.host} failed with result: ${a.data.result}`,
									);
									n = false;
								}
							} catch (e) {
								ZI(`Transfer login to ${r.host} failed: "${e}"`);
								n = false;
							}
							return {
								bSuccess: n,
								domain: r.host,
							};
						})(url, {
							...params,
							steamID: steamID,
						}),
					),
				).then(
					(e) =>
						((e, t) => {
							let wI_k_Success = wI.k_Success;
							e.forEach((e) => {
								if (!e.bSuccess) {
									if (t && e.domain.toLowerCase() === t.toLowerCase()) {
										wI_k_Success = wI.k_PrimaryDomainFail;
									} else if (wI_k_Success == wI.k_Success) {
										wI_k_Success = wI.k_SecondaryDomainFail;
									}
								}
							});
							return wI_k_Success;
						})(e, primary_domain),
					() => wI.k_SecondaryDomainFail,
				);
			},
			() => {
				ZI("Failed to finalize login. Initial call failed.");
				return wI.k_PrimaryDomainFail;
			},
		);
}
Cg([s.sH], gf.prototype, "m_strChallengeURL", undefined);
Cg([s.sH], gf.prototype, "m_bRemoteInteraction", undefined);
Cg([s.sH], gf.prototype, "m_eFailureState", undefined);
Cg([s.sH], gf.prototype, "m_strExtendedErrorMessage", undefined);
Cg([m.o], gf.prototype, "PollForUpdate", null);
Cg([m.o], gf.prototype, "SetTokenToRevoke", null);
