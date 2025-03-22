var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
export function R(e) {
	const {
		visible: t = true,
		className: r,
		keepMounted: a = false,
		expandDirection: s = "height",
		msAnimationDuration: o = 250,
		children: l,
	} = e;
	const {
		style: c,
		active: m,
		refDiv: u,
	} = (function (e, t = "height", r = 250) {
		const a = n.useRef();
		const s = n.useRef(true);
		const [o, l] = n.useState("idle");
		const [c, m] = n.useState({});
		n.useLayoutEffect(() => {
			if (s.current) {
				s.current = false;
			} else {
				l("start");
			}
		}, [e]);
		n.useLayoutEffect(() => {
			const r = a.current;
			const n = t == "height" ? "scrollHeight" : "scrollWidth";
			const s = () => {
				i.unstable_batchedUpdates(() => {
					m({});
					l("idle");
				});
			};
			if (o == "start") {
				const i = r[n];
				if (i == 0) {
					s();
				} else {
					m((r) => ({
						[t]: e ? "0px" : `${i}px`,
						...r,
						overflow: "hidden",
					}));
					l("active");
				}
			} else if (o == "active") {
				r.scrollTop;
				const i = r[n];
				m({
					overflow: "hidden",
					[t]: e ? `${i}px` : "0px",
				});
				r.addEventListener("transitionend", s);
				return () => {
					r.removeEventListener("transitionend", s);
				};
			}
		}, [o, e]);
		const u = {
			...c,
			transition: `${t} ${r}ms`,
		};
		return {
			style: u,
			active: o != "idle",
			refDiv: a,
		};
	})(t, s, o);
	if (t || m || a) {
		return n.createElement(
			"div",
			{
				className: r,
				ref: u,
				style: c,
			},
			l,
		);
	} else {
		return null;
	}
}
