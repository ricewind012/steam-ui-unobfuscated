import { GetUnixTime } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./88475.js";
import a from "./12176.js";
import s from "./8974.js";
import o, { I } from "./61416.js";
import l, { Gn, h5 } from "./89193.js";
import c from "./8573.js";
import m from "./5859.js";
import u from "./3475.js";
import A from "./83599.js";
import p from "./43691.js";
import { Y2 } from "./72476.js";
import { w1 } from "./63937.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { EC } from "./24274.js";
const f = {
	11: {
		displayNameLoc: "#SteamNotification_HelpRequest_Author",
		titleLoc: "#SteamNotification_HelpRequest_Title",
		bodyLoc: (e) => ({
			locString: "#SteamNotification_HelpRequest_Body",
			params: [e.ticket],
		}),
		link: (e) => `${p.TS.HELP_BASE_URL}wizard/HelpRequest/${e.ticket}`,
	},
	6: {
		displayNameLoc: "#SteamNotifications_MajorSale",
		titleLoc: (e) => ({
			locString: e.title,
		}),
		bodyLoc: (e) =>
			Y2() && e.link.includes("https://store.steampowered.com")
				? "#SteamNotifications_MajorSale_SteamChina_Title"
				: e.body,
		image: (e) => e.image,
		link: (e) =>
			Y2() && e.link.includes("https://store.steampowered.com")
				? e.link.replace("https://store.steampowered.com", p.TS.STORE_BASE_URL)
				: e.link,
	},
	10: {
		displayNameLoc: (e) => e.display_name,
		titleLoc: (e) => e.title,
		bodyLoc: (e) => e.body,
		image: (e) => e.image,
		link: (e) => e.link,
	},
	14: {
		titleLoc: "#SteamNotification_ModeratorMessage_Title",
		link: (e) => `${p.TS.COMMUNITY_BASE_URL}my/moderatormessages/${e.msgid}`,
	},
};
export function K9(e) {
	if (e !== undefined) {
		return f[e];
	}
}
export function IC(e) {
	return !!K9(e);
}
const S = {
	16: {
		steamidAttribute: "inviter",
		titleLoc: "#SteamNotifications_FamilyInviteTitle",
		bodyLoc: "#SteamNotifications_FamilyInviteBody",
		url: (e) =>
			`${p.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
	},
	15: {
		steamidAttribute: "steamid",
		titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
		bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
		url: () => `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
	},
	17: {
		steamidAttribute: "requestor_steamid",
		titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
		bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
		url: (e) => w1(e.familyid, e.request_id),
	},
	19: {
		steamidAttribute: "responder_steamid",
		titleLoc: (e) =>
			e.action == 1
				? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
				: "",
		bodyLoc: (e) =>
			e.action == 1
				? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
				: "",
		url: () => `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
	},
	18: {
		steamidAttribute: "steamid",
		titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
		bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
		url: () => `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
	},
	20: {
		steamidAttribute: "steamid_approver",
		titleLoc: (e) =>
			e.approved
				? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
				: "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
		bodyLoc: (e) =>
			e.approved
				? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
				: "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
		url: () => `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
	},
	21: {
		steamidAttribute: "steamid_approver",
		titleLoc: (e) =>
			e.approved
				? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
				: "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
		bodyLoc: (e) =>
			e.approved
				? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
				: "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
		url: () => `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
	},
};
export function aq(e) {
	if (e !== undefined) {
		return S[e];
	}
}
export function sR(e) {
	return !!aq(e);
}
const v = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23];
export function V4(e) {
	return v.findIndex((t) => t == e) != null;
}
function E(e) {
	return (
		!e.hidden &&
		(IC((t = e.notification_type)) || sR(t) || sR(t) || V4(t)) &&
		u5(e.body_data)
	);
	var t;
}
export let F1;
((e) => {
	e[(e.New = 0)] = "New";
	e[(e.Update = 1)] = "Update";
	e[(e.Remove = 2)] = "Remove";
})((F1 ||= {}));
export const y0 = "Test_";
export const $Q = 172800;
export const e$ = 600;
const D = new A.wd("SteamNotificationStore");
const F = D.Error;
const G = D.Warning;
export class cE {
	constructor() {
		Gn(this);
	}
	m_rgNotificationRollups = [];
	m_summary = {
		comments: 0,
		inventory_items: 0,
		invites: 0,
		gifts: 0,
		offline_messages: 0,
		trade_offers: 0,
		async_game_updates: 0,
		moderator_messages: 0,
		help_request_replies: 0,
		general: 0,
		wishlist: 0,
		pending_gifts: 0,
		pending_invites: 0,
		major_sale: 0,
		parental_feature_requests: 0,
		family_invites: 0,
		family_purchase_requests: 0,
		family_purchase_request_responses: 0,
		pending_family_invites: 0,
		parental_playtime_requests: 0,
		parental_feature_access_responses: 0,
		parental_playtime_responses: 0,
		requested_game_added: 0,
	};
	m_bLoaded = false;
	m_nUnviewed = 0;
	m_rgNotifyServerRead = [];
	m_rgNotifyServerHidden = [];
	m_keyNotifyServerRead = "";
	m_keyNotifyServerHidden = "";
	m_steamid;
	m_transport;
	m_rgUnreadNotificationIDs = [];
	m_rgNewRollupIDs = new Map();
	m_rgTestNotifications = [];
	m_currentNotificationsData = null;
	m_strRemoteClientID = "";
	m_eTargetClientType = 0;
	m_fnOnNotificationCallback = null;
	BHasNotificationsData() {
		return this.m_currentNotificationsData != null;
	}
	setTransport(e) {
		this.m_transport = e;
	}
	RegisterOnNotificationCallback(e) {
		this.m_fnOnNotificationCallback = e;
	}
	SetClientFilters(e, t = 0) {
		this.m_strRemoteClientID = e;
		this.m_eTargetClientType = t;
	}
	NotifyServerNotificationsRead(e) {
		this.m_rgNotifyServerRead.push(...e);
		this.UpdateServer();
	}
	NotifyServerNotificationsHidden(e) {
		this.m_rgNotifyServerHidden.push(...e);
		this.UpdateServer();
	}
	BSendToCallbackAsNew(e) {
		return (
			!e.read &&
			!((e) => e.viewed && e.viewed + $Q < GetUnixTime())(e) &&
			!this.m_rgUnreadNotificationIDs.includes(e.notification_id)
		);
	}
	Dev_AddTestNotification(e) {}
	Dev_UpdateTestNotificationReadState(e, t) {
		const r = this.m_rgTestNotifications.findIndex(
			(t) => t.notification_id == e,
		);
		return (
			r !== -1 &&
			this.m_rgTestNotifications[r].read != t &&
			((this.m_rgTestNotifications[r].read = t), true)
		);
	}
	UpdateServer() {
		if (this.m_rgNotifyServerRead.length > 0) {
			const e = a.w.Init(i.V4);
			e.Body().set_notification_ids(this.m_rgNotifyServerRead);
			if (i.Fn.MarkNotificationsRead(this.m_transport, e)) {
				this.m_rgNotifyServerRead = [];
			}
		}
		if (this.m_rgNotifyServerHidden.length > 0) {
			const e = a.w.Init(i.b$);
			e.Body().set_notification_ids(this.m_rgNotifyServerHidden);
			if (i.Fn.HideNotification(this.m_transport, e)) {
				this.m_rgNotifyServerHidden = [];
			}
		}
	}
	MarkItemRead(e, t = false) {
		let r = this.m_rgNotificationRollups.findIndex(
			(t) => t.item.notification_id == e,
		);
		if (r === -1) {
			if (t) {
				this.NotifyServerNotificationsRead([e]);
			} else {
				F(
					"Attempted to mark notification read that is not in the notification store",
				);
			}
			return;
		}
		let n = this.m_rgNotificationRollups[r];
		if (n.item.read) {
			F("Attempted to mark notification read that is already read");
		} else {
			n.item.read = true;
			if (n.rgunread?.length > 0) {
				this.ReduceNewTotals(n.type, n.rgunread.length);
				let e = [];
				n.rgunread.forEach((t) => {
					e.push(t);
				});
				n.rgread.push(...n.rgunread);
				n.rgunread = [];
				this.NotifyServerNotificationsRead(e);
			}
		}
	}
	MarkItemHidden(e) {
		let t = this.m_rgNotificationRollups.findIndex(
			(t) => t.item.notification_id == e,
		);
		if (t === -1) {
			F(
				"Attempted to mark notification hidden that is not in the notification store",
			);
			return;
		}
		let r = this.m_rgNotificationRollups[t];
		r.item.hidden = true;
		if (r.rgunread?.length > 0) {
			this.ReduceNewTotals(r.type, r.rgunread?.length);
		}
		this.NotifyServerNotificationsHidden([...r.rgunread, ...r.rgread]);
	}
	ReduceNewTotals(e, t) {
		kE(this.m_summary, e, -t);
	}
	MarkAllItemsViewed() {
		const e = a.w.Init(i.nH);
		e.Body().set_remote_client_id(this.m_strRemoteClientID);
		e.Body().set_target_client_type(this.m_eTargetClientType);
		i.Fn.MarkNotificationsViewed(this.m_transport, e);
		this.m_nUnviewed = 0;
	}
	MarkAllItemsRead(e) {
		let t = [];
		let r = [];
		const n = e ?? this.m_rgNotificationRollups;
		n.forEach((e, n) => {
			if (e.rgunread.length > 0) {
				e.rgunread.forEach((e) => {
					t.push(e);
				});
				r.push(n);
			}
		});
		if (t.length > 0) {
			this.m_summary = Object.assign(
				{
					comments: 0,
					inventory_items: 0,
					invites: 0,
					gifts: 0,
					offline_messages: 0,
					trade_offers: 0,
					async_game_updates: 0,
					moderator_messages: 0,
					help_request_replies: 0,
					general: 0,
					wishlist: 0,
					pending_gifts: 0,
					pending_invites: 0,
					major_sale: 0,
					parental_feature_requests: 0,
					family_invites: 0,
					family_purchase_requests: 0,
					family_purchase_request_responses: 0,
					pending_family_invites: 0,
					parental_playtime_requests: 0,
					parental_feature_access_responses: 0,
					parental_playtime_responses: 0,
					requested_game_added: 0,
				},
				{
					pending_gifts: this.m_summary.pending_gifts,
					pending_invites: this.m_summary.pending_invites,
					pending_family_invites: this.m_summary.pending_family_invites,
				},
			);
			r.forEach((e) => {
				let t = n[e];
				t.item.read = true;
				t.rgunread = [];
			});
			this.NotifyServerNotificationsRead(t);
		}
		return t.length + 0;
	}
	ApplyNotificationsUpdate(e) {
		Debug("ApplyNotificationsUpdate", e);
		if (
			!e ||
			(!e.notifications?.length &&
				e.pending_friend_count === undefined &&
				e.pending_gift_count === undefined)
		) {
			Debug("Error: ApplyNotificationsUpdate was called with no data");
			return;
		}
		if (!this.m_currentNotificationsData) {
			Debug(
				"Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
			);
			return;
		}
		const t = this.m_currentNotificationsData;
		e.notifications?.forEach((e) => {
			const r = t.notifications.findIndex(
				(t) => t.notification_id == e.notification_id,
			);
			if (r != -1) {
				Object.assign(t.notifications[r], e);
			} else {
				t.notifications.push(e);
			}
		});
		if (e.pending_friend_count !== undefined) {
			this.m_currentNotificationsData.pending_friend_count =
				e.pending_friend_count;
		}
		if (e.pending_gift_count !== undefined) {
			this.m_currentNotificationsData.pending_gift_count = e.pending_gift_count;
		}
		if (e.pending_family_invite_count !== undefined) {
			this.m_currentNotificationsData.pending_family_invite_count =
				e.pending_family_invite_count;
		}
		this.ProcessNotifications();
	}
	ProcessNewNotificationPayload(e) {
		this.m_currentNotificationsData = JSON.parse(JSON.stringify(e));
		this.ProcessNotifications();
	}
	ProcessNotifications() {
		let e = [];
		let t = {
			comments: 0,
			inventory_items: 0,
			invites: 0,
			gifts: 0,
			offline_messages: 0,
			trade_offers: 0,
			async_game_updates: 0,
			moderator_messages: 0,
			help_request_replies: 0,
			general: 0,
			wishlist: 0,
			pending_gifts: 0,
			pending_invites: 0,
			major_sale: 0,
			parental_feature_requests: 0,
			family_invites: 0,
			family_purchase_requests: 0,
			family_purchase_request_responses: 0,
			pending_family_invites: 0,
			parental_playtime_requests: 0,
			parental_feature_access_responses: 0,
			parental_playtime_responses: 0,
			requested_game_added: 0,
		};
		let r = 0;
		this.m_currentNotificationsData?.notifications?.forEach((n) => {
			if (!this.BExcludeClientTargetedNotification(n)) {
				if (this.m_rgNotifyServerHidden.length > 0) {
					if (
						this.m_rgNotifyServerHidden.findIndex(
							(e) => e == n.notification_id,
						) !== -1
					) {
						n.hidden = true;
					}
				}
				if (E(n)) {
					if (this.m_rgNotifyServerRead.length > 0) {
						if (
							this.m_rgNotifyServerRead.findIndex(
								(e) => e == n.notification_id,
							) !== -1
						) {
							n.read = true;
						}
					}
					if (!n.read) {
						kE(t, n.notification_type, 1);
					}
					if (!n.viewed) {
						r++;
					}
					this.AddNotificationToRollups(e, n);
				}
			}
		});
		e.sort((e, t) => e.timestamp - t.timestamp);
		if (this.m_fnOnNotificationCallback) {
			for (const t of e) {
				if (t.bSendToCallbackAsNew) {
					this.m_rgNewRollupIDs.set(t.key, JSON.parse(JSON.stringify(t)));
					this.m_fnOnNotificationCallback(t, F1.New);
				} else if (this.m_rgNewRollupIDs.has(t.key)) {
					let e = this.m_rgNewRollupIDs.get(t.key);
					if (e.item.read != t.item.read || e.item.viewed != t.item.viewed) {
						this.m_rgNewRollupIDs.set(t.key, JSON.parse(JSON.stringify(t)));
						this.m_fnOnNotificationCallback(t, F1.Update);
					}
				}
			}
			for (const [t, r] of this.m_rgNewRollupIDs) {
				if (e.findIndex((e) => e.key == t) == -1) {
					this.m_fnOnNotificationCallback(r, F1.Remove);
					this.m_rgNewRollupIDs.delete(t);
				}
			}
		}
		e.reverse();
		t.pending_gifts = this.m_currentNotificationsData?.pending_gift_count ?? 0;
		t.pending_invites =
			this.m_currentNotificationsData?.pending_friend_count ?? 0;
		t.pending_family_invites =
			this.m_currentNotificationsData?.pending_family_invite_count ?? 0;
		this.m_rgNotificationRollups = e.slice();
		this.m_summary = t;
		this.m_bLoaded = true;
		this.m_nUnviewed = r;
	}
	BExcludeClientTargetedNotification(e) {
		const t = u5(e.body_data);
		return (
			!!t &&
			((!!t.remote_client_id &&
				this.m_strRemoteClientID != t.remote_client_id) ||
				(!!t.target_client_types &&
					!(this.m_eTargetClientType & t.target_client_types)))
		);
	}
	BReplaceRollupItem(e, t) {
		if (e.read != t.read) {
			return t.read;
		} else if ((e.read && t.read) || t.viewed == e.viewed) {
			return t.timestamp < e.timestamp;
		} else {
			return (
				(!e.viewed && !!t.viewed) ||
				(!!e.viewed && !!t.viewed && t.viewed < e.viewed)
			);
		}
	}
	AddNotificationToRollups(e, t) {
		const r = this.BSendToCallbackAsNew(t);
		if (r) {
			this.m_rgUnreadNotificationIDs.push(t.notification_id);
		}
		let n = t.notification_type;
		switch (n) {
			case 3:
				{
					const i = Y(t);
					if (!i) {
						return;
					}
					const a = `comment_${i.owner_steam_id?.GetAccountID()}_${
						i.forum_id
					}_${i.topic_id}`;
					let s = e.findIndex((e) => e.key == a);
					if (s == -1) {
						e.push({
							type: n,
							key: a,
							item: t,
							rollup_count: 1,
							timestamp: t.timestamp,
							rgunread: t.read ? [] : [t.notification_id],
							rgread: t.read ? [t.notification_id] : [],
							bSendToCallbackAsNew: r,
							url: W(i),
						});
					} else {
						let n = e[s];
						if (this.BReplaceRollupItem(t, n.item)) {
							n.url = W(i);
							n.item = t;
							n.timestamp = t.timestamp;
							n.bSendToCallbackAsNew = r;
						}
						n.rollup_count = n.rollup_count + 1;
						if (t.read) {
							n.rgread.push(t.notification_id);
						} else {
							n.rgunread.push(t.notification_id);
						}
					}
					if (i.json_data?.app_id) {
						m.A.Get().QueueAppRequest(i.json_data.app_id, {
							include_assets: true,
						});
					}
				}
				break;
			case 4: {
				const i = Y(t);
				if (i) {
					const a = `item_${i.appid}`;
					this.AddNotificationToRollupByAppID(e, t, a, n, r, i.appid);
				}
				break;
			}
			case 12: {
				const a = Y(t)?.appid.toString();
				if (a) {
					const i = `asyncgame_${a}`;
					this.AddNotificationToRollupByAppID(e, t, i, n, r, a);
				}
				break;
			}
			case 8: {
				const s = Y(t)?.appid;
				if (s) {
					m.A.Get().QueueAppRequest(s, {
						include_assets: true,
					});
				}
			}
			default: {
				e.push({
					type: n,
					key: t.notification_id,
					item: t,
					timestamp: t.timestamp,
					rgunread: t.read ? [] : [t.notification_id],
					rgread: t.read ? [t.notification_id] : [],
					bSendToCallbackAsNew: r,
				});
			}
		}
	}
	AddNotificationToRollupByAppID(e, t, r, n, i, a) {
		let s = e.findIndex((e) => e.key == r);
		if (s == -1) {
			e.push({
				type: n,
				key: r,
				item: t,
				rollup_count: 1,
				timestamp: t.timestamp,
				rgunread: t.read ? [] : [t.notification_id],
				rgread: t.read ? [t.notification_id] : [],
				bSendToCallbackAsNew: i,
			});
		} else {
			let r = e[s];
			if (this.BReplaceRollupItem(t, r.item)) {
				r.item = t;
				r.timestamp = t.timestamp;
				r.bSendToCallbackAsNew = i;
			}
			r.rollup_count = r.rollup_count + 1;
			if (t.read) {
				r.rgread.push(t.notification_id);
			} else {
				r.rgunread.push(t.notification_id);
			}
		}
		m.A.Get().QueueAppRequest(parseInt(a), {
			include_assets: true,
		});
	}
}
export function V8() {
	return {
		comments: 0,
		inventory_items: 0,
		invites: 0,
		gifts: 0,
		offline_messages: 0,
		trade_offers: 0,
		async_game_updates: 0,
		moderator_messages: 0,
		help_request_replies: 0,
		general: 0,
		wishlist: 0,
		pending_gifts: 0,
		pending_invites: 0,
		major_sale: 0,
		parental_feature_requests: 0,
		family_invites: 0,
		family_purchase_requests: 0,
		family_purchase_request_responses: 0,
		pending_family_invites: 0,
		parental_playtime_requests: 0,
		parental_feature_access_responses: 0,
		parental_playtime_responses: 0,
		requested_game_added: 0,
	};
}
export async function tM(e, t, r, n, s, o = true, l = false) {
	if (!t) {
		throw new Error("Invalid steamid for GetSteamNotifications");
	}
	const c = a.w.Init(i.GG);
	c.Body().set_language(r);
	c.Body().set_include_read(o);
	c.Body().set_include_pinned_counts(true);
	c.Body().set_include_confirmation_count(l);
	const m = await i.Fn.GetSteamNotifications(e, c);
	if (m.GetEResult() !== 1) {
		G(
			`Received error from GetSteamNotifications. Result ${m.GetEResult()}. Transport ${m
				.Hdr()
				.transport_error()}`,
		);
		throw new Error(`Error from GetSteamNotifications: ${m.GetEResult()}`);
	}
	const d = m.Body().toObject();
	if (n) {
		d.notifications = d.notifications?.filter(
			(e) =>
				!((e, t, r) => {
					if (!t) {
						return false;
					}
					const n = ee(e);
					return EC(t, n?.eFeature ?? u.JC, r);
				})(e.notification_type, n, s),
		);
	}
	return d;
}
Cg([l.sH], cE.prototype, "m_rgNotificationRollups", undefined);
Cg([l.sH], cE.prototype, "m_summary", undefined);
Cg([l.sH], cE.prototype, "m_bLoaded", undefined);
Cg([l.sH], cE.prototype, "m_nUnviewed", undefined);
Cg([l.XI], cE.prototype, "ProcessNotifications", null);
const z = "ItemMetadata";
function x(e) {
	return [`${z}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
export function IL(e, t, r) {
	let n = X(4, e.body_data);
	n.steamid = t;
	let i = I({
		queryKey: x(n),
		queryFn: async () =>
			(async (e, t) => {
				if (
					!e ||
					!e.steamid ||
					!e.steamid ||
					!e.contextid ||
					!e.steamid ||
					!e.contextid ||
					!e.appid ||
					!e.steamid ||
					!e.contextid ||
					!e.appid ||
					!e.assetid
				) {
					F("Item notification missing required attributes");
					return null;
				}
				const r = a.w.Init(s.z9);
				r.Body().set_steamid(e.steamid);
				r.Body().set_contextid(e.contextid);
				r.Body().set_appid(parseInt(e.appid));
				r.Body().set_get_descriptions(true);
				r.Body().set_language(p.TS.LANGUAGE);
				let n = new s.ur();
				n.add_assetids(e.assetid);
				r.Body().set_filters(n);
				const i = await s.tB.GetInventoryItemsWithDescriptions(t, r);
				if (i.GetEResult() !== 1) {
					F("Request for steam item metadata did not succeed", i.GetEResult());
					return null;
				}
				let o = "";
				const l = await m.A.Get().QueueAppRequest(parseInt(e.appid), {});
				if (l == 1) {
					const t = m.A.Get().GetApp(parseInt(e.appid));
					o = t?.GetName();
				} else {
					F("Failed getting app info", l);
				}
				return {
					app_name: o,
					item_data: i.Body().toObject().descriptions[0],
				};
			})(n, r),
		staleTime: Infinity,
	});
	if (i.isSuccess) {
		return i.data;
	} else {
		return null;
	}
}
function W(e) {
	let t = `comment/${
		e.comment_type
	}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${
		e.topic_id
	}`;
	if (e.last_post > 0) {
		t += `&tscn=${e.last_post - 1}`;
	}
	return t;
}
export function hr(e) {
	return e.comment_type == 10;
}
export function n8(e) {
	return e?.bhas_friend;
}
export function T4(e) {
	return e.comment_type == 10;
}
export function iO(e) {
	return hr(e) || n8(e);
}
export function OT(e) {
	return T4(e);
}
export function u5(e) {
	if (!e) {
		return null;
	}
	try {
		return JSON.parse(e);
	} catch (t) {
		Debug("Steam notification in invalid format:", e);
	}
	return null;
}
function Y(e) {
	return X(e.notification_type, e.body_data);
}
export function bP(e) {
	return X(e.type, e.item?.body_data);
}
function X(e, t) {
	let r = u5(t);
	if (!r) {
		return null;
	}
	switch (e) {
		case 2: {
			return r.gifter_account;
		}
		case 22: {
			return {
				responder_steamid: r.responder_steamid,
				package_id: r.package_id,
				bundle_id: r.bundle_id,
			};
		}
		case 9: {
			return parseInt(r.sender);
		}
		case 8: {
			return {
				appid: r.appid,
				count: r.count ?? 1,
				appids: r.appids ?? [],
			};
		}
		case 12: {
			if (!r.appid || !r.state || (r.state != 1 && r.state != 2)) {
				Debug("Async game notification invalid data", t);
				return null;
			} else {
				return {
					appid: parseInt(r.appid),
					state: parseInt(r.state),
				};
			}
		}
		case 3: {
			let n = {
				owner_steam_id: r.owner_steam_id ? new c.b(r.owner_steam_id) : null,
				bclan_account: J(r.bclan_account),
				title: r.title,
				comment: r.text,
				time: r.last_post,
				comment_type: Number(r.type),
				topic_id: r.topic_id,
				forum_id: r.forum_id,
				account_steam_id: r.account_id
					? c.b.InitFromAccountID(r.account_id)
					: null,
				bhas_friend: J(r.bhas_friend),
				bis_forum: J(r.bis_forum),
				last_post: r.last_post,
				bsubscribed: J(r.subscribed),
				bis_owner: J(r.bis_owner),
			};
			if (r.json_data) {
				n.json_data = {
					app_id: parseInt(r.json_data.app_id),
					file_type: parseInt(r.json_data.file_type),
					title: r.json_data.title,
				};
			}
			return n;
		}
		case 5: {
			return {
				requestorID: parseInt(r.requestor_id),
				state: r.state ? parseInt(r.state) : 0,
			};
		}
		case 4: {
			return {
				appid: parseInt(r.app_id),
				assetid: r.asset_id ?? "",
				contextid: r.context_id ?? "",
			};
		}
		case 23: {
			return {
				url: r.url ?? "",
				strGameName: r.content_app_name ?? "",
				mediaType: r.media_type ?? "clip",
				secDuration: parseFloat(r.duration_seconds ?? 0),
				nSize: parseInt(r.file_size ?? 0),
				strMachineName: r.machine_name,
				rtExpiration: r.expiration,
				thumbnailURL: r.thumbnail_url,
			};
		}
		default: {
			Debug(
				`GetCustomNotificationDataByType called with unexpected type:${e}`,
				t,
			);
			return null;
		}
	}
}
function J(e) {
	if (e === undefined) {
		return false;
	}
	if (typeof e == "number") {
		return e > 0;
	}
	if (typeof e == "string") {
		switch (e.toLowerCase()?.trim()) {
			case "true":
			case "1": {
				return true;
			}
			default: {
				return false;
			}
		}
	}
	Debug("notification contained unexpected boolean value");
	return false;
}
const $ = {
	0: {
		rollup_field: undefined,
		eFeature: undefined,
	},
	1: {
		rollup_field: undefined,
		eFeature: undefined,
	},
	2: {
		rollup_field: "gifts",
		eFeature: u.uX,
	},
	3: {
		rollup_field: "comments",
		eFeature: 2,
	},
	4: {
		rollup_field: "inventory_items",
		eFeature: 3,
	},
	5: {
		rollup_field: "invites",
		eFeature: 4,
	},
	6: {
		rollup_field: "major_sale",
		eFeature: 1,
	},
	7: {
		rollup_field: undefined,
		eFeature: undefined,
	},
	8: {
		rollup_field: "wishlist",
		eFeature: 1,
	},
	9: {
		rollup_field: "trade_offers",
		eFeature: 6,
	},
	10: {
		rollup_field: "general",
		eFeature: u.uX,
	},
	11: {
		rollup_field: "help_request_replies",
		eFeature: u.uX,
	},
	12: {
		rollup_field: "async_game_updates",
		eFeature: u.uX,
	},
	14: {
		rollup_field: "moderator_messages",
		eFeature: 2,
	},
	15: {
		rollup_field: "parental_feature_requests",
		eFeature: u.uX,
	},
	16: {
		rollup_field: "family_invites",
		eFeature: u.uX,
	},
	17: {
		rollup_field: "family_purchase_requests",
		eFeature: u.uX,
	},
	18: {
		rollup_field: "parental_playtime_requests",
		eFeature: u.uX,
	},
	19: {
		rollup_field: "family_purchase_request_responses",
		eFeature: u.uX,
	},
	20: {
		rollup_field: "parental_feature_access_responses",
		eFeature: u.uX,
	},
	21: {
		rollup_field: "parental_playtime_responses",
		eFeature: u.uX,
	},
	22: {
		rollup_field: "requested_game_added",
		eFeature: u.uX,
	},
	23: {
		rollup_field: undefined,
		eFeature: u.uX,
	},
	24: {
		rollup_field: undefined,
		eFeature: u.uX,
	},
};
function ee(e) {
	const t = $[e];
	AssertMsg(!!t, `Missing notification type data for ${e}`);
	return t;
}
export function kE(e, t, r) {
	h5(() => {
		const n = ee(t);
		if (n?.rollup_field) {
			e[n.rollup_field] = Math.max(0, e[n.rollup_field] + r);
		}
	});
}
export function Rl(e) {
	return !e.viewed || e.viewed + e$ > GetUnixTime();
}
