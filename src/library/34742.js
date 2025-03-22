export const xr = {
	x: "y",
	y: "x",
};
export function D0() {
	return {
		x: 0,
		y: 0,
	};
}
function s(e, t) {
	return e.x * t.x + e.y * t.y;
}
export function Fg(e, t) {
	return {
		x: t.x - e.x,
		y: t.y - e.y,
	};
}
export function LD(e, t) {
	const n = Fg(e, t);
	return Math.sqrt(s(n, n));
}
function c(e) {
	return (e.min + e.max) / 2;
}
export function wH(e) {
	return {
		x: c(e.x),
		y: c(e.y),
	};
}
