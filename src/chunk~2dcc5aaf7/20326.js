import n from "./63696.js";
import i from "./71162.js";
import s, { M } from "./19840.js";
const a = i;
export function Vs() {
	return M("DebugPointer_Enabled", false);
}
export function Lb() {
	return M("DebugPointer_Size", 12);
}
export function Hy() {
	return M("DebugPointer_Opacity_Hovering", 1);
}
export function y_() {
	return M("DebugPointer_Opacity_NotHovering", 0.5);
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
	const t = (() => {
		const [e, setE] = n.useState(undefined);
		const r = n.useCallback((e) => {
			setE(e?.ownerDocument.defaultView);
		}, []);
		UV(e);
		return r;
	})();
	return (
		<div
			ref={t}
			style={{
				display: "none",
			}}
		/>
	);
}
