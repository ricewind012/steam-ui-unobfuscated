var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./95773.js");
var a = require("./52912.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require("./13869.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./64608.js");
function d(e, t, r) {
	(0, o.HT)(
		l.createElement(A, {
			player: t,
		}),
		r,
		"NicknameDialog",
		{
			strTitle: (0, m.we)("#Friend_Menu_AddNickname"),
			popupWidth: 640,
			popupHeight: 400,
		},
		(0, a.h8)(r),
	);
}
let A = class extends l.Component {
	constructor(e) {
		super(e);
		this.state = {
			strCurrentNameEntry: this.props.player.nickname || "",
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strCurrentNameEntry: e.currentTarget.value,
		});
	}
	HandleSubmit(e) {
		i.xm.FriendStore.SetPlayerNickname(
			this.props.player,
			this.state.strCurrentNameEntry,
		).then((e) => {
			if (e == 1 && this.props.closeModal) {
				this.props.closeModal();
			}
		});
	}
	componentDidUpdate(e) {
		if (e.player !== this.props.player) {
			this.setState({
				strCurrentNameEntry: this.props.player.nickname,
			});
		}
	}
	render() {
		let e = "friend editNickname";
		let t = this.props.player.has_nickname;
		if (this.props.player.persona.is_ingame) {
			e += " ingame";
		} else if (this.props.player.persona.is_online) {
			e += " online";
		}
		if (t) {
			e += " nickNamed";
		}
		return l.createElement(
			o.x_,
			{
				className: "Dialog_EditNickName",
				onEscKeypress: this.props.closeModal,
			},
			l.createElement(
				u.U9,
				{
					classNameContent: "NicknameDialog",
					onSubmit: this.HandleSubmit,
				},
				l.createElement(
					u.Y9,
					null,
					t
						? (0, m.we)("#Friend_Menu_ChangeNickname")
						: (0, m.we)("#Friend_Menu_AddNickname"),
				),
				l.createElement(
					u.nB,
					null,
					l.createElement(
						u.a3,
						null,
						t
							? (0, m.we)("#Nickname_EditNickname")
							: (0, m.we)("#Nickname_AddANickname"),
					),
					l.createElement(
						u.a3,
						null,
						l.createElement(
							"div",
							{
								className: e,
							},
							l.createElement("img", {
								className: "avatarMedium",
								src: this.props.player.persona.avatar_url_full,
							}),
							l.createElement(
								"div",
								{
									className: "labelHolder",
								},
								l.createElement(
									"div",
									{
										className: "mediumName",
									},
									this.props.player.secondary_display_name,
								),
								l.createElement(
									"div",
									{
										className: "nickNamedAs",
									},
									(0, m.we)("#Nickname_NickNameAsDialog"),
								),
								l.createElement(
									"div",
									{
										className: "mediumName asNickName",
									},
									l.createElement(u.pd, {
										placeholder: t
											? (0, m.we)("#Nickname_PlaceHolderNickName")
											: (0, m.we)("#Nickname_PlaceHolderNickNameFresh"),
										className: "nicknameInput",
										value: this.state.strCurrentNameEntry,
										onChange: this.HandleTextEntry,
										autoFocus: true,
										bShowClearAction: true,
									}),
								),
							),
						),
					),
				),
				l.createElement(
					u.wi,
					null,
					l.createElement(u.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
};
(0, n.Cg)([c.oI], A.prototype, "HandleTextEntry", null);
(0, n.Cg)([c.oI], A.prototype, "HandleSubmit", null);
A = (0, n.Cg)([s.PA], A);
var p = require("./68665.js");
var g = require(/*webcrack:missing*/ "./8573.js");
var h = require(/*webcrack:missing*/ "./54644.js");
var C = require("./98829.js");
var _ = require(/*webcrack:missing*/ "./89193.js");
function f(e, t, r) {
	let n = r ? [r.accountid] : [];
	(0, o.HT)(
		l.createElement(b, {
			browserContext: e,
			rgPreSelectedFriends: n,
		}),
		t,
		"CreateFriendCategoryDialog",
		{
			strTitle: (0, m.we)("#FriendGroup_Menu_CreateGroup"),
			popupWidth: 664,
			popupHeight: 700,
		},
		(0, a.h8)(t),
	);
}
class b extends l.Component {
	constructor(e) {
		super(e);
		this.state = {
			strNameEntry: e.group ? e.group.name : "",
			strError: null,
			rgPickedFriends: e.rgPreSelectedFriends.map((e) =>
				i.xm.FriendStore.GetPlayer(e),
			),
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strNameEntry: e.target.value,
			strError: null,
		});
	}
	HandleSubmit() {
		const e = this.state.rgPickedFriends;
		const t = this.state.strNameEntry;
		if (this.props.group) {
			let r = new Set(this.props.group.GetCurrentMemberSet());
			let n = [];
			let a = [];
			for (let t of e) {
				if (r.has(t.accountid)) {
					r.delete(t.accountid);
				} else {
					n.push(t.persona.m_steamid.ConvertTo64BitString());
				}
			}
			r.forEach((e) => {
				a.push(g.b.InitFromAccountID(e).ConvertTo64BitString());
			});
			i.xm.FriendStore.FriendGroupStore.ManageGroup(
				this.props.group,
				t,
				n,
				a,
			).then((e) => {
				if (e) {
					if (this.props.closeModal) {
						this.props.closeModal();
					}
				} else {
					this.setState({
						strError: (0, m.we)("#FriendGroup_ManageGroup_ErrorFailed"),
					});
				}
			});
		} else {
			if (!t) {
				this.setState({
					strError: (0, m.we)("#FriendGroup_CreateGroup_ErrorNeedName"),
				});
				return;
			}
			let r = e.map((e) => e.persona.m_steamid.ConvertTo64BitString());
			i.xm.FriendStore.FriendGroupStore.CreateGroup(t, r).then((e) => {
				if (e) {
					if (this.props.closeModal) {
						this.props.closeModal();
					}
				} else {
					this.setState({
						strError: (0, m.we)("#FriendGroup_CreateGroup_ErrorFailed"),
					});
				}
			});
		}
	}
	render() {
		return l.createElement(
			o.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			l.createElement(
				u.U9,
				{
					classNameContent: "ManageGroupDialog",
					onSubmit: this.HandleSubmit,
				},
				l.createElement(
					u.Y9,
					null,
					this.props.group
						? (0, m.we)("#FriendGroup_Menu_Manage")
						: (0, m.we)("#FriendGroup_Menu_CreateGroup"),
				),
				l.createElement(
					u.nB,
					null,
					this.state.strError &&
						l.createElement(
							u.a3,
							{
								className: "nicknameError",
							},
							this.state.strError,
						),
					l.createElement(u.pd, {
						type: "text",
						label: (0, m.we)("#FriendGroup_CategoryName"),
						className: "nicknameInput",
						value: this.state.strNameEntry,
						onChange: this.HandleTextEntry,
						autoFocus: true,
					}),
					l.createElement(p.r, {
						label: (0, m.we)("#FriendGroup_CategoryMembers"),
						eSort: 1,
						rgPickedFriends: this.state.rgPickedFriends,
						onChange: (e) =>
							this.setState({
								rgPickedFriends: e,
							}),
					}),
				),
				l.createElement(
					u.wi,
					null,
					l.createElement(u.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
}
(0, n.Cg)([c.oI], b.prototype, "HandleTextEntry", null);
(0, n.Cg)([c.oI], b.prototype, "HandleSubmit", null);
class y extends l.Component {
	m_mapCategoryChecks = _.sH.map();
	state = {
		strError: null,
	};
	componentDidUpdate(e) {
		if (e.friend !== this.props.friend) {
			this.m_mapCategoryChecks.clear();
		}
	}
	HandleSubmit() {
		let e = [];
		i.xm.FriendStore.FriendGroupStore.user_groups.forEach((t) => {
			if (this.m_mapCategoryChecks.has(t.unique_id)) {
				let r;
				let n;
				if (this.m_mapCategoryChecks.get(t.unique_id)) {
					n = t;
				} else {
					r = t;
				}
				e.push(
					i.xm.FriendStore.FriendGroupStore.TransferFriendFromToGroup(
						this.props.friend,
						r,
						n,
					),
				);
			}
		});
		Promise.all(e).then((e) => {
			let t = false;
			for (let r of e) {
				for (let e of r) {
					if (!e) {
						t = true;
					}
				}
			}
			if (t) {
				this.setState({
					strError: (0, m.we)("#FriendGroup_ManageGroup_ErrorFailed"),
				});
			} else {
				this.props.closeModal();
			}
		});
	}
	CreateNew(e) {
		f((0, a.CO)(e), (0, h.uX)(e), this.props.friend);
	}
	render() {
		return l.createElement(
			o.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			l.createElement(
				u.U9,
				{
					classNameContent: "AssignCategoriesDialog",
					onSubmit: this.HandleSubmit,
				},
				l.createElement(u.Y9, null, (0, m.we)("#FriendGroup_Categorize_Title")),
				l.createElement(
					u.nB,
					null,
					this.state.strError &&
						l.createElement(
							u.a3,
							{
								className: "nicknameError",
							},
							this.state.strError,
						),
					l.createElement(
						u.dR,
						null,
						l.createElement(
							u.VP,
							null,
							l.createElement(C.bP, {
								friend: this.props.friend,
								className: "AssignCategoriesDialog_Friend",
								noActions: true,
								context: null,
							}),
						),
					),
					l.createElement(S, {
						friend: this.props.friend,
						mapChecks: this.m_mapCategoryChecks,
					}),
					l.createElement(
						u.dR,
						{
							className: "AssignCategoriesDialog_AddNewButton",
						},
						l.createElement(
							u.$n,
							{
								onClick: this.CreateNew,
							},
							(0, m.we)("#FriendGroup_Categorize_AddNew"),
						),
					),
				),
				l.createElement(
					u.wi,
					null,
					l.createElement(u.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
}
(0, n.Cg)([c.oI], y.prototype, "HandleSubmit", null);
(0, n.Cg)([c.oI], y.prototype, "CreateNew", null);
let S = class extends l.Component {
	render() {
		let e = i.xm.FriendStore.FriendGroupStore.user_groups.map((e) =>
			l.createElement(w, {
				friend: this.props.friend,
				group: e,
				key: e.unique_id,
				mapChecks: this.props.mapChecks,
			}),
		);
		return l.createElement(
			l.Fragment,
			null,
			l.createElement(
				u.JU,
				null,
				(0, m.we)("#FriendGroup_Categorize_Categories"),
			),
			l.createElement(
				"div",
				{
					className: "FriendCategoryCheckboxes_List",
				},
				e,
			),
		);
	}
};
S = (0, n.Cg)([s.PA], S);
let w = class extends l.Component {
	OnToggle(e) {
		if (e != this.props.group.HasMember(this.props.friend.accountid)) {
			this.props.mapChecks.set(this.props.group.unique_id, e);
		} else {
			this.props.mapChecks.delete(this.props.group.unique_id);
		}
	}
	OnContextMenu(e) {
		iS((0, a.CO)(e), this.props.group, e);
	}
	render() {
		let e;
		let t = this.props.group;
		let r = this.props.friend;
		e = this.props.mapChecks.has(t.unique_id)
			? this.props.mapChecks.get(t.unique_id)
			: t.HasMember(r.accountid);
		return l.createElement(
			"div",
			{
				onContextMenu: this.OnContextMenu,
			},
			l.createElement(u.Yh, {
				label: t.name,
				checked: e,
				onChange: this.OnToggle,
			}),
		);
	}
};
(0, n.Cg)([c.oI], w.prototype, "OnToggle", null);
(0, n.Cg)([c.oI], w.prototype, "OnContextMenu", null);
w = (0, n.Cg)([s.PA], w);
var B = require(/*webcrack:missing*/ "./31084.js");
var v = require(/*webcrack:missing*/ "./88750.js");
var I = require("./96127.js");
var E = require("./8653.js");
var M = require("./3756.js");
var T = require("./44234.js");
var R = require("./59704.js");
var k = require(/*webcrack:missing*/ "./28987.js");
var D = require("./78060.js");
var N = require(/*webcrack:missing*/ "./50376.js");
var F = require("./95377.js");
var G = require("./18644.js");
var O = require(/*webcrack:missing*/ "./83957.js");
var P = O;
let L = class extends l.Component {
	constructor(e) {
		super(e);
		let t = i.xm.FriendStore.self;
		this.state = {
			strCurrentNameEntry: t.primary_display_name,
			strError: "",
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strCurrentNameEntry: e.currentTarget.value,
			strError: "",
		});
	}
	HandleSubmit(e) {
		this.SetPersonaName(this.state.strCurrentNameEntry);
	}
	DisplayError(e) {
		this.setState({
			strError: e,
		});
	}
	SetPersonaName(e) {
		this.setState({
			strError: "",
		});
		if (T.TS.IN_CLIENT && SteamClient.WebChat.SetPersonaName != null) {
			SteamClient.WebChat.SetPersonaName(this.state.strCurrentNameEntry).then(
				(e) => {
					if (this.props.eResultCallback) {
						this.props.eResultCallback(e.eResult);
					}
					if (e.eResult === 22) {
						if (this.props.closeModal) {
							this.props.closeModal();
						}
					} else if (e.strMessageToken) {
						this.DisplayError((0, m.we)(e.strMessageToken));
					} else if (this.props.closeModal) {
						this.props.closeModal();
					}
				},
			);
		} else {
			let t = new FormData();
			t.append("sessionid", T.TS.SESSIONID);
			t.append("persona", e);
			let r = i.xm.FriendStore.self;
			let n =
				T.TS.CHAT_BASE_URL + "profiles/" + r.steamid64 + "/ajaxsetpersonaname/";
			P.post(n, t)
				.then((e) => {
					let t = e.data;
					if (t.success) {
						if (this.props.closeModal) {
							this.props.closeModal();
						}
					} else {
						let e = t.message.replace("<br />", "");
						this.DisplayError(e);
					}
				})
				.catch((e) => {
					this.DisplayError((0, m.we)("#Friends_NameChangeFailed_Info"));
				});
		}
	}
	render() {
		let e = i.xm.FriendStore.self;
		let t = "friend changePersonaName";
		if (e.persona.is_ingame) {
			t += " ingame";
		} else if (e.persona.is_online) {
			t += " online";
		}
		let r = false;
		if (this.state.strError) {
			r = true;
		}
		return l.createElement(
			o.x_,
			{
				className: "Dialog_ChangePersonaName",
				onEscKeypress: this.props.closeModal,
			},
			l.createElement(
				u.U9,
				{
					classNameContent: "ChangePersonaNameDialog",
					onSubmit: this.HandleSubmit,
				},
				l.createElement(u.Y9, null, (0, m.we)("#ChangePersona_Title")),
				l.createElement(
					u.nB,
					null,
					l.createElement(u.a3, null, (0, m.we)("#ChangePersona_Description")),
					l.createElement(
						u.a3,
						null,
						l.createElement(
							"div",
							{
								className: t,
							},
							l.createElement("img", {
								className: "avatarMedium",
								src: e.persona.avatar_url_full,
							}),
							l.createElement(
								"div",
								{
									className: "labelHolder",
								},
								r &&
									l.createElement(
										"div",
										{
											className: "error",
										},
										this.state.strError,
									),
								l.createElement(
									"div",
									null,
									l.createElement(
										"div",
										null,
										(0, m.we)("#ChangePersona_Change"),
									),
									l.createElement(
										"div",
										{
											className: "mediumName",
										},
										l.createElement(u.pd, {
											placeholder: (0, m.we)("#ChangePersona_PlaceHolder"),
											className: "changePersonaInput",
											value: this.state.strCurrentNameEntry,
											onChange: this.HandleTextEntry,
											autoFocus: true,
										}),
									),
								),
							),
						),
					),
				),
				l.createElement(
					u.wi,
					null,
					l.createElement(u.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
};
(0, n.Cg)([c.oI], L.prototype, "HandleTextEntry", null);
(0, n.Cg)([c.oI], L.prototype, "HandleSubmit", null);
L = (0, n.Cg)([s.PA], L);
var z = require("./92564.js");
var x = require("./4563.js");
var U = require("./88724.js");
var W = require("./17231.js");
let V = class extends l.Component {
	constructor(e) {
		super(e);
		this.state = this.ComputeStateFromNotificationSettings(
			this.props.player.notification_settings,
		);
	}
	ConvertENotificationSettingToBoolean(e) {
		return e == 1;
	}
	ComputeStateFromNotificationSettings(e) {
		let t;
		let r = false;
		let n = false;
		for (const t in e) {
			if (e[t] != 0) {
				n = true;
				break;
			}
		}
		if (n) {
			t = x.u();
			t.bNotifications_ShowIngame = this.ConvertENotificationSettingToBoolean(
				e.Notifications_ShowInGame,
			);
			t.bNotifications_ShowMessage = this.ConvertENotificationSettingToBoolean(
				e.Notifications_ShowMessage,
			);
			t.bNotifications_ShowOnline = this.ConvertENotificationSettingToBoolean(
				e.Notifications_ShowOnline,
			);
			t.bSounds_PlayIngame = this.ConvertENotificationSettingToBoolean(
				e.Sounds_PlayInGame,
			);
			t.bSounds_PlayMessage = this.ConvertENotificationSettingToBoolean(
				e.Sounds_PlayMessage,
			);
			t.bSounds_PlayOnline = this.ConvertENotificationSettingToBoolean(
				e.Sounds_PlayOnline,
			);
		} else {
			r = true;
			t = i.xm.SettingsStore.FriendsSettings;
		}
		return {
			settings: t,
			bUseDefaults: r,
		};
	}
	ConvertBooleanToENotificationSetting(e) {
		if (e) {
			return 1;
		} else {
			return 2;
		}
	}
	FriendSettingsToNotificationSettings(e) {
		let t = new I.YS();
		t.Notifications_SendMobile =
			this.props.player.notification_settings.Notifications_SendMobile;
		if (!this.state.bUseDefaults) {
			t.Notifications_ShowInGame = this.ConvertBooleanToENotificationSetting(
				this.state.settings.bNotifications_ShowIngame,
			);
			t.Notifications_ShowMessage = this.ConvertBooleanToENotificationSetting(
				this.state.settings.bNotifications_ShowMessage,
			);
			t.Notifications_ShowOnline = this.ConvertBooleanToENotificationSetting(
				this.state.settings.bNotifications_ShowOnline,
			);
			t.Sounds_PlayInGame = this.ConvertBooleanToENotificationSetting(
				this.state.settings.bSounds_PlayIngame,
			);
			t.Sounds_PlayMessage = this.ConvertBooleanToENotificationSetting(
				this.state.settings.bSounds_PlayMessage,
			);
			t.Sounds_PlayOnline = this.ConvertBooleanToENotificationSetting(
				this.state.settings.bSounds_PlayOnline,
			);
		}
		return t;
	}
	HandleSubmit() {
		i.xm.FriendStore.SetPlayerNotificationSettings(
			this.props.player,
			this.FriendSettingsToNotificationSettings(this.state.settings),
		).then((e) => {
			if (e == 1 && this.props.closeModal) {
				this.props.closeModal();
			}
		});
	}
	componentDidUpdate(e) {
		if (e.player !== this.props.player) {
			this.setState(
				this.ComputeStateFromNotificationSettings(
					this.props.player.notification_settings,
				),
			);
		}
	}
	OnSettingToggled(e, t) {
		this.setState({
			settings: {
				...this.state.settings,
				[e]: t,
			},
		});
	}
	FriendsSettingsCheckbox(e) {
		return l.createElement(u.Yh, {
			key: e.strName,
			disabled: this.state.bUseDefaults,
			onChange: (t) => {
				this.OnSettingToggled(e.strName, t);
			},
			checked: !!this.state.settings[e.strName],
		});
	}
	NotificationRow(e) {
		let t = this.FriendsSettingsCheckbox;
		return l.createElement(
			"div",
			null,
			l.createElement(
				"div",
				{
					className: "FriendsSettingsNotificationRow",
				},
				l.createElement(
					"div",
					{
						className: "FriendsSettingsNotificationRow_Label",
					},
					e.strLabel,
				),
				l.createElement(
					"div",
					{
						className: "FriendsSettingsNotificationRow_Checkbox",
					},
					l.createElement(t, {
						strName: e.strNameShow,
					}),
				),
				l.createElement(
					"div",
					{
						className: "FriendsSettingsNotificationRow_Checkbox",
					},
					l.createElement(t, {
						strName: e.strNameSound,
					}),
				),
			),
		);
	}
	OnDefaultToggled(e) {
		if (e) {
			this.setState({
				settings: i.xm.SettingsStore.FriendsSettings,
				bUseDefaults: true,
			});
		} else {
			this.setState({
				bUseDefaults: false,
			});
		}
	}
	render() {
		let e = this.NotificationRow;
		let t = this.state.bUseDefaults;
		let r = "friend editFriendNotifications";
		r += (0, U.rO)(this.props.player.persona);
		return l.createElement(
			o.x_,
			{
				className: "Dialog_FriendNotifications",
				onEscKeypress: this.props.closeModal,
			},
			l.createElement(
				u.U9,
				{
					classNameContent: "FriendNotificationsDialog",
					onSubmit: this.HandleSubmit,
				},
				l.createElement(
					u.Y9,
					null,
					(0, m.we)("#Friend_Menu_NotificationsTitle"),
				),
				l.createElement(
					u.nB,
					{
						className: t ? "useDefaults" : "",
					},
					l.createElement(
						u.a3,
						null,
						(0, m.we)(
							"#FriendNotifications_Instructions",
							this.props.player.display_name,
						),
					),
					l.createElement(
						u.a3,
						null,
						l.createElement(
							"div",
							{
								className: r,
							},
							l.createElement(W.i8, {
								persona: this.props.player.persona,
								size: "Large",
							}),
							l.createElement(
								"div",
								{
									className: "labelHolder",
								},
								this.props.player.primary_display_name,
								!this.props.player.is_display_name_nickname &&
									this.props.player.has_secondary_display_name &&
									l.createElement(
										"span",
										{
											className: "playerNickname",
										},
										" (",
										this.props.player.secondary_display_name,
										")",
									),
								this.props.player.is_display_name_nickname &&
									l.createElement(
										"span",
										{
											className: "playerNicknameBracket",
											title: (0, m.we)("#isNickname"),
										},
										"*",
									),
							),
						),
					),
					l.createElement(u.Yh, {
						className: "useDefaultsCheckBox",
						label: (0, m.we)("#FriendNotifications_UseDefaults"),
						onChange: (e) => {
							this.OnDefaultToggled(e);
						},
						checked: this.state.bUseDefaults,
					}),
					l.createElement(
						"div",
						{
							className: "SettingsGroup",
						},
						l.createElement(
							"div",
							{
								className:
									"FriendsSettingsNotificationRow FriendsSettingsNotificationRow_Header",
							},
							l.createElement(
								"div",
								{
									className: "FriendsSettingsNotificationRow_Label",
								},
								(0, m.we)("#FriendSettings_Notification_Table_Label"),
							),
							l.createElement(
								"div",
								{
									className: "FriendsSettingsNotificationRow_Checkbox",
								},
								(0, m.we)("#FriendSettings_Notification_Table_Show"),
							),
							l.createElement(
								"div",
								{
									className: "FriendsSettingsNotificationRow_Checkbox",
								},
								(0, m.we)("#FriendSettings_Notification_Table_Play"),
							),
						),
						l.createElement(e, {
							strLabel: (0, m.we)(
								"#FriendSettings_FriendNotification_FriendJoins",
							),
							strNameShow: "bNotifications_ShowIngame",
							strNameSound: "bSounds_PlayIngame",
						}),
						l.createElement(e, {
							strLabel: (0, m.we)(
								"#FriendSettings_FriendNotification_FriendOnline",
							),
							strNameShow: "bNotifications_ShowOnline",
							strNameSound: "bSounds_PlayOnline",
						}),
						l.createElement(e, {
							strLabel: (0, m.we)("#FriendSettings_Notification_ChatMessage"),
							strNameShow: "bNotifications_ShowMessage",
							strNameSound: "bSounds_PlayMessage",
						}),
					),
				),
				l.createElement(
					u.wi,
					null,
					l.createElement(u.CB, {
						onCancel: this.props.closeModal,
					}),
				),
			),
		);
	}
};
(0, n.Cg)([c.oI], V.prototype, "HandleSubmit", null);
(0, n.Cg)([c.oI], V.prototype, "OnSettingToggled", null);
(0, n.Cg)([c.oI], V.prototype, "FriendsSettingsCheckbox", null);
(0, n.Cg)([c.oI], V.prototype, "NotificationRow", null);
(0, n.Cg)([c.oI], V.prototype, "OnDefaultToggled", null);
V = (0, n.Cg)([s.PA], V);
var H = require("./43397.js");
var j = require(/*webcrack:missing*/ "./45328.js");
var q = require("./76319.js");
var Q = require("./48301.js");
var Z = require("./10606.js");
var Y = require(/*webcrack:missing*/ "./26853.js");
var K = require(/*webcrack:missing*/ "./736.js");
var X = require("./82594.js");
export function tj(e, t, r, n) {
	return (0, B.lX)(
		l.createElement(ne, {
			browserContext: e,
			context: t,
			friend: r,
			ownerWindow: (0, h.uX)(n),
		}),
		n,
		{
			bForcePopup: T.TS.IN_STEAMUI,
		},
	);
}
let $ = (0, s.PA)(function (e) {
	let t = e.friend;
	let r = [];
	let n = t.persona_name_history;
	let i = t.persona_name_history_loaded;
	if (i && n.length > 0) {
		let e = 0;
		for (let t of n) {
			r.push(
				l.createElement(
					"div",
					{
						className: "recentName",
						key: "name_history_" + e,
					},
					t,
				),
			);
			e++;
		}
	} else if (i) {
		r.push(
			l.createElement(
				"div",
				{
					className: "recentName",
					key: "name_history_none",
				},
				(0, m.we)("#Friend_Menu_RecentAliases_None"),
			),
		);
	} else {
		r.push(
			l.createElement(
				"div",
				{
					className: "recentName",
					key: "name_history_loading",
				},
				(0, m.we)("#Friend_Menu_RecentAliases_Loading"),
			),
		);
	}
	return l.createElement(
		l.Fragment,
		null,
		l.createElement(
			v.Vs,
			{
				label: (0, m.we)("#Friend_Menu_RecentAliases"),
			},
			r,
		),
	);
});
let ee = class extends l.Component {
	OnToggle(e) {
		this.props.group.ToggleMemberRoleState(this.props.friend.accountid, e);
	}
	render() {
		let e = this.props.group.DefaultRoleID();
		let t = this.props.group.GetMemberRoleIDs(this.props.friend.accountid);
		let r = this.props.group.BIsAccountIDOwner(this.props.friend.accountid);
		let n = this.props.group.BCanEditRoles();
		let i = this.props.group
			.GetRoles()
			.slice()
			.sort((t, r) =>
				t.role_id == e
					? 1
					: r.role_id == e
						? -1
						: parseInt(t.role_id) - parseInt(r.role_id),
			)
			.map((r) => {
				let i = t.findIndex((e) => e == r.role_id) != -1;
				if (!i && !n) {
					return null;
				}
				let a = r.name;
				let s = this.props.group.BCanIAssignRole(r.role_id);
				if (r.role_id == e) {
					a = (0, m.we)("#ChatRoomRole_Member");
				} else if (a.startsWith("#ChatRoomRole_")) {
					a = (0, m.we)(a);
				}
				return l.createElement(ae, {
					key: r.role_id,
					friend: this.props.friend,
					group: this.props.group,
					roleName: a,
					roleID: r.role_id,
					bHasRole: i,
					bEditable: s,
				});
			});
		let a =
			n && !r
				? (0, m.we)("#Friend_Menu_EditRoles")
				: (0, m.we)("#Friend_Menu_ViewRoles");
		return l.createElement(
			l.Fragment,
			null,
			l.createElement(
				v.Vs,
				{
					label: a,
				},
				r
					? l.createElement(
							v.kt,
							{
								className: "FriendMenuRoleCheckbox disabled",
								key: "role",
								onSelected: () => {},
								bInteractableItem: true,
							},
							l.createElement(N.OeC, null),
							(0, m.we)("#ChatRoomRole_Owner"),
						)
					: i,
			),
		);
	}
};
export function Jw(e, t, r, n) {
	let i = (0, I.uQ)(t);
	if (t != 1) {
		if (t == 24) {
			let t = l.createElement(
				H.uU,
				{
					style: {
						color: "white",
					},
					href: T.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount",
				},
				(0, m.we)("#Friend_InviteError_VisitSteamSupport"),
			);
			(0, D.Ic)(
				e,
				(0, m.we)("#Friend_Menu_AddToFriendsList"),
				(0, m.we)("#Friend_Menu_AddToFriendsList"),
				(0, m.we)("#Button_OK"),
				(0, m.PP)("#Friend_InviteError_LimitedUserLink", t),
			);
		} else {
			(0, D.Ic)(e, (0, m.we)("#Friend_Menu_AddToFriendsList"), (0, m.we)(i, n));
		}
	} else {
		(0, D.Ic)(
			e,
			(0, m.we)("#Friend_Menu_AddToFriendsList"),
			(0, m.we)("#Friend_InviteError", n),
		);
	}
}
export function Hf(e, t) {
	const r = "steam://open/library/shared-apps/" + JSON.stringify(e);
	SteamClient.WebChat.OpenURLInClient(r, t.m_unPID, false);
}
(0, n.Cg)([c.oI], ee.prototype, "OnToggle", null);
ee = (0, n.Cg)([s.PA], ee);
let ne = class extends l.PureComponent {
	static contextType = T.QO;
	state = {
		bCanCreateRemotePlayInvite: false,
		strConnectPrivate: "",
	};
	async componentDidMount() {
		const e = await i.xm.RemotePlayStore.BCanCreateInviteForGame(
			i.xm.FriendStore.self.persona.m_gameid,
			false,
		);
		const t = i.xm.FriendStore.self.persona.m_unGamePlayedAppID;
		let r = "";
		if (T.TS.IN_CLIENT && t && (0, K.Dp)("WebChat.GetPrivateConnectString")) {
			r = await SteamClient.WebChat.GetPrivateConnectString(t);
		}
		let n = {
			bCanCreateRemotePlayInvite: e,
			strConnectPrivate: r,
		};
		if (
			n.bCanCreateRemotePlayInvite != this.state.bCanCreateRemotePlayInvite ||
			n.strConnectPrivate != this.state.strConnectPrivate
		) {
			this.setState(n);
		}
	}
	ShowFriendProfile(e) {
		let t = this.props.friend.GetCommunityProfileURL();
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	ShowFriendFiltereredLibrary(e) {
		const t = [this.props.friend.accountid];
		(0, q.L)("FindGamesToPlayWithFriends/FriendsMenu");
		e.stopPropagation();
		Hf(t, (0, a.CO)(e));
	}
	async InviteFriend() {
		let { eResult: e, eFriendRelationship: t } =
			await i.xm.FriendStore.SendFriendInvite(this.props.friend);
		if (t == 4) {
			(0, D.Ic)(
				this.props.ownerWindow,
				(0, m.we)("#Friend_Menu_AddToFriendsList"),
				(0, m.we)("#Friend_InviteSent"),
			);
		} else if (t == 3) {
			(0, D.Ic)(
				this.props.ownerWindow,
				(0, m.we)("#Friend_Menu_AddToFriendsList"),
				(0, m.we)("#Friend_MutualInviteSent", this.props.friend.display_name),
			);
		} else {
			Jw(this.props.ownerWindow, e, 0, this.props.friend.display_name);
		}
	}
	async AcceptIncomingInvite() {
		let { eResult: e, eFriendRelationship: t } =
			await i.xm.FriendStore.SendFriendInvite(this.props.friend);
		if (t == 3) {
			(0, D.Ic)(
				this.props.ownerWindow,
				(0, m.we)("#Friend_Menu_AddToFriendsList"),
				(0, m.we)("#Friend_MutualInviteSent", this.props.friend.display_name),
			);
		} else {
			Jw(this.props.ownerWindow, e, 0, this.props.friend.display_name);
		}
	}
	IgnoreIncomingInvite() {
		i.xm.FriendStore.RemoveFriend(this.props.friend).then((e) => {
			if (e == 1) {
				(0, D.Ic)(
					this.props.ownerWindow,
					(0, m.we)("#Friend_Menu_IgnoreIncomingInvite"),
					(0, m.we)(
						"#Friend_IgnoreIncomingInvite_Success",
						this.props.friend.display_name,
					),
				);
			} else {
				(0, D.Ic)(
					this.props.ownerWindow,
					(0, m.we)("#Friend_Menu_IgnoreIncomingInvite"),
					(0, m.we)(
						"#Friend_IgnoreIncomingInvite_Error",
						this.props.friend.display_name,
					),
				);
			}
		});
	}
	RemoveFriend() {
		let e = this.props.friend.efriendrelationship == 4;
		let t = (0, m.we)(
			e
				? "#Friend_Menu_CancelInvitation"
				: "#Friend_Menu_RemoveFromFriendsList",
		);
		let r = (0, m.we)(
			e
				? "#Friend_CancelInvitation_Confirm"
				: "#Friend_RemoveFromFriendsList_Confirm",
			this.props.friend.display_name,
		);
		let n = (0, m.we)(
			e ? "#Button_Confirm" : "#Friend_Menu_RemoveFromFriendsList",
		);
		let a = (0, m.we)(
			e
				? "#Friend_CancelInvitation_Error"
				: "#Friend_RemoveFromFriendsList_Error",
		);
		(0, D.Ci)(
			this.props.ownerWindow,
			t,
			r,
			n,
			(0, m.we)("#Button_Cancel"),
			true,
		)
			.then(() => {
				i.xm.FriendStore.RemoveFriend(this.props.friend).then((e) => {
					if (e == 3 || e == 6) {
						(0, D.Ic)(this.props.ownerWindow, t, a);
					}
				});
			})
			.catch(() => {});
	}
	BlockFriend() {
		(0, D.Ci)(
			this.props.ownerWindow,
			(0, m.we)("#Friend_Menu_BlockAllCommunication"),
			(0, m.we)("#Friend_Block_Confirm", this.props.friend.display_name),
			(0, m.we)("#Friend_Menu_BlockAllCommunication"),
		)
			.then(() => {
				i.xm.FriendStore.BlockPlayer(this.props.friend);
			})
			.catch(() => {});
	}
	UnblockFriend() {
		(0, D.Ci)(
			this.props.ownerWindow,
			(0, m.we)("#Friend_Menu_UnblockAllCommunication"),
			(0, m.we)("#Friend_Unblock_Confirm", this.props.friend.display_name),
			(0, m.we)("#Friend_Menu_UnblockAllCommunication"),
		)
			.then(() => {
				i.xm.FriendStore.BlockPlayer(this.props.friend, true);
			})
			.catch(() => {});
	}
	InviteToGame(e, t) {
		i.xm.FriendStore.InviteToGame(this.props.friend, e, t);
	}
	InviteToLobby(e, t) {
		i.xm.FriendStore.InviteToLobby(this.props.friend, e, t);
	}
	InviteToWatch() {
		i.xm.FriendStore.InviteToWatch(this.props.friend);
	}
	InviteToRemotePlay() {
		let e = this.props.friend;
		if (i.xm.FriendStore.self !== e) {
			i.xm.RemotePlayStore.CreateInviteAndSession(
				e.accountid,
				i.xm.FriendStore.self.persona.m_gameid,
				this.props.browserContext,
			);
		}
	}
	CancelRemotePlay() {
		let e = this.props.friend;
		i.xm.RemotePlayStore.CancelInviteAndSession(e.accountid);
	}
	CancelAllRemotePlay() {
		i.xm.RemotePlayStore.CancelAllInvitesAndSessions();
	}
	InviteToVoice(e, t) {
		(0, z.nn)(
			{
				invitee: this.props.friend,
				invitedto: e,
			},
			null,
			this.props.ownerWindow,
		);
	}
	render() {
		let e;
		let t;
		let r = this.props;
		let n = r.context || {};
		let s = [];
		let c = [];
		let u = r.friend;
		let A = i.xm.FriendStore.FavoritesStore;
		let p = i.xm.FriendStore.self == u;
		let g = n.chatContext == "favorites";
		let h = n.group;
		if (!h && n.chat instanceof M.d) {
			h = n.chat.GetGroup();
		}
		let C = false;
		let _ = u.is_friend;
		let b = u.efriendrelationship == 2;
		let S = u.efriendrelationship == 4;
		let w = b || u.efriendrelationship == 4;
		let B = i.xm.FriendStore.self.persona.m_unGamePlayedAppID;
		u.persona.m_unGamePlayedAppID;
		if (n.chat) {
			if (n.chat instanceof E.s) {
				e = n.chat;
				if (e.BVoiceActive()) {
					C = true;
				}
			} else if (n.chat instanceof M.d) {
				t = n.chat;
				if (t.BVoiceActive()) {
					C = true;
				}
			}
		}
		if (!_ && !b && !p) {
			s.push(
				l.createElement(
					"div",
					{
						className: "contextMenuLabel contextMenuNotAFriend",
						key: "header",
					},
					(0, m.we)("#Friend_Menu_NotAFriendLabel"),
				),
			);
		}
		if (!!C && !p && !this.context?.IN_GAMEPADUI) {
			s.push(
				l.createElement(ie, {
					friend: this.props.friend,
				}),
			);
		}
		if (n.tab) {
			s.push(
				l.createElement(
					v.kt,
					{
						key: "closetab",
						onSelected: () => {
							i.xm.UIStore.CloseTab(r.browserContext, n.tab);
						},
					},
					(0, m.we)(
						this.context?.IN_GAMEPADUI
							? "#Chat_CloseTabAction_SteamDeck"
							: "#Chat_CloseTabAction",
					),
				),
			);
		}
		if (!e && !n.tab && !b && !S && !p && !u.is_blocked) {
			s.push(
				l.createElement(
					v.kt,
					{
						key: "chat",
						className: _ ? "" : "SendMessageContextNotFriends",
						onSelected: () => {
							r.friend.OpenChatDialog(r.browserContext);
						},
					},
					(0, m.we)("#Friend_Menu_SendMessage"),
				),
			);
		}
		let I = i.xm.ChatStore.BIsEligibleForVoiceChat(u, e);
		let R = i.xm.ChatStore.GetActiveVoiceChat();
		if (R && R instanceof E.s && R.accountid_partner == u.accountid) {
			s.push(
				l.createElement(
					v.kt,
					{
						key: "voicechat",
						onSelected: () => {
							R.ToggleVoiceChat();
						},
					},
					(0, m.we)("#Friend_Menu_StopVoiceChat"),
				),
			);
		} else if (I) {
			if (R instanceof M.d) {
				if (!R.GetMember(u.accountid)) {
					s.push(
						l.createElement(
							v.kt,
							{
								key: "voicechat",
								className: "contextVoiceInvite",
								onSelected: () => {
									this.InviteToVoice(R, n);
								},
							},
							l.createElement(N.mrd, null),
							(0, m.we)("#Chat_Actions_InviteFriend_VoiceChat"),
						),
					);
				}
			} else {
				s.push(
					l.createElement(
						v.kt,
						{
							key: "voicechat",
							onSelected: () => {
								i.xm.UIStore.ShowFriendChatDialogAndStartVoice(
									r.browserContext,
									u.accountid,
								);
							},
						},
						(0, m.we)("#Friend_Menu_StartVoiceChat"),
					),
				);
			}
		}
		if (s.length > 0) {
			s.push(
				l.createElement(v.K5, {
					key: "separator",
				}),
			);
		}
		s.push(
			l.createElement(
				v.kt,
				{
					key: "viewprofile",
					onSelected: this.ShowFriendProfile,
				},
				(0, m.we)("#Friend_Menu_ViewProfile"),
			),
		);
		if (
			T.TS.IN_CLIENT &&
			i.xm.SettingsStore.BClientHasFeatureOrOnWeb("FriendsFilter") &&
			!p
		) {
			s.push(
				l.createElement(
					v.kt,
					{
						key: "findgamestoplay",
						onSelected: this.ShowFriendFiltereredLibrary,
					},
					(0, m.we)("#Friend_Menu_GamesToPlayTogether"),
				),
			);
		}
		if (h) {
			s.push(
				l.createElement(le, {
					key: "moderationoptions",
					friend: u,
					bIsSelf: p,
					group: h,
					ownerWindow: r.ownerWindow,
				}),
			);
		}
		let D = [];
		const F = !!u.persona.m_unGamePlayedAppID && !p;
		if (!p) {
			if (_) {
				c.push(
					l.createElement(
						v.kt,
						{
							key: "setnickname",
							onSelected: () => {
								d(r.browserContext, r.friend, r.ownerWindow);
							},
						},
						(0, m.we)(
							r.friend.has_nickname
								? "#Friend_Menu_ChangeNickname"
								: "#Friend_Menu_AddNickname",
						),
					),
				);
				if (
					A.BIsFavorited({
						friend: u,
					})
				) {
					(g ? s : c).push(
						l.createElement(
							v.kt,
							{
								key: "quickaccess",
								onSelected: Ae.bind(null, u),
							},
							(0, m.we)("#Friend_Menu_RemoveFromQuickAccess"),
						),
					);
				} else {
					c.push(
						l.createElement(
							v.kt,
							{
								key: "quickaccess",
								onSelected: de.bind(null, u),
							},
							(0, m.we)("#Friend_Menu_AddToQuickAccess"),
						),
					);
				}
				c.push(
					l.createElement(
						v.kt,
						{
							key: "managecategories",
							onSelected: () => {
								(function (e, t, r) {
									if (
										i.xm.FriendStore.FriendGroupStore.user_groups.length == 0
									) {
										f(e, t, r);
									} else {
										(0, o.HT)(
											l.createElement(y, {
												browserContext: e,
												friend: r,
											}),
											t,
											"AssignFriendCategoryDialog",
											{
												strTitle: (0, m.we)("#FriendGroup_Menu_CreateGroup"),
												popupWidth: 664,
												popupHeight: 580,
											},
											(0, a.h8)(t),
										);
									}
								})(r.browserContext, r.ownerWindow, r.friend);
							},
						},
						(0, m.we)("#FriendGroup_Menu_Categorize"),
					),
				);
				c.push(
					l.createElement(
						v.kt,
						{
							key: "notifications",
							onSelected: () => {
								r.browserContext;
								e = r.friend;
								t = r.ownerWindow;
								(0, o.HT)(
									l.createElement(V, {
										player: e,
									}),
									t,
									"FriendNotificationsDialog",
									{
										strTitle: (0, m.we)("#Friend_Menu_Notifications"),
										popupWidth: 640,
										popupHeight: 520,
									},
									(0, a.h8)(t),
								);
								return;
								var e;
								var t;
							},
						},
						(0, m.we)("#Friend_Menu_Notifications"),
					),
				);
				if (!g) {
					c.push(
						l.createElement(
							v.kt,
							{
								key: "removefriend",
								onSelected: this.RemoveFriend,
							},
							(0, m.we)("#Friend_Menu_RemoveFromFriendsList"),
						),
					);
				}
				c.push(
					l.createElement($, {
						key: "aliases",
						friend: u,
					}),
				);
				if (
					i.xm.FriendStore.self.persona.is_ingame &&
					i.xm.BroadcastStore.is_broadcast_capable
				) {
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "invitetowatch",
								onSelected: () => {
									this.InviteToWatch();
								},
							},
							(0, m.we)("#Friend_Menu_InviteToWatch"),
						),
					);
				}
				if (B != 0 && i.xm.FriendStore.self.persona.m_game_lobby_id != "0") {
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "lobbyinvite",
								onSelected: () => {
									this.InviteToLobby(
										B,
										i.xm.FriendStore.self.persona.m_game_lobby_id,
									);
								},
							},
							(0, m.we)("#Friend_Menu_InviteToLobby"),
						),
					);
				} else if (this.state.strConnectPrivate?.length != 0) {
					const e = this.state.strConnectPrivate;
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "gameinvite",
								onSelected: () => {
									this.InviteToGame(B, e);
								},
							},
							(0, m.we)("#Friend_Menu_InviteToGame"),
						),
					);
				} else if (i.xm.FriendStore.self.persona.connect_string) {
					const e = i.xm.FriendStore.self.persona.connect_string;
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "gameinvite",
								onSelected: () => {
									this.InviteToGame(B, e);
								},
							},
							(0, m.we)("#Friend_Menu_InviteToGame"),
						),
					);
				}
				if (i.xm.RemotePlayStore.HasInviteAndSession(u.accountid)) {
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "cancelremoteplay",
								onSelected: () => {
									this.CancelRemotePlay();
								},
							},
							(0, m.we)("#Friend_Menu_CancelRemotePlay"),
						),
					);
				} else if (
					i.xm.RemotePlayStore.HasInviteAndSessionForGameIDOtherThan(String(B))
				) {
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "cancelallremoteplay",
								onSelected: () => {
									this.CancelAllRemotePlay();
								},
							},
							(0, m.we)("#Friend_Menu_CancelAllRemotePlay"),
						),
					);
				} else if (this.state.bCanCreateRemotePlayInvite) {
					D.push(
						l.createElement(
							v.kt,
							{
								className: "contextMenuGameOptions",
								key: "invitetoremoteplay",
								onSelected: () => {
									this.InviteToRemotePlay();
								},
							},
							(0, m.we)("#Friend_Menu_InviteToRemotePlay"),
						),
					);
				}
				if (T.TS.EREALM !== k.TU.k_ESteamRealmChina) {
					s.push(
						l.createElement(se, {
							key: "trading",
							friend: u,
						}),
					);
				}
			} else if (b) {
				s.push(
					l.createElement(
						v.kt,
						{
							key: "acceptincominginvite",
							onSelected: this.AcceptIncomingInvite,
						},
						(0, m.we)("#Friend_Menu_AcceptIncomingInvite"),
					),
				);
				s.push(
					l.createElement(
						v.kt,
						{
							key: "ignoreincominginvite",
							onSelected: this.IgnoreIncomingInvite,
						},
						(0, m.we)("#Friend_Menu_IgnoreIncomingInvite"),
					),
				);
				s.push(
					l.createElement($, {
						key: "aliases",
						friend: u,
					}),
				);
			} else if (S) {
				s.push(
					l.createElement(
						v.kt,
						{
							key: "remove",
							onSelected: this.RemoveFriend,
						},
						(0, m.we)("#Friend_Menu_CancelInvitation"),
					),
				);
			} else {
				s.push(
					l.createElement(
						v.kt,
						{
							key: "invite",
							onSelected: this.InviteFriend,
						},
						(0, m.we)("#Friend_Menu_AddToFriendsList"),
					),
				);
			}
			if (w) {
				s.push(
					l.createElement(
						v.kt,
						{
							key: "setnickname",
							onSelected: () => {
								d(r.browserContext, r.friend, r.ownerWindow);
							},
						},
						(0, m.we)(
							r.friend.has_nickname
								? "#Friend_Menu_ChangeNickname"
								: "#Friend_Menu_AddNickname",
						),
					),
				);
			}
			if (!g || !!u.is_blocked) {
				c.push(
					l.createElement(
						v.kt,
						{
							key: "block",
							onSelected: u.is_blocked ? this.UnblockFriend : this.BlockFriend,
						},
						(0, m.we)(
							u.is_blocked
								? "#Friend_Menu_UnblockAllCommunication"
								: "#Friend_Menu_BlockAllCommunication",
						),
					),
				);
			}
		}
		if (!s) {
			return null;
		}
		let G;
		let O;
		if (this.props.context && this.props.context.group) {
			G = this.props.context.group.GetMemberPartyBeacon(
				this.props.friend.accountid,
			);
		}
		if (D.length > 0 && (!F || u.persona.m_unGamePlayedAppID != B)) {
			let e;
			if (B == 0) {
				e = l.createElement(
					"div",
					{
						className: "contextMenuGameItem",
					},
					l.createElement(
						"div",
						{
							className: "contextMenuGameName",
						},
						i.xm.FriendStore.self.current_game_name,
					),
				);
			} else {
				let t = i.xm.AppInfoStore.GetAppInfo(B);
				e = l.createElement(
					"div",
					{
						className: "contextMenuGameItem",
					},
					l.createElement(
						"div",
						{
							className: "contextMenuGameIcon",
						},
						l.createElement("img", {
							className: "GameIcon",
							src: t.icon_url,
						}),
					),
					l.createElement(
						"div",
						{
							className: "contextMenuGameName",
						},
						t.name,
					),
				);
			}
			O = l.createElement(
				l.Fragment,
				{
					key: "mygame",
				},
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameTitle contextMenuUnselectable",
						onSelected: null,
						disabled: true,
					},
					l.createElement(
						"div",
						{
							className: "contextMenuGameTitleBlurCropContainer",
						},
						e,
					),
				),
				l.createElement(
					"div",
					{
						className: "contextMenuSectionContent",
					},
					D,
				),
			);
			D = [];
		}
		return l.createElement(
			v.tz,
			{
				className: "friendsContextMenu",
				label: u.display_name,
			},
			s,
			c.length == 1 && c,
			c.length > 1 &&
				l.createElement(
					v.Vs,
					{
						label: (0, m.we)("#Friend_Menu_Manage"),
					},
					c,
				),
			!!u.persona.m_broadcastAccountId &&
				!p &&
				l.createElement(ue, {
					friend: u,
					ownerWindow: r.ownerWindow,
					browserContext: r.browserContext,
				}),
			O,
			!!O && F && l.createElement(v.K5, null),
			F &&
				l.createElement(Rm, {
					unAppID: u.persona.m_unGamePlayedAppID,
					strGameName: u.current_game_name,
					ulGameID: u.persona.m_gameid,
					friend: u,
					partyBeacon: G,
					ownerWindow: r.ownerWindow,
					browserContext: r.browserContext,
					extraItems: D,
					localAppID: B,
				}),
		);
	}
};
(0, n.Cg)([c.oI], ne.prototype, "ShowFriendProfile", null);
(0, n.Cg)([c.oI], ne.prototype, "ShowFriendFiltereredLibrary", null);
(0, n.Cg)([c.oI], ne.prototype, "InviteFriend", null);
(0, n.Cg)([c.oI], ne.prototype, "AcceptIncomingInvite", null);
(0, n.Cg)([c.oI], ne.prototype, "IgnoreIncomingInvite", null);
(0, n.Cg)([c.oI], ne.prototype, "RemoveFriend", null);
(0, n.Cg)([c.oI], ne.prototype, "BlockFriend", null);
(0, n.Cg)([c.oI], ne.prototype, "UnblockFriend", null);
(0, n.Cg)([c.oI], ne.prototype, "InviteToGame", null);
(0, n.Cg)([c.oI], ne.prototype, "InviteToLobby", null);
(0, n.Cg)([c.oI], ne.prototype, "InviteToWatch", null);
(0, n.Cg)([c.oI], ne.prototype, "InviteToRemotePlay", null);
(0, n.Cg)([c.oI], ne.prototype, "CancelRemotePlay", null);
(0, n.Cg)([c.oI], ne.prototype, "CancelAllRemotePlay", null);
(0, n.Cg)([c.oI], ne.prototype, "InviteToVoice", null);
ne = (0, n.Cg)([s.PA], ne);
let ie = class extends l.Component {
	constructor(e) {
		super(e);
		let t = i.xm.VoiceStore.ConvertGainValueToSliderValue(
			i.xm.VoiceStore.GetPerUserGainLevel(this.props.friend.accountid),
			F.F$.k_MaxPerUserGainMultiplier,
		);
		this.state = {
			volumeNumber: t,
		};
	}
	OnFriendVolumeChanged(e) {
		i.xm.VoiceStore.SetPerUserGainLevel(
			this.props.friend.accountid,
			i.xm.VoiceStore.ConvertSliderToGainValue(
				e,
				F.F$.k_MaxPerUserGainMultiplier,
			),
		);
		this.setState({
			volumeNumber: e,
		});
	}
	OnMutingClick(e) {
		let t = i.xm.VoiceStore.GetPerUserMuting(this.props.friend.accountid);
		i.xm.VoiceStore.SetPerUserMuting(this.props.friend.accountid, !t);
		this.forceUpdate();
	}
	OnInlineVolumeClick(e) {
		this.forceUpdate();
	}
	render() {
		let e = this.state.volumeNumber;
		let t = "VolumeIcon";
		let r = i.xm.VoiceStore.GetPerUserMuting(this.props.friend.accountid);
		if (e > 65) {
			t += " HighestVolume";
		} else if (e > 45) {
			t += " HighVolume";
		} else if (e < 46 && e > 24) {
			t += " MedVolume";
		} else if (e < 25) {
			t += " LowVolume";
		}
		return l.createElement(
			v.kt,
			{
				key: "volume",
				onSelected: () => {},
				bInteractableItem: true,
			},
			l.createElement(
				"div",
				{
					className: "InlineVolume" + (r ? " Muted" : ""),
					onClick: this.OnInlineVolumeClick,
				},
				l.createElement(
					"button",
					{
						className: t,
						onClick: this.OnMutingClick,
					},
					l.createElement(N.fSs, null),
				),
				l.createElement(u.Kc, {
					min: 0,
					max: 100,
					label: "",
					value: e,
					onChange: this.OnFriendVolumeChanged,
				}),
				l.createElement(
					"div",
					{
						className: "volumePercentage",
					},
					e * 2,
					"%",
				),
			),
		);
	}
};
(0, n.Cg)([c.oI], ie.prototype, "OnFriendVolumeChanged", null);
(0, n.Cg)([c.oI], ie.prototype, "OnMutingClick", null);
(0, n.Cg)([c.oI], ie.prototype, "OnInlineVolumeClick", null);
ie = (0, n.Cg)([s.PA], ie);
let ae = class extends l.Component {
	OnChange(e) {
		this.props.group.SetMemberRoleState(
			this.props.friend.accountid,
			this.props.roleID,
			e,
		);
	}
	render() {
		return l.createElement(
			v.kt,
			{
				className:
					"FriendMenuRoleCheckbox" + (this.props.bEditable ? "" : " disabled"),
				key: "role",
				onSelected: () => {},
				bInteractableItem: true,
			},
			l.createElement(u.Yh, {
				label: this.props.roleName,
				checked: this.props.bHasRole,
				onChange: this.OnChange,
				disabled: !this.props.bEditable,
			}),
		);
	}
};
(0, n.Cg)([c.oI], ae.prototype, "OnChange", null);
ae = (0, n.Cg)([s.PA], ae);
class se extends l.Component {
	SendTradeOffer(e) {
		let t = "NewTradeOffer" + this.props.friend.accountid;
		let r = (0, h.uX)(e).open(
			i.xm.EconomyStore.GetDefaultTradeOfferURLForFriend(
				this.props.friend.accountid,
			),
			t,
			"height=1120,width=1028,resize=yes,scrollbars=yes",
		);
		if (r) {
			r.focus();
		}
	}
	render() {
		let e = this.props.friend;
		return l.createElement(
			v.Vs,
			{
				label: (0, m.we)("#FriendMenu_Trading"),
			},
			l.createElement(oe, {
				friend: e,
			}),
			l.createElement(
				v.kt,
				{
					onSelected: this.SendTradeOffer,
				},
				(0, m.we)("#FriendMenu_SendTradeOffer"),
			),
		);
	}
}
function oe(e) {
	return l.createElement(
		v.kt,
		{
			onSelected: (t) => {
				(0, R.EP)(t, e.friend.GetCommunityProfileURL() + "inventory/");
			},
		},
		(0, m.we)("#FriendMenu_ViewInventory"),
	);
}
(0, n.Cg)([c.oI], se.prototype, "SendTradeOffer", null);
class le extends l.Component {
	async BanFriend() {
		if (
			await (0, D.WQ)(
				this.props.ownerWindow,
				(0, m.we)("#Friend_Ban"),
				(0, m.we)("#Friend_Ban_Confirm", this.props.friend.display_name),
				(0, m.we)("#Friend_Ban_Button"),
				(0, m.we)("#Button_Cancel"),
				true,
			)
		) {
			this.props.group.SetUserBanState(this.props.friend.accountid, true);
		}
	}
	OnKickFriend() {
		let e = this.props.group;
		let t = _e;
		let r = this.props.ownerWindow;
		new Promise((e, n) => {
			let i = (0, D.dt)(
				r,
				(0, m.we)("#Friend_Kick", this.props.friend.display_name),
			);
			(0, o.HT)(
				l.createElement(fe, {
					OnOK: e,
					OnCancel: n,
					OnSet: (e) => {
						t = e;
					},
				}),
				r,
				"alertdialog",
				i,
				(0, a.h8)(r),
			);
		})
			.then(() =>
				e.KickUser(
					this.props.friend.accountid,
					Math.floor(Date.now() / 1000 + t),
				),
			)
			.catch(() => {});
	}
	render() {
		let e = [];
		let t = this.props.friend;
		let r = this.props.group;
		if (r.BHasMember(t.accountid)) {
			if (!this.props.bIsSelf && r.BCanKick()) {
				e.push(
					l.createElement(
						v.kt,
						{
							disabled: !r.BCanKickMember(t.accountid),
							key: "kick",
							onSelected: this.OnKickFriend,
						},
						(0, m.we)("#Friend_Menu_KickFromChatRoom"),
					),
				);
			}
			if (!this.props.bIsSelf && r.BCanBan()) {
				e.push(
					l.createElement(
						v.kt,
						{
							disabled: !r.BCanBanMember(t.accountid),
							key: "ban",
							onSelected: this.BanFriend,
						},
						(0, m.we)("#Friend_Menu_Ban"),
					),
				);
			}
			if (r) {
				e.push(
					l.createElement(ee, {
						key: "editroles",
						friend: t,
						group: r,
						bEditable: r.BCanEditRoles(),
					}),
				);
			}
		} else {
			e.push(
				l.createElement(
					v.kt,
					{
						disabled: true,
						key: "notmember",
						onSelected: null,
					},
					(0, m.we)("#Friend_Menu_HasLeftChat"),
				),
			);
		}
		return e;
	}
}
function ce(e) {
	const { appID: t } = e;
	const [r] = (0, X.t7)(t, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return l.createElement(
			"div",
			{
				className: "contextMenuGameHeader",
			},
			l.createElement("img", {
				className: "GameHeader",
				src: n,
			}),
		);
	} else {
		return l.createElement("div", {
			className: "contextMenuGameHeader",
		});
	}
}
(0, n.Cg)([c.oI], le.prototype, "BanFriend", null);
(0, n.Cg)([c.oI], le.prototype, "OnKickFriend", null);
export let Rm = class extends l.Component {
	static contextType = T.QO;
	constructor(e) {
		super(e);
		this.state = {
			bIsSubscribedToApp: undefined,
		};
		G.W.BIsSubscribedApp(this.props.unAppID).then((e) => {
			this.setState({
				bIsSubscribedToApp: e,
			});
		});
	}
	ShowStorePage(e) {
		let t = (0, j.Dn)(this.props.unAppID, "friendcontextmenu");
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	ShowCommunityHub(e) {
		let t = `${T.TS.COMMUNITY_BASE_URL}app/${this.props.unAppID}`;
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	LaunchGame(e) {
		let t = "steam://rungameid/" + (this.props.ulGameID || this.props.unAppID);
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	WatchGame(e) {
		i.xm.UIStore.SetFriendBroadcastVisible(this.props.friend.steamid64, true);
		this.props.friend.OpenChatDialog((0, a.CO)(e));
	}
	JoinGame(e) {
		const t = this.props.friend;
		if (
			!t.persona.has_joinable_game_flag ||
			(t.persona.connect_string && t.persona.connect_string.length != 0)
		) {
			const r = (0, Q.xE)(
				t.persona.GetAccountID(),
				t.persona.m_unGamePlayedAppID,
				t.persona.connect_string,
				null,
				t.persona.is_in_valid_lobby && t.persona.m_game_lobby_id,
			);
			(0, R.EP)(e, r);
		} else {
			let e = this.props.ownerWindow;
			(0, o.pg)(
				l.createElement(be, {
					friend: t,
					ownerWindow: e,
				}),
				e,
				{
					browserContext: this.props.browserContext,
				},
			);
		}
		e.stopPropagation();
	}
	ViewGameInfo(e) {
		if (
			T.TS.IN_CLIENT &&
			(0, K.Dp)("ServerBrowser.CreateFriendGameInfoDialog")
		) {
			const e = this.props.browserContext.m_unPID;
			SteamClient.ServerBrowser.CreateFriendGameInfoDialog(
				e,
				this.props.friend.steamid64,
			);
		} else {
			const t = `steam://viewfriendsgame/${this.props.friend.steamid64}`;
			(0, R.EP)(e, t);
		}
		e.stopPropagation();
	}
	ShowInSteam(e) {
		let t = `steam://store/${this.props.unAppID}`;
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	JoinPartyBeacon(e) {
		let t = `steam://joinparty/${this.props.unAppID}/${this.props.partyBeacon.beacon_id}`;
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	render() {
		if (!this.props.unAppID) {
			return null;
		}
		let e;
		let t = [];
		let r = this.props.friend;
		let n = i.xm.AppInfoStore.GetAppInfo(this.props.unAppID);
		if (!n.is_valid) {
			return null;
		}
		if (n.is_initialized) {
			if (this.props.bShowLargeHeader) {
				e = l.createElement(ce, {
					appID: this.props.unAppID,
				});
			} else {
				let t = l.createElement(
					"span",
					{
						className: "contextMenuGameName",
					},
					(0, m.we)(
						"#Friend_Menu_ViewGameStorePageGameName",
						this.props.strGameName || n.name,
					),
				);
				e = l.createElement(
					"div",
					{
						className: "contextMenuGameItem",
					},
					l.createElement(
						"div",
						{
							className: "contextMenuGameIcon",
						},
						l.createElement("img", {
							className: "GameIcon",
							src: n.icon_url,
						}),
					),
					t,
				);
			}
		}
		const a = this.props.localAppID == this.props.unAppID;
		if (this.state.bIsSubscribedToApp === undefined) {
			t.push(
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameOptions contextMenuPlayButton",
						key: "showinsteam",
						onSelected: this.ShowInSteam,
					},
					l.createElement(N.jGG, null),
					(0, m.we)("#Friend_Menu_ShowInSteam"),
				),
			);
		} else if (this.state.bIsSubscribedToApp) {
			if (this.props.partyBeacon) {
				t.push(
					l.createElement(
						v.kt,
						{
							className:
								"contextMenuGameOptions contextMenuPlayButton contextMenuPartyBeacon",
							key: "joinparty",
							onSelected: this.JoinPartyBeacon,
						},
						l.createElement(N.jGG, null),
						(0, m.we)("#Friend_Menu_JoinFriendPartyBeacon"),
					),
				);
			} else if (r && r.persona.is_in_joinable_game) {
				t.push(
					l.createElement(
						v.kt,
						{
							className: "contextMenuGameOptions contextMenuPlayButton",
							key: "joingame",
							onSelected: this.JoinGame,
						},
						l.createElement(N.jGG, null),
						(0, m.we)("#Friend_Menu_JoinFriendGame"),
					),
				);
			}
			if (!a) {
				t.push(
					l.createElement(
						v.kt,
						{
							className: "contextMenuGameOptions contextMenuPlayButton",
							key: "launchgame",
							onSelected: this.LaunchGame,
						},
						l.createElement(N.jGG, null),
						(0, m.we)("#Friend_Menu_LaunchFriendGame"),
					),
				);
			}
		}
		if (r) {
			t.push(
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameOptions",
						key: "watchgame",
						onSelected: this.WatchGame,
					},
					(0, m.we)("#Friend_Menu_WatchFriendGame"),
				),
			);
		}
		let s = r?.persona.has_server_ip ?? false;
		let o = r?.persona?.HasRichPresenceForViewGameInfo() ?? false;
		if (r && (s || o) && !this.context?.IN_GAMEPADUI) {
			t.push(
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameOptions",
						key: "viewgameinfo",
						onSelected: this.ViewGameInfo,
					},
					(0, m.we)("#Friend_Menu_ViewGameInfo"),
				),
			);
		}
		if (!a) {
			t.push(
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameOptions",
						key: "viewstorepage",
						onSelected: this.ShowStorePage,
					},
					(0, m.we)("#Friend_Menu_ViewGameStorePage"),
				),
			);
		}
		if (!this.context?.IN_GAMEPADUI) {
			t.push(
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameOptions",
						key: "viewcommunityhub",
						onSelected: this.ShowCommunityHub,
					},
					(0, m.we)("#Friend_Menu_ViewCommunityHub"),
				),
			);
		}
		return l.createElement(
			l.Fragment,
			null,
			l.createElement(
				v.kt,
				{
					className: "contextMenuGameTitle contextMenuUnselectable",
					onSelected: null,
					disabled: true,
				},
				l.createElement(
					"div",
					{
						className: "contextMenuGameTitleBlurCropContainer",
					},
					e,
				),
			),
			l.createElement(
				"div",
				{
					className: "contextMenuSectionContent",
				},
				t,
				this.props.extraItems,
			),
		);
	}
};
(0, n.Cg)([c.oI], Rm.prototype, "ShowStorePage", null);
(0, n.Cg)([c.oI], Rm.prototype, "ShowCommunityHub", null);
(0, n.Cg)([c.oI], Rm.prototype, "LaunchGame", null);
(0, n.Cg)([c.oI], Rm.prototype, "WatchGame", null);
(0, n.Cg)([c.oI], Rm.prototype, "JoinGame", null);
(0, n.Cg)([c.oI], Rm.prototype, "ViewGameInfo", null);
(0, n.Cg)([c.oI], Rm.prototype, "ShowInSteam", null);
(0, n.Cg)([c.oI], Rm.prototype, "JoinPartyBeacon", null);
Rm = (0, n.Cg)([s.PA], Rm);
let ue = class extends l.Component {
	WatchStream() {
		let e = this.props.browserContext;
		let t = this.props.friend;
		const r = t.persona.m_broadcastAccountId;
		i.xm.UIStore.ShowOrActivateBroadcast(e, r, true).ShowWatchPromptDialog(t);
	}
	render() {
		let e = this.props.friend;
		return l.createElement(
			l.Fragment,
			null,
			l.createElement(
				v.kt,
				{
					className: "contextMenuBroadcast contextMenuUnselectable",
					onSelected: null,
					disabled: true,
				},
				l.createElement(
					"div",
					{
						className: "contextMenuBroadcastTitle",
					},
					(0, m.we)("#Broadcast_Watching"),
				),
				l.createElement(
					"div",
					{
						className: "contextMenuBroadcastSubtitle",
					},
					e.GetBroadcastDescription(),
				),
			),
			l.createElement(
				"div",
				{
					className: "contextMenuSectionContent",
				},
				l.createElement(
					v.kt,
					{
						className: "contextMenuGameOptions",
						onSelected: this.WatchStream,
					},
					(0, m.we)("#Broadcast_WatchStream"),
				),
			),
		);
	}
};
function de(e) {
	i.xm.FriendStore.FavoritesStore.AddToFavorites({
		friend: e,
	});
}
function Ae(e) {
	i.xm.FriendStore.FavoritesStore.RemoveFromFavorites({
		friend: e,
	});
}
export function iS(e, t, r) {
	return (0, B.lX)(
		l.createElement(ge, {
			browserContext: e,
			group: t,
			ownerWindow: (0, h.uX)(r),
		}),
		r,
	);
}
function ge(e) {
	let t = [];
	if (e.group && e.group.modifiable) {
		t.push(
			l.createElement(
				v.kt,
				{
					key: "managegroup",
					onSelected: () => {
						var t;
						var r;
						var n;
						t = e.browserContext;
						r = e.group;
						n = e.ownerWindow;
						(0, o.HT)(
							l.createElement(b, {
								browserContext: t,
								group: r,
								rgPreSelectedFriends: r.member_accountid_list,
							}),
							n,
							"CreateFriendCategoryDialog",
							{
								strTitle: (0, m.we)("#FriendGroup_Menu_Manage"),
								popupWidth: 664,
								popupHeight: 700,
							},
							(0, a.h8)(n),
						);
					},
				},
				(0, m.we)("#FriendGroup_Menu_Manage"),
			),
		);
		t.push(
			l.createElement(
				v.kt,
				{
					key: "removegroup",
					onSelected: () => {
						i.xm.FriendStore.FriendGroupStore.RemoveGroup(e.group);
					},
				},
				(0, m.we)("#FriendGroup_Menu_Remove"),
			),
		);
	}
	return l.createElement(
		v.tz,
		{
			className: "friendsContextMenu",
			label: e.group?.name,
		},
		t,
		l.createElement(
			v.kt,
			{
				key: "creategroup",
				onSelected: () => {
					f(e.browserContext, e.ownerWindow);
				},
			},
			(0, m.we)("#FriendGroup_Menu_CreateGroup"),
		),
	);
}
export function HS(e, t, r) {
	return (0, B.lX)(
		l.createElement(Ce, {
			browserContext: e,
			ownerWindow: t.currentTarget.ownerDocument.defaultView,
			setPersonaNameEresultCallback: r,
		}),
		t,
	);
}
(0, n.Cg)([c.oI], ue.prototype, "WatchStream", null);
ue = (0, n.Cg)([s.PA], ue);
class Ce extends l.PureComponent {
	constructor(e) {
		super(e);
	}
	SetUserOnline() {
		i.xm.FriendStore.SetUserPersonaState(1);
	}
	SetUserInvisible() {
		i.xm.FriendStore.SetUserPersonaState(7);
	}
	SetUserAway() {
		i.xm.FriendStore.SetUserPersonaState(3);
	}
	SetUserOffline() {
		i.xm.SignOutOfFriends(this.props.browserContext);
		i.xm.FriendStore.SetUserPersonaState(0, false);
	}
	ToggleUserDND() {
		i.xm.FriendStore.SetUserDoNotDisturb(
			!i.xm.FriendStore.GetUserDoNotDisturb(),
		);
	}
	ShowUserProfile(e) {
		let t = i.xm.FriendStore.self.GetCommunityProfileURL();
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	EditProfile(e) {
		let t = `${i.xm.FriendStore.self.GetCommunityProfileURL()}edit`;
		(0, R.EP)(e, t);
		e.stopPropagation();
	}
	EditName(e) {
		var t;
		var r;
		this.props.browserContext;
		t = this.props.ownerWindow;
		r = this.props.setPersonaNameEresultCallback;
		(0, o.HT)(
			l.createElement(L, {
				eResultCallback: r,
			}),
			t,
			"ChangePersonaDialog",
			{
				strTitle: (0, m.we)("#Friend_Menu_AddNickname"),
				popupWidth: 640,
				popupHeight: 400,
			},
			(0, a.h8)(t),
		);
	}
	render() {
		let e = [];
		let t = [];
		let r = i.xm.FriendStore.self.persona.m_ePersonaState == 1;
		e.push(
			l.createElement(
				v.IK,
				{
					key: "state_online",
					bChecked: r,
					onSelected: this.SetUserOnline,
				},
				(0, m.we)("#PersonaStateOnline"),
			),
		);
		let n = i.xm.FriendStore.self.persona.m_ePersonaState == 3;
		e.push(
			l.createElement(
				v.IK,
				{
					key: "state_away",
					bChecked: n,
					onSelected: this.SetUserAway,
				},
				(0, m.we)("#PersonaStateAway"),
			),
		);
		let a = i.xm.FriendStore.self.persona.m_ePersonaState == 7;
		e.push(
			l.createElement(
				v.IK,
				{
					key: "state_invisible",
					className: "personaContextMenuItem",
					bChecked: a,
					onSelected: this.SetUserInvisible,
				},
				(0, m.we)("#PersonaStateInvisible"),
				l.createElement(
					"div",
					{
						className: "persona_menu_descriptor",
					},
					(0, m.we)("#PersonaStateInvisibleDescriptor"),
				),
			),
		);
		if (
			T.TS.IN_CLIENT &&
			i.xm.SettingsStore.BClientHasFeatureOrOnWeb("DoNotDisturb")
		) {
			let t = i.xm.FriendStore.self.persona.m_ePersonaState == 0;
			e.push(
				l.createElement(
					v.IK,
					{
						key: "state_offline",
						className: "personaContextMenuItem",
						bChecked: t,
						onSelected: this.SetUserOffline,
					},
					(0, m.we)("#PersonaStateOffline"),
					l.createElement(
						"div",
						{
							className: "persona_menu_descriptor",
						},
						(0, m.we)("#PersonaStateOfflineDescriptor"),
					),
				),
			);
		}
		if (i.xm.SettingsStore.BClientHasFeatureOrOnWeb("DoNotDisturb")) {
			let e = i.xm.FriendStore.GetUserDoNotDisturb();
			t.push(
				l.createElement(
					v.IK,
					{
						key: "do_not_disturb",
						className: "personaContextMenuItem",
						bChecked: false,
						onSelected: this.ToggleUserDND,
					},
					l.createElement(u.Yh, {
						key: "dnd_checkbox",
						className: "DNDCheckBox",
						checked: e,
						label: (0, m.we)("#User_ToggleDoNotDisturb"),
					}),
					l.createElement(
						"div",
						{
							className: "persona_menu_dnd_descriptor",
						},
						(0, m.we)("#PersonaStateDoNotDisturbDescriptor"),
					),
				),
			);
		}
		t.push(
			l.createElement(
				v.kt,
				{
					key: "editname",
					onSelected: this.EditName,
				},
				(0, m.we)("#Friend_Menu_ChangeMyName"),
			),
		);
		if (t) {
			return l.createElement(
				v.tz,
				{
					className: "friendsContextMenu currentUserContextMenu",
					label: i.xm.FriendStore.self.display_name,
				},
				l.createElement(
					"div",
					{
						className: "contextMenuSectionContent",
					},
					e,
				),
				t,
			);
		} else {
			return null;
		}
	}
}
(0, n.Cg)([c.oI], Ce.prototype, "SetUserOnline", null);
(0, n.Cg)([c.oI], Ce.prototype, "SetUserInvisible", null);
(0, n.Cg)([c.oI], Ce.prototype, "SetUserAway", null);
(0, n.Cg)([c.oI], Ce.prototype, "SetUserOffline", null);
(0, n.Cg)([c.oI], Ce.prototype, "ToggleUserDND", null);
(0, n.Cg)([c.oI], Ce.prototype, "ShowUserProfile", null);
(0, n.Cg)([c.oI], Ce.prototype, "EditProfile", null);
(0, n.Cg)([c.oI], Ce.prototype, "EditName", null);
const _e = 3600;
class fe extends l.Component {
	OnCancel() {
		this.props.OnCancel();
		this.props.closeModal();
	}
	OnOK() {
		this.props.OnOK();
		this.props.closeModal();
	}
	OnDropDownChange(e, t) {
		this.props.OnSet(e.data);
	}
	render() {
		let e = [
			{
				label: (0, m.we)("#Friend_Kick_Hour"),
				data: _e,
			},
			{
				label: (0, m.we)("#Friend_Kick_Day"),
				data: 86400,
			},
			{
				label: (0, m.we)("#Friend_Kick_Week"),
				data: 604800,
			},
		];
		return l.createElement(
			o.x_,
			{
				onEscKeypress: this.OnCancel,
			},
			l.createElement(
				u.U9,
				{
					classNameContent: "KickUserDialog",
					onSubmit: this.OnOK,
					bCenterVertically: true,
				},
				l.createElement(u.Y9, null, " ", (0, m.we)("#Friend_Kick"), " "),
				l.createElement(
					u.nB,
					null,
					l.createElement(u.a3, null, (0, m.we)("#Friend_Kick_How_Long")),
					l.createElement(u.m, {
						strDefaultLabel: (0, m.we)("#Friend_Kick_Hour"),
						rgOptions: e,
						onChange: this.OnDropDownChange,
						selectedOption: undefined,
					}),
				),
				l.createElement(
					u.wi,
					null,
					l.createElement(u.CB, {
						onCancel: this.OnCancel,
						strOKText: (0, m.we)("#Friend_Kick_Button"),
						strCancelText: (0, m.we)("#Button_Cancel"),
					}),
				),
			),
		);
	}
}
(0, n.Cg)([c.oI], fe.prototype, "OnCancel", null);
(0, n.Cg)([c.oI], fe.prototype, "OnOK", null);
(0, n.Cg)([c.oI], fe.prototype, "OnDropDownChange", null);
const be = (0, s.PA)((e) => {
	const { friend: t, ownerWindow: r, closeModal: n } = e;
	const i = t.persona.connect_string;
	l.useEffect(() => {
		if (i?.length) {
			const e = (0, Q.xE)(
				t.persona.GetAccountID(),
				t.persona.m_unGamePlayedAppID,
				t.persona.connect_string,
				null,
				t.persona.is_in_valid_lobby && t.persona.m_game_lobby_id,
			);
			(0, R.EP)(r, e);
			if (n) {
				n();
			}
		}
	}, [i]);
	return l.createElement(
		Z.o0,
		{
			bAlertDialog: true,
			strTitle: (0, m.we)("#Friend_JoinGameWait_Title"),
			strDescription: (0, m.we)("#Friend_JoinGameWait_Desc"),
			strOKButtonText: (0, m.we)("#Friend_JoinGameWait_Cancel"),
			onOK: n,
			onCancel: n,
			closeModal: n,
		},
		l.createElement(
			"div",
			{
				style: {
					display: "flex",
					justifyContent: "center",
					marginTop: "20px",
				},
			},
			l.createElement(Y.t, null),
		),
	);
});
