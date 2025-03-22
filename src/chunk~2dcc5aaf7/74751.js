var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require("./73259.js");
var s = require("./45264.js");
var o = require("./21618.js");
var l = require("./64608.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var _u = require("./51076.js");
var d = require("./10325.js");
var A = require("./38602.js");
var p = require("./35488.js");
var g = require(/*webcrack:missing*/ "./98995.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require("./35395.js");
export function u(e) {
	const { bStandalonePage: t } = e;
	const r = (0, i.W5)();
	const a = (0, s.QP)(
		"appid" in r.params && Number(r.params.appid),
		"shortcut_name" in r.params && r.params.shortcut_name,
	);
	const o = S();
	const c = (0, s.qF)(a);
	const m = n.useRef(undefined);
	const { data: u } = (0, s.vg)(a);
	let A;
	let h = false;
	if (u) {
		const e = r.params.noteid || m.current;
		if (e) {
			A = u.find((t) => t.id === e);
			if (!A && r.params.noteid) {
				h = true;
			}
		}
		A ||= u[0];
	}
	if (A) {
		m.current = A.id;
	}
	n.useEffect(() => {
		if (u && u.length == 0) {
			o(a, c(), true);
		}
	}, [o, a, u, c]);
	n.useEffect(() => {
		if (h) {
			o(a, undefined, true);
		}
	}, [o, a, h]);
	const C = n.createElement(
		g.he,
		{
			toolTipContent: "#UserGameNotes_NewNote",
			direction: "top",
		},
		n.createElement(
			l.$n,
			{
				className: d.NewNoteButton,
				onClick: () => {
					const e = c();
					o(a, e);
				},
			},
			n.createElement(p.TextNewNote, null),
		),
	);
	if (u) {
		return n.createElement(f, {
			noteParent: a,
			notes: u,
			activeNoteID: A?.id,
			actions: C,
			bStandalonePage: t,
		});
	} else {
		return null;
	}
}
function f(e) {
	const {
		noteParent: t,
		notes: r,
		activeNoteID: a,
		actions: s,
		bStandalonePage: o,
	} = e;
	const [p, g] = (0, _u.SP)("NotesListCollapsed", false);
	const C = (0, A.wR)();
	const _ = (0, h.Qn)();
	const f = (0, i.W5)();
	const w = (0, l.vn)(f.params.noteid || C ? "ActivePage" : "PageList");
	const B = r.map((e) => ({
		title: e.title?.length > 0 ? e.title : (0, m.we)("#UserGameNotes_Untitled"),
		identifier: e.id,
		content: n.createElement(y, {
			noteParent: t,
			note: e,
		}),
		pageClassName: d.NotePage,
		hideTitle: true,
	}));
	const v = S();
	const I = n.useCallback((e) => v(t, e), [v, t]);
	const E = h.TS.IN_STEAMUI
		? (0, m.we)("#UserGameNotes_NotesList")
		: n.createElement(b, {
				noteParent: t,
			});
	if (_ && o) {
		return n.createElement(l.Bv, {
			title: E,
			pages: B,
			className: (0, c.A)(d.NotesPagedSettings, C && d.PinnedView, w),
			page: a,
			onPageRequested: I,
			bottomControls: s,
			hideList: p,
			toggleHideList: C || _ ? undefined : () => g(!p),
		});
	} else {
		return n.createElement(l.O7, {
			title: E,
			pages: B,
			className: (0, c.A)(d.NotesPagedSettings, C && d.PinnedView, w),
			page: a,
			onPageRequested: I,
			bottomControls: s,
			hideList: p,
			toggleHideList: C || _ ? undefined : () => g(!p),
		});
	}
}
function b(e) {
	const { noteParent: t } = e;
	const r = (0, C.X)("appid" in t ? t.appid : undefined);
	let i;
	i = "appid" in t ? r?.name : t.shortcut;
	return n.createElement(
		n.Fragment,
		null,
		(0, m.we)("#UserGameNotes_NotesForGame", i),
	);
}
function y(e) {
	const { noteParent: t, note: r } = e;
	const i = l.v$();
	const a = S();
	const s = n.useCallback(() => a(t), [a, t]);
	const c = (0, A.wR)();
	return n.createElement(
		n.Fragment,
		null,
		!c &&
			n.createElement(l._Z, {
				onActivate: s,
			}),
		n.createElement(o.U, {
			note: r,
			hidden: !i,
		}),
	);
}
function S(e = false) {
	const t = (0, h.Qn)();
	const r = (0, i.W6)();
	const s = e || t;
	return n.useCallback(
		(e, t, n = s) => {
			let i;
			i =
				"appid" in e
					? a.O.AppNotes(e.appid, t)
					: a.O.ShortcutNotes(e.shortcut, t);
			if (n) {
				r.replace(i, r.location.state);
			} else {
				r.push(i, r.location.state);
			}
		},
		[r, s],
	);
}
