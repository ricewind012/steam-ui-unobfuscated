import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./11625.js";
import a from "./43014.js";
import s, { U$, mJ, r8 } from "./62486.js";
import l from "./85360.js";
import c from "./46422.js";
import m from "./35488.js";
import { A as A_1 } from "./90765.js";
import d from "./87935.js";
import A, { PA } from "./41230.js";
import p, { zX } from "./28346.js";
import g from "./96593.js";
import h from "./78057.js";
import C from "./22091.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import f from "./84056.js";
import b, { E } from "./30519.js";
import y from "./50376.js";
export function Xt(e) {
	AssertMsg(false, `Didn't localize controllerrules.ts string: "${e}"`);
	return `${e?.replace(
		/([A-Z])([A-Z])([^A-Z])|([^A-Z])([A-Z])|(.)_(.)/g,
		"$1$4$6 $2$3$5$7",
	)}`;
}
const w = {
	1: a.g4.Up,
	5: a.g4.Down,
	7: a.g4.Left,
	3: a.g4.Right,
	12: a.g4.A,
	10: a.g4.B,
	11: a.g4.X,
	9: a.g4.Y,
	51: a.g4.Select,
	52: a.g4.Start,
	53: a.g4.LeftBumper,
	54: a.g4.RightBumper,
	61: a.g4.LeftTrigger,
	62: a.g4.RightTrigger,
	55: a.g4.RearLeftLower,
	56: a.g4.RearRightLower,
	57: a.g4.RearLeftUpper,
	58: a.g4.RearRightUpper,
};
a.g4.LeftTrackpad;
a.g4.RightTrackpad;
a.g4.LeftStick;
a.g4.RightStick;
export function VF(e) {
	const { eControllerType, eInput, eMode, eSource, bSmall, bPreview } = e;
	let A;
	let w_r = w[r];
	if (eSource == 6 || eSource == 7) {
		w_r = eSource == 6 ? a.g4.LeftTrigger : a.g4.RightTrigger;
		A = i.TriggerBinding;
	}
	const g = eControllerType ?? 4;
	const h = `${s.k$[l]?.id}_${s.SW[r]?.id}`;
	const C = A_1(A, bSmall ? i.SmallGlyphIcon : i.MediumGlyphIcon);
	const _ = ((e, t, r) => {
		const n = V(e, t, r);
		return n && n?.strPath != null && Uq(n?.strPath);
	})(eSource, eInput, g);
	const f = w_r != null || _;
	const b = (!f || s.z_[h]?.verbose == 1) && !bPreview;
	const y = A_1(
		bSmall ? i.ShrinkList : undefined,
		b && f ? i.GlyphAndLabel : i.BindingLabel,
	);
	const S =
		(eMode == 3 && eSource == 13) || (eMode == 1 && eSource == 4)
			? ((e, t) => {
					if (e === 4) {
						switch (t) {
							case 1: {
								return 9;
							}
							case 5: {
								return 12;
							}
							case 7: {
								return 11;
							}
							case 3: {
								return 10;
							}
						}
					}
					if (e === 13) {
						switch (t) {
							case 9: {
								return 1;
							}
							case 12: {
								return 5;
							}
							case 11: {
								return 7;
							}
							case 10: {
								return 3;
							}
						}
					}
					return t;
				})(eSource, eInput)
			: eInput;
	return (
		<div>
			{f && (
				<UT
					controllerType={g}
					controllerModeInput={S}
					controllerSource={eSource}
					className={C}
				/>
			)}
			{b && (
				<span className={y}>
					{s.z_[h] ? (
						<>{(0, Localize)(s.z_[h]?.id)}</>
					) : (
						<span className={y}>{h}</span>
					)}{" "}
				</span>
			)}
		</div>
	);
}
export function RF(e) {
	if (typeof e == "object") {
		return e.display_name;
	}
	switch (e) {
		case 32766: {
			return (0, Localize)(
				"#ControllerConfigurator_EControllerPresetType_NextSet",
			);
		}
		case 32767: {
			return (0, Localize)(
				"#ControllerConfigurator_EControllerPresetType_None",
			);
		}
		case 32765: {
			return (0, Localize)(
				"#ControllerConfigurator_EControllerPresetType_PreviousSet",
			);
		}
	}
}
export function JD(e, t, r) {
	const a = s.$$[e.action];
	if (a != null && a.set && e?.action_set != null) {
		const n = a.baseSet ? t : r;
		const i = n?.find((t) => t.key == e.action_set.action_set_key);
		let s = "";
		switch (e.action_set.preset_type) {
			case 32766: {
				s = (0, Localize)(
					"#ControllerConfigurator_EControllerPresetType_NextSet",
				);
				break;
			}
			case 32767: {
				break;
			}
			case 32765: {
				s = (0, Localize)(
					"#ControllerConfigurator_EControllerPresetType_PreviousSet",
				);
			}
		}
		let l = i?.display_name ?? s;
		return `${(0, Localize)(a.id)} (${l})`;
	}
	if (a != null && a.playerNumber) {
		if (e.change_player_number.player_number != null) {
			return `${(0, Localize)(a.id)} (${e.change_player_number.player_number})`;
		}
	} else {
		if (a != null && e?.action !== undefined && e.led_color !== undefined) {
			const t = E(e.led_color);
			return (
				<div className={i.LEDColorButtonContents}>
					<y.IFd
						className={i.LEDColorGlyph}
						style={{
							filter: `drop-shadow(0 0 4px ${t})`,
						}}
					/>
					<div className={i.BindingButton}>{(0, Localize)(a.id)} </div>
				</div>
			);
		}
		if (a != null && e?.action == 38) {
			const t = e.dots_per_360_calibration_spin.spin_by_amount;
			return (0, Localize)(a.id, t);
		}
		if (a != null) {
			return (0, Localize)(a.id);
		}
	}
}
export function M8(e) {
	const t = g.tw.GetAppOverviewByAppID(e);
	return zX(t, 1) || zX(t, 2);
}
export function Po() {
	const e = l.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const t = l.v3.ControllerConfiguratorLayerSetIndex;
	const r = l.v3.EditingConfiguration?.sets[e];
	const n = r == null || r.layers[t];
	const i = U$(r, 2);
	const a = U$(n, 2);
	return i.length > 0 || a.length > 0;
}
export function sn(e, t) {
	return s.Ou[t] != null && (mJ(e) & s.Ou[t]) != 0;
}
export function Xe(e, t) {
	return s.Sv[e].includes(t);
}
export function SG(e, t) {
	return (
		s.SW[t]?.source_filter == null ||
		Number((1 << e) & s.SW[t]?.source_filter) == 0
	);
}
export function Ek(e, t) {
	return (
		s.SW[t]?.mode_filter == null || Number((1 << e) & s.SW[t]?.mode_filter) == 0
	);
}
export function nQ(e, t) {
	return (
		s.SW[t]?.controller_filter == null ||
		Number(mJ(e) & s.SW[t]?.controller_filter) == 0
	);
}
export function Uz(e, t) {
	return s.SW[t]?.caps_filter == null || (e & s.SW[t]?.caps_filter) != 0;
}
export function im(e, t) {
	return (
		(!s.SW[t]?.subheader_filter ||
			Number(mJ(e) & s.SW[t]?.subheader_filter) != 0) &&
		!!s.SW[t] &&
		s.SW[t]?.subheader != null
	);
}
export function og(e, t, r, n) {
	const i = s.jg[t];
	return (i instanceof Function ? i(n, e, r) : i) !== undefined;
}
export function nr(e) {
	return e.key >= 29 && e.key <= 49;
}
export function Zq(e, t) {
	return !t || e.activators.length != 0;
}
export function sv(e, t, r, n) {
	if (s.SW[n]?.gyro_lean == null) {
		return true;
	}
	const i = 1 << e;
	const a = 1 << t;
	const o = r.find((e) => e.key == 64)?.int_value;
	if (Number(i & s.KU.k_EInputSource_Gyros) != 0) {
		return o != 2;
	}
	const l =
		Number(
			a &
				(s.Sn.k_EInputMode_AbsoluteMouse |
					s.Sn.k_EInputMode_MouseJoystick |
					s.Sn.k_EInputMode_TrackPadToCameraAngles),
		) != 0;
	return Number(i & s.KU.k_EInputSource_Gyros) != 0 || !l;
}
export function S1(e) {
	return s.SW[e]?.sortOrderOverride ?? e;
}
export function hq(e, t, r) {
	return (
		s.SW[r]?.captouch == null ||
		((Number((1 << t) & s.KU.k_EInputSource_Trackpads) != 0 ||
			Number((1 << t) & s.KU.k_EInputSource_Joysticks) != 0) &&
			((Number(mJ(e) & s.RL.k_EControllerTypeFlags_Trackpad) != 0 &&
				Number((1 << t) & s.KU.k_EInputSource_Trackpads) != 0) ||
				(Number(
					mJ(e) &
						(s.RL.k_EControllerTypeFlags_SteamControllerNeptune |
							s.RL.k_EControllerTypeFlags_MobileTouchController |
							s.RL.k_EControllerTypeFlags_HoriController),
				) != 0 &&
					Number((1 << t) & s.KU.k_EInputSource_Joysticks) != 0)))
	);
}
export function Uq(e) {
	if (e && e.indexOf(d.Uq.Controller.Glyphs) == 0) {
		return e;
	} else {
		return null;
	}
}
function V(e, t, r, n) {
	let i = r ?? 4;
	let a = t;
	let o;
	o = e;
	if ([1, 2, 11].some((e) => o == e) && [12, 10, 11, 9].some((e) => a == e)) {
		if (a == 12) {
			a = 5;
		} else if (a == 10) {
			a = 3;
		} else if (a == 11) {
			a = 7;
		} else if (a == 9) {
			a = 1;
		}
	}
	const l = c.oy.MostRecentlyActiveController;
	if (l?.bUseUniversalFaceButtonGlyphs) {
		if (
			a == 12 ||
			a == 10 ||
			a == 10 ||
			a == 11 ||
			a == 10 ||
			a == 11 ||
			a == 9
		) {
			i = 39;
		}
	}
	return s.$o?.find(
		(t) =>
			t?.eControllerType == i &&
			t?.eInput == a &&
			t?.eSource == e &&
			(!n || t.bKnockout == n),
	);
}
export const UT = PA((e) => {
	const {
		controllerType,
		controllerSource,
		controllerModeInput,
		className,
		knockout,
		controllerDigitalIO,
		...m
	} = e;
	let d = null;
	if (controllerDigitalIO != null) {
		const e = r8(controllerDigitalIO);
		d = V(e?.eSource, e?.eInputMode, controllerType, knockout);
	} else {
		d = V(controllerSource, controllerModeInput, controllerType, knockout);
	}
	console.assert(
		d,
		"Couldn't generate controller glyph for ",
		controllerType,
		controllerSource,
		controllerModeInput,
	);
	const A = d?.bPillShapedIcon ? i.PillShapedIcon : null;
	return <img src={Uq(d?.strPath)} className={A_1(A, className)} {...m} />;
});
export function yZ(e) {
	const t = h.H.GetAppDetails(e?.appID);
	const r =
		e?.Title?.charAt(0) == "#"
			? (0, Localize)(e?.Title, t?.strDisplayName)
			: e?.Title;
	return l.v3.FilterText(r) || "";
}
export function ut(e, t) {
	const r = (0, Localize)(
		`#${C.Fd.GetControllerTypeString(e.nControllerType)}`,
	);
	const n =
		e?.Description?.charAt(0) == "#"
			? (0, Localize)(e?.Description, t, r)
			: e?.Description;
	return l.v3.FilterText(n) || "";
}
export function P4(e) {
	return e?.sets.length > 1 || e?.sets[0]?.layers?.length >= 1;
}
export function x1(e) {
	if (e == 1) {
		return 2;
	}
	let t = e * 2;
	t = t > 2 ? -((4 - t) ** 4) - 1 : t ** 4;
	return t;
}
export function dv(e, t) {
	if (t == 2) {
		return e;
	}
	let r = e;
	r = (t * r) / (t - r + 1);
	return Math.min(Math.max(r, 0), 1);
}
export function Kw(e) {
	const t = l.v3.EditingConfiguration?.modes;
	for (let r = 0; r < t?.length; ++r) {
		if (t[r].modeid == e) {
			return t[r];
		}
	}
	return null;
}
export function kF(e) {
	return e == 11 || e == 14 || e == 14 || e == 19;
}
export function R0(e) {
	return e >= 29 && e <= 49;
}
export function _Q(e) {
	return s.G9.includes(e);
}
export function rw(e, t) {
	switch (e) {
		case 11: {
			return <m.TouchMenu className={t} />;
		}
		case 14: {
			return <m.RadialMenu className={t} />;
		}
		case 19: {
			return <m.HotbarMenu className={t} />;
		}
		case 18: {
			return <m.SteamInputModeScroll2D className={t} />;
		}
		case 9: {
			return <m.SteamInputModeScrollWheel className={t} />;
		}
		case 4:
		case 7:
		case 17:
		case 22:
		case 13: {
			return <m.Mouse className={t} />;
		}
		case 12:
		case 6:
		case 23:
		case 24:
		case 1:
		case 3:
		case 10: {
			return <m.GuideButton className={t} />;
		}
		case 15: {
			return <m.TouchTap className={t} />;
		}
	}
}
export function zE(e) {
	switch (e) {
		case 39:
		case 40:
		case 41: {
			return true;
		}
		default: {
			return false;
		}
	}
}
export function _H(e) {
	const t = c.oy.MostRecentlyActiveController;
	let r = t?.bUseReversedLayout;
	if (t?.bNintendoLayout) {
		r = !r;
	}
	if (r) {
		switch (e) {
			case 12: {
				return 10;
			}
			case 10: {
				return 12;
			}
			case 11: {
				return 9;
			}
			case 9: {
				return 11;
			}
			default: {
				return e;
			}
		}
	}
	return e;
}
export function ot(e) {
	switch (e) {
		default: {
			return 0;
		}
		case "KeyA": {
			return 4;
		}
		case "KeyB": {
			return 5;
		}
		case "KeyC": {
			return 6;
		}
		case "KeyD": {
			return 7;
		}
		case "KeyE": {
			return 8;
		}
		case "KeyF": {
			return 9;
		}
		case "KeyG": {
			return 10;
		}
		case "KeyH": {
			return 11;
		}
		case "KeyI": {
			return 12;
		}
		case "KeyJ": {
			return 13;
		}
		case "KeyK": {
			return 14;
		}
		case "KeyL": {
			return 15;
		}
		case "KeyM": {
			return 16;
		}
		case "KeyN": {
			return 17;
		}
		case "KeyO": {
			return 18;
		}
		case "KeyP": {
			return 19;
		}
		case "KeyQ": {
			return 20;
		}
		case "KeyR": {
			return 21;
		}
		case "KeyS": {
			return 22;
		}
		case "KeyT": {
			return 23;
		}
		case "KeyU": {
			return 24;
		}
		case "KeyV": {
			return 25;
		}
		case "KeyW": {
			return 26;
		}
		case "KeyX": {
			return 27;
		}
		case "KeyY": {
			return 28;
		}
		case "KeyZ": {
			return 29;
		}
		case "1": {
			return 30;
		}
		case "2": {
			return 31;
		}
		case "3": {
			return 32;
		}
		case "4": {
			return 33;
		}
		case "5": {
			return 34;
		}
		case "6": {
			return 35;
		}
		case "7": {
			return 36;
		}
		case "8": {
			return 37;
		}
		case "9": {
			return 38;
		}
		case "0": {
			return 39;
		}
		case "Enter": {
			return 40;
		}
		case "Escape": {
			return 41;
		}
		case "Backspace": {
			return 42;
		}
		case "Tab": {
			return 43;
		}
		case "Space": {
			return 44;
		}
		case "Minus": {
			return 45;
		}
		case "Equals": {
			return 46;
		}
		case "BracketLeft": {
			return 47;
		}
		case "BracketRight": {
			return 48;
		}
		case "Backslash": {
			return 49;
		}
		case "XXXX": {
			return 50;
		}
		case "Semicolon": {
			return 51;
		}
		case "Quote": {
			return 52;
		}
		case "Backquote": {
			return 53;
		}
		case "Comma": {
			return 54;
		}
		case "Period": {
			return 55;
		}
		case "Slash": {
			return 56;
		}
		case "CapsLock": {
			return 57;
		}
		case "F1": {
			return 58;
		}
		case "F2": {
			return 59;
		}
		case "F3": {
			return 60;
		}
		case "F4": {
			return 61;
		}
		case "F5": {
			return 62;
		}
		case "F6": {
			return 63;
		}
		case "F7": {
			return 64;
		}
		case "F8": {
			return 65;
		}
		case "F9": {
			return 66;
		}
		case "F10": {
			return 67;
		}
		case "F11": {
			return 68;
		}
		case "F12": {
			return 69;
		}
		case "F13": {
			return 70;
		}
		case "ScrollLock": {
			return 71;
		}
		case "Pause": {
			return 72;
		}
		case "Insert": {
			return 73;
		}
		case "Home": {
			return 74;
		}
		case "PageUp": {
			return 75;
		}
		case "Delete": {
			return 76;
		}
		case "End": {
			return 77;
		}
		case "PageDown": {
			return 78;
		}
		case "ArrowRight": {
			return 79;
		}
		case "ArrowLeft": {
			return 80;
		}
		case "ArrowDown": {
			return 81;
		}
		case "ArrowUp": {
			return 82;
		}
		case "NumLock": {
			return 83;
		}
		case "NumpadDivide": {
			return 84;
		}
		case "NumpadMultiply": {
			return 85;
		}
		case "NumpadSubtract": {
			return 86;
		}
		case "NumpadAdd": {
			return 87;
		}
		case "NumpadEnter": {
			return 88;
		}
		case "Numpad1": {
			return 89;
		}
		case "Numpad2": {
			return 90;
		}
		case "Numpad3": {
			return 91;
		}
		case "Numpad4": {
			return 92;
		}
		case "Numpad5": {
			return 93;
		}
		case "Numpad6": {
			return 94;
		}
		case "Numpad7": {
			return 95;
		}
		case "Numpad8": {
			return 96;
		}
		case "Numpad9": {
			return 97;
		}
		case "Numpad0": {
			return 98;
		}
		case "NumpadDecimal": {
			return 99;
		}
		case "AltLeft": {
			return 100;
		}
		case "ShiftLeft": {
			return 101;
		}
		case "MetaLeft": {
			return 102;
		}
		case "ControlLeft": {
			return 103;
		}
		case "AltRight": {
			return 104;
		}
		case "ShiftRight": {
			return 105;
		}
		case "ContextMenu": {
			return 106;
		}
		case "ControlRight": {
			return 107;
		}
		case "AudioVolumeUp": {
			return 108;
		}
		case "AudioVolumeDown": {
			return 109;
		}
		case "AudioVolumeMute": {
			return 110;
		}
		case "MediaPlayPause": {
			return 111;
		}
		case "MediaStop": {
			return 112;
		}
		case "MediaTrackNext": {
			return 113;
		}
		case "MediaTrackPrevious": {
			return 114;
		}
	}
}
export function Sp(e) {
	switch (e) {
		default: {
			return 7;
		}
		case 0: {
			return 0;
		}
		case 2: {
			return 1;
		}
		case 1: {
			return 2;
		}
		case 3: {
			return 3;
		}
		case 4: {
			return 4;
		}
	}
}
export function _N(e) {
	switch (e) {
		default: {
			return 0;
		}
		case f.H.GAMEPAD_BUTTON_A: {
			return 3;
		}
		case f.H.GAMEPAD_BUTTON_B: {
			return 4;
		}
		case f.H.GAMEPAD_BUTTON_X: {
			return 6;
		}
		case f.H.GAMEPAD_BUTTON_Y: {
			return 5;
		}
		case f.H.GAMEPAD_BUTTON_DPAD_UP: {
			return 14;
		}
		case f.H.GAMEPAD_BUTTON_DPAD_RIGHT: {
			return 17;
		}
		case f.H.GAMEPAD_BUTTON_DPAD_DOWN: {
			return 15;
		}
		case f.H.GAMEPAD_BUTTON_DPAD_LEFT: {
			return 16;
		}
		case f.H.GAMEPAD_BUTTON_MENU: {
			return 11;
		}
		case f.H.GAMEPAD_BUTTON_VIEW: {
			return 12;
		}
		case f.H.GAMEPAD_LEFTPAD_UP: {
			return 14;
		}
		case f.H.GAMEPAD_LEFTPAD_DOWN: {
			return 15;
		}
		case f.H.GAMEPAD_LEFTPAD_LEFT: {
			return 16;
		}
		case f.H.GAMEPAD_LEFTPAD_RIGHT: {
			return 17;
		}
		case f.H.GAMEPAD_RIGHTPAD_UP: {
			return 22;
		}
		case f.H.GAMEPAD_RIGHTPAD_DOWN: {
			return 23;
		}
		case f.H.GAMEPAD_RIGHTPAD_LEFT: {
			return 24;
		}
		case f.H.GAMEPAD_RIGHTPAD_RIGHT: {
			return 25;
		}
		case f.H.GAMEPAD_LEFTSTICK_UP: {
			return 18;
		}
		case f.H.GAMEPAD_LEFTSTICK_DOWN: {
			return 19;
		}
		case f.H.GAMEPAD_LEFTSTICK_LEFT: {
			return 20;
		}
		case f.H.GAMEPAD_LEFTSTICK_RIGHT: {
			return 21;
		}
		case f.H.GAMEPAD_LEFTSTICK_CLICK: {
			return 9;
		}
		case f.H.GAMEPAD_LTRIGGER_ANALOG: {
			return 1;
		}
		case f.H.GAMEPAD_RTRIGGER_ANALOG: {
			return 2;
		}
		case f.H.GAMEPAD_BUTTON_LTRIGGER: {
			return 1;
		}
		case f.H.GAMEPAD_BUTTON_RTRIGGER: {
			return 2;
		}
		case f.H.GAMEPAD_BUTTON_LSHOULDER: {
			return 7;
		}
		case f.H.GAMEPAD_BUTTON_RSHOULDER: {
			return 8;
		}
		case f.H.GAMEPAD_BUTTON_SELECT: {
			return 12;
		}
		case f.H.GAMEPAD_BUTTON_START: {
			return 11;
		}
		case f.H.GAMEPAD_BUTTON_LPAD_CLICKED: {
			return 9;
		}
		case f.H.GAMEPAD_BUTTON_RPAD_CLICKED:
		case f.H.GAMEPAD_RIGHTSTICK_CLICK: {
			return 10;
		}
	}
}
export function $c(e) {
	switch (e) {
		case 31:
		case 32:
		case 46: {
			return 32;
		}
		case 45:
		case 48: {
			return 45;
		}
		default: {
			return e;
		}
	}
}
export function yD(e, t) {
	if (e.type != t.type) {
		return false;
	}
	let r = e;
	let n = t;
	r.key_binding_data = undefined;
	n.key_binding_data = undefined;
	return JSON.stringify(r) == JSON.stringify(n);
}
export function mx(e) {
	switch (e) {
		case 4:
		case 2:
		case 3:
		case 43:
		case 49: {
			return true;
		}
		default: {
			return false;
		}
	}
}
export function B8(e, t) {
	switch (e) {
		case 4:
		case 49: {
			return t == 68;
		}
		default: {
			return false;
		}
	}
}
