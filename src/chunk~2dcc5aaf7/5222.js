import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./44234.js";
import s from "./64608.js";
import { h8, CO } from "./52912.js";
import l, { HT } from "./13869.js";
import c from "./69164.js";
import u from "./52451.js";
import d from "./95773.js";
import A from "./41230.js";
import { T } from "./92009.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import h from "./43472.js";
const C = h;
export function lV(e, t) {
	let r = t.GetGroup().textRoomList.length;
	if (r > 7) {
		r = 7;
	}
	let n = r * 60;
	if (r < 2) {
		n -= 32;
	}
	HT(
		<B group={t.GetGroup()} />,
		e,
		"ChatRoomGroupNotificationSettings",
		{
			strTitle: Localize("#NotificationSettings_Title"),
			popupWidth: 600,
			popupHeight: 348 + n,
		},
		h8(e),
	);
}
export function yi(e = true) {
	let t = [];
	if (e) {
		t = t.concat([
			{
				label: (
					<span className="ChannelSpecificNotificationSettings_Inherit">
						{Localize("#NotificationSetting_Inherit")}
					</span>
				),
				data: 0,
			},
		]);
	}
	t = t.concat([
		{
			label: Localize("#NotificationSetting_AllMessages"),
			data: 4,
		},
		{
			label: Localize(
				"#NotificationSetting_AnyMention",
				d.xm.FriendStore.self.display_name,
			),
			data: 3,
		},
		{
			label: Localize(
				"#NotificationSetting_DirectMention",
				d.xm.FriendStore.self.display_name,
			),
			data: 2,
		},
		{
			label: Localize("#NotificationSetting_None"),
			data: 1,
		},
	]);
	return t;
}
let B = class extends i.Component {
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
			AssertMsg(e.cSavesInFlight > 0, `expected ${e.cSavesInFlight} > 0`);
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
		T(CO(e), e.currentTarget.ownerDocument.defaultView);
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
			let n = r.map((e) => (
				<Y
					fnHandleSave={this.WrapSavePromise}
					group={t}
					chat={e}
					key={e.unique_id}
				/>
			));
			e = (
				<>
					<div className="notificationsChannelListContainer">{n}</div>
				</>
			);
		}
		return (
			<l.x_ onEscKeypress={this.DismissDialog}>
				<s.U9 classNameContent="ChatRoomNotificationSettingsDialog">
					<s.Y9>{Localize("#NotificationSettings_Title")}</s.Y9>
					<s.JU>
						{LocalizeReact(
							"#NotificationSettings_SubTitle",
							<span className="whiteText">{t.name}</span>,
						)}
					</s.JU>
					<s.nB>
						<s.JU
							className={`NotificationSettingsSavingIndicator ${
								this.state.cSavesInFlight ? "Saving" : ""
							}`}
						>
							{Localize("#GroupSettings_Permissions_Saving")}
							...
						</s.JU>
						<S
							drop_down_options={this.m_rgSelectOptions}
							get_notification_level={(e) => t.GetDesktopNotificationLevel(e)}
							set_notification_level={this.OnGroupNotificationLevelChanged}
							get_muted={() => t.BIsUnreadIndicatorMuted()}
							set_muted={this.OnShowUnreadIndicatorChanged}
						/>
						{n && (
							<>
								<s._E />
								<s.dR className="notificationsChannelHeader">
									<s.JU className="NotificationChannelNameLabel">
										{Localize("#GroupSettings_Channels_TextChannels")}
									</s.JU>
									<s.JU className="OverrideChannelLabel">
										{Localize("#NotificationSetting_ShortLabel")}
									</s.JU>
								</s.dR>
								<s.xz className={C.scrollMaskVertical}>{e}</s.xz>
							</>
						)}
					</s.nB>
					<s.wi>
						{!this.context?.IN_GAMEPADUI &&
							LocalizeReact(
								"#NotificationSetting_Footer_Desc2",
								<span
									className="textLink"
									onClick={this.OnFriendsSettingsClicked}
								>
									{Localize("#Settings")}
								</span>,
							)}
						<c.Z className="_DialogColLayout" flow-children="row">
							<s.jn onClick={this.props.closeModal}>
								{Localize("#Button_Close")}
							</s.jn>
						</c.Z>
					</s.wi>
				</s.U9>
			</l.x_>
		);
	}
};
Cg([u.oI], B.prototype, "IncrementSavesInFlight", null);
Cg([u.oI], B.prototype, "DecrementSavesInFlight", null);
Cg([u.oI], B.prototype, "WrapSavePromise", null);
Cg([u.oI], B.prototype, "OnGroupNotificationLevelChanged", null);
Cg([u.oI], B.prototype, "OnShowUnreadIndicatorChanged", null);
Cg([u.oI], B.prototype, "DismissDialog", null);
Cg([u.oI], B.prototype, "OnFriendsSettingsClicked", null);
B = Cg([A.PA], B);
let Y = class extends i.Component {
	static contextType = a.QO;
	m_rgSelectOptions = yi();
	OnChatNotificationLevelChanged(e) {
		this.props.fnHandleSave(this.props.chat.SetNotificationPreferences(e.data));
	}
	render() {
		let e = this.props.chat;
		e.GetDesktopNotificationLevelSetting();
		if (this.context?.IN_GAMEPADUI) {
			return (
				<c.Z className="notificationsChannel" flow-children="column">
					<s.m
						layout="inline"
						label={e.name}
						rgOptions={this.m_rgSelectOptions}
						selectedOption={e.GetDesktopNotificationLevelSetting()}
						onChange={this.OnChatNotificationLevelChanged}
					/>
				</c.Z>
			);
		} else {
			return (
				<s.dR className="notificationsChannel">
					<div className="NotificationChannelName">{e.name}</div>
					<s.m
						rgOptions={this.m_rgSelectOptions}
						selectedOption={e.GetDesktopNotificationLevelSetting()}
						onChange={this.OnChatNotificationLevelChanged}
					/>
				</s.dR>
			);
		}
	}
};
Cg([u.oI], Y.prototype, "OnChatNotificationLevelChanged", null);
Y = Cg([A.PA], Y);
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
		return (
			<div className="ChatRoomNotificationSettingsDialog">
				<div
					className={`notificationGeneralHeader${
						this.props.bIsDefault ? " isDefault" : ""
					}`}
				>
					<s.JU>
						{this.props.bIsDefault
							? Localize("#NotificationSetting_DefaultLabel")
							: Localize("#NotificationSetting_Label")}
					</s.JU>
				</div>
				<div
					style={{
						marginBottom: 16,
					}}
				>
					<div className="notificationRow">
						<s.m
							rgOptions={this.props.drop_down_options}
							selectedOption={e}
							onChange={this.OnNotificationLevelChanged}
						/>
					</div>
					{t != 4 && (
						<div className="indicatorOptionContainer">
							<s.RF
								className="indicatorOption"
								label={Localize("#NotificationSetting_Indicator")}
								onChange={this.OnShowUnreadIndicatorChanged}
								checked={!this.props.get_muted()}
							/>
							<div
								className={`ChatUnreadMessageIndicator${
									this.props.get_muted() ? " Hidden" : ""
								}`}
							>
								<div className="chatUnreadCircle" />
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
};
Cg([u.oI], S.prototype, "OnNotificationLevelChanged", null);
Cg([u.oI], S.prototype, "OnShowUnreadIndicatorChanged", null);
S = Cg([A.PA], S);
