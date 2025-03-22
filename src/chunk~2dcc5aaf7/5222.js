var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./44234.js");
var s = require("./64608.js");
var o = require("./52912.js");
var l = require("./13869.js");
var c = require(/*webcrack:missing*/ "./69164.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require("./95773.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require("./92009.js");
var g = require(/*webcrack:missing*/ "./49455.js");
var h = require("./43472.js");
var C = h;
export function lV(e, t) {
	let r = t.GetGroup().textRoomList.length;
	if (r > 7) {
		r = 7;
	}
	let n = r * 60;
	if (r < 2) {
		n -= 32;
	}
	(0, l.HT)(
		i.createElement(b, {
			group: t.GetGroup(),
		}),
		e,
		"ChatRoomGroupNotificationSettings",
		{
			strTitle: (0, m.we)("#NotificationSettings_Title"),
			popupWidth: 600,
			popupHeight: 348 + n,
		},
		(0, o.h8)(e),
	);
}
export function yi(e = true) {
	let t = [];
	if (e) {
		t = t.concat([
			{
				label: i.createElement(
					"span",
					{
						className: "ChannelSpecificNotificationSettings_Inherit",
					},
					(0, m.we)("#NotificationSetting_Inherit"),
				),
				data: 0,
			},
		]);
	}
	t = t.concat([
		{
			label: (0, m.we)("#NotificationSetting_AllMessages"),
			data: 4,
		},
		{
			label: (0, m.we)(
				"#NotificationSetting_AnyMention",
				d.xm.FriendStore.self.display_name,
			),
			data: 3,
		},
		{
			label: (0, m.we)(
				"#NotificationSetting_DirectMention",
				d.xm.FriendStore.self.display_name,
			),
			data: 2,
		},
		{
			label: (0, m.we)("#NotificationSetting_None"),
			data: 1,
		},
	]);
	return t;
}
let b = class extends i.Component {
	static contextType = a.QO;
	m_rgSelectOptions = yi(false);
	constructor(e) {
		super(e);
		this.state = {
			cSavesInFlight: 0,
		};
	}
	IncrementSavesInFlight() {
		this.setState((e) => ({
			cSavesInFlight: e.cSavesInFlight + 1,
		}));
	}
	DecrementSavesInFlight() {
		this.setState((e) => {
			(0, g.w)(e.cSavesInFlight > 0, `expected ${e.cSavesInFlight} > 0`);
			return {
				cSavesInFlight: e.cSavesInFlight - 1,
			};
		});
	}
	WrapSavePromise(e) {
		this.IncrementSavesInFlight();
		e.then(this.DecrementSavesInFlight, this.DecrementSavesInFlight);
	}
	OnGroupNotificationLevelChanged(e) {
		this.WrapSavePromise(this.props.group.SetNotificationPreferences(e));
	}
	OnShowUnreadIndicatorChanged(e) {
		this.WrapSavePromise(
			this.props.group.SetNotificationPreferences(undefined, undefined, e),
		);
	}
	DismissDialog() {
		this.props.closeModal();
	}
	OnFriendsSettingsClicked(e) {
		(0, p.T)((0, o.CO)(e), e.currentTarget.ownerDocument.defaultView);
	}
	render() {
		let e;
		let t = this.props.group;
		let r = t.chatRoomList.filter((e) => e.BShouldTrackUnreadMessages());
		let n = r.length > 0;
		if (
			r.length == 1 &&
			r[0].GetDesktopNotificationLevelSetting() == 0 &&
			r[0].GetMobileNotificationLevelsetting() == 0
		) {
			n = false;
		}
		if (n) {
			let n = r.map((e) =>
				i.createElement(y, {
					fnHandleSave: this.WrapSavePromise,
					group: t,
					chat: e,
					key: e.unique_id,
				}),
			);
			e = i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					{
						className: "notificationsChannelListContainer",
					},
					n,
				),
			);
		}
		return i.createElement(
			l.x_,
			{
				onEscKeypress: this.DismissDialog,
			},
			i.createElement(
				s.U9,
				{
					classNameContent: "ChatRoomNotificationSettingsDialog",
				},
				i.createElement(s.Y9, null, (0, m.we)("#NotificationSettings_Title")),
				i.createElement(
					s.JU,
					null,
					(0, m.PP)(
						"#NotificationSettings_SubTitle",
						i.createElement(
							"span",
							{
								className: "whiteText",
							},
							t.name,
						),
					),
				),
				i.createElement(
					s.nB,
					null,
					i.createElement(
						s.JU,
						{
							className:
								"NotificationSettingsSavingIndicator " +
								(this.state.cSavesInFlight ? "Saving" : ""),
						},
						(0, m.we)("#GroupSettings_Permissions_Saving"),
						"...",
					),
					i.createElement(S, {
						drop_down_options: this.m_rgSelectOptions,
						get_notification_level: (e) => t.GetDesktopNotificationLevel(e),
						set_notification_level: this.OnGroupNotificationLevelChanged,
						get_muted: () => t.BIsUnreadIndicatorMuted(),
						set_muted: this.OnShowUnreadIndicatorChanged,
					}),
					n &&
						i.createElement(
							i.Fragment,
							null,
							i.createElement(s._E, null),
							i.createElement(
								s.dR,
								{
									className: "notificationsChannelHeader",
								},
								i.createElement(
									s.JU,
									{
										className: "NotificationChannelNameLabel",
									},
									(0, m.we)("#GroupSettings_Channels_TextChannels"),
								),
								i.createElement(
									s.JU,
									{
										className: "OverrideChannelLabel",
									},
									(0, m.we)("#NotificationSetting_ShortLabel"),
								),
							),
							i.createElement(
								s.xz,
								{
									className: C.scrollMaskVertical,
								},
								e,
							),
						),
				),
				i.createElement(
					s.wi,
					null,
					!this.context?.IN_GAMEPADUI &&
						(0, m.PP)(
							"#NotificationSetting_Footer_Desc2",
							i.createElement(
								"span",
								{
									className: "textLink",
									onClick: this.OnFriendsSettingsClicked,
								},
								(0, m.we)("#Settings"),
							),
						),
					i.createElement(
						c.Z,
						{
							className: "_DialogColLayout",
							"flow-children": "row",
						},
						i.createElement(
							s.jn,
							{
								onClick: this.props.closeModal,
							},
							(0, m.we)("#Button_Close"),
						),
					),
				),
			),
		);
	}
};
(0, n.Cg)([u.oI], b.prototype, "IncrementSavesInFlight", null);
(0, n.Cg)([u.oI], b.prototype, "DecrementSavesInFlight", null);
(0, n.Cg)([u.oI], b.prototype, "WrapSavePromise", null);
(0, n.Cg)([u.oI], b.prototype, "OnGroupNotificationLevelChanged", null);
(0, n.Cg)([u.oI], b.prototype, "OnShowUnreadIndicatorChanged", null);
(0, n.Cg)([u.oI], b.prototype, "DismissDialog", null);
(0, n.Cg)([u.oI], b.prototype, "OnFriendsSettingsClicked", null);
b = (0, n.Cg)([A.PA], b);
let y = class extends i.Component {
	static contextType = a.QO;
	m_rgSelectOptions = yi();
	OnChatNotificationLevelChanged(e) {
		this.props.fnHandleSave(this.props.chat.SetNotificationPreferences(e.data));
	}
	render() {
		let e = this.props.chat;
		e.GetDesktopNotificationLevelSetting();
		if (this.context?.IN_GAMEPADUI) {
			return i.createElement(
				c.Z,
				{
					className: "notificationsChannel",
					"flow-children": "column",
				},
				i.createElement(s.m, {
					layout: "inline",
					label: e.name,
					rgOptions: this.m_rgSelectOptions,
					selectedOption: e.GetDesktopNotificationLevelSetting(),
					onChange: this.OnChatNotificationLevelChanged,
				}),
			);
		} else {
			return i.createElement(
				s.dR,
				{
					className: "notificationsChannel",
				},
				i.createElement(
					"div",
					{
						className: "NotificationChannelName",
					},
					e.name,
				),
				i.createElement(s.m, {
					rgOptions: this.m_rgSelectOptions,
					selectedOption: e.GetDesktopNotificationLevelSetting(),
					onChange: this.OnChatNotificationLevelChanged,
				}),
			);
		}
	}
};
(0, n.Cg)([u.oI], y.prototype, "OnChatNotificationLevelChanged", null);
y = (0, n.Cg)([A.PA], y);
let S = class extends i.Component {
	OnNotificationLevelChanged(e) {
		this.props.set_notification_level(e.data);
	}
	OnShowUnreadIndicatorChanged(e) {
		this.props.set_muted(!e);
	}
	render() {
		let e = this.props.get_notification_level(true);
		if (this.props.bIsDefault && e == 0) {
			e = 4;
		}
		let t = this.props.get_notification_level();
		if (this.props.bIsDefault && t == 0) {
			t = 4;
		}
		return i.createElement(
			"div",
			{
				className: "ChatRoomNotificationSettingsDialog",
			},
			i.createElement(
				"div",
				{
					className:
						"notificationGeneralHeader" +
						(this.props.bIsDefault ? " isDefault" : ""),
				},
				i.createElement(
					s.JU,
					null,
					this.props.bIsDefault
						? (0, m.we)("#NotificationSetting_DefaultLabel")
						: (0, m.we)("#NotificationSetting_Label"),
				),
			),
			i.createElement(
				"div",
				{
					style: {
						marginBottom: 16,
					},
				},
				i.createElement(
					"div",
					{
						className: "notificationRow",
					},
					i.createElement(s.m, {
						rgOptions: this.props.drop_down_options,
						selectedOption: e,
						onChange: this.OnNotificationLevelChanged,
					}),
				),
				t != 4 &&
					i.createElement(
						"div",
						{
							className: "indicatorOptionContainer",
						},
						i.createElement(s.RF, {
							className: "indicatorOption",
							label: (0, m.we)("#NotificationSetting_Indicator"),
							onChange: this.OnShowUnreadIndicatorChanged,
							checked: !this.props.get_muted(),
						}),
						i.createElement(
							"div",
							{
								className:
									"ChatUnreadMessageIndicator" +
									(this.props.get_muted() ? " Hidden" : ""),
							},
							i.createElement("div", {
								className: "chatUnreadCircle",
							}),
						),
					),
			),
		);
	}
};
(0, n.Cg)([u.oI], S.prototype, "OnNotificationLevelChanged", null);
(0, n.Cg)([u.oI], S.prototype, "OnShowUnreadIndicatorChanged", null);
S = (0, n.Cg)([A.PA], S);
