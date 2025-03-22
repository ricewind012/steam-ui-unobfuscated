var r = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./7470.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require("./90765.js");
function a(e, t) {
	let n = document.createElement("link");
	n.href = e;
	n.type = "text/css";
	n.rel = "stylesheet";
	let r = t.parentElement;
	r.insertBefore(n, t);
	r.removeChild(t);
}
var c = require("./3586.js");
var l = c;
var u = require("./26853.js");
var m = require("./72476.js");
var d = require(/*webcrack:missing*/ "./80986.js");
var h = require("./46108.js");
var p = require("./44846.js");
var g = require("./28987.js");
var f = require("./37905.js");
const _ = "steam-dev-configparams";
function w(e) {
	return e === "true" || (e !== "false" && (Number(e) || e));
}
var b = require("./92228.js");
var C = require("./75144.js");
var v = require("./42318.js");
var M = require("./46382.js");
var S = require("./52451.js");
var y = require("./88696.js");
var E = require("./49455.js");
var B = require("./91435.js");
var x = require("./24295.js");
var L = require("./72905.js");
const k = r.lazy(() =>
	Promise.all([require.e(8732), require.e(9858)]).then(
		require.bind(require, 26326),
	),
);
const R = r.lazy(() =>
	Promise.all([require.e(8732), require.e(9858), require.e(3714)]).then(
		require.bind(require, 26965),
	),
);
const I = "is-first-client-load";
export function Q() {
	return sessionStorage.getItem(I) !== "false";
}
function D() {
	return r.createElement(
		"div",
		{
			className: (0, o.A)(l.Container, l.PreloadThrobber),
		},
		r.createElement(u.t, {
			size: "xlarge",
			static: true,
		}),
		r.createElement(
			"div",
			{
				className: l.ThreeDots,
			},
			r.createElement("div", {
				className: (0, o.A)(l.Dot, l.Dot1),
			}),
			r.createElement("div", {
				className: (0, o.A)(l.Dot, l.Dot2),
			}),
			r.createElement("div", {
				className: (0, o.A)(l.Dot, l.Dot3),
			}),
		),
	);
}
function F(e) {
	const { cm: t } = e;
	let n = null;
	if (m.TS.IN_LOGIN || m.TS.IN_LOGIN_REFRESH) {
		n = r.createElement(
			r.Suspense,
			{
				fallback: r.createElement(D, null),
			},
			r.createElement(
				v.tH,
				null,
				r.createElement(
					L.A,
					{
						domain: "steamclient",
					},
					r.createElement(
						m.ss,
						{
							IN_DESKTOPUI: false,
							IN_GAMEPADUI: false,
							IN_VR: false,
						},
						r.createElement(
							B.EO,
							null,
							r.createElement(k, {
								cm: t,
							}),
						),
					),
				),
			),
		);
	} else {
		(0, E.w)(
			m.TS.IN_STEAMUI_SHARED_CONTEXT,
			"nosteamuisharedjscontext is no longer supported!",
		);
		n = r.createElement(
			r.Suspense,
			{
				fallback: null,
			},
			r.createElement(R, {
				cm: t,
			}),
		);
	}
	return r.createElement(
		C.s,
		{
			debug: true,
			steamUI: true,
		},
		r.createElement(
			O,
			{
				cm: t,
			},
			n,
		),
	);
}
function O(e) {
	const { cm: t, children: n } = e;
	const i = r.useCallback(() => t, [t]);
	const o = (0, S.bs)(() => new y.A());
	const a = (0, s.q3)(() => t.steamid.ConvertTo64BitString());
	const c = r.useMemo(
		() => ({
			useActiveAccount: () => a,
		}),
		[a],
	);
	return r.createElement(
		x.Rh,
		{
			value: c,
		},
		r.createElement(
			M.VQ,
			{
				useActiveCMInterface: i,
				useStorage: o,
			},
			n,
		),
	);
}
SteamClient._internal.RegisterForStyleChanges(function (e) {
	const t = "https://steamloopback.host/";
	let n = [];
	let r = document.querySelectorAll('link[rel="stylesheet"]');
	for (let i = 0; i < r.length; i++) {
		let s = r[i];
		let o = s.href;
		let a = "";
		if (o.startsWith(t)) {
			a = o.substr(27);
		}
		let c = a.indexOf("?");
		if (c >= 0) {
			a = a.substr(0, c);
		}
		a = decodeURI(a).replace(/\\/g, "/");
		for (let t of e) {
			if (a != t) {
				continue;
			}
			const e = a.startsWith("/") ? a : "/" + a;
			n.push({
				sheet: s,
				newAbsolute: e,
			});
			break;
		}
	}
	for (let e of n) {
		a(e.newAbsolute, e.sheet);
	}
});
(function () {
	window.cm = new b.ij();
	(function () {
		let e = "";
		if (
			["index.html", "sp.html"].some(
				(e) => window.location.pathname.indexOf(e) != -1,
			)
		) {
			e = window.location.search;
			sessionStorage.setItem(_, e);
			console.log("Storing new config params", e);
		} else {
			e = sessionStorage.getItem(_);
			console.log("Loading previous config params", e);
		}
		if (e) {
			const t = d.parse(e.slice(1));
			for (const e in t) {
				if (Object.getOwnPropertyNames(m.TS).indexOf(e) !== -1) {
					m.TS[e] = w(t[e]);
				} else if (Object.getOwnPropertyNames(m.iA).indexOf(e) !== -1) {
					m.iA[e] = w(t[e]);
				} else if (Object.getOwnPropertyNames(f.w).indexOf(e) !== -1) {
					f.w[e] = w(t[e]);
				} else {
					console.error("Got unknown config property", e);
				}
			}
			const n = (0, h.l4)();
			console.log("setting locale:", n);
			if (n) {
				document.documentElement.setAttribute("lang", n);
				h.pf.SetPreferredLocales([n]);
			}
		}
		if (m.TS.EREALM == g.TU.k_ESteamRealmUnknown) {
			m.TS.EREALM = (0, p.ID)(m.TS.LAUNCHER_TYPE)
				? g.TU.k_ESteamRealmChina
				: g.TU.k_ESteamRealmGlobal;
		}
	})();
	m.TS.IN_STEAMUI = true;
	(function () {
		let e = true;
		if (sessionStorage.getItem(I) && m.TS.CLIENT_SESSION > 0) {
			const t = 30;
			if (Date.now() / 1000 > m.TS.CLIENT_SESSION + t) {
				e = false;
			}
		}
		sessionStorage.setItem(I, e ? "true" : "false");
	})();
	const e = document.getElementById("root");
	i.H(e).render(
		r.createElement(F, {
			cm: window.cm,
		}),
	);
})();
