var n = require(/*webcrack:missing*/ "./49519.js");
var i = require(/*webcrack:missing*/ "./93861.js");
function a(e, t) {
	if (e.state) {
		if (typeof e.state != "object") {
			console.error(
				`Cannot merge route state into non-bject type route state. Type "${typeof e.state}" for path "${e.pathname}"`,
			);
			return e;
		} else {
			return {
				...e,
				state: {
					...e.state,
					...t,
				},
			};
		}
	} else {
		return {
			...e,
			state: t,
		};
	}
}
export function tf(e, t, r, n, s) {
	if (!t && !n) {
		return e;
	}
	return (function (e, t) {
		if (!t) {
			return e;
		}
		switch (typeof e) {
			case "function":
				return (e) => a(e, t);
			case "string":
				return {
					...(0, i.Rr)(e),
					state: t,
				};
			case "object":
				return a(e, t);
			default:
				console.error(`Unable to process link config of type ${e}.`);
				return e;
		}
	})(e, KV(t, r, n, s));
}
export function KV(e, t, r, n) {
	if (e || r) {
		return {
			event_to_show: {
				appid: e,
				eventid: t,
				clanSteamID: r,
				additionalParams: n,
			},
		};
	} else {
		return {};
	}
}
export function VT() {
	const { state: e } = (0, n.zy)();
	if (e && e.event_to_show) {
		return e.event_to_show;
	} else {
		return null;
	}
}
export function Qx() {
	const e = (0, n.zy)();
	const t = (0, n.W6)();
	const r = {
		...(e.state || {}),
	};
	delete r.event_to_show;
	return () => t.replace((0, i.AO)(e), r);
}
export function R_() {
	const { appid: e } = (0, n.g)();
	const t = (0, n.zy)();
	if (!e || isNaN(parseInt(e))) {
		console.error(
			`Could not parse appid from current route params. Got appid: "${e}", path: "${t?.pathname}"`,
		);
		return NaN;
	} else {
		return parseInt(e);
	}
}
export function AX() {
	const { controllerIdx: e } = (0, n.g)();
	const t = (0, n.zy)();
	if (e && !isNaN(parseInt(e))) {
		return parseInt(e);
	}
	console.error(
		`Could not parse controller idx from current route params. Got idx: "${e}", path: "${t?.pathname}"`,
	);
}
