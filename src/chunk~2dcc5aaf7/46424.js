var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require("./96593.js");
var o = require("./91486.js");
var l = require("./13869.js");
var c = require("./10606.js");
var m = require("./64608.js");
var u = require(/*webcrack:missing*/ "./41230.js");
var d = require(/*webcrack:missing*/ "./90095.js");
var A = require("./35062.js");
var _p = A;
var g = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var C = require("./87935.js");
var _ = require("./5808.js");
var f = require("./22639.js");
var b = require("./32700.js");
var y = require(/*webcrack:missing*/ "./11131.js");
var S = require("./18869.js");
var w = require("./90985.js");
var B = require("./23783.js");
var v = require(/*webcrack:missing*/ "./72476.js");
var I = require(/*webcrack:missing*/ "./69164.js");
var E = require("./96680.js");
var M = require(/*webcrack:missing*/ "./88750.js");
var T = require(/*webcrack:missing*/ "./31084.js");
var R = require("./35488.js");
var k = require("./18057.js");
var D = require("./93681.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
class F extends i.Component {
	TwoDigitDurationString(e) {
		return ("0" + e).slice(-2);
	}
	HoursMinuteSecondsDisplayString(e) {
		let t = e;
		let r = Math.floor(t / 3600);
		t -= r * 3600;
		let n = Math.floor(t / 60);
		t -= n * 60;
		let i = t;
		if (r > 0) {
			return (
				r +
				":" +
				this.TwoDigitDurationString(n) +
				":" +
				this.TwoDigitDurationString(i)
			);
		} else {
			return n + ":" + this.TwoDigitDurationString(i);
		}
	}
	render() {
		return i.createElement(
			i.Fragment,
			null,
			this.HoursMinuteSecondsDisplayString(this.props.seconds),
		);
	}
}
let G = class extends i.Component {
	render() {
		const e = f.ET.GetSoundtrackDetails(this.props.appid).m_nTotalTrackCount;
		if (e) {
			return i.createElement(
				i.Fragment,
				null,
				Localize("#AppDetails_Soundtrack_TrackCount", e),
			);
		} else {
			return null;
		}
	}
};
G = (0, n.Cg)([u.PA], G);
let O = class extends i.Component {
	render() {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(F, {
				seconds: f.ET.GetSoundtrackDetails(this.props.appid)
					.m_nTotalDurationSeconds,
			}),
		);
	}
};
O = (0, n.Cg)([u.PA], O);
export let F9 = class extends i.Component {
	render() {
		let e = f.ET.GetSoundtrackDetails(this.props.appid).m_Metadata;
		if (e && e.m_strArtist) {
			return i.createElement(i.Fragment, null, e.m_strArtist);
		} else {
			return null;
		}
	}
};
F9 = (0, n.Cg)([u.PA], F9);
export let p = class extends i.Component {
	render() {
		if (f.ET.GetSoundtrackDetails(this.props.appid).m_nTotalTrackCount) {
			return i.createElement(
				i.Fragment,
				null,
				i.createElement(G, {
					appid: this.props.appid,
				}),
				" / ",
				i.createElement(O, {
					appid: this.props.appid,
				}),
			);
		} else {
			return null;
		}
	}
};
p = (0, n.Cg)([u.PA], p);
export let j2 = class extends i.Component {
	render() {
		const e = s.tw.GetAppOverviewByAppID(this.props.appid);
		if (e) {
			return i.createElement(
				i.Fragment,
				null,
				i.createElement(o.z, {
					app: e,
					eAssetType: 7,
					className: this.props.className,
				}),
			);
		} else {
			return null;
		}
	}
};
j2 = (0, n.Cg)([u.PA], j2);
const x = (e) => {
	const { appid: t, track: r, trackNumber: n, independentTrackNumber: a } = e;
	const s = (0, y.R7)();
	let o = (0, d.q3)(() => w.l.playbackState);
	let l = false;
	if (o?.uSoundtrackAppId == t && a - 1 == o?.nActiveTrack) {
		l = true;
	}
	return i.createElement(
		I.Z,
		{
			key: r.displayName + n,
			onActivate: () => (0, _.aF)(t, s.ownerWindow, a),
		},
		i.createElement(
			"div",
			{
				className: (0, g.A)(_p.TrackListing, l && _p.Playing),
				key: "track" + r.displayName,
			},
			i.createElement(
				"div",
				{
					className: _p.TrackNumber,
				},
				n,
				".",
			),
			i.createElement("div", {
				className: _p.TrackName,
				dangerouslySetInnerHTML: {
					__html: r.displayName,
				},
			}),
			i.createElement(
				"div",
				{
					className: _p.TrackLength,
				},
				i.createElement(F, {
					seconds: r.durationSeconds,
				}),
			),
		),
	);
};
let U = class extends i.Component {
	render() {
		let e = f.ET.GetSoundtrackDetails(this.props.appid).m_DiscInfo;
		if (!e || e.size == 0) {
			return null;
		}
		let t = [];
		let r = 1;
		e.forEach((e, n) => {
			let a = [];
			e.trackInfo.forEach((e, t) => {
				a.push(
					i.createElement(x, {
						key: e.displayName + t,
						appid: this.props.appid,
						track: e,
						trackNumber: t,
						independentTrackNumber: r,
					}),
				);
				r++;
			});
			t.push(
				i.createElement(
					i.Fragment,
					{
						key: "disc" + n,
					},
					i.createElement(
						"div",
						{
							className: _p.Disc,
						},
						Localize("#AppDetails_Soundtrack_DiscNumber", n),
					),
					a,
				),
			);
		});
		return i.createElement(
			I.Z,
			{
				className: _p.TrackListContainer,
			},
			t,
		);
	}
};
U = (0, n.Cg)([u.PA], U);
export const gR = (0, u.PA)(function (e) {
	const { overview: t, details: r, appid: n } = e;
	const a = (0, S.br)();
	const l = s.tw.GetAppOverviewByAppID(t.optional_parent_app_id);
	const c = l
		? i.createElement(
				"div",
				{
					className: _p.ParentAppName,
					onClick: () => a.App(t.optional_parent_app_id),
				},
				i.createElement(o.z, {
					app: l,
					eAssetType: 4,
					className: _p.ParentGameIcon,
				}),
				l.display_name,
			)
		: undefined;
	const m = (0, E.$2)();
	const u = (0, _.AH)(m, t, "selected");
	const A = (0, v.Qn)();
	const C = t.installed;
	const f = (0, d.q3)(() => w.l.playbackState);
	function b() {
		return i.createElement(
			"div",
			{
				className: _p.Header,
			},
			i.createElement(
				"div",
				{
					className: _p.AlbumArtAndTitle,
				},
				i.createElement(j2, {
					className: _p.AlbumArt,
					appid: t.appid,
				}),
				i.createElement(
					"div",
					{
						className: _p.TitleAndArtist,
					},
					i.createElement(
						"div",
						{
							className: _p.AlbumName,
						},
						t.display_name,
					),
					i.createElement(
						"div",
						{
							className: _p.ArtistName,
						},
						i.createElement(F9, {
							appid: t.appid,
						}),
					),
					i.createElement(
						"div",
						{
							className: _p.StatsAndParent,
						},
						i.createElement(
							"div",
							{
								className: _p.ParentGameLinkContainer,
							},
							i.createElement(
								"div",
								{
									className: _p.ParentGameLink,
								},
								LocalizeReact("#AppDetails_Soundtrack_ParentAppLink"),
							),
							c,
						),
						i.createElement(
							"div",
							{
								className: _p.AlbumStatsContainer,
							},
							LocalizeReact("#AppDetails_Soundtrack_TotalLength"),
							i.createElement(
								"div",
								{
									className: _p.AlbumStats,
								},
								i.createElement(p, {
									appid: t.appid,
								}),
							),
						),
					),
				),
			),
		);
	}
	return i.createElement(
		"div",
		{
			className: (0, g.A)(_p.MainPanel, _p.SoundtrackPanel),
		},
		i.createElement(
			"div",
			{
				className: _p.BackgroundContainer,
			},
			i.createElement(j2, {
				className: _p.BackgroundBlurArt,
				appid: t.appid,
			}),
		),
		i.createElement(
			"div",
			{
				className: _p.SoundtrackContainer,
			},
			i.createElement(
				I.Z,
				{
					className: _p.Content,
					"flow-children": "row",
				},
				A && i.createElement(b, null),
				i.createElement(
					"div",
					{
						className: _p.Columns,
					},
					i.createElement(
						I.Z,
						{
							className: (0, g.A)(_p.LeftColumn, C && _p.WithControls),
						},
						!A && i.createElement(b, null),
						A &&
							i.createElement(V, {
								appid: t.appid,
								currentTrack: f?.nActiveTrack,
							}),
						i.createElement(H, {
							primaryAction: u,
							overview: t,
							details: r,
						}),
					),
					i.createElement(
						I.Z,
						{
							className: (0, g.A)(_p.RightColumn, C && _p.WithControls),
						},
						i.createElement(U, {
							appid: t.appid,
						}),
					),
				),
				!A &&
					C &&
					i.createElement(
						"div",
						{
							className: _p.DesktopControls,
						},
						i.createElement(B.TF, {
							appid: t.appid,
							bFloatingControls: true,
						}),
						i.createElement(V, {
							appid: t.appid,
							currentTrack: f?.nActiveTrack,
						}),
					),
			),
		),
	);
});
function V(e) {
	const { appid: t } = e;
	const r = (0, d.q3)(() => f.ET.GetTrackDetails(t, e.currentTrack));
	const n = r?.displayName;
	const a = (0, d.q3)(() => w.l.playbackState);
	const s = !a || a.uSoundtrackAppId != e.appid;
	const o = (0, g.A)(_p.CurrentTrackContainer, s && _p.PlayingOnCurrentAlbum);
	return i.createElement(
		"div",
		{
			className: o,
		},
		i.createElement(R.Music, null),
		i.createElement(
			"div",
			{
				className: _p.CurrentTrack,
			},
			i.createElement(
				D.r,
				null,
				" ",
				i.createElement("span", {
					dangerouslySetInnerHTML: {
						__html: n,
					},
				}),
				" ",
			),
		),
	);
}
function H(e) {
	const { primaryAction: t, overview: r, details: n } = e;
	const a = r.installed;
	const { ownerWindow: s } = (0, y.R7)();
	const o = (0, v.Qn)();
	const c = (0, v.rP)();
	const u = !v.TS.IN_GAMESCOPE && !c.IN_VR;
	const A = (0, i.useCallback)(
		(e) => {
			(0, _.jy)(e, r, "selected", 100, s)();
		},
		[r, s],
	);
	const g = [];
	if (t == "PlayMusic") {
		if (!a) {
			g.push(
				i.createElement(
					m.jn,
					{
						key: "playAlbumAction",
						className: _p.PlayButton,
						onClick: () => (0, _.aF)(r.appid, s),
					},
					Localize("#AppDetails_Soundtrack_PlayAlbum"),
				),
			);
		}
		if (!o) {
			g.push(
				i.createElement(
					m.$n,
					{
						key: "viewOnDiskAction",
						className: _p.PlayButton,
						onClick: () => A("BrowseLocalFiles"),
					},
					Localize("#AppDetails_Soundtrack_ViewOnDisk"),
				),
			);
		}
	} else if (t) {
		const e =
			t == "Install"
				? Localize("#AppDetails_Soundtrack_DownloadAlbum")
				: (0, b.Np)(t);
		g.push(
			i.createElement(
				m.jn,
				{
					key: "action",
					className: _p.PlayButton,
					onClick: () => A(t),
				},
				e,
			),
		);
	}
	const S = (0, d.q3)(
		() => f.ET.GetSoundtrackDetails(r.appid).m_vecAdditionalImageAssetURLs,
	);
	if (S && S.length > 0 && n) {
		const e = (e) =>
			(async function (e, t, r, n, a) {
				let s;
				let o;
				let c = new Promise((e, t) => {
					s = e;
					o = t;
				});
				try {
					let m = await SteamClient.Apps.GetSoundtrackDetails(e.appid);
					await (0, l.mK)(
						i.createElement(
							j,
							{
								details: n,
								overview: e,
								soundtrackDetailsObj: m,
								window: a,
								nMaxScreenPercentage: t,
								onImageLoad: s,
								onImageError: o,
							},
							r,
						),
						a,
						{
							promiseRenderComplete: c,
						},
					);
				} catch (e) {
					console.log(e);
					console.error("ERROR DISPLAYING ARTWORK");
				}
			})(r, 0.8, null, n, GetOwningWindowForEvent(e));
		g.push(
			i.createElement(
				m.$n,
				{
					key: "viewAdditionalArtwork",
					className: _p.PlayButton,
					onClick: e,
				},
				Localize("#AppDetails_Soundtrack_ViewAdditionalArtwork"),
			),
		);
	}
	const w = (0, k.Qt)("steam://store/" + r.appid);
	const E = (0, k.Qt)(C.B7.BuildSteamURL("HelpAppPage", r.appid));
	const R = i.useCallback(
		(e) => {
			(0, T.lX)(
				i.createElement(
					M.tz,
					null,
					u &&
						i.createElement(
							M.kt,
							{
								key: "viewOnDiskAction",
								onSelected: () => A("BrowseLocalFiles"),
							},
							" ",
							Localize("#AppDetails_Soundtrack_ViewOnDisk"),
							" ",
						),
					i.createElement(
						M.kt,
						{
							key: "showInStoreAction",
							onSelected: w,
						},
						" ",
						Localize("#AppDetails_Soundtrack_ViewStorePage"),
						" ",
					),
					i.createElement(
						M.kt,
						{
							key: "showSupportAction",
							onSelected: E,
						},
						" ",
						Localize("#AppDetails_Soundtrack_Support"),
						" ",
					),
				),
				e,
			);
		},
		[u, A, w, E],
	);
	return i.createElement(
		I.Z,
		null,
		o &&
			a &&
			i.createElement(B.TF, {
				appid: r.appid,
			}),
		g,
		i.createElement("div", {
			key: "spacerDiv",
			className: _p.SoundtrackButtonDivider,
		}),
		a &&
			o &&
			i.createElement(
				m.$n,
				{
					onClick: R,
				},
				" ",
				Localize("#AppDetails_Soundtrack_SeeMore"),
			),
		!a &&
			o &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"a",
					{
						key: "showInStoreAction",
						href: "steam://store/" + r.appid,
					},
					i.createElement(
						m.$n,
						{
							key: "showInStoreAction",
							className: _p.PlayButton,
						},
						Localize("#AppDetails_Soundtrack_ViewStorePage"),
					),
				),
				i.createElement(
					"a",
					{
						key: "showSupportAction",
						href: C.B7.BuildSteamURL("HelpAppPage", r.appid),
					},
					i.createElement(
						m.$n,
						{
							key: "showSupportAction",
							className: _p.PlayButton,
						},
						Localize("#AppDetails_Soundtrack_Support"),
					),
				),
			),
	);
}
class j extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			visibleImageIndex: 0,
		};
	}
	OnCancel() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	OnOK() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	OnNextAvailableImage() {
		const e =
			(this.state.visibleImageIndex + 1) %
			this.props.soundtrackDetailsObj.vecAdditionalImageAssetURLs.length;
		this.setState({
			visibleImageIndex: e,
		});
	}
	render() {
		const e =
			this.props.window.screen.availHeight *
			(this.props.nMaxScreenPercentage ? this.props.nMaxScreenPercentage : 0.8);
		const t =
			this.props.window.screen.availWidth *
			(this.props.nMaxScreenPercentage ? this.props.nMaxScreenPercentage : 0.8);
		let r =
			C.B7.GetCommunityImageURL() +
			"images/apps/" +
			this.props.overview.appid +
			"/" +
			this.props.soundtrackDetailsObj.vecAdditionalImageAssetURLs[
				this.state.visibleImageIndex
			] +
			".jpg";
		return i.createElement(
			c.x_,
			{
				onEscKeypress: this.OnCancel,
				className: _p.AlbumArtworkModal,
			},
			i.createElement(
				"div",
				{
					className: _p.ModalBox,
				},
				i.createElement(
					"div",
					{
						className: _p.ArtworkModalContainer,
					},
					i.createElement(
						"div",
						{
							className: _p.ArtworkContainer,
						},
						i.createElement("img", {
							className: _p.ArtworkImage,
							style: {
								maxWidth: t,
								maxHeight: e,
							},
							src: r,
							onLoad: this.props.onImageLoad,
							onError: this.props.onImageError,
							onClick: this.OnNextAvailableImage,
						}),
					),
					i.createElement(
						"div",
						{
							className: _p.ArtworkModalDetails,
						},
						i.createElement(
							"div",
							{
								className: _p.Header,
							},
							i.createElement(
								m.jn,
								{
									className: _p.ModalArtCloseButton,
									onClick: this.OnOK,
								},
								Localize("#Generic_Close"),
							),
						),
						i.createElement(
							"div",
							{
								className: _p.ChildrenContainer,
							},
							this.props.children,
						),
					),
				),
			),
		);
	}
}
(0, n.Cg)([a.oI], j.prototype, "OnCancel", null);
(0, n.Cg)([a.oI], j.prototype, "OnOK", null);
(0, n.Cg)([a.oI], j.prototype, "OnNextAvailableImage", null);
