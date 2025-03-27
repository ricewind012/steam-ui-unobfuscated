import "./83957.js";
import n from "./83599.js";
import { A } from "./36500.js";
const a = new n.wd("Login");
export const tG = a.Info;
export const q_ = a.Debug;
export const tH = a.Warning;
export const ZI = a.Error;
export function P8(e, t) {
	let r = A.getPublicKey(t.publickey_mod, t.publickey_exp);
	let n = A.encrypt(e, r);
	if (n === false) {
		return null;
	} else {
		return n;
	}
}
