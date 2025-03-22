var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require(/*webcrack:missing*/ "./88750.js");
var s = require("./10606.js");
var o = require("./13869.js");
var l = require(/*webcrack:missing*/ "./11131.js");
var c = require(/*webcrack:missing*/ "./46108.js");
export function Ql(e) {
	const t = (0, l.R7)();
	return n.createElement(
		i.$n,
		{
			onClick: () =>
				(0, o.pg)(
					n.cloneElement(e.children, {
						onResult: e.onResult,
					}),
					t.ownerWindow ?? window,
				),
		},
		e.title,
	);
}
export function G(e) {
	const t = (0, l.R7)();
	return n.createElement(
		a.kt,
		{
			onSelected: () =>
				(0, o.pg)(
					n.cloneElement(e.children, {
						onResult: e.onResult,
					}),
					t.ownerWindow ?? window,
				),
		},
		e.title,
	);
}
export function X_(e) {
	const {
		className: t,
		title: r,
		description: a,
		closeModal: o,
		disableCommit: l,
		onCommitResult: m,
		onCancel: u,
		onCustomOK: d,
		bAlertDialog: A,
		children: p,
	} = e;
	const g = () => {
		if (u) {
			u();
		}
		if (o) {
			o();
		}
	};
	return n.createElement(
		s.eV,
		{
			className: t,
			onOK:
				d ??
				(() => {
					if (!l) {
						if (m) {
							m();
						}
						if (o) {
							o();
						}
					}
				}),
			onCancel: g,
		},
		r && n.createElement(i.Y9, null, r),
		a != null && n.createElement(i.a3, null, a),
		p,
		n.createElement(
			i.wi,
			null,
			A
				? n.createElement(
						i.jn,
						{
							onClick: g,
						},
						" ",
						(0, c.we)("#Button_Cancel"),
						" ",
					)
				: n.createElement(i.CB, {
						bOKDisabled: l,
						onCancel: g,
					}),
		),
	);
}
export function Qj(e) {
	const { onResult: t, isValid: r, inputOptions: a, children: s, ...o } = e;
	const [l, c] = n.useState("");
	const m = r ? r(l) : l?.length > 0;
	const u =
		t == null
			? undefined
			: () => {
					if (m && t) {
						t(l);
					}
				};
	return n.createElement(
		X_,
		{
			...o,
			disableCommit: !m,
			onCommitResult: u,
		},
		n.createElement(i.pd, {
			autoFocus: true,
			onChange: (e) => {
				c(e.target.value);
			},
			...a,
		}),
		s,
	);
}
