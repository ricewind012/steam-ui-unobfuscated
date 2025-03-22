var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require("./81827.js");
var l = require("./16251.js");
var c = require(/*webcrack:missing*/ "./83599.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./92031.js");
var d = require("./91369.js");
export const fR = new c.wd("VR");
class p {
	constructor() {
		(0, a.Gn)(this);
	}
	m_rgMutualCapabilities = undefined;
	m_bHMDPresent = undefined;
	m_bHMDHardwareDetected = undefined;
	m_strHMDName = undefined;
	m_bIsVRRunning = undefined;
	m_error = undefined;
	m_eHMDActivityLevel = undefined;
	m_bVRDeviceSeenRecently = false;
	m_bIsKeyboardOpen = undefined;
	m_eKeyboardFlags = undefined;
	m_sInitialKeyboardText = undefined;
	m_unSceneAppID = u.sc;
	m_bSimulatingVROnDesktop = false;
	m_mapAffordanceElems = new Map();
	Init() {
		SteamClient?.OpenVR?.RegisterForVRHardwareDetected?.(
			this.OnVRHardwareDetected,
		);
		SteamClient?.OpenVR?.RegisterForVRModeChange?.(this.OnVRModeChanged);
		SteamClient?.OpenVR?.RegisterForStartupErrors?.(this.OnStartupError);
		SteamClient?.OpenVR?.RegisterForHMDActivityLevelChanged?.(
			this.OnHMDActivityLevelChanged,
		);
		SteamClient?.OpenVR?.RegisterForVRSceneAppChange?.(this.OnSceneAppChanged);
		SteamClient?.OpenVR?.Device.RegisterForVRDeviceSeenRecently(
			this.OnVRDeviceSeenRecentlyChanged,
		);
		SteamClient?.OpenVR?.Keyboard.RegisterForStatus?.(this.OnKeyboardStatus);
		d.p.Steam.SetImplementation("ExecuteSteamURL", (e) => {
			if (e.url?.indexOf("steam://") == 0) {
				SteamClient?.URL?.ExecuteSteamURL(e?.url);
			}
		});
	}
	OnVRHardwareDetected(e, t, r) {
		this.m_bHMDPresent = e;
		this.m_bHMDHardwareDetected = t;
		this.m_strHMDName = r;
	}
	OnVRModeChanged(e) {
		this.m_bIsVRRunning = e;
		this.UpdateMutualCapabilities();
	}
	OnStartupError(e, t, r) {
		let n;
		if (e != o.V.k_EVRError_None) {
			n = {
				eClient: e,
				eInit: t,
				strInit: r,
			};
		}
		this.m_error = n;
	}
	OnHMDActivityLevelChanged(e) {
		this.m_eHMDActivityLevel = e;
	}
	OnSceneAppChanged(e) {
		this.m_unSceneAppID = e;
	}
	OnVRDeviceSeenRecentlyChanged(e) {
		this.m_bVRDeviceSeenRecently = e;
	}
	OnKeyboardStatus(e, t, r) {
		this.m_bIsKeyboardOpen = e;
		this.m_eKeyboardFlags = t;
		this.m_sInitialKeyboardText = r;
	}
	get IsVRHMDPresent() {
		return Boolean(
			this.m_bSimulatingVROnDesktop ||
				this.m_bHMDPresent ||
				this.m_bHMDHardwareDetected,
		);
	}
	get CurrentSceneAppID() {
		return this.m_unSceneAppID;
	}
	HasVRHMDBeenSeen() {
		return !!this.m_bVRDeviceSeenRecently;
	}
	get IsSteamVRRunning() {
		return this.m_bSimulatingVROnDesktop || !!this.m_bIsVRRunning;
	}
	get IsSteamVRSimulatedOnDesktop() {
		return this.m_bSimulatingVROnDesktop;
	}
	get IsVRHMDAwake() {
		return (
			this.m_bSimulatingVROnDesktop ||
			this.m_eHMDActivityLevel == l.JR.UserInteraction
		);
	}
	get VRKeyboardStatus() {
		const e = (this.m_eKeyboardFlags & l.QR.Minimal) != 0;
		return {
			bIsOpen: !!this.m_bIsKeyboardOpen,
			sInitialText: this.m_sInitialKeyboardText,
			bMinimal: e,
			bShowArrowKeys: !e || (this.m_eKeyboardFlags & l.QR.ShowArrowKeys) != 0,
			bShowDoneKey: (this.m_eKeyboardFlags & l.QR.HideDoneKey) == 0,
		};
	}
	get VRHMDActivityLevel() {
		if (this.m_bSimulatingVROnDesktop) {
			return l.JR.UserInteraction;
		} else {
			return this.m_eHMDActivityLevel;
		}
	}
	get VRKeyboardDisplayFlags() {
		return this.m_eKeyboardFlags;
	}
	get error() {
		return this.m_error;
	}
	ClearError() {
		this.m_error = undefined;
	}
	SetSimulatingVROnDesktop(e) {
		this.m_bSimulatingVROnDesktop = e;
	}
	SetInteractionAffordance(e, t, r) {
		if (e == null) {
			return;
		}
		if (!this.m_mapAffordanceElems.has(t)) {
			this.m_mapAffordanceElems.set(t, new Set());
		}
		const n = this.m_mapAffordanceElems.get(t);
		const i =
			Array.from(n).filter(
				(t) => t.ownerDocument.defaultView == e.ownerDocument.defaultView,
			).length > 0;
		if (r) {
			n.add(e);
		} else {
			n.delete(e);
		}
		const a =
			Array.from(n).filter(
				(t) => t.ownerDocument.defaultView == e.ownerDocument.defaultView,
			).length > 0;
		if (a != i) {
			e.ownerDocument.defaultView?.SteamClient?.OpenVR?.SetOverlayInteractionAffordance(
				t,
				a,
			);
		}
	}
	BHasMutualCapabilities() {
		return this.m_rgMutualCapabilities != null;
	}
	BHasMutualCapability(e) {
		return this.m_rgMutualCapabilities?.includes(e);
	}
	async UpdateMutualCapabilities() {
		if (this.IsSteamVRRunning) {
			try {
				this.m_rgMutualCapabilities =
					await SteamClient?.OpenVR?.GetMutualCapabilities();
			} catch (e) {
				this.m_rgMutualCapabilities = undefined;
				fR.Error("Failed to fetch Mutual Capabilities:", e);
			}
		} else {
			this.m_rgMutualCapabilities = undefined;
		}
	}
}
export function HJ(e, t) {
	const [r, n] = i.useState();
	const a = i.useCallback(() => true, []);
	const s = i.useRef();
	s.current = t ?? a;
	i.useEffect(() => {
		const t = () => {
			const t = !!s.current && !!s.current();
			E.SetInteractionAffordance(r, e, t);
			if (e == 2 && t) {
				r?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
					l.en.ButtonEnter,
					0,
				);
			}
		};
		const n = () => {
			E.SetInteractionAffordance(r, e, false);
			if (e == 2 && s.current && s.current()) {
				r?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
					l.en.ButtonLeave,
					0,
				);
			}
		};
		r?.addEventListener("mouseenter", t);
		r?.addEventListener("mouseleave", n);
		return () => {
			r?.removeEventListener("mouseenter", t);
			r?.removeEventListener("mouseleave", n);
			E.SetInteractionAffordance(r, e, false);
		};
	}, [r, e]);
	return n;
}
export function gb() {
	return (0, s.q3)(() => E.IsVRHMDPresent);
}
export function FJ() {
	return (0, s.q3)(() => E.IsSteamVRRunning);
}
export function IF() {
	return (0, s.q3)(() => E.IsVRHMDAwake);
}
export function JP() {
	return (0, s.q3)(() => E.VRKeyboardStatus);
}
export function AP() {
	E.Init();
}
export function mJ() {
	return {
		...(0, s.q3)(() => E.error),
		clearError: E.ClearError,
	};
}
function S(e, t, r) {
	const n = i.useRef(undefined);
	const a = (0, m.xM)();
	const s = (0, m.CH)();
	const o = i.useCallback(async () => {
		if (!SteamClient) {
			return;
		}
		const i = n.current;
		try {
			n.current = await r(e, t);
		} catch (e) {
			n.current = undefined;
		}
		if (n.current !== i && !a()) {
			s();
		}
	}, [e, t, r, a, s]);
	i.useEffect(() => {
		const r =
			SteamClient?.OpenVR?.DeviceProperties?.RegisterForDevicePropertyChange?.(
				e,
				t,
				o,
			);
		o();
		return () => r?.unregister && r.unregister();
	}, [e, t, o]);
	return n.current;
}
export function Fq(e) {
	const t = i.useRef(false);
	const r = (0, m.xM)();
	const n = (0, m.CH)();
	const a = i.useCallback(
		(e) => {
			if (!r() && t.current !== e) {
				t.current = e;
				n();
			}
		},
		[r, n],
	);
	const s = i.useCallback(async () => {
		try {
			a(await SteamClient?.OpenVR?.Device?.BIsConnected?.(e));
		} catch (e) {
			a(false);
		}
	}, [e, a]);
	i.useEffect(() => {
		const t =
			SteamClient?.OpenVR?.Device?.RegisterForDeviceConnectivityChange?.(e, a);
		s();
		return () => t?.unregister && t.unregister();
	}, [e, s, a]);
	return t.current;
}
export function dx(e, t) {
	return S(e, t, (e, t) =>
		SteamClient?.OpenVR?.DeviceProperties?.GetBoolDeviceProperty?.(e, t),
	);
}
export function Zy(e, t) {
	return S(e, t, (e, t) =>
		SteamClient?.OpenVR?.DeviceProperties?.GetFloatDeviceProperty?.(e, t),
	);
}
export function ax(e) {
	return (0, s.q3)(() => qL.BHasMutualCapability(e));
}
(0, n.Cg)([a.sH], p.prototype, "m_rgMutualCapabilities", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_bHMDPresent", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_bHMDHardwareDetected", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_strHMDName", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_bIsVRRunning", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_error", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_eHMDActivityLevel", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_bVRDeviceSeenRecently", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_bIsKeyboardOpen", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_eKeyboardFlags", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_sInitialKeyboardText", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_unSceneAppID", undefined);
(0, n.Cg)([a.sH], p.prototype, "m_bSimulatingVROnDesktop", undefined);
(0, n.Cg)([a.XI.bound], p.prototype, "OnVRHardwareDetected", null);
(0, n.Cg)([a.XI.bound], p.prototype, "OnVRModeChanged", null);
(0, n.Cg)([a.XI.bound], p.prototype, "OnStartupError", null);
(0, n.Cg)([a.XI.bound], p.prototype, "OnHMDActivityLevelChanged", null);
(0, n.Cg)([a.XI.bound], p.prototype, "OnSceneAppChanged", null);
(0, n.Cg)([a.XI.bound], p.prototype, "OnVRDeviceSeenRecentlyChanged", null);
(0, n.Cg)([a.XI.bound], p.prototype, "OnKeyboardStatus", null);
(0, n.Cg)([a.XI.bound], p.prototype, "ClearError", null);
const E = new p();
export const qL = E;
