import { ClientRectToScreenCoords } from "../../actual_src/utils/domutils.js";
import r from "./44846.js";
import i, { useEffect } from "./63696.js";
import s from "./78325.js";
import o, { k5, R7, yq } from "./11131.js";
import a, { OJ } from "./63439.js";
import c from "./88750.js";
import l from "./24892.js";
import m, { h as h_1 } from "./15123.js";
import d from "./42318.js";
import h, { yk, uH } from "./91435.js";
import g, { CH, hL } from "./52451.js";
const u = l;
export function k(e) {
	const { managerOverride, bSuppressMouseOverlay } = e;
	const r = CH();
	const s = k5();
	const a = h_1();
	const l = managerOverride ?? a;
	hL(l.OnMenusChanged, r);
	const u = !bSuppressMouseOverlay && l.BShouldRenderMouseOverlay();
	const h = l.GetAllMenus();
	return (
		<>
			{u && <c.il />}
			{h.map((e) => (
				<d.tH key={e.key}>
					<_ instance={e} browserInfo={s} />
				</d.tH>
			))}
		</>
	);
}
function _(e) {
	const { instance, browserInfo, children } = e;
	const s = yk();
	const a = R7().ownerWindow;
	const LRef = i.useRef(undefined);
	if (LRef.current === undefined) {
		LRef.current =
			(instance.options.bForcePopup ||
				a.innerWidth < 400 ||
				a.innerWidth < 400 ||
				s?.BOnlyPopups()) &&
			!!a.SteamClient?.Window;
	}
	const m = i.useMemo(
		() => ({
			instance: instance,
			styles: u,
			presentation: 0,
		}),
		[instance],
	);
	const d = children || instance.ReactElement;
	return (
		<c.P.Provider value={m}>
			{LRef.current ? (
				<B instance={instance} browserInfo={browserInfo}>
					{d}
				</B>
			) : (
				<W instance={instance}>{d}</W>
			)}
		</c.P.Provider>
	);
}
function W(e) {
	const { instance, children } = e;
	return <c.ai {...instance.position}>{children}</c.ai>;
}
function B(e) {
	const { instance, browserInfo, children } = e;
	const MRef = i.useRef(null);
	const d = R7().ownerWindow;
	const g = d.SteamClient.Browser.GetBrowserID();
	const f = i.useCallback(
		(e) => {
			const { options, position } = instance;
			const r_element = position.element;
			if (options.bScreenCoordinates) {
				e.dimensions = {
					left: position.clientX,
					top: position.clientY,
					width: 2,
					height: 1,
				};
			} else {
				let t = ClientRectToScreenCoords(d, r_element.getBoundingClientRect());
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
		[d, instance],
	);
	let _ = instance.options.bStandalone
		? yq(o.Dr.StandaloneContextMenu)
		: yq(o.Dr.PopupContextMenu);
	if (instance.options.bCreateHidden) {
		_ |= o.Wf.Hidden;
	}
	if (instance.options.bAlwaysOnTop) {
		_ |= o.Wf.AlwaysOnTop;
	}
	const { popupObj, element } = OJ(
		`contextmenu_${instance.key}`,
		{
			title: instance.options.title || "Menu",
			html_class: `${u.ContextMenuPopup} client_chat_frame`,
			body_class: "ContextMenuPopupBody",
			replace_existing_popup: false,
			target_browser: browserInfo,
			window_opener_id: g,
			bHideOnClose: true,
			eCreationFlags: _,
		},
		{
			updateParamsBeforeShow: f,
		},
	);
	useEffect(() => {
		if (popupObj) {
			if (instance.visible) {
				if (MRef.current) {
					MRef.current.PositionMenu();
				}
				if (MRef.current) {
					MRef.current.PositionPopupWindow();
				}
				let e = instance.options.bNoFocusWhenShown
					? r.iE.k_EWindowBringToFrontWithoutForcingOS
					: r.iE.k_EWindowBringToFrontAndForceOS;
				instance.TakeFocus(e);
			} else if (instance.options.bRetainOnHide) {
				window.setTimeout(() => {
					popupObj.window?.SteamClient.Window.HideWindow();
				}, 30);
			}
		}
	}, [popupObj, instance, instance.visible]);
	uH(popupObj.window);
	i.useEffect(() => {
		instance.SetPopup(popupObj);
	}, [instance, popupObj]);
	if (element) {
		return s.createPortal(
			<c.ai ref={MRef} {...instance.position} parentWin={d} popup={popupObj}>
				{children}
			</c.ai>,
			element,
		);
	} else {
		return null;
	}
}
