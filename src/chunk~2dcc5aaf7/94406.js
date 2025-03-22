var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require("./3963.js");
var m = require(/*webcrack:missing*/ "./8573.js");
var u = require("./20414.js");
var d = require("./48289.js");
var A = require("./10606.js");
var p = require(/*webcrack:missing*/ "./46108.js");
var g = require("./36464.js");
var h = require("./68608.js");
var C = require("./12975.js");
var _ = require("./34792.js");
var f = require("./13672.js");
var b = require("./13869.js");
var y = require("./87935.js");
var S = require("./70239.js");
var w = require("./97590.js");
var B = w;
var v = require(/*webcrack:missing*/ "./44846.js");
var I = require(/*webcrack:missing*/ "./72476.js");
var E = require("./46217.js");
var M = require(/*webcrack:missing*/ "./11010.js");
var T = require(/*webcrack:missing*/ "./69164.js");
var R = require(/*webcrack:missing*/ "./54644.js");
var k = require(/*webcrack:missing*/ "./11131.js");
export let Xn = class extends i.Component {
	static contextType = k.gs;
	constructor(e) {
		super(e);
		this.state = {
			bPlayParticle: false,
		};
	}
	OnRateClicked() {
		if (this.props.upvoted_by_user) {
			this.props.fnOnRateDownClicked();
			this.setState({
				bPlayParticle: false,
			});
		} else {
			this.props.fnOnRateUpClicked();
			this.setState({
				bPlayParticle: true,
			});
		}
	}
	render() {
		const {
			upvotes: e,
			upvoted_by_user: t,
			upvoters: r,
			fnOnRateUpClicked: n,
			fnOnRateDownClicked: a,
			fnOnAwardClicked: s,
			nReactionCount: o,
			comment_count: c,
			fnMaximizeParent: m,
			bIsVisible: u,
		} = this.props;
		let A;
		let C = e;
		let f = r
			.map((e) => d.O$.GetFriendState(e))
			.map((e) =>
				i.createElement(h.A, {
					key: "friend" + e.persona.m_steamid.ConvertTo64BitString(),
					className: B.ActorName,
					persona: e.persona,
					strNickname: e.nickname,
					bParenthesizeNicknames:
						_.rV.communityPreferences.bParenthesizeNicknames,
					onContextMenu: (t) => {
						(0, g.Cc)(t, e, this.context);
					},
				}),
			);
		if (e == 1) {
			if (t) {
				A = (0, p.we)("#AppActivity_RatingDetails_User");
			} else if (f.length > 0) {
				A = (0, p.PP)("#AppActivity_RatingDetails_1Other", f[0]);
			}
		} else if (e > 1) {
			if (f.length != 0) {
				A = t
					? e == 2
						? (0, p.PP)("#AppActivity_RatingDetails_User_1Other", e, f[0])
						: (0, p.PP)(
								"#AppActivity_RatingDetails_User_2Others",
								e,
								f[0],
								f[1],
							)
					: (0, p.PP)("#AppActivity_RatingDetails_2Others", e, f[0], f[1]);
			}
		}
		return i.createElement(
			"div",
			{
				className: (0, l.A)(B.RatingBar, u && B.IsVisible),
			},
			i.createElement(
				"div",
				{
					className: B.RatingDetails,
				},
				A,
			),
			o != null &&
				s &&
				i.createElement(
					"div",
					{
						className: (0, l.A)(B.Reactions, B.CanClick),
						onClick: s,
					},
					i.createElement(
						"div",
						{
							className: B.ReactionCount,
						},
						o,
					),
					i.createElement(
						"div",
						{
							className: B.ReactionIcon,
						},
						i.createElement(E.wA, {
							className: B.ReactionSvg,
						}),
					),
				),
			i.createElement("div", {
				className: B.ButtonSpacer,
			}),
			!v.ID(I.TS.LAUNCHER_TYPE) &&
				i.createElement(N, {
					count: c,
					onClick: m,
				}),
			i.createElement("div", {
				className: B.ButtonSpacer,
			}),
			i.createElement(
				"div",
				{
					className: (0, l.A)(B.LikeButton, !t && B.CanClick),
					onClick: this.OnRateClicked,
				},
				i.createElement(
					"div",
					{
						className: B.LikeCount,
					},
					Number(C).toLocaleString(),
				),
				i.createElement("div", {
					className: (0, l.A)(
						B.BackgroundEffects,
						this.state.bPlayParticle && B.UserRated,
					),
				}),
				i.createElement(
					"div",
					{
						className: B.LikeIcon,
					},
					i.createElement(E.tw, {
						className: (0, l.A)(B.RatingIcon, t && B.UserRated),
					}),
				),
			),
		);
	}
};
function N(e) {
	const { count: t, onClick: r } = e;
	return i.createElement(
		"div",
		{
			className: (0, l.A)(B.CommentButton, r && B.CanClick),
			onClick: r,
		},
		i.createElement(
			"div",
			{
				className: B.CommentCount,
			},
			Number(t).toLocaleString(),
		),
		i.createElement(
			"div",
			{
				className: B.CommentIcon,
			},
			i.createElement(E._h, {
				className: (0, l.A)(B.RatingIcon),
			}),
		),
	);
}
(0, n.Cg)([o.oI], Xn.prototype, "OnRateClicked", null);
Xn = (0, n.Cg)([s.PA], Xn);
let F = class extends i.Component {
	static contextType = k.gs;
	constructor(e) {
		super(e);
		this.state = {
			bPlayParticle: false,
		};
	}
	async OnDeleteComment() {
		this.props.commentThread.DeleteComment(this.props.comment);
	}
	async OnRateComment() {
		this.props.commentThread.RateCommentOrThread(
			!this.props.comment.upvoted_by_user,
			this.props.comment,
		);
		this.setState({
			bPlayParticle: !this.props.comment.upvoted_by_user,
		});
	}
	OnMaybeDeleteComment(e) {
		(0, b.pg)(
			i.createElement(A.o0, {
				strTitle: (0, p.we)("#AppActivity_ConfirmDeleteCommentTitle"),
				strDescription: (0, p.we)(
					"#AppActivity_ConfirmDeleteCommentTitle_Desc",
				),
				onOK: this.OnDeleteComment,
				onCancel: () => null,
			}),
			(0, R.uX)(e),
			{
				strTitle: (0, p.we)("#AppActivity_ConfirmDeleteCommentTitle"),
			},
		);
	}
	render() {
		const { comment: e, commentThread: t } = this.props;
		let r = d.O$.GetFriendState(new m.b(e.steamid));
		let n =
			(0, p.$z)(e.timestamp) +
			" @ " +
			(0, M.KC)(e.timestamp, {
				bForce24HourClock: _.rV.friendSettings.b24HourClock,
			});
		let s = e.steamid == c.Nb.CMInterface.steamid.ConvertTo64BitString();
		let o = e.upvotes > 0;
		let u = e.upvoted_by_user;
		return i.createElement(
			T.Z,
			{
				className: B.Comment,
				focusable: true,
			},
			i.createElement(g.fH, {
				className: B.CommentAvatar,
				friend: r,
				size: "Small",
				statusPosition: "right",
				onClick: (t) =>
					y.B7.NavigateToSteamURLInOwningWindow(t, "SteamIDPage", e.steamid),
			}),
			i.createElement(
				"div",
				{
					className: B.HeaderandBody,
				},
				i.createElement(
					"div",
					{
						className: B.CommentHeader,
					},
					i.createElement(
						"div",
						{
							className: B.CommenterandTime,
						},
						i.createElement(h.A, {
							className: B.ActorName,
							persona: r.persona,
							strNickname: r.nickname,
							bParenthesizeNicknames:
								_.rV.communityPreferences.bParenthesizeNicknames,
							onContextMenu: (e) => {
								(0, g.Cc)(e, r, this.context);
							},
							onClick: (t) =>
								y.B7.NavigateToSteamURLInOwningWindow(
									t,
									"SteamIDPage",
									e.steamid,
								),
						}),
						i.createElement(
							"div",
							{
								className: B.CommentTime,
							},
							n,
						),
					),
				),
				i.createElement(
					"div",
					{
						className: B.CommentBody,
					},
					i.createElement(
						"div",
						{
							className: B.CommentText,
						},
						c.Nb.FormatAndParseUserStatusBBCode(e.text),
						i.createElement(
							"div",
							{
								className: B.CommentControls,
							},
							i.createElement(
								"div",
								{
									className: B.CommentRatingButton,
									onClick: this.OnRateComment,
								},
								i.createElement(
									"div",
									{
										className: (0, l.A)(B.CommentRating, o && B.HasRating),
									},
									i.createElement("div", {
										className: (0, l.A)(
											B.BackgroundEffects,
											this.state.bPlayParticle && B.UserRated,
										),
									}),
									o && e.upvotes + " ",
									i.createElement(a.bfp, {
										className: (0, l.A)(B.ThumbsUpComment, u && B.UserRated),
									}),
								),
							),
							s &&
								i.createElement(
									"div",
									{
										className: B.DeleteButton,
										onClick: this.OnMaybeDeleteComment,
									},
									i.createElement(a._r0, {
										className: B.DeleteUserNews,
									}),
								),
						),
					),
				),
			),
		);
	}
};
(0, n.Cg)([o.oI], F.prototype, "OnDeleteComment", null);
(0, n.Cg)([o.oI], F.prototype, "OnRateComment", null);
(0, n.Cg)([o.oI], F.prototype, "OnMaybeDeleteComment", null);
F = (0, n.Cg)([s.PA], F);
export let _h = class extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			bShowPointsModal: false,
			bMinimized: e.bDefaultMinimized,
		};
	}
	OnRateUpCommentThreadClicked() {
		this.props.commentThread.RateCommentOrThread(true);
	}
	OnRateDownCommentThreadClicked() {
		this.props.commentThread.RateCommentOrThread(false);
	}
	async OnRateUpPublishedFileClicked() {
		S.B6.VoteOnPublishedFile(this.props.publishedfileid, u.bJ.Up);
	}
	async OnRateDownPublishedFileClicked() {
		S.B6.VoteOnPublishedFile(this.props.publishedfileid, u.bJ.Down);
	}
	OnMaximize() {
		this.setState({
			bMinimized: false,
		});
	}
	OnMinimize() {
		this.setState({
			bMinimized: true,
		});
	}
	ShowAwardModal() {
		this.setState({
			bShowPointsModal: true,
		});
	}
	HideAwardModal() {
		this.setState({
			bShowPointsModal: false,
		});
	}
	render() {
		const {
			commentThread: e,
			publishedfileid: t,
			bDefaultMinimized: r,
			bMaxHeight: n,
			bDontAutoMaximize: a,
			bIsPopup: s,
			bVisible: o,
		} = this.props;
		if (!e) {
			return null;
		}
		if (e.m_threadInfo == null) {
			return i.createElement(
				"div",
				{
					className: B.CommentThread,
				},
				i.createElement("div", {
					className: B.ThreadLoading,
				}),
			);
		}
		let c;
		let m;
		let u;
		let d;
		let A = e.m_threadInfo.total_count > 0;
		let p = e ? e.m_threadInfo.upvotes : 0;
		let g = !!e && e.m_threadInfo.user_upvoted;
		let h = e ? e.GetUpVoters() : [];
		let C = this.OnRateUpCommentThreadClicked;
		let _ = this.OnRateDownCommentThreadClicked;
		let b = e ? e.m_threadInfo.total_count : 0;
		let y = o || g;
		let w = S.B6.GetPublishedFile(t);
		if (w) {
			if (w.file) {
				p = w.file.vote_data ? w.file.vote_data.votes_up : 0;
				c = w.file.reactions?.reduce((e, t) => e + t.count, 0);
				u = w.file.file_type;
			}
			if (w.user_vote_summary) {
				g = w.user_vote_summary.vote_for;
			}
			h = [];
			C = this.OnRateUpPublishedFileClicked;
			_ = this.OnRateDownPublishedFileClicked;
			m = this.props.publishedfileid;
			d = 2;
		} else if (this.props.recommendation) {
			c = this.props.recommendation.reactions?.reduce((e, t) => e + t.count, 0);
			m = this.props.recommendation.recommendationid;
			d = 1;
		}
		const v = this.state.bMinimized && (!A || a);
		return i.createElement(
			"div",
			{
				className: (0, l.A)(
					B.CommentThread,
					B.Shown,
					!v &&
						this.props.commentThread.m_rgComments.length > 0 &&
						B.HasComments,
				),
			},
			i.createElement(
				"div",
				{
					className: (0, l.A)(
						v ? B.ActivityCommentThreadMinimized : B.ActivityCommentThread,
						s ? B.IsPopup : null,
						v && y && B.IsVisible,
					),
				},
				i.createElement(
					"div",
					{
						className: (0, l.A)(B.RatingContainer, A && B.HasComments),
					},
					i.createElement(Xn, {
						upvotes: p,
						upvoted_by_user: g,
						upvoters: h,
						fnOnRateUpClicked: C,
						fnOnRateDownClicked: _,
						comment_count: b,
						fnMaximizeParent: this.props.bIsPopup ? null : this.OnMaximize,
						nReactionCount: c,
						fnOnAwardClicked: this.ShowAwardModal,
						bIsVisible: y,
					}),
				),
				!v &&
					i.createElement(O, {
						commentThread: e,
						bMaxHeight: n,
					}),
			),
			this.state.bShowPointsModal &&
				i.createElement(f.EX, {
					bShowModal: this.state.bShowPointsModal,
					targetType: d,
					targetid: m,
					ugcType: u,
					onDismiss: this.HideAwardModal,
				}),
		);
	}
};
(0, n.Cg)([o.oI], _h.prototype, "OnRateUpCommentThreadClicked", null);
(0, n.Cg)([o.oI], _h.prototype, "OnRateDownCommentThreadClicked", null);
(0, n.Cg)([o.oI], _h.prototype, "OnRateUpPublishedFileClicked", null);
(0, n.Cg)([o.oI], _h.prototype, "OnRateDownPublishedFileClicked", null);
(0, n.Cg)([o.oI], _h.prototype, "OnMaximize", null);
(0, n.Cg)([o.oI], _h.prototype, "OnMinimize", null);
(0, n.Cg)([o.oI], _h.prototype, "ShowAwardModal", null);
(0, n.Cg)([o.oI], _h.prototype, "HideAwardModal", null);
_h = (0, n.Cg)([s.PA], _h);
const O = (0, s.PA)(function (e) {
	const { commentThread: t, bMaxHeight: r } = e;
	const n = (0, I.Qn)();
	let a = t.m_threadInfo.total_count > 0;
	let s = t.m_threadInfo.total_count > t.m_rgComments.length;
	let o = t.m_threadInfo.total_count - t.m_rgComments.length;
	const c = i.useCallback(() => {
		t.FetchPastComments(10);
	}, [t]);
	const m = i.useCallback(
		(e) => {
			t.PostCommentToThread(e);
		},
		[t],
	);
	return i.createElement(
		i.Fragment,
		null,
		s &&
			i.createElement(
				"div",
				{
					className: B.MakeCommentsVisible,
					onClick: c,
				},
				(0, p.we)("#AppActivity_MakeCommentsVisible", o),
			),
		a &&
			i.createElement(
				"div",
				{
					className: (0, l.A)(B.CommentsTransitionGroup, r && B.NeedsMaxHeight),
				},
				t.m_rgComments.map((e) =>
					i.createElement(F, {
						key: "" + e.gidcomment,
						comment: e,
						commentThread: t,
					}),
				),
			),
		!n &&
			i.createElement(C.K, {
				className: B.AddReply,
				OnPostClicked: m,
				placeholder: (0, p.we)("#AppActivity_Comment_Reply"),
			}),
	);
});
