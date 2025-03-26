var n = require("./58437.js");
var i = require("./30449.js");
var a = require("./81994.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./97659.js");
var l = require("./64608.js");
var c = require("./35488.js");
var m = require(/*webcrack:missing*/ "./69164.js");
import {
	Localize,
	Hq,
	LocalizeCalendarTime,
} from "../../actual_src/utils/localization.js";
var d = require("./18869.js");
var A = require("./18057.js");
function p(e) {
	return s.createElement(
		m.Z,
		{
			className: o.ErrorScreen,
			onCancelButton: () => true,
			onCancelActionDescription: null,
		},
		s.createElement(
			"div",
			{
				className: o.Icon,
			},
			e.icon,
		),
		s.createElement(
			"div",
			{
				className: o.Text,
			},
			e.text,
		),
		s.createElement(
			m.Z,
			{
				className: o.EqualWidthButtonPair,
			},
			s.createElement(
				l.jn,
				{
					autoFocus: true,
					className: `${o.Primary} ${o.Button}`,
					onClick: e.onOk,
				},
				e.okText,
			),
			s.createElement(
				l.$n,
				{
					className: o.Button,
					onClick: e.onCancel,
				},
				e.cancelText,
			),
		),
	);
}
function g(e) {
	let t = s.createElement(c.Caution, null);
	let r = (0, Localize)("#Settings_Updates_Error_FailedToDownload");
	let n = (0, Localize)("#TryAgain");
	let i = (0, Localize)("#Help");
	let a = (0, d.tn)(A.BV.GamepadUI.Setup());
	return s.createElement(p, {
		icon: t,
		text: r,
		okText: n,
		onOk: e.onTryAgain,
		cancelText: i,
		onCancel: a,
	});
}
function h(e) {
	let t = s.createElement(c.Caution, null);
	let r = (0, Localize)("#Settings_Updates_Error_DiskFull");
	let n = (0, Localize)("#TryAgain");
	let i = (0, Localize)("#Help");
	let a = (0, d.tn)(A.BV.GamepadUI.Setup());
	return s.createElement(p, {
		icon: t,
		text: r,
		okText: n,
		onOk: e.onTryAgain,
		cancelText: i,
		onCancel: a,
	});
}
var C = require("./46422.js");
var _ = require("./66186.js");
var f = require("./87546.js");
var b = require("./89411.js");
var y = require("./97893.js");
var S = require("./57016.js");
var w = require("./34792.js");
var B = require(/*webcrack:missing*/ "./49519.js");
var v = require(/*webcrack:missing*/ "./44846.js");
var I = require("./72388.js");
var E = require("./34875.js");
var M = require(/*webcrack:missing*/ "./42318.js");
var T = require("./8953.js");
var R = require("./10606.js");
var k = require(/*webcrack:missing*/ "./90765.js");
import { ETimeSinceSuffix } from "../../actual_src/utils/localization/datetime.js";
var N = require("./34428.js");
var F = require(/*webcrack:missing*/ "./43691.js");
var G = require("./34819.js");
var O = require("./50341.js");
var P = require("./95979.js");
var L = require("./97342.js");
var z = require(/*webcrack:missing*/ "./8573.js");
export function _o(e) {
	const { onOK: t, onCancel: r, sOverrideAutoMessage: n } = e;
	let i = null;
	i =
		n != null
			? s.createElement(
					"span",
					{
						style: {
							whiteSpace: "pre-line",
						},
					},
					n,
				)
			: s.createElement(
					"span",
					null,
					(0, Localize)("#Settings_Updates_ScaryBIOSWarningLine1"),
					s.createElement("br", null),
					s.createElement("br", null),
					(0, Localize)("#Settings_Updates_ScaryBIOSWarningLine2"),
				);
	return s.createElement(R.o0, {
		strTitle: (0, Localize)("#Settings_Updates_ScaryBIOSWarningTitle"),
		strDescription: i,
		strOKButtonText: (0, Localize)("#Settings_Updates_ScaryBIOSWarningOK"),
		strCancelButtonText: (0, Localize)(
			"#Settings_Updates_ScaryBIOSWarningCancel",
		),
		onOK: t,
		onCancel: r,
	});
}
export function D8(e) {
	const { onOK: t, onCancel: r } = e;
	let n = s.createElement(
		"span",
		{
			style: {
				whiteSpace: "pre-line",
			},
		},
		(0, Localize)("#Settings_Updates_BlankScreenWarning_Text"),
	);
	return s.createElement(R.o0, {
		strTitle: (0, Localize)("#Settings_Updates_BlankScreenWarning_Title"),
		strDescription: n,
		strOKButtonText: (0, Localize)("#Settings_Updates_BlankScreenWarning_OK"),
		strCancelButtonText: (0, Localize)(
			"#Settings_Updates_BlankScreenWarning_Cancel",
		),
		onOK: t,
		onCancel: r,
	});
}
export function b4(e) {
	let t = e.strMsg;
	switch (e.eResult) {
		case 124:
			t = (0, Localize)("#Settings_Updates_UpdateError_InsufficientBattery");
			break;
		case 125:
			t = (0, Localize)("#Settings_Updates_UpdateError_ChargerRequired");
			break;
		default:
			t = (0, Localize)("#Settings_Updates_UpdateError_Generic");
	}
	return s.createElement(R.KG, {
		strTitle: (0, Localize)("#Settings_Updates_UpdateErrorTitle"),
		strDescription: t,
		strOKButtonText: (0, Localize)("#Settings_Updates_UpdateErrorOK"),
	});
}
function V(e) {
	const { className: t, short: r } = e;
	const n = (0, b.wN)();
	let i = "";
	if (n) {
		i =
			(r ?? false)
				? y.hj.LocalizeTimeRemaining(n)
				: (0, Hq)(n, {
						eSuffix: ETimeSinceSuffix.Remaining,
						bHighGranularity: true,
					});
	}
	return s.createElement(
		"div",
		{
			className: (0, k.A)(t, L.TimeRemaining),
		},
		i,
	);
}
function H(e) {
	const { label: t } = e;
	const r = (0, b.Tt)();
	const n = r.m_updateState;
	const i = n?.progress?.stage_progress;
	const a = r.GetUpdateSize();
	if (a == null) {
		return null;
	}
	const o = a * i ?? null;
	const l = a ? (0, N.dm)(a, 0) : "? MB";
	const c = o ? (0, N.dm)(o, 0) : "? MB";
	return s.createElement(
		"div",
		{
			className: L.UpdateBytesRemaining,
		},
		t &&
			s.createElement(
				"div",
				{
					className: L.Label,
				},
				t,
			),
		s.createElement(
			"span",
			{
				className: L.Numerator,
			},
			c,
		),
		s.createElement(
			"span",
			{
				className: L.Separator,
			},
			"/",
		),
		s.createElement(
			"span",
			{
				className: L.Denominator,
			},
			l,
		),
	);
}
function j(e) {
	return s.createElement(
		l.$n,
		{
			disabled: true,
		},
		(0, Localize)("#Settings_Updates_Invalid_Title"),
	);
}
function q(e) {
	const t = (0, b.Tt)();
	const r = (0, b._S)();
	const n = r != null && r < 4;
	const i = n
		? (0, Localize)("#Settings_Updates_NoUpdatesAvailable")
		: (0, Localize)("#Settings_Updates_CheckForUpdates");
	return s.createElement(
		l.$n,
		{
			onClick: () => t.CheckForUpdates(b.ib),
			disabled: n,
		},
		i,
	);
}
function Q(e) {
	return s.createElement(
		l.$n,
		{
			disabled: true,
		},
		(0, Localize)("#Settings_Updates_Checking"),
	);
}
function Z(e) {
	const t = (0, b.Tt)();
	const r = (0, Localize)("#Settings_Updates_UpdateApply");
	const n = t.GetAvailableTypes();
	return s.createElement(
		l.$n,
		{
			onClick: () => t.ApplyUpdate(n, b.ib),
		},
		r,
	);
}
function Y(e) {
	const t = (0, b.Tt)();
	const r = t.GetProgressPercent() ?? 0;
	const n = `${(0, Localize)("#Settings_Updates_UpdateApplying")} ${r}%`;
	return s.createElement(
		m.Z,
		{
			focusable: true,
			noFocusRing: true,
			className: L.UpdaterFieldStatusApplying,
		},
		s.createElement(
			"div",
			{
				className: L.TextContainer,
			},
			s.createElement(V, {
				short: true,
			}),
			s.createElement(
				"div",
				{
					className: L.ApplyingText,
				},
				n,
			),
		),
		s.createElement(i.z2, {
			nProgress: t.GetProgressPercent(),
			nTransitionSec: 0.3,
		}),
		s.createElement(H, {
			label: s.createElement(c.Download, null),
		}),
	);
}
function K(e) {
	return s.createElement(
		l.$n,
		{
			onClick: () => SteamClient.User.StartRestart(false),
		},
		(0, Localize)("#Settings_Updates_RestartClientNow"),
	);
}
function X(e) {
	return s.createElement(
		l.$n,
		{
			onClick: () => SteamClient.System.RestartPC(),
		},
		(0, Localize)("#Settings_Updates_RestartSystemNow"),
	);
}
function J(e) {
	return s.createElement(
		l.$n,
		{
			onClick: () => SteamClient.System.RebootToAlternateSystemPartition(),
		},
		(0, Localize)("#Settings_Updates_RestartSystemNow"),
	);
}
const $ = (e) => {
	const { event: t } = e;
	const r = (0, v.sf)(F.TS.LANGUAGE);
	const n = (0, I.Yj)(t.GetDescriptionWithFallback(r), ["img"]) || "";
	const i = (0, I.zV)(n, ["h1", "h2", "h3", "h4", "h5", "url"]) || "";
	const [a] = (0, w.e_)("b24HourClock");
	const o = re(t);
	return s.createElement(
		m.Z,
		{
			className: L.PatchNotes,
			onActivate: o,
		},
		s.createElement(
			"div",
			{
				className: L.PostedTime,
			},
			LocalizeCalendarTime(t.GetPostTimeAndDateUnixSeconds(), {
				bGranularToday: true,
				bGranularWeek: true,
				bAbbreviateDayOfWeek: true,
				bForce24HourClock: a,
			}),
		),
		s.createElement(
			"div",
			{
				className: L.EventDetailTitle,
			},
			t.GetNameWithFallback(r),
		),
		t.BHasSubTitle(r) &&
			s.createElement(
				"div",
				{
					className: L.EventDetailsSubTitle,
				},
				t.GetSubTitle(r),
			),
		s.createElement(
			"div",
			{
				className: L.EventDetailsBody,
			},
			s.createElement(T.f, {
				text: i,
				partnerEventStore: S.IB,
				event: t,
			}),
		),
	);
};
function ee() {
	const e = (0, O.cM)();
	const t = (0, O.Wk)();
	const r = (function (e) {
		if (F.TS.ON_DECK) {
			return 1675200;
		} else if (e) {
			return z.b.InitFromClanID(4397053);
		} else {
			return 593110;
		}
	})(e);
	return (0, E.lb)(r, t);
}
function te() {
	const e = (0, b.Tt)();
	const [t] = (0, C.gk)();
	const r = ee();
	const n = e.m_updateState?.update_check_results;
	if (!n) {
		return null;
	}
	let i = false;
	let a = [];
	for (const e of n) {
		if (e.available && ((i = true), t)) {
			const t = (0, Localize)("#Settings_System_Update_Available");
			let r = (0, b.RP)(e.type);
			if (e.version) {
				r += ` ${e.version.trim()}`;
			}
			a.push(
				s.createElement(l.T8, {
					key: r,
					name: t,
					value: r,
				}),
			);
		}
	}
	return s.createElement(
		M.tH,
		null,
		i &&
			r &&
			s.createElement($, {
				event: r,
			}),
		a,
	);
}
function re(e) {
	const t = (0, B.W6)();
	const { state: r } = (0, B.zy)();
	const i = (0, O.Wk)();
	const a = e?.appid;
	const o = e?.GID;
	const l = e?.clanSteamID;
	return s.useCallback(() => {
		if (a || o) {
			const e = (0, n.KV)(a, o, l, {
				require_tags: ["patchnotes", ...i],
			});
			t.replace({
				...t.location,
				state: {
					...r,
					...e,
				},
			});
		}
	}, [a, o, l, t, i, r]);
}
export function km(e) {
	const t = (0, b.Tt)();
	const r = ee();
	const n = {};
	n.onOptionsButton = re(r);
	n.onOptionsActionDescription = (0, Localize)("#Settings_Updates_PatchNotes");
	const i = e.strLabel;
	const a = {
		0: j,
		2: q,
		3: Q,
		4: Z,
		5: Y,
		6: K,
		7: X,
		8: J,
	};
	const o = t.m_updateState.state;
	const m = a[o];
	const d = (0, b.mt)(o);
	let A = null;
	const p = (0, b._S)();
	if (p != null && !d) {
		const e = (0, Hq)(p, {
			eSuffix: ETimeSinceSuffix.Ago,
			bHighGranularity: false,
		});
		A = (0, Localize)("#Settings_Updates_UpToDate", e);
	}
	return s.createElement(
		s.Fragment,
		null,
		s.createElement(
			l.D0,
			{
				label: i,
				description: A,
				childrenContainerWidth: "fixed",
				...n,
				icon: d ? s.createElement(c.FieldYellowExclamation, null) : null,
				retainFocus: true,
			},
			s.createElement(
				"div",
				{
					className: L.UpdateStatusContainer,
				},
				s.createElement(m, null),
			),
		),
		s.createElement(te, null),
	);
}
function ie(e) {
	if ((0, f.Qc)().flLevel < 0.3) {
		return s.createElement(
			"div",
			{
				className: L.BatteryLowWarning,
			},
			s.createElement(
				"div",
				null,
				(0, Localize)("#Settings_Updates_LowBattery_Line1"),
			),
			s.createElement(
				"div",
				null,
				(0, Localize)("#Settings_Updates_LowBattery_Line2"),
			),
		);
	} else {
		return null;
	}
}
function ae(e) {
	e.updateInfo.progress.stage_progress;
	e.updateInfo.progress.stage_size_bytes;
	const [t, r] = (0, _.C9)();
	if (e.updateInfo.state != 5 || t < 8192) {
		return null;
	} else {
		return s.createElement(
			"div",
			{
				className: L.ProgressStatus,
			},
			(0, N.dm)(t) + "/s",
		);
	}
}
export function zQ(e) {
	const t = (0, b.Tt)();
	const r = t.m_updateState;
	const n = r.state;
	const [o, l] = s.useState(null);
	(0, G.ko)();
	s.useEffect(() => {
		let r = true;
		t.EnsureOOOBEUpdateApplying().then((n) => {
			if (r) {
				l(n);
				e.onUpdateComplete(n, t.m_updateState.state);
			}
		});
		return () => {
			r = false;
		};
	}, [t, e, l]);
	let c = null;
	switch (n) {
		case 3:
			c = (0, Localize)("#Settings_Updates_Checking");
			break;
		case 4:
			c = (0, Localize)("#Settings_Updates_UpdateStartingDownloadOOBE");
			break;
		case 5:
			c = (0, Localize)("#Settings_Updates_UpdateApplyingOOBE");
			break;
		case 2:
			return null;
		case 6:
		case 7:
			c = (0, Localize)("#Settings_Updates_Restarting");
	}
	if ((o != null && o != 2) || n == 0) {
		if (o == 54) {
			return s.createElement(h, {
				onTryAgain: e.onRestart,
			});
		} else {
			return s.createElement(g, {
				onTryAgain: e.onRestart,
			});
		}
	} else {
		return s.createElement(
			"div",
			{
				className: L.UpdateScreen,
			},
			s.createElement(
				m.Z,
				{
					className: L.UpdatePanel,
					onCancelButton: e.onCancel,
					onOKActionDescription: null,
					onOptionsButton: e.onShowHelp,
					onOptionsActionDescription: (0, Localize)("#Help"),
					autoFocus: true,
					noFocusRing: true,
					focusable: true,
				},
				s.createElement(ie, null),
				s.createElement(
					a.j,
					{
						background: "transparent",
						showFooter: true,
					},
					s.createElement(
						"div",
						{
							className: L.CurrentStatus,
						},
						c,
					),
					s.createElement(
						"div",
						{
							className: L.OOBEUpdateStatusContainer,
						},
						t.GetProgressPercent() > 0 &&
							s.createElement(
								s.Fragment,
								null,
								s.createElement(i.z2, {
									nProgress: t.GetProgressPercent(),
									backgroundColor: "rgba(0,0,0,0.2)",
									color: "rgba(255,255,255)",
								}),
								s.createElement(
									"div",
									{
										className: L.ProgressInfoContainer,
									},
									s.createElement(V, null),
									s.createElement(ae, {
										updateInfo: r,
									}),
								),
							),
					),
				),
			),
		);
	}
}
export function aY(e) {
	if ((0, P.x5)()) {
		return s.createElement(
			m.Z,
			{
				className: L.UnsupportedHardwareWarning,
			},
			s.createElement(
				"div",
				{
					className: L.Title,
				},
				s.createElement(c.FieldYellowExclamation, null),
				s.createElement(
					"div",
					{
						className: L.Text,
					},
					(0, Localize)("#Devkit_Unsupported_Settings_Title"),
				),
			),
			s.createElement(
				"div",
				{
					className: L.Body,
				},
				(0, Localize)("#Devkit_Unsupported_Settings_Message"),
			),
		);
	} else {
		return null;
	}
}
