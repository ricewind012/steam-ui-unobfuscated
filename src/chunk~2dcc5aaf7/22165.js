var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./31958.js");
var a = require(/*webcrack:missing*/ "./44846.js");
var s = require("./12767.js");
import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
var l = require("./47801.js");
var c = require("./88244.js");
var m = require("./87935.js");
var u = require("./1965.js");
var d = require(/*webcrack:missing*/ "./31084.js");
var A = require(/*webcrack:missing*/ "./88750.js");
var p = require("./94715.js");
var g = require("./34792.js");
var h = require(/*webcrack:missing*/ "./98995.js");
var C = require(/*webcrack:missing*/ "./90765.js");
const _ =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAEFCAYAAAD60+tkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALuSURBVHhe7dMxAcAwDMCwdCjDn0j7jIMf6TECn929AyS+v0DAgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwImZkHnS8EEZhTJo8AAAAASUVORK5CYII=";
var f = require("./60712.js");
var b = f;
var y = require(/*webcrack:missing*/ "./69164.js");
var S = require("./26271.js");
var w = require("./43520.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var v = require("./38731.js");
var I = v;
var E = require(/*webcrack:missing*/ "./99251.js");
const M = 224 / 261;
export function dI(e) {
	const {
		className: t,
		bMaxed: r,
		bClickable: l,
		data: c,
		animateHover: u,
	} = e;
	const h = c.nOwned > 0 || r;
	let f = e.cardScale ?? (h ? 2.5 : 1.5);
	const {
		hoverActive: b,
		wrapperProps: S,
		cardProps: w,
		containerProps: v,
		imageProps: T,
		shineElements: R,
	} = (function (e, t, r) {
		const [a, s] = n.useState(false);
		const [o, l] = n.useState(0);
		const [c, m] = n.useState(0);
		const [u, d] = n.useState(0);
		const [A, p] = n.useState(0);
		const g = A / M;
		const h = A * t;
		const C = g * t;
		const _ = (0, E.wY)((e) => {
			p(e.contentRect.width);
		});
		let f = {
			transform: "rotate3D( 0, 0, 0, 0deg)",
		};
		let b = "";
		let y = 1;
		let S = 1;
		let w = 1;
		function B(e) {
			return 1 / (1 + Math.pow(Math.E, -e));
		}
		n.useEffect(() => {
			s(false);
			l(0);
			m(0);
			d(0);
		}, [r]);
		const v = n.useCallback(
			(e) => {
				let t = i.Fu(e.offsetX, 0, h, -1, 1);
				let r = i.Fu(e.offsetY, 0, C, 1, -1);
				t = B(t);
				r = B(r);
				t = i.Fu(t, 0, 1, -45, 45);
				r = i.Fu(r, 0, 1, -45, 45);
				l(t);
				m(r);
			},
			[h, C],
		);
		const T = n.useCallback(
			(e) => {
				const r = e.currentTarget.ownerDocument.defaultView;
				if (!a) {
					let n = e.currentTarget.getBoundingClientRect();
					let i = n.left + n.width / 2 + (n.width * t) / 2;
					const a = 30;
					if (i > r.innerWidth - a) {
						d(r.innerWidth - i - a);
					} else {
						d(0);
					}
				}
				s(true);
				r.addEventListener("mousemove", v);
			},
			[v, a, t],
		);
		const R = n.useCallback(
			(e) => {
				e.currentTarget.ownerDocument.defaultView.removeEventListener(
					"mousemove",
					v,
				);
				s(false);
			},
			[v],
		);
		if (a) {
			f = {
				transform: "rotateX(" + c + "deg) rotateY(" + o + "deg)",
			};
			b = "brightness(" + i.Fu(c, -45, 45, 0, 2) + ")";
			y = i.Fu(o, -45, 45, -1, 1);
			S = i.Fu(o, -45, 45, 1, -1);
			w = i.Fu(c, -45, 45, -1, 1);
		}
		const k = {
			transform: `scale(${1 / t})`,
			width: h,
			height: C,
			left: ((h - A) * -1) / 2,
			top: ((C - g) * -1) / 2,
		};
		if (e && a) {
			let e = "scale(1.0)";
			if (u) {
				e = `translateX(${u}px) ${e}`;
			}
			k.transform = e;
		}
		const D = n.createElement(
			n.Fragment,
			null,
			n.createElement(
				"div",
				{
					className: I.CardShineContainer_W,
					style: {
						opacity: y,
					},
				},
				n.createElement("div", {
					className: I.CardShine,
					style: {
						left: -o * 2,
						top: c * 2,
					},
				}),
			),
			n.createElement(
				"div",
				{
					className: I.CardShineContainer_E,
					style: {
						opacity: S,
					},
				},
				n.createElement("div", {
					className: I.CardShine,
					style: {
						left: -o * 2,
						top: c * 2,
					},
				}),
			),
			n.createElement(
				"div",
				{
					className: I.CardShineContainer_S,
					style: {
						opacity: w,
					},
				},
				n.createElement("div", {
					className: I.CardShine,
					style: {
						left: -o * 2,
						top: c * 2,
					},
				}),
			),
		);
		return {
			hoverActive: a,
			wrapperProps: {
				ref: _,
				style: {
					height: g,
				},
			},
			cardProps: {
				onMouseEnter: e ? T : undefined,
				onMouseLeave: e ? R : undefined,
				style: k,
			},
			containerProps: {
				style: f,
			},
			imageProps: {
				filterStyle: b,
			},
			shineElements: D,
		};
	})(u, f, c.strMarketHash);
	let k = c.strImgURL;
	const [D] = g.rV.GetClientSetting("library_low_bandwidth_mode");
	if (D) {
		k += "/100x100";
	}
	if (b) {
		k = c.strImgURL;
	}
	const [N, F, G, O] = (function (e) {
		const [t, r] = n.useState(true);
		const [i, a] = n.useState(false);
		n.useEffect(() => {
			r(true);
			a(false);
		}, [e]);
		const s = n.useCallback((e) => {
			r(false);
		}, []);
		const o = n.useCallback((e, t, n) => {
			r(false);
			a(true);
		}, []);
		let l = I.Loaded;
		if (t) {
			l = I.Loading;
		} else if (i) {
			l = I.LoadFailed;
		}
		return [l, i, s, o];
	})(k);
	const P = n.useCallback(
		(e) =>
			(0, p.N)({
				strURL: c.strArtworkURL,
				strTitle: c.strTitle,
				windowOverride: GetOwningWindowForEvent(e),
			}),
		[c.strArtworkURL, c.strTitle],
	);
	const L = n.useCallback(
		(e) => {
			if (c.strMarketHash) {
				const t = (e) => {
					GetOwningWindowForEvent(e).location.href = m.B7.BuildSteamURL(
						"CommunityMarketSearch",
						a.cw,
						encodeURIComponent(c.strMarketHash),
					);
				};
				(0, d.lX)(
					n.createElement(
						A.tz,
						null,
						n.createElement(
							A.kt,
							{
								onSelected: t,
							},
							(0, Localize)("#AppDetails_SearchCard"),
						),
					),
					e,
				);
			}
		},
		[c.strMarketHash],
	);
	return n.createElement(
		"div",
		{
			...S,
			className: (0, C.A)(
				I.CardWrapper,
				h ? I.Owned : I.Unowned,
				u && I.AnimateHover,
			),
		},
		n.createElement(
			y.Z,
			{
				...w,
				focusable: true,
				className: (0, C.A)(
					t,
					N,
					I.Card,
					h ? I.Owned : I.Unowned,
					(h || l) && I.Clickable,
					u && I.AnimateHover,
				),
				onActivate: l || h ? P : undefined,
				onContextMenu: L,
			},
			n.createElement(
				"div",
				{
					...v,
					className: I.CardContainer,
				},
				n.createElement(s.c, {
					style: {
						filter:
							"saturate(" +
							(h ? "1" : b ? "0.3" : "0.1") +
							") " +
							T.filterStyle,
					},
					className: I.CardImage,
					rgSources: [k, _],
					onLoad: G,
					onIncrementalError: O,
					alt: c.strTitle,
				}),
				F &&
					n.createElement(
						"div",
						{
							className: I.Title,
						},
						c.strTitle,
					),
				R,
			),
		),
	);
}
function R(e, t) {
	GetOwningWindowForEvent(e).location.href = m.B7.BuildSteamURL(
		"SteamIDAppTradingCardsPage",
		t,
	);
}
export function LB(e) {
	const {
		details: { unAppID: t },
	} = e;
	const r = (0, l.H_)(t);
	if (!r.rgCards) {
		return null;
	}
	const i = r.rgCards.map((e) =>
		n.createElement(dI, {
			key: e.strMarketHash,
			bMaxed: r.bMaxed,
			bClickable: r.nLevel > 0,
			data: e,
			animateHover: true,
		}),
	);
	let a = n.createElement(
		"span",
		{
			className: I.Highlight,
		},
		(0, Localize)("#AppDetails_TradingCards_Tooltip1"),
	);
	let s = n.createElement(
		"span",
		{
			className: I.Highlight,
		},
		(0, Localize)("#AppDetails_TradingCards_Tooltip2"),
	);
	let m = n.createElement(
		h.t1,
		null,
		n.createElement(h.MA, null, a),
		n.createElement("br", null),
		n.createElement(h.MA, null, s),
	);
	const d = c.o.rightPanelWidth;
	let A = "";
	if (d >= parseInt(b.RightBreakNarrow) + 42) {
		A = I.SlightlyLargerThanNarrow;
	}
	if (d >= parseInt(b.RightBreakNarrow) + 242) {
		A = I.BetweenNarrowAndMedium;
	}
	return n.createElement(
		u.n,
		{
			feature: 3,
			primaryAction: {
				label: (0, Localize)("#AppDetails_ViewTradingCards"),
				action: (e) => R(e, t),
			},
			className: (0, C.A)(I.Container, A),
			label: (0, Localize)("#AppDetails_SectionTitle_TradingCards"),
			tooltip: m,
			highlight: n.createElement(D, {
				appid: t,
				badge: r,
			}),
			rightColumnSection: true,
		},
		n.createElement(
			u.n.Body,
			null,
			n.createElement(N, {
				appid: t,
				badge: r,
			}),
			n.createElement(
				"div",
				{
					className: I.CardsSection,
				},
				i,
			),
		),
	);
}
function D(e) {
	const {
		appid: t,
		badge: {
			nLevel: r,
			strIconURL: i,
			strName: a,
			strNextLevelName: s,
			nNextLevelXP: l,
			nXP: c,
		},
	} = e;
	const m = (e) => R(e, t);
	const p =
		r == 0
			? n.createElement(
					n.Fragment,
					null,
					n.createElement("div", {
						className: (0, C.A)(I.Badge, I.EmptyCircle),
					}),
					n.createElement(
						"div",
						{
							className: I.BadgeInfo,
						},
						n.createElement(
							"div",
							{
								className: I.BadgeName,
							},
							s,
						),
						n.createElement(
							"div",
							{
								className: I.BadgeLevel,
							},
							(0, Localize)("#AppDetails_UnearnedBadgeXP", l),
						),
					),
				)
			: n.createElement(
					n.Fragment,
					null,
					n.createElement("img", {
						className: I.Badge,
						src: i,
						onClick: m,
					}),
					n.createElement(
						"div",
						{
							className: I.BadgeInfo,
						},
						n.createElement(
							"div",
							{
								className: I.BadgeName,
							},
							a,
						),
						n.createElement(
							"div",
							{
								className: I.BadgeLevel,
							},
							(0, Localize)("#AppDetails_BadgeLevel", r, c),
						),
					),
				);
	return n.createElement(
		u.n.Highlight,
		{
			className: I.BadgeSection,
			onContextMenu: (e) =>
				(0, d.lX)(
					n.createElement(
						A.tz,
						null,
						n.createElement(
							A.kt,
							{
								onSelected: m,
							},
							(0, Localize)("#AppDetails_ViewBadgePage"),
						),
					),
					e,
				),
		},
		p,
	);
}
function N(e) {
	const {
		appid: t,
		badge: { rgCards: r, bMaxed: i },
	} = e;
	if (r.length === 0) {
		return null;
	}
	const a = r.reduce((e, t) => (i || t.nOwned !== 0 ? e : e + 1), 0);
	if (a > 0) {
		return n.createElement(
			"div",
			{
				className: I.CardsLeft,
			},
			LocalizePlural("#AppDetails_TradingCardsLeft", a),
		);
	} else if (a != 0 || i) {
		return n.createElement(
			"div",
			{
				className: (0, C.A)(I.CardsLeft, I.BadgeMaxed),
			},
			(0, Localize)("#AppDetails_TradingCardsMaxed"),
		);
	} else {
		return n.createElement(
			"div",
			{
				className: (0, C.A)(I.CardsLeft, I.CanLevelUp),
				onClick: (e) => R(e, t),
			},
			(0, Localize)("#AppDetails_TradingCardsLevelUp"),
		);
	}
}
export function on(e) {
	const {
		details: { unAppID: t },
	} = e;
	const r = (0, l.H_)(t);
	if (!r.rgCards) {
		return null;
	}
	const [i, a] = r.rgCards.reduce(
		([e, t], r) => {
			if (r.nOwned > 0) {
				e.push(r);
			} else {
				t.push(r);
			}
			return [e, t];
		},
		[[], []],
	);
	return n.createElement(
		u.n,
		{
			feature: 3,
			className: (0, C.A)(I.Container),
			label: (0, Localize)("#AppDetails_SectionTitle_TradingCards"),
			highlight: n.createElement(D, {
				appid: t,
				badge: r,
			}),
			rightColumnSection: true,
		},
		n.createElement(
			u.n.Body,
			null,
			n.createElement(G, {
				cards: i,
			}),
			n.createElement(N, {
				appid: t,
				badge: r,
			}),
			n.createElement(G, {
				cards: a,
			}),
		),
	);
}
function G(e) {
	const { cards: t } = e;
	const r = (0, w.S1)();
	return n.createElement(
		w.VJ,
		null,
		n.createElement(
			y.Z,
			{
				"flow-children": "row",
			},
			n.createElement(
				S.Q,
				{
					className: I.SummaryCarouselContainer,
					leftMargin: 32,
					edgeMask: "none",
					fnUpdateArrows: () => {},
					fnRenderScrollingDiv: ({ htmlElementRef: e, ...t }) =>
						n.createElement("div", {
							...t,
							ref: e,
							style: r,
						}),
				},
				t.map((e) =>
					n.createElement(O, {
						key: e.strName,
						card: e,
					}),
				),
				n.createElement("div", {
					style: {
						width: "16px",
					},
					"data-carousel": "ignore",
				}),
			),
		),
	);
}
function O(e) {
	const { card: t } = e;
	const r = t.nOwned > 0;
	return n.createElement(
		y.Z,
		{
			focusable: !r,
			focusClassName: I.Focused,
			className: (0, C.A)(I.TradingCardCarouselItem, r ? I.Owned : I.Unowned),
			onOKActionDescription: r ? undefined : null,
		},
		n.createElement(dI, {
			data: t,
			animateHover: false,
			bMaxed: false,
		}),
	);
}
