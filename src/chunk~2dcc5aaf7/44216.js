import * as n from /*webcrack:missing*/ "./63696.js";
import * as i from "./58752.js";
import * as a from "./35488.js";
import * as s from "./34792.js";
import * as o from "./91720.js";
import * as l from "./57622.js";
import * as c from "./92374.js";
import * as m from "./99998.js";
import * as u from "./34891.js";
import * as d from "./68956.js";
import * as A from /*webcrack:missing*/ "./90095.js";
import * as p from "./29516.js";
import * as g from "./67429.js";
import * as h from "./52808.js";
import * as C from "./22588.js";
import * as _ from "./82153.js";
import * as f from "./94361.js";
import * as b from /*webcrack:missing*/ "./46108.js";
import * as y from /*webcrack:missing*/ "./90765.js";
import * as S from "./34461.js";
import * as w from "./4069.js";
import * as B from "./96680.js";
import * as v from "./18869.js";
import * as I from "./3499.js";
import * as E from /*webcrack:missing*/ "./58254.js";
import * as M from "./69767.js";
import * as T from "./44926.js";
import * as R from /*webcrack:missing*/ "./90685.js";
import * as k from /*webcrack:missing*/ "./72476.js";
import * as D from "./28592.js";
import * as N from /*webcrack:missing*/ "./98995.js";
import * as F from /*webcrack:missing*/ "./46382.js";
import * as G from /*webcrack:missing*/ "./92251.js";
import * as O from "./51582.js";
import * as P from /*webcrack:missing*/ "./52451.js";
import * as L from "./64004.js";
import * as z from "./3874.js";
import * as x from "./21163.js";
import * as U from /*webcrack:missing*/ "./85243.js";
const W = parseInt(i.animationTransitionMS);
export default (function (e) {
	const { gameID: t, timelineWidth: r } = e;
	const i = (0, h.Mm)(new g.VS(t));
	const a = (0, B.$2)().DesktopOverlay;
	n.useEffect(() => () => a.ChangeTimelineExpansionState(false), [a]);
	if (i.bEnabled) {
		return n.createElement(
			S.Zz,
			null,
			n.createElement(j, {
				...e,
			}),
		);
	} else {
		return null;
	}
});
function H(e) {
	return n.createElement(
		"div",
		{
			className: i.TransparentBackground,
		},
		e.children,
	);
}
function j(e) {
	const { gameID: t, timelineWidth: r } = e;
	const { loader: a, fnGetManifest: s } = (0, C.Fc)(t);
	const m = (0, M.Y5)(t);
	const u = (0, w.useGameRecordingSetting)();
	const d = (0, o.$O)(t);
	const A = (0, v.br)();
	const p = (0, n.useCallback)(
		(e) => {
			A.Media.Clip({
				state: {
					id: e,
				},
			});
		},
		[A],
	);
	const g = (0, n.useCallback)(
		(e, t) => {
			const r = (0, I.i3)({
				strGameID: e,
				hHandle: t,
			});
			A.Media.Screenshot({
				state: {
					id: r,
				},
			});
		},
		[A],
	);
	const h = (0, n.useCallback)(
		(e, t) => {
			let r = {};
			if (e) {
				r.listSource = {
					type: "app",
					gameid: e,
				};
			}
			if (t) {
				r.mediaType = t;
			}
			A.Media.Grid({
				state: {
					filter: r,
				},
			});
		},
		[A],
	);
	const f = (0, S.NR)();
	const { progressElement: y, onShowProgressBar: E } = (0, x.e)();
	const {
		bShowClipSavedHint: T,
		hideClipSavedHint: R,
		showClipSavedHintIfNecessary: D,
	} = (function () {
		const [e, t] = (0, n.useState)(false);
		const r = (0, F.rX)();
		const i = (0, B.$2)().DesktopOverlay;
		const a = (0, n.useCallback)(async () => {
			if (!i) {
				return;
			}
			const e = "seen_clip_saved_hint";
			if (!(await r.GetString(e))) {
				r.StoreString(e, "1");
				i.m_bShowClipSavedHint = true;
				t(true);
			}
		}, [i, r]);
		const s = (0, n.useCallback)(() => {
			i.m_bShowClipSavedHint = false;
			t(false);
		}, [i]);
		return {
			showClipSavedHintIfNecessary: a,
			bShowClipSavedHint: e,
			hideClipSavedHint: s,
		};
	})();
	const N = (0, n.useCallback)(() => {
		R();
		h(t);
	}, [t, h, R]);
	const P = (0, S.NR)();
	const L = (0, n.useCallback)((e, t, r) => r && P.onConfirm(r), [P]);
	const U = (0, n.useCallback)(
		() => A.SteamWeb(`${k.TS.HELP_BASE_URL}faqs/view/${l.k_strGRFAQ}`),
		[A],
	);
	const W = (0, x.J)();
	const V = n.useRef(undefined);
	return n.createElement(
		_.b,
		{
			className: i.KeyboardCapture,
		},
		n.createElement(
			H,
			null,
			n.createElement(
				z.IP,
				{
					onNavigateToGRSettings: () => A.Settings("GameRecording"),
					onMarkerCreated: L,
					onNavigateToClip: p,
					onNavigateToScreenshot: g,
					onNavigateToMedia: h,
					onNavigateToFAQ: U,
					onShowError: W,
					onShowProgressBar: E,
				},
				n.createElement(
					c.Ni,
					{
						loader: a,
						fnGetManifest: s,
						mode: c.g_.Overlay,
						recordingState: m,
						recordingSetting: u,
						clipSummaries: d,
					},
					n.createElement(Q, {
						gameID: t,
						loader: a,
						timelineWidth: r,
						ref: V,
					}),
				),
				n.createElement(
					S._D,
					{
						...f.confirmationProps,
					},
					(0, b.we)("#ClipCreated_Confirmation"),
				),
				n.createElement(
					S._D,
					{
						...P.confirmationProps,
					},
					(0, b.we)("#Marker_UserMarkerAdded_Confirmation"),
				),
				T &&
					n.createElement(
						G.g,
						{
							target: V.current,
							bEnablePointerEvents: true,
							direction: "bottom",
							nBodyAlignment: 1,
							className: i.ClipSavedHint,
						},
						n.createElement(O.Tk, {
							onRequestClose: R,
							onViewClip: N,
						}),
					),
				y,
			),
		),
	);
}
export function useHandleTimelineOverlayNotifications(e) {
	const t = (0, v.br)();
	n.useEffect(
		() =>
			T.xM.RegisterForNotifyOpenOverlayToGamePhase((r) => {
				const n = r.Body().toObject();
				if (n.game_id != e) {
					return 1;
				}
				let i = {};
				if (e) {
					i.listSource = {
						type: "app",
						gameid: e,
					};
				}
				i.phaseID = n.phase_id;
				t.Media.List({
					state: {
						filter: i,
					},
				});
				SteamClient.Overlay.SetOverlayState(e, U.I5.Overlay);
				return 1;
			}).unregister,
		[e, t],
	);
	n.useEffect(
		() =>
			T.xM.RegisterForNotifyOpenOverlayToTimelineEvent((r) => {
				const n = r.Body().toObject();
				if (n.game_id != e) {
					return 1;
				}
				const i = {
					m_strTimelineID: "",
					m_nTimelineStartMS: 0,
					m_strEntryID: n.entry_id,
				};
				t.Media.Recording({
					state: {
						gameid: e,
						playbackDefinition: i,
					},
				});
				SteamClient.Overlay.SetOverlayState(e, U.I5.Overlay);
				return 1;
			}).unregister,
		[e, t],
	);
}
const Q = n.forwardRef(function (e, t) {
	const { gameID: r, loader: a, timelineWidth: l } = e;
	const u = (0, o.$O)(r);
	const d = (0, w.useGameRecordingShortcuts)();
	const g = n.useRef(undefined);
	const h = (0, P.Ue)(t, g);
	const C = (0, c.aO)();
	const f = (0, B.$2)();
	const b = f.DesktopOverlay;
	const S = (0, A.q3)(() => C.BPlayerInitialized());
	const v = (0, A.q3)(() => b.overlay_active);
	n.useEffect(() => {
		if (!v && S) {
			C.GetGameRecordingVideo().Pause();
		}
	}, [v, C, S]);
	const [I] = (0, s.VI)("g_background_mode");
	const [E, T] = (0, n.useState)(I == 1);
	(function (e, t) {
		n.useEffect(() => {
			const r = (0, o.Od)(e, t);
			return () => {
				if (r) {
					r();
				}
			};
		}, [e, t]);
	})(r, (e) => {
		if (e.notification_type == 1) {
			T(true);
		}
	});
	const k = (0, A.q3)(() => C.GetHidePlayer());
	n.useEffect(() => {
		b.ChangeTimelineExpansionState(!k);
	}, [b, k]);
	n.useEffect(() => {
		if (I === 1) {
			b.SetFnChangeTimelineExpansion((e) => C.SetHidePlayer(!e));
		}
	}, [b, C, I]);
	const D = (0, o.r6)();
	const N = (0, M.nH)();
	const F = (0, L.Gs)();
	const { rgApps: G } = (0, o.z)();
	const O = n.useMemo(() => {
		const e = G.find(
			(e) => e.is_active && e.recording_type > 1 && e.game_id !== r,
		);
		return e?.game_id;
	}, [G, r]);
	const z = (0, R.SO)(f?.BrowserWindow);
	if ((0, A.q3)(() => z < 800) || !E) {
		if (I === 2) {
			return n.createElement($, {
				gameID: r,
				bShowTimeline: false,
				bLowDiskSpace: D,
				otherRecordingGameID: O,
				bIsBroadcasting: N,
				bIsRemotePlayActive: F,
			});
		} else {
			return n.createElement(ee, {
				gameID: r,
				otherRecordingGameID: O,
				bLowDiskSpace: D,
				bIsBroadcasting: N,
				bIsRemotePlayActive: F,
			});
		}
	}
	let x = {
		width: l,
	};
	return n.createElement(
		_.p,
		null,
		n.createElement(
			p.tB,
			{
				loader: a,
			},
			n.createElement(
				"div",
				{
					className: (0, y.A)(i.GameOverlayPlayer, "GameOverlayPlayer"),
				},
				n.createElement(
					"div",
					{
						style: x,
						className: (0, y.A)(i.TimelineAndControls),
						ref: h,
					},
					n.createElement(
						"div",
						{
							className: i.Timeline,
						},
						n.createElement(m.d8, {
							loader: a,
							clipSummaries: u,
							shortcuts: d,
							refTimelineParentCtn: g,
						}),
					),
					n.createElement(
						"div",
						{
							className: i.MediaButtons,
						},
						n.createElement(ne, {
							gameID: r,
						}),
						n.createElement(
							"div",
							null,
							I === 2
								? n.createElement($, {
										gameID: r,
										bShowTimeline: E,
										otherRecordingGameID: O,
										bLowDiskSpace: D,
										bIsBroadcasting: N,
										bIsRemotePlayActive: F,
									})
								: n.createElement(J, {
										gameID: r,
										otherRecordingGameID: O,
										bLowDiskSpace: D,
										bShowTimeline: E,
										bIsBroadcasting: N,
										bIsRemotePlayActive: F,
									}),
						),
						n.createElement(re, {
							bHidePlayer: k,
						}),
					),
				),
				n.createElement(te, {
					bHidePlayer: k,
				}),
			),
		),
	);
});
function Z(e) {
	const { bShowTimeline: t } = e;
	return n.createElement(
		"div",
		{
			className: (0, y.A)(
				i.RecordingIconsAndState,
				i.LowDiskSpaceWarning,
				t && i.ShowTimeline,
			),
		},
		n.createElement(
			"div",
			{
				className: i.RecordingState,
			},
			(0, b.we)("#RecordingState_ManualRec_LowDiskSpace"),
		),
	);
}
function Y(e) {
	const { bShowTimeline: t } = e;
	return n.createElement(
		N.he,
		{
			direction: "bottom",
			toolTipContent: (0, b.we)("#RecordingState_ActiveRemotePlayTooltip"),
			strTooltipClassname: i.TooltipText,
			className: (0, y.A)(
				i.RecordingIconsAndState,
				i.OtherRecordingButton,
				i.RemotePlay,
				t && i.ShowTimeline,
			),
		},
		(0, b.we)("#RecordingState_ActiveRemotePlay"),
	);
}
function K(e) {
	const { bShowTimeline: t } = e;
	const r = (0, v.br)();
	return n.createElement(
		N.he,
		{
			direction: "bottom",
			toolTipContent: (0, b.we)("#RecordingState_ActiveBroadcastTooltip"),
			className: (0, y.A)(
				i.RecordingIconsAndState,
				i.OtherRecordingButton,
				t && i.ShowTimeline,
			),
			onClick: () => r.Settings("Broadcast"),
		},
		(0, b.we)("#RecordingState_ActiveBroadcast"),
	);
}
function X(e) {
	const {
		gameID: t,
		otherRecordingGameID: r,
		bLowDiskSpace: a,
		bShowTimeline: s,
		bDisableSwitching: l,
		recordingMode: c,
	} = e;
	let m = n.useCallback(() => {
		if (l) {
			return;
		}
		const e = (0, o.Zc)();
		if (e && r) {
			f.y.ReportTrackedAction(`/GameRecording/RecordingSwitch/${r}`);
			e(t);
		}
	}, [r, t, l]);
	if (!r || a) {
		return null;
	} else {
		return n.createElement(
			N.he,
			{
				direction: "bottom",
				bDisabled: l,
				toolTipContent: (0, b.we)(
					"#RecordingState_BackgroundRec_SwitchRecordedGame",
				),
				className: (0, y.A)(
					i.RecordingIconsAndState,
					i.OtherRecordingButton,
					s && i.ShowTimeline,
					l && i.DisableSwitching,
					c === 2 ? i.ManualRecording : i.BackgroundRecording,
				),
				onClick: m,
			},
			n.createElement(
				"div",
				{
					className: i.RecordingState,
				},
				(0, b.PP)(
					"#RecordingState_BackgroundRec_AnotherRecordingGoing",
					n.createElement("div", {
						className: i.RecordingCircle,
					}),
				),
			),
		);
	}
}
function J(e) {
	const {
		gameID: t,
		bShowTimeline: r,
		bLowDiskSpace: i,
		bIsBroadcasting: a,
		otherRecordingGameID: s,
		bIsRemotePlayActive: o,
	} = e;
	if (o) {
		return n.createElement(Y, {
			bShowTimeline: r,
		});
	} else if (a) {
		return n.createElement(K, {
			bShowTimeline: r,
		});
	} else if (s) {
		return n.createElement(X, {
			gameID: t,
			otherRecordingGameID: s,
			bLowDiskSpace: i,
			bShowTimeline: r,
			recordingMode: 1,
			bDisableSwitching: false,
		});
	} else {
		return null;
	}
}
function $(e) {
	const {
		gameID: t,
		bShowTimeline: r,
		bLowDiskSpace: a,
		bIsBroadcasting: s,
		otherRecordingGameID: l,
		bIsRemotePlayActive: m,
	} = e;
	const d = (0, c.aO)();
	const [p, g] = (0, n.useState)();
	const h = (0, B.$2)().DesktopOverlay;
	const C = a || l || s || m;
	n.useEffect(() => {
		if (r) {
			h.SetFnChangeTimelineExpansion((e) => d.SetHidePlayer(!e));
		} else {
			h.ChangeTimelineExpansionState(false);
			h.SetFnChangeTimelineExpansion((e) => {
				g(true);
				window.setTimeout(() => {
					g(false);
				}, 3000);
			});
		}
	}, [h, r, d]);
	const [_] = (0, w.useToggleForegroundRecordingShortcut)();
	const S = (0, A.q3)(() => d.GetRecordingState()) === u.KB.ManualRecording;
	const { fnStartRecording: v, fnStopRecording: I } = (0, o.qq)();
	const E = (0, n.useCallback)(() => {
		if (S) {
			I(t);
			f.y.ReportTrackedAction(
				"/GameRecording/RecordingStop/ManualRecordingButton",
			);
		} else {
			if (C) {
				return;
			}
			{
				v(t);
				const e = d.GetLiveEdgeMS();
				d.FocusGlobalMS(e);
				f.y.ReportTrackedAction(
					"/GameRecording/RecordingStart/ManualRecordingButton",
				);
			}
		}
	}, [C, S, I, t, v, d]);
	if (m) {
		return n.createElement(Y, {
			bShowTimeline: r,
		});
	}
	if (s) {
		return n.createElement(K, {
			bShowTimeline: r,
		});
	}
	if (a) {
		return n.createElement(Z, {
			bShowTimeline: r,
		});
	}
	if (l) {
		return n.createElement(X, {
			gameID: t,
			otherRecordingGameID: l,
			bLowDiskSpace: a,
			bShowTimeline: r,
			recordingMode: 2,
			bDisableSwitching: true,
		});
	}
	let M;
	M = S
		? _?.display_name
			? (0, b.PP)(
					"#RecordingState_ManualRecStopShortName_CTA",
					n.createElement(
						"span",
						{
							className: i.RecordingShortcut,
						},
						_.display_name,
					),
				)
			: (0, b.we)("#RecordingState_ManualRecStop_CTA")
		: _?.display_name
			? (0, b.PP)(
					"#RecordingState_ManualRecStartShortName_CTA",
					n.createElement(
						"span",
						{
							className: i.RecordingShortcut,
						},
						_.display_name,
					),
				)
			: (0, b.we)("#RecordingState_ManualRecStart_CTA");
	return n.createElement(
		"div",
		{
			className: (0, y.A)(
				i.RecordingIconsAndState,
				i.ManualRecording,
				p && i.Flash,
				r && i.ShowTimeline,
				S && i.CurrentlyRecording,
			),
			onClick: E,
		},
		n.createElement(
			"div",
			{
				className: i.RecordingState,
			},
			M,
		),
	);
}
function ee(e) {
	const {
		gameID: t,
		otherRecordingGameID: r,
		bLowDiskSpace: a,
		bIsBroadcasting: s,
		bIsRemotePlayActive: o,
	} = e;
	const l = r ?? t;
	const c = (0, D.xj)("steam://open/recording/" + l);
	let m = n.useCallback(() => {
		if (!a) {
			c();
		}
	}, [c, a]);
	if (o) {
		return n.createElement(Y, {
			bShowTimeline: false,
		});
	} else if (s) {
		return n.createElement(K, {
			bShowTimeline: false,
		});
	} else if (a) {
		return n.createElement(Z, {
			bShowTimeline: false,
		});
	} else if (r) {
		return n.createElement(X, {
			gameID: t,
			otherRecordingGameID: r,
			bLowDiskSpace: a,
			bShowTimeline: false,
			recordingMode: 1,
		});
	} else {
		return n.createElement(
			"div",
			{
				className: (0, y.A)(i.RecordingIconsAndState, i.BackgroundRecording),
				onClick: m,
			},
			n.createElement(
				"div",
				{
					className: i.RecordingState,
				},
				(0, b.PP)(
					"#RecordingState_BackgroundRec_OpenRecording",
					n.createElement("div", {
						className: i.RecordingCircle,
					}),
				),
			),
		);
	}
}
function te(e) {
	const { bHidePlayer: t } = e;
	const r = (0, c.aO)();
	const a = (0, p.qm)();
	const [s, o] = (0, n.useState)(true);
	let l = (0, n.useCallback)(() => {
		r.SetHidePlayer(true);
		a();
	}, [r, a]);
	(0, n.useEffect)(() => {
		if (t) {
			o(true);
		}
	}, [t, o]);
	const m = n.useRef(null);
	if (t) {
		return null;
	}
	let u = {
		appear: i.Appear,
		appearActive: i.AppearActive,
		appearDone: i.AppearDone,
		exit: i.Exit,
		exitActive: i.ExitActive,
		exitDone: i.ExitDone,
	};
	return n.createElement(
		E.A,
		{
			nodeRef: m,
			classNames: u,
			in: s,
			timeout: W,
			appear: true,
			onExited: l,
		},
		n.createElement(
			"div",
			{
				ref: m,
				className: i.GamePlayerContents,
			},
			n.createElement(d.J, {
				positionAbsolute: true,
			}),
		),
	);
}
function re(e) {
	const { bHidePlayer: t } = e;
	const r = (0, c.aO)();
	let s = (0, n.useCallback)(() => {
		if (t) {
			r.SetHidePlayer(false);
			f.y.ReportTrackedAction("/GameRecording/ShowVideo");
		} else {
			r.SetHidePlayer(true);
		}
	}, [t, r]);
	return n.createElement(
		"div",
		{
			className: i.ShowVideoButton,
			onClick: s,
		},
		(0, b.we)(
			t ? "#GameRecording_OverlayShowVideo" : "#GameRecording_OverlayHideVideo",
		),
		n.createElement(a.Chevron, {
			direction: t ? "down" : "up",
		}),
	);
}
function ne(e) {
	const { gameID: t } = e;
	const r = (0, v.br)();
	return n.createElement(
		"div",
		{
			className: i.ViewClipsButton,
			onClick: () => {
				let e = {};
				if (t) {
					e.listSource = {
						type: "app",
						gameid: t,
					};
				}
				r.Media.Grid({
					state: {
						filter: e,
					},
				});
			},
		},
		(0, b.we)("#GameRecording_OverlayViewClips"),
	);
}
