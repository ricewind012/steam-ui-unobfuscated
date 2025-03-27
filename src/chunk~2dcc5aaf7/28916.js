import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a, { pg } from "./13869.js";
import { l6 } from "./52451.js";
import { Av } from "./77347.js";
import l from "./34766.js";
import m from "./18052.js";
import u from "./44846.js";
import { Wh } from "./31800.js";
import { E } from "./43802.js";
import { u6 } from "./43152.js";
import { q3 } from "./90095.js";
import { Z } from "./37619.js";
import _ from "./20893.js";
import { $2 } from "./96680.js";
const c = l;
function b(e) {
	const t = Av();
	const r =
		((e) => {
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
	Wh(
		Localize("#Settings_Internet_Captive_Portal_Header_Title"),
		"CaptivePortalDialog",
	);
	const S = Av();
	const w =
		E(S).eConnectivityTestResult == u.ck.k_EConnectivityTestResult_Connected;
	const B = (() => {
		const e = $2();
		const t = n.useRef(undefined);
		t.current ||= e.CreateBrowserView("CaptivePortal", {
			strUserAgentOverride:
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
		});
		n.useEffect(() => () => t.current.Destroy(), []);
		return t.current;
	})();
	const v = q3(() => B.URL);
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
	l6(window, "focus", M);
	n.useEffect(() => {
		setTimeout(() => B.GetBrowser().SetFocus(true), 2000);
	}, [B]);
	const T = {};
	if (w) {
		T.onOKButton = e.closeModal;
		T.onOKActionDescription = Localize("#Button_Done");
		T.onCancelButton = e.closeModal;
		T.onCancelActionDescription = null;
	}
	T.onFocusWithin = I;
	T.onGamepadBlur = E;
	T.focusable = true;
	const R = u6();
	Z(B.name, B.GetBrowser(), l, m);
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
								w ? Localize("#Button_Done") : Localize("#Generic_Close"),
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
		pg(
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
