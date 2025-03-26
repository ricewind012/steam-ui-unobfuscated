var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require("./88724.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./50376.js");
var c = require("./20492.js");
var m = c;
var u = require("./46217.js");
export const X = (0, i.PA)((e) => {
	const { persona: t, className: r, ...i } = e;
	if (!t) {
		return null;
	}
	if (!t.is_online) {
		return null;
	}
	const c = t.HasStateFlag(512);
	const d = t.HasStateFlag(2048);
	const A = t.IsOnSteamDeck();
	const p = !A && !d && t.HasStateFlag(1024);
	return n.createElement(
		n.Fragment,
		null,
		c &&
			n.createElement(
				"div",
				{
					className: (0, o.A)(
						r,
						m.PersonaStatusIcon,
						m.MobilePhoneIcon,
						(0, s.rO)(t),
					),
					title: Localize("#Platform_Hint_Mobile"),
					...i,
				},
				n.createElement(u.rf, null),
			),
		d &&
			n.createElement(
				"div",
				{
					className: (0, o.A)(r, m.PersonaStatusIcon, m.VRIcon, (0, s.rO)(t)),
					title: Localize("#Platform_Hint_VR"),
					...i,
				},
				n.createElement(l.MUh, null),
			),
		p &&
			n.createElement(
				"div",
				{
					className: (0, o.A)(
						r,
						m.PersonaStatusIcon,
						m.BigPictureIcon,
						(0, s.rO)(t),
					),
					title: Localize("#Platform_Hint_BigPicture"),
					...i,
				},
				n.createElement(l.bPr, null),
			),
		A &&
			n.createElement(
				"div",
				{
					className: (0, o.A)(
						r,
						m.PersonaStatusIcon,
						m.SteamDeckIcon,
						(0, s.rO)(t),
					),
					title: Localize("#Platform_Hint_SteamDeck"),
					...i,
				},
				n.createElement(l.DQe, null),
			),
	);
});
