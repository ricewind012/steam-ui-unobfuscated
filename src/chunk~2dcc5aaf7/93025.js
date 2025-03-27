import n, { useEffect, useRef } from "./63696.js";
import i from "./90242.js";
import _a from "./69164.js";
import s from "./89791.js";
import { A } from "./90765.js";
import l from "./29937.js";
const c = l;
export function a(e) {
	const {
		length: t,
		value: r,
		onChange: l,
		onPaste: m,
		tone: u,
		autoFocus: d,
		disabled: A,
		loading: p,
		backupCode: g,
		allowCharacter: h,
	} = e;
	useEffect(() => {
		if (d) {
			y();
		}
	}, []);
	const C = useRef([]);
	const _ = () => l(C.current.map((e) => e.value));
	const f = (e) => {
		const t = e.target.value;
		if (t && h && !h(t)) {
			return;
		}
		const r = e.target.nextElementSibling;
		if (e.target.value && r) {
			r.focus();
		}
		_();
	};
	const b = (e) => {
		if (C.current.findIndex((e) => !!e.value) === -1) {
			C.current[0]?.select();
		} else {
			e.target.select();
		}
	};
	const y = () => {
		const e = C.current.find((e) => !e.value);
		if (e) {
			e.focus();
		} else {
			C.current[C.current.length - 1].focus();
		}
	};
	const S = (e) => {
		const t = e.target;
		if (e.key === "Backspace" || e.key === "Delete") {
			const r =
				e.key === "Backspace" ? t.previousElementSibling : t.nextElementSibling;
			if (t.value === "" && r) {
				r.value = "";
				r.focus();
				e.preventDefault();
				_();
			}
		} else if (
			e.key === "ArrowLeft" ||
			e.key === "ArrowRight" ||
			e.key === "ArrowRight" ||
			e.key === "ArrowUp" ||
			e.key === "ArrowRight" ||
			e.key === "ArrowUp" ||
			e.key === "ArrowDown"
		) {
			const r =
				e.key === "ArrowLeft" || e.key === "ArrowUp"
					? t.previousElementSibling
					: t.nextElementSibling;
			if (r) {
				r.focus();
				e.preventDefault();
			}
		}
	};
	const w = (e) => {
		const t = e.clipboardData.getData("Text");
		let r = e.target;
		let n = 0;
		while (r && n < t.length) {
			r.focus();
			r.value = t.charAt(n);
			r = r.nextElementSibling;
			n++;
		}
		_();
		e.preventDefault();
		if (m) {
			m();
		}
	};
	const B = [];
	for (let e = 0; e < t; e++) {
		B.push(
			<i.BA
				noFocusRing
				type="text"
				maxLength={1}
				key={e}
				ref={(t) => (C.current[e] = t)}
				onChange={f}
				onFocus={b}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={S}
				onPaste={w}
				value={r[e] ? r[e][0] : ""}
				autoComplete="none"
				autoFocus={e === 0 && d}
				disabled={A || p}
				className={c.Input}
			/>,
		);
	}
	return (
		<_a.Z
			className={A(
				c.SegmentedCharacterInput,
				u === "danger" && c.Danger,
				A && c.Disabled,
				g && c.BackupCode,
			)}
			onClick={y}
		>
			{p && (
				<div className={c.Loading}>
					<s.kt size="small" />
				</div>
			)}
			{B}
		</_a.Z>
	);
}
