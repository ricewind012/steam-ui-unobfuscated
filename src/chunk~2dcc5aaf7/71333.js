var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require("./1965.js");
var l = require("./93050.js");
var c = require("./82325.js");
var m = require("./63032.js");
var u = require("./27325.js");
var d = require("./31993.js");
var A = require("./87935.js");
var p = require(/*webcrack:missing*/ "./44846.js");
var g = require(/*webcrack:missing*/ "./88750.js");
var _h = require("./17815.js");
var C = require("./56726.js");
var _ = require("./13869.js");
var f = require(/*webcrack:missing*/ "./50376.js");
var b = require(/*webcrack:missing*/ "./26853.js");
var y = require(/*webcrack:missing*/ "./49455.js");
var S = require(/*webcrack:missing*/ "./90765.js");
var w = require(/*webcrack:missing*/ "./54644.js");
var B = require(/*webcrack:missing*/ "./46108.js");
var v = require("./80254.js");
var I = require(/*webcrack:missing*/ "./52451.js");
var E = require(/*webcrack:missing*/ "./72476.js");
var M = require("./97561.js");
var T = require(/*webcrack:missing*/ "./69164.js");
var R = require("./69196.js");
var k = R;
var D = require("./83779.js");
var N = D;
const F = i.lazy(() =>
	require
		.e(9129)
		.then(require.bind(require, 3909))
		.then((e) => ({
			default: e.AwardIconList,
		})),
);
export let h = class extends i.Component {
	static contextType = E.QO;
	storedSettings = undefined;
	unAppID = undefined;
	constructor(e) {
		super(e);
		(0, a.Gn)(this);
		this.storedSettings = null;
		this.unAppID = e.details.unAppID;
	}
	componentDidMount() {
		this.FetchRoamingStorageState();
		d.x.GetReview(this.props.details.unAppID, true);
	}
	get ReviewDetails() {
		return d.x.GetStoredReview(this.unAppID);
	}
	async componentDidUpdate(e) {
		if (this.props.details.unAppID != e.details.unAppID) {
			this.unAppID = this.props.details.unAppID;
			await this.FetchRoamingStorageState();
		}
	}
	async FetchRoamingStorageState() {
		const e = {
			rtDismissedReviseReviewReminder: 0,
		};
		this.storedSettings = null;
		try {
			const e = await new m.O().GetObject(this.GetStorageKey);
			console.debug("got roaming settings: %s", JSON.stringify(e));
			this.storedSettings = e;
		} catch (t) {
			if (t.message && t.message == "Not found") {
				this.storedSettings = e;
			} else {
				console.error("Could not fetch review roaming storage:", t);
			}
		}
	}
	get GetStorageKey() {
		return "library.review." + this.props.overview.appid;
	}
	NavigateToReviewPage(e) {
		(0, w.uX)(e).location.href = A.B7.BuildSteamURL(
			"RecommendGame",
			this.props.details.unAppID,
		);
	}
	NavigateToCommunityRecommendations(e) {
		(0, w.uX)(e).location.href = A.B7.BuildSteamURL("CommunityRecommendations");
	}
	async IgnoreStaleReview() {
		this.storedSettings.rtDismissedReviseReviewReminder = Date.now() / 1000;
		await this.StoreSettings();
	}
	async UnignoreStaleReview() {
		this.storedSettings.rtDismissedReviseReviewReminder = 0;
		await this.StoreSettings();
	}
	async StoreSettings() {
		try {
			await new m.O().StoreObject(this.GetStorageKey, this.storedSettings);
		} catch (e) {
			console.error("could not store roaming storage:", e);
		}
	}
	RenderContextMenu() {
		(0, y.w)(
			this.storedSettings !== null,
			"Illegal state, stored settings must be nonnull",
		);
		if (!this.ReviewDetails) {
			return null;
		}
		const e = this.BRevisableReview;
		i.createElement(
			g.kt,
			{
				onSelected: this.IgnoreStaleReview,
			},
			(0, B.we)("#AppDetails_Review_Ignore_Stale_Reviews"),
		);
		const t = i.createElement(
			g.kt,
			{
				onSelected: this.UnignoreStaleReview,
			},
			(0, B.we)("#AppDetails_Review_Unignore_Stale_Reviews"),
		);
		return i.createElement(g.tz, null, null, e ? null : t);
	}
	BReviewedBeforePlayingMuch() {
		return (
			!!this.ReviewDetails.playtime_at_review &&
			this.ReviewDetails.playtime_at_review < u.C6(1, u.Nf.Hours, u.Nf.Minutes)
		);
	}
	get BGaveItASolidEffort() {
		return (
			this.props.details.nPlaytimeForever > u.C6(3, u.Nf.Hours, u.Nf.Minutes)
		);
	}
	get BPlayedTooLittleToPromptReview() {
		return this.props.details.nPlaytimeForever < 10;
	}
	get BRevisableReview() {
		return (
			!!this.ReviewDetails &&
			!!this.ReviewDetails.playtime_at_review &&
			this.BReviewedBeforePlayingMuch() &&
			this.BGaveItASolidEffort &&
			!this.storedSettings.rtDismissedReviseReviewReminder
		);
	}
	ShowWriteRevewDialog(e, t) {
		switch (t) {
			case M._g.Up:
				SteamClient.Stats.RecordActivationEvent(
					"AppDetailsReviewSection",
					"PositiveClicked",
				);
				break;
			case M._g.Down:
				SteamClient.Stats.RecordActivationEvent(
					"AppDetailsReviewSection",
					"NegativeClicked",
				);
				break;
			case M._g.Neutral:
				SteamClient.Stats.RecordActivationEvent(
					"AppDetailsReviewSection",
					"NeutralClicked",
				);
		}
		const r = (0, B.we)("#WriteReview_Dialog_Title");
		(0, _.mK)(
			i.createElement(M.jB, {
				ownerWindow: (0, w.uX)(e),
				steamID: this.props.details.strOwnerSteamID,
				appid: this.props.overview.appid,
				nPlaytime: this.props.overview.minutes_playtime_forever,
				eReviewVote: t,
				onSuccess: (e) => {
					SteamClient.Stats.RecordActivationEvent(
						"AppDetailsReviewSection",
						e ? "PositiveReviewPosted" : "NegativeReviewPosted",
					);
					d.x.GetReview(this.props.overview.appid, true);
				},
				closeModal: this.OnCancelPostReview,
			}),
			(0, w.uX)(e),
			{
				strTitle: r,
			},
		);
	}
	ShowEditRevewDialog(e) {
		SteamClient.Stats.RecordActivationEvent(
			"AppDetailsReviewSection",
			"EditClicked",
		);
		const t = (0, B.we)("#WriteReview_Dialog_Title");
		(0, _.mK)(
			i.createElement(M.jB, {
				ownerWindow: (0, w.uX)(e),
				steamID: this.props.details.strOwnerSteamID,
				appid: this.props.overview.appid,
				nPlaytime: this.props.overview.minutes_playtime_forever,
				prevReview: this.ReviewDetails,
				eReviewVote: this.ReviewDetails.voted_up ? M._g.Up : M._g.Down,
				onSuccess: (e) => {
					SteamClient.Stats.RecordActivationEvent(
						"AppDetailsReviewSection",
						e ? "PositiveReviewPosted" : "NegativeReviewPosted",
					);
					d.x.GetReview(this.props.overview.appid, true);
				},
				closeModal: this.OnCancelPostReview,
			}),
			(0, w.uX)(e),
			{
				strTitle: t,
			},
		);
	}
	OnCancelPostReview(e) {
		if (!e) {
			SteamClient.Stats.RecordActivationEvent(
				"AppDetailsReviewSection",
				"ReviewCanceled",
			);
		}
	}
	render() {
		if (this.props.overview.app_type & 8) {
			return null;
		}
		if (this.BPlayedTooLittleToPromptReview && !this.ReviewDetails) {
			return null;
		}
		if (this.storedSettings === null) {
			console.debug(
				"skipped review render, waiting for roaming storage to initialize",
			);
			return i.createElement(
				"div",
				{
					className: k.section,
				},
				i.createElement(l.w, {
					label: (0, B.we)("#AppDetails_Review_YourReview"),
				}),
				i.createElement(b.t, {
					size: "xlarge",
					position: "center",
				}),
			);
		}
		let e;
		let t;
		let r;
		let n = this.props.overview.BIsApplicationOrTool();
		let a = (0, v.l)(this.props.details.nPlaytimeForever);
		let s = n
			? (0, B.we)("#AppDetails_Review_PlayedForTime_Software", a)
			: (0, B.we)("#AppDetails_Review_PlayedForTime", a);
		if (this.ReviewDetails) {
			if (this.BRevisableReview) {
				let e = (0, v.l)(
					this.props.details.nPlaytimeForever -
						this.ReviewDetails.playtime_at_review,
				);
				let t = n
					? (0, B.we)("#AppDetails_Review_AdditionalPlaytime_Software", e)
					: (0, B.we)("#AppDetails_Review_AdditionalPlaytime", e);
				r = i.createElement(
					"div",
					{
						className: N.ReviewReminderBox,
					},
					i.createElement(
						"div",
						{
							className: N.ReviewReminderBoxContent,
						},
						i.createElement(
							"div",
							{
								className: N.AdditionalPlaytimeReminder,
							},
							t,
						),
						i.createElement(
							"div",
							{
								className: N.ChangedYourMind,
							},
							(0, B.we)("#AppDetails_Review_ChangedYourMind"),
						),
						i.createElement(
							C.eJ,
							{
								className: N.EditMyReview,
								onClick: this.ShowEditRevewDialog,
							},
							(0, B.we)("#AppDetails_Review_ViewOrEdit"),
						),
					),
					i.createElement(f.X, {
						className: N.ExitButton,
						onClick: this.IgnoreStaleReview,
					}),
				);
			} else {
				r = null;
			}
			let a = (0, v.l)(this.ReviewDetails.playtime_at_review);
			let s = n
				? (0, B.we)("#AppDetails_Review_PlaytimeAtReview_Software", a)
				: (0, B.we)("#AppDetails_Review_PlaytimeAtReview", a);
			t = i.createElement(
				o.n.Highlight,
				{
					className: N.ReviewMetadata,
					onClick: this.ShowEditRevewDialog,
				},
				this.ReviewDetails.voted_up
					? i.createElement(f.twC, {
							className: (0, S.A)(
								N.ReviewIcon,
								N.ReviewIconThumbsUp,
								N.ReviewIconThumbsUpColor,
							),
						})
					: i.createElement(
							"div",
							{
								className: (0, S.A)(N.ReviewIcon, N.ReviewIconThumbsDownBox),
							},
							i.createElement(f.twC, {
								className: (0, S.A)(
									N.ReviewIconThumbsDown,
									N.ThumbsDown,
									N.ReviewIconThumbsDownColor,
								),
							}),
						),
				i.createElement(
					"div",
					{
						className: N.ReviewDescription,
					},
					i.createElement(
						"div",
						{
							className: N.ReviewDescriptionRecommended,
						},
						this.ReviewDetails.voted_up
							? (0, B.we)("#AppDetails_Review_Recommended")
							: (0, B.we)("#AppDetails_Review_NotRecommended"),
					),
					i.createElement(
						"div",
						{
							className: N.PlayedForTime,
						},
						s,
					),
				),
			);
			let l = null;
			if (this.ReviewDetails.reactions.length) {
				l = i.createElement(F, {
					reactions: this.ReviewDetails.reactions,
				});
			}
			const m = !(0, p.ID)(E.TS.LAUNCHER_TYPE);
			const u = new c.T({
				text: this.ReviewDetails.review,
			});
			e = i.createElement(
				"div",
				{
					className: N.ReviewPresentGroup,
				},
				r,
				i.createElement(
					_h.S,
					{
						pxOverflowHeight: 200,
						classNameWhenHidden: N.ReviewText,
						classNameWhenExpanded: (0, S.A)(N.ReviewText, N.ReviewTextExpanded),
					},
					i.createElement(
						"div",
						{
							className: N.ReviewTextContainer,
						},
						" ",
						u.render(),
					),
				),
				i.createElement(
					"div",
					null,
					i.createElement(
						"div",
						{
							className: N.CommentsGroup,
							onClick: this.NavigateToReviewPage,
						},
						i.createElement(
							"div",
							{
								className: N.CommentsContainer,
							},
							i.createElement(f.bfp, {
								className: N.UpVotesIcon,
							}),
							i.createElement(
								"div",
								{
									className: N.CommentsLabel,
								},
								(0, B.we)("#AppDetails_Review_UpVotes"),
							),
							i.createElement(
								"div",
								{
									className: N.CommentCount,
								},
								this.ReviewDetails.votes_up,
							),
						),
						!p.ID(E.TS.LAUNCHER_TYPE) &&
							i.createElement(
								"div",
								{
									className: N.CommentsContainer,
								},
								i.createElement(f._h6, {
									className: N.CommentIcon,
								}),
								i.createElement(
									"div",
									{
										className: N.CommentsLabel,
									},
									(0, B.we)("#AppDetails_Review_Comments"),
								),
								i.createElement(
									"div",
									{
										className: N.CommentCount,
									},
									this.ReviewDetails.comment_count,
								),
							),
					),
				),
				l,
				i.createElement(
					"div",
					{
						className: N.ButtonsGroup,
					},
					!this.context?.IN_GAMEPADUI &&
						i.createElement(
							C.Po,
							{
								onClick: this.ShowEditRevewDialog,
							},
							(0, B.we)("#AppDetails_Review_ViewOrEdit"),
						),
					m &&
						i.createElement(
							C.TD,
							{
								onClick: this.NavigateToCommunityRecommendations,
							},
							(0, B.we)("#AppDetails_Review_ViewAll"),
						),
				),
			);
		} else {
			t = null;
			const r = i.createElement(
				C.TD,
				{
					onClick: this.NavigateToCommunityRecommendations,
				},
				(0, B.we)("#AppDetails_Review_ViewAll"),
			);
			e = i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					{
						className: N.WriteReview,
					},
					i.createElement(
						"div",
						{
							className: N.PlayedForTime,
						},
						s,
					),
					!this.context?.IN_GAMEPADUI &&
						i.createElement(
							"div",
							{
								className: (0, S.A)(N.VoteUpDownContainer),
							},
							i.createElement(
								C.Xs,
								{
									onClick: (e) => this.ShowWriteRevewDialog(e, M._g.Neutral),
								},
								(0, B.we)(
									"#AppDetails_Review_WriteReview",
									this.props.overview.display_name,
								),
							),
						),
				),
				this.context?.IN_GAMEPADUI &&
					i.createElement(
						T.Z,
						{
							"flow-children": "row",
							style: {
								display: "flex",
								flexDirection: "row",
								gap: "8px",
							},
						},
						false,
						r,
					),
				!this.context?.IN_GAMEPADUI && r,
			);
		}
		return i.createElement(
			o.n,
			{
				feature: 3,
				className: N.Container,
				label: (0, B.we)("#AppDetails_Review_YourReview"),
				highlight: t,
				rightColumnSection: true,
			},
			i.createElement(o.n.Body, null, e),
		);
	}
};
(0, n.Cg)([a.sH], h.prototype, "storedSettings", undefined);
(0, n.Cg)([a.sH], h.prototype, "unAppID", undefined);
(0, n.Cg)([a.EW], h.prototype, "ReviewDetails", null);
(0, n.Cg)([I.oI], h.prototype, "FetchRoamingStorageState", null);
(0, n.Cg)([I.oI], h.prototype, "NavigateToReviewPage", null);
(0, n.Cg)([I.oI], h.prototype, "NavigateToCommunityRecommendations", null);
(0, n.Cg)([I.oI], h.prototype, "IgnoreStaleReview", null);
(0, n.Cg)([I.oI], h.prototype, "UnignoreStaleReview", null);
(0, n.Cg)([I.oI], h.prototype, "StoreSettings", null);
(0, n.Cg)([I.oI], h.prototype, "RenderContextMenu", null);
(0, n.Cg)([I.oI], h.prototype, "ShowWriteRevewDialog", null);
(0, n.Cg)([I.oI], h.prototype, "ShowEditRevewDialog", null);
(0, n.Cg)([I.oI], h.prototype, "OnCancelPostReview", null);
h = (0, n.Cg)([s.PA], h);
