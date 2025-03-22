var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./37449.js");
var a = require("./46422.js");
var s = require("./874.js");
var o = require("./79112.js");
var l = require("./45967.js");
var c = require("./96680.js");
var m = require("./5822.js");
var u = require("./6263.js");
function d(e) {
	return (0, s.b)(e, {
		beforeNavigate: () => {
			if (e.type == "gamepad") {
				if (
					!a.oy.BIsAnyWindowFocused() &&
					!e.instance.IsDesktopOverlayWindow() &&
					!e.instance.IsGamepadUIOverlayWindow()
				) {
					if (e.instance.IsVRWindow() === l.qL.IsVRHMDAwake) {
						e.ownerWindow.SteamClient.Window.BringToFront();
					}
				}
			}
			a.oy.CloseSideMenus();
		},
		getAdditionalEntries: (t) => {
			const { navigate: r, ownerWindow: n } = t;
			return {
				type: e.type,
				Invites: (e) => r(i.B.GamepadUI.Invites(), e),
				Account: (e = {}) =>
					r(i.B.GamepadUI.Account(), {
						bNoRedundantNavigation: true,
						...e,
					}),
				Login: () =>
					r(i.B.GamepadUI.Login(), {
						state: {
							bReauthentication: false,
						},
					}),
				Reauthentication: () =>
					r(i.B.GamepadUI.Login(), {
						state: {
							bReauthentication: true,
						},
					}),
				LibraryTab: (e, t) => r(i.B.GamepadUI.Library.Tab(e), t),
				Settings: (e) => r(i.B.Settings[e]()),
				Chat: () =>
					r(i.B.GamepadUI.Chat(), {
						bNoRedundantNavigation: true,
					}),
				ControllerConfigurator: {
					Main: (e) => r(i.B.GamepadUI.ControllerConfigurator.Main(e)),
				},
				AppOverlay: {
					AppRunningControls: () =>
						r(i.B.GamepadUI.AppOverlay.AppRunningControls(), {}),
				},
				SteamWeb: (e) =>
					r(i.B.GamepadUI.SteamWeb(), {
						state: {
							url: e,
						},
					}),
				SteamWebTab: (e) =>
					r(i.B.GamepadUI.SteamWeb(), {
						state: {
							url: e,
						},
					}),
				MTXAuth: (e) =>
					r(i.B.GamepadUI.MicroTxnAuth(), {
						state: {
							url: e,
						},
					}),
				ExternalWeb: (e) =>
					r(i.B.GamepadUI.ExternalWeb(), {
						state: {
							url: e,
						},
					}),
				Media: {
					Grid: (e) =>
						r(i.B.Media.Grid(), {
							...(e || {}),
							state: e.state,
						}),
					List: (e) =>
						r(i.B.Media.List(), {
							...(e || {}),
							state: e.state,
						}),
					Screenshot: (e) =>
						r(i.B.Media.Item("screenshot", e.state.id), {
							...(e || {}),
							state: {
								item: {
									type: "screenshot",
									id: e.state.id,
								},
							},
						}),
					Clip: (e) =>
						r(i.B.Media.Item("clip", e.state.id), {
							...(e || {}),
							state: {
								item: {
									type: "clip",
									id: e.state.id,
								},
							},
						}),
					Recording: (e) =>
						r(i.B.Media.Item("recording", e.state.gameid), {
							...(e || {}),
							state: {
								item: {
									type: "recording",
									id: e.state.gameid,
									playbackDefinition: e.state.playbackDefinition,
								},
							},
						}),
				},
				RemotePlayTogether: () => {
					e.instance.MenuStore.OpenQuickAccessMenu(
						m.qE.RemotePlayTogetherControls,
						true,
					);
				},
				RequestPlaytimeDialog: (e) => {
					(0, u._N)(n, e);
				},
			};
		},
	});
}
export function wZ(e) {
	const t = (0, c.$2)().IsGamepadUIOverlayWindow()
		? "gamepadoverlay"
		: "gamepad";
	return (0, n.createElement)(
		s.x,
		{
			buildNavigator: d,
			type: t,
		},
		e.children,
	);
}
export function k1() {
	const e = (0, o.br)();
	if (!dq(e)) {
		console.error("Found wrong navigator type!");
	}
	return e;
}
export function dq(e) {
	return e?.type === "gamepad" || e?.type === "gamepadoverlay";
}
