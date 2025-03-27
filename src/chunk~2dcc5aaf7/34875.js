import { useState, useEffect } from "./63696.js";
import i from "./13484.js";
import { m } from "./39039.js";
import "./8573.js";
import "./72476.js";
import s from "./92031.js";
export function RR(e) {
	const [t, setT] = useState(() => i.O3.GetClanEventModel(e));
	const s = m("usePartnerEventByEventGID");
	useEffect(() => {
		if (e && t?.GID != e) {
			i.O3.Init();
			i.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], s).then(
				(t) => {
					if (t?.length == 1 && t[0].GID == e && !s.token.reason) {
						setT(t[0]);
					}
				},
			);
		}
	}, [e, t, s]);
	return t;
}
export function lb(e, t = []) {
	const [r, setR] = useState(null);
	const l = m("useLatestPatchNoteForSource");
	const c = typeof e == "number" ? e : s.sc;
	const m = typeof e == "object" ? e : undefined;
	useEffect(() => {
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
					setR(e[0]);
				}
			});
		}
	}, [c, m, l, t, r]);
	return r;
}
