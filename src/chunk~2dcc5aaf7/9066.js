import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63098.js";
import i from "./1965.js";
import a from "./34394.js";
import s from "./63696.js";
import o, { QP, vg, qF } from "./45264.js";
import l, { NL } from "./23472.js";
import c, { A as A_1 } from "./90765.js";
import u from "./82332.js";
import d from "./69164.js";
import A, { Qn } from "./72476.js";
import p from "./35488.js";
import g from "./64608.js";
import h, { tn } from "./18869.js";
import C from "./73259.js";
import { W6 } from "./49519.js";
const f = 5;
export function E(e) {
	return (
		<a.A mode="appdetails">
			<Y {...e} />
		</a.A>
	);
}
function Y(e) {
	const { overview, details } = e;
	const a = QP(
		overview.appid,
		overview.BIsShortcut() ? overview.display_name : undefined,
	);
	const { data } = vg(a);
	const c = qF(a);
	const d = Qn();
	const h = W6();
	const b = data?.length > f + 1;
	const y = b ? data?.slice(0, f) : data;
	const B = s.useCallback(async () => {
		const e = c();
		if (e) {
			if (d) {
				h.push(C.O.AppNotes(overview?.appid, e));
			} else {
				n.U.ShowGameNotesPopup(a, overview.display_name, e);
			}
		}
	}, [d, h, a, overview?.appid, overview.display_name, c]);
	return (
		<i.n
			feature={3}
			primaryAction={
				!d && {
					label: Localize("#AppDetails_NewNote"),
					action: B,
				}
			}
			label={Localize("#AppDetails_SectionTitle_GameNotes")}
			rightColumnSection
		>
			<i.n.Body>
				{y
					? y.map((e) => <S key={e.id} overview={overview} note={e} />)
					: undefined}
				{d && !b && (
					<g.$n onClick={B} className={u.NoteLink} noFocusRing>
						<p.TextNewNote />
						{Localize("#AppDetails_NewNote")}
					</g.$n>
				)}
				{b && <W noteParent={a} overview={overview} />}
			</i.n.Body>
		</i.n>
	);
}
function S(e) {
	const { note, overview } = e;
	const i = Qn();
	const a = tn(C.O.AppNotes(overview?.appid, note.id));
	const o = !(note.title?.length > 0);
	const p = i
		? a
		: () => n.U.ShowGameNotesPopup(NL(note), overview.display_name, note.id);
	return (
		<d.Z
			className={A_1(u.NoteLink, o && u.Untitled)}
			focusable
			noFocusRing
			onActivate={p}
		>
			{o ? Localize("#UserGameNotes_Untitled") : note.title}
		</d.Z>
	);
}
function W(e) {
	const { noteParent, overview } = e;
	return (
		<div
			className={A_1(u.NoteLink, u.ViewAllLink)}
			onClick={() => n.U.ShowGameNotesPopup(noteParent, overview.display_name)}
		>
			{Localize("#AppDetails_ViewAllNotes")}
		</div>
	);
}
