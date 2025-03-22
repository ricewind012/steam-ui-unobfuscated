var n = require("./37619.js");
var i = require("./33572.js");
var a = require("./96555.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./20893.js");
var c = require("./82011.js");
var m = require(/*webcrack:missing*/ "./61657.js");
var u = require(/*webcrack:missing*/ "./83599.js");
var d = require(/*webcrack:missing*/ "./52451.js");
var A = require(/*webcrack:missing*/ "./72476.js");
var p = require("./8436.js");
var g = p;
const h = new u.wd("GamepadEvents").Debug;
function C(e) {
	const {
		browser: t,
		visible: r,
		autoFocus: u,
		classNameContainer: p,
		children: C,
	} = e;
	const _ = s.useRef(undefined);
	const f = s.useRef(undefined);
	const b = (0, a.l5)();
	const [y, S] = s.useState(false);
	const [w, B] = s.useState(false);
	const v = y && w;
	const I = S;
	const E = v && (b || !A.TS.ON_DECK);
	s.useEffect(() => {
		if (E) {
			SteamClient.Input.SetWebBrowserActionset(true);
			return () => SteamClient.Input.SetWebBrowserActionset(false);
		}
	}, [E]);
	(0, n.Z)(t.name, t.GetBrowser(), f, v && r);
	s.useEffect(() => {
		if (r && u) {
			f.current.TakeFocus();
		}
	}, [r, u]);
	const M = s.useCallback((e) => B(e.BIsActiveWithinContext()), []);
	s.useEffect(() => {
		const e = f.current.NavTree();
		B(e.BIsActiveWithinContext());
		const t = e.OnActiveStateChangedCallbacks.Register(() => M(e));
		return () => t.Unregister();
	}, [M]);
	const T = (0, i.Xp)();
	s.useEffect(() => {
		if (v) {
			return t.RegisterOnActionDescriptionsChangedCallback(
				T.SetActionDescriptionsFromMap,
			);
		}
	}, [v, T, t]);
	const R = s.useCallback(
		(e) => {
			h(`Got unhandled button from ${t.name}: ${m.pR[e]}`);
			(0, l.G7)(_.current, e);
		},
		[t, _],
	);
	const k = (function (e, t) {
		const r = (0, d.gc)(e.GetGameInputSupportLevel());
		const n = r === c.h.Full || r === c.h.Basic;
		const i = s.useCallback(
			(t) => {
				if (n) {
					switch (t.detail.button) {
						case m.pR.STEAM_GUIDE:
						case m.pR.STEAM_QUICK_MENU:
							return;
					}
					h(`Forwarding ${t.type} ${m.pR[t.detail.button]} to ${e.name}`);
					e.ForwardGamepadEventDetail(t.type, t.detail);
					t.stopPropagation();
				} else {
					h(
						`Forwarding events is not enabled for browser view ${e.name}, support level: ${c.h[e.GetGameInputSupportLevel().Value]}`,
					);
				}
			},
			[e, n],
		);
		(0, d.hL)(e.OnUnhandledInputCallbacks(), t);
		return i;
	})(t, R);
	let D = {
		focusable: r,
		onFocusWithin: I,
		onButtonDown: k,
		onButtonUp: k,
	};
	if ((0, d.gc)(t.GetGameInputSupportLevel()) != c.h.Full) {
		D.onOKActionDescription = null;
	}
	return s.createElement(
		o.Z,
		{
			ref: _,
			className: p,
		},
		s.createElement(
			o.Z,
			{
				className: g.BrowserContainer,
				noFocusRing: true,
				navRef: f,
				...D,
			},
			C,
		),
	);
}
var _ = require(/*webcrack:missing*/ "./90095.js");
var f = require("./73375.js");
var b = require(/*webcrack:missing*/ "./46108.js");
var y = require("./10606.js");
var S = require(/*webcrack:missing*/ "./90765.js");
var w = require("./81994.js");
var B = require("./35488.js");
var v = require("./87935.js");
var I = require("./5640.js");
var E = require("./77347.js");
var M = require("./94746.js");
var T = require("./96680.js");
var R = require(/*webcrack:missing*/ "./42318.js");
var k = require("./64608.js");
var D = require("./10501.js");
export const Pw = (0, R.Nr)(function (e) {
	const { url: t, name: r, refBrowser: n, browserViewOptions: i, ...a } = e;
	const o = (0, T.$2)();
	const l = s.useRef(undefined);
	l.current ||= o.CreateBrowserView(r, i);
	s.useEffect(
		() => () => {
			l.current.Destroy();
			l.current = null;
		},
		[],
	);
	s.useEffect(() => {
		l.current.LoadURL(t);
	}, [t]);
	s.useEffect(() => {
		(0, d.cZ)(n, l.current);
		return () => (0, d.cZ)(n, null);
	}, [n]);
	return s.createElement(DS, {
		browser: l.current,
		visible: true,
		...a,
	});
});
export function DS(e) {
	const {
		browser: t,
		className: r,
		visible: n,
		hideForModals: i,
		external: a,
		displayURLBar: o,
		bCanChangeURL: l,
		autoFocus: c,
		allowUnderlay: m = false,
	} = e;
	const u = (0, _.q3)(() => t.BIsLoadingURL() && t.BExternalTriggeredLoad());
	const d = (0, y.Ju)() && i;
	const A = (0, E.N4)();
	const p = (0, D.w)() && m;
	const h = n && A;
	const b = h && !u && !d;
	const B = u && A;
	const v = n && !A;
	return s.createElement(
		"div",
		{
			className: (0, S.A)(
				r,
				n && g.Visible,
				g.MainBrowser,
				m && g.AllowUnderlay,
			),
		},
		s.createElement(G, {
			...e,
		}),
		o &&
			s.createElement(hf, {
				external: a,
				browser: t,
				bCanChangeURL: l,
			}),
		!v &&
			s.createElement(
				C,
				{
					browser: t,
					autoFocus: c,
					visible: h,
					classNameContainer: g.BrowserContainer,
				},
				s.createElement(f.m4, {
					className: g.Browser,
					visible: b,
					browser: t.GetBrowser(),
					underlay: p,
				}),
				B &&
					s.createElement(w.j, {
						showFooter: true,
					}),
			),
		v &&
			s.createElement(M.I, {
				focusable: true,
			}),
	);
}
function G(e) {
	const { browser: t } = e;
	const r = (0, _.q3)(() => t.URL);
	const n = (0, I.sO)(r);
	s.useEffect(() => {
		if (n) {
			const e = v.B7.ResolveURL("ParentalBlocked");
			if (r != e) {
				t.LoadURL(e);
			}
		}
	}, [t, r, n]);
	return null;
}
export function hf(e) {
	const { browser: t, external: r, bCanChangeURL: n } = e;
	const i = (0, _.q3)(() => t.DisplayURL);
	const l = (0, _.q3)(() => t.BIsLoadingURL());
	const c = (0, a.l5)();
	const m = i.startsWith("https://")
		? s.createElement(B.Lock, {
				locked: true,
			})
		: s.createElement(B.Globe, null);
	const u = (0, E.N4)();
	const A = s.useRef(undefined);
	const p = s.useCallback(() => {
		t.LoadURL(A.current.value);
		return "VKClose";
	}, [t]);
	const h = s.useCallback(() => {
		if (A.current?.element) {
			A.current.element.value = "";
		}
	}, []);
	const C = s.useCallback((e) => {
		e.target.select();
	}, []);
	const f = s.useCallback((e) => {
		if (A.current?.element) {
			A.current.element.value = e;
		}
	}, []);
	const y = s.useCallback((e, t) => {
		if (A.current?.element) {
			A.current.element.value = e;
		}
	}, []);
	const S = s.useCallback((e, t) => {
		if (A.current?.element) {
			A.current.element.value = e;
		}
	}, []);
	(0, d.hL)(t.StartRequestCallbacks, f);
	(0, d.hL)(t.StartLoadingCallbacks, y);
	(0, d.hL)(t.FinishedRequestCallbacks, S);
	(0, _.q3)(() => t.CanGoBackward);
	(0, _.q3)(() => t.CanGoForward);
	return s.createElement(
		o.Z,
		{
			className: g.URLBar,
			"flow-children": "row",
		},
		false,
		l && s.createElement(B.Spinner, null),
		!l &&
			s.createElement(
				o.Z,
				{
					className: g.StatusIcon,
				},
				m,
			),
		s.createElement(
			o.Z,
			{
				className: g.URL,
				onOptionsButton: h,
				onOptionsActionDescription: (0, b.we)("#Clear"),
			},
			!n && i,
			n &&
				s.createElement(k.pd, {
					className: g.URLInput,
					ref: (e) => {
						A.current = e;
						if (e?.element) {
							e.element.value = i;
						}
					},
					onEnterKeyPress: p,
					onFocus: C,
					spellCheck: false,
				}),
		),
		u &&
			!c &&
			s.createElement(P, {
				browser: t,
				url: i,
				bLoading: l,
			}),
	);
}
function P(e) {
	const t = (0, d.gc)(e.browser.GetGameInputSupportLevel());
	if ((0, A.rP)().IN_VR) {
		return null;
	}
	switch (t) {
		case c.h.PageUnloading:
		case c.h.Unknown:
		case c.h.Full:
			return null;
	}
	return s.createElement(
		o.Z,
		{
			className: g.InputSupportLevel,
		},
		s.createElement(
			"div",
			{
				className: g.RequireTouchscreenLabel,
			},
			(0, b.we)(
				A.TS.ON_DECK
					? "#Browser_InputSupportLevel_None"
					: "#Browser_InputSupportLevel_None_Desktop",
			),
		),
		A.TS.ON_DECK
			? s.createElement(B.TouchTap, null)
			: s.createElement(B.Mouse, null),
	);
}
