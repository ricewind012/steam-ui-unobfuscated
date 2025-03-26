var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./96680.js");
var l = require("./91369.js");
var c = require(/*webcrack:missing*/ "./83599.js");
var m = require("./12031.js");
var u = m;
var d = require("./65265.js");
var A = d;
import { Sleep } from "../../actual_src/utils/time.js";
var g = require("./35425.js");
var h = require("./26893.js");
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require(/*webcrack:missing*/ "./90765.js");
var f = require("./6023.js");
var b = require("./45967.js");
const y = Number.parseInt(u["vrgamepadui-floating-bar-popup-panel-width"]);
const S = Number.parseInt(u["vrgamepadui-floating-bar-popup-panel-height"]);
const w = new c.wd("VRPooledPopupStore");
export const fR = w;
export var b7;
(function (e) {
	e[(e.DashboardBarPopup = 0)] = "DashboardBarPopup";
	e[(e.Tooltip = 1)] = "Tooltip";
	e[(e.MainPanelMenu = 2)] = "MainPanelMenu";
	e[(e.LoginQRCode = 3)] = "LoginQRCode";
})((b7 ||= {}));
class I {
	m_eHostType;
	m_Params;
	m_unIndex;
	m_Popup = undefined;
	m_RootElement = undefined;
	m_currentPooledPopupRequestId = undefined;
	m_timeLastPopupHidden = new Date(0);
	constructor(e, t, r) {
		(0, i.Gn)(this);
		this.m_eHostType = e;
		this.m_unIndex = t;
		this.m_Params = r;
	}
	GetMillisecondsSinceLastPopup() {
		if (this.BIsShowingPopup()) {
			return 0;
		} else {
			return new Date().getTime() - this.m_timeLastPopupHidden.getTime();
		}
	}
	BIsShowingPopup() {
		return this.m_currentPooledPopupRequestId != null;
	}
	get overlayKey() {
		return this.m_Params.strOverlayKeyPrefix + "." + (this.m_unIndex + 1);
	}
}
(0, n.Cg)([i.sH], I.prototype, "m_Popup", undefined);
(0, n.Cg)([i.sH], I.prototype, "m_RootElement", undefined);
(0, n.Cg)([i.sH], I.prototype, "m_currentPooledPopupRequestId", undefined);
const E = {
	[b7.DashboardBarPopup]: {
		unNumHostsInPool: 1,
		params: {
			strOverlayKeyPrefix: g.uO,
			unWidth: y,
			unHeight: S,
		},
	},
	[b7.Tooltip]: {
		unNumHostsInPool: 3,
		params: {
			strOverlayKeyPrefix: g.Ey,
			unWidth: 400,
			unHeight: 40,
		},
	},
	[b7.MainPanelMenu]: {
		unNumHostsInPool: 1,
		params: {
			strOverlayKeyPrefix: g.r,
			unWidth: 300,
			unHeight: 800,
		},
	},
	[b7.LoginQRCode]: {
		unNumHostsInPool: 1,
		params: {
			strOverlayKeyPrefix: g.a_,
			unWidth: 500,
			unHeight: 500,
		},
	},
};
class M {
	constructor() {
		(0, i.Gn)(this);
	}
	contentElement;
	resizeObserver;
	bPopupSizeIsStale = false;
	eState = undefined;
	fnOnStateChange = undefined;
	host;
	params = undefined;
}
(0, n.Cg)([i.sH], M.prototype, "eState", undefined);
(0, n.Cg)([i.sH], M.prototype, "params", undefined);
class T {
	m_unTooltipId;
	m_Element;
	m_Offset;
	m_Params;
	m_CalculatedPositionOnParent;
	m_StrText = undefined;
	m_bDelayFinished = undefined;
	constructor(e, t, r, n) {
		(0, i.Gn)(this);
		this.m_unTooltipId = e;
		this.m_Element = t;
		this.m_StrText = r;
		this.m_Params = n;
		const a = t.getBoundingClientRect();
		const s = [(a.left + a.right) / 2, (a.top + a.bottom) / 2];
		const o = [
			s[0] +
				((this.m_Params?.normalizedPositionOnElement?.x ?? 0) * a.width) / 2,
			s[1] -
				((this.m_Params?.normalizedPositionOnElement?.y ?? 0) * a.height) / 2,
		];
		const l = [
			t.ownerDocument.defaultView.innerWidth,
			t.ownerDocument.defaultView.innerHeight,
		];
		this.m_CalculatedPositionOnParent = {
			x: (o[0] / l[0]) * 2 - 1,
			y: -((o[1] / l[1]) * 2 - 1),
		};
		if ((this.m_Params.unDelayMS ?? 0) > 0) {
			window.setTimeout(
				() => (this.m_bDelayFinished = true),
				this.m_Params.unDelayMS,
			);
		} else {
			this.m_bDelayFinished = true;
		}
	}
	BDelayFinished() {
		return this.m_bDelayFinished;
	}
}
(0, n.Cg)([i.sH], T.prototype, "m_StrText", undefined);
(0, n.Cg)([i.sH], T.prototype, "m_bDelayFinished", undefined);
export class ou {
	m_Instance;
	m_unNextPooledPopupRequestId;
	m_mapPooledPopupHosts = {};
	m_mapPooledPopupRequests = new Map();
	m_mapTooltips = new Map();
	m_unNextTooltipId = 1;
	constructor(e) {
		(0, i.Gn)(this);
		this.m_Instance = e;
		for (const [e, { unNumHostsInPool: t, params: r }] of Object.entries(E)) {
			const n = Number.parseInt(e);
			this.m_mapPooledPopupHosts[n] = [];
			for (let e = 0; e < t; e++) {
				this.m_mapPooledPopupHosts[n].push(new I(n, e, r));
			}
		}
	}
	Init() {
		this.m_unNextPooledPopupRequestId =
			Math.round((new Date().getTime() / 1000) % 10000) * 10000;
		return [];
	}
	ShowTooltip(e, t, r) {
		const n = this.m_unNextTooltipId++;
		const i = new T(n, e, t, r);
		this.m_mapTooltips.set(n, i);
		return {
			hideTooltip: () => {
				this.m_mapTooltips.delete(n);
			},
			updateText: (e) => {
				if (i.m_StrText != e) {
					i.m_StrText = e;
				}
			},
		};
	}
	GetNextPooledPopupHostForType(e) {
		const t = this.m_mapPooledPopupHosts[e] ?? [];
		if (t.length == 0) {
			return;
		}
		for (let e = 0; e < t.length; e++) {
			const r = t[e];
			const n = r.GetMillisecondsSinceLastPopup();
			if (!r.BIsShowingPopup() && n > 32) {
				return t[e];
			}
		}
		let r = 0;
		for (let e = 1; e < t.length; e++) {
			if (
				t[e].m_currentPooledPopupRequestId < t[r].m_currentPooledPopupRequestId
			) {
				r = e;
			}
		}
		return t[r];
	}
	ClosePooledPopup(e, t = 2) {
		let r = Promise.resolve({});
		if (e == null) {
			return r;
		}
		const n = this.m_mapPooledPopupRequests.get(e);
		this.m_mapPooledPopupRequests.delete(e);
		if (n) {
			if (n.host?.m_currentPooledPopupRequestId === e) {
				n.host.m_currentPooledPopupRequestId = undefined;
				n.host.m_timeLastPopupHidden = new Date();
			}
			if (n.eState != 2 && n.eState != 3) {
				n.eState = t;
				n.fnOnStateChange?.(n.eState);
				if (
					b.qL.IsSteamVRRunning &&
					!this.m_Instance.IsVRSimulatedOnDesktopWindow()
				) {
					r = l.p.SteamVR.HideDashboardPopup({
						dashboard_popup_request_id: e,
					});
				}
			}
			n.resizeObserver?.disconnect();
			n.resizeObserver = undefined;
			n.contentElement?.remove();
		}
		return r;
	}
	CreatePooledPopup(e, t, r) {
		if (!t) {
			return;
		}
		const n = this.GetNextPooledPopupHostForType(e);
		if (!n) {
			w.Error(
				"Can't create Dashboard Popup; No CDashboardPopupHost exists.",
				n,
			);
			return;
		}
		if (!n.m_Popup || !n.m_RootElement) {
			w.Error(
				"Can't create Dashboard Popup; The CDashboardPopupHost has no associated window.",
				n,
			);
			return;
		}
		const i = n.GetMillisecondsSinceLastPopup();
		const a = n.m_currentPooledPopupRequestId;
		const s = n.m_Popup.document.createElement("div");
		const o = t.origin_on_popup?.x ?? 0;
		const c = t.origin_on_popup?.y ?? 0;
		s.className = (0, _.A)(
			A.PopupContent,
			o == -1 && A.AlignLeft,
			o == 0 && A.AlignCenterX,
			o == 1 && A.AlignRight,
			c == -1 && A.AlignBottom,
			c == 0 && A.AlignCenterY,
			c == 1 && A.AlignTop,
		);
		const m = this.m_unNextPooledPopupRequestId++;
		const u = new M();
		u.host = n;
		u.contentElement = s;
		u.fnOnStateChange = r;
		u.eState = 0;
		u.bPopupSizeIsStale = false;
		this.m_mapPooledPopupRequests.set(m, u);
		n.m_currentPooledPopupRequestId = m;
		const d = n.m_Popup.devicePixelRatio;
		const g = {
			...t.offset,
			x_pixels: (t.offset?.x_pixels ?? 0) * d,
			y_pixels: (t.offset?.y_pixels ?? 0) * d,
			z_pixels: (t.offset?.z_pixels ?? 0) * d,
		};
		if (g.z_pixels == 0 && !g.z_meters) {
			g.z_meters = 0.01;
		}
		(async () => {
			if (a != null) {
				n.m_RootElement.style.visibility = "hidden";
				await Promise.all([this.ClosePooledPopup(a), Sleep(32)]);
			} else if (i != null && i < 32) {
				await Sleep(32 - i);
			}
			if (u.eState != 0) {
				this.ClosePooledPopup(m);
				return;
			}
			n.m_RootElement.appendChild(u.contentElement);
			await (function (e) {
				if (e?.hasChildNodes()) {
					return Promise.resolve();
				}
				return new Promise((t) => {
					const r = new MutationObserver((e) => {
						for (const n of e) {
							if (n.type === "childList") {
								t();
								r.disconnect();
								break;
							}
						}
					});
					const n = {
						childList: true,
					};
					r.observe(e, n);
				});
			})(u.contentElement);
			if (u.eState != 0) {
				this.ClosePooledPopup(m);
				return;
			}
			const e = k(u.contentElement, n.m_Popup);
			u.params = {
				...t,
				offset: g,
				clip_rect: e,
				dashboard_popup_request_id: m,
				popup_overlay_key: n.overlayKey,
			};
			u.resizeObserver = (0, C.Fd)(u.contentElement, () =>
				this.RecomputePooledPopupSize(m, false),
			);
			if (!this.m_Instance.IsVRSimulatedOnDesktopWindow()) {
				while (true) {
					try {
						await l.p.SteamVR.ShowDashboardPopup(u.params);
					} catch (e) {
						if (e instanceof f.xn && e.error?.error == 5) {
							w.Warning(
								"Call to ShowDashboardPopup() timed out. Will try again. Params:",
								u.params,
								"Error:",
								e,
							);
							await Sleep(1000);
							if (u.eState != 0) {
								this.ClosePooledPopup(m);
								return;
							}
							continue;
						}
						w.Error(
							"Failed to ShowDashboardPopup(). Params:",
							u.params,
							"Error:",
							e,
						);
						this.ClosePooledPopup(m, 3);
						return;
					}
					break;
				}
			}
			if (u?.eState == 0) {
				n.m_RootElement.style.visibility = "visible";
				u.eState = 1;
				u.fnOnStateChange?.(u.eState);
				this.RecomputePooledPopupSize(m, true);
			} else {
				this.ClosePooledPopup(m);
			}
		})();
		return m;
	}
	async RecomputePooledPopupSize(e, t) {
		const r = this.m_mapPooledPopupRequests.get(e);
		if (!r) {
			w.Error(
				"Can't RecomputePooledPopupSize() for a request that no longer exists:",
				e,
			);
			return;
		}
		if (t && !r.bPopupSizeIsStale) {
			return;
		}
		switch (r.eState) {
			case 0:
			case 1:
				break;
			default:
				w.Error(
					"Can't RecomputePooledPopupSize() for a request that's no longer pending or shown:",
					e,
					{
						...r,
					},
				);
				return;
		}
		if (!r.params) {
			w.Debug(
				"Can't RecomputePooledPopupSize() for a request that has no existing params yet, will retry when mounted.",
				e,
				{
					...r,
				},
			);
			r.bPopupSizeIsStale = true;
			return;
		}
		const n = k(r.contentElement, r.host.m_Popup);
		r.params = {
			...r.params,
			clip_rect: n,
		};
		r.bPopupSizeIsStale = false;
		if (!this.m_Instance.IsVRSimulatedOnDesktopWindow()) {
			try {
				await l.p.SteamVR.ShowDashboardPopup(r.params);
			} catch (n) {
				r.bPopupSizeIsStale = true;
				if (n instanceof f.xn && n.error?.error == 5) {
					w.Warning(
						"Call to ShowDashboardPopup() to update popup size timed out. Will try again. Params:",
						r.params,
						"Error:",
						n,
					);
					window.setTimeout(() => this.RecomputePooledPopupSize(e, t), 1000);
				} else {
					w.Error(
						"Failed to ShowDashboardPopup() when updating popup size:",
						n,
					);
				}
				return;
			}
		}
	}
}
function k(e, t) {
	const r = e.getBoundingClientRect();
	const n = t?.innerWidth;
	const i = t?.innerHeight;
	const a = {
		u_min: r.left / n,
		v_min: r.top / i,
		u_max: (r.left + r.width) / n,
		v_max: (r.top + r.height) / i,
	};
	for (const r of ["u_min", "v_min", "u_max", "v_max"]) {
		const n = a[r];
		if (!Number.isFinite(n)) {
			w.Warning(
				"Failed to create valid clipRect for VRGamepadUI Popup Content element:",
				{
					clipRect: a,
					element: e,
					view: t,
				},
			);
			return null;
		}
		if (n < 0) {
			a[r] = 0;
		} else if (n > 1) {
			a[r] = 1;
		}
	}
	return a;
}
export function Xy(e, t, r) {
	const n = (0, o.$2)();
	const i = (0, a.q3)(() => n?.BIsGamepadApplicationUIInitialized());
	const l = n?.VRPooledPopupStore;
	const c = (function (e) {
		const t = (0, o.$2)();
		return (0, a.q3)(() =>
			(t?.VRPooledPopupStore?.m_mapPooledPopupHosts[e] ?? []).every(
				(e) => e.m_Popup != null && e.m_RootElement != null,
			),
		);
	})(e);
	const m = s.useRef(t);
	const u = s.useRef(undefined);
	u.current = r;
	const [d, A] = s.useState(true);
	const [p, g] = s.useState();
	s.useEffect(() => {
		if (!d) {
			return;
		}
		if (!c) {
			w.Debug(
				"Couldn't yet create pooled popup due to no host overlays existing for popup type",
				b7[e],
				" - trying again later.",
			);
			return;
		}
		if (!i) {
			w.Debug(
				"Couldn't yet create pooled popup due to the window instance not yet being initialized:",
				b7[e],
				" - trying again later.",
			);
			return;
		}
		if (!l) {
			w.Error("Failed to show pooled popup due to no VRPooledPopupStore.");
			u.current?.onStateChange?.(3);
			return;
		}
		const t = l.CreatePooledPopup(e, m.current, (e) =>
			u.current?.onStateChange?.(e),
		);
		g(t);
		return () => {
			l?.ClosePooledPopup(t);
		};
	}, [d, l, e, c, i]);
	const h = (0, a.q3)(() =>
		n?.VRPooledPopupStore?.m_mapPooledPopupRequests.get(p),
	);
	const C = h?.contentElement;
	return {
		element: C,
		methods: s.useMemo(
			() => ({
				close: () => A(false),
			}),
			[],
		),
	};
}
export function V5(e, t) {
	const r = s.useRef(undefined);
	const n = s.useRef(undefined);
	const i = (0, o.$2)();
	const a = s.useRef(undefined);
	a.current = e;
	const l = (0, h.Cb)();
	const c = s.useRef(undefined);
	c.current = {
		...l,
		...(t ?? {}),
	};
	const m = s.useCallback(() => {
		if (n.current != null) {
			n.current?.hideTooltip();
		}
	}, []);
	const u = s.useCallback(() => {
		m();
		if (a.current) {
			n.current = i?.VRPooledPopupStore?.ShowTooltip(
				r.current,
				a.current,
				c.current,
			);
		}
	}, [m, i]);
	const d = s.useCallback(
		(e) => {
			if (e !== r.current) {
				if (r.current) {
					m();
					r.current.removeEventListener("mouseenter", u);
					r.current.removeEventListener("mouseleave", m);
				}
				r.current = e;
				e?.addEventListener("mouseenter", u);
				e?.addEventListener("mouseleave", m);
			}
		},
		[u, m],
	);
	s.useEffect(() => {
		n.current?.updateText(e);
	}, [e]);
	s.useEffect(() => () => m(), [m]);
	return d;
}
(0, n.Cg)([i.sH], ou.prototype, "m_mapPooledPopupHosts", undefined);
(0, n.Cg)([i.sH], ou.prototype, "m_mapPooledPopupRequests", undefined);
(0, n.Cg)([i.sH], ou.prototype, "m_mapTooltips", undefined);
