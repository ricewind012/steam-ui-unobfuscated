import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";

import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizePlural,
	CLocLanguageArray,
} from "../../actual_src/utils/localization.js";

import { FailAssertion } from "../../actual_src/utils/assert.js";
import n, { PA } from "./41230.js";
import i, { useEffect, useRef, useMemo, useState } from "./63696.js";
import a, { tB } from "./69137.js";
import s from "./90242.js";
import o from "./69164.js";
import l from "./4690.js";
import "./93023.js";
import c from "./56655.js";
import m, { wJ, L3 } from "./45328.js";
import u, { mJ } from "./36885.js";
import "./78771.js";
import d from "./5859.js";
import A, { SW } from "./58839.js";
import p, { G6, t7, mZ } from "./82594.js";
import g from "./68994.js";
import C from "./72054.js";
import _ from "./60762.js";
import f from "./36723.js";
import b from "./83957.js";
import S from "./55667.js";
import w from "./83591.js";
import B, { f as f_1 } from "./991.js";
import v, { ru, n9 } from "./92059.js";
import I, { b as b_1 } from "./59750.js";
import E, { BL } from "./99251.js";
import M, { Ue } from "./28864.js";
import N from "./97510.js";
import F, { w as w_1 } from "./49455.js";
import P, { NT } from "./53807.js";
import z from "./30697.js";
import x from "./25752.js";
import U from "./58084.js";
import W from "./23337.js";
import V from "./47628.js";
import { A as A_1 } from "./90765.js";
import Z, { Qn } from "./72476.js";
import Y from "./95929.js";
import X from "./26853.js";
import J from "./34036.js";
import $ from "./74905.js";
import ee from "./6561.js";
import "./15612.js";
import "./11735.js";
import { Ae } from "./67784.js";
const h = g;
const y = b;
function T(e) {
	const { appID: t, feature: r, depth: n, children: a } = e;
	const s = ru(r, n);
	const o = b_1();
	const [l, c] = i.useState(undefined);
	const m = i.useCallback(
		(e) => {
			if (e.isIntersecting) {
				c((e) =>
					e?.appID == t && e.snr == s
						? e
						: {
								appID: t,
								snr: s,
							},
				);
			}
		},
		[t, s],
	);
	useEffect(() => {
		if (l) {
			o.AddImpression(l.appID, l.snr);
		}
	}, [o, l]);
	const u = BL(m);
	const d = t && (!l || (l.appID != t && l.snr != s));
	const A = Ue(a.ref, d ? u : undefined);
	return i.cloneElement(a, {
		ref: A,
	});
}
function R(e) {
	if (e == "bundle") {
		return "bundle";
	} else if (e == "sub") {
		return "sub";
	} else if (f_1(e)) {
		return "app";
	} else {
		return null;
	}
}
const k = (e) => {
	const { appid: t } = e;
	const r = i.createElement(
		"div",
		{
			className: "ImpressionTrackedElement",
		},
		e.children,
	);
	if (t) {
		return i.createElement(
			T,
			{
				appID: t,
			},
			r,
		);
	} else {
		return r;
	}
};
class D {
	static instance_count = 0;
}
function L(e, t, r, n, i, a) {
	if (!r) {
		return;
	}
	let s;
	if (
		!((s = e.GetStoreItemType()) == 2
			? "bundle"
			: s == 1
				? "sub"
				: s == 0
					? "app"
					: null)
	) {
		w_1(
			false,
			`StoreItemWidgetSalePageAction: unexpected type: ${e.GetStoreItemType()}`,
		);
		return;
	}
	const o = wJ(`${e.GetStorePageURL(n)}${i ? `?${i}` : ""}`, t);
	return {
		onClick: (e) => {
			let t = GetOwningWindowForEvent(e) || window;
			if (a) {
				a(undefined);
			} else if (!o.startsWith("steam://")) {
				t.location.href = NT(o);
			}
		},
		onOKActionDescription: (0, Localize)("#Sale_Gamepad_Action_Select"),
	};
}
const H = V;
function q(e) {
	const { info: t, bPreferLibrary: r } = e;
	const [n] = G6(t.id, SW(t.type), {
		include_assets: true,
	});
	const [a, s] = i.useState(0);
	if (!n) {
		return i.createElement("div", {
			className: H.HeroCapsuleImageContainer,
		});
	}
	let o = n.GetAssets().GetHeroCapsuleURL();
	let l = n.GetAssets().GetLibraryCapsuleURL();
	if (n.GetIncludedAppIDs()?.length > 0 && !o) {
		const e = d.A.Get().GetApp(n.GetIncludedAppIDs()[0]);
		if (e) {
			o ||= e.GetAssets().GetHeroCapsuleURL();
			l ||= e.GetAssets().GetLibraryCapsuleURL();
		}
	}
	if (o && (!r || !l)) {
		return i.createElement(
			"div",
			{
				className: A_1(
					H.HeroCapsuleImageContainer,
					"HeroCapsuleImageContainer",
				),
			},
			i.createElement("img", {
				src: o,
				className: H.CapsuleImage,
				alt: n.GetName(),
			}),
		);
	}
	if (l) {
		return i.createElement(
			"div",
			{
				className: A_1(
					H.LibraryFallbackAssetImageContainer,
					H.VerticalCapsule,
					r ? H.ForceLibrarySizing : "",
				),
			},
			i.createElement("div", {
				className: H.FallbackBackground,
				style: {
					backgroundImage: `url(${l})`,
				},
			}),
			i.createElement("img", {
				src: l,
				className: H.CapsuleImage,
				alt: n.GetName(),
			}),
		);
	}
	const c = Q(n, true);
	const m = c.length - 1;
	const u = (e) => {
		const t = c.indexOf(e);
		if (t >= m && t < c.length - 1) {
			s(t + 1);
		}
	};
	if (a < c.length) {
		const e = c[a];
		return i.createElement(
			"div",
			{
				className: H.LibraryFallbackAssetImageContainer,
			},
			i.createElement("div", {
				className: H.FallbackBackground,
				style: {
					backgroundImage: `url(${e})`,
				},
			}),
			i.createElement(W.o, {
				lazyLoad: true,
				srcs: c,
				className: H.CapsuleImage,
				alt: n.GetName(),
				onImageError: u,
			}),
		);
	}
	return i.createElement("div", {
		className: H.HeroCapsuleImageContainer,
	});
}
function Q(e, t) {
	let r = [];
	if (e.GetAssets()) {
		if (t) {
			r.push(e.GetAssets().GetHeaderURL(), e.GetAssets().GetMainCapsuleURL());
		} else {
			r.push(e.GetAssets().GetMainCapsuleURL(), e.GetAssets().GetHeaderURL());
		}
	}
	return r.filter((e) => !!e);
}
function K(e) {
	const { bAllowOutsideOfDeck: t } = e;
	if (!Qn() && !t) {
		return null;
	}
	let r = "unknown";
	switch (e.eDeckCompatibilityCategory) {
		case 3: {
			r = "verified";
			break;
		}
		case 2: {
			r = "playable";
			break;
		}
		case 1: {
			r = "unsupported";
		}
	}
	return i.createElement("div", {
		className: A_1(Y.CompatIcon, "ds_steam_deck_compat", r, e.className),
	});
}
export const pb = PA((e) => {
	const {
		bIsHovered: t,
		setIsHovered: r,
		displayStoreItem: n,
		baseGameStoreItem: u,
		displayInfo: d,
		purchaseInfo: g,
		artworkInfo: b,
	} = ((e, t) => {
		const r = useRef(y.CancelToken.source());
		const { id: n, type: a } = e;
		const s = t
			? {
					...S.Xh,
					...t,
				}
			: S.Xh;
		const o = useMemo(
			() => ({
				id: n,
				type: a,
			}),
			[n, a],
		);
		const [l] = G6(o.id, SW(o.type), s);
		const [c, m] = useState({
			id: n,
			type: a,
		});
		const [u] = G6(c?.id, SW(c?.type), s);
		const d = useMemo(
			() =>
				u?.GetIncludedAppIDs()?.length > 1 &&
				u?.GetAssets().GetMainCapsuleURL() == null &&
				u?.GetAssets().GetHeaderURL() == null
					? {
							id: u.GetIncludedAppIDs()[0],
							type: "game",
						}
					: c,
			[c, u],
		);
		const [g] = t7(d?.id, s);
		const h = useMemo(
			() => ({
				id: u?.GetParentAppID() != u?.GetID() ? u?.GetParentAppID() : undefined,
				type: "game",
			}),
			[u],
		);
		const [C] = t7(h.id, s);
		const [_] = useState(++D.instance_count);
		const [f, b] = useState(false);
		const [B, v] = useState(R(a));
		const [I, E] = useState(n);
		useEffect(() => {
			w.Fm.Get().HintLoad();
			if (
				l?.GetStoreItemType() == 1 &&
				l.GetIncludedAppIDs().length == 1 &&
				(c.id != l.GetIncludedAppIDs()[0] || c.type != "game") &&
				l.GetAppType() != 10 &&
				!r?.current.token.reason
			) {
				const e = l.GetIncludedAppIDs()[0];
				m({
					id: e,
					type: "game",
				});
				v("app");
				E(e);
			}
		}, [c.id, c.type, l]);
		useEffect(
			() => () => r?.current.cancel("StoreSalePreviewWidget: unmounting"),
			[],
		);
		return {
			myInstance: _,
			bIsHovered: f,
			setIsHovered: b,
			purchaseInfo: o,
			displayInfo: c,
			displayStoreItem: u,
			baseGameStoreItem: C,
			baseGameInfo: h,
			hoverType: B,
			nHoverId: I,
			artworkInfo: d,
			artworkStoreItem: g,
		};
	})(e);
	const {
		bShowDemoButton: B,
		bPreferDemoStorePage: I,
		bHidePrice: E,
		bUseSubscriptionLayout: M,
		bHidePlatforms: T,
		bHideContainedApps: F,
		bAllowTwoLinesForHeader: G,
		bShowReviewSummary: P,
		bShowDeckCompatibilityDialog: x,
		bAutoFocus: W,
		fnOnClickOverride: V,
		bIsMarketingMessage: q,
	} = e;
	const Q = n9();
	const Y = i.useMemo(() => n?.GetIncludedAppIDsOrSelf(), [n]);
	const X = useRef(null);
	const [$, ee] = useState(false);
	const te = Qn();
	useEffect(() => {
		if (X.current) {
			ee(X.current.offsetWidth < 370);
		}
	}, [X]);
	if (!n) {
		return null;
	}
	const ne = n.GetBestPurchaseOption().discount_pct;
	const ie = n.GetIncludedAppIDs().length;
	let se = n.GetShortDescription();
	if (n.GetStoreItemType() == 2 || n.GetStoreItemType() == 1) {
		se = ne
			? (0, Localize)("#Sale_BundleSave_WithDiscount", ne, ie)
			: (0, Localize)("#Sale_BundleSave", ie);
	}
	const le = L3(Q);
	const ce = tB(n.GetStorePageURL(I));
	const me = Boolean(!F && ie > 0);
	const ue = n.BHasTags() ? n.GetTagIDs() : u?.BHasTags() ? u.GetTagIDs() : [];
	const de = n.GetStoreItemType() == 0;
	const Ae = wJ(ce, Q);
	const pe = Ae();
	const ge = te || n.BIsReleased() || n.BIsReleased() || n.BIsPrePurchase();
	return i.createElement(
		k,
		{
			appid: de ? n.GetAppID() : undefined,
		},
		i.createElement(
			o.Z,
			{
				className: A_1({
					[H.StoreSaleWidgetOuterContainer]: true,
					[H.AllowTwoLineHeader]: G,
				}),
				onMouseEnter: () => !pe && r(true),
				onMouseLeave: () => !pe && r(false),
				"flow-children": "grid",
				navEntryPreferPosition: l.iU.PREFERRED_CHILD,
				autoFocus: W,
				navKey: `preview_widget_${n.GetID()}`,
			},
			i.createElement(
				s.ml,
				{
					onClick: q ? V : null,
					className: A_1(
						H.StoreSaleWidgetContainer,
						H.SaleItemDefaultCapsuleDisplay,
						q ? H.MarketingMessage : "",
					),
					...L(n, Q, te, I, undefined, V),
					preferredFocus: me,
				},
				i.createElement(
					"div",
					{
						className: A_1(H.StoreSaleWidgetHalfLeft),
					},
					i.createElement(
						"a",
						{
							href: V || Ae,
							target: Z.TS.IN_CLIENT || V || "_blank",
							onClick: V,
						},
						i.createElement(
							"div",
							{
								className: H.StoreSaleWidgetImage,
							},
							i.createElement(f.V, {
								appids: Y,
							}),
							i.createElement(oe, {
								info: b,
								imageType: "header",
							}),
							i.createElement(K, {
								eDeckCompatibilityCategory:
									n.GetPlatforms()?.steam_deck_compat_category,
							}),
							Boolean(d && t) &&
								i.createElement(C.m, {
									appInfo: d,
								}),
						),
					),
				),
				i.createElement(
					"div",
					{
						className: A_1(H.StoreSaleWidgetRight, me ? H.Bundle : ""),
					},
					Boolean(de && !V) &&
						i.createElement(J.EP, {
							appID: d.id,
							classOverride: A_1(h.WishlistButtonNotTop, "WishlistButton"),
							snr: le,
						}),
					i.createElement(
						"div",
						{
							className: H.TitleCtn,
						},
						i.createElement(
							"a",
							{
								href: V || Ae,
								target: Z.TS.IN_CLIENT || "_blank",
								onClick: V,
							},
							i.createElement(
								"div",
								{
									className: A_1(
										H.StoreSaleWidgetTitle,
										"StoreSaleWidgetTitle",
									),
								},
								n.GetName(),
							),
						),
					),
					i.createElement(
						"div",
						{
							className: H.StoreSaleWidgetReleaseAndTags,
						},
						ue &&
							i.createElement(
								"div",
								{
									className: H.StoreSaleWidgetTags,
								},
								ue.map((e) =>
									i.createElement(z.p, {
										key: `tag_${e}`,
										tagid: e,
										className: H.AppTag,
									}),
								),
							),
						i.createElement(
							"div",
							{
								className: H.WidgetReleaseDateAndPlatformCtn,
								ref: X,
							},
							de &&
								i.createElement(
									"div",
									{
										className: H.StoreSaleWidgetRelease,
									},
									n.GetFormattedSteamReleaseDate(),
								),
							!T &&
								i.createElement(
									i.Fragment,
									null,
									i.createElement(_.Q, {
										item: d,
										bMinimizePlatforms: $,
									}),
									Boolean(
										x && n?.GetStoreItemType() == 0 && n.GetPlatforms(),
									) &&
										i.createElement(c.$o, {
											className: H.DeckCompatIcon,
											category: n.GetPlatforms().steam_deck_compat_category,
										}),
								),
						),
						P &&
							i.createElement(J.Jz, {
								appInfo: d,
							}),
					),
					me &&
						i.createElement(ae, {
							info: g,
						}),
					Boolean(de && se) &&
						i.createElement(
							"div",
							{
								className: A_1(
									H.StoreSaleWidgetShortDesc,
									"StoreSaleWidgetShortDesc",
								),
							},
							Boolean(se.startsWith("#") && !se.includes(" "))
								? i.createElement(
										"span",
										{
											className: H.LocalizationSpan,
										},
										LocalizeInlineReactWithFallback(
											se,
											i.createElement("i", null),
											i.createElement("i", null),
											i.createElement("i", null),
											i.createElement("i", null),
										),
									)
								: se,
						),
					Boolean(!V)
						? i.createElement(
								i.Fragment,
								null,
								Boolean(M && de)
									? i.createElement(U.E, {
											appid: d.id,
											bIsMuted: t,
										})
									: i.createElement(N.wD, {
											info: g,
											bShowDemoButton: B,
											bHidePrice: E,
											bHideWishlistButton: ge,
											bShowDeckCompatibilityDialog: x,
										}),
							)
						: i.createElement(
								"div",
								{
									className: H.StoreActionWidgetContainer,
								},
								i.createElement(
									"div",
									{
										className: H.StoreSalePriceActionWidgetContainer,
									},
									i.createElement(N.wc, {
										info: g,
									}),
								),
							),
					i.createElement(
						"div",
						{
							className: H.StoreSaleWidgetBgTint,
						},
						i.createElement(oe, {
							info: d,
							imageType: "header",
						}),
					),
				),
			),
		),
		Boolean(e.strReason) &&
			e.strReason.length > 0 &&
			i.createElement(
				"div",
				{
					className: H.RecommendationReason,
				},
				e.strReason,
			),
	);
});
const ie = 6;
function ae(e) {
	const { info: t } = e;
	const [r] = G6(t.id, SW(t.type), {});
	const [n, a] = i.useState(null);
	i.useEffect(() => {
		if (r) {
			if (r.GetStoreItemType() == 1 || r.GetStoreItemType() == 2) {
				a(
					r.GetIncludedAppIDs().map((e) => ({
						id: e,
						type: "game",
					})),
				);
			} else {
				console.error(
					"ContentsPreviewList unexpected store item type: ",
					r.GetStoreItemType(),
				);
			}
		}
	}, [r]);
	if (n) {
		return i.createElement(
			"div",
			{
				className: H.BundleContentPreview,
			},
			i.createElement(
				"div",
				{
					className: H.ContentsCount,
				},
				LocalizePlural("#Sale_ContentPreview", n.length),
			),
			i.createElement(
				"div",
				{
					className: H.PreviewCtn,
				},
				n.slice(0, ie).map((e) =>
					i.createElement(se, {
						key: `preview${e.id}_${e.type}`,
						info: e,
					}),
				),
			),
		);
	} else {
		return null;
	}
}
function se(e) {
	const { info: t } = e;
	const [r] = mZ(t.id, SW(t.type), {
		include_assets: true,
	});
	const n = r?.GetAssets().GetSmallCapsuleURL();
	return i.createElement(
		$.u,
		{
			type: R(t.type),
			id: t.id,
			hoverClassName: H.PreviewItem,
		},
		i.createElement("img", {
			src: n,
			className: H.PreviewImg,
			loading: "lazy",
			alt: r?.GetName(),
		}),
	);
}
function oe(e) {
	const { info: t, imageType: r } = e;
	const [n] = G6(t.id, SW(t.type), {
		include_assets: true,
	});
	let a;
	if (
		n &&
		n.GetIncludedAppIDs().length == 1 &&
		!((e, t) => {
			const r = e?.GetAssets();
			if (!r) {
				return false;
			}
			switch (t) {
				case "header": {
					return !!r.GetHeaderURL();
				}
				case "main": {
					return !!r.GetMainCapsuleURL();
				}
				case "library": {
					return !!r.GetHeroCapsuleURL() || !!r.GetLibraryCapsuleURL();
				}
				default: {
					FailAssertion(t, `Unhandled imageType: ${t}`);
					return false;
				}
			}
		})(n, r) &&
		[1, 2].includes(n.GetStoreItemType())
	) {
		a = n.GetIncludedAppIDs()[0];
	}
	const [s] = t7(a, {
		include_assets: true,
	});
	const o = s?.BIsVisible() ? s : n;
	if (!o) {
		return i.createElement(X.t, {
			size: "small",
			position: "center",
			string: (0, Localize)("#Loading"),
		});
	}
	if (r === "library") {
		return i.createElement(q, {
			info: t,
		});
	}
	let l;
	let c;
	let m = Q(o, r === "header");
	let u = "";
	if (r === "main") {
		l = H.mainCapsuleImgWidth;
		c = H.mainCapsuleImgHeight;
		u = H.MainCapsuleImageContainer;
	} else {
		l = H.headerCapsuleImgWidth;
		c = H.headerCapsuleImgHeight;
		u = H.HeaderCapsuleImageContainer;
	}
	return i.createElement(
		"div",
		{
			className: A_1(u, "CapsuleImageCtn"),
		},
		i.createElement(W.o, {
			lazyLoad: true,
			srcs: m,
			className: A_1(H.CapsuleImage),
			width: l,
			height: c,
			alt: o.GetName(),
		}),
	);
}
PA((e) => {
	const t = CLocLanguageArray.GetWithFallback(
		e.link.localized_link_capsule,
		e.language,
	);
	return i.createElement(
		x.q,
		{
			url: e.link.url,
			className: e.strClassName ? e.strClassName : undefined,
			bSkipForcingStoreLink: true,
		},
		i.createElement(
			"div",
			{
				className: H.CapsuleContainer,
			},
			Boolean(e.link.localized_link_capsule) &&
				i.createElement(ee.o, {
					className: H.LinkCapsuleImage,
					src: `${mJ()}${e.clanAccountID}/${t}`,
				}),
			Boolean(e.link.materialized_link_capsule) &&
				i.createElement("img", {
					className: H.LinkCapsuleImage,
					src: e.link.materialized_link_capsule,
				}),
		),
	);
});
