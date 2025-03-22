var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./88750.js");
var o = require("./64608.js");
var l = require("./13869.js");
var c = require(/*webcrack:missing*/ "./54644.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./35376.js");
export function ZH(e, t, r, n, i, s, o) {
	return new Promise((l, c) => {
		e(
			a.createElement(o0, {
				strTitle: t,
				strDescription: r,
				strOKButtonText: n,
				strCancelButtonText: i,
				onOK: l,
				onCancel: c,
				bDestructiveWarning: s,
				children: o,
			}),
		);
	});
}
export function nd(e, t, r, n, i) {
	return new Promise((s, o) => {
		e(
			a.createElement(o0, {
				bAlertDialog: true,
				strTitle: t,
				strDescription: r,
				strOKButtonText: n,
				onOK: s,
				onCancel: s,
				children: i,
			}),
		);
	});
}
export let o0 = class extends a.Component {
	Cancel(e) {
		return () => {
			if (e) {
				e();
			}
			if (this.props.closeModal) {
				this.props.closeModal();
			}
		};
	}
	render() {
		const {
			strTitle: e,
			strDescription: t,
			strOKButtonText: r,
			strCancelButtonText: n,
			onGamepadCancel: i,
			strMiddleButtonText: s,
			onMiddleButton: l,
			bAlertDialog: c,
			children: d,
			...A
		} = this.props;
		const p = r || (0, m.we)("#Button_Close");
		let g = a.createElement(o.CB, {
			bOKDisabled: this.props.bOKDisabled,
			bCancelDisabled: this.props.bCancelDisabled,
			strOKText: r,
			onCancel: this.Cancel(this.props.onCancel),
			strCancelText: n,
		});
		if (c) {
			g = a.createElement(o.jn, null, p);
		} else if (l) {
			g = a.createElement(o.VQ, {
				bOKDisabled: this.props.bOKDisabled,
				bCancelDisabled: this.props.bCancelDisabled,
				strOKText: r,
				onCancel: this.Cancel(this.props.onCancel),
				strCancelText: n,
				onUpdate: () => {
					l();
					if (this.props.closeModal) {
						this.props.closeModal();
					}
				},
				strUpdateText: s,
				bUpdateDisabled: this.props.bMiddleDisabled,
			});
		}
		return a.createElement(
			u.e,
			{
				...A,
			},
			a.createElement(
				o.Y9,
				null,
				" ",
				e || a.createElement(a.Fragment, null, "\xA0"),
				" ",
			),
			a.createElement(
				o.f3,
				{
					onCancelButton: this.Cancel(i || this.props.onCancel),
				},
				a.createElement(o.a3, null, t, d),
				a.createElement(o.wi, null, g),
			),
		);
	}
};
o0 = (0, n.Cg)([i.PA], o0);
export let KG = class extends a.Component {
	render() {
		const e = {
			strTitle: (0, m.we)("#Error_FailureNotice"),
			strDescription: (0, m.we)("#Error_GenericFailureDescription"),
			bAlertDialog: true,
			bDestructiveWarning: true,
			onOK: () => {},
			onCancel: () => {},
			...this.props,
		};
		return a.createElement(o0, {
			...e,
		});
	}
};
export function pY(e, t) {
	(0, l.pg)(
		a.createElement(KG, {
			strDescription: e,
		}),
		t,
	);
}
KG = (0, n.Cg)([i.PA], KG);
export let Ee = class extends a.Component {
	render() {
		let e = {
			onOK: () => {},
			onCancel: () => {},
			bAlertDialog: true,
			...this.props,
		};
		e.strDescription = a.createElement(
			"span",
			{
				style: {
					whiteSpace: "pre-line",
				},
			},
			" ",
			e.strDescription,
			" ",
		);
		return a.createElement(o0, {
			...e,
		});
	}
};
export function Zw(e, t, r) {
	(0, l.pg)(
		a.createElement(Ee, {
			strTitle: e,
			strDescription: t,
		}),
		r,
	);
}
Ee = (0, n.Cg)([i.PA], Ee);
export const _Z = (e) => {
	const {
		strDisplayNameLocToken: t,
		confirmDialogContent: r,
		skipConfirm: n,
		onSelected: i,
		...o
	} = e;
	const u = a.useCallback(
		(e) => {
			((e, t, r, n) => {
				(0, l.pg)(
					a.createElement(o0, {
						strTitle: (0, m.we)(t),
						strDescription: r ?? (0, m.we)("#Dialog_AreYouSure"),
						onOK: n,
					}),
					e,
				);
			})(c.uX(e), t, r, () => i(e));
		},
		[t, r, i],
	);
	return a.createElement(
		s.kt,
		{
			...o,
			onSelected: n ? i : u,
		},
		(0, m.we)(e.strDisplayNameLocToken),
	);
};
