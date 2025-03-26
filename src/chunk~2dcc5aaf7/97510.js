var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./991.js");
var s = require("./58839.js");
var o = require("./82594.js");
var l = require("./7552.js");
var c = require("./15612.js");
var m = require("./7081.js");
require("./80493.js");
var u = require("./47628.js");
var d = u;
var A = require("./11735.js");
var p = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
var h = require(/*webcrack:missing*/ "./50376.js");
var C = require("./12956.js");
import { Seconds } from "../../actual_src/utils/time.js";
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
var b = require("./27793.js");
var y = require("./83591.js");
export const wD = (0, i.PA)((e) => {
	const {
		info: t,
		bShowDemoButton: r,
		bShowPurchaseOptionsButton: i,
		fnOnPurchaseOptionsClick: u,
		bHidePrice: h,
		bHideWishlistButton: C,
		bShowDeckCompatibilityDialog: _,
		className: S,
	} = e;
	const v = (0, n.useRef)({
		include_release: true,
	});
	const [I] = (0, o.G6)(t.id, (0, s.SW)(t.type), v.current);
	const E = (0, y.Lg)(I?.GetAppID());
	if (!I) {
		return null;
	}
	const M = (I.GetAppType() === 1 && I.BIsReleased()) || I.BHasDemo();
	const T = (0, a.f)(t.type);
	const R = r && T && M;
	let k = null;
	if (
		!E &&
		I?.GetBestPurchaseOption().is_free_to_keep &&
		I?.GetBestPurchaseOption().free_to_keep_ends
	) {
		const e = I.GetBestPurchaseOption().free_to_keep_ends;
		const t = Localize(
			"#Sale_default_label_Free_Promo_Description_Short",
			LocalizeRtime32ToShortDate(e) +
				" @ " +
				LocalizeRTimeToHourAndMinutes(e, {
					bForce24HourClock: false,
				}),
		);
		k = n.createElement(
			"div",
			{
				className: d.PurchaseOptionDetails,
			},
			t,
			n.createElement(b.o, {
				tooltip: Localize("#Sale_default_Tooltip_Free_Promo_Limitation"),
			}),
		);
	}
	return n.createElement(
		"div",
		{
			className: (0, p.A)(d.StoreActionWidgetContainer, S),
		},
		k,
		n.createElement(
			"div",
			{
				className: d.StoreSalePriceActionWidgetContainer,
			},
			Boolean(!C && (0, a.f)(t.type)) &&
				n.createElement(A._, {
					appid: t.id,
					bIsFree: I.BIsFree(),
					bIsComingSoon: I.BIsComingSoon(),
					className: "WishlistBtn",
				}),
			Boolean(R) &&
				n.createElement(m.j, {
					info: t,
					className: d.Action,
				}),
			Boolean(!h) &&
				I?.GetAppType() !== 1 &&
				(Boolean(i && !I.BIsFree())
					? n.createElement(w, {
							fnOnPurchaseOptionsClick: u,
						})
					: n.createElement(c.h, {
							info: t,
							className: "CartBtn",
						})),
			Boolean(!h) &&
				n.createElement(wc, {
					info: t,
				}),
			Boolean(_) &&
				n.createElement(l.Q8, {
					storeItem: I,
				}),
		),
	);
});
function w(e) {
	return n.createElement(
		"div",
		{
			className: d.Action,
			onClick: e.fnOnPurchaseOptionsClick,
		},
		n.createElement(
			"span",
			null,
			Localize("#EventDisplay_CallToAction_ShowPurchaseOptions_Button"),
		),
	);
}
export function wc(e) {
	const { info: t, ...r } = e;
	const [i] = (0, o.G6)(t?.id, (0, s.SW)(t?.type), {
		include_release: true,
	});
	return n.createElement(kb, {
		...r,
		storeItem: i,
	});
}
const v = 7;
export function kb(e) {
	const { bSingleLineMode: t, storeItem: r, onlyOneDiscountPct: i } = e;
	const a = (0, C.f1)();
	if (!r) {
		return null;
	}
	const s =
		!r.BIsComingSoon() && r.GetReleaseDateRTime() + v * Seconds.PerDay > a;
	const o = (0, p.A)(
		d.StoreSalePriceWidgetContainer,
		t && d.SingleLineMode,
		"StoreSalePriceWidgetContainer",
		s && d.NewItem,
	);
	if (e.bShowInLibrary) {
		return n.createElement(
			"div",
			{
				className: o,
			},
			n.createElement(
				"div",
				{
					className: d.StoreSalePriceBox,
				},
				Localize("#EventDisplay_CallToAction_InLibrary"),
			),
		);
	}
	if (r.BIsComingSoon() && !r.GetBestPurchaseOption()?.packageid) {
		return n.createElement(
			"div",
			{
				className: o,
			},
			n.createElement(
				"div",
				{
					className: d.StoreSalePriceBox,
				},
				Localize("#EventDisplay_CallToAction_ComingSoon"),
			),
		);
	}
	if (r.BIsFree()) {
		if (!r.BIsFreeTemporary()) {
			if (r.GetStoreItemType() == 0 && r.GetAppType() == 1) {
				return n.createElement(
					"div",
					{
						className: o,
					},
					s &&
						n.createElement(
							"div",
							{
								className: d.StoreSaleNewItem,
							},
							Localize("#Flag_New"),
						),
					n.createElement(
						"div",
						{
							className: d.StoreSalePriceBox,
						},
						Localize("#EventDisplay_CallToAction_FreeDemo"),
					),
				);
			} else {
				return n.createElement(
					"div",
					{
						className: o,
					},
					s &&
						n.createElement(
							"div",
							{
								className: d.StoreSaleNewItem,
							},
							Localize("#Flag_New"),
						),
					n.createElement(
						"div",
						{
							className: d.StoreSalePriceBox,
						},
						Localize("#EventDisplay_CallToAction_FreeToPlay"),
					),
				);
			}
		}
		if (
			r.GetBestPurchaseOption()?.is_free_to_keep &&
			!r.GetBestPurchaseOption()?.formatted_original_price
		) {
			return n.createElement(
				"div",
				{
					className: o,
				},
				n.createElement(
					"div",
					{
						className: d.StoreSalePriceBox,
					},
					Localize("#EventDisplay_CallToAction_Free"),
				),
			);
		}
	}
	const l = r.GetBestPurchaseOption();
	if (!l || !l.formatted_final_price) {
		return null;
	}
	let c = l.discount_pct;
	let m = i || r.GetStoreItemType() != 2 ? undefined : l.bundle_discount_pct;
	let u = l.formatted_final_price;
	return n.createElement(E, {
		bSingleLineMode: t,
		nBaseDiscountPercentage: m,
		nDiscountPercentage: c,
		bIsPrePurchase: r.BIsPrePurchase(),
		strBestPurchaseOriginalPriceFormatted: l.formatted_original_price,
		strBestPurchasePriceFormatted: u,
		bHideDiscountPercentForCompliance: l.hide_discount_pct_for_compliance,
		bShowNewFlag: s,
	});
}
function E(e) {
	const {
		bSingleLineMode: t,
		nDiscountPercentage: r,
		bIsPrePurchase: i,
		nBaseDiscountPercentage: a,
		strBestPurchaseOriginalPriceFormatted: s,
		strBestPurchasePriceFormatted: o,
		bHideDiscountPercentForCompliance: l,
		bShowNewFlag: c,
	} = e;
	const m = l && true;
	return n.createElement(
		"div",
		{
			className: (0, p.A)({
				[d.StoreSalePriceWidgetContainer]: true,
				[d.SingleLineMode]: t,
				StoreSalePriceWidgetContainer: true,
				[d.Discounted]: Boolean(r),
				Discounted: Boolean(r),
				[d.PrePurchase]: Boolean(i),
				[d.NewItem]: Boolean(c),
			}),
		},
		Boolean(i) &&
			n.createElement(
				"div",
				{
					className: (0, p.A)(d.StoreSalePriceBox, d.StoreSalePrepurchaseLabel),
				},
				n.createElement(
					"span",
					null,
					Localize("#EventDisplay_CallToAction_Prepurchase_Short"),
				),
			),
		Boolean(!i && c) &&
			n.createElement(
				"div",
				{
					className: d.StoreSaleNewItem,
				},
				Localize("#Flag_New"),
			),
		Boolean(a && r && !m) &&
			n.createElement(
				"span",
				{
					className: (0, p.A)(d.BaseDiscount),
				},
				`-${a}%`,
			),
		Boolean(r && !m) &&
			n.createElement(
				"div",
				{
					className: d.StoreSaleDiscountBox,
				},
				`-${r}%`,
			),
		Boolean(m) &&
			n.createElement(
				"div",
				{
					className: d.DiscountIconCtn,
				},
				n.createElement(h.XH_, null),
			),
		Boolean(r && s && !m)
			? n.createElement(
					"div",
					{
						className: (0, p.A)(d.StoreSaleDiscountedPriceCtn),
					},
					n.createElement(
						"div",
						{
							className: (0, p.A)({
								[d.SingleLineOriginalPrice]: t,
								[d.StoreOriginalPrice]: !t,
							}),
						},
						s,
					),
					n.createElement(
						"div",
						{
							className: (0, p.A)({
								[d.StoreSalePriceBox]: true,
								[d.SingleLineMode]: t,
							}),
						},
						o,
					),
				)
			: n.createElement(
					"div",
					{
						className: d.StoreSalePriceBox,
					},
					o,
				),
	);
}
