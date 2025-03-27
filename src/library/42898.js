import r from "./63696.js";
import i, { QS, Ue } from "./28864.js";
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
	const IRef = r.useRef(e);
	IRef.current = e;
	r.useEffect(() => {
		if (!IRef.current) {
			return;
		}
		const e = setTimeout(() => {
			if (IRef.current) {
				IRef.current();
			}
		}, t);
		return () => clearTimeout(e);
	}, [t, ...n]);
}
export function $$(e, t, n = [], i = true) {
	const SRef = r.useRef(e);
	SRef.current = e;
	r.useEffect(() => {
		if (!SRef.current || !i) {
			return;
		}
		const e = setInterval(() => {
			if (SRef.current) {
				SRef.current();
			}
		}, t);
		return () => clearInterval(e);
	}, [t, i, ...n]);
}
export function bB(e) {
	const { msInterval, bEnabled = true } = e;
	$$(CH(), msInterval, [], bEnabled);
}
export function L$(e, t, n = true, i = false) {
	const SRef = r.useRef(t);
	SRef.current = t;
	const [o, setO] = r.useState(false);
	const CRef = r.useRef(0);
	const l = r.useCallback(() => {
		setO(true);
		if (SRef.current) {
			SRef.current();
		}
	}, []);
	const u = r.useCallback(() => {
		window.clearTimeout(CRef.current);
	}, []);
	const m = r.useCallback(() => {
		setO(false);
		u();
		CRef.current = window.setTimeout(l, e);
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
	const [n, setN] = r.useState(e <= 0);
	r.useEffect(() => setN(false), t);
	Z3(() => setN(true), e, t);
	return n;
}
export function vJ(e, t, n) {
	const [i, setI] = r.useState(n);
	r.useEffect(() => {
		let t = true;
		const n = e();
		if (n) {
			n.then((e) => {
				if (t) {
					setI(e);
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
	const [, setE] = r.useState(0);
	return r.useCallback(() => setE((e) => e + 1), []);
}
export function xM() {
	const ERef = r.useRef(false);
	r.useEffect(
		() => () => {
			ERef.current = true;
		},
		[],
	);
	return r.useCallback(() => ERef.current, []);
}
export function _g(e) {
	const TRef = r.useRef({
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
		const t_current = TRef.current;
		return () => t_current.fnExecuteLatestCallback();
	}, []);
	return r.useCallback(
		(n) => {
			const t_current = TRef.current;
			t_current.fnLatestCallback = n;
			const i = Date.now() - t_current.flLastExecutionTimeMs;
			const s = Math.max(e - i, 0);
			window.clearTimeout(t_current.nTimeoutHandle);
			t_current.nTimeoutHandle = window.setTimeout(
				() => t_current.fnExecuteLatestCallback(),
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
	return QS(
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
	const [t, setT] = r.useState(e?.Value);
	r.useEffect(() => {
		if (e == null) {
			return;
		}
		const t = e.Subscribe(setT);
		setT(e.Value);
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
	const IRef = r.useRef(t);
	IRef.current = t;
	const [s, setS] = r.useState(e);
	const [a, setA] = r.useState(false);
	const l = r.useCallback(() => {
		setS(e);
		setA(false);
	}, [e, setS]);
	const { fnStopTimer, fnRestartTimer } = L$(n, l, false);
	const h = r.useCallback(
		(e) => {
			fnRestartTimer();
			setS(e);
			setA(true);
			if (IRef.current) {
				IRef.current(e);
			}
		},
		[setS, fnRestartTimer],
	);
	return [a ? s : e, h, l];
}
export function Sz(e) {
	const TRef = r.useRef(null);
	r.useEffect(() => {
		TRef.current = e;
	});
	return TRef.current;
}
export function uH(e, t) {
	const [n, setN] = r.useState(e);
	r.useEffect(() => {
		if (!e) {
			const e = window.setTimeout(() => setN(false), t);
			return () => window.clearTimeout(e);
		}
		setN(true);
	}, [e, t]);
	return n;
}
export function DF(e, t) {
	return uH(e, t) || e;
}
export function uD(e = false) {
	const [t, setT] = r.useState(e);
	return [
		t,
		r.useCallback(() => setT(true), []),
		r.useCallback(() => setT(false), []),
	];
}
export function bs(e) {
	const TRef = r.useRef();
	return r.useCallback(() => {
		if (!TRef.current || TRef.current.factory != e) {
			TRef.current = {
				value: e(),
				factory: e,
			};
		}
		return TRef.current.value;
	}, [e]);
}
export function xx(e, t) {
	const NRef = r.useRef();
	if (e == null) {
		NRef.current = e;
		return e;
	} else {
		if (NRef.current == null || isNaN(NRef.current)) {
			NRef.current = e;
		}
		NRef.current = Math.min(NRef.current, e + t);
		NRef.current = Math.max(NRef.current, e - t);
		return NRef.current;
	}
}
export function AX(e) {
	const TRef = r.useRef();
	TRef.current = e;
	const NRef = r.useRef(false);
	const s = r.useCallback((e) => {
		if (!NRef.current) {
			TRef.current?.(e);
		}
		NRef.current = false;
	}, []);
	const o = r.useCallback((e) => {
		TRef.current?.(e);
		NRef.current = true;
	}, []);
	const a = [xA("mousedown", s), xA("touchstart", o)];
	return Ue(...a);
}
export function OP() {
	const [e, setE] = r.useState(false);
	return [
		e,
		{
			onMouseEnter: r.useCallback(() => setE(true), []),
			onMouseLeave: r.useCallback(() => setE(false), []),
		},
	];
}
export function aA(e = "vertical") {
	const t = e == "vertical";
	const NRef = r.useRef();
	const SRef = r.useRef(true);
	const ORef = r.useRef(true);
	const a = CH();
	const c = r.useCallback(() => {
		const e = (t ? NRef.current?.scrollTop : NRef.current?.scrollLeft) ?? 0;
		const r = e == 0;
		const i =
			((t ? NRef.current?.scrollHeight : NRef.current?.scrollWidth) ?? 0) - e ==
			((t ? NRef.current?.clientHeight : NRef.current?.clientWidth) ?? 0);
		if (SRef.current != r || ORef.current != i) {
			SRef.current = r;
			ORef.current = i;
			a();
		}
	}, [a, t]);
	const l = r.useCallback(
		(e) => {
			NRef.current = e;
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
	const d = QS(
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
	const w = Ue(f, l, d);
	return {
		bScrolledToBeginning: SRef.current,
		bScrolledToEnd: ORef.current,
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
	const [e, setE] = r.useState(() => O());
	return {
		...e,
		reset: r.useCallback(() => {
			const e = O();
			setE(e);
			return e;
		}, []),
	};
}
