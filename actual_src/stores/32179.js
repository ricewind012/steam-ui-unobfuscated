import n, { Cg } from "./34629.js";
import i, { Gn, h5 } from "./89193.js";
import a, { q3 } from "./90095.js";
import s, { useMemo, useCallback } from "./63696.js";
import * as o from "./8573.js";
import * as l from "./51297.js";
import * as c from "./58663.js";
import * as m from "./48307.js";
import u, { I8 } from "./12176.js";
import d, { OI } from "./12251.js";
const c_Message = c.Message;
class p extends c_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.gameid) {
			m.Sg(p.M());
		}
		c_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				gameid: {
					n: 1,
					br: m.qM.readUint64String,
					bw: m.gp.writeUint64String,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= m.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return m.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return m.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new c.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return m.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new c.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		m.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new c.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAchievements_GetInfo_Request";
	}
}
class g extends c_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.achievements) {
			m.Sg(g.M());
		}
		c_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				achievements: {
					n: 1,
					c: h,
					r: true,
					q: true,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= m.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return m.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return m.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new c.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return m.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new c.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		m.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new c.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAchievements_GetInfo_Response";
	}
}
class h extends c_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.id) {
			m.Sg(h.M());
		}
		c_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				id: {
					n: 1,
					br: m.qM.readString,
					bw: m.gp.writeString,
				},
				name: {
					n: 2,
					br: m.qM.readString,
					bw: m.gp.writeString,
				},
				desc: {
					n: 3,
					br: m.qM.readString,
					bw: m.gp.writeString,
				},
				image_url_achieved: {
					n: 4,
					br: m.qM.readString,
					bw: m.gp.writeString,
				},
				image_url_not_achieved: {
					n: 5,
					br: m.qM.readString,
					bw: m.gp.writeString,
				},
				achieved: {
					n: 6,
					br: m.qM.readBool,
					bw: m.gp.writeBool,
				},
				unlock_time: {
					n: 7,
					br: m.qM.readUint32,
					bw: m.gp.writeUint32,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= m.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return m.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return m.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new c.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return m.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new c.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		m.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new c.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAchievements_GetInfo_Response_Info";
	}
}
let C;
function _(e, t) {
	return `${e}_${t}`;
}
((e) => {
	e.GetInfoHandler = {
		name: "Achievements.GetInfo#1",
		request: p,
		response: g,
	};
	e.GetInfo = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("Achievements.GetInfo#1", I8(p, e), g, {
				ePrivilege: 1,
				eClientExecutionSite: 2,
			});
		}
	};
	e.SendMsgGetInfo = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("Achievements.GetInfo#1", I8(p, e), g, {
				ePrivilege: 1,
				eClientExecutionSite: 2,
			});
		}
	};
})((C ||= {}));
class f {
	constructor() {
		Gn(this);
	}
	m_mapPlayerAchievements = new Map();
	m_mapInflightAchievementsRequests = new Map();
	m_mapMyAchievements = new Map();
	m_mapInflightMyAchievementsRequests = new Map();
	m_mapAchievementsByID = new Map();
	m_mapGlobalAchievements = new Map();
	async Init() {
		SteamClient.Apps.RegisterForAchievementChanges(this.OnAchievementChange);
	}
	GetPlayerAchievements(e, t) {
		if (!e || !t) {
			return {};
		}
		const r = _(e, t);
		if (!this.m_mapPlayerAchievements.has(r)) {
			this.m_mapPlayerAchievements.set(r, {
				loading: true,
			});
			this.LoadFriendAchievements(e, t);
		}
		return this.m_mapPlayerAchievements.get(r);
	}
	async LoadFriendAchievements(e, t) {
		const r = o.b.InitFromAccountID(t);
		const n = _(e, t);
		this.m_mapInflightAchievementsRequests.set(n, true);
		const a = await SteamClient.Apps.GetFriendAchievementsForApp(
			e.toString(),
			r.ConvertTo64BitString(),
		);
		let s;
		if (a.result !== 1) {
			console.warn(`Failed to GetUserStats: ${a.result} "${a.message}"`);
			s = {
				error: a.result,
			};
		} else {
			s = {
				data: y(a.data),
			};
		}
		h5(() => {
			this.m_mapPlayerAchievements.set(n, s);
			this.m_mapInflightAchievementsRequests.delete(n);
		});
	}
	OnAchievementChange(e) {
		const t = l.ke.deserializeBinary(e).toObject();
		const r = t?.appid ?? 0;
		if (r != 0) {
			if (
				this.m_mapMyAchievements.has(r) ||
				this.m_mapInflightMyAchievementsRequests.has(r)
			) {
				this.LoadMyAchievements(r);
			}
		} else {
			console.error("Received invalid appid in OnAchievementChange");
		}
	}
	GetMyAchievements(e) {
		if (!this.m_mapMyAchievements.has(e)) {
			this.m_mapMyAchievements.set(e, {
				loading: true,
			});
			this.LoadMyAchievements(e);
		}
		return this.m_mapMyAchievements.get(e);
	}
	GetMyAchievementsByID(e) {
		if (!this.m_mapAchievementsByID.has(e)) {
			this.m_mapAchievementsByID.set(e, {
				loading: true,
			});
			C.GetInfo({
				gameid: e.toString(),
			}).then((t) => {
				if (t.GetEResult() == 1) {
					let r = new Map();
					for (const e of t.Body().achievements()) {
						r.set(e.id(), e);
					}
					this.m_mapAchievementsByID.set(e, {
						data: r,
					});
				} else {
					this.m_mapAchievementsByID.set(e, {
						error: t.GetEResult(),
					});
				}
			});
		}
		return this.m_mapAchievementsByID.get(e);
	}
	async LoadMyAchievements(e) {
		this.m_mapInflightMyAchievementsRequests.set(e, true);
		const t = await SteamClient.Apps.GetMyAchievementsForApp(e.toString());
		let r;
		let n;
		if (t.result !== 1) {
			console.warn(
				`Failed to GetMyAchievementsForApp: ${t.result} "${t.message}"`,
			);
			r = n = {
				error: t.result,
			};
		} else {
			r = {
				data: S(t.data),
			};
			n = {
				data: w(t.data),
			};
		}
		h5(() => {
			this.m_mapMyAchievements.set(e, r);
			this.m_mapGlobalAchievements.set(e, n);
			this.m_mapInflightMyAchievementsRequests.delete(e);
		});
	}
	GetGlobalAchievements(e) {
		if (!this.m_mapGlobalAchievements.has(e)) {
			this.m_mapGlobalAchievements.set(e, {
				loading: true,
			});
			this.LoadMyAchievements(e);
		}
		return this.m_mapGlobalAchievements.get(e);
	}
	FilterMap(e, t) {
		return new Map(Array.from(e).filter((e) => t(e[1])));
	}
	ResetFailures() {
		this.m_mapMyAchievements = this.FilterMap(
			this.m_mapMyAchievements,
			(e) => !e.error,
		);
		this.m_mapGlobalAchievements = this.FilterMap(
			this.m_mapGlobalAchievements,
			(e) => !e.error,
		);
		this.m_mapPlayerAchievements = this.FilterMap(
			this.m_mapPlayerAchievements,
			(e) => !e.error,
		);
	}
}
Cg([i.sH], f.prototype, "m_mapPlayerAchievements", undefined);
Cg([i.sH], f.prototype, "m_mapMyAchievements", undefined);
Cg([i.sH], f.prototype, "m_mapAchievementsByID", undefined);
Cg([i.sH], f.prototype, "m_mapGlobalAchievements", undefined);
Cg([i.XI.bound], f.prototype, "OnAchievementChange", null);
export const p6 = new f();
function y(e) {
	const t = {
		achieved: {},
		unachieved: {},
	};
	e.rgAchievements.forEach((e) => {
		if (e.bAchieved) {
			t.achieved[e.strID] = e;
		} else {
			t.unachieved[e.strID] = e;
		}
	});
	return t;
}
function S(e) {
	const t = {
		achieved: {},
		unachieved: {},
		hidden: {},
	};
	e.rgAchievements.forEach((e) => {
		if (e.bAchieved) {
			t.achieved[e.strID] = e;
		} else if (e.bHidden) {
			t.hidden[e.strID] = e;
		} else {
			t.unachieved[e.strID] = e;
		}
	});
	return t;
}
function w(e) {
	const t = {};
	e.rgAchievements.forEach((e) => {
		if (typeof e.flAchieved == "number") {
			t[e.strID] = e.flAchieved;
		}
	});
	return t;
}
export function kn(e, t) {
	return q3(() => p6.GetPlayerAchievements(e, t));
}
export function ex(e) {
	return q3(() => p6.GetMyAchievements(e));
}
export function Hc(e) {
	return q3(() => p6.GetGlobalAchievements(e));
}
export function hj(e, t) {
	const r = kn(e, t);
	const n = ex(e);
	const i = Hc(e);
	return useMemo(() => {
		const { data: e, loading: t, error: a } = r;
		const { data: s, loading: o, error: l } = n;
		const { data: c, loading: m, error: u } = i;
		if (t || o || o || m) {
			return {
				loading: true,
			};
		}
		if (a || l || l || u) {
			return {
				error: a || l || l || u,
			};
		}
		const d = {
			achieved: {},
			hiddenAchieved: {},
			unachieved: {},
			hiddenUnachieved: {},
		};
		Object.keys(e.achieved).forEach((t) => {
			const r = e.achieved[t];
			const n = c[t];
			if (s.hidden[t]) {
				d.hiddenAchieved[t] = {
					...r,
					flGlobalAchieved: n,
					bHidden: true,
				};
			} else if (s.achieved[t]) {
				d.achieved[t] = {
					...r,
					flGlobalAchieved: n,
					bHidden: false,
					rtCurrentUserUnlock: s.achieved[t].rtUnlocked,
					flCurrentUserCurrentProgress: s.achieved[t].flCurrentProgress,
				};
			} else {
				d.achieved[t] = {
					...r,
					bHidden: false,
					flGlobalAchieved: n,
					flCurrentUserCurrentProgress: s.unachieved[t].flCurrentProgress,
				};
			}
		});
		Object.keys(e.unachieved).forEach((t) => {
			const r = e.unachieved[t];
			const n = c[t];
			if (s.hidden[t]) {
				d.hiddenUnachieved[t] = {
					...r,
					bHidden: true,
					flGlobalAchieved: n,
				};
			} else if (s.achieved[t]) {
				d.unachieved[t] = {
					...r,
					bHidden: false,
					flGlobalAchieved: n,
					rtCurrentUserUnlock: s.achieved[t].rtUnlocked,
					flCurrentUserCurrentProgress: s.achieved[t].flCurrentProgress,
				};
			} else {
				d.unachieved[t] = {
					...r,
					bHidden: false,
					flGlobalAchieved: n,
					flCurrentUserCurrentProgress: s.unachieved[t].flCurrentProgress,
				};
			}
		});
		return {
			data: d,
		};
	}, [n, r, i]);
}
export function dd() {
	return true;
}
export function w$() {
	return useCallback(() => p6.ResetFailures(), []);
}
export function Np(e, t) {
	let r = e.achieved[t];
	return r?.bAchieved;
}
export function vN(e, t) {
	for (let r of Object.values(e.achieved)) {
		if (r.strName == t) {
			return r.bAchieved;
		}
	}
	return false;
}
