export let Ju = A.Ju;
export let BR = A.BR;
export let EN = g.E;
export let pY = u.pY;
export let ZH = u.ZH;
export let nd = u.nd;
export let Nm = p.Nm;
export let x_ = p.x_;
export let Q9 = n.Q9;
export let Ee = u.Ee;
export let KG = u.KG;
export let eV = d.e;
export let o0 = u.o0;
export let hM = n.hM;
export let mt = n.mt;
export let _Z = u._Z;
var n = require("./41480.js");
require(/*webcrack:missing*/ "./36437.js");
var i = require(/*webcrack:missing*/ "./84252.js");
var a = require("./55116.js");
var s = require(/*webcrack:missing*/ "./69164.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require(/*webcrack:missing*/ "./55993.js");
export function Qs(e) {
	const { children: t, navID: r, closeModal: n } = e;
	const m = o.createRef();
	const u = (e) => {
		e.stopPropagation();
		e.preventDefault();
		return true;
	};
	if ((0, l.Qn)() && !l.TS.IN_STEAMUI) {
		return o.createElement(
			i.B2,
			{
				navID: r,
				navTreeRef: m,
				onCancelButton: n,
				className: c.GamepadOnlyModalWrapper,
			},
			o.createElement(
				a.q,
				null,
				o.createElement(
					s.Z,
					{
						className: c.GamepadOnlyPanelWrapper,
						onGamepadDirection: u,
						focusableIfNoChildren: true,
					},
					t,
				),
			),
		);
	} else {
		return o.createElement(o.Fragment, null, t);
	}
}
var u = require("./12774.js");
var d = require("./35376.js");
var A = require(/*webcrack:missing*/ "./3673.js");
var p = require("./46701.js");
var g = require("./94790.js");
