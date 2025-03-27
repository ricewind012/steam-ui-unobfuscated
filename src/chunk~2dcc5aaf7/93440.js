import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n from "./85243.js";
import i from "./44846.js";
import a from "./69164.js";
import s from "./17034.js";
import "./43271.js";
import o, { yW } from "./24444.js";
import l, { Di } from "./13925.js";
import c, { Bx } from "./55489.js";
import m, { CU } from "./33706.js";
import u, { px, Tx, sp, _0 } from "./71033.js";
import d from "./5640.js";
import A, { dN } from "./64004.js";
import p from "./56970.js";
import g, { VI } from "./34792.js";
import { Wx } from "./89748.js";
import C, { gk, LC } from "./46422.js";
import _, { dT } from "./74416.js";
import { $2 } from "./96680.js";
import b, { j } from "./46085.js";
import y, { PA } from "./41230.js";
import M from "./63696.js";
import T, { lX } from "./31084.js";
import { GU } from "./23829.js";
import k from "./88750.js";
import D from "./64608.js";
import N from "./35488.js";
import F from "./10606.js";
import { pg } from "./13869.js";
import { Z3 } from "./52451.js";
import z, { rP, Pr } from "./72476.js";
import x from "./39940.js";
import U from "./18914.js";
import W from "./75085.js";
import { pw } from "./31319.js";
import H from "./97818.js";
const S = "/movies/steam_os_suspend_from_throbber.webm";
const w = "/movies/steam_os_suspend.webm";
const B = "/movies/deck-suspend-animation-from-throbber.webm";
const v = "/movies/deck-suspend-animation.webm";
const I = "/movies/oled-suspend-animation-from-throbber.webm";
const E = "/movies/oled-suspend-animation.webm";
export function d4(e, t) {
	return lX(<Y onCancel={t} />, e, {
		onCancel: t,
	});
}
export function gL() {
	if (!px()) {
		SteamClient.System.ShutdownPC();
		pg(<K />, window);
	}
}
export function KS() {
	if (!px()) {
		SteamClient.System.RestartPC();
		pg(<K />, window);
	}
}
function Z() {
	return null;
}
const Y = PA((e) => {
	const t = Wx();
	const [r] = gk();
	const n = dN();
	const i = C.oy.BIsInOOBE;
	const a = d.jR.isKioskModeLocked;
	const o = p.yE.IsLockScreenActive();
	const c = $2();
	const m = c.IsMainGamepadUIWindow();
	const g = n.filter((e) => e.status === "Streaming");
	const _ = g.length > 0;
	const b = rP();
	const y = GU(s.T4) ?? {};
	const S = !b.IN_VR && C.oy.IsGamepadUIWindowActive() && t;
	const w = !b.IN_VR || !!y?.can_sleep;
	const B = !b.IN_VR || !!y?.can_shutdown;
	const v = !b.IN_VR || !!y?.can_restart_system;
	const I = !!b.IN_VR && (!!y?.can_exitvr || r);
	const E = !b.IN_VR;
	const T = !b.IN_VR && z.TS.IN_GAMESCOPE;
	const D = (e) => {
		pg(
			<X
				label={(0, Localize)("#SwitchingToDesktop")}
				delayMs={2000}
				onProceed={() => !px() && SteamClient.System.SwitchToDesktop()}
				onCancel={() => C.oy.OpenPowerMenu(null)}
			/>,
			e,
		);
	};
	return (
		<k.tz label={(0, Localize)("#Power")} onCancel={e.onCancel}>
			{g.map((e) => (
				<M.Fragment key={e.clientName}>
					<k.kt
						onSelected={() =>
							((e) => {
								SteamClient.RemotePlay.StopStreamingSession(
									e.unStreamingSessionID,
								);
							})(e)
						}
					>
						{(0, Localize)("#StopStreamingTo", e.clientName)}
					</k.kt>
					{e.bCanSuspend && (
						<k.kt
							onSelected={() =>
								((e) => {
									SteamClient.RemotePlay.StopStreamingSessionAndSuspendDevice(
										e.unStreamingSessionID,
									);
								})(e)
							}
						>
							{(0, Localize)("#StopStreamingAndSuspendDevice", e.clientName)}
						</k.kt>
					)}
				</M.Fragment>
			))}
			{g.length > 0 && <k.K5 />}
			{w && (
				<F._Z
					strDisplayNameLocToken={z.TS.ON_DECK ? "#Sleep" : "#Quit_Sleep"}
					onSelected={() => {
						u.Ze.InitiateSleep();
					}}
					skipConfirm={z.TS.ON_DECK}
				/>
			)}
			{B && (
				<F._Z
					tone="destructive"
					strDisplayNameLocToken={z.TS.ON_DECK ? "#Shutdown" : "#Quit_Shutdown"}
					onSelected={() => {
						gL();
					}}
				/>
			)}
			{v && (
				<F._Z
					tone="destructive"
					strDisplayNameLocToken={z.TS.ON_DECK ? "#Restart" : "#Quit_Restart"}
					onSelected={() => {
						KS();
					}}
				/>
			)}
			{I && (
				<F._Z
					tone="destructive"
					strDisplayNameLocToken="#ExitVR"
					onSelected={() => {
						if (!px()) {
							SteamClient.OpenVR.QuitAllVR();
							pg(<K />, c.BrowserWindow);
						}
					}}
					skipConfirm
				/>
			)}
			{E && <Z />}
			{!i && (
				<>
					<k.K5 />
					{t && !_ && (
						<>
							<F._Z
								tone="destructive"
								strDisplayNameLocToken="#ChangeUser"
								onSelected={() => {
									SteamClient.User.ChangeUser();
								}}
								confirmDialogContent={
									<>
										{(0, Localize)("#ChangeUser_Desc1")}
										<br />
										<br />
										{(0, Localize)("#ChangeUser_Desc2")}
									</>
								}
							/>
							<F._Z
								tone="destructive"
								strDisplayNameLocToken="#SignOut_Title"
								onSelected={() => {
									SteamClient.User.SignOutAndRestart();
								}}
								confirmDialogContent={
									<>
										{(0, Localize)("#SignOut_Description")}
										<br />
										<br />
										{(0, Localize)("#ChangeUser_Desc2")}
									</>
								}
							/>
						</>
					)}
					{!!r && (
						<F._Z
							tone="destructive"
							strDisplayNameLocToken="#RestartSteam"
							onSelected={() => {
								if (!px()) {
									SteamClient.User.StartRestart(false);
									pg(<K />, c.BrowserWindow);
								}
							}}
						/>
					)}
					{!z.TS.IN_GAMESCOPE && (m || S) && (
						<>
							<k.K5 />
							{m && (
								<k.kt
									onSelected={() => {
										C.oy.WindowStore.GamepadUIMainWindowInstance.BrowserWindow.SteamClient.Window.Minimize();
									}}
								>
									{(0, Localize)("#MinimizeSteam")}
								</k.kt>
							)}
							{S && (
								<k.kt
									onSelected={() => {
										if (!Pr()) {
											C.oy.WindowStore.GamepadUIMainWindowInstance.BrowserWindow.SteamClient.Window.Minimize();
										}
										SteamClient.UI.ExitBigPictureMode();
									}}
								>
									{(0, Localize)("#ExitGamepadUI")}
								</k.kt>
							)}
							<F._Z
								tone="destructive"
								strDisplayNameLocToken="#ExitSteam"
								onSelected={() => {
									if (!px()) {
										SteamClient.User.StartShutdown(true);
										pg(<K />, c.BrowserWindow);
									}
								}}
							/>
						</>
					)}
					{T && !a && !o && (
						<>
							<k.K5 />
							<k.kt
								tone="destructive"
								onSelected={(e) => {
									const t = GetOwningWindowForEvent(e);
									if (p.yE.GetSettings().bLockDesktopMode) {
										Di({
											onSuccess: () => D(t),
										});
									} else {
										D(t);
									}
								}}
							>
								{(0, Localize)("#SwitchToDesktop")}
							</k.kt>
						</>
					)}
				</>
			)}
		</k.tz>
	);
});
function K(e) {
	Bx(n.I5.Overlay, "FadeToBlackDialog");
	LC();
	pw();
	return (
		<a.Z className={H.FadeToBlackDialog} focusable noFocusRing autoFocus />
	);
}
function X(e) {
	const { onProceed, onCancel, closeModal, disableCancel } = e;
	const [a, setA] = M.useState(false);
	const o = M.useCallback(() => {
		if (!a) {
			if (onProceed) {
				onProceed();
			}
			setA(true);
		}
	}, [onProceed, a]);
	const l = M.useCallback(() => {
		if (!disableCancel && !a) {
			if (onCancel) {
				onCancel();
			}
			if (closeModal) {
				closeModal();
			}
		}
	}, [a, closeModal, onCancel, disableCancel]);
	Z3(o, e.delayMs);
	return (
		<F.eV onCancel={l} className={H.DelayedActionDialog}>
			<D.f3
				focusable
				autoFocus
				noFocusRing
				onClick={l}
				onBlur={l}
				onCancel={l}
				onCancelActionDescription={a || (0, Localize)("#Button_Cancel")}
				onOKActionDescription={null}
			>
				<div className={H.DelayedActionContents}>
					<N.Display className={H.Icon} />
					<D.Y9>{e.label}</D.Y9>
				</div>
			</D.f3>
		</F.eV>
	);
}
function J(e) {
	switch (e) {
		case i.jH.k_ESuspendResumeProgressState_WaitingForApp: {
			return (0, Localize)("#SuspendResumeWaitingForApp");
		}
		case i.jH.k_ESuspendResumeProgressState_CloudSync: {
			return (0, Localize)("#SuspendResumeSyncingCloud");
		}
		case i.jH.k_ESuspendResumeProgressState_LoggingIn: {
			return (0, Localize)("#SuspendResumeLoggingIn");
		}
		case i.jH.k_ESuspendResumeProgressState_Invalid:
		case i.jH.k_ESuspendResumeProgressState_Working:
		case i.jH.k_ESuspendResumeProgressState_Complete:
		default: {
			return "";
		}
	}
}
export function ve(e) {
	if (Tx()) {
		return <Ee />;
	} else {
		return null;
	}
}
function Ee(e) {
	let TRef = M.useRef(false);
	let r = sp();
	let s = J(r);
	Bx(n.I5.Overlay, "SuspendDialogInner");
	LC();
	pw();
	let o = null;
	if (r == i.jH.k_ESuspendResumeProgressState_Complete) {
		o = <Re bFromThrobber={TRef.current} />;
		s = "";
	} else if (r != i.jH.k_ESuspendResumeProgressState_Invalid) {
		TRef.current = true;
		o = <Te />;
	}
	return (
		<F.EN active>
			<a.Z className={H.SuspendDialog} focusable noFocusRing>
				<div className={H.Spacer} />
				{o}
				<div className={H.Spacer}>
					<div className={H.LoadingStatus}>
						<span>{s}</span>
					</div>
				</div>
			</a.Z>
		</F.EN>
	);
}
function Te(e) {
	return <img alt="Steam Spinner" className={H.LoadingThrobber} src={x.A} />;
}
function Re(e) {
	const { bFromThrobber } = e;
	const r = bFromThrobber ? S : w;
	const n = ((e, t) => {
		const r = CU();
		if (r.isLoading) {
			return null;
		}
		if (!r.isSuccess) {
			return t;
		}
		switch (r.data) {
			case 3: {
				if (e) {
					return I;
				} else {
					return E;
				}
			}
			case 2: {
				if (e) {
					return B;
				} else {
					return v;
				}
			}
			default: {
				return t;
			}
		}
	})(bFromThrobber, r);
	const i = yW(r);
	if (n === null || i.isLoading) {
		return null;
	}
	const a = i.data?.bIsOverride ? i.data.strUrl : n;
	return <video className={H.SuspendVideo} src={a} autoPlay />;
}
export function _p(e) {
	if (_0()) {
		return <Ie />;
	} else {
		return null;
	}
}
function Ie(e) {
	let t = sp();
	let r = j();
	let [s] = VI("startup_movie_used_for_resume");
	let o = s && !r.bIsLoadingMovie;
	Bx(n.I5.Overlay, "ResumeDialogInner");
	LC();
	pw();
	M.useEffect(() => {
		if (!s) {
			u.Ze.NotifyResumeUIDone();
		}
	}, [s]);
	const l = M.useCallback(() => {
		u.Ze.NotifyResumeUIDone();
		dT();
	}, []);
	if (o) {
		return (
			<F.EN active>
				<a.Z
					className={H.ResumeDialog}
					focusable
					noFocusRing
					autoFocus
					onOKActionDescription={null}
					onCancel={l}
				>
					<W.r
						strOverrideStartupMovie={r.strMovieUrl}
						bFullscreenVideo={r.bFullscreenVideo}
						onVideoComplete={l}
						onVideoError={l}
					/>
				</a.Z>
				<U.g3 fnCancelStartupMove={l} />
			</F.EN>
		);
	} else if (
		r.bIsLoadingMovie ||
		t == i.jH.k_ESuspendResumeProgressState_Invalid ||
		t == i.jH.k_ESuspendResumeProgressState_Invalid ||
		t == i.jH.k_ESuspendResumeProgressState_Complete
	) {
		return null;
	} else {
		return (
			<F.EN active>
				<F.eV onCancel={() => {}} className={H.ResumeDialog}>
					<D.f3
						focusable
						autoFocus
						noFocusRing
						onCancelActionDescription={null}
						onOKActionDescription={null}
					>
						<div className={H.ResumeDialogInner}>
							{z.TS.ON_DECK ? <N.DeckLogoColor /> : null}
							<div className={H.ResumeDialogInnerText}>
								<D.Y9>{(0, Localize)("#Resuming")}</D.Y9>
								<D.a3>{J(t)}</D.a3>
							</div>
						</div>
					</D.f3>
				</F.eV>
			</F.EN>
		);
	}
}
