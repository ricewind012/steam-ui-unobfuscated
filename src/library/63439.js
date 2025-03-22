var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./11131.js");
var s = require("./67808.js");
var o = require("./44846.js");
var a = require("./90765.js");
var c = require("./24295.js");
var l = require("./36229.js");
export function Cb(e, t) {
	const n = r.useCallback(
		(n, r) => {
			if (e?.onCreate) {
				e.onCreate(n, r);
			}
			if (t?.onCreate) {
				t.onCreate(n, r);
			}
		},
		[e, t],
	);
	const i = r.useCallback(
		(n, r) => {
			if (e?.onLoad) {
				e.onLoad(n, r);
			}
			if (t?.onLoad) {
				t.onLoad(n, r);
			}
		},
		[e, t],
	);
	const s = r.useCallback(
		(n, r) => {
			if (e?.onClose) {
				e.onClose(n, r);
			}
			if (t?.onClose) {
				t.onClose(n, r);
			}
		},
		[e, t],
	);
	const o = r.useCallback(
		(n, r) => {
			if (e?.onBlur) {
				e.onBlur(n, r);
			}
			if (t?.onBlur) {
				t.onBlur(n, r);
			}
		},
		[e, t],
	);
	const a = r.useCallback(
		(n, r) => {
			if (e?.onFocus) {
				e.onFocus(n, r);
			}
			if (t?.onFocus) {
				t.onFocus(n, r);
			}
		},
		[e, t],
	);
	const c = r.useCallback(
		(n, r) => {
			if (e?.onResize) {
				e.onResize(n, r);
			}
			if (t?.onResize) {
				t.onResize(n, r);
			}
		},
		[e, t],
	);
	const l = r.useCallback(
		(n) => {
			if (e?.updateParamsBeforeShow) {
				n = e.updateParamsBeforeShow(n);
			}
			if (t?.updateParamsBeforeShow) {
				n = t.updateParamsBeforeShow(n);
			}
			return n;
		},
		[e, t],
	);
	return {
		onCreate: e?.onCreate || t?.onCreate ? n : undefined,
		onLoad: e?.onLoad || t?.onLoad ? i : undefined,
		onClose: e?.onClose || t?.onClose ? s : undefined,
		onBlur: e?.onBlur || t?.onBlur ? o : undefined,
		onFocus: e?.onFocus || t?.onFocus ? a : undefined,
		onResize: e?.onResize || t?.onResize ? c : undefined,
		updateParamsBeforeShow:
			e?.updateParamsBeforeShow || t?.updateParamsBeforeShow ? l : undefined,
	};
}
export function OJ(e, t, n) {
	const i = r.useRef(undefined);
	const [c, l] = r.useState(undefined);
	const u = (0, s.W)();
	i.current ||= new d(
		e,
		(function (e, t) {
			return {
				...e,
				body_class: (0, a.A)(e.body_class, t.body_class),
			};
		})(t, u),
		l,
	);
	i.current.m_callbacks = n;
	r.useEffect(() => {
		if (!i.current?.params.bNoInitialShow) {
			let e = i.current?.params.bNoFocusOnShow
				? o.iE.k_EWindowBringToFrontWithoutForcingOS
				: o.iE.k_EWindowBringToFrontAndForceOS;
			i.current?.Show(e);
		}
		return () => {
			i.current.m_callbacks = undefined;
			if (i.current.window?.SteamClient.Window.SetHideOnClose) {
				i.current.window?.SteamClient.Window.SetHideOnClose(false);
			}
			i.current.Close();
		};
	}, []);
	r.useEffect(() => {
		if (i.current.window?.SteamClient.Window.SetHideOnClose) {
			i.current.window?.SteamClient.Window.SetHideOnClose(!!t.bHideOnClose);
		}
	}, [t.bHideOnClose]);
	return {
		popup: i.current.window,
		element: c,
		popupObj: i.current,
	};
}
class d extends i.Ad {
	m_callbacks;
	m_fnReadyToRender;
	constructor(e, t, n) {
		super(e, t);
		this.m_fnReadyToRender = n;
	}
	DoCallback(e) {
		this.m_callbacks?.[e]?.(this.m_popup, this.m_element);
	}
	UpdateParamsBeforeShow(e) {
		if (this.m_callbacks?.updateParamsBeforeShow) {
			return this.m_callbacks.updateParamsBeforeShow(e);
		} else {
			return e;
		}
	}
	OnCreate() {
		if (this.m_callbacks?.onCreate) {
			this.m_callbacks.onCreate(this.m_popup, this.m_element);
		}
	}
	OnBlur() {
		this.DoCallback("onBlur");
	}
	OnFocus() {
		this.DoCallback("onFocus");
	}
	OnLoad() {
		this.DoCallback("onLoad");
	}
	OnResize() {
		this.DoCallback("onResize");
	}
	OnClose() {
		this.DoCallback("onClose");
	}
	Render(e, t) {
		this.m_fnReadyToRender(t);
	}
}
export function h3(e) {
	let t = (0, c.LH)();
	r.useEffect(() => {
		let e = new l.b2(t);
		i.Of.SetCurrentLoggedInAccountID(e.GetAccountID());
	}, [t]);
	const n = r.useRef();
	const s = r.useCallback(
		(t) => {
			if (t.bIgnoreSavedDimensions || t.strRestoreDetails) {
				if (t.strRestoreDetails) {
					i.Of.SetRestoreDetails(e, t.strRestoreDetails, false);
				}
			} else {
				t.strRestoreDetails = i.Of.GetRestoreDetails(e);
			}
			return t;
		},
		[e],
	);
	const o = r.useCallback(
		(t, r, s) => {
			if (n.current) {
				t.setTimeout(() => {
					t.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
						let o = n.current != r;
						if (t && r && (o || s)) {
							i.Of.SetRestoreDetails(e, r, false);
							n.current = r;
						}
					});
				}, 30);
			}
		},
		[e],
	);
	const a = r.useCallback(
		(e, t) => {
			e.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
				n.current = r;
				o(e, t, true);
			});
		},
		[o],
	);
	if (e) {
		return {
			updateParamsBeforeShow: s,
			onResize: o,
			onLoad: a,
		};
	} else {
		return null;
	}
}
