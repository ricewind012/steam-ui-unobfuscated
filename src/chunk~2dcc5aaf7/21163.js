var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./10606.js");
var a = require("./1615.js");
var s = require("./64608.js");
var o = require("./30449.js");
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./13869.js");
var m = require(/*webcrack:missing*/ "./11131.js");
var u = require("./34461.js");
const d = 1.5;
const A = 300;
export function e() {
	const [e, t] = n.useState();
	const [r, a] = n.useState();
	const [s, o] = n.useState(false);
	const [l, c] = n.useState();
	const m = (0, u.yZ)();
	const p = n.useCallback(
		async (e, r, n) => {
			t(0);
			a(undefined);
			c(r);
			let i = false;
			let s = 0;
			const l = setTimeout(() => {
				if (A / 1000 / ((s > 0 ? s : 1) / 100) > d) {
					if (!i) {
						i = true;
						o(true);
					}
				}
			}, A);
			const u = await e((e) => {
				((e) => {
					t(e);
					s = e;
				})(e);
			});
			clearTimeout(l);
			if (i || u.eResult != 1) {
				a(u);
				o(false);
			} else {
				m(n, u.strTitle);
			}
		},
		[m],
	);
	const _ = s || r !== undefined;
	const f = () => {
		a(undefined);
	};
	const b = r?.strTitle ?? l;
	return {
		onShowProgressBar: p,
		progressElement: n.createElement(
			i.mt,
			{
				active: _,
				onDismiss: r ? f : undefined,
			},
			s &&
				n.createElement(g, {
					progress: e,
					title: b,
				}),
			r?.eResult == 1 &&
				n.createElement(C, {
					title: b,
					onClose: f,
					alternateActionText: r.strAlternateAction,
					onAlternateAction: r.fnAlternateAction,
				}),
			r &&
				r.eResult != 1 &&
				n.createElement(h, {
					title: b,
					result: r.eResult,
					error: r.strError,
					onClose: f,
				}),
		),
	};
}
function g(e) {
	const { progress: t, title: r } = e;
	return n.createElement(
		"div",
		{
			className: a.ClipProgressDialog,
		},
		n.createElement(
			"div",
			{
				className: a.Title,
			},
			r,
		),
		n.createElement(o.z2, {
			nProgress: t,
		}),
	);
}
function h(e) {
	const { title: t, result: r, error: i, onClose: o } = e;
	const c = i ?? `${Localize("#ExportClip_Error")} (${r})`;
	return n.createElement(
		"div",
		{
			className: a.ClipProgressDialog,
		},
		n.createElement(
			"div",
			{
				className: a.Title,
			},
			t,
		),
		n.createElement(
			"div",
			{
				className: a.Error,
			},
			c,
		),
		n.createElement(
			s.$n,
			{
				onClick: o,
			},
			Localize("#Button_Close"),
		),
	);
}
function C(e) {
	const {
		onClose: t,
		title: r,
		alternateActionText: i,
		onAlternateAction: o,
	} = e;
	return n.createElement(
		"div",
		{
			className: a.ClipProgressDialog,
		},
		n.createElement(
			"div",
			{
				className: a.Title,
			},
			r,
		),
		n.createElement(
			"div",
			{
				className: a.ButtonRow,
			},
			i &&
				n.createElement(
					s.jn,
					{
						onClick: o,
					},
					i,
				),
			n.createElement(
				s.$n,
				{
					onClick: t,
				},
				Localize("#Button_Close"),
			),
		),
	);
}
export function J() {
	const e = (0, m.R7)();
	return (t, r) => {
		(0, c.pg)(
			n.createElement(i.o0, {
				className: a.ErrorDialog,
				strTitle: t,
				strDescription: r,
				bAlertDialog: true,
			}),
			e.ownerWindow,
		);
	};
}
