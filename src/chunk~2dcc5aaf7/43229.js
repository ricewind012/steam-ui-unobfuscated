var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require("./44234.js");
var o = require("./66146.js");
var l = require("./52912.js");
var c = require("./95773.js");
var m = require("./14182.js");
var u = require("./88620.js");
var d = require("./78060.js");
var A = require("./98829.js");
var p = require("./13869.js");
var g = require(/*webcrack:missing*/ "./69164.js");
var h = require(/*webcrack:missing*/ "./89193.js");
var C = require(/*webcrack:missing*/ "./41230.js");
var _ = require(/*webcrack:missing*/ "./63696.js");
var f = require("./64608.js");
var b = require(/*webcrack:missing*/ "./50376.js");
var y = require(/*webcrack:missing*/ "./26853.js");
var S = require(/*webcrack:missing*/ "./54644.js");
var w = require(/*webcrack:missing*/ "./53833.js");
var B = require(/*webcrack:missing*/ "./46108.js");
var v = require(/*webcrack:missing*/ "./52451.js");
var I = require("./24761.js");
var E = require("./59704.js");
var M = require(/*webcrack:missing*/ "./8573.js");
var T = require(/*webcrack:missing*/ "./49455.js");
var R = require("./72945.js");
var k = R;
var D = require(/*webcrack:missing*/ "./90765.js");
function N(e) {
	const {
		title: t,
		pages: r,
		children: n,
		initialActivePage: i,
		renderNavFooter: a,
	} = e;
	const [s, o] = (0, _.useState)(i || r[0]);
	return _.createElement(
		g.Z,
		{
			className: k.Container,
			"flow-children": "row",
		},
		_.createElement(
			g.Z,
			{
				className: k.Nav,
				"flow-children": "column",
			},
			_.createElement(
				"span",
				{
					className: k.NavTitle,
				},
				t,
			),
			_.createElement(
				g.Z,
				{
					className: k.NavItems,
					"flow-children": "column",
				},
				r.map((e) =>
					_.createElement(
						F,
						{
							key: e,
							active: e === s,
							onClick: () => o(e),
						},
						e,
					),
				),
			),
			a && a(),
		),
		_.createElement(
			"div",
			{
				className: k.Content,
			},
			n(s),
		),
	);
}
const F = (e) => {
	const { active: t, onClick: r, ...n } = e;
	return _.createElement(g.Z, {
		...n,
		focusable: true,
		onActivate: r,
		className: (0, D.A)(k.NavItem, t && k.Active),
	});
};
var G = require("./86360.js");
var O = G;
const P = (e) => {
	const { className: t, ...r } = e;
	return _.createElement("div", {
		className: (0, D.A)(O.DialogTitle, t),
		...r,
	});
};
const L = (e) => {
	const { className: t, ...r } = e;
	return _.createElement("div", {
		className: (0, D.A)(O.DialogContent, t),
		...r,
	});
};
var z = require("./36308.js");
var x = z;
var U = require(/*webcrack:missing*/ "./72476.js");
export function hI(e, t) {
	(0, p.HT)(
		_.createElement(V, {
			groupView: t,
		}),
		e,
		"ChatRoomGroupSettings",
		{
			strTitle: (0, B.we)("#GroupSettings"),
			popupWidth: 842,
			popupHeight: 600,
		},
		(0, l.h8)(e),
		{
			nDragAreaHeight: 32,
		},
	);
}
let V = class extends _.Component {
	static contextType = U.QO;
	m_inviteLinks = {
		loadingState: "pending",
		rgInviteLinks: null,
	};
	m_bans = new o.L2();
	m_invitedUsers = {
		loadingState: "pending",
		rgInvitedUsers: null,
	};
	constructor(e) {
		super(e);
		(0, h.Gn)(this);
		this.state = {
			strRoomName: this.props.groupView.GetGroup().name,
		};
	}
	DismissDialog() {
		this.props.closeModal();
	}
	CloseDialog() {
		this.props.closeModal();
	}
	OnLeave(e) {
		let t = (0, S.uX)(e);
		let r = (0, l.CO)(e);
		let n = this.props.groupView.GetGroup();
		let i = n.BIsClanChatRoom()
			? "#Chat_Actions_LeaveChatRoomGroup_ClanConfirm"
			: n.BIsAccountIDOwner(c.xm.CMInterface.steamid.GetAccountID())
				? "#Chat_Actions_OwnerLeaveChatRoomGroup_Confirm"
				: "#Chat_Actions_LeaveChatRoomGroup_Confirm";
		(0, d.Ci)(
			t,
			(0, B.we)("#GroupSettings_Leave_Section"),
			(0, B.we)(i, n.name),
			(0, B.we)("#GroupSettings_Leave_Button"),
		)
			.then(() => {
				n.LeaveChatRoomGroup(r);
			})
			.then(() => {
				this.props.closeModal();
			})
			.catch(() => {});
	}
	GetNamedGroupPageList() {
		const e = this.props.groupView.GetGroup();
		if (this.context?.IN_GAMEPADUI) {
			return [
				{
					title: (0, B.we)("#GroupSettings_General_Section"),
					render: () =>
						_.createElement(q, {
							group: e,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_InvitedUsers_Section"),
					render: () =>
						_.createElement(te, {
							group: e,
							invitedUsers: this.m_invitedUsers,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Bans_Section"),
					render: () =>
						_.createElement(re, {
							group: e,
							bans: this.m_bans,
						}),
				},
			];
		} else {
			return [
				{
					title: (0, B.we)("#GroupSettings_General_Section"),
					render: () =>
						_.createElement(q, {
							group: e,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Channels_Section"),
					render: () =>
						_.createElement(Y, {
							groupView: this.props.groupView,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Permissions_Section"),
					render: () =>
						_.createElement(X, {
							group: e,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Invite_Section"),
					render: () =>
						_.createElement(ee, {
							group: e,
							inviteLinks: this.m_inviteLinks,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_InvitedUsers_Section"),
					render: () =>
						_.createElement(te, {
							group: e,
							invitedUsers: this.m_invitedUsers,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Bans_Section"),
					render: () =>
						_.createElement(re, {
							group: e,
							bans: this.m_bans,
						}),
				},
			];
		}
	}
	GetNonNamedGroupPageList() {
		const e = this.props.groupView.GetGroup();
		if (this.context?.IN_GAMEPADUI) {
			return [
				{
					title: (0, B.we)("#GroupSettings_Save_Section"),
					render: () =>
						_.createElement(j, {
							group: e,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Leave_Section"),
					render: () =>
						_.createElement(Q, {
							group: e,
						}),
				},
			];
		} else {
			return [
				{
					title: (0, B.we)("#GroupSettings_Save_Section"),
					render: () =>
						_.createElement(j, {
							group: e,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Invite_Section"),
					render: () =>
						_.createElement(ee, {
							group: e,
							inviteLinks: this.m_inviteLinks,
						}),
				},
				{
					title: (0, B.we)("#GroupSettings_Leave_Section"),
					render: () =>
						_.createElement(Q, {
							group: e,
						}),
				},
			];
		}
	}
	GetPageList() {
		if (this.props.groupView.GetGroup().IsNamedGroupChat()) {
			return this.GetNamedGroupPageList();
		} else {
			return this.GetNonNamedGroupPageList();
		}
	}
	render() {
		let e = this.GetPageList();
		const { groupView: t } = this.props;
		const r = t.GetGroup();
		const n = `${r.unique_id}_${r.IsNamedGroupChat()}`;
		return _.createElement(
			p.x_,
			{
				onEscKeypress: this.DismissDialog,
			},
			_.createElement(
				N,
				{
					title: (0, B.we)("#GroupSettings"),
					pages: e.map(({ title: e }) => e),
					renderNavFooter: () =>
						_.createElement(H, {
							onActivate: this.OnLeave,
						}),
					key: n,
				},
				(t) => {
					const r = e.find((e) => e.title === t);
					const n = r ? r.render() : null;
					return _.createElement(
						L,
						{
							style: {
								flexDirection: "column",
							},
							key: t,
						},
						n,
					);
				},
			),
		);
	}
};
(0, n.Cg)([h.sH], V.prototype, "m_inviteLinks", undefined);
(0, n.Cg)([h.sH], V.prototype, "m_invitedUsers", undefined);
(0, n.Cg)([v.oI], V.prototype, "DismissDialog", null);
(0, n.Cg)([v.oI], V.prototype, "CloseDialog", null);
(0, n.Cg)([v.oI], V.prototype, "OnLeave", null);
V = (0, n.Cg)([C.PA], V);
const H = (e) =>
	_.createElement(
		g.Z,
		{
			className: x.LeaveButton,
			...e,
		},
		_.createElement(b.Gq2, null),
		(0, B.we)("#GroupSettings_Leave_Section"),
	);
let j = class extends _.Component {
	constructor(e) {
		super(e);
		(0, h.Gn)(this);
	}
	m_refInput;
	m_bSaving = false;
	m_strError = "";
	BindInputRef(e) {
		this.m_refInput = e;
	}
	AnimateUpgrade_In() {
		document.getElementById("animUp");
	}
	AnimateUpgrade_Out() {
		document.getElementById("animDown");
	}
	SaveGroup() {
		let e = this.props.group;
		this.m_bSaving = false;
		this.m_strError = "";
		e.SaveChatRoomGroup(this.m_refInput.value).catch((e) => {
			this.m_bSaving = false;
			this.m_strError =
				e == 12
					? (0, B.we)("#GroupSettings_Save_NameError")
					: (0, B.we)("#GroupSettings_Save_GenericError");
		});
	}
	render() {
		let e = this.m_bSaving;
		let t = this.m_strError;
		return _.createElement(
			f.lV,
			{
				className: "DialogBody",
				onSubmit: this.SaveGroup,
			},
			_.createElement(
				f.a3,
				null,
				(0, B.we)("#GroupSettings_Save_Desc"),
				_.createElement(
					"div",
					null,
					_.createElement(
						"ul",
						null,
						_.createElement(
							"li",
							null,
							(0, B.we)("#GroupSettings_Save_Feature_1"),
						),
						_.createElement(
							"li",
							null,
							(0, B.we)("#GroupSettings_Save_Feature_2"),
						),
						_.createElement(
							"li",
							null,
							(0, B.we)("#GroupSettings_Save_Feature_3"),
						),
						_.createElement(
							"li",
							null,
							(0, B.we)("#GroupSettings_Save_Feature_4"),
						),
					),
				),
			),
			_.createElement(f.pd, {
				ref: this.BindInputRef,
				autoFocus: true,
				label: (0, B.we)("#GroupSettings_Save_NameGroup"),
				disabled: e,
			}),
			!e &&
				_.createElement(
					_.Fragment,
					null,
					t.length > 0 &&
						_.createElement(
							"div",
							{
								className: "ErrorWhileSaving",
							},
							t,
						),
					_.createElement(
						f.jn,
						{
							className: "_FixedHeight",
						},
						(0, B.we)("#GroupSettings_Save_Section"),
					),
				),
			e && _.createElement(y.t, null),
		);
	}
};
(0, n.Cg)([h.sH], j.prototype, "m_bSaving", undefined);
(0, n.Cg)([h.sH], j.prototype, "m_strError", undefined);
(0, n.Cg)([v.oI], j.prototype, "BindInputRef", null);
(0, n.Cg)([v.oI], j.prototype, "AnimateUpgrade_In", null);
(0, n.Cg)([v.oI], j.prototype, "AnimateUpgrade_Out", null);
(0, n.Cg)([v.oI], j.prototype, "SaveGroup", null);
j = (0, n.Cg)([C.PA], j);
let q = class extends _.Component {
	static contextType = U.QO;
	m_strRoomName = undefined;
	m_strTagLine = undefined;
	m_fileInput;
	constructor(e) {
		super(e);
		(0, h.Gn)(this);
		this.m_strRoomName = this.props.group.IsNamedGroupChat()
			? this.props.group.name
			: "";
		this.m_strTagLine = this.props.group.tagline;
		this.state = {
			bNameSubmitted: false,
			bTaglineSubmitted: false,
		};
	}
	AvatarUploadEResultToString(e) {
		let t = "#Chat_Settings_Error_Unknown";
		switch (e) {
			case 21:
				t = "#Chat_Settings_Error_NotLoggedOn";
				break;
			case 112:
				t = "#Chat_Settings_Error_LimitedUser";
				break;
			case 15:
				t = "#Chat_Settings_Error_AccessDenied";
				break;
			case 2:
				t = "#Chat_Settings_Error_FailedToUpload";
				break;
			case 25:
				t = "#Chat_Settings_Error_FileTooLarge";
				break;
			case 8:
				t = "#Chat_Settings_Error_InvalidImage";
				break;
			case 37:
				t = "#Chat_Settings_Error_ServerError";
		}
		return (0, B.we)(t);
	}
	SetChatRoomGroupAvatarEResultToString(e) {
		let t = "#Chat_Settings_Error_Unknown";
		switch (e) {
			case 10:
			case 8:
			case 32:
				t = "#Chat_Settings_Error_ServerError";
				break;
			case 15:
				t = "#Chat_Settings_Error_NotAdmin";
		}
		return (0, B.we)(t);
	}
	OnFileChange(e) {
		let t = e.target.files[0];
		let r = this.props.group;
		e.preventDefault();
		let n = new FormData();
		n.set("sessionid", s.TS.SESSIONID);
		n.set("avatar", t);
		a.post(s.TS.CHAT_BASE_URL + "chat/avatarfileupload/", n, {
			headers: {
				"content-type": "multipart/form-data",
			},
		})
			.then((e) => {
				if (e.data.success == 1) {
					r.SetChatRoomGroupAvatar(e.data.sha).catch((e) => {
						let t = this.SetChatRoomGroupAvatarEResultToString(e);
						(0, d.Nw)((0, B.we)("#Generic_Error"), t);
					});
				}
			})
			.catch((e) => {
				let t = this.AvatarUploadEResultToString(e.response.data.success);
				(0, d.Nw)((0, B.we)("#Generic_Error"), t);
				console.log(e.response);
			});
	}
	bindFileUploadControl(e) {
		this.m_fileInput = e;
	}
	OnNameChange(e) {
		this.m_strRoomName = e.target.value;
		this.setState({
			bNameSubmitted: false,
		});
	}
	OnAvatarChange() {
		this.m_fileInput.click();
	}
	OnTagLineChange(e) {
		this.m_strTagLine = e.target.value;
		this.setState({
			bTaglineSubmitted: false,
		});
	}
	OnNameBlur() {
		let e = this.props.group;
		if (!e.IsNamedGroupChat() && !this.m_strRoomName) {
			return;
		}
		if (e.IsNamedGroupChat() && e.name === this.m_strRoomName) {
			return;
		}
		const t = () => (this.m_strRoomName = this.props.group.name);
		e.RenameChatRoomGroup(this.m_strRoomName).then(t, t);
		let r = document.getElementById("b1");
		if (r) {
			r.blur();
		}
		this.setState({
			bNameSubmitted: true,
		});
	}
	OnTagLineBlur() {
		let e = this.props.group;
		if (e.tagline != this.m_strTagLine) {
			e.SetChatRoomGroupTagline(this.m_strTagLine);
			this.setState({
				bTaglineSubmitted: true,
			});
			let t = document.getElementById("b2");
			if (t) {
				t.blur();
			}
		}
	}
	OnSubmitSent() {
		this.OnTagLineBlur();
		this.OnNameBlur();
	}
	render() {
		const { group: e } = this.props;
		const t = e.BCanAdminGroup();
		let r;
		if (e.BIsClanChatRoom()) {
			r = _.createElement("div", null);
		} else if (e.GetOwnerAccountID() == null) {
			r = _.createElement(
				"div",
				null,
				" ",
				(0, B.we)("#Chat_Settings_No_Owner"),
				" ",
			);
		} else {
			let t = c.xm.FriendStore.GetPlayer(e.GetOwnerAccountID());
			r = _.createElement(
				g.Z,
				{
					focusable: false,
					fnCanTakeFocus: () => false,
				},
				_.createElement(
					f.JU,
					null,
					" ",
					(0, B.we)("#Chat_Settings_General_Owner"),
				),
				_.createElement(A.bP, {
					className: "groupOwnerFriend",
					friend: t,
					context: null,
				}),
			);
		}
		return _.createElement(
			_.Fragment,
			null,
			_.createElement(P, null, (0, B.we)("#GroupSettings_General_Section")),
			!t && _.createElement(ne, null),
			_.createElement(
				f.lV,
				{
					onSubmit: this.OnSubmitSent,
					className: (0, D.A)("DialogBody", x.General),
				},
				_.createElement(
					f.dR,
					null,
					_.createElement(
						"div",
						{
							className: x.AvatarAndUser,
						},
						_.createElement(
							f.JU,
							null,
							(0, B.we)("#Chat_Settings_General_Icon"),
						),
						_.createElement("img", {
							className: (0, D.A)(x.Avatar, "no-drag"),
							src: e.hasIcon
								? e.avatar_url_full
								: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
						}),
						!e.hasIcon &&
							_.createElement(
								"div",
								{
									className: x.NoIconLabel,
								},
								(0, B.we)("#Chat_Settings_General_NoIcon"),
							),
						_.createElement("input", {
							type: "file",
							style: {
								display: "none",
							},
							name: "fileupload",
							accept: ".png, .jpg, .jpeg, .gif",
							ref: this.bindFileUploadControl,
							onChange: this.OnFileChange,
						}),
						!this.context?.IN_GAMEPADUI &&
							_.createElement(
								f.$n,
								{
									onClick: this.OnAvatarChange,
									disabled: !t,
								},
								(0, B.we)(
									e.hasIcon
										? "#Chat_Settings_General_ChangeIcon"
										: "#Chat_Settings_General_AddIcon",
								),
							),
					),
					_.createElement(
						"div",
						{
							className: "GeneralChatSettings",
						},
						_.createElement(f.pd, {
							autoComplete: "off",
							id: "b1",
							className: "groupChatName",
							label: (0, B.we)("#Chat_Settings_General_Chat_Name"),
							type: "text",
							value: this.m_strRoomName,
							onChange: this.OnNameChange,
							onBlur: this.OnNameBlur,
							autoFocus: true,
							disabled: !t,
						}),
						_.createElement("input", {
							type: "submit",
							style: {
								display: "none",
							},
						}),
						_.createElement(f.pd, {
							autoComplete: "off",
							id: "b2",
							className: "groupChatTag",
							label: (0, B.we)("#Chat_Settings_General_Tagline"),
							type: "text",
							value: this.m_strTagLine,
							onChange: this.OnTagLineChange,
							onBlur: this.OnTagLineBlur,
							disabled: !t,
						}),
						r,
					),
				),
			),
		);
	}
};
(0, n.Cg)([h.sH], q.prototype, "m_strRoomName", undefined);
(0, n.Cg)([h.sH], q.prototype, "m_strTagLine", undefined);
(0, n.Cg)([v.oI], q.prototype, "OnFileChange", null);
(0, n.Cg)([v.oI], q.prototype, "bindFileUploadControl", null);
(0, n.Cg)([v.oI], q.prototype, "OnNameChange", null);
(0, n.Cg)([v.oI], q.prototype, "OnAvatarChange", null);
(0, n.Cg)([v.oI], q.prototype, "OnTagLineChange", null);
(0, n.Cg)([v.oI], q.prototype, "OnNameBlur", null);
(0, n.Cg)([v.oI], q.prototype, "OnTagLineBlur", null);
(0, n.Cg)([v.oI], q.prototype, "OnSubmitSent", null);
q = (0, n.Cg)([C.PA], q);
let Q = class extends _.Component {
	OnLeave(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		let r = (0, l.CO)(e);
		let n = this.props.group.BIsClanChatRoom()
			? "#Chat_Actions_LeaveChatRoomGroup_ClanConfirm"
			: this.props.group.BIsAccountIDOwner(
						c.xm.CMInterface.steamid.GetAccountID(),
					)
				? "#Chat_Actions_OwnerLeaveChatRoomGroup_Confirm"
				: "#Chat_Actions_LeaveChatRoomGroup_Confirm";
		(0, d.Ci)(
			t,
			(0, B.we)("#GroupSettings_Leave_Section"),
			(0, B.we)(n, this.props.group.name),
			(0, B.we)("#GroupSettings_Leave_Button"),
		)
			.then(() => {
				this.props.group.LeaveChatRoomGroup(r);
			})
			.catch(() => {});
	}
	render() {
		return _.createElement(
			"div",
			null,
			(0, B.we)("#GroupSettings_Leave_Confirm"),
			_.createElement(
				f.$n,
				{
					onClick: this.OnLeave,
				},
				(0, B.we)("#GroupSettings_Leave_Button"),
			),
		);
	}
};
(0, n.Cg)([v.oI], Q.prototype, "OnLeave", null);
Q = (0, n.Cg)([C.PA], Q);
let Z = class extends _.Component {
	render() {
		let e = this.props.roomList.indexOf(this.props.room);
		(0, T.w)(e !== -1, "Couldn't find CChatRoom inside of its list?");
		let t = e - 1;
		let r = () => {
			this.props.room
				.GetGroup()
				.ReorderRoom(
					this.props.roomList[t].GetRoomID(),
					this.props.room.GetRoomID(),
				);
		};
		let n = e + 1;
		let i = () => {
			this.props.room
				.GetGroup()
				.ReorderRoom(
					this.props.room.GetRoomID(),
					this.props.roomList[n].GetRoomID(),
				);
		};
		if (t < 0 || this.props.roomList[t].BIsDefaultRoom()) {
			r = undefined;
		}
		if (n >= this.props.roomList.length) {
			i = undefined;
		}
		if (this.props.room.BIsDefaultRoom()) {
			r = undefined;
			i = undefined;
		}
		if (!this.props.enabled) {
			r = undefined;
			i = undefined;
		}
		if (r === undefined && i === undefined) {
			return null;
		} else {
			return _.createElement(
				"div",
				{
					className: "rolePriorityContainer",
				},
				_.createElement(
					"div",
					{
						className:
							"rolePriorityButton roleUp" +
							(r === undefined ? " Disabled" : ""),
						onClick: r,
					},
					_.createElement(b.V5W, {
						angle: 0,
					}),
				),
				_.createElement(
					"div",
					{
						className:
							"rolePriorityButton roleDown" +
							(i === undefined ? " Disabled" : ""),
						onClick: i,
					},
					_.createElement(b.V5W, {
						angle: 180,
					}),
				),
			);
		}
	}
};
Z = (0, n.Cg)([C.PA], Z);
let Y = class extends _.Component {
	OnCreateNewTextChannel(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		(0, p.HT)(
			_.createElement(m.Ey, {
				ownerWin: t,
				groupView: this.props.groupView,
				bVoiceChannel: false,
				bJoinChannel: false,
			}),
			t,
		);
	}
	OnCreateNewVoiceChannel(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		(0, p.HT)(
			_.createElement(m.Ey, {
				ownerWin: t,
				groupView: this.props.groupView,
				bVoiceChannel: true,
				bJoinChannel: false,
			}),
			t,
		);
	}
	OnDeleteChannel(e, t) {
		let r = e.currentTarget.ownerDocument.defaultView;
		(0, d.Ci)(
			r,
			(0, B.we)("#GroupSettings_Channels_DeleteChannel"),
			(0, B.we)("#GroupSettings_Channels_DeleteConfirm"),
			(0, B.we)("#GroupSettings_Channels_DeleteButtonLabel"),
			(0, B.we)("#Button_Cancel"),
			true,
		)
			.then(() => {
				let e = t.GetGroup();
				let r = t.GetRoomID();
				e.DeleteChatRoom(r);
			})
			.catch(() => {});
	}
	render() {
		const { groupView: e } = this.props;
		let t = e.GetGroup().BCanAdminChannel();
		const r = e.GetGroup().textRoomList;
		const n = e.GetGroup().voiceRoomList;
		let i = (e, i, a) =>
			_.createElement(
				"div",
				{
					key: e.GetRoomID(),
					className: "ChatGroupSettingsChannels_Row",
				},
				_.createElement(
					"div",
					{
						className: "_DialogRow _DialogRowBackground",
					},
					_.createElement(
						"div",
						{
							className: "_DialogRowLabel",
						},
						a ? _.createElement(b.mrd, null) : _.createElement(b.tcj, null),
						_.createElement(
							"div",
							{
								className: e.IsDefaultRoomForGroup() ? "HomeChannel" : "",
								style: {
									alignSelf: "center",
								},
							},
							e.BIsDefaultRoom()
								? (0, B.we)("#Chat_DefaultChannelName")
								: e.name,
						),
					),
					e.IsDefaultRoomForGroup() &&
						_.createElement(
							"div",
							{
								className: "_DialogRowSecondaryLabel",
							},
							(0, B.we)("#GroupSettings_Channels_HomeChannelDeleteLabel"),
						),
					!e.IsDefaultRoomForGroup() &&
						t &&
						_.createElement(
							"div",
							{
								className: "ChannelDeleteButton",
								onClick: (t) => this.OnDeleteChannel(t, e),
							},
							(0, B.we)("#GroupSettings_Channels_Delete"),
						),
				),
				_.createElement(Z, {
					room: e,
					roomList: a ? n : r,
					enabled: t,
				}),
			);
		let a = r.map((e) => i(e, 0, false));
		let s = n.map((e) => i(e, 0, true));
		return _.createElement(
			_.Fragment,
			null,
			_.createElement(P, null, (0, B.we)("#GroupSettings_Channels_Section")),
			!t && _.createElement(ne, null),
			_.createElement(
				f.lV,
				{
					className: "DialogBody",
				},
				_.createElement(
					f.dR,
					{
						className: x.ChannelsButtons,
					},
					_.createElement(
						f.$n,
						{
							className: "DialogButtonTall",
							svgicon: b.tcj,
							onClick: this.OnCreateNewTextChannel,
							disabled: !t,
						},
						" ",
						(0, B.we)("#GroupSettings_Channels_CreateText"),
						" ",
					),
					_.createElement(
						f.$n,
						{
							className: "DialogButtonTall",
							svgicon: () => b.mrd({}),
							onClick: this.OnCreateNewVoiceChannel,
							disabled: !t,
						},
						" ",
						(0, B.we)("#GroupSettings_Channels_CreateVoice"),
						" ",
					),
				),
				_.createElement(
					f.xz,
					null,
					a.length != 0 &&
						_.createElement(
							"div",
							{
								className: "displayColumn flexShrinkNone",
								style: {
									marginBottom: "32px",
								},
							},
							_.createElement(
								f.JU,
								null,
								(0, B.we)("#GroupSettings_Channels_TextChannels"),
							),
							_.createElement(f._E, null),
							a,
						),
					s.length != 0 &&
						_.createElement(
							"div",
							{
								className: "displayColumn flexShrinkNone",
							},
							_.createElement(
								f.JU,
								null,
								(0, B.we)("#GroupSettings_Channels_VoiceChannels"),
							),
							_.createElement(f._E, null),
							s,
						),
				),
			),
		);
	}
};
(0, n.Cg)([v.oI], Y.prototype, "OnCreateNewTextChannel", null);
(0, n.Cg)([v.oI], Y.prototype, "OnCreateNewVoiceChannel", null);
(0, n.Cg)([v.oI], Y.prototype, "OnDeleteChannel", null);
Y = (0, n.Cg)([C.PA], Y);
class K extends _.Component {
	m_refInput;
	state = {
		strRoleName: "",
	};
	OnSubmit() {
		let e = this.m_refInput && this.m_refInput.value.trim();
		if (e && e.length != 0) {
			this.props.closeModal();
			this.props.group.CreateRole(e).catch(() => {
				(0, d.Ic)(
					this.props.ownerWin,
					(0, B.we)("#Generic_Error"),
					(0, B.we)("#GroupSettings_CreateRole_GenericError"),
				);
				this.props.closeModal();
			});
		}
	}
	HandleTextEntry(e) {
		this.setState({
			strRoleName: e.target.value,
		});
	}
	render() {
		let e = this.state.strRoleName.length > 0;
		return _.createElement(
			p.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			_.createElement(
				f.U9,
				{
					classNameContent: "CreateChatChannelDialog",
					onSubmit: this.OnSubmit,
				},
				_.createElement(
					f.Y9,
					null,
					(0, B.we)("#GroupSettings_CreateRole_Title"),
				),
				_.createElement(
					f.nB,
					null,
					_.createElement(f.pd, {
						ref: (e) => {
							this.m_refInput = e;
						},
						autoFocus: true,
						label: (0, B.we)("#GroupSettings_CreateRole_Description"),
						value: this.state.strRoleName,
						onChange: this.HandleTextEntry,
					}),
				),
				_.createElement(
					f.wi,
					null,
					_.createElement(f.CB, {
						onCancel: this.props.closeModal,
						bOKDisabled: !e,
					}),
				),
			),
		);
	}
}
(0, n.Cg)([v.oI], K.prototype, "OnSubmit", null);
(0, n.Cg)([v.oI], K.prototype, "HandleTextEntry", null);
let X = class extends _.Component {
	state = {};
	m_topRef = _.createRef();
	OnCreateRole(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		(0, p.HT)(
			_.createElement(K, {
				ownerWin: t,
				group: this.props.group,
			}),
			t,
		);
	}
	BCanLocalUserEditRole(e) {
		return this.props.group.BCanIModifyRole(e);
	}
	BCanLocalUserAssignRole() {
		return this.props.group.BCanIAssignRoles();
	}
	EditRole(e) {
		let t = this.props.group.GetRoleName(e);
		let r = this.props.group.GetRoleActions(e);
		if (t && r) {
			this.setState({
				editRoleID: e,
				editRoleName: t,
				editRoleActions: r,
			});
		}
	}
	DoesRoleGrantPermission(e, t) {
		return true;
	}
	OnSettingToggled(e, t) {
		this.props.group.SetRoleAction(this.state.editRoleID, e, t);
	}
	MoveRoleUp(e) {
		let t = this.props.group.GetRoleOrdinal(e);
		let r = Math.max(0, t - 1);
		this.props.group.ReorderRole(e, r).then((e) => {
			this.forceUpdate();
		});
	}
	MoveRoleDown(e) {
		let t = this.props.group.GetRoleOrdinal(e) + 1;
		this.props.group.ReorderRole(e, t).then((e) => {
			this.forceUpdate();
		});
	}
	componentDidUpdate(e, t) {
		if (
			this.state.editRoleID !== t.editRoleID &&
			this.m_topRef &&
			this.m_topRef.current
		) {
			let e = this.m_topRef.current.parentElement;
			while (e) {
				if (e.scrollHeight > e.clientHeight) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
	}
	render() {
		const { group: e } = this.props;
		const { editRoleID: t } = this.state;
		const r = e.BIsAccountIDOwner(c.xm.CMInterface.steamid.GetAccountID());
		let n = e.BIsClanChatRoom();
		if (t) {
			return _.createElement(
				"div",
				{
					ref: this.m_topRef,
				},
				_.createElement($, {
					group: e,
					roleID: t,
					onRequestClose: () =>
						this.setState({
							editRoleID: undefined,
						}),
				}),
			);
		}
		let i = e.DefaultRoleID();
		let a = e
			.GetRoles()
			.slice()
			.sort((e, t) =>
				e.role_id == i ? 1 : t.role_id == i ? -1 : e.ordinal - t.ordinal,
			);
		let o = e.GetHighestRankRoleIDForPermission(
			c.xm.FriendStore.self.accountid,
			8,
		);
		let l = o ? e.GetRoleOrdinal(o) : Number.MAX_VALUE - 1;
		let m = e.BIsAccountIDOwner(c.xm.FriendStore.self.accountid);
		let u = false;
		let d = this.BCanLocalUserAssignRole();
		let A = a.map((t, r) => {
			let s = false;
			let o = this.BCanLocalUserEditRole(t.role_id);
			let d = o && (m || t.ordinal > l + 1) && t.ordinal > 0;
			let A = o && r < a.length - 2;
			if (o) {
				u = true;
			}
			if (t.role_id == i) {
				s = true;
				d = false;
				A = false;
			} else if (e.BMemberHasRole(c.xm.FriendStore.self.accountid, t.role_id)) {
				s = true;
			}
			return _.createElement(
				"div",
				{
					className: "roleRow",
					key: t.role_id,
				},
				_.createElement(
					f.$n,
					{
						className: "roleButton" + (s && !m ? " currentUserRole" : ""),
						onClick: (e) => {
							this.EditRole(t.role_id);
						},
					},
					_.createElement(b.X4B, null),
					(0, B.we)(t.name),
					_.createElement(
						"span",
						{
							className: "roleSubtitle",
						},
						o ? (0, B.we)("#Generic_Edit") : (0, B.we)("#Generic_View"),
					),
				),
				!n &&
					u &&
					a.length > 2 &&
					(d || A) &&
					_.createElement(
						"div",
						{
							className: "rolePriorityContainer",
						},
						_.createElement(
							"div",
							{
								className: "rolePriorityButton roleUp" + (d ? "" : " Disabled"),
								onClick: (e) => {
									this.MoveRoleUp(t.role_id);
									e.stopPropagation();
								},
							},
							_.createElement(b.V5W, {
								angle: 0,
							}),
						),
						_.createElement(
							"div",
							{
								className:
									"rolePriorityButton roleDown" + (A ? "" : " Disabled"),
								onClick: (e) => {
									this.MoveRoleDown(t.role_id);
									e.stopPropagation();
								},
							},
							_.createElement(b.V5W, {
								angle: 180,
							}),
						),
					),
			);
		});
		let p = (0, B.we)("#ChatRoomRole_Description_NoEdit");
		if (n) {
			let t = M.b.InitFromClanID(e.GetClanID());
			let r = `${s.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/membersManage`;
			p = (0, B.PP)(
				"#ChatRoomRole_Description_Clan",
				_.createElement(
					E.uU,
					{
						href: r,
					},
					(0, B.we)("#ChatRoomRole_Description_ClanLink"),
				),
			);
		} else if (u && !m) {
			p = (0, B.we)("#ChatRoomRole_Description");
		} else if (d || m) {
			p = (0, B.we)("#ChatRoomRole_Description_NoEditCanAssign");
		}
		return _.createElement(
			_.Fragment,
			null,
			_.createElement("div", {
				ref: this.m_topRef,
			}),
			_.createElement(P, null, (0, B.we)("#GroupSettings_Permissions_Section")),
			!r &&
				!u &&
				_.createElement(
					ne,
					null,
					(0, B.we)("#Chat_Settings_Permission_Denied_Permissions"),
				),
			_.createElement(
				"div",
				{
					className: "roleList",
				},
				_.createElement(
					f.a3,
					{
						className: x.PermissionsDescription,
					},
					p,
				),
				_.createElement(
					"div",
					{
						className: x.RoleNameHeader,
					},
					_.createElement(
						f.JU,
						null,
						(0, B.we)("#GroupSettings_Permissions_RolesTitle"),
						" ",
					),
					!m &&
						_.createElement(
							f.JU,
							{
								className: "meKey",
							},
							_.createElement(b.X4B, null),
							(0, B.we)("#GroupSettings_meKey_Desc"),
						),
					m &&
						_.createElement(
							f.JU,
							{
								className: "meKey",
							},
							_.createElement(b.OeC, null),
							(0, B.we)("#GroupSettings_meKey_Desc_Owner"),
						),
				),
				_.createElement(
					f.lV,
					{
						className: "DialogBody",
					},
					_.createElement(
						f.$n,
						{
							disabled: true,
							className: "roleButton owner",
							svgicon: b.OeC,
							onClick: () => {},
						},
						(0, B.we)("#ChatRoomRole_Owner"),
						_.createElement(
							"span",
							{
								className: "roleSubtitle",
							},
							(0, B.we)("#ChatRoomRole_OwnerSubtitle"),
						),
					),
					A,
				),
				!n &&
					_.createElement(
						f.jn,
						{
							className: "createNewRoleButton",
							svgicon: () =>
								b.f5w({
									minus: false,
									nocircle: false,
								}),
							onClick: this.OnCreateRole,
							disabled: !e.BCanICreateRoles(),
						},
						(0, B.we)("#GroupSettings_Permissions_CreateNew"),
					),
			),
		);
	}
};
(0, n.Cg)([v.oI], X.prototype, "OnCreateRole", null);
(0, n.Cg)([v.oI], X.prototype, "EditRole", null);
(0, n.Cg)([v.oI], X.prototype, "OnSettingToggled", null);
(0, n.Cg)([v.oI], X.prototype, "MoveRoleUp", null);
(0, n.Cg)([v.oI], X.prototype, "MoveRoleDown", null);
X = (0, n.Cg)([C.PA], X);
const J = (e) => {
	const { eAction: t, strLabel: r, disabled: n, group: i, roleID: a } = e;
	const s = i.GetRoleActions(a);
	const o = s && s.BCanPerformAction(t);
	const [l, c] = _.useState(0);
	return _.createElement(f.P8, {
		onChange: (e) => {
			i.SetRoleAction(a, t, e);
			c(l + 1);
		},
		label: r,
		value: o,
		disabled: n,
		className: x.PermissionToggle,
	});
};
let $ = class extends _.Component {
	constructor(e) {
		super(e);
		this.state = {
			editRoleName: e.group.GetRoleName(e.roleID),
		};
	}
	OnEditRoleNameChange(e) {
		this.setState({
			editRoleName: e.target.value,
		});
	}
	OnEditRoleNameBlur() {
		this.RenameRole();
		let e = document.getElementById("b1");
		if (e) {
			e.blur();
		}
	}
	RenameRole() {
		const { roleID: e } = this.props;
		const t = this.state.editRoleName;
		this.props.group.RenameRole(e, t).catch(() => {
			this.setState({
				editRoleName: this.props.group.GetRoleName(e),
			});
		});
	}
	DeleteRole(e, t) {
		let r = e.currentTarget.ownerDocument.defaultView;
		if (t == this.props.group.DefaultRoleID()) {
			return;
		}
		let n = this.props.group.GetRoleName(t);
		let i = _.createElement(
			"div",
			{
				style: {
					marginTop: "8px",
					color: "white",
				},
			},
			n,
		);
		(0, d.Ci)(
			r,
			(0, B.we)("#GroupSettings_Permissions_ConfirmDeleteTitle"),
			(0, B.we)("#GroupSettings_Permissions_ConfirmDelete"),
			(0, B.we)("#GroupSettings_Permissions_ConfirmDeleteButton"),
			(0, B.we)("#Button_Cancel"),
			true,
			i,
		)
			.then(() => this.props.group.DeleteRole(t))
			.then(() => this.props.onRequestClose())
			.catch((e) => {
				if (e != null) {
					(0, d.Ic)(
						r,
						(0, B.we)("#Generic_Error"),
						(0, B.we)("#GroupSettings_DeleteRole_GenericError"),
					);
				}
			});
	}
	render() {
		const { group: e, roleID: t, onRequestClose: r } = this.props;
		if (!e.GetRoleActions(t)) {
			return null;
		}
		let n = e.BIsClanChatRoom();
		let i = t == e.DefaultRoleID();
		let a =
			i && !n ? (0, B.we)("#ChatRoomRole_Member") : this.state.editRoleName;
		let s = e.BCanIModifyRole(t);
		const o = {
			disabled: !s,
			group: e,
			roleID: t,
		};
		const l =
			n || !s
				? _.createElement(
						"div",
						{
							className: (0, D.A)(x.RoleNameHeader, x.FixedRoleName),
						},
						(0, B.we)(a),
					)
				: _.createElement(
						"div",
						{
							className: x.RoleNameHeader,
						},
						_.createElement(f.pd, {
							autoComplete: "off",
							id: "b1",
							className: "editRoleName",
							label: (0, B.we)("#GroupSettings_Permissions_RoleName"),
							type: "text",
							value: a,
							disabled: i || !s,
							onChange: this.OnEditRoleNameChange,
							onBlur: this.OnEditRoleNameBlur,
						}),
					);
		return _.createElement(
			f.lV,
			{
				onSubmit: this.OnEditRoleNameBlur,
				className: x.PermissionsEdit,
			},
			_.createElement(
				"div",
				{
					className: x.Back,
					onClick: () => r(),
				},
				_.createElement(b.aeP, null),
				(0, B.we)("#GroupSettings_Permissions_BackButton"),
			),
			!s &&
				_.createElement(
					ne,
					null,
					(0, B.we)("#Chat_Settings_Permission_Denied"),
				),
			l,
			_.createElement(
				f.nB,
				null,
				_.createElement(
					"div",
					{
						className: (0, D.A)("SettingsGroup", x.PermissionsGroup),
					},
					_.createElement(
						f.JU,
						{
							className: "PermissionsSectionHeader",
						},
						(0, B.we)("#GroupSettings_Permissions_Heading_General"),
					),
					_.createElement(J, {
						...o,
						eAction: 6,
						strLabel: (0, B.we)("#GroupSettings_Permissions_Chat"),
					}),
					_.createElement(J, {
						...o,
						eAction: 10,
						strLabel: (0, B.we)("#GroupSettings_Permissions_MentionAll"),
					}),
					_.createElement(J, {
						...o,
						eAction: 11,
						strLabel: (0, B.we)(
							"#GroupSettings_Permissions_SetWatchingBroadcast",
						),
					}),
				),
				_.createElement(
					"div",
					{
						className: (0, D.A)("SettingsGroup", x.PermissionsGroup),
					},
					_.createElement(
						f.JU,
						{
							className: "PermissionsSectionHeader",
						},
						(0, B.we)("#GroupSettings_Permissions_Heading_MembersAndRoles"),
					),
					_.createElement(J, {
						...o,
						eAction: 2,
						strLabel: (0, B.we)("#GroupSettings_Permissions_Kick"),
					}),
					_.createElement(J, {
						...o,
						eAction: 3,
						strLabel: (0, B.we)("#GroupSettings_Permissions_Ban"),
					}),
					_.createElement(J, {
						...o,
						eAction: 4,
						strLabel: (0, B.we)("#GroupSettings_Permissions_Invite"),
					}),
					_.createElement(J, {
						...o,
						eAction: 8,
						strLabel: (0, B.we)("#GroupSettings_Permissions_ChangeGroupRoles"),
						disabled: o.disabled || i,
					}),
					!n &&
						_.createElement(J, {
							...o,
							eAction: 9,
							strLabel: (0, B.we)("#GroupSettings_Permissions_ChangeUserRoles"),
							disabled: o.disabled || i,
						}),
				),
				_.createElement(
					"div",
					{
						className: (0, D.A)("SettingsGroup", x.PermissionsGroup),
					},
					_.createElement(
						f.JU,
						{
							className: "PermissionsSectionHeader",
						},
						(0, B.we)("#GroupSettings_Permissions_Heading_RoomManagement"),
					),
					_.createElement(J, {
						...o,
						eAction: 5,
						strLabel: (0, B.we)(
							"#GroupSettings_Permissions_ChangeTaglineAvatarName",
						),
					}),
					_.createElement(J, {
						...o,
						eAction: 1,
						strLabel: (0, B.we)(
							"#GroupSettings_Permissions_CreateRenameDeleteChannel",
						),
					}),
				),
			),
			_.createElement(
				f.wi,
				null,
				!n &&
					!i &&
					s &&
					_.createElement(
						f.$n,
						{
							className: "deleteButton",
							onClick: (e) => {
								this.DeleteRole(e, t);
							},
						},
						(0, B.we)("#GroupSettings_Permissions_DeleteRoleButton"),
					),
			),
		);
	}
};
(0, n.Cg)([v.oI], $.prototype, "OnEditRoleNameChange", null);
(0, n.Cg)([v.oI], $.prototype, "OnEditRoleNameBlur", null);
(0, n.Cg)([v.oI], $.prototype, "RenameRole", null);
(0, n.Cg)([v.oI], $.prototype, "DeleteRole", null);
$ = (0, n.Cg)([C.PA], $);
let ee = class extends _.Component {
	componentDidMount() {
		const { group: e, inviteLinks: t } = this.props;
		if (t.loadingState == "loaded") {
			return;
		}
		if (e.BCanInvite() && t.loadingState == "pending") {
			e.GetInviteLinksForGroup().then((e) => {
				setTimeout(() => {
					if (e.loadingState == "loaded") {
						t.rgInviteLinks = e.rgInviteLinks.sort(
							(e, t) => e.time_expires() - t.time_expires(),
						);
					}
					t.loadingState = e.loadingState;
				}, 500);
			});
		} else {
			t.loadingState = "denied";
		}
	}
	OnDeleteLink(e) {
		let t = this.props.inviteLinks;
		let r = _.createElement(
			"div",
			{
				style: {
					marginTop: "5px",
					color: "#dee2e5",
				},
			},
			(0, I.u)(e.invite_code()),
		);
		(0, d.hr)(
			(0, B.we)("#GroupSettings_Invite_ConfirmDeleteTitle"),
			(0, B.we)("#GroupSettings_Invite_ConfirmDelete"),
			(0, B.we)("#GroupSettings_Invite_ConfirmDeleteButton"),
			(0, B.we)("#Button_Cancel"),
			true,
			r,
		)
			.then(() => {
				this.props.group.DeleteInviteLink(e.invite_code()).then((r) => {
					(0, T.w)(
						t.loadingState == "loaded",
						"somehow got a valid link to delete without links being loaded",
					);
					let n = t.rgInviteLinks.findIndex(
						(t) => t.invite_code() == e.invite_code(),
					);
					if (n >= 0) {
						t.rgInviteLinks.splice(n, 1);
						console.log("removed link", t.rgInviteLinks);
					}
				});
			})
			.then(() => {})
			.catch(() => {});
	}
	FormatExpires(e) {
		if (e > 2145916800) {
			return (0, B.we)("#GroupSettings_Invite_NeverExpires");
		}
		return c.xm.RTime32ToDate(e).toLocaleString([], {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	}
	HandleFocus(e) {
		e.target.select();
	}
	render() {
		const { inviteLinks: e, group: t } = this.props;
		let r;
		const n = t.BCanInvite();
		if (e.loadingState == "pending") {
			r = _.createElement("div", null, _.createElement(y.t, null));
		} else if (e.loadingState == "denied") {
			r = _.createElement(
				"div",
				null,
				(0, B.we)("#GroupSettings_Invite_Denied"),
			);
		} else if (e.loadingState == "failed") {
			r = _.createElement(
				"div",
				null,
				(0, B.we)("#GroupSettings_Invite_Failed"),
			);
		} else if (e.loadingState == "loaded") {
			let t = [];
			t = e.rgInviteLinks.map((e) =>
				_.createElement(
					"tr",
					{
						key: e.invite_code(),
					},
					_.createElement(
						"td",
						null,
						" ",
						_.createElement(f.pd, {
							className: "inviteURLLink",
							value: (0, I.u)(e.invite_code()),
							readOnly: true,
							onClick: this.HandleFocus,
							onFocus: this.HandleFocus,
						}),
						" ",
					),
					_.createElement(
						"td",
						{
							className: "dateCell allCaps",
						},
						" ",
						this.FormatExpires(e.time_expires()),
						" ",
					),
					_.createElement(
						"td",
						{
							className: "buttonCell",
						},
						_.createElement(
							f.$n,
							{
								onClick: (t) => this.OnDeleteLink(e),
								disabled: !n,
							},
							(0, B.we)("#GroupSettings_Invite_Delete"),
						),
					),
				),
			);
			r =
				t.length == 0
					? _.createElement(
							"div",
							null,
							(0, B.we)("#GroupSettings_Invite_NoInvites"),
						)
					: _.createElement(
							"table",
							{
								className: "DialogSpanningTable InviteLinksTable",
							},
							_.createElement(
								"thead",
								null,
								_.createElement(
									"tr",
									null,
									_.createElement(
										"th",
										{
											className: "inviteCodeColumn",
										},
										" ",
										(0, B.we)("#GroupSettings_Invite_Code"),
										" ",
									),
									_.createElement(
										"th",
										{
											className: "dateColumn",
										},
										" ",
										(0, B.we)("#GroupSettings_Invite_Expiration"),
										" ",
									),
									_.createElement(
										"th",
										{
											className: "buttonColumn",
										},
										" ",
									),
								),
							),
							_.createElement("tbody", null, t),
						);
		}
		return _.createElement(
			_.Fragment,
			null,
			_.createElement(P, null, (0, B.we)("#GroupSettings_Invite_Section")),
			!n && _.createElement(ne, null),
			_.createElement(
				f.lV,
				{
					className: "DialogBody",
				},
				n &&
					_.createElement(
						"div",
						{
							className: "inviteLinkContainer",
						},
						_.createElement(u.Rf, {
							chat: t.GetDefaultChatRoom(),
							disabled: !n,
						}),
					),
				n &&
					_.createElement(
						"div",
						{
							className: "OrSeparator",
						},
						_.createElement(f._E, null),
					),
				r,
			),
		);
	}
};
(0, n.Cg)([v.oI], ee.prototype, "OnDeleteLink", null);
(0, n.Cg)([v.oI], ee.prototype, "HandleFocus", null);
ee = (0, n.Cg)([C.PA], ee);
let te = class extends _.Component {
	static contextType = U.QO;
	componentDidMount() {
		let e = this.props.invitedUsers;
		if (e.loadingState == "loaded") {
			return;
		}
		let t = this.props.group;
		if (e.loadingState == "pending") {
			t.GetInvitedUsersForGroup().then((t) => {
				setTimeout(() => {
					if (t.loadingState == "loaded") {
						e.rgInvitedUsers = t.rgInvitedUsers.sort(
							(e, t) => e.time_invited() - t.time_invited(),
						);
					}
					e.loadingState = t.loadingState;
				}, 500);
			});
		}
	}
	RevokeInvite(e, t) {
		let r = c.xm.FriendStore.GetPlayer(t);
		let n = e.currentTarget.ownerDocument.defaultView;
		let i = _.createElement(A.bP, {
			className: "friend",
			friend: r,
			context: null,
			disableContextMenu: true,
		});
		(0, d.Ci)(
			n,
			(0, B.we)("#GroupSettings_InvitedUsers_RevokeTitle"),
			(0, B.we)("#GroupSettings_InvitedUsers_RevokeBody"),
			(0, B.we)("#GroupSettings_InvitedUsers_RevokeConfirm"),
			(0, B.we)("#Button_Cancel"),
			true,
			i,
		)
			.then(() => {
				this.props.group
					.RevokeInvite(t)
					.then(() => {
						w.Wp(
							this.props.invitedUsers.rgInvitedUsers,
							(e) => e.accountid() === t,
						);
					})
					.catch((e) => {
						(0, d.Ic)(
							n,
							(0, B.we)("#Generic_Error"),
							(0, B.we)("#GroupSettings_InvitedUsers_RevokeGenericError"),
						);
					});
			})
			.catch(() => {});
	}
	FormatDate(e) {
		return c.xm.RTime32ToDate(e).toLocaleString([], {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	}
	RenderContent() {
		const { invitedUsers: e, group: t } = this.props;
		const r = t.BCanInvite();
		if (e.loadingState == "loaded") {
			if (!e.rgInvitedUsers || e.rgInvitedUsers.length == 0) {
				return _.createElement(
					f.lV,
					null,
					(0, B.we)("#GroupSettings_InvitedUsers_Noone"),
				);
			}
			let t = e.rgInvitedUsers.map((e) => {
				let t = {
					friend: c.xm.FriendStore.GetPlayer(e.accountid()),
					bHideGameName: true,
					bHidePersona: true,
					noActions: this.context?.IN_GAMEPADUI,
					context: null,
				};
				return _.createElement(
					"tr",
					{
						className: "hoverRow",
						key: e.accountid(),
					},
					_.createElement(
						"td",
						{
							className: "friendCell",
						},
						" ",
						_.createElement(A.bP, {
							...t,
						}),
						" ",
					),
					_.createElement(
						"td",
						{
							className: "dateCell",
						},
						" ",
						this.FormatDate(e.time_invited()),
						" ",
					),
					_.createElement(
						"td",
						{
							className: "buttonCell",
						},
						_.createElement(
							f.$n,
							{
								onClick: (t) => this.RevokeInvite(t, e.accountid()),
								disabled: !r,
							},
							(0, B.we)("#GroupSettings_InvitedUsers_RevokeInvite"),
						),
					),
				);
			});
			return _.createElement(
				f.lV,
				{
					className: "DialogBody",
				},
				_.createElement(
					g.Z,
					{
						"flow-children": "grid",
					},
					_.createElement(
						"table",
						{
							className: "DialogSpanningTable InvitedUsersTable",
						},
						_.createElement(
							"thead",
							null,
							_.createElement(
								"tr",
								{
									className: "headerRow",
								},
								_.createElement(
									"th",
									{
										className: "friendColumn",
									},
									(0, B.we)("#GroupSettings_InvitedUsers_InvitedHeader"),
									" ",
								),
								_.createElement(
									"th",
									{
										className: "dateColumn",
									},
									" ",
									(0, B.we)("#GroupSettings_InvitedUsers_InvitedDate"),
									" ",
								),
								_.createElement(
									"th",
									{
										className: "buttonColumn",
									},
									" ",
								),
							),
						),
						_.createElement("tbody", null, t),
					),
				),
			);
		}
		return _.createElement(
			f.lV,
			null,
			e.loadingState == "pending"
				? _.createElement(y.t, {
						size: "medium",
					})
				: (0, B.we)("#GroupSettings_InvitedUsers_Failed"),
		);
	}
	render() {
		const { group: e } = this.props;
		const t = e.BCanInvite();
		return _.createElement(
			_.Fragment,
			null,
			_.createElement(
				P,
				null,
				(0, B.we)("#GroupSettings_InvitedUsers_Section"),
			),
			!t && _.createElement(ne, null),
			this.RenderContent(),
		);
	}
};
(0, n.Cg)([v.oI], te.prototype, "RevokeInvite", null);
te = (0, n.Cg)([C.PA], te);
let re = class extends _.Component {
	static contextType = U.QO;
	componentDidMount() {
		let e = this.props.group;
		let t = this.props.bans;
		if (t.loadingState == "pending") {
			e.GetBanList().then((e) => {
				setTimeout(() => {
					t.rgBans = e.rgBans;
					t.loadingState = e.loadingState;
				}, 500);
			});
		}
	}
	OnClickUnban(e, t) {
		let r = c.xm.FriendStore.GetPlayer(t);
		let n = e.currentTarget.ownerDocument.defaultView;
		let i = _.createElement(A.bP, {
			className: "friend",
			friend: r,
			context: null,
			disableContextMenu: true,
		});
		(0, d.Ci)(
			n,
			(0, B.we)("#GroupSettings_Bans_UnbanTitle"),
			(0, B.we)("#GroupSettings_Bans_UnbanBody", r.display_name),
			(0, B.we)("#GroupSettings_Bans_UnbanConfirm"),
			(0, B.we)("#Button_Cancel"),
			true,
			i,
		)
			.then(() => {
				this.props.group
					.SetUserBanState(t, false)
					.then(() => {
						w.Wp(this.props.bans.rgBans, (e) => e.accountid() === t);
					})
					.catch((e) => {
						(0, d.Ic)(
							n,
							(0, B.we)("#Generic_Error"),
							(0, B.we)("#GroupSettings_Bans_UnbanGenericError"),
						);
					});
			})
			.catch(() => {});
	}
	FormatDate(e) {
		return c.xm.RTime32ToDate(e).toLocaleString([], {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	}
	RenderContent() {
		const { bans: e } = this.props;
		let t;
		if (e.loadingState == "loaded") {
			if (e.rgBans.length == 0) {
				return _.createElement(
					f.lV,
					null,
					(0, B.we)("#GroupSettings_Bans_NoOneBanned"),
				);
			} else {
				t = e.rgBans.map((e) => {
					let t = {
						friend: c.xm.FriendStore.GetPlayer(e.accountid()),
						noActions: this.context?.IN_GAMEPADUI,
						context: null,
					};
					return _.createElement(
						"tr",
						{
							className: "hoverRow",
							key: e.accountid(),
						},
						_.createElement(
							"td",
							{
								className: "friendCell",
							},
							" ",
							_.createElement(A.bP, {
								...t,
							}),
							" ",
						),
						_.createElement(
							"td",
							{
								className: "dateCell",
							},
							" ",
							this.FormatDate(e.time_banned()),
							" ",
						),
						_.createElement(
							"td",
							{
								className: "buttonCell",
							},
							" ",
							_.createElement(
								f.$n,
								{
									onClick: (t) => this.OnClickUnban(t, e.accountid()),
								},
								(0, B.we)("#GroupSettings_Bans_RevokeBan"),
							),
						),
					);
				});
				return _.createElement(
					f.lV,
					{
						className: "DialogBody",
					},
					_.createElement(
						"table",
						{
							className: "DialogSpanningTable BannedUsersTable",
						},
						_.createElement(
							"thead",
							null,
							_.createElement(
								"tr",
								{
									className: "headerRow",
								},
								_.createElement(
									"th",
									{
										className: "friendColumn",
									},
									(0, B.we)("#GroupSettings_Bans_InvitedHeader"),
									" ",
								),
								_.createElement(
									"th",
									{
										className: "dateColumn",
									},
									" ",
									(0, B.we)("#GroupSettings_Bans_BannedDate"),
									" ",
								),
								_.createElement(
									"th",
									{
										className: "buttonColumn",
									},
									" ",
								),
							),
						),
						_.createElement("tbody", null, t),
					),
				);
			}
		}
		{
			let t;
			t =
				e.loadingState == "pending"
					? _.createElement(y.t, {
							size: "medium",
						})
					: e.loadingState == "denied"
						? (0, B.we)("#GroupSettings_Bans_AccessDenied")
						: (0, B.we)("#GroupSettings_Bans_Failed");
			return _.createElement(
				f.lV,
				{
					className: "DialogBody",
				},
				t,
			);
		}
	}
	render() {
		const { group: e } = this.props;
		const t = e.BCanBan();
		return _.createElement(
			_.Fragment,
			null,
			_.createElement(P, null, (0, B.we)("#GroupSettings_Bans_Section")),
			!t && _.createElement(ne, null),
			this.RenderContent(),
		);
	}
};
(0, n.Cg)([v.oI], re.prototype, "OnClickUnban", null);
re = (0, n.Cg)([C.PA], re);
const ne = (e) =>
	_.createElement(
		"div",
		{
			className: x.Notification,
		},
		_.createElement(b.c_I, null),
		e.children || (0, B.we)("#Chat_Settings_Permission_Denied"),
	);
