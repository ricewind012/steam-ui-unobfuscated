var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./31084.js");
var c = require("./61510.js");
var m = require("./22584.js");
var u = require("./56840.js");
var d = require("./94230.js");
var A = d;
var p = require(/*webcrack:missing*/ "./88750.js");
var g = require("./64608.js");
var h = require("./44164.js");
var C = require("./15688.js");
var _ = require("./4816.js");
var f = require("./13352.js");
var b = require("./87949.js");
var y = require(/*webcrack:missing*/ "./50376.js");
var S = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var B = require(/*webcrack:missing*/ "./52451.js");
var v = require(/*webcrack:missing*/ "./72476.js");
var _I = require("./89454.js");
var E = _I;
var M = require("./68430.js");
var T = require("./18118.js");
var R = require(/*webcrack:missing*/ "./98995.js");
const k = new RegExp("ː([^ː]*)ː", "g");
const D = new RegExp(
	"^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
	"i",
);
const N = (e) => {
	const { userType: t, msg: r, presenterInfo: n } = e;
	if (t === "presenter") {
		return o.createElement(
			"span",
			null,
			o.createElement(
				f.fI,
				{
					name: n.name,
					title: n.title,
					photo: n.photo,
					company: n.company,
					bioString: n.bio,
				},
				o.createElement(
					"a",
					{
						className: (0, S.A)(E.MessageName, E.MessagePresenter),
						href: v.TS.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
						target: "_blank",
						rel: "noopener noreferrer",
					},
					r.persona_name,
				),
			),
		);
	}
	{
		let e = null;
		if (t === "broadcaster") {
			e = E.MessageBroadcaster;
		} else if (t === "moderator") {
			e = E.MessageModerator;
		}
		return o.createElement(
			"span",
			null,
			o.createElement(
				"a",
				{
					className: (0, S.A)(E.MessageName, e),
					href: v.TS.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
					"data-miniprofile": "s" + r.steamid,
					target: "_blank",
					rel: "noopener noreferrer",
				},
				r.persona_name,
			),
		);
	}
};
const F = (e) => {
	switch (e.userType) {
		case "presenter":
			return o.createElement(
				R.Gq,
				{
					toolTipContent: (0, Localize)("#BroadcastChat_Role_Presenter_ttip"),
				},
				o.createElement(
					"span",
					{
						className: E.RoleFlairContainer,
					},
					o.createElement(y.NCC, null),
				),
			);
		case "moderator":
			return o.createElement(
				R.Gq,
				{
					toolTipContent: (0, Localize)("#BroadcastChat_Role_Moderatorr_ttip"),
				},
				o.createElement(
					"span",
					{
						className: E.RoleFlairContainer,
					},
					o.createElement(y.$4X, null),
				),
			);
		case "broadcaster":
			return o.createElement(
				R.Gq,
				{
					toolTipContent: (0, Localize)("#BroadcastChat_Role_Broadcaster_ttip"),
				},
				o.createElement(
					"span",
					{
						className: E.RoleFlairContainer,
					},
					o.createElement(y.Gkr, null),
				),
			);
		default:
			return null;
	}
};
export let I = class extends o.Component {
	constructor(e) {
		super(e);
		(0, i.Gn)(this);
	}
	m_chat = null;
	messagesContainer = o.createRef();
	componentDidMount() {
		this.StartChat();
	}
	componentDidUpdate(e) {
		if (this.m_chat && this.m_chat.m_bAutoScroll) {
			this.ScrollToNewestMessages();
		}
		if (
			this.props.steamID !== e.steamID ||
			this.props.broadcastID !== e.broadcastID ||
			this.props.broadcastChannelID !== e.broadcastChannelID
		) {
			this.StartChat();
		}
	}
	componentWillUnmount() {
		if (this.m_chat) {
			this.m_chat.Stop();
		}
	}
	StartChat() {
		if (this.m_chat) {
			this.m_chat.Stop();
		}
		this.m_chat = c.q
			.Get()
			.GetOrCreateChat(this.props.broadcastChannelID, this.props.steamID);
		if (this.props.broadcastChannelID) {
			this.m_chat.StartForChannel(this.props.broadcastChannelID);
		} else if (
			this.props.steamID &&
			this.props.steamID &&
			(this.props.broadcastID || this.props.globalChat)
		) {
			let e = this.props.broadcastID || "0";
			this.m_chat.StartForSteamID(this.props.steamID, e);
			this.ScrollToNewestMessages();
		}
	}
	IsTrustedDomain(e) {
		return !!e.match(D);
	}
	AddLinksEmoticons(e, t) {
		let r = k;
		if (t) {
			r = this.m_chat.GetUserEmoticons();
		}
		let n = e.split(k);
		const i = [];
		for (let e = 0; e < n.length; e += 1) {
			if (e % 2 == 1) {
				i.push(
					o.createElement(h.nl, {
						emoticonHoverStore: u.s,
						key: e,
						emoticon: n[e],
						large: true,
					}),
				);
			} else {
				i.push(n[e]);
			}
		}
		return i;
	}
	HandleScroll(e) {
		const t = this.props.bInvertLayout
			? e.currentTarget.scrollTop < 6
			: e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
				e.currentTarget.scrollHeight - 6;
		if (this.m_chat) {
			this.m_chat.m_bAutoScroll = t;
		}
	}
	ScrollToNewestMessages() {
		if (this.messagesContainer && this.messagesContainer.current) {
			this.messagesContainer.current.scrollTop = this.props.bInvertLayout
				? 0
				: this.messagesContainer.current.scrollHeight;
		}
	}
	OnContextMenu(e, t) {
		if (t.type !== T.X8.Chat) {
			return null;
		}
		const r = [];
		const n = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID());
		const i = this.m_chat.BIsUserBroadcastModerator(
			this.m_chat.GetUserSteamID(),
		);
		if ((v.iA && v.iA.is_support) || n || i) {
			r.push(
				o.createElement(
					p.kt,
					{
						key: "remove",
						onSelected: () =>
							this.m_chat.RemoveUserMessagesServer(t.steamid, t.persona_name),
					},
					(0, Localize)("#BroadcastChat_RemoveMessages"),
				),
				o.createElement(
					p.kt,
					{
						key: "updatebanh",
						onSelected: () =>
							this.m_chat.UpdateUserChatBan(
								t.steamid,
								1,
								12,
								false,
								t.persona_name,
							),
					},
					(0, Localize)("#BroadcastChat_half_Mute"),
				),
				o.createElement(
					p.kt,
					{
						key: "updateband",
						onSelected: () =>
							this.m_chat.UpdateUserChatBan(
								t.steamid,
								1,
								24,
								false,
								t.persona_name,
							),
					},
					(0, Localize)("#BroadcastChat_day_Mute"),
				),
				o.createElement(
					p.kt,
					{
						key: "updatebanw",
						onSelected: () =>
							this.m_chat.UpdateUserChatBan(
								t.steamid,
								1,
								168,
								false,
								t.persona_name,
							),
					},
					(0, Localize)("#BroadcastChat_week_Mute"),
				),
				o.createElement(
					p.kt,
					{
						key: "updatebanp",
						onSelected: () =>
							this.m_chat.UpdateUserChatBan(
								t.steamid,
								1,
								0,
								true,
								t.persona_name,
							),
					},
					(0, Localize)("#BroadcastChat_perm_Mute"),
				),
				o.createElement(
					p.kt,
					{
						key: "removeban",
						onSelected: () =>
							this.m_chat.UpdateUserChatBan(
								t.steamid,
								0,
								0,
								false,
								t.persona_name,
								true,
							),
					},
					(0, Localize)("#BroadcastChat_Unmute"),
				),
			);
		} else if (this.m_chat.IsUserMutedLocally(t.steamid)) {
			r.push(
				o.createElement(
					p.kt,
					{
						key: "unmuteuser",
						onSelected: () =>
							this.m_chat.UnmuteUserForSession(t.steamid, t.persona_name),
					},
					(0, Localize)("#BroadcastChat_UnmuteLocal"),
				),
			);
		} else {
			r.push(
				o.createElement(
					p.kt,
					{
						key: "muteuser",
						onSelected: () =>
							this.m_chat.MuteUserForSession(t.steamid, t.persona_name),
					},
					(0, Localize)("#BroadcastChat_MuteLocal"),
				),
			);
		}
		if (
			((v.iA && v.iA.is_support) ||
				this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
			t.steamid
		) {
			if (this.m_chat.BIsUserBroadcastModerator(t.steamid)) {
				r.push(
					o.createElement(
						p.kt,
						{
							key: "removemod",
							onSelected: () =>
								this.m_chat.UpdateBroadcastChatModerator(
									t.steamid,
									false,
									t.persona_name,
								),
						},
						(0, Localize)("#BroadcastChat_Remove_Moderator"),
					),
				);
			} else {
				r.push(
					o.createElement(
						p.kt,
						{
							key: "addmod",
							onSelected: () =>
								this.m_chat.UpdateBroadcastChatModerator(
									t.steamid,
									true,
									t.persona_name,
								),
						},
						(0, Localize)("#BroadcastChat_Add_Moderator"),
					),
				);
			}
		}
		if (r.length) {
			return (0, l.lX)(
				o.createElement(
					p.tz,
					null,
					o.createElement(
						"div",
						{
							className: E.SelectedUserNameCtn,
						},
						(0, Localize)("#BroadcastChat_User"),
						o.createElement("br", null),
						o.createElement(
							"span",
							{
								className: E.SelectedUserName,
							},
							t.persona_name,
						),
					),
					r,
				),
				e,
			);
		} else {
			return null;
		}
	}
	GetTypeClassName(e) {
		if (e.type === T.X8.Notification) {
			return E.MessageNotification;
		} else if (e.type === T.X8.Error) {
			return E.MessageError;
		} else {
			return E.MessageChat;
		}
	}
	FormatMessage(e, t) {
		if (e.type === T.X8.Chat) {
			let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
			return this.AddLinksEmoticons(r, false);
		}
		return e.msg;
	}
	RenderUserChatLine(e, t, r) {
		let n = r ? r.get(e.steamid) : undefined;
		const i =
			e.type === T.X8.Chat
				? (function (e, t, r) {
						if (r) {
							return "presenter";
						} else if (t.GetBroadcastSteamID() === e) {
							return "broadcaster";
						} else if (t.BIsUserBroadcastModerator(e)) {
							return "moderator";
						} else {
							return "";
						}
					})(e.steamid, this.m_chat, n)
				: "";
		return o.createElement(
			"div",
			{
				key: e.instance_id + "_" + e.client_ts + "_" + t,
				className: this.GetTypeClassName(e),
				onContextMenu: (t) => this.OnContextMenu(t, e),
			},
			e.type === T.X8.Chat &&
				o.createElement(F, {
					userType: i,
				}),
			e.flair &&
				o.createElement(
					"span",
					{
						className: E.FlairContainer,
					},
					this.AddLinksEmoticons(e.flair, false),
				),
			e.type === T.X8.Chat &&
				o.createElement(N, {
					userType: i,
					msg: e,
					presenterInfo: n,
				}),
			e.type === T.X8.Chat &&
				this.m_chat.GetBroadcastSteamID() === e.steamid &&
				o.createElement(
					"span",
					{
						className: `${E.MessageNotification} ${E.MessageContents}`,
					},
					` (${(0, Localize)("#BroadcastChat_Broadcaster")})`,
				),
			e.type === T.X8.Chat &&
				this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
				o.createElement(
					"span",
					{
						className: `${E.MessageNotification} ${E.MessageContents}`,
					},
					` (${(0, Localize)("#BroadcastChat_Moderator")})`,
				),
			o.createElement(
				"span",
				{
					className: `${E.MessageContents} ${this.AddLinksEmoticons(e.msg, false).filter((e) => e && typeof e == "string").length ? "" : E.EmoticonsOnly}`,
				},
				e.type === T.X8.Chat ? " : " : "",
				this.FormatMessage(e, this.m_chat.TextFilterStore),
			),
		);
	}
	render() {
		const {
			hidden: e,
			bPartnerMemberOnlyChat: t,
			bInvertLayout: r,
		} = this.props;
		const n = this.m_chat ? this.m_chat.m_rgChatMessages : [];
		const i = r ? n.reverse() : n;
		const a = this.m_chat
			? m.l.GetPresenterMapForBroadcasterSteamID(
					this.m_chat.GetBroadcastSteamID(),
				)
			: undefined;
		const s = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
		return o.createElement(
			"div",
			{
				className: (0, S.A)(E.ChatPanel, "ChatPanel"),
				style: e
					? {
							display: "none",
						}
					: undefined,
			},
			o.createElement(M.P, {
				latestAnnouncement: s,
			}),
			r &&
				!!this.m_chat &&
				o.createElement(O, {
					oChat: this.m_chat,
					emoticonStore: this.props.emoticonStore,
					bPartnerMemberOnlyChat: t,
				}),
			o.createElement(b.H, null),
			o.createElement(
				"div",
				{
					className: (0, S.A)(
						`${E.ChatMessages} ${A.minHeightZero}`,
						"ChatMessages",
					),
					onScroll: this.HandleScroll,
					ref: this.messagesContainer,
				},
				i.map((e, t) => this.RenderUserChatLine(e, t, a)),
			),
			o.createElement(b.P, null),
			!r &&
				!!this.m_chat &&
				o.createElement(O, {
					oChat: this.m_chat,
					emoticonStore: this.props.emoticonStore,
					bPartnerMemberOnlyChat: t,
				}),
		);
	}
};
function O(e) {
	const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: n } = e;
	if (!n || (v.iA?.logged_in && v.iA?.is_partner_member)) {
		if (v.iA?.logged_in) {
			return o.createElement(P, {
				oChat: t,
				emoticonStore: r,
			});
		} else {
			return null;
		}
	} else {
		return o.createElement(x, null);
	}
}
function P(e) {
	const { oChat: t, emoticonStore: r } = e;
	const [n, i] = o.useState("");
	const a = o.useRef();
	const l = (0, s.q3)(() => t.m_bRateLimited);
	const c = o.useCallback(
		(e) => {
			if (!e.shiftKey && e.charCode === 13) {
				if (!t.m_bRateLimited) {
					t.SendMessage(n);
					i("");
				}
				e.preventDefault();
			}
		},
		[t, n],
	);
	const m = o.useCallback(
		(e, t = false) => {
			i(`${n}ː${e}ː`);
			if (a?.current) {
				a.current.focus();
			}
		},
		[n, a],
	);
	let d = l || n.trim().length == 0;
	let p = (0, S.A)(A.chatSubmitButton, n.length == 0 && A.disabled);
	return o.createElement(
		"div",
		{
			className: (0, S.A)(E.ChatEntryCtn, "ChatEntryCtn"),
		},
		o.createElement(
			"div",
			{
				className: (0, S.A)(E.ChatEntry, "ChatEntry"),
			},
			o.createElement(
				"form",
				{
					className: `${A.chatEntryControls}`,
				},
				o.createElement("textarea", {
					className: A.chatTextarea,
					placeholder: (0, Localize)("#BroadcastChat_EnterResponse"),
					onKeyPress: c,
					onChange: (e) => i(e.target.value),
					value: n,
					ref: a,
				}),
				l &&
					o.createElement(z, {
						nSeconds: t.m_nRateLimitSeconds,
						bRateLimited: t.m_bRateLimited,
					}),
				o.createElement(
					"button",
					{
						className: p,
						title: (0, Localize)("#ChatEntryButton_Submit"),
						disabled: d,
						onClick: () => {
							t.SendMessage(n);
							i("");
						},
					},
					o.createElement(y.XTb, null),
				),
			),
			o.createElement(
				"div",
				{
					style: {
						height: "50px",
					},
					className: `${A.chatEntryActionsContainer}`,
				},
				o.createElement(
					"div",
					{
						className: A.chatEntryActionsGroup,
					},
					o.createElement(C.A, {
						disabled: false,
						OnEmoticonSelected: m,
						rtLastAckedNewEmoticons: Number.MAX_VALUE,
						emoticonStore: r,
						emoticonHoverStore: u.s,
					}),
					o.createElement(L, {
						...e,
						textInputRef: a,
					}),
				),
			),
		),
	);
}
function L(e) {
	const { oChat: t, emoticonStore: r, textInputRef: n } = e;
	if (
		t.m_strFlairGroupID &&
		r.flair_list &&
		r.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
	) {
		return o.createElement(C.A, {
			disabled: false,
			OnEmoticonSelected: (e) => {
				t.UpdateChatMessageFlair(e);
				if (n?.current) {
					n.current.focus();
				}
			},
			rtLastAckedNewEmoticons: Number.MAX_VALUE,
			emoticonStore: r,
			emoticonHoverStore: u.s,
			strFlairGroupID: t.m_strFlairGroupID,
			title: (0, Localize)("#ChatEntryButton_Flair"),
			buttonIcon: o.createElement(y.P7r, null),
		});
	} else {
		return null;
	}
}
(0, n.Cg)([i.sH], I.prototype, "m_chat", undefined);
(0, n.Cg)([B.oI], I.prototype, "StartChat", null);
(0, n.Cg)([B.oI], I.prototype, "HandleScroll", null);
(0, n.Cg)([B.oI], I.prototype, "OnContextMenu", null);
(0, n.Cg)([B.oI], I.prototype, "RenderUserChatLine", null);
I = (0, n.Cg)([a.PA], I);
class z extends o.Component {
	render() {
		return o.createElement(
			"div",
			{
				className: E.TimedProgressBarContainer,
			},
			o.createElement(
				"div",
				{
					className: E.wrapper,
				},
				o.createElement("div", {
					className: `${E.spinner} ${E.pie}`,
					style: {
						animationDuration: `${this.props.nSeconds || 0}s`,
					},
				}),
				o.createElement("div", {
					className: `${E.filler} ${E.pie}`,
					style: {
						animationDuration: `${this.props.nSeconds || 0}s`,
					},
				}),
				o.createElement("div", {
					className: E.mask,
					style: {
						animationDuration: `${this.props.nSeconds || 0}s`,
					},
				}),
			),
		);
	}
}
function x(e) {
	return o.createElement(
		"div",
		{
			className: E.Description,
		},
		o.createElement(
			"div",
			{
				className: E.LogInPrompt,
			},
			(0, Localize)("#Broadcast_PartnerChat_Login"),
		),
		!v.iA.logged_in &&
			o.createElement(
				g.$n,
				{
					onClick: _.vg,
					className: (0, S.A)(E.SignInButton),
				},
				(0, Localize)("#Login_SignIn"),
			),
	);
}
