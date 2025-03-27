import {
	LocalizeInlineReactWithFallback,
	Localize,
} from "../../actual_src/utils/localization.js";
import n, { st } from "./85360.js";
import i, { Dl } from "./46422.js";
import a, { R8 } from "./6160.js";
import s, { WJ } from "./76356.js";
import o from "./63696.js";
import l from "./69164.js";
import c from "./64608.js";
import m from "./35488.js";
import u, { A as A_1 } from "./90765.js";
import A from "./83599.js";
import p from "./10239.js";
import b from "./39354.js";
import v from "./19037.js";
import I from "./58254.js";
import E, { QP, jT, hY } from "./85399.js";
import M, { yZ } from "./52192.js";
import { PA } from "./41230.js";
import { q3 } from "./90095.js";
import k from "./78057.js";
import D from "./96593.js";
import N from "./12767.js";
import { vJ, xM, $$, L$, l6, wY, Ue } from "./52451.js";
import G from "./3235.js";
import { i_ as i_1 } from "./43397.js";
import { R7 } from "./11131.js";
import z from "./10606.js";
import { pg } from "./13869.js";
const g = p;
const h = "/images/controller_generic.png";
const C = "/movies/controller_generic_thumbstick_move.webm";
const _ = "/movies/controller_generic_mouse_move_trigger_click.webm";
const f = "/movies/controller_generic_trackpad_and_thumbsticks_move.webm";
const y = "/movies/steamdeck_mouse_move_trigger_click.webm";
const S = "/movies/steamdeck_thumbstick_move.webm";
const w = "/movies/steamdeck_trackpad_and_thumbsticks_move.webm";
const B = "/movies/steamdeck_touchscreen.webm";
const O = G;
const U = new A.wd("Interstitial");
const W = {
	exit: g.FullscreenExitStart,
	exitActive: g.FullscreenExitActive,
	exitDone: g.FullscreenExitDone,
	enter: g.FullscreenEnterStart,
	enterDone: g.FullscreenEnterDone,
	enterActive: g.FullscreenEnterActive,
};
const V = i_1(O["duration-app-launch"]);
export const rp = PA((e) => {
	const { onShowLaunchingDetails, overview } = e;
	const r_appid = overview.appid;
	const c = j("a") && false;
	const m =
		((e) => {
			const t = vJ(() => SteamClient.Apps.GetLaunchOptionsForApp(e), [e], null);
			const r = t && t.length >= 2;
			const n = q3(() => s.I.GetActiveLaunches().get(e.toString()));
			const [[i, a], l] = o.useState([false, null]);
			const c = xM();
			const m = o.useCallback(
				(e) => {
					if (c()) {
						return;
					}
					const t =
						e.strActionName == "LaunchApp" &&
						e.strTaskName != "ShowLaunchOption";
					if (i != t) {
						l([t, n]);
					}
				},
				[c, n, i],
			);
			const u = o.useCallback(() => {
				if (r && n != null) {
					SteamClient.Apps.GetGameActionDetails(n, m);
				}
			}, [r, n, m]);
			$$(u, 50, [u]);
			if (t == null) {
				return false;
			}
			if (r) {
				return i && a == n;
			} else {
				return n != null;
			}
		})(r_appid) || c;
	const u = j("c") && false;
	const d = ((e) => {
		const t =
			vJ(() => SteamClient.Apps.GetLaunchOptionsForApp(e), [e], null) ?? [];
		const r = q3(() => s.I.GetActiveLaunches().get(e.toString()));
		const a = WJ(r);
		const o = Dl();
		const l = st(e, o?.nControllerIndex ?? 0);
		if (a.nGameActionID == s.dv || t == null) {
			return false;
		}
		const c = t[a.nLaunchOption];
		if (!c || c.bIsVRLaunchOption) {
			return false;
		}
		if (!o || o.eControllerType == -1 || o.eControllerType == -1 || !l) {
			return false;
		}
		const { bNoAnimationToShow } = q(l, o.eControllerType);
		const { eConfigType } = QP(l);
		if (eConfigType == E.h7.Unknown && bNoAnimationToShow) {
			return false;
		}
		return true;
	})(r_appid);
	const A = ((e, t) => {
		const { bTimerCompleted, fnRestartTimer } = L$(t);
		o.useEffect(() => {
			if (e) {
				fnRestartTimer();
			}
		}, [fnRestartTimer, e]);
		return bTimerCompleted;
	})(m, (V * 8) / 8);
	const p = d && A && !u;
	const g = s.I.GetActiveLaunches().get(r_appid.toString());
	o.useEffect(() => {
		onShowLaunchingDetails(m);
	}, [onShowLaunchingDetails, m]);
	if (g === a.ax) {
		return <Y visible={m} appId={r_appid} overview={overview} />;
	} else {
		return (
			<K
				visible={m}
				overview={overview}
				appid={r_appid}
				gameActionID={g}
				showControlsOverview={p}
			/>
		);
	}
});
function j(e) {
	const t = R7()?.ownerWindow || window;
	const [r, setR] = o.useState(false);
	const i = o.useCallback(
		(t) => {
			if (t.key == e) {
				setR(!r);
			}
		},
		[r, e],
	);
	l6(t, "keydown", i);
	return r;
}
function q(e, t) {
	const r = t == 4;
	const n =
		t == 2 || t == 4 || t == 4 || t == 3 || t == 4 || t == 3 || t == 1
			? e?.bRightTrackpadMouse
			: e?.bRightJoystickMouse;
	if (e?.appID == 1902490) {
		const { eConfigType } = QP(e);
		if (eConfigType == E.h7.Official) {
			return {
				strImageOrVideoURL: r ? S : C,
				strImageSet: r ? "steamdeck" : "genericcontroller",
				bRotate: true,
				bNoAnimationToShow: false,
			};
		}
	}
	let i;
	let a = false;
	let s = null;
	if (r && e?.bUsesNativeTouchscreen) {
		s = B;
		i = "steamdeck";
		U.Debug("Native Touch Game Interstitial");
	} else if (e?.bUsesMouse && n && !e?.bUsesGamepad) {
		s = r ? y : _;
		i = r ? "steamdeck" : "genericcontroller";
		a = a || e?.bGyroMouse;
		U.Debug(`Mouse Game Interstitial${e?.bGyroMouse ? " w/ Gyro" : ""}`);
	} else if (e?.bUsesGamepad || e?.bUsesSIAPI) {
		if (n) {
			s = r ? w : f;
			i = r ? "steamdeck" : "genericcontroller";
		} else {
			s = r ? S : C;
			i = r ? "steamdeck" : "genericcontroller";
		}
		a = a || e?.bGyroMouse;
		U.Debug(
			(n ? "Gamepad/Mouse Game Interstitial" : "Gamepad Game Interstital") +
				(e?.bGyroMouse ? " w/ Gyro" : ""),
		);
	}
	let o = false;
	if (s == null) {
		s = r ? b.A : h;
		i = r ? "steamdeck" : "genericcontroller";
		o = true;
		U.Debug("No Interstitial");
	}
	return {
		strImageOrVideoURL: s,
		bRotate: a,
		bNoAnimationToShow: o,
		strImageSet: i,
	};
}
const Q = o.forwardRef((props, ref) => {
	const { config, visible } = props;
	const a = Dl();
	const { strImageOrVideoURL, bRotate, strImageSet } = q(
		config,
		a?.eControllerType,
	);
	const { eConfigType, bModified } = QP(config);
	const p = ((e, t, r) => {
		switch (e) {
			case E.h7.Autosave:
			case E.h7.Unknown:
			case E.h7.Search: {
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse";
				}
			}
			case E.h7.Official: {
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_OfficialLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_OfficialLayout";
				}
			}
			case E.h7.Personal: {
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_PersonalLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_PersonalLayout";
				}
			}
			case E.h7.Workshop: {
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_CommunityLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_CommunityLayout";
				}
			}
			case E.h7.Template: {
				if (r) {
					if (t) {
						return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout_Recommended_Modified";
					} else {
						return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout_Recommended";
					}
				} else if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout";
				}
			}
			case E.h7.OptedOut: {
				return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_BuiltInGamepadSupport";
			}
		}
	})(eConfigType, bModified, jT(config));
	const h = p == "#LaunchApp_ControlsConfiguration_ThisGameWillUse";
	const C =
		(hY(config) ||
			eConfigType == E.h7.Personal ||
			eConfigType == E.h7.Personal ||
			eConfigType == E.h7.Unknown) &&
		!h;
	const _ = (
		<div className={A_1(g.ConfigurationHeader)}>
			{LocalizeInlineReactWithFallback(
				p,
				<span className={g.ConfigurationHeaderBold} />,
			)}
			{C && ":"}
		</div>
	);
	const f = strImageOrVideoURL.endsWith(".webm");
	return (
		<div
			className={A_1(g.ControlOverviewContainer, visible && g.Visible)}
			ref={ref}
		>
			{h && (
				<>
					{_}
					{C && <div className={g.ConfigurationName}>{yZ(config)}</div>}
				</>
			)}
			<div
				className={A_1(
					g.ControllerInterstitialAnimationContainer,
					strImageSet == "steamdeck" && g.SteamDeck,
				)}
			>
				{f ? (
					<video
						className={A_1(bRotate && g.GyroImage1A)}
						loop
						preload="none"
						muted
						controls={false}
						autoPlay
						playsInline
					>
						<source src={strImageOrVideoURL} type="video/webm" />
					</video>
				) : (
					<img
						className={A_1(bRotate && g.GyroImage1A)}
						src={strImageOrVideoURL}
					/>
				)}
			</div>
			{!h && (
				<>
					{_}
					{C && <div className={g.ConfigurationName}>{yZ(config)}</div>}
				</>
			)}
		</div>
	);
});
function Z(e) {
	const { visible } = e;
	const RRef = o.useRef(undefined);
	const a = o.useCallback(() => {
		if (i.oy.MainRunningApp?.GetGameID()) {
			s.I.CancelAllGameActions();
		}
	}, []);
	const c = q3(() => k.H.GetLogoImages(e.overview)?.rgLogoImages ?? []);
	const [d, setD] = o.useState(false);
	const p = c.length == 0 || d;
	const h = Dl();
	const C = h?.eControllerType ?? -1;
	const _ = st(e.appId, h?.nControllerIndex ?? -1);
	const f = e.visible && e.showControlOverview && _ && C != -1;
	const [b, setB] = o.useState(0);
	const S = o.useCallback((e) => {
		setB(e.borderBoxSize[0].blockSize);
	}, []);
	const w = wY(S);
	const BRef = o.useRef(undefined);
	o.useLayoutEffect(() => {
		if (visible && BRef.current) {
			setB(BRef.current.getBoundingClientRect().height);
		}
	}, [visible]);
	const E = Ue(w, BRef);
	const MRef = o.useRef(null);
	return (
		<I.A
			nodeRef={MRef}
			appear
			in={e.visible}
			classNames={W}
			timeout={V}
			mountOnEnter
			unmountOnExit
			onEntered={() => RRef.current.TakeFocus()}
		>
			<div
				ref={MRef}
				className={g.Container}
				style={{
					"--controls-overview-height": `${b}px`,
				}}
			>
				<div className={A_1(g.TopSection, f && g.ShowControlsOverview)}>
					<div className={g.LogoSpacerTop} />
					<div className={g.LogoOrTitleContainer}>
						{p && <div className={g.TitleText}>{e.overview.display_name}</div>}
						{!p && (
							<N.c
								className={g.TitleLogo}
								rgSources={c}
								onError={() => setD(true)}
							/>
						)}
					</div>
					<div className={g.LogoSpacerBottom} />
					<div className={g.Divider} />
				</div>
				<Q config={_} visible={f} ref={E} />
				<l.Z
					className={A_1(g.BottomSection, f && g.ShowControlsOverview)}
					autoFocus
					noFocusRing
					focusableIfNoChildren
					disableNavSounds
					onGamepadDirection={() => true}
					onCancel={a}
					navRef={RRef}
				>
					<div className={g.Divider} />
					<div className={g.BottomSectionChildren}>
						<div className={g.LaunchStatus}>
							<m.Spinner className={g.StatusSpinner} /> {e.status}
						</div>
						{e.children}
					</div>
				</l.Z>
				<v.LP appid={e.appId} />
			</div>
		</I.A>
	);
}
function Y(e) {
	const t = R8();
	if (!t) {
		return (
			<Z
				visible={e.visible}
				status={Localize("#LaunchApp_Action_Starting")}
				appId={e.appId}
				overview={e.overview}
			/>
		);
	}
	const r = X(t);
	const n = J(t.strTaskName, t.strTaskDetails, r);
	return (
		<Z visible={e.visible} status={n} appId={e.appId} overview={e.overview} />
	);
}
function K(e) {
	const t = new A.wd("LaunchStates");
	const { appid, gameActionID } = e;
	const i = WJ(gameActionID);
	const a = X(i);
	let l = false;
	let m = Localize("#LaunchApp_Action_Starting");
	if (i.strActionName == "LaunchApp") {
		m = J(i.strTaskName, i.strTaskDetails, a);
		l = i.strTaskName === "ProcessingShaderCache";
	}
	t.Debug(`${m} : ${i.strTaskName} : ${i.strTaskDetails}`);
	let u = o.useCallback(() => {
		SteamClient.Apps.ContinueGameAction(gameActionID, "SkipShaders");
	}, [gameActionID]);
	return (
		<Z
			visible={e.visible}
			status={m}
			appId={appid}
			showControlOverview={e.showControlsOverview}
			overview={e.overview}
		>
			{l && (
				<c.jn className={g.SkipProcessingShaderCache} onClick={u} autoFocus>
					{Localize(
						"#LaunchApp_Action_SkipProcessingShaderCache",
					).toLocaleUpperCase()}
				</c.jn>
			)}
		</Z>
	);
}
function X(e) {
	const t = e?.numDone ?? parseInt(e?.strNumDone ?? "0");
	const r = e?.numTotal ?? parseInt(e?.strNumTotal ?? "0");
	if (r > 0 && t <= r) {
		return Math.floor((t * 100) / r);
	} else {
		return 0;
	}
}
function J(e, t, r) {
	const n = t && t.length > 0;
	switch (e) {
		case "UpdatingAppInfo":
		case "ShowEula":
		case "UpdatingDRM":
		case "GettingLegacyKey":
		case "SynchronizingCloud":
		case "VerifyingFiles":
		case "CreatingProcess":
		case "WaitingGameWindow":
		case "ConnectingToSteam": {
			return Localize(`#LaunchApp_Action_${e}`);
		}
		case "DownloadingDepots":
		case "DownloadingWorkshop":
		case "DelayLaunch":
		case "ProcessingShaderCache": {
			return Localize(`#LaunchApp_Action_${e}`, r);
		}
		case "RunningInstallScript": {
			if (n) {
				return Localize(`#LaunchApp_Action_${e}`, t);
			} else {
				return Localize(`#LaunchApp_Action_${e}_NoParens`);
			}
		}
		default: {
			return Localize("#LaunchApp_Action_Starting");
		}
	}
}
function $(e) {
	const t = WJ(e.gameActionID);
	const r = () => SteamClient.Apps.CancelGameAction(e.gameActionID);
	const n = () => SteamClient.Apps.ContinueGameAction(e.gameActionID, "skip");
	const i = (t) => () => {
		if (e.closeModal) {
			e.closeModal();
		}
		if (t) {
			t();
		}
	};
	o.useEffect(() => {
		if (t.strTaskName && t.strTaskName != e.strTaskName) {
			e.closeModal();
		}
	}, [t, e]);
	const a = X(t);
	const l = D.tw.GetAppOverviewByAppID(e.appID);
	const m = J(t.strTaskName, t.strTaskDetails, a);
	return (
		<z.eV onCancel={i(r)} onOK={n}>
			<c.Y9>
				{"  "}
				{Localize("#LaunchApp_Action_SkipStepHeader", l.display_name)}{" "}
			</c.Y9>
			<c.nB>
				<c.a3>{m}</c.a3>
				<c.wi>
					<c.CB
						strOKText={Localize("#Button_Skip")}
						onCancel={i(r)}
						onOK={i(n)}
						strCancelText="Cancel"
					/>
				</c.wi>
			</c.nB>
		</z.eV>
	);
}
export function cd(e, t, r, n) {
	n ||= window;
	const i = <$ gameActionID={e} appID={t} strTaskName={r} />;
	pg(i, n, {});
}
export function vE(e, t) {
	let r = "#DurationControl_PlaytimeExceeded_Body_Night";
	if (t == "WaitingVerification") {
		r = "#DurationControl_PlaytimeExceeded_Body_WaitingVerification";
	} else if (t == "Maintenance") {
		r = "#DurationControl_PlaytimeExceeded_Body_Maintenance";
	} else if (t == "CheckFailed") {
		r = "#Error_ErrorCommunicatingWithNetwork";
	}
	let n = (
		<z.KG
			strTitle={Localize("#DurationControl_PlaytimeExceeded_Title")}
			strDescription={Localize(r)}
		/>
	);
	pg(n, e, {});
}
export function fP(e, t, r) {
	pg(<z.KG strTitle={t} strDescription={e} />, r);
}
