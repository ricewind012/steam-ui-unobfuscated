import r from "./63696.js";
import i from "./11131.js";
import s, { W } from "./67808.js";
import o from "./44846.js";
import a, { A } from "./90765.js";
import c, { LH } from "./24295.js";
import l from "./36229.js";
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
	const IRef = r.useRef(undefined);
	const [c, setC] = r.useState(undefined);
	const u = W();
	IRef.current ||= new d(
		e,
		((e, t) => ({
			...e,
			body_class: A(e.body_class, t.body_class),
		}))(t, u),
		setC,
	);
	IRef.current.m_callbacks = n;
	r.useEffect(() => {
		if (!IRef.current?.params.bNoInitialShow) {
			let e = IRef.current?.params.bNoFocusOnShow
				? o.iE.k_EWindowBringToFrontWithoutForcingOS
				: o.iE.k_EWindowBringToFrontAndForceOS;
			IRef.current?.Show(e);
		}
		return () => {
			IRef.current.m_callbacks = undefined;
			if (IRef.current.window?.SteamClient.Window.SetHideOnClose) {
				IRef.current.window?.SteamClient.Window.SetHideOnClose(false);
			}
			IRef.current.Close();
		};
	}, []);
	r.useEffect(() => {
		if (IRef.current.window?.SteamClient.Window.SetHideOnClose) {
			IRef.current.window?.SteamClient.Window.SetHideOnClose(!!t.bHideOnClose);
		}
	}, [t.bHideOnClose]);
	return {
		popup: IRef.current.window,
		element: c,
		popupObj: IRef.current,
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
	let t = LH();
	r.useEffect(() => {
		let e = new l.b2(t);
		i.Of.SetCurrentLoggedInAccountID(e.GetAccountID());
	}, [t]);
	const NRef = r.useRef();
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
			if (NRef.current) {
				t.setTimeout(() => {
					t.SteamClient.Window.GetWindowRestoreDetails().then((r) => {
						let o = NRef.current != r;
						if (t && r && (o || s)) {
							i.Of.SetRestoreDetails(e, r, false);
							NRef.current = r;
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
				NRef.current = r;
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
