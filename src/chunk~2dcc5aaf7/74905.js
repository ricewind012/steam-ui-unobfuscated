var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90242.js");
var a = require(/*webcrack:missing*/ "./45328.js");
var s = require(/*webcrack:missing*/ "./92059.js");
var o = require(/*webcrack:missing*/ "./49455.js");
var l = require(/*webcrack:missing*/ "./72476.js");
export function j(e) {
	const {
		type: t,
		id: r,
		hoverClassName: i,
		fnGetIDOverride: a,
		fnHoverState: s,
		children: c,
	} = e;
	const m = n.useRef(null);
	const u = n.useCallback(
		(e) => {
			if (t != "clan") {
				if (s) {
					s(true);
				}
				if (window.GameHover) {
					window.GameHover(a ? a() : m.current, e, "global_hover", {
						type: t,
						id: r,
						v6: 1,
					});
				}
			}
		},
		[t, s, a, r],
	);
	const d = n.useCallback(
		(e) => {
			if (t != "clan") {
				if (s && e.relatedTarget) {
					s(false);
				}
				if (window.HideGameHover) {
					window.HideGameHover(a ? a() : m.current, e, "global_hover");
				}
			}
		},
		[t, s, a],
	);
	if (l.TS.WEB_UNIVERSE == "dev") {
		(0, o.w)(
			(0, l.yK)() == "store",
			"StoreGameHoverAnchorSource only works on Store web properties",
		);
	}
	return n.createElement(
		"div",
		{
			ref: m,
			className: i,
			onMouseEnter: u,
			onMouseLeave: d,
			onFocus: u,
			onBlur: d,
		},
		c,
	);
}
export function u(e) {
	const { id: t, type: r, strExtraParams: o } = e;
	const m = (0, s.n9)();
	const u =
		r == "clan"
			? (0, a.wJ)(`${l.TS.STORE_BASE_URL}curator/${t}${o ? `?${o}` : ""}`, m)
			: (0, a.wJ)(`${l.TS.STORE_BASE_URL}${r}/${t}${o ? `?${o}` : ""}`, m);
	return n.createElement(
		j,
		{
			...e,
		},
		n.createElement(
			i.Ii,
			{
				className: e.className,
				href: u,
				target: l.TS.IN_CLIENT ? undefined : "_blank",
				rel: "noopener noreferrer",
			},
			e.children,
		),
	);
}
