import { Unique } from "../../actual_src/utils/arrayutils.js";
import r from "./63696.js";
const s = r.createContext({
	body_class: "",
});
export function W() {
	return r.useContext(s);
}
export function p(e) {
	const { body_class: t, children: n } = e;
	const i = W();
	const a = r.useMemo(
		() => ({
			body_class: c(i.body_class, t),
		}),
		[i, t],
	);
	return <s.Provider value={a}>{n}</s.Provider>;
}
function c(e, t) {
	const n = e ? e.split(/\s/) : [];
	n.push(...(t ? t.split(/\s/) : []));
	return Unique(n).join(" ");
}
