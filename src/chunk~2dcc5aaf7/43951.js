import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import n, { Cg } from "./34629.js";
import i from "./83231.js";
import a from "./63696.js";
import s, { Gn } from "./89193.js";
import o from "./44234.js";
import l from "./46162.js";
import c from "./52451.js";
import m, { tj } from "./97422.js";
import d, { CO } from "./52912.js";
import A from "./95773.js";
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
		Gn(this);
	}
	m_OwningElement;
	visible = undefined;
	hover;
	popupWindow;
	context;
	m_BlurHandler;
	m_VisibilityHandler;
}
Cg([s.sH], JD.prototype, "visible", undefined);
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
		let e_currentTarget = e.currentTarget;
		let l = CO(e);
		let c = this.GetInstance(e_currentTarget, true);
		c.context = t;
		let m = false;
		if (o.TS.IN_CLIENT) {
			let e = A.xm.UIStore.GetPerContextChatData(l);
			m = e.BUsePopups();
		}
		if (n && m) {
			this.ShowPopup(e_currentTarget, c, l);
		} else {
			let e = (
				<i.Rg
					hoverInstance={c}
					target={e_currentTarget}
					direction={r}
					onNoSpace={() => {
						if (m) {
							this.ShowPopup(e_currentTarget, c, l);
						}
					}}
				/>
			);
			ol.m_embeddedElements
				.ShowElementDelayed(e_currentTarget.ownerDocument, 250, e, c)
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
				let t_popupWindow = t.popupWindow;
				let n = () => {
					if (!t_popupWindow.BIsClosed()) {
						t_popupWindow.Close();
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
			FindAndRemove(this.m_rgInstances, t);
		}
	}
	OnContextMenu(e, t) {
		let r = tj(CO(t), e, this.m_friend, t);
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
Cg([c.oI], ol.prototype, "Show", null);
Cg([c.oI], ol.prototype, "Hide", null);
Cg([c.oI], ol.prototype, "OnContextMenu", null);
