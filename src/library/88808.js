var r = require("./44846.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./78325.js");
var o = require("./11131.js");
var a = require("./63439.js");
var c = require("./88750.js");
var l = require("./24892.js");
var u = l;
var m = require("./15123.js");
var d = require("./42318.js");
var h = require("./91435.js");
var p = require("./54644.js");
var g = require("./52451.js");
export function k(e) {
	const { managerOverride: t, bSuppressMouseOverlay: n } = e;
	const r = (0, g.CH)();
	const s = (0, o.k5)();
	const a = (0, m.h)();
	const l = t ?? a;
	(0, g.hL)(l.OnMenusChanged, r);
	const u = !n && l.BShouldRenderMouseOverlay();
	const h = l.GetAllMenus();
	return i.createElement(
		i.Fragment,
		null,
		u && i.createElement(c.il, null),
		h.map((e) =>
			i.createElement(
				d.tH,
				{
					key: e.key,
				},
				i.createElement(_, {
					instance: e,
					browserInfo: s,
				}),
			),
		),
	);
}
function _(e) {
	const { instance: t, browserInfo: n, children: r } = e;
	const s = (0, h.yk)();
	const a = (0, o.R7)().ownerWindow;
	const l = i.useRef(undefined);
	if (l.current === undefined) {
		l.current =
			(t.options.bForcePopup || a.innerWidth < 400 || s?.BOnlyPopups()) &&
			!!a.SteamClient?.Window;
	}
	const m = i.useMemo(
		() => ({
			instance: t,
			styles: u,
			presentation: 0,
		}),
		[t],
	);
	const d = r || t.ReactElement;
	return i.createElement(
		c.P.Provider,
		{
			value: m,
		},
		l.current
			? i.createElement(b, {
					instance: t,
					browserInfo: n,
					children: d,
				})
			: i.createElement(w, {
					instance: t,
					children: d,
				}),
	);
}
function w(e) {
	const { instance: t, children: n } = e;
	return i.createElement(
		c.ai,
		{
			...t.position,
		},
		n,
	);
}
function b(e) {
	const { instance: t, browserInfo: n, children: l } = e;
	const m = i.useRef(null);
	const d = (0, o.R7)().ownerWindow;
	const g = d.SteamClient.Browser.GetBrowserID();
	const f = i.useCallback(
		(e) => {
			const { options: n, position: r } = t;
			const i = r.element;
			if (n.bScreenCoordinates) {
				e.dimensions = {
					left: r.clientX,
					top: r.clientY,
					width: 2,
					height: 1,
				};
			} else {
				let t = p.pd(d, i.getBoundingClientRect());
				e.dimensions = {
					left: t.right,
					top: t.top,
					width: 2,
					height: 1,
				};
				e.availscreenwidth = d.screen.availWidth;
				e.availscreenheight = d.screen.availHeight;
			}
			return e;
		},
		[d, t],
	);
	let _ = t.options.bStandalone
		? (0, o.yq)(o.Dr.StandaloneContextMenu)
		: (0, o.yq)(o.Dr.PopupContextMenu);
	if (t.options.bCreateHidden) {
		_ |= o.Wf.Hidden;
	}
	if (t.options.bAlwaysOnTop) {
		_ |= o.Wf.AlwaysOnTop;
	}
	const { popupObj: w, element: b } = (0, a.OJ)(
		"contextmenu_" + t.key,
		{
			title: t.options.title || "Menu",
			html_class: u.ContextMenuPopup + " client_chat_frame",
			body_class: "ContextMenuPopupBody",
			replace_existing_popup: false,
			target_browser: n,
			window_opener_id: g,
			bHideOnClose: true,
			eCreationFlags: _,
		},
		{
			updateParamsBeforeShow: f,
		},
	);
	(0, i.useEffect)(() => {
		if (w) {
			if (t.visible) {
				if (m.current) {
					m.current.PositionMenu();
				}
				if (m.current) {
					m.current.PositionPopupWindow();
				}
				let e = t.options.bNoFocusWhenShown
					? r.iE.k_EWindowBringToFrontWithoutForcingOS
					: r.iE.k_EWindowBringToFrontAndForceOS;
				t.TakeFocus(e);
			} else if (t.options.bRetainOnHide) {
				window.setTimeout(() => {
					w.window?.SteamClient.Window.HideWindow();
				}, 30);
			}
		}
	}, [w, t, t.visible]);
	(0, h.uH)(w.window);
	i.useEffect(() => {
		t.SetPopup(w);
	}, [t, w]);
	if (b) {
		return s.createPortal(
			i.createElement(
				c.ai,
				{
					ref: m,
					...t.position,
					parentWin: d,
					popup: w,
				},
				l,
			),
			b,
		);
	} else {
		return null;
	}
}
