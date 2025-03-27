import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./50376.js";
import s from "./44846.js";
import o, { Gn } from "./89193.js";
import l from "./64608.js";
import c from "./31993.js";
import m from "./12176.js";
import u from "./10606.js";
import A from "./52451.js";
import p, { Y2, Qn } from "./72476.js";
import g from "./36934.js";
import h from "./96593.js";
import C from "./83957.js";
import { A as A_1 } from "./90765.js";
import S from "./87935.js";
import w from "./74110.js";
import B from "./98995.js";
import v from "./79918.js";
import E from "./46217.js";
import M from "./69164.js";
const _ = C;
export let _g;
export let qR;
const I = v;
((e) => {
	e[(e.Neutral = 0)] = "Neutral";
	e[(e.Up = 1)] = "Up";
	e[(e.Down = 2)] = "Down";
})((_g ||= {}));
((e) => {
	e[(e.Default = 0)] = "Default";
	e[(e.ReviseQuery = 1)] = "ReviseQuery";
	e[(e.ReviseEdit = 2)] = "ReviseEdit";
})((qR ||= {}));
export class jB extends i.Component {
	m_appinfo = undefined;
	m_textInput = i.createRef();
	m_languageSelect = i.createRef();
	m_rgVisibilityOptions = [
		{
			data: true,
			label: Localize("#WriteReview_Dialog_Public"),
		},
		{
			data: false,
			label: Localize("#WriteReview_Dialog_Friends"),
		},
	];
	constructor(e) {
		super(e);
		Gn(this);
		if (e.prevReview) {
			this.state = {
				bShowForm: true,
				bShowOptions: false,
				bVoteUp: e.prevReview.voted_up,
				bVoteDown: !e.prevReview.voted_up,
				bAllowComments: !e.prevReview.comments_disabled,
				bReceivedCompensation: e.prevReview.received_compensation,
				strError: "",
				bRequestInProgress: false,
				bIsPublic: e.prevReview.is_public,
			};
		} else {
			this.state = {
				bShowForm: this.props.eReviewVote == _g.Up,
				bShowOptions: this.props.eReviewVote == _g.Down,
				bVoteUp: this.props.eReviewVote == _g.Up,
				bVoteDown: this.props.eReviewVote == _g.Down,
				bAllowComments: false,
				bReceivedCompensation: false,
				strError: "",
				bRequestInProgress: false,
				bIsPublic: true,
			};
		}
		this.m_appinfo = g.Vw.GetAppInfo(e.appid);
	}
	async PostReview() {
		if (this.m_textInput.current.value != "") {
			this.setState({
				strError: "",
				bRequestInProgress: true,
			});
			if (this.props.prevReview) {
				let e = m.w.Init(w.uQ);
				e.Body().set_recommendationid(this.props.prevReview.recommendationid);
				e.Body().set_review_text(this.m_textInput.current.value);
				e.Body().set_voted_up(this.state.bVoteUp);
				e.Body().set_is_public(this.state.bIsPublic);
				e.Body().set_language(this.props.prevReview.language);
				e.Body().set_received_compensation(this.state.bReceivedCompensation);
				e.Body().set_comments_disabled(!this.state.bAllowComments);
				await w.YK.Update(c.x.CMInterface.GetServiceTransport(), e);
				this.setState({
					strError: "",
					bRequestInProgress: false,
				});
				if (this.props.onSuccess) {
					this.props.onSuccess(this.state.bVoteUp);
				}
				this.CloseDialog(true);
			} else {
				let e = `${p.TS.STORE_BASE_URL}friends/recommendgame`;
				let t = new FormData();
				t.append("appid", this.props.appid.toString());
				t.append("comment", this.m_textInput.current.value);
				t.append("rated_up", String(this.state.bVoteUp));
				t.append("is_public", String(this.state.bIsPublic));
				t.append("disable_comments", String(!this.state.bAllowComments));
				t.append(
					"received_compensation",
					String(this.state.bReceivedCompensation),
				);
				t.append("steamworksappid", String(this.props.appid));
				t.append("hide_in_steam_china", String(!Y2()));
				_.post(e, t, {
					withCredentials: true,
				})
					.then((e) => {
						if (e.data.success) {
							if (this.props.onSuccess) {
								this.props.onSuccess(this.state.bVoteUp);
							}
							this.CloseDialog(true);
						} else {
							let t = e.data.strError
								? e.data.strError
								: Localize("#WriteReview_Dialog_GenericError");
							this.setState({
								strError: t,
								bRequestInProgress: false,
							});
						}
					})
					.catch((e) => {
						console.log(e);
						this.setState({
							strError: Localize("#WriteReview_Dialog_GenericError"),
							bRequestInProgress: false,
						});
					});
			}
		} else {
			this.setState({
				strError: Localize("#WriteReview_Dialog_NoTextError"),
				bRequestInProgress: false,
			});
		}
	}
	CloseDialog(e) {
		if (this.props.closeModal) {
			this.props.closeModal(e);
		}
	}
	OnVoteUp(e) {
		e.stopPropagation();
		e.preventDefault();
		if (!this.state.bVoteUp) {
			this.setState({
				bShowForm: true,
				bShowOptions: false,
				bVoteUp: true,
				bVoteDown: false,
			});
		}
	}
	OnVoteDown(e) {
		e.stopPropagation();
		e.preventDefault();
		if (!this.state.bVoteDown) {
			this.setState({
				bShowOptions: true,
				bShowForm: false,
				bVoteUp: false,
				bVoteDown: true,
			});
		}
	}
	OnSupportClick(e) {
		this.CloseDialog();
		GetOwningWindowForEvent(e).location.href = S.B7.BuildSteamURL(
			"HelpAppPage",
			this.props.appid,
		);
	}
	OnAddReview(e) {
		e.stopPropagation();
		e.preventDefault();
		this.setState({
			bShowOptions: false,
			bShowForm: true,
		});
	}
	OnSelectVisibility(e) {
		this.setState({
			bIsPublic: e.data,
		});
	}
	GetOptions() {
		return (
			<div className={I.OptionsContainer}>
				<div className={I.LeftContainer}>
					<button className={I.OptionButton} onClick={this.OnSupportClick}>
						<a.ypD className={I.OptionSvg} />
						<div className={I.ButtonText}>
							{" "}
							{Localize("#WriteReview_Dialog_GetSupport_Btn")}{" "}
						</div>
					</button>
					<div className={I.OptionDesc}>
						{Localize("#WriteReview_Dialog_GetSupport_Desc")}
					</div>
				</div>
				<div className={I.RightContainer}>
					<button className={I.OptionButton} onClick={this.OnAddReview}>
						<a.CE1 className={I.OptionSvg} />
						<div className={I.ButtonText}>
							{" "}
							{Localize("#WriteReview_Dialog_AddReview_Btn")}{" "}
						</div>
					</button>
					<div className={I.OptionDesc}>
						{Localize("#WriteReview_Dialog_AddReview_Desc")}
					</div>
				</div>
			</div>
		);
	}
	GetLanguageOptionList() {
		let e;
		(p.TS.SUPPORTED_LANGUAGES || []).forEach((t) => {
			e.push(<option value={t.value}>{t.localizedName}</option>);
		});
		return e;
	}
	GetReviewForm() {
		let e = `${p.TS.CHAT_BASE_URL}comment/recommendation/formattinghelp`;
		if (p.TS.IN_CLIENT) {
			e = `steam://openurl_external/${e}`;
		}
		return (
			<div className={I.FormContainer}>
				<div className={I.DescribeGame}>
					{LocalizeReact(
						"#WriteReview_Dialog_ReviewInstructions",
						<a href="https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810">
							{Localize("#WriteReview_Dialog_ReviewInstructions_Link")}
						</a>,
					)}
					{Y2() && (
						<div className={I.SteamChinaDisclaimer}>
							{Localize("#WriteReview_Dialog_SteamChinaDisclaimer")}
						</div>
					)}
				</div>
				<textarea
					className={I.ReviewTextArea}
					ref={this.m_textInput}
					defaultValue={
						this.props.prevReview ? this.props.prevReview.review : ""
					}
				/>
				<a className={I.WebLink} href={e}>
					{Localize("#WriteReview_Dialog_FormattingHelp")}
				</a>
				<div className={I.ReviewSettingsContainer}>
					<div className={I.ReviewSettingsRow}>
						<span>{Localize("#WriteReview_Dialog_Visibility")}</span>
						<l.m
							strClassName={I.VisibilityMenu}
							rgOptions={this.m_rgVisibilityOptions}
							selectedOption={this.state.bIsPublic}
							onChange={this.OnSelectVisibility}
						/>
						<div className={I.ReviewSettingsChecks}>
							{!s.ID(p.TS.LAUNCHER_TYPE) && (
								<l.Yh
									key="allow_comments"
									checked={this.state.bAllowComments}
									onChange={(e) =>
										this.setState({
											bAllowComments: e,
										})
									}
									className={I.CommentCheckbox}
									label={Localize("#WriteReview_Dialog_AllowComments")}
								/>
							)}
							<B.he
								toolTipContent={Localize(
									"#WriteReview_Dialog_FreeDisclaimer_Tooltip",
								)}
								bTopmost
							>
								<l.Yh
									key="received_compensation"
									checked={this.state.bReceivedCompensation}
									onChange={(e) =>
										this.setState({
											bReceivedCompensation: e,
										})
									}
									className={I.FreeCheckbox}
									label={Localize("#WriteReview_Dialog_FreeDisclaimer")}
									tooltip={Localize(
										"#WriteReview_Dialog_FreeDisclaimer_Tooltip",
									)}
								/>
							</B.he>
						</div>
					</div>
				</div>
			</div>
		);
	}
	render() {
		let e = null;
		let t = null;
		let r = null;
		if (this.state.bShowOptions) {
			e = this.GetOptions();
		}
		if (this.state.bShowForm) {
			t = this.GetReviewForm();
		}
		if (this.state.strError) {
			r = <div className={I.Error}>{this.state.strError}</div>;
		}
		let n = pH(
			this.props.appid,
			I.RatingContainer,
			this.props.nPlaytime,
			this.state.bVoteUp,
			this.OnVoteUp,
			this.state.bVoteDown,
			this.OnVoteDown,
			null,
			this.props.prevReview ? qR.ReviseEdit : qR.Default,
		);
		return (
			<u.o0
				strTitle={Localize("#WriteReview_Dialog_Title")}
				strOKButtonText={
					this.props.prevReview
						? Localize("#WriteReview_Dialog_ReviseReview")
						: Localize("#WriteReview_Dialog_PostReview")
				}
				strCancelButtonText={Localize("#Button_Close")}
				onOK={this.PostReview}
				bAllowFullSize
				bDisableBackgroundDismiss
				onCancel={this.CloseDialog}
				bOKDisabled={!this.state.bShowForm || this.state.bRequestInProgress}
			>
				<div className={I.WriteReviewContainer}>
					<div className={I.Header}>{this.m_appinfo.name}</div>
					{n}
					{e}
					{r}
					{t}
				</div>
			</u.o0>
		);
	}
}
Cg([o.sH], jB.prototype, "m_appinfo", undefined);
Cg([A.oI], jB.prototype, "PostReview", null);
Cg([A.oI], jB.prototype, "CloseDialog", null);
Cg([A.oI], jB.prototype, "OnVoteUp", null);
Cg([A.oI], jB.prototype, "OnVoteDown", null);
Cg([A.oI], jB.prototype, "OnSupportClick", null);
Cg([A.oI], jB.prototype, "OnAddReview", null);
Cg([A.oI], jB.prototype, "OnSelectVisibility", null);
const K = (e) => (Qn() ? <l.$n {...e} /> : <button {...e} />);
export function pH(e, t, r, n, a, s, o, l, c) {
	let m = h.tw.GetAppOverviewByAppID(e).BIsApplicationOrTool();
	let u = ((e) => {
		if (e >= 120) {
			const t = Math.floor(e / 60);
			return Localize("#Played_Hours", t);
		}
		return Localize("#Played_Minutes", e);
	})(r);
	let A = m
		? Localize("#WriteReview_Dialog_Playtime_Software", u)
		: Localize("#WriteReview_Dialog_Playtime", u);
	let p = m
		? Localize("#WriteReview_Dialog_RecommendGame_Software")
		: Localize("#WriteReview_Dialog_RecommendGame");
	if (c == qR.ReviseQuery) {
		A = Localize("#WriteReview_Dialog_Playtime_Revise", u);
		p = Localize("#WriteReview_Dialog_RecommendGame_Revise");
	} else if (c == qR.ReviseEdit) {
		A = Localize("#WriteReview_Dialog_Playtime_Revise", u);
	}
	let g = c != qR.ReviseQuery ? I.ReviewThumbButton : I.CompactThumbButton;
	return (
		<div className={A_1(I.RatingContainer, t)}>
			<div className={I.LeftContainer}>
				<div className={I.Playtime}>{A}</div>
				<div className={I.RecommendGame}>{p}</div>
			</div>
			<M.Z className={I.RightContainer}>
				<K
					className={A_1(g, n && I.Selected)}
					title={Localize("#ChatEntryButton_Submit")}
					onClick={a}
				>
					{c != qR.ReviseQuery && (
						<E.tw className={A_1(I.ThumbIcon, n && I.Selected, I.Up)} />
					)}
					<span>{Localize("#WriteReview_Dialog_Yes")}</span>
				</K>
				<K
					className={A_1(g, s && I.Selected)}
					title={Localize("#WriteReview_Dialog_No")}
					onClick={o}
				>
					{c != qR.ReviseQuery && (
						<E.Su className={A_1(I.ThumbIcon, s && I.Selected, I.Down)} />
					)}
					<span>{Localize("#WriteReview_Dialog_No")}</span>
				</K>
				{l && (
					<K
						className={A_1(g, I.NoIcon)}
						title={Localize("#WriteReview_Dialog_Delay")}
						onClick={l}
					>
						<span>{Localize("#WriteReview_Dialog_Delay")}</span>
					</K>
				)}
			</M.Z>
		</div>
	);
}
