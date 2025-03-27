import { Localize } from "../../actual_src/utils/localization.js";
import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import n, { Cg } from "./34629.js";
import i, { useEffect } from "./63696.js";
import a from "./46422.js";
import s, { Gn } from "./89193.js";
import o from "./28987.js";
import l from "./44846.js";
import c from "./83599.js";
import m from "./52451.js";
import u, { TL } from "./72476.js";
import d from "./96593.js";
import p from "./97023.js";
import { TE, zI, aj } from "./13200.js";
import { Fe, rg } from "./61398.js";
import { lZ } from "./81884.js";
import { vE, fP, cd } from "./10481.js";
import { J as J_1 } from "./9600.js";
import b, { J as J_1 } from "./81371.js";
import y from "./78057.js";
import S from "./51354.js";
import B from "./61277.js";
import v, { g7 } from "./22091.js";
import _I from "./64608.js";
import E from "./85243.js";
import M from "./10606.js";
import { pg } from "./13869.js";
import R from "./35488.js";
import { A as A_2 } from "./90765.js";
import D from "./81332.js";
import F, { Bx } from "./55489.js";
import G from "./61175.js";
import x from "./34792.js";
import { V5 } from "./19037.js";
import W from "./45967.js";
import { _N } from "./6263.js";
import H, { F as F_2 } from "./63947.js";
import j from "./49171.js";
import q from "./18057.js";
import Q, { hH } from "./96555.js";
import J from "./73317.js";
import { Uo, XK } from "./19731.js";
import { q3 } from "./90095.js";
import { e } from "./87197.js";
class A {
	m_nNextListener = 1;
	m_listeners = {};
	RegisterListener(e) {
		let t = this.m_nNextListener++;
		this.m_listeners[t] = e;
		return t;
	}
	UnregisterListener(e) {
		delete this.m_listeners[e];
	}
	OnBaseGameActionEnd() {
		for (const e in this.m_listeners) {
			this.m_listeners[e]?.OnGameActionEnd?.();
		}
	}
}
const N = D;
function O(e) {
	if (e) {
		return {};
	} else {
		return {
			bForcePopOut: true,
			bHideActionIcons: true,
		};
	}
}
function P(e) {
	Bx(E.I5.Opaque, "MustUpdateClientDialogGamepad");
	return z(e);
}
function L(e) {
	return z(e);
}
function z(e) {
	useEffect(() => {
		SteamClient.Updates.CheckForUpdates();
	}, []);
	return (
		<M.eV className={A_2(N.MustUpdateClientModalContent, e.classAddition)}>
			<_I.Y9
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "12px",
				}}
			>
				<R.ExclamationPoint className={N.TitleWarningIcon} />
				<span>{(0, Localize)("#AppLaunch_MustUpdateClient_Header")}</span>
			</_I.Y9>
			<_I.nB>
				<_I.a3>
					{(0, Localize)("#AppLaunch_MustUpdateClient_Description")}
				</_I.a3>
				<_I.wi>
					<_I.CB
						strOKText={(0, Localize)("#ClientUpdate_ApplyUpdate_Button")}
						onOK={() => {
							e.closeModal();
							SteamClient.User.StartRestart(false);
						}}
						onCancel={e.closeModal}
					/>
				</_I.wi>
			</_I.nB>
		</M.eV>
	);
}
const Z = new c.wd("LaunchGameAction");
async function Y(e, t, r, n, i) {
	const s = await y.H.RequestAppDetails(e);
	const o = v.Fd.Get().GetControllers();
	const l = d.tw.GetAppOverviewByAppID(e);
	const c = g7(l, s);
	if (!u.TS.ON_DECK) {
		await (async (e, t, r, n, i) => {
			if (e.vr_supported || !W.qL.IsSteamVRRunning) {
				return;
			}
			const a = await SteamClient.Apps.GetLaunchOptionsForApp(e.appid);
			const s = await new Promise((e) =>
				SteamClient.Apps.GetGameActionDetails(t, (t) => e(t.nLaunchOption)),
			);
			if (a.length) {
				const t = a[s];
				if (
					!e.BIsSteamVR() &&
					!t.bIsVRLaunchOption &&
					!t.bIsLaunchOptionTypeExemptFromGameTheater
				) {
					B.z.AddInterstitialToQueue({
						eInterstitial: B.H.k_eIntroToVRTheater,
						appid: r,
						onOK: n,
						onCancel: i,
					});
				}
			}
		})(l, t, e, r, n);
		if (
			s?.bGamepadRequired &&
			l.xbox_controller_support >= 1 &&
			o.length == 0
		) {
			B.z.AddInterstitialToQueue({
				eInterstitial: B.H.k_eGamepadRequired,
				appid: e,
				onOK: r,
				onCancel: n,
			});
		}
		if (l.gamepad_preferred) {
			B.z.AddInterstitialToQueue({
				eInterstitial: B.H.k_eGamepadRecommended,
				appid: e,
				onOK: r,
				onCancel: n,
			});
		}
		const [i, a] = v.Fd.Get().BHasPSController();
		if (!l.BHasStoreCategory(59) && s?.bControllerSurveyFilledOut && (i || a)) {
			const [t] = x.rV.GetClientSetting("controller_ps_support");
			const i = s.eEnableThirdPartyControllerConfiguration == 0;
			const a =
				(s.eSteamInputControllerMask & 1) != 0 && !l.BHasStoreCategory(59);
			const o =
				(s.eEnableThirdPartyControllerConfiguration == 1 && t == 2) ||
				s.eEnableThirdPartyControllerConfiguration == 2;
			const c = t == 1 && !i;
			if (
				!i &&
				(o || a || (c && v.Fd.Get().BPSControllerSupportMismatch(l, true)))
			) {
				B.z.AddInterstitialToQueue({
					eInterstitial: B.H.k_eCurrentGamepadSteamInputOptIn,
					appid: e,
					onOK: r,
					onCancel: n,
				});
			} else if (
				!v.Fd.Get().BPSControllerSupportMismatch(l, true) &&
				(i || c) &&
				v.Fd.Get().BPSControllerSupportMismatch(l, false)
			) {
				B.z.AddInterstitialToQueue({
					eInterstitial: B.H.k_eCurrentGamepadUnsupported,
					appid: e,
					onOK: r,
					onCancel: n,
				});
			}
		}
		if (
			!!l.vr_only &&
			!W.qL.IsVRHMDPresent &&
			!W.qL.IsSteamVRRunning &&
			!W.qL.HasVRHMDBeenSeen()
		) {
			B.z.AddInterstitialToQueue({
				eInterstitial: B.H.k_eVRRequired,
				appid: e,
				onOK: r,
				onCancel: n,
			});
		}
	}
	if (c && l.BHasStoreCategory(59)) {
		B.z.AddInterstitialToQueue({
			eInterstitial: B.H.k_eIntroToSteamInputGames,
			appid: e,
			onOK: r,
			onCancel: n,
		});
	}
	if (
		!((e, t, r) => {
			if (a.oy.IsGamepadUIWindowActive()) {
				return false;
			}
			if (B.z.BHasVisibleInterstitials) {
				V5(e, t, r);
			} else {
				t();
			}
			return true;
		})(e, r, n)
	) {
		if (s?.deckDerivedProperties?.requires_non_controller_launcher_nav) {
			B.z.AddInterstitialToQueue({
				eInterstitial: B.H.k_eAppLauncherInteractionIssues,
				appid: e,
				onOK: r,
				onCancel: n,
			});
		}
		if (!B.z.BHasVisibleInterstitials) {
			if (s?.deckDerivedProperties?.requires_manual_keyboard_invoke && !i) {
				B.z.AddInterstitialToQueue({
					eInterstitial: B.H.k_eAppTextInputDoesNotAutomaticallyInvokesKeyboard,
					appid: e,
					onOK: r,
					onCancel: n,
				});
			}
		}
		if (
			!B.z.BHasVisibleInterstitials &&
			TL() &&
			v.Fd.Get().BHasExternalGamepadConnected()
		) {
			B.z.AddInterstitialToQueue({
				eInterstitial: B.H.k_eExternalControllersAndSIAPI,
				appid: e,
				onOK: r,
				onCancel: n,
			});
		}
		if (!B.z.BHasVisibleInterstitials) {
			if (s?.deckDerivedProperties?.small_text && !i && o.length > 0) {
				B.z.AddInterstitialToQueue({
					eInterstitial: B.H.k_eAppHasSmallText,
					appid: e,
					onOK: r,
					onCancel: n,
				});
			}
		}
		if (
			!B.z.BHasVisibleInterstitials &&
			s?.deckDerivedProperties?.hdr_support === 4 &&
			!W.qL.IsSteamVRRunning
		) {
			const t = await Q.fQ.Get().GetState();
			const i = hH(t);
			if (i?.is_hdr_output_active ?? false) {
				B.z.AddInterstitialToQueue({
					eInterstitial: B.H.k_eHDRRequiresUserAction,
					appid: e,
					onOK: r,
					onCancel: n,
				});
			}
		}
		if (!B.z.BHasVisibleInterstitials) {
			r();
		}
	}
}
class K extends A {
	MaybeNavigateToDetails(e) {
		const t = d.tw.GetAppOverviewByGameID(e);
		if (!t) {
			return;
		}
		if (j.z.BRouteMatch(q.BV.Library.App.Root(t.appid))) {
			return;
		}
		if (t.app_type == 4) {
			return;
		}
		const r = (e) =>
			a.oy.WindowStore.SteamUIWindows.forEach((t) => {
				if (t.Navigator && t.IsGamepadUIWindow()) {
					t.Navigator.App(e);
				}
			});
		if (t.BSupportsVR()) {
			SteamClient.Apps.GetLaunchOptionsForApp(t.appid).then((e) => {
				if (
					!e.every((e) => e.eType == p.oI.k_ELaunchOptionType_OpenVROverlay)
				) {
					r(t.appid);
				}
			});
		} else {
			r(t.appid);
		}
	}
	OnGameActionStart(e, t, r, n) {
		this.MaybeNavigateToDetails(t);
	}
	StartFromInProgress(e) {
		this.MaybeNavigateToDetails(e.gameid);
	}
	OnGameActionEnd() {}
	OnGameActionTaskChange(e, t, r, n) {}
	OnGameActionUserRequest(e, t, r, n) {}
	OnGameActionShowError(e, t, r, n) {}
	OnGameActionShowUI(e, t) {}
}
class X extends K {
	m_nGameActionID = 0;
	m_gameid = undefined;
	m_timerID = undefined;
	m_strTaskName = undefined;
	m_strRequest = undefined;
	m_strError = undefined;
	m_bLaunchOptionContinued = false;
	OnGameActionStart(e, t, r, n) {
		Z.Debug("launch start", e, t, r);
		if (this.m_nGameActionID != 0) {
			throw new Error("action already started");
		}
		this.m_nGameActionID = e;
		this.m_gameid = t;
		I.AddActiveLaunch(t, e);
		if (n == 500 || n == 403 || n == 403 || n == 404) {
			I.ShowGameLaunchingDialog(t, true);
		}
		super.OnGameActionStart(e, t, r, n);
	}
	StartFromInProgress(e) {
		Z.Debug("launch in progress", e);
		this.m_nGameActionID = e.nGameActionID;
		this.m_gameid = e.gameid;
		I.AddActiveLaunch(e.gameid, e.nGameActionID);
		SteamClient.Apps.GetGameActionDetails(this.m_nGameActionID, (t) => {
			if (t.bWaitingForUI) {
				this.OnGameActionUserRequest(
					t.gameid,
					e.strActionName,
					e.strTaskName,
					e.strTaskDetails,
				);
			}
		});
		super.StartFromInProgress(e);
	}
	OnGameActionEnd() {
		Z.Debug("launch end", this.m_nGameActionID, this.m_gameid);
		this.StopTimer();
		I.ShowGameLaunchingDialog(this.m_gameid, false);
		I.RemoveActiveLaunch(this.m_gameid);
		super.OnGameActionEnd();
		if (!u.TS.IN_GAMESCOPE && this.m_strTaskName == "Completed") {
			Z.Debug("forcing game to be topmost window", this.m_gameid);
			SteamClient.Apps.RaiseWindowForGame(this.m_gameid);
		}
		B.z.ClearInterstitials();
	}
	GetGameActionID() {
		return this.m_nGameActionID;
	}
	OnGameActionTaskChange(e, t, r, n) {
		Z.Debug("launch task change", this.m_nGameActionID, e, t, r, n);
		this.SetState({
			strTaskName: r,
			strDetails: n,
		});
		switch (r) {
			case "DownloadingDepots":
			case "DownloadingWorkshop":
			case "DelayLaunch": {
				this.m_timerID =
					this.m_timerID || window.setInterval(this.OnTimerTick, 250);
				break;
			}
			default: {
				this.StopTimer();
			}
		}
	}
	ShowCloudIssueDialog(e, t, r, n, i) {
		i ||= window;
		if (t === "cloudconflict") {
			TE(
				{
					bOnAppLaunch: true,
					appid: e,
					onCancel: r,
					keepLocal: () => n("KeepLocal"),
					keepRemote: () => n("KeepRemote"),
					onOK: () => n("IgnoreCloud"),
				},
				i,
			);
			return;
		} else if (t === "syncfailed") {
			zI(
				{
					appid: e,
					onCancel: r,
					onOK: () => n("IgnoreCloud"),
					bOnAppLaunch: true,
				},
				i,
			);
			return;
		} else if (t === "pendingcloudsessions") {
			aj(
				{
					appid: e,
					onCancel: r,
					onOK: () => n("IgnorePendingCloudSessions"),
				},
				i,
			);
			return;
		} else {
			Z.Error("Unknown request for synchronizing cloud: ", t);
			n(t);
			return;
		}
	}
	ShowBorrowDialog(e, t) {
		J_1(e, t);
	}
	ShowAppLaunchErrorDialogInternal(e, t, r) {
		const n = d.tw.GetAppOverviewByGameID(e);
		let s = (0, Localize)(`#Steam_AppUpdateError_${t}`);
		let o = (0, Localize)("#AppLaunchError_Text", s);
		if (r?.length > 0) {
			o = (0, Localize)("#AppLaunchError_Text_Long", s, r);
		}
		switch (t) {
			case 5: {
				if (r == "FamilySharing") {
					this.ShowBorrowDialog(e, a.oy.ActiveWindowInstance?.BrowserWindow);
					return;
				}
				break;
			}
			case 29: {
				if (d.tw.GetAppOverviewByAppID(Number(e)).app_type == 2048) {
					J_1(a.oy.ActiveWindowInstance?.BrowserWindow);
					return;
				}
				break;
			}
			case 18: {
				SteamClient.Installs.OpenInstallWizard([Number(e)]);
				return;
			}
			case 47: {
				((e) => {
					let t = G.n6.IsGamepadUIWindowActive();
					if (t) {
						pg(<P {...e} />, e.ownerWindow || window, O(t));
					} else {
						pg(
							<L {...e} bDisableBackgroundDismiss classAddition={N.Popup} />,
							e.ownerWindow || window,
							{
								...O(t),
								popupHeight: 240,
							},
						);
					}
				})({
					ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
				});
				return;
			}
			case 48: {
				vE(a.oy.ActiveWindowInstance?.BrowserWindow, r);
				return;
			}
			case 30: {
				o = (0, Localize)("#AppLaunchError_RequiresNTFS");
				break;
			}
			case 41: {
				o = (0, Localize)("#AppLaunchError_Requires64BitOS");
				break;
			}
			case 44: {
				o = (0, Localize)("#AppLaunchError_SiteLicenseLocked");
				break;
			}
			case 26: {
				o = (0, Localize)("#AppLaunchError_RegionRestricted");
				break;
			}
			case 45: {
				o =
					r == "Windows"
						? (0, Localize)("#AppLaunchError_ParentalControlBlocked_Platform")
						: (0, Localize)("#AppLaunchError_ParentalControlBlocked");
				break;
			}
			case 12: {
				o = (0, Localize)("#AppLaunchError_NotEnoughDiskSpace", r);
				break;
			}
			case 43: {
				o = (0, Localize)("#AppLaunchError_NotEnoughDiskQuota", r);
				break;
			}
			case 17: {
				o = (0, Localize)("#AppLaunchError_GameDependency", r);
				break;
			}
			case 35: {
				o = (0, Localize)("#AppLaunchError_KickSessions", r);
				break;
			}
			case 46: {
				o =
					r == "macOS"
						? (0, Localize)("#AppLaunchError_CreateProcess_macOS")
						: (0, Localize)("#AppLaunchError_CreateProcess", r);
				break;
			}
			case 56: {
				_N(a.oy.ActiveWindowInstance?.BrowserWindow, r);
				return;
			}
		}
		const l = a.oy.ActiveWindowInstance?.BrowserWindow;
		fP(o, n?.display_name, l);
	}
	async OnGameActionUserRequest(e, t, r, n) {
		const i = d.tw.GetAppOverviewByGameID(e);
		const s = i ? i.appid : parseInt(e);
		const o = await y.H.RequestAppDetails(s);
		Z.Info("OnGameActionUserRequest:", e, t, r, n);
		this.SetState({
			strRequest: r,
			strDetails: n,
		});
		this.StopTimer();
		const c = () => SteamClient.Apps.CancelGameAction(this.m_nGameActionID);
		const m = (e) => {
			SteamClient.Apps.ContinueGameAction(this.m_nGameActionID, e);
			a.oy.SetRunningApp(s);
		};
		switch (r) {
			case "ShowEula": {
				const t = () => SteamClient.Apps.CancelGameAction(this.m_nGameActionID);
				const u = () => m(r);
				const d = (e, t, r) => SteamClient.Apps.MarkEulaAccepted(e, t, r);
				const A = new S.b(s, u, t, d);
				A.Start();
				Fe({
					appid: parseInt(e),
					eulaWorkflow: A,
					onCancel: c,
					ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
				});
				return;
			}
			case "ShowLaunchOption": {
				SteamClient.Apps.GetLaunchOptionsForApp(s).then((e) => {
					lZ(
						{
							appid: s,
							gameActionID: this.m_nGameActionID,
							continue: (e) => {
								this.m_bLaunchOptionContinued = true;
								m(e.toString());
							},
							onCancel: () => {
								if (!this.m_bLaunchOptionContinued) {
									c();
								}
							},
							ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
						},
						e,
					);
				});
				return;
			}
			case "ShowVROculusOnly":
				{
					let e = parseInt(n)
						? "#Steam_OculusOnlyGameWarning_Desc"
						: "#Steam_IncorrectVRSDKWarning_Desc";
					rg({
						strTitle: (0, Localize)("#Steam_OculusOnlyGameWarning_Title"),
						strDescription: (0, Localize)(e, i.display_name),
						strOKButtonText: (0, Localize)("#Button_OK"),
						onOK: () => m("1"),
						onCancel: c,
						ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
					});
				}
				return;
			case "CreatingProcess": {
				m(r);
				return;
			}
			case "RunningInstallScript": {
				rg({
					strTitle: (0, Localize)("#LaunchApp_InstallScript_Failed_Title"),
					strDescription: (0, Localize)("#LaunchApp_InstallScript_Failed_Text"),
					strOKButtonText: (0, Localize)(
						"#LaunchApp_InstallScript_Failed_Continue",
					),
					onOK: () => m("IgnoreInstallError"),
					onCancel: c,
					ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
				});
				return;
			}
			case "KickingOtherSession": {
				rg({
					strTitle: (0, Localize)("#LaunchApp_OtherSessionPlaying_Title"),
					strDescription: (0, Localize)(
						"#LaunchApp_OtherSessionPlaying_Text",
						o?.strDisplayName,
						n,
					),
					strOKButtonText: (0, Localize)("#LaunchApp_ContineLaunch"),
					onOK: () => m("KickOtherSession"),
					onCancel: c,
					ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
				});
				return;
			}
			case "ShowInterstitials": {
				const p = a.oy.ActiveWindowInstance?.IsVRWindow();
				Y(s, this.m_nGameActionID, () => m(r), c, p);
				return;
			}
			case "SynchronizingControllerConfig": {
				this.ShowCloudIssueDialog(
					l.rm,
					n,
					c,
					m,
					a.oy.ActiveWindowInstance?.BrowserWindow,
				);
				return;
			}
			case "SynchronizingCloud": {
				this.ShowCloudIssueDialog(
					s,
					n,
					c,
					m,
					a.oy.ActiveWindowInstance?.BrowserWindow,
				);
				return;
			}
			case "ShowDurationControl":
				{
					let e = {
						ConfirmContinue: () => {
							m("");
						},
						Cancel: () => {
							c();
						},
					};
					I.SetActiveDurationControlHandler(e);
				}
				return;
			case "ProcessingShaderCache": {
				if (!a.oy.ActiveWindowInstance.IsGamepadUIWindow()) {
					cd(
						this.m_nGameActionID,
						parseInt(this.m_gameid),
						r,
						a.oy.ActiveWindowInstance?.BrowserWindow,
					);
				}
				return;
			}
			case "ShowCDKey": {
				F_2(a.oy.ActiveWindowInstance?.BrowserWindow, i, true, (e) => {
					m(e ? "DontShowAgain" : "");
				});
				return;
			}
			case "ShowGameArgs": {
				rg({
					strTitle: (0, Localize)("#LaunchApp_ShowGameArgs_Title"),
					strDescription: (0, Localize)(
						"#LaunchApp_ShowGameArgs_Text",
						o?.strDisplayName,
						n,
					),
					strOKButtonText: (0, Localize)("#LaunchApp_ContineLaunch"),
					onOK: () => m(r),
					onCancel: c,
					ownerWindow: a.oy.ActiveWindowInstance?.BrowserWindow,
				});
				return;
			}
			default: {
				Z.Warning("unhandled game action.  To force continue:");
				Z.Warning(
					`SteamClient.Apps.ContinueGameAction( ${this.m_nGameActionID}, '${r}' );`,
				);
				console.error(`unhandled game action: ${r}`);
			}
		}
		SteamClient.Apps.ContinueGameAction(this.m_nGameActionID, r);
	}
	OnGameActionShowError(e, t, r, n) {
		Z.Warning("launch error", this.m_nGameActionID, e, t, r, n);
		if (r.startsWith("AppError_")) {
			const t = Number.parseInt(r.slice(9));
			this.ShowAppLaunchErrorDialogInternal(e, t, n);
		}
		this.SetState({
			strError: r,
			strDetails: n,
		});
	}
	OnGetGameActionDetails(e) {
		let t = 0;
		const r = parseInt(e.strNumDone);
		const n = parseInt(e.strNumTotal);
		if (n > 0 && r <= n) {
			t = Math.floor((r * 100) / n);
		}
		this.SetState({
			strTaskName: this.m_strTaskName,
			strRequest: this.m_strRequest,
			strError: this.m_strError,
			strDetails: e.strTaskDetails,
		});
	}
	OnTimerTick() {
		SteamClient.Apps.GetGameActionDetails(
			this.m_nGameActionID,
			this.OnGetGameActionDetails,
		);
	}
	StopTimer() {
		if (this.m_timerID) {
			clearInterval(this.m_timerID);
		}
	}
	SetState(e) {
		this.m_strTaskName = e.strTaskName;
		this.m_strRequest = e.strRequest;
		this.m_strError = e.strError;
	}
	GetGameID() {
		return this.m_gameid;
	}
}
Cg([m.oI], X.prototype, "OnGetGameActionDetails", null);
Cg([m.oI], X.prototype, "OnTimerTick", null);
const ne = new c.wd("GameActions");
export const dv = 0;
class ae {
	constructor() {
		Gn(this);
	}
	m_clientHandles = new o.hw();
	m_mapGameActions = new Map();
	m_fnShowDurationControlDialog;
	m_mapActiveLaunches = new Map();
	m_rgShowLaunchingDialog = [];
	m_activeDurationControlHandler = undefined;
	m_InstallManager = undefined;
	m_eulaWorkflow = undefined;
	m_unAppIDExpectedInstall = 0;
	async Init() {
		this.m_clientHandles.Add(
			SteamClient.Apps.RegisterForGameActionStart(this.OnGameActionStart),
		);
		this.m_clientHandles.Add(
			SteamClient.Apps.RegisterForGameActionEnd(this.OnGameActionEnd),
		);
		this.m_clientHandles.Add(
			SteamClient.Apps.RegisterForGameActionTaskChange(
				this.OnGameActionTaskChange,
			),
		);
		this.m_clientHandles.Add(
			SteamClient.Apps.RegisterForGameActionUserRequest(
				this.OnGameActionUserRequest,
			),
		);
		this.m_clientHandles.Add(
			SteamClient.Apps.RegisterForGameActionShowError(
				this.OnGameActionShowError,
			),
		);
		this.m_clientHandles.Add(
			SteamClient.Apps.RegisterForGameActionShowUI(this.OnGameActionShowUI),
		);
		this.m_clientHandles.Add(
			SteamClient.Installs.RegisterForShowInstallWizard(
				this.OnShowInstallWizard,
			),
		);
		this.m_clientHandles.Add(
			SteamClient.Installs.RegisterForShowConfirmUninstall(
				this.OnShowConfirmUninstall,
			),
		);
		this.m_clientHandles.Add(
			SteamClient.Installs.RegisterForShowFailedUninstall(
				this.OnShowFailedUninstall,
			),
		);
	}
	OnShowConfirmUninstall(e, t) {
		Uo(e, window, t);
	}
	OnShowFailedUninstall(e, t) {
		XK(e, t);
	}
	SetShowDurationControlDialogCallback(e) {
		this.m_fnShowDurationControlDialog = e;
		this.SyncGameActions();
	}
	async OnShowInstallWizard(e) {
		if (e.eInstallState == l.H2.k_EInstallMgrStateNone) {
			this.m_InstallManager = null;
			this.m_eulaWorkflow = null;
			return;
		}
		if (e.eInstallState == l.H2.k_EInstallMgrStateShowConfig) {
			if (
				!this.BShowDeckCompatForInstall(this.m_unAppIDExpectedInstall) &&
				!this.BShowDiskSettingsForInstall(e)
			) {
				this.StartRequestedInstall();
				return;
			}
		} else if (e.eInstallState == l.H2.k_EInstallMgrStateShowEULAs) {
			const t = () => SteamClient.Installs.CancelInstall();
			const r = () => SteamClient.Installs.ContinueInstall();
			const n = (e, t, r) => SteamClient.Apps.MarkEulaAccepted(e, t, r);
			this.m_eulaWorkflow = new S.b(e.currentAppID, r, t, n);
			this.m_eulaWorkflow.Start();
		}
		this.m_InstallManager = e;
	}
	BShowDeckCompatForInstall(e) {
		if (a.oy.IsGamepadUIWindowActive() && u.TS.ON_DECK) {
			const t = d.tw.GetAppOverviewByAppID(e);
			return (
				!t ||
				t.steam_deck_compat_category === 2 ||
				t.steam_deck_compat_category === 2 ||
				t.steam_deck_compat_category === 1 ||
				t.steam_deck_compat_category === 2 ||
				t.steam_deck_compat_category === 1 ||
				t.steam_deck_compat_category === 0
			);
		}
		return false;
	}
	BShowDiskSettingsForInstall(e) {
		if (
			!this.m_unAppIDExpectedInstall ||
			!e.rgApps.filter((e) => e.nAppID == this.m_unAppIDExpectedInstall).length
		) {
			return true;
		}
		if (a.oy.IsDesktopUIWindowActive()) {
			return true;
		}
		return (
			(!!(J.fN.MountedInstallFolders.length > 1) &&
				!!e.bCanChangeInstallFolder) ||
			e.nDiskSpaceRequired >= e.nDiskSpaceAvailable ||
			e.iInstallFolder !== J.fN.DefaultInstallFolderIndex ||
			e.iUnmountedFolder !== -1 ||
			(!!e.strPeerContentServer.length &&
				(!e.bPeerContentServerOnline || !e.bPeerContentServerAvailable))
		);
	}
	GetInstallManager() {
		return this.m_InstallManager;
	}
	GetEulaWorkflow() {
		return this.m_eulaWorkflow;
	}
	async SetInstallFolderIndexAndStartInstall(e) {
		await SteamClient.Installs.SetInstallFolder(e);
		this.StartRequestedInstall();
	}
	async SetInstallFolderIndex(e) {
		const t = await SteamClient.Installs.SetInstallFolder(e);
		if (t.eInstallState == l.H2.k_EInstallMgrStateShowConfig) {
			this.m_InstallManager = t;
		}
	}
	async SetCreateShortcuts(e, t) {
		const r = await SteamClient.Installs.SetCreateShortcuts(e, t);
		if (r.eInstallState == l.H2.k_EInstallMgrStateShowConfig) {
			this.m_InstallManager = r;
		}
	}
	async StartRequestedInstall() {
		await SteamClient.Installs.ContinueInstall();
		this.ResetInstallState();
	}
	async CancelRequestedInstall() {
		await SteamClient.Installs.CancelInstall();
		this.ResetInstallState();
	}
	InstallApp(e) {
		this.m_unAppIDExpectedInstall = e;
		SteamClient.Installs.OpenInstallWizard([e]);
	}
	ResetInstallState() {
		this.m_unAppIDExpectedInstall = 0;
	}
	async SyncGameActions() {
		let e = await SteamClient.Apps.GetActiveGameActions();
		for (let t of e) {
			if (!this.m_mapGameActions.has(t.nGameActionID)) {
				this.HandleUnknownAction(t);
			}
		}
	}
	HandleUnknownAction(e) {
		ne.Warning(
			"HandleUnknownAction:",
			e.strActionName,
			e.strTaskName,
			e.nGameActionID,
		);
		if (
			e.strActionName == "LaunchApp" &&
			e.strTaskName == "ShowDurationControl"
		) {
			let t = new ce();
			t.StartFromInProgress(e);
			this.m_mapGameActions.set(e.nGameActionID, t);
			this.m_fnShowDurationControlDialog(t);
			return;
		}
		if (e.strActionName != "LaunchApp") {
		} else if (
			e.strTaskName == "SynchronizingCloud" ||
			a.oy.IsGamepadUIWindowActive() ||
			a.oy.IsGamepadUIWindowActive() ||
			a.oy.IsDesktopUIWindowActive()
		) {
			let t = new X();
			t.StartFromInProgress(e);
			this.m_mapGameActions.set(e.nGameActionID, t);
		} else {
			const t = new K();
			t.StartFromInProgress(e);
			this.m_mapGameActions.set(e.nGameActionID, t);
		}
	}
	VerifyAppFiles(e) {
		let t = new le();
		t.Start(e).then(() => {
			let e = t.GetGameActionID();
			if (e) {
				this.m_mapGameActions.set(e, t);
			}
		});
		return t;
	}
	GetVerifyAppAction(e) {
		for (let [t, r] of this.m_mapGameActions) {
			let t = r;
			if (t && t.m_unAppID == e) {
				return t;
			}
		}
		return null;
	}
	static GetEmptyAction(e, t, r) {
		return {
			nGameActionID: e,
			gameid: t,
			strActionName: r,
			strTaskName: "",
			strTaskDetails: "",
			nSecondsRemaing: 0,
			strNumDone: "",
			strNumTotal: "",
			bWaitingForUI: false,
			nLaunchOption: 0,
		};
	}
	BShouldHandleGameActions() {
		return true;
	}
	OnGameActionStart(e, t, r, n) {
		if (!this.BShouldHandleGameActions()) {
			return;
		}
		ne.Debug("game action start", e, t, r, n);
		if (!this.m_mapGameActions.get(e) && r == "LaunchApp") {
			const i = new X();
			i.OnGameActionStart(e, t, r, n);
			this.m_mapGameActions.set(e, i);
		}
	}
	AddActiveLaunch(e, t) {
		this.m_mapActiveLaunches.set(e, t);
	}
	RemoveActiveLaunch(e) {
		this.m_mapActiveLaunches.delete(e);
	}
	GetActiveLaunches() {
		return this.m_mapActiveLaunches;
	}
	ShowGameLaunchingDialog(e, t) {
		if (t && this.m_rgShowLaunchingDialog.findIndex((t) => t == e) < 0) {
			this.m_rgShowLaunchingDialog.push(e);
		} else if (!t) {
			FindAndRemove(this.m_rgShowLaunchingDialog, e);
		}
	}
	GetShowGameLaunchingDialogList() {
		return this.m_rgShowLaunchingDialog;
	}
	SetActiveDurationControlHandler(e) {
		this.m_activeDurationControlHandler = e;
	}
	GetActiveDurationControlHandler() {
		return this.m_activeDurationControlHandler;
	}
	OnGameActionEnd(e) {
		if (!this.BShouldHandleGameActions()) {
			return;
		}
		ne.Debug("game action end", e);
		let t = this.m_mapGameActions.get(e);
		if (t) {
			t.OnGameActionEnd();
			t.OnBaseGameActionEnd();
			this.m_mapGameActions.delete(e);
		}
	}
	OnGameActionTaskChange(e, t, r, n, i) {
		if (!this.BShouldHandleGameActions()) {
			return;
		}
		ne.Debug("game action task change", e, t, r, n, i);
		let a = this.m_mapGameActions.get(e);
		if (a) {
			a.OnGameActionTaskChange(t, r, n, i);
		}
	}
	OnGameActionUserRequest(e, t, r, n, i) {
		if (!this.BShouldHandleGameActions()) {
			return;
		}
		ne.Debug("game action user request", e, t, r, n, i);
		let a = this.m_mapGameActions.get(e);
		if (a) {
			a.OnGameActionUserRequest(t, r, n, i);
		} else {
			ne.Debug("game action user request - no handler", e, t, r, n, i);
			if (
				r == "LaunchApp" &&
				n == "ShowDurationControl" &&
				this.m_fnShowDurationControlDialog
			) {
				let n = ae.GetEmptyAction(e, t, r);
				let i = new ce();
				i.StartFromInProgress(n);
				this.m_mapGameActions.set(e, i);
				this.m_fnShowDurationControlDialog(i);
			}
		}
	}
	OnGameActionShowError(e, t, r, n, i) {
		if (!this.BShouldHandleGameActions()) {
			return;
		}
		ne.Debug("game action show error", e, t, r, n, i);
		let a = this.m_mapGameActions.get(e);
		if (a) {
			a.OnGameActionShowError(t, r, n, i);
		}
	}
	OnGameActionShowUI(e, t, r) {
		if (!this.BShouldHandleGameActions()) {
			return;
		}
		ne.Debug("game action show ui", e, t, r);
		let n = this.m_mapGameActions.get(e);
		if (n) {
			n.OnGameActionShowUI(t, r);
		}
	}
	CancelAllGameActions() {
		this.m_mapGameActions.forEach((e, t) => {
			SteamClient.Apps.CancelGameAction(t);
		});
	}
	RegisterGameActionListener(e, t) {
		let r = this.m_mapGameActions.get(e);
		return r?.RegisterListener(t);
	}
	UnregisterGameActionListener(e, t) {
		let r = this.m_mapGameActions.get(e);
		r?.UnregisterListener(t);
	}
}
Cg([s.sH], ae.prototype, "m_mapActiveLaunches", undefined);
Cg([s.sH], ae.prototype, "m_rgShowLaunchingDialog", undefined);
Cg([s.sH], ae.prototype, "m_activeDurationControlHandler", undefined);
Cg([s.sH], ae.prototype, "m_InstallManager", undefined);
Cg([s.sH], ae.prototype, "m_eulaWorkflow", undefined);
Cg([m.oI], ae.prototype, "OnShowInstallWizard", null);
Cg([s.XI], ae.prototype, "ResetInstallState", null);
Cg([m.oI], ae.prototype, "OnGameActionStart", null);
Cg([s.XI.bound], ae.prototype, "OnGameActionEnd", null);
Cg([m.oI], ae.prototype, "OnGameActionTaskChange", null);
Cg([m.oI], ae.prototype, "OnGameActionUserRequest", null);
Cg([m.oI], ae.prototype, "OnGameActionShowError", null);
Cg([m.oI], ae.prototype, "OnGameActionShowUI", null);
Cg([m.oI], ae.prototype, "CancelAllGameActions", null);
export const I = new ae();
export function MH(e, t) {
	useEffect(() => {
		if (typeof e == "number") {
			const r = I.RegisterGameActionListener(e, {
				OnGameActionEnd: t.OnGameActionEnd,
			});
			return () => I.UnregisterGameActionListener(e, r);
		}
		return () => {};
	}, [e, t.OnGameActionEnd]);
}
class le extends A {
	constructor() {
		super();
		Gn(this);
	}
	m_numFiles = 0;
	m_numProgress = 0;
	m_strTask = "";
	m_unAppID = 0;
	m_nGameActionID = 0;
	m_TimerID = 0;
	async Start(e) {
		let t = await SteamClient.Apps.VerifyApp(e);
		this.m_nGameActionID = t.nGameActionID;
		this.m_TimerID = window.setInterval(this.onTimerTick, 500);
	}
	onTimerTick() {
		SteamClient.Apps.GetGameActionDetails(
			this.m_nGameActionID,
			this.onGetGameActionDetails,
		);
	}
	onGetGameActionDetails(e) {
		let t = parseInt(e.strNumDone);
		let r = parseInt(e.strNumTotal);
		if (r > 0 && t <= r) {
			this.m_numProgress = Math.floor((t * 100) / r);
		}
		this.m_strTask = e.strTaskName;
	}
	GetGameActionID() {
		return this.m_nGameActionID;
	}
	OnGameActionEnd() {
		clearInterval(this.m_TimerID);
		this.m_TimerID = 0;
	}
	OnGameActionTaskChange(e, t, r, n) {
		this.m_strTask = r;
		this.m_unAppID = parseInt(e);
		if (r == "Completed" || r == "Failed") {
			this.m_numProgress = 100;
			this.m_numFiles = parseInt(n);
		}
	}
	OnGameActionUserRequest(e, t, r, n) {}
	OnGameActionShowError(e, t, r, n) {}
	OnGameActionShowUI(e, t) {}
	Cancel() {
		if (this.m_nGameActionID) {
			SteamClient.Apps.CancelGameAction(this.m_nGameActionID);
		}
	}
}
Cg([s.sH], le.prototype, "m_numFiles", undefined);
Cg([s.sH], le.prototype, "m_numProgress", undefined);
Cg([s.sH], le.prototype, "m_strTask", undefined);
Cg([s.sH], le.prototype, "m_unAppID", undefined);
Cg([m.oI], le.prototype, "onTimerTick", null);
Cg([m.oI], le.prototype, "onGetGameActionDetails", null);
Cg([s.XI.bound], le.prototype, "OnGameActionEnd", null);
Cg([s.XI.bound], le.prototype, "OnGameActionTaskChange", null);
Cg([s.XI.bound], le.prototype, "OnGameActionUserRequest", null);
Cg([s.XI.bound], le.prototype, "OnGameActionShowError", null);
Cg([s.XI.bound], le.prototype, "OnGameActionShowUI", null);
Cg([m.oI], le.prototype, "Cancel", null);
class ce extends A {
	constructor() {
		super();
		Gn(this);
	}
	m_nGameActionID = 0;
	StartFromInProgress(e) {
		this.m_nGameActionID = e.nGameActionID;
		if (e.strTaskName == "ShowDurationControl") {
			this.OnGameActionUserRequest(
				e.gameid,
				e.strActionName,
				e.strTaskName,
				e.strTaskDetails,
			);
		}
	}
	GetGameActionID() {
		return this.m_nGameActionID;
	}
	OnGameActionEnd() {
		this.m_nGameActionID = 0;
	}
	OnGameActionTaskChange(e, t, r, n) {}
	OnGameActionUserRequest(e, t, r, n) {}
	OnGameActionShowError(e, t, r, n) {}
	OnGameActionShowUI(e, t) {}
	Cancel() {
		if (this.m_nGameActionID) {
			SteamClient.Apps.CancelGameAction(this.m_nGameActionID);
			this.m_nGameActionID = 0;
		}
	}
	ConfirmContinue() {
		if (this.m_nGameActionID) {
			SteamClient.Apps.ContinueGameAction(
				this.m_nGameActionID,
				"ShowDurationControl",
			);
			this.m_nGameActionID = 0;
		}
	}
}
export function _U() {
	return q3(() => I.GetShowGameLaunchingDialogList().slice());
}
export function Dk() {
	return q3(() => I.GetActiveDurationControlHandler());
}
export function WJ(e, t = 100) {
	const [r, n] = i.useState(ae.GetEmptyAction(dv, "", ""));
	const a = i.useRef(undefined);
	a.current = r;
	const s = i.useCallback((e) => {
		if (!e(a.current, e)) {
			n(e);
		}
	}, []);
	i.useEffect(() => {
		const r = () => {
			if (e > dv) {
				SteamClient.Apps.GetGameActionDetails(e, s);
			}
		};
		if (t > 0) {
			const e = setInterval(r, t);
			return () => clearInterval(e);
		}
		r();
	}, [e, t, s]);
	return r;
}
Cg([s.XI.bound], ce.prototype, "OnGameActionEnd", null);
Cg([s.XI.bound], ce.prototype, "OnGameActionTaskChange", null);
Cg([s.XI.bound], ce.prototype, "OnGameActionUserRequest", null);
Cg([s.XI.bound], ce.prototype, "OnGameActionShowError", null);
Cg([m.oI], ce.prototype, "Cancel", null);
Cg([m.oI], ce.prototype, "ConfirmContinue", null);
