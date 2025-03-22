var n = require(/*webcrack:missing*/ "./46108.js");
export function l(e, t = "#Played_", r = false) {
	if (e >= 120) {
		let r = e / 60;
		r = Math.round(r * 10) / 10;
		let i = n.pf.GetPreferredLocales();
		let a = r.toLocaleString(i, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 1,
		});
		return (0, n.we)(t + "Hours", a);
	}
	if (r && e == 1) {
		return (0, n.we)(t + "Minute", e);
	} else {
		return (0, n.we)(t + "Minutes", e);
	}
}
