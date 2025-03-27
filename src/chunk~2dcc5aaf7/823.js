import n, { Cg } from "./34629.js";
import i, { m as m_1 } from "./39039.js";
import a from "./83957.js";
import o, { Gn, h5 } from "./89193.js";
import l from "./63696.js";
import c, { Tc } from "./72476.js";
import u from "./8573.js";
import { I8 } from "./12176.js";
import A from "./58663.js";
import p from "./48307.js";
const s = a;
class m {
	m_clanSteamID;
	m_appidList = new Array();
	m_strName = "";
	m_strAvatarURLFullSize = "";
	m_strTagLineLoc = "";
	m_nFollowers = 0;
	m_strVanity = "";
	m_webLink = undefined;
	m_promise;
	m_bIsLoaded = false;
	m_bIsHidden = false;
	m_clanAccountFlags = 0;
	constructor(e) {
		Gn(this);
		this.m_clanSteamID = e;
	}
	Initialize(e) {
		this.m_strName = e.name || "";
		this.m_strAvatarURLFullSize =
			e.avatar_url_full_size ||
			"https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg";
		this.m_strTagLineLoc = e.tag_line_localized || "";
		this.m_nFollowers = e.followers || 0;
		this.m_strVanity = e.vanity || undefined;
		this.m_webLink = e.weblink;
		this.m_bIsHidden = e.hidden || false;
		this.m_clanAccountFlags = e.clan_account_flags ?? 0;
		if (e.appids) {
			e.appids.forEach((e) => this.m_appidList.push(e));
		}
		this.m_bIsLoaded = true;
	}
	GetCreatorHomeIdentifier() {
		return {
			name: this.m_strName,
			clan_account_id: this.m_clanSteamID.GetAccountID(),
			type: "developer",
			hidden: this.m_bIsHidden,
		};
	}
	BIsPartnerEventEditorEnabled() {
		return Boolean(this.m_clanAccountFlags & 8);
	}
	BHasClanAccountFlagSet(e) {
		return Boolean(this.m_clanAccountFlags & e);
	}
	BIsLoaded() {
		return this.m_bIsLoaded;
	}
	GetClanSteamID() {
		return this.m_clanSteamID;
	}
	GetClanAccountID() {
		return this.m_clanSteamID.GetAccountID();
	}
	GetAppIDList() {
		return this.m_appidList;
	}
	GetName() {
		return this.m_strName;
	}
	GetAvatarURLFullSize() {
		return this.m_strAvatarURLFullSize;
	}
	GetTagLine() {
		return this.m_strTagLineLoc;
	}
	GetNumFollowers() {
		return this.m_nFollowers;
	}
	BIsHidden() {
		return this.m_bIsHidden;
	}
	GetCreatorHomeURL(e) {
		if (this.m_strVanity) {
			switch (e) {
				case "publisher": {
					return `${c.TS.STORE_BASE_URL}publisher/${this.m_strVanity}/`;
				}
				case "franchise": {
					return `${c.TS.STORE_BASE_URL}franchise/${this.m_strVanity}/`;
				}
			}
			return `${c.TS.STORE_BASE_URL}developer/${this.m_strVanity}/`;
		}
		return `${
			c.TS.STORE_BASE_URL
		}curator/${this.m_clanSteamID.GetAccountID()}/`;
	}
	BHasWebLink() {
		return this.m_webLink !== undefined;
	}
	GetWebLink() {
		return this.m_webLink;
	}
	GetVanityString() {
		return this.m_strVanity;
	}
	AdjustFollower(e) {
		this.m_nFollowers += e;
	}
	async EnablePartnerEventEditorFlag() {
		if (!this.BIsPartnerEventEditorEnabled()) {
			await this.UpdateGroupFlagsFeature([2, 8], true);
		}
	}
	async UpdateGroupFlagsFeature(e, t) {
		let r = `${c.TS.PARTNER_BASE_URL}sales/ajaxupdateclanaccountflags`;
		let n = this.m_clanAccountFlags;
		e.forEach((e) => {
			if (t) {
				n |= e;
			} else {
				n &= ~e;
			}
		});
		if (n == this.m_clanAccountFlags) {
			return;
		}
		let i = new Array();
		if (n & 1) {
			i.push(1);
		}
		if (n & 8) {
			i.push(8);
		}
		if (n & 2) {
			i.push(2);
		}
		if (n & 4) {
			i.push(4);
		}
		if (n & 16) {
			i.push(16);
		}
		if (n & 32) {
			i.push(32);
		}
		if (n & 64) {
			i.push(64);
		}
		let a = new FormData();
		a.append("sessionid", c.TS.SESSIONID);
		a.append("clan_account_id", this.GetClanAccountID().toString());
		a.append("accountflags", JSON.stringify(i));
		let o = await s.post(r, a);
		if (o && o.status == 200 && o.data.success == 1) {
			this.m_clanAccountFlags = n;
		}
	}
}
Cg([o.sH], m.prototype, "m_appidList", undefined);
Cg([o.sH], m.prototype, "m_nFollowers", undefined);
Cg([o.sH], m.prototype, "m_clanAccountFlags", undefined);

const { Message } = A;

