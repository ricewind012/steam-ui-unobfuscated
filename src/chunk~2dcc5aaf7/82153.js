var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./29516.js");
var a = require("./92374.js");
var s = require("./65528.js");
const o = n.createContext({});
export function p(e) {
	const { children: t } = e;
	const { selectedMarker: r } = (0, i.eJ)();
	const l = (0, i.qm)();
	const c = (0, a.aO)();
	const m = (0, n.useContext)(o);
	const u = (0, n.useCallback)(
		(e) => {
			const t = () => {
				e.stopPropagation();
				e.preventDefault();
			};
			const n = e.ctrlKey || e.metaKey;
			switch (e.key) {
				case "Delete":
					if (r?.strEntryID) {
						const { strEntryID: e, strTimelineID: n } = r;
						l();
						c.RemoveUserMarker(n, e);
						t();
					}
					break;
				case " ":
					c.TogglePlayPause();
					t();
					break;
				case "Escape":
					if (!s.y.IsItemOpen() && l) {
						l();
						t();
					}
					break;
				case "ArrowLeft":
					if (!s.y.IsItemOpen()) {
						c.SeekDeltaMS((n ? 0.1 : 15) * -1000);
						t();
					}
					break;
				case "ArrowRight":
					if (!s.y.IsItemOpen()) {
						c.SeekDeltaMS((n ? 0.1 : 15) * 1000);
						t();
					}
			}
		},
		[l, r, c],
	);
	(0, n.useEffect)(() => {
		if (!m.handles || m.handles.onKeyDown != u) {
			const e = {
				onKeyDown: u,
				onKeyUp: undefined,
			};
			m.setHandles(e);
		}
	}, [m, u]);
	return n.createElement(n.Fragment, null, t);
}
export function b(e) {
	const { children: t, className: r } = e;
	const [i, a] = (0, n.useState)(null);
	const s = (0, n.useMemo)(
		() => ({
			handles: i,
			setHandles: a,
		}),
		[i],
	);
	return n.createElement(
		"div",
		{
			tabIndex: 0,
			onKeyDown: (e) => i?.onKeyDown?.(e),
			onKeyUp: (e) => i?.onKeyUp?.(e),
			className: r,
		},
		n.createElement(
			o.Provider,
			{
				value: s,
			},
			t,
		),
	);
}
