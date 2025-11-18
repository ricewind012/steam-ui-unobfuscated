import { gc, l6 } from "./42898.js";
import i, { D5 } from "./28864.js";
import s from "./63696.js";
import o, { Vu } from "./35560.js";
const FocusContext = s.createContext({
	focusNavWindow: null,
	bSupportsFocus: true,
});
export function b5(e) {
	const {
		ownerWindow,
		refFocusNavContext,
		children,
		suppressGamepadInput = false,
	} = e;
	const m = Vu();
	const d = s.useContext(FocusContext);
	const [h] = s.useState(
		() =>
			d.focusNavWindow || m.CreateContext(ownerWindow, suppressGamepadInput),
	);
	const p = gc(m.NavigationSourceSupportsFocus) ?? false;
	s.useEffect(() => {
		h.OnMount(ownerWindow);
		if (ownerWindow.document.hasFocus()) {
			h.OnActivate(ownerWindow);
		}
		return () => {
			h.Destroy(ownerWindow);
		};
	}, [h, ownerWindow]);
	D5(refFocusNavContext, h);
	const g = s.useMemo(
		() => ({
			focusNavWindow: h,
			bSupportsFocus: p,
		}),
		[h, p],
	);
	return s.createElement(
		FocusContext.Provider,
		{
			value: g,
		},
		s.createElement(l, {
			ownerWindow: ownerWindow,
			context: h,
		}),
		children,
	);
}
function l(e) {
	const { ownerWindow, context } = e;
	const i = s.useMemo(
		() => () => context.OnActivate(ownerWindow),
		[context, ownerWindow],
	);
	const o = s.useMemo(
		() => () => context.OnDeactivate(ownerWindow),
		[context, ownerWindow],
	);
	l6(ownerWindow, "touchstart", i, {
		capture: true,
	});
	l6(ownerWindow, "mousedown", i, {
		capture: true,
	});
	l6(ownerWindow, "focus", i);
	l6(ownerWindow.document, "focusin", i);
	l6(ownerWindow, "blur", o);
	return null;
}
export function nN() {
	return s.useContext(FocusContext)?.focusNavWindow;
}
export function bJ(e = true) {
	return s.useContext(FocusContext)?.bSupportsFocus ?? e;
}
