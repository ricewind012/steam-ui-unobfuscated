var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./42898.js");
export function H(e, t) {
	const r = n.useRef();
	const a = n.useRef();
	const s = n.useRef();
	const o = n.useRef();
	const l = (0, i.uH)(e, t);
	n.useEffect(() => {
		if (!e && l) {
			if (r.current) {
				s.current = {
					scrollTop: r.current.scrollTop,
					scrollLeft: r.current.scrollLeft,
				};
			}
			if (a.current) {
				o.current = a.current.GetFocusSnapshot();
			}
		} else if (e && !l) {
			if (r.current && s.current) {
				const { scrollTop: e, scrollLeft: t } = s.current;
				s.current = undefined;
				window.setTimeout(() => {
					r.current.scrollTop = e;
					r.current.scrollLeft = t;
				}, 1);
			}
			if (a.current && o.current) {
				a.current.RestoreFocusSnapshot(o.current, 2);
				o.current = undefined;
			}
		}
	}, [e, l]);
	return {
		bShouldMount: l || e,
		refNav: a,
		refScroll: r,
	};
}
