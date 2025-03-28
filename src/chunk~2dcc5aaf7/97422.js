import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./95773.js";
import a, { h8, CO } from "./52912.js";
import s, { PA } from "./41230.js";
import o, { HT, pg } from "./13869.js";
import l from "./63696.js";
import c from "./52451.js";
import u from "./64608.js";
import p from "./68665.js";
import g from "./8573.js";
import C from "./98829.js";
import _ from "./89193.js";
import B, { lX } from "./31084.js";
import v from "./88750.js";
import I, { uQ } from "./96127.js";
import E from "./8653.js";
import M from "./3756.js";
import T from "./44234.js";
import R, { EP } from "./59704.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
import D, { Ic, Ci, WQ, dt } from "./78060.js";
import N from "./50376.js";
import F from "./95377.js";
import G from "./18644.js";
import O from "./83957.js";
import { nn } from "./92564.js";
import x from "./4563.js";
import { rO } from "./88724.js";
import W from "./17231.js";
import H from "./43397.js";
import { Dn } from "./45328.js";
import { L as L_1 } from "./76319.js";
import { xE } from "./48301.js";
import Z from "./10606.js";
import Y from "./26853.js";
import { BSharedJSContextHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import { t7 } from "./82594.js";
function d(e, t, r) {
	HT(
		<A player={t} />,
		r,
		"NicknameDialog",
		{
			strTitle: Localize("#Friend_Menu_AddNickname"),
			popupWidth: 640,
			popupHeight: 400,
		},
		h8(r),
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
		return (
			<o.x_
				className="Dialog_EditNickName"
				onEscKeypress={this.props.closeModal}
			>
				<u.U9 classNameContent="NicknameDialog" onSubmit={this.HandleSubmit}>
					<u.Y9>
						{t
							? Localize("#Friend_Menu_ChangeNickname")
							: Localize("#Friend_Menu_AddNickname")}
					</u.Y9>
					<u.nB>
						<u.a3>
							{t
								? Localize("#Nickname_EditNickname")
								: Localize("#Nickname_AddANickname")}
						</u.a3>
						<u.a3>
							<div className={e}>
								<img
									className="avatarMedium"
									src={this.props.player.persona.avatar_url_full}
								/>
								<div className="labelHolder">
									<div className="mediumName">
										{this.props.player.secondary_display_name}
									</div>
									<div className="nickNamedAs">
										{Localize("#Nickname_NickNameAsDialog")}
									</div>
									<div className="mediumName asNickName">
										<u.pd
											placeholder={
												t
													? Localize("#Nickname_PlaceHolderNickName")
													: Localize("#Nickname_PlaceHolderNickNameFresh")
											}
											className="nicknameInput"
											value={this.state.strCurrentNameEntry}
											onChange={this.HandleTextEntry}
											autoFocus
											bShowClearAction
										/>
									</div>
								</div>
							</div>
						</u.a3>
					</u.nB>
					<u.wi>
						<u.CB onCancel={this.props.closeModal} />
					</u.wi>
				</u.U9>
			</o.x_>
		);
	}
};
Cg([c.oI], A.prototype, "HandleTextEntry", null);
Cg([c.oI], A.prototype, "HandleSubmit", null);
A = Cg([s.PA], A);
function f(e, t, r) {
	let n = r ? [r.accountid] : [];
	HT(
		<B_1 browserContext={e} rgPreSelectedFriends={n} />,
		t,
		"CreateFriendCategoryDialog",
		{
			strTitle: Localize("#FriendGroup_Menu_CreateGroup"),
			popupWidth: 664,
			popupHeight: 700,
		},
		h8(t),
	);
}
class B_1 extends l.Component {
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
						strError: Localize("#FriendGroup_ManageGroup_ErrorFailed"),
					});
				}
			});
		} else {
			if (!t) {
				this.setState({
					strError: Localize("#FriendGroup_CreateGroup_ErrorNeedName"),
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
						strError: Localize("#FriendGroup_CreateGroup_ErrorFailed"),
					});
				}
			});
		}
	}
	render() {
		return (
			<o.x_ onEscKeypress={this.props.closeModal}>
				<u.U9 classNameContent="ManageGroupDialog" onSubmit={this.HandleSubmit}>
					<u.Y9>
						{this.props.group
							? Localize("#FriendGroup_Menu_Manage")
							: Localize("#FriendGroup_Menu_CreateGroup")}
					</u.Y9>
					<u.nB>
						{this.state.strError && (
							<u.a3 className="nicknameError">{this.state.strError}</u.a3>
						)}
						<u.pd
							type="text"
							label={Localize("#FriendGroup_CategoryName")}
							className="nicknameInput"
							value={this.state.strNameEntry}
							onChange={this.HandleTextEntry}
							autoFocus
						/>
						<p.r
							label={Localize("#FriendGroup_CategoryMembers")}
							eSort={1}
							rgPickedFriends={this.state.rgPickedFriends}
							onChange={(e) =>
								this.setState({
									rgPickedFriends: e,
								})
							}
						/>
					</u.nB>
					<u.wi>
						<u.CB onCancel={this.props.closeModal} />
					</u.wi>
				</u.U9>
			</o.x_>
		);
	}
}
Cg([c.oI], B_1.prototype, "HandleTextEntry", null);
Cg([c.oI], B_1.prototype, "HandleSubmit", null);
class Y_1 extends l.Component {
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
					strError: Localize("#FriendGroup_ManageGroup_ErrorFailed"),
				});
			} else {
				this.props.closeModal();
			}
		});
	}
	CreateNew(e) {
		f(CO(e), GetOwningWindowForEvent(e), this.props.friend);
	}
	render() {
		return (
			<o.x_ onEscKeypress={this.props.closeModal}>
				<u.U9
					classNameContent="AssignCategoriesDialog"
					onSubmit={this.HandleSubmit}
				>
					<u.Y9>{Localize("#FriendGroup_Categorize_Title")}</u.Y9>
					<u.nB>
						{this.state.strError && (
							<u.a3 className="nicknameError">{this.state.strError}</u.a3>
						)}
						<u.dR>
							<u.VP>
								<C.bP
									friend={this.props.friend}
									className="AssignCategoriesDialog_Friend"
									noActions
									context={null}
								/>
							</u.VP>
						</u.dR>
						<S
							friend={this.props.friend}
							mapChecks={this.m_mapCategoryChecks}
						/>
						<u.dR className="AssignCategoriesDialog_AddNewButton">
							<u.$n onClick={this.CreateNew}>
								{Localize("#FriendGroup_Categorize_AddNew")}
							</u.$n>
						</u.dR>
					</u.nB>
					<u.wi>
						<u.CB onCancel={this.props.closeModal} />
					</u.wi>
				</u.U9>
			</o.x_>
		);
	}
}
Cg([c.oI], Y_1.prototype, "HandleSubmit", null);
Cg([c.oI], Y_1.prototype, "CreateNew", null);
let S = class extends l.Component {
	render() {
		let e = i.xm.FriendStore.FriendGroupStore.user_groups.map((e) => (
			<W_1
				friend={this.props.friend}
				group={e}
				key={e.unique_id}
				mapChecks={this.props.mapChecks}
			/>
		));
		return (
			<>
				<u.JU>{Localize("#FriendGroup_Categorize_Categories")}</u.JU>
				<div className="FriendCategoryCheckboxes_List">{e}</div>
			</>
		);
	}
};
S = Cg([s.PA], S);
let W_1 = class extends l.Component {
	OnToggle(e) {
		if (e != this.props.group.HasMember(this.props.friend.accountid)) {
			this.props.mapChecks.set(this.props.group.unique_id, e);
		} else {
			this.props.mapChecks.delete(this.props.group.unique_id);
		}
	}
	OnContextMenu(e) {
		iS(CO(e), this.props.group, e);
	}
	render() {
		let e;
		let t = this.props.group;
		let r = this.props.friend;
		e = this.props.mapChecks.has(t.unique_id)
			? this.props.mapChecks.get(t.unique_id)
			: t.HasMember(r.accountid);
		return (
			<div onContextMenu={this.OnContextMenu}>
				<u.Yh label={t.name} checked={e} onChange={this.OnToggle} />
			</div>
		);
	}
};
Cg([c.oI], W_1.prototype, "OnToggle", null);
Cg([c.oI], W_1.prototype, "OnContextMenu", null);
W_1 = Cg([s.PA], W_1);
const P = O;
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
						this.DisplayError(Localize(e.strMessageToken));
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
			let n = `${T.TS.CHAT_BASE_URL}profiles/${r.steamid64}/ajaxsetpersonaname/`;
			P.post(n, t)
				.then((e) => {
					let e_data = e.data;
					if (e_data.success) {
						if (this.props.closeModal) {
							this.props.closeModal();
						}
					} else {
						let e = e_data.message.replace("<br />", "");
						this.DisplayError(e);
					}
				})
				.catch((e) => {
					this.DisplayError(Localize("#Friends_NameChangeFailed_Info"));
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
		return (
			<o.x_
				className="Dialog_ChangePersonaName"
				onEscKeypress={this.props.closeModal}
			>
				<u.U9
					classNameContent="ChangePersonaNameDialog"
					onSubmit={this.HandleSubmit}
				>
					<u.Y9>{Localize("#ChangePersona_Title")}</u.Y9>
					<u.nB>
						<u.a3>{Localize("#ChangePersona_Description")}</u.a3>
						<u.a3>
							<div className={t}>
								<img className="avatarMedium" src={e.persona.avatar_url_full} />
								<div className="labelHolder">
									{r && <div className="error">{this.state.strError}</div>}
									<div>
										<div>{Localize("#ChangePersona_Change")}</div>
										<div className="mediumName">
											<u.pd
												placeholder={Localize("#ChangePersona_PlaceHolder")}
												className="changePersonaInput"
												value={this.state.strCurrentNameEntry}
												onChange={this.HandleTextEntry}
												autoFocus
											/>
										</div>
									</div>
								</div>
							</div>
						</u.a3>
					</u.nB>
					<u.wi>
						<u.CB onCancel={this.props.closeModal} />
					</u.wi>
				</u.U9>
			</o.x_>
		);
	}
};
Cg([c.oI], L.prototype, "HandleTextEntry", null);
Cg([c.oI], L.prototype, "HandleSubmit", null);
L = Cg([s.PA], L);
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
		return (
			<u.Yh
				key={e.strName}
				disabled={this.state.bUseDefaults}
				onChange={(t) => {
					this.OnSettingToggled(e.strName, t);
				}}
				checked={!!this.state.settings[e.strName]}
			/>
		);
	}
	NotificationRow(e) {
		let T_1 = this.FriendsSettingsCheckbox;
		return (
			<div>
				<div className="FriendsSettingsNotificationRow">
					<div className="FriendsSettingsNotificationRow_Label">
						{e.strLabel}
					</div>
					<div className="FriendsSettingsNotificationRow_Checkbox">
						<T_1 strName={e.strNameShow} />
					</div>
					<div className="FriendsSettingsNotificationRow_Checkbox">
						<T_1 strName={e.strNameSound} />
					</div>
				</div>
			</div>
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
		let E_1 = this.NotificationRow;
		let t = this.state.bUseDefaults;
		let r = "friend editFriendNotifications";
		r += rO(this.props.player.persona);
		return (
			<o.x_
				className="Dialog_FriendNotifications"
				onEscKeypress={this.props.closeModal}
			>
				<u.U9
					classNameContent="FriendNotificationsDialog"
					onSubmit={this.HandleSubmit}
				>
					<u.Y9>{Localize("#Friend_Menu_NotificationsTitle")}</u.Y9>
					<u.nB className={t ? "useDefaults" : ""}>
						<u.a3>
							{Localize(
								"#FriendNotifications_Instructions",
								this.props.player.display_name,
							)}
						</u.a3>
						<u.a3>
							<div className={r}>
								<W.i8 persona={this.props.player.persona} size="Large" />
								<div className="labelHolder">
									{this.props.player.primary_display_name}
									{!this.props.player.is_display_name_nickname &&
										this.props.player.has_secondary_display_name && (
											<span className="playerNickname">
												{" ("}
												{this.props.player.secondary_display_name})
											</span>
										)}
									{this.props.player.is_display_name_nickname && (
										<span
											className="playerNicknameBracket"
											title={Localize("#isNickname")}
										>
											*
										</span>
									)}
								</div>
							</div>
						</u.a3>
						<u.Yh
							className="useDefaultsCheckBox"
							label={Localize("#FriendNotifications_UseDefaults")}
							onChange={(e) => {
								this.OnDefaultToggled(e);
							}}
							checked={this.state.bUseDefaults}
						/>
						<div className="SettingsGroup">
							<div className="FriendsSettingsNotificationRow FriendsSettingsNotificationRow_Header">
								<div className="FriendsSettingsNotificationRow_Label">
									{Localize("#FriendSettings_Notification_Table_Label")}
								</div>
								<div className="FriendsSettingsNotificationRow_Checkbox">
									{Localize("#FriendSettings_Notification_Table_Show")}
								</div>
								<div className="FriendsSettingsNotificationRow_Checkbox">
									{Localize("#FriendSettings_Notification_Table_Play")}
								</div>
							</div>
							<E_1
								strLabel={Localize(
									"#FriendSettings_FriendNotification_FriendJoins",
								)}
								strNameShow="bNotifications_ShowIngame"
								strNameSound="bSounds_PlayIngame"
							/>
							<E_1
								strLabel={Localize(
									"#FriendSettings_FriendNotification_FriendOnline",
								)}
								strNameShow="bNotifications_ShowOnline"
								strNameSound="bSounds_PlayOnline"
							/>
							<E_1
								strLabel={Localize("#FriendSettings_Notification_ChatMessage")}
								strNameShow="bNotifications_ShowMessage"
								strNameSound="bSounds_PlayMessage"
							/>
						</div>
					</u.nB>
					<u.wi>
						<u.CB onCancel={this.props.closeModal} />
					</u.wi>
				</u.U9>
			</o.x_>
		);
	}
};
Cg([c.oI], V.prototype, "HandleSubmit", null);
Cg([c.oI], V.prototype, "OnSettingToggled", null);
Cg([c.oI], V.prototype, "FriendsSettingsCheckbox", null);
Cg([c.oI], V.prototype, "NotificationRow", null);
Cg([c.oI], V.prototype, "OnDefaultToggled", null);
V = Cg([s.PA], V);
export function tj(e, t, r, n) {
	return lX(
		<Ne
			browserContext={e}
			context={t}
			friend={r}
			ownerWindow={GetOwningWindowForEvent(n)}
		/>,
		n,
		{
			bForcePopup: T.TS.IN_STEAMUI,
		},
	);
}
let $ = PA((e) => {
	let e_friend = e.friend;
	let r = [];

	let { persona_name_history, persona_name_history_loaded } = e_friend;

	if (persona_name_history_loaded && persona_name_history.length > 0) {
		let e = 0;
		for (let t of persona_name_history) {
			r.push(
				<div className="recentName" key={`name_history_${e}`}>
					{t}
				</div>,
			);
			e++;
		}
	} else if (persona_name_history_loaded) {
		r.push(
			<div className="recentName" key="name_history_none">
				{Localize("#Friend_Menu_RecentAliases_None")}
			</div>,
		);
	} else {
		r.push(
			<div className="recentName" key="name_history_loading">
				{Localize("#Friend_Menu_RecentAliases_Loading")}
			</div>,
		);
	}
	return (
		<>
			<v.Vs label={Localize("#Friend_Menu_RecentAliases")}>{r}</v.Vs>
		</>
	);
});
let Ee = class extends l.Component {
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
				let r_name = r.name;
				let s = this.props.group.BCanIAssignRole(r.role_id);
				if (r.role_id == e) {
					r_name = Localize("#ChatRoomRole_Member");
				} else if (r_name.startsWith("#ChatRoomRole_")) {
					r_name = Localize(r_name);
				}
				return (
					<Ae_1
						key={r.role_id}
						friend={this.props.friend}
						group={this.props.group}
						roleName={r_name}
						roleID={r.role_id}
						bHasRole={i}
						bEditable={s}
					/>
				);
			});
		let a =
			n && !r
				? Localize("#Friend_Menu_EditRoles")
				: Localize("#Friend_Menu_ViewRoles");
		return (
			<>
				<v.Vs label={a}>
					{r ? (
						<v.kt
							className="FriendMenuRoleCheckbox disabled"
							key="role"
							onSelected={() => {}}
							bInteractableItem
						>
							<N.OeC />
							{Localize("#ChatRoomRole_Owner")}
						</v.kt>
					) : (
						i
					)}
				</v.Vs>
			</>
		);
	}
};
export function Jw(e, t, r, n) {
	let i = uQ(t);
	if (t != 1) {
		if (t == 24) {
			let t = (
				<H.uU
					style={{
						color: "white",
					}}
					href={`${T.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`}
				>
					{Localize("#Friend_InviteError_VisitSteamSupport")}
				</H.uU>
			);
			Ic(
				e,
				Localize("#Friend_Menu_AddToFriendsList"),
				Localize("#Friend_Menu_AddToFriendsList"),
				Localize("#Button_OK"),
				LocalizeReact("#Friend_InviteError_LimitedUserLink", t),
			);
		} else {
			Ic(e, Localize("#Friend_Menu_AddToFriendsList"), Localize(i, n));
		}
	} else {
		Ic(
			e,
			Localize("#Friend_Menu_AddToFriendsList"),
			Localize("#Friend_InviteError", n),
		);
	}
}
export function Hf(e, t) {
	const r = `steam://open/library/shared-apps/${JSON.stringify(e)}`;
	SteamClient.WebChat.OpenURLInClient(r, t.m_unPID, false);
}
Cg([c.oI], Ee.prototype, "OnToggle", null);
Ee = Cg([s.PA], Ee);
let Ne = class extends l.PureComponent {
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
		if (
			T.TS.IN_CLIENT &&
			t &&
			BSharedJSContextHasMethod("WebChat.GetPrivateConnectString")
		) {
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
		EP(e, t);
		e.stopPropagation();
	}
	ShowFriendFiltereredLibrary(e) {
		const t = [this.props.friend.accountid];
		L_1("FindGamesToPlayWithFriends/FriendsMenu");
		e.stopPropagation();
		Hf(t, CO(e));
	}
	async InviteFriend() {
		let { eResult, eFriendRelationship } =
			await i.xm.FriendStore.SendFriendInvite(this.props.friend);
		if (eFriendRelationship == 4) {
			Ic(
				this.props.ownerWindow,
				Localize("#Friend_Menu_AddToFriendsList"),
				Localize("#Friend_InviteSent"),
			);
		} else if (eFriendRelationship == 3) {
			Ic(
				this.props.ownerWindow,
				Localize("#Friend_Menu_AddToFriendsList"),
				Localize("#Friend_MutualInviteSent", this.props.friend.display_name),
			);
		} else {
			Jw(this.props.ownerWindow, eResult, 0, this.props.friend.display_name);
		}
	}
	async AcceptIncomingInvite() {
		let { eResult, eFriendRelationship } =
			await i.xm.FriendStore.SendFriendInvite(this.props.friend);
		if (eFriendRelationship == 3) {
			Ic(
				this.props.ownerWindow,
				Localize("#Friend_Menu_AddToFriendsList"),
				Localize("#Friend_MutualInviteSent", this.props.friend.display_name),
			);
		} else {
			Jw(this.props.ownerWindow, eResult, 0, this.props.friend.display_name);
		}
	}
	IgnoreIncomingInvite() {
		i.xm.FriendStore.RemoveFriend(this.props.friend).then((e) => {
			if (e == 1) {
				Ic(
					this.props.ownerWindow,
					Localize("#Friend_Menu_IgnoreIncomingInvite"),
					Localize(
						"#Friend_IgnoreIncomingInvite_Success",
						this.props.friend.display_name,
					),
				);
			} else {
				Ic(
					this.props.ownerWindow,
					Localize("#Friend_Menu_IgnoreIncomingInvite"),
					Localize(
						"#Friend_IgnoreIncomingInvite_Error",
						this.props.friend.display_name,
					),
				);
			}
		});
	}
	RemoveFriend() {
		let e = this.props.friend.efriendrelationship == 4;
		let t = Localize(
			e
				? "#Friend_Menu_CancelInvitation"
				: "#Friend_Menu_RemoveFromFriendsList",
		);
		let r = Localize(
			e
				? "#Friend_CancelInvitation_Confirm"
				: "#Friend_RemoveFromFriendsList_Confirm",
			this.props.friend.display_name,
		);
		let n = Localize(
			e ? "#Button_Confirm" : "#Friend_Menu_RemoveFromFriendsList",
		);
		let a = Localize(
			e
				? "#Friend_CancelInvitation_Error"
				: "#Friend_RemoveFromFriendsList_Error",
		);
		Ci(this.props.ownerWindow, t, r, n, Localize("#Button_Cancel"), true)
			.then(() => {
				i.xm.FriendStore.RemoveFriend(this.props.friend).then((e) => {
					if (e == 3 || e == 6) {
						Ic(this.props.ownerWindow, t, a);
					}
				});
			})
			.catch(() => {});
	}
	BlockFriend() {
		Ci(
			this.props.ownerWindow,
			Localize("#Friend_Menu_BlockAllCommunication"),
			Localize("#Friend_Block_Confirm", this.props.friend.display_name),
			Localize("#Friend_Menu_BlockAllCommunication"),
		)
			.then(() => {
				i.xm.FriendStore.BlockPlayer(this.props.friend);
			})
			.catch(() => {});
	}
	UnblockFriend() {
		Ci(
			this.props.ownerWindow,
			Localize("#Friend_Menu_UnblockAllCommunication"),
			Localize("#Friend_Unblock_Confirm", this.props.friend.display_name),
			Localize("#Friend_Menu_UnblockAllCommunication"),
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
		nn(
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
		let r_friend = r.friend;
		let A = i.xm.FriendStore.FavoritesStore;
		let p = i.xm.FriendStore.self == r_friend;
		let g = n.chatContext == "favorites";
		let n_group = n.group;
		if (!n_group && n.chat instanceof M.d) {
			n_group = n.chat.GetGroup();
		}
		let C = false;
		let r_friend_is_friend = r_friend.is_friend;
		let b = r_friend.efriendrelationship == 2;
		let S = r_friend.efriendrelationship == 4;
		let w = b || r_friend.efriendrelationship == 4;
		let B = i.xm.FriendStore.self.persona.m_unGamePlayedAppID;
		r_friend.persona.m_unGamePlayedAppID;
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
		if (!r_friend_is_friend && !b && !p) {
			s.push(
				<div className="contextMenuLabel contextMenuNotAFriend" key="header">
					{Localize("#Friend_Menu_NotAFriendLabel")}
				</div>,
			);
		}
		if (!!C && !p && !this.context?.IN_GAMEPADUI) {
			s.push(<Ie friend={this.props.friend} />);
		}
		if (n.tab) {
			s.push(
				<v.kt
					key="closetab"
					onSelected={() => {
						i.xm.UIStore.CloseTab(r.browserContext, n.tab);
					}}
				>
					{Localize(
						this.context?.IN_GAMEPADUI
							? "#Chat_CloseTabAction_SteamDeck"
							: "#Chat_CloseTabAction",
					)}
				</v.kt>,
			);
		}
		if (!e && !n.tab && !b && !S && !p && !r_friend.is_blocked) {
			s.push(
				<v.kt
					key="chat"
					className={r_friend_is_friend ? "" : "SendMessageContextNotFriends"}
					onSelected={() => {
						r.friend.OpenChatDialog(r.browserContext);
					}}
				>
					{Localize("#Friend_Menu_SendMessage")}
				</v.kt>,
			);
		}
		let I = i.xm.ChatStore.BIsEligibleForVoiceChat(r_friend, e);
		let R = i.xm.ChatStore.GetActiveVoiceChat();
		if (R && R instanceof E.s && R.accountid_partner == r_friend.accountid) {
			s.push(
				<v.kt
					key="voicechat"
					onSelected={() => {
						R.ToggleVoiceChat();
					}}
				>
					{Localize("#Friend_Menu_StopVoiceChat")}
				</v.kt>,
			);
		} else if (I) {
			if (R instanceof M.d) {
				if (!R.GetMember(r_friend.accountid)) {
					s.push(
						<v.kt
							key="voicechat"
							className="contextVoiceInvite"
							onSelected={() => {
								this.InviteToVoice(R, n);
							}}
						>
							<N.mrd />
							{Localize("#Chat_Actions_InviteFriend_VoiceChat")}
						</v.kt>,
					);
				}
			} else {
				s.push(
					<v.kt
						key="voicechat"
						onSelected={() => {
							i.xm.UIStore.ShowFriendChatDialogAndStartVoice(
								r.browserContext,
								r_friend.accountid,
							);
						}}
					>
						{Localize("#Friend_Menu_StartVoiceChat")}
					</v.kt>,
				);
			}
		}
		if (s.length > 0) {
			s.push(<v.K5 key="separator" />);
		}
		s.push(
			<v.kt key="viewprofile" onSelected={this.ShowFriendProfile}>
				{Localize("#Friend_Menu_ViewProfile")}
			</v.kt>,
		);
		if (
			T.TS.IN_CLIENT &&
			i.xm.SettingsStore.BClientHasFeatureOrOnWeb("FriendsFilter") &&
			!p
		) {
			s.push(
				<v.kt
					key="findgamestoplay"
					onSelected={this.ShowFriendFiltereredLibrary}
				>
					{Localize("#Friend_Menu_GamesToPlayTogether")}
				</v.kt>,
			);
		}
		if (n_group) {
			s.push(
				<Le
					key="moderationoptions"
					friend={r_friend}
					bIsSelf={p}
					group={n_group}
					ownerWindow={r.ownerWindow}
				/>,
			);
		}
		let D = [];
		const F = !!r_friend.persona.m_unGamePlayedAppID && !p;
		if (!p) {
			if (r_friend_is_friend) {
				c.push(
					<v.kt
						key="setnickname"
						onSelected={() => {
							d(r.browserContext, r.friend, r.ownerWindow);
						}}
					>
						{Localize(
							r.friend.has_nickname
								? "#Friend_Menu_ChangeNickname"
								: "#Friend_Menu_AddNickname",
						)}
					</v.kt>,
				);
				if (
					A.BIsFavorited({
						friend: r_friend,
					})
				) {
					(g ? s : c).push(
						<v.kt key="quickaccess" onSelected={Ae.bind(null, r_friend)}>
							{Localize("#Friend_Menu_RemoveFromQuickAccess")}
						</v.kt>,
					);
				} else {
					c.push(
						<v.kt key="quickaccess" onSelected={de.bind(null, r_friend)}>
							{Localize("#Friend_Menu_AddToQuickAccess")}
						</v.kt>,
					);
				}
				c.push(
					<v.kt
						key="managecategories"
						onSelected={() => {
							((e, t, r) => {
								if (i.xm.FriendStore.FriendGroupStore.user_groups.length == 0) {
									f(e, t, r);
								} else {
									HT(
										<Y_1 browserContext={e} friend={r} />,
										t,
										"AssignFriendCategoryDialog",
										{
											strTitle: Localize("#FriendGroup_Menu_CreateGroup"),
											popupWidth: 664,
											popupHeight: 580,
										},
										h8(t),
									);
								}
							})(r.browserContext, r.ownerWindow, r.friend);
						}}
					>
						{Localize("#FriendGroup_Menu_Categorize")}
					</v.kt>,
				);
				c.push(
					<v.kt
						key="notifications"
						onSelected={() => {
							r.browserContext;
							e = r.friend;
							t = r.ownerWindow;
							HT(
								<V player={e} />,
								t,
								"FriendNotificationsDialog",
								{
									strTitle: Localize("#Friend_Menu_Notifications"),
									popupWidth: 640,
									popupHeight: 520,
								},
								h8(t),
							);
							return;
							var e;
							var t;
						}}
					>
						{Localize("#Friend_Menu_Notifications")}
					</v.kt>,
				);
				if (!g) {
					c.push(
						<v.kt key="removefriend" onSelected={this.RemoveFriend}>
							{Localize("#Friend_Menu_RemoveFromFriendsList")}
						</v.kt>,
					);
				}
				c.push(<$ key="aliases" friend={r_friend} />);
				if (
					i.xm.FriendStore.self.persona.is_ingame &&
					i.xm.BroadcastStore.is_broadcast_capable
				) {
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="invitetowatch"
							onSelected={() => {
								this.InviteToWatch();
							}}
						>
							{Localize("#Friend_Menu_InviteToWatch")}
						</v.kt>,
					);
				}
				if (B != 0 && i.xm.FriendStore.self.persona.m_game_lobby_id != "0") {
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="lobbyinvite"
							onSelected={() => {
								this.InviteToLobby(
									B,
									i.xm.FriendStore.self.persona.m_game_lobby_id,
								);
							}}
						>
							{Localize("#Friend_Menu_InviteToLobby")}
						</v.kt>,
					);
				} else if (this.state.strConnectPrivate?.length != 0) {
					const e = this.state.strConnectPrivate;
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="gameinvite"
							onSelected={() => {
								this.InviteToGame(B, e);
							}}
						>
							{Localize("#Friend_Menu_InviteToGame")}
						</v.kt>,
					);
				} else if (i.xm.FriendStore.self.persona.connect_string) {
					const e = i.xm.FriendStore.self.persona.connect_string;
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="gameinvite"
							onSelected={() => {
								this.InviteToGame(B, e);
							}}
						>
							{Localize("#Friend_Menu_InviteToGame")}
						</v.kt>,
					);
				}
				if (i.xm.RemotePlayStore.HasInviteAndSession(r_friend.accountid)) {
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="cancelremoteplay"
							onSelected={() => {
								this.CancelRemotePlay();
							}}
						>
							{Localize("#Friend_Menu_CancelRemotePlay")}
						</v.kt>,
					);
				} else if (
					i.xm.RemotePlayStore.HasInviteAndSessionForGameIDOtherThan(String(B))
				) {
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="cancelallremoteplay"
							onSelected={() => {
								this.CancelAllRemotePlay();
							}}
						>
							{Localize("#Friend_Menu_CancelAllRemotePlay")}
						</v.kt>,
					);
				} else if (this.state.bCanCreateRemotePlayInvite) {
					D.push(
						<v.kt
							className="contextMenuGameOptions"
							key="invitetoremoteplay"
							onSelected={() => {
								this.InviteToRemotePlay();
							}}
						>
							{Localize("#Friend_Menu_InviteToRemotePlay")}
						</v.kt>,
					);
				}
				if (T.TS.EREALM !== ESteamRealm.k_ESteamRealmChina) {
					s.push(<Se key="trading" friend={r_friend} />);
				}
			} else if (b) {
				s.push(
					<v.kt
						key="acceptincominginvite"
						onSelected={this.AcceptIncomingInvite}
					>
						{Localize("#Friend_Menu_AcceptIncomingInvite")}
					</v.kt>,
				);
				s.push(
					<v.kt
						key="ignoreincominginvite"
						onSelected={this.IgnoreIncomingInvite}
					>
						{Localize("#Friend_Menu_IgnoreIncomingInvite")}
					</v.kt>,
				);
				s.push(<$ key="aliases" friend={r_friend} />);
			} else if (S) {
				s.push(
					<v.kt key="remove" onSelected={this.RemoveFriend}>
						{Localize("#Friend_Menu_CancelInvitation")}
					</v.kt>,
				);
			} else {
				s.push(
					<v.kt key="invite" onSelected={this.InviteFriend}>
						{Localize("#Friend_Menu_AddToFriendsList")}
					</v.kt>,
				);
			}
			if (w) {
				s.push(
					<v.kt
						key="setnickname"
						onSelected={() => {
							d(r.browserContext, r.friend, r.ownerWindow);
						}}
					>
						{Localize(
							r.friend.has_nickname
								? "#Friend_Menu_ChangeNickname"
								: "#Friend_Menu_AddNickname",
						)}
					</v.kt>,
				);
			}
			if (!g || !!r_friend.is_blocked) {
				c.push(
					<v.kt
						key="block"
						onSelected={
							r_friend.is_blocked ? this.UnblockFriend : this.BlockFriend
						}
					>
						{Localize(
							r_friend.is_blocked
								? "#Friend_Menu_UnblockAllCommunication"
								: "#Friend_Menu_BlockAllCommunication",
						)}
					</v.kt>,
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
		if (D.length > 0 && (!F || r_friend.persona.m_unGamePlayedAppID != B)) {
			let e;
			if (B == 0) {
				e = (
					<div className="contextMenuGameItem">
						<div className="contextMenuGameName">
							{i.xm.FriendStore.self.current_game_name}
						</div>
					</div>
				);
			} else {
				let t = i.xm.AppInfoStore.GetAppInfo(B);
				e = (
					<div className="contextMenuGameItem">
						<div className="contextMenuGameIcon">
							<img className="GameIcon" src={t.icon_url} />
						</div>
						<div className="contextMenuGameName">{t.name}</div>
					</div>
				);
			}
			O = (
				<l.Fragment key="mygame">
					<v.kt
						className="contextMenuGameTitle contextMenuUnselectable"
						onSelected={null}
						disabled
					>
						<div className="contextMenuGameTitleBlurCropContainer">{e}</div>
					</v.kt>
					<div className="contextMenuSectionContent">{D}</div>
				</l.Fragment>
			);
			D = [];
		}
		return (
			<v.tz className="friendsContextMenu" label={r_friend.display_name}>
				{s}
				{c.length == 1 && c}
				{c.length > 1 && (
					<v.Vs label={Localize("#Friend_Menu_Manage")}>{c}</v.Vs>
				)}
				{!!r_friend.persona.m_broadcastAccountId && !p && (
					<Ue
						friend={r_friend}
						ownerWindow={r.ownerWindow}
						browserContext={r.browserContext}
					/>
				)}
				{O}
				{!!O && F && <v.K5 />}
				{F && (
					<Rm
						unAppID={r_friend.persona.m_unGamePlayedAppID}
						strGameName={r_friend.current_game_name}
						ulGameID={r_friend.persona.m_gameid}
						friend={r_friend}
						partyBeacon={G}
						ownerWindow={r.ownerWindow}
						browserContext={r.browserContext}
						extraItems={D}
						localAppID={B}
					/>
				)}
			</v.tz>
		);
	}
};
Cg([c.oI], Ne.prototype, "ShowFriendProfile", null);
Cg([c.oI], Ne.prototype, "ShowFriendFiltereredLibrary", null);
Cg([c.oI], Ne.prototype, "InviteFriend", null);
Cg([c.oI], Ne.prototype, "AcceptIncomingInvite", null);
Cg([c.oI], Ne.prototype, "IgnoreIncomingInvite", null);
Cg([c.oI], Ne.prototype, "RemoveFriend", null);
Cg([c.oI], Ne.prototype, "BlockFriend", null);
Cg([c.oI], Ne.prototype, "UnblockFriend", null);
Cg([c.oI], Ne.prototype, "InviteToGame", null);
Cg([c.oI], Ne.prototype, "InviteToLobby", null);
Cg([c.oI], Ne.prototype, "InviteToWatch", null);
Cg([c.oI], Ne.prototype, "InviteToRemotePlay", null);
Cg([c.oI], Ne.prototype, "CancelRemotePlay", null);
Cg([c.oI], Ne.prototype, "CancelAllRemotePlay", null);
Cg([c.oI], Ne.prototype, "InviteToVoice", null);
Ne = Cg([s.PA], Ne);
let Ie = class extends l.Component {
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
		return (
			<v.kt key="volume" onSelected={() => {}} bInteractableItem>
				<div
					className={`InlineVolume${r ? " Muted" : ""}`}
					onClick={this.OnInlineVolumeClick}
				>
					<button className={t} onClick={this.OnMutingClick}>
						<N.fSs />
					</button>
					<u.Kc
						min={0}
						max={100}
						label=""
						value={e}
						onChange={this.OnFriendVolumeChanged}
					/>
					<div className="volumePercentage">{e * 2}%</div>
				</div>
			</v.kt>
		);
	}
};
Cg([c.oI], Ie.prototype, "OnFriendVolumeChanged", null);
Cg([c.oI], Ie.prototype, "OnMutingClick", null);
Cg([c.oI], Ie.prototype, "OnInlineVolumeClick", null);
Ie = Cg([s.PA], Ie);
let Ae_1 = class extends l.Component {
	OnChange(e) {
		this.props.group.SetMemberRoleState(
			this.props.friend.accountid,
			this.props.roleID,
			e,
		);
	}
	render() {
		return (
			<v.kt
				className={`FriendMenuRoleCheckbox${
					this.props.bEditable ? "" : " disabled"
				}`}
				key="role"
				onSelected={() => {}}
				bInteractableItem
			>
				<u.Yh
					label={this.props.roleName}
					checked={this.props.bHasRole}
					onChange={this.OnChange}
					disabled={!this.props.bEditable}
				/>
			</v.kt>
		);
	}
};
Cg([c.oI], Ae_1.prototype, "OnChange", null);
Ae_1 = Cg([s.PA], Ae_1);
class Se extends l.Component {
	SendTradeOffer(e) {
		let t = `NewTradeOffer${this.props.friend.accountid}`;
		let r = GetOwningWindowForEvent(e).open(
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
		return (
			<v.Vs label={Localize("#FriendMenu_Trading")}>
				<Oe friend={e} />
				<v.kt onSelected={this.SendTradeOffer}>
					{Localize("#FriendMenu_SendTradeOffer")}
				</v.kt>
			</v.Vs>
		);
	}
}
function Oe(e) {
	return (
		<v.kt
			onSelected={(t) => {
				EP(t, `${e.friend.GetCommunityProfileURL()}inventory/`);
			}}
		>
			{Localize("#FriendMenu_ViewInventory")}
		</v.kt>
	);
}
Cg([c.oI], Se.prototype, "SendTradeOffer", null);
class Le extends l.Component {
	async BanFriend() {
		if (
			await WQ(
				this.props.ownerWindow,
				Localize("#Friend_Ban"),
				Localize("#Friend_Ban_Confirm", this.props.friend.display_name),
				Localize("#Friend_Ban_Button"),
				Localize("#Button_Cancel"),
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
			let i = dt(r, Localize("#Friend_Kick", this.props.friend.display_name));
			HT(
				<Fe
					OnOK={e}
					OnCancel={n}
					OnSet={(e) => {
						t = e;
					}}
				/>,
				r,
				"alertdialog",
				i,
				h8(r),
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
					<v.kt
						disabled={!r.BCanKickMember(t.accountid)}
						key="kick"
						onSelected={this.OnKickFriend}
					>
						{Localize("#Friend_Menu_KickFromChatRoom")}
					</v.kt>,
				);
			}
			if (!this.props.bIsSelf && r.BCanBan()) {
				e.push(
					<v.kt
						disabled={!r.BCanBanMember(t.accountid)}
						key="ban"
						onSelected={this.BanFriend}
					>
						{Localize("#Friend_Menu_Ban")}
					</v.kt>,
				);
			}
			if (r) {
				e.push(
					<Ee
						key="editroles"
						friend={t}
						group={r}
						bEditable={r.BCanEditRoles()}
					/>,
				);
			}
		} else {
			e.push(
				<v.kt disabled key="notmember" onSelected={null}>
					{Localize("#Friend_Menu_HasLeftChat")}
				</v.kt>,
			);
		}
		return e;
	}
}
function Ce_1(e) {
	const { appID } = e;
	const [r] = t7(appID, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return (
			<div className="contextMenuGameHeader">
				<img className="GameHeader" src={n} />
			</div>
		);
	} else {
		return <div className="contextMenuGameHeader" />;
	}
}
Cg([c.oI], Le.prototype, "BanFriend", null);
Cg([c.oI], Le.prototype, "OnKickFriend", null);
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
		let t = Dn(this.props.unAppID, "friendcontextmenu");
		EP(e, t);
		e.stopPropagation();
	}
	ShowCommunityHub(e) {
		let t = `${T.TS.COMMUNITY_BASE_URL}app/${this.props.unAppID}`;
		EP(e, t);
		e.stopPropagation();
	}
	LaunchGame(e) {
		let t = `steam://rungameid/${this.props.ulGameID || this.props.unAppID}`;
		EP(e, t);
		e.stopPropagation();
	}
	WatchGame(e) {
		i.xm.UIStore.SetFriendBroadcastVisible(this.props.friend.steamid64, true);
		this.props.friend.OpenChatDialog(CO(e));
	}
	JoinGame(e) {
		const t = this.props.friend;
		if (
			!t.persona.has_joinable_game_flag ||
			(t.persona.connect_string && t.persona.connect_string.length != 0)
		) {
			const r = xE(
				t.persona.GetAccountID(),
				t.persona.m_unGamePlayedAppID,
				t.persona.connect_string,
				null,
				t.persona.is_in_valid_lobby && t.persona.m_game_lobby_id,
			);
			EP(e, r);
		} else {
			let e = this.props.ownerWindow;
			pg(<Be friend={t} ownerWindow={e} />, e, {
				browserContext: this.props.browserContext,
			});
		}
		e.stopPropagation();
	}
	ViewGameInfo(e) {
		if (
			T.TS.IN_CLIENT &&
			BSharedJSContextHasMethod("ServerBrowser.CreateFriendGameInfoDialog")
		) {
			const e = this.props.browserContext.m_unPID;
			SteamClient.ServerBrowser.CreateFriendGameInfoDialog(
				e,
				this.props.friend.steamid64,
			);
		} else {
			const t = `steam://viewfriendsgame/${this.props.friend.steamid64}`;
			EP(e, t);
		}
		e.stopPropagation();
	}
	ShowInSteam(e) {
		let t = `steam://store/${this.props.unAppID}`;
		EP(e, t);
		e.stopPropagation();
	}
	JoinPartyBeacon(e) {
		let t = `steam://joinparty/${this.props.unAppID}/${this.props.partyBeacon.beacon_id}`;
		EP(e, t);
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
				e = <Ce_1 appID={this.props.unAppID} />;
			} else {
				let t = (
					<span className="contextMenuGameName">
						{Localize(
							"#Friend_Menu_ViewGameStorePageGameName",
							this.props.strGameName || n.name,
						)}
					</span>
				);
				e = (
					<div className="contextMenuGameItem">
						<div className="contextMenuGameIcon">
							<img className="GameIcon" src={n.icon_url} />
						</div>
						{t}
					</div>
				);
			}
		}
		const a = this.props.localAppID == this.props.unAppID;
		if (this.state.bIsSubscribedToApp === undefined) {
			t.push(
				<v.kt
					className="contextMenuGameOptions contextMenuPlayButton"
					key="showinsteam"
					onSelected={this.ShowInSteam}
				>
					<N.jGG />
					{Localize("#Friend_Menu_ShowInSteam")}
				</v.kt>,
			);
		} else if (this.state.bIsSubscribedToApp) {
			if (this.props.partyBeacon) {
				t.push(
					<v.kt
						className="contextMenuGameOptions contextMenuPlayButton contextMenuPartyBeacon"
						key="joinparty"
						onSelected={this.JoinPartyBeacon}
					>
						<N.jGG />
						{Localize("#Friend_Menu_JoinFriendPartyBeacon")}
					</v.kt>,
				);
			} else if (r && r.persona.is_in_joinable_game) {
				t.push(
					<v.kt
						className="contextMenuGameOptions contextMenuPlayButton"
						key="joingame"
						onSelected={this.JoinGame}
					>
						<N.jGG />
						{Localize("#Friend_Menu_JoinFriendGame")}
					</v.kt>,
				);
			}
			if (!a) {
				t.push(
					<v.kt
						className="contextMenuGameOptions contextMenuPlayButton"
						key="launchgame"
						onSelected={this.LaunchGame}
					>
						<N.jGG />
						{Localize("#Friend_Menu_LaunchFriendGame")}
					</v.kt>,
				);
			}
		}
		if (r) {
			t.push(
				<v.kt
					className="contextMenuGameOptions"
					key="watchgame"
					onSelected={this.WatchGame}
				>
					{Localize("#Friend_Menu_WatchFriendGame")}
				</v.kt>,
			);
		}
		let s = r?.persona.has_server_ip ?? false;
		let o = r?.persona?.HasRichPresenceForViewGameInfo() ?? false;
		if (r && (s || o) && !this.context?.IN_GAMEPADUI) {
			t.push(
				<v.kt
					className="contextMenuGameOptions"
					key="viewgameinfo"
					onSelected={this.ViewGameInfo}
				>
					{Localize("#Friend_Menu_ViewGameInfo")}
				</v.kt>,
			);
		}
		if (!a) {
			t.push(
				<v.kt
					className="contextMenuGameOptions"
					key="viewstorepage"
					onSelected={this.ShowStorePage}
				>
					{Localize("#Friend_Menu_ViewGameStorePage")}
				</v.kt>,
			);
		}
		if (!this.context?.IN_GAMEPADUI) {
			t.push(
				<v.kt
					className="contextMenuGameOptions"
					key="viewcommunityhub"
					onSelected={this.ShowCommunityHub}
				>
					{Localize("#Friend_Menu_ViewCommunityHub")}
				</v.kt>,
			);
		}
		return (
			<>
				<v.kt
					className="contextMenuGameTitle contextMenuUnselectable"
					onSelected={null}
					disabled
				>
					<div className="contextMenuGameTitleBlurCropContainer">{e}</div>
				</v.kt>
				<div className="contextMenuSectionContent">
					{t}
					{this.props.extraItems}
				</div>
			</>
		);
	}
};
Cg([c.oI], Rm.prototype, "ShowStorePage", null);
Cg([c.oI], Rm.prototype, "ShowCommunityHub", null);
Cg([c.oI], Rm.prototype, "LaunchGame", null);
Cg([c.oI], Rm.prototype, "WatchGame", null);
Cg([c.oI], Rm.prototype, "JoinGame", null);
Cg([c.oI], Rm.prototype, "ViewGameInfo", null);
Cg([c.oI], Rm.prototype, "ShowInSteam", null);
Cg([c.oI], Rm.prototype, "JoinPartyBeacon", null);
Rm = Cg([s.PA], Rm);
let Ue = class extends l.Component {
	WatchStream() {
		let e = this.props.browserContext;
		let t = this.props.friend;
		const r = t.persona.m_broadcastAccountId;
		i.xm.UIStore.ShowOrActivateBroadcast(e, r, true).ShowWatchPromptDialog(t);
	}
	render() {
		let e = this.props.friend;
		return (
			<>
				<v.kt
					className="contextMenuBroadcast contextMenuUnselectable"
					onSelected={null}
					disabled
				>
					<div className="contextMenuBroadcastTitle">
						{Localize("#Broadcast_Watching")}
					</div>
					<div className="contextMenuBroadcastSubtitle">
						{e.GetBroadcastDescription()}
					</div>
				</v.kt>
				<div className="contextMenuSectionContent">
					<v.kt
						className="contextMenuGameOptions"
						onSelected={this.WatchStream}
					>
						{Localize("#Broadcast_WatchStream")}
					</v.kt>
				</div>
			</>
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
	return lX(
		<Ge
			browserContext={e}
			group={t}
			ownerWindow={GetOwningWindowForEvent(r)}
		/>,
		r,
	);
}
function Ge(e) {
	let t = [];
	if (e.group && e.group.modifiable) {
		t.push(
			<v.kt
				key="managegroup"
				onSelected={() => {
					let t;
					let r;
					let n;
					t = e.browserContext;
					r = e.group;
					n = e.ownerWindow;
					HT(
						<B_1
							browserContext={t}
							group={r}
							rgPreSelectedFriends={r.member_accountid_list}
						/>,
						n,
						"CreateFriendCategoryDialog",
						{
							strTitle: Localize("#FriendGroup_Menu_Manage"),
							popupWidth: 664,
							popupHeight: 700,
						},
						h8(n),
					);
				}}
			>
				{Localize("#FriendGroup_Menu_Manage")}
			</v.kt>,
		);
		t.push(
			<v.kt
				key="removegroup"
				onSelected={() => {
					i.xm.FriendStore.FriendGroupStore.RemoveGroup(e.group);
				}}
			>
				{Localize("#FriendGroup_Menu_Remove")}
			</v.kt>,
		);
	}
	return (
		<v.tz className="friendsContextMenu" label={e.group?.name}>
			{t}
			<v.kt
				key="creategroup"
				onSelected={() => {
					f(e.browserContext, e.ownerWindow);
				}}
			>
				{Localize("#FriendGroup_Menu_CreateGroup")}
			</v.kt>
		</v.tz>
	);
}
export function HS(e, t, r) {
	return lX(
		<Ce
			browserContext={e}
			ownerWindow={t.currentTarget.ownerDocument.defaultView}
			setPersonaNameEresultCallback={r}
		/>,
		t,
	);
}
Cg([c.oI], Ue.prototype, "WatchStream", null);
Ue = Cg([s.PA], Ue);
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
		EP(e, t);
		e.stopPropagation();
	}
	EditProfile(e) {
		let t = `${i.xm.FriendStore.self.GetCommunityProfileURL()}edit`;
		EP(e, t);
		e.stopPropagation();
	}
	EditName(e) {
		let t;
		let r;
		this.props.browserContext;
		t = this.props.ownerWindow;
		r = this.props.setPersonaNameEresultCallback;
		HT(
			<L eResultCallback={r} />,
			t,
			"ChangePersonaDialog",
			{
				strTitle: Localize("#Friend_Menu_AddNickname"),
				popupWidth: 640,
				popupHeight: 400,
			},
			h8(t),
		);
	}
	render() {
		let e = [];
		let t = [];
		let r = i.xm.FriendStore.self.persona.m_ePersonaState == 1;
		e.push(
			<v.IK key="state_online" bChecked={r} onSelected={this.SetUserOnline}>
				{Localize("#PersonaStateOnline")}
			</v.IK>,
		);
		let n = i.xm.FriendStore.self.persona.m_ePersonaState == 3;
		e.push(
			<v.IK key="state_away" bChecked={n} onSelected={this.SetUserAway}>
				{Localize("#PersonaStateAway")}
			</v.IK>,
		);
		let a = i.xm.FriendStore.self.persona.m_ePersonaState == 7;
		e.push(
			<v.IK
				key="state_invisible"
				className="personaContextMenuItem"
				bChecked={a}
				onSelected={this.SetUserInvisible}
			>
				{Localize("#PersonaStateInvisible")}
				<div className="persona_menu_descriptor">
					{Localize("#PersonaStateInvisibleDescriptor")}
				</div>
			</v.IK>,
		);
		if (
			T.TS.IN_CLIENT &&
			i.xm.SettingsStore.BClientHasFeatureOrOnWeb("DoNotDisturb")
		) {
			let t = i.xm.FriendStore.self.persona.m_ePersonaState == 0;
			e.push(
				<v.IK
					key="state_offline"
					className="personaContextMenuItem"
					bChecked={t}
					onSelected={this.SetUserOffline}
				>
					{Localize("#PersonaStateOffline")}
					<div className="persona_menu_descriptor">
						{Localize("#PersonaStateOfflineDescriptor")}
					</div>
				</v.IK>,
			);
		}
		if (i.xm.SettingsStore.BClientHasFeatureOrOnWeb("DoNotDisturb")) {
			let e = i.xm.FriendStore.GetUserDoNotDisturb();
			t.push(
				<v.IK
					key="do_not_disturb"
					className="personaContextMenuItem"
					bChecked={false}
					onSelected={this.ToggleUserDND}
				>
					<u.Yh
						key="dnd_checkbox"
						className="DNDCheckBox"
						checked={e}
						label={Localize("#User_ToggleDoNotDisturb")}
					/>
					<div className="persona_menu_dnd_descriptor">
						{Localize("#PersonaStateDoNotDisturbDescriptor")}
					</div>
				</v.IK>,
			);
		}
		t.push(
			<v.kt key="editname" onSelected={this.EditName}>
				{Localize("#Friend_Menu_ChangeMyName")}
			</v.kt>,
		);
		if (t) {
			return (
				<v.tz
					className="friendsContextMenu currentUserContextMenu"
					label={i.xm.FriendStore.self.display_name}
				>
					<div className="contextMenuSectionContent">{e}</div>
					{t}
				</v.tz>
			);
		} else {
			return null;
		}
	}
}
Cg([c.oI], Ce.prototype, "SetUserOnline", null);
Cg([c.oI], Ce.prototype, "SetUserInvisible", null);
Cg([c.oI], Ce.prototype, "SetUserAway", null);
Cg([c.oI], Ce.prototype, "SetUserOffline", null);
Cg([c.oI], Ce.prototype, "ToggleUserDND", null);
Cg([c.oI], Ce.prototype, "ShowUserProfile", null);
Cg([c.oI], Ce.prototype, "EditProfile", null);
Cg([c.oI], Ce.prototype, "EditName", null);
const _e = 3600;
class Fe extends l.Component {
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
				label: Localize("#Friend_Kick_Hour"),
				data: _e,
			},
			{
				label: Localize("#Friend_Kick_Day"),
				data: 86400,
			},
			{
				label: Localize("#Friend_Kick_Week"),
				data: 604800,
			},
		];
		return (
			<o.x_ onEscKeypress={this.OnCancel}>
				<u.U9
					classNameContent="KickUserDialog"
					onSubmit={this.OnOK}
					bCenterVertically
				>
					<u.Y9> {Localize("#Friend_Kick")} </u.Y9>
					<u.nB>
						<u.a3>{Localize("#Friend_Kick_How_Long")}</u.a3>
						<u.m
							strDefaultLabel={Localize("#Friend_Kick_Hour")}
							rgOptions={e}
							onChange={this.OnDropDownChange}
							selectedOption={undefined}
						/>
					</u.nB>
					<u.wi>
						<u.CB
							onCancel={this.OnCancel}
							strOKText={Localize("#Friend_Kick_Button")}
							strCancelText={Localize("#Button_Cancel")}
						/>
					</u.wi>
				</u.U9>
			</o.x_>
		);
	}
}
Cg([c.oI], Fe.prototype, "OnCancel", null);
Cg([c.oI], Fe.prototype, "OnOK", null);
Cg([c.oI], Fe.prototype, "OnDropDownChange", null);
const Be = PA((e) => {
	const { friend, ownerWindow, closeModal } = e;
	const i = friend.persona.connect_string;
	l.useEffect(() => {
		if (i?.length) {
			const e = xE(
				friend.persona.GetAccountID(),
				friend.persona.m_unGamePlayedAppID,
				friend.persona.connect_string,
				null,
				friend.persona.is_in_valid_lobby && friend.persona.m_game_lobby_id,
			);
			EP(ownerWindow, e);
			if (closeModal) {
				closeModal();
			}
		}
	}, [i]);
	return (
		<Z.o0
			bAlertDialog
			strTitle={Localize("#Friend_JoinGameWait_Title")}
			strDescription={Localize("#Friend_JoinGameWait_Desc")}
			strOKButtonText={Localize("#Friend_JoinGameWait_Cancel")}
			onOK={closeModal}
			onCancel={closeModal}
			closeModal={closeModal}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px",
				}}
			>
				<Y.t />
			</div>
		</Z.o0>
	);
});
