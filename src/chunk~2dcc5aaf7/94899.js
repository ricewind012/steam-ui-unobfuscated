import n from "./63696.js";
import i from "./85243.js";
import a from "./10795.js";
import o from "./75140.js";
import l, { q3 } from "./90095.js";
import c, { PA } from "./41230.js";
import m, { A as A_1 } from "./90765.js";
import u, { Bx } from "./55489.js";
import d, { sd, Fx } from "./73375.js";
import A from "./46422.js";
import p from "./78325.js";
import g, { j9 } from "./18875.js";
import h, { VK, e6, ie, jo } from "./15897.js";
import C from "./93681.js";
import _ from "./84056.js";
import f, { wY, cZ, L$ } from "./52451.js";
import b, { Fu } from "./31958.js";
const s = a;
const y = false;
const S = Number.parseFloat(s.TouchMenuZoom);
const w = parseInt(s.TouchMenuCenterButtonSize);
const B = parseInt(s.TouchMenuSize);
const v = parseInt(s.TouchMenuGap);
const I = parseInt(s.TouchMenuAccentThickness);
export function EB(e) {
	const { appID, bVisible } = e;
	const i = n.useCallback(
		(e) => A.oy.NavigationManager.RegisterInputSource(e),
		[],
	);
	const a = sd(i, {
		name: "virtualmenus",
	});
	const o = Fx(a?.GetBrowserView(), 1);
	n.useEffect(() => {
		if (a) {
			a.GetBrowserView().SetVisible(bVisible);
			o();
		}
	}, [a, bVisible, o]);
	if (a) {
		if (y) {
			return (
				<div
					className={s.BrowserViewHost}
					style={{
						background: "#425050",
					}}
				>
					<M appID={appID} />
				</div>
			);
		} else {
			return (
				<>
					<d.m4
						browser={a.GetBrowserView()}
						visible
						className={s.BrowserViewHost}
					/>
					{p.createPortal(<M appID={appID} />, a.GetRenderElement())}
				</>
			);
		}
	} else {
		return null;
	}
}
const M = PA((e) => {
	const { appID } = e;
	let r = ((e) =>
		q3(() => {
			let t = [];
			for (let r = 0; r < o.Mf.ActiveTouchMenus.length; r++) {
				if (o.Mf.ActiveTouchMenus[r].MenuSettings.appID == e) {
					t.push(
						<K
							key={r}
							menuMapKey={o.Mf.TouchMenuGetKeyFromMessage(
								o.Mf.ActiveTouchMenus[r].MenuSettings,
							)}
						/>,
					);
				}
			}
			return t;
		}))(appID);
	return <div className={s.VirtualMenuContainer}>{r}</div>;
});
function T(e) {
	const TRef = n.useRef(null);
	const r = n.useCallback(() => {
		if (e.BPreview) {
			const e = TRef.current.parentElement.clientWidth;
			const r = TRef.current.parentElement.clientHeight;
			const n = TRef.current.clientWidth;
			const i = TRef.current.clientHeight;
			const a = n * S;
			const s = i * S;
			const o = Math.min(a, e) / n;
			const l = Math.min(s, r) / i;
			const c = Math.min(o, l);
			const m = (e - n * c) / 2;
			const u = (r - i * c) / 2;
			TRef.current.style.transform = `translate(${m}px, ${u}px) scale(${c})`;
		} else {
			const r = e.MenuSettings.scale * S;
			const n = TRef.current.clientWidth * e.MenuSettings.scale * S;
			const i = TRef.current.clientHeight * e.MenuSettings.scale * S;
			const a = e.MenuSettings.x_position;
			const s = e.MenuSettings.y_position;
			TRef.current.style.left = `calc( ${a} * calc( 100% - ${n}px ) )`;
			TRef.current.style.top = `calc( ${s} * calc( 100% - ${i}px ) )`;
			TRef.current.style.transform = `scale( ${r} )`;
		}
	}, [e]);
	const i = wY(
		n.useCallback(() => {
			if (e.BPreview) {
				r();
			}
		}, [e.BPreview, r]),
	);
	n.useLayoutEffect(r, [r]);
	return n.useCallback(
		(e) => {
			cZ(TRef, e);
			cZ(i, e?.parentElement);
		},
		[i],
	);
}
const R = (e) => {
	const { element, appid } = e;
	const i = j9(element.icon_filename, appid) ?? "";
	const a = element.color_foreground?.length > 0;
	if (i.length > 0) {
		const e = {
			backgroundImage: `url( "${i}" )`,
		};
		if (a) {
			e.backgroundImage = `url( "${i}" ), radial-gradient(${element.color_foreground}, ${element.color_foreground})`;
			e.maskImage = `url( "${i}" )`;
			e.WebkitMaskImage = `url( "${i}" )`;
		}
		return <div className={A_1(s.BindingIcon, s.HasImage)} style={e} />;
	}
	return (
		<K_1
			className={A_1(s.BindingIcon, s.Glyph)}
			element={element}
			color={element.color_foreground}
		/>
	);
};
const K_1 = (e) => {
	const { element, color, className } = e;
	if (element == null) {
		return null;
	}
	const a = element.glyph_path.length > 0;
	const o = element.binding_type == _.N.k_EControllerBindingType_Key;
	const l = color != null && color.length > 0;
	const c = N(element);
	const u = {
		backgroundImage: `url( "${element.glyph_path}" )`,
	};
	if (l) {
		u.backgroundImage = `url( "${element.glyph_path}" ), radial-gradient(${color}, ${color})`;
		u.maskImage = `url( "${element.glyph_path}" )`;
		u.WebkitMaskImage = `url( "${element.glyph_path}" )`;
	}
	return (
		<div
			className={A_1(
				className,
				s.TouchKeyGlyph,
				o && s.KeyboardKey,
				a && s.HasImage,
			)}
			style={{
				"--virtualmenu-fg": l ? color : undefined,
			}}
		>
			{a && <div className={s.GlyphImage} style={u} />}
			{!a && c && (
				<div className={s.Label}>
					<div className={s.Inner}>{element.label}</div>
				</div>
			)}
		</div>
	);
};
function D(e) {
	return e?.description != null && e.description.length > 0;
}
function N(e) {
	return e?.label != null && e.label.length > 0;
}
function F(e) {
	return N(e) || ((e) => e?.glyph_path != null && e.glyph_path.length > 0)(e);
}
function G(e, t) {
	return (
		D(e) ||
		(t &&
			F(e) &&
			!((e) => {
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
					((e) => e?.icon_filename != null && e.icon_filename.length > 0)(e)
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
	const { visible, virtualMenu, allowGlyph, menuType } = e;
	const ORef = n.useRef(undefined);
	if (ORef.current == null || e.visible) {
		ORef.current = e.element;
	}
	const o_current = ORef.current;
	const c = (o_current?.x ?? 0) + (o_current?.width ?? 0) / 2;
	const u = D(o_current);
	const d = o_current?.binding_type === _.N.k_EControllerBindingType_GameAction;
	const A = allowGlyph && !d;
	const PRef = n.useRef(undefined);
	n.useLayoutEffect(() => {
		if (menuType == "hotbar") {
			PRef.current.style.setProperty(
				"--virtualmenutouchkey-description-width",
				`${PRef.current.clientWidth}px`,
			);
		}
	}, [menuType, virtualMenu]);
	const { bTimerCompleted } = L$(1, undefined, true);
	const h = !bTimerCompleted;
	const b = A_1(
		s.DescriptionPopup,
		menuType == "touchmenu" && s.TouchMenu,
		menuType == "hotbar" && s.Hotbar,
		menuType == "radial" && s.Radial,
		visible && s.Visible,
		h && s.JustMounted,
	);
	const y = {
		"--virtualmenutouchkey-midpoint-x": `${c}%`,
	};
	if (virtualMenu.DescriptionPopupBackground.length > 0) {
		y["--virtualmenu-bg"] = virtualMenu.DescriptionPopupBackground;
		y["--virtualmenu-accent"] = Q(virtualMenu.DescriptionPopupBackground, 1);
	}
	if (virtualMenu.DescriptionPopupForeground.length > 0) {
		y["--virtualmenu-fg"] = virtualMenu.DescriptionPopupForeground;
	}
	return (
		<div ref={PRef} className={b} style={y}>
			<div className={s.DescriptionPopupInner}>
				{u && (
					<C.r key={o_current?.description} className={s.Description} delay={0}>
						{o_current.description}
					</C.r>
				)}
				{A && (
					<K_1
						element={o_current}
						color={virtualMenu.DescriptionPopupForeground}
					/>
				)}
			</div>
		</div>
	);
};
const L = PA((e) => {
	const { virtualMenu, flDegPerSlice, index, element } = e;
	const o = index == 0;
	const l = element.key_idx == virtualMenu.ActiveMenuItem;
	let c = 50;
	let u = 50;
	if (!o) {
		const e = ((e, t) => {
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
			(index - 1) * flDegPerSlice,
		);
		c = (e.x * 0.5 + 0.5) * 100;
		u = (e.y * 0.5 + 0.5) * 100;
	}
	return (
		<div
			className={A_1(
				s.TouchMenuKey,
				s.Radial,
				element.bound && s.Bound,
				element.placeholder && s.Placeholder,
				o && s.Center,
				l && s.TouchKeyHover,
			)}
			style={{
				"--virtualmenutouchkey-midpoint-x": `${c}%`,
				"--virtualmenutouchkey-midpoint-y": `${u}%`,
				...O(element),
			}}
		>
			<R element={element} appid={virtualMenu.MenuSettings.appID} />
		</div>
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
		startAngleDeg,
		endAngleDeg,
		backgroundColor,
		active,
		bound,
		placeholder,
	} = e;
	const c = U(
		B / 2,
		B / 2,
		w / 2,
		B / 2 - I - v / 2,
		startAngleDeg,
		endAngleDeg,
		Math.abs(endAngleDeg - startAngleDeg) >= 360 ? 0 : v,
	);
	let u = active ? Q(backgroundColor, 0.15) : backgroundColor;
	if (u == "") {
		u = undefined;
	}
	return (
		<path
			className={A_1(
				s.RadialSegment,
				active && s.Active,
				bound && s.Bound,
				placeholder && s.Placeholder,
			)}
			style={{
				fill: u,
			}}
			d={c}
		/>
	);
}
const V = PA((e) => {
	const { virtualMenu, degPerSlice } = e;
	if (virtualMenu.ActiveMenuItem <= 0) {
		return null;
	}
	const i =
		-Math.atan2(virtualMenu.MenuState.y, virtualMenu.MenuState.x) + Math.PI / 2;
	const a = U(
		B / 2,
		B / 2,
		B / 2 - v / 2 - I,
		B / 2 - v / 2,
		degPerSlice * -0.5,
		degPerSlice * 0.5,
		virtualMenu.MenuSettings.popup_keys.filter((e) => e.key_idx != 0 && e.bound)
			.length > 0
			? 0
			: v,
	);
	const o = virtualMenu.MenuSettings.popup_keys.find(
		(e) => e.key_idx == virtualMenu.ActiveMenuItem,
	);
	let l = Q(o?.color_background, 1);
	if (l == "") {
		l = undefined;
	}
	return (
		<path
			className={s.SelectionArc}
			d={a}
			style={{
				transform: `translate(50%, 50%) rotate(${i}rad) translate(-50%, -50%) `,
				fill: l,
			}}
		/>
	);
});
const H = PA((e) => {
	const { virtualMenu } = e;
	const t_NumRadialOuterSegments = virtualMenu.NumRadialOuterSegments;
	const i = 360 / t_NumRadialOuterSegments;
	let a = [];
	for (let e = 0; e < t_NumRadialOuterSegments; ++e) {
		const r = virtualMenu.MenuSettings.popup_keys[e + 1];
		const s = r.key_idx == virtualMenu.ActiveMenuItem;
		const o = i * e - i * 0.5;
		const l = o + i;
		a.push(
			<W
				key={e}
				backgroundColor={r.color_background}
				startAngleDeg={o}
				endAngleDeg={l}
				active={s}
				bound={r.bound || virtualMenu.BPreview}
				placeholder={r.placeholder}
			/>,
		);
	}
	if (t_NumRadialOuterSegments == 0) {
		a.push(
			<W
				key="placeholder"
				backgroundColor={undefined}
				startAngleDeg={0}
				endAngleDeg={360}
				active={false}
				bound={false}
				placeholder={false}
			/>,
		);
	}
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={s.CircleSegments}>
			{a}
			<V virtualMenu={virtualMenu} degPerSlice={i} />
		</svg>
	);
});
export const Yq = PA((e) => {
	const { virtualMenu } = e;
	Bx(i.I5.Notification, "VirtualMenuRadial");
	const r = 360 / virtualMenu.NumRadialOuterSegments;
	const a = virtualMenu.MenuSettings.popup_keys.map((e, i) =>
		e.bound ? (
			<L
				key={i}
				virtualMenu={virtualMenu}
				flDegPerSlice={r}
				index={i}
				element={e}
			/>
		) : null,
	);
	const o = T(virtualMenu);
	let l = {
		opacity: `${virtualMenu.MenuSettings.opacity * 100}%`,
	};
	const c = virtualMenu.MenuSettings.show_labels;
	const d = virtualMenu.MenuSettings.popup_keys.some((e) => G(e, c));
	const A = virtualMenu.MenuSettings.popup_keys.find(
		(e) => e.key_idx == virtualMenu.ActiveMenuItem,
	);
	const p = D(A) || F(A);
	const g = n.useMemo(
		() => (
			<P
				menuType="radial"
				element={A}
				virtualMenu={virtualMenu}
				visible={d && p}
				allowGlyph={c}
			/>
		),
		[A, virtualMenu, c, d, p],
	);
	return (
		<div
			ref={o}
			className={A_1(
				s.TouchMenuPad,
				s.Radial,
				virtualMenu.BPreview && s.Preview,
			)}
			style={l}
		>
			{d && g}
			<div className={s.TouchKeyContainer}>
				<H virtualMenu={virtualMenu} />
				{a}
			</div>
		</div>
	);
});
const q = new Map();
function Q(e, t) {
	const r = (e ?? "") + t.toFixed(3);
	if (!q.has(r)) {
		q.set(
			r,
			VK(
				((e, t) =>
					e6(
						((e, t) => {
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
						})(ie(e), t),
					))(jo(e), t),
			),
		);
	}
	return q.get(r);
}
const Z = PA((e) => {
	const { virtualMenu, element, iconSizePct } = e;
	Bx(i.I5.Notification, "VirtualMenuTouchKey");
	const o = element.key_idx == virtualMenu.ActiveMenuItem;
	const l = virtualMenu.MenuSettings.menu_style == 2;
	const c = {
		left: `${element.x}%`,
		top: `${element.y}%`,
		"--virtualmenutouchkey-icon-width": `${
			(iconSizePct / 100 / (element.width / 100)) * 100
		}%`,
		"--virtualmenutouchkey-icon-height": `${
			(iconSizePct / 100 / (element.height / 100)) * 100
		}%`,
		"--virtualmenutouchkey-width": `${element.width}%`,
		"--virtualmenutouchkey-height": `${element.height}%`,
		...O(element),
	};
	const d =
		element.color_foreground?.length == 0 &&
		element.color_background.length == 0;

	let { bound, placeholder } = element;

	if (virtualMenu.BPreview && !element.bound) {
		bound = true;
		placeholder = true;
	}
	const g = A_1(
		s.TouchMenuKey,
		o && s.TouchKeyHover,
		bound && s.Bound,
		placeholder && s.Placeholder,
		element.x <= 1 && s.LeftEdge,
		element.y <= 1 && s.TopEdge,
		element.x + element.width >= 99 && s.RightEdge,
		element.y + element.height >= 99 && s.BottomEdge,
		d && s.SemitransparentIcons,
		l && s.Hotbar,
	);
	return (
		<div className={g} style={c}>
			<R element={element} appid={virtualMenu.MenuSettings.appID} />
		</div>
	);
});
export const F9 = PA((e) => {
	const { virtualMenu } = e;
	Bx(i.I5.Notification, "VirtualMenuTouchOrHotBar");
	const r = parseInt(s.TouchMenuHotBarItemSize, 0);
	const a = T(virtualMenu);
	let o = {
		opacity: `${virtualMenu.MenuSettings.opacity * 100}%`,
	};
	let t_BShowCursor = virtualMenu.BShowCursor;
	const c = virtualMenu.MenuSettings.popup_keys.length;
	const d = virtualMenu.MenuSettings.show_labels;
	const A = virtualMenu.MenuSettings.menu_style == 2;
	if (A) {
		o.width = `${c * r}px`;
		t_BShowCursor = false;
	}
	let p = 100;
	if (!A) {
		p = virtualMenu.MenuSettings.popup_keys.reduce(
			(e, t) => Math.min(e, t.width, t.height),
			100,
		);
		p *= Math.min(1, (p - 30) * -0.007 + 1);
		p *= 0.7;
	}
	const g = virtualMenu.MenuSettings.popup_keys.some((e) => G(e, d));
	const h = virtualMenu.MenuSettings.popup_keys.find(
		(e) => e.key_idx == virtualMenu.ActiveMenuItem,
	);
	const C = D(h) || F(h);
	const _ = virtualMenu.MenuSettings.popup_keys.map((e, r) => (
		<Z iconSizePct={p} key={r} virtualMenu={virtualMenu} element={e} />
	));
	const f = virtualMenu.MenuSettings.popup_keys.filter((e) => G(e, d));
	const y = n.useMemo(
		() => (
			<P
				menuType="touchmenu"
				element={h}
				virtualMenu={virtualMenu}
				visible={g && C}
				allowGlyph={d}
			/>
		),
		[h, virtualMenu, d, g, C],
	);
	let S;
	if (h?.color_background != null && h.color_background.length > 0) {
		S = Q(h.color_background, 1);
	}
	return (
		<div
			ref={a}
			className={A_1(
				s.TouchMenuPad,
				A && s.Hotbar,
				virtualMenu.BPreview && s.Preview,
			)}
			style={o}
		>
			{!A && g && y}
			<div className={s.TouchKeyContainer}>
				{_}
				{t_BShowCursor && (
					<div
						className={A_1(
							s.Pointer,
							virtualMenu.MenuState.bActive && s.Active,
						)}
						style={{
							"--virtualmenupointer-x": `${Fu(
								virtualMenu.MenuState.x,
								-1000,
								1000,
								0,
								100,
							)}%`,
							"--virtualmenupointer-y": `${Fu(
								virtualMenu.MenuState.y,
								1000,
								-1000,
								0,
								100,
							)}%`,
							"--virtualmenupointer-color": S,
						}}
					/>
				)}
			</div>
			{A && f.length > 0 && (
				<div className={s.HotbarDescriptionPopups}>
					{f.map((e, r) => (
						<P
							key={r}
							menuType="hotbar"
							element={e}
							virtualMenu={virtualMenu}
							visible={e == h && C}
							allowGlyph={d}
						/>
					))}
				</div>
			)}
		</div>
	);
});
const K = PA((e) => {
	const { menuMapKey } = e;
	const r = q3(() => o.Mf?.TouchMenu(menuMapKey));
	if ((!r?.MenuState || !r?.MenuState.bActive) && !y) {
		return null;
	}
	switch (r.MenuSettings.menu_style) {
		case 0:
		case 2: {
			return <F9 virtualMenu={r} />;
		}
		case 1: {
			return <Yq virtualMenu={r} />;
		}
		default: {
			return null;
		}
	}
});
