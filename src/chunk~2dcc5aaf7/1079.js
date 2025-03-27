import n, { Cg } from "./34629.js";
import i from "./5859.js";
import a from "./83957.js";
import o, { Gn, h5 } from "./89193.js";
import l from "./8573.js";
import c from "./23024.js";
import m from "./12956.js";
import u from "./31760.js";
import d, { Tc } from "./72476.js";
import p, { H } from "./16154.js";
import g, { PH } from "./72261.js";
const s = a;
class A extends u.p {
	constructor() {
		super();
	}
	BInitialized() {
		return true;
	}
	GetServerTime() {
		return d.TS.PAGE_TIMESTAMP + Math.floor(performance.now() / 1000);
	}
	async RequestEmoticonListInternal() {
		let e = [];
		try {
			let t = await s.get(`${d.TS.CHAT_BASE_URL}actions/EmoticonData`, {
				withCredentials: true,
			});
			if (t.data.emoticons) {
				for (let r of t.data.emoticons) {
					let r_name = r.name;
					if (r_name.startsWith("^")) {
						e.push({
							name: r_name,
						});
					} else {
						let n = {
							name: r_name.substr(1, r_name.length - 2),
						};
						let i = n.name.toLowerCase();
						if (i != n.name) {
							n.name_normalized = i;
						}
						if (r.time_last_used) {
							n.last_used = r.time_last_used;
						}
						if (r.use_count) {
							n.use_count = r.use_count;
						}
						if (r.time_received) {
							n.time_received = r.time_received;
						}
						if (r.appid) {
							n.appid = r.appid;
						}
						e.push(n);
					}
				}
			}
		} catch (e) {
			console.error("error loading emoticon list", e);
		}
		this.OnEmoticonListReceived(e);
	}
}
new A();
export function fn(e) {
	return Boolean(e && e.thumbnail_http_address);
}
export class j {
	constructor() {
		Gn(this);
	}
	static s_GlobalStore;
	m_inFlightRequests = new Map();
	m_lookupKeyToEmbedStreamDef = new Map();
	m_lookupStreams = new Map();
	m_playReadyStream = new Map();
	m_bMapHasStartedVideo = new Map();
	m_mapBroadcastChecked = new Map();
	m_pageChatStatus = "hide";
	m_streamChatStatus = "hide";
	m_bUserChatExpanded = undefined;
	m_bUserPreferenceHideBroadcastByDefault = undefined;
	m_bCollapsed = undefined;
	m_setStreamChangedListeners = new Set();
	m_bUseFakeData = false;
	m_onLoadContextCall = new Map();
	BHasStreams(e) {
		const t = this.GetStreams(e);
		return Boolean(t && t.length > 0);
	}
	AddCallbackOnNewContext(e, t, r) {
		this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), {
			name: t,
			fnCallback: r,
		});
	}
	ClearCallbackOnNewContext(e) {
		this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), null);
	}
	GetPlayReadyStream(e) {
		let t = this.GetStreamsLookupKeyFromDef(e);
		return this.m_playReadyStream.get(t);
	}
	BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
		return Boolean(this.m_bUserPreferenceHideBroadcastByDefault);
	}
	BIsEmbeddedStreamCollapsed() {
		return Boolean(this.m_bCollapsed);
	}
	SetEmbeddedStreamCollapsed(e) {
		if (this.m_bCollapsed != e) {
			this.m_bCollapsed = e;
		}
	}
	GetConcurrentStreams(e) {
		const t = this.GetStreams(e);
		if (t) {
			return t.filter((e) => fn(e)).length;
		} else {
			return 0;
		}
	}
	GetChatVisibility() {
		if (
			this.m_pageChatStatus === "remove" ||
			this.m_streamChatStatus === "remove"
		) {
			return "remove";
		} else if (this.m_bUserChatExpanded !== undefined) {
			if (this.m_bUserChatExpanded) {
				return "show";
			} else {
				return "hide";
			}
		} else if (this.m_pageChatStatus === "show") {
			return "show";
		} else if (
			this.m_pageChatStatus === "hide" ||
			this.m_streamChatStatus === "hide"
		) {
			return "hide";
		} else {
			return "show";
		}
	}
	ToggleChatVisibility() {
		const e = this.GetChatVisibility();
		if (e !== "remove") {
			this.m_bUserChatExpanded = e === "hide";
		}
	}
	DebugDumpContextAndAvailableContext(e) {
		console.log("Requested context", this.GetStreamsLookupKeyFromDef(e));
		console.log("Available context count: ", this.m_lookupStreams.size);
		this.m_lookupStreams.forEach((e, t) => {
			console.log(t, e.length);
		});
	}
	GetStreams(e) {
		const t = this.GetStreamsLookupKeyFromDef(e);
		return this.m_lookupStreams.get(t);
	}
	GetBroadcastURL(e) {
		let t = null;
		t = e.steamid ? new l.b(e.steamid) : l.b.InitFromAccountID(e.accountid);
		return `${
			d.TS.COMMUNITY_BASE_URL
		}broadcast/watch/${t.ConvertTo64BitString()}`;
	}
	BIsAppStreaming(e) {
		let t = false;
		this.m_lookupStreams.forEach((r) => {
			t ||=
				Boolean(r) &&
				r.some(
					(t) =>
						c.BroadcastWatchStore.GetOrCreateBroadcastInfo(t.steamid)
							.m_nAppID === e,
				);
		});
		return t;
	}
	GetStreamsForAppID(e) {
		const t = new Array();
		this.m_lookupStreams.forEach((r) => {
			r?.forEach((r) => {
				if (
					c.BroadcastWatchStore.GetOrCreateBroadcastInfo(r.steamid).m_nAppID ===
					e
				) {
					t.push(r);
				}
			});
		});
		return t;
	}
	AddStreamChangedListener(e) {
		this.m_setStreamChangedListeners.add(e);
	}
	RemoveStreamChangedListener(e) {
		this.m_setStreamChangedListeners.delete(e);
	}
	async LoadBIsEmbeddedBroadcastHidden(e) {
		if (this.m_bUserPreferenceHideBroadcastByDefault === undefined) {
			let t = Tc("broadcastuser", "application_config");
			if (!t) {
				try {
					let r = `${d.TS.STORE_BASE_URL}broadcast/ajaxgetuserbroadcastpreferences`;
					let n = await s.get(r, {
						params: {},
						cancelToken: e.token,
					});
					t = n.data;
				} catch (e) {
					console.log(`LoadBIsEmbeddedBroadcastHidden: ${H(e).strErrorMsg}`);
					t = {
						bHideStoreBroadcast: false,
					};
				}
			}
			h5(() => {
				this.m_bUserPreferenceHideBroadcastByDefault = t.bHideStoreBroadcast;
				this.m_bCollapsed = t.bHideStoreBroadcast;
			});
		}
		return this.m_bUserPreferenceHideBroadcastByDefault;
	}
	async SetupEmbeddableVOD(e, t) {
		this.m_bUseFakeData = false;
		this.m_streamChatStatus = "remove";
		await i.A.Get().QueueAppRequest(e.nAppIDVOD, {
			include_assets: true,
			include_trailers: true,
		});
		const r = i.A.Get().GetApp(e.nAppIDVOD);
		const n = new g.TT();
		n.accountid = 0;
		n.nAppIDVOD = e.nAppIDVOD;
		n.default_selection_priority = g.mY.k_ePrimary;
		n.current_selection_priority = g.mY.k_ePrimary;
		n.thumbnail_http_address = r?.GetAssets().GetHeaderURL() || "";
		n.title = r?.GetName() || "";
		this.GetStreams(e).unshift(n);
		if (t) {
			const t = this.GetStreamsLookupKeyFromDef(e);
			this.m_playReadyStream.set(t, n);
		}
	}
	async HintLoadEmbeddablePreviewStreams(e) {
		let t = null;
		let r = {
			eventid: e.event ? e.event.GID : undefined,
			previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
				? e.accountIDs.slice().sort().join(",")
				: undefined,
		};
		try {
			t = await s.get(
				`${d.TS.STORE_BASE_URL}broadcast/ajaxgetstreamersforpreview`,
				{
					params: r,
				},
			);
			return this.HandleHintLoadBroadcastResponse(e, t.data);
		} catch (e) {
			let t = H(e);
			console.error(
				`HintLoadEmbeddablePreviewStreams hit error loading: ${t.strErrorMsg}`,
				t,
			);
		}
		return [];
	}
	async HintLoadEmbeddableStreams(e) {
		let t = this.MapEmbeddableStreamToRequest(e);
		let r = this.GetStreamsLookupKeyFromParam(t);
		if (!this.m_inFlightRequests.has(r)) {
			this.m_lookupKeyToEmbedStreamDef.set(r, e);
			const n = this.InternalHintLoadEmbeddableStreams(e, t);
			this.m_inFlightRequests.set(r, n);
		}
		return this.m_inFlightRequests.get(r);
	}
	ValidateBroadcastPageStreamers(e) {
		const t = e;
		return (
			!!t &&
			typeof t.success == "number" &&
			!!t.filtered &&
			!!Array.isArray(t.filtered) &&
			!!t.broadcast_chat_visibility &&
			(t.filtered.length == 0 || typeof t.filtered[0].accountid == "string")
		);
	}
	async InternalHintLoadEmbeddableStreams(e, t) {
		let r = Tc("broadcast_available_for_page", "application_config");
		if (this.ValidateBroadcastPageStreamers(r)) {
			return this.HandleHintLoadBroadcastResponse(e, r);
		}
		try {
			let r = null;
			r = await s.get(
				`${d.TS.STORE_BASE_URL}broadcast/ajaxgetstreamersforpage`,
				{
					params: t,
				},
			);
			return this.HandleHintLoadBroadcastResponse(e, r.data);
		} catch (e) {
			let t = H(e);
			console.error(
				`HintLoadEmbeddableStreams hit error loading: ${t.strErrorMsg}`,
				t,
			);
		}
		return [];
	}
	async HandleHintLoadBroadcastResponse(e, t) {
		this.m_bUseFakeData = false;
		if (e.bIsPreview) {
			if (t?.filtered?.length > 0) {
				this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
					e.event,
					t.filtered,
				);
			} else {
				t = {
					filtered: [{}],
					success: 1,
					total_count: 1,
					err_msg: "",
					broadcast_chat_visibility: "hide",
				};
				this.m_bUseFakeData = true;
			}
		}
		if (t.broadcast_chat_visibility) {
			this.m_pageChatStatus = t.broadcast_chat_visibility;
		}
		const r = new Array();
		h5(() => {
			t.filtered.forEach((e) => {
				if (!e.steamid) {
					const t = l.b.InitFromAccountID(e.accountid);
					e.steamid = t.ConvertTo64BitString();
				}
				const t = c.BroadcastWatchStore.GetOrCreateBroadcastInfo(e.steamid);
				const n = e.appid ? Number(e.appid) : c.fO;
				t.m_nAppID = n;
				t.m_strAppId = `${n}`;
				if (e.current_selection_priority === undefined) {
					e.current_selection_priority = e.default_selection_priority;
				}
				if (n != c.fO) {
					r.push(n);
				}
			});
		});
		const n = this.GetStreamsLookupKeyFromDef(e);
		this.m_lookupStreams.set(n, t.filtered);
		if (this.m_onLoadContextCall.has(n)) {
			const e = this.m_onLoadContextCall.get(n);
			if (e) {
				if (d.TS.WEB_UNIVERSE == "dev") {
					console.log(
						`CBroadcastEmbeddableStore initialized after caller using callback to ${e.name}`,
					);
				}
				e.fnCallback();
			} else if (d.TS.WEB_UNIVERSE == "dev") {
				console.log(
					"CBroadcastEmbeddableStore initialized after caller, however callback is since cleared",
				);
			}
		}
		const i = this.GetStreams(e);
		await this.AutoStartVideoStream(e, i);
		return i;
	}
	ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
		const r = Array.from(e.jsondata.broadcast_whitelist ?? []);
		const n = Array.from(e.jsondata.broadcast_priority ?? []);
		const i = new Map();
		for (let e = 0; e < r.length && !(e >= n.length); e++) {
			i.set(r[e], PH(n[e]));
		}
		t.forEach((e) => {
			const t = Number(e.accountid);
			if (i.has(t)) {
				e.current_selection_priority = i.get(t);
			}
		});
	}
	async AutoStartVideoStream(e, t) {
		let r = this.GetStreamsLookupKeyFromDef(e);
		if (this.m_bMapHasStartedVideo.get(r)) {
			return null;
		}
		if (this.m_bUseFakeData) {
			if (!this.m_playReadyStream.get(r)) {
				const e = {
					accountid: 0,
					thumbnail_http_address: "",
					default_selection_priority: g.mY.k_eGeneral,
					current_selection_priority: g.mY.k_eGeneral,
				};
				this.m_playReadyStream.set(r, e);
			}
			return this.m_playReadyStream;
		}
		return this.PlayFromAvailableStreams(e, t);
	}
	async PlayFromAvailableStreams(e, t, r = false) {
		const n = new Set();
		while (true) {
			const i = t.filter((e) => !n.has(e) && (!r || !e.nAppIDVOD));
			const a = this.GetAutoStartStream(i);
			if (!a) {
				return null;
			}
			if (await this.AttemptToPlayStream(e, a)) {
				return a;
			}
			n.add(a);
		}
	}
	async AttemptToPlayStream(e, t) {
		let r = this.GetStreamsLookupKeyFromDef(e);
		this.m_bMapHasStartedVideo.set(r, true);
		if (!this.m_mapBroadcastChecked.has(t.accountid)) {
			this.m_mapBroadcastChecked.set(
				t.accountid,
				this.InternalAttemptToPlayStream(e, t),
			);
		}
		if (t.nAppIDVOD) {
			this.m_playReadyStream.set(r, t);
		} else {
			const n = await this.m_mapBroadcastChecked.get(t.accountid);
			if (n?.success != 1) {
				return null;
			}
			t.steamid = n.steamid;
			this.m_playReadyStream.set(r, t);
			if (this.GetConcurrentStreams(e) > 1) {
				this.m_streamChatStatus = "hide";
			} else {
				this.m_streamChatStatus = t.broadcast_chat_visibility;
			}
			this.m_setStreamChangedListeners.forEach((e) => e(t));
			U7(
				c.BroadcastWatchStore.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
				1,
				t.snr,
			);
		}
		return t;
	}
	async InternalAttemptToPlayStream(e, t) {
		this.GetStreamsLookupKeyFromDef(e);
		let r = null;
		try {
			const e = `${d.TS.STORE_BASE_URL}broadcast/ajaxcheckbroadcast`;
			let n = {
				broadcastaccountid: t.accountid,
				viewer_token: c.BroadcastWatchStore.GetViewerToken(),
				origin: self.origin,
			};
			r = await s.get(e, {
				params: n,
			});
			return r.data;
		} catch (e) {
			let t = H(e);
			console.error(`Broadcast.AttemptToPlayStream: ${t.strErrorMsg}`, t);
		}
		return null;
	}
	GetAutoStartStream(e) {
		if (!e) {
			return null;
		}
		const t = e.filter((e) => fn(e));
		const r = t.reduce((e, t) => Math.max(e, _(t)), 0);
		const n = t.filter((e) => _(e) === r);
		if (n.length === 0) {
			return null;
		}
		return n[Math.floor(Math.random() * n.length)];
	}
	MapEmbeddableStreamToRequest(e) {
		return {
			appid: e.appid,
			promotionName: e.bIsPreview ? "preview" : e.promotionName,
			clanid: e.clanid
				? e.clanid
				: e.event
					? e.event.clanSteamID.GetAccountID()
					: undefined,
			listid: e.listid,
			subid: e.subid,
			bundleid: e.bundleid,
			eventid: e.event ? e.event.GID : undefined,
			previewAccounts: Boolean(e.bIsPreview && e.accountIDs)
				? e.accountIDs.slice().sort().join(",")
				: undefined,
			test: false,
			cc: d.TS.COUNTRY,
			l: d.TS.LANGUAGE,
			hubtype: e.event?.GetContentHubType(),
			hubcategory: e.event?.GetContentHubCategory(),
			hubtagid: e.event?.GetContentHubTag(),
			tabuniqueid: e.tabuniqueid,
			tabfilter: e.tabfilter,
			rt_now_override_test: m.HD.BHasTimeOverride()
				? m.HD.GetTimeNowWithOverride()
				: undefined,
		};
	}
	GetStreamsLookupKeyFromDef(e) {
		return this.GetStreamsLookupKeyFromParam(
			this.MapEmbeddableStreamToRequest(e),
		);
	}
	GetStreamsLookupKeyFromParam(e) {
		return JSON.stringify(e);
	}
	static Get() {
		if (!j.s_GlobalStore) {
			j.s_GlobalStore = new j();
			if (d.TS.WEB_UNIVERSE == "dev") {
				window.g_BroadcastEmbeddableStore = j.s_GlobalStore;
			}
			j.s_GlobalStore.Init();
		}
		return j.s_GlobalStore;
	}
	Init() {}
}
function _(e) {
	return e.current_selection_priority || g.mY.k_eGeneral;
}
export function MU(e) {
	e.sort((e, t) =>
		_(e) != _(t)
			? _(t) - _(e)
			: e.viewer_count != t.viewer_count
				? t.viewer_count - e.viewer_count
				: t.accountid - e.accountid,
	);
}
export async function U7(e, t, r) {
	if (e > 0 && e != 7 && r) {
		let n = new URLSearchParams();
		n.append("page_action", `${t}`);
		n.append("snr", r);
		s.post(`${d.TS.STORE_BASE_URL}ajaxreportproductaction/${e}/`, n);
	}
}
Cg([o.sH], j.prototype, "m_lookupStreams", undefined);
Cg([o.sH], j.prototype, "m_playReadyStream", undefined);
Cg([o.sH], j.prototype, "m_pageChatStatus", undefined);
Cg([o.sH], j.prototype, "m_streamChatStatus", undefined);
Cg([o.sH], j.prototype, "m_bUserChatExpanded", undefined);
Cg([o.sH], j.prototype, "m_bUserPreferenceHideBroadcastByDefault", undefined);
Cg([o.sH], j.prototype, "m_bCollapsed", undefined);
Cg([o.XI], j.prototype, "HintLoadEmbeddablePreviewStreams", null);
Cg([o.XI], j.prototype, "AttemptToPlayStream", null);
export const MX = new A();
