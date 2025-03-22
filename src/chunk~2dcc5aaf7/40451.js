var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./11131.js");
var a = require(/*webcrack:missing*/ "./49455.js");
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
	const { ownerWindow: e } = (0, i.R7)();
	return n.useCallback(
		(t, ...r) => {
			if (!t) {
				return null;
			}
			const n = s[t];
			(0, a.w)(
				!("strURL" in n) || !("openHandler" in n),
				"Can't have both url opener and delegate opener for dialog " + t,
			);
			if ("strURL" in n) {
				const t = (function (e, t) {
					if (!t) {
						return e;
					}
					let r = e;
					t.forEach((e, n) => {
						if (e && typeof e == "object") {
							if (n === t.length - 1) {
								const t = new URLSearchParams(e);
								r += "/?" + t.toString();
							} else {
								console.error(
									"ParameterizeURL got object param for non-last param",
									e,
								);
							}
						} else if (e !== undefined) {
							r += "/" + e;
						}
					});
					return r;
				})(n.strURL, r);
				e.location.href = t;
			} else {
				n.openHandler(r);
			}
		},
		[e],
	);
}
Object.keys(s);
