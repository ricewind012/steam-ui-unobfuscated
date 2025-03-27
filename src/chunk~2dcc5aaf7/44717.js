import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import a from "./84056.js";
import s from "./64608.js";
import o, { A as A_1 } from "./90765.js";
import l from "./69164.js";
import c from "./85360.js";
import m from "./76587.js";
import d from "./45309.js";
import A from "./62486.js";
import p, { pg } from "./13869.js";
import g from "./13110.js";
import h from "./4690.js";
import C from "./87935.js";
import _ from "./35488.js";
import { yq } from "./93966.js";
import y, { tn } from "./18869.js";
import S from "./18057.js";
import w, { w as w_1 } from "./23101.js";
export function CM(e) {
	const t = c.v3.CurrentEditedBinding;
	const r =
		t?.mouse_button !== undefined ||
		t?.mouse_wheel !== undefined ||
		t?.mouse_wheel !== undefined ||
		t?.controller_action?.action == 3 ||
		t?.mouse_wheel !== undefined ||
		t?.controller_action?.action == 3 ||
		t?.controller_action?.action == 36 ||
		t?.mouse_wheel !== undefined ||
		t?.controller_action?.action == 3 ||
		t?.controller_action?.action == 36 ||
		t?.controller_action?.action == 37 ||
		t?.mouse_wheel !== undefined ||
		t?.controller_action?.action == 3 ||
		t?.controller_action?.action == 36 ||
		t?.controller_action?.action == 37 ||
		t?.controller_action?.action == 38 ||
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
			content: <D appid={e} />,
		},
		bHasBinding: r,
	};
}
function V(e) {
	const { existingBinding, onResult, ...i } = e;
	const [a, setA] = n.useState(e.existingBinding?.x ?? 0);
	const [l, setL] = n.useState(e.existingBinding?.y ?? 0);
	const m = (e) => {
		setA(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const A = (e) => {
		setL(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const p =
		onResult == null ||
		(() => {
			onResult({
				x: a,
				y: l,
				restore: false,
			});
			e.closeModal();
		});
	return (
		<d.X_ {...i} onCommitResult={p}>
			<s.D0
				label={(0, Localize)("#ControllerBinding_MousePositionModal_XPosition")}
			>
				<d.Ql title={String(a)} onResult={m}>
					<d.Qj
						title={(0, Localize)(
							"#ControllerBinding_MousePositionModal_XPosition",
						)}
						description=""
						inputOptions={{
							placeholder: String(a),
						}}
						onResult={m}
					/>
				</d.Ql>
			</s.D0>
			<s.D0
				label={(0, Localize)("#ControllerBinding_MousePositionModal_YPosition")}
			>
				<d.Ql title={String(l)} onResult={A}>
					<d.Qj
						title={(0, Localize)(
							"#ControllerBinding_MousePositionModal_YPosition",
						)}
						description=""
						inputOptions={{
							placeholder: String(l),
						}}
						onResult={A}
					/>
				</d.Ql>
			</s.D0>
		</d.X_>
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
	const t = `/steaminputglyphs/${e}`;
	if (t.indexOf(C.Uq.Controller.Glyphs) == 0) {
		return t;
	} else {
		return null;
	}
}
function R(e) {
	const { appid, data } = e;
	const i = A.Q7[data.key];
	const a =
		data.height !== undefined
			? {
					width: data.width,
				}
			: {
					width: data.width,
					height: data.height,
				};
	const s = i.button
		? c.v3?.CurrentEditedBinding?.mouse_button?.button == data.key
		: c.v3?.CurrentEditedBinding?.mouse_wheel?.button == data.key;
	const d = yq();
	const p = data.labelLoc ? data.labelLoc : i.id;
	const g = (0, Localize)(p);
	const h = w_1(g, data?.glyphFilename ? data.width * 0.6 : data.width * 0.8, {
		maxLines: 2,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 10,
	});
	return (
		<l.Z
			onActivate={() => {
				ri(appid, data.key);
				d();
			}}
			className={A_1(m.MouseKey, data.additionalStyle, s && m.SelectedBinding)}
			style={a}
		>
			{data?.glyphFilename && <img src={T(data?.glyphFilename)} />}
			<div
				className={A_1(m.KeyboardKeyLabel)}
				style={{
					fontSize: h,
				}}
			>
				{g}
			</div>
		</l.Z>
	);
}
function k(e, t) {
	return t.map((t, r) => {
		const i = t.map((t) => <R appid={e} data={t} key={t.key} />);
		return (
			<l.Z
				flow-children="column"
				className={A_1(m.GamepadKeyColumn)}
				key={r}
				navEntryPreferPosition={h.iU.MAINTAIN_Y}
			>
				{i}
			</l.Z>
		);
	});
}
const D = PA((e) => {
	const { appid } = e;
	let r = [];
	const i = yq();
	const s = tn(S.BV.GamepadUI.ControllerConfigurator.MousePosition(appid));
	const d = c.v3?.CurrentEditedBinding?.controller_action?.action == 3;
	r.push(
		<l.Z
			key="position"
			onActivate={s}
			className={A_1(
				m.MouseKey,
				d && m.SelectedBinding,
				m.MouseMovementBindingGap,
			)}
		>
			<div className={A_1(m.KeyboardKeyLabel)}>
				{(0, Localize)("#ControllerBinding_MousePosition")}
			</div>
		</l.Z>,
	);
	const A = c.v3?.CurrentEditedBinding?.controller_action?.action == 36;
	r.push(
		<l.Z
			key="delta"
			onActivate={(e) => {
				((e, t, r) => {
					pg(
						<V
							title={(0, Localize)("#ControllerBinding_MouseDeltaModal_Title")}
							description={(0, Localize)(
								"#ControllerBinding_MouseDeltaModal_Desc",
							)}
							onResult={(t) => {
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
							}}
							existingBinding={
								c.v3.CurrentEditedBinding?.controller_action?.mouse
							}
						/>,
						t,
					);
				})(appid, GetOwningWindowForEvent(e), i);
			}}
			className={A_1(m.MouseKey, A && m.SelectedBinding)}
		>
			<div className={A_1(m.KeyboardKeyLabel)}>
				{(0, Localize)("#ControllerBinding_MouseDelta")}
			</div>
		</l.Z>,
	);
	return (
		<>
			<g.d
				label={(0, Localize)(
					"#ControllerConfigurator_ChooseBinding_Prompt_Mouse",
				)}
			/>
			<l.Z className={A_1(m.MousePageContainer)} flow-children="row">
				{k(appid, E)}
				<l.Z className={A_1(m.MouseCenterImage)}>
					<_.WholeMouseImage />
				</l.Z>
				<l.Z
					flow-children="column"
					className={A_1(m.GamepadKeyColumn, m.MouseMovementContainer)}
					navEntryPreferPosition={h.iU.MAINTAIN_Y}
				>
					{k(appid, M)}
					{r}
				</l.Z>
			</l.Z>
		</>
	);
});
