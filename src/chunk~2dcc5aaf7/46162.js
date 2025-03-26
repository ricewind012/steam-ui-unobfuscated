var n = require(/*webcrack:missing*/ "./7470.js");
import { BIsParentOrSelf } from "../../actual_src/utils/domutils.js";
class a {
	activeObject;
	instance;
	constructor(e) {
		this.instance = new s(e, false);
	}
}
class s {
	m_parent;
	m_window;
	m_container = null;
	iIntervalShow;
	m_bRemoveOnHide;
	m_reactRoot;
	constructor(e, t = true) {
		this.m_parent = e;
		this.m_window = e.ownerDocument.defaultView;
		this.m_bRemoveOnHide = t;
	}
	Show(e, t) {
		this.CancelShowInterval();
		if (t) {
			return new Promise((r, n) => {
				this.iIntervalShow = this.m_window.setTimeout(() => {
					let t = this.m_parent.ownerDocument;
					if (t.defaultView && !t.defaultView.closed) {
						this.InternalShow(e);
						r();
					}
				}, t);
			});
		} else {
			this.InternalShow(e);
			return Promise.resolve();
		}
	}
	InternalShow(e) {
		if (!this.m_container) {
			this.m_container = this.m_parent.ownerDocument.createElement("div");
			this.m_parent.appendChild(this.m_container);
		}
		this.m_reactRoot ||= n.H(this.m_container);
		this.m_reactRoot.render(e);
	}
	Hide(e) {
		this.CancelShowInterval();
		if (e) {
			this.iIntervalShow = this.m_window.setTimeout(() => {
				this.InternalHide();
			}, e);
		} else {
			this.InternalHide();
		}
	}
	InternalHide() {
		if (this.m_reactRoot) {
			this.m_reactRoot.unmount();
			this.m_reactRoot = undefined;
		}
		if (this.m_container && this.m_bRemoveOnHide) {
			this.m_parent.removeChild(this.m_container);
			this.m_container = null;
		}
	}
	CancelShowInterval() {
		if (this.iIntervalShow !== undefined) {
			this.m_window.clearInterval(this.iIntervalShow);
			this.iIntervalShow = undefined;
		}
	}
	BIsChildElement(e) {
		return this.m_container && BIsParentOrSelf(this.m_container, e);
	}
}
export class MX {
	m_strUniqueID;
	m_mapEmbeddedHovers = new WeakMap();
	constructor(e) {
		this.m_strUniqueID = e;
	}
	ShowElementDelayed(e, t, r, n) {
		let i = this.GetEmbeddedElement(e);
		i.activeObject = n;
		return i.instance.Show(r, t);
	}
	ShowElement(e, t, r) {
		let n = this.GetEmbeddedElement(e);
		n.activeObject = r;
		n.instance.Show(t);
	}
	HideElement(e, t, r) {
		let n = this.GetEmbeddedElement(e);
		if (n.activeObject == t) {
			n.activeObject = undefined;
			n.instance.Hide(r);
		}
	}
	GetEmbeddedElement(e) {
		let t = this.m_mapEmbeddedHovers.get(e);
		if (!t) {
			t = new a(e.body);
			this.m_mapEmbeddedHovers.set(e, t);
		}
		return t;
	}
}
