var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require(/*webcrack:missing*/ "./44846.js");
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require("./64608.js");
var c = require("./31993.js");
var m = require(/*webcrack:missing*/ "./12176.js");
var u = require("./10606.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var A = require(/*webcrack:missing*/ "./52451.js");
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require("./36934.js");
var h = require("./96593.js");
var C = require(/*webcrack:missing*/ "./83957.js");
var _ = C;
var f = require(/*webcrack:missing*/ "./90765.js");
export var _g;
export var qR;
var S = require("./87935.js");
var w = require("./74110.js");
var B = require(/*webcrack:missing*/ "./98995.js");
var v = require("./79918.js");
var I = v;
var E = require("./46217.js");
var M = require(/*webcrack:missing*/ "./69164.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
(function (e) {
	e[(e.Neutral = 0)] = "Neutral";
	e[(e.Up = 1)] = "Up";
	e[(e.Down = 2)] = "Down";
})((_g ||= {}));
(function (e) {
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
		(0, o.Gn)(this);
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
				let e = p.TS.STORE_BASE_URL + "friends/recommendgame";
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
				t.append("hide_in_steam_china", String(!(0, p.Y2)()));
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
		return i.createElement(
			"div",
			{
				className: I.OptionsContainer,
			},
			i.createElement(
				"div",
				{
					className: I.LeftContainer,
				},
				i.createElement(
					"button",
					{
						className: I.OptionButton,
						onClick: this.OnSupportClick,
					},
					i.createElement(a.ypD, {
						className: I.OptionSvg,
					}),
					i.createElement(
						"div",
						{
							className: I.ButtonText,
						},
						" ",
						Localize("#WriteReview_Dialog_GetSupport_Btn"),
						" ",
					),
				),
				i.createElement(
					"div",
					{
						className: I.OptionDesc,
					},
					Localize("#WriteReview_Dialog_GetSupport_Desc"),
				),
			),
			i.createElement(
				"div",
				{
					className: I.RightContainer,
				},
				i.createElement(
					"button",
					{
						className: I.OptionButton,
						onClick: this.OnAddReview,
					},
					i.createElement(a.CE1, {
						className: I.OptionSvg,
					}),
					i.createElement(
						"div",
						{
							className: I.ButtonText,
						},
						" ",
						Localize("#WriteReview_Dialog_AddReview_Btn"),
						" ",
					),
				),
				i.createElement(
					"div",
					{
						className: I.OptionDesc,
					},
					Localize("#WriteReview_Dialog_AddReview_Desc"),
				),
			),
		);
	}
	GetLanguageOptionList() {
		let e;
		(p.TS.SUPPORTED_LANGUAGES || []).forEach((t) => {
			e.push(
				i.createElement(
					"option",
					{
						value: t.value,
					},
					t.localizedName,
				),
			);
		});
		return e;
	}
	GetReviewForm() {
		let e = p.TS.CHAT_BASE_URL + "comment/recommendation/formattinghelp";
		if (p.TS.IN_CLIENT) {
			e = "steam://openurl_external/" + e;
		}
		return i.createElement(
			"div",
			{
				className: I.FormContainer,
			},
			i.createElement(
				"div",
				{
					className: I.DescribeGame,
				},
				LocalizeReact(
					"#WriteReview_Dialog_ReviewInstructions",
					i.createElement(
						"a",
						{
							href: "https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810",
						},
						Localize("#WriteReview_Dialog_ReviewInstructions_Link"),
					),
				),
				(0, p.Y2)() &&
					i.createElement(
						"div",
						{
							className: I.SteamChinaDisclaimer,
						},
						Localize("#WriteReview_Dialog_SteamChinaDisclaimer"),
					),
			),
			i.createElement("textarea", {
				className: I.ReviewTextArea,
				ref: this.m_textInput,
				defaultValue: this.props.prevReview ? this.props.prevReview.review : "",
			}),
			i.createElement(
				"a",
				{
					className: I.WebLink,
					href: e,
				},
				Localize("#WriteReview_Dialog_FormattingHelp"),
			),
			i.createElement(
				"div",
				{
					className: I.ReviewSettingsContainer,
				},
				i.createElement(
					"div",
					{
						className: I.ReviewSettingsRow,
					},
					i.createElement(
						"span",
						null,
						Localize("#WriteReview_Dialog_Visibility"),
					),
					i.createElement(l.m, {
						strClassName: I.VisibilityMenu,
						rgOptions: this.m_rgVisibilityOptions,
						selectedOption: this.state.bIsPublic,
						onChange: this.OnSelectVisibility,
					}),
					i.createElement(
						"div",
						{
							className: I.ReviewSettingsChecks,
						},
						!s.ID(p.TS.LAUNCHER_TYPE) &&
							i.createElement(l.Yh, {
								key: "allow_comments",
								checked: this.state.bAllowComments,
								onChange: (e) =>
									this.setState({
										bAllowComments: e,
									}),
								className: I.CommentCheckbox,
								label: Localize("#WriteReview_Dialog_AllowComments"),
							}),
						i.createElement(
							B.he,
							{
								toolTipContent: Localize(
									"#WriteReview_Dialog_FreeDisclaimer_Tooltip",
								),
								bTopmost: true,
							},
							i.createElement(l.Yh, {
								key: "received_compensation",
								checked: this.state.bReceivedCompensation,
								onChange: (e) =>
									this.setState({
										bReceivedCompensation: e,
									}),
								className: I.FreeCheckbox,
								label: Localize("#WriteReview_Dialog_FreeDisclaimer"),
								tooltip: Localize("#WriteReview_Dialog_FreeDisclaimer_Tooltip"),
							}),
						),
					),
				),
			),
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
			r = i.createElement(
				"div",
				{
					className: I.Error,
				},
				this.state.strError,
			);
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
		return i.createElement(
			u.o0,
			{
				strTitle: Localize("#WriteReview_Dialog_Title"),
				strOKButtonText: this.props.prevReview
					? Localize("#WriteReview_Dialog_ReviseReview")
					: Localize("#WriteReview_Dialog_PostReview"),
				strCancelButtonText: Localize("#Button_Close"),
				onOK: this.PostReview,
				bAllowFullSize: true,
				bDisableBackgroundDismiss: true,
				onCancel: this.CloseDialog,
				bOKDisabled: !this.state.bShowForm || this.state.bRequestInProgress,
			},
			i.createElement(
				"div",
				{
					className: I.WriteReviewContainer,
				},
				i.createElement(
					"div",
					{
						className: I.Header,
					},
					this.m_appinfo.name,
				),
				n,
				e,
				r,
				t,
			),
		);
	}
}
(0, n.Cg)([o.sH], jB.prototype, "m_appinfo", undefined);
(0, n.Cg)([A.oI], jB.prototype, "PostReview", null);
(0, n.Cg)([A.oI], jB.prototype, "CloseDialog", null);
(0, n.Cg)([A.oI], jB.prototype, "OnVoteUp", null);
(0, n.Cg)([A.oI], jB.prototype, "OnVoteDown", null);
(0, n.Cg)([A.oI], jB.prototype, "OnSupportClick", null);
(0, n.Cg)([A.oI], jB.prototype, "OnAddReview", null);
(0, n.Cg)([A.oI], jB.prototype, "OnSelectVisibility", null);
const k = (e) =>
	(0, p.Qn)()
		? i.createElement(l.$n, {
				...e,
			})
		: i.createElement("button", {
				...e,
			});
export function pH(e, t, r, n, a, s, o, l, c) {
	let m = h.tw.GetAppOverviewByAppID(e).BIsApplicationOrTool();
	let u = (function (e) {
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
	return i.createElement(
		"div",
		{
			className: (0, f.A)(I.RatingContainer, t),
		},
		i.createElement(
			"div",
			{
				className: I.LeftContainer,
			},
			i.createElement(
				"div",
				{
					className: I.Playtime,
				},
				A,
			),
			i.createElement(
				"div",
				{
					className: I.RecommendGame,
				},
				p,
			),
		),
		i.createElement(
			M.Z,
			{
				className: I.RightContainer,
			},
			i.createElement(
				k,
				{
					className: (0, f.A)(g, n && I.Selected),
					title: Localize("#ChatEntryButton_Submit"),
					onClick: a,
				},
				c != qR.ReviseQuery &&
					i.createElement(E.tw, {
						className: (0, f.A)(I.ThumbIcon, n && I.Selected, I.Up),
					}),
				i.createElement("span", null, Localize("#WriteReview_Dialog_Yes")),
			),
			i.createElement(
				k,
				{
					className: (0, f.A)(g, s && I.Selected),
					title: Localize("#WriteReview_Dialog_No"),
					onClick: o,
				},
				c != qR.ReviseQuery &&
					i.createElement(E.Su, {
						className: (0, f.A)(I.ThumbIcon, s && I.Selected, I.Down),
					}),
				i.createElement("span", null, Localize("#WriteReview_Dialog_No")),
			),
			l &&
				i.createElement(
					k,
					{
						className: (0, f.A)(g, I.NoIcon),
						title: Localize("#WriteReview_Dialog_Delay"),
						onClick: l,
					},
					i.createElement("span", null, Localize("#WriteReview_Dialog_Delay")),
				),
		),
	);
}
