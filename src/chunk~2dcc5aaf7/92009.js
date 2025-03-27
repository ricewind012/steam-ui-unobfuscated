import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./95773.js";
import a, { h8 } from "./52912.js";
import s from "./44234.js";
import o, { HT } from "./13869.js";
import l from "./63696.js";
import c, { PA } from "./41230.js";
import m from "./50551.js";
import u from "./52451.js";
import A from "./64608.js";
import p from "./95377.js";
import g from "./98829.js";
import h from "./50376.js";
import C from "./52194.js";
import { A as A_1 } from "./90765.js";
import { yi } from "./5222.js";
const _ = C;
let B = class extends l.Component {
	m_elVoiceSettingsMarkerScroll;
	m_window;
	m_iTimeOutVoiceSettingsScroll;
	m_rgMicOptions = [
		{
			label: "Default",
			data: "default",
		},
	];
	m_rgOutputOptions = [
		{
			label: "Default",
			data: "default",
		},
	];
	constructor(e) {
		super(e);
		this.state = {
			showAdvanced: false,
			micOptionsReady: false,
			outputOptionsReady: false,
			hotkeyCapturing: false,
		};
		navigator.mediaDevices
			.enumerateDevices()
			.then(this.gotMediaDevices)
			.catch(this.gotMediaDevicesError);
	}
	gotMediaDevices(e) {
		for (let r of e) {
			if (r.kind == "audioinput") {
				if (r.deviceId != "default") {
					let r_label = r.label;
					if (r.deviceId == "communications") {
						r_label = Localize("#Voice_DefaultCommunicationsDefault");
					}
					this.m_rgMicOptions.push({
						label: r_label,
						data: r.deviceId,
					});
				}
			} else if (r.kind == "audiooutput" && r.deviceId != "default") {
				let r_label = r.label;
				if (r.deviceId == "communications") {
					r_label = Localize("#Voice_DefaultCommunicationsDefault");
				}
				this.m_rgOutputOptions.push({
					label: r_label,
					data: r.deviceId,
				});
			}
		}

		this.setState({
			micOptionsReady: true,
		});
		this.setState({
			outputOptionsReady: true,
		});
	}
	gotMediaDevicesError() {
		this.setState({
			micOptionsReady: true,
		});
		this.setState({
			outputOptionsReady: true,
		});
	}
	onSubmit() {
		return false;
	}
	VoiceSettingsRefMarker(e) {
		if (e && e.ownerDocument) {
			this.m_elVoiceSettingsMarkerScroll = e;
			this.m_window = e.ownerDocument.defaultView;
		}
	}
	OnShowAdvancedSettings() {
		this.setState({
			showAdvanced: !this.state.showAdvanced,
		});
		this.m_iTimeOutVoiceSettingsScroll = this.m_window.setTimeout(() => {
			if (this.m_elVoiceSettingsMarkerScroll && this.state.showAdvanced) {
				this.m_elVoiceSettingsMarkerScroll.scrollIntoView({
					behavior: "smooth",
				});
			}
			this.m_window.clearTimeout(this.m_iTimeOutVoiceSettingsScroll);
		}, 200);
	}
	OnMicDropdownChanged(e) {
		this.props.voiceStore.SetSelectedMic(e.data);
	}
	OnOutputDeviceDropdownChanged(e) {
		this.props.voiceStore.SetSelectedOutput(e.data);
	}
	OnInputGainChanged(e) {
		this.props.voiceStore.SetVoiceInputGain(
			this.props.voiceStore.ConvertSliderToGainValue(
				e,
				p.F$.k_MaxInputOutputGainValue,
			),
		);
	}
	OnOutputGainChanged(e) {
		this.props.voiceStore.SetVoiceOutputGain(
			this.props.voiceStore.ConvertSliderToGainValue(
				e,
				p.F$.k_MaxInputOutputGainValue,
			),
		);
	}
	SetHotKeyCaptureState(e) {
		if (e == 0) {
			if (
				SteamClient.WebChat != null &&
				SteamClient.WebChat.UnregisterForMouseXButtonDown != null
			) {
				SteamClient.WebChat.UnregisterForMouseXButtonDown();
			}
			this.setState({
				hotkeyCapturing: false,
			});
		} else {
			this.setState({
				hotkeyCapturing: true,
			});
			if (
				SteamClient.WebChat != null &&
				SteamClient.WebChat.RegisterForMouseXButtonDown != null
			) {
				SteamClient.WebChat.RegisterForMouseXButtonDown(this.OnXButtonDown);
			}
		}
	}
	OnXButtonDown(e) {
		if (e > 0 && this.state.hotkeyCapturing) {
			if (
				SteamClient.WebChat != null &&
				SteamClient.WebChat.SetPushToTalkMouseButton != null
			) {
				SteamClient.WebChat.SetPushToTalkMouseButton(e);
				i.xm.VoiceStore.RefreshPushToTalkKeySettings();
			}
			this.SetHotKeyCaptureState(false);
		}
	}
	OnTogglePushToTalk() {
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.SetPushToTalkEnabled != null
		) {
			let e = i.xm.VoiceStore.GetPushToTalkEnabled();
			SteamClient.WebChat.SetPushToTalkEnabled(!e);
			i.xm.VoiceStore.SetPushToTalkEnabled(!e);
		}
	}
	AssignHotkey() {
		if (this.state.hotkeyCapturing == 0) {
			this.SetHotKeyCaptureState(true);
		}
	}
	ClearHotKey() {
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.SetPushToTalkHotKey != null
		) {
			SteamClient.WebChat.SetPushToTalkHotKey(0);
			i.xm.VoiceStore.RefreshPushToTalkKeySettings();
		}
	}
	OnTransmissionTypeChange(e) {
		if (typeof SteamClient != "undefined" && SteamClient.WebChat) {
			if (e === "pushtomute") {
				if (SteamClient.WebChat.SetPushToMuteEnabled) {
					SteamClient.WebChat.SetPushToMuteEnabled(true);
					i.xm.VoiceStore.SetPushToMuteEnabled(true);
				}
			} else if (e === "openmic" || e === "pushtotalk") {
				const t = e === "pushtotalk";
				if (SteamClient.WebChat.SetPushToTalkEnabled) {
					SteamClient.WebChat.SetPushToTalkEnabled(t);
					i.xm.VoiceStore.SetPushToTalkEnabled(t);
				}
			}
		}
	}
	onMouseDown(e) {
		if (this.state.hotkeyCapturing != 0 && e.button != 0) {
			this.onClick(e);
		}
	}
	onClick(e) {
		if (this.state.hotkeyCapturing != 0) {
			if (
				SteamClient.WebChat != null &&
				SteamClient.WebChat.SetPushToTalkMouseButton != null
			) {
				SteamClient.WebChat.SetPushToTalkMouseButton(e.button);
				i.xm.VoiceStore.RefreshPushToTalkKeySettings();
			}
			this.SetHotKeyCaptureState(false);
			e.preventDefault();
			e.stopPropagation();
		}
	}
	onContextMenu(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	onKeyDown(e) {
		if (this.state.hotkeyCapturing != 0) {
			if (
				SteamClient.WebChat != null &&
				SteamClient.WebChat.SetPushToTalkHotKey != null
			) {
				SteamClient.WebChat.SetPushToTalkHotKey(e.keyCode);
				i.xm.VoiceStore.RefreshPushToTalkKeySettings();
			}
			this.SetHotKeyCaptureState(false);
			e.preventDefault();
			e.stopPropagation();
		}
	}
	OnPPTSoundChecked(e) {
		i.xm.VoiceStore.SetPushToTalkOrMuteSoundsEnabled(e);
	}
	componentWillUnmount() {
		if (i.xm.VoiceStore.IsLocalMicTestActive()) {
			i.xm.VoiceStore.EndLocalMicTest();
		}
	}
	OnStartLocalMicTest() {
		i.xm.VoiceStore.InitiateLocalMicTest();
	}
	OnStopLocalMicTest() {
		i.xm.VoiceStore.EndLocalMicTest();
	}
	render() {
		let e = i.xm.VoiceStore.GetPushToTalkEnabled();
		let t = i.xm.VoiceStore.GetPushToMuteEnabled();
		let r = false;
		let n = i.xm.VoiceStore.GetPushToTalkHotKeyDisplayString();
		let a = Localize("#VoicePushToTalkAssigned");
		let s = Localize("#VoicePushToMuteAssigned");
		let o = Localize("#VoiceMuteToggleAssigned");
		let c = i.xm.VoiceStore.GetPushToTalkOrMuteSoundsEnabled();
		i.xm.SettingsStore.BClientHasFeatureOrOnWeb("NewVoiceHotKeyState");
		let m = i.xm.VoiceStore.IsLocalMicTestActive();
		let u = i.xm.FriendStore.self;
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.GetPushToTalkEnabled != null
		) {
			r = true;
		}
		if (this.state.hotkeyCapturing) {
			a = Localize("#VoicePushToTalkPressHotKey");
		}
		const C = t ? "pushtomute" : e ? "pushtotalk" : "openmic";
		return (
			<A.lV
				className={A_1("DialogBody", "VoiceSettings", _.VoiceSettings)}
				onContextMenu={this.onContextMenu}
				onSubmit={this.onSubmit}
				onMouseDown={this.onMouseDown}
				onClick={this.onClick}
				onKeyDown={this.onKeyDown}
			>
				<div className="_FixedHeight">
					<div className="voiceSelfHeader">
						<div className="DialogLabel">{Localize("#VoiceSetupHeader")}</div>
						<div className="voiceMicTestContainer">
							<div
								className="voiceSelfDirections"
								title={Localize("#VoiceWhenMicIsWorking")}
							>
								<g.bP
									friend={u}
									key={u.accountid}
									showVoiceLevel
									context={undefined}
									noActions
									listStatusIndicator={<div className="connectionSpinner" />}
								/>
								<A.$n
									className={`LocalMicTestButton ${m ? "Primary" : "Off"}`}
									onClick={
										m ? this.OnStopLocalMicTest : this.OnStartLocalMicTest
									}
								>
									{m
										? Localize("#VoiceStopLocalMicTest")
										: Localize("#VoiceStartLocalMicTest")}
								</A.$n>
							</div>
						</div>
					</div>
					{this.state.micOptionsReady && (
						<A.m
							strClassName="InputDevice"
							label={Localize("#VoiceDevice")}
							rgOptions={this.m_rgMicOptions}
							strDefaultLabel={Localize("#DefaultMic")}
							selectedOption={this.props.voiceStore.GetSelectedMic()}
							onChange={this.OnMicDropdownChanged}
						/>
					)}
					{!this.state.micOptionsReady && (
						<A.m
							label={Localize("#VoiceDevice")}
							rgOptions={this.m_rgMicOptions}
							strDefaultLabel={Localize("#MicLoading...")}
						/>
					)}
					{this.state.outputOptionsReady && (
						<A.m
							label={Localize("#VoiceOutputDevice")}
							rgOptions={this.m_rgOutputOptions}
							strDefaultLabel={Localize("#DefaultOutputDevice")}
							selectedOption={this.props.voiceStore.GetSelectedOutputDevice()}
							onChange={this.OnOutputDeviceDropdownChanged}
						/>
					)}
					{!this.state.outputOptionsReady && (
						<A.m
							label={Localize("#VoiceOutputDevice")}
							rgOptions={this.m_rgOutputOptions}
							strDefaultLabel={Localize("#OutputDeviceLoading...")}
						/>
					)}
					<A.JU>{Localize("#VoiceVolume")}</A.JU>
					<A.dR className="DialogLabelStrong">
						<A.Kc
							min={0}
							max={100}
							label={Localize("#VoiceInputGain")}
							description={Localize("#VoiceInputGainExplainer")}
							value={this.props.voiceStore.ConvertGainValueToSliderValue(
								this.props.voiceStore.GetVoiceInputGain(),
								p.F$.k_MaxInputOutputGainValue,
							)}
							onChange={this.OnInputGainChanged}
						/>
						<A.Kc
							min={0}
							max={100}
							label={Localize("#VoiceOutputGain")}
							description={Localize("#VoiceOutputGainExplainer")}
							value={this.props.voiceStore.ConvertGainValueToSliderValue(
								this.props.voiceStore.GetVoiceOutputGain(),
								p.F$.k_MaxInputOutputGainValue,
							)}
							onChange={this.OnOutputGainChanged}
						/>
					</A.dR>
					{typeof SteamClient != "undefined" &&
					SteamClient.WebChat != null &&
					SteamClient.WebChat.SetPushToMuteEnabled != null ? (
						<div
							className={`_DialogSection pushToTalkSection${
								r ? "" : " disabled"
							}`}
						>
							<A.JU>
								{Localize("#VoiceTransmissionType_Label")}
								{!r && (
									<span className="disabledNotice">
										{" ("}
										{Localize("#VoiceTransmissionType_Disabled")}
										{") "}
									</span>
								)}
							</A.JU>
							<div className={_.TransmissionTypeSettings}>
								<A.zW value={C} onChange={this.OnTransmissionTypeChange}>
									<A.a value="openmic">
										{Localize("#VoiceTransmissionType_OpenMic")}
									</A.a>
									<A.a value="pushtotalk">
										{Localize("#VoiceTransmissionType_PushToTalk")}
									</A.a>
									<A.a value="pushtomute">
										{Localize("#VoiceTransmissionType_PushToMute")}
									</A.a>
								</A.zW>
								<div className={_.HotkeySettingRow}>
									<div className={_.HotkeySettingDescription}>
										{e ? a : t ? s : o}
									</div>
									<A.$n
										disabled={!r}
										className={A_1(
											_.HotkeyButton,
											this.state.hotkeyCapturing && _.Capturing,
										)}
										onClick={this.AssignHotkey}
									>
										{n}
									</A.$n>
									{!e && !t && (
										<A.$n
											className={_.HotkeyClearButton}
											onClick={this.ClearHotKey}
											title={Localize("#VoiceClearHotKeyTooltip")}
										>
											<h.sED />
										</A.$n>
									)}
								</div>
								<div className={_.HotkeySettingRow}>
									<span className={_.HotkeySettingDescription}>
										{Localize("#VoicePushToSomethingSoundOption")}
									</span>
									<A.Hk value={c} onChange={(e) => this.OnPPTSoundChecked(e)} />
								</div>
							</div>
						</div>
					) : (
						<div
							className={`_DialogSection pushToTalkSection${
								r ? "" : " disabled"
							}`}
						>
							<A.JU>
								{Localize("#VoiceTransmissionType")}
								{!r && (
									<span className="disabledNotice">
										{" ("}
										{Localize("#g_DisabledOnWeb")}
										{") "}
									</span>
								)}
							</A.JU>
							<A.P8
								disabled={!r}
								label={Localize("#VoiceTransmissionTypeExplainer")}
								value={e}
								onChange={this.OnTogglePushToTalk}
							/>
							{e && (
								<div className="pushtoTalkKeyAssignContainer displayRow">
									<A.JU className="DialogLabelExplainer">{a}</A.JU>
									<A.$n
										disabled={!r}
										className={this.state.hotkeyCapturing && "capturingKey"}
										onClick={this.AssignHotkey}
									>
										{n}
									</A.$n>
								</div>
							)}
						</div>
					)}
					<Y voiceStore={this.props.voiceStore} />
					<A.$n
						className={A_1("advancedSettingsButton", _.AdvancedSettingsButton)}
						onClick={this.OnShowAdvancedSettings}
					>
						{this.state.showAdvanced
							? Localize("#VoiceHideAdvancedSettings")
							: Localize("#VoiceShowAdvancedSettings")}
						<h.GB9 />
					</A.$n>
					<S
						voiceStore={this.props.voiceStore}
						visible={this.state.showAdvanced}
					/>
					<div className="scrollToRef" ref={this.VoiceSettingsRefMarker} />
				</div>
			</A.lV>
		);
	}
};
Cg([u.oI], B.prototype, "gotMediaDevices", null);
Cg([u.oI], B.prototype, "gotMediaDevicesError", null);
Cg([u.oI], B.prototype, "onSubmit", null);
Cg([u.oI], B.prototype, "VoiceSettingsRefMarker", null);
Cg([u.oI], B.prototype, "OnShowAdvancedSettings", null);
Cg([u.oI], B.prototype, "OnMicDropdownChanged", null);
Cg([u.oI], B.prototype, "OnOutputDeviceDropdownChanged", null);
Cg([u.oI], B.prototype, "OnInputGainChanged", null);
Cg([u.oI], B.prototype, "OnOutputGainChanged", null);
Cg([u.oI], B.prototype, "OnXButtonDown", null);
Cg([u.oI], B.prototype, "OnTogglePushToTalk", null);
Cg([u.oI], B.prototype, "AssignHotkey", null);
Cg([u.oI], B.prototype, "ClearHotKey", null);
Cg([u.oI], B.prototype, "OnTransmissionTypeChange", null);
Cg([u.oI], B.prototype, "onMouseDown", null);
Cg([u.oI], B.prototype, "onClick", null);
Cg([u.oI], B.prototype, "onContextMenu", null);
Cg([u.oI], B.prototype, "onKeyDown", null);
Cg([u.oI], B.prototype, "OnPPTSoundChecked", null);
Cg([u.oI], B.prototype, "OnStartLocalMicTest", null);
Cg([u.oI], B.prototype, "OnStopLocalMicTest", null);
B = Cg([c.PA], B);
const Y = PA((e) => {
	const { voiceStore } = e;
	const r = voiceStore.GetUseNoiseGateLevel();
	const n = r === p.HT.k_ENoiseGateLevel_Low ? p.HT.k_ENoiseGateLevel_Off : r;
	return (
		<div className="_DialogSection">
			<A.JU>{Localize("#VoiceTransmisionThreshold")}</A.JU>
			<A.JU className="DialogLabelStrong">
				{Localize("#VoiceTransmissionThresholdExplainer")}
			</A.JU>
			<A.zW value={n} onChange={(e) => voiceStore.SetUseNoiseGateLevel(e)}>
				<A.a value={p.HT.k_ENoiseGateLevel_Off}>
					{Localize("#VoiceTransmissionThresholdOff")}
				</A.a>
				<A.a value={p.HT.k_ENoiseGateLevel_Medium}>
					{Localize("#VoiceTransmissionThresholdMedium")}
					<span className={_.RecommendedNote}>
						{Localize("#VoiceTransmissionThresholdRecommended")}
					</span>
				</A.a>
				<A.a value={p.HT.k_ENoiseGateLevel_High}>
					{Localize("#VoiceTransmissionThresholdHigh")}
				</A.a>
			</A.zW>
		</div>
	);
});
const S = PA((e) => {
	const { voiceStore, visible } = e;
	return (
		<div className={`advancedSettings${visible ? " showAdvanced" : ""}`}>
			<A.JU>{Localize("#VoiceAdvancedSettings")}</A.JU>
			<A.JU className="DialogLabelExplainer Left">
				{Localize("#VoiceAdvancedSettingsExplainer")}
			</A.JU>
			<A.P8
				className={_.ToggleRow}
				label={Localize("#VoiceEchoCancellation")}
				value={voiceStore.GetUseEchoCancellation()}
				onChange={(e) => voiceStore.SetUseEchoCancellation(e)}
			/>
			<A.P8
				className={_.ToggleRow}
				label={Localize("#VoiceNoiseCancellation")}
				value={voiceStore.GetUseNoiseCancellation()}
				onChange={(e) => voiceStore.SetUseNoiseCancellation(e)}
			/>
			<A.P8
				className={_.ToggleRow}
				label={Localize("#VoiceAutoGainControl")}
				value={voiceStore.GetUseAutoGainControl()}
				onChange={(e) => voiceStore.SetUseAutoGainControl(e)}
			/>
			<A.$n
				className="copyVoiceLogsButton"
				onClick={() =>
					((e) => {
						const t = e.GetVoiceLogs();
						const r = document.createElement("textarea");
						r.textContent = t;
						r.style.position = "fixed";
						document.body.appendChild(r);
						r.select();
						try {
							document.execCommand("copy");
						} catch (e) {
							console.warn("Copy voice logs to clipboard failed.", e);
						} finally {
							document.body.removeChild(r);
						}
					})(voiceStore)
				}
			>
				{Localize("#CopyVoiceChatLogs")}
			</A.$n>
		</div>
	);
});
export function T(e, t, r) {
	HT(
		<V browserContext={e} startingPage={r} />,
		t,
		Localize("#FriendSettings_Title"),
		{
			strTitle: Localize("#FriendSettings_Title"),
			popupWidth: 842,
			popupHeight: 720,
		},
		h8(t),
	);
}
let V = class extends l.Component {
	constructor(e) {
		super(e, Localize("#Settings"));
	}
	SaveFriendSettings(e, t) {
		i.xm.SettingsStore.BUpdateFriendsSettings(e);
		i.xm.SettingsStore.SetCommunityPreferences(t);
	}
	render() {
		let e = i.xm.UIStore.GetPerContextChatData(this.props.browserContext);
		let t = {
			friendsSettingsInitial: i.xm.SettingsStore.FriendsSettings,
			communityPreferencesInitial: i.xm.SettingsStore.CommunityPreferences,
			onCancel: this.props.closeModal,
			onSubmit: this.SaveFriendSettings,
			bShowClientOpts: s.TS.IN_CLIENT,
			bShowPopupOpts: e.BUsePopups(),
			bShowGroupOpts: true,
			bSubmitImmediate: true,
			bDoNotDisturbSupported:
				s.TS.IN_CLIENT &&
				i.xm.SettingsStore.BClientHasFeatureOrOnWeb("DoNotDisturb"),
		};
		let r = {
			title: Localize("#FriendSettings_Title"),
			className: "FriendSettingsContainer",
			pages: [
				{
					title: Localize("#FriendSettings_Friends"),
					identifier: "friends",
					content: <m.dG {...t} />,
				},
				{
					title: Localize("#FriendSettings_Chat"),
					identifier: "chat",
					content: <m.IW {...t} />,
				},
				{
					title: Localize("#FriendSettings_SizeAndScaling"),
					identifier: "sizeAndScaling",
					content: <m.vQ {...t} />,
				},
				{
					title: Localize("#FriendSettings_Notifications"),
					identifier: "notifications",
					content: <I {...t} />,
				},
				{
					title: Localize("#FriendSettings_Voice"),
					identifier: "voice",
					content: (
						<B
							onCancel={this.props.closeModal}
							voiceStore={i.xm.ChatStore.VoiceChat}
						/>
					),
				},
			],
			startingPage: this.props.startingPage,
		};
		return (
			<o.x_ onEscKeypress={this.props.closeModal}>
				<A.Bv {...r} />
			</o.x_>
		);
	}
};
V = Cg([c.PA], V);
let I = class extends m.jr {
	m_rgOptions = yi(false);
	constructor(e) {
		super(e);
	}
	FriendsSettingsNotificationRow(e) {
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
	render() {
		let e = this.state.friendSettings;
		let T_1 = this.FriendsSettingsNotificationRow;
		return (
			<A.lV className="DialogBody" onSubmit={this.OnSubmit}>
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
					<T_1
						strLabel={Localize("#FriendSettings_Notification_FriendJoins")}
						strNameShow="bNotifications_ShowIngame"
						strNameSound="bSounds_PlayIngame"
					/>
					<T_1
						strLabel={Localize("#FriendSettings_Notification_FriendOnline")}
						strNameShow="bNotifications_ShowOnline"
						strNameSound="bSounds_PlayOnline"
					/>
					<T_1
						strLabel={Localize("#FriendSettings_Notification_ChatMessage")}
						strNameShow="bNotifications_ShowMessage"
						strNameSound="bSounds_PlayMessage"
					/>
					<T_1
						strLabel={Localize(
							"#FriendSettings_Notification_ChatRoomNotification",
						)}
						strNameShow="bNotifications_ShowChatRoomNotification"
						strNameSound="bSounds_PlayChatRoomNotification"
					/>
					{this.props.bShowGroupOpts && (
						<T_1
							strLabel={Localize("#FriendSettings_Notification_GroupEvent")}
							strNameShow="bNotifications_EventsAndAnnouncements"
							strNameSound="bSounds_EventsAndAnnouncements"
						/>
					)}
				</div>
				{this.props.bShowPopupOpts && this.props.bShowClientOpts && (
					<div className="SettingsGroup">
						<div className="FriendsSettingsFlashSection">
							<A.JU className="FriendsSettingsFlashSection_Header">
								{Localize("#FriendSettings_Flash_Header")}
							</A.JU>
							<A.Xp className="FriendsSettingsFlashSection_ButtonRow">
								<A.$n
									className={e.nChatFlashMode == 0 ? "Primary" : "Off"}
									value={0}
									onClick={this.HandleRadioChange}
								>
									{Localize("#FriendSettings_Flash_Always")}
								</A.$n>
								<A.$n
									className={e.nChatFlashMode == 1 ? "Primary" : "Off"}
									value={1}
									onClick={this.HandleRadioChange}
								>
									{Localize("#FriendSettings_Flash_Minimized")}
								</A.$n>
								<A.$n
									className={e.nChatFlashMode == 2 ? "Primary" : "Off"}
									value={2}
									onClick={this.HandleRadioChange}
								>
									{Localize("#FriendSettings_Flash_Never")}
								</A.$n>
							</A.Xp>
						</div>
					</div>
				)}
				{!this.props.bSubmitImmediate && (
					<A.CB onCancel={this.props.onCancel} />
				)}
			</A.lV>
		);
	}
};
Cg([u.oI], I.prototype, "FriendsSettingsNotificationRow", null);
I = Cg([c.PA], I);
