import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s, { q3 } from "./90095.js";
import o from "./81827.js";
import l from "./16251.js";
import c from "./83599.js";
import { xM, CH } from "./52451.js";
import u from "./92031.js";
import d from "./91369.js";
export const fR = new c.wd("VR");
class p {
	constructor() {
		Gn(this);
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
	const [r, setR] = i.useState();
	const a = i.useCallback(() => true, []);
	const SRef = i.useRef();
	SRef.current = t ?? a;
	i.useEffect(() => {
		const t = () => {
			const t = !!SRef.current && !!SRef.current();
			qL.SetInteractionAffordance(r, e, t);
			if (e == 2 && t) {
				r?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
					l.en.ButtonEnter,
					0,
				);
			}
		};
		const n = () => {
			qL.SetInteractionAffordance(r, e, false);
			if (e == 2 && SRef.current && SRef.current()) {
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
			qL.SetInteractionAffordance(r, e, false);
		};
	}, [r, e]);
	return setR;
}
export function gb() {
	return q3(() => qL.IsVRHMDPresent);
}
export function FJ() {
	return q3(() => qL.IsSteamVRRunning);
}
export function IF() {
	return q3(() => qL.IsVRHMDAwake);
}
export function JP() {
	return q3(() => qL.VRKeyboardStatus);
}
export function AP() {
	qL.Init();
}
export function mJ() {
	return {
		...q3(() => qL.error),
		clearError: qL.ClearError,
	};
}
function S(e, t, r) {
	const NRef = i.useRef(undefined);
	const a = xM();
	const s = CH();
	const o = i.useCallback(async () => {
		if (!SteamClient) {
			return;
		}
		const n_current = NRef.current;
		try {
			NRef.current = await r(e, t);
		} catch (e) {
			NRef.current = undefined;
		}
		if (NRef.current !== n_current && !a()) {
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
	return NRef.current;
}
export function Fq(e) {
	const TRef = i.useRef(false);
	const r = xM();
	const n = CH();
	const a = i.useCallback(
		(e) => {
			if (!r() && TRef.current !== e) {
				TRef.current = e;
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
	return TRef.current;
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
	return q3(() => qL.BHasMutualCapability(e));
}
Cg([a.sH], p.prototype, "m_rgMutualCapabilities", undefined);
Cg([a.sH], p.prototype, "m_bHMDPresent", undefined);
Cg([a.sH], p.prototype, "m_bHMDHardwareDetected", undefined);
Cg([a.sH], p.prototype, "m_strHMDName", undefined);
Cg([a.sH], p.prototype, "m_bIsVRRunning", undefined);
Cg([a.sH], p.prototype, "m_error", undefined);
Cg([a.sH], p.prototype, "m_eHMDActivityLevel", undefined);
Cg([a.sH], p.prototype, "m_bVRDeviceSeenRecently", undefined);
Cg([a.sH], p.prototype, "m_bIsKeyboardOpen", undefined);
Cg([a.sH], p.prototype, "m_eKeyboardFlags", undefined);
Cg([a.sH], p.prototype, "m_sInitialKeyboardText", undefined);
Cg([a.sH], p.prototype, "m_unSceneAppID", undefined);
Cg([a.sH], p.prototype, "m_bSimulatingVROnDesktop", undefined);
Cg([a.XI.bound], p.prototype, "OnVRHardwareDetected", null);
Cg([a.XI.bound], p.prototype, "OnVRModeChanged", null);
Cg([a.XI.bound], p.prototype, "OnStartupError", null);
Cg([a.XI.bound], p.prototype, "OnHMDActivityLevelChanged", null);
Cg([a.XI.bound], p.prototype, "OnSceneAppChanged", null);
Cg([a.XI.bound], p.prototype, "OnVRDeviceSeenRecentlyChanged", null);
Cg([a.XI.bound], p.prototype, "OnKeyboardStatus", null);
Cg([a.XI.bound], p.prototype, "ClearError", null);
export const qL = new p();
