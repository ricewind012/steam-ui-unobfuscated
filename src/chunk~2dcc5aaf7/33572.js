export var _5;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./96680.js");
(function (e) {
	e[(e.Headless = 0)] = "Headless";
	e[(e.Full = 1)] = "Full";
	e[(e.StandaloneKeyboard = 2)] = "StandaloneKeyboard";
	e[(e.ControllerConfigurator = 3)] = "ControllerConfigurator";
	e[(e.Overlay = 4)] = "Overlay";
})((_5 ||= {}));
const s = i.createContext({});
export const oH = () => i.useContext(s);
export function Fq(e) {
	const { mode: t, forcedAppID: r, children: n } = e;
	const a = i.useMemo(
		() => ({
			mode: t,
			forcedAppID: r,
		}),
		[t, r],
	);
	return i.createElement(
		s.Provider,
		{
			value: a,
		},
		n,
	);
}
export function we() {
	return (0, a.$2)()?.HeaderStore;
}
export function SA() {
	return (0, a.$2)()?.FooterStore;
}
export function IB() {
	return (0, a.$2)()?.CompositionStateStore;
}
export function ch() {
	return (0, a.$2)()?.MenuStore;
}
export function K1() {
	return (0, a.$2)()?.FocusApplicationRoot;
}
export function D7() {
	return (0, a.$2)()?.VirtualKeyboardManager;
}
export function Xp() {
	return (0, a.$2)()?.ActionDescriptionStore;
}
