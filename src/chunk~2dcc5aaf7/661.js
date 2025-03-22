var n = require(/*webcrack:missing*/ "./63696.js");
const i = (0, n.createContext)({});
export function m(e) {
	const {
		children: t,
		onMarkerCreated: r,
		onNavigateToClip: a,
		onNavigateToScreenshot: s,
		onSetGamepadHeaderVisible: o,
		onShowProgressBar: l,
		onNavigateToGRSettings: c,
		onNavigateToMedia: m,
		onNavigateToFAQ: u,
		onShowError: d,
	} = e;
	const A = (0, n.useMemo)(
		() => ({
			onMarkerCreated: r,
			onNavigateToClip: a,
			onNavigateToGRSettings: c,
			onNavigateToScreenshot: s,
			onSetGamepadHeaderVisible: o,
			onShowProgressBar: l,
			onNavigateToMedia: m,
			onNavigateToFAQ: u,
			onShowError: d,
		}),
		[a, r, s, o, l, c, m, u, d],
	);
	return n.createElement(
		i.Provider,
		{
			value: A,
		},
		t,
	);
}
export function f() {
	return (0, n.useContext)(i);
}
