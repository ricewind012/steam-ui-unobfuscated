import { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./52451.js";
import { I } from "./61416.js";
import o from "./75144.js";
import l from "./56365.js";
import { l5 } from "./96555.js";
const m = "GamescopeService";
const u = "State";
function d() {
	return [m, u];
}
class A {
	async Init() {
		l.MX.RegisterForNotifyStateChanged(this.OnStateChanged);
	}
	OnStateChanged(e) {
		o.L.invalidateQueries({
			queryKey: d(),
		});
		return 1;
	}
	m_nBlurRefCount = 0;
	SetBlurEnabled(e) {
		this.m_nBlurRefCount += e ? 1 : -1;
		this.ApplyBlurState();
	}
	m_bForceSuppressBlur = false;
	SetForceSuppressBlur(e) {
		this.m_bForceSuppressBlur = e;
		this.ApplyBlurState();
	}
	ApplyBlurState() {
		if (this.m_nBlurRefCount > 0 && !this.m_bForceSuppressBlur) {
			l.MX.SetBlurParams({
				mode: 1,
				radius: 32,
				fade_duration_ms: 300,
			});
		} else {
			l.MX.SetBlurParams({
				mode: 0,
			});
		}
	}
}
export function ZN(e) {
	const t = i.useCallback(async () => {
		const e = await l.MX.GetState({});
		if (!e.BSuccess()) {
			throw new Error("Failed to fetch gamescope state");
		}
		return e.Body().toObject().state;
	}, []);
	return I({
		queryKey: d(),
		queryFn: t,
		select: e,
	});
}
export function J9() {
	const e = ZN((e) => e.is_hdr_visualization_supported);
	return e.isSuccess && e.data;
}
export function wy() {
	const e = ZN((e) => e.is_reshade_supported);
	return e.isSuccess && e.data;
}
export function V3() {
	const e = ZN((e) => e.is_global_action_binding_supported);
	return e.isSuccess && e.data;
}
export function rO(e) {
	i.useEffect(() => {
		const t = e ?? true;
		if (t) {
			YS.SetBlurEnabled(true);
		}
		return () => {
			if (t) {
				YS.SetBlurEnabled(false);
			}
		};
	}, [e]);
	const t = l5();
	i.useEffect(() => {
		YS.SetForceSuppressBlur(t);
	}, [t]);
}
export function _9() {
	const e = ZN((e) => e.is_app_hdr_enabled);
	return e.isSuccess && e.data;
}
export function t7() {
	const e = ZN((e) => e.is_app_refresh_rate_supported);
	return e.isSuccess && e.data;
}
export function HR() {
	const e = Zv();
	const t = ZN((e) => e.is_refresh_rate_switching_supported);
	return t.isSuccess && t.data && !e;
}
export function Y$() {
	const e = Zv();
	const t = ZN((e) => e.is_refresh_rate_switching_restricted);
	return t.isSuccess && t.data && !e;
}
export function js() {
	const e = ZN((e) => e.is_mura_correction_supported);
	return e.isSuccess && e.data;
}
export function Zv() {
	const e = ZN((e) => e.active_display_info?.is_external ?? false);
	return e.isSuccess && e.data;
}
export function M_() {
	const e = ZN((e) => e.active_display_info?.is_hdr_capable ?? false);
	return e.isSuccess && e.data;
}
export function KK() {
	const e = ZN((e) => {
		const t = e?.active_display_info?.supported_frame_rates;
		if (t && t.length > 0) {
			return t;
		}
		return Array.from(
			{
				length: 51,
			},
			(e, t) => t + 10,
		);
	});
	return e.isSuccess && e.data;
}
export function OV() {
	const e = ZN((e) => {
		const t = e?.active_display_info?.supported_refresh_rates;
		if (t == null || t.length <= 0) {
			return null;
		} else {
			return t;
		}
	});
	return e.isSuccess && e.data;
}
Cg([a.oI], A.prototype, "OnStateChanged", null);
export const YS = new A();
