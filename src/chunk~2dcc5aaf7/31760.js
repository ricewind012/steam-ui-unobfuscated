var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./72476.js");
var a = require(/*webcrack:missing*/ "./89193.js");
const s = 604800;
export class p {
	constructor() {
		(0, a.Gn)(this);
	}
	m_bEmoticonListRequested = false;
	m_bInitialized = false;
	m_rtMostRecentEmoticon = undefined;
	static sm_EmoticonRegex = new RegExp("ː([a-zA-Z0-9_\\-]+)ː", "g");
	m_rgEmoticons = [];
	m_rgFlairs = [];
	m_rgRecentEmoticons;
	m_rgStickers = [];
	m_rgRecentStickers;
	m_rgEffects = [];
	m_rtLastStickerOrEffect = Number.MIN_SAFE_INTEGER;
	m_emoticonTrackerCallback = null;
	m_stickerTrackerCallback = null;
	static GetEmoticonURL(e, t) {
		if (t) {
			return i.TS.COMMUNITY_CDN_URL + "economy/emoticonlarge/" + e;
		} else {
			return i.TS.COMMUNITY_CDN_URL + "economy/emoticon/" + e;
		}
	}
	static GetEmoticonReplaceRegex() {
		return p.sm_EmoticonRegex;
	}
	static BEmoticonFilterMatch(e, t) {
		return `:${e.name_normalized || e.name}:`.indexOf(t.toLowerCase()) !== -1;
	}
	static FilterEmoticons(e, t) {
		if (t && t !== ":") {
			return e.filter((e) => p.BEmoticonFilterMatch(e, t));
		} else {
			return e;
		}
	}
	static BStickerFilterMatch(e, t) {
		return e.name.toLowerCase().indexOf(t.toLowerCase()) > -1;
	}
	static FilterStickers(e, t) {
		if (t) {
			return e.filter((e) => p.BStickerFilterMatch(e, t));
		} else {
			return e;
		}
	}
	SearchEmoticons(e, t = 25, r = true) {
		function n(e) {
			return e.name_normalized || e.name;
		}
		this.UpdateEmoticonList();
		e = e.toLocaleLowerCase();
		let i = this.recent_emoticons.filter((t) => !e || n(t).startsWith(e));
		let a = this.recent_emoticons.filter((t) => !r && n(t).indexOf(e) !== -1);
		let s = this.m_rgEmoticons.filter((t) => !e || n(t).startsWith(e));
		let o = this.m_rgEmoticons.filter((t) => !r && n(t).indexOf(e) !== -1);
		let l = new Set();
		let c = [];
		function m(e, r, i) {
			return (
				!(c.length >= t) &&
				(l.has(e) ||
					(l.add(e),
					c.push({
						name: n(e),
						recent: r,
						new: i,
					})),
				true)
			);
		}
		function u(e, t, r) {
			for (let n of e) {
				if (!m(n, t, r(n))) {
					break;
				}
			}
		}
		u(i, true, (e) => !e.last_used && !!e.time_received);
		u(s, false, () => false);
		u(a, true, (e) => !e.last_used && !!e.time_received);
		u(o, false, () => false);
		return c;
	}
	get is_initialized() {
		return this.m_bInitialized;
	}
	GetTimeReceivedNewestEmoticon() {
		this.UpdateEmoticonList();
		return this.m_rtMostRecentEmoticon;
	}
	GetTimeReceivedForStickerOrEffect() {
		return this.m_rtLastStickerOrEffect;
	}
	UpdateEmoticonList() {
		if (!this.m_bInitialized) {
			this.RequestEmoticonList();
		}
	}
	get emoticon_list() {
		this.UpdateEmoticonList();
		return this.m_rgEmoticons;
	}
	get flair_list() {
		this.UpdateEmoticonList();
		return this.m_rgFlairs;
	}
	GetStickerList() {
		return this.m_rgStickers;
	}
	GetEffectList() {
		return this.m_rgEffects;
	}
	GetFlairListByGroupID(e) {
		return this.m_rgFlairs.filter((t) => t.flairGroupID === e);
	}
	get recent_emoticons() {
		if (!this.m_rgRecentEmoticons) {
			this.BuildRecentEmoticonList();
		}
		return this.m_rgRecentEmoticons;
	}
	get recent_stickers() {
		if (!this.m_rgRecentStickers) {
			this.BuildRecentStickerList();
		}
		return this.m_rgRecentStickers;
	}
	SetEmoticonTrackerCallback(e) {
		this.m_emoticonTrackerCallback = e;
	}
	SetStickerTrackerCallback(e) {
		this.m_stickerTrackerCallback = e;
	}
	TrackEmoticonUsage(e, t) {
		if (!this.m_bInitialized) {
			return;
		}
		if (this.m_emoticonTrackerCallback) {
			this.m_emoticonTrackerCallback(e, t);
		}
		let r;
		let n = new Map();
		let i = /\[emoticon\]([^[]*)/g;
		while ((r = i.exec(e))) {
			let e = n.get(r[1]) || 0;
			n.set(r[1], e + 1);
		}
		let a = false;
		if (n.size) {
			if (this.m_rgRecentEmoticons !== undefined) {
				for (let e of this.m_rgRecentEmoticons) {
					if (n.has(e.name)) {
						e.last_used = t;
						e.use_count += n.get(e.name);
						n.delete(e.name);
						if (e.time_received) {
							a = true;
							delete e.time_received;
						}
					}
				}
			}
			if (n.size) {
				for (let e of this.m_rgEmoticons) {
					if (n.has(e.name)) {
						e.last_used = t;
						e.use_count += n.get(e.name);
						delete e.time_received;
						if (this.m_rgRecentEmoticons !== undefined) {
							this.m_rgRecentEmoticons.push(e);
						}
					}
				}
			}
			if (
				this.m_rgRecentEmoticons !== undefined &&
				(this.BuildRecentEmoticonList(), a)
			) {
				this.m_rtMostRecentEmoticon = undefined;
				for (let e of this.m_rgRecentEmoticons) {
					if (
						!e.last_used &&
						e.time_received &&
						(!this.m_rtMostRecentEmoticon ||
							e.time_received > this.m_rtMostRecentEmoticon)
					) {
						this.m_rtMostRecentEmoticon = e.time_received;
					}
				}
			}
		}
	}
	TrackStickerUsage(e, t) {
		if (!this.m_bInitialized) {
			return;
		}
		if (this.m_stickerTrackerCallback) {
			this.m_stickerTrackerCallback(e, t);
		}
		const r = this.m_rgStickers.find(({ name: t }) => t === e);
		r.last_used = t;
		r.use_count += 1;
		delete r.time_received;
		this.BuildRecentStickerList();
	}
	RequestEmoticonList() {
		if (!this.m_bEmoticonListRequested && this.BInitialized()) {
			this.m_bEmoticonListRequested = true;
			this.RequestEmoticonListInternal();
		}
	}
	BuildRecentEmoticonList() {
		this.m_rgRecentEmoticons = this.BuildRecentList(this.m_rgEmoticons);
	}
	BuildRecentStickerList() {
		this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers);
	}
	BuildRecentList(e) {
		const t = this.GetServerTime() - s;
		const r = e.filter(
			({ last_used: e, time_received: r }) => e || (r && r > t),
		);
		r.sort(
			(e, t) =>
				(t.last_used || t.time_received) - (e.last_used || e.time_received),
		);
		return r.slice(0, 50);
	}
	OnEmoticonListReceived(e) {
		this.m_rgFlairs = [];
		this.m_rgEmoticons = [];
		this.m_rgRecentEmoticons = undefined;
		this.m_rtMostRecentEmoticon = undefined;
		let t = this.GetServerTime() - s;
		for (let r of e) {
			let e = r.name;
			if (e.startsWith("^")) {
				this.m_rgFlairs.push({
					name: e.match(new RegExp(/:(.*):/))[1],
					flairGroupID: e.match(new RegExp(/\^(.*)\^/))[1],
				});
			} else {
				if (!r.last_used && r.time_received > t) {
					if (
						!this.m_rtMostRecentEmoticon ||
						r.time_received > this.m_rtMostRecentEmoticon
					) {
						this.m_rtMostRecentEmoticon = r.time_received;
					}
				} else {
					delete r.time_received;
				}
				this.m_rgEmoticons.push(r);
			}
		}
		this.m_bInitialized = true;
		this.m_bEmoticonListRequested = false;
	}
}
(0, n.Cg)([a.sH], p.prototype, "m_bInitialized", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_rtMostRecentEmoticon", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_rtLastStickerOrEffect", undefined);
(0, n.Cg)([a.XI], p.prototype, "TrackEmoticonUsage", null);
