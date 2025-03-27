import n from "./63696.js";
import { A } from "./90765.js";
import a from "./33788.js";
import s from "./39940.js";
import { q } from "./29285.js";
import { LC } from "./46422.js";
export const j = (e) => {
	const { size: t = "medium", background: r } = e;
	const c = e.showFooter ?? false;
	const m = !q();
	LC(!c);
	let u = t == "small" ? a.Small : a.Medium;
	const { className: d, children: A } = e;
	return (
		<div
			className={A(
				d,
				a.Container,
				r !== "transparent" && a.ContainerBackground,
				false,
			)}
		>
			<div className={a.SpinnerLoaderContainer}>
				{!e.doneLoading && m && (
					<img alt="Steam Spinner" className={u} src={s.A} />
				)}
				<div className={a.LoadingStatus}>{A}</div>
			</div>
		</div>
	);
};
