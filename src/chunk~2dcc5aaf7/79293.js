import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { useState } from "./63696.js";
import a from "./64608.js";
import "./13869.js";
import s from "./91745.js";
import o from "./61175.js";
import l, { PA } from "./41230.js";
import c from "./74827.js";
import m from "./92749.js";
import u from "./44313.js";
import { TE } from "./13200.js";
import p from "./60917.js";
import g from "./69164.js";
import { A } from "./27954.js";
export function h3(e) {
	0;
}
const _ = (e) => {
	const t = s.hG.GetToggleSetting(e.eToggle);
	return (
		<a.RF
			key={t.strLabel}
			label={t.strLabel}
			description={t.strDescription}
			checked={t.currentValue}
			onChange={(t) => s.hG.SetToggle(e.eToggle, t)}
		/>
	);
};
class F extends i.Component {
	render() {
		const e = s.hG
			.GetTogglesForPanel(null)
			.map(([e, t]) => <_ key={e} eToggle={e} />);
		return (
			<>
				<a.nB>
					{e}
					<a.Xp>
						<a.$n onClick={() => A(true)}>React Query Devtools</a.$n>
					</a.Xp>
				</a.nB>
			</>
		);
	}
}
class B extends i.Component {
	render() {
		const e = s.hG
			.GetTogglesForPanel(4)
			.map(([e, t]) => <_ key={e} eToggle={e} />);
		return (
			<>
				<a.nB>{e}</a.nB>
			</>
		);
	}
}
const Y = PA(() => {
	const [e, setE] = useState("");
	const r = s.hG
		.GetTogglesForPanel(0)
		.map(([e, t]) => <_ key={e} eToggle={e} />);
	return (
		<>
			<a.nB>
				{e && (
					<div
						style={{
							color: "red",
						}}
					>
						{e}
					</div>
				)}
				<a.iK>Game Summary:</a.iK>
				<a.a3
					style={{
						margin: "8px 0px",
					}}
				>
					Controls for any game
				</a.a3>
				<a.dR
					style={{
						width: "100%",
					}}
				>
					<a.$n
						onClick={() => {
							setE("");
							let e = o.n6.currentGameListSelection.nAppId;
							if (e != 0) {
								if (!c.Ri.BSimulateSummaryFakeAchievement(e)) {
									setE(
										"Failed to add a new achievement (most likely at 12 or no achievements for this game)",
									);
								}
							} else {
								setE("Select an app details page");
							}
						}}
					>
						Add Achievement
					</a.$n>
					<a.$n
						onClick={() => {
							setE("");
							let e = o.n6.currentGameListSelection.nAppId;
							if (e != 0) {
								c.Ri.SimulateSummaryForceNewDay(e);
							} else {
								setE("Select an app details page");
							}
						}}
					>
						Force New Day
					</a.$n>
				</a.dR>
				<a.dR
					style={{
						width: "100%",
					}}
				>
					<a.$n
						onClick={() => {
							setE("");
							let e = o.n6.currentGameListSelection.nAppId;
							if (e != 0) {
								c.Ri.SimulateSummaryClear(e);
							} else {
								setE("Select an app details page");
							}
						}}
					>
						Clear Game Summary
					</a.$n>
				</a.dR>
				<a._E
					style={{
						margin: "10px 0px",
					}}
				/>
				<a.a3
					style={{
						margin: "8px 0px",
					}}
				>
					Game specific controls
				</a.a3>
				<a.dR
					style={{
						width: "100%",
					}}
				>
					<a.$n
						onClick={() => {
							setE("");
							if (o.n6.currentGameListSelection.nAppId == 440) {
								c.Ri.SimulatePressSummary();
							} else {
								setE("Navigate to Team Fortress 2 first");
							}
						}}
					>
						Team Fortress 2
					</a.$n>
					<a.$n
						onClick={(e) =>
							TE(
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
								GetOwningWindowForEvent(e),
							)
						}
					>
						Show Cloud Conflict Dialog
					</a.$n>
				</a.dR>
				<a.iK
					style={{
						margin: "20px 0px 0px 0px",
					}}
				>
					New DLC:
				</a.iK>
				{r}
			</a.nB>
		</>
	);
});
let S = class extends i.Component {
	render() {
		const e = s.hG
			.GetTogglesForPanel(2)
			.map(([e, t]) => <_ key={e} eToggle={e} />);
		return (
			<>
				<a.nB>
					<a.a3
						style={{
							marginTop: "12px",
						}}
					>
						{"These controls affect the "}
						<b>Play Next</b>
						{" Suggestions shelf."}
					</a.a3>
					<a.$n
						style={{
							marginBottom: "20px",
						}}
						onClick={m.x3.DebugClearCache}
					>
						Clear PlayNextStore Cache
					</a.$n>
					{e}
				</a.nB>
			</>
		);
	}
};
S = Cg([l.PA], S);
let W = class extends i.Component {
	onSendTestNotifications = () => p.Tu.Dev_SendTestNotifications();
	onRefreshNotifications = () => p.$Z.RefreshNotifications();
	render() {
		const e = s.hG
			.GetTogglesForPanel(3)
			.map(([e, t]) => <_ key={e} eToggle={e} />);
		let t = [];
		const r = p.Tu.GetNotificationTargets();
		for (const e in r) {
			const n = parseInt(e);
			if (r[n].strTest) {
				t.push(
					<a.$n
						style={{
							display: "inline-flex",
							width: "180px",
							margin: "0px 10px 10px 0px",
							justifyContent: "center",
							whiteSpace: "nowrap",
							textOverflow: "ellipsis",
						}}
						onClick={r[n].fnTest}
					>
						{r[n].strTest}
					</a.$n>,
				);
			}
		}
		return (
			<>
				<a.nB>
					<a.$n
						style={{
							marginBottom: "20px",
						}}
						onClick={this.onSendTestNotifications}
					>
						Send Multiple Test Notifications
					</a.$n>
					<a.$n
						style={{
							marginBottom: "20px",
						}}
						onClick={this.onRefreshNotifications}
					>
						Refresh from Server
					</a.$n>
					{e}
					<g.Z
						style={{
							paddingTop: "20px",
						}}
					>
						<g.Z
							style={{
								display: "flex",
								flexDirection: "row",
								paddingBottom: "10px",
							}}
						>
							Send Test Notification
						</g.Z>
						{...t}
					</g.Z>
				</a.nB>
			</>
		);
	}
};
export let PQ;
W = Cg([l.PA], W);
((e) => {
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
		content: <F />,
	},
	{
		title: "VR Developer Options",
		identifier: PQ.VRDeveloperOptions,
		content: <B />,
	},
	{
		title: "Log Settings",
		identifier: "LogSettings",
		content: <u.e />,
	},
	{
		title: "App Spotlight",
		identifier: PQ.AppSpotlight,
		content: <Y />,
	},
	{
		title: "Play Next",
		identifier: PQ.PlayNext,
		content: <S />,
	},
	{
		title: "Notifications",
		identifier: PQ.Notifications,
		content: <W />,
	},
];
i.Component;
