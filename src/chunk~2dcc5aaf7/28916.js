var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./13869.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./77347.js");
var l = require("./34766.js");
var c = l;
var m = require("./18052.js");
var u = require(/*webcrack:missing*/ "./44846.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require("./31800.js");
var p = require("./43802.js");
var g = require("./43152.js");
var h = require(/*webcrack:missing*/ "./90095.js");
var C = require("./37619.js");
var _ = require(/*webcrack:missing*/ "./20893.js");
var f = require("./96680.js");
function b(e) {
	const t = (0, o.Av)();
	const r =
		(function (e) {
			const t = n.useRef(e);
			if (e != null) {
				t.current = e;
			}
			return t.current;
		})(e.strManualCaptivePortalURL ?? t.strCaptivePortalURL) ?? "about://blank";
	const { browser: i } = e;
	n.useEffect(() => {
		i.LoadURL(r);
	}, [i, r]);
	return n.createElement(
		"div",
		{
			className: c.CaptivePortalBrowserViewContainer,
		},
		n.createElement(m.c, {
			visible: true,
			className: c.CaptivePortalBrowserView,
			navID: "CaptivePortalBrowser",
			browser: i,
			clearWhenInvisble: true,
		}),
	);
}
function y(e) {
	const { closeModal: t, ...r } = e;
	const l = n.useRef(undefined);
	const [m, y] = n.useState(false);
	(0, A.Wh)(
		(0, d.we)("#Settings_Internet_Captive_Portal_Header_Title"),
		"CaptivePortalDialog",
	);
	const S = (0, o.Av)();
	const w =
		(0, p.E)(S).eConnectivityTestResult ==
		u.ck.k_EConnectivityTestResult_Connected;
	const B = (function () {
		const e = (0, f.$2)();
		const t = n.useRef(undefined);
		t.current ||= e.CreateBrowserView("CaptivePortal", {
			strUserAgentOverride:
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
		});
		n.useEffect(() => () => t.current.Destroy(), []);
		return t.current;
	})();
	const v = (0, h.q3)(() => B.URL);
	const I = n.useCallback((e) => {
		if (e) {
			y(e);
		}
	}, []);
	const E = n.useCallback((e) => {
		if (e.detail.focusSource != _.D$.BROWSER && !l.current.BFocusWithin()) {
			y(false);
		}
	}, []);
	const M = n.useCallback(() => {
		if (!l.current.BFocusWithin()) {
			y(false);
		}
	}, []);
	(0, s.l6)(window, "focus", M);
	n.useEffect(() => {
		setTimeout(() => B.GetBrowser().SetFocus(true), 2000);
	}, [B]);
	const T = {};
	if (w) {
		T.onOKButton = e.closeModal;
		T.onOKActionDescription = (0, d.we)("#Button_Done");
		T.onCancelButton = e.closeModal;
		T.onCancelActionDescription = null;
	}
	T.onFocusWithin = I;
	T.onGamepadBlur = E;
	T.focusable = true;
	const R = (0, g.u6)();
	(0, C.Z)(B.name, B.GetBrowser(), l, m);
	return n.createElement(
		a.x_,
		{
			onEscKeypress: e.closeModal,
			padding: "none",
		},
		n.createElement(
			i.f3,
			{
				className: c.CaptivePortalDialogBodyPanel,
				navRef: l,
				...T,
			},
			n.createElement(
				"div",
				{
					className: c.TopBar,
				},
				n.createElement(
					"div",
					{
						className: c.URL,
					},
					v,
				),
			),
			n.createElement(b, {
				browser: B.GetBrowser(),
				...r,
			}),
			!R &&
				n.createElement(
					"div",
					{
						className: c.BottomBar,
					},
					n.createElement(
						"div",
						{
							className: c.Controls,
						},
						n.createElement(
							i.$S,
							null,
							n.createElement(
								i.$n,
								{
									onClick: t,
									autoFocus: true,
								},
								w ? (0, d.we)("#Button_Done") : (0, d.we)("#Generic_Close"),
							),
						),
					),
				),
		),
	);
}
let S = false;
export function Y(e, t) {
	if (!S) {
		S = true;
		(0, a.pg)(
			n.createElement(y, {
				strManualCaptivePortalURL: t,
			}),
			e,
			{
				fnOnClose: () => (S = false),
			},
		);
	}
}
