var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./10606.js");
var a = require("./96500.js");
var s = a;
var o = require("./55700.js");
var l = require("./73375.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./11131.js");
var u = require(/*webcrack:missing*/ "./53807.js");
export const W = (e) => {
	let {
		strName: t,
		strURL: r,
		onClose: a,
		classname: o,
		popupWidth: l,
		popupHeight: m,
	} = e;
	const [u, d] = n.useState();
	return n.createElement(
		i.hM,
		{
			strTitle: t,
			onDismiss: a,
			popupWidth: l ?? 824,
			popupHeight: m ?? 620,
			refPopup: d,
			className: (0, c.A)(o, s.HTMLPopupDialog),
		},
		n.createElement(A, {
			popup: u,
			classname: s.BrowserViewHost,
			strTitle: t,
			strURL: r,
			onClose: a,
		}),
	);
};
const A = (e) => {
	let { onClose: t, popup: r, strTitle: i, strURL: a } = e;
	const [s, c] = (0, o.v)(r, i, {
		strURL: a,
	});
	const d = (0, m.R7)();
	const A = n.useCallback(
		(e, r, n) => {
			if (r == "CloseBrowser" && t) {
				t();
			}
		},
		[t],
	);
	const p = n.useCallback((e) => !!(0, u.Ln)(e) && !!t && (t(), true), [t]);
	n.useEffect(() => {
		if (s) {
			s.SetSteamURLCallback(p);
			s.on("message", A);
			s.on("before-close", () => {
				d.ownerWindow.close();
			});
		}
	}, [s, d, A, p]);
	if (s) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(l.m4, {
				browser: s,
				visible: c,
				style: {
					display: "block",
				},
				className: e.classname,
			}),
		);
	} else {
		return null;
	}
};
