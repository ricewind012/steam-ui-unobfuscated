import { Localize } from "../../actual_src/utils/localization.js";
import  { Z } from "./browserview_windowfocuscoordinator.js";
import i, { Xp } from "./33572.js";
import a, { l5 } from "./96555.js";
import s from "./63696.js";
import o from "./69164.js";
import l, { G7 } from "./20893.js";
import c from "./82011.js";
import m from "./61657.js";
import u from "./83599.js";
import d, { gc, hL, cZ } from "./52451.js";
import A, { rP } from "./72476.js";
import p from "./8436.js";
import _, { q3 } from "./90095.js";
import f from "./73375.js";
import y, { Ju } from "./10606.js";
import S, { A as A_1 } from "./90765.js";
import w from "./81994.js";
import B from "./35488.js";
import v from "./87935.js";
import I, { sO } from "./5640.js";
import E, { N4 } from "./77347.js";
import M from "./94746.js";
import T, { $2 } from "./96680.js";
import R, { Nr } from "./42318.js";
import k from "./64608.js";
import D, { w as w_1 } from "./10501.js";
const g = p;
const h = new u.wd("GamepadEvents").Debug;
function C(e) {
	const { browser, visible, autoFocus, classNameContainer, children } = e;
	const _Ref = s.useRef(undefined);
	const navRef = s.useRef(undefined);
	const b = l5();
	const [y, setY] = s.useState(false);
	const [w, setW] = s.useState(false);
	const bMaybeFocus = y && w;
	const I = setY;
	const E = bMaybeFocus && (b || !A.TS.ON_DECK);
	s.useEffect(() => {
		if (E) {
			SteamClient.Input.SetWebBrowserActionset(true);
			return () => SteamClient.Input.SetWebBrowserActionset(false);
		}
	}, [E]);
	Z(browser.name, browser.GetBrowser(), navRef, bMaybeFocus && visible);
	s.useEffect(() => {
		if (visible && autoFocus) {
			navRef.current.TakeFocus();
		}
	}, [visible, autoFocus]);
	const M = s.useCallback((e) => setW(e.BIsActiveWithinContext()), []);
	s.useEffect(() => {
		const e = navRef.current.NavTree();
		setW(e.BIsActiveWithinContext());
		const t = e.OnActiveStateChangedCallbacks.Register(() => M(e));
		return () => t.Unregister();
	}, [M]);
	const T = Xp();
	s.useEffect(() => {
		if (bMaybeFocus) {
			return browser.RegisterOnActionDescriptionsChangedCallback(
				T.SetActionDescriptionsFromMap,
			);
		}
	}, [bMaybeFocus, T, browser]);
	const R = s.useCallback(
		(e) => {
			h(`Got unhandled button from ${browser.name}: ${m.pR[e]}`);
			G7(_Ref.current, e);
		},
		[browser, _Ref],
	);
	const k = ((e, t) => {
		const r = gc(e.GetGameInputSupportLevel());
		const n = r === c.h.Full || r === c.h.Basic;
		const i = s.useCallback(
			(t) => {
				if (n) {
					switch (t.detail.button) {
						case m.pR.STEAM_GUIDE:
						case m.pR.STEAM_QUICK_MENU: {
							return;
						}
					}
					h(`Forwarding ${t.type} ${m.pR[t.detail.button]} to ${e.name}`);
					e.ForwardGamepadEventDetail(t.type, t.detail);
					t.stopPropagation();
				} else {
					h(
						`Forwarding events is not enabled for browser view ${
							e.name
						}, support level: ${c.h[e.GetGameInputSupportLevel().Value]}`,
					);
				}
			},
			[e, n],
		);
		hL(e.OnUnhandledInputCallbacks(), t);
		return i;
	})(browser, R);
	let D = {
		focusable: visible,
		onFocusWithin: I,
		onButtonDown: k,
		onButtonUp: k,
	};
	if (gc(browser.GetGameInputSupportLevel()) != c.h.Full) {
		D.onOKActionDescription = null;
	}
	return (
		<o.Z ref={_Ref} className={classNameContainer}>
			<o.Z className={g.BrowserContainer} noFocusRing navRef={navRef} {...D}>
				{children}
			</o.Z>
		</o.Z>
	);
}
export const Pw = Nr((e) => {
	const { url, name, refBrowser, browserViewOptions, ...a } = e;
	const o = $2();
	const LRef = s.useRef(undefined);
	LRef.current ||= o.CreateBrowserView(name, browserViewOptions);
	s.useEffect(
		() => () => {
			LRef.current.Destroy();
			LRef.current = null;
		},
		[],
	);
	s.useEffect(() => {
		LRef.current.LoadURL(url);
	}, [url]);
	s.useEffect(() => {
		cZ(refBrowser, LRef.current);
		return () => cZ(refBrowser, null);
	}, [refBrowser]);
	return <DS browser={LRef.current} visible {...a} />;
});
export function DS(e) {
	const {
		browser,
		className,
		visible,
		hideForModals,
		external,
		displayURLBar,
		bCanChangeURL,
		autoFocus,
		allowUnderlay = false,
	} = e;
	const u = q3(
		() => browser.BIsLoadingURL() && browser.BExternalTriggeredLoad(),
	);
	const d = Ju() && hideForModals;
	const A = N4();
	const p = w_1() && allowUnderlay;
	const h = visible && A;
	const b = h && !u && !d;
	const B = u && A;
	const v = visible && !A;
	return (
		<div
			className={A_1(
				className,
				visible && g.Visible,
				g.MainBrowser,
				allowUnderlay && g.AllowUnderlay,
			)}
		>
			<G {...e} />
			{displayURLBar && (
				<Hf
					external={external}
					browser={browser}
					bCanChangeURL={bCanChangeURL}
				/>
			)}
			{!v && (
				<C
					browser={browser}
					autoFocus={autoFocus}
					visible={h}
					classNameContainer={g.BrowserContainer}
				>
					<f.m4
						className={g.Browser}
						visible={b}
						browser={browser.GetBrowser()}
						underlay={p}
					/>
					{B && <w.j showFooter />}
				</C>
			)}
			{v && <M.I focusable />}
		</div>
	);
}
function G(e) {
	const { browser } = e;
	const r = q3(() => browser.URL);
	const n = sO(r);
	s.useEffect(() => {
		if (n) {
			const e = v.B7.ResolveURL("ParentalBlocked");
			if (r != e) {
				browser.LoadURL(e);
			}
		}
	}, [browser, r, n]);
	return null;
}
export function Hf(e) {
	const { browser, external, bCanChangeURL } = e;
	const i = q3(() => browser.DisplayURL);
	const l = q3(() => browser.BIsLoadingURL());
	const c = l5();
	const m = i.startsWith("https://") ? <B.Lock locked /> : <B.Globe />;
	const u = N4();
	const ARef = s.useRef(undefined);
	const p = s.useCallback(() => {
		browser.LoadURL(ARef.current.value);
		return "VKClose";
	}, [browser]);
	const h = s.useCallback(() => {
		if (ARef.current?.element) {
			ARef.current.element.value = "";
		}
	}, []);
	const C = s.useCallback((e) => {
		e.target.select();
	}, []);
	const f = s.useCallback((e) => {
		if (ARef.current?.element) {
			ARef.current.element.value = e;
		}
	}, []);
	const y = s.useCallback((e, t) => {
		if (ARef.current?.element) {
			ARef.current.element.value = e;
		}
	}, []);
	const S = s.useCallback((e, t) => {
		if (ARef.current?.element) {
			ARef.current.element.value = e;
		}
	}, []);
	hL(browser.StartRequestCallbacks, f);
	hL(browser.StartLoadingCallbacks, y);
	hL(browser.FinishedRequestCallbacks, S);
	q3(() => browser.CanGoBackward);
	q3(() => browser.CanGoForward);
	return (
		<o.Z className={g.URLBar} flow-children="row">
			{l && <B.Spinner />}
			{!l && <o.Z className={g.StatusIcon}>{m}</o.Z>}
			<o.Z
				className={g.URL}
				onOptionsButton={h}
				onOptionsActionDescription={Localize("#Clear")}
			>
				{!bCanChangeURL && i}
				{bCanChangeURL && (
					<k.pd
						className={g.URLInput}
						ref={(e) => {
							ARef.current = e;
							if (e?.element) {
								e.element.value = i;
							}
						}}
						onEnterKeyPress={p}
						onFocus={C}
						spellCheck={false}
					/>
				)}
			</o.Z>
			{u && !c && <P browser={browser} url={i} bLoading={l} />}
		</o.Z>
	);
}
function P(e) {
	const t = gc(e.browser.GetGameInputSupportLevel());
	if (rP().IN_VR) {
		return null;
	}
	switch (t) {
		case c.h.PageUnloading:
		case c.h.Unknown:
		case c.h.Full: {
			return null;
		}
	}
	return (
		<o.Z className={g.InputSupportLevel}>
			<div className={g.RequireTouchscreenLabel}>
				{Localize(
					A.TS.ON_DECK
						? "#Browser_InputSupportLevel_None"
						: "#Browser_InputSupportLevel_None_Desktop",
				)}
			</div>
			{A.TS.ON_DECK ? <B.TouchTap /> : <B.Mouse />}
		</o.Z>
	);
}
