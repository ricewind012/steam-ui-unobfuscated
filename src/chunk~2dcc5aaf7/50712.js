const n = 20;
const i = /^.*youtube[^v]+v=(.{11}).*/;
const a = /^.*youtu\.be\/(.{11}).*/;
const s = /^.*youtube.*\/embed\/(.{11}).*/;
const o = /^.*[?&]t=([^&]+)(?:&|$)/;
const l = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function c(e) {
	const t = e?.length < n ? undefined : i.exec(e) || a.exec(e) || s.exec(e);
	return t?.[1];
}
export function N8(e) {
	const t = l.exec(e);
	if (!t?.[1] && !t?.[2] && !t?.[3] && !t?.[4]) {
		return;
	}
	if (t?.[4]) {
		return parseInt(t?.[4]);
	}
	let r = 0;
	if (t?.[1]) {
		r += parseInt(t[1]) * 3600;
	}
	if (t?.[2]) {
		r += parseInt(t[2]) * 60;
	}
	if (t?.[3]) {
		r += parseInt(t[3]);
	}
	return r;
}
export function XU(e) {
	const t = c(e);
	if (!t) {
		return;
	}
	const r = (function (e) {
		const t = o.exec(e);
		return t?.[1];
	})(e);
	return {
		strVideoID: t,
		nStartSeconds: r ? N8(r) : undefined,
	};
}
