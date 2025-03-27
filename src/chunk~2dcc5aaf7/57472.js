import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { VI } from "./34792.js";
import a, { $ } from "./27756.js";
import s, { R7 } from "./11131.js";
import o from "./96670.js";
import c from "./2306.js";
function M(e) {
	const {
		bRequiresRestart,
		visible = true,
		deferred = false,
		fnOnSetDeferred,
		checked,
		onChange,
		label,
		onClick,
		feature,
		...h
	} = e;
	const C = R7();
	const _ = n.useCallback(
		(e) => {
			if (onChange) {
				onChange(e);
			}
		},
		[onChange],
	);
	const f = n.useCallback(
		(e) => {
			$({
				fnOnOK: () => _(e),
				strCancelButtonText: Localize("#Settings_RestartLater_ButtonText"),
				fnOnCancel: () => {
					_(e);
					if (fnOnSetDeferred) {
						fnOnSetDeferred();
					}
				},
				ownerWindow: C.ownerWindow,
			});
		},
		[_, fnOnSetDeferred, C.ownerWindow],
	);
	if (checked !== undefined && visible) {
		return (
			<c.C
				feature={feature}
				label={<o.S deferred={deferred} label={label} />}
				checked={checked}
				onChange={bRequiresRestart ? f : _}
				onClick={onClick}
				{...h}
			/>
		);
	} else {
		return null;
	}
}
export function G(e) {
	const {
		setting,
		invert = false,
		onChange,
		feature,
		displayOffIfDisabled,
		disabled,
		...c
	} = e;
	const [u, d, A, p] = VI(setting);
	const g = n.useCallback(
		(e) => {
			const t = invert ? !e : e;
			d(t);
			if (onChange) {
				onChange(t);
			}
		},
		[onChange, d, invert],
	);
	if (u === undefined) {
		return null;
	}
	const h = (!disabled || !displayOffIfDisabled) && u;
	const C = invert ? !h : h;
	return (
		<M
			{...c}
			feature={feature}
			checked={C}
			deferred={A}
			disabled={disabled}
			fnOnSetDeferred={p}
			onChange={g}
			controlled
		/>
	);
}
export function y(e) {
	const { params, ...r } = e;
	return (
		<M
			visible={params.bAvailable}
			checked={params.bEnabled}
			onChange={params.setEnabled}
			{...r}
		/>
	);
}
