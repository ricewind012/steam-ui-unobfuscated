var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./3475.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require("./1965.js");
import { Localize } from "../../actual_src/utils/localization.js";
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require("./47801.js");
var A = require("./87935.js");
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require(/*webcrack:missing*/ "./44846.js");
var h = require(/*webcrack:missing*/ "./88750.js");
var C = require(/*webcrack:missing*/ "./90242.js");
var _ = require(/*webcrack:missing*/ "./50376.js");
var f = require("./60712.js");
var b = f;
var y = require("./21154.js");
var S = y;
var w = require(/*webcrack:missing*/ "./31084.js");
var B = require(/*webcrack:missing*/ "./69164.js");
var v = require("./26271.js");
var I = require("./43520.js");
var E = require("./5640.js");
var M = require("./18057.js");
var T = require("./28934.js");
var R = require("./10294.js");
var k = require("./82594.js");
export function Qd(e) {
	const { overview: t, details: r, workshopVisible: n, marketPresence: a } = e;
	const s = (0, p.Qn)();
	const l = (function (e, t, r = {}) {
		let { appid: n } = e;
		const i = (0, d.H_)(n);
		const [a] = (0, k.t7)(e.optional_parent_app_id ?? 0, {});
		return (0, o.q3)(() => {
			const { bWorkshopVisible: s, bMarketPresence: o } = r;
			const l = e.BIsModOrShortcut();
			const c = e.app_type == 8;
			if (c && e.optional_parent_app_id) {
				n = e.optional_parent_app_id;
			}
			const u = c && a?.HasDemoStandaloneStorePage() ? e.appid : n;
			const d = [];
			if (!l) {
				const e = (0, g.ID)(p.TS.LAUNCHER_TYPE);
				const r = !e && i.rgCards?.length > 0;
				const a = t.bAvailableContentOnStore;
				const l = [
					{
						label: Localize("#AppDetails_Links_Store"),
						url: A.B7.BuildStoreAppURL(u, "primarylinks"),
					},
					a && {
						label: Localize("#AppDetails_Links_DLC"),
						url: A.B7.BuildStoreAppDlcURL(n, "primarylinks"),
					},
					!e && {
						label: Localize("#AppDetails_Links_Community"),
						link: "GameHub",
						appid: n,
					},
					r && {
						label: Localize("#AppDetails_Links_PointsShop"),
						url: A.B7.BuildAppPointsShopURL(n),
					},
					!e && {
						label: Localize("#AppDetails_Link_Discussions"),
						link: "GameHubDiscussions",
						appid: n,
					},
					!e && {
						label: Localize("#AppDetails_Link_Guides"),
						link: "GameHubGuides",
						appid: n,
					},
					s && {
						label: Localize("#AppDetails_Link_Workshop"),
						link: "SteamWorkshopPage",
						appid: n,
					},
					o && {
						label: Localize("#AppDetails_Link_Market"),
						link: "CommunityMarketApp",
						appid: n,
					},
					!R.Ih.BKioskModeLocked() && {
						label: Localize("#AppDetails_Link_Support"),
						link: "HelpAppPage",
						appid: n,
					},
				];
				d.push(...l.filter(Boolean));
			}
			return d;
		});
	})(t, r, {
		bMarketPresence: a,
		bWorkshopVisible: n,
	});
	if (s) {
		return i.createElement(L, {
			links: l,
		});
	} else {
		return i.createElement(N, {
			links: l,
			...e,
		});
	}
}
let N = class extends i.Component {
	state = {
		nRowHeight: 0,
		nRows: 0,
		nMaxRows: 0,
		rgChildPositions: [],
		bPointsShopStateLoaded: false,
	};
	m_resizeObserver;
	m_elInnerLinks;
	constructor(e) {
		super(e);
		window.addEventListener("resize", this.OnResize);
	}
	componentWillUnmount() {
		this.StopListening();
		window.removeEventListener("resize", this.OnResize);
	}
	StopListening() {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
			this.m_resizeObserver = undefined;
		}
	}
	componentDidUpdate(e) {
		if (
			e.overview.appid != this.props.overview.appid ||
			e.workshopVisible != this.props.workshopVisible ||
			e.marketPresence != this.props.marketPresence ||
			e.links.length != this.props.links.length
		) {
			this.CalculateLinkPositions();
		}
	}
	OnResize() {
		this.CalculateLinkPositions();
	}
	BindInnerLinks(e) {
		this.m_elInnerLinks = e;
		this.StopListening();
		if (e) {
			this.m_resizeObserver = (0, u.Fd)(e, this.OnResize);
			this.CalculateLinkPositions();
		}
	}
	CalculateLinkPositions() {
		const e = this.m_elInnerLinks;
		if (e && e.children) {
			const t = e.children[0];
			const r = t.clientHeight;
			let n = 1;
			const i =
				e.ownerDocument.defaultView.innerHeight < parseInt(b.BreakTall) ? 1 : 3;
			const a = getComputedStyle(t);
			const s = parseInt(a.marginRight);
			const o = e.clientWidth;
			let l = 0;
			let c = 0;
			let m = 0;
			const u = [];
			for (let t = 0; t < e.children.length; t++) {
				const a = e.children[t].clientWidth;
				if (a > o) {
					for (let r = t; r < e.children.length; r++) {
						u.push({
							x: -1,
							y: -1,
						});
					}
					break;
				}
				if (l + a > o) {
					l = 0;
					c++;
					n++;
					m = 0;
				}
				if (c < i) {
					u.push({
						x: l,
						y: c * r,
					});
				} else {
					u.push({
						x: -1,
						y: -1,
					});
				}
				if (t < e.children.length - 1) {
					if (c == 0) {
						l = l + a + s;
					} else {
						while (u[++m].x < l + a && u[m].y == 0);
						if (u[m].y != 0) {
							l = 0;
							c++;
							n++;
							m = 0;
						} else {
							l = u[m].x;
						}
					}
				}
			}
			if (
				r != this.state.nRowHeight ||
				n != this.state.nRows ||
				JSON.stringify(u) != JSON.stringify(this.state.rgChildPositions)
			) {
				this.setState({
					nRowHeight: r,
					nRows: n,
					nMaxRows: i,
					rgChildPositions: u,
				});
			}
		}
	}
	render() {
		const { links: e } = this.props;
		if (e.length == 0) {
			return null;
		}
		let t = this.state.rgChildPositions.findIndex((e) => e.x == -1) !== -1;
		let r = 0;
		return i.createElement(
			c.n,
			{
				"flow-children": "row",
				className: S.LinksSection,
				rightColumnSection: true,
				availableOffline: true,
			},
			i.createElement(
				c.n.Body,
				{
					className: S.LinksSectionBody,
				},
				i.createElement(
					B.Z,
					{
						"flow-children": "row",
						className: (0, l.A)(S.Links),
						ref: this.BindInnerLinks,
						style: {
							height:
								this.state.nRowHeight *
								Math.min(this.state.nRows, this.state.nMaxRows),
						},
					},
					e.map((e) =>
						i.createElement(Kd, {
							key: e.label,
							position: this.state.rgChildPositions[r++],
							label: e.label,
							url: e.url,
							link: e.link,
							appid: e.appid,
						}),
					),
				),
				t &&
					i.createElement(F, {
						links: e.filter((e, t) => this.state.rgChildPositions[t]?.x == -1),
					}),
			),
		);
	}
};
function F(e) {
	const { links: t } = e;
	const r = (0, T.wT)();
	const n = (e) => {
		const n = i.createElement(
			h.tz,
			null,
			t.map((e) =>
				i.createElement(P, {
					key: e.label,
					...e,
					showUnlockDialog: r,
				}),
			),
		);
		(0, w.lX)(n, e.currentTarget, {
			bOverlapHorizontal: true,
			bOverlapVertical: false,
		});
	};
	return i.createElement(
		C.ml,
		{
			className: S.MenuButton,
			onClick: n,
			onContextMenu: n,
		},
		i.createElement(_.faJ, null),
	);
}
export function Kd(e) {
	let t = {};
	let r = e.position && e.position.x != -1;
	if (r) {
		t = {
			left: e.position.x,
			top: e.position.y,
		};
	} else if (e.position) {
		t = {
			opacity: 0,
			pointerEvents: "none",
			zIndex: -100,
		};
	}
	return i.createElement(
		"div",
		{
			className: (0, l.A)(S.LinkInner, e.className),
			style: t,
		},
		i.createElement(aX, {
			className: e.innerClassName,
			label: e.label,
			link: e.link,
			appid: e.appid,
			url: e.url,
			isVisible: r,
		}),
	);
}
export function aX(e) {
	const t = e.url ? e.url : A.B7.ResolveURL(e.link, e.appid);
	const r = (0, M.Qt)(t);
	const n = (0, E.OJ)(t);
	const s = n != 0;
	const o = (0, T.wT)();
	return i.createElement(
		B.Z,
		{
			className: (0, l.A)(S.Anchor),
			onActivate: s
				? () => {
						const e = A.B7.GetParentalFeatureForFullUrl(t);
						o(n, e ?? a.uX, r);
					}
				: r,
			focusable: e.isVisible ?? true,
		},
		i.createElement(
			"div",
			{
				className: (0, l.A)(S.Link, s && S.Disabled, e.className),
			},
			i.createElement(
				"span",
				{
					className: S.Text,
				},
				e.label,
			),
		),
	);
}
function P(e) {
	const { label: t, link: r, appid: n, url: s, showUnlockDialog: o } = e;
	const c = s || A.B7.BuildSteamURL(r, n);
	const m = (0, M.Qt)(c);
	const u = (0, E.OJ)(c);
	const d = u != 0;
	const p = A.B7.GetParentalFeatureForFullUrl(c);
	return i.createElement(
		h.kt,
		{
			onSelected: d
				? () => {
						o(u, p ?? a.uX, m);
					}
				: m,
			className: (0, l.A)(S.ContextMenuItem, d && S.Disabled),
		},
		t,
	);
}
function L(e) {
	const { links: t } = e;
	const r = (0, I.S1)();
	return i.createElement(
		I.VJ,
		null,
		i.createElement(
			B.Z,
			{
				"flow-children": "row",
				style: {
					width: "100vw",
				},
			},
			i.createElement(
				v.Q,
				{
					edgeMask: "none",
					fnUpdateArrows: () => {},
					fnRenderScrollingDiv: ({ htmlElementRef: e, ...t }) =>
						i.createElement("div", {
							...t,
							ref: e,
							style: r,
						}),
				},
				t.map((e) =>
					i.createElement(aX, {
						...e,
						key: e.label,
					}),
				),
				i.createElement("div", {
					className: S.ForcedCarouselPadding,
					"data-carousel": "ignore",
				}),
			),
		),
	);
}
(0, n.Cg)([u.oI], N.prototype, "OnResize", null);
(0, n.Cg)([u.oI], N.prototype, "BindInnerLinks", null);
(0, n.Cg)([u.oI], N.prototype, "CalculateLinkPositions", null);
N = (0, n.Cg)([s.PA], N);
