import * as n from /*webcrack:missing*/ "./34629.js";
import * as i from /*webcrack:missing*/ "./89193.js";
import * as a from /*webcrack:missing*/ "./41230.js";
import * as s from /*webcrack:missing*/ "./63696.js";
import * as o from /*webcrack:missing*/ "./31084.js";
import * as l from /*webcrack:missing*/ "./45328.js";
import * as c from "./23024.js";
import * as m from "./5859.js";
import * as u from "./65016.js";
import * as d from /*webcrack:missing*/ "./88750.js";
import * as A from "./27337.js";
import * as p from "./80493.js";
import * as g from "./59848.js";
import * as h from "./29381.js";
import * as C from /*webcrack:missing*/ "./50376.js";
import * as _ from "./43397.js";
import * as f from /*webcrack:missing*/ "./79769.js";
import * as b from /*webcrack:missing*/ "./90765.js";
import * as y from /*webcrack:missing*/ "./54644.js";
import * as S from /*webcrack:missing*/ "./46108.js";
import * as w from "./34428.js";
import * as B from /*webcrack:missing*/ "./31958.js";
import * as v from /*webcrack:missing*/ "./52451.js";
import * as I from /*webcrack:missing*/ "./72476.js";
import * as E from "./21866.js";
import * as M from "./59715.js";
import * as T from "./86721.js";
var R = T;
import * as k from /*webcrack:missing*/ "./26853.js";
function D() {
	return s.createElement(
		"div",
		{
			className: "STV_ReplayBanner",
		},
		(0, S.we)("#DASHPlayerControls_IsReplay"),
	);
}
const N = (0, a.PA)((e) => {
	let t = e.video;
	if (t && (t.IsBroadcastClip() || t.IsBroadcastVOD())) {
		return null;
	}
	let r = c.fK.Loading;
	let n = "";
	if (t) {
		r = t.GetBroadcastState();
		n = t.GetBroadcastStateDescription();
		let e = t.IsBuffering();
		if (r == c.fK.Unlocking) {
			r = c.fK.Loading;
			n = "";
		}
		if (r == c.fK.Ready && e) {
			r = c.fK.Loading;
			n = "";
		}
	}
	if (t && r != c.fK.Error && t.GetUserInputNeeded()) {
		return null;
	}
	if (r == c.fK.Ready) {
		return null;
	}
	let i = r == c.fK.Loading;
	return s.createElement(
		"div",
		{
			className: "BroadcastVideoWatchState",
			style: {
				filter: "hue-rotate(40deg)",
			},
		},
		i && s.createElement(k.t, null),
		!i &&
			s.createElement(
				"div",
				{
					className: "BroadcastVideoWatchState_Text",
				},
				n,
			),
	);
});
class F extends s.Component {
	OnClick() {
		c.BroadcastWatchStore.UserInputClickVideo(this.props.video);
	}
	render() {
		return s.createElement(
			"div",
			{
				className: "BroadcastVideoUserInputNeeded",
				onClick: this.OnClick,
			},
			s.createElement(C.jGG, null),
			s.createElement(
				"span",
				null,
				(0, S.we)("#DASHPlayerControls_ClickToPlay"),
			),
		);
	}
}
(0, n.Cg)([v.oI], F.prototype, "OnClick", null);
let G = class extends s.Component {
	constructor(e) {
		super(e);
	}
	HideStats() {
		if (this.props.closeStats) {
			this.props.closeStats();
		}
	}
	render() {
		let e = this.props.stats;
		return s.createElement(
			"div",
			{
				className: "dash_video_stats",
			},
			s.createElement(
				"button",
				{
					className: "dash_stat_close_button",
					onClick: this.HideStats,
				},
				s.createElement(C.sED, null),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_BufferingResolution"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetBufferingResolutionToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_PlaybackResolution"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetPlaybackResolutionToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_HtmlResolution"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetHTMLVideoResolutionToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_ContentServer"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetContentServerToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_StallEvents"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetStalledEventsToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_FailedDownloads"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetFailedDownloadsToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_TimeToFirstFrame"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetTimeToFirstFrameToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_PlaybackRate"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetPlaybackRateForDisplay(),
				),
			),
			s.createElement(O, {
				stats: e,
			}),
		);
	}
};
(0, n.Cg)([v.oI], G.prototype, "HideStats", null);
G = (0, n.Cg)([a.PA], G);
let O = class extends s.Component {
	constructor(e) {
		super(e);
	}
	createBufferedRange(e) {
		let t = this.props.stats;
		let r = [];
		let n = e ? "vidbuf" : "audbuf";
		let i = e ? t.GetNumBufferedVideoRanges() : t.GetNumBufferedAudioRanges();
		if (i > 0) {
			for (let a = 0; a < i; ++a) {
				let i = (0, S.we)(
					e
						? "#DASHPlayerStats_VideoBufferRange"
						: "#DASHPlayerStats_AudioBufferRange",
					a,
				);
				let o = e
					? t.GetBufferedVideoSegmentForDisplay(a)
					: t.GetBufferedAudioSegmentForDisplay(a);
				r.push(
					s.createElement(
						"div",
						{
							key: n + a,
						},
						i,
						" ",
						s.createElement(
							"span",
							{
								className: "videoStatsValue",
							},
							o,
						),
					),
				);
			}
		} else {
			let t = (0, S.we)(
				e
					? "#DASHPlayerStats_VideoNoRangeInformation"
					: "#DASHPlayerStats_AudioNoRangeInformation",
			);
			r.push(
				s.createElement(
					"div",
					{
						key: n + "none",
					},
					t,
				),
			);
		}
		return r;
	}
	render() {
		let e = this.props.stats;
		return s.createElement(
			"div",
			{
				className: "dash_video_quick_stats",
			},
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_BytesReceived"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetBytesReceivedToDisplay(),
				),
			),
			this.props.stats.BHasFrameInformation() &&
				s.createElement(
					"div",
					null,
					(0, S.we)("#DASHPlayerStats_DroppedFrames"),
					" ",
					s.createElement(
						"span",
						{
							className: "videoStatsValue",
						},
						e.GetDroppedFramesToDisplay(),
					),
				),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_VideoBuffered"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetVideoBufferedToDisplay(),
					" ",
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_AudioBuffered"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetAudioBufferedToDisplay(),
					" ",
				),
			),
			this.createBufferedRange(true),
			this.createBufferedRange(false),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_BandwidthRequired"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetBandwidthRequiredToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_BandwidthVideo"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetBandwithVideoToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_BandwidthNums"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetBandwidthStatsToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_DownloadNums"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetDownloadTimeStatsToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_ActiveDownloads"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetActiveDownloadsToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_VideoDownloadProgress"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetVideoDownloadProgressToDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_DroppingFrames"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetPersistentFrameDropsForDisplay(),
				),
			),
			s.createElement(
				"div",
				null,
				(0, S.we)("#DASHPlayerStats_CurrentFPS"),
				" ",
				s.createElement(
					"span",
					{
						className: "videoStatsValue",
					},
					e.GetCurrentFPSForDisplay(),
				),
			),
		);
	}
};
O = (0, n.Cg)([a.PA], O);
import * as P from /*webcrack:missing*/ "./32263.js";
class L extends s.Component {
	m_elSettingsButton;
	m_SettingsButtonPos;
	m_elClickListener;
	m_elSettingsPanel;
	m_elSubtitlesButton = s.createRef();
	m_elSubtitlesPanel = s.createRef();
	m_SubtitlesButtonPos;
	constructor(e) {
		super(e);
		this.state = {
			bSettingsOpen: false,
			bSubtitlesOpen: false,
		};
	}
	OnVideoControlClick(e) {
		this.setState({
			bSettingsOpen: !this.state.bSettingsOpen,
		});
		this.m_SettingsButtonPos = [
			this.m_elSettingsButton.offsetLeft,
			this.m_elSettingsButton.offsetTop,
		];
		this.m_elClickListener = e.currentTarget.ownerDocument.defaultView;
		this.m_elClickListener.addEventListener("mouseup", this.OnMouseUp, true);
	}
	OnSubtitlesClick(e) {
		this.setState({
			bSubtitlesOpen: !this.state.bSubtitlesOpen,
		});
		this.m_SubtitlesButtonPos = [
			this.m_elSubtitlesButton.current.offsetLeft,
			this.m_elSubtitlesButton.current.offsetTop,
		];
		this.m_elClickListener = e.currentTarget.ownerDocument.defaultView;
		this.m_elClickListener.addEventListener("mouseup", this.OnMouseUp, true);
	}
	OnMouseUp(e) {
		this.m_elClickListener.removeEventListener("mouseup", this.OnMouseUp, true);
		if (!(0, y.id)(this.m_elSettingsPanel, e.target)) {
			this.setState({
				bSettingsOpen: false,
			});
		}
		if (!(0, y.id)(this.m_elSubtitlesPanel.current, e.target)) {
			this.setState({
				bSubtitlesOpen: false,
			});
		}
	}
	bindSettingsButton(e) {
		this.m_elSettingsButton = e;
	}
	BindSettingsPanel(e) {
		this.m_elSettingsPanel = e;
	}
	OnShowStats(e) {
		this.props.onShowStats(e);
		this.setState({
			bSettingsOpen: !this.state.bSettingsOpen,
		});
	}
	render() {
		let e = false;
		let t = false;
		const { video: r, actions: n } = this.props;
		let i;
		let a;
		let o = 0;
		let l = s.createElement("div", {
			key: "separator",
			className: "settingsMenuSeparator",
		});
		if (this.state.bSettingsOpen) {
			e = true;
			i = this.props.video.GetVideoRepresentations();
			a = i.map((e) =>
				s.createElement(
					P.n,
					{
						key: e.id,
						onClick: () => {
							this.props.video.SetVideoRepresentation(e);
							this.setState({
								bSettingsOpen: !this.state.bSettingsOpen,
							});
						},
						bChecked: e.selected,
					},
					e.displayName,
				),
			);
			a.push(l);
			a.push(
				s.createElement(
					P.D,
					{
						key: "statsToggle",
						onClick: this.OnShowStats,
					},
					(0, S.we)("#Broadcast_VideoContext_ToggleStats"),
					"\t",
				),
			);
			o = 0 - (a.length * 21 + 32);
		}
		if (this.state.bSubtitlesOpen) {
			t = true;
			a = [];
			a.push(
				s.createElement(
					P.n,
					{
						key: "none",
						onClick: () => {
							this.props.video.SetSubtitles(null);
							this.setState({
								bSubtitlesOpen: !this.state.bSubtitlesOpen,
							});
						},
						className: "NoSubtitles",
						bChecked: false,
					},
					(0, S.we)("#Broadcast_None"),
				),
			);
			for (let e = 0; e < this.props.video.ListSubtitles().length; e++) {
				const t = this.props.video.ListSubtitles()[e];
				a.push(
					s.createElement(
						P.n,
						{
							key: t.language,
							onClick: () => {
								this.props.video.SetSubtitles(t.language);
								this.setState({
									bSubtitlesOpen: !this.state.bSubtitlesOpen,
								});
							},
							bChecked: t.mode === "showing",
						},
						t.label,
					),
				);
			}
			o = -292;
		}
		const c = this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
		return s.createElement(
			"div",
			{
				className: "STV_BroadcastSettings",
			},
			c &&
				s.createElement(
					"div",
					{
						className:
							"videoControlButton" + (c ? " ClosedCaptionsActive" : ""),
						onClick: this.OnSubtitlesClick,
						ref: this.m_elSubtitlesButton,
					},
					s.createElement(C.N8C, null),
				),
			s.createElement(
				"div",
				{
					className:
						"videoControlButton VideoSettings " +
						(e ? " VideoSettingsOpen" : ""),
					onClick: this.OnVideoControlClick,
					ref: this.bindSettingsButton,
				},
				s.createElement(C.wB_, null),
			),
			s.createElement(z, {
				video: r,
			}),
			n &&
				n.map((e) =>
					s.createElement(
						"div",
						{
							key: e.key,
							className: "videoControlButton videoControlFitWidth",
						},
						e,
					),
				),
			e &&
				s.createElement(
					"div",
					{
						ref: this.BindSettingsPanel,
						className: "STV_BroadcastSettingsPanel",
						style: {
							left: this.m_SettingsButtonPos[0],
							top: this.m_SettingsButtonPos[1],
							marginTop: o,
						},
					},
					s.createElement(
						"div",
						{
							className: "STV_BroadcastSettingsMenuItems",
						},
						a,
					),
				),
			t &&
				s.createElement(
					"div",
					{
						ref: this.m_elSubtitlesPanel,
						className: "STV_BroadcastSettingsPanel SubtitlesMenu",
						style: {
							maxHeight: "260px",
							left: this.m_SubtitlesButtonPos[0],
							top: this.m_SubtitlesButtonPos[1],
							marginTop: o,
						},
					},
					s.createElement(
						"div",
						{
							className: "STV_BroadcastSettingsMenuItems",
						},
						a,
					),
				),
		);
	}
}
(0, n.Cg)([v.oI], L.prototype, "OnVideoControlClick", null);
(0, n.Cg)([v.oI], L.prototype, "OnSubtitlesClick", null);
(0, n.Cg)([v.oI], L.prototype, "OnMouseUp", null);
(0, n.Cg)([v.oI], L.prototype, "bindSettingsButton", null);
(0, n.Cg)([v.oI], L.prototype, "BindSettingsPanel", null);
(0, n.Cg)([v.oI], L.prototype, "OnShowStats", null);
let z = class extends s.Component {
	constructor(e) {
		super(e);
		(0, i.Gn)(this);
	}
	k_nHideSliderTimeout = 1500;
	m_bShowSlider = true;
	m_schHideSlider = new f.LU();
	m_bChildDragging = false;
	m_bMouseOver = false;
	componentWillUnmount() {
		this.m_schHideSlider.Cancel();
	}
	ToggleMute() {
		let e = this.props.video;
		let t = e.IsMuted();
		e.SetMute(!t);
		if (e.GetVolume() < 0.01) {
			e.SetVolume(0.5);
		}
	}
	OnMouseEnter(e) {
		this.m_bShowSlider = true;
		this.m_bMouseOver = true;
		this.m_schHideSlider.Cancel();
	}
	OnMouseLeave(e) {
		this.m_bMouseOver = false;
		this.ScheduleHide();
	}
	OnChildDrag(e) {
		this.m_bChildDragging = e;
		this.ScheduleHide();
	}
	ScheduleHide() {
		if (!this.m_bMouseOver && !this.m_bChildDragging) {
			this.m_schHideSlider.Schedule(
				this.k_nHideSliderTimeout,
				() => (this.m_bShowSlider = true),
			);
		}
	}
	render() {
		let e = this.props.video;
		let t = e.IsMuted();
		let r = e.GetVolume() * 100;
		let n = "videoControlButton";
		if (r > 65) {
			n += " HighestVolume";
		} else if (r > 45) {
			n += " HighVolume";
		} else if (r < 46 && r > 24) {
			n += " MedVolume";
		} else if (r < 25) {
			n += " LowVolume";
		}
		let i = "BroadcastVolumeControl";
		if (this.m_bShowSlider) {
			i += " ShowVolumeSlider";
		}
		if (t) {
			i += " muted";
		}
		return s.createElement(
			"div",
			{
				className: i,
				onMouseEnter: this.OnMouseEnter,
				onMouseLeave: this.OnMouseLeave,
			},
			s.createElement(
				"div",
				{
					className: "BroadcastVolumeControl_FixedLayout",
				},
				s.createElement(
					"div",
					{
						className: n,
						onClick: this.ToggleMute,
					},
					s.createElement(C.fSs, null),
				),
				s.createElement(x, {
					video: e,
					onDrag: this.OnChildDrag,
				}),
			),
		);
	}
};
(0, n.Cg)([i.sH], z.prototype, "m_bShowSlider", undefined);
(0, n.Cg)([v.oI], z.prototype, "ToggleMute", null);
(0, n.Cg)([v.oI], z.prototype, "OnMouseEnter", null);
(0, n.Cg)([v.oI], z.prototype, "OnMouseLeave", null);
(0, n.Cg)([v.oI], z.prototype, "OnChildDrag", null);
z = (0, n.Cg)([a.PA], z);
let x = class extends s.Component {
	constructor(e) {
		super(e);
		(0, i.Gn)(this);
	}
	m_elSlider = null;
	m_nVolumeStartOfDrag = 0;
	OnMouseDown(e) {
		let t = e.currentTarget;
		this.m_elSlider = t;
		this.m_nVolumeStartOfDrag = this.props.video.GetVolume();
		this.SetVolumeWithCoord(t, e.clientX);
		t.ownerDocument.defaultView.addEventListener("mousemove", this.OnMouseMove);
		t.ownerDocument.defaultView.addEventListener("mouseup", this.OnMouseUp);
		this.props.onDrag(true);
	}
	OnMouseMove(e) {
		if (this.m_elSlider) {
			this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
		}
	}
	OnMouseUp(e) {
		if (!this.m_elSlider) {
			return;
		}
		this.SetVolumeWithCoord(this.m_elSlider, e.clientX);
		let t = this.props.video;
		if (t.IsMuted()) {
			t.SetVolume(this.m_nVolumeStartOfDrag);
		}
		this.m_elSlider.ownerDocument.defaultView.removeEventListener(
			"mousemove",
			this.OnMouseMove,
		);
		this.m_elSlider.ownerDocument.defaultView.removeEventListener(
			"mouseup",
			this.OnMouseUp,
		);
		this.m_nVolumeStartOfDrag = 0;
		this.m_elSlider = null;
		this.props.onDrag(false);
	}
	SetVolumeWithCoord(e, t) {
		let r = e.getBoundingClientRect();
		let n = B.Fu(t, r.left, r.right, 0, 1);
		let i = B.OQ(n, 0, 1);
		let a = this.props.video;
		a.SetMute(n < 0.01);
		a.SetVolume(i);
	}
	render() {
		let e = this.props.video;
		let t = e.GetVolume() * 100;
		if (e.IsMuted()) {
			t = 0;
		}
		let r = {
			left: `${t}%`,
		};
		let n = {
			width: `${t}%`,
		};
		return s.createElement(
			"div",
			{
				className: "BroadcastVolumeSlider",
				onMouseDown: this.OnMouseDown,
			},
			s.createElement("div", {
				className: "BroadcastVolumeSlider_Track",
			}),
			s.createElement("div", {
				className: "BroadcastVolumeSlider_Fill",
				style: n,
			}),
			s.createElement("div", {
				className: "BroadcastVolumeSlider_Thumb",
				style: r,
			}),
		);
	}
};
(0, n.Cg)([v.oI], x.prototype, "OnMouseDown", null);
(0, n.Cg)([v.oI], x.prototype, "OnMouseMove", null);
(0, n.Cg)([v.oI], x.prototype, "OnMouseUp", null);
(0, n.Cg)([i.XI], x.prototype, "SetVolumeWithCoord", null);
x = (0, n.Cg)([a.PA], x);
import * as U from "./92008.js";
const W = 15;
let V = class extends s.Component {
	m_schHideControls = new f.LU();
	m_schUnmountControls = new f.LU();
	m_elVideo = null;
	m_elBroadcastPlayer = null;
	m_bMouseDown = false;
	m_elMouseDown = null;
	m_listeners = new f.Ji();
	constructor(e) {
		super(e);
		this.state = {
			bMountControls: false,
			bControlsVisible: false,
			bShowStats: false,
			video: null,
			nResizedHeight: null,
			bFullscreen: false,
		};
	}
	StopVideo() {
		let e = this.state.video;
		if (e) {
			c.BroadcastWatchStore.StopVideo(e);
			this.setState({
				video: null,
			});
			this.props.fnSetBroadcastVideo?.(null);
		}
	}
	IsMuted() {
		let e = this.state.video;
		return !e || e.IsMuted();
	}
	StopPlaybackTillUserInput() {
		let e = this.state.video;
		if (e) {
			e.StopPlaybackTillUserInput();
		}
	}
	componentDidUpdate(e, t) {
		if (!t.bMountControls && this.state.bMountControls) {
			setTimeout(() => {
				this.setState((e) => ({
					bControlsVisible: e.bMountControls,
				}));
			}, 15);
		} else if (
			t.bControlsVisible &&
			!this.state.bControlsVisible &&
			this.state.video &&
			!this.state.video.IsPaused()
		) {
			this.m_schUnmountControls.Schedule(2000, this.UmountControls);
		}
		if (this.props.steamIDBroadcast !== e.steamIDBroadcast) {
			this.BindVideoRef(this.m_elVideo);
		}
		if (
			!!this.props.nAppIDVOD &&
			(t.strInitialCapsuleImageUrl === undefined ||
				e.nAppIDVOD != this.props.nAppIDVOD)
		) {
			m.A.Get()
				.QueueAppRequest(this.props.nAppIDVOD, {
					include_assets: true,
					include_trailers: true,
				})
				.then(() => {
					const e = m.A.Get().GetApp(this.props.nAppIDVOD);
					const t = e?.GetAssets().GetMainCapsuleURL() || "";
					this.setState({
						strInitialCapsuleImageUrl: t,
					});
				});
		}
	}
	componentWillUnmount() {
		this.m_listeners.Unregister();
		this.m_schHideControls.Cancel();
		this.m_schUnmountControls.Cancel();
		this.StopVideo();
	}
	BindBroadcastPlayerRef(e) {
		this.m_listeners.Unregister();
		this.m_elBroadcastPlayer = e;
		if (e) {
			this.m_listeners.AddEventListener(
				e,
				"fullscreenchange",
				this.OnFullscreenChange,
			);
			this.m_listeners.AddEventListener(
				e,
				"mozfullscreenchange",
				this.OnFullscreenChange,
			);
			this.m_listeners.AddEventListener(
				e,
				"webkitfullscreenchange",
				this.OnFullscreenChange,
			);
			this.m_listeners.AddEventListener(
				e,
				"msfullscreenchange",
				this.OnFullscreenChange,
			);
		}
	}
	BindVideoRef(e) {
		let t;
		this.StopVideo();
		if (this.props.steamIDBroadcast) {
			if (e) {
				t = c.BroadcastWatchStore.CreateBroadcastVideo(
					e,
					this.props.steamIDBroadcast,
					this.props.watchLocation,
					this.props.bWebRTC,
				);
			}
		} else if (this.props.broadcastClipID) {
			if (e) {
				t = c.BroadcastWatchStore.CreateClipVideo(
					e,
					this.props.broadcastClipID,
					this.props.watchLocation,
				);
			}
		} else if (this.props.nAppIDVOD && e) {
			t = c.BroadcastWatchStore.CreateVODVideo(
				e,
				this.props.nAppIDVOD,
				this.props.watchLocation,
			);
			if (this.props.fnOnVideoEnd) {
				t.SetOnVideoCallback(this.props.fnOnVideoEnd);
			}
		}
		if (t) {
			if (this.props.bStartMuted) {
				t.SetMute(true);
			}
			if (this.props.bStartWithSubtitles) {
				t.SetStartWithSubtitles(true);
			}
			if (this.props.bStartPaused) {
				t.StopPlaybackTillUserInput();
			} else {
				t.Play();
			}
		}
		this.setState({
			video: t,
		});
		this.props.fnSetBroadcastVideo?.(t);
		this.m_elVideo = e;
	}
	OnMouseDown(e) {
		this.m_bMouseDown = true;
		this.m_elMouseDown = e.currentTarget;
		this.m_elMouseDown.ownerDocument.defaultView.addEventListener(
			"mouseup",
			this.OnMouseUp,
		);
	}
	OnMouseUp(e) {
		this.m_bMouseDown = false;
		this.m_elMouseDown.ownerDocument.defaultView.removeEventListener(
			"mouseup",
			this.OnMouseUp,
		);
		this.m_schHideControls.Schedule(3200, this.HideControls);
	}
	OnMouseMove(e) {
		this.m_schHideControls.Cancel();
		this.m_schUnmountControls.Cancel();
		if (this.state.bMountControls) {
			if (!this.state.bControlsVisible) {
				this.setState({
					bControlsVisible: true,
				});
			}
		} else {
			this.setState({
				bMountControls: true,
			});
		}
		this.m_schHideControls.Schedule(3200, this.HideControls);
	}
	OnMouseLeave(e) {
		this.HideControls();
	}
	HideControls() {
		if (this.state.bControlsVisible && !this.m_bMouseDown) {
			this.setState({
				bControlsVisible: false,
			});
		}
	}
	UmountControls() {
		this.setState((e) => {
			if (!e.bControlsVisible && e.bMountControls) {
				return {
					bMountControls: false,
				};
			}
		});
	}
	ShowStatsView() {
		let e = this.state.video;
		if (e) {
			if (!this.state.bShowStats) {
				this.setState({
					bShowStats: true,
				});
				e.SetStatsViewIsVisible(true);
			}
		}
	}
	OnContextMenu(e) {
		if (!this.state.bFullscreen) {
			(0, o.lX)(s.createElement(d.tz, null, this.GetContextMenuItems()), e);
			e.preventDefault();
		}
	}
	ToggleStatsView(e) {
		let t = !this.state.bShowStats;
		this.setState({
			bShowStats: t,
		});
		let r = this.state.video;
		if (r) {
			r.SetStatsViewIsVisible(t);
		}
	}
	ShowStorePage(e) {
		let t = this.state.video;
		if (!t || !this.props.onOpenLinkInNewWindow) {
			return;
		}
		let r = t.GetBroadcastInfo();
		if (!r) {
			return;
		}
		let n = (0, l.k2)(`${I.TS.STORE_BASE_URL}app/${r.m_strAppId}`);
		this.props.onOpenLinkInNewWindow(e, n);
		e.stopPropagation();
	}
	GetContextMenuItems() {
		let e = [];
		let t = this.state.video;
		if (!t) {
			return e;
		}
		let r = t.GetBroadcastInfo();
		e.push(
			s.createElement(
				d.IK,
				{
					key: "togglestats",
					bChecked: this.state.bShowStats,
					onSelected: (e) => {
						this.ToggleStatsView(e);
					},
				},
				(0, S.we)("#Broadcast_VideoContext_ToggleStats"),
			),
		);
		if (r && r.m_strAppId != "0" && Number.parseInt(r.m_strAppId) != c.fO) {
			e.push(
				s.createElement(
					d.kt,
					{
						key: "visitstore",
						onSelected: (e) => {
							this.ShowStorePage(e);
						},
					},
					(0, S.we)("#Broadcast_VideoContext_OpenStore"),
				),
			);
		}
		return e;
	}
	CloseStats() {
		let e = this.state.video;
		if (e && this.state.bShowStats) {
			this.setState({
				bShowStats: false,
			});
			e.SetStatsViewIsVisible(false);
		}
	}
	OnToggleFullscreen() {
		if (this.m_elBroadcastPlayer) {
			if ((0, y.ww)(this.m_elBroadcastPlayer)) {
				(0, y.MS)(this.m_elBroadcastPlayer);
			} else {
				(0, y.tl)(this.m_elBroadcastPlayer, this.m_elVideo);
			}
		}
	}
	OnFullscreenChange(e) {
		if (!this.m_elBroadcastPlayer) {
			return;
		}
		let t = (0, y.ww)(this.m_elBroadcastPlayer);
		this.setState({
			bFullscreen: t,
		});
	}
	BHideVideoControls() {
		let e = this.state.video;
		return (
			!e ||
			!!e.GetUserInputNeeded() ||
			c.BroadcastWatchStore.GetBroadcastState(e) == c.fK.Error
		);
	}
	render() {
		const e = this.state.video;
		const t = e && e.IsPaused();
		const r = e && e.BHasDASHStats() && this.state.bShowStats;
		const n = Boolean(e && e.IsReplay());
		const i = this.state.bMountControls;
		const a = this.state.bControlsVisible || t;
		const o = e && e.GetUserInputNeeded();
		const l = e?.IsBroadcastVOD() && o && this.state.strInitialCapsuleImageUrl;
		let c = "videoContainer";
		if (!a) {
			c += " HidePlayerControls";
		}
		if (t) {
			c += " VideoPaused";
		}
		if (this.state.bFullscreen) {
			c += " fullscreenVideo";
		}
		if (this.props.classes) {
			c += " " + this.props.classes;
		}
		let m = [];
		if (!this.state.bFullscreen && this.props.actions) {
			m = m.concat(this.props.actions);
		}
		if (!this.state.bFullscreen && this.props.onTheaterMode) {
			m.push(
				s.createElement("div", {
					key: "ChatPosToggle ChatTheaterToggle",
					onClick: this.props.onTheaterMode,
					title: (0, S.we)("#Broadcast_View_Theater"),
					className: "BroadcastTheaterToggle",
				}),
			);
		}
		m.push(
			s.createElement("div", {
				key: "FullscreenToggle",
				title: (0, S.we)("#Broadcast_View_Fullscreen"),
				onClick: this.OnToggleFullscreen,
				className: "BroadcastFullscreenToggle",
			}),
		);
		const d = i && !this.BHideVideoControls();
		const A = i && !this.state.bFullscreen;
		const p =
			this.props.fnRenderBroadcastContext &&
			this.props.fnRenderBroadcastContext();
		return s.createElement(
			"div",
			{
				ref: this.BindBroadcastPlayerRef,
				className: c,
				onMouseMove: this.OnMouseMove,
				onClick: this.OnMouseMove,
				onMouseLeave: this.OnMouseLeave,
				onContextMenu: this.OnContextMenu,
				onMouseDown: this.OnMouseDown,
			},
			p &&
				s.createElement(
					"div",
					{
						className: R.BroadcastContext,
					},
					p,
				),
			n && s.createElement(D, null),
			this.props.showVideoBackgroundBlur &&
				s.createElement(u.m, {
					className: "videoBlur",
					elementRef: this.m_elVideo,
					updateRate: 33,
					width: 320,
					height: 180,
					reductionFactor: 10,
					blurAmount: 5,
				}),
			s.createElement("video", {
				className: "videoSrc",
				ref: this.BindVideoRef,
				muted: this.props.bMuted ?? true,
				autoPlay: true,
				playsInline: true,
				controls: false,
				onVolumeChange: this.props.fnVolumeChanged,
				onClick: this.props.fnVideoClick,
			}),
			this.props.linkRegions
				? s.createElement(LinkOverlay, {
						linkRegions: this.props.linkRegions,
						editMode: this.props.editMode,
						onSaveLinkRegions: this.props.onSaveLinkRegions,
					})
				: null,
			this.props.linkElement,
			l &&
				s.createElement("img", {
					loading: "lazy",
					className: (0, b.A)(
						R.BroadcastPlaceholderImg,
						"BroadcastPlaceholderImg",
					),
					src: this.state.strInitialCapsuleImageUrl,
				}),
			d &&
				s.createElement(j, {
					video: e,
					actions: m,
					onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
					onShowStats: this.ToggleStatsView,
					bIncludeClipEditor: this.props.bIncludeClipEditor,
				}),
			A &&
				s.createElement(q, {
					onClick: this.props.onRequestClose,
				}),
			r &&
				s.createElement(G, {
					stats: e.GetDASHPlayerStats(),
					closeStats: this.CloseStats,
				}),
			s.createElement(N, {
				video: e,
			}),
			o &&
				s.createElement(F, {
					video: e,
				}),
		);
	}
};
(0, n.Cg)([v.oI], V.prototype, "BindBroadcastPlayerRef", null);
(0, n.Cg)([v.oI], V.prototype, "BindVideoRef", null);
(0, n.Cg)([v.oI], V.prototype, "OnMouseDown", null);
(0, n.Cg)([v.oI], V.prototype, "OnMouseUp", null);
(0, n.Cg)([v.oI], V.prototype, "OnMouseMove", null);
(0, n.Cg)([v.oI], V.prototype, "OnMouseLeave", null);
(0, n.Cg)([v.oI], V.prototype, "HideControls", null);
(0, n.Cg)([v.oI], V.prototype, "UmountControls", null);
(0, n.Cg)([v.oI], V.prototype, "ShowStatsView", null);
(0, n.Cg)([v.oI], V.prototype, "OnContextMenu", null);
(0, n.Cg)([v.oI], V.prototype, "ToggleStatsView", null);
(0, n.Cg)([v.oI], V.prototype, "ShowStorePage", null);
(0, n.Cg)([v.oI], V.prototype, "CloseStats", null);
(0, n.Cg)([v.oI], V.prototype, "OnToggleFullscreen", null);
(0, n.Cg)([v.oI], V.prototype, "OnFullscreenChange", null);
V = (0, n.Cg)([a.PA], V);
export default V;
let j = class extends s.Component {
	render() {
		const { video: e } = this.props;
		if (!e) {
			return null;
		}
		let t = e.has_segments;
		return s.createElement(
			"div",
			{
				className: "videoControls",
			},
			s.createElement(BroadcastDetails, {
				steamID: this.props.video.GetBroadcastSteamID(),
				bHideThumbnail: true,
				bVerticalBroadcastChat: true,
				onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
			}),
			s.createElement(
				"div",
				{
					className: "videoControlsBottom" + (t ? "" : " noSegments"),
				},
				s.createElement(ee, {
					video: e,
					bIncludeClipEditor: this.props.bIncludeClipEditor,
				}),
				s.createElement(
					"div",
					{
						className: "STV_BroadcastController",
					},
					s.createElement("div", {
						className: "videoControlsButtons LeftSpacer",
					}),
					s.createElement(Q, {
						video: e,
					}),
					s.createElement(Z, {
						video: e,
					}),
					s.createElement(L, {
						video: e,
						actions: this.props.actions,
						onShowStats: this.props.onShowStats,
					}),
				),
			),
		);
	}
};
j = (0, n.Cg)([a.PA], j);
class q extends s.PureComponent {
	render() {
		if (this.props.onClick) {
			return s.createElement(
				"div",
				{
					className: "STV_BroadcastClose",
					onClick: this.props.onClick,
				},
				s.createElement(C.sED, null),
			);
		} else {
			return null;
		}
	}
}
class Q extends s.Component {
	OnJumpBackward() {
		this.props.video.JumpTime(-15);
	}
	OnJumpForward() {
		this.props.video.JumpTime(W);
	}
	render() {
		let e = this.props.video;
		let t = e.CanSeek();
		return s.createElement(
			"div",
			{
				className: "videoControlsButtons PlayControls",
			},
			s.createElement(K, {
				video: e,
			}),
			t &&
				s.createElement(
					"div",
					{
						className: "videoControlButton videoControlJump controlFlip",
						onClick: this.OnJumpBackward,
					},
					s.createElement(C.tID, {
						bHidePostArrow: true,
						bHidePreArrow: true,
						bShowJumpAheadBox: true,
						bFlipHorizontal: true,
					}),
					s.createElement(
						"div",
						{
							className: "jumpAheadValue",
						},
						W,
					),
				),
			s.createElement(Y, {
				video: e,
			}),
			t &&
				s.createElement(
					"div",
					{
						className: "videoControlButton videoControlJump",
						onClick: this.OnJumpForward,
					},
					s.createElement(C.tID, {
						bHidePostArrow: true,
						bHidePreArrow: true,
						bShowJumpAheadBox: true,
						bFlipHorizontal: false,
					}),
					s.createElement(
						"div",
						{
							className: "jumpAheadValue",
						},
						W,
					),
				),
			t &&
				s.createElement(X, {
					video: e,
				}),
		);
	}
}
(0, n.Cg)([v.oI], Q.prototype, "OnJumpBackward", null);
(0, n.Cg)([v.oI], Q.prototype, "OnJumpForward", null);
const Z = (0, a.PA)((e) => {
	if (e.video.IsBroadcastClip() || e.video.IsBroadcastVOD()) {
		return null;
	}
	let t = e.video.IsOnLiveEdge();
	return s.createElement(
		"div",
		{
			className: "videoControlsButtons GoLive",
		},
		s.createElement(
			"div",
			{
				className:
					"videoControlButton videoControlGoLive" + (t ? " isLiveEdge" : ""),
				onClick: t
					? null
					: (t) => {
							e.video.JumpToLiveEdge();
						},
			},
			s.createElement(C.tID, {
				bHidePreArrow: true,
				bHidePostArrow: true,
				bFlipHorizontal: false,
			}),
			s.createElement(
				"div",
				{
					className: "jumpGoLive",
				},
				(0, S.we)(
					t ? "#DASHPlayerControls_IsLive" : "#DASHPlayerControls_GoLive",
				),
			),
		),
	);
});
let Y = class extends s.Component {
	OnTogglePlayPause() {
		this.props.video.TogglePlayPause();
	}
	render() {
		let e = this.props.video.IsPaused();
		return s.createElement(
			"div",
			{
				className: "videoControlButton buttonPlayPause",
				onClick: this.OnTogglePlayPause,
			},
			e ? s.createElement(C.jGG, null) : s.createElement(C.vRz, null),
		);
	}
};
(0, n.Cg)([v.oI], Y.prototype, "OnTogglePlayPause", null);
Y = (0, n.Cg)([a.PA], Y);
let K = class extends s.Component {
	constructor(e) {
		super(e);
		(0, i.Gn)(this);
		this.video = e.video;
	}
	componentDidUpdate() {
		this.video = this.props.video;
	}
	video = undefined;
	get has_previous_marker() {
		return this.GetPreviousMarkerTime() !== undefined;
	}
	GetPreviousMarkerTime() {
		if (!this.video.has_markers) {
			return;
		}
		let e = this.video.GetTimelineMarkers();
		let t = this.video.GetPlaybackTime();
		for (let r = e.length - 1; r >= 0; r--) {
			if (!(e[r].nTime >= t)) {
				return e[r].nTime;
			}
		}
	}
	OnJumpToPreviousMarkerClicked(e) {
		let t = this.GetPreviousMarkerTime();
		if (t !== undefined) {
			this.props.video.Seek(t - 0.2);
		}
	}
	render() {
		let e = this.props.video.BHasMarkersOrSegments();
		return s.createElement(
			"div",
			{
				className:
					"videoControlButton jumpToMarker controlFlip" +
					(e ? "" : " noMarkersOrSegments") +
					(this.has_previous_marker ? "" : " noMarkersInDirection"),
				onClick: this.OnJumpToPreviousMarkerClicked,
			},
			s.createElement(C.tID, {
				bHidePostArrow: true,
				bFlipHorizontal: true,
			}),
		);
	}
};
(0, n.Cg)([i.sH], K.prototype, "video", undefined);
(0, n.Cg)([i.EW], K.prototype, "has_previous_marker", null);
(0, n.Cg)([v.oI], K.prototype, "OnJumpToPreviousMarkerClicked", null);
K = (0, n.Cg)([a.PA], K);
let X = class extends s.Component {
	constructor(e) {
		super(e);
		(0, i.Gn)(this);
		this.video = e.video;
	}
	componentDidUpdate() {
		this.video = this.props.video;
	}
	video = undefined;
	get has_next_marker() {
		return this.GetNextMarkerTime() !== undefined;
	}
	GetNextMarkerTime() {
		if (!this.video.has_markers) {
			return;
		}
		let e = this.video.GetTimelineMarkers();
		let t = this.video.GetPlaybackTime();
		for (let r = 0; r < e.length; r++) {
			if (!(e[r].nTime <= t)) {
				return e[r].nTime;
			}
		}
	}
	OnJumpToNextMarkerClicked(e) {
		let t = this.GetNextMarkerTime();
		if (t !== undefined) {
			this.props.video.Seek(t);
		}
	}
	render() {
		let e = this.props.video.BHasMarkersOrSegments();
		return s.createElement(
			"div",
			{
				className:
					"videoControlButton jumpToMarker" +
					(e ? "" : " noMarkersOrSegments") +
					(this.has_next_marker ? "" : " noMarkersInDirection"),
				onClick: this.OnJumpToNextMarkerClicked,
			},
			s.createElement(C.tID, {
				bHidePostArrow: true,
				bFlipHorizontal: false,
			}),
		);
	}
};
(0, n.Cg)([i.sH], X.prototype, "video", undefined);
(0, n.Cg)([i.EW], X.prototype, "has_next_marker", null);
(0, n.Cg)([v.oI], X.prototype, "OnJumpToNextMarkerClicked", null);
X = (0, n.Cg)([a.PA], X);
const J = (e) =>
	s.createElement(
		"div",
		{
			className: "timelineMarker",
			title: e.label,
			style: {
				left: e.pos + "%",
			},
			onMouseEnter: () => e.onMouseEnter(e.pos),
			onMouseLeave: e.onMouseLeave,
			onMouseDown: e.onMouseDown ? e.onMouseDown : undefined,
		},
		s.createElement(
			"div",
			{
				className: "timelineMarkerIcon",
			},
			s.createElement(C.Dp6, null),
		),
	);
