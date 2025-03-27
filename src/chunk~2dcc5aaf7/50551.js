import { Localize } from "../../actual_src/utils/localization.js";
import i, { Cg } from "./34629.js";
import a from "./63696.js";
import s from "./64608.js";
import o from "./44234.js";
import l from "./41230.js";
import c from "./52451.js";
import u from "./88724.js";
import d from "./17231.js";
import A from "./68608.js";
import p from "./8573.js";
import g from "./52912.js";
import h from "./95773.js";
import C from "./59704.js";
export let ki;
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
		const { friendsSettingsInitial, communityPreferencesInitial } = this.props;
		for (let n of Object.keys(friendsSettingsInitial)) {
			if (friendsSettingsInitial[n] != e.friendsSettingsInitial[n]) {
				t[n] = friendsSettingsInitial[n];
			}
		}
		let i = {};
		for (let t of Object.keys(communityPreferencesInitial)) {
			if (communityPreferencesInitial[t] != e.communityPreferencesInitial[t]) {
				i[t] = communityPreferencesInitial[t];
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
		return (
			<s.RF
				key={e.strName}
				onChange={(t) => {
					this.OnSettingToggled(e.strName, t);
				}}
				label={e.strLabel}
				checked={!!this.state.friendSettings[e.strName]}
				description={e.strDesc ? e.strDesc : ""}
			/>
		);
	}
	FriendsSettingsCheckbox(e) {
		return (
			<s.Yh
				key={e.strName}
				onChange={(t) => {
					this.OnSettingToggled(e.strName, t);
				}}
				checked={!!this.state.friendSettings[e.strName]}
			/>
		);
	}
	FriendsSettingsCommunityPreferenceToggleRow(e) {
		return (
			<s.RF
				key={`CommunityPreference${e.strName}`}
				onChange={(t) => {
					this.OnCommunityPreferenceToggled(e.strName, t);
				}}
				label={e.strLabel}
				checked={!!this.state.communityPreferences[e.strName]}
				description={e.strDesc ? e.strDesc : ""}
			>
				{e.children}
			</s.RF>
		);
	}
	SettingLink(e) {
		return (
			<div className="_DialogInputContainer _DialogLayout">
				<div className="displayColumn alignSelfCenter">
					<div className="DialogToggle_Label">
						<C.uU href={e.strLink}>{e.strLabel}</C.uU>
					</div>
					{e.strDesc && (
						<div className="DialogToggle_Description">{e.strDesc}</div>
					)}
					{this.props.children}
				</div>
			</div>
		);
	}
}
Cg([c.oI], jr.prototype, "OnSubmit", null);
Cg([c.oI], jr.prototype, "HandleRadioChange", null);
Cg([c.oI], jr.prototype, "OnSettingToggled", null);
Cg([c.oI], jr.prototype, "OnCommunityPreferenceToggled", null);
Cg([c.oI], jr.prototype, "FriendsSettingsToggleRow", null);
Cg([c.oI], jr.prototype, "FriendsSettingsCheckbox", null);
Cg([c.oI], jr.prototype, "FriendsSettingsCommunityPreferenceToggleRow", null);
Cg([c.oI], jr.prototype, "SettingLink", null);
((e) => {
	e[(e.k_EChatFontSizeSmall = 1)] = "k_EChatFontSizeSmall";
	e[(e.k_EChatFontSizeDefault = 2)] = "k_EChatFontSizeDefault";
	e[(e.k_EChatFontSizeLarge = 3)] = "k_EChatFontSizeLarge";
})((ki ||= {}));
class F extends a.Component {
	render() {
		let e = this.props.bParenthesizeNicknames;
		let t = Localize("#FriendSettings_ExampleFriend");
		let r = Localize("#FriendSettings_ExampleNickname");
		let n = new u.Z(new p.b());
		n.m_strPlayerName = t;
		n.m_ePersonaState = 1;
		n.m_strAvatarHash = u.dV;
		return (
			<div className="friend online friendSettingsFakeFriend">
				<d.i8 className="fakeFriendAvatar" persona={n} statusPosition="right" />
				<A.D
					className="labelHolder"
					persona={n}
					eFriendRelationship={3}
					bIsSelf={false}
					strNickname={r}
					bParenthesizeNicknames={e}
					bCompactView={false}
				/>
			</div>
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
		let E = this.FriendsSettingsToggleRow;
		let t = this.state.friendSettings.nChatFontSize;
		return (
			<s.lV className="DialogBody" onSubmit={this.OnSubmit}>
				<div className="SettingsGroup">
					<E
						strName="bCompactFriendsList"
						strLabel={Localize("#FriendSettings_CompactFriendsAndChat")}
					/>
					<E
						strName="bCompactQuickAccess"
						strLabel={Localize("#FriendSettings_CompactQuickAccess")}
					/>
					<s.JU className="friendSettingsSubheader">
						{Localize("#FriendSettings_ChatFontSize")}
					</s.JU>
					<s.Xp className="FriendsSettingsChatFontSizeSection_ButtonRow">
						<s.$n
							className={`smallFontSetting ${
								t == ki.k_EChatFontSizeSmall ? "Primary" : "Off"
							}`}
							onClick={() => this.SetChatFontSize(ki.k_EChatFontSizeSmall)}
						>
							{Localize("#FriendSetting_ChatFontSmall")}
						</s.$n>
						<s.$n
							className={`defaultFontSetting ${
								t == ki.k_EChatFontSizeDefault ? "Primary" : "Off"
							}`}
							onClick={() => this.SetChatFontSize(ki.k_EChatFontSizeDefault)}
						>
							{Localize("#FriendSetting_ChatFontDefault")}
						</s.$n>
						<s.$n
							className={`largeFontSetting ${
								t == ki.k_EChatFontSizeLarge ? "Primary" : "Off"
							}`}
							onClick={() => this.SetChatFontSize(ki.k_EChatFontSizeLarge)}
						>
							{Localize("#FriendSetting_ChatFontLarge")}
						</s.$n>
					</s.Xp>
				</div>
				{!this.props.bSubmitImmediate && (
					<s.CB onCancel={this.props.onCancel} />
				)}
			</s.lV>
		);
	}
};
Cg([c.oI], vQ.prototype, "SetChatFontSize", null);
vQ = Cg([l.PA], vQ);
export let IW = class extends jr {
	render() {
		let E = this.FriendsSettingsToggleRow;
		let t = o.TS.IN_CLIENT
			? "#FriendSettings_RememberOpenChats_DescClient"
			: "#FriendSettings_RememberOpenChats_Desc";
		let R = this.SettingLink;
		return (
			<s.lV className="DialogBody" onSubmit={this.OnSubmit}>
				<div className="SettingsGroup">
					{this.props.bShowPopupOpts && (
						<>
							<s.RF
								onChange={(e) => g.ZM.ToggleSingleWindowMode(e)}
								label={Localize("#FriendSettings_DockChats")}
								checked={h.xm.SettingsStore.BSingleWindowModeEnabled()}
							/>
							<E
								strName="bAlwaysNewChatWindow"
								strLabel={Localize("#FriendSettings_AlwaysNewChatWindow")}
							/>
						</>
					)}
					<E
						strName="bDisableEmbedInlining"
						strLabel={Localize("#FriendSettings_DisableEmbedInlining")}
					/>
					<E
						strName="bRememberOpenChats"
						strLabel={Localize("#FriendSettings_RememberOpenChats")}
						strDesc={Localize(t)}
					/>
					<E
						strName="b24HourClock"
						strLabel={Localize("#FriendSettings_AlwaysUse24HourClock")}
					/>
					<E
						strName="bDisableSpellcheck"
						strLabel={Localize("#FriendSettings_DisableSpellcheck")}
					/>
					{h.xm.UIStore.show_winter_sale_ui && (
						<E
							strName="bDisableRoomEffects"
							strLabel={Localize("#FriendSettings_DisableRoomEffects")}
						/>
					)}
					<R
						strLabel={Localize("#TextFilterStatus_ChangeSettings")}
						strLink={h.xm.ChatStore.GetTextFilterSettingsURL()}
						strDesc={h.xm.ChatStore.GetTextFilterStatus()}
					/>
				</div>
			</s.lV>
		);
	}
};
IW = Cg([l.PA], IW);
export let dG = class extends jr {
	constructor(e) {
		super(e);
	}
	render() {
		let E = this.FriendsSettingsToggleRow;
		let T = this.FriendsSettingsCommunityPreferenceToggleRow;
		return (
			<s.lV className="DialogBody" onSubmit={this.OnSubmit}>
				<div className="SettingsGroup">
					<T
						strName="bParenthesizeNicknames"
						strLabel={Localize("#FriendSettings_ParenthesizeNicknames")}
					>
						<F
							bParenthesizeNicknames={
								this.state.communityPreferences.bParenthesizeNicknames
							}
						/>
					</T>
					<E
						strName="bCategorizeInGameFriendsByGame"
						strLabel={Localize("#FriendSettings_CategorizeInGameFriendsByGame")}
					/>
					<E
						strName="bHideOfflineFriendsInTagGroups"
						strLabel={Localize(
							"#FriendSettings_HideOfflineFriendsInCategories",
						)}
					/>
					<E
						strName="bHideCategorizedFriends"
						strLabel={Localize("#FriendSettings_HideCategorizedFriends")}
					/>
					<E
						strName="bForceAlphabeticFriendSorting"
						strLabel={Localize("#FriendSettings_SortFriendsByStatus")}
					/>
					{this.props.bDoNotDisturbSupported && (
						<E
							strName="bSignIntoFriends"
							strLabel={Localize("#FriendSettings_SignInToFriends")}
						/>
					)}
					<E
						strName="bAnimatedAvatars"
						strLabel={Localize("#FriendSettings_AnimatedAvatars")}
					/>
				</div>
			</s.lV>
		);
	}
};
dG = Cg([l.PA], dG);
