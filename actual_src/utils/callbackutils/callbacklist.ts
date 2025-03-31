// Webpack module ID: 90039

import { FindAndRemove } from "../arrayutils.js";

export type CCallbackListCallback_t<T> = (...args: T[]) => void;

//-----------------------------------------------------------------------------
// Purpose: Interface to register and unregister callbacks from, with ability to dispatch.
//-----------------------------------------------------------------------------
export class CCallbackList<T = never> {
	m_vecCallbacks: CCallbackListCallback_t<T>[] = [];

	Register(fnCallback: CCallbackListCallback_t<T>) {
		this.m_vecCallbacks.push(fnCallback);
		return {
			Unregister: () => {
				FindAndRemove(this.m_vecCallbacks, fnCallback);
			},
		};
	}
	Dispatch(...args: T[]) {
		for (const fnCallback of Array.from(this.m_vecCallbacks)) {
			fnCallback(...args);
		}
	}

	ClearAllCallbacks() {
		this.m_vecCallbacks = [];
	}

	CountRegistered() {
		return this.m_vecCallbacks.length;
	}
}