function $(e) {
	let t = e.startPos;
	let r = e.endPos;
	let n = "";
	let i = 1;
	if (t < 0) {
		i = (r - t) / 10;
		t = 0;
		n = " hideFront";
	}
	return s.createElement(
		"div",
		{
			className: "STV_timelineSegment" + n,
			style: {
				left: t + "%",
				width: r - t + "%",
				opacity: i,
			},
			onClick: e.onClick,
		},
		s.createElement("div", {
			className: "STV_timelineSegmentFrontFill",
			style: {
				borderColor: "rgb(" + e.color + ")",
			},
		}),
		s.createElement(
			"div",
			{
				className: "STV_timelineSegmentLabel",
				style: {
					color: "rgb(" + e.color + ")",
				},
			},
			e.label,
		),
		s.createElement("div", {
			className: "STV_timelineSegmentBackFill",
			style: {
				borderColor: "rgb(" + e.color + ")",
			},
		}),
	);
}
let ee = class extends s.Component {
	m_elSlider = s.createRef();
	m_rectSlider = undefined;
	constructor(e) {
		super(e);
		this.state = {
			nGrabberMouseDownTime: 0,
			bGrabberMouseDown: false,
			nHoverValue: undefined,
			hoverX: 0,
			bStartMouseDown: false,
			bEndMouseDown: false,
			thumbnailURL: "",
		};
	}
	OnMouseDown(e, t) {
		if (this.m_elSlider) {
			e.persist();
			this.m_rectSlider =
				this.m_elSlider.current &&
				this.m_elSlider.current.getBoundingClientRect();
			let r = {};
			if (t === "start") {
				r = {
					bStartMouseDown: true,
				};
				e.stopPropagation();
			} else if (t === "end") {
				r = {
					bEndMouseDown: true,
				};
				e.stopPropagation();
			} else {
				r = {
					bGrabberMouseDown: true,
				};
			}
			this.setState(r, () => this.AdjustSliderForClientX(e.clientX));
			this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
				"mousemove",
				this.OnMouseMove,
			);
			this.m_elSlider.current.ownerDocument.defaultView.addEventListener(
				"mouseup",
				this.OnMouseUp,
			);
		}
	}
	OnMouseMove(e) {
		this.AdjustSliderForClientX(e.clientX);
	}
	OnMouseUp(e) {
		if (this.state.bStartMouseDown) {
			this.setState({
				bStartMouseDown: false,
			});
		} else if (this.state.bEndMouseDown) {
			this.setState({
				bEndMouseDown: false,
			});
		} else {
			this.props.video.Seek(this.state.nGrabberMouseDownTime);
			this.setState({
				bGrabberMouseDown: false,
				nGrabberMouseDownTime: 0,
			});
		}
		if (this.m_elSlider.current) {
			this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
				"mousemove",
				this.OnMouseMove,
			);
			this.m_elSlider.current.ownerDocument.defaultView.removeEventListener(
				"mouseup",
				this.OnMouseUp,
			);
		}
	}
	OnKeyDown(e) {
		if (e.keyCode == 37) {
			this.props.video.JumpTime(-15);
			e.preventDefault();
		} else if (e.keyCode == 39) {
			this.props.video.JumpTime(15);
			e.preventDefault();
		}
	}
	AdjustSliderForClientX(e) {
		let t = this.props.video;
		let r = t.GetTimelineStartPos();
		let n = t.GetTimelineStartPos() + t.GetTimelineDuration();
		let i = t.GetTimeAtMousePosition(e, this.m_rectSlider, r, n);
		if (this.state.bStartMouseDown) {
			const e = B.OQ(i, r, t.m_editorEndTime - 5);
			t.m_editorStartTime = e;
		} else if (this.state.bEndMouseDown) {
			const e = B.OQ(i, t.m_editorStartTime + 5, n);
			t.m_editorEndTime = e;
		} else if (i != this.state.nGrabberMouseDownTime) {
			this.setState({
				nGrabberMouseDownTime: i,
			});
		}
	}
	OnMouseHoverMove(e) {
		this.AdjustHoverForClientX(e.clientX);
	}
	OnMouseHoverLeave(e) {
		this.setState({
			hoverX: 0,
		});
	}
	AdjustHoverForClientX(e) {
		let t = this.props.video;
		let r = t.GetTimelineStartPos();
		let n = t.GetTimelineStartPos() + t.GetTimelineDuration();
		this.m_rectSlider =
			this.m_elSlider.current &&
			this.m_elSlider.current.getBoundingClientRect();
		t.GetTimeAtMousePosition(e, this.m_rectSlider, r, n);
	}
	OnSegmentClick(e) {
		this.props.video.Seek(e);
	}
	OnMarkerMouseEnter(e) {
		this.setState({
			nHoverValue: e,
		});
	}
	OnMarkerMouseLeave() {
		this.setState({
			nHoverValue: undefined,
		});
	}
	render() {
		let e = this.props.video;
		let t = this.state.bGrabberMouseDown;
		let r = e.GetPercentOffsetFromTime(
			this.state.nGrabberMouseDownTime,
			c.a0.Timeline,
		);
		let n = e.GetPercentOffsetFromTime(e.GetPlaybackTime(), c.a0.Timeline);
		let i = e.GetPercentOffsetFromTime(
			e.GetVideoAvailableStartTime(),
			c.a0.Timeline,
		);
		if (i < 0.05) {
			i = 0;
		}
		let a = B.OQ(r, 0, 100).toFixed(1) + "%";
		let o = B.OQ(n, 0, 100).toFixed(1) + "%";
		let l = B.OQ(i, 0, 100).toFixed(1) + "%";
		let m = {};
		let u = {};
		let d = {};
		let A = {};
		if (t) {
			A.left = a;
			m.width = a;
			u.width = o;
			d.width = l;
		} else {
			A.left = o;
			u.width = o;
			d.width = l;
		}
		let p = (0, M.ap)(e.GetPlaybackTime());
		let g = (0, M.ap)(this.state.nHoverValue);
		let h = "STV_timelineContainer";
		if (this.state.bGrabberMouseDown) {
			h += " grabberDown";
		}
		if (e.IsTimelineMapActive()) {
			h += " minimapActive";
		}
		let _ = "";
		r = t ? r : n;
		if (r > 100) {
			_ = " grabberOffScreenRight grabberOffscreen";
		} else if (r < 0) {
			_ = " grabberOffScreenLeft grabberOffscreen";
		}
		let f = [];
		e.GetTimelineMarkers().forEach((t, r) => {
			let n = e.GetPercentOffsetFromTime(t.nTime, c.a0.Timeline);
			if (!(n < 0) && !(n > 100)) {
				f.push(
					s.createElement(J, {
						key: r,
						pos: n,
						label: t.strTemplateName,
						onMouseEnter: this.OnMarkerMouseEnter,
						onMouseLeave: this.OnMarkerMouseLeave,
					}),
				);
			}
		});
		let b = [];
		e.GetTimelineSegments().forEach((t, r) => {
			let n = e.GetPercentOffsetFromTime(t.nTimeStart, c.a0.Timeline);
			if (n > 100) {
				return;
			}
			let i = e.GetPercentOffsetFromTime(t.nTimeEnd, c.a0.Timeline);
			if (!(i < 0)) {
				b.push(
					s.createElement($, {
						key: r,
						startPos: n,
						endPos: i,
						label: t.strTemplateName,
						color: t.color,
						onClick: (e) => this.OnSegmentClick(t.nTimeStart),
					}),
				);
			}
		});
		const y = e.GetPercentOffsetFromTime(e.m_editorStartTime, c.a0.Timeline);
		const w = e.GetPercentOffsetFromTime(e.m_editorEndTime, c.a0.Timeline);
		const v = this.props.bIncludeClipEditor
			? [
					s.createElement(J, {
						key: "start",
						pos: y,
						label: (0, S.we)("#DASHPlayerControls_Start"),
						onMouseEnter: this.OnMarkerMouseEnter,
						onMouseLeave: this.OnMarkerMouseLeave,
						onMouseDown: (e) => this.OnMouseDown(e, "start"),
					}),
					s.createElement(J, {
						key: "end",
						pos: w,
						label: (0, S.we)("#DASHPlayerControls_End"),
						onMouseEnter: this.OnMarkerMouseEnter,
						onMouseLeave: this.OnMarkerMouseLeave,
						onMouseDown: (e) => this.OnMouseDown(e, "end"),
					}),
				]
			: [];
		return s.createElement(
			"div",
			{
				className: "videoTimelineMain",
				tabIndex: 0,
				onKeyDown: this.OnKeyDown,
			},
			s.createElement(
				"div",
				{
					className: h,
				},
				s.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					p,
				),
				s.createElement(
					"div",
					{
						className: "STV_timelineSegmentsContainer",
					},
					b,
				),
				s.createElement(
					"div",
					{
						onMouseDown: this.OnMouseDown,
						onMouseMove: this.OnMouseHoverMove,
						onMouseLeave: this.OnMouseHoverLeave,
						ref: this.m_elSlider,
					},
					s.createElement(
						"div",
						{
							className: "VideoTimelineSlider",
						},
						s.createElement("div", {
							className: "STV_timelineValue",
							style: m,
						}),
						s.createElement("div", {
							className: "STV_timelineGhostValue",
							style: u,
						}),
						s.createElement("div", {
							className: "STV_timelineNoVideo",
							style: d,
						}),
						f,
						v,
						Boolean(this.state.hoverX) &&
							s.createElement(
								"div",
								{
									key: "grabbertime",
									style: {
										position: "absolute",
										left: this.state.hoverX - 75,
										bottom: "30px",
									},
								},
								s.createElement(
									"div",
									{
										style: {
											position: "relative",
											display: "flex",
											justifyContent: "center",
										},
									},
									this.state.thumbnailURL &&
										s.createElement("img", {
											style: {
												width: "150px",
											},
											src: this.state.thumbnailURL,
										}),
									s.createElement(
										"span",
										{
											className: "STV_timelineGrabberValue",
											style: {
												position: "absolute",
												bottom: "4px",
											},
										},
										g,
									),
								),
							),
						s.createElement(
							"div",
							{
								className: "STV_timelineGrabber_Wrapper",
								style: A,
							},
							s.createElement(
								"div",
								{
									className: "STV_timelineGrabber" + _,
								},
								s.createElement(
									"div",
									{
										className: "STV_timelineGrabberArrow",
									},
									s.createElement(C.apU, null),
								),
							),
						),
					),
				),
			),
		);
	}
};
(0, n.Cg)([v.oI], ee.prototype, "OnMouseDown", null);
(0, n.Cg)([v.oI], ee.prototype, "OnMouseMove", null);
(0, n.Cg)([v.oI], ee.prototype, "OnMouseUp", null);
(0, n.Cg)([v.oI], ee.prototype, "OnKeyDown", null);
(0, n.Cg)([v.oI], ee.prototype, "OnMouseHoverMove", null);
(0, n.Cg)([v.oI], ee.prototype, "OnMouseHoverLeave", null);
(0, n.Cg)([v.oI], ee.prototype, "AdjustHoverForClientX", null);
(0, n.Cg)([v.oI], ee.prototype, "OnSegmentClick", null);
(0, n.Cg)([v.oI], ee.prototype, "OnMarkerMouseEnter", null);
(0, n.Cg)([v.oI], ee.prototype, "OnMarkerMouseLeave", null);
ee = (0, n.Cg)([a.PA], ee);
export let BroadcastDetails = class extends s.Component {
	state = {
		info: null,
	};
	static getDerivedStateFromProps(e, t) {
		if (
			(!t.info || t.info.m_steamIDBroadcast !== e.steamID) &&
			(t.info && (c.BroadcastWatchStore.StopInfo(t.info), (t.info = null)),
			e.steamID)
		) {
			return {
				info: c.BroadcastWatchStore.StartInfo(e.steamID),
			};
		}
		return null;
	}
	componentWillUnmount() {
		if (this.state.info) {
			c.BroadcastWatchStore.StopInfo(this.state.info);
		}
	}
	RenderStreamSwitcher() {
		const e = this.props.steamID;
		if (E.td.stream[e]) {
			return s.createElement(re, {
				value: e,
				options: E.td.stream,
				onChange: this.props.onLocalStreamChange,
			});
		} else {
			return null;
		}
	}
	render() {
		let { info: e } = this.state;
		if (!e) {
			return null;
		}
		let t = "";
		if (e.m_nViewerCount) {
			t = (0, w.Dq)(e.m_nViewerCount);
		}
		let r = E.td.bValid && E.td.stream && E.td.stream[e.m_steamIDBroadcast];
		let n =
			!this.props.bHideThumbnail &&
			this.props.bVerticalBroadcastChat &&
			(parseInt(e.m_strAppId) > 0 || r);
		const i =
			!this.props.bHideThumbnail &&
			this.props.bVerticalBroadcastChat &&
			r &&
			E.td.gidEvent;
		return s.createElement(
			"div",
			{
				className: "BroadcastDetails",
			},
			!this.props.bHideThumbnail &&
				s.createElement(A.y, {
					className: "broadcastDetailsThumbBlur",
					src: e.m_strThumbnailUrl,
					draggable: false,
					duration: 2500,
				}),
			s.createElement(
				"div",
				{
					className: "BroadcastDetailsHeader",
				},
				e &&
					e.m_strAppTitle &&
					s.createElement(
						"div",
						{
							className: "displayColumn",
						},
						s.createElement(
							"div",
							{
								className: "Info",
							},
							s.createElement(
								"span",
								{
									className: "AppTitle",
								},
								e.m_strAppTitle,
							),
							e.m_strTitle &&
								s.createElement(
									"span",
									{
										className: "BroadcastTitle",
									},
									"\xA0- ",
									e.m_strTitle,
								),
							this.props.onLocalStreamChange && this.RenderStreamSwitcher(),
						),
						t &&
							s.createElement(
								"div",
								{
									className: "BroadcastDetailsHeader_ViewerCount",
								},
								s.createElement(C.y_e, null),
								(0, S.Yp)("#Broadcast_ViewerCount", t),
							),
					),
				r &&
					this.props.onOpenLinkInNewWindow &&
					s.createElement(
						"div",
						{
							className: "Actions",
						},
						s.createElement(
							"div",
							{
								onClick: (e) => this.props.onOpenLinkInNewWindow(e, E.td.link),
								className: "BroadcastLink",
							},
							E.td.linkName,
						),
					),
			),
			i &&
				s.createElement(g.m, {
					gidEvent: E.td.gidEvent,
				}),
			n &&
				s.createElement(p.pb, {
					id:
						E.td.bValid && E.td.stream && E.td.stream[e.m_steamIDBroadcast]
							? E.td.appID
							: parseInt(e.m_strAppId),
					type: "game",
				}),
		);
	}
};
BroadcastDetails = (0, n.Cg)([a.PA], BroadcastDetails);
class re extends s.Component {
	showContextMenu(e) {
		const { options: t, value: r, onChange: n } = this.props;
		const i = Object.keys(t).map((e) =>
			s.createElement(
				d.IK,
				{
					key: e,
					onSelected: () => n(e),
					bChecked: e === r,
				},
				(0, S.we)(t[e]),
			),
		);
		(0, o.lX)(s.createElement(d.tz, null, i), e);
	}
	render() {
		const { value: e, options: t } = this.props;
		const r = t[e];
		return s.createElement(
			"div",
			{
				className: "BroadcastLanguage",
				onClick: this.showContextMenu,
			},
			s.createElement("span", null, "\xA0- ", (0, S.we)(r)),
			s.createElement(
				"div",
				{
					className: "ContextMenuButton",
				},
				s.createElement(C.GB9, null),
			),
		);
	}
}
(0, n.Cg)([v.oI], re.prototype, "showContextMenu", null);
export let LinkOverlay = class extends s.Component {
	constructor(e) {
		super(e);
		this.state = {
			sizableRegion: [],
		};
	}
	async AddLinkRegion() {
		let e = this.state.sizableRegion.length;
		this.state.sizableRegion.push({
			xPosPct: 2.5 + e,
			yPosPct: 2.5 + e,
			widthPct: 20,
			heightPct: 15,
		});
		this.setState(
			{
				sizableRegion: this.state.sizableRegion,
			},
			() => this.OnSaveRegions(),
		);
	}
	componentDidUpdate(e) {
		if (e.linkRegions.length == 0) {
			this.props.linkRegions.forEach((e, t) => {
				this.LoadLinkRegion(e, t);
			});
		}
	}
	async LoadLinkRegion(e, t) {
		this.state.sizableRegion.length;
		this.state.sizableRegion.push({
			xPosPct: e.left,
			yPosPct: e.top,
			widthPct: e.width,
			heightPct: e.height,
			link_url: e.url,
			link_description: e.link_description,
			link_index: e.link_index,
		});
		await this.setState({
			sizableRegion: this.state.sizableRegion,
		});
	}
	OnSaveRegions() {
		let e;
		e = {
			links: [],
		};
		for (let t = 0; t < this.state.sizableRegion.length; t++) {
			let r;
			r = {
				left: Math.floor(this.state.sizableRegion[t].xPosPct * 100),
				top: Math.floor(this.state.sizableRegion[t].yPosPct * 100),
				width: Math.floor(this.state.sizableRegion[t].widthPct * 100),
				height: Math.floor(this.state.sizableRegion[t].heightPct * 100),
				url: this.state.sizableRegion[t].link_url,
				link_description: this.state.sizableRegion[t].link_description,
				link_index: t,
			};
			e.links.push(r);
		}
		this.props.onSaveLinkRegions(e);
	}
	async DeleteRegion(e) {
		this.state.sizableRegion.splice(e, 1);
		console.log("keys: ", this.state.sizableRegion.keys);
		this.setState(
			{
				sizableRegion: this.state.sizableRegion,
			},
			() => this.OnSaveRegions(),
		);
	}
	async UpdatePanel(e, t) {
		const r = [...this.state.sizableRegion];
		r[e] = t;
		this.setState(
			{
				sizableRegion: r,
			},
			() => this.OnSaveRegions(),
		);
	}
	render() {
		return s.createElement(
			"div",
			{
				className: "LinkOverlayContainer",
			},
			s.createElement(
				"div",
				{
					className: "LinkOverlayValidRegion",
				},
				!this.props.editMode && this.props.linkRegions
					? this.props.linkRegions.map((e) => {
							const t = (0, U.p)(e.url);
							return s.createElement(
								_.uU,
								{
									key: e.link_index,
									href: e.url,
									bForceExternal: t,
									bUseLinkFilter: t,
								},
								s.createElement(
									"div",
									{
										className: "LinkRegion",
										style: {
											left: e.left + "%",
											top: e.top + "%",
											width: e.width + "%",
											height: e.height + "%",
										},
									},
									s.createElement(
										"div",
										{
											className: "LinkRegionText",
										},
										e.link_description,
										" ",
									),
								),
							);
						})
					: null,
				this.props.editMode &&
					this.state.sizableRegion.map((e, t) =>
						s.createElement(h.I, {
							key: t * 100 + e.xPosPct,
							index: t,
							deleteFn: this.DeleteRegion,
							updateFn: this.UpdatePanel,
							xPosPct: e.xPosPct,
							yPosPct: e.yPosPct,
							widthPct: e.widthPct,
							heightPct: e.heightPct,
							link_url: e.link_url,
							link_description: e.link_description,
						}),
					),
				this.props.editMode &&
					s.createElement(
						"div",
						{
							className: "AddLinkRegion",
							onClick: this.AddLinkRegion,
						},
						(0, S.we)("#SteamTV_AddLinkRegion"),
					),
			),
			s.createElement(
				"div",
				{
					className: "LinkOverlayInvalidRegion",
				},
				s.createElement("div", null, (0, S.we)("#SteamTV_LinkRegionReserved")),
			),
		);
	}
};
(0, n.Cg)([v.oI], LinkOverlay.prototype, "AddLinkRegion", null);
(0, n.Cg)([v.oI], LinkOverlay.prototype, "LoadLinkRegion", null);
(0, n.Cg)([v.oI], LinkOverlay.prototype, "OnSaveRegions", null);
(0, n.Cg)([v.oI], LinkOverlay.prototype, "DeleteRegion", null);
(0, n.Cg)([v.oI], LinkOverlay.prototype, "UpdatePanel", null);
LinkOverlay = (0, n.Cg)([a.PA], LinkOverlay);
