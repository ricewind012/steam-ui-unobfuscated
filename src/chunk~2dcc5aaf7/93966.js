var n = require("./91703.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./49519.js");
var s = require(/*webcrack:missing*/ "./53833.js");
var o = require(/*webcrack:missing*/ "./49455.js");
var l = require(/*webcrack:missing*/ "./83599.js");
var c = require(/*webcrack:missing*/ "./42898.js");
const m = new l.wd("Backstack").Debug;
export function yq() {
	const e = (0, a.W6)();
	const {
		OnNavigateBack: t,
		refGlobalBackOverride: r,
		rgSuppressForwardBackNavigation: s,
	} = i.useContext(n.GL);
	return i.useCallback(() => {
		if (!r.current || r.current() !== true) {
			for (const e of s) {
				if (e()) {
					m("Ignoring back navigation - currently suppressed");
					return;
				}
			}
			t.Dispatch();
			e.goBack();
		}
	}, [e, t, r, s]);
}
export function kV() {
	const e = (0, a.W6)();
	const { rgSuppressForwardBackNavigation: t } = i.useContext(n.GL);
	return i.useCallback(() => {
		for (const e of t) {
			if (e()) {
				m("Ignoring forward navigation - currently suppressed");
				return;
			}
		}
		e.goForward();
	}, [e, t]);
}
export function LB(e, t) {
	const r = (0, a.W6)();
	const { OnNavigateBack: s, refGlobalBackOverride: o } = i.useContext(n.GL);
	return i.useCallback(() => {
		if (!o.current || o.current() !== true) {
			s.Dispatch();
			(function (e, t, r, n) {
				let i = false;
				const a = () => {
					i = true;
					r();
				};
				e.addEventListener("popstate", a);
				t.goBack();
				setTimeout(() => {
					e.removeEventListener("popstate", a);
					if (!i) {
						n();
					}
				}, 200);
			})(e, r, () => s.Dispatch(), t);
		}
	}, [e, r, s, o, t]);
}
export function pC(e) {
	const { OnNavigateBack: t } = i.useContext(n.GL);
	(0, c.hL)(t, e);
}
export function WE(e) {
	const { refGlobalBackOverride: t } = i.useContext(n.GL);
	(0, i.useEffect)(() => {
		if (e) {
			(0, o.w)(!t.current, "Two callers registering useGlobalBackOverride");
			t.current = e;
			return () => {
				if (t.current == e) {
					t.current = undefined;
				}
			};
		}
	}, [t, e]);
}
export function VM(e) {
	const { rgSuppressForwardBackNavigation: t } = i.useContext(n.GL);
	(0, i.useEffect)(() => {
		if (e) {
			t.push(e);
			return () => {
				s.x9(t, e);
			};
		}
	}, [t, e]);
}
