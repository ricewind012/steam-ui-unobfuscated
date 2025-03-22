export let K1 = o.K1;
export let GL = o.GL;
var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require(/*webcrack:missing*/ "./79769.js");
var s = require("./37449.js");
var o = require("./18869.js");
var l = require("./13688.js");
var c = require("./85360.js");
export function Cu(e, t, r) {
	const a = (0, i.W6)();
	const l = n.useMemo(
		() => ({
			appid: e,
			source: t,
			input: r,
		}),
		[e, t, r],
	);
	let m = "";
	switch (t) {
		default:
		case 5:
		case 4:
			m = s.B.GamepadUI.ControllerConfigurator.Buttons(e);
			break;
		case 6:
		case 7:
			m = s.B.GamepadUI.ControllerConfigurator.Triggers(e);
			break;
		case 11:
		case 1:
		case 2:
			m = s.B.GamepadUI.ControllerConfigurator.Touchpads(e);
			break;
		case 13:
			m = s.B.GamepadUI.ControllerConfigurator.DPad(e);
			break;
		case 10:
			m = s.B.GamepadUI.ControllerConfigurator.Gyroscopes(e);
			break;
		case 3:
		case 12:
			m = s.B.GamepadUI.ControllerConfigurator.Sticks(e);
	}
	const u = (0, o.tn)(m, {
		state: l,
	});
	return n.useCallback(() => {
		c.v3.Navigate(a, m, u);
	}, [a, m, u]);
}
export function rc(e) {
	const { children: t, fnFocusNavigationRoot: r } = e;
	const i = n.useRef(undefined);
	i.current ||= {
		OnNavigateBack: new a.lu(),
		refGlobalBackOverride: {
			current: undefined,
		},
		rgSuppressForwardBackNavigation: [],
	};
	const s = n.useMemo(
		() => ({
			...i.current,
			fnFocusNavigationRoot: r,
		}),
		[r],
	);
	return n.createElement(
		o.GL.Provider,
		{
			value: s,
		},
		n.createElement(l.wZ, null, t),
	);
}
