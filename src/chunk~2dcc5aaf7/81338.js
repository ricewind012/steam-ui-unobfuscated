var n = require("./18057.js");
var i = require("./99731.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./49519.js");
var l = require("./18052.js");
var c = require(/*webcrack:missing*/ "./83599.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./51076.js");
var d = require(/*webcrack:missing*/ "./72476.js");
var A = require("./64581.js");
var p = require("./8436.js");
var g = p;
var h = require("./93966.js");
var C = require("./33572.js");
var _ = require("./96680.js");
var f = require(/*webcrack:missing*/ "./42318.js");
const b = new c.wd("BrowserBackstack").Debug;
export function N() {
	return s.createElement(
		f.tH,
		null,
		s.createElement(S, null),
		s.createElement(w, null),
		s.createElement(A.B8, null),
	);
}
function S() {
	const e = (0, _.$2)();
	if ((0, u.OU)(n.BV.GamepadUI.SteamWeb())) {
		return s.createElement(G, {
			browser: e.GetStoreBrowser(),
			path: n.BV.GamepadUI.SteamWeb(),
			className: g.MainBrowserContainer,
			hideForModals: true,
			allowUnderlay: true,
		});
	} else {
		return null;
	}
}
function w() {
	const e = (0, _.$2)();
	const t = (0, u.OU)(n.BV.GamepadUI.ExternalWeb());
	const r = s.useRef(undefined);
	if (t || r.current) {
		r.current ||= e.CreateBrowserView("ExternalWeb", {
			strInitialURL: l.p,
		});
		return s.createElement(G, {
			browser: r.current,
			external: true,
			path: n.BV.GamepadUI.ExternalWeb(),
			className: g.ExternalBrowserContainer,
			hideForModals: true,
			allowUnderlay: true,
		});
	} else {
		return null;
	}
}
export const G = (0, f.Nr)(function (e) {
	const { browser: t, path: r, external: n, bCanChangeURL: c, ...A } = e;
	const p = (0, u.OU)(r);
	const g = (function (e, t, r) {
		const n = (0, o.W6)();
		const i = (0, a.q3)(() => e.History);
		const c = (0, a.q3)(() => e.BIsLoadingURL());
		const u = n.location.state?.initialIndex;
		const A = (0, m.Sz)(u);
		const p = u !== A;
		s.useEffect(() => {
			const t = (0, o.B6)(n.location.pathname, r);
			if (!t || !i) {
				return;
			}
			const a = n.location.state || {};
			const s = {};
			if (t && typeof u != "number") {
				s.initialIndex = i.index + 1;
				const t = a.url || d.TS.STORE_BASE_URL;
				e.LoadURL(t);
				b(
					`Browser "${e.name}" loading new session url "${t}" with browser history index ${s.initialIndex}`,
				);
			}
			if (
				t &&
				!p &&
				(typeof a.finalIndex != "number" || a.finalIndex < i.index)
			) {
				s.finalIndex = i.index;
				b(`Browser "${e.name}" updating final index: ${s.finalIndex}`);
			}
			if (Object.keys(s).length > 0) {
				n.replace({
					...n.location,
					state: {
						...a,
						...s,
					},
				});
			}
		}, [r, t, p, n, i, e, u]);
		return s.useCallback(() => {
			const t = n.location.state?.initialIndex === undefined;
			const r = c
				? i.index < n.location.state.initialIndex
				: i.index <= n.location.state.initialIndex;
			const a = i.entries[i.index - 1]?.url === l.p;
			if (t || r || a) {
				b(`Browser "${e.name}" and router back()`);
				n.goBack();
			} else {
				b(`Browser "${e.name}" back()`);
			}
			e.GetBrowser().GoBack();
			return true;
		}, [i, n, e, c]);
	})(t, p, r);
	(0, h.WE)(p ? g : null);
	const _ = (0, C.we)();
	s.useEffect(() => {
		t?.SetGoBackOverride(g);
		return () => t?.SetGoBackOverride(undefined);
	}, [t, g]);
	s.useEffect(
		() =>
			p
				? (_.SetCurrentBrowserAndBackstack(t, n, c),
					() => {
						if (t.name === _.GetCurrentBrowserAndBackstack().browser.name) {
							_.SetCurrentBrowserAndBackstack(null, false, false);
						}
					})
				: () => {},
		[p, n, c, t, _],
	);
	return s.createElement(i.DS, {
		browser: t,
		external: n,
		bCanChangeURL: c,
		...A,
		visible: p,
		autoFocus: true,
	});
});
