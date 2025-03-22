var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./84056.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require("./85360.js");
var m = require("./76587.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require("./45309.js");
var A = require("./62486.js");
var p = require("./13869.js");
var g = require("./13110.js");
var h = require(/*webcrack:missing*/ "./4690.js");
var C = require("./87935.js");
var _ = require("./35488.js");
var f = require(/*webcrack:missing*/ "./54644.js");
var b = require("./93966.js");
var y = require("./18869.js");
var S = require("./18057.js");
var w = require("./23101.js");
export function CM(e) {
	const t = c.v3.CurrentEditedBinding;
	const r =
		t?.mouse_button !== undefined ||
		t?.mouse_wheel !== undefined ||
		t?.controller_action?.action == 3 ||
		t?.controller_action?.action == 36 ||
		t?.controller_action?.action == 37 ||
		t?.controller_action?.action == 38 ||
		t?.controller_action?.action == 39;
	return {
		tab: {
			id: "Mouse",
			title: "#ControllerConfigurator_ChooseBinding_Mouse",
			content: n.createElement(D, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
function v(e) {
	const { existingBinding: t, onResult: r, ...i } = e;
	const [a, o] = n.useState(e.existingBinding?.x ?? 0);
	const [l, c] = n.useState(e.existingBinding?.y ?? 0);
	const m = (e) => {
		o(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const A = (e) => {
		c(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const p =
		r == null
			? undefined
			: () => {
					r({
						x: a,
						y: l,
						restore: false,
					});
					e.closeModal();
				};
	return n.createElement(
		d.X_,
		{
			...i,
			onCommitResult: p,
		},
		n.createElement(
			s.D0,
			{
				label: (0, u.we)("#ControllerBinding_MousePositionModal_XPosition"),
			},
			n.createElement(
				d.Ql,
				{
					title: String(a),
					onResult: m,
				},
				n.createElement(d.Qj, {
					title: (0, u.we)("#ControllerBinding_MousePositionModal_XPosition"),
					description: "",
					inputOptions: {
						placeholder: String(a),
					},
					onResult: m,
				}),
			),
		),
		n.createElement(
			s.D0,
			{
				label: (0, u.we)("#ControllerBinding_MousePositionModal_YPosition"),
			},
			n.createElement(
				d.Ql,
				{
					title: String(l),
					onResult: A,
				},
				n.createElement(d.Qj, {
					title: (0, u.we)("#ControllerBinding_MousePositionModal_YPosition"),
					description: "",
					inputOptions: {
						placeholder: String(l),
					},
					onResult: A,
				}),
			),
		),
	);
}
export function ri(e, t) {
	const r = A.Q7[t].button
		? {
				type: a.N.k_EControllerBindingType_MouseButton,
				mouse_button: {
					button: t,
				},
			}
		: {
				type: a.N.k_EControllerBindingType_Mousewheel,
				mouse_wheel: {
					button: t,
				},
			};
	let n = c.v3.ActiveInputBinding;
	if (r != null) {
		n.new_binding = r;
	}
	c.v3.SetControllerInputBinding(e, n);
	c.v3.SaveEditingConfiguration(e);
	c.v3.EnsureEditingConfiguration();
}
const E = [
	[
		{
			key: 0,
			width: 160,
			glyphFilename: "shared_mouse_l_click.svg",
			additionalStyle: m.LeftMouseClickGap,
		},
		{
			key: 2,
			width: 160,
			glyphFilename: "shared_mouse_mid_click.svg",
		},
		{
			key: 1,
			width: 160,
			glyphFilename: "shared_mouse_r_click.svg",
		},
		{
			key: 4,
			width: 160,
			additionalStyle: m.ForwardButtonGap,
			glyphFilename: "shared_mouse_4.svg",
		},
		{
			key: 3,
			width: 160,
			glyphFilename: "shared_mouse_5.svg",
		},
	],
];
const M = [
	[
		{
			key: 5,
			width: 160,
			glyphFilename: "shared_mouse_scroll_up.svg",
		},
		{
			key: 6,
			width: 160,
			glyphFilename: "shared_mouse_scroll_down.svg",
		},
	],
];
function T(e) {
	if (!e) {
		return null;
	}
	const t = "/steaminputglyphs/" + e;
	if (t.indexOf(C.Uq.Controller.Glyphs) == 0) {
		return t;
	} else {
		return null;
	}
}
function R(e) {
	const { appid: t, data: r } = e;
	const i = A.Q7[r.key];
	const a =
		r.height !== undefined
			? {
					width: r.width,
				}
			: {
					width: r.width,
					height: r.height,
				};
	const s = i.button
		? c.v3?.CurrentEditedBinding?.mouse_button?.button == r.key
		: c.v3?.CurrentEditedBinding?.mouse_wheel?.button == r.key;
	const d = (0, b.yq)();
	const p = r.labelLoc ? r.labelLoc : i.id;
	const g = (0, u.we)(p);
	const h = (0, w.w)(g, r?.glyphFilename ? r.width * 0.6 : r.width * 0.8, {
		maxLines: 2,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 10,
	});
	return n.createElement(
		l.Z,
		{
			onActivate: () => {
				ri(t, r.key);
				d();
			},
			className: (0, o.A)(
				m.MouseKey,
				r.additionalStyle,
				s && m.SelectedBinding,
			),
			style: a,
		},
		r?.glyphFilename &&
			n.createElement("img", {
				src: T(r?.glyphFilename),
			}),
		n.createElement(
			"div",
			{
				className: (0, o.A)(m.KeyboardKeyLabel),
				style: {
					fontSize: h,
				},
			},
			g,
		),
	);
}
function k(e, t) {
	return t.map((t, r) => {
		const i = t.map((t) =>
			n.createElement(R, {
				appid: e,
				data: t,
				key: t.key,
			}),
		);
		return n.createElement(
			l.Z,
			{
				"flow-children": "column",
				className: (0, o.A)(m.GamepadKeyColumn),
				key: r,
				navEntryPreferPosition: h.iU.MAINTAIN_Y,
			},
			i,
		);
	});
}
const D = (0, i.PA)(function (e) {
	const { appid: t } = e;
	let r = [];
	const i = (0, b.yq)();
	const s = (0, y.tn)(S.BV.GamepadUI.ControllerConfigurator.MousePosition(t));
	const d = c.v3?.CurrentEditedBinding?.controller_action?.action == 3;
	r.push(
		n.createElement(
			l.Z,
			{
				key: "position",
				onActivate: s,
				className: (0, o.A)(
					m.MouseKey,
					d && m.SelectedBinding,
					m.MouseMovementBindingGap,
				),
			},
			n.createElement(
				"div",
				{
					className: (0, o.A)(m.KeyboardKeyLabel),
				},
				(0, u.we)("#ControllerBinding_MousePosition"),
			),
		),
	);
	const A = c.v3?.CurrentEditedBinding?.controller_action?.action == 36;
	r.push(
		n.createElement(
			l.Z,
			{
				key: "delta",
				onActivate: (e) => {
					(function (e, t, r) {
						(0, p.pg)(
							n.createElement(v, {
								title: (0, u.we)("#ControllerBinding_MouseDeltaModal_Title"),
								description: (0, u.we)(
									"#ControllerBinding_MouseDeltaModal_Desc",
								),
								onResult: (t) => {
									const n = {
										type: a.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 36,
											mouse: t,
										},
									};
									let i = c.v3.ActiveInputBinding;
									if (n != null) {
										i.new_binding = n;
									}
									c.v3.SetControllerInputBinding(e, i);
									c.v3.SaveEditingConfiguration(e);
									c.v3.EnsureEditingConfiguration();
									r();
								},
								existingBinding:
									c.v3.CurrentEditedBinding?.controller_action?.mouse,
							}),
							t,
						);
					})(t, (0, f.uX)(e), i);
				},
				className: (0, o.A)(m.MouseKey, A && m.SelectedBinding),
			},
			n.createElement(
				"div",
				{
					className: (0, o.A)(m.KeyboardKeyLabel),
				},
				(0, u.we)("#ControllerBinding_MouseDelta"),
			),
		),
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(g.d, {
			label: (0, u.we)("#ControllerConfigurator_ChooseBinding_Prompt_Mouse"),
		}),
		n.createElement(
			l.Z,
			{
				className: (0, o.A)(m.MousePageContainer),
				"flow-children": "row",
			},
			k(t, E),
			n.createElement(
				l.Z,
				{
					className: (0, o.A)(m.MouseCenterImage),
				},
				n.createElement(_.WholeMouseImage, null),
			),
			n.createElement(
				l.Z,
				{
					"flow-children": "column",
					className: (0, o.A)(m.GamepadKeyColumn, m.MouseMovementContainer),
					navEntryPreferPosition: h.iU.MAINTAIN_Y,
				},
				k(t, M),
				r,
			),
		),
	);
});
