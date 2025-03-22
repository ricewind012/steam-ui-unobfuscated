var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./43691.js");
var a = require("./83247.js");
var s = require(/*webcrack:missing*/ "./72476.js");
const o = "steam_";
var l;
function c(e) {
	switch (e) {
		default:
		case l.White:
			return "#DCDEDF";
		case l.Red:
			return "#FB7C7C";
		case l.Orange:
			return "#FBB17C";
		case l.Yellow:
			return "#FBDF7C";
		case l.Green:
			return "#9DFB7C";
		case l.Blue:
			return "#7CD5FB";
		case l.Purple:
			return "#A57CFB";
		case l.Brown:
			return "#C18C5B";
		case l.Gray:
			return "#B8BCBF";
	}
}
function m(e) {
	return Object.keys(e).filter((e) => !Number.isNaN(e));
}
(function (e) {
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
		if ((0, s.Y2)()) {
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
var h = require(/*webcrack:missing*/ "./90765.js");
var C = require("./91720.js");
var _ = require("./76835.js");
var f = require("./92374.js");
var b = require("./67429.js");
var y = require("./54362.js");
var S = require("./25554.js");
export function Wo(e) {
	let {
		entry: t,
		strMarkerIcon: r,
		onClick: i,
		onMouseEnter: a,
		onMouseLeave: s,
		onContextMenu: o,
		classNames: l,
		style: c,
		faded: m,
		bSelectedMarker: u,
	} = e;
	return n.createElement(
		"div",
		{
			style: c ?? {},
			className: (0, h.A)(l, {
				[S.HighlightIcon]: true,
				[S.Selected]: u,
				[S.Faded]: m,
			}),
			onClick: (e) => {
				if (i) {
					i(e);
				}
			},
			onContextMenu: o,
			onMouseEnter: a,
			onMouseLeave: s,
		},
		n.createElement(Zo, {
			entry: t,
			strMarkerIcon: r,
		}),
	);
}
export function Zo(e) {
	let { entry: t, strMarkerIcon: r } = e;
	const i = (0, f.aO)().GetGameID();
	if ((0, _.xz)(t)) {
		return n.createElement(v, {
			achievementEntry: t,
			strGameID: i,
		});
	} else if ((0, _.In)(t)) {
		return n.createElement(M, null);
	} else if (g(r)) {
		return n.createElement(I, {
			entry: t,
			strMarkerIcon: r,
		});
	} else {
		return n.createElement(T, {
			strMarkerIcon: r,
			strGameID: i,
		});
	}
}
function v(e) {
	const { achievementEntry: t, strGameID: r } = e;
	const i = new b.VS(r);
	const s = (0, C.dd)(i.GetAppID(), t.achievement_name);
	let o;
	let m;
	if (s) {
		o = "white";
		m = n.createElement("img", {
			src: s.iconURL,
		});
	} else {
		const e = {
			func: a.Oi,
			color: l.White,
		};
		o = c(e.color);
		m = e.func({});
	}
	return n.createElement(
		"div",
		{
			className: S.Marker,
			style: {
				color: o,
			},
		},
		m,
	);
}
function I(e) {
	const { entry: t, strMarkerIcon: r } = e;
	let i;
	let s;
	if ((0, _.N$)(t)) {
		i = {
			func: a.pH,
			color: l.Blue,
		};
		s = S.CustomMarker;
	} else {
		i = A(r);
	}
	const o = c(i.color);
	return n.createElement(
		k,
		{
			color: o,
		},
		n.createElement(
			"div",
			{
				className: s,
			},
			i.func({}),
		),
	);
}
function E(e) {
	const { icon: t, className: r } = e;
	return A(t).func({
		className: r,
	});
}
function M(e) {
	const t = A("steam_invalid");
	const r = c(t.color);
	return n.createElement(
		k,
		{
			color: r,
		},
		n.createElement("div", null, t.func({})),
	);
}
function T(e) {
	const { strMarkerIcon: t, strGameID: r } = e;
	return n.createElement(
		k,
		null,
		n.createElement(XR, {
			icon: t,
			gameID: r,
		}),
	);
}
export function XR(e) {
	const { icon: t, gameID: r, className: i } = e;
	const a = new b.VS(r).GetAppID();
	const s = (0, y.T)(a, t);
	if (g(t)) {
		return n.createElement(E, {
			...e,
		});
	}
	if (s === null) {
		return null;
	}
	if (s === undefined) {
		const e = p();
		return n.createElement(
			"div",
			{
				className: i,
			},
			e.func({}),
		);
	}
	let o = "";
	o = typeof s != "string" ? new XMLSerializer().serializeToString(s) : s;
	return n.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			className: (0, h.A)(i, S.GameMarkerSVG),
		},
		n.createElement("g", {
			dangerouslySetInnerHTML: {
				__html: o,
			},
		}),
	);
}
function k(e) {
	const { children: t, color: r } = e;
	return n.createElement(
		"div",
		{
			className: S.MarkerCtn,
		},
		n.createElement(
			"div",
			{
				className: S.Marker,
				style: r
					? {
							color: r,
						}
					: null,
			},
			t,
		),
	);
}
