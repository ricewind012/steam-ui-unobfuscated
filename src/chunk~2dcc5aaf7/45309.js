import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./88750.js";
import s from "./10606.js";
import o, { pg } from "./13869.js";
import l, { R7 } from "./11131.js";
export function Ql(e) {
	const t = R7();
	return (
		<i.$n
			onClick={() =>
				pg(
					n.cloneElement(e.children, {
						onResult: e.onResult,
					}),
					t.ownerWindow ?? window,
				)
			}
		>
			{e.title}
		</i.$n>
	);
}
export function G(e) {
	const t = R7();
	return (
		<a.kt
			onSelected={() =>
				pg(
					n.cloneElement(e.children, {
						onResult: e.onResult,
					}),
					t.ownerWindow ?? window,
				)
			}
		>
			{e.title}
		</a.kt>
	);
}
export function X_(e) {
	const {
		className,
		title,
		description,
		closeModal,
		disableCommit,
		onCommitResult,
		onCancel,
		onCustomOK,
		bAlertDialog,
		children,
	} = e;
	const g = () => {
		if (onCancel) {
			onCancel();
		}
		if (closeModal) {
			closeModal();
		}
	};
	return (
		<s.eV
			className={className}
			onOK={
				onCustomOK ??
				(() => {
					if (!disableCommit) {
						if (onCommitResult) {
							onCommitResult();
						}
						if (closeModal) {
							closeModal();
						}
					}
				})
			}
			onCancel={g}
		>
			{title && <i.Y9>{title}</i.Y9>}
			{description != null && <i.a3>{description}</i.a3>}
			{children}
			<i.wi>
				{bAlertDialog ? (
					<i.jn onClick={g}> {Localize("#Button_Cancel")} </i.jn>
				) : (
					<i.CB bOKDisabled={disableCommit} onCancel={g} />
				)}
			</i.wi>
		</s.eV>
	);
}
export function Qj(e) {
	const { onResult, isValid, inputOptions, children, ...o } = e;
	const [l, setL] = n.useState("");
	const m = isValid ? isValid(l) : l?.length > 0;
	const u =
		onResult == null ||
		(() => {
			if (m && onResult) {
				onResult(l);
			}
		});
	return (
		<X_ {...o} disableCommit={!m} onCommitResult={u}>
			<i.pd
				autoFocus
				onChange={(e) => {
					setL(e.target.value);
				}}
				{...inputOptions}
			/>
			{children}
		</X_>
	);
}
