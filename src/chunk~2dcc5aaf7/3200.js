var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./9808.js");
var a = require("./30449.js");
require("./48289.js");
var s = require(/*webcrack:missing*/ "./69164.js");
var o = require("./17231.js");
var l = require("./35488.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./57665.js");
var d = require("./66732.js");
var A = require(/*webcrack:missing*/ "./55007.js");
var p = require(/*webcrack:missing*/ "./54644.js");
var g = require("./60155.js");
var h = require("./18980.js");
var C = require(/*webcrack:missing*/ "./72476.js");
function _(e, t) {
	return `${f(e)} / ${f(t)}`;
}
function f(e) {
	let t = Number.isInteger(e) ? 0 : 1;
	return e.toLocaleString(undefined, {
		maximumFractionDigits: t,
	});
}
export function Om(e) {
	const { title: t, children: r, className: i } = e;
	return n.createElement(
		s.Z,
		{
			"flow-children": "column",
			className: (0, c.A)(h.AchievementList, i),
		},
		t && n.createElement(YG, null, t),
		r,
	);
}
export function YG(e) {
	const { className: t, children: r, ...i } = e;
	return n.createElement(
		"div",
		{
			className: (0, c.A)(t, h.ListTitle),
			...i,
		},
		r,
	);
}
function S(e) {
	const { media: t, children: r, right: i, footer: a, ...o } = e;
	return n.createElement(
		s.Z,
		{
			focusable: true,
			onOKActionDescription: null,
			className: h.AchievementListItemBase,
			...o,
		},
		n.createElement(
			"div",
			{
				className: h.Container,
			},
			n.createElement(
				"div",
				{
					className: h.Media,
				},
				t,
			),
			n.createElement(
				"div",
				{
					className: h.Content,
				},
				r,
			),
			i &&
				n.createElement(
					"div",
					{
						className: h.Right,
					},
					i,
				),
		),
		a &&
			n.createElement(
				"div",
				{
					className: h.Footer,
				},
				a,
			),
	);
}
export function fm(e) {
	const {
		title: t,
		description: r,
		imgUrl: i,
		unlockDate: a,
		percentGlobalUnlocked: s,
		progress: o,
		footer: l,
		hidden: c,
		glow: u,
		...A
	} = e;
	const p = !!a;
	const g = a
		? n.createElement(M, {
				rtime: a,
			})
		: null;
	const C = o
		? n.createElement(T, {
				...o,
				showCount: !g,
			})
		: null;
	return n.createElement(
		S,
		{
			media: n.createElement(d._, {
				hidden: c,
				glow: u,
				imgURL: i,
			}),
			right: n.createElement(
				I,
				{
					className: h.AlignEnd,
				},
				g,
				C,
			),
			footer: l,
			...A,
		},
		n.createElement(
			I,
			{
				className: h.AchievementContent,
			},
			n.createElement(
				B,
				null,
				c
					? (0, m.we)("#Achievements_HiddenAchievementItem_Individual_Title")
					: t,
			),
			n.createElement(
				v,
				null,
				c ? (0, m.we)("#Achievements_HiddenAchievementItem_Description") : r,
			),
			typeof s == "number" &&
				p &&
				n.createElement(T0, {
					percentage: s,
				}),
		),
	);
}
const B = (e) =>
	n.createElement(
		"div",
		{
			className: h.AchievementTitle,
		},
		e.children,
	);
const v = (e) =>
	n.createElement(
		"div",
		{
			className: h.AchievementDescription,
		},
		e.children,
	);
const I = (e) =>
	n.createElement(
		"div",
		{
			className: (0, c.A)(h.VerticalContent, e.className),
		},
		e.children,
	);
