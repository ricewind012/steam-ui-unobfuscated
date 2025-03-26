import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
export class l {
	m_vecCallbacks = [];
	Register(e) {
		this.m_vecCallbacks.push(e);
		return {
			Unregister: () => {
				FindAndRemove(this.m_vecCallbacks, e);
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
