var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./42085.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require("./66186.js");
var o = require("./83571.js");
var l = require("./20189.js");
var c = l;
var m = require("./35488.js");
var u = require("./64608.js");
var d = require("./87546.js");
var A = require("./10606.js");
var p = require(/*webcrack:missing*/ "./42318.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require("./28351.js");
var C = require(/*webcrack:missing*/ "./89193.js");
var _ = require("./97838.js");
var f = require("./56060.js");
function b(e, t, r) {
	let n = new f.OK();
	n.set_section(e);
	n.set_settings_key(t);
	r(n);
	_.N.BSendMsg(40, n);
}
class y {
	m_rDisposers = [];
	Reset() {
		this.m_rDisposers.forEach((e) => e());
		this.m_rDisposers.length = 0;
	}
	RegisterBoolSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			(0, C.lB)(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_bool(t));
				}
			}),
		);
	}
	RegisterIntSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			(0, C.lB)(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_int(t));
				}
			}),
		);
	}
	RegisterFloatSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			(0, C.lB)(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_float(t));
				}
			}),
		);
	}
	RegisterStringSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			(0, C.lB)(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_string(t));
				}
			}),
		);
	}
}
var S = require("./34792.js");
function w() {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.kn, null, n.createElement(o.OV, null)),
		n.createElement(i.kn, null, n.createElement(o.gv, null)),
	);
}
function B() {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.kn, null, n.createElement(o.g9, null)),
		n.createElement(i.kn, null, n.createElement(o.TM, null)),
	);
}
function v(e) {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			i.aU,
			null,
			n.createElement(i.kn, null, n.createElement(o.jw, null)),
			n.createElement(i.kn, null, n.createElement(o.mR, null)),
			n.createElement(i.kn, null, n.createElement(o.Mq, null)),
			n.createElement(i.kn, null, n.createElement(o.Cx, null)),
			n.createElement(i.kn, null, n.createElement(o.by, null)),
			n.createElement(i.kn, null, n.createElement(o.k4, null)),
			n.createElement(i.kn, null, n.createElement(o.zl, null)),
			n.createElement(i.kn, null, n.createElement(o.bh, null)),
			n.createElement(i.kn, null, n.createElement(o.fn, null)),
			n.createElement(i.kn, null, n.createElement(o.HK, null)),
			n.createElement(i.kn, null, n.createElement(o.ZH, null)),
			n.createElement(i.kn, null, n.createElement(h.n1, null)),
			n.createElement(i.kn, null, n.createElement(h.BF, null)),
			n.createElement(i.kn, null, n.createElement(o.PK, null)),
			n.createElement(i.kn, null, n.createElement(o.mL, null)),
			n.createElement(i.kn, null, n.createElement(o.aL, null)),
			n.createElement(i.kn, null, n.createElement(o.nf, null)),
			n.createElement(i.kn, null, n.createElement(o.ph, null)),
			n.createElement(i.kn, null, n.createElement(o.CZ, null)),
			n.createElement(i.kn, null, n.createElement(o.du, null)),
			n.createElement(i.kn, null, n.createElement(o.V, null)),
			false,
			n.createElement(
				i.kn,
				null,
				n.createElement(o.DJ, {
					bottomSeparator: "none",
				}),
			),
		),
	);
}
function I(e) {
	const t = (0, d.Qc)();
	const r = (0, d.Ab)();
	let i = "?";
	let s = "?";
	if (isFinite(t.nSecondsRemaining) && t.nSecondsRemaining >= 0) {
		i = Math.floor(t.nSecondsRemaining / 60 / 60).toString();
		s = Math.floor((t.nSecondsRemaining / 60) % 60).toString();
	}
	let o = "​";
	if (r > d.Go.Low) {
		o = Localize("#QuickAccess_Tab_Perf_BatteryTimeRemaining", i, s);
	}
	let l = "";
	switch (t.eBatteryState) {
		case 1:
			l =
				r < d.Go.High
					? Localize("#QuickAccess_Tab_Perf_CalculatingBatteryLife")
					: Localize("#QuickAccess_Tab_Perf_ProjectedBatteryLife");
			break;
		case 2:
			l =
				r < d.Go.High
					? Localize("#QuickAccess_Tab_Perf_CalculatingChargingTime")
					: Localize("#QuickAccess_Tab_Perf_ProjectedChargingTime");
			break;
		default:
			return null;
	}
	return n.createElement(
		"div",
		{
			className: c.BatteryDetailsLabels,
		},
		n.createElement(
			"div",
			{
				className: c.BatteryProjectedValue,
			},
			o,
		),
		n.createElement(
			"div",
			{
				className: c.BatteryProjectedLabel,
			},
			l,
		),
	);
}
export function z5(e) {
	const { onOK: t } = e;
	const r = Localize("#QuickAccess_Tab_Perf_ConnectedSlowDetailsTitle");
	const i = Localize("#QuickAccess_Tab_Perf_ConnectedSlowDetails");
	return n.createElement(A.o0, {
		bAlertDialog: true,
		strTitle: r,
		strDescription: i,
		onOK: t,
	});
}
export function f0(e) {
	const { onOK: t } = e;
	const r = Localize("#QuickAccess_Tab_Perf_BatteryFullDetailsTitle");
	const i = Localize("#QuickAccess_Tab_Perf_BatteryFullDetails");
	return n.createElement(A.o0, {
		bAlertDialog: true,
		strTitle: r,
		strDescription: i,
		onOK: t,
	});
}
function T(e) {
	const t = (0, d.Qc)();
	const r = (0, d.FA)();
	if (!t.bHasBattery) {
		return null;
	}
	let s = Math.min(Math.round(t.flLevel * 100), 99) + "%";
	if (r) {
		s = Localize("#QuickAccess_Tab_Perf_BatteryFull");
	}
	let o = null;
	if (t.eACState == 3) {
		o = () => d.Zw.Get().ShowConnectedSlowDetails();
	} else if (r) {
		o = () => d.Zw.Get().ShowBatteryFullDetails();
	}
	return n.createElement(
		i.kn,
		null,
		n.createElement(
			u.D0,
			{
				focusable: true,
				childrenLayout: "below",
				onClick: o,
			},
			n.createElement(
				"div",
				{
					className: c.BatterySectionContainer,
				},
				n.createElement(
					"div",
					{
						className: c.BatteryIcon,
					},
					n.createElement(m.BatteryLarge, {
						acState: t.eACState,
						batteryLevel: t.flLevel,
					}),
				),
				n.createElement(
					"div",
					{
						className: c.BatteryPercentageLabel,
					},
					s,
				),
				n.createElement(I, null),
			),
		),
	);
}
function R() {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			p.tH,
			null,
			n.createElement(
				i.aU,
				null,
				n.createElement(T, null),
				n.createElement(B, null),
			),
		),
	);
}
function k() {
	const [e] = (0, s.xu)();
	const t = (0, o.H$)(e);
	(function (e) {
		const t = n.useRef(null);
		n.useEffect(() => {
			t.current = new y();
			const r = SteamClient?.OpenVR?.RegisterForVRModeChange((r) => {
				t.current.Reset();
				if (r) {
					e(t.current);
				}
			});
			return r.unregister;
		});
	})((e) => {
		e.RegisterBoolSetting(
			S.rV.clientSettings,
			"vr_show_perf_graph_in_hmd",
			"perfcheck",
			"perfGraphInHMD",
			(e) => e,
		);
	});
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			p.tH,
			null,
			n.createElement(
				i.aU,
				null,
				n.createElement(T, null),
				n.createElement(w, null),
				n.createElement(
					i.kn,
					null,
					n.createElement(o.PZ, {
						bottomSeparator: t ? "thick" : "none",
					}),
				),
				!t && n.createElement(o.qC, null),
			),
			t && n.createElement(v, null),
		),
	);
}
export function Bi() {
	if (g.TS.ON_DECK) {
		return n.createElement(k, null);
	} else {
		return n.createElement(R, null);
	}
}
