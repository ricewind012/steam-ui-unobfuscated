import {
	GetOwningWindowForEvent,
	BIsParentOrSelf,
	GetOwningWindowForElement,
} from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeRtime32ToShorterDate,
} from "../../actual_src/utils/localization.js";
import { qZ } from "../../actual_src/utils/localization/datetime.js";
import n, {
	useMemo,
	memo,
	useState,
	useCallback,
	useEffect,
	useRef,
	forwardRef,
} from "./63696.js";
import i, { q3 } from "./90095.js";
import a from "./51149.js";
import s, { A as A_1 } from "./90765.js";
import o, { uR } from "./65844.js";
import l from "./16056.js";
import A, { q_ as q_1 } from "./84629.js";
import p from "./34983.js";
import g, { aO, Bl } from "./92374.js";
import _h, { zG, N$, sX, xz, In, eJ } from "./76835.js";
import C from "./96360.js";
import _, { Sb, sK, OB } from "./72061.js";
import f from "./94361.js";
import b, { eJ, qm, Pm, eb, d8, UO, d7, nA, eH, _Z } from "./29516.js";
import w from "./88750.js";
import v, { lX } from "./31084.js";
import I, { f as f_2 } from "./661.js";
import E from "./62178.js";
import M from "./83247.js";
import T from "./35488.js";
import { r6, dd } from "./91720.js";
import k, { vs } from "./30737.js";
import D from "./10606.js";
import N from "./64608.js";
import { pg } from "./13869.js";
import { L2, ww } from "./59005.js";
import Z from "./27856.js";
import J from "./72278.js";
import $, { xS, FV, yR, wJ, gZ, VF, fR } from "./11072.js";
import ee, { OQ } from "./31958.js";
import te from "./3722.js";
import { _g, wY } from "./52451.js";
import ue from "./35225.js";
import { rX } from "./6967.js";
import Ae, { fS } from "./98995.js";
import ge from "./67429.js";
import Le from "./57242.js";
import Xe from "./29935.js";
import et from "./75378.js";
import tt, { wF } from "./34891.js";
import at from "./56102.js";
import lt from "./46568.js";
import ft from "./61657.js";
import bt from "./57774.js";
import yt from "./38203.js";
import Et from "./69538.js";
const c = [1000, 5000, 30000, 60000, 150000, 300000, 900000, 1800000];
const m = n.memo((e) => {
	const t = uR();
	const r = q3(() => t.GetVisibleTimelines());
	return n.createElement(
		n.Fragment,
		null,
		r.map((e) =>
			n.createElement(u, {
				key: e.timelineID,
				msVisibleStart: e.msVisibleStart,
				pxVisibleDuration: e.pxVisibleDuration,
				pxVisibleStart: e.pxVisibleStart,
				msTimelineStart: e.globalOffsetMS,
			}),
		),
	);
});
const u = n.memo((e) => {
	const {
		msVisibleStart: t,
		msTimelineStart: r,
		pxVisibleDuration: a,
		pxVisibleStart: s,
	} = e;
	const { msTickSpacing: m, pxTickSpacing: u } = (() => {
		const e = uR();
		const t = q3(() => e.GetCurrentZoomScale());
		const r = 300;
		const n = (e) => Math.abs(r - e / t);
		const a = c.reduce((e, t) => (n(e) - n(t) < 0 ? e : t)) / 20;
		const s = a / t;
		return {
			msTickSpacing: a,
			pxTickSpacing: s,
		};
	})();
	const A = uR();
	const p = Math.ceil((t - r) / m);
	const g = r + p * m;
	const h = A.ConvertGlobalMSToGlobalPXOffset(g);
	const C = useMemo(() => {
		const e = Math.ceil(a / u);
		const t = [];
		for (let r = 0; r < e; r++) {
			const e = h + r * u;
			const n = `${g + m * r}`;
			t.push({
				key: n,
				offsetPX: e,
				iTimelineRelativeTick: p + r,
			});
		}
		return t;
	}, [a, u, g, m, h, p]);
	if (C) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement("div", {
				className: l.TimelineBacking,
				style: {
					transform: `translateX(${s}px)`,
					width: a,
				},
			}),
			C.map((e) =>
				n.createElement(d, {
					key: e.key,
					timelineRelativeIndex: e.iTimelineRelativeTick,
					globalOffsetPX: e.offsetPX,
				}),
			),
		);
	} else {
		return null;
	}
});
function d(e) {
	const { globalOffsetPX: t, timelineRelativeIndex: r } = e;
	const i = r % 20 == 0 ? l.Major : l.Minor;
	return n.createElement(
		"div",
		{
			className: l.TimeTick,
			style: {
				transform: `translateX(${t}px)`,
			},
		},
		n.createElement("div", {
			className: A_1(l.TickLine, i),
		}),
	);
}
class y {
	m_reservations = [];
	m_nIconWidth;
	constructor(e) {
		this.m_nIconWidth = e;
	}
	BAllowIcon(e) {
		const t = {
			nStart: e - this.m_nIconWidth / 2,
			nEnd: e + this.m_nIconWidth / 2,
		};
		let r = 0;
		for (; r < this.m_reservations.length; r++) {
			const e = this.m_reservations[r];
			if (e.nStart >= t.nEnd) {
				break;
			}
			if (!((n = t).nStart >= (i = e).nEnd) && !(n.nEnd <= i.nStart)) {
				return false;
			}
		}
		var n;
		var i;
		this.m_reservations.splice(r, 0, t);
		return true;
	}
}
function F(e) {
	const {
		closeModal: t,
		strTimelineID: r,
		entry: i,
		playbackCoordinator: a,
		fnClearSelection: s,
	} = e;
	const [o, l] = n.useState(i.title || "");
	const [c, m] = n.useState(i.description || "");
	const u = vs();
	if (u.bLoading) {
		return n.createElement(k.Hh, {
			state: u,
			strDialogTitle: (0, Localize)("#Marker_Dialog"),
			closeModal: t,
		});
	} else {
		return n.createElement(
			D.o0,
			{
				strTitle: (0, Localize)("#Marker_Dialog"),
				strMiddleButtonText: (0, Localize)("#Marker_Action_Delete"),
				onCancel: t,
				onOK: async () => {
					u.fnSetLoading(true);
					if (await a.UpdateUserMarker(r, i, o, c)) {
						t();
					} else {
						u.fnSetError(true);
						u.fnSetStrError((0, Localize)("#Marker_UpdateFailed"));
					}
				},
			},
			n.createElement(N.pd, {
				type: "text",
				value: o,
				onChange: (e) => l(e.currentTarget.value),
				label: (0, Localize)("#Marker_Title"),
			}),
			n.createElement(N.pd, {
				type: "text",
				value: c,
				onChange: (e) => m(e.currentTarget.value),
				label: (0, Localize)("#Marker_Description"),
			}),
		);
	}
}
function P(e) {
	const {
		playbackCoordinator: t,
		timelineView: r,
		markerInfo: a,
		setSelectedMarker: o,
		clearRange: l,
		bLowDiskSpace: c,
		onNavigateToClip: m,
		onNavigateToScreenshot: u,
	} = e;
	const d = q3(() => r.ConvertGlobalMSToClipOrNone(a.nGlobalMS.valMS));
	const A = q3(() =>
		t.ConvertGlobaOffsetToRecordingAndRelativeOffset(a.nGlobalMS.valMS),
	);
	const p = L2(r);
	const g = (e) => {
		let r = L;
		let n = z;
		if (zG(a.entry)) {
			r = 0;
			n = parseInt(a.entry.duration);
		}
		const [i, s] = t
			.GetLoader()
			.CreateGlobalRangeForTimeline(a.strTimelineID, a.nGlobalMS.valMS, r, n);
		t.SetPlaytimeFromGlobalMS(Sb(i));
		o?.(a.entry.id, a.strTimelineID, i, s);
		f.y.ReportTrackedAction(
			"/GameRecording/HighlightCtxMenu/ClipFromHighlight",
		);
		e.stopPropagation();
	};
	const C = () => {
		if (d) {
			f.y.ReportTrackedAction(
				`/GameRecording/MarkerCtxMenu/ViewClip/${a.entry.type}`,
			);
			if (m) {
				m(d.clipID);
			}
		}
	};
	const b = (e) => {
		if (!N$(a.entry)) {
			return;
		}
		f.y.ReportTrackedAction(
			`/GameRecording/HighlightCtxMenu/Marker/Edit/${a.entry.type}`,
		);
		let r = n.createElement(F, {
			entry: a.entry,
			playbackCoordinator: t,
			fnClearSelection: l,
			strTimelineID: a.strTimelineID,
		});
		pg(r, GetOwningWindowForEvent(e));
		e.stopPropagation();
		e.preventDefault();
	};
	const y = (e) => {
		if (N$(a.entry)) {
			f.y.ReportTrackedAction(
				`/GameRecording/HighlightCtxMenu/Marker/Delete/${a.entry.type}`,
			);
			t.RemoveUserMarker(a.strTimelineID, a.entry.id);
		}
	};
	const v = () => {
		if (sX(a.entry) && a.entry?.handle) {
			f.y.ReportTrackedAction("/GameRecording/HighlightCtxMenu/Screenshot");
			u(r.GetGameID(), a.entry.handle);
		}
	};
	let I = [];
	if (N$(a.entry)) {
		I.push(
			n.createElement(
				w.kt,
				{
					key: "edit",
					onSelected: b,
					className: E.HighlightContextMenuItem,
				},
				n.createElement(
					"div",
					{
						className: A_1(E.MenuItem, E.EditMarker),
					},
					n.createElement(M.ff, null),
					(0, Localize)("#Marker_Action_Edit"),
				),
			),
		);
	}
	if (A?.strRecordingID && !c) {
		I.push(
			n.createElement(
				w.kt,
				{
					key: "clip",
					onSelected: g,
					className: E.HighlightContextMenuItem,
				},
				n.createElement(
					"div",
					{
						className: A_1(E.MenuItem, E.CreateClip),
					},
					n.createElement(M.Wd, null),
					(0, Localize)("#TimelineDialog_ClipVideo"),
				),
			),
		);
	}
	if (N$(a.entry)) {
		I.push(
			n.createElement(
				w.kt,
				{
					key: "delete",
					onSelected: y,
					className: E.HighlightContextMenuItem,
				},
				n.createElement(
					"div",
					{
						className: A_1(E.MenuItem, E.DeleteMarker),
					},
					n.createElement(T.Trash, null),
					(0, Localize)("#Marker_Action_Delete"),
				),
			),
		);
	}
	if (sX(a.entry)) {
		I.push(
			n.createElement(
				w.kt,
				{
					key: "view_screenshot",
					onSelected: v,
					className: E.HighlightContextMenuItem,
				},
				n.createElement(
					"div",
					{
						className: A_1(E.MenuItem, E.ViewScreenshot),
					},
					n.createElement(M.pw, null),
					(0, Localize)("#TimelineDialog_ViewScreenshot"),
				),
			),
		);
	}
	if (d && C) {
		I.push(
			n.createElement(
				w.kt,
				{
					key: "view_clip",
					onSelected: C,
					className: E.HighlightContextMenuItem,
				},
				n.createElement(
					"div",
					{
						className: A_1(E.MenuItem, E.ViewClip),
					},
					n.createElement(M.ai, null),
					(0, Localize)("#TimelineDialog_ViewClip"),
				),
			),
		);
	}
	if (I.length) {
		return n.createElement(
			w.tz,
			{
				refInstance: p,
			},
			I,
		);
	} else {
		return null;
	}
}
const L = 5000;
const z = 3000;
function x(e) {
	const {
		markerInfo: t,
		view: r,
		coordinator: a,
		gameID: l,
		clipID: c,
		timelineID: m,
		faded: u,
	} = e;
	const d = t.nGlobalMS;
	const A = q3(() => r.ConvertGlobalMSToGlobalPXOffset(d.valMS));
	const h = q3(() => {
		const e = r.GetThumbnailComponent();
		return e && e !== o.Jv.Highlight;
	});
	const y = (() => {
		const e = uR();
		const t = aO();
		const { setSelectedMarker: r } = eJ();
		const a = qm();
		const { onNavigateToClip: s, onNavigateToScreenshot: l } = f_2();
		const c = r6();
		const m = q3(() => !t.ShouldModeShowClipControls());
		return n.useCallback(
			(i, o, u) => {
				if (m) {
					return;
				}
				const d = n.createElement(P, {
					markerInfo: o,
					playbackCoordinator: t,
					timelineView: e,
					setSelectedMarker: r,
					onNavigateToClip: s,
					onNavigateToScreenshot: l,
					bLowDiskSpace: c,
					clearRange: a,
				});
				lX(d, i, u);
			},
			[m, c, t, e, r, s, l, a],
		);
	})();
	const { selectedMarker: w } = eJ();
	const B = t.entry?.id == w?.strEntryID && t.strTimelineID == w?.strTimelineID;
	const { ref: E, ...M } = ((e, t) => {
		const r = n.useRef();
		const i = n.useRef();
		const a = n.useCallback(
			(t) => {
				if (!r.current) {
					return;
				}
				const n = r.current.getBoundingClientRect();
				if (t.clientY >= n.top && t.clientY <= n.bottom) {
					if (n.left - t.clientX > 1 || t.clientX - n.right > 1) {
						e.SetThumbnailComponent(null);
						if (i.current) {
							i.current();
						}
						i.current = null;
						return;
					} else {
						return undefined;
					}
				}
				const a = n.left + n.width * 0.5;
				if (t.clientX < a - U || t.clientX > a + U) {
					e.SetThumbnailComponent(null);
					if (i.current) {
						i.current();
					}
					i.current = null;
				}
			},
			[e],
		);
		const s = n.useCallback(
			(r) => {
				e.SetThumbnailComponent(o.Jv.Highlight);
				e.SetThumbnailEntry(t);
				if (!i.current) {
					const e = GetOwningWindowForEvent(r);
					e.addEventListener("mousemove", a);
					i.current = () => e.removeEventListener("mousemove", a);
				}
				r.stopPropagation();
			},
			[a, t, e],
		);
		const l = n.useCallback(
			(t) => {
				const n = r.current.getBoundingClientRect();
				const a = n.left;
				const s = n.right;
				if (t.clientX - a < 1 || s - t.clientX < 1) {
					e.SetThumbnailComponent(null);
					if (i.current) {
						i.current();
					}
					i.current = null;
					return;
				}
				if (!BIsParentOrSelf(r.current, t.relatedTarget)) {
					if (
						t.clientY - n.top > 1 &&
						n.bottom - t.clientY > 1 &&
						t.clientX - n.left > 1 &&
						n.right - t.clientX > 1
					) {
						e.SetThumbnailComponent(null);
						if (i.current) {
							i.current();
						}
						i.current = null;
					}
				}
				t.stopPropagation();
			},
			[e],
		);
		n.useEffect(() => () => i.current && i.current(), []);
		return {
			ref: r,
			onMouseOver: s,
			onMouseLeave: l,
		};
	})(r, t);
	const T = n.useCallback(
		(e) => {
			const n = d.valMS - 5000;
			const i = r.FindTimelineOffsets(m);
			const s = Math.max(n, i.globalOffsetMS);
			a.SetPlaytimeFromGlobalMS(Sb(s));
			a.SetDisplayHighlightEntry(t.entry);
			e.stopPropagation();
			f.y.ReportTrackedAction(`/GameRecording/Marker/Click/${t.entry.type}`);
		},
		[a, d.valMS, m, r, t],
	);
	const k = {
		transform: `translateX( calc( ${A}px - 50% ))`,
	};
	return n.createElement(
		"div",
		{
			className: A_1(p.MarkerAndDropline, h && p.NoPointer, u && p.Faded),
			style: k,
			ref: E,
			onContextMenu: (e) => {
				y(e, t, {
					bDisableMouseOverlay: true,
					bForcePopup: true,
					bAlwaysOnTop: true,
				});
				e.stopPropagation();
			},
			...M,
		},
		n.createElement(
			"div",
			{
				key: d.valMS,
				className: A_1(p.TimelineMarkerCtn),
			},
			n.createElement(C.Wo, {
				classNames: p.TimelineMarker,
				key: t.entry.id,
				entry: t.entry,
				strMarkerIcon: t.strMarkerIcon,
				faded: u,
				onClick: T,
				bSelectedMarker: B,
			}),
		),
		n.createElement(
			"div",
			{
				className: p.DroplineCtn,
			},
			n.createElement("div", {
				className: A_1(p.TimelineMarkerDropLine),
			}),
		),
	);
}
const U = 150;
function W(e) {
	if (e.type === "achievement") {
		return 9000;
	} else {
		return e.priority;
	}
}
const V = n.memo((e) => {
	const t = uR();
	const r = q3(() => t.GetVisibleTimelines());
	return n.createElement(
		n.Fragment,
		null,
		r.map((e) =>
			n.createElement(q, {
				key: e.timelineID,
				timeline: e,
			}),
		),
	);
});
const H = {
	screenshot: 0,
	event: 0,
	achievement: 1,
	usermarker: 2,
};
function j(e, t) {
	if (H[e.type] !== H[t.type]) {
		return H[t.type] - H[e.type];
	}
	const r = W(e);
	const n = W(t);
	if (r != n) {
		return n - r;
	} else if (e.time != t.time) {
		return parseInt(e.time) - parseInt(t.time);
	} else {
		return e.id.localeCompare(t.id);
	}
}
const q = n.memo((e) => {
	const { timeline: t } = e;
	const r = uR();
	const a = aO();
	const s = q3(() => r.GetVisibleTimelineHighlights(t.timelineID) || [])
		.slice()
		.sort(j);
	const l = q3(() => r.GetTimelineOffsetMS(t.timelineID));
	const c = t.globalOffsetMS - l;
	const m = a.GetGameID();
	const u = a.GetClipID();
	const d = r.GetCurrentZoomScale() * 16;
	let p = new y(d);
	return s.map((e, i) => {
		if (_Q(e) !== "highlight") {
			return null;
		}
		const s = `${e.type}_${e.id}_${t.timelineID}_${i}`;
		const o = ((e, t, r) => {
			if (
				!["event", "usermarker", "screenshot", "achievement", "error"].includes(
					r.type,
				)
			) {
				q_1(
					`Unexpected timeline entry type ${r.type}, returning empty highlight marker`,
				);
				return null;
			}
			let n = r;
			const i = xz(n);
			const a = {
				entry: n,
				strMarkerIcon: i ? "steam_achievement" : n.icon,
				nMarkerPriority: W(n),
				strTimelineID: e,
				strTitle: (!i && n.title) || "",
				strDescription: (!i && n.description) || "",
				nGlobalMS: Sb(parseInt(n.time) + t),
			};
			return a;
		})(t.timelineID, c, e);
		const l = p.BAllowIcon(o.nGlobalMS.valMS);
		return n.createElement(x, {
			gameID: m,
			clipID: u,
			key: s,
			view: r,
			coordinator: a,
			faded: !l,
			timelineID: t.timelineID,
			markerInfo: o,
		});
	});
});
function _Q(e) {
	switch (e.type) {
		case "usermarker":
		case "achievement":
		case "screenshot":
		case "error": {
			return "highlight";
		}
		case "event": {
			if (parseInt(e.duration) > 0) {
				return "range_highlight";
			} else {
				return "highlight";
			}
		}
		default: {
			return "none";
		}
	}
}
function Y(e) {
	const { view: t, entry: r, nGlobalEntryEndMS: a, nGlobalTLStartMS: o } = e;
	const l = aO();
	const c = Sb(parseInt(r.time) + o.valMS);
	const m = q3(() => {
		const e = t.ConvertGlobalMSToGlobalPXOffset(c.valMS);
		const r = t.GetVirtualWindowStartPX();
		if (r < e) {
			return e;
		} else {
			return r;
		}
	});
	const u = q3(() => {
		const e = t.ConvertGlobalMSToGlobalPXOffset(a.valMS);
		const r = t.GetVirtualWindowEndPX();
		if (r < e) {
			return r;
		} else {
			return e;
		}
	});
	const d = !!l.GetClipID();
	const A = {
		transform: `translateX( ${m}px )`,
		width: u - m,
	};
	const p = A_1({
		[Z.Unspecified]: r.mode === _h.il.Invalid,
		[Z.Staging]: r.mode === _h.il.Staging,
		[Z.Menus]: r.mode === _h.il.Menus,
		[Z.Playing]: r.mode === _h.il.Playing,
	});
	return n.createElement("div", {
		key: r.id,
		className: A_1(Z.GameModeMarker, p, d && Z.GameModeMarkerClip),
		style: A,
	});
}
const K = n.memo((e) => {
	const t = uR();
	const r = q3(() => t.GetVisibleTimelines());
	return n.createElement(
		n.Fragment,
		null,
		r.map((e) =>
			n.createElement(X, {
				key: e.timelineID,
				timeline: e,
			}),
		),
	);
});
const X = n.memo((e) => {
	const { timelineID: t, globalOffsetMS: r, nDurationMS: a } = e.timeline;
	const s = uR();
	const l = q3(() => {
		const e = s.GetVisibleTimelineGameModes(t);
		if (e && e.length !== 0) {
			return e;
		} else {
			return [
				{
					time: "0",
					type: "gamemode",
					mode: _h.il.Invalid,
					id: "synthetic",
				},
			];
		}
	});
	const c = Sb(r + a);
	const m = r - s.GetTimelineOffsetMS(t);
	let u = [];
	for (let e = 0; e < l.length; e++) {
		const r = Sb(e < l.length - 1 ? parseInt(l[e + 1].time) + m : c.valMS - 1);
		u.push(
			n.createElement(Y, {
				key: `gameMode_${t}_${e}`,
				view: s,
				entry: l[e],
				nGlobalEntryEndMS: r,
				nGlobalTLStartMS: Sb(m),
			}),
		);
	}
	return n.createElement(n.Fragment, null, u);
});
const ne = memo((e) => {
	const t = aO();
	const r = q3(() => t.GetHidePlayer());
	const [a, s] = useState({
		bDragActive: false,
		bPausedOnDragStart: false,
	});
	const l = uR();
	const c = q3(() => {
		if (
			l.GetAutoScrollPaused() ||
			l.BReachedMaxScroll() ||
			l.BReachedMaxScroll() ||
			l.BReachedMinScroll() ||
			l.BReachedMaxScroll() ||
			l.BReachedMinScroll() ||
			t.BIsVideoElementPaused()
		) {
			return false;
		}
		const e = t.GetGlobalMSPlaytime();
		return (
			l.ConvertGlobalMSToGlobalPXOffset(e.valMS) <
			l.GetMaxScrollLeftPX() + l.GetScrollWindowWidth() * 0.5
		);
	});
	if (r) {
		return n.createElement(ae, {
			setDragActive: s,
		});
	} else if (c) {
		return n.createElement(ie, {
			view: l,
			setDragActive: s,
		});
	} else {
		return n.createElement(se, {
			dragState: a,
			setDragActive: s,
		});
	}
});
function ie(e) {
	const { view: t, setDragActive: r } = e;
	const a = q3(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
	return n.createElement(
		me,
		{
			playheadPosition: a,
		},
		n.createElement(oe, {
			setDragActive: r,
			bDragActive: false,
		}),
	);
}
const ae = memo((e) => {
	const { setDragActive: t } = e;
	const r = uR();
	const a = q3(() => r.GetScrollableWidthPX());
	const s = _g(100);
	const l = useCallback(
		(e) => {
			if (!r.GetAutoScrollPaused()) {
				s(() => r.ScrollToOffset(e));
			}
		},
		[s, r],
	);
	useEffect(() => r.ScrollToEnd(), [r]);
	useEffect(() => l(a), [a, l]);
	return n.createElement(
		me,
		{
			playheadPosition: a,
		},
		n.createElement(oe, {
			setDragActive: t,
			bDragActive: false,
		}),
	);
});
const se = memo((e) => {
	const { dragState: t, setDragActive: r } = e;
	const { bDragActive: a, bPausedOnDragStart: l } = t;
	const c = aO();
	const m = uR();
	const u = xS();
	const d = ((e, t, r, a, s) => {
		const o = useRef();
		const l = q3(() => t.GetScrollableWidthPX());
		const c = q3(() => t.GetScrollWindowWidth());
		const [m, u] = useState(0);
		const d = useRef();
		const A = useRef();
		const { clearPlaybackAnimation: p, startPlaybackAnimation: g } = ((
			e,
			t,
			r,
		) => {
			const i = useRef();
			const a = e.GetGameRecordingVideo();
			const s = useRef();
			const o = useRef();
			const l = useRef();
			const c = useRef();
			const m = useCallback(() => {
				if (!i.current) {
					return;
				}
				const n = e.GetGlobalMSPlaytime();
				if (n.valMS >= 0) {
					const e = a.BVideoElementPlaying();
					const i = a.GetVideoElementCurrentTime();
					const m = t.GetScrollableWidthPX();
					const u = t.GetCurrentZoomScale();
					if (s.current !== n.valMS || (c.current && c.current != u)) {
						const e = t.ConvertGlobalMSToGlobalPXOffset(n.valMS);
						const i = Math.min(m, e);
						r(i);
						l.current = i;
					} else if (
						s.current &&
						s.current === n.valMS &&
						i &&
						o.current &&
						o.current !== i &&
						e
					) {
						const e = s.current + (i - o.current) * 1000;
						const n = t.ConvertGlobalMSToGlobalPXOffset(e);
						if (l.current && l.current < n) {
							const e = Math.min(m, n);
							r(e);
						}
						l.current = n;
					}
					if (!e) {
						o.current = null;
						s.current = n.valMS;
					}
					if (e && s.current !== n.valMS) {
						o.current = i;
						s.current = n.valMS;
					}
					c.current = u;
				}
				i.current = requestAnimationFrame(m);
			}, [e, r, t, a]);
			const u = useCallback(() => {
				if (i.current) {
					cancelAnimationFrame(i.current);
				}
				i.current = null;
				s.current = null;
				o.current = null;
				l.current = null;
			}, []);
			const d = useCallback(() => {
				i.current ||= requestAnimationFrame(m);
			}, [m]);
			return {
				clearPlaybackAnimation: u,
				startPlaybackAnimation: d,
			};
		})(s, t, u);
		useEffect(
			() => () => {
				if (d.current) {
					cancelAnimationFrame(d.current);
					d.current = null;
					A.current = null;
				}
				p();
			},
			[p],
		);
		const h = n.useCallback(
			(e, t, r, n, i) => {
				if (i(t)) {
					u(OQ(t.GetVisualWindowStartPX() + r, 0, t.GetScrollableWidthPX()));
					cancelAnimationFrame(d.current);
					d.current = null;
					A.current = null;
				} else {
					d.current &&= requestAnimationFrame((e) => h(e, t, r, n, i));
					if (A.current) {
						const r = ((e - A.current) / 500) * n;
						t.ScrollBy(r);
						u((e) => OQ(e + r, 0, t.GetScrollableWidthPX()));
					}
					A.current = e;
				}
			},
			[u],
		);
		useEffect(() => {
			const n = c * (1 - Q);
			const i = c * Q;
			if (d.current) {
				cancelAnimationFrame(d.current);
				d.current = null;
				A.current = null;
			}
			if (r) {
				p();
				if (e.valPX < i && !t.BReachedMinScroll()) {
					if (e.valPX <= o.current) {
						const r = e.valPX - i;
						const n = OQ(Math.abs(r / i), 0, 1) * r;
						d.current = requestAnimationFrame((r) =>
							h(r, t, e.valPX, n, t.BReachedMinScroll),
						);
					}
					o.current = e.valPX;
				} else if (e.valPX > n && !t.BReachedMaxScroll()) {
					if (e.valPX >= o.current) {
						const r = e.valPX - n;
						const i = OQ(Math.abs(r / (c - n)), 0, 1) * r;
						d.current = requestAnimationFrame((r) =>
							h(r, t, e.valPX, i, t.BReachedMaxScroll),
						);
					}
					o.current = e.valPX;
				} else {
					u(OQ(a.valPX, 0, l));
				}
			} else {
				g();
			}
		}, [r, p, a.valPX, c, l, h, e.valPX, g, t]);
		return m;
	})(FV(), m, a, u, c);
	useEffect(() => {
		if (!a) {
			return;
		}
		m.SetThumbnailPosition(d);
		const e = m.ConvertPXOffsetToGlobalMS(d, false);
		if (!e) {
			return;
		}
		const t = c.GetLiveEdgeMS();
		c.SetPlaytimeFromGlobalMS(t.valMS < e ? t : Sb(e), l, true, true);
	}, [d, l, a, c, m]);
	return n.createElement(
		"div",
		{
			className: A_1(te.PlayheadInteractionCtn, a && te.ActiveCtn),
		},
		n.createElement(
			me,
			{
				className: a ? te.Active : undefined,
				playheadPosition: d,
			},
			n.createElement(oe, {
				setDragActive: r,
				bDragActive: a,
			}),
		),
	);
});
const oe = memo((e) => {
	const { setDragActive: t, bDragActive: r } = e;
	const i = uR();
	const a = (e) => {
		if (!r) {
			i.SetThumbnailComponent(o.Jv.Playhead);
		}
		e.stopPropagation();
	};
	const s = (e) => {
		if (!r) {
			i.SetThumbnailComponent(null);
		}
		e.stopPropagation();
	};
	return n.createElement(
		"div",
		{
			className: te.PlayHeadContent,
			onMouseOver: a,
			onMouseOut: s,
			onFocus: a,
			onBlur: s,
		},
		n.createElement(le, {
			setDragActive: t,
		}),
	);
});
const le = n.memo((e) => {
	const { setDragActive: t } = e;
	const r = aO();
	const a = ww();
	const l = uR();
	const c = q3(() => {
		const e = l.GetThumbnailComponent();
		return e === o.Jv.RangeLeft || e === o.Jv.RangeRight;
	});
	const m = useCallback(
		(e) => {
			if (e.button != 0) {
				return;
			}
			const n = GetOwningWindowForEvent(e);
			let i;
			let a;
			const s = () => {
				const e = r.GetGameRecordingVideo().IsPaused();
				t({
					bDragActive: true,
					bPausedOnDragStart: e,
				});
				l.SetThumbnailComponent(o.Jv.Playhead);
				i();
			};
			n.addEventListener("mousemove", s);
			i = () => n.removeEventListener("mousemove", s);
			const c = () => {
				t({
					bDragActive: false,
					bPausedOnDragStart: false,
				});
				l.SetThumbnailComponent(null);
				i();
				a();
			};
			n.addEventListener("mouseup", c);
			a = () => n.removeEventListener("mouseup", c);
		},
		[r, t, l],
	);
	const u = useCallback(
		(e) => {
			const t = r.GetGlobalMSPlaytime();
			a(e, t, true, {
				bDisableMouseOverlay: true,
				bForcePopup: true,
				bAlwaysOnTop: true,
			});
			e.stopPropagation();
			e.preventDefault();
		},
		[r, a],
	);
	return n.createElement(
		"div",
		{
			className: A_1(te.PlayHead, c && te.NoPointer),
			onMouseDown: m,
			onContextMenu: u,
		},
		n.createElement(ce, null),
	);
});
function ce(e) {
	return n.createElement(
		"svg",
		{
			...e,
			width: "12",
			height: "32",
			viewBox: "0 0 12 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		n.createElement("rect", {
			x: "5",
			y: "4",
			width: "2",
			height: "40",
			fill: "currentColor",
		}),
		n.createElement("path", {
			d: "M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z",
			fill: "currentColor",
		}),
	);
}
function me(e) {
	const { className: t, playheadPosition: r, children: i } = e;
	return n.createElement(
		"div",
		{
			className: A_1(te.PlayHeadContainer, t),
			style: {
				transform: `translateX( calc(${r}px - 50% ))`,
			},
		},
		i,
	);
}
const he = parseInt(ue.thumbnailWidth);
const Ce = n.forwardRef((e, t) => {
	const { globalMS: r, children: a, imgClassName: o, className: l, ...c } = e;
	const m = aO();
	const u = m.GetGameID();
	const d = m.GetClipID();
	const A = q3(() => m.GetRecordingMode());
	const p = q3(() => m.ConvertGlobaOffsetToRecordingAndRelativeOffset(r));
	Pm();
	const h = p?.nRecordingOffsetMS;
	const C = rX(u, d, p?.strRecordingID, h, p?.nStartOffsetMS, he, false);
	const [_, f] = useState();
	useEffect(() => {
		if (C) {
			f(C);
		}
	}, [C]);
	return n.createElement(
		"div",
		{
			ref: t,
			className: A_1(ue.ThumbnailContainerOffset, ue[A], l),
			...c,
		},
		n.createElement(
			"div",
			{
				className: A_1(
					ue.ThumbnailContents,
					p?.strRecordingID && !_ && ue.Hide,
					ue[A],
				),
			},
			n.createElement(
				"div",
				{
					className: ue.ImageAndInfoBoxContainer,
				},
				n.createElement(
					"div",
					{
						className: ue.ImageContainer,
					},
					p?.strRecordingID
						? n.createElement("img", {
								className: ue.ThumbnailImage,
								src: _,
							})
						: n.createElement(
								"div",
								{
									className: ue.NoRecordedContent,
								},
								(0, Localize)("#GameRecording_PlayerNoContent"),
							),
					n.createElement(_e, null),
				),
			),
			n.createElement(
				"div",
				{
					className: A_1(ue.TooltipChildren),
				},
				a,
			),
		),
		n.createElement("div", {
			className: A_1(ue.ThumbnailHitBoxPadding),
		}),
	);
});
function _e() {
	const e = uR();
	const t = q3(() => e.GetGameID());
	const r = q3(() => e.GetThumbnailComponent());
	const a = q3(() => e.GetThumbnailEntry());
	if (!a || r !== o.Jv.Highlight) {
		return null;
	}
	if (xz(a.entry)) {
		return n.createElement(fe, {
			thumbnailEntry: a,
			achievementEntry: a.entry,
			strGameID: t,
		});
	}
	let s = "";
	let l = "";
	if (In(a.entry)) {
		l = (0, Localize)(a.entry.description) || "#GameRecording_UnknownError";
	} else if (N$(a.entry)) {
		s = a.entry.title
			? a.entry.title
			: (0, Localize)("#Marker_UserMarker_Title");
		l = a.entry.description || "";
	} else if (eJ(a.entry)) {
		s = a.entry.title || "";
		l = a.entry.description || "";
	}
	if (s || l) {
		return n.createElement(be, {
			title: s,
			description: l,
			thumbnailEntry: a,
		});
	} else {
		return null;
	}
}
function fe(e) {
	const { strGameID: t, thumbnailEntry: r, achievementEntry: i } = e;
	const a = new ge.VS(t);
	const s = dd(a.GetAppID(), i.achievement_name);
	if (s) {
		return n.createElement(be, {
			title: s.name ?? "",
			description: s.description ?? "",
			thumbnailEntry: r,
		});
	} else {
		return null;
	}
}
function be(e) {
	const { title: t, description: r, thumbnailEntry: i } = e;
	return n.createElement(
		"div",
		{
			className: ue.InfoBoxContainer,
		},
		n.createElement(
			"div",
			{
				className: ue.Header,
			},
			n.createElement(
				"div",
				{
					className: ue.Icon,
				},
				n.createElement(C.Zo, {
					entry: i.entry,
					strMarkerIcon: i.strMarkerIcon,
				}),
			),
			t &&
				n.createElement(
					"div",
					{
						className: ue.Title,
					},
					t,
				),
		),
		n.createElement(
			"div",
			{
				className: ue.DescriptionBlock,
			},
			r &&
				n.createElement(
					"div",
					{
						className: ue.Description,
					},
					r,
				),
		),
	);
}
const ye = n.forwardRef((e, t) => {
	const { globalPX: r, onMouseEnter: a, onMouseLeave: l } = e;
	const c = uR();
	const m = q3(() => c.ConvertPXOffsetToGlobalMS(r, false));
	const u = q3(() => c.GetThumbnailComponent());
	const d = aO();
	const A = q3(() => d.GetRecordingMode());
	return n.createElement(
		Ce,
		{
			className: A_1(ue.ThumbnailTooltip, ue[A], ue[u]),
			globalMS: m,
			ref: t,
			onMouseEnter: a,
			onMouseLeave: l,
		},
		n.createElement(Be, {
			globalMS: m,
		}),
		n.createElement(Se, {
			globalMS: m,
		}),
		n.createElement(
			"div",
			{
				className: ue.TooltipInteractionRegion,
			},
			u === o.Jv.Highlight
				? n.createElement(ve, null)
				: n.createElement(Ie, {
						globalPX: r,
					}),
			n.createElement(Ee, {
				globalMS: m,
			}),
		),
	);
});
function Se(e) {
	const { globalMS: t } = e;
	const r = uR();
	const a = q3(() => r.GetStateDescriptionAtGlobalMS(t));
	if (a?.title) {
		return n.createElement(
			"div",
			{
				className: ue.StateDescription,
			},
			a.title,
		);
	} else {
		return null;
	}
}
function we(e, t) {
	return e.priority - t.priority;
}
function Be(e) {
	const { globalMS: t } = e;
	const { setSelectedMarker: r } = eJ();
	const a = uR();
	const s = aO();
	const l = q3(() => a.FindRangeEventsAtGlobalMS(t));
	const c = l.length > 3 ? l.sort(we).slice(0, 3) : l;
	return n.createElement(
		n.Fragment,
		null,
		c.map((e, i) =>
			n.createElement(
				"div",
				{
					key: `${e.time}_${i}`,
					className: ue.TooltipRangeContainer,
					onClick: (n) =>
						((e, n) => {
							const i = parseInt(n.duration);
							const { nTimelineOffsetMS: a, strTimelineID: o } =
								s.ConvertGlobalOffsetToTimelineRelativeOffset(t);
							const l = t - a.valMS + parseInt(n.time);
							const [c, m] = s
								.GetLoader()
								.CreateGlobalRangeForTimeline(o, l, 0, i);
							s.SetPlaytimeFromGlobalMS(Sb(c));
							r?.(n.id, o, c, m);
							f.y.ReportTrackedAction(
								"/GameRecording/Tooltip/ClipFromRangeEvent",
							);
							e.stopPropagation();
						})(n, e),
				},
				e.icon &&
					n.createElement(C.XR, {
						gameID: s.GetGameID(),
						icon: e.icon,
						className: ue.RangeIcon,
					}),
				n.createElement(
					"div",
					{
						className: ue.Title,
					},
					e.title,
				),
				n.createElement(
					"div",
					{
						className: ue.Duration,
					},
					(0, qZ)(parseInt(e.duration) / 1000, false),
				),
			),
		),
	);
}
function ve() {
	const e = aO();
	const t = q3(() => e.GetRecordingMode());
	const r = uR();
	const a = q3(() => r.GetThumbnailEntry());
	if (!a) {
		return null;
	}
	const l = r.GetTimelineOffsetMS(a.strTimelineID);
	const c = parseInt(a.entry.time);
	const m = sK(c - l);
	const u = e.MakeRelativeToTimelineEndIfActive(a.strTimelineID, m.valMS);
	let d = "";
	if (zG(a.entry)) {
		const e = u + parseInt(a.entry.duration);
		if (u < 0) {
			const t = (0, qZ)(Math.abs(u / 1000), false, false);
			const r = (0, qZ)(Math.abs(e / 1000), false, false);
			d = (0, Localize)("#Duration_WrittenNegation", `${t} - ${r}`);
		} else {
			d = `${(0, qZ)(u / 1000, false, false)} - ${(0, qZ)(
				e / 1000,
				false,
				false,
			)}`;
		}
	} else {
		d = (0, qZ)(u / 1000, false, true);
	}
	return n.createElement(
		"div",
		{
			className: A_1(ue.TimeDisplayContainer, ue.Highlight, ue[t]),
		},
		d,
	);
}
function Ie(e) {
	const { globalPX: t } = e;
	const r = uR();
	const a = q3(() => r.ConvertPXToTimelineRelativeMS(t, "end-if-active"));
	if (Boolean(a)) {
		return n.createElement(
			"div",
			{
				className: ue.TimeDisplayContainer,
			},
			(0, qZ)(a / 1000, false, true),
		);
	} else {
		return null;
	}
}
function Ee(e) {
	const { globalMS: t } = e;
	const r = uR();
	const a = q3(() => r.GetGameID());
	const s = q3(() => r.GetThumbnailComponent());
	const l = q3(() => r.GetThumbnailEntry());
	let c = [
		n.createElement(Ne, {
			key: "add_marker",
			globalMS: t,
		}),
		n.createElement(Fe, {
			key: "view_clip",
			globalMS: t,
		}),
	];
	if (s == o.Jv.Highlight && l) {
		if (In(l.entry) || xz(l.entry) || xz(l.entry) || eJ(l.entry)) {
			c = [
				n.createElement(Me, {
					key: "create_marker_clip",
					markerInfo: l,
				}),
				n.createElement(Te, {
					key: "view_clip",
					markerInfo: l,
				}),
			];
		} else if (sX(l.entry)) {
			c = [
				n.createElement(Me, {
					key: "create_marker_clip",
					markerInfo: l,
				}),
				n.createElement(De, {
					key: "view_screen",
					entry: l.entry,
					gameID: a,
				}),
				n.createElement(Te, {
					key: "view_clip",
					markerInfo: l,
				}),
			];
		} else if (N$(l.entry)) {
			c = [
				n.createElement(ke, {
					key: "edit_user",
					markerInfo: l,
				}),
				n.createElement(Me, {
					key: "create_marker_clip",
					markerInfo: l,
				}),
				n.createElement(Re, {
					key: "delete_user",
					markerInfo: l,
				}),
				n.createElement(Te, {
					key: "view_clip",
					markerInfo: l,
				}),
			];
		}
	}
	return n.createElement(
		"div",
		{
			className: ue.TooltipButtons,
		},
		c,
	);
}
function Me(e) {
	const { setSelectedMarker: t } = eJ();
	const { markerInfo: r } = e;
	const a = aO();
	const o = q3(() => a.ShouldModeShowClipControls());
	const l = q3(() =>
		a.ConvertGlobaOffsetToRecordingAndRelativeOffset(r.nGlobalMS.valMS),
	);
	const c = r6();
	const m = eb();
	if (l?.strRecordingID && o) {
		return n.createElement(
			Ae.he,
			{
				toolTipContent: (0, Localize)(
					c ? "#RecordingState_Clip_LowDiskSpace" : "#TimelineDialog_ClipVideo",
				),
				direction: "top",
				bTopmost: true,
			},
			n.createElement(
				"div",
				{
					className: A_1(ue.Button, ue.CreateClipButton),
					onClick: (e) => {
						let n = L;
						let i = z;
						if (zG(r.entry)) {
							n = 0;
							i = parseInt(r.entry.duration);
						}
						const [s, o] = a
							.GetLoader()
							.CreateGlobalRangeForTimeline(
								r.strTimelineID,
								r.nGlobalMS.valMS,
								n,
								i,
							);
						a.SetPlaytimeFromGlobalMS(Sb(s));
						t?.(r.entry.id, r.strTimelineID, s, o);
						m();
						f.y.ReportTrackedAction("/GameRecording/Tooltip/ClipFromHighlight");
						e.stopPropagation();
					},
				},
				n.createElement(M.Wd, null),
			),
		);
	} else {
		return null;
	}
}
function Te(e) {
	const { markerInfo: t } = e;
	const r = uR();
	const a = q3(() => r.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS));
	const { onNavigateToClip: l } = f_2();
	if (a) {
		return n.createElement(
			Ae.he,
			{
				toolTipContent: (0, Localize)("#TimelineDialog_ViewClip"),
				direction: "top",
				bTopmost: true,
			},
			n.createElement(
				"div",
				{
					className: A_1(ue.Button, ue.GoToClipFromMarker),
					onClick: () => {
						if (a) {
							f.y.ReportTrackedAction(
								`/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
							);
							l(a.clipID);
						}
					},
				},
				n.createElement(T.Video, null),
			),
		);
	} else {
		return null;
	}
}
function Re(e) {
	const { markerInfo: t } = e;
	const r = aO();
	const i = uR();
	return n.createElement(
		Ae.he,
		{
			toolTipContent: (0, Localize)("#Marker_Action_Delete"),
			direction: "top",
			bTopmost: true,
		},
		n.createElement(
			"div",
			{
				className: A_1(ue.Button, ue.DeleteMarker),
				onClick: (e) => {
					if (N$(t.entry)) {
						f.y.ReportTrackedAction(
							`/GameRecording/Marker/Delete/${t.entry.type}`,
						);
						r.RemoveUserMarker(t.strTimelineID, t.entry.id);
						i.SetThumbnailComponent(null);
					}
				},
			},
			n.createElement(T.Trash, null),
		),
	);
}
function ke(e) {
	const { markerInfo: t } = e;
	const r = aO();
	const i = qm();
	return n.createElement(
		Ae.he,
		{
			toolTipContent: (0, Localize)("#Marker_Action_Edit"),
			direction: "top",
			bTopmost: true,
		},
		n.createElement(
			"div",
			{
				className: A_1(ue.Button, ue.EditMarker),
				onClick: (e) => {
					if (!N$(t.entry)) {
						return;
					}
					f.y.ReportTrackedAction(`/GameRecording/Marker/Edit/${t.entry.type}`);
					let a = n.createElement(F, {
						entry: t.entry,
						playbackCoordinator: r,
						fnClearSelection: i,
						strTimelineID: t.strTimelineID,
					});
					pg(a, GetOwningWindowForEvent(e));
					e.stopPropagation();
					e.preventDefault();
				},
			},
			n.createElement(M.ff, null),
		),
	);
}
function De(e) {
	const { entry: t, gameID: r } = e;
	const i = t.handle;
	const { onNavigateToScreenshot: a } = f_2();
	return n.createElement(
		Ae.he,
		{
			toolTipContent: (0, Localize)("#TimelineDialog_ViewScreenshot"),
			direction: "top",
			bTopmost: true,
		},
		n.createElement(
			"div",
			{
				className: A_1(ue.Button, ue.ViewScreenshot),
				onClick: () => {
					if (i) {
						f.y.ReportTrackedAction("/GameRecording/Tooltip/Screenshot");
						a(r, i);
					}
				},
			},
			n.createElement(M.pw, null),
		),
	);
}
function Ne(e) {
	const { globalMS: t } = e;
	const r = aO();
	const a = q3(() => r.ConvertGlobaOffsetToRecordingAndRelativeOffset(t));
	if (!a?.strRecordingID) {
		return null;
	}
	return n.createElement(
		Ae.he,
		{
			toolTipContent: (0, Localize)("#TimelineDialog_AddMarker"),
			direction: "top",
		},
		n.createElement(
			"div",
			{
				className: A_1(ue.Button, ue.AddMarker),
				onClick: () => {
					r.AddUserMarkerAtGlobalMS(
						Sb(t),
						"/GameRecording/AddMarker/Thumbnail",
						null,
					);
					r.SetPlaytimeFromGlobalMS(Sb(t));
				},
			},
			n.createElement(M.pH, null),
		),
	);
}
function Fe(e) {
	const { globalMS: t } = e;
	const r = uR();
	const a = q3(() => r.ConvertGlobalMSToClipOrNone(t));
	const { onNavigateToClip: l } = f_2();
	if (a) {
		return n.createElement(
			Ae.he,
			{
				toolTipContent: (0, Localize)("#TimelineDialog_ViewClip"),
				direction: "top",
			},
			n.createElement(
				"div",
				{
					className: A_1(ue.Button, ue.GoToClip),
					onClick: () => {
						if (a) {
							f.y.ReportTrackedAction(
								"/GameRecording/Tooltip/ViewClip/timeline",
							);
							l(a.clipID);
						}
					},
				},
				n.createElement(T.Video, null),
			),
		);
	} else {
		return null;
	}
}
const Ge = n.memo((e) => {
	const t = yR();
	const r = wJ();
	const i = uR();
	const a = aO();
	const s = ww();
	const l = useCallback(
		(e) => {
			if (!r) {
				return;
			}
			const t = e.currentTarget.getBoundingClientRect();
			const n = ee.OQ(e.clientX - t.x, 0, t.width);
			const s = i.ConvertPXOffsetToGlobalMS(n, false);
			if (s) {
				a.SetPlaytimeFromGlobalMS(Sb(s), undefined, undefined, true);
			}
		},
		[r, a, i],
	);
	const c = useCallback(
		(e) => {
			if (!r) {
				return;
			}
			const t = e.currentTarget.getBoundingClientRect();
			const n = ee.OQ(e.clientX - t.x, 0, t.width);
			const a = i.ConvertPXOffsetToGlobalMS(n, false);
			if (a) {
				s(e, Sb(a), false, {
					bDisableMouseOverlay: true,
					bForcePopup: true,
					bAlwaysOnTop: true,
				});
				e.preventDefault();
				e.stopPropagation();
			}
		},
		[r, i, s],
	);
	gZ("click", l);
	gZ("contextmenu", c);
	return n.createElement(Oe, {
		globalMouseXPX: t.globalMouseXPX.valPX || 0,
	});
});
const Oe = n.memo((e) => {
	const { globalMouseXPX: t } = e;
	const r = VF();
	const a = uR();
	const s = wJ();
	const l = q3(() => {
		if (a.GetThumbnailComponent()) {
			return a.GetThumbnailPosition();
		}
	});
	const [c, m] = useState();
	const [u, d] = useState();
	useEffect(() => {
		if (!isNaN(l)) {
			m(l);
			return;
		}
		if (!u && r) {
			m(t);
		}
	}, [u, r, s, t, l]);
	return n.createElement(
		"div",
		{
			className: J.GhostPlayheadCtn,
			style: {
				transform: `translateX( calc(${c}px - 50%))`,
			},
		},
		n.createElement(Pe, {
			globalPX: c,
			setInteractingWithThumbnail: d,
			bInteractingWithThumbnail: u,
		}),
	);
});
function Pe(e) {
	const {
		globalPX: t,
		setInteractingWithThumbnail: r,
		bInteractingWithThumbnail: a,
	} = e;
	const l = uR();
	const c = aO();
	const m = q3(() => c.GetRecordingMode() === "Overlay");
	const u = q3(() => l.ConvertPXOffsetToGlobalMS(t, false));
	const d = q3(() => l.GetTimelineParentCtnRef());
	const A = useRef();
	const p = useRef();
	const h = useRef();
	const C = q3(() => l.GetThumbnailComponent());
	const _ = wJ();
	const f = fS({
		toolTipContent: n.createElement(ye, {
			globalPX: t,
			ref: A,
			onMouseEnter: () => r(true),
			onMouseLeave: (e) => r(false),
		}),
		direction: m ? "bottom" : "top",
		nDelayShowMS: 0,
		nBodyDistance: 0,
		nAllowOffscreenPx: 0,
	});
	const { setHovered: b, setTarget: y } = f.stateHandlers;
	const w = useCallback(() => {
		b(false);
		r(false);
		if (h.current) {
			h.current();
		}
		h.current = null;
		if (l.GetAutoScrollPaused()) {
			l.SetAutoScrollPauseTimeout();
		}
		l.SetThumbnailComponent(null);
	}, [r, b, l]);
	const B = useCallback(
		(e, t) => {
			if (!p.current || !A.current) {
				return;
			}
			const r = p.current.getBoundingClientRect();
			const n = r.left;
			const i = r.right;
			let a = r.top;
			let s = r.bottom;
			if (A.current) {
				const e = A.current.getBoundingClientRect();
				if (m) {
					s = e.bottom;
				} else {
					a = e.top;
				}
			}
			if (e <= n || e >= i || e >= i || t <= a || e >= i || t <= a || t >= s) {
				w();
			}
		},
		[m, w],
	);
	const v = useCallback(
		(e) => {
			const t = l.GetThumbnailComponent();
			if (!t || t === o.Jv.Highlight) {
				B(e.clientX, e.clientY);
			}
		},
		[B, l],
	);
	const I = useCallback(
		(e) => {
			B(e.clientX, e.clientY);
		},
		[B],
	);
	const E = useCallback(() => {
		b(true);
		y(p.current);
		const e = GetOwningWindowForElement(p.current);
		if (e && !h.current) {
			e.addEventListener("mousemove", v);
			e.addEventListener("mouseup", I);
			h.current = () => {
				e.removeEventListener("mousemove", v);
				e.removeEventListener("mouseup", I);
			};
		}
	}, [v, I, b, y]);
	gZ("mouseenter", E);
	useEffect(() => {
		const e = (e) => {
			const t = l.GetThumbnailComponent();
			if (
				(!t || t !== o.Jv.Playhead) &&
				t !== o.Jv.RangeLeft &&
				t !== o.Jv.RangeRight
			) {
				if (A.current && !BIsParentOrSelf(A.current, e.relatedTarget)) {
					w();
				}
			}
		};
		if (d) {
			d.addEventListener("mouseleave", e);
		}
		return () => d && d.removeEventListener("mouseleave", e);
	}, [w, d, l]);
	useEffect(() => w, [w]);
	const M = (_ || a) && u && !C;
	return n.createElement(
		"div",
		{
			ref: p,
			className: J.TooltipHoverSource,
		},
		n.createElement(ce, {
			className: A_1(J.GhostPlayhead, M && J.Show),
		}),
		!!u && f.tooltip,
	);
}
const ze = 500;
const xe = memo(() => {
	const [e, t] = useState("none");
	const r = d8();
	const i = UO();
	const a = d7();
	if (r && i && a) {
		return n.createElement(
			"div",
			{
				className: Le.RangeControls,
			},
			n.createElement(Ue, {
				activeControlState: e,
				setActiveControlState: t,
			}),
		);
	} else {
		return null;
	}
});
const Ue = memo((e) => {
	const { activeControlState: t, setActiveControlState: r } = e;
	const [a, l] = useState();
	const [c, m] = useState();
	const u = UO();
	const d = d7();
	const A = uR();
	const p = q3(() => A.ConvertGlobalMSToGlobalPXOffset(u.valMS));
	const g = q3(() => A.ConvertGlobalMSToGlobalPXOffset(d.valMS));
	const h = useCallback(
		(e) => {
			l(e);
			A.SetAutoScrollPauseTimeout();
		},
		[A],
	);
	const C = useCallback(
		(e) => {
			m(e);
			A.SetAutoScrollPauseTimeout();
		},
		[A],
	);
	const _ = useCallback(
		(e) => {
			if (t === "none") {
				e.stopPropagation();
			}
		},
		[t],
	);
	const f = useCallback(
		(e) => {
			if (t === "none") {
				e.stopPropagation();
			}
		},
		[t],
	);
	return n.createElement(
		"div",
		{
			className: A_1(Le.RangeSelectorCtn, t !== "none" && Le.Active),
			onMouseOver: _,
			onMouseOut: f,
			onFocus: _,
			onBlur: f,
		},
		n.createElement(
			"div",
			{
				className: Le.TrackRangeControls,
			},
			n.createElement(Ve, {
				isActive: t === "left",
				setControlState: r,
				setRangeControlPX: h,
				pxOffset: a,
			}),
			n.createElement(Ze, {
				startOffsetPX: (t === "left" && a) || p,
				endOffsetPX: (t === "right" && c) || g,
				className: Le.SelectedRangeMask,
			}),
			n.createElement(je, {
				isActive: t === "right",
				setControlState: r,
				setRangeControlPX: C,
				pxOffset: c,
			}),
		),
	);
});
function We(e, t, r) {
	const n = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth();
	const i = n + t.GetVisualWidth();
	const a = Math.max(0, n + 3);
	const s = Math.min(t.GetScrollableWidthPX(), i - 3);
	r(ee.OQ(e, a, s));
}
const Ve = memo((e) => {
	const {
		isActive: t,
		setControlState: r,
		setRangeControlPX: i,
		pxOffset: a,
	} = e;
	const s = UO();
	if (t) {
		return n.createElement(He, {
			setControlState: r,
			setRangeControlPX: i,
			pxOffset: a,
		});
	} else {
		return n.createElement(Qe, {
			offsetMS: s.valMS,
			direction: "left",
			setControlState: r,
			setRangeControlPX: i,
		});
	}
});
function He(e) {
	const { setControlState: t, setRangeControlPX: r, pxOffset: a } = e;
	const s = nA();
	const l = d7();
	const c = uR();
	const m = xS();
	((e, t, r, a, s, l) => {
		const c = useRef();
		const m = useRef(false);
		const u = useRef();
		const d = useRef();
		const A = q3(() => t.GetScrollableWidthPX());
		const p = q3(() => t.GetScrollWindowWidth());
		useEffect(
			() => () => {
				if (u.current) {
					cancelAnimationFrame(u.current);
					u.current = null;
					d.current = null;
				}
			},
			[],
		);
		const g = n.useCallback(
			(e, t, r, n, i) => {
				if (i(t)) {
					l(ee.OQ(t.GetVisualWindowStartPX() + r, 0, t.GetScrollableWidthPX()));
					cancelAnimationFrame(u.current);
					u.current = null;
					d.current = null;
				} else {
					u.current &&= requestAnimationFrame((e) => g(e, t, r, n, i));
					if (d.current) {
						const r = ((e - d.current) / ze) * n;
						t.ScrollBy(r);
						l((e) => ee.OQ(e + r, 0, t.GetScrollableWidthPX()));
					}
					d.current = e;
				}
			},
			[l],
		);
		useEffect(() => {
			if (u.current) {
				cancelAnimationFrame(u.current);
				u.current = null;
				d.current = null;
			}
			const n = p * (1 - Q);
			const i = p * Q;
			const h = t.ConvertGlobalMSToGlobalPXOffset(r.valMS);
			const C = t.ConvertGlobalMSToScrollWindowPXOffset(r.valMS);
			if (a.valPX > h) {
				l(h);
				s("right");
				t.SetThumbnailComponent(o.Jv.RangeRight);
				return;
			}
			if (e.valPX < i && !t.BReachedMinScroll()) {
				if (e.valPX > c.current) {
					m.current = true;
				} else if (e.valPX < c.current || !m.current) {
					const r = Math.min(i, C);
					const n = e.valPX - r;
					const a = ee.OQ(Math.abs(n / r), 0, 1) * n;
					u.current = requestAnimationFrame((r) =>
						g(r, t, e.valPX, a, t.BReachedMinScroll),
					);
					m.current = false;
				}
				We(a.valPX, t, l);
			} else if (e.valPX > n && C > n && !t.BReachedMaxScroll()) {
				if (e.valPX < c.current) {
					m.current = true;
				} else if (e.valPX > c.current || !m.current) {
					const i = (e) => {
						const t = e.ConvertGlobalMSToScrollWindowPXOffset(r.valMS);
						return e.BReachedMaxScroll() || t <= n;
					};
					const a = e.valPX - n;
					const s = ee.OQ(Math.abs(a / (p - n)), 0, 1) * a;
					u.current = requestAnimationFrame((r) => g(r, t, e.valPX, s, i));
					m.current = false;
				}
				We(a.valPX, t, l);
			} else {
				l(ee.OQ(a.valPX, 0, A));
			}
			c.current = e.valPX;
		}, [a.valPX, r.valMS, e.valPX, s, t, l, A, g, p]);
	})(FV(), c, l, m, t, r);
	useEffect(() => {
		if (!isNaN(a)) {
			c.SetThumbnailPosition(a);
			s(5, Sb(c.ConvertPXOffsetToGlobalMS(a)));
		}
	}, [a, s, c]);
	return n.createElement(Ye, {
		offsetPX: a,
		direction: "left",
	});
}
const je = memo((e) => {
	const {
		isActive: t,
		setControlState: r,
		setRangeControlPX: i,
		pxOffset: a,
	} = e;
	const s = d7();
	if (t) {
		return n.createElement(qe, {
			setControlState: r,
			setRangeControlPX: i,
			pxOffset: a,
		});
	} else {
		return n.createElement(Qe, {
			offsetMS: s.valMS,
			direction: "right",
			setControlState: r,
			setRangeControlPX: i,
		});
	}
});
function qe(e) {
	const { setControlState: t, setRangeControlPX: r, pxOffset: a } = e;
	const s = eH();
	const l = UO();
	const c = uR();
	const m = xS();
	((e, t, r, a, s, l) => {
		const c = useRef();
		const m = useRef(false);
		const u = useRef();
		const d = useRef();
		const A = q3(() => t.GetScrollableWidthPX());
		const p = q3(() => t.GetScrollWindowWidth());
		useEffect(
			() => () => {
				if (u.current) {
					cancelAnimationFrame(u.current);
					u.current = null;
					d.current = null;
				}
			},
			[],
		);
		const g = n.useCallback(
			(e, t, r, n, i) => {
				if (i(t)) {
					l(ee.OQ(t.GetVisualWindowStartPX() + r, 0, t.GetScrollableWidthPX()));
					cancelAnimationFrame(u.current);
					u.current = null;
					d.current = null;
				} else {
					u.current &&= requestAnimationFrame((e) => g(e, t, r, n, i));
					if (d.current) {
						const r = ((e - d.current) / ze) * n;
						t.ScrollBy(r);
						l((e) => ee.OQ(e + r, 0, t.GetScrollableWidthPX()));
					}
					d.current = e;
				}
			},
			[l],
		);
		useEffect(() => {
			if (u.current) {
				cancelAnimationFrame(u.current);
				u.current = null;
				d.current = null;
			}
			const n = p * (1 - Q);
			const i = p * Q;
			const h = t.ConvertGlobalMSToGlobalPXOffset(r.valMS);
			const C = t.ConvertGlobalMSToScrollWindowPXOffset(r.valMS);
			if (a.valPX < h) {
				l(h);
				s("left");
				t.SetThumbnailComponent(o.Jv.RangeLeft);
				return;
			}
			if (e.valPX > n && !t.BReachedMaxScroll()) {
				if (e.valPX < c.current) {
					m.current = true;
				} else if (e.valPX > c.current || !m.current) {
					const r = Math.max(n, C);
					const i = e.valPX - r;
					const a = ee.OQ(Math.abs(i / (p - r)), 0, 1) * i;
					u.current = requestAnimationFrame((r) =>
						g(r, t, e.valPX, a, t.BReachedMaxScroll),
					);
					m.current = false;
				}
				We(a.valPX, t, l);
			} else if (
				e.valPX < i &&
				C < i &&
				e.valPX <= c.current &&
				!t.BReachedMinScroll()
			) {
				if (e.valPX > c.current) {
					m.current = true;
				} else if (e.valPX < c.current || !m.current) {
					const n = e.valPX - i;
					const a = ee.OQ(Math.abs(n / i), 0, 1) * n;
					const s = (e) =>
						e.ConvertGlobalMSToScrollWindowPXOffset(r.valMS) > i ||
						e.BReachedMinScroll();
					u.current = requestAnimationFrame((r) => g(r, t, e.valPX, a, s));
					m.current = false;
				}
				We(a.valPX, t, l);
			} else {
				l(ee.OQ(a.valPX, 0, A));
			}
			c.current = e.valPX;
		}, [r.valMS, e.valPX, s, t, l, A, p, a.valPX, g]);
	})(FV(), c, l, m, t, r);
	useEffect(() => {
		if (!isNaN(a)) {
			c.SetThumbnailPosition(a);
			s(5, Sb(c.ConvertPXOffsetToGlobalMS(a)));
		}
	}, [a, s, c]);
	return n.createElement(Ye, {
		offsetPX: a,
		direction: "right",
	});
}
function Qe(e) {
	const {
		offsetMS: t,
		direction: r,
		setControlState: a,
		setRangeControlPX: s,
	} = e;
	const l = uR();
	const c = q3(() => l.ConvertGlobalMSToGlobalPXOffset(t));
	useEffect(() => {
		s(undefined);
		return () => {
			s(c);
		};
	}, [c, s]);
	const m = useCallback(
		(e) => {
			const t = GetOwningWindowForEvent(e);
			let n;
			let i;
			const s = () => {
				a(r);
				l.SetThumbnailComponent(
					r === "left" ? o.Jv.RangeLeft : o.Jv.RangeRight,
				);
				n();
			};
			t.addEventListener("mousemove", s);
			n = () => t.removeEventListener("mousemove", s);
			const c = () => {
				a("none");
				l.SetThumbnailComponent(null);
				n();
				i();
			};
			t.addEventListener("mouseup", c);
			i = () => t.removeEventListener("mouseup", c);
		},
		[r, a, l],
	);
	const u = (e) => {
		l.SetThumbnailComponent(r === "left" ? o.Jv.RangeLeft : o.Jv.RangeRight);
	};
	const d = (e) => {
		l.SetThumbnailComponent(null);
	};
	return n.createElement(
		"div",
		{
			className: Le.InactiveSelectedRangeControl,
			onMouseDown: m,
			onMouseOver: u,
			onFocus: u,
			onMouseOut: d,
			onBlur: d,
		},
		n.createElement(Ye, {
			offsetPX: c,
			direction: r,
		}),
	);
}
const Ze = memo((e) => {
	const { startOffsetPX: t, endOffsetPX: r, className: i } = e;
	if (isNaN(t) || isNaN(r)) {
		return null;
	}
	const a = {
		width: r - t || 0,
		transform: `translateX(${t}px)`,
	};
	return n.createElement("div", {
		className: A_1(Le.RangeMask, i),
		style: a,
	});
});
const Ye = memo((e) => {
	const { direction: t, offsetPX: r } = e;
	const a = {
		transform: `translateX( calc( ${r}px - 50%) )`,
	};
	const l = uR();
	const c = q3(() => l.GetThumbnailComponent() === o.Jv.Playhead);
	return n.createElement(
		"div",
		{
			style: a,
			className: A_1(Le.RangeControl),
		},
		n.createElement(
			"div",
			{
				className: A_1(Le.RangeIcon, t === "left" && Le.Left, c && Le.Hide),
			},
			n.createElement(Ke, {
				innerFill: "#171d25",
				direction: t,
			}),
		),
	);
});
function Ke(e) {
	return n.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 3 36",
			fill: "none",
			style: {
				transform: `rotate(${e.direction === "right" ? 180 : 0}deg)`,
			},
		},
		n.createElement("rect", {
			fill: "currentColor",
			width: "3",
			height: "6.00006",
			transform: "matrix(-1 0 0 1 3 0)",
		}),
		n.createElement("rect", {
			fill: "currentColor",
			width: "3",
			height: "6.00006",
			transform: "matrix(-1 0 0 1 3 10)",
		}),
		n.createElement("rect", {
			fill: "currentColor",
			width: "3",
			height: "6.00006",
			transform: "matrix(-1 0 0 1 3 20)",
		}),
		n.createElement("rect", {
			fill: "currentColor",
			width: "3",
			height: "6.00006",
			transform: "matrix(-1 0 0 1 3 30)",
		}),
	);
}
const Je = n.memo((e) => {
	const t = uR();
	const r = q3(() => t.GetVisibleWindowRelativeTimelines());
	const a = aO().GetRecordingMode();
	let s = [];
	let l = "";
	for (let e of r) {
		let r = t.GetTimeRecorded(e.timelineID);
		let n = LocalizeRtime32ToShorterDate(r);
		if (n != l) {
			s.push({
				timeline: e,
				strLabel: n,
			});
			l = n;
		}
	}
	for (let e = s.length - 2; e >= 0; e--) {
		let t = s[e];
		if (
			!(s[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= 100)
		) {
			s.splice(e, 1);
		}
	}
	return n.createElement(
		n.Fragment,
		null,
		s.map((e) =>
			n.createElement($e, {
				key: e.timeline.timelineID,
				startPX: e.timeline.nVisibleStartPX,
				label: e.strLabel,
				recordingMode: a,
			}),
		),
	);
});
function $e(e) {
	const { label: t, startPX: r, recordingMode: i } = e;
	let a = i == g.g_.Overlay;
	return n.createElement(
		"div",
		{
			className: A_1(Xe.TimelineRelativeDate, a && Xe.Overlay),
			style: {
				transform: `translateX(${r}px)`,
			},
		},
		t,
	);
}
const rt = memo((e) => {
	const t = uR();
	const r = q3(() => t.GetVisibleRecordings());
	return n.createElement(
		n.Fragment,
		null,
		r.map((e) =>
			n.createElement(nt, {
				key: e.recordingID,
				startPX: e.nStartPX,
				endPX: e.nEndPX,
				isActive: e.bIsActive,
				recordingType: e.recordingType,
			}),
		),
	);
});
function nt(e) {
	const { isActive: t, endPX: r, startPX: i, recordingType: a } = e;
	const o = {
		width: r - i || 0,
		transform: `translateX(${i}px)`,
	};
	const l = Pm();
	const c = a === 4;
	const m = a === 2;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement("div", {
			className: A_1(
				et.RecordingDecorator,
				c && et.Clip,
				m && et.Manual,
				l && et.ClipMode,
			),
			style: o,
		}),
		t &&
			n.createElement(it, {
				endPX: r,
			}),
	);
}
function it(e) {
	const { endPX: t } = e;
	const r = aO();
	const a = uR();
	const l = q3(() => r.GetRecordingMode() === "Overlay");
	const c = wF(r.GetGameID());
	const m = q3(() => r.GetIsLiveEdge() && !r.GetHidePlayer());
	const u = q3(() => {
		const e = r.GetLiveEdgeBufferWindowStartMS();
		return a.ConvertGlobalMSToGlobalPXOffset(e.valMS);
	});
	if (!l || c !== tt.KB.BackgroundRecording) {
		return null;
	}
	const d = {
		width: t - u || 0,
		transform: `translateX(${u}px)`,
	};
	return n.createElement("div", {
		className: A_1(et.LiveRecordingBuffer, m && et.IsLive),
		style: d,
	});
}
const st = memo((e) => {
	const t = uR();
	const r = q3(() => t.GetVisibleClips());
	return n.createElement(
		n.Fragment,
		null,
		r.map((e) =>
			n.createElement(ot, {
				key: e.clipID,
				startPX: e.pxClipStart,
				endPX: e.pxClipEnd,
			}),
		),
	);
});
const ot = memo((e) => {
	const { endPX: t, startPX: r } = e;
	const i = {
		width: t - r || 0,
		transform: `translateX(${r}px)`,
	};
	return n.createElement("div", {
		className: at.ClipDecorator,
		style: i,
	});
});
const ct = forwardRef((e, t) => {
	const r = uR();
	if (q3(() => !r.BEmpty())) {
		return n.createElement(ut, {
			...e,
			timelineView: r,
			ref: t,
		});
	} else {
		return n.createElement(mt, {
			ref: t,
		});
	}
});
const mt = forwardRef((e, t) =>
	n.createElement("div", {
		ref: t,
		className: A_1(lt.ScrollbarPlaceholder, e.className),
	}),
);
const ut = forwardRef((e, t) => {
	const r = aO();
	const { children: a, className: o, timelineView: l, disableZoom: c } = e;
	const [m, u] = useState();
	const d = n.useCallback(
		(e) => {
			const t = e.target.getBoundingClientRect();
			l.SetScrollWindowOffset(t.x);
			l.SetScrollWindowWidth(t.width);
			u(t);
		},
		[l],
	);
	const A = wY(d);
	const p = n.useCallback(
		(e) => {
			if (e.ctrlKey && !c) {
				const t = m ? (e.clientX - m.x) / m.width : 0.5;
				if (e.deltaY > 0) {
					l.ZoomOut(e.deltaY / 100, t);
				} else {
					l.ZoomIn(-e.deltaY / 100, t);
				}
			} else {
				l.ScrollBy(e.deltaY);
			}
		},
		[c, m, l],
	);
	((e, t) => {
		const r = q3(
			() =>
				!t.GetAutoScrollPaused() &&
				e.GetGameRecordingVideo().BVideoElementPlaying(),
		);
		useEffect(() => {
			if (!r) {
				return () => {};
			}
			let n = false;
			let i = e.GetGlobalMSPlaytime();
			let a = Date.now();
			const s = (r) => {
				const o = Date.now();
				const l = o - a;
				t.ScrollToCenteredGlobalMS(i.valMS + l);
				const c = e.GetGlobalMSPlaytime();
				if (c.valMS !== i.valMS) {
					i = c;
					a = o;
				}
				if (!n) {
					requestAnimationFrame(s);
				}
			};
			requestAnimationFrame(s);
			return () => (n = true);
		}, [e, t, r]);
	})(r, l);
	return n.createElement(
		"div",
		{
			ref: t,
			onWheel: p,
			onMouseOver: () => l.SetAutoScrollPaused(true),
			onFocus: () => {},
			onMouseLeave: () => l.SetAutoScrollPauseTimeout(),
		},
		n.createElement(
			"div",
			{
				className: lt.LeftControlsAndContent,
			},
			n.createElement(
				"div",
				{
					ref: A,
					className: A_1(lt.ContentAndGradient, o),
				},
				a,
				n.createElement(dt, {
					timelineView: l,
				}),
			),
			r.GetRecordingMode() === g.g_.Overlay && n.createElement(tt.fH, null),
		),
		n.createElement(
			"div",
			{
				className: lt.ScrollbarAndSiblings,
			},
			!r.GetGamepadMode() && n.createElement(At, null),
		),
	);
});
function dt(e) {
	const { timelineView: t } = e;
	const r = q3(() => t.GetVisualWindowStartPX());
	const a = q3(() => t.BReachedMaxScroll());
	return n.createElement(
		"div",
		{
			className: lt.ScrollGradientCtn,
		},
		n.createElement("div", {
			className: A_1(lt.FrontGradient, r === 0 && lt.HideGradient),
		}),
		n.createElement("div", {
			className: A_1(lt.EndGradient, a && lt.HideGradient),
		}),
	);
}
function At() {
	const [e, t] = useState({
		scrollBarWidth: 0,
		scrollBarXOffset: 0,
	});
	const r = n.useCallback((e) => {
		const r = e.target.getBoundingClientRect();
		t({
			scrollBarWidth: r.width,
			scrollBarXOffset: r.x,
		});
	}, []);
	const a = uR();
	const l = q3(() => a.GetScrollableWidthPX() + a.GetTimelineMarginWidth() * 2);
	const c = q3(() => a.GetVisualWidth());
	const m = useMemo(
		() => (c * e.scrollBarWidth) / l || 0,
		[c, e.scrollBarWidth, l],
	);
	const u = wY(r);
	return n.createElement(
		"div",
		{
			className: A_1(
				lt.ScrollBarCtn,
				Math.round(m) === Math.round(e.scrollBarWidth) && lt.HideScrollBar,
			),
			ref: u,
		},
		n.createElement(pt, {
			timelineView: a,
			scrollSize: e,
		}),
		n.createElement(_t, {
			scrollSize: e,
			timelineView: a,
			timelineWidth: l,
			thumbWidth: m,
		}),
	);
}
function pt(e) {
	const { timelineView: t, scrollSize: r } = e;
	const a = aO();
	const s = ((e, t) => {
		const r = useRef();
		const a = useRef();
		const s = q3(() => e.GetScrollableWidthPX());
		const o = useCallback(
			(e) => OB((s * e) / t.scrollBarWidth),
			[t.scrollBarWidth, s],
		);
		const l = useCallback(() => {
			if (!r.current) {
				return;
			}
			const t = e.GetScrollWindowWidth();
			const n = e.GetVisualWindowStartPX() + t / 2;
			if (r.current.valPX > n - t * 0.1 && r.current.valPX < n + t * 0.1) {
				return;
			}
			const i = e.GetScrollableWidthPX() * 0.005;
			const s = r.current.valPX - n;
			if (Math.abs(s) > i) {
				const t = s > 0 ? i : -i;
				e.ScrollToOffsetCentered(n + t);
				a.current = requestAnimationFrame(() => l());
			} else {
				e.ScrollToOffsetCentered(r.current.valPX);
			}
		}, [e]);
		const c = useCallback(
			(e) => {
				r.current = o(e.clientX - t.scrollBarXOffset);
				a.current = requestAnimationFrame(() => l());
			},
			[o, l, t.scrollBarXOffset],
		);
		const m = useCallback(() => {
			if (a.current) {
				cancelAnimationFrame(a.current);
			}
		}, []);
		const u = useCallback(
			(e) => {
				r.current = o(e.clientX - t.scrollBarXOffset);
			},
			[o, t.scrollBarXOffset],
		);
		useEffect(
			() => () => {
				if (a.current) {
					cancelAnimationFrame(a.current);
				}
			},
			[],
		);
		return {
			onMouseDown: c,
			onMouseMove: u,
			onMouseUp: m,
			onMouseLeave: m,
		};
	})(t, r);
	const o = q3(() => t.GetTimelineMarginWidth());
	const l = q3(() => t.GetScrollableWidthPX());
	const c = useCallback(
		(e) => {
			const t = e + o;
			return ee.OQ((t * r.scrollBarWidth) / l, 0, r.scrollBarWidth);
		},
		[r.scrollBarWidth, o, l],
	);
	return n.createElement(
		"div",
		{
			className: lt.ScrollTrack,
			...s,
		},
		n.createElement(gt, {
			timelineView: t,
			playbackCoordinator: a,
			fnConvertGlobalPXToTrackPX: c,
			scrollBarWidth: r.scrollBarWidth,
		}),
		n.createElement(Ct, {
			timelineView: t,
			fnConvertGlobalPXToTrackPX: c,
		}),
	);
}
function gt(e) {
	const {
		timelineView: t,
		playbackCoordinator: r,
		fnConvertGlobalPXToTrackPX: a,
		scrollBarWidth: s,
	} = e;
	const o = q3(() => r.GetHidePlayer());
	const l = q3(() => {
		const e = r.GetGlobalMSPlaytime();
		if (e && t.BInitialized()) {
			const r = Math.floor(t.ConvertGlobalMSToGlobalPXOffset(e.valMS));
			return a(r);
		}
		return null;
	});
	if (!l) {
		return null;
	}
	return n.createElement(
		"div",
		{
			className: lt.PlayHeadAnnotation,
			onClick: () => {
				let e = r.GetGlobalMSPlaytime();
				if (o) {
					e = r.GetLiveEdgeMS();
				}
				t.ScrollToCenteredGlobalMS(e.valMS);
			},
			style: {
				transform: `translateX(${o ? s : l}px)`,
			},
		},
		n.createElement(ht, null),
	);
}
function ht() {
	return n.createElement(
		"svg",
		{
			width: "52",
			height: "31",
			viewBox: "0 0 52 31",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		n.createElement("path", {
			d: "M26 31L51.1147 0.25H0.885263L26 31Z",
			fill: "#D9D9D9",
		}),
	);
}
function Ct(e) {
	const { timelineView: t, fnConvertGlobalPXToTrackPX: r } = e;
	const a = Pm();
	const s = _Z();
	const o = q3(() => {
		if (a && t.BInitialized()) {
			const e = Math.floor(
				t.ConvertGlobalMSToGlobalPXOffset(s.nGlobalStartMS.valMS),
			);
			const n = Math.floor(
				t.ConvertGlobalMSToGlobalPXOffset(s.nGlobalEndMS.valMS),
			);
			if (!isNaN(e) && !isNaN(n)) {
				return {
					rangeStartPX: r(e),
					rangeEndPX: r(n),
				};
			}
		}
		return null;
	});
	if (!o) {
		return null;
	}
	return n.createElement("div", {
		className: lt.RangeAnnotation,
		onClick: () => {
			t.ScrollToCenteredGlobalMS(s.nGlobalStartMS.valMS);
		},
		style: {
			width: o.rangeEndPX - o.rangeStartPX,
			transform: `translateX(${o.rangeStartPX}px)`,
		},
	});
}
function _t(e) {
	const { scrollSize: t, timelineWidth: r, thumbWidth: a, timelineView: o } = e;
	const {
		thumbPositionPX: l,
		onMouseDown: c,
		bHiglightThumb: m,
	} = ((e, t, r, a) => {
		const [s, o] = useState(false);
		const [l, c] = useState(0);
		const m = q3(() => {
			const n = a.BInitialized();
			const i = a.GetVisualWindowStartPX();
			if (n) {
				return ee.OQ((i * e.scrollBarWidth) / t, 0, e.scrollBarWidth - r);
			} else {
				return 0;
			}
		});
		const [u, d] = useState(false);
		const A = useRef();
		useEffect(() => {
			if (a.GetAutoScrollPaused()) {
				d(true);
				A.current = window.setTimeout(() => {
					d(false);
				}, 500);
				return () => window.clearTimeout(A.current);
			}
		}, [m, a]);
		const p = useCallback(
			(t) => {
				c(m);
				o(true);
				const r = t.nativeEvent.offsetX;
				const n = a.GetTimelineParentCtnRef() ?? GetOwningWindowForEvent(t);
				let i;
				let s;
				let l;
				const u = (t) => {
					c(t.clientX - e.scrollBarXOffset - r);
				};
				n.addEventListener("mousemove", u);
				i = () => n.removeEventListener("mousemove", u);
				const d = () => {
					o(false);
					i();
					s();
					l();
				};
				n.addEventListener("mouseup", d);
				n.addEventListener("mouseleave", d);
				s = () => n.removeEventListener("mouseup", d);
				l = () => n.removeEventListener("mouseleave", d);
			},
			[m, e.scrollBarXOffset, a],
		);
		const g = useMemo(
			() => (s ? ee.OQ(l, 0, e.scrollBarWidth - r) : m),
			[l, s, m, e.scrollBarWidth, r],
		);
		useEffect(() => {
			if (s) {
				const r = (t * g) / e.scrollBarWidth;
				a.ScrollToOffset(r);
			}
		}, [s, e.scrollBarWidth, g, a, t]);
		return {
			thumbPositionPX: g,
			onMouseDown: p,
			bHiglightThumb: u,
		};
	})(t, r, a, o);
	return n.createElement("div", {
		className: A_1(lt.ScrollThumb, m && lt.Highlight),
		style: {
			width: a,
			transform: `translateX(${l}px)`,
		},
		onMouseDown: c,
	});
}
function St(e) {
	const t = uR();
	const r = q3(() => t.GetVisibleTimelines());
	return n.createElement(
		n.Fragment,
		null,
		r.flatMap((e) =>
			e.phaseOffsets.map((t, r) =>
				n.createElement(wt, {
					...t,
					timeline: e,
					key: `${e.timelineID}_${r}`,
				}),
			),
		),
	);
}
function wt(e) {
	const { timelineOffsetMS: t, nDurationMS: r, phase: i, timeline: a } = e;
	return n.createElement(
		Bt,
		{
			...e,
		},
		n.createElement(It, null),
		n.createElement(vt, null),
		n.createElement(It, null),
	);
}
function Bt(e) {
	const {
		children: t,
		timeline: r,
		timelineOffsetMS: a,
		nDurationMS: l,
		phase: c,
	} = e;
	const m = uR();
	const u = aO();
	const d = xS()?.valPX || -1;
	const A = VF();
	const [p] = fR();
	const {
		pxStart: h,
		pxWidth: C,
		bHighlight: _,
	} = q3(() => {
		const e = m.GetPhaseToHighlight();
		return {
			pxStart: m.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS + a),
			pxWidth: m.ConvertDurationMSToDeltaPX(l),
			bHighlight:
				e && e[0] === r.timelineID && e[1] === c.background_timeline_offset,
		};
	});
	const f = (A || p) && d >= h && d <= h + C;
	const [b, y] = Bl();
	const S = () => {
		const e = u.GetLoader();
		const t = e.GetTimelineData(r.timelineID);
		const n = e.GetTimelineMetadata(r.timelineID);
		const i = t.m_rgPhases.find((e) => parseInt(e.time) === a);
		if (i) {
			y({
				entry: i,
				timeline: n,
			});
		}
	};
	const w = () => y(undefined);
	return n.createElement(
		"div",
		{
			className: A_1(yt.Positioner, f && yt.MouseWithin, _ && yt.Highlight),
			style: {
				transform: `translateX( ${h}px )`,
				width: `${C}px`,
			},
			onMouseOver: S,
			onMouseLeave: w,
			onFocus: S,
			onBlur: w,
		},
		t,
	);
}
function vt(e) {
	return n.createElement("div", {
		className: yt.Body,
	});
}
function It(e) {
	return n.createElement("div", {
		className: yt.Edge,
	});
}
function Mt(e) {
	const t = uR();
	const r = q3(() => t.GetVisibleTimelines());
	return n.createElement(
		n.Fragment,
		null,
		r.map((e) =>
			n.createElement(Tt, {
				timeline: e,
				key: e.timelineID,
			}),
		),
	);
}
function Tt(e) {
	const { timeline: t } = e;
	const r = uR();
	const a = q3(() => r.GetVisibleTimelineHighlights(t.timelineID) || []);
	const s = q3(() => r.GetTimelineOffsetMS(t.timelineID));
	const l = t.globalOffsetMS - s;
	return n.createElement(
		n.Fragment,
		null,
		a
			.filter((e) => _Q(e) === "range_highlight")
			.map((e) =>
				n.createElement(Rt, {
					entry: e,
					timeline: t,
					timelineView: r,
					key: e.id,
					timelineOffset: l,
				}),
			),
	);
}
function Rt(e) {
	const { timelineView: t, entry: r, timelineOffset: a } = e;
	const s = a + parseInt(r.time);
	const { pxStart: o, pxWidth: l } = q3(() => ({
		pxStart: t.ConvertGlobalMSToGlobalPXOffset(s),
		pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(r.duration)),
	}));
	const c = {
		width: `${l}px`,
		transform: `translateX( ${o}px )`,
	};
	return n.createElement(
		"svg",
		{
			className: Et.RangeHighlight,
			style: c,
		},
		n.createElement("line", {
			x1: "0",
			x2: l,
			y1: "0",
			y2: "0",
			fill: "none",
			stroke: "#ffc82c",
			"stroke-width": "3",
			"stroke-dasharray": "3 6",
			"stroke-dashoffset": "0",
			"stroke-linecap": "square",
		}),
	);
}
export const Q = 0.08;
export function h(e) {
	const {
		loader: t,
		className: r,
		clipSummaries: l,
		refTimelineParentCtn: c,
		disableZoom: m,
	} = e;
	const u = q3(() => t.BInitialized());
	const d = aO();
	if (!u) {
		n.createElement("div", {
			className: a.LoadingTimeline,
		});
	}
	let A = A_1(a.ScrollAndControlsCtn, d.GetGamepadMode() && a.GamepadMode, r);
	return n.createElement(
		o._T,
		{
			loader: t,
			clipSummaries: l,
			playbackCoordinator: d,
			refTimelineParentCtn: c,
		},
		n.createElement(
			"div",
			{
				className: A,
			},
			n.createElement(Ot, null),
			n.createElement(Pt, null),
			n.createElement(
				bt.dD,
				{
					tour: "recording_timeline",
					name: "timeline",
					options: {
						position: "left",
						offset: 30,
					},
				},
				n.createElement(
					ct,
					{
						className: a.TimelineScrollContainer,
						disableZoom: m,
					},
					n.createElement(Nt, null),
				),
			),
		),
	);
}
const Nt = memo((e) => {
	const t = uR();
	if (q3(() => t.BInitialized())) {
		return n.createElement(Ft, null);
	} else {
		return null;
	}
});
function Ft() {
	const e = uR();
	const t = q3(() => e.GetScrollableWidthPX());
	const r = q3(() => e.GetVisualWindowStartPX());
	const s = q3(() => e.GetTimelineMarginWidth());
	return n.createElement(
		"div",
		{
			className: a.ContentContainer,
			style: {
				minWidth: t || 0,
				marginRight: s,
				marginLeft: s,
				transform: `translateX(${-r}px)`,
			},
		},
		n.createElement(
			Gt,
			{
				id: "recordings",
				className: a.RecordingDecorators,
			},
			n.createElement(rt, null),
		),
		n.createElement(
			Gt,
			{
				id: "clips",
				className: a.ClipDecorators,
			},
			n.createElement(st, null),
		),
		n.createElement(
			Gt,
			{
				id: "game_modes",
				className: a.GameModes,
			},
			n.createElement(K, null),
		),
		n.createElement(
			Gt,
			{
				id: "date_decorators",
				className: a.DateDecorator,
			},
			n.createElement(Je, null),
		),
		n.createElement(
			Gt,
			{
				id: "ticks",
				className: a.BackgroundTicks,
			},
			n.createElement(m, null),
		),
		n.createElement(
			$.RF,
			null,
			n.createElement(
				Gt,
				{
					id: "highlights",
					className: a.Highlights,
				},
				n.createElement(V, null),
			),
			n.createElement(
				Gt,
				{
					id: "range_selection",
					className: a.RangeSelector,
				},
				n.createElement(xe, null),
			),
			n.createElement(
				Gt,
				{
					id: "seek_scrub",
					className: a.SeekScrubber,
				},
				n.createElement(Ge, null),
			),
			n.createElement(
				Gt,
				{
					id: "play_head",
					className: a.PlayHead,
				},
				n.createElement(ne, null),
			),
			n.createElement(
				Gt,
				{
					id: "phases",
					className: a.Phases,
				},
				n.createElement(St, null),
			),
			n.createElement(
				Gt,
				{
					id: "range_highlights",
					className: a.RangeHighlights,
				},
				n.createElement(Mt, null),
			),
		),
	);
}
function Gt(e) {
	const { children: t, id: r, className: i } = e;
	return n.createElement(
		"div",
		{
			id: r,
			className: A_1(i, a.AbsoluteLayer),
		},
		n.createElement(
			"div",
			{
				className: a.RelativeLayer,
			},
			t,
		),
	);
}
function Ot(e) {
	const t = aO().GetRenderGlyph();
	if (t) {
		return t(ft.pR.TRIGGER_LEFT, false, false, a.PositionLeft);
	} else {
		return null;
	}
}
function Pt(e) {
	const t = aO().GetRenderGlyph();
	if (t) {
		return t(ft.pR.TRIGGER_RIGHT, false, false, a.PositionRight);
	} else {
		return null;
	}
}
