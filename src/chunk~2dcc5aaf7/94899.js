var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./85243.js");
var a = require("./10795.js");
var s = a;
var o = require("./75140.js");
var l = require(/*webcrack:missing*/ "./90095.js");
var c = require(/*webcrack:missing*/ "./41230.js");
var m = require(/*webcrack:missing*/ "./90765.js");
var u = require("./55489.js");
var d = require("./73375.js");
var A = require("./46422.js");
var p = require(/*webcrack:missing*/ "./78325.js");
var g = require("./18875.js");
var h = require("./15897.js");
var C = require("./93681.js");
var _ = require("./84056.js");
var f = require(/*webcrack:missing*/ "./52451.js");
var b = require(/*webcrack:missing*/ "./31958.js");
const y = false;
const S = Number.parseFloat(s.TouchMenuZoom);
const w = parseInt(s.TouchMenuCenterButtonSize);
const B = parseInt(s.TouchMenuSize);
const v = parseInt(s.TouchMenuGap);
const I = parseInt(s.TouchMenuAccentThickness);
export function EB(e) {
	const { appID: t, bVisible: r } = e;
	const i = n.useCallback(
		(e) => A.oy.NavigationManager.RegisterInputSource(e),
		[],
	);
	const a = (0, d.sd)(i, {
		name: "virtualmenus",
	});
	const o = (0, d.Fx)(a?.GetBrowserView(), 1);
	n.useEffect(() => {
		if (a) {
			a.GetBrowserView().SetVisible(r);
			o();
		}
	}, [a, r, o]);
	if (a) {
		if (y) {
			return n.createElement(
				"div",
				{
					className: s.BrowserViewHost,
					style: {
						background: "#425050",
					},
				},
				n.createElement(M, {
					appID: t,
				}),
			);
		} else {
			return n.createElement(
				n.Fragment,
				null,
				n.createElement(d.m4, {
					browser: a.GetBrowserView(),
					visible: true,
					className: s.BrowserViewHost,
				}),
				p.createPortal(
					n.createElement(M, {
						appID: t,
					}),
					a.GetRenderElement(),
				),
			);
		}
	} else {
		return null;
	}
}
const M = (0, c.PA)((e) => {
	const { appID: t } = e;
	let r = (function (e) {
		return (0, l.q3)(() => {
			let t = [];
			for (let r = 0; r < o.Mf.ActiveTouchMenus.length; r++) {
				if (o.Mf.ActiveTouchMenus[r].MenuSettings.appID == e) {
					t.push(
						n.createElement(K, {
							key: r,
							menuMapKey: o.Mf.TouchMenuGetKeyFromMessage(
								o.Mf.ActiveTouchMenus[r].MenuSettings,
							),
						}),
					);
				}
			}
			return t;
		});
	})(t);
	return n.createElement(
		"div",
		{
			className: s.VirtualMenuContainer,
		},
		r,
	);
});
function T(e) {
	const t = n.useRef(null);
	const r = n.useCallback(() => {
		if (e.BPreview) {
			const e = t.current.parentElement.clientWidth;
			const r = t.current.parentElement.clientHeight;
			const n = t.current.clientWidth;
			const i = t.current.clientHeight;
			const a = n * S;
			const s = i * S;
			const o = Math.min(a, e) / n;
			const l = Math.min(s, r) / i;
			const c = Math.min(o, l);
			const m = (e - n * c) / 2;
			const u = (r - i * c) / 2;
			t.current.style.transform = `translate(${m}px, ${u}px) scale(${c})`;
		} else {
			const r = e.MenuSettings.scale * S;
			const n = t.current.clientWidth * e.MenuSettings.scale * S;
			const i = t.current.clientHeight * e.MenuSettings.scale * S;
			const a = e.MenuSettings.x_position;
			const s = e.MenuSettings.y_position;
			t.current.style.left = `calc( ${a} * calc( 100% - ${n}px ) )`;
			t.current.style.top = `calc( ${s} * calc( 100% - ${i}px ) )`;
			t.current.style.transform = `scale( ${r} )`;
		}
	}, [e]);
	const i = (0, f.wY)(
		n.useCallback(() => {
			if (e.BPreview) {
				r();
			}
		}, [e.BPreview, r]),
	);
	n.useLayoutEffect(r, [r]);
	return n.useCallback(
		(e) => {
			(0, f.cZ)(t, e);
			(0, f.cZ)(i, e?.parentElement);
		},
		[i],
	);
}
const R = (e) => {
	const { element: t, appid: r } = e;
	const i = (0, g.j9)(t.icon_filename, r) ?? "";
	const a = t.color_foreground?.length > 0;
	if (i.length > 0) {
		const e = {
			backgroundImage: `url( "${i}" )`,
		};
		if (a) {
			e.backgroundImage = `url( "${i}" ), radial-gradient(${t.color_foreground}, ${t.color_foreground})`;
			e.maskImage = `url( "${i}" )`;
			e.WebkitMaskImage = `url( "${i}" )`;
		}
		return n.createElement("div", {
			className: (0, m.A)(s.BindingIcon, s.HasImage),
			style: e,
		});
	}
	return n.createElement(k, {
		className: (0, m.A)(s.BindingIcon, s.Glyph),
		element: t,
		color: t.color_foreground,
	});
};
const k = (e) => {
	const { element: t, color: r, className: i } = e;
	if (t == null) {
		return null;
	}
	const a = t.glyph_path.length > 0;
	const o = t.binding_type == _.N.k_EControllerBindingType_Key;
	const l = r != null && r.length > 0;
	const c = N(t);
	const u = {
		backgroundImage: `url( "${t.glyph_path}" )`,
	};
	if (l) {
		u.backgroundImage = `url( "${t.glyph_path}" ), radial-gradient(${r}, ${r})`;
		u.maskImage = `url( "${t.glyph_path}" )`;
		u.WebkitMaskImage = `url( "${t.glyph_path}" )`;
	}
	return n.createElement(
		"div",
		{
			className: (0, m.A)(
				i,
				s.TouchKeyGlyph,
				o && s.KeyboardKey,
				a && s.HasImage,
			),
			style: {
				"--virtualmenu-fg": l ? r : undefined,
			},
		},
		a &&
			n.createElement("div", {
				className: s.GlyphImage,
				style: u,
			}),
		!a &&
			c &&
			n.createElement(
				"div",
				{
					className: s.Label,
				},
				n.createElement(
					"div",
					{
						className: s.Inner,
					},
					t.label,
				),
			),
	);
};
function D(e) {
	return e?.description != null && e.description.length > 0;
}
function N(e) {
	return e?.label != null && e.label.length > 0;
}
function F(e) {
	return (
		N(e) ||
		(function (e) {
			return e?.glyph_path != null && e.glyph_path.length > 0;
		})(e)
	);
}
function G(e, t) {
	return (
		D(e) ||
		(t &&
			F(e) &&
			!(function (e) {
				if (e == null) {
					return false;
				}
				if (!F(e)) {
					return false;
				}
				const t = e.binding_type === _.N.k_EControllerBindingType_GameAction;
				if (t) {
					return false;
				}
				if (
					(function (e) {
						return e?.icon_filename != null && e.icon_filename.length > 0;
					})(e)
				) {
					return false;
				}
				return true;
			})(e))
	);
}
function O(e) {
	const t = {};
	if (e && e.color_background?.length > 0) {
		t["--virtualmenu-bg"] = e.color_background;
		t["--virtualmenu-bg-hover"] = Q(e.color_background, 0.15);
		t["--virtualmenu-accent"] = Q(e.color_background, 1);
	}
	if (e && e.color_foreground?.length > 0) {
		t["--virtualmenu-fg"] = e.color_foreground;
	}
	return t;
}
const P = (e) => {
	const { visible: t, virtualMenu: r, allowGlyph: i, menuType: a } = e;
	const o = n.useRef(undefined);
	if (o.current == null || e.visible) {
		o.current = e.element;
	}
	const l = o.current;
	const c = (l?.x ?? 0) + (l?.width ?? 0) / 2;
	const u = D(l);
	const d = l?.binding_type === _.N.k_EControllerBindingType_GameAction;
	const A = i && !d;
	const p = n.useRef(undefined);
	n.useLayoutEffect(() => {
		if (a == "hotbar") {
			p.current.style.setProperty(
				"--virtualmenutouchkey-description-width",
				p.current.clientWidth + "px",
			);
		}
	}, [a, r]);
	const { bTimerCompleted: g } = (0, f.L$)(1, undefined, true);
	const h = !g;
	const b = (0, m.A)(
		s.DescriptionPopup,
		a == "touchmenu" && s.TouchMenu,
		a == "hotbar" && s.Hotbar,
		a == "radial" && s.Radial,
		t && s.Visible,
		h && s.JustMounted,
	);
	const y = {
		"--virtualmenutouchkey-midpoint-x": `${c}%`,
	};
	if (r.DescriptionPopupBackground.length > 0) {
		y["--virtualmenu-bg"] = r.DescriptionPopupBackground;
		y["--virtualmenu-accent"] = Q(r.DescriptionPopupBackground, 1);
	}
	if (r.DescriptionPopupForeground.length > 0) {
		y["--virtualmenu-fg"] = r.DescriptionPopupForeground;
	}
	return n.createElement(
		"div",
		{
			ref: p,
			className: b,
			style: y,
		},
		n.createElement(
			"div",
			{
				className: s.DescriptionPopupInner,
			},
			u &&
				n.createElement(
					C.r,
					{
						key: l?.description,
						className: s.Description,
						delay: 0,
					},
					l.description,
				),
			A &&
				n.createElement(k, {
					element: l,
					color: r.DescriptionPopupForeground,
				}),
		),
	);
};
const L = (0, c.PA)((e) => {
	const { virtualMenu: t, flDegPerSlice: r, index: i, element: a } = e;
	const o = i == 0;
	const l = a.key_idx == t.ActiveMenuItem;
	let c = 50;
	let u = 50;
	if (!o) {
		const e = (function (e, t) {
			let r = t * (Math.PI / 180);
			let n = Math.cos(r);
			let i = Math.sin(r);
			return {
				x: Math.round((e.x * n - e.y * i) * 10000) / 10000,
				y: Math.round((e.x * i + e.y * n) * 10000) / 10000,
			};
		})(
			{
				x: 0,
				y: -1,
			},
			(i - 1) * r,
		);
		c = (e.x * 0.5 + 0.5) * 100;
		u = (e.y * 0.5 + 0.5) * 100;
	}
	return n.createElement(
		"div",
		{
			className: (0, m.A)(
				s.TouchMenuKey,
				s.Radial,
				a.bound && s.Bound,
				a.placeholder && s.Placeholder,
				o && s.Center,
				l && s.TouchKeyHover,
			),
			style: {
				"--virtualmenutouchkey-midpoint-x": c + "%",
				"--virtualmenutouchkey-midpoint-y": u + "%",
				...O(a),
			},
		},
		n.createElement(R, {
			element: a,
			appid: t.MenuSettings.appID,
		}),
	);
});
function z(e, t, r, n) {
	const i = n - Math.PI / 2;
	return {
		x: e + r * Math.cos(i),
		y: t + r * Math.sin(i),
	};
}
const x = (e) => (e * Math.PI) / 180;
function U(e, t, r, n, i, a, s = 0) {
	const o = a - i <= 180 ? "0" : "1";
	const l = x(i);
	let c = x(a);
	if (Math.abs(i - a) >= 360) {
		a = i + 360;
		if (s == 0) {
			s = 0.001;
		}
	}
	const m = s / r;
	const u = s / n;
	const d = [l + m / 2, c - m / 2];
	const A = [l + u / 2, c - u / 2];
	const p = z(e, t, r, d[0]);
	const g = z(e, t, r, d[1]);
	const h = z(e, t, n, A[0]);
	const C = z(e, t, n, A[1]);
	return [
		"M",
		p.x,
		p.y,
		"A",
		r,
		r,
		0,
		o,
		1,
		g.x,
		g.y,
		"L",
		C.x,
		C.y,
		"A",
		n,
		n,
		0,
		o,
		0,
		h.x,
		h.y,
		"L",
		p.x,
		p.y,
	].join(" ");
}
function W(e) {
	const {
		startAngleDeg: t,
		endAngleDeg: r,
		backgroundColor: i,
		active: a,
		bound: o,
		placeholder: l,
	} = e;
	const c = U(
		B / 2,
		B / 2,
		w / 2,
		B / 2 - I - v / 2,
		t,
		r,
		Math.abs(r - t) >= 360 ? 0 : v,
	);
	let u = a ? Q(i, 0.15) : i;
	if (u == "") {
		u = undefined;
	}
	return n.createElement("path", {
		className: (0, m.A)(
			s.RadialSegment,
			a && s.Active,
			o && s.Bound,
			l && s.Placeholder,
		),
		style: {
			fill: u,
		},
		d: c,
	});
}
const V = (0, c.PA)((e) => {
	const { virtualMenu: t, degPerSlice: r } = e;
	if (t.ActiveMenuItem <= 0) {
		return null;
	}
	const i = -Math.atan2(t.MenuState.y, t.MenuState.x) + Math.PI / 2;
	const a = U(
		B / 2,
		B / 2,
		B / 2 - v / 2 - I,
		B / 2 - v / 2,
		r * -0.5,
		r * 0.5,
		t.MenuSettings.popup_keys.filter((e) => e.key_idx != 0 && e.bound).length >
			0
			? 0
			: v,
	);
	const o = t.MenuSettings.popup_keys.find(
		(e) => e.key_idx == t.ActiveMenuItem,
	);
	let l = Q(o?.color_background, 1);
	if (l == "") {
		l = undefined;
	}
	return n.createElement("path", {
		className: s.SelectionArc,
		d: a,
		style: {
			transform: `translate(50%, 50%) rotate(${i}rad) translate(-50%, -50%) `,
			fill: l,
		},
	});
});
const H = (0, c.PA)((e) => {
	const { virtualMenu: t } = e;
	const r = t.NumRadialOuterSegments;
	const i = 360 / r;
	let a = [];
	for (let e = 0; e < r; ++e) {
		const r = t.MenuSettings.popup_keys[e + 1];
		const s = r.key_idx == t.ActiveMenuItem;
		const o = i * e - i * 0.5;
		const l = o + i;
		a.push(
			n.createElement(W, {
				key: e,
				backgroundColor: r.color_background,
				startAngleDeg: o,
				endAngleDeg: l,
				active: s,
				bound: r.bound || t.BPreview,
				placeholder: r.placeholder,
			}),
		);
	}
	if (r == 0) {
		a.push(
			n.createElement(W, {
				key: "placeholder",
				backgroundColor: undefined,
				startAngleDeg: 0,
				endAngleDeg: 360,
				active: false,
				bound: false,
				placeholder: false,
			}),
		);
	}
	return n.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			className: s.CircleSegments,
		},
		a,
		n.createElement(V, {
			virtualMenu: t,
			degPerSlice: i,
		}),
	);
});
export const yq = (0, c.PA)((e) => {
	const { virtualMenu: t } = e;
	(0, u.Bx)(i.I5.Notification, "VirtualMenuRadial");
	const r = 360 / t.NumRadialOuterSegments;
	const a = t.MenuSettings.popup_keys.map((e, i) =>
		e.bound
			? n.createElement(L, {
					key: i,
					virtualMenu: t,
					flDegPerSlice: r,
					index: i,
					element: e,
				})
			: null,
	);
	const o = T(t);
	let l = {
		opacity: t.MenuSettings.opacity * 100 + "%",
	};
	const c = t.MenuSettings.show_labels;
	const d = t.MenuSettings.popup_keys.some((e) => G(e, c));
	const A = t.MenuSettings.popup_keys.find(
		(e) => e.key_idx == t.ActiveMenuItem,
	);
	const p = D(A) || F(A);
	const g = n.useMemo(
		() =>
			n.createElement(P, {
				menuType: "radial",
				element: A,
				virtualMenu: t,
				visible: d && p,
				allowGlyph: c,
			}),
		[A, t, c, d, p],
	);
	return n.createElement(
		"div",
		{
			ref: o,
			className: (0, m.A)(s.TouchMenuPad, s.Radial, t.BPreview && s.Preview),
			style: l,
		},
		d && g,
		n.createElement(
			"div",
			{
				className: s.TouchKeyContainer,
			},
			n.createElement(H, {
				virtualMenu: t,
			}),
			a,
		),
	);
});
const q = new Map();
function Q(e, t) {
	const r = (e ?? "") + t.toFixed(3);
	if (!q.has(r)) {
		q.set(
			r,
			(0, h.VK)(
				(function (e, t) {
					return (0, h.e6)(
						(function (e, t) {
							if (e == null) {
								return;
							}
							const r = t * 0.4 * e.s;
							const n = t * 0.5;
							return {
								h: e.h,
								s: 1 - (1 - e.s) * (1 - r),
								l: 1 - (1 - e.l) * (1 - n),
								a: e.a,
							};
						})((0, h.ie)(e), t),
					);
				})((0, h.jo)(e), t),
			),
		);
	}
	return q.get(r);
}
const Z = (0, c.PA)((e) => {
	const { virtualMenu: t, element: r, iconSizePct: a } = e;
	(0, u.Bx)(i.I5.Notification, "VirtualMenuTouchKey");
	const o = r.key_idx == t.ActiveMenuItem;
	const l = t.MenuSettings.menu_style == 2;
	const c = {
		left: `${r.x}%`,
		top: `${r.y}%`,
		"--virtualmenutouchkey-icon-width": (a / 100 / (r.width / 100)) * 100 + "%",
		"--virtualmenutouchkey-icon-height":
			(a / 100 / (r.height / 100)) * 100 + "%",
		"--virtualmenutouchkey-width": `${r.width}%`,
		"--virtualmenutouchkey-height": `${r.height}%`,
		...O(r),
	};
	const d = r.color_foreground?.length == 0 && r.color_background.length == 0;
	let A = r.bound;
	let p = r.placeholder;
	if (t.BPreview && !r.bound) {
		A = true;
		p = true;
	}
	const g = (0, m.A)(
		s.TouchMenuKey,
		o && s.TouchKeyHover,
		A && s.Bound,
		p && s.Placeholder,
		r.x <= 1 && s.LeftEdge,
		r.y <= 1 && s.TopEdge,
		r.x + r.width >= 99 && s.RightEdge,
		r.y + r.height >= 99 && s.BottomEdge,
		d && s.SemitransparentIcons,
		l && s.Hotbar,
	);
	return n.createElement(
		"div",
		{
			className: g,
			style: c,
		},
		n.createElement(R, {
			element: r,
			appid: t.MenuSettings.appID,
		}),
	);
});
export const F9 = (0, c.PA)((e) => {
	const { virtualMenu: t } = e;
	(0, u.Bx)(i.I5.Notification, "VirtualMenuTouchOrHotBar");
	const r = parseInt(s.TouchMenuHotBarItemSize, 0);
	const a = T(t);
	let o = {
		opacity: t.MenuSettings.opacity * 100 + "%",
	};
	let l = t.BShowCursor;
	const c = t.MenuSettings.popup_keys.length;
	const d = t.MenuSettings.show_labels;
	const A = t.MenuSettings.menu_style == 2;
	if (A) {
		o.width = c * r + "px";
		l = false;
	}
	let p = 100;
	if (!A) {
		p = t.MenuSettings.popup_keys.reduce(
			(e, t) => Math.min(e, t.width, t.height),
			100,
		);
		p *= Math.min(1, (p - 30) * -0.007 + 1);
		p *= 0.7;
	}
	const g = t.MenuSettings.popup_keys.some((e) => G(e, d));
	const h = t.MenuSettings.popup_keys.find(
		(e) => e.key_idx == t.ActiveMenuItem,
	);
	const C = D(h) || F(h);
	const _ = t.MenuSettings.popup_keys.map((e, r) =>
		n.createElement(Z, {
			iconSizePct: p,
			key: r,
			virtualMenu: t,
			element: e,
		}),
	);
	const f = t.MenuSettings.popup_keys.filter((e) => G(e, d));
	const y = n.useMemo(
		() =>
			n.createElement(P, {
				menuType: "touchmenu",
				element: h,
				virtualMenu: t,
				visible: g && C,
				allowGlyph: d,
			}),
		[h, t, d, g, C],
	);
	let S;
	if (h?.color_background != null && h.color_background.length > 0) {
		S = Q(h.color_background, 1);
	}
	return n.createElement(
		"div",
		{
			ref: a,
			className: (0, m.A)(
				s.TouchMenuPad,
				A && s.Hotbar,
				t.BPreview && s.Preview,
			),
			style: o,
		},
		!A && g && y,
		n.createElement(
			"div",
			{
				className: s.TouchKeyContainer,
			},
			_,
			l &&
				n.createElement("div", {
					className: (0, m.A)(s.Pointer, t.MenuState.bActive && s.Active),
					style: {
						"--virtualmenupointer-x":
							(0, b.Fu)(t.MenuState.x, -1000, 1000, 0, 100) + "%",
						"--virtualmenupointer-y":
							(0, b.Fu)(t.MenuState.y, 1000, -1000, 0, 100) + "%",
						"--virtualmenupointer-color": S,
					},
				}),
		),
		A &&
			f.length > 0 &&
			n.createElement(
				"div",
				{
					className: s.HotbarDescriptionPopups,
				},
				f.map((e, r) =>
					n.createElement(P, {
						key: r,
						menuType: "hotbar",
						element: e,
						virtualMenu: t,
						visible: e == h && C,
						allowGlyph: d,
					}),
				),
			),
	);
});
const K = (0, c.PA)((e) => {
	const { menuMapKey: t } = e;
	const r = (0, l.q3)(() => o.Mf?.TouchMenu(t));
	if ((!r?.MenuState || !r?.MenuState.bActive) && !y) {
		return null;
	}
	switch (r.MenuSettings.menu_style) {
		case 0:
		case 2:
			return n.createElement(F9, {
				virtualMenu: r,
			});
		case 1:
			return n.createElement(yq, {
				virtualMenu: r,
			});
		default:
			return null;
	}
});
