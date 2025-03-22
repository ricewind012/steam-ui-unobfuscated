var n = require(/*webcrack:missing*/ "./63696.js");
const i = (0, n.createContext)({});
export function x(e) {
	const { children: t, onSaveOrShareClipRequested: r } = e;
	const a = (0, n.useMemo)(
		() => ({
			onSaveOrShareClipRequested: r,
		}),
		[r],
	);
	return n.createElement(
		i.Provider,
		{
			value: a,
		},
		t,
	);
}
export function z() {
	const e = (0, n.useContext)(i);
	if (e.onSaveOrShareClipRequested) {
		return e.onSaveOrShareClipRequested;
	} else {
		console.error(
			"useShowClipShareSheet must be inside of a GameRecordingCallbacksWithShareSheet element",
		);
		return (e, t) => {};
	}
}
