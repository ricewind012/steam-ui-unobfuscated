import n, { Cg } from "./34629.js";
import i from "./18057.js";
import a from "./96593.js";
import s from "./61175.js";
import o, { Gn, fm } from "./89193.js";
import l, { q3 } from "./90095.js";
import c from "./63696.js";
import m from "./85243.js";
import u, { Jc } from "./79769.js";
import d from "./83599.js";
import A, { gc } from "./52451.js";
import p from "./72476.js";
import g, { IB } from "./33572.js";
import h from "./46422.js";
import C from "./5822.js";
import _ from "./60917.js";
const f = new d.wd("CompositionState").Debug;
export const VE = 769;
const y = 413090;
export class _n {
	m_mapCompositionStateRequests = new Map();
	m_mapCompostionRequestsDebugInfo = new Map();
	m_eLatestCompositionState = m.I5.Opaque;
	m_bLatestAppOverlayStateActive = false;
	m_nLatestAppID = null;
	m_eLastPushedToWebHelperCompositionState = {
		eCompositionMode: null,
		appidCompositionQueue: [],
		windowID: 0,
	};
	m_mapFocusableApps = new o.Es();
	m_currentlyFocusedAppid = Jc();
	m_currentlyFocusedWindowID = Jc();
	m_Instance;
	constructor(e) {
		Gn(this);
		this.m_Instance = e;
		this.m_currentlyFocusedAppid.Set(VE);
		const t = Object.keys(m.I5)
			.map((e) => Number.parseInt(e))
			.filter((e) => !isNaN(e));
		for (const e of t) {
			this.m_mapCompositionStateRequests.set(e, 0);
		}
	}
	Init() {
		let e = [];
		e.push(fm(this.EnsureCorrectComposition));
		e.push(fm(this.EnsureCorrectGameOverlayState));
		e.push(
			SteamClient.System.UI.RegisterForFocusChangeEvents(
				this.OnFocusChangeEvent,
			).unregister,
		);
		return e;
	}
	GetName() {
		return (
			this.m_Instance.BrowserWindow?.document?.title ?? "<no browser window>"
		);
	}
	OnFocusChangeEvent(e) {
		let t = [];
		let r = false;
		if (
			this.m_currentlyFocusedAppid.Value != e.focusedApp.appid ||
			this.m_currentlyFocusedWindowID.Value != e.focusedApp.windowid
		) {
			this.m_currentlyFocusedAppid.Set(e.focusedApp.appid);
			this.m_currentlyFocusedWindowID.Set(e.focusedApp.windowid);
			r = true;
		}
		t.push(
			`${this.GetName()}: Focused window = appid: ${e.focusedApp.appid}, pid: ${
				e.focusedApp.pid
			}, window: ${e.focusedApp.windowid.toString(16)}, exe: ${
				e.focusedApp.strExeName
			}`,
		);
		let n = new Map();
		this.m_mapFocusableApps.forEach((e, t) => {
			n.set(t, true);
		});
		t.push(
			`${this.GetName()}: > ${e.rgFocusable?.length} focusable window(s):`,
		);
		let i = new Map();
		let a = false;
		if (e.rgFocusable?.length != 0) {
			e.rgFocusable.forEach((e, r) => {
				let n = i.get(e.appid);
				n ||= {
					appid: e.appid,
					windowids: [],
				};
				n.windowids.push(e.windowid);
				i.set(e.appid, n);
				t.push(
					`${this.GetName()}: >> #${r} = appid: ${e.appid}, pid: ${
						e.pid
					}, window: ${e.windowid.toString(16)}, exe: ${e.strExeName}`,
				);
			});
			i.forEach((e, t) => {
				let i = n.get(t);
				if (i === undefined) {
					this.m_mapFocusableApps.set(t, e);
					n.set(t, false);
					r = true;
					a = true;
				} else if (i === true) {
					this.m_mapFocusableApps.set(t, e);
					n.set(e.appid, false);
				}
				h.oy.WindowStore.SetRunningAppWindowIDs(e.appid, e.windowids);
			});
		}
		n.forEach((e, n) => {
			if (e === true) {
				if (this.m_mapFocusableApps.delete(n)) {
					r = true;
					a = true;
				}
				h.oy.WindowStore.RemoveRunningAppWindowIDs(n);
				t.push(
					`${this.GetName()}: >> Removing focusable app and related windows: ${n}`,
				);
			}
		});
		if (r) {
			let e = "";
			this.m_mapFocusableApps.forEach((t, r) => {
				if (e.length > 0) {
					e += `, ${r}`;
				} else {
					e += r;
				}
			});
			t.push(`${this.GetName()}: Focusable windows changed: ${e}`);
			this.EnsureCorrectComposition();
		}
		if (a) {
			t.push(
				`${this.GetName()}: Added or removed an app from list of focusable windows--scope running apps`,
			);
			h.oy.ScopeRunningApps();
		}
		if (r) {
			t.forEach((e) => f(e));
		}
	}
	GetCompositionState() {
		return this.m_eLatestCompositionState;
	}
	GetCurrentlyFocusedAppidSubscribableValue() {
		return this.m_currentlyFocusedAppid;
	}
	GetCurrentlyFocusedWindowIDSubscribableValue() {
		return this.m_currentlyFocusedWindowID;
	}
	AddMinimumCompositionStateRequest(e, t) {
		this.ChangeMinimumCompositionStateRequest(null, e, t);
	}
	RemoveMinimumCompositionStateRequest(e, t) {
		this.ChangeMinimumCompositionStateRequest(e, null, t);
	}
	ChangeMinimumCompositionStateRequest(e, t, r) {
		if (e != null) {
			this.m_mapCompostionRequestsDebugInfo.delete(r);
		}
		if (t != null) {
			this.m_mapCompositionStateRequests.set(
				t,
				this.m_mapCompositionStateRequests.get(t) + 1,
			);
			this.m_mapCompostionRequestsDebugInfo.set(r, t);
		}
		if (e != null) {
			this.m_mapCompositionStateRequests.set(
				e,
				this.m_mapCompositionStateRequests.get(e) - 1,
			);
		}
		this.EnsureCorrectComposition();
	}
	BHasAnyFocusableNonSteamWindows() {
		let e = Array.from(this.m_mapFocusableApps.keys());

		for (let r of e) {
			if (r != VE && r != y) {
				return true;
			}
		}

		return false;
	}
	BHasAnyFocusableWindowsForAppID(e) {
		let t = Array.from(this.m_mapFocusableApps.keys());
		for (let r = 0; r < t.length; ++r) {
			if (e == t[r]) {
				return true;
			}
		}
		return false;
	}
	ComputeOverallMinimumRequestedComposition() {
		const e = this.m_Instance.MainRunningApp;
		const t = e != null;
		const r = this.m_Instance.MenuStore.IsSideMenuVisible();
		const n = this.m_Instance.MenuStore.IsSideMenuInteractable();
		let a = this.BHasAnyFocusableNonSteamWindows();
		let o = _.Tu.BAnyContextRenderingToasts();
		let l = this.m_Instance.GetShowingGlobalModal();
		let c = this.m_Instance.HeaderStore.GetForceHeaderAfterResume();
		const u = this.m_Instance.LocationPathName;
		const d = this.m_Instance.BRouteMatch([i.BV.GamepadUI.AppRunning()]);
		const A = this.m_Instance.BRouteMatch([
			i.BV.GamepadUI.Chat(),
			i.BV.Library.Root(),
			i.BV.Settings.Root(),
			i.BV.AppProperties.Root(),
			i.BV.GamepadUI.Zoo.Root(),
		]);
		const g = s.n6.currentGameListSelection;
		const h = this.m_Instance.BRouteMatch(i.BV.Library.App.Root());
		let C = e?.display_status == 1;
		let b = e?.display_status == 2;
		let y = null;
		if (l) {
			y = m.I5.Opaque;
		} else if (
			this.m_Instance.BRouteMatch(i.BV.GamepadUI.AppOverlay.Keyboard())
		) {
			y = m.I5.OverlayKeyboard;
		} else if (
			this.m_Instance.BRouteMatch(
				i.BV.GamepadUI.AppOverlay.AppRunningControls(),
			)
		) {
			y = m.I5.Overlay;
		} else if (
			(C && h && g?.nAppId == e?.appid) ||
			(b && g?.nAppId == e?.appid)
		) {
			y = m.I5.Hidden;
		} else if (A) {
			y = m.I5.Opaque;
		} else if (this.m_Instance.BRouteMatch(i.BV.GamepadUI.GameAPIOSK())) {
			y = m.I5.Overlay;
		} else if (
			(h && !t) ||
			(this.m_Instance.BRouteMatch(i.BV.GamepadUI.AppRunning()) &&
				(!t ||
					(p.TS.IN_GAMESCOPE &&
						!this.BHasAnyFocusableWindowsForAppID(e?.appid))))
		) {
			y = m.I5.Opaque;
		} else if (d) {
			y = m.I5.Hidden;
		}
		let S = null;
		if (
			y == m.I5.OverlayKeyboard ||
			this.m_mapCompositionStateRequests.get(m.I5.OverlayKeyboard) > 0
		) {
			S = m.I5.OverlayKeyboard;
		} else if (
			y == m.I5.Opaque ||
			this.m_mapCompositionStateRequests.get(m.I5.Opaque) > 0
		) {
			S = m.I5.Opaque;
		} else if (y == m.I5.Hidden && b) {
			S = m.I5.Hidden;
		} else if (
			a &&
			(y == m.I5.Overlay ||
				this.m_mapCompositionStateRequests.get(m.I5.Overlay) > 0)
		) {
			f(
				`${this.GetName()}: ComputeOverallMinimumRequestedComposition: active minimum composition state requests (could be missing data):`,
				this.m_mapCompostionRequestsDebugInfo,
			);
			S = m.I5.Overlay;
		} else if (
			y == m.I5.Notification ||
			this.m_mapCompositionStateRequests.get(m.I5.Notification) > 0
		) {
			f(
				`${this.GetName()}: ComputeOverallMinimumRequestedComposition: active minimum composition state requests (could be missing data):`,
				this.m_mapCompostionRequestsDebugInfo,
			);
			S = m.I5.Notification;
		} else {
			S =
				y == m.I5.Hidden ||
				this.m_mapCompositionStateRequests.get(m.I5.Hidden) > 0
					? m.I5.Hidden
					: u
						? m.I5.Opaque
						: m.I5.Hidden;
		}
		if (r) {
			let e = n ? m.I5.Overlay : m.I5.Notification;
			if (!a) {
				e = m.I5.Opaque;
			}
			if (S < e) {
				S = e;
			}
		}
		if (S < m.I5.Notification && o) {
			S = m.I5.Notification;
		}
		if (S < m.I5.Notification && c) {
			S = m.I5.Notification;
		}
		let w = m.I5[y];
		let B = m.I5[S];
		f(
			`${this.GetName()}: ComputeOverallMinimumRequestedComposition from routes (${u}) => ${w}, ultimate return value ${B}`,
		);
		return S;
	}
	IsBehindSystemUI() {
		return this.m_currentlyFocusedAppid.Value == y;
	}
	GetOverridingComposition() {
		if (this.IsBehindSystemUI()) {
			return m.I5.Hidden;
		} else {
			return null;
		}
	}
	BNumberArraysEqual(e, t) {
		if (e.length != t.length) {
			return false;
		}
		for (let r = 0; r < e.length; ++r) {
			if (e[r] != t[r]) {
				return false;
			}
		}
		return true;
	}
	EnsureCorrectComposition() {
		const e = this.m_Instance.MainRunningAppID;
		const t = this.ComputeOverallMinimumRequestedComposition();
		const r = this.GetOverridingComposition() ?? t;
		const n = [];
		const i = e && a.tw.GetAppOverviewByAppID(e);
		let s = 0;
		if (i) {
			if (i.shortcut_override_appid) {
				n.push(i.shortcut_override_appid);
			} else {
				n.push(i.appid);
			}
			s = h.oy.WindowStore.GetAppFocusedWindowID(e);
		}
		if (r === m.I5.Opaque) {
			n.unshift(VE);
			s = 0;
		} else {
			n.push(VE);
		}
		if (
			r == null ||
			(this.m_eLastPushedToWebHelperCompositionState.eCompositionMode == r &&
				this.m_eLastPushedToWebHelperCompositionState.windowID == s &&
				this.BNumberArraysEqual(
					this.m_eLastPushedToWebHelperCompositionState.appidCompositionQueue,
					n,
				))
		) {
			if (r == null && this.m_eLatestCompositionState != null) {
				f(
					`${this.GetName()}: SetComposition skipped, eCurrentComposition = null`,
				);
			}
		} else {
			let e =
				m.I5[this.m_eLastPushedToWebHelperCompositionState.eCompositionMode];
			let t = m.I5[r];
			f(
				`${this.GetName()}: SetComposition`,
				`${e}(${this.m_eLastPushedToWebHelperCompositionState.eCompositionMode}) => ${t}(${r})`,
				`[${n.join(",")}], `,
				`Window: ${s?.toString(16)}`,
			);
			this.m_Instance.BrowserWindow?.SteamClient.Window.SetComposition(r, n, s);
			if (i) {
				SteamClient.Overlay.SetOverlayState(i.gameid, r);
			}
			this.m_eLastPushedToWebHelperCompositionState.eCompositionMode = r;
			this.m_eLastPushedToWebHelperCompositionState.appidCompositionQueue = n;
			this.m_eLastPushedToWebHelperCompositionState.windowID = s;
		}
		this.m_eLatestCompositionState = r;
		this.EnsureCorrectGameOverlayState();
	}
	EnsureCorrectGameOverlayState() {
		if (!p.TS.IN_GAMESCOPE) {
			return;
		}
		const e = this.m_Instance.MainRunningAppID;
		let t = this.m_eLatestCompositionState;
		let r = false;
		let n = "";
		if (t == m.I5.OverlayKeyboard) {
			r = false;
			n = "overlay keyboard";
		} else if (t == m.I5.Opaque) {
			r = true;
			n = "opaque";
		} else if (
			t == m.I5.Overlay &&
			(!p.TS.IN_GAMESCOPE ||
				this.m_Instance.MenuStore.GetOpenSideMenu() == C.Ez.Main ||
				this.m_Instance.MenuStore.GetOpenSideMenu() == C.Ez.Main ||
				!!this.m_Instance.BRouteMatch(i.BV.GamepadUI.Chat()))
		) {
			r = true;
			n = "overlay";
		}
		if (e != null) {
			if (
				r != this.m_bLatestAppOverlayStateActive ||
				e != this.m_nLatestAppID
			) {
				f(`${this.GetName()}: NotifyGameOverlayStateChanged - `, r, e, n);
				SteamClient.System.NotifyGameOverlayStateChanged(r, e);
			}
		}
		this.m_bLatestAppOverlayStateActive = r;
		this.m_nLatestAppID = e;
	}
}
export function xf() {
	const e = IB();
	return gc(e.GetCurrentlyFocusedAppidSubscribableValue());
}
export function Bx(e, t) {
	const r = IB();
	const NRef = c.useRef(null);
	const [i, setI] = c.useState(false);
	c.useEffect(() => {
		if (!i) {
			if (NRef.current == null) {
				r.AddMinimumCompositionStateRequest(e, t);
			} else {
				r.ChangeMinimumCompositionStateRequest(NRef.current, e, t);
			}
			NRef.current = e;
		}
	}, [e, i, r, t]);
	c.useEffect(
		() => () => r.RemoveMinimumCompositionStateRequest(NRef.current, t),
		[r, t],
	);
	return {
		releaseComposition: c.useCallback(() => {
			if (!i) {
				setI(true);
				r.RemoveMinimumCompositionStateRequest(NRef.current, t);
				NRef.current = null;
			}
		}, [r, i, t]),
	};
}
export function P4() {
	const e = IB();
	return q3(() => e.GetCompositionState());
}
Cg([o.sH], _n.prototype, "m_eLatestCompositionState", undefined);
Cg([o.XI.bound], _n.prototype, "OnFocusChangeEvent", null);
Cg([A.oI], _n.prototype, "EnsureCorrectComposition", null);
Cg([A.oI], _n.prototype, "EnsureCorrectGameOverlayState", null);
