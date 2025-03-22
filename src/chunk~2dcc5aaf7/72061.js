export function Sb(e) {
	return {
		type: "global",
		valMS: e,
	};
}
export function sK(e) {
	return {
		type: "timeline",
		valMS: e,
	};
}
function a(e) {
	return (t) => t.type === e;
}
a("global");
a("timeline");
a("recording");
a("clip");
export function OB(e) {
	return {
		type: "global",
		valPX: e,
	};
}
export function QP(e) {
	return {
		type: "scrollWindow",
		valPX: e,
	};
}
function l(e) {
	return (t) => t.type === e;
}
l("global");
l("clientWindow");
l("virtualWindow");
l("scrollWindow");
