import { Localize } from "../../actual_src/utils/localization.js";
import n, { HO } from "./89193.js";
import i, { PA } from "./41230.js";
import a, { useRef, useState, useCallback, useEffect } from "./63696.js";
import s from "./78325.js";
import o from "./92251.js";
import l, { t } from "./93023.js";
import c, { L3, wJ } from "./45328.js";
import m, { TB } from "./78771.js";
import u, { FV } from "./823.js";
import d from "./83591.js";
import A from "./5859.js";
import p, { SW } from "./58839.js";
import g, { G6, t7 } from "./82594.js";
import h from "./7552.js";
import C from "./42318.js";
import _ from "./59959.js";
import f from "./72054.js";
import b from "./60762.js";
import y from "./97510.js";
import S from "./30697.js";
import w from "./25752.js";
import B from "./58084.js";
import v from "./50376.js";
import I from "./98995.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { CScheduledFunc } from "../../actual_src/utils/callbackutils";
import { A as A_2 } from "./90765.js";
import { CH, XB } from "./52451.js";
import D, { Qn } from "./72476.js";
import N from "./7081.js";
import F from "./68994.js";
import { vg } from "./4816.js";
import P from "./47628.js";
import { m as m_2 } from "./39039.js";
import { n9 } from "./92059.js";
import U from "./83665.js";
const G = F;
const L = P;
const W = "DEBUG_UseNewGameHover";
function V() {
	return window.sessionStorage?.getItem(W) || "default";
}
window.SetHoverPresentation = (e) => {
	window.sessionStorage.setItem(W, e);
};
const H = 5500;
const j = 2000;
const q = 10;
function Q(e, t, r) {
	const i = [];
	if (e.length == 1) {
		const t = A.A.Get().GetApp(e[0]);
		if (t.GetMicroTrailer()) {
			i.push({
				rctImage: a.createElement(f.m, {
					appInfo: {
						id: t.GetID(),
						type: "game",
					},
				}),
				nDurationMs: H,
			});
		}
		t.GetOnlyAllAgesSafeScreenshots()
			.slice(0, q)
			.forEach((e, t) => {
				i.push({
					rctImage: a.createElement("img", {
						key: e,
						className: G.FullDivImage,
						loading: "lazy",
						src: e,
						alt: `screenshot ${t + 1}`,
					}),
					nDurationMs: j,
				});
			});
	}
	if (i.length == 0) {
		for (const t of e) {
			const e = A.A.Get().GetApp(t);
			const r = e?.GetAssets()?.GetMainCapsuleURL();
			if (r) {
				i.push({
					rctImage: a.createElement("img", {
						key: "fallback",
						className: G.FullDivImage,
						loading: "lazy",
						src: r,
						alt: e.GetName(),
					}),
					nDurationMs: j,
				});
			}
		}
	}
	if (i.length > 0) {
		t(i);
		r(true);
	} else if (D.TS.WEB_UNIVERSE == "dev" || D.TS.WEB_UNIVERSE == "beta") {
		console.error(
			"DEV ONLY OUTPUT: GameHoverImages for id/type no images: (might be not age safe screenshots)",
			HO(e),
		);
	}
}
function Z(e) {
	const { info: t } = e;
	const r = useRef({
		include_assets: true,
		include_trailers: true,
		include_screenshots: true,
	});
	const [n, i] = G6(t.id, SW(t.type), r.current);
	const s = useRef(n);
	const [o, l] = useState([]);
	const c = useRef(0);
	const m = CH();
	const [u] = a.useState(new CScheduledFunc());
	const d = useCallback(
		(e = false) => {
			if (e) {
				c.current = 0;
			}
			if (o?.length > 0) {
				const e = o[c.current].nDurationMs;
				u.Schedule(e, () => {
					const e = c.current;
					c.current = (c.current + 1) % o.length;
					if (e != c.current) {
						d();
						m();
					}
				});
			}
		},
		[o, u, m],
	);
	useEffect(() => {
		if (!n || (o && o.length != 0 && s.current === n)) {
			if (i == 2 && o.length == 0) {
				l([
					{
						rctImage: a.createElement("img", {
							key: "default",
							className: G.FullDivImage,
							loading: "lazy",
							src: "data:image/png;base64,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",
							alt: "default",
						}),
						nDurationMs: j,
					},
				]);
			} else if (o?.length) {
				d();
			}
		} else {
			s.current = n;
			if (n.GetStoreItemType() == 2 || n.GetStoreItemType() == 1) {
				AssertMsg(
					n.GetIncludedAppIDs().length > 0,
					`expected included apps ${n.GetID()} ${n.GetStoreItemType()}`,
				);
				A.A.Get()
					.QueueMultipleAppRequests(n.GetIncludedAppIDs(), {
						include_assets: true,
					})
					.then(() => Q(n.GetIncludedAppIDs(), l, d));
			} else if (
				n.GetAppType() == 1 &&
				n.GetParentAppID() &&
				!n.GetAllTrailers().BHasTrailers()
			) {
				A.A.Get()
					.QueueAppRequest(n.GetParentAppID(), r.current)
					.then(() =>
						((e, t, r, n) => {
							const i = [];
							const s = A.A.Get().GetApp(t);
							if (s.GetMicroTrailer()) {
								i.push({
									rctImage: a.createElement(f.m, {
										appInfo: {
											id: s.GetID(),
											type: "game",
										},
									}),
									nDurationMs: H,
								});
							}
							const o = A.A.Get().GetApp(e).GetOnlyAllAgesSafeScreenshots();
							o.slice(0, q).forEach((e, t) => {
								i.push({
									rctImage: a.createElement("img", {
										key: e,
										className: G.FullDivImage,
										loading: "lazy",
										src: e,
										alt: `screenshot ${t + 1}`,
									}),
									nDurationMs: j,
								});
							});
							if (q - o.length > 0) {
								s.GetOnlyAllAgesSafeScreenshots()
									.slice(0, q)
									.forEach((e, t) => {
										i.push({
											rctImage: a.createElement("img", {
												key: e,
												className: G.FullDivImage,
												loading: "lazy",
												src: e,
												alt: `screenshot ${t + 1}`,
											}),
											nDurationMs: j,
										});
									});
							}
							if (i.length > 0) {
								r(i);
								n(true);
							} else if (
								D.TS.WEB_UNIVERSE == "dev" ||
								D.TS.WEB_UNIVERSE == "beta"
							) {
								console.error(
									"DEV ONLY OUTPUT: Demo GameHoverImages for id/type no images: (might be not age safe screenshots)",
									e,
									t,
								);
							}
						})(n.GetID(), n.GetParentAppID(), l, d),
					);
			} else {
				Q([n.GetID()], l, d);
			}
		}
		return () => u.Cancel();
	}, [o, n, i, u, d, s]);
	return a.createElement(
		"div",
		{
			className: G.TrailerCtn,
		},
		o?.map((e, r) =>
			a.createElement(
				"div",
				{
					key: `e-${r}-${t.id}_${t.type}`,
					className: A_2(G.FullDivImage, r != c.current && G.Transparent),
				},
				e.rctImage,
			),
		),
	);
}
function Y(e) {
	const { rgTagIDs: t } = e;
	return a.createElement(
		"div",
		{
			className: G.TagRow,
		},
		a.createElement(
			"div",
			{
				className: G.Tags,
			},
			t.map((e) =>
				a.createElement(S.p, {
					key: `tag_${e}`,
					tagid: e,
					className: G.Tag,
				}),
			),
		),
	);
}
export function Jz(e) {
	const { appInfo: t, bTruncateTotalReviews: r, bShowTooltip: n } = e;
	const [i] = G6(t?.id, SW(t?.type), {
		include_reviews: true,
	});
	if (!i) {
		return null;
	}
	const s = d.Fm.Get().BShowFilteredUserReviewScores()
		? i.GetFilteredReviewSummary()
		: i.GetUnfilteredReviewSummary();
	if (!s || s.review_score == 0) {
		return null;
	}
	let o = G.ReviewScoreNone;
	o =
		s.review_score > 0 && s.review_score < 5
			? G.ReviewScoreLow
			: s.review_score == 5
				? G.ReviewScoreMixed
				: G.ReviewScoreHigh;
	const l = `${D.TS.STORE_BASE_URL}app/${t.id}/#app_reviews_hash`;
	const c = a.createElement(
		"div",
		{
			className: A_2(G.ReviewScoreValue, o),
		},
		a.createElement(
			"div",
			{
				className: G.ReviewScoreLabel,
			},
			s.review_score_label,
		),
		a.createElement(
			"div",
			{
				className: G.ReviewScoreCount,
			},
			r
				? `(${s.review_count.toLocaleString()})`
				: (0, Localize)(
						"#GameHover_UserReviewCount",
						s.review_count.toLocaleString(),
					),
		),
		!r &&
			a.createElement(
				"div",
				{
					className: G.ReviewScoreHeader,
				},
				" ",
				(0, Localize)("#GameHover_UserReviewsHeader"),
			),
	);
	let m = "#ReviewScore_PercentPositive";
	if (i.GetStoreItemType() === 2) {
		m = "#ReviewScore_PercentPositive_bundle";
	} else if (i.GetStoreItemType() === 0) {
		switch (i.GetAppType()) {
			case 6: {
				m = "#ReviewScore_PercentPositive_software";
				break;
			}
			case 7: {
				m = "#ReviewScore_PercentPositive_video";
				break;
			}
			case 10: {
				m = "#ReviewScore_PercentPositive_hardware";
				break;
			}
			case 8: {
				m = "#ReviewScore_PercentPositive_series";
			}
		}
	}
	return a.createElement(
		w.q,
		{
			url: l,
			className: A_2(G.ReviewScore, "ReviewScore"),
		},
		n && s.percent_positive != null && s.review_count != null && Boolean(m)
			? a.createElement(
					I.he,
					{
						bTopmost: true,
						toolTipContent: (0, Localize)(
							m,
							s.percent_positive,
							s.review_count,
						),
					},
					c,
				)
			: c,
	);
}
export const EP = PA((e) => {
	const { appID: t, snr: r, classOverride: n } = e;
	const [i] = t7(t, {});
	const [s, o] = useState(() =>
		!i || (i?.GetAppType() != 1 && i?.GetAppType() != 12)
			? t
			: i.GetParentAppID() || t,
	);
	const l = s && d.Fm.Get().BIsGameWishlisted(s);
	const c = s && d.Fm.Get().BOwnsApp(s);
	const [m, u] = useState(false);
	const A = m_2("GameHoverWishlistButton");
	useEffect(() => {
		if (i?.GetAppType() == 1 || i?.GetAppType() == 12) {
			o(i.GetParentAppID() || t);
		}
	}, [t, i]);
	if (c) {
		return null;
	}
	return a.createElement(
		"div",
		{
			className: A_2(G.WishlistButton, n),
			onClick: async (e) => {
				e.preventDefault();
				e.stopPropagation();
				if (D.iA.logged_in) {
					u(true);
					await d.Fm.Get().UpdateGameWishlist(s, !l, r);
					if (!A.token.reason) {
						u(false);
					}
				} else {
					vg();
				}
			},
		},
		l ? a.createElement(v.qnF, null) : a.createElement(v.T4m, null),
		a.createElement(
			"div",
			{
				className: A_2(G.WishlistButtonText, m && G.WishlistLoadingText),
			},
			(0, Localize)(l ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist"),
		),
	);
});
const J = (e) => {
	const { nCreatorAccountID: t } = e;
	const [r, n] = TB(t);
	const i = FV(t);
	return a.createElement(
		"div",
		{
			className: G.GameHoverCreatorFollowButtonCtn,
		},
		a.createElement(
			"a",
			{
				href: i?.GetCreatorHomeURL("developer"),
			},
			a.createElement("img", {
				src: r ? t(null, "medium") : n.avatar_medium_url,
			}),
		),
		a.createElement(_.of, {
			clanAccountID: t,
		}),
	);
};
const $ = PA((e) => {
	const {
		info: t,
		displayInfo: r,
		name: n,
		strStoreUrl: i,
		elElementToAppend: s,
		bShowDemoButton: o,
		bHideBottomHalf: l,
		bHidePrice: c,
		bShowDeckCompatibilityDialog: m,
		bUseSubscriptionLayout: u,
		nCreatorAccountID: d,
		bPreventNavigation: A,
	} = e;
	const [C, _] = useState(false);
	const [f, S] = useState("");
	const [w] = G6(t.id, SW(t.type), {
		include_release: true,
		include_platforms: true,
		include_reviews: true,
		include_tag_count: 20,
	});
	const [v] = G6(r.id, SW(r.type), {
		include_assets: true,
	});
	const I = !u && !o && !s;
	const E = w?.GetStoreItemType() == 0;
	return a.createElement(
		"div",
		{
			className: G.BottomShelf,
			style: {
				transform: l && C ? f : "",
			},
			onMouseEnter: () => _(true),
			onFocus: () => _(true),
			onMouseLeave: () => _(false),
			onBlur: () => _(false),
		},
		a.createElement(
			"a",
			{
				href: A || i,
				target: D.TS.IN_CLIENT || "_blank",
				className: G.Midline,
			},
			Boolean(v) &&
				a.createElement(
					"div",
					{
						className: G.CapsuleImageAnchorPoint,
					},
					a.createElement(
						"div",
						{
							className: A_2(G.CapsuleImageCtn, G.WithCornerShine),
						},
						a.createElement("img", {
							loading: "lazy",
							src: v?.GetAssets().GetHeaderURL(),
							alt: w?.GetName(),
						}),
					),
				),
			Boolean(!c && !u) &&
				a.createElement(
					"div",
					{
						className: G.Price,
					},
					a.createElement(y.wc, {
						info: t,
						onlyOneDiscountPct: true,
					}),
				),
		),
		a.createElement(
			"div",
			{
				className: G.BottomShelfOffScreen,
				ref: (e) => S(`translateY( -${e?.clientHeight || 0}px )`),
			},
			a.createElement(
				"div",
				{
					className: G.TextContent,
				},
				a.createElement(
					"a",
					{
						href: A || i,
						target: D.TS.IN_CLIENT || "_blank",
					},
					a.createElement(
						"div",
						{
							className: G.GameTitle,
						},
						w?.GetName() || n,
					),
				),
				Boolean(w) &&
					a.createElement(Y, {
						rgTagIDs: w.GetTagIDs(),
					}),
				Boolean(!m && w) &&
					a.createElement(Jz, {
						appInfo: t,
					}),
				Boolean(!m && I) &&
					a.createElement(
						"div",
						{
							className: G.ReviewsAndRelease,
						},
						a.createElement(b.Q, {
							item: t,
							strClassName: G.PlatformDisplay,
						}),
						Boolean(w?.GetFormattedSteamReleaseDate()) &&
							a.createElement(
								"div",
								{
									className: G.ReleaseDate,
								},
								w?.GetFormattedSteamReleaseDate(),
							),
					),
				o &&
					a.createElement(N.j, {
						info: t,
						className: G.DemoButton,
					}),
				Boolean(m && E) &&
					a.createElement(h.Q8, {
						storeItem: w,
					}),
				Boolean(s) && s,
				Boolean(u && E) &&
					a.createElement(B.E, {
						appid: t.id,
						bIsMuted: false,
					}),
				d &&
					a.createElement(J, {
						nCreatorAccountID: d,
					}),
			),
		),
	);
});
const ee = PA((e) => {
	a.useEffect(() => {
		d.Fm.Get().HintLoad();
	}, []);
	const {
		info: t,
		displayInfo: r,
		strStoreUrl: n,
		bHideBottomHalf: i,
		bShowDeckCompatibilityDialog: s,
		bShowWishlistButton: o = true,
	} = e;
	let l;
	if (t.overrideNavigation) {
		l = (e) => t.overrideNavigation();
	}
	return a.createElement(
		"div",
		{
			className: A_2(
				G.GameHoverCapsuleCtn,
				L.InGameHover,
				i && G.UseHidingBottomHalf,
			),
			onClick: l,
		},
		a.createElement(
			"a",
			{
				href: l || n,
				target: D.TS.IN_CLIENT || "_blank",
				className: G.TrailerAnchorStoreLink,
			},
			Boolean(o && !s && !l) &&
				a.createElement(EP, {
					appID: r.id,
					snr: e.strSNR,
				}),
			a.createElement(Z, {
				info: r,
			}),
		),
		a.createElement($, {
			...e,
			bPreventNavigation: Boolean(l),
		}),
	);
});
const te = 150;
export function Qf(e) {
	const {
		item: t,
		name: r,
		bPreventNavigation: n,
		elElementToAppend: i,
		bShowDemoButton: s,
		bPreferDemoStorePage: o,
		bHidePrice: l,
		bUseSubscriptionLayout: m,
		strExtraParams: u,
		nCreatorAccountID: d,
		bShowDeckCompatibilityDialog: A,
		bShowWishlistButton: h = true,
		...C
	} = e;
	const [_] = G6(t.id, SW(t.type), {});
	const f = n9();
	const b = L3(f);
	const y = Qn();
	if (!_ && !r) {
		return null;
	}
	if (y) {
		return a.createElement(a.Fragment, null, e.children);
	}
	let S = {
		id: t.id,
		type: t.type,
	};
	if (_?.GetStoreItemType() == 1 && _?.GetIncludedAppIDs().length == 1) {
		S = {
			id: _.GetIncludedAppIDs()[0],
			type: "game",
		};
	}
	const w = V() == "hiding";
	const B = n || !_ || wJ(`${_?.GetStorePageURL(o)}${u ? `?${u}` : ""}`, f);
	const v = a.createElement(ee, {
		info: t,
		displayInfo: S,
		name: r,
		bPreventNavigation: n,
		strStoreUrl: B,
		elElementToAppend: i,
		bShowDemoButton: s,
		bPreferDemoStorePage: o,
		bShowDeckCompatibilityDialog: A,
		bHideBottomHalf: w,
		bHidePrice: l,
		bUseSubscriptionLayout: m,
		strSNR: b,
		nCreatorAccountID: d,
		bShowWishlistButton: h,
	});
	return a.createElement(
		ie,
		{
			hoverContent: v,
			strClickUrl: B,
			...C,
		},
		e.children,
	);
}
function ne(e) {
	const { hoverProps: t, children: r } = e;
	const n = a.useCallback((e) => e?.focus(), []);
	return a.createElement(
		o.g,
		{
			...t,
		},
		a.createElement(
			U.M,
			{
				timeout: 500,
				in: true,
				appear: true,
				classNames: {
					appearActive: G.Opening,
					enterDone: G.Open,
				},
			},
			(e) =>
				a.createElement(
					"div",
					{
						ref: XB(e, n),
						className: G.HoverContentTransition,
						tabIndex: -1,
					},
					r,
				),
		),
	);
}
function ie(e) {
	const {
		hoverContent: t,
		hoverProps: r,
		nDelayShowMs: n,
		strClickUrl: i,
		children: s,
		className: o,
		...l
	} = e;
	const c = Qn();
	const [m, u] = a.useState(!c);
	const [d, A] = a.useState(false);
	const [p, g] = a.useState(undefined);
	const h = a.useCallback((e) => {
		A(true);
		g(e.currentTarget);
	}, []);
	const _ = a.useCallback(() => A(false), []);
	const f = a.useCallback((e) => {
		if (e.keyCode == 27) {
			A(false);
			e.preventDefault();
			e.stopPropagation();
		}
	}, []);
	const b = a.useCallback(
		(e) => {
			u(false);
			window.location.href = i;
			e.preventDefault();
			e.stopPropagation();
		},
		[i],
	);
	const y = a.useCallback(() => u(false), []);
	return a.createElement(
		"div",
		{
			"data-key": "hover div",
			className: A_2(G.ItemHoverSource, i && G.Selectable, o),
			...l,
			onMouseEnter: h,
			onMouseLeave: _,
			onFocus: h,
			onClick: i ? b : undefined,
			onTouchStart: y,
			onKeyDown: f,
		},
		m &&
			a.createElement(
				ae,
				{
					visible: d,
					target: p,
					nDelayShowMs: n,
					hoverProps: r,
				},
				t,
			),
		a.createElement(C.tH, null, s),
	);
}
function ae(e) {
	const {
		hoverProps: t,
		nDelayShowMs: r = te,
		target: n,
		visible: i,
		children: o,
	} = e;
	const [l, c] = a.useState(i);
	a.useEffect(() => {
		if (i) {
			if (r) {
				const e = window.setTimeout(() => c(true), r);
				return () => window.clearTimeout(e);
			}
			c(true);
		} else {
			c(false);
		}
	}, [i]);
	a.useEffect(() => {
		if (!l) {
			return;
		}
		const e = n.ownerDocument.defaultView;
		const t = e.scrollY;
		const r = () => {
			if (Math.abs(e.scrollY - t) > 50) {
				c(false);
			}
		};
		window.addEventListener("scroll", r);
		return () => window.removeEventListener("scroll", r);
	}, [l, n?.ownerDocument.defaultView]);
	if (!n || !o || !o || !l) {
		return null;
	}
	const m = n.clientWidth < 200 ? "8px" : "10px";
	const u = {
		direction: "overlay-center",
		bEnablePointerEvents: true,
		...t,
		style: {
			zIndex: 98,
			width: n.clientWidth * 1.15,
			fontSize: m,
			minHeight: V() == "hiding" || 300,
			height: V() == "hiding" ? n.clientWidth * 1.15 * (125 / 184) : undefined,
			...t?.style,
		},
		target: n,
	};
	return s.createPortal(
		a.createElement(
			ne,
			{
				hoverProps: u,
			},
			a.createElement(C.tH, null, o),
		),
		n.ownerDocument.body,
	);
}
