var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./71162.js");
var a = i;
var s = require("./19840.js");
export function Vs() {
	return (0, s.M)("DebugPointer_Enabled", false);
}
export function Lb() {
	return (0, s.M)("DebugPointer_Size", 12);
}
export function Hy() {
	return (0, s.M)("DebugPointer_Opacity_Hovering", 1);
}
export function y_() {
	return (0, s.M)("DebugPointer_Opacity_NotHovering", 0.5);
}
export function UV(e) {
	const [t] = Vs();
	const [r] = Lb();
	const [i] = Hy();
	const [s] = y_();
	n.useEffect(() => {
		if (!t || !e) {
			return;
		}
		const n = e.document.createElement("div");
		n.classList.add(a.DebugPointer);
		n.style.setProperty("--debug-pointer-size", `${r}px`);
		n.style.setProperty("--debug-pointer-opacity-hovering", i.toString());
		n.style.setProperty("--debug-pointer-opacity-not-hovering", s.toString());
		e.document.body.appendChild(n);
		const o = (e) => {
			n.classList.add(a.Hovering);
		};
		const l = (e) => {
			n.classList.remove(a.Hovering);
		};
		const c = (e) => {
			const t = "clientX" in e ? e.clientX : e.touches[0].clientX;
			const r = "clientY" in e ? e.clientY : e.touches[0].clientY;
			n.style.transform = `translateX( ${t}px ) translateY( ${r}px )`;
			n.classList.add(a.Hovering);
		};
		e.document.body.addEventListener("mousemove", c);
		e.document.body.addEventListener("touchmove", c);
		e.document.body.addEventListener("mouseenter", o);
		e.document.body.addEventListener("mouseleave", l);
		return () => {
			e.document.body.removeEventListener("mousemove", c);
			e.document.body.removeEventListener("touchmove", c);
			e.document.body.removeEventListener("mouseenter", o);
			e.document.body.removeEventListener("mouseleave", l);
			e.document.body.removeChild(n);
		};
	}, [t, r, i, s, e]);
}
export function Zi(e) {
	const t = (function () {
		const [e, t] = n.useState(undefined);
		const r = n.useCallback((e) => {
			t(e?.ownerDocument.defaultView);
		}, []);
		UV(e);
		return r;
	})();
	return n.createElement("div", {
		ref: t,
		style: {
			display: "none",
		},
	});
}
