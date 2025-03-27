import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { PA } from "./41230.js";
import s from "./88244.js";
import o from "./42318.js";
import l from "./56262.js";
import c from "./2326.js";
import m from "./80478.js";
import u from "./91486.js";
import { A } from "./90765.js";
import p from "./1965.js";
import g from "./46424.js";
import h, { jb, Qt } from "./18057.js";
import C, { br } from "./18869.js";
import _ from "./84697.js";
import w from "./3651.js";
import B from "./57665.js";
import v from "./15448.js";
import I from "./22165.js";
import E from "./57150.js";
import M from "./71333.js";
import T from "./52470.js";
import R from "./81452.js";
import k from "./77163.js";
import D from "./38857.js";
import N from "./17914.js";
import O from "./91152.js";
import P from "./80629.js";
import z from "./50376.js";
import U from "./41092.js";
import V from "./87935.js";
import H from "./56726.js";
import Q from "./71769.js";
import Z from "./72476.js";
import Y, { ID } from "./44846.js";
import K from "./52451.js";
import X from "./20590.js";
import J from "./81863.js";
import $ from "./78057.js";
import ee from "./22091.js";
import te from "./69359.js";
import ne from "./9066.js";
import { qw } from "./89748.js";
import ae from "./53074.js";
var f = _;
const b = PA(function (e) {
	const { details, overview } = e;
	if (details.vecMusicAlbums.length || details.strManualURL) {
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
				details.vecMusicAlbums.map((e) => {
					return i.createElement(y, {
						content: e,
						key: "key" + e.unAppID,
					});
				}),
				details.strManualURL &&
					i.createElement(S, {
						overview: overview,
						details: details,
					}),
			),
		);
	} else {
		return null;
	}
});
function y(e) {
	const { content } = e;
	const r = br();
	return i.createElement(
		"div",
		{
			className: A(f.AdditionalItem, f.Soundtracks),
			onClick: () => {
				return r.App(content.unAppID);
			},
			key: "key" + content.unAppID,
		},
		i.createElement(g.j2, {
			key: "image",
			className: f.Image,
			appid: content.unAppID,
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
				content.strName,
			),
			i.createElement(
				"div",
				{
					key: "artist",
					className: f.Artist,
				},
				i.createElement(g.F9, {
					appid: content.unAppID,
				}),
			),
			i.createElement(
				"div",
				{
					key: "summary",
					className: f.TracksDetails,
				},
				i.createElement(g.p, {
					appid: content.unAppID,
				}),
			),
		),
	);
}
function S(e) {
	const { overview, details } = e;
	const n = jb(details.strManualURL);
	return i.createElement(
		"div",
		{
			className: A(f.AdditionalItem, f.Manual),
			onClick: n,
		},
		i.createElement(
			"div",
			{
				className: f.Image,
			},
			i.createElement(u.z, {
				className: f.AssetImage,
				app: overview,
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
var L = P;
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
var W = U;
const j = (e) => {
	let [t, r] = i.useState(false);
	let e_details = e.details;
	let a = V.B7.GetStoreURL() + "app/" + e_details?.unMasterSubAppID;
	let s = Qt(a);
	if (!e_details.unMasterSubAppID) {
		return null;
	}
	let e_details_strMasterSubIncludedWith = e_details.strMasterSubIncludedWith;
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
					src: e_details_strMasterSubIncludedWith,
					onLoad: () => {
						return r(true);
					},
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
var re = te;
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
		const r = ID(Z.TS.LAUNCHER_TYPE);
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
			a = a.filter((e) => {
				return !["community"].includes(e);
			});
		}
		const s = new Set(a);
		if ($.H.BIsWorkshopVisible(t)) {
			s.add("workshop");
		}
		if (qw().BIsOfflineMode()) {
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
				className: A(re.Container, re.Glassy),
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
Cg([K.oI], N_.prototype, "OnHeaderWaypointLeave", null);
Cg([K.oI], N_.prototype, "OnHeaderWaypointEnter", null);
Cg([K.oI], N_.prototype, "onGameInfoToggle", null);
Cg([K.oI], N_.prototype, "RegisterSection", null);
Cg([K.oI], N_.prototype, "SeekToSection", null);
N_ = q = Cg([a.PA], N_);
export const ACContext = i.createContext(function (e) {
	const {
		parentComponent,
		setSections,
		concise,
		overview,
		details,
		onGameInfoToggle,
		bStickyHeader,
		bFastRender,
		bShowGameInfo,
		bSuppressTransition,
		bShowingLaunchDetails,
	} = e;
	const f = $.H.BIsWorkshopVisible(details);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(l.XC, {
			key: overview.appid,
			className: bStickyHeader && re.HidePlayBar,
			bInPage: true,
			details: details,
			overview: overview,
			stickyheader: bStickyHeader,
			onGameInfoToggle: onGameInfoToggle,
			onSeek: parentComponent.SeekToSection,
			bShowInfoExpanded: bShowGameInfo,
			bShowingLaunchDetails: bShowingLaunchDetails,
		}),
		overview.is_invalid_os_type && i.createElement(x, null),
		setSections.has("info") &&
			i.createElement(v.b, {
				concise: concise,
				overview: overview,
				details: details,
				expand: bShowGameInfo,
				suppressTransition: bSuppressTransition,
			}),
		i.createElement(T.Qd, {
			overview: overview,
			details: details,
			workshopVisible: f,
			marketPresence: $.H.BHasMarketPresence(details),
		}),
		!bFastRender &&
			i.createElement(
				"div",
				{
					className: re.ColumnContainer,
				},
				i.createElement(
					"div",
					{
						className: onGameInfoToggle(
							re.Spotlights,
							s.o.rightPanelWidth >= parseInt(re.SpotlightBreakToLeftColumn) &&
								re.SpotlightLeftColumn,
						),
					},
					setSections.has("timedtrialbanner") &&
						i.createElement(J.P, {
							overview: overview,
							details: details,
						}),
					setSections.has("spotlightdlc") &&
						i.createElement(D.Pp, {
							details: details,
						}),
					setSections.has("spotlightreview") &&
						i.createElement(D.Cz, {
							parent: details,
							overview: overview,
							onSeek: parentComponent.SeekToSection,
						}),
					setSections.has("postgamesummary") &&
						i.createElement(ae.T, {
							details: details,
						}),
					setSections.has("spotlightdemo") &&
						i.createElement(D.Be, {
							overview: overview,
							details: details,
						}),
				),
				i.createElement(
					"div",
					{
						className: re.RightColumn,
					},
					setSections.has("controller") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(Q.Ve, {
								details: details,
								overview: overview,
							}),
						),
					setSections.has("mastersubincluded") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(j, {
								details: details,
							}),
						),
					setSections.has("friends") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "friends",
									parent: parentComponent,
								},
								i.createElement(c.yj, {
									details: details,
								}),
							),
						),
					setSections.has("additionalcontent") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "additionalcontent",
									parent: parentComponent,
								},
								i.createElement(b, {
									overview: overview,
									details: details,
								}),
							),
						),
					setSections.has("achievements") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "achievements",
									parent: parentComponent,
								},
								i.createElement(B.tm, {
									details: details,
								}),
							),
						),
					setSections.has("notes") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "notes",
									parent: parentComponent,
								},
								i.createElement(ne.E, {
									overview: overview,
									details: details,
								}),
							),
						),
					setSections.has("cards") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "cards",
									parent: parentComponent,
								},
								i.createElement(I.LB, {
									details: details,
								}),
							),
						),
					setSections.has("dlc") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "dlc",
									parent: parentComponent,
								},
								i.createElement(w.Kf, {
									details: details,
								}),
							),
						),
					setSections.has("workshop") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "workshop",
									parent: parentComponent,
								},
								i.createElement(R.y, {
									details: details,
								}),
							),
						),
					setSections.has("screenshots") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "screenshots",
									parent: parentComponent,
								},
								i.createElement(E.E, {
									overview: overview,
									details: details,
								}),
							),
						),
					setSections.has("review") &&
						i.createElement(
							o.tH,
							{
								fallback: () => {
									return null;
								},
							},
							i.createElement(
								UL,
								{
									name: "review",
									parent: parentComponent,
								},
								i.createElement(M.h, {
									details: details,
									overview: overview,
								}),
							),
						),
				),
				i.createElement(
					"div",
					{
						className: re.LeftColumn,
					},
					setSections.has("nonsteam") &&
						i.createElement(G, {
							overview: overview,
						}),
					setSections.has("offline") && i.createElement(O.t, null),
					setSections.has("activityrollup") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "activityrollup",
									parent: parentComponent,
								},
								i.createElement(m.M, {
									appid: overview.appid,
								}),
							),
						),
					setSections.has("activity") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "activity",
									parent: parentComponent,
								},
								i.createElement(m.W, {
									appid: overview.appid,
								}),
							),
						),
					setSections.has("community") &&
						i.createElement(
							o.tH,
							null,
							i.createElement(
								UL,
								{
									name: "community",
									parent: parentComponent,
								},
								i.createElement(k.w, {
									appid: overview.appid,
								}),
							),
						),
				),
			),
	);
});
function le(e) {
	const t = i.useContext(ACContext);
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
