var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./89748.js");
var a = require("./87935.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require("./10606.js");
var l = require("./99731.js");
var c = require("./46285.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require(/*webcrack:missing*/ "./69164.js");
import { Localize } from "../../actual_src/utils/localization.js";
var A = require("./44798.js");
var p = A;
var g = require("./11958.js");
var h = require(/*webcrack:missing*/ "./72476.js");
export function S() {
	const e = (0, s.q3)(() => (0, i.qw)().GetServicesInitialized());
	const t = (0, s.q3)(() => (0, i.qw)().BSupportAlertDialogActive());
	if (e && t) {
		return n.createElement(
			o.EN,
			{
				active: true,
			},
			n.createElement(
				c.M,
				{
					padding: "none",
				},
				n.createElement(f, null),
			),
		);
	} else {
		return null;
	}
}
export function z(e) {
	const t = (0, h.hf)();
	const r = (0, s.q3)(() => (0, i.qw)().BSupportAlertDialogActive());
	const [o, l] = n.useState(false);
	const c = (0, a.vh)("SupportMessages");
	n.useEffect(() => {
		l(r);
	}, [r]);
	const m = n.useCallback(() => {
		l(false);
		(0, i.qw)().CloseSupportAlertsModal();
	}, [l]);
	if (!o || !t || !c) {
		return null;
	}
	const u = Localize("#SteamUI_Dialog_SupportMessage_Title");
	return n.createElement(g.W, {
		strName: u,
		strURL: c,
		onClose: m,
	});
}
function f() {
	const e = (0, a.vh)("SupportMessages");
	const t = (0, s.q3)(() => !(0, i.qw)().BMustShowSupportAlertDialog());
	const r = n.useCallback(() => {
		(0, i.qw)().CloseSupportAlertsModal();
	}, []);
	const o = n.useCallback((e, t) => {
		if (e == "CloseBrowser") {
			(0, i.qw)().CloseSupportAlertsModal();
		}
	}, []);
	const c = (0, m.QS)(
		(e) => {
			if (e) {
				return e.GetOnMessageCallbacks("SupportMessages").Register(o)
					.Unregister;
			}
		},
		[o],
	);
	if (e) {
		return n.createElement(
			u.Z,
			{
				className: p.BrowserWrapper,
				onCancelButton: r,
				onCancelActionDescription: t
					? Localize("#Button_Close")
					: Localize("#Button_Dismiss"),
			},
			n.createElement(l.Pw, {
				name: "SupportMessages",
				url: e,
				refBrowser: c,
			}),
		);
	} else {
		return null;
	}
}
