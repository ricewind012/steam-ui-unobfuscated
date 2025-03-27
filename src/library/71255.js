import r, { Cg } from "./34629.js";
import s from "./93960.js";
import o, { _f, qf, aF } from "./13099.js";
import u from "./83599.js";
import m from "./4690.js";
function i(e, t, n) {
	if (e == null || isNaN(e)) {
		return e;
	} else {
		return Math.max(t, Math.min(n, e));
	}
}
class a {
	m_options;
	m_msStart;
	m_msEnd;
	m_bActive = false;
	m_fnBoundAnimationFunc = undefined;
	m_window;
	constructor(e, t) {
		this.m_window = e;
		this.m_options = {
			timing: "sine",
			...t,
		};
	}
	Start() {
		let e;
		this.m_msStart = performance.now();
		this.m_msEnd = this.m_msStart + this.m_options.msDuration;
		switch (this.m_options.timing) {
			case "linear": {
				e = (e) => e;
				break;
			}
			case "cubic-in-out": {
				e = (e) => {
					if (e < 0.5) {
						return e * 4 * e * e;
					} else {
						return (e - 1) * (e * 2 - 2) * (e * 2 - 2) + 1;
					}
				};
				break;
			}
			default: {
				e = (e) => 0.5 - Math.cos(e * Math.PI) / 2;
			}
		}
		this.m_bActive = true;
		this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e);
		this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
	}
	BIsActive() {
		return this.m_bActive;
	}
	End() {
		if (this.m_bActive) {
			try {
				this.Update(1);
			} catch {}
			this.ClearInterval();
			this.FireOnComplete();
		}
	}
	FireOnComplete() {
		if (this.m_options.onComplete) {
			this.m_options.onComplete();
		}
	}
	Cancel() {
		this.m_bActive = false;
	}
	OnInterval(e) {
		if (!this.m_bActive) {
			return;
		}
		let t = performance.now() - this.m_msStart;
		if (t >= this.m_options.msDuration) {
			this.End();
			return;
		}
		let n = t / this.m_options.msDuration;
		try {
			this.Update(e(n));
		} catch {}
		this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
	}
	ClearInterval() {
		this.m_bActive = false;
	}
}
class c extends a {
	m_fnCallback;
	constructor(e, t, n) {
		super(e, t);
		this.m_fnCallback = n;
	}
	Update(e) {
		this.m_fnCallback(e);
	}
}
class l extends a {
	m_object;
	m_propTargets;
	m_props = {};
	constructor(e, t, n) {
		super("ownerDocument" in e ? o.qf(e) : e, n);
		this.m_object = e;
		this.m_propTargets = t;
	}
	Start() {
		this.m_props = {};
		for (let e in this.m_propTargets) {
			let t = parseFloat(this.m_object[e]) || 0;
			let n = this.m_propTargets[e];
			if (t != n) {
				this.m_props[e] = {
					start: t,
					end: n,
				};
			}
		}
		super.Start();
	}
	Update(e) {
		for (let t in this.m_props) {
			let n = this.m_props[t];
			let r = n.start + (n.end - n.start) * e;
			this.m_object[t] = r;
		}
	}
}
const d = new u.wd("ScrollSnap").Debug;
let h = false;
const p = 1.4;
let g;
const f = 500;
export function ZQ(e, t) {
	const e_Element = e.Element;
	if (!e_Element) {
		return;
	}
	let r = [e];
	for (let t = e.Parent; t; t = t.Parent) {
		const e = t.m_Properties?.scrollIntoViewWhenChildFocused;
		if (e === "force") {
			r = [t];
		} else if (e) {
			r.push(t);
		}
	}
	while (r.length) {
		let i = r.pop();
		let s = r.length == 0;
		let o = i?.m_Properties?.scrollIntoViewType;
		if (o === undefined) {
			o = h ? m.Yo.NoTransform : m.Yo.Standard;
		}
		if (i?.m_Properties?.fnScrollIntoViewHandler) {
			if (i.m_Properties.fnScrollIntoViewHandler(e, t, i) !== false) {
				continue;
			}
		}
		const i_m_element = i.m_element;
		const c =
			o == m.Yo.NoTransform ||
			o == m.Yo.NoTransformSparseContent ||
			o == m.Yo.NoTransformSparseContent ||
			!s;
		if (t) {
			const t = c ? QE(i_m_element) : i_m_element.getBoundingClientRect();
			let r = false;
			const i = Math.max((t.bottom - t.top) * p, 40);
			if (
				(g && performance.now() - g < f) ||
				t.bottom < -i ||
				t.top > window.innerHeight + i
			) {
				r = true;
			}
			let s = r ? "auto" : "smooth";
			if (r) {
				g = performance.now();
			}
			if (e.Tree.Controller.BIsRestoringHistory()) {
				s = "auto";
			}
			if (c) {
				Pl(e_Element, i_m_element, s);
			} else {
				i_m_element.scrollIntoView({
					behavior: s,
					block: "nearest",
				});
			}
		} else if (c) {
			Pl(e_Element, i_m_element, "auto");
		} else {
			i_m_element?.scrollIntoView({
				behavior: "auto",
				block: "nearest",
				inline: "nearest",
			});
		}
	}
}
export function QE(e) {
	if (!e) {
		return {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
		};
	}
	if (!("ownerDocument" in e)) {
		return {
			left: 0,
			right: e.innerWidth,
			top: 0,
			bottom: e.innerHeight,
		};
	}
	let t = 0;
	let n = 0;
	let r = e;
	while (r) {
		t += r.offsetTop;
		n += r.offsetLeft;
		if ("ownerDocument" in r) {
			if (window.getComputedStyle(r).position === "fixed") {
				break;
			}
		}
		r = r.offsetParent;
	}
	for (r = e?.parentElement; r; ) {
		const { scrollTop, scrollLeft } = k(r);
		t -= scrollTop;
		n -= scrollLeft;
		if ("ownerDocument" in r) {
			if (window.getComputedStyle(r).position === "fixed") {
				break;
			}
		}
		r = r.parentElement;
	}
	return {
		left: n,
		top: t,
		right: n + e.offsetWidth,
		bottom: t + e.offsetHeight,
	};
}
function b(e, t) {
	if (t == "x") {
		return [e.left, e.right, e.right - e.left];
	} else {
		return [e.top, e.bottom, e.bottom - e.top];
	}
}
function C(e, t, n, r) {
	let [i, s, o] = b(e, r);
	let [a, c, l] = b(t, r);
	let [u, m] = b(n, r);
	if (i < a && s > c) {
		return 0;
	} else if ((i < a && o <= l) || (s > c && o > l)) {
		return i - a - u;
	} else if ((i < a && o > l) || (s > c && o <= l)) {
		return s - c + m;
	} else {
		return 0;
	}
}
function v(e) {
	if (e == "auto") {
		return 0;
	} else if (e.endsWith("px")) {
		return parseInt(e);
	} else {
		console.log("Unsupported length", e);
		return 0;
	}
}
function M(e) {
	if (!("ownerDocument" in e)) {
		return {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
		};
	}
	const t = e.ownerDocument.defaultView.getComputedStyle(e);
	return {
		left: v(t.scrollMarginLeft),
		right: v(t.scrollMarginRight),
		top: v(t.scrollMarginTop),
		bottom: v(t.scrollMarginBottom),
	};
}
function S(e, t) {
	let n = ((e) => {
		let t;
		t =
			"ownerDocument" in e
				? e.ownerDocument.defaultView.getComputedStyle(e)
				: e.document.defaultView.getComputedStyle(
						window.document.documentElement,
					);
		return {
			left: v(t.scrollPaddingLeft),
			right: v(t.scrollPaddingRight),
			top: v(t.scrollPaddingTop),
			bottom: v(t.scrollPaddingBottom),
		};
	})(e);
	return {
		left: Math.max(0, t.left + n.left),
		right: Math.max(0, t.right - n.right),
		top: Math.max(0, t.top + n.top),
		bottom: Math.max(0, t.bottom - n.bottom),
	};
}
function y(e) {
	return e > -1 && e < 1;
}
export function Pl(e, t, n, r, s) {
	d(
		"----------------------------------------------------------------------------------",
	);
	d("Scrolling Into View:", t);
	let a = [];
	let c = t;
	let l = QE(t);
	let u = s ?? Number.MAX_VALUE;
	while (c) {
		let e = _f(c);
		e ||= qf(c);
		let t = M(c);
		let n = S(e, QE(e));
		let m = L(e);
		let h = {
			element: e,
			left: 0,
			top: 0,
		};
		d(
			"Checking scroll div",
			e,
			`scroll y:${m.scrollTop} of ${m.MaxScrollTop()}, x:${
				m.scrollLeft
			} of ${m.MaxScrollLeft()}, adjusted =>`,
			n,
			"target => ",
			l,
		);
		if ((!r || r == "y") && !!aF(e, "y")) {
			h.top = C(l, n, t, "y");
			h.top = i(h.top, -m.scrollTop, m.MaxScrollTop() - m.scrollTop);
			if (s) {
				h.top = Math.min(u, Math.abs(h.top)) * (h.top < 0 ? -1 : 1);
				u -= Math.abs(h.top);
			}
			d(`- checked y: ${h.top}`);
		}
		if ((!r || r == "x") && !!aF(e, "x")) {
			h.left = C(l, n, t, "x");
			h.left = i(h.left, -m.scrollLeft, m.MaxScrollLeft() - m.scrollLeft);
			if (s) {
				h.left = Math.min(u, Math.abs(h.left)) * (h.left < 0 ? -1 : 1);
				u -= Math.abs(h.left);
			}
			d(`- checked x: ${h.left}`);
		}
		a.push(h);
		if (s && !u) {
			break;
		}
		if (!("ownerDocument" in e)) {
			break;
		}
		const p = window.getComputedStyle(e);
		if (p.position === "fixed" || p.position === "sticky") {
			break;
		}
		c = e;
		l = {
			top: l.top - h.top,
			right: l.right - h.left,
			bottom: l.bottom - h.top,
			left: l.left - h.left,
		};
	}
	let m = false;
	for (let e of a) {
		if (y(e.left) && y(e.top)) {
			continue;
		}
		let t = L(e.element);
		let r = t.scrollTop + e.top;
		let s = t.scrollLeft + e.left;
		s = i(s, 0, t.MaxScrollLeft());
		r = i(r, 0, t.MaxScrollTop());
		if (!y(t.scrollLeft - s) || !y(t.scrollTop - r)) {
			t.scrollTo({
				left: s,
				top: r,
				behavior: n,
			});
			if (!m) {
				d("Scrolling:");
				m = true;
			}
			d(`- ${e.top},${e.left} => ${r}, ${s}, behavior: ${n}`, e.element);
		}
	}
}
class B {
	m_element;
	m_fnOriginalScrollTo;
	m_window;
	m_scrollTopTarget = undefined;
	m_scrollLeftTarget = undefined;
	m_animation = undefined;
	constructor(e) {
		if ("ownerDocument" in e) {
			this.m_element = e;
			this.m_fnOriginalScrollTo = e.scrollTo;
			this.m_element.scrollTo = (e, t) => {
				if (typeof e == "number") {
					this.scrollTo({
						left: e,
						top: t,
					});
				} else {
					this.scrollTo(e);
				}
			};
		} else {
			this.m_window = e;
			this.m_element = e.document.documentElement;
		}
	}
	ResetScrollState() {
		this.m_scrollTopTarget = undefined;
		this.m_scrollLeftTarget = undefined;
		if (!this.m_window) {
			this.m_element.style.scrollSnapType = "";
		}
	}
	scrollTo(e) {
		if (e?.behavior != "smooth") {
			if (this.m_animation) {
				this.m_animation.Cancel();
				this.m_animation = undefined;
			}
			if (this.m_window) {
				this.m_window.scrollTo(e);
			} else {
				this.m_fnOriginalScrollTo?.apply(this.m_element, [e]);
			}
			this.ResetScrollState();
		} else {
			const t = e.left ?? this.scrollLeft;
			const n = e.top ?? this.scrollTop;
			let r = "sine";
			if (this.m_animation) {
				this.m_animation.Cancel();
				r = "linear";
			}
			if (
				Math.max(
					Math.abs(this.currentScrollTop - n),
					Math.abs(this.currentScrollLeft - t),
				) > 0
			) {
				const e = {
					msDuration: 200,
					timing: r,
					onComplete: this.ResetScrollState,
				};
				if (this.m_window) {
					const r = this.currentScrollLeft;
					const i = this.currentScrollTop;
					this.m_animation = new c(this.m_window, e, (e) => {
						this.m_window?.scrollTo({
							left: r + (t - r) * e,
							top: i + (n - i) * e,
							behavior: "auto",
						});
					});
				} else {
					this.m_element.style.scrollSnapType = "initial";
					this.m_animation = new l(
						this.m_element,
						{
							scrollTop: n,
							scrollLeft: t,
						},
						e,
					);
				}
				this.m_scrollLeftTarget = t;
				this.m_scrollTopTarget = n;
				this.m_animation.Start();
			}
		}
	}
	get clientWidth() {
		if (this.m_window) {
			return this.m_window.innerWidth;
		} else {
			return this.m_element.clientWidth;
		}
	}
	get clientHeight() {
		if (this.m_window) {
			return this.m_window.innerHeight;
		} else {
			return this.m_element.clientHeight;
		}
	}
	get currentScrollLeft() {
		if (this.m_window) {
			return this.m_window.scrollX;
		} else {
			return this.m_element.scrollLeft;
		}
	}
	get currentScrollTop() {
		if (this.m_window) {
			return this.m_window.scrollY;
		} else {
			return this.m_element.scrollTop;
		}
	}
	get scrollLeft() {
		return this.m_scrollLeftTarget ?? this.currentScrollLeft;
	}
	get scrollTop() {
		return this.m_scrollTopTarget ?? this.currentScrollTop;
	}
	get scrollWidth() {
		return this.m_element.scrollWidth;
	}
	get scrollHeight() {
		return this.m_element.scrollHeight;
	}
	MaxScrollTop() {
		return this.scrollHeight - this.clientHeight;
	}
	MaxScrollLeft() {
		return this.scrollWidth - this.clientWidth;
	}
}
Cg([s.o], B.prototype, "ResetScrollState", null);
const x = new WeakMap();
function L(e) {
	let t = x.get(e);
	if (!t) {
		t = new B(e);
		x.set(e, t);
	}
	return t;
}
function k(e) {
	const t = x.get(e);
	if (t) {
		return {
			scrollLeft: t.scrollLeft,
			scrollTop: t.scrollTop,
		};
	} else {
		return {
			scrollLeft: e.scrollLeft,
			scrollTop: e.scrollTop,
		};
	}
}
