var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./44234.js");
var a = require("./52912.js");
var s = require(/*webcrack:missing*/ "./54644.js");
var o = require("./95773.js");
var l = require("./53414.js");
var c = require("./78060.js");
var m = require("./97422.js");
var u = require("./13869.js");
var d = require("./59704.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require(/*webcrack:missing*/ "./63696.js");
var g = require(/*webcrack:missing*/ "./31084.js");
var h = require(/*webcrack:missing*/ "./88750.js");
var C = require("./64608.js");
var _ = require(/*webcrack:missing*/ "./46108.js");
var f = require(/*webcrack:missing*/ "./52451.js");
var b = require(/*webcrack:missing*/ "./50376.js");
var y = require("./88620.js");
var S = require("./65815.js");
var w = S;
var B = require("./76319.js");
var v = require(/*webcrack:missing*/ "./72476.js");
export function Tz(e, t, r) {
	let n;
	let i = (0, a.CO)(e);
	if (t.BIsClanChatRoom()) {
		n = o.xm.FriendStore.ClanStore.GetClan(t.GetClanID());
	}
	return (0, g.lX)(
		p.createElement(R, {
			browserContext: i,
			group: t,
			clan: n,
			context: r,
			ownerWindow: (0, s.uX)(e),
		}),
		e,
	);
}
export function fM(e, t, r) {
	let n;
	let i = (0, a.CO)(e);
	if (t.GetChatGroupIDIfLoaded()) {
		n = o.xm.ChatStore.GetChatRoomGroup(t.GetChatGroupIDIfLoaded());
	}
	return (0, g.lX)(
		p.createElement(R, {
			browserContext: i,
			group: n,
			clan: t,
			context: r,
			ownerWindow: (0, s.uX)(e),
		}),
		e,
	);
}
function M(e, t) {
	(0, B.L)("FindGamesToPlayWithFriends/ChatRoom");
	e.stopPropagation();
	(0, m.Hf)(t, (0, a.CO)(e));
}
function T(e, t, r, n, a) {
	if (
		i.TS.IN_CLIENT &&
		o.xm.SettingsStore.BClientHasFeatureOrOnWeb("FriendsFilter")
	) {
		let i = e < 2 || e > 8;
		return p.createElement(
			h.kt,
			{
				disabled: i,
				key: n,
				onSelected: a,
				className: w.ChatroomContextMenuDisableableItem,
			},
			t,
			i &&
				p.createElement(
					"div",
					{
						className: w.DisabledDescriptor,
					},
					(0, _.we)(r, 2, 8),
				),
		);
	}
	return null;
}
class R extends p.Component {
	static contextType = v.QO;
	OpenChatWindow(e) {
		if (this.props.group) {
			o.xm.UIStore.ShowAndOrActivateChatRoomGroup(
				this.props.browserContext,
				this.props.group,
				true,
			);
		} else {
			this.props.clan.OpenChatDialog(this.props.browserContext, true);
		}
	}
	ShowClanProfile(e) {
		let t;
		if (this.props.clan.BIsOGG()) {
			t = `${i.TS.COMMUNITY_BASE_URL}app/${this.props.clan.GetOGGAppID()}`;
		} else {
			let e = this.props.clan.steamid;
			t = `${i.TS.COMMUNITY_BASE_URL}gid/${e.ConvertTo64BitString()}`;
		}
		(0, d.EP)(e, t);
		e.stopPropagation();
	}
	FindGamesToPlay(e) {
		M(
			e,
			this.props.group.memberList.member_list.map((e) => e.accountid),
		);
	}
	LeaveChatRoomGroup(e) {
		(0, l.qj)(e.currentTarget.ownerDocument.defaultView, this.props.group);
	}
	render() {
		let e = [];
		let t = this.props.group;
		let r = this.props.clan;
		let n = this.props.context || {};
		let i = o.xm.FriendStore.FavoritesStore;
		let a = this.props.group.memberList.member_list.length;
		if (n.tab) {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "closetab",
						onSelected: () => {
							o.xm.UIStore.CloseTab(this.props.browserContext, n.tab);
						},
					},
					(0, _.we)(
						this.context?.IN_GAMEPADUI
							? "#Chat_CloseTabAction_SteamDeck"
							: "#Chat_CloseTabAction",
					),
				),
			);
		} else if (!n.is_chat_window) {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "opentab",
						onSelected: this.OpenChatWindow,
					},
					(0, _.we)("#Chat_Actions_OpenChat"),
				),
			);
		}
		if (r && !r.BIsOGG()) {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "viewprofile",
						onSelected: this.ShowClanProfile,
					},
					(0, _.we)("#Friend_Menu_ViewProfile"),
				),
			);
		}
		if (this.props.group.readyToRender) {
			const t = T(
				a,
				(0, _.we)("#Chat_Actions_FindGamesToPlay"),
				"#Chat_Tooltip_FindGamesToPlay_UserCountRestriction_ChatGroup",
				"findgamestoplay",
				this.FindGamesToPlay,
			);
			if (t) {
				e.push(t);
			}
		}
		e.push(
			p.createElement(
				h.kt,
				{
					key: "leavechatroom",
					onSelected: this.LeaveChatRoomGroup,
				},
				(0, _.we)(
					r
						? "#Chat_Actions_LeaveChatRoom"
						: "#Chat_Actions_LeaveChatRoomGroup",
				),
			),
		);
		let s = r
			? {
					clan: r,
				}
			: {
					chat: t,
				};
		if (o.xm.FriendStore.FavoritesStore.BIsFavorited(s)) {
			if (n.is_favorites) {
				e.push(
					p.createElement(
						h.kt,
						{
							key: "quickaccess",
							onSelected: () => {
								i.RemoveFromFavorites(s);
							},
						},
						(0, _.we)("#Friend_Menu_RemoveFromQuickAccess"),
					),
				);
			}
		} else {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "quickaccess",
						onSelected: () => {
							i.AddToFavorites(s);
						},
					},
					(0, _.we)("#Friend_Menu_AddToQuickAccess"),
				),
			);
		}
		if (r && r.BIsOGG()) {
			e.push(
				p.createElement(m.Rm, {
					unAppID: r.GetOGGAppID(),
					strGameName: r.name,
				}),
			);
		}
		return p.createElement(
			h.tz,
			{
				className: "chatRoomListItemContextMenu",
				label: t.name,
			},
			e,
		);
	}
}
export function ae(e, t, r, n, i) {
	if (t.GetDefaultChatID() == r) {
		return null;
	}
	if (D.BIsMenuEmpty(t, r, !!i)) {
		return null;
	}
	let a = (0, s.uX)(n);
	return (0, g.lX)(
		p.createElement(D, {
			browserContext: e,
			group: t,
			roomID: r,
			ownerWindow: a,
			onStartRoomRename: i,
		}),
		n,
	);
}
(0, n.Cg)([f.oI], R.prototype, "OpenChatWindow", null);
(0, n.Cg)([f.oI], R.prototype, "ShowClanProfile", null);
(0, n.Cg)([f.oI], R.prototype, "FindGamesToPlay", null);
(0, n.Cg)([f.oI], R.prototype, "LeaveChatRoomGroup", null);
class D extends p.PureComponent {
	ShowInviteDialog() {
		let e = this.props.group.GetChatRoom(this.props.roomID);
		(0, y.E5)(
			this.props.browserContext,
			this.props.ownerWindow,
			this.props.group,
			e,
		);
	}
	FindGamesToPlayInChannel(e) {
		M(
			e,
			this.props.group
				.GetChatRoom(this.props.roomID)
				.voice_active_member_list.member_list.map((e) => e.accountid),
		);
	}
	SaveVoiceRoom(e) {
		let t = (0, s.uX)(e);
		var r;
		var n;
		var i;
		r = t;
		n = this.props.group;
		i = this.props.roomID;
		(0, u.HT)(
			p.createElement(N, {
				group: n,
				roomID: i,
			}),
			r,
			"SaveVoiceRoomDialog",
			{
				strTitle: (0, _.we)("#Chat_SaveVoiceRoom"),
				popupWidth: 664,
				popupHeight: 380,
			},
			(0, a.h8)(r),
		);
	}
	RemoveRoom() {
		(0, c.Ci)(
			this.props.ownerWindow,
			(0, _.we)("#Chat_Actions_RemoveRoom"),
			(0, _.we)("#Chat_Actions_RemoveRoom_Confirm"),
			(0, _.we)("#Chat_Actions_RemoveRoom_Action"),
		)
			.then(() => {
				let e = this.props.group;
				let t = this.props.roomID;
				e.DeleteChatRoom(t);
			})
			.catch(() => {});
	}
	ChangeRoomName() {
		this.props.onStartRoomRename(this.props.roomID);
	}
	static BIsMenuEmpty(e, t, r) {
		let n = e.GetDefaultChatID() == t;
		let i = e.BIsTempVoiceChannel(t);
		let a = e.BCanAdminChannel();
		return (
			!e.BIsVoiceChannel(t) &&
			(!i || !a) &&
			(!r || !!n || !!i || !a) &&
			(!!n || !a)
		);
	}
	render() {
		let e = [];
		let t = this.props.group;
		let r = this.props.roomID;
		let n = this.props.group.GetChatRoom(this.props.roomID);
		let i = t.GetDefaultChatID() == r;
		let a = t.BIsTempVoiceChannel(r);
		let s = t.BCanAdminChannel();
		t.BCanInvite();
		let o = n.voice_active_member_list.member_count;
		e.push(
			p.createElement(
				h.kt,
				{
					key: "invitefriend",
					onSelected: this.ShowInviteDialog,
				},
				(0, _.we)("#Chat_Actions_InviteFriendtoVoice"),
			),
		);
		const l = T(
			o,
			(0, _.we)("#Chat_Actions_FindGamesToPlay"),
			"#Chat_Tooltip_FindGamesToPlay_UserCountRestriction_Channel",
			"findgamestoplayinchannel",
			this.FindGamesToPlayInChannel,
		);
		if (l) {
			e.push(l);
		}
		if (a) {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "savechannel",
						className: s ? "" : w.ChatRoomContextNoPermission,
						onSelected: this.SaveVoiceRoom,
					},
					!s && p.createElement(b.c_I, null),
					(0, _.we)("#Chat_Actions_SaveChannel"),
				),
			);
		}
		if (this.props.onStartRoomRename && !i && !a && s) {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "renameroom",
						onSelected: this.ChangeRoomName,
					},
					(0, _.we)("#Chat_Actions_ChangeRoomName"),
				),
			);
		}
		if (!i && s) {
			e.push(
				p.createElement(
					h.kt,
					{
						key: "removeroom",
						onSelected: this.RemoveRoom,
					},
					(0, _.we)("#Chat_Actions_RemoveRoom"),
				),
			);
		}
		if (e.length < 1) {
			console.log(
				"warning: empty context menu. Did someone not update BIsMenuEmpty?",
			);
			return null;
		} else {
			return p.createElement(
				h.tz,
				{
					className: "friendsContextMenu",
					label: t.name,
				},
				e,
			);
		}
	}
}
(0, n.Cg)([f.oI], D.prototype, "ShowInviteDialog", null);
(0, n.Cg)([f.oI], D.prototype, "FindGamesToPlayInChannel", null);
(0, n.Cg)([f.oI], D.prototype, "SaveVoiceRoom", null);
(0, n.Cg)([f.oI], D.prototype, "RemoveRoom", null);
(0, n.Cg)([f.oI], D.prototype, "ChangeRoomName", null);
let N = class extends p.Component {
	constructor(e) {
		super(e);
		this.state = {
			strName: "",
			strError: undefined,
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strName: e.target.value,
		});
	}
	HandleSubmit(e) {
		if (e) {
			e.preventDefault();
		}
		let t = this.state.strName;
		if (t.length != 0) {
			this.props.group.RenameRoom(this.props.roomID, t);
			this.props.closeModal();
		} else {
			this.setState({
				strError: (0, _.we)("#Chat_SaveVoiceRoom_Error_EmptyName"),
			});
		}
	}
	render() {
		return p.createElement(
			u.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			p.createElement(
				C.U9,
				{
					classNameContent: "SaveVoiceRoomDialog",
					onSubmit: this.HandleSubmit,
				},
				p.createElement(C.Y9, null, (0, _.we)("#Chat_SaveVoiceRoom")),
				p.createElement(
					C.nB,
					null,
					this.state.strError &&
						p.createElement(
							C.a3,
							{
								className: "nicknameError",
							},
							this.state.strError,
						),
					p.createElement(
						C.a3,
						null,
						(0, _.we)("#Chat_SaveVoiceRoom_Description"),
					),
					p.createElement(C.pd, {
						type: "text",
						label: (0, _.we)("#Chat_SaveVoiceRoom_Name"),
						className: "nicknameInput",
						value: this.state.strName,
						onChange: this.HandleTextEntry,
						autoFocus: true,
					}),
				),
				p.createElement(
					C.wi,
					null,
					p.createElement(C.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
};
(0, n.Cg)([f.oI], N.prototype, "HandleTextEntry", null);
(0, n.Cg)([f.oI], N.prototype, "HandleSubmit", null);
N = (0, n.Cg)([A.PA], N);
