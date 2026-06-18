import { LocalizeTimeRemaining } from "@actual_src/utils/localization/datetime.js";
import { GetUnixTime, Seconds } from "@actual_src/utils/time.js";

import i from "./21955.js";
import { $$ } from "./52451.js";
import n from "./63696.js";
import a from "./64608.js";
import { A } from "./90765.js";
export function Z2(e) {
	const {
		nProgress,
		nTransitionSec = 1,
		margin = "none",
		indeterminate,
		color = "var(--gpColor-Blue, #1a9fff)",
		className,
		backgroundColor,
	} = e;
	const u = indeterminate && nProgress == 0;
	const d = u
		? {}
		: {
				width: `${nProgress}%`,
				transition: `${nTransitionSec}s ease`,
			};
	return (
		<div
			className={A(
				i.ProgressBar,
				margin == "standard" && i.StandardMargin,
				className,
			)}
			style={{
				background: backgroundColor,
			}}
		>
			<div
				key={`${u}`}
				className={A(i.Percent, u && i.Indeterminate)}
				style={{
					...d,
					background: color,
				}}
			/>
		</div>
	);
}
function U(e) {
	const t = ((e, t = Seconds.PerDay * 2) => {
		const [r, setR] = n.useState(null);
		$$(
			() => {
				const r = GetUnixTime();
				const n = e - r;
				if (e == null || n > t || n > t || isNaN(n)) {
					setR(null);
					return;
				}
				let a = n < 1 ? 1 : n;
				a = Math.floor(a);
				const s = LocalizeTimeRemaining(a);
				setR(s);
			},
			500,
			[e, t],
		);
		return r;
	})(e.rtEstimatedCompletionTime);
	return <div className={i.TimeRemaining}>{t}</div>;
}
export function hA(e) {
	const {
		indeterminate,
		nTransitionSec,
		nProgress,
		childrenContainerWidth,
		margin,
		rtEstimatedCompletionTime,
		sOperationText,
		...A
	} = e;
	const p = !sOperationText && !rtEstimatedCompletionTime ? "standard" : "none";
	const g = rtEstimatedCompletionTime != null && rtEstimatedCompletionTime > 0;
	return (
		<>
			<a.D0
				focusable
				childrenContainerWidth={childrenContainerWidth || "fixed"}
				{...A}
			>
				<div className={i.ProgressBarFieldStatus}>
					<div className={i.TextContainer}>
						{g ? (
							<U rtEstimatedCompletionTime={rtEstimatedCompletionTime} />
						) : (
							<div />
						)}
						<div className={i.OperationText}>{sOperationText}</div>
					</div>
					<Z2 margin={p} {...e} />
				</div>
			</a.D0>
		</>
	);
}
