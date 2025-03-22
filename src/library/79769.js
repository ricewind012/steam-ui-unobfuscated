export let lu = o.l;
var r = require(/*webcrack:missing*/ "./34629.js");
var i = require("./53833.js");
var s = require("./93960.js");
var o = require("./90039.js");
class a {
	m_callbacks;
	m_currentValue;
	m_fnEquals;
	constructor(e, t) {
		this.m_callbacks = new o.l();
		this.m_currentValue = e;
		this.m_fnEquals = t;
	}
	Set(e) {
		if (this.m_fnEquals) {
			if (this.m_fnEquals(this.m_currentValue, e)) {
				return;
			}
		} else if (this.m_currentValue === e) {
			return;
		}
		this.m_currentValue = e;
		this.m_callbacks.Dispatch(e);
	}
	get Value() {
		return this.m_currentValue;
	}
	Subscribe(e) {
		return {
			Unsubscribe: this.m_callbacks.Register(e).Unregister,
		};
	}
}
export function Jc(e, t) {
	return new a(e, t);
}
class l {
	m_fnMap;
	m_originalSubscribableValue;
	m_mappedSubscribableValue;
	m_mappedUnsubscribe;
	m_subscriptionRefCount = 0;
	constructor(e, t, n) {
		this.m_originalSubscribableValue = e;
		this.m_mappedSubscribableValue = new a(t(e.Value), n);
		this.m_fnMap = t;
	}
	get Value() {
		return this.m_mappedSubscribableValue?.Value;
	}
	Subscribe(e) {
		if (this.m_subscriptionRefCount++ == 0) {
			this.m_mappedUnsubscribe = this.m_originalSubscribableValue.Subscribe(
				(e) => this.m_mappedSubscribableValue.Set(this.m_fnMap(e)),
			);
		}
		const t = this.m_mappedSubscribableValue?.Subscribe(e);
		return {
			Unsubscribe: () => {
				t.Unsubscribe();
				if (--this.m_subscriptionRefCount == 0) {
					this.m_mappedUnsubscribe?.Unsubscribe();
					this.m_mappedUnsubscribe = undefined;
				}
			},
		};
	}
}
export function YX(e, t, n) {
	return new l(e, t, n);
}
export class LU {
	m_schTimer;
	m_fnCallback;
	Schedule(e, t) {
		if (this.IsScheduled()) {
			this.Cancel();
		}
		this.m_fnCallback = t;
		this.m_schTimer = window.setTimeout(this.ScheduledInternal, e);
	}
	IsScheduled() {
		return this.m_schTimer !== undefined;
	}
	Cancel() {
		if (this.m_schTimer) {
			clearTimeout(this.m_schTimer);
			this.m_schTimer = undefined;
		}
	}
	ScheduledInternal() {
		this.m_schTimer = undefined;
		const e = this.m_fnCallback;
		this.m_fnCallback = undefined;
		e?.();
	}
}
(0, r.Cg)([s.o], LU.prototype, "ScheduledInternal", null);
export class Ji {
	m_rgListeners = [];
	AddEventListener(e, t, n) {
		e.addEventListener(t, n);
		this.m_rgListeners.push({
			element: e,
			type: t,
			listener: n,
		});
	}
	Unregister() {
		for (const e of this.m_rgListeners) {
			e.element.removeEventListener(e.type, e.listener);
		}
		this.m_rgListeners = [];
	}
}
export async function RR(e) {
	const t = [];
	const n = Object.keys(e);
	n.forEach((n) => t.push(e[n]));
	return (await Promise.all(t)).reduce((e, t, r) => {
		e[n[r]] = t;
		return e;
	}, {});
}
export class e0 {
	m_vecCallbacks = [];
	Push(e) {
		this.m_vecCallbacks.push(e);
	}
	PushArrayRemove(e, t) {
		this.m_vecCallbacks.push(() => i.x9(e, t));
	}
	Unregister() {
		for (const e of this.m_vecCallbacks) {
			e();
		}
		this.m_vecCallbacks = [];
	}
	GetUnregisterFunc() {
		return this.Unregister;
	}
}
(0, r.Cg)([s.o], e0.prototype, "Unregister", null);
