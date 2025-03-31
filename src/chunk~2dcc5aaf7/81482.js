import n, { Cg } from "./34629.js";
import i from "./37976.js";
import a, { Gn, HO, mJ, EW } from "./89193.js";
import s from "./12368.js";
import o, { I8 } from "./12176.js";
import l from "./58663.js";
import c from "./48307.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import S from "./52451.js";
import w from "./72476.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
class u extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.key) {
			c.Sg(u.M());
		}
		l_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				key: {
					n: 1,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				is_deleted: {
					n: 2,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				value: {
					n: 3,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				timestamp: {
					n: 4,
					br: c.qM.readFixed32,
					bw: c.gp.writeFixed32,
				},
				version: {
					n: 5,
					br: c.qM.readUint64String,
					bw: c.gp.writeUint64String,
				},
			},
		};
		return u.sm_m;
	}
	static MBF() {
		u.sm_mbf ||= c.w0(u.M());
		return u.sm_mbf;
	}
	toObject(e = false) {
		return u.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(u.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(u.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(u.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_Entry";
	}
}
class d extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.enamespace) {
			c.Sg(d.M());
		}
		l_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				enamespace: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				version: {
					n: 2,
					br: c.qM.readUint64String,
					bw: c.gp.writeUint64String,
				},
				entries: {
					n: 3,
					c: u,
					r: true,
					q: true,
				},
				horizon: {
					n: 4,
					br: c.qM.readUint64String,
					bw: c.gp.writeUint64String,
				},
			},
		};
		return d.sm_m;
	}
	static MBF() {
		d.sm_mbf ||= c.w0(d.M());
		return d.sm_mbf;
	}
	toObject(e = false) {
		return d.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(d.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(d.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(d.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_NamespaceData";
	}
}
class A extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.enamespace) {
			c.Sg(A.M());
		}
		l_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				enamespace: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				version: {
					n: 2,
					br: c.qM.readUint64String,
					bw: c.gp.writeUint64String,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= c.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(A.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_NamespaceVersion";
	}
}
class p extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.versions) {
			c.Sg(p.M());
		}
		l_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				versions: {
					n: 1,
					c: A,
					r: true,
					q: true,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= c.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_Download_Request";
	}
}
class g extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.data) {
			c.Sg(g.M());
		}
		l_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				data: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= c.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_Download_Response";
	}
}
class h extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.data) {
			c.Sg(h.M());
		}
		l_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				data: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= c.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_Upload_Request";
	}
}
class C extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.versions) {
			c.Sg(C.M());
		}
		l_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				versions: {
					n: 1,
					c: A,
					r: true,
					q: true,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= c.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_Upload_Response";
	}
}
class _ extends l_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.versions) {
			c.Sg(_.M());
		}
		l_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				versions: {
					n: 2,
					c: A,
					r: true,
					q: true,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= c.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new l.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new l.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudConfigStore_Change_Notification";
	}
}
let f;
let b;
((e) => {
	e.Download = (e, t) =>
		e.SendMsg("CloudConfigStore.Download#1", I8(p, t), g, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.Upload = (e, t) =>
		e.SendMsg("CloudConfigStore.Upload#1", I8(h, t), C, {
			ePrivilege: 1,
		});
})((f ||= {}));
((e) => {
	e.NotifyChangeHandler = {
		name: "CloudConfigStoreClient.NotifyChange#1",
		request: _,
	};
})((b ||= {}));
const v = new (require(/*webcrack:missing*/ "./83599.js").wd)("CloudStorage");
const I = "cloud-storage-namespaces";
const E = "cloud-storage-namespace-";
const M = "no-version";
function T(e) {
	return `${E}${e}`;
}
function R(e) {
	return `${E}${e}.modified`;
}
const k = 600000;
export class HB {
	key;
	timestamp;
	is_deleted;
	value;
	version;
	conflictResolutionMethod;
	strMethodId;
	constructor(e, t, r, n, i, a, s) {
		this.key = e;
		this.timestamp = t;
		AssertMsg(r != !!n, "Should only set bIsDeleted true XOR strValue.");
		AssertMsg(
			(i == x2.CustomMethod) == !!a,
			"Must include a resolution method ID if and only if selecting EConflictResolutionMethod.CustomMethod.",
		);
		if (r) {
			this.is_deleted = true;
		} else {
			this.value = n;
		}
		if (i) {
			this.conflictResolutionMethod = i;
			if (i == x2.CustomMethod) {
				this.strMethodId = a;
			}
		}
		if (s) {
			this.version = s;
		}
	}
	static FromObject(e) {
		if (e.key && e.timestamp && (e.is_deleted || e.value)) {
			try {
				return new HB(
					e.key,
					e.timestamp,
					e.is_deleted,
					e.value,
					e.conflictResolutionMethod,
					e.strMethodId,
					e.version,
				);
			} catch (t) {
				console.warn("Could not parse CStorageEntry from:", e, t);
			}
		}
		return null;
	}
	static FromProto(e) {
		return new HB(
			e.key(),
			e.timestamp(),
			e.is_deleted(),
			e.value(),
			undefined,
			undefined,
			e.version(),
		);
	}
	ToProto() {
		const e = new u();
		e.set_key(this.key);
		e.set_timestamp(this.timestamp);
		if (this.is_deleted) {
			e.set_is_deleted(true);
		} else {
			e.set_value(this.value);
		}
		return e;
	}
}
class N {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_nLatestEntryTimestamp = 0;
	m_nLastSuccessfulSyncTime;
	m_nRequestFailures = 0;
	m_bUseLongerBackoffDelay = false;
	m_downloadTimer = null;
	m_uploadTimer;
	m_mapNamespaces = new Map();
	m_mapFirstSyncPromiseResolvers = new Map();
	m_mapStorage = new Map();
	m_mapDirtyKeys = new Map();
	m_mapCustomConflictResolutionMethods = new Map();
	m_mapChangeCallbacks = new Map();
	async Init(e) {
		this.m_CMInterface = e;
		try {
			const e = (await z(I)) || [];
			for (const [t, r] of e) {
				this.m_mapNamespaces.set(t, r);
				const e = a.sH.map([], {
					deep: false,
				});
				this.m_mapStorage.set(t, e);
				const n = T(t);
				const i = (await z(n)) || [];
				for (const [r, n] of i) {
					const i = HB.FromObject(n);
					if (i) {
						e.set(r, i);
						this.m_nLatestEntryTimestamp = Math.max(
							this.m_nLatestEntryTimestamp,
							i.timestamp,
						);
					} else {
						console.error(
							`Could not parse storage entry for ${t} / ${r}; skipping.`,
						);
					}
				}
				const s = R(t);
				const o = (await z(s)) || [];
				this.m_mapDirtyKeys.set(t, new Set(o));
				console.log(
					`CloudStorage resuming with ${e.size} entries (${o.length} modified) for namespace ${t}`,
				);
			}
		} catch {
			console.log("CloudStorage initializing from scratch.");
		}
		e.AddOnLogonCallback(this.OnConnect);
		e.messageHandlers.RegisterServiceNotificationHandler(
			b.NotifyChangeHandler,
			this.OnChangeNotification,
		);
	}
	RegisterForChangeNotifications(e, t) {
		if (!this.m_mapChangeCallbacks.has(e)) {
			this.m_mapChangeCallbacks.set(e, new CCallbackList());
		}
		t(e, Array.from(this.m_mapStorage.get(e)?.keys() || []));
		return this.m_mapChangeCallbacks.get(e).Register(t);
	}
	RegisterCustomConflictResolutionMethod(e, t) {
		AssertMsg(
			!this.m_mapCustomConflictResolutionMethods.has(e),
			`Duplicate registration of conflict resolution method '${e}'.`,
		);
		this.m_mapCustomConflictResolutionMethods.set(e, t);
	}
	OnConnect() {
		const e = this.m_nLastSuccessfulSyncTime
			? "reconnect"
			: this.m_mapNamespaces.size > 0
				? "reload"
				: "new";
		SteamClient.Stats.RecordActivationEvent("CloudStorage.Download", e);
		const t =
			this.m_nLastSuccessfulSyncTime && this.m_bUseLongerBackoffDelay
				? "not-urgent"
				: "immediate";
		this.ScheduleDownload(t);
	}
	OnChangeNotification(e) {
		v.Debug("OnChangeNotification", e.DEBUG_ToObject());
		let t = false;
		for (const r of e.Body().versions()) {
			if (this.m_mapNamespaces.get(r.enamespace()) == r.version()) {
				SteamClient.Stats.RecordActivationEvent(
					"CloudStorage.Notification",
					"ignored",
				);
			} else {
				SteamClient.Stats.RecordActivationEvent(
					"CloudStorage.Notification",
					"useful",
				);
				t = true;
			}
		}
		if (t) {
			SteamClient.Stats.RecordActivationEvent(
				"CloudStorage.Download",
				"notified",
			);
			this.ScheduleDownload("immediate");
		}
		return 1;
	}
	async EnsureSubscribedToNamespace(e) {
		if (!this.m_mapNamespaces.has(e)) {
			this.m_mapNamespaces.set(e, M);
			const t = await x(I, Array.from(this.m_mapNamespaces));
			if (t != 1) {
				this.m_mapNamespaces.delete(e);
				return t;
			}
			this.m_mapStorage.set(
				e,
				a.sH.map([], {
					deep: false,
				}),
			);
			this.m_mapDirtyKeys.set(e, new Set());
			SteamClient.Stats.RecordActivationEvent(
				"CloudStorage.Download",
				"added-namespace",
			);
			this.ScheduleDownload("immediate");
		}
		if (this.m_mapNamespaces.get(e) == M) {
			await this.WaitForSync(e);
		}
		return 1;
	}
	async WaitForSync(e) {
		return new Promise((t) => {
			if (!this.m_mapFirstSyncPromiseResolvers.has(e)) {
				this.m_mapFirstSyncPromiseResolvers.set(e, []);
				window.setTimeout(() => {
					if (this.m_mapNamespaces.get(e) == M) {
						this.m_mapNamespaces.set(e, "0");
					}
					this.NotifySyncPromises(e, 1);
				}, 10000);
			}
			this.m_mapFirstSyncPromiseResolvers.get(e).push(t);
		});
	}
	async NotifySyncPromises(e, t) {
		const r = this.m_mapFirstSyncPromiseResolvers.get(e);
		if (r) {
			this.m_mapFirstSyncPromiseResolvers.delete(e);
			r.forEach((e) => e(t));
		}
	}
	async WriteNamespaceToDisk(e, t) {
		const r = R(e);
		const n = await x(r, Array.from(this.m_mapDirtyKeys.get(e)));
		if (!t || n != 1) {
			return n;
		}
		return x(
			T(e),
			Array.from(this.m_mapStorage.get(e)).map(([e, t]) => [e, HO(t)]),
			3145728,
		);
	}
	async WriteNamespacesToDisk(e, t) {
		const r = [];
		e.forEach((e) => {
			r.push(this.WriteNamespaceToDisk(e, t));
		});
		if ((await Promise.all(r)).some((e) => e != 1)) {
			return 32;
		} else {
			return x(I, Array.from(this.m_mapNamespaces));
		}
	}
	async StoreEntry(e, t) {
		const r = this.m_mapStorage.get(e);
		const n = r.get(t.key);
		if (r.size >= 10000 && n) {
			SteamClient.Stats.RecordActivationEvent(
				"CloudStorage.StoreEntry_Failure",
				(54).toString(),
			);
			return 54;
		}
		v.Debug("StoreEntry", t.key, t);
		r.set(t.key, t);
		this.m_mapDirtyKeys.get(e).add(t.key);
		this.m_mapChangeCallbacks.get(e)?.Dispatch(e, [t.key]);
		const i = await this.WriteNamespaceToDisk(e, true);
		if (i == 1) {
			SteamClient.Stats.RecordActivationEvent("CloudStorage.Upload", "write");
			SteamClient.Stats.RecordActivationEvent(
				"CloudStorage.Upload",
				`prefix-${t.key.slice(0, 12)}`,
			);
			this.ScheduleUpload();
		} else {
			if (n) {
				r.set(t.key, n);
				this.m_mapChangeCallbacks.get(e)?.Dispatch(e, [t.key]);
			}
			SteamClient.Stats.RecordActivationEvent(
				"CloudStorage.StoreEntry_Failure",
				i.toString(),
			);
		}
		return i;
	}
	async Upsert(e, t, r, n, i) {
		const a = new HB(t, this.GetCurrentTimestamp(), false, r, n, i);
		return this.StoreEntry(e, a);
	}
	async Delete(e, t, r, n) {
		const i = new HB(t, this.GetCurrentTimestamp(), true, null, r, n);
		return this.StoreEntry(e, i);
	}
	Get(e, t) {
		const r = this.m_mapStorage.get(e).get(t);
		if (r && !r.is_deleted) {
			return r.value;
		} else {
			return null;
		}
	}
	GetByPrefix(e, t) {
		const r = new Map();
		const n = this.m_mapStorage.get(e);
		Array.from(n.keys()).forEach((e) => {
			if (e.startsWith(t)) {
				const t = n.get(e);
				if (!t.is_deleted) {
					r.set(e, t.value);
				}
			}
		});
		return r;
	}
	ScheduleDownload(e) {
		let t = null;
		switch (e) {
			case "immediate": {
				t = 0;
				this.m_bUseLongerBackoffDelay = false;
				window.clearTimeout(this.m_downloadTimer);
				this.m_downloadTimer = null;
				break;
			}
			case "not-urgent": {
				if (this.m_downloadTimer) {
					return;
				}
				t = k + Math.random() * 3000000;
				break;
			}
			case "backoff": {
				const e = Math.max(0, this.m_nRequestFailures - 1);
				const r = 4 ** e;
				t =
					(this.m_bUseLongerBackoffDelay ? 600000 : 5000) *
					r *
					(0.5 + Math.random());
				window.clearTimeout(this.m_downloadTimer);
				this.m_downloadTimer = null;
			}
		}
		if (this.m_CMInterface.BConnectedToServer()) {
			this.m_downloadTimer = window.setTimeout(this.DownloadFromServer, t);
		}
	}
	ScheduleUpload(e) {
		if (this.m_nLastSuccessfulSyncTime && !this.m_uploadTimer) {
			if (this.m_nRequestFailures > 0) {
				e = 4 ** (this.m_nRequestFailures - 1) * 5000 * (0.5 + Math.random());
			}
			if (e === undefined) {
				e = 2000;
			}
			this.m_uploadTimer = window.setTimeout(this.UploadToServer, e);
		}
	}
	async DownloadFromServer() {
		this.m_downloadTimer = null;
		const e = o.w.Init(p);
		this.m_mapNamespaces.forEach((t, r) => {
			const n = e.Body().add_versions();
			n.set_enamespace(r);
			n.set_version(t == M ? "0" : t);
		});
		const t = await f.Download(this.m_CMInterface.GetServiceTransport(), e);
		v.Debug("Download response", t.Body().toObject());
		let r = t.GetEResult();
		const n = new Set();
		if (r == 1) {
			const e = new Map();
			for (const r of t.Body().data()) {
				const t = r.enamespace();
				if (!this.m_mapNamespaces.has(t)) {
					continue;
				}
				if (!e.has(t)) {
					e.set(t, new Set());
				}
				const a = this.m_mapStorage.get(t);
				const s = this.m_mapDirtyKeys.get(t);
				const o = this.m_mapNamespaces.get(t);
				const l = i.A.fromString(r.horizon());
				if (o == M || l.greaterThan(o)) {
					const e = Array.from(a.keys());
					a.clear();
					s.clear();
					this.m_mapChangeCallbacks.get(t)?.Dispatch(t, e);
				}
				const c = r.version();
				if (o != c) {
					for (const n of r.entries()) {
						const r = HB.FromProto(n);
						const i = r.key;
						if (s.has(i)) {
							const n = a.get(i);
							const o = this.GetConflictResolver(
								n.conflictResolutionMethod,
								n.strMethodId,
							)(n, r);
							if (o) {
								v.Debug("New set from merged", i, o);
								a.set(i, o);
								e.get(t).add(i);
								continue;
							}
							s.delete(i);
						}
						if (v.IsDebugEnabled()) {
							if (a.has(i)) {
								if (r.is_deleted) {
									v.Debug("Delete from remote", i);
								} else {
									v.Debug("Set from remote", i, r);
								}
							} else {
								v.Debug("New from remote", i, r);
							}
						}
						a.set(i, r);
						e.get(t).add(i);
					}
				}
				a.forEach((r, n) => {
					if (
						r.is_deleted &&
						((r.version && l.greaterThan(r.version)) ||
							(!r.version && !s.has(n)))
					) {
						a.delete(n);
						e.get(t).add(n);
					}
				});
				n.add(t);
				this.m_mapNamespaces.set(t, c);
				this.NotifySyncPromises(t, 1);
			}
			if (n.size > 0) {
				this.WriteNamespacesToDisk(n, true);
			}
			this.m_nLastSuccessfulSyncTime = Date.now();
			this.m_nRequestFailures = 0;
			this.m_bUseLongerBackoffDelay = true;
			if (Array.from(this.m_mapDirtyKeys).some(([e, t]) => t.size > 0)) {
				SteamClient.Stats.RecordActivationEvent(
					"CloudStorage.Upload",
					"after-download",
				);
				this.ScheduleUpload(0);
			}
			for (let t of e.keys()) {
				this.m_mapChangeCallbacks.get(t)?.Dispatch(t, Array.from(e.get(t)));
			}
		}
		if (r != 1 && r != 80) {
			this.m_nRequestFailures++;
			SteamClient.Stats.RecordActivationEvent("CloudStorage.Download", "retry");
			this.ScheduleDownload("backoff");
		}
		return r;
	}
	GetConflictResolver(e, t) {
		switch (e) {
			case x2.InitializationOnly: {
				return () => null;
			}
			case x2.CustomMethod: {
				const e = t && this.m_mapCustomConflictResolutionMethods.get(t);
				if (e) {
					return e;
				}
				console.error(`Missing conflict resolution method ID='${t}'`);
			}
			case x2.LastWriteWins:
			default: {
				return (e, t) => (e.timestamp > t.timestamp ? e : null);
			}
		}
	}
	async UploadToServer() {
		this.m_uploadTimer = null;
		let e = 0;
		const t = o.w.Init(h);
		this.m_mapNamespaces.forEach((r, n) => {
			const i = this.m_mapDirtyKeys.get(n);
			if (i.size == 0) {
				return;
			}
			const a = t.Body().add_data();
			a.set_enamespace(n);
			a.set_version(r == M ? "0" : r);
			const s = this.m_mapStorage.get(n);
			i.forEach((t) => {
				const r = s.get(t);
				a.add_entries(r.ToProto());
				e = Math.max(e, r.timestamp);
			});
		});
		if (t.Body().data().length == 0) {
			console.warn("Dropping empty upload request.");
			return 29;
		}
		if (this.GetCurrentTimestamp() <= e) {
			this.m_nLatestEntryTimestamp++;
		}
		const r = await f.Upload(this.m_CMInterface.GetServiceTransport(), t);
		const n = r.GetEResult();
		if (n == 1) {
			const t = new Set();
			for (const n of r.Body().versions()) {
				const r = n.enamespace();
				const i = n.version();
				this.m_mapNamespaces.set(r, i);
				const a = this.m_mapDirtyKeys.get(r);
				const s = this.m_mapStorage.get(r);
				a.forEach((n) => {
					if (s.get(n).timestamp <= e) {
						s.get(n).version = i;
						a.delete(n);
						t.add(r);
					}
				});
				if (a.size > 0) {
					SteamClient.Stats.RecordActivationEvent(
						"CloudStorage.Upload",
						"second-batch",
					);
					this.ScheduleUpload();
				}
			}
			if (t.size > 0) {
				this.WriteNamespacesToDisk(t, true);
			}
			this.m_nRequestFailures = 0;
		} else if (n == 60) {
			SteamClient.Stats.RecordActivationEvent(
				"CloudStorage.Download",
				"conflict",
			);
			this.ScheduleDownload("immediate");
		}
		if (n != 1) {
			this.m_nRequestFailures++;
			SteamClient.Stats.RecordActivationEvent("CloudStorage.Upload", "retry");
			this.ScheduleUpload();
		}
		return n;
	}
	GetCurrentTimestamp() {
		let e = this.m_CMInterface.GetServerRTime32();
		if (e < this.m_nLatestEntryTimestamp) {
			e = this.m_nLatestEntryTimestamp;
		} else {
			this.m_nLatestEntryTimestamp = e;
		}
		return e;
	}
}
export let Jq;
export var x2;
Cg([a.XI], N.prototype, "Init", null);
Cg([S.oI], N.prototype, "OnConnect", null);
Cg([S.oI], N.prototype, "OnChangeNotification", null);
Cg([S.oI], N.prototype, "ScheduleDownload", null);
Cg([S.oI], N.prototype, "DownloadFromServer", null);
Cg([S.oI], N.prototype, "GetConflictResolver", null);
Cg([S.oI], N.prototype, "UploadToServer", null);
((e) => {
	e[(e.k_EUserConfigStoreNamespaceInvalid = 0)] =
		"k_EUserConfigStoreNamespaceInvalid";
	e[(e.k_EUserConfigStoreNamespaceLibrary = 1)] =
		"k_EUserConfigStoreNamespaceLibrary";
})((Jq ||= {}));
((e) => {
	e.LastWriteWins = "last-write";
	e.CustomMethod = "custom";
	e.InitializationOnly = "initial";
})((x2 ||= {}));
class O {
	m_strKeyPrefix;
	m_cloudStorage;
	constructor(e, t) {
		Gn(this);
		this.m_cloudStorage = e;
		this.m_strKeyPrefix = t;
	}
	get mapInternal() {
		const e = new Map();
		const t = this.m_strKeyPrefix.length;
		this.m_cloudStorage.GetByPrefix(this.m_strKeyPrefix).forEach((r, n) => {
			e.set(n.slice(t), r);
		});
		return e;
	}
	OnChange(e) {
		mJ(
			() => this.mapInternal,
			(t) => e(),
		);
	}
	async StoreString(e, t, r, n) {
		return this.m_cloudStorage.StoreString(this.m_strKeyPrefix + e, t, r, n);
	}
	async StoreObject(e, t, r, n) {
		return this.m_cloudStorage.StoreObject(this.m_strKeyPrefix + e, t, r, n);
	}
	GetObject(e) {
		const t = this.get(e);
		if (t) {
			return JSON.parse(t);
		} else {
			return null;
		}
	}
	clear(e, t) {
		this.mapInternal.forEach((r, n) =>
			this.m_cloudStorage.RemoveObject(this.m_strKeyPrefix + n, e, t),
		);
	}
	delete(e, t, r) {
		return (
			!!this.has(e) &&
			(this.m_cloudStorage.RemoveObject(this.m_strKeyPrefix + e, t, r), true)
		);
	}
	entries() {
		return this.mapInternal.entries();
	}
	forEach(e, t) {
		for (const [r, n] of Array.from(this.entries())) {
			e.call(t, n, r, this);
		}
	}
	get(e) {
		return this.mapInternal.get(e);
	}
	has(e) {
		return this.mapInternal.has(e);
	}
	keys() {
		return this.mapInternal.keys();
	}
	set(e, t, r, n) {
		this.StoreString(e, t, r, n);
		return this;
	}
	get size() {
		return this.mapInternal.size;
	}
	values() {
		return this.mapInternal.values();
	}
	get [Symbol.toStringTag]() {
		return "CCloudStorageMap";
	}
	[Symbol.iterator]() {
		return this.entries();
	}
}
Cg(
	[
		EW({
			keepAlive: true,
			equals: a.m3.structural,
		}),
	],
	O.prototype,
	"mapInternal",
	null,
);
Cg([a.XI], O.prototype, "clear", null);
export class s7 extends s.P {
	static s_internalState = new N();
	m_eNamespace;
	static async ForNamespace(e) {
		const t = await s7.s_internalState.EnsureSubscribedToNamespace(e);
		if (t != 1) {
			throw new Error(t.toString());
		}
		const r = new s7();
		r.m_eNamespace = e;
		return r;
	}
	static async Init(e) {
		window.cloudStorageInternalState = s7.s_internalState;
		return s7.s_internalState.Init(e);
	}
	RegisterForChangeNotifications(e) {
		return s7.s_internalState.RegisterForChangeNotifications(
			this.m_eNamespace,
			e,
		);
	}
	Get(e) {
		return s7.s_internalState.Get(this.m_eNamespace, e);
	}
	GetMapForPrefix(e) {
		return new O(this, e);
	}
	GetByPrefix(e) {
		return s7.s_internalState.GetByPrefix(this.m_eNamespace, e);
	}
	async GetString(e) {
		return this.Get(e);
	}
	async GetObject(e) {
		const t = this.Get(e);
		if (t) {
			return JSON.parse(t);
		} else {
			return null;
		}
	}
	async StoreString(e, t, r, n) {
		const i = await s7.s_internalState.Upsert(this.m_eNamespace, e, t, r, n);
		if (i != 1) {
			throw new Error(i.toString());
		}
	}
	async StoreObject(e, t, r, n) {
		return this.StoreString(e, JSON.stringify(t), r, n);
	}
	async RemoveObject(e, t, r) {
		const n = await s7.s_internalState.Delete(this.m_eNamespace, e, t, r);
		if (n != 1) {
			throw new Error(n.toString());
		}
	}
	static RegisterCustomConflictResolutionMethod(e, t) {
		s7.s_internalState.RegisterCustomConflictResolutionMethod(e, t);
	}
}
function L(e) {
	return `U${w.iA.accountid}-${e}`;
}
async function z(e) {
	try {
		const t = window.localStorage.getItem(L(e));
		if (t) {
			return JSON.parse(t);
		}
	} catch {}
	return null;
}
async function x(e, t, r) {
	const n = JSON.stringify(t);
	if (r !== undefined && r < n.length) {
		return 54;
	} else {
		window.localStorage.setItem(L(e), n);
		return 1;
	}
}
window.cloudStorage = s7.ForNamespace;
