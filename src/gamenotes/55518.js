import * as a from "./63696.js";
import * as o from "./49519.js";
import * as r from "./73259.js";
import * as p from "./74751.js";
import * as l from "./39941.js";
import * as u from "./45264.js";
import * as s from "./35395.js";
import * as c from "./26853.js";
import { Localize } from "../../actual_src/utils/localization.js";
function m() {
	const { data: e, isLoading: t } = (0, u.Yh)();
	const n = a.useMemo(
		() => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
		[e],
	);
	if (t) {
		return a.createElement(c.t, {
			msDelayAppear: 300,
		});
	} else {
		return a.createElement(
			"div",
			null,
			a.createElement("h1", null, Localize("#UserGameNotes_NotesList")),
			a.createElement(
				"ul",
				null,
				n.map((e) =>
					a.createElement(d, {
						key: e.appid || e.shortcut_name,
						game: e,
					}),
				),
			),
		);
	}
}
function d(e) {
	const { game: t } = e;
	return a.createElement(
		"li",
		null,
		a.createElement(
			l.N_,
			{
				to: (0, r.o)(
					t.appid
						? {
								appid: t.appid,
							}
						: {
								shortcut: t.shortcut_name,
							},
				),
			},
			t.appid
				? a.createElement(E, {
						appid: t.appid,
					})
				: t.shortcut_name,
		),
	);
}
function E(e) {
	const { appid: t } = e;
	const n = (0, s.X)(t);
	return n?.name;
}
export default function f(e) {
	return a.createElement(
		o.dO,
		null,
		a.createElement(
			o.qh,
			{
				path: r.O.List(),
			},
			a.createElement(m, null),
		),
		a.createElement(
			o.qh,
			{
				path: r.O.AppNotes(":appid", ":noteid?"),
			},
			a.createElement(p.u, null),
		),
		a.createElement(
			o.qh,
			{
				path: r.O.ShortcutNotes(":shortcut_name", ":noteid?"),
			},
			a.createElement(p.u, null),
		),
		a.createElement(
			o.qh,
			null,
			a.createElement(o.rd, {
				to: `${(0, r.o)(e.noteParent)}`,
			}),
		),
	);
}
