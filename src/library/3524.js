var r = require("./42898.js");
var i = require("./28864.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./35560.js");
const a = s.createContext({
	focusNavWindow: null,
	bSupportsFocus: true,
});
export function b5(e) {
	const {
		ownerWindow: t,
		refFocusNavContext: n,
		children: c,
		suppressGamepadInput: u = false,
	} = e;
	const m = (0, o.Vu)();
	const d = s.useContext(a);
	const [h] = s.useState(() => d.focusNavWindow || m.CreateContext(t, u));
	const p = (0, r.gc)(m.NavigationSourceSupportsFocus) ?? false;
	s.useEffect(() => {
		h.OnMount(t);
		if (t.document.hasFocus()) {
			h.OnActivate(t);
		}
		return () => {
			h.Destroy(t);
		};
	}, [h, t]);
	(0, i.D5)(n, h);
	const g = s.useMemo(
		() => ({
			focusNavWindow: h,
			bSupportsFocus: p,
		}),
		[h, p],
	);
	return s.createElement(
		a.Provider,
		{
			value: g,
		},
		s.createElement(l, {
			ownerWindow: t,
			context: h,
		}),
		c,
	);
}
function l(e) {
	const { ownerWindow: t, context: n } = e;
	const i = s.useMemo(() => () => n.OnActivate(t), [n, t]);
	const o = s.useMemo(() => () => n.OnDeactivate(t), [n, t]);
	(0, r.l6)(t, "touchstart", i, {
		capture: true,
	});
	(0, r.l6)(t, "mousedown", i, {
		capture: true,
	});
	(0, r.l6)(t, "focus", i);
	(0, r.l6)(t.document, "focusin", i);
	(0, r.l6)(t, "blur", o);
	return null;
}
export function nN() {
	return s.useContext(a)?.focusNavWindow;
}
export function bJ(e = true) {
	return s.useContext(a)?.bSupportsFocus ?? e;
}
