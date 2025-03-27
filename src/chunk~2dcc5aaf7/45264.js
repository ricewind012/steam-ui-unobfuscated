import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { I } from "./61416.js";
import { jE } from "./3715.js";
import { n as n_1 } from "./26667.js";
import { rT, NL, n2, oh } from "./23472.js";
import { Sy } from "./38602.js";
const m = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"GameNotesCloudStore",
).Debug;
export function Yh() {
	const e = Sy();
	return I({
		queryKey: ["GameNotes", "GamesWithNotes"],
		queryFn: () => e.GetGamesWithNotes(),
		staleTime: 1800000,
	});
}
function d(e) {
	if ("appid" in e) {
		return ["GameNotes", "NotesByAppID", e.appid];
	} else {
		return ["GameNotes", "NotesForShortcut", rT(e.shortcut)];
	}
}
function A(e, t) {
	return {
		queryKey: d(t),
		queryFn: async () => (await e.GetGameNotesList(t, true)) || [],
		staleTime: 1800000,
		enabled: !!t,
	};
}
export function vg(e) {
	const t = Sy();
	return I(A(t, e));
}
export function P6(e, t) {
	const r = Sy();
	return I({
		...A(r, e),
		select: (e) => e.find((e) => e.id === t),
	});
}
export function df(e, t) {
	const r = jE();
	const n = Sy();
	const i = NL(e);
	return n_1({
		scope: {
			id: `${"appid" in e ? e.appid : e.shortcut_name}_${e.id}`,
		},
		mutationFn: (t) => {
			m(`Saving note ${t.title}`);
			return n.SaveGameNote(e, t.title, t.bbcode);
		},
		onMutate(t) {
			const n = {
				...e,
				title: t.title,
				content: t.bbcode,
			};
			f(r, i, (e) => e.map((e) => (e.id == n.id ? n : e)));
			return n;
		},
		onSuccess(e, t, n) {
			f(r, i, (t) =>
				t.map((t) =>
					t.id === n.id
						? {
								...t,
								id: e,
								not_persisted: false,
							}
						: t,
				),
			);
		},
		onError(e) {
			t(e.message || e.name);
		},
	});
}
export function qF(e) {
	const t = jE();
	const r = Sy();
	return n.useCallback(() => {
		const n = Localize("#UserGameNotes_UntitledNote_Title");
		const i = r.NewNote(e, n);
		f(t, e, (e) => [...e, i]);
		return i.id;
	}, [t, r, e]);
}
export function Bc(e, t) {
	const r = jE();
	const n = Sy();
	const e_id = e.id;
	return n_1({
		mutationFn: async () =>
			e.not_persisted ? e_id : await n.DeleteGameNote(NL(e), e_id),
		onSuccess: () => {
			f(r, NL(e), (e) => e.filter((e) => e.id != e_id));
			if (t) {
				t();
			}
		},
	});
}
function f(e, t, r) {
	e.setQueryData(d(t), (e) => e && r(e));
}
export function QP(e, t) {
	return n.useMemo(() => (t ? n2(t) : oh(e)), [e, t]);
}
