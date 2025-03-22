var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./96593.js");
var a = require("./61175.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./46108.js");
const l = 44032;
const c = 588;
const m = 12592;
const u = [
	12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614,
	12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622,
];
const d = [
	0, 0, 0, 1, 0, 4, 4, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0,
	0, 0,
];
const A = [
	-1, 0, 1, 9, 2, 12, 18, 3, 5, 0, 6, 7, 9, 16, 17, 18, 6, 7, 9, 9, 10, 11, 12,
	14, 15, 16, 17, 18,
];
const p = [
	-1, 0, 1, -1, 2, -1, -1, 3, 4, 5, -1, -1, -1, -1, -1, -1, -1, 6, 7, 8, -1, 9,
	10, 11, 12, 13, 14, 15, 16, 17, 18, -1,
];
function g(e, t) {
	if (e.length === 0) {
		return -1;
	}
	const r = t.charCodeAt(t.length - 1);
	const n = (i = r) < u[0] || i > u[u.length - 1] ? -1 : p[i - m];
	var i;
	if ((!(r >= l) || !(r <= 55203)) && !(n >= 0)) {
		return -1;
	}
	const a = t.slice(0, t.length - 1);
	let s = a.length > 0 ? e.indexOf(a) : 0;
	if (s === -1) {
		return -1;
	}
	let o = s;
	let g = e.slice(s, e.length);
	const h = (r - l) % 28;
	const C = l + n * c;
	while (s >= 0) {
		if (g.length < a.length + 1) {
			return -1;
		}
		const e = g.charCodeAt(a.length);
		let t = false;
		if (n >= 0) {
			t = e >= C && e < C + c;
		} else if (e >= r) {
			switch (h) {
				case 0:
					t = e - r < 28;
					break;
				case 1:
					t = e - r == 2;
					break;
				case 4:
					t = e - r < 3;
					break;
				case 8:
					t = e - r < 8;
					break;
				case 17:
					t = e - r < 2;
			}
		} else if (g.length >= a.length + 2 && r - e < 28) {
			if ((e - l) % 28 === d[h]) {
				const e = A[h];
				if (e >= 0) {
					const r = l + e * c;
					const n = g.charCodeAt(a.length + 1);
					t = n >= r && n < r + c;
				}
			}
		}
		if (t) {
			return o;
		}
		g = g.slice(1, g.length);
		if (g.length === 0) {
			return -1;
		}
		s = a.length > 0 ? g.indexOf(a) : 0;
		if (s === -1) {
			return -1;
		}
		o += s + 1;
		g = g.slice(s, g.length);
	}
	return -1;
}
var h;
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require(/*webcrack:missing*/ "./72476.js");
var f = require(/*webcrack:missing*/ "./49455.js");
var b = require(/*webcrack:missing*/ "./8573.js");
var y = require("./48289.js");
var S = require("./34792.js");
var w = require("./76319.js");
var B = require(/*webcrack:missing*/ "./66343.js");
var v = require("./51095.js");
function I(e, t) {
	return Object.assign(
		{
			rgOptions: [],
			bAcceptUnion: e,
		},
		t || {},
	);
}
export function Pj(e) {
	return e >= 12 && e <= 15;
}
export function $P(e, t) {
	const r = t;
	switch (e) {
		case 1:
			return D[r];
		case 2:
			return k[r];
		case 0:
			return (function (e) {
				switch (e) {
					case 0:
						return "k_EAppTypeInvalid";
					case 1:
						return "k_EAppTypeGame";
					case 2:
						return "k_EAppTypeApplication";
					case 4:
						return "k_EAppTypeTool";
					case 8:
						return "k_EAppTypeDemo";
					case 16:
						return "k_EAppTypeDeprected";
					case 32:
						return "k_EAppTypeDLC";
					case 64:
						return "k_EAppTypeGuide";
					case 128:
						return "k_EAppTypeDriver";
					case 256:
						return "k_EAppTypeConfig";
					case 512:
						return "k_EAppTypeHardware";
					case 1024:
						return "k_EAppTypeFranchise";
					case 2048:
						return "k_EAppTypeVideo";
					case 4096:
						return "k_EAppTypePlugin";
					case 8192:
						return "k_EAppTypeMusicAlbum";
					case 16384:
						return "k_EAppTypeSeries";
					case 32768:
						return "k_EAppTypeComic";
					case 65536:
						return "k_EAppTypeBeta";
					case 1073741824:
						return "k_EAppTypeShortcut";
					case -2147483648:
						return "k_EAppTypeDepotOnly";
				}
				return "Unknown_EProtoAppType_" + e;
			})(r);
		case 3:
			return (function (e) {
				switch (e) {
					case 19:
						return "Action";
					case 21:
						return "Adventure";
					case 597:
						return "Casual";
					case 492:
						return "Indie";
					case 128:
						return "MMO";
					case 699:
						return "Racing";
					case 122:
						return "RPG";
					case 599:
						return "Simulation";
					case 701:
						return "Sports";
					case 9:
						return "Strategy";
				}
				return "Unknown_EGenre_" + e;
			})(r);
		case 4:
			return (function (e) {
				switch (e) {
					case 1:
						return "MultiPlayer";
					case 2:
						return "SinglePlayer";
					case 9:
						return "CoOp";
					case 18:
						return "PartialController";
					case 20:
						return "MMO";
					case 22:
						return "Achievements";
					case 23:
						return "SteamCloud";
					case 24:
						return "SplitScreen";
					case 27:
						return "CrossPlatformMultiPlayer";
					case 28:
						return "FullController";
					case 29:
						return "TradingCards";
					case 30:
						return "Workshop";
					case 31:
						return "VRSupport";
					case 36:
						return "OnlineMultiPlayer";
					case 37:
						return "LocalMultiPlayer";
					case 38:
						return "OnlineCoOp";
					case 39:
						return "LocalCoOp";
					case 44:
						return "RemotePlayTogether";
					case 50:
						return "HighQualitySoundtrackAudio";
					case 62:
						return "FamilySharing";
				}
				return "Unknown_EStoreCategory_" + e;
			})(r);
		case 5:
			return (function (e) {
				if (e === h.EASubscription) {
					return "EAAccess";
				}
			})(r);
		case 6:
			return (function (e) {
				const t = y.O$.GetFriendState(b.b.InitFromAccountID(e));
				if (t.nickname && t.persona) {
					if (S.rV.communityPreferences.bParenthesizeNicknames) {
						return t.persona.m_strPlayerName + " (" + t.nickname + ")";
					} else {
						return t.nickname;
					}
				} else {
					return t.display_name;
				}
			})(t);
		default:
			return "Unknown_EFilterGroup_" + e + "_" + t;
	}
}
export function Qv(e, t) {
	if (e === 6 && !S.rV.communityPreferences.bParenthesizeNicknames) {
		if (y.O$.GetFriendState(b.b.InitFromAccountID(t)).nickname) {
			return true;
		}
	}
	return false;
}
export function gS(e) {
	let t;
	let r;
	let n;
	if (e == "ignored") {
		return null;
	}
	if (k.indexOf(e) >= 0) {
		t = 2;
		r = k.indexOf(e);
		n = (0, o.we)("#FilterElement_" + e);
	} else if (D.indexOf(e) >= 0) {
		t = 1;
		r = D.indexOf(e);
		n = (0, o.we)("#FilterElement_" + e);
	} else {
		r = parseInt(e);
		if (!r) {
			return null;
		}
		t = 4;
		n = i.tw.GetLocalizationForStoreTag(r);
		if (!n) {
			return null;
		}
	}
	return {
		eGroup: t,
		option: r,
		name: n,
	};
}
(function (e) {
	e[(e.EASubscription = 4000)] = "EASubscription";
})((h ||= {}));
const k = [
	"ignored",
	"FullControllerSupport",
	"PartialControllerSupport",
	"VR",
	"TradingCards",
	"Workshop",
	"Achievements",
	"SinglePlayer",
	"MultiPlayer",
	"CoOp",
	"SteamCloud",
	"RemotePlayTogether",
	"SteamDeckVerified",
	"SteamDeckPlayable",
	"SteamDeckUnknown",
	"SteamDeckUnsupported",
	"PS4ControllerSupport",
	"PS4ControllerBTSupport",
	"PS5ControllerSupport",
	"PS5ControllerBTSupport",
	"SteamInputAPI",
	"GamepadPreferred",
	"HDR",
	"FamilySharing",
];
const D = [
	"ignored",
	"Installed",
	"ReadyToPlay",
	"PlayedPreviously",
	"Unplayed",
	"ValidPlatform",
];
function N(e, t) {
	return (
		e.rgOptions.length == 0 ||
		(e.bAcceptUnion ? e.rgOptions.some(t) : e.rgOptions.every(t))
	);
}
function F(e) {
	return (t) => t == e.canonicalAppType;
}
export function Xr(e) {
	return (t) => {
		if (!e) {
			return false;
		}
		switch (t) {
			case 1:
				return e.xbox_controller_support == 2 || e.BHasStoreCategory(28);
			case 2:
				return (
					e.xbox_controller_support == 2 ||
					e.xbox_controller_support == 1 ||
					e.BHasStoreCategory(28) ||
					e.BHasStoreCategory(18)
				);
			case 3:
				return e.vr_supported || e.BHasStoreCategory(31);
			case 4:
				return e.BHasStoreCategory(29);
			case 5:
				return e.BHasStoreCategory(30);
			case 6:
				return e.BHasStoreCategory(22);
			case 7:
				return e.BHasStoreCategory(2);
			case 8:
				return (
					e.BHasStoreCategory(1) ||
					e.BHasStoreCategory(36) ||
					e.BHasStoreCategory(37) ||
					e.BHasStoreCategory(27) ||
					e.BHasStoreCategory(20) ||
					e.BHasStoreCategory(24)
				);
			case 9:
				return (
					e.BHasStoreCategory(9) ||
					e.BHasStoreCategory(38) ||
					e.BHasStoreCategory(39)
				);
			case 10:
				return e.BHasStoreCategory(23);
			case 11:
				return e.BHasStoreCategory(44);
			case 12:
				return e.steam_deck_compat_category >= 3;
			case 13:
				return e.steam_deck_compat_category >= 2;
			case 14:
				return e.steam_deck_compat_category != 1;
			case 15:
				(0, f.w)(false, "Found SteamDeckUnsupported set in AppFilter");
				return true;
			case 16:
				return e.BHasStoreCategory(55) || e.BHasStoreCategory(56);
			case 17:
				return e.BHasStoreCategory(56);
			case 18:
				return e.BHasStoreCategory(57) || e.BHasStoreCategory(58);
			case 19:
				return e.BHasStoreCategory(58);
			case 20:
				return e.BHasStoreCategory(59);
			case 21:
				return e.BHasStoreCategory(60);
			case 22:
				return e.BHasStoreCategory(61);
			case 23:
				return e.BHasStoreCategory(62);
			default:
				return false;
		}
	};
}
function O(e) {
	return (t) => {
		switch (t) {
			case 2: {
				if (e.installed) {
					return true;
				}
				const [t] = S.rV.GetClientSetting("ready_to_play_includes_streaming");
				return !!t && e.per_client_data.some((e) => e.installed);
			}
			case 1:
				return (
					e.canonicalAppType != 2048 &&
					e.local_per_client_data &&
					!!e.local_per_client_data.installed
				);
			case 3:
				return e.rt_last_time_played > 0;
			case 4:
				return !e.rt_last_time_played;
			case 5:
				return (
					!!(0, _.td)() ||
					(e.is_available_on_current_platform && !e.is_invalid_os_type)
				);
			default:
				return false;
		}
	};
}
function P(e) {
	return e.BHasStoreTag;
}
function L(e) {
	return (t) => y.O$.GetOwnedGames(t).has(e.appid) && e.owner_account_id !== t;
}
export function EF(e) {
	return e.mastersub_appid == 1289670;
}
function x(e) {
	return (t) => t === h.EASubscription && EF(e);
}
export function Nm(e, t) {
	if (!e) {
		return 0.75;
	}
	let r = 0;
	const n = e
		.trim()
		.split(" ")
		.sort((e, t) => t.length - e.length);
	for (const e of t) {
		const t = [
			{
				begin: 0,
				end: e.length,
			},
		];
		let o = 1;
		let l = 0;
		n.forEach((e, t) => {
			if (e.length > n[l]?.length) {
				l = t;
			}
		});
		for (let r = 0; r < n.length; ++r) {
			const c = n[r];
			let m;
			let u;
			let d = 0;
			{
				let n = e.indexOf(c, t[0].begin);
				let o = 0;
				while (n >= 0 && o < t.length) {
					if (n >= t[o].end) {
						++o;
					} else if (n < t[o].begin) {
						n = e.indexOf(c, t[o].begin);
					} else {
						i = c;
						a = e;
						const t =
							(s = n) == 0
								? (3 + i.length / a.length) / 4
								: a[s - 1].trim() == "" ||
										a[s - 1].match(/\p{Punctuation}/u) ||
										(a[s].toLocaleUpperCase() == a[s] &&
											a[s - 1].toLocaleLowerCase() == a[s - 1])
									? (2 + i.length / a.length) / 4
									: (1 + i.length / a.length) / 4;
						if (t > d) {
							d = t;
							m = n;
							u = o;
						}
						n = e.indexOf(c, n + 1);
					}
				}
				if (m == null) {
					const t = c.length;
					for (let n = 0; n < e.length - t; n++) {
						const i = (0, B.I)(c, e.substring(n, n + t));
						let a;
						if (i / t >= 0.5) {
							a = 0;
						}
						if (r == l && t > 4 && i < 2) {
							a = (1 + (t - i) / e.length) / 4;
						} else if (c.length > 4) {
							a = (t - i) / e.length / 4;
						}
						if (a > d && a > 0.1) {
							d = a;
						}
					}
				}
			}
			if (r != n.length - 1) {
				const e = m + c.length;
				const r = t[u ?? 0];
				if (m == r?.begin) {
					if (e >= r.end) {
						t.splice(u, 1);
					} else {
						r.begin = e;
					}
				} else if (e >= r?.end) {
					r.end = m;
				} else if (m) {
					const n = {
						begin: e,
						end: r.end,
					};
					r.end = m;
					t.splice(u + 1, 0, n);
				}
			}
			o *= d;
			if (t.length == 0) {
				break;
			}
		}
		r = Math.max(r, o);
	}
	var i;
	var a;
	var s;
	return r;
}
export class E6 {
	m_filterSpec = undefined;
	constructor(e) {
		(0, s.Gn)(this);
		if (e) {
			e.filterGroups[2].rgOptions =
				e.filterGroups[2].rgOptions?.filter((e) => e != 15) || [];
		}
		this.m_filterSpec = {
			nFormatVersion: 2,
			strSearchText: (e && e.strSearchText) || "",
			filterGroups: [
				I(true, e && e.filterGroups[0]),
				I(false, e && e.filterGroups[1]),
				I(false, e && e.filterGroups[2]),
				I(false, e && e.filterGroups[3]),
				I(false, e && e.filterGroups[4]),
				I(false, e && e.filterGroups[5]),
				I(false, e && e.filterGroups[6]),
			],
			setSuggestions: new Set(),
		};
	}
	Reset() {
		this.m_filterSpec.strSearchText = "";
		this.m_filterSpec.filterGroups.forEach((e) => (e.rgOptions = []));
	}
	BIncludesTools() {
		const e = this.GetSelectedOptions(0);
		return !!e.find((e) => e == 4) || e.length == 0;
	}
	static LocalizeAppType(e) {
		switch (e) {
			case 1:
				return "#AppType_1";
			case 2:
				return "#AppType_2";
			case 8192:
				return "#AppType_2000";
			case 2048:
				return "#AppType_800";
			case 4:
				return "#AppType_4";
		}
		return "";
	}
	GetToolTipText() {
		let e = [];
		if (this.searchText) {
			e.push((0, o.we)("#FilterToolTip_SearchText", this.searchText));
		}
		const t = [1, 8192, 2, 2048, 4];
		let r = this.GetSelectedOptions(0);
		if (r.length > 0 && r.length != t.length) {
			e.push(
				t
					.filter((e) => r.indexOf(e) !== -1)
					.map((e) => (0, o.we)(E6.LocalizeAppType(e)))
					.join(", "),
			);
		}
		let n = this.GetSelectedOptions(1);
		if (n.length > 0) {
			e.push(n.map((e) => (0, o.we)("#FilterElement_" + $P(1, e))).join(", "));
		}
		let a = this.GetSelectedOptions(2);
		if (a.length > 0) {
			e.push(a.map((e) => (0, o.we)("#FilterElement_" + $P(2, e))).join(", "));
		}
		let s = this.GetSelectedOptions(3);
		if (s.length > 0) {
			e.push(s.map((e) => i.tw.GetLocalizationForStoreTag(e)).join(", "));
		}
		let l = this.GetSelectedOptions(4);
		if (l.length > 0) {
			e.push(l.map((e) => i.tw.GetLocalizationForStoreTag(e)).join(", "));
		}
		let c = this.GetSelectedOptions(6);
		if (c.length > 0) {
			e.push(c.map((e) => $P(6, e)).join(", "));
		}
		return e;
	}
	get bIsEmpty() {
		return (
			this.searchText.length == 0 &&
			this.m_filterSpec.filterGroups.every((e) => e.rgOptions.length == 0)
		);
	}
	get searchText() {
		return this.m_filterSpec.strSearchText;
	}
	SetSearchText(e) {
		this.m_filterSpec.strSearchText = e;
	}
	get searchSuggestions() {
		return this.m_filterSpec.setSuggestions;
	}
	SetSearchSuggestions(e) {
		this.m_filterSpec.setSuggestions = new Set(e);
	}
	GetSelectedOptions(e) {
		return this.m_filterSpec.filterGroups[e].rgOptions;
	}
	GetAllSelectedOptions() {
		const e = [];
		this.GetSelectedOptions(2).forEach((t) => {
			const r = $P(2, t);
			e.push({
				eGroup: 2,
				option: t,
				name: (0, o.we)("#FilterElement_" + r),
			});
		});
		this.GetSelectedOptions(1).forEach((t) => {
			const r = $P(1, t);
			e.push({
				eGroup: 1,
				option: t,
				name: (0, o.we)("#FilterElement_" + r),
			});
		});
		this.GetSelectedOptions(4).forEach((t) => {
			const r = i.tw.GetLocalizationForStoreTag(t);
			e.push({
				eGroup: 4,
				option: t,
				name: r,
			});
		});
		this.GetSelectedOptions(6).forEach((t) => {
			const r = $P(6, t);
			e.push({
				eGroup: 6,
				option: t,
				name: r,
			});
		});
		return e;
	}
	GetTagsString() {
		if (this.searchText.length > 0) {
			return "";
		} else {
			return (
				"?tags=" +
				this.GetAllSelectedOptions()
					.map((e) => e.option)
					.join(",")
			);
		}
	}
	BIsSelected(e, t) {
		return this.GetSelectedOptions(e).indexOf(t) >= 0;
	}
	GetCurrentControllerSpecificOption() {
		const e = [2, 16, 18, 20];
		return this.GetSelectedOptions(2).find((t) => e.some((e) => e == t));
	}
	GetCurrentSteamDeckCompatOption() {
		let e = 15;
		this.GetSelectedOptions(2).forEach((t) => {
			if (Pj(t)) {
				e = t;
			}
		});
		return e;
	}
	BHasNonGamepadOptions() {
		return !!this.GetAllSelectedOptions().find(
			(e) => e.eGroup != 2 || !Pj(e.option),
		);
	}
	ClearSteamDeckOptions(e) {
		for (let t = 12; t <= 15; t++) {
			const r = e.indexOf(t);
			if (r !== -1) {
				e.splice(r, 1);
			}
		}
	}
	BHasAppFeature(e) {
		return this.m_filterSpec.filterGroups[2].rgOptions.some((t) => t == e);
	}
	SelectOption(e, t, r) {
		let n = this.m_filterSpec.filterGroups[e].rgOptions;
		if (e == 2) {
			const e = t;
			if (Pj(e) && r && (this.ClearSteamDeckOptions(n), e == 15)) {
				return;
			}
		}
		if (e == 6 && r) {
			y.O$.RefreshOwnedGames(t);
			(0, w.L)("Library/AddFriendToFilter");
		}
		let i = n.indexOf(t);
		if (r && i < 0) {
			n.push(t);
		} else if (!r && i >= 0) {
			n.splice(i, 1);
		}
	}
	BAcceptsUnion(e) {
		return this.m_filterSpec.filterGroups[e].bAcceptUnion;
	}
	ToggleAcceptsUnion(e) {
		this.m_filterSpec.filterGroups[e].bAcceptUnion =
			!this.m_filterSpec.filterGroups[e].bAcceptUnion;
	}
	MatchesImpl(e) {
		const t = this.m_filterSpec.filterGroups;
		if (!N(t[1], O(e))) {
			return false;
		}
		if (!N(t[2], Xr(e))) {
			return false;
		}
		if (!N(t[4], P(e))) {
			return false;
		}
		if (!N(t[5], x(e))) {
			return false;
		}
		if (!N(t[6], L(e))) {
			return false;
		}
		if (this.m_filterSpec.strSearchText) {
			if (
				a.n6.searchSuggestionIds.has(e.appid) ||
				this.m_filterSpec.setSuggestions.has(e.appid)
			) {
				return true;
			}
			if (a.n6.clientSearchSuggestionIds.has(e.appid)) {
				return true;
			}
			if (String(e.appid) == this.m_filterSpec.strSearchText) {
				return true;
			}
			let t = this.m_filterSpec.strSearchText.toLowerCase();
			let r = e.display_name.toLowerCase();
			return !!r.includes(t) || !!e.sort_as.includes(t) || g(r, t) !== -1;
		}
		return true;
	}
	Matches(e) {
		return this.MatchesImpl(e);
	}
	MatchesScoredImpl(e) {
		const t = this.m_filterSpec.filterGroups;
		if (!N(t[1], O(e))) {
			return 0;
		}
		if (!N(t[2], Xr(e))) {
			return 0;
		}
		if (!N(t[4], P(e))) {
			return 0;
		}
		if (!N(t[5], x(e))) {
			return 0;
		}
		if (!N(t[6], L(e))) {
			return 0;
		}
		if (e.BIsAppBlocked()) {
			return 0;
		}
		if (this.m_filterSpec.strSearchText) {
			if (String(e.appid) == this.m_filterSpec.strSearchText) {
				return 1;
			}
			let t = this.m_filterSpec.strSearchText.toLowerCase();
			let r = e.display_name.toLowerCase();
			let n = r == e.sort_as ? Nm(t, [r]) : Nm(t, [r, e.sort_as]);
			if (
				a.n6.searchSuggestionIds.has(e.appid) ||
				this.m_filterSpec.setSuggestions.has(e.appid)
			) {
				n += 0.2;
			}
			if (a.n6.clientSearchSuggestionIds.has(e.appid)) {
				n += 0.2;
			}
			if (n > 0) {
				return n;
			} else if (g(r, t) !== -1) {
				return 1;
			} else {
				return 0;
			}
		}
		return 1;
	}
	MatchesScored(e) {
		return this.MatchesScoredImpl(e);
	}
	ToStorageFormat() {
		return (0, s.HO)(this.m_filterSpec);
	}
	get hash() {
		return (0, v.Yz)(JSON.stringify(this.ToStorageFormat()));
	}
	static FromStorageFormat(e) {
		switch (e.nFormatVersion) {
			case undefined:
			default:
				return null;
			case 2:
				return new E6(e);
		}
	}
	static ForPartner(e) {
		if (e === "partner-ea-access") {
			const e = {
				filterGroups: [
					{},
					{},
					{},
					{},
					{},
					{
						rgOptions: [h.EASubscription],
					},
				],
			};
			return new E6(e);
		}
		console.warn("Unknown filter id", e);
		return new E6();
	}
}
(0, n.Cg)([s.sH], E6.prototype, "m_filterSpec", undefined);
(0, n.Cg)([C.oI], E6.prototype, "SetSearchText", null);
(0, n.Cg)([C.oI], E6.prototype, "SetSearchSuggestions", null);
(0, n.Cg)([C.oI], E6.prototype, "GetSelectedOptions", null);
(0, n.Cg)([C.oI], E6.prototype, "GetAllSelectedOptions", null);
(0, n.Cg)([C.oI], E6.prototype, "GetTagsString", null);
(0, n.Cg)([C.oI], E6.prototype, "BIsSelected", null);
(0, n.Cg)([s.XI.bound], E6.prototype, "SelectOption", null);
(0, n.Cg)([C.oI], E6.prototype, "BAcceptsUnion", null);
(0, n.Cg)([C.oI], E6.prototype, "ToggleAcceptsUnion", null);
(0, n.Cg)([C.oI], E6.prototype, "Matches", null);
(0, n.Cg)([C.oI], E6.prototype, "MatchesScored", null);
(0, n.Cg)([C.oI], E6.prototype, "ToStorageFormat", null);
export class zG extends E6 {
	MatchesImpl(e) {
		return (
			!!N(this.m_filterSpec.filterGroups[0], F(e)) && !!super.MatchesImpl(e)
		);
	}
	MatchesScoredImpl(e) {
		if (N(this.m_filterSpec.filterGroups[0], F(e))) {
			return super.MatchesScoredImpl(e);
		} else {
			return 0;
		}
	}
	static FromStorageFormat(e) {
		switch (e.nFormatVersion) {
			case undefined:
			default:
				return null;
			case 2:
				return new zG(e);
		}
	}
}
