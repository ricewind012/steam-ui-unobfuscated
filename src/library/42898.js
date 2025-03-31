import {
	useCallback,
	useEffect,
	useRef,
	useState,
	useLayoutEffect,
} from "react";
import { QS, Ue } from "./28864.js";

// ideally these utils should not have many dependencies beyond react and dom.
// please put any mobx-referencing utilities in mobxutils.ts and not in here

export function xP(e, t) {
	return (e, t, n) => n;
}
export function Z3(e, t, n = []) {
	const i = useCallback(e, []);
	useEffect(() => {
		if (!i) {
			return;
		}
		const e = setTimeout(i, t);
		return () => clearTimeout(e);
	}, [t, ...n]);
}
export function eV(e, t, n = []) {
	const IRef = useRef(e);
	IRef.current = e;
	useEffect(() => {
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
	const SRef = useRef(e);
	SRef.current = e;
	useEffect(() => {
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
	const SRef = useRef(t);
	SRef.current = t;
	const [o, setO] = useState(false);
	const CRef = useRef(0);
	const l = useCallback(() => {
		setO(true);
		if (SRef.current) {
			SRef.current();
		}
	}, []);
	const u = useCallback(() => {
		window.clearTimeout(CRef.current);
	}, []);
	const m = useCallback(() => {
		setO(false);
		u();
		CRef.current = window.setTimeout(l, e);
	}, [u, e, l]);
	const d = useCallback(() => {
		if (n) {
			m();
		}
	}, [n, m]);
	useEffect(d, [e, d]);
	useEffect(() => u, [u]);
	useEffect(() => {
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
	const [n, setN] = useState(e <= 0);
	useEffect(() => setN(false), t);
	Z3(() => setN(true), e, t);
	return n;
}
export function vJ(e, t, n) {
	const [i, setI] = useState(n);
	useEffect(() => {
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
	const [, setE] = useState(0);
	return useCallback(() => setE((e) => e + 1), []);
}
export function xM() {
	const ERef = useRef(false);
	useEffect(
		() => () => {
			ERef.current = true;
		},
		[],
	);
	return useCallback(() => ERef.current, []);
}
export function _g(e) {
	const TRef = useRef({
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
	useEffect(() => {
		const t_current = TRef.current;
		return () => t_current.fnExecuteLatestCallback();
	}, []);
	return useCallback(
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
	useEffect(() => {
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
	useEffect(() => {
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
	useEffect(() => {
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
	useLayoutEffect(() => {
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
	const [t, setT] = useState(e?.Value);
	useEffect(() => {
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
	useEffect(() => {
		if (e == null) {
			return;
		}
		const n = e.Subscribe(t);
		return n?.Unsubscribe;
	}, [e, t]);
}
export function uN(e, t, n = 1000) {
	const IRef = useRef(t);
	IRef.current = t;
	const [s, setS] = useState(e);
	const [a, setA] = useState(false);
	const l = useCallback(() => {
		setS(e);
		setA(false);
	}, [e, setS]);
	const { fnStopTimer, fnRestartTimer } = L$(n, l, false);
	const h = useCallback(
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
	const TRef = useRef(null);
	useEffect(() => {
		TRef.current = e;
	});
	return TRef.current;
}
export function uH(e, t) {
	const [n, setN] = useState(e);
	useEffect(() => {
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
	const [t, setT] = useState(e);
	return [
		t,
		useCallback(() => setT(true), []),
		useCallback(() => setT(false), []),
	];
}
export function bs(e) {
	const TRef = useRef();
	return useCallback(() => {
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
	const NRef = useRef();
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
	const TRef = useRef();
	TRef.current = e;
	const NRef = useRef(false);
	const s = useCallback((e) => {
		if (!NRef.current) {
			TRef.current?.(e);
		}
		NRef.current = false;
	}, []);
	const o = useCallback((e) => {
		TRef.current?.(e);
		NRef.current = true;
	}, []);
	const a = [xA("mousedown", s), xA("touchstart", o)];
	return Ue(...a);
}
export function OP() {
	const [e, setE] = useState(false);
	return [
		e,
		{
			onMouseEnter: useCallback(() => setE(true), []),
			onMouseLeave: useCallback(() => setE(false), []),
		},
	];
}
export function aA(e = "vertical") {
	const t = e == "vertical";
	const NRef = useRef();
	const SRef = useRef(true);
	const ORef = useRef(true);
	const a = CH();
	const c = useCallback(() => {
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
	const l = useCallback(
		(e) => {
			NRef.current = e;
			c();
		},
		[c],
	);
	const u = useCallback(
		(e) => {
			c();
		},
		[c],
	);
	useLayoutEffect(c, [c]);
	const m = useCallback(() => c(), [c]);
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
	const [e, setE] = useState(() => O());
	return {
		...e,
		reset: useCallback(() => {
			const e = O();
			setE(e);
			return e;
		}, []),
	};
}
