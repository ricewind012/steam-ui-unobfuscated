import {
	Localize,
	LocalizeReact,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./50376.js";
import s, { PA } from "./41230.js";
import o from "./52451.js";
import { A as A_1 } from "./90765.js";
import c from "./3963.js";
import m from "./8573.js";
import u from "./20414.js";
import d from "./48289.js";
import A from "./10606.js";
import g, { Cc } from "./36464.js";
import h from "./68608.js";
import C from "./12975.js";
import _ from "./34792.js";
import f from "./13672.js";
import b, { pg } from "./13869.js";
import y from "./87935.js";
import S from "./70239.js";
import w from "./97590.js";
import v from "./44846.js";
import I, { Qn } from "./72476.js";
import E from "./46217.js";
import T from "./69164.js";
import k from "./11131.js";
const B = w;
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
			upvotes,
			upvoted_by_user,
			upvoters,
			fnOnRateUpClicked,
			fnOnRateDownClicked,
			fnOnAwardClicked,
			nReactionCount,
			comment_count,
			fnMaximizeParent,
			bIsVisible,
		} = this.props;
		let A;
		let C = upvotes;
		let f = upvoters
			.map((e) => d.O$.GetFriendState(e))
			.map((e) => (
				<h.A
					key={`friend${e.persona.m_steamid.ConvertTo64BitString()}`}
					className={B.ActorName}
					persona={e.persona}
					strNickname={e.nickname}
					bParenthesizeNicknames={
						_.rV.communityPreferences.bParenthesizeNicknames
					}
					onContextMenu={(t) => {
						Cc(t, e, this.context);
					}}
				/>
			));
		if (upvotes == 1) {
			if (upvoted_by_user) {
				A = (0, Localize)("#AppActivity_RatingDetails_User");
			} else if (f.length > 0) {
				A = LocalizeReact("#AppActivity_RatingDetails_1Other", f[0]);
			}
		} else if (upvotes > 1) {
			if (f.length != 0) {
				A = upvoted_by_user
					? upvotes == 2
						? LocalizeReact(
								"#AppActivity_RatingDetails_User_1Other",
								upvotes,
								f[0],
							)
						: LocalizeReact(
								"#AppActivity_RatingDetails_User_2Others",
								upvotes,
								f[0],
								f[1],
							)
					: LocalizeReact(
							"#AppActivity_RatingDetails_2Others",
							upvotes,
							f[0],
							f[1],
						);
			}
		}
		return (
			<div className={A_1(B.RatingBar, bIsVisible && B.IsVisible)}>
				<div className={B.RatingDetails}>{A}</div>
				{nReactionCount != null && fnOnAwardClicked && (
					<div
						className={A_1(B.Reactions, B.CanClick)}
						onClick={fnOnAwardClicked}
					>
						<div className={B.ReactionCount}>{nReactionCount}</div>
						<div className={B.ReactionIcon}>
							<E.wA className={B.ReactionSvg} />
						</div>
					</div>
				)}
				<div className={B.ButtonSpacer} />
				{!v.ID(I.TS.LAUNCHER_TYPE) && (
					<N count={comment_count} onClick={fnMaximizeParent} />
				)}
				<div className={B.ButtonSpacer} />
				<div
					className={A_1(B.LikeButton, !upvoted_by_user && B.CanClick)}
					onClick={this.OnRateClicked}
				>
					<div className={B.LikeCount}>{Number(C).toLocaleString()}</div>
					<div
						className={A_1(
							B.BackgroundEffects,
							this.state.bPlayParticle && B.UserRated,
						)}
					/>
					<div className={B.LikeIcon}>
						<E.tw
							className={A_1(B.RatingIcon, upvoted_by_user && B.UserRated)}
						/>
					</div>
				</div>
			</div>
		);
	}
};
function N(e) {
	const { count, onClick } = e;
	return (
		<div
			className={A_1(B.CommentButton, onClick && B.CanClick)}
			onClick={onClick}
		>
			<div className={B.CommentCount}>{Number(count).toLocaleString()}</div>
			<div className={B.CommentIcon}>
				<E._h className={A_1(B.RatingIcon)} />
			</div>
		</div>
	);
}
Cg([o.oI], Xn.prototype, "OnRateClicked", null);
Xn = Cg([s.PA], Xn);
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
		pg(
			<A.o0
				strTitle={(0, Localize)("#AppActivity_ConfirmDeleteCommentTitle")}
				strDescription={(0, Localize)(
					"#AppActivity_ConfirmDeleteCommentTitle_Desc",
				)}
				onOK={this.OnDeleteComment}
				onCancel={() => null}
			/>,
			GetOwningWindowForEvent(e),
			{
				strTitle: (0, Localize)("#AppActivity_ConfirmDeleteCommentTitle"),
			},
		);
	}
	render() {
		const { comment, commentThread } = this.props;
		let r = d.O$.GetFriendState(new m.b(comment.steamid));
		let n = `${LocalizeRtime32ToShortDate(
			comment.timestamp,
		)} @ ${LocalizeRTimeToHourAndMinutes(comment.timestamp, {
			bForce24HourClock: _.rV.friendSettings.b24HourClock,
		})}`;
		let s = comment.steamid == c.Nb.CMInterface.steamid.ConvertTo64BitString();
		let o = comment.upvotes > 0;
		let e_upvoted_by_user = comment.upvoted_by_user;
		return (
			<T.Z className={B.Comment} focusable>
				<g.fH
					className={B.CommentAvatar}
					friend={r}
					size="Small"
					statusPosition="right"
					onClick={(t) =>
						y.B7.NavigateToSteamURLInOwningWindow(
							t,
							"SteamIDPage",
							comment.steamid,
						)
					}
				/>
				<div className={B.HeaderandBody}>
					<div className={B.CommentHeader}>
						<div className={B.CommenterandTime}>
							<h.A
								className={B.ActorName}
								persona={r.persona}
								strNickname={r.nickname}
								bParenthesizeNicknames={
									_.rV.communityPreferences.bParenthesizeNicknames
								}
								onContextMenu={(e) => {
									Cc(e, r, this.context);
								}}
								onClick={(t) =>
									y.B7.NavigateToSteamURLInOwningWindow(
										t,
										"SteamIDPage",
										comment.steamid,
									)
								}
							/>
							<div className={B.CommentTime}>{n}</div>
						</div>
					</div>
					<div className={B.CommentBody}>
						<div className={B.CommentText}>
							{c.Nb.FormatAndParseUserStatusBBCode(comment.text)}
							<div className={B.CommentControls}>
								<div
									className={B.CommentRatingButton}
									onClick={this.OnRateComment}
								>
									<div className={A_1(B.CommentRating, o && B.HasRating)}>
										<div
											className={A_1(
												B.BackgroundEffects,
												this.state.bPlayParticle && B.UserRated,
											)}
										/>
										{o && `${comment.upvotes} `}
										<a.bfp
											className={A_1(
												B.ThumbsUpComment,
												e_upvoted_by_user && B.UserRated,
											)}
										/>
									</div>
								</div>
								{s && (
									<div
										className={B.DeleteButton}
										onClick={this.OnMaybeDeleteComment}
									>
										<a._r0 className={B.DeleteUserNews} />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</T.Z>
		);
	}
};
Cg([o.oI], F.prototype, "OnDeleteComment", null);
Cg([o.oI], F.prototype, "OnRateComment", null);
Cg([o.oI], F.prototype, "OnMaybeDeleteComment", null);
F = Cg([s.PA], F);
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
			commentThread,
			publishedfileid,
			bDefaultMinimized,
			bMaxHeight,
			bDontAutoMaximize,
			bIsPopup,
			bVisible,
		} = this.props;
		if (!commentThread) {
			return null;
		}
		if (commentThread.m_threadInfo == null) {
			return (
				<div className={B.CommentThread}>
					<div className={B.ThreadLoading} />
				</div>
			);
		}
		let c;
		let m;
		let u;
		let d;
		let A = commentThread.m_threadInfo.total_count > 0;
		let p = commentThread ? commentThread.m_threadInfo.upvotes : 0;
		let g = !!commentThread && commentThread.m_threadInfo.user_upvoted;
		let h = commentThread ? commentThread.GetUpVoters() : [];
		let C = this.OnRateUpCommentThreadClicked;
		let _ = this.OnRateDownCommentThreadClicked;
		let b = commentThread ? commentThread.m_threadInfo.total_count : 0;
		let y = bVisible || g;
		let w = S.B6.GetPublishedFile(publishedfileid);
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
		const v = this.state.bMinimized && (!A || bDontAutoMaximize);
		return (
			<div
				className={A_1(
					B.CommentThread,
					B.Shown,
					!v &&
						this.props.commentThread.m_rgComments.length > 0 &&
						B.HasComments,
				)}
			>
				<div
					className={A_1(
						v ? B.ActivityCommentThreadMinimized : B.ActivityCommentThread,
						bIsPopup ? B.IsPopup : null,
						v && y && B.IsVisible,
					)}
				>
					<div className={A_1(B.RatingContainer, A && B.HasComments)}>
						<Xn
							upvotes={p}
							upvoted_by_user={g}
							upvoters={h}
							fnOnRateUpClicked={C}
							fnOnRateDownClicked={_}
							comment_count={b}
							fnMaximizeParent={this.props.bIsPopup || this.OnMaximize}
							nReactionCount={c}
							fnOnAwardClicked={this.ShowAwardModal}
							bIsVisible={y}
						/>
					</div>
					{!v && <O commentThread={commentThread} bMaxHeight={bMaxHeight} />}
				</div>
				{this.state.bShowPointsModal && (
					<f.EX
						bShowModal={this.state.bShowPointsModal}
						targetType={d}
						targetid={m}
						ugcType={u}
						onDismiss={this.HideAwardModal}
					/>
				)}
			</div>
		);
	}
};
Cg([o.oI], _h.prototype, "OnRateUpCommentThreadClicked", null);
Cg([o.oI], _h.prototype, "OnRateDownCommentThreadClicked", null);
Cg([o.oI], _h.prototype, "OnRateUpPublishedFileClicked", null);
Cg([o.oI], _h.prototype, "OnRateDownPublishedFileClicked", null);
Cg([o.oI], _h.prototype, "OnMaximize", null);
Cg([o.oI], _h.prototype, "OnMinimize", null);
Cg([o.oI], _h.prototype, "ShowAwardModal", null);
Cg([o.oI], _h.prototype, "HideAwardModal", null);
_h = Cg([s.PA], _h);
const O = PA((e) => {
	const { commentThread, bMaxHeight } = e;
	const n = Qn();
	let a = commentThread.m_threadInfo.total_count > 0;
	let s =
		commentThread.m_threadInfo.total_count > commentThread.m_rgComments.length;
	let o =
		commentThread.m_threadInfo.total_count - commentThread.m_rgComments.length;
	const c = i.useCallback(() => {
		commentThread.FetchPastComments(10);
	}, [commentThread]);
	const m = i.useCallback(
		(e) => {
			commentThread.PostCommentToThread(e);
		},
		[commentThread],
	);
	return (
		<>
			{s && (
				<div className={B.MakeCommentsVisible} onClick={c}>
					{(0, Localize)("#AppActivity_MakeCommentsVisible", o)}
				</div>
			)}
			{a && (
				<div
					className={A_1(
						B.CommentsTransitionGroup,
						bMaxHeight && B.NeedsMaxHeight,
					)}
				>
					{commentThread.m_rgComments.map((e) => (
						<F
							key={`${e.gidcomment}`}
							comment={e}
							commentThread={commentThread}
						/>
					))}
				</div>
			)}
			{!n && (
				<C.K
					className={B.AddReply}
					OnPostClicked={m}
					placeholder={(0, Localize)("#AppActivity_Comment_Reply")}
				/>
			)}
		</>
	);
});
