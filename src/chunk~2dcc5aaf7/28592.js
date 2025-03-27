import n from "./63696.js";
import { $2 } from "./96680.js";
import a from "./91190.js";
const S = n.lazy(() => require.e(7462).then(require.bind(require, 32676)));
export function xj(e) {
	let t = $2();
	return n.useCallback(() => {
		if (e) {
			t.BrowserWindow.location.href = e;
		}
	}, [t, e]);
}
export function MN(e) {
	const { fnDismiss, ...r } = e;
	return (
		<M>
			<S {...r} />
		</M>
	);
}
export function YW(e) {
	const { fnDismiss, ...r } = e;
	return (
		<M>
			<div className={a.OverlayContainer}>
				<S {...r} />
			</div>
		</M>
	);
}
function M(e) {
	return <div className={a.SpacingContainer}>{e.children}</div>;
}
