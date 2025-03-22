import * as a from /*webcrack:missing*/ "./63098.js";
import * as o from /*webcrack:missing*/ "./34394.js";
import * as r from "./55518.js";
import * as p from /*webcrack:missing*/ "./63696.js";
import * as l from /*webcrack:missing*/ "./49519.js";
import * as u from /*webcrack:missing*/ "./67808.js";
import * as s from /*webcrack:missing*/ "./73259.js";
import * as c from /*webcrack:missing*/ "./45264.js";
import * as i from /*webcrack:missing*/ "./21618.js";
import * as m from /*webcrack:missing*/ "./64608.js";
import * as d from /*webcrack:missing*/ "./10606.js";
import * as E from /*webcrack:missing*/ "./46108.js";
import * as f from "./39889.js";
export default function h(e) {
	const { popup: t } = e;
	const [n, o] = p.useState();
	p.useEffect(() => {
		if (n) {
			return a.U.RegisterPopup(t, () => n.SteamClient.Window.BringToFront());
		}
	}, [t, n]);
	if (t.noteid === undefined) {
		return p.createElement(_, {
			popup: t,
			refPopup: o,
		});
	} else {
		return p.createElement(P, {
			popup: t,
			refPopup: o,
		});
	}
}
function P(e) {
	const { popup: t, refPopup: n } = e;
	const a = (0, E.we)("#GameNotes_NoteForGame", t.display_name);
	return p.createElement(
		u.p,
		{
			body_class: f.GameNotesPopup,
		},
		p.createElement(
			d.hM,
			{
				strName: t.id,
				strTitle: a,
				onDismiss: () => t.close(),
				popupWidth: 500,
				popupHeight: 500,
				resizable: true,
				refPopup: n,
				className: "TODO",
			},
			p.createElement(m.Y9, null, a),
			p.createElement(
				o.A,
				{
					mode: "single",
					closePopup: () => t.close(),
				},
				p.createElement(N, {
					noteParent: t.noteParent,
					noteid: t.noteid,
				}),
			),
		),
	);
}
function N(e) {
	const { noteParent: t, noteid: n } = e;
	const { data: a } = (0, c.P6)(t, n);
	if (a) {
		return p.createElement(i.U, {
			note: a,
		});
	} else {
		return null;
	}
}
function _(e) {
	const { popup: t, refPopup: n } = e;
	const a = t.noteParent;
	const u = p.useMemo(() => [(0, s.o)(a)], [a]);
	return p.createElement(
		d.hM,
		{
			strName: t.id,
			strTitle: t.display_name,
			onDismiss: () => t.close(),
			popupWidth: 900,
			popupHeight: 830,
			resizable: true,
			refPopup: n,
			className: "TODO",
		},
		p.createElement(
			l.fS,
			{
				initialEntries: u,
			},
			p.createElement(
				o.A,
				{
					mode: "page",
					closePopup: () => t.close(),
				},
				p.createElement(r.default, {
					noteParent: a,
				}),
			),
		),
	);
}
