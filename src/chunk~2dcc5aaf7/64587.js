var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./3756.js");
var a = require("./8653.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var u = require("./98829.js");
var d = require("./89397.js");
var _A = d;
var p = require(/*webcrack:missing*/ "./50376.js");
var g = require("./53414.js");
var h = require("./95773.js");
var C = require("./72655.js");
var _ = require("./64608.js");
var f = require(/*webcrack:missing*/ "./52451.js");
var b = require("./95377.js");
var y = require("./78060.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var w = require("./13869.js");
require(/*webcrack:missing*/ "./72476.js");
var B = require("./40357.js");
const v = (e) => {
	const t = o.useRef();
	return o.createElement(
		w.x_,
		{
			onEscKeypress: e.closeModal,
		},
		o.createElement(
			_.U9,
			{
				classNameContent: "CreateChatChannelDialog",
				onSubmit: () => {
					e.onResult(t.current.value);
					e.closeModal();
				},
			},
			o.createElement(_.Y9, null, Localize(e.title)),
			o.createElement(
				_.nB,
				null,
				o.createElement(_.pd, {
					ref: t,
					autoFocus: true,
				}),
			),
			o.createElement(
				_.wi,
				null,
				o.createElement(_.CB, {
					onCancel: e.closeModal,
				}),
			),
		),
	);
};
export const A = (0, s.PA)((e) => {
	const t = e.fnOKButton != null;
	const r = e.chatRoom.GetGroup().BCanAdminChannel();
	const n = e.chatRoom.IsTempVoiceRoom();
	let i = e.chatRoom.BVoiceActive();
	let a = e.chatRoom.voice_active_member_list.member_list.length > 0;
	return o.createElement(
		C.YZ,
		{
			focusable: true,
			className: (0, c.A)(
				_A.GroupRoomContainer,
				i && _A.UserInRoom,
				a && _A.ActiveVoiceRoom,
			),
			onOKButton: e.fnOKButton,
			onOKActionDescription:
				e.strOKActionDescription ?? Localize("#VoiceChat_ManageRoom"),
			onSecondaryButton: e.fnSecondaryButton,
			onSecondaryActionDescription: e.strSecondaryActionDescription,
			onOptionsButton: e.fnOptionsButton,
			onOptionsActionDescription: e.strOptionsActionDescription,
			onGamepadFocus: e.fnOnFocus,
		},
		o.createElement(
			l.Z,
			{
				focusable: !t,
				className: _A.RoomHeader,
				onClick: undefined,
				onOKButton: t
					? undefined
					: () => {
							h.xm.UIStore.ShowAndOrActivateChatRoomGroup(
								e.context,
								e.chatRoom.GetGroup(),
								true,
							).SelectChat(e.chatRoom.GetRoomID());
							if (e.fnCloseModal) {
								e.fnCloseModal();
							}
						},
				onOKActionDescription: Localize("#VoiceChat_ViewQuickChat"),
				onSecondaryButton: r
					? (t) => {
							(0, y.Ci)(
								GetOwningWindowForEvent(t),
								Localize("#Chat_Actions_RemoveRoom"),
								Localize("#Chat_Actions_RemoveRoom_Confirm"),
								Localize("#Chat_Actions_RemoveRoom_Action"),
							).then(() => {
								e.chatRoom.GetGroup().DeleteChatRoom(e.chatRoom.GetRoomID());
							});
						}
					: undefined,
				onSecondaryActionDescription: r
					? Localize("#Chat_Actions_RemoveRoom")
					: undefined,
				onOptionsButton: r
					? (t) => {
							(0, w.HT)(
								o.createElement(v, {
									title: Localize("#Chat_Actions_ChangeRoomName"),
									description: undefined,
									onResult: (t) =>
										e.chatRoom.GetGroup().RenameRoom(e.chatRoom.GetRoomID(), t),
								}),
								GetOwningWindowForEvent(t),
							);
						}
					: undefined,
				onOptionsActionDescription: r
					? n
						? Localize("#Chat_Actions_SaveChannel")
						: Localize("#Chat_Actions_ChangeRoomName")
					: undefined,
			},
			o.createElement(p.mrd, null),
			o.createElement(
				"div",
				{
					className: _A.RoomTitle,
				},
				e.chatRoom.name,
			),
		),
		e.chatRoom.voice_active_member_list.member_list.map((r) => {
			const n = r.accountid != h.xm.ChatStore.VoiceChat.GetLocalAccountID();
			const i = r.accountid != h.xm.ChatStore.VoiceChat.GetLocalAccountID();
			const a = h.xm.ChatStore.VoiceChat.GetPerUserMuting(r.accountid);
			const s = h.xm.ChatStore.VoiceChat.GetUserMutedRemotely(r.accountid);
			const l = h.xm.ChatStore.VoiceChat.GetOutputMutedRemotely(r.accountid);
			let d = [];
			if (a) {
				d.push(
					o.createElement(
						"div",
						{
							className: _A.MicMutedLocally,
						},
						o.createElement(p.fSs, {
							muted: true,
						}),
					),
				);
			}
			if (s) {
				d.push(
					o.createElement(
						"div",
						{
							className: _A.MicMutedRemotely,
						},
						o.createElement(p.EQ9, {
							off: true,
						}),
					),
				);
			}
			if (l) {
				d.push(
					o.createElement(
						"div",
						{
							className: _A.OutputMutedRemotely,
						},
						o.createElement(p.LeN, {
							off: true,
						}),
					),
				);
			}
			const g = n
				? a
					? Localize("#VoiceChat_Unmute")
					: Localize("#VoiceChat_Mute")
				: null;
			return o.createElement(u.bP, {
				key: r.accountid,
				noActions: t,
				friend: r,
				className: (0, c.A)(_A.GroupVoiceChatFriend),
				context: {
					chat: e.chatRoom,
					chatContext: "friendslist",
				},
				avatarSize: "Medium",
				statusPosition: "right",
				showVoiceLevel: true,
				gamepadEventOverrides: t
					? undefined
					: {
							onOKButton: () => {
								if (i) {
									r.OpenChatDialog(e.context);
									if (e.fnCloseModal) {
										e.fnCloseModal();
									}
								}
							},
							onOKActionDescription: i
								? Localize("#Friend_Menu_SendMessage")
								: null,
							onSecondaryButton: () => {
								if (n) {
									h.xm.ChatStore.VoiceChat.SetPerUserMuting(r.accountid, !a);
								}
							},
							onSecondaryActionDescription: g,
							onOptionsButton: () => {},
							onOptionsActionDescription: null,
						},
				listStatusIndicator: d,
			});
		}),
	);
});
function E(e) {
	let { chat: t, onHold: r } = e;
	return o.createElement(
		l.Z,
		{
			className: _A.PendingVoiceChatRequest,
		},
		o.createElement(u.bP, {
			noActions: true,
			friend: t.chat_partner,
			className: (0, c.A)(
				_A.FriendVoiceChat,
				t.unread_message_count > 0 && "unreadFriend",
			),
			context: {
				chat: t,
				chatContext: "friendslist",
			},
			avatarSize: "Large",
			statusPosition: "right",
		}),
		o.createElement(
			_.$n,
			{
				onClick: () => {
					h.xm.VoiceStore.InitiateFriendChat(t.accountid_partner);
				},
			},
			r ? Localize("#Voice_Resume") : Localize("#Voice_Accept"),
		),
		o.createElement(
			_.$n,
			{
				onClick: () => {
					h.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(
						t.accountid_partner,
					);
				},
			},
			r ? Localize("#Voice_End") : Localize("#Voice_Decline"),
		),
	);
}
function M(e) {
	let { vecPendingChats: t } = e;
	if (t.length == 0) {
		return null;
	}
	let r = false;
	t.forEach((e) => {
		r ||= h.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(
			e?.accountid_partner,
		);
	});
	return o.createElement(
		o.Fragment,
		null,
		o.createElement(
			"div",
			{
				className: (0, c.A)(_A.Title, _A.PendingVoiceChats),
			},
			r
				? Localize("#VoiceChat_CallOnHold")
				: Localize("#VoiceChat_PendingRequests"),
		),
		o.createElement(
			l.Z,
			{
				className: _A.PendingVoiceChatsList,
			},
			t.map((e) =>
				o.createElement(E, {
					key: e.unique_id,
					chat: e,
					onHold: r,
				}),
			),
		),
	);
}
export let $ = class extends o.Component {
	m_BrowserContext;
	ref = o.createRef();
	constructor(e) {
		super(e);
	}
	componentDidMount() {
		this.m_BrowserContext = (0, B.wj)(this.ref.current);
	}
	OnInputGainChanged(e) {
		if (this.props.chats.VoiceChat.IsMicMuted()) {
			this.props.chats.VoiceChat.ToggleMicMuting();
		}
		this.props.chats.VoiceChat.SetVoiceInputGain(
			this.props.chats.VoiceChat.ConvertSliderToGainValue(
				e,
				b.F$.k_MaxInputOutputGainValue,
			),
		);
	}
	OnOutputGainChanged(e) {
		if (this.props.chats.VoiceChat.IsOutputMuted()) {
			this.props.chats.VoiceChat.ToggleOutputMuting();
		}
		this.props.chats.VoiceChat.SetVoiceOutputGain(
			this.props.chats.VoiceChat.ConvertSliderToGainValue(
				e,
				b.F$.k_MaxInputOutputGainValue,
			),
		);
	}
	render() {
		let e = this.props.chats.GetActiveVoiceChat();
		const t = e instanceof a.s ? e : undefined;
		const r = e instanceof i.d ? e : undefined;
		const n = this.props.chats.FriendChatStore.GetAllChats().filter((e) => {
			let r = h.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(
				e.accountid_partner,
			);
			if (t?.accountid_partner == e.accountid_partner) {
				r = false;
			}
			return r;
		});
		if (!this.props.chats.VoiceChat.IsAnyVoiceActive() || !e) {
			if (n.length != 0) {
				return o.createElement(M, {
					vecPendingChats: n,
				});
			} else {
				return o.createElement(
					"div",
					{
						className: _A.Title,
					},
					Localize("#VoiceChat_NoneActive"),
				);
			}
		}
		const s = t?.GetMember(t.accountid_partner);
		let d;
		if (t?.unread_message_count > 0) {
			d = o.createElement(
				"div",
				{
					className: "FriendMessageCount",
				},
				t.unread_message_count,
			);
		}
		const C = () => {
			SteamClient.URL.ExecuteSteamURL("steam://open/settings/audio");
			window.parent.postMessage(
				{
					message: "CloseSideMenus",
				},
				"https://steamloopback.host",
			);
		};
		const f = this.props.chats.VoiceChat.IsOutputMuted()
			? 0
			: this.props.chats.VoiceChat.ConvertGainValueToSliderValue(
					this.props.chats.VoiceChat.GetVoiceOutputGain(),
					b.F$.k_MaxInputOutputGainValue,
				);
		const y = this.props.chats.VoiceChat.IsMicMuted()
			? 0
			: this.props.chats.VoiceChat.ConvertGainValueToSliderValue(
					this.props.chats.VoiceChat.GetVoiceInputGain(),
					b.F$.k_MaxInputOutputGainValue,
				);
		const S = this.props.chats.VoiceChat.GetVoiceInputGain() > 0;
		const w = this.props.chats.VoiceChat.GetVoiceOutputGain() > 0;
		const B = "#ffaa17";
		const v = (e) => {
			if (!e) {
				return "";
			}
			const t = Math.round(Math.log10(e) * 20);
			const r = t < 0 ? t.toString() : "+" + t.toString();
			return Localize("#VoiceChat_AudioLevelDb", r);
		};
		return o.createElement(
			o.Fragment,
			null,
			o.createElement(M, {
				vecPendingChats: n,
			}),
			o.createElement(
				"div",
				{
					ref: this.ref,
					className: _A.Title,
				},
				Localize("#VoiceChat_InVoiceChat"),
			),
			o.createElement(
				"div",
				{
					className: _A.VoiceChatList,
				},
				o.createElement(
					l.Z,
					{
						className: (0, c.A)(
							_A.FriendVoiceChatSliderContainer,
							y == 0 && "MicMuted",
						),
						onOKActionDescription: Localize("#VoiceChat_AdjustMicVolume"),
						onSecondaryButton: S
							? () => this.props.chats.VoiceChat.ToggleMicMuting()
							: undefined,
						onSecondaryActionDescription: S
							? this.props.chats.VoiceChat.IsMicMuted()
								? Localize("#VoiceChat_UnmuteMic_Deck")
								: Localize("#VoiceChat_MuteMic_Deck")
							: undefined,
						onMenuButton: C,
						onMenuActionDescription: Localize("#VoiceChat_GoToAudioSettings"),
					},
					o.createElement(_.d3, {
						layout: "inline",
						min: 0,
						max: 100,
						step: 10,
						value: y,
						onChange: this.OnInputGainChanged,
						icon: o.createElement(p.EQ9, {
							off: y == 0,
							onClick: () => this.props.chats.VoiceChat.ToggleMicMuting(),
						}),
						className: _A.SliderPadding,
						resetValue: 50,
						resetValueAppearance: {
							trackForegroundColor: B,
							side: "right",
						},
						showValue: true,
						renderValue: (e) =>
							v(
								this.props.chats.VoiceChat.ConvertSliderToGainValue(
									e,
									b.F$.k_MaxInputOutputGainValue,
								),
							),
					}),
				),
				o.createElement(
					l.Z,
					{
						className: _A.FriendVoiceChatSliderContainer,
						onOKActionDescription: Localize("#VoiceChat_AdjustVoiceVolume"),
						onSecondaryButton: w
							? () => this.props.chats.VoiceChat.ToggleOutputMuting()
							: undefined,
						onSecondaryActionDescription: w
							? this.props.chats.VoiceChat.IsOutputMuted()
								? Localize("#VoiceChat_UnmuteVoice_Deck")
								: Localize("#VoiceChat_MuteVoice_Deck")
							: undefined,
						onMenuButton: C,
						onMenuActionDescription: Localize("#VoiceChat_GoToAudioSettings"),
					},
					o.createElement(_.d3, {
						layout: "inline",
						min: 0,
						max: 100,
						step: 10,
						value: f,
						onChange: this.OnOutputGainChanged,
						icon: o.createElement(p.LeN, {
							off: f == 0,
							onClick: () => this.props.chats.VoiceChat.ToggleOutputMuting(),
						}),
						className: _A.SliderPadding,
						resetValue: 50,
						resetValueAppearance: {
							trackForegroundColor: B,
							side: "right",
						},
						showValue: true,
						renderValue: (e) =>
							v(
								this.props.chats.VoiceChat.ConvertSliderToGainValue(
									e,
									b.F$.k_MaxInputOutputGainValue,
								),
							),
					}),
				),
				t &&
					o.createElement(
						l.Z,
						{
							className: (0, c.A)(
								_A.FriendVoiceChatContainer,
								"FriendVoiceChatContainer",
							),
						},
						o.createElement(u.bP, {
							friend: s,
							className: (0, c.A)(
								_A.FriendVoiceChat,
								t.unread_message_count > 0 && "unreadFriend",
							),
							context: {
								chat: t,
								chatContext: "friendslist",
							},
							avatarSize: "Medium",
							statusPosition: "right",
							listStatusIndicator: d,
						}),
						o.createElement(
							l.Z,
							{
								focusable: true,
								className: _A.LeaveVoiceChat,
								onActivate: () =>
									this.props.chats.VoiceChat.OnUserEndVoiceChat(),
							},
							o.createElement(p.ETd, null),
							Localize("#VoiceChat_Leave"),
						),
					),
				r &&
					o.createElement(
						l.Z,
						{
							className: _A.GroupVoiceChatContainer,
						},
						o.createElement(
							l.Z,
							{
								focusable: true,
								className: _A.GroupContainer,
								onOKButton: () => {
									h.xm.UIStore.ShowAndOrActivateChatRoomGroup(
										this.m_BrowserContext,
										r.GetGroup(),
										true,
									);
								},
								onOKActionDescription: Localize(
									"#ChatRoom_Invite_Accept_Inviter",
								),
							},
							o.createElement(g.I, {
								group: r.GetGroup(),
								small: true,
							}),
							o.createElement(
								"div",
								{
									className: _A.GroupTitle,
								},
								r.GetGroup().name,
							),
						),
						o.createElement(A, {
							context: this.m_BrowserContext,
							chatRoom: r,
						}),
						o.createElement(
							l.Z,
							{
								focusable: true,
								className: _A.LeaveVoiceChat,
								onActivate: () =>
									this.props.chats.VoiceChat.OnUserEndVoiceChat(),
							},
							o.createElement(p.ETd, null),
							Localize("#VoiceChat_Leave"),
						),
					),
			),
		);
	}
};
(0, n.Cg)([f.oI], $.prototype, "OnInputGainChanged", null);
(0, n.Cg)([f.oI], $.prototype, "OnOutputGainChanged", null);
$ = (0, n.Cg)([s.PA], $);
