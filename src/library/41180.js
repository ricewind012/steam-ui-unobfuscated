export const Kp = {
	PerYear: 31536000,
	PerMonth: 2628000,
	PerWeek: 604800,
	PerDay: 86400,
	PerHour: 3600,
	PerMinute: 60,
};
export function JD(e, t) {
	return (
		e.getFullYear() == t.getFullYear() &&
		e.getMonth() == t.getMonth() &&
		e.getDate() == t.getDate()
	);
}
export function Ct(e, t) {
	return e.getFullYear() == t.getFullYear();
}
export function wi(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
}
export function IP(e) {
	return new Promise((t) => setTimeout(t, e));
}
export function _2() {
	return Math.floor(Date.now() / 1000);
}
export function fK(e) {
	return Math.floor(e.getTime() / 1000);
}
export function yS(e) {
	const t = Math.round(e / 1000);
	const n = Math.floor(t % 60);
	const r = Math.floor((t / 60) % 60);
	const i = Math.floor(t / 3600);
	let s = false;
	let o = "";
	if (i > 0) {
		o += i + ":";
		s = true;
	}
	o += s && r < 10 ? "0" + r + ":" : r + ":";
	o += n < 10 ? "0" + n : n;
	return o;
}
