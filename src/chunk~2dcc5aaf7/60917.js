var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./31958.js");
import {
	FindAndRemoveWhere,
	FilterInPlace,
	MoveElement,
} from "../../actual_src/utils/arrayutils.js";
import { GetUnixTime, Seconds } from "../../actual_src/utils/time.js";
var l = require("./3475.js");
var c = require(/*webcrack:missing*/ "./44846.js");
var m = require("./43024.js");
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require(/*webcrack:missing*/ "./79769.js");
var A = require("./48289.js");
var p = require(/*webcrack:missing*/ "./8573.js");
var g = require("./78057.js");
var h = require("./46422.js");
var C = require("./89748.js");
var _ = require("./5640.js");
var f = require("./34792.js");
var b = require(/*webcrack:missing*/ "./90095.js");
var y = require(/*webcrack:missing*/ "./10975.js");
var S = require(/*webcrack:missing*/ "./49455.js");
var w = require("./46375.js");
var B = require(/*webcrack:missing*/ "./72476.js");
var v = require("./49171.js");
var I = require("./88475.js");
var E = require("./655.js");
var M = require(/*webcrack:missing*/ "./12176.js");
var T = require("./5859.js");
var R = require(/*webcrack:missing*/ "./89193.js");
var k = require("./8974.js");
var D = require(/*webcrack:missing*/ "./83599.js");
var N = require("./87935.js");
var F = require(/*webcrack:missing*/ "./29285.js");
var G = require("./46066.js");
var O = require("./87913.js");
const P = new D.wd("NotificationStore");
const L = P.Info;
const z = P.Debug;
P.Error;
const x = {
	1: {
		proto: m.Vn,
		fnTray: ne,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Download Complete",
		bEnableInReducedUI: true,
		fnTest: () => J().TestDownloadComplete(570),
	},
	2: {
		eFeature: 4,
		strTest: "Friend Invite",
		fnTest: () => J().TestFriendInvite(),
	},
	3: {
		proto: m.DQ,
		fnTray: te,
		showToast: le("bNotifications_ShowIngame"),
		playSound: le("bSounds_PlayIngame"),
		sound: y.PN.FriendInGame,
		eFeature: 4,
		nRemoveFromTraySec: 300,
		strTest: "Friend in Game",
		fnTest: () => J().TestFriendIngame("Portal 2"),
	},
	4: {
		proto: m.jn,
		fnTray: te,
		showToast: le("bNotifications_ShowOnline"),
		playSound: le("bSounds_PlayOnline"),
		sound: y.PN.FriendOnline,
		eFeature: 4,
		nRemoveFromTraySec: 300,
		strTest: "Friend Online",
		fnTest: () => J().TestFriendOnline(),
	},
	5: {
		proto: m.R8,
		fnTray: ne,
		showToast: true,
		playSound: function (e, t) {
			return t.data.achieved();
		},
		sound: y.PN.ToastAchievement,
		eFeature: 3,
		bEnableInReducedUI: true,
		strTest: "Achievement",
		fnTest: () => J().TestAchievement(550),
	},
	6: {
		proto: m.bX,
		fnTray: null,
		bCritical: true,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		toastDurationMS: 15000,
	},
	7: {
		proto: m.M,
		fnTray: ne,
		showToast: true,
		strTest: "System Update",
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTest: () => J().TestSystemUpdate(1),
	},
	8: {
		proto: m.zz,
		fnTray: function (e, t) {
			ee(
				e,
				t,
				(t) =>
					t.eType == 8 && t.notifications[0].data.steamid() == e.data.steamid(),
			);
		},
		showToast: le("bNotifications_ShowMessage"),
		playSound: le("bSounds_PlayMessage"),
		sound: y.PN.FriendMessage,
		eFeature: 4,
		bEnableInReducedUI: true,
		strTest: "Friend Message",
		fnTest: () => J().TestFriendMessage(null, "Ready to play?"),
	},
	9: {
		proto: m.kE,
		fnTray: function (e, t) {
			ee(
				e,
				t,
				(t) =>
					t.eType == 9 &&
					t.notifications[0].data.chat_group_id() == e.data.chat_group_id(),
			);
		},
		showToast: le("bNotifications_ShowChatRoomNotification"),
		playSound: le("bSounds_PlayChatRoomNotification"),
		sound: function (e, t) {
			if (t.data.tag().startsWith("groupmsg_mention")) {
				return y.PN.ChatMention;
			}
			return y.PN.ChatMessage;
		},
		eFeature: 4,
		strTest: "Group Chat Msg",
		fnTest: () =>
			J().TestGroupChatMessage(
				null,
				"Am running to the store. Will be back in 15min.",
			),
	},
	10: {
		proto: m.H1,
		fnTray: null,
		showToast: true,
		eFeature: 4,
		strTest: "Friend Invite Rollup",
		fnTest: () => J().TestFriendInviteRollup(),
	},
	11: {
		proto: m.zY,
		fnTray: ne,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Family Sharing",
		fnTest: () => J().TestFamilySharing(),
	},
	12: {
		proto: m.gF,
		fnTray: null,
		bCritical: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		showToast: true,
	},
	13: {
		proto: m.mu,
		fnTray: null,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
	},
	14: {
		proto: m.sS,
		fnTray: ne,
		showToast:
			B.TS.ON_DECK ||
			((U = "enable_screenshot_notification"), () => f.rV.clientSettings[U]),
		bEnableInReducedUI: true,
		eFeature: 3,
		strTest: "Screenshot",
		fnTest: () => J().TestScreenshot(),
	},
	16: {
		proto: m.W9,
		fnTray: ne,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Cloud Sync Conflict",
		fnTest: () => J().TestCloudSyncConflict(570),
	},
	15: {
		proto: m.A_,
		fnTray: ne,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Cloud Sync Failure",
		fnTest: () => J().TestCloudSyncFailure(570),
	},
	17: {
		proto: m.qr,
		fnTray: ne,
		showToast: true,
		playSound: false,
		toastDurationMS: 15000,
		eFeature: 4,
		strTest: "Incoming Voice Chat",
		fnTest: () => J().TestIncomingVoiceChat(),
	},
	18: {
		proto: m.X$,
		fnTray: null,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: 3,
		toastDurationMS: 15000,
	},
	19: {
		strTest: "Gift Received",
		fnTest: () => J().TestGift(),
		sound: y.PN.ToastMisc,
		eFeature: 1,
	},
	20: {
		strTest: "Item Announcement",
		fnTest: () => J().TestItemAnnouncement(2),
		sound: y.PN.ToastMisc,
		eFeature: 3,
	},
	21: {
		proto: m.fU,
		fnTray: ne,
		showToast: true,
		strTest: "Hardware Survey",
		fnTest: () => J().TestHardwareSurvey(),
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
	},
	22: {
		proto: m.jv,
		fnTray: null,
		bCritical: true,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		toastDurationMS: 15000,
	},
	23: {
		proto: m.DO,
		fnTray: null,
		bCritical: true,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		toastDurationMS: 15000,
	},
	24: {
		proto: m.TP,
		fnTray: ne,
		bCritical: true,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnShowModal: w.G3,
	},
	26: {
		proto: m.Bn,
		fnTray: ne,
		bCritical: true,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		toastDurationMS: 60000,
		strTest: "Controller Guide",
		fnTest: () => J().TestReadControllerGuide(),
	},
	27: {
		strTest: "Comment",
		fnTest: () => J().TestComment(),
		sound: y.PN.ToastMisc,
		eFeature: 2,
	},
	28: {
		strTest: "Wishlist",
		fnTest: () => J().TestWishlist(220),
		sound: y.PN.ToastMisc,
		eFeature: 1,
	},
	29: {
		sound: y.PN.ToastMisc,
		eFeature: 6,
		strTest: "Trade Offer",
		fnTest: () => J().TestTradeOffer(),
	},
	30: {
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Async Game",
		fnTest: () => J().TestAsyncGame(570),
	},
	31: {
		strTest: "General",
		fnTest: () => J().TestGeneralAnnouncement(),
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
	},
	32: {
		strTest: "Help Request",
		fnTest: () => J().TestHelpRequest(),
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
	},
	39: {
		strTest: "Moderator Message",
		fnTest: () => J().TestModeratorMessage(),
		sound: y.PN.ToastMisc,
		eFeature: 2,
	},
	33: {
		proto: m.d6,
		fnTray: null,
		showToast: true,
		displayToastAlone: true,
		eFeature: l.uX,
	},
	34: {
		proto: m.Mr,
		fnTray: null,
		showToast: true,
		displayToastAlone: true,
		eFeature: 2,
	},
	35: {
		proto: m.$V,
		fnTray: null,
		showToast: true,
		displayToastAlone: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
	},
	36: {
		proto: m.oS,
		showToast: true,
		bEnableInReducedUI: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: null,
	},
	37: {
		sound: y.PN.ToastMisc,
		eFeature: 1,
		strTest: "Major Sale",
		fnTest: () => J().TestMajorSale(),
	},
	38: {
		proto: m.ol,
		sound: y.PN.TimerExpired,
		eFeature: l.uX,
		strTest: "Timer Expired",
		bEnableInReducedUI: true,
		showToast: true,
	},
	40: {
		proto: m.Yn,
		fnTray: ne,
		showToast: true,
		playSound: false,
		eFeature: l.uX,
		strTest: "Steam Input Action Set",
		fnTest: () => J().TestSteamInputActionSetChanged(),
	},
	41: {
		proto: m.Vz,
		showToast: false,
		playSound: false,
		eFeature: l.uX,
		strTest: "Remote Client Connection",
		fnTest: () => J().TestRemoteClientConnection(),
	},
	42: {
		proto: m.dY,
		fnTray: ne,
		showToast: false,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Remote Client Start Game",
		fnTest: () => J().TestRemoteClientStartStream(),
	},
	43: {
		proto: m.R0,
		fnTray: ne,
		showToast: true,
		playSound: false,
		eFeature: l.uX,
		strTest: "Streaming Client Connection",
		fnTest: () => J().TestStreamingClientConnection(),
	},
	44: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Family Invite",
		fnTest: () => J().TestFamilyInvite(),
	},
	46: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: 1,
		fnTray: ne,
		strTest: "Family Purchase Request",
		fnTest: () => J().TestFamilyPurchaseRequest(),
	},
	47: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Family Purchase Response",
		fnTest: () => J().TestFamilyPurchaseRequestResponse(),
	},
	45: {
		proto: m.Fn,
		fnTray: null,
		bCritical: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		showToast: true,
		toastDurationMS: 15000,
		fnTest: () => J().TestPlaytimeWarning(),
	},
	48: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Parental Feature Request",
		fnTest: () => J().TestParentalFeatureRequest(),
	},
	49: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Parental Playtime Request",
		fnTest: () => J().TestParentalPlaytimeRequest(),
	},
	50: {
		proto: m.h3,
		fnTray: function (e, t) {
			FindAndRemoveWhere(t, (e) => e.eType == 50);
			ne(e, t);
		},
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "GRE",
		bEnableInReducedUI: false,
		fnTest: () => J().TestGRE(),
	},
	57: {
		proto: m.K_,
		fnTray: function (e, t) {
			FindAndRemoveWhere(t, (e) => e.eType == 57);
			ne(e, t);
		},
		showToast: true,
		playSound: false,
		eFeature: l.uX,
		strTest: "GRUM",
		bEnableInReducedUI: false,
		fnTest: () => J().TestGRUM(),
	},
	51: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Parental Feature Response",
		fnTest: () => J().TestParentalFeatureResponse(),
	},
	52: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Parental Playtime Response",
		fnTest: () => J().TestParentalPlaytimeResponse(),
	},
	53: {
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		fnTray: ne,
		strTest: "Requested Game Added",
		fnTest: () => J().TestRequestedGameAdded(),
	},
	54: {
		fnTray: ne,
		showToast: true,
		sound: y.PN.ToastMisc,
		eFeature: l.uX,
		strTest: "Clip Downloaded",
		bEnableInReducedUI: false,
		fnTest: () => J().TestClipDownloaded(),
	},
	55: {
		proto: m.FE,
		showToast: true,
		eFeature: l.uX,
		strTest: "Game Recording Manual Start",
		bEnableInReducedUI: false,
		fnTest: () => J().TestGameRecordingStart(),
	},
	56: {
		proto: m.lr,
		showToast: true,
		eFeature: l.uX,
		strTest: "Game Recording Manual Stop",
		bEnableInReducedUI: false,
		fnTest: () => J().TestGameRecordingStop(),
	},
	58: {
		proto: m.qt,
		showToast: true,
		eFeature: l.uX,
		strTest: "Game Recording InstantClip",
		bEnableInReducedUI: false,
		fnTest: () => J().TestGameRecordingInstantClip(),
	},
};
var U;
const W = new Map([
	[2, 19],
	[4, 20],
	[5, 2],
	[8, 28],
	[9, 29],
	[12, 30],
	[10, 31],
	[3, 27],
	[11, 32],
	[6, 37],
	[14, 39],
	[16, 44],
	[17, 46],
	[19, 47],
	[15, 48],
	[18, 49],
	[20, 51],
	[21, 52],
	[22, 53],
	[24, 54],
]);
export function no(e) {
	return [...W].find(([t, r]) => r == e)[0];
}
const H = [19, 20, 2];
export var a9;
(function (e) {
	e[(e.k_Client = 1)] = "k_Client";
	e[(e.k_Server = 2)] = "k_Server";
})((a9 ||= {}));
class q extends E.cE {
	m_timerRetry = 0;
	async Initialize(e) {
		if (h.oy.MainInstanceUIMode != 4 && h.oy.MainInstanceUIMode != 7) {
			return;
		}
		this.setTransport(e.GetServiceTransport());
		this.m_steamid = e.steamid.GetAccountID().toString();
		this.RegisterOnNotificationCallback(this.OnServerNotification);
		const t = await SteamClient.RemotePlay.GetClientID();
		this.SetClientFilters(t);
		this.RefreshNotifications();
		e.messageHandlers.RegisterServiceNotificationHandlerAction(
			I.sC.NotificationsReceivedHandler,
			(e) => {
				this.UpdateNotifications(e);
				return 1;
			},
		);
		e.messageHandlers.RegisterEMessageHandler(7523, G.dA, (e) => {
			this.UpdateOfflineMessageCount(e.Body().offline_messages());
		});
		if (O.LN.signedOut) {
			let t = M.w.Init(G.oe, 7524);
			e.Send(t);
		}
	}
	OnServerNotification(e, t) {
		let r = W.get(e.type);
		let n = x[r];
		if (!n) {
			return;
		}
		n.fnTray = this.BTrayEnabled(no(r), e.item) ? re : null;
		n.showToast = this.BToastEnabled(no(r), e.item);
		let i = {
			notificationID: e.key,
			rtCreated: e.item.timestamp,
			eType: r,
			nToastDurationMS: undefined,
			eSource: a9.k_Server,
			data: e,
			bNewIndicator: (0, E.Rl)(e.item),
		};
		Tu.ProcessNotification(n, i, t);
	}
	MarkItemRead(e) {
		super.MarkItemRead(e);
		Tu.MarkNotificationRead(e);
	}
	async RefreshNotifications(e = 0) {
		if (this.m_timerRetry) {
			window.clearTimeout(this.m_timerRetry);
			this.m_timerRetry = 0;
		}
		let t = null;
		try {
			t = await (0, E.tM)(
				this.m_transport,
				this.m_steamid,
				(0, c.sf)(B.TS.LANGUAGE),
				undefined,
				false,
				false,
			);
		} catch {
			if (e < 1) {
				this.m_timerRetry = window.setTimeout(
					() => this.RefreshNotifications(++e),
					a.Tg(20, 120) * 1000,
				);
			}
			return;
		}
		if (t) {
			this.ProcessNewNotificationPayload(t);
		}
	}
	async UpdateOfflineMessageCount(e) {
		this.m_summary.offline_messages = e;
	}
	async UpdateNotifications(e) {
		if (
			$Z.BHasNotificationsData() &&
			(e.Body().notifications().length ||
				e.Body().pending_friend_count() !== undefined ||
				e.Body().pending_gift_count() !== undefined ||
				e.Body().pending_family_invite_count() !== undefined)
		) {
			z("Applying a notifications update");
			$Z.ApplyNotificationsUpdate(e.Body().toObject());
		} else {
			z(
				"Performing a full notifications refresh.  Update notifications length:" +
					e.Body().notifications().length,
			);
			this.RefreshNotifications();
		}
	}
	BToastEnabled(e, t) {
		const r = f.rV.notificationPreferences?.find(
			(t) => t.notification_type == e,
		);
		if (r) {
			return (r.notification_targets & 8) != 0;
		} else {
			return (t.notification_targets & 8) != 0;
		}
	}
	BTrayEnabled(e, t) {
		const r = f.rV.notificationPreferences?.find(
			(t) => t.notification_type == e,
		);
		if (r) {
			return (r.notification_targets & 1) != 0;
		} else {
			return (t.notification_targets & 1) != 0;
		}
	}
	GetTransport() {
		return this.m_transport;
	}
	async Dev_TestNotification(e) {
		super.Dev_AddTestNotification(e);
	}
}
(0, n.Cg)([u.oI], q.prototype, "OnServerNotification", null);
export const $Z = new q();
export function Xm() {
	return (0, b.q3)(() => Tu.m_nUnviewedNotifications);
}
export function zF() {
	return (0, b.q3)(() => $Z.m_summary.offline_messages);
}
class K {
	constructor() {
		(0, R.Gn)(this);
	}
	m_rgNotificationTray = [];
	m_cbkNotificationTray = new d.lu();
	m_rgNotificationToasts = [];
	m_valueCurrentToast = (0, d.Jc)();
	m_mapAppOverlayToasts = new Map();
	m_setContextsRenderingToasts = R.sH.set();
	m_nNextTestNotificationID = 10000;
	m_bTestNotifications = false;
	m_nUnviewedNotifications = 0;
	m_iLastBatteryLevelNotification = -1;
	m_LastSystemUpdateNotification = null;
	m_bCheckBatteryAfterResume = false;
	m_hTrayRemoveTimer = undefined;
	m_rtNextTrayRemove = 0;
	m_hPendingToastTimer = undefined;
	m_rgPendingToasts = [];
	m_bShowClientItemAnnouncementToasts = true;
	async RunDebugTestsWhenServicesReady(e) {
		await (0, C.qw)().WaitForServicesInitialized();
		this.m_bTestNotifications = !e;
		this.TestFriendIngame("Portal 2");
		this.TestDownloadComplete(570);
		this.TestDownloadComplete(730);
		this.TestFriendIngame("Portal 2");
		this.TestFriendOnline();
		this.TestFamilySharing();
		this.TestFriendInviteRollup(10);
		this.TestGift("Gamer_Friend");
		this.TestFriendInvite();
		this.TestItemAnnouncement(5);
		this.TestWishlist(570);
		this.TestAsyncGame(570);
		this.TestComment();
		this.TestHelpRequest();
		this.TestParentalFeatureRequest();
		this.m_bTestNotifications = false;
	}
	Dev_SendTestNotifications() {
		0;
	}
	GetNotificationTargets() {
		return x;
	}
	Init() {
		if (B.TS.IN_STEAMUI_SHARED_CONTEXT) {
			SteamClient.Notifications.RegisterForNotifications(this.OnNotification);
			SteamClient.System.RegisterForOnResumeFromSuspend(
				this.OnSystemResumedFromSuspend,
			);
		}
	}
	OnNewNotificationReceived(e) {
		const t = h.oy.MainInstanceUIMode;
		if (e.eSource == a9.k_Server) {
			if (!e.data.item.viewed) {
				this.m_nUnviewedNotifications++;
			}
		} else if (t == 4) {
			this.m_nUnviewedNotifications++;
		}
	}
	OnNotificationUpdateReceived(e, t) {
		const r = this.m_rgNotificationTray.findIndex(
			(t) => t.notifications[0].notificationID == e.notificationID,
		);
		if (r != -1) {
			if (t == E.F1.Update) {
				const t = this.m_rgNotificationTray[r].notifications[0];
				t.data = e.data;
				let n = t.data;
				if (!t.rtMarkedRead && n.rgunread.length == 0) {
					t.rtMarkedRead = GetUnixTime();
				}
				if (t.bNewIndicator && n.item.viewed) {
					if (!(0, E.Rl)(n.item)) {
						t.bNewIndicator = false;
					}
					if (this.m_nUnviewedNotifications) {
						this.m_nUnviewedNotifications--;
					}
				}
			} else if (t == E.F1.Remove) {
				this.m_rgNotificationTray.splice(r, 1);
			}
		}
	}
	Viewed() {
		const e = GetUnixTime();
		let t = false;
		this.m_rgNotificationTray.forEach((r) => {
			const n = r.notifications[0];
			if (
				!n.rtMenuFirstViewed &&
				((n.rtMenuFirstViewed = e), n.eSource == a9.k_Server)
			) {
				let e = n.data;
				if (e.item.viewed) {
					n.rtMenuFirstViewed = e.item.viewed;
				}
			}
			if (n.rtMenuFirstViewed + E.$Q < e) {
				Tu.RemoveGroupFromTray(r);
				t = true;
			} else if (n.bNewIndicator && n.rtMenuFirstViewed + E.e$ < e) {
				r.notifications[0].bNewIndicator = false;
				t = true;
			}
		});
		if (t) {
			this.m_cbkNotificationTray.Dispatch(this.m_rgNotificationTray);
		}
		if (this.m_nUnviewedNotifications) {
			this.m_nUnviewedNotifications = 0;
			$Z.MarkAllItemsViewed();
		}
	}
	AppOverlayRunning(e, t) {
		let r = this.m_mapAppOverlayToasts.has(e);
		if (t && !r) {
			this.m_mapAppOverlayToasts.set(e, []);
		} else if (!t && r) {
			this.m_mapAppOverlayToasts.delete(e);
		}
	}
	BIsUserInGame() {
		return h.oy.BIsOverlayPath(v.z.m_history?.location.pathname);
	}
	BShowToast(e) {
		const t = e.showToast;
		return (typeof t == "boolean" && t) || (typeof t == "function" && t());
	}
	ChooseSound(e, t) {
		let r = e.playSound ?? !!e.sound;
		if (
			(f.rV.clientSettings.play_sound_on_toast || e.bCritical) &&
			((typeof r == "boolean" && r) || (typeof r == "function" && r(e, t)))
		) {
			return (
				(typeof e.sound == "number" && e.sound) ||
				(typeof e.sound == "function" && e.sound(e, t))
			);
		}
		return null;
	}
	LoadServerToastRequiredData(e, t) {
		function r(e) {
			const t = p.b.InitFromAccountID(e);
			const r = A.O$.GetFriendState(t);
			return !!r.display_name && !!r.persona.avatar_url_medium;
		}
		function n(e) {
			return T.A.Get().BHasApp(e);
		}
		(function i(a) {
			if (
				!(function () {
					const t = (0, E.bP)(e);
					switch (e.type) {
						case 5:
							return r(t?.requestorID);
						case 2:
						case 9:
							return r(t);
						case 8:
						case 12:
							return n(t?.appid);
						default:
							return true;
					}
				})()
			) {
				if (a < 20) {
					window.setTimeout(() => i(a + 1), 1000);
				} else {
					t(false);
				}
			} else {
				t(true);
			}
		})(0);
	}
	SendPendingServerToasts() {
		if (this.m_rgPendingToasts.length) {
			this.m_rgPendingToasts.forEach((e, t) => {
				this.LoadServerToastRequiredData(e.data, (t) => {
					if (t) {
						this.m_rgNotificationToasts = this.m_rgNotificationToasts.concat(e);
						this.DispatchNextToast();
					}
				});
			});
			this.m_rgPendingToasts = [];
		}
	}
	ProcessNotification(e, t, r) {
		if ((0, F.q)()) {
			z("Reduced UI");
			if (!e.bEnableInReducedUI) {
				z("Skipping notification", t);
				return;
			}
		}
		const n = f.rV.clientSettings;
		if (e.fnTray) {
			if (r == E.F1.New) {
				this.OnNewNotificationReceived(t);
				e.fnTray(t, this.m_rgNotificationTray);
				if (e.nRemoveFromTraySec) {
					this.ScheduleRemoveFromTray(e.nRemoveFromTraySec);
				}
			} else {
				this.OnNotificationUpdateReceived(t, r);
			}
			this.m_cbkNotificationTray.Dispatch(this.m_rgNotificationTray);
		}
		let i = false;
		if (f.rV.IsSteamInTournamentMode() && e.eFeature == 4) {
			i = true;
		}
		if (
			!i &&
			!_.jR.BIsFeatureBlocked(e.eFeature) &&
			!this.m_bTestNotifications &&
			r == E.F1.New
		) {
			let r = this.BShowToast(e);
			if (r && t.eSource == a9.k_Server) {
				if (t.data.item.viewed) {
					r = false;
				}
			}
			if (r) {
				if (
					(n.disable_all_toasts && !e.bCritical) ||
					(n.disable_toasts_in_game && !e.bCritical && this.BIsUserInGame())
				) {
					return;
				}
				if (t.eType == 20 && t.eSource == a9.k_Client) {
					if (!this.m_bShowClientItemAnnouncementToasts) {
						return;
					}
					this.m_bShowClientItemAnnouncementToasts = false;
				}
				t.nToastDurationMS = e.toastDurationMS || 5000;
				if (t.eSource == a9.k_Server) {
					if (this.m_hPendingToastTimer !== undefined) {
						window.clearTimeout(this.m_hPendingToastTimer);
						this.m_hPendingToastTimer = undefined;
					}
					let e = t.data;
					FindAndRemoveWhere(
						this.m_rgPendingToasts,
						(t) => W.get(e.type) == t.eType,
					);
					this.m_rgPendingToasts.push(t);
					this.m_hPendingToastTimer = window.setTimeout(() => {
						this.SendPendingServerToasts();
						this.m_hPendingToastTimer = undefined;
					}, 3000);
				} else {
					this.m_rgNotificationToasts.push(t);
					if (this.m_rgNotificationToasts.length == 1) {
						this.DispatchNextToast();
					}
				}
			}
		}
		if (e.fnShowModal && r == E.F1.New) {
			e.fnShowModal();
		}
	}
	OnNotification(e, t, r) {
		if (h.oy.MainInstanceUIMode != 4 && h.oy.MainInstanceUIMode != 7) {
			return;
		}
		if (H.includes(t)) {
			L(
				t == 19 || t == 2
					? "Unexpected type " +
							t +
							" notification from the Client.  This is a no-op due to overlap with Steam Notifications."
					: "Received type " +
							t +
							" notification from the Client.  This is a no-op due to overlap with Steam Notifications.",
			);
			return;
		}
		let n = x[t];
		if (!n) {
			return;
		}
		if (t == 7 && this.BSkipSystemUpdateNotification(r)) {
			return;
		}
		if (t == 26 && h.oy.MainInstanceUIMode != 4) {
			return;
		}
		let i = {
			notificationID: e,
			rtCreated: GetUnixTime(),
			eType: t,
			nToastDurationMS: 0,
			eSource: a9.k_Client,
			data: n.proto.deserializeBinary(r),
			bNewIndicator: true,
		};
		if (t != 20 || i.data.new_item_count() != 0) {
			this.ProcessNotification(n, i, E.F1.New);
		} else {
			this.m_bShowClientItemAnnouncementToasts = true;
		}
	}
	AddAppOverlayNotification(e, t, r, n, i) {
		z("AddAppOverlayNotification", e);
		let a = this.m_mapAppOverlayToasts.get(e);
		if (!e || !a) {
			(0, S.w)(
				false,
				"Trying to add toast to a game's overlay when the game is not running",
			);
			return;
		}
		let s = x[r];
		if (!s) {
			return;
		}
		if (!this.BShowToast(s)) {
			return;
		}
		let l = {
			notificationID: t,
			rtCreated: GetUnixTime(),
			eType: r,
			nToastDurationMS: s.toastDurationMS || 5000,
			fnNotificationResolved: i,
			eSource: a9.k_Client,
			data: s.proto.deserializeBinary(n),
		};
		if ((0, F.q)()) {
			z("Reduced UI");
			if (!s.bEnableInReducedUI) {
				z("Skipping notification", l);
				return;
			}
		}
		a.push(l);
	}
	MarkNotificationRead(e) {
		let t = this.m_rgNotificationTray.find(
			(t) =>
				t.notifications[0].eSource == a9.k_Server &&
				t.notifications[0].data.item.notification_id == e,
		);
		if (t) {
			this.RemoveGroupFromTray(t);
		}
	}
	ScheduleRemoveFromTray(e) {
		let t = GetUnixTime();
		if (this.m_rtNextTrayRemove > t + e) {
			this.ClearRemoveFromTrayTimer();
		}
		if (this.m_hTrayRemoveTimer === undefined) {
			this.m_hTrayRemoveTimer = window.setTimeout(
				this.RemoveExpiredTray,
				e * 1000,
			);
			this.m_rtNextTrayRemove = t + e;
		}
	}
	ClearRemoveFromTrayTimer() {
		if (this.m_hTrayRemoveTimer !== undefined) {
			window.clearTimeout(this.m_hTrayRemoveTimer);
		}
		this.m_hTrayRemoveTimer = undefined;
		this.m_rtNextTrayRemove = 0;
	}
	RemoveExpiredTray() {
		this.ClearRemoveFromTrayTimer();
		let e = GetUnixTime();
		let t = Number.MAX_VALUE;
		let r = false;
		FilterInPlace(this.m_rgNotificationTray, (n) => {
			let i = x[n.eType];
			if (!i.nRemoveFromTraySec) {
				return true;
			}
			let a = n.notifications;
			let s = a[a.length - 1].rtCreated + i.nRemoveFromTraySec;
			if (s <= e) {
				r = true;
				return false;
			} else {
				t = Math.min(s, t);
				return true;
			}
		});
		if (r) {
			this.m_cbkNotificationTray.Dispatch(this.m_rgNotificationTray);
		}
		if (t < Number.MAX_VALUE) {
			this.ScheduleRemoveFromTray(t - e);
		}
	}
	RemoveGroupFromTray(e) {
		const t = this.m_rgNotificationTray.findIndex(
			(t) =>
				t.notifications[0].notificationID == e.notifications[0].notificationID,
		);
		if (t != -1) {
			this.m_rgNotificationTray.splice(t, 1);
			this.m_cbkNotificationTray.Dispatch(this.m_rgNotificationTray);
		}
	}
	PlayNotificationSound(e) {
		const t = e.eType;
		const r = x[t];
		let n = this.ChooseSound(r, e);
		if (n) {
			y.eZ.PlayNavSound(n);
		}
	}
	GetNotificationsInTray() {
		return [this.m_rgNotificationTray, this.m_cbkNotificationTray];
	}
	GetCurrentToastNotification() {
		let e = null;
		if (this.m_rgNotificationToasts.length > 0) {
			e = this.m_rgNotificationToasts[0];
		}
		return e;
	}
	GetCurrentAppOverlayNotification(e) {
		if (!e) {
			return null;
		}
		let t = this.m_mapAppOverlayToasts.get(e);
		if (t && t.length != 0) {
			return t[0];
		} else {
			return null;
		}
	}
	BAnyToastDisplayAlone(e) {
		for (let t of e) {
			if (ce(t)) {
				return true;
			}
		}
		return false;
	}
	BNextToastDisplayAlone(e) {
		if (e) {
			let t = this.m_mapAppOverlayToasts.get(e);
			if (t && t.length > 0) {
				return ce(t[0]);
			}
		}
		return (
			this.m_rgNotificationToasts.length != 0 &&
			ce(this.m_rgNotificationToasts[0])
		);
	}
	PopNextToastNotification(e) {
		if (e) {
			let t = this.m_mapAppOverlayToasts.get(e);
			if (t && t.length > 0) {
				return t.shift();
			}
		}
		if (this.m_rgNotificationToasts.length == 0) {
			return;
		}
		let t = this.m_rgNotificationToasts.shift();
		this.DispatchNextToast();
		return t;
	}
	ClearAllToastNotifications() {
		if (this.m_rgNotificationToasts.length != 0) {
			this.m_rgNotificationToasts = [];
			this.DispatchNextToast();
		}
	}
	SetContextRenderingToast(e, t) {
		if (t) {
			this.m_setContextsRenderingToasts.add(e);
		} else {
			this.m_setContextsRenderingToasts.delete(e);
		}
	}
	BAnyContextRenderingToasts() {
		return this.m_setContextsRenderingToasts.size > 0;
	}
	BContextRenderingToasts(e) {
		return this.m_setContextsRenderingToasts.has(e);
	}
	DispatchNextToast() {
		const e = this.GetCurrentToastNotification();
		this.m_valueCurrentToast.Set(e);
	}
	ExpireToast(e) {
		if (!e) {
			return;
		}
		let t = false;
		if (this.m_rgNotificationToasts.length > 0) {
			t = this.m_rgNotificationToasts[0].notificationID == e.notificationID;
		}
		FindAndRemoveWhere(
			this.m_rgNotificationToasts,
			(t) => t.notificationID == e.notificationID,
		);
		if (t) {
			this.DispatchNextToast();
		}
	}
	get CurrentToastSubscribableValue() {
		return this.m_valueCurrentToast;
	}
	OnBatteryLevelChange(e, t, r) {
		if (this.m_bCheckBatteryAfterResume) {
			this.m_bCheckBatteryAfterResume = false;
			this.m_iLastBatteryLevelNotification = -1;
		}
		let n = Math.round(e * 100);
		if (n > 15) {
			this.m_iLastBatteryLevelNotification = -1;
			return;
		}
		if (t == 2 || !r) {
			return;
		}
		let i = [3, 5, 10].findIndex((e) => e >= n);
		if (
			this.m_iLastBatteryLevelNotification != -1 &&
			this.m_iLastBatteryLevelNotification <= i
		) {
			return;
		}
		if (i == -1) {
			return;
		}
		let a = m.bX.fromObject({
			pct_remaining: e,
		});
		if (h.oy.MainInstanceUIMode == 4) {
			this.OnNotification(
				this.m_nNextTestNotificationID++,
				6,
				a.serializeBinary(),
			);
		} else {
			for (const e of h.oy.RunningApps) {
				this.AddAppOverlayNotification(
					e.appid,
					this.m_nNextTestNotificationID++,
					6,
					a.serializeBinary(),
				);
			}
		}
		this.m_iLastBatteryLevelNotification = i;
	}
	m_bShowedRefreshLogin = false;
	PendingLoginRefresh(e) {
		if (e != this.m_bShowedRefreshLogin) {
			if (e) {
				let e = m.oS.fromObject({});
				const t = () => !this.m_bShowedRefreshLogin;
				for (const r of h.oy.RunningApps) {
					this.AddAppOverlayNotification(
						r.appid,
						this.m_nNextTestNotificationID++,
						36,
						e.serializeBinary(),
						t,
					);
				}
			} else {
				this.RemoveFromToastsWhere((e) => e.eType != 36);
			}
			this.m_bShowedRefreshLogin = e;
		}
	}
	m_bShowedLowBatteryTempNotification = false;
	m_bShowedHighBatteryTempNotification = false;
	OnBatteryTemperatureChange(e) {
		if (e > 15 && this.m_bShowedLowBatteryTempNotification) {
			let t = m.DO.fromObject({
				temperature: e,
				notification_type: "normal",
			});
			this.OnNotification(
				this.m_nNextTestNotificationID++,
				23,
				t.serializeBinary(),
			);
			this.m_bShowedLowBatteryTempNotification = false;
		}
		if (e < 45 && this.m_bShowedHighBatteryTempNotification) {
			let t = m.DO.fromObject({
				temperature: e,
				notification_type: "normal",
			});
			this.OnNotification(
				this.m_nNextTestNotificationID++,
				23,
				t.serializeBinary(),
			);
			this.m_bShowedHighBatteryTempNotification = false;
		}
		if (e < 5 && !this.m_bShowedLowBatteryTempNotification) {
			let t = m.DO.fromObject({
				temperature: e,
				notification_type: "low",
			});
			this.OnNotification(
				this.m_nNextTestNotificationID++,
				23,
				t.serializeBinary(),
			);
			this.m_bShowedLowBatteryTempNotification = true;
		}
		if (e > 50 && !this.m_bShowedHighBatteryTempNotification) {
			let t = m.DO.fromObject({
				temperature: e,
				notification_type: "high",
			});
			this.OnNotification(
				this.m_nNextTestNotificationID++,
				23,
				t.serializeBinary(),
			);
			this.m_bShowedHighBatteryTempNotification = true;
		}
	}
	NotifyLowDiskSpace(e) {
		let t = m.jv.fromObject({
			folder_index: e,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			22,
			t.serializeBinary(),
		);
	}
	NotifyClaimSteamDeckRewards() {
		let e = m.X$.fromObject({});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			18,
			e.serializeBinary(),
		);
	}
	NotifyTimerExpired(e) {
		let t = m.ol.fromObject({});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			38,
			t.serializeBinary(),
		);
	}
	BSkipSystemUpdateNotification(e) {
		let t = m.M.deserializeBinary(e).type();
		if (h.oy.BIsInOOBE) {
			return true;
		}
		if (!(0, C.qw)().BHasCurrentUser() && t == 1) {
			return true;
		}
		if (this.m_LastSystemUpdateNotification) {
			let e = this.m_LastSystemUpdateNotification.eType;
			if (t == 1 && e == 2) {
				return true;
			}
			if (t == e) {
				if (
					GetUnixTime() - this.m_LastSystemUpdateNotification.rtDisplayed <
					Seconds.PerWeek
				) {
					return true;
				}
			}
		}
		this.m_LastSystemUpdateNotification = {
			eType: t,
			rtDisplayed: GetUnixTime(),
		};
		return false;
	}
	OnSystemResumedFromSuspend() {
		this.m_bCheckBatteryAfterResume = true;
	}
	OnScreenshotStarted() {
		if (f.rV.clientSettings.enable_screenshot_sound) {
			y.eZ.PlayNavSound(y.PN.Screenshot);
		}
	}
	DoScreenshotNotification(e, t) {
		let r = m.sS.fromObject({
			screenshot_handle: e,
			description: t,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			14,
			r.serializeBinary(),
		);
	}
	RemoveScreenshotNotification(e) {
		this.RemoveFromTrayWhere((t) => {
			if (t.eType != 14) {
				return true;
			}
			(0, S.w)(t.notifications.length > 1, "Grouped screenshots?");
			return t.notifications[0].data.screenshot_handle() != e;
		});
		this.RemoveFromToastsWhere(
			(t) => t.eType != 14 || t.data.screenshot_handle() != e,
		);
	}
	IncomingVoiceChat(e, t) {
		let r = p.b.InitFromAccountID(e);
		if (t) {
			let e = m.qr.fromObject({
				steamid: r.ConvertTo64BitString(),
			});
			this.OnNotification(
				this.m_nNextTestNotificationID++,
				17,
				e.serializeBinary(),
			);
			return;
		}
		let n = r.ConvertTo64BitString();
		this.RemoveFromTrayWhere((e) => {
			if (e.eType != 17) {
				return true;
			}
			return e.notifications[0].data.steamid() != n;
		});
		this.RemoveFromToastsWhere((e) => e.eType != 17 || e.data.steamid() != n);
	}
	AddOverlaySplashScreen(e) {
		let t = m.d6.fromObject({});
		this.AddAppOverlayNotification(
			e,
			this.m_nNextTestNotificationID++,
			33,
			t.serializeBinary(),
		);
	}
	AddBroadcastAvailableToWatch(e, t) {
		let r = m.Mr.fromObject({
			broadcast_permission: t,
		});
		this.AddAppOverlayNotification(
			e,
			this.m_nNextTestNotificationID++,
			34,
			r.serializeBinary(),
		);
	}
	AddTimedTrialRemaining(e, t, r, n, i) {
		let a = m.$V.fromObject({
			appid: e,
			icon: t,
			offline: r,
			allowed_seconds: n,
			played_seconds: i,
		});
		this.AddAppOverlayNotification(
			e,
			this.m_nNextTestNotificationID++,
			35,
			a.serializeBinary(),
		);
	}
	RemoveFromTrayWhere(e) {
		let t = this.m_rgNotificationTray.length;
		FilterInPlace(this.m_rgNotificationTray, e);
		if (t != this.m_rgNotificationTray.length) {
			this.m_cbkNotificationTray.Dispatch(this.m_rgNotificationTray);
		}
	}
	RemoveFromToastsWhere(e) {
		if (this.m_rgNotificationToasts.length != 0) {
			FilterInPlace(this.m_rgNotificationToasts, e);
			this.m_valueCurrentToast.Set(
				this.m_rgNotificationToasts.length
					? this.m_rgNotificationToasts[0]
					: null,
			);
		}
	}
	TestCloudSyncFailure(e) {
		if (!e) {
			L("Please provide an appid");
			return;
		}
		let t = m.A_.fromObject({
			appid: e,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			15,
			t.serializeBinary(),
		);
	}
	TestCloudSyncConflict(e) {
		if (!e) {
			L("Please provide an appid");
			return;
		}
		let t = m.W9.fromObject({
			appid: e,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			16,
			t.serializeBinary(),
		);
	}
	TestIncomingVoiceChat() {
		let e = $();
		let t = m.qr.fromObject({
			steamid: e.ConvertTo64BitString(),
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			17,
			t.serializeBinary(),
		);
	}
	TestDownloadComplete(e) {
		if (!e) {
			L("Please provide an appid");
			return;
		}
		let t = m.Vn.fromObject({
			appid: e,
			dlc_appid: 0,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			1,
			t.serializeBinary(),
		);
	}
	TestScreenshot() {
		if (B.TS.ON_DECK) {
			this.DoScreenshotNotification(
				"Test Account",
				"#MediaPage_Share_ActivityFeed_Notification",
			);
		} else {
			L("Screenshot test only available on Deck");
		}
	}
	TestFriendInvite(e) {
		let t = $(e);
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 5,
			body_data: JSON.stringify({
				requestor_id: t.ConvertTo64BitString(),
				state: 2,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestFriendOnline(e) {
		let t = $(e);
		L("Chosen friend", t.ConvertTo64BitString());
		let r = m.jn.fromObject({
			steamid: t.ConvertTo64BitString(),
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			4,
			r.serializeBinary(),
		);
	}
	TestFriendIngame(e, t) {
		let r = $(t);
		e = e || "Counter-Strike: Global Offensive";
		let n = m.DQ.fromObject({
			steamid: r.ConvertTo64BitString(),
			game_name: e,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			3,
			n.serializeBinary(),
		);
	}
	TestFamilySharing() {
		const e = $();
		L("Testing family sharing for", e.GetAccountID());
		let t = m.zY.fromObject({
			accountid_owner: e.GetAccountID(),
			authorized: true,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			11,
			t.serializeBinary(),
		);
		t.set_authorized(false);
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			11,
			t.serializeBinary(),
		);
		let r = m.gF.fromObject({
			accountid_owner: e.GetAccountID(),
			seconds_remaining: 300,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			12,
			r.serializeBinary(),
		);
		let n = m.mu.fromObject({
			accountid_owner: e.GetAccountID(),
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			13,
			n.serializeBinary(),
		);
	}
	async TestAchievement(e, t = false) {
		if (!e) {
			L("provide the appid for a game you own that also has achievements");
			return;
		}
		const r = await g.H.RequestAppDetails(e);
		let n = null;
		if (r && r.achievements.vecHighlight.length != 0) {
			let e = a.Tg(0, r.achievements.vecHighlight.length - 1);
			n = r.achievements.vecHighlight[e];
		} else {
			L(
				"TestAchievement - Couldn't find app details or highlighted achievements for " +
					e +
					" so making one up.",
			);
			n = {
				strName: "won a race",
				strDescription: "You placed 1st!",
				strImage:
					"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/270880/2aec8af4b4b23cb6054d9aea06194621cdd66945.jpg",
				strID: "1",
			};
		}
		let i = {
			achievement_id: n.strID,
			appid: e,
			name: n.strName,
			description: n.strDescription,
			image_url: n.strImage,
			achieved: true,
			rtime_unlocked: 1622670460,
			current_progress: 0,
			max_progress: 0,
			min_progress: 0,
			global_achieved_pct: 10,
		};
		if (t) {
			i.achieved = false;
			i.rtime_unlocked = 0;
			i.max_progress = 10000;
			i.current_progress = 3456;
			i.min_progress = 0;
		}
		let s = m.R8.fromObject(i);
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			5,
			s.serializeBinary(),
		);
	}
	TestSystemUpdate(e) {
		if (e === undefined) {
			L("Specify 1 or 2 for notification types");
			return;
		}
		let t = m.M.fromObject({
			type: e,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			7,
			t.serializeBinary(),
		);
	}
	TestHardwareSurvey() {
		let e = m.fU.fromObject({});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			21,
			e.serializeBinary(),
		);
	}
	TestReadControllerGuide() {
		let e = m.Bn.fromObject({
			controller_index: 0,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			26,
			e.serializeBinary(),
		);
	}
	TestSteamInputActionSetChanged() {
		let e = m.Yn.fromObject({
			controller_index: 0,
			action_set_name: "Test Action Set",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			40,
			e.serializeBinary(),
		);
	}
	TestRemoteClientConnection() {
		let e = m.Vz.fromObject({
			machine: "Tom's Computer",
			connected: true,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			41,
			e.serializeBinary(),
		);
		e = m.Vz.fromObject({
			machine: "Tom's Computer",
			connected: false,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			41,
			e.serializeBinary(),
		);
	}
	TestRemoteClientStartStream() {
		let e = m.dY.fromObject({
			machine: "Tom's Computer",
			game_name: "Spacewar",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			42,
			e.serializeBinary(),
		);
	}
	TestStreamingClientConnection() {
		let e = m.R0.fromObject({
			hostname: "Sam's Computer",
			machine: "Tom's Computer",
			connected: true,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			43,
			e.serializeBinary(),
		);
		e = m.R0.fromObject({
			hostname: "Sam's Computer",
			machine: "Tom's Computer",
			connected: false,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			43,
			e.serializeBinary(),
		);
	}
	TestFamilyInvite(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 16,
			body_data: JSON.stringify({
				inviter: t.ConvertTo64BitString(),
				familyid: "9",
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestFamilyPurchaseRequest(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 17,
			body_data: JSON.stringify({
				requestor_steamid: t.ConvertTo64BitString(),
				familyid: "9",
				cartgid: "123",
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestFamilyPurchaseRequestResponse(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 19,
			body_data: JSON.stringify({
				responder_steamid: t.ConvertTo64BitString(),
				familyid: "9",
				action: 1,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestRequestedGameAdded(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 22,
			body_data: JSON.stringify({
				responder_steamid: t.ConvertTo64BitString(),
				package_id: 70,
				bundle_id: 0,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestPlaytimeWarning() {
		let e = m.Fn.fromObject({
			type: "minutes",
			playtime_remaining: 5,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			45,
			e.serializeBinary(),
		);
	}
	TestParentalFeatureRequest(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 15,
			body_data: JSON.stringify({
				steamid: t.ConvertTo64BitString(),
				requestid: 1,
				features: 4,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestParentalFeatureResponse(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 20,
			body_data: JSON.stringify({
				steamid: t.ConvertTo64BitString(),
				requestid: 1,
				approved: 1,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestParentalPlaytimeRequest(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 18,
			body_data: JSON.stringify({
				steamid: t.ConvertTo64BitString(),
				requestid: 1,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestParentalPlaytimeResponse(e) {
		const t = $(e);
		if (!e) {
			L("Fake message is from: ", t.ConvertTo64BitString());
		}
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 21,
			body_data: JSON.stringify({
				steamid: t.ConvertTo64BitString(),
				requestid: 1,
				approved: 1,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	TestFriendMessage(e, t) {
		let r = $(e);
		let n = A.O$.GetFriendState(r);
		let i = "message_" + r.GetAccountID();
		let a = n.persona.avatar_url_medium;
		let s = this.m_nNextTestNotificationID++;
		t = t ?? `test message (${s})`;
		if (!e) {
			L("Fake message is from: ", r.ConvertTo64BitString());
		}
		let o = m.zz.fromObject({
			tag: i,
			steamid: r.ConvertTo64BitString(),
			title: n.display_name,
			body: t,
			icon: a,
		});
		this.OnNotification(s, 8, o.serializeBinary());
	}
	TestFriendInviteRollup(e) {
		e = e || 200;
		let t = m.H1.fromObject({
			new_invite_count: e,
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			10,
			t.serializeBinary(),
		);
	}
	TestGift(e) {
		let t = $(e);
		let r = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 2,
			body_data: JSON.stringify({
				gifter_account: t.ConvertTo64BitString(),
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(r);
	}
	async TestItemAnnouncement(e) {
		let t = (0, C.qw)().GetCurrentUser().strSteamID;
		const r = M.w.Init(k.z9);
		r.Body().set_steamid(t);
		r.Body().set_contextid("2");
		r.Body().set_appid(440);
		r.Body().set_get_descriptions(true);
		const n = await k.tB.GetInventoryItemsWithDescriptions(
			$Z.GetTransport(),
			r,
		);
		let i = 0;
		let a = "";
		let s = "";
		if (n.GetEResult() == 1) {
			const e = n.Body().toObject();
			let t = Math.trunc((Math.random() * 100) % e.assets.length);
			i = e.assets[t].appid;
			a = e.assets[t].assetid;
			s = e.assets[t].contextid;
		}
		let o = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 4,
			body_data: JSON.stringify({
				app_id: i,
				context_id: s,
				asset_id: a,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(o);
	}
	TestUnsupportedDock() {
		let e = m.TP.fromObject({});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			24,
			e.serializeBinary(),
		);
	}
	TestGroupChatMessage(e, t) {
		let r = $(e);
		let n = A.O$.GetFriendState(r);
		let i = this.m_nNextTestNotificationID++;
		let a = {
			tag: "groupmsg_" + r.GetAccountID(),
			steamid_sender: r.ConvertTo64BitString(),
			chat_group_id: "1",
			chat_id: "1",
			title: "Test group",
			body: t ?? `test message (${i})`,
			rawbody: t ?? `test message (${i})`,
			icon: n.persona.avatar_url_medium,
		};
		if (!e) {
			L("Fake message is from: ", r.ConvertTo64BitString());
		}
		let s = m.kE.fromObject(a);
		this.OnNotification(i, 9, s.serializeBinary());
	}
	TestGroupChatMention(e, t) {
		let r = $(e);
		let n = A.O$.GetFriendState(r);
		let i = this.m_nNextTestNotificationID++;
		let a = {
			tag: "groupmsg_mention_" + r.GetAccountID(),
			steamid_sender: r.ConvertTo64BitString(),
			chat_group_id: "1",
			chat_id: "1",
			title: "Mann Co. & Friends",
			body: t ?? `test message (${i})`,
			rawbody: t ?? `test message (${i})`,
			icon: n.persona.avatar_url_medium,
		};
		if (!e) {
			L("Fake message is from: ", r.ConvertTo64BitString());
		}
		let s = m.kE.fromObject(a);
		this.OnNotification(i, 9, s.serializeBinary());
	}
	TestWishlist(e) {
		if (!e) {
			L("provide the appid for a game");
			return;
		}
		let t = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 8,
			body_data: JSON.stringify({
				appid: e,
				count: 1,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(t);
	}
	async TestComment() {
		let e = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 3,
			body_data: JSON.stringify({
				owner_steam_id: "103582791433530667",
				bclan_account: 0,
				title: "Test Title",
				comment: "Test Comment",
				time: "1675727086",
				comment_type: "7",
				topic_id: "3758852682829594306",
				forum_id: "882959061469922951",
				account_id: "1255387000",
				bhas_friend: 0,
				bis_forum: 1,
				text: "Testing a forum comment",
				last_post: "1675727086",
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(e);
	}
	TestTradeOffer() {
		let e = $();
		let t = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 9,
			body_data: JSON.stringify({
				sender: e.ConvertTo64BitString(),
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(t);
	}
	TestMajorSale() {
		let e = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 6,
			body_data: JSON.stringify({
				title: "The Steam Spring sale is underway",
				body: "Great games are on sale now!",
				image:
					"https://cdn.steamstatic.com/store/promo/spring2023/push_icon.png?v=1",
				link: N.B7.GetStoreURL(),
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(e);
	}
	TestGeneralAnnouncement() {
		let e = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 10,
			body_data: JSON.stringify({
				display_name: "Replay 2023",
				body: "Look back at your top played games and milestones",
				image:
					"https://avatars.akamai.steamstatic.com/e34e65ef2ef16093d4428c930fbcc42490522ed3_full.jpg",
				link: N.B7.GetStoreURL(),
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(e);
	}
	TestAsyncGame(e) {
		let t = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 12,
			body_data: JSON.stringify({
				appid: e,
				state: a.Tg(1, 2),
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(t);
	}
	TestHelpRequest() {
		let e = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 3,
			notification_type: 11,
			body_data: JSON.stringify({
				ticket: "HT-KCXG-2VQ8-9B5F",
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(e);
	}
	TestModeratorMessage() {
		let e = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 1,
			notification_type: 14,
			body_data: JSON.stringify({
				msgid: 48222031,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(e);
	}
	TestGRE() {
		let e = m.h3.fromObject({
			game_id: "0",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			50,
			e.serializeBinary(),
		);
	}
	TestGRUM() {
		let e = m.K_.fromObject({
			game_id: "0",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			57,
			e.serializeBinary(),
		);
	}
	TestGameRecordingStart() {
		let e = m.FE.fromObject({
			game_id: "730",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			55,
			e.serializeBinary(),
		);
	}
	TestGameRecordingStop() {
		let e = m.lr.fromObject({
			game_id: "730",
			clip_id: "",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			56,
			e.serializeBinary(),
		);
	}
	TestGameRecordingInstantClip() {
		let e = m.qt.fromObject({
			game_id: "730",
			clip_id: "",
		});
		this.OnNotification(
			this.m_nNextTestNotificationID++,
			58,
			e.serializeBinary(),
		);
	}
	async TestClipDownloaded() {
		const e = await SteamClient.RemotePlay.GetClientID();
		let t = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 9,
			notification_type: 24,
			body_data: JSON.stringify({
				clip_id: "0",
				remote_client_id: e,
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(t);
		t = {
			notification_id: E.y0 + this.m_nNextTestNotificationID++,
			notification_targets: 9,
			notification_type: 24,
			body_data: JSON.stringify({
				clip_id: "0",
				remote_client_id: "INVALID_ID",
			}),
			read: false,
			timestamp: Date.now() / 1000,
		};
		$Z.Dev_TestNotification(t);
	}
}
(0, n.Cg)([R.sH], K.prototype, "m_mapAppOverlayToasts", undefined);
(0, n.Cg)([R.sH], K.prototype, "m_nUnviewedNotifications", undefined);
(0, n.Cg)([u.oI], K.prototype, "ProcessNotification", null);
(0, n.Cg)([u.oI], K.prototype, "OnNotification", null);
(0, n.Cg)([R.XI.bound], K.prototype, "AddAppOverlayNotification", null);
(0, n.Cg)([u.oI], K.prototype, "RemoveExpiredTray", null);
(0, n.Cg)([u.oI], K.prototype, "RemoveGroupFromTray", null);
(0, n.Cg)([u.oI], K.prototype, "OnSystemResumedFromSuspend", null);
export const Tu = new K();
function J() {
	return Tu;
}
function $(e) {
	let t;
	if (e) {
		t = new p.b(e);
	} else {
		if (A.O$.allFriends.length == 0) {
			L("Can't make test notification; no friends");
			return new p.b();
		}
		let e = a.Tg(0, A.O$.allFriends.length - 1);
		t = p.b.InitFromAccountID(A.O$.allFriends[e].persona.GetAccountID());
	}
	return t;
}
function ee(e, t, r) {
	let n = t.findIndex(r);
	let i = n >= 0 ? t[n] : null;
	if (n != 0) {
		if (
			i &&
			i.notifications[0].rtCreated > GetUnixTime() - Seconds.PerMinute * 15
		) {
			MoveElement(t, n, 0);
			i.notifications.push(e);
			return;
		} else {
			ne(e, t);
			return;
		}
	}
	i.notifications.push(e);
}
function te(e, t) {
	FindAndRemoveWhere(
		t,
		(t) =>
			(t.eType == 4 || t.eType == 3) &&
			t.notifications[0].data.steamid() == e.data.steamid(),
	);
	ne(e, t);
}
function re(e, t) {
	FindAndRemoveWhere(
		t,
		(t) => e.notificationID == t.notifications[0].notificationID,
	);
	let r = {
		eType: e.eType,
		notifications: [e],
	};
	t.unshift(r);
}
function ne(e, t) {
	let r = {
		eType: e.eType,
		notifications: [e],
	};
	t.unshift(r);
}
export function ZT() {
	const [e, t] = Tu.GetNotificationsInTray();
	const [r, n] = i.useState(e);
	(0, u.hL)(t, (e) => {
		n(e.slice());
	});
	const a = (0, b.q3)(() =>
		(function (e) {
			return e.filter((e) => {
				const t = x[e.eType];
				return !_.jR.BIsFeatureBlocked(t.eFeature);
			});
		})(r),
	);
	return a;
}
export function lf() {
	return (0, u.gc)(Tu.CurrentToastSubscribableValue);
}
export function $S(e) {
	return (0, b.q3)(() => (e ? Tu.GetCurrentAppOverlayNotification(e) : null));
}
export function XE() {
	return (0, b.q3)(() => ({
		notifications: $Z.m_rgNotificationRollups,
		summary: {
			...$Z.m_summary,
		},
		loaded: $Z.m_bLoaded,
	})).summary;
}
function le(e) {
	return () => f.rV.friendSettings[e];
}
function ce(e) {
	return x[e.eType].displayToastAlone === true;
}
export function PU(e) {
	return (0, b.q3)(
		() => !Tu.BContextRenderingToasts(e) && Tu.BAnyContextRenderingToasts(),
	);
}
window.NotificationStore = Tu;
