export const O = {
	List: () => "/notes/list",
	AppNotes: (e, t) => `/notes/app/${e}/${t ?? ""}`,
	ShortcutNotes: (e, t) => `/notes/shortcut/${e}/${t ?? ""}`,
};
export function o(e, t) {
	if ("appid" in e) {
		return O.AppNotes(e.appid, t);
	} else {
		return O.ShortcutNotes(e.shortcut, t);
	}
}
