// Webpack module ID: 79769

import { FindAndRemove } from "../arrayutils.js";
import * as a from "./callbacklist.js";
import { bind } from "../bind.js";

export let CCallbackList = a.CCallbackList;

type FnEquals_t<T> = (currentValue: T, newValue: T) => boolean;
type FnMap_t<T> = (value: T) => any;
type NoArgsFn_t = () => void;

interface Unsubscribable_t {
	Unsubscribe(): void;
}

/**
 * A property that can be used with useSubscribableValue to watch the latest value.
 * This is kind of like an @observable field but without using mobx.
 */
class CSubscribableValue<T> {
	m_callbacks: a.CCallbackList<T>;
	m_currentValue: T;
	m_fnEquals: (currentValue: T, newValue: T) => boolean;

	/** Constructed with a trim interface exposed to external users via the exported SubscribableValue<T> method.  */
	constructor(initialValue: T, fnEquals: FnEquals_t<T>) {
		this.m_callbacks = new CCallbackList();
		this.m_currentValue = initialValue;
		this.m_fnEquals = fnEquals;
	}

	/** Sets a new value and notifies Subscribers of the new value.  */
	Set(newValue: T) {
		if (this.m_fnEquals) {
			if (this.m_fnEquals(this.m_currentValue, newValue)) {
				return;
			}
		} else if (this.m_currentValue === newValue) {
			return;
		}
		this.m_currentValue = newValue;
		this.m_callbacks.Dispatch(newValue);
	}

	/** A snapshot of the current value which can change at any time.  */
	get Value() {
		return this.m_currentValue;
	}

	/** Adds a subscription to the backing CCallbackList and returns an Unsubscribe function.  */
	Subscribe(subscriber: a.CCallbackListCallback_t<T>) {
		return {
			Unsubscribe: this.m_callbacks.Register(subscriber).Unregister,
		};
	}
}

/**
 * Constructs an ISubscribableValue.
 */
export function SubscribableValue<T>(initialValue: T, fnEquals: FnEquals_t<T>) {
	return new CSubscribableValue(initialValue, fnEquals);
}

class CMappedSubscribableValue<T> {
	m_fnMap: FnMap_t<T>;
	m_originalSubscribableValue: CSubscribableValue<T>;
	m_mappedSubscribableValue: CSubscribableValue<T>;
	m_mappedUnsubscribe: Unsubscribable_t;
	m_subscriptionRefCount = 0;

	constructor(
		initialValue: CSubscribableValue<T>,
		fnMap: FnMap_t<T>,
		fnEquals: FnEquals_t<T>,
	) {
		this.m_originalSubscribableValue = initialValue;
		this.m_mappedSubscribableValue = new CSubscribableValue<T>(
			fnMap(initialValue.Value),
			fnEquals,
		);
		this.m_fnMap = fnMap;
	}

	get Value() {
		return this.m_mappedSubscribableValue?.Value;
	}

	Subscribe(subscriber): Unsubscribable_t {
		if (this.m_subscriptionRefCount++ == 0) {
			this.m_mappedUnsubscribe = this.m_originalSubscribableValue.Subscribe(
				(e) => this.m_mappedSubscribableValue.Set(this.m_fnMap(e)),
			);
		}
		const t = this.m_mappedSubscribableValue?.Subscribe(subscriber);
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

export function MappedSubscribableValue<T>(
	initialValue: CSubscribableValue<T>,
	fnMap: FnMap_t<T>,
	fnEquals: FnEquals_t<T>,
) {
	return new CMappedSubscribableValue(initialValue, fnMap, fnEquals);
}

/**
 * Wraps setting and canceling a timeout to cut down on typing
 */
export class CScheduledFunc {
	m_schTimer: number;
	m_fnCallback: NoArgsFn_t;

	Schedule(nTimeoutMS: number, fnCallback: NoArgsFn_t) {
		if (this.IsScheduled()) {
			this.Cancel();
		}
		this.m_fnCallback = fnCallback;
		this.m_schTimer = window.setTimeout(this.ScheduledInternal, nTimeoutMS);
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

	@bind ScheduledInternal() {
		this.m_schTimer = undefined;
		const callback = this.m_fnCallback;
		this.m_fnCallback = undefined;
		callback?.();
	}
}

export class CTrackedEventListeners {
	m_rgListeners = [];

	AddEventListener(element, type, listener) {
		element.addEventListener(type, listener);
		this.m_rgListeners.push({
			element,
			type,
			listener,
		});
	}

	Unregister() {
		for (const listener of this.m_rgListeners) {
			listener.element.removeEventListener(listener.type, listener.listener);
		}
		this.m_rgListeners = [];
	}
}

/**
 * Like Promise.all, but works on an object and returns results of promises as values of those keys
 * @param object
 */
export async function PromiseObj(object: object) {
	const promises = [];
	const objectKeys = Object.keys(object);
	objectKeys.forEach((key) => promises.push(object[key]));

	return (await Promise.all(promises)).reduce(
		(resolvedObject, promiseResult, index) => {
			resolvedObject[objectKeys[index]] = promiseResult;
			return resolvedObject;
		},
		{},
	);
}

export class e0 {
	m_vecCallbacks: NoArgsFn_t[] = [];

	Push(fnCallback: NoArgsFn_t) {
		this.m_vecCallbacks.push(fnCallback);
	}

	PushArrayRemove(vec: any[], item) {
		this.m_vecCallbacks.push(() => FindAndRemove(vec, item));
	}

	@bind Unregister() {
		for (const fnCallback of this.m_vecCallbacks) {
			fnCallback();
		}
		this.m_vecCallbacks = [];
	}

	GetUnregisterFunc() {
		return this.Unregister;
	}
}
