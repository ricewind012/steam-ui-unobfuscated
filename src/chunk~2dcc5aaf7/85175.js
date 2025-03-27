import n, { useCallback, createElement } from "./63696.js";
import i from "./46422.js";
import a, { b } from "./874.js";
import s, { br } from "./79112.js";
import { Ff, X1 } from "./60021.js";
import l from "./43691.js";
import { Q } from "./79099.js";
import { Sj } from "./24287.js";
import { _N } from "./6263.js";
export function FQ(e) {
	const { children, webNavigationsUseSteamURL } = e;
	const s = useCallback(
		(e) =>
			((e, t) => {
				const r = t ? p : h;
				const n = t ? g : C;
				let s = false;
				return {
					...b(e, {
						beforeNavigate: () => {
							if (!s || !l.TS.SILENT_STARTUP) {
								const e = Q() || !s;
								i.oy.WindowStore.EnsureMainWindowCreated(e);
							}
						},
						getAdditionalEntries: (e) => {
							const { runSteamProtocolAction, openNamedDialog, ownerWindow } =
								e;
							return {
								type: "desktop",
								Chat: () => runSteamProtocolAction("OpenFriends", {}),
								Settings: (e) => Sj(e),
								SteamWeb: (e, t) => r(ownerWindow, e, t),
								SteamWebTab: (e) => Ff(e),
								ExternalWeb: (e) => n(ownerWindow, e),
								Media: {
									Grid: (e) =>
										openNamedDialog(
											"Media",
											e?.state?.filter
												? {
														filter: JSON.stringify(e.state.filter),
													}
												: {},
										),
									List: (e) =>
										openNamedDialog("Media", {
											view: "list",
											filter: e?.state?.filter
												? JSON.stringify(e.state.filter)
												: undefined,
										}),
									Screenshot: (e) =>
										openNamedDialog("Media", {
											item: JSON.stringify({
												type: "screenshot",
												id: e.state.id,
											}),
											filter: JSON.stringify(e?.state?.filter ?? {}),
										}),
									Clip: (e) =>
										openNamedDialog("Media", {
											item: JSON.stringify({
												type: "clip",
												id: e.state.id,
											}),
										}),
									Recording: (e) =>
										openNamedDialog("Media", {
											item: JSON.stringify({
												type: "recording",
												id: e.state.gameid,
												playbackDefinition: e.state.playbackDefinition,
											}),
										}),
								},
								RequestPlaytimeDialog: (e) => {
									_N(ownerWindow, e);
								},
							};
						},
					}),
					setNavigatingToInitialRoute: (e) => {
						s = e;
					},
				};
			})(e, webNavigationsUseSteamURL),
		[webNavigationsUseSteamURL],
	);
	return (
		<a.x buildNavigator={s} type="desktop">
			{children}
		</a.x>
	);
}
export function Jg() {
	const e = br();
	if (!((e) => e?.type === "desktop")(e)) {
		console.error("Found wrong navigator type!");
	}
	return e;
}
function p(e, t) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		e.location.href = `steam://openurl/${t}`;
	}
}
function g(e, t) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		e.location.href = `steam://openurl_external/${t}`;
	}
}
function h(e, t, r) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		X1(t, r);
	}
}
function C(e, t) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		SteamClient.System.OpenInSystemBrowser(t);
	}
}
