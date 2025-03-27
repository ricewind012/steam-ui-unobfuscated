import {
	Localize,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
import { Seconds } from "../../actual_src/utils/time.js";
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
import n, { useRef } from "./63696.js";
import i, { PA } from "./41230.js";
import a, { f } from "./991.js";
import s, { SW } from "./58839.js";
import o, { G6 } from "./82594.js";
import l from "./7552.js";
import c from "./15612.js";
import m from "./7081.js";
import "./80493.js";
import u from "./47628.js";
import A from "./11735.js";
import { A as A_1 } from "./90765.js";
import h from "./50376.js";
import C, { f1 } from "./12956.js";
import b from "./27793.js";
import { Lg } from "./83591.js";
const d = u;
export const wD = PA((e) => {
	const {
		info,
		bShowDemoButton,
		bShowPurchaseOptionsButton,
		fnOnPurchaseOptionsClick,
		bHidePrice,
		bHideWishlistButton,
		bShowDeckCompatibilityDialog,
		className,
	} = e;
	const VRef = useRef({
		include_release: true,
	});
	const [I] = G6(info.id, SW(info.type), VRef.current);
	const E = Lg(I?.GetAppID());
	if (!I) {
		return null;
	}
	const M = (I.GetAppType() === 1 && I.BIsReleased()) || I.BHasDemo();
	const T = f(info.type);
	const R = bShowDemoButton && T && M;
	let k = null;
	if (
		!E &&
		I?.GetBestPurchaseOption().is_free_to_keep &&
		I?.GetBestPurchaseOption().free_to_keep_ends
	) {
		const e = I.GetBestPurchaseOption().free_to_keep_ends;
		const t = Localize(
			"#Sale_default_label_Free_Promo_Description_Short",
			`${LocalizeRtime32ToShortDate(e)} @ ${LocalizeRTimeToHourAndMinutes(e, {
				bForce24HourClock: false,
			})}`,
		);
		k = (
			<div className={d.PurchaseOptionDetails}>
				{t}
				<b.o
					tooltip={Localize("#Sale_default_Tooltip_Free_Promo_Limitation")}
				/>
			</div>
		);
	}
	return (
		<div className={A_1(d.StoreActionWidgetContainer, className)}>
			{k}
			<div className={d.StoreSalePriceActionWidgetContainer}>
				{Boolean(!bHideWishlistButton && f(info.type)) && (
					<A._
						appid={info.id}
						bIsFree={I.BIsFree()}
						bIsComingSoon={I.BIsComingSoon()}
						className="WishlistBtn"
					/>
				)}
				{Boolean(R) && <m.j info={info} className={d.Action} />}
				{Boolean(!bHidePrice) &&
					I?.GetAppType() !== 1 &&
					(Boolean(bShowPurchaseOptionsButton && !I.BIsFree()) ? (
						<W fnOnPurchaseOptionsClick={fnOnPurchaseOptionsClick} />
					) : (
						<c.h info={info} className="CartBtn" />
					))}
				{Boolean(!bHidePrice) && <Wc info={info} />}
				{Boolean(bShowDeckCompatibilityDialog) && <l.Q8 storeItem={I} />}
			</div>
		</div>
	);
});
function W(e) {
	return (
		<div className={d.Action} onClick={e.fnOnPurchaseOptionsClick}>
			<span>
				{Localize("#EventDisplay_CallToAction_ShowPurchaseOptions_Button")}
			</span>
		</div>
	);
}
export function Wc(e) {
	const { info, ...r } = e;
	const [i] = G6(info?.id, SW(info?.type), {
		include_release: true,
	});
	return <Kb {...r} storeItem={i} />;
}
const v = 7;
export function Kb(e) {
	const { bSingleLineMode, storeItem, onlyOneDiscountPct } = e;
	const a = f1();
	if (!storeItem) {
		return null;
	}
	const s =
		!storeItem.BIsComingSoon() &&
		storeItem.GetReleaseDateRTime() + v * Seconds.PerDay > a;
	const o = A_1(
		d.StoreSalePriceWidgetContainer,
		bSingleLineMode && d.SingleLineMode,
		"StoreSalePriceWidgetContainer",
		s && d.NewItem,
	);
	if (e.bShowInLibrary) {
		return (
			<div className={o}>
				<div className={d.StoreSalePriceBox}>
					{Localize("#EventDisplay_CallToAction_InLibrary")}
				</div>
			</div>
		);
	}
	if (
		storeItem.BIsComingSoon() &&
		!storeItem.GetBestPurchaseOption()?.packageid
	) {
		return (
			<div className={o}>
				<div className={d.StoreSalePriceBox}>
					{Localize("#EventDisplay_CallToAction_ComingSoon")}
				</div>
			</div>
		);
	}
	if (storeItem.BIsFree()) {
		if (!storeItem.BIsFreeTemporary()) {
			if (storeItem.GetStoreItemType() == 0 && storeItem.GetAppType() == 1) {
				return (
					<div className={o}>
						{s && (
							<div className={d.StoreSaleNewItem}>{Localize("#Flag_New")}</div>
						)}
						<div className={d.StoreSalePriceBox}>
							{Localize("#EventDisplay_CallToAction_FreeDemo")}
						</div>
					</div>
				);
			} else {
				return (
					<div className={o}>
						{s && (
							<div className={d.StoreSaleNewItem}>{Localize("#Flag_New")}</div>
						)}
						<div className={d.StoreSalePriceBox}>
							{Localize("#EventDisplay_CallToAction_FreeToPlay")}
						</div>
					</div>
				);
			}
		}
		if (
			storeItem.GetBestPurchaseOption()?.is_free_to_keep &&
			!storeItem.GetBestPurchaseOption()?.formatted_original_price
		) {
			return (
				<div className={o}>
					<div className={d.StoreSalePriceBox}>
						{Localize("#EventDisplay_CallToAction_Free")}
					</div>
				</div>
			);
		}
	}
	const l = storeItem.GetBestPurchaseOption();
	if (!l || !l.formatted_final_price) {
		return null;
	}

	let { discount_pct, formatted_final_price } = l;

	let m =
		onlyOneDiscountPct ||
		storeItem.GetStoreItemType() != 2 ||
		l.bundle_discount_pct;
	return (
		<E
			bSingleLineMode={bSingleLineMode}
			nBaseDiscountPercentage={m}
			nDiscountPercentage={discount_pct}
			bIsPrePurchase={storeItem.BIsPrePurchase()}
			strBestPurchaseOriginalPriceFormatted={l.formatted_original_price}
			strBestPurchasePriceFormatted={formatted_final_price}
			bHideDiscountPercentForCompliance={l.hide_discount_pct_for_compliance}
			bShowNewFlag={s}
		/>
	);
}
function E(e) {
	const {
		bSingleLineMode,
		nDiscountPercentage,
		bIsPrePurchase,
		nBaseDiscountPercentage,
		strBestPurchaseOriginalPriceFormatted,
		strBestPurchasePriceFormatted,
		bHideDiscountPercentForCompliance,
		bShowNewFlag,
	} = e;
	const m = bHideDiscountPercentForCompliance && true;
	return (
		<div
			className={A_1({
				[d.StoreSalePriceWidgetContainer]: true,
				[d.SingleLineMode]: bSingleLineMode,
				StoreSalePriceWidgetContainer: true,
				[d.Discounted]: Boolean(nDiscountPercentage),
				Discounted: Boolean(nDiscountPercentage),
				[d.PrePurchase]: Boolean(bIsPrePurchase),
				[d.NewItem]: Boolean(bShowNewFlag),
			})}
		>
			{Boolean(bIsPrePurchase) && (
				<div className={A_1(d.StoreSalePriceBox, d.StoreSalePrepurchaseLabel)}>
					<span>
						{Localize("#EventDisplay_CallToAction_Prepurchase_Short")}
					</span>
				</div>
			)}
			{Boolean(!bIsPrePurchase && bShowNewFlag) && (
				<div className={d.StoreSaleNewItem}>{Localize("#Flag_New")}</div>
			)}
			{Boolean(nBaseDiscountPercentage && nDiscountPercentage && !m) && (
				<span className={A_1(d.BaseDiscount)}>
					{`-${nBaseDiscountPercentage}%`}
				</span>
			)}
			{Boolean(nDiscountPercentage && !m) && (
				<div className={d.StoreSaleDiscountBox}>
					{`-${nDiscountPercentage}%`}
				</div>
			)}
			{Boolean(m) && (
				<div className={d.DiscountIconCtn}>
					<h.XH_ />
				</div>
			)}
			{Boolean(
				nDiscountPercentage && strBestPurchaseOriginalPriceFormatted && !m,
			) ? (
				<div className={A_1(d.StoreSaleDiscountedPriceCtn)}>
					<div
						className={A_1({
							[d.SingleLineOriginalPrice]: bSingleLineMode,
							[d.StoreOriginalPrice]: !bSingleLineMode,
						})}
					>
						{strBestPurchaseOriginalPriceFormatted}
					</div>
					<div
						className={A_1({
							[d.StoreSalePriceBox]: true,
							[d.SingleLineMode]: bSingleLineMode,
						})}
					>
						{strBestPurchasePriceFormatted}
					</div>
				</div>
			) : (
				<div className={d.StoreSalePriceBox}>
					{strBestPurchasePriceFormatted}
				</div>
			)}
		</div>
	);
}
