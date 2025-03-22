var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./85965.js");
var l = require("./94406.js");
var c = require("./91705.js");
var m = require("./91486.js");
var u = require("./36464.js");
var d = require("./18057.js");
var A = require("./18869.js");
var p = require("./20414.js");
var g = require("./45309.js");
var h = require("./77347.js");
var C = require("./12750.js");
var _ = require("./96593.js");
var f = require("./48289.js");
var b = require("./34792.js");
var y = require("./87935.js");
var S = require("./70239.js");
var w = require(/*webcrack:missing*/ "./90095.js");
var B = require(/*webcrack:missing*/ "./26667.js");
var v = require(/*webcrack:missing*/ "./49519.js");
var I = require(/*webcrack:missing*/ "./31084.js");
var E = require(/*webcrack:missing*/ "./11131.js");
var _M = require(/*webcrack:missing*/ "./69164.js");
var T = require("./68608.js");
var R = require("./5859.js");
var k = require("./82594.js");
var D = require("./64608.js");
var N = require(/*webcrack:missing*/ "./42318.js");
var F = require("./95783.js");
var G = require("./4584.js");
var O = require("./78688.js");
var P = require("./10606.js");
var L = require("./13869.js");
var z = require(/*webcrack:missing*/ "./50376.js");
var x = require(/*webcrack:missing*/ "./90765.js");
var U = require(/*webcrack:missing*/ "./46108.js");
function _W(e, t) {
	const r = new Intl.ListFormat(U.pf.GetPreferredLocales(), {
		style: "long",
		type: "conjunction",
	})
		.formatToParts(e.map((e, t) => t.toString()))
		.map((r) =>
			r.type === "literal" ? r.value : t(e[Number.parseInt(r.value)]),
		);
	return i.createElement(i.Fragment, null, ...r);
}
var V = require(/*webcrack:missing*/ "./72476.js");
var H = require("./17076.js");
var j = H;
var q = require("./57665.js");
var Q = require("./26271.js");
var Z = require("./55116.js");
var Y = require("./43520.js");
const K = (0, a.PA)(function (e) {
	const { event: t, maxshown: r } = e;
	const n = (0, V.Qn)();
	const a = t.appid;
	const s = t.achievements;
	const o = `${V.TS.COMMUNITY_BASE_URL}profiles/${t.steamIDActor.ConvertTo64BitString()}/stats/appid/${a}/achievements`;
	const l = (0, d.Qt)(o);
	if (s.length == 0) {
		return null;
	}
	let c = [];
	let m = f.O$.GetFriendState(t.steamIDActor);
	let u =
		m.nickname && !b.rV.communityPreferences.bParenthesizeNicknames
			? m.nickname
			: m.persona.m_strPlayerName;
	let A = "";
	if (s.length < 3) {
		A = "repeat(auto-fit, [col-start] minmax( 49%, 260px ) [col-end])";
	} else if (s.length == 3) {
		A = "repeat(auto-fit, [col-start] minmax( 32%, 260px ) [col-end])";
	}
	s.forEach((e) => {
		let n = s.indexOf(e);
		if (n < r) {
			c.push(
				i.createElement(q.hs, {
					key: "" + e.strID + n,
					appid: a,
					steamidTarget: t.steamIDActor.ConvertTo64BitString(),
					achievement: e,
					featured: true,
					className: j.PrimaryAchievement,
					strDisplayName: u,
				}),
			);
		} else {
			if (n != r) {
				return null;
			}
			c.push(
				i.createElement(
					q.pr,
					{
						onActivate: l,
						key: "" + e.strID + n,
						nRemaining: s.length - r,
						eventActorName: u,
						bShowLabel: true,
					},
					i.createElement("div", {
						className: j.AchievementRemainder,
						style: {
							backgroundImage: `url('${e.strImage}')`,
						},
					}),
				),
			);
		}
	});
	if (n) {
		return i.createElement(
			_M.Z,
			{
				"flow-children": "row",
				style: {
					overflow: "hidden",
					position: "relative",
				},
			},
			i.createElement(
				Z.q,
				null,
				i.createElement(
					Y.hL,
					{
						spacing: {
							horizontal: parseInt(j.DefaultActivityPadding),
						},
					},
					i.createElement(X, null, c),
				),
			),
		);
	} else {
		return i.createElement(
			_M.Z,
			{
				"flow-children": "grid",
				className: (0, x.A)(j.ActivityAchievementUnlocked, j.AchievementRows),
				style: {
					gridTemplateColumns: A,
				},
			},
			c,
		);
	}
});
function X(e) {
	const { children: t } = e;
	const r = (0, Y.S1)();
	return i.createElement(
		Y.VJ,
		null,
		i.createElement(
			Q.Q,
			{
				className: (0, x.A)(j.ActivityAchievementUnlocked, j.AchievementRows),
				leftMargin: 32,
				fnUpdateArrows: () => {},
				edgeMask: "none",
				fnRenderScrollingDiv: ({ htmlElementRef: e, ...t }) =>
					i.createElement("div", {
						...t,
						ref: e,
						style: r,
					}),
			},
			t,
			i.createElement("div", {
				style: {
					width: "16px",
				},
				"data-carousel": "ignore",
			}),
		),
	);
}
var J = require("./47801.js");
var $ = require(/*webcrack:missing*/ "./44846.js");
var ee = require(/*webcrack:missing*/ "./54644.js");
let te = class extends i.Component {
	NavigateToBadgePage(e) {
		(0, ee.uX)(e).location.href = y.B7.BuildSteamURL(
			"SteamIDAppTradingCardsPage",
			this.props.event.appid,
		);
	}
	render() {
		let e = J.x_.GetCommunityItemDefinitions(this.props.event.appid);
		let t = null;
		if (e == null || e.length == 0) {
			return "";
		}
		let r;
		let n = this.props.event.m_nNewBadgeLevel;
		for (let t of e) {
			if (t.item_class == this.props.event.m_nItemClass) {
				r = t;
				break;
			}
		}
		if (!r) {
			return "";
		}
		let a = JSON.parse(r.item_key_values);
		let s = a.level_images;
		let o = a.level_names;
		let l =
			"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/" +
			this.props.event.appid +
			"/" +
			s[n];
		const c = o[n];
		let m;
		if (typeof c == "object") {
			m = c[V.TS.LANGUAGE];
			m ||= c[(0, $.Lg)(0)];
		} else {
			m = c;
		}
		t = i.createElement(
			"div",
			{
				className: j.BadgeSection,
			},
			i.createElement("img", {
				className: j.Badge,
				src: l,
				onClick: this.NavigateToBadgePage,
			}),
			i.createElement(
				"div",
				{
					className: j.BadgeInfo,
				},
				i.createElement(
					"div",
					{
						className: j.BadgeName,
					},
					m,
				),
				i.createElement(
					"div",
					{
						className: j.BadgeLevel,
					},
					(0, U.we)("#AppDetails_BadgeLevelNoXP", n),
				),
			),
		);
		return i.createElement(N.tH, null, t);
	}
};
(0, n.Cg)([s.oI], te.prototype, "NavigateToBadgePage", null);
te = (0, n.Cg)([a.PA], te);
const re = (0, a.PA)(function (e) {
	const t = e.event.appid;
	const r = (0, d.bG)("CommunityInventory");
	let n = `${V.TS.COMMUNITY_CDN_URL}economy/boosterpack/${t}?l=${V.TS.LANGUAGE}`;
	return i.createElement(
		N.tH,
		null,
		i.createElement(
			"div",
			{
				className: j.TradingCardSection,
			},
			i.createElement("img", {
				className: j.BoosterPack,
				src: n,
				onClick: r,
			}),
		),
	);
});
var ne = require(/*webcrack:missing*/ "./83957.js");
var ie = ne;
var ae = require("./57016.js");
var se = require(/*webcrack:missing*/ "./59351.js");
var oe = require("./88341.js");
var le = require("./13665.js");
var ce = require("./12767.js");
var me = require(/*webcrack:missing*/ "./26853.js");
var ue = require("./86454.js");
var de = require("./46422.js");
var Ae = require(/*webcrack:missing*/ "./11010.js");
function pe(e, t, r) {
	let n = r ? 1 : 5;
	ae.dm.TrackEventClickedByUser(t, n);
	e.App(t.appid, {
		gidPartnerEvent: t.GID,
	});
}
class ge extends i.Component {
	OnVisible(e) {
		if (e) {
			(function (e, t) {
				let r = t ? 1 : 5;
				ae.dm.TrackEventShownToUser(e, r);
			})(this.props.event, this.props.featuredSpot);
		}
	}
	render() {
		return i.createElement(
			ue.J,
			{
				onVisibilityChange: this.OnVisible,
				trigger: "once",
			},
			this.props.children,
		);
	}
}
function he(e, t, r) {
	let n = {
		bOverlapHorizontal: true,
		bMatchWidth: true,
		bFitToWindow: true,
		strClassName: (0, x.A)("DialogMenuPosition", j.SortingDropDownContainer),
	};
	const a = (function (e) {
		return [
			{
				data: 1,
				label: (0, U.we)("#AppActivity_ViewComments"),
			},
			e
				? {
						data: 3,
						label: (0, U.we)("#AppActivity_RateDown"),
					}
				: {
						data: 2,
						label: (0, U.we)("#AppActivity_RateUp"),
					},
		];
	})(t);
	let s = i.createElement(D.n4, {
		rgOptions: a,
		onValueSelected: r,
		strDropDownItemClassName: j.SortingDropDownItems,
	});
	let o = (0, I.lX)(s, e, n);
	o.SetLabel((0, U.we)("#ActionButtonLabelContextMenu"));
	return o;
}
(0, n.Cg)([s.oI], ge.prototype, "OnVisible", null);
let Ce = class extends i.Component {
	static contextType = V.QO;
	state = {
		bUserVotedUp: false,
		bRatingsBarVisible: false,
	};
	m_cancelSignal = ie.CancelToken.source();
	componentDidMount() {
		this.LoadMyVoteInformation();
		const e = this.props.event;
		e.GetEvent().then((t) => {
			if (t && e.rtEventTime > t.rtime32_moderator_reviewed) {
				e.ReloadEvent(e.rtEventTime);
			}
		});
	}
	componentWillUnmount() {
		this.m_cancelSignal.cancel("EventDiscussionWidget is being unmounted");
	}
	async LoadMyVoteInformation() {
		const { event: e } = this.props;
		let t = Boolean(
			await le.KN.Get().LoadMyVote(await e.GetEvent(), this.m_cancelSignal),
		);
		if (!this.m_cancelSignal.token.reason) {
			this.setState({
				bUserVotedUp: t,
			});
		}
	}
	OnViewThread(e) {
		if (this.props.event.forumTopicGID) {
			let t = (0, ee.uX)(e);
			const r =
				"app/" +
				this.props.event.appid +
				"/eventcomments/" +
				this.props.event.forumTopicGID;
			const n = V.TS.COMMUNITY_BASE_URL + r;
			if (this.context?.IN_GAMEPADUI) {
				de.oy.WindowStore.GetWindowInstanceFromWindow(t).NavigateToSteamWeb(n);
			} else {
				t.location.href = n;
			}
		}
	}
	async OnRateUpClicked() {
		const { event: e } = this.props;
		le.KN.Get().Vote(await e.GetEvent(), true, this.m_cancelSignal);
		this.setState({
			bUserVotedUp: true,
		});
	}
	async OnRateDownClicked() {
		const { event: e } = this.props;
		le.KN.Get().Vote(await e.GetEvent(), false, this.m_cancelSignal);
		this.setState({
			bUserVotedUp: false,
		});
	}
	OnParentEventAction(e, t) {
		switch (t) {
			case 1:
				this.OnViewThread(e);
				break;
			case 2:
				this.OnRateUpClicked();
				break;
			case 3:
				this.OnRateDownClicked();
		}
	}
	ShowOptionsContextMenu(e) {
		he(e, this.state.bUserVotedUp, (e, t) => {
			this.OnParentEventAction(e, t.data);
		});
	}
	render() {
		const { event: e, className: t, featuredSpot: r } = this.props;
		let n = () => {
			this.setState({
				bRatingsBarVisible: true,
			});
		};
		let a = () => {
			this.setState({
				bRatingsBarVisible: false,
			});
		};
		let s = e.IsEventLoaded();
		let o = {
			onMenuButton: this.ShowOptionsContextMenu,
		};
		o.onMenuActionDescription = (0, U.we)("#ActionButtonLabelContextMenu");
		return i.createElement(
			_M.Z,
			{
				...o,
			},
			i.createElement(
				F.K,
				{
					className: t,
					placeholderHeight: 200,
					rootMargin: "0px 0px 100% 0px",
					onRender: null,
					onMouseEnter: n,
					onMouseLeave: a,
					onFocus: n,
					onBlur: a,
				},
				i.createElement(_e, {
					event: e,
					featuredSpot: r,
				}),
				s &&
					i.createElement(l.Xn, {
						upvotes: e.upvotes,
						upvoted_by_user: this.state.bUserVotedUp,
						upvoters: [],
						fnOnRateDownClicked: this.OnRateDownClicked,
						fnOnRateUpClicked: this.OnRateUpClicked,
						fnMaximizeParent: this.OnViewThread,
						comment_count: e.comment_count,
						bIsVisible: this.state.bRatingsBarVisible,
					}),
			),
		);
	}
};
(0, n.Cg)([s.oI], Ce.prototype, "OnViewThread", null);
(0, n.Cg)([s.oI], Ce.prototype, "OnRateUpClicked", null);
(0, n.Cg)([s.oI], Ce.prototype, "OnRateDownClicked", null);
(0, n.Cg)([s.oI], Ce.prototype, "OnParentEventAction", null);
(0, n.Cg)([s.oI], Ce.prototype, "ShowOptionsContextMenu", null);
Ce = (0, n.Cg)([a.PA], Ce);
let _e = class extends i.Component {
	m_ldrEvent = null;
	render() {
		const { event: e, featuredSpot: t } = this.props;
		this.m_ldrEvent ||= (0, se.Sx)(e.GetEvent());
		if (this.m_ldrEvent.state == "pending") {
			return i.createElement(fe, null, i.createElement(me.t, null));
		}
		if (this.m_ldrEvent.state == "rejected") {
			return i.createElement(
				fe,
				null,
				(0, U.we)("#AppDetails_PartnerEventFailedLoad"),
			);
		}
		let r = this.m_ldrEvent.value;
		if (r) {
			if (r.type == 14) {
				return i.createElement(ye, {
					event: r,
					featuredSpot: t,
				});
			} else if (r.type == 12) {
				return i.createElement(we, {
					event: r,
					featuredSpot: t,
				});
			} else {
				return i.createElement(Se, {
					event: r,
					featuredSpot: t,
				});
			}
		} else {
			return i.createElement(
				fe,
				null,
				(0, U.we)("#AppDetails_PartnerEventFailedLoad"),
			);
		}
	}
};
function fe(e) {
	return i.createElement(
		"div",
		{
			className: j.PartnerEventPlaceholder,
		},
		e.children,
	);
}
function be(e) {
	let { enabled: t, event: r } = e;
	if (!t) {
		return null;
	}
	let n = (0, Ae._l)(r.postTime, true);
	return i.createElement(
		"div",
		{
			className: j.DayPosted,
		},
		"\xA0-\xA0",
		n,
	);
}
function ye(e) {
	const { event: t, featuredSpot: r } = e;
	const n = (0, U.we)("#PartnerEvent_" + t.type);
	const a = (0, $.sf)(V.TS.LANGUAGE);
	const s = ae.dm.FilterImageURLsForKnownFailures(
		t.GetImageForSizeAsArrayWithFallback("capsule", a, oe.wI.capsule_main),
	);
	const o = t.GetNameWithFallback(a);
	const l = t.GetSummaryWithFallback(a);
	const c = (0, x.A)(
		j.PartnerEventLargeImage,
		j.PartnerEventLargeUpdate,
		j.Event,
	);
	const m = (0, A.br)();
	return i.createElement(
		ge,
		{
			event: t,
			featuredSpot: r,
		},
		i.createElement(
			Be,
			{
				className: c,
				featuredSpot: r,
			},
			i.createElement(
				"div",
				{
					className: j.MajorUpdateContentContainer,
				},
				!r &&
					i.createElement("div", {
						className: j.LeftSideMajorUpdateBar,
					}),
				i.createElement(
					_M.Z,
					{
						focusable: true,
						onActivate: () => pe(m, t, r),
						className: j.PartnerEventLargeImage_Container,
					},
					i.createElement(
						"div",
						{
							className: j.PartnerEventLargeImage_Contents,
						},
						i.createElement(ce.c, {
							className: (0, x.A)(j.PartnerEventLargeImage_Image, j.Blur),
							rgSources: s,
							onIncrementalError: (e, t) => ae.dm.ImageFailureCallback(t),
						}),
						i.createElement(
							"div",
							{
								className: j.ImageContainer,
							},
							i.createElement(ce.c, {
								className: j.PartnerEventLargeImage_Image,
								rgSources: s,
								onIncrementalError: (e, t) => ae.dm.ImageFailureCallback(t),
							}),
						),
						i.createElement(
							"div",
							{
								className: j.PartnerEventLargeImage_TextColumn,
							},
							i.createElement(
								"div",
								{
									className: (0, x.A)(
										j.PartnerEventType,
										t.type == 14 && j.PartnerEventTypeUpdate,
									),
								},
								i.createElement("div", null, n),
								i.createElement(be, {
									enabled: r,
									event: t,
								}),
							),
							i.createElement(
								"div",
								{
									className: j.PartnerEventLargeImage_Title,
								},
								o,
							),
							i.createElement(
								"div",
								{
									className: j.PartnerEventLargeImage_Summary,
								},
								l,
							),
						),
					),
				),
			),
		),
	);
}
function Se(e) {
	const { event: t, featuredSpot: r } = e;
	const n = (0, U.we)("#PartnerEvent_" + t.type);
	const a = (0, $.sf)(V.TS.LANGUAGE);
	const s = ae.dm.FilterImageURLsForKnownFailures(
		t.GetImageForSizeAsArrayWithFallback("capsule", a, oe.wI.capsule_main),
	);
	const o = t.GetNameWithFallback(a);
	const l = t.GetSummaryWithFallback(a);
	const c = (0, A.br)();
	const m =
		s.length > 0
			? i.createElement(
					"div",
					{
						className: j.MediumImageContainer,
					},
					i.createElement(ce.c, {
						className: j.PartnerEventMediumImage_Image,
						rgSources: s,
						onIncrementalError: (e, t, r) => ae.dm.ImageFailureCallback(t),
					}),
				)
			: null;
	const u = t.type == 12 || t.type == 13;
	const d = (0, x.A)(
		j.PartnerEventMediumImage,
		j.PartnerEvent,
		u && j.PartnerEventUpdate,
		j.Event,
	);
	return i.createElement(
		ge,
		{
			event: t,
			featuredSpot: r,
		},
		i.createElement(
			Be,
			{
				className: d,
				featuredSpot: r,
			},
			i.createElement(
				_M.Z,
				{
					focusable: true,
					onActivate: () => pe(c, t, r),
					className: j.PartnerEventMediumImage_Container,
				},
				i.createElement(
					"div",
					{
						className: j.PartnerEventMediumImage_Contents,
					},
					m,
					i.createElement(
						"div",
						{
							className: j.PartnerEventMediumImage_TextColumn,
						},
						i.createElement(
							"div",
							{
								className: (0, x.A)(j.PartnerEventType),
							},
							i.createElement("div", null, n),
							i.createElement(be, {
								enabled: r,
								event: t,
							}),
						),
						i.createElement(
							"div",
							{
								className: j.PartnerEventMediumImage_Title,
							},
							o,
						),
						i.createElement(ve, {
							text: l,
						}),
					),
				),
			),
		),
	);
}
function we(e) {
	const { event: t, featuredSpot: r } = e;
	const n = t.GetCategoryAsString();
	const a = (0, $.sf)(V.TS.LANGUAGE);
	const s = t.GetNameWithFallback(a);
	const o = t.GetSubTitleWithLanguageFallback(a);
	const l = (0, x.A)(j.PartnerEventTextOnly, j.PartnerEvent, j.Event);
	const c = (0, A.br)();
	return i.createElement(
		ge,
		{
			event: t,
			featuredSpot: r,
		},
		i.createElement(
			Be,
			{
				className: l,
				featuredSpot: r,
			},
			i.createElement(
				_M.Z,
				{
					focusable: true,
					onActivate: () => pe(c, t, r),
					className: j.PartnerEventTextOnly_Container,
				},
				i.createElement(
					"div",
					{
						className: j.PartnerEventTextOnly_Icon,
					},
					i.createElement(z.vjL, null),
				),
				i.createElement(
					"div",
					{
						className: j.PartnerEventTextOnly_TextColumn,
					},
					i.createElement(
						"div",
						{
							className: j.PartnerEventType,
						},
						n,
					),
					i.createElement(
						"div",
						{
							className: j.PartnerEventTextOnly_Title,
						},
						s,
					),
					o &&
						i.createElement(
							"div",
							{
								className: j.PartnerEventTextOnly_LimitedSummary,
							},
							i.createElement(
								"span",
								{
									className: j.PartnerEventTextOnly_Summary,
								},
								o,
							),
						),
				),
			),
		),
	);
}
function Be(e) {
	let { featuredSpot: t, className: r, children: n } = e;
	let a = (0, x.A)(r, t && j.PartnerEventFeatured);
	return i.createElement(
		"div",
		{
			className: a,
		},
		t &&
			i.createElement(
				"div",
				{
					className: j.PartnerEventFeaturedHeader,
				},
				(0, U.we)("#AppActivity_FeaturedEvent"),
			),
		n,
	);
}
_e = (0, n.Cg)([a.PA], _e);
class ve extends i.Component {
	state = {
		nLines: 0,
	};
	m_refContainer = i.createRef();
	componentDidMount() {
		this.UpdateLineCount();
	}
	UpdateLineCount() {
		if (this.state.nLines) {
			return;
		}
		let e = this.m_refContainer.current;
		let t = e.innerHTML;
		let r = e.style.cssText;
		let n = e.clientHeight;
		e.style.cssText = `${r};overflow: visible`;
		e.innerText = "Y";
		let i = 0;
		while (i < 10 && !(e.clientHeight > n)) {
			i++;
			e.innerHTML += "<br>Y";
		}
		e.innerText = t;
		e.style.cssText = r;
		this.setState({
			nLines: i,
		});
	}
	render() {
		let e = {
			overflow: "hidden",
		};
		if (this.state.nLines > 0) {
			e = {
				WebkitLineClamp: this.state.nLines,
				display: "-webkit-box",
				WebkitBoxOrient: "vertical",
				overflow: "hidden",
				textOverflow: "ellipsis",
			};
		}
		return i.createElement(
			"div",
			{
				ref: this.m_refContainer,
				className: j.PartnerEventMediumImage_Summary,
				style: e,
			},
			this.props.text,
		);
	}
}
var Ie = require("./21920.js");
var Ee = require("./94715.js");
var Me = require(/*webcrack:missing*/ "./88750.js");
let Te = class extends i.Component {
	OnScreenshotChanged(e) {
		this.props.event.SetActiveCommentThread(e);
	}
	render() {
		const { event: e, screenshots: t } = this.props;
		return i.createElement(
			"div",
			{
				className: j.ActivityPublishedScreenshot,
			},
			i.createElement(ke, {
				screenshots: Ge(t),
				onScreenshotChanged: this.OnScreenshotChanged,
				event: e,
			}),
		);
	}
};
function Re(e) {
	return i.createElement(
		"div",
		{
			className: j.SpoilerOverlay,
		},
		(0, U.we)("#AppDetails_Screenshot_SpoilerAlert"),
	);
}
(0, n.Cg)([s.oI], Te.prototype, "OnScreenshotChanged", null);
Te = (0, n.Cg)([a.PA], Te);
let ke = class extends i.Component {
	static contextType = V.QO;
	constructor(e) {
		super(e);
		this.state = {
			iActiveScreenshot: 0,
		};
	}
	static getDerivedStateFromProps(e, t) {
		if (t.iActiveScreenshot < e.screenshots.length) {
			return t;
		} else {
			return {
				...t,
				iActiveScreenshot: 0,
			};
		}
	}
	ChangeScreenshot(e, t) {
		if (t != this.state.iActiveScreenshot) {
			this.setState({
				iActiveScreenshot: t,
			});
			if (this.props.onScreenshotChanged) {
				this.props.onScreenshotChanged(t);
			}
		}
	}
	FullScreenImage(e, t) {
		let r = this.props.screenshots[t].file;
		const n = r.creator === f.O$.currentUserSteamID.ConvertTo64BitString();
		(0, Ee.N)({
			strURL: r.file_url,
			strTitle: r.file_description
				? r.file_description
				: (0, U.we)("#AppDetails_Screenshot"),
			windowOverride: e,
			nMaxScreenPercentage: 0,
			children: i.createElement(l._h, {
				commentThread: this.props.event.GetActiveCommentThread(),
				bDefaultMinimized: false,
				bMaxHeight: false,
				bIsPopup: true,
				publishedfileid: r.publishedfileid,
			}),
			appid: this.props.event.appid,
			file_details: r,
			additionalFields: n
				? i.createElement(Fe, {
						visibility: r.visibility,
					})
				: undefined,
		});
	}
	SaveActiveScreenshot(e) {
		const t =
			this.props.screenshots[this.state.iActiveScreenshot].file.file_url;
		(e || window).SteamClient.Browser.StartDownload(t);
	}
	ShowContextMenu(e) {
		const t = (0, ee.kD)(e.target)
			? e.target.ownerDocument.defaultView
			: window;
		(0, I.lX)(
			i.createElement(
				Me.tz,
				null,
				i.createElement(
					Me.kt,
					{
						onSelected: () => this.SaveActiveScreenshot(t),
					},
					(0, U.we)("#ContextMenu_SaveScreenshot"),
				),
			),
			e,
		);
	}
	render() {
		const { screenshots: e } = this.props;
		if (!e.length) {
			return null;
		}
		let t = e[this.state.iActiveScreenshot].file;
		let r = (0, U.we)(
			"#AppDetails_Screenshot_Uploaded",
			(0, U.$z)(t.time_created),
			(0, Ae.KC)(t.time_created, {
				bForce24HourClock: b.rV.friendSettings.b24HourClock,
			}),
		);
		let n =
			t.file_description &&
			i.createElement(
				"div",
				{
					className: j.CaptionQuoteContainer,
				},
				i.createElement(
					"div",
					{
						className: j.CaptionQuote,
					},
					"❝",
				),
				t.file_description,
				" ",
				i.createElement(
					"div",
					{
						className: j.CaptionQuote,
					},
					"❞",
				),
			);
		return i.createElement(
			"div",
			{
				className: j.ScreenshotCarousel,
			},
			!this.context?.IN_GAMEPADUI &&
				i.createElement(
					"div",
					{
						className: j.ActiveScreenshot,
					},
					i.createElement(
						"div",
						{
							className: j.ImageWrapper,
						},
						i.createElement(Ie.Dp, {
							src: t.file_url,
							width: 640,
							onClick: (e) =>
								this.FullScreenImage(
									(0, ee.uX)(e),
									this.state.iActiveScreenshot,
								),
							onContextMenu: this.ShowContextMenu,
							orig_width: t.image_width,
							orig_height: t.image_height,
						}),
						t.spoiler_tag && i.createElement(Re, null),
					),
					i.createElement(
						"div",
						{
							className: j.TimeStamp,
						},
						r,
					),
					i.createElement(
						"div",
						{
							className: (0, x.A)(
								j.ScreenshotCaption,
								t.file_description && j.HasCaption,
							),
						},
						n,
					),
				),
			i.createElement(De, {
				screenshots: e,
				iActiveScreenshot: this.state.iActiveScreenshot,
				fnSelectScreenshot: this.context?.IN_GAMEPADUI
					? (e, t) => this.FullScreenImage((0, ee.uX)(e), t)
					: this.ChangeScreenshot,
			}),
		);
	}
};
function De(e) {
	const { screenshots: t, iActiveScreenshot: r, fnSelectScreenshot: n } = e;
	if (!(0, V.Qn)() && t.length < 2) {
		return null;
	} else {
		return i.createElement(
			_M.Z,
			{
				"flow-children": "row",
				className: j.CarouselThumbs,
			},
			t.map((e, t) =>
				i.createElement(
					_M.Z,
					{
						focusable: true,
						key: e.file.publishedfileid,
						onActivate: (e) => n(e, t),
						onOKActionDescription: (0, U.we)(
							"#AppDetailsActions_ViewScreenshot",
						),
						className: (0, x.A)(j.CarouselThumb, t == r && j.Active),
					},
					i.createElement(
						"div",
						{
							className: j.ImageWrapper,
						},
						i.createElement("img", {
							src: e.file.preview_url,
						}),
						e.file.spoiler_tag && i.createElement(Re, null),
					),
				),
			),
		);
	}
}
(0, n.Cg)([s.oI], ke.prototype, "ChangeScreenshot", null);
(0, n.Cg)([s.oI], ke.prototype, "FullScreenImage", null);
(0, n.Cg)([s.oI], ke.prototype, "SaveActiveScreenshot", null);
(0, n.Cg)([s.oI], ke.prototype, "ShowContextMenu", null);
ke = (0, n.Cg)([a.PA], ke);
const Ne = {
	1: "#Privacy_FriendsOnly",
	2: "#Privacy_Private",
	0: "#Privacy_Public",
	3: "#Privacy_Unlisted",
};
function Fe(e) {
	const t = Ne[e.visibility];
	if (t) {
		return i.createElement(
			"div",
			{
				className: j.VisibilityLabel,
			},
			(0, U.we)(t),
		);
	} else {
		return null;
	}
}
function Ge(e) {
	return e.filter(
		(e) => e.file && e.file?.visibility !== 2 && e.file?.visibility !== 3,
	);
}
var Oe = require("./77163.js");
let Pe = class extends i.Component {
	OnVideoChanged(e) {
		this.props.event.SetActiveCommentThread(e);
	}
	render() {
		const { event: e } = this.props;
		let t = S.B6.GetPublishedFiles(e.publishedfileids).filter((e) => !!e.file);
		return i.createElement(
			"div",
			{
				className: j.ActivityPublishedVideo,
			},
			i.createElement(Le, {
				videos: t,
				onVideoChanged: this.OnVideoChanged,
			}),
		);
	}
};
(0, n.Cg)([s.oI], Pe.prototype, "OnVideoChanged", null);
Pe = (0, n.Cg)([a.PA], Pe);
class Le extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			iActiveVideo: 0,
		};
	}
	static getDerivedStateFromProps(e, t) {
		if (t.iActiveVideo < e.videos.length) {
			return t;
		} else {
			return {
				...t,
				iActiveVideo: 0,
			};
		}
	}
	ChangeVideo(e) {
		if (e != this.state.iActiveVideo) {
			this.setState({
				iActiveVideo: e,
			});
			if (this.props.onVideoChanged) {
				this.props.onVideoChanged(e);
			}
		}
	}
	render() {
		const { videos: e } = this.props;
		if (!e.length) {
			return null;
		}
		let t = e[this.state.iActiveVideo].file;
		return i.createElement(
			"div",
			{
				className: j.VideoCarousel,
			},
			i.createElement(
				"div",
				{
					className: j.ActiveVideoContainer,
				},
				i.createElement(
					"div",
					{
						className: j.ActiveVideo,
					},
					i.createElement(Oe.k, {
						strPreviewURL: t.preview_url,
						strVideoID: t.youtubevideoid,
						inappropriate: false,
					}),
				),
			),
			i.createElement(
				"div",
				{
					className: (0, x.A)(j.VideoTitle, t.title && j.HasTitle),
				},
				i.createElement(
					"div",
					{
						className: (0, x.A)(j.VideoTitleLabel, t.title && j.HasTitle),
					},
					(0, U.we)("#AppActivity_PostedVideoTitleLabel"),
				),
				'"',
				t.title,
				'"',
			),
			i.createElement(ze, {
				videos: e,
				iActiveVideo: this.state.iActiveVideo,
				fnSelectVideo: this.ChangeVideo,
			}),
		);
	}
}
function ze(e) {
	const { videos: t, iActiveVideo: r, fnSelectVideo: n } = e;
	if (t.length < 2) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: j.CarouselThumbs,
			},
			t.map((e, t) =>
				i.createElement(
					"div",
					{
						key: e.file.publishedfileid,
						onClick: () => n(t),
						className: (0, x.A)(j.CarouselThumb, t == r && j.Active),
					},
					i.createElement("img", {
						src: e.file.preview_url,
					}),
				),
			),
		);
	}
}
(0, n.Cg)([s.oI], Le.prototype, "ChangeVideo", null);
var xe = require("./80254.js");
var Ue = require("./17815.js");
var We = require("./82325.js");
let Ve = class extends i.Component {
	NavigateToReviewPage(e) {
		(0, ee.uX)(e).location.href = y.B7.BuildSteamURL(
			"RecommendGame",
			this.props.event.appid,
		);
	}
	render() {
		const { event: e } = this.props;
		let t = e.GetRecommendationDetails();
		if (!t) {
			return null;
		}
		const r = new We.T({
			text: t.review,
		});
		return i.createElement(
			"div",
			{
				className: j.ActivityRecommendedGame,
			},
			i.createElement(
				"div",
				{
					className: j.ReviewMetadata,
				},
				t.voted_up
					? i.createElement(z.twC, {
							className: (0, x.A)(
								j.ReviewIcon,
								j.ReviewIconThumbsUp,
								j.ReviewIconThumbsUpColor,
							),
						})
					: i.createElement(
							"div",
							{
								className: (0, x.A)(j.ReviewIcon, j.ReviewIconThumbsDownBox),
							},
							i.createElement(z.twC, {
								className: (0, x.A)(
									j.ReviewIconThumbsDown,
									j.ThumbsDown,
									j.ReviewIconThumbsDownColor,
								),
							}),
						),
				i.createElement(
					"div",
					{
						className: j.ReviewDescription,
					},
					i.createElement(
						"div",
						{
							className: j.ReviewDescriptionRecommended,
						},
						t.voted_up
							? (0, U.we)("#AppDetails_Review_Recommended")
							: (0, U.we)("#AppDetails_Review_NotRecommended"),
					),
					i.createElement(
						"div",
						{
							className: j.PlayedForTime,
						},
						(0, U.we)(
							"#AppDetails_Review_PlaytimeAtReview",
							(0, xe.l)(t.playtime_at_review),
						),
					),
				),
				t.comment_count > 0 &&
					i.createElement(
						"div",
						{
							className: j.CommentsGroup,
							onClick: this.NavigateToReviewPage,
						},
						i.createElement(
							"div",
							{
								className: j.CommentsContainer,
							},
							i.createElement("div", {
								className: j.UpVotesIcon,
							}),
							i.createElement(
								"div",
								{
									className: j.CommentsLabel,
								},
								(0, U.we)("#AppDetails_Review_UpVotes"),
							),
							i.createElement(
								"div",
								{
									className: j.CommentCount,
								},
								t.votes_up,
							),
						),
						i.createElement(
							"div",
							{
								className: j.CommentsContainer,
							},
							i.createElement("div", {
								className: j.CommentIcon,
							}),
							i.createElement(
								"div",
								{
									className: j.CommentsLabel,
								},
								(0, U.we)("#AppDetails_Review_Comments"),
							),
							i.createElement(
								"div",
								{
									className: j.CommentCount,
								},
								t.comment_count,
							),
						),
					),
			),
			i.createElement(
				Ue.S,
				{
					pxOverflowHeight: 200,
					classNameWhenHidden: j.ReviewText,
					classNameWhenExpanded: (0, x.A)(j.ReviewText, j.ReviewTextExpanded),
				},
				i.createElement(
					"div",
					{
						className: j.ReviewTextContainer,
					},
					" ",
					r.render(),
				),
			),
		);
	}
};
(0, n.Cg)([s.oI], Ve.prototype, "NavigateToReviewPage", null);
Ve = (0, n.Cg)([a.PA], Ve);
var He = require("./22165.js");
const je = (0, a.PA)(function (e) {
	const t = e.event.appid;
	let r = J.x_.GetCommunityItemDefinitions(t);
	let n = J.x_.GetBadgeData(t);
	let a = (0, V.Qn)();
	if (r == null || r.length == 0) {
		return null;
	}
	let s = new Array();
	let o = 0;
	for (let t of e.event.tradingCards) {
		let e;
		let a;
		for (let n of r) {
			if (n.item_class == 2 && n.item_type == t) {
				e = n;
				break;
			}
		}
		if (!e) {
			continue;
		}
		if (!n.rgCards) {
			continue;
		}
		for (let t of n.rgCards) {
			if (t.strName == e.item_name) {
				a = t;
				break;
			}
		}
		if (!a) {
			continue;
		}
		let l = i.createElement(He.dI, {
			key: "trading_card_" + o,
			className: j.SummaryTradingCard,
			bMaxed: false,
			data: a,
			animateHover: true,
			cardScale: 1.5,
		});
		s.push(l);
		o++;
	}
	if (a) {
		return i.createElement(
			_M.Z,
			{
				"flow-children": "row",
				style: {
					overflow: "hidden",
					position: "relative",
				},
			},
			i.createElement(
				Y.hL,
				{
					spacing: {
						horizontal: 6,
					},
				},
				i.createElement(Z.q, null, i.createElement(qe, null, s)),
			),
		);
	} else {
		return i.createElement(
			N.tH,
			null,
			i.createElement(
				"div",
				{
					className: j.TradingCardSection,
				},
				s,
			),
		);
	}
});
function qe(e) {
	const { children: t } = e;
	const r = (0, Y.S1)();
	return i.createElement(
		Y.VJ,
		null,
		i.createElement(
			Q.Q,
			{
				edgeMask: "none",
				className: j.TradingCardSection,
				fnUpdateArrows: () => {},
				fnRenderScrollingDiv: ({ htmlElementRef: e, ...t }) =>
					i.createElement("div", {
						...t,
						ref: e,
						style: r,
					}),
			},
			t,
		),
	);
}
var Qe = require("./3963.js");
let Ze = class extends i.Component {
	render() {
		const { event: e } = this.props;
		let t = e.GetUserStatus();
		if (!t || !t.statusText) {
			return null;
		}
		let r = false;
		if (
			e.steamIDActor &&
			e.steamIDActor.GetAccountID() == f.O$.currentUserSteamID.GetAccountID()
		) {
			r = true;
		}
		return i.createElement(
			"div",
			{
				className: j.ActivityPublishedStatus,
			},
			i.createElement(
				"span",
				{
					className: j.StatusText,
				},
				Qe.Nb.FormatAndParseUserStatusBBCode(t.statusText),
			),
		);
	}
};
function Ye(e, t) {
	const r = _.tw.GetAppOverviewByAppID(e);
	const n = (0, w.q3)(() => r?.visible_in_game_list);
	const i = (0, d.Qt)(y.B7.BuildStoreAppURL(e, "appactivityfeed"));
	const a = (0, A.br)();
	const s = t ? () => a.App(e) : undefined;
	if ((0, v.W5)(d.BV.Library.App.Root(e))) {
		return () => {};
	} else if (n) {
		return s;
	} else {
		return i;
	}
}
function Ke(e) {
	const t = _.tw.GetAppOverviewByAppID(e);
	const [r, n] = (0, w.q3)(() => [
		t?.visible_in_game_list,
		t?.BIsApplicationOrTool(),
	]);
	if (n) {
		if (r) {
			return (0, U.we)("#Generic_ViewInLibrary");
		} else {
			return (0, U.we)("#Generic_ViewInStore");
		}
	} else if (r) {
		return (0, U.we)("#Generic_ViewGameDetails");
	} else {
		return (0, U.we)("#Generic_ViewGameInStore");
	}
}
Ze = (0, n.Cg)([a.PA], Ze);
let Xe = class extends i.Component {
	FilterEvents() {
		const {
			day: { events: e },
		} = this.props;
		if (e) {
			return e.filter((e) => {
				const t = f.O$.currentUserSteamID.GetAccountID();
				if (
					e.eEventType != c._Q.PostedAnnouncement &&
					e.steamIDActor.GetAccountID() != t
				) {
					const t = f.O$.GetFriendState(e.steamIDActor);
					if (t.is_blocked || !t.is_friend) {
						return false;
					}
				}
				if (e.eEventType === c._Q.FilePublished_Screenshot) {
					if (Ge(S.B6.GetPublishedFiles(e.publishedfileids)).length === 0) {
						return false;
					}
				}
				let r = this.props.skipPartnerEvent;
				if (e.eEventType == c._Q.PostedAnnouncement && r) {
					if (r == e.announcementGID) {
						return false;
					}
				}
				return true;
			});
		} else {
			return [];
		}
	}
	render() {
		const { day: e, nMaxItemsToDisplay: t, rollup: r } = this.props;
		if (!e.isValid) {
			return null;
		}
		let n = this.FilterEvents();
		n.length;
		if (!n || !n.length) {
			return null;
		}
		if (t) {
			n = n.slice(0, t);
		}
		const a = (0, U._l)(e.GetLatestEventTime(), true);
		return i.createElement(
			"div",
			{
				className: j.AppActivityDay,
			},
			i.createElement(
				"div",
				{
					className: j.AppActivityDate,
				},
				a,
				i.createElement("div", {
					className: j.Rule,
				}),
			),
			i.createElement(
				"div",
				{
					className: j.AppDayContents,
				},
				n.map((e) =>
					i.createElement(tt, {
						key: e.unUniqueID,
						event: e,
						rollup: r,
					}),
				),
			),
		);
	}
};
Xe = (0, n.Cg)([a.PA], Xe);
const Je = (e) => {
	const { appid: t } = e;
	const [r] = (0, k.t7)(t, R.A.k_DataRequest_Assets);
	if (!r) {
		return null;
	}
	const n = r.GetAssets().GetCommunityIconURL();
	return i.createElement(
		"span",
		{
			className: j.HeadlineGameName,
			"data-appid": t,
		},
		n &&
			i.createElement(m.z, {
				appid: t,
				rgSources: [n],
				eAssetType: 4,
				className: j.GameIcon,
			}),
		r.GetName(),
	);
};
function $e(e, t) {
	const r = (0, h.If)();
	return (0, k.t7)(e, t, r);
}
function et(e, t) {
	return (function (e, t) {
		const r = (0, h.If)();
		(0, k.zX)(e, t, r);
		return e.filter((e) => {
			const t = R.A.Get().GetApp(e);
			return t && t.BIsVisible() && !t.BIsApplicationOrTool();
		});
	})(
		i.useMemo(() => {
			let t = [];
			if (e.eEventType == c._Q.ReceivedNewGame) {
				t = e.GetFilteredAppIds();
			} else if (e.eEventType == c._Q.AddedGameToWishlist) {
				t = e.GetFilteredAppIds();
			}
			return t;
		}, [e]),
		t,
	);
}
const tt = (0, a.PA)(function (e) {
	const { event: t, rollup: r } = e;
	const n = t.appid;
	const [a, s] = i.useState(false);
	const o = Ye(n, r);
	const l = Ke(n);
	const m = (0, v.W5)(d.BV.Library.App.Root(n));
	const [u] = $e(n, R.A.k_DataRequest_Assets);
	const A = et(t, R.A.k_DataRequest_Assets);
	const p = () => {
		s(true);
	};
	const g = () => {
		s(false);
	};
	let h = (0, d.bG)("SteamIDPage", t.steamIDActor.ConvertTo64BitString());
	if (!t.BIsValid()) {
		return null;
	}
	if (t.eEventType == c._Q.PostedAnnouncement) {
		return i.createElement(Ce, {
			className: j.Event,
			event: t,
			featuredSpot: false,
		});
	}
	let _ = null;
	let b = null;
	if (n && (!u || !u.BIsVisible())) {
		return null;
	}
	let y;
	let w = null;
	let B = f.O$.GetFriendState(t.steamIDActor);
	let E = null;
	let T = true;
	let k = (0, U.we)("#AppActivity_ViewProfile");
	const D = B.persona.m_steamid.ConvertTo64BitString();
	if (t.bIsGameActivity) {
		T = false;
		switch (t.eGameActivityType) {
			case 1:
				break;
			case 2:
				if (t.eEventSubType == C.qz.k_ETradingCardActivity_BadgeCraft) {
					_ = i.createElement(te, {
						event: t,
					});
					b = (0, U.we)(t.GetHeadline());
				} else if (t.eEventSubType == C.qz.k_ETradingCardActivity_BoosterDrop) {
					_ = i.createElement(re, {
						event: t,
					});
					b = (0, U.we)(t.GetHeadline());
				} else {
					_ = i.createElement(je, {
						event: t,
					});
					b = (0, U.we)(t.GetHeadline());
				}
				break;
			default:
				console.log("No renderer for game activity type " + t.eEventType);
		}
	} else {
		switch (t.eEventType) {
			case c._Q.AchievementUnlocked:
				T = false;
				let e = t;
				b =
					r || e.achievements.length == 0
						? (0, U.PP)(
								"#AppActivity_AchievedRollupAlt",
								i.createElement(Je, {
									appid: n,
								}),
							)
						: (0, U.we)("#AppActivity_Achieved");
				_ = i.createElement(
					i.Fragment,
					null,
					i.createElement(K, {
						event: e,
						maxshown: 7,
					}),
				);
				k = (0, U.we)("#AppActivity_Achieved_PlusMore_Label");
				break;
			case c._Q.FilePublished_Screenshot:
				{
					T = false;
					let e = t;
					let a = S.B6.GetPublishedFiles(e.publishedfileids).filter(
						(e) => !!e.file,
					);
					_ = i.createElement(Te, {
						event: e,
						screenshots: a,
					});
					b = (0, U.Yp)("#AppActivity_PostedScreenshot", a.length);
					if (r) {
						b = (0, U.TG)(
							"#AppActivity_PostedScreenshot_Rollup",
							a.length,
							i.createElement(Je, {
								appid: n,
							}),
						);
					}
					w = j.Screenshot;
					E = e.GetCurrentPublishedFileID();
				}
				break;
			case c._Q.FilePublished_Video:
				{
					T = false;
					let e = t;
					let a = e.publishedfileids.length;
					_ = i.createElement(Pe, {
						event: e,
					});
					b = (0, U.Yp)("#AppActivity_PostedVideo", a);
					if (r) {
						b = (0, U.TG)(
							"#AppActivity_PostedVideo_Rollup",
							a,
							i.createElement(Je, {
								appid: n,
							}),
						);
					}
					w = j.Video;
					E = e.GetCurrentPublishedFileID();
				}
				break;
			case c._Q.ReceivedNewGame:
				if (A.length == 0) {
					return null;
				}
				T = false;
				if (A.length > 1) {
					_ = i.createElement(bt, {
						rgApps: A,
						steamid: D,
					});
				} else if (r) {
					_ = i.createElement(ht, {
						appid: A[0],
						rollup: r,
						steamid: D,
					});
				}
				if (_) {
					b = (0, U.Yp)("#AppActivity_ReceivedNewGame", A.length);
				} else {
					T = true;
					b = (0, U.PP)(
						"#AppActivity_ReceivedNewGameList",
						_W(A, (e) =>
							i.createElement(Je, {
								key: e,
								appid: e,
							}),
						),
					);
				}
				break;
			case c._Q.PlayedGameFirstTime:
				b = (0, U.PP)(
					u.BIsApplicationOrTool()
						? "#AppActivity_LaunchedSoftwareFirstTime"
						: "#AppActivity_PlayedGameFirstTime",
					i.createElement(Je, {
						appid: n,
					}),
				);
				if (r) {
					T = false;
					_ = i.createElement(ht, {
						appid: n,
						rollup: r,
						steamid: D,
					});
				}
				break;
			case c._Q.AddedGameToWishlist:
				if (A.length == 0) {
					return null;
				}
				if (A.length > 1) {
					_ = i.createElement(St, {
						rgApps: A,
						steamid: D,
					});
				} else if (r) {
					_ = i.createElement(Ct, {
						appid: A[0],
						steamid: D,
					});
				}
				T = !_;
				b = i.createElement(Bt, {
					steamID: D,
					apps: A,
					singleLine: !_,
				});
				break;
			case c._Q.UserStatus:
				{
					_ = i.createElement(Ze, {
						event: t,
					});
					let e = new Date(t.rtEventTime * 1000).toLocaleTimeString(
						U.pf.GetPreferredLocales(),
					);
					b = (0, U.we)("#AppActivity_UserStatus_Time", e);
					w = j.UserStatus;
				}
				break;
			case c._Q.RecommendedGame:
				_ = i.createElement(Ve, {
					event: t,
				});
				b = (0, U.we)("#AppActivity_RecommendedGame");
				y = t.GetRecommendationDetails();
				if (!m) {
					k = l;
					h = o;
				}
				break;
			default:
				console.log("No renderer for " + c._Q[t.eEventType]);
		}
	}
	if (!_ && !b) {
		return null;
	}
	let G = _ != null;
	let O = {};
	O.onMenuButton = (e) => {
		((e) => {
			let n = {
				bOverlapHorizontal: true,
				bMatchWidth: true,
				bFitToWindow: true,
				strClassName: (0, x.A)(
					"DialogMenuPosition",
					j.SortingDropDownContainer,
				),
			};
			(0, I.lX)(
				i.createElement(rt, {
					event: t,
					bInAppDetails: !!m,
					rollup: r,
				}),
				e,
				n,
			).SetLabel((0, U.we)("#ActionButtonLabelContextMenu"));
		})(e);
	};
	O.onMenuActionDescription = (0, U.we)("#ActionButtonLabelContextMenu");
	const P = t.BSupportsCommentThreads();
	return i.createElement(
		_M.Z,
		{
			...O,
			focusable: false,
			onOKButton: h,
			className: (0, x.A)(
				j.Event,
				((e) => {
					switch (e) {
						case c._Q.AchievementUnlocked:
							return j.AchievementEvent;
						case c._Q.FilePublished_Screenshot:
							return j.ScreenshotUploaded;
						case c._Q.FilePublished_Video:
							return j.VideoUploaded;
						case c._Q.ReceivedNewGame:
							return j.ReceivedNewGame;
						case c._Q.PlayedGameFirstTime:
							return j.PlayedGameFirstTime;
						case c._Q.AddedGameToWishlist:
							return j.AddedGameToWishlist;
						case c._Q.UserStatus:
							return j.UserStatus;
						case c._Q.RecommendedGame:
							return j.RecommendedGame;
						default:
							return null;
					}
				})(t.eEventType),
				!P && j.NoCommentSupport,
			),
			onMouseEnter: p,
			onMouseLeave: g,
			onFocus: p,
			onBlur: g,
			onOKActionDescription: T ? k : undefined,
		},
		i.createElement(
			at,
			{
				focusable: T,
				steamIDActor: t.steamIDActor,
				event: t,
			},
			b,
		),
		G &&
			i.createElement(
				"div",
				{
					className: (0, x.A)(j.EventBody, w),
				},
				i.createElement(N.tH, null, _),
			),
		P &&
			i.createElement(
				F.K,
				{
					placeholderHeight: 32,
					rootMargin: "0px 0px 50% 0px",
				},
				i.createElement(it, {
					event: t,
					publishedfileid: E,
					recommendation: y,
					visible: a,
				}),
			),
	);
});
const rt = (0, a.PA)(function (e) {
	const { event: t, bInAppDetails: r, rollup: n } = e;
	const a = t.appid;
	let s = [];
	const o = (0, E.R7)();
	const l = Ke(a);
	const c = Ye(a, n);
	const m = () => {
		(0, L.pg)(
			i.createElement(ot, {
				event: t,
				closeModal: () => null,
			}),
			o.ownerWindow ?? window,
			{
				strTitle: (0, U.we)("#AppActivity_ConfirmDeleteTitle"),
			},
		);
	};
	const u = (0, d.bG)("SteamIDPage", t.steamIDActor.ConvertTo64BitString());
	s.push({
		data: u,
		label: (0, U.we)("#AppActivity_ViewProfile"),
	});
	if (!r && t.appid) {
		s.push({
			data: c,
			label: l,
		});
	}
	const A = t.GetActiveCommentThread();
	let h;
	if (t instanceof C.hO || t instanceof C.UV) {
		h = t.GetCurrentPublishedFileID();
	}
	if (h) {
		if (S.B6.GetPublishedFile(h) != null) {
			let e = S.B6.BVotedForPublishedFile(h);
			s.push({
				data: () =>
					((e, t) => {
						S.B6.VoteOnPublishedFile(e, t);
					})(h, e ? p.bJ.Down : p.bJ.Up),
				label: e
					? (0, U.we)("#AppActivity_RateDown")
					: (0, U.we)("#AppActivity_RateUp"),
			});
		}
	} else if (A) {
		let e = A.m_threadInfo.user_upvoted;
		s.push({
			data: () => A.RateCommentOrThread(!e),
			label: e
				? (0, U.we)("#AppActivity_RateDown")
				: (0, U.we)("#AppActivity_RateUp"),
		});
	}
	if (A) {
		const e = (e) => {
			A.PostCommentToThread(e);
		};
		let t = i.createElement(g.Qj, {
			title: (0, U.we)("#AppActivity_AddComments"),
			description: "",
			onResult: e,
		});
		s.push({
			data: () => {
				(0, L.pg)(t, o.ownerWindow ?? window);
			},
			label: (0, U.we)("#AppActivity_AddComments"),
		});
	}
	if (t.BUserCanDelete()) {
		s.push({
			data: m,
			label: (0, U.we)("#AppActivity_ConfirmDeleteTitle"),
		});
	}
	return i.createElement(D.n4, {
		rgOptions: s,
		onValueSelected: (e, { data: t }) => t(),
		strDropDownItemClassName: j.SortingDropDownItems,
	});
});
function nt(e) {
	let { event: t } = e;
	return i.createElement(Ce, {
		className: j.Event,
		event: t,
		featuredSpot: true,
	});
}
const it = (0, a.PA)(
	({ event: e, publishedfileid: t, recommendation: r, visible: n }) => {
		let a = e.GetActiveCommentThread();
		let s = a != null;
		let o = !a || a.m_rgComments.length == 0;
		(0, i.useEffect)(() => {
			if (a && n) {
				a.RefreshIfNeeded();
			}
		}, [a, n]);
		return (
			s &&
			i.createElement(l._h, {
				commentThread: a,
				bDefaultMinimized: o,
				publishedfileid: t,
				recommendation: r,
				bVisible: n,
			})
		);
	},
);
const at = (0, a.PA)(function (e) {
	const { steamIDActor: t, focusable: r, event: n } = e;
	let a = f.O$.GetFriendState(t);
	let s = (0, d.bG)("SteamIDPage", t.ConvertTo64BitString());
	const o = (0, E.R7)();
	return i.createElement(
		_M.Z,
		{
			focusable: r,
			className: j.EventHeadline,
		},
		i.createElement(u.fH, {
			className: j.EventActorAvatar,
			friend: a,
			size: "Small",
			statusPosition: "right",
			onClick: s,
		}),
		i.createElement(
			"span",
			{
				className: j.SpanEvent,
			},
			i.createElement(T.A, {
				className: j.ActorName,
				persona: a.persona,
				strNickname: a.nickname,
				bParenthesizeNicknames:
					b.rV.communityPreferences.bParenthesizeNicknames,
				onContextMenu: (e) => {
					(0, u.Cc)(e, a, o);
				},
				onClick: s,
			}),
			i.createElement(
				"span",
				{
					className: j.HeaderChildren,
				},
				e.children,
			),
		),
		i.createElement(st, {
			event: n,
		}),
	);
});
function st(e) {
	const { event: t } = e;
	const [r, n, a] = (0, s.uD)();
	if (t.BUserCanDelete()) {
		return i.createElement(
			i.Fragment,
			null,
			r &&
				i.createElement(
					P.EN,
					{
						active: true,
					},
					i.createElement(ot, {
						event: t,
						closeModal: a,
					}),
				),
			i.createElement(
				"div",
				{
					className: j.DeleteButton,
					onClick: n,
				},
				i.createElement(z._r0, {
					className: j.DeleteUserNews,
				}),
			),
		);
	} else {
		return null;
	}
}
function ot(e) {
	const { event: t, closeModal: r } = e;
	const n = t.appid;
	const { mutate: a } = (0, B.n)({
		mutationFn: async () => {
			let e = C.yX.GetAppActivity(n);
			await e.DeleteEvent(t);
		},
	});
	return i.createElement(P.o0, {
		strTitle: (0, U.we)("#AppActivity_ConfirmDeleteTitle"),
		strDescription: (0, U.we)("#AppActivity_ConfirmDeleteTitle_Desc"),
		onOK: a,
		onCancel: r,
	});
}
const lt = (e) => {
	const { appid: t, className: r } = e;
	const [n] = (0, k.t7)(t, R.A.k_DataRequest_Assets);
	const [a, s] = [n?.GetName(), n?.GetAssets().GetHeaderURL()];
	return i.createElement(m.z, {
		className: r,
		appid: t,
		name: a,
		rgSources: [s, o.A],
		eAssetType: 3,
		allowCustomization: false,
	});
};
function ct(e, t) {
	const r = `${y.B7.GetStoreURL()}wishlist/profiles/${e}/#sort=order&term=`;
	if (t) {
		return r + encodeURIComponent(t.toLowerCase());
	} else {
		return r;
	}
}
function mt(e, t) {
	const r = ct(e, t);
	return (0, d.Qt)(r);
}
function ut(e, t, r) {
	let n = {
		bOverlapHorizontal: true,
		bMatchWidth: true,
		bFitToWindow: true,
		strClassName: (0, x.A)("DialogMenuPosition", j.SortingDropDownContainer),
	};
	(0, I.lX)(
		i.createElement(dt, {
			steamid: e,
			appid: t,
			name: r,
		}),
		null,
		n,
	).SetLabel((0, U.we)("#ActionButtonLabelContextMenu"));
}
function dt(e) {
	const { steamid: t, appid: r, name: n } = e;
	let a = [];
	const s = ct(t, n);
	const o = _.tw.GetAppOverviewByAppID(r);
	const l = o?.visible_in_game_list;
	const c = (0, v.W5)(d.BV.Library.App.Root(r));
	a.push({
		data: (0, d.bG)("SteamIDPage", t),
		label: (0, U.we)("#AppActivity_ViewProfile"),
	});
	a.push({
		data: (0, d.Qt)(s),
		label: (0, U.we)("#AppActivity_ViewWishlist"),
	});
	const m = (0, A.br)();
	const u = () => m.App(r);
	if (l && !c) {
		a.push({
			data: u,
			label: (0, U.we)("#Generic_ViewInLibrary"),
		});
	}
	a.push({
		data: (0, d.t6)(r, "appactivityfeed"),
		label: (0, U.we)("#Generic_ViewInStore"),
	});
	return i.createElement(D.n4, {
		rgOptions: a,
		onValueSelected: (e, { data: t }) => t(),
		strDropDownItemClassName: j.SortingDropDownItems,
	});
}
function At(e, t) {
	let r = {
		bOverlapHorizontal: true,
		bMatchWidth: true,
		bFitToWindow: true,
		strClassName: (0, x.A)("DialogMenuPosition", j.SortingDropDownContainer),
	};
	(0, I.lX)(
		i.createElement(pt, {
			steamid: e,
			appid: t,
		}),
		null,
		r,
	).SetLabel((0, U.we)("#ActionButtonLabelContextMenu"));
}
function pt(e) {
	const { steamid: t, appid: r } = e;
	let n = [];
	const a = _.tw.GetAppOverviewByAppID(r);
	const s = a?.visible_in_game_list;
	const o = (0, v.W5)(d.BV.Library.App.Root(r));
	n.push({
		data: (0, d.bG)("SteamIDPage", t),
		label: (0, U.we)("#AppActivity_ViewProfile"),
	});
	const l = (0, A.br)();
	const c = () => l.App(r);
	if (s && !o) {
		n.push({
			data: c,
			label: (0, U.we)("#Generic_ViewInLibrary"),
		});
	}
	n.push({
		data: (0, d.t6)(r, "appactivityfeed"),
		label: (0, U.we)("#Generic_ViewInStore"),
	});
	return i.createElement(D.n4, {
		rgOptions: n,
		onValueSelected: (e, { data: t }) => t(),
		strDropDownItemClassName: j.SortingDropDownItems,
	});
}
const gt = (e) => {
	const { appid: t, onActivate: r, onShowContextMenu: n } = e;
	const [a] = (0, k.t7)(t, R.A.k_DataRequest_BasicInfo);
	let s = {
		onMenuButton: n,
	};
	s.onMenuActionDescription = (0, U.we)("#ActionButtonLabelContextMenu");
	const o = a?.GetShortDescription();
	return i.createElement(
		_M.Z,
		{
			className: j.StoreGameCapsule,
			focusable: true,
			onActivate: r,
			...s,
		},
		i.createElement(
			"div",
			{
				className: j.HeaderImageWrapper,
			},
			i.createElement(lt, {
				className: j.HeaderImage,
				appid: t,
			}),
		),
		i.createElement(
			"div",
			{
				className: j.Description,
			},
			o,
		),
	);
};
const ht = (e) => {
	const { appid: t, rollup: r, steamid: n } = e;
	const a = Ye(t, r);
	return i.createElement(gt, {
		appid: t,
		onActivate: a,
		onShowContextMenu: () => At(n, e.appid),
	});
};
const Ct = (e) => {
	const { appid: t, steamid: r } = e;
	const [n] = (0, k.t7)(t, R.A.k_DataRequest_Assets);
	const a = mt(r, n?.GetName());
	return i.createElement(gt, {
		appid: t,
		onActivate: a,
		onShowContextMenu: () => ut(r, t, n?.GetName()),
	});
};
const _t = (e) => {
	const { rgApps: t, fnRender: r } = e;
	const n = (0, V.Qn)();
	const a = Number.parseInt(j.GameCarouselItemWidth);
	const s = Number.parseInt(j.GameCarouselItemHeight);
	const o = Number.parseInt(j.GameCarouselItemMargin);
	const l = (e) => t[e].toString();
	const c = i.useCallback((e) => a, [a]);
	return i.createElement(
		"div",
		{
			className: j.GameCarouselWrapper,
		},
		i.createElement(
			G.C,
			{
				bNoHeader: n,
			},
			(e, n) =>
				i.createElement(O.X, {
					name: "GameCarousel",
					className: j.GameCarousel,
					ref: e,
					fnUpdateArrows: n,
					nNumItems: t.length,
					nHeight: s,
					nItemHeight: s,
					nItemMarginX: o,
					fnGetColumnWidth: c,
					fnGetId: l,
					fnItemRenderer: r,
					scrollToAlignment: "center",
				}),
		),
	);
};
const ft = (e) => {
	const {
		appid: t,
		width: r,
		height: n,
		onActivate: a,
		onShowContextMenu: s,
	} = e;
	const [o] = $e(t, R.A.k_DataRequest_Assets);
	let l = {
		onMenuButton: s,
	};
	l.onMenuActionDescription = (0, U.we)("#ActionButtonLabelContextMenu");
	const c = {
		width: r,
		height: n,
	};
	return (
		o &&
		i.createElement(
			_M.Z,
			{
				focusable: true,
				key: t,
				onActivate: a,
				style: c,
				...l,
			},
			i.createElement(lt, {
				key: t,
				className: j.GameCarouselItemHeader,
				appid: t,
			}),
		)
	);
};
const bt = (e) => {
	const { rgApps: t, steamid: r } = e;
	return i.createElement(_t, {
		rgApps: t,
		fnRender: (e, n, a, s) => {
			const o = t[e];
			return i.createElement(yt, {
				key: o,
				appid: o,
				width: n,
				height: a,
				steamid: r,
			});
		},
	});
};
const yt = (e) => {
	const { appid: t, steamid: r, ...n } = e;
	const a = Ye(t, true);
	return i.createElement(ft, {
		appid: t,
		...n,
		onActivate: a,
		onShowContextMenu: () => At(r, t),
	});
};
const St = (e) => {
	const { rgApps: t, steamid: r } = e;
	return i.createElement(_t, {
		rgApps: t,
		fnRender: (e, n, a, s) => {
			const o = t[e];
			return i.createElement(wt, {
				key: o,
				appid: o,
				width: n,
				height: a,
				steamid: r,
			});
		},
	});
};
const wt = (e) => {
	const { steamid: t, appid: r, ...n } = e;
	const [a] = (0, k.t7)(r, R.A.k_DataRequest_Assets);
	const s = mt(t, a?.GetName());
	return i.createElement(ft, {
		appid: r,
		...n,
		onActivate: s,
		onShowContextMenu: () => ut(t, r, a?.GetName()),
	});
};
function Bt(e) {
	let { steamID: t, apps: r, singleLine: n } = e;
	let a = mt(t, r.length == 1 ? R.A.Get().GetApp(r[0]).GetName() : "");
	let s = i.createElement(
		"a",
		{
			className: j.WishlistLink,
			onClick: a,
		},
		(0, U.we)("#AppActivity_Wishlist"),
	);
	if (n) {
		return (0, U.PP)(
			"#AppActivity_AddedGameToWishlist",
			_W(r, (e) =>
				i.createElement(Je, {
					key: e,
					appid: e,
				}),
			),
			s,
		);
	} else {
		return (0, U.TG)("#AppActivity_AddedGameToWishlistCount", r.length, s);
	}
}
var vt = require("./1965.js");
var It = require("./36934.js");
var Et = require(/*webcrack:missing*/ "./12176.js");
var Mt = require("./12975.js");
var Tt = require("./54946.js");
var Rt = require("./51076.js");
var kt = require("./30884.js");
var Dt = kt;
var Nt = require(/*webcrack:missing*/ "./61416.js");
var Ft = require("./16053.js");
var Gt = require("./74827.js");
var Ot = require(/*webcrack:missing*/ "./8573.js");
var Pt = require("./91745.js");
const Lt = 24;
function zt(e) {
	let t = (0, w.q3)(() => Pt.hG.GetToggle(16));
	let r = Lt * 60 * 60 * 1000;
	return (0, Nt.I)({
		queryKey: ["AppSpotlightEvent", e, t],
		queryFn: () =>
			(async function (e, t) {
				let r = Gt.Ri.GetCM();
				let n = Et.w.Init(Ft.cZ);
				n.Body().set_appid(e);
				n.Body().set_include_already_seen(t);
				let i = await Ft.eW.GetAppDetailsSpotlight(r.GetServiceTransport(), n);
				if (i.GetEResult() != 1) {
					console.log(`Failed to load app details event spotlight for ${e}`);
					return null;
				}
				let a = i.Body();
				if (!a || a.events().length == 0) {
					return null;
				}
				let s = a.events()[0];
				let o = new Ot.b(s.clan_id());
				let l = s.appid().toString();
				return new C.fE(
					s.event_time(),
					o,
					s.clan_announcementid(),
					s.rtime32_last_modified(),
					l,
				);
			})(e, t),
		staleTime: r,
		gcTime: Infinity,
	});
}
var xt = require(/*webcrack:missing*/ "./41180.js");
var Ut = require("./74351.js");
var Wt = Ut;
var Vt = require("./10593.js");
var Ht = require(/*webcrack:missing*/ "./90242.js");
var jt = require("./78057.js");
var qt = require("./3651.js");
var Qt = require("./81482.js");
var Zt = require(/*webcrack:missing*/ "./98995.js");
var Yt = require("./93050.js");
var Kt = require("./89748.js");
const Xt = xt.Kp.PerDay * 2;
function Jt(e) {
	let t = (0, jt.T)(e);
	let r = t && t.bAvailableContentOnStore;
	let { data: n } = $t(e, r);
	let a = (0, w.q3)(() => Pt.hG.GetToggle(17));
	let [s, o] = i.useState(false);
	let l = i.useCallback(() => {
		(function (e, t) {
			let r = ir(e);
			if (r && r.rtNew != 0) {
				r.rtNew = r.rtNew + 1;
				r.rtOld = r.rtNew;
			} else {
				let e = xt._2();
				r = {
					rtNew: e,
					rtOld: e,
					rtStart: 0,
				};
			}
			ar(e, r, t);
		})(e, a);
		o(true);
	}, [e, o, a]);
	let [c, m] = i.useMemo(() => {
		if (!n || !t || s) {
			return [[], false];
		}
		let r = _.tw.GetAppOverviewByAppID(e);
		let i = r ? r.rt_purchased_time : undefined;
		return (function (e, t, r, n, i) {
			let a = xt._2();
			n = n || a;
			let s = ir(e);
			let o = {
				...s,
			};
			if (!s || !!i) {
				s = {
					rtOld: 0,
					rtNew: 0,
					rtStart: 0,
					bFirstDisplay: true,
				};
			}
			let l = [];
			let c = 0;
			let m = 0;
			for (let e of t) {
				let t = e.GetReleaseDateRTime();
				if (t) {
					if (!sr(e.GetAppID(), r) && !(t < s.rtOld)) {
						if (c == 0 || t < c) {
							c = t;
						}
						if (t > m) {
							m = t;
						}
						l.push(e);
					}
				}
			}
			if (l.length == 0) {
				if (s.bFirstDisplay) {
					delete s.bFirstDisplay;
					ar(e, s, i);
				}
				return [[], false];
			}
			if (c > s.rtOld) {
				s.rtOld = c;
			}
			if (m > s.rtNew) {
				s.rtNew = m;
				s.rtStart = a;
			}
			if (a >= s.rtStart + Xt) {
				s.rtNew = s.rtNew + 1;
				s.rtOld = s.rtNew;
				delete s.bFirstDisplay;
				l = [];
			}
			if (
				o.rtNew !== s.rtNew ||
				o.rtOld !== s.rtOld ||
				o.rtStart !== s.rtStart ||
				o.bFirstDisplay !== s.bFirstDisplay
			) {
				ar(e, s, i);
			}
			let u = s.bFirstDisplay == 1;
			return [l, u];
		})(e, n.GetItems(), t.vecDLC, i, a);
	}, [e, t, n, a, s]);
	return {
		rgFeaturedDLC: c,
		fnHideDLCRollup: l,
		bFirstDisplay: m,
	};
}
function $t(e, t) {
	return (0, Vt.PG)(
		"AppActivityDLCRollup",
		{
			start: 0,
			count: 20,
			sort: 40,
			filters: {
				parent_appids: [e],
				released_only: true,
				type_filters: {
					include_dlc: true,
				},
			},
		},
		{
			include_assets: true,
			include_release: true,
			include_basic_info: true,
		},
		{
			reactQuery: {
				enabled: t,
			},
		},
	);
}
function er(e) {
	let { appid: t, rollup: r } = e;
	let { rgFeaturedDLC: n, fnHideDLCRollup: a, bFirstDisplay: s } = r;
	let o = (0, jt.T)(t);
	let l = y.B7.BuildStoreAppDlcURL(t, "dlcrollup");
	let c = (0, d.Qt)(l);
	if (n.length == 0) {
		return null;
	}
	let m = i.createElement(tr, {
		gameName: o.strDisplayName,
		firstDisplay: s,
	});
	let u = n.length < 2;
	return i.createElement(
		"div",
		{
			className: Wt.Rollup,
		},
		i.createElement(
			"div",
			{
				className: Wt.Contents,
			},
			i.createElement(
				G.C,
				{
					className: Wt.CarouselControls,
					pageContainerStyles: Wt.CarouselControlsPadding,
					customheader: m,
					bNoHeader: false,
					bHeaderClickScrollToFirst: true,
					bShowCloseButton: true,
					onCloseButtonClicked: a,
					buttonSize: "small",
				},
				(e, t) =>
					i.createElement(
						Q.Q,
						{
							className: Wt.ContentCarousel,
							leftMargin: 0,
							gap: 10,
							ref: e,
							fnUpdateArrows: t,
							edgeMask: "new",
							customPadding: "6px 16px 6px 0px",
						},
						n.map((e) =>
							i.createElement(rr, {
								key: e.GetAppID(),
								item: e,
								showDescription: u,
								fillParent: u,
							}),
						),
					),
			),
			i.createElement(
				"div",
				{
					className: Wt.ViewAllRow,
				},
				i.createElement(
					Ht.Ii,
					{
						className: Wt.ViewAll,
						onClick: c,
						focusable: true,
					},
					(0, U.we)("#AppActivity_FeaturedDLC_ViewAll"),
				),
			),
		),
	);
}
function tr(e) {
	if ((0, V.Qn)()) {
		return null;
	}
	let { gameName: t, firstDisplay: r } = e;
	let n = r
		? (0, U.we)("#AppActivity_FeaturedDLC_Available")
		: (0, U.we)("#AppActivity_FeaturedDLC");
	let a = i.createElement(
		"span",
		null,
		(0, U.oW)(
			(0, U.we)("#AppActivity_FeaturedDLC_Tooltip", t),
			i.createElement("p", {
				className: Wt.Tooltip,
			}),
			i.createElement("p", {
				className: Wt.Tooltip,
			}),
		),
	);
	let s = i.createElement(Zt.t1, null, i.createElement(Zt.MA, null, a));
	return i.createElement(Yt.w, {
		label: n,
		tooltip: s,
		noLeftPadding: true,
	});
}
function rr(e) {
	let { item: t, showDescription: r, fillParent: n } = e;
	const a = new URL(t.GetAssets().GetHeaderURL());
	const s = parseInt(a.searchParams.get("t") || "0");
	const o = a.pathname?.slice(a.pathname.lastIndexOf("/") + 1) || "header.jpg";
	const l = t.GetAppID();
	const c = t.GetName();
	let m = {
		unAppID: l,
		strName: c,
		rtPurchaseDate: 0,
		strState: "notinstalled",
		bEnabled: false,
		bAvailableOnStore: true,
		strHeaderFilename: o,
		rtStoreAssetModifyTime: s,
		lDiskUsageBytes: 0,
	};
	let u = t.GetShortDescription();
	let A = (0, x.A)(Wt.CarouselItem, n && Wt.FillParent);
	const p = (0, d.t6)(l, "dlccapsule");
	return i.createElement(
		"a",
		{
			key: l,
			className: A,
			onClick: p,
		},
		i.createElement(
			"div",
			{
				className: Wt.CarouselImage,
			},
			i.createElement(qt.Ne, {
				item: m,
				appidParent: t.GetParentAppID(),
				bShowHover: true,
			}),
		),
		r &&
			i.createElement(
				"div",
				{
					className: Wt.CarouselDescription,
				},
				i.createElement(
					"div",
					{
						className: Wt.CarouselHeader,
					},
					c,
				),
				i.createElement(
					"div",
					{
						className: Wt.CarouselBody,
					},
					u,
				),
			),
	);
}
function nr(e) {
	return `NewContentRollup_${e}`;
}
function ir(e) {
	const t = (0, Kt.qw)().GetCloudStorageForLibrary();
	const r = nr(e);
	let n = t.Get(r);
	if (n) {
		return JSON.parse(n);
	} else {
		return null;
	}
}
function ar(e, t, r) {
	if (r) {
		return;
	}
	const n = (0, Kt.qw)().GetCloudStorageForLibrary();
	const i = nr(e);
	n.StoreObject(i, t, Qt.x2.LastWriteWins);
}
function sr(e, t) {
	for (let r of t) {
		if (r.unAppID == e) {
			return true;
		}
	}
	return false;
}
window.ResetNewContentRollup = async function () {
	const e = (0, Kt.qw)().GetCloudStorageForLibrary();
	let t = e.GetByPrefix("NewContentRollup_");
	for (let r of t.keys()) {
		await e.RemoveObject(r, Qt.x2.LastWriteWins);
	}
	return true;
};
export function W(e) {
	const { appid: t } = e;
	const [r, n] = i.useState(1);
	const [a, s] = (0, Rt.SP)("AppDetailsActivitySectionDays", 1);
	i.useEffect(() => {
		n(1);
	}, [t]);
	return i.createElement(lr, {
		...e,
		nDaysToDisplay: Math.max(r, a),
		setDaysToDisplay: (e) => {
			n(e);
			s(e);
		},
	});
}
let lr = class extends i.Component {
	static defaultProps = {
		showTextBox: true,
	};
	async OnPostStatusClicked(e) {
		if (e == "") {
			return;
		}
		let t = Et.w.Init(Tt.kV);
		t.Body().set_appid(this.props.appid);
		t.Body().set_status_text(e);
		await Tt.xt.PostStatusToFriends(It.Vw.CMInterface.GetServiceTransport(), t);
		C.yX.FetchLatestActivity(this.props.appid, true);
	}
	ShowMoreContent() {
		const e = C.yX.GetAppActivity(this.props.appid);
		const t = e ? e.appActivityByDay : [];
		if (this.props.nDaysToDisplay < t.length) {
			this.props.setDaysToDisplay(this.props.nDaysToDisplay + 1);
		}
	}
	render() {
		const { appid: e, showTextBox: t } = this.props;
		const r = _.tw.GetAppOverviewByAppID(this.props.appid);
		const n =
			r && r.BIsApplicationOrTool()
				? (0, U.we)("#AppActivity_StatusUpdate_Software_Post")
				: (0, U.we)("#AppActivity_StatusUpdate_Post");
		const a = (0, $.ID)(V.TS.LAUNCHER_TYPE);
		return i.createElement(
			vt.n,
			{
				className: Dt.ActivityFeedContainer,
				label: (0, U.we)("#AppDetails_SectionTitle_Activity"),
				showRule: true,
			},
			i.createElement(
				vt.n.Body,
				{
					className: Dt.InnerContainer,
				},
				t &&
					!a &&
					i.createElement(Mt.K, {
						className: (0, x.A)(Dt.AddToFeed, Dt.PostTextEntry),
						OnPostClicked: this.OnPostStatusClicked,
						placeholder: n,
					}),
				i.createElement(cr, {
					appid: e,
					nDaysToDisplay: this.props.nDaysToDisplay,
					ShowMoreContent: this.ShowMoreContent,
				}),
			),
		);
	}
};
(0, n.Cg)([s.oI], lr.prototype, "OnPostStatusClicked", null);
(0, n.Cg)([s.oI], lr.prototype, "ShowMoreContent", null);
lr = (0, n.Cg)([a.PA], lr);
const cr = (0, a.PA)(function (e) {
	const { appid: t, nDaysToDisplay: r, ShowMoreContent: n } = e;
	const a = i.useRef(undefined);
	let { data: s } = zt(t);
	const o = h.OQ.Get().hasSteamConnection;
	(0, i.useEffect)(() => {
		if (o) {
			window.setTimeout(() => C.yX.FetchLatestActivity(t), 500);
		}
	}, [t, o]);
	const l = C.yX.GetAppActivity(t);
	const c = l?.appActivityByDay;
	const m = i.useMemo(() => c?.slice(0, r) || [], [c, r]);
	if (l) {
		if (m.length == 0) {
			return i.createElement(
				_M.Z,
				{
					className: Dt.NoActivity,
					focusable: true,
					onOKActionDescription: null,
				},
				i.createElement("div", null, (0, U.we)("#AppActivity_NoActivity")),
			);
		} else {
			return i.createElement(
				i.Fragment,
				null,
				i.createElement(Ar, {
					appActivity: l,
				}),
				i.createElement(dr, {
					navRef: a,
					rgDays: m,
					nMaxItemsToDisplayInLastDay: 10,
					rollup: t == 0,
					featuredEvent: s,
				}),
				r < c.length &&
					i.createElement(ue.J, {
						key: r,
						trigger: "repeated",
						onVisibilityChange: n,
						rootMargin: "0px 0px 400px 0px",
					}),
				i.createElement(mr, {
					appid: t,
					navRefActivityFeed: a,
					bMaybeHistoryAvailable: !l.m_bNoMoreHistoryAvailable,
					bLimitedToDaysToDisplay: m.length == r,
				}),
			);
		}
	} else {
		return i.createElement("div", {
			className: Dt.Loading,
		});
	}
});
function mr(e) {
	const {
		appid: t,
		navRefActivityFeed: r,
		bMaybeHistoryAvailable: n,
		bLimitedToDaysToDisplay: a,
	} = e;
	const [s, o] = i.useState(false);
	const l = i.useCallback(async () => {
		o(true);
		await C.yX.FetchActivityHistory(t, 20);
		r.current?.TakeFocus();
		o(false);
	}, [t, r]);
	if (n && a) {
		return i.createElement(
			D.$n,
			{
				className: Dt.FetchMoreContainer,
				tabIndex: 0,
				onClick: l,
				disabled: s,
			},
			(0, U.we)("#AppActivity_FetchMore"),
		);
	} else if (n) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: Dt.EndofFeed,
			},
			i.createElement("div", {
				className: Dt.EndRule,
			}),
			i.createElement(
				"div",
				{
					className: Dt.EndText,
				},
				(0, U.we)("#AppActivity_EndofFeed"),
			),
			i.createElement("div", {
				className: Dt.EndRule,
			}),
		);
	}
}
export function M(e) {
	let { appid: t } = e;
	let { data: r } = zt(t);
	let n = Jt(t);
	if (r || n.rgFeaturedDLC.length != 0) {
		return i.createElement(
			vt.n,
			{
				className: (0, x.A)(Dt.ActivityFeedContainer, Dt.Rollup),
				showRule: true,
			},
			i.createElement(
				vt.n.Body,
				{
					className: Dt.InnerContainer,
				},
				r &&
					i.createElement(nt, {
						event: r,
					}),
				n.rgFeaturedDLC.length > 0 &&
					i.createElement(er, {
						appid: t,
						rollup: n,
					}),
			),
		);
	} else {
		return null;
	}
}
const dr = (e) => {
	const {
		rgDays: t,
		nMaxItemsToDisplayInLastDay: r,
		rollup: n,
		navRef: a,
		featuredEvent: s,
	} = e;
	let o = s ? s.announcementGID : null;
	return i.createElement(
		_M.Z,
		{
			navRef: a,
		},
		t.map((e, a) =>
			i.createElement(Xe, {
				key: e.GetLatestEventTime(),
				day: e,
				nMaxItemsToDisplay: a == t.length - 1 ? r : 0,
				rollup: n,
				skipPartnerEvent: o,
			}),
		),
	);
};
const Ar = (0, a.PA)(function (e) {
	const { appActivity: t } = e;
	const r =
		t.lastAddedEventType != c._Q.PostedAnnouncement
			? t.lastAddedPartnerEvent
			: null;
	const n = (0, A.br)();
	if (!r) {
		return null;
	}
	const a = async () => {
		const e = await r.GetEvent();
		if (e) {
			n.App(e.appid, {
				gidPartnerEvent: e.GID,
			});
		}
	};
	return i.createElement(
		_M.Z,
		{
			focusable: true,
			onActivate: a,
			className: Dt.ViewLastNews,
			onClick: a,
		},
		i.createElement("span", null, (0, U.we)("#AppActivity_ViewLatestNews")),
	);
});
