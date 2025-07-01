import { FindAndRemoveWhere } from "../../actual_src/utils/arrayutils.js";
import n, { Cg } from "./34629.js";
import i from "./87913.js";
import a from "./46422.js";
import { OverlayStore } from "../../actual_src/stores/overlaystore.js";
import { qw } from "./89748.js";
import l from "./87935.js";
import c from "./37976.js";
import m from "./63696.js";
import u from "./44846.js";
import d from "./92031.js";
import A from "./8573.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import h, { hL } from "./52451.js";
import C from "./72476.js";
import _ from "./5822.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import b from "./45967.js";
import { c as c_1 } from "./80553.js";
class S {
	m_cbOverlayDialogsChanged = new CCallbackList();
	m_rgOverlayDialogRequests = [];
	m_vecOverlayBrowserProtocolRegistrations = [];
	m_cbkOverlayBrowserProtocol = new CCallbackList();
	m_rgMtxBrowsers = [];
	async Init() {
		SteamClient.Overlay.RegisterForActivateOverlayRequests(
			this.OnGameOverlayActivateRequested,
		);
		SteamClient.Overlay.RegisterForOverlayBrowserProtocols(
			this.OnOverlayBrowserProtocol,
		);
		SteamClient.RemotePlay.RegisterForRemoteClientStarted(
			this.RemoteClientStarted,
		);
		OverlayStore.RegisterForBrowserClosed(this.OnOverlayBrowserClosed);
	}
	OnOverlayBrowserClosed(e) {
		this.m_rgOverlayDialogRequests.forEach((t, r, n) => {
			if (t.unRequestingAppID == e.m_unAppID) {
				n.splice(r, 1);
			}
		});
		this.m_cbOverlayDialogsChanged.Dispatch();
	}
	GetInstanceForAppID(e) {
		return a.oy.WindowStore.GetOverlayInstanceWithFallback(e, 0);
	}
	GetInstanceForGameID(e) {
		const t = c.A.fromString(e);
		return a.oy.WindowStore.GetOverlayInstanceWithFallback(t.low, 0);
	}
	RouteNavigateToSteamWeb(e, t) {
		if (b.qL.IsSteamVRRunning && b.qL.IsVRHMDAwake) {
			const e = a.oy.WindowStore.GetVRWindowInstance();
			if (e) {
				e.NavigateToSteamWeb(t);
				c_1(e.GetMainVROverlayKey());
			}
		} else {
			this.GetInstanceForAppID(e.unRequestingAppID).NavigateToSteamWeb(t);
		}
	}
	GetNavigator(e) {
		return this.GetInstanceForAppID(e.unRequestingAppID).Navigator;
	}
	OnGameOverlayActivateRequested(e) {
		const t = a.oy.MainInstanceUIMode;
		if (t != 7 && t != 4) {
			return;
		}

		const { unRequestingAppID, appid } = e;

		AssertMsg(
			unRequestingAppID,
			"OnGameOverlayActivateRequested - no valid requesting appid!",
			e,
		);
		if (e.strDialog.startsWith("steamid/")) {
			e.steamidTarget = e.strDialog.substring(8);
			e.strDialog = "steamid";
		}
		switch (e.strDialog) {
			case "steamid":
				{
					let t = new A.b(e.steamidTarget);
					let r = l.B7.ResolveURL(
						t.BIsIndividualAccount() ? "SteamIDPage" : "GroupSteamIDPage",
						e.steamidTarget,
					);
					this.RouteNavigateToSteamWeb(e, r);
				}
				break;
			case "chat":
				{
					let t = new A.b(e.steamidTarget);
					let n = this.GetInstanceForAppID(unRequestingAppID);
					i.LN.ShowFriendChatDialog(n, t);
				}
				break;
			case "jointrade":
				{
					let t = l.B7.ResolveURL("JoinTrade", e.steamidTarget);
					this.RouteNavigateToSteamWeb(e, t);
				}
				break;
			case "stats":
				{
					let t = l.B7.ResolveURL(
						"UserStatsPage",
						e.steamidTarget,
						unRequestingAppID,
					);
					this.RouteNavigateToSteamWeb(e, t);
				}
				break;
			case "achievements": {
				this.GetNavigator(e).MyAchievements(unRequestingAppID);
				break;
			}
			case "friendadd":
			case "friendremove":
			case "friendrequestaccept":
			case "friendrequestignore":
			case "lobbyinvite":
			case "remoteplaytogetherinvite":
			case "lobbyinviteconnectstring":
			case "asyncnotificationsrequested":
			case "requestplaytime": {
				this.m_rgOverlayDialogRequests.push(e);
				this.m_cbOverlayDialogsChanged.Dispatch();
				break;
			}
			case "store": {
				if (appid == d.sc) {
					this.RouteNavigateToSteamWeb(e, l.B7.GetStoreURL());
				} else {
					switch (e.eFlag) {
						case u.SS.k_EOverlayToStoreFlag_None:
							{
								let t = l.B7.ResolveURL("StoreAppPage", appid);
								this.RouteNavigateToSteamWeb(e, t);
							}
							break;
						case u.SS.k_EOverlayToStoreFlag_AddToCart:
						case u.SS.k_EOverlayToStoreFlag_AddToCartAndShow: {
							let t = l.B7.ResolveURL("StoreAppPageAddToCart", appid, e.eFlag);
							this.RouteNavigateToSteamWeb(e, t);
						}
					}
				}
				break;
			}
			case "friends": {
				this.GetNavigator(e).Chat();
				break;
			}
			case "community": {
				this.RouteNavigateToSteamWeb(e, C.TS.COMMUNITY_BASE_URL);
				break;
			}
			case "settings": {
				this.GetNavigator(e).Settings("General");
				break;
			}
			case "officialgamegroup":
				{
					let t = l.B7.ResolveURL("OfficialGameGroupPage", unRequestingAppID);
					this.RouteNavigateToSteamWeb(e, t);
				}
				break;
			case "leaderboards": {
				if (e.steamidTarget) {
					let t = l.B7.ResolveURL(
						"UserLeaderboardsPage",
						e.steamidTarget,
						unRequestingAppID,
					);
					this.RouteNavigateToSteamWeb(e, t);
				} else {
					let t = l.B7.ResolveURL("GlobalLeaderboardsPage", unRequestingAppID);
					this.RouteNavigateToSteamWeb(e, t);
				}
				break;
			}
			case "remoteplaytogether":
				{
					const t = this.GetNavigator(e);
					if (t.type == "desktop") {
						console.error(
							"Unexpected navigator type when opening Remote Play Together UI",
						);
						break;
					}
					t.RemotePlayTogether();
				}
				break;
			default: {
				if (e.bWebPage) {
					this.AddWebPageRequest(e);
				}
			}
		}
	}
	AddWebPageRequest(e) {
		if (
			a.oy.MainInstanceUIMode == 4 ||
			e.eWebPageMode == u.Sx.k_EActivateGameOverlayToWebPageMode_Modal
		) {
			this.m_rgOverlayDialogRequests.push(e);
			this.m_cbOverlayDialogsChanged.Dispatch();
		} else {
			this.RouteNavigateToSteamWeb(e, e.strDialog);
		}
	}
	OnSteamURLOpenExternalForPID(e) {
		const t = "steam://openexternalforpid/";
		let r = e.indexOf(t);
		if (r != -1) {
			const t = e.substring(r + 27);
			r = t.indexOf("/");
			if (r != -1) {
				const e = t.substring(r + 1);
				const n = {
					bWebPage: true,
					appid: u.w1,
					strDialog: e,
					eWebPageMode: u.Sx.k_EActivateGameOverlayToWebPageMode_Default,
					unRequestingAppID: u.w1,
					steamidTarget: "0",
					eFlag: u.SS.k_EOverlayToStoreFlag_None,
					strConnectString: "",
				};
				this.AddWebPageRequest(n);
				return true;
			}
		}
		return false;
	}
	AddMtxBrowser(e) {
		this.m_rgMtxBrowsers.push(e);
	}
	RemoveMtxBrowser(e) {
		let t = this.m_rgMtxBrowsers.indexOf(e);
		if (t != -1) {
			this.m_rgMtxBrowsers.splice(t, 1);
		}
	}
	OnSteamURLCancelTransaction(e) {
		const t = "steam://checkout_return/paypal_cancel/";
		const r = e.indexOf(t);
		if (r != -1) {
			const t = e.substring(r + 38);
			for (const e of this.m_rgMtxBrowsers) {
				e.GetBrowser()?.PostMessage(
					"Checkout",
					JSON.stringify({
						action: "paypal_cancel",
						transid: t,
					}),
				);
			}
			return true;
		}
		return false;
	}
	OnSteamURLSucceedTransaction(e) {
		const t = "steam://checkout_return/paypal_success/";
		const r = e.indexOf(t);
		if (r != -1) {
			const t = e.substring(r + 39);
			for (const e of this.m_rgMtxBrowsers) {
				e.GetBrowser()?.PostMessage(
					"Checkout",
					JSON.stringify({
						action: "paypal_success",
						transid: t,
					}),
				);
			}
			return true;
		}
		return false;
	}
	OnSteamURL(e) {
		return (
			this.OnSteamURLOpenExternalForPID(e) ||
			this.OnSteamURLCancelTransaction(e) ||
			this.OnSteamURLCancelTransaction(e) ||
			this.OnSteamURLSucceedTransaction(e)
		);
	}
	GetDialogRequestsChangedCallbackList() {
		return this.m_cbOverlayDialogsChanged;
	}
	GetDialogRequests() {
		return this.m_rgOverlayDialogRequests;
	}
	RemoveDialogRequest(e) {
		let t = this.m_rgOverlayDialogRequests.indexOf(e);
		if (t != -1) {
			this.m_rgOverlayDialogRequests.splice(t, 1);
			this.m_cbOverlayDialogsChanged.Dispatch();
		}
	}
	AddFriend(e) {
		return SteamClient.Friends.AddFriend(e.steamidTarget);
	}
	RemoveFriend(e) {
		return SteamClient.Friends.RemoveFriend(e.steamidTarget);
	}
	InviteUserToGame(e, t) {
		return SteamClient.Friends.InviteUserToGame(
			e.ConvertTo64BitString(),
			t.unRequestingAppID,
			t.strConnectString,
		);
	}
	InviteUserToCurrentGame(e, t) {
		return SteamClient.Friends.InviteUserToCurrentGame(
			e.ConvertTo64BitString(),
			t.steamidTarget,
		);
	}
	InviteUserToLobby(e, t) {
		return SteamClient.Friends.InviteUserToLobby(
			e.ConvertTo64BitString(),
			t.steamidTarget,
		);
	}
	InviteUserToRemotePlayTogetherCurrentGame(e) {
		return SteamClient.Friends.InviteUserToRemotePlayTogetherCurrentGame(
			e.ConvertTo64BitString(),
		);
	}
	RemoteClientStarted(e, t) {
		const r = new A.b(qw().GetCurrentUser().strSteamID);
		const n = new A.b(e);
		if (n.GetAccountID() != 0 && n.GetAccountID() != r.GetAccountID()) {
			let e = this.GetInstanceForGameID(t);
			if (e) {
				e.MenuStore.OpenQuickAccessMenu(_.qE.RemotePlayTogetherControls, false);
			}
		}
	}
	OnOverlayBrowserProtocol(e) {
		if (e.bAdded) {
			this.m_vecOverlayBrowserProtocolRegistrations.push({
				m_unAppID: e.unAppID,
				m_strScheme: e.strScheme,
			});
		} else {
			let t = (t) => e.unAppID == t.m_unAppID && e.strScheme == t.m_strScheme;
			FindAndRemoveWhere(this.m_vecOverlayBrowserProtocolRegistrations, t);
		}
		this.m_cbkOverlayBrowserProtocol.Dispatch(e.unAppID);
	}
	GetOverlayBrowserProtocolCallback() {
		return this.m_cbkOverlayBrowserProtocol;
	}
	GetOverlayBrowserProtocols(e) {
		return this.m_vecOverlayBrowserProtocolRegistrations.filter(
			(t) => t.m_unAppID == e,
		);
	}
}
Cg([h.oI], S.prototype, "OnOverlayBrowserClosed", null);
Cg([h.oI], S.prototype, "OnGameOverlayActivateRequested", null);
Cg([h.oI], S.prototype, "OnSteamURLOpenExternalForPID", null);
Cg([h.oI], S.prototype, "OnSteamURLCancelTransaction", null);
Cg([h.oI], S.prototype, "OnSteamURLSucceedTransaction", null);
Cg([h.oI], S.prototype, "OnSteamURL", null);
Cg([h.oI], S.prototype, "RemoteClientStarted", null);
Cg([h.oI], S.prototype, "OnOverlayBrowserProtocol", null);
export const Q = new S();
export function r(e) {
	let [t, setT] = m.useState(OverlayStore.GetDialogRequests());
	const n = m.useCallback(() => {
		let e = OverlayStore.GetDialogRequests();
		setT([...e]);
	}, [setT]);
	hL(OverlayStore.GetDialogRequestsChangedCallbackList(), n);
	return t.filter(
		(t) => t.unRequestingAppID == e || t.unRequestingAppID == u.w1,
	);
}
