function r(e, t) {
	return !!e && typeof e.SteamClient == "object" && t in e.SteamClient;
}
export function L(e) {
	return r(window, e);
}
export function Fj(e, t) {
	if (!e) {
		return false;
	}
	const [n, i] = t.split(".", 2);
	return n && i && r(e, n) && i in e.SteamClient[n];
}
export function Dp(e) {
	return Fj(window, e);
}
