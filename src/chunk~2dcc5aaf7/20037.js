import n from "./63696.js";
import i from "./64608.js";
import a from "./45309.js";
import s from "./64979.js";
import l from "./93025.js";
const o = s;
export function K(e) {
	const {
		title,
		description,
		errorText,
		onResult,
		digits,
		className,
		validateDigit,
		...d
	} = e;
	const [A, setA] = n.useState("");
	const g = A.length == digits;
	n.useEffect(() => {
		setA("");
	}, [errorText]);
	const h =
		onResult == null ||
		(() => {
			if (g) {
				onResult(A);
			}
		});
	return (
		<a.X_
			className={className}
			title={title}
			description={description}
			{...d}
			disableCommit={!g}
			onCommitResult={h}
		>
			<i.a3 className={o.ErrorText}>
				{errorText}
				{"\xA0"}
			</i.a3>
			<i.QJ
				className={o.DigitInputField}
				digits={digits}
				onChange={setA}
				value={A}
				validateDigit={validateDigit}
			/>
		</a.X_>
	);
}
export const R = (e) => {
	const {
		title,
		description,
		onResult,
		numDigits,
		className,
		validateDigits,
		autoFocus,
		allowChars,
		...A
	} = e;
	const [p, setP] = n.useState([]);
	const h = n.useMemo(() => {
		const e = p.join("").trim();
		return validateDigits(e);
	}, [p, validateDigits]);
	const C = n.useCallback(() => {
		if (h && onResult) {
			const e = p.join("");
			onResult(e);
		}
	}, [h, onResult, p]);
	return (
		<a.X_
			title={title}
			className={className}
			description={description}
			onCommitResult={C}
			disableCommit={!h}
			{...A}
		>
			<div className={o.SegmentedInput}>
				<l.a
					length={numDigits}
					onChange={(e) => {
						setP(e);
					}}
					autoFocus={autoFocus}
					allowCharacter={allowChars}
					value={p}
				/>
			</div>
		</a.X_>
	);
};
