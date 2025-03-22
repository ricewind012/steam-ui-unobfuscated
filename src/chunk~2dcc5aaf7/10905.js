export function hF(e) {
	return e.match(/(.*)[\/\\]/)[1];
}
export function gO(e) {
	return e.match(/.*[\/\\](.*)/)[1];
}
export function U8(e) {
	return e.join("/").replace(/\\/g, "/");
}
