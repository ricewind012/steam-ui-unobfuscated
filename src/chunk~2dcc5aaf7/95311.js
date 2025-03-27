import {
	Localize,
	Hq,
	LocalizeCalendarTime,
} from "../../actual_src/utils/localization.js";
import { ETimeSinceSuffix } from "../../actual_src/utils/localization/datetime.js";
import n, { KV } from "./58437.js";
import i from "./30449.js";
import a from "./81994.js";
import s from "./63696.js";
import o from "./97659.js";
import l from "./64608.js";
import c from "./35488.js";
import m from "./69164.js";
import d, { tn } from "./18869.js";
import A from "./18057.js";
import { gk } from "./46422.js";
import { C9 } from "./66186.js";
import f, { Qc } from "./87546.js";
import b, { wN, Tt, _S, RP, mt } from "./89411.js";
import y from "./97893.js";
import S from "./57016.js";
import { e_ as e } from "./34792.js";
import { W6, zy } from "./49519.js";
import { sf } from "./44846.js";
import { Yj, zV } from "./72388.js";
import { lb } from "./34875.js";
import M from "./42318.js";
import T from "./8953.js";
import R from "./10606.js";
import { A as A_2 } from "./90765.js";
import { dm } from "./34428.js";
import F from "./43691.js";
import { ko } from "./34819.js";
import { cM, Wk } from "./50341.js";
import { x5 } from "./95979.js";
import L from "./97342.js";
import z from "./8573.js";
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
	let a = tn(A.BV.GamepadUI.Setup());
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
	let a = tn(A.BV.GamepadUI.Setup());
	return s.createElement(p, {
		icon: t,
		text: r,
		okText: n,
		onOk: e.onTryAgain,
		cancelText: i,
		onCancel: a,
	});
}
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
		case 124: {
			t = (0, Localize)("#Settings_Updates_UpdateError_InsufficientBattery");
			break;
		}
		case 125: {
			t = (0, Localize)("#Settings_Updates_UpdateError_ChargerRequired");
			break;
		}
		default: {
			t = (0, Localize)("#Settings_Updates_UpdateError_Generic");
		}
	}
	return s.createElement(R.KG, {
		strTitle: (0, Localize)("#Settings_Updates_UpdateErrorTitle"),
		strDescription: t,
		strOKButtonText: (0, Localize)("#Settings_Updates_UpdateErrorOK"),
	});
}
function V(e) {
	const { className: t, short: r } = e;
	const n = wN();
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
			className: A_2(t, L.TimeRemaining),
		},
		i,
	);
}
function H(e) {
	const { label: t } = e;
	const r = Tt();
	const n = r.m_updateState;
	const i = n?.progress?.stage_progress;
	const a = r.GetUpdateSize();
	if (a == null) {
		return null;
	}
	const o = a * i ?? null;
	const l = a ? dm(a, 0) : "? MB";
	const c = o ? dm(o, 0) : "? MB";
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
	const t = Tt();
	const r = _S();
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
	const t = Tt();
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
	const t = Tt();
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
	const r = sf(F.TS.LANGUAGE);
	const n = Yj(t.GetDescriptionWithFallback(r), ["img"]) || "";
	const i = zV(n, ["h1", "h2", "h3", "h4", "h5", "url"]) || "";
	const [a] = e("b24HourClock");
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
	const e = cM();
	const t = Wk();
	const r = ((e) => {
		if (F.TS.ON_DECK) {
			return 1675200;
		} else if (e) {
			return z.b.InitFromClanID(4397053);
		} else {
			return 593110;
		}
	})(e);
	return lb(r, t);
}
function te() {
	const e = Tt();
	const [t] = gk();
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
			let r = RP(e.type);
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
	const t = W6();
	const { state: r } = zy();
	const i = Wk();
	const a = e?.appid;
	const o = e?.GID;
	const l = e?.clanSteamID;
	return s.useCallback(() => {
		if (a || o) {
			const e = KV(a, o, l, {
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
	const t = Tt();
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
	const d = mt(o);
	let A = null;
	const p = _S();
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
	if (Qc().flLevel < 0.3) {
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
	const [t, r] = C9();
	if (e.updateInfo.state != 5 || t < 8192) {
		return null;
	} else {
		return s.createElement(
			"div",
			{
				className: L.ProgressStatus,
			},
			`${dm(t)}/s`,
		);
	}
}
export function zQ(e) {
	const t = Tt();
	const r = t.m_updateState;
	const n = r.state;
	const [o, l] = s.useState(null);
	ko();
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
		case 3: {
			c = (0, Localize)("#Settings_Updates_Checking");
			break;
		}
		case 4: {
			c = (0, Localize)("#Settings_Updates_UpdateStartingDownloadOOBE");
			break;
		}
		case 5: {
			c = (0, Localize)("#Settings_Updates_UpdateApplyingOOBE");
			break;
		}
		case 2: {
			return null;
		}
		case 6:
		case 7: {
			c = (0, Localize)("#Settings_Updates_Restarting");
		}
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
	if (x5()) {
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
