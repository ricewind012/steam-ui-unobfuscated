import * as n from "./63696.js";
import * as i from "./8240.js";
import * as a from "./82153.js";
import * as s from "./91720.js";
import * as o from "./92374.js";
import * as l from "./99998.js";
import * as c from "./28220.js";
import * as m from "./22588.js";
import * as u from "./29516.js";
import * as d from "./90765.js";
import * as A from "./4069.js";
import * as p from "./69767.js";
import * as g from "./8717.js";
import * as h from "./35488.js";
import * as C from "./90095.js";
import * as _ from "./58254.js";
import * as f from "./49508.js";
import * as b from "./32676.js";
export default (e) => null;
export function GameRecordingSelectedClip(e) {
	const { initialGameID, initialPlaybackDefinition } = e;
	const { rgApps } = (0, s.z)();
	const o = (0, b.useGPUAccelErrorDialog)();
	let l = !rgApps || rgApps.length == 0;
	return (
		<div className={i.GameRecordingDesktopDialog}>
			{o}
			{!l && (
				<div className={(0, d.A)(i.MainContent, i.NoHeaderName, i.ClipHeader)}>
					<W
						gameID={initialGameID}
						initialPlaybackDefinition={initialPlaybackDefinition}
					/>
				</div>
			)}
		</div>
	);
}
function W(e) {
	const { gameID, initialPlaybackDefinition } = e;
	const { loader, fnGetManifest } = (0, m.Fc)(gameID);
	const l = (0, p.Y5)(gameID);
	const c = (0, A.useGameRecordingSetting)();
	const u = (0, s.$O)(gameID);
	return (
		<o.Ni
			loader={loader}
			fnGetManifest={fnGetManifest}
			mode={o.g_.Background}
			recordingSetting={c}
			recordingState={l}
			clipSummaries={u}
			playbackDefinition={initialPlaybackDefinition}
		>
			<B gameID={gameID} loader={loader} />
		</o.Ni>
	);
}
function B(e) {
	const { loader, gameID } = e;
	const i = (0, s.$O)(gameID);
	return (
		<a.p>
			<u.tB loader={loader}>
				<l.Sd loader={loader} clipSummaries={i} />
				<V loader={loader} />
			</u.tB>
		</a.p>
	);
}
function V(e) {
	const { loader } = e;
	const r = ((e, t) => {
		const r = (0, C.q3)(() =>
			t.GetTimelineAndOffsetRelativeToCurrentPlayback(),
		);
		if (!r) {
			return null;
		}
		const n = e.GetTimelineData(r.strTimelineID);
		const i = e.GetTimelineMetadata(r.strTimelineID);
		if (!n || !i) {
			return null;
		}
		const a =
			n.m_rgPhases.find((e) =>
				((e, t) => {
					const r = parseInt(t.time);
					const n = parseInt(t.duration);
					const i = r + n;
					return e >= r && e <= i;
				})(r.nTimelineOffsetMS, e),
			) || null;
		if (a) {
			return {
				entry: a,
				timeline: i,
			};
		} else {
			return null;
		}
	})(loader, (0, o.aO)());
	const [a, setA] = n.useState(false);
	const l = () => setA(true);
	const c = () => setA(false);
	const [m] = (0, o.Bl)();
	const u = a ? r : m;
	return (
		<>
			<E className={i.PhaseInfoOverlay} visible={!!u}>
				<I phase={u} gameID={loader.GetGameID()} />
			</E>
			{!!r && (
				<g.D target="MediaManagerOpenedItemHeaderControls">
					<h.Information
						className={i.PhaseInfo}
						onMouseOver={l}
						onMouseLeave={c}
						onFocus={l}
						onBlur={c}
					/>
				</g.D>
			)}
		</>
	);
}
function I(e) {
	const { phase, gameID } = e;
	if (!phase) {
		return null;
	}
	const { entry, timeline } = phase;
	if (!entry || !timeline) {
		return null;
	}
	const s =
		timeline.metadata.date_recorded + Math.floor(parseInt(entry.time) / 1000);
	return (
		<>
			<f.eg time={s} />
			<c.x gameID={gameID} tags={entry.tags} attributes={entry.attributes} />
		</>
	);
}
function E(e) {
	const { visible, children, className } = e;
	const SRef = n.useRef(undefined);
	return (
		<_.A
			unmountOnExit
			timeout={200}
			in={visible}
			nodeRef={SRef}
			classNames={{
				enter: i.FadeEnter,
				enterActive: i.FadeEnterActive,
				exit: i.FadeExit,
				exitActive: i.FadeExitActive,
			}}
		>
			<div ref={SRef} className={className}>
				{children}
			</div>
		</_.A>
	);
}
