export function kD(e) {
	return e != null && e.focus !== undefined;
}
export function NO(e) {
	if (!e.clientX && !e.clientY && !e.screenX && !e.screenY) {
		return true;
	}
	if (e.relatedTarget) {
		return !id(e.currentTarget, e.relatedTarget);
	}
	{
		const t = e.currentTarget.getBoundingClientRect();
		return (
			(e.clientX <= t.left ||
				e.clientX >= t.right ||
				e.clientY <= t.top ||
				e.clientY >= t.bottom) &&
			(console.log(
				`${e.clientX} <= ${t.left} || ${e.clientX} >= ${t.right} ||\n\t\t\t\t${e.clientY} <= ${t.top} || ${e.clientY} >= ${t.bottom}`,
			),
			true)
		);
	}
}
export function id(e, t) {
	let n = t;
	while (n) {
		if (n.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {
			n = n.parentNode.host;
		}
		if (n == e) {
			return true;
		}
		n = n.parentElement;
	}
	return false;
}
export function TN(e, t) {
	let n = t;
	while (n) {
		n = n.parentElement;
		if (n == e) {
			return true;
		}
	}
	return false;
}
export function WC(e) {
	const t = window.getSelection();
	if (!t) {
		return false;
	}
	let n = 0;
	for (let r = 0; r < t.rangeCount; r++) {
		const i = t.getRangeAt(r);
		if (i.startOffset == i.endOffset) {
			continue;
		}
		if (id(e, i.commonAncestorContainer)) {
			n++;
		}
	}
	return t.rangeCount > 0 && t.rangeCount == n;
}
export function UQ(e, t, n) {
	let r = 0;
	let i = 0;
	if (t < e.left) {
		r = e.left - t;
	} else if (t > e.right) {
		r = t - e.right;
	}
	if (n < e.top) {
		i = e.top - n;
	} else if (n > e.bottom) {
		i = n - e.bottom;
	}
	return Math.sqrt(r * r + i * i);
}
export function bZ(e, t) {
	let n = 0;
	let r = 0;
	if (t.right < e.left) {
		n = e.left - t.right;
	} else if (t.left > e.right) {
		n = t.left - e.right;
	}
	if (t.bottom < e.top) {
		r = e.top - t.bottom;
	} else if (t.top > e.bottom) {
		r = t.top - e.bottom;
	}
	return Math.sqrt(n * n + r * r);
}
export function pd(e, t) {
	return {
		top: e.screenTop + t.top,
		bottom: e.screenTop + t.bottom,
		left: e.screenLeft + t.left,
		right: e.screenLeft + t.right,
	};
}
export function No(e) {
	return e.right - e.left;
}
export function SY(e) {
	return e.bottom - e.top;
}
export function a_(e) {
	let t = 1;
	let n = e;
	while (n != null && n.tagName != "HTML") {
		const e = getComputedStyle(n);
		if (e.zoom) {
			const n = Number.parseFloat(e.zoom);
			if (!isNaN(n)) {
				t *= n;
			}
		}
		n = n.parentElement;
	}
	return t;
}
export function uX(e) {
	let t;
	if (e && kD(e.currentTarget)) {
		t = e.currentTarget.ownerDocument.defaultView;
	}
	return t;
}
export function qf(e) {
	let t;
	if (e) {
		t = e.ownerDocument.defaultView;
	}
	return t;
}
export function ew(e) {
	return e.navigator.clipboard.readText();
}
export function OG(e) {
	let t = window.document;
	try {
		t = window.top.document;
	} catch (e) {}
	const n = t.createElement("textarea");
	n.textContent = e;
	n.style.position = "fixed";
	t.body.appendChild(n);
	n.select();
	try {
		t.execCommand("copy");
	} catch (e) {
		console.warn("Copy to clipboard failed.", e);
	} finally {
		t.body.removeChild(n);
	}
}
export function YQ(e) {
	const t = "steam://openurl/";
	if (e.startsWith(t)) {
		e = e.slice(16);
	}
	OG(e);
}
export function gr(e) {
	if (!e) {
		return null;
	}
	if (e.clipboardData.files.length == 0) {
		return null;
	}
	if (
		e.clipboardData.types.some(
			(e) => (e == "text" || e.startsWith("text/")) && e !== "text/html",
		)
	) {
		return null;
	} else {
		return e.clipboardData.files[0];
	}
}
export function ww(e) {
	const t = e.ownerDocument;
	return (
		t.fullscreen ||
		t.webkitIsFullScreen ||
		t.mozFullScreen ||
		t.msFullscreenElement
	);
}
export function tl(e, t) {
	const n = e;
	if (n.requestFullscreen) {
		n.requestFullscreen();
	} else if (n.webkitRequestFullscreen) {
		n.webkitRequestFullscreen();
	} else if (t && t.webkitSetPresentationMode) {
		t.webkitSetPresentationMode("fullscreen");
	} else if (n.mozRequestFullScreen) {
		n.mozRequestFullScreen();
	} else if (n.msRequestFullscreen) {
		n.msRequestFullscreen();
	}
}
export function MS(e) {
	const t = e.ownerDocument;
	if (t.cancelFullscreen) {
		t.cancelFullscreen();
	} else if (t.webkitCancelFullScreen) {
		t.webkitCancelFullScreen();
	} else if (t.mozCancelFullScreen) {
		t.mozCancelFullScreen();
	} else if (t.msExitFullscreen) {
		t.msExitFullscreen();
	}
}
export function Vr(e) {
	if (ww(e)) {
		MS(e);
	} else {
		tl(e);
	}
}
export function IB(e) {
	return e.nodeName === "INPUT";
}
export function TV(e, t) {
	switch (e) {
		case "TEXTAREA":
			return true;
		case "INPUT":
			switch (t) {
				case "date":
				case "datetime-local":
				case "datetime":
				case "email":
				case "month":
				case "number":
				case "password":
				case "search":
				case "tel":
				case "text":
				case "time":
				case "url":
				case "week":
					return true;
				default:
					return false;
			}
		default:
			return false;
	}
}
export function pE(e, t) {
	const n = e;
	n.lastModifiedDate = new Date();
	n.name = t || Date.now().toString();
	return e;
}
export function _f(e, t) {
	let n = e?.parentElement;
	while (n) {
		if (kD(n)) {
			if (!t || t == "x") {
				const e = window.getComputedStyle(n);
				if (
					e.overflowX == "scroll" ||
					e.overflowX == "auto" ||
					e.position == "fixed"
				) {
					break;
				}
			}
			if (!t || t == "y") {
				const e = window.getComputedStyle(n);
				if (
					e.overflowY == "scroll" ||
					e.overflowY == "auto" ||
					e.position == "fixed"
				) {
					break;
				}
			}
		}
		n = n.parentElement;
	}
	if (kD(n)) {
		return n;
	} else {
		return null;
	}
}
export function $e(e, t) {
	const n = [];
	let r = e;
	while ((r = _f(r, t))) {
		n.push(r);
	}
	return n;
}
export function Kf(e, t) {
	let n = e;
	while (n) {
		if (t(n)) {
			return n;
		}
		n = n.parentElement;
	}
}
export function yU() {
	return (function (e) {
		const t = {};
		e.querySelectorAll('link[rel="stylesheet"]').forEach((e) => {
			t[e.href] = e;
		});
		return t;
	})(document);
}
export function Oe(e, t) {
	lc(e.document, t, true);
}
export function lc(e, t, n) {
	const r = Object.assign({}, t);
	const i = e.getElementsByTagName("head")[0];
	const s = i.getElementsByTagName("link");
	const o = s.length;
	for (let e = 0; e < o; ++e) {
		const t = s[e];
		if (r[t.href]) {
			delete r[t.href];
		} else if (n) {
			t.parentNode?.removeChild(t);
		}
	}
	const a = [];
	for (const t in r) {
		const n = r[t];
		const i = e.createElement("link");
		for (let e = 0; e < n.attributes.length; e++) {
			const t = n.attributes.item(e);
			i.setAttribute(t.name, t.value);
		}
		a.push(i);
	}
	i.prepend(...a);
	return a;
}
export function BA(e, t) {
	let n = e ?? null;
	while (n && !n.contains(t)) {
		n = n.parentElement;
	}
	return n;
}
