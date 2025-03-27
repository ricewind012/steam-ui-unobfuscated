import { Localize } from "../../actual_src/utils/localization.js";
import _n, { useState } from "./63696.js";
import i from "./64608.js";
import a, { l9 } from "./5640.js";
import s, { wT } from "./28934.js";
import o from "./57530.js";
import { A as A_1 } from "./90765.js";
import m from "./41480.js";
import u from "./98995.js";
import A from "./69164.js";
import p from "./50376.js";
import g from "./37086.js";
import f from "./57257.js";
import { Qn } from "./72476.js";
const l = o;
function H(e) {
	const { fnClose, onSetKey, strTitle } = e;
	const [s, setS] = useState(e.currentKey);
	const MRef = _n.useRef(undefined);
	return (
		<div className={l.KeyCaptureModal}>
			<div className={l.KeyCaptureHeader}>
				<div className={l.Header}>{Localize("#Hotkey_Modal_Header")}</div>
				<div className={l.Subhead}>{Localize("#Hotkey_Modal_Subhead")}</div>
			</div>
			<div className={l.KeyCaptureCenter}>
				<div className={l.Explainer}>{strTitle ?? ""}</div>
				<div className={l.KeyCaptureContainer}>
					<i.pd
						focusOnMount
						spellCheck={false}
						ref={MRef}
						className={A_1(l.KeyCapture, e.disabled && l.Disabled)}
						onKeyDown={
							e.disabled ||
							((e) => {
								e.stopPropagation();
								e.preventDefault();
								if (
									e.key == "Shift" ||
									e.key == "Control" ||
									e.key == "Control" ||
									e.key == "Alt" ||
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
									setS(t);
								});
							})
						}
						value={s?.display_name ?? ""}
					/>
					<A.Z
						className={l.UnbindButton}
						onActivate={() => {
							setS({
								shift_key: false,
								alt_key: false,
								ctrl_key: false,
								meta_key: false,
								key_code: 0,
								display_name: "None",
							});
							MRef.current?.Focus();
						}}
					>
						<u.he toolTipContent={Localize("#Hotkey_Modal_Unbind")}>
							<p.sED color="#8b929a" />
						</u.he>
					</A.Z>
				</div>
			</div>
			<div className={l.KeyCaptureBottomRow}>
				<i.$n
					onClick={() => {
						onSetKey(s);
						fnClose();
					}}
				>
					{Localize("#Button_Confirm")}
				</i.$n>
				<i.$n onClick={fnClose}>{Localize("#Button_Cancel")}</i.$n>
			</div>
		</div>
	);
}
function C(e) {
	const [t, setT] = useState(false);
	const i = e.currentKey.key_code
		? e.currentKey.display_name
		: Localize("#Settings_Hotkey_Button_NotBound");
	return (
		<>
			<g.CS
				onClick={() => setT(true)}
				className={A_1(l.KeyCapture, e.disabled && l.Disabled)}
			>
				{i}
			</g.CS>
			<m.mt
				active={t}
				onDismiss={() => {
					setT(false);
				}}
			>
				<H
					{...e}
					strTitle={e.strModalTitle}
					fnClose={() => {
						setT(false);
					}}
				/>
			</m.mt>
		</>
	);
}
function _(e) {
	const { current, onKeyChange, onButtonChange, disabled } = e;
	const [o, setO] = _n.useState();
	const [u, setU] = _n.useState(false);
	const A = _n.useCallback(
		(e) => {
			onKeyChange(e.keyCode);
			setU(false);
			e.preventDefault();
			e.stopPropagation();
		},
		[onKeyChange],
	);
	const p = _n.useCallback(
		(e) => {
			onButtonChange(e.button);
			setU(false);
			e.preventDefault();
			e.stopPropagation();
		},
		[onButtonChange],
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
	return (
		<i.$n
			ref={setO}
			disabled={disabled}
			className={A_1(u && l.Capturing)}
			onClick={() => {
				setU(true);
				o.focus();
			}}
		>
			{current}
		</i.$n>
	);
}
const b = f;
export function j(e) {
	const { feature, className, disabled, currentKey, onSetKey, strTitle, ...d } =
		e;
	const A = l9(feature);
	const p = A !== 0;
	const g = wT();
	const h = Qn();
	return (
		<i.D0
			{...d}
			disabled={p || disabled}
			focusable={!h || p}
			className={A_1(
				b.ParentalKeyCaptureField,
				className,
				(p || disabled) && b.Disabled,
			)}
			onActivate={p && !disabled ? () => g(A, feature) : undefined}
		>
			<C
				disabled={p || disabled}
				currentKey={currentKey}
				onSetKey={onSetKey}
				strModalTitle={strTitle}
			/>
		</i.D0>
	);
}
export function n(e) {
	const {
		feature,
		className,
		disabled,
		children,
		current,
		onKeyChange,
		onButtonChange,
		...A
	} = e;
	const p = l9(feature);
	const g = p !== 0;
	const h = wT();
	return (
		<i.D0
			{...A}
			disabled={g || disabled}
			className={A_1(
				b.ParentalKeyCaptureField,
				className,
				(g || disabled) && b.Disabled,
			)}
			onActivate={g && !disabled ? () => h(p, feature) : undefined}
		>
			<_
				disabled={g || disabled}
				current={current}
				onKeyChange={onKeyChange}
				onButtonChange={onButtonChange}
			/>
			{children}
		</i.D0>
	);
}
