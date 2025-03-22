var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./57931.js");
var a = require("./58839.js");
var s = require("./82594.js");
var o = require(/*webcrack:missing*/ "./98995.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./15612.js");
var u = require("./59265.js");
var d = u;
var A = require(/*webcrack:missing*/ "./67784.js");
export function j(e) {
	const { info: t, className: r } = e;
	const u = (0, n.useRef)({
		include_release: true,
	});
	const [p] = (0, s.G6)(t?.id, (0, a.SW)(t?.type), u.current);
	const g = p?.BHasDemo();
	const h = g || p?.GetAppType() === 1;
	const C = h
		? (0, c.we)("#Sale_InstallDemo_ttip", p?.GetName())
		: g
			? (0, c.we)("#Sale_CannotInstallDemo_ttip", p?.GetName())
			: (0, c.we)("#Loading");
	if (!(0, A.$W)()) {
		if (!h && g && p?.BIsFree()) {
			return n.createElement(m.h, {
				info: t,
				className: r,
			});
		} else {
			return n.createElement(
				o.he,
				{
					toolTipContent: C,
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						if (h) {
							(0, i.o)(
								p?.GetAppType() === 1 ? p.GetAppID() : p.GetDemoAppIDs()[0],
							);
						}
					},
					className: (0, l.A)(r, d.DemoButton, !h && d.DisabledButton),
				},
				h ? (0, c.we)("#Sale_InstallDemo") : (0, c.we)("#Sale_DemoNotFound"),
			);
		}
	}
}
