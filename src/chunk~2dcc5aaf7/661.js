import n, { createContext, useMemo, useContext } from "./63696.js";
const IContext = createContext({});
export function m(e) {
	const {
		children,
		onMarkerCreated,
		onNavigateToClip,
		onNavigateToScreenshot,
		onSetGamepadHeaderVisible,
		onShowProgressBar,
		onNavigateToGRSettings,
		onNavigateToMedia,
		onNavigateToFAQ,
		onShowError,
	} = e;
	const A = useMemo(
		() => ({
			onMarkerCreated: onMarkerCreated,
			onNavigateToClip: onNavigateToClip,
			onNavigateToGRSettings: onNavigateToGRSettings,
			onNavigateToScreenshot: onNavigateToScreenshot,
			onSetGamepadHeaderVisible: onSetGamepadHeaderVisible,
			onShowProgressBar: onShowProgressBar,
			onNavigateToMedia: onNavigateToMedia,
			onNavigateToFAQ: onNavigateToFAQ,
			onShowError: onShowError,
		}),
		[
			onNavigateToClip,
			onMarkerCreated,
			onNavigateToScreenshot,
			onSetGamepadHeaderVisible,
			onShowProgressBar,
			onNavigateToGRSettings,
			onNavigateToMedia,
			onNavigateToFAQ,
			onShowError,
		],
	);
	return <IContext.Provider value={A}>{children}</IContext.Provider>;
}
export function f() {
	return useContext(IContext);
}
