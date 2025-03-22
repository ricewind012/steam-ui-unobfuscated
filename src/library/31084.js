require("./87531.js");
var r = require("./21937.js");
var i = require("./49455.js");
export const XX = new (class {
	m_mapManagers = new WeakMap();
	GetContextMenuManagerFromWindow(e) {
		let t = e?.ownerDocument?.defaultView || window;
		return this.GetContextMenuManager(t);
	}
	GetContextMenuManager(e) {
		let t = this.m_mapManagers.get(e);
		if (!t) {
			let n = e;
			while (!t && n.opener) {
				n = n.opener;
				t = this.m_mapManagers.get(n);
			}
		}
		if (!t) {
			t = new r.z();
			this.m_mapManagers.set(e, t);
		}
		return t;
	}
	SetMenuManager(e, t) {
		(0, i.w)(
			this.m_mapManagers.get(e) === undefined || !t || e == window,
			`Stomping CContextMenuManager for ${e.document.title}!`,
		);
		this.m_mapManagers.set(e, t);
	}
	RegisterChildWindow(e, t) {
		this.m_mapManagers.set(t, this.GetContextMenuManager(e));
		return () => this.m_mapManagers.delete(t);
	}
})();
export function lX(e, t, n) {
	let r;
	let i;
	let o;
	let a = t;
	if (a?.preventDefault && a?.stopPropagation) {
		if (a.shiftKey || (a.altKey && !n?.bRootContextMenu)) {
			return null;
		}
		a.preventDefault();
		a.stopPropagation();
		o = a.currentTarget;
		r = a.clientX;
		i = a.clientY;
	} else {
		o = t;
	}
	let c = XX.GetContextMenuManagerFromWindow(o).CreateContextMenuInstance(
		e,
		o,
		r,
		i,
		n,
	);
	c.Show();
	if (n?.bCreateHidden) {
		c.Hide();
	}
	return c;
}
