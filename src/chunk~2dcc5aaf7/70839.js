import {
	MoveElement,
	CountMatches,
} from "../../actual_src/utils/arrayutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a from "./95773.js";
import s, { Gn, fm } from "./89193.js";
import o, { Dp } from "./736.js";
import d from "./3756.js";
import A, { u as u_1 } from "./17385.js";
import { BK } from "./85243.js";
import { w } from "./49455.js";
import h from "./79769.js";
import C from "./52451.js";
import { Pr } from "./72476.js";
let m = 0;
class u {
	m_id = undefined;
	m_vecTabs = s.sH.array(null, {
		deep: false,
	});
	m_activeTab = undefined;
	m_browserContext;
	constructor(e) {
		Gn(this);
		this.m_id = m++;
		this.m_browserContext = e;
		this.m_activeTab = undefined;
	}
	GetBrowserContext() {
		return this.m_browserContext;
	}
	GetTitle() {
		if (this.m_activeTab) {
			if (this.tabCount == 2) {
				return (0, Localize)(
					"#WindowTitle_ChatTabTitle",
					this.m_activeTab.GetTabName(),
				);
			} else if (this.tabCount > 2) {
				return (0, Localize)(
					"#WindowTitle_ChatTabTitlePlural",
					this.m_activeTab.GetTabName(),
					this.tabCount - 1,
				);
			} else {
				return this.m_activeTab.GetTabName();
			}
		} else {
			return "";
		}
	}
	OnWindowFocus() {
		if (this.m_activeTab) {
			this.m_activeTab.OnTabFocus();
		}
	}
	FocusActiveTab() {
		if (this.m_activeTab) {
			this.m_activeTab.OnTabFocus();
		}
	}
	get tabs() {
		return this.m_vecTabs;
	}
	get tabCount() {
		return this.m_vecTabs.length;
	}
	get activeTab() {
		return this.m_activeTab;
	}
	GetTabSetIdentifier() {
		return this.m_vecTabs.map((e) => e.GetUniqueID()).join("_");
	}
	GetTabForChat(e) {
		for (let t of this.m_vecTabs) {
			if (t.IsTabForChat(e)) {
				return t;
			}
		}
		return null;
	}
	GetTabByUniqueID(e) {
		for (let t of this.m_vecTabs) {
			if (t.GetUniqueID() == e) {
				return t;
			}
		}
		return null;
	}
	BHasTab(e) {
		return this.m_vecTabs.includes(e);
	}
	AddTab(e) {
		if (!this.m_vecTabs.includes(e)) {
			this.m_vecTabs.push(e);
			if (!this.m_activeTab && this.m_vecTabs.length > 0) {
				this.m_activeTab = this.m_vecTabs[0];
			}
		}
	}
	ActivateTab(e) {
		if (this.m_vecTabs.includes(e)) {
			if (this.activeTab && this.activeTab != e) {
				this.activeTab.OnTabDeactivate();
			}
			this.m_activeTab = e;
			e.OnTabActivate();
			this.Focus();
			if (Dp("Messaging.RegisterForMessages")) {
				SteamClient.Messaging.PostMessage(
					"FriendsUI",
					"ChatTabActivated",
					JSON.stringify({
						id: e.GetUniqueID(),
					}),
				);
			}
		} else {
			console.log("Tab not found");
		}
	}
	ActivateNextTab() {
		let e = this.m_vecTabs.indexOf(this.m_activeTab);
		e = (e + 1) % this.m_vecTabs.length;
		this.ActivateTab(this.m_vecTabs[e]);
	}
	ActivatePreviousTab() {
		let e = this.m_vecTabs.indexOf(this.m_activeTab);
		e = (e + this.m_vecTabs.length - 1) % this.m_vecTabs.length;
		this.ActivateTab(this.m_vecTabs[e]);
	}
	DeactivateTab(e) {
		if (this.m_vecTabs.includes(e)) {
			if (this.activeTab && this.activeTab === e) {
				e.OnTabDeactivate();
				this.m_activeTab = undefined;
			}
		} else {
			console.log("Tab not found");
		}
	}
	RemoveTab(e) {
		let t = this.m_vecTabs.indexOf(e);
		if (t == -1) {
			return false;
		}
		let r = e && e == this.m_activeTab;
		this.m_vecTabs.splice(t, 1);
		if (r) {
			if (this.m_vecTabs.length) {
				let e;
				for (let t of this.m_vecTabs) {
					if (!e || t.GetTimeLastActivate() > e.GetTimeLastActivate()) {
						e = t;
					}
				}
				this.m_activeTab = e || this.m_vecTabs[Math.max(t - 1, 0)];
			} else {
				this.m_activeTab = undefined;
			}
		}
		if (this.m_vecTabs.length == 0) {
			a.xm.UIStore.CloseTabSet(this);
		}
		return true;
	}
	MoveTabAfter(e, t) {
		let r = this.m_vecTabs.indexOf(t);
		if (r != -1) {
			this.MoveTabToIndex(e, r + 1);
		}
	}
	MoveTabToIndex(e, t) {
		let r = this.m_vecTabs.indexOf(e);
		if (r != -1) {
			MoveElement(this.m_vecTabs, r, Math.min(t, this.m_vecTabs.length - 1));
		}
	}
	Focus() {
		a.xm.UIStore.FocusTabSet(this);
	}
	OnPopupClosed(e) {
		if (e) {
			a.xm.UIStore.SetSuppressBrowserContextBroadcasting(true);
		}
		this.CloseAllTabs();
		a.xm.UIStore.OnTabSetClosed(this);
		if (e) {
			a.xm.UIStore.SetSuppressBrowserContextBroadcasting(false);
		}
	}
	CloseAllTabs() {
		this.m_activeTab = undefined;
		for (let e of this.m_vecTabs) {
			a.xm.UIStore.CloseTab(this.m_browserContext, e, true);
		}
		this.m_vecTabs.clear();
	}
	get is_popup_active() {
		return a.xm.UIStore.BIsTabSetActive(this);
	}
	get is_popup_visible() {
		return a.xm.UIStore.BIsTabSetVisible(this);
	}
	get is_popup_focused() {
		return a.xm.UIStore.BIsTabSetFocused(this);
	}
	Serialize() {
		let e = [];
		for (let t of this.m_vecTabs) {
			if (!t.GetUniqueID().startsWith("br")) {
				e.push(t.GetUniqueID());
			}
		}
		return {
			tabs: e,
			active_tab: this.activeTab && this.activeTab.GetUniqueID(),
		};
	}
}
Cg([s.sH], u.prototype, "m_id", undefined);
Cg([s.sH], u.prototype, "m_activeTab", undefined);
Cg([s.XI], u.prototype, "AddTab", null);
Cg([s.XI], u.prototype, "ActivateTab", null);
Cg([s.XI], u.prototype, "ActivateNextTab", null);
Cg([s.XI], u.prototype, "ActivatePreviousTab", null);
Cg([s.XI], u.prototype, "DeactivateTab", null);
Cg([s.XI], u.prototype, "RemoveTab", null);
Cg([s.XI], u.prototype, "OnPopupClosed", null);
Cg([s.XI], u.prototype, "CloseAllTabs", null);
const f = "ChatStorePopupState";
export let Jw;
export let OC;
((e) => {
	e[(e.Favorites = 0)] = "Favorites";
	e[(e.FriendsList = 1)] = "FriendsList";
	e[(e.GroupChats = 2)] = "GroupChats";
	e[(e.RecentMessages = 3)] = "RecentMessages";
	e[(e.FirstTab = 0)] = "FirstTab";
	e[(e.MaxTab = 3)] = "MaxTab";
})((Jw ||= {}));
export class Vi {
	m_chatStore;
	m_bRestoredPopupState = false;
	m_vecShowGroupsAfterRestorePopup = [];
	m_iLastChatPopupID = 0;
	m_mapChatBrowserContexts = new Map();
	m_bSuppressBrowserContextBroadcasting = false;
	m_bParentalLocked = undefined;
	m_stateToRestoreFrom = undefined;
	m_bRestoringPopups = false;
	m_bShuttingDown = false;
	m_bTheaterMode = false;
	m_mapFriendChatBroadcastVisible = new Map();
	m_nTabActivationCount = 0;
	m_bShowWinterSaleUI = false;
	m_eFriendsListSteamDeckActiveTab = Jw.FriendsList;
	m_FriendsListSteamDeckActiveTabCallbackList = new h.lu();
	m_overlayCreatedCallbackList = new h.lu();
	GetRootChatPerContextData() {
		return this.GetPerContextChatData(A.m);
	}
	constructor(e) {
		Gn(this);
		this.m_chatStore = e;
	}
	Init() {
		a.xm.AddPopupManagerShutdownCallback(() => {
			this.SerializePopupState();
			this.m_bShuttingDown = true;
		});
		fm(() => {
			let e =
				a.xm.ParentalStore.BIsFriendsBlocked() ||
				a.xm.SettingsStore.IsSteamInTournamentMode();
			this.OnFriendsParentalLockChanged(e);
		});
		this.StartWinterSaleCountdown();
	}
	OnFriendsParentalLockChanged(e) {
		if (this.m_bParentalLocked === false && e) {
			this.SerializePopupState(true);
			this.m_mapChatBrowserContexts.forEach((e) => {
				e.CloseAllPopups();
			});
			this.m_bRestoredPopupState = false;
		} else if (this.m_bParentalLocked === true && !e) {
			this.RestorePopupState();
		}
		this.m_bParentalLocked = e;
	}
	ShowFriendChatDialog(e, t, r = true, n = true) {
		let i = this.m_chatStore.GetFriendChat(t);
		if (r && i) {
			this.ShowAndOrActivateChat(e, i, n);
		}
		return i;
	}
	ShowFriendChatDialogWhenReady(e, t, r = true, n = true) {
		this.ShowFriendChatDialog(e, t, r, n);
	}
	ShowFriendChatDialogAndStartVoice(e, t) {
		let r = this.ShowFriendChatDialog(e, t, true, true);
		if (!r.BVoiceActive()) {
			r.ToggleVoiceChat();
		}
		return r;
	}
	ShowAndOrActivateChat(e, t, r) {
		if (t instanceof d.d) {
			let n = this.m_chatStore.GetChatRoomGroup(t.GetParentGroupID());
			if (!n) {
				w(false, "Can't find group for chat room ");
				return null;
			}
			let i = this.ShowAndOrActivateChatRoomGroup(e, n, r);
			if (i) {
				i.SelectChat(t.GetRoomID());
			}
			return i;
		}
		let n = this.ShowAndOrActivateTabByID(e, t.unique_id, r);
		return n?.GetChatView();
	}
	ShowAndOrActivateChatForTabset(e, t, r) {
		let n = e.GetTabForChat(t);
		if (!n) {
			this.CreateNewTabFromUniqueID(e, t.unique_id, false);
		}
		if (r) {
			e.ActivateTab(n);
		}
	}
	IsChatRoomGroupActive(e, t) {
		let r = this.GetPerContextChatData(e);
		let n = this.GetTabSetByUniqueID(r, t.unique_id);
		return !!n && n.tabSet.activeTab == n.tab;
	}
	SetTheaterMode(e) {
		this.m_bTheaterMode = e;
	}
	GetTheaterMode() {
		return this.m_bTheaterMode;
	}
	SetFriendBroadcastVisible(e, t) {
		this.m_mapFriendChatBroadcastVisible.set(e, t);
	}
	IsFriendBroadcastVisible(e) {
		return this.m_mapFriendChatBroadcastVisible.get(e);
	}
	ShowAndOrActivateChatRoomGroup(e, t, r) {
		if (t.BIsCurrentUserAMember()) {
			return this.ShowAndOrActivateTabByID(e, t.unique_id, r);
		} else {
			console.log("Failed to activate", t, "- user is not a member.");
			return null;
		}
	}
	ShowAndOrActivateChatRoomGroupWhenReady(e, t, r) {
		this.ShowAndOrActivateChatRoomGroup(e, t, r);
	}
	ShowUnackedGroup(e) {
		if (this.m_bRestoredPopupState) {
			this.ShowAndOrActivateChatRoomGroup(
				a.xm?.GetDefaultBrowserContext() ?? A.m,
				e,
				false,
			);
		} else {
			this.m_vecShowGroupsAfterRestorePopup.push(e);
		}
	}
	ShowOrActivateBroadcast(e, t, r) {
		let n = `br${t}`;
		return this.ShowAndOrActivateTabByID(e, n, r);
	}
	CloseTabByID(e, t) {
		if (t) {
			this.CloseTabByIDInContext(t, e);
		} else {
			this.m_mapChatBrowserContexts.forEach((t) => {
				this.CloseTabByIDInContext(t.browser_context, e);
			});
		}
	}
	ReplaceFriendChatWithGroup(e, t, r) {
		let n = this.GetPerContextChatData(e);
		let i = this.GetTabSetByUniqueID(n, r.unique_id);
		if (!i) {
			this.ShowAndOrActivateChatRoomGroup(e, r, true);
			i = this.GetTabSetByUniqueID(n, r.unique_id);
		}
		w(i, "Failed to find group tab");
		let a = this.GetTabSetByUniqueID(n, t.chat.unique_id);
		if (!a) {
			return;
		}
		let i_tab = i.tab;
		let a_tabSet = a.tabSet;
		if (i.tabSet != a_tabSet) {
			i.tabSet.RemoveTab(i_tab);
			a_tabSet.AddTab(i_tab);
		}
		a_tabSet.MoveTabAfter(i_tab, t);
		this.CloseTab(e, t);
		this.ShowAndOrActivateChatRoomGroup(e, r, true);
	}
	ForEachTabSet(e, t) {
		if (e.IsFriendsListSingleWindow() && e.default_tabset.tabCount > 0) {
			t(e.default_tabset);
		}
		for (let r of Array.from(e.popup_list)) {
			t(r.tab_set);
		}
	}
	CloseTab(e, t, r = false) {
		let n = this.GetPerContextChatData(e);
		this.ForEachTabSet(n, (i) => {
			if (i.BHasTab(t)) {
				if (!r) {
					i.RemoveTab(t);
				}
				if (t.IsVoiceActive()) {
					a.xm.ShowCloseActiveVoiceConfirmation(e, n.GetPopupForTabSet(i));
				}
			}
		});
		this.BroadcastCloseTabToAllBrowserContexts(e, t.GetUniqueID());
		t.OnTabClosed();
		if (n.IsFriendsListSingleWindow() && n.default_tabset.tabCount == 0) {
			n.responsive_window_state.SetActiveView(OC.FriendsList);
			this.SetTheaterMode(false);
			n.SetFriendsListCollapsed(false);
		}
		a.xm.UIStore.SerializePopupState();
	}
	GetResponsiveWindowState(e) {
		return this.GetPerContextChatData(e).responsive_window_state;
	}
	CloseTabByIDInContext(e, t) {
		let r = this.GetPerContextChatData(e);
		let n = this.GetTabSetByUniqueID(r, t);
		if (n) {
			n.tabSet.RemoveTab(n.tab);
			n.tab.OnTabClosed();
			this.BroadcastCloseTabToAllBrowserContexts(e, t);
		}
	}
	ShowAndOrActivateTabByID(e, t, r = true) {
		let n;
		let i = this.GetPerContextChatData(e);
		let s = this.GetTabSetByUniqueID(i, t);
		if (s) {
			if (r) {
				s.tabSet.ActivateTab(s.tab);
			}
			n = s.tab;
		} else {
			let s = a.xm.SettingsStore.BAlwaysShowChatsInNewWindow();
			if (!i.BUsePopups() || (!s && i.default_tabset.is_popup_active)) {
				n = this.CreateNewTabFromUniqueID(i.default_tabset, t, r);
			} else {
				let o;
				o = s && i.default_tabset.tabCount != 0 ? new u(e) : i.default_tabset;
				n = this.CreateNewTabFromUniqueID(o, t, r);
				if (!n) {
					return null;
				}
				let l = o == i.default_tabset;
				if (l && i.IsFriendsListSingleWindow()) {
					a.xm.ShowPopupFriendsList(e, !r, r);
				} else if (
					!l ||
					(!i.IsFriendsListSingleWindow() && !o.is_popup_active)
				) {
					const t = !Pr() && !r;
					let n = a.xm.CreateChatPopup(
						e,
						this.GetNextChatPopupID(),
						o,
						undefined,
						undefined,
						t,
					);
					n.Show(r);
					i.AddPopup(o, n);
					this.SerializePopupState();
				}
			}
		}
		if (n && r) {
			i.responsive_window_state.SetActiveView(OC.Chat);
		}
		a.xm.UIStore.SerializePopupState();
		if (r) {
			this.m_nTabActivationCount++;
		}
		return n;
	}
	GetTabSetByUniqueID(e, t) {
		if (!e) {
			return null;
		}
		let r = e.GetTabSetForId(t);
		if (r) {
			return {
				tabSet: r,
				tab: r.GetTabByUniqueID(t),
			};
		} else {
			return null;
		}
	}
	BIsTabSetActive(e) {
		let t = this.GetPerContextChatData(e.GetBrowserContext());
		if (t) {
			return t.BIsTabSetActive(e);
		}
	}
	BIsTabSetVisible(e) {
		let t = this.GetPerContextChatData(e.GetBrowserContext());
		if (t) {
			return t.BIsTabSetVisible(e);
		}
	}
	BIsTabSetFocused(e) {
		let t = this.GetPerContextChatData(e.GetBrowserContext());
		if (t) {
			return t.BIsTabSetFocused(e);
		}
	}
	GetAppContainerForChat(e) {
		let t = this.GetRootChatPerContextData();
		let r = null;
		if (e instanceof d.d) {
			let n = this.m_chatStore.GetChatRoomGroup(e.GetParentGroupID());
			if (n) {
				r = this.GetTabSetByUniqueID(t, n.unique_id);
			}
		} else {
			r = this.GetTabSetByUniqueID(t, e.unique_id);
		}
		if (!r || !r.tabSet) {
			return null;
		}
		let n = t.GetPopupForTabSet(r.tabSet);
		if (n) {
			if (n.popup) {
				return n.popup.container;
			} else {
				return null;
			}
		} else if (t.IsTabSetInFriendListWindow(r.tabSet)) {
			return t.friends_list_window;
		} else {
			return null;
		}
	}
	FlashChatWindow(e, t) {
		let r = this.GetAppContainerForChat(e);
		if (r && !r.BIsClosed()) {
			r.FlashWindow(t);
		}
	}
	IsChatWindowMinimized(e) {
		let t = this.GetAppContainerForChat(e);
		if (!t || t.BIsClosed()) {
			return Promise.resolve(false);
		} else {
			return t.IsMinimized();
		}
	}
	GetContextKey(e) {
		if (u_1(e, A.m) && e.m_eUIMode !== 4) {
			return "ROOT";
		} else {
			return `${e.m_unPID}/${e.m_eUIMode}`;
		}
	}
	GetPerContextChatData(e) {
		w(
			a.xm.ready_to_render || this.m_bRestoringPopups,
			"GetPerContextChatData called before ready",
			e,
		);
		const t = this.GetContextKey(e);
		let r = this.m_mapChatBrowserContexts.get(t);
		if (!r) {
			let n = a.xm.BIsValidBrowserContext(e);
			r = new v(e);
			if (n) {
				w(
					e.m_unPID == 0 || e.m_eUIMode !== undefined,
					"GetPerContextChatData - creating context for browser where uimode is undefined! This can cause problems in other places!",
				);
				this.m_mapChatBrowserContexts.set(t, r);
			}
		}
		return r;
	}
	BHasPerContextChatData(e) {
		const t = this.GetContextKey(e);
		return this.m_mapChatBrowserContexts.has(t);
	}
	GetAllBrowserContexts() {
		let e = [];
		this.m_mapChatBrowserContexts.forEach((t) => e.push(t.browser_context));
		return e;
	}
	GetDefaultTabSetForContext(e) {
		return this.GetPerContextChatData(e).default_tabset;
	}
	OnOverlayBrowserCreated(e, t, r) {
		this.m_overlayCreatedCallbackList.Dispatch(e);
		let n = this.GetPerContextChatData(e);
		if (!n) {
			return;
		}
		n.SetScreenInfo(t, r);
		n.SetFriendsListSingleWindowMode(
			a.xm.SettingsStore.BSingleWindowModeEnabled(),
		);
		let i = this.GetRootChatPerContextData();
		if (i) {
			if (!n.IsFriendsListSingleWindow()) {
				this.ForEachTabSet(i, (e) => {
					let t = new u(n.browser_context);
					e.tabs.forEach((r) => {
						let n = e.activeTab == r;
						this.CreateNewTabFromUniqueID(t, r.GetUniqueID(), n);
					});
					let r = a.xm.CreateChatPopup(
						n.browser_context,
						this.GetNextChatPopupID(),
						t,
						undefined,
						undefined,
						false,
					);
					r.Show(false);
					n.AddPopup(t, r);
				});
			}
		}
	}
	RegisterForOverlayCreated(e) {
		const { Unregister } = this.m_overlayCreatedCallbackList.Register(e);
		return Unregister;
	}
	OnOverlayBrowserChanged(e, t, r) {
		const n = {
			...e,
			m_eUIMode: e.m_eUIMode ?? (a.xm.IsGamepadUIActive() ? 4 : 0),
		};
		let i = this.GetPerContextChatData(n);
		if (i) {
			i.SetScreenInfo(t, r);
		}
	}
	OnOverlayBrowserClosed(e) {
		let t = this.GetPerContextChatData(e);
		if (!t) {
			return;
		}
		w(
			e.m_nBrowserID == t.browser_context.m_nBrowserID,
			"Mismatch found in OnOverlayBrowserClosed",
		);
		const r = this.GetContextKey(e);
		this.m_mapChatBrowserContexts.delete(r);
		if (e.m_unPID) {
			for (const t of this.m_mapChatBrowserContexts.keys()) {
				if (t.startsWith(e.m_unPID.toString())) {
					this.m_mapChatBrowserContexts.delete(t);
				}
			}
		}
	}
	BShouldSuppressBrowserContextBroadcasting(e) {
		return (
			!!i.TS.IN_CHROMEOS ||
			!!this.m_bSuppressBrowserContextBroadcasting ||
			!!this.m_bSuppressBrowserContextBroadcasting ||
			!this.BHasPerContextChatData(e)
		);
	}
	SetSuppressBrowserContextBroadcasting(e) {
		this.m_bSuppressBrowserContextBroadcasting = e;
	}
	BroadcastNewTabToAllBrowserContexts(e, t) {
		if (!this.BShouldSuppressBrowserContextBroadcasting(e)) {
			this.SetSuppressBrowserContextBroadcasting(true);
			this.m_mapChatBrowserContexts.forEach((r) => {
				if (u_1(r.browser_context, e)) {
					return;
				}
				if (e.m_eUIMode == 4 && r.browser_context.m_eUIMode !== e.m_eUIMode) {
					return;
				}
				let n = !u_1(r.browser_context, A.m);
				this.ShowAndOrActivateTabByID(r.browser_context, t, n);
			});
			this.SetSuppressBrowserContextBroadcasting(false);
		}
	}
	BroadcastCloseTabToAllBrowserContexts(e, t) {
		if (this.BShouldSuppressBrowserContextBroadcasting(e)) {
			return;
		}
		if (u_1(e, A.m)) {
			this.BroadcastCloseTabToAllBrowserContexts_Internal(e, t);
			return;
		}
		let r = this.GetPerContextChatData(e);
		if (r && u_1(e, r.browser_context)) {
			this.BroadcastCloseTabToAllBrowserContexts_Internal(e, t);
		}
	}
	BroadcastCloseTabToAllBrowserContexts_Internal(e, t) {
		if (!this.BShouldSuppressBrowserContextBroadcasting(e)) {
			this.SetSuppressBrowserContextBroadcasting(true);
			this.m_mapChatBrowserContexts.forEach((r) => {
				if (!u_1(r.browser_context, e)) {
					this.CloseTabByIDInContext(r.browser_context, t);
				}
			});
			this.SetSuppressBrowserContextBroadcasting(false);
		}
	}
	CreateNewTabFromUniqueID(e, t, r, n = false) {
		let i = a.xm.CreateNewTabFromUniqueID(e, t, this.m_bRestoringPopups, n);
		if (i) {
			e.AddTab(i);
			this.BroadcastNewTabToAllBrowserContexts(e.GetBrowserContext(), t);
			if (r) {
				e.ActivateTab(i);
			}
			return i;
		} else {
			return null;
		}
	}
	GetNextChatPopupID() {
		return `ChatWindow_${this.m_iLastChatPopupID++}`;
	}
	BIsFriendsListSingleWindow(e) {
		let t = this.GetPerContextChatData(e);
		return !t.BUsePopups() || t.IsFriendsListSingleWindow();
	}
	BIsFriendsListEmbedded(e) {
		return this.GetPerContextChatData(e).BIsFriendsListEmbedded();
	}
	BIsFriendsListCollapsed(e) {
		let t = this.GetPerContextChatData(e);
		return t.IsFriendsListSingleWindow() && t.IsFriendsListCollapsed();
	}
	SetFriendsListCollapsed(e, t) {
		this.GetPerContextChatData(e).SetFriendsListCollapsed(t);
	}
	ConvertDefaultTabSetToPopup(e) {
		let t = this.GetPerContextChatData(e);
		if (t.default_tabset.tabCount) {
			return (
				r ||
				((r = a.xm.CreateChatPopup(
					e,
					this.GetNextChatPopupID(),
					t.default_tabset,
					t.cached_popup_window_restore_details,
					undefined,
					false,
				)),
				r.Show(!u_1(e, A.m)),
				t.AddPopup(t.default_tabset, r),
				this.SerializePopupState(),
				t.friends_list_window &&
					(t.friends_list_window.BringToFront(),
					(t.friends_list_window.title = (0, Localize)(
						"#WindowTitle_FriendsList",
					))),
				r)
			);
		}
		return null;
	}
	ConvertDefaultTabSetToEmbedded(e) {
		let t = this.GetPerContextChatData(e);
		let r = t.GetPopupForTabSet(t.default_tabset);
		if (r) {
			r.popup.GetWindowRestoreDetails().then((e) => {
				t.SetCachedDefaultPopupDimensions(e);
			});
			t.RemovePopupForTabSet(t.default_tabset);
			this.SerializePopupState();
			r.ClearTabSet();
			r.popup.Close();
		}
	}
	MergeTabSets(e) {
		const t = this.GetPerContextChatData(e);
		this.ForEachTabSet(t, (e) => {
			if (e !== t.default_tabset) {
				e.tabs.forEach((r) => {
					e.RemoveTab(r);
					t.default_tabset.AddTab(r);
				});
			}
		});
	}
	OnTabSetResized(e) {
		let t = this.GetPerContextChatData(e.GetBrowserContext());
		if (e == t.default_tabset && !t.IsFriendsListSingleWindow()) {
			let r = t.GetPopupForTabSet(e);
			if (r) {
				r.popup.GetWindowRestoreDetails().then((e) => {
					t.SetCachedDefaultPopupDimensions(e);
				});
			}
		}
	}
	CloseTabSet(e) {
		let t = this.GetPerContextChatData(e.GetBrowserContext());
		let r = t.GetPopupForTabSet(e);
		if (r) {
			r.popup.Close();
		}
		t.RemovePopupForTabSet(e);
		this.SerializePopupState();
	}
	OnTabSetClosed(e) {
		this.GetPerContextChatData(e.GetBrowserContext()).RemovePopupForTabSet(e);
		this.SerializePopupState();
	}
	FocusTabSet(e) {
		let t = this.GetPerContextChatData(e.GetBrowserContext());
		let r = t.GetPopupForTabSet(e);
		if (r && r.popup && !r.popup.container.BIsClosed()) {
			r.popup.container.BringToFront();
		} else if (
			t.IsTabSetInFriendListWindow(e) &&
			t.IsFriendsListSingleWindow()
		) {
			if (t.BUsePopups()) {
				a.xm.ShowPopupFriendsList(t.browser_context, false, true);
			} else if (t.friends_list_window) {
				t.friends_list_window.BringToFront();
			}
		}
	}
	MoveTabToNewPopup(e, t, r, n) {
		w(e, "browserContext");
		let i = this.GetPerContextChatData(e);
		this.ForEachTabSet(i, (e) => e.RemoveTab(t));
		let s = new u(e);
		s.AddTab(t);
		let o = a.xm.CreateChatPopup(e, this.GetNextChatPopupID(), s, n, r, false);
		o.Show(true);
		if (n) {
			let e = o.popup.GetWindow();
			try {
				e.SteamClient.Window.PositionWindowRelative(
					n,
					r.left,
					r.top,
					r.width,
					r.height,
				);
			} catch (e) {
				console.error(e);
			}
		}
		i.AddPopup(s, o);
		this.SerializePopupState();
	}
	SerializePopupState(e = false) {
		if (!this.m_bRestoredPopupState || !a.xm.SettingsStore.BReady()) {
			return;
		}
		if (this.m_bShuttingDown) {
			return;
		}
		let t = this.SerializePopupStateToObject(e);
		a.xm.SettingsStore.StoreObjectInLocalStorage(f, t);
	}
	SerializePopupStateToObject(e) {
		let t = this.GetPerContextChatData(A.m);
		let r = {
			window_restore_details: t.cached_popup_window_restore_details,
			defaultTabs: undefined,
			popupTabs: undefined,
			bFriendsListVisible: false,
			always_restore: e,
			bFriendsListCollapsed: t.IsFriendsListCollapsed(),
		};
		if (t.default_tabset && t.default_tabset.tabCount > 0) {
			r.defaultTabs = t.default_tabset.Serialize();
		}
		let n = [];
		for (let e of Array.from(t.popup_list)) {
			if (e.tab_set != t.default_tabset) {
				n.push(e.tab_set.Serialize());
			}
		}
		if (n.length > 0) {
			r.popupTabs = n;
		}
		r.bFriendsListVisible = !!t.friends_list_window;
		return r;
	}
	BRestorePopups() {
		return a.xm.SettingsStore.BAlwaysShowChatsInNewWindow();
	}
	BRestoreOpenChats() {
		return a.xm.SettingsStore.FriendsSettings.bRememberOpenChats;
	}
	DeserializeIntoTabSet(e, t) {
		if (t.tabs && Array.isArray(t.tabs)) {
			for (let r of t.tabs) {
				if (!r.startsWith("br")) {
					this.CreateNewTabFromUniqueID(e, r, r == t.active_tab, true);
				}
			}
		}
	}
	SetStateToRestoreFrom(e) {
		this.m_stateToRestoreFrom = e;
	}
	async RestorePopupState() {
		if (a.xm.IsGamepadUIActive()) {
			return;
		}
		w(!this.m_bRestoredPopupState, "Second restore popup state");
		w(
			!this.m_bRestoringPopups,
			"RestorePopupState called while already restoring",
		);
		if (
			a.xm.ParentalStore.BIsFriendsBlocked() ||
			a.xm.SettingsStore.IsSteamInTournamentMode()
		) {
			return;
		}
		this.m_bRestoringPopups = true;
		if (this.m_stateToRestoreFrom) {
			this.RestoreFromStateObject(this.m_stateToRestoreFrom, false);
			this.m_stateToRestoreFrom = undefined;
			this.m_bRestoringPopups = false;
			return;
		}
		let e = await a.xm.SettingsStore.GetObjectFromLocalStorageWhenReady(f);
		let t = false;
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat &&
			SteamClient.WebChat.BSuppressPopupsInRestore
		) {
			t = await SteamClient.WebChat.BSuppressPopupsInRestore();
		}
		this.RestoreFromStateObject(e, t);
		this.m_bRestoringPopups = false;
	}
	RestoreFromStateObject(e, t) {
		let r = this.GetPerContextChatData(A.m);
		w(r.BIsEmpty(), "Restoring to non-empty context", r);
		if (r.BIsEmpty()) {
			if (e.window_restore_details) {
				r.SetCachedDefaultPopupDimensions(e.window_restore_details);
			}
			if (e.bFriendsListSingleWindow !== undefined) {
				a.xm.SettingsStore.BackfillSingleWindowMode(e.bFriendsListSingleWindow);
			}
			r.SetFriendsListSingleWindowMode(
				a.xm.SettingsStore.BSingleWindowModeEnabled(),
			);
			r.SetFriendsListCollapsed(!!e.bFriendsListCollapsed);
			if (!t && (e.always_restore || this.BRestoreOpenChats())) {
				if (e.defaultTabs) {
					let r_default_tabset = r.default_tabset;
					this.DeserializeIntoTabSet(r_default_tabset, e.defaultTabs);
					if (r_default_tabset.tabCount > 0 && !r.IsFriendsListSingleWindow()) {
						let e = a.xm.CreateChatPopup(
							a.xm.GetDefaultBrowserContext(),
							this.GetNextChatPopupID(),
							r_default_tabset,
							undefined,
							undefined,
							false,
						);
						r.AddPopup(r_default_tabset, e);
						e.Show(false);
					}
				}
				if (e.popupTabs) {
					for (let t of e.popupTabs) {
						let e = new u(A.m);
						this.DeserializeIntoTabSet(e, t);
						if (e.tabCount > 0) {
							let t = a.xm.CreateChatPopup(
								a.xm.GetDefaultBrowserContext(),
								this.GetNextChatPopupID(),
								e,
								undefined,
								undefined,
								false,
							);
							r.AddPopup(e, t);
							t.Show(false);
						}
					}
				}
			}
			if (!t) {
				let t =
					!e ||
					e.bFriendsListVisible === undefined ||
					e.bFriendsListVisible === undefined ||
					e.bFriendsListVisible;
				if (r.BUsePopups()) {
					a.xm.ShowPopupFriendsListAtStartup(t);
				}
				for (let e of this.m_vecShowGroupsAfterRestorePopup) {
					this.ShowAndOrActivateChatRoomGroup(A.m, e, false);
				}
			}
			this.m_vecShowGroupsAfterRestorePopup = [];
			this.m_bRestoredPopupState = true;
			this.m_chatStore.OnRestorePopupsComplete();
		}
	}
	async ResetHasRestoredPopupState() {
		this.m_bRestoredPopupState = false;
	}
	RestorePopupStateForMobile() {
		this.m_bRestoringPopups = true;
		this.GetPerContextChatData(A.m).SetFriendsListSingleWindowMode(true);
		this.m_bRestoringPopups = false;
	}
	FillInChatUsabilityMetrics(e) {
		let t = this.GetPerContextChatData(A.m);
		e.ui_state().set_friends_list_docked(t.IsFriendsListSingleWindow());
		e.ui_state().set_friends_list_visible(
			t.friends_list_window && !t.friends_list_window.BIsClosed(),
		);
		e.ui_state().set_chat_popups_opened(Array.from(t.popup_list).length);
		e.ui_state().set_friends_list_collapsed(t.IsFriendsListCollapsed());
		let r = 0;
		let n = 0;
		r += CountMatches(t.default_tabset.tabs, (e) => e.IsChatRoom());
		n += CountMatches(t.default_tabset.tabs, (e) => e.IsFriendChat());
		for (let e of Array.from(t.popup_list)) {
			if (e.tab_set != t.default_tabset) {
				r += CountMatches(e.tab_set.tabs, (e) => e.IsChatRoom());
				n += CountMatches(e.tab_set.tabs, (e) => e.IsFriendChat());
			}
		}
		e.ui_state().set_group_chat_tabs_opened(r);
		e.ui_state().set_friend_chat_tabs_opened(n);
	}
	get show_winter_sale_ui() {
		return this.m_bShowWinterSaleUI;
	}
	StartWinterSaleCountdown() {
		const e = 1576778400000;
		if (Date.now() >= e) {
			this.m_bShowWinterSaleUI = true;
		} else {
			setTimeout(() => this.StartWinterSaleCountdown(), e - Date.now());
		}
	}
	get FriendsListSteamDeckActiveTab() {
		return this.m_eFriendsListSteamDeckActiveTab;
	}
	set FriendsListSteamDeckActiveTab(e) {
		if (e == this.m_eFriendsListSteamDeckActiveTab) {
			return;
		}
		let t = this.m_eFriendsListSteamDeckActiveTab;
		this.m_eFriendsListSteamDeckActiveTab = e;
		this.m_FriendsListSteamDeckActiveTabCallbackList.Dispatch(t, e);
	}
	SelectFriendsListSteamDeckSiblingTab(e) {
		let t = this.m_eFriendsListSteamDeckActiveTab + e;
		if (t >= 0 && t <= Jw.MaxTab) {
			this.FriendsListSteamDeckActiveTab = t;
		}
	}
	FriendsListSteamDeckActiveTabCallbackList() {
		return this.m_FriendsListSteamDeckActiveTabCallbackList;
	}
	BIsAnyWindowVisible() {
		return Array.from(this.m_mapChatBrowserContexts.values()).some((e) =>
			e.BIsAnyWindowVisible(),
		);
	}
}
Cg([s.sH], Vi.prototype, "m_bTheaterMode", undefined);
Cg([s.sH], Vi.prototype, "m_mapFriendChatBroadcastVisible", undefined);
Cg([s.sH], Vi.prototype, "m_nTabActivationCount", undefined);
Cg([s.sH], Vi.prototype, "m_bShowWinterSaleUI", undefined);
Cg([s.XI], Vi.prototype, "OnFriendsParentalLockChanged", null);
Cg([a.Nw], Vi.prototype, "ShowFriendChatDialogWhenReady", null);
Cg([a.Nw], Vi.prototype, "ShowAndOrActivateChatRoomGroupWhenReady", null);
Cg([C.oI], Vi.prototype, "SerializePopupState", null);
export class TP {
	m_popup;
	m_chatPopup;
	m_bShown = false;
	constructor(e, t) {
		this.m_popup = e;
		this.m_chatPopup = t;
	}
	Show(e) {
		this.m_popup.Show(e);
		this.m_bShown ||= true;
	}
	get popup() {
		return this.m_popup;
	}
	get tab_set() {
		return this.m_chatPopup.tab_set;
	}
	ClearTabSet() {
		this.m_chatPopup.ClearTabSet();
	}
	IsSameBrowserContext(e) {
		let t = this.m_popup.GetBrowserContext() || A.m;
		return e.m_nBrowserID == t.m_nBrowserID && e.m_unPID == t.m_unPID;
	}
}
((e) => {
	e[(e.FriendsList = 0)] = "FriendsList";
	e[(e.Chat = 1)] = "Chat";
})((OC ||= {}));
class B {
	constructor() {
		Gn(this);
	}
	m_eActiveView = OC.FriendsList;
	GetActiveView() {
		return this.m_eActiveView;
	}
	SetActiveView(e) {
		this.m_eActiveView = e;
	}
}
Cg([s.sH], B.prototype, "m_eActiveView", undefined);
class v {
	m_browserContext;
	m_DefaultTabSet = undefined;
	m_ResponsiveWindowState;
	m_FriendsListWindow;
	m_bFriendsListSingleWindow = undefined;
	m_bFriendsListCollapsed = undefined;
	m_PopupWindowRestoreDetails;
	m_mapTabSetToPopup;
	m_ScreenInfo;
	constructor(e) {
		Gn(this);
		this.m_browserContext = e;
		this.m_DefaultTabSet = new u(e);
		this.m_FriendsListWindow = undefined;
		this.m_PopupWindowRestoreDetails = undefined;
		this.m_mapTabSetToPopup = new Map();
		this.m_ResponsiveWindowState = new B();
		this.SetFriendsListSingleWindowMode(false);
		this.m_bFriendsListCollapsed = i.TS.STEAM_TV;
	}
	BIsEmpty() {
		return (
			this.m_DefaultTabSet.tabCount == 0 &&
			(!i.TS.IN_CLIENT ||
				this.m_FriendsListWindow == null ||
				this.m_FriendsListWindow == null ||
				a.xm.IsLoadedInClientSharedJSContext()) &&
			this.m_mapTabSetToPopup.size == 0
		);
	}
	BUsePopups() {
		return (
			i.TS.USE_POPUPS &&
			this.m_browserContext.m_eUIMode !== 4 &&
			!BK(this.m_browserContext.m_eBrowserType)
		);
	}
	BIsFriendsListEmbedded() {
		if (u_1(A.m, this.m_browserContext)) {
			return !this.BUsePopups();
		} else {
			return this.m_browserContext.m_eUIMode === 4;
		}
	}
	IsFriendsListSingleWindow() {
		return this.m_bFriendsListSingleWindow;
	}
	SetFriendsListSingleWindowMode(e) {
		if (this.BUsePopups()) {
			this.m_bFriendsListSingleWindow = e;
		} else {
			this.m_bFriendsListSingleWindow = true;
		}
	}
	IsFriendsListCollapsed() {
		return this.m_bFriendsListCollapsed;
	}
	SetFriendsListCollapsed(e) {
		this.m_bFriendsListCollapsed = e;
	}
	get browser_context() {
		return this.m_browserContext;
	}
	get default_tabset() {
		w(this.m_DefaultTabSet, "Context has no default chat target");
		return this.m_DefaultTabSet;
	}
	get friends_list_window() {
		return this.m_FriendsListWindow;
	}
	SetFriendsListWindow(e) {
		this.m_FriendsListWindow = e || undefined;
		if (!e && this.IsFriendsListSingleWindow()) {
			this.m_DefaultTabSet.CloseAllTabs();
		}
	}
	get popup_list() {
		return this.m_mapTabSetToPopup.values();
	}
	get responsive_window_state() {
		return this.m_ResponsiveWindowState;
	}
	get cached_popup_window_restore_details() {
		return this.m_PopupWindowRestoreDetails;
	}
	get screen_info() {
		return this.m_ScreenInfo;
	}
	SetScreenInfo(e, t) {
		this.m_ScreenInfo = {
			width: e,
			height: t,
		};
	}
	SetCachedDefaultPopupDimensions(e) {
		this.m_PopupWindowRestoreDetails = e;
	}
	GetTabSetForId(e) {
		if (this.m_DefaultTabSet.GetTabByUniqueID(e)) {
			return this.m_DefaultTabSet;
		}
		for (let t of Array.from(this.m_mapTabSetToPopup.keys())) {
			if (t.GetTabByUniqueID(e)) {
				return t;
			}
		}
		return null;
	}
	RemovePopupForTabSet(e) {
		this.m_mapTabSetToPopup.delete(e);
	}
	AddPopup(e, t) {
		w(!this.m_mapTabSetToPopup.has(e), "Added popup for tabset twice");
		this.m_mapTabSetToPopup.set(e, t);
	}
	GetPopupForTabSet(e) {
		return this.m_mapTabSetToPopup.get(e);
	}
	IsTabSetInFriendListWindow(e) {
		return e == this.default_tabset && this.IsFriendsListSingleWindow();
	}
	BIsTabSetActive(e) {
		let t = this.GetPopupForTabSet(e);
		if (t?.popup?.container) {
			return !t.popup.container.BIsClosed();
		} else {
			return (
				this.IsTabSetInFriendListWindow(e) &&
				this.friends_list_window &&
				!this.friends_list_window.BIsClosed()
			);
		}
	}
	BIsTabSetVisible(e) {
		let t = this.GetPopupForTabSet(e);
		if (t) {
			return t.popup.container.BIsVisible();
		} else {
			return (
				this.IsTabSetInFriendListWindow(e) &&
				this.friends_list_window &&
				this.friends_list_window.BIsVisible()
			);
		}
	}
	BIsTabSetFocused(e) {
		let t = this.GetPopupForTabSet(e);
		if (t) {
			return t.popup.container.BIsFocused();
		} else {
			return (
				this.IsTabSetInFriendListWindow(e) &&
				this.friends_list_window &&
				this.friends_list_window.BIsFocused()
			);
		}
	}
	CloseAllPopups() {
		for (let e of Array.from(this.popup_list)) {
			e.popup.Close();
		}
		this.m_mapTabSetToPopup.clear();
		if (this.friends_list_window) {
			this.m_FriendsListWindow.Close();
		}
		this.m_DefaultTabSet = new u(this.m_browserContext);
	}
	BIsAnyWindowVisible() {
		return (
			this.m_FriendsListWindow?.BIsVisible() ||
			Array.from(this.popup_list).some((e) => e.popup.container.BIsVisible())
		);
	}
}
Cg([s.sH], v.prototype, "m_DefaultTabSet", undefined);
Cg([s.sH], v.prototype, "m_bFriendsListSingleWindow", undefined);
Cg([s.sH], v.prototype, "m_bFriendsListCollapsed", undefined);
