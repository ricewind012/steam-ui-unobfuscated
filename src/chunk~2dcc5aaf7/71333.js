import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s from "./41230.js";
import o from "./1965.js";
import l from "./93050.js";
import c from "./82325.js";
import m from "./63032.js";
import u from "./27325.js";
import d from "./31993.js";
import A from "./87935.js";
import p, { ID } from "./44846.js";
import g from "./88750.js";
import _h from "./17815.js";
import C from "./56726.js";
import { mK } from "./13869.js";
import f from "./50376.js";
import b from "./26853.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import S, { A as A_1 } from "./90765.js";
import { l as l_1 } from "./80254.js";
import I from "./52451.js";
import E from "./72476.js";
import M from "./97561.js";
import T from "./69164.js";
import R from "./69196.js";
import D from "./83779.js";
const k = R;
const N = D;
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
		Gn(this);
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
		return `library.review.${this.props.overview.appid}`;
	}
	NavigateToReviewPage(e) {
		GetOwningWindowForEvent(e).location.href = A.B7.BuildSteamURL(
			"RecommendGame",
			this.props.details.unAppID,
		);
	}
	NavigateToCommunityRecommendations(e) {
		GetOwningWindowForEvent(e).location.href = A.B7.BuildSteamURL(
			"CommunityRecommendations",
		);
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
		AssertMsg(
			this.storedSettings !== null,
			"Illegal state, stored settings must be nonnull",
		);
		if (!this.ReviewDetails) {
			return null;
		}
		const e = this.BRevisableReview;
		<g.kt onSelected={this.IgnoreStaleReview}>
			{(0, Localize)("#AppDetails_Review_Ignore_Stale_Reviews")}
		</g.kt>;
		const t = (
			<g.kt onSelected={this.UnignoreStaleReview}>
				{(0, Localize)("#AppDetails_Review_Unignore_Stale_Reviews")}
			</g.kt>
		);
		return <g.tz>{e || t}</g.tz>;
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
			case M._g.Up: {
				SteamClient.Stats.RecordActivationEvent(
					"AppDetailsReviewSection",
					"PositiveClicked",
				);
				break;
			}
			case M._g.Down: {
				SteamClient.Stats.RecordActivationEvent(
					"AppDetailsReviewSection",
					"NegativeClicked",
				);
				break;
			}
			case M._g.Neutral: {
				SteamClient.Stats.RecordActivationEvent(
					"AppDetailsReviewSection",
					"NeutralClicked",
				);
			}
		}
		const r = (0, Localize)("#WriteReview_Dialog_Title");
		mK(
			<M.jB
				ownerWindow={GetOwningWindowForEvent(e)}
				steamID={this.props.details.strOwnerSteamID}
				appid={this.props.overview.appid}
				nPlaytime={this.props.overview.minutes_playtime_forever}
				eReviewVote={t}
				onSuccess={(e) => {
					SteamClient.Stats.RecordActivationEvent(
						"AppDetailsReviewSection",
						e ? "PositiveReviewPosted" : "NegativeReviewPosted",
					);
					d.x.GetReview(this.props.overview.appid, true);
				}}
				closeModal={this.OnCancelPostReview}
			/>,
			GetOwningWindowForEvent(e),
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
		const t = (0, Localize)("#WriteReview_Dialog_Title");
		mK(
			<M.jB
				ownerWindow={GetOwningWindowForEvent(e)}
				steamID={this.props.details.strOwnerSteamID}
				appid={this.props.overview.appid}
				nPlaytime={this.props.overview.minutes_playtime_forever}
				prevReview={this.ReviewDetails}
				eReviewVote={this.ReviewDetails.voted_up ? M._g.Up : M._g.Down}
				onSuccess={(e) => {
					SteamClient.Stats.RecordActivationEvent(
						"AppDetailsReviewSection",
						e ? "PositiveReviewPosted" : "NegativeReviewPosted",
					);
					d.x.GetReview(this.props.overview.appid, true);
				}}
				closeModal={this.OnCancelPostReview}
			/>,
			GetOwningWindowForEvent(e),
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
			return (
				<div className={k.section}>
					<l.w label={(0, Localize)("#AppDetails_Review_YourReview")} />
					<b.t size="xlarge" position="center" />
				</div>
			);
		}
		let e;
		let t;
		let r;
		let n = this.props.overview.BIsApplicationOrTool();
		let a = l_1(this.props.details.nPlaytimeForever);
		let s = n
			? (0, Localize)("#AppDetails_Review_PlayedForTime_Software", a)
			: (0, Localize)("#AppDetails_Review_PlayedForTime", a);
		if (this.ReviewDetails) {
			if (this.BRevisableReview) {
				let e = l_1(
					this.props.details.nPlaytimeForever -
						this.ReviewDetails.playtime_at_review,
				);
				let t = n
					? (0, Localize)("#AppDetails_Review_AdditionalPlaytime_Software", e)
					: (0, Localize)("#AppDetails_Review_AdditionalPlaytime", e);
				r = (
					<div className={N.ReviewReminderBox}>
						<div className={N.ReviewReminderBoxContent}>
							<div className={N.AdditionalPlaytimeReminder}>{t}</div>
							<div className={N.ChangedYourMind}>
								{(0, Localize)("#AppDetails_Review_ChangedYourMind")}
							</div>
							<C.eJ
								className={N.EditMyReview}
								onClick={this.ShowEditRevewDialog}
							>
								{(0, Localize)("#AppDetails_Review_ViewOrEdit")}
							</C.eJ>
						</div>
						<f.X className={N.ExitButton} onClick={this.IgnoreStaleReview} />
					</div>
				);
			} else {
				r = null;
			}
			let a = l_1(this.ReviewDetails.playtime_at_review);
			let s = n
				? (0, Localize)("#AppDetails_Review_PlaytimeAtReview_Software", a)
				: (0, Localize)("#AppDetails_Review_PlaytimeAtReview", a);
			t = (
				<o.n.Highlight
					className={N.ReviewMetadata}
					onClick={this.ShowEditRevewDialog}
				>
					{this.ReviewDetails.voted_up ? (
						<f.twC
							className={A_1(
								N.ReviewIcon,
								N.ReviewIconThumbsUp,
								N.ReviewIconThumbsUpColor,
							)}
						/>
					) : (
						<div className={A_1(N.ReviewIcon, N.ReviewIconThumbsDownBox)}>
							<f.twC
								className={A_1(
									N.ReviewIconThumbsDown,
									N.ThumbsDown,
									N.ReviewIconThumbsDownColor,
								)}
							/>
						</div>
					)}
					<div className={N.ReviewDescription}>
						<div className={N.ReviewDescriptionRecommended}>
							{this.ReviewDetails.voted_up
								? (0, Localize)("#AppDetails_Review_Recommended")
								: (0, Localize)("#AppDetails_Review_NotRecommended")}
						</div>
						<div className={N.PlayedForTime}>{s}</div>
					</div>
				</o.n.Highlight>
			);
			let l = null;
			if (this.ReviewDetails.reactions.length) {
				l = <F reactions={this.ReviewDetails.reactions} />;
			}
			const m = !ID(E.TS.LAUNCHER_TYPE);
			const u = new c.T({
				text: this.ReviewDetails.review,
			});
			e = (
				<div className={N.ReviewPresentGroup}>
					{r}
					<_h.S
						pxOverflowHeight={200}
						classNameWhenHidden={N.ReviewText}
						classNameWhenExpanded={A_1(N.ReviewText, N.ReviewTextExpanded)}
					>
						<div className={N.ReviewTextContainer}> {u.render()}</div>
					</_h.S>
					<div>
						<div
							className={N.CommentsGroup}
							onClick={this.NavigateToReviewPage}
						>
							<div className={N.CommentsContainer}>
								<f.bfp className={N.UpVotesIcon} />
								<div className={N.CommentsLabel}>
									{(0, Localize)("#AppDetails_Review_UpVotes")}
								</div>
								<div className={N.CommentCount}>
									{this.ReviewDetails.votes_up}
								</div>
							</div>
							{!p.ID(E.TS.LAUNCHER_TYPE) && (
								<div className={N.CommentsContainer}>
									<f._h6 className={N.CommentIcon} />
									<div className={N.CommentsLabel}>
										{(0, Localize)("#AppDetails_Review_Comments")}
									</div>
									<div className={N.CommentCount}>
										{this.ReviewDetails.comment_count}
									</div>
								</div>
							)}
						</div>
					</div>
					{l}
					<div className={N.ButtonsGroup}>
						{!this.context?.IN_GAMEPADUI && (
							<C.Po onClick={this.ShowEditRevewDialog}>
								{(0, Localize)("#AppDetails_Review_ViewOrEdit")}
							</C.Po>
						)}
						{m && (
							<C.TD onClick={this.NavigateToCommunityRecommendations}>
								{(0, Localize)("#AppDetails_Review_ViewAll")}
							</C.TD>
						)}
					</div>
				</div>
			);
		} else {
			t = null;
			const r = (
				<C.TD onClick={this.NavigateToCommunityRecommendations}>
					{(0, Localize)("#AppDetails_Review_ViewAll")}
				</C.TD>
			);
			e = (
				<>
					<div className={N.WriteReview}>
						<div className={N.PlayedForTime}>{s}</div>
						{!this.context?.IN_GAMEPADUI && (
							<div className={A_1(N.VoteUpDownContainer)}>
								<C.Xs
									onClick={(e) => this.ShowWriteRevewDialog(e, M._g.Neutral)}
								>
									{(0, Localize)(
										"#AppDetails_Review_WriteReview",
										this.props.overview.display_name,
									)}
								</C.Xs>
							</div>
						)}
					</div>
					{this.context?.IN_GAMEPADUI && (
						<T.Z
							flow-children="row"
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "8px",
							}}
						>
							{r}
						</T.Z>
					)}
					{!this.context?.IN_GAMEPADUI && r}
				</>
			);
		}
		return (
			<o.n
				feature={3}
				className={N.Container}
				label={(0, Localize)("#AppDetails_Review_YourReview")}
				highlight={t}
				rightColumnSection
			>
				<o.n.Body>{e}</o.n.Body>
			</o.n>
		);
	}
};
Cg([a.sH], h.prototype, "storedSettings", undefined);
Cg([a.sH], h.prototype, "unAppID", undefined);
Cg([a.EW], h.prototype, "ReviewDetails", null);
Cg([I.oI], h.prototype, "FetchRoamingStorageState", null);
Cg([I.oI], h.prototype, "NavigateToReviewPage", null);
Cg([I.oI], h.prototype, "NavigateToCommunityRecommendations", null);
Cg([I.oI], h.prototype, "IgnoreStaleReview", null);
Cg([I.oI], h.prototype, "UnignoreStaleReview", null);
Cg([I.oI], h.prototype, "StoreSettings", null);
Cg([I.oI], h.prototype, "RenderContextMenu", null);
Cg([I.oI], h.prototype, "ShowWriteRevewDialog", null);
Cg([I.oI], h.prototype, "ShowEditRevewDialog", null);
Cg([I.oI], h.prototype, "OnCancelPostReview", null);
h = Cg([s.PA], h);
