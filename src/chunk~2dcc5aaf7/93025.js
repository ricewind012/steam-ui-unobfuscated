var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90242.js");
var _a = require(/*webcrack:missing*/ "./69164.js");
var s = require("./89791.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./29937.js");
var c = l;
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
	(0, n.useEffect)(() => {
		if (d) {
			y();
		}
	}, []);
	const C = (0, n.useRef)([]);
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
			n.createElement(i.BA, {
				noFocusRing: true,
				type: "text",
				maxLength: 1,
				key: e,
				ref: (t) => (C.current[e] = t),
				onChange: f,
				onFocus: b,
				onClick: (e) => e.stopPropagation(),
				onKeyDown: S,
				onPaste: w,
				value: r[e] ? r[e][0] : "",
				autoComplete: "none",
				autoFocus: e === 0 && d,
				disabled: A || p,
				className: c.Input,
			}),
		);
	}
	return n.createElement(
		_a.Z,
		{
			className: (0, o.A)(
				c.SegmentedCharacterInput,
				u === "danger" && c.Danger,
				A && c.Disabled,
				g && c.BackupCode,
			),
			onClick: y,
		},
		p &&
			n.createElement(
				"div",
				{
					className: c.Loading,
				},
				n.createElement(s.kt, {
					size: "small",
				}),
			),
		B,
	);
}
