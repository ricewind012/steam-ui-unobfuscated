var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./39039.js");
var s = require(/*webcrack:missing*/ "./49455.js");
var o = require(/*webcrack:missing*/ "./43691.js");
var l = require("./84629.js");
var c = require("./91720.js");
var m = require("./22588.js");
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require(/*webcrack:missing*/ "./89193.js");
var A = require(/*webcrack:missing*/ "./90095.js");
class p {
	k_QueueWaitUntilRequestMS = 10;
	k_nMaxBatchSize = 50;
	m_nMaxCacheSize = 1800000 / m.kh;
	m_LRUTrackerSet = new Set();
	m_mapPromises = new Map();
	m_mapThumbnailImages = new Map();
	m_rgPendingRequest = new Array();
	m_PendingInfoPromise;
	m_PendingInfoResolve = undefined;
	m_PendingTimer = undefined;
	k_AlreadyResolvedOK = Promise.resolve(true);
	m_rgThumbnailPerf = [];
	constructor() {
		(0, d.Gn)(this);
	}
	AddPerfMeasure(e) {
		this.m_rgThumbnailPerf.push(e);
	}
	GetPerfMeasures() {
		if (!this.m_rgThumbnailPerf.length) {
			return null;
		}
		const e = this.m_rgThumbnailPerf.length;
		const t = this.m_rgThumbnailPerf.reduce((e, t) => e + t) / e;
		const r = Math.sqrt(
			this.m_rgThumbnailPerf
				.map((e) => Math.pow(e - t, 2))
				.reduce((e, t) => e + t) / e,
		);
		const n = Math.max(...this.m_rgThumbnailPerf);
		const i = Math.min(...this.m_rgThumbnailPerf);
		return {
			nMean: t,
			nStdDev: r,
			nMax: n,
			nMin: i,
			nLength: e,
			nLastVal: this.m_rgThumbnailPerf[e - 1],
		};
	}
	GetKey(e, t, r, n, i, a, s) {
		const o = i + n;
		return `${e}_${t}_${r}_${s ? o : o - (o % m.kh)}_${a}_${s}`;
	}
	GetThumbnailData(e) {
		const t = this.m_mapThumbnailImages.get(e);
		if (t) {
			if (this.m_LRUTrackerSet.has(e)) {
				this.m_LRUTrackerSet.delete(e);
			}
			this.m_LRUTrackerSet.add(e);
		}
		return t;
	}
	SetThumbnailData(e, t) {
		if (this.m_LRUTrackerSet.has(e)) {
			this.m_LRUTrackerSet.delete(e);
		}
		this.m_LRUTrackerSet.add(e);
		this.m_mapThumbnailImages.set(e, t);
		if (this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize) {
			const e = this.m_LRUTrackerSet.keys().next().value;
			this.m_LRUTrackerSet.delete(e);
			this.m_mapThumbnailImages.delete(e);
		}
	}
	ClearThumbnailData() {
		this.m_LRUTrackerSet.clear();
		this.m_mapThumbnailImages.clear();
	}
	GetThumbnail(e, t, r, n, i, a, s) {
		if (!t) {
			return;
		}
		const o = this.GetKey(e, t, r, n, i, a, s);
		return this.GetThumbnailData(o);
	}
	GetOrQueueThumbnail(e, t, r, n, i, a, s) {
		if (!t) {
			return;
		}
		const o = this.GetKey(e, t, r, n, i, a, s);
		let c = this.GetThumbnailData(o);
		if (!c) {
			let m = `thumbnail_${e}_${a}_${s}`;
			performance.mark(m);
			this.QueueThumbnailRequest(e, t, r, n, i, a, s).then(() => {
				try {
					const e = performance.measure(`measure_${m}`, m);
					if (e) {
						p.Get().AddPerfMeasure(e.duration);
					}
				} catch (e) {
					(0, l.q_)(`CThumbnailCache:: cant measure ${m}, error: ${e}`);
				}
			});
			c = this.GetThumbnailData(o);
		}
		return c;
	}
	QueueThumbnailRequest(e, t, r, n, i, a, s) {
		const o = this.GetKey(e, t, r, n, i, a, s);
		const l = this.GetThumbnailData(o);
		if (l && (l.data || l.bIsLoading)) {
			return this.k_AlreadyResolvedOK;
		}
		this.SetThumbnailData(o, {
			data: null,
			bIsLoading: true,
		});
		if (
			this.m_PendingInfoPromise &&
			(this.m_rgPendingRequest[0].strRecordingID != t ||
				this.m_rgPendingRequest.length > this.k_nMaxBatchSize)
		) {
			if (this.m_PendingTimer) {
				window.clearTimeout(this.m_PendingTimer);
			}
			this.FlushPendingInfo();
		}
		if (
			!this.m_PendingInfoPromise ||
			this.m_rgPendingRequest[0].strRecordingID != t
		) {
			this.m_PendingInfoPromise = new Promise(
				(e) => (this.m_PendingInfoResolve = e),
			);
			this.m_PendingTimer = window.setTimeout(
				() => this.FlushPendingInfo(),
				this.k_QueueWaitUntilRequestMS,
			);
		}
		const c = {
			gameID: e,
			strRecordingID: t,
			strClipID: r,
			nRecordingOffsetMS: n,
			nRecordingStartOffsetMS: i,
			cPxMajorAxis: a,
			bPreciseTiming: s,
		};
		if (
			!this.m_rgPendingRequest.some((e) => {
				r = c;
				return (
					(t = e).strRecordingID === r.strRecordingID &&
					t.strClipID === r.strClipID &&
					t.nRecordingOffsetMS === r.nRecordingOffsetMS &&
					t.nRecordingStartOffsetMS === r.nRecordingStartOffsetMS &&
					t.cPxMajorAxis === r.cPxMajorAxis &&
					t.bPreciseTiming == r.bPreciseTiming
				);
				var t;
				var r;
			})
		) {
			this.m_rgPendingRequest.push(c);
			this.m_mapPromises.set(o, this.m_PendingInfoPromise);
		}
		return this.m_PendingInfoPromise;
	}
	async FlushPendingInfo() {
		if (this.m_PendingInfoResolve === undefined) {
			return;
		}
		const e = this.m_PendingInfoResolve;
		const t = this.m_rgPendingRequest;
		this.m_PendingInfoPromise = undefined;
		this.m_PendingInfoResolve = undefined;
		this.m_rgPendingRequest = [];
		this.m_PendingTimer = undefined;
		await this.InternalLoadMultipleThumbnails(t);
		e();
	}
	async InternalLoadMultipleThumbnails(e) {
		e.sort((e, t) => e.nRecordingOffsetMS - t.nRecordingOffsetMS);
		try {
			const t = e.map((e) => e.nRecordingOffsetMS * 1000);
			const r = await (0, c.c5)(
				e[0].strRecordingID,
				e[0].strClipID,
				undefined,
				t,
				e[0].cPxMajorAxis,
				e[0].bPreciseTiming,
			);
			(0, s.w)(
				r?.length == t.length,
				`CThumbnailCache.InternalLoadMultipleThumbnails request ${t.length} and got back ${r?.length}`,
			);
			for (let n = 0; n < t.length && n < r?.length; ++n) {
				const t = e[n];
				const i = this.GetKey(
					t.gameID,
					t.strRecordingID,
					t.strClipID,
					t.nRecordingOffsetMS,
					t.nRecordingStartOffsetMS,
					t.cPxMajorAxis,
					t.bPreciseTiming,
				);
				let a = r ? r[n].image_data() : null;
				this.SetThumbnailData(i, {
					data: a,
					bIsLoading: false,
				});
			}
		} catch (t) {
			(0, l.ZI)("Failed to load multiple request thumbnails", t);
			for (let t = 0; t < e.length; ++t) {
				const r = e[t];
				const n = this.GetKey(
					r.gameID,
					r.strRecordingID,
					r.strClipID,
					r.nRecordingOffsetMS,
					r.nRecordingStartOffsetMS,
					r.cPxMajorAxis,
					e[0].bPreciseTiming,
				);
				this.SetThumbnailData(n, {
					data: null,
					bIsLoading: false,
				});
			}
		}
	}
	async LoadThumbnail(e, t, r, n, i, a, s) {
		const o = this.GetKey(e, t, r, n, i, a, s);
		const l = this.GetThumbnailData(o);
		return (
			(!!l && !!l.data) ||
			(this.m_mapPromises.has(o) ||
				this.m_mapPromises.set(
					o,
					this.InternalLoadThumbnail(e, t, r, n, i, a, s),
				),
			this.m_mapPromises.get(o))
		);
	}
	async InternalLoadThumbnail(e, t, r, n, i, a, s) {
		const o = this.GetKey(e, t, r, n, i, a, s);
		try {
			const e = await (0, c.c5)(t, r, undefined, [n * 1000], a, s);
			if (e?.length > 0) {
				let t = e ? e[0].image_data() : null;
				this.SetThumbnailData(o, {
					data: t,
					bIsLoading: false,
				});
				return true;
			}
			(0, l.tH)(
				`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${n}`,
			);
		} catch (e) {
			(0, l.ZI)(`ThumbnailImage: Fail to load thumbnail ${t} @ ${n} with ${e}`);
			this.SetThumbnailData(o, {
				data: null,
				bIsLoading: false,
			});
		}
		return false;
	}
	static s_Singleton;
	static Get() {
		if (!p.s_Singleton) {
			p.s_Singleton = new p();
			if (o.TS.WEB_UNIVERSE == "dev") {
				window.g_ThumbnailCache = p.s_Singleton;
			}
		}
		return p.s_Singleton;
	}
}
export function NB() {
	return p.Get().GetPerfMeasures();
}
export function rX(e, t, r, n, s, o, l) {
	const c = (0, A.q3)(() => p.Get().GetOrQueueThumbnail(e, r, t, n, s, o, l));
	return (function (e) {
		const t = (0, i.useRef)(null);
		const r = (0, u.CH)();
		const n = (0, a.m)("useThumbnailAsURL");
		(0, i.useEffect)(() => {
			if (e && !n?.token?.reason) {
				const n = new Blob([e], {
					type: "image/jpeg",
				});
				const i = URL.createObjectURL(n);
				t.current = i;
				r();
			}
			return () => {
				if (t.current) {
					URL.revokeObjectURL(t.current);
					t.current = undefined;
				}
			};
		}, [n?.token?.reason, e, r]);
		return t.current;
	})(c?.data);
}
(0, n.Cg)([d.sH], p.prototype, "m_mapThumbnailImages", undefined);
