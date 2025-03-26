var n = require(/*webcrack:missing*/ "./85243.js");
var i = require("./55489.js");
var a = require("./96593.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./16117.js");
var l = require(/*webcrack:missing*/ "./44846.js");
var c = require("./8090.js");
var m = require("./1521.js");
var u = require(/*webcrack:missing*/ "./43691.js");
function d(e) {
	const { text: t, language: r } = e;
	const n = s.useMemo(
		() =>
			new Map([
				...Array.from(o.W4),
				[
					"img",
					{
						Constructor: A,
						autocloses: false,
					},
				],
			]),
		[],
	);
	const i = s.useCallback((e) => new m.OJ(new m.R8(), 0), []);
	const a = s.useRef();
	a.current ||= new c.B(n, i, u.TS.LANGUAGE);
	const d = a.current;
	if (r) {
		d.UpdateOverrideLanguage((0, l.sf)(r));
	}
	return d.ParseBBCode(t, {});
}
function A(e) {
	const t = e.children?.toString();
	if (t) {
		return s.createElement("img", {
			src: t,
		});
	} else {
		return null;
	}
}
var p = require(/*webcrack:missing*/ "./69164.js");
var g = require("./72655.js");
var h = require("./64608.js");
var C = require("./10606.js");
var _ = require("./13869.js");
var f = require(/*webcrack:missing*/ "./26853.js");
var b = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var S = require(/*webcrack:missing*/ "./52451.js");
var w = require(/*webcrack:missing*/ "./72476.js");
var B = require("./70446.js");
var v = B;
export function Fe(e) {
	(0, _.pg)(
		s.createElement(u_, {
			...e,
		}),
		e.ownerWindow || window,
		{},
	);
}
export function u_(e) {
	const t = () => {
		e.onCancel();
		if (e.closeModal) {
			e.closeModal();
		}
	};
	return s.createElement(
		_.x_,
		{
			bGamepadUIScrollWithin: true,
			onEscKeypress: t,
			padding: "none",
		},
		s.createElement(
			h.U9,
			{
				classNameContent: (0, b.A)("GenericConfirmDialog", v.EulaModalDialog),
			},
			s.createElement(h.Y9, null, (0, Localize)("#EulaDialog_Header")),
			s.createElement(
				h.nB,
				null,
				s.createElement(M, {
					...e,
					onCancel: t,
				}),
			),
		),
	);
}
function M(e) {
	const { appid: t, eulaWorkflow: r, onCancel: n, closeModal: i } = e;
	const o = r.useEulaApprovalState();
	const l = s.useRef(o.cancelFn);
	l.current = o.cancelFn;
	s.useEffect(
		() => () => {
			if (l.current) {
				l.current();
			}
		},
		[],
	);
	let c = (0, Localize)(
		"#Installer_Eula",
		a.tw.GetAppOverviewByAppID(t)?.display_name,
	);
	const m = () => {
		if (o.cancelFn) {
			o.cancelFn();
		}
		if (n) {
			n();
		}
	};
	const u = s.useRef(undefined);
	s.useLayoutEffect(() => {
		if (o.bDone && i) {
			i();
		}
	}, [o.bDone, i]);
	if (o.bDone) {
		return null;
	}
	const d = r.GetEULALoader();
	return s.createElement(
		p.Z,
		{
			className: v.EulaDialogContent,
			onCancel: m,
		},
		s.createElement(
			h.a3,
			null,
			s.createElement(
				"div",
				{
					className: v.EulaIntro,
				},
				c,
			),
		),
		d &&
			s.createElement(T, {
				loader: d,
				onCancel: () => {
					u.current?.TakeFocus();
				},
			}),
		s.createElement(
			h.wi,
			null,
			s.createElement(
				p.Z,
				{
					navRef: u,
				},
				s.createElement(h.CB, {
					focusButton: "secondary",
					onCancel: m,
					onOK: o.continueFn,
					strOKText: (0, Localize)("#Installer_EulaAccept"),
				}),
			),
		),
	);
}
function T(e) {
	const { loader: t, onCancel: r } = e;
	const [n, i] = s.useState(t.GetLanguage());
	const a = t.GetEULAData();
	const o = (0, S.CH)();
	(0, S.hL)(t.GetOnReadyCallbacks(), o);
	s.useEffect(() => {
		t.SetLanguage(n);
		t.LoadEULA();
	}, [t, n]);
	if (t.BHadError()) {
		return s.createElement(R, {
			loader: t,
		});
	} else if (a) {
		return s.createElement(k, {
			StoreData: a,
			setLanguage: i,
			onCancel: r,
		});
	} else {
		return s.createElement(
			"div",
			{
				className: v.EULAThrobber,
			},
			s.createElement(f.t, {
				position: "center",
			}),
		);
	}
}
function R(e) {
	const { loader: t } = e;
	const r = s.useCallback(() => t.Retry(), [t]);
	return s.createElement(
		p.Z,
		{
			className: v.EULAError,
		},
		s.createElement(p.Z, null, (0, Localize)("#Installer_EulaError")),
		s.createElement(
			p.Z,
			null,
			s.createElement(
				h.$n,
				{
					onClick: r,
					autoFocus: true,
				},
				(0, Localize)("#Button_Retry"),
			),
		),
	);
}
function k(e) {
	const { StoreData: t, setLanguage: r, onCancel: n } = e;
	return s.createElement(
		s.Fragment,
		null,
		s.createElement(D, {
			eulaLanguage: t.eulaLang,
			rgLanguages: t.rgLanguages,
			setLanguage: r,
		}),
		s.createElement(
			g.f7,
			{
				className: (0, b.A)(v.EULAScrolling),
				noFocusRing: false,
				scrollBehavior: "smooth",
				scrollStepPercent: 60,
				onCancelButton: n,
			},
			s.createElement(
				p.Z,
				{
					focusableIfNoChildren: true,
					noFocusRing: true,
					className: v.EULAContent,
				},
				s.createElement(d, {
					text: t.content,
				}),
			),
		),
	);
}
function D(e) {
	const { rgLanguages: t, eulaLanguage: r, setLanguage: n } = e;
	const i = (0, w.hf)();
	const a = s.useMemo(
		() =>
			t?.map((e) => ({
				data: e,
				label: (0, Localize)(`#language_selection_${e}`),
			})),
		[t],
	);
	const o = s.useCallback((e) => n(e.data), [n]);
	if (!t || t.length < 2) {
		return null;
	} else {
		return s.createElement(
			"div",
			{
				className: v.LanguageFieldContainer,
			},
			s.createElement(h.Vb, {
				layout: "inline",
				bottomSeparator: "none",
				label: (0, Localize)("#EulaDialog_Language"),
				rgOptions: a,
				selectedOption: r,
				onChange: o,
				contextMenuPositionOptions: {
					bMatchWidth: !i,
				},
			}),
		);
	}
}
function N(e) {
	(0, i.Bx)(n.I5.Opaque, "OpaqueGenericConfirmDialog");
	return s.createElement(C.o0, {
		...e,
	});
}
export function rg(e) {
	const {
		strTitle: t,
		strDescription: r,
		strOKButtonText: n,
		onOK: i,
		onCancel: a,
	} = e;
	const o = s.createElement(
		"span",
		{
			style: {
				whiteSpace: "pre-line",
			},
		},
		" ",
		r,
		" ",
	);
	const l = s.createElement(N, {
		strTitle: t,
		strDescription: o,
		onOK: i,
		onCancel: a,
		strOKButtonText: n,
	});
	(0, _.pg)(l, e.ownerWindow || window, {});
}
