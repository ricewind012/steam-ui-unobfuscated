import {
	LocalizeReact,
	Localize,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useState } from "./63696.js";
import i from "./35488.js";
import a from "./69164.js";
import s, { ck } from "./43014.js";
import o from "./53622.js";
import l from "./10606.js";
import c, { pg } from "./13869.js";
import m, { A as A_1 } from "./90765.js";
import d from "./56970.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import p from "./85243.js";
import { LoginStore } from "../../actual_src/stores/loginstore.js";
import h, { FN } from "./43152.js";
import C from "./4251.js";
import _ from "./46422.js";
import f from "./61657.js";
import b, { Bx } from "./55489.js";
import { UU } from "./31800.js";
import w, { q3 } from "./90095.js";
import B, { k1 } from "./13688.js";
import { EZ } from "./5822.js";
const I = 6;
function E(e) {
	return /\d{6}/.test(e);
}
function M(e, t) {
	const [r, setR] = useState("");
	const [a, setA] = useState(false);
	const [o, setO] = useState(false);
	const c = n.useCallback(() => {}, []);
	const m = FN({
		onKeyboardNavOut: c,
	});
	n.useEffect(() => m.HideVirtualKeyboard(), [m]);
	return {
		strValue: r,
		bSubmitting: a,
		bFailedSubmit: o,
		Backspace: () => setR(r.length ? r.slice(0, r.length - 1) : ""),
		Append: (n) => {
			if (a) {
				return;
			}
			if (o) {
				setO(false);
			}
			const c = r + n;
			if (c.length <= I) {
				setR(c);
			}
			if (c.length === I) {
				(async (r) => {
					setA(true);
					let n = d.yE.GetSettings();
					AssertMsg(
						e.allowAnyPIN || n.strPIN,
						"Lock screen displayed with no PIN set",
					);
					let a = false;
					a =
						e.allowAnyPIN || !n.strPIN
							? E(r)
							: await (E(r) &&
									new Promise((e) => setTimeout(() => e(r === n.strPIN), 200)));
					setA(false);
					setR("");
					setO(!a);
					if (a) {
						t(r);
					}
				})(c);
			}
		},
	};
}
export function Di(e) {
	d.yE.SetActiveLockScreenProps(e);
}
export function kN(e) {
	return pg(<KG {...e} />, window);
}
export function KG(e) {
	const {
		onSuccess,
		preventCancel,
		preventSteamButtons,
		hideForgotPIN,
		closeModal,
	} = e;
	n.useEffect(() => {
		_.oy.SetShowingLockScreen(true);
		return () => _.oy.SetShowingLockScreen(false);
	}, []);
	UU();
	EZ();
	Bx(p.I5.Opaque, "LockScreen");
	const { strValue, bFailedSubmit, Backspace, Append } = M(e, (e) => {
		if (closeModal) {
			closeModal();
		}
		if (onSuccess) {
			onSuccess(e);
		}
		d.yE.SetActiveLockScreenProps(null);
	});
	const E = !!strValue.length;
	const T = E
		? Backspace
		: preventCancel
			? () => {}
			: () => {
					if (closeModal) {
						closeModal();
					}
					d.yE.SetActiveLockScreenProps(null);
				};
	const R = [];
	for (let e = 0; e < I; e++) {
		R.push(<O key={e} filled={strValue.length > e} />);
	}
	let k = "";
	if (!e.allowAnyPIN) {
		let e = (() => {
			let e = d.yE.GetSettings();
			return LoginStore.GetLoginUsers().find(
				(t) => t.accountName == e.strOwnerAccountName,
			);
		})();
		if (e) {
			k = e.avatarUrl;
		}
	}
	let N = {
		onOKActionDescription: "",
	};
	if (!hideForgotPIN) {
		N.onMenuButton = (e) =>
			((e) => {
				let t = d.yE.GetSettings();
				let r = <b>{t.strOwnerAccountName}</b>;
				let i = (
					<>
						<div className={C.ResetDescription}>
							{LocalizeReact("#LockScreen_ResetDescription", r)}
						</div>
						<div className={C.ResetWarning}>
							{(0, Localize)("#LockScreen_ResetWarning")}
						</div>
					</>
				);
				let a = () => d.yE.BeginPINReset();
				let s = (
					<l.o0
						strTitle={(0, Localize)("#LockScreen_ForgotPIN")}
						onOK={a}
						strDescription={i}
						strOKButtonText={(0, Localize)("#LockScreen_Reset")}
					/>
				);
				pg(s, e, {
					strTitle: (0, Localize)("#LockScreen_ForgotPIN"),
				});
			})(GetOwningWindowForEvent(e));
		N.onMenuActionDescription = (0, Localize)("#LockScreen_ForgotPIN");
	}
	N.onCancelActionDescription = E
		? (0, Localize)("#Generic_Delete")
		: preventCancel
			? ""
			: (0, Localize)("#ActionButtonLabelCancel");
	if (preventSteamButtons) {
		N.onButtonDown = D;
		N.actionDescriptionMap = {
			...N.actionDescriptionMap,
			[f.pR.STEAM_GUIDE]: "",
			[f.pR.STEAM_QUICK_MENU]: "",
		};
	}
	return (
		<a.Z className={C.Container} onCancel={T} {...N}>
			<div className={C.Details}>
				{!e.allowAnyPIN && (
					<div className={C.UserAvatar}>{k ? <img src={k} /> : <i.User />}</div>
				)}
				<div className={C.DetailsGroup}>
					{e.allowAnyPIN && (
						<div className={C.Prompt}>
							{(0, Localize)(
								e.strPromptOverride
									? e.strPromptOverride
									: "#LockScreen_NewPINPrompt",
							)}
						</div>
					)}
					{!e.allowAnyPIN && (
						<div className={C.Prompt}>
							{(0, Localize)("#LockScreen_PINPrompt")}
						</div>
					)}
					<div className={C.Directions}>
						{(0, Localize)("#LockScreen_Directions")}
					</div>
				</div>
				<div className={C.Indicators}>{R}</div>
				<div className={C.IncorrectPIN}>
					{bFailedSubmit && (0, Localize)("#LockScreen_IncorrectPIN")}
					{"\xA0"}
				</div>
			</div>
			<F onDigit={Append} />
		</a.Z>
	);
}
function D(e) {
	let t = e.detail.button;
	if (t == f.pR.STEAM_GUIDE || t == f.pR.STEAM_QUICK_MENU) {
		e.preventDefault();
		e.stopPropagation();
	}
}
const N = [
	[1, s.g4.Up],
	[2, s.g4.Left],
	[3, s.g4.Down],
	[4, s.g4.Right],
	[5, s.g4.LeftTrigger],
	[6, s.g4.RightTrigger],
	[7, s.g4.LeftBumper],
	[8, s.g4.RightBumper],
	[9, s.g4.Y],
	[0, s.g4.X],
];
function F(e) {
	const { onDigit } = e;
	return (
		<a.Z
			className={C.NumericButtonInput}
			autoFocus
			focusable
			noFocusRing
			onButtonDown={(e) => {
				const r = N.find(([t, r]) => ck(r) === e.detail.button);
				return !!r && (onDigit(r[0]), true);
			}}
			onGamepadDirection={() => true}
		>
			{N.map(([e, r]) => (
				<G value={e} button={r} key={e} onActivate={() => onDigit(e)} />
			))}
		</a.Z>
	);
}
function G(e) {
	const { value, button, onActivate } = e;
	return (
		<a.Z
			focusable={false}
			onActivate={onActivate}
			className={C.NumericButtonOption}
		>
			{value}
			<o.W button={button} />
		</a.Z>
	);
}
function O(e) {
	return <div className={A_1(C.DigitIndicator, e.filled && C.Filled)} />;
}
export function SA() {
	const e = k1();
	const t = n.useCallback(() => {
		d.yE.SetHasShownResetPINModal();
	}, []);
	const r = q3(() => d.yE.BShowResetPINModal());
	const i = (0, Localize)("#LockScreenReset_Title");
	const a = (0, Localize)("#LockScreenReset_Settings");
	const s = (0, Localize)("#Generic_Close");
	let o = (
		<>
			<div>{(0, Localize)("#LockScreenReset_Body")}</div>
			<div className={C.PINClearedQuestion}>
				{(0, Localize)("#LockScreenReset_Question")}
			</div>
		</>
	);
	return (
		<l.EN active={r}>
			<l.o0
				closeModal={t}
				onOK={() => e.Settings("Security")}
				strTitle={i}
				strDescription={o}
				strOKButtonText={a}
				strCancelButtonText={s}
			/>
		</l.EN>
	);
}
