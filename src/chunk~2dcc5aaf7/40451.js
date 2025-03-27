import n from "./63696.js";
import { R7 } from "./11131.js";
import { w } from "./49455.js";
const s = {
	AboutSteam: {
		strURL: "steam://open/about",
	},
	CheckForUpdates: {
		strURL: "steam://checkforupdates",
	},
	ChangeEmail: {
		strURL: "steam://open/changeemail",
	},
	SystemInfo: {
		strURL: "steam://open/systeminfo",
	},
	AddNonSteamGame: {
		strURL: "steam://open/addnonsteamgame",
	},
	Screenshots: {
		strURL: "steam://open/screenshots",
	},
	SystemReport: {
		strURL: "steam://open/systemreport",
	},
	RuntimeInfo: {
		strURL: "steam://open/runtimeinfo",
	},
	Media: {
		strURL: "steam://open/media",
	},
};
export function d() {
	const { ownerWindow } = R7();
	return n.useCallback(
		(t, ...r) => {
			if (!t) {
				return null;
			}
			const s_t = s[t];
			w(
				!("strURL" in s_t) || !("openHandler" in s_t),
				`Can't have both url opener and delegate opener for dialog ${t}`,
			);
			if ("strURL" in s_t) {
				const t = ((e, t) => {
					if (!t) {
						return e;
					}
					let r = e;
					t.forEach((e, n) => {
						if (e && typeof e == "object") {
							if (n === t.length - 1) {
								const t = new URLSearchParams(e);
								r += `/?${t.toString()}`;
							} else {
								console.error(
									"ParameterizeURL got object param for non-last param",
									e,
								);
							}
						} else if (e !== undefined) {
							r += `/${e}`;
						}
					});
					return r;
				})(s_t.strURL, r);
				ownerWindow.location.href = t;
			} else {
				s_t.openHandler(r);
			}
		},
		[ownerWindow],
	);
}
Object.keys(s);
