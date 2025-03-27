import {
	Localize,
	LocalizeReact,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import a, { q3 } from "./90095.js";
import s, { W6 } from "./49519.js";
import o from "./84056.js";
import { ID } from "./44846.js";
import m from "./1965.js";
import u from "./56726.js";
import { VI } from "./34792.js";
import A from "./21597.js";
import p from "./16364.js";
import h, { Qn, Y2 } from "./72476.js";
import C from "./69164.js";
import _ from "./94729.js";
import f from "./18057.js";
import { MZ } from "./3499.js";
import { br } from "./18869.js";
import { BGameRecordingFeatureEnabled } from "./4069.js";
import B from "./74827.js";
import v from "./61294.js";
const g = p;
function I(e) {
	GetOwningWindowForEvent(e).location.href = "steam://settings/ingame";
}
export const E = PA((e) => {
	const t = W6();
	const r = Qn();
	const [i] = VI("screenshot_key");
	const a = br();
	const p = () =>
		a.Media.Grid({
			state: {
				filter: {
					listSource: {
						type: "app",
						gameid: e.overview.gameid,
					},
				},
			},
		});
	const { cTotal } = MZ({
		listSource: {
			type: "app",
			gameid: e.overview.gameid,
		},
		mediaType: "all",
		uploadStatus: "all",
	});
	const { rgMedia } = MZ(
		{
			listSource: {
				type: "app",
				gameid: e.overview.gameid,
			},
			mediaType: "all",
			uploadStatus: "all",
		},
		4,
	);
	let E = "#AppDetails_SectionTitle_Screenshots";
	if (!Y2() && BGameRecordingFeatureEnabled()) {
		E = r
			? "#AppDetails_SectionTitle_Media_BPM"
			: "#AppDetails_SectionTitle_Media";
	}
	if (rgMedia.length == 0) {
		const e = {
			type: o.N.k_EControllerBindingType_ControllerAction,
			controller_action: {
				action: 2,
			},
		};
		return (
			<m.n
				feature={3}
				className={g.ScreenshotsSection}
				label={Localize(E)}
				rightColumnSection
				availableOffline
			>
				<m.n.Body>
					{r && (
						<>
							<div className={g.NoRecent}>
								{LocalizeReact(
									"#AppDetails_HowToScreenshotGamepad",
									<v.Gn binding={e} onActivate={() => {}} />,
								)}{" "}
							</div>
							<u.TD onClick={() => t.push(f.BV.Media.Grid())}>
								{Localize("#AppDetails_GoToMedia")}
							</u.TD>
						</>
					)}
					{!r && (
						<>
							<div className={g.NoneTaken}>
								{Localize("#AppDetails_NoScreenshots", i.display_name)}{" "}
							</div>
							<div className={g.InstructionText}>
								{Localize("#AppDetails_HowToScreenshot", i.display_name)}{" "}
							</div>
							<u.TD onClick={I}>
								{Localize("#AppDetails_ChangeMyScreenshotKey")}
							</u.TD>
						</>
					)}
				</m.n.Body>
			</m.n>
		);
	}
	{
		let t = "#AppDetails_ManageMyScreenshots";
		if (!Y2() && BGameRecordingFeatureEnabled()) {
			t = r ? "#AppDetails_ManageMyMedia_BPM" : "#AppDetails_ManageMyMedia";
		}
		const i = rgMedia.map((t) => {
			switch (t.type) {
				case "screenshot": {
					return (
						<A.R
							className={g.Thumbnail}
							key={t.id}
							sizeAxis="width"
							screenshot={t}
						/>
					);
				}
				case "clip": {
					return <_.$d key={t.id} clip={t.summary} nonFixedSize />;
				}
				default: {
					return (
						<M
							key={t.id}
							appID={e.overview.appid}
							gameID={e.overview.gameid}
							mediaID={t.id}
						/>
					);
				}
			}
		});
		return (
			<m.n
				feature={3}
				className={g.ScreenshotsSection}
				label={Localize(E)}
				rightColumnSection
				availableOffline
			>
				<m.n.Body>
					<C.Z flow-children="grid" className={g.Screenshots}>
						{i.slice(0, 4)}
					</C.Z>
					{!ID(h.TS.LAUNCHER_TYPE) && (
						<u.TD onClick={p}>{LocalizePlural(t, cTotal)}</u.TD>
					)}
				</m.n.Body>
			</m.n>
		);
	}
});
function M(e) {
	const { appID, gameID, mediaID } = e;
	const s = q3(() => B.Ri.GetPostGameSummary(appID)?.GetSessionEvents());
	const o = s?.find((e) => e.m_recordingHighlights)?.m_recordingHighlights;
	if (o) {
		return <_.$B key={mediaID} gameID={gameID} nonFixedSize highlights={o} />;
	} else {
		return (
			<_.Li
				key={mediaID}
				gameID={gameID}
				nonFixedSize
				highlights={[
					{
						game_id: gameID,
						timeline_id: "",
						duration_ms: "0",
						timeline_offset_ms: "0",
					},
				]}
			/>
		);
	}
}
