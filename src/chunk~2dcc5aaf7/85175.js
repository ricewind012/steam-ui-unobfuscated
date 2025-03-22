var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./46422.js");
var a = require("./874.js");
var s = require("./79112.js");
var o = require("./60021.js");
var l = require(/*webcrack:missing*/ "./43691.js");
var c = require(/*webcrack:missing*/ "./79099.js");
var m = require("./24287.js");
var u = require("./6263.js");
export function FQ(e) {
	const { children: t, webNavigationsUseSteamURL: r } = e;
	const s = (0, n.useCallback)(
		(e) =>
			(function (e, t) {
				const r = t ? p : h;
				const n = t ? g : C;
				let s = false;
				return {
					...(0, a.b)(e, {
						beforeNavigate: () => {
							if (!s || !l.TS.SILENT_STARTUP) {
								const e = (0, c.Q)() || !s;
								i.oy.WindowStore.EnsureMainWindowCreated(e);
							}
						},
						getAdditionalEntries: (e) => {
							const {
								runSteamProtocolAction: t,
								openNamedDialog: i,
								ownerWindow: a,
							} = e;
							return {
								type: "desktop",
								Chat: () => t("OpenFriends", {}),
								Settings: (e) => (0, m.Sj)(e),
								SteamWeb: (e, t) => r(a, e, t),
								SteamWebTab: (e) => (0, o.Ff)(e),
								ExternalWeb: (e) => n(a, e),
								Media: {
									Grid: (e) =>
										i(
											"Media",
											e?.state?.filter
												? {
														filter: JSON.stringify(e.state.filter),
													}
												: {},
										),
									List: (e) =>
										i("Media", {
											view: "list",
											filter: e?.state?.filter
												? JSON.stringify(e.state.filter)
												: undefined,
										}),
									Screenshot: (e) =>
										i("Media", {
											item: JSON.stringify({
												type: "screenshot",
												id: e.state.id,
											}),
											filter: JSON.stringify(e?.state?.filter ?? {}),
										}),
									Clip: (e) =>
										i("Media", {
											item: JSON.stringify({
												type: "clip",
												id: e.state.id,
											}),
										}),
									Recording: (e) =>
										i("Media", {
											item: JSON.stringify({
												type: "recording",
												id: e.state.gameid,
												playbackDefinition: e.state.playbackDefinition,
											}),
										}),
								},
								RequestPlaytimeDialog: (e) => {
									(0, u._N)(a, e);
								},
							};
						},
					}),
					setNavigatingToInitialRoute: (e) => {
						s = e;
					},
				};
			})(e, r),
		[r],
	);
	return (0, n.createElement)(
		a.x,
		{
			buildNavigator: s,
			type: "desktop",
		},
		t,
	);
}
export function Jg() {
	const e = (0, s.br)();
	if (
		!(function (e) {
			return e?.type === "desktop";
		})(e)
	) {
		console.error("Found wrong navigator type!");
	}
	return e;
}
function p(e, t) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		e.location.href = "steam://openurl/" + t;
	}
}
function g(e, t) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		e.location.href = "steam://openurl_external/" + t;
	}
}
function h(e, t, r) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		(0, o.X1)(t, r);
	}
}
function C(e, t) {
	if (t.indexOf("steam://") == 0) {
		e.location.href = t;
	} else {
		SteamClient.System.OpenInSystemBrowser(t);
	}
}
