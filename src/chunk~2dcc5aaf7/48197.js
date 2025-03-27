import { ArrayWithoutElement } from "../../actual_src/utils/arrayutils.js";
import n from "./63696.js";
import i from "./78325.js";
import s from "./3274.js";
import l from "./46422.js";
import c, { sd } from "./73375.js";
import m, { PU, lf, $S } from "./60917.js";
import u, { W5 } from "./49519.js";
import d from "./18057.js";
import A, { $2 } from "./96680.js";
import p, { q3 } from "./90095.js";
import g from "./26711.js";
import C, { WZ, oS, xW, F7 } from "./11374.js";
import _, { A as A_1 } from "./90765.js";
import f from "./44846.js";
import { u6 } from "./43152.js";
import { b_ as b_1 } from "./94496.js";
import { Pr, rP, uI, Qn } from "./72476.js";
import F, { hi, Tj, a5, W_ as W_1, OU, uH, $v } from "./9252.js";
import G from "./84572.js";
import P from "./85243.js";
import { OJ } from "./63439.js";
import z, { yq } from "./11131.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import U from "./35488.js";
import { fg } from "./69913.js";
import { IF } from "./45967.js";
import re from "./35425.js";
import { Cg } from "./34629.js";
import ie from "./16251.js";
import ae, { Gn } from "./89193.js";
import se from "./52451.js";
import { I as I_2 } from "./61416.js";
import { WR } from "./67686.js";
const o = s;
const h = g;
const b = 0;
const y = parseInt(h.toastAnimateInMS) + parseInt(h.toastAnimateOutMS) + b;
const S = 1000;
const w = 320;
const B = 80;
const v = 20;
function I(e) {
	const { className: t, notification: r, displayInVR: i, onDismiss: a } = e;
	((e) => {
		n.useEffect(() => {
			if (e) {
				m.Tu.PlayNotificationSound(e);
			}
		}, [e]);
	})(r);
	let s;
	let o = A_1(t, h.GamepadToastPopup, (i ?? false) && h.VR, WZ(r) && h.Warning);
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
		A_1(
			h.GamepadToastPlaceholder,
			(t.position == f.WU.k_EPositionTopLeft ||
				t.position == f.WU.k_EPositionTopRight) &&
				h.PositionTop,
			(t.position == f.WU.k_EPositionTopLeft ||
				t.position == f.WU.k_EPositionBottomLeft) &&
				h.PositionLeft,
			WZ(e) && h.Warning,
			oS(e) && h.TinyToast,
			r && h.InGame,
		),
		A_1(
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
	let o = ((e, t, r) => {
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
const O = G;
const W = 0;
const V = 300;
const H = 300;
const j = 0;
const q = 283;
let Q;
function Z(e) {
	let { appid: t, notifications: r, onDismiss: i } = e;
	let [a, s] = (() => {
		let [e, t] = n.useState([]);
		let r = n.useCallback(
			(e, r) => {
				t((t) => {
					let n = xW(e);
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
	const l = $2();
	const c = q3(() => l.NotificationPosition);
	const u = !!t;
	const d = hi(u);
	n.useEffect(() => {
		((e, t, r, n) => {
			if (t.length == 0) {
				return;
			}
			let i = r.m_usable;
			let a =
				e.m_nLastScreenLeft !== i.m_nLeft ||
				e.m_nLastScreenTop !== i.m_nTop ||
				e.m_nLastScreenTop !== i.m_nTop ||
				e.m_nLastScreenWidth !== i.m_nWidth ||
				e.m_nLastScreenTop !== i.m_nTop ||
				e.m_nLastScreenWidth !== i.m_nWidth ||
				e.m_nLastScreenHeight !== i.m_nHeight ||
				e.m_nLastScreenTop !== i.m_nTop ||
				e.m_nLastScreenWidth !== i.m_nWidth ||
				e.m_nLastScreenHeight !== i.m_nHeight ||
				e.m_flLastScreenDPI !== r.m_flDPI;
			let s = e.m_lastPosition;
			let o =
				!s ||
				n.position !== s.position ||
				n.position !== s.position ||
				n.horizontalInset !== s.horizontalInset ||
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
			((e, t, r) => {
				let n = Pr();
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
						case Q.NotShown: {
							o.push(t);
							t.m_flLastEventTime = i;
							t.m_eState = Q.FadingIn;
						}
						case Q.FadingIn: {
							if (i >= t.m_flLastEventTime + V) {
								t.m_eState = Q.Showing;
								t.m_flLastEventTime = i;
							} else {
								e = (i - t.m_flLastEventTime) / V;
							}
							r = true;
							break;
						}
						case Q.Showing: {
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
						}
						case Q.FadingOut: {
							AssertMsg(
								i < t.m_flLastEventTime + H,
								"Toast should have been deleted earlier in animation loop",
							);
							e = 1 - (i - t.m_flLastEventTime) / H;
							r = true;
							break;
						}
						case Q.Finished: {
							break;
						}
						default: {
							AssertMsg(false, "Unknown toast animation state");
						}
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
					case f.WU.k_EPositionTopLeft: {
						h = c;
						C = u + a;
						break;
					}
					case f.WU.k_EPositionTopRight: {
						h = d;
						C = u + a;
						break;
					}
					case f.WU.k_EPositionBottomLeft: {
						h = c;
						C = A - a;
						break;
					}
					default:
					case f.WU.k_EPositionBottomRight: {
						h = d;
						C = A - a;
					}
				}
				for (let e of s) {
					let i;
					let a;
					let s = Math.floor(e.toast.m_nToastHeight * (1 - e.flPercentDone));
					if (n) {
						s = 0;
					}
					switch (r.position) {
						case f.WU.k_EPositionTopLeft: {
							i = h;
							a = C - s - e.toast.m_nToastHeight;
							C -= e.toast.m_nToastHeight - s;
							break;
						}
						case f.WU.k_EPositionTopRight: {
							i = h - q;
							a = C - s - e.toast.m_nToastHeight;
							C -= e.toast.m_nToastHeight - s;
							break;
						}
						case f.WU.k_EPositionBottomLeft: {
							i = h;
							a = C + s;
							C += e.toast.m_nToastHeight - s;
							break;
						}
						default:
						case f.WU.k_EPositionBottomRight: {
							i = h - q;
							a = C + s;
							C += e.toast.m_nToastHeight - s;
						}
					}
					if (i !== e.toast.m_nLastX || a !== e.toast.m_nLastY) {
						Tj(
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
			a5(
				"Notification state change, current notifications and popup states:",
				W_1(r),
				a.map(
					(e) =>
						`Popup ${e.m_notification.notificationID}: ${
							e.m_bDismissed ? "dismissed" : "active"
						} ${Q[e.m_eState]}`,
				),
			);
		}
	}, [r, a]);
	const g = OU(t);
	a5("toast stack rendering", g, W_1(r));
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
	let m = $2();
	let u = !!t;
	let d = u
		? `notificationtoasts_uid${t}-${r.notificationID}`
		: `notificationtoasts_${r.notificationID}_desktop`;
	let p = u || P.W.EBrowserType_DirectHWND_Borderless;
	let g = u ? m.params.browserInfo : undefined;
	let h = xW(r);
	const _ =
		yq(z.Dr.Notification) |
		z.Wf.Composited |
		z.Wf.Hidden |
		z.Wf.ApplyBrowserScaleToDimensions;
	const { popup: f, element: b } = OJ(d, {
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
			className: A_1(O.DesktopToastPopup, o),
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
((e) => {
	e[(e.NotShown = 0)] = "NotShown";
	e[(e.FadingIn = 1)] = "FadingIn";
	e[(e.Showing = 2)] = "Showing";
	e[(e.FadingOut = 3)] = "FadingOut";
	e[(e.Finished = 4)] = "Finished";
})((Q ||= {}));
class oe {
	m_bInitialized = false;
	m_fnDismiss;
	m_registrationNotificationEvent;
	nNotificationId;
	nDebugLastNotificationId;
	m_bNotificationShowing = false;
	m_nFailsafeTimer = 0;
	constructor() {
		Gn(this);
	}
	Init(e) {
		AssertMsg(
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
		AssertMsg(
			this.m_bInitialized,
			"ToastManagerVRNotifications Shutdown called when not intialized",
		);
		this.m_bInitialized = false;
		this.m_registrationNotificationEvent?.unregister();
	}
	OnVRNotificationEvent(e, t) {
		switch (e) {
			case ie.e6.Notification_Hidden:
			case ie.e6.Notification_Destroyed: {
				this.ResetDisplayedNotification();
			}
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
			a5(
				"VRNotifications UpdateNotificationShowing VR notification is now hidden, dismissing toast",
			);
			this?.m_fnDismiss();
			this.m_fnDismiss = undefined;
		}
		this.m_bNotificationShowing = e;
	}
	ShowNotification(e, t, r) {
		a5(`VRNotifications ShowNotification type ${e}`);
		AssertMsg(
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
				uH(`VRNotifications ShowCustomNotification failed with reason ${e}`);
				this.ResetDisplayedNotification();
			});
			this.UpdateNotificationShowing();
		}
		this.m_nFailsafeTimer = window.setTimeout(() => {
			uH(
				`VRNotifications Failsafe timer triggering after 20000ms. notificationId=${this.nDebugLastNotificationId}`,
			);
			this.ResetDisplayedNotification();
		}, 20000);
	}
	HideNotification() {
		a5("VRNotifications HideNotification");
		if (this.nNotificationId) {
			this.nNotificationId.then((e) => {
				this.nDebugLastNotificationId = e;
				SteamClient.OpenVR?.VRNotifications.HideCustomNotification(e);
			});
		}
	}
}
Cg([ae.sH], oe.prototype, "m_bNotificationShowing", undefined);
Cg([se.oI], oe.prototype, "OnVRNotificationEvent", null);
export function Y(e) {
	let { appid: t } = e;
	t = t || 0;
	const r = rP();
	const i = IF();
	const a = Ce(t);
	const s = uI();
	const o = r.IN_VR && i;
	const l = AssertMsg();
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
	const i = $2();
	const a = q3(() => i.NotificationPosition);
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
	const h = A_1(o.ToastContainerEmbedded, u);
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
	const s = sd(a, {
		name: "notificationtoasts",
		eCreationFlags: z.Wf.NotFocusable,
	});
	const o = $2();
	const m = q3(() => o.NotificationPosition);
	const {
		currentToast: u,
		bVisible: d,
		bAppRunning: g,
		fnDismiss: h,
	} = pe(s?.GetViewWindow()?.name, r, t);
	R(u?.nToastDurationMS, h);
	((e, t) => {
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
	let a = $2();
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
	const u = q3(() => s.NotificationShowing);
	const d = F7(l?.eType);
	const { popup: g, element: h } = WR(
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
	const c = OU(r);
	a5("rendering browserview toasts", c, e, W_1(n), $v(a));
	return {
		currentToast: s,
		bVisible: s != null && !l,
		bAppRunning: !!W5(d.BV.GamepadUI.AppRunning()),
		fnDismiss: o,
	};
}
export function k(e) {
	let { appid: t } = e;
	t = t || 0;
	const r = Qn();
	const i = r ? 1 : 3;
	const a = rP();
	const s = IF();
	const o = Ce(t) && a.IN_VR === s;
	const l = !r && !t;
	const [c, m, u] = he(t, o, l, i);
	const d = OU(t);
	a5("rendering toasts", d, W_1(c), $v(u));
	AssertMsg(!r, "GamepadUI uses ToastManagerGamepadUI");
	return n.createElement(Z, {
		appid: t,
		notifications: c,
		onDismiss: m,
	});
}
function he(e, t, r, i) {
	console.assert(e !== undefined);
	let [s, o] = n.useState([]);
	let l = u6();
	let c = (() => {
		let e = $2();
		return fg(e.DesktopOverlay);
	})();
	let u = PU(e);
	let d = !l && t && !u && !c;
	let p = lf();
	let g = $S(e);
	let h = ((e, t, r) => {
		const n = 5000;
		let i = !!e && t && r;
		const a = I_2({
			queryKey: ["SteamClient", "DefaultMonitorHasFullscreenWindow"],
			queryFn: async () => {
				a5("---querying window", e);
				return await SteamClient.Window.DefaultMonitorHasFullscreenWindow();
			},
			enabled: i,
			staleTime: n,
		});
		return !!i && (a.isStale || a.data);
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
				a5("setting toasts to", W_1(r));
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
				let r = ArrayWithoutElement(t, e);
				a5("dismissing toast", e.notificationID, W_1(r));
				AssertMsg(
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
	return e == b_1();
}
