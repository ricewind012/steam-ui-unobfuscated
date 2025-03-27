import { Localize } from "../../actual_src/utils/localization.js";
import {
	GetOwningWindowForEvent,
	GetTotalZoom,
} from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import a, { A } from "./90765.js";
import s from "./76587.js";
import o from "./12307.js";
import l, { CM } from "./44717.js";
import c from "./84056.js";
import m from "./64608.js";
import u from "./69164.js";
import _d from "./85360.js";
import p from "./45309.js";
import g, { ND, U$ } from "./62486.js";
import h, { pg } from "./13869.js";
import C from "./4690.js";
import _ from "./35488.js";
import b, { yq } from "./93966.js";
import y, { sn, RF, P4, Xt, Po, M8 } from "./52192.js";
import { W_1 as w_1 } from "./23101.js";
import { G4 } from "./60221.js";
import N, { Xg, uC, MZ, WP } from "./61017.js";
import G from "./44846.js";
import j from "./50350.js";
import q, { oH } from "./33572.js";
import Q from "./46422.js";
import Z, { wY, Ue } from "./52451.js";
import Y from "./34792.js";
import { $2 } from "./96680.js";
function S(e) {
	const t = _d.v3.CurrentEditedBinding;
	const r =
		t?.controller_action?.action == 37 ||
		t?.controller_action?.action == 38 ||
		t?.controller_action?.action == 38 ||
		t?.controller_action?.action == 39;
	return {
		tab: {
			id: "Camera",
			title: "#ControllerConfigurator_ChooseBinding_CameraAngleAction",
			content: <E appid={e} />,
		},
		bHasBinding: r,
	};
}
function W_1(e) {
	const { existingBinding, onResult, ...i } = e;
	const [a, setA] = n.useState(e.existingBinding?.delay_duration ?? 33);
	const [o, setO] = n.useState(
		e.existingBinding?.camera_horizon_reset_angle ?? 90,
	);
	const c = a > 2 ? (1000 / a).toFixed(0) : (500).toFixed(0);
	const u = (0, Localize)(
		"#ControllerBinding_CameraHorizonReset_Desc2",
		180,
		a,
		c,
		o,
	);
	const d =
		onResult == null ||
		(() => {
			onResult({
				camera_dip_angle: 180,
				delay_duration: a,
				camera_horizon_reset_angle: o,
			});
			e.closeModal();
		});
	return (
		<p.X_ {...i} onCommitResult={d} onCancel={e.closeModal}>
			<m.d3
				label={(0, Localize)("#ControllerBinding_CameraHorizonReset_DelayMS")}
				value={a}
				onChange={setA}
				layout="inline"
				min={0}
				max={100}
				showValue
				step={1}
				resetValue={33}
				renderValue={(e) => e + (0, Localize)("#Unit_Milliseconds")}
				editableValue
				bottomSeparator="none"
			/>
			<m.d3
				label={(0, Localize)(
					"#ControllerBinding_CameraHorizonReset_ResetAngles",
				)}
				value={o}
				onChange={setO}
				layout="inline"
				min={45}
				max={135}
				showValue
				step={1}
				resetValue={90}
				renderValue={(e) => e + (0, Localize)("#Unit_Degree_Symbol")}
				editableValue
				bottomSeparator="none"
			/>
			<m.D0 label={u} bottomSeparator="none" />
		</p.X_>
	);
}
function B(e) {
	const { existingBinding, onResult, ...i } = e;
	const [a, setA] = n.useState(e.existingBinding?.spin_duration ?? 250);
	const [o, setO] = n.useState(e.existingBinding?.spin_by_amount ?? 360);
	const c =
		onResult == null ||
		(() => {
			onResult({
				spin_duration: a,
				spin_by_amount: o,
			});
			e.closeModal();
		});
	return (
		<p.X_
			title={(0, Localize)(
				"#ControllerBinding_DotsPer360CalibrationSpin_Title",
				o,
			)}
			description={(0, Localize)(
				"#ControllerBinding_DotsPer360CalibrationSpin_Desc",
				o,
			)}
			{...i}
			onCommitResult={c}
			onCancel={e.closeModal}
		>
			<m.d3
				label={(0, Localize)(
					"#ControllerBinding_DotsPer360CalibrationSpin_SpinDuration",
				)}
				value={a}
				onChange={setA}
				layout="inline"
				min={0}
				max={1000}
				showValue
				step={1}
				resetValue={250}
				renderValue={(e) => e + (0, Localize)("#Unit_Milliseconds")}
				editableValue
				bottomSeparator="none"
			/>
			<m.d3
				label={(0, Localize)(
					"#ControllerBinding_DotsPer360CalibrationSpin_SpinAngle",
				)}
				value={o}
				onChange={setO}
				layout="inline"
				min={-360}
				max={360}
				showValue
				step={1}
				resetValue={360}
				renderValue={(e) => e + (0, Localize)("#Unit_Degree_Symbol")}
				editableValue
				bottomSeparator="none"
			/>
		</p.X_>
	);
}
const v = [3, 12, 1, 2, 13, 4];
function _I(e) {
	const { existingBinding, onResult, ...i } = e;
	const [a, setA] = n.useState(e.existingBinding?.source_of_direction ?? 3);
	const [o, setO] = n.useState(e.existingBinding?.turn_duration ?? 75);
	const [c, setC] = n.useState(
		e.existingBinding?.use_last_direction_if_deadzoned ?? false,
	);
	const h = _d.v3.EditingConfiguration?.controller_type;
	const C = v
		.filter((e) => sn(h, e))
		.map((e) => ({
			label: ND(g.Dd[e].id),
			data: e,
		}));
	const _ =
		onResult == null ||
		(() => {
			onResult({
				source_of_direction: a,
				turn_duration: o,
				use_last_direction_if_deadzoned: c,
			});
			e.closeModal();
		});
	return (
		<p.X_ {...i} onCommitResult={_} onCancel={e.closeModal}>
			<m.m
				layout="inline"
				label={(0, Localize)(
					"#ControllerBinding_CameraTurnToFaceDirection_SourceOfDirection",
				)}
				selectedOption={a}
				onChange={(e) => {
					setA(e.data);
				}}
				rgOptions={C}
			/>
			<m.y4
				label={(0, Localize)(
					"#ControllerBinding_CameraTurnToFaceDirection_UseLastDirectionIfDeadzoned",
				)}
				checked={c}
				onChange={setC}
			/>
			<m.d3
				label={(0, Localize)(
					"#ControllerBinding_CameraTurnToFaceDirection_TurnDuration",
				)}
				value={o}
				onChange={setO}
				layout="inline"
				min={0}
				max={1000}
				showValue
				step={1}
				resetValue={75}
				renderValue={(e) => e + (0, Localize)("#Unit_Milliseconds")}
				editableValue
				bottomSeparator="none"
			/>
		</p.X_>
	);
}
const E = PA((e) => {
	const { appid } = e;
	let r = [];
	const i = yq();
	const o = _d.v3?.CurrentEditedBinding?.controller_action?.action == 37;
	r.push(
		<u.Z
			key="camera_horizon_reset"
			onActivate={(e) => {
				((e, t, r) => {
					pg(
						<W_1
							title={(0, Localize)(
								"#ControllerBinding_CameraHorizonReset_Title",
							)}
							description={(0, Localize)(
								"#ControllerBinding_CameraHorizonReset_Desc",
							)}
							onResult={(t) => {
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
							}}
							existingBinding={
								_d.v3.CurrentEditedBinding?.controller_action
									?.camera_horizon_reset
							}
						/>,
						t,
					);
				})(appid, GetOwningWindowForEvent(e), i);
			}}
			className={A(s.CameraAngleKey, o && s.SelectedBinding)}
		>
			<u.Z className={A(s.CameraResetIcon)}>
				<_.CameraResetIcon />
			</u.Z>
			<div className={A(s.KeyboardKeyLabel)}>
				{(0, Localize)("#ControllerBinding_CameraHorizonReset")}
			</div>
		</u.Z>,
	);
	const l = _d.v3?.CurrentEditedBinding?.controller_action?.action == 38;
	const m = l
		? _d.v3?.CurrentEditedBinding?.controller_action
				?.dots_per_360_calibration_spin?.spin_by_amount
		: 360;
	r.push(
		<u.Z
			key="dots_per_360_calibration_spin"
			onActivate={(e) => {
				((e, t, r) => {
					pg(
						<B
							onResult={(t) => {
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
							}}
							existingBinding={
								_d.v3.CurrentEditedBinding?.controller_action
									?.dots_per_360_calibration_spin
							}
						/>,
						t,
					);
				})(appid, GetOwningWindowForEvent(e), i);
			}}
			className={A(s.CameraAngleKey, l && s.SelectedBinding)}
		>
			<u.Z className={A(s.TurnCameraIcon)}>
				<_.TurnCameraIcon />
			</u.Z>
			<div className={A(s.KeyboardKeyLabel)}>
				{(0, Localize)("#ControllerBinding_DotsPer360CalibrationSpin", m)}
			</div>
		</u.Z>,
	);
	const p = _d.v3?.CurrentEditedBinding?.controller_action?.action == 39;
	const g = p
		? _d.v3?.CurrentEditedBinding?.controller_action?.turn_to_face_direction
				?.source_of_direction
		: 3;
	const S = g != 4;
	r.push(
		<u.Z
			key="turn_to_face_direction"
			onActivate={(e) => {
				((e, t, r) => {
					pg(
						<_I
							title={(0, Localize)(
								"#ControllerBinding_CameraTurnToFaceDirection_Title",
							)}
							description={(0, Localize)(
								"#ControllerBinding_CameraTurnToFaceDirection_Desc",
							)}
							onResult={(t) => {
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
							}}
							existingBinding={
								_d.v3.CurrentEditedBinding?.controller_action
									?.turn_to_face_direction
							}
						/>,
						t,
					);
				})(appid, GetOwningWindowForEvent(e), i);
			}}
			className={A(s.CameraAngleKey, p && s.SelectedBinding)}
		>
			{S && (
				<>
					<div className={s.InputGlyph}>
						<y.VF
							eControllerType={_d.v3.EditingConfiguration?.controller_type}
							eInput={7}
							eMode={_d.v3.ActiveInputBinding?.source_mode}
							eSource={g}
						/>
					</div>
					+
				</>
			)}
			<div className={s.InputGlyph}>
				<y.VF
					eControllerType={_d.v3.EditingConfiguration?.controller_type}
					eInput={_d.v3.ActiveInputBinding?.input_key}
					eMode={_d.v3.ActiveInputBinding?.source_mode}
					eSource={_d.v3.ActiveInputBinding?.source_binding_key}
				/>
			</div>
			<div className={A(s.KeyboardKeyLabel)}>
				{(0, Localize)("#ControllerBinding_CameraTurnToFaceDirection")}
			</div>
		</u.Z>,
	);
	const v = (0, Localize)(
		"#ControllerBinding_DotsPer360CalibrationSpin_Desc2",
	).split("\n");
	return (
		<>
			<D_1
				label={(0, Localize)(
					"#ControllerConfigurator_ChooseBinding_Prompt_CameraAngleAction",
				)}
			/>
			<u.Z className={A(s.CameraAnglesActionPageContainer)} flow-children="row">
				<u.Z
					flow-children="column"
					className={A(s.GamepadKeyColumn, s.MouseMovementContainer)}
					navEntryPreferPosition={C.iU.MAINTAIN_Y}
				>
					{r}
				</u.Z>
				<u.Z>
					{" "}
					{(0, Localize)(
						"#ControllerConfigurator_ChooseBinding_CameraAngleAction_Desc",
					)}{" "}
				</u.Z>
				<u.Z> {v} </u.Z>
			</u.Z>
		</>
	);
});
function T(e) {
	const t = _d.v3.CurrentEditedBinding;
	const r = t?.game_action !== undefined;
	return {
		tab: {
			id: "GameActions",
			title: "#ControllerConfigurator_ChooseBinding_GameActions",
			content: <K_1 appid={e} />,
		},
		bHasBinding: r,
	};
}
function R(e) {
	const { gameAction, bIsExistingBinding, fnSetBinding, source } = e;
	const t_display_name = gameAction.display_name;
	const c = w_1(t_display_name, 128, {
		maxLines: 2,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 10,
	});
	const m = t_display_name
		? {
				fontSize: c,
			}
		: {};
	return (
		<u.Z
			key={gameAction.key}
			onActivate={fnSetBinding}
			className={A(s.GamepadKey, bIsExistingBinding && s.SelectedBinding)}
		>
			{source && (
				<y.UT
					className={s.SectionGlyph}
					controllerType={31}
					controllerSource={source}
					controllerModeInput={15}
				/>
			)}
			<div style={m} className={A(s.KeyboardKeyLabel)}>
				{gameAction.display_name}
			</div>
		</u.Z>
	);
}
const K_1 = PA((e) => {
	const { appid } = e;
	const r = _d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const i = _d.v3.ControllerConfiguratorLayerSetIndex;
	const o = _d.v3.EditingConfiguration?.sets[r];
	const l = o == null || o.layers[i];
	const m = U$(o, 1);
	const p = [...U$(o, 2), ...m];
	const h = U$(l, 1);
	const C = [...U$(l, 2), ...h];
	const _ = yq();
	let f = [];
	p.forEach((e) => {
		const r = _d.v3?.CurrentEditedBinding?.game_action?.action_key == e.key;
		const i = m.find((t) => t.key == e.key) ? 6 : undefined;
		f.push(
			<R
				key={e.key}
				gameAction={e}
				bIsExistingBinding={r}
				fnSetBinding={() => {
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
					_d.v3.SetControllerInputBinding(appid, n);
					_d.v3.SaveEditingConfiguration(appid);
					_d.v3.EnsureEditingConfiguration();
					_();
				}}
				source={i}
			/>,
		);
	});
	C.forEach((e) => {
		const r = _d.v3?.CurrentEditedBinding?.game_action?.action_key == e.key;
		const i = h.find((t) => t.key == e.key) ? 6 : undefined;
		f.push(
			<R
				key={e.key}
				gameAction={e}
				bIsExistingBinding={r}
				fnSetBinding={() => {
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
					_d.v3.SetControllerInputBinding(appid, n);
					_d.v3.SaveEditingConfiguration(appid);
					_d.v3.EnsureEditingConfiguration();
					_();
				}}
				source={i}
			/>,
		);
	});
	return (
		<>
			<D_1
				label={(0, Localize)(
					"#ControllerConfigurator_ChooseBinding_Prompt_GameAction",
				)}
			/>
			<u.Z className={A(s.GamepadGridContainer)} flow-children="grid">
				{f}
			</u.Z>
		</>
	);
});
function F(e) {
	const { actionSetOptions, dropdownLabel, onResult, ...a } = e;
	const [s, setS] = n.useState(actionSetOptions[0]);
	const [l, setL] = n.useState(true);
	const [u, setU] = n.useState(true);
	const g = actionSetOptions.map((e) =>
		typeof e == "number"
			? {
					label: RF(e),
					data: e,
				}
			: {
					label: e.display_name,
					data: e,
				},
	);
	const h =
		onResult == null ||
		(() => {
			const e = {
				display: l,
				beep: u,
			};
			if (typeof s == "number") {
				e.preset_type = s;
			} else {
				e.action_set_key = s.key;
			}
			onResult(e);
		});
	return (
		<p.X_ {...a} onCommitResult={h}>
			<m.Vb
				autoFocus
				label={dropdownLabel}
				rgOptions={g}
				selectedOption={s}
				onChange={(e) => setS(e.data)}
			/>
			<m.y4
				label={(0, Localize)(
					"#ControllerBinding_ControllerActionModal_ActionSetDialog_DisplayName",
				)}
				checked={l}
				onChange={setL}
			/>
			<m.y4
				label={(0, Localize)(
					"#ControllerBinding_ControllerActionModal_ActionSetDialog_Beep",
				)}
				checked={u}
				onChange={setU}
			/>
		</p.X_>
	);
}
function O(e, t) {
	const r = _d.v3.CurrentEditedBinding;
	const i = r?.controller_action?.action;
	let a = r?.controller_action !== undefined && i != 43;
	if (a) {
		const e =
			i == 0 || i == 25 || i == 25 || i == 26 || i == 25 || i == 26 || i == 27;
		a = (t && e) || (!t && !e);
	}
	return {
		tab: {
			id: t ? "Action Set" : "Controller Action",
			title: t
				? "#ControllerConfigurator_ChooseBinding_ActionSet"
				: "#ControllerConfigurator_ChooseBinding_ControllerAction",
			content: <H appid={e} bActionSets={t} />,
		},
		bHasBinding: a,
	};
}
function P(e) {
	const { existingBinding, onResult, ...i } = e;
	const [a, setA] = n.useState(e.existingBinding?.player_number ?? 1);
	const o =
		onResult == null ||
		(() => {
			onResult({
				player_number: a,
			});
			e.closeModal();
		});
	return (
		<p.X_ {...i} onCommitResult={o}>
			<m.Vb
				label={(0, Localize)(
					"#ControllerBinding_ControllerActionModal_ChangePlayerNumber",
				)}
				rgOptions={[
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
				]}
				onChange={(e) => setA(e.data)}
				selectedOption={a}
				strDefaultLabel={(0, Localize)(
					"#ControllerBinding_ControllerActionModal_ChangePlayerNumber",
				)}
			/>
		</p.X_>
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
	const { data } = e;
	const r = _d.v3.StableAppId;
	const i = data?.actionKey >= 0 ? g.$$[data.actionKey] : undefined;
	const o = i?.id ?? g.bu.find((e) => e.key == data.keyboardKey)?.id;
	const l =
		data.height !== undefined
			? {
					width: data.width,
				}
			: {
					width: data.width,
					height: data.height,
				};
	const m =
		data?.actionKey >= 0 &&
		_d.v3?.CurrentEditedBinding?.controller_action?.action == data.actionKey;
	const p =
		data?.keyboardKey >= 0 &&
		_d.v3?.CurrentEditedBinding?.keyboard_key?.key == data.keyboardKey;
	const C = m || p;
	const _ = yq();
	const S = !P4(_d.v3.EditingConfiguration) && (i?.set || i?.baseSet);
	const w = (0, Localize)(o);
	const B = w_1(w, data.width * 0.8, {
		maxLines: 2,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 9,
	});
	return (
		<u.Z
			onActivate={
				S ||
				((e) => {
					let i = GetOwningWindowForEvent(e);
					if (data?.actionKey >= 0) {
						((e, t, r, i) => {
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
								pg(
									<F
										title={(0, Localize)(a.id)}
										description={(0, Localize)(
											u
												? "#ControllerBinding_ControllerActionModal_ActionSetLayerDesc"
												: "#ControllerBinding_ControllerActionModal_ActionSetDesc",
										)}
										dropdownLabel={(0, Localize)(
											u
												? "#ControllerBinding_ControllerActionModal_ActionSetDialog_Layer"
												: "#ControllerBinding_ControllerActionModal_ActionSetDialog_Set",
										)}
										actionSetOptions={m}
										onResult={p}
									/>,
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
								pg(
									<P
										title={(0, Localize)(a.id)}
										description={(0, Localize)(
											"#ControllerBinding_ControllerActionModal_ChangePlayerNumberDesc",
										)}
										onResult={s}
									/>,
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
						})(r, data.actionKey, i, _);
					} else if (data?.keyboardKey >= 0) {
						Xg(r, data.keyboardKey);
						_();
					}
				})
			}
			focusable={!S}
			className={A(
				s.ControllerActionKey,
				data.additionalStyle,
				C && s.SelectedBinding,
				S && s.Disabled,
			)}
			style={l}
		>
			<div
				className={A(s.KeyboardKeyLabel)}
				style={{
					fontSize: B,
				}}
			>
				{w}
			</div>
		</u.Z>
	);
}
function V(e, t) {
	return t.map((t, r) => {
		const i = t
			.filter((t) => !t.requiredAppID || t.requiredAppID.includes(e))
			.map((e) => <W data={e} key={e.actionKey ?? e.keyboardKey} />);
		return (
			<u.Z
				flow-children="row"
				className={A(s.GamepadKeyRow)}
				key={r}
				navEntryPreferPosition={C.iU.MAINTAIN_X}
			>
				{i}
			</u.Z>
		);
	});
}
const H = PA((e) => {
	if (e.bActionSets) {
		const t = P4(_d.v3.EditingConfiguration);
		return (
			<>
				<D_1
					label={(0, Localize)(
						"#ControllerConfigurator_ChooseBinding_Prompt_ActionSet",
					)}
				/>
				<div
					className={A(
						s.ControllerActionSetBindingsLabel,
						t && s.HasActionSets,
					)}
				>
					{(0, Localize)("#ControllerBinding_ControllerActions_SetBindings")}
				</div>
				<u.Z
					className={A(s.ControllerActionPageContainer)}
					flow-children="grid"
				>
					{V(e.appid, z)}
				</u.Z>
				<u.Z
					className={A(s.ControllerActionPageContainer)}
					flow-children="grid"
				>
					{V(e.appid, x)}
				</u.Z>
				<u.Z
					className={A(s.ControllerActionPageContainer)}
					flow-children="grid"
				>
					{V(e.appid, U)}
				</u.Z>
			</>
		);
	}
	return (
		<>
			<D_1
				label={(0, Localize)(
					"#ControllerConfigurator_ChooseBinding_Prompt_System",
				)}
			/>
			<u.Z className={A(s.ControllerActionPageContainer)} flow-children="grid">
				{V(e.appid, L)}
			</u.Z>
		</>
	);
});
export function D_1(e) {
	const t = g.Dd[_d.v3.ActiveInputBinding?.source_binding_key]?.id;
	const r = ND(t) ?? Xt(t);
	const i = _d.v3.ActiveInputBinding?.source_binding_key != 5;
	const o =
		e.label ?? (0, Localize)("#ControllerConfigurator_ChooseBinding_Prompt");
	return (
		<div className={A(s.ChooseBindingLabel)}>
			{o}
			{i && (
				<div className={s.GroupText}>
					{r}
					{" → "}
				</div>
			)}
			<div className={s.InputGlyph}>
				<y.VF
					eControllerType={_d.v3.EditingConfiguration?.controller_type}
					eInput={_d.v3.ActiveInputBinding?.input_key}
					eMode={_d.v3.ActiveInputBinding?.source_mode}
					eSource={_d.v3.ActiveInputBinding?.source_binding_key}
				/>
			</div>
		</div>
	);
}
export const I = PA((e) => {
	const { appid } = e;
	const r = oH();
	const IRef = n.useRef(null);
	const m = $2();
	const [u, setU] = n.useState(
		m.BrowserWindow.innerWidth * Y.rV.settings?.flCurrentDisplayScaleFactor,
	);
	const p = n.useCallback(() => {
		if (IRef.current) {
			const e = GetTotalZoom(IRef.current);
			const t = Y.rV.settings?.flCurrentDisplayScaleFactor;
			setU(t * e * IRef.current.ownerDocument.defaultView.innerWidth);
		}
	}, []);
	n.useEffect(() => p(), [p]);
	const g = wY(p);
	const h = Ue(g, IRef);
	const C = _d.v3?.CurrentEditedBinding;
	const _ = ((e, t, r) => {
		const n = Po();
		const i = t > 1400;
		let a = [
			n && T(e),
			G4(e),
			CM(e),
			!i && uC(e),
			!i && MZ(e),
			i && WP(e),
			O(e, true),
			O(e, false),
			S(e),
		];
		a = a.filter((e) => e);
		let s = _d.v3.ChooseBindingTab;
		if (!s && r) {
			switch (r.type) {
				case c.N.k_EControllerBindingType_None: {
					break;
				}
				case c.N.k_EControllerBindingType_Key: {
					s = "Keyboard";
					if (r.keyboard_key.key >= 70) {
						s = "NumPad";
					}
					break;
				}
				case c.N.k_EControllerBindingType_MouseButton:
				case c.N.k_EControllerBindingType_Mousewheel: {
					s = "Mouse";
					break;
				}
				case c.N.k_EControllerBindingType_Gamepad: {
					s = "GamePad";
					break;
				}
				case c.N.k_EControllerBindingType_Modeshift: {
					s = "Action Set";
					break;
				}
				case c.N.k_EControllerBindingType_GameAction: {
					s = "GameActions";
					break;
				}
				case c.N.k_EControllerBindingType_ControllerAction: {
					s = "Controller Action";
					if (
						r.controller_action.camera_horizon_reset != null ||
						r.controller_action.dots_per_360_calibration_spin != null ||
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
		}
		s ||= n ? "GameActions" : M8(e) ? "Gamepad" : "Keyboard";
		return {
			rgTabs: a.map((e) => e.tab),
			strSelectedTabId: s,
		};
	})(appid, u, C);
	const [b, setB] = n.useState(_.strSelectedTabId);
	if (!_.rgTabs.some((e) => e?.id == b)) {
		setB(_.rgTabs[0].id);
	}
	return (
		<j.Sw
			ref={h}
			background="dialog"
			scrollable={false}
			dialogContentPadding="none"
			headerVisibility="default"
			contentMaxWidth="full-width"
		>
			<div
				className={setU(
					s.ChooseBindingContainer,
					r.mode == q._5.ControllerConfigurator &&
						Q.oy.ShouldZoomStandaloneConfigurator &&
						s.StandaloneConfigurator,
				)}
			>
				<o.xC
					canBeHeaderBackground="always"
					tabs={_.rgTabs}
					activeTab={b}
					autoFocusContents
					onShowTab={(e) => {
						_d.v3.SetChooseBindingTab(e);
						setB(e);
					}}
					cancelSkipTabHeader
				/>
			</div>
		</j.Sw>
	);
});
