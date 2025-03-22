var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./52451.js");
export class x {
	m_data = undefined;
	m_nLastFetchTimeMS = 0;
	m_nNextFetchTimeMS = undefined;
	m_timeoutNextFetch;
	m_params;
	constructor(e) {
		(0, i.Gn)(this);
		this.m_params = e;
	}
	GetStorage() {
		return this.m_params.storage;
	}
	GetStorageKey() {
		return this.m_params.strStorageKey;
	}
	GetStorageVersion() {
		return this.m_params.nStorageVersion;
	}
	GetMaxLifetimeMS() {
		return this.m_params.nMaxLifetimeMS;
	}
	GetFailureRetryIntervalMS() {
		return this.m_params.nFailureRetryIntervalMS;
	}
	Refresh() {
		if (this.m_nNextFetchTimeMS !== undefined) {
			this.m_nNextFetchTimeMS = 0;
		}
		return this.RefreshDataIfNeeded();
	}
	IsOlderThan(e) {
		return this.m_nLastFetchTimeMS < Date.now() - e;
	}
	async LoadFromStorage() {
		const e = await this.GetStorage().GetObject(
			this.GetStorageKey(),
			this.m_params.reviver,
		);
		if (e && e.version == this.GetStorageVersion()) {
			this.m_data = e.data;
			this.m_nLastFetchTimeMS = e.lastFetchTimeMS;
			if (this.m_params.onUpdate) {
				this.m_params.onUpdate(this.m_data);
			}
			const t = Date.now() - this.m_nLastFetchTimeMS;
			const r = Math.max(this.GetMaxLifetimeMS() - t, 0);
			this.ScheduleRefresh(r);
		} else {
			this.ScheduleRefresh(0);
		}
		return this.m_data;
	}
	GetData() {
		this.RefreshDataIfNeeded();
		return this.m_data;
	}
	async SaveToStorage() {
		const e = {
			version: this.GetStorageVersion(),
			data: this.m_data,
			lastFetchTimeMS: this.m_nLastFetchTimeMS,
		};
		return this.GetStorage().StoreObject(this.GetStorageKey(), e);
	}
	async RefreshDataIfNeeded() {
		if (
			this.m_nNextFetchTimeMS !== undefined &&
			Date.now() > this.m_nNextFetchTimeMS
		) {
			this.m_nNextFetchTimeMS = undefined;
			const e = await this.FetchData();
			if (e !== undefined) {
				this.m_data = e;
				this.m_nLastFetchTimeMS = Date.now();
				if (this.m_params.onUpdate) {
					this.m_params.onUpdate(this.m_data);
				}
				await this.SaveToStorage();
				this.ScheduleRefresh(this.GetMaxLifetimeMS());
			} else {
				this.ScheduleRefresh(this.GetFailureRetryIntervalMS());
			}
		}
		return this.m_data;
	}
	ScheduleRefresh(e) {
		clearTimeout(this.m_timeoutNextFetch);
		this.m_nNextFetchTimeMS = Date.now() + e;
		this.m_timeoutNextFetch = window.setTimeout(this.RefreshDataIfNeeded, e);
	}
}
(0, n.Cg)([i.sH.ref], x.prototype, "m_data", undefined);
(0, n.Cg)([a.oI], x.prototype, "RefreshDataIfNeeded", null);
export class D extends x {
	m_currentFetch;
	m_fetch;
	constructor(e, t) {
		super(e);
		this.m_fetch = t;
	}
	async Init() {
		this.m_currentFetch = this.LoadFromStorage();
		await this.m_currentFetch;
		this.m_currentFetch = null;
	}
	Get() {
		return this.GetData();
	}
	FetchData() {
		return this.m_fetch();
	}
}
