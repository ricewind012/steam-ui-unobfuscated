var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./35488.js");
var s = require(/*webcrack:missing*/ "./85243.js");
var o = require("./19999.js");
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./27710.js");
var m = require("./30449.js");
var u = require("./10606.js");
var d = require("./13869.js");
var A = require("./46422.js");
var p = require("./31319.js");
var g = require("./71033.js");
import {
	LocalizeTimeSince,
	ETimeSinceSuffix,
} from "../../actual_src/utils/localization/datetime.js";
var C = require(/*webcrack:missing*/ "./61657.js");
var _ = require(/*webcrack:missing*/ "./69164.js");
var f = require("./56970.js");
var b = require("./55489.js");
function y(e) {
	const { sLabel: t, fnCheck: r } = e;
	return n.createElement(
		i.xh,
		{
			label: t,
			onClick: r,
		},
		Localize("#Settings_Updates_Invalid"),
	);
}
function S(e) {
	const { sLabel: t, fnCheck: r } = e;
	const a = (0, c.Qi)();
	const s = a != null && a < 4;
	const o = s
		? Localize("#Settings_Updates_NoUpdatesAvailable")
		: Localize("#Settings_Updates_CheckForUpdates");
	return n.createElement(
		i.xh,
		{
			label: t,
			onClick: r,
			disabled: s,
			childrenContainerWidth: "fixed",
		},
		o,
	);
}
function w(e) {
	const { sLabel: t } = e;
	return n.createElement(m.hA, {
		indeterminate: true,
		label: t,
		sOperationText: Localize("#Settings_Updates_Checking"),
		margin: "none",
		nProgress: null,
		nTransitionSec: 0.3,
	});
}
function B(e) {
	const { sLabel: t, fnApply: r } = e;
	return n.createElement(
		i.xh,
		{
			label: t,
			onClick: r,
			icon: n.createElement(a.FieldYellowExclamation, null),
			childrenContainerWidth: "fixed",
		},
		Localize("#Settings_Updates_UpdateApply"),
	);
}
function v(e) {
	const { sLabel: t } = e;
	const r = (0, c.Kh)();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(m.hA, {
			indeterminate: true,
			label: t,
			sOperationText: Localize("#Settings_Updates_UpdateApplying"),
			margin: "none",
			nProgress: r?.stage_progress * 100,
			rtEstimatedCompletionTime: r.rtime_estimated_completion,
			nTransitionSec: 0.3,
		}),
	);
}
export function g5(e) {
	const { bHideWhenUnavailable: t = false } = e;
	const [r, i, a] = (0, c.AF)();
	const s = {
		0: y,
		2: S,
		3: w,
		4: B,
		5: v,
		6: null,
		7: null,
		8: null,
	};
	const o = n.useCallback(async () => {
		const e = await i();
		if (e.result != 1) {
			await (0, d.pg)(
				E({
					eResult: e.result,
				}),
				window,
			);
		}
		return e;
	}, [i]);
	const m = n.useCallback(async () => {
		const e = await a();
		if (e.result != 1) {
			await (0, d.pg)(
				E({
					eResult: e.result,
				}),
				window,
			);
		}
		return e;
	}, [a]);
	if (t) {
		switch (r) {
			case 0:
			case 2:
				return null;
		}
	}
	const u = Localize("#Settings_DockUpdate_Label");
	const A = s[r];
	return n.createElement(A, {
		sLabel: u,
		fnCheck: o,
		fnApply: m,
	});
}
function E(e) {
	let t = null;
	e.eResult;
	t = Localize("#Settings_DockUpdate_Error_Generic");
	return n.createElement(u.KG, {
		strTitle: Localize("#Settings_DockUpdate_Error_Title").toUpperCase(),
		strDescription: t,
		strOKButtonText: Localize("#Settings_Updates_UpdateErrorOK"),
		closeModal: e.closeModal,
	});
}
function M(e) {
	const t = (0, c.Kh)();
	const r = (0, c.Mi)();
	const i =
		r > 0
			? LocalizeTimeSince(r, {
					eSuffix: ETimeSinceSuffix.Remaining,
					bHighGranularity: true,
				})
			: null;
	(0, A.LC)();
	(0, p.pw)();
	(0, g.Nx)();
	(0, b.Bx)(s.I5.Opaque, "SystemDockUpdateApplyTakeoverContent");
	let d = n.useCallback((e) => {
		switch (e.detail.button) {
			case C.pR.STEAM_GUIDE:
			case C.pR.STEAM_QUICK_MENU:
				e.preventDefault();
				e.stopPropagation();
				return;
		}
	}, []);
	return n.createElement(
		u.EN,
		{
			active: true,
		},
		n.createElement(
			"div",
			{
				className: o.SystemDockUpdateApplyTakeover,
			},
			n.createElement(
				_.Z,
				{
					className: o.Container,
					focusable: true,
					autoFocus: true,
					noFocusRing: true,
					onButtonDown: d,
					onButtonUp: d,
				},
				n.createElement(
					"div",
					{
						className: o.Image,
					},
					n.createElement(a.DeckDockFront, null),
				),
				n.createElement(
					"div",
					{
						className: o.UnplugWarning,
					},
					" ",
					Localize("#Settings_DockUpdate_UnplugWarning"),
					" ",
				),
				n.createElement(
					"div",
					{
						className: o.ProgressContainer,
					},
					n.createElement(m.z2, {
						nProgress: t?.stage_progress * 100,
					}),
					n.createElement(
						"div",
						{
							className: o.TimeRemaining,
						},
						i,
					),
				),
			),
		),
	);
}
async function T() {
	const e = await c.Rk.Get().ApplyUpdate();
	if (e.result != 1) {
		await (0, d.pg)(
			E({
				eResult: e.result,
			}),
			window,
		);
	}
	return e;
}
export function TE(e) {
	const [t] = (0, c.AF)();
	if (t != 5) {
		return null;
	} else {
		return n.createElement(M, null);
	}
}
function k(e) {
	let t = Localize("#SteamDock_UnsupportedFirmwareAreYouSureModal_Description");
	return n.createElement(u.o0, {
		strTitle: Localize(
			"#SteamDock_UnsupportedFirmwareAreYouSureModal_Title",
		).toUpperCase(),
		strDescription: t,
		strOKButtonText: Localize(
			"#SteamDock_UnsupportedFirmwareAreYouSureModal_OK",
		),
		onOK: () => T(),
		strCancelButtonText: Localize(
			"#SteamDock_UnsupportedFirmwareAreYouSureModal_Cancel",
		),
		onCancel: () => c.Rk.Get().DisarmSafetyNet(),
		closeModal: e.closeModal,
	});
}
function D(e) {
	let t = Localize("#SteamDock_UnsupportedFirmwareModal_Description");
	return n.createElement(u.o0, {
		strTitle: Localize(
			"#SteamDock_UnsupportedFirmwareModal_Title",
		).toUpperCase(),
		strDescription: t,
		strOKButtonText: Localize("#SteamDock_UnsupportedFirmwareModal_OK"),
		onOK: () => T(),
		strCancelButtonText: Localize("#SteamDock_UnsupportedFirmwareModal_Cancel"),
		onCancel: () => (0, d.pg)(n.createElement(k, null), window),
		closeModal: e.closeModal,
	});
}
export function G3() {
	if (f.yE.IsLockScreenActive()) {
		setTimeout(() => G3(), 1000);
	} else {
		(0, d.pg)(n.createElement(D, null), window);
	}
}
export function Xo() {
	const e = (0, c.Kh)();
	const t = e?.version_current;
	if (t) {
		return n.createElement(i.T8, {
			name: Localize("#Settings_System_DockFWVersion"),
			value: t,
		});
	} else {
		return null;
	}
}
