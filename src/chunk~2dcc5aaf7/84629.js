const n = new (require(/*webcrack:missing*/ "./83599.js").wd)("GR");
function i(e) {
	return (...t) => {
		const r = `[${(performance.now() / 1000).toFixed(3)}]`;
		e(r, ...t);
	};
}
export const tG = i(n.Debug);
export const fX = i(n.Info);
export const tH = i(n.Warning);
export const ZI = i(n.Error);
export function xv() {
	return n.IsDebugEnabled();
}
