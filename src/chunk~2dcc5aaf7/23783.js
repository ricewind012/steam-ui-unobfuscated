var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require("./90985.js");
var o = require("./84241.js");
var l = o;
var c = require("./15521.js");
var m = require("./35488.js");
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require(/*webcrack:missing*/ "./31084.js");
var A = require(/*webcrack:missing*/ "./88750.js");
var p = require("./5808.js");
var g = require(/*webcrack:missing*/ "./11131.js");
require(/*webcrack:missing*/ "./98995.js");
var h = require("./22639.js");
var C = require("./96593.js");
var _ = require("./18869.js");
var f = require(/*webcrack:missing*/ "./69164.js");
var b = require("./93681.js");
var y = require("./13688.js");
var S = require("./61175.js");
var w = require(/*webcrack:missing*/ "./4690.js");
import { Localize } from "../../actual_src/utils/localization.js";
var v = require(/*webcrack:missing*/ "./52451.js");
var I = require(/*webcrack:missing*/ "./72476.js");
import { Timestamp } from "../../actual_src/utils/time.js";
var M = require("./91486.js");
export function TF(e) {
	const t = (0, a.q3)(() => s.l.playbackState);
	const { ownerWindow: r } = (0, g.R7)();
	const [o, d] = (0, v.uN)(t?.nVolume, (e) => SteamClient.Music.SetVolume(e));
	const A = !t || t.uSoundtrackAppId != e.appid;
	const h =
		t?.ePlaybackStatus == c.f.AudioPlayback_Idle ||
		t?.ePlaybackStatus == c.f.AudioPlayback_Paused ||
		A;
	const C = (0, I.Qn)();
	let _;
	let b;
	let y = 2;
	switch (t?.eRepeatStatus) {
		default:
		case 0:
			_ = n.createElement(m.Repeat, null);
			y = 1;
			b = false;
			break;
		case 1:
			_ = n.createElement(m.Repeat, null);
			y = 2;
			b = true;
			break;
		case 2:
			_ = n.createElement(m.RepeatOne, null);
			y = 0;
			b = true;
	}
	const S = e.bFloatingControls;
	const B = {
		onClick: () => SteamClient.Music.ToggleMuteVolume(),
	};
	return n.createElement(
		"div",
		{
			className: (0, u.A)(
				l.ControlBlock,
				A && l.NotPlaying,
				S && l.FloatingLayout,
			),
		},
		n.createElement(k, {
			playbackState: t,
			disabled: A,
		}),
		n.createElement(
			"div",
			{
				className: (0, u.A)(l.ControlsAndVolume, S && l.Row),
			},
			n.createElement(
				f.Z,
				{
					className: l.Controls,
					navEntryPreferPosition: w.iU.PREFERRED_CHILD,
				},
				n.createElement(
					R,
					{
						focusable: !A,
						disabled: A,
						active: t?.bShuffle,
						onClick: () => SteamClient.Music.SetPlayingShuffled(!t?.bShuffle),
					},
					n.createElement(m.Shuffle, null),
				),
				n.createElement(
					R,
					{
						focusable: !A,
						disabled: A,
						active: true,
						onClick: () => SteamClient.Music.PlayPrevious(),
					},
					n.createElement(m.PrevTrack, null),
				),
				n.createElement(
					R,
					{
						active: true,
						preferredFocus: true,
						size: "large",
						onClick: () => {
							if (A) {
								(0, p.aF)(e.appid, r);
							} else {
								SteamClient.Music.TogglePlayPause();
							}
						},
					},
					h && n.createElement(m.Play, null),
					!h && n.createElement(m.Pause, null),
				),
				n.createElement(
					R,
					{
						focusable: !A,
						disabled: A,
						active: true,
						onClick: () => SteamClient.Music.PlayNext(),
					},
					n.createElement(m.NextTrack, null),
				),
				n.createElement(
					R,
					{
						focusable: !A,
						disabled: A,
						active: b,
						onClick: () => SteamClient.Music.SetPlayingRepeatStatus(y),
					},
					_,
				),
			),
			n.createElement(i.d3, {
				className: l.VolumeControl,
				icon:
					t?.nVolume == 0
						? n.createElement(m.VolumeMuted, {
								...B,
							})
						: n.createElement(m.Volume, {
								...B,
							}),
				disabled: A,
				value: o,
				showHandle: C,
				bottomSeparator: "none",
				min: 0,
				max: 100,
				step: 2,
				onChange: d,
			}),
		),
	);
}
function R(e) {
	const { size: t = "standard", onClick: r, className: a, active: s, ...o } = e;
	return n.createElement(
		i.$n,
		{
			onClick: (t) => {
				t.stopPropagation();
				e.onClick?.(t);
			},
			...o,
			className: (0, u.A)(
				l.IconButton,
				s && l.Active,
				t == "large" && l.Large,
				a,
			),
		},
		e.children,
	);
}
function k(e) {
	const { playbackState: t, disabled: r } = e;
	const [a, s] = n.useState();
	const o = (0, I.Qn)();
	n.useEffect(
		() => SteamClient.Music.RegisterForMusicPlaybackPosition(s).unregister,
		[],
	);
	let c = 0;
	let m = 100;
	let u = "";
	if (!r) {
		u = Timestamp(a);
		c = a;
		m = t.nLengthInMsec;
	}
	return n.createElement(
		f.Z,
		{
			className: l.Progress,
		},
		n.createElement(
			"div",
			{
				className: l.Text,
			},
			u,
		),
		n.createElement(i.A0, {
			disabled: e.disabled,
			value: c,
			showHandle: o,
			min: 0,
			max: m,
			step: 1000,
			onChangeComplete: (e) => {
				t = e;
				SteamClient.Music.SetPlaybackPosition(Math.round(t));
				return;
				var t;
			},
		}),
	);
}
export function tx() {
	const e = (0, a.q3)(() => s.l.playbackState);
	return {
		bShouldShowIcon: !!e,
		onShowControls: (e) => {
			(0, d.lX)(n.createElement(F, null), e, {
				bPreferPopTop: false,
				bDisablePopTop: false,
				bForcePopup: true,
			});
		},
		playbackState: e,
	};
}
export function pw(e) {
	const { appid: t } = e;
	const r = (0, _.br)();
	const s = (0, C.Co)(t);
	const o = s?.display_name;
	const c = (0, a.q3)(() => h.ET.GetTrackDetails(t, e.currentTrack));
	const m = c?.displayName;
	return n.createElement(
		i.cK,
		{
			className: l.CurrentTrack,
			onClick: () => {
				r.App(t);
			},
		},
		n.createElement(
			"div",
			{
				className: l.CurrentTrackContainer,
			},
			n.createElement(
				"div",
				{
					className: l.Art,
				},
				n.createElement(M.z, {
					app: s,
					eAssetType: 7,
				}),
			),
			n.createElement(
				"div",
				{
					className: l.Details,
				},
				n.createElement(
					"div",
					{
						className: l.SoundtrackName,
					},
					n.createElement(b.r, null, o),
				),
				n.createElement(
					"div",
					{
						className: l.TrackName,
					},
					n.createElement(b.r, null, m),
				),
			),
		),
	);
}
function F(e) {
	const t = (0, a.q3)(() => s.l.playbackState);
	if (t && t.uSoundtrackAppId) {
		return n.createElement(
			A.tz,
			null,
			n.createElement(
				"div",
				{
					className: l.ContextMenu,
				},
				n.createElement(TF, {
					appid: t.uSoundtrackAppId,
				}),
				n.createElement(pw, {
					appid: t.uSoundtrackAppId,
					currentTrack: t.nActiveTrack,
				}),
			),
		);
	} else {
		return null;
	}
}
export function SK() {
	const e = (0, a.q3)(() => s.l.playbackState);
	const t = (0, y.k1)();
	return n.createElement(
		f.Z,
		{
			className: l.QuickAccess,
		},
		e?.uSoundtrackAppId &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(pw, {
					appid: e.uSoundtrackAppId,
					currentTrack: e.nActiveTrack,
				}),
				n.createElement(TF, {
					appid: e.uSoundtrackAppId,
				}),
			),
		n.createElement(
			i.$n,
			{
				onClick: () => {
					S.n6.SelectGamepadCollectionsAppFilterOption(0, 8192, true);
					t.LibraryTab("Soundtracks");
				},
			},
			(0, Localize)("#SoundtrackControls_Browse"),
		),
	);
}
