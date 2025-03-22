var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./34792.js");
var a = require("./27756.js");
var s = require(/*webcrack:missing*/ "./11131.js");
var o = require("./96670.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require("./2306.js");
function m(e) {
	const {
		bRequiresRestart: t,
		visible: r = true,
		deferred: i = false,
		fnOnSetDeferred: m,
		checked: u,
		onChange: d,
		label: A,
		onClick: p,
		feature: g,
		...h
	} = e;
	const C = (0, s.R7)();
	const _ = n.useCallback(
		(e) => {
			if (d) {
				d(e);
			}
		},
		[d],
	);
	const f = n.useCallback(
		(e) => {
			(0, a.$)({
				fnOnOK: () => _(e),
				strCancelButtonText: (0, l.we)("#Settings_RestartLater_ButtonText"),
				fnOnCancel: () => {
					_(e);
					if (m) {
						m();
					}
				},
				ownerWindow: C.ownerWindow,
			});
		},
		[_, m, C.ownerWindow],
	);
	if (u !== undefined && r) {
		return n.createElement(c.C, {
			feature: g,
			label: n.createElement(o.S, {
				deferred: i,
				label: A,
			}),
			checked: u,
			onChange: t ? f : _,
			onClick: p,
			...h,
		});
	} else {
		return null;
	}
}
export function G(e) {
	const {
		setting: t,
		invert: r = false,
		onChange: a,
		feature: s,
		displayOffIfDisabled: o,
		disabled: l,
		...c
	} = e;
	const [u, d, A, p] = (0, i.VI)(t);
	const g = n.useCallback(
		(e) => {
			const t = r ? !e : e;
			d(t);
			if (a) {
				a(t);
			}
		},
		[a, d, r],
	);
	if (u === undefined) {
		return null;
	}
	const h = (!l || !o) && u;
	const C = r ? !h : h;
	return n.createElement(m, {
		...c,
		feature: s,
		checked: C,
		deferred: A,
		disabled: l,
		fnOnSetDeferred: p,
		onChange: g,
		controlled: true,
	});
}
export function y(e) {
	const { params: t, ...r } = e;
	return n.createElement(m, {
		visible: t.bAvailable,
		checked: t.bEnabled,
		onChange: t.setEnabled,
		...r,
	});
}
