var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./8573.js");
var s = require("./12956.js");
var o = require("./13484.js");
class _l {
	constructor() {
		(0, i.Gn)(this);
	}
	m_mapBroadcasterSteamIDToEvents = new Map();
	m_mapBroadcasterSteamIDData = new Map();
	static GetBBCodeParam(e, t, r = "") {
		const n = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
		if (n) {
			return n[1];
		} else {
			return r;
		}
	}
	static ParseCalendarEventPresentersFromText(e) {
		const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi;
		const r = new Array();
		while (true) {
			const n = t.exec(e);
			if (n === null) {
				break;
			}
			const i = n[1];
			const s = n[2];
			const o = _l.GetBBCodeParam(i, "steamid");
			const c = {
				steamID: o ? new a.b(o) : undefined,
				name: _l.GetBBCodeParam(i, "name"),
				title: _l.GetBBCodeParam(i, "title"),
				company: _l.GetBBCodeParam(i, "company"),
				photo: _l.GetBBCodeParam(i, "photo"),
				bio: s,
			};
			r.push(c);
		}
		return r;
	}
	static ParseEventModelPresenters(e, t) {
		const r = e.GetDescriptionWithFallback(t);
		return _l.ParseCalendarEventPresentersFromText(r);
	}
	static ParseEventAppReferencesFromText(e) {
		const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi;
		const r = new Set();
		while (true) {
			const n = t.exec(e);
			if (n === null) {
				break;
			}
			const i = n[1];
			r.add(Number(i));
		}
		return r;
	}
	static ParseEventModelAppReferences(e, t) {
		const r = e.GetDescriptionWithFallback(t);
		const n = _l.ParseEventAppReferencesFromText(r);
		if (e.jsondata?.referenced_appids) {
			for (const t of e.jsondata.referenced_appids) {
				n.add(t);
			}
		}
		return n;
	}
	async BuildBroadcasterSteamIDToActiveEventMap(e) {
		const t = s.HD.GetTimeNowWithOverride();
		const r = e.GetCalendarItemsInTimeRange(t - 3600, t);
		for (const e of r.rgCalendarItems) {
			o.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
		}
		const n = r.rgCalendarItems.map((e) =>
			o.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
				a.b.InitFromClanID(e.clanid),
				e.unique_id,
				0,
			),
		);
		const i = await Promise.all(n);
		const l = new Map();
		for (const e of i) {
			if (e && (!e.endTime || !(e.endTime < t))) {
				for (const t of e.GetBroadcastWhitelistAsSteamIDs()) {
					if (l.has(t)) {
						l.get(t).push(e);
					} else {
						l.set(t, [e]);
					}
				}
			}
		}
		return l;
	}
	IsBroadcasterAlreadyBound(e, t) {
		const r = this.m_mapBroadcasterSteamIDToEvents.get(e);
		const n = r ? r.length : 0;
		if ((t ? t.length : 0) != n) {
			return false;
		}
		for (let e = 0; e < n; e++) {
			if (r[e] != t[e].GID) {
				return false;
			}
		}
		return true;
	}
	static BuildSteamIDToPresenterMapFromEventList(e, t) {
		let r = new Map();
		for (const n of e) {
			if (!n) {
				continue;
			}
			const e = _l.ParseEventModelPresenters(n, t);
			for (const t of e) {
				if (t.steamID) {
					r.set(t.steamID.ConvertTo64BitString(), t);
				}
			}
		}
		return r;
	}
	RemoveCachedDataIfNotInMap(e) {
		const t = new Array();
		this.m_mapBroadcasterSteamIDToEvents.forEach((r, n) => {
			if (!e.has(n)) {
				t.push(n);
			}
		});
		t.forEach((e) => {
			this.m_mapBroadcasterSteamIDData.delete(e);
			this.m_mapBroadcasterSteamIDToEvents.delete(e);
		});
	}
	static BuildAppIDRefsForEventList(e, t) {
		const r = new Set();
		for (const n of e) {
			_l.ParseEventModelAppReferences(n, t).forEach((e) => r.add(e));
		}
		return Array.from(r);
	}
	UpdateCachedDataFromEvents(e, t) {
		e.forEach((e, r) => {
			if (this.IsBroadcasterAlreadyBound(r, e)) {
				return;
			}
			const n = {
				m_mapPresenters: _l.BuildSteamIDToPresenterMapFromEventList(e, t),
				m_rgAppIDs: _l.BuildAppIDRefsForEventList(e, t),
			};
			this.m_mapBroadcasterSteamIDData.set(r, n);
			this.m_mapBroadcasterSteamIDToEvents.set(
				r,
				e.map((e) => e.GID),
			);
		});
	}
	async SynchronizeEventsWithBroadcasts(e, t) {
		const r = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
		this.RemoveCachedDataIfNotInMap(r);
		this.UpdateCachedDataFromEvents(r, t);
	}
	GetPresenterMapForBroadcasterSteamID(e) {
		return this.m_mapBroadcasterSteamIDData.get(e)?.m_mapPresenters;
	}
	GetAppIDListForBroadcasterSteamID(e) {
		return this.m_mapBroadcasterSteamIDData.get(e)?.m_rgAppIDs;
	}
}
(0, n.Cg)([i.sH], _l.prototype, "m_mapBroadcasterSteamIDData", undefined);
export const l = new _l();
