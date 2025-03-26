var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./68292.js");
import { AssertMsg } from "../../actual_src/utils/assert.js";
var s = require("./18057.js");
var o = require("./13688.js");
var l = require("./79112.js");
var c = require("./3963.js");
var m = require("./60917.js");
var u = require("./46422.js");
var d = require("./63367.js");
var A = require(/*webcrack:missing*/ "./89193.js");
var p = require(/*webcrack:missing*/ "./90095.js");
var g = require(/*webcrack:missing*/ "./63696.js");
import {
	CLocalizationManager,
	LoadLocalizationStrings,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require(/*webcrack:missing*/ "./43691.js");
class f {
	m_bStartupFinished = false;
	m_bFriendsUIReady = false;
	m_eDesiredPersonaState = undefined;
	m_friendsUIFunctions = undefined;
	m_voiceChatStatus = undefined;
	m_rgPendingOneOnOneVoiceChats = A.sH.array();
	m_currentUserVoiceLevel = 0;
	m_promiseLoadLoc;
	constructor() {
		(0, A.Gn)(this);
	}
	Init() {
		window.addEventListener("message", this.OnMessage);
		SteamClient.Messaging.RegisterForMessages(
			"FriendsUI",
			this.HandleFriendsUIMessages,
		);
		SteamClient.UI.RegisterForStartupFinished(this.OnStartupFinished);
		SteamClient.Friends.RegisterForVoiceChatStatus(
			this.OnVoiceChatStatusChanged,
		);
		d.Dt.RegisterForRunSteamURL(7, "open/friends", () => {
			this.ShowPopupFriendsList(true);
		});
		this.m_promiseLoadLoc = this.LoadLocalizationStrings();
	}
	GetCurrentUserStatusInterface() {
		return this.m_friendsUIFunctions?.GetCurrentUserStatusInterface() ?? null;
	}
	GetVoiceInterface() {
		return this.m_friendsUIFunctions?.GetVoiceInterface() ?? null;
	}
	BShowRemotePlayQuickAccessControls() {
		return (
			this.m_friendsUIFunctions?.BShowRemotePlayQuickAccessControls() ?? false
		);
	}
	OnMessage(e) {
		if (typeof e.data == "object" && e.data.message != null) {
			switch (e.data.message) {
				case "ChatJavascriptInitialized":
					break;
				case "FriendsUIReady":
					this.m_bFriendsUIReady = true;
					if (this.m_friendsUIFunctions.SetEmoticonTrackerCallback) {
						this.m_friendsUIFunctions.SetEmoticonTrackerCallback(
							this.TrackEmoticonUsage,
						);
					}
					if (this.m_friendsUIFunctions.SetStickerTrackerCallback) {
						this.m_friendsUIFunctions.SetStickerTrackerCallback(
							this.TrackStickerUsage,
						);
					}
					if (this.m_friendsUIFunctions.GetVoiceInterface) {
						let e = this.m_friendsUIFunctions.GetVoiceInterface();
						if (e.RegisterForPendingOneOnOneVoiceChatRequests) {
							e.RegisterForPendingOneOnOneVoiceChatRequests(
								this.OnPendingOneOnOneVoiceChatRequests,
							);
						}
						if (e.RegisterForCurrentUserVoiceLevel) {
							e.RegisterForCurrentUserVoiceLevel(
								this.OnCurrentUserVoiceLevelChanged,
							);
						}
					}
					(0, i.PR)().RegisterForSteamURLs((e, t) =>
						d.Dt.RegisterForRunSteamURL([7, 4], e, (r, n) => {
							t(n, ...(0, d.zK)(e, n).rgParts);
						}),
					);
					if (this.m_eDesiredPersonaState != null) {
						console.log(
							"FriendsUI is now ready, processing pended desired persona state " +
								this.m_eDesiredPersonaState,
						);
						this.SetDesiredPersonaState(this.m_eDesiredPersonaState);
					}
					break;
				case "SignInRequest":
					this.SetDesiredPersonaState(
						this.m_friendsUIFunctions.GetPreferredPersonaState(),
					);
					break;
				case "CloseSideMenus":
					u.oy.CloseSideMenus();
			}
		}
	}
	TrackEmoticonUsage(e, t) {
		c.Nb.EmoticonStore.TrackEmoticonUsage(e, t);
	}
	TrackStickerUsage(e, t) {
		c.Nb.EmoticonStore.TrackStickerUsage(e, t);
	}
	OnPendingOneOnOneVoiceChatRequests(e) {
		this.m_rgPendingOneOnOneVoiceChats.length;
		for (let t of this.m_rgPendingOneOnOneVoiceChats) {
			if (e.find((e) => t == e) === undefined) {
				m.Tu.IncomingVoiceChat(t, false);
			}
		}
		for (let t of e) {
			if (
				this.m_rgPendingOneOnOneVoiceChats.find((e) => t == e) === undefined
			) {
				m.Tu.IncomingVoiceChat(t, true);
			}
		}
		this.m_rgPendingOneOnOneVoiceChats.replace(e);
	}
	BHasPendingOneOnOneVoiceChatRequests() {
		return this.m_rgPendingOneOnOneVoiceChats.length > 0;
	}
	OnCurrentUserVoiceLevelChanged(e) {
		this.m_currentUserVoiceLevel = e;
	}
	GetCurrentUserVoiceLevel() {
		return this.m_currentUserVoiceLevel;
	}
	GetVoiceChatStatus() {
		return this.m_voiceChatStatus;
	}
	HandleFriendsUIMessages(e, t, r) {
		if (e == "FriendsUI" && u.oy.IsGamepadUIWindowActive()) {
			switch (t) {
				case "ChatTabActivated":
					{
						const e = u.oy.ActiveWindowInstance;
						const t = e.Navigator;
						if ((0, o.dq)(t)) {
							t.Chat();
							e.MenuStore?.CloseSideMenus();
						}
					}
					break;
				case "AcceptedGameInvite":
					u.oy.NavigateToRunningApp();
					u.oy.WindowStore.OverlayWindows.forEach((e) =>
						e.NavigateToRunningApp(),
					);
					break;
				case "AcceptedRemotePlayInvite":
					{
						let e = JSON.parse(r).id;
						u.oy.RemotePlayTogetherClientStarted(e);
					}
					break;
				case "NavigateToInvites": {
					const e = (0, l.lF)();
					if ((0, o.dq)(e)) {
						e.Invites();
					}
				}
			}
		}
	}
	ShowPopupFriendsList(e) {
		if (this.m_friendsUIFunctions?.ShowPopupFriendsList) {
			this.m_friendsUIFunctions.ShowPopupFriendsList(e);
		}
	}
	ShowFriendChatDialog(e, t) {
		const r = e.Navigator;
		if ((0, o.dq)(r)) {
			r.Chat();
			e.MenuStore?.CloseSideMenus();
		}
		let n = (0, i.bg)().GetFriend(t.GetAccountID());
		n?.OpenChatDialog(e.params.browserInfo);
	}
	ShowChatRoomGroupDialog(e, t, r) {
		const n = u.oy.ActiveWindowInstance;
		const a = n.Navigator;
		if ((0, o.dq)(a)) {
			a.Chat();
			n.MenuStore?.CloseSideMenus();
		}
		(0, i.PR)().ShowChatRoomGroupDialog(e, t, r);
	}
	ShowInvitesDialog(e) {
		e.Navigate(s.BV.GamepadUI.Invites());
	}
	SetDesiredPersonaState(e) {
		this.m_eDesiredPersonaState = undefined;
		let t = this.GetCurrentUserStatusInterface();
		if (t) {
			switch (e) {
				case 1:
					t.SetUserOnline();
					break;
				case 3:
					t.SetUserAway();
					break;
				case 7:
					t.SetUserInvisible();
					break;
				case 0:
					t.SetUserOffline();
			}
		} else {
			this.m_eDesiredPersonaState = e;
		}
	}
	async OnStartupFinished() {
		if (!(await SteamClient.WebChat.GetSignIntoFriendsOnStart())) {
			this.m_eDesiredPersonaState = 0;
		}
		let e = u.oy.MainInstanceUIMode;
		let t = e == 4 || e == 7;
		AssertMsg(t, "Initializing FriendsChatStore in unexpected mode", e);
		this.CreateChatApp();
	}
	async AwaitStartupFinished() {
		await (0, A.z7)(() => this.m_bStartupFinished, {
			timeout: 10000,
		});
		AssertMsg(this.m_bStartupFinished, "FriendsUI startup not complete!");
	}
	OnVoiceChatStatusChanged(e) {
		this.m_voiceChatStatus = e;
	}
	async LoadLocalizationStrings() {
		const e = CLocalizationManager.GetLanguageFallback(_.TS.LANGUAGE);
		const t = _.TS.LANGUAGE === e;
		const [n, i] = await [
			require("./91525.js")(`./friendsui_${_.TS.LANGUAGE}.json`),
			t ? {} : require("./91525.js")(`./friendsui_${e}.json`),
		];
		LocalizationManager.AddTokens(n, i);
	}
	async CreateChatApp() {
		await this.m_promiseLoadLoc;
		this.m_friendsUIFunctions = (0, i.x9)(true);
		this.m_friendsUIFunctions.InstrumentWindow(document.defaultView);
		this.m_bStartupFinished = true;
	}
	InstrumentWindow(e) {
		this.m_friendsUIFunctions?.InstrumentWindow(e);
	}
	get startup_finished() {
		return this.m_bStartupFinished;
	}
	get loaded() {
		return this.m_bFriendsUIReady;
	}
	get signedOut() {
		return this.GetCurrentUserStatusInterface()?.GetPersonaState() == 0;
	}
	RenderTabSetComponent() {
		return this.m_friendsUIFunctions?.TabSetRoot({});
	}
	RenderFriendsListComponent(e) {
		if (e.bQuickAccess && this.m_friendsUIFunctions.FriendsListQuickAccess) {
			return this.m_friendsUIFunctions.FriendsListQuickAccess({});
		} else {
			return this.m_friendsUIFunctions.FriendsListRoot({});
		}
	}
	BCanRenderFriendsListAndChatsCombined() {
		return this.m_friendsUIFunctions?.FriendsListAndChatsRoot;
	}
	RenderFriendsListAndChatsComponent() {
		if (this.BCanRenderFriendsListAndChatsCombined()) {
			return this.m_friendsUIFunctions.FriendsListAndChatsRoot({});
		} else {
			return this.m_friendsUIFunctions.FriendsListRoot({});
		}
	}
	RenderFriendsListVoiceControls() {
		if (this.m_friendsUIFunctions?.VoiceChatControlsRoot) {
			return this.m_friendsUIFunctions.VoiceChatControlsRoot({});
		}
	}
	RenderRemotePlayTogetherControls() {
		if (this.m_friendsUIFunctions?.RemotePlayTogetherControlsRoot) {
			return this.m_friendsUIFunctions.RemotePlayTogetherControlsRoot({});
		}
	}
	RenderFriendsVoiceChatHeader(e) {
		if (this.m_friendsUIFunctions?.VoiceChatHeaderRoot) {
			return this.m_friendsUIFunctions.VoiceChatHeaderRoot(e);
		}
	}
	RenderFriendsUnreadChatMessagesHeader(e) {
		if (this.m_friendsUIFunctions?.UnreadChatMessagesHeaderRoot) {
			return this.m_friendsUIFunctions.UnreadChatMessagesHeaderRoot(e);
		}
	}
	RenderInvitesList() {
		if (this.m_friendsUIFunctions?.InvitesList) {
			return this.m_friendsUIFunctions.InvitesList({});
		}
	}
}
export function _h() {
	return (0, p.q3)(() => LN.BShowRemotePlayQuickAccessControls());
}
export function wm() {
	return (0, p.q3)(() => {
		let e = LN.GetVoiceChatStatus();
		return e?.bVoiceChatActive === true;
	});
}
export function cO() {
	return (0, p.q3)(() => LN.BHasPendingOneOnOneVoiceChatRequests());
}
export function o2() {
	return (0, p.q3)(() => LN.GetCurrentUserVoiceLevel());
}
export function PG(e) {
	(0, g.useEffect)(() => {
		if (!e) {
			return;
		}
		const t = new AbortController();
		(async function () {
			const r = (0, A.z7)(() => LN.loaded);
			t.signal.onabort = () => r.cancel();
			await r;
			LN.InstrumentWindow(e);
		})();
		return () => t.abort();
	}, [e]);
}
(0, n.Cg)([A.sH], f.prototype, "m_bStartupFinished", undefined);
(0, n.Cg)([A.sH], f.prototype, "m_bFriendsUIReady", undefined);
(0, n.Cg)([A.sH], f.prototype, "m_voiceChatStatus", undefined);
(0, n.Cg)([A.sH], f.prototype, "m_currentUserVoiceLevel", undefined);
(0, n.Cg)([A.XI.bound], f.prototype, "OnMessage", null);
(0, n.Cg)([C.oI], f.prototype, "TrackEmoticonUsage", null);
(0, n.Cg)([C.oI], f.prototype, "TrackStickerUsage", null);
(0, n.Cg)([C.oI], f.prototype, "OnPendingOneOnOneVoiceChatRequests", null);
(0, n.Cg)([C.oI], f.prototype, "OnCurrentUserVoiceLevelChanged", null);
(0, n.Cg)([C.oI], f.prototype, "HandleFriendsUIMessages", null);
(0, n.Cg)([C.oI], f.prototype, "OnStartupFinished", null);
(0, n.Cg)([C.oI], f.prototype, "OnVoiceChatStatusChanged", null);
export const LN = new f();
