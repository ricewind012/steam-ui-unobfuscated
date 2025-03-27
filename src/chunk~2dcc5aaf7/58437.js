import n, { zy, W6, g } from "./49519.js";
import { Rr, AO } from "./93861.js";
function a(e, t) {
	if (e.state) {
		if (typeof e.state != "object") {
			console.error(
				`Cannot merge route state into non-bject type route state. Type "${typeof e.state}" for path "${
					e.pathname
				}"`,
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
	return ((e, t) => {
		if (!t) {
			return e;
		}
		switch (typeof e) {
			case "function": {
				return (e) => a(e, t);
			}
			case "string": {
				return {
					...Rr(e),
					state: t,
				};
			}
			case "object": {
				return a(e, t);
			}
			default: {
				console.error(`Unable to process link config of type ${e}.`);
				return e;
			}
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
	const { state } = zy();
	if (state && state.event_to_show) {
		return state.event_to_show;
	} else {
		return null;
	}
}
export function Qx() {
	const e = zy();
	const t = W6();
	const r = {
		...(e.state || {}),
	};
	delete r.event_to_show;
	return () => t.replace(AO(e), r);
}
export function R_() {
	const { appid } = g();
	const t = zy();
	if (!appid || isNaN(parseInt(appid))) {
		console.error(
			`Could not parse appid from current route params. Got appid: "${appid}", path: "${t?.pathname}"`,
		);
		return NaN;
	} else {
		return parseInt(appid);
	}
}
export function AX() {
	const { controllerIdx } = g();
	const t = zy();
	if (controllerIdx && !isNaN(parseInt(controllerIdx))) {
		return parseInt(controllerIdx);
	}
	console.error(
		`Could not parse controller idx from current route params. Got idx: "${controllerIdx}", path: "${t?.pathname}"`,
	);
}
