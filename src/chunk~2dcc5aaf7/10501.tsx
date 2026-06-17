import {
	memo,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { FullLogin } from "../../actual_src/login/fulllogin.js";
import { AssertMsg } from "../../actual_src/utils/assert.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import re from "./3475.js";
import { AH, Kw, jy } from "./5808.js";
import { E4 } from "./8326.js";
import Ie from "./10975.js";
import S, { yq, c4 } from "./11131.js";
import fe from "./16251.js";
import ve from "./16403.js";
import ye from "./17016.js";
import C, { CQ } from "./18057.js";
import c from "./18914.js";
import Se from "./22969.js";
import Be from "./26893.js";
import ge from "./32411.js";
import j from "./32661.js";
import { Bb, Np } from "./32700.js";
import m from "./33572.js";
import a, { VI } from "./34792.js";
import te from "./35488.js";
import { oH } from "./38542.js";
import { ZC } from "./39147.js";
import E from "./40361.js";
import { PA } from "./41230.js";
import B from "./42318.js";
import { Z3 } from "./42898.js";
import p from "./43691.js";
import l from "./44846.js";
import we from "./45921.js";
import { j as j_1 } from "./46085.js";
import s from "./46422.js";
import { wI } from "./48289.js";
import M from "./51582.js";
import h, { _Y, nB, yu } from "./60353.js";
import Te from "./61657.js";
import { Cb, h3 } from "./63439.js";
import se from "./64608.js";
import _w from "./67808.js";
import A, { CI } from "./72476.js";
import g from "./72636.js";
import $ from "./75001.js";
import D from "./75085.js";
import { T as T_1 } from "./78057.js";
import _u from "./78325.js";
import Ee from "./80467.js";
import b from "./85175.js";
import i from "./85243.js";
import { rO } from "./88724.js";
import { fm } from "./89193.js";
import { Wx, gK, qw } from "./89748.js";
import { q3 as useObserver } from "./90095.js";
import { A as A_1 } from "./90765.js";
import v from "./91435.js";
import { Co, mM } from "./96593.js";
import o, { $2 } from "./96680.js";
import le from "./97893.js";
import Z from "./98659.js";
import J from "./98995.js";

interface WindowProps {
	cm: any;
	instance: any;
}

function ControllerConfiguratorWindow(props: WindowProps) {
	const { cm, instance } = props;
	const { appid, strAppName } = instance.params;
	let eBrowserType = i.W.EBrowserType_DirectHWND_Borderless;
	let dimensions = {
		width: 1280,
		height: 800,
		left: 0,
		top: 0,
	};
	if (!p.TS.ON_DECK || !CI()) {
		dimensions.left = h.Mb;
		dimensions.top = h.Mb;
		eBrowserType = i.W.EBrowserType_DirectHWND;
	}
	let b = {
		onClose: () =>
			SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow(),
		onResize: (e, t) => {
			s.oy.SetConfiguratorWidth(e.outerWidth);
		},
	};
	const { popup, element } = _Y(
		"SP Controller Configurator",
		instance,
		h.Uv.GamepadUI,
		{
			title: Localize("#SP_WindowTitle_Configurator", strAppName),
			dimensions,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			browserType: eBrowserType,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
		},
		b,
	);
	useEffect(() => {
		popup?.SteamClient.Window.SetMinSize(800, 650);
	}, [popup]);
	const w = useMemo(
		() =>
			appid == l.mZ
				? [
						C.BV.GamepadUI.ControllerConfigurator.Standalone(),
						s.oy.StandaloneConfiguratorURL,
					]
				: [
						C.BV.GamepadUI.ControllerConfigurator.Standalone(),
						C.BV.GamepadUI.ControllerConfigurator.Main(appid),
					],
		[appid],
	);
	if (element) {
		return _u.createPortal(
			<g.O ownerWindow={popup} instance={props.instance}>
				<C.NM initialEntries={w} initialIndex={1}>
					<c.Is
						cm={cm}
						mode={m._5.ControllerConfigurator}
						forcedAppID={appid}
					/>
				</C.NM>
			</g.O>,
			element,
		);
	} else {
		return null;
	}
}

function DesktopLoginWindow(props: WindowProps) {
	const { cm, instance } = props;
	i.W.EBrowserType_DirectHWND_Borderless;
	let dimensions = {
		width: 705,
		height: 440,
		left: h.Mb,
		top: h.Mb,
	};
	let strTitle = Localize("#SignIn_Title");
	let CRef = useRef(false);
	const bHiddenWindow = p.TS.SILENT_STARTUP;
	const eCreationFlags =
		S.Wf.ApplyBrowserScaleToDimensions | (bHiddenWindow ? S.Wf.Hidden : 0);
	const { popup, element } = _Y(
		"SP DesktopLoginWindow",
		instance,
		h.Uv.DesktopUI,
		{
			title: strTitle,
			dimensions: dimensions,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			eCreationFlags: eCreationFlags,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
		},
		{
			onClose: (e, t) => {
				const bIsShuttingDown = !S.Of.BShuttingDown();
				if (!CRef.current && bIsShuttingDown) {
					SteamClient.User?.StartShutdown(true);
				}
			},
		},
	);
	AssertMsg(
		s.oy.MainInstanceUIMode != 4,
		"DesktopUI windows should only ever be present when the main instance's UI mode is desktop",
	);
	if (element && s.oy.MainInstanceUIMode != 4) {
		return _u.createPortal(
			<A.ss IN_DESKTOPUI IN_GAMEPADUI={false} IN_VR={false}>
				<_w.p body_class={h.a$}>
					<S.kc ownerWindow={popup}>
						<o.ER instance={instance}>
							<v.EO>
								<B.tH>
									<b.FQ webNavigationsUseSteamURL>
										<FullLogin
											cm={cm}
											popup={popup}
											includeTitleBar
											bHiddenWindow={bHiddenWindow}
											onLoginComplete={() => {
												CRef.current = true;
											}}
										/>
									</b.FQ>
								</B.tH>
							</v.EO>
						</o.ER>
					</S.kc>
				</_w.p>
			</A.ss>,
			element,
		);
	} else {
		return null;
	}
}

const T = memo((e) => {
	const { children } = e;
	const r = useContext(o.mA).params;
	let unAppID = r.browserInfo.m_unAppID;
	let unPID = r.browserInfo.m_unPID;
	const initialEntries = useMemo(() => [C.BV.GamepadUI.AppRunning()], []);
	return (
		<C.m_
			appid={unAppID}
			pid={unPID}
			initialEntries={initialEntries}
			initialIndex={0}
		>
			{children}
		</C.m_>
	);
});

function DesktopOverlayWindow(props) {
	const { cm, instance } = props;
	const params = instance.params;
	const eBrowserType = i.W.EBrowserType_OffScreen;
	const dimensions = {
		width: params.nScreenWidth,
		height: params.nScreenHeight,
		left: 0,
		top: 0,
	};
	const browser = instance.params.browserInfo;
	const { popup, element } = _Y(
		"overlay",
		instance,
		h.Uv.DesktopUI,
		{
			title: `SP Overlay: ${browser.m_unPID}/${+browser.m_nBrowserID}/${+browser.m_eBrowserType}`,
			dimensions: dimensions,
			replace_existing_popup: false,
			target_browser: browser,
			eCreationFlags: S.Wf.Composited | S.Wf.ApplyBrowserScaleToDimensions,
			browserType: eBrowserType,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
		},
		{},
	);
	const p = useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	useEffect(() => {
		if (popup) {
			popup.ConfigContext = p;
		}
	}, [popup, p]);
	const [g, setG] = useState(params.nScreenWidth);
	const [_, set] = useState(params.nScreenHeight);
	useEffect(
		() =>
			fm(() => {
				popup?.SteamClient.Window.ResizeTo(
					params.nScreenWidth,
					params.nScreenHeight,
					true,
				);
				setG(params.nScreenWidth);
				set(params.nScreenHeight);
			}),
		[popup, params],
	);
	if (element) {
		return _u.createPortal(
			<A.ss {...p}>
				<_w.p body_class={h.a$}>
					<o.ER instance={instance}>
						<T>
							<S.kc ownerWindow={popup}>
								<B.tH>
									<E.zA>
										<M.$i gameid={params.gameid} width={g} height={_} />
									</E.zA>
								</B.tH>
							</S.kc>
						</T>
					</o.ER>
				</_w.p>
			</A.ss>,
			element,
		);
	} else {
		return null;
	}
}

function L(e) {
	const t = useObserver(() => qw().LoginState);
	const r = useObserver(() => e.BIsGamepadApplicationUIInitialized());
	const [i, setI] = useState(false);
	useEffect(() => {
		if (r) {
			switch (t) {
				case 0:
				case 8: {
					break;
				}
				case 7: {
					e.Navigate(C.BV.Library.Home(), true);
					break;
				}
				default: {
					if (!i) {
						e.Navigate(C.BV.GamepadUI.Login(), true);
						setI(true);
					}
				}
			}
		}
	}, [e, r, t, i]);
}

const z = {
	width: 1280,
	height: 800,
	left: 0,
	top: 0,
};
const x = "startup-movie-played";

function onVideoPlay() {
	sessionStorage.setItem(x, "true");
}

function MainGamepadUIWindow(props: WindowProps) {
	const { cm, instance } = props;
	const o = Wx();
	const l = useObserver(() => s.oy.RemainInBigPictureModeOnClose);
	const { strMovieUrl, bFullscreenVideo, bIsLoadingMovie, bIsExpectedToLoad } =
		j_1();
	const [bPlayingMovie, setW] = useState(
		(sessionStorage.getItem(x) !== "true" || !p.TS.ON_DECK) &&
			bIsExpectedToLoad,
	);
	const v = useCallback(() => setW(false), []);
	Z3(v, 30000, []);
	let eBrowserType = i.W.EBrowserType_DirectHWND_Borderless;
	let dimensions = z;
	if (!p.TS.ON_DECK || !CI()) {
		dimensions.left = h.Mb;
		dimensions.top = h.Mb;
		eBrowserType = i.W.EBrowserType_DirectHWND;
	}
	let eCreationFlags = h.Ij | S.Wf.Composited | S.Wf.TransparentParentWindow;
	const T = useObserver(
		() => (a.rV.WindowedMode || p.TS.DECK_DISPLAY_MODE) && !p.TS.IN_GAMESCOPE,
	);
	if (!T) {
		eCreationFlags |= S.Wf.FullScreen;
	}
	if (p.TS.DECK_DISPLAY_MODE) {
		dimensions.width = z.width;
		dimensions.height = z.height;
		eCreationFlags &= ~S.Wf.Resizable;
		eCreationFlags |= S.Wf.IgnoreSavedSize;
	}
	const R = nB(instance);
	const k = p.TS.DECK_DISPLAY_MODE
		? "Window_GamepadUIDeckDisplay"
		: "Window_GamepadUI";
	const W = h3(k);
	const V = {
		onResize: (e, t) => {
			s.oy.SetConfiguratorWidth(e.outerWidth);
		},
		onClose: (e, t) => {
			if (!l && !S.Of.BShuttingDown()) {
				SteamClient.UI.ExitBigPictureMode();
			}
		},
	};
	const H = Cb(T ? W : null, V);
	const { popup, element } = _Y(
		"SP BPM",
		instance,
		h.Uv.GamepadUI,
		{
			title: Localize("#SP_WindowTitle_BigPicture"),
			dimensions: dimensions,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			browserType: eBrowserType,
			eCreationFlags: eCreationFlags,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
			bHideOnClose: !p.TS.IN_GAMESCOPE && l,
			bNoFocusOnShow: !R,
		},
		H,
	);
	useEffect(() => {
		if (popup) {
			let e = !o;
			if (popup.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed) {
				popup.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(e);
			}
			popup.SteamClient.Browser.NotifyUserActivation();
		}
	}, [o, popup, popup?.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed]);
	L(instance);
	yu(instance, T);
	if (element) {
		if (bPlayingMovie && bIsLoadingMovie) {
			return null;
		} else {
			return _u.createPortal(
				<g.O ownerWindow={popup} instance={props.instance}>
					<C.Kw basename={CQ()}>
						{bPlayingMovie && strMovieUrl && (
							<D.K
								bPlayingMovie={bPlayingMovie}
								strOverrideStartupMovie={strMovieUrl}
								bFullscreenVideo={bFullscreenVideo}
								onVideoComplete={v}
								onVideoError={v}
								onVideoPlay={onVideoPlay}
							/>
						)}
						<c.Is
							cm={cm}
							mode={m._5.Full}
							bPlayingStartupMovie={bPlayingMovie}
							fnCancelStartupMove={v}
						/>
					</C.Kw>
				</g.O>,
				element,
			);
		}
	} else {
		return null;
	}
}

function GamepadUIOverlayWindow(props: WindowProps) {
	const { cm, instance } = props;
	const r_params = instance.params;
	let s = i.W.EBrowserType_OffScreen;
	let o = {
		width: r_params.nScreenWidth,
		height: r_params.nScreenHeight,
		left: 0,
		top: 0,
	};
	const l = instance.params.browserInfo;
	const { popup, element } = _Y(
		"overlay",
		instance,
		h.Uv.GamepadUI,
		{
			title: `SP Overlay: ${l.m_unPID}/${+l.m_nBrowserID}/${+l.m_eBrowserType}`,
			dimensions: o,
			replace_existing_popup: false,
			target_browser: l,
			eCreationFlags: S.Wf.Composited | S.Wf.ApplyBrowserScaleToDimensions,
			browserType: s,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
		},
		null,
	);
	useEffect(
		() =>
			fm(() => {
				popup?.SteamClient.Window.ResizeTo(
					r_params.nScreenWidth,
					r_params.nScreenHeight,
					true,
				);
			}),
		[popup, r_params],
	);
	if (element) {
		return _u.createPortal(
			<g.O ownerWindow={popup} instance={instance}>
				<T>
					<c.Is cm={cm} mode={m._5.Overlay} forcedAppID={r_params.appid} />
				</T>
			</g.O>,
			element,
		);
	} else {
		return null;
	}
}

function StandaloneKeyboardWindow(props) {
	const { cm, instance } = props;
	const { initialX, initialY } = instance.params;
	const { popup, element } = _Y("SP Keyboard", instance, h.Uv.GamepadUI, {
		title: Localize("#SP_WindowTitle_Keyboard"),
		dimensions: {
			width: 1280,
			height: 360,
			left: initialX,
			top: initialY,
		},
		replace_existing_popup: false,
		target_browser: instance.params.browserInfo,
		eCreationFlags: S.Wf.Composited | S.Wf.NoMinimize | yq(S.Dr.Overlay),
		browserType: p.TS.DEV_MODE
			? i.W.EBrowserType_DirectHWND
			: i.W.EBrowserType_DirectHWND_Borderless,
		strUserAgent: props.instance.params.strUserAgentIdentifier,
	});
	if (element) {
		return _u.createPortal(
			<g.O ownerWindow={popup} instance={props.instance}>
				<c.Is cm={cm} mode={m._5.StandaloneKeyboard} />
			</g.O>,
			element,
		);
	} else {
		return null;
	}
}
const Y = Z;
const Me_1 = PA((e) => {
	const { appid } = e;
	T_1(appid);
	const r = Co(appid);
	const i = mM(r);
	const a = $2();
	if (!appid) {
		return null;
	}
	if (!r) {
		return (
			<div>{Localize("#GameLauncher_UnknownAppID", appid.toString())}</div>
		);
	}
	const s = AH(a, r, "mostavailable");
	Kw(r, "mostavailable");
	let l = Bb(r.display_status, true);
	switch (r.display_status) {
		case 6:
		case 7: {
			const e = le.hj.DownloadOverview.update_network_bytes_per_second;
			let t = `${r.status_percentage || 0}%`;
			if (e) {
				t = `${t} (${ZC(e)})`;
			}
			l += ` - ${t}`;
		}
	}
	return (
		<div className={Y.AppStatus}>
			<div className={Y.AppName}>{r.display_name}</div>
			{!i && (
				<div className={Y.Error}>
					{Localize("#GameLauncher_AccountDoesNotOwnGame")}
				</div>
			)}
			<div className={Y.DisplayStatus}>{l}</div>
			{i && s && (
				<se.jn
					onClick={(e) => {
						const t = GetOwningWindowForEvent(e);
						jy(s, r, "mostavailable", 100, t)();
						if (s != "Play") {
							e.stopPropagation();
							e.preventDefault();
						}
					}}
				>
					{Np(s, 1)}
				</se.jn>
			)}
		</div>
	);
});
const Ue = (e) => (
	<$._G
		menuItems={[
			{
				name: "#Menu_Logout",
				steamURL: "steam://signout",
			},
		]}
	/>
);
const De = PA(() => {
	const e = wI();
	const [t, setT] = useState(false);
	const [i] = useObserver(() => [qw().GetCurrentUser().strAccountName]);
	return (
		<J.he
			toolTipContent="#ViewAccountDropdown"
			direction="bottom"
			bDisabled={t}
		>
			<$.W1
				title={Localize("#ViewAccountDropdown")}
				menuItems={[]}
				menuContent={<Ue />}
				parentalFeature={re.uX}
				popupClass={A_1(Y.AccountMenuPopup, rO(e))}
				onShow={() => setT(true)}
				onHide={() => setT(false)}
			>
				<div className={A_1(Y.AccountMenu, rO(e))}>
					<div className={Y.PersonaName}>{i}</div>
					<te.Chevron className={Y.Chevron} direction="down" />
				</div>
			</$.W1>
		</J.he>
	);
});
function Ae(e) {
	const t = gK();
	const [r, setR] = useState(false);
	const a = (() => {
		const [e, setE] = useState();
		useEffect(() => {
			SteamClient.SteamChina.GetCustomLauncherAppID().then((e) => setE(e));
		}, []);
		return e;
	})();
	useEffect(() => {
		(async () => {
			console.time("SteamApp Init");
			await qw().WaitForServicesInitialized();
			console.timeEnd("SteamApp Init");
			setR(true);
		})();
	}, []);
	if (t && r) {
		return (
			<>
				<B.tH>
					<j.j />
				</B.tH>
				<De />
				<Me_1 appid={a} />
			</>
		);
	} else {
		return null;
	}
}

function SteamChinaReviewLauncher(props: WindowProps) {
	const { cm, instance } = props;
	let dimensions = {
		width: 640,
		height: 480,
		left: h.Mb,
		top: h.Mb,
	};
	let strTitle = Localize("#GameLauncher_Title");
	let eCreationFlags = S.Wf.ApplyBrowserScaleToDimensions;
	const { popup, element } = _Y(
		"SteamChinaReviewLauncherWindow",
		instance,
		h.Uv.DesktopUI,
		{
			title: strTitle,
			dimensions: dimensions,
			browserType: i.W.EBrowserType_DirectHWND,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			eCreationFlags: eCreationFlags,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
		},
		{
			onClose: (e, t) => {
				if (!S.Of.BShuttingDown()) {
					SteamClient.User?.StartShutdown(true);
				}
			},
		},
	);
	const p = useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	useEffect(() => {
		if (popup) {
			popup.ConfigContext = p;
		}
	}, [popup, p]);
	if (element) {
		return _u.createPortal(
			<A.ss {...p}>
				<_w.p body_class={h.a$}>
					<S.kc ownerWindow={popup}>
						<o.ER instance={instance}>
							<v.EO>
								<B.tH>
									<b.FQ webNavigationsUseSteamURL>
										<Ae cm={cm} />
									</b.FQ>
								</B.tH>
							</v.EO>
						</o.ER>
					</S.kc>
				</_w.p>
			</A.ss>,
			element,
		);
	} else {
		return null;
	}
}

const k_LargeModeDimensions = {
	width: 1280,
	height: 800,
	left: h.Mb,
	top: h.Mb,
};
const k_SmallModeDimensions = {
	width: 400,
	height: 800,
	left: h.Mb,
	top: h.Mb,
};

function MainDesktopWindow(props) {
	const { cm, instance, bSmallMode } = props;
	let eBrowserType = i.W.EBrowserType_DirectHWND_Borderless;
	let strTitle = Localize(
		props.bSmallMode
			? "#WindowName_SteamDesktopMini"
			: "#WindowName_SteamDesktop",
	);
	let dimensions = bSmallMode ? k_SmallModeDimensions : k_LargeModeDimensions;
	const minWidth = props.bSmallMode ? 230 : 1010;
	const minHeight = props.bSmallMode ? 100 : 600;
	const y = props.bSmallMode
		? "Window_SteamDesktopMini"
		: "Window_SteamDesktop";
	const v = h3(y);
	const I = nB(instance);
	const E = h.Ij | S.Wf.Composited | (p.TS.SILENT_STARTUP ? S.Wf.Hidden : 0);
	const M = v;
	const T = useMemo(
		() => ({
			title: strTitle,
			dimensions,
			minWidth,
			minHeight,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			browserType: eBrowserType,
			eCreationFlags: E,
			strUserAgent: instance.params.strUserAgentIdentifier,
			bHideOnClose: true,
			bNoFocusOnShow: !I,
		}),
		[instance, eBrowserType, E, dimensions, strTitle, minWidth, minHeight, I],
	);
	const { popup, element } = _Y("SP Desktop", instance, h.Uv.DesktopUI, T, M);
	const ConfigContext = useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	useEffect(() => {
		if (popup) {
			popup.ConfigContext = ConfigContext;
		}
	}, [popup, ConfigContext]);
	const NRef = useRef(bSmallMode);
	useEffect(() => {
		if (popup && bSmallMode !== NRef.current) {
			const onMessage = (e: MessageEvent<string>) => {
				if (e.data == "window_moved" || e.data == "window_restored") {
					setTimeout(() => {
						popup.SteamClient.Window.ShowWindow();
					}, 250);
				}
			};
			popup.addEventListener("message", onMessage);
			const t = v.updateParamsBeforeShow(T);
			if (t.strRestoreDetails) {
				popup.SteamClient.Window.HideWindow();
				popup.SteamClient.Window.RestoreWindowSizeAndPosition(
					t.strRestoreDetails,
				);
				popup.SteamClient.Window.SetMinSize(minWidth, minHeight);
			} else {
				popup.SteamClient.Window.SetMinSize(minWidth, minHeight);
				popup.SteamClient.Window.ResizeTo(
					dimensions.width,
					dimensions.height,
					false,
				);
			}
			NRef.current = bSmallMode;
			return () => {
				popup?.removeEventListener("message", onMessage);
			};
		}
		return () => {};
	}, [bSmallMode, T, v, popup, dimensions, minWidth, minHeight]);
	yu(instance);
	AssertMsg(
		s.oy.MainInstanceUIMode != 4,
		"DesktopUI windows should only ever be present when the main instance's UI mode is desktop",
	);
	if (element && s.oy.MainInstanceUIMode != 4) {
		return _u.createPortal(
			<A.ss {...ConfigContext}>
				<_w.p body_class={h.a$}>
					<C.Gl initialPath={C.BV.Init()}>
						<S.kc ownerWindow={popup}>
							<o.ER instance={instance}>
								<B.tH>
									<b.FQ>
										<ge.Ay cm={cm} bSmallMode={props.bSmallMode} />
									</b.FQ>
								</B.tH>
							</o.ER>
						</S.kc>
					</C.Gl>
				</_w.p>
			</A.ss>,
			element,
		);
	} else {
		return null;
	}
}

const Me = Ee;
function VRWindow(props: WindowProps) {
	const { cm, instance } = props;
	const a = useCallback((e, t) => {
		Se.fR.Info("Main popup created.");
	}, []);
	const o = useCallback((e, t) => {
		Se.fR.Info("Main popup closed.");
	}, []);
	const { popup, element } = _Y(
		"VR",
		instance,
		h.Uv.GamepadUI,
		{
			strVROverlayKey: instance.GetMainVROverlayKey(),
			title: "SteamVR",
			body_class: Me.PopupBody,
			dimensions: {
				width: 1280,
				height: 720,
				left: 0,
				top: 0,
			},
			replace_existing_popup: true,
			target_browser: instance.params.browserInfo,
			browserType: i.W.EBrowserType_OpenVROverlay_Dashboard,
			eCreationFlags: 0,
			strUserAgent: props.instance.params.strUserAgentIdentifier,
		},
		{
			onCreate: a,
			onClose: o,
		},
	);
	const ARef = useRef(undefined);
	((e, t, r) => {
		useEffect(() => {
			if (!e) {
				return;
			}
			const n = (r) => {
				if (t.current && r == fe.Tv.k_EButton_Dashboard_Back) {
					t.current.OnActivate(e);
					s.oy.NavigationManager.DispatchVirtualButtonClick(Te.pR.CANCEL);
					Ie.eZ.PlayNavSound(Ie.PN.HideModal);
				}
			};
			const i = e.SteamClient.OpenVR?.VROverlay.RegisterForButtonPress((t) => {
				Se.fR.Info(`Button press for window ${e.name} button=${t}`);
				n(t);
			});
			const a = r
				?.GetStoreBrowser()
				.GetOnMessageCallbacks("button-press")
				.Register((e) => {
					const t = Number(e);
					Se.fR.Info(`Button press for from BrowserView button=${t}`);
					n(t);
				});
			return () => {
				i?.unregister();
				a?.Unregister();
			};
		}, [e, t, r]);
	})(popup, ARef, instance);
	oH(popup, (bVisible) =>
		Se.fR.Debug(
			`Overlay for VRWindow ${popup.name} visibility=${bVisible ? "true" : "false"}`,
		),
	);
	const p = useMemo(() => [C.BV.Library.Home()], []);
	L(instance);
	if (element) {
		return (
			<>
				{_u.createPortal(
					<g.O
						ownerWindow={popup}
						instance={props.instance}
						refFocusNavContext={ARef}
					>
						<C.NM initialEntries={p} initialIndex={0}>
							<ve.Bi>
								<c.Is cm={cm} mode={m._5.Full} bPlayingStartupMovie={false}>
									<B.tH>
										<ye.r />
									</B.tH>
									<B.tH>
										<we.iG />
									</B.tH>
									<B.tH>
										<Be.z />
									</B.tH>
									<B.tH>
										<Be.ny />
									</B.tH>
								</c.Is>
							</ve.Bi>
						</C.NM>
					</g.O>,
					element,
				)}
			</>
		);
	} else {
		return null;
	}
}

export function u(props: { cm: any }) {
	const { cm } = props;
	const vecSteamUIWindows = useObserver(() => s.oy.WindowStore.SteamUIWindows);
	const [bIsSmallMode] = VI("small_mode");
	E4(1920, 1080);
	return vecSteamUIWindows.map((pInstance) => {
		const pBrowser = pInstance.params.browserInfo;
		if (pInstance.IsMainGamepadUIWindow()) {
			return <MainGamepadUIWindow key="Main" cm={cm} instance={pInstance} />;
		} else if (pInstance.IsGamepadUIOverlayWindow()) {
			return (
				<GamepadUIOverlayWindow
					key={`overlay_${pBrowser.m_unPID}`}
					cm={cm}
					instance={pInstance}
				/>
			);
		} else if (pInstance.IsStandaloneKeyboardWindow()) {
			return (
				<StandaloneKeyboardWindow key="keyboard" cm={cm} instance={pInstance} />
			);
		} else if (pInstance.IsControllerConfiguratorWindow()) {
			return (
				<ControllerConfiguratorWindow
					key="controllerconfigurator"
					cm={cm}
					instance={pInstance}
				/>
			);
		} else if (pInstance.IsVRWindow()) {
			return (
				<VRWindow
					key={`vr${pInstance.params.bSimulateOnDesktop ? "-desktop" : ""}`}
					cm={cm}
					instance={pInstance}
				/>
			);
		} else if (pInstance.IsMainDesktopWindow()) {
			return (
				<MainDesktopWindow
					key="SteamDesktop"
					cm={cm}
					instance={pInstance}
					bSmallMode={bIsSmallMode}
				/>
			);
		} else if (pInstance.IsDesktopOverlayWindow()) {
			return (
				<DesktopOverlayWindow
					key={`overlay_${pBrowser.m_unPID}`}
					cm={cm}
					instance={pInstance}
				/>
			);
		} else if (pInstance.IsDesktopLoginWindow()) {
			return (
				<DesktopLoginWindow key="DesktopLogin" cm={cm} instance={pInstance} />
			);
		} else if (pInstance.IsSteamChinaReviewLauncher()) {
			return (
				<SteamChinaReviewLauncher
					key="SteamChinaReviewLauncher"
					cm={cm}
					instance={pInstance}
				/>
			);
		} else {
			return null;
		}
	});
}

export function w() {
	const bIsOverlayWindow = (() => {
		switch ($2().WindowType) {
			case i.W7.OverlayGamepadUI:
			case i.W7.OverlayDesktopUI: {
				return false;
			}
			default: {
				return true;
			}
		}
	})();
	const bUnderlaySupported = c4().bUnderlaySupported;
	return bIsOverlayWindow && bUnderlaySupported;
}