class h extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.clan_account_id) {
			p.Sg(h.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				clan_account_id: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				appid_list: {
					n: 2,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= p.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CDeveloperPageToApps";
	}
}
class _ extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.clan_account_ids) {
			p.Sg(_.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				clan_account_ids: {
					n: 1,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
				},
				ignore_dlc: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= p.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
	}
}
class f extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.results) {
			p.Sg(f.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				results: {
					n: 1,
					c: h,
					r: true,
					q: true,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= p.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
	}
}
let b;
((e) => {
	e.GetDevPageAllAppsLinked = (e, t) =>
		e.SendMsg("StoreCatalog.GetDevPageAllAppsLinked#1", I8(_, t), f, {
			ePrivilege: 1,
		});
})((b ||= {}));
class y {
	constructor() {
		Gn(this);
	}
	m_mapClanToCreatorHome = new Map();
	m_mapAppToCreatorIDList = new Map();
	m_bLoadedFromConfig = false;
	LazyInit() {
		if (!this.m_bLoadedFromConfig) {
			let e = Tc("creatorhome", "application_config");
			if (this.ValidateStoreDefault(e)) {
				e.forEach((e) => {
					let t = Number(e.creator_clan_id);
					let r = u.b.InitFromClanID(t);
					let n = new m(r);
					n.Initialize(e);
					n.m_promise = y.GetAsPromise(n);
					this.m_mapClanToCreatorHome.set(t, n);
				});
			}
			let t = Tc("creatorhomeforapp", "application_config");
			if (this.ValidateStoreDefaultAppList(t)) {
				t.forEach((e) => {
					if (e.appid !== undefined) {
						if (!this.m_mapAppToCreatorIDList.has(e.appid)) {
							this.m_mapAppToCreatorIDList.set(e.appid, new Array());
						}
						this.m_mapAppToCreatorIDList.get(e.appid).push(e);
					}
				});
			}
			this.m_bLoadedFromConfig = true;
		}
	}
	static async GetAsPromise(e) {
		return e;
	}
	ValidateStoreDefault(e) {
		const t = e;
		return (
			!!t &&
			!!Array.isArray(t) &&
			!!(t.length > 0) &&
			typeof t[0] == "object" &&
			typeof t[0].name == "string" &&
			(typeof t[0].creator_clan_id == "string" ||
				typeof t[0].creator_clan_id == "number")
		);
	}
	ValidateStoreDefaultAppList(e) {
		const t = e;
		return (
			!!t &&
			!!Array.isArray(t) &&
			!!(t.length > 0) &&
			typeof t[0] == "object" &&
			typeof t[0].clan_account_id == "number" &&
			t[0].clan_account_id > 0 &&
			typeof t[0].appid == "number" &&
			t[0].appid > 0
		);
	}
	BHasCreatorHomeLoaded(e) {
		return (
			this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
			this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
		);
	}
	GetCreatorHome(e) {
		return this.m_mapClanToCreatorHome.get(e.GetAccountID());
	}
	GetCreatorHomeByID(e) {
		return this.m_mapClanToCreatorHome.get(e.clan_account_id);
	}
	async LoadCreatorHome(e, t) {
		this.LazyInit();
		if (!this.m_mapClanToCreatorHome.has(e.GetAccountID())) {
			let r = new m(e);
			r.m_promise = this.InternalCreatorHome(r, t);
			await r.m_promise;
			this.m_mapClanToCreatorHome.set(e.GetAccountID(), r);
		}
		return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
	}
	async InternalCreatorHome(e, t) {
		let r = {
			get_appids: true,
			l: c.TS.LANGUAGE,
			origin: self.origin,
		};
		let n = `${
			c.TS.STORE_BASE_URL
		}curator/${e.GetClanAccountID()}/ajaxgetcreatorhomeinfo`;
		let i = await s.get(n, {
			params: r,
			cancelToken: t && t.token,
		});
		e.Initialize(i.data);
		return e;
	}
	async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
		this.LazyInit();
		if (!this.m_mapAppToCreatorIDList.has(e)) {
			let r = {
				appid: e,
			};
			let n = `${c.TS.STORE_BASE_URL}events/ajaxgetcreatorhomeidforapp`;
			let i = await s.get(n, {
				params: r,
				cancelToken: t && t.token,
				withCredentials: true,
			});
			this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
		}
		return this.m_mapAppToCreatorIDList.get(e);
	}
	async SearchCreatorHomeStore(e, t, r) {
		let n = `${c.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`;
		let i = {
			term: e.replace(" ", "+"),
			require_creator: t,
			cc: c.TS.COUNTRY,
			l: c.TS.LANGUAGE,
			origin: self.origin,
		};
		let a = new Array();
		const l = await s.get(n, {
			params: i,
			cancelToken: r.token,
		});
		if (l.data.curators) {
			h5(() => {
				l.data.curators.forEach((e) => {
					if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
						let t = u.b.InitFromClanID(e.creator_clan_id);
						let r = new m(t);
						r.Initialize(e);
						this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
					}
					a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
				});
			});
		}
		return a;
	}
	GetCreatorHomeListForAppIncludeHidden(e) {
		if (this.m_mapAppToCreatorIDList.has(e)) {
			return this.m_mapAppToCreatorIDList.get(e);
		} else {
			return [];
		}
	}
}
Cg([o.sH], y.prototype, "m_mapClanToCreatorHome", undefined);
Cg([o.sH], y.prototype, "m_mapAppToCreatorIDList", undefined);
Cg([o.XI], y.prototype, "LazyInit", null);
export const pF = new y();
export function FV(e) {
	const t = u.b.InitFromClanID(e);
	const [r, n] = l.useState(pF.GetCreatorHome(t));
	const a = m_1("useCreatorHome");
	l.useEffect(() => {
		const t = u.b.InitFromClanID(e);
		if (pF.BHasCreatorHomeLoaded(t)) {
			if (r) {
				if (r.GetClanAccountID() != e) {
					n(pF.GetCreatorHome(t));
				}
			} else {
				n(pF.GetCreatorHome(t));
			}
		} else {
			pF.LoadCreatorHome(t).then(() => {
				if (!a?.token?.reason) {
					n(pF.GetCreatorHome(t));
				}
			});
		}
	}, [a?.token?.reason, e, r]);
	return r;
}
window.g_CreatorHomeStore = pF;
