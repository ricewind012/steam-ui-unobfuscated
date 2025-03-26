export let x_ = a.x_;
var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./3673.js");
var a = require("./46701.js");
var s = require(/*webcrack:missing*/ "./49455.js");
import { Localize } from "../../actual_src/utils/localization.js";
var l = require(/*webcrack:missing*/ "./72476.js");
export async function mK(e, t, r) {
	const a = (0, i.tx)(t);
	const l = r?.bForcePopOut || A(a);
	(0, s.w)(
		!l || !r?.bNeverPopOut,
		"Conflicting popout options; will ignore bNeverPopOut",
	);
	const c = !l && r?.bNeverPopOut === true;
	let m;
	if ((A(a) || (!c && d(a, t))) && (!l || !r?.popupWidth || !r?.popupHeight)) {
		const t = n.cloneElement(e, {
			closeModal: () => {},
		});
		m = await (async function (e, t, r) {
			return new Promise((n, i) => {
				e.RequestModalMeasure(t, n, r);
			});
		})(a, t, r?.promiseRenderComplete);
	}
	const p = m && m.height / t.innerHeight < 0.9 && m.width / t.innerWidth < 0.8;
	if (c || (!l && p)) {
		return HT(e, t, undefined, {
			fnOnClose: r?.fnOnClose,
		});
	}
	{
		const n = {
			strTitle: r?.strTitle || (0, Localize)("#Dialog_DefaultWindowTitle"),
			fnOnClose: r?.fnOnClose,
			popupWidth: r?.popupWidth || m?.width,
			popupHeight: r?.popupHeight || m?.height,
			bHideMainWindowForPopouts: r?.bHideMainWindowForPopouts,
			className: r?.className,
		};
		const i = {
			bHideActions: r?.bHideActionIcons,
		};
		const s = r?.browserContext || t.browserInfo;
		return HT(e, t, n.strTitle, n, s, i, a);
	}
}
export async function pg(e, t, r) {
	return mK(e, t, {
		bHideMainWindowForPopouts: true,
		...r,
	});
}
export function HT(e, t, r, s, o, l, c) {
	let m;
	let u;
	const A = e.props.closeModal;
	const p = () => {
		if (u) {
			u.Close();
		}
		if (A) {
			A();
		}
		if (s?.fnOnClose) {
			s.fnOnClose();
		}
	};
	const g = () => {
		if (m) {
			m.Close();
		}
		p();
	};
	const h = n.cloneElement(e, {
		closeModal: g,
	});
	if (d((c = c || (0, i.tx)(t)), t) && s && r) {
		if (s.bHideMainWindowForPopouts) {
			const e = n.createElement(
				a.x_,
				{
					className: "Hidden",
					onEscKeypress: h.props.bDisableBackgroundDismiss ? undefined : g,
				},
				n.createElement("div", null),
			);
			u = c.ShowModal(e);
		}
		const e = {
			...s,
			fnOnClose: p,
			browserContext: o,
		};
		m = c.ShowLegacyPopupModal(r, h, e, l);
	} else {
		m = c.ShowModal(h);
	}
	return m;
}
function d(e, t) {
	e = e || (0, i.tx)(t || window);
	return l.TS.USE_POPUPS && e.BUsePopups();
}
function A(e) {
	return e.BOnlyPopups && e.BOnlyPopups();
}
