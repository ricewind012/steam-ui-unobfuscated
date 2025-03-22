var r = require("./53833.js");
export class l {
	m_vecCallbacks = [];
	Register(e) {
		this.m_vecCallbacks.push(e);
		return {
			Unregister: () => {
				r.x9(this.m_vecCallbacks, e);
			},
		};
	}
	Dispatch(...e) {
		for (const t of Array.from(this.m_vecCallbacks)) {
			t(...e);
		}
	}
	ClearAllCallbacks() {
		this.m_vecCallbacks = [];
	}
	CountRegistered() {
		return this.m_vecCallbacks.length;
	}
}
