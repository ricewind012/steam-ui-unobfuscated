require(/*webcrack:missing*/ "./83957.js");
var n = require(/*webcrack:missing*/ "./83599.js");
const i = require("./36500.js").A;
const a = new n.wd("Login");
export const tG = a.Info;
export const q_ = a.Debug;
export const tH = a.Warning;
export const ZI = a.Error;
export function P8(e, t) {
	let r = i.getPublicKey(t.publickey_mod, t.publickey_exp);
	let n = i.encrypt(e, r);
	if (n === false) {
		return null;
	} else {
		return n;
	}
}
