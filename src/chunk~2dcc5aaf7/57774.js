var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./23690.js");
var s = require(/*webcrack:missing*/ "./50376.js");
var o = require("./64608.js");
import { Localize } from "../../actual_src/utils/localization.js";
var c = require(/*webcrack:missing*/ "./11131.js");
var m = require(/*webcrack:missing*/ "./78325.js");
var u = require(/*webcrack:missing*/ "./46382.js");
var d = require(/*webcrack:missing*/ "./89193.js");
var A = require(/*webcrack:missing*/ "./90095.js");
class p {
	m_tours = {};
	m_strActiveTour = "";
	m_storage;
	m_bReady = false;
	constructor() {
		(0, d.Gn)(this);
	}
	async Init(e) {
		if (this.m_storage) {
			return;
		}
		this.m_storage = e;
		const t = await h(e);
		Object.keys(t || {}).forEach((e) => {
			const r = !!t[e];
			this.m_tours[e] = {
				...(this.m_tours[e] || {
					stops: {},
				}),
				bSeen: r,
			};
		});
		this.m_bReady = true;
	}
	UpdateStop(e, t, r, n) {
		this.m_tours[e] ||= {
			bSeen: false,
			stops: {},
		};
		this.m_tours[e].stops[t] = {
			options: r,
			elem: n,
		};
	}
	BHasSeenTour(e) {
		return !this.m_bReady || (this.m_tours[e] && this.m_tours[e].bSeen);
	}
	GetTrackedStops(e) {
		return this.m_tours[e]?.stops || {};
	}
	ActivateTour(e) {
		if (this.m_strActiveTour && this.m_strActiveTour !== e) {
			this.DismissTour(this.m_strActiveTour);
		}
		this.m_strActiveTour = e;
	}
	DismissTour(e) {
		if (this.m_tours[e]) {
			this.MarkTourSeen(e);
			this.m_tours[e].bSeen = true;
			if (this.m_strActiveTour === e) {
				this.m_strActiveTour = "";
			}
		}
	}
	MarkTourSeen(e) {
		return C(this.m_storage, e, Date.now());
	}
	MarkTourUnseen(e) {
		return C(this.m_storage, e, undefined);
	}
}
(0, n.Cg)([d.sH], p.prototype, "m_tours", undefined);
(0, n.Cg)([d.sH], p.prototype, "m_strActiveTour", undefined);
(0, n.Cg)([d.sH], p.prototype, "m_bReady", undefined);
(0, n.Cg)([d.XI.bound], p.prototype, "UpdateStop", null);
(0, n.Cg)([d.XI], p.prototype, "ActivateTour", null);
(0, n.Cg)([d.XI], p.prototype, "DismissTour", null);
const g = "tour_history";
async function h(e) {
	const t = await e.GetObject(g);
	if (t && typeof t == "object") {
		return t;
	} else {
		return {};
	}
}
async function C(e, t, r) {
	const n = await h(e);
	return e.StoreObject(g, {
		...n,
		[t]: r,
	});
}
const _ = new p();
function f() {
	const e = (0, u.rX)();
	(0, i.useEffect)(() => {
		_.Init(e);
	}, [e]);
	return _;
}
function b(e) {
	const t = f();
	const { bShowTour: r, stopElems: n } = (0, A.q3)(() => ({
		bShowTour: !t.BHasSeenTour(e),
		stopElems: t.GetTrackedStops(e),
	}));
	return {
		bShowTour: r,
		stopElems: n,
		onInteraction: (0, i.useCallback)(() => t.MarkTourSeen(e), [t, e]),
		onDismiss: (0, i.useCallback)(() => t.DismissTour(e), [t, e]),
		onActivate: (0, i.useCallback)(() => t.ActivateTour(e), [t, e]),
		updateStop: t.UpdateStop,
	};
}
export function fX(e) {
	const { children: t } = e;
	return i.createElement(
		i.Fragment,
		null,
		t,
		i.createElement(S, {
			...e,
		}),
	);
}
function S(e) {
	const { active: t, name: r, stops: n } = e;
	const { bShowTour: s, onInteraction: c, onDismiss: m, stopElems: u } = b(r);
	const [d, A] = (0, i.useState)(0);
	if (!s || !t || d >= n.length) {
		return null;
	}
	const { id: p, title: g, content: h } = n[d];
	const C = u[p];
	if (!C || !C.elem) {
		return null;
	}
	let _ = h;
	if (Array.isArray(h)) {
		_ = h.map((e, t) =>
			i.createElement(
				"div",
				{
					key: t,
				},
				e,
			),
		);
	}
	return i.createElement(
		w,
		{
			...C,
		},
		i.createElement(
			B,
			{
				tour: r,
				title: g,
				onRequestClose: m,
			},
			_,
			i.createElement(
				"div",
				{
					className: a.Action,
				},
				n.length > 1 &&
					i.createElement(
						"div",
						{
							className: a.TipCount,
						},
						Localize("#Tour_TipCount", d + 1, n.length),
					),
				d < n.length - 1
					? i.createElement(
							o.jn,
							{
								onClick: () => {
									A(d + 1);
									c();
								},
							},
							Localize("#Button_Next"),
						)
					: i.createElement(
							o.jn,
							{
								onClick: m,
							},
							Localize("#Button_Done"),
						),
			),
		),
	);
}
function w(e) {
	const { elem: t, options: r, children: n } = e;
	const { ownerWindow: s } = (0, c.R7)();
	const o = t.getBoundingClientRect();
	const { style: l, position: u } = (function (e, t, r) {
		const { position: n, offset: i = 0 } = t;
		let a;
		let s = n;
		const o = 240;
		const l = 10;
		const c = o + l + i;
		if (
			(s === "left" && e.x < c) ||
			(s === "right" && r.innerWidth - (e.x + e.width) < c)
		) {
			s = "below";
		}
		switch (s) {
			case "left":
				a = {
					top: e.top,
					right: e.right + i,
					left: l,
					minWidth: o,
					flexDirection: "row",
					justifyContent: "flex-end",
				};
				break;
			case "right":
				a = {
					top: e.top,
					left: e.right + i,
					right: l,
					minWidth: o,
					flexDirection: "row",
					justifyContent: "flex-start",
				};
				break;
			case "above":
				a = {
					bottom: e.y + i,
					right: e.x,
					flexDirection: "column",
					justifyContent: "flex-end",
				};
				break;
			default:
				a = {
					top: e.y + e.height + i,
					left: e.x,
					flexDirection: "column",
					justifyContent: "flex-start",
				};
		}
		const m = {
			display: "flex",
		};
		return {
			style: {
				...a,
				...m,
			},
			position: s,
		};
	})(o, r, s);
	return (0, m.createPortal)(
		i.createElement(
			"div",
			{
				className: a.TourPositioner,
				style: l,
			},
			i.createElement(I, {
				position: u,
				targetRect: o,
			}),
			n,
		),
		s.document.body,
	);
}
function B(e) {
	const { tour: t, title: r, onRequestClose: n, children: o } = e;
	const { onActivate: l } = b(t);
	(0, i.useEffect)(() => l(), [l]);
	return i.createElement(
		"div",
		{
			className: a.TourBox,
		},
		i.createElement(
			"div",
			{
				onClick: n,
				className: a.CloseButton,
			},
			i.createElement(s.sED, {
				className: a.X,
			}),
		),
		i.createElement(
			"div",
			{
				className: a.Title,
			},
			r,
		),
		i.createElement(
			"div",
			{
				className: a.Content,
			},
			o,
		),
	);
}
export function dD(e) {
	const { name: t, tour: r, options: n, children: a } = e;
	const { updateStop: s } = b(r);
	const o = (0, i.useCallback)((e) => s(r, t, n, e), [s, r, t]);
	return (0, i.cloneElement)(i.Children.only(a), {
		ref: o,
	});
}
function I(e) {
	const { position: t, targetRect: r } = e;
	return i.createElement("div", {
		className: a.TourStopArrow,
		style: E(t, r),
	});
}
function E(e, t) {
	const r = {
		width: "20px",
		height: "20px",
	};
	const n = 10;
	switch (e) {
		case "right":
			r.left = "-10px";
			r.top = `${Math.max(t.height / 2 - n, n)}px`;
			break;
		case "left":
			r.right = "-10px";
			r.top = `${Math.max(t.height / 2 - n, n)}px`;
			break;
		case "above":
			r.bottom = "-10px";
			r.left = `${Math.max(t.width / 2 - n, n)}px`;
			break;
		case "below":
			r.top = "-10px";
			r.left = `${Math.max(t.width / 2 - n, n)}px`;
	}
	return r;
}
export function zB() {
	const e = f();
	return (0, i.useCallback)((t) => e.MarkTourUnseen(t), [e]);
}
