var n = require(/*webcrack:missing*/ "./41230.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./69137.js");
var s = require(/*webcrack:missing*/ "./90242.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./4690.js");
require("./93023.js");
var c = require("./56655.js");
var m = require(/*webcrack:missing*/ "./45328.js");
var u = require(/*webcrack:missing*/ "./36885.js");
require("./78771.js");
var d = require("./5859.js");
var A = require("./58839.js");
var p = require("./82594.js");
var g = require("./68994.js");
var h = g;
var C = require("./72054.js");
var _ = require("./60762.js");
var f = require("./36723.js");
var b = require(/*webcrack:missing*/ "./83957.js");
var y = b;
var S = require("./55667.js");
var w = require("./83591.js");
var B = require("./991.js");
var v = require(/*webcrack:missing*/ "./92059.js");
var I = require("./59750.js");
var E = require(/*webcrack:missing*/ "./99251.js");
var M = require(/*webcrack:missing*/ "./28864.js");
function T(e) {
	const { appID: t, feature: r, depth: n, children: a } = e;
	const s = (0, v.ru)(r, n);
	const o = (0, I.b)();
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
	(0, i.useEffect)(() => {
		if (l) {
			o.AddImpression(l.appID, l.snr);
		}
	}, [o, l]);
	const u = (0, E.BL)(m);
	const d = t && (!l || (l.appID != t && l.snr != s));
	const A = (0, M.Ue)(a.ref, d ? u : undefined);
	return i.cloneElement(a, {
		ref: A,
	});
}
function R(e) {
	if (e == "bundle") {
		return "bundle";
	} else if (e == "sub") {
		return "sub";
	} else if ((0, B.f)(e)) {
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
var N = require("./97510.js");
var F = require(/*webcrack:missing*/ "./49455.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizePlural,
	CLocLanguageArray,
} from "../../actual_src/utils/localization.js";
var P = require(/*webcrack:missing*/ "./53807.js");
function L(e, t, r, n, i, a) {
	if (!r) {
		return;
	}
	var s;
	if (
		!((s = e.GetStoreItemType()) == 2
			? "bundle"
			: s == 1
				? "sub"
				: s == 0
					? "app"
					: null)
	) {
		(0, F.w)(
			false,
			"StoreItemWidgetSalePageAction: unexpected type: " + e.GetStoreItemType(),
		);
		return;
	}
	const o = (0, m.wJ)(`${e.GetStorePageURL(n)}${i ? `?${i}` : ""}`, t);
	return {
		onClick: (e) => {
			let t = GetOwningWindowForEvent(e) || window;
			if (a) {
				a(undefined);
			} else if (!o.startsWith("steam://")) {
				t.location.href = (0, P.NT)(o);
			}
		},
		onOKActionDescription: (0, Localize)("#Sale_Gamepad_Action_Select"),
	};
}
var z = require("./30697.js");
var x = require("./25752.js");
var U = require("./58084.js");
var W = require("./23337.js");
var V = require("./47628.js");
var H = V;
var j = require(/*webcrack:missing*/ "./90765.js");
function q(e) {
	const { info: t, bPreferLibrary: r } = e;
	const [n] = (0, p.G6)(t.id, (0, A.SW)(t.type), {
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
				className: (0, j.A)(
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
				className: (0, j.A)(
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
var Z = require(/*webcrack:missing*/ "./72476.js");
var Y = require("./95929.js");
function K(e) {
	const { bAllowOutsideOfDeck: t } = e;
	if (!(0, Z.Qn)() && !t) {
		return null;
	}
	let r = "unknown";
	switch (e.eDeckCompatibilityCategory) {
		case 3:
			r = "verified";
			break;
		case 2:
			r = "playable";
			break;
		case 1:
			r = "unsupported";
	}
	return i.createElement("div", {
		className: (0, j.A)(Y.CompatIcon, "ds_steam_deck_compat", r, e.className),
	});
}
var X = require(/*webcrack:missing*/ "./26853.js");
var J = require("./34036.js");
var $ = require("./74905.js");
var ee = require("./6561.js");
require("./15612.js");
require("./11735.js");
import { FailAssertion } from "../../actual_src/utils/assert.js";
var re = require(/*webcrack:missing*/ "./67784.js");
export const pb = (0, n.PA)((e) => {
	const {
		bIsHovered: t,
		setIsHovered: r,
		displayStoreItem: n,
		baseGameStoreItem: u,
		displayInfo: d,
		purchaseInfo: g,
		artworkInfo: b,
	} = (function (e, t) {
		const r = (0, i.useRef)(y.CancelToken.source());
		const { id: n, type: a } = e;
		const s = t
			? {
					...S.Xh,
					...t,
				}
			: S.Xh;
		const o = (0, i.useMemo)(
			() => ({
				id: n,
				type: a,
			}),
			[n, a],
		);
		const [l] = (0, p.G6)(o.id, (0, A.SW)(o.type), s);
		const [c, m] = (0, i.useState)({
			id: n,
			type: a,
		});
		const [u] = (0, p.G6)(c?.id, (0, A.SW)(c?.type), s);
		const d = (0, i.useMemo)(
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
		const [g] = (0, p.t7)(d?.id, s);
		const h = (0, i.useMemo)(
			() => ({
				id: u?.GetParentAppID() != u?.GetID() ? u?.GetParentAppID() : undefined,
				type: "game",
			}),
			[u],
		);
		const [C] = (0, p.t7)(h.id, s);
		const [_] = (0, i.useState)(++D.instance_count);
		const [f, b] = (0, i.useState)(false);
		const [B, v] = (0, i.useState)(R(a));
		const [I, E] = (0, i.useState)(n);
		(0, i.useEffect)(() => {
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
		(0, i.useEffect)(
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
	const Q = (0, v.n9)();
	const Y = i.useMemo(() => n?.GetIncludedAppIDsOrSelf(), [n]);
	const X = (0, i.useRef)(null);
	const [$, ee] = (0, i.useState)(false);
	const te = (0, Z.Qn)();
	(0, i.useEffect)(() => {
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
	const le = (0, m.L3)(Q);
	const ce = (0, a.tB)(n.GetStorePageURL(I));
	const me = Boolean(!F && ie > 0);
	const ue = n.BHasTags() ? n.GetTagIDs() : u?.BHasTags() ? u.GetTagIDs() : [];
	const de = n.GetStoreItemType() == 0;
	const Ae = (0, m.wJ)(ce, Q);
	const pe = (0, re.Ae)();
	const ge = te || n.BIsReleased() || n.BIsPrePurchase();
	return i.createElement(
		k,
		{
			appid: de ? n.GetAppID() : undefined,
		},
		i.createElement(
			o.Z,
			{
				className: (0, j.A)({
					[H.StoreSaleWidgetOuterContainer]: true,
					[H.AllowTwoLineHeader]: G,
				}),
				onMouseEnter: () => !pe && r(true),
				onMouseLeave: () => !pe && r(false),
				"flow-children": "grid",
				navEntryPreferPosition: l.iU.PREFERRED_CHILD,
				autoFocus: W,
				navKey: "preview_widget_" + n.GetID(),
			},
			i.createElement(
				s.ml,
				{
					onClick: q ? V : null,
					className: (0, j.A)(
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
						className: (0, j.A)(H.StoreSaleWidgetHalfLeft),
					},
					i.createElement(
						"a",
						{
							href: V ? undefined : Ae,
							target: Z.TS.IN_CLIENT || V ? undefined : "_blank",
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
						className: (0, j.A)(H.StoreSaleWidgetRight, me ? H.Bundle : ""),
					},
					Boolean(de && !V) &&
						i.createElement(J.EP, {
							appID: d.id,
							classOverride: (0, j.A)(h.WishlistButtonNotTop, "WishlistButton"),
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
								href: V ? undefined : Ae,
								target: Z.TS.IN_CLIENT ? undefined : "_blank",
								onClick: V,
							},
							i.createElement(
								"div",
								{
									className: (0, j.A)(
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
										key: "tag_" + e,
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
								className: (0, j.A)(
									H.StoreSaleWidgetShortDesc,
									"StoreSaleWidgetShortDesc",
								),
							},
							Boolean(se.startsWith("#") && se.indexOf(" ") == -1)
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
	const [r] = (0, p.G6)(t.id, (0, A.SW)(t.type), {});
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
	const [r] = (0, p.mZ)(t.id, (0, A.SW)(t.type), {
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
	const [n] = (0, p.G6)(t.id, (0, A.SW)(t.type), {
		include_assets: true,
	});
	let a;
	if (
		n &&
		n.GetIncludedAppIDs().length == 1 &&
		!(function (e, t) {
			const r = e?.GetAssets();
			if (!r) {
				return false;
			}
			switch (t) {
				case "header":
					return !!r.GetHeaderURL();
				case "main":
					return !!r.GetMainCapsuleURL();
				case "library":
					return !!r.GetHeroCapsuleURL() || !!r.GetLibraryCapsuleURL();
				default:
					FailAssertion(t, `Unhandled imageType: ${t}`);
					return false;
			}
		})(n, r) &&
		[1, 2].includes(n.GetStoreItemType())
	) {
		a = n.GetIncludedAppIDs()[0];
	}
	const [s] = (0, p.t7)(a, {
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
			className: (0, j.A)(u, "CapsuleImageCtn"),
		},
		i.createElement(W.o, {
			lazyLoad: true,
			srcs: m,
			className: (0, j.A)(H.CapsuleImage),
			width: l,
			height: c,
			alt: o.GetName(),
		}),
	);
}
(0, n.PA)((e) => {
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
					src: `${(0, u.mJ)()}${e.clanAccountID}/${t}`,
				}),
			Boolean(e.link.materialized_link_capsule) &&
				i.createElement("img", {
					className: H.LinkCapsuleImage,
					src: e.link.materialized_link_capsule,
				}),
		),
	);
});
