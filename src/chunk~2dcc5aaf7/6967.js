import n, { Cg } from "./34629.js";
import i, { useRef, useEffect } from "./63696.js";
import a, { m as m_1 } from "./39039.js";
import s, { w } from "./49455.js";
import o from "./43691.js";
import l, { q_ as q, ZI, tH } from "./84629.js";
import c, { c5 } from "./91720.js";
import m from "./22588.js";
import { CH } from "./52451.js";
import d, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
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
		Gn(this);
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
			this.m_rgThumbnailPerf.map((e) => (e - t) ** 2).reduce((e, t) => e + t) /
				e,
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
					q(`CThumbnailCache:: cant measure ${m}, error: ${e}`);
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
			const r = await c5(
				e[0].strRecordingID,
				e[0].strClipID,
				undefined,
				t,
				e[0].cPxMajorAxis,
				e[0].bPreciseTiming,
			);
			w(
				r?.length == t.length,
				`CThumbnailCache.InternalLoadMultipleThumbnails request ${t.length} and got back ${r?.length}`,
			);
			for (let n = 0; n < t.length && n < r?.length; ++n) {
				const e_n = e[n];
				const i = this.GetKey(
					e_n.gameID,
					e_n.strRecordingID,
					e_n.strClipID,
					e_n.nRecordingOffsetMS,
					e_n.nRecordingStartOffsetMS,
					e_n.cPxMajorAxis,
					e_n.bPreciseTiming,
				);
				let a = r ? r[n].image_data() : null;
				this.SetThumbnailData(i, {
					data: a,
					bIsLoading: false,
				});
			}
		} catch (t) {
			ZI("Failed to load multiple request thumbnails", t);

			for (const r of e) {
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
			const e = await c5(t, r, undefined, [n * 1000], a, s);
			if (e?.length > 0) {
				let t = e ? e[0].image_data() : null;
				this.SetThumbnailData(o, {
					data: t,
					bIsLoading: false,
				});
				return true;
			}
			tH(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${n}`);
		} catch (e) {
			ZI(`ThumbnailImage: Fail to load thumbnail ${t} @ ${n} with ${e}`);
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
	const c = q3(() => p.Get().GetOrQueueThumbnail(e, r, t, n, s, o, l));
	return ((e) => {
		const TRef = useRef(null);
		const r = CH();
		const n = m_1("useThumbnailAsURL");
		useEffect(() => {
			if (e && !n?.token?.reason) {
				const n = new Blob([e], {
					type: "image/jpeg",
				});
				const i = URL.createObjectURL(n);
				TRef.current = i;
				r();
			}
			return () => {
				if (TRef.current) {
					URL.revokeObjectURL(TRef.current);
					TRef.current = undefined;
				}
			};
		}, [n?.token?.reason, e, r]);
		return TRef.current;
	})(c?.data);
}
Cg([d.sH], p.prototype, "m_mapThumbnailImages", undefined);
