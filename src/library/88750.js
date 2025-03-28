import {
	BIsParentOrSelf,
	ClientRectToScreenCoords,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import r, { Cg } from "./34629.js";
import i, { b$ } from "./90242.js";
import s from "./69164.js";
import o from "./4690.js";
import a from "./15181.js";
import c from "./41230.js";
import l from "./63696.js";
import u, { lX } from "./31084.js";
import { BSteamClientHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import d from "./32263.js";
import h from "./50376.js";
import p, { A as A_1 } from "./90765.js";
import g, { s as s_1 } from "./81255.js";
import w, { cZ } from "./52451.js";
import b, { Qn } from "./72476.js";
import C from "./24892.js";
const v = C;
export const PContext = l.createContext(null);
export let tz = class extends l.Component {
	static contextType = PContext;
	m_navRef = b$();
	m_divRef = l.createRef();
	get instance() {
		return this.context.instance;
	}
	componentDidMount() {
		this.instance.SetLabel(this.props.label);
		this.m_navRef.current?.TakeFocus();
		cZ(this.props.refInstance, this.instance);
	}
	componentDidUpdate(e) {
		if (e.label !== this.props.label && this.context) {
			this.instance.SetLabel(this.props.label);
		}
	}
	HideIfSubmenu() {
		return !!this.instance.BIsSubMenu() && (this.instance.HideSelf(), true);
	}
	HideMenu() {
		if (this.instance.BIsSubMenu()) {
			this.instance.HideSelf();
		} else {
			this.instance.Hide();
		}
		return true;
	}
	render() {
		let {
			children,
			className,
			label,
			onCancel,
			cancelText,
			refInstance,
			bForceDesktopPresentation,
			footer,
			...d
		} = this.props;
		const h = this.context.styles ?? v;
		let g = cancelText ?? "#Button_Cancel";
		if (this.context.presentation != 1 || bForceDesktopPresentation) {
			return l.createElement(
				"div",
				{
					...d,
					ref: this.m_divRef,
					className: A_1(
						{
							[h.contextMenuContents]: true,
							[h.hasSubMenu]: this.instance.BIsSubMenuVisible(),
							[h.ForceDesktop]: bForceDesktopPresentation,
						},
						className,
					),
				},
				children,
			);
		}
		{
			const n = () => {
				if (onCancel) {
					onCancel();
				}
				this.instance.Hide();
			};
			return l.createElement(
				s.Z,
				{
					...d,
					className: A_1(
						h.contextMenuContents,
						{
							[h.hasSubMenu]: this.instance.BIsSubMenuVisible(),
						},
						className,
					),
					"flow-children": "column",
					onMoveLeft: this.HideIfSubmenu,
					onCancel: this.instance.BIsSubMenu() ? this.HideMenu : n,
					style: {
						overflowY: this.instance.BIsSubMenuVisible() ? "hidden" : undefined,
					},
					navEntryPreferPosition: o.iU.PREFERRED_CHILD,
					navRef: this.m_navRef,
					ref: this.m_divRef,
					...a._k,
				},
				children,
				!this.instance.BIsSubMenu() &&
					l.createElement(
						l.Fragment,
						null,
						l.createElement(K5, null),
						l.createElement(
							kt,
							{
								className: h.Cancel,
								onSelected: n,
							},
							Localize(g),
						),
						footer,
					),
				this.instance.BIsSubMenuVisible() &&
					l.createElement("div", {
						className: h.contextMenuFade,
						onClick: () => this.instance.HideSubMenu(),
					}),
			);
		}
	}
};
Cg([w.oI], tz.prototype, "HideIfSubmenu", null);
Cg([w.oI], tz.prototype, "HideMenu", null);
tz = Cg([c.PA], tz);
export class kt extends l.PureComponent {
	static contextType = PContext;
	m_ref = l.createRef();
	m_refDiv = l.createRef();
	get element() {
		return this.m_refDiv.current;
	}
	get instance() {
		return this.context.instance;
	}
	OnClick(e) {
		if (this.props.disabled) {
			if (this.context.callbacks?.onDisabledItemSelected) {
				this.context.callbacks.onDisabledItemSelected();
			}
		} else {
			if (this.props.onClick) {
				this.props.onClick(e);
			}
			if (!this.props.bInteractableItem) {
				if (this.props.onSelected) {
					this.props.onSelected(e);
				}
				if (this.context) {
					this.instance.ForceHide();
				}
			}
		}
	}
	OnOKButton(e) {
		this.m_refDiv.current?.click();
	}
	OnMouseEnter(e) {
		if (this.context.presentation == 0) {
			this.instance.HideSubMenu();
		}
	}
	Focus() {
		if (this.m_ref.current) {
			this.m_ref.current.TakeFocus();
		} else if (this.m_refDiv.current) {
			this.m_refDiv.current.focus();
		}
	}
	render() {
		const { onSelected, bInteractableItem, onMoveRight, ...r } = this.props;
		const i = this.context?.styles ?? v;
		if (this.context.presentation == 1) {
			return l.createElement(
				s.Z,
				{
					noFocusRing: true,
					preferredFocus: this.props.selected,
					ref: this.m_refDiv,
					navRef: this.m_ref,
					onMouseEnter: this.OnMouseEnter,
					...r,
					className: A_1(
						this.props.className,
						i.contextMenuItem,
						"contextMenuItem",
						this.props.disabled && "disabled",
						this.props.selected && i.Selected,
						this.props.tone == "positive" && i.Positive,
						this.props.tone == "emphasis" && i.Emphasis,
						this.props.tone == "destructive" && i.Destructive,
					),
					focusClassName: i.Focused,
					onClick: this.props.disabled || this.OnClick,
					focusable: !this.props.disabled,
					onOKButton: this.OnOKButton,
					onMoveRight: onMoveRight,
					unselectable: this.props.unselectable,
				},
				this.props.children,
			);
		} else {
			return l.createElement(
				d.D,
				{
					ref: this.m_refDiv,
					onMouseEnter: this.OnMouseEnter,
					...r,
					onClick: this.OnClick,
					unselectable: this.props.unselectable,
					className: this.props.className,
				},
				this.props.children,
			);
		}
	}
}
Cg([w.oI], kt.prototype, "OnClick", null);
Cg([w.oI], kt.prototype, "OnOKButton", null);
Cg([w.oI], kt.prototype, "OnMouseEnter", null);
Cg([w.oI], kt.prototype, "Focus", null);
export class IK extends l.PureComponent {
	render() {
		const { bChecked, children, className, ...r } = this.props;
		return l.createElement(
			kt,
			{
				...r,
				className: A_1(className, bChecked && "menuChecked"),
			},
			l.createElement("div", {
				className: "contextMenuCheckMark",
			}),
			children,
		);
	}
}
export class Fd extends l.PureComponent {
	render() {
		const { icon, children, ...n } = this.props;
		return l.createElement(
			kt,
			{
				...n,
			},
			l.createElement(
				"div",
				{
					className: v.IconContainer,
				},
				icon,
			),
			children,
		);
	}
}
export function K5(e) {
	const t = l.useContext(PContext).styles ?? v;
	return l.createElement("div", {
		className: t.ContextMenuSeparator,
	});
}
export const Vs = (e) => {
	const t = Qn();
	return l.createElement(k, {
		...e,
		bInGamepadUI: t,
	});
};
class k extends l.PureComponent {
	static contextType = PContext;
	m_refItem = l.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bActive: false,
		};
	}
	get instance() {
		return this.context.instance;
	}
	OnSubMenuMouseEnter() {
		this.instance.CancelHideSubMenuTimer();
	}
	OnSubMenuHidden() {
		this.setState({
			bActive: false,
		});
		if (
			this.props.bInGamepadUI &&
			this.context.presentation == 1 &&
			this.m_refItem.current
		) {
			this.m_refItem.current.Focus();
		}
	}
	ShowSubMenu(e) {
		const t = e || this.m_refItem.current.element;
		let n = this.instance.ShowSubMenu(t, this.RenderSubMenu);
		return (
			!!n &&
			(this.setState({
				bActive: true,
			}),
			n.SetOnHideCallback(this.OnSubMenuHidden),
			true)
		);
	}
	RenderSubMenu() {
		return l.createElement(
			tz,
			{
				onMouseEnter: this.OnSubMenuMouseEnter,
				label: this.props.label,
			},
			this.props.children,
		);
	}
	OnMouseEnter(e) {
		if (this.context.presentation == 0) {
			this.ShowSubMenu(e.currentTarget);
		}
	}
	OnClick(e) {
		this.OnMouseEnter(e);
		if (this.props.onClick) {
			this.props.onClick(e);
		}
		if (this.props.bInGamepadUI && this.context.presentation == 1) {
			this.ShowSubMenu(e.currentTarget);
		}
	}
	render() {
		let { label, selectedWithin, children, className, bInGamepadUI, ...s } =
			this.props;
		const o = this.context.styles ?? v;
		return l.createElement(
			kt,
			{
				...s,
				ref: this.m_refItem,
				onClick: this.OnClick,
				selected: selectedWithin && !this.state.bActive,
				className: A_1(className, o.SubMenu, this.state.bActive && o.active),
				onMouseEnter: this.OnMouseEnter,
				bInteractableItem: true,
				onMoveRight: () => this.ShowSubMenu(),
			},
			l.createElement(
				"div",
				{
					className: o.Label,
				},
				label,
			),
			l.createElement(
				"div",
				{
					className: o.Arrow,
				},
				l.createElement(h.GB9, null),
			),
		);
	}
}
Cg([w.oI], k.prototype, "OnSubMenuMouseEnter", null);
Cg([w.oI], k.prototype, "OnSubMenuHidden", null);
Cg([w.oI], k.prototype, "ShowSubMenu", null);
Cg([w.oI], k.prototype, "RenderSubMenu", null);
Cg([w.oI], k.prototype, "OnMouseEnter", null);
Cg([w.oI], k.prototype, "OnClick", null);
export let ai = class extends l.Component {
	m_elMenu = undefined;
	m_cReenteranceGuard = 1;
	m_mutationObserver;
	constructor(e) {
		super(e);
		this.state = {
			ready: false,
			menuLeft: undefined,
			menuTop: undefined,
			menuRight: undefined,
			menuBottom: undefined,
			menuWidth: undefined,
			menuHeight: undefined,
			menuMinWidth: undefined,
		};
		this.m_mutationObserver = new MutationObserver(this.OnMenuMutation);
	}
	get parentWin() {
		return (
			this.props.element?.ownerDocument.defaultView || this.props.parentWin
		);
	}
	BindMenuElement(e) {
		this.props.instance.SetElement(e);
		if (this.m_elMenu) {
			this.m_mutationObserver.disconnect();
			if (!this.props.popup || !!this.props.options.bScreenCoordinates) {
				this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
					"resize",
					this.OnWindowResize,
				);
			}
		}
		if (e) {
			this.m_mutationObserver.observe(e, {
				childList: true,
				subtree: true,
			});
			if (!this.props.popup || !!this.props.options.bScreenCoordinates) {
				e.ownerDocument.defaultView?.addEventListener(
					"resize",
					this.OnWindowResize,
				);
			}
		}
		this.m_elMenu = e || undefined;
		if (b.TS.IN_CLIENT && this.props.popup && this.m_elMenu) {
			this.m_elMenu.ownerDocument.fonts.ready.then(() => {
				this.PositionMenu();
			});
		} else {
			this.PositionMenu();
		}
		if (!this.state.ready) {
			this.props.instance.SetTakeFocus(this.TakeFocus.bind(this));
			this.setState(
				{
					ready: true,
				},
				() => {
					if (!this.props.options?.bSkipFocusWhenReady) {
						this.TakeFocus();
					}
				},
			);
		}
	}
	OnMenuMutation(e, t) {
		this.PositionMenu();
	}
	OnWindowResize() {
		this.PositionMenu();
	}
	OnBlur(e) {
		if (
			(!e.relatedTarget ||
				!BIsParentOrSelf(e.currentTarget, e.relatedTarget)) &&
			(!e.relatedTarget ||
				!this.props.instance.BIsElementInMenuHierarchy(e.relatedTarget)) &&
			!this.props.instance.BIsSubMenuVisible() &&
			this.state.ready &&
			this.props.instance.visible
		) {
			const e = F() ? 150 : 0;
			this.props.instance.OnCancel(e);
		}
	}
	OnKeyDown(e) {
		if (e.keyCode == 27 && this.state.ready) {
			this.props.instance.Hide();
			e.preventDefault();
			e.stopPropagation();
		}
	}
	componentDidUpdate() {
		if (this.m_cReenteranceGuard-- > 0) {
			this.PositionMenu();
		} else {
			this.m_cReenteranceGuard = 2;
		}
	}
	TakeFocus() {
		if (
			this.m_elMenu &&
			this.state.ready &&
			this.props.instance.visible &&
			(this.props.popup ||
				!BIsParentOrSelf(
					this.m_elMenu,
					this.m_elMenu.ownerDocument.activeElement,
				))
		) {
			let e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
			if (e && e.focus) {
				e.focus();
			} else {
				this.m_elMenu.focus();
			}
		}
	}
	PositionMenu(e = false) {
		const t = this.props.options;
		let n = this.m_elMenu;
		let r = this.props.element;
		if (!n) {
			return;
		}
		let i = this.props.popup != null;
		let s = this.parentWin;
		if (!s || (r && s.getComputedStyle(r).display === "none")) {
			return;
		}
		let o = this.props.clientX;
		let a = this.props.clientY;
		let c = 0;
		let l = 0;

		let { innerWidth, innerHeight } = s;

		let d = 1;
		let h = r?.getBoundingClientRect();
		if (i) {
			if (!t.bScreenCoordinates && o !== undefined && a !== undefined) {
				o += s.screenLeft;
				a += s.screenTop;
			}
			h &&= ClientRectToScreenCoords(s, h);
			if (t.targetMonitor) {
				d = t.targetMonitor.flMonitorScale;
				c = t.targetMonitor.nScreenLeft;
				l = t.targetMonitor.nScreenTop;
				innerWidth = t.targetMonitor.nScreenWidth;
				innerHeight = t.targetMonitor.nScreenHeight;
			} else {
				let s_screen = s.screen;
				let t = 0;
				let n = 0;
				if (s_screen.availLeft) {
					t = s_screen.availLeft;
				}
				if (s_screen.availTop) {
					n = s_screen.availTop;
				}
				c = t;
				l = n;
				innerWidth = s_screen.availWidth;
				innerHeight = s_screen.availHeight;
			}
		}
		if (t.bOverlapHorizontal || t.bOverlapVertical) {
			o = undefined;
			a = undefined;
		}
		let p = n.getBoundingClientRect();
		if (t.flGamepadScale && t.flGamepadScale > 0) {
			const t_flGamepadScale = t.flGamepadScale;
			p = new DOMRect(
				p.x * t_flGamepadScale,
				p.y * t_flGamepadScale,
				p.width * t_flGamepadScale,
				p.height * t_flGamepadScale,
			);
		}
		let g = {
			menuLeft: undefined,
			menuRight: undefined,
			menuTop: undefined,
			menuBottom: undefined,
			menuWidth: undefined,
			menuHeight: undefined,
			menuMinWidth: undefined,
		};
		let _ = o ?? h.left;
		let w = o ?? h.right;
		let p_width = p.width;
		if (t.bMatchWidth) {
			p_width = w - _;
			g.menuWidth = p_width;
		}
		if (t.bGrowToElementWidth) {
			g.menuMinWidth = Math.max(p_width, w - _);
		}
		let C = (t.bOverlapHorizontal ? w : _) - c - p_width;
		let v = C > 0;
		let M = c + innerWidth - (t.bOverlapHorizontal ? _ : w) - p_width;
		let S = M > 0;
		let y = (t.bPreferPopLeft || !S) && v;
		if (!v && !S) {
			y = v > S;
			if (t.bFitToWindow) {
				p_width += (y ? C : M) - 8;
				g.menuWidth = p_width;
			}
		}
		if (y) {
			g.menuRight = innerWidth - (t.bOverlapHorizontal ? w : _);
		} else {
			g.menuLeft = t.bOverlapHorizontal ? _ : w;
		}
		let E = a ?? h.top;
		let B = a ?? h.bottom;
		let n_scrollHeight = n.scrollHeight;
		if (t.bMatchHeight) {
			n_scrollHeight = B - E;
			g.menuHeight = n_scrollHeight;
		}
		let L = (t.bOverlapVertical ? B : E) - l - n_scrollHeight;
		let k = L > 0;
		let R = l + innerHeight - (t.bOverlapVertical ? E : B) - n_scrollHeight;
		let I = R > 0;
		let T = (t.bPreferPopTop || !I) && k && !t.bDisablePopTop;
		if (!k && !I) {
			const e =
				t.bShiftToFitWindow !== undefined
					? t.bShiftToFitWindow
					: !!t.bFitToWindow && !t.bOverlapHorizontal;
			T = L > R && !t.bDisablePopTop;
			if (e) {
				if (T) {
					g.menuTop = 4;
				} else {
					g.menuBottom = 4;
				}
			}
			if (t.bFitToWindow) {
				if (e) {
					n_scrollHeight = Math.min(n_scrollHeight, innerHeight - 8);
				} else {
					n_scrollHeight += T ? L : R;
				}
				g.menuHeight = n_scrollHeight - 8;
			}
		}
		if (g.menuBottom === undefined && g.menuTop === undefined) {
			if (T) {
				g.menuBottom = innerHeight - (t.bOverlapVertical ? B : E);
			} else {
				g.menuTop = t.bOverlapVertical ? E : B;
			}
		}
		if (i) {
			g.menuHeight ||= p.height;
			g.menuWidth ||= p.width;
			if (g.menuBottom && !g.menuTop) {
				g.menuTop = innerHeight - g.menuBottom - g.menuHeight;
				g.menuBottom = undefined;
			}
			if (g.menuRight && !g.menuLeft) {
				g.menuLeft = innerWidth - g.menuRight - g.menuWidth;
				g.menuRight = undefined;
			}
		} else if (s.getComputedStyle(n).position != "fixed") {
			if (g.menuLeft) {
				g.menuLeft += s.scrollX;
			}
			if (g.menuTop) {
				g.menuTop += s.scrollY;
			}
			if (g.menuBottom) {
				g.menuBottom +=
					s.document.body.clientHeight - s.scrollY - s.innerHeight;
			}
			if (g.menuRight) {
				g.menuRight += s.document.body.clientWidth - s.scrollX - s.innerWidth;
			}
		}
		if (
			e ||
			g.menuLeft !== this.state.menuLeft ||
			g.menuLeft !== this.state.menuLeft ||
			g.menuRight !== this.state.menuRight ||
			g.menuLeft !== this.state.menuLeft ||
			g.menuRight !== this.state.menuRight ||
			g.menuTop !== this.state.menuTop ||
			g.menuLeft !== this.state.menuLeft ||
			g.menuRight !== this.state.menuRight ||
			g.menuTop !== this.state.menuTop ||
			g.menuBottom !== this.state.menuBottom ||
			g.menuLeft !== this.state.menuLeft ||
			g.menuRight !== this.state.menuRight ||
			g.menuTop !== this.state.menuTop ||
			g.menuBottom !== this.state.menuBottom ||
			g.menuWidth !== this.state.menuWidth ||
			g.menuLeft !== this.state.menuLeft ||
			g.menuRight !== this.state.menuRight ||
			g.menuTop !== this.state.menuTop ||
			g.menuBottom !== this.state.menuBottom ||
			g.menuWidth !== this.state.menuWidth ||
			g.menuHeight !== this.state.menuHeight
		) {
			this.setState(g);
		}
	}
	PositionPopupWindow() {
		if (
			this.state.menuLeft === undefined ||
			this.state.menuTop === undefined ||
			this.state.menuTop === undefined ||
			this.state.menuWidth === undefined ||
			this.state.menuTop === undefined ||
			this.state.menuWidth === undefined ||
			this.state.menuHeight === undefined
		) {
			return;
		}
		const e = this.props.popup?.window;
		const t = this.props.options;
		if (t.bScreenCoordinates) {
			let n = this.parentWin?.devicePixelRatio;
			if (t.targetMonitor) {
				let e = t.flGamepadScale || 1;
				n = (t.targetMonitor.flMonitorScale ?? 1) / e;
			}
			e?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, n);
			e?.SteamClient.Window.ResizeTo(
				this.state.menuWidth,
				this.state.menuHeight,
				n,
			);
			return;
		}
		this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((t) => {
			const n = this.state.menuLeft - this.parentWin.screenX;
			const r = this.state.menuTop - this.parentWin.screenY;
			try {
				e?.SteamClient.Window.PositionWindowRelative(
					t,
					n,
					r,
					this.state.menuWidth,
					this.state.menuHeight,
				);
			} catch (e) {
				console.error(e);
			}
		});
	}
	render() {
		let e = {
			visibility: this.state.ready ? "visible" : "hidden",
		};
		if (
			this.props.options.flGamepadScale &&
			this.props.options.flGamepadScale > 0
		) {
			e.zoom = this.props.options.flGamepadScale;
		} else if (
			this.props.options.bScreenCoordinates &&
			this.props.options.targetMonitor &&
			this.m_elMenu?.ownerDocument?.defaultView
		) {
			const t = this.m_elMenu.ownerDocument.defaultView.devicePixelRatio;
			if (t != 1) {
				e.zoom = (this.props.options.targetMonitor.flMonitorScale ?? 1) / t;
			}
		}
		if (this.props.popup) {
			this.PositionPopupWindow();
			if (this.state.menuMinWidth !== undefined) {
				e.minWidth = this.state.menuMinWidth;
			}
		} else {
			if (this.state.menuTop !== undefined) {
				e.top = this.state.menuTop;
			} else if (this.state.menuBottom !== undefined) {
				e.bottom = this.state.menuBottom;
			}
			if (this.state.menuLeft !== undefined) {
				e.left = this.state.menuLeft;
			} else if (this.state.menuRight !== undefined) {
				e.right = this.state.menuRight;
			}
			if (this.state.menuHeight !== undefined) {
				e.height = this.state.menuHeight;
			}
			if (this.state.menuWidth !== undefined) {
				e.width = this.state.menuWidth;
			}
			if (this.state.menuMinWidth !== undefined) {
				e.minWidth = this.state.menuMinWidth;
			}
		}
		let t = this.props.options.strClassName || v.contextMenu;
		if (
			this.props.options.bCreateHidden ||
			(this.props.instance.visible && this.state.ready)
		) {
			t += " visible";
		}
		t += ` ${v.ContextMenuPosition}`;
		return l.createElement(
			"div",
			{
				className: t,
				ref: this.BindMenuElement,
				style: e,
				onBlur: this.OnBlur,
				onKeyDown: this.OnKeyDown,
				tabIndex: 0,
			},
			this.props.children,
		);
	}
};
export function il(e) {
	return l.createElement("div", {
		className: v.ContextMenuMouseOverlay,
	});
}
export function aE(e) {
	let t = [];
	let n = GetOwningWindowForEvent(e);
	let r = n.getSelection();
	let i = r && r.rangeCount > 0 && r.toString().length > 0;

	let { target, clientY, clientX } = e;

	let o = false;
	if (target && "tagName" in target) {
		if (target.tagName == "INPUT" || target.tagName == "TEXTAREA") {
			o = true;
		}
	}
	if (
		b.TS.IN_CLIENT &&
		o &&
		BSteamClientHasMethod(n, "Browser.GetSpellingSuggestions")
	) {
		let [e, ...r] = n.SteamClient.Browser.GetSpellingSuggestions();
		let i = target;
		if (i) {
			r.forEach((e, r) => {
				t.push(
					l.createElement(
						kt,
						{
							key: `spelling_${r}_${e}`,
							onSelected: () => {
								i.setRangeText(e);
								((e, t) => {
									let n = t.createEvent("HTMLEvents");
									n.initEvent("change", true, false);
									e.dispatchEvent(n);
								})(i, n.document);
								i.setSelectionRange(i.selectionEnd, i.selectionEnd);
								target.focus();
							},
							className: v.NoSeparation,
						},
						e,
					),
				);
			});
		}
		if (e && BSteamClientHasMethod(n, "Browser.AddWordToDictionary")) {
			const r = 30;
			e = e.trim();
			t.push(
				l.createElement(
					kt,
					{
						key: `addtodictionary_${e}`,
						onSelected: () => n.SteamClient.Browser.AddWordToDictionary(e),
					},
					Localize(
						"#ContextMenu_AddToDictionary",
						e.length < r ? e : `${e.substring(0, r)}...`,
					),
				),
			);
		}
	}
	if (n.document.queryCommandEnabled("cut") || (i && o)) {
		t.push(
			l.createElement(
				kt,
				{
					key: "cut",
					onSelected: () => {
						n.document.execCommand("cut");
					},
				},
				Localize("#ContextMenu_Cut"),
			),
		);
	}
	if (n.document.queryCommandEnabled("copy") || i) {
		t.push(
			l.createElement(
				kt,
				{
					key: "copy",
					onSelected: () => {
						n.document.execCommand("copy");
					},
					className: v.NoSeparation,
				},
				Localize("#ContextMenu_Copy"),
			),
		);
	}
	if (b.TS.IN_CLIENT && o && BSteamClientHasMethod(n, "Browser.Paste")) {
		t.push(
			l.createElement(
				kt,
				{
					key: "paste",
					onSelected: () => {
						target.focus();
						n.SteamClient.Browser.Paste();
					},
					className: v.NoSeparation,
				},
				Localize("#ContextMenu_Paste"),
			),
		);
	}
	if (b.TS.IN_CLIENT && b.TS.DEV_MODE) {
		const e = [];
		if (BSteamClientHasMethod(n, "Browser.OpenDevTools")) {
			e.push(
				l.createElement(
					kt,
					{
						key: "opendevtools",
						onSelected: () => {
							target.focus();
							n.SteamClient.Browser.OpenDevTools();
						},
					},
					"Open Dev Tools",
				),
			);
		}
		if (BSteamClientHasMethod(n, "Browser.InspectElement")) {
			e.push(
				l.createElement(
					kt,
					{
						key: "inspectelement",
						onSelected: () => {
							target.focus();
							n.SteamClient.Browser.InspectElement(clientY, clientX);
						},
						className: v.NoSeparation,
					},
					"Inspect Element",
				),
			);
		}
		if (e.length > 0) {
			t.push(
				l.createElement(K5, {
					key: "devtools-separator",
				}),
			);
			t.push(...e);
		}
	}
	if (t.length) {
		lX(l.createElement(tz, null, t), e, {
			bRootContextMenu: true,
		});
	} else {
		if (e.shiftKey) {
			return;
		}
		e.preventDefault();
		e.stopPropagation();
	}
}
Cg([w.oI], ai.prototype, "BindMenuElement", null);
Cg([w.oI, s_1(100)], ai.prototype, "OnMenuMutation", null);
Cg([w.oI], ai.prototype, "OnWindowResize", null);
Cg([w.oI], ai.prototype, "OnBlur", null);
Cg([w.oI], ai.prototype, "OnKeyDown", null);
ai = Cg([c.PA], ai);
const D = "EnableContextMenuBlurDelay3";
function F() {
	return (window.localStorage && window.localStorage.getItem(D)) === "true";
}
export function Dy() {
	const e = window.localStorage != null;
	const [t, n] = l.useState(F());
	return [
		e,
		t,
		l.useCallback((e) => {
			if (!window.localStorage) {
				console.error(
					`Attempt to change setting with no localStorage available: ${D}`,
				);
				return;
			}
			n(e);
			const t = e ? "true" : "false";
			window.localStorage.setItem(D, t);
		}, []),
	];
}
const A = "DEBUG_StickyContextMenus";
export function Y8() {
	return window.sessionStorage && window.sessionStorage.getItem(A) == "true";
}
export function $b(e) {
	if (e) {
		window.sessionStorage.setItem(A, "true");
	} else {
		window.sessionStorage.removeItem(A);
	}
}
const _P = "DEBUG_ForcePopupContextMenus";
export function fd(e) {
	if (e) {
		window.sessionStorage.setItem(_P, "true");
	} else {
		window.sessionStorage.removeItem(_P);
	}
}
