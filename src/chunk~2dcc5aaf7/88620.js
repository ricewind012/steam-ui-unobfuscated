var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./72476.js");
var a = require("./52912.js");
var s = require("./95773.js");
var o = require("./15855.js");
var l = require("./53414.js");
var c = require("./68665.js");
var m = require("./98829.js");
var u = require("./13869.js");
var d = require(/*webcrack:missing*/ "./41230.js");
var A = require(/*webcrack:missing*/ "./63696.js");
var p = require("./64608.js");
var g = require(/*webcrack:missing*/ "./50376.js");
var h = require(/*webcrack:missing*/ "./46108.js");
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require(/*webcrack:missing*/ "./49455.js");
var f = require(/*webcrack:missing*/ "./69164.js");
var b = require("./55116.js");
export function E5(e, t, r, n, i) {
	jv(e, t, r, n, false, i);
}
export function jv(e, t, r, n, i, s) {
	(0, u.HT)(
		A.createElement(v, {
			browserContext: e,
			chatRoomGroup: r,
			chatRoom: n,
			bIsDropInvite: i,
			vecInvitePlayers: s,
		}),
		t,
		"ChatRoomGroupInviteDialog",
		{
			strTitle: (0, h.we)("#Chat_CreateChatRoom"),
			popupWidth: 664,
			popupHeight: 680,
		},
		(0, a.h8)(t),
	);
}
export let Rf = class extends A.Component {
	constructor(e) {
		super(e);
	}
	componentDidMount() {
		let e = this.props.chat.lastChatLinkInfo;
		if (!e || Date.now() >= e.rtExpires) {
			this.GenerateLink(86400);
		}
	}
	GenerateLink(e) {
		this.props.chat.CreateInviteLink(e);
	}
	OnFocus(e) {
		e.target.select();
	}
	render() {
		let e = this.props.chat.lastChatLinkInfo;
		let t = (0, h.we)("#Chat_Invite_Loading");
		if (this.props.disabled) {
			e = undefined;
			t = "";
		}
		return A.createElement(
			A.Fragment,
			null,
			A.createElement(p.pd, {
				label: (0, h.we)("#Chat_Invite_Linkheader"),
				className: "InviteFriendToChatDialog_LinkInput",
				type: "text",
				value: e ? e.strInviteURL : t,
				readOnly: true,
				bShowCopyAction: !!e,
				onFocus: this.OnFocus,
				onClick: this.OnFocus,
			}),
			!this.props.disabled &&
				A.createElement(B, {
					onGenerate: this.GenerateLink,
					chat: this.props.chat,
				}),
		);
	}
};
(0, n.Cg)([C.oI], Rf.prototype, "GenerateLink", null);
(0, n.Cg)([C.oI], Rf.prototype, "OnFocus", null);
Rf = (0, n.Cg)([d.PA], Rf);
let B = class extends A.Component {
	constructor(e) {
		super(e);
	}
	OnDropDownChange(e, t) {
		this.props.onGenerate(e.data);
		t.SetSelectedOption(undefined);
	}
	CreateExpiresText(e) {
		if (e == 0) {
			return (0, h.we)("#InviteLink_ExpiresNever_Short");
		}
		if (e - s.xm.GetServerRTime32() > 3600) {
			return (0, h.we)("#InviteLink_ExpiresDay_Short");
		} else {
			return (0, h.we)("#InviteLink_ExpiresHour_Short");
		}
	}
	render() {
		let e = this.props.chat.lastChatLinkInfo;
		let t = [
			{
				label: (0, h.we)("#InviteLink_ExpiresHour_Short"),
				data: 3600,
			},
			{
				label: (0, h.we)("#InviteLink_ExpiresDay_Short"),
				data: 86400,
			},
			{
				label: (0, h.we)("#InviteLink_ExpiresNever_Short"),
				data: 0,
			},
		];
		return A.createElement(
			"div",
			{
				className: "expireLinkInContainer",
			},
			A.createElement(p.JU, null, (0, h.we)("#InviteLink_ExpireDropDownLabel")),
			A.createElement(p.m, {
				strClassName: "inviteLinkDropDown",
				rgOptions: t,
				strDefaultLabel: e
					? this.CreateExpiresText(e.rtExpires)
					: A.createElement("span", null, "\xA0"),
				onChange: this.OnDropDownChange,
				selectedOption: undefined,
			}),
		);
	}
};
(0, n.Cg)([C.oI], B.prototype, "OnDropDownChange", null);
B = (0, n.Cg)([d.PA], B);
class v extends A.PureComponent {
	static contextType = i.QO;
	m_setMembersOfGroup;
	constructor(e) {
		super(e);
		this.state = {
			dropToInviteFriend: undefined,
			rgPickedFriends: [],
		};
		this.BuildMemberOfGroupSet(e);
	}
	componentDidUpdate(e) {
		if (e.chatRoomGroup !== this.props.chatRoomGroup) {
			this.BuildMemberOfGroupSet(this.props);
		}
	}
	BuildMemberOfGroupSet(e) {
		let t = e.chatRoomGroup;
		this.m_setMembersOfGroup = t.memberList.GetCurrentMemberSet();
		this.forceUpdate();
	}
	DismissDialog() {
		this.props.closeModal();
	}
	OnSubmit() {
		for (let e of this.state.rgPickedFriends) {
			this.props.chatRoomGroup.InviteFriend(e.accountid, this.props.chatRoom);
		}
		this.props.closeModal();
	}
	OnDragEnter(e, t) {
		(0, _.w)(
			(e && e.type == "friend") || t,
			"Invalid data type passed to ChatRoomGroupDialog.OnDragEnter",
		);
		if (e) {
			let t = e;
			if (t.friend) {
				this.setState({
					rgPickedFriends: this.state.rgPickedFriends.concat(t.friend),
				});
			}
		}
		return true;
	}
	OnDragLeave() {
		const { dropToInviteFriend: e, rgPickedFriends: t } = this.state;
		if (e) {
			const r = t.findIndex((t) => t.accountid === e.accountid);
			this.setState({
				dropToInviteFriend: undefined,
				rgPickedFriends: t.slice(0, r).concat(t.slice(r + 1)),
			});
		}
	}
	OnDrop(e, t) {
		(0, _.w)(
			e && e.type == "friend",
			"Invalid data type passed to ChatRoomGroupDialog.OnDrop",
		);
		if (e && e.type == "friend") {
			let t = e;
			if (t.friend) {
				a.ZM.DragDropManager.SetDropConsumed();
				if (
					this.state.rgPickedFriends.findIndex(
						(e) => e.accountid === t.friend.accountid,
					) > -1
				) {
					this.setState({
						dropToInviteFriend: undefined,
						rgPickedFriends: this.state.rgPickedFriends.concat(t.friend),
					});
				} else if (this.state.dropToInviteFriend) {
					this.setState({
						dropToInviteFriend: undefined,
					});
				}
			}
		}
	}
	GetDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend"],
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDrop = this.OnDrop;
		return e;
	}
	render() {
		let e = this.props.chatRoomGroup.GetDefaultChatRoom();
		if (this.props.chatRoom) {
			e = this.props.chatRoom;
		}
		let t;
		let r = this.props.chatRoomGroup.name;
		let n = this.props.chatRoom != null;
		let i = new Set([]);
		let a = this.props.chatRoomGroup.BCanInvite();
		if (a) {
			if (!this.props.chatRoom) {
				i = this.m_setMembersOfGroup;
			}
		} else if (this.props.chatRoom) {
			s.xm.FriendStore.all_friends.forEach((e) => {
				if (!this.props.chatRoomGroup.BHasMember(e.accountid)) {
					i.add(e.accountid);
				}
			});
		} else {
			(0, _.w)(false, "User should not be able to invite to the group");
		}
		t = this.props.bIsDropInvite
			? (0, h.we)("#Chat_InviteFriends_DropInvite_Pre")
			: a
				? (0, h.we)("#Chat_InviteFriends")
				: (0, h.we)("#Chat_InviteGroupMembers");
		let m =
			"ChatRoomGroupInviteDialog" +
			(this.props.bIsDropInvite ? " IsDropInvite" : "");
		if (this.context?.IN_GAMEPADUI) {
			m += " GamepadMode";
		}
		return A.createElement(
			u.x_,
			{
				onEscKeypress: this.DismissDialog,
			},
			A.createElement(
				p.U9,
				{
					classNameContent: m,
					onSubmit: this.OnSubmit,
				},
				A.createElement(
					p.Y9,
					null,
					n
						? A.createElement(
								"div",
								{
									className: "InviteToVoiceHeader",
								},
								(0, h.we)("#Chat_Actions_InviteFriend_VoiceChat"),
								A.createElement(
									"div",
									{
										className: "DialogHeaderSubtitle DialogHighlight",
									},
									'"',
									this.props.chatRoom.name,
									'"',
								),
							)
						: (0, h.we)("#Chat_Actions_InviteFriend"),
					A.createElement(
						"div",
						{
							className: "displayRow",
						},
						A.createElement(l.I, {
							group: this.props.chatRoomGroup,
							small: true,
						}),
						A.createElement(
							"div",
							{
								className: "DialogHeaderSubtitle DialogHighlight",
							},
							r,
						),
					),
				),
				A.createElement(
					p.nB,
					null,
					A.createElement(
						b.g,
						null,
						!this.props.bIsDropInvite &&
							a &&
							!this.context?.IN_GAMEPADUI &&
							A.createElement(
								A.Fragment,
								null,
								A.createElement(
									"div",
									{
										className: "inviteLinkContainer",
									},
									A.createElement(Rf, {
										chat: e,
										disabled: false,
									}),
								),
								A.createElement(
									"div",
									{
										className: "OrSeparator",
									},
									A.createElement("div", {
										className: "HBar",
									}),
									A.createElement(
										"div",
										{
											className: "OrSeparatorLabel",
										},
										(0, h.we)("#Chat_InviteFriends_OR_Separator"),
									),
									A.createElement("div", {
										className: "HBar",
									}),
								),
							),
						A.createElement(
							o.T,
							{
								className: "",
								...this.GetDragDropProps(),
							},
							A.createElement(c.r, {
								label: t,
								eSort: 0,
								rgPickedFriends: this.state.rgPickedFriends,
								bDropInvite: this.props.bIsDropInvite,
								renderChosenFriend: I,
								onChange: (e) =>
									this.setState({
										rgPickedFriends: e,
									}),
								excludeFriend: (e) => i.has(e.accountid),
							}),
						),
					),
				),
				A.createElement(
					p.wi,
					null,
					A.createElement(
						f.Z,
						{
							className: "DialogTwoColLayout _DialogColLayout",
							"flow-children": "row",
						},
						A.createElement(
							p.jn,
							{
								disabled: this.state.rgPickedFriends.length === 0,
							},
							(0, h.we)("#Chat_Invite"),
						),
						A.createElement(
							p.$n,
							{
								onClick: this.DismissDialog,
							},
							(0, h.we)("#Button_Close"),
						),
					),
				),
			),
		);
	}
}
(0, n.Cg)([C.oI], v.prototype, "DismissDialog", null);
(0, n.Cg)([C.oI], v.prototype, "OnSubmit", null);
(0, n.Cg)([C.oI], v.prototype, "OnDragEnter", null);
(0, n.Cg)([C.oI], v.prototype, "OnDragLeave", null);
(0, n.Cg)([C.oI], v.prototype, "OnDrop", null);
let I = (0, d.PA)((e) =>
	A.createElement(
		A.Fragment,
		null,
		A.createElement(
			m.Rg,
			{
				friend: e.friend,
				context: null,
			},
			A.createElement(
				f.Z,
				{
					className: "FriendPicker_ChosenFriend",
					onActivate: () => {
						e.onClick(e.friend);
					},
				},
				A.createElement("span", null, e.friend.display_name),
				A.createElement(g.sED, null),
			),
		),
	),
);
