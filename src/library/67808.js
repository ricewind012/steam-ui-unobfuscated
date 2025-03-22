var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./53833.js");
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
	return r.createElement(
		s.Provider,
		{
			value: a,
		},
		n,
	);
}
function c(e, t) {
	const n = e ? e.split(/\s/) : [];
	n.push(...(t ? t.split(/\s/) : []));
	return i.Ew(n).join(" ");
}
