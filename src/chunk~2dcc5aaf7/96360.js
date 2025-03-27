import n from "./63696.js";
import i from "./43691.js";
import a from "./83247.js";
import s, { Y2 } from "./72476.js";
import { A as A_1 } from "./90765.js";
import { dd } from "./91720.js";
import { xz, In, N$ } from "./76835.js";
import { aO } from "./92374.js";
import b from "./67429.js";
import { T as T_1 } from "./54362.js";
import S from "./25554.js";
const o = "steam_";
let l;
function c(e) {
	switch (e) {
		default:
		case l.White: {
			return "#DCDEDF";
		}
		case l.Red: {
			return "#FB7C7C";
		}
		case l.Orange: {
			return "#FBB17C";
		}
		case l.Yellow: {
			return "#FBDF7C";
		}
		case l.Green: {
			return "#9DFB7C";
		}
		case l.Blue: {
			return "#7CD5FB";
		}
		case l.Purple: {
			return "#A57CFB";
		}
		case l.Brown: {
			return "#C18C5B";
		}
		case l.Gray: {
			return "#B8BCBF";
		}
	}
}
function m(e) {
	return Object.keys(e).filter((e) => !Number.isNaN(e));
}
((e) => {
	e[(e.White = 0)] = "White";
	e[(e.Red = 1)] = "Red";
	e[(e.Orange = 2)] = "Orange";
	e[(e.Yellow = 3)] = "Yellow";
	e[(e.Green = 4)] = "Green";
	e[(e.Blue = 5)] = "Blue";
	e[(e.Purple = 6)] = "Purple";
	e[(e.Brown = 7)] = "Brown";
	e[(e.Gray = 8)] = "Gray";
})((l ||= {}));
const u = m(l).map((e) => l[e]);
class d {
	m_mapSteamTimelineMarkers = new Map();
	GetMarkerByID(e) {
		const t = e.toLowerCase().startsWith(o)
			? e.slice(o.length).toLowerCase()
			: e.toLowerCase();
		if (this.m_mapSteamTimelineMarkers.has(t)) {
			return this.m_mapSteamTimelineMarkers.get(t);
		}
		const r = parseInt(t);
		if (typeof r == "number" && r >= 0 && r <= 99) {
			return {
				func: (e) =>
					a.wN({
						nNumber: r,
					}),
				color: l.Gray,
			};
		} else {
			return p();
		}
	}
	GetAllUseableMarkerID() {
		return Array.from(this.m_mapSteamTimelineMarkers.keys()).map((e) => o + e);
	}
	static s_Singleton;
	static Get() {
		if (!d.s_Singleton) {
			d.s_Singleton = new d();
			d.s_Singleton.Init();
			if (i.TS.WEB_UNIVERSE == "dev") {
				window.g_SteamTimelineMarker = d.s_Singleton;
			}
		}
		return d.s_Singleton;
	}
	AddMarker(e, t, r) {
		const n = r ?? l.White;
		this.m_mapSteamTimelineMarkers.set(e, {
			func: t,
			color: n,
		});
		for (const r of u) {
			const n = `${e}_${l[r]}`.toLowerCase();
			this.m_mapSteamTimelineMarkers.set(n, {
				func: t,
				color: r,
			});
		}
	}
	Init() {
		this.AddMarker("explosion", a.Wq, l.Gray);
		this.AddMarker("attack", a.LB, l.Gray);
		this.AddMarker("defend", a.po, l.Gray);
		this.AddMarker("combat", a.t4, l.Gray);
		this.AddMarker("chest", a.k8, l.Gray);
		this.AddMarker("view", a.Ss, l.Gray);
		if (Y2()) {
			this.AddMarker("death", a.X, l.Gray);
		} else {
			this.AddMarker("death", a.lQ, l.Gray);
		}
		this.AddMarker("x", a.X, l.Gray);
		this.AddMarker("plus", a.FW, l.Gray);
		this.AddMarker("minus", a.Hs, l.Gray);
		this.AddMarker("info", a.R2, l.Gray);
		this.AddMarker("bolt", a.y$, l.Gray);
		this.AddMarker("caution", a.eT, l.Gray);
		this.AddMarker("completed", a.AY, l.Gray);
		this.AddMarker("checkmark", a.MG, l.Gray);
		this.AddMarker("effect", a.Mj, l.Gray);
		this.AddMarker("purchase", a.QY, l.Gray);
		this.AddMarker("ribbon", a.y4, l.Gray);
		this.AddMarker("scroll", a.OY, l.Gray);
		this.AddMarker("crown", a.Oe, l.Gray);
		this.AddMarker("starburst", a.bL, l.Gray);
		this.AddMarker("flag", a.lN, l.Gray);
		this.AddMarker("cart", a.Z3, l.Gray);
		this.AddMarker("timer", a.M4, l.Gray);
		this.AddMarker("chat", a.ry, l.Gray);
		this.AddMarker("wrench", a.Ml, l.Gray);
		this.AddMarker("transfer", a.mr, l.Gray);
		this.AddMarker("edit", a.ff, l.Gray);
		this.AddMarker("bookmark", a.Xh, l.Gray);
		this.AddMarker("invalid", a.WO, l.Gray);
		this.AddMarker("star", a.FE, l.Gray);
		this.AddMarker("circle", a.jl, l.Gray);
		this.AddMarker("square", a.M6, l.Gray);
		this.AddMarker("triangle", a.lM, l.Gray);
		this.AddMarker("heart", a.B1, l.Gray);
		this.AddMarker("diamond", a.JB, l.Gray);
		this.AddMarker("gem", a.gD, l.Gray);
		this.AddMarker("group", a.YJ, l.Gray);
		this.AddMarker("pair", a.Rm, l.Gray);
		this.AddMarker("single", a.KJ, l.Gray);
		this.AddMarker("trophy", a.Oi, l.Gray);
		this.AddMarker("achievement", a.Oi, l.Gray);
		this.AddMarker("screenshot", a.pw, l.Gray);
		this.AddMarker("bug", a.zP, l.Gray);
		this.AddMarker("fix", a.Ml, l.Gray);
		this.AddMarker("person", a.KJ, l.Gray);
		this.AddMarker("question", a.O_, l.Gray);
	}
}
function A(e) {
	return d.Get().GetMarkerByID(e);
}
function p() {
	return {
		func: a.pH,
		color: l.Gray,
	};
}
function g(e) {
	return e && e.toLowerCase().startsWith(o);
}
export function Wo(e) {
	let {
		entry,
		strMarkerIcon,
		onClick,
		onMouseEnter,
		onMouseLeave,
		onContextMenu,
		classNames,
		style,
		faded,
		bSelectedMarker,
	} = e;
	return (
		<div
			style={style ?? {}}
			className={A_1(classNames, {
				[S.HighlightIcon]: true,
				[S.Selected]: bSelectedMarker,
				[S.Faded]: faded,
			})}
			onClick={(e) => {
				if (onClick) {
					onClick(e);
				}
			}}
			onContextMenu={onContextMenu}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Zo entry={entry} strMarkerIcon={strMarkerIcon} />
		</div>
	);
}
export function Zo(e) {
	let { entry, strMarkerIcon } = e;
	const i = aO().GetGameID();
	if (xz(entry)) {
		return <V achievementEntry={entry} strGameID={i} />;
	} else if (In(entry)) {
		return <M />;
	} else if (g(strMarkerIcon)) {
		return <I entry={entry} strMarkerIcon={strMarkerIcon} />;
	} else {
		return <T strMarkerIcon={strMarkerIcon} strGameID={i} />;
	}
}
function V(e) {
	const { achievementEntry, strGameID } = e;
	const i = new b.VS(strGameID);
	const s = dd(i.GetAppID(), achievementEntry.achievement_name);
	let o;
	let m;
	if (s) {
		o = "white";
		m = <img src={s.iconURL} />;
	} else {
		const e = {
			func: a.Oi,
			color: l.White,
		};
		o = c(e.color);
		m = e.func({});
	}
	return (
		<div
			className={S.Marker}
			style={{
				color: o,
			}}
		>
			{m}
		</div>
	);
}
function I(e) {
	const { entry, strMarkerIcon } = e;
	let i;
	let s;
	if (N$(entry)) {
		i = {
			func: a.pH,
			color: l.Blue,
		};
		s = S.CustomMarker;
	} else {
		i = A(strMarkerIcon);
	}
	const o = c(i.color);
	return (
		<K color={o}>
			<div className={s}>{i.func({})}</div>
		</K>
	);
}
function E(e) {
	const { icon, className } = e;
	return A(icon).func({
		className: className,
	});
}
function M(e) {
	const t = A("steam_invalid");
	const r = c(t.color);
	return (
		<K color={r}>
			<div>{t.func({})}</div>
		</K>
	);
}
function T(e) {
	const { strMarkerIcon, strGameID } = e;
	return (
		<K>
			<XR icon={strMarkerIcon} gameID={strGameID} />
		</K>
	);
}
export function XR(e) {
	const { icon, gameID, className } = e;
	const a = new b.VS(gameID).GetAppID();
	const s = T_1(a, icon);
	if (g(icon)) {
		return <E {...e} />;
	}
	if (s === null) {
		return null;
	}
	if (s === undefined) {
		const e = p();
		return <div className={className}>{e.func({})}</div>;
	}
	let o = "";
	o = typeof s != "string" ? new XMLSerializer().serializeToString(s) : s;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 36"
			className={A_1(className, S.GameMarkerSVG)}
		>
			<g
				dangerouslySetInnerHTML={{
					__html: o,
				}}
			/>
		</svg>
	);
}
function K(e) {
	const { children, color } = e;
	return (
		<div className={S.MarkerCtn}>
			<div
				className={S.Marker}
				style={
					color
						? {
								color: color,
							}
						: null
				}
			>
				{children}
			</div>
		</div>
	);
}
