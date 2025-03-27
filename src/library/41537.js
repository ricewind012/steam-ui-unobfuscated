import r, { QS, cZ } from "./28864.js";
import i from "./63696.js";
import { VX, W1 } from "./20893.js";
const OContext = i.createContext((e) => ({
	ShowVirtualKeyboard: () => {},
	ShowModalKeyboard: () => {},
	SetAsCurrentVirtualKeyboardTarget: () => {},
	HideVirtualKeyboard: () => {},
	DelayHideVirtualKeyboard: () => {},
	BIsActive: () => false,
	BIsElementValidForInput: () => false,
}));
export function F6(e) {
	const { factory, children } = e;
	const r = i.useMemo(
		() => factory.CreateVirtualKeyboardRef.bind(factory),
		[factory],
	);
	return <OContext.Provider value={r}>{children}</OContext.Provider>;
}
export function Cz(e, t) {
	const { onTextEntered, ...o } = e;
	const a = i.useRef(null);
	const c = i.useRef({});
	Object.assign(c.current, {
		...o,
		BIsElementValidForInput: () =>
			a.current && document.activeElement == a.current,
	});
	const u = FN(c.current);
	const m = i.useCallback(
		(e) => {
			if (document.hasFocus() || document.activeElement != a.current) {
				if (e.currentTarget == a.current) {
					if (u.BIsActive() || u.bInVR) {
						u.DelayHideVirtualKeyboard();
					}
				} else {
					console.warn(
						"keyboard got blur event, but it's not the active element",
					);
				}
			}
		},
		[u],
	);
	const d = QS(
		(e) => {
			a.current = e;
			const t = [];
			if (e) {
				e.addEventListener("focus", u.SetAsCurrentVirtualKeyboardTarget);
				t.push(() =>
					e.removeEventListener("focus", u.SetAsCurrentVirtualKeyboardTarget),
				);
				e.addEventListener("click", u.ShowVirtualKeyboard);
				t.push(() => e.removeEventListener("click", u.ShowVirtualKeyboard));
				t.push(VX(e, u.ShowVirtualKeyboard));
				t.push(W1(e, m));
			}
			return () => t.forEach((e) => e());
		},
		[m, u],
	);
	i.useLayoutEffect(() => {
		cZ(t, {
			TakeFocusAndShowKeyboard: () => {
				const a_current = a.current;
				if (a_current) {
					if (document.activeElement != a_current) {
						a_current.focus();
					}
					u.ShowVirtualKeyboard();
				}
			},
			HideVirtualKeyboard: () => {
				u.HideVirtualKeyboard();
			},
		});
		return () => cZ(t, null);
	}, [u, t]);
	return d;
}
export function FN(e) {
	const t = i.useRef();
	const n = i.useContext(OContext);
	t.current ||= n(e || {});
	return t.current;
}
