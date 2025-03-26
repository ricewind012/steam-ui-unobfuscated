var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./13869.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require(/*webcrack:missing*/ "./72476.js");
var o = require("./89791.js");
var l = require("./31222.js");
var c = require("./90869.js");
require("./10606.js");
function m(e) {
	return n.createElement(
		i.x_,
		{
			onEscKeypress: e.closeModal,
			bDisableBackgroundDismiss: true,
		},
		n.createElement(d, {
			redirectURL: e.redirectURL,
			guestOption: e.guestOption,
		}),
	);
}
export function vg() {
	(0, i.pg)(
		n.createElement(m, {
			ownerWin: window,
			redirectURL: window.location.href,
		}),
		window,
		{
			strTitle: Localize("#Login_SignInTitle"),
		},
	);
}
function d(e) {
	const { redirectURL: t, guestOption: r } = e;
	const [i] = (0, n.useState)(
		new l.D(s.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
	);
	const [a, m] = (0, n.useState)(false);
	return n.createElement(
		"div",
		null,
		a
			? n.createElement(o.Fn, null)
			: n.createElement(
					o.YN,
					{
						autoFocus: true,
						transport: i,
						platform: 2,
						onComplete: (e) => {
							if (e == c.wI.k_PrimaryDomainFail) {
								m(true);
							} else {
								window.location.assign(t);
							}
						},
						redirectUrl: t,
						theme: "modal",
					},
					r &&
						n.createElement(o.Mk, {
							redirectURL: t,
						}),
				),
	);
}
