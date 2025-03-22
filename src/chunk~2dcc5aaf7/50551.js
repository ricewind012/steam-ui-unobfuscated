export var ki;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./64608.js");
var o = require("./44234.js");
var l = require(/*webcrack:missing*/ "./41230.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./88724.js");
var d = require("./17231.js");
var A = require("./68608.js");
var p = require(/*webcrack:missing*/ "./8573.js");
var g = require("./52912.js");
var h = require("./95773.js");
var C = require("./59704.js");
export class jr extends a.Component {
	m_bSettingsChanged = false;
	m_bCommunityPreferencesChanged = false;
	constructor(e) {
		super(e);
		this.state = {
			friendSettings: {
				...e.friendsSettingsInitial,
			},
			communityPreferences: {
				...e.communityPreferencesInitial,
			},
		};
	}
	componentDidUpdate(e) {
		let t = {};
		const { friendsSettingsInitial: r, communityPreferencesInitial: n } =
			this.props;
		for (let n of Object.keys(r)) {
			if (r[n] != e.friendsSettingsInitial[n]) {
				t[n] = r[n];
			}
		}
		let i = {};
		for (let t of Object.keys(n)) {
			if (n[t] != e.communityPreferencesInitial[t]) {
				i[t] = n[t];
			}
		}
		if (Object.keys(t).length) {
			this.setState({
				friendSettings: {
					...this.state.friendSettings,
					...t,
				},
			});
		}
		if (Object.keys(i).length) {
			this.setState({
				communityPreferences: {
					...this.state.communityPreferences,
					...i,
				},
			});
		}
		if (
			this.props.bSubmitImmediate &&
			(this.m_bSettingsChanged || this.m_bCommunityPreferencesChanged)
		) {
			this.props.onSubmit(
				this.state.friendSettings,
				this.state.communityPreferences,
			);
		}
		this.m_bSettingsChanged = false;
		this.m_bCommunityPreferencesChanged = false;
	}
	OnSubmit() {
		this.props.onSubmit(
			this.state.friendSettings,
			this.state.communityPreferences,
		);
		this.m_bSettingsChanged = false;
		this.m_bCommunityPreferencesChanged = false;
	}
	HandleRadioChange(e) {
		this.setState({
			friendSettings: {
				...this.state.friendSettings,
				nChatFlashMode: parseInt(e.currentTarget.value),
			},
		});
		this.m_bSettingsChanged = true;
	}
	OnSettingToggled(e, t) {
		this.setState({
			friendSettings: {
				...this.state.friendSettings,
				[e]: t,
			},
		});
		this.m_bSettingsChanged = true;
	}
	OnCommunityPreferenceToggled(e, t) {
		this.setState({
			communityPreferences: {
				...this.state.communityPreferences,
				[e]: t,
			},
		});
		this.m_bCommunityPreferencesChanged = true;
	}
	FriendsSettingsToggleRow(e) {
		return a.createElement(s.RF, {
			key: e.strName,
			onChange: (t) => {
				this.OnSettingToggled(e.strName, t);
			},
			label: e.strLabel,
			checked: !!this.state.friendSettings[e.strName],
			description: e.strDesc ? e.strDesc : "",
		});
	}
	FriendsSettingsCheckbox(e) {
		return a.createElement(s.Yh, {
			key: e.strName,
			onChange: (t) => {
				this.OnSettingToggled(e.strName, t);
			},
			checked: !!this.state.friendSettings[e.strName],
		});
	}
	FriendsSettingsCommunityPreferenceToggleRow(e) {
		return a.createElement(
			s.RF,
			{
				key: "CommunityPreference" + e.strName,
				onChange: (t) => {
					this.OnCommunityPreferenceToggled(e.strName, t);
				},
				label: e.strLabel,
				checked: !!this.state.communityPreferences[e.strName],
				description: e.strDesc ? e.strDesc : "",
			},
			e.children,
		);
	}
	SettingLink(e) {
		return a.createElement(
			"div",
			{
				className: "_DialogInputContainer _DialogLayout",
			},
			a.createElement(
				"div",
				{
					className: "displayColumn alignSelfCenter",
				},
				a.createElement(
					"div",
					{
						className: "DialogToggle_Label",
					},
					a.createElement(
						C.uU,
						{
							href: e.strLink,
						},
						e.strLabel,
					),
				),
				e.strDesc &&
					a.createElement(
						"div",
						{
							className: "DialogToggle_Description",
						},
						e.strDesc,
					),
				this.props.children,
			),
		);
	}
}
(0, i.Cg)([c.oI], jr.prototype, "OnSubmit", null);
(0, i.Cg)([c.oI], jr.prototype, "HandleRadioChange", null);
(0, i.Cg)([c.oI], jr.prototype, "OnSettingToggled", null);
(0, i.Cg)([c.oI], jr.prototype, "OnCommunityPreferenceToggled", null);
(0, i.Cg)([c.oI], jr.prototype, "FriendsSettingsToggleRow", null);
(0, i.Cg)([c.oI], jr.prototype, "FriendsSettingsCheckbox", null);
(0, i.Cg)(
	[c.oI],
	jr.prototype,
	"FriendsSettingsCommunityPreferenceToggleRow",
	null,
);
(0, i.Cg)([c.oI], jr.prototype, "SettingLink", null);
(function (e) {
	e[(e.k_EChatFontSizeSmall = 1)] = "k_EChatFontSizeSmall";
	e[(e.k_EChatFontSizeDefault = 2)] = "k_EChatFontSizeDefault";
	e[(e.k_EChatFontSizeLarge = 3)] = "k_EChatFontSizeLarge";
})((ki ||= {}));
class f extends a.Component {
	render() {
		let e = this.props.bParenthesizeNicknames;
		let t = (0, m.we)("#FriendSettings_ExampleFriend");
		let r = (0, m.we)("#FriendSettings_ExampleNickname");
		let n = new u.Z(new p.b());
		n.m_strPlayerName = t;
		n.m_ePersonaState = 1;
		n.m_strAvatarHash = u.dV;
		return a.createElement(
			"div",
			{
				className: "friend online friendSettingsFakeFriend",
			},
			a.createElement(d.i8, {
				className: "fakeFriendAvatar",
				persona: n,
				statusPosition: "right",
			}),
			a.createElement(A.D, {
				className: "labelHolder",
				persona: n,
				eFriendRelationship: 3,
				bIsSelf: false,
				strNickname: r,
				bParenthesizeNicknames: e,
				bCompactView: false,
			}),
		);
	}
}
export let vQ = class extends jr {
	constructor(e) {
		super(e);
	}
	SetChatFontSize(e) {
		this.setState({
			friendSettings: {
				...this.state.friendSettings,
				nChatFontSize: e,
			},
		});
		this.m_bSettingsChanged = true;
	}
	render() {
		let e = this.FriendsSettingsToggleRow;
		let t = this.state.friendSettings.nChatFontSize;
		return a.createElement(
			s.lV,
			{
				className: "DialogBody",
				onSubmit: this.OnSubmit,
			},
			a.createElement(
				"div",
				{
					className: "SettingsGroup",
				},
				a.createElement(e, {
					strName: "bCompactFriendsList",
					strLabel: (0, m.we)("#FriendSettings_CompactFriendsAndChat"),
				}),
				a.createElement(e, {
					strName: "bCompactQuickAccess",
					strLabel: (0, m.we)("#FriendSettings_CompactQuickAccess"),
				}),
				a.createElement(
					s.JU,
					{
						className: "friendSettingsSubheader",
					},
					(0, m.we)("#FriendSettings_ChatFontSize"),
				),
				a.createElement(
					s.Xp,
					{
						className: "FriendsSettingsChatFontSizeSection_ButtonRow",
					},
					a.createElement(
						s.$n,
						{
							className:
								"smallFontSetting " +
								(t == ki.k_EChatFontSizeSmall ? "Primary" : "Off"),
							onClick: () => this.SetChatFontSize(ki.k_EChatFontSizeSmall),
						},
						(0, m.we)("#FriendSetting_ChatFontSmall"),
					),
					a.createElement(
						s.$n,
						{
							className:
								"defaultFontSetting " +
								(t == ki.k_EChatFontSizeDefault ? "Primary" : "Off"),
							onClick: () => this.SetChatFontSize(ki.k_EChatFontSizeDefault),
						},
						(0, m.we)("#FriendSetting_ChatFontDefault"),
					),
					a.createElement(
						s.$n,
						{
							className:
								"largeFontSetting " +
								(t == ki.k_EChatFontSizeLarge ? "Primary" : "Off"),
							onClick: () => this.SetChatFontSize(ki.k_EChatFontSizeLarge),
						},
						(0, m.we)("#FriendSetting_ChatFontLarge"),
					),
				),
			),
			!this.props.bSubmitImmediate &&
				a.createElement(s.CB, {
					onCancel: this.props.onCancel,
				}),
		);
	}
};
(0, i.Cg)([c.oI], vQ.prototype, "SetChatFontSize", null);
vQ = (0, i.Cg)([l.PA], vQ);
export let IW = class extends jr {
	render() {
		let e = this.FriendsSettingsToggleRow;
		let t = o.TS.IN_CLIENT
			? "#FriendSettings_RememberOpenChats_DescClient"
			: "#FriendSettings_RememberOpenChats_Desc";
		let r = this.SettingLink;
		return a.createElement(
			s.lV,
			{
				className: "DialogBody",
				onSubmit: this.OnSubmit,
			},
			a.createElement(
				"div",
				{
					className: "SettingsGroup",
				},
				this.props.bShowPopupOpts &&
					a.createElement(
						a.Fragment,
						null,
						a.createElement(s.RF, {
							onChange: (e) => g.ZM.ToggleSingleWindowMode(e),
							label: (0, m.we)("#FriendSettings_DockChats"),
							checked: h.xm.SettingsStore.BSingleWindowModeEnabled(),
						}),
						a.createElement(e, {
							strName: "bAlwaysNewChatWindow",
							strLabel: (0, m.we)("#FriendSettings_AlwaysNewChatWindow"),
						}),
					),
				a.createElement(e, {
					strName: "bDisableEmbedInlining",
					strLabel: (0, m.we)("#FriendSettings_DisableEmbedInlining"),
				}),
				a.createElement(e, {
					strName: "bRememberOpenChats",
					strLabel: (0, m.we)("#FriendSettings_RememberOpenChats"),
					strDesc: (0, m.we)(t),
				}),
				a.createElement(e, {
					strName: "b24HourClock",
					strLabel: (0, m.we)("#FriendSettings_AlwaysUse24HourClock"),
				}),
				a.createElement(e, {
					strName: "bDisableSpellcheck",
					strLabel: (0, m.we)("#FriendSettings_DisableSpellcheck"),
				}),
				h.xm.UIStore.show_winter_sale_ui &&
					a.createElement(e, {
						strName: "bDisableRoomEffects",
						strLabel: (0, m.we)("#FriendSettings_DisableRoomEffects"),
					}),
				a.createElement(r, {
					strLabel: (0, m.we)("#TextFilterStatus_ChangeSettings"),
					strLink: h.xm.ChatStore.GetTextFilterSettingsURL(),
					strDesc: h.xm.ChatStore.GetTextFilterStatus(),
				}),
			),
		);
	}
};
IW = (0, i.Cg)([l.PA], IW);
export let dG = class extends jr {
	constructor(e) {
		super(e);
	}
	render() {
		let e = this.FriendsSettingsToggleRow;
		let t = this.FriendsSettingsCommunityPreferenceToggleRow;
		return a.createElement(
			s.lV,
			{
				className: "DialogBody",
				onSubmit: this.OnSubmit,
			},
			a.createElement(
				"div",
				{
					className: "SettingsGroup",
				},
				a.createElement(
					t,
					{
						strName: "bParenthesizeNicknames",
						strLabel: (0, m.we)("#FriendSettings_ParenthesizeNicknames"),
					},
					a.createElement(f, {
						bParenthesizeNicknames:
							this.state.communityPreferences.bParenthesizeNicknames,
					}),
				),
				a.createElement(e, {
					strName: "bCategorizeInGameFriendsByGame",
					strLabel: (0, m.we)("#FriendSettings_CategorizeInGameFriendsByGame"),
				}),
				a.createElement(e, {
					strName: "bHideOfflineFriendsInTagGroups",
					strLabel: (0, m.we)("#FriendSettings_HideOfflineFriendsInCategories"),
				}),
				a.createElement(e, {
					strName: "bHideCategorizedFriends",
					strLabel: (0, m.we)("#FriendSettings_HideCategorizedFriends"),
				}),
				a.createElement(e, {
					strName: "bForceAlphabeticFriendSorting",
					strLabel: (0, m.we)("#FriendSettings_SortFriendsByStatus"),
				}),
				this.props.bDoNotDisturbSupported &&
					a.createElement(e, {
						strName: "bSignIntoFriends",
						strLabel: (0, m.we)("#FriendSettings_SignInToFriends"),
					}),
				a.createElement(e, {
					strName: "bAnimatedAvatars",
					strLabel: (0, m.we)("#FriendSettings_AnimatedAvatars"),
				}),
			),
		);
	}
};
dG = (0, i.Cg)([l.PA], dG);
