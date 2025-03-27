import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./42085.js";
import s, { xu } from "./66186.js";
import o, { H$ } from "./83571.js";
import l from "./20189.js";
import m from "./35488.js";
import u from "./64608.js";
import d, { Qc, Ab, FA } from "./87546.js";
import A from "./10606.js";
import p from "./42318.js";
import g from "./72476.js";
import h from "./28351.js";
import { lB } from "./89193.js";
import _ from "./97838.js";
import f from "./56060.js";
import S from "./34792.js";
const c = l;
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
			lB(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_bool(t));
				}
			}),
		);
	}
	RegisterIntSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			lB(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_int(t));
				}
			}),
		);
	}
	RegisterFloatSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			lB(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_float(t));
				}
			}),
		);
	}
	RegisterStringSetting(e, t, r, n, i) {
		this.m_rDisposers.push(
			lB(e, t, (e) => {
				const t = i(e.newValue);
				if (t != i(e.oldValue)) {
					b(r, n, (e) => e.set_string(t));
				}
			}),
		);
	}
}
function W() {
	return (
		<>
			<i.kn>
				<o.OV />
			</i.kn>
			<i.kn>
				<o.gv />
			</i.kn>
		</>
	);
}
function B() {
	return (
		<>
			<i.kn>
				<o.g9 />
			</i.kn>
			<i.kn>
				<o.TM />
			</i.kn>
		</>
	);
}
function V(e) {
	return (
		<>
			<i.aU>
				<i.kn>
					<o.jw />
				</i.kn>
				<i.kn>
					<o.mR />
				</i.kn>
				<i.kn>
					<o.Mq />
				</i.kn>
				<i.kn>
					<o.Cx />
				</i.kn>
				<i.kn>
					<o.by />
				</i.kn>
				<i.kn>
					<o.k4 />
				</i.kn>
				<i.kn>
					<o.zl />
				</i.kn>
				<i.kn>
					<o.bh />
				</i.kn>
				<i.kn>
					<o.fn />
				</i.kn>
				<i.kn>
					<o.HK />
				</i.kn>
				<i.kn>
					<o.ZH />
				</i.kn>
				<i.kn>
					<h.n1 />
				</i.kn>
				<i.kn>
					<h.BF />
				</i.kn>
				<i.kn>
					<o.PK />
				</i.kn>
				<i.kn>
					<o.mL />
				</i.kn>
				<i.kn>
					<o.aL />
				</i.kn>
				<i.kn>
					<o.nf />
				</i.kn>
				<i.kn>
					<o.ph />
				</i.kn>
				<i.kn>
					<o.CZ />
				</i.kn>
				<i.kn>
					<o.du />
				</i.kn>
				<i.kn>
					<o.V />
				</i.kn>
				<i.kn>
					<o.DJ bottomSeparator="none" />
				</i.kn>
			</i.aU>
		</>
	);
}
function I(e) {
	const t = Qc();
	const r = Ab();
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
		case 1: {
			l =
				r < d.Go.High
					? Localize("#QuickAccess_Tab_Perf_CalculatingBatteryLife")
					: Localize("#QuickAccess_Tab_Perf_ProjectedBatteryLife");
			break;
		}
		case 2: {
			l =
				r < d.Go.High
					? Localize("#QuickAccess_Tab_Perf_CalculatingChargingTime")
					: Localize("#QuickAccess_Tab_Perf_ProjectedChargingTime");
			break;
		}
		default: {
			return null;
		}
	}
	return (
		<div className={c.BatteryDetailsLabels}>
			<div className={c.BatteryProjectedValue}>{o}</div>
			<div className={c.BatteryProjectedLabel}>{l}</div>
		</div>
	);
}
export function z5(e) {
	const { onOK } = e;
	const r = Localize("#QuickAccess_Tab_Perf_ConnectedSlowDetailsTitle");
	const i = Localize("#QuickAccess_Tab_Perf_ConnectedSlowDetails");
	return <A.o0 bAlertDialog strTitle={r} strDescription={i} onOK={onOK} />;
}
export function f0(e) {
	const { onOK } = e;
	const r = Localize("#QuickAccess_Tab_Perf_BatteryFullDetailsTitle");
	const i = Localize("#QuickAccess_Tab_Perf_BatteryFullDetails");
	return <A.o0 bAlertDialog strTitle={r} strDescription={i} onOK={onOK} />;
}
function T(e) {
	const t = Qc();
	const r = FA();
	if (!t.bHasBattery) {
		return null;
	}
	let s = `${Math.min(Math.round(t.flLevel * 100), 99)}%`;
	if (r) {
		s = Localize("#QuickAccess_Tab_Perf_BatteryFull");
	}
	let o = null;
	if (t.eACState == 3) {
		o = () => d.Zw.Get().ShowConnectedSlowDetails();
	} else if (r) {
		o = () => d.Zw.Get().ShowBatteryFullDetails();
	}
	return (
		<i.kn>
			<u.D0 focusable childrenLayout="below" onClick={o}>
				<div className={c.BatterySectionContainer}>
					<div className={c.BatteryIcon}>
						<m.BatteryLarge acState={t.eACState} batteryLevel={t.flLevel} />
					</div>
					<div className={c.BatteryPercentageLabel}>{s}</div>
					<I />
				</div>
			</u.D0>
		</i.kn>
	);
}
function R() {
	return (
		<>
			<p.tH>
				<i.aU>
					<T />
					<B />
				</i.aU>
			</p.tH>
		</>
	);
}
function K() {
	const [e] = xu();
	const t = H$(e);
	((e) => {
		const TRef = n.useRef(null);
		n.useEffect(() => {
			TRef.current = new y();
			const r = SteamClient?.OpenVR?.RegisterForVRModeChange((r) => {
				TRef.current.Reset();
				if (r) {
					e(TRef.current);
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
	return (
		<>
			<p.tH>
				<i.aU>
					<T />
					<W />
					<i.kn>
						<o.PZ bottomSeparator={t ? "thick" : "none"} />
					</i.kn>
					{!t && <o.qC />}
				</i.aU>
				{t && <V />}
			</p.tH>
		</>
	);
}
export function Bi() {
	if (g.TS.ON_DECK) {
		return <K />;
	} else {
		return <R />;
	}
}
