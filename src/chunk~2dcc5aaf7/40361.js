import n, { createElement } from "./63696.js";
import i, { b } from "./874.js";
import a, { br } from "./79112.js";
import s from "./69913.js";
import o from "./44846.js";
import l from "./37499.js";
function c(e) {
	return b(e, {
		getAdditionalEntries: (e) => {
			const { runSteamProtocolAction, navigate, ownerWindow, instance } = e;
			const i_DesktopOverlay = instance.DesktopOverlay;
			return {
				type: "desktopoverlay",
				Home: (e = {}, t = {}) => {},
				App: (e, t = {}, r = {}) => {},
				AllCollections: (e) => {},
				Collection: (e, t) => {},
				Downloads: (e) => {},
				Console: () => {},
				Chat: () =>
					i_DesktopOverlay.SetWindowVisibility(s.w9.FriendsList, s.tc.Visible),
				Settings: (e) => i_DesktopOverlay.ShowSettings(e),
				SteamWeb: (e) => i_DesktopOverlay.AddWebPageRequest(e),
				SteamWebTab: (e) => i_DesktopOverlay.AddWebPageRequest(e),
				ExternalWeb: (e) => i_DesktopOverlay.AddWebPageRequest(e),
				MyAchievements: (e) =>
					i_DesktopOverlay.SetWindowVisibility(s.w9.Achievements, s.tc.Visible),
				Media: {
					Grid: (e) =>
						i_DesktopOverlay.ShowMedia({
							initialFilter: e?.state?.filter,
						}),
					List: (e) =>
						i_DesktopOverlay.ShowMedia({
							initialFilter: e?.state?.filter,
							initialView: "list",
						}),
					Screenshot: (e) =>
						i_DesktopOverlay.ShowMedia({
							initialItem: {
								type: "screenshot",
								id: e.state.id,
							},
						}),
					Clip: (e) =>
						i_DesktopOverlay.ShowMedia({
							initialItem: {
								type: "clip",
								id: e.state.id,
							},
						}),
					Recording: (e) =>
						i_DesktopOverlay.ShowMedia({
							initialItem: {
								type: "recording",
								id: e.state.gameid,
								playbackDefinition: e.state.playbackDefinition,
							},
						}),
				},
				RemotePlayTogether: () => i_DesktopOverlay.ShowRemotePlayTogether(),
				RequestPlaytimeDialog: (e) => {
					const t = {
						bWebPage: false,
						appid: instance.params.browserInfo.m_unAppID,
						strDialog: "requestplaytime",
						eWebPageMode: o.Sx.k_EActivateGameOverlayToWebPageMode_Modal,
						unRequestingAppID: instance.params.browserInfo.m_unAppID,
						steamidTarget: "0",
						eFlag: o.SS.k_EOverlayToStoreFlag_None,
						strConnectString: e,
					};
					l.Q.AddWebPageRequest(t);
				},
			};
		},
	});
}
export function zA(e) {
	return (
		<i.x buildNavigator={c} type="desktopoverlay">
			{e.children}
		</i.x>
	);
}
export function DJ() {
	const e = br();
	if (!((e) => e?.type === "desktopoverlay")(e)) {
		console.error("Found wrong navigator type!");
	}
	return e;
}
