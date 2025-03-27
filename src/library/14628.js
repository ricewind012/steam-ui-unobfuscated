import r from "./43691.js";
export function YJ(e) {
	return e;
}
export const TS = window.Config ?? r.TS;
export const iA = window.UserConfig ?? r.iA;
if (window.Config) {
	Object.assign(r.TS, window.Config);
}
if (window.UserConfig) {
	Object.assign(r.iA, window.UserConfig);
}
