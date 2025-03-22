var r = require("./28864.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./78325.js");
var o = require("./15123.js");
var a = require("./88808.js");
var c = require("./42318.js");
var l = require("./36437.js");
var u = require("./3673.js");
const m = i.createContext({});
export const EO = i.memo(function (e) {
	const {
		children: t,
		bRenderOverlayAtRoot: n,
		refModalManager: d,
		DialogWrapper: h,
		bUseDialogElement: p = true,
		ContextMenuComponent: g = a.k,
		refContextMenuManager: f,
		browserInfo: _,
		bUsePopups: w,
		bOnlyPopups: b,
		bCenterPopupsOnWindow: C,
		bRegisterManagersWithWindow: v = true,
		...M
	} = e;
	const S = i.useRef();
	S.current ||= new u.SZ();
	let y = i.createElement(l.L, {
		...M,
		DialogWrapper: h,
		ModalManager: S.current,
		bUseDialogElement: p,
		bRegisterModalManager: v,
		rctActiveContextMenus: i.createElement(g, null),
	});
	if (
		e.bRenderOverlayAtRoot &&
		typeof document != "undefined" &&
		"body" in document
	) {
		y = s.createPortal(y, document.body);
	}
	(0, r.D5)(d, S.current);
	if (w !== undefined) {
		S.current?.SetUsePopups(w);
	}
	if (C !== undefined) {
		S.current?.SetCenterPopupsOnWindow(C);
	}
	if (b !== undefined) {
		S.current?.SetOnlyPopups(b);
	}
	S.current.SetBrowserInfo(_);
	const E = i.useMemo(
		() => ({
			ModalManager: S.current,
			DialogWrapper: h,
		}),
		[h],
	);
	return i.createElement(
		m.Provider,
		{
			value: E,
		},
		i.createElement(
			o.D,
			{
				refContextMenuManager: f,
				bRegisterMenuManager: v,
			},
			i.createElement(c.tH, null, y),
			e.children,
		),
	);
});
export function yk() {
	return i.useContext(m).ModalManager;
}
export function oJ() {
	return i.useContext(m).DialogWrapper;
}
export function uH(e) {
	const t = yk();
	i.useEffect(() => {
		if (e) {
			return u.BR.RegisterModalManager(t, e);
		}
	}, [e, t]);
}
