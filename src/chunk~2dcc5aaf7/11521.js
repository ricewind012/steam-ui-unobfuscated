var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require("./11374.js");
var s = require("./60917.js");
var o = require("./87546.js");
var l = require("./35488.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./22091.js");
var d = require("./74416.js");
var A = require("./20189.js");
var p = A;
var g = require("./48289.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var _C = require(/*webcrack:missing*/ "./8573.js");
var _ = require("./87913.js");
var f = require("./73317.js");
var b = require("./67863.js");
var y = require("./96680.js");
var S = require("./18057.js");
var w = require("./13688.js");
var B = require("./18869.js");
var v = require("./65067.js");
var I = require("./5640.js");
function E(e) {
	const t = (0, o.Qc)();
	if (!t.bHasBattery || t.flLevel > 0.1) {
		return null;
	}
	let r = Math.floor(t.flLevel * 100);
	let i = r < 4;
	let a = (0, c.A)(p.LowBattery, i && p.ReallyLow);
	return n.createElement(
		"div",
		{
			className: a,
		},
		n.createElement(l.BatteryLow, {
			className: p.LowBatteryGauge,
		}),
		n.createElement(
			"div",
			{
				className: p.Text,
			},
			(0, m.we)("#QuickAccess_Tab_Notifications_BatteryLow"),
		),
		n.createElement(
			"div",
			{
				className: p.Remaining,
			},
			`${r}%`,
		),
	);
}
function M(e) {
	let t = (0, i.q3)(() => f.fN.BSteamDeckHasLowDiskSpace());
	const r = n.useCallback(() => {
		(0, b.f_)(0);
	}, []);
	if (!t) {
		return null;
	}
	const s = (0, m.we)("#ContentManagement_LowDiskSpaceNotification_Title");
	const o = (0, m.we)("#ContentManagement_LowDiskSpaceNotification_Body");
	const c = n.createElement(l.HardDrive, null);
	const u = n.createElement(l.Information, null);
	return n.createElement(
		a.P7,
		{
			location: 3,
			logo: c,
			onActivate: r,
		},
		n.createElement(v.OJ, {
			icon: u,
			title: s,
			location: 3,
		}),
		n.createElement(
			v.NF,
			{
				multiline: true,
			},
			o,
		),
	);
}
function T() {
	const e = (0, i.q3)(() => u.Fd.Get().GetControllers()).find(
		(e) => e.eControllerType == 4,
	);
	const t = (0, d.TR)(e?.strSerialNumber);
	const r = (0, w.k1)();
	if (!e || t) {
		return null;
	}
	const s = (0, m.we)("#Notification_SteamDeckRewards_Title");
	const o = (0, m.we)("#Notification_SteamDeckRewards_Body");
	const c = n.createElement(l.DeckLogo, null);
	const A = n.createElement(l.Information, null);
	return n.createElement(
		a.P7,
		{
			location: 3,
			logo: c,
			onActivate: () => r.Account(),
		},
		n.createElement(v.OJ, {
			icon: A,
			title: s,
			location: 3,
		}),
		n.createElement(
			v.NF,
			{
				multiline: true,
			},
			o,
		),
	);
}
const R = [
	{
		steamURL: "PendingGift",
		countItem: "pending_gifts",
		icon: l.Gift,
		strLocToken: "#Notification_NewGiftsPinned_Body",
		feature: 1,
	},
	{
		component: function (e) {
			const t = (0, y.$2)();
			const r = n.useCallback(() => _.LN.ShowInvitesDialog(t), [t]);
			const i = (0, S.bG)("PendingFriends");
			const a = (0, h.Qn)() ? r : i;
			return n.createElement(D, {
				...e,
				onActivate: a,
			});
		},
		countItem: "pending_invites",
		icon: l.AddFriend,
		strLocToken: "#Notification_FriendInvitePinned_Body",
		feature: 4,
	},
	{
		component: function (e) {
			const t = new _C.b(g.O$.currentUserSteamID);
			const r = (0, h.uI)();
			const i = (0, S.Qt)(
				`${h.TS.COMMUNITY_BASE_URL}profiles/${t.ConvertTo64BitString()}/notifications#comments`,
			);
			const a = (0, S.bG)("CommentNotifications");
			const s = r ? a : i;
			return n.createElement(D, {
				...e,
				onActivate: s,
			});
		},
		countItem: "comments",
		icon: l.Comment,
		strLocToken: "#Notification_NewCommentPinned_Body",
		feature: 2,
	},
	{
		component: function (e) {
			const t = (0, B.br)();
			return n.createElement(D, {
				...e,
				onActivate: () => t.Chat(),
			});
		},
		countItem: "offline_messages",
		icon: l.Chat,
		strLocToken: "#Notification_NewOfflineMessagesPinned_Body",
		feature: 4,
	},
	{
		steamURL: "CommunityInventory",
		countItem: "inventory_items",
		icon: l.Inventory,
		strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
		feature: 3,
	},
	{
		steamURL: "TradeOffers",
		countItem: "trade_offers",
		icon: l.Trade,
		strLocToken: "#Notification_NewTradeOffersPinned_Body",
		feature: 6,
	},
	{
		steamURL: "AsyncGames",
		countItem: "async_game_updates",
		icon: l.AsyncGameTurn,
		strLocToken: "#Notification_NewAsyncGamePinned_Body",
	},
	{
		steamURL: "ModeratorMessages",
		countItem: "moderator_messages",
		icon: l.ModeratorMessage,
		strLocToken: "#Notification_NewModeratorMessagePinned_Body",
		feature: 2,
	},
	{
		steamURL: "MyHelpRequests",
		countItem: "help_request_replies",
		icon: l.SteamSupport,
		strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
	},
	{
		steamURL: "FamilyManagement",
		countItem: "family_invites",
		icon: l.SteamLogo,
		strLocToken: "#Notification_FamilyInvitePinned_Body",
	},
];
function k(e) {
	const { steamURL: t, ...r } = e;
	const i = (0, S.bG)(t);
	return n.createElement(D, {
		...r,
		onActivate: i,
	});
}
function D(e) {
	const {
		visible: t,
		displayedCounts: r,
		onActivate: i,
		countItem: a,
		icon: o,
		strLocToken: l,
		feature: c,
	} = e;
	const m = (0, s.XE)()[a];
	const u = (0, h.XW)();
	if ((0, I.hb)(c)) {
		return null;
	} else if (m) {
		if (r && r[a] == m) {
			return null;
		} else {
			return n.createElement(v.OK, {
				count: m,
				icon: n.createElement(o, null),
				onActivate: i,
				strLocToken: l,
				bAlwaysShow: false,
				eUIMode: u,
				visible: t,
			});
		}
	} else {
		return null;
	}
}
export function r(e) {
	const t = [];
	for (let r of R) {
		if (r.hasOwnProperty("steamURL")) {
			const i = r;
			t.push(
				n.createElement(k, {
					key: i.strLocToken,
					...e,
					...i,
				}),
			);
		} else {
			const i = r;
			const { component: a, ...s } = i;
			t.push(
				n.createElement(a, {
					key: i.strLocToken,
					...s,
					...e,
				}),
			);
		}
	}
	return n.createElement(n.Fragment, null, t);
}
export function C() {
	let e = (0, s.ZT)().map((e) =>
		n.createElement(a.Tm, {
			key: e.notifications[0].notificationID,
			location: 3,
			group: e,
			onDismiss: undefined,
		}),
	);
	const t = (0, h.rP)().IN_VR;
	return n.createElement(
		"div",
		{
			className: (0, c.A)(p.QuickAccessNotifications, t && p.VR),
		},
		n.createElement(E, null),
		n.createElement(M, null),
		n.createElement(r, {
			visible: true,
		}),
		n.createElement(T, null),
		e,
		e.length == 0 && n.createElement(G, null),
	);
}
function G(e) {
	return n.createElement(
		"div",
		{
			className: p.EmptyNotifications,
		},
		(0, m.we)("#QuickAccess_Tab_Notifications_None"),
	);
}
