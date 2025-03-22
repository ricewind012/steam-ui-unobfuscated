var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./61416.js");
var a = require(/*webcrack:missing*/ "./3715.js");
var s = require(/*webcrack:missing*/ "./26667.js");
var o = require("./23472.js");
var l = require("./38602.js");
var c = require(/*webcrack:missing*/ "./46108.js");
const m = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"GameNotesCloudStore",
).Debug;
export function Yh() {
	const e = (0, l.Sy)();
	return (0, i.I)({
		queryKey: ["GameNotes", "GamesWithNotes"],
		queryFn: () => e.GetGamesWithNotes(),
		staleTime: 1800000,
	});
}
function d(e) {
	if ("appid" in e) {
		return ["GameNotes", "NotesByAppID", e.appid];
	} else {
		return ["GameNotes", "NotesForShortcut", (0, o.rT)(e.shortcut)];
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
	const t = (0, l.Sy)();
	return (0, i.I)(A(t, e));
}
export function P6(e, t) {
	const r = (0, l.Sy)();
	return (0, i.I)({
		...A(r, e),
		select: (e) => e.find((e) => e.id === t),
	});
}
export function df(e, t) {
	const r = (0, a.jE)();
	const n = (0, l.Sy)();
	const i = (0, o.NL)(e);
	return (0, s.n)({
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
	const t = (0, a.jE)();
	const r = (0, l.Sy)();
	return n.useCallback(() => {
		const n = (0, c.we)("#UserGameNotes_UntitledNote_Title");
		const i = r.NewNote(e, n);
		f(t, e, (e) => [...e, i]);
		return i.id;
	}, [t, r, e]);
}
export function Bc(e, t) {
	const r = (0, a.jE)();
	const n = (0, l.Sy)();
	const i = e.id;
	return (0, s.n)({
		mutationFn: async () =>
			e.not_persisted ? i : await n.DeleteGameNote((0, o.NL)(e), i),
		onSuccess: () => {
			f(r, (0, o.NL)(e), (e) => e.filter((e) => e.id != i));
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
	return n.useMemo(() => (t ? (0, o.n2)(t) : (0, o.oh)(e)), [e, t]);
}
