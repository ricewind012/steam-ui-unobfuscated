import n, { useState, useEffect } from "./63696.js";
import i, { VI } from "./34792.js";
import a, { uN } from "./52451.js";
import o from "./91957.js";
function s(e, t) {
	const [r, setR] = useState(e);
	const [a, setA] = useState(e);
	useEffect(() => {
		if (t < 1) {
			setA(r);
			return () => {};
		}
		const e = setTimeout(() => setA(r), t);
		return () => clearTimeout(e);
	}, [r, t]);
	return [r, a, setR];
}
export function Pl(e) {
	const {
		setting,
		onChange,
		onChangeComplete,
		visible = true,
		nDebounceMs,
		feature,
		...d
	} = e;
	const [A, p] = VI(setting);
	const g = nDebounceMs > 0;
	const [h, C, _] = s(A, nDebounceMs);
	const [f, b] = uN(A, _);
	const [y, S] = g ? [f, b] : [A, p];
	const w = n.useCallback(
		(e, t) => {
			S(e);
			if (onChange) {
				onChange(e, t);
			}
		},
		[onChange, S],
	);
	const B = n.useCallback(
		(e, t) => {
			p(e);
			S(e);
			if (onChangeComplete) {
				onChangeComplete(e, t);
			}
		},
		[onChangeComplete, S, p],
	);
	n.useEffect(() => {
		if (g && C != A) {
			p(C);
		}
	}, [C]);
	if (visible) {
		return (
			<o.V
				feature={feature}
				value={y}
				onChange={w}
				onChangeComplete={B}
				{...d}
			/>
		);
	} else {
		return null;
	}
}
export function Lh(e) {
	const { info, ...r } = e;
	return <Pl visible={info.visible} min={info.min} max={info.max} {...r} />;
}
export function Ax(e) {
	const {
		setting,
		onChange,
		onChangeComplete,
		visible = true,
		nDebounceMs,
		feature,
		valueDisabled = null,
		...A
	} = e;
	const [p, g] = VI(setting);
	const h = nDebounceMs > 0;
	const [C, _, f] = s(p, nDebounceMs);
	const [b, y] = uN(p, f);
	const [S, w] = h ? [b, y] : [p, g];
	const B = n.useCallback(
		(e, t) => {
			w(e);
			if (onChange) {
				onChange(e, t);
			}
		},
		[onChange, w],
	);
	const v = n.useCallback(
		(e, t) => {
			g(e);
			w(e);
			if (onChangeComplete) {
				onChangeComplete(e, t);
			}
		},
		[onChangeComplete, w, g],
	);
	n.useEffect(() => {
		if (h && _ != p) {
			g(_);
		}
	}, [_]);
	const I = e.disabled && valueDisabled != null ? valueDisabled : S;
	return (
		<o.k feature={feature} value={I} onChange={B} onChangeComplete={v} {...A} />
	);
}
