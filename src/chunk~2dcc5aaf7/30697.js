import n from "./63696.js";
import { ww, sf } from "./44846.js";
import { MB } from "./95877.js";
import s from "./47628.js";
import l from "./25752.js";
import { A } from "./90765.js";
import m from "./72476.js";
const o = s;
import("../../actual_src/utils/localization.js");
export function p(e) {
	const { tagid, className } = e;
	const s = MB(tagid);
	if (!s) {
		return null;
	}
	const u = ww(sf(m.TS.LANGUAGE));
	const d = `${m.TS.STORE_BASE_URL}tags/${u}/${s?.name}`;
	return (
		<l.q url={d} className={A(o.Tag, "WidgetTag", className)}>
			{s.name}
		</l.q>
	);
}
