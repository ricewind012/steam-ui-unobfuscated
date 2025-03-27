import n, { useMemo, useEffect } from "./63696.js";
import i, { B6, W6 } from "./49519.js";
import a from "./49171.js";
import s, { Ki } from "./13656.js";
import o, { R7 } from "./11131.js";
import l, { tn } from "./18869.js";
import c, { KV } from "./58437.js";
import m from "./79112.js";
import u from "./37449.js";
import d from "./61175.js";
import A from "./96593.js";
import p from "./10975.js";
import C, { $2 } from "./96680.js";
import { d as d_1 } from "./40451.js";
const g = {
	AboutSteam: {
		path: "open/about",
	},
	OpenFriends: {
		path: "open/friends",
	},
};
function h() {
	const { ownerWindow } = R7();
	return n.useCallback(
		(t, r) => {
			const n = ((e, t) => {
				let r = `steam://${g[e].path}`;
				for (const e in t) {
					r += `/${t[e]}`;
				}
				return r;
			})(t, r);
			ownerWindow.location.href = n;
		},
		[ownerWindow],
	);
}
export function b(e, t) {
	const { history, navigateToRoute, type } = e;
	const { beforeNavigate, afterNavigate, getAdditionalEntries } = t;
	const g = navigateToRoute;
	const h = {
		...e,
		navigate: g,
	};
	delete h.navigateToRoute;
	const C = {
		Home: (e = {}, t = {}) => {
			const { partnerEvent } = e;
			let a = partnerEvent ? KV(partnerEvent.appid, partnerEvent.gid) : {};
			if (B6(history.location.pathname, u.B.Library.Home())) {
				a = {
					...(history.location.state &&
					typeof history.location.state == "object"
						? history.location.state
						: {}),
					...a,
				};
			}
			g(u.B.Library.Home(), {
				...t,
				state: a,
			});
			d.n6.ExitSearch();
			d.n6.SelectGameListView(1);
		},
		App: (e, t = {}, r = {}) => {
			const { strCollectionId, gidPartnerEvent } = t;
			const s = A.tw.GetAppOverviewByAppID(e);
			if (!s) {
				return;
			}
			if (s.app_type == 256) {
				return;
			}
			if (type === "gamepad" || type === "gamepadoverlay") {
				p.eZ.PlayNavSound(p.PN.IntoGameDetail);
			}
			let o = {
				strCollectionId: strCollectionId,
			};
			if (gidPartnerEvent) {
				o = {
					...o,
					...KV(e, gidPartnerEvent),
				};
			}
			g(u.B.Library.App.Root(e), {
				...r,
				state: o,
			});
		},
		MyAchievements: (e) => {
			g(u.B.Library.App.Achievements.My.Individual(e));
		},
		GlobalAchievements: (e) => {
			g(u.B.Library.App.Achievements.My.Global(e));
		},
		AllCollections: (e) => g(u.B.Library.AllCollections(), e),
		Collection: (e, t) => g(u.B.Library.Collection(e), t),
		Downloads: (e) => g(u.B.Downloads(), e),
		AppProperties: Ki(type, h),
		Console: (e) => g(u.B.Console(), e),
		...(getAdditionalEntries ? getAdditionalEntries(h) : {}),
	};
	Object.keys(C).forEach((e) => {
		const C_e = C[e];
		let r;
		if (typeof C_e == "function") {
			r = C_e;
			C[e] = (...e) => {
				if (beforeNavigate) {
					beforeNavigate();
				}
				r(...e);
				if (afterNavigate) {
					afterNavigate();
				}
			};
		}
	});
	return C;
}
export function x(e) {
	const { buildNavigator, type, children } = e;
	const c = W6();
	const u = tn();
	const { ownerWindow } = R7();
	const A = $2();
	const p = h();
	const g = d_1();
	const f = useMemo(
		() =>
			buildNavigator({
				history: c,
				navigateToRoute: u,
				ownerWindow: ownerWindow,
				instance: A,
				type: type,
				runSteamProtocolAction: p,
				openNamedDialog: g,
			}),
		[buildNavigator, c, u, ownerWindow, A, type, p, g],
	);
	useEffect(() => {
		a.z.SetNavigator(f);
		A?.SetNavigator(f);
	}, [f, A]);
	return <m.O0 value={f}>{children}</m.O0>;
}
