var n = require("./63098.js");
var i = require("./1965.js");
var a = require("./34394.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./45264.js");
var l = require("./23472.js");
var c = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var u = require("./82332.js");
var d = require(/*webcrack:missing*/ "./69164.js");
var A = require(/*webcrack:missing*/ "./72476.js");
var p = require("./35488.js");
var g = require("./64608.js");
var h = require("./18869.js");
var C = require("./73259.js");
var _ = require(/*webcrack:missing*/ "./49519.js");
const f = 5;
export function E(e) {
	return s.createElement(
		a.A,
		{
			mode: "appdetails",
		},
		s.createElement(y, {
			...e,
		}),
	);
}
function y(e) {
	const { overview: t, details: r } = e;
	const a = (0, o.QP)(t.appid, t.BIsShortcut() ? t.display_name : undefined);
	const { data: l } = (0, o.vg)(a);
	const c = (0, o.qF)(a);
	const d = (0, A.Qn)();
	const h = (0, _.W6)();
	const b = l?.length > f + 1;
	const y = b ? l?.slice(0, f) : l;
	const B = s.useCallback(async () => {
		const e = c();
		if (e) {
			if (d) {
				h.push(C.O.AppNotes(t?.appid, e));
			} else {
				n.U.ShowGameNotesPopup(a, t.display_name, e);
			}
		}
	}, [d, h, a, t?.appid, t.display_name, c]);
	return s.createElement(
		i.n,
		{
			feature: 3,
			primaryAction: !d && {
				label: Localize("#AppDetails_NewNote"),
				action: B,
			},
			label: Localize("#AppDetails_SectionTitle_GameNotes"),
			rightColumnSection: true,
		},
		s.createElement(
			i.n.Body,
			null,
			y
				? y.map((e) =>
						s.createElement(S, {
							key: e.id,
							overview: t,
							note: e,
						}),
					)
				: undefined,
			d &&
				!b &&
				s.createElement(
					g.$n,
					{
						onClick: B,
						className: u.NoteLink,
						noFocusRing: true,
					},
					s.createElement(p.TextNewNote, null),
					Localize("#AppDetails_NewNote"),
				),
			b &&
				s.createElement(w, {
					noteParent: a,
					overview: t,
				}),
		),
	);
}
function S(e) {
	const { note: t, overview: r } = e;
	const i = (0, A.Qn)();
	const a = (0, h.tn)(C.O.AppNotes(r?.appid, t.id));
	const o = !(t.title?.length > 0);
	const p = i
		? a
		: () => n.U.ShowGameNotesPopup((0, l.NL)(t), r.display_name, t.id);
	return s.createElement(
		d.Z,
		{
			className: (0, c.A)(u.NoteLink, o && u.Untitled),
			focusable: true,
			noFocusRing: true,
			onActivate: p,
		},
		o ? Localize("#UserGameNotes_Untitled") : t.title,
	);
}
function w(e) {
	const { noteParent: t, overview: r } = e;
	return s.createElement(
		"div",
		{
			className: (0, c.A)(u.NoteLink, u.ViewAllLink),
			onClick: () => n.U.ShowGameNotesPopup(t, r.display_name),
		},
		Localize("#AppDetails_ViewAllNotes"),
	);
}
