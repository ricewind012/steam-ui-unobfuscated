var n = require(/*webcrack:missing*/ "./63696.js");
const i = n.createContext({
	mode: "page",
	store: null,
});
export function th(e) {
	const {
		mode: t,
		store: r,
		closePopup: a,
		bPinnedView: s,
		onClickURL: o,
		bSpellcheckEnabled: l = true,
		setSpellcheckEnabled: c,
		children: m,
	} = e;
	const u = n.useMemo(
		() => ({
			mode: t,
			store: r,
			closePopup: a,
			bPinnedView: s,
			onClickURL: o,
			bSpellcheckEnabled: l,
			setSpellcheckEnabled: c,
		}),
		[t, r, a, s, o, l, c],
	);
	return n.createElement(
		i.Provider,
		{
			value: u,
		},
		m,
	);
}
export function O8() {
	return n.useContext(i).mode == "single";
}
export function qq() {
	return n.useContext(i).closePopup;
}
export function Sy() {
	return n.useContext(i).store;
}
export function wR() {
	return n.useContext(i).bPinnedView;
}
export function $G() {
	return n.useContext(i).onClickURL;
}
export function EC() {
	return n.useContext(i).bSpellcheckEnabled ?? true;
}
export function WA() {
	return n.useContext(i).setSpellcheckEnabled;
}
