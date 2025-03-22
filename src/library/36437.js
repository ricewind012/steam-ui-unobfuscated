var r = require(/*webcrack:missing*/ "./63696.js");
function i(e) {
	const [t, n] = (0, r.useState)(true);
	(0, r.useEffect)(() => {
		(0, r.startTransition)(() => {
			n(true);
		});
	}, []);
	if (t) {
		return e.children;
	} else {
		return e.fallback ?? null;
	}
}
var s = require("./11131.js");
var o = require("./42318.js");
var a = require(/*webcrack:missing*/ "./78325.js");
var c = require("./63439.js");
var l = require("./88750.js");
var u = require("./91435.js");
var m = require("./27773.js");
var d = require("./72476.js");
function h(e) {
	const { Modal: t } = e;
	const { name: n, modalProps: i, options: o } = t;
	const h = (0, s.R7)().ownerWindow;
	const { popup: p, element: g } = (0, c.OJ)(
		n,
		{
			title: i.strTitle,
			html_class:
				"client_chat_frame fullheight ModalDialogPopup LegacyPopup " +
				(i.className || ""),
			body_class: "fullheight ModalDialogBody",
			popup_class: "fullheight popup_chat_frame",
			owner_window: undefined,
			replace_existing_popup: true,
			target_browser: i.browserContext,
			availscreenwidth: h.screen.availWidth,
			availscreenheight: h.screen.availHeight,
			bModal: i.bHideMainWindowForPopouts,
		},
		{
			updateParamsBeforeShow: (e) =>
				(function (e, t, n, r) {
					let i;
					let s;
					let o;
					let a = t.popupWidth || 500;
					let c = t.popupHeight || 400;
					if (d.TS.IN_CLIENT && r?.SteamClient?.Browser?.GetBrowserID) {
						o = r.SteamClient.Browser.GetBrowserID();
					} else {
						let e = r.screen;
						i = (e.availWidth - a) / 2;
						s = (e.availHeight - c) / 2;
						let t = e;
						if (t.availLeft !== undefined && t.availTop !== undefined) {
							i += t.availLeft;
							s += t.availTop;
						}
					}
					return {
						...e,
						dimensions: {
							width: a,
							height: c,
							left: i,
							top: s,
						},
						center_on_window: n.bCenterOnWindow ? r : undefined,
						window_opener_id: o,
					};
				})(e, i, o, h),
			onClose: () => i.fnOnClose && i.fnOnClose(),
		},
	);
	const f = o?.bHideActions;
	const _ =
		typeof o?.nDragAreaHeight == "number"
			? {
					height: o.nDragAreaHeight,
				}
			: undefined;
	if (g) {
		return a.createPortal(
			r.createElement(
				s.kc,
				{
					ownerWindow: p,
				},
				r.createElement(
					"div",
					{
						className: "PopupFullWindow",
						onContextMenu: l.aE,
					},
					r.createElement(m.c, {
						hideMin: true,
						hideMax: true,
						popup: p,
						hideActions: f,
						style: _,
					}),
					r.createElement(
						u.EO,
						{
							browserInfo: i.browserContext,
							bCenterPopupsOnWindow: o.bCenterOnWindow,
						},
						t.element,
					),
				),
			),
			g,
		);
	} else {
		return null;
	}
}
function p(e) {
	const { ModalManager: t } = e;
	const [n, i] = r.useState(undefined);
	const [s, o] = r.useState(true);
	const a = r.useRef(0);
	const c = r.useCallback(() => {
		r.startTransition(() => {
			o(true);
		});
	}, []);
	r.useEffect(() => t.RegisterMeasureModalCallback(c).Unregister, [t, c]);
	r.useLayoutEffect(() => {
		if (!n) {
			r.startTransition(() => {
				i(t.TakeMeasureModalRequest());
				o(false);
			});
		}
	}, [t, n, s]);
	const l = r.useCallback((e) => {
		a.current++;
		r.startTransition(() => {
			i((t) => (t === e ? undefined : t));
		});
	}, []);
	if (n) {
		return r.createElement(g, {
			key: a.current,
			onMeasureComplete: l,
			request: n,
		});
	} else {
		return null;
	}
}
function g(e) {
	const [t, n] = r.useState();
	const i = (0, s.R7)().ownerWindow;
	r.useLayoutEffect(() => {
		const e = i.document.body;
		const t = i.document.createElement("div");
		t.style.position = "absolute";
		t.style.visibility = "hidden";
		e.appendChild(t);
		n(t);
		return () => {
			e.removeChild(t);
		};
	}, [i]);
	if (t) {
		return a.createPortal(
			r.createElement(f, {
				...e,
				elContainer: t,
			}),
			t,
		);
	} else {
		return null;
	}
}
function f(e) {
	const { elContainer: t, onMeasureComplete: n, request: i } = e;
	r.useEffect(() => {
		let e = false;
		const r = (t) => {
			if (!e) {
				i.fnResults(t);
				n(i);
				e = true;
			}
		};
		(async function (e, t) {
			if (t) {
				await t;
			}
			let n = document;
			if (d.TS.IN_STEAMUI && n.fonts) {
				await n.fonts.ready;
			}
			const r = e.getBoundingClientRect();
			const i = Math.ceil(r.height);
			const s = Math.ceil(r.width);
			return {
				height: i,
				width: s,
			};
		})(t, i.promiseContentReady).then(r);
		return () => r(undefined);
	}, [t, n, i]);
	return r.createElement(o.tH, null, i.rctToMeasure);
}
var _ = require("./90765.js");
var w = require("./52451.js");
var b = require("./21440.js");
var C = require("./3673.js");
var v = require("./55993.js");
var M = require("./98995.js");
function S(e) {
	r.useEffect(() => {
		if (e) {
			document.body.classList.add(v.BodyNoScrollDialog);
			return () => document.body.classList.remove(v.BodyNoScrollDialog);
		}
	}, [e]);
}
export function L(e) {
	let {
		ModalManager: t,
		bRegisterModalManager: n = true,
		DialogWrapper: o,
		rctActiveContextMenus: a,
		bUseDialogElement: c = true,
		style: l,
		...u
	} = e;
	const m = t.modals;
	const d = m && !!m.length;
	const h = t.active_modal;
	S(d);
	(function (e) {
		const t = (0, s.R7)().ownerWindow;
		const n = (0, w.CH)();
		const i = r.useCallback(() => {
			if (t?.SteamClient?.Window) {
				t.SteamClient.Window.BringToFront();
			}
		}, [t]);
		r.useEffect(() => e.RegisterOverlay(n), [e, n]);
		r.useEffect(() => e.RegisterOnModalShownCallback(i).Unregister, [e, i]);
	})(t);
	const g = (function (e, t) {
		return (0, w.QS)(
			(n) => {
				if (!n || !t) {
					return;
				}
				const r = n.ownerDocument.defaultView;
				return C.BR.RegisterModalManager(e, r);
			},
			[e],
		);
	})(t, n);
	let f = null;
	let v = !c;
	if (m && m.length) {
		f = m.map((e) => {
			const t = e == h;
			const n = {
				key: e.key,
				active: t,
				rctActiveContextMenus: t && c ? a : undefined,
			};
			if (e instanceof b._F) {
				return r.createElement(B, {
					...n,
					modal: e,
					Component: o ?? x,
				});
			} else if (e instanceof b.$9) {
				return r.createElement(E, {
					...n,
					modal: e,
					bUseDialogElement: c,
				});
			} else {
				return undefined;
			}
		});
	} else {
		v = true;
		l = {
			...l,
			display: "none",
		};
	}
	return r.createElement(
		r.Fragment,
		null,
		r.createElement(
			i,
			null,
			r.createElement(
				"div",
				{
					...u,
					style: l,
					ref: g,
					className: (0, _.A)(u.className, "FullModalOverlay"),
				},
				r.createElement("div", {
					className: "ModalOverlayContent ModalOverlayBackground",
				}),
				f,
			),
			v && a,
		),
		r.createElement(p, {
			ModalManager: t,
		}),
		r.createElement(k, {
			ModalManager: t,
		}),
	);
}
function E(e) {
	const {
		modal: t,
		rctActiveContextMenus: n,
		active: i,
		bUseDialogElement: s,
	} = e;
	r.useEffect(() => {
		if (i) {
			t.SetActive(i);
			return () => {
				t.SetActive(false);
			};
		}
	}, [t, i]);
	const a = r.createElement(
		o.tH,
		null,
		r.createElement("div", {
			className: (0, _.A)("ModalOverlayContent", i ? "active" : "inactive"),
			ref: t.RefModalElement,
		}),
		n,
	);
	if (s) {
		return r.createElement(
			_L,
			{
				active: i,
			},
			a,
		);
	} else {
		return a;
	}
}
function B(e) {
	const { modal: t, active: n, rctActiveContextMenus: i, Component: s } = e;
	const a = (0, w.CH)();
	(0, w.hL)(t.ModalUpdatedCallback, a);
	return r.createElement(
		o.tH,
		null,
		r.createElement(
			s,
			{
				className: (0, _.A)("ModalOverlayContent", n ? "active" : "inactive"),
				active: n,
				modalKey: t.key,
			},
			i,
			t.element,
		),
	);
}
function x(e) {
	const { className: t, active: n, children: i } = e;
	return r.createElement(
		_L,
		{
			active: n,
		},
		r.createElement(
			M.C$,
			null,
			r.createElement(
				"div",
				{
					className: t,
					tabIndex: -1,
				},
				i,
			),
		),
	);
}
function _L(e) {
	const { active: t, children: n } = e;
	const i = r.useRef(null);
	r.useEffect(() => {
		const e = i.current;
		if (t && e) {
			e.showModal();
			return () => e.close();
		}
	}, [t]);
	return r.createElement(
		"dialog",
		{
			ref: i,
			className: v.ModalDialog,
			onCancel: (e) => e.preventDefault(),
		},
		e.children,
	);
}
function k(e) {
	const { ModalManager: t } = e;
	const n = (0, w.CH)();
	(0, w.hL)(t.LegacyPopupModalCountChangedCallbacks, n);
	return r.createElement(
		r.Fragment,
		null,
		t.legacy_popup_modals.map((e) =>
			r.createElement(h, {
				key: e.key,
				Modal: e,
			}),
		),
	);
}
