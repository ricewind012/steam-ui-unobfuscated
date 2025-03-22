import * as n from /*webcrack:missing*/ "./63696.js";
import * as i from "./8240.js";
import * as a from "./82153.js";
import * as s from "./91720.js";
import * as o from "./92374.js";
import * as l from "./99998.js";
import * as c from "./28220.js";
import * as m from "./22588.js";
import * as u from "./29516.js";
import * as d from /*webcrack:missing*/ "./90765.js";
import * as A from "./4069.js";
import * as p from "./69767.js";
import * as g from "./8717.js";
import * as h from "./35488.js";
import * as C from /*webcrack:missing*/ "./90095.js";
import * as _ from /*webcrack:missing*/ "./58254.js";
import * as f from "./49508.js";
import * as b from "./32676.js";
export default (function (e) {
	return null;
});
export function GameRecordingSelectedClip(e) {
	const { initialGameID: t, initialPlaybackDefinition: r } = e;
	const { rgApps: a } = (0, s.z)();
	const o = (0, b.useGPUAccelErrorDialog)();
	let l = !a || a.length == 0;
	return n.createElement(
		"div",
		{
			className: i.GameRecordingDesktopDialog,
		},
		o,
		!l &&
			n.createElement(
				"div",
				{
					className: (0, d.A)(i.MainContent, i.NoHeaderName, i.ClipHeader),
				},
				n.createElement(w, {
					gameID: t,
					initialPlaybackDefinition: r,
				}),
			),
	);
}
function w(e) {
	const { gameID: t, initialPlaybackDefinition: r } = e;
	const { loader: i, fnGetManifest: a } = (0, m.Fc)(t);
	const l = (0, p.Y5)(t);
	const c = (0, A.useGameRecordingSetting)();
	const u = (0, s.$O)(t);
	return n.createElement(
		o.Ni,
		{
			loader: i,
			fnGetManifest: a,
			mode: o.g_.Background,
			recordingSetting: c,
			recordingState: l,
			clipSummaries: u,
			playbackDefinition: r,
		},
		n.createElement(B, {
			gameID: t,
			loader: i,
		}),
	);
}
function B(e) {
	const { loader: t, gameID: r } = e;
	const i = (0, s.$O)(r);
	return n.createElement(
		a.p,
		null,
		n.createElement(
			u.tB,
			{
				loader: t,
			},
			n.createElement(l.Sd, {
				loader: t,
				clipSummaries: i,
			}),
			n.createElement(v, {
				loader: t,
			}),
		),
	);
}
function v(e) {
	const { loader: t } = e;
	const r = (function (e, t) {
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
				(function (e, t) {
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
	})(t, (0, o.aO)());
	const [a, s] = n.useState(false);
	const l = () => s(true);
	const c = () => s(false);
	const [m] = (0, o.Bl)();
	const u = a ? r : m;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			E,
			{
				className: i.PhaseInfoOverlay,
				visible: !!u,
			},
			n.createElement(I, {
				phase: u,
				gameID: t.GetGameID(),
			}),
		),
		!!r &&
			n.createElement(
				g.D,
				{
					target: "MediaManagerOpenedItemHeaderControls",
				},
				n.createElement(h.Information, {
					className: i.PhaseInfo,
					onMouseOver: l,
					onMouseLeave: c,
					onFocus: l,
					onBlur: c,
				}),
			),
	);
}
function I(e) {
	const { phase: t, gameID: r } = e;
	if (!t) {
		return null;
	}
	const { entry: i, timeline: a } = t;
	if (!i || !a) {
		return null;
	}
	const s = a.metadata.date_recorded + Math.floor(parseInt(i.time) / 1000);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(f.eg, {
			time: s,
		}),
		n.createElement(c.x, {
			gameID: r,
			tags: i.tags,
			attributes: i.attributes,
		}),
	);
}
function E(e) {
	const { visible: t, children: r, className: a } = e;
	const s = n.useRef(undefined);
	return n.createElement(
		_.A,
		{
			unmountOnExit: true,
			timeout: 200,
			in: t,
			nodeRef: s,
			classNames: {
				enter: i.FadeEnter,
				enterActive: i.FadeEnterActive,
				exit: i.FadeExit,
				exitActive: i.FadeExitActive,
			},
		},
		n.createElement(
			"div",
			{
				ref: s,
				className: a,
			},
			r,
		),
	);
}
