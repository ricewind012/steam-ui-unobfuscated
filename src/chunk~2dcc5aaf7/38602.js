import n from "./63696.js";
const IContext = n.createContext({
	mode: "page",
	store: null,
});
export function th(e) {
	const {
		mode,
		store,
		closePopup,
		bPinnedView,
		onClickURL,
		bSpellcheckEnabled = true,
		setSpellcheckEnabled,
		children,
	} = e;
	const u = n.useMemo(
		() => ({
			mode: mode,
			store: store,
			closePopup: closePopup,
			bPinnedView: bPinnedView,
			onClickURL: onClickURL,
			bSpellcheckEnabled: bSpellcheckEnabled,
			setSpellcheckEnabled: setSpellcheckEnabled,
		}),
		[
			mode,
			store,
			closePopup,
			bPinnedView,
			onClickURL,
			bSpellcheckEnabled,
			setSpellcheckEnabled,
		],
	);
	return <IContext.Provider value={u}>{children}</IContext.Provider>;
}
export function O8() {
	return n.useContext(IContext).mode == "single";
}
export function qq() {
	return n.useContext(IContext).closePopup;
}
export function Sy() {
	return n.useContext(IContext).store;
}
export function wR() {
	return n.useContext(IContext).bPinnedView;
}
export function $G() {
	return n.useContext(IContext).onClickURL;
}
export function EC() {
	return n.useContext(IContext).bSpellcheckEnabled ?? true;
}
export function WA() {
	return n.useContext(IContext).setSpellcheckEnabled;
}
