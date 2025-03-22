var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./35488.js");
var s = require("./71225.js");
var o = s;
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require("./57472.js");
var m = require("./33706.js");
var u = require(/*webcrack:missing*/ "./42318.js");
var d = require(/*webcrack:missing*/ "./11131.js");
var A = require("./27756.js");
var p = require("./10606.js");
var g = require("./13869.js");
var h = require("./30449.js");
var C = require("./90389.js");
var _ = require("./11714.js");
var f = require("./34792.js");
function b(e) {
	const t = (0, m.AJ)();
	return n.createElement(c.y, {
		params: t,
		label: (0, l.we)("#Developer_SLS_Enabled"),
		description: (0, l.we)("#Developer_SLS_Enabled_Description"),
		explainer: (0, l.we)("#Developer_SLS_Enabled_Explainer"),
	});
}
function y(e) {
	const { eType: t, ...r } = e;
	const i = !(0, m.AJ)().bEnabled;
	let a = (0, m.BN)(t);
	a.bEnabled = !i && a.bEnabled;
	return n.createElement(c.y, {
		...r,
		params: a,
		disabled: i,
		controlled: true,
	});
}
function S(e) {
	return n.createElement(y, {
		eType: 1,
		label: (0, l.we)("#Developer_SLS_Minidump_Enabled"),
		explainer: (0, l.we)("#Developer_SLS_Minidump_Enabled_Explainer"),
	});
}
function w(e) {
	return n.createElement(y, {
		eType: 2,
		label: (0, l.we)("#Developer_SLS_Kdump_Enabled"),
		explainer: (0, l.we)("#Developer_SLS_Kdump_Enabled_Explainer"),
	});
}
function B(e) {
	return n.createElement(y, {
		eType: 3,
		label: (0, l.we)("#Developer_SLS_Journal_Enabled"),
		explainer: (0, l.we)("#Developer_SLS_Journal_Enabled_Explainer"),
	});
}
function v(e) {
	return n.createElement(y, {
		eType: 4,
		label: (0, l.we)("#Developer_SLS_GPU_Enabled"),
		explainer: (0, l.we)("#Developer_SLS_GPU_Enabled_Explainer"),
	});
}
function I(e) {
	return n.createElement(y, {
		eType: 5,
		label: (0, l.we)("#Developer_SLS_SystemInfo_Enabled"),
		explainer: (0, l.we)("#Developer_SLS_SystemInfo_Enabled_Explainer"),
	});
}
export function w2(e) {
	if ((0, m.bv)()) {
		return n.createElement(
			i.G5,
			null,
			n.createElement(i.lr, null, (0, l.we)("#Developer_SLS_Section")),
			n.createElement(
				u.tH,
				null,
				n.createElement(b, null),
				n.createElement(S, null),
				n.createElement(w, null),
				n.createElement(v, null),
				n.createElement(B, null),
				n.createElement(I, null),
			),
		);
	} else {
		return null;
	}
}
function M(e) {
	const { bResetOS: t, eResult: r } = e;
	let i = null;
	if (r === 3) {
		i = (0, l.we)("#FactoryReset_ErrorModal_NoInternet");
	} else {
		i = t
			? (0, l.we)("#FactoryReset_ErrorModal_NoInternet")
			: (0, l.we)("#FactoryReset_ErrorModal_GenericError");
	}
	return n.createElement(p.KG, {
		strTitle: (0, l.we)("#FactoryReset_ErrorModal_Title").toUpperCase(),
		strDescription: n.createElement(
			"span",
			{
				style: {
					whiteSpace: "pre-line",
				},
			},
			" ",
			i,
			" ",
		),
		strOKButtonText: (0, l.we)("#FactoryReset_ErrorModal_Dismiss"),
		closeModal: e.closeModal,
	});
}
function T(e) {
	const { closeModal: t } = e;
	const r = (0, d.R7)();
	const [a, s] = n.useState(true);
	const [o, c] = n.useState(true);
	const m = n.useCallback(() => {
		C.Bd.FactoryReset({
			reset_os: a,
			reset_user_data: o,
		}).then((e) => {
			if (e.BSuccess()) {
				(0, A.$)({
					bSystemRestart: true,
					strCancelButtonText: (0, l.we)("#Settings_RestartLater_ButtonText"),
					ownerWindow: r.ownerWindow ?? window,
				});
			} else {
				(0, g.pg)(
					n.createElement(M, {
						bResetOS: a,
						eResult: e.GetEResult(),
					}),
					r.ownerWindow ?? window,
				);
			}
		});
		t();
	}, [r, a, o, t]);
	return n.createElement(
		p.eV,
		{
			onCancel: t,
		},
		n.createElement(i.Y9, null, (0, l.we)("#FactoryReset_RequestModal_Title")),
		n.createElement(
			i.nB,
			null,
			n.createElement(
				i.f3,
				null,
				n.createElement(
					i.a3,
					null,
					(0, l.we)("#FactoryReset_RequestModal_Description"),
				),
				n.createElement(i.y4, {
					label: (0, l.we)("#FactoryReset_RequestModal_ResetUserData"),
					checked: a,
					controlled: true,
					onChange: (e) => c(true),
					disabled: true,
				}),
				n.createElement(i.y4, {
					label: (0, l.we)("#FactoryReset_RequestModal_ResetOS"),
					checked: a,
					onChange: (e) => s(e),
					bottomSeparator: "none",
				}),
			),
			n.createElement(
				i.wi,
				null,
				n.createElement(i.CB, {
					onOK: m,
					onCancel: t,
					focusButton: "primary",
				}),
			),
		),
	);
}
export function Ax(e) {
	const t = (0, m.KL)();
	const r = (0, d.R7)();
	const s = n.useCallback(async () => {
		(0, g.pg)(n.createElement(T, null), r.ownerWindow ?? window);
	}, [r]);
	if (t == null) {
		return null;
	}
	const c = {
		label: (0, l.we)("#Settings_System_Factory_Reset_Label"),
		explainer: (0, l.we)("#Settings_System_Factory_Reset_Explainer"),
		bottomSeparator: e.bottomSeparator,
	};
	if (t.is_running) {
		return n.createElement(h.hA, {
			...c,
			focusable: true,
			nProgress: t.progress ?? 0,
			rtEstimatedCompletionTime: t.rtime_estimated_completion,
			sOperationText: `${(0, l.we)("#Settings_System_Factory_Reset_Preparing")} ${t.progress}%`,
			margin: "none",
		});
	}
	const u = t.is_restart_pending ?? false;
	return n.createElement(
		i.xh,
		{
			...c,
			onClick: s,
			icon: u
				? n.createElement(a.ExclamationPoint, {
						className: o.DestructiveActionButtonIcon,
					})
				: null,
			disabled: u,
		},
		(0, l.we)("#Settings_System_Factory_Reset"),
	);
}
export function n1(e) {
	const t = (0, m.Vu)();
	const r = (0, m.lm)();
	return n.createElement(c.G, {
		feature: 7,
		setting: "steamos_tdp_limit_enabled",
		visible: t,
		label: (0, l.we)("#QuickAccess_Tab_Perf_TDPLimitEnabled"),
		explainer: (0, l.we)("#QuickAccess_Tab_Perf_TDPLimit_Explainer"),
		icon: n.createElement(a.TDPLimit, null),
		bottomSeparator: r.visible ? "none" : null,
	});
}
export function BF(e) {
	const t = (0, m.lm)();
	return n.createElement(_.Lh, {
		setting: "steamos_tdp_limit",
		info: t,
		showValue: true,
		explainer: (0, l.we)("#QuickAccess_Tab_Perf_TDPLimit_Explainer"),
		explainerTitle: (0, l.we)("#QuickAccess_Tab_Perf_TDPLimitEnabled"),
		valueSuffix: (0, l.we)("#QuickAccess_Tab_Perf_TDPLimitUnits"),
		step: 1,
		showBookendLabels: true,
	});
}
function N(e) {
	return n.createElement(c.G, {
		feature: 7,
		setting: "steamos_cec_enabled",
		label: (0, l.we)("#Settings_CEC_Enabled"),
	});
}
function F(e) {
	const [t] = (0, f.VI)("steamos_cec_enabled");
	return n.createElement(c.G, {
		feature: 7,
		setting: "steamos_cec_wake_on_resume",
		label: (0, l.we)("#Settings_CEC_WakeOnResume"),
		disabled: !t,
		bottomSeparator: "none",
	});
}
export function dU(e) {
	if ((0, m.HG)()) {
		return n.createElement(
			i.G5,
			null,
			n.createElement(i.lr, null, (0, l.we)("#Settings_CEC_Header")),
			n.createElement(N, null),
			n.createElement(F, null),
		);
	} else {
		return null;
	}
}
export function bu(e) {
	const t = (0, m.Ge)();
	const r = (0, m.cL)();
	return n.createElement(c.G, {
		feature: 7,
		visible: t,
		disabled: r,
		setting: "steamos_wifi_debug",
		label: (0, l.we)("#Settings_SteamOS_WifiDebug"),
	});
}
export function I8(e) {
	const t = (0, m.pi)();
	return n.createElement(c.G, {
		feature: 7,
		visible: t,
		setting: "steamos_wifi_force_wpa_supplicant",
		label: (0, l.we)("#Settings_SteamOS_ForceWPASupplicant"),
		description: (0, l.we)("#Settings_SteamOS_ForceWPASupplicant_Desc"),
	});
}
