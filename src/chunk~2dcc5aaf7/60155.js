var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./96593.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./30449.js");
import { Localize } from "../../actual_src/utils/localization.js";
var l = require("./78057.js");
var c = require("./80254.js");
var m = require("./91486.js");
var u = require(/*webcrack:missing*/ "./50376.js");
var d = require("./64608.js");
var A = require("./87935.js");
var p = require("./89748.js");
var g = require(/*webcrack:missing*/ "./69164.js");
var h = require("./18057.js");
var C = require(/*webcrack:missing*/ "./72476.js");
var _ = require("./83097.js");
export function c$(e) {
	const {
		appid: t,
		bShowGameInfoInHeader: r,
		bPinnedInOverlayView: s,
		subtitle: l,
		className: c,
		autoFocus: u,
		...f
	} = e;
	const y = (0, m.A)(t);
	const S = (0, p.iZ)().strSteamID;
	const w = (0, i.Co)(t);
	const B = w && w.BHasStoreCategory(25);
	const v = (0, h.Qt)(A.B7.ResolveURL("GlobalLeaderboardsPage", t));
	const I = (0, h.Qt)(
		A.B7.ResolveURL("UserLeaderboardsPage", S, t) + "/?tab=leaderboards",
	);
	const E = (0, C.hf)();
	return n.createElement(
		"div",
		{
			className: (0, a.A)(_.Container, s && _.PinnedView, c),
		},
		r &&
			!E &&
			n.createElement(
				"div",
				{
					className: _.Portrait,
				},
				n.createElement(m.z, {
					className: _.Portrait,
					...y,
				}),
			),
		n.createElement(
			"div",
			{
				className: _.Content,
			},
			n.createElement(
				"div",
				{
					className: _.Title,
				},
				r &&
					E &&
					n.createElement(m.z, {
						app: w,
						eAssetType: 4,
						className: _.GameIcon,
					}),
				r ? w.display_name : (0, Localize)("#Achievements_Achievements"),
			),
			l,
			n.createElement(
				g.Z,
				{
					autoFocus: u,
					focusable: true,
				},
				n.createElement(b, {
					appid: t,
					...f,
				}),
			),
			B &&
				n.createElement(
					"div",
					{
						className: _.LeaderboardsButton,
					},
					n.createElement(d.ZU, {
						rgOptions: [
							{
								data: "global",
								label: (0, Localize)(
									"#Achievements_LeaderboardsDropdown_Global",
								),
							},
							{
								data: "user",
								label: (0, Localize)(
									"#Achievements_LeaderboardsDropdown_Personal",
								),
							},
						],
						strDefaultLabel: (0, Localize)(
							"#Achievements_LeaderboardsDropdown_Label",
						),
						onChange: ({ data: e }) => {
							if (e === "user") {
								I();
							} else {
								v();
							}
						},
					}),
				),
		),
	);
}
function b(e) {
	const { appid: t } = e;
	if (!(0, l.T)(t)) {
		return null;
	}
	const { achievements: r, playtime: i } = e;
	return n.createElement(
		y,
		null,
		n.createElement(v, {
			achievements: r,
		}),
		n.createElement(I, {
			playtime: i?.minutesForever,
		}),
		n.createElement(E, {
			playtime: i?.minutesInLastTwoWeeks,
		}),
	);
}
function y(e) {
	return n.createElement(
		"div",
		{
			className: _.StatsBlock,
		},
		e.children,
	);
}
function S(e) {
	const { label: t, value: r, icon: i, className: s } = e;
	return n.createElement(
		"div",
		{
			className: (0, a.A)(_.Stat, s),
		},
		i,
		n.createElement(
			"div",
			{
				className: _.StatLabelAndValue,
			},
			typeof t == "string" ? n.createElement(w, null, t) : t,
			typeof r == "string" ? n.createElement(B, null, r) : r,
		),
	);
}
const w = ({ children: e }) =>
	n.createElement(
		"div",
		{
			className: _.Label,
		},
		e,
	);
const B = ({ children: e }) =>
	n.createElement(
		"div",
		{
			className: _.TextValue,
		},
		e,
	);
function v(e) {
	const {
		achievements: { cEarned: t, cTotal: r },
	} = e;
	const i = t >= r;
	const a = i
		? (0, Localize)("#AppDetails_PlayerUnlockedPercentAll", t, r)
		: (0, Localize)("#Achievements_HeaderStats_Earned_Label", t, r);
	const l = Math.round((t / r) * 100);
	let c = `(${l}%)`;
	if (l === 0 && t > 0) {
		c = "(<1%)";
	} else if (l === 100 && t < r) {
		c = "(>99%)";
	}
	const m = n.createElement(
		"div",
		{
			className: _.ProgressLabel,
		},
		n.createElement(w, null, a),
		n.createElement(w, null, c),
	);
	return n.createElement(S, {
		label: m,
		value: n.createElement(
			"div",
			{
				className: _.Progress,
			},
			n.createElement(s.z2, {
				nProgress: l,
			}),
		),
		icon: i
			? n.createElement(u.OiG, {
					fullcolor: true,
					className: _.Ribbon,
				})
			: undefined,
		className: _.BigStat,
	});
}
function I(e) {
	const { playtime: t } = e;
	if (t) {
		return n.createElement(S, {
			label: (0, Localize)("#Achievements_HeaderStats_Playtime_Label"),
			value: (0, c.l)(t, "#Playtime_"),
		});
	} else {
		return null;
	}
}
function E(e) {
	const { playtime: t } = e;
	if (t) {
		return n.createElement(S, {
			label: (0, Localize)("#Achievements_HeaderStats_PlaytimeRecent_Label"),
			value: (0, c.l)(t, "#Playtime_"),
		});
	} else {
		return null;
	}
}
export function zp(e) {
	const {
		bPinnedView: t,
		onChangeFilter: r,
		strFilter: i,
		leftContent: s,
		rightContent: l,
		className: c,
		...m
	} = e;
	return n.createElement(
		g.Z,
		{
			className: (0, a.A)(_.AchievementSearchHeader, t && _.PinnedView, c),
			...m,
			"flow-children": "row",
		},
		n.createElement(
			"div",
			{
				className: _.LeftContent,
			},
			s,
		),
		n.createElement(
			"div",
			{
				className: _.SearchField,
			},
			n.createElement(d.pd, {
				onChange: r,
				placeholder: (0, Localize)("#Achievements_Filter_Default"),
				value: i,
			}),
		),
		l &&
			n.createElement(
				"div",
				{
					className: _.RightContent,
				},
				l,
			),
	);
}
export function V3(e) {
	const [t, r] = n.useState("");
	const i = n.useCallback((e) => {
		r(e.target.value.toLowerCase());
	}, []);
	const a = n.useCallback(
		(e) =>
			t.length == 0 ||
			e.strName.toLocaleLowerCase().includes(t) ||
			e.strDescription.toLocaleLowerCase().includes(t),
		[t],
	);
	const s = n.useMemo(() => e.filter((e) => a(e)), [e, a]);
	return [t, i, s, a];
}
