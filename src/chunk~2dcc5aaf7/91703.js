import n from "./63696.js";
import i, { W6 } from "./49519.js";
import a from "./79769.js";
import s from "./37449.js";
import o, { tn } from "./18869.js";
import l from "./13688.js";
import c from "./85360.js";
export let K1 = o.K1;
export let GL = o.GL;
export function Cu(e, t, r) {
	const a = W6();
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
		case 4: {
			m = s.B.GamepadUI.ControllerConfigurator.Buttons(e);
			break;
		}
		case 6:
		case 7: {
			m = s.B.GamepadUI.ControllerConfigurator.Triggers(e);
			break;
		}
		case 11:
		case 1:
		case 2: {
			m = s.B.GamepadUI.ControllerConfigurator.Touchpads(e);
			break;
		}
		case 13: {
			m = s.B.GamepadUI.ControllerConfigurator.DPad(e);
			break;
		}
		case 10: {
			m = s.B.GamepadUI.ControllerConfigurator.Gyroscopes(e);
			break;
		}
		case 3:
		case 12: {
			m = s.B.GamepadUI.ControllerConfigurator.Sticks(e);
		}
	}
	const u = tn(m, {
		state: l,
	});
	return n.useCallback(() => {
		c.v3.Navigate(a, m, u);
	}, [a, m, u]);
}
export function rc(e) {
	const { children, fnFocusNavigationRoot } = e;
	const IRef = n.useRef(undefined);
	IRef.current ||= {
		OnNavigateBack: new a.lu(),
		refGlobalBackOverride: {
			current: undefined,
		},
		rgSuppressForwardBackNavigation: [],
	};
	const s = n.useMemo(
		() => ({
			...IRef.current,
			fnFocusNavigationRoot: fnFocusNavigationRoot,
		}),
		[fnFocusNavigationRoot],
	);
	return (
		<o.GL.Provider value={s}>
			<l.wZ>{children}</l.wZ>
		</o.GL.Provider>
	);
}
