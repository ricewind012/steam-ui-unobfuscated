import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import a from "./84056.js";
import { A as A_1 } from "./90765.js";
import o from "./69164.js";
import l from "./85360.js";
import c from "./76587.js";
import u from "./4690.js";
import d from "./13110.js";
import A from "./15181.js";
import { yq } from "./93966.js";
import { wY, Ue, l6 } from "./52451.js";
import { w as w_1 } from "./23101.js";
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
function F(e) {
	const { appid } = e;
	const r = w(appid);
	return (
		<>
			<d.d
				label={Localize(
					"#ControllerConfigurator_ChooseBinding_Prompt_Keyboard",
				)}
			/>
			<o.Z className={c.CombinedKeyboardContainer}>
				<o.Z
					className={A_1(c.KeyboardContainer)}
					flow-children="column"
					navEntryPreferPosition={u.iU.MAINTAIN_Y}
				>
					{r}
				</o.Z>
				{R(appid)}
			</o.Z>
		</>
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
			content: <F appid={e} />,
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
			content: <B appid={e} />,
		},
		bHasBinding: r,
	};
}
function S(e) {
	const t = e.keyData.labelAlignment ?? "center";
	const r = l.v3?.CurrentEditedBinding?.keyboard_key?.key == e.keyData.key;
	const i = A_1(
		c.KeyboardKey,
		t == "left" && c.LeftAlignedLabel,
		t == "right" && c.RightAlignedLabel,
		e.keyData.labelLoc !== undefined && c.LocTextKey,
		r && c.SelectedBinding,
		e.keyData.additionalStyle,
		e.keyData.secondaryLabel && c.HasSecondaryLabel,
	);
	const a = e.keyData.width == "*";
	const u = yq();
	const d = e.keyData.label ?? Localize(e.keyData.labelLoc);
	const ARef = n.useRef(null);
	const [_, set] = n.useState(e.keyData.width);
	const b = n.useCallback(() => {
		if (a && ARef.current) {
			set(ARef.current.getBoundingClientRect().width);
		}
	}, [a]);
	const y = wY(b);
	const S = Ue(y, ARef);
	l6(window, "resize", b);
	n.useEffect(b, [b]);
	const w = _ > 0 ? _ : e.keyData.width;
	const B = e.keyData.key == 43 || e.keyData.key == 41;
	const v = w_1(d, w * 0.75, {
		maxLines: B ? 1 : 2,
		fontFamily: '"Motiva Sans", Helvetica, sans-serif',
		startingSizePx: 14,
		minSizePx: 8,
		minSingleWordBreakpoint: 8,
	});
	return (
		<o.Z
			key={e.keyData.key}
			onActivate={() => {
				Xg(e.appid, e.keyData.key);
				u();
			}}
			className={i}
			ref={S}
			style={{
				height: e.keyData.height,
				width: a || e.keyData.width,
				flexGrow: a ? 1 : null,
			}}
		>
			{e.keyData.secondaryLabel && (
				<div className={c.KeyboardKeyLabel}>{e.keyData.secondaryLabel}</div>
			)}
			<div
				className={c.KeyboardKeyLabel}
				style={{
					fontSize: v,
					wordWrap: "break-word",
					wordBreak: "break-word",
				}}
			>
				{d}
			</div>
		</o.Z>
	);
}
function w(e) {
	return _.map((t, r) => {
		const i = t.map((t) => <S key={t.key} appid={e} keyData={t} />);
		return (
			<o.Z
				flow-children="row"
				className={A_1(c.KeyboardRow, r == 0 && c.TopRow)}
				key={r}
				navEntryPreferPosition={u.iU.MAINTAIN_X}
				{...A.C3}
			>
				{i}
			</o.Z>
		);
	});
}
const B = PA((e) => {
	const { appid } = e;
	const r = w(appid);
	return (
		<div className={c.KeyboardPageContainer}>
			<d.d
				label={Localize(
					"#ControllerConfigurator_ChooseBinding_Prompt_Keyboard",
				)}
			/>
			<o.Z
				className={A_1(c.KeyboardContainer)}
				flow-children="column"
				navEntryPreferPosition={u.iU.MAINTAIN_Y}
			>
				{r}
			</o.Z>
		</div>
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
			content: <K appid={e} />,
		},
		bHasBinding: r,
	};
}
function T(e) {
	const { appid, columnElements, columnStyle } = e;
	const a = columnElements.map((e, r) => {
		const i = e.map((e) => <S key={e.key} appid={appid} keyData={e} />);
		return (
			<o.Z
				flow-children="row"
				className={A_1(c.NumpadRow, r == 0 && c.TopRow)}
				key={r}
				navEntryPreferPosition={u.iU.MAINTAIN_X}
			>
				{i}
			</o.Z>
		);
	});
	return (
		<o.Z
			className={A_1(columnStyle)}
			flow-children="column"
			navEntryPreferPosition={u.iU.MAINTAIN_Y}
		>
			{a}
		</o.Z>
	);
}
function R(e) {
	return (
		<o.Z
			className={A_1(c.NumpadPageContainer)}
			navEntryPreferPosition={u.iU.MAINTAIN_X}
		>
			<T appid={e} columnElements={v} />
			<T appid={e} columnElements={I} columnStyle={c.MainNumpadColumn} />
			<T appid={e} columnElements={E} columnStyle={c.RightNumpadColumn} />
		</o.Z>
	);
}
const K = PA((e) => {
	const { appid } = e;
	return (
		<>
			<d.d
				label={Localize(
					"#ControllerConfigurator_ChooseBinding_Prompt_Keyboard",
				)}
			/>
			<o.Z className={A_1(c.GamepadGridContainer)} flow-children="grid">
				{R(appid)}
			</o.Z>
		</>
	);
});
