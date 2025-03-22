var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./6831.js");
var a = i;
var s = require(/*webcrack:missing*/ "./90765.js");
export function H(e) {
	const { onClick: t } = e;
	const r = n.useCallback(
		(e) => e.currentTarget == e.target && (e.preventDefault(), true),
		[],
	);
	const i = n.useCallback(
		(e) => {
			if (r(e) && t) {
				t(e);
			}
		},
		[t, r],
	);
	let o = e.visible ?? true;
	let l = e.appearance == "darkblur" || e.appearance == "blur";
	let c = e.appearance != "transparent" && e.appearance != "blur";
	let m = (0, s.A)(
		a.BackgroundGlass,
		o && a.Visible,
		l && a.Blur,
		c && a.DrawBackground,
	);
	let u = {
		zIndex: e.zIndex ?? null,
	};
	return n.createElement(
		"div",
		{
			className: m,
			style: u,
			onClick: i,
			onMouseDown: r,
			onTouchStart: r,
		},
		e.children,
	);
}
