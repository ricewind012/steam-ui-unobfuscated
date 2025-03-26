var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require("./34875.js");
var s = require(/*webcrack:missing*/ "./36885.js");
var o = require(/*webcrack:missing*/ "./90765.js");
import { CLocLanguageArray } from "../../actual_src/utils/localization.js";
var c = require(/*webcrack:missing*/ "./53807.js");
var _m = require(/*webcrack:missing*/ "./72476.js");
var u = require("./76802.js");
export function m(e) {
	const { gidEvent: t } = e;
	const r = (0, a.RR)(t);
	const [d, A] = (0, n.useMemo)(() => {
		if (
			r?.jsondata?.localized_sale_product_banner?.length > 0 &&
			r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
		) {
			const e = (0, i.sf)(_m.TS.LANGUAGE);
			const t = CLocLanguageArray.GetWithFallback(
				r.jsondata.localized_sale_product_banner,
				e,
			);
			const n = CLocLanguageArray.GetWithFallback(
				r.jsondata.localized_sale_product_mobile_banner,
				e,
			);
			if (t?.length > 0 && n?.length > 0) {
				const e = r.clanSteamID.GetAccountID();
				return [`${(0, s.mJ)()}${e}/${t}`, `${(0, s.mJ)()}${e}/${n}`];
			}
		}
		return [null, null];
	}, [r]);
	if (d?.length > 0 && A?.length > 0) {
		return n.createElement(
			"a",
			{
				href: (0, c.k2)(r.GetSaleURL()),
				className: u.Link,
			},
			n.createElement("img", {
				src: d,
				className: (0, o.A)(u.Banner, u.Big),
			}),
			n.createElement("img", {
				src: A,
				className: (0, o.A)(u.Banner, u.Mobile),
			}),
		);
	} else {
		return null;
	}
}
