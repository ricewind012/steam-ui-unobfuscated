var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./45309.js");
var s = require("./64979.js");
var o = s;
var l = require("./93025.js");
export function K(e) {
	const {
		title: t,
		description: r,
		errorText: s,
		onResult: l,
		digits: c,
		className: m,
		validateDigit: u,
		...d
	} = e;
	const [A, p] = n.useState("");
	const g = A.length == c;
	n.useEffect(() => {
		p("");
	}, [s]);
	const h =
		l == null
			? undefined
			: () => {
					if (g) {
						l(A);
					}
				};
	return n.createElement(
		a.X_,
		{
			className: m,
			title: t,
			description: r,
			...d,
			disableCommit: !g,
			onCommitResult: h,
		},
		n.createElement(
			i.a3,
			{
				className: o.ErrorText,
			},
			s,
			"\xA0",
		),
		n.createElement(i.QJ, {
			className: o.DigitInputField,
			digits: c,
			onChange: p,
			value: A,
			validateDigit: u,
		}),
	);
}
export const R = (e) => {
	const {
		title: t,
		description: r,
		onResult: i,
		numDigits: s,
		className: c,
		validateDigits: m,
		autoFocus: u,
		allowChars: d,
		...A
	} = e;
	const [p, g] = n.useState([]);
	const h = n.useMemo(() => {
		const e = p.join("").trim();
		return m(e);
	}, [p, m]);
	const C = n.useCallback(() => {
		if (h && i) {
			const e = p.join("");
			i(e);
		}
	}, [h, i, p]);
	return n.createElement(
		a.X_,
		{
			title: t,
			className: c,
			description: r,
			onCommitResult: C,
			disableCommit: !h,
			...A,
		},
		n.createElement(
			"div",
			{
				className: o.SegmentedInput,
			},
			n.createElement(l.a, {
				length: s,
				onChange: (e) => {
					g(e);
				},
				autoFocus: u,
				allowCharacter: d,
				value: p,
			}),
		),
	);
};
