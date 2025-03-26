var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./23038.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./50376.js");
var l = require("./52912.js");
var c = require("./95773.js");
var m = require("./15855.js");
var u = require("./27847.js");
var d = require("./78060.js");
var A = require("./13869.js");
var p = require(/*webcrack:missing*/ "./69164.js");
var g = require(/*webcrack:missing*/ "./89193.js");
var h = require(/*webcrack:missing*/ "./41230.js");
var C = require(/*webcrack:missing*/ "./31084.js");
var _ = require(/*webcrack:missing*/ "./88750.js");
import { Localize } from "../../actual_src/utils/localization.js";
var b = require(/*webcrack:missing*/ "./52451.js");
var y = require("./98829.js");
var S = require("./65726.js");
var w = require("./92564.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var v = require("./88620.js");
var I = require(/*webcrack:missing*/ "./49455.js");
var E = require(/*webcrack:missing*/ "./79769.js");
var M = require(/*webcrack:missing*/ "./72476.js");
var T = require("./83665.js");
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
			(0, C.lX)(
				i.createElement(
					_.tz,
					null,
					i.createElement(
						_.kt,
						{
							onSelected: () => {
								this.CreateTextChannel(t);
							},
						},
						Localize("#GroupSettings_Channels_CreateText"),
					),
					i.createElement(
						_.kt,
						{
							onSelected: () => {
								this.CreateVoiceChannel(t);
							},
						},
						Localize("#GroupSettings_Channels_CreateVoice"),
					),
				),
				e,
			);
		}
	}
	CreateTextChannel(e) {
		(0, A.HT)(
			i.createElement(Ey, {
				ownerWin: e,
				groupView: this.props.groupView,
				bVoiceChannel: false,
				bJoinChannel: true,
			}),
			e,
		);
	}
	CreateVoiceChannel(e) {
		(0, A.HT)(
			i.createElement(Ey, {
				ownerWin: e,
				groupView: this.props.groupView,
				bVoiceChannel: true,
				bJoinChannel: true,
			}),
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
		const { groupView: e } = this.props;
		e.SetChannelListCollapsed(!e.isChannelListCollapsed);
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
			return i.createElement("div", {
				className: n,
			});
		} else {
			return i.createElement(
				"div",
				{
					className: n,
					onMouseEnter: this.OnMouseEnter,
					onMouseLeave: this.OnMouseLeave,
				},
				i.createElement(
					"div",
					{
						className: "chatRoomChannelGroups",
						onContextMenu: this.OnRoomsContextMenu,
					},
					t &&
						i.createElement(N, {
							groupView: this.props.groupView,
						}),
					i.createElement(G, {
						groupView: this.props.groupView,
					}),
					(!a || this.state.bMouseHover) &&
						i.createElement(
							"div",
							{
								className: "chatRoomGroupNavCollapseExpand",
								title: Localize(
									a ? "#Tooltip_PinChannelList" : "#Tooltip_UnpinChannelList",
								),
								onClick: this.ToggleCollapseExpand,
							},
							i.createElement(o.yUp, {
								bPinned: !a,
							}),
						),
				),
				i.createElement("div", {
					className: "disconnectBlocker",
				}),
			);
		}
	}
};
(0, n.Cg)([b.oI], aq.prototype, "OnRoomsContextMenu", null);
(0, n.Cg)([b.oI], aq.prototype, "OnMouseEnter", null);
(0, n.Cg)([b.oI], aq.prototype, "OnMouseLeave", null);
(0, n.Cg)([b.oI], aq.prototype, "ToggleCollapseExpand", null);
aq = (0, n.Cg)([h.PA], aq);
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
					(0, d.Ic)(
						this.props.ownerWin,
						Localize("#Generic_Error"),
						Localize("#Chat_CreateChatRoom_GenericError"),
					);
					this.props.closeModal();
				});
		}
	}
	render() {
		return i.createElement(
			A.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			i.createElement(
				s.U9,
				{
					classNameContent: "CreateChatChannelDialog",
					onSubmit: this.OnSubmit,
				},
				i.createElement(
					s.Y9,
					null,
					Localize(
						this.props.bVoiceChannel
							? "#GroupSettings_Channels_CreateVoice"
							: "#GroupSettings_Channels_CreateText",
					),
				),
				i.createElement(
					s.nB,
					null,
					i.createElement(s.pd, {
						ref: (e) => {
							this.m_refInput = e;
						},
						autoFocus: true,
						label: Localize("#Chat_SaveVoiceRoom_Name"),
					}),
				),
				i.createElement(
					s.wi,
					null,
					i.createElement(s.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
}
export function Nq(e, t, r) {
	(0, A.HT)(
		i.createElement(Ey, {
			ownerWin: e,
			groupView: t,
			bVoiceChannel: r,
			bJoinChannel: true,
		}),
		e,
		"CreateChatChannelDialog",
		{
			strTitle: Localize("#GroupSettings_Channels_CreateText"),
			popupWidth: 800,
			popupHeight: 400,
		},
		(0, l.h8)(e),
	);
}
(0, n.Cg)([b.oI], Ey.prototype, "OnSubmit", null);
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
		return i.createElement(
			"div",
			{
				className: "chatRoomTextChannelsGroup",
			},
			i.createElement(
				"div",
				{
					className: "ChannelTypeTitle",
					title: Localize("#Tooltip_TextChannel"),
					onClick: this.OnCreateNewTextChannel,
				},
				i.createElement(
					"div",
					{
						className: "ChannelTypeLabel" + (r ? "" : " NoPermission"),
						title: r
							? Localize("#Tooltip_TextChannelCreate")
							: Localize("#Tooltip_NoPermissionChannelCreate"),
					},
					r
						? Localize("#Chat_AddTextChat")
						: Localize("#Chat_CreateTextChannel_DefaultName"),
				),
				i.createElement(
					"div",
					{
						className: "ChatRoomAddRoomBtn",
						title: Localize("#Tooltip_TextChannelCreate"),
					},
					i.createElement(o.f5w, null),
				),
			),
			t.map((t) =>
				i.createElement(tc, {
					key: t.unique_id,
					chat: t,
					bRenameActive: e.IsRoomRenameActive(t.GetRoomID()),
					bActiveChat: t == e.GetActiveChatView().chat,
					bDefaultRoom: t == e.GetGroup().GetDefaultChatRoom(),
					onStartRename: this.OnStartChannelRename,
					onRename: this.OnChannelRename,
					onEndRename: this.OnEndChannelRename,
				}),
			),
		);
	}
};
(0, n.Cg)([b.oI], N.prototype, "OnCreateNewTextChannel", null);
(0, n.Cg)([b.oI], N.prototype, "OnStartChannelRename", null);
(0, n.Cg)([b.oI], N.prototype, "OnChannelRename", null);
(0, n.Cg)([b.oI], N.prototype, "OnEndChannelRename", null);
N = (0, n.Cg)([h.PA], N);
export let tc = class extends i.Component {
	containerRef = i.createRef();
	ToggleTextChat() {
		if (this.props.bRenameActive) {
			return;
		}
		let e = c.xm.UIStore.IsChatRoomGroupActive(
			(0, l.wj)(this.containerRef.current),
			this.props.chat.GetGroup(),
		);
		let t = c.xm.UIStore.ShowAndOrActivateChatRoomGroup(
			(0, l.wj)(this.containerRef.current),
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
			(0, u.ae)(
				(0, l.CO)(e),
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
		return i.createElement(
			p.Z,
			{
				focusable: true,
				className: t,
				onClick: this.ToggleTextChat,
				onGamepadFocus: this.props.onFocus,
				onMenuButton: a ? this.OnContextMenu : undefined,
				onMenuActionDescription: a
					? Localize("#Chat_ChatRoomGroup_Options")
					: undefined,
				onContextMenu: this.OnContextMenu,
				ref: this.containerRef,
			},
			i.createElement(S.RB, {
				chat: e,
			}),
			i.createElement(
				"div",
				{
					className: "chatRoomTextChannelIcon",
				},
				s ? i.createElement(o.yFA, null) : i.createElement(o.tcj, null),
			),
			!n &&
				i.createElement(
					"div",
					{
						className: r,
					},
					e.BIsDefaultRoom() ? Localize("#Chat_DefaultChannelName") : e.name,
				),
			!this.props.bDefaultRoom &&
				n &&
				i.createElement(P, {
					chat: this.props.chat,
					onRename: this.props.onRename,
					onEndRename: this.props.onEndRename,
				}),
		);
	}
};
(0, n.Cg)([b.oI], tc.prototype, "ToggleTextChat", null);
(0, n.Cg)([b.oI], tc.prototype, "OnContextMenu", null);
tc = (0, n.Cg)([h.PA], tc);
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
		return i.createElement(
			"div",
			{
				className: "chatRoomVoiceChannelsGroup",
			},
			i.createElement(
				"div",
				{
					className: "ChannelTypeTitle",
					title: Localize("#Tooltip_VoiceChannelCreate"),
					onClick: this.CreateVoiceRoom,
				},
				i.createElement(
					"div",
					{
						className: "ChannelTypeLabel",
					},
					Localize("#Chat_AddVoiceChat"),
				),
				i.createElement(
					"div",
					{
						className: "ChatRoomAddRoomBtn",
						title: Localize("#Tooltip_VoiceChannelCreate"),
					},
					i.createElement(o.f5w, null),
				),
			),
			t.map((t) =>
				i.createElement(mr, {
					key: t.unique_id,
					context: "VoiceRoomsGroup",
					chat: t,
					bRenameActive: e.GetRenameRoomID() == t.GetRoomID(),
					onSelect: () => {
						this.OnVoiceRoomSelected(t);
					},
					onStartRename: this.OnStartChannelRename,
					onRename: this.OnChannelRename,
					onEndRename: this.OnEndChannelRename,
				}),
			),
		);
	}
};
(0, n.Cg)([b.oI], G.prototype, "CreateVoiceRoom", null);
(0, n.Cg)([b.oI], G.prototype, "OnVoiceRoomSelected", null);
(0, n.Cg)([b.oI], G.prototype, "OnStartChannelRename", null);
(0, n.Cg)([b.oI], G.prototype, "OnChannelRename", null);
(0, n.Cg)([b.oI], G.prototype, "OnEndChannelRename", null);
G = (0, n.Cg)([h.PA], G);
export let mr = class extends i.Component {
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
			(0, u.ae)(
				(0, l.CO)(e),
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
		(0, v.E5)(
			(0, l.CO)(e),
			e.currentTarget.ownerDocument.defaultView,
			this.props.chat.GetGroup(),
			this.props.chat,
		);
		e.stopPropagation();
	}
	OnDragEnter(e, t) {
		(0, I.w)(
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
		(0, I.w)(
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
					(0, w.nn)(
						{
							invitee: r.friend,
							chatview: null,
							invitedto: this.props.chat,
						},
						(0, l.CO)(t),
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
			return i.createElement(
				T.M,
				{
					key: e.accountid,
					classNames: "friend-anim",
					timeout: 320,
				},
				(r) =>
					i.createElement(y.bP, {
						divRef: r,
						friend: e,
						key: e.accountid,
						context: this.GetFriendContext(),
						showVoiceLevel: true,
						bInVoiceList: true,
						video: t,
					}),
			);
		});
		let A = this.props.chat.voice_active_contains_friends;
		if (r && !this.props.chat.voice_active_contains_self) {
			if (d.length == 0) {
				l = true;
			}
			A = true;
			d.push(
				i.createElement(
					T.M,
					{
						key: n,
						classNames: "friend-anim",
						timeout: 320,
					},
					(e) =>
						i.createElement(y.bP, {
							divRef: e,
							friend: s,
							key: n,
							context: this.GetFriendContext(),
							showVoiceLevel: true,
						}),
				),
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
		return i.createElement(
			m.D,
			{
				focusable: true,
				className: p.join(" "),
				onClick: this.props.onSelect,
				onGamepadFocus: this.props.onFocus,
				...this.GetDragDropProps(),
				ref: this.props.containerRef,
			},
			i.createElement("div", {
				className: "chatRoomVoiceChannelIconGlow",
			}),
			i.createElement(
				"div",
				{
					className: "chatRoomVoiceChannelNameContainer",
					onContextMenu: this.OnContextMenu,
				},
				i.createElement(
					"div",
					{
						className: "chatRoomVoiceChannelIcon",
					},
					i.createElement(o.mrd, null),
				),
				!this.props.bRenameActive &&
					i.createElement(
						"div",
						{
							className:
								"chatRoomVoiceChannelName" + (g ? " unsavedVoiceChannel" : ""),
						},
						h,
					),
				this.props.bRenameActive &&
					i.createElement(P, {
						chat: this.props.chat,
						onRename: this.props.onRename,
						onEndRename: this.props.onEndRename,
					}),
				!this.props.bRenameActive &&
					!this.context?.IN_GAMEPADUI &&
					i.createElement(
						i.Fragment,
						null,
						i.createElement(
							"div",
							{
								onContextMenu: this.OnContextMenu,
								onClick: this.OnContextMenu,
								className: "VoiceControlPanelButton chatPinRoom",
								title: Localize("#Chat_ChannelOptions"),
							},
							i.createElement(o.GB9, null),
						),
					),
			),
			i.createElement(
				"div",
				{
					className: "VoiceChannelParticipants CompactFriendsList",
				},
				!A && d,
				A &&
					i.createElement(
						a.A,
						{
							enter: true,
							exit: true,
						},
						d,
					),
			),
			i.createElement(
				"div",
				{
					className: u,
				},
				Localize("#Chat_VoiceEmptyChannel"),
			),
			!this.context?.IN_GAMEPADUI &&
				i.createElement(y.lg, {
					name: h,
					chat: this.props.chat,
					nostatus: true,
				}),
			!t &&
				i.createElement(tc, {
					chat: this.props.chat,
					bRenameActive: false,
					bActiveChat: false,
					bDefaultRoom: false,
				}),
			i.createElement("div", {
				className: "ScratchPadConnect",
			}),
			this.state.bDropConfirmationNotice &&
				i.createElement(
					"div",
					{
						className:
							"dropConfirmationNotice" +
							(this.state.bDropConfirmationNotice ? " Active" : ""),
					},
					i.createElement(
						"div",
						{
							className: "dropConfirmationLabel",
						},
						i.createElement("img", {
							className: "avatar",
							src: this.m_dropInviteInvitee.persona.avatar_url_medium,
						}),
					),
				),
			i.createElement("div", {
				className: "dropTargetBox",
			}),
		);
	}
};
(0, n.Cg)([b.oI], mr.prototype, "OnContextMenu", null);
(0, n.Cg)([b.oI], mr.prototype, "InviteToChat", null);
(0, n.Cg)([b.oI], mr.prototype, "OnDragEnter", null);
(0, n.Cg)([b.oI], mr.prototype, "OnDragLeave", null);
(0, n.Cg)([b.oI], mr.prototype, "OnDragOver", null);
(0, n.Cg)([b.oI], mr.prototype, "OnDrop", null);
mr = (0, n.Cg)([h.PA], mr);
let P = class extends i.Component {
	m_strValue = "";
	constructor(e) {
		super(e);
		(0, g.Gn)(this);
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
		return i.createElement(
			"form",
			{
				className: "RenameChatRoomInline",
				onSubmit: this.OnSubmit,
			},
			i.createElement("input", {
				ref: this.BindInputRef,
				type: "text",
				value: this.m_strValue,
				onChange: this.OnChange,
				onBlur: this.OnBlur,
			}),
		);
	}
};
(0, n.Cg)([g.sH], P.prototype, "m_strValue", undefined);
(0, n.Cg)([b.oI], P.prototype, "BindInputRef", null);
(0, n.Cg)([b.oI], P.prototype, "OnChange", null);
(0, n.Cg)([b.oI], P.prototype, "OnSubmit", null);
(0, n.Cg)([b.oI], P.prototype, "OnGlobalKeyDown", null);
(0, n.Cg)([b.oI], P.prototype, "OnBlur", null);
P = (0, n.Cg)([h.PA], P);
