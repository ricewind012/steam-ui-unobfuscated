var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./22222.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./44846.js");
var o = require("./64608.js");
var l = require("./13869.js");
var c = require("./10606.js");
var m = require(/*webcrack:missing*/ "./90765.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require("./35488.js");
var A = require("./77347.js");
var p = require("./89748.js");
var g = require("./16204.js");
var h = g;
var C = require("./43802.js");
var _ = require("./27238.js");
var f = require("./28916.js");
var b = require("./45011.js");
var y = require("./46422.js");
var S = require(/*webcrack:missing*/ "./54644.js");
var w = require(/*webcrack:missing*/ "./11010.js");
var B = require(/*webcrack:missing*/ "./11131.js");
function v(e) {
	switch (e.state) {
		case i.$J.Failed:
		case i.$J.Disconnecting:
		case i.$J.Connecting:
		case i.$J.Connected:
		case i.$J.Retrying:
			return true;
		case i.$J.NotPresent:
		case i.$J.Disconnected:
			return false;
	}
}
export function kE(e) {
	return (
		e.state == i.$J.Connecting ||
		e.state == i.$J.Disconnecting ||
		e.state == i.$J.Retrying
	);
}
function E(e) {
	const { accessPoint: t } = e;
	const r = n.useCallback(() => {
		(0, _.U)(t);
	}, [t]);
	const a = t.type == i.WO.Wireless;
	const s = t.isConnected;
	const l = t.showAsLocked;
	const c = t.displayName;
	const A = kE(t);
	const p = (function (e) {
		const t = n.useCallback(() => {
			(0, _.U)(e);
		}, [e]);
		const r = n.useCallback(() => {
			(0, C.V)({
				accessPoint: e,
			});
		}, [e]);
		if (!e) {
			return {};
		}
		const i = {};
		if (e.isConnectable) {
			i.onOKButton = r;
			i.onOKActionDescription = (0, u.we)("#Settings_Internet_Connect");
			i.onMenuActionDescription = (0, u.we)("#Settings_Internet_Info");
		} else {
			i.onOKButton = t;
			i.onOKActionDescription = (0, u.we)("#Settings_Internet_Info");
		}
		i.onMenuButton = t;
		return i;
	})(t);
	if (t) {
		return n.createElement(
			o.D0,
			{
				...p,
				onActivate: r,
				navKey: t.key,
				icon: A
					? n.createElement(d.Spinner, null)
					: s
						? n.createElement(d.Checkmark, {
								className: h.Checkmark,
							})
						: null,
				label: c,
				childrenLayout: "inline",
			},
			l &&
				n.createElement(d.Lock, {
					locked: true,
					className: (0, m.A)(h.LockIcon, h.LargerIcon),
				}),
			a
				? n.createElement(d.WirelessNetwork, {
						className: h.LargerIcon,
						strength: t?.wirelessAPInfo?.estrength,
					})
				: n.createElement(d.WiredNetwork, {
						className: h.LargerIcon,
					}),
		);
	} else {
		return null;
	}
}
export function y6() {
	const e = n.useRef(new Map());
	const t = (0, a.q3)(() => [...A.OQ.Get().userVisibleAccessPoints]).map(
		(t) => {
			if (!e.current.has(t.key)) {
				e.current.set(t.key, t.wirelessAPInfo?.strength_raw ?? 0);
			}
			return {
				accessPoint: t,
				initialRawSignalStrength: e.current.get(t.key),
			};
		},
	);
	t.sort((e, t) => {
		let r = (function (e, t) {
			const r = e.isConnected;
			if (r == t.isConnected) {
				return 0;
			} else if (r) {
				return -1;
			} else {
				return 1;
			}
		})(e.accessPoint, t.accessPoint);
		if (r == 0) {
			r = (function (e, t) {
				if (e.type == i.WO.Wired && t.type != i.WO.Wired) {
					return -1;
				} else if (
					(e.type != i.WO.Wired && t.type == i.WO.Wired) ||
					(e.type == i.WO.Wireless && t.type != i.WO.Wireless)
				) {
					return 1;
				} else if (e.type != i.WO.Wireless && t.type == i.WO.Wireless) {
					return -1;
				} else {
					return 0;
				}
			})(e.accessPoint, t.accessPoint);
		}
		if (r == 0) {
			r =
				e.initialRawSignalStrength > t.initialRawSignalStrength
					? -1
					: e.initialRawSignalStrength < t.initialRawSignalStrength
						? 1
						: 0;
		}
		return r;
	});
	return t.map((e) => e.accessPoint);
}
export function KM(e) {
	const t = (0, A.Ev)();
	const r = y6();
	const i = (0, A.yL)();
	const s = (0, A.ED)();
	(0, A.tI)();
	const [l, c, m] = (0, a.q3)(() => [
		r.filter((e) => v(e)),
		r.filter((e) => !v(e) && false),
		r.filter((e) => !v(e) && true),
	]);
	const d = i && s;
	return n.createElement(
		o.f3,
		null,
		n.createElement(D, null),
		n.createElement(N, null),
		n.createElement(k, null),
		!t &&
			n.createElement(
				o.G5,
				null,
				n.createElement(
					o.lr,
					null,
					(0, u.we)("#Settings_Internet_Active_Networks"),
				),
				l.map((e) =>
					n.createElement(E, {
						key: e.key,
						accessPoint: e,
					}),
				),
			),
		t &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					o.G5,
					null,
					n.createElement(o.y4, {
						checked: i,
						onChange: (e) => A.OQ.Get().SetWifiEnabled(e),
						label: (0, u.we)("#Settings_Internet_Wifi_Enabled"),
					}),
					l.map((e) =>
						n.createElement(E, {
							key: e.key,
							accessPoint: e,
						}),
					),
				),
				c.length > 0 &&
					n.createElement(
						o.G5,
						null,
						n.createElement(
							o.lr,
							null,
							(0, u.we)("#Settings_Internet_Known_Networks"),
						),
						c.map((e) =>
							n.createElement(E, {
								key: e.key,
								accessPoint: e,
							}),
						),
					),
				n.createElement(
					o.G5,
					null,
					n.createElement(
						o.lr,
						null,
						(0, u.we)("#Settings_Internet_Networks_Found"),
					),
					m.map((e) =>
						n.createElement(E, {
							key: e.key,
							accessPoint: e,
						}),
					),
					m.length == 0 &&
						n.createElement(o.D0, {
							disabled: true,
							bottomSeparator: d ? "standard" : "none",
							label: (0, u.we)("#Settings_Internet_No_Other_Networks_Found"),
						}),
					d &&
						n.createElement(o.D0, {
							label: (0, u.we)("#Settings_Internet_Custom_Network_Button"),
							onActivate: () => (0, C.V)(),
						}),
				),
			),
		n.createElement(
			o.G5,
			null,
			n.createElement(
				o.lr,
				null,
				(0, u.we)("#Settings_Internet_Advanced_Settings"),
			),
			n.createElement(F, null),
			n.createElement(G, null),
		),
	);
}
export function $I(e, t) {
	let r = (0, u.we)("#GoOnline");
	let i = (0, u.we)("#UserManagement_GoOnline_Desc");
	let a = (0, S.uX)(e);
	if (t) {
		return (0, l.mK)(
			n.createElement(c.o0, {
				strTitle: r,
				strDescription: i,
				onOK: () => SteamClient.User.GoOnline(),
			}),
			a,
			{
				strTitle: r,
				bForcePopOut: true,
			},
		);
	} else {
		return (0, l.mK)(
			n.createElement(c.KG, {
				strTitle: r,
				strDescription: (0, u.we)("#UserManagement_GoOnline_NoNetwork"),
			}),
			a,
			{
				strTitle: r,
				bForcePopOut: true,
			},
		);
	}
}
function k(e) {
	const t = (0, a.q3)(() => (0, p.qw)().GetServicesInitialized());
	const r = (0, A.yt)();
	const i = (0, p.qw)().BIsOfflineMode();
	const s = n.useCallback(
		(e) => {
			if (i) {
				$I(e, r);
			} else if (r) {
				(function (e) {
					const t = y.oy.MainRunningApp != null;
					let r = (0, S.uX)(e);
					if (t) {
						let e = (0, u.we)("#GoOffline");
						let t = (0, u.we)("#UserManagement_OfflineMode_MustCloseGames");
						return (0, l.mK)(
							n.createElement(c.o0, {
								strTitle: e,
								strDescription: t,
								strCancelButtonText: "",
								bAlertDialog: true,
							}),
							r,
							{
								strTitle: e,
								bForcePopOut: true,
							},
						);
					}
					{
						let e = (0, u.we)("#GoOffline");
						let t = (0, u.we)("#UserManagement_OfflineMode_Desc");
						(0, l.mK)(
							n.createElement(c.o0, {
								strTitle: e,
								strDescription: t,
								onOK: () => SteamClient.User.GoOffline(),
							}),
							r,
							{
								strTitle: e,
								bForcePopOut: true,
							},
						);
					}
				})(e);
			}
		},
		[i, r],
	);
	if (!t) {
		return null;
	}
	const m = r ? null : (0, u.we)("#UserManagement_OfflineMode_NoNetwork");
	return n.createElement(
		o.G5,
		null,
		n.createElement(
			o.D0,
			{
				icon: i
					? n.createElement(d.Caution, {
							className: h.OfflineMode,
						})
					: undefined,
				label: (0, u.we)(
					i
						? "#Settings_Internet_In_Offline_Mode"
						: "#Settings_Internet_Go_Offline",
				),
				description: m,
				bottomSeparator: "none",
				childrenContainerWidth: "min",
			},
			n.createElement(
				o.$n,
				{
					onClick: s,
					focusable: r,
					disabled: !r,
				},
				(0, u.we)(i ? "#GoOnline" : "#GoOffline"),
			),
		),
	);
}
function D(e) {
	const t = (0, A.db)();
	const r = (0, A.gb)();
	if (!t) {
		return null;
	}
	let i = null;
	if (r > 0) {
		const e = (0, u.Hq)(r, {
			eSuffix: w.a8.None,
			bHighGranularity: true,
		});
		i = (0, u.we)(
			"#Settings_Internet_Connected_To_Internet_But_Not_Steam_Throttled",
			e,
		);
	} else {
		i = (0, u.we)("#Settings_Internet_Connected_To_Internet_But_Not_Steam");
	}
	return n.createElement(
		o.G5,
		null,
		n.createElement(o.D0, {
			icon: n.createElement(d.Caution, {
				className: h.NetworkWarning,
			}),
			className: h.NetworkConnectivityWarningField,
			label: i,
			bottomSeparator: "none",
			childrenContainerWidth: "min",
		}),
	);
}
function N(e) {
	const t = (0, A.Av)().eConnectivityTestResult;
	if (!(0, a.q3)(() => (0, p.qw)().GetServicesInitialized())) {
		return null;
	}
	let r = null;
	let i = null;
	switch (t) {
		default:
		case s.ck.k_EConnectivityTestResult_Unknown:
		case s.ck.k_EConnectivityTestResult_Connected:
			break;
		case s.ck.k_EConnectivityTestResult_CaptivePortal:
			r = (0, u.we)("#Settings_Internet_Captive_Portal_Detected");
			i = n.createElement(
				o.$n,
				{
					onClick: (e) => (0, f.Y)((0, S.uX)(e)),
				},
				(0, u.we)("#Settings_Internet_Captive_Portal_Login_Button"),
			);
			break;
		case s.ck.k_EConnectivityTestResult_TimedOut:
		case s.ck.k_EConnectivityTestResult_Failed:
			r = (0, u.we)("#Settings_Internet_Connected_To_Network_But_Not_Internet");
			break;
		case s.ck.k_EConnectivityTestResult_NoLAN:
			r = (0, u.we)("#Settings_Internet_Not_Connected_To_Network");
		case s.ck.k_EConnectivityTestResult_WifiDisabled:
	}
	if (r) {
		return n.createElement(
			o.G5,
			null,
			n.createElement(
				o.D0,
				{
					icon: n.createElement(d.Caution, {
						className: h.NetworkWarning,
					}),
					className: h.NetworkConnectivityWarningField,
					label: r,
					bottomSeparator: "none",
					childrenContainerWidth: "min",
				},
				i,
			),
		);
	} else {
		return null;
	}
}
function F(e) {
	const t = (0, A.qm)();
	const r =
		t.proxy_mode != i.Xu.k_EHTTPProxyMode_Invalid
			? (0, A.dw)(t.proxy_mode)
			: (0, u.we)("#Settings_Internet_ConfigureProxy");
	const a = (0, B.R7)();
	return n.createElement(
		o.xh,
		{
			label: (0, u.we)("#Settings_Internet_HTTPProxy"),
			onClick: () => (0, b.B)(a.ownerWindow),
		},
		r,
	);
}
function G(e) {
	return n.createElement(
		o.xh,
		{
			label: (0, u.we)("#Settings_Internet_WebBrowserDataDelete"),
			onClick: (e) =>
				(function (e) {
					let t = (0, u.we)("#Settings_Internet_WebBrowserDataDelete");
					return (0, l.mK)(
						n.createElement(c.o0, {
							strTitle: t,
							strDescription: (0, u.we)(
								"#Settings_Internet_WebBrowserDataDelete_Desc",
							),
							onOK: () => SteamClient.Browser.ClearAllBrowsingData(),
						}),
						(0, S.uX)(e),
						{
							strTitle: t,
							bForcePopOut: true,
						},
					);
				})(e),
			bottomSeparator: "none",
		},
		(0, u.we)("#Settings_Internet_WebBrowserDataDeleteButton"),
	);
}
