import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { W5, W6 } from "./49519.js";
import a from "./73259.js";
import s, { QP, qF, vg } from "./45264.js";
import o from "./21618.js";
import l, { vn } from "./64608.js";
import c, { A as A_1 } from "./90765.js";
import { SP } from "./51076.js";
import d from "./10325.js";
import A, { wR } from "./38602.js";
import p from "./35488.js";
import g from "./98995.js";
import h, { Qn } from "./72476.js";
import C, { X } from "./35395.js";
export function u(e) {
	const { bStandalonePage } = e;
	const r = W5();
	const a = QP(
		"appid" in r.params && Number(r.params.appid),
		"shortcut_name" in r.params && r.params.shortcut_name,
	);
	const o = S();
	const c = qF(a);
	const MRef = n.useRef(undefined);
	const { data } = vg(a);
	let A;
	let h = false;
	if (data) {
		const e = r.params.noteid || MRef.current;
		if (e) {
			A = data.find((t) => t.id === e);
			if (!A && r.params.noteid) {
				h = true;
			}
		}
		A ||= data[0];
	}
	if (A) {
		MRef.current = A.id;
	}
	n.useEffect(() => {
		if (data && data.length == 0) {
			o(a, c(), true);
		}
	}, [o, a, data, c]);
	n.useEffect(() => {
		if (h) {
			o(a, undefined, true);
		}
	}, [o, a, h]);
	const C = (
		<g.he toolTipContent="#UserGameNotes_NewNote" direction="top">
			<l.$n
				className={d.NewNoteButton}
				onClick={() => {
					const e = c();
					o(a, e);
				}}
			>
				<p.TextNewNote />
			</l.$n>
		</g.he>
	);
	if (data) {
		return (
			<F
				noteParent={a}
				notes={data}
				activeNoteID={A?.id}
				actions={C}
				bStandalonePage={bStandalonePage}
			/>
		);
	} else {
		return null;
	}
}
function F(e) {
	const { noteParent, notes, activeNoteID, actions, bStandalonePage } = e;
	const [p, g] = SP("NotesListCollapsed", false);
	const C = wR();
	const _ = Qn();
	const f = W5();
	const w = vn(f.params.noteid || C ? "ActivePage" : "PageList");
	const B = notes.map((e) => ({
		title: e.title?.length > 0 ? e.title : Localize("#UserGameNotes_Untitled"),
		identifier: e.id,

		content: <Y noteParent={noteParent} note={e} />,

		pageClassName: d.NotePage,
		hideTitle: true,
	}));
	const v = S();
	const I = n.useCallback((e) => v(noteParent, e), [v, noteParent]);
	const E = h.TS.IN_STEAMUI ? (
		Localize("#UserGameNotes_NotesList")
	) : (
		<B noteParent={noteParent} />
	);
	if (_ && bStandalonePage) {
		return (
			<l.Bv
				title={E}
				pages={B}
				className={A_1(d.NotesPagedSettings, C && d.PinnedView, w)}
				page={activeNoteID}
				onPageRequested={I}
				bottomControls={actions}
				hideList={p}
				toggleHideList={C || _ || (() => g(!p))}
			/>
		);
	} else {
		return (
			<l.O7
				title={E}
				pages={B}
				className={A_1(d.NotesPagedSettings, C && d.PinnedView, w)}
				page={activeNoteID}
				onPageRequested={I}
				bottomControls={actions}
				hideList={p}
				toggleHideList={C || _ || (() => g(!p))}
			/>
		);
	}
}
function B(e) {
	const { noteParent } = e;
	const r = X("appid" in noteParent ? noteParent.appid : undefined);
	let i;
	i = "appid" in noteParent ? r?.name : noteParent.shortcut;
	return <>{Localize("#UserGameNotes_NotesForGame", i)}</>;
}
function Y(e) {
	const { noteParent, note } = e;
	const i = l.v$();
	const a = S();
	const s = n.useCallback(() => a(noteParent), [a, noteParent]);
	const c = wR();
	return (
		<>
			{!c && <l._Z onActivate={s} />}
			<o.U note={note} hidden={!i} />
		</>
	);
}
function S(e = false) {
	const t = Qn();
	const r = W6();
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
