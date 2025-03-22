const n = new (require(/*webcrack:missing*/ "./83599.js").wd)("video");
n.Info;
export const q_ = n.Debug;
n.Error;
n.Warning;
export function ap(e) {
	let t = Math.floor(e / 3600);
	let r = Math.floor(e / 60) % 60;
	let n = Math.floor(e) % 60;
	let i = n.toString();
	if (n < 10) {
		i = "0" + i;
	}
	let a = r.toString();
	if (r < 10 && t > 0) {
		a = "0" + a;
	}
	return (t > 0 ? t + ":" : "") + a + ":" + i;
}
export function Mc() {
	let e = false;
	try {
		e = MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d4032,mp4a.40.2"');
	} catch (e) {}
	return e;
}
export function aM() {
	let e = document
		.createElement("video")
		.canPlayType(
			'application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"',
		);
	return e === "probably" || e === "maybe";
}
