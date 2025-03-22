var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./83231.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require("./44234.js");
var l = require("./46162.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./97422.js");
var u = require(/*webcrack:missing*/ "./53833.js");
var d = require("./52912.js");
var A = require("./95773.js");
export class DH {
	m_mapHovers = new WeakMap();
	GetHover(e) {
		let t = this.m_mapHovers.get(e);
		if (!t) {
			t = new ol(e);
			this.m_mapHovers.set(e, t);
		}
		return t;
	}
}
export class JD {
	constructor() {
		(0, s.Gn)(this);
	}
	m_OwningElement;
	visible = undefined;
	hover;
	popupWindow;
	context;
	m_BlurHandler;
	m_VisibilityHandler;
}
(0, n.Cg)([s.sH], JD.prototype, "visible", undefined);
export class ol {
	m_friend;
	static m_embeddedElements = new l.MX("CFriendHoverContainer");
	m_rgInstances;
	constructor(e) {
		this.m_friend = e;
	}
	get friend() {
		return this.m_friend;
	}
	get persona() {
		return this.m_friend.persona;
	}
	GetInstance(e, t = false) {
		if (this.m_rgInstances) {
			for (let t of this.m_rgInstances) {
				if (t.m_OwningElement == e) {
					return t;
				}
			}
		}
		if (t) {
			let t = new JD();
			t.m_OwningElement = e;
			t.visible = false;
			t.hover = this;
			if (this.m_rgInstances) {
				this.m_rgInstances.push(t);
			} else {
				this.m_rgInstances = [t];
			}
			return t;
		}
		return null;
	}
	ShowPopup(e, t, r) {
		t.visible = true;
		t.m_OwningElement.ownerDocument.defaultView.setTimeout(() => {
			if (t.visible) {
				t.popupWindow ||= new i.Io(e, t, r);
				t.popupWindow.Show();
			}
		}, 250);
		t.m_BlurHandler = () => {
			this.HideByElement(t.m_OwningElement);
		};
		t.m_OwningElement.ownerDocument.defaultView.addEventListener(
			"blur",
			t.m_BlurHandler,
		);
		t.m_VisibilityHandler = (e) => {
			if (e.target.visibilityState === "hidden") {
				this.HideByElement(t.m_OwningElement);
			}
		};
		t.m_OwningElement.ownerDocument.addEventListener(
			"visibilitychange",
			t.m_VisibilityHandler,
		);
	}
	Show(e, t, r) {
		let n = e.currentTarget.ownerDocument.defaultView.innerWidth < 500;
		if (n && !o.TS.IN_CLIENT) {
			return;
		}
		if (d.ZM.DragDropManager.BInDrag()) {
			return;
		}
		this.friend.miniProfileData.EnsureCommunityDataLoaded();
		let s = e.currentTarget;
		let l = (0, d.CO)(e);
		let c = this.GetInstance(s, true);
		c.context = t;
		let m = false;
		if (o.TS.IN_CLIENT) {
			let e = A.xm.UIStore.GetPerContextChatData(l);
			m = e.BUsePopups();
		}
		if (n && m) {
			this.ShowPopup(s, c, l);
		} else {
			let e = a.createElement(i.Rg, {
				hoverInstance: c,
				target: s,
				direction: r,
				onNoSpace: () => {
					if (m) {
						this.ShowPopup(s, c, l);
					}
				},
			});
			ol.m_embeddedElements
				.ShowElementDelayed(s.ownerDocument, 250, e, c)
				.then(() => {
					c.visible = true;
				});
		}
	}
	Hide(e) {
		this.HideByElement(e.currentTarget);
	}
	HideByElement(e) {
		let t = this.GetInstance(e);
		if (t) {
			t.visible = false;
			if (t.m_BlurHandler) {
				e.ownerDocument.defaultView.removeEventListener(
					"blur",
					t.m_BlurHandler,
				);
				t.m_BlurHandler = null;
			}
			if (t.m_VisibilityHandler) {
				e.ownerDocument.removeEventListener(
					"visibilitychange",
					t.m_VisibilityHandler,
				);
				t.m_VisibilityHandler = null;
			}
			if (t.popupWindow && !t.popupWindow.BIsClosed()) {
				let r = t.popupWindow;
				let n = () => {
					if (!r.BIsClosed()) {
						r.Close();
					}
				};
				e.ownerDocument.defaultView.addEventListener("unload", n);
				e.ownerDocument.defaultView.setTimeout(() => {
					e.ownerDocument.defaultView.removeEventListener("unload", n);
					n();
				}, 100);
			} else {
				ol.m_embeddedElements.HideElement(
					t.m_OwningElement.ownerDocument,
					t,
					500,
				);
			}
			u.x9(this.m_rgInstances, t);
		}
	}
	OnContextMenu(e, t) {
		let r = (0, m.tj)((0, d.CO)(t), e, this.m_friend, t);
		this.Hide(t);
		return r;
	}
	HideAllInstances() {
		if (this.m_rgInstances) {
			for (let e of this.m_rgInstances.slice()) {
				this.HideByElement(e.m_OwningElement);
			}
		}
	}
	get data_loader() {
		return this.m_friend.miniProfileData;
	}
}
(0, n.Cg)([c.oI], ol.prototype, "Show", null);
(0, n.Cg)([c.oI], ol.prototype, "Hide", null);
(0, n.Cg)([c.oI], ol.prototype, "OnContextMenu", null);
