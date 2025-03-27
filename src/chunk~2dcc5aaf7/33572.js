import i from "./63696.js";
import a, { $2 } from "./96680.js";
export let _5;
((e) => {
	e[(e.Headless = 0)] = "Headless";
	e[(e.Full = 1)] = "Full";
	e[(e.StandaloneKeyboard = 2)] = "StandaloneKeyboard";
	e[(e.ControllerConfigurator = 3)] = "ControllerConfigurator";
	e[(e.Overlay = 4)] = "Overlay";
})((_5 ||= {}));
const SContext = i.createContext({});
export const oH = () => i.useContext(SContext);
export function Fq(e) {
	const { mode, forcedAppID, children } = e;
	const a = i.useMemo(
		() => ({
			mode: mode,
			forcedAppID: forcedAppID,
		}),
		[mode, forcedAppID],
	);
	return <SContext.Provider value={a}>{children}</SContext.Provider>;
}
export function we() {
	return $2()?.HeaderStore;
}
export function SA() {
	return $2()?.FooterStore;
}
export function IB() {
	return $2()?.CompositionStateStore;
}
export function ch() {
	return $2()?.MenuStore;
}
export function K1() {
	return $2()?.FocusApplicationRoot;
}
export function D7() {
	return $2()?.VirtualKeyboardManager;
}
export function Xp() {
	return $2()?.ActionDescriptionStore;
}
