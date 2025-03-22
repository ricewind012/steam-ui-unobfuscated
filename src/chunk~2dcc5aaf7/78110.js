var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./63439.js");
var s = require(/*webcrack:missing*/ "./88750.js");
var o = require(/*webcrack:missing*/ "./27773.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require(/*webcrack:missing*/ "./91435.js");
var m = require(/*webcrack:missing*/ "./11131.js");
var u = require("./94790.js");
var d = require(/*webcrack:missing*/ "./72476.js");
var A = require("./19696.js");
export const w = (e) =>
	t({
		modal: true,
		...e,
	});
export function t(e) {
	const t = (0, m.R7)().ownerWindow;
	const r = (0, d.Qn)();
	const [i, a] = n.useState(() =>
		r ||
		(e.onlyPopoutIfNeeded === true &&
			e.popupHeight < t.innerHeight * 0.9 &&
			e.popupWidth < t.innerWidth * 0.9 &&
			t.document.visibilityState == "visible")
			? "inline"
			: "popout",
	);
	if (i === "inline") {
		return n.createElement(
			u.E,
			{
				active: true,
			},
			e.children,
		);
	} else if (i === "popout") {
		return n.createElement(h, {
			...e,
		});
	} else {
		return null;
	}
}
function h(e) {
	const {
		strName: t,
		strTitle: r,
		popupWidth: u,
		popupHeight: d,
		browserType: p,
		onDismiss: g,
		refPopup: h,
		children: _,
		titleBarClassName: f,
		saveDimensionsKey: b,
	} = e;
	const y = (0, m.R7)();
	const S = y?.ownerWindow;
	const w = (0, c.yk)();
	const B = {
		...(0, a.h3)(b),
		onClose: g,
	};
	let v = 0;
	if (e.resizable) {
		v |= m.Wf.Resizable;
	}
	const I = "PopupWindow_" + (t ? `${t}_` : "") + n.useId();
	const { popup: E, element: M } = (0, a.OJ)(
		I,
		{
			title: r,
			dimensions: {
				width: u,
				height: d,
			},
			html_class: "client_chat_frame fullheight ModalDialogPopup",
			body_class: "fullheight ModalDialogBody",
			popup_class: "fullheight",
			browserType: p,
			minWidth: e.minWidth,
			minHeight: e.minHeight,
			replace_existing_popup: true,
			center_on_window: w?.BCenterPopupsOnWindow() ? S : undefined,
			eCreationFlags: v,
			target_browser: w?.GetBrowserInfo(),
		},
		B,
	);
	n.useEffect(() => {
		(0, l.cZ)(h, E);
		return () => (0, l.cZ)(h, undefined);
	}, [h, E]);
	n.useEffect(() => {
		if (E) {
			E.document.title = r ?? t;
		}
	}, [E, r, t]);
	if (!M) {
		return null;
	}
	const T = e.modal ?? e.onlyPopoutIfNeeded;
	const R = !e.resizable;
	return n.createElement(
		n.Fragment,
		null,
		T &&
			n.createElement(C, {
				popup: E,
			}),
		i.createPortal(
			n.createElement(
				m.kc,
				{
					ownerWindow: E,
				},
				n.createElement(
					"div",
					{
						className: "PopupFullWindow",
						onContextMenu: s.aE,
					},
					n.createElement(o.c, {
						className: f,
						hideMin: R,
						hideMax: R,
						popup: E,
						hideActions: !g,
					}),
					n.createElement(
						c.EO,
						{
							bCenterPopupsOnWindow: w?.BCenterPopupsOnWindow(),
							browserInfo: w?.GetBrowserInfo(),
						},
						_,
					),
				),
				e.resizable &&
					n.createElement(A.Z, {
						popup: E,
					}),
			),
			M,
		),
	);
}
function C(e) {
	const { popup: t } = e;
	return n.createElement(
		u.E,
		{
			active: true,
		},
		n.createElement("div", {
			style: {
				position: "fixed",
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
			},
			onClick: () => t.SteamClient?.Window.BringToFront(),
		}),
	);
}
