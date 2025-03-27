import n, {
	useContext,
	useCallback,
	useEffect,
	useState,
	useMemo,
} from "./63696.js";
import i, { eJ, qm } from "./29516.js";
import a, { aO } from "./92374.js";
import s from "./65528.js";
const OContext = n.createContext({});
export function p(e) {
	const { children } = e;
	const { selectedMarker } = eJ();
	const l = qm();
	const c = aO();
	const m = useContext(OContext);
	const u = useCallback(
		(e) => {
			const t = () => {
				e.stopPropagation();
				e.preventDefault();
			};
			const n = e.ctrlKey || e.metaKey;
			switch (e.key) {
				case "Delete": {
					if (selectedMarker?.strEntryID) {
						const { strEntryID, strTimelineID } = selectedMarker;
						l();
						c.RemoveUserMarker(strTimelineID, strEntryID);
						t();
					}
					break;
				}
				case " ": {
					c.TogglePlayPause();
					t();
					break;
				}
				case "Escape": {
					if (!s.y.IsItemOpen() && l) {
						l();
						t();
					}
					break;
				}
				case "ArrowLeft": {
					if (!s.y.IsItemOpen()) {
						c.SeekDeltaMS((n ? 0.1 : 15) * -1000);
						t();
					}
					break;
				}
				case "ArrowRight": {
					if (!s.y.IsItemOpen()) {
						c.SeekDeltaMS((n ? 0.1 : 15) * 1000);
						t();
					}
				}
			}
		},
		[l, selectedMarker, c],
	);
	useEffect(() => {
		if (!m.handles || m.handles.onKeyDown != u) {
			const e = {
				onKeyDown: u,
				onKeyUp: undefined,
			};
			m.setHandles(e);
		}
	}, [m, u]);
	return <>{children}</>;
}
export function b(e) {
	const { children, className } = e;
	const [i, a] = useState(null);
	const s = useMemo(
		() => ({
			handles: i,
			setHandles: a,
		}),
		[i],
	);
	return (
		<div
			tabIndex={0}
			onKeyDown={(e) => i?.onKeyDown?.(e)}
			onKeyUp={(e) => i?.onKeyUp?.(e)}
			className={className}
		>
			<OContext.Provider value={s}>{children}</OContext.Provider>
		</div>
	);
}
