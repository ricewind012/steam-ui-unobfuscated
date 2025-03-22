var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require("./42723.js");
export function r(e) {
	const t = e.play ?? true;
	const r = e.direction ?? "left";
	const o = e.speed ?? 30;
	const l = e.delay ?? 3;
	const c = e.fadeLength ?? 24;
	const m = Array.isArray(c) ? c : [c, c];
	const u = e.center ?? false;
	const d = e.resetOnPause ?? false;
	const { style: A, className: p, children: g } = e;
	const [h, C] = (0, n.useState)(0);
	const [_, f] = (0, n.useState)(0);
	const b = (0, n.useRef)(null);
	const y = (0, n.useRef)(null);
	const S = (0, n.useCallback)(() => {
		if (y.current && b.current) {
			C(b.current.getBoundingClientRect().width);
			f(y.current.getBoundingClientRect().width);
		}
	}, []);
	const { bVisible: w, ref: B } = (0, a.hd)();
	const v = h < _ && w;
	const I = _ / o;
	const E = (0, i.A)(
		s.Container,
		v && s.Marquee,
		u && s.Center,
		t && s.Playing,
		d && s.ResetOnPause,
	);
	const M = {
		"--fade-length-left": `${m[0]}px`,
		"--fade-length-right": `${m[1]}px`,
		"--delay": `${l}s`,
		"--direction": r === "left" ? "normal" : "reverse",
		"--duration": `${I}s`,
		"--delay": `${l}s`,
		...A,
	};
	const T = (0, a.wY)(S);
	const R = (0, a.Ue)(T, b);
	(0, a.l6)(window, "resize", S);
	(0, n.useEffect)(S, [S]);
	return n.createElement(
		"div",
		{
			className: p,
			ref: B,
		},
		n.createElement(
			"div",
			{
				ref: R,
				style: M,
				className: E,
			},
			n.createElement(
				"div",
				{
					ref: y,
					className: s.Content,
				},
				g,
			),
			v &&
				n.createElement(
					"div",
					{
						className: s.Content,
					},
					g,
				),
		),
	);
}
