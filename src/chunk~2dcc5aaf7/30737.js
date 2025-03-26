var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./10606.js");
var a = require("./6472.js");
import { Localize } from "../../actual_src/utils/localization.js";
var o = require(/*webcrack:missing*/ "./26853.js");
export function vs() {
	const [e, t] = (0, n.useState)(false);
	const [r, i] = (0, n.useState)(false);
	const [a, s] = (0, n.useState)(false);
	const [o, l] = (0, n.useState)(null);
	const [c, m] = (0, n.useState)(null);
	const [u, d] = (0, n.useState)(null);
	const [A, p] = (0, n.useState)(null);
	const [g, h] = (0, n.useState)(null);
	return {
		bLoading: e,
		bError: r,
		bSuccess: a,
		strError: o,
		strSuccess: c,
		elSuccess: A,
		elError: u,
		strThrobber: g,
		fnSetLoading: t,
		fnSetError: i,
		fnSetSuccess: s,
		fnSetStrError: l,
		fnSetStrSuccess: m,
		fnSetElSuccess: p,
		fnSetElError: d,
		fnSetThrobber: h,
	};
}
export function Hh(e) {
	const { strDialogTitle: t, state: r, closeModal: l, strThrobber: c } = e;
	const {
		bLoading: m,
		bError: u,
		bSuccess: d,
		strError: A,
		strSuccess: p,
		elSuccess: g,
		elError: h,
		strThrobber: C,
	} = r;
	if (u || A || h) {
		return n.createElement(
			i.o0,
			{
				strTitle: t,
				bAlertDialog: true,
				closeModal: l,
				className: a.SucessErrorDialog,
			},
			Boolean(A) &&
				n.createElement(
					"div",
					{
						className: a.ErrorStylesWithIcon,
					},
					A || (0, Localize)("#Error_ErrorCommunicatingWithNetwork"),
				),
			Boolean(h) && h,
		);
	} else if (d || p || g) {
		return n.createElement(
			i.o0,
			{
				strTitle: t,
				strDescription: p || (0, Localize)("#EventDisplay_Share_Success"),
				bAlertDialog: true,
				closeModal: l,
				className: a.SucessErrorDialog,
			},
			n.createElement(n.Fragment, null, Boolean(g) && g),
		);
	} else {
		return n.createElement(
			i.o0,
			{
				strTitle: t,
				className: a.SucessErrorDialog,
				closeModal: () => {},
			},
			n.createElement(o.t, {
				string: c || C || (0, Localize)("#Loading"),
				size: "medium",
				position: "center",
			}),
		);
	}
}
