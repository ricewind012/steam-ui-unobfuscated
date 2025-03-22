var r = require("./28864.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var s = require("./20893.js");
const o = i.createContext(function (e) {
	return {
		ShowVirtualKeyboard: () => {},
		ShowModalKeyboard: () => {},
		SetAsCurrentVirtualKeyboardTarget: () => {},
		HideVirtualKeyboard: () => {},
		DelayHideVirtualKeyboard: () => {},
		BIsActive: () => false,
		BIsElementValidForInput: () => false,
	};
});
export function F6(e) {
	const { factory: t, children: n } = e;
	const r = i.useMemo(() => t.CreateVirtualKeyboardRef.bind(t), [t]);
	return i.createElement(
		o.Provider,
		{
			value: r,
		},
		n,
	);
}
export function Cz(e, t) {
	const { onTextEntered: n, ...o } = e;
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
	const d = (0, r.QS)(
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
				t.push((0, s.VX)(e, u.ShowVirtualKeyboard));
				t.push((0, s.W1)(e, m));
			}
			return () => t.forEach((e) => e());
		},
		[m, u],
	);
	i.useLayoutEffect(() => {
		(0, r.cZ)(t, {
			TakeFocusAndShowKeyboard: () => {
				const e = a.current;
				if (e) {
					if (document.activeElement != e) {
						e.focus();
					}
					u.ShowVirtualKeyboard();
				}
			},
			HideVirtualKeyboard: () => {
				u.HideVirtualKeyboard();
			},
		});
		return () => (0, r.cZ)(t, null);
	}, [u, t]);
	return d;
}
export function FN(e) {
	const t = i.useRef();
	const n = i.useContext(o);
	t.current ||= n(e || {});
	return t.current;
}
