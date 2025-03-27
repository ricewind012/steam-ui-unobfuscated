import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { useEffect, useCallback, useState, cloneElement } from "./63696.js";
import a from "./23690.js";
import s from "./50376.js";
import o from "./64608.js";
import c, { R7 } from "./11131.js";
import m, { createPortal } from "./78325.js";
import u, { rX } from "./46382.js";
import d, { Gn } from "./89193.js";
import A, { q3 } from "./90095.js";
class p {
	m_tours = {};
	m_strActiveTour = "";
	m_storage;
	m_bReady = false;
	constructor() {
		Gn(this);
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
Cg([d.sH], p.prototype, "m_tours", undefined);
Cg([d.sH], p.prototype, "m_strActiveTour", undefined);
Cg([d.sH], p.prototype, "m_bReady", undefined);
Cg([d.XI.bound], p.prototype, "UpdateStop", null);
Cg([d.XI], p.prototype, "ActivateTour", null);
Cg([d.XI], p.prototype, "DismissTour", null);
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
	const e = rX();
	useEffect(() => {
		_.Init(e);
	}, [e]);
	return _;
}
function b(e) {
	const t = f();
	const { bShowTour, stopElems } = q3(() => ({
		bShowTour: !t.BHasSeenTour(e),
		stopElems: t.GetTrackedStops(e),
	}));
	return {
		bShowTour: bShowTour,
		stopElems: stopElems,
		onInteraction: useCallback(() => t.MarkTourSeen(e), [t, e]),
		onDismiss: useCallback(() => t.DismissTour(e), [t, e]),
		onActivate: useCallback(() => t.ActivateTour(e), [t, e]),
		updateStop: t.UpdateStop,
	};
}
export function fX(e) {
	const { children } = e;
	return (
		<>
			{children}
			<S {...e} />
		</>
	);
}
function S(e) {
	const { active, name, stops } = e;
	const { bShowTour, onInteraction, onDismiss, stopElems } = b(name);
	const [d, setD] = useState(0);
	if (!bShowTour || !active || !active || d >= stops.length) {
		return null;
	}
	const { id, title, content } = stops[d];
	const u_p = stopElems[p];
	if (!u_p || !u_p.elem) {
		return null;
	}
	let _ = content;
	if (Array.isArray(content)) {
		_ = content.map((e, t) => <div key={t}>{e}</div>);
	}
	return (
		<W {...u_p}>
			<B tour={name} title={title} onRequestClose={onDismiss}>
				{_}
				<div className={a.Action}>
					{stops.length > 1 && (
						<div className={a.TipCount}>
							{Localize("#Tour_TipCount", d + 1, stops.length)}
						</div>
					)}
					{d < stops.length - 1 ? (
						<o.jn
							onClick={() => {
								setD(d + 1);
								onInteraction();
							}}
						>
							{Localize("#Button_Next")}
						</o.jn>
					) : (
						<o.jn onClick={onDismiss}>{Localize("#Button_Done")}</o.jn>
					)}
				</div>
			</B>
		</W>
	);
}
function W(e) {
	const { elem, options, children } = e;
	const { ownerWindow } = R7();
	const o = elem.getBoundingClientRect();
	const { style, position } = ((e, t, r) => {
		const { position: position_1, offset = 0 } = t;
		let a;
		let s = position_1;
		const o = 240;
		const l = 10;
		const c = o + l + offset;
		if (
			(s === "left" && e.x < c) ||
			(s === "right" && r.innerWidth - (e.x + e.width) < c)
		) {
			s = "below";
		}
		switch (s) {
			case "left": {
				a = {
					top: e.top,
					right: e.right + offset,
					left: l,
					minWidth: o,
					flexDirection: "row",
					justifyContent: "flex-end",
				};
				break;
			}
			case "right": {
				a = {
					top: e.top,
					left: e.right + offset,
					right: l,
					minWidth: o,
					flexDirection: "row",
					justifyContent: "flex-start",
				};
				break;
			}
			case "above": {
				a = {
					bottom: e.y + offset,
					right: e.x,
					flexDirection: "column",
					justifyContent: "flex-end",
				};
				break;
			}
			default: {
				a = {
					top: e.y + e.height + offset,
					left: e.x,
					flexDirection: "column",
					justifyContent: "flex-start",
				};
			}
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
	})(o, options, ownerWindow);
	return createPortal(
		<div className={a.TourPositioner} style={style}>
			<I position={position} targetRect={o} />
			{children}
		</div>,
		ownerWindow.document.body,
	);
}
function B(e) {
	const { tour, title, onRequestClose, children } = e;
	const { onActivate } = b(tour);
	useEffect(() => onActivate(), [onActivate]);
	return (
		<div className={a.TourBox}>
			<div onClick={onRequestClose} className={a.CloseButton}>
				<s.sED className={a.X} />
			</div>
			<div className={a.Title}>{title}</div>
			<div className={a.Content}>{children}</div>
		</div>
	);
}
export function dD(e) {
	const { name, tour, options, children } = e;
	const { updateStop } = b(tour);
	const o = useCallback(
		(e) => updateStop(tour, name, options, e),
		[updateStop, tour, name],
	);
	return cloneElement(i.Children.only(children), {
		ref: o,
	});
}
function I(e) {
	const { position, targetRect } = e;
	return <div className={a.TourStopArrow} style={E(position, targetRect)} />;
}
function E(e, t) {
	const r = {
		width: "20px",
		height: "20px",
	};
	const n = 10;
	switch (e) {
		case "right": {
			r.left = "-10px";
			r.top = `${Math.max(t.height / 2 - n, n)}px`;
			break;
		}
		case "left": {
			r.right = "-10px";
			r.top = `${Math.max(t.height / 2 - n, n)}px`;
			break;
		}
		case "above": {
			r.bottom = "-10px";
			r.left = `${Math.max(t.width / 2 - n, n)}px`;
			break;
		}
		case "below": {
			r.top = "-10px";
			r.left = `${Math.max(t.width / 2 - n, n)}px`;
		}
	}
	return r;
}
export function zB() {
	const e = f();
	return useCallback((t) => e.MarkTourUnseen(t), [e]);
}
