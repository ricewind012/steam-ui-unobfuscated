import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./3756.js";
import a from "./8653.js";
import s, { PA } from "./41230.js";
import o from "./63696.js";
import l from "./69164.js";
import { A as A_1 } from "./90765.js";
import u from "./98829.js";
import d from "./89397.js";
import p from "./50376.js";
import g from "./53414.js";
import h from "./95773.js";
import C from "./72655.js";
import _ from "./64608.js";
import f from "./52451.js";
import b from "./95377.js";
import y, { Ci } from "./78060.js";
import w, { HT } from "./13869.js";
import "./72476.js";
import B, { wj } from "./40357.js";
const _A = d;
const V = (e) => {
	const TRef = o.useRef();
	return (
		<w.x_ onEscKeypress={e.closeModal}>
			<_.U9
				classNameContent="CreateChatChannelDialog"
				onSubmit={() => {
					e.onResult(TRef.current.value);
					e.closeModal();
				}}
			>
				<_.Y9>{Localize(e.title)}</_.Y9>
				<_.nB>
					<_.pd ref={TRef} autoFocus />
				</_.nB>
				<_.wi>
					<_.CB onCancel={e.closeModal} />
				</_.wi>
			</_.U9>
		</w.x_>
	);
};
export const A = PA((e) => {
	const t = e.fnOKButton != null;
	const r = e.chatRoom.GetGroup().BCanAdminChannel();
	const n = e.chatRoom.IsTempVoiceRoom();
	let i = e.chatRoom.BVoiceActive();
	let a = e.chatRoom.voice_active_member_list.member_list.length > 0;
	return (
		<C.YZ
			focusable
			className={A_1(
				_A.GroupRoomContainer,
				i && _A.UserInRoom,
				a && _A.ActiveVoiceRoom,
			)}
			onOKButton={e.fnOKButton}
			onOKActionDescription={
				e.strOKActionDescription ?? Localize("#VoiceChat_ManageRoom")
			}
			onSecondaryButton={e.fnSecondaryButton}
			onSecondaryActionDescription={e.strSecondaryActionDescription}
			onOptionsButton={e.fnOptionsButton}
			onOptionsActionDescription={e.strOptionsActionDescription}
			onGamepadFocus={e.fnOnFocus}
		>
			<l.Z
				focusable={!t}
				className={_A.RoomHeader}
				onClick={undefined}
				onOKButton={
					t ||
					(() => {
						h.xm.UIStore.ShowAndOrActivateChatRoomGroup(
							e.context,
							e.chatRoom.GetGroup(),
							true,
						).SelectChat(e.chatRoom.GetRoomID());
						if (e.fnCloseModal) {
							e.fnCloseModal();
						}
					})
				}
				onOKActionDescription={Localize("#VoiceChat_ViewQuickChat")}
				onSecondaryButton={
					r
						? (t) => {
								Ci(
									GetOwningWindowForEvent(t),
									Localize("#Chat_Actions_RemoveRoom"),
									Localize("#Chat_Actions_RemoveRoom_Confirm"),
									Localize("#Chat_Actions_RemoveRoom_Action"),
								).then(() => {
									e.chatRoom.GetGroup().DeleteChatRoom(e.chatRoom.GetRoomID());
								});
							}
						: undefined
				}
				onSecondaryActionDescription={
					r ? Localize("#Chat_Actions_RemoveRoom") : undefined
				}
				onOptionsButton={
					r
						? (t) => {
								HT(
									<V
										title={Localize("#Chat_Actions_ChangeRoomName")}
										description={undefined}
										onResult={(t) =>
											e.chatRoom
												.GetGroup()
												.RenameRoom(e.chatRoom.GetRoomID(), t)
										}
									/>,
									GetOwningWindowForEvent(t),
								);
							}
						: undefined
				}
				onOptionsActionDescription={
					r
						? n
							? Localize("#Chat_Actions_SaveChannel")
							: Localize("#Chat_Actions_ChangeRoomName")
						: undefined
				}
			>
				<p.mrd />
				<div className={_A.RoomTitle}>{e.chatRoom.name}</div>
			</l.Z>
			{e.chatRoom.voice_active_member_list.member_list.map((r) => {
				const n = r.accountid != h.xm.ChatStore.VoiceChat.GetLocalAccountID();
				const i = r.accountid != h.xm.ChatStore.VoiceChat.GetLocalAccountID();
				const a = h.xm.ChatStore.VoiceChat.GetPerUserMuting(r.accountid);
				const s = h.xm.ChatStore.VoiceChat.GetUserMutedRemotely(r.accountid);
				const l = h.xm.ChatStore.VoiceChat.GetOutputMutedRemotely(r.accountid);
				let d = [];
				if (a) {
					d.push(
						<div className={_A.MicMutedLocally}>
							<p.fSs muted />
						</div>,
					);
				}
				if (s) {
					d.push(
						<div className={_A.MicMutedRemotely}>
							<p.EQ9 off />
						</div>,
					);
				}
				if (l) {
					d.push(
						<div className={_A.OutputMutedRemotely}>
							<p.LeN off />
						</div>,
					);
				}
				const g = n
					? a
						? Localize("#VoiceChat_Unmute")
						: Localize("#VoiceChat_Mute")
					: null;
				return (
					<u.bP
						key={r.accountid}
						noActions={t}
						friend={r}
						className={A_1(_A.GroupVoiceChatFriend)}
						context={{
							chat: e.chatRoom,
							chatContext: "friendslist",
						}}
						avatarSize="Medium"
						statusPosition="right"
						showVoiceLevel
						gamepadEventOverrides={
							t || {
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
							}
						}
						listStatusIndicator={d}
					/>
				);
			})}
		</C.YZ>
	);
});
function E(e) {
	let { chat, onHold } = e;
	return (
		<l.Z className={_A.PendingVoiceChatRequest}>
			<u.bP
				noActions
				friend={chat.chat_partner}
				className={A_1(
					_A.FriendVoiceChat,
					chat.unread_message_count > 0 && "unreadFriend",
				)}
				context={{
					chat: chat,
					chatContext: "friendslist",
				}}
				avatarSize="Large"
				statusPosition="right"
			/>
			<_.$n
				onClick={() => {
					h.xm.VoiceStore.InitiateFriendChat(chat.accountid_partner);
				}}
			>
				{onHold ? Localize("#Voice_Resume") : Localize("#Voice_Accept")}
			</_.$n>
			<_.$n
				onClick={() => {
					h.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(
						chat.accountid_partner,
					);
				}}
			>
				{onHold ? Localize("#Voice_End") : Localize("#Voice_Decline")}
			</_.$n>
		</l.Z>
	);
}
function M(e) {
	let { vecPendingChats } = e;
	if (vecPendingChats.length == 0) {
		return null;
	}
	let r = false;
	vecPendingChats.forEach((e) => {
		r ||= h.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(
			e?.accountid_partner,
		);
	});
	return (
		<>
			<div className={A_1(_A.Title, _A.PendingVoiceChats)}>
				{r
					? Localize("#VoiceChat_CallOnHold")
					: Localize("#VoiceChat_PendingRequests")}
			</div>
			<l.Z className={_A.PendingVoiceChatsList}>
				{vecPendingChats.map((e) => (
					<E key={e.unique_id} chat={e} onHold={r} />
				))}
			</l.Z>
		</>
	);
}
export let $ = class extends o.Component {
	m_BrowserContext;
	ref = o.createRef();
	constructor(e) {
		super(e);
	}
	componentDidMount() {
		this.m_BrowserContext = wj(this.ref.current);
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
				return <M vecPendingChats={n} />;
			} else {
				return (
					<div className={_A.Title}>{Localize("#VoiceChat_NoneActive")}</div>
				);
			}
		}
		const s = t?.GetMember(t.accountid_partner);
		let d;
		if (t?.unread_message_count > 0) {
			d = <div className="FriendMessageCount">{t.unread_message_count}</div>;
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
			const r = t < 0 ? t.toString() : `+${t.toString()}`;
			return Localize("#VoiceChat_AudioLevelDb", r);
		};
		return (
			<>
				<M vecPendingChats={n} />
				<div ref={this.ref} className={_A.Title}>
					{Localize("#VoiceChat_InVoiceChat")}
				</div>
				<div className={_A.VoiceChatList}>
					<l.Z
						className={A_1(
							_A.FriendVoiceChatSliderContainer,
							y == 0 && "MicMuted",
						)}
						onOKActionDescription={Localize("#VoiceChat_AdjustMicVolume")}
						onSecondaryButton={
							S ? () => this.props.chats.VoiceChat.ToggleMicMuting() : undefined
						}
						onSecondaryActionDescription={
							S
								? this.props.chats.VoiceChat.IsMicMuted()
									? Localize("#VoiceChat_UnmuteMic_Deck")
									: Localize("#VoiceChat_MuteMic_Deck")
								: undefined
						}
						onMenuButton={C}
						onMenuActionDescription={Localize("#VoiceChat_GoToAudioSettings")}
					>
						<_.d3
							layout="inline"
							min={0}
							max={100}
							step={10}
							value={y}
							onChange={this.OnInputGainChanged}
							icon={
								<p.EQ9
									off={y == 0}
									onClick={() => this.props.chats.VoiceChat.ToggleMicMuting()}
								/>
							}
							className={_A.SliderPadding}
							resetValue={50}
							resetValueAppearance={{
								trackForegroundColor: B,
								side: "right",
							}}
							showValue
							renderValue={(e) =>
								v(
									this.props.chats.VoiceChat.ConvertSliderToGainValue(
										e,
										b.F$.k_MaxInputOutputGainValue,
									),
								)
							}
						/>
					</l.Z>
					<l.Z
						className={_A.FriendVoiceChatSliderContainer}
						onOKActionDescription={Localize("#VoiceChat_AdjustVoiceVolume")}
						onSecondaryButton={
							w
								? () => this.props.chats.VoiceChat.ToggleOutputMuting()
								: undefined
						}
						onSecondaryActionDescription={
							w
								? this.props.chats.VoiceChat.IsOutputMuted()
									? Localize("#VoiceChat_UnmuteVoice_Deck")
									: Localize("#VoiceChat_MuteVoice_Deck")
								: undefined
						}
						onMenuButton={C}
						onMenuActionDescription={Localize("#VoiceChat_GoToAudioSettings")}
					>
						<_.d3
							layout="inline"
							min={0}
							max={100}
							step={10}
							value={f}
							onChange={this.OnOutputGainChanged}
							icon={
								<p.LeN
									off={f == 0}
									onClick={() =>
										this.props.chats.VoiceChat.ToggleOutputMuting()
									}
								/>
							}
							className={_A.SliderPadding}
							resetValue={50}
							resetValueAppearance={{
								trackForegroundColor: B,
								side: "right",
							}}
							showValue
							renderValue={(e) =>
								v(
									this.props.chats.VoiceChat.ConvertSliderToGainValue(
										e,
										b.F$.k_MaxInputOutputGainValue,
									),
								)
							}
						/>
					</l.Z>
					{t && (
						<l.Z
							className={A_1(
								_A.FriendVoiceChatContainer,
								"FriendVoiceChatContainer",
							)}
						>
							<u.bP
								friend={s}
								className={A_1(
									_A.FriendVoiceChat,
									t.unread_message_count > 0 && "unreadFriend",
								)}
								context={{
									chat: t,
									chatContext: "friendslist",
								}}
								avatarSize="Medium"
								statusPosition="right"
								listStatusIndicator={d}
							/>
							<l.Z
								focusable
								className={_A.LeaveVoiceChat}
								onActivate={() =>
									this.props.chats.VoiceChat.OnUserEndVoiceChat()
								}
							>
								<p.ETd />
								{Localize("#VoiceChat_Leave")}
							</l.Z>
						</l.Z>
					)}
					{r && (
						<l.Z className={_A.GroupVoiceChatContainer}>
							<l.Z
								focusable
								className={_A.GroupContainer}
								onOKButton={() => {
									h.xm.UIStore.ShowAndOrActivateChatRoomGroup(
										this.m_BrowserContext,
										r.GetGroup(),
										true,
									);
								}}
								onOKActionDescription={Localize(
									"#ChatRoom_Invite_Accept_Inviter",
								)}
							>
								<g.I group={r.GetGroup()} small />
								<div className={_A.GroupTitle}>{r.GetGroup().name}</div>
							</l.Z>
							<A context={this.m_BrowserContext} chatRoom={r} />
							<l.Z
								focusable
								className={_A.LeaveVoiceChat}
								onActivate={() =>
									this.props.chats.VoiceChat.OnUserEndVoiceChat()
								}
							>
								<p.ETd />
								{Localize("#VoiceChat_Leave")}
							</l.Z>
						</l.Z>
					)}
				</div>
			</>
		);
	}
};
Cg([f.oI], $.prototype, "OnInputGainChanged", null);
Cg([f.oI], $.prototype, "OnOutputGainChanged", null);
$ = Cg([s.PA], $);
