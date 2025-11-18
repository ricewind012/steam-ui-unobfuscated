import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useEffect } from "./63696.js";
import { q3 } from "./90095.js";
import { A as A_1 } from "./90765.js";
import { Qt } from "./18057.js";
import o from "./88750.js";
import { tn } from "./18869.js";
import m from "./51319.js";
import { d as d_1 } from "./40451.js";
import A from "./3475.js";
import { l9 as GetFeatureBlockReason } from "./5640.js";
import g from "./83599.js";
import h, { h as h_1 } from "./15123.js";
import { wT as useSomeCallback } from "./28934.js";
import { VI } from "./34792.js";
import { w as w_1 } from "./10501.js";
import y from "./88808.js";
const u = m;
const S = new g.wd("Menus").Debug;
function w(e) {
	return e.filter((e) => !!e && e.visible !== false);
}
const B = (e) => {
	const {
		name,
		route,
		steamURL,
		dialog,
		onClick,
		disabledClass,
		disabled,
		parentalFeature = A.uX,
		newItem,
		children,
	} = e;
	const w = tn(route);
	const B = Qt(steamURL);
	const v = d_1();
	const eParentalReason = GetFeatureBlockReason(parentalFeature);
	const bNoParentalReason = eParentalReason != 0;
	const T = useSomeCallback();
	const R = eParentalReason != 2 || parentalFeature !== A.JC;
	let k = onClick;
	if (route) {
		k = w;
	} else if (steamURL) {
		k = B;
	} else if (dialog) {
		k = () => v(dialog, null);
	}
	const D = n.useCallback(
		(e) => {
			const t = GetOwningWindowForEvent(e);
			if (bNoParentalReason && k) {
				T(eParentalReason, parentalFeature ?? A.uX, () => k(t));
			} else {
				k(t);
			}
		},
		[T, eParentalReason, bNoParentalReason, parentalFeature, k],
	);
	if (!k && !disabled) {
		return (
			<hr
				className={A_1(
					u.MenuItem,
					u.Separator,
					(disabled || bNoParentalReason) && disabledClass,
				)}
			/>
		);
	}
	const N = (
		<>
			{newItem && <NewItemBug />}
			{children || (name[0] == "#" ? Localize(name) : name)}
		</>
	);
	return (
		<o.kt
			className={A_1(
				u.MenuItem,
				u.Item,
				(disabled || bNoParentalReason) && u.Disabled,
				(disabled || bNoParentalReason) && disabledClass,
			)}
			onSelected={D}
			disabled={disabled || (bNoParentalReason && !R)}
		>
			{N}
		</o.kt>
	);
};
const VContext = n.createContext(true);
export function bI() {
	return n.useContext(VContext);
}
const E = (e) => {
	const {
		className,
		disabledItemClass,
		menuItems,
		children,
		refContextMenu,
		...m
	} = e;
	const d = q3(() => refContextMenu.current.visible);
	return (
		<VContext.Provider value={d}>
			<o.tz className={A_1(u.MenuPopup, className)} {...m}>
				<_G disabledItemClass={disabledItemClass} menuItems={menuItems}>
					{children}
				</_G>
			</o.tz>
		</VContext.Provider>
	);
};
function NewItemBug() {
	return <span className={u.NewItemBug}>{Localize("#NewItemBug")}</span>;
}
export const _G = (e) => {
	const { disabledItemClass, menuItems, children } = e;
	return (
		<>
			{w(menuItems).map((e) => (
				<B key={e.name} disabledClass={disabledItemClass} {...e} />
			))}
			{children}
		</>
	);
};
export const W1 = (e) => {
	const {
		title,
		className,
		popupClass,
		buttonClass,
		disabledClass,
		disabledItemClass,
		parentalFeature = A.uX,
		bIsAnyMenuOpen,
		bSuperNavBehavior,
		menuContent,
		menuOptions,
		onClick,
		onShow,
		onHide,
		refPopupMenu,
		children,
	} = e;
	const menuItems = w(e.menuItems ?? []);
	const k = w_1();
	const [bSmallMode] = VI("small_mode");
	const bForcePopup = !k || bSmallMode;
	const F = bForcePopup;
	const refContextMenu = n.useRef(undefined);
	const O = n.useRef(false);
	const P = n.useRef(false);
	const L = n.useRef(undefined);
	const z = n.useRef(undefined);
	const x = GetFeatureBlockReason(parentalFeature);
	const U = x != 0;
	const W = n.useRef(false);
	const V = q3(() => refContextMenu.current?.visible);
	const H = h_1();
	const j = useSomeCallback();
	const q = () => {
		W.current = true;
		window.setTimeout(() => {
			W.current = false;
			O.current = false;
			P.current = false;
		}, 250);
		if (onHide) {
			onHide();
		}
		if (!F) {
			refContextMenu.current = undefined;
		}
	};
	const Q = (e) => {
		if (menuItems?.length > 1 || menuContent) {
			if (!refContextMenu.current) {
				X(e.currentTarget);
			}
			refContextMenu.current.Show();
			if (onShow) {
				onShow();
			}
			if (refPopupMenu) {
				refPopupMenu.current = refContextMenu.current;
			}
		}
	};
	const Z = (e, t = 200) => {
		if (L.current === undefined) {
			L.current = window.setTimeout(() => {
				if (!!refContextMenu.current?.visible && !O.current && !P.current) {
					refContextMenu.current.Hide();
				}
				L.current = undefined;
			}, t);
		}
	};
	const onMouseEnter = (e) => {
		S("OnMenuMouseEnter", title, V);
		P.current = true;
	};
	const K = (e) => {
		S("OnMenuMouseLeave", title, V);
		P.current = false;
		Z();
	};
	const X = (e) => {
		if (
			e &&
			!refContextMenu.current &&
			(menuItems?.length > 1 || menuContent)
		) {
			/*
			param0:ReactNode,
			param1:any,
			x?:number,
			y?:number,
			options?:ContextMenuPositionOptions
			*/
			refContextMenu.current = H.CreateContextMenuInstance(
				<E
					refContextMenu={refContextMenu}
					className={popupClass}
					disabledItemClass={disabledItemClass}
					menuItems={menuItems}
					onMouseEnter={onMouseEnter}
					onMouseLeave={bSuperNavBehavior ? K : undefined}
				>
					{menuContent}
				</E>,
				e,
				undefined,
				undefined,
				{
					bOverlapHorizontal: true,
					bGrowToElementWidth: true,
					bForcePopup,
					bDisableMouseOverlay: true,
					bCreateHidden: F,
					bRetainOnHide: F,
					bNoFocusWhenShown: bSuperNavBehavior,
					title,
					...menuOptions,
				},
			);
			refContextMenu.current?.SetOnHideCallback(q);
		}
	};
	useEffect(
		() => () => {
			if (refContextMenu.current) {
				H.ReleaseHiddenMenu(refContextMenu.current);
			}
		},
		[H],
	);
	return (
		<div
			className={A_1(
				u.MenuWrapper,
				U && u.Disabled,
				className,
				U && disabledClass,
				V && u.MenuOpen,
			)}
			ref={(e) => {
				if (e) {
					z.current = e.ownerDocument.defaultView;
				}
				if (F) {
					X(e);
				}
			}}
			onFocus={() => {}}
			onBlur={() => {}}
			onClick={
				bSuperNavBehavior ||
				((e) => {
					if (U) {
						j(x, parentalFeature);
					} else if (!refContextMenu.current?.visible && !W.current) {
						S("OnClick", title, V);
						Q(e);
					}
				})
			}
			onMouseEnter={
				U ||
				((e) => {
					if (bSuperNavBehavior || bIsAnyMenuOpen) {
						S("OnButtonMouseEnter", title, V);
						O.current = true;
						Q(e);
					}
				})
			}
			onMouseLeave={
				U ||
				((e) => {
					S("OnButtonMouseLeave", title, V);
					if (bSuperNavBehavior) {
						O.current = false;
						Z();
					}
				})
			}
		>
			<div
				className={A_1(u.MenuButton, buttonClass)}
				onClick={(e) => {
					if (onClick) {
						if (U) {
							if (x != 2 || parentalFeature !== A.JC) {
								j(x, parentalFeature, () => onClick());
							}
						} else {
							onClick();
						}
					}
				}}
			>
				{children}
			</div>
		</div>
	);
};
export function fN(e) {
	return (
		<h.D bRegisterMenuManager={false}>
			<y.k />
			{e.children}
		</h.D>
	);
}
