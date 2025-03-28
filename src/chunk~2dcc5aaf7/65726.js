import {
	GetOwningWindowForEvent,
	BIsDragLeaveOutOfElement,
} from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import { BIsChinaRealm } from "../../actual_src/clienttypes/realm.js";
import a from "./44234.js";
import s from "./96127.js";
import o, { _k, CO } from "./52912.js";
import l from "./95773.js";
import c from "./53414.js";
import m from "./14182.js";
import u, { Tz } from "./27847.js";
import d from "./59704.js";
import A, { Yj } from "./50979.js";
import p, { PA } from "./41230.js";
import g from "./63696.js";
import h from "./23038.js";
import C from "./20590.js";
import _ from "./69164.js";
import f from "./8573.js";
import b from "./23024.js";
import y from "./64608.js";
import S from "./50376.js";
import { A as A_1 } from "./90765.js";
import I from "./52451.js";
import E, { Qn } from "./72476.js";
import M, { UA } from "./69649.js";
import T from "./98829.js";
import R from "./83665.js";
export let IV = class extends g.Component {
	static contextType = E.QO;
	m_elDiv;
	constructor(e) {
		super(e);
		this.state = {
			ulSelectedGroupID: "",
		};
	}
	BindDiv(e) {
		this.m_elDiv = e;
	}
	get div() {
		return this.m_elDiv;
	}
	get recommendedHeight() {
		return this.m_elDiv.clientHeight;
	}
	get maximumHeight() {
		return this.recommendedHeight;
	}
	get minimumHeight() {
		return 0;
	}
	OnGroupSelected(e) {
		if (e == this.state.ulSelectedGroupID) {
			this.setState({
				ulSelectedGroupID: "",
			});
		} else {
			this.setState({
				ulSelectedGroupID: e,
			});
		}
	}
	render() {
		let e = this.props.chats.currentChatRoomGroups.sort(
			(e, t) => t.time_last_activity - e.time_last_activity,
		);
		const t = BIsChinaRealm(a.TS.EREALM);
		return (
			<div className="ChatRoomList CompactFriendsList" ref={this.BindDiv}>
				{e.length == 0 && (
					<div className="ChatRoomList_Empty">
						{(0, Localize)("#Chat_ChatRoomList_Empty")}
						<br />
						<br />
						{!t &&
							!this.context?.IN_GAMEPADUI &&
							LocalizeReact(
								"#Chat_ChatRoomList_Empty_How",
								<d.uU href={`${a.TS.COMMUNITY_BASE_URL}my/groups/`}>
									{(0, Localize)("#Chat_ChatRoomList_Empty_HowLink")}
								</d.uU>,
							)}
						{!t && this.context?.IN_GAMEPADUI && (
							<>
								<div className="ChatRoomList_Empty_Description">
									{(0, Localize)("#Chat_ChatRoomList_Empty_SteamDeck")}
								</div>
								<y.$n
									onClick={(e) => {
										let t = GetOwningWindowForEvent(e);
										UA(_k(t), t);
									}}
								>
									{(0, Localize)("#Chat_ChatRoomList_Empty_StartNew_SteamDeck")}
								</y.$n>
							</>
						)}
					</div>
				)}
				{e.map((e) => (
					<AX key={e.GetGroupID()} group={e} />
				))}
				<div className="disconnectBlocker" />
			</div>
		);
	}
};
Cg([I.oI], IV.prototype, "BindDiv", null);
Cg([I.oI], IV.prototype, "OnGroupSelected", null);
IV = Cg([p.PA], IV);
export const AX = PA((e) => {
	const { group, bShowLastChat, bHideUnreadMention, additionalElements } = e;
	const a = Qn();
	const [s, setS] = g.useState(false);
	const [d, setD] = g.useState(false);
	const [p, setP] = g.useState(false);
	const f = g.useCallback(() => setP(true), []);
	const b = g.useCallback(() => setP(false), []);
	const y = g.useCallback(
		(e) => {
			const t_room_with_last_message = group.room_with_last_message;
			if (bShowLastChat && t_room_with_last_message) {
				l.xm.UIStore.ShowAndOrActivateChatRoomGroup(
					CO(e),
					group,
					true,
				).SelectChat(t_room_with_last_message.GetRoomID());
			} else {
				l.xm.UIStore.ShowAndOrActivateChatRoomGroup(CO(e), group, true);
			}
		},
		[bShowLastChat, group],
	);
	const I = g.useCallback((e) => {
		setS((e) => !e);
		e.stopPropagation();
	}, []);
	const M = g.useCallback(
		(e) => {
			Tz(e, group);
		},
		[group],
	);
	const T = g.useCallback(() => setD(true), []);
	const R = g.useCallback(() => setD(false), []);
	const k = ((e, t = true) => {
		const [r, setR] = g.useState(undefined);
		const IRef = g.useRef(false);
		const a = g.useCallback(
			(t) => {
				if (e.BIsClanChatRoom()) {
					let t = l.xm.FriendStore.ClanStore.GetClan(e.GetClanID());
					o.ZM.DragDropManager.StartDrag({
						type: "clan",
						clan: t,
					});
				} else {
					o.ZM.DragDropManager.StartDrag({
						type: "chatroomgroup",
						group: e,
					});
				}
			},
			[e],
		);
		const s = g.useCallback((e) => {
			o.ZM.DragDropManager.EndDrag();
		}, []);
		const c = g.useCallback((e) => {
			let t = o.ZM.DragDropManager.GetDragData();
			if (t && t.type == "friend") {
				let t_friend = t.friend;
				IRef.current = true;
				e.preventDefault();
				setR(t_friend);
			} else {
				IRef.current = false;
			}
			if (e) {
				e.preventDefault();
				if (IRef.current) {
					e.stopPropagation();
				}
			}
		}, []);
		const m = g.useCallback((e) => {
			if (IRef.current) {
				e.preventDefault();
				e.stopPropagation();
			}
		}, []);
		const u = g.useCallback((e) => {
			if (BIsDragLeaveOutOfElement(e)) {
				IRef.current = false;
				setR(undefined);
			}
		}, []);
		const d = g.useCallback(
			(t) => {
				let r = o.ZM.DragDropManager.GetDragData();
				if (r && r.type == "friend") {
					t.preventDefault();
					t.stopPropagation();
					let i = e.memberList.member_list.slice();
					let a = r;
					if (a.friend != null && i.includes(a.friend)) {
						return;
					}
					o.ZM.DragDropManager.SetDropConsumed();
					e.InviteFriend(a.friend.accountid);
					setR(undefined);
				}
			},
			[e],
		);
		let A = {};
		if (t) {
			A.onDragEnter = c;
			A.onDragOver = m;
			A.onDragLeave = u;
			A.onDrop = d;
		}
		A.draggable = true;
		A.onDragStart = a;
		A.onDragEnd = s;
		return A;
	})(group, true);
	let D = group.watching_broadcast_steamid !== null;
	let t_hasVoiceRoom = group.hasVoiceRoom;
	const x = A_1(
		e.className,
		"ChatRoomListGroupItem",
		!group.hasVoiceRoom && "NoChannels",
		s && "ShowAllChannels",
		d && "NonGroupHovered",
		D && "HasLinkedBroadcast",
	);
	return (
		<C.Y onEnter={f} onLeave={b} topOffset="-300px" bottomOffset="-200px">
			<_.Z
				className={x}
				{...k}
				focusable
				onOKButton={y}
				onMenuButton={M}
				onMenuActionDescription={(0, Localize)("#Chat_ChatRoomGroup_Options")}
			>
				<div
					className="ChatRoomListGroupItem_header"
					onClick={y}
					onContextMenu={M}
				>
					<c.I group={p ? group : undefined} small />
					{p && (
						<>
							{!a && D && <N group={group} />}
							<div className="groupNameStatusContainer">
								<div className="displayRow">
									<div className="chatRoomName">{group.name}</div>
									{!a && (
										<div
											className="ContextMenuButton"
											onClick={M}
											onMouseEnter={T}
											onMouseLeave={R}
										>
											<S.GB9 />
										</div>
									)}
								</div>
								{!a && !s && t_hasVoiceRoom && <L group={group} />}
								{bShowLastChat && <F group={group} />}
							</div>
							{!bHideUnreadMention && <RB group={group} />}
						</>
					)}
					{!a && t_hasVoiceRoom && (
						<div onMouseEnter={T} onMouseLeave={R}>
							<O expanded={s} onClick={I} />
						</div>
					)}
					{additionalElements}
				</div>
				{!a && t_hasVoiceRoom && (
					<div className="detailsView">
						<div className="ChatRoomListGroupItemChatRooms">
							<P group={group} expanded={s} />
						</div>
					</div>
				)}
			</_.Z>
		</C.Y>
	);
});
const N = PA((e) => {
	const { group } = e;
	let r = new f.b(group.watching_broadcast_steamid);
	const n = ((e) => {
		const [t, setT] = g.useState();
		g.useEffect(() => {
			if (!e) {
				setT(undefined);
				return;
			}
			const t = b.BroadcastWatchStore.StartInfo(e);
			setT(t);
			return () => b.BroadcastWatchStore.StopInfo(t);
		}, [e]);
		if (t && t.m_steamIDBroadcast === e) {
			return t;
		} else {
			return null;
		}
	})(r && r.ConvertTo64BitString());
	let i = n?.m_bInitialized
		? n.m_strTitle ||
			n.m_strAppTitle ||
			n.m_strAppTitle ||
			(0, Localize)(
				"#PersonaStateWatchingBroadcast_Player",
				l.xm.FriendStore.GetPlayer(r.GetAccountID()).display_name,
			)
		: undefined;
	return (
		<div className="steamTVSubtitle">
			<S.P7C />
			{": "}
			{i}{" "}
		</div>
	);
});
const F = PA((e) => {
	const { group } = e;
	const t_room_with_last_message = group.room_with_last_message;
	if (!t_room_with_last_message) {
		return null;
	}
	const n = l.xm.ChatStore.NotificationBBCodeParser.ParseBBCode(
		t_room_with_last_message.GetLastMessage(),
		{
			chat: t_room_with_last_message,
			unAccountIDSender: t_room_with_last_message.accountid_last_message,
			key: t_room_with_last_message.GetLastMessage(),
			rtTimestamp: t_room_with_last_message.time_last_message,
			onLoad: () => {},
		},
	);
	const i = l.xm.FriendStore.GetPlayer(
		t_room_with_last_message.accountid_last_message,
	);
	const a = (n && n.body) || Yj(t_room_with_last_message.GetLastMessage());
	return (
		<div className="lastChatMessage">
			<div>
				{`${i.display_name} : `}
				{a}
			</div>
		</div>
	);
});
export let RB = class extends g.Component {
	render() {
		let e = this.props.group;
		let t = this.props.chat;
		if ((e && !e.hasUnreadChatMessage) || (t && !t.has_any_unread_messages)) {
			return null;
		}
		let r = `${this.props.className || ""} ChatUnreadMessageIndicator`;
		if ((e && e.HasUnreadMention) || (t && t.has_unread_mention)) {
			r += " UnreadMention";
		}
		return (
			<div className={r}>
				<div className="chatUnreadCircle">@</div>
			</div>
		);
	}
};
function O(e) {
	let t = e.expanded
		? (0, Localize)("#Chat_ChatRoomListO_OpenGroupCollapse")
		: (0, Localize)("#Chat_ChatRoomListO_OpenGroupExpand");
	return (
		<div className="openGroupButton" title={t} onClick={e.onClick}>
			<S.F2T />
		</div>
	);
}
RB = Cg([p.PA], RB);
let P = PA((e) => {
	let t = [];
	for (let r of e.group.voiceRoomList) {
		if (e.expanded || r.voice_active_contains_self) {
			t.push(r);
		}
	}
	let r = null;
	if (t) {
		r = t.map((e) => (
			<R.M
				classNames="heightcollapseandfade-anim"
				timeout={300}
				key={e.unique_id}
			>
				{(t) => (
					<m.mr
						containerRef={t}
						key={e.unique_id}
						chat={e}
						bRenameActive={false}
						context="ChatRoomList"
						onSelect={e.StartVoiceChat}
					/>
				)}
			</R.M>
		));
	}
	return <h.A>{r}</h.A>;
});
let L = PA((e) => {
	let t = [];
	for (let r of e.group.voiceRoomList) {
		if (r.voice_active_contains_self) {
			continue;
		}
		let r_voice_active_member_list = r.voice_active_member_list;
		if (r_voice_active_member_list.member_count == 0) {
			continue;
		}
		let n = r_voice_active_member_list.member_list.filter((e) => e.is_friend);
		if (n.length != 0) {
			n = r_voice_active_member_list.member_list.slice();
			n.sort(s.$c.FriendSortByFriendOrNotComparator);
			t.push({
				ulRoomID: r.unique_id,
				rgFriends: n,
			});
		}
	}
	if (t && t.length != 0) {
		return (
			<div className="membersInVoice">
				<div className="voiceChannelIcon">
					<S.mrd />
				</div>
				{t.map((e) => (
					<Z key={e.ulRoomID} friendsInRoom={e} />
				))}
			</div>
		);
	} else {
		return null;
	}
});
let Z = class extends g.Component {
	render() {
		let e = this.props.friendsInRoom;
		return (
			<span className="voiceChatGroup">
				{e.rgFriends.map((e) => (
					<T.Rg
						key={e.accountid}
						friend={e}
						context={{}}
						disableContextMenu={false}
					>
						<img
							className={`voiceFriendAvatar${
								e.is_friend ? "" : " isNotFriend"
							}`}
							src={e.persona.avatar_url}
							draggable={false}
						/>
					</T.Rg>
				))}
			</span>
		);
	}
};
Z = Cg([p.PA], Z);
