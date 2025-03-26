var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./28987.js");
var a = require("./44234.js");
var s = require("./96127.js");
var o = require("./52912.js");
var l = require("./95773.js");
var c = require("./53414.js");
var m = require("./14182.js");
var u = require("./27847.js");
var d = require("./59704.js");
var A = require("./50979.js");
var p = require(/*webcrack:missing*/ "./41230.js");
var g = require(/*webcrack:missing*/ "./63696.js");
var h = require(/*webcrack:missing*/ "./23038.js");
var C = require(/*webcrack:missing*/ "./20590.js");
var _ = require(/*webcrack:missing*/ "./69164.js");
var f = require(/*webcrack:missing*/ "./8573.js");
var b = require("./23024.js");
var y = require("./64608.js");
var S = require(/*webcrack:missing*/ "./50376.js");
var w = require(/*webcrack:missing*/ "./90765.js");
import {
	GetOwningWindowForEvent,
	BIsDragLeaveOutOfElement,
} from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var I = require(/*webcrack:missing*/ "./52451.js");
var E = require(/*webcrack:missing*/ "./72476.js");
var M = require("./69649.js");
var T = require("./98829.js");
var R = require("./83665.js");
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
		const t = (0, i.nA)(a.TS.EREALM);
		return g.createElement(
			"div",
			{
				className: "ChatRoomList CompactFriendsList",
				ref: this.BindDiv,
			},
			e.length == 0 &&
				g.createElement(
					"div",
					{
						className: "ChatRoomList_Empty",
					},
					(0, Localize)("#Chat_ChatRoomList_Empty"),
					g.createElement("br", null),
					g.createElement("br", null),
					!t &&
						!this.context?.IN_GAMEPADUI &&
						LocalizeReact(
							"#Chat_ChatRoomList_Empty_How",
							g.createElement(
								d.uU,
								{
									href: a.TS.COMMUNITY_BASE_URL + "my/groups/",
								},
								(0, Localize)("#Chat_ChatRoomList_Empty_HowLink"),
							),
						),
					!t &&
						this.context?.IN_GAMEPADUI &&
						g.createElement(
							g.Fragment,
							null,
							g.createElement(
								"div",
								{
									className: "ChatRoomList_Empty_Description",
								},
								(0, Localize)("#Chat_ChatRoomList_Empty_SteamDeck"),
							),
							g.createElement(
								y.$n,
								{
									onClick: (e) => {
										let t = GetOwningWindowForEvent(e);
										(0, M.UA)((0, o._k)(t), t);
									},
								},
								(0, Localize)("#Chat_ChatRoomList_Empty_StartNew_SteamDeck"),
							),
						),
				),
			e.map((e) =>
				g.createElement(AX, {
					key: e.GetGroupID(),
					group: e,
				}),
			),
			g.createElement("div", {
				className: "disconnectBlocker",
			}),
		);
	}
};
(0, n.Cg)([I.oI], IV.prototype, "BindDiv", null);
(0, n.Cg)([I.oI], IV.prototype, "OnGroupSelected", null);
IV = (0, n.Cg)([p.PA], IV);
export const AX = (0, p.PA)(function (e) {
	const {
		group: t,
		bShowLastChat: r,
		bHideUnreadMention: n,
		additionalElements: i,
	} = e;
	const a = (0, E.Qn)();
	const [s, m] = g.useState(false);
	const [d, A] = g.useState(false);
	const [p, h] = g.useState(false);
	const f = g.useCallback(() => h(true), []);
	const b = g.useCallback(() => h(false), []);
	const y = g.useCallback(
		(e) => {
			const n = t.room_with_last_message;
			if (r && n) {
				l.xm.UIStore.ShowAndOrActivateChatRoomGroup(
					(0, o.CO)(e),
					t,
					true,
				).SelectChat(n.GetRoomID());
			} else {
				l.xm.UIStore.ShowAndOrActivateChatRoomGroup((0, o.CO)(e), t, true);
			}
		},
		[r, t],
	);
	const I = g.useCallback((e) => {
		m((e) => !e);
		e.stopPropagation();
	}, []);
	const M = g.useCallback(
		(e) => {
			(0, u.Tz)(e, t);
		},
		[t],
	);
	const T = g.useCallback(() => A(true), []);
	const R = g.useCallback(() => A(false), []);
	const k = (function (e, t = true) {
		const [r, n] = g.useState(undefined);
		const i = g.useRef(false);
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
				let r = t.friend;
				i.current = true;
				e.preventDefault();
				n(r);
			} else {
				i.current = false;
			}
			if (e) {
				e.preventDefault();
				if (i.current) {
					e.stopPropagation();
				}
			}
		}, []);
		const m = g.useCallback((e) => {
			if (i.current) {
				e.preventDefault();
				e.stopPropagation();
			}
		}, []);
		const u = g.useCallback((e) => {
			if (BIsDragLeaveOutOfElement(e)) {
				i.current = false;
				n(undefined);
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
					if (a.friend != null && i.indexOf(a.friend) != -1) {
						return;
					}
					o.ZM.DragDropManager.SetDropConsumed();
					e.InviteFriend(a.friend.accountid);
					n(undefined);
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
	})(t, true);
	let D = t.watching_broadcast_steamid !== null;
	let z = t.hasVoiceRoom;
	const x = (0, w.A)(
		e.className,
		"ChatRoomListGroupItem",
		!t.hasVoiceRoom && "NoChannels",
		s && "ShowAllChannels",
		d && "NonGroupHovered",
		D && "HasLinkedBroadcast",
	);
	return g.createElement(
		C.Y,
		{
			onEnter: f,
			onLeave: b,
			topOffset: "-300px",
			bottomOffset: "-200px",
		},
		g.createElement(
			_.Z,
			{
				className: x,
				...k,
				focusable: true,
				onOKButton: y,
				onMenuButton: M,
				onMenuActionDescription: (0, Localize)("#Chat_ChatRoomGroup_Options"),
			},
			g.createElement(
				"div",
				{
					className: "ChatRoomListGroupItem_header",
					onClick: y,
					onContextMenu: M,
				},
				g.createElement(c.I, {
					group: p ? t : undefined,
					small: true,
				}),
				p &&
					g.createElement(
						g.Fragment,
						null,
						!a &&
							D &&
							g.createElement(N, {
								group: t,
							}),
						g.createElement(
							"div",
							{
								className: "groupNameStatusContainer",
							},
							g.createElement(
								"div",
								{
									className: "displayRow",
								},
								g.createElement(
									"div",
									{
										className: "chatRoomName",
									},
									t.name,
								),
								!a &&
									g.createElement(
										"div",
										{
											className: "ContextMenuButton",
											onClick: M,
											onMouseEnter: T,
											onMouseLeave: R,
										},
										g.createElement(S.GB9, null),
									),
							),
							!a &&
								!s &&
								z &&
								g.createElement(L, {
									group: t,
								}),
							r &&
								g.createElement(F, {
									group: t,
								}),
						),
						!n &&
							g.createElement(RB, {
								group: t,
							}),
					),
				!a &&
					z &&
					g.createElement(
						"div",
						{
							onMouseEnter: T,
							onMouseLeave: R,
						},
						g.createElement(O, {
							expanded: s,
							onClick: I,
						}),
					),
				i,
			),
			!a &&
				z &&
				g.createElement(
					"div",
					{
						className: "detailsView",
					},
					g.createElement(
						"div",
						{
							className: "ChatRoomListGroupItemChatRooms",
						},
						g.createElement(P, {
							group: t,
							expanded: s,
						}),
					),
				),
		),
	);
});
const N = (0, p.PA)(function (e) {
	const { group: t } = e;
	let r = new f.b(t.watching_broadcast_steamid);
	const n = (function (e) {
		const [t, r] = g.useState();
		g.useEffect(() => {
			if (!e) {
				r(undefined);
				return;
			}
			const t = b.BroadcastWatchStore.StartInfo(e);
			r(t);
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
			(0, Localize)(
				"#PersonaStateWatchingBroadcast_Player",
				l.xm.FriendStore.GetPlayer(r.GetAccountID()).display_name,
			)
		: undefined;
	return g.createElement(
		"div",
		{
			className: "steamTVSubtitle",
		},
		g.createElement(S.P7C, null),
		": ",
		i,
		" ",
	);
});
const F = (0, p.PA)(function (e) {
	const { group: t } = e;
	const r = t.room_with_last_message;
	if (!r) {
		return null;
	}
	const n = l.xm.ChatStore.NotificationBBCodeParser.ParseBBCode(
		r.GetLastMessage(),
		{
			chat: r,
			unAccountIDSender: r.accountid_last_message,
			key: r.GetLastMessage(),
			rtTimestamp: r.time_last_message,
			onLoad: () => {},
		},
	);
	const i = l.xm.FriendStore.GetPlayer(r.accountid_last_message);
	const a = (n && n.body) || (0, A.Yj)(r.GetLastMessage());
	return g.createElement(
		"div",
		{
			className: "lastChatMessage",
		},
		g.createElement("div", null, i.display_name + " : ", a),
	);
});
export let RB = class extends g.Component {
	render() {
		let e = this.props.group;
		let t = this.props.chat;
		if ((e && !e.hasUnreadChatMessage) || (t && !t.has_any_unread_messages)) {
			return null;
		}
		let r = (this.props.className || "") + " ChatUnreadMessageIndicator";
		if ((e && e.HasUnreadMention) || (t && t.has_unread_mention)) {
			r += " UnreadMention";
		}
		return g.createElement(
			"div",
			{
				className: r,
			},
			g.createElement(
				"div",
				{
					className: "chatUnreadCircle",
				},
				"@",
			),
		);
	}
};
function O(e) {
	let t = e.expanded
		? (0, Localize)("#Chat_ChatRoomListO_OpenGroupCollapse")
		: (0, Localize)("#Chat_ChatRoomListO_OpenGroupExpand");
	return g.createElement(
		"div",
		{
			className: "openGroupButton",
			title: t,
			onClick: e.onClick,
		},
		g.createElement(S.F2T, null),
	);
}
RB = (0, n.Cg)([p.PA], RB);
let P = (0, p.PA)((e) => {
	let t = [];
	for (let r of e.group.voiceRoomList) {
		if (e.expanded || r.voice_active_contains_self) {
			t.push(r);
		}
	}
	let r = null;
	if (t) {
		r = t.map((e) =>
			g.createElement(
				R.M,
				{
					classNames: "heightcollapseandfade-anim",
					timeout: 300,
					key: e.unique_id,
				},
				(t) =>
					g.createElement(m.mr, {
						containerRef: t,
						key: e.unique_id,
						chat: e,
						bRenameActive: false,
						context: "ChatRoomList",
						onSelect: e.StartVoiceChat,
					}),
			),
		);
	}
	return g.createElement(h.A, null, r);
});
let L = (0, p.PA)((e) => {
	let t = [];
	for (let r of e.group.voiceRoomList) {
		if (r.voice_active_contains_self) {
			continue;
		}
		let e = r.voice_active_member_list;
		if (e.member_count == 0) {
			continue;
		}
		let n = e.member_list.filter((e) => e.is_friend);
		if (n.length != 0) {
			n = e.member_list.slice();
			n.sort(s.$c.FriendSortByFriendOrNotComparator);
			t.push({
				ulRoomID: r.unique_id,
				rgFriends: n,
			});
		}
	}
	if (t && t.length != 0) {
		return g.createElement(
			"div",
			{
				className: "membersInVoice",
			},
			g.createElement(
				"div",
				{
					className: "voiceChannelIcon",
				},
				g.createElement(S.mrd, null),
			),
			t.map((e) =>
				g.createElement(z, {
					key: e.ulRoomID,
					friendsInRoom: e,
				}),
			),
		);
	} else {
		return null;
	}
});
let z = class extends g.Component {
	render() {
		let e = this.props.friendsInRoom;
		return g.createElement(
			"span",
			{
				className: "voiceChatGroup",
			},
			e.rgFriends.map((e) =>
				g.createElement(
					T.Rg,
					{
						key: e.accountid,
						friend: e,
						context: {},
						disableContextMenu: false,
					},
					g.createElement("img", {
						className:
							"voiceFriendAvatar" + (e.is_friend ? "" : " isNotFriend"),
						src: e.persona.avatar_url,
						draggable: false,
					}),
				),
			),
		);
	}
};
z = (0, n.Cg)([p.PA], z);
