import n, { createContext, useMemo, useContext } from "./63696.js";
const IContext = createContext({});
export function x(e) {
	const { children, onSaveOrShareClipRequested } = e;
	const a = useMemo(
		() => ({
			onSaveOrShareClipRequested: onSaveOrShareClipRequested,
		}),
		[onSaveOrShareClipRequested],
	);
	return <IContext.Provider value={a}>{children}</IContext.Provider>;
}
export function z() {
	const e = useContext(IContext);
	if (e.onSaveOrShareClipRequested) {
		return e.onSaveOrShareClipRequested;
	} else {
		console.error(
			"useShowClipShareSheet must be inside of a GameRecordingCallbacksWithShareSheet element",
		);
		return (e, t) => {};
	}
}
