import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { pg } from "./13869.js";
import a, { LC } from "./46422.js";
import s from "./96921.js";
import c from "./35488.js";
import m from "./85360.js";
import { uN, CH } from "./52451.js";
import d from "./53225.js";
import { q3 } from "./90095.js";
import p, { FD } from "./85399.js";
import g, { tk } from "./22091.js";
const o = s;
function H(e) {
	LC(false);
	const t = tk();
	const [r, i] = uN(t, null, 500);
	const s = ((e, t) => {
		const RRef = n.useRef(new Map());
		if (!RRef.current.has(e)) {
			RRef.current.set(e, new Map());
		}
		const i = CH();
		const a = RRef.current.get(e);
		for (const r of t) {
			if (!a.has(r)) {
				a.set(r, undefined);
				m.v3.GetActiveConfigForApp(e, r).then((e) => {
					a.set(r, e);
					i();
				});
			}
		}
		const s = {};
		for (const e of t) {
			s[e] = a.get(e);
		}
		return s;
	})(
		q3(() => (a.oy.RunningApps.length > 0 ? a.oy.RunningApps[0].appid : 0)),
		r.map((e) => e.nControllerIndex),
	);
	const p = r
		.sort((e, t) =>
			e.nXInputIndex < t.nXInputIndex
				? -1
				: e.nXInputIndex > t.nXInputIndex
					? 1
					: e.nControllerIndex - t.nControllerIndex,
		)
		.map((e) => {
			const t = s[e.nControllerIndex];
			const r = !t || t?.bConfigurationEnabled;
			const i = e.nXInputIndex == 255;
			return {
				key: e.nControllerIndex.toString(),
				label: (
					<div className={o.ControllerLabel}>
						{Localize(e.strName)}
						{!r && (
							<div className={o.OptedOut}>
								{Localize("#QuickAccess_ReorderControllers_OptedOut")}
							</div>
						)}
					</div>
				),
				icon: <c.ControllerType controllerType={e.eControllerType} />,
				index: e.nXInputIndex,
				disabled: i,
				displayedIndex: i ? "!" : e.nXInputIndex + 1,
				onOptionsButton: () =>
					SteamClient.Input.IdentifyController(e.nControllerIndex),
				onOptionsActionDescription: Localize(
					"#QuickAccess_ReorderControllers_Identify",
				),
			};
		});
	return (
		<d.o
			title={Localize("#QuickAccess_ReorderControllers_ControllerOrder")}
			items={p}
			onMoveRelative={(e, t) => {
				const n = e + t;
				const a = g.F0 - 1;
				return (
					!(n < 0) &&
					(!(n > a) || !(e <= a)) &&
					(SteamClient.Input.SwapControllerOrder(e, n),
					i(
						((e, t, r) => {
							const n = e.map((e) => ({
								...e,
							}));
							const i = n.find((e) => e.nXInputIndex == t);
							const a = n.find((e) => e.nXInputIndex == r);
							if (i && a) {
								const i_nXInputIndex = i.nXInputIndex;
								i.nXInputIndex = a.nXInputIndex;
								a.nXInputIndex = i_nXInputIndex;
							} else if (i) {
								i.nXInputIndex = r;
							}
							return n;
						})(r, e, n),
					),
					true)
				);
			}}
			onReorderActionDescription={Localize(
				"#QuickAccess_ReorderControllers_Reorder",
			)}
			onStopReorderActionDescription={Localize(
				"#QuickAccess_ReorderControllers_StopReorder",
			)}
			closeModal={e.closeModal}
		/>
	);
}
export function b(e) {
	pg(<H />, e.ownerWindow ?? window);
}
export function Z() {
	return q3(() => {
		if (!a.oy.MainRunningApp || FD()) {
			return false;
		}
		const e = g.Fd.Get().GetControllers();
		return (
			e.length > 1 ||
			(e.length == 1 && e[0].nXInputIndex != 0 && e[0].nXInputIndex != 255)
		);
	});
}
