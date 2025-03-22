var r = require("./85688.js");
var i = require("./20893.js");
class s {
	m_root;
	constructor(e) {
		this.m_root = e;
	}
	static SerializeNavState(e, t = true, n = true) {
		return {
			root: s.SerializeNavNode(e, t, n),
			bHadFocus: e.BFocusWithin(),
		};
	}
	static SerializeNavNode(e, t = true, n = true) {
		let r = null;
		const [i, o] = e.GetChildren();
		if (i.length && o != -1 && t) {
			r = i.map((e, t) => s.SerializeNavNode(e, t == o || n, n));
		}
		return {
			sNavKey: e.NavKey,
			iActiveChild: o,
			rgChildren: r,
		};
	}
	static RestoreSerializedNavState(e, t, n = 0) {
		const { root: r, bHadFocus: o } = t;
		e.Tree.Controller.RestoreHistoryTransaction(() => {
			s.RestoreSerializedNavNode(e, r);
			if (n == 1 || (n == 0 && o)) {
				e.BTakeFocus(i.D$.APPLICATION);
			}
		});
	}
	static RestoreSerializedNavNode(e, t) {
		const { sNavKey: n, iActiveChild: i, rgChildren: o } = t;
		if (n) {
			(0, r.w)(n == e.NavKey, "navkey mismatch");
		}
		e.SetActiveChild(i);
		if (o && o.length) {
			const [t] = e.GetChildren();
			let n = new Map();
			t.forEach((e) => {
				if (e.NavKey) {
					n.set(e.NavKey, e);
				}
			});
			for (const e of o) {
				if (!e.sNavKey) {
					continue;
				}
				const t = n.get(e.sNavKey);
				if (t) {
					s.RestoreSerializedNavNode(t, e);
				}
			}
			if (i != -1 && o[i]?.sNavKey) {
				const r = n.get(o[i].sNavKey);
				if (r) {
					e.SetActiveChild(t.indexOf(r));
				}
			}
			let r = 0;
			let a = 0;
			while (r < t.length && a < o.length) {
				while (r < t.length && t[r].NavKey) {
					r++;
				}
				while (a < o.length && o[a].sNavKey) {
					a++;
				}
				if (r >= t.length || a >= o.length) {
					break;
				}
				s.RestoreSerializedNavNode(t[r], o[a]);
				r++;
				a++;
			}
		}
	}
}
export function Ze(e) {
	return s.SerializeNavState(e, true, false);
}
export function LU(e, t, n = 0) {
	return s.RestoreSerializedNavState(e, t, n);
}
export class nv extends s {
	m_rgHistory = [];
	PushState() {
		this.m_rgHistory.push(s.SerializeNavState(this.m_root));
	}
	PopState(e = 0) {
		if (this.m_rgHistory.length) {
			s.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
		}
	}
}
export class Gt extends s {
	m_mapHistory = new Map();
	SaveState(e) {
		this.m_mapHistory.set(e, s.SerializeNavState(this.m_root));
	}
	RestoreState(e, t = 0) {
		const n = this.m_mapHistory.get(e);
		return (
			!!n &&
			(console.log(`Restoring history for state ${e}`),
			s.RestoreSerializedNavState(this.m_root, n, t),
			true)
		);
	}
}
