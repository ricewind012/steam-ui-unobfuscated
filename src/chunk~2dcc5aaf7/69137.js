import n from "./63696.js";
import i, { p, E } from "./92008.js";
import { OZ } from "./45328.js";
import s from "./98995.js";
import { wm, NT, Qz } from "./53807.js";
import l from "./72476.js";
function c(e, t) {
	return p(
		e,
		((e) => [
			e?.jsondata?.read_more_link
				? wm(e.jsondata.read_more_link).toLocaleLowerCase()
				: undefined,
		])(t),
	);
}
export function tB(e, t) {
	return (e = c(e, t)
		? (l.TS.IN_CLIENT ? "steam://openurl_external/" : "") + E(e)
		: NT(e));
}
export function Pm(e, t, r) {
	let i = e;
	if (!i.toLowerCase().startsWith("http")) {
		i = `http://${i}`;
	}
	return (
		<D$ url={i} event={t}>
			{r || e}
		</D$>
	);
}
export const D$ = (e) => {
	const { url, event, className } = e;
	let c;
	let u = OZ(url);
	u = tB(u, event);
	if (p(u)) {
		c = "noopener nofollow";
	}
	const d =
		typeof e.children == "string" &&
		e.children.length > 0 &&
		url &&
		!url.startsWith("steam://")
			? Qz(url)
			: undefined;
	return (
		<s.Gq toolTipContent={d} direction="top">
			<a className={className} href={u} rel={c} id={e.id}>
				{e.children}
			</a>
		</s.Gq>
	);
};
