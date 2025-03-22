var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./49519.js");
var o = require(/*webcrack:missing*/ "./50376.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require("./61662.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./36563.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require("./36934.js");
var p = require("./78057.js");
var g = require("./1965.js");
var h = require(/*webcrack:missing*/ "./69164.js");
var C = require("./26271.js");
var _ = require("./43520.js");
var f = require("./56726.js");
var b = require("./55116.js");
var y = require("./9808.js");
var S = require("./18057.js");
var w = require(/*webcrack:missing*/ "./8573.js");
var B = require("./32179.js");
var v = require("./89748.js");
var I = require(/*webcrack:missing*/ "./54644.js");
var E = require("./66732.js");
var M = require("./46422.js");
var T = require("./23600.js");
var R = require("./10335.js");
var k = R;
var D = require(/*webcrack:missing*/ "./89193.js");
var N = require("./96593.js");
const F = 10;
function G(e) {
	if (e.flAchieved || e.flAchieved === 0) {
		return Math.max(e.flAchieved, 0.1).toFixed(1);
	}
	return "";
}
class O extends i.Component {
	render() {
		let e;
		let t = this.props.achievement;
		let r = t.flAchieved < F;
		if (t.bAchieved && t.rtUnlocked) {
			const r = (0, y.Ms)();
			e = A.Vw.CMInterface.RTime32ToDate(t.rtUnlocked).toLocaleDateString(
				m.pf.GetPreferredLocales(),
				r,
			);
		} else {
			e = "";
		}
		let n;
		let a;
		let s = G(t);
		if ((0, y.ry)(t)) {
			const e = (0, y._h)(t);
			if (e) {
				const { flCurrent: t, flMax: r, flPercentage: a } = e;
				n = i.createElement(
					"div",
					{
						className: k.SingleAchievementProgressContainer,
					},
					i.createElement(
						"div",
						{
							className: k.ProgressLabel,
						},
						t + " / " + r,
					),
					i.createElement(
						"div",
						{
							className: k.SingleAchievementProgressBar,
						},
						i.createElement("div", {
							className: k.AchievementProgress,
							style: {
								width: a + "%",
							},
						}),
					),
				);
			}
		}
		if (this.props.yourUnlockDate) {
			const e = (0, y.Ms)();
			a = A.Vw.CMInterface.RTime32ToDate(
				this.props.yourUnlockDate,
			).toLocaleDateString(m.pf.GetPreferredLocales(), e);
		}
		return i.createElement(
			c.M,
			{
				className: (0, d.A)(k.Hover, t.bAchieved ? k.Achieved : k.NotAchieved),
				blurElement: i.createElement("img", {
					src: t.strImage,
				}),
			},
			i.createElement(
				"div",
				{
					className: k.TopSection,
				},
				i.createElement(Tv, {
					className: (0, d.A)(k.TopSectionAchievementIcon, k.Icon),
					achievement: t,
					hidden: this.props.hidden,
				}),
				i.createElement(
					"div",
					{
						className: k.TextSection,
					},
					i.createElement(
						"div",
						{
							className: k.Name,
						},
						t.strName,
					),
					i.createElement(
						"div",
						{
							className: k.Desc,
						},
						t.strDescription,
					),
					n,
				),
			),
			(e || s) &&
				i.createElement(
					"div",
					{
						className: k.Unlocked,
					},
					e &&
						i.createElement(
							"div",
							null,
							(0, m.we)("#AppDetails_Achievements_Unlocked", e),
						),
					s &&
						i.createElement(
							"div",
							{
								className: (0, d.A)(r && k.RareLabel),
							},
							(0, m.we)("#AppDetails_PctUnlocked", s),
						),
					a &&
						i.createElement(
							"div",
							{
								className: k.YouUnlocked,
							},
							(0, m.we)("#AppDetails_Achievements_YouUnlocked", a),
						),
				),
		);
	}
}
export const hs = (0, a.PA)(function (e) {
	const {
		appid: t,
		className: r,
		achievement: n,
		featured: a,
		showStats: o,
		iconClassNames: l,
		steamidTarget: u,
		strDisplayName: A,
		...p
	} = e;
	const g = (0, s.W6)();
	const C = (0, v.iZ)();
	const _ = (0, N.Co)(t);
	const f = (0, B.ex)(t);
	const b = (0, B.dd)();
	const y = (0, S.bG)("UserAchievementsPage", u, t);
	const I = (0, S.bG)("SteamIDAchievementsPage", t);
	const { focused: E, hovered: M } = (0, T.c)();
	const R = i.useCallback(() => {
		if (u != null && u !== C?.strSteamID) {
			if (b) {
				g.push(
					S.BV.Library.App.Achievements.Friend.Individual(
						t,
						new w.b(u).GetAccountID(),
					),
				);
			} else {
				y();
			}
		} else if (b) {
			g.push(S.BV.Library.App.Achievements.My.Individual(t));
		} else {
			I();
		}
	}, [u, C, t, g, b, y, I]);
	let D = false;
	if (f.loading || f.error) {
		D = n.bHidden;
	} else {
		let e = null;
		e = n.strID
			? () => (0, B.Np)(f.data, n.strID)
			: () => (0, B.vN)(f.data, n.strName);
		D = n.bHidden && !e();
	}
	const F = u && C && C.strSteamID != u;
	const P = (function (e, t, r, n) {
		const a = i.useCallback(() => {
			if (r) {
				return null;
			}
			if (!t || t.loading) {
				return null;
			}
			let a;
			if (n) {
				for (let r of Object.values(t.data.achieved)) {
					if (
						(e.strID || e.strName) &&
						(!e.strID || e.strID == r.strID) &&
						(!e.strName || e.strName == r.strName)
					) {
						if (r.bAchieved && r.rtUnlocked) {
							a = r.rtUnlocked;
						}
						break;
					}
				}
			}
			return i.createElement(O, {
				achievement: e,
				hidden: false,
				yourUnlockDate: a,
			});
		}, [r, e, t, n]);
		return a;
	})(n, f, D, F);
	const z = G(n);
	const x = E || M;
	const U = D ? (0, m.we)("#AppDetailsAchievement_Hidden") : n.strName;
	const W = D
		? (0, m.we)(
				_?.minutes_playtime_forever > 0
					? "#AppDetailsAchievement_HiddenDesc"
					: "#AppDetailsAchievement_HiddenDesc_Unplayed",
			)
		: n.strDescription;
	return i.createElement(
		h.Z,
		{
			focusable: true,
			onActivate: R,
			onOKActionDescription: (0, m.we)(
				"#AppActivity_Achieved_View_Achievements",
			),
			className: (0, d.A)(
				r,
				n.bAchieved ? k.Achieved : k.NotAchieved,
				a && k.Featured,
			),
			...p,
		},
		i.createElement(
			c.z,
			{
				renderHover: P,
				className: k.AchievementHoverContainer,
			},
			i.createElement(Tv, {
				className: (0, d.A)(k.Icon, l),
				achievement: n,
				hidden: D,
				pauseAnimation: !x,
			}),
		),
		a &&
			i.createElement(
				"div",
				{
					className: k.TextSection,
				},
				i.createElement(
					"div",
					{
						className: k.Name,
					},
					U,
				),
				i.createElement(
					"div",
					{
						className: k.Desc,
					},
					W,
				),
				o &&
					z &&
					i.createElement(
						"div",
						{
							className: k.Stats,
						},
						(0, m.we)("#AppDetails_PctUnlocked", z),
					),
			),
	);
});
export function Tv(e) {
	const t = e.achievement;
	return i.createElement(E._, {
		imgURL: t?.strImage,
		glow: t && Qv(t.bAchieved, t.flAchieved),
		pauseAnimation: e.pauseAnimation,
		hidden: e.hidden,
		className: e.className,
	});
}
export function Qv(e, t) {
	return e && t !== undefined && t < F;
}
export function pr(e) {
	const {
		className: t,
		nRemaining: r,
		bShowLabel: n,
		children: a,
		eventActorName: s,
		onActivate: o,
		...l
	} = e;
	let c = (0, d.A)(n && k.Featured, t, k.RemainderContainer);
	return i.createElement(
		h.Z,
		{
			focusable: true,
			...l,
			className: c,
			onActivate: o,
		},
		i.createElement(
			"div",
			{
				className: (0, d.A)(k.Remainder),
			},
			a,
			i.createElement(
				"div",
				{
					className: k.RemainderText,
				},
				"+",
				r,
			),
		),
		n &&
			i.createElement(
				"div",
				{
					className: k.TextSection,
				},
				i.createElement(
					"div",
					{
						className: k.Name,
					},
					(0, m.we)("#AppActivity_Achieved_PlusMore", r),
				),
				s &&
					i.createElement(
						"div",
						{
							className: k.Desc,
						},
						(0, m.we)("#AppActivity_Achieved_PlusMore_Label", s),
					),
			),
	);
}
function U(e, t) {
	let r = (0, I.uX)(e);
	M.oy.WindowStore.GetWindowInstanceFromWindow(r).Navigator.MyAchievements(t);
}
export let tm = class extends i.Component {
	unAppID = undefined;
	constructor(e) {
		super(e);
		(0, D.Gn)(this);
		this.unAppID = this.props.details.unAppID;
	}
	componentDidUpdate() {
		this.unAppID = this.props.details.unAppID;
	}
	KeyExtractor(e) {
		return this.unAppID + "_" + e.strID;
	}
	RenderItem(e) {
		return i.createElement(hs, {
			className: k.AdditionalItem,
			appid: this.unAppID,
			achievement: e,
			onClick: this.ViewAllAchievements,
		});
	}
	RenderRest(e) {
		return i.createElement(pr, {
			className: k.AdditionalItem,
			nRemaining: e,
			onActivate: this.ViewAllAchievements,
		});
	}
	ViewAllAchievements(e) {
		U(e, this.unAppID);
	}
	render() {
		const e = p.H.GetAchievements(this.unAppID);
		if (e.nTotal == 0 || !e.vecHighlight) {
			return null;
		}
		let t = e.vecHighlight.length > 0 && e.vecHighlight[0];
		return i.createElement(
			g.n,
			{
				feature: 3,
				primaryAction: {
					label: (0, m.we)("#AppDetails_ViewAllAchievements"),
					action: this.ViewAllAchievements,
				},
				label: (0, m.we)("#AppDetails_SectionTitle_Achievements"),
				highlight: i.createElement(V, {
					achievements: e,
					appid: this.unAppID,
				}),
				rightColumnSection: true,
				availableOffline: true,
			},
			i.createElement(
				g.n.Body,
				null,
				t &&
					i.createElement(hs, {
						className: k.RightAchievementSection,
						appid: this.unAppID,
						featured: true,
						achievement: t,
						onClick: this.ViewAllAchievements,
					}),
				e.vecHighlight.length == 2 &&
					i.createElement(hs, {
						className: k.RightAchievementSection,
						appid: this.unAppID,
						featured: true,
						achievement: e.vecHighlight[1],
						onClick: this.ViewAllAchievements,
					}),
				e.vecHighlight.length > 2 &&
					i.createElement(u.S, {
						className: k.Additional,
						keyExtractor: this.KeyExtractor,
						itemRenderer: this.RenderItem,
						remainderRenderer: this.RenderRest,
						items: e.vecHighlight.slice(1),
						totalItemOverride: e.nAchieved - 1,
					}),
				e.vecUnachieved.length > 0 &&
					i.createElement(
						"div",
						{
							className: (0, d.A)(
								k.UnachievedSection,
								(t || e.vecHighlight.length > 1) && k.ShowDivider,
							),
						},
						i.createElement(
							"div",
							{
								className: k.Label,
							},
							(0, m.we)("#AppDetails_Achievements_Locked"),
						),
						i.createElement(u.S, {
							className: (0, d.A)(k.Additional, k.UnachievedList),
							keyExtractor: this.KeyExtractor,
							itemRenderer: this.RenderItem,
							remainderRenderer: this.RenderRest,
							items: e.vecUnachieved,
							totalItemOverride: e.nTotal - e.nAchieved,
						}),
					),
			),
		);
	}
};
function V(e) {
	const { appid: t, achievements: r } = e;
	const n = Math.floor((r.nAchieved * 100) / r.nTotal);
	const a = n == 100;
	const s = (0, S.bG)("GlobalAchievementStatsPage", t);
	return i.createElement(
		g.n.Highlight,
		{
			className: (0, d.A)(k.HighlightDiv, a && k.AllAchieved),
		},
		i.createElement(
			"div",
			{
				className: k.UnlockedLabel,
			},
			i.createElement(
				"span",
				null,
				" ",
				(0, m.we)(
					a
						? "#AppDetails_PlayerUnlockedPercentAll"
						: "#AppDetails_PlayerUnlockedPercent",
					r.nAchieved,
					r.nTotal,
				),
			),
			i.createElement(
				"span",
				{
					className: k.UnlockedLabelPercent,
				},
				" (" + n + "%)",
			),
		),
		i.createElement(
			"div",
			{
				className: k.AchievementProgressContainer,
			},
			i.createElement("div", {
				className: k.AchievementProgress,
				style: {
					width: n + "%",
				},
			}),
		),
		a &&
			i.createElement(o.OiG, {
				fullcolor: true,
				className: k.Ribbon,
			}),
		i.createElement(
			"div",
			{
				className: k.GlobalStatLabel,
				onClick: s,
			},
			false,
		),
	);
}
(0, n.Cg)([D.sH], tm.prototype, "unAppID", undefined);
(0, n.Cg)([l.oI], tm.prototype, "KeyExtractor", null);
(0, n.Cg)([l.oI], tm.prototype, "RenderItem", null);
(0, n.Cg)([l.oI], tm.prototype, "RenderRest", null);
(0, n.Cg)([l.oI], tm.prototype, "ViewAllAchievements", null);
tm = (0, n.Cg)([a.PA], tm);
export const Jq = (0, a.PA)(function (e) {
	const {
		details: { unAppID: t },
	} = e;
	const r = p.H.GetAchievements(t);
	const n = r.vecHighlight.length > 0;
	const a = r.vecUnachieved.length > 0;
	const [s, o] = i.useState(n);
	if (r.nTotal == 0 || !r.vecHighlight) {
		return null;
	}
	const l = n && a;
	const c = n || a;
	return i.createElement(
		g.n,
		{
			feature: 3,
			label: (0, m.we)("#AppDetails_SectionTitle_Achievements"),
			highlight: i.createElement(V, {
				achievements: r,
				appid: t,
			}),
			className: k.BasicAppDetailsAchievementsSection,
			rightColumnSection: true,
			availableOffline: true,
		},
		i.createElement(
			g.n.Body,
			{
				className: (0, d.A)(
					l ? k.BodyStopJiggle : undefined,
					k.BasicAppDetailsAchievementsSectionBody,
				),
			},
			i.createElement(j, {
				appid: t,
				achievements: r.vecHighlight,
				prioritized: s,
				onRequestPriority: () => o(true),
			}),
			r.vecUnachieved.length > 0 &&
				i.createElement(
					"div",
					{
						className: k.LockedAchievementsLabel,
					},
					(0, m.we)("#AppDetails_Achievements_Locked"),
				),
			i.createElement(j, {
				appid: t,
				achievements: r.vecUnachieved,
				prioritized: !s,
				onRequestPriority: () => o(false),
			}),
			!c &&
				i.createElement(
					f.TD,
					{
						onClick: (e) => U(e, t),
					},
					(0, m.we)("#AppDetails_ViewAllAchievements"),
				),
		),
	);
});
function j(e) {
	const { appid: t, achievements: r, prioritized: n, onRequestPriority: a } = e;
	const [s, o] = (0, i.useState)(0);
	const l = (0, _.S1)();
	if (!r || r.length === 0) {
		return null;
	}
	return i.createElement(
		_.VJ,
		null,
		i.createElement(
			h.Z,
			{
				"flow-children": "row",
			},
			i.createElement(
				b.q,
				null,
				i.createElement(
					C.Q,
					{
						className: k.SummaryCarouselContainer,
						leftMargin: 32,
						edgeMask: "none",
						fnUpdateArrows: () => {},
						fnRenderScrollingDiv: ({ htmlElementRef: e, ...t }) =>
							i.createElement("div", {
								...t,
								ref: e,
								style: l,
							}),
					},
					r.map((e, r) =>
						i.createElement(q, {
							key: e.strID,
							achievement: e,
							appid: t,
							prioritized: n,
							detailed: n && r === s,
							onFocus: (e) => {
								t = r;
								a();
								o(t);
								return;
								var t;
							},
						}),
					),
					i.createElement("div", {
						style: {
							width: "16px",
						},
						"data-carousel": "ignore",
					}),
				),
			),
		),
	);
}
function q(e) {
	const {
		appid: t,
		achievement: r,
		prioritized: n,
		detailed: a,
		onFocus: o,
	} = e;
	const l = (0, s.W6)();
	const c = (0, B.dd)()
		? () => l.push(S.BV.Library.App.Achievements.My.Individual(t))
		: (e) =>
				(function (e, t) {
					let r = (0, I.uX)(e);
					M.oy.WindowStore.GetWindowInstanceFromWindow(
						r,
					).Navigator.GlobalAchievements(t);
				})(e, t);
	return i.createElement(
		h.Z,
		{
			focusable: true,
			className: (0, d.A)(k.AchievementCarouselItem, a && k.Detailed),
			onFocus: o,
			onActivate: c,
			onOKActionDescription: (0, m.we)("#AppDetails_ViewAllAchievements"),
		},
		i.createElement(hs, {
			achievement: r,
			appid: t,
			iconClassNames: (0, d.A)(k.CarouselIcon, n && k.Prioritized),
		}),
		a &&
			i.createElement(Q, {
				achievement: r,
			}),
	);
}
function Q(e) {
	const {
		achievement: { strName: t, strDescription: r },
	} = e;
	const n = G(e.achievement);
	return i.createElement(
		"div",
		{
			className: k.AchivementCarouselItemDetails,
		},
		i.createElement(
			"div",
			{
				className: k.Name,
			},
			t,
		),
		i.createElement(
			"div",
			{
				className: k.Description,
			},
			r,
		),
		n &&
			i.createElement(
				"div",
				{
					className: k.Achieved,
				},
				(0, m.we)("#AppDetails_PctUnlocked", n),
			),
	);
}
