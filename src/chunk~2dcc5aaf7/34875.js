var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./13484.js");
var a = require("./39039.js");
require(/*webcrack:missing*/ "./8573.js");
require(/*webcrack:missing*/ "./72476.js");
var s = require("./92031.js");
export function RR(e) {
	const [t, r] = (0, n.useState)(() => i.O3.GetClanEventModel(e));
	const s = (0, a.m)("usePartnerEventByEventGID");
	(0, n.useEffect)(() => {
		if (e && t?.GID != e) {
			i.O3.Init();
			i.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], s).then(
				(t) => {
					if (t?.length == 1 && t[0].GID == e && !s.token.reason) {
						r(t[0]);
					}
				},
			);
		}
	}, [e, t, s]);
	return t;
}
export function lb(e, t = []) {
	const [r, o] = (0, n.useState)(null);
	const l = (0, a.m)("useLatestPatchNoteForSource");
	const c = typeof e == "number" ? e : s.sc;
	const m = typeof e == "object" ? e : undefined;
	(0, n.useEffect)(() => {
		if (
			!r ||
			(c != s.sc && r.appid != c) ||
			(m && r.clanSteamID?.GetAccountID() != m.GetAccountID())
		) {
			i.O3.Init();
			i.O3.LoadAdjacentPartnerEvents(
				null,
				m,
				c,
				0,
				1,
				{
					require_tags: ["patchnotes", ...t],
				},
				l,
			).then((e) => {
				if (e?.length && !l.token.reason) {
					o(e[0]);
				}
			});
		}
	}, [c, m, l, t, r]);
	return r;
}