export function T0(e) {
	const { percentage: t, className: r } = e;
	if (!t) {
		return null;
	}
	const i = (0, m.we)("#AppDetails_PctUnlocked", t.toFixed(1));
	return n.createElement(
		"div",
		{
			className: (0, c.A)(h.AchievementGlobalPercentage, h.InBody, r),
		},
		i,
	);
}
function M(e) {
	const { rtime: t, className: r } = e;
	const a = new Date(t * 1000).toLocaleDateString(
		m.pf.GetPreferredLocales(),
		(0, i.Ms)(),
	);
	return n.createElement(
		"div",
		{
			className: (0, c.A)(h.UnlockDate, r),
		},
		(0, m.we)("#Achievements_ListItem_UnlockDateTime", a),
	);
}
function T(e) {
	const { flCurrent: t, flMax: r, flPercentage: i, showCount: s } = e;
	const o = n.createElement(
		"div",
		{
			className: h.ProgressBar,
		},
		n.createElement(a.z2, {
			nProgress: i,
		}),
	);
	if (s) {
		return n.createElement(
			I,
			{
				className: h.AlignEnd,
			},
			n.createElement(
				"div",
				{
					className: h.ProgressCount,
				},
				_(t, r),
			),
			o,
		);
	} else {
		return o;
	}
}
export function Eu(e) {
	const { count: t, ...r } = e;
	return n.createElement(
		S,
		{
			media: n.createElement(u.Tv, {
				achievement: null,
				hidden: true,
				pauseAnimation: true,
			}),
			...r,
		},
		n.createElement(
			I,
			{
				className: h.HiddenAchievementContent,
			},
			n.createElement(
				B,
				null,
				(0, m.Yp)("#Achievements_HiddenAchievementItem_Title", t),
			),
			n.createElement(
				v,
				null,
				(0, m.Yp)("#Achievements_HiddenAchievementItem_Description", t),
			),
		),
	);
}
export function ui(e) {
	const {
		title: t,
		description: r,
		imgUrl: i,
		hidden: a,
		percentGlobalUnlocked: s,
		primaryAchiever: o,
		secondaryAchiever: l,
		...c
	} = e;
	return n.createElement(
		S,
		{
			media: n.createElement(d._, {
				hidden: a,
				glow: (0, u.Qv)(!!o.unlockDate, s),
				imgURL: i,
			}),
			right: n.createElement(
				I,
				{
					className: h.ComparisonAchieverColumn,
				},
				n.createElement(D, {
					...o,
					primary: true,
				}),
				l &&
					n.createElement(D, {
						...l,
						primary: false,
					}),
			),
			...c,
		},
		n.createElement(
			I,
			{
				className: h.AchievementContent,
			},
			n.createElement(
				B,
				null,
				a
					? (0, m.we)("#Achievements_HiddenAchievementItem_Individual_Title")
					: t,
			),
			n.createElement(
				v,
				null,
				a ? (0, m.we)("#Achievements_HiddenAchievementItem_Description") : r,
			),
		),
	);
}
function D(e) {
	const { primary: t, avatarURL: r, progress: i, unlockDate: s } = e;
	return n.createElement(
		"div",
		{
			className: (0, c.A)(
				h.ComparisonAchieverInfo,
				t ? h.Primary : h.Secondary,
				s ? h.Achieved : h.Unachieved,
			),
		},
		s > 0 &&
			n.createElement(M, {
				className: h.UnlockDate,
				rtime: s,
			}),
		i &&
			!s &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					"div",
					{
						className: h.ProgressContainer,
					},
					n.createElement(a.z2, {
						nProgress: i.flPercentage,
						color: t ? undefined : "var(--gpColor-Yellow, #ffc82c)",
					}),
				),
				n.createElement(
					"div",
					{
						className: h.ProgressLabel,
					},
					_(i.flCurrent, i.flMax),
				),
			),
		n.createElement(
			"div",
			{
				className: h.AvatarContainer,
			},
			n.createElement(o.Ul, {
				statusPosition: "none",
				strAvatarURL: r,
				size: "X-Small",
			}),
		),
	);
}
export function Wh(e) {
	const { achievements: t, avatarURL: r } = e;
	const [i, a, s] = (0, g.V3)(t);
	const [l, c] = (0, n.useState)(false);
	(0, n.useEffect)(() => {
		window.setTimeout(() => c(true), 50);
	}, []);
	const u = n.useRef(undefined);
	const d = n.useCallback((e) => {
		u.current = e ? (0, p._f)(e) : null;
	}, []);
	const C = (0, A.Te)({
		count: s.length,
		getScrollElement: () => u.current,
		estimateSize: n.useCallback(
			(e) => parseInt(h.nGlobalAchievementHeight) + parseInt(h.nAchievementGap),
			[],
		),
		overscan: 5,
	});
	if (!l) {
		return null;
	}
	const _ = n.createElement(
		"div",
		{
			className: h.Avatar,
		},
		n.createElement(o.Ul, {
			statusPosition: "none",
			strAvatarURL: r,
			size: "Small",
		}),
	);
	const f = n.createElement(
		"div",
		{
			className: h.HeaderText,
		},
		(0, m.we)("#Achievements_GlobalAchievement_PercentUnlockedLabel"),
	);
	return n.createElement(
		Om,
		null,
		n.createElement(g.zp, {
			strFilter: i,
			onChangeFilter: a,
			leftContent: _,
			rightContent: f,
		}),
		n.createElement(
			"div",
			{
				className: h.ListWrapper,
				ref: d,
				style: {
					height: `${C.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				},
			},
			C.getVirtualItems().map((e) => {
				const t = {
					position: "absolute",
					top: e.start,
					left: 0,
					width: "100%",
					height: e.size - parseInt(h.nAchievementGap),
				};
				return n.createElement(F, {
					key: e.key,
					...s[e.index],
					style: t,
				});
			}),
		),
	);
}
function F(e) {
	const {
		strName: t,
		strDescription: r,
		imgUrl: i,
		percentGlobalUnlocked: a = 0,
		unlocked: o,
		className: u,
		hidden: A,
		...p
	} = e;
	const [g, _] = n.useState(false);
	const f = (0, C.Qn)();
	const b = !A || g;
	const y = (0, m.we)(
		f
			? "#Achievements_HiddenAchievementItem_Individual_Reveal_Gamepad"
			: "#Achievements_HiddenAchievementItem_Individual_Reveal_Desktop",
	);
	const S = b
		? null
		: (0, m.we)("#Achievements_HiddenAchievementItem_Individual_Reveal");
	return n.createElement(
		s.Z,
		{
			focusable: true,
			onClick: () => _(true),
			onActivate: () => _(true),
			onOKActionDescription: S,
			className: (0, c.A)(h.GlobalAchievementListItem, u),
			...p,
		},
		n.createElement(
			"div",
			{
				className: h.UnlockContainer,
			},
			o && n.createElement(l.Checkmark, null),
		),
		n.createElement(
			"div",
			{
				className: (0, c.A)(h.Content, !b && h.Hidden),
			},
			n.createElement(
				"div",
				{
					className: h.ImageContainer,
				},
				n.createElement(d._, {
					hidden: !b,
					glow: false,
					imgURL: i,
				}),
			),
			n.createElement(
				"div",
				{
					className: h.Right,
				},
				n.createElement(
					"div",
					{
						className: h.Info,
					},
					n.createElement(
						"div",
						{
							className: h.Title,
						},
						b
							? t
							: (0, m.we)(
									"#Achievements_HiddenAchievementItem_Individual_Title",
								),
					),
					n.createElement(
						"div",
						{
							className: h.Description,
						},
						b
							? r
							: (0, m.we)("#Achievements_HiddenAchievementItem_Description"),
					),
				),
				n.createElement(
					"div",
					{
						className: h.Percent,
					},
					a.toFixed(1),
					"%",
				),
				!b &&
					n.createElement(
						"div",
						{
							className: h.SpoilerWarning,
						},
						y,
					),
			),
			n.createElement("div", {
				className: h.ProgressFill,
				style: {
					width: `${a}%`,
				},
			}),
		),
	);
}
