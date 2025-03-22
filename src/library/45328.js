var r = require("./92059.js");
var i = require("./49810.js");
var s = require("./49455.js");
var o = require("./53807.js");
var a = require("./43691.js");
var c = require(/*webcrack:missing*/ "./63696.js");
export function k2(e, t = "", n = null) {
	return Ay.InstrumentLink(e, t, n);
}
export function OZ(e, t, n) {
	const i = (0, r.n9)();
	return c.useMemo(() => {
		const s = (0, o.wm)(e).toLowerCase();
		const c = (0, o.wm)(a.TS.COMMUNITY_BASE_URL).toLowerCase();
		const l = (0, o.wm)(a.TS.STORE_BASE_URL).toLowerCase();
		if (s === c || s === l) {
			return (0, r.bV)(i, e, t, n);
		} else {
			return e;
		}
	}, [i, e, t, n]);
}
export function wJ(e, t, n = null) {
	const r = L3(t, n);
	return i.A.AddNavParamToURL(e, r);
}
export function L3(e, t = null) {
	if (e?.domain) {
		return Ay.GetLinkParam(e, t);
	} else {
		return a.TS.SNR;
	}
}
export function Dn(e, t = "", n = null) {
	return k2(`${a.TS.STORE_BASE_URL}app/${e}`, t, n);
}
export function f2(e, t = "") {
	return k2(`${a.TS.STORE_BASE_URL}dlc/${e}`, t);
}
export class Ay {
	static sm_strDomain;
	static sm_strController;
	static sm_strMethod;
	static sm_strSubmethod;
	static sm_strComputedLinkPrefix;
	static SetNavEventParams(e, t, n = null, r = null) {
		Ay.sm_strDomain = e;
		Ay.sm_strController = t;
		Ay.sm_strMethod = n;
		Ay.sm_strSubmethod = r;
		Ay.sm_strComputedLinkPrefix = null;
	}
	static GetDefaultParams() {
		let e = {
			domain: Ay.sm_strDomain,
			controller: Ay.sm_strController,
		};
		if (Ay.sm_strMethod) {
			e.method = Ay.sm_strMethod;
		}
		if (Ay.sm_strSubmethod) {
			e.submethod = Ay.sm_strSubmethod;
		}
		return e;
	}
	static InstrumentLink(e, t, n = null) {
		const r = Ay.GetLinkParam(t, n);
		return i.A.AddNavParamToURL(e, r);
	}
	static GetLinkParam(e, t = null) {
		let n;
		let r;
		if (typeof e != "string") {
			if (e.domain) {
				return i.A.GetLinkParam(e, t);
			}
			n = e.feature || "";
		}
		if (!Ay.sm_strComputedLinkPrefix && !Ay.ComputeStaticLinkPrefix()) {
			return null;
		}
		r = Ay.sm_strComputedLinkPrefix;
		let s = i.A.EncodeEventComponent(n);
		if (s) {
			r += "_" + s;
			if (t) {
				r += "_" + t;
			}
		}
		return r;
	}
	static ComputeStaticLinkPrefix() {
		if (Ay.sm_strDomain) {
			Ay.sm_strComputedLinkPrefix = i.A.ComputeLinkPrefix(
				Ay.sm_strDomain,
				Ay.sm_strController,
				Ay.sm_strMethod,
				Ay.sm_strSubmethod,
			);
			return true;
		} else {
			(0, s.w)(
				false,
				"CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
			);
			return false;
		}
	}
}
