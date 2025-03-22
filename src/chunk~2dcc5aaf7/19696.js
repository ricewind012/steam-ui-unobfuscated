var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./736.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./90685.js");
export function Z(e) {
	const { popup: t, className: r, ...o } = e;
	const l = (0, s.GD)(t);
	const c = n.useRef(null);
	n.useEffect(() => {
		const e = c.current;
		if (e && (0, i.Fj)(t, "Window.SetResizeGrip")) {
			let r = 0;
			let n = 0;
			const i = e.getBoundingClientRect();
			const a = e.ownerDocument.defaultView;
			if (i && a && !l) {
				r = Math.ceil(a.innerWidth - i.left);
				n = Math.ceil(a.innerHeight - i.top);
			}
			t.SteamClient.Window.SetResizeGrip(r, n);
		}
		return () => {
			if ((0, i.Fj)(t, "Window.SetResizeGrip")) {
				t.SteamClient.Window.SetResizeGrip(0, 0);
			}
		};
	}, [t, l]);
	if (l) {
		return null;
	} else {
		return n.createElement("div", {
			className: (0, a.A)("window_resize_grip", r),
			ref: c,
			...o,
		});
	}
}
