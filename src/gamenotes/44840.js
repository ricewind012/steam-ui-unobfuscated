import * as a from "./63098.js";
import * as o from "./34394.js";
import * as r from "./55518.js";
import * as p from "./63696.js";
import * as l from "./49519.js";
import * as u from "./67808.js";
import * as s from "./73259.js";
import * as c from "./45264.js";
import * as i from "./21618.js";
import * as m from "./64608.js";
import * as d from "./10606.js";
import { Localize } from "../../actual_src/utils/localization.js";
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
		return <_ popup={t} refPopup={o} />;
	} else {
		return <P popup={t} refPopup={o} />;
	}
}
function P(e) {
	const { popup: t, refPopup: n } = e;
	const a = Localize("#GameNotes_NoteForGame", t.display_name);
	return (
		<u.p body_class={f.GameNotesPopup}>
			<d.hM
				strName={t.id}
				strTitle={a}
				onDismiss={() => t.close()}
				popupWidth={500}
				popupHeight={500}
				resizable
				refPopup={n}
				className="TODO"
			>
				<m.Y9>{a}</m.Y9>
				<o.A mode="single" closePopup={() => t.close()}>
					<N noteParent={t.noteParent} noteid={t.noteid} />
				</o.A>
			</d.hM>
		</u.p>
	);
}
function N(e) {
	const { noteParent: t, noteid: n } = e;
	const { data: a } = (0, c.P6)(t, n);
	if (a) {
		return <i.U note={a} />;
	} else {
		return null;
	}
}
function _(e) {
	const { popup: t, refPopup: n } = e;
	const a = t.noteParent;
	const u = p.useMemo(() => [(0, s.o)(a)], [a]);
	return (
		<d.hM
			strName={t.id}
			strTitle={t.display_name}
			onDismiss={() => t.close()}
			popupWidth={900}
			popupHeight={830}
			resizable
			refPopup={n}
			className="TODO"
		>
			<l.fS initialEntries={u}>
				<o.A mode="page" closePopup={() => t.close()}>
					<r.default noteParent={a} />
				</o.A>
			</l.fS>
		</d.hM>
	);
}
