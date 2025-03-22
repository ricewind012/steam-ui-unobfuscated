var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./96680.js");
var a = require("./91190.js");
const s = n.lazy(() => require.e(7462).then(require.bind(require, 32676)));
export function xj(e) {
	let t = (0, i.$2)();
	return n.useCallback(() => {
		if (e) {
			t.BrowserWindow.location.href = e;
		}
	}, [t, e]);
}
export function MN(e) {
	const { fnDismiss: t, ...r } = e;
	return n.createElement(
		m,
		null,
		n.createElement(s, {
			...r,
		}),
	);
}
export function YW(e) {
	const { fnDismiss: t, ...r } = e;
	return n.createElement(
		m,
		null,
		n.createElement(
			"div",
			{
				className: a.OverlayContainer,
			},
			n.createElement(s, {
				...r,
			}),
		),
	);
}
function m(e) {
	return n.createElement(
		"div",
		{
			className: a.SpacingContainer,
		},
		e.children,
	);
}
