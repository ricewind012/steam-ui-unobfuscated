import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./41230.js";
import s, { q3 } from "./90095.js";
import o from "./63696.js";
import l, { lX } from "./31084.js";
import c from "./61510.js";
import m from "./22584.js";
import u from "./56840.js";
import d from "./94230.js";
import p from "./88750.js";
import g from "./64608.js";
import h from "./44164.js";
import C from "./15688.js";
import _ from "./4816.js";
import f from "./13352.js";
import b from "./87949.js";
import y from "./50376.js";
import { A as A_1 } from "./90765.js";
import B from "./52451.js";
import v from "./72476.js";
import _I from "./89454.js";
import M from "./68430.js";
import T from "./18118.js";
import R from "./98995.js";
const A = d;
const E = _I;
const k = new RegExp("ː([^ː]*)ː", "g");
const D = new RegExp(
	"^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
	"i",
);
const N = (e) => {
	const { userType, msg, presenterInfo } = e;
	if (userType === "presenter") {
		return (
			<span>
				<f.fI
					name={presenterInfo.name}
					title={presenterInfo.title}
					photo={presenterInfo.photo}
					company={presenterInfo.company}
					bioString={presenterInfo.bio}
				>
					<a
						className={A_1(E.MessageName, E.MessagePresenter)}
						href={`${v.TS.COMMUNITY_BASE_URL}profiles/${msg.steamid}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						{msg.persona_name}
					</a>
				</f.fI>
			</span>
		);
	}
	{
		let e = null;
		if (userType === "broadcaster") {
			e = E.MessageBroadcaster;
		} else if (userType === "moderator") {
			e = E.MessageModerator;
		}
		return (
			<span>
				<a
					className={A_1(E.MessageName, e)}
					href={`${v.TS.COMMUNITY_BASE_URL}profiles/${msg.steamid}`}
					data-miniprofile={`s${msg.steamid}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{msg.persona_name}
				</a>
			</span>
		);
	}
};
const F = (e) => {
	switch (e.userType) {
		case "presenter": {
			return (
				<R.Gq
					toolTipContent={(0, Localize)("#BroadcastChat_Role_Presenter_ttip")}
				>
					<span className={E.RoleFlairContainer}>
						<y.NCC />
					</span>
				</R.Gq>
			);
		}
		case "moderator": {
			return (
				<R.Gq
					toolTipContent={(0, Localize)("#BroadcastChat_Role_Moderatorr_ttip")}
				>
					<span className={E.RoleFlairContainer}>
						<y.$4X />
					</span>
				</R.Gq>
			);
		}
		case "broadcaster": {
			return (
				<R.Gq
					toolTipContent={(0, Localize)("#BroadcastChat_Role_Broadcaster_ttip")}
				>
					<span className={E.RoleFlairContainer}>
						<y.Gkr />
					</span>
				</R.Gq>
			);
		}
		default: {
			return null;
		}
	}
};
export let I = class extends o.Component {
	constructor(e) {
		super(e);
		Gn(this);
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
				i.push(<h.nl emoticonHoverStore={u.s} key={e} emoticon={n[e]} large />);
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
				<p.kt
					key="remove"
					onSelected={() =>
						this.m_chat.RemoveUserMessagesServer(t.steamid, t.persona_name)
					}
				>
					{(0, Localize)("#BroadcastChat_RemoveMessages")}
				</p.kt>,
				<p.kt
					key="updatebanh"
					onSelected={() =>
						this.m_chat.UpdateUserChatBan(
							t.steamid,
							1,
							12,
							false,
							t.persona_name,
						)
					}
				>
					{(0, Localize)("#BroadcastChat_half_Mute")}
				</p.kt>,
				<p.kt
					key="updateband"
					onSelected={() =>
						this.m_chat.UpdateUserChatBan(
							t.steamid,
							1,
							24,
							false,
							t.persona_name,
						)
					}
				>
					{(0, Localize)("#BroadcastChat_day_Mute")}
				</p.kt>,
				<p.kt
					key="updatebanw"
					onSelected={() =>
						this.m_chat.UpdateUserChatBan(
							t.steamid,
							1,
							168,
							false,
							t.persona_name,
						)
					}
				>
					{(0, Localize)("#BroadcastChat_week_Mute")}
				</p.kt>,
				<p.kt
					key="updatebanp"
					onSelected={() =>
						this.m_chat.UpdateUserChatBan(t.steamid, 1, 0, true, t.persona_name)
					}
				>
					{(0, Localize)("#BroadcastChat_perm_Mute")}
				</p.kt>,
				<p.kt
					key="removeban"
					onSelected={() =>
						this.m_chat.UpdateUserChatBan(
							t.steamid,
							0,
							0,
							false,
							t.persona_name,
							true,
						)
					}
				>
					{(0, Localize)("#BroadcastChat_Unmute")}
				</p.kt>,
			);
		} else if (this.m_chat.IsUserMutedLocally(t.steamid)) {
			r.push(
				<p.kt
					key="unmuteuser"
					onSelected={() =>
						this.m_chat.UnmuteUserForSession(t.steamid, t.persona_name)
					}
				>
					{(0, Localize)("#BroadcastChat_UnmuteLocal")}
				</p.kt>,
			);
		} else {
			r.push(
				<p.kt
					key="muteuser"
					onSelected={() =>
						this.m_chat.MuteUserForSession(t.steamid, t.persona_name)
					}
				>
					{(0, Localize)("#BroadcastChat_MuteLocal")}
				</p.kt>,
			);
		}
		if (
			((v.iA && v.iA.is_support) ||
				this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
			t.steamid
		) {
			if (this.m_chat.BIsUserBroadcastModerator(t.steamid)) {
				r.push(
					<p.kt
						key="removemod"
						onSelected={() =>
							this.m_chat.UpdateBroadcastChatModerator(
								t.steamid,
								false,
								t.persona_name,
							)
						}
					>
						{(0, Localize)("#BroadcastChat_Remove_Moderator")}
					</p.kt>,
				);
			} else {
				r.push(
					<p.kt
						key="addmod"
						onSelected={() =>
							this.m_chat.UpdateBroadcastChatModerator(
								t.steamid,
								true,
								t.persona_name,
							)
						}
					>
						{(0, Localize)("#BroadcastChat_Add_Moderator")}
					</p.kt>,
				);
			}
		}
		if (r.length) {
			return lX(
				<p.tz>
					<div className={E.SelectedUserNameCtn}>
						{(0, Localize)("#BroadcastChat_User")}
						<br />
						<span className={E.SelectedUserName}>{t.persona_name}</span>
					</div>
					{r}
				</p.tz>,
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
				? ((e, t, r) => {
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
		return (
			<div
				key={`${e.instance_id}_${e.client_ts}_${t}`}
				className={this.GetTypeClassName(e)}
				onContextMenu={(t) => this.OnContextMenu(t, e)}
			>
				{e.type === T.X8.Chat && <F userType={i} />}
				{e.flair && (
					<span className={E.FlairContainer}>
						{this.AddLinksEmoticons(e.flair, false)}
					</span>
				)}
				{e.type === T.X8.Chat && <N userType={i} msg={e} presenterInfo={n} />}
				{e.type === T.X8.Chat &&
					this.m_chat.GetBroadcastSteamID() === e.steamid && (
						<span className={`${E.MessageNotification} ${E.MessageContents}`}>
							{` (${(0, Localize)("#BroadcastChat_Broadcaster")})`}
						</span>
					)}
				{e.type === T.X8.Chat &&
					this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) && (
						<span className={`${E.MessageNotification} ${E.MessageContents}`}>
							{` (${(0, Localize)("#BroadcastChat_Moderator")})`}
						</span>
					)}
				<span
					className={`${E.MessageContents} ${
						this.AddLinksEmoticons(e.msg, false).filter(
							(e) => e && typeof e == "string",
						).length
							? ""
							: E.EmoticonsOnly
					}`}
				>
					{e.type === T.X8.Chat ? " : " : ""}
					{this.FormatMessage(e, this.m_chat.TextFilterStore)}
				</span>
			</div>
		);
	}
	render() {
		const { hidden, bPartnerMemberOnlyChat, bInvertLayout } = this.props;
		const n = this.m_chat ? this.m_chat.m_rgChatMessages : [];
		const i = bInvertLayout ? n.reverse() : n;
		const a = this.m_chat
			? m.l.GetPresenterMapForBroadcasterSteamID(
					this.m_chat.GetBroadcastSteamID(),
				)
			: undefined;
		const s = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
		return (
			<div
				className={A_1(E.ChatPanel, "ChatPanel")}
				style={
					hidden
						? {
								display: "none",
							}
						: undefined
				}
			>
				<M.P latestAnnouncement={s} />
				{bInvertLayout && !!this.m_chat && (
					<O
						oChat={this.m_chat}
						emoticonStore={this.props.emoticonStore}
						bPartnerMemberOnlyChat={bPartnerMemberOnlyChat}
					/>
				)}
				<b.H />
				<div
					className={A_1(
						`${E.ChatMessages} ${A.minHeightZero}`,
						"ChatMessages",
					)}
					onScroll={this.HandleScroll}
					ref={this.messagesContainer}
				>
					{i.map((e, t) => this.RenderUserChatLine(e, t, a))}
				</div>
				<b.P />
				{!bInvertLayout && !!this.m_chat && (
					<O
						oChat={this.m_chat}
						emoticonStore={this.props.emoticonStore}
						bPartnerMemberOnlyChat={bPartnerMemberOnlyChat}
					/>
				)}
			</div>
		);
	}
};
function O(e) {
	const { oChat, emoticonStore, bPartnerMemberOnlyChat } = e;
	if (!bPartnerMemberOnlyChat || (v.iA?.logged_in && v.iA?.is_partner_member)) {
		if (v.iA?.logged_in) {
			return <P oChat={oChat} emoticonStore={emoticonStore} />;
		} else {
			return null;
		}
	} else {
		return <X />;
	}
}
function P(e) {
	const { oChat, emoticonStore } = e;
	const [n, setN] = o.useState("");
	const ARef = o.useRef();
	const l = q3(() => oChat.m_bRateLimited);
	const c = o.useCallback(
		(e) => {
			if (!e.shiftKey && e.charCode === 13) {
				if (!oChat.m_bRateLimited) {
					oChat.SendMessage(n);
					setN("");
				}
				e.preventDefault();
			}
		},
		[oChat, n],
	);
	const m = o.useCallback(
		(e, t = false) => {
			setN(`${n}ː${e}ː`);
			if (ARef?.current) {
				ARef.current.focus();
			}
		},
		[n, ARef],
	);
	let d = l || n.trim().length == 0;
	let p = A_1(A.chatSubmitButton, n.length == 0 && A.disabled);
	return (
		<div className={A_1(E.ChatEntryCtn, "ChatEntryCtn")}>
			<div className={A_1(E.ChatEntry, "ChatEntry")}>
				<form className={`${A.chatEntryControls}`}>
					<textarea
						className={A.chatTextarea}
						placeholder={(0, Localize)("#BroadcastChat_EnterResponse")}
						onKeyPress={c}
						onChange={(e) => setN(e.target.value)}
						value={n}
						ref={ARef}
					/>
					{l && (
						<Z
							nSeconds={oChat.m_nRateLimitSeconds}
							bRateLimited={oChat.m_bRateLimited}
						/>
					)}
					<button
						className={p}
						title={(0, Localize)("#ChatEntryButton_Submit")}
						disabled={d}
						onClick={() => {
							oChat.SendMessage(n);
							setN("");
						}}
					>
						<y.XTb />
					</button>
				</form>
				<div
					style={{
						height: "50px",
					}}
					className={`${A.chatEntryActionsContainer}`}
				>
					<div className={A.chatEntryActionsGroup}>
						<C.A
							disabled={false}
							OnEmoticonSelected={m}
							rtLastAckedNewEmoticons={Number.MAX_VALUE}
							emoticonStore={emoticonStore}
							emoticonHoverStore={u.s}
						/>
						<L {...e} textInputRef={ARef} />
					</div>
				</div>
			</div>
		</div>
	);
}
function L(e) {
	const { oChat, emoticonStore, textInputRef } = e;
	if (
		oChat.m_strFlairGroupID &&
		emoticonStore.flair_list &&
		emoticonStore.GetFlairListByGroupID(oChat.m_strFlairGroupID)?.length
	) {
		return (
			<C.A
				disabled={false}
				OnEmoticonSelected={(e) => {
					oChat.UpdateChatMessageFlair(e);
					if (textInputRef?.current) {
						textInputRef.current.focus();
					}
				}}
				rtLastAckedNewEmoticons={Number.MAX_VALUE}
				emoticonStore={emoticonStore}
				emoticonHoverStore={u.s}
				strFlairGroupID={oChat.m_strFlairGroupID}
				title={(0, Localize)("#ChatEntryButton_Flair")}
				buttonIcon={<y.P7r />}
			/>
		);
	} else {
		return null;
	}
}
Cg([i.sH], I.prototype, "m_chat", undefined);
Cg([B.oI], I.prototype, "StartChat", null);
Cg([B.oI], I.prototype, "HandleScroll", null);
Cg([B.oI], I.prototype, "OnContextMenu", null);
Cg([B.oI], I.prototype, "RenderUserChatLine", null);
I = Cg([a.PA], I);
class Z extends o.Component {
	render() {
		return (
			<div className={E.TimedProgressBarContainer}>
				<div className={E.wrapper}>
					<div
						className={`${E.spinner} ${E.pie}`}
						style={{
							animationDuration: `${this.props.nSeconds || 0}s`,
						}}
					/>
					<div
						className={`${E.filler} ${E.pie}`}
						style={{
							animationDuration: `${this.props.nSeconds || 0}s`,
						}}
					/>
					<div
						className={E.mask}
						style={{
							animationDuration: `${this.props.nSeconds || 0}s`,
						}}
					/>
				</div>
			</div>
		);
	}
}
function X(e) {
	return (
		<div className={E.Description}>
			<div className={E.LogInPrompt}>
				{(0, Localize)("#Broadcast_PartnerChat_Login")}
			</div>
			{!v.iA.logged_in && (
				<g.$n onClick={_.vg} className={A_1(E.SignInButton)}>
					{(0, Localize)("#Login_SignIn")}
				</g.$n>
			)}
		</div>
	);
}
