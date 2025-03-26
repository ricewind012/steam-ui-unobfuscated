var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./95773.js");
var a = require("./52912.js");
var s = require("./44234.js");
var o = require("./13869.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require(/*webcrack:missing*/ "./41230.js");
var m = require("./50551.js");
var u = require(/*webcrack:missing*/ "./52451.js");
import { Localize } from "../../actual_src/utils/localization.js";
var A = require("./64608.js");
var p = require("./95377.js");
var g = require("./98829.js");
var h = require(/*webcrack:missing*/ "./50376.js");
var C = require("./52194.js");
var _ = C;
var f = require(/*webcrack:missing*/ "./90765.js");
let b = class extends l.Component {
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
		for (let t = 0; t < e.length; ++t) {
			let r = e[t];
			if (r.kind == "audioinput") {
				if (r.deviceId != "default") {
					let e = r.label;
					if (r.deviceId == "communications") {
						e = Localize("#Voice_DefaultCommunicationsDefault");
					}
					this.m_rgMicOptions.push({
						label: e,
						data: r.deviceId,
					});
				}
			} else if (r.kind == "audiooutput" && r.deviceId != "default") {
				let e = r.label;
				if (r.deviceId == "communications") {
					e = Localize("#Voice_DefaultCommunicationsDefault");
				}
				this.m_rgOutputOptions.push({
					label: e,
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
		return l.createElement(
			A.lV,
			{
				className: (0, f.A)("DialogBody", "VoiceSettings", _.VoiceSettings),
				onContextMenu: this.onContextMenu,
				onSubmit: this.onSubmit,
				onMouseDown: this.onMouseDown,
				onClick: this.onClick,
				onKeyDown: this.onKeyDown,
			},
			l.createElement(
				"div",
				{
					className: "_FixedHeight",
				},
				l.createElement(
					"div",
					{
						className: "voiceSelfHeader",
					},
					l.createElement(
						"div",
						{
							className: "DialogLabel",
						},
						Localize("#VoiceSetupHeader"),
					),
					l.createElement(
						"div",
						{
							className: "voiceMicTestContainer",
						},
						l.createElement(
							"div",
							{
								className: "voiceSelfDirections",
								title: Localize("#VoiceWhenMicIsWorking"),
							},
							l.createElement(g.bP, {
								friend: u,
								key: u.accountid,
								showVoiceLevel: true,
								context: undefined,
								noActions: true,
								listStatusIndicator: l.createElement("div", {
									className: "connectionSpinner",
								}),
							}),
							l.createElement(
								A.$n,
								{
									className: "LocalMicTestButton " + (m ? "Primary" : "Off"),
									onClick: m
										? this.OnStopLocalMicTest
										: this.OnStartLocalMicTest,
								},
								m
									? Localize("#VoiceStopLocalMicTest")
									: Localize("#VoiceStartLocalMicTest"),
							),
						),
					),
				),
				this.state.micOptionsReady &&
					l.createElement(A.m, {
						strClassName: "InputDevice",
						label: Localize("#VoiceDevice"),
						rgOptions: this.m_rgMicOptions,
						strDefaultLabel: Localize("#DefaultMic"),
						selectedOption: this.props.voiceStore.GetSelectedMic(),
						onChange: this.OnMicDropdownChanged,
					}),
				!this.state.micOptionsReady &&
					l.createElement(A.m, {
						label: Localize("#VoiceDevice"),
						rgOptions: this.m_rgMicOptions,
						strDefaultLabel: Localize("#MicLoading..."),
					}),
				this.state.outputOptionsReady &&
					l.createElement(A.m, {
						label: Localize("#VoiceOutputDevice"),
						rgOptions: this.m_rgOutputOptions,
						strDefaultLabel: Localize("#DefaultOutputDevice"),
						selectedOption: this.props.voiceStore.GetSelectedOutputDevice(),
						onChange: this.OnOutputDeviceDropdownChanged,
					}),
				!this.state.outputOptionsReady &&
					l.createElement(A.m, {
						label: Localize("#VoiceOutputDevice"),
						rgOptions: this.m_rgOutputOptions,
						strDefaultLabel: Localize("#OutputDeviceLoading..."),
					}),
				l.createElement(A.JU, null, Localize("#VoiceVolume")),
				l.createElement(
					A.dR,
					{
						className: "DialogLabelStrong",
					},
					l.createElement(A.Kc, {
						min: 0,
						max: 100,
						label: Localize("#VoiceInputGain"),
						description: Localize("#VoiceInputGainExplainer"),
						value: this.props.voiceStore.ConvertGainValueToSliderValue(
							this.props.voiceStore.GetVoiceInputGain(),
							p.F$.k_MaxInputOutputGainValue,
						),
						onChange: this.OnInputGainChanged,
					}),
					l.createElement(A.Kc, {
						min: 0,
						max: 100,
						label: Localize("#VoiceOutputGain"),
						description: Localize("#VoiceOutputGainExplainer"),
						value: this.props.voiceStore.ConvertGainValueToSliderValue(
							this.props.voiceStore.GetVoiceOutputGain(),
							p.F$.k_MaxInputOutputGainValue,
						),
						onChange: this.OnOutputGainChanged,
					}),
				),
				typeof SteamClient != "undefined" &&
					SteamClient.WebChat != null &&
					SteamClient.WebChat.SetPushToMuteEnabled != null
					? l.createElement(
							"div",
							{
								className:
									"_DialogSection pushToTalkSection" + (r ? "" : " disabled"),
							},
							l.createElement(
								A.JU,
								null,
								Localize("#VoiceTransmissionType_Label"),
								!r &&
									l.createElement(
										"span",
										{
											className: "disabledNotice",
										},
										" (",
										Localize("#VoiceTransmissionType_Disabled"),
										") ",
									),
							),
							l.createElement(
								"div",
								{
									className: _.TransmissionTypeSettings,
								},
								l.createElement(
									A.zW,
									{
										value: C,
										onChange: this.OnTransmissionTypeChange,
									},
									l.createElement(
										A.a,
										{
											value: "openmic",
										},
										Localize("#VoiceTransmissionType_OpenMic"),
									),
									l.createElement(
										A.a,
										{
											value: "pushtotalk",
										},
										Localize("#VoiceTransmissionType_PushToTalk"),
									),
									l.createElement(
										A.a,
										{
											value: "pushtomute",
										},
										Localize("#VoiceTransmissionType_PushToMute"),
									),
								),
								l.createElement(
									"div",
									{
										className: _.HotkeySettingRow,
									},
									l.createElement(
										"div",
										{
											className: _.HotkeySettingDescription,
										},
										e ? a : t ? s : o,
									),
									l.createElement(
										A.$n,
										{
											disabled: !r,
											className: (0, f.A)(
												_.HotkeyButton,
												this.state.hotkeyCapturing && _.Capturing,
											),
											onClick: this.AssignHotkey,
										},
										n,
									),
									!e &&
										!t &&
										l.createElement(
											A.$n,
											{
												className: _.HotkeyClearButton,
												onClick: this.ClearHotKey,
												title: Localize("#VoiceClearHotKeyTooltip"),
											},
											l.createElement(h.sED, null),
										),
								),
								l.createElement(
									"div",
									{
										className: _.HotkeySettingRow,
									},
									l.createElement(
										"span",
										{
											className: _.HotkeySettingDescription,
										},
										Localize("#VoicePushToSomethingSoundOption"),
									),
									l.createElement(A.Hk, {
										value: c,
										onChange: (e) => this.OnPPTSoundChecked(e),
									}),
								),
							),
						)
					: l.createElement(
							"div",
							{
								className:
									"_DialogSection pushToTalkSection" + (r ? "" : " disabled"),
							},
							l.createElement(
								A.JU,
								null,
								Localize("#VoiceTransmissionType"),
								!r &&
									l.createElement(
										"span",
										{
											className: "disabledNotice",
										},
										" (",
										Localize("#g_DisabledOnWeb"),
										") ",
									),
							),
							l.createElement(A.P8, {
								disabled: !r,
								label: Localize("#VoiceTransmissionTypeExplainer"),
								value: e,
								onChange: this.OnTogglePushToTalk,
							}),
							e &&
								l.createElement(
									"div",
									{
										className: "pushtoTalkKeyAssignContainer displayRow",
									},
									l.createElement(
										A.JU,
										{
											className: "DialogLabelExplainer",
										},
										a,
									),
									l.createElement(
										A.$n,
										{
											disabled: !r,
											className: this.state.hotkeyCapturing && "capturingKey",
											onClick: this.AssignHotkey,
										},
										n,
									),
								),
						),
				l.createElement(y, {
					voiceStore: this.props.voiceStore,
				}),
				l.createElement(
					A.$n,
					{
						className: (0, f.A)(
							"advancedSettingsButton",
							_.AdvancedSettingsButton,
						),
						onClick: this.OnShowAdvancedSettings,
					},
					this.state.showAdvanced
						? Localize("#VoiceHideAdvancedSettings")
						: Localize("#VoiceShowAdvancedSettings"),
					l.createElement(h.GB9, null),
				),
				l.createElement(S, {
					voiceStore: this.props.voiceStore,
					visible: this.state.showAdvanced,
				}),
				l.createElement("div", {
					className: "scrollToRef",
					ref: this.VoiceSettingsRefMarker,
				}),
			),
		);
	}
};
(0, n.Cg)([u.oI], b.prototype, "gotMediaDevices", null);
(0, n.Cg)([u.oI], b.prototype, "gotMediaDevicesError", null);
(0, n.Cg)([u.oI], b.prototype, "onSubmit", null);
(0, n.Cg)([u.oI], b.prototype, "VoiceSettingsRefMarker", null);
(0, n.Cg)([u.oI], b.prototype, "OnShowAdvancedSettings", null);
(0, n.Cg)([u.oI], b.prototype, "OnMicDropdownChanged", null);
(0, n.Cg)([u.oI], b.prototype, "OnOutputDeviceDropdownChanged", null);
(0, n.Cg)([u.oI], b.prototype, "OnInputGainChanged", null);
(0, n.Cg)([u.oI], b.prototype, "OnOutputGainChanged", null);
(0, n.Cg)([u.oI], b.prototype, "OnXButtonDown", null);
(0, n.Cg)([u.oI], b.prototype, "OnTogglePushToTalk", null);
(0, n.Cg)([u.oI], b.prototype, "AssignHotkey", null);
(0, n.Cg)([u.oI], b.prototype, "ClearHotKey", null);
(0, n.Cg)([u.oI], b.prototype, "OnTransmissionTypeChange", null);
(0, n.Cg)([u.oI], b.prototype, "onMouseDown", null);
(0, n.Cg)([u.oI], b.prototype, "onClick", null);
(0, n.Cg)([u.oI], b.prototype, "onContextMenu", null);
(0, n.Cg)([u.oI], b.prototype, "onKeyDown", null);
(0, n.Cg)([u.oI], b.prototype, "OnPPTSoundChecked", null);
(0, n.Cg)([u.oI], b.prototype, "OnStartLocalMicTest", null);
(0, n.Cg)([u.oI], b.prototype, "OnStopLocalMicTest", null);
b = (0, n.Cg)([c.PA], b);
const y = (0, c.PA)((e) => {
	const { voiceStore: t } = e;
	const r = t.GetUseNoiseGateLevel();
	const n = r === p.HT.k_ENoiseGateLevel_Low ? p.HT.k_ENoiseGateLevel_Off : r;
	return l.createElement(
		"div",
		{
			className: "_DialogSection",
		},
		l.createElement(A.JU, null, Localize("#VoiceTransmisionThreshold")),
		l.createElement(
			A.JU,
			{
				className: "DialogLabelStrong",
			},
			Localize("#VoiceTransmissionThresholdExplainer"),
		),
		l.createElement(
			A.zW,
			{
				value: n,
				onChange: (e) => t.SetUseNoiseGateLevel(e),
			},
			l.createElement(
				A.a,
				{
					value: p.HT.k_ENoiseGateLevel_Off,
				},
				Localize("#VoiceTransmissionThresholdOff"),
			),
			l.createElement(
				A.a,
				{
					value: p.HT.k_ENoiseGateLevel_Medium,
				},
				Localize("#VoiceTransmissionThresholdMedium"),
				l.createElement(
					"span",
					{
						className: _.RecommendedNote,
					},
					Localize("#VoiceTransmissionThresholdRecommended"),
				),
			),
			l.createElement(
				A.a,
				{
					value: p.HT.k_ENoiseGateLevel_High,
				},
				Localize("#VoiceTransmissionThresholdHigh"),
			),
		),
	);
});
const S = (0, c.PA)((e) => {
	const { voiceStore: t, visible: r } = e;
	return l.createElement(
		"div",
		{
			className: "advancedSettings" + (r ? " showAdvanced" : ""),
		},
		l.createElement(A.JU, null, Localize("#VoiceAdvancedSettings")),
		l.createElement(
			A.JU,
			{
				className: "DialogLabelExplainer Left",
			},
			Localize("#VoiceAdvancedSettingsExplainer"),
		),
		l.createElement(A.P8, {
			className: _.ToggleRow,
			label: Localize("#VoiceEchoCancellation"),
			value: t.GetUseEchoCancellation(),
			onChange: (e) => t.SetUseEchoCancellation(e),
		}),
		l.createElement(A.P8, {
			className: _.ToggleRow,
			label: Localize("#VoiceNoiseCancellation"),
			value: t.GetUseNoiseCancellation(),
			onChange: (e) => t.SetUseNoiseCancellation(e),
		}),
		l.createElement(A.P8, {
			className: _.ToggleRow,
			label: Localize("#VoiceAutoGainControl"),
			value: t.GetUseAutoGainControl(),
			onChange: (e) => t.SetUseAutoGainControl(e),
		}),
		l.createElement(
			A.$n,
			{
				className: "copyVoiceLogsButton",
				onClick: () =>
					(function (e) {
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
					})(t),
			},
			Localize("#CopyVoiceChatLogs"),
		),
	);
});
var w = require("./5222.js");
export function T(e, t, r) {
	(0, o.HT)(
		l.createElement(v, {
			browserContext: e,
			startingPage: r,
		}),
		t,
		Localize("#FriendSettings_Title"),
		{
			strTitle: Localize("#FriendSettings_Title"),
			popupWidth: 842,
			popupHeight: 720,
		},
		(0, a.h8)(t),
	);
}
let v = class extends l.Component {
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
					content: l.createElement(m.dG, {
						...t,
					}),
				},
				{
					title: Localize("#FriendSettings_Chat"),
					identifier: "chat",
					content: l.createElement(m.IW, {
						...t,
					}),
				},
				{
					title: Localize("#FriendSettings_SizeAndScaling"),
					identifier: "sizeAndScaling",
					content: l.createElement(m.vQ, {
						...t,
					}),
				},
				{
					title: Localize("#FriendSettings_Notifications"),
					identifier: "notifications",
					content: l.createElement(I, {
						...t,
					}),
				},
				{
					title: Localize("#FriendSettings_Voice"),
					identifier: "voice",
					content: l.createElement(b, {
						onCancel: this.props.closeModal,
						voiceStore: i.xm.ChatStore.VoiceChat,
					}),
				},
			],
			startingPage: this.props.startingPage,
		};
		return l.createElement(
			o.x_,
			{
				onEscKeypress: this.props.closeModal,
			},
			l.createElement(A.Bv, {
				...r,
			}),
		);
	}
};
v = (0, n.Cg)([c.PA], v);
let I = class extends m.jr {
	m_rgOptions = (0, w.yi)(false);
	constructor(e) {
		super(e);
	}
	FriendsSettingsNotificationRow(e) {
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
	render() {
		let e = this.state.friendSettings;
		let t = this.FriendsSettingsNotificationRow;
		return l.createElement(
			A.lV,
			{
				className: "DialogBody",
				onSubmit: this.OnSubmit,
			},
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
						Localize("#FriendSettings_Notification_Table_Label"),
					),
					l.createElement(
						"div",
						{
							className: "FriendsSettingsNotificationRow_Checkbox",
						},
						Localize("#FriendSettings_Notification_Table_Show"),
					),
					l.createElement(
						"div",
						{
							className: "FriendsSettingsNotificationRow_Checkbox",
						},
						Localize("#FriendSettings_Notification_Table_Play"),
					),
				),
				l.createElement(t, {
					strLabel: Localize("#FriendSettings_Notification_FriendJoins"),
					strNameShow: "bNotifications_ShowIngame",
					strNameSound: "bSounds_PlayIngame",
				}),
				l.createElement(t, {
					strLabel: Localize("#FriendSettings_Notification_FriendOnline"),
					strNameShow: "bNotifications_ShowOnline",
					strNameSound: "bSounds_PlayOnline",
				}),
				l.createElement(t, {
					strLabel: Localize("#FriendSettings_Notification_ChatMessage"),
					strNameShow: "bNotifications_ShowMessage",
					strNameSound: "bSounds_PlayMessage",
				}),
				l.createElement(t, {
					strLabel: Localize(
						"#FriendSettings_Notification_ChatRoomNotification",
					),
					strNameShow: "bNotifications_ShowChatRoomNotification",
					strNameSound: "bSounds_PlayChatRoomNotification",
				}),
				this.props.bShowGroupOpts &&
					l.createElement(t, {
						strLabel: Localize("#FriendSettings_Notification_GroupEvent"),
						strNameShow: "bNotifications_EventsAndAnnouncements",
						strNameSound: "bSounds_EventsAndAnnouncements",
					}),
			),
			this.props.bShowPopupOpts &&
				this.props.bShowClientOpts &&
				l.createElement(
					"div",
					{
						className: "SettingsGroup",
					},
					l.createElement(
						"div",
						{
							className: "FriendsSettingsFlashSection",
						},
						l.createElement(
							A.JU,
							{
								className: "FriendsSettingsFlashSection_Header",
							},
							Localize("#FriendSettings_Flash_Header"),
						),
						l.createElement(
							A.Xp,
							{
								className: "FriendsSettingsFlashSection_ButtonRow",
							},
							l.createElement(
								A.$n,
								{
									className: e.nChatFlashMode == 0 ? "Primary" : "Off",
									value: 0,
									onClick: this.HandleRadioChange,
								},
								Localize("#FriendSettings_Flash_Always"),
							),
							l.createElement(
								A.$n,
								{
									className: e.nChatFlashMode == 1 ? "Primary" : "Off",
									value: 1,
									onClick: this.HandleRadioChange,
								},
								Localize("#FriendSettings_Flash_Minimized"),
							),
							l.createElement(
								A.$n,
								{
									className: e.nChatFlashMode == 2 ? "Primary" : "Off",
									value: 2,
									onClick: this.HandleRadioChange,
								},
								Localize("#FriendSettings_Flash_Never"),
							),
						),
					),
				),
			!this.props.bSubmitImmediate &&
				l.createElement(A.CB, {
					onCancel: this.props.onCancel,
				}),
		);
	}
};
(0, n.Cg)([u.oI], I.prototype, "FriendsSettingsNotificationRow", null);
I = (0, n.Cg)([c.PA], I);
