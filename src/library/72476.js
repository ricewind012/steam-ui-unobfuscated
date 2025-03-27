import r from "./63696.js";
import i from "./28987.js";
import s, { w } from "./49455.js";
import o from "./43691.js";
import { OO } from "./67784.js";
import c from "./9731.js";
export let iA = o.iA;
export let bf = c.bf;
export let UF = o.UF;
export let Tc = c.Tc;
export let TS = o.TS;
export let GP = o.GP;
export let Fd = c.Fd;
export let Bu = c.Bu;
export const QOContext = r.createContext({});
export const rP = (e) => {
	const t = r.useContext(QOContext);
	w(
		e?.bSuppressAssert || t.IN_GAMEPADUI !== undefined,
		"Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.",
	);
	return t;
};
export function ss(e) {
	const { IN_GAMEPADUI, IN_DESKTOPUI, IN_VR, children } = e;
	const c = rP({
		bSuppressAssert: true,
	});
	const m = OO()?.startsWith("Gamepad VR");
	const d = r.useMemo(
		() => ({
			IN_GAMEPADUI: IN_GAMEPADUI ?? c?.IN_GAMEPADUI ?? o.TS.IN_GAMEPADUI,
			IN_DESKTOPUI: IN_DESKTOPUI ?? c?.IN_DESKTOPUI ?? false,
			IN_VR: IN_VR ?? c?.IN_VR ?? m,
		}),
		[c, IN_GAMEPADUI, IN_DESKTOPUI, IN_VR, m],
	);
	return <QOContext.Provider value={d}>{children}</QOContext.Provider>;
}
export function Qn(e) {
	const t = rP(e);
	return t?.IN_GAMEPADUI;
}
export function hf(e) {
	const t = rP(e);
	return t?.IN_DESKTOPUI;
}
export function Xk(e) {
	const t = rP(e);
	return t?.IN_VR;
}
export function XW(e) {
	if (Qn(e)) {
		return 4;
	} else {
		return 7;
	}
}
export function uI() {
	return o.TS.ON_DECK;
}
export function TL() {
	return o.TS.ON_DECK;
}
export function Y2() {
	return o.TS.EREALM === i.TU.k_ESteamRealmChina;
}
export function Ab(e) {
	return ["steamchina:", "steamchinabeta:", "steam:", "steambeta:"].includes(e);
}
export function td() {
	return o.TS.PLATFORM == "windows";
}
export function Pr() {
	return o.TS.PLATFORM == "macos";
}
export function CI() {
	return o.TS.PLATFORM == "linux";
}
export function Hn() {
	return o.TS.IN_CHROMEOS;
}
export function IW(e) {
	return e?.IN_GAMEPADUI;
}
export function rf() {
	return o.TS.ON_STEAMOS;
}
export function On(e, t) {
	return t.length != 0 && e.startsWith(t);
}
export const NQ = "unknown";
export function xv() {
	if (
		!window ||
		!window.location ||
		!window.location ||
		!window.location.href
	) {
		console.warn("Unable to determine base url!");
		return NQ;
	}
	const e = window.location.href;
	if (On(e, o.TS.STORE_BASE_URL)) {
		return o.TS.STORE_BASE_URL;
	} else if (On(e, o.TS.COMMUNITY_BASE_URL)) {
		return o.TS.COMMUNITY_BASE_URL;
	} else if (On(e, o.TS.CHAT_BASE_URL)) {
		return o.TS.CHAT_BASE_URL;
	} else if (On(e, o.TS.PARTNER_BASE_URL)) {
		return o.TS.PARTNER_BASE_URL;
	} else if (On(e, o.TS.HELP_BASE_URL)) {
		return o.TS.HELP_BASE_URL;
	} else if (On(e, o.TS.STEAMTV_BASE_URL)) {
		return o.TS.STEAMTV_BASE_URL;
	} else if (On(e, o.TS.STATS_BASE_URL)) {
		return o.TS.STATS_BASE_URL;
	} else if (On(e, o.TS.INTERNAL_STATS_BASE_URL)) {
		return o.TS.INTERNAL_STATS_BASE_URL;
	} else if (On(e, o.TS.STORE_CHECKOUT_BASE_URL)) {
		return o.TS.STORE_CHECKOUT_BASE_URL;
	} else if (On(e, "https://steamloopback.host")) {
		return "https://steamloopback.host";
	} else {
		return "";
	}
}
export function yK() {
	const e = window.location.href;
	if (On(e, o.TS.STORE_BASE_URL) || On(e, o.TS.STORE_CHECKOUT_BASE_URL)) {
		return "store";
	} else if (On(e, o.TS.COMMUNITY_BASE_URL)) {
		return "community";
	} else if (On(e, o.TS.PARTNER_BASE_URL)) {
		return "partnerweb";
	} else if (On(e, o.TS.HELP_BASE_URL)) {
		return "help";
	} else if (On(e, o.TS.STEAMTV_BASE_URL)) {
		return "steamtv";
	} else if (
		On(e, o.TS.STATS_BASE_URL) ||
		On(e, o.TS.INTERNAL_STATS_BASE_URL)
	) {
		return "stats";
	} else {
		return "";
	}
}
