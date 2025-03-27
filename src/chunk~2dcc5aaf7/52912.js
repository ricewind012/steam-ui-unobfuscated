import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import {
	LocalizeReact,
	Localize,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";
import {
	GetOwningWindowForEvent,
	CopyURLToClipboard,
	_f,
	BElementContainsSelection,
} from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./47296.js";
import a from "./44846.js";
import s, { xv } from "./44234.js";
import o from "./97023.js";
import c, { Fd } from "./52451.js";
import p, { zy } from "./95773.js";
import C, { u as u_1 } from "./17385.js";
import f from "./52003.js";
import b from "./11131.js";
import y from "./79769.js";
import { AssertMsg, FailAssertion } from "./../../actual_src/utils/assert.js";
import B from "./36383.js";
import v from "./12176.js";
import I, { z7, Gn, h5 } from "./89193.js";
import M from "./43951.js";
import R from "./70839.js";
import k from "./83957.js";
import N, { PA } from "./41230.js";
import F, { useState } from "./63696.js";
import O, { EP, DH, xE } from "./59704.js";
import P from "./66408.js";
import L from "./69164.js";
import z from "./50376.js";
import U from "./24171.js";
import H, { JG } from "./98829.js";
import j from "./92031.js";
import q, { t7 } from "./82594.js";
import { F2 } from "./58215.js";
import X from "./53414.js";
import { Ic, Nw } from "./78060.js";
import $, { HT } from "./13869.js";
import ee from "./26853.js";
import te from "./72476.js";
import { A as A_2 } from "./90765.js";
import le from "./47277.js";
import pe from "./50979.js";
import { N8 } from "./50712.js";
import he from "./8573.js";
import { Dn } from "./45328.js";
import _e from "./46066.js";
import fe from "./8974.js";
import be from "./56840.js";
import ye from "./64608.js";
import Se from "./44164.js";
import we from "./4042.js";
import Be from "./29889.js";
import ve, { s as s_2 } from "./81255.js";
import Ie from "./31958.js";
import { EK } from "./51095.js";
import Me from "./53807.js";
import { G } from "./92757.js";
import Re from "./1918.js";
import ke from "./54352.js";
import Ne from "./8653.js";
import { xE } from "./48301.js";
import je from "./43397.js";
import { k as k_2 } from "./15498.js";
import { p as p_2, E as E_2 } from "./92008.js";
import Xe from "./55116.js";
import Je from "./98995.js";
import $e, { L as L_2 } from "./76319.js";
import { XX } from "./76815.js";
import Xt from "./29971.js";
import { Z9 } from "./91720.js";
import $t from "./48042.js";
import er from "./91789.js";
import tr from "./73870.js";
import { Fj, Dp } from "./736.js";
import { q3 } from "./90095.js";
import ir from "./7470.js";
import ar from "./85243.js";
import { OJ, h3 } from "./63439.js";
import { createPortal } from "./78325.js";
import lr from "./37024.js";
import mr from "./24295.js";
import hr, { CO as CO_2, h8 as h8_2 } from "./40357.js";
export let h8 = hr.h8;
export let _k = hr._k;
export let CO = hr.CO;
export let wj = hr.wj;
class l {
	AddTrackedWindow(e) {}
	BIsUserIdle(e) {
		return this.GetUserIdleTime() > e;
	}
	AddOnIdleCallback(e, t) {
		this.RunOnIdleCallback(e, t);
	}
	AddOnNextActivityCallback(e) {
		this.m_rgActivityCallbacks.push(e);
	}
	Init() {}
	m_rgActivityCallbacks = [];
	FireOnUserActivityCallbacks() {
		if (this.m_rgActivityCallbacks.length) {
			for (let e of this.m_rgActivityCallbacks) {
				e();
			}
			this.m_rgActivityCallbacks = [];
		}
	}
	RunOnIdleCallback(e, t) {
		if (this.GetUserIdleTime() >= t - 1) {
			e();
		} else {
			SetBackgroundTimeout(
				this.RunOnIdleCallback.bind(this, e, t),
				(t - this.GetUserIdleTime()) * 1000,
			);
		}
	}
}
class u extends l {
	m_msUserLastAction;
	m_rgWindows = [];
	m_bEventTrackingActive = false;
	constructor() {
		super();
		this.m_msUserLastAction = performance.now();
	}
	GetUserIdleTime() {
		return Math.floor((performance.now() - this.m_msUserLastAction) / 1000);
	}
	AddTrackedWindow(e) {
		this.m_rgWindows.push(e);
		e.addEventListener("unload", this.RemoveTrackedWindow.bind(this, e));
		if (this.m_bEventTrackingActive) {
			this.BindEventsForWindow(e);
		}
	}
	Init() {
		window.setTimeout(this.BindEvents.bind(this), 10000);
	}
	RemoveTrackedWindow(e) {
		if (this.m_bEventTrackingActive) {
			this.UnbindEventsForWindow(e);
		}
		FindAndRemove(this.m_rgWindows, e);
	}
	OnUserAction() {
		this.m_msUserLastAction = performance.now();
		this.FireOnUserActivityCallbacks();
		this.UnbindEvents();
		window.setTimeout(this.BindEvents.bind(this), 10000);
	}
	BindEvents() {
		if (!this.m_bEventTrackingActive) {
			this.m_bEventTrackingActive = true;
			for (let e of this.m_rgWindows) {
				this.BindEventsForWindow(e);
			}
		}
	}
	UnbindEvents() {
		if (this.m_bEventTrackingActive) {
			this.m_bEventTrackingActive = false;
			for (let e of this.m_rgWindows) {
				this.UnbindEventsForWindow(e);
			}
		}
	}
	static sm_rgUserEvents = ["mousemove", "mousedown", "keypress", "focus"];
	UnbindEventsForWindow(e) {
		for (let t of u.sm_rgUserEvents) {
			e.removeEventListener(t, this.OnUserAction);
		}
	}
	BindEventsForWindow(e) {
		for (let t of u.sm_rgUserEvents) {
			e.addEventListener(t, this.OnUserAction);
		}
	}
}
Cg([c.oI], u.prototype, "OnUserAction", null);
class d extends u {
	m_eActiveState = o.GQ.k_EComputerActiveStateActive;
	m_hRegisterForComputerActiveStateChange = null;
	m_hFireUserStillActive = undefined;
	constructor() {
		super();
	}
	Init() {
		this.m_hRegisterForComputerActiveStateChange =
			SteamClient.WebChat.RegisterForComputerActiveStateChange(
				this.OnComputerActiveStateChange,
			);
	}
	OnComputerActiveStateChange(e, t) {
		let r = new Date().getTime() / 1000 - t;
		this.m_eActiveState = e;
		this.m_msUserLastAction = Math.max(
			performance.now() - r * 1000,
			this.m_msUserLastAction,
		);
		if (this.m_eActiveState == o.GQ.k_EComputerActiveStateActive) {
			if (this.m_hFireUserStillActive) {
				clearTimeout(this.m_hFireUserStillActive);
				this.m_hFireUserStillActive = undefined;
			}
			this.UpdateStillActive();
		}
	}
	UpdateStillActive() {
		this.m_hFireUserStillActive = undefined;
		if (this.m_eActiveState == o.GQ.k_EComputerActiveStateActive) {
			this.OnUserAction();
			this.m_hFireUserStillActive = SetBackgroundTimeout(
				this.UpdateStillActive,
				10000,
			);
		}
	}
}
Cg([c.oI], d.prototype, "OnComputerActiveStateChange", null);
Cg([c.oI], d.prototype, "UpdateStillActive", null);
var A;
class g {
	m_FriendStore;
	constructor(e) {
		this.m_FriendStore = e;
	}
	DisplayNotificationFromFriend(e, t, r = {}) {
		return this.DisplayNotification(
			{
				icon: e.persona.avatar_url_medium,
				...t,
			},
			(t) => {
				return e.OpenChatDialog(t);
			},
			r,
		);
	}
	BNotificationsPermitted() {
		return (
			!p.xm.ParentalStore.BIsFriendsBlocked() &&
			!p.xm.SettingsStore.IsSteamInTournamentMode()
		);
	}
	RequestNotificationPermission() {
		return Promise.resolve(true);
	}
}
(function (e) {
	e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
		"k_EClientUINotificationGroupChatMessage";
	e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
		"k_EClientUINotificationFriendChatMessage";
	e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
		"k_EClientUINotificationFriendPersonaState";
})((A ||= {}));
class h extends g {
	DisplayNotification(e, t, r = {}) {
		if (e.tag) {
			let r = JSON.stringify(e);
			if (e.tag.startsWith("groupmsg_")) {
				SteamClient.ClientNotifications.DisplayClientNotification(
					A.k_EClientUINotificationGroupChatMessage,
					r,
					t,
				);
			} else if (e.tag.startsWith("message_")) {
				SteamClient.ClientNotifications.DisplayClientNotification(
					A.k_EClientUINotificationFriendChatMessage,
					r,
					t,
				);
			} else if (
				p.xm.SettingsStore.BClientHasFeatureOrOnWeb("PersonaNotifications") &&
				e.tag.startsWith("state_")
			) {
				SteamClient.ClientNotifications.DisplayClientNotification(
					A.k_EClientUINotificationFriendPersonaState,
					r,
					t,
				);
			}
		}
		return Promise.resolve();
	}
}
class _ extends g {
	GetNotificationPermissionLevel() {
		if (typeof Notification == "undefined") {
			return "unsupported";
		}
		let e = Notification.permission;
		if (e == "default" || e == "granted" || e == "granted" || e == "denied") {
			return e;
		} else {
			return "unsupported";
		}
	}
	DisplayNotification(e, t, r = {}) {
		let n = {
			body: e.body,
			icon: e.icon,
			tag: e.tag,
			silent: true,
		};
		let i = new Notification(e.title, {
			badge:
				s.TS.COMMUNITY_CDN_URL +
				"public/shared/images/responsive/share_steam_logo.png",
			...n,
		});
		window.setTimeout(() => {
			i.close();
		}, r.timeoutMS || 5000);
		i.addEventListener("click", () => {
			return this.OnNotificationClicked(i, t);
		});
		return new Promise((e, t) => {
			i.addEventListener("close", () => {
				e();
			});
		});
	}
	OnNotificationClicked(e, t) {
		t(C.m);
		e.close();
	}
	BNotificationsPermitted() {
		return this.GetNotificationPermissionLevel() == "granted";
	}
	RequestNotificationPermission() {
		if (this.GetNotificationPermissionLevel() == "unsupported") {
			return Promise.resolve(false);
		} else if (this.BNotificationsPermitted()) {
			return super.RequestNotificationPermission();
		} else {
			return new Promise((e, t) => {
				Notification.requestPermission((t) => {
					e(t == "granted");
				});
			});
		}
	}
}
class w {
	m_data;
	m_bDropConsumed = false;
	m_onDropCompleteCallbacks = new y.lu();
	m_vecClasses = [];
	BInDrag() {
		return !!this.m_data;
	}
	StartDrag(e) {
		AssertMsg(
			!this.m_data,
			"second drag started, existing data discarded",
			this.m_data,
		);
		this.m_data = e;
		this.m_bDropConsumed = false;
		this.m_vecClasses.push("in_global_drag");
		this.m_vecClasses.push("drag_type_" + e.type);
		if (e.source !== undefined) {
			this.m_vecClasses.push("drag_source_" + e.source);
		}
		for (let e of Array.from(b.Of.GetPopups())) {
			if (e.window && e.window.document.body) {
				e.window.document.body.classList.add(...this.m_vecClasses);
			}
		}
		window.document.body.classList.add(...this.m_vecClasses);
	}
	EndDrag() {
		this.m_onDropCompleteCallbacks.Dispatch(this.m_bDropConsumed);
		this.m_onDropCompleteCallbacks.ClearAllCallbacks();
		this.m_data = undefined;
		this.m_bDropConsumed = undefined;
		for (let e of Array.from(b.Of.GetPopups())) {
			if (e.window && e.window.document.body) {
				e.window.document.body.classList.remove(...this.m_vecClasses);
			}
		}
		window.document.body.classList.remove(...this.m_vecClasses);
		this.m_vecClasses = [];
	}
	GetDragData() {
		return this.m_data;
	}
	BWasDropConsumed() {
		return this.m_bDropConsumed;
	}
	SetDropConsumed() {
		AssertMsg(this.BInDrag(), "Asked to set drop consumed but no active drag");
		this.m_bDropConsumed = true;
	}
	RegisterForDropComplete(e) {
		return this.m_onDropCompleteCallbacks.Register(e);
	}
}
class E {
	m_fnFillAppUsabilityMetrics;
	constructor(e, t) {
		this.m_fnFillAppUsabilityMetrics = e;
		t.messageHandlers.RegisterServiceNotificationHandler(
			B.pB.NotifyRequestClientUsabilityMetricsHandler,
			async (e) => {
				let t = v.w.Init(B.L6);
				t.Body().set_metrics_run_id(e.Body().metrics_run_id());
				t.Body().set_metrics_version(3);
				t.Body().set_client_build(s.TS.BUILD_TIMESTAMP);
				t.Body().set_in_web(!s.TS.IN_CLIENT);
				if (!p.xm.ready_to_render) {
					await z7(() => {
						return p.xm.ready_to_render;
					});
				}
				await p.xm.SettingsStore.FillInChatUsabilityMetrics(t.Body());
				await p.xm.FriendStore.FillInChatUsabilityMetrics(t.Body());
				await p.xm.ChatStore.FillInChatUsabilityMetrics(t.Body());
				await p.xm.UIStore.FillInChatUsabilityMetrics(t.Body());
				await p.xm.VoiceStore.FillInChatUsabilityMetrics(t.Body());
				if (this.m_fnFillAppUsabilityMetrics) {
					await this.m_fnFillAppUsabilityMetrics(t.Body());
				}
				B.Or.NotifyClientUsabilityMetrics(
					p.xm.CMInterface.GetServiceTransport(),
					t,
				);
				return 1;
			},
		);
	}
}
class T {
	m_mapBrowserInfo = new Map();
	m_hOverlayChatBrowserInfoChanged = null;
	m_CMInterface;
	constructor() {}
	Init(e) {
		this.m_CMInterface = e;
		this.m_hOverlayChatBrowserInfoChanged =
			SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(
				this.OnOverlayChatBrowserInfoChanged,
			);
		this.m_CMInterface.RunWhenLoggedOn(() => {
			this.OnOverlayChatBrowserInfoChanged();
		});
	}
	HasOverlayInstance(e) {
		return this.m_mapBrowserInfo.has(e);
	}
	OnOverlayChatBrowserInfoChanged() {
		SteamClient.WebChat.GetOverlayChatBrowserInfo()
			.then((e) => {
				let t = new Map(this.m_mapBrowserInfo);
				for (let r of e) {
					t.delete(r.unPID);
					let e = {
						m_unPID: r.unPID,
						m_nBrowserID: r.nBrowserID,
						m_eBrowserType: r.eBrowserType,
						m_eUIMode: r.eUIMode,
					};
					let n = this.m_mapBrowserInfo.get(r.unPID);
					if (n) {
						if (n.m_nBrowserID != r.nBrowserID) {
							this.OverlayBrowserClosed(n);
							this.m_mapBrowserInfo.delete(r.unPID);
							n = undefined;
						} else {
							p.xm.UIStore.OnOverlayBrowserChanged(
								e,
								r.nScreenWidth,
								r.nScreenHeight,
							);
						}
					}
					if (!n) {
						this.m_mapBrowserInfo.set(r.unPID, e);
						this.OverlayBrowserCreated(e, r.nScreenWidth, r.nScreenHeight);
					}
				}
				t.forEach((e, t) => {
					this.m_mapBrowserInfo.delete(t);
					this.OverlayBrowserClosed(e);
				});
			})
			.catch((e) => {
				console.log("Failed to load overlay browser info:", e);
			});
	}
	OverlayBrowserCreated(e, t, r) {
		const n = {
			...e,
			m_eUIMode: e.m_eUIMode ?? (p.xm.IsGamepadUIActive() ? 4 : 0),
		};
		p.xm.UIStore.OnOverlayBrowserCreated(n, t, r);
		if (n.m_eUIMode == 0) {
			ZM.ShowPopupFriendsList(n, false, false);
		}
		p.xm.SetDefaultPopupContext(n);
	}
	OverlayBrowserClosed(e) {
		const t = {
			...e,
			m_eUIMode: e.m_eUIMode ?? (p.xm.IsGamepadUIActive() ? 4 : 0),
		};
		p.xm.UIStore.SetSuppressBrowserContextBroadcasting(true);
		if (
			p.xm.GetDefaultBrowserContext().m_nBrowserID == e.m_nBrowserID &&
			p.xm.GetDefaultBrowserContext().m_unPID == e.m_unPID
		) {
			p.xm.SetDefaultPopupContext(C.m);
		}
		console.log("Removing overlay browser window:", e.m_unPID, e.m_nBrowserID);
		b.Of.ClosePopupsOwnedByBrowser(t);
		p.xm.UIStore.SetSuppressBrowserContextBroadcasting(false);
		p.xm.UIStore.OnOverlayBrowserClosed(t);
	}
}
Cg([c.oI], T.prototype, "OnOverlayChatBrowserInfoChanged", null);
var D = k;
let x = class extends F.Component {
	constructor(e) {
		super(e);
		this.state = {
			bSubscribed: false,
			bDismissed: false,
			bThumbnailLoaded: false,
		};
	}
	componentDidMount() {
		if (
			this.props.broadcaster.accountid != p.xm.FriendStore.self.accountid &&
			this.props.broadcastid
		) {
			p.xm.BroadcastStore.SubscribeToBroadcastDetails(
				this.props.broadcastid,
				this.props.broadcaster.steamid64,
			);
			this.setState({
				bSubscribed: true,
			});
		}
	}
	componentWillUnmount() {
		if (this.state.bSubscribed) {
			p.xm.BroadcastStore.UnsubscribeFromBroadcastDetails(
				this.props.broadcastid,
				this.props.broadcaster.steamid64,
			);
		}
	}
	OnWatch(e) {
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat !== undefined
		) {
			let t = "steam://broadcast/watch/" + this.props.broadcaster.steamid64;
			let r = CO_2(e);
			SteamClient.WebChat.OpenURLInClient(t, r.m_unPID, false);
		} else {
			let t = `${s.TS.COMMUNITY_BASE_URL}broadcast/watch/${this.props.broadcaster.steamid64}`;
			EP(e, t);
			e.stopPropagation();
		}
		this.OnClose();
	}
	OnClose() {
		this.setState({
			bDismissed: true,
		});
	}
	OnOpen() {
		this.setState({
			bDismissed: false,
		});
	}
	ShowThumbnail() {
		this.setState({
			bThumbnailLoaded: true,
		});
	}
	render() {
		let e = p.xm.AppInfoStore.GetAppInfo(this.props.appid);
		let t = F.createElement(
			"span",
			null,
			F.createElement("img", {
				src: e.icon_url,
				className: "productImage",
			}),
			F.createElement(
				"span",
				{
					className: "productName",
				},
				e.name,
			),
		);
		if (this.props.broadcaster.accountid == p.xm.FriendStore.self.accountid) {
			let e = this.props.viewer.display_name;
			return F.createElement(
				"div",
				{
					className: "broadcastInviteSelf",
				},
				this.props.appid
					? LocalizeReact("#ChatRoom_BroadcastInvite_YouInvited", e, t)
					: LocalizeReact("#ChatRoom_BroadcastInvite_YouInvited_NoAppID", e),
			);
		}
		{
			let r = this.props.broadcaster.display_name;
			const n = p.xm.BroadcastStore.GetBroadcastDetails(
				this.props.broadcastid,
				this.props.broadcaster.steamid64,
			) || {
				strThumbnail: "",
				bExpired: false,
			};
			if (
				this.state.bDismissed ||
				!this.props.broadcastid ||
				!this.props.broadcastid ||
				n.bExpired
			) {
				return F.createElement(
					"div",
					{
						className: "broadcastInviteDismissed",
					},
					this.props.appid
						? LocalizeReact("#ChatRoom_BroadcastInvite_Expired", r, t)
						: LocalizeReact("#ChatRoom_BroadcastInvite_Expired_NoAppID", r),
				);
			}
			let i =
				s.TS.COMMUNITY_CDN_URL +
				"public/images/broadcast/apphub_default_thumbnail.jpg";
			let a = LocalizeReact("#ChatRoom_BroadcastInvite_Invite", r);
			return F.createElement(
				L.Z,
				{
					className: "msg ChatMessageInvite broadcastInviteMsg",
					focusable: true,
					onOKButton: this.OnWatch,
					onOKActionDescription: (0, Localize)(
						"#ChatRoom_BroadcastInvite_Watch",
					),
					onCancel: this.OnClose,
					onCancelActionDescription: (0, Localize)(
						"#ChatRoom_BroadcastInvite_Dismiss",
					),
				},
				F.createElement(
					"div",
					{
						className: "leftInviteContainer",
					},
					F.createElement("img", {
						src: n.strThumbnail,
						onLoad: this.ShowThumbnail,
						className:
							"broadcastThumbnail" +
							(this.state.bThumbnailLoaded ? " loaded" : ""),
					}),
					F.createElement("img", {
						src: i,
						className:
							"broadcastThumbnail broadcastThumbnailFallback" +
							(this.state.bThumbnailLoaded ? "" : " loaded"),
					}),
					F.createElement("div", {
						className: "noisePattern",
					}),
				),
				F.createElement(
					"div",
					{
						className: "rightInviteContainer",
					},
					F.createElement(
						P.xh,
						null,
						F.createElement(
							"div",
							{
								className: "centerBlock",
							},
							F.createElement(
								"div",
								{
									className: "inviteLabel",
								},
								a,
							),
							F.createElement(
								"div",
								{
									className: "productName",
								},
								e.name,
							),
						),
					),
					F.createElement(
						"button",
						{
							className: "DialogButton Primary inviteButtonWatchBroadcast",
							onClick: this.OnWatch,
						},
						(0, Localize)("#ChatRoom_BroadcastInvite_Watch"),
					),
					F.createElement(
						"div",
						{
							className: "closeButton",
							onClick: this.OnClose,
						},
						F.createElement(z.sED, null),
					),
				),
			);
		}
	}
};
Cg([c.oI], x.prototype, "OnWatch", null);
Cg([c.oI], x.prototype, "OnClose", null);
Cg([c.oI], x.prototype, "OnOpen", null);
Cg([c.oI], x.prototype, "ShowThumbnail", null);
x = Cg([N.PA], x);
let W = class extends F.Component {
	m_pollTimeout = undefined;
	m_broadcastid = undefined;
	m_bExpired = false;
	constructor(e) {
		super(e);
		this.state = {
			strThumbnail: "",
			nUpdateInterval: 10,
			bThumbnailLoaded: false,
			nThumbnailUpdateCounter: 0,
		};
	}
	OnAccept(e) {
		p.xm.BroadcastStore.ApproveViewerRequest(
			this.props.viewer.accountid,
			this.props.requestid,
		);
	}
	OnClose() {
		p.xm.BroadcastStore.RejectViewerRequest(
			this.props.viewer.accountid,
			this.props.requestid,
		);
	}
	ShowThumbnail() {
		this.setState({
			bThumbnailLoaded: true,
		});
	}
	render() {
		let e = p.xm.AppInfoStore.GetAppInfo(this.props.appid);
		let t = F.createElement(
			"span",
			null,
			F.createElement("img", {
				src: e.icon_url,
				className: "productImage",
			}),
			F.createElement(
				"span",
				{
					className: "productName",
				},
				e.name,
			),
		);
		let r = this.props.viewer.display_name;
		let n = p.xm.BroadcastStore.GetRequestState(
			this.props.viewer.accountid,
			this.props.requestid,
		);
		let i =
			this.m_broadcastid !== undefined &&
			this.m_broadcastid != p.xm.BroadcastStore.broadcastid;
		if (
			this.m_broadcastid === undefined &&
			p.xm.BroadcastStore.broadcastid !== "0"
		) {
			this.m_broadcastid = p.xm.BroadcastStore.broadcastid;
		}
		if (i || n != U.i_.k_EPending) {
			let e = "#ChatRoom_BroadcastViewRequest_Expired";
			if (n == U.i_.k_EAccepted) {
				e = "#ChatRoom_BroadcastViewRequest_Accepted";
			} else if (n == U.i_.k_ERejected) {
				e = "#ChatRoom_BroadcastViewRequest_Dismissed";
			}
			return F.createElement(
				"div",
				{
					className: "broadcastViewRequestDismissed",
				},
				LocalizeReact(e, r, t),
			);
		}
		let a =
			s.TS.COMMUNITY_CDN_URL +
			"public/images/broadcast/apphub_default_thumbnail.jpg";
		this.state.bThumbnailLoaded;
		let o = this.state.nThumbnailUpdateCounter;
		let l = LocalizeReact("#ChatRoom_BroadcastViewRequest_Invite", r);
		return F.createElement(
			"div",
			{
				className:
					"msg ChatMessageInvite broadcastInviteMsg broadcastViewRequestMsg",
			},
			F.createElement(
				"div",
				{
					className: "leftInviteContainer",
				},
				this.state.strThumbnail &&
					F.createElement("img", {
						src: this.state.strThumbnail + "?n=" + o,
						onLoad: this.ShowThumbnail,
						className:
							"broadcastThumbnail" +
							(this.state.bThumbnailLoaded ? " loaded" : ""),
					}),
				F.createElement("img", {
					src: a,
					className:
						"broadcastThumbnail broadcastThumbnailFallback" +
						(this.state.bThumbnailLoaded ? "" : " loaded"),
				}),
				F.createElement("div", {
					className: "noisePattern",
				}),
			),
			F.createElement(
				"div",
				{
					className: "rightInviteContainer",
				},
				F.createElement(
					P.xh,
					null,
					F.createElement(
						"div",
						{
							className: "centerBlock",
						},
						F.createElement(
							"div",
							{
								className: "inviteLabel",
							},
							l,
						),
						F.createElement(
							"div",
							{
								className: "productName",
							},
							e.name,
						),
					),
				),
				F.createElement(
					"button",
					{
						className: "inviteButton inviteButtonWatchBroadcast",
						onClick: this.OnAccept,
					},
					(0, Localize)("#ChatRoom_BroadcastViewRequest_Accept"),
				),
				F.createElement("div", {
					className: "closeButton",
					onClick: this.OnClose,
				}),
			),
		);
	}
};
Cg([c.oI], W.prototype, "OnAccept", null);
Cg([c.oI], W.prototype, "OnClose", null);
Cg([c.oI], W.prototype, "ShowThumbnail", null);
W = Cg([N.PA], W);
class V extends F.Component {
	m_pollTimeout = undefined;
	m_broadcastid = undefined;
	m_bExpired = false;
	constructor(e) {
		super(e);
		this.state = {
			strThumbnail: "",
			nUpdateInterval: 10,
			bThumbnailLoaded: false,
			nThumbnailUpdateCounter: 0,
		};
	}
	OnWatch(e) {
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat !== undefined
		) {
			let t = "steam://broadcast/watch/" + this.props.broadcaster.steamid64;
			let r = CO_2(e);
			SteamClient.WebChat.OpenURLInClient(t, r.m_unPID, false);
		} else {
			let t = `${s.TS.COMMUNITY_BASE_URL}broadcast/watch/${this.props.broadcaster.steamid64}`;
			EP(e, t);
			e.stopPropagation();
		}
	}
	ShowThumbnail() {
		this.setState({
			bThumbnailLoaded: true,
		});
	}
	render() {
		let e = this.props.broadcaster.current_game_name;
		let t = this.props.broadcaster.display_name;
		let r =
			s.TS.COMMUNITY_CDN_URL +
			"public/images/broadcast/apphub_default_thumbnail.jpg";
		this.state.bThumbnailLoaded;
		let n = this.state.nThumbnailUpdateCounter;
		let i = LocalizeReact("#ChatRoom_BroadcastInvite_WatchGame", t);
		return F.createElement(
			"div",
			{
				className: "msg ChatMessageInvite broadcastInviteMsg",
				style: {
					padding: 0,
					display: "flex",
					overflow: "hidden",
				},
			},
			F.createElement(
				"div",
				{
					className: "leftInviteContainer",
				},
				this.state.strThumbnail &&
					F.createElement("img", {
						src: this.state.strThumbnail + "?n=" + n,
						onLoad: this.ShowThumbnail,
						className:
							"broadcastThumbnail" +
							(this.state.bThumbnailLoaded ? " loaded" : ""),
					}),
				F.createElement("img", {
					src: r,
					className:
						"broadcastThumbnail broadcastThumbnailFallback" +
						(this.state.bThumbnailLoaded ? "" : " loaded"),
				}),
				F.createElement("div", {
					className: "noisePattern",
				}),
			),
			F.createElement(
				"div",
				{
					className: "rightInviteContainer",
				},
				F.createElement(
					P.xh,
					null,
					F.createElement(
						"div",
						{
							className: "centerBlock",
						},
						F.createElement(
							"div",
							{
								className: "inviteLabel",
							},
							i,
						),
						e &&
							F.createElement(
								"div",
								{
									className: "productName",
								},
								e,
							),
					),
				),
				F.createElement(
					"button",
					{
						className: "DialogButton Primary inviteButtonWatchBroadcast",
						onClick: this.OnWatch,
					},
					(0, Localize)("#ChatRoom_BroadcastInvite_Watch"),
				),
			),
		);
	}
}
Cg([c.oI], V.prototype, "OnWatch", null);
Cg([c.oI], V.prototype, "ShowThumbnail", null);
function Q(e) {
	const { appID: t } = e;
	const [r] = t7(t, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return F.createElement("img", {
			src: n,
			className: e.strClassNames,
		});
	} else {
		return null;
	}
}
let Z = class extends F.Component {
	state = {
		bCanAcceptRemotePlayInvite: false,
	};
	async componentDidMount() {
		if (this.props.gameInvite.remoteplayString) {
			let e = this.props.gameInvite.remoteplayString.split("&");
			let t = "restricted_countries=";
			let r = "";
			e.forEach((e) => {
				if (e.startsWith(t)) {
					r = e.slice(t.length);
				}
			});
			const n = await p.xm.RemotePlayStore.BCanAcceptInviteForGame(
				this.props.gameInvite.appID.toString(),
				r,
			);
			this.setState({
				bCanAcceptRemotePlayInvite: n,
			});
		}
	}
	AcceptGameInvite() {
		this.props.gameInvite.AcceptGameInvite();
	}
	BCanAcceptVoiceChat() {
		let e = this.props.inviter;
		let t = e.efriendrelationship == 2;
		let r = e.efriendrelationship == 4;
		let n = e.persona.is_online && !t && !r && !e.is_blocked;
		return !p.xm.VoiceStore.IsAnyVoiceActive() && n;
	}
	AcceptGameInviteAndVoiceChat() {
		this.props.gameInvite.AcceptGameInvite();
		if (this.BCanAcceptVoiceChat()) {
			p.xm.UIStore.ShowFriendChatDialogAndStartVoice(
				p.xm.GetDefaultBrowserContext(),
				this.props.inviter.accountid,
			);
		}
	}
	DismissInvite() {
		this.props.gameInvite.DismissInvite();
	}
	OnShowGameContextMenu(e) {
		JG(CO_2(e), this.props.gameInvite.appID, e);
	}
	render() {
		let e = p.xm.AppInfoStore.GetAppInfo(this.props.gameInvite.appID);
		if (!e) {
			e = new j.by(this.props.gameInvite.appID);
			e.DeserializeFromCacheObject({
				strName: (0, Localize)("#ChatRoom_GameInvite_UnreleasedGame"),
				strIconURL: "",
				strLogoURL: "",
				eAppType: 1,
			});
		}
		if (p.xm.FriendStore.self == this.props.inviter) {
			let t = this.props.inviteTarget.display_name;
			let r = this.props.gameInvite.remoteplayString
				? "#ChatRoom_GameInviteRemotePlay_YouInvited"
				: "#ChatRoom_GameInvite_YouInvited";
			return F.createElement(
				"div",
				{
					className: "gameInviteSelf",
				},
				F.createElement(
					"div",
					{
						onClick: this.OnShowGameContextMenu,
					},
					LocalizeReact(
						r,
						t,
						F.createElement("img", {
							src: e.icon_url,
							className: "productImage",
						}),
						e.name,
					),
				),
			);
		}
		if (
			this.props.gameInvite.bOld ||
			this.props.gameInvite.bDismissed ||
			this.props.gameInvite.bDismissed ||
			this.props.inviter.persona.m_unGamePlayedAppID !=
				this.props.gameInvite.appID
		) {
			let t = this.props.inviter.display_name;
			let r = this.props.gameInvite.remoteplayString
				? "#ChatRoom_GameInviteRemotePlay_Dismissed"
				: "#ChatRoom_GameInvite_Dismissed";
			return F.createElement(
				"div",
				{
					className: "gameInviteDismissed",
				},
				F.createElement(
					"div",
					{
						onClick: this.OnShowGameContextMenu,
					},
					LocalizeReact(
						r,
						t,
						F.createElement("img", {
							src: e.icon_url,
							className: "productImage",
						}),
						e.name,
					),
				),
			);
		}
		if (this.props.gameInvite.bAccepted) {
			let t = this.props.gameInvite.remoteplayString
				? "#ChatRoom_GameInviteRemotePlay_Accepted"
				: "#ChatRoom_GameInvite_Accepted";
			return F.createElement(
				"div",
				{
					className: "gameInviteAccepted",
				},
				F.createElement(
					"div",
					{
						onClick: this.OnShowGameContextMenu,
					},
					LocalizeReact(
						t,
						F.createElement("img", {
							src: e.icon_url,
							className: "productImage",
						}),
						e.name,
					),
				),
			);
		}
		if (
			this.props.gameInvite.remoteplayString &&
			!this.state.bCanAcceptRemotePlayInvite
		) {
			let t = this.props.inviter.display_name;
			let r = "#ChatRoom_GameInviteRemotePlay_CantAccept";
			return F.createElement(
				"div",
				{
					className: "gameInviteDismissed",
				},
				F.createElement(
					"div",
					{
						onClick: this.OnShowGameContextMenu,
					},
					LocalizeReact(
						r,
						t,
						F.createElement("img", {
							src: e.icon_url,
							className: "productImage",
						}),
						e.name,
					),
				),
			);
		}
		let t = this.props.inviter;
		let r = null;
		let n = t.persona.player_group_size - 1;
		if (
			t.persona.m_unGamePlayedAppID == this.props.gameInvite.appID &&
			t.persona.player_group_size > 0
		) {
			let e = t.persona.player_group;
			if (e) {
				r = p.xm.FriendStore.FriendGroupStore.ingame_group.member_list
					.map((r) => {
						return r != t && r.persona.player_group == e
							? (n--,
								F.createElement(H.gv, {
									key: r.accountid,
									friend: r,
									context: null,
								}))
							: null;
					})
					.filter(Boolean);
			}
		}
		let i = {
			paddingLeft: 0,
			display: "flex",
			alignItems: "stretch",
			overflow: "hidden",
		};
		if (this.props.chatGutterWidth) {
			i.marginLeft = "-" + this.props.chatGutterWidth + "px";
		}
		let a = this.props.gameInvite.remoteplayString
			? "#ChatRoom_GameInviteRemotePlay_Invite"
			: "#ChatRoom_GameInvite_Invite";
		let s = LocalizeReact(a, this.props.inviter.display_name);
		let o =
			this.props.gameInvite.remoteplayString &&
			this.BCanAcceptVoiceChat() &&
			p.xm.VoiceStore.BPartnerHasAcceptedOrInitiatedOneOnOneChat(
				this.props.inviter.accountid,
			);
		let l = p.xm.ParentalStore.BIsAppBlocked(this.props.gameInvite.appID);
		let c = r?.length || n > 0;
		return F.createElement(
			L.Z,
			{
				className: "msg ChatMessageInvite gameInviteMsg",
				style: i,
				onOKButton: l || this.AcceptGameInvite,
				onOKActionDescription:
					l || (0, Localize)("#ChatRoom_GameInvite_Accept"),
			},
			F.createElement(
				"div",
				{
					className: "leftInviteContainer",
					style: {
						overflow: "visible",
					},
				},
				F.createElement(Q, {
					appID: this.props.gameInvite.appID,
					strClassNames: "productImage productImageBlur",
				}),
				F.createElement(Q, {
					appID: this.props.gameInvite.appID,
					strClassNames: "productImage",
				}),
			),
			F.createElement(
				"div",
				{
					className: "rightInviteContainer",
				},
				F.createElement(
					"div",
					{
						className: "centerBlock",
					},
					F.createElement(
						"div",
						{
							className: "invitedTimeLabel",
						},
						(0, Localize)("#ChatRoom_GameInvite_InviteTime"),
						F.createElement(O.EO, {
							rtime: this.props.gameInvite.rtTimestamp,
							bTimeOnly: true,
						}),
					),
					F.createElement(
						P.xh,
						null,
						F.createElement(
							"div",
							{
								className: "inviteLabel",
							},
							s,
						),
					),
					F.createElement(
						P.xh,
						null,
						F.createElement(
							"div",
							{
								className: "productName",
							},
							e.name,
						),
					),
					c &&
						F.createElement(
							P.xh,
							null,
							F.createElement(
								"div",
								{
									className: "playingWithBlock",
								},
								F.createElement(
									"div",
									null,
									(0, Localize)("#ChatRoom_GameInvite_PlayingWith"),
								),
								F.createElement(
									"div",
									{
										className: "playingWithAvatars",
									},
									F.createElement("div", {
										className: "playingWithLine",
									}),
									r,
									n > 0 &&
										F.createElement(
											"div",
											{
												className: "playingWithExtraCount",
											},
											(0, Localize)("#ChatRoom_GameInvite_PartyMore", n),
											" ",
										),
								),
							),
						),
				),
				F.createElement(
					"div",
					{
						className: "acceptButtonsGroup",
					},
					l
						? F.createElement(
								"div",
								null,
								(0, Localize)("#ChatRoom_GameInvite_Family_View"),
							)
						: F.createElement(
								F.Fragment,
								null,
								F.createElement(
									"button",
									{
										className: "DialogButton GreenPlay",
										onClick: this.AcceptGameInvite,
									},
									(0, Localize)("#ChatRoom_GameInvite_Accept"),
								),
								o &&
									F.createElement(
										"button",
										{
											className: "DialogButton GreenPlay",
											onClick: this.AcceptGameInviteAndVoiceChat,
										},
										(0, Localize)("#ChatRoom_GameInvite_Accept_And_Voice_Chat"),
									),
							),
				),
				F.createElement(
					"div",
					{
						className: "closeButton",
						onClick: this.DismissInvite,
					},
					F.createElement(z.sED, null),
				),
			),
		);
	}
};
Cg([c.oI], Z.prototype, "AcceptGameInvite", null);
Cg([c.oI], Z.prototype, "BCanAcceptVoiceChat", null);
Cg([c.oI], Z.prototype, "AcceptGameInviteAndVoiceChat", null);
Cg([c.oI], Z.prototype, "DismissInvite", null);
Cg([c.oI], Z.prototype, "OnShowGameContextMenu", null);
Z = Cg([N.PA], Z);
const re = zy(function (e, t, r) {
	HT(
		F.createElement(ae, {
			...e,
			bIsInviteDialog: true,
		}),
		r,
		"InviteDialog",
		{
			strTitle: "Invite",
			popupWidth: 540,
			popupHeight: 260,
		},
		h8_2(r),
	);
});
let ne = class extends F.Component {
	static contextType = te.QO;
	AcceptInvite(e) {
		let t = GetOwningWindowForEvent(e);
		p.xm.ChatStore.InviteStore.AcceptInvite(this.props.invite, CO_2(e)).then(
			(e) => {
				this.HandleJoinResult(t, e);
			},
		);
	}
	HandleJoinResult(e, t) {
		const r = F2(t);
		if (r) {
			Ic(
				e,
				(0, Localize)("#ChatRoom_InviteMessage_Header"),
				r,
				(0, Localize)("#Button_OK"),
			);
		}
		if (this.props.onAccept) {
			this.props.onAccept();
		}
	}
	render() {
		let e = this.props.invite;
		if (!e || !e.BIsReady()) {
			return F.createElement(
				"div",
				{
					className: "ChatMessageInvite RequestingInfo displayRow",
				},
				F.createElement(ee.t, {
					size: "small",
				}),
				F.createElement(
					"div",
					{
						className: "postedExpiredInvite",
					},
					(0, Localize)("#bbcode_invite_requesting_info"),
				),
			);
		}
		if (!e.BIsValid()) {
			return F.createElement(
				"div",
				{
					className: "ChatMessageInvite InviteExpired",
				},
				F.createElement(
					"div",
					{
						className: "postedExpiredInvite",
					},
					(0, Localize)("#bbcode_invite_no_longer_valid"),
				),
			);
		}
		let t =
			this.props.inviter &&
			p.xm.FriendStore.self.accountid == this.props.inviter.accountid;
		let r = p.xm.ChatStore.GetChatRoomGroup(e.GetChatRoomGroupID());
		let n = r && r.BIsCurrentUserAMember();
		let i = e.BIsExpired();
		let a = r && r.name;
		let s = "";
		let o = "ChatMessageInvite NoBGSplitInvite";
		let l = "inviteButton inviteButtonJoinChat";
		if (this.props.strClassName) {
			o += " " + this.props.strClassName;
		}
		let c;
		let m;
		let u = e.BIsInviteLink();
		let d = e.BIsVoiceChatInvite();
		if (d) {
			l += " inviteButtonJoinVoice";
			o += " VoiceChannelInvite";
			let t = r.GetChatRoom(e.GetChatID());
			if (t) {
				s = t.name;
			}
		}
		if (!this.props.bIsInviteDialog) {
			if (n && !t) {
				o += " GroupAlreadyJoined";
			}
			if (t) {
				o += " Inviter";
			}
		}
		if (u) {
			o += " InviteLink";
		}
		if (i) {
			o += " InviteExpired";
		} else if (e.BNeverExpires()) {
			c = F.createElement(
				"div",
				{
					className: "Invite_ExpireTime",
				},
				(0, Localize)("#bbcode_invite_never_expires"),
			);
		} else {
			let t = p.xm.RTime32ToDate(e.time_expires);
			c = F.createElement(
				"div",
				{
					className: "Invite_ExpireTime",
				},
				(0, Localize)(
					"#bbcode_invite_expires",
					t.toLocaleTimeString(),
					t.toDateString(),
				),
			);
		}
		m = t
			? d
				? (0, Localize)("#Voice_StartTalking")
				: (0, Localize)("#ChatRoom_Invite_Accept_Inviter")
			: d
				? (0, Localize)("#Voice_StartTalking")
				: n
					? (0, Localize)("#ChatRoom_Invite_Accept_Inviter")
					: (0, Localize)("#ChatRoom_Invite_Accept");
		let A = null;
		let g = false;
		if (e.BIsUserBanned()) {
			g = true;
			A = F.createElement(
				"div",
				null,
				(0, Localize)("#bbcode_invite_banned_forever"),
			);
		} else if (
			e.GetTimeKickExpires() &&
			e.GetTimeKickExpires() > p.xm.GetServerRTime32()
		) {
			g = true;
			let t = p.xm.RTime32ToDate(e.GetTimeKickExpires()).toLocaleString([], {
				weekday: "long",
				year: "numeric",
				month: "numeric",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
			});
			A = F.createElement(
				"div",
				null,
				(0, Localize)("#bbcode_invite_banned_until", t),
			);
		}
		let h = this.props.inviter && n;
		let C = !h && !t;
		let _ = d ? s : a;
		return F.createElement(
			P.xh,
			{
				text: [m, _, e.GetURL()],
			},
			F.createElement(
				L.Z,
				{
					className: o,
					focusable: true,
					onActivate: i || g || this.AcceptInvite,
				},
				F.createElement(
					"div",
					{
						className: "leftInviteContainer",
					},
					F.createElement(X.I, {
						group: r,
						small: h,
						large: C,
					}),
					d && F.createElement("div", null, F.createElement(z.mrd, null)),
				),
				F.createElement(
					"div",
					{
						className:
							"rightInviteContainer" +
							(n || t ? " rightInvite_Horizontal" : ""),
					},
					F.createElement(
						"div",
						{
							className: "rightInviteContainerContent",
						},
						F.createElement(ie, {
							invite: this.props.invite,
							inviter: this.props.inviter,
							invitee: this.props.invitee,
						}),
						F.createElement(
							"div",
							null,
							F.createElement(
								"div",
								{
									className: "groupName",
								},
								_,
							),
						),
						u &&
							F.createElement(se, {
								url: e.GetURL(),
								bDisabled: e.BIsExpired(),
							}),
						A,
						!t &&
							n &&
							!d &&
							F.createElement(
								"div",
								null,
								F.createElement(
									"span",
									{
										className: "groupAlreadyJoined",
									},
									(0, Localize)("#bbcode_invite_already_group_member"),
								),
							),
					),
					!i &&
						!g &&
						!this.context?.IN_GAMEPADUI &&
						F.createElement(
							"button",
							{
								className: l,
								type: "button",
								onClick: this.AcceptInvite,
							},
							m,
						),
					!i &&
						!g &&
						this.context?.IN_GAMEPADUI &&
						F.createElement(
							L.Z,
							{
								className: l,
								onOKButton: this.AcceptInvite,
							},
							m,
						),
				),
				((!t && !n) || u) && c,
				F.createElement("div", {
					style: {
						clear: "left",
					},
				}),
			),
		);
	}
};
Cg([c.oI], ne.prototype, "AcceptInvite", null);
ne = Cg([N.PA], ne);
let ie = PA((e) => {
	let t = e.invite;
	let r = e.inviter;
	let n = e.invitee;
	let i = t.BIsVoiceChatInvite();
	let a = t.BIsInviteLink();
	let s = e.inviter && p.xm.FriendStore.self.accountid == e.inviter.accountid;
	let o = p.xm.ChatStore.GetChatRoomGroup(t.GetChatRoomGroupID()).name;
	let l = (0, Localize)("#bbcode_invite_youre_invited");
	if (s) {
		l = i
			? a
				? LocalizeReact(
						"#bbcode_invite_you_shared_voice_link",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							o,
							" ",
						),
					)
				: LocalizeReact(
						"#bbcode_invite_you_invited_friend_voice",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							n.display_name,
							" ",
						),
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							o,
							" ",
						),
					)
			: a
				? LocalizeReact("#bbcode_invite_you_shared_invite_link")
				: LocalizeReact(
						"#bbcode_invite_you_invited_friend",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							n.display_name,
							" ",
						),
					);
	} else if (r) {
		l = i
			? a
				? LocalizeReact(
						"#bbcode_invite_voice_url_description",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							r.display_name,
							" ",
						),
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							o,
							" ",
						),
					)
				: LocalizeReact(
						"#bbcode_invite_voice_description",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							r.display_name,
							" ",
						),
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							o,
							" ",
						),
					)
			: a
				? LocalizeReact(
						"#bbcode_invite_url_description",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							r.display_name,
							" ",
						),
					)
				: LocalizeReact(
						"#bbcode_invite_description",
						F.createElement(
							"span",
							{
								className: "inviteHighlight",
							},
							r.display_name,
							" ",
						),
					);
	}
	return F.createElement(
		"div",
		{
			className: "inviteLabel",
		},
		l,
	);
});
class ae extends F.Component {
	render() {
		let { closeModal: e, onAccept: t, strClassName: r, ...n } = this.props;
		r = "InviteDialog" + (r ? " " + r : "");
		return F.createElement(
			$.x_,
			{
				onEscKeypress: e,
			},
			F.createElement(ne, {
				...n,
				strClassName: r,
				onAccept: () => {
					if (this.props.closeModal) {
						this.props.closeModal();
					}
					if (t) {
						t();
					}
				},
			}),
		);
	}
}
class se extends F.Component {
	CopyToClipboard(e) {
		CopyURLToClipboard(this.props.url);
	}
	HandleFocus(e) {
		e.currentTarget.select();
	}
	render() {
		let e = this.props.strLabel || (0, Localize)("#bbcode_invite_url_desc");
		return F.createElement(
			"div",
			{
				className: "inviteURLContainer",
			},
			F.createElement(
				"span",
				{
					className: "inviteURLLinkDesc",
				},
				e,
			),
			F.createElement(
				"div",
				{
					className: "inviteURLAndCopy",
				},
				F.createElement("input", {
					className: "inviteURLLink",
					value: this.props.bDisabled
						? (0, Localize)("#bbcode_invite_link_text_expired")
						: this.props.url,
					onFocus: this.HandleFocus,
					onClick: this.HandleFocus,
					readOnly: true,
				}),
				!this.props.bDisabled &&
					F.createElement(
						"span",
						{
							className: "copyInviteLink",
							onClick: this.CopyToClipboard,
							title: (0, Localize)("#Chat_Copy_Clipboard"),
						},
						F.createElement(z.$rC, null),
					),
			),
		);
	}
}
Cg([c.oI], se.prototype, "CopyToClipboard", null);
Cg([c.oI], se.prototype, "HandleFocus", null);
var ce = le;
class me extends F.Component {
	m_preElem;
	CheckLoadPrettify() {
		if (!this.m_preElem) {
			return;
		}
		let e = this.m_preElem.ownerDocument.defaultView;
		if (
			!e ||
			typeof e.PR == "object" ||
			typeof e.PR == "object" ||
			e.PR === true
		) {
			return;
		}
		e.PR = true;
		let t = e.document.createElement("script");
		e.document.head.appendChild(t);
		t.onload = () => {
			this.TryRunPrettyPrint();
		};
		t.src = s.TS.COMMUNITY_CDN_ASSET_URL + "prettify/prettify.js";
	}
	BindRef(e) {
		this.m_preElem = e;
	}
	TryRunPrettyPrint() {
		this.CheckLoadPrettify();
		if (!this.m_preElem) {
			return;
		}
		let e = this.m_preElem.ownerDocument.defaultView;
		if (e && typeof e.PR == "object") {
			e.PR.prettyPrint();
		}
	}
	componentDidMount() {
		this.TryRunPrettyPrint();
	}
	componentDidUpdate() {
		this.TryRunPrettyPrint();
	}
	render() {
		return F.createElement(
			"div",
			null,
			F.createElement(
				"pre",
				{
					className: A_2("prettyprint", ce.CodeMessage),
					ref: this.BindRef,
				},
				this.props.children,
			),
		);
	}
}
Cg([c.oI], me.prototype, "BindRef", null);
const ue = ({ children: e }) => {
	return F.createElement(
		"div",
		null,
		F.createElement(
			"pre",
			{
				className: ce.PreMessage,
			},
			e,
		),
	);
};
const de = ({ children: e }) => {
	return F.createElement(
		"div",
		{
			className: ce.QuoteMessage,
		},
		e,
	);
};
const Ae = ({ children: e }) => {
	return F.createElement(
		P.xh,
		{
			text: e,
		},
		F.createElement(
			"div",
			{
				className: "spoilerMsgText",
			},
			F.createElement(
				"div",
				{
					className: "spoilerMsg",
				},
				e,
			),
		),
	);
};
var De = ke;
function Ge(e) {
	if (e.context.chat instanceof Ne.s) {
		let t = e.args.appid;
		let r = p.xm.AppInfoStore.GetAppInfo(parseInt(t)).name;
		const n =
			e.args?.connectString ||
			e.args?.remoteplay ||
			e.args?.remoteplay ||
			e.args?.lobbyID
				? xE(
						e.context.chat.chat_partner.accountid,
						parseInt(t),
						e.args?.connectString,
						e.args?.remoteplay,
						e.args?.lobbyID,
					)
				: undefined;
		let i = "";
		i =
			e.context.unAccountIDSender === e.context.chat.self.accountid
				? e.args.remoteplay
					? "#ChatRoom_GameInviteRemotePlay_YouInvited"
					: "#ChatRoom_GameInvite_YouInvited"
				: e.args.remoteplay
					? "#Friend_Notification_GameInviteRemotePlay"
					: "#Friend_Notification_GameInvite";
		return {
			title: "",
			body: (0, Localize)(i, e.context.chat.chat_partner.display_name, r, ""),
			state: n,
		};
	}
	return null;
}
function Oe(e) {
	if (e.context.chat instanceof Ne.s) {
		let t = e.args.appid;
		let r = e.args.lobbyid;
		let n = p.xm.AppInfoStore.GetAppInfo(parseInt(t)).name;
		return {
			title: "",
			body:
				e.context.unAccountIDSender === e.context.chat.self.accountid
					? (0, Localize)(
							"#Friend_Notification_GameInviteYouInvited",
							e.context.chat.chat_partner.display_name,
							n,
						)
					: (0, Localize)(
							"#Friend_Notification_GameInvite",
							e.context.chat.chat_partner.display_name,
							n,
						),
			state:
				"steam://joinlobby/" +
				t +
				"/" +
				r +
				"/" +
				e.context.chat.chat_partner.steamid64.toString(),
		};
	}
	return null;
}
function Pe(e) {
	if (e.context.chat instanceof Ne.s) {
		if (e.args.chatid != null) {
			return {
				title: "",
				body:
					e.context.unAccountIDSender === e.context.chat.self.accountid
						? (0, Localize)(
								"#bbcode_invite_you_invited_friend_voice",
								e.context.chat.chat_partner.display_name,
								e.args.chatname,
							)
						: (0, Localize)(
								"#Friend_Notification_InviteVoice",
								e.context.chat.chat_partner.display_name,
								e.args.chatname,
							),
			};
		} else {
			return {
				title: "",
				body:
					e.context.unAccountIDSender === e.context.chat.self.accountid
						? (0, Localize)(
								"#bbcode_invite_you_invited_friend",
								e.context.chat.chat_partner.display_name,
							)
						: (0, Localize)(
								"#Friend_Notification_Invite",
								e.context.chat.chat_partner.display_name,
								e.args.chatgroupname,
							),
			};
		}
	}
	return null;
}
function Le(e) {
	const t = e.context.chat;
	if (t instanceof Ne.s) {
		return {
			title: (0, Localize)(
				"#TradeOffer_FriendSentYou",
				t.chat_partner.display_name,
			),
			body: e.text,
		};
	} else {
		return null;
	}
}
function ze(e) {
	return {
		body: (0, Localize)("#Notification_Spoiler"),
	};
}
function xe(e) {
	const t = p.xm.FriendStore.GetPlayer(e.context.unAccountIDSender);
	const r = e.args.type;
	if (!r) {
		return null;
	}
	const n = e.context.chat.ChatStore.ChatRoomEffectSettings[r];
	if (n && n.locToken) {
		return {
			body: (0, Localize)(n.locToken, t.display_name),
		};
	} else {
		return null;
	}
}
He("#bbcode_random_description");
He("#bbcode_flip_description");
const Ue = He("#bbcode_video_description");
He("#bbcode_inviteurl_description");
const We = He("#bbcode_image_description");
const Ve = He("#bbcode_sticker_description");
function He(e) {
	return (t) => {
		const r = p.xm.FriendStore.GetPlayer(t.context.unAccountIDSender);
		return {
			body: (0, Localize)(e, r.display_name),
		};
	};
}
function Qe(e) {
	const { href: t, copyText: r, loadFailed: n, children: i } = e;
	let a = "NonInlinedEmbed";
	if (n) {
		a += " LoadFailed";
	}
	return F.createElement(
		P.xh,
		{
			text: r || t,
			style: "merge-adjacent",
		},
		F.createElement(
			"div",
			{
				className: a,
			},
			F.createElement(
				je.uU,
				{
					href: t,
					title: t,
				},
				i,
			),
		),
	);
}
function Ze(e) {
	const {
		preference: t,
		render: r,
		fallbackHref: n,
		fallbackRender: i,
		children: a,
	} = e;
	const s = k_2(p.xm.CookiePreferenceStore);
	if (!s) {
		return null;
	}
	if (p.xm.CookiePreferenceStore.CheckThirdPartyCookiePreference(s, t)) {
		if (r) {
			return r();
		} else {
			return a;
		}
	} else if (i) {
		return i();
	} else {
		return F.createElement(
			Qe,
			{
				href: n,
			},
			n,
		);
	}
}
var Ye;
const et = F.lazy(() => {
	return require.e(7462).then(require.bind(require, 84512));
});
function tt(e) {
	return F.createElement(
		F.Suspense,
		{
			fallback: null,
		},
		F.createElement(et, {
			...e,
		}),
	);
}
function rt() {
	return {
		url: it,
		youtube: ct,
		filteredurl: Wt,
		emoticon: Ht,
		img: dt,
		video: ht,
		og: bt,
		tweet: yt,
		inviteurl: kt,
		publishedfile: Pt,
		tradeofferlink: Lt,
		econitem: Ut,
		steamstore: qt,
		broadcast: xt,
		oembed: St,
		spoiler: Bt,
		plusone: vt,
		flip: It,
		random: Et,
		quote: Mt,
		pre: Tt,
		code: Rt,
		roomeffect: Qt,
		sticker: Zt,
	};
}
function nt(e) {
	if (typeof e == "string") {
		return e;
	}
	let t = "";
	F.Children.forEach(e, (e) => {
		if (typeof e != "string") {
			if (typeof e == "object" && e.props) {
				let r = e.props["bbcode-text"];
				if (r) {
					t += r;
				}
			}
		} else {
			t += e;
		}
	});
	return t;
}
let it = class extends pe.mX {
	render() {
		let e = this.GetArgument();
		let t = this.props.children;
		let r = null;
		let n = Me.IT(e);
		if (n != e) {
			r = n;
		}
		if (!t || !!this.GetArgument("fromclient")) {
			r = n;
		}
		if (
			p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining &&
			typeof t != "string"
		) {
			return F.createElement(
				Qe,
				{
					href: e,
				},
				F.createElement(z.Rkk, null),
				n,
			);
		} else {
			return F.createElement(
				P.xh,
				{
					text: e,
					style: "merge-adjacent",
				},
				F.createElement(
					O.uU,
					{
						href: e,
					},
					r || t,
				),
			);
		}
	}
};
it = Cg([N.PA], it);
class at extends F.Component {
	m_elContainer;
	m_frameInitialXPos;
	m_frameInitialYPos;
	m_frameInitialWidth;
	m_frameDefaultWidth;
	m_frameDesiredWidth;
	m_animationCollapse;
	ref = F.createRef();
	m_telemetryTrackedActions = {};
	constructor(e) {
		super(e);
		let t = p.xm.ChatStore.EmbedStore.GetCollapsedState(
			this.props.unAccountIDSender,
			this.props.msgUniqueKey,
		);
		let r = p.xm.ChatStore.EmbedStore.GetWidths(
			this.props.unAccountIDSender,
			this.props.msgUniqueKey,
		);
		this.state = {
			nResizedWidth: t ? 16 : r ? r.nDesiredWidth : 0,
			bResized: r !== undefined,
			bIsResizing: false,
			bIsRestoring: false,
			bMinimized: t,
			bIsMinimizing: false,
		};
		this.m_frameInitialXPos = -1;
		this.m_frameInitialYPos = -1;
		this.m_frameInitialWidth = -1;
		this.m_frameDefaultWidth = r ? r.nDefaultWidth : -1;
		this.m_frameDesiredWidth = r ? r.nDesiredWidth : -1;
	}
	TrackAction(e) {
		if (!this.m_telemetryTrackedActions[e]) {
			this.m_telemetryTrackedActions[e] = true;
			L_2(e);
		}
	}
	BindContainer(e) {
		this.m_elContainer = e;
		this.ref.current = e;
		if (this.m_elContainer && this.props.height > 450) {
			this.HandleTallImages();
		}
	}
	handleCollapse(e) {
		if (!this.state.bMinimized) {
			this.m_frameDesiredWidth = this.m_elContainer.clientWidth;
		}
		if (this.m_animationCollapse) {
			this.m_animationCollapse.Cancel();
		}
		let t = !this.state.bMinimized;
		let r = t ? this.m_frameDesiredWidth : 16;
		let n = t ? 16 : this.m_frameDesiredWidth;
		this.TrackAction(
			"/Chat/BBCodeResizableComponent/" + (t ? "Collapse" : "Uncollapse"),
		);
		this.setState(
			{
				nResizedWidth: r,
				bMinimized: false,
				bIsMinimizing: true,
			},
			() => {
				this.m_animationCollapse = new Be.w(
					this,
					{
						nResizedWidth: n,
					},
					{
						msDuration: 300,
						timing: "sine",
						setStateOnComplete: {
							bMinimized: t,
							bIsMinimizing: false,
						},
						onComplete: this.OnSizeChanged,
					},
				);
				this.m_animationCollapse.Start();
			},
		);
		p.xm.ChatStore.EmbedStore.SetCollapsedState(
			this.props.unAccountIDSender,
			this.props.msgUniqueKey,
			t,
		);
	}
	OnSizeChanged() {
		this.props.onSizeChanged(
			"BBCodeResizableComponent " +
				this.props.msgUniqueKey +
				this.state.bResized +
				this.state.bMinimized,
		);
	}
	handleRestore(e) {
		if (this.state.bResized) {
			if (this.m_animationCollapse) {
				this.m_animationCollapse.Cancel();
			}
			this.setState(
				{
					bIsRestoring: true,
				},
				() => {
					this.m_animationCollapse = new Be.w(
						this,
						{
							nResizedWidth: this.m_frameDefaultWidth,
						},
						{
							msDuration: 300,
							timing: "sine",
							setStateOnComplete: {
								bMinimized: false,
								bIsRestoring: false,
								bResized: false,
							},
							onComplete: this.OnSizeChanged,
						},
					);
					this.m_animationCollapse.Start();
				},
			);
			p.xm.ChatStore.EmbedStore.SetWidths(
				this.props.unAccountIDSender,
				this.props.msgUniqueKey,
				this.m_frameDefaultWidth,
				this.m_frameDefaultWidth,
			);
		}
	}
	OnResize(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.HandleMouseUp);
	}
	HandleMouseMove(e) {
		if (this.m_frameInitialXPos < 0) {
			this.m_frameInitialXPos = e.clientX;
		}
		if (this.m_frameInitialWidth < 0) {
			this.m_frameInitialWidth = this.m_elContainer.clientWidth;
		}
		if (this.m_frameDefaultWidth < 0 && !this.state.bResized) {
			this.m_frameDefaultWidth = this.m_elContainer.clientWidth;
		}
		if (this.m_frameInitialYPos < 0) {
			this.m_frameInitialYPos = e.clientY;
		}
		let t = e.clientX - this.m_frameInitialXPos;
		let r = e.clientY - this.m_frameInitialYPos;
		let n = this.m_frameInitialWidth + t + r;
		let i = this.props.strMediaType == "image" ? 64 : 320;
		if (n < i) {
			n = i;
		}
		if (n > 1280) {
			n = 1280;
		}
		if (this.props.maxWidth) {
			n = Math.min(n, this.props.maxWidth);
		}
		this.setState({
			nResizedWidth: n,
			bResized: true,
			bIsResizing: true,
		});
		this.TrackAction("/Chat/BBCodeResizableComponent/Resize");
		this.OnSizeChanged();
	}
	HandleTallImages() {
		let e = (this.props.width / this.props.height) * 450;
		let t = this.props.width;
		if (t > Math.min(1280, e)) {
			t = Math.min(1280, e);
		}
		if (this.props.maxWidth) {
			t = Math.min(t, this.props.maxWidth);
		}
		if (
			t <
			parseInt(
				this.m_elContainer.ownerDocument.defaultView.getComputedStyle(
					this.m_elContainer,
				).maxWidth,
			)
		) {
			this.setState({
				nMaxWidth: t,
			});
		}
		this.OnSizeChanged();
	}
	HandleMouseUp(e) {
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("mouseup", this.HandleMouseUp);
		this.m_frameInitialXPos = -1;
		this.m_frameInitialYPos = -1;
		this.m_frameInitialWidth = -1;
		if (this.state.bIsResizing) {
			this.setState({
				bIsResizing: false,
			});
		}
		if (!this.state.bMinimized && this.m_elContainer) {
			this.m_frameDesiredWidth = this.m_elContainer.clientWidth;
		}
		p.xm.ChatStore.EmbedStore.SetWidths(
			this.props.unAccountIDSender,
			this.props.msgUniqueKey,
			this.m_frameDesiredWidth,
			this.m_frameDefaultWidth,
		);
	}
	render() {
		let e = p.xm.IsGamepadUIActive();
		let t = {};
		if (this.state.nResizedWidth > 0) {
			t.width = this.state.nResizedWidth + "px";
		} else if (this.state.nMaxWidth) {
			t.maxWidth = this.state.nMaxWidth + "px";
		}
		let r = "BBCodeResizableComponent";
		if (this.props.className) {
			r += " " + this.props.className;
		}
		if (!e && this.state.bResized) {
			r += " Resized";
		}
		if (!e && this.state.bIsResizing) {
			r += " ActivelyResizing";
		}
		if (!e && this.state.bMinimized) {
			r += " Minimized";
		}
		if (!e && this.state.bIsMinimizing) {
			r += " Minimizing";
		}
		let n = this.props.titleInfo ? this.props.titleInfo : "";
		if (e) {
			return F.createElement(
				P.xh,
				{
					style: this.props["data-copystyle"],
					text: this.props["data-copytext"],
				},
				F.createElement(
					"div",
					{
						className: r,
						style: t,
						ref: this.BindContainer,
					},
					this.props.children,
				),
			);
		} else {
			return F.createElement(
				$e.p,
				{
					name: "/Chat/BBCodeResizableComponent/Component",
				},
				F.createElement(
					P.xh,
					{
						style: this.props["data-copystyle"],
						text: this.props["data-copytext"],
					},
					F.createElement(
						"div",
						{
							className: r,
							style: t,
							ref: this.BindContainer,
						},
						F.createElement(
							"div",
							{
								className: "BBCodeCollapsed",
								onClick: this.handleCollapse,
								title: n,
							},
							(0, Localize)(`#bbcode_${this.props.strMediaType}_minimized`),
						),
						!this.state.bMinimized &&
							!this.state.bIsMinimizing &&
							this.props.children,
						F.createElement(
							"div",
							{
								className: "BBCodeRestoreControl",
								onClick: this.handleRestore,
								title: (0, Localize)(
									`#bbcode_${this.props.strMediaType}_tooltip_restore`,
								),
							},
							F.createElement("div", {
								className: "restoreSize",
							}),
						),
						F.createElement(
							"div",
							{
								className: "BBCodeResizeControl",
								onMouseDown: this.OnResize,
								title: (0, Localize)(
									`#bbcode_${this.props.strMediaType}_tooltip_resize`,
								),
							},
							F.createElement(z.KOs, null),
						),
						F.createElement(
							"div",
							{
								className: "BBCodeCollapseControl",
								onClick: this.handleCollapse,
								title: this.state.bMinimized
									? (0, Localize)(
											`#bbcode_${this.props.strMediaType}_tooltip_uncollapse`,
										)
									: (0, Localize)(
											`#bbcode_${this.props.strMediaType}_tooltip_collapse`,
										),
							},
							F.createElement(z.X, null),
						),
					),
				),
			);
		}
	}
}
Cg([c.oI], at.prototype, "BindContainer", null);
Cg([c.oI], at.prototype, "handleCollapse", null);
Cg([c.oI], at.prototype, "OnSizeChanged", null);
Cg([c.oI], at.prototype, "handleRestore", null);
Cg([c.oI], at.prototype, "OnResize", null);
Cg([c.oI], at.prototype, "HandleMouseMove", null);
Cg([c.oI], at.prototype, "HandleTallImages", null);
Cg([c.oI], at.prototype, "HandleMouseUp", null);
class st extends F.Component {
	constructor(e) {
		super(e);
		let t = p.xm.ChatStore.EmbedStore.GetCollapsedState(
			this.props.unAccountIDSender,
			this.props.msgUniqueKey,
		);
		this.state = {
			bCollapsed: t,
		};
	}
	OnToggleCollapse(e) {
		let t = !this.state.bCollapsed;
		this.setState({
			bCollapsed: t,
		});
		p.xm.ChatStore.EmbedStore.SetCollapsedState(
			this.props.unAccountIDSender,
			this.props.msgUniqueKey,
			t,
		);
	}
	render() {
		let e = this.state.bCollapsed;
		let t = "BBCodeResizableComponent";
		if (this.props.className) {
			t += " " + this.props.className;
		}
		if (e) {
			t += " Minimized";
		}
		let r = this.props.titleInfo ? this.props.titleInfo : "";
		let n = e
			? (0, Localize)(`#bbcode_${this.props.strMediaType}_tooltip_uncollapse`)
			: (0, Localize)(`#bbcode_${this.props.strMediaType}_tooltip_collapse`);
		return F.createElement(
			P.xh,
			{
				style: this.props["data-copystyle"],
				text: this.props["data-copytext"],
			},
			F.createElement(
				"div",
				{
					className: t,
				},
				F.createElement(
					"div",
					{
						className: "BBCodeCollapsed",
						onClick: this.OnToggleCollapse,
						title: r,
					},
					(0, Localize)(`#bbcode_${this.props.strMediaType}_minimized`),
				),
				!this.state.bCollapsed && this.props.children,
				F.createElement(ot, {
					onClick: this.OnToggleCollapse,
					title: n,
				}),
			),
		);
	}
}
function ot(e) {
	return F.createElement(
		"div",
		{
			className: "BBCodeCollapseControl",
			onClick: e.onClick,
			title: e.title,
		},
		F.createElement(z.X, null),
	);
}
function lt(e) {
	let t = e.titleInfo ? e.titleInfo : "";
	let r = (0, Localize)(`#bbcode_${e.mediaType}_minimized`);
	(0, Localize)(`#bbcode_${e.mediaType}_tooltip_restore`);
	return F.createElement(
		"div",
		{
			className: "BBCodeAlreadyCollapsed Minimized",
		},
		F.createElement(
			"div",
			{
				className: "BBCodeAlreadyCollapsedText",
				onClick: e.onClick,
				title: t,
			},
			r,
		),
		F.createElement(
			"div",
			{
				className: "BBCodeCollapseControl",
				onClick: e.onClick,
				title: e.titleInfo,
			},
			F.createElement(z.X, null),
		),
	);
}
Cg([c.oI], st.prototype, "OnToggleCollapse", null);
let ct = class extends pe.mX {
	GetVideoID() {
		return this.GetArgument("v").replace(
			/^[^a-z0-9\-_]*([a-z0-9\-_]+).*$/gi,
			"$1",
		);
	}
	render() {
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			return this.renderNoEmbed();
		} else {
			return F.createElement(
				Ze,
				{
					preference: "youtube",
					fallbackRender: () => {
						return this.renderNoEmbed();
					},
				},
				F.createElement(mt, {
					videoId: this.GetVideoID(),
					t: this.GetArgument("t"),
					context: this.props.context,
				}),
			);
		}
	}
	renderNoEmbed() {
		let e = this.GetArgument("t");
		let t =
			"https://www.youtube.com/watch?v=" +
			encodeURIComponent(this.GetVideoID());
		if (e) {
			t += "&t=" + encodeURIComponent(e);
		}
		return F.createElement(
			Qe,
			{
				href: t,
			},
			F.createElement(z.YuU, null),
			t,
		);
	}
};
ct = Cg([N.PA], ct);
class mt extends F.Component {
	containerRef = F.createRef();
	constructor(e) {
		super(e);
		this.state = {
			strTitle: "",
			strAuthor: "",
			strVideoID: "",
		};
	}
	OnVideoInfoChanged(e) {
		let { strTitle: t, strAuthor: r, strVideoID: n } = e;
		this.setState({
			strTitle: t,
			strAuthor: r,
			strVideoID: n,
		});
	}
	OnPlayerReady() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad(
				"BBCodeYouTubeComponent " + this.state.strVideoID,
			);
		}
	}
	OnPlaceholderImageLoad() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad(
				"BBCodeYouTubeComponent " + this.state.strVideoID,
			);
		}
	}
	componentDidMount() {
		this.containerRef.current.ownerDocument.defaultView.setTimeout(() => {
			if (this.props.context.onLoad) {
				this.props.context.onLoad(
					"BBCodeYouTubeComponent " + this.state.strVideoID,
				);
			}
		}, 250);
	}
	render() {
		let e = this.state.strAuthor;
		let t = this.state.strTitle;
		let r = "https://www.youtube.com/watch?v=" + this.state.strVideoID;
		const { videoId: n, t: i } = this.props;
		if (i) {
			r += "&t=" + encodeURIComponent(i);
		}
		const a = N8(i);
		return F.createElement(
			P.xh,
			{
				style: "block",
				text: [t, r],
			},
			F.createElement(
				at,
				{
					className: "BBCodeYouTubeComponent",
					unAccountIDSender: this.props.context.unAccountIDSender,
					msgUniqueKey: this.props.context.key,
					strMediaType: "video",
					titleInfo: t,
					onSizeChanged: this.props.context.onLoad,
				},
				F.createElement(
					"div",
					{
						className: "BBCodeYouTubeComponent_Sizer BBCodeResizableElement",
						ref: this.containerRef,
					},
					F.createElement(we.N, {
						video: n,
						startSeconds: a,
						width: 640,
						height: 385,
						autoplay: false,
						controls: true,
						showFullscreenBtn: true,
						onVideoInfoChanged: this.OnVideoInfoChanged,
						onPlayerReady: this.OnPlayerReady,
					}),
					F.createElement(
						P.xh,
						{
							style: "block",
							text: [t, r],
						},
						F.createElement("img", {
							src:
								s.TS.PUBLIC_SHARED_URL +
								"images/responsive/youtube_16x9_placeholder.gif",
							width: "100%",
							onLoad: this.OnPlaceholderImageLoad,
						}),
					),
				),
				t.length > 0 &&
					F.createElement(
						O.uU,
						{
							className: "test HideWhenMinimized",
							href: r,
						},
						F.createElement(
							"div",
							{
								className: "BBCodeTitle",
							},
							t,
						),
					),
				e.length > 0 &&
					F.createElement(
						"div",
						{
							className: "BBCodeDetails HideWhenMinimized",
						},
						(0, Localize)("#bbcode_youtube_author", e),
					),
			),
		);
	}
}
var ut;
Cg([c.oI], mt.prototype, "OnVideoInfoChanged", null);
Cg([c.oI], mt.prototype, "OnPlayerReady", null);
Cg([c.oI], mt.prototype, "OnPlaceholderImageLoad", null);
(function (e) {
	e[(e.Loading = 1)] = "Loading";
	e[(e.Loaded = 2)] = "Loaded";
	e[(e.Error = 3)] = "Error";
})((ut ||= {}));
let dt = class extends pe.mX {
	k_nUnknownImageWidth = 300;
	k_nUnknownImageHeight = 300;
	k_nMaxImageWidth = 315;
	constructor(e) {
		super(e);
		let t = p.xm.ChatStore.EmbedStore.GetCollapsedState(
			this.props.context.unAccountIDSender,
			this.props.context.key,
		);
		let r = parseInt(this.GetArgument("width"));
		let n = parseInt(this.GetArgument("height"));
		this.state = {
			eLoadingState: ut.Loading,
			bCollapsed: t,
			nMediaWidth: r,
			nMediaHeight: n,
		};
	}
	OnToggleCollapse(e) {
		let t = !this.state.bCollapsed;
		this.setState({
			bCollapsed: t,
		});
		p.xm.ChatStore.EmbedStore.SetCollapsedState(
			this.props.context.unAccountIDSender,
			this.props.context.key,
			t,
		);
	}
	IsEmbeddedInOtherTag() {
		for (let e of this.props.parentTags) {
			if (e == "tweet") {
				return true;
			}
		}
		return false;
	}
	IsGiphy() {
		return this.GetArgument("giphy_search") !== undefined;
	}
	IsImgur() {
		return this.GetArgument("src").startsWith("https://imgur.com");
	}
	OnImageLoad(e) {
		let t = e.currentTarget;
		this.setState({
			eLoadingState: ut.Loaded,
			nMediaWidth: t.naturalWidth,
			nMediaHeight: t.naturalHeight,
		});
		if (this.props.context.onLoad) {
			this.props.context.onLoad("BBCodeImage " + this.props.args.src);
		}
	}
	OnImageError() {
		this.setState({
			eLoadingState: ut.Error,
		});
	}
	ShowModal(e, t) {
		let r = parseInt(this.GetArgument("width"));
		let n = parseInt(this.GetArgument("height"));
		let i = r / n;
		const a = e.currentTarget.ownerDocument.defaultView;
		let s = a.screen.height * 0.85;
		let o = Ie.OQ(r || 600, a.screen.width * 0.5, a.screen.width * 0.85);
		let l = Ie.OQ(n || 800, a.screen.height * 0.5, s);
		if (i >= 1) {
			l = (o - 50) / i + 50;
			if (l > s) {
				l = s;
				o = (l - 50) * i + 50;
			}
		} else {
			o = (l - 50) * i + 50;
		}
		HT(
			F.createElement(gt, {
				imageUrl: t,
				ownerWin: a,
				fullImageUrl: this.GetArgument("src"),
			}),
			a,
			"ImageModal",
			{
				strTitle: (0, Localize)("#bbcode_image_popout"),
				popupHeight: l,
				popupWidth: o,
			},
			h8_2(a),
		);
	}
	OnContextMenu(e) {
		DH(e, this.GetArgument("src"));
	}
	OnClick(e) {
		let t = this.GetArgument("src");
		let r = this.GetArgument("thumbnail_src");
		if (this.IsGiphy()) {
			t = r;
		} else if (this.IsImgur()) {
			t = r.replace("?fb", "");
		}
		this.ShowModal(e, t);
	}
	render() {
		let e;
		let t = this.GetArgument("thumbnail_src");
		let r = this.GetArgument("srcset", true);
		let n = this.GetArgument("src");
		let i = this.GetArgument("title");
		let a = this.state.eLoadingState;
		let s = this.IsGiphy();
		let o = a == ut.Error;
		if (s) {
			e = `/giphy ${this.GetArgument("giphy_search")}`;
		}
		if (o || p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			if (s) {
				return F.createElement(
					Qe,
					{
						href: n,
						copyText: [e, n],
						loadFailed: o,
					},
					F.createElement("div", {
						className: "NonInlinedEmbedLogo NonInlinedEmbedLogo_Giphy",
					}),
					F.createElement(
						"span",
						{
							style: {
								fontWeight: "bold",
							},
						},
						" ",
						LocalizeReact(
							"#bbcode_image_link_giphy",
							F.createElement(
								"span",
								{
									className: "giphySearch",
								},
								this.GetArgument("giphy_search"),
							),
						),
					),
				);
			}
			let t = n;
			if (i) {
				t = (0, Localize)(
					"#bbcode_disable_embed_inlining_parenthetical",
					i,
					Me.Qz(n),
				);
			}
			return F.createElement(
				Qe,
				{
					href: n,
					copyText: [i, n],
					loadFailed: o,
				},
				F.createElement(z._V3, null),
				t,
			);
		}
		if (this.IsEmbeddedInOtherTag()) {
			return F.createElement(_t, {
				className: "embeddedImg",
				context: this.props.context,
				src: t,
				onContextMenu: O.xE,
				onError: this.OnImageError,
			});
		}
		if (this.state.bCollapsed) {
			return F.createElement(lt, {
				onClick: this.OnToggleCollapse,
				mediaType: "image",
			});
		}
		let l = this.state.nMediaWidth;
		let c = this.state.nMediaHeight;
		if (!l || !c) {
			l = this.k_nUnknownImageWidth;
			c = this.k_nUnknownImageHeight;
		}
		if (this.GetArgument("proxied") == "true") {
			t += "?s=652x652";
		}
		const m = this.props.parentTags.some((e) => {
			return e === "spoiler";
		})
			? {
					minWidth: `${Math.min(l, this.k_nMaxImageWidth)}px`,
				}
			: undefined;
		let u = s
			? (0, Localize)(
					"#bbcode_image_link_giphy",
					this.GetArgument("giphy_search"),
				)
			: n;
		return F.createElement(
			F.Fragment,
			null,
			s && F.createElement(P.xh, null, F.createElement("div", null, e)),
			F.createElement(
				P.xh,
				{
					style: "block",
					text: [i, n],
				},
				F.createElement(
					"div",
					{
						className: A_2("chatImageContainer", s && "giphyImg"),
						style: m,
					},
					F.createElement(
						At,
						{
							className: "BBCodeImageWrapper",
							width: l,
							height: c,
							maxHeight: Math.min(c, this.k_nMaxImageWidth),
						},
						F.createElement("img", {
							className: "chatImageFull BBCodeResizableElement",
							src: t,
							srcSet: r,
							onLoad: this.OnImageLoad,
							onError: this.OnImageError,
							onContextMenu: this.OnContextMenu,
							onClick: this.OnClick,
						}),
						s &&
							F.createElement(pt, {
								strLink: n,
								searchText: this.GetArgument("giphy_search"),
							}),
						F.createElement(ot, {
							onClick: this.OnToggleCollapse,
							title: u,
						}),
					),
				),
			),
		);
	}
};
function At(e) {
	let t = e.height / e.width;
	let r = {
		height: 0,
		overflow: "hidden",
		paddingTop: `calc( ${t} * 100% )`,
		position: "relative",
	};
	let n = {};
	if (e.maxHeight) {
		n.maxWidth = e.maxHeight / t;
	}
	return F.createElement(
		"div",
		{
			style: n,
			className: e.className,
		},
		F.createElement(
			"div",
			{
				style: r,
				className: "PreserveAspect",
			},
			e.children,
		),
	);
}
function pt(e) {
	let t = (0, Localize)("#bbcode_image_tooltip_link_giphy", e.searchText);
	return F.createElement(
		F.Fragment,
		null,
		F.createElement(
			O.uU,
			{
				className: "chatImageURL",
				href: e.strLink,
				title: t,
			},
			F.createElement(
				"div",
				{
					className: "giphyTag",
				},
				LocalizeReact(
					"#bbcode_image_link_giphy",
					F.createElement(
						"span",
						{
							className: "giphySearch",
						},
						e.searchText,
					),
				),
			),
		),
	);
}
function gt(e) {
	const { closeModal: t, ownerWin: r, imageUrl: n, fullImageUrl: i } = e;
	const a = F.useCallback(
		(e) => {
			DH(e, i);
		},
		[i],
	);
	return F.createElement(
		$.x_,
		{
			onEscKeypress: t,
			hideTopBar: true,
		},
		F.createElement(
			"div",
			{
				className: De.ImageModalBackground,
			},
			F.createElement("img", {
				className: De.ImageModalContent,
				src: n,
				onContextMenu: a,
			}),
		),
	);
}
Cg([c.oI], dt.prototype, "OnToggleCollapse", null);
Cg([c.oI], dt.prototype, "OnImageLoad", null);
Cg([c.oI], dt.prototype, "OnImageError", null);
Cg([c.oI], dt.prototype, "ShowModal", null);
Cg([c.oI], dt.prototype, "OnContextMenu", null);
Cg([c.oI], dt.prototype, "OnClick", null);
dt = Cg([N.PA], dt);
let ht = class extends pe.mX {
	m_elVideo;
	m_listeners = new y.Ji();
	m_resizeObserver;
	m_refVideo = F.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bSeeking: false,
			bPlay: false,
			bError: false,
			bPaused: true,
			scrollArea: undefined,
			videoDimensions: undefined,
		};
	}
	componentWillUnmount() {
		this.m_listeners.Unregister();
		this.DisconnectResizeObserver();
	}
	StartVideo() {
		if (this.m_elVideo) {
			this.m_elVideo.play();
		}
	}
	DisconnectResizeObserver() {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
			this.m_resizeObserver = undefined;
		}
	}
	BindVideo(e) {
		this.m_listeners.Unregister();
		this.DisconnectResizeObserver();
		this.m_elVideo = e;
		if (!this.m_elVideo) {
			return;
		}
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"loadedmetadata",
			this.OnLoadMetadata,
		);
		let t = _f(this.m_elVideo, "y");
		if (t) {
			this.m_resizeObserver = Fd(t, this.OnResizeScrollAncestor);
		}
		let r = t
			? {
					m_nWidth: t.clientWidth,
					m_nHeight: t.clientHeight,
				}
			: undefined;
		this.setState({
			scrollArea: r,
			videoDimensions: undefined,
		});
	}
	OnLoadMetadata() {
		let e = this.m_elVideo;
		let t = {
			m_nWidth: e.videoWidth,
			m_nHeight: e.videoHeight,
		};
		this.setState({
			videoDimensions: t,
		});
	}
	OnResizeScrollAncestor(e, t) {
		if (e.length != 1) {
			return;
		}
		let r = e[0].target;
		let n = {
			m_nWidth: r.clientWidth,
			m_nHeight: r.clientHeight,
		};
		this.setState({
			scrollArea: n,
		});
	}
	OnVideoPlay() {
		this.setState({
			bPlay: true,
			bPaused: false,
		});
	}
	OnVideoPause() {
		if (this.state.bPlay) {
			this.setState({
				bPaused: true,
			});
		} else if (!this.state.bSeeking) {
			this.setState({
				bPlay: false,
			});
		}
	}
	OnVideoError(e) {
		this.setState({
			bError: true,
		});
	}
	OnVideoLoaded() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad("CBBCodeVideo " + this.props.context.key);
		}
	}
	OnPanelActivate(e) {
		if (this.m_elVideo) {
			if (this.m_elVideo.paused) {
				this.m_elVideo.play();
			} else {
				this.m_elVideo.pause();
			}
		}
	}
	render() {
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			return this.renderNoEmbed();
		} else if (this.GetArgument("steamvideo")) {
			return this.renderEmbedded();
		} else {
			return F.createElement(Ze, {
				preference: "generic",
				render: () => {
					return this.renderEmbedded();
				},
				fallbackRender: () => {
					return this.renderNoEmbed();
				},
			});
		}
	}
	renderNoEmbed() {
		const e = this.GetArgument("src");
		const t = this.GetArgument("title");
		let r = e;
		if (t) {
			r = (0, Localize)(
				"#bbcode_disable_embed_inlining_parenthetical",
				t,
				Me.Qz(e),
			);
		}
		return F.createElement(
			Qe,
			{
				href: e,
			},
			F.createElement(z.CeX, null),
			r,
		);
	}
	renderEmbedded() {
		const e = this.GetArgument("src");
		const t = this.GetArgument("title");
		const r = this.GetArgument("associated_app");
		let n = this.state.bError;
		let i = p.xm.IsGamepadUIActive();
		let a = {
			controls: this.state.bPlay,
			autoPlay: false,
			loop: false,
			muted: false,
		};
		if (n) {
			let t = F.createElement(
				O.uU,
				{
					className: "failedVideoURL",
					href: e,
					title: (0, Localize)("#bbcode_video_tooltip_link"),
				},
				F.createElement(
					"span",
					{
						className: "failedVideoSpan",
					},
					e,
				),
			);
			return F.createElement(
				"div",
				{
					className: "ChatMessageErrorSendingAlert VideoFailed",
				},
				LocalizeReact("#Chat_VideoLoadError", t),
			);
		}
		let s = {};
		let o = {};
		if (
			this.state.scrollArea &&
			this.state.scrollArea.m_nHeight > 0 &&
			this.state.videoDimensions &&
			this.state.videoDimensions.m_nHeight > 0
		) {
			let e = this.state.videoDimensions;
			let t = e.m_nWidth / e.m_nHeight;
			let r = this.state.scrollArea.m_nHeight * 0.7;
			let n = Math.floor(r * t);
			o = {
				width: e.m_nWidth,
				height: e.m_nHeight,
				maxWidth: n,
			};
			s.maxWidth = n;
		}
		let l = i ? this.OnPanelActivate : undefined;
		return F.createElement(
			Xe.q,
			null,
			F.createElement(
				P.xh,
				{
					style: "block",
					text: [t, e],
				},
				F.createElement(
					at,
					{
						className: "chatVideoContainer",
						strMediaType: "video",
						unAccountIDSender: this.props.context.unAccountIDSender,
						msgUniqueKey: this.props.context.key,
						titleInfo: e,
						onSizeChanged: this.props.context.onLoad,
						...o,
					},
					r &&
						F.createElement(Ct, {
							appid: parseInt(r),
						}),
					F.createElement(
						L.Z,
						{
							onActivate: l,
							onOKActionDescription: (0, Localize)(
								this.state.bPaused
									? "#bbcode_video_play"
									: "#bbcode_video_pause",
							),
						},
						F.createElement(
							"video",
							{
								style: s,
								className: "BBCodeResizableElement",
								...a,
								ref: this.BindVideo,
								onPause: this.OnVideoPause,
								onPlay: this.OnVideoPlay,
								controlsList: "nodownload",
								onError: this.OnVideoError,
								onLoadedData: this.OnVideoLoaded,
								controls: !i,
							},
							F.createElement("source", {
								src: e,
								type: this.GetArgument("type", true),
								onError: this.OnVideoError,
								onLoad: this.OnVideoLoaded,
							}),
						),
						!this.state.bPlay &&
							F.createElement(
								"div",
								{
									className: "chatVideoPlayControl HideWhenMinimized",
									onClick: this.StartVideo,
								},
								F.createElement(
									"div",
									{
										className: "playButtonContainer",
									},
									F.createElement(z.jGG, null),
								),
							),
						!i &&
							F.createElement(
								O.uU,
								{
									className: "chatImageURL",
									href: e,
									title: (0, Localize)("#bbcode_video_tooltip_link"),
								},
								F.createElement(z.YNO, null),
							),
					),
				),
			),
		);
	}
};
function Ct(e) {
	const { appid: t } = e;
	const r = p.xm.AppInfoStore.GetAppInfo(t);
	if (!r || !r.is_valid) {
		return null;
	}
	return F.createElement(
		Je.he,
		{
			toolTipContent: (0, Localize)("#AssociatedApp_ViewOnStore"),
			className: De.AssociatedAppContainer,
		},
		F.createElement(
			L.Z,
			{
				className: De.AssociatedApp,
				onActivate: (e) => {
					let r = GetOwningWindowForEvent(e);
					EP(r, `${s.TS.STORE_BASE_URL}app/${t}`);
				},
				onOKActionDescription: (0, Localize)("#AssociatedApp_ViewOnStore"),
			},
			F.createElement("img", {
				src: r.icon_url,
				className: De.Image,
			}),
			F.createElement(
				"div",
				{
					className: De.Name,
				},
				r.name,
			),
		),
	);
}
Cg([c.oI], ht.prototype, "StartVideo", null);
Cg([c.oI], ht.prototype, "BindVideo", null);
Cg([c.oI], ht.prototype, "OnLoadMetadata", null);
Cg([c.oI, s_2(100)], ht.prototype, "OnResizeScrollAncestor", null);
Cg([c.oI], ht.prototype, "OnVideoPlay", null);
Cg([c.oI], ht.prototype, "OnVideoPause", null);
Cg([c.oI], ht.prototype, "OnVideoError", null);
Cg([c.oI], ht.prototype, "OnVideoLoaded", null);
Cg([c.oI], ht.prototype, "OnPanelActivate", null);
ht = Cg([N.PA], ht);
class _t extends F.Component {
	OnLoad() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad("ImgNotifyChatOnLoad " + this.props.src);
		}
	}
	render() {
		let { context: e, ...t } = this.props;
		return F.createElement("img", {
			...t,
			onLoad: this.OnLoad,
		});
	}
}
function ft(e) {
	const { context: t, width: r, height: n, src: i, ...a } = e;
	const s = `${i}?s=${r}x${n}`;
	const o = s + "dpx2x";
	return F.createElement(_t, {
		context: t,
		...a,
		src: s,
		srcSet: `${s} 1x, ${o} 2x`,
	});
}
Cg([c.oI], _t.prototype, "OnLoad", null);
let bt = class extends pe.mX {
	CopyToClipboard() {
		let e = this.GetArgument("url");
		if (e && e.length != 0) {
			CopyURLToClipboard(e);
		}
	}
	HandleFocus(e) {
		e.target.select();
	}
	OnLoad() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad(
				`CBBCodeOpenGraph.OnLoad ${this.GetArgument("url")}`,
			);
		}
	}
	render() {
		let e = this.GetArgument("img");
		let t = this.GetArgument("title");
		let r = this.GetArgument("desc");
		let n = this.GetArgument("url");
		let i = Me.Qz(n);
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			let e = n;
			if (t) {
				e = (0, Localize)("#bbcode_disable_embed_inlining_parenthetical", t, i);
			}
			return F.createElement(
				Qe,
				{
					href: n,
					copyText: [e, n],
				},
				F.createElement(z.Rkk, null),
				e,
			);
		}
		return F.createElement(
			P.xh,
			{
				style: "block",
				text: [t, r, n],
			},
			F.createElement(
				L.Z,
				{
					className: "ChatMessageOpenGraph",
					focusable: p.xm.IsGamepadUIActive(),
					onActivate: () => {
						if (!p.xm.IsGamepadUIActive()) {
							return;
						}
						let e = p_2(n) ? E_2(n) : n;
						p.xm.OpenURLInBrowser(e, C.m);
					},
					onOKActionDescription: (0, Localize)("#Chat_Visit_Link"),
				},
				F.createElement(
					"div",
					{
						className: "OpenGraphContent",
					},
					e &&
						e.length > 0 &&
						F.createElement(
							"div",
							{
								className: "OpenGraphImgBackground",
							},
							F.createElement("img", {
								className: "ChatMessageOpenGraph_Image",
								src: e,
								onLoad: this.OnLoad,
							}),
						),
					e &&
						e.length > 0 &&
						F.createElement(
							O.uU,
							{
								className: "OpenGraphImgContainer",
								href: n,
							},
							F.createElement(ft, {
								width: 256,
								height: 140,
								context: this.props.context,
								className: "ChatMessageOpenGraph_Image",
								src: e,
								onContextMenu: (e) => {
									xE(e, n);
								},
							}),
						),
					F.createElement(
						"div",
						{
							className: "ChatMessageOpenGraph_Body",
						},
						t &&
							t.length > 0 &&
							F.createElement(
								O.uU,
								{
									className: "ChatMessageOpenGraph_Title",
									href: n,
								},
								t,
							),
						r &&
							r.length > 0 &&
							F.createElement(
								"div",
								{
									className: "ChatMessageOpenGraph_Description",
								},
								r,
							),
					),
					F.createElement("div", {
						style: {
							clear: "left",
						},
					}),
				),
				F.createElement(
					"div",
					{
						className: "OpenGraphFooter",
					},
					F.createElement(
						"div",
						{
							className: "OpenGraphMessageURL",
						},
						F.createElement(
							"span",
							{
								className: "OpenGraphMessageURLPosition",
								onFocus: this.HandleFocus,
								onClick: this.HandleFocus,
							},
							F.createElement(
								"span",
								{
									className: "OpenGraphMessageURL_short",
								},
								i,
							),
							F.createElement("input", {
								className: "OpenGraphMessageURL_full",
								value: n,
								onFocus: this.HandleFocus,
								onClick: this.HandleFocus,
								readOnly: true,
							}),
						),
					),
					F.createElement(
						"div",
						{
							className: "OpenGraphURLButton CopyToClipboard",
							onClick: this.CopyToClipboard,
							title: (0, Localize)("#Chat_Copy_Link_Clipboard"),
						},
						F.createElement(z.$rC, null),
					),
				),
			),
		);
	}
};
Cg([c.oI], bt.prototype, "CopyToClipboard", null);
Cg([c.oI], bt.prototype, "HandleFocus", null);
Cg([c.oI], bt.prototype, "OnLoad", null);
bt = Cg([N.PA], bt);
let yt = class extends pe.mX {
	FormatCreatedDate(e) {
		let t = new Date(e);
		let r = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		][t.getMonth()];
		return `${t.getDate()} ${r} ${t.getFullYear()}`;
	}
	OpenTweet(e) {
		let t = false;
		let r = e.target;
		let n = e.currentTarget;
		while (r && r != n) {
			if (r.nodeName == "A" || r.classList.contains("chatVideoContainer")) {
				t = true;
				break;
			}
			r = r.parentElement;
		}
		if (!t && !BElementContainsSelection(n)) {
			EP(e, this.GetArgument("url"));
		}
	}
	OnImageLoaded() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad("CBBCodeTweet " + this.GetArgument("url"));
		}
	}
	render() {
		let e = this.GetArgument("created");
		let t = this.GetArgument("profile_name");
		let r = this.GetArgument("profile_screen_name");
		let n = this.GetArgument("profile_image");
		let i = this.GetArgument("profile_verified");
		let a = this.GetArgument("url");
		let s = `http://twitter.com/${r}`;
		let o = i == "true";
		e = this.FormatCreatedDate(e);
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			let r;
			let n = {
				year: "numeric",
				month: "long",
				day: "numeric",
			};
			let i = new Date(e).toLocaleDateString(
				LocalizationManager.GetPreferredLocales(),
				n,
			);
			if (typeof this.props.children == "string") {
				r = this.props.children;
			} else if (this.props.children instanceof Array) {
				for (let e of this.props.children) {
					if (typeof e == "string") {
						r = e;
						break;
					}
				}
			}
			return F.createElement(
				Qe,
				{
					href: a,
					copyText: [r, a],
				},
				F.createElement("div", {
					className: "NonInlinedEmbedLogo NonInlinedEmbedLogo_Twitter",
				}),
				(0, Localize)("#bbcode_disable_embed_inlining_tweet", t, i),
				F.createElement("br", null),
				F.createElement(
					"div",
					{
						className: "NonInlinedEmbedSingleLine",
					},
					r,
				),
			);
		}
		return F.createElement(
			"div",
			{
				className: De.ChatMessageTweet,
				onClick: this.OpenTweet,
			},
			F.createElement(
				P.xh,
				{
					style: "block",
					text: `${t} (@${r})`,
				},
				F.createElement(
					"div",
					{
						className: De.ChatMessageTweet_Header,
					},
					F.createElement(
						O.uU,
						{
							className: De.ChatMessageTweet_ProfileImage,
							href: s,
						},
						F.createElement("img", {
							src: n,
							onLoad: this.OnImageLoaded,
						}),
					),
					F.createElement(
						"div",
						{
							className: De.ChatMessageTweet_NameSection,
						},
						F.createElement(
							"div",
							{
								className: De.ChatMessageTweet_NameGroup,
							},
							F.createElement(
								O.uU,
								{
									className: De.ChatMessageTweet_Name,
									href: s,
								},
								t,
							),
							o &&
								F.createElement("div", {
									className: De.ChatMessageTweet_Verified,
								}),
						),
						F.createElement(
							O.uU,
							{
								className: De.ChatMessageTweet_ScreenName,
								href: s,
							},
							"@",
							r,
						),
					),
					F.createElement(O.uU, {
						className: De.ChatMessageTweet_Logo,
						href: a,
					}),
				),
			),
			F.createElement(
				P.xh,
				{
					style: "block-continue prepend-innertext-with-newline",
					text: a,
				},
				F.createElement(
					"div",
					{
						className: De.ChatMessageTweet_Body,
					},
					this.props.children,
				),
			),
			F.createElement(
				"div",
				{
					className: De.ChatMessageTweet_Footer,
				},
				F.createElement(
					"div",
					{
						className: De.ChatMessageTweet_Created,
					},
					e,
				),
			),
		);
	}
};
Cg([c.oI], yt.prototype, "OpenTweet", null);
Cg([c.oI], yt.prototype, "OnImageLoaded", null);
yt = Cg([N.PA], yt);
let St = class extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			bActivated: false,
		};
	}
	Activate() {
		this.setState({
			bActivated: true,
		});
	}
	OnImageLoaded() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad("CBBCodeOEmbed " + this.props.context.key);
		}
	}
	render() {
		let e = this.GetArgument("url");
		let t = this.GetArgument("title");
		let r = this.GetArgument("author");
		let n = this.GetArgument("provider_name");
		let i = this.GetArgument("preview_image");
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			let r = e;
			if (t) {
				r = (0, Localize)("#bbcode_disable_embed_inlining_parenthetical", t, e);
			}
			return F.createElement(
				Qe,
				{
					href: e,
					copyText: [t, e],
				},
				F.createElement(z.Rkk, null),
				r,
			);
		}
		let a;
		let s = !this.state.bActivated;
		if (n == "SoundCloud" || n == "Spotify") {
			s = false;
		}
		if (s) {
			a = F.createElement(
				"div",
				{
					className: "OEmbedPreview",
					onClick: this.Activate,
				},
				F.createElement(
					"div",
					{
						className: "oembedImgContainer",
					},
					F.createElement(
						P.xh,
						{
							style: "block",
							text: [t, e],
						},
						F.createElement("img", {
							src: i,
							onLoad: this.OnImageLoaded,
						}),
					),
					F.createElement(
						"div",
						{
							className: "oembedHint",
						},
						(0, Localize)("#bbcode_oembed_preview_hint"),
					),
				),
				F.createElement(
					"div",
					{
						className: "oembedProvider",
					},
					n,
				),
				F.createElement(
					"div",
					{
						className: "oembedTitle",
					},
					t,
				),
			);
		} else {
			const {
				src: i,
				width: s,
				height: o,
			} = JSON.parse(this.GetArgument("iframe_attrs"));
			a = F.createElement(
				O.uU,
				{
					className: "OpenGraphImgContainer",
					href: e,
					style: {
						display: "flex",
						flexDirection: "column",
					},
				},
				F.createElement(wt, {
					width: s,
					height: o,
					src: i,
					strProviderName: n,
				}),
				n &&
					n.length &&
					F.createElement(
						"div",
						{
							className: "oembedProvider",
						},
						n,
					),
				t &&
					t.length > 0 &&
					F.createElement(
						"div",
						{
							className: "oembedTitle",
						},
						t,
					),
				r &&
					r.length > 0 &&
					F.createElement(
						"div",
						{
							className: "oembedAuthor",
						},
						(0, Localize)("#bbcode_oembed_author", r),
					),
			);
		}
		let o = "generic";
		if (n == "Vimeo") {
			o = "vimeo";
		} else if (n == "Sketchfab") {
			o = "sketchfab";
		}
		return F.createElement(
			Ze,
			{
				fallbackHref: e,
				preference: o,
			},
			F.createElement(
				P.xh,
				{
					style: "block",
					text: [t, e],
				},
				F.createElement(
					"div",
					{
						className: "BBCodeOEmbedComponent " + n,
					},
					a,
				),
			),
		);
	}
};
function wt(e) {
	const t = e.strProviderName;
	let { src: r, width: n, height: i } = e;
	if (!r || !r.startsWith("http")) {
		return null;
	}
	if (t == "SoundCloud") {
		r = r.replace("visual=true", "visual=false");
	}
	const a = 640;
	let s = typeof n == "number" ? n : parseInt(n);
	let o = typeof i == "number" ? i : parseInt(i);
	if (!isNaN(s) && !isNaN(o) && s > a) {
		o *= a / s;
		s = a;
	}
	const l = {
		flex: isNaN(o) || `1 1 ${o}px`,
		maxWidth: a,
	};
	return F.createElement("iframe", {
		height: isNaN(o) || `${o}px`,
		style: l,
		src: r,
		scrolling: "no",
		frameBorder: 0,
		sandbox: "allow-scripts allow-same-origin",
		allowFullScreen: t === "Vimeo" || undefined,
	});
}
Cg([c.oI], St.prototype, "Activate", null);
Cg([c.oI], St.prototype, "OnImageLoaded", null);
St = Cg([N.PA], St);
class Bt extends pe.mX {
	render() {
		return F.createElement(Ae, null, this.props.children);
	}
}
class vt extends pe.mX {
	render() {
		const {
			context: { bAnimate: e, onAnimationStart: t, onAnimationEnd: r },
		} = this.props;
		return F.createElement(
			"div",
			{
				className: A_2(De.plusOne, e && De.MsgAnimating),
				onAnimationStart: t,
				onAnimationEnd: r,
			},
			"+1",
		);
	}
}
class It extends pe.mX {
	render() {
		const {
			context: { bAnimate: e, onAnimationStart: t, onAnimationEnd: r },
		} = this.props;
		const n = this.props.children;
		const i = this.GetArgument("result");
		const a = A_2(De.flipCoinAndResult, e && De.MsgAnimating);
		const s = A_2(De.flipCoinContainer, i);
		return F.createElement(
			P.xh,
			{
				text: n,
			},
			F.createElement(
				"div",
				{
					className: a,
					onAnimationStart: t,
					onAnimationEnd: r,
				},
				F.createElement("div", null, "/flip:"),
				F.createElement(
					"div",
					{
						className: s,
					},
					F.createElement(
						"div",
						{
							className: De.coin,
						},
						F.createElement("div", {
							className: De.front,
						}),
						F.createElement("div", {
							className: De.front_b,
						}),
						F.createElement("div", {
							className: De.mid,
						}),
						F.createElement("div", {
							className: De.back,
						}),
						F.createElement("div", {
							className: De.back_b,
						}),
					),
				),
				F.createElement(
					"div",
					{
						className: De.resultLabel,
					},
					(0, Localize)("#SlashCommandCoinFlip_Result_" + i),
				),
			),
		);
	}
}
class Et extends pe.mX {
	Pad(e, t) {
		let r = String(e);
		while (r.length < t) {
			r = "0" + r;
		}
		return r;
	}
	GetLastNumber(e) {
		if (e < 10) {
			return e;
		}
		let t = Math.pow(10, Math.floor(Math.log(e) / Math.log(10)) - 1);
		let r = Math.floor(e / t);
		return r - Math.floor(r / 10) * 10;
	}
	render() {
		let e = this.props.children;
		let t = this.GetArgument("min");
		let r = this.GetArgument("max");
		let n = this.Pad(this.GetArgument("result"), r.length);
		let i = [];
		let a = true;
		for (let e = 0; e < r.length; e++) {
			if (n[e] != "0") {
				a = false;
			}
			let t = ((r.length - e) * Math.max(r.length * 0.5, 2)) / r.length;
			let s = 10 - e;
			i.push(
				F.createElement(
					"div",
					{
						key: "random" + e,
						className: De.numberCounterContainer,
					},
					F.createElement(
						"div",
						{
							className: De.numberColumn + (a ? " " + De.startingZero : ""),
							style: {
								animationDuration: t + "s",
								animationName: De["randomNumbers" + s],
							},
						},
						F.createElement(
							"div",
							{
								className: `${De.randomNumberLabel} ${De.randomActual}`,
							},
							n[e],
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 1),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 2),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 3),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 4),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 5),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 6),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 7),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 8),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							this.GetLastNumber(parseInt(n[e]) + 9),
						),
						F.createElement(
							"div",
							{
								className: De.randomNumberLabel,
							},
							n[e],
						),
					),
					F.createElement("div", {
						className: De.randomNumberShadow,
					}),
				),
			);
		}
		const {
			context: { bAnimate: s, onAnimationStart: o, onAnimationEnd: l },
		} = this.props;
		return F.createElement(
			P.xh,
			{
				text: e,
			},
			F.createElement(
				"div",
				{
					className: A_2(De.randomMsg, s && De.MsgAnimating),
					onAnimationStart: o,
					onAnimationEnd: l,
				},
				F.createElement("span", null, "/random "),
				F.createElement(
					"span",
					{
						className: De.randomValues,
					},
					t,
					"-",
					r,
				),
				" : ",
				i,
			),
		);
	}
}
class Mt extends pe.mX {
	render() {
		return F.createElement(de, null, this.props.children);
	}
}
class Tt extends pe.mX {
	render() {
		return F.createElement(ue, null, this.props.children);
	}
}
class Rt extends pe.mX {
	render() {
		return F.createElement(me, null, this.props.children);
	}
}
class kt extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			invite: undefined,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r = e.args.invitecode;
		return {
			invite: e.context.chat.ChatStore.InviteStore.GetInviteFromCode(r),
		};
	}
	render() {
		let e = this.props.context.chat.GetMember(
			this.props.context.unAccountIDSender,
		);
		return F.createElement(ne, {
			invite: this.state.invite,
			inviter: e,
		});
	}
}
class Dt extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			invite: undefined,
			inviter: undefined,
			invitee: undefined,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r;
		let n;
		let i;
		let a = e.args.chatgroupid;
		let s = e.args.chatid;
		let o = e.context.chat;
		if (o.self.accountid == e.context.unAccountIDSender) {
			n = o.self;
			i = o.chat_partner;
			r = o.accountid_partner;
		} else {
			n = o.chat_partner;
			i = o.self;
			r = o.self.accountid;
		}
		return {
			invite: e.context.chat.ChatStore.InviteStore.GetDirectInviteInfo(a, s, r),
			inviter: n,
			invitee: i,
		};
	}
	render() {
		return F.createElement(ne, {
			invite: this.state.invite,
			inviter: this.state.inviter,
			invitee: this.state.invitee,
		});
	}
}
class Nt extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			inviter: undefined,
			inviteTarget: undefined,
			gameInvite: undefined,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r;
		let n;
		let i = e.args.appid;
		let a = e.args.connect;
		let s = e.args.remoteplay;
		let o = e.context.chat;
		if (o.self.accountid == e.context.unAccountIDSender) {
			r = o.self;
			n = o.chat_partner;
		} else {
			r = o.chat_partner;
			n = o.self;
		}
		return {
			inviter: r,
			inviteTarget: n,
			gameInvite: e.context.chat.ChatStore.GameInviteStore.RegisterGameInvite(
				e.context.unAccountIDSender,
				e.context.rtTimestamp,
				parseInt(i),
				a,
				s,
				undefined,
			),
		};
	}
	render() {
		return F.createElement(Z, {
			inviter: this.state.inviter,
			inviteTarget: this.state.inviteTarget,
			gameInvite: this.state.gameInvite,
		});
	}
}
class Ft extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			inviter: undefined,
			inviteTarget: undefined,
			gameInvite: undefined,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r;
		let n;
		let i = e.args.appid;
		let a = e.args.lobbyid;
		let s = e.context.chat;
		if (s.self.accountid == e.context.unAccountIDSender) {
			r = s.self;
			n = s.chat_partner;
		} else {
			r = s.chat_partner;
			n = s.self;
		}
		return {
			inviter: r,
			inviteTarget: n,
			gameInvite: e.context.chat.ChatStore.GameInviteStore.RegisterGameInvite(
				e.context.unAccountIDSender,
				e.context.rtTimestamp,
				parseInt(i),
				"",
				"",
				a,
			),
		};
	}
	render() {
		return F.createElement(Z, {
			inviter: this.state.inviter,
			inviteTarget: this.state.inviteTarget,
			gameInvite: this.state.gameInvite,
		});
	}
}
class Gt extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			broadcastid: "",
			broadcaster: undefined,
			viewer: undefined,
			appid: 0,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r;
		let n;
		let i = e.args.broadcastid;
		let a = Number(e.args.appid);
		let s = e.context.chat;
		if (s.self.accountid == e.context.unAccountIDSender) {
			r = s.self;
			n = s.chat_partner;
		} else {
			r = s.chat_partner;
			n = s.self;
		}
		return {
			broadcastid: i,
			broadcaster: r,
			viewer: n,
			appid: a,
		};
	}
	render() {
		return F.createElement(x, {
			broadcastid: this.state.broadcastid,
			appid: this.state.appid,
			broadcaster: this.state.broadcaster,
			viewer: this.state.viewer,
		});
	}
}
class Ot extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			broadcaster: undefined,
			viewer: undefined,
			requestid: 0,
			appid: 0,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r;
		let n;
		let i = Number(e.args.requestid);
		let a = e.context.chat;
		let s = p.xm.FriendStore.self.persona.m_unGamePlayedAppID;
		if (a.self.accountid != e.context.unAccountIDSender) {
			r = a.self;
			n = a.chat_partner;
		} else {
			r = a.chat_partner;
			n = a.self;
		}
		return {
			requestid: i,
			appid: s,
			broadcaster: r,
			viewer: n,
		};
	}
	render() {
		return F.createElement(W, {
			requestid: this.state.requestid,
			appid: this.state.appid,
			broadcaster: this.state.broadcaster,
			viewer: this.state.viewer,
		});
	}
}
let Pt = class extends pe.mX {
	m_bMounted;
	constructor(e) {
		super(e);
		this.m_bMounted = false;
		this.state = {
			bHaveVoteData: false,
			bLocalVoteDown: false,
			bLocalVoteUp: false,
			nCommentCount: parseInt(this.GetArgument("num_comments_public")),
		};
	}
	componentWillUnmount() {
		this.m_bMounted = false;
	}
	componentDidMount() {
		this.m_bMounted = true;
		let e = p.xm.CMInterface;
		if (e) {
			let t = this.GetArgument("fileid");
			let r = v.w.Init(_e.LZ, 8509);
			r.Body().add_published_file_ids().set_published_file_id(t);
			e.SendMsgAndAwaitResponse(r, _e.ke).then((e) => {
				if (
					e.Body().eresult() == 1 &&
					e.Body().user_item_vote_details().length == 1
				) {
					let t = e.Body().user_item_vote_details()[0].vote();
					if (this.m_bMounted) {
						this.setState({
							bHaveVoteData: true,
							bLocalVoteUp: t == 1,
							bLocalVoteDown: t == 2,
						});
					}
				}
			});
		}
	}
	VoteItem(e, t) {
		let r = p.xm.CMInterface;
		if (r) {
			let n = v.w.Init(_e.A7, 8507);
			n.Body().set_published_file_id(t);
			n.Body().set_vote_up(e);
			r.SendMsgAndAwaitResponse(n, _e.DA).then((t) => {
				if (t.Body().eresult() == 1 && this.m_bMounted) {
					this.setState({
						bLocalVoteUp: e,
						bLocalVoteDown: !e,
					});
				}
			});
		}
	}
	render() {
		let e;
		let t = this.GetArgument("fileid");
		let r = this.GetArgument("url");
		let n = this.GetArgument("title");
		let i = this.GetArgument("description");
		let a = this.GetArgument("preview_url");
		let s = parseInt(this.GetArgument("file_type"));
		let o = ["SteamPublishedFile"];
		switch (s) {
			case 16: {
				o.push("clip");
				e = F.createElement(tt, {
					previewURL: a,
					clipID: this.GetArgument("external_asset_id"),
				});
				a = undefined;
				break;
			}
			case 4: {
				o.push("video");
				break;
			}
			case 3:
			case 5: {
				o.push("image");
			}
		}
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			let e = r;
			if (n) {
				e = (0, Localize)("#bbcode_disable_embed_inlining_steam_workshop", n);
			}
			let t = F.createElement(z.Rkk, null);
			switch (s) {
				case 4: {
					t = F.createElement(z.CeX, null);
					break;
				}
				case 3:
				case 5: {
					t = F.createElement(z._V3, null);
				}
			}
			return F.createElement(
				Qe,
				{
					href: r,
					copyText: [e, r],
				},
				t,
				e,
			);
		}
		let l;
		let c = parseInt(this.GetArgument("num_comments_public"));
		let m = parseInt(this.GetArgument("votes_up"));
		if (this.state.bLocalVoteUp) {
			m++;
		}
		if (n || i) {
			l = F.createElement(
				P.xh,
				{
					text: [n, i, r],
				},
				F.createElement(
					"div",
					{
						className: "ChatLargeImageContainer_Description",
					},
					n &&
						F.createElement(
							O.uU,
							{
								className: "ChatMessageOpenGraph_Title",
								href: r,
							},
							n,
						),
					i &&
						F.createElement(
							"div",
							{
								className: "ChatMessageOpenGraph_Description",
							},
							i,
						),
				),
			);
		}
		return F.createElement(
			"div",
			{
				className: o.join(" "),
			},
			a &&
				a.length > 0 &&
				F.createElement(
					O.uU,
					{
						className: "ChatLargeImageContainer",
						href: r,
					},
					F.createElement(_t, {
						context: this.props.context,
						className: "ChatLargeImageContainer_Image",
						src: a,
						onContextMenu: (e) => {
							DH(e, r);
						},
					}),
				),
			e,
			l,
			F.createElement(O.uU, {
				className: "SteamPublishedFile_Logo",
				href: r,
			}),
			this.state.bHaveVoteData &&
				F.createElement(
					"div",
					null,
					F.createElement(
						"div",
						{
							className: "workshopItemControls",
						},
						F.createElement(
							"div",
							{
								className: "workshopItemControlCtn",
							},
							m >= 0 &&
								F.createElement(
									"span",
									{
										className: "upvoteCount",
									},
									m,
								),
							c >= 0 &&
								F.createElement(
									"span",
									{
										className: "commentCount",
									},
									c,
								),
							F.createElement(
								"span",
								{
									className: this.state.bLocalVoteUp
										? "general_btn voteUp toggled"
										: "general_btn voteUp",
									onClick: () => {
										this.VoteItem(true, t);
									},
								},
								(0, Localize)("#bbcode_community_publishedfile_vote_up"),
							),
							F.createElement("span", {
								className: this.state.bLocalVoteDown
									? "general_btn voteDown toggled"
									: "general_btn voteDown",
								onClick: () => {
									this.VoteItem(false, t);
								},
							}),
						),
					),
				),
		);
	}
};
Pt = Cg([N.PA], Pt);
class Lt extends pe.mX {
	OnCreateOfferClick(e) {
		let t = "NewTradeOffer" + parseInt(this.GetArgument("partner"));
		GetOwningWindowForEvent(e)
			.open(
				this.GetArgument("url"),
				t,
				"height=1120,width=1028,resize=yes,scrollbars=yes",
			)
			.focus();
	}
	render() {
		let e = this.GetArgument("url");
		let t = parseInt(this.GetArgument("partner"));
		if (t && t == this.props.context.unAccountIDSender) {
			let r = this.props.context.chat.GetMember(t);
			if (r) {
				let t = (0, Localize)("#TradeOfferLink_Label");
				return F.createElement(
					P.xh,
					{
						style: "block",
						text: [t, e],
					},
					F.createElement(
						"div",
						{
							className: "ChatMessageInvite NoBGSplitInvite TradeOfferInvite",
						},
						F.createElement(
							"div",
							{
								className: "leftInviteContainer",
							},
							F.createElement(H.gv, {
								friend: r,
								context: {
									chat: this.props.context.chat,
								},
								bLarge: true,
							}),
						),
						F.createElement(
							"div",
							{
								className: "rightInviteContainer rightInvite_Horizontal",
							},
							F.createElement(
								"div",
								{
									className: "rightInviteContainerContent",
								},
								F.createElement(
									"div",
									{
										className: "inviteLabel TradeOfferInvite_Title",
									},
									LocalizeReact(
										"#TradeOfferLink_SharedTradeLink",
										r.display_name,
									),
								),
								F.createElement(se, {
									url: e,
									strLabel: t,
								}),
							),
							F.createElement(
								"button",
								{
									className: "inviteButton inviteButtonJoinChat",
									type: "button",
									onClick: this.OnCreateOfferClick,
								},
								LocalizeReact("#TradeOfferLink_SendUserOffer"),
							),
						),
						F.createElement("div", {
							style: {
								clear: "left",
							},
						}),
					),
				);
			}
		}
		return F.createElement(
			O.uU,
			{
				href: e,
			},
			e,
		);
	}
}
Cg([c.oI], Lt.prototype, "OnCreateOfferClick", null);
class zt extends pe.mX {
	ViewOfferClick(e) {
		let t = this.GetArgument("id");
		let r = s.TS.COMMUNITY_BASE_URL + "tradeoffer/" + t + "/";
		let n = "ViewTradeOffer" + t;
		let i = GetOwningWindowForEvent(e).open(
			r,
			n,
			"height=1120,width=1028,resize=yes,scrollbars=yes",
		);
		i?.focus();
	}
	ViewMyOffersClick(e) {
		let t = this.props.context.chat.self.steamid64;
		let r = this.GetArgument("id");
		let n = `${s.TS.COMMUNITY_BASE_URL}profiles/${t}/tradeoffers/sent/#tradeofferid_${r}`;
		EP(e, n);
	}
	render() {
		let e = this.GetArgument("id");
		let t = parseInt(this.GetArgument("sender"));
		if (!e && this.GetArgument("url")) {
			return F.createElement(Lt, {
				...this.props,
			});
		}
		let r = this.props.context.chat;
		let n = r.self.accountid == t;
		let i = F.createElement(
			"span",
			{
				className: "inviteeNameLabel",
			},
			r.chat_partner.display_name,
		);
		return F.createElement(
			"div",
			{
				className: "ChatMessageInvite TradeOfferInvite",
			},
			F.createElement(
				"div",
				{
					className: "leftInviteContainer",
				},
				F.createElement(H.gv, {
					friend: n ? r.self : r.chat_partner,
					context: {
						chat: r,
					},
					bLarge: true,
				}),
				F.createElement(z.h20, null),
			),
			F.createElement(
				"div",
				{
					className:
						"rightInviteContainer" + (n ? " rightInvite_Horizontal" : ""),
				},
				F.createElement(
					"div",
					{
						className: "rightInviteContainerContent",
					},
					F.createElement(
						P.xh,
						null,
						F.createElement(
							"div",
							{
								className: "inviteLabel TradeOfferInvite_Title",
							},
							LocalizeReact(
								n ? "#TradeOffer_YouSentFriend" : "#TradeOffer_FriendSentYou",
								i,
							),
						),
					),
					F.Children.count(this.props.children) > 0 &&
						F.createElement(
							"div",
							{
								className: "TradeOffer_NoteFromFriendCtn",
							},
							F.createElement("div", {
								className: "TradeOffer_NoteFromFriend_QuoteArrow",
							}),
							F.createElement(
								P.xh,
								null,
								F.createElement(
									"div",
									{
										className: "inviteLabel TradeOffer_NoteFromFriend",
									},
									this.props.children,
								),
							),
						),
				),
				F.createElement(
					"button",
					{
						className: "DialogButton Primary",
						type: "button",
						onClick: n ? this.ViewMyOffersClick : this.ViewOfferClick,
					},
					LocalizeReact("#TradeOffer_ViewTradeOffer"),
				),
			),
			F.createElement("div", {
				style: {
					clear: "left",
				},
			}),
		);
	}
}
Cg([c.oI], zt.prototype, "ViewOfferClick", null);
Cg([c.oI], zt.prototype, "ViewMyOffersClick", null);
class xt extends pe.mX {
	constructor(e) {
		super(e);
		this.state = {
			broadcaster: undefined,
		};
	}
	static getDerivedStateFromProps(e, t) {
		let r = new he.b(e.args.broadcaster);
		return {
			broadcaster: p.xm.FriendStore.GetPlayer(r.GetAccountID()),
		};
	}
	render() {
		return F.createElement(V, {
			broadcaster: this.state.broadcaster,
		});
	}
}
let Ut = class extends pe.mX {
	m_bMounted;
	containerRef = F.createRef();
	CopyToClipboard() {
		let e = this.GetArgument("url");
		if (e && e.length != 0) {
			CopyURLToClipboard(e);
		}
	}
	constructor(e) {
		super(e);
		this.m_bMounted = false;
		this.state = {
			bLoading: true,
			bStillLoading: false,
			bLoadFail: false,
			bLoadSuccess: false,
			description: null,
		};
	}
	componentWillUnmount() {
		this.m_bMounted = false;
	}
	componentDidMount() {
		this.m_bMounted = true;
		let e = p.xm.CMInterface;
		if (e) {
			let t = parseInt(this.GetArgument("appid"));
			let r = this.GetArgument("classid");
			let n = this.GetArgument("instanceid");
			let i = v.w.Init(fe.qp);
			i.Body().set_language(s.TS.LANGUAGE);
			i.Body().set_appid(t);
			let a = i.Body().add_classes();
			a.set_classid(r);
			a.set_instanceid(n);
			fe.tB.GetAssetClassInfo(e.GetServiceTransport(), i).then((e) => {
				if (this.m_bMounted) {
					if (e.GetEResult() == 1) {
						this.setState({
							bLoading: false,
							bLoadFail: false,
							bLoadSuccess: true,
							description: e.Body().descriptions()[0],
						});
					} else {
						this.setState({
							bLoading: false,
							bLoadFail: true,
							bLoadSuccess: false,
						});
					}
				}
			});
		}
		this.containerRef.current.ownerDocument.defaultView.setTimeout(() => {
			if (this.m_bMounted) {
				this.setState((e) => {
					return e.bLoading
						? {
								bStillLoading: true,
							}
						: null;
				});
			}
		}, 500);
	}
	OnImageLoaded() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad("CBBCodeEconItem " + this.GetArgument("url"));
		}
	}
	render() {
		let e = this.GetArgument("image");
		let t = this.GetArgument("url");
		let r = parseInt(this.GetArgument("appid"));
		let n = this.GetArgument("contextid");
		let i = this.GetArgument("assetid");
		let a = this.GetArgument("market_hash_name");
		let o = parseInt(this.GetArgument("owner"));
		let l = p.xm.AppInfoStore.GetAppInfo(r);
		if (o && t) {
			let c = this.props.context.chat.GetMember(o);
			let m = c ? c.display_name : this.GetArgument("persona");
			let u = Me.Qz(t);
			let d = `${s.TS.COMMUNITY_BASE_URL}economy/image/${e}/512x512`;
			let A = {
				color: "",
			};
			let g = `${s.TS.COMMUNITY_BASE_URL}market/listings/${r}/${a}`;
			let h = `${s.TS.COMMUNITY_BASE_URL}tradeoffer/new/?partner=${o}&for_items[]=${r}_${n}_${i}`;
			if (this.state.bLoadSuccess) {
				if (this.state.description.name_color()) {
					A.color = "#" + this.state.description.name_color();
				}
				if (this.state.description.icon_url_large()) {
					d = `${
						s.TS.COMMUNITY_BASE_URL
					}economy/image/${this.state.description.icon_url_large()}/512x512`;
				} else if (this.state.description.icon_url()) {
					d = `${
						s.TS.COMMUNITY_BASE_URL
					}economy/image/${this.state.description.icon_url()}/512x512`;
				}
			}
			return F.createElement(
				P.xh,
				{
					text: t,
				},
				F.createElement(
					"div",
					{
						className: "ChatMessageOpenGraph",
						ref: this.containerRef,
					},
					F.createElement(
						"div",
						{
							className: "OpenGraphContent ClientFetchesData",
						},
						F.createElement(
							"div",
							{
								className: "OpenGraphImgBackground",
							},
							F.createElement("img", {
								className: "ChatMessageOpenGraph_Image",
								src: d,
								onLoad: this.OnImageLoaded,
							}),
						),
						F.createElement(
							O.uU,
							{
								className: "OpenGraphImgContainer",
								href: t,
							},
							F.createElement(_t, {
								context: this.props.context,
								className: "ChatMessageOpenGraph_Image",
								src: d,
								onContextMenu: (e) => {
									xE(e, t);
								},
							}),
						),
						F.createElement(
							"div",
							{
								className: "ChatMessageOpenGraph_Body",
							},
							this.state.bStillLoading &&
								F.createElement(ee.t, {
									size: "medium",
									position: "center",
								}),
							this.state.bLoadSuccess &&
								F.createElement(
									P.xh,
									{
										text: [
											(0, Localize)(
												"#bbcode_econ_ItemTitle",
												m,
												this.state.description.name(),
											),
											t,
										],
									},
									F.createElement(
										"div",
										null,
										F.createElement(
											O.uU,
											{
												className: "ChatMessageOpenGraph_Title",
												href: t,
												style: A,
											},
											(0, Localize)(
												"#bbcode_econ_ItemTitle",
												m,
												this.state.description.name(),
											),
										),
										F.createElement(
											"div",
											{
												className: "ChatMessageOpenGraph_Description",
											},
											F.createElement(
												"div",
												{
													className: "EconItemOpenGraph_GameInfo",
												},
												F.createElement("img", {
													src: l.icon_url,
													onLoad: this.OnImageLoaded,
												}),
												F.createElement(
													"div",
													null,
													F.createElement("div", null, l.name),
													F.createElement(
														"div",
														null,
														this.state.description.type(),
													),
												),
											),
										),
										F.createElement(
											"div",
											{
												style: {
													marginTop: "1em",
												},
											},
											this.state.description.tradable() &&
												p.xm.CMInterface &&
												o != p.xm.CMInterface.steamid.GetAccountID() &&
												F.createElement(
													O.uU,
													{
														className: "general_btn inline",
														href: h,
													},
													(0, Localize)("#bbcode_econ_TradeWithOwner", m),
												),
											this.state.description.marketable() &&
												F.createElement(
													O.uU,
													{
														className: "general_btn inline",
														href: g,
													},
													(0, Localize)("#bbcode_econ_ViewInMarket"),
												),
										),
									),
								),
							this.state.bLoadFail &&
								F.createElement(
									"div",
									null,
									F.createElement(
										O.uU,
										{
											className: "ChatMessageOpenGraph_Title",
											href: t,
										},
										(0, Localize)("#bbcode_econ_UnknownItem"),
									),
									F.createElement(
										"div",
										{
											className: "ChatMessageOpenGraph_Description",
										},
										(0, Localize)("#bbcode_econ_LoadFail"),
									),
								),
						),
					),
					F.createElement(
						"div",
						{
							className: "OpenGraphFooter",
						},
						F.createElement(
							O.uU,
							{
								className: "OpenGraphMessageURL",
								href: t,
							},
							F.createElement(
								"span",
								{
									className: "OpenGraphMessageURLPosition",
								},
								F.createElement(
									"span",
									{
										className: "OpenGraphMessageURL_short",
									},
									u,
								),
								F.createElement(
									"span",
									{
										className: "OpenGraphMessageURL_full",
									},
									t,
								),
							),
						),
						F.createElement(
							"div",
							{
								className: "OpenGraphURLButton CopyToClipboard",
								onClick: this.CopyToClipboard,
							},
							F.createElement(z.$rC, null),
						),
					),
				),
			);
		}
		return F.createElement(
			O.uU,
			{
				href: t,
			},
			t,
		);
	}
};
Cg([c.oI], Ut.prototype, "CopyToClipboard", null);
Cg([c.oI], Ut.prototype, "OnImageLoaded", null);
Ut = Cg([N.PA], Ut);
class Wt extends pe.mX {
	render() {
		let e = this.props.children ? this.props.args[""] : "";
		return F.createElement(
			P.xh,
			{
				text: (0, Localize)("#bbcode_linkremoved"),
			},
			F.createElement(
				"span",
				{
					className: "filteredURL bb_removedlink",
					title: (0, Localize)("#Community_RemoveLink_Tooltip"),
				},
				F.createElement(z.eTF, null),
				F.createElement(
					"span",
					{
						className: "threatURLDesc",
					},
					(0, Localize)("#bbcode_linkremoved_desc"),
				),
				F.createElement(
					"span",
					{
						className: "threatURL",
					},
					e,
				),
			),
		);
	}
}
let Vt = class extends pe.mX {
	render() {
		let e = this.GetArgument();
		if (e) {
			if (e == "here") {
				e = "online";
			}
			if (e == "all" || e == "online") {
				return F.createElement(
					"span",
					{
						className: "mention me",
					},
					F.createElement(
						"span",
						{
							className: "MentionAtSymbol",
						},
						"@",
					),
					e,
				);
			}
			{
				let t = parseInt(e);
				let r = t && this.props.context.chat.GetMember(t);
				r ||= t && p.xm.FriendStore.GetPlayer(t);
				if (r) {
					let e = r.accountid == this.props.context.chat.self.accountid;
					return F.createElement(
						H.Rg,
						{
							friend: r,
							context: {
								chat: this.props.context.chat,
							},
						},
						F.createElement(
							"span",
							{
								className: "mention" + (e ? " me" : ""),
							},
							F.createElement(
								"span",
								{
									className: "MentionAtSymbol",
								},
								"@",
							),
							r.display_name,
						),
					);
				}
			}
		}
		return F.createElement("span", null, "@" + e);
	}
};
Vt = Cg([N.PA], Vt);
class Ht extends pe.mX {
	render() {
		let e = "";
		if (typeof this.props.children == "string") {
			e = this.props.children;
		} else {
			F.Children.forEach(this.props.children, (t) => {
				if (typeof t == "string") {
					e += t;
				}
				if (typeof t == "object" && t.props) {
					let r = t.props["bbcode-text"];
					if (r) {
						e += r;
					}
				}
			});
		}
		if (e) {
			return F.createElement(Se.nl, {
				emoticon: e,
				emoticonHoverStore: be.s,
				large: this.props.context.bUseLargeEmoticons,
			});
		} else {
			return null;
		}
	}
}
var jt;
(function (e) {
	e[(e.Large = 3)] = "Large";
	e[(e.Medium = 2)] = "Medium";
	e[(e.Small = 1)] = "Small";
	e[(e.Tiny = 0)] = "Tiny";
})((jt ||= {}));
let qt = class extends pe.mX {
	state = {
		SteamStoreItem: null,
		bStoreRequestFailed: false,
		bPlayVideo: false,
		nThumbnailHovered: -1,
		nContentSize: jt.Large,
	};
	m_contentRef = F.createRef();
	m_storePreferences = p.xm.SettingsStore.StorePreferences;
	m_resizeObserver = null;
	async componentDidMount() {
		const e = this.GetArgument("app");
		const t = await (async function (e) {
			const t = s.TS.COUNTRY || "US";
			const r = await D.get(
				`${s.TS.STORE_BASE_URL}api/appdetails?appids=${e}&cc=${t}&language=${
					s.TS.LANGUAGE
				}&filters=basic,price_overview,developers,screenshots,movies,release_date,content_descriptors&client=${
					s.TS.IN_CLIENT
				}&origin=${xv()}`,
			);
			let n = null;
			if (r && r.data) {
				n = r.data[e];
			}
			if (!n || !n.success) {
				return null;
			}
			const {
				name: i,
				is_free: a,
				short_description: o,
				header_image: l,
				developers: c,
				screenshots: m,
				movies: u,
				release_date: d,
				price_overview: A,
				content_descriptors: p,
				steam_appid: g,
			} = n.data;
			return {
				name: i,
				is_free: a,
				description: EK(o),
				header_image: l,
				developer: c && c[0],
				screenshot: m && m[0] && m[0].path_thumbnail,
				screenshots: m && m,
				movie:
					u &&
					u[0] &&
					u[0].webm &&
					u[0].webm[480] &&
					u[0].webm[480].replace("http://", "https://"),
				thumbnail: u && u[0] && u[0].thumbnail,
				release_date: d && d.date,
				url: Dn(g, "chatlink"),
				price: A && A.final_formatted,
				initial_price: A && A.initial_formatted,
				discount: A && A.discount_percent && A.discount_percent,
				content_descriptor_ids: p && p.ids,
			};
		})(e);
		if (t) {
			this.setState(
				{
					SteamStoreItem: t,
					bStoreRequestFailed: false,
				},
				this.OnFrameLoaded,
			);
		} else {
			this.setState({
				bStoreRequestFailed: true,
			});
		}
		let r = this.m_contentRef.current;
		if (r) {
			this.m_resizeObserver = Fd(r, this.OnResize);
		}
	}
	componentWillUnmount() {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
		}
	}
	OnResize() {
		let e = this.m_contentRef.current?.getClientRects()[0]?.width;
		if (e) {
			if (e < 288) {
				this.setState({
					nContentSize: jt.Tiny,
				});
			} else if (e < 348) {
				this.setState({
					nContentSize: jt.Small,
				});
			} else if (e < 484) {
				this.setState({
					nContentSize: jt.Medium,
				});
			} else {
				this.setState({
					nContentSize: jt.Large,
				});
			}
		}
	}
	OnFrameLoaded() {
		if (this.props.context.onLoad) {
			this.props.context.onLoad("CBBCodeSteamStore " + this.GetArgument("app"));
		}
	}
	OpenStoreLink(e) {
		let t = GetOwningWindowForEvent(e);
		EP(t, this.state.SteamStoreItem.url);
		e.stopPropagation();
	}
	PlayVideoClicked() {
		this.setState({
			bPlayVideo: !this.state.bPlayVideo,
		});
	}
	OnThumbnailOver(e) {
		this.setState({
			nThumbnailHovered: e,
		});
	}
	OnThumbnailLeave() {
		this.setState({
			nThumbnailHovered: -1,
		});
	}
	CopyToClipboard() {
		let e = this.props.children;
		if (e && e.length != 0) {
			CopyURLToClipboard(e);
		}
	}
	render() {
		if (p.xm.SettingsStore.FriendsSettings.bDisableEmbedInlining) {
			let e = nt(this.props.children);
			return F.createElement(
				Qe,
				{
					href: e,
				},
				F.createElement(z.Rkk, null),
				e,
			);
		}
		const e = () => {};
		if (this.state.bStoreRequestFailed) {
			let t = p.xm.FriendStore.GetPlayer(
				this.props.context.unAccountIDSender,
			).display_name;
			let r = nt(this.props.children);
			let n = F.createElement(
				"span",
				{
					className: De.senderName,
				},
				t,
			);
			let i = F.createElement(
				"span",
				{
					className: De.URLSent,
				},
				r,
			);
			let a = F.createElement(
				O.uU,
				{
					className: De.SteamURL,
					href: "https://store.steampowered.com/",
				},
				(0, Localize)("#bbcode_steam_store_embed_Failed_Steam_Store"),
			);
			return F.createElement(
				L.Z,
				{
					className: De.ChatMessageSteamStore_Failed,
					onActivate: e,
					onOKActionDescription: (0, Localize)(
						"#bbcode_steam_store_embed_ViewStorePage_Filtered",
					),
				},
				F.createElement(
					"span",
					null,
					LocalizeReact("#bbcode_steam_store_embed_Failed", n, a, i),
				),
			);
		}
		let t = this.state.SteamStoreItem;
		if (!t) {
			return F.createElement(
				"div",
				{
					className: De.ChatMessageSteamStore,
					style: {
						width: 640,
						height: 208,
					},
				},
				F.createElement(
					"div",
					{
						className: De.ChatMessageSteamStore_Header,
						style: {
							height: 70,
						},
					},
					F.createElement("div", {
						className: De.ChatMessageSteamStore_HeaderImage,
					}),
				),
				F.createElement(ee.t, null),
			);
		}
		const {
			name: r,
			price: n,
			description: i,
			header_image: a,
			developer: s,
			movie: o,
			thumbnail: l,
			release_date: c,
			screenshots: m,
			is_free: u,
			initial_price: d,
			discount: A,
			content_descriptor_ids: g,
		} = t;
		let h = false;
		const C =
			this.m_storePreferences &&
			this.m_storePreferences.content_descriptor_preferences() &&
			this.m_storePreferences
				.content_descriptor_preferences()
				.content_descriptors_to_exclude() &&
			this.m_storePreferences
				.content_descriptor_preferences()
				.content_descriptors_to_exclude()
				.map((e) => {
					return e.content_descriptorid();
				});
		if (
			g &&
			C &&
			g.some((e) => {
				return C.indexOf(e) !== -1;
			})
		) {
			h = true;
		}
		let _ = [];
		let f = true;
		if (h) {
			f = false;
		} else {
			for (let e = 0; e < m.length; e++) {
				let t = e;
				if (!o) {
					t = e + 1;
				}
				if ((o && t > 2) || (!o && t > 3)) {
					break;
				}
				let r = "";
				if (m && m[t] && m[t].path_thumbnail !== "undefined") {
					r = `${m[t].path_thumbnail}`;
				} else {
					f = false;
				}
				_.push(
					F.createElement(
						"div",
						{
							key: "screenshot" + t,
							className: De.ChatMessageSteamStore_Screenshot,
						},
						F.createElement("img", {
							className: De.ChatMessageSteamStore_ScreenshotThumbnail,
							src: r,
							onMouseEnter: () => {
								return this.OnThumbnailOver(t);
							},
						}),
					),
				);
			}
		}
		let b = De.Large;
		let y = A != "0" && A != null;
		let S = this.state.nThumbnailHovered;
		let w = this.state.bPlayVideo;
		let B = F.createElement(
			"div",
			{
				className: De.ChatMessageSteamStore_FilteredDescription,
			},
			(0, Localize)("#bbcode_steam_store_embed_Filtered"),
			" ",
		);
		switch (this.state.nContentSize) {
			case jt.Tiny: {
				b = De.TinyContent;
				break;
			}
			case jt.Small: {
				b = De.SmallContent;
				break;
			}
			case jt.Medium: {
				b = De.MediumContent;
				break;
			}
			case jt.Large: {
				b = De.LargeContent;
			}
		}
		return F.createElement(
			L.Z,
			{
				ref: this.m_contentRef,
				className: A_2(
					De.ChatMessageSteamStore,
					h ? De.ChatMessagesSteamStore_FilteredContent : null,
					b,
				),
				onOKButton: this.OpenStoreLink,
				onOKActionDescription: (0, Localize)(
					h
						? "#bbcode_steam_store_embed_ViewStorePage_Filtered"
						: "#bbcode_steam_store_embed_ViewStorePage",
				),
			},
			F.createElement(
				"div",
				{
					className: De.ChatMessageSteamStore_Header,
				},
				a &&
					F.createElement(
						F.Fragment,
						null,
						F.createElement("img", {
							className: De.ChatMessageSteamStore_HeaderImage,
							src: a,
							onClick: h || this.OpenStoreLink,
						}),
						h &&
							F.createElement(
								"div",
								{
									className: De.ChatMessageSteamStore_HeaderImageFiltered,
								},
								(0, Localize)("#bbcode_steam_store_embed_Image_Filtered"),
							),
						F.createElement("img", {
							className: A_2(De.ChatMessageSteamStore_HeaderImage, De.Blurred),
							src: a,
						}),
					),
				F.createElement(
					"div",
					{
						className: De.ChatMessageSteamStore_GameDetails,
					},
					F.createElement(
						"div",
						{
							className: De.ChatMessageSteamStore_GameNameAndIcon,
							onClick: h || this.OpenStoreLink,
						},
						F.createElement(
							"div",
							{
								className: De.ChatMessageSteamStore_Name,
							},
							r,
						),
					),
					F.createElement(
						"div",
						null,
						(0, Localize)("#bbcode_steam_store_embed_From"),
						F.createElement(
							"span",
							{
								style: {
									color: "#fffc",
								},
							},
							`${s}`,
						),
					),
					F.createElement(
						"div",
						{
							style: {
								fontSize: 12,
							},
						},
						(0, Localize)("#bbcode_steam_store_embed_ReleaseDate"),
						F.createElement(
							"span",
							{
								style: {
									color: "#fffc",
								},
							},
							`${c}`,
						),
					),
				),
			),
			F.createElement(
				"div",
				{
					className: De.ChatMessageSteamStore_Body,
				},
				F.createElement(
					"div",
					{
						className: De.ChatMessageSteamStore_DetailsContainer,
					},
					F.createElement(
						"div",
						{
							className: De.ChatMessageTweet_NameSection,
						},
						F.createElement(
							"div",
							{
								className: De.ChatMessageSteamStore_Description,
							},
							h ? B : i,
							" ",
						),
						F.createElement(
							"div",
							{
								className: De.ChatMessageSteamStore_Footer,
							},
							F.createElement(
								"div",
								{
									className: De.ChatMessageSteamStore_PricingContainer,
								},
								F.createElement(
									"div",
									{
										className: De.ChatMessageSteamStore_Pricing,
									},
									y &&
										F.createElement(
											"div",
											{
												className: De.ChatMessageSteamStore_Pricing_Discount,
											},
											"-" + A + "%",
										),
									F.createElement(
										"div",
										{
											className:
												De.ChatMessageSteamStore_Pricing_FinalContainer,
										},
										y &&
											d &&
											F.createElement(
												"div",
												{
													className: De.ChatMessageSteamStore_Pricing_Initial,
												},
												`${d}`,
											),
										n &&
											F.createElement(
												"div",
												{
													className: A_2(
														De.ChatMessageSteamStore_Pricing_Final,
														y ? De.hasDiscount : null,
													),
												},
												`${n}`,
											),
									),
									u &&
										!n &&
										F.createElement(
											"span",
											{
												className: De.ChatMessageSteamStore_Free,
											},
											(0, Localize)("#bbcode_steam_store_embed_FreeToPlay"),
										),
								),
								F.createElement(
									"div",
									{
										className: De.ChatMessageSteamStore_ViewStore,
										onClick: this.OpenStoreLink,
									},
									(0, Localize)(
										h
											? "#bbcode_steam_store_embed_ViewStorePage_Filtered"
											: "#bbcode_steam_store_embed_ViewStorePage",
									),
								),
							),
							F.createElement(
								"div",
								{
									className: De.ChatMessageSteamStore_CopyURL,
									onClick: this.CopyToClipboard,
									title: (0, Localize)("#Chat_Copy_Link_Clipboard"),
								},
								F.createElement(z.$rC, null),
							),
						),
					),
				),
				!h &&
					F.createElement(
						"div",
						{
							className: De.ChatMessageSteamStore_MediaContainer,
						},
						F.createElement(
							"div",
							{
								className: De.ChatMessageSteamStore_MainMedia,
							},
							o &&
								F.createElement(
									"div",
									{
										className: A_2(
											De.ChatMessageSteamStore_VideoThumbnail,
											w ? De.videoPlaying : null,
										),
										onClick: this.PlayVideoClicked,
									},
									S < 0 || S == null
										? F.createElement(
												F.Fragment,
												null,
												F.createElement("img", {
													src: l,
												}),
												F.createElement(
													"div",
													{
														className: De.ChatMessageSteamStore_VideoPlayButton,
													},
													F.createElement(z.jGG, null),
												),
											)
										: F.createElement("img", {
												src: `${m[S].path_thumbnail}`,
												style: {
													width: "100%",
												},
											}),
								),
							!o &&
								m &&
								F.createElement("img", {
									src: `${m[Math.max(S, 0)].path_thumbnail}`,
									style: {
										width: "100%",
									},
								}),
						),
						f &&
							m &&
							F.createElement(
								"div",
								{
									className: De.ChatMessageSteamStore_ThumbnailsContainer,
									onMouseLeave: this.OnThumbnailLeave,
								},
								_,
							),
					),
				F.createElement(
					"div",
					{
						className: A_2(
							De.ChatMessageSteamStore_VideoLargeContainer,
							w ? De.videoPlaying : null,
						),
						onClick: this.PlayVideoClicked,
					},
					w &&
						F.createElement("video", {
							className: De.ChatMessageSteamStore_VideoLarge,
							src: o,
							controls: true,
							autoPlay: true,
						}),
					F.createElement(
						"div",
						{
							onClick: this.PlayVideoClicked,
						},
						F.createElement(z.sED, null),
					),
				),
			),
		);
	}
};
Cg([c.oI, s_2(100)], qt.prototype, "OnResize", null);
Cg([c.oI], qt.prototype, "OnFrameLoaded", null);
Cg([c.oI], qt.prototype, "OpenStoreLink", null);
Cg([c.oI], qt.prototype, "PlayVideoClicked", null);
Cg([c.oI], qt.prototype, "OnThumbnailOver", null);
Cg([c.oI], qt.prototype, "OnThumbnailLeave", null);
Cg([c.oI], qt.prototype, "CopyToClipboard", null);
qt = Cg([N.PA], qt);
let Qt = class extends pe.mX {
	static {
		Ye = this;
	}
	static k_iCooldownMs = 5000;
	state = {
		bDisabled: false,
	};
	OnReplayAnimation() {
		const e = this.props.args.type;
		this.props.context.chat.RoomEffectManager().ActivateRoomEffect(e);
		const t = window.setTimeout(() => {
			this.setState({
				bDisabled: false,
				iTimerID: undefined,
			});
		}, Ye.k_iCooldownMs);
		this.setState({
			bDisabled: true,
			iTimerID: t,
		});
	}
	componentWillUnmount() {
		if (this.state.iTimerID) {
			window.clearTimeout(this.state.iTimerID);
		}
	}
	render() {
		const e = p.xm.FriendStore.GetPlayer(this.props.context.unAccountIDSender);
		const t = this.props.args.type;
		const r = Re.B[t];
		if (!r) {
			console.log("Attempt to render unknown room effect " + t);
			return null;
		}
		const n = r.locToken;
		return F.createElement(
			"div",
			{
				className: De.RoomEffectContainer,
			},
			F.createElement(
				"span",
				{
					className: De.RoomEffectIcon,
				},
				r.renderEffectIcon(),
			),
			LocalizeReact(n, e.display_name),
			F.createElement(
				"div",
				{
					style: {
						marginLeft: "auto",
						marginRight: "16px",
					},
				},
				F.createElement(
					ye.jn,
					{
						disabled: this.state.bDisabled,
						style: {
							padding: "0px 8px",
						},
						onClick: this.state.bDisabled || this.OnReplayAnimation,
					},
					(0, Localize)("#ChatRoom_ReplayRoomEffect"),
				),
			),
		);
	}
};
Cg([c.oI], Qt.prototype, "OnReplayAnimation", null);
Qt = Ye = Cg([N.PA], Qt);
class Zt extends pe.mX {
	m_imageRef = F.createRef();
	state = {
		bIsHovered: false,
	};
	OnMouseOver() {
		this.setState({
			bIsHovered: true,
		});
	}
	OnMouseOut() {
		this.setState({
			bIsHovered: false,
		});
	}
	render() {
		const e = this.GetArgument("type");
		const t = G(s.TS.COMMUNITY_CDN_URL, e);
		return F.createElement(
			"div",
			{
				style: {
					cursor: "pointer",
					position: "relative",
					width: "150px",
					height: "150px",
				},
				onMouseOver: this.OnMouseOver,
				onMouseOut: this.OnMouseOut,
				onFocus: this.OnMouseOver,
				onBlur: this.OnMouseOut,
			},
			F.createElement("img", {
				ref: this.m_imageRef,
				style: {
					display: "block",
					zIndex: 1,
				},
				src: t,
			}),
			this.state.bIsHovered &&
				F.createElement(Yt, {
					target: this.m_imageRef.current,
					sticker: e,
				}),
		);
	}
}
function Yt(e) {
	const { target: t, sticker: r } = e;
	const n = (function (e) {
		const [t, r] = F.useState(null);
		F.useEffect(() => {
			let t = true;
			D.get(
				`${s.TS.COMMUNITY_CDN_URL}economy/stickerjson/${encodeURIComponent(
					e,
				)}?l=${encodeURIComponent(s.TS.LANGUAGE)}&origin=${xv()}`,
			)
				.then((e) => {
					return t && r(e.data);
				})
				.catch((e) => {
					return console.error(`Failed to load stickerJSON: ${e}`);
				});
			return () => {
				t = false;
			};
		}, [e]);
		return t;
	})(r);
	if (!n) {
		return null;
	}
	const { appid: i } = n;
	return F.createElement(Se.kW, {
		target: t,
		sticker: {
			appid: i,
			name: r,
		},
	});
}
Cg([c.oI], Zt.prototype, "OnMouseOver", null);
Cg([c.oI], Zt.prototype, "OnMouseOut", null);
var cr = lr;
class ur {
	m_VoiceChatStore;
	m_CMInterface;
	m_RootElement;
	constructor(e) {
		this.m_VoiceChatStore = e;
	}
	Init(e) {
		this.m_CMInterface = e;
		if (s.TS.IN_CLIENT) {
			this.m_RootElement = document.createElement("div");
			document.body.appendChild(this.m_RootElement);
			ir.H(this.m_RootElement).render(
				F.createElement(dr, {
					voiceChat: this.m_VoiceChatStore,
					cm: this.m_CMInterface,
				}),
			);
		}
	}
}
let dr = PA((e) => {
	const t = q3(() => {
		return e.cm.steamid.ConvertTo64BitString();
	});
	const r = F.useMemo(() => {
		return {
			useActiveAccount: () => {
				return t;
			},
		};
	}, [t]);
	const n = e.voiceChat.video_streams;
	return F.createElement(
		mr.Rh,
		{
			value: r,
		},
		n
			.filter((e) => {
				return e.stream;
			})
			.map((e) => {
				return F.createElement(Ar, {
					key: e.unique_id,
					video: e,
				});
			}),
		n
			.filter((t) => {
				return (
					t.stream &&
					t.showOnDesktop &&
					e.voiceChat.GetUserSendsVideo(t.accountid)
				);
			})
			.map((e) => {
				return F.createElement(pr, {
					key: e.unique_id,
					video: e,
				});
			}),
	);
});
function Ar(e) {
	const t = OJ("RemoteVideo-" + e.video.unique_id, {
		browserType: ar.W.EBrowserType_OpenVROverlay,
		eCreationFlags: b.Wf.DisableDPIScale,
		strVROverlayKey: "valve.steam.friendsui.remotevideo_" + e.video.unique_id,
		title: "FriendsUI - Remote Video - " + e.video.unique_id,
		dimensions: {
			width: 1920,
			height: 1080,
			left: 0,
			top: 0,
		},
		body_class: cr.BodyNoOverflow,
		replace_existing_popup: true,
	});
	const { element: r } = t;
	if (r) {
		return createPortal(
			F.createElement(gr, {
				...e,
			}),
			r,
		);
	} else {
		return null;
	}
}
function pr(e) {
	const t = h3("RemoteVideoDesktop-" + e.video.accountid);
	const r = OJ(
		"RemoteVideoDesktop-" + e.video.unique_id,
		{
			browserType: ar.W.EBrowserType_DirectHWND,
			eCreationFlags: b.Wf.None,
			title: "Remote Video - " + e.video.accountid,
			dimensions: {
				width: 1920,
				height: 1080,
				left: 0,
				top: 32,
			},
			body_class: cr.BodyNoOverflow,
		},
		{
			...t,
			onClose: () => {
				e.video.showOnDesktop = false;
				p.xm.ChatStore.VoiceChat.SetReceivingVideo(e.video.accountid, false);
			},
		},
	);
	const { element: n, popupObj: i } = r;
	if (!n) {
		return null;
	}
	if (i) {
		const t = p.xm.FriendStore.GetPlayer(e.video.accountid);
		t.LoadIfNecessary();
		z7(
			() => {
				return t.is_ready;
			},
			{
				timeout: 5000,
			},
		).then(() => {
			return (i.title = t.display_name);
		});
	}
	return createPortal(
		F.createElement(gr, {
			...e,
		}),
		n,
	);
}
function gr(e) {
	const { video: t } = e;
	const r = F.useRef();
	F.useLayoutEffect(() => {
		if (r.current) {
			r.current.srcObject = t.stream;
		}
	});
	return F.createElement(
		"div",
		null,
		F.createElement("video", {
			className: cr.RemoteVideo,
			ref: r,
			autoPlay: true,
			playsInline: true,
			muted: true,
		}),
	);
}
export class kP extends p.iw {
	m_window;
	constructor(e) {
		super();
		this.m_window = e;
	}
	BringToFront() {
		if (
			this.m_window.SteamClient != null &&
			this.m_window.SteamClient.Window != null &&
			this.m_window.SteamClient.Window.BringToFront != null
		) {
			this.m_window.SteamClient.Window.BringToFront();
		} else {
			this.m_window.focus();
		}
	}
	FlashWindow(e) {
		if (
			this.m_window.SteamClient != null &&
			this.m_window.SteamClient.Window != null
		) {
			if (e && this.m_window.SteamClient.Window.FlashWindow != null) {
				this.m_window.SteamClient.Window.FlashWindow();
			} else if (this.m_window.SteamClient.Window.StopFlashWindow != null) {
				this.m_window.SteamClient.Window.StopFlashWindow();
			}
		}
	}
	Close() {
		if (this.m_window) {
			this.m_window.close();
		}
	}
	get title() {
		return this.m_window.document.title;
	}
	set title(e) {
		this.m_window.document.title = e;
	}
	BIsClosed() {
		return this.m_window.closed;
	}
	BIsVisible() {
		return this.m_window.document.visibilityState == "visible";
	}
	BIsFocused() {
		return this.m_window.document.hasFocus();
	}
	IsMinimized() {
		if (Fj(this.m_window, "Window.IsWindowMinimized")) {
			return this.m_window.SteamClient.Window.IsWindowMinimized();
		} else {
			return Promise.resolve(false);
		}
	}
	OnFocus(e) {
		let t = () => {
			e();
		};
		this.m_window.addEventListener("focus", t);
		return {
			unregister: () => {
				this.m_window.removeEventListener("focus", t);
			},
		};
	}
	GetWindow() {
		return this.m_window;
	}
}
class _r extends p.RV {
	m_popup;
	m_container;
	constructor(e) {
		super();
		this.m_popup = e;
	}
	get container() {
		if (!this.m_container && this.m_popup.window) {
			this.m_container = new kP(this.m_popup.window);
		}
		return this.m_container;
	}
	Show(e) {
		if (
			p.xm.ParentalStore.BIsFriendsBlocked() ||
			p.xm.SettingsStore.IsSteamInTournamentMode()
		) {
			console.log("Blocked popup due to parental controls or tournament mode");
		} else {
			this.m_popup.Show(e);
		}
	}
	Close() {
		this.m_popup.Close();
	}
	GetWindowRestoreDetails() {
		return this.m_popup.GetWindowRestoreDetails();
	}
	IsMinimized() {
		return this.m_popup.IsMinimized();
	}
	GetBrowserContext() {
		return this.m_popup.browser_info;
	}
	GetWindow() {
		return this.m_popup.window;
	}
}
const fr = {
	nChatRoomListHeightPx: 224,
	bChatRoomListCollapsed: false,
	bDontShowVoiceAlert: false,
	nFriendsListSingleWindowWidthPx: 300,
	bFavoritesHintDismissed: false,
	bRemotePlayLinkHintDismissed: false,
	nChangeLogDismissed: 0,
};
const br = "UIDisplayPrefs";
class yr {
	m_FriendsUIApp;
	m_bEmbeddedApp;
	m_WebLogonManager;
	m_FriendHoverStore = new M.DH();
	m_DragDropManager = new w();
	m_OverlayStore = new T();
	m_VRPopupManager;
	m_UsabilityMetricsStore;
	m_mapFriendsListPopups = new I.Es();
	m_UIDisplayPrefs = fr;
	m_iTimeoutSaveUIDisplayPrefs;
	m_bUpdatedBuildAvailable = false;
	m_nSecondsOutOfDate = 0;
	m_strLoaderWindowRestoreDetails = undefined;
	m_bShowFriendsListOnLoadFromLoader = undefined;
	m_eUIMode = -1;
	constructor(e, t) {
		Gn(this);
		this.m_FriendsUIApp = e;
		this.m_bEmbeddedApp = t;
		if (!this.IsEmbeddedApp()) {
			this.RegisterListeners();
			this.m_VRPopupManager = new ur(this.m_FriendsUIApp.VoiceStore);
			DW(window, C.m);
			this.InstrumentWindow(window);
			b.Of.AddPopupCreatedCallback((e) => {
				this.InstrumentWindow(e.window);
			});
		}
	}
	m_setSteamClientListeners = new Set();
	RegisterListeners() {
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat &&
			SteamClient.WebChat.RegisterForFriendPostMessage
		) {
			this.m_setSteamClientListeners.add(
				SteamClient.WebChat.RegisterForFriendPostMessage(
					this.HandlePostMessage,
				),
			);
			window.addEventListener("message", this.HandleWebLoaderPostMessage);
		} else {
			AssertMsg(
				!s.TS.IN_CLIENT,
				"Config.IN_CLIENT set but SteamClient globals not available",
			);
			window.addEventListener("message", this.HandlePostMessage);
		}
		if (Dp("Messaging.RegisterForMessages")) {
			this.m_setSteamClientListeners.add(
				SteamClient.Messaging.RegisterForMessages(
					"LibraryCommands",
					this.HandleLibraryCommandMessage,
				),
			);
			this.m_setSteamClientListeners.add(
				SteamClient.Messaging.RegisterForMessages(
					"PersonaState",
					this.HandlePersonaStateMessage,
				),
			);
		}
		if (Dp("WebChat.RegisterForUIModeChange")) {
			this.m_setSteamClientListeners.add(
				SteamClient.WebChat.RegisterForUIModeChange(this.HandleUIModeChange),
			);
		}
	}
	RemoveListeners() {
		this.m_setSteamClientListeners.forEach((e) => {
			return e.unregister();
		});
		this.m_setSteamClientListeners.clear();
	}
	IsGamepadUIActive() {
		return this.m_eUIMode == 4;
	}
	IsDesktopUIActive() {
		return this.m_eUIMode == 7;
	}
	IsEmbeddedApp() {
		return this.m_bEmbeddedApp;
	}
	OverlayStore() {
		return this.m_OverlayStore;
	}
	FriendGroupStore() {
		return this.m_FriendsUIApp.FriendStore.FriendGroupStore;
	}
	ChatStore() {
		return this.m_FriendsUIApp.ChatStore;
	}
	UIStore() {
		return this.m_FriendsUIApp.UIStore;
	}
	VRPopupManager() {
		return this.m_VRPopupManager;
	}
	BNeedsUpdate() {
		return this.m_bUpdatedBuildAvailable;
	}
	GetSecondsOutOfDate() {
		return this.m_nSecondsOutOfDate;
	}
	GetFriendsListPopup(e) {
		return this.m_mapFriendsListPopups.get(e.m_unPID) ?? null;
	}
	SetVisibilityForDesktopUIOverlay(e, t) {
		const r = this.GetFriendsListPopup(e);
		if (t) {
			if (r) {
				r.window.SteamClient.Window.ShowWindow();
			} else {
				this.ShowPopupFriendsList(e);
			}
		} else if (r) {
			r.window.SteamClient.Window.HideWindow();
		}
	}
	SetChatWindowsVisibilityForDesktopUIOverlay(e, t) {
		let r = this.m_FriendsUIApp.UIStore.GetPerContextChatData(e);
		for (let e of Array.from(r.popup_list)) {
			let r = e.popup.GetWindow();
			if (t) {
				r.SteamClient.Window.ShowWindow();
			} else {
				r.SteamClient.Window.HideWindow();
			}
		}
	}
	InstrumentWindow(e) {
		this.m_FriendsUIApp.IdleTracker.AddTrackedWindow(e);
	}
	HandlePostMessage(e) {
		let t = e.data;
		if (!t || !t.command) {
			return;
		}
		let r = this.m_FriendsUIApp.GetDefaultBrowserContext();
		if (e.data.pid !== undefined) {
			r = {
				m_unPID: e.data.pid,
				m_nBrowserID: e.data.browserid,
				m_eUIMode: this.m_eUIMode,
			};
		}
		this.ExecuteCommand(r, e.data);
	}
	HandleUIModeChange(e) {
		this.m_eUIMode = e;
	}
	HandleLibraryCommandMessage(e, t, r) {
		let n = this.m_FriendsUIApp.GetDefaultBrowserContext();
		let i = JSON.parse(r);
		i.command = t;
		this.ExecuteCommand(n, i);
	}
	RegisterForSteamURLs(e) {
		e("friends/message", (e, t) => {
			return this.ExecuteCommand(
				this.m_FriendsUIApp.GetDefaultBrowserContext(),
				{
					command: "ShowFriendChatDialog",
					steamid: t,
					btakefocus: true,
				},
			);
		});
		e("friends/joinchat", (e, t) => {
			return this.ExecuteCommand(
				this.m_FriendsUIApp.GetDefaultBrowserContext(),
				{
					command: "ShowFriendChatDialog",
					steamid: t,
					btakefocus: true,
				},
			);
		});
	}
	SendPersonaUpdateToLibrary(e) {
		if (Dp("Messaging.PostMessage")) {
			SteamClient.Messaging.PostMessage(
				"PersonaState",
				"PersonaUpdate",
				JSON.stringify(e),
			);
		}
	}
	HandlePersonaStateMessage(e, t, r) {
		if (t == "RequestPersonaState" && p.xm?.FriendStore?.self) {
			this.SendPersonaUpdateToLibrary(
				p.xm.FriendStore.self.persona.m_ePersonaState,
			);
		}
	}
	PerformFriendsUIUpdate() {
		let e = this.m_FriendsUIApp.UIStore.SerializePopupStateToObject(true);
		window.parent.postMessage(
			{
				message: "ChatReloadRequest",
				state: e,
			},
			"https://steamloopback.host",
		);
	}
	HandleWebLoaderPostMessage(e) {
		if (e.data.message != null) {
			if (e.data.message == "UpdatedBuildAvailable") {
				console.log(
					"There is an updated friendsui build available, we are " +
						(e.data.bVeryOutOfDate ? "" : "NOT ") +
						"very out of date. We are " +
						(e.data.bForce ? "" : "NOT ") +
						"forcing an update.",
				);
				this.m_bUpdatedBuildAvailable = true;
				if (e.data.nSecondsOutOfDate !== undefined) {
					this.m_nSecondsOutOfDate = e.data.nSecondsOutOfDate;
				}
				if (
					this.m_FriendsUIApp.IdleTracker.GetUserIdleTime() > 7200 ||
					(e.data.bForce !== undefined && e.data.bForce == 1)
				) {
					this.PerformFriendsUIUpdate();
				}
			} else if (
				e.data.message == "ReloadSerializedChatState" &&
				e.data.state !== undefined
			) {
				console.log("Asked by loader to reload serialized chat state");
				this.m_FriendsUIApp.UIStore.SetStateToRestoreFrom(e.data.state);
			} else if (e.data.message == "LoaderWindowRestoreDetails") {
				this.m_bShowFriendsListOnLoadFromLoader = e.data.bVisible;
				this.m_strLoaderWindowRestoreDetails = e.data.data;
			} else if (e.data.message == "SetPersonaState") {
				this.SetUserPersonaStateWhenReady(e.data.persona_state);
			}
		}
	}
	SetUserPersonaStateWhenReady(e) {
		this.m_FriendsUIApp.FriendStore.SetUserPersonaState(e);
	}
	ExecuteCommand(e, t) {
		const r = t.command;
		switch (r) {
			case "ShowPopupFriendsList": {
				this.ShowPopupFriendsList(e, false, true);
				break;
			}
			case "ShowFriendChatDialog":
				{
					let r = new he.b(t.steamid);
					let n = t.btakefocus != 0;
					if (r.BIsValid()) {
						if (r.BIsIndividualAccount()) {
							this.m_FriendsUIApp.UIStore.ShowFriendChatDialogWhenReady(
								e,
								r.GetAccountID(),
								true,
								n,
							);
						} else if (r.BIsClanAccount()) {
							this.m_FriendsUIApp.FriendStore.ClanStore.JoinClanChatRoom(e, r);
						}
					} else {
						this.ShowChatUnreadMessages(e);
					}
				}
				break;
			case "CloseChatDialog":
				{
					let e = new he.b(t.steamid);
					if (e.BIsIndividualAccount()) {
						let t = this.m_FriendsUIApp.ChatStore.GetFriendChat(
							e.GetAccountID(),
							false,
						);
						if (t) {
							this.m_FriendsUIApp.UIStore.CloseTabByID(t.unique_id);
						}
					} else if (e.BIsClanAccount()) {
						let t = this.m_FriendsUIApp.FriendStore.ClanStore.GetClan(e);
						if (t && t.GetChatGroupIDIfLoaded()) {
							let e = this.m_FriendsUIApp.ChatStore.GetChatRoomGroup(
								t.GetChatGroupIDIfLoaded(),
							);
							if (e) {
								this.m_FriendsUIApp.UIStore.CloseTabByID(e.unique_id);
							}
						}
					}
				}
				break;
			case "ShowChatRoomGroupDialog": {
				this.ShowChatRoomGroupDialog(e, t.chat_group_id, t.chat_room_id);
				break;
			}
			case "ShowChatRoomGroupInvite": {
				if (this.m_FriendsUIApp.ready_to_render) {
					let r = this.m_FriendsUIApp.ChatStore.InviteStore.GetInviteFromCode(
						t.invite_code,
					);
					re(
						{
							invite: r,
							inviter: null,
						},
						e,
						window,
					);
				}
				break;
			}
			case "SetPersonaState": {
				this.m_FriendsUIApp.FriendStore.SetUserPersonaState(t.persona_state);
				break;
			}
			case "ShowWatchBroadcast": {
				let n = new he.b(t.steamid);
				this.m_FriendsUIApp.UIStore.ShowOrActivateBroadcast(
					e,
					n.GetAccountID(),
					true,
				).ShowWatchPromptDialog();
				break;
			}
			case "ToggleDockedMode": {
				this.ToggleSingleWindowMode(t.checked);
				break;
			}
			default: {
				FailAssertion(r, `Unhandled command type: ${r}`);
			}
		}
	}
	Init(e, t, r) {
		let n = [];
		n.push([
			"Load Preferences",
			() => {
				return this.m_FriendsUIApp.SettingsStore.GetObjectFromLocalStorageWhenReady(
					br,
					fr,
				).then((e) => {
					h5(() => {
						this.m_UIDisplayPrefs = e;
					});
				});
			},
		]);
		e.RunWhenLoggedOn(() => {
			b.Of.SetCurrentLoggedInAccountID(e.steamid.GetAccountID());
		});
		this.m_WebLogonManager = r;
		this.m_UsabilityMetricsStore = new E(
			this.FillInChatUsabilityMetrics.bind(this),
			e,
		);
		if (t) {
			this.m_OverlayStore.Init(e);
		}
		if (
			s.TS.IN_CLIENT &&
			!this.m_FriendsUIApp.IsLoadedInClientSharedJSContext() &&
			SteamClient.FriendSettings.GetEnabledFeatures !== undefined
		) {
			n.push([
				"SteamClient.FriendSettings.GetEnabledFeatures",
				() => {
					return SteamClient.FriendSettings.GetEnabledFeatures().then((e) => {
						let t = false;
						for (let r of e) {
							if (r.feature == "LoaderWindowSynchronization") {
								t = r.bEnabled;
								break;
							}
						}
						if (t) {
							return z7(() => {
								return this.m_strLoaderWindowRestoreDetails !== undefined;
							});
						} else {
							return Promise.resolve();
						}
					});
				},
			]);
		}
		n.push([
			"VRPopupManager",
			() => {
				return this.m_VRPopupManager.Init(e);
			},
		]);
		if (!t) {
			n.push([
				"GRS",
				() => {
					return Z9(e.GetServiceTransport(), undefined);
				},
			]);
		}
		return n;
	}
	get FriendHoverStore() {
		return this.m_FriendHoverStore;
	}
	get WebLogonManager() {
		return this.m_WebLogonManager;
	}
	get DragDropManager() {
		return this.m_DragDropManager;
	}
	get UIDisplayPrefs() {
		return this.m_UIDisplayPrefs;
	}
	SetUIDisplayPref(e, t) {
		if (this.m_UIDisplayPrefs[e] != t) {
			this.m_UIDisplayPrefs[e] = t;
			if (this.m_iTimeoutSaveUIDisplayPrefs) {
				window.clearTimeout(this.m_iTimeoutSaveUIDisplayPrefs);
			}
			this.m_iTimeoutSaveUIDisplayPrefs = window.setTimeout(() => {
				if (this.m_FriendsUIApp && this.m_FriendsUIApp.SettingsStore) {
					this.m_FriendsUIApp.SettingsStore.StoreObjectInLocalStorage(
						br,
						this.m_UIDisplayPrefs,
					);
				}
				this.m_iTimeoutSaveUIDisplayPrefs = undefined;
			}, 1000);
		}
	}
	ShowPopupFriendsList(e, t, r, n) {
		if (
			this.m_FriendsUIApp.ParentalStore.BIsFriendsBlocked() ||
			this.m_FriendsUIApp.SettingsStore.IsSteamInTournamentMode()
		) {
			console.log(
				"Blocked friends list popup due to parental controls or tournament mode",
			);
			return;
		}
		const i =
			!t && r
				? a.iE.k_EWindowBringToFrontAndForceOS
				: a.iE.k_EWindowBringToFrontInvalid;
		let s = this.m_mapFriendsListPopups.get(e.m_unPID);
		if (s) {
			s.Focus(i);
			return;
		}
		if (this.m_FriendsUIApp.UIStore.BIsFriendsListEmbedded(e)) {
			return;
		}
		s = new Xt.ve(
			this.m_FriendsUIApp.FriendStore,
			this.m_FriendsUIApp.ChatStore,
			e,
			t,
			n,
		);
		this.m_mapFriendsListPopups.set(e.m_unPID, s);
		s.Show(i);
		let o = new _r(s);
		this.m_FriendsUIApp.UIStore.GetPerContextChatData(e).SetFriendsListWindow(
			o.container,
		);
		this.m_FriendsUIApp.UIStore.SerializePopupState();
	}
	ShowChatRoomGroupDialog(e, t, r) {
		let n = this.m_FriendsUIApp.ChatStore.GetChatRoomGroup(t);
		let i = n && r ? n.GetChatRoom(r) : null;
		if (!n || !n.BIsCurrentUserAMember() || (i && i.BVoiceActive())) {
			let n = this.m_FriendsUIApp.ChatStore.InviteStore.GetDirectInviteInfo(
				t,
				r,
				this.m_FriendsUIApp.FriendStore.self.accountid,
			);
			re(
				{
					invite: n,
					inviter: null,
				},
				e,
				window,
			);
		} else if (i) {
			this.m_FriendsUIApp.UIStore.ShowAndOrActivateChat(e, i, true);
		} else {
			this.m_FriendsUIApp.UIStore.ShowAndOrActivateChatRoomGroupWhenReady(
				e,
				n,
				true,
			);
		}
	}
	OnFriendsListClosed(e) {
		this.m_mapFriendsListPopups.delete(e.m_unPID);
		this.m_FriendsUIApp.UIStore.GetPerContextChatData(e).SetFriendsListWindow(
			undefined,
		);
		this.m_FriendsUIApp.UIStore.SerializePopupState();
	}
	ToggleSingleWindowMode(e) {
		if (p.xm.SettingsStore.BSingleWindowModeEnabled() != e) {
			p.xm.SettingsStore.SetSingleWindowMode(e);
			for (let t of this.m_FriendsUIApp.UIStore.GetAllBrowserContexts()) {
				this.ToggleSingleWindowModeForContext(e, t);
			}
		}
	}
	ToggleSingleWindowModeForContext(e, t) {
		const r = this.m_FriendsUIApp.UIStore.GetPerContextChatData(t);
		if (
			r.IsFriendsListSingleWindow() != e &&
			(r.SetFriendsListSingleWindowMode(e), r.IsFriendsListSingleWindow() == e)
		) {
			if (e) {
				this.m_FriendsUIApp.UIStore.ConvertDefaultTabSetToEmbedded(t);
				this.m_FriendsUIApp.UIStore.MergeTabSets(t);
				const e = r.friends_list_window;
				if (e) {
					if (e instanceof kP) {
						const t = e.GetWindow();
						if (t.SteamClient.Window.SetMinSize) {
							t.SteamClient.Window.SetMinSize(Xt.KO, Xt.rS);
						}
						t.SteamClient.Window.ResizeTo(1280, t.innerHeight, false);
					}
				} else {
					this.ShowPopupFriendsList(t, false, true, {
						width: 1280,
					});
				}
			} else {
				this.m_FriendsUIApp.UIStore.ConvertDefaultTabSetToPopup(t);
				const e = r.friends_list_window;
				if (e) {
					if (e instanceof kP) {
						const t = e.GetWindow();
						if (t.SteamClient.Window.SetMinSize) {
							t.SteamClient.Window.SetMinSize(Xt.Y$, Xt.rS);
						}
						t.SteamClient.Window.ResizeTo(
							ZM.UIDisplayPrefs.nFriendsListSingleWindowWidthPx,
							t.innerHeight,
							false,
						);
					}
				} else {
					const e = ZM.UIDisplayPrefs.nFriendsListSingleWindowWidthPx;
					this.ShowPopupFriendsList(t, false, true, {
						width: e,
					});
				}
			}
		}
	}
	FillInChatUsabilityMetrics(e) {
		e.ui_state().set_friends_list_group_chats_height(
			this.UIDisplayPrefs.nChatRoomListHeightPx,
		);
		let t;
		let r = this.m_FriendsUIApp.UIStore.GetPerContextChatData(C.m);
		let n = r.friends_list_window;
		if (n && n instanceof kP) {
			e.ui_state().set_friends_list_width(n.GetWindow().outerWidth);
			e.ui_state().set_friends_list_height(n.GetWindow().outerHeight);
		}
		for (let e of Array.from(r.popup_list)) {
			t = e;
			if (e.tab_set === r.default_tabset && !r.IsFriendsListSingleWindow()) {
				break;
			}
		}
		if (t && t.popup.GetWindow()) {
			e.ui_state().set_friends_list_width(t.popup.GetWindow().outerWidth);
			e.ui_state().set_friends_list_height(t.popup.GetWindow().outerHeight);
		}
	}
	ShowChatUnreadMessages(e) {
		if (
			this.m_FriendsUIApp.ParentalStore.BIsFriendsBlocked() ||
			this.m_FriendsUIApp.SettingsStore.IsSteamInTournamentMode
		) {
			console.log(
				"Blocked friends list popup due to parental controls or tournament mode",
			);
			return;
		}
		let t = this.m_FriendsUIApp.ChatStore.GetChatToActivateForOldestUnread(e);
		if (t) {
			console.log("ShowChatUnreadMessages - showing chat " + t.unique_id);
			this.m_FriendsUIApp.UIStore.ShowAndOrActivateChat(e, t, true);
			return;
		} else {
			return this.ShowPopupFriendsList(e, false, true);
		}
	}
}
Cg([I.sH], yr.prototype, "m_UIDisplayPrefs", undefined);
Cg([I.sH], yr.prototype, "m_bUpdatedBuildAvailable", undefined);
Cg([I.sH], yr.prototype, "m_nSecondsOutOfDate", undefined);
Cg([I.sH], yr.prototype, "m_strLoaderWindowRestoreDetails", undefined);
Cg([I.sH], yr.prototype, "m_bShowFriendsListOnLoadFromLoader", undefined);
Cg([I.sH], yr.prototype, "m_eUIMode", undefined);
Cg([c.oI], yr.prototype, "HandlePostMessage", null);
Cg([c.oI], yr.prototype, "HandleUIModeChange", null);
Cg([c.oI], yr.prototype, "HandleLibraryCommandMessage", null);
Cg([c.oI], yr.prototype, "HandlePersonaStateMessage", null);
Cg([c.oI], yr.prototype, "HandleWebLoaderPostMessage", null);
Cg([p.Nw], yr.prototype, "SetUserPersonaStateWhenReady", null);
Cg([I.EW], yr.prototype, "UIDisplayPrefs", null);
Cg([I.XI], yr.prototype, "SetUIDisplayPref", null);
Cg([p.Nw], yr.prototype, "ShowPopupFriendsList", null);
Cg([p.Nw], yr.prototype, "ShowChatUnreadMessages", null);
export class Yw extends p.m {
	m_IdleTracker;
	m_AudioPlaybackManager = new $t.u();
	m_bLoadedInClientSharedJSContext;
	m_DesktopApp;
	constructor(e) {
		super(
			s.TS.IN_CLIENT && SteamClient.Storage !== undefined
				? new er.A()
				: new tr.A(),
		);
		this.m_bLoadedInClientSharedJSContext = e;
		if (e) {
			this.VoiceStore.RegisterForVoiceChatActiveStateChange(
				this.OnVoiceChatActiveStateChange,
			);
		}
		this.m_IdleTracker = s.TS.IN_CLIENT ? new d() : new u();
		this.m_DesktopApp = ((ZM = new yr(this, false)), ZM);
		this.m_ChatRoomBBCodeParser = new pe.o0(
			Object.assign(rt(), {
				mention: Vt,
			}),
			pe.OJ,
		);
		this.m_FriendChatBBCodeParser = new pe.o0(
			Object.assign(rt(), {
				invite: Dt,
				gameinvite: Nt,
				lobbyinvite: Ft,
				tradeoffer: zt,
				broadcastinvite: Gt,
				broadcastviewrequest: Ot,
			}),
			pe.OJ,
		);
		this.m_NotificationBBCodeParser = new pe.T4({
			gameinvite: Ge,
			lobbyinvite: Oe,
			img: We,
			invite: Pe,
			tradeoffer: Le,
			spoiler: ze,
			roomeffect: xe,
			sticker: Ve,
			video: Ue,
		});
		this.m_ChatRoomEffectSettings = Re.B;
		ZM = this.m_DesktopApp;
		this.m_AudioPlaybackManager.SetVoiceStore(this.m_VoiceChatStore);
		AssertMsg(!s.TS.IN_MOBILE, "DesktopApp initialized in mobile context");
	}
	Init(e, t, r) {
		let n = t ? new h(this.m_FriendStore) : new _(this.m_FriendStore);
		let i = this.m_DesktopApp.Init(e, t, r);
		super.InitInternal(e, n, i);
	}
	static k_pchStartupParamKey = "oFriendsUIStartupParam";
	async OnReadyToRender() {
		if (s.TS.IN_CLIENT) {
			SteamClient.RemotePlay.RegisterForRemoteClientStarted(
				this.RemoteClientStarted,
			);
			SteamClient.RemotePlay.RegisterForInviteResult(
				this.RemoteClientInviteResult,
			);
			SteamClient.RemotePlay.RegisterForRemoteClientLaunchFailed(
				this.RemoteClientLaunchFailed,
			);
			SteamClient.RemotePlay.RegisterForGroupCreated(
				this.RemotePlayGroupCreated,
			);
		}
		await this.UIStore.RestorePopupState();
		let e = b.Of.GetRestoreDetails("PopupFriendsListDimensions");
		if (e) {
			window.parent.postMessage(
				{
					message: "FriendsListRestoreDetailsChanged",
					data: e,
				},
				"https://steamloopback.host",
			);
		}
		try {
			let e = window.sessionStorage.getItem(Yw.k_pchStartupParamKey);
			if (e) {
				let t = JSON.parse(e);
				if (t && t.command) {
					this.m_DesktopApp.ExecuteCommand(C.m, t.command);
				}
			}
			window.sessionStorage.removeItem(Yw.k_pchStartupParamKey);
		} catch (e) {}
		this.m_IdleTracker.Init();
		if (window.opener) {
			let e = [
				s.TS.COMMUNITY_BASE_URL,
				s.TS.STORE_BASE_URL,
				s.TS.CHAT_BASE_URL,
			];
			for (let t of e) {
				window.opener.postMessage("FriendsUIReady", t.replace(/\/$/, ""));
			}
		}
	}
	IsGamepadUIActive() {
		return this.m_DesktopApp.IsGamepadUIActive();
	}
	IsDesktopUIActive() {
		return this.m_DesktopApp.IsDesktopUIActive();
	}
	IsLoadedInClientSharedJSContext() {
		return this.m_bLoadedInClientSharedJSContext;
	}
	get AudioPlaybackManager() {
		return this.m_AudioPlaybackManager;
	}
	get IdleTracker() {
		return this.m_IdleTracker;
	}
	AddPopupManagerShutdownCallback(e) {
		b.Of.AddShutdownCallback(e);
	}
	CreateChatPopup(e, t, r, n, i, a) {
		let s = new Xt.IO(e, t, r, this.m_ChatStore, n, i, a);
		let o = new _r(s);
		return new R.TP(o, s);
	}
	ShowPopupFriendsListAtStartup(e) {
		let t = e;
		if (ZM.m_bShowFriendsListOnLoadFromLoader !== undefined) {
			t = ZM.m_bShowFriendsListOnLoadFromLoader;
		}
		if (
			this.ChatStore.FriendChatStore.GetUnreadFriendMessageCount() > 0 &&
			this.SettingsStore.FriendsSettings.bSignIntoFriends
		) {
			t = true;
		}
		if (t) {
			let e = ZM.m_bShowFriendsListOnLoadFromLoader === true;
			if (!u_1(p.xm.GetDefaultBrowserContext(), C.m)) {
				console.log(
					"Blocked taking focus in root context during ShowPopupFriendsList, because other context is primary",
				);
				e = false;
			}
			p.xm.ShowPopupFriendsList(C.m, false, e);
		}
	}
	ShowPopupFriendsList(e, t, r) {
		this.m_DesktopApp.ShowPopupFriendsList(e, t, r);
	}
	OnFriendsListClosed(e) {
		this.m_DesktopApp.OnFriendsListClosed(e);
	}
	RemotePlayGroupCreated(e, t) {
		let r = new he.b(e).GetAccountID();
		if (r == 0) {
			return;
		}
		let n = p.xm.FriendStore.GetPlayer(r);
		const i = e === p.xm.FriendStore.self.steamid64;
		p.xm.RemotePlayStore.OnGroupCreated(n, i, t);
	}
	RemoteClientStarted(e, t) {
		let r = new he.b(e).GetAccountID();
		if (r == 0) {
			return;
		}
		if (r == p.xm.FriendStore.self.accountid) {
			return;
		}
		let n = p.xm.FriendStore.GetPlayer(r);
		p.xm.RemotePlayStore.RemoteClientStarted(n, false, t);
	}
	RemoteClientInviteResult(e, t, r, n, i) {
		this.RemoteClientLaunchResult(e, t, r, n, i);
	}
	RemoteClientLaunchResult(e, t, r, n, a) {
		let s = new he.b(e).GetAccountID();
		let o = p.xm.FriendStore.GetPlayer(s);
		if (r === i.l.k_ERemoteClientLaunchOK) {
			if (s !== 0) {
				let e = o.efriendrelationship == 2;
				let t = o.efriendrelationship == 4;
				let r = o.persona.is_online && !e && !t && !o.is_blocked;
				r = false;
				if (!p.xm.VoiceStore.IsAnyVoiceActive() && r && n) {
					p.xm.UIStore.ShowFriendChatDialogAndStartVoice(
						p.xm.GetDefaultBrowserContext(),
						o.accountid,
					);
				} else {
					p.xm.UIStore.ShowFriendChatDialog(
						p.xm.GetDefaultBrowserContext(),
						o.accountid,
						true,
						false,
					);
				}
			}
		} else {
			let e = "";
			switch (r) {
				case i.l.k_ERemoteClientLaunchParentalUnlockFailed: {
					e = "#RemotePlay_ErrorInviteFailed_ParentalUnlockFailed";
					break;
				}
				case i.l.k_ERemoteClientLaunchScreenLocked: {
					e = "#RemotePlay_ErrorInviteFailed_ScreenLocked";
					break;
				}
				case i.l.k_ERemoteClientLaunchDriversNotInstalled: {
					e = "#RemotePlay_ErrorInviteFailed_DriversNotInstalled";
					break;
				}
				case i.l.k_ERemoteClientLaunchDisabledRemote: {
					e = "#RemotePlay_ErrorInviteFailed_Disabled";
					break;
				}
				case i.l.k_ERemoteClientLaunchBroadcasting: {
					e = "#RemotePlay_ErrorInviteFailed_BroadcastingActive";
					break;
				}
				case i.l.k_ERemoteClientLaunchTransportUnavailable: {
					e = "#RemotePlay_ErrorInviteFailed_TransportUnavailable";
					break;
				}
				case i.l.k_ERemoteClientLaunchInvisible: {
					e = "#RemotePlay_ErrorInviteFailed_Invisible";
					break;
				}
				case i.l.k_ERemoteClientLaunchRestrictedCountry: {
					e = "#RemotePlay_ErrorInviteFailed_RestrictedCountry";
					break;
				}
				default: {
					e = "#RemotePlay_ErrorInviteFailed_Failed";
				}
			}
			this.ShowAlert((0, Localize)("#RemotePlay_Error"), (0, Localize)(e));
		}
	}
	RemoteClientLaunchFailed(e) {
		if (e === i.l.k_ERemoteClientLaunchOK) {
		} else {
			let t = "";
			switch (e) {
				case i.l.k_ERemoteClientLaunchParentalUnlockFailed: {
					t = "#RemotePlay_ErrorInviteFailed_ParentalUnlockFailed";
					break;
				}
				case i.l.k_ERemoteClientLaunchScreenLocked: {
					t = "#RemotePlay_ErrorInviteFailed_ScreenLocked";
					break;
				}
				case i.l.k_ERemoteClientLaunchDriversNotInstalled: {
					t = "#RemotePlay_ErrorInviteFailed_DriversNotInstalled";
					break;
				}
				case i.l.k_ERemoteClientLaunchDisabledRemote: {
					t = "#RemotePlay_ErrorInviteFailed_Disabled";
					break;
				}
				case i.l.k_ERemoteClientLaunchBroadcasting: {
					t = "#RemotePlay_ErrorInviteFailed_BroadcastingActive";
					break;
				}
				case i.l.k_ERemoteClientLaunchTransportUnavailable: {
					t = "#RemotePlay_ErrorInviteFailed_TransportUnavailable";
					break;
				}
				case i.l.k_ERemoteClientLaunchInvisible: {
					t = "#RemotePlay_ErrorInviteFailed_Invisible";
					break;
				}
				case i.l.k_ERemoteClientLaunchRestrictedCountry: {
					t = "#RemotePlay_ErrorInviteFailed_RestrictedCountry";
					break;
				}
				default: {
					t = "#RemotePlay_ErrorInviteFailed_Failed";
				}
			}
			this.ShowAlert((0, Localize)("#RemotePlay_Error"), (0, Localize)(t));
		}
	}
	ShowAlert(e, t, r) {
		return Nw(e, t, r);
	}
	OpenURLInBrowser(e, t) {
		if (s.TS.IN_CLIENT) {
			SteamClient.WebChat.OpenURLInClient(e, t.m_unPID, false);
		} else {
			EP(window, e);
		}
	}
	BIsValidBrowserContext(e) {
		return (
			super.BIsValidBrowserContext(e) ||
			this.m_DesktopApp.OverlayStore().HasOverlayInstance(e.m_unPID)
		);
	}
	ShowCloseActiveVoiceConfirmation(e, t) {
		if (!this.m_DesktopApp.UIDisplayPrefs.bDontShowVoiceAlert) {
			let e = t.popup;
			XX(e.GetWindow());
		}
	}
	OnVoiceChatActiveStateChange(e) {
		if (Dp("Browser.SetBackgroundThrottlingDisabled")) {
			SteamClient.Browser.SetBackgroundThrottlingDisabled(e);
		}
	}
	SignOutOfFriends(e) {
		this.m_DesktopApp.SendPersonaUpdateToLibrary(0);
		let t =
			p.xm.UIStore.GetRootChatPerContextData().friends_list_window &&
			p.xm.UIStore.GetRootChatPerContextData().friends_list_window.BIsVisible();
		window.parent.postMessage(
			{
				message: "SignOutRequest",
				bShowLoaderWindow: t,
				browserContext: e,
			},
			"https://steamloopback.host",
		);
		this.UIStore.SerializePopupState();
		this.UIStore.ResetHasRestoredPopupState();
		for (const e of b.Of.GetPopups()) {
			if (e.GetName().startsWith("chat_")) {
				e.Close();
			}
		}
		this.CMInterface.ForceDisconnect();
	}
	UpdatePersonaState(e) {
		this.m_DesktopApp.SendPersonaUpdateToLibrary(e);
	}
	CreateNewTabFromUniqueID(e, t, r, n) {
		let i = t.match(/^br(\d+)$/);
		if (i && i[1]) {
			let t = parseInt(i[1]);
			return new f.w(e, t);
		}
		return super.CreateNewTabFromUniqueID(e, t, r, n);
	}
	BShowIncomingChatMessages() {
		return (
			!!this.IsLoadedInClientSharedJSContext() ||
			this.m_DesktopApp.m_eUIMode == 0
		);
	}
	async Reconnect() {
		this.m_DesktopApp.RemoveListeners();
		this.m_DesktopApp.RegisterListeners();
		await Promise.all([
			this.CMInterface.Connect(),
			this.UIStore.RestorePopupState(),
		]);
	}
	GetDefaultBrowserContext() {
		const e = this.m_BrowserContextDefaultTarget;
		if (e.m_eUIMode === undefined || e.m_eUIMode === -1) {
			return {
				...e,
				m_eUIMode: this.m_DesktopApp.m_eUIMode,
			};
		} else {
			return e;
		}
	}
	get VRPopupManager() {
		return this.m_DesktopApp.VRPopupManager();
	}
}
Cg([c.oI], Yw.prototype, "RemotePlayGroupCreated", null);
Cg([c.oI], Yw.prototype, "RemoteClientStarted", null);
Cg([c.oI], Yw.prototype, "RemoteClientInviteResult", null);
Cg([c.oI], Yw.prototype, "RemoteClientLaunchResult", null);
Cg([c.oI], Yw.prototype, "RemoteClientLaunchFailed", null);
Cg([c.oI], Yw.prototype, "OnVoiceChatActiveStateChange", null);
export function xT(e) {
	const t = Yw.k_pchStartupParamKey;
	window.sessionStorage.setItem(
		t,
		JSON.stringify({
			command: {
				command: "ShowWatchBroadcast",
				steamid: e,
			},
		}),
	);
}
export function PJ(e) {
	const t = useState(0)[1];
	return [
		ZM.UIDisplayPrefs[e],
		(r) => {
			ZM.SetUIDisplayPref(e, r);
			t((e) => {
				return e + 1;
			});
		},
	];
}
export function DW(e, t) {
	let r = t;
	if (r.m_eUIMode === undefined && ZM?.m_eUIMode !== undefined) {
		r = {
			...r,
			m_eUIMode: ZM.m_eUIMode,
		};
	}
	e.__FriendsUIBrowserContext = r;
}
export let ZM;
b.Of.AddPopupCreatedCallback((e) => {
	DW(e.window, e.browser_info ?? C.m);
});
