import n from "./64591.js";
import i, { useState, useEffect } from "./63696.js";
import a, { A as A_1 } from "./90765.js";
import s, { Ue } from "./52451.js";
import o from "./58254.js";
import l, { Ni, Fc } from "./22588.js";
import c, { aO } from "./92374.js";
import m, { xE } from "./84921.js";
export function z(e) {
	let { clipID, playClip } = e;
	return (
		<A
			play={playClip}
			renderVideo={(e, r, n) => (
				<G_1 ref={e} clipID={clipID} onReady={r} hidden={n} />
			)}
		/>
	);
}
export function G(e) {
	let { gameID, timelineID, startMS, durationMS, play } = e;
	return (
		<A
			play={play}
			renderVideo={(e, s, o) => (
				<H
					ref={e}
					gameID={gameID}
					timelineID={timelineID}
					startMS={startMS}
					durationMS={durationMS}
					onReady={s}
					hidden={o}
				/>
			)}
		/>
	);
}
function A(e) {
	let { renderVideo, play } = e;
	const [n, setN] = useState(false);
	const SRef = i.useRef();
	let l = null;
	if (n) {
		l = (
			<o.A
				nodeRef={SRef}
				in={play}
				timeout={200}
				classNames={p}
				mountOnEnter
				unmountOnExit
				appear
			>
				{renderVideo(SRef, undefined, false)}
			</o.A>
		);
	} else if (play) {
		l = renderVideo(SRef, () => setN(true), true);
	}
	return l;
}
const p = {
	appear: n.Enter,
	appearActive: n.EnterActive,
	appearDone: n.EnterDone,
	enter: n.Enter,
	enterActive: n.EnterActive,
	enterDone: n.EnterDone,
	exit: n.Exit,
	exitActive: n.ExitActive,
	exitDone: n.ExitDone,
};
const G_1 = i.forwardRef((props, ref) => {
	const { clipID, ...n } = props;
	const { loader, fnGetManifest } = Ni(clipID);
	return (
		<c.Ni loader={loader} fnGetManifest={fnGetManifest} mode={c.g_.Clips}>
			<C ref={ref} {...n} />
		</c.Ni>
	);
});
const H = i.forwardRef((props, ref) => {
	const { gameID, timelineID, startMS, durationMS, ...o } = props;
	const { loader, fnGetManifest } = Fc(gameID);
	let d = {
		m_strTimelineID: timelineID,
		m_nTimelineStartMS: startMS,
		m_nDurationMS: durationMS,
	};
	return (
		<c.Ni
			loader={loader}
			fnGetManifest={fnGetManifest}
			mode={c.g_.Clips}
			playbackDefinition={d}
		>
			<C ref={ref} {...o} />
		</c.Ni>
	);
});
const C = i.forwardRef((props, ref) => {
	const { onReady, hidden } = props;
	const l = aO();
	const u = xE(l.StopPlayback, l.SetVideoElement);
	const d = Ue(ref, u);
	useEffect(() => l.GetGameRecordingVideo().SetMute(true), [l]);
	return (
		<video
			ref={d}
			className={A_1(n.ClipVideo, hidden && n.Hidden)}
			autoPlay
			playsInline
			muted
			onLoadedData={onReady}
		/>
	);
});
