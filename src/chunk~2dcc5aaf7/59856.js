var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./88244.js");
var o = require(/*webcrack:missing*/ "./42318.js");
var l = require("./56262.js");
var c = require("./2326.js");
var m = require("./80478.js");
var u = require("./91486.js");
var d = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var p = require("./1965.js");
var g = require("./46424.js");
var h = require("./18057.js");
var C = require("./18869.js");
var _ = require("./84697.js");
var f = _;
const b = (0, a.PA)(function (e) {
	const { details: t, overview: r } = e;
	if (t.vecMusicAlbums.length || t.strManualURL) {
		return i.createElement(
			p.n,
			{
				className: f.SoundtrackSection,
				label: (0, Localize)("#AppDetails_SectionTitle_AdditionalContent"),
				rightColumnSection: true,
				availableOffline: true,
			},
			i.createElement(
				p.n.Body,
				null,
				t.vecMusicAlbums.map((e) =>
					i.createElement(y, {
						content: e,
						key: "key" + e.unAppID,
					}),
				),
				t.strManualURL &&
					i.createElement(S, {
						overview: r,
						details: t,
					}),
			),
		);
	} else {
		return null;
	}
});
function y(e) {
	const { content: t } = e;
	const r = (0, C.br)();
	return i.createElement(
		"div",
		{
			className: (0, d.A)(f.AdditionalItem, f.Soundtracks),
			onClick: () => r.App(t.unAppID),
			key: "key" + t.unAppID,
		},
		i.createElement(g.j2, {
			key: "image",
			className: f.Image,
			appid: t.unAppID,
		}),
		i.createElement(
			"div",
			{
				key: "details",
				className: f.SoundtrackDetails,
			},
			i.createElement(
				"div",
				{
					key: "title",
					className: f.Title,
				},
				t.strName,
			),
			i.createElement(
				"div",
				{
					key: "artist",
					className: f.Artist,
				},
				i.createElement(g.F9, {
					appid: t.unAppID,
				}),
			),
			i.createElement(
				"div",
				{
					key: "summary",
					className: f.TracksDetails,
				},
				i.createElement(g.p, {
					appid: t.unAppID,
				}),
			),
		),
	);
}
function S(e) {
	const { overview: t, details: r } = e;
	const n = (0, h.jb)(r.strManualURL);
	return i.createElement(
		"div",
		{
			className: (0, d.A)(f.AdditionalItem, f.Manual),
			onClick: n,
		},
		i.createElement(
			"div",
			{
				className: f.Image,
			},
			i.createElement(u.z, {
				className: f.AssetImage,
				app: t,
				eAssetType: 3,
			}),
		),
		i.createElement(
			"div",
			{
				className: f.Title,
			},
			(0, Localize)("#AppDetails_AdditionalContent_GameManual"),
		),
	);
}
var w = require("./3651.js");
var B = require("./57665.js");
var v = require("./15448.js");
var I = require("./22165.js");
var E = require("./57150.js");
var M = require("./71333.js");
var T = require("./52470.js");
var R = require("./81452.js");
var k = require("./77163.js");
var D = require("./38857.js");
var N = require("./17914.js");
var F = N;
class G extends i.Component {
	render() {
		return i.createElement(
			p.n,
			{
				className: F.Container,
				availableOffline: true,
			},
			i.createElement(
				p.n.Body,
				{
					className: F.Body,
				},
				(0, Localize)(
					"#AppDetails_Shortcut_Explanation",
					this.props.overview.display_name,
				),
			),
		);
	}
}
var O = require("./91152.js");
var P = require("./80629.js");
var L = P;
var z = require(/*webcrack:missing*/ "./50376.js");
class x extends i.Component {
	render() {
		return i.createElement(
			p.n,
			{
				className: L.InvalidOSType,
				rightColumnSection: true,
				availableOffline: true,
			},
			i.createElement(
				p.n.Body,
				{
					className: L.InvalidOSTypeBody,
				},
				i.createElement(
					"div",
					{
						className: L.WarningText,
					},
					i.createElement(
						"div",
						{
							className: L.Invalid,
						},
						i.createElement(z.WOg, null),
					),
					(0, Localize)("#GameList_Entry_Invalid_OSType"),
				),
				i.createElement(
					"div",
					{
						className: L.WarningText,
					},
					i.createElement(
						"div",
						{
							className: L.WarningText2,
						},
						(0, Localize)("#GameList_Entry_Invalid_OSType2"),
						i.createElement(
							"a",
							{
								href: "https://support.steampowered.com/kb_article.php?ref=1055-ISJM-8568",
								className: L.WarningText3,
							},
							(0, Localize)("#GameList_Entry_Invalid_OSType3"),
						),
					),
				),
			),
		);
	}
}
var U = require("./41092.js");
var W = U;
var V = require("./87935.js");
var H = require("./56726.js");
const j = (e) => {
	let [t, r] = i.useState(false);
	let n = e.details;
	let a = V.B7.GetStoreURL() + "app/" + n?.unMasterSubAppID;
	let s = (0, h.Qt)(a);
	if (!n.unMasterSubAppID) {
		return null;
	}
	let o = n.strMasterSubIncludedWith;
	let l = {};
	if (!t) {
		l.display = "none";
	}
	return i.createElement(
		p.n,
		{
			style: l,
			label: (0, Localize)("#AppDetails_SectionTitle_IncludedWith"),
			rightColumnSection: true,
		},
		i.createElement(
			p.n.Body,
			null,
			i.createElement(
				"a",
				{
					href: a,
				},
				i.createElement("img", {
					className: W.IncludedBanner,
					src: o,
					onLoad: () => r(true),
				}),
			),
			i.createElement(
				H.TD,
				{
					onClick: s,
				},
				"Browse EA Play",
			),
		),
	);
};
var q;
var Q = require("./71769.js");
var Z = require(/*webcrack:missing*/ "./72476.js");
var Y = require(/*webcrack:missing*/ "./44846.js");
var K = require(/*webcrack:missing*/ "./52451.js");
var X = require(/*webcrack:missing*/ "./20590.js");
var J = require("./81863.js");
var $ = require("./78057.js");
var ee = require("./22091.js");
var te = require("./69359.js");
var re = te;
var ne = require("./9066.js");
var ie = require("./89748.js");
var ae = require("./53074.js");
export let N_ = class extends i.Component {
	static {
		q = this;
	}
	static contextType = Z.QO;
	static s_setGameInfoVisible = new Set();
	m_mapSeekTargets = new Map();
	constructor(e) {
		super(e);
		this.state = {
			bShowGameInfo:
				e.overview.BIsModOrShortcut() ||
				q.s_setGameInfoVisible.has(this.props.overview.appid),
			suppressTransition: true,
			bStickyHeader: false,
		};
	}
	OnHeaderWaypointLeave() {
		if (!this.context?.IN_GAMEPADUI && !this.state.bStickyHeader) {
			this.setState({
				bStickyHeader: true,
			});
		}
		this.props.onWaypointLeave();
	}
	OnHeaderWaypointEnter() {
		if (!this.context?.IN_GAMEPADUI) {
			if (this.state.bStickyHeader) {
				this.setState({
					bStickyHeader: false,
				});
			}
		}
		this.props.onWaypointEnter();
	}
	onGameInfoToggle() {
		if (this.state.bStickyHeader) {
			this.props.onGameInfoButtonToggle();
		} else {
			const e = this.state.bShowGameInfo;
			if (this.state.suppressTransition) {
				this.setState({
					suppressTransition: false,
				});
			}
			this.setState({
				bShowGameInfo: !e,
			});
			if (e) {
				q.s_setGameInfoVisible.delete(this.props.overview.appid);
			} else {
				q.s_setGameInfoVisible.add(this.props.overview.appid);
			}
		}
	}
	RegisterSection(e, t) {
		this.m_mapSeekTargets.set(e, t);
	}
	SeekToSection(e) {
		if (this.m_mapSeekTargets.has(e)) {
			const t = this.m_mapSeekTargets.get(e);
			t.classList.add(re.Seeking);
			window.setTimeout(() => {
				t.classList.remove(re.Seeking);
			}, 1700);
			t.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "end",
			});
		}
	}
	m_setSectionsMemo;
	GetSections(e, t) {
		const r = (0, Y.ID)(Z.TS.LAUNCHER_TYPE);
		const n = [
			"info",
			"spotlightdemo",
			"friends",
			"achievements",
			"notes",
			"cards",
			"dlc",
			"screenshots",
			"review",
			"activity",
			"activityrollup",
		];
		const i = ["nonsteam", "notes", "screenshots"];
		let a = [
			"info",
			"spotlightdlc",
			"spotlightreview",
			"postgamesummary",
			"friends",
			"achievements",
			"notes",
			"cards",
			"dlc",
			"screenshots",
			"review",
			"activity",
			"activityrollup",
			"community",
			"additionalcontent",
			"mastersubincluded",
			"timedtrialbanner",
		];
		if (e.app_type == 8 || e.app_type == 65536) {
			a = n;
		} else if (e.BIsModOrShortcut()) {
			a = i;
		}
		if (r) {
			a = a.filter((e) => !["community"].includes(e));
		}
		const s = new Set(a);
		if ($.H.BIsWorkshopVisible(t)) {
			s.add("workshop");
		}
		if ((0, ie.qw)().BIsOfflineMode()) {
			s.add("offline");
		}
		if (ee.Fd.Get().GetControllers().length > 0) {
			s.add("controller");
		}
		if (this.m_setSectionsMemo && this.m_setSectionsMemo.size == s.size) {
			for (const e of Array.from(s.values())) {
				if (!this.m_setSectionsMemo.has(e)) {
					this.m_setSectionsMemo = s;
					break;
				}
			}
		} else {
			this.m_setSectionsMemo = s;
		}
		return this.m_setSectionsMemo;
	}
	render() {
		const e = this.props.details;
		const t = this.props.overview;
		const r = this.GetSections(t, e);
		return i.createElement(
			"div",
			{
				className: (0, d.A)(re.Container, re.Glassy),
			},
			i.createElement(
				"div",
				{
					className: re.Backdrop,
				},
				i.createElement("div", {
					className: re.BackdropGlass,
				}),
			),
			i.createElement(X.Y, {
				onLeave: this.OnHeaderWaypointLeave,
				onEnter: this.OnHeaderWaypointEnter,
			}),
			i.createElement(le, {
				parentComponent: this,
				setSections: r,
				overview: t,
				details: e,
				onGameInfoToggle: this.onGameInfoToggle,
				bStickyHeader: this.state.bStickyHeader,
				bFastRender: this.props.bFastRender,
				bShowGameInfo: this.state.bShowGameInfo,
				bSuppressTransition: this.state.suppressTransition,
				bShowingLaunchDetails: this.props.bShowingLaunchDetails,
			}),
		);
	}
};
(0, n.Cg)([K.oI], N_.prototype, "OnHeaderWaypointLeave", null);
(0, n.Cg)([K.oI], N_.prototype, "OnHeaderWaypointEnter", null);
(0, n.Cg)([K.oI], N_.prototype, "onGameInfoToggle", null);
(0, n.Cg)([K.oI], N_.prototype, "RegisterSection", null);
(0, n.Cg)([K.oI], N_.prototype, "SeekToSection", null);
N_ = q = (0, n.Cg)([a.PA], N_);
export const AC = i.createContext(function (e) {
	const {
		parentComponent: t,
		setSections: r,
		concise: n,
		overview: a,
		details: u,
		onGameInfoToggle: A,
		bStickyHeader: p,
		bFastRender: g,
		bShowGameInfo: h,
		bSuppressTransition: C,
		bShowingLaunchDetails: _,
	} = e;
	const f = $.H.BIsWorkshopVisible(u);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(l.XC, {
			key: a.appid,
			className: p && re.HidePlayBar,
			bInPage: true,
			details: u,
			overview: a,
			stickyheader: p,
			onGameInfoToggle: A,
			onSeek: t.SeekToSection,
			bShowInfoExpanded: h,
			bShowingLaunchDetails: _,
		}),
		a.is_invalid_os_type && i.createElement(x, null),
		r.has("info") &&
			i.createElement(v.b, {
				concise: n,
				overview: a,
				details: u,
				expand: h,
				suppressTransition: C,
			}),
		i.createElement(T.Qd, {
			overview: a,
			details: u,
			workshopVisible: f,
			marketPresence: $.H.BHasMarketPresence(u),
		}),
		!g &&
			i.createElement(
				"div",
				{
					className: re.ColumnContainer,
				},
				i.createElement(
					"div",
					{
						className: (0, d.A)(
							re.Spotlights,
							s.o.rightPanelWidth >= parseInt(re.SpotlightBreakToLeftColumn) &&
								re.SpotlightLeftColumn,
						),
					},
					r.has("timedtrialbanner") &&
						i.createElement(J.P, {
							overview: a,
							details: u,
						}),
					r.has("spotlightdlc") &&
						i.createElement(D.Pp, {
							details: u,
						}),
					r.has("spotlightreview") &&
						i.createElement(D.Cz, {
							parent: u,
							overview: a,
							onSeek: t.SeekToSection,
						}),
					r.has("postgamesummary") &&
						i.createElement(ae.T, {
							details: u,
						}),
					r.has("spotlightdemo") &&
						i.createElement(D.Be, {
							overview: a,
							details: u,
						}),
				),
				i.createElement(
					"div",
					{
						className: re.RightColumn,
					},
					r.has("controller") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(Q.Ve, {
								details: u,
								overview: a,
							}),
						),
					r.has("mastersubincluded") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(j, {
								details: u,
							}),
						),
					r.has("friends") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "friends",
									parent: t,
								},
								i.createElement(c.yj, {
									details: u,
								}),
							),
						),
					r.has("additionalcontent") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "additionalcontent",
									parent: t,
								},
								i.createElement(b, {
									overview: a,
									details: u,
								}),
							),
						),
					r.has("achievements") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "achievements",
									parent: t,
								},
								i.createElement(B.tm, {
									details: u,
								}),
							),
						),
					r.has("notes") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "notes",
									parent: t,
								},
								i.createElement(ne.E, {
									overview: a,
									details: u,
								}),
							),
						),
					r.has("cards") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "cards",
									parent: t,
								},
								i.createElement(I.LB, {
									details: u,
								}),
							),
						),
					r.has("dlc") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "dlc",
									parent: t,
								},
								i.createElement(w.Kf, {
									details: u,
								}),
							),
						),
					r.has("workshop") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "workshop",
									parent: t,
								},
								i.createElement(R.y, {
									details: u,
								}),
							),
						),
					r.has("screenshots") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "screenshots",
									parent: t,
								},
								i.createElement(E.E, {
									overview: a,
									details: u,
								}),
							),
						),
					r.has("review") &&
						i.createElement(
							o.tH,
							{
								fallback: () => null,
							},
							i.createElement(
								UL,
								{
									name: "review",
									parent: t,
								},
								i.createElement(M.h, {
									details: u,
									overview: a,
								}),
							),
						),
				),
				i.createElement(
					"div",
					{
						className: re.LeftColumn,
					},
					r.has("nonsteam") &&
						i.createElement(G, {
							overview: a,
						}),
					r.has("offline") && i.createElement(O.t, null),
					r.has("activityrollup") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "activityrollup",
									parent: t,
								},
								i.createElement(m.M, {
									appid: a.appid,
								}),
							),
						),
					r.has("activity") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "activity",
									parent: t,
								},
								i.createElement(m.W, {
									appid: a.appid,
								}),
							),
						),
					r.has("community") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "community",
									parent: t,
								},
								i.createElement(k.w, {
									appid: a.appid,
								}),
							),
						),
				),
			),
	);
});
function le(e) {
	const t = i.useContext(AC);
	return i.createElement(t, {
		...e,
	});
}
export class UL extends i.Component {
	render() {
		return i.createElement(
			"div",
			{
				className: re.SeekTarget,
				ref: (e) => {
					this.props.parent.RegisterSection(this.props.name, e);
				},
			},
			this.props.children,
		);
	}
}
