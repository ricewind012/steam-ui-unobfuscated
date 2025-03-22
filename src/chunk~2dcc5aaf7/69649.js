var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./95773.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./13869.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./96127.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./64608.js");
var d = require(/*webcrack:missing*/ "./69164.js");
var A = require("./68665.js");
var p = require("./52912.js");
var g = require(/*webcrack:missing*/ "./54644.js");
var h = require("./98829.js");
var C = require(/*webcrack:missing*/ "./50376.js");
var _ = require("./78060.js");
export function UA(e, t, r, n = false, i) {
	(0, s.HT)(
		o.createElement(zw, {
			browserContext: e,
			chatViewToReplace: r,
			bHideChatNameEntry: n,
			vecInvitePlayers: i,
		}),
		t,
		"CreateChatDialog",
		{
			strTitle: (0, m.we)("#Chat_CreateChatRoom"),
			popupWidth: 664,
			popupHeight: 580,
		},
		(0, p.h8)(t),
	);
}
export function eJ(e, t, r, n) {
	let a = (0, p._k)(e);
	let s = i.xm.ChatStore.FindNamelessChatGroupWithFriends(r);
	if (s) {
		i.xm.UIStore.ReplaceFriendChatWithGroup(a, t, s);
	} else {
		i.xm.ChatStore.CreateChatRoomGroup(a, "", r, n)
			.then((e) => {
				i.xm.UIStore.GetPerContextChatData(a);
				let r = i.xm.ChatStore.GetChatRoomGroup(e);
				if (r) {
					i.xm.UIStore.ReplaceFriendChatWithGroup(a, t, r);
				}
			})
			.catch(() => {
				(0, _.Ic)(
					e,
					(0, m.we)("#Generic_Error"),
					(0, m.we)("#Chat_CreateChatRoom_GenericError"),
				);
			});
	}
}
export let zw = class extends o.Component {
	constructor(e) {
		super(e);
		const t = e.vecInvitePlayers
			? e.vecInvitePlayers.map((e) => i.xm.FriendStore.GetPlayer(e))
			: [];
		this.state = {
			strCurrentNameEntry: "",
			strError: undefined,
			bCreateInFlight: false,
			rgSelectedFriends: t,
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strCurrentNameEntry: e.target.value,
		});
	}
	HandleSubmit(e) {
		if (e) {
			e.preventDefault();
		}
		if (this.state.bCreateInFlight) {
			return;
		}
		let t = (0, g.uX)(e);
		this.setState((e) => {
			if (!e.bCreateInFlight) {
				this.InternalDoSubmit(t);
			}
			return {
				bCreateInFlight: true,
			};
		});
	}
	InternalDoSubmit(e) {
		const t = this.state.rgSelectedFriends.map((e) =>
			e.persona.m_steamid.ConvertTo64BitString(),
		);
		let r = this.props.chatViewToReplace;
		if (r) {
			let n = new l.$c(this.props.chatViewToReplace.chat.accountid_partner);
			t.push(n.persona.m_steamid.ConvertTo64BitString());
			eJ(e, r, t);
			this.props.closeModal();
			return;
		}
		let n = this.props.bHideChatNameEntry ? "" : this.state.strCurrentNameEntry;
		i.xm.ChatStore.CreateChatRoomGroup(
			this.props.browserContext,
			n,
			t,
			this.props.creationOptions,
		)
			.then((e) => {
				this.props.closeModal();
			})
			.catch(() => {
				this.setState({
					strError: (0, m.we)("#Chat_CreateChatRoom_GenericError"),
					bCreateInFlight: false,
				});
			});
	}
	IsChatRoomNameValid() {
		return this.state.strCurrentNameEntry.length > 0;
	}
	render() {
		let e = this.props.chatViewToReplace
			? this.props.chatViewToReplace.chat.chat_partner
			: null;
		let t = (0, m.we)("#Chat_CreateChatRoom_Button");
		const r = this.state.rgSelectedFriends.length > 0;
		let n = new Set();
		if (this.props.chatViewToReplace) {
			n.add(this.props.chatViewToReplace.chat.accountid_partner);
		}
		let i = false;
		if (this.state.bCreateInFlight) {
			i = false;
			t = (0, m.we)("#GroupSettings_Permissions_Saving");
		} else if (e) {
			i = this.state.rgSelectedFriends.length > 0;
		} else {
			i = this.IsChatRoomNameValid() || r;
			if (this.IsChatRoomNameValid() && !r) {
				t = (0, m.we)("#Chat_CreateChatRoom_Button");
			} else if (r && !this.IsChatRoomNameValid()) {
				t = (0, m.we)("#Chat_CreateChatRoom_InviteFriends");
			} else if (r && this.IsChatRoomNameValid()) {
				t = (0, m.we)("#Chat_CreateChatRoom_Button_wFriends");
			}
		}
		const a =
			this.props.strTitle ||
			(e
				? (0, m.we)("#Chat_CreateChatRoom_InviteFriends")
				: (0, m.we)("#Chat_CreateChatRoom"));
		return o.createElement(
			s.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			o.createElement(
				u.U9,
				{
					classNameContent: "CreateChatDialog",
					onSubmit: this.HandleSubmit,
				},
				o.createElement(u.Y9, null, a),
				o.createElement(
					u.nB,
					null,
					e &&
						o.createElement(
							u.a3,
							null,
							o.createElement(
								"span",
								null,
								(0, m.we)("#Chat_CreateChatRoom_With"),
								o.createElement(
									"span",
									{
										className: "DialogHighlight",
									},
									(0, m.we)("#Chat_CreateChatRoom_You"),
								),
								(0, m.we)("#Chat_CreateChatRoom_And"),
								o.createElement(
									"span",
									{
										className: "DialogHighlight",
									},
									e.display_name,
								),
							),
						),
					this.state.strError &&
						o.createElement(
							u.a3,
							{
								className: "nicknameError",
							},
							this.state.strError,
						),
					!this.props.bHideChatNameEntry &&
						o.createElement(u.pd, {
							type: "text",
							label: (0, m.we)("#Chat_Settings_Room_Name"),
							className: "nicknameInput",
							value: this.state.strCurrentNameEntry,
							onChange: this.HandleTextEntry,
							autoFocus: true,
						}),
					o.createElement(A.r, {
						label: (0, m.we)("#Chat_DropToInviteGroup"),
						eSort: 1,
						autoFocus: this.props.bHideChatNameEntry,
						renderChosenFriend: S,
						excludeFriend: (e) => n.has(e.accountid),
						onChange: (e) =>
							this.setState({
								rgSelectedFriends: e,
							}),
						rgPickedFriends: this.state.rgSelectedFriends,
					}),
				),
				o.createElement(
					u.wi,
					null,
					o.createElement(u.CB, {
						strOKText: t,
						onCancel: this.props.closeModal,
						bOKDisabled: !i,
					}),
				),
			),
		);
	}
};
(0, n.Cg)([c.oI], zw.prototype, "HandleTextEntry", null);
(0, n.Cg)([c.oI], zw.prototype, "HandleSubmit", null);
zw = (0, n.Cg)([a.PA], zw);
let S = (0, a.PA)((e) =>
	o.createElement(
		o.Fragment,
		null,
		o.createElement(
			h.Rg,
			{
				friend: e.friend,
				context: null,
			},
			o.createElement(
				d.Z,
				{
					className: "FriendPicker_ChosenFriend",
					onClick: () => {
						e.onClick(e.friend);
					},
				},
				o.createElement("span", null, e.friend.display_name),
				o.createElement(C.sED, null),
			),
		),
	),
);
