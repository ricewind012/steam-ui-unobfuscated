import n from "./63696.js";
export function _o(e, t) {
	e = Math.round(e);
	t = Math.round(t);
	if (e && t) {
		return `?imw=${e}&imh=${t}&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true`;
	}
	{
		let r = "";
		let n = "";
		if (e) {
			r = `imw=${e}`;
		}
		if (t) {
			n = `imh=${t}`;
		}
		return `?${r}&${n}&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`;
	}
}
export function Dp(e) {
	const { width, height, orig_width, orig_height, src, ...l } = e;
	let c;
	let m = src + _o(width, height);
	let u = 6;
	if (width && orig_width) {
		u = Math.min(u, Math.ceil(orig_width / width));
	}
	if (height && orig_height) {
		u = Math.min(u, Math.ceil(orig_height / height));
	}
	if (u) {
		for (let e of [2, 4, 6]) {
			if (e > u) {
				break;
			}
			if (c) {
				c += ", ";
			} else {
				c = "";
			}
			c += `${src}${_o(width && width * e, height && height * e)} ${e}x`;
		}
	}
	return <img {...l} src={m} srcSet={c} />;
}
export function yh(e) {
	if (e.indexOf("?") > 0) {
		e = e.split("?")[0];
	}
	if (e.endsWith(".jpg")) {
		return 1;
	} else if (e.endsWith(".png")) {
		return 3;
	} else if (e.endsWith(".gif")) {
		return 2;
	} else if (e.endsWith(".mp4")) {
		return 4;
	} else if (e.endsWith(".webm")) {
		return 5;
	} else if (e.endsWith(".vtt")) {
		return 6;
	} else if (e.endsWith(".srt")) {
		return 7;
	} else if (e.endsWith(".webp")) {
		return 10;
	} else {
		return undefined;
	}
}
