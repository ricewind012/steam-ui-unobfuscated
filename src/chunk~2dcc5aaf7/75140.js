import n, { Cg } from "./34629.js";
import i, { Gn, h5 } from "./89193.js";
import a from "./52451.js";
import s from "./41485.js";
export const dH = "#E4E4E4";
export const Od = "#232323";
export class gw {
	m_controllerTouchMenuSettings;
	m_controllerTouchMenuState = {
		unControllerIndex: 0,
		unMenuIndex: 0,
		bActive: false,
		x: 0,
		y: 0,
		nSelectedItem: -1,
	};
	m_controllerMenuActiveMenuItem = -1;
	m_controllerMenuCenterButtonBound = false;
	m_bShowCursor = undefined;
	m_bPreview = undefined;
	m_nNumRadialOuterSegments = 0;
	m_strDescriptionPopupBackground = "";
	m_strDescriptionPopupForeground = "";
	static FromMessage(e) {
		return new gw(e, undefined, undefined);
	}
	static FromPreview(e, t) {
		return new gw(undefined, e, t);
	}
	constructor(e, t, r) {
		Gn(this);
		if (e) {
			this.m_controllerTouchMenuSettings = e;
			this.m_controllerTouchMenuState.unControllerIndex = e.controller_idx;
			this.m_controllerTouchMenuState.unMenuIndex = e.menu_idx;
			this.m_bShowCursor = true;
			this.m_bPreview = false;
		} else {
			this.m_controllerTouchMenuSettings = {
				controller_idx: 0,
				menu_idx: 0,
				source: t.source,
				x_position: 0.5,
				y_position: 0,
				opacity: t.opacity,
				scale: 0.825,
				force_on: t.force_on,
				show_labels: t.show_labels,
				created: true,
				appID: r,
				menu_style: t.menu_style,
				popup_keys: (t.keys ?? []).map((e) => ({
					key_idx: e.key_index,
					bound: e.bound,
					placeholder: false,
					binding_type: e.binding_type,
					height: e.height,
					width: e.width,
					x: e.x,
					y: e.y,
					quadrants: e.quadrants,
					color_background: e.color_background,
					color_foreground: e.color_foreground,
					icon_filename: e.icon_filename,
					description: e.description,
					label: e.label,
					glyph_path: e.glyph_path,
				})),
			};
			this.m_bPreview = true;
			this.m_bShowCursor = false;
			this.m_controllerTouchMenuState.unControllerIndex = 0;
			this.m_controllerTouchMenuState.unMenuIndex = 0;
			this.MenuState.bActive = true;
			this.SetSelectedPreviewKey(-1);
		}
		const n = this.m_controllerTouchMenuSettings.menu_style == 1;
		this.m_controllerMenuCenterButtonBound =
			n && this.m_controllerTouchMenuSettings.popup_keys[0]?.bound;
		if (n && this.m_controllerTouchMenuSettings.popup_keys.length > 1) {
			this.m_nNumRadialOuterSegments =
				this.m_controllerTouchMenuSettings.popup_keys.length - 1;
		}
		if (this.m_controllerTouchMenuSettings.popup_keys.length > 0) {
			const e = new Map();
			for (const t of this.m_controllerTouchMenuSettings.popup_keys) {
				if (!t.bound || t.placeholder) {
					continue;
				}
				const r = `${t.color_background ?? ""}|${t.color_foreground ?? ""}`;
				const n = e.get(r) ?? 0;
				e.set(r, n + 1);
			}
			const t = Array.from(e).sort(([e, t], [r, n]) => n - t);
			if (t.length > 0) {
				const e = t[0][0];
				[
					this.m_strDescriptionPopupBackground,
					this.m_strDescriptionPopupForeground,
				] = e.split("|");
			}
		}
	}
	SetSelectedPreviewKey(e) {
		if (!this.BPreview) {
			return;
		}
		const t = this.m_controllerTouchMenuSettings.popup_keys.find(
			(t) => t.key_idx == e,
		);
		this.m_controllerMenuActiveMenuItem = t?.key_idx ?? -1;
		if (t == null || t?.key_idx === 0) {
			this.MenuState.x = 0;
			this.MenuState.y = 0;
		} else {
			const e = this.m_controllerTouchMenuSettings.popup_keys.filter(
				(e) => e.key_idx != 0,
			);
			const e_length = e.length;
			const n = -e.indexOf(t) * ((Math.PI * 2) / e_length) + Math.PI / 2;
			this.MenuState.x = Math.cos(n) * 1000;
			this.MenuState.y = Math.sin(n) * 1000;
		}
	}
	get BRadialMenuCenterButtonBound() {
		return this.m_controllerMenuCenterButtonBound;
	}
	get NumRadialOuterSegments() {
		return this.m_nNumRadialOuterSegments;
	}
	get BShowCursor() {
		return this.m_bShowCursor;
	}
	get BPreview() {
		return this.m_bPreview;
	}
	get DescriptionPopupBackground() {
		return this.m_strDescriptionPopupBackground;
	}
	get DescriptionPopupForeground() {
		return this.m_strDescriptionPopupForeground;
	}
	get CenterButtonRadius() {
		const e = this.m_controllerMenuActiveMenuItem == 0 ? 16 : 0;
		return (this.m_controllerMenuCenterButtonBound ? 310 : 64) + e;
	}
	CheckRadialMenuHysteresis(e, t, r) {
		const n = (Math.PI * 2) / this.NumRadialOuterSegments;
		let i = e * n - Math.PI / 36;
		if (i < 0) {
			i += Math.PI * 2;
		}
		let a = e * n + Math.PI / 36;
		if (a > Math.PI * 2) {
			a -= Math.PI * 2;
		}
		return (i > a && t < Math.PI / 36 ? t + Math.PI * 2 : t) > i && t < a;
	}
	updateTouchMenuState(e) {
		this.m_controllerTouchMenuState = e;
		if (!e.bActive) {
			this.m_controllerMenuActiveMenuItem = -1;
			return;
		}
		let t = -1;
		switch (this.m_controllerTouchMenuSettings.menu_style) {
			case 0:
			case 2: {
				t = e.nSelectedItem;
				break;
			}
			default: {
				if (Math.hypot(e.x, e.y) <= this.CenterButtonRadius) {
					t = this.m_controllerMenuCenterButtonBound ? 0 : -1;
					break;
				}
				if (this.m_controllerTouchMenuSettings.popup_keys.length == 1) {
					if (this.BRadialMenuCenterButtonBound) {
						t = 0;
						break;
					}
					t = -1;
					break;
				}
				let r = Math.atan2(e.y, e.x) * -1;
				r += Math.PI / 2 + Math.PI / this.NumRadialOuterSegments;
				if (r < 0) {
					r += Math.PI * 2;
				}
				const n = Math.floor((r * this.NumRadialOuterSegments) / (Math.PI * 2));
				t = this.m_controllerTouchMenuSettings.popup_keys[1 + n]?.key_idx ?? -1;
				if (this.m_controllerMenuActiveMenuItem > 0) {
					const e = this.BRadialMenuCenterButtonBound ? 1 : 0;
					if (
						this.CheckRadialMenuHysteresis(n, r, e) ||
						this.CheckRadialMenuHysteresis(t + 1, r, e)
					) {
						return;
					}
				}
			}
		}
		if (t != this.m_controllerMenuActiveMenuItem) {
			this.m_controllerMenuActiveMenuItem = t;
			if (this.m_controllerTouchMenuSettings.menu_style == 1) {
				SteamClient.Input.SetVirtualMenuKeySelected(
					e.unControllerIndex,
					e.unMenuIndex,
					t,
				);
			}
		}
	}
	get MenuSettings() {
		return this.m_controllerTouchMenuSettings;
	}
	get MenuState() {
		return this.m_controllerTouchMenuState;
	}
	get ActiveMenuItem() {
		return this.m_controllerMenuActiveMenuItem;
	}
}
Cg([i.sH], gw.prototype, "m_controllerTouchMenuState", undefined);
Cg([i.sH], gw.prototype, "m_controllerMenuActiveMenuItem", undefined);
Cg([i.sH], gw.prototype, "m_controllerMenuCenterButtonBound", undefined);
Cg([i.sH], gw.prototype, "m_bShowCursor", undefined);
Cg([i.sH], gw.prototype, "m_bPreview", undefined);
Cg([i.sH], gw.prototype, "m_nNumRadialOuterSegments", undefined);
Cg([i.sH], gw.prototype, "m_strDescriptionPopupBackground", undefined);
Cg([i.sH], gw.prototype, "m_strDescriptionPopupForeground", undefined);
Cg([i.EW], gw.prototype, "CenterButtonRadius", null);
class m {
	m_mapActiveTouchMenus = new i.Es([]);
	m_arrAppsWithTouchMenus = new Array();
	onTouchMenuCreateDestroy(e) {
		const t = s.sx.deserializeBinary(e).toObject();
		if (t.created && !this.m_arrAppsWithTouchMenus.includes(t.appID)) {
			this.m_arrAppsWithTouchMenus.push(t.appID);
		}
		if (this.m_mapActiveTouchMenus === undefined) {
			return;
		}
		const r = this.TouchMenuGetKeyFromMessage(t);
		if (t.created) {
			h5(() => this.m_mapActiveTouchMenus.set(r, gw.FromMessage(t)));
		} else {
			h5(() => this.m_mapActiveTouchMenus.delete(r));
		}
	}
	onTouchMenuInput(e, t, r, n, i, a) {
		let s = {
			unControllerIndex: e,
			unMenuIndex: t,
			x: r,
			y: n,
			bActive: i,
			nSelectedItem: a,
		};
		const o = this.TouchMenuGetKey(s);
		const l = this.m_mapActiveTouchMenus.get(o);
		if (l !== undefined) {
			l.updateTouchMenuState(s);
		}
	}
	get ActiveTouchMenus() {
		return Array.from(this.m_mapActiveTouchMenus.values()) || [];
	}
	get AppsWithTouchMenusEnabled() {
		return this.m_arrAppsWithTouchMenus;
	}
	TouchMenu(e) {
		return this.m_mapActiveTouchMenus.get(e);
	}
	TouchMenuByIdx(e) {
		return Array.from(this.m_mapActiveTouchMenus.values())[e];
	}
	TouchMenuGetKeyInternal(e, t) {
		return `${e?.toString()},${t?.toString()}`;
	}
	TouchMenuGetKeyFromMessage(e) {
		return this.TouchMenuGetKeyInternal(e?.controller_idx, e?.menu_idx);
	}
	TouchMenuGetKey(e) {
		return this.TouchMenuGetKeyInternal(e?.unControllerIndex, e?.unMenuIndex);
	}
	Init() {
		SteamClient.Input.RegisterForTouchMenuInputMessages(this.onTouchMenuInput);
		SteamClient.Input.RegisterForTouchMenuMessages(
			this.onTouchMenuCreateDestroy,
		);
	}
	constructor() {
		Gn(this);
	}
}
Cg([a.oI], m.prototype, "onTouchMenuCreateDestroy", null);
Cg([a.oI], m.prototype, "onTouchMenuInput", null);
Cg([i.EW], m.prototype, "ActiveTouchMenus", null);
Cg([i.EW], m.prototype, "AppsWithTouchMenusEnabled", null);
export const Mf = new m();
