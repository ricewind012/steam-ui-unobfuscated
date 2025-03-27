import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { q3 } from "./90095.js";
import a from "./11374.js";
import s, { XE, ZT } from "./60917.js";
import o, { Qc } from "./87546.js";
import l from "./35488.js";
import c, { A as A_1 } from "./90765.js";
import u from "./22091.js";
import { TR } from "./74416.js";
import A from "./20189.js";
import g from "./48289.js";
import h, { Qn, uI, XW, rP } from "./72476.js";
import _C from "./8573.js";
import _ from "./87913.js";
import f from "./73317.js";
import b, { f_ as f_1 } from "./67863.js";
import { $2 } from "./96680.js";
import { bG, Qt } from "./18057.js";
import { k1 } from "./13688.js";
import { br } from "./18869.js";
import v from "./65067.js";
import { hb } from "./5640.js";
const p = A;
function E(e) {
	const t = Qc();
	if (!t.bHasBattery || t.flLevel > 0.1) {
		return null;
	}
	let r = Math.floor(t.flLevel * 100);
	let i = r < 4;
	let a = A_1(p.LowBattery, i && p.ReallyLow);
	return (
		<div className={a}>
			<l.BatteryLow className={p.LowBatteryGauge} />
			<div className={p.Text}>
				{Localize("#QuickAccess_Tab_Notifications_BatteryLow")}
			</div>
			<div className={p.Remaining}>{`${r}%`}</div>
		</div>
	);
}
function M(e) {
	let t = q3(() => f.fN.BSteamDeckHasLowDiskSpace());
	const r = n.useCallback(() => {
		f_1(0);
	}, []);
	if (!t) {
		return null;
	}
	const s = Localize("#ContentManagement_LowDiskSpaceNotification_Title");
	const o = Localize("#ContentManagement_LowDiskSpaceNotification_Body");
	const c = <l.HardDrive />;
	const u = <l.Information />;
	return (
		<a.P7 location={3} logo={c} onActivate={r}>
			<v.OJ icon={u} title={s} location={3} />
			<v.NF multiline>{o}</v.NF>
		</a.P7>
	);
}
function T() {
	const e = q3(() => u.Fd.Get().GetControllers()).find(
		(e) => e.eControllerType == 4,
	);
	const t = TR(e?.strSerialNumber);
	const r = k1();
	if (!e || t) {
		return null;
	}
	const s = Localize("#Notification_SteamDeckRewards_Title");
	const o = Localize("#Notification_SteamDeckRewards_Body");
	const c = <l.DeckLogo />;
	const A = <l.Information />;
	return (
		<a.P7 location={3} logo={c} onActivate={() => r.Account()}>
			<v.OJ icon={A} title={s} location={3} />
			<v.NF multiline>{o}</v.NF>
		</a.P7>
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
		component(e) {
			const t = $2();
			const r = n.useCallback(() => _.LN.ShowInvitesDialog(t), [t]);
			const i = bG("PendingFriends");
			const a = Qn() ? r : i;
			return <D {...e} onActivate={a} />;
		},
		countItem: "pending_invites",
		icon: l.AddFriend,
		strLocToken: "#Notification_FriendInvitePinned_Body",
		feature: 4,
	},
	{
		component(e) {
			const t = new _C.b(g.O$.currentUserSteamID);
			const r = uI();
			const i = Qt(
				`${
					h.TS.COMMUNITY_BASE_URL
				}profiles/${t.ConvertTo64BitString()}/notifications#comments`,
			);
			const a = bG("CommentNotifications");
			const s = r ? a : i;
			return <D {...e} onActivate={s} />;
		},
		countItem: "comments",
		icon: l.Comment,
		strLocToken: "#Notification_NewCommentPinned_Body",
		feature: 2,
	},
	{
		component(e) {
			const t = br();
			return <D {...e} onActivate={() => t.Chat()} />;
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
function K(e) {
	const { steamURL, ...r } = e;
	const i = bG(steamURL);
	return <D {...r} onActivate={i} />;
}
function D(e) {
	const {
		visible,
		displayedCounts,
		onActivate,
		countItem,
		Icon,
		strLocToken,
		feature,
	} = e;
	const m = XE()[a];
	const u = XW();
	if (hb(feature)) {
		return null;
	} else if (m) {
		if (displayedCounts && displayedCounts[a] == m) {
			return null;
		} else {
			return (
				<v.OK
					count={m}
					Icon={<Icon />}
					onActivate={onActivate}
					strLocToken={strLocToken}
					bAlwaysShow={false}
					eUIMode={u}
					visible={visible}
				/>
			);
		}
	} else {
		return null;
	}
}
export function R_1(e) {
	const t = [];
	for (let r of R) {
		if (r.hasOwnProperty("steamURL")) {
			const i = r;
			t.push(<K key={i.strLocToken} {...e} {...i} />);
		} else {
			const i = r;
			const { Component, ...s } = i;
			t.push(<Component key={i.strLocToken} {...s} {...e} />);
		}
	}
	return <>{t}</>;
}
export function C() {
	let e = ZT().map((e) => (
		<a.Tm
			key={e.notifications[0].notificationID}
			location={3}
			group={e}
			onDismiss={undefined}
		/>
	));
	const t = rP().IN_VR;
	return (
		<div className={A_1(p.QuickAccessNotifications, t && p.VR)}>
			<E />
			<M />
			<R_1 visible />
			<T />
			{e}
			{e.length == 0 && <G />}
		</div>
	);
}
function G(e) {
	return (
		<div className={p.EmptyNotifications}>
			{Localize("#QuickAccess_Tab_Notifications_None")}
		</div>
	);
}
