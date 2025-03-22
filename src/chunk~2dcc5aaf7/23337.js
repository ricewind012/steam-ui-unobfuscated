var n = require(/*webcrack:missing*/ "./63696.js");
var _i = require(/*webcrack:missing*/ "./46108.js");
var a = require("./70057.js");
var s = require("./6561.js");
export function o(e) {
	const {
		className: t,
		srcs: r,
		lazyLoad: i,
		width: a,
		height: s,
		alt: o,
		crossOrigin: l,
	} = e;
	const [c, m] = n.useState(r.length);
	const [u, d] = n.useState(0);
	n.useEffect(() => {
		if (c != r.length) {
			m(r.length);
			d(0);
		}
	}, [c, r.length]);
	const A = n.useCallback(() => {
		if (e.onImageError) {
			e.onImageError(e.srcs[u]);
		}
		if (u + 1 < e.srcs.length) {
			d(u + 1);
		}
	}, [u, e]);
	if (r.length == 0) {
		return null;
	} else {
		return n.createElement("img", {
			className: t,
			src: r[u],
			crossOrigin: l,
			onError: A,
			loading: i ? "lazy" : undefined,
			width: a,
			height: s,
			alt: o,
		});
	}
}
export function i(e) {
	const [t, r] = n.useState(false);
	const {
		className: o,
		src: l,
		lazyLoad: c,
		width: m,
		height: u,
		alt: d,
		crossOrigin: A,
	} = e;
	if (t) {
		return n.createElement(
			"div",
			{
				className: a.ErrorDiv,
			},
			n.createElement("p", null, (0, _i.we)("#Image_ErrorTitle", l)),
			n.createElement(
				"ul",
				null,
				n.createElement("li", null, (0, _i.we)("#Image_Error_msg1")),
				n.createElement("li", null, (0, _i.we)("#Image_Error_msg2")),
				n.createElement("li", null, (0, _i.we)("#Image_Error_msg3")),
			),
			n.createElement("p", null, (0, _i.we)("#Image_Error_suggestion")),
		);
	} else {
		return n.createElement(s.o, {
			className: o,
			src: l,
			onError: () => r(true),
			crossOrigin: A,
			loading: c ? "lazy" : undefined,
			width: m,
			height: u,
			alt: d,
		});
	}
}
