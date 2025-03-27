import { Localize } from "../../actual_src/utils/localization.js";
import { AssertMsg } from "../../actual_src/utils/assert.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./85243.js";
import a, { VI } from "./34792.js";
import s from "./46422.js";
import o, { $2 } from "./96680.js";
import l from "./44846.js";
import c from "./18914.js";
import m from "./33572.js";
import _u from "./78325.js";
import A, { CI } from "./72476.js";
import p from "./43691.js";
import g from "./72636.js";
import h, { _Y, nB, yu } from "./60353.js";
import C, { CQ } from "./18057.js";
import b from "./85175.js";
import y from "./26326.js";
import S, { yq, c4 } from "./11131.js";
import _w from "./67808.js";
import B from "./42318.js";
import v from "./91435.js";
import E from "./40361.js";
import M from "./51582.js";
import R, { fm } from "./89193.js";
import D from "./75085.js";
import N, { qw, Wx, gK } from "./89748.js";
import { j as j_1 } from "./46085.js";
import { q3 } from "./90095.js";
import O, { h3, Cb } from "./63439.js";
import { Z3 } from "./42898.js";
import j from "./32661.js";
import q, { T as T_1 } from "./78057.js";
import { Co, mM } from "./96593.js";
import Z from "./98659.js";
import K, { PA } from "./41230.js";
import { wI } from "./48289.js";
import J from "./98995.js";
import $ from "./75001.js";
import { A as A_1 } from "./90765.js";
import te from "./35488.js";
import re from "./3475.js";
import { rO } from "./88724.js";
import { AH, Kw, jy } from "./5808.js";
import se from "./64608.js";
import { Bb, Np } from "./32700.js";
import le from "./97893.js";
import { ZC } from "./39147.js";
import ge from "./32411.js";
import fe from "./16251.js";
import { oH } from "./38542.js";
import ye from "./17016.js";
import Se from "./22969.js";
import we from "./45921.js";
import Be from "./26893.js";
import ve from "./16403.js";
import Ie from "./10975.js";
import Ee from "./80467.js";
import Te from "./61657.js";
import { E4 } from "./8326.js";
function _(e) {
	const { cm, instance } = e;
	const { appid, strAppName } = instance.params;
	let _ = i.W.EBrowserType_DirectHWND_Borderless;
	let f = {
		width: 1280,
		height: 800,
		left: 0,
		top: 0,
	};
	if (!p.TS.ON_DECK || !CI()) {
		f.left = h.Mb;
		f.top = h.Mb;
		_ = i.W.EBrowserType_DirectHWND;
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
			dimensions: f,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			browserType: _,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		b,
	);
	n.useEffect(() => {
		popup?.SteamClient.Window.SetMinSize(800, 650);
	}, [popup]);
	const w = n.useMemo(
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
			<g.O ownerWindow={popup} instance={e.instance}>
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
function I(e) {
	const { cm, instance } = e;
	i.W.EBrowserType_DirectHWND_Borderless;
	let a = {
		width: 705,
		height: 440,
		left: h.Mb,
		top: h.Mb,
	};
	let l = Localize("#SignIn_Title");
	let CRef = n.useRef(false);
	const m = p.TS.SILENT_STARTUP;
	const g = S.Wf.ApplyBrowserScaleToDimensions | (m ? S.Wf.Hidden : 0);
	const { popup, element } = _Y(
		"SP DesktopLoginWindow",
		instance,
		h.Uv.DesktopUI,
		{
			title: l,
			dimensions: a,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			eCreationFlags: g,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{
			onClose: (e, t) => {
				const r = !S.Of.BShuttingDown();
				if (!CRef.current && r) {
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
										<y.FullLogin
											cm={cm}
											popup={popup}
											includeTitleBar
											bHiddenWindow={m}
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
const T = n.memo((e) => {
	const { children } = e;
	const r = n.useContext(o.mA).params;
	let i = r.browserInfo.m_unAppID;
	let a = r.browserInfo.m_unPID;
	const s = n.useMemo(() => [C.BV.GamepadUI.AppRunning()], []);
	return (
		<C.m_ appid={i} pid={a} initialEntries={s} initialIndex={0}>
			{children}
		</C.m_>
	);
});
function K_1(e) {
	const { cm, instance } = e;
	const r_params = instance.params;
	const s = i.W.EBrowserType_OffScreen;
	const l = {
		width: r_params.nScreenWidth,
		height: r_params.nScreenHeight,
		left: 0,
		top: 0,
	};
	const c = instance.params.browserInfo;
	const { popup, element } = _Y(
		"overlay",
		instance,
		h.Uv.DesktopUI,
		{
			title: `SP Overlay: ${c.m_unPID}/${+c.m_nBrowserID}/${+c.m_eBrowserType}`,
			dimensions: l,
			replace_existing_popup: false,
			target_browser: c,
			eCreationFlags: S.Wf.Composited | S.Wf.ApplyBrowserScaleToDimensions,
			browserType: s,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{},
	);
	const p = n.useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	n.useEffect(() => {
		if (popup) {
			popup.ConfigContext = p;
		}
	}, [popup, p]);
	const [g, setG] = n.useState(r_params.nScreenWidth);
	const [_, set] = n.useState(r_params.nScreenHeight);
	n.useEffect(
		() =>
			fm(() => {
				popup?.SteamClient.Window.ResizeTo(
					r_params.nScreenWidth,
					r_params.nScreenHeight,
					true,
				);
				setG(r_params.nScreenWidth);
				set(r_params.nScreenHeight);
			}),
		[popup, r_params],
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
										<M.$i gameid={r_params.gameid} width={g} height={_} />
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
	const t = q3(() => qw().LoginState);
	const r = q3(() => e.BIsGamepadApplicationUIInitialized());
	const [i, setI] = n.useState(false);
	n.useEffect(() => {
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
function U() {
	sessionStorage.setItem(x, "true");
}
function W(e) {
	const { cm, instance } = e;
	const o = Wx();
	const l = q3(() => s.oy.RemainInBigPictureModeOnClose);
	const { strMovieUrl, bFullscreenVideo, bIsLoadingMovie, bIsExpectedToLoad } =
		j_1();
	const [w, setW] = n.useState(
		(sessionStorage.getItem(x) !== "true" || !p.TS.ON_DECK) &&
			bIsExpectedToLoad,
	);
	const v = n.useCallback(() => setW(false), []);
	Z3(v, 30000, []);
	let I = i.W.EBrowserType_DirectHWND_Borderless;
	let E = z;
	if (!p.TS.ON_DECK || !CI()) {
		E.left = h.Mb;
		E.top = h.Mb;
		I = i.W.EBrowserType_DirectHWND;
	}
	let M = h.Ij | S.Wf.Composited | S.Wf.TransparentParentWindow;
	const T = q3(
		() => (a.rV.WindowedMode || p.TS.DECK_DISPLAY_MODE) && !p.TS.IN_GAMESCOPE,
	);
	if (!T) {
		M |= S.Wf.FullScreen;
	}
	if (p.TS.DECK_DISPLAY_MODE) {
		E.width = z.width;
		E.height = z.height;
		M &= ~S.Wf.Resizable;
		M |= S.Wf.IgnoreSavedSize;
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
			dimensions: E,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			browserType: I,
			eCreationFlags: M,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
			bHideOnClose: !p.TS.IN_GAMESCOPE && l,
			bNoFocusOnShow: !R,
		},
		H,
	);
	n.useEffect(() => {
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
		if (w && bIsLoadingMovie) {
			return null;
		} else {
			return _u.createPortal(
				<g.O ownerWindow={popup} instance={e.instance}>
					<C.Kw basename={CQ()}>
						{w && strMovieUrl && (
							<D.K
								bPlayingMovie={w}
								strOverrideStartupMovie={strMovieUrl}
								bFullscreenVideo={bFullscreenVideo}
								onVideoComplete={v}
								onVideoError={v}
								onVideoPlay={U}
							/>
						)}
						<c.Is
							cm={cm}
							mode={m._5.Full}
							bPlayingStartupMovie={w}
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
function V(e) {
	const { cm, instance } = e;
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
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		null,
	);
	n.useEffect(
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
function H(e) {
	const { cm, instance } = e;
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
		strUserAgent: e.instance.params.strUserAgentIdentifier,
	});
	if (element) {
		return _u.createPortal(
			<g.O ownerWindow={popup} instance={e.instance}>
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
	const [t, setT] = n.useState(false);
	const [i] = q3(() => [qw().GetCurrentUser().strAccountName]);
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
	const [r, setR] = n.useState(false);
	const a = (() => {
		const [e, setE] = n.useState();
		n.useEffect(() => {
			SteamClient.SteamChina.GetCustomLauncherAppID().then((e) => setE(e));
		}, []);
		return e;
	})();
	n.useEffect(() => {
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
function Pe(e) {
	const { cm, instance } = e;
	let a = {
		width: 640,
		height: 480,
		left: h.Mb,
		top: h.Mb,
	};
	let s = Localize("#GameLauncher_Title");
	let l = S.Wf.ApplyBrowserScaleToDimensions;
	const { popup, element } = _Y(
		"SteamChinaReviewLauncherWindow",
		instance,
		h.Uv.DesktopUI,
		{
			title: s,
			dimensions: a,
			browserType: i.W.EBrowserType_DirectHWND,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			eCreationFlags: l,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{
			onClose: (e, t) => {
				if (!S.Of.BShuttingDown()) {
					SteamClient.User?.StartShutdown(true);
				}
			},
		},
	);
	const p = n.useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	n.useEffect(() => {
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
const he = {
	width: 1280,
	height: 800,
	left: h.Mb,
	top: h.Mb,
};
const Ce = {
	width: 400,
	height: 800,
	left: h.Mb,
	top: h.Mb,
};
function _e(e) {
	const { cm, instance, bSmallMode } = e;
	let l = i.W.EBrowserType_DirectHWND_Borderless;
	let c = Localize(
		e.bSmallMode ? "#WindowName_SteamDesktopMini" : "#WindowName_SteamDesktop",
	);
	let m = bSmallMode ? Ce : he;
	const g = e.bSmallMode ? 230 : 1010;
	const _ = e.bSmallMode ? 100 : 600;
	const y = e.bSmallMode ? "Window_SteamDesktopMini" : "Window_SteamDesktop";
	const v = h3(y);
	const I = nB(instance);
	const E = h.Ij | S.Wf.Composited | (p.TS.SILENT_STARTUP ? S.Wf.Hidden : 0);
	const M = v;
	const T = n.useMemo(
		() => ({
			title: c,
			dimensions: m,
			minWidth: g,
			minHeight: _,
			replace_existing_popup: false,
			target_browser: instance.params.browserInfo,
			browserType: l,
			eCreationFlags: E,
			strUserAgent: instance.params.strUserAgentIdentifier,
			bHideOnClose: true,
			bNoFocusOnShow: !I,
		}),
		[instance, l, E, m, c, g, _, I],
	);
	const { popup, element } = _Y("SP Desktop", instance, h.Uv.DesktopUI, T, M);
	const D = n.useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	n.useEffect(() => {
		if (popup) {
			popup.ConfigContext = D;
		}
	}, [popup, D]);
	const NRef = n.useRef(bSmallMode);
	n.useEffect(() => {
		if (popup && bSmallMode !== NRef.current) {
			const e = (e) => {
				if (e.data == "window_moved" || e.data == "window_restored") {
					setTimeout(() => {
						popup.SteamClient.Window.ShowWindow();
					}, 250);
				}
			};
			popup.addEventListener("message", e);
			const t = v.updateParamsBeforeShow(T);
			if (t.strRestoreDetails) {
				popup.SteamClient.Window.HideWindow();
				popup.SteamClient.Window.RestoreWindowSizeAndPosition(
					t.strRestoreDetails,
				);
				popup.SteamClient.Window.SetMinSize(g, _);
			} else {
				popup.SteamClient.Window.SetMinSize(g, _);
				popup.SteamClient.Window.ResizeTo(m.width, m.height, false);
			}
			NRef.current = bSmallMode;
			return () => {
				popup?.removeEventListener("message", e);
			};
		}
		return () => {};
	}, [bSmallMode, T, v, popup, m, g, _]);
	yu(instance);
	AssertMsg(
		s.oy.MainInstanceUIMode != 4,
		"DesktopUI windows should only ever be present when the main instance's UI mode is desktop",
	);
	if (element && s.oy.MainInstanceUIMode != 4) {
		return _u.createPortal(
			<A.ss {...D}>
				<_w.p body_class={h.a$}>
					<C.Gl initialPath={C.BV.Init()}>
						<S.kc ownerWindow={popup}>
							<o.ER instance={instance}>
								<B.tH>
									<b.FQ>
										<ge.Ay cm={cm} bSmallMode={e.bSmallMode} />
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
function Re(e) {
	const { cm, instance } = e;
	const a = n.useCallback((e, t) => {
		Se.fR.Info("Main popup created.");
	}, []);
	const o = n.useCallback((e, t) => {
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
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{
			onCreate: a,
			onClose: o,
		},
	);
	const ARef = n.useRef(undefined);
	((e, t, r) => {
		n.useEffect(() => {
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
	oH(popup, (e) =>
		Se.fR.Debug(
			`Overlay for VRWindow ${popup.name} visibility=${e ? "true" : "false"}`,
		),
	);
	const p = n.useMemo(() => [C.BV.Library.Home()], []);
	L(instance);
	if (element) {
		return (
			<>
				{_u.createPortal(
					<g.O
						ownerWindow={popup}
						instance={e.instance}
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
export function u(e) {
	const { cm } = e;
	const r = q3(() => s.oy.WindowStore.SteamUIWindows);
	const [i] = VI("small_mode");
	E4(1920, 1080);
	return r.map((e) => {
		const r = e.params.browserInfo;
		if (e.IsMainGamepadUIWindow()) {
			return <W key="Main" cm={cm} instance={e} />;
		} else if (e.IsGamepadUIOverlayWindow()) {
			return <V key={`overlay_${r.m_unPID}`} cm={cm} instance={e} />;
		} else if (e.IsStandaloneKeyboardWindow()) {
			return <H key="keyboard" cm={cm} instance={e} />;
		} else if (e.IsControllerConfiguratorWindow()) {
			return <_ key="controllerconfigurator" cm={cm} instance={e} />;
		} else if (e.IsVRWindow()) {
			return (
				<Re
					key={`vr${e.params.bSimulateOnDesktop ? "-desktop" : ""}`}
					cm={cm}
					instance={e}
				/>
			);
		} else if (e.IsMainDesktopWindow()) {
			return <_e key="SteamDesktop" cm={cm} instance={e} bSmallMode={i} />;
		} else if (e.IsDesktopOverlayWindow()) {
			return <K_1 key={`overlay_${r.m_unPID}`} cm={cm} instance={e} />;
		} else if (e.IsDesktopLoginWindow()) {
			return <I key="DesktopLogin" cm={cm} instance={e} />;
		} else if (e.IsSteamChinaReviewLauncher()) {
			return <Pe key="SteamChinaReviewLauncher" cm={cm} instance={e} />;
		} else {
			return null;
		}
	});
}
export function w() {
	const e = (() => {
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
	const t = c4().bUnderlaySupported;
	return e && t;
}
