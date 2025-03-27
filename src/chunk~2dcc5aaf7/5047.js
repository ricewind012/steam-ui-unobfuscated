import n, { Cg } from "./34629.js";
import i from "./83957.js";
import { useState, useEffect } from "./63696.js";
import { H } from "./16154.js";
import l from "./79769.js";
import c, { hL } from "./52451.js";
import m from "./72476.js";
const a = i;
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
			const r = `${m.TS.STORE_BASE_URL}saleaction/ajaxgetusergiveawayregistration`;
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
			t = H(i);
		} catch (e) {
			t = H(e);
		}
		console.error(
			`CGiveawayRegistrationStore.InternalLoadRegistration failed: on giveawayName ${e} error: ${t?.strErrorMsg}`,
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
			const r = `${m.TS.STORE_BASE_URL}saleaction/ajaxupdateusergiveawayregistration`;
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
			t = H(i);
		} catch (e) {
			t = H(e);
		}
		console.error(
			`CGiveawayRegistrationStore.InternalCreateRegistration failed: on giveawayName ${e} error: ${t?.strErrorMsg}`,
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
	const [t, setT] = useState(u.Get().GetRegistration(e));
	useEffect(() => {
		if (t === undefined) {
			u.Get().LoadRegistration(e).then(setT);
		}
	}, [e, t]);
	hL(u.Get().GetRegistrationChangeCallback(e), setT);
	return t;
}
export function Q() {
	return {
		fnCreateRegistration: u.Get().CreateRegistration,
	};
}
Cg([c.oI], u.prototype, "CreateRegistration", null);
