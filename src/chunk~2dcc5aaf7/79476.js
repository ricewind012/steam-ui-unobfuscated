import { Localize } from "../../actual_src/utils/localization.js";
import n, { JE, DV, FI } from "./18057.js";
import i from "./57565.js";
import a, { ch } from "./33572.js";
import s, { iW } from "./31800.js";
import o, { K1 } from "./91703.js";
import l, { PG, wm, cO, _h } from "./87913.js";
import c, { ED, i4 } from "./5822.js";
import m, { Xm, ZT } from "./60917.js";
import u from "./5640.js";
import d, { qw, Wx } from "./89748.js";
import A, { Qu, Eb } from "./46422.js";
import p from "./23783.js";
import g, { q3 } from "./90095.js";
import h, { useCallback, useRef } from "./63696.js";
import C from "./78325.js";
import _, { W6 } from "./49519.js";
import f from "./58254.js";
import b from "./15521.js";
import y from "./3524.js";
import S from "./84252.js";
import w from "./55116.js";
import B from "./69164.js";
import v from "./21105.js";
import I from "./4690.js";
import E, { H as H_1 } from "./80310.js";
import M from "./15181.js";
import T, { sd } from "./73375.js";
import R from "./35488.js";
import k, { ls } from "./22004.js";
import { A as A_1 } from "./90765.js";
import F, { OU } from "./51076.js";
import G, { rP } from "./72476.js";
import { k6, Y$, on } from "./60115.js";
import P from "./81661.js";
import U from "./42085.js";
import W, { a_ as a_1 } from "./64608.js";
import H from "./34544.js";
import q from "./11521.js";
import Q from "./63312.js";
import Z from "./4406.js";
import Y from "./74362.js";
import K from "./70519.js";
import X, { yL, Ev } from "./77347.js";
import J from "./22091.js";
import $ from "./85182.js";
import te from "./72858.js";
import { VI } from "./34792.js";
import { Hg } from "./91720.js";
import { BGameRecordingFeatureEnabled } from "./4069.js";
import se, { _3, _x } from "./34819.js";
import oe from "./66943.js";
import { Z as Z_1, b as b_1 } from "./9482.js";
import ce, { DP, vB } from "./17386.js";
import { In } from "./51943.js";
import { Iz } from "../../actual_src/stores/25467.js";
import { hb } from "./96555.js";
import { R7 } from "./11131.js";
import pe from "./83571.js";
import ge from "./2306.js";
import Ce from "./90985.js";
import _e from "./10294.js";
import { $2 } from "./96680.js";
import { DF } from "./52451.js";
function L() {
	return <P.p5 />;
}
function Z_1() {
	return <P.RA />;
}
function X_1() {
	return <P.Mu />;
}
function V() {
	const e = W6();
	const t = K1();
	const r = useCallback(() => {
		e.push(n.BV.Library.Home(), {
			bShowGuidedTour: true,
		});
		t();
	}, [e, t]);
	const i = G.TS.ON_DECK;
	const a = q3(() => qw().GetServicesInitialized());
	const s = JE();
	const l = DV();
	const c = FI();
	return (
		<U.aU>
			<U.kn>
				<W.xh layout="below" bottomSeparator="none" onClick={s}>
					{(0, Localize)("#QuickAccess_Tab_Help_HelpSite")}
				</W.xh>
			</U.kn>
			{i && (
				<U.kn>
					<W.xh layout="below" bottomSeparator="none" onClick={l}>
						{(0, Localize)("#QuickAccess_Tab_Help_ViewManual")}
					</W.xh>
				</U.kn>
			)}
			<U.kn>
				<W.xh layout="below" bottomSeparator="none" onClick={c}>
					{(0, Localize)("#QuickAccess_Tab_Help_ReportABug")}
				</W.xh>
			</U.kn>
			{a && G.TS.ON_DECK && (
				<U.kn>
					<W.xh layout="below" bottomSeparator="none" onClick={r}>
						{(0, Localize)("#QuickAccess_Tab_Help_ReplayTour")}
					</W.xh>
				</U.kn>
			)}
		</U.aU>
	);
}
const j = H;
function Ee_1() {
	J.Fd.Get().GetControllers();
	return (
		<U.aU
			title={(0, Localize)(
				"#QuickAccess_Tab_Settings_Section_Controller_Title",
			)}
		>
			<U.kn>
				<$.oH />
			</U.kn>
			<U.kn>
				<$.IC />
			</U.kn>
			<U.kn>
				<$.AR bShowIcon />
			</U.kn>
		</U.aU>
	);
}
function Ae_1() {
	const [e] = VI("g_background_mode");
	const t = Qu();
	const r = q3(() => Hg());
	if (BGameRecordingFeatureEnabled()) {
		if (e == 0) {
			return null;
		} else if (e != 2 || t || t || r) {
			return (
				<U.aU title={(0, Localize)("#QuickAccess_Tab_GameRecording")}>
					{e == 2 && <te.ManualRecordingToggle />}
					{e == 1 && <te.BackgroundRecordingQuickSetting />}
				</U.aU>
			);
		} else {
			return null;
		}
	} else {
		return null;
	}
}
function He() {
	const e = yL();
	const t = q3(() => J.Fd.Get().GetControllers());
	const r = Z_1();
	const n = !A.oy.BIsInOOBE && t.length != 0;
	const i = _3();
	const a = _x();
	const s = DP();
	const o = vB();
	const l = In();
	const c = hb();
	const m = Ev();
	const u = Iz();
	const d = m || u || u || r || u || r || c;
	const p = R7();
	return (
		<>
			{c && (
				<U.aU
					title={(0, Localize)(
						"#QuickAccess_Tab_Settings_Section_Brightness_Title",
					)}
				>
					<pe.PS />
					<U.kn>
						<Z.jJ iconOnly padding="compact" />
					</U.kn>
					<U.kn>
						<pe.zt />
					</U.kn>
				</U.aU>
			)}
			{l && (
				<U.aU
					title={(0, Localize)("#QuickAccess_Tab_Settings_Section_Audio_Title")}
				>
					<U.kn>
						<K.RC direction={Y.T4.Output} padding="compact" />
					</U.kn>
					<U.kn>
						<K.RC direction={Y.T4.Input} padding="compact" />
					</U.kn>
				</U.aU>
			)}
			{d && (
				<U.aU
					title={(0, Localize)("#QuickAccess_Tab_Settings_Section_Other_Title")}
				>
					{r && (
						<U.kn>
							<W.xh
								onClick={() => b_1(p)}
								layout="below"
								bottomSeparator="none"
							>
								{(0, Localize)("#QuickAccess_ReorderControllers_Button")}
							</W.xh>
						</U.kn>
					)}
					{(m || u) && (
						<U.kn>
							<W.y4
								checked={i}
								onChange={(e) => se.mG.Get().SetAirplaneMode(e)}
								label={(0, Localize)(
									"#QuickAccess_Tab_Settings_Section_Shortcuts_AirplaneMode",
								)}
								icon={<R.AirplaneMode />}
								padding="compact"
							/>
						</U.kn>
					)}
					{m && (
						<U.kn>
							<W.y4
								checked={e}
								onChange={(e) => X.OQ.Get().SetWifiEnabled(e)}
								label={(0, Localize)(
									"#QuickAccess_Tab_Settings_Section_Shortcuts_Wifi",
								)}
								icon={<R.WiFi />}
								padding="compact"
							/>
						</U.kn>
					)}
					{u && <oe.ty />}
					{c && (
						<U.kn>
							<ge.C
								feature={7}
								checked={a}
								onChange={(e) => se.mG.Get().SetNightModeEnabled(e)}
								label={(0, Localize)(
									"#QuickAccess_Tab_Settings_Section_Shortcuts_NightMode",
								)}
								icon={<R.NightMode />}
								padding="compact"
							/>
						</U.kn>
					)}
				</U.aU>
			)}
			{n && <Ee_1 />}
			{BGameRecordingFeatureEnabled() && <Ae_1 />}
			{s && (
				<U.aU title={o}>
					<U.kn>
						<ce.Eh concise />
					</U.kn>
					<U.kn>
						<ce.dy />
					</U.kn>
				</U.aU>
			)}
		</>
	);
}
function ye(e, t) {
	let r = 300 - t * 300;
	r *= 1;
	return {
		X_1: e.x + r,
		y: e.y,
		width: e.width,
		height: e.height,
	};
}
export const Gt = h.memo((e) => {
	const { active } = e;
	const [r, setR] = h.useState(active);
	const m = r || active;
	h.useEffect(() => setR(active), [active]);
	const u = OU(n.BV.GamepadUI.AppRunning());
	iW(m && !u, "QuickAccessMenuBrowserView");
	const d = h.useCallback(
		(e) => A.oy.NavigationManager.RegisterInputSource(e),
		[],
	);
	let p = sd(d, {
		name: "QuickAccess",
	});
	const { fnOnFocusNavActivated, fnOnFocusNavDeactivated } = k6(
		c.Ez.QuickAccess,
		p,
		e.ModalManager,
	);
	const f = K1();
	PG(p?.GetViewWindow());
	if (!p) {
		return null;
	}
	const b = {
		nDuration: 300,
		fnStep: ye,
	};
	let S = u ? "transparent" : "darkblur";
	let w = A_1(j.ViewPlaceholder, u && j.FullHeight);
	return (
		<i.H appearance={S} visible={m} onClick={f}>
			<T.m4
				className={w}
				browser={p.GetBrowserView()}
				visible={m}
				animateIn={b}
			/>
			<y.b5 ownerWindow={p.GetViewWindow()}>
				{C.createPortal(
					<Me
						active={active}
						visible={m}
						showHeaderAndFooter={u}
						onFocusNavActivated={fnOnFocusNavActivated}
						onFocusNavDeactivated={fnOnFocusNavDeactivated}
					/>,
					p.GetRenderElement(),
				)}
			</y.b5>
		</i.H>
	);
});
export const pZ = h.memo((e) => {
	const { active } = e;
	const r = DF(active, 100);
	const [i, setI] = h.useState(false);
	const l = active || i || i || r;
	ED(l);
	const [m, setM] = h.useState(false);
	h.useEffect(() => setM(l), [l]);
	const d = OU(n.BV.GamepadUI.AppRunning());
	iW(m && !d, "QuickAccessMenuEmbedded");
	const A = ch();
	const p = h.useCallback(() => {
		A.OnMenuDeactivated(c.Ez.QuickAccess);
	}, [A]);
	const g = A_1(
		j.ViewPlaceholder,
		j.QuickAccessMenuEmbedded,
		d && j.FullHeight,
		active && m && j.Open,
	);
	if (l) {
		return (
			<div className={j.QuickAccessMenuEmbeddedContainer}>
				<div
					className={g}
					onAnimationStart={() => setI(true)}
					onAnimationEnd={() => setI(false)}
				>
					<Me
						active={active}
						visible={m}
						showHeaderAndFooter={d}
						onFocusNavDeactivated={p}
					/>
				</div>
			</div>
		);
	} else {
		return null;
	}
});
function Be(e) {
	return <div className={j.Title}>{(0, Localize)(e.locId)}</div>;
}
export function l8() {
	const e = Wx();
	const t = Eb();
	const r = rP().IN_VR;
	const n = wm();
	const i = cO();
	const a = _h();
	const s = $2();
	const o = e && (n || i);
	const m = !r && e && a;
	const u = e;
	const C = !r && e;
	const _ = !r;
	const f = (!r || s.IsVRWindowInGamescope()) && e && !t;
	const y = q3(() => Ce.l.playbackState);
	const S =
		e &&
		(!r ||
			y?.ePlaybackStatus == b.f.AudioPlayback_Playing ||
			y?.ePlaybackStatus == b.f.AudioPlayback_Playing ||
			y?.ePlaybackStatus == b.f.AudioPlayback_Paused);
	const w = !r;
	return h.useMemo(
		() =>
			[
				o && {
					key: c.qE.VoiceChat,
					tab: <R.VoiceRoom />,
					title: <></>,
					strTitle: (0, Localize)("#HeaderActions_VoiceChatActive"),
					panel: <Z_1 />,
					className: j.VoiceTab,
					vrPopupSize: "fit-content",
				},
				m && {
					key: c.qE.RemotePlayTogetherControls,
					tab: <R.RemotePlayTogether />,
					title: <></>,
					strTitle: (0, Localize)("#RemotePlayTogether_QuickAccessTitle"),
					panel: <X_1 />,
					vrPopupSize: "fit-content",
				},
				u && {
					key: c.qE.Notifications,
					tab: <R.Notifications />,
					title: <Be locId="#QuickAccess_Tab_Notifications_Title" />,
					strTitle: (0, Localize)("#QuickAccess_Tab_Notifications_Title"),
					panel: <q.C />,
					vrPopupSize: "fit-content",
				},
				C && {
					key: c.qE.Friends,
					tab: <R.Friends />,
					title: <></>,
					strTitle: undefined,
					panel: <L />,
					eFeature: 4,
					vrPopupSize: "full-height",
				},
				_ && {
					key: c.qE.Settings,
					title: <Be locId="#QuickAccess_Tab_Settings_Title" />,
					strTitle: (0, Localize)("#QuickAccess_Tab_Settings_Title"),
					tab: <R.Settings />,
					panel: <He />,
					vrPopupSize: "fit-content",
				},
				f && {
					key: c.qE.Perf,
					title: <Be locId="#QuickAccess_Tab_Perf_Title" />,
					strTitle: (0, Localize)("#QuickAccess_Tab_Perf_Title"),
					tab: <R.QAMPerformance />,
					panel: <Q.Bi />,
					vrPopupSize: "fit-content",
				},
				S && {
					key: c.qE.Soundtrack,
					title: <Be locId="#QuickAccess_Tab_Soundtrack_Title" />,
					strTitle: (0, Localize)("#QuickAccess_Tab_Soundtrack_Title"),
					tab: <R.Music />,
					panel: <p.SK />,
					vrPopupSize: "fit-content",
				},
				w && {
					key: c.qE.Help,
					title: <Be locId="#QuickAccess_Tab_Help_Title" />,
					strTitle: (0, Localize)("#QuickAccess_Tab_Help_Title"),
					tab: <R.Help />,
					panel: <V />,
					allowInKioskMode: false,
					vrPopupSize: "fit-content",
				},
			].filter((e) => e),
		[o, m, u, C, _, f, S, w],
	);
}
function Ie(e) {
	const t = a_1();
	const r = h.useMemo(
		() => ({
			...t,
			bQuickAccessMenu: true,
		}),
		[t],
	);
	return <W.Ce.Provider value={r}>{e.children}</W.Ce.Provider>;
}
function Ee(e) {
	return (
		(e.eFeature != null && !!u.jR.BIsFeatureBlocked(e.eFeature)) ||
		(e.allowInKioskMode === false && !!_e.Ih.BKioskModeLocked())
	);
}
function Me(e) {
	const { active, visible } = e;
	const IRef = h.useRef(undefined);
	const ARef = h.useRef(undefined);
	const LRef = h.useRef(undefined);
	const u = Y$(c.Ez.QuickAccess);
	h.useEffect(() => {
		if (active) {
			IRef.current.Activate(true);
		} else if (IRef.current?.BIsActive()) {
			IRef.current.Deactivate();
		}
	}, [active]);
	const d = h.useCallback(() => {
		LRef.current.TakeFocus();
		return true;
	}, []);
	const p = h.useCallback(() => {
		ARef.current.TakeFocus();
		return true;
	}, []);
	const C = l8();
	let f = i4();
	f = q3(() =>
		C.some((e) => e.key === f && !Ee(e))
			? f
			: C.length > 0
				? C[0].key
				: undefined,
	);
	let b = A_1("BasicUI", {
		[j.Container]: true,
		[j.Open]: e.visible,
	});
	let y = h.useCallback((e) => {
		e.stopPropagation();
		e.preventDefault();
	}, []);
	let v = h.useCallback(() => {
		d();
		return true;
	}, [d]);
	const E = K1();
	let M = Qu();
	const T = W6();
	const k = h.useCallback(() => {
		T.replace(n.BV.GamepadUI.AppOverlay.Keyboard());
	}, [T]);
	const N = h.useCallback(() => {
		E();
		k();
	}, [E, k]);
	h.useEffect(() => {
		d();
	}, [f, d]);
	const F = Xm();
	h.useEffect(() => {
		if (visible && f == c.qE.Notifications) {
			m.Tu.Viewed();
		}
	}, [f, F, visible]);
	const P = on();
	const L = rP();
	const z = A_1(
		j.QuickAccessMenu,
		e.showHeaderAndFooter && j.HeaderAndFooterVisible,
		L.IN_VR && j.VR,
	);
	const x = A_1(j.Tabs, e.showHeaderAndFooter && j.TabsWithFooter);
	return (
		<Ie>
			<S.B2
				navID="QuickAccess-NA"
				enabled={active || u}
				navTreeRef={IRef}
				onActivated={e.onFocusNavActivated}
				onDeactivated={e.onFocusNavDeactivated}
				autoFocus
				className={b}
				onCancelButton={d}
				onGlobalButtonDown={P}
			>
				<Te bQuickAccessMenuVisible={visible} />
				<w.g>
					<B.Z id="QuickAccess-Menu" className={z} onClick={y}>
						<div className={j.HeaderContainer}>
							<s.Y9 quickAccessHeader visible={e.showHeaderAndFooter} />
						</div>
						<B.Z className={j.Menu}>
							<B.Z
								className={x}
								navRef={LRef}
								autoFocus
								focusable={false}
								onCancel={E}
								onActivate={p}
								onMoveRight={p}
								navEntryPreferPosition={I.iU.PREFERRED_CHILD}
							>
								<Ke tabs={C} activeTab={f} />
								{M && (
									<B.Z className={j.KeyboardButton} focusable onActivate={N}>
										<R.ShowKeyboard />
									</B.Z>
								)}
							</B.Z>
							<B.Z className={j.PanelOuterNav} onMoveLeft={v} navRef={ARef}>
								<Ne tabs={C} activeTab={f} bMenuVisible={visible} />
							</B.Z>
						</B.Z>
					</B.Z>
				</w.g>
			</S.B2>
		</Ie>
	);
}
const Te = h.memo((e) => {
	const { bQuickAccessMenuVisible } = e;
	let [r, setR] = h.useState(0);
	let [i, setI] = h.useState(false);
	let [o, setO] = h.useState(false);
	const d = ch();
	const A = wm();
	const p = cO();
	let g = ZT();
	let C =
		g?.filter(
			(e) => e.eType == 8 || e.eType == 9 || e.eType == 9 || e.eType == 17,
		)?.length ?? 0;
	h.useEffect(() => {
		if (C != r) {
			setR(C);
			if (C > r && !bQuickAccessMenuVisible) {
				d.OpenQuickAccessMenu(c.qE.Notifications, false);
			}
		}
		if (p != o) {
			setO(p);
			if (p && !bQuickAccessMenuVisible) {
				d.OpenQuickAccessMenu(c.qE.VoiceChat, false);
			}
		}
		if (A != i) {
			setI(A);
			if (A && !bQuickAccessMenuVisible) {
				d.OpenQuickAccessMenu(c.qE.VoiceChat, false);
			}
		}
	}, [d, p, r, C, bQuickAccessMenuVisible, A, o, i]);
	return null;
});
function Re(e) {
	const { tab, selected } = e;
	let t_key = tab.key;
	const i = ch();
	const s = ((e) => q3(() => Ee(e)))(tab);
	const o = h.useCallback(() => {
		if (selected) {
			console.log("Trying to change focus to already selected tab");
		} else {
			i.OpenQuickAccessMenu(t_key);
		}
	}, [i, t_key, selected]);
	if (!tab) {
		return null;
	}
	const l = A_1(j.Tab, selected && j.Selected, s && j.Blocked, tab.className);
	const c = s || o;
	const m = selected || c;
	return (
		<B.Z
			key={tab.key.toString()}
			focusable={!s}
			className={l}
			onFocus={c}
			onActivate={m}
			preferredFocus={selected}
		>
			{tab.tab}
		</B.Z>
	);
}
function Ke(e) {
	let { tabs, activeTab } = e;
	let n = tabs.map((e) => (
		<Re key={e?.key.toString()} tab={e} selected={activeTab == e.key} />
	));
	return (
		<B.Z
			className={j.TabContentColumn}
			flow-children="column"
			preferredFocus
			navEntryPreferPosition={I.iU.PREFERRED_CHILD}
		>
			{n}
		</B.Z>
	);
}
function De(e, t) {
	return e.findIndex((e) => e.key == t);
}
function Ne(e) {
	let t = ls(e.tabs, e.activeTab, De, [k.fz.Up, k.fz.Down]);
	let r = A_1(j.AllTabContents, t == k.fz.Up ? j.Up : j.Down);
	return (
		<div className={r}>
			{e.tabs.map((t) => (
				<Fe
					key={t.key.toString()}
					tab={t}
					activeTab={e.activeTab}
					bMenuVisible={e.bMenuVisible}
				/>
			))}
		</div>
	);
}
const Fe = h.memo((e) => {
	let { tab, activeTab, bMenuVisible } = e;
	let i = tab.key == activeTab;
	let a = parseInt(j.TransitionMenuDelay);
	const s = {
		enter: j.Enter,
		enterActive: j.EnterActive,
		exit: j.Exit,
		exitActive: j.ExitActive,
	};
	const ORef = useRef(null);
	return (
		<f.A
			nodeRef={ORef}
			key={tab.key.toString()}
			classNames={s}
			timeout={a}
			in={i}
		>
			<Ge tab={tab} bActive={i && bMenuVisible} />
		</f.A>
	);
});
function Ge(e) {
	const { tab, bActive } = e;
	let n = h.useCallback(() => bActive, [bActive]);
	const { refScroll, refNav, bShouldMount } = H_1(bActive, 300000);
	return (
		<div
			ref={e.ref}
			className={A_1(j.ContentTransition, bActive && j.ActiveTab)}
		>
			{tab.title}
			<v.MS
				ref={refScroll}
				navRef={refNav}
				className={A_1(j.TabGroupPanel, `tab_${c.qE[tab.key]}`)}
				fnCanTakeFocus={n}
				onMoveUp={M.ru}
				onMoveDown={M.ru}
			>
				<w.g>{bShouldMount && tab.panel}</w.g>
			</v.MS>
		</div>
	);
}
