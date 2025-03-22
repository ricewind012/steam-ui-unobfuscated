var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./874.js");
var a = require("./79112.js");
var s = require("./69913.js");
var o = require(/*webcrack:missing*/ "./44846.js");
var l = require("./37499.js");
function c(e) {
	return (0, i.b)(e, {
		getAdditionalEntries: (e) => {
			const {
				runSteamProtocolAction: t,
				navigate: r,
				ownerWindow: n,
				instance: i,
			} = e;
			const a = i.DesktopOverlay;
			return {
				type: "desktopoverlay",
				Home: (e = {}, t = {}) => {},
				App: (e, t = {}, r = {}) => {},
				AllCollections: (e) => {},
				Collection: (e, t) => {},
				Downloads: (e) => {},
				Console: () => {},
				Chat: () => a.SetWindowVisibility(s.w9.FriendsList, s.tc.Visible),
				Settings: (e) => a.ShowSettings(e),
				SteamWeb: (e) => a.AddWebPageRequest(e),
				SteamWebTab: (e) => a.AddWebPageRequest(e),
				ExternalWeb: (e) => a.AddWebPageRequest(e),
				MyAchievements: (e) =>
					a.SetWindowVisibility(s.w9.Achievements, s.tc.Visible),
				Media: {
					Grid: (e) =>
						a.ShowMedia({
							initialFilter: e?.state?.filter,
						}),
					List: (e) =>
						a.ShowMedia({
							initialFilter: e?.state?.filter,
							initialView: "list",
						}),
					Screenshot: (e) =>
						a.ShowMedia({
							initialItem: {
								type: "screenshot",
								id: e.state.id,
							},
						}),
					Clip: (e) =>
						a.ShowMedia({
							initialItem: {
								type: "clip",
								id: e.state.id,
							},
						}),
					Recording: (e) =>
						a.ShowMedia({
							initialItem: {
								type: "recording",
								id: e.state.gameid,
								playbackDefinition: e.state.playbackDefinition,
							},
						}),
				},
				RemotePlayTogether: () => a.ShowRemotePlayTogether(),
				RequestPlaytimeDialog: (e) => {
					const t = {
						bWebPage: false,
						appid: i.params.browserInfo.m_unAppID,
						strDialog: "requestplaytime",
						eWebPageMode: o.Sx.k_EActivateGameOverlayToWebPageMode_Modal,
						unRequestingAppID: i.params.browserInfo.m_unAppID,
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
	return (0, n.createElement)(
		i.x,
		{
			buildNavigator: c,
			type: "desktopoverlay",
		},
		e.children,
	);
}
export function DJ() {
	const e = (0, a.br)();
	if (
		!(function (e) {
			return e?.type === "desktopoverlay";
		})(e)
	) {
		console.error("Found wrong navigator type!");
	}
	return e;
}
