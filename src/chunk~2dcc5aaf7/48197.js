var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./53833.js");
var s = require("./3274.js");
var o = s;
var l = require("./46422.js");
var c = require("./73375.js");
var m = require("./60917.js");
var u = require(/*webcrack:missing*/ "./49519.js");
var d = require("./18057.js");
var A = require("./96680.js");
var p = require(/*webcrack:missing*/ "./90095.js");
var g = require("./26711.js");
var h = g;
var C = require("./11374.js");
var _ = require(/*webcrack:missing*/ "./90765.js");
var f = require(/*webcrack:missing*/ "./44846.js");
const b = 0;
const y = parseInt(h.toastAnimateInMS) + parseInt(h.toastAnimateOutMS) + b;
const S = 1000;
const w = 320;
const B = 80;
const v = 20;
function I(e) {
	const { className: t, notification: r, displayInVR: i, onDismiss: a } = e;
	(function (e) {
		n.useEffect(() => {
			if (e) {
				m.Tu.PlayNotificationSound(e);
			}
		}, [e]);
	})(r);
	let s;
	let o = (0, _.A)(
		t,
		h.GamepadToastPopup,
		(i ?? false) && h.VR,
		(0, C.WZ)(r) && h.Warning,
	);
	if (r) {
		s = {
			eType: r.eType,
			notifications: [r],
		};
	}
	return n.createElement(
		"div",
		{
			style: E(r),
			className: o,
		},
		r &&
			n.createElement(C.Tm, {
				location: 1,
				group: s,
				onDismiss: a,
			}),
	);
}
function E(e) {
	if (e) {
		return {
			"--toast-duration": `${e.nToastDurationMS + b}ms`,
		};
	} else {
		return {};
	}
}
function M(e, t, r) {
	return [
		(0, _.A)(
			h.GamepadToastPlaceholder,
			(t.position == f.WU.k_EPositionTopLeft ||
				t.position == f.WU.k_EPositionTopRight) &&
				h.PositionTop,
			(t.position == f.WU.k_EPositionTopLeft ||
				t.position == f.WU.k_EPositionBottomLeft) &&
				h.PositionLeft,
			(0, C.WZ)(e) && h.Warning,
			(0, C.oS)(e) && h.TinyToast,
			r && h.InGame,
		),
		(0, _.A)(
			(t.position == f.WU.k_EPositionTopLeft ||
				t.position == f.WU.k_EPositionTopRight) &&
				h.PositionTop,
			(t.position == f.WU.k_EPositionTopLeft ||
				t.position == f.WU.k_EPositionBottomLeft) &&
				h.PositionLeft,
		),
	];
}
function T(e, t) {
	let [r, i] = n.useState(false);
	let a = n.useRef(undefined);
	let s = n.useCallback(() => {
		i(true);
		a.current = e;
	}, [e, i]);
	n.useEffect(() => {
		if (r && a.current != e) {
			i(false);
		}
	}, [e, r, a]);
	let o = (function (e, t, r) {
		let i = n.useRef(undefined);
		let a = n.useRef(undefined);
		let s = n.useRef(undefined);
		a.current = e;
		s.current = r;
		let o = n.useCallback(() => {
			if (t) {
				a.current();
				i.current = window.setTimeout(() => {
					s.current(t);
				}, S);
			}
		}, [a, s, t]);
		n.useEffect(
			() => () => {
				if (i.current) {
					window.clearTimeout(i.current);
				}
				i.current = undefined;
			},
			[t, i],
		);
		return o;
	})(s, e, t);
	return [o, r];
}
function R(e, t) {
	n.useEffect(() => {
		if (!e) {
			return;
		}
		let r = window.setTimeout(() => {
			t();
		}, e + y);
		return () => window.clearTimeout(r);
	}, [e, t]);
}
var _k = require("./43152.js");
var D = require("./94496.js");
var N = require(/*webcrack:missing*/ "./72476.js");
var F = require("./9252.js");
var G = require("./84572.js");
var O = G;
var P = require(/*webcrack:missing*/ "./85243.js");
var L = require(/*webcrack:missing*/ "./63439.js");
var z = require(/*webcrack:missing*/ "./11131.js");
var x = require(/*webcrack:missing*/ "./49455.js");
var U = require("./35488.js");
const W = 0;
const V = 300;
const H = 300;
const j = 0;
const q = 283;
var Q;
function Z(e) {
	let { appid: t, notifications: r, onDismiss: i } = e;
	let [a, s] = (function () {
		let [e, t] = n.useState([]);
		let r = n.useCallback(
			(e, r) => {
				t((t) => {
					let n = (0, C.xW)(e);
					return [
						...t,
						{
							m_notification: e,
							m_popup: r,
							m_nToastHeight: n,
							m_eState: Q.NotShown,
							m_flLastEventTime: 0,
							m_bDismissed: false,
							m_nLastX: undefined,
							m_nLastY: undefined,
						},
					];
				});
				return () => {
					t((e) => e.filter((e) => e.m_popup != r));
				};
			},
			[t],
		);
		return [e, r];
	})();
	let o = n.useRef({
		m_nLastScreenLeft: undefined,
		m_nLastScreenTop: undefined,
		m_nLastScreenWidth: undefined,
		m_nLastScreenHeight: undefined,
		m_flLastScreenDPI: undefined,
		m_lastPosition: undefined,
	});
	const l = (0, A.$2)();
	const c = (0, p.q3)(() => l.NotificationPosition);
	const u = !!t;
	const d = (0, F.hi)(u);
	n.useEffect(() => {
		(function (e, t, r, n) {
			if (t.length == 0) {
				return;
			}
			let i = r.m_usable;
			let a =
				e.m_nLastScreenLeft !== i.m_nLeft ||
				e.m_nLastScreenTop !== i.m_nTop ||
				e.m_nLastScreenWidth !== i.m_nWidth ||
				e.m_nLastScreenHeight !== i.m_nHeight ||
				e.m_flLastScreenDPI !== r.m_flDPI;
			let s = e.m_lastPosition;
			let o =
				!s ||
				n.position !== s.position ||
				n.horizontalInset !== s.horizontalInset ||
				n.verticalInset !== s.verticalInset;
			if (!a && !o) {
				return;
			}
			e.m_nLastScreenLeft = i.m_nLeft;
			e.m_nLastScreenTop = i.m_nTop;
			e.m_nLastScreenWidth = i.m_nWidth;
			e.m_nLastScreenHeight = i.m_nHeight;
			e.m_flLastScreenDPI = r.m_flDPI;
			e.m_lastPosition = {
				...n,
			};
			for (let e of t) {
				e.m_nLastX = undefined;
				e.m_nLastY = undefined;
			}
		})(o.current, a, d, c);
	}, [a, d, c]);
	n.useEffect(() => {
		let e;
		let t = () => {
			e = a.length > 0 ? requestAnimationFrame(r) : undefined;
		};
		let r = () => {
			(function (e, t, r) {
				let n = (0, N.Pr)();
				let i = performance.now();
				for (let t of e) {
					if (t.m_eState == Q.FadingOut && i >= t.m_flLastEventTime + H) {
						t.m_eState = Q.Finished;
						t.m_popup.SteamClient.Window.HideWindow();
					}
				}
				let a = 0;
				let s = [];
				let o = [];
				for (let t of e) {
					let e = 1;
					let r = false;
					switch (t.m_eState) {
						case Q.NotShown:
							o.push(t);
							t.m_flLastEventTime = i;
							t.m_eState = Q.FadingIn;
						case Q.FadingIn:
							if (i >= t.m_flLastEventTime + V) {
								t.m_eState = Q.Showing;
								t.m_flLastEventTime = i;
							} else {
								e = (i - t.m_flLastEventTime) / V;
							}
							r = true;
							break;
						case Q.Showing:
							let n = false;
							if (t.m_notification.fnNotificationResolved) {
								n = t.m_notification.fnNotificationResolved();
							} else if (
								i >=
								t.m_flLastEventTime +
									Math.max(t.m_notification.nToastDurationMS, j)
							) {
								n = true;
							}
							if (n) {
								t.m_eState = Q.FadingOut;
								t.m_flLastEventTime = i;
							}
							r = true;
							break;
						case Q.FadingOut:
							(0, x.w)(
								i < t.m_flLastEventTime + H,
								"Toast should have been deleted earlier in animation loop",
							);
							e = 1 - (i - t.m_flLastEventTime) / H;
							r = true;
							break;
						case Q.Finished:
							break;
						default:
							(0, x.w)(false, "Unknown toast animation state");
					}
					if (r) {
						s.push({
							toast: t,
							flPercentDone: e,
						});
						a += n ? t.m_nToastHeight : Math.ceil(t.m_nToastHeight * e);
					}
				}
				if (s.length == 0) {
					return;
				}
				let l = t.m_usable;
				let c = l.m_nLeft;
				let u = l.m_nTop;
				let d = c + l.m_nWidth;
				let A = u + l.m_nHeight;
				let p = Math.min(r.horizontalInset, l.m_nWidth / 4);
				let g = Math.min(r.verticalInset, l.m_nHeight / 4);
				c += p;
				u += g;
				d -= p;
				A -= g;
				let h = 0;
				let C = 0;
				switch (r.position) {
					case f.WU.k_EPositionTopLeft:
						h = c;
						C = u + a;
						break;
					case f.WU.k_EPositionTopRight:
						h = d;
						C = u + a;
						break;
					case f.WU.k_EPositionBottomLeft:
						h = c;
						C = A - a;
						break;
					default:
					case f.WU.k_EPositionBottomRight:
						h = d;
						C = A - a;
				}
				for (let e of s) {
					let i;
					let a;
					let s = Math.floor(e.toast.m_nToastHeight * (1 - e.flPercentDone));
					if (n) {
						s = 0;
					}
					switch (r.position) {
						case f.WU.k_EPositionTopLeft:
							i = h;
							a = C - s - e.toast.m_nToastHeight;
							C -= e.toast.m_nToastHeight - s;
							break;
						case f.WU.k_EPositionTopRight:
							i = h - q;
							a = C - s - e.toast.m_nToastHeight;
							C -= e.toast.m_nToastHeight - s;
							break;
						case f.WU.k_EPositionBottomLeft:
							i = h;
							a = C + s;
							C += e.toast.m_nToastHeight - s;
							break;
						default:
						case f.WU.k_EPositionBottomRight:
							i = h - q;
							a = C + s;
							C += e.toast.m_nToastHeight - s;
					}
					if (i !== e.toast.m_nLastX || a !== e.toast.m_nLastY) {
						(0, F.Tj)(
							`moving toast ${e.toast.m_notification.notificationID} to ${i}, ${a}`,
							e,
						);
						e.toast.m_popup.SteamClient.Window.MoveTo(i, a, t.m_flDPI);
						e.toast.m_nLastX = i;
						e.toast.m_nLastY = a;
					}
				}
				for (let e of o) {
					e.m_popup.SteamClient.Window.ShowWindow();
					m.Tu.PlayNotificationSound(e.m_notification);
				}
			})(a, d, c);
			for (let e of a) {
				if (e.m_eState == Q.Finished && !e.m_bDismissed) {
					e.m_bDismissed = true;
					window.setTimeout(() => i(e.m_notification), 1);
				}
			}
			t();
		};
		t();
		return () => {
			if (e !== undefined) {
				cancelAnimationFrame(e);
			}
		};
	}, [r, a, d, i, c, o]);
	n.useEffect(() => {
		if (F.Ad.IsDebugEnabled()) {
			(0, F.a5)(
				"Notification state change, current notifications and popup states:",
				(0, F.W_)(r),
				a.map(
					(e) =>
						`Popup ${e.m_notification.notificationID}: ${e.m_bDismissed ? "dismissed" : "active"} ${Q[e.m_eState]}`,
				),
			);
		}
	}, [r, a]);
	const g = (0, F.OU)(t);
	(0, F.a5)("toast stack rendering", g, (0, F.W_)(r));
	return n.createElement(
		n.Fragment,
		null,
		r.map((e, a) =>
			n.createElement(_Y, {
				key: e.notificationID,
				appid: t,
				notification: e,
				toastIndex: a,
				toastCount: r.length,
				onDismiss: i,
				registerPopup: s,
			}),
		),
	);
}
function _Y(e) {
	let {
		appid: t,
		notification: r,
		onDismiss: a,
		registerPopup: s,
		toastIndex: o,
		toastCount: l,
	} = e;
	const c = n.useCallback(() => a(r), [r, a]);
	let m = (0, A.$2)();
	let u = !!t;
	let d = u
		? `notificationtoasts_uid${t}-${r.notificationID}`
		: `notificationtoasts_${r.notificationID}_desktop`;
	let p = u ? undefined : P.W.EBrowserType_DirectHWND_Borderless;
	let g = u ? m.params.browserInfo : undefined;
	let h = (0, C.xW)(r);
	const _ =
		(0, z.yq)(z.Dr.Notification) |
		z.Wf.Composited |
		z.Wf.Hidden |
		z.Wf.ApplyBrowserScaleToDimensions;
	const { popup: f, element: b } = (0, L.OJ)(d, {
		title: d,
		dimensions: {
			width: q,
			height: h,
		},
		body_class: O.DesktopToastContainer,
		browserType: p,
		target_browser: g,
		eCreationFlags: _,
	});
	if (b) {
		return i.createPortal(
			n.createElement(
				K,
				{
					notification: r,
					popup: f,
					registerPopup: s,
				},
				n.createElement(X, {
					notification: r,
					onDismiss: c,
					toastIndex: o,
					toastCount: l,
				}),
			),
			b,
		);
	} else {
		return null;
	}
}
function K(e) {
	const { notification: t, popup: r, registerPopup: i, children: a } = e;
	n.useEffect(() => i(t, r), [i, t, r]);
	return a;
}
function X(e) {
	let t;
	let { notification: r, toastIndex: i, toastCount: a, onDismiss: s } = e;
	if (r) {
		t = {
			eType: r.eType,
			notifications: [r],
		};
	}
	let o = O.Middle;
	if (a > 2 && i + 1 == a) {
		o = O.Bottom;
	} else if (a > 1 && i == 0) {
		o = O.Top;
	}
	return n.createElement(
		"div",
		{
			style: J(e.notification),
			className: (0, _.A)(O.DesktopToastPopup, o),
		},
		n.createElement(
			"div",
			{
				className: O.DesktopToastBackground,
			},
			n.createElement(U.SteamLogo, null),
		),
		e.notification &&
			n.createElement(C.Tm, {
				location: 2,
				group: t,
				onDismiss: e.onDismiss,
			}),
	);
}
function J(e) {
	if (e) {
		return {
			"--toast-duration": `${e.nToastDurationMS + W}ms`,
		};
	} else {
		return {};
	}
}
(function (e) {
	e[(e.NotShown = 0)] = "NotShown";
	e[(e.FadingIn = 1)] = "FadingIn";
	e[(e.Showing = 2)] = "Showing";
	e[(e.FadingOut = 3)] = "FadingOut";
	e[(e.Finished = 4)] = "Finished";
})((Q ||= {}));
var $ = require("./69913.js");
var ee = require("./45967.js");
var te = require("./10501.js");
var re = require("./35425.js");
var ne = require(/*webcrack:missing*/ "./34629.js");
var ie = require("./16251.js");
var ae = require(/*webcrack:missing*/ "./89193.js");
var se = require(/*webcrack:missing*/ "./52451.js");
class oe {
	m_bInitialized = false;
	m_fnDismiss;
	m_registrationNotificationEvent;
	nNotificationId;
	nDebugLastNotificationId;
	m_bNotificationShowing = false;
	m_nFailsafeTimer = 0;
	constructor() {
		(0, ae.Gn)(this);
	}
	Init(e) {
		(0, x.w)(
			!this.m_bInitialized,
			"ToastManagerVRNotifications already initialized",
		);
		this.m_bInitialized = true;
		this.m_registrationNotificationEvent =
			e.SteamClient?.OpenVR.VRNotifications.RegisterForNotificationEvent(
				this.OnVRNotificationEvent,
			);
	}
	Shutdown() {
		(0, x.w)(
			this.m_bInitialized,
			"ToastManagerVRNotifications Shutdown called when not intialized",
		);
		this.m_bInitialized = false;
		this.m_registrationNotificationEvent?.unregister();
	}
	OnVRNotificationEvent(e, t) {
		switch (e) {
			case ie.e6.Notification_Hidden:
			case ie.e6.Notification_Destroyed:
				this.ResetDisplayedNotification();
		}
	}
	ResetDisplayedNotification() {
		this.nNotificationId = undefined;
		this.UpdateNotificationShowing();
		window.clearTimeout(this.m_nFailsafeTimer);
		this.m_nFailsafeTimer = 0;
	}
	get NotificationShowing() {
		return this.m_bNotificationShowing;
	}
	UpdateNotificationShowing() {
		const e = !!this.nNotificationId;
		if (!e && this.m_bNotificationShowing) {
			(0, F.a5)(
				"VRNotifications UpdateNotificationShowing VR notification is now hidden, dismissing toast",
			);
			this?.m_fnDismiss();
			this.m_fnDismiss = undefined;
		}
		this.m_bNotificationShowing = e;
	}
	ShowNotification(e, t, r) {
		(0, F.a5)(`VRNotifications ShowNotification type ${e}`);
		(0, x.w)(
			!this.m_bNotificationShowing,
			"Can't show a VR notification while one is still in progress",
		);
		this.m_fnDismiss = r;
		const n = l.oy.WindowStore.GetVRWindowInstance();
		if (n) {
			this.nNotificationId =
				SteamClient.OpenVR?.VRNotifications.ShowCustomNotification(
					n.GetMainVROverlayKey(),
					re.A0,
					t,
				);
			this.nNotificationId.catch((e) => {
				(0, F.uH)(
					`VRNotifications ShowCustomNotification failed with reason ${e}`,
				);
				this.ResetDisplayedNotification();
			});
			this.UpdateNotificationShowing();
		}
		this.m_nFailsafeTimer = window.setTimeout(() => {
			(0, F.uH)(
				`VRNotifications Failsafe timer triggering after 20000ms. notificationId=${this.nDebugLastNotificationId}`,
			);
			this.ResetDisplayedNotification();
		}, 20000);
	}
	HideNotification() {
		(0, F.a5)("VRNotifications HideNotification");
		if (this.nNotificationId) {
			this.nNotificationId.then((e) => {
				this.nDebugLastNotificationId = e;
				SteamClient.OpenVR?.VRNotifications.HideCustomNotification(e);
			});
		}
	}
}
(0, ne.Cg)([ae.sH], oe.prototype, "m_bNotificationShowing", undefined);
(0, ne.Cg)([se.oI], oe.prototype, "OnVRNotificationEvent", null);
var le = require(/*webcrack:missing*/ "./61416.js");
var ce = require("./67686.js");
export function Y(e) {
	let { appid: t } = e;
	t = t || 0;
	const r = (0, N.rP)();
	const i = (0, ee.IF)();
	const a = Ce(t);
	const s = (0, N.uI)();
	const o = r.IN_VR && i;
	const l = (0, te.w)();
	return n.createElement(
		n.Fragment,
		null,
		r.IN_VR &&
			n.createElement(Ae, {
				...e,
				bFocusedLocation: o,
			}),
		l &&
			n.createElement(ue, {
				...e,
				bFocusedLocation: !o && (a || s),
			}),
		!l &&
			n.createElement(de, {
				...e,
				bFocusedLocation: !o && (a || s),
			}),
	);
}
function ue(e) {
	const { appid: t, bFocusedLocation: r } = e;
	const i = (0, A.$2)();
	const a = (0, p.q3)(() => i.NotificationPosition);
	const {
		currentToast: s,
		bVisible: l,
		bAppRunning: c,
		fnDismiss: m,
	} = pe("notificationtoasts", r, t);
	R(s?.nToastDurationMS, m);
	const [u, d] = M(s, a, c);
	const g = {
		margin: `${a.verticalInset}px ${a.horizontalInset}px`,
	};
	if (!l) {
		return null;
	}
	const h = (0, _.A)(o.ToastContainerEmbedded, u);
	return n.createElement(
		"div",
		{
			className: h,
			style: g,
		},
		n.createElement(I, {
			className: d,
			notification: s,
			onDismiss: m,
		}),
	);
}
function de(e) {
	const { appid: t, bFocusedLocation: r } = e;
	const a = n.useCallback(
		(e) => l.oy.NavigationManager.RegisterInputSource(e),
		[],
	);
	const s = (0, c.sd)(a, {
		name: "notificationtoasts",
		eCreationFlags: z.Wf.NotFocusable,
	});
	const o = (0, A.$2)();
	const m = (0, p.q3)(() => o.NotificationPosition);
	const {
		currentToast: u,
		bVisible: d,
		bAppRunning: g,
		fnDismiss: h,
	} = pe(s?.GetViewWindow()?.name, r, t);
	R(u?.nToastDurationMS, h);
	(function (e, t) {
		n.useEffect(() => {
			e?.GetBrowserView()?.SetVisible(t);
		}, [e, t]);
	})(s, !!u && !!d);
	if (!s) {
		return null;
	}
	const [C, _] = M(u, m, g);
	const f = {
		margin: `${m.verticalInset}px ${m.horizontalInset}px`,
	};
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(c.m4, {
			className: C,
			browser: s.GetBrowserView(),
			visible: d,
			style: f,
		}),
		i.createPortal(
			n.createElement(I, {
				className: _,
				notification: u,
				onDismiss: h,
			}),
			s.GetRenderElement(),
		),
	);
}
function Ae(e) {
	let { appid: t, bFocusedLocation: r } = e;
	t = t || 0;
	let a = (0, A.$2)();
	const s = n.useMemo(() => new oe(), []);
	const o = {
		width: w + (false ? 0 : v),
		height: B,
	};
	const {
		currentToast: l,
		bVisible: c,
		fnDismiss: m,
	} = pe("notificationtoasts_vr", r, t);
	const u = (0, p.q3)(() => s.NotificationShowing);
	const d = (0, C.F7)(l?.eType);
	const { popup: g, element: h } = (0, ce.WR)(
		"VRNotificationToasts",
		{
			browserType: P.W.EBrowserType_OpenVROverlay,
			eCreationFlags: 0,
			strVROverlayKey: re.A0,
			title: "SteamVR - Notifications",
			dimensions: o,
			replace_existing_popup: true,
		},
		{
			bSuppressGamepadUIStyles: true,
		},
	);
	n.useEffect(() => {
		if (!d) {
			m();
		}
	}, [d, m]);
	n.useEffect(() => {
		s.Init(a.BrowserWindow);
		return () => s.Shutdown();
	}, [s, a.BrowserWindow, g]);
	n.useEffect(() => {
		if (g && l && c && !u && r && d) {
			s.ShowNotification(l.eType, l.nToastDurationMS, m);
		}
	}, [s, g, r, l, c, u, d, m]);
	if (h && d) {
		return i.createPortal(
			n.createElement(I, {
				notification: l,
				displayInVR: true,
				onDismiss: () => s.HideNotification(),
			}),
			h,
		);
	} else {
		return null;
	}
}
function pe(e, t, r) {
	const [n, i, a] = he(0, t, false, 1);
	const s = n.length ? n[0] : null;
	const [o, l] = T(s, i);
	const c = (0, F.OU)(r);
	(0, F.a5)("rendering browserview toasts", c, e, (0, F.W_)(n), (0, F.$v)(a));
	return {
		currentToast: s,
		bVisible: s != null && !l,
		bAppRunning: !!(0, u.W5)(d.BV.GamepadUI.AppRunning()),
		fnDismiss: o,
	};
}
export function k(e) {
	let { appid: t } = e;
	t = t || 0;
	const r = (0, N.Qn)();
	const i = r ? 1 : 3;
	const a = (0, N.rP)();
	const s = (0, ee.IF)();
	const o = Ce(t) && a.IN_VR === s;
	const l = !r && !t;
	const [c, m, u] = he(t, o, l, i);
	const d = (0, F.OU)(t);
	(0, F.a5)("rendering toasts", d, (0, F.W_)(c), (0, F.$v)(u));
	(0, x.w)(!r, "GamepadUI uses ToastManagerGamepadUI");
	return n.createElement(Z, {
		appid: t,
		notifications: c,
		onDismiss: m,
	});
}
function he(e, t, r, i) {
	console.assert(e !== undefined);
	let [s, o] = n.useState([]);
	let l = (0, _k.u6)();
	let c = (function () {
		let e = (0, A.$2)();
		return (0, $.fg)(e.DesktopOverlay);
	})();
	let u = (0, m.PU)(e);
	let d = !l && t && !u && !c;
	let p = (0, m.lf)();
	let g = (0, m.$S)(e);
	let h = (function (e, t, r) {
		const n = 5000;
		let i = !!e && t && r;
		const a = (0, le.I)({
			queryKey: ["SteamClient", "DefaultMonitorHasFullscreenWindow"],
			queryFn: async () => {
				(0, F.a5)("---querying window", e);
				return await SteamClient.Window.DefaultMonitorHasFullscreenWindow();
			},
			enabled: i,
			staleTime: n,
		});
		return !!i && (a.isStale ? undefined : a.data);
	})(p, d && s.length < i, r);
	n.useEffect(() => {
		if (h) {
			m.Tu.ClearAllToastNotifications();
		}
		o((t) => {
			let r;
			if (t.length > i) {
				r = t.slice(-i);
			}
			let n = i - t.length;
			for ((!r && d && h !== undefined) || (n = 0); n > 0; ) {
				let i = r || t;
				if (m.Tu.BAnyToastDisplayAlone(i)) {
					break;
				}
				if (t.length > 0 && m.Tu.BNextToastDisplayAlone(e)) {
					break;
				}
				let a = m.Tu.PopNextToastNotification(e);
				if (!a) {
					break;
				}
				r ||= t.slice();
				r.push(a);
				n--;
			}
			if (r) {
				(0, F.a5)("setting toasts to", (0, F.W_)(r));
				return r;
			} else {
				return t;
			}
		});
	}, [s, p, g, d, h, i, e]);
	const C = s.length > 0;
	n.useEffect(() => {
		m.Tu.SetContextRenderingToast(e, C);
	}, [e, C]);
	n.useEffect(() => () => m.Tu.SetContextRenderingToast(e, false), [e]);
	let _ = n.useCallback(
		(e) => {
			o((t) => {
				let r = a.il(t, e);
				(0, F.a5)("dismissing toast", e.notificationID, (0, F.W_)(r));
				(0, x.w)(
					r.length < t.length,
					`After dismssing toast ${e.notificationID}, active toasts did not get smaller: ${t.length} toasts`,
				);
				return r;
			});
		},
		[o],
	);
	let f = s;
	if (s.length > i) {
		f = s.slice(-i);
	}
	return [
		f,
		_,
		{
			bKeyboardVisible: l,
			bWaitingForDurationControlInit: c,
			bOtherLocationRendering: u,
			bFocusedLocation: t,
			bDropNotifications: h,
		},
	];
}
function Ce(e) {
	return e == (0, D.b_)();
}
