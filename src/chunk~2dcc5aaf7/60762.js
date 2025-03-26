var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./58839.js");
var a = require("./82594.js");
var s = require(/*webcrack:missing*/ "./50376.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./47628.js");
var c = l;
import { Localize } from "../../actual_src/utils/localization.js";
var u = require(/*webcrack:missing*/ "./72476.js");
export function Q(e) {
	const { item: t, strClassName: r, bMinimizePlatforms: l } = e;
	const [d] = (0, a.G6)(t?.id, (0, i.SW)(t?.type), {
		include_platforms: true,
	});
	if (!d) {
		return null;
	}
	const A = d.GetPlatforms();
	if (l) {
		let e =
			A.windows &&
			n.createElement(
				"span",
				{
					title: Localize("#Platform_Windows"),
				},
				n.createElement(s.Xz0, null),
			);
		if ((0, u.Pr)() && A.mac) {
			e = n.createElement(
				"span",
				{
					title: Localize("#Platform_Mac"),
				},
				n.createElement(s.kPc, null),
			);
		} else if (((0, u.CI)() || (0, u.Hn)() || (0, u.rf)()) && A.steamos_linux) {
			e = n.createElement(
				"span",
				{
					title: Localize("#Platform_Linux"),
				},
				n.createElement(s.Qte, null),
			);
		}
		if (e) {
			return n.createElement(
				"span",
				{
					className: (0, o.A)(c.CapsulePlatform, r),
				},
				e,
			);
		} else {
			return null;
		}
	}
	return n.createElement(
		"span",
		{
			className: (0, o.A)(c.CapsulePlatform, r),
		},
		A.windows &&
			n.createElement(
				"span",
				{
					title: Localize("#Platform_Windows"),
				},
				n.createElement(s.Xz0, null),
			),
		A.mac &&
			n.createElement(
				"span",
				{
					title: Localize("#Platform_Mac"),
				},
				n.createElement(s.kPc, null),
			),
		A.steamos_linux &&
			n.createElement(
				"span",
				{
					title: Localize("#Platform_Linux"),
				},
				n.createElement(s.Qte, null),
			),
		A.vr_support?.vrhmd &&
			n.createElement(
				"span",
				{
					title: Localize("#Platform_VR"),
				},
				n.createElement(s.VR, null),
			),
	);
}
