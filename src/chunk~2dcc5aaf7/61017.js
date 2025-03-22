var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./84056.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require("./85360.js");
var c = require("./76587.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require(/*webcrack:missing*/ "./4690.js");
var d = require("./13110.js");
var A = require(/*webcrack:missing*/ "./15181.js");
var p = require("./93966.js");
var g = require(/*webcrack:missing*/ "./52451.js");
var h = require("./23101.js");
export function Xg(e, t) {
	const r = {
		type: a.N.k_EControllerBindingType_Key,
		keyboard_key: {
			key: t,
		},
	};
	let n = l.v3.ActiveInputBinding;
	if (r != null) {
		n.new_binding = r;
	}
	l.v3.SetControllerInputBinding(e, n);
	l.v3.SaveEditingConfiguration(e);
	l.v3.EnsureEditingConfiguration(e);
}
const _ = [
	[
		{
			key: 41,
			labelLoc: "#Key_Escape",
			labelAlignment: "left",
			width: "*",
		},
		{
			key: 58,
			label: "F1",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 59,
			label: "F2",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 60,
			label: "F3",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 61,
			label: "F4",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 62,
			label: "F5",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 63,
			label: "F6",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 64,
			label: "F7",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 65,
			label: "F8",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 66,
			label: "F9",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 67,
			label: "F10",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 68,
			label: "F11",
			labelAlignment: "left",
			width: 54,
		},
		{
			key: 69,
			label: "F12",
			labelAlignment: "left",
			width: 54,
		},
	],
	[
		{
			key: 53,
			label: "`",
			secondaryLabel: "~",
			width: 28,
		},
		{
			key: 30,
			label: "1",
			secondaryLabel: "!",
			width: 53,
		},
		{
			key: 31,
			label: "2",
			secondaryLabel: "@",
			width: 53,
		},
		{
			key: 32,
			label: "3",
			secondaryLabel: "#",
			width: 53,
		},
		{
			key: 33,
			label: "4",
			secondaryLabel: "$",
			width: 53,
		},
		{
			key: 34,
			label: "5",
			secondaryLabel: "%",
			width: 53,
		},
		{
			key: 35,
			label: "6",
			secondaryLabel: "^",
			width: 53,
		},
		{
			key: 36,
			label: "7",
			secondaryLabel: "&",
			width: 53,
		},
		{
			key: 37,
			label: "8",
			secondaryLabel: "*",
			width: 53,
		},
		{
			key: 38,
			label: "9",
			secondaryLabel: "(",
			width: 53,
		},
		{
			key: 39,
			label: "0",
			secondaryLabel: ")",
			width: 53,
		},
		{
			key: 45,
			label: "-",
			secondaryLabel: "_",
			width: 53,
		},
		{
			key: 46,
			label: "=",
			secondaryLabel: "+",
			width: 53,
		},
		{
			key: 42,
			labelLoc: "#Key_Backspace",
			labelAlignment: "right",
			width: 100,
		},
	],
	[
		{
			key: 43,
			labelLoc: "#Key_Tab",
			labelAlignment: "left",
			width: 60,
		},
		{
			key: 20,
			label: "Q",
			width: 53,
		},
		{
			key: 26,
			label: "W",
			width: 53,
		},
		{
			key: 8,
			label: "E",
			width: 53,
		},
		{
			key: 21,
			label: "R",
			width: 53,
		},
		{
			key: 23,
			label: "T",
			width: 53,
		},
		{
			key: 28,
			label: "Y",
			width: 53,
		},
		{
			key: 24,
			label: "U",
			width: 53,
		},
		{
			key: 12,
			label: "I",
			width: 53,
		},
		{
			key: 18,
			label: "O",
			width: 53,
		},
		{
			key: 19,
			label: "P",
			width: 53,
		},
		{
			key: 47,
			label: "[",
			secondaryLabel: "{",
			width: 53,
		},
		{
			key: 48,
			label: "]",
			secondaryLabel: "}",
			width: 53,
		},
		{
			key: 49,
			label: "\\",
			secondaryLabel: "|",
			width: 53,
		},
	],
	[
		{
			key: 57,
			labelLoc: "#Key_Capslock",
			labelAlignment: "left",
			width: 80,
		},
		{
			key: 4,
			label: "A",
			width: 53,
		},
		{
			key: 22,
			label: "S",
			width: 53,
		},
		{
			key: 7,
			label: "D",
			width: 53,
		},
		{
			key: 9,
			label: "F",
			width: 53,
		},
		{
			key: 10,
			label: "G",
			width: 53,
		},
		{
			key: 11,
			label: "H",
			width: 53,
		},
		{
			key: 13,
			label: "J",
			width: 53,
		},
		{
			key: 14,
			label: "K",
			width: 53,
		},
		{
			key: 15,
			label: "L",
			width: 53,
		},
		{
			key: 51,
			label: ";",
			secondaryLabel: ":",
			width: 53,
		},
		{
			key: 52,
			label: "'",
			secondaryLabel: '"',
			width: 53,
		},
		{
			key: 40,
			labelLoc: "#Key_Enter",
			labelAlignment: "right",
			width: 100,
		},
	],
	[
		{
			key: 101,
			labelLoc: "#Key_Shift",
			labelAlignment: "left",
			width: 120,
		},
		{
			key: 29,
			label: "Z",
			width: 53,
		},
		{
			key: 27,
			label: "X",
			width: 53,
		},
		{
			key: 6,
			label: "C",
			width: 53,
		},
		{
			key: 25,
			label: "V",
			width: 53,
		},
		{
			key: 5,
			label: "B",
			width: 53,
		},
		{
			key: 17,
			label: "N",
			width: 53,
		},
		{
			key: 16,
			label: "M",
			width: 53,
		},
		{
			key: 54,
			label: ",",
			secondaryLabel: "<",
			width: 53,
		},
		{
			key: 55,
			label: ".",
			secondaryLabel: ">",
			width: 53,
		},
		{
			key: 56,
			label: "/",
			secondaryLabel: "?",
			width: 53,
		},
		{
			key: 105,
			labelLoc: "#Key_Shift",
			labelAlignment: "right",
			width: 120,
		},
	],
	[
		{
			key: 103,
			labelLoc: "#Key_Control",
			labelAlignment: "left",
			width: 70,
		},
		{
			key: 102,
			labelLoc: "#Key_Win",
			labelAlignment: "left",
			width: 70,
		},
		{
			key: 100,
			labelLoc: "#Key_Alt",
			labelAlignment: "left",
			width: 70,
		},
		{
			key: 44,
			label: "",
			width: 417,
		},
		{
			key: 104,
			labelLoc: "#Key_Alt",
			labelAlignment: "right",
			width: 70,
		},
		{
			key: 107,
			labelLoc: "#Key_Control",
			labelAlignment: "right",
			width: 70,
		},
	],
];
function f(e) {
	const { appid: t } = e;
	const r = w(t);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(d.d, {
			label: (0, m.we)("#ControllerConfigurator_ChooseBinding_Prompt_Keyboard"),
		}),
		n.createElement(
			o.Z,
			{
				className: c.CombinedKeyboardContainer,
			},
			n.createElement(
				o.Z,
				{
					className: (0, s.A)(c.KeyboardContainer),
					"flow-children": "column",
					navEntryPreferPosition: u.iU.MAINTAIN_Y,
				},
				r,
			),
			R(t),
		),
	);
}
export function WP(e) {
	const t = l.v3.CurrentEditedBinding;
	const r =
		t?.keyboard_key !== undefined &&
		(t.keyboard_key.key <= 69 || t.keyboard_key.key >= 100);
	return {
		tab: {
			id: "Keyboard",
			title: "#ControllerConfigurator_ChooseBinding_Keyboard",
			content: n.createElement(f, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
export function uC(e) {
	const t = l.v3.CurrentEditedBinding;
	const r =
		t?.keyboard_key !== undefined &&
		(t.keyboard_key.key <= 69 || t.keyboard_key.key >= 100);
	return {
		tab: {
			id: "Keyboard",
			title: "#ControllerConfigurator_ChooseBinding_Keyboard",
			content: n.createElement(B, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
function S(e) {
	const t = e.keyData.labelAlignment ?? "center";
	const r = l.v3?.CurrentEditedBinding?.keyboard_key?.key == e.keyData.key;
	const i = (0, s.A)(
		c.KeyboardKey,
		t == "left" && c.LeftAlignedLabel,
		t == "right" && c.RightAlignedLabel,
		e.keyData.labelLoc !== undefined && c.LocTextKey,
		r && c.SelectedBinding,
		e.keyData.additionalStyle,
		e.keyData.secondaryLabel && c.HasSecondaryLabel,
	);
	const a = e.keyData.width == "*";
	const u = (0, p.yq)();
	const d = e.keyData.label ?? (0, m.we)(e.keyData.labelLoc);
	const A = n.useRef(null);
	const [_, f] = n.useState(e.keyData.width);
	const b = n.useCallback(() => {
		if (a && A.current) {
			f(A.current.getBoundingClientRect().width);
		}
	}, [a]);
	const y = (0, g.wY)(b);
	const S = (0, g.Ue)(y, A);
	(0, g.l6)(window, "resize", b);
	n.useEffect(b, [b]);
	const w = _ > 0 ? _ : e.keyData.width;
	const B = e.keyData.key == 43 || e.keyData.key == 41;
	const v = (0, h.w)(d, w * 0.75, {
		maxLines: B ? 1 : 2,
		fontFamily: '"Motiva Sans", Helvetica, sans-serif',
		startingSizePx: 14,
		minSizePx: 8,
		minSingleWordBreakpoint: 8,
	});
	return n.createElement(
		o.Z,
		{
			key: e.keyData.key,
			onActivate: () => {
				Xg(e.appid, e.keyData.key);
				u();
			},
			className: i,
			ref: S,
			style: {
				height: e.keyData.height,
				width: a ? null : e.keyData.width,
				flexGrow: a ? 1 : null,
			},
		},
		e.keyData.secondaryLabel &&
			n.createElement(
				"div",
				{
					className: c.KeyboardKeyLabel,
				},
				e.keyData.secondaryLabel,
			),
		n.createElement(
			"div",
			{
				className: c.KeyboardKeyLabel,
				style: {
					fontSize: v,
					wordWrap: "break-word",
					wordBreak: "break-word",
				},
			},
			d,
		),
	);
}
function w(e) {
	return _.map((t, r) => {
		const i = t.map((t) =>
			n.createElement(S, {
				key: t.key,
				appid: e,
				keyData: t,
			}),
		);
		return n.createElement(
			o.Z,
			{
				"flow-children": "row",
				className: (0, s.A)(c.KeyboardRow, r == 0 && c.TopRow),
				key: r,
				navEntryPreferPosition: u.iU.MAINTAIN_X,
				...A.C3,
			},
			i,
		);
	});
}
const B = (0, i.PA)(function (e) {
	const { appid: t } = e;
	const r = w(t);
	return n.createElement(
		"div",
		{
			className: c.KeyboardPageContainer,
		},
		n.createElement(d.d, {
			label: (0, m.we)("#ControllerConfigurator_ChooseBinding_Prompt_Keyboard"),
		}),
		n.createElement(
			o.Z,
			{
				className: (0, s.A)(c.KeyboardContainer),
				"flow-children": "column",
				navEntryPreferPosition: u.iU.MAINTAIN_Y,
			},
			r,
		),
	);
});
const v = [
	[
		{
			key: 73,
			labelLoc: "#Key_Insert",
			width: 53,
		},
		{
			key: 74,
			labelLoc: "#Key_Home",
			width: 53,
		},
		{
			key: 75,
			labelLoc: "#Key_PgUp",
			width: 53,
		},
	],
	[
		{
			key: 76,
			labelLoc: "#Key_Delete",
			width: 53,
		},
		{
			key: 77,
			labelLoc: "#Key_End",
			width: 53,
		},
		{
			key: 78,
			labelLoc: "#Key_PgDn",
			width: 53,
		},
	],
	[
		{
			key: 82,
			label: "↑",
			width: 53,
			additionalStyle: c.ThirdRowGap,
		},
	],
	[
		{
			key: 80,
			label: "←",
			width: 53,
		},
		{
			key: 81,
			label: "↓",
			width: 53,
		},
		{
			key: 79,
			label: "→",
			width: 53,
		},
	],
];
const I = [
	[
		{
			key: 111,
			labelLoc: "#Key_Play",
			width: 53,
		},
		{
			key: 112,
			labelLoc: "#Key_Stop",
			width: 53,
		},
		{
			key: 113,
			labelLoc: "#Key_Next",
			width: 53,
		},
	],
	[
		{
			key: 83,
			labelLoc: "#Key_Numlock",
			width: 53,
		},
		{
			key: 84,
			label: "/",
			width: 53,
		},
		{
			key: 85,
			label: "*",
			width: 53,
		},
	],
	[
		{
			key: 95,
			label: "7",
			width: 53,
		},
		{
			key: 96,
			label: "8",
			width: 53,
		},
		{
			key: 97,
			label: "9",
			width: 53,
		},
	],
	[
		{
			key: 92,
			label: "4",
			width: 53,
		},
		{
			key: 93,
			label: "5",
			width: 53,
		},
		{
			key: 94,
			label: "6",
			width: 53,
		},
	],
	[
		{
			key: 89,
			label: "1",
			width: 53,
		},
		{
			key: 90,
			label: "2",
			width: 53,
		},
		{
			key: 91,
			label: "3",
			width: 53,
		},
	],
	[
		{
			key: 98,
			label: "0",
			width: 112,
		},
		{
			key: 99,
			label: ".",
			width: 53,
		},
	],
];
const E = [
	[
		{
			key: 114,
			labelLoc: "#Key_Prev",
			width: 53,
			height: 46,
		},
	],
	[
		{
			key: 86,
			label: "-",
			width: 53,
			height: 46,
		},
	],
	[
		{
			key: 87,
			label: "+",
			width: 53,
			height: 99,
		},
	],
	[
		{
			key: 88,
			labelLoc: "#Key_Enter",
			width: 53,
			height: 99,
		},
	],
];
export function MZ(e) {
	const t = l.v3.CurrentEditedBinding;
	const r = t?.keyboard_key !== undefined && t.keyboard_key.key >= 70;
	return {
		tab: {
			id: "Numpad",
			title: "#ControllerConfigurator_ChooseBinding_Numpad",
			content: n.createElement(k, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
function T(e) {
	const { appid: t, columnElements: r, columnStyle: i } = e;
	const a = r.map((e, r) => {
		const i = e.map((e) =>
			n.createElement(S, {
				key: e.key,
				appid: t,
				keyData: e,
			}),
		);
		return n.createElement(
			o.Z,
			{
				"flow-children": "row",
				className: (0, s.A)(c.NumpadRow, r == 0 && c.TopRow),
				key: r,
				navEntryPreferPosition: u.iU.MAINTAIN_X,
			},
			i,
		);
	});
	return n.createElement(
		o.Z,
		{
			className: (0, s.A)(i),
			"flow-children": "column",
			navEntryPreferPosition: u.iU.MAINTAIN_Y,
		},
		a,
	);
}
function R(e) {
	return n.createElement(
		o.Z,
		{
			className: (0, s.A)(c.NumpadPageContainer),
			navEntryPreferPosition: u.iU.MAINTAIN_X,
		},
		n.createElement(T, {
			appid: e,
			columnElements: v,
		}),
		n.createElement(T, {
			appid: e,
			columnElements: I,
			columnStyle: c.MainNumpadColumn,
		}),
		n.createElement(T, {
			appid: e,
			columnElements: E,
			columnStyle: c.RightNumpadColumn,
		}),
	);
}
const k = (0, i.PA)(function (e) {
	const { appid: t } = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(d.d, {
			label: (0, m.we)("#ControllerConfigurator_ChooseBinding_Prompt_Keyboard"),
		}),
		n.createElement(
			o.Z,
			{
				className: (0, s.A)(c.GamepadGridContainer),
				"flow-children": "grid",
			},
			R(t),
		),
	);
});
