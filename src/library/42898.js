var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./28864.js");
export function xP(e, t) {
	return (e, t, n) => n;
}
export function Z3(e, t, n = []) {
	const i = r.useCallback(e, []);
	r.useEffect(() => {
		if (!i) {
			return;
		}
		const e = setTimeout(i, t);
		return () => clearTimeout(e);
	}, [t, ...n]);
}
export function eV(e, t, n = []) {
	const i = r.useRef(e);
	i.current = e;
	r.useEffect(() => {
		if (!i.current) {
			return;
		}
		const e = setTimeout(() => {
			if (i.current) {
				i.current();
			}
		}, t);
		return () => clearTimeout(e);
	}, [t, ...n]);
}
export function $$(e, t, n = [], i = true) {
	const s = r.useRef(e);
	s.current = e;
	r.useEffect(() => {
		if (!s.current || !i) {
			return;
		}
		const e = setInterval(() => {
			if (s.current) {
				s.current();
			}
		}, t);
		return () => clearInterval(e);
	}, [t, i, ...n]);
}
export function bB(e) {
	const { msInterval: t, bEnabled: n = true } = e;
	$$(CH(), t, [], n);
}
export function L$(e, t, n = true, i = false) {
	const s = r.useRef(t);
	s.current = t;
	const [o, a] = r.useState(false);
	const c = r.useRef(0);
	const l = r.useCallback(() => {
		a(true);
		if (s.current) {
			s.current();
		}
	}, []);
	const u = r.useCallback(() => {
		window.clearTimeout(c.current);
	}, []);
	const m = r.useCallback(() => {
		a(false);
		u();
		c.current = window.setTimeout(l, e);
	}, [u, e, l]);
	const d = r.useCallback(() => {
		if (n) {
			m();
		}
	}, [n, m]);
	r.useEffect(d, [e, d]);
	r.useEffect(() => u, [u]);
	r.useEffect(() => {
		if (o && i) {
			m();
		}
	}, [o, i, m]);
	return {
		bTimerCompleted: o,
		fnStopTimer: u,
		fnRestartTimer: m,
	};
}
export function SK(e, t = []) {
	const [n, i] = r.useState(e <= 0);
	r.useEffect(() => i(false), t);
	Z3(() => i(true), e, t);
	return n;
}
export function vJ(e, t, n) {
	const [i, s] = r.useState(n);
	r.useEffect(() => {
		let t = true;
		const n = e();
		if (n) {
			n.then((e) => {
				if (t) {
					s(e);
				}
			});
		}
		return () => {
			t = false;
		};
	}, t);
	return i;
}
export function CH() {
	const [, e] = r.useState(0);
	return r.useCallback(() => e((e) => e + 1), []);
}
export function xM() {
	const e = r.useRef(false);
	r.useEffect(
		() => () => {
			e.current = true;
		},
		[],
	);
	return r.useCallback(() => e.current, []);
}
export function _g(e) {
	const t = r.useRef({
		flLastExecutionTimeMs: 0,
		fnLatestCallback: null,
		nTimeoutHandle: 0,
		fnExecuteLatestCallback() {
			if (this.fnLatestCallback != null) {
				this.fnLatestCallback();
				this.fnLatestCallback = null;
				this.flLastExecutionTimeMs = Date.now();
			}
			window.clearTimeout(this.nTimeoutHandle);
			this.nTimeoutHandle = 0;
		},
	});
	r.useEffect(() => {
		const e = t.current;
		return () => e.fnExecuteLatestCallback();
	}, []);
	return r.useCallback(
		(n) => {
			const r = t.current;
			r.fnLatestCallback = n;
			const i = Date.now() - r.flLastExecutionTimeMs;
			const s = Math.max(e - i, 0);
			window.clearTimeout(r.nTimeoutHandle);
			r.nTimeoutHandle = window.setTimeout(
				() => r.fnExecuteLatestCallback(),
				s,
			);
		},
		[e],
	);
}
export function ML(e, t, n, i) {
	r.useEffect(() => {
		const r = e?.current;
		if (r && n) {
			r.addEventListener(t, n, i);
			return () => r.removeEventListener(t, n);
		}
	}, [e, t, n]);
}
export function xA(e, t, n) {
	return (0, i.QS)(
		(r) => {
			if (r && t) {
				r.addEventListener(e, t, n);
				return () => r.removeEventListener(e, t);
			}
		},
		[e, t],
	);
}
export function l6(e, t, n, i) {
	r.useEffect(() => {
		if (e && n) {
			e.addEventListener(t, n, i);
			return () => e.removeEventListener(t, n, i);
		}
	}, [e, t, n]);
}
export function Qi(e, t, n, r) {
	return l6(
		e,
		"message",
		function (e) {
			if (t.includes(e.data)) {
				n(this, e);
			}
		},
		r,
	);
}
export function o4(e, t) {
	r.useEffect(() => {
		if (!e || !t) {
			return;
		}
		const n = () => t(e.visibilityState, e);
		n();
		e.addEventListener("visibilitychange", n);
		return () => e.removeEventListener("visibilitychange", n);
	}, [e, t]);
}
export function hL(e, t) {
	r.useLayoutEffect(() => {
		if (!t || !e) {
			return;
		}
		const n = e.Register(t);
		return () => n.Unregister();
	}, [e, t]);
}
export function dh(e) {
	hL(e, CH());
}
export function gc(e) {
	const [t, n] = r.useState(e?.Value);
	r.useEffect(() => {
		if (e == null) {
			return;
		}
		const t = e.Subscribe(n);
		n(e.Value);
		return t?.Unsubscribe;
	}, [e]);
	return t;
}
export function x2(e, t) {
	r.useEffect(() => {
		if (e == null) {
			return;
		}
		const n = e.Subscribe(t);
		return n?.Unsubscribe;
	}, [e, t]);
}
export function uN(e, t, n = 1000) {
	const i = r.useRef(t);
	i.current = t;
	const [s, o] = r.useState(e);
	const [a, c] = r.useState(false);
	const l = r.useCallback(() => {
		o(e);
		c(false);
	}, [e, o]);
	const { fnStopTimer: m, fnRestartTimer: d } = L$(n, l, false);
	const h = r.useCallback(
		(e) => {
			d();
			o(e);
			c(true);
			if (i.current) {
				i.current(e);
			}
		},
		[o, d],
	);
	return [a ? s : e, h, l];
}
export function Sz(e) {
	const t = r.useRef(null);
	r.useEffect(() => {
		t.current = e;
	});
	return t.current;
}
export function uH(e, t) {
	const [n, i] = r.useState(e);
	r.useEffect(() => {
		if (!e) {
			const e = window.setTimeout(() => i(false), t);
			return () => window.clearTimeout(e);
		}
		i(true);
	}, [e, t]);
	return n;
}
export function DF(e, t) {
	return uH(e, t) || e;
}
export function uD(e = false) {
	const [t, n] = r.useState(e);
	return [
		t,
		r.useCallback(() => n(true), []),
		r.useCallback(() => n(false), []),
	];
}
export function bs(e) {
	const t = r.useRef();
	return r.useCallback(() => {
		if (!t.current || t.current.factory != e) {
			t.current = {
				value: e(),
				factory: e,
			};
		}
		return t.current.value;
	}, [e]);
}
export function xx(e, t) {
	const n = r.useRef();
	if (e == null) {
		n.current = e;
		return e;
	} else {
		if (n.current == null || isNaN(n.current)) {
			n.current = e;
		}
		n.current = Math.min(n.current, e + t);
		n.current = Math.max(n.current, e - t);
		return n.current;
	}
}
export function AX(e) {
	const t = r.useRef();
	t.current = e;
	const n = r.useRef(false);
	const s = r.useCallback((e) => {
		if (!n.current) {
			t.current?.(e);
		}
		n.current = false;
	}, []);
	const o = r.useCallback((e) => {
		t.current?.(e);
		n.current = true;
	}, []);
	const a = [xA("mousedown", s), xA("touchstart", o)];
	return (0, i.Ue)(...a);
}
export function OP() {
	const [e, t] = r.useState(false);
	return [
		e,
		{
			onMouseEnter: r.useCallback(() => t(true), []),
			onMouseLeave: r.useCallback(() => t(false), []),
		},
	];
}
export function aA(e = "vertical") {
	const t = e == "vertical";
	const n = r.useRef();
	const s = r.useRef(true);
	const o = r.useRef(true);
	const a = CH();
	const c = r.useCallback(() => {
		const e = (t ? n.current?.scrollTop : n.current?.scrollLeft) ?? 0;
		const r = e == 0;
		const i =
			((t ? n.current?.scrollHeight : n.current?.scrollWidth) ?? 0) - e ==
			((t ? n.current?.clientHeight : n.current?.clientWidth) ?? 0);
		if (s.current != r || o.current != i) {
			s.current = r;
			o.current = i;
			a();
		}
	}, [a, t]);
	const l = r.useCallback(
		(e) => {
			n.current = e;
			c();
		},
		[c],
	);
	const u = r.useCallback(
		(e) => {
			c();
		},
		[c],
	);
	r.useLayoutEffect(c, [c]);
	const m = r.useCallback(() => c(), [c]);
	p = m;
	g = {
		subtree: true,
		childList: true,
	};
	const d = (0, i.QS)(
		(e) => {
			if (!e || !p) {
				return;
			}
			const t = new MutationObserver(p);
			t.observe(e, g);
			return () => t.disconnect();
		},
		[p],
	);
	var p;
	var g;
	const f = xA("scroll", u);
	const w = (0, i.Ue)(f, l, d);
	return {
		bScrolledToBeginning: s.current,
		bScrolledToEnd: o.current,
		ref: w,
	};
}
function O() {
	let e;
	let t;
	return {
		promise: new Promise((n, r) => {
			e = n;
			t = r;
		}),
		resolve: e,
		reject: t,
	};
}
export function ob() {
	const [e, t] = r.useState(() => O());
	return {
		...e,
		reset: r.useCallback(() => {
			const e = O();
			t(e);
			return e;
		}, []),
	};
}
