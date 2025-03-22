var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./84629.js");
var a = require("./91720.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./67429.js");
const l = 20000;
export async function Pe(e, t, r, n, a) {
	const s = t.GetTimelineAndOffsetRelativeToCurrentPlayback();
	const o = t.GetTimelineAndOffsetRelativeToCurrentPlayback(l);
	if (s && o) {
		const i = o.nGlobalOffsetMS - s.nGlobalOffsetMS;
		const l = await t.GenerateClipNameFromTimeline(
			s.strTimelineID,
			s.nTimelineOffsetMS,
			o.strTimelineID,
			o.nTimelineOffsetMS,
		);
		return B1(
			e,
			t.GetClipID(),
			l,
			s.strTimelineID,
			s.nTimelineOffsetMS,
			o.strTimelineID,
			o.nTimelineOffsetMS,
			i,
			r,
			n,
			a,
		);
	}
	(0, i.tH)("Failed to determine time start/end for clip");
	return null;
}
export async function Hy(e, t, r, n, a, s, o) {
	if (!isNaN(n) && !isNaN(r) && r < n) {
		const l = t.ConvertGlobalOffsetToTimelineRelativeOffset(r);
		const c = t.ConvertGlobalOffsetToTimelineRelativeOffset(n);
		if (l && c) {
			const i = n - r;
			const m = await t.GenerateClipNameFromTimeline(
				l.strTimelineID,
				l.nTimelineOffsetMS.valMS,
				c.strTimelineID,
				c.nTimelineOffsetMS.valMS,
			);
			return B1(
				e,
				t.GetClipID(),
				m,
				l.strTimelineID,
				l.nTimelineOffsetMS.valMS,
				c.strTimelineID,
				c.nTimelineOffsetMS.valMS,
				i,
				a,
				s,
				o,
			);
		}
		(0, i.tH)("Could not find the timeline for start or stop", l, c);
	} else {
		(0, i.tH)("Range not setup for creating the clip");
	}
	return null;
}
class u {
	m_bCreationWasTemporary;
	m_fnCreate;
	m_creationResult;
	m_bCleanedUp = false;
	m_nClipLengthSeconds;
	m_strSuggestedClipName;
	m_strGameID;
	m_strSrcClipID;
	m_eInitMethod;
	m_startMetrics;
	m_endMetrics;
	constructor(e, t, r, n, i, a, s, o) {
		this.m_fnCreate = e;
		this.m_nClipLengthSeconds = t;
		this.m_strSuggestedClipName = r;
		this.m_strGameID = n;
		this.m_strSrcClipID = i;
		this.m_eInitMethod = a;
		this.m_startMetrics = s;
		this.m_endMetrics = o;
	}
	Request() {
		return {
			create: this.create,
			cleanup: this.cleanup,
			bExistingClip: false,
			nClipLengthSeconds: this.m_nClipLengthSeconds,
			strSuggestedClipName: this.m_strSuggestedClipName,
			gameID: new o.VS(this.m_strGameID),
			strSrcClipID: this.m_strSrcClipID,
			eInitMethod: this.m_eInitMethod,
			startMetrics: this.m_startMetrics,
			endMetrics: this.m_endMetrics,
		};
	}
	async create(e, t) {
		if (!this.m_creationResult) {
			this.m_creationResult = await this.m_fnCreate(e, t);
			this.m_bCreationWasTemporary = e;
			(0, a.gu)(
				new o.VS(this.m_strGameID),
				this.m_eInitMethod,
				this.m_nClipLengthSeconds,
				this.m_startMetrics,
				this.m_endMetrics,
			);
		}
		return Promise.resolve(this.m_creationResult);
	}
	async cleanup() {
		if (this.m_bCleanedUp) {
			throw new Error("cleanup called twice on clip creation");
		}
		this.m_bCleanedUp = true;
		if (this.m_creationResult?.clipSummary && this.m_bCreationWasTemporary) {
			const { fnDeleteClip: e } = (0, a.Gb)();
			await e(this.m_creationResult.clipSummary.clip_id);
		}
	}
}
export function B1(e, t, r, n, s, o, l, c, m, d, A) {
	return new u(
		(c, m) =>
			(async function (e, t, r, n, s, o, l, c, m) {
				const { fnSaveClip: u } = (0, a.WQ)();
				(0, i.tG)(`start ${n} @ ${s} upto ${o} @ ${l}`);
				try {
					const a = await u(
						e,
						t,
						r,
						{
							timeline_id: n,
							offset_ms: "" + s,
						},
						{
							timeline_id: o,
							offset_ms: "" + l,
						},
						c,
						m,
					);
					const { clipSummary: d, result: A } = a;
					if (d) {
						(0, i.tG)(`Clip ${d.clip_id} created`);
					} else {
						(0, i.tG)(`Clip was not created: ${A}`);
					}
					return a;
				} catch (e) {
					(0, i.ZI)(e);
				}
				return {
					result: 2,
				};
			})(e, t, r, n, s, o, l, c, m),
		c / 1000,
		r,
		e,
		t,
		m,
		d,
		A,
	).Request();
}
export function e3(e) {
	const t = (0, a.XA)(e);
	if (!t) {
		return null;
	}
	const r = (0, a.Tq)().GetClipExportProgress(e);
	const i = parseInt(t.duration_ms) / 1000;
	const l = t.file_size ? (parseInt(t.file_size) * 8) / (i * 1024) : undefined;
	class c {
		m_bCreated = false;
		async create(e) {
			if (!this.m_bCreated) {
				this.m_bCreated = true;
				(0, a.gu)(
					new o.VS(t.game_id),
					6,
					parseInt(t.duration_ms) / 1000,
					{
						relativeMS: 0,
						originalRangeMethod: 6,
						latestRangeMethod: 6,
					},
					{
						relativeMS: 0,
						originalRangeMethod: 6,
						latestRangeMethod: 6,
					},
				);
			}
			return Promise.resolve({
				result: 1,
				clipSummary: t,
			});
		}
		async cleanup() {
			return Promise.resolve();
		}
	}
	(0, n.Cg)([s.oI], c.prototype, "create", null);
	(0, n.Cg)([s.oI], c.prototype, "cleanup", null);
	let m = new c();
	return {
		create: m.create,
		cleanup: m.cleanup,
		nClipLengthSeconds: i,
		bExistingClip: true,
		strSuggestedClipName: t.name,
		strCurrentExportPath: r?.exportPath,
		strSrcClipID: e,
		gameID: new o.VS(t.game_id),
		nEstimatedBitrateKbps: l,
		eInitMethod: 6,
		startMetrics: {
			relativeMS: 0,
			originalRangeMethod: 6,
			latestRangeMethod: 6,
		},
		endMetrics: {
			relativeMS: 0,
			originalRangeMethod: 6,
			latestRangeMethod: 6,
		},
	};
}
(0, n.Cg)([s.oI], u.prototype, "create", null);
(0, n.Cg)([s.oI], u.prototype, "cleanup", null);
