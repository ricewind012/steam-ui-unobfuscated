var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./16154.js");
var l = require(/*webcrack:missing*/ "./79769.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require(/*webcrack:missing*/ "./72476.js");
class u {
	m_mapRegistrations = new Map();
	m_mapLoadPromises = new Map();
	m_mapCreatePromises = new Map();
	m_listChangeCallback = new Map();
	GetRegistration(e) {
		return this.m_mapRegistrations.get(e);
	}
	GetRegistrationChangeCallback(e) {
		if (!this.m_listChangeCallback.has(e)) {
			this.m_listChangeCallback.set(e, new l.lu());
		}
		return this.m_listChangeCallback.get(e);
	}
	async LoadRegistration(e) {
		if (!this.m_mapLoadPromises.has(e)) {
			this.m_mapLoadPromises.set(e, this.InternalLoadRegistration(e));
		}
		return this.m_mapLoadPromises.get(e);
	}
	async InternalLoadRegistration(e) {
		let t = null;
		try {
			const r =
				m.TS.STORE_BASE_URL + "saleaction/ajaxgetusergiveawayregistration";
			const n = {
				giveaway_name: e,
				sessionid: m.TS.SESSIONID,
			};
			const i = await a.get(r, {
				params: n,
				withCredentials: true,
			});
			if (i?.status == 200 && i?.data?.success == 1 && i?.data?.registration) {
				this.m_mapRegistrations.set(e, i?.data?.registration);
				this.GetRegistrationChangeCallback(e).Dispatch(i?.data?.registration);
				return i?.data?.registration;
			}
			t = (0, o.H)(i);
		} catch (e) {
			t = (0, o.H)(e);
		}
		console.error(
			"CGiveawayRegistrationStore.InternalLoadRegistration failed: on giveawayName " +
				e +
				" error: " +
				t?.strErrorMsg,
			t,
		);
		return {
			registered: false,
		};
	}
	CreateRegistration(e) {
		if (!this.m_mapCreatePromises.has(e)) {
			this.m_mapCreatePromises.set(e, this.InternalCreateRegistration(e));
		}
		return this.m_mapCreatePromises.get(e);
	}
	async InternalCreateRegistration(e) {
		let t = null;
		try {
			const r =
				m.TS.STORE_BASE_URL + "saleaction/ajaxupdateusergiveawayregistration";
			const n = {
				giveaway_name: e,
				sessionid: m.TS.SESSIONID,
			};
			const i = await a.get(r, {
				params: n,
				withCredentials: true,
			});
			if (i?.status == 200 && i?.data?.success == 1 && i?.data?.registration) {
				this.m_mapRegistrations.set(e, i?.data?.registration);
				this.GetRegistrationChangeCallback(e).Dispatch(i?.data?.registration);
				return i?.data?.registration;
			}
			t = (0, o.H)(i);
		} catch (e) {
			t = (0, o.H)(e);
		}
		console.error(
			"CGiveawayRegistrationStore.InternalCreateRegistration failed: on giveawayName " +
				e +
				" error: " +
				t?.strErrorMsg,
			t,
		);
		return {
			registered: false,
		};
	}
	static s_Singleton;
	static Get() {
		if (!u.s_Singleton) {
			u.s_Singleton = new u();
			u.s_Singleton.Init();
			if (m.TS.WEB_UNIVERSE == "dev") {
				window.g_SaleMiniGameItemDefStore = u.s_Singleton;
			}
		}
		return u.s_Singleton;
	}
	constructor() {}
	Init() {}
}
export function h(e) {
	const [t, r] = (0, s.useState)(u.Get().GetRegistration(e));
	(0, s.useEffect)(() => {
		if (t === undefined) {
			u.Get().LoadRegistration(e).then(r);
		}
	}, [e, t]);
	(0, c.hL)(u.Get().GetRegistrationChangeCallback(e), r);
	return t;
}
export function Q() {
	return {
		fnCreateRegistration: u.Get().CreateRegistration,
	};
}
(0, n.Cg)([c.oI], u.prototype, "CreateRegistration", null);
