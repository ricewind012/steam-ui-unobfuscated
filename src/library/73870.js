import r from "./12368.js";
export class A extends r.P {
	GetString(e) {
		return Promise.resolve(localStorage.getItem(e));
	}
	StoreString(e, t) {
		localStorage.setItem(e, t);
		return Promise.resolve();
	}
	RemoveObject(e) {
		localStorage.removeItem(e);
		return Promise.resolve();
	}
}
