var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./64608.js");
require("./13869.js");
var s = require("./91745.js");
var o = require("./61175.js");
var l = require(/*webcrack:missing*/ "./41230.js");
var c = require("./74827.js");
var m = require("./92749.js");
var u = require("./44313.js");
var d = require("./13200.js");
var A = require(/*webcrack:missing*/ "./54644.js");
var p = require("./60917.js");
var g = require(/*webcrack:missing*/ "./69164.js");
var h = require("./27954.js");
export function h3(e) {
	0;
}
const _ = (e) => {
	const t = s.hG.GetToggleSetting(e.eToggle);
	return i.createElement(a.RF, {
		key: t.strLabel,
		label: t.strLabel,
		description: t.strDescription,
		checked: t.currentValue,
		onChange: (t) => s.hG.SetToggle(e.eToggle, t),
	});
};
class f extends i.Component {
	render() {
		const e = s.hG.GetTogglesForPanel(null).map(([e, t]) =>
			i.createElement(_, {
				key: e,
				eToggle: e,
			}),
		);
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				a.nB,
				null,
				e,
				i.createElement(
					a.Xp,
					null,
					i.createElement(
						a.$n,
						{
							onClick: () => (0, h.A)(true),
						},
						"React Query Devtools",
					),
				),
			),
		);
	}
}
class b extends i.Component {
	render() {
		const e = s.hG.GetTogglesForPanel(4).map(([e, t]) =>
			i.createElement(_, {
				key: e,
				eToggle: e,
			}),
		);
		return i.createElement(i.Fragment, null, i.createElement(a.nB, null, e));
	}
}
const y = (0, l.PA)(() => {
	const [e, t] = (0, i.useState)("");
	const r = s.hG.GetTogglesForPanel(0).map(([e, t]) =>
		i.createElement(_, {
			key: e,
			eToggle: e,
		}),
	);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			a.nB,
			null,
			e &&
				i.createElement(
					"div",
					{
						style: {
							color: "red",
						},
					},
					e,
				),
			i.createElement(a.iK, null, "Game Summary:"),
			i.createElement(
				a.a3,
				{
					style: {
						margin: "8px 0px",
					},
				},
				"Controls for any game",
			),
			i.createElement(
				a.dR,
				{
					style: {
						width: "100%",
					},
				},
				i.createElement(
					a.$n,
					{
						onClick: () => {
							t("");
							let e = o.n6.currentGameListSelection.nAppId;
							if (e != 0) {
								if (!c.Ri.BSimulateSummaryFakeAchievement(e)) {
									t(
										"Failed to add a new achievement (most likely at 12 or no achievements for this game)",
									);
								}
							} else {
								t("Select an app details page");
							}
						},
					},
					"Add Achievement",
				),
				i.createElement(
					a.$n,
					{
						onClick: () => {
							t("");
							let e = o.n6.currentGameListSelection.nAppId;
							if (e != 0) {
								c.Ri.SimulateSummaryForceNewDay(e);
							} else {
								t("Select an app details page");
							}
						},
					},
					"Force New Day",
				),
			),
			i.createElement(
				a.dR,
				{
					style: {
						width: "100%",
					},
				},
				i.createElement(
					a.$n,
					{
						onClick: () => {
							t("");
							let e = o.n6.currentGameListSelection.nAppId;
							if (e != 0) {
								c.Ri.SimulateSummaryClear(e);
							} else {
								t("Select an app details page");
							}
						},
					},
					"Clear Game Summary",
				),
			),
			i.createElement(a._E, {
				style: {
					margin: "10px 0px",
				},
			}),
			i.createElement(
				a.a3,
				{
					style: {
						margin: "8px 0px",
					},
				},
				"Game specific controls",
			),
			i.createElement(
				a.dR,
				{
					style: {
						width: "100%",
					},
				},
				i.createElement(
					a.$n,
					{
						onClick: () => {
							t("");
							if (o.n6.currentGameListSelection.nAppId == 440) {
								c.Ri.SimulatePressSummary();
							} else {
								t("Navigate to Team Fortress 2 first");
							}
						},
					},
					"Team Fortress 2",
				),
				i.createElement(
					a.$n,
					{
						onClick: (e) =>
							(0, d.TE)(
								{
									bOnAppLaunch: false,
									appid: 440,
									onCancel: () => {},
									keepLocal: () => {},
									keepRemote: () => {},
									onOK: () => {},
									customHeaderText: "#ControllerCloudConflict_Header",
									customDescriptionText: "#ControllerCloudConflict_Description",
								},
								(0, A.uX)(e),
							),
					},
					"Show Cloud Conflict Dialog",
				),
			),
			i.createElement(
				a.iK,
				{
					style: {
						margin: "20px 0px 0px 0px",
					},
				},
				"New DLC:",
			),
			r,
		),
	);
});
let S = class extends i.Component {
	render() {
		const e = s.hG.GetTogglesForPanel(2).map(([e, t]) =>
			i.createElement(_, {
				key: e,
				eToggle: e,
			}),
		);
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				a.nB,
				null,
				i.createElement(
					a.a3,
					{
						style: {
							marginTop: "12px",
						},
					},
					"These controls affect the ",
					i.createElement("b", null, "Play Next"),
					" Suggestions shelf.",
				),
				i.createElement(
					a.$n,
					{
						style: {
							marginBottom: "20px",
						},
						onClick: m.x3.DebugClearCache,
					},
					"Clear PlayNextStore Cache",
				),
				e,
			),
		);
	}
};
S = (0, n.Cg)([l.PA], S);
let w = class extends i.Component {
	onSendTestNotifications = () => p.Tu.Dev_SendTestNotifications();
	onRefreshNotifications = () => p.$Z.RefreshNotifications();
	render() {
		const e = s.hG.GetTogglesForPanel(3).map(([e, t]) =>
			i.createElement(_, {
				key: e,
				eToggle: e,
			}),
		);
		let t = [];
		const r = p.Tu.GetNotificationTargets();
		for (const e in r) {
			const n = parseInt(e);
			if (r[n].strTest) {
				t.push(
					i.createElement(
						a.$n,
						{
							style: {
								display: "inline-flex",
								width: "180px",
								margin: "0px 10px 10px 0px",
								justifyContent: "center",
								whiteSpace: "nowrap",
								textOverflow: "ellipsis",
							},
							onClick: r[n].fnTest,
						},
						r[n].strTest,
					),
				);
			}
		}
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				a.nB,
				null,
				i.createElement(
					a.$n,
					{
						style: {
							marginBottom: "20px",
						},
						onClick: this.onSendTestNotifications,
					},
					"Send Multiple Test Notifications",
				),
				i.createElement(
					a.$n,
					{
						style: {
							marginBottom: "20px",
						},
						onClick: this.onRefreshNotifications,
					},
					"Refresh from Server",
				),
				e,
				i.createElement(
					g.Z,
					{
						style: {
							paddingTop: "20px",
						},
					},
					i.createElement(
						g.Z,
						{
							style: {
								display: "flex",
								flexDirection: "row",
								paddingBottom: "10px",
							},
						},
						"Send Test Notification",
					),
					...t,
				),
			),
		);
	}
};
export var PQ;
w = (0, n.Cg)([l.PA], w);
(function (e) {
	e.DeveloperOptions = "DeveloperOptions";
	e.VRDeveloperOptions = "VRDeveloperOptions";
	e.AppSpotlight = "AppSpotlight";
	e.PlayNext = "PlayNext";
	e.Notifications = "Notifications";
	e.Share = "Share";
})((PQ ||= {}));
export const yQ = [
	{
		title: "Developer Options",
		identifier: PQ.DeveloperOptions,
		content: i.createElement(f, null),
	},
	{
		title: "VR Developer Options",
		identifier: PQ.VRDeveloperOptions,
		content: i.createElement(b, null),
	},
	{
		title: "Log Settings",
		identifier: "LogSettings",
		content: i.createElement(u.e, null),
	},
	{
		title: "App Spotlight",
		identifier: PQ.AppSpotlight,
		content: i.createElement(y, null),
	},
	{
		title: "Play Next",
		identifier: PQ.PlayNext,
		content: i.createElement(S, null),
	},
	{
		title: "Notifications",
		identifier: PQ.Notifications,
		content: i.createElement(w, null),
	},
];
i.Component;
