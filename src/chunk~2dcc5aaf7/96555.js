var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./51297.js");
var l = require(/*webcrack:missing*/ "./61416.js");
var c = require(/*webcrack:missing*/ "./75144.js");
var m = require("./34792.js");
var u = require(/*webcrack:missing*/ "./72476.js");
const d = "CSystemDisplayManagerStore";
const A = "State";
function p() {
	return [d, A];
}
export class fQ {
	static s_Singleton = null;
	static Get() {
		if (fQ.s_Singleton == null) {
			fQ.s_Singleton = new fQ();
			window.SystemDisplayManagerStore = fQ.s_Singleton;
		}
		return fQ.s_Singleton;
	}
	constructor() {
		if (SteamClient?.System?.DisplayManager) {
			SteamClient.System.DisplayManager.RegisterForStateChanges(
				this.OnStateChanged,
			);
		}
	}
	OnStateChanged() {
		c.L.invalidateQueries({
			queryKey: p(),
		});
	}
	async GetState() {
		if (SteamClient?.System?.DisplayManager?.GetState == null) {
			return null;
		}
		const e = await SteamClient?.System?.DisplayManager?.GetState();
		if (e?.result != 1 || e.reply == null) {
			throw new Error("Failed to fetch display manager state");
		}
		return o.EX.deserializeBinary(e.reply).toObject();
	}
	async SetMode(e, t) {
		let r = new o.YW();
		r.set_display_id(e);
		r.set_mode_id(t);
		return SteamClient.System.DisplayManager.SetMode(r.serializeBase64String());
	}
	async ClearModeOverride(e) {
		return SteamClient.System.DisplayManager.ClearModeOverride(e);
	}
	async SetCompatibilityMode(e) {
		return SteamClient.System.DisplayManager.SetCompatibilityMode(e);
	}
}
function h(e) {
	return (0, l.I)({
		queryKey: p(),
		queryFn: () => fQ.Get().GetState(),
		select: e,
	});
}
export function hH(e) {
	let t = e?.displays?.find((e) => e.is_primary === true);
	t ||= e?.displays?.find((e) => e.is_enabled === true);
	return t;
}
export function Ck() {
	return h(i.useCallback((e) => hH(e), []));
}
export function H3() {
	return h(i.useCallback((e) => e?.is_mode_switching_supported, []));
}
export function l5() {
	const e = h();
	const t = Ck();
	const r = t?.data?.is_internal;
	const n = (0, a.q3)(() => m.rV.settings?.bDisplayIsExternal);
	if (r == null || e?.data?.is_mode_switching_supported != 1) {
		return n;
	} else {
		return !r;
	}
}
export function go() {
	return h(
		i.useCallback((e) => {
			const t = hH(e);
			return t?.modes?.find((e) => e.id === t.current_mode_id);
		}, []),
	);
}
export function xY() {
	return h(
		i.useCallback(
			(e) => ({
				bAvailble: e?.is_mode_switching_supported,
				eCompatibilityMode: e?.compatibility_mode,
				fnSet: fQ.Get().SetCompatibilityMode,
			}),
			[],
		),
	);
}
export function jH() {
	const e = h(
		i.useCallback((e) => {
			const t = hH(e);
			return t?.supported_refresh_rates;
		}, []),
	);
	if (e.isSuccess) {
		return e.data;
	} else {
		return null;
	}
}
export function hb() {
	return u.TS.IN_GAMESCOPE;
}
export function EH() {
	return [
		"Default",
		"Native",
		"3840x2160",
		"2560x1600",
		"2560x1440",
		"2040x1080",
		"1920x1200",
		"1920x1080",
		"1600x1000",
		"1600x900",
		"1280x800",
		"1280x720",
		"1024x768",
		"1024x640",
		"800x600",
		"800x500",
		"640x480",
		"640x400",
	].map((e) => ({
		data: e,
		label: e,
	}));
}
(0, n.Cg)([s.oI], fQ.prototype, "OnStateChanged", null);
(0, n.Cg)([s.oI], fQ.prototype, "SetCompatibilityMode", null);
