import n from "./63696.js";
import { A as A_1 } from "./90765.js";
import a from "./14556.js";
export function z({ nPercent, indeterminate, animate, className }) {
	return (
		<div
			className={A_1(
				a.ProgressBar,
				animate && a.AnimateProgress,
				indeterminate && a.Indeterminate,
				className,
			)}
			style={{
				"--percent": nPercent / 100,
			}}
		/>
	);
}
export const A = ({ nPercent, size = 120, strokeWidth = 20 }) => {
	const s = (size - strokeWidth) / 2;
	const o = Math.PI * 2 * s;
	const l = o - (nPercent / 100) * o;
	const c = nPercent == 100;
	return (
		<div
			className={A_1({
				[a.Circular]: true,
				[a.Full]: c,
			})}
		>
			<svg
				width={size}
				height={size}
				style={{
					transform: "rotate(-90deg)",
				}}
			>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={s}
					stroke="#0c131d"
					strokeWidth={strokeWidth}
					fill="none"
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={s}
					stroke="#1a9fff"
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={o}
					strokeDashoffset={l}
					style={{
						transition: "stroke-dashoffset 0.3s ease-in-out",
					}}
				/>
			</svg>
		</div>
	);
};
