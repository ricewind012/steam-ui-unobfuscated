var n = require(/*webcrack:missing*/ "./63696.js");
import { Localize } from "../../actual_src/utils/localization.js";
var a = require(/*webcrack:missing*/ "./43691.js");
var s = require("./96555.js");
var o = require("./13869.js");
var l = require("./10606.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require(/*webcrack:missing*/ "./31958.js");
import { _f } from "../../actual_src/utils/domutils.js";
var d = require("./13897.js");
var A = require("./2306.js");
var p = require("./75961.js");
function g(e) {
	const { displayId: t, previousModeId: r, closeModal: a } = e;
	const o = n.useCallback(() => {
		s.fQ.Get().SetMode(t, r);
	}, [t, r]);
	const u = n.useCallback(() => {
		o();
		if (a) {
			a();
		}
	}, [o, a]);
	const { fnStopTimer: d } = (0, c.L$)(15000, u);
	const [A, p] = n.useState(15);
	(0, c.$$)(() => {
		p(A - 1);
	}, 1000);
	const g = n.useCallback(() => {
		d();
		o();
	}, [d, o]);
	const h = n.useCallback(() => {
		d();
	}, [d]);
	return n.createElement(l.o0, {
		strTitle: Localize("#Settings_Display_Resolution_ConfirmChange_Title"),
		strDescription: Localize(
			"#Settings_Display_Resolution_ConfirmChange_Body",
			(0, m.OQ)(A, 0, 15),
		),
		strOKButtonText: Localize(
			"#Settings_Display_Resolution_ConfirmChange_Revert",
		),
		onOK: g,
		strCancelButtonText: Localize(
			"#Settings_Display_Resolution_ConfirmChange_Accept",
		),
		onCancel: h,
		closeModal: a,
	});
}
export function cP(e) {
	const t = (0, s.H3)();
	const r = (0, s.Ck)();
	const a = n.useMemo(() => r.data?.modes ?? [], [r]);
	const o = r.data?.has_mode_override === undefined;
	const l = r.data?.has_mode_override === false;
	const m = Localize("#Settings_Display_Resolution_Auto_Resolution");
	let d = e.bottomSeparator;
	if (d == "auto") {
		d = l ? "standard" : "none";
	}
	const p = (0, c.QS)((e) => {
		if (!e) {
			return;
		}
		const t = (0, c.Fd)(e.ownerDocument.body, () => {
			const t = (0, _f)(e);
			if (t) {
				t.scrollTop = 0;
			}
		});
		return () => t.disconnect();
	}, []);
	if (r.data) {
		if (t.data !== true) {
			return null;
		} else {
			return n.createElement(
				n.Fragment,
				null,
				n.createElement(A.C, {
					feature: 7,
					disabled: o,
					label: m,
					checked: l,
					onChange: async (e) => {
						await s.fQ.Get().SetMode(r.data?.id, a[0].id);
						if (e) {
							s.fQ.Get().ClearModeOverride(r.data?.id);
						}
					},
					bottomSeparator: d,
				}),
				n.createElement("div", {
					ref: p,
					style: {
						visibility: "hidden",
					},
				}),
			);
		}
	} else {
		return null;
	}
}
export function KX() {
	const e = (0, s.H3)();
	const t = (0, s.Ck)();
	const r = n.useMemo(() => t.data?.modes ?? [], [t]);
	const a = r.find((e) => e.id === t.data.current_mode_id);
	const l = n.useMemo(
		() => [
			...r.map((e) => ({
				data: e,
				label: `${e.width}x${e.height}@${e.refresh_hz}`,
			})),
		],
		[r],
	);
	const c = n.useCallback(
		async (e) => {
			const r = a?.id;
			await s.fQ.Get().SetMode(t?.data?.id, e?.data?.id);
			(0, o.pg)(
				n.createElement(g, {
					displayId: t?.data?.id,
					previousModeId: r,
				}),
				window,
			);
		},
		[t, a],
	);
	if (t.data) {
		if (e.data !== true) {
			return null;
		} else if (t.data.has_mode_override) {
			return n.createElement(d.B, {
				feature: 7,
				label: Localize("#Settings_Display_Resolution"),
				rgOptions: l,
				selectedOption: a,
				onChange: c,
			});
		} else {
			return null;
		}
	} else {
		return null;
	}
}
export function E4(e, t) {
	const r = (0, s.l5)();
	const i = (0, s.Ck)();
	const a = (0, s.go)();
	n.useEffect(() => {
		if (
			r &&
			i.data?.has_mode_override === false &&
			i.data?.description &&
			a.data?.width &&
			a.data?.height
		) {
			const [r, n] = [a.data.width, a.data.height];
			if (r * n > e * Math.max(t, e / 1.6)) {
				SteamClient.System.DisplayManager?.SetGamescopeInternalResolution(
					e,
					r / n == 1.6 ? e / 1.6 : t,
				);
			}
		}
	}, [r, i.data?.has_mode_override, i.data?.description, a, e, t]);
}
export function XT(e) {
	const t = (0, s.xY)();
	if ((0, s.hb)() && t.isSuccess && t.data.bAvailble) {
		return n.createElement(A.C, {
			feature: 7,
			label: Localize("#Settings_Display_CompatibilityMode_Label"),
			description: Localize("#Settings_Display_CompatibilityMode_Description"),
			checked: t.data.eCompatibilityMode == 2,
			onChange: (e) => t.data.fnSet(e ? 2 : 1),
		});
	} else {
		return null;
	}
}
export function lt(e) {
	const t = (0, s.EH)();
	if (a.TS.ON_DECK && a.TS.IN_GAMESCOPE) {
		return n.createElement(p.X, {
			label: Localize("#Settings_Display_GameResolution"),
			explainer: Localize("#Settings_Display_GameResolution_Explainer"),
			rgOptions: t,
			setting: "gamescope_game_resolution_global",
		});
	} else {
		return null;
	}
}
