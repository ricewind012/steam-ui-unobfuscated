import * as n from /*webcrack:missing*/ "./90095.js";
import * as i from /*webcrack:missing*/ "./63696.js";
import * as a from "./64608.js";
import * as s from "./35488.js";
import * as o from /*webcrack:missing*/ "./90765.js";
import * as l from /*webcrack:missing*/ "./46108.js";
import * as c from "./74946.js";
import * as m from "./34792.js";
import * as u from "./83247.js";
import * as d from /*webcrack:missing*/ "./49519.js";
import * as A from "./18057.js";
import * as p from "./91720.js";
import * as g from "./46422.js";
import * as h from "./18869.js";
import * as C from "./61294.js";
import * as _ from /*webcrack:missing*/ "./44846.js";
import * as f from "./84056.js";
import * as b from /*webcrack:missing*/ "./72476.js";
import * as y from /*webcrack:missing*/ "./4690.js";
import * as S from /*webcrack:missing*/ "./69164.js";
import * as w from "./33572.js";
import * as B from "./76356.js";
import * as v from "./96680.js";
import * as I from /*webcrack:missing*/ "./52451.js";
import * as E from "./64004.js";
import * as M from "./69767.js";
import * as T from "./4069.js";
export default function R(e) {
	let { app: t, bVisible: r } = e;
	const [n] = (0, m.VI)("g_background_mode");
	const a = (0, E.Gs)();
	const s = (0, M.nH)();
	if (r) {
		if (a) {
			return i.createElement(k, null);
		} else if (s) {
			return i.createElement(D, null);
		} else if (n == 1) {
			return i.createElement(G, {
				app: t,
			});
		} else if (n == 2) {
			return i.createElement(F, {
				app: t,
			});
		} else {
			return i.createElement(N, {
				app: t,
			});
		}
	} else {
		return null;
	}
}
function k() {
	return i.createElement(
		S.Z,
		{
			className: c.RecordingPage,
			navEntryPreferPosition: y.iU.PREFERRED_CHILD,
		},
		i.createElement(
			"div",
			{
				className: c.ExplainerContainer,
			},
			(0, l.we)(
				"#GamepadOverlay_GameRecording_RecordingDisabledRemotePlayExplainer",
			),
		),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(P, {
			preferredFocus: true,
			strSettingPage: "RemotePlay",
		}),
	);
}
function D() {
	return i.createElement(
		S.Z,
		{
			className: c.RecordingPage,
			navEntryPreferPosition: y.iU.PREFERRED_CHILD,
		},
		i.createElement(
			"div",
			{
				className: c.ExplainerContainer,
			},
			(0, l.we)(
				"#GamepadOverlay_GameRecording_RecordingDisabledBroadcastExplainer",
			),
		),
	);
}
function N(e) {
	const { app: t } = e;
	return i.createElement(
		S.Z,
		{
			className: c.RecordingPage,
			navEntryPreferPosition: y.iU.PREFERRED_CHILD,
		},
		i.createElement(
			"div",
			{
				className: c.ExplainerContainer,
			},
			(0, l.we)("#GamepadOverlay_GameRecording_NotRecordingExplainer"),
		),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(P, {
			preferredFocus: true,
			strSettingPage: "GameRecording",
		}),
	);
}
function F(e) {
	const { app: t } = e;
	return i.createElement(
		S.Z,
		{
			className: c.RecordingPage,
			navEntryPreferPosition: y.iU.PREFERRED_CHILD,
		},
		i.createElement(L, null),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(z, null),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(O, {
			app: t,
			recordingMode: 2,
		}),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(x, null),
	);
}
function G(e) {
	const { app: t } = e;
	return i.createElement(
		S.Z,
		{
			className: c.RecordingPage,
			navEntryPreferPosition: y.iU.PREFERRED_CHILD,
		},
		i.createElement(U, null),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(x, null),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(z, null),
		i.createElement("div", {
			className: c.Separator,
		}),
		i.createElement(O, {
			app: t,
			recordingMode: 1,
		}),
	);
}
function O(e) {
	const { app: t, recordingMode: r } = e;
	const s = (0, n.q3)(() => (0, p.Hg)());
	const o = (0, h.br)();
	const m = (0, g.Qu)();
	const d = i.useCallback(() => {
		const { fnStartRecording: e, fnStopRecording: t } = (0, p.qq)();
		if (s) {
			t(s.m_gameID);
		} else if (m) {
			e(m.GetGameID());
		}
	}, [s, m]);
	return i.createElement(
		"div",
		{
			className: c.RecordingButtonContainer,
		},
		r == 2 &&
			i.createElement(
				a.$n,
				{
					preferredFocus: true,
					focusable: true,
					className: c.RecordingButton,
					onClick: d,
				},
				i.createElement(
					"div",
					{
						className: c.ToggleButton,
					},
					(0, l.PP)(
						s
							? "#GamepadOverlay_GameRecording_StopManualRecording"
							: "#GamepadOverlay_GameRecording_StartManualRecording",
						i.createElement(u.vN, {
							className: c.RecordingIcon,
						}),
					),
				),
			),
		r == 1 &&
			i.createElement(
				a.$n,
				{
					preferredFocus: true,
					focusable: true,
					className: c.RecordingButton,
					onClick: () =>
						o.Media.Recording({
							state: {
								gameid: t.gameid,
							},
						}),
				},
				(0, l.we)("#GamepadOverlay_GameRecording_GoToSettings_GameRecording"),
			),
		i.createElement(
			a.$n,
			{
				onClick: () =>
					o.Media.Grid({
						state: {
							filter: {
								listSource: {
									type: "app",
									gameid: t.gameid,
								},
							},
						},
					}),
			},
			(0, l.we)("#GamepadOverlay_GameRecording_GoToMedia"),
		),
		i.createElement(P, {
			strSettingPage: "GameRecording",
		}),
	);
}
function P(e) {
	const { preferredFocus: t, strSettingPage: r } = e;
	const n = (0, h.br)();
	return i.createElement(
		a.$n,
		{
			preferredFocus: !!t,
			focusable: true,
			className: c.RecordingButton,
			onClick: () => n.Settings(r),
		},
		(0, l.we)(`#GamepadOverlay_GameRecording_GoToSettings_${r}`),
	);
}
function L(e) {
	const t = (0, d.W6)();
	const r = (0, b.Qn)();
	return i.createElement(
		"div",
		{
			className: c.ExplainerContainer,
		},
		i.createElement(
			"div",
			{
				className: c.ExplainerText,
			},
			(0, l.we)("#GamepadOverlay_GameRecording_ToggleRecordingExplainer"),
		),
		i.createElement(C.Gn, {
			binding: {
				type: f.N.k_EControllerBindingType_ControllerAction,
				controller_action: {
					action: 45,
				},
			},
			onActivate: () => {
				if (r) {
					t.push(A.BV.GamepadUI.ControllerConfigurator.Main(_.qh));
				} else {
					SteamClient.Apps.ShowControllerConfigurator(_.qh);
				}
			},
		}),
	);
}
function z(e) {
	const t = (0, d.W6)();
	const r = (0, b.Qn)();
	return i.createElement(
		"div",
		{
			className: c.ExplainerContainer,
		},
		i.createElement(
			"div",
			{
				className: c.ExplainerText,
			},
			(0, l.we)("#GamepadOverlay_GameRecording_ClipExplainer"),
		),
		i.createElement(C.Gn, {
			binding: {
				type: f.N.k_EControllerBindingType_ControllerAction,
				controller_action: {
					action: 47,
				},
			},
			onActivate: () => {
				if (r) {
					t.push(A.BV.GamepadUI.ControllerConfigurator.Main(_.qh));
				} else {
					SteamClient.Apps.ShowControllerConfigurator(_.qh);
				}
			},
		}),
	);
}
function x(e) {
	const t = (0, d.W6)();
	const r = (0, b.Qn)();
	return i.createElement(
		"div",
		{
			className: c.ExplainerContainer,
		},
		i.createElement(
			"div",
			{
				className: c.ExplainerText,
			},
			(0, l.PP)(
				"#GamepadOverlay_GameRecording_AddMarkerExplainer",
				i.createElement(u.Od, {
					className: c.AddMarker,
				}),
			),
		),
		i.createElement(C.Gn, {
			binding: {
				type: f.N.k_EControllerBindingType_ControllerAction,
				controller_action: {
					action: 46,
				},
			},
			onActivate: () => {
				if (r) {
					t.push(A.BV.GamepadUI.ControllerConfigurator.Main(_.qh));
				} else {
					SteamClient.Apps.ShowControllerConfigurator(_.qh);
				}
			},
		}),
	);
}
function U(e) {
	return i.createElement(
		"div",
		{
			className: c.ExplainerContainer,
		},
		i.createElement(
			"div",
			{
				className: c.RecordingStateCircle,
			},
			i.createElement(u.jl, null),
			(0, l.we)("#GamepadOverlay_GameRecording_RecordingStateExplainer"),
		),
	);
}
export function GamepadUIRecordingState() {
	const [e] = (0, m.VI)("g_background_mode");
	const t = (0, n.q3)(() => (0, p.Hg)());
	const r = (0, d.W6)();
	const a = (0, w.ch)();
	const s = (0, v.$2)();
	const l = (0, n.q3)(() => B.I.GetActiveLaunches().size > 0);
	const [u, h] = i.useState(l);
	const { fnRestartTimer: C } = (0, I.L$)(500, () => h(false), false);
	i.useEffect(() => {
		if (l && e == 1) {
			h(true);
		} else if (u && !l) {
			C();
		}
	}, [C, u, l, e]);
	const _ = (0, g.Qu)();
	const { gameWithRecording: f, showActiveRecording: b } = (0, n.q3)(() => {
		const r = s.IsGamepadUIOverlayWindow();
		const n = s.IsGamepadUIOverlayWindow() && a.GetOpenSideMenu() != 0;
		return {
			gameWithRecording: t && _,
			showActiveRecording: e != 0 && (!r || n) && (u || (t && _)),
		};
	});
	const y = i.useCallback(() => {
		const { fnStartRecording: e, fnStopRecording: r } = (0, p.qq)();
		if (t) {
			r(t.m_gameID);
		} else if (_) {
			e(_.GetGameID());
		}
	}, [t, _]);
	if ((0, T.BGameRecordingFeatureEnabled)() && (f || b)) {
		return i.createElement(
			S.Z,
			{
				className: c.GRStatus,
				focusable: true,
				onActivate: e == 1 ? () => r.push(A.BV.Settings.GameRecording()) : y,
			},
			i.createElement(
				"div",
				{
					className: c.GamepadHeaderButton,
				},
				i.createElement("div", {
					className: (0, o.A)(c.RecordingCircle, b && c.ActiveRecording),
				}),
			),
		);
	} else {
		return null;
	}
}
export function ManualRecordingToggle(e) {
	const t = (0, g.Qu)();
	const r = (0, n.q3)(() => (0, p.Hg)());
	const s = i.useCallback(() => {
		const { fnStartRecording: e, fnStopRecording: n } = (0, p.qq)();
		if (r) {
			n(r.m_gameID);
		} else if (t) {
			e(t.GetGameID());
		}
	}, [r, t]);
	if (r || t) {
		return i.createElement(
			"div",
			{
				className: c.QuickSettingContainer,
			},
			i.createElement(a.y4, {
				label: (0, l.we)(
					"#QuickAccess_Tab_GameRecording_ManualRecordingToggle",
				),
				checked: r === undefined,
				onChange: () => s(),
				icon: i.createElement(u.vN, {
					className: (0, o.A)(
						c.RecordingIcon,
						r !== undefined && c.ActiveRecording,
					),
				}),
				className: c.ManualRecordingToggle,
				explainer: (0, l.we)(
					"#QuickAccess_Tab_GameRecording_ManualRecordingToggle_Explainer",
				),
			}),
		);
	} else {
		return null;
	}
}
export function BackgroundRecordingQuickSetting(e) {
	const t = (0, h.br)();
	return i.createElement(
		"div",
		{
			className: c.QuickSettingContainer,
		},
		i.createElement(
			a.xh,
			{
				label: (0, l.we)(
					"#QuickAccess_Tab_GameRecording_BackgroundRecordingSetting",
				),
				onClick: () => t.Settings("GameRecording"),
				className: c.BackgroundRecordingQuickSettingRow,
				icon: i.createElement(u.vN, {
					className: (0, o.A)(c.RecordingIcon, c.ActiveRecording),
				}),
			},
			i.createElement(s.Settings, {
				className: c.GearIcon,
			}),
		),
	);
}
