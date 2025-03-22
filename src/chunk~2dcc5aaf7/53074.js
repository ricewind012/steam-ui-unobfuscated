var n = require("./68854.js");
var i = n;
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./41180.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require("./21597.js");
var m = require("./57665.js");
var u = require("./22165.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require("./26271.js");
var p = require("./4584.js");
var g = require("./74827.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require(/*webcrack:missing*/ "./69164.js");
var _ = require("./55116.js");
var f = require("./3499.js");
var b = require("./94729.js");
var y = require("./67429.js");
export function T(e) {
	let { details: t } = e;
	let r = (0, s.q3)(() => g.Ri.GetPostGameSummary(t.unAppID));
	if (r) {
		return a.createElement(w, {
			details: t,
			summary: r,
		});
	} else {
		return null;
	}
}
function w(e) {
	let { details: t, summary: r } = e;
	let n = (0, h.Qn)();
	let c = (0, s.q3)(() =>
		(function (e, t, r) {
			let n = true;
			let s = (0, y.bY)(e);
			let l = [];
			let c = null;
			let u = null;
			let d = null;
			for (let A = t.length - 1; A >= 0; A--) {
				let p = t[A];
				if (d === p) {
					continue;
				}
				let g = null;
				let h = "";
				let C = null;
				let _ = null;
				if (p.m_screenshot) {
					g = new Date(p.m_screenshot.nCreated * 1000);
					h = `SummaryScreenshot_${p.m_screenshot.nAppID}_${p.m_screenshot.hHandle}`;
					C = a.createElement(N, {
						screenshot: p.m_screenshot,
					});
					n = false;
					_ = 0;
				} else if (p.m_clip) {
					g = new Date(p.m_clip.date_clipped * 1000);
					h = `SummaryClip_${p.m_clip.clip_id}`;
					C = a.createElement(b.$d, {
						clip: p.m_clip,
					});
					n = false;
					_ = 3;
				} else if (p.m_recordingHighlights) {
					g = E(p.m_recordingHighlights);
					h = "RecordingHighlights";
					C = a.createElement(b.$B, {
						gameID: s,
						highlights: p.m_recordingHighlights,
					});
					n = false;
					_ = 4;
				} else if (p.m_achievement) {
					g = new Date(p.m_achievement.achievement.rtUnlocked * 1000);
					h = `Ach_${p.m_achievement.achievement.strID}`;
					if (r) {
						C = a.createElement(m.hs, {
							key: p.m_achievement.achievement.strID,
							className: i.SummaryAchievement,
							iconClassNames: i.SummaryAchievementIcon,
							appid: e,
							achievement: p.m_achievement.achievement,
							featured: true,
							showStats: true,
						});
					} else {
						let r = B(t, A - 1, g);
						let i = [p.m_achievement.achievement];
						if (r) {
							i.push(r.m_achievement.achievement);
							d = r;
						}
						C = a.createElement(D, {
							appid: e,
							achievements: i,
						});
						if (i.length > 1) {
							n = false;
						}
					}
					_ = 2;
				} else {
					if (!p.m_tradingCard) {
						continue;
					}
					g = new Date(p.m_tradingCard.rtReceived * 1000);
					h = `SummaryTradingCard_${p.m_tradingCard.strName}`;
					C = a.createElement(F, {
						card: p.m_tradingCard,
					});
					n = false;
					_ = 1;
				}
				let f = c != null && o.JD(c, g);
				let y = c != null && !f;
				if (A != t.length - 1 && !y) {
					let e = I(u, _);
					l.push(
						a.createElement(R, {
							key: `Separator_${A}`,
							spaceOnly: e,
						}),
					);
				}
				if (y) {
					l.push(
						a.createElement(_T, {
							key: `Separator_${g.getTime()}`,
						}),
					);
				}
				c = g;
				u = _;
				l.push(
					a.createElement(
						k,
						{
							key: h,
							created: g,
							includeHeader: !f,
							noanim: true,
						},
						C,
					),
				);
			}
			return {
				children: l,
				bShort: n,
			};
		})(t.unAppID, r.GetSessionEvents(), n),
	);
	let u = a.createElement(
		"div",
		{
			className: i.GamePlaySummaryHeader,
		},
		(0, d.we)("#AppSpotlight_PostGameSummary"),
	);
	let f = a.useCallback(() => {
		g.Ri.StopShowingGamePlaySpotlight(t.unAppID);
	}, [t.unAppID]);
	let S = (0, l.A)(
		i.GamePlaySummaryContainer,
		c.bShort && i.GamePlaySummaryShort,
	);
	const w = ({ htmlElementRef: e, className: t, ...r }) =>
		a.createElement("div", {
			className: (0, l.A)(t, i.SummaryCarouselScrollingContainer),
			...r,
			ref: e,
		});
	return a.createElement(
		C.Z,
		{
			className: S,
		},
		a.createElement(
			_.q,
			null,
			n && u,
			a.createElement(
				p.C,
				{
					name: (0, d.we)("#LibraryHome_NewUpdates"),
					bNoHeader: n,
					customheader: u,
					bShowCloseButton: true,
					onCloseButtonClicked: f,
					buttonSize: "small",
					headerPadding: "0px 8px 0px 0px",
				},
				(e, t) =>
					a.createElement(
						A.Q,
						{
							className: i.SummaryCarouselContainer,
							leftMargin: 32,
							ref: e,
							fnUpdateArrows: t,
							edgeMask: "none",
							fnRenderScrollingDiv: w,
						},
						c.children,
						a.createElement("div", {
							className: i.ForcedCarouselPadding,
							"data-carousel": "ignore",
						}),
					),
			),
		),
	);
}
function B(e, t, r) {
	for (let n = t; n >= 0; n--) {
		let t = e[n];
		if (!t.m_achievement) {
			continue;
		}
		let i = new Date(t.m_achievement.achievement.rtUnlocked * 1000);
		if (o.JD(r, i)) {
			return t;
		} else {
			return null;
		}
	}
	return null;
}
function v(e) {
	switch (e) {
		case 0:
		case 3:
		case 4:
			return true;
	}
	return false;
}
function I(e, t) {
	return e == t || (!!v(e) && !!v(t));
}
function E(e) {
	if (e.length == 0) {
		return new Date();
	}
	let t = e.reduce(
		(e, t) => (t.rt_created > e ? t.rt_created : e),
		e[0].rt_created,
	);
	return new Date(t * 1000);
}
function M(e) {
	let t = "";
	if (e.rtime > 0) {
		t = (0, d._l)(e.rtime);
	}
	return a.createElement(
		"div",
		{
			className: i.EventHeaderBlock,
		},
		t,
	);
}
function _T() {
	return a.createElement("div", {
		className: i.EventDaySeparator,
		"data-carousel": "ignore",
	});
}
function R(e) {
	return a.createElement("div", {
		className: (0, l.A)(i.TypeSeparator, e.spaceOnly && i.SpaceOnly),
		"data-carousel": "ignore",
	});
}
function k(e) {
	let t = e.includeHeader ? o.fK(e.created) : 0;
	return a.createElement(
		"div",
		{
			className: (0, l.A)(i.SummaryContainer, e.noanim && i.NoAnimation),
		},
		a.createElement(M, {
			rtime: t,
		}),
		a.createElement(
			"div",
			{
				className: i.SummaryContainerChildren,
			},
			e.children,
		),
	);
}
function D(e) {
	let t = e.achievements.slice(0, 2);
	return a.createElement(
		C.Z,
		{
			"flow-children": "column",
			className: i.SummaryAchievementStack,
		},
		t.map((t) =>
			a.createElement(m.hs, {
				key: t.strID,
				className: i.SummaryAchievement,
				appid: e.appid,
				achievement: t,
				featured: true,
				showStats: true,
			}),
		),
	);
}
function N(e) {
	return a.createElement(c.R, {
		className: i.SummaryScreenshot,
		screenshot: (0, f.Bo)(e.screenshot),
		sizeAxis: "height",
	});
}
function F(e) {
	return a.createElement(u.dI, {
		className: i.SummaryTradingCard,
		bMaxed: false,
		data: e.card,
		animateHover: true,
		cardScale: 1.1,
	});
}
