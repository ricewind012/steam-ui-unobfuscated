import n, { createElement } from "./63696.js";
import i from "./37449.js";
import a from "./46422.js";
import s, { b } from "./874.js";
import { br } from "./79112.js";
import l from "./45967.js";
import { $2 } from "./96680.js";
import m from "./5822.js";
import { _N } from "./6263.js";
function d(e) {
	return b(e, {
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
			const { navigate, ownerWindow } = t;
			return {
				type: e.type,
				Invites: (e) => navigate(i.B.GamepadUI.Invites(), e),
				Account: (e = {}) =>
					navigate(i.B.GamepadUI.Account(), {
						bNoRedundantNavigation: true,
						...e,
					}),
				Login: () =>
					navigate(i.B.GamepadUI.Login(), {
						state: {
							bReauthentication: false,
						},
					}),
				Reauthentication: () =>
					navigate(i.B.GamepadUI.Login(), {
						state: {
							bReauthentication: true,
						},
					}),
				LibraryTab: (e, t) => navigate(i.B.GamepadUI.Library.Tab(e), t),
				Settings: (e) => navigate(i.B.Settings[e]()),
				Chat: () =>
					navigate(i.B.GamepadUI.Chat(), {
						bNoRedundantNavigation: true,
					}),
				ControllerConfigurator: {
					Main: (e) => navigate(i.B.GamepadUI.ControllerConfigurator.Main(e)),
				},
				AppOverlay: {
					AppRunningControls: () =>
						navigate(i.B.GamepadUI.AppOverlay.AppRunningControls(), {}),
				},
				SteamWeb: (e) =>
					navigate(i.B.GamepadUI.SteamWeb(), {
						state: {
							url: e,
						},
					}),
				SteamWebTab: (e) =>
					navigate(i.B.GamepadUI.SteamWeb(), {
						state: {
							url: e,
						},
					}),
				MTXAuth: (e) =>
					navigate(i.B.GamepadUI.MicroTxnAuth(), {
						state: {
							url: e,
						},
					}),
				ExternalWeb: (e) =>
					navigate(i.B.GamepadUI.ExternalWeb(), {
						state: {
							url: e,
						},
					}),
				Media: {
					Grid: (e) =>
						navigate(i.B.Media.Grid(), {
							...(e || {}),
							state: e.state,
						}),
					List: (e) =>
						navigate(i.B.Media.List(), {
							...(e || {}),
							state: e.state,
						}),
					Screenshot: (e) =>
						navigate(i.B.Media.Item("screenshot", e.state.id), {
							...(e || {}),
							state: {
								item: {
									type: "screenshot",
									id: e.state.id,
								},
							},
						}),
					Clip: (e) =>
						navigate(i.B.Media.Item("clip", e.state.id), {
							...(e || {}),
							state: {
								item: {
									type: "clip",
									id: e.state.id,
								},
							},
						}),
					Recording: (e) =>
						navigate(i.B.Media.Item("recording", e.state.gameid), {
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
					_N(ownerWindow, e);
				},
			};
		},
	});
}
export function wZ(e) {
	const t = $2().IsGamepadUIOverlayWindow() ? "gamepadoverlay" : "gamepad";
	return (
		<s.x buildNavigator={d} type={t}>
			{e.children}
		</s.x>
	);
}
export function k1() {
	const e = br();
	if (!dq(e)) {
		console.error("Found wrong navigator type!");
	}
	return e;
}
export function dq(e) {
	return e?.type === "gamepad" || e?.type === "gamepadoverlay";
}
