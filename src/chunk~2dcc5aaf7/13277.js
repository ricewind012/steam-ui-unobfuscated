var _n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./5640.js");
var s = require("./28934.js");
var o = require("./57530.js");
var l = o;
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require("./41480.js");
var u = require(/*webcrack:missing*/ "./98995.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require(/*webcrack:missing*/ "./69164.js");
var p = require(/*webcrack:missing*/ "./50376.js");
var g = require("./37086.js");
function h(e) {
	const { fnClose: t, onSetKey: r, strTitle: a } = e;
	const [s, o] = (0, _n.useState)(e.currentKey);
	const m = _n.useRef(undefined);
	return _n.createElement(
		"div",
		{
			className: l.KeyCaptureModal,
		},
		_n.createElement(
			"div",
			{
				className: l.KeyCaptureHeader,
			},
			_n.createElement(
				"div",
				{
					className: l.Header,
				},
				(0, d.we)("#Hotkey_Modal_Header"),
			),
			_n.createElement(
				"div",
				{
					className: l.Subhead,
				},
				(0, d.we)("#Hotkey_Modal_Subhead"),
			),
		),
		_n.createElement(
			"div",
			{
				className: l.KeyCaptureCenter,
			},
			_n.createElement(
				"div",
				{
					className: l.Explainer,
				},
				a ?? "",
			),
			_n.createElement(
				"div",
				{
					className: l.KeyCaptureContainer,
				},
				_n.createElement(i.pd, {
					focusOnMount: true,
					spellCheck: false,
					ref: m,
					className: (0, c.A)(l.KeyCapture, e.disabled && l.Disabled),
					onKeyDown: e.disabled
						? undefined
						: (e) => {
								e.stopPropagation();
								e.preventDefault();
								if (
									e.key == "Shift" ||
									e.key == "Control" ||
									e.key == "Alt" ||
									e.key == "Meta"
								) {
									return;
								}
								let t = {
									shift_key: e.shiftKey,
									alt_key: e.altKey,
									ctrl_key: e.ctrlKey,
									meta_key: e.metaKey,
									key_code: e.keyCode,
									display_name: "",
								};
								SteamClient.Settings.RenderHotkey(t).then((e) => {
									t.display_name = e;
									o(t);
								});
							},
					value: s?.display_name ?? "",
				}),
				_n.createElement(
					A.Z,
					{
						className: l.UnbindButton,
						onActivate: () => {
							o({
								shift_key: false,
								alt_key: false,
								ctrl_key: false,
								meta_key: false,
								key_code: 0,
								display_name: "None",
							});
							m.current?.Focus();
						},
					},
					_n.createElement(
						u.he,
						{
							toolTipContent: (0, d.we)("#Hotkey_Modal_Unbind"),
						},
						_n.createElement(p.sED, {
							color: "#8b929a",
						}),
					),
				),
			),
		),
		_n.createElement(
			"div",
			{
				className: l.KeyCaptureBottomRow,
			},
			_n.createElement(
				i.$n,
				{
					onClick: () => {
						r(s);
						t();
					},
				},
				(0, d.we)("#Button_Confirm"),
			),
			_n.createElement(
				i.$n,
				{
					onClick: t,
				},
				(0, d.we)("#Button_Cancel"),
			),
		),
	);
}
function C(e) {
	const [t, r] = (0, _n.useState)(false);
	const i = e.currentKey.key_code
		? e.currentKey.display_name
		: (0, d.we)("#Settings_Hotkey_Button_NotBound");
	return _n.createElement(
		_n.Fragment,
		null,
		_n.createElement(
			g.CS,
			{
				onClick: () => r(true),
				className: (0, c.A)(l.KeyCapture, e.disabled && l.Disabled),
			},
			i,
		),
		_n.createElement(
			m.mt,
			{
				active: t,
				onDismiss: () => {
					r(false);
				},
			},
			_n.createElement(h, {
				...e,
				strTitle: e.strModalTitle,
				fnClose: () => {
					r(false);
				},
			}),
		),
	);
}
function _(e) {
	const { current: t, onKeyChange: r, onButtonChange: a, disabled: s } = e;
	const [o, m] = _n.useState();
	const [u, d] = _n.useState(false);
	const A = _n.useCallback(
		(e) => {
			r(e.keyCode);
			d(false);
			e.preventDefault();
			e.stopPropagation();
		},
		[r],
	);
	const p = _n.useCallback(
		(e) => {
			a(e.button);
			d(false);
			e.preventDefault();
			e.stopPropagation();
		},
		[a],
	);
	const g = _n.useCallback(
		(e) => {
			if (e.button != 0) {
				p(e);
			}
		},
		[p],
	);
	_n.useEffect(
		() =>
			u
				? (o.addEventListener("keydown", A),
					o.ownerDocument.addEventListener("click", p),
					o.ownerDocument.addEventListener("mousedown", g),
					() => {
						o.removeEventListener("keydown", A);
						o.ownerDocument.removeEventListener("click", p);
						o.ownerDocument.removeEventListener("mousedown", g);
					})
				: () => {},
		[u, o, A, p, g],
	);
	return _n.createElement(
		i.$n,
		{
			ref: m,
			disabled: s,
			className: (0, c.A)(u && l.Capturing),
			onClick: () => {
				d(true);
				o.focus();
			},
		},
		t,
	);
}
var f = require("./57257.js");
var b = f;
var y = require(/*webcrack:missing*/ "./72476.js");
export function j(e) {
	const {
		feature: t,
		className: r,
		disabled: o,
		currentKey: l,
		onSetKey: m,
		strTitle: u,
		...d
	} = e;
	const A = (0, a.l9)(t);
	const p = A !== 0;
	const g = (0, s.wT)();
	const h = (0, y.Qn)();
	return _n.createElement(
		i.D0,
		{
			...d,
			disabled: p || o,
			focusable: !h || p,
			className: (0, c.A)(b.ParentalKeyCaptureField, r, (p || o) && b.Disabled),
			onActivate: p && !o ? () => g(A, t) : undefined,
		},
		_n.createElement(C, {
			disabled: p || o,
			currentKey: l,
			onSetKey: m,
			strModalTitle: u,
		}),
	);
}
export function n(e) {
	const {
		feature: t,
		className: r,
		disabled: o,
		children: l,
		current: m,
		onKeyChange: u,
		onButtonChange: d,
		...A
	} = e;
	const p = (0, a.l9)(t);
	const g = p !== 0;
	const h = (0, s.wT)();
	return _n.createElement(
		i.D0,
		{
			...A,
			disabled: g || o,
			className: (0, c.A)(b.ParentalKeyCaptureField, r, (g || o) && b.Disabled),
			onActivate: g && !o ? () => h(p, t) : undefined,
		},
		_n.createElement(_, {
			disabled: g || o,
			current: m,
			onKeyChange: u,
			onButtonChange: d,
		}),
		l,
	);
}
