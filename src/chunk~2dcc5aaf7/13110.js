var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./76587.js");
var o = require("./12307.js");
var l = require("./44717.js");
var c = require("./84056.js");
var m = require("./64608.js");
var u = require(/*webcrack:missing*/ "./69164.js");
var _d = require("./85360.js");
var A = require(/*webcrack:missing*/ "./46108.js");
var p = require("./45309.js");
var g = require("./62486.js");
var h = require("./13869.js");
var C = require(/*webcrack:missing*/ "./4690.js");
var _ = require("./35488.js");
var f = require(/*webcrack:missing*/ "./54644.js");
var b = require("./93966.js");
var y = require("./52192.js");
function S(e) {
	const t = _d.v3.CurrentEditedBinding;
	const r =
		t?.controller_action?.action == 37 ||
		t?.controller_action?.action == 38 ||
		t?.controller_action?.action == 39;
	return {
		tab: {
			id: "Camera",
			title: "#ControllerConfigurator_ChooseBinding_CameraAngleAction",
			content: n.createElement(E, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
function w(e) {
	const { existingBinding: t, onResult: r, ...i } = e;
	const [a, s] = n.useState(e.existingBinding?.delay_duration ?? 33);
	const [o, l] = n.useState(
		e.existingBinding?.camera_horizon_reset_angle ?? 90,
	);
	const c = a > 2 ? (1000 / a).toFixed(0) : (500).toFixed(0);
	const u = (0, A.we)(
		"#ControllerBinding_CameraHorizonReset_Desc2",
		180,
		a,
		c,
		o,
	);
	const d =
		r == null
			? undefined
			: () => {
					r({
						camera_dip_angle: 180,
						delay_duration: a,
						camera_horizon_reset_angle: o,
					});
					e.closeModal();
				};
	return n.createElement(
		p.X_,
		{
			...i,
			onCommitResult: d,
			onCancel: e.closeModal,
		},
		n.createElement(m.d3, {
			label: (0, A.we)("#ControllerBinding_CameraHorizonReset_DelayMS"),
			value: a,
			onChange: s,
			layout: "inline",
			min: 0,
			max: 100,
			showValue: true,
			step: 1,
			resetValue: 33,
			renderValue: (e) => e + (0, A.we)("#Unit_Milliseconds"),
			editableValue: true,
			bottomSeparator: "none",
		}),
		n.createElement(m.d3, {
			label: (0, A.we)("#ControllerBinding_CameraHorizonReset_ResetAngles"),
			value: o,
			onChange: l,
			layout: "inline",
			min: 45,
			max: 135,
			showValue: true,
			step: 1,
			resetValue: 90,
			renderValue: (e) => e + (0, A.we)("#Unit_Degree_Symbol"),
			editableValue: true,
			bottomSeparator: "none",
		}),
		n.createElement(m.D0, {
			label: u,
			bottomSeparator: "none",
		}),
	);
}
function B(e) {
	const { existingBinding: t, onResult: r, ...i } = e;
	const [a, s] = n.useState(e.existingBinding?.spin_duration ?? 250);
	const [o, l] = n.useState(e.existingBinding?.spin_by_amount ?? 360);
	const c =
		r == null
			? undefined
			: () => {
					r({
						spin_duration: a,
						spin_by_amount: o,
					});
					e.closeModal();
				};
	return n.createElement(
		p.X_,
		{
			title: (0, A.we)("#ControllerBinding_DotsPer360CalibrationSpin_Title", o),
			description: (0, A.we)(
				"#ControllerBinding_DotsPer360CalibrationSpin_Desc",
				o,
			),
			...i,
			onCommitResult: c,
			onCancel: e.closeModal,
		},
		n.createElement(m.d3, {
			label: (0, A.we)(
				"#ControllerBinding_DotsPer360CalibrationSpin_SpinDuration",
			),
			value: a,
			onChange: s,
			layout: "inline",
			min: 0,
			max: 1000,
			showValue: true,
			step: 1,
			resetValue: 250,
			renderValue: (e) => e + (0, A.we)("#Unit_Milliseconds"),
			editableValue: true,
			bottomSeparator: "none",
		}),
		n.createElement(m.d3, {
			label: (0, A.we)(
				"#ControllerBinding_DotsPer360CalibrationSpin_SpinAngle",
			),
			value: o,
			onChange: l,
			layout: "inline",
			min: -360,
			max: 360,
			showValue: true,
			step: 1,
			resetValue: 360,
			renderValue: (e) => e + (0, A.we)("#Unit_Degree_Symbol"),
			editableValue: true,
			bottomSeparator: "none",
		}),
	);
}
const v = [3, 12, 1, 2, 13, 4];
function _I(e) {
	const { existingBinding: t, onResult: r, ...i } = e;
	const [a, s] = n.useState(e.existingBinding?.source_of_direction ?? 3);
	const [o, l] = n.useState(e.existingBinding?.turn_duration ?? 75);
	const [c, u] = n.useState(
		e.existingBinding?.use_last_direction_if_deadzoned ?? false,
	);
	const h = _d.v3.EditingConfiguration?.controller_type;
	const C = v
		.filter((e) => (0, y.sn)(h, e))
		.map((e) => ({
			label: (0, g.ND)(g.Dd[e].id),
			data: e,
		}));
	const _ =
		r == null
			? undefined
			: () => {
					r({
						source_of_direction: a,
						turn_duration: o,
						use_last_direction_if_deadzoned: c,
					});
					e.closeModal();
				};
	return n.createElement(
		p.X_,
		{
			...i,
			onCommitResult: _,
			onCancel: e.closeModal,
		},
		n.createElement(m.m, {
			layout: "inline",
			label: (0, A.we)(
				"#ControllerBinding_CameraTurnToFaceDirection_SourceOfDirection",
			),
			selectedOption: a,
			onChange: function (e) {
				s(e.data);
			},
			rgOptions: C,
		}),
		n.createElement(m.y4, {
			label: (0, A.we)(
				"#ControllerBinding_CameraTurnToFaceDirection_UseLastDirectionIfDeadzoned",
			),
			checked: c,
			onChange: u,
		}),
		n.createElement(m.d3, {
			label: (0, A.we)(
				"#ControllerBinding_CameraTurnToFaceDirection_TurnDuration",
			),
			value: o,
			onChange: l,
			layout: "inline",
			min: 0,
			max: 1000,
			showValue: true,
			step: 1,
			resetValue: 75,
			renderValue: (e) => e + (0, A.we)("#Unit_Milliseconds"),
			editableValue: true,
			bottomSeparator: "none",
		}),
	);
}
const E = (0, i.PA)(function (e) {
	const { appid: t } = e;
	let r = [];
	const i = (0, b.yq)();
	const o = _d.v3?.CurrentEditedBinding?.controller_action?.action == 37;
	r.push(
		n.createElement(
			u.Z,
			{
				key: "camera_horizon_reset",
				onActivate: (e) => {
					(function (e, t, r) {
						(0, h.pg)(
							n.createElement(w, {
								title: (0, A.we)("#ControllerBinding_CameraHorizonReset_Title"),
								description: (0, A.we)(
									"#ControllerBinding_CameraHorizonReset_Desc",
								),
								onResult: (t) => {
									const n = {
										type: c.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 37,
											camera_horizon_reset: t,
										},
									};
									let i = _d.v3.ActiveInputBinding;
									if (n != null) {
										i.new_binding = n;
									}
									_d.v3.SetControllerInputBinding(e, i);
									_d.v3.SaveEditingConfiguration(e);
									_d.v3.EnsureEditingConfiguration();
									r();
								},
								existingBinding:
									_d.v3.CurrentEditedBinding?.controller_action
										?.camera_horizon_reset,
							}),
							t,
						);
					})(t, (0, f.uX)(e), i);
				},
				className: (0, a.A)(s.CameraAngleKey, o && s.SelectedBinding),
			},
			n.createElement(
				u.Z,
				{
					className: (0, a.A)(s.CameraResetIcon),
				},
				n.createElement(_.CameraResetIcon, null),
			),
			n.createElement(
				"div",
				{
					className: (0, a.A)(s.KeyboardKeyLabel),
				},
				(0, A.we)("#ControllerBinding_CameraHorizonReset"),
			),
		),
	);
	const l = _d.v3?.CurrentEditedBinding?.controller_action?.action == 38;
	const m = l
		? _d.v3?.CurrentEditedBinding?.controller_action
				?.dots_per_360_calibration_spin?.spin_by_amount
		: 360;
	r.push(
		n.createElement(
			u.Z,
			{
				key: "dots_per_360_calibration_spin",
				onActivate: (e) => {
					(function (e, t, r) {
						(0, h.pg)(
							n.createElement(B, {
								onResult: (t) => {
									const n = {
										type: c.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 38,
											dots_per_360_calibration_spin: t,
										},
									};
									let i = _d.v3.ActiveInputBinding;
									if (n != null) {
										i.new_binding = n;
									}
									_d.v3.SetControllerInputBinding(e, i);
									_d.v3.SaveEditingConfiguration(e);
									_d.v3.EnsureEditingConfiguration();
									r();
								},
								existingBinding:
									_d.v3.CurrentEditedBinding?.controller_action
										?.dots_per_360_calibration_spin,
							}),
							t,
						);
					})(t, (0, f.uX)(e), i);
				},
				className: (0, a.A)(s.CameraAngleKey, l && s.SelectedBinding),
			},
			n.createElement(
				u.Z,
				{
					className: (0, a.A)(s.TurnCameraIcon),
				},
				n.createElement(_.TurnCameraIcon, null),
			),
			n.createElement(
				"div",
				{
					className: (0, a.A)(s.KeyboardKeyLabel),
				},
				(0, A.we)("#ControllerBinding_DotsPer360CalibrationSpin", m),
			),
		),
	);
	const p = _d.v3?.CurrentEditedBinding?.controller_action?.action == 39;
	const g = p
		? _d.v3?.CurrentEditedBinding?.controller_action?.turn_to_face_direction
				?.source_of_direction
		: 3;
	const S = g != 4;
	r.push(
		n.createElement(
			u.Z,
			{
				key: "turn_to_face_direction",
				onActivate: (e) => {
					(function (e, t, r) {
						(0, h.pg)(
							n.createElement(_I, {
								title: (0, A.we)(
									"#ControllerBinding_CameraTurnToFaceDirection_Title",
								),
								description: (0, A.we)(
									"#ControllerBinding_CameraTurnToFaceDirection_Desc",
								),
								onResult: (t) => {
									const n = {
										type: c.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 39,
											turn_to_face_direction: t,
										},
									};
									let i = _d.v3.ActiveInputBinding;
									if (n != null) {
										i.new_binding = n;
									}
									_d.v3.SetControllerInputBinding(e, i);
									_d.v3.SaveEditingConfiguration(e);
									_d.v3.EnsureEditingConfiguration();
									r();
								},
								existingBinding:
									_d.v3.CurrentEditedBinding?.controller_action
										?.turn_to_face_direction,
							}),
							t,
						);
					})(t, (0, f.uX)(e), i);
				},
				className: (0, a.A)(s.CameraAngleKey, p && s.SelectedBinding),
			},
			S &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						"div",
						{
							className: s.InputGlyph,
						},
						n.createElement(y.VF, {
							eControllerType: _d.v3.EditingConfiguration?.controller_type,
							eInput: 7,
							eMode: _d.v3.ActiveInputBinding?.source_mode,
							eSource: g,
						}),
					),
					"+",
				),
			n.createElement(
				"div",
				{
					className: s.InputGlyph,
				},
				n.createElement(y.VF, {
					eControllerType: _d.v3.EditingConfiguration?.controller_type,
					eInput: _d.v3.ActiveInputBinding?.input_key,
					eMode: _d.v3.ActiveInputBinding?.source_mode,
					eSource: _d.v3.ActiveInputBinding?.source_binding_key,
				}),
			),
			n.createElement(
				"div",
				{
					className: (0, a.A)(s.KeyboardKeyLabel),
				},
				(0, A.we)("#ControllerBinding_CameraTurnToFaceDirection"),
			),
		),
	);
	const v = (0, A.we)(
		"#ControllerBinding_DotsPer360CalibrationSpin_Desc2",
	).split("\n");
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(d, {
			label: (0, A.we)(
				"#ControllerConfigurator_ChooseBinding_Prompt_CameraAngleAction",
			),
		}),
		n.createElement(
			u.Z,
			{
				className: (0, a.A)(s.CameraAnglesActionPageContainer),
				"flow-children": "row",
			},
			n.createElement(
				u.Z,
				{
					"flow-children": "column",
					className: (0, a.A)(s.GamepadKeyColumn, s.MouseMovementContainer),
					navEntryPreferPosition: C.iU.MAINTAIN_Y,
				},
				r,
			),
			n.createElement(
				u.Z,
				null,
				" ",
				(0, A.we)(
					"#ControllerConfigurator_ChooseBinding_CameraAngleAction_Desc",
				),
				" ",
			),
			n.createElement(u.Z, null, " ", v, " "),
		),
	);
});
var M = require("./23101.js");
function T(e) {
	const t = _d.v3.CurrentEditedBinding;
	const r = t?.game_action !== undefined;
	return {
		tab: {
			id: "GameActions",
			title: "#ControllerConfigurator_ChooseBinding_GameActions",
			content: n.createElement(k, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
function R(e) {
	const {
		gameAction: t,
		bIsExistingBinding: r,
		fnSetBinding: i,
		source: o,
	} = e;
	const l = t.display_name;
	const c = (0, M.w)(l, 128, {
		maxLines: 2,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 10,
	});
	const m = l
		? {
				fontSize: c,
			}
		: {};
	return n.createElement(
		u.Z,
		{
			key: t.key,
			onActivate: i,
			className: (0, a.A)(s.GamepadKey, r && s.SelectedBinding),
		},
		o &&
			n.createElement(y.UT, {
				className: s.SectionGlyph,
				controllerType: 31,
				controllerSource: o,
				controllerModeInput: 15,
			}),
		n.createElement(
			"div",
			{
				style: m,
				className: (0, a.A)(s.KeyboardKeyLabel),
			},
			t.display_name,
		),
	);
}
const k = (0, i.PA)(function (e) {
	const { appid: t } = e;
	const r = _d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const i = _d.v3.ControllerConfiguratorLayerSetIndex;
	const o = _d.v3.EditingConfiguration?.sets[r];
	const l = o == null ? undefined : o.layers[i];
	const m = (0, g.U$)(o, 1);
	const p = [...(0, g.U$)(o, 2), ...m];
	const h = (0, g.U$)(l, 1);
	const C = [...(0, g.U$)(l, 2), ...h];
	const _ = (0, b.yq)();
	let f = [];
	p.forEach((e) => {
		const r = _d.v3?.CurrentEditedBinding?.game_action?.action_key == e.key;
		const i = m.find((t) => t.key == e.key) ? 6 : undefined;
		f.push(
			n.createElement(R, {
				key: e.key,
				gameAction: e,
				bIsExistingBinding: r,
				fnSetBinding: () => {
					const r = {
						type: c.N.k_EControllerBindingType_GameAction,
						game_action: {
							action_key: e.key,
							action_set_key: o.key,
						},
					};
					let n = _d.v3.ActiveInputBinding;
					if (r != null) {
						n.new_binding = r;
					}
					_d.v3.SetControllerInputBinding(t, n);
					_d.v3.SaveEditingConfiguration(t);
					_d.v3.EnsureEditingConfiguration();
					_();
				},
				source: i,
			}),
		);
	});
	C.forEach((e) => {
		const r = _d.v3?.CurrentEditedBinding?.game_action?.action_key == e.key;
		const i = h.find((t) => t.key == e.key) ? 6 : undefined;
		f.push(
			n.createElement(R, {
				key: e.key,
				gameAction: e,
				bIsExistingBinding: r,
				fnSetBinding: () => {
					const r = {
						type: c.N.k_EControllerBindingType_GameAction,
						game_action: {
							action_key: e.key,
							action_set_key: l.key,
						},
					};
					let n = _d.v3.ActiveInputBinding;
					if (r != null) {
						n.new_binding = r;
					}
					_d.v3.SetControllerInputBinding(t, n);
					_d.v3.SaveEditingConfiguration(t);
					_d.v3.EnsureEditingConfiguration();
					_();
				},
				source: i,
			}),
		);
	});
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(d, {
			label: (0, A.we)(
				"#ControllerConfigurator_ChooseBinding_Prompt_GameAction",
			),
		}),
		n.createElement(
			u.Z,
			{
				className: (0, a.A)(s.GamepadGridContainer),
				"flow-children": "grid",
			},
			f,
		),
	);
});
var D = require("./60221.js");
var N = require("./61017.js");
function F(e) {
	const { actionSetOptions: t, dropdownLabel: r, onResult: i, ...a } = e;
	const [s, o] = n.useState(t[0]);
	const [l, c] = n.useState(true);
	const [u, d] = n.useState(true);
	const g = t.map((e) =>
		typeof e == "number"
			? {
					label: (0, y.RF)(e),
					data: e,
				}
			: {
					label: e.display_name,
					data: e,
				},
	);
	const h =
		i == null
			? undefined
			: () => {
					const e = {
						display: l,
						beep: u,
					};
					if (typeof s == "number") {
						e.preset_type = s;
					} else {
						e.action_set_key = s.key;
					}
					i(e);
				};
	return n.createElement(
		p.X_,
		{
			...a,
			onCommitResult: h,
		},
		n.createElement(m.Vb, {
			autoFocus: true,
			label: r,
			rgOptions: g,
			selectedOption: s,
			onChange: (e) => o(e.data),
		}),
		n.createElement(m.y4, {
			label: (0, A.we)(
				"#ControllerBinding_ControllerActionModal_ActionSetDialog_DisplayName",
			),
			checked: l,
			onChange: c,
		}),
		n.createElement(m.y4, {
			label: (0, A.we)(
				"#ControllerBinding_ControllerActionModal_ActionSetDialog_Beep",
			),
			checked: u,
			onChange: d,
		}),
	);
}
var G = require(/*webcrack:missing*/ "./44846.js");
function O(e, t) {
	const r = _d.v3.CurrentEditedBinding;
	const i = r?.controller_action?.action;
	let a = r?.controller_action !== undefined && i != 43;
	if (a) {
		const e = i == 0 || i == 25 || i == 26 || i == 27;
		a = (t && e) || (!t && !e);
	}
	return {
		tab: {
			id: t ? "Action Set" : "Controller Action",
			title: t
				? "#ControllerConfigurator_ChooseBinding_ActionSet"
				: "#ControllerConfigurator_ChooseBinding_ControllerAction",
			content: n.createElement(H, {
				appid: e,
				bActionSets: t,
			}),
		},
		bHasBinding: a,
	};
}
function P(e) {
	const { existingBinding: t, onResult: r, ...i } = e;
	const [a, s] = n.useState(e.existingBinding?.player_number ?? 1);
	const o =
		r == null
			? undefined
			: () => {
					r({
						player_number: a,
					});
					e.closeModal();
				};
	return n.createElement(
		p.X_,
		{
			...i,
			onCommitResult: o,
		},
		n.createElement(m.Vb, {
			label: (0, A.we)(
				"#ControllerBinding_ControllerActionModal_ChangePlayerNumber",
			),
			rgOptions: [
				{
					data: 1,
					label: "1",
				},
				{
					data: 2,
					label: "2",
				},
				{
					data: 3,
					label: "3",
				},
				{
					data: 4,
					label: "4",
				},
			],
			onChange: (e) => s(e.data),
			selectedOption: a,
			strDefaultLabel: (0, A.we)(
				"#ControllerBinding_ControllerActionModal_ChangePlayerNumber",
			),
		}),
	);
}
const L = [
	[
		{
			actionKey: 2,
			width: 160,
		},
		{
			actionKey: 45,
			width: 160,
		},
		{
			actionKey: 46,
			width: 160,
		},
		{
			actionKey: 47,
			width: 160,
		},
		{
			actionKey: 1,
			width: 160,
		},
		{
			actionKey: 4,
			width: 160,
		},
	],
	[
		{
			actionKey: 30,
			width: 160,
		},
		{
			actionKey: 31,
			width: 160,
		},
		{
			actionKey: 49,
			width: 160,
			requiredAppID: [G.qh],
		},
		{
			actionKey: 15,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
	],
	[
		{
			actionKey: 40,
			width: 160,
		},
		{
			actionKey: 34,
			width: 160,
		},
	],
	[
		{
			actionKey: 33,
			width: 160,
		},
		{
			actionKey: 35,
			width: 160,
		},
		{
			actionKey: 32,
			width: 160,
		},
		{
			actionKey: 44,
			width: 160,
		},
	],
	[
		{
			keyboardKey: 108,
			width: 160,
		},
		{
			keyboardKey: 109,
			width: 160,
		},
	],
	[
		{
			actionKey: 16,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
		{
			actionKey: 17,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
		{
			actionKey: 18,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
	],
	[
		{
			actionKey: 19,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
		{
			actionKey: 20,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
		{
			actionKey: 21,
			width: 160,
			requiredAppID: [G.qh, G.IV],
		},
	],
];
const z = [
	[
		{
			actionKey: 0,
			width: 160,
		},
	],
];
const x = [
	[
		{
			actionKey: 25,
			width: 160,
		},
		{
			actionKey: 26,
			width: 160,
		},
		{
			actionKey: 27,
			width: 160,
		},
	],
];
const U = [
	[
		{
			actionKey: 29,
			width: 160,
		},
	],
];
function W(e) {
	const { data: t } = e;
	const r = _d.v3.StableAppId;
	const i = t?.actionKey >= 0 ? g.$$[t.actionKey] : undefined;
	const o = i?.id ?? g.bu.find((e) => e.key == t.keyboardKey)?.id;
	const l =
		t.height !== undefined
			? {
					width: t.width,
				}
			: {
					width: t.width,
					height: t.height,
				};
	const m =
		t?.actionKey >= 0 &&
		_d.v3?.CurrentEditedBinding?.controller_action?.action == t.actionKey;
	const p =
		t?.keyboardKey >= 0 &&
		_d.v3?.CurrentEditedBinding?.keyboard_key?.key == t.keyboardKey;
	const C = m || p;
	const _ = (0, b.yq)();
	const S = !(0, y.P4)(_d.v3.EditingConfiguration) && (i?.set || i?.baseSet);
	const w = (0, A.we)(o);
	const B = (0, M.w)(w, t.width * 0.8, {
		maxLines: 2,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 9,
	});
	return n.createElement(
		u.Z,
		{
			onActivate: S
				? null
				: (e) => {
						let i = (0, f.uX)(e);
						if (t?.actionKey >= 0) {
							(function (e, t, r, i) {
								let a = g.$$[t];
								if (a?.set) {
									const s = _d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
									const o = _d.v3.ControllerConfiguratorLayerSetIndex;
									const l = _d.v3.EditingConfiguration?.sets[s];
									if (l != null) {
										l.layers[o];
									}
									const m = [];
									const u = a.baseSet == null;
									if (u) {
										m.push(...(l?.layers ?? []));
									} else {
										const e = _d.v3.EditingConfiguration?.sets;
										m.push(...(e?.filter((e) => e.key != l.key) ?? []));
										m.push(...(g.TK.map((e) => e.key) ?? []));
									}
									const p = (r) => {
										const n = {
											type: c.N.k_EControllerBindingType_ControllerAction,
											controller_action: {
												action: t,
												action_set: r,
											},
										};
										let a = _d.v3.ActiveInputBinding;
										if (n != null) {
											a.new_binding = n;
										}
										_d.v3.SetControllerInputBinding(e, a);
										_d.v3.SaveEditingConfiguration(e);
										_d.v3.EnsureEditingConfiguration();
										i();
									};
									(0, h.pg)(
										n.createElement(F, {
											title: (0, A.we)(a.id),
											description: (0, A.we)(
												u
													? "#ControllerBinding_ControllerActionModal_ActionSetLayerDesc"
													: "#ControllerBinding_ControllerActionModal_ActionSetDesc",
											),
											dropdownLabel: (0, A.we)(
												u
													? "#ControllerBinding_ControllerActionModal_ActionSetDialog_Layer"
													: "#ControllerBinding_ControllerActionModal_ActionSetDialog_Set",
											),
											actionSetOptions: m,
											onResult: p,
										}),
										r,
									);
								} else if (a?.playerNumber) {
									const s = (r) => {
										const n = {
											type: c.N.k_EControllerBindingType_ControllerAction,
											controller_action: {
												action: t,
												change_player_number: r,
											},
										};
										let a = _d.v3.ActiveInputBinding;
										if (n != null) {
											a.new_binding = n;
										}
										_d.v3.SetControllerInputBinding(e, a);
										_d.v3.SaveEditingConfiguration(e);
										_d.v3.EnsureEditingConfiguration();
										i();
									};
									(0, h.pg)(
										n.createElement(P, {
											title: (0, A.we)(a.id),
											description: (0, A.we)(
												"#ControllerBinding_ControllerActionModal_ChangePlayerNumberDesc",
											),
											onResult: s,
										}),
										r,
									);
								} else {
									const r = {
										type: c.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: t,
										},
									};
									let n = _d.v3.ActiveInputBinding;
									if (r != null) {
										n.new_binding = r;
									}
									_d.v3.SetControllerInputBinding(e, n);
									_d.v3.SaveEditingConfiguration(e);
									_d.v3.EnsureEditingConfiguration();
									i();
								}
							})(r, t.actionKey, i, _);
						} else if (t?.keyboardKey >= 0) {
							(0, N.Xg)(r, t.keyboardKey);
							_();
						}
					},
			focusable: !S,
			className: (0, a.A)(
				s.ControllerActionKey,
				t.additionalStyle,
				C && s.SelectedBinding,
				S && s.Disabled,
			),
			style: l,
		},
		n.createElement(
			"div",
			{
				className: (0, a.A)(s.KeyboardKeyLabel),
				style: {
					fontSize: B,
				},
			},
			w,
		),
	);
}
function V(e, t) {
	return t.map((t, r) => {
		const i = t
			.filter((t) => !t.requiredAppID || t.requiredAppID.includes(e))
			.map((e) =>
				n.createElement(W, {
					data: e,
					key: e.actionKey ?? e.keyboardKey,
				}),
			);
		return n.createElement(
			u.Z,
			{
				"flow-children": "row",
				className: (0, a.A)(s.GamepadKeyRow),
				key: r,
				navEntryPreferPosition: C.iU.MAINTAIN_X,
			},
			i,
		);
	});
}
const H = (0, i.PA)(function (e) {
	if (e.bActionSets) {
		const t = (0, y.P4)(_d.v3.EditingConfiguration);
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(d, {
				label: (0, A.we)(
					"#ControllerConfigurator_ChooseBinding_Prompt_ActionSet",
				),
			}),
			n.createElement(
				"div",
				{
					className: (0, a.A)(
						s.ControllerActionSetBindingsLabel,
						t && s.HasActionSets,
					),
				},
				(0, A.we)("#ControllerBinding_ControllerActions_SetBindings"),
			),
			n.createElement(
				u.Z,
				{
					className: (0, a.A)(s.ControllerActionPageContainer),
					"flow-children": "grid",
				},
				V(e.appid, z),
			),
			n.createElement(
				u.Z,
				{
					className: (0, a.A)(s.ControllerActionPageContainer),
					"flow-children": "grid",
				},
				V(e.appid, x),
			),
			n.createElement(
				u.Z,
				{
					className: (0, a.A)(s.ControllerActionPageContainer),
					"flow-children": "grid",
				},
				V(e.appid, U),
			),
		);
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(d, {
			label: (0, A.we)("#ControllerConfigurator_ChooseBinding_Prompt_System"),
		}),
		n.createElement(
			u.Z,
			{
				className: (0, a.A)(s.ControllerActionPageContainer),
				"flow-children": "grid",
			},
			V(e.appid, L),
		),
	);
});
var j = require("./50350.js");
var q = require("./33572.js");
var Q = require("./46422.js");
var Z = require(/*webcrack:missing*/ "./52451.js");
var Y = require("./34792.js");
var K = require("./96680.js");
export function d(e) {
	const t = g.Dd[_d.v3.ActiveInputBinding?.source_binding_key]?.id;
	const r = (0, g.ND)(t) ?? (0, y.Xt)(t);
	const i = _d.v3.ActiveInputBinding?.source_binding_key != 5;
	const o =
		e.label ?? (0, A.we)("#ControllerConfigurator_ChooseBinding_Prompt");
	return n.createElement(
		"div",
		{
			className: (0, a.A)(s.ChooseBindingLabel),
		},
		o,
		i &&
			n.createElement(
				"div",
				{
					className: s.GroupText,
				},
				r,
				" → ",
			),
		n.createElement(
			"div",
			{
				className: s.InputGlyph,
			},
			n.createElement(y.VF, {
				eControllerType: _d.v3.EditingConfiguration?.controller_type,
				eInput: _d.v3.ActiveInputBinding?.input_key,
				eMode: _d.v3.ActiveInputBinding?.source_mode,
				eSource: _d.v3.ActiveInputBinding?.source_binding_key,
			}),
		),
	);
}
export const I = (0, i.PA)(function (e) {
	const { appid: t } = e;
	const r = (0, q.oH)();
	const i = n.useRef(null);
	const m = (0, K.$2)();
	const [u, A] = n.useState(
		m.BrowserWindow.innerWidth * Y.rV.settings?.flCurrentDisplayScaleFactor,
	);
	const p = n.useCallback(() => {
		if (i.current) {
			const e = (0, f.a_)(i.current);
			const t = Y.rV.settings?.flCurrentDisplayScaleFactor;
			A(t * e * i.current.ownerDocument.defaultView.innerWidth);
		}
	}, []);
	n.useEffect(() => p(), [p]);
	const g = (0, Z.wY)(p);
	const h = (0, Z.Ue)(g, i);
	const C = _d.v3?.CurrentEditedBinding;
	const _ = (function (e, t, r) {
		const n = (0, y.Po)();
		const i = t > 1400;
		let a = [
			n && T(e),
			(0, D.G4)(e),
			(0, l.CM)(e),
			!i && (0, N.uC)(e),
			!i && (0, N.MZ)(e),
			i && (0, N.WP)(e),
			O(e, true),
			O(e, false),
			S(e),
		];
		a = a.filter((e) => e);
		let s = _d.v3.ChooseBindingTab;
		if (!s && r) {
			switch (r.type) {
				case c.N.k_EControllerBindingType_None:
					break;
				case c.N.k_EControllerBindingType_Key:
					s = "Keyboard";
					if (r.keyboard_key.key >= 70) {
						s = "NumPad";
					}
					break;
				case c.N.k_EControllerBindingType_MouseButton:
				case c.N.k_EControllerBindingType_Mousewheel:
					s = "Mouse";
					break;
				case c.N.k_EControllerBindingType_Gamepad:
					s = "GamePad";
					break;
				case c.N.k_EControllerBindingType_Modeshift:
					s = "Action Set";
					break;
				case c.N.k_EControllerBindingType_GameAction:
					s = "GameActions";
					break;
				case c.N.k_EControllerBindingType_ControllerAction:
					s = "Controller Action";
					if (
						r.controller_action.camera_horizon_reset != null ||
						r.controller_action.dots_per_360_calibration_spin != null ||
						r.controller_action.turn_to_face_direction != null
					) {
						s = "Camera";
					} else if (r.controller_action.mouse != null) {
						s = "Mouse";
					} else if (
						r.controller_action.action_set != null ||
						r.controller_action.change_player_number != null
					) {
						s = "Action Set";
					} else if (r.controller_action.led_color != null) {
						s = "Gamepad";
					} else if (r.controller_action.action == 43) {
						s = undefined;
					}
			}
		}
		s ||= n ? "GameActions" : (0, y.M8)(e) ? "Gamepad" : "Keyboard";
		return {
			rgTabs: a.map((e) => e.tab),
			strSelectedTabId: s,
		};
	})(t, u, C);
	const [b, w] = n.useState(_.strSelectedTabId);
	if (!_.rgTabs.some((e) => e?.id == b)) {
		w(_.rgTabs[0].id);
	}
	return n.createElement(
		j.Sw,
		{
			ref: h,
			background: "dialog",
			scrollable: false,
			dialogContentPadding: "none",
			headerVisibility: "default",
			contentMaxWidth: "full-width",
		},
		n.createElement(
			"div",
			{
				className: (0, a.A)(
					s.ChooseBindingContainer,
					r.mode == q._5.ControllerConfigurator &&
						Q.oy.ShouldZoomStandaloneConfigurator &&
						s.StandaloneConfigurator,
				),
			},
			n.createElement(o.xC, {
				canBeHeaderBackground: "always",
				tabs: _.rgTabs,
				activeTab: b,
				autoFocusContents: true,
				onShowTab: (e) => {
					_d.v3.SetChooseBindingTab(e);
					w(e);
				},
				cancelSkipTabHeader: true,
			}),
		),
	);
});
