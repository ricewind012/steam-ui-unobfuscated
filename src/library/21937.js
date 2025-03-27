import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import r from "./87531.js";
import i, { w } from "./49455.js";
import s from "./79769.js";
export class z {
	m_callbacksMenusChanged = new s.lu();
	m_ActiveMenu;
	m_rgActiveSubmenus = [];
	m_setHiddenMenus = new Set();
	constructor() {}
	CreateContextMenuInstance(e, t, n, i, s) {
		const o = new r.HP(this, e, t, n, i, s);
		if (s?.bCreateHidden) {
			this.m_setHiddenMenus.add(o);
			this.m_callbacksMenusChanged.Dispatch();
		}
		return o;
	}
	get OnMenusChanged() {
		return this.m_callbacksMenusChanged;
	}
	HideActiveMenu() {
		if (this.m_ActiveMenu?.options.bRetainOnHide) {
			this.m_setHiddenMenus.add(this.m_ActiveMenu);
		} else if (this.m_rgActiveSubmenus.length) {
			this.m_rgActiveSubmenus = [];
		}
		this.m_ActiveMenu = undefined;
	}
	get ActiveMenu() {
		return this.m_ActiveMenu;
	}
	GetVisibleMenus() {
		if (this.m_ActiveMenu) {
			return [this.m_ActiveMenu, ...this.m_rgActiveSubmenus];
		} else {
			return [];
		}
	}
	GetHiddenMenus() {
		return Array.from(this.m_setHiddenMenus);
	}
	GetAllMenus() {
		let e;
		e = this.m_ActiveMenu
			? [
					this.m_ActiveMenu,
					...this.m_rgActiveSubmenus,
					...Array.from(this.m_setHiddenMenus),
				]
			: [...this.m_rgActiveSubmenus, ...Array.from(this.m_setHiddenMenus)];
		return e.sort((e, t) => e.key - t.key);
	}
	BShouldRenderMouseOverlay() {
		return this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay;
	}
	ShowMenu(e) {
		if (e.BIsSubMenu()) {
			this.m_rgActiveSubmenus.push(e);
		} else {
			if (e == this.m_ActiveMenu) {
				return;
			}
			if (this.m_ActiveMenu) {
				if (this.m_ActiveMenu.options.bRetainOnHide) {
					this.m_setHiddenMenus.add(this.m_ActiveMenu);
				}
				this.m_ActiveMenu.Hide();
			}
			this.m_ActiveMenu = e;
			this.m_setHiddenMenus.delete(e);
		}
		this.m_callbacksMenusChanged.Dispatch();
	}
	HideMenu(e) {
		if (e.BIsSubMenu()) {
			if (FindAndRemove(this.m_rgActiveSubmenus, e)) {
				this.m_callbacksMenusChanged.Dispatch();
			}
		} else {
			w(e == this.m_ActiveMenu, "Call to hide inactive menu");
			if (e == this.m_ActiveMenu) {
				this.HideActiveMenu();
				this.m_callbacksMenusChanged.Dispatch();
			}
		}
	}
	ReleaseHiddenMenu(e) {
		this.m_setHiddenMenus.delete(e);
	}
}
