var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./13869.js");
var a = require("./46422.js");
var s = require("./96921.js");
var o = s;
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./35488.js");
var m = require("./85360.js");
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require("./53225.js");
var A = require(/*webcrack:missing*/ "./90095.js");
var p = require("./85399.js");
var g = require("./22091.js");
function h(e) {
	(0, a.LC)(false);
	const t = (0, g.tk)();
	const [r, i] = (0, u.uN)(t, null, 500);
	const s = (function (e, t) {
		const r = n.useRef(new Map());
		if (!r.current.has(e)) {
			r.current.set(e, new Map());
		}
		const i = (0, u.CH)();
		const a = r.current.get(e);
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
		(0, A.q3)(() =>
			a.oy.RunningApps.length > 0 ? a.oy.RunningApps[0].appid : 0,
		),
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
				label: n.createElement(
					"div",
					{
						className: o.ControllerLabel,
					},
					Localize(e.strName),
					!r &&
						n.createElement(
							"div",
							{
								className: o.OptedOut,
							},
							Localize("#QuickAccess_ReorderControllers_OptedOut"),
						),
				),
				icon: n.createElement(c.ControllerType, {
					controllerType: e.eControllerType,
				}),
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
	return n.createElement(d.o, {
		title: Localize("#QuickAccess_ReorderControllers_ControllerOrder"),
		items: p,
		onMoveRelative: (e, t) => {
			const n = e + t;
			const a = g.F0 - 1;
			return (
				!(n < 0) &&
				(!(n > a) || !(e <= a)) &&
				(SteamClient.Input.SwapControllerOrder(e, n),
				i(
					(function (e, t, r) {
						const n = e.map((e) => ({
							...e,
						}));
						const i = n.find((e) => e.nXInputIndex == t);
						const a = n.find((e) => e.nXInputIndex == r);
						if (i && a) {
							const e = i.nXInputIndex;
							i.nXInputIndex = a.nXInputIndex;
							a.nXInputIndex = e;
						} else if (i) {
							i.nXInputIndex = r;
						}
						return n;
					})(r, e, n),
				),
				true)
			);
		},
		onReorderActionDescription: Localize(
			"#QuickAccess_ReorderControllers_Reorder",
		),
		onStopReorderActionDescription: Localize(
			"#QuickAccess_ReorderControllers_StopReorder",
		),
		closeModal: e.closeModal,
	});
}
export function b(e) {
	(0, i.pg)(n.createElement(h, null), e.ownerWindow ?? window);
}
export function Z() {
	return (0, A.q3)(() => {
		if (!a.oy.MainRunningApp || (0, p.FD)()) {
			return false;
		}
		const e = g.Fd.Get().GetControllers();
		return (
			e.length > 1 ||
			(e.length == 1 && e[0].nXInputIndex != 0 && e[0].nXInputIndex != 255)
		);
	});
}
