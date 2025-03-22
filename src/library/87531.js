var r = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var s = require("./54644.js");
require("./88750.js");
var o = require("./44846.js");
class a {
	static s_nNextKeyValue = 1;
	m_nKey = null;
	m_ContextMenuManager;
	m_bVisible = false;
	m_fnTakeFocus;
	m_element;
	m_rctElement;
	m_rctLabel = undefined;
	m_popupContextMenu;
	m_timerHideMenu = 0;
	m_options;
	m_position;
	m_submenu;
	m_parentInstance;
	m_elSubmenuItem = null;
	m_timerHideSubMenu = 0;
	m_fnOnHideCallback;
	constructor(e, t) {
		(0, i.Gn)(this);
		this.m_ContextMenuManager = e;
		this.m_rctElement = t;
	}
	get Manager() {
		return this.m_ContextMenuManager;
	}
	get key() {
		if (this.m_nKey == null) {
			this.m_nKey = a.s_nNextKeyValue;
			a.s_nNextKeyValue++;
		}
		return this.m_nKey;
	}
	SetElement(e) {
		this.m_element = e;
	}
	SetPopup(e) {
		this.m_popupContextMenu = e;
	}
	get ReactElement() {
		return this.m_rctElement;
	}
	get label() {
		return this.m_rctLabel;
	}
	get submenu() {
		return this.m_submenu;
	}
	get visible() {
		return this.m_bVisible;
	}
	get options() {
		return this.m_options;
	}
	get position() {
		return this.m_position;
	}
	SetOnHideCallback(e) {
		this.m_fnOnHideCallback = e;
	}
	Show() {
		this.CancelHideMenuTimer();
		this.m_bVisible = true;
		this.m_ContextMenuManager.ShowMenu(this);
	}
	OnCancel(e = 0) {
		if (this.options?.onCancel) {
			this.options.onCancel();
		}
		this.Hide(e);
	}
	Hide(e = 0) {
		if (e > 0) {
			this.m_timerHideMenu = window.setTimeout(() => {
				this.m_timerHideMenu = 0;
				this.InternalHide();
			}, e);
		} else {
			this.InternalHide();
		}
	}
	CancelHideMenuTimer() {
		if (this.m_timerHideMenu > 0) {
			clearTimeout(this.m_timerHideMenu);
			this.m_timerHideMenu = 0;
		}
	}
	SetPosition(e, t, n) {
		this.m_options = {
			...this.m_options,
			...n,
		};
		this.m_position.clientX = e;
		this.m_position.clientY = t;
		this.m_position.options = this.m_options;
	}
	ForceHide() {
		this.InternalHide();
	}
	HideIfNotInFocus() {
		if (!this.BHasFocus() && !this.BIsFocusInChildHierarchy()) {
			this.Hide();
		}
	}
	InternalHide() {
		this.CancelHideMenuTimer();
		if (this.m_bVisible) {
			this.m_bVisible = false;
			this.InternalHideSubMenu();
			if (this.m_fnOnHideCallback) {
				this.m_fnOnHideCallback();
			}
			this.m_ContextMenuManager.HideMenu(this);
		}
	}
	SetTakeFocus(e) {
		this.m_fnTakeFocus = e;
	}
	ShowSubMenu(e, t) {
		if (this.m_elSubmenuItem == e) {
			this.CancelHideSubMenuTimer();
			this.m_submenu?.TakeFocus();
			return null;
		} else {
			this.InternalHideSubMenu();
			this.m_elSubmenuItem = e;
			this.m_submenu = new l(this, t(), e, this.m_options.bForcePopup);
			this.m_submenu.Show();
			return this.m_submenu;
		}
	}
	CancelHideSubMenuTimer() {
		if (this.m_timerHideSubMenu > 0) {
			clearTimeout(this.m_timerHideSubMenu);
			this.m_timerHideSubMenu = 0;
		}
	}
	HideSubMenu() {
		if (!this.m_submenu) {
			this.CancelHideSubMenuTimer();
			return;
		}
		if (this.m_timerHideSubMenu > 0) {
			return;
		}
		this.m_timerHideSubMenu = window.setTimeout(() => {
			this.InternalHideSubMenu();
			this.m_timerHideSubMenu = 0;
		}, 150);
	}
	OnSubMenuDismissed(e) {
		if (this.m_submenu == e) {
			this.InternalHideSubMenu();
		}
	}
	HideSelf() {
		if (this.m_parentInstance) {
			this.m_parentInstance.OnSubMenuDismissed(this);
		} else {
			this.InternalHide();
		}
	}
	InternalHideSubMenu() {
		this.CancelHideSubMenuTimer();
		if (this.m_submenu) {
			if (this.m_submenu.m_element && this.BIsFocusInChildHierarchy()) {
				this.TakeFocus(o.iE.k_EWindowBringToFrontAndForceOS);
			}
			this.m_elSubmenuItem = null;
			this.m_submenu.InternalHide();
			this.m_submenu = undefined;
		}
	}
	TakeFocus(e = o.iE.k_EWindowBringToFrontAndForceOS) {
		if (this.m_popupContextMenu) {
			this.m_popupContextMenu.Focus(e);
		}
		if (this.m_fnTakeFocus) {
			this.m_fnTakeFocus();
		}
	}
	BInternalElementInParentHierarchy(e) {
		return (
			this.m_parentInstance != null &&
			(this.m_parentInstance.BIsChildElement(e) ||
				this.m_parentInstance.BInternalElementInParentHierarchy(e))
		);
	}
	BInternalElementInChildHierarchy(e) {
		return (
			this.m_submenu != null &&
			(this.m_submenu.BIsChildElement(e) ||
				this.m_submenu.BInternalElementInChildHierarchy(e))
		);
	}
	BIsChildElement(e) {
		if (this.m_element) {
			return s.id(this.m_element, e);
		} else {
			return s.id(this.m_popupContextMenu?.root_element, e);
		}
	}
	BHasFocus() {
		if (this.m_popupContextMenu) {
			return this.m_popupContextMenu.focused;
		} else {
			return s.id(this.m_element, this.m_element?.ownerDocument.activeElement);
		}
	}
	BIsFocusInChildHierarchy() {
		return (
			this.m_submenu != null &&
			(this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
		);
	}
	BIsElementInMenuHierarchy(e) {
		return (
			this.BInternalElementInParentHierarchy(e) ||
			this.BInternalElementInChildHierarchy(e)
		);
	}
	BIsSubMenuVisible() {
		return !!this.m_submenu;
	}
	SetLabel(e) {
		this.m_rctLabel = e;
	}
}
(0, r.Cg)([i.sH], a.prototype, "m_bVisible", undefined);
(0, r.Cg)([i.sH.ref], a.prototype, "m_rctLabel", undefined);
export class HP extends a {
	constructor(e, t, n, r, i, s) {
		super(e, t);
		this.m_options = s || {};
		this.m_position = {
			element: n,
			clientX: r,
			clientY: i,
			instance: this,
			options: this.m_options,
			fnOnMenuItemSelected: () => {
				this.Hide();
			},
		};
	}
	Show() {
		super.Show();
	}
	Hide(e = 0) {
		super.Hide(e);
	}
	ForceHide() {
		super.ForceHide();
	}
	BIsSubMenu() {
		return false;
	}
}
class l extends a {
	constructor(e, t, n, r) {
		super(e.Manager, t);
		this.m_parentInstance = e;
		this.m_options = {
			bOverlapVertical: true,
			strClassName: e.options.strClassName,
			bFitToWindow: e.options.bFitToWindow,
			bShiftToFitWindow: e.options.bShiftToFitWindow,
			bForcePopup: r,
		};
		this.m_position = {
			element: n,
			clientX: undefined,
			clientY: undefined,
			instance: this,
			options: this.m_options,
			fnOnMenuItemSelected: () => {
				this.Hide();
			},
			bSubmenu: true,
		};
	}
	Hide() {
		if (this.m_popupContextMenu) {
			window.setTimeout(() => {
				this.m_parentInstance?.HideIfNotInFocus();
			}, 10);
		} else {
			this.m_parentInstance?.Hide();
		}
	}
	ForceHide() {
		this.m_parentInstance?.ForceHide();
	}
	BIsSubMenu() {
		return true;
	}
}
