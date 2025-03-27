import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./23038.js";
import s from "./64608.js";
import o from "./50376.js";
import l, { h8, wj, CO } from "./52912.js";
import c from "./95773.js";
import m from "./15855.js";
import u, { ae } from "./27847.js";
import d, { Ic } from "./78060.js";
import A, { HT } from "./13869.js";
import p from "./69164.js";
import g, { Gn } from "./89193.js";
import h from "./41230.js";
import { lX } from "./31084.js";
import _ from "./88750.js";
import b from "./52451.js";
import y from "./98829.js";
import S from "./65726.js";
import w, { nn } from "./92564.js";
import { E5 } from "./88620.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import E from "./79769.js";
import M from "./72476.js";
import T from "./83665.js";
export let aq = class extends i.Component {
	m_schHoverDelay = new E.LU();
	constructor(e) {
		super(e);
		this.state = {
			bCollapsed: false,
			bMouseHover: false,
		};
	}
	OnRoomsContextMenu(e) {
		if (this.props.groupView.GetGroup().BCanAdminChannel()) {
			let t = e.currentTarget.ownerDocument.defaultView;
			lX(
				<_.tz>
					<_.kt
						onSelected={() => {
							this.CreateTextChannel(t);
						}}
					>
						{Localize("#GroupSettings_Channels_CreateText")}
					</_.kt>
					<_.kt
						onSelected={() => {
							this.CreateVoiceChannel(t);
						}}
					>
						{Localize("#GroupSettings_Channels_CreateVoice")}
					</_.kt>
				</_.tz>,
				e,
			);
		}
	}
	CreateTextChannel(e) {
		HT(
			<Ey
				ownerWin={e}
				groupView={this.props.groupView}
				bVoiceChannel={false}
				bJoinChannel
			/>,
			e,
		);
	}
	CreateVoiceChannel(e) {
		HT(
			<Ey
				ownerWin={e}
				groupView={this.props.groupView}
				bVoiceChannel
				bJoinChannel
			/>,
			e,
		);
	}
	OnMouseEnter(e) {
		this.m_schHoverDelay.Schedule(400, () => {
			this.setState({
				bMouseHover: true,
			});
		});
	}
	OnMouseLeave(e) {
		this.setState({
			bMouseHover: false,
		});
		this.m_schHoverDelay.Cancel();
	}
	ToggleCollapseExpand() {
		const { groupView } = this.props;
		groupView.SetChannelListCollapsed(!groupView.isChannelListCollapsed);
	}
	render() {
		let e = this.props.groupView.GetGroup();
		let t = e.IsNamedGroupChat();
		let r = false;
		let n = "chatRoomGroupNavColumn";
		let a = this.props.groupView.isChannelListCollapsed;
		if (e.voiceRoomList.length != 0 || t) {
			if (a && !this.state.bMouseHover) {
				n += " chatRoomGroupNavCollapsed";
			}
		} else {
			r = true;
			n += " defaultChatOnly";
		}
		if (this.props.inactive || r) {
			return <div className={n} />;
		} else {
			return (
				<div
					className={n}
					onMouseEnter={this.OnMouseEnter}
					onMouseLeave={this.OnMouseLeave}
				>
					<div
						className="chatRoomChannelGroups"
						onContextMenu={this.OnRoomsContextMenu}
					>
						{t && <N groupView={this.props.groupView} />}
						<G groupView={this.props.groupView} />
						{(!a || this.state.bMouseHover) && (
							<div
								className="chatRoomGroupNavCollapseExpand"
								title={Localize(
									a ? "#Tooltip_PinChannelList" : "#Tooltip_UnpinChannelList",
								)}
								onClick={this.ToggleCollapseExpand}
							>
								<o.yUp bPinned={!a} />
							</div>
						)}
					</div>
					<div className="disconnectBlocker" />
				</div>
			);
		}
	}
};
Cg([b.oI], aq.prototype, "OnRoomsContextMenu", null);
Cg([b.oI], aq.prototype, "OnMouseEnter", null);
Cg([b.oI], aq.prototype, "OnMouseLeave", null);
Cg([b.oI], aq.prototype, "ToggleCollapseExpand", null);
aq = Cg([h.PA], aq);
export class Ey extends i.Component {
	m_refInput;
	OnSubmit() {
		let e = this.m_refInput && this.m_refInput.value;
		if (e) {
			this.props.groupView
				.GetGroup()
				.CreateChatRoom(e, this.props.bVoiceChannel)
				.then((e) => {
					if (e) {
						this.props.closeModal();
						if (this.props.bJoinChannel) {
							if (this.props.bVoiceChannel) {
								e.StartVoiceChat();
							} else {
								this.props.groupView.SelectChat(e.GetRoomID());
							}
						}
					}
				})
				.catch((e) => {
					Ic(
						this.props.ownerWin,
						Localize("#Generic_Error"),
						Localize("#Chat_CreateChatRoom_GenericError"),
					);
					this.props.closeModal();
				});
		}
	}
	render() {
		return (
			<A.x_ onEscKeypress={this.props.closeModal}>
				<s.U9
					classNameContent="CreateChatChannelDialog"
					onSubmit={this.OnSubmit}
				>
					<s.Y9>
						{Localize(
							this.props.bVoiceChannel
								? "#GroupSettings_Channels_CreateVoice"
								: "#GroupSettings_Channels_CreateText",
						)}
					</s.Y9>
					<s.nB>
						<s.pd
							ref={(e) => {
								this.m_refInput = e;
							}}
							autoFocus
							label={Localize("#Chat_SaveVoiceRoom_Name")}
						/>
					</s.nB>
					<s.wi>
						<s.CB onCancel={this.props.closeModal} />
					</s.wi>
				</s.U9>
			</A.x_>
		);
	}
}
export function Nq(e, t, r) {
	HT(
		<Ey ownerWin={e} groupView={t} bVoiceChannel={r} bJoinChannel />,
		e,
		"CreateChatChannelDialog",
		{
			strTitle: Localize("#GroupSettings_Channels_CreateText"),
			popupWidth: 800,
			popupHeight: 400,
		},
		h8(e),
	);
}
Cg([b.oI], Ey.prototype, "OnSubmit", null);
let N = class extends i.Component {
	OnCreateNewTextChannel(e) {
		let t = GetOwningWindowForEvent(e);
		if (this.props.groupView.GetGroup().BCanAdminChannel()) {
			Nq(t, this.props.groupView, false);
		}
	}
	OnStartChannelRename(e) {
		this.props.groupView.StartRoomRename(e);
	}
	OnChannelRename(e, t) {
		this.props.groupView.GetGroup().RenameRoom(e, t);
	}
	OnEndChannelRename() {
		this.props.groupView.EndRoomRename();
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetGroup().textRoomList;
		let r = e.GetGroup().BCanAdminChannel();
		e.isChannelListCollapsed;
		return (
			<div className="chatRoomTextChannelsGroup">
				<div
					className="ChannelTypeTitle"
					title={Localize("#Tooltip_TextChannel")}
					onClick={this.OnCreateNewTextChannel}
				>
					<div
						className={`ChannelTypeLabel${r ? "" : " NoPermission"}`}
						title={
							r
								? Localize("#Tooltip_TextChannelCreate")
								: Localize("#Tooltip_NoPermissionChannelCreate")
						}
					>
						{r
							? Localize("#Chat_AddTextChat")
							: Localize("#Chat_CreateTextChannel_DefaultName")}
					</div>
					<div
						className="ChatRoomAddRoomBtn"
						title={Localize("#Tooltip_TextChannelCreate")}
					>
						<o.f5w />
					</div>
				</div>
				{t.map((t) => (
					<Tc
						key={t.unique_id}
						chat={t}
						bRenameActive={e.IsRoomRenameActive(t.GetRoomID())}
						bActiveChat={t == e.GetActiveChatView().chat}
						bDefaultRoom={t == e.GetGroup().GetDefaultChatRoom()}
						onStartRename={this.OnStartChannelRename}
						onRename={this.OnChannelRename}
						onEndRename={this.OnEndChannelRename}
					/>
				))}
			</div>
		);
	}
};
Cg([b.oI], N.prototype, "OnCreateNewTextChannel", null);
Cg([b.oI], N.prototype, "OnStartChannelRename", null);
Cg([b.oI], N.prototype, "OnChannelRename", null);
Cg([b.oI], N.prototype, "OnEndChannelRename", null);
N = Cg([h.PA], N);
export let Tc = class extends i.Component {
	containerRef = i.createRef();
	ToggleTextChat() {
		if (this.props.bRenameActive) {
			return;
		}
		let e = c.xm.UIStore.IsChatRoomGroupActive(
			wj(this.containerRef.current),
			this.props.chat.GetGroup(),
		);
		let t = c.xm.UIStore.ShowAndOrActivateChatRoomGroup(
			wj(this.containerRef.current),
			this.props.chat.GetGroup(),
			false,
		);
		let r = t.GetPopoverChatView();
		if (e && r && r.chat && r.chat == this.props.chat) {
			t.ClosePopoverChat();
		} else {
			t.SelectChat(this.props.chat.GetRoomID());
		}
	}
	OnContextMenu(e) {
		if (!this.props.bRenameActive) {
			ae(
				CO(e),
				this.props.chat.GetGroup(),
				this.props.chat.GetRoomID(),
				e,
				this.props.onStartRename,
			);
		}
	}
	render() {
		let e = this.props.chat;
		let t = "chatRoomTextChannel";
		if (this.props.bActiveChat) {
			t += " ActiveTextChannel";
		}
		let r = "chatRoomTextChannelName";
		if (this.props.bDefaultRoom) {
			r += " IsCommonsChannel";
		}
		let n = this.props.bRenameActive && !this.props.chat.GetVoiceAllowed();
		let a = e.GetGroup().GetDefaultChatID() != e.GetRoomID();
		let s =
			c.xm.ChatStore.VoiceChat.GetActiveVoiceChatID() ==
			this.props.chat.GetRoomID();
		return (
			<p.Z
				focusable
				className={t}
				onClick={this.ToggleTextChat}
				onGamepadFocus={this.props.onFocus}
				onMenuButton={a ? this.OnContextMenu : undefined}
				onMenuActionDescription={
					a ? Localize("#Chat_ChatRoomGroup_Options") : undefined
				}
				onContextMenu={this.OnContextMenu}
				ref={this.containerRef}
			>
				<S.RB chat={e} />
				<div className="chatRoomTextChannelIcon">
					{s ? <o.yFA /> : <o.tcj />}
				</div>
				{!n && (
					<div className={r}>
						{e.BIsDefaultRoom() ? Localize("#Chat_DefaultChannelName") : e.name}
					</div>
				)}
				{!this.props.bDefaultRoom && n && (
					<P
						chat={this.props.chat}
						onRename={this.props.onRename}
						onEndRename={this.props.onEndRename}
					/>
				)}
			</p.Z>
		);
	}
};
Cg([b.oI], Tc.prototype, "ToggleTextChat", null);
Cg([b.oI], Tc.prototype, "OnContextMenu", null);
Tc = Cg([h.PA], Tc);
let G = class extends i.Component {
	CreateVoiceRoom() {
		this.props.groupView.GetGroup().CreateAndJoinTempVoiceRoom();
	}
	OnVoiceRoomSelected(e) {
		if (this.props.groupView.GetRenameRoomID() != e.GetRoomID()) {
			if (c.xm.ChatStore.VoiceChat.GetActiveVoiceChatID() != e.GetRoomID()) {
				this.props.groupView.ClosePopoverChat();
				e.StartVoiceChat();
			}
		}
	}
	OnStartChannelRename(e) {
		this.props.groupView.StartRoomRename(e);
	}
	OnChannelRename(e, t) {
		this.props.groupView.GetGroup().RenameRoom(e, t);
	}
	OnEndChannelRename() {
		this.props.groupView.EndRoomRename();
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetGroup().voiceRoomList;
		return (
			<div className="chatRoomVoiceChannelsGroup">
				<div
					className="ChannelTypeTitle"
					title={Localize("#Tooltip_VoiceChannelCreate")}
					onClick={this.CreateVoiceRoom}
				>
					<div className="ChannelTypeLabel">
						{Localize("#Chat_AddVoiceChat")}
					</div>
					<div
						className="ChatRoomAddRoomBtn"
						title={Localize("#Tooltip_VoiceChannelCreate")}
					>
						<o.f5w />
					</div>
				</div>
				{t.map((t) => (
					<Mr
						key={t.unique_id}
						context="VoiceRoomsGroup"
						chat={t}
						bRenameActive={e.GetRenameRoomID() == t.GetRoomID()}
						onSelect={() => {
							this.OnVoiceRoomSelected(t);
						}}
						onStartRename={this.OnStartChannelRename}
						onRename={this.OnChannelRename}
						onEndRename={this.OnEndChannelRename}
					/>
				))}
			</div>
		);
	}
};
Cg([b.oI], G.prototype, "CreateVoiceRoom", null);
Cg([b.oI], G.prototype, "OnVoiceRoomSelected", null);
Cg([b.oI], G.prototype, "OnStartChannelRename", null);
Cg([b.oI], G.prototype, "OnChannelRename", null);
Cg([b.oI], G.prototype, "OnEndChannelRename", null);
G = Cg([h.PA], G);
export let Mr = class extends i.Component {
	static contextType = M.QO;
	m_dropConfirmationInterval;
	m_dropInviteInvitee;
	constructor(e) {
		super(e);
		this.state = {
			dropToInviteFriend: undefined,
			bDropConfirmationNotice: false,
		};
	}
	OnContextMenu(e) {
		if (!this.props.bRenameActive) {
			ae(
				CO(e),
				this.props.chat.GetGroup(),
				this.props.chat.GetRoomID(),
				e,
				this.props.onStartRename,
			);
		}
		e.preventDefault();
		e.stopPropagation();
	}
	InviteToChat(e) {
		E5(
			CO(e),
			e.currentTarget.ownerDocument.defaultView,
			this.props.chat.GetGroup(),
			this.props.chat,
		);
		e.stopPropagation();
	}
	OnDragEnter(e, t) {
		AssertMsg(
			e && e.type == "friend",
			"Invalid type passed to VoiceRoom.OnDragEnter",
		);
		if (e) {
			let t = e;
			if (t.friend) {
				this.setState({
					dropToInviteFriend: t.friend,
				});
			}
		}
		return true;
	}
	OnDragLeave() {
		if (this.state.dropToInviteFriend) {
			this.setState({
				dropToInviteFriend: undefined,
			});
		}
	}
	OnDragOver(e) {
		e.dataTransfer.dropEffect = "move";
	}
	OnDrop(e, t) {
		AssertMsg(
			e && e.type == "friend",
			"Invalid data type passed to ChatRoomGroupDialog.OnDrop",
		);
		if (e && e.type == "friend") {
			let r = e;
			if (r.friend && r.friend != c.xm.FriendStore.self) {
				if (this.state.dropToInviteFriend) {
					this.setState({
						dropToInviteFriend: undefined,
					});
				}
				l.ZM.DragDropManager.SetDropConsumed();
				let e = t.currentTarget.ownerDocument.defaultView;
				if (this.props.chat.GetGroup().BIsUserGroupMember(r.friend)) {
					this.props.chat
						.GetGroup()
						.InviteFriend(r.friend.accountid, this.props.chat);
					this.setState({
						bDropConfirmationNotice: true,
					});
					this.m_dropInviteInvitee = r.friend;
					this.m_dropConfirmationInterval = window.setInterval(() => {
						this.setState({
							bDropConfirmationNotice: false,
						});
						window.clearInterval(this.m_dropConfirmationInterval);
					}, 1200);
				} else {
					nn(
						{
							invitee: r.friend,
							chatview: null,
							invitedto: this.props.chat,
						},
						CO(t),
						e,
					);
				}
			}
		}
	}
	GetDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend"],
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragOver = this.OnDragOver;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDrop = this.OnDrop;
		return e;
	}
	m_FriendContext;
	GetFriendContext() {
		let e =
			this.props.chat && this.props.chat.GetGroup().readyToRender
				? this.props.chat
				: null;
		if (!this.m_FriendContext || this.m_FriendContext.chat != e) {
			this.m_FriendContext = {
				chat: e,
			};
		}
		return this.m_FriendContext;
	}
	render() {
		let e = this.props.chat.GetGroup();
		let t = this.props.chat == e.GetDefaultChatRoom();
		let r =
			c.xm.ChatStore.VoiceChat.GetActiveVoiceChatID() ==
			this.props.chat.GetRoomID();
		let n = c.xm.CMInterface.steamid.GetAccountID();
		let s = c.xm.FriendStore.GetPlayer(n);
		let l = this.props.chat.voice_active_contains_only_self;
		let u = "emptyChannelNotice";
		let d = this.props.chat.voice_active_member_list.member_list.map((e) => {
			let t = c.xm.ChatStore.VoiceChat.GetUserSendsVideo(e.accountid)
				? c.xm.ChatStore.VoiceChat.video_streams.find(
						(t) => t.accountid == e.accountid,
					)
				: undefined;
			return (
				<T.M key={e.accountid} classNames="friend-anim" timeout={320}>
					{(r) => (
						<y.bP
							divRef={r}
							friend={e}
							key={e.accountid}
							context={this.GetFriendContext()}
							showVoiceLevel
							bInVoiceList
							video={t}
						/>
					)}
				</T.M>
			);
		});
		let A = this.props.chat.voice_active_contains_friends;
		if (r && !this.props.chat.voice_active_contains_self) {
			if (d.length == 0) {
				l = true;
			}
			A = true;
			d.push(
				<T.M key={n} classNames="friend-anim" timeout={320}>
					{(e) => (
						<y.bP
							divRef={e}
							friend={s}
							key={n}
							context={this.GetFriendContext()}
							showVoiceLevel
						/>
					)}
				</T.M>,
			);
		}
		let p = ["chatRoomVoiceChannel"];
		if (r) {
			p.push("ActiveVoiceChannel");
		}
		if (!A && this.props.context == "ChatRoomList") {
			p.push("MinimizeMemberList");
		}
		if (this.state.dropToInviteFriend) {
			p.push("voiceRoomActiveDrop");
		}
		if (r && l) {
			u += " Visible";
		}
		let g = this.props.chat.IsUnsavedVoiceChannel();
		let h = this.props.chat.name;
		return (
			<m.D
				focusable
				className={p.join(" ")}
				onClick={this.props.onSelect}
				onGamepadFocus={this.props.onFocus}
				{...this.GetDragDropProps()}
				ref={this.props.containerRef}
			>
				<div className="chatRoomVoiceChannelIconGlow" />
				<div
					className="chatRoomVoiceChannelNameContainer"
					onContextMenu={this.OnContextMenu}
				>
					<div className="chatRoomVoiceChannelIcon">
						<o.mrd />
					</div>
					{!this.props.bRenameActive && (
						<div
							className={`chatRoomVoiceChannelName${
								g ? " unsavedVoiceChannel" : ""
							}`}
						>
							{h}
						</div>
					)}
					{this.props.bRenameActive && (
						<P
							chat={this.props.chat}
							onRename={this.props.onRename}
							onEndRename={this.props.onEndRename}
						/>
					)}
					{!this.props.bRenameActive && !this.context?.IN_GAMEPADUI && (
						<>
							<div
								onContextMenu={this.OnContextMenu}
								onClick={this.OnContextMenu}
								className="VoiceControlPanelButton chatPinRoom"
								title={Localize("#Chat_ChannelOptions")}
							>
								<o.GB9 />
							</div>
						</>
					)}
				</div>
				<div className="VoiceChannelParticipants CompactFriendsList">
					{!A && d}
					{A && (
						<a.A enter exit>
							{d}
						</a.A>
					)}
				</div>
				<div className={u}>{Localize("#Chat_VoiceEmptyChannel")}</div>
				{!this.context?.IN_GAMEPADUI && (
					<y.lg name={h} chat={this.props.chat} nostatus />
				)}
				{!t && (
					<Tc
						chat={this.props.chat}
						bRenameActive={false}
						bActiveChat={false}
						bDefaultRoom={false}
					/>
				)}
				<div className="ScratchPadConnect" />
				{this.state.bDropConfirmationNotice && (
					<div
						className={`dropConfirmationNotice${
							this.state.bDropConfirmationNotice ? " Active" : ""
						}`}
					>
						<div className="dropConfirmationLabel">
							<img
								className="avatar"
								src={this.m_dropInviteInvitee.persona.avatar_url_medium}
							/>
						</div>
					</div>
				)}
				<div className="dropTargetBox" />
			</m.D>
		);
	}
};
Cg([b.oI], Mr.prototype, "OnContextMenu", null);
Cg([b.oI], Mr.prototype, "InviteToChat", null);
Cg([b.oI], Mr.prototype, "OnDragEnter", null);
Cg([b.oI], Mr.prototype, "OnDragLeave", null);
Cg([b.oI], Mr.prototype, "OnDragOver", null);
Cg([b.oI], Mr.prototype, "OnDrop", null);
Mr = Cg([h.PA], Mr);
let P = class extends i.Component {
	m_strValue = "";
	constructor(e) {
		super(e);
		Gn(this);
		this.m_strValue = this.props.chat.name;
	}
	componentDidUpdate(e) {
		if (e.chat !== this.props.chat) {
			this.m_strValue = this.props.chat.name;
		}
	}
	componentDidMount() {
		window.addEventListener("keydown", this.OnGlobalKeyDown, false);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.OnGlobalKeyDown, false);
	}
	BindInputRef(e) {
		if (e) {
			e.focus();
		}
	}
	OnChange(e) {
		this.m_strValue = e.target.value;
	}
	OnSubmit(e) {
		this.SubmitAndClose();
		e.preventDefault();
	}
	OnGlobalKeyDown(e) {
		if (e.keyCode == 27) {
			this.Close();
		}
	}
	OnBlur(e) {
		this.SubmitAndClose();
	}
	SubmitAndClose() {
		this.props.onRename(this.props.chat.GetRoomID(), this.m_strValue);
		this.Close();
	}
	Close() {
		this.props.onEndRename();
	}
	render() {
		return (
			<form className="RenameChatRoomInline" onSubmit={this.OnSubmit}>
				<input
					ref={this.BindInputRef}
					type="text"
					value={this.m_strValue}
					onChange={this.OnChange}
					onBlur={this.OnBlur}
				/>
			</form>
		);
	}
};
Cg([g.sH], P.prototype, "m_strValue", undefined);
Cg([b.oI], P.prototype, "BindInputRef", null);
Cg([b.oI], P.prototype, "OnChange", null);
Cg([b.oI], P.prototype, "OnSubmit", null);
Cg([b.oI], P.prototype, "OnGlobalKeyDown", null);
Cg([b.oI], P.prototype, "OnBlur", null);
P = Cg([h.PA], P);
