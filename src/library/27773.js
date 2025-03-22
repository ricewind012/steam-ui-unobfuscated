var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./736.js");
var s = require("./50376.js");
var o = require("./90765.js");
var a = require("./90685.js");
var _c = require("./72476.js");
function l(e) {
	const { popup: t, onMaximize: n, bOSX: c } = e;
	const l = (0, a.GD)(t);
	const u = r.useCallback(() => {
		if (n) {
			n();
		} else if ((0, i.Fj)(t, "Window.ToggleMaximize")) {
			t.SteamClient.Window.ToggleMaximize();
		}
	}, [t, n]);
	return r.createElement(
		g,
		{
			className: (0, o.A)(
				l ? "restoreButton" : "maximizeButton",
				"windowControlButton",
			),
			onClick: u,
		},
		!c && (l ? r.createElement(s.ZWw, null) : r.createElement(s.hz4, null)),
	);
}
function u(e) {
	const { popup: t, onMinimize: n, bOSX: i } = e;
	const o = r.useCallback(() => {
		t.SteamClient.Window.Minimize();
	}, [t]);
	return r.createElement(
		g,
		{
			className: "minimizeButton windowControlButton",
			onClick: n ?? o,
		},
		!i && r.createElement(s.Xjb, null),
	);
}
function m(e) {
	const { popup: t, onClose: n, bOSX: o } = e;
	const a = r.useCallback(() => {
		if (t) {
			if ((0, i.Fj)(t, "Window.Close")) {
				t.SteamClient.Window.Close();
			} else {
				t.close();
			}
		}
	}, [t]);
	return r.createElement(
		g,
		{
			className: "closeButton windowControlButton",
			onClick: n ?? a,
		},
		!o && r.createElement(s.sED, null),
	);
}
export function g(e) {
	const { className: t, onClick: n, children: i } = e;
	const s = r.useCallback(
		(e) => {
			if (n) {
				e.stopPropagation();
				n(e);
			}
		},
		[n],
	);
	return r.createElement(
		"div",
		{
			className: (0, o.A)("title-area-icon", t),
			onClick: s,
		},
		r.createElement(
			"div",
			{
				className: "title-area-icon-inner",
			},
			i,
		),
	);
}
export function c(e) {
	const {
		className: t,
		style: n,
		hideActions: i,
		hideClose: s,
		hideMin: d,
		hideMax: h,
		bOSX: p = (0, _c.Pr)(),
		bForceWindowFocused: g,
		onMinimize: f,
		onMaximize: _,
		onClose: w,
		extraActions: b,
		popup: C,
		children: v,
	} = e;
	const M = (0, a.jt)(C);
	return r.createElement(
		"div",
		{
			className: (0, o.A)(
				"TitleBar",
				"title-area",
				p && "OSX",
				(M || g) && "WindowFocus",
				t,
			),
			style: n,
		},
		r.createElement("div", {
			className: "title-area-highlight",
		}),
		r.createElement(
			"div",
			{
				className: "title-area-children",
			},
			v,
		),
		!i &&
			r.createElement(
				r.Fragment,
				null,
				b &&
					r.createElement(
						"div",
						{
							className: "title-bar-actions extra-actions",
						},
						b,
					),
				r.createElement(
					"div",
					{
						className: "title-bar-actions window-controls",
					},
					!s &&
						r.createElement(m, {
							popup: C,
							onClose: w,
							bOSX: p,
						}),
					!h &&
						r.createElement(l, {
							popup: C,
							onMaximize: _,
							bOSX: p,
						}),
					!d &&
						r.createElement(u, {
							popup: C,
							onMinimize: f,
							bOSX: p,
						}),
				),
			),
	);
}
