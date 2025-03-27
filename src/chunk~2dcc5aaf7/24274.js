import n, { n as n_1 } from "./26667.js";
import i, { jE } from "./3715.js";
import a from "./12176.js";
import s, { KV } from "./46382.js";
import o from "./89610.js";
import l from "./81383.js";
import "./54946.js";
import "./72476.js";
import c from "./3475.js";
import "./8573.js";
import "./63696.js";
function m(e) {
	return ["parentalsettings", e];
}
function u(e) {
	const t = e.applist_base.concat(e.applist_custom);
	return new Map(t.map((e) => [e.appid, e.is_allowed]));
}
export async function TW(e, t) {
	const r = a.w.Init(o.QG);
	r.Body().set_steamid(t);
	const n = await o.JL.GetParentalSettings(e, r);
	if (n.GetEResult() != 1) {
		throw new Error(`Error from GetParentalSettings: ${n.GetEResult()}`);
	}
	const i = n.Body().settings().toObject();
	if (!i.playtime_restrictions) {
		const e = {
			apply_playtime_restrictions: false,
			playtime_days: Array(7).fill({
				allowed_time_windows: BigInt(281474976710655).toString(),
				allowed_daily_minutes: 1440,
			}),
		};
		i.playtime_restrictions = e;
	}
	return {
		settings: i,
		mapAppsAllowed: u(i),
	};
}
export function Bf(e, t, r) {
	return {
		queryKey: m(t),
		queryFn: () => TW(e, t),
		placeholderData: {
			settings: undefined,
			mapAppsAllowed: undefined,
		},
		...r,
	};
}
export function EC(e, t, r) {
	if (!e) {
		return true;
	}
	if (!e.is_enabled) {
		return false;
	}
	if (t == c.uX || t == null) {
		return false;
	}
	if (!r) {
		return false;
	}
	if (t == c.JC) {
		return true;
	}
	const e_enabled_features = e.enabled_features;
	return !e_enabled_features || (e_enabled_features & (1 << t)) == 0;
}
export async function PG(e, t, r, n = {}) {
	const i = a.w.Init(o.U0);
	i.Body().set_steamid(t);
	i.Body().set_settings(l.Zc.fromObject(r));
	const { password, new_password, sessionid } = n;
	if (password) {
		i.Body().set_password(password);
	}
	if (new_password) {
		i.Body().set_new_password(password);
	}
	if (sessionid) {
		i.Body().set_sessionid(sessionid);
	}
	const u = await o.JL.SetParentalSettings(e, i);
	if (u.GetEResult() != 1) {
		throw new Error(
			`Error from SetParentalSettings: ${u.GetErrorMessage()} (${u.GetEResult()})`,
		);
	}
}
export function At(e) {
	const t = KV();
	const r = jE();
	return n_1({
		mutationFn: async (r) => await PG(t, e, r),
		onSuccess: (t, n) => {
			r.setQueryData(m(e), {
				settings: n,
				mapAppsAllowed: u(n),
			});
		},
	});
}
export function gB(e, t, r, i) {
	const l = KV();
	return n_1({
		mutationFn: async () => {
			if (t !== c.JC && t !== c.uX) {
				const r = a.w.Init(o.p2);
				r.Body().set_steamid(e);
				r.Body().set_features(1 << t);
				const n = await o.JL.RequestFeatureAccess(l, r);
				if (n.GetEResult() != 1) {
					throw {
						result: n.GetEResult(),
						message: `Error from RequestFeatureAccess: ${n.GetErrorMessage()} (${n.GetEResult()})`,
					};
				}
			}
		},
		onSuccess: r,
		onError: i,
	});
}
export function hn(e, t, r, i) {
	const c = KV();
	return n_1({
		mutationFn: async () => {
			const r = a.w.Init(o.hW);
			r.Body().set_steamid(e);
			r.Body().set_current_playtime_restrictions(l.lx.fromObject(t));
			const n = new Date();
			n.setHours(0, 0, 0, 0);
			n.setDate(n.getDate() + 1);
			r.Body().set_time_expires(n.getTime() / 1000);
			const i = await o.JL.RequestPlaytime(c, r);
			if (i.GetEResult() != 1) {
				throw {
					result: i.GetEResult(),
					message: `Error from RequestPlaytime: ${i.GetErrorMessage()} (${i.GetEResult()})`,
				};
			}
		},
		onSuccess: r,
		onError: i,
	});
}
