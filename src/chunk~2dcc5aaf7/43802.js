var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./22222.js");
var a = require(/*webcrack:missing*/ "./44846.js");
var s = require("./64608.js");
var o = require("./13869.js");
var l = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./35488.js");
var d = require("./77347.js");
var A = require("./28916.js");
var p = require("./63988.js");
var g = p;
var h = require("./67338.js");
import {
	GetOwningWindowForElement,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
var _ = require("./33572.js");
var f = require("./96680.js");
export function V(e = {}, t) {
	(0, o.pg)(
		n.createElement(y, {
			...e,
		}),
		window,
		t,
	);
}
function y(e) {
	return n.createElement(
		o.x_,
		{
			onEscKeypress: e.closeModal,
		},
		n.createElement(S, {
			...e,
		}),
	);
}
function S(e) {
	const { accessPoint: t } = e;
	(0, h._)(t);
	const r = t == null;
	const [a, o] = n.useState(0);
	const [l, u] = n.useState({
		deviceId: r ? d.OQ.Get().wirelessNetworkDevice?.id : t.deviceId,
		deviceWapId: r ? null : t.deviceWapId,
		credentials: {
			username: "",
			password: r ? "" : (t.wirelessAPInfo?.password ?? ""),
		},
		customAP: r
			? {
					ssid: null,
					esecurity: w(d.OQ.Get().supportedWirelessSecurityFlags),
				}
			: null,
	});
	const [A, p] = n.useState(false);
	const [g, C] = n.useState(null);
	const _ = (0, m.vJ)(() => g, [g]);
	const f = r
		? (l.customAP?.ssid ?? (0, Localize)("#Internet_Network_Type_Other"))
		: t.displayName;
	const b = r ? i.WO.Wireless : t.type;
	const y = (l.credentials?.password ?? "") != "";
	const S = r || t.showAsLocked;
	const B = r || (t.showAsLocked && !y);
	const I = r ? _ : t.isConnected;
	const E = (0, m.xM)();
	const T = async (e) => {
		if (!r && t.state == i.$J.NotPresent && a != 2) {
			o(2);
			return false;
		}
		o(1);
		p(false);
		const n = d.OQ.Get().Connect(e);
		C(n);
		u(e);
		const s = await n;
		if (!s && !E()) {
			p(true);
			if (S) {
				o(3);
			}
		}
		return s;
	};
	if (!r && t?.state == i.$J.NotPresent && a != 2 && a != 3) {
		o(2);
		return null;
	}
	if (a == 0) {
		if (B) {
			o(3);
		} else {
			T(l);
		}
		return null;
	}
	const R = () => {
		if (a == 1) {
			t?.Forget();
		}
		if (S) {
			o(3);
		} else if (e.closeModal) {
			e.closeModal();
		}
	};
	const k = () => {
		if (a == 1) {
			t?.Forget();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const D = () => {
		if (e.onSuccess) {
			e.onSuccess();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	switch (a) {
		case 1:
			return n.createElement(M, {
				networkDisplayName: f,
				currentlyConnected: I,
				networkType: b,
				lastConnectAttemptFailed: A,
				onCloseAction: D,
				onBackAction: R,
				onCancelAction: k,
			});
		case 2:
			return n.createElement(
				s.UC,
				null,
				n.createElement(
					s.Y9,
					null,
					(0, Localize)("#Settings_Internet_Network_Not_Found", f),
				),
				n.createElement(
					s.nB,
					null,
					n.createElement(
						s.wi,
						null,
						n.createElement(
							s.jn,
							{
								autoFocus: true,
								onClick: D,
							},
							(0, Localize)("#Button_Close"),
						),
					),
				),
			);
		case 3:
			return n.createElement(v, {
				accessPoint: t,
				connectParams: l,
				onSubmit: T,
				onCancel: k,
				lastAttemptFailed: A,
			});
	}
}
function w(e) {
	const t = [
		i.Df.Wpa2,
		i.Df.Wpa,
		i.Df.DynamicWep,
		i.Df.StaticWep,
		i.Df.Wpa2Enterprise,
		i.Df.WpaEnterprise,
	].filter((t) => e.includes(t));
	if (t.length > 0) {
		return t[0];
	} else {
		return i.Df.None;
	}
}
function B(e) {
	const t = (0, d.rw)().map((e) => ({
		data: e,
		label: (0, d.Jg)(e),
	}));
	return n.createElement(s.Vb, {
		selectedOption: e.value,
		label: (0, Localize)("#Settings_Internet_Security_Type"),
		layout: "inline",
		onChange: (t) => e.onChange(t.data),
		rgOptions: t,
	});
}
function v(e) {
	const [t, r] = n.useState(e.connectParams);
	const [a, o] = n.useState(t.customIP4 != null);
	const m = n.useRef(undefined);
	const u = n.useRef(undefined);
	const A = n.useRef(undefined);
	const p = e.accessPoint == null;
	const h =
		(p ? t.customAP?.esecurity : e.accessPoint?.wirelessAPInfo?.esecurity) ??
		i.Df.Unsupported;
	const C = (0, d.td)(h);
	const b = (0, d.Op)(h);
	const y = !p && h == i.Df.Unsupported;
	n.useEffect(() => {
		if (m.current) {
			m.current.element?.click();
		} else if (u.current) {
			u.current.element?.click();
		} else if (A.current) {
			A.current.element?.click();
		}
	}, []);
	let S = true;
	if (p && !t.customAP?.ssid) {
		S = false;
	}
	(0, f.$2)();
	const w = (0, _.D7)();
	const v = () => {
		var r;
		if (S) {
			w.SetVirtualKeyboardHidden();
			if (
				!a ||
				!(r = t.customIP4) ||
				(r.ip == "" &&
					r.netmask == "" &&
					r.gateway_ip == "" &&
					r.primary_dns_ip == "" &&
					r.secondary_dns_ip == "")
			) {
				t.customIP4 = null;
			}
			if (S && e.onSubmit) {
				e.onSubmit(t);
			}
		}
	};
	let E;
	E = e.lastAttemptFailed
		? p
			? (0, Localize)("#Settings_Internet_Reenter_Network_Credentials")
			: (0, Localize)(
					"#Settings_Internet_Reenter_The_Password_For_Network",
					e.accessPoint?.displayName,
				)
		: p
			? (0, Localize)("#Settings_Internet_Enter_Network_Credentials")
			: (0, Localize)(
					"#Settings_Internet_Enter_The_Password_For_Network",
					e.accessPoint?.displayName,
				);
	const M = d.OQ.Get().wirelessNetworkDevice?.mac;
	return n.createElement(
		s.U9,
		{
			classNameContent: (0, l.A)(g.PasswordPromptContent),
			onSubmit: v,
		},
		n.createElement(
			s.nB,
			null,
			n.createElement(
				s.lr,
				null,
				e.lastAttemptFailed &&
					n.createElement(
						"div",
						{
							className: g.DialogError,
						},
						(0, Localize)("#Settings_Internet_Failed_To_Connect"),
					),
				y &&
					n.createElement(
						"div",
						{
							className: g.DialogError,
						},
						(0, Localize)("#Settings_Internet_AP_Security_Unsupported"),
					),
				E,
			),
			p &&
				n.createElement(s.qq, {
					className: g.PasswordPromptNetworkName,
					label: (0, Localize)("#Settings_Internet_Enter_NetworkName"),
					value: t.customAP?.ssid ?? "",
					onChange: (e) => {
						r({
							...t,
							customAP: {
								...t.customAP,
								ssid: e.target.value,
							},
						});
					},
					ref: m,
				}),
			p &&
				n.createElement(B, {
					value: h,
					onChange: (e) => {
						r({
							...t,
							customAP: {
								...t.customAP,
								esecurity: e,
							},
						});
					},
				}),
			C &&
				n.createElement(
					s.D0,
					{
						className: g.PasswordPromptUserName,
						label: (0, Localize)("#Settings_Internet_Enter_UserName"),
						childrenContainerWidth: "fixed",
					},
					n.createElement(s.pd, {
						onChange: (e) => {
							r({
								...t,
								credentials: {
									...t.credentials,
									username: e.target.value,
								},
							});
						},
						value: t.credentials.username ?? "",
						ref: u,
					}),
				),
			b &&
				n.createElement(
					s.D0,
					{
						className: g.PasswordPromptPassword,
						label: (0, Localize)("#Settings_Internet_Enter_Password"),
						childrenContainerWidth: "fixed",
					},
					n.createElement(s.yA, {
						onChange: (e) => {
							r({
								...t,
								credentials: {
									...t.credentials,
									password: e.target.value,
								},
							});
						},
						value: t.credentials.password ?? "",
						ref: A,
					}),
				),
			!a &&
				n.createElement(
					s.xh,
					{
						onClick: () => o(true),
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Internet_Connect_Advanced_Enable"),
				),
			a &&
				n.createElement(I, {
					customIP4: t.customIP4,
					setCustomIP4: (e) => {
						r({
							...t,
							customIP4: e,
						});
					},
				}),
			a &&
				M &&
				n.createElement(
					s.Nv,
					{
						label: (0, Localize)("#Settings_Internet_MAC_Address"),
					},
					M,
				),
		),
		n.createElement(
			s.wi,
			null,
			n.createElement(s.CB, {
				strOKText: (0, Localize)("#Settings_Internet_Connect"),
				onOK: v,
				onCancel: e.onCancel,
				bOKDisabled: !S,
			}),
		),
	);
}
function I(e) {
	const t = (t, r) => {
		e.setCustomIP4({
			...e.customIP4,
			[t]: r.target.value,
		});
	};
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(s.MQ, {
			label: (0, Localize)("#Settings_Internet_IP"),
			value: e.customIP4?.ip,
			onChange: (e) => t("ip", e),
		}),
		n.createElement(s.MQ, {
			label: (0, Localize)("#Settings_Internet_Netmask"),
			value: e.customIP4?.netmask,
			onChange: (e) => t("netmask", e),
		}),
		n.createElement(s.MQ, {
			label: (0, Localize)("#Settings_Internet_Gateway"),
			value: e.customIP4?.gateway_ip,
			onChange: (e) => t("gateway_ip", e),
		}),
		n.createElement(s.MQ, {
			label: (0, Localize)("#Settings_Internet_Primary_DNS"),
			value: e.customIP4?.primary_dns_ip,
			onChange: (e) => t("primary_dns_ip", e),
		}),
		n.createElement(s.MQ, {
			label: (0, Localize)("#Settings_Internet_Secondary_DNS"),
			value: e.customIP4?.secondary_dns_ip,
			onChange: (e) => t("secondary_dns_ip", e),
		}),
	);
}
export function E(e) {
	const t = n.useRef({
		...d.OQ.Get().connectivityTestState,
		eConnectivityTestResult: a.ck.k_EConnectivityTestResult_Unknown,
	});
	if (!e.bChecking) {
		t.current = e;
	}
	return t.current;
}
function M(e) {
	const t = e.networkType == i.WO.Wireless;
	const r = e.currentlyConnected;
	const o = !r && e.lastConnectAttemptFailed;
	const p = !r && !o;
	const h = E((0, d.Av)());
	const _ =
		r && h.eConnectivityTestResult == a.ck.k_EConnectivityTestResult_Connected;
	const f =
		r &&
		h.eConnectivityTestResult == a.ck.k_EConnectivityTestResult_CaptivePortal;
	const b = (function (e) {
		const {
			bTimerCompleted: t,
			fnStopTimer: r,
			fnRestartTimer: i,
		} = (0, m.L$)(20000);
		n.useEffect(() => {
			if (e) {
				i();
			} else {
				r();
			}
		}, [e, i, r]);
		return t;
	})(r);
	const y = r && (0, d.qk)(h.eConnectivityTestResult) && (b || f);
	const S = r && !_ && !y;
	const w = S ? 1 : _ ? 2 : y ? 3 : 0;
	const B = {};
	let v;
	if (_) {
		B.onOKButton = e.onCloseAction;
		B.onOKActionDescription = (0, Localize)("#Button_Done");
		B.onCancelButton = e.onCloseAction;
		B.onCancelActionDescription = null;
	} else if (y) {
		B.onCancelButton = e.onBackAction;
		B.onCancelActionDescription = (0, Localize)("#Button_Cancel");
	} else {
		B.onOKButton = () => true;
		B.onOKActionDescription = null;
		B.onCancelButton = e.onBackAction;
		B.onCancelActionDescription = (0, Localize)("#Button_Cancel");
	}
	v = _
		? (0, Localize)("#Settings_Internet_Connection_Successful")
		: f
			? (0, Localize)("#Settings_Internet_Captive_Portal_Detected")
			: y
				? (0, Localize)("#Settings_Internet_Failed_To_Connect_To_Internet")
				: S
					? (0, Localize)("#Settings_Internet_Connecting_To_Internet")
					: o
						? (0, Localize)("#Settings_Internet_Failed_To_Connect_To_Network")
						: (0, Localize)(
								"#Settings_Internet_Connecting_To_Network",
								e.networkDisplayName,
							);
	const I = h.strCaptivePortalURL;
	const M = n.useCallback(
		(e) => {
			(0, A.Y)(e, I);
		},
		[I],
	);
	let k = n.useRef(undefined);
	n.useEffect(() => {
		if (f) {
			M(GetOwningWindowForElement(k.current));
		}
	}, [f, M]);
	return n.createElement(
		s.UC,
		null,
		n.createElement(
			s.f3,
			{
				retainFocus: true,
				noFocusRing: true,
				autoFocus: true,
				focusable: false,
				...B,
			},
			n.createElement(
				"div",
				{
					className: g.ConnectingProgressIcons,
					ref: k,
				},
				n.createElement(T, {
					icon: n.createElement(u.SteamPal, {
						className: g.SteamPalIcon,
					}),
				}),
				n.createElement(R, {
					state: p ? 1 : r ? 2 : 3,
				}),
				n.createElement(T, {
					failed: o,
					icon: t
						? n.createElement(u.WirelessNetwork, {
								className: g.ProgressNetworkIcon,
							})
						: n.createElement(u.WiredNetwork, {
								className: g.ProgressNetworkIcon,
							}),
				}),
				n.createElement(R, {
					state: w,
				}),
				n.createElement(T, {
					failed: y,
					icon: n.createElement(u.WiredNetwork, {
						className: g.ProgressNetworkIcon,
					}),
				}),
			),
			n.createElement(
				"div",
				{
					className: g.ConnectionStatus,
				},
				n.createElement(
					"div",
					{
						className: (0, l.A)(g.ConnectionStatusText, {
							[g.Success]: _,
							[g.Failed]: o || y,
						}),
					},
					v,
				),
				n.createElement(
					s.X8,
					{
						alignItems: "center",
						topPadding: "none",
					},
					f &&
						n.createElement(
							s.$n,
							{
								onClick: (e) => M(GetOwningWindowForEvent(e)),
							},
							(0, Localize)("#Settings_Internet_Captive_Portal_Login_Button"),
						),
					y &&
						n.createElement(
							s.$n,
							{
								onClick: e.onCloseAction,
							},
							(0, Localize)("#Settings_Internet_Use_Network_Anyway"),
						),
					y &&
						n.createElement(
							s.$n,
							{
								onClick: e.onCancelAction,
							},
							(0, Localize)("#Settings_Internet_Try_Another_Network"),
						),
					!_ &&
						!y &&
						n.createElement(
							s.$n,
							{
								onClick: e.onBackAction,
							},
							(0, Localize)("#Button_Cancel"),
						),
					_ &&
						n.createElement(
							s.$n,
							{
								onClick: e.onCloseAction,
							},
							(0, Localize)("#Login_Continue"),
						),
				),
			),
		),
	);
}
function T(e) {
	return n.createElement(
		"div",
		{
			className: (0, l.A)(
				g.ConnectingProgressIconContainer,
				e.failed && g.Failed,
			),
		},
		n.createElement(
			"div",
			{
				className: g.ConnectingProgressIcon,
			},
			e.icon,
		),
	);
}
function R(e) {
	return n.createElement(
		"div",
		{
			className: (0, l.A)(
				g.ConnectingThrobberContainer,
				e.state == 3 && g.Failed,
			),
		},
		e.state == 1 &&
			n.createElement(
				"div",
				{
					className: g.ConnectingThrobber,
				},
				n.createElement("div", null),
				n.createElement("div", null),
				n.createElement("div", null),
			),
		e.state == 2 && n.createElement(u.Checkmark, null),
		e.state == 3 && n.createElement(u.Close, null),
	);
}
