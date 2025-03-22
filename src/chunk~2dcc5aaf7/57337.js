var n;
var i = require("./64608.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./78325.js");
var o = require(/*webcrack:missing*/ "./11131.js");
var l = require(/*webcrack:missing*/ "./63439.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./13869.js");
var d = require(/*webcrack:missing*/ "./53807.js");
var A = require("./96680.js");
function p(e) {
	const {
		bAlertDialog: t,
		strURL: r,
		strMessage: n,
		ownerWindow: p,
		targetBrowserInfo: g,
		browser: h,
		onClose: C,
	} = e;
	const _ = (function () {
		const e = (0, A.$2)();
		return e.IsDesktopOverlayWindow() || e.IsGamepadUIOverlayWindow();
	})();
	const f = g.m_unPID + "_Alert";
	const b = o.Wf.NoTaskbarIcon;
	const { popup: y, element: S } = (0, l.OJ)(f, {
		title: f,
		html_class: "fullheight ModalDialogPopup",
		body_class: "fullheight ModalDialogBody",
		popup_class: "fullheight",
		target_browser: g,
		dimensions: {
			width: 500,
			height: 250,
		},
		eCreationFlags: b,
		center_on_window: p,
		bModal: true,
	});
	const w = a.useCallback(() => {
		h.DialogResponse(false);
		C();
	}, [h, C]);
	const B = a.useCallback(() => {
		h.DialogResponse(true);
		C();
	}, [h, C]);
	const v = a.useCallback(
		(e) => {
			if (e.key == "Escape") {
				w();
				e.preventDefault();
				e.stopPropagation();
			}
		},
		[w],
	);
	(0, m.l6)(y, "keydown", v, {
		capture: true,
	});
	a.useEffect(() => {
		if (y && !_) {
			y.SteamClient.Window.SetModal(true);
			y.SteamClient.Window.BringToFront();
		}
	}, [y, _]);
	if (!S) {
		return null;
	}
	const I = (0, d.wm)(r);
	return s.createPortal(
		a.createElement(
			"div",
			{
				className: "PopupFullWindow",
			},
			a.createElement(
				u.x_,
				{
					onEscKeypress: w,
				},
				a.createElement(
					i.UC,
					null,
					a.createElement(i.Y9, null, (0, c.we)("#BrowserJSDialog_Header", I)),
					a.createElement(i.a3, null, n),
					a.createElement(
						i.wi,
						null,
						t &&
							a.createElement(
								i.$n,
								{
									onClick: w,
								},
								(0, c.we)("#Button_OK"),
							),
						!t &&
							a.createElement(i.CB, {
								onOK: B,
								strOKText: (0, c.we)("#Button_OK"),
								onCancel: w,
								strCancelText: (0, c.we)("#Button_Cancel"),
							}),
					),
				),
			),
		),
		S,
	);
}
export function b(e, t, r) {
	const [i, s] = a.useState(n.k_None);
	const [o, l] = a.useState();
	const c = a.useRef(undefined);
	const m = a.useCallback((e) => {
		l(e);
		s(n.k_Alert);
	}, []);
	const u = a.useCallback((e) => {
		l(e);
		s(n.k_Confirm);
	}, []);
	const d = a.useCallback((e, t) => {
		c.current = e;
	}, []);
	a.useEffect(() => {
		if (r) {
			r.on("alert-dialog", m);
			r.on("confirm-dialog", u);
			r.on("finished-request", d);
			let e = r;
			return () => {
				e.off("alert-dialog", m);
				e.off("confirm-dialog", u);
				e.off("finished-request", d);
			};
		}
	}, [r, m, u, d]);
	if (i != n.k_None) {
		return a.createElement(p, {
			bAlertDialog: i == n.k_Alert,
			ownerWindow: e,
			targetBrowserInfo: t,
			browser: r,
			onClose: () => s(n.k_None),
			strURL: c.current,
			strMessage: o,
		});
	} else {
		return null;
	}
}
(function (e) {
	e[(e.k_None = 0)] = "k_None";
	e[(e.k_Alert = 1)] = "k_Alert";
	e[(e.k_Confirm = 2)] = "k_Confirm";
})((n ||= {}));
