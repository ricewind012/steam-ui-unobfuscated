import { CLocLanguageArray } from "../../actual_src/utils/localization.js";
import n, { useMemo } from "./63696.js";
import { sf } from "./44846.js";
import { RR } from "./34875.js";
import { mJ } from "./36885.js";
import { A } from "./90765.js";
import { k2 } from "./53807.js";
import _m from "./72476.js";
import u from "./76802.js";
export function m(e) {
	const { gidEvent: t } = e;
	const r = RR(t);
	const [d, A] = useMemo(() => {
		if (
			r?.jsondata?.localized_sale_product_banner?.length > 0 &&
			r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
		) {
			const e = sf(_m.TS.LANGUAGE);
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
				return [`${mJ()}${e}/${t}`, `${mJ()}${e}/${n}`];
			}
		}
		return [null, null];
	}, [r]);
	if (d?.length > 0 && A?.length > 0) {
		return (
			<a href={k2(r.GetSaleURL())} className={u.Link}>
				<img src={d} className={A(u.Banner, u.Big)} />
				<img src={A} className={A(u.Banner, u.Mobile)} />
			</a>
		);
	} else {
		return null;
	}
}
