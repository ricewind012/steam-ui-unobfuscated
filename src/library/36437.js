import r, { useState, useEffect, startTransition } from "./63696.js";
import s, { R7 } from "./11131.js";
import o from "./42318.js";
import a from "./78325.js";
import c, { OJ } from "./63439.js";
import l from "./88750.js";
import u from "./91435.js";
import m from "./27773.js";
import d from "./72476.js";
import _, { A } from "./90765.js";
import { CH, QS, hL } from "./52451.js";
import b from "./21440.js";
import C from "./3673.js";
import v from "./55993.js";
import M from "./98995.js";
function I(e) {
	const [t, setT] = useState(true);
	useEffect(() => {
		startTransition(() => {
			setT(true);
		});
	}, []);
	if (t) {
		return e.children;
	} else {
		return e.fallback ?? null;
	}
}
function H(e) {
	const { Modal } = e;
	const { name, modalProps, options } = Modal;
	const h = R7().ownerWindow;
	const { popup, element } = OJ(
		name,
		{
			title: modalProps.strTitle,
			html_class: `client_chat_frame fullheight ModalDialogPopup LegacyPopup ${
				modalProps.className || ""
			}`,
			body_class: "fullheight ModalDialogBody",
			popup_class: "fullheight popup_chat_frame",
			owner_window: undefined,
			replace_existing_popup: true,
			target_browser: modalProps.browserContext,
			availscreenwidth: h.screen.availWidth,
			availscreenheight: h.screen.availHeight,
			bModal: modalProps.bHideMainWindowForPopouts,
		},
		{
			updateParamsBeforeShow: (e) =>
				((e, t, n, r) => {
					let i;
					let s;
					let o;
					let a = t.popupWidth || 500;
					let c = t.popupHeight || 400;
					if (d.TS.IN_CLIENT && r?.SteamClient?.Browser?.GetBrowserID) {
						o = r.SteamClient.Browser.GetBrowserID();
					} else {
						let r_screen = r.screen;
						i = (r_screen.availWidth - a) / 2;
						s = (r_screen.availHeight - c) / 2;
						let t = r_screen;
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
				})(e, modalProps, options, h),
			onClose: () => modalProps.fnOnClose && modalProps.fnOnClose(),
		},
	);
	const f = options?.bHideActions;
	const _ =
		typeof options?.nDragAreaHeight == "number"
			? {
					height: options.nDragAreaHeight,
				}
			: undefined;
	if (element) {
		return a.createPortal(
			<s.kc ownerWindow={popup}>
				<div className="PopupFullWindow" onContextMenu={l.aE}>
					<m.c hideMin hideMax popup={popup} hideActions={f} style={_} />
					<u.EO
						browserInfo={modalProps.browserContext}
						bCenterPopupsOnWindow={options.bCenterOnWindow}
					>
						{Modal.element}
					</u.EO>
				</div>
			</s.kc>,
			element,
		);
	} else {
		return null;
	}
}
function P(e) {
	const { ModalManager } = e;
	const [n, setN] = r.useState(undefined);
	const [s, setS] = r.useState(true);
	const ARef = r.useRef(0);
	const c = r.useCallback(() => {
		r.startTransition(() => {
			setS(true);
		});
	}, []);
	r.useEffect(
		() => ModalManager.RegisterMeasureModalCallback(c).Unregister,
		[ModalManager, c],
	);
	r.useLayoutEffect(() => {
		if (!n) {
			r.startTransition(() => {
				setN(ModalManager.TakeMeasureModalRequest());
				setS(false);
			});
		}
	}, [ModalManager, n, s]);
	const l = r.useCallback((e) => {
		ARef.current++;
		r.startTransition(() => {
			setN((t) => t === e || t);
		});
	}, []);
	if (n) {
		return <G key={ARef.current} onMeasureComplete={l} request={n} />;
	} else {
		return null;
	}
}
function G(e) {
	const [t, setT] = r.useState();
	const i = R7().ownerWindow;
	r.useLayoutEffect(() => {
		const e = i.document.body;
		const t = i.document.createElement("div");
		t.style.position = "absolute";
		t.style.visibility = "hidden";
		e.appendChild(t);
		setT(t);
		return () => {
			e.removeChild(t);
		};
	}, [i]);
	if (t) {
		return a.createPortal(<F {...e} elContainer={t} />, t);
	} else {
		return null;
	}
}
function F(e) {
	const { elContainer, onMeasureComplete, request } = e;
	r.useEffect(() => {
		let e = false;
		const r = (t) => {
			if (!e) {
				request.fnResults(t);
				onMeasureComplete(request);
				e = true;
			}
		};
		(async (e, t) => {
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
		})(elContainer, request.promiseContentReady).then(r);
		return () => r(undefined);
	}, [elContainer, onMeasureComplete, request]);
	return <o.tH>{request.rctToMeasure}</o.tH>;
}
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
		ModalManager,
		bRegisterModalManager = true,
		DialogWrapper,
		rctActiveContextMenus,
		bUseDialogElement = true,
		style,
		...u
	} = e;

	const { modals, active_modal } = ModalManager;

	const d = modals && !!modals.length;
	S(d);
	((e) => {
		const t = R7().ownerWindow;
		const n = CH();
		const i = r.useCallback(() => {
			if (t?.SteamClient?.Window) {
				t.SteamClient.Window.BringToFront();
			}
		}, [t]);
		r.useEffect(() => e.RegisterOverlay(n), [e, n]);
		r.useEffect(() => e.RegisterOnModalShownCallback(i).Unregister, [e, i]);
	})(ModalManager);
	const g = ((e, t) =>
		QS(
			(n) => {
				if (!n || !t) {
					return;
				}
				const r = n.ownerDocument.defaultView;
				return C.BR.RegisterModalManager(e, r);
			},
			[e],
		))(ModalManager, bRegisterModalManager);
	let f = null;
	let v = !bUseDialogElement;
	if (modals && modals.length) {
		f = modals.map((e) => {
			const t = e == active_modal;
			const n = {
				key: e.key,
				active: t,
				rctActiveContextMenus:
					t && bUseDialogElement ? rctActiveContextMenus : undefined,
			};
			if (e instanceof b._F) {
				return <B {...n} modal={e} Component={DialogWrapper ?? x} />;
			} else if (e instanceof b.$9) {
				return <E {...n} modal={e} bUseDialogElement={bUseDialogElement} />;
			} else {
				return undefined;
			}
		});
	} else {
		v = true;
		style = {
			...style,
			display: "none",
		};
	}
	return (
		<>
			<I>
				<div
					{...u}
					style={style}
					ref={g}
					className={A(u.className, "FullModalOverlay")}
				>
					<div className="ModalOverlayContent ModalOverlayBackground" />
					{f}
				</div>
				{v && rctActiveContextMenus}
			</I>
			<P ModalManager={ModalManager} />
			<K ModalManager={ModalManager} />
		</>
	);
}
function E(e) {
	const { modal, rctActiveContextMenus, active, bUseDialogElement } = e;
	r.useEffect(() => {
		if (active) {
			modal.SetActive(active);
			return () => {
				modal.SetActive(false);
			};
		}
	}, [modal, active]);
	const a = (
		<o.tH>
			<div
				className={A("ModalOverlayContent", active ? "active" : "inactive")}
				ref={modal.RefModalElement}
			/>
			{rctActiveContextMenus}
		</o.tH>
	);
	if (bUseDialogElement) {
		return <_L active={active}>{a}</_L>;
	} else {
		return a;
	}
}
function B(e) {
	const { modal, active, rctActiveContextMenus, Component } = e;
	const a = CH();
	hL(modal.ModalUpdatedCallback, a);
	return (
		<o.tH>
			<Component
				className={A("ModalOverlayContent", active ? "active" : "inactive")}
				active={active}
				modalKey={modal.key}
			>
				{rctActiveContextMenus}
				{modal.element}
			</Component>
		</o.tH>
	);
}
function x(e) {
	const { className, active, children } = e;
	return (
		<_L active={active}>
			<M.C$>
				<div className={className} tabIndex={-1}>
					{children}
				</div>
			</M.C$>
		</_L>
	);
}
function _L(e) {
	const { active, children } = e;
	const IRef = r.useRef(null);
	r.useEffect(() => {
		const i_current = IRef.current;
		if (active && i_current) {
			i_current.showModal();
			return () => i_current.close();
		}
	}, [active]);
	return (
		<dialog
			ref={IRef}
			className={v.ModalDialog}
			onCancel={(e) => e.preventDefault()}
		>
			{e.children}
		</dialog>
	);
}
function K(e) {
	const { ModalManager } = e;
	const n = CH();
	hL(ModalManager.LegacyPopupModalCountChangedCallbacks, n);
	return (
		<>
			{ModalManager.legacy_popup_modals.map((e) => (
				<H key={e.key} Modal={e} />
			))}
		</>
	);
}
