var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require("./49171.js");
var s = require("./13656.js");
var o = require(/*webcrack:missing*/ "./11131.js");
var l = require("./18869.js");
var c = require("./58437.js");
var m = require("./79112.js");
var u = require("./37449.js");
var d = require("./61175.js");
var A = require("./96593.js");
var p = require(/*webcrack:missing*/ "./10975.js");
const g = {
	AboutSteam: {
		path: "open/about",
	},
	OpenFriends: {
		path: "open/friends",
	},
};
function h() {
	const { ownerWindow: e } = (0, o.R7)();
	return n.useCallback(
		(t, r) => {
			const n = (function (e, t) {
				let r = "steam://" + g[e].path;
				for (const e in t) {
					r += "/" + t[e];
				}
				return r;
			})(t, r);
			e.location.href = n;
		},
		[e],
	);
}
var C = require("./96680.js");
var _ = require("./40451.js");
export function b(e, t) {
	const { history: r, navigateToRoute: n, type: a } = e;
	const { beforeNavigate: o, afterNavigate: l, getAdditionalEntries: m } = t;
	const g = n;
	const h = {
		...e,
		navigate: g,
	};
	delete h.navigateToRoute;
	const C = {
		Home: (e = {}, t = {}) => {
			const { partnerEvent: n } = e;
			let a = n ? (0, c.KV)(n.appid, n.gid) : {};
			if ((0, i.B6)(r.location.pathname, u.B.Library.Home())) {
				a = {
					...(r.location.state && typeof r.location.state == "object"
						? r.location.state
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
			const { strCollectionId: n, gidPartnerEvent: i } = t;
			const s = A.tw.GetAppOverviewByAppID(e);
			if (!s) {
				return;
			}
			if (s.app_type == 256) {
				return;
			}
			if (a === "gamepad" || a === "gamepadoverlay") {
				p.eZ.PlayNavSound(p.PN.IntoGameDetail);
			}
			let o = {
				strCollectionId: n,
			};
			if (i) {
				o = {
					...o,
					...(0, c.KV)(e, i),
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
		AppProperties: (0, s.Ki)(a, h),
		Console: (e) => g(u.B.Console(), e),
		...(m ? m(h) : {}),
	};
	Object.keys(C).forEach((e) => {
		const t = C[e];
		var r;
		if (typeof t == "function") {
			r = t;
			C[e] = (...e) => {
				if (o) {
					o();
				}
				r(...e);
				if (l) {
					l();
				}
			};
		}
	});
	return C;
}
export function x(e) {
	const { buildNavigator: t, type: r, children: s } = e;
	const c = (0, i.W6)();
	const u = (0, l.tn)();
	const { ownerWindow: d } = (0, o.R7)();
	const A = (0, C.$2)();
	const p = h();
	const g = (0, _.d)();
	const f = (0, n.useMemo)(
		() =>
			t({
				history: c,
				navigateToRoute: u,
				ownerWindow: d,
				instance: A,
				type: r,
				runSteamProtocolAction: p,
				openNamedDialog: g,
			}),
		[t, c, u, d, A, r, p, g],
	);
	(0, n.useEffect)(() => {
		a.z.SetNavigator(f);
		A?.SetNavigator(f);
	}, [f, A]);
	return n.createElement(
		m.O0,
		{
			value: f,
		},
		s,
	);
}
