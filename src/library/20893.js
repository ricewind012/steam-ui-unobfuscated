export var D$;
var i = require("./61657.js");
(function (e) {
	e[(e.GAMEPAD = 0)] = "GAMEPAD";
	e[(e.KEYBOARD = 1)] = "KEYBOARD";
	e[(e.APPLICATION = 2)] = "APPLICATION";
	e[(e.BROWSER = 3)] = "BROWSER";
})((D$ ||= {}));
let s = {
	[i.pR.OK]: "vgp_onok",
	[i.pR.CANCEL]: "vgp_oncancel",
	[i.pR.SECONDARY]: "vgp_onsecondaryaction",
	[i.pR.OPTIONS]: "vgp_onoptions",
	[i.pR.START]: "vgp_onmenu",
};
function o(e, t, n) {
	e.addEventListener(t, n);
	return () =>
		(function (e, t, n) {
			e.removeEventListener(t, n);
		})(e, t, n);
}
export function nt(e, t) {
	return o(e, "vgp_onbuttondown", t);
}
export function SZ(e, t) {
	return o(e, "vgp_onbuttonup", t);
}
export function VX(e, t) {
	return o(e, "vgp_onok", C(t));
}
export function hr(e, t) {
	return o(e, "vgp_oncancel", C(t));
}
export function f(e, t) {
	return o(e, "vgp_onsecondaryaction", C(t));
}
export function Ro(e, t) {
	return o(e, "vgp_onoptions", C(t));
}
export function cR(e, t) {
	return o(e, "vgp_onmenu", C(t));
}
export function u8(e, t) {
	return o(e, "vgp_ondirection", C(t));
}
export function tV(e, t) {
	return o(e, "vgp_onfocus", t);
}
export function W1(e, t) {
	return o(e, "vgp_onblur", t);
}
export function AE(e, t, n) {
	let r = e;
	if (!r || !r.ownerDocument || !r.ownerDocument.defaultView) {
		return true;
	}
	let i = new r.ownerDocument.defaultView.CustomEvent(t, {
		bubbles: true,
		cancelable: true,
		detail: n,
	});
	return r.dispatchEvent(i);
}
export function G7(e, t) {
	const n = {
		button: t,
		source: i.Vz.GAMEPAD,
		is_repeat: false,
	};
	AE(e, "vgp_onbuttondown", n);
	AE(e, "vgp_onbuttonup", n);
}
export function IA(e) {
	const t = [i.pR.DIR_UP, i.pR.DIR_DOWN, i.pR.DIR_LEFT, i.pR.DIR_RIGHT];
	let n = true;
	let r = false;
	let o = s[e.detail.button];
	if (o) {
		r = true;
		n = AE(e.target, o, e.detail);
	} else if (t.indexOf(e.detail.button) !== -1) {
		r = true;
		n = AE(e.target, "vgp_ondirection", e.detail);
	}
	return {
		bUnhandled: n,
		bHadLogicalEventMapping: r,
	};
}
function C(e) {
	return (t) => {
		if (e(t) !== false) {
			t.stopPropagation();
			t.preventDefault();
		}
	};
}
export function Y3(e) {
	const {
		onOKActionDescription: t,
		onCancelActionDescription: n,
		onSecondaryActionDescription: r,
		onOptionsActionDescription: s,
		onMenuActionDescription: o,
		actionDescriptionMap: a,
	} = e;
	const c = {
		...a,
	};
	if (t !== undefined) {
		c[i.pR.OK] = t;
	}
	if (n !== undefined) {
		c[i.pR.CANCEL] = n;
	}
	if (r !== undefined) {
		c[i.pR.SECONDARY] = r;
	}
	if (s !== undefined) {
		c[i.pR.OPTIONS] = s;
	}
	if (o !== undefined) {
		c[i.pR.START] = o;
	}
	return c;
}
