import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a from "./3756.js";
import s from "./66146.js";
import o from "./96127.js";
import l from "./8653.js";
import c from "./95773.js";
import m, { CO, h8 } from "./52912.js";
import u from "./15855.js";
import d from "./63696.js";
import A from "./83665.js";
import p from "./7308.js";
import C from "./53414.js";
import _, { jv, E5 } from "./88620.js";
import f, { UA, eJ } from "./69649.js";
import b, { Ic } from "./78060.js";
import y, { EP } from "./59704.js";
import S from "./41230.js";
import w from "./90242.js";
import B from "./17231.js";
import { JO } from "./66408.js";
import I from "./64608.js";
import E from "./42318.js";
import M, { HT } from "./13869.js";
import T from "./50376.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { A as A_1 } from "./90765.js";
import F from "./52451.js";
import G from "./69164.js";
import O from "./10042.js";
import P from "./76815.js";
import L from "./47036.js";
import { Jw } from "./97422.js";
import x from "./87949.js";
import U from "./23038.js";
import W from "./8573.js";
import { OQ } from "./31958.js";
import H from "./39590.js";
import j from "./50551.js";
import q from "./1918.js";
import { Dn } from "./45328.js";
import Z from "./4690.js";
import Y from "./11131.js";
import re from "./98829.js";
import { T as T_1 } from "./92009.js";
const g = p;
const H_1 = ({ message, name, renderImage, ...n }) => (
	<A.M
		key="inviteDrop"
		classNames={{
			...g,
		}}
		timeout={300}
		{...n}
	>
		{(n) => (
			<div ref={n} className={g.ChatModalCover}>
				<div className={g.InviteDropContainer}>
					<span className={g.InviteDropImage}>{renderImage()}</span>
					<span className={g.InviteDropName}>{name}</span>
					<span className={g.InviteDropMessage}>{message}</span>
					<span className={g.InviteDropBackground} />
				</div>
			</div>
		)}
	</A.M>
);
const K = d.lazy(() => require.e(7653).then(require.bind(require, 72993)));
let X = class extends d.Component {
	static contextType = i.QO;
	m_fnUnregisterDropComplete = undefined;
	m_friendSteamId;
	m_bChatHidden = false;
	m_bShowVerticalBroadcastChat;
	m_strLocalBroadcastId;
	m_refBroadcastContainer = d.createRef();
	m_elMainContent;
	constructor(e) {
		super(e);
		this.state = {
			dropToInviteFriend: undefined,
			dropGroupToInviteFriend: undefined,
			dropClanToInvite: undefined,
			speakerLabelWidth: 0,
		};
		this.m_friendSteamId = W.b
			.InitFromAccountID(e.chatView.chat.accountid_partner)
			.ConvertTo64BitString();
	}
	OnDragEnter(e, t) {
		if (e) {
			AssertMsg(
				e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "chatroomgroup" ||
					e.type == "clan" ||
					e.type == "chatroomgroup" ||
					e.type == "clan" ||
					e.type == "html",
				"Invalid data type passed to FriendChatDialog.OnDrop",
			);
		} else {
			AssertMsg(t, "Invalid data type passed to FriendChatDialog.OnDrop");
		}
		if (!e) {
			return true;
		}
		let r = e.type == "friend" ? e.friend : undefined;
		if (r && r.accountid !== this.props.chatView.chat.accountid_partner) {
			this.m_fnUnregisterDropComplete ||=
				m.ZM.DragDropManager.RegisterForDropComplete(this.OnDropComplete);
			this.setState({
				dropToInviteFriend: r,
			});
			return true;
		}
		let n = e.type == "chatroomgroup" ? e.group : undefined;
		if (n) {
			this.m_fnUnregisterDropComplete ||=
				m.ZM.DragDropManager.RegisterForDropComplete(this.OnDropComplete);
			this.setState({
				dropGroupToInviteFriend: n,
			});
			return true;
		}
		let i = e.type == "clan" ? e.clan : undefined;
		return (
			!i ||
			((this.m_fnUnregisterDropComplete ||=
				m.ZM.DragDropManager.RegisterForDropComplete(this.OnDropComplete)),
			this.setState({
				dropClanToInvite: i,
			}),
			true)
		);
	}
	OnDragLeave() {
		if (
			this.state.dropToInviteFriend ||
			this.state.dropGroupToInviteFriend ||
			this.state.dropGroupToInviteFriend ||
			this.state.dropClanToInvite
		) {
			this.m_fnUnregisterDropComplete.Unregister();
			this.m_fnUnregisterDropComplete = undefined;
			this.setState({
				dropToInviteFriend: undefined,
				dropGroupToInviteFriend: undefined,
				dropClanToInvite: undefined,
			});
		}
	}
	OnDragOver(e) {
		e.dataTransfer.dropEffect = "move";
	}
	OnDrop(e, t) {
		if (e) {
			AssertMsg(
				e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "chatroomgroup" ||
					e.type == "clan" ||
					e.type == "chatroomgroup" ||
					e.type == "clan" ||
					e.type == "html",
				"Invalid data type passed to FriendChatDialog.OnDrop",
			);
		} else {
			AssertMsg(
				t.dataTransfer.files.length != 0,
				"Invalid data type passed to FriendChatDialog.OnDrop",
			);
		}
		let r = this.props.chatView;
		if (e) {
			let n = t.currentTarget.ownerDocument.defaultView;
			let i = r.chat.chat_partner;
			let a = e.type == "friend" ? e.friend : undefined;
			let s = e.type == "chatroomgroup" ? e.group : undefined;
			let o = e.type == "clan" ? e.clan : undefined;
			let l = e.type == "html" ? e.mapData : undefined;
			if (a) {
				if (i == a) {
					return;
				}
				if (this.state.dropToInviteFriend) {
					this.m_fnUnregisterDropComplete.Unregister();
					this.m_fnUnregisterDropComplete = undefined;
					this.setState({
						dropToInviteFriend: undefined,
					});
				}
				m.ZM.DragDropManager.SetDropConsumed();
				nn(
					{
						invitee: a,
						chatview: r,
						invitedto: i,
					},
					CO(t),
					n,
				);
			} else if (s || o) {
				if (this.state.dropGroupToInviteFriend || this.state.dropClanToInvite) {
					this.m_fnUnregisterDropComplete.Unregister();
					this.m_fnUnregisterDropComplete = undefined;
					this.setState({
						dropGroupToInviteFriend: undefined,
						dropClanToInvite: undefined,
					});
				}
				m.ZM.DragDropManager.SetDropConsumed();
				if (o) {
					s = c.xm.ChatStore.GetChatRoomGroup(o.GetChatGroupIDIfLoaded());
				}
				nn(
					{
						invitee: i,
						invitedto: s,
					},
					CO(t),
					n,
				);
			} else if (l && l.has("text/plain")) {
				r.AddPendingText(l.get("text/plain"));
			}
		} else if (t.dataTransfer.files.length != 0) {
			let e = t.dataTransfer.files[0];
			r.SetFileToUpload(e);
		}
	}
	OnDropComplete(e) {
		if (!e && this.state.dropToInviteFriend) {
			this.m_fnUnregisterDropComplete = undefined;
			this.setState({
				dropToInviteFriend: undefined,
			});
		}
	}
	OnNameWidthChanged(e) {
		this.setState({
			speakerLabelWidth: e,
		});
	}
	componentDidMount() {
		window.addEventListener("resize", this.OnLayoutChange);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.OnLayoutChange);
	}
	CalculateBroadcastSectionStyles(e) {
		if (this.m_bChatHidden) {
			return {
				width: "100%",
				height: "100%",
			};
		}
		const {
			nWatchPartyBroadcastHeightPercentage,
			nWatchPartyBroadcastWidthPercentage,
		} = m.ZM.UIDisplayPrefs;
		const n = {};
		if (e) {
			const e = nWatchPartyBroadcastHeightPercentage || 66;
			n.height = `${e}%`;
			if (this.m_elMainContent) {
				const { clientWidth, clientHeight } = this.m_elMainContent;
				const i = (9 / 16) * clientWidth + 50;
				const a = OQ(e, 1, (i / clientHeight) * 100);
				n.height = `${a}%`;
			}
		} else {
			n.width = nWatchPartyBroadcastWidthPercentage
				? `${nWatchPartyBroadcastWidthPercentage}%`
				: "66%";
			n.overflowY = "auto";
		}
		return n;
	}
	ShouldShowVerticalBroadcastChat() {
		if (this.m_bShowVerticalBroadcastChat !== undefined) {
			return this.m_bShowVerticalBroadcastChat;
		} else {
			return (
				!!this.m_elMainContent &&
				this.m_elMainContent.clientHeight / this.m_elMainContent.clientWidth >
					5 / 7
			);
		}
	}
	OnLayoutChange() {
		this.forceUpdate();
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterDragEvents);
	}
	HandleMouseMove(e) {
		e.preventDefault();
		e.stopPropagation();
		let t = this.m_refBroadcastContainer.current.getBoundingClientRect();
		let r =
			this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
		const n = this.ShouldShowVerticalBroadcastChat();
		const i = n ? t.top : t.left;
		const a = n ? e.clientY : e.clientX;
		const s = n ? r.height : r.width;
		const o = OQ(((a - i) / s) * 100, 1, 100);
		const l = n
			? "nWatchPartyBroadcastHeightPercentage"
			: "nWatchPartyBroadcastWidthPercentage";
		m.ZM.SetUIDisplayPref(l, o);
	}
	UnregisterDragEvents(e) {
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("mouseup", this.UnregisterDragEvents);
	}
	HideChat() {
		this.SetChatHidden(true);
	}
	ShowChat() {
		this.SetChatHidden(false);
	}
	SetChatHidden(e) {
		this.m_bChatHidden = e;
		this.forceUpdate();
	}
	ShowBroadcast() {
		c.xm.UIStore.SetFriendBroadcastVisible(this.m_friendSteamId, true);
		SetBackgroundTimeout(() => {
			this.props.chatView.OnChatFrameChanged();
		}, 30);
	}
	HideBroadcast() {
		c.xm.UIStore.SetFriendBroadcastVisible(this.m_friendSteamId, false);
		c.xm.UIStore.SetTheaterMode(false);
		SetBackgroundTimeout(() => {
			this.props.chatView.OnChatFrameChanged();
		}, 30);
	}
	ToggleVerticalBroadcastChat() {
		this.SetVerticalBroadcastChat(!this.ShouldShowVerticalBroadcastChat());
		this.SetChatHidden(false);
	}
	ToggleTheaterModeBroadcastChat() {
		c.xm.UIStore.SetTheaterMode(!c.xm.UIStore.GetTheaterMode());
	}
	SetVerticalBroadcastChat(e) {
		this.m_bShowVerticalBroadcastChat = e;
	}
	SetLocalBroadcastId(e) {
		this.m_strLocalBroadcastId = e;
	}
	SetMainContentRef(e) {
		this.m_elMainContent = e;
		this.OnLayoutChange();
	}
	GetTitleBarDragDropProps() {
		let e = {
			rgAcceptedTypes: [],
			bAcceptsFiles: true,
		};
		e.fnDrop = this.OnDrop;
		return e;
	}
	GetChatBodyDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend", "chatroomgroup", "clan", "text/plain"],
			bAcceptsFiles: true,
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDragOver = this.OnDragOver;
		e.fnDrop = this.OnDrop;
		return e;
	}
	RenderInnerChatTabs() {
		return (
			<div className="ChatBodyControls">
				<div
					className="Close"
					onClick={this.HideChat}
					title={(0, Localize)("#Broadcast_View_HideChat")}
				>
					<T.K7s showChat={false} />
				</div>
				<NK
					chatView={this.props.chatView}
					additionalClasses="broadcastVisible"
				/>
			</div>
		);
	}
	render() {
		if (!this.props.chatView) {
			return null;
		}
		let e = this.props.chatView.chat;
		let t = c.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(
			e.accountid_partner,
		);
		let r = this.props.chatView.BVoiceActive();
		let n = c.xm.UIStore.IsFriendBroadcastVisible(this.m_friendSteamId);
		let i = e.GetShowNonFriendWarning();
		const { dropToInviteFriend, dropGroupToInviteFriend, dropClanToInvite } =
			this.state;
		let l;
		if (dropToInviteFriend) {
			l = (
				<J3
					chatView={this.props.chatView}
					friend={this.state.dropToInviteFriend}
				/>
			);
		} else if (dropGroupToInviteFriend || dropClanToInvite) {
			l = (
				<C1
					chatView={this.props.chatView}
					group={this.state.dropGroupToInviteFriend}
					clan={this.state.dropClanToInvite}
				/>
			);
		}
		let m = false;
		let p = null;
		let g = this.ShouldShowVerticalBroadcastChat();
		let h = this.m_bChatHidden;
		if (n) {
			const t = this.CalculateBroadcastSectionStyles(g);
			p = (
				<d.Suspense fallback={null}>
					<Ee
						ref={this.m_refBroadcastContainer}
						steamID={W.b
							.InitFromAccountID(e.accountid_partner)
							.ConvertTo64BitString()}
						localSteamID={this.m_strLocalBroadcastId}
						watchLocation={12}
						bWebRTC
						onRequestClose={this.HideBroadcast}
						actions={[
							<div
								key="ChatPosToggle"
								onClick={this.ToggleVerticalBroadcastChat}
								title={`${
									g
										? (0, Localize)("#Broadcast_View_Stack_H")
										: (0, Localize)("#Broadcast_View_Stack_V")
								}`}
								className={`BroadcastChatPositionToggle ${
									g ? "right" : "bottom"
								}`}
							/>,
						]}
						style={t}
						onTheaterMode={this.ToggleTheaterModeBroadcastChat}
					/>
					{!h && (
						<div
							className={`BroadcastChatDivider ${
								g ? "vertical" : "horizontal"
							}`}
							onMouseDown={this.OnGrabberMouseDown}
						/>
					)}
					{h && <Ko onClick={this.ShowChat} edge={g ? "bottom" : "right"} />}
				</d.Suspense>
			);
			m = true;
		} else {
			m = false;
		}
		let C = {};
		if (!this.props.isActive) {
			C.display = "none";
		}
		const _ = A_1(
			"chatWindow",
			"MultiUserChat",
			r && "VoiceActive",
			r && c.xm.ChatStore.VoiceChat.IsMicMuted() && "MicMuted",
			t && "VoiceRequested",
			i && "NotAFriendOrApproved",
			c.xm.SettingsStore.FriendsSettings.bCompactFriendsList && "compactView",
			m && "broadcastVisible",
		);
		const f = A_1(
			"chatBody",
			(dropToInviteFriend ||
				dropGroupToInviteFriend ||
				dropGroupToInviteFriend ||
				dropClanToInvite) &&
				"chatRoomActiveDrop",
		);
		const b =
			this.m_bChatHidden && n ? null : (
				<Y.gs.Consumer>
					{(t) => (
						<L.o
							key={e.unique_id}
							chatView={this.props.chatView}
							isActive={this.props.isActive}
							disabled={false}
							ownerWindow={t.ownerWindow}
						/>
					)}
				</Y.gs.Consumer>
			);
		let y = (
			<u.T
				style={C}
				className="chatHistoryAndMembers"
				{...this.GetChatBodyDragDropProps()}
			>
				<U.A>{l}</U.A>
				<div className="displayColumn fullWidth">
					<G.Z
						className="displayRow minHeightZero"
						flow-children="row"
						navEntryPreferPosition={Z.iU.PREFERRED_CHILD}
					>
						{i && <SU chatView={this.props.chatView} friend={e.chat_partner} />}
						<div className="ChatRoomGroupDialog_history">
							{c.xm.UIStore.show_winter_sale_ui &&
								!c.xm.SettingsStore.FriendsSettings.bDisableRoomEffects && (
									<q.Y effectManager={e.RoomEffectManager()} />
								)}
							<H.D
								chatView={this.props.chatView}
								isActive={this.props.isActive}
								speakerLabelWidth={this.state.speakerLabelWidth}
								blockInteraction={i}
							/>
						</div>
						{!n && !this.context?.IN_GAMEPADUI && (
							<NK
								chatView={this.props.chatView}
								additionalClasses={undefined}
							/>
						)}
						{this.context?.IN_GAMEPADUI && (
							<G.Z className="RightSideButtonContainer" flow-children="column">
								<QH chatView={this.props.chatView} bSteamDeck />
								{!e.chat_partner.is_friend && <J friend={e.chat_partner} />}
								<NK
									chatView={this.props.chatView}
									additionalClasses={undefined}
								/>
							</G.Z>
						)}
						<div className="dropTargetBox" />
					</G.Z>
					{b}
				</div>
			</u.T>
		);
		let S = `chatStack ${g ? "displayRow" : "displayColumn"} GroupChatVisible`;
		let w = {};
		if (r) {
			w.onSecondaryButton = () => e.ToggleVoiceChat();
			w.onSecondaryActionDescription = (0, Localize)(
				"#Friend_Menu_StopVoiceChat",
			);
		}
		return (
			<u.D
				fnCanTakeFocus={() => this.props.isActive}
				data-activechat={this.props.isActive}
				style={C}
				className={_}
				{...this.GetTitleBarDragDropProps()}
				{...w}
			>
				<div className="chatHeader" />
				{this.props.isActive && (
					<$
						chatView={this.props.chatView}
						onNameWidthChanged={this.OnNameWidthChanged}
					/>
				)}
				<U.A>
					{(r || t) && !this.context?.IN_GAMEPADUI && (
						<A.M
							key="OneOnOneVoiceHeader"
							classNames="OneOnOneVoice-anim"
							timeout={300}
						>
							{(e) => (
								<div ref={e}>
									<QH chatView={this.props.chatView} />
								</div>
							)}
						</A.M>
					)}
				</U.A>
				<div className="ChatRoomGroupDialog_contents">
					<div
						className="ChatRoomGroup_MainAndChatEntry displayColumn"
						ref={this.SetMainContentRef}
					>
						<div className="ChatRoomGroup_Main_ContentAndMembers displayRow">
							<div
								className={`ChatRoomGroup_Main_Content ${
									g ? "Vertical" : "Horizontal"
								} ${h ? "chatHidden" : ""}`}
							>
								{p}
								{(!this.m_bChatHidden || !n) && (
									<div className={f}>
										{this.context?.IN_GAMEPADUI && <x.H />}
										{n && this.RenderInnerChatTabs()}
										<div className={S}>{y}</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</u.D>
		);
	}
};
function J(e) {
	let { friend } = e;
	const r = d.useCallback(
		(e) => {
			let r = GetOwningWindowForEvent(e);
			c.xm.FriendStore.SendFriendInvite(friend).then((e) => {
				let { eResult, eFriendRelationship } = e;
				if (eFriendRelationship == 4) {
					Ic(
						r,
						(0, Localize)("#Friend_Menu_AddToFriendsList"),
						(0, Localize)("#Friend_InviteSent"),
					);
				} else if (eFriendRelationship == 3) {
					Ic(
						r,
						(0, Localize)("#Friend_Menu_AddToFriendsList"),
						(0, Localize)("#Friend_MutualInviteSent", friend.display_name),
					);
				} else {
					Jw(r, eResult, eFriendRelationship, friend.display_name);
				}
			});
		},
		[friend],
	);
	return (
		<G.Z
			focusable
			className="AddFriendButton"
			onActivate={r}
			onOKActionDescription={(0, Localize)("#Friend_Menu_AddToFriendsList")}
		>
			<T.sdo />
		</G.Z>
	);
}
Cg([F.oI], X.prototype, "OnDragEnter", null);
Cg([F.oI], X.prototype, "OnDragLeave", null);
Cg([F.oI], X.prototype, "OnDragOver", null);
Cg([F.oI], X.prototype, "OnDrop", null);
Cg([F.oI], X.prototype, "OnDropComplete", null);
Cg([F.oI], X.prototype, "OnNameWidthChanged", null);
Cg([F.oI], X.prototype, "ShouldShowVerticalBroadcastChat", null);
Cg([F.oI], X.prototype, "OnLayoutChange", null);
Cg([F.oI], X.prototype, "OnGrabberMouseDown", null);
Cg([F.oI], X.prototype, "HandleMouseMove", null);
Cg([F.oI], X.prototype, "UnregisterDragEvents", null);
Cg([F.oI], X.prototype, "HideChat", null);
Cg([F.oI], X.prototype, "ShowChat", null);
Cg([F.oI], X.prototype, "SetChatHidden", null);
Cg([F.oI], X.prototype, "ShowBroadcast", null);
Cg([F.oI], X.prototype, "HideBroadcast", null);
Cg([F.oI], X.prototype, "ToggleVerticalBroadcastChat", null);
Cg([F.oI], X.prototype, "ToggleTheaterModeBroadcastChat", null);
Cg([F.oI], X.prototype, "SetVerticalBroadcastChat", null);
Cg([F.oI], X.prototype, "SetLocalBroadcastId", null);
Cg([F.oI], X.prototype, "SetMainContentRef", null);
X = Cg([S.PA], X);
let $ = class extends d.Component {
	SpeakerLabel(e) {
		if (e) {
			this.props.onNameWidthChanged(e.clientWidth);
		}
	}
	render() {
		let e = this.props.chatView.chat;
		let t = c.xm.SettingsStore.FriendsSettings.nChatFontSize;
		let r = "speakerLabelWidthContainer";
		if (t == j.ki.k_EChatFontSizeSmall) {
			r += " smallChatFont";
		} else if (t == j.ki.k_EChatFontSizeLarge) {
			r += " largeChatFont";
		}
		if (e.chat_partner.is_ready && e.self.is_ready) {
			return (
				<div className={r} ref={this.SpeakerLabel}>
					<div className="nameWidthLabel">{`${e.self.display_name}:`}</div>
					<div className="nameWidthLabel">
						{`${e.chat_partner.display_name}:`}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
Cg([F.oI], $.prototype, "SpeakerLabel", null);
$ = Cg([S.PA], $);
const Ee = d.forwardRef(
	(
		{
			steamID,
			localSteamID,
			watchLocation,
			bWebRTC,
			style,
			onRequestClose,
			actions,
			onTheaterMode,
		},
		l,
	) => {
		const c = localSteamID || steamID;
		return (
			<div
				ref={l}
				style={{
					display: "flex",
					flexDirection: "column",
					...style,
				}}
			>
				<div className="BroadcastSection">
					<K
						key={c}
						steamIDBroadcast={c}
						watchLocation={watchLocation}
						bWebRTC={bWebRTC}
						onRequestClose={onRequestClose}
						actions={actions}
						onTheaterMode={onTheaterMode}
						onOpenLinkInNewWindow={y.EP}
					/>
					<div className="videoContainerSizer" />
				</div>
				<Te steamID={steamID} />
			</div>
		);
	},
);
let Te = class extends d.Component {
	OnClick(e, t) {
		let r = Dn(t, "friendbroadcast");
		EP(e, r);
		e.stopPropagation();
	}
	render() {
		let e = new W.b(this.props.steamID);
		let t = c.xm.FriendStore.GetPlayer(e.GetAccountID());
		let r = t.persona.GetCurrentGameIconURL();
		let n = t.persona.GetCurrentGameName();
		let i = t.persona.m_unGamePlayedAppID;
		if (n || r) {
			return (
				<div className="FriendChatBroadcastDetails">
					<div className="FriendChatBroadcastDetails_PlayingText">
						{(0, Localize)("#broadcastDetails_Playing")}
					</div>
					{r && <img className="FriendChatBroadcastDetails_Icon" src={r} />}
					<div
						className="FriendChatBroadcastDetails_GameName"
						onClick={(e) => this.OnClick(e, i)}
					>
						{n}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
Cg([F.oI], Te.prototype, "OnClick", null);
Te = Cg([S.PA], Te);
const Ie = d.lazy(() => require.e(7653).then(require.bind(require, 31711)));
export let yA = class extends d.Component {
	m_refChatTabs;
	m_keyEventListener = "keydown";
	macUserAgentStrings = /(MacIntel|Macintosh|Mac OS X)/;
	linuxUserAgentStrings = /(Linux|X11)/;
	constructor(e) {
		super(e);
		if (
			navigator.userAgent.search(this.macUserAgentStrings) != -1 ||
			navigator.userAgent.search(this.linuxUserAgentStrings) != -1
		) {
			this.m_keyEventListener = "keyup";
		}
		if (this.props.popup) {
			this.props.popup.addEventListener(
				this.m_keyEventListener,
				this.OnHTMLKeyEvent,
			);
		}
	}
	componentWillUnmount() {
		if (this.props.popup) {
			this.props.popup.removeEventListener(
				this.m_keyEventListener,
				this.OnHTMLKeyEvent,
			);
		}
	}
	OnCopy(e) {
		let t = this.props.popup || window;
		if (!t) {
			return;
		}
		let r = t.getSelection();
		if (r.rangeCount == 0) {
			return;
		}
		let n = JO(r.getRangeAt(0));
		if (n !== undefined) {
			if (t.navigator.platform == "Win32") {
				n = n.replace(/\n/g, "\r\n");
			}
			e.clipboardData.setData("text", n);
			e.preventDefault();
		}
	}
	OnChatTabRef(e) {
		this.m_refChatTabs = e;
	}
	OnDragEnter(e) {
		AssertMsg(
			e &&
				(e.type == "chattab" ||
					e.type == "friend" ||
					e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "html"),
			"Invalid data type passed to MultiChatDialog.OnDragEnter",
			e.type,
		);
		if (e.type == "chattab") {
			let t = this.props.tabs;
			let r = e;
			if (r.tabSet != t || t.tabCount > 1) {
				t.Focus();
				if (this.m_refChatTabs && this.m_refChatTabs.GetDragTab() != r.tab) {
					this.m_refChatTabs.SetDragTab(r.tab);
				}
			}
		}
		return true;
	}
	OnDragLeave() {
		if (this.m_refChatTabs) {
			this.m_refChatTabs.SetDragTab(undefined);
		}
	}
	OnDragOver(e) {
		if (this.m_refChatTabs) {
			this.m_refChatTabs.UpdateDragOffset(e);
		}
	}
	OnDrop(e, t) {
		AssertMsg(
			e &&
				(e.type == "chattab" ||
					e.type == "friend" ||
					e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "html"),
			"Invalid data type passed to MultiChatDialog.OnDrop",
			e.type,
		);
		if (e.type == "chattab") {
			let t = e;
			let r = -1;
			if (this.m_refChatTabs) {
				r = this.m_refChatTabs.state.iDragIndex;
			}
			m.ZM.DragDropManager.SetDropConsumed();
			if (t.tabSet != this.props.tabs) {
				t.tabSet.RemoveTab(t.tab);
				this.props.tabs.AddTab(t.tab);
				m.ZM.DragDropManager.EndDrag();
			}
			if (r != -1) {
				this.props.tabs.MoveTabToIndex(t.tab, r);
			}
			this.props.tabs.ActivateTab(t.tab);
			this.setState({
				tabDrag: undefined,
			});
		} else if (e.type == "friend") {
			m.ZM.DragDropManager.SetDropConsumed();
			e.friend.OpenChatDialog(CO(t));
		} else if (e.type == "chatroomgroup") {
			m.ZM.DragDropManager.SetDropConsumed();
			let r = e;
			c.xm.UIStore.ShowAndOrActivateChatRoomGroup(CO(t), r.group, true);
		} else if (e.type == "html" && e.mapData.has("text/plain")) {
			this.props.tabs.activeTab
				.GetChatView()
				.AddPendingText(e.mapData.get("text/plain"));
		}
	}
	OnHTMLKeyEvent(e) {
		if (i.TS.IN_CLIENT && e.ctrlKey && !e.altKey) {
			if ((!e.shiftKey && e.keyCode == 9) || e.keyCode == 34) {
				this.props.tabs.ActivateNextTab();
			} else if (e.keyCode == 9 || e.keyCode == 33) {
				this.props.tabs.ActivatePreviousTab();
			} else {
				if (e.key != "W" && e.key != "w") {
					return;
				}
				this.props.tabs.RemoveTab(this.props.tabs.activeTab);
			}
			e.preventDefault();
			e.stopPropagation();
			return;
		}
	}
	OnKeyDown(e) {
		let t = this.props.tabs.activeTab;
		if (!t) {
			return;
		}
		if (
			e.ctrlKey ||
			e.altKey ||
			e.altKey ||
			e.metaKey ||
			e.altKey ||
			e.metaKey ||
			e.key.length > 1
		) {
			return;
		}
		let e_target = e.target;
		let n = e_target && e_target.tagName ? e_target.tagName.toLowerCase() : "";
		if (n != "input" && n != "select" && n != "textarea") {
			t.GetChatView().FocusTextInput();
		}
	}
	render() {
		let e = this.props.tabs.activeTab;
		const t = this.m_refChatTabs?.GetDragTab();
		if (t) {
			e = t;
		}
		let r = this.props.tabs.tabs.slice();
		if (t && !r.includes(t)) {
			r.push(t);
		}
		r.sort((e, t) => (e.GetUniqueID() < t.GetUniqueID() ? 1 : -1));
		let n = r.map((t) => {
			let r = null;
			let n = t instanceof s.$C && t;
			let i = t.IsBroadcast();
			r = n ? (
				<O.vY groupView={n} isActive={t == e} popup={this.props.popup} />
			) : i ? (
				<Ie broadcastView={t} isActive={t == e} popup={this.props.popup} />
			) : (
				<X chatView={t.GetChatView()} isActive={t == e} />
			);
			return (
				<E.tH key={t.GetUniqueID()}>
					<d.Suspense fallback={null}>{r}</d.Suspense>
				</E.tH>
			);
		});
		return (
			<u.D
				className="multiChatDialog"
				rgAcceptedTypes={["chattab", "friend", "chatroomgroup", "text/plain"]}
				fnDragEnter={this.OnDragEnter}
				fnDragOver={this.OnDragOver}
				fnDragLeave={this.OnDragLeave}
				fnDrop={this.OnDrop}
				onKeyDown={this.OnKeyDown}
				onCopy={this.OnCopy}
			>
				<P.dH
					tabSet={this.props.tabs}
					popup={this.props.popup}
					activeTab={e}
					ref={this.OnChatTabRef}
					ResponsiveWindowState={this.props.ResponsiveWindowState}
					showOpenFriendsList={this.props.showOpenFriendsList}
				/>
				<G.Z
					className="chatDialogs"
					onMoveUp={() => this.m_refChatTabs.FocusActiveTab()}
				>
					{n.length == 0 && (
						<div className="emptyChatDialogs">
							{(0, Localize)("#Chat_EmptyDialogsWindowMsg")}
						</div>
					)}
					{n}
				</G.Z>
			</u.D>
		);
	}
};
Cg([F.oI], yA.prototype, "OnCopy", null);
Cg([F.oI], yA.prototype, "OnChatTabRef", null);
Cg([F.oI], yA.prototype, "OnDragEnter", null);
Cg([F.oI], yA.prototype, "OnDragLeave", null);
Cg([F.oI], yA.prototype, "OnDragOver", null);
Cg([F.oI], yA.prototype, "OnDrop", null);
Cg([F.oI], yA.prototype, "OnHTMLKeyEvent", null);
Cg([F.oI], yA.prototype, "OnKeyDown", null);
yA = Cg([S.PA], yA);
export let ft = class extends d.Component {
	m_refChatTabs;
	constructor(e) {
		super(e);
	}
	OnChatTabRef(e) {
		this.m_refChatTabs = e;
	}
	render() {
		let e = this.props.tabs.activeTab;
		const t = this.m_refChatTabs?.GetDragTab();
		if (t) {
			e = t;
		}
		let r = this.props.tabs.tabs.slice();
		if (t && !r.includes(t)) {
			r.push(t);
		}
		r.sort((e, t) => (e.GetUniqueID() < t.GetUniqueID() ? 1 : -1));
		let n = r.map((t) => {
			let r = null;
			let n = t instanceof s.$C && t;
			let i = t.IsBroadcast();
			r = n ? (
				<O.vY
					groupView={n}
					isActive={t == e}
					popup={this.props.popup}
					bSteamDeck
				/>
			) : i ? (
				<Ie broadcastView={t} isActive={t == e} popup={this.props.popup} />
			) : (
				<X chatView={t.GetChatView()} isActive={t == e} />
			);
			return (
				<E.tH key={t.GetUniqueID()}>
					<d.Suspense fallback={null}>{r}</d.Suspense>
				</E.tH>
			);
		});
		return (
			<G.Z className="multiChatDialog GamepadMode">
				{e && e.IsFriendChat() && <P.sU tab={e} active selectTab={() => {}} />}
				<G.Z className="chatDialogs">
					{n.length == 0 && (
						<div className="emptyChatDialogs">
							{(0, Localize)("#Chat_EmptyDialogsWindowGamePadUIMsg")}
						</div>
					)}
					{n}
				</G.Z>
			</G.Z>
		);
	}
};
Cg([F.oI], ft.prototype, "OnChatTabRef", null);
ft = Cg([S.PA], ft);
export let QH = class extends d.Component {
	constructor(e) {
		super(e);
	}
	InitiateVoiceChat() {
		let e = this.props.chatView.chat.accountid_partner;
		c.xm.VoiceStore.InitiateFriendChat(e);
	}
	VoidOnClick() {}
	EndVoiceChat() {
		if (
			c.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() ==
			this.props.chatView.chat.accountid_partner
		) {
			c.xm.VoiceStore.OnUserEndVoiceChat();
		}
	}
	OnCloseClick() {
		if (
			c.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() ==
			this.props.chatView.chat.accountid_partner
		) {
			c.xm.VoiceStore.OnUserEndVoiceChat();
		} else {
			c.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(
				this.props.chatView.chat.accountid_partner,
			);
		}
	}
	RejectVoiceChatRequest() {
		c.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(
			this.props.chatView.chat.accountid_partner,
		);
	}
	OnSettingsClick(e) {
		if (c.xm.IsDesktopUIActive()) {
			SteamClient.URL.ExecuteSteamURL("steam://open/settings/voice");
		} else {
			T_1(CO(e), e.currentTarget.ownerDocument.defaultView, "voice");
		}
	}
	render() {
		if (this.props.bSteamDeck) {
			return this.renderSteamDeck();
		}
		let e;
		let t = c.xm.VoiceStore.BInitiatedOneOnOneChat(
			this.props.chatView.chat.accountid_partner,
		);
		let r = c.xm.CMInterface.steamid.GetAccountID();
		let n = this.props.chatView.chat.accountid_partner;
		let i = c.xm.FriendStore.GetPlayer(r);
		let a = c.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(n);
		let s = c.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(n);
		let o = this.props.chatView.chat.chat_partner;
		let l = c.xm.VoiceStore.BPartnerHasAcceptedOrInitiatedOneOnOneChat(n);
		let m =
			!a &&
			c.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(o.accountid);
		let u = false;
		let p = false;
		let g = false;
		if (c.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() == n) {
			u =
				c.xm.VoiceStore.HasBeenAttemptingOverTwoSeconds() ||
				c.xm.VoiceStore.IsAttemptingReconnect();
			p =
				!c.xm.VoiceStore.BIsAccountFullyConnectedToActiveVoiceChat(r) ||
				c.xm.VoiceStore.IsAttemptingReconnect();
			g = !c.xm.VoiceStore.BIsAccountFullyConnectedToActiveVoiceChat(n);
		}
		e =
			t || a ? (
				<A.M key={r} classNames="friend-anim" timeout={320}>
					{(e) => (
						<re.bP
							divRef={e}
							friend={i}
							key={r}
							showVoiceLevel
							context={{
								chat: this.props.chatView.chat,
							}}
							listStatusIndicator={<div className="connectionSpinner" />}
						/>
					)}
				</A.M>
			) : (
				<A.M key={r} classNames="friend-anim" timeout={320}>
					{(e) => (
						<div
							ref={e}
							className="friend emptyFriend"
							onClick={!a && this.InitiateVoiceChat}
						>
							<div className="avatarHolder">
								<img
									className="avatar"
									src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"
									draggable={false}
								/>
							</div>
						</div>
					)}
				</A.M>
			);
		let h;
		let C = [];
		if (t) {
			C.push(e);
		}
		if (l || m) {
			C.push(
				<A.M key={n} classNames="friend-anim" timeout={320}>
					{(e) => (
						<re.bP
							friend={o}
							key={n}
							showVoiceLevel
							context={{
								chat: this.props.chatView.chat,
							}}
							listStatusIndicator={<div className="connectionSpinner" />}
						/>
					)}
				</A.M>,
			);
		} else {
			C.push(
				<A.M key={n} classNames="friend-anim" timeout={320}>
					{(e) => (
						<div
							className="friend emptyFriend"
							onClick={a ? this.VoidOnClick : this.InitiateVoiceChat}
						>
							<div className="avatarHolder ">
								<img
									className="avatar"
									src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"
									draggable={false}
								/>
							</div>
						</div>
					)}
				</A.M>,
			);
		}
		if (!t) {
			C.push(e);
		}
		h =
			a && l ? (
				<w.fu
					className="inviteButton inviteButtonJoinVoice"
					onClick={this.EndVoiceChat}
					onOKActionDescription={(0, Localize)("#Voice_StopTalking")}
				>
					{(0, Localize)("#Voice_StopTalking")}
				</w.fu>
			) : a && !l ? (
				<w.fu
					className="inviteButton inviteButtonJoinVoice"
					onClick={this.EndVoiceChat}
					onOKActionDescription={(0, Localize)("#Voice_EndVoice")}
				>
					{(0, Localize)("#Voice_EndVoice")}
				</w.fu>
			) : (
				<w.fu
					className="inviteButton inviteButtonJoinVoice"
					onClick={this.InitiateVoiceChat}
					onOKActionDescription={(0, Localize)("#Voice_StartTalking")}
				>
					{(0, Localize)("#Voice_StartTalking")}
				</w.fu>
			);
		let _ = "";
		let f = "OneOnOneVoiceRoomControls";
		let b = false;
		if (a && !l) {
			_ = (0, Localize)("#Voice_WaitingForFriendToJoin", o.display_name);
			f += " WaitingForPartner";
		} else if (l && !a) {
			if (s) {
				_ = (0, Localize)("#Voice_ChannelRejoinAvailable", o.display_name);
			} else {
				_ = (0, Localize)("#Voice_ChannelAvailable", o.display_name);
				f += " WaitingForYouFirstTime";
			}
			f += " WaitingForYou";
		} else {
			_ = p ? (
				u ? (
					<a
						title={(0, Localize)("#VoiceChatConnectingHelp")}
						className="connectionStatus"
						target="_blank"
						href="https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114"
					>
						{(0, Localize)("#VoiceChatConnecting")}
					</a>
				) : (
					""
				)
			) : !p && g ? (
				<a
					title={(0, Localize)("#VoiceChatConnectingHelp")}
					className="connectionStatus"
					target="_blank"
					href="https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114"
				>
					{(0, Localize)("#VoiceChatParterConnecting", o.display_name)}
				</a>
			) : (
				(0, Localize)("#Voice_ChannelActive", o.display_name)
			);
			f += " OneOnOneVoiceActive";
			b = true;
		}
		let y = <div className="OneOnOneVoiceStatusLabel">{_}</div>;
		let S = a
			? (0, Localize)("#Voice_EndVoice")
			: (0, Localize)("#Voice_Decline");
		return (
			<G.Z className={f} flow-children="row" focusable={false}>
				<div
					className="VoiceToggleIconCtn friendSettingsButton no-drag"
					onClick={this.OnSettingsClick}
					title={(0, Localize)("#Tooltip_VoiceSettings")}
				>
					<T.wB_ />
				</div>
				<div className="OneOnOneVoiceMembers">
					{h}
					{!b && !a && (
						<w.fu
							className="inviteButton inviteButtonDeclineVoice"
							onClick={this.OnCloseClick}
							onOKActionDescription={S}
						>
							{S}
						</w.fu>
					)}
					<G.Z
						fnCanTakeFocus={() => false}
						style={{
							display: "flex",
						}}
					>
						{C}
					</G.Z>
					{y}
				</div>
				{!b && (
					<G.Z
						className="OneOnOneVoiceClose"
						focusable
						onActivate={this.OnCloseClick}
						onOKActionDescription={S}
						title={S}
					>
						<T.sED />
					</G.Z>
				)}
			</G.Z>
		);
	}
	renderSteamDeck() {
		let e = this.props.chatView.chat.accountid_partner;
		let t = c.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(e);
		let r = c.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(e);
		let n = c.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(e);
		let i = this.props.chatView.chat.BIsVoiceAllowed();
		let a = "oneOnOneVoiceChatButton";
		let s = null;
		let o = {
			onSecondaryButton: null,
			onSecondaryActionDescription: null,
		};
		if (t && n) {
			s = <T.ETd />;
			o.onActivate = this.EndVoiceChat;
			o.onOKActionDescription = (0, Localize)("#Voice_StopTalking");
		} else if (t && !n) {
			s = <T.ETd />;
			o.onActivate = this.EndVoiceChat;
			o.onOKActionDescription = (0, Localize)("#Voice_EndVoice");
		} else if (n && !t && r) {
			s = <T.fpT />;
			o.onActivate = this.InitiateVoiceChat;
			o.onOKActionDescription = (0, Localize)("#Voice_StartTalking");
			o.onSecondaryButton = this.RejectVoiceChatRequest;
			o.onSecondaryActionDescription = (0, Localize)("#Voice_DeclineVoiceChat");
		} else if (n) {
			s = (
				<div className="WaitingForYouFirstTime">
					<T.BeN />
					<div className="Sonar">
						<div className="SonarCircle" />
					</div>
				</div>
			);
			o.onActivate = this.InitiateVoiceChat;
			o.onOKActionDescription = (0, Localize)("#Voice_StartTalking");
			o.onSecondaryButton = this.RejectVoiceChatRequest;
			o.onSecondaryActionDescription = (0, Localize)("#Voice_DeclineVoiceChat");
		} else {
			if (!i) {
				return null;
			}
			a += " NotInVoiceChat";
			s = <T.mrd />;
			o.onActivate = this.InitiateVoiceChat;
			o.onOKActionDescription = (0, Localize)("#Voice_StartChat");
		}
		return (
			<G.Z className={a} focusable {...o}>
				{s}
			</G.Z>
		);
	}
};
export function nn(e, t, r) {
	let n;
	let i = false;
	let l = true;
	if (e.invitedto instanceof o.$c) {
		n = 300;
	} else if (e.invitedto instanceof s.a$) {
		n = 340;
		let e_invitedto = e.invitedto;
		if (
			!e_invitedto.BCanInvite() &&
			!e_invitedto.BHasMember(e.invitee.accountid)
		) {
			l = false;
		}
	} else if (e.invitedto instanceof a.d) {
		i = true;
		n = 340;
		let t = e.invitedto.GetGroup();
		if (!t.BCanInvite() && !t.BHasMember(e.invitee.accountid)) {
			l = false;
		}
	}
	if (l) {
		HT(
			<Ce {...e} />,
			r,
			"InviteDialog",
			{
				strTitle: i
					? (0, Localize)("#Chat_Actions_InviteFriend_VoiceChat")
					: (0, Localize)("#Chat_Actions_DropGroupInvite_Title"),
				popupWidth: 650,
				popupHeight: n,
			},
			h8(r),
		);
	} else {
		Ic(
			r,
			(0, Localize)("#Chat_Actions_DropGroupInvite_Denied"),
			(0, Localize)("#Chat_Actions_DropGroupInvite_Denied_Description"),
		);
	}
}
Cg([F.oI], QH.prototype, "InitiateVoiceChat", null);
Cg([F.oI], QH.prototype, "VoidOnClick", null);
Cg([F.oI], QH.prototype, "EndVoiceChat", null);
Cg([F.oI], QH.prototype, "OnCloseClick", null);
Cg([F.oI], QH.prototype, "RejectVoiceChatRequest", null);
Cg([F.oI], QH.prototype, "OnSettingsClick", null);
QH = Cg([S.PA], QH);
let Ce = class extends d.Component {
	constructor(e) {
		super(e);
	}
	invitee = this.props.invitee;
	invitedToPlayer;
	invitedToGroup;
	invitedToChatRoom;
	formRef = d.createRef();
	AddMoreFriends(e) {
		let t = [];
		let r = e.currentTarget.ownerDocument.defaultView;
		t.push(this.invitee.accountid);
		if (this.props.invitedto instanceof o.$c) {
			UA(CO(e), r, this.props.chatview, true, t);
		} else if (this.props.invitedto instanceof s.a$) {
			jv(CO(e), r, this.props.invitedto, undefined, true, t);
		} else if (this.props.invitedto instanceof a.d) {
			E5(CO(e), r, this.props.invitedto.GetGroup(), this.props.invitedto, t);
		}
		this.props.closeModal();
	}
	Cancel() {
		this.props.closeModal();
	}
	OnInviteClicked(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		if (this.props.invitedto instanceof o.$c) {
			this.invitedToPlayer = this.props.invitedto;
			let e = [];
			e.push(this.invitedToPlayer.persona.m_steamid.ConvertTo64BitString());
			e.push(this.invitee.persona.m_steamid.ConvertTo64BitString());
			eJ(t, this.props.chatview, e);
		} else if (this.props.invitedto instanceof s.a$) {
			this.invitedToGroup = this.props.invitedto;
			this.invitedToGroup.InviteFriend(this.invitee.accountid);
		} else if (this.props.invitedto instanceof a.d) {
			[].push(this.invitee.accountid);
			this.invitedToChatRoom = this.props.invitedto;
			this.invitedToChatRoom
				.GetGroup()
				.InviteFriend(this.invitee.accountid, this.invitedToChatRoom);
		}
		this.props.closeModal();
	}
	render() {
		let e;
		let t;
		let r;
		let n = this.props.invitee;
		let i = c.xm.FriendStore.self;
		let l = false;
		if (this.props.invitedto instanceof o.$c) {
			e = this.props.invitedto;
		} else if (this.props.invitedto instanceof s.a$) {
			t = this.props.invitedto;
		} else if (this.props.invitedto instanceof a.d) {
			r = this.props.invitedto;
		}
		let m;
		let u;
		let A = "#Chat_Actions_DropGroupInvite_Confirm";
		let p = false;
		if (t) {
			if (t.BIsUserGroupMember(n)) {
				A = "#Chat_Actions_DropGroupInvite_Member_Confirm";
			}
			l =
				!!t.BIsClanChatRoom() &&
				c.xm.FriendStore.ClanStore.GetClan(t.GetClanID()).BIsOGG();
			m = t.name;
			u = <C.I group={t} name={t.name} />;
			p = t.BIsUserGroupMember(n);
		} else if (e) {
			A = "#Chat_Actions_DropGroupInvite_1v2_Confirm";
			m = e.display_name;
			u = (
				<div className="displayRow">
					<div className="dropGroupInviteDialog_Friend">
						<img src={i.persona.avatar_url_medium} />
					</div>
					<div className="dropGroupInviteDialog_Friend">
						<img src={e.persona.avatar_url_medium} />
					</div>
				</div>
			);
		} else if (r) {
			A = "#Chat_Actions_DropVoiceInvite_Confirm";
			m = r.name;
			u = (
				<div className="displayRow">
					<T.mrd />
				</div>
			);
		}
		return (
			<M.x_ onEscKeypress={this.Cancel}>
				<I.U9
					classNameContent="GenericConfirmDialog"
					onSubmit={this.OnInviteClicked}
					bCenterVertically
				>
					<I.Y9>
						{r
							? (0, Localize)("#Chat_Actions_InviteFriend_VoiceChat")
							: (0, Localize)("#Chat_Actions_DropGroupInvite_Title")}
					</I.Y9>
					<I.nB>
						<div
							className={`dropGroupInviteDialog displayColumn${
								t || r ? " groupInviteHeight" : ""
							}`}
						>
							<span className="dropGroupInviteDialog_Desc">
								{LocalizeReact(
									A,
									<span className="highlight">{n.display_name}</span>,
									<span className="highlight">{m}</span>,
									e && (
										<span className="highlight">
											{(0, Localize)("#Chat_You")}
										</span>
									),
								)}
							</span>
							<div
								className={`dropGroupInviteDialog_Graphic${
									l ? " isOGGGroup" : ""
								}`}
							>
								<div className="dropGroupInviteDialog_Friend">
									<img src={n.persona.avatar_url_medium} />
								</div>
								<div className="movingArrow">
									<T.i3G angle={90} />
								</div>
								{u}
								<div
									className="addMoreFriendsButton"
									onClick={this.AddMoreFriends}
								>
									<div>{(0, Localize)("#Chat_Actions_AddMoreFriends")}</div>
									<div className="ExpandArrow" />
								</div>
							</div>
						</div>
					</I.nB>
					<I.wi>
						<I.dR>
							<I.jn autoFocus onClick={this.OnInviteClicked}>
								{p
									? (0, Localize)("#Chat_SendLink")
									: (0, Localize)("#Chat_Invite")}{" "}
							</I.jn>
							<I.$n onClick={this.Cancel}>
								{(0, Localize)("#Button_Cancel")}
							</I.$n>
						</I.dR>
					</I.wi>
				</I.U9>
			</M.x_>
		);
	}
};
Cg([F.oI], Ce.prototype, "AddMoreFriends", null);
Cg([F.oI], Ce.prototype, "Cancel", null);
Cg([F.oI], Ce.prototype, "OnInviteClicked", null);
Ce = Cg([S.PA], Ce);
export let NK = class extends d.Component {
	AddFriendClick(e) {
		this.ContinueCreateChat(CO(e), GetOwningWindowForEvent(e));
	}
	ContinueCreateChat(e, t) {
		UA(e, t, this.props.chatView, true);
	}
	render() {
		this.props.chatView.chat.chat_partner;
		let e = "inviteAnotherFriendButton";
		if (this.props.additionalClasses) {
			e += ` ${this.props.additionalClasses}`;
		}
		return (
			<G.Z
				title={(0, Localize)("#Chat_AddFriend_Hint")}
				className={e}
				onActivate={this.AddFriendClick}
				onOKActionDescription={(0, Localize)(
					"#Chat_CreateChatRoom_InviteFriendsToChat",
				)}
			>
				<T.MxO />
			</G.Z>
		);
	}
};
Cg([F.oI], NK.prototype, "AddFriendClick", null);
NK = Cg([S.PA], NK);
export const Ko = ({ onClick, edge }) => (
	<div
		className={A_1("BroadcastChatExpander", edge)}
		onClick={onClick}
		title={(0, Localize)("#Broadcast_View_ShowChat")}
	>
		<T.K7s showChat />
	</div>
);
export let n$ = class extends d.Component {
	OnTextChannelCloseClick(e) {
		this.props.groupView.ClosePopoverChat();
	}
	OnChatHistoryRef(e) {
		if (e) {
			e.Focus();
		}
	}
	render() {
		let e = this.props.groupView.GetPopoverChatView();
		if (e) {
			return (
				<A.M key="quickChat" classNames="chatWindow-anim" timeout={320}>
					{(t) => (
						<div ref={t} className="VoiceRoomChatHistory">
							<div className="VoiceRoomChatWindow">
								<div className="VoiceRoomChatTitle">
									<div className="VoiceRoomTitleLabels">
										<div className="VoiceChatTextChannelName">
											{(0, Localize)("#Chat_Scratch_Pad")}
										</div>
									</div>
									<div
										className="MinimizeTextChat"
										onClick={this.OnTextChannelCloseClick}
									>
										<T.sED />
									</div>
								</div>
								<div className="VoiceChatTextChannelDesc">
									{(0, Localize)("#Chat_Scratch_Pad_Desc")}
								</div>
								<H.D chatView={e} isActive ref={this.OnChatHistoryRef} />
							</div>
						</div>
					)}
				</A.M>
			);
		} else {
			return null;
		}
	}
};
Cg([F.oI], n$.prototype, "OnTextChannelCloseClick", null);
Cg([F.oI], n$.prototype, "OnChatHistoryRef", null);
n$ = Cg([S.PA], n$);
export let SU = class extends d.Component {
	constructor(e) {
		super(e);
	}
	OnBlock() {
		c.xm.FriendStore.BlockPlayer(this.props.friend, false);
		c.xm.UIStore.CloseTabByID(this.props.chatView.GetUniqueID());
	}
	OnAllow() {
		c.xm.FriendStore.SetApprovedNonFriendMessages(this.props.friend.accountid);
	}
	render() {
		return (
			<div className="NotAFriendMessage">
				<div className="NotAFriendBody">
					<div className="Exclamation">
						<T.eTF />
					</div>
					<div className="Explanation">
						<div className="ExplanationHeader">
							{(0, Localize)("#DirectMessageFromNonFriend")}
						</div>
						<div className="ExplanationBody">
							{(0, Localize)("#DirectMessageFromNonFriendNote")}
						</div>
						<y.uU
							href="https://support.steampowered.com/kb_article.php?ref=1266-OAFV-8478"
							className="ExplanationMoreInfo"
						>
							{(0, Localize)("#Generic_More_Info")}
						</y.uU>
					</div>
					<div className="Buttons">
						<button className="NotAFriendActionButton" onClick={this.OnBlock}>
							{(0, Localize)("#NonFriendAction_Block")}
						</button>
						<button className="NotAFriendActionButton" onClick={this.OnAllow}>
							{(0, Localize)("#NonFriendAction_Allow")}
						</button>
					</div>
				</div>
			</div>
		);
	}
};
Cg([F.oI], SU.prototype, "OnBlock", null);
Cg([F.oI], SU.prototype, "OnAllow", null);
SU = Cg([S.PA], SU);
export let J3 = class extends d.Component {
	render() {
		const { chatView, friend, ...r } = this.props;
		const n = chatView.chat instanceof a.d;
		return (
			<H_1
				message={
					n
						? (0, Localize)("#Chat_DropToInviteGroup")
						: (0, Localize)("#Chat_DropToInvite")
				}
				name={friend.display_name}
				renderImage={() => <B.i8 size="Large" persona={friend.persona} />}
				{...r}
			/>
		);
	}
};
J3 = Cg([S.PA], J3);
export let C1 = class extends d.Component {
	render() {
		const { chatView, group, clan, ...n } = this.props;
		if (!group && !clan) {
			AssertMsg(
				false,
				"Either a group or clan must be passed to DropGroupToInviteFriendMessage.",
			);
			return null;
		}
		const i = (group || clan).name;
		return (
			<H_1
				message={(0, Localize)("#Chat_DropGroupToInviteFriend")}
				name={i}
				renderImage={() =>
					clan ? <C._O clan={clan} size="large" /> : <C.I group={group} large />
				}
				{...n}
			/>
		);
	}
};
C1 = Cg([S.PA], C1);
export let ln = class extends d.Component {
	render() {
		let e = false;
		if (!(this.props.chatView.chat instanceof l.s)) {
			return null;
		}
		let t = this.props.chatView.chat;
		if (t.is_friend_typing) {
			e = true;
		}
		return (
			<div
				className={`FriendChatTypingNotification${e ? " FriendIsTyping" : ""}`}
			>
				{(0, Localize)("#Friend_Chat_Typing", t.chat_partner.display_name)}
			</div>
		);
	}
};
ln = Cg([S.PA], ln);
