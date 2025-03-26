var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./60712.js");
var a = i;
var s = require("./91486.js");
var o = require("./15489.js");
var l = require("./18869.js");
var c = require("./93681.js");
var m = require("./22091.js");
var u = require("./10927.js");
var d = require("./96000.js");
var A = require("./52958.js");
var p = require("./48289.js");
var g = require("./34792.js");
var h = require("./91745.js");
var C = require("./46422.js");
var _ = require(/*webcrack:missing*/ "./89193.js");
var f = require(/*webcrack:missing*/ "./41230.js");
var b = require(/*webcrack:missing*/ "./90095.js");
var y = require(/*webcrack:missing*/ "./63696.js");
var S = require(/*webcrack:missing*/ "./31084.js");
var w = require(/*webcrack:missing*/ "./69164.js");
var B = require("./56655.js");
var v = require("./46217.js");
var I = require("./35488.js");
var E = require(/*webcrack:missing*/ "./50376.js");
var M = require(/*webcrack:missing*/ "./98995.js");
var T = require(/*webcrack:missing*/ "./49455.js");
var R = require(/*webcrack:missing*/ "./90765.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	Hq,
	LocalizeReact,
	LocalizePlural,
	LocalizeCalendarTime,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
var N = require("./34428.js");
var F = require("./80254.js");
var G = require(/*webcrack:missing*/ "./52451.js");
var O = require(/*webcrack:missing*/ "./72476.js");
var P = require("./96680.js");
var L = require("./5808.js");
var z = require("./28346.js");
var x = require("./39287.js");
var U = x;
var W = require("./56262.js");
var V = require("./96593.js");
var H = require("./27337.js");
var j = require(/*webcrack:missing*/ "./58254.js");
var q = require("./97893.js");
var Q = require("./57016.js");
var Z = require("./78057.js");
var Y = require("./87935.js");
var K = require("./5640.js");
var X = require("./46424.js");
var J = require("./32700.js");
var $ = require("./39147.js");
var ee = require("./37567.js");
var te = ee;
var re = require("./96821.js");
var ne = re;
var ie = require(/*webcrack:missing*/ "./36229.js");
var ae = require("./90076.js");
function se(e) {
	const { enabled: t, duration: r, className: n, ...i } = e;
	const a = {
		transitionDuration: r / 1000 + "s",
	};
	const s = y.useRef(null);
	return y.createElement(
		j.A,
		{
			nodeRef: s,
			in: t,
			appear: true,
			unmountOnExit: true,
			classNames: {
				enter: te.FadeInEnter,
				enterActive: te.FadeInEnterActive,
			},
			timeout: r,
			style: a,
		},
		y.createElement(
			"div",
			{
				ref: s,
				className: te.FadeIn,
			},
			e.children,
		),
	);
}
function oe(e) {
	return Y.B7.GetBaseURLSharedCDN() + "store_item_assets/" + e;
}
function le(e) {
	const { appid: t, appOverview: r } = e;
	const [n] = g.rV.GetClientSetting("library_low_bandwidth_mode");
	const [i] = g.rV.GetClientSetting("library_low_perf_mode");
	const a = n || i;
	const { data: o } = (0, ae.j4)(
		r.BIsShortcut()
			? undefined
			: {
					appid: t,
				},
	);
	const l = y.useMemo(() => {
		if (!o) {
			return [];
		}
		let e = o.all_ages_screenshots || [];
		if (a && e.length) {
			e = [e[Math.floor(Math.random() * e.length)]];
		}
		return e.map(
			({ filename: e }) => e.substring(0, e.indexOf(".")) + ".600x338.jpg",
		);
	}, [o, a]);
	const [c, m] = y.useState(() => (l?.length ? 0 : undefined));
	let u;
	let d;
	let A;
	y.useEffect(() => {
		if (!l || !l.length) {
			m(undefined);
			return;
		}
		const e = c === undefined ? 0 : (c + 1) % l.length;
		new Image().src = oe(l[e]);
		const t = window.setTimeout(() => m(e), 1000);
		return () => window.clearTimeout(t);
	}, [l, c]);
	let p = {};
	const h = y.useRef(null);
	if (c !== undefined && l && c < l.length) {
		const e = l[c];
		d = e;
		p.backgroundImage = `url(${oe(e)})`;
		u = y.createElement("div", {
			className: te.ScreenshotImg,
			ref: h,
		});
	} else {
		d = String(t);
		A = te.NoScreenshotFallback;
		u = y.createElement(
			"div",
			{
				className: te.NoScreenshotFallbackWrapper,
				ref: h,
			},
			y.createElement(s.z, {
				app: r,
				eAssetType: 3,
				className: te.NoScreenshotFallbackAsset,
			}),
		);
	}
	return y.createElement(
		"div",
		{
			className: te.ScreenshotCrossfade,
		},
		y.createElement(
			se,
			{
				duration: 250,
				className: te.CrossfadeImage,
				enabled: true,
			},
			y.createElement(
				H.H,
				{
					childRef: h,
					keyExtractor: () => d,
					duration: 250,
					style: p,
					className: (0, R.A)(te.CrossfadeImage, A),
				},
				u,
			),
		),
	);
}
const ce = (0, f.PA)(function (e) {
	const { appOverview: t, appid: r, displayStatus: n } = e;
	let i = t && Q.IB.GetAppImportantUpdate(r);
	if (i) {
		const e = Date.now() / 1000 - i.date;
		const t = (0, Localize)(
			"#AppPortraitHover_DaysSinceLastUpdate",
			(0, Hq)(e),
		);
		return y.createElement(
			"div",
			{
				className: (0, R.A)(te.AppStatus, te.GameUpdatedContainer),
			},
			y.createElement("div", {
				className: te.GameUpdatedCircle,
			}),
			y.createElement(
				"div",
				{
					className: (0, R.A)(te.ImportantUpdate),
				},
				" ",
				t,
				" ",
			),
		);
	}
	{
		let e = "";
		if ((t && t.BIsAppBlocked()) || (!t && r && K.jR.BIsAppBlocked(r))) {
			e = (0, Localize)("#DisplayStatus_ParentalBlocked");
		} else {
			switch (n) {
				case 1:
				case 2:
				case 3:
				case 5:
				case 6:
				case 7:
				case 22:
				case 18:
				case 25:
				case 21:
				case 12:
				case 17:
				case 37:
				case 26:
					e = (0, J.Bb)(n, true);
					break;
				case 10:
				case 13:
				case 16:
					e = y.createElement(W.RR, {
						app: t,
						bCompact: true,
					});
			}
		}
		e ||= y.createElement(ue, {
			appOverview: t,
		});
		return y.createElement(
			"div",
			{
				className: te.AppStatus,
			},
			e,
		);
	}
});
function me(e) {
	const { steamid: t } = e;
	const r = new ie.b2(t).GetAccountID();
	return (
		(0, p.bV)(r) +
		((0, b.q3)(() => p.O$.GetFriendState(r).is_display_name_nickname)
			? "*"
			: "")
	);
}
function ue(e) {
	const { appOverview: t } = e;
	const [r] = (0, g.VI)("show_copy_count_in_library");
	const n = p.O$.currentUserSteamID;
	const i = t.appid;
	const a = (0, G.vJ)(
		() => SteamClient.FamilySharing.GetAvailableLenders(i),
		[i],
	);
	const s = a?.filter((e) => e.steamid != n.ConvertTo64BitString());
	const o = (0, Z.T)(i);
	if (!a?.length || !o) {
		return null;
	}
	let l;
	const c = !t.owner_account_id;
	const m = o.bHasDifferentCopies && s.length > 1;
	if (o.bHasDifferentCopies) {
		if (c && m) {
			l = (0, Localize)("#FamilyGames_FromTheLibraryOf_Header_Owned");
		} else if (c && !m) {
			l = LocalizeReact(
				"#FamilyGames_FromTheLibraryOf_Single_Owned",
				y.createElement(me, {
					steamid: s[0].steamid,
				}),
			);
		} else if (c || m) {
			if (!c && m) {
				l = (0, Localize)("#FamilyGames_FromTheLibraryOf_Header");
			}
		} else {
			l = LocalizeReact(
				"#FamilyGames_FromTheLibraryOf_Single",
				y.createElement(me, {
					steamid: s[0].steamid,
				}),
			);
		}
	} else if (!c || (r && t.number_of_copies > 1)) {
		l = LocalizePlural("#FamilyGroup_GameAvailable", t.number_of_copies);
	}
	return y.createElement(
		"div",
		{
			className: te.Owners,
		},
		l,
		m &&
			y.createElement(
				"ul",
				{
					className: te.OwnerList,
				},
				s.map((e) =>
					y.createElement(
						"li",
						{
							key: e.steamid,
							className: te.Owner,
						},
						y.createElement(me, {
							steamid: e.steamid,
						}),
					),
				),
			),
	);
}
let de = class extends y.Component {
	constructor(e) {
		super(e);
		(0, _.Gn)(this);
	}
	m_bManageMenuVisible = false;
	OnClick(e) {
		this.m_bManageMenuVisible &&= false;
		e.stopPropagation();
	}
	GetDownloadStatusTitle() {
		if (this.props.displayStatus == 7) {
			return (0, Localize)("#AppPortraitHover_DownloadStatusTitle");
		} else if (this.props.displayStatus == 6) {
			return (0, Localize)("#AppPortraitHover_DownloadStatusTitle_Update");
		} else {
			return "";
		}
	}
	GetDownloadStatusDetails() {
		const e = q.hj.DownloadOverview;
		if (e.update_appid == this.props.appid) {
			switch (e.update_state) {
				case "Starting":
				case "Validating":
				case "Preallocating":
				case "Unpacking":
				case "Patching":
				case "Installing":
				case "Verifying":
				case "Finalizing":
				case "Stopping":
					return (0, Localize)("#Downloads_State_" + e.update_state);
				case "Downloading":
				case "Updating":
				case "Transferring":
				case "Preloading": {
					let t = q.hj.downloadTimeRemaining;
					if (t == "") {
						return (0, Localize)("#Downloads_State_Calculating");
					} else {
						return (
							"@ " + (0, $.ZC)(e.update_network_bytes_per_second) + " | " + t
						);
					}
				}
				case "None":
					return (0, Localize)("#Downloads_State_Calculating");
			}
		}
		return "";
	}
	get downloadStatusVisible() {
		return (
			!!this.props.appOverview &&
			(this.props.displayStatus == 7 || this.props.displayStatus == 6)
		);
	}
	render() {
		let e =
			this.props.appOverview &&
			V.tw.GetVerticalCapsuleURLForApp(this.props.appOverview) &&
			this.props.bHasVerticalCapsule !== false;
		let t = E1(this.props.appid).length;
		let r = t > 0;
		const n = this.props.appOverview && this.props.appOverview.app_type == 8192;
		const i = this.props.appOverview && !n;
		const a = this.props.appOverview && !n;
		const o =
			i &&
			(0, F.l)(
				this.props.appOverview.minutes_playtime_last_two_weeks,
				"#AppBox_RecentPlayTime_",
			);
		const l =
			i &&
			(0, F.l)(
				this.props.appOverview.minutes_playtime_forever,
				"#AppBox_TotalPlayTime_",
			);
		return y.createElement(
			"div",
			{
				className: te.AppPortraitHover,
				onClick: this.OnClick,
				onContextMenu: this.OnClick,
			},
			y.createElement(
				"div",
				{
					className: te.CapsuleBackgroundContainer,
				},
				this.props.appOverview &&
					y.createElement(s.z, {
						app: this.props.appOverview,
						eAssetType: e ? 0 : 3,
						className: te.CapsuleBackground,
					}),
			),
			y.createElement(
				"div",
				{
					className: (0, R.A)(te.Content, r && te.FriendsPlaying),
				},
				y.createElement(
					"div",
					{
						className: te.AppTitleContainer,
					},
					y.createElement(
						"div",
						{
							className: te.AppTitle,
							key: "title",
						},
						this.props.displayName,
					),
				),
				(r || h.hG.GetToggle(1)) &&
					y.createElement(
						"div",
						{
							className: te.FriendsContainer,
						},
						y.createElement(
							"div",
							{
								className: te.FriendsHeader,
							},
							y.createElement("div", {
								className: te.FriendsCircle,
							}),
							y.createElement(
								"div",
								{
									className: te.FriendsLabel,
								},
								LocalizePlural("#AppPortraitHover_FriendsPlaying", t),
							),
						),
						y.createElement(
							"div",
							null,
							y.createElement(hF, {
								appid: this.props.appid,
								bPortraitHover: true,
								nFriendsToShow: 5,
							}),
						),
					),
				a &&
					y.createElement(le, {
						appid: this.props.appid,
						appOverview: this.props.appOverview,
					}),
				y.createElement(ce, {
					appid: this.props.appid,
					appOverview: this.props.appOverview,
					displayStatus: this.props.displayStatus,
				}),
				this.downloadStatusVisible &&
					y.createElement(
						"div",
						{
							className: te.DownloadStatus,
						},
						y.createElement(
							"div",
							{
								className: te.DownloadContainer,
							},
							y.createElement(
								"div",
								{
									className: te.DownloadStatusTitle,
								},
								this.GetDownloadStatusTitle(),
							),
							y.createElement(W.Mm, {
								className: ne.PortraitBar,
								progressPct: this.props.appOverview.status_percentage,
								style: {
									width: "100%",
								},
							}),
							y.createElement(
								"div",
								{
									className: te.DownloadStatusDetails,
								},
								" ",
								this.GetDownloadStatusDetails(),
							),
						),
					),
				!this.downloadStatusVisible &&
					!!o &&
					!!l &&
					!this.props.fnRenderBlurb &&
					y.createElement(
						"div",
						{
							className: te.GameStatus,
						},
						y.createElement(
							"div",
							{
								className: te.PlaytimeDetails,
							},
							y.createElement(
								"div",
								{
									className: (0, R.A)(te.Header),
								},
								(0, Localize)("#AppBox_PlayTimeHeader"),
							),
							y.createElement(
								"div",
								{
									className: (0, R.A)(te.PlayedRecent),
								},
								o,
							),
							y.createElement(
								"div",
								{
									className: (0, R.A)(te.PlayedTotal),
								},
								l,
							),
						),
					),
				n &&
					y.createElement(
						"div",
						{
							className: te.GameStatus,
						},
						y.createElement(
							"div",
							{
								className: te.PlaytimeDetails,
							},
							y.createElement(X.p, {
								appid: this.props.appid,
							}),
						),
					),
				this.props.fnRenderBlurb && this.props.fnRenderBlurb(),
			),
		);
	}
};
(0, n.Cg)([_.sH], de.prototype, "m_bManageMenuVisible", undefined);
(0, n.Cg)([G.oI], de.prototype, "OnClick", null);
de = (0, n.Cg)([f.PA], de);
var Ae = require("./42805.js");
var pe = require("./36464.js");
let ge = class extends y.Component {
	render() {
		const {
			className: e,
			rgFriends: t,
			nMaxIcons: r,
			bFeatured: n,
			bPortraitHover: i,
			avatarSize: a,
			bHideStatus: s,
			...o
		} = this.props;
		let l = [];
		const c = t.length <= r ? t.length : r - 1;
		const m = Math.max(0, t.length - c);
		for (let e = 0; e < c; ++e) {
			const r = t[e] && t[e].persona;
			const n = r ? r.m_steamid.GetAccountID() : "index " + e;
			l.push(
				y.createElement(pe.fH, {
					key: n,
					friend: t[e],
					size: a,
					statusPosition: s ? "none" : "bottom",
				}),
			);
		}
		if (m > 0) {
			const t = (0, R.A)(
				U.IconsRestCount,
				e,
				n && U.Featured,
				i && U.PortraitHover,
				m > 9 && U.TwoDigits,
			);
			l.push(
				y.createElement(
					"div",
					{
						className: t,
						key: "rest count ",
					},
					"+",
					m,
				),
			);
		}
		return y.createElement(
			"div",
			{
				...o,
				className: (0, R.A)(
					U.FriendsBar,
					U.IconsView,
					e,
					n && U.Featured,
					i && U.PortraitHover,
				),
			},
			l,
		);
	}
};
ge = (0, n.Cg)([f.PA], ge);
let he = class extends y.Component {
	render() {
		const { className: e, nFriends: t, ...r } = this.props;
		return y.createElement(
			"div",
			{
				...r,
				className: (0, R.A)(U.FriendsBar, U.SummaryView, e),
			},
			y.createElement("div", {
				className: U.SummaryLeader,
			}),
			y.createElement(
				"div",
				{
					className: U.SummaryCount,
				},
				t,
			),
		);
	}
};
he = (0, n.Cg)([f.PA], he);
var Ce = require("./89748.js");
const _e = (0, f.PA)(function (e) {
	const t = E1(e.appid).length;
	return (
		t > 0 &&
		y.createElement(he, {
			nFriends: t,
		})
	);
});
export let hF = class extends y.Component {
	render() {
		const {
			bFeatured: e,
			rgFriends: t,
			bPortraitHover: r,
			bShortLayout: n,
			nFriendsToShow: i,
			appid: a,
			context: s,
		} = this.props;
		let o = [...(t || E1(a))];
		if (h.hG.GetToggle(1)) {
			while (o.length < 30) {
				const e = p.O$.allFriends[o.length % p.O$.allFriends.length];
				if (!e) {
					break;
				}
				o.push(e);
			}
		}
		if (o.length == 0) {
			return null;
		}
		let l = i;
		l ||= n ? (e ? 3 : 2) : 4;
		return y.createElement(ge, {
			className: (0, R.A)(n && U.Short, s == 4 && U.InFriendsActivity),
			rgFriends: o,
			bHideStatus: s == 4,
			nMaxIcons: l,
			bFeatured: e,
			bPortraitHover: r,
			avatarSize: n ? "X-Small" : "Small",
		});
	}
};
export function E1(e) {
	return p.O$.GetFriendsInGame(e);
}
function ye(e) {
	let t = e.app.display_status == 13;
	const r = (0, F.l)(
		e.app.minutes_playtime_last_two_weeks,
		"#AppBox_RecentPlayTime_",
	);
	const n = (0, F.l)(e.app.minutes_playtime_forever, "#AppBox_TotalPlayTime_");
	return y.createElement(
		"div",
		{
			className: (0, R.A)(
				U.PlaytimeDetails,
				e.bShortLayout && U.Short,
				t && U.NotReleased,
			),
		},
		t
			? y.createElement(
					"div",
					{
						className: (0, R.A)(
							U.PlaytimeDetails,
							U.Header,
							e.bShortLayout && U.Short,
						),
					},
					y.createElement(W.RR, {
						app: e.app,
					}),
				)
			: y.createElement(
					y.Fragment,
					null,
					y.createElement(
						"div",
						{
							className: (0, R.A)(
								U.PlaytimeDetails,
								U.Header,
								e.bShortLayout && U.Short,
							),
						},
						(0, Localize)("#AppBox_PlayTimeHeader"),
					),
					y.createElement(
						"div",
						{
							className: (0, R.A)(
								U.PlaytimeDetails,
								U.PlayedRecent,
								e.bShortLayout && U.Short,
							),
						},
						r,
					),
					y.createElement(
						"div",
						{
							className: (0, R.A)(
								U.PlaytimeDetails,
								U.PlayedTotal,
								e.bShortLayout && U.Short,
							),
						},
						n,
					),
				),
	);
}
export function eL(e) {
	return y.createElement(
		"div",
		{
			className: (0, R.A)(U.PortraitMessage, e.bShortLayout && U.Short),
		},
		y.createElement(
			c.r,
			{
				className: (0, R.A)(
					U.PortraitMessage,
					U.Message,
					e.bShortLayout && U.Short,
				),
			},
			e.message,
		),
		e.subMessage &&
			y.createElement(
				"div",
				{
					className: (0, R.A)(
						U.PortraitMessage,
						U.SubMessage,
						e.bShortLayout && U.Short,
					),
				},
				e.subMessage,
			),
	);
}
function we(e) {
	switch (e.display_status) {
		case 3:
		case 9:
		case 7:
		case 13:
			return true;
	}
	return false;
}
function Be(e) {
	const { feature: t } = e;
	const r = (0, z.tx)(t);
	let n = r.svg;
	return y.createElement(
		"div",
		{
			className: U.ControllerSupportIcon,
		},
		r.sIconURL &&
			!n &&
			y.createElement("img", {
				className: U.Icon,
				src: r.sIconURL,
				alt: r.sDisplayName,
			}),
		n &&
			y.createElement(n, {
				className: U.Icon,
			}),
	);
}
function ve(e) {
	const { overview: t } = e;
	const r = (0, O.Qn)();
	const n = !(0, B.er)() && r && !t.BIsMusicAlbum();
	const i = m.Fd.Get().GetControllers();
	const a = i.length > 0 ? i[0] : 32;
	const s = (0, b.q3)(
		() => C.oy.MostRecentlyActiveController?.eControllerType ?? a,
	);
	if (!n) {
		return null;
	}
	if (s == 34) {
		if ((0, z.zX)(t, 17)) {
			return y.createElement(Be, {
				feature: 17,
			});
		}
		if ((0, z.zX)(t, 16)) {
			return y.createElement(Be, {
				feature: 16,
			});
		}
	} else if (s == 45 || s == 48) {
		if ((0, z.zX)(t, 19)) {
			return y.createElement(Be, {
				feature: 19,
			});
		}
		if ((0, z.zX)(t, 18)) {
			return y.createElement(Be, {
				feature: 18,
			});
		}
	}
	if ((0, z.zX)(t, 1)) {
		return y.createElement(Be, {
			feature: 1,
		});
	} else if ((0, z.zX)(t, 2)) {
		return y.createElement(Be, {
			feature: 2,
		});
	} else if ((0, z.zX)(t, 3)) {
		return y.createElement(Be, {
			feature: 3,
		});
	} else {
		return y.createElement(
			"div",
			{
				className: U.ControllerSupportIcon,
			},
			y.createElement(E._2Q, {
				className: U.Icon,
			}),
		);
	}
}
hF = (0, n.Cg)([f.PA], hF);
export const TK = (0, f.PA)(function (e) {
	const {
		bShortLayout: t,
		bShowFriendsAsIcons: r,
		app: n,
		strCollectionId: i,
		bFeatured: a,
		bShowAsHovered: s,
		sortByType: c,
		context: m,
		nWidth: u,
		bHideFooter: p,
		bHideBanners: h,
		bHidePortrait: C,
		bHideCopyCount: _,
		strMessage: f,
		strSubMessage: b,
		onClick: v,
		children: I,
		...E
	} = e;
	const M = (0, O.Qn)();
	const T = (0, B.er)();
	const k = y.useRef(undefined);
	const N = y.useRef(undefined);
	const F = (0, P.$2)();
	const [G] = (0, g.VI)("library_low_perf_mode");
	const [z] = (0, g.VI)("show_copy_count_in_library");
	const x = z && !_;
	const W = (0, Ce.IU)();
	const V = (0, l.br)();
	const H = v
		? (e) => v(e)
		: (e) => {
				V.App(n.appid, {
					strCollectionId: i,
				});
				e.stopPropagation();
			};
	const j = y.useCallback(
		(e) => {
			if (m == 6) {
				return;
			}
			const t = k.current
				? k.current.GetAssetImage()
				: N.current.GetAssetImage();
			(0, S.lX)(
				y.createElement(L.uU, {
					overview: n,
					client: "mostavailable",
					launchSource: 1000,
					bInGamepadUI: M,
					hasCustomArtwork: t && t.is_custom_image,
					onChangeArtwork: t && t.OnChangeArtwork,
					strCollectionId: i,
					ownerWindow: F?.BrowserWindow,
				}),
				e,
				(0, L.zq)(),
			);
		},
		[n, m, i, M, F],
	);
	const q = y.useCallback(
		() =>
			y.createElement(de, {
				appid: n.appid,
				displayName: n.display_name,
				displayStatus: n.display_status,
				bHasVerticalCapsule: k.current?.BHasVerticalCapsule(),
				appOverview: n,
			}),
		[n],
	);
	if (C) {
		return null;
	}
	const Q = c == null || c == 10 || c == 1;
	const Z = a ? U.Landscape : U.Portrait;
	let Y;
	let K = n.app_type == 8192;
	let X = i == d.A8.AppType_Soundtracks;
	switch (m) {
		case 1:
			Y = U.InCollection;
			break;
		case 2:
			Y = U.InRecentGames;
			break;
		case 3:
			Y = U.InGameDetails;
			break;
		case 4:
			Y = U.InFriendsActivity;
			break;
		case 5:
			Y = U.InPlayNext;
			break;
		case 6:
			Y = U.InDownloads;
			break;
		case 7:
			Y = U.InLibraryManager;
	}
	const J = A._.GetDragData("apps") && A._.GetDragData("apps").length > 0;
	const $ = (0, R.A)(
		U.LibraryItemBox,
		Z,
		Y,
		we(n) ? U.NotInstalled : null,
		a ? U.FeaturedCapsule : null,
		M && U.BasicMode,
		X && U.SoundtrackCollection,
		s && U.ShowAsHovered,
	);
	const ee = (0, R.A)(
		U.Draggable,
		t && U.Short,
		!J && U.HoversEnabled,
		K && U.Soundtrack,
		(function (e, t) {
			if (!e) {
				return null;
			}
			switch (jF(e, t)) {
				case 1:
					return U.Small;
				case 2:
					return U.Medium;
				case 3:
					return U.Large;
				default:
					return null;
			}
		})(u, M),
	);
	let te = n.BIsModOrShortcut();
	const re = !K && (M || m == 2 || m == 5);
	let ne = y.createElement(
		y.Fragment,
		null,
		a
			? y.createElement(Ee, {
					ref: N,
					...e,
				})
			: y.createElement(Mf, {
					ref: k,
					app: n,
					bShortLayout: t,
				}),
		!a &&
			!G &&
			!M &&
			y.createElement("div", {
				className: (0, R.A)(U.LibraryItemBoxShine, Z),
			}),
		y.createElement(
			"div",
			{
				className: U.LibraryItemOverlayOuterArea,
			},
			y.createElement(
				"div",
				{
					className: U.LibraryItemOverlayInnerArea,
				},
				y.createElement(
					"div",
					{
						className: U.LibraryBottomItems,
					},
					y.createElement(
						"div",
						{
							className: U.LibraryItemIcons,
						},
						x &&
							W &&
							n.number_of_copies > 1 &&
							y.createElement(
								"div",
								{
									className: U.NumberOfCopies,
								},
								n.number_of_copies,
							),
						!a &&
							re &&
							y.createElement(Ne, {
								app: n,
							}),
						!a &&
							Q &&
							!r &&
							y.createElement(_e, {
								appid: n.appid,
							}),
						!a &&
							M &&
							y.createElement(Ge, {
								app: n,
							}),
						!te &&
							T &&
							y.createElement(B.$o, {
								className: U.SteamDeckCompatIcon,
								category: n.steam_deck_compat_category,
							}),
						y.createElement(ve, {
							overview: n,
						}),
					),
					m != 6 &&
						y.createElement(Fe, {
							app: n,
						}),
				),
			),
		),
		M &&
			y.createElement(Te, {
				app: n,
				sortByType: c,
				context: m,
			}),
	);
	const ie = y.createElement(
		y.Fragment,
		null,
		y.createElement(
			o.z,
			{
				...E,
				autoFocus: false,
				className: $,
				onClick: H,
				onContextMenu: j,
				hoverDelay: 300,
				onOKButton: H,
				renderHover: q,
				bDisabled: J,
			},
			ne,
		),
		!h &&
			y.createElement(De, {
				...e,
				context: m,
				bShortLayout: t,
			}),
		Q &&
			r &&
			y.createElement(hF, {
				appid: n.appid,
				bFeatured: a,
				bShortLayout: t,
				context: m,
			}),
		!M &&
			y.createElement(Te, {
				app: n,
				sortByType: c,
				context: m,
			}),
	);
	if (M) {
		return y.createElement(
			w.Z,
			{
				noFocusRing: true,
				navKey: "appportrait_" + n.appid,
				focusable: false,
				onOKButton: H,
				className: ee,
				onMenuActionDescription: (0, Localize)("#ActionButtonLabelContextMenu"),
			},
			ie,
			I,
		);
	} else if (m == 6 || m == 7) {
		return y.createElement(
			"div",
			{
				className: ee,
			},
			ie,
			I,
		);
	} else {
		return y.createElement(
			Ae.Bj,
			{
				appid: n.appid,
				strCollectionId: i,
				className: ee,
			},
			ie,
			I,
		);
	}
});
let Ee = class extends y.Component {
	constructor(e) {
		super(e);
		(0, _.Gn)(this);
	}
	static contextType = O.QO;
	m_refAssetImage = y.createRef();
	OnLandscapeImageLoaded(e) {
		this.m_strImageURL = e.currentTarget.src;
	}
	GetAssetImage() {
		return this.m_refAssetImage.current;
	}
	m_strImageURL = undefined;
	GetLandscapeImageURL() {
		return this.m_strImageURL;
	}
	render() {
		const e = this.context?.IN_GAMEPADUI;
		const [t] = g.rV.GetClientSetting("library_low_perf_mode");
		return y.createElement(
			y.Fragment,
			null,
			y.createElement(s.z, {
				ref: this.m_refAssetImage,
				app: this.props.app,
				eAssetType: 3,
				className: (0, R.A)(U.PortraitImage, U.Landscape, U.NoCapsuleImage),
				onLoad: this.OnLandscapeImageLoaded,
				bShortDisplay: this.props.bShortLayout,
			}),
			!t &&
				!e &&
				y.createElement("div", {
					className: (0, R.A)(U.LibraryItemBoxShine, U.Landscape),
				}),
			!e &&
				y.createElement(Re, {
					app: this.props.app,
					context: this.props.context,
					bHideFooter: this.props.bHideFooter,
					bShortLayout: this.props.bShortLayout,
					landscapeURLSource: this,
					strMessage: this.props.strMessage,
					strSubMessage: this.props.strSubMessage,
				}),
		);
	}
};
(0, n.Cg)([G.oI], Ee.prototype, "OnLandscapeImageLoaded", null);
(0, n.Cg)([_.sH], Ee.prototype, "m_strImageURL", undefined);
Ee = (0, n.Cg)([f.PA], Ee);
export class Mf extends y.Component {
	m_refAssetImage = y.createRef();
	state = {
		nCurrentVerticalCapsuleAppId: undefined,
	};
	GetAssetImage() {
		return this.m_refAssetImage.current;
	}
	OnVerticalCapsuleLoad(e) {
		this.setState({
			nCurrentVerticalCapsuleAppId: e,
		});
	}
	OnVerticalCapsuleError() {
		console.log(
			"No vertical capsule for",
			this.props.app.appid,
			this.props.app.display_name,
		);
		this.setState({
			nCurrentVerticalCapsuleAppId: -1,
		});
	}
	BHasVerticalCapsule() {
		return (
			this.props.app &&
			this.props.app.appid == this.state.nCurrentVerticalCapsuleAppId
		);
	}
	render() {
		return y.createElement(s.z, {
			ref: this.m_refAssetImage,
			app: this.props.app,
			eAssetType: 0,
			className: (0, R.A)(
				U.PortraitImage,
				U.Capsule,
				this.BHasVerticalCapsule() && U.CapsuleVisible,
			),
			onLoad: () =>
				this.OnVerticalCapsuleLoad(this.props.app && this.props.app.appid),
			onError: this.OnVerticalCapsuleError,
			bShortDisplay: this.props.bShortLayout,
		});
	}
}
(0, n.Cg)([G.oI], Mf.prototype, "OnVerticalCapsuleLoad", null);
(0, n.Cg)([G.oI], Mf.prototype, "OnVerticalCapsuleError", null);
(0, n.Cg)([G.oI], Mf.prototype, "BHasVerticalCapsule", null);
const Te = (0, f.PA)(function (e) {
	const { app: t, sortByType: r, context: n } = e;
	if (r == 1 || n != 1) {
		return null;
	}
	let i;
	let a = false;
	let s = null;
	switch (r) {
		case 4:
			if (t.minutes_playtime_forever == 0) {
				return null;
			}
			i = (0, F.l)(t.minutes_playtime_forever);
			break;
		case 5:
			if (!t.GetLastTimePlayed()) {
				return null;
			}
			i = LocalizeCalendarTime(t.GetLastTimePlayed());
			break;
		case 9:
			let e = t.metacritic_score;
			if (e === undefined) {
				return null;
			}
			s = U.MCGreen;
			if (e < 70 && e > 49) {
				s = U.MCOrange;
			} else if (e < 50) {
				s = U.MCRed;
			}
			i = e;
			break;
		case 6:
			if (t.GetCanonicalReleaseDate() == 0) {
				return null;
			}
			i = LocalizeRtime32ToShortDate(t.GetCanonicalReleaseDate());
			break;
		case 8:
			if (t.size_on_disk == null) {
				return null;
			}
			i = (0, N.dm)(parseFloat(t.size_on_disk), 2);
			if (t.library_id != null) {
				i = t.library_id + " " + i;
			}
			break;
		case 2:
			if (u.y.BGameHasAchievements(t.appid)) {
				let e = u.y.GetAchievementProgress(t.appid);
				if (e == 100) {
					a = true;
				}
				i = (0, Localize)(
					"#Library_SortByPctAchievementsComplete_Tag",
					Math.floor(e),
				);
			} else {
				i = (0, Localize)("#Library_SortByPctAchievementsNoAchievements_Tag");
			}
			break;
		case 7:
			if (!(t.rt_purchased_time > 0)) {
				return null;
			}
			i = LocalizeRtime32ToShortDate(t.rt_purchased_time);
			break;
		default:
			return null;
	}
	return y.createElement(
		"div",
		{
			className: (0, R.A)(
				U.LibraryItemBoxSubscript,
				s,
				a ? U.ClassAllAchieved : "",
			),
		},
		a &&
			y.createElement(E.OiG, {
				fullcolor: true,
			}),
		i,
	);
});
const Re = (0, f.PA)(function (e) {
	const {
		app: t,
		context: r,
		bHideFooter: n,
		bShortLayout: i,
		landscapeURLSource: a,
		strMessage: s,
		strSubMessage: o,
	} = e;
	const l = a.GetLandscapeImageURL();
	const c = s
		? y.createElement(eL, {
				message: s,
				subMessage: o,
				bShortLayout: i,
			})
		: y.createElement(ye, {
				app: t,
				bShortLayout: i,
			});
	return y.createElement(
		y.Fragment,
		null,
		(r == 2 || r == 5) &&
			y.createElement(ke, {
				app: t,
			}),
		!n &&
			y.createElement(
				"div",
				{
					className: (0, R.A)(U.RecentGameFooter),
				},
				c,
				y.createElement(
					"div",
					{
						className: (0, R.A)(U.FooterBlurImageContainer),
					},
					l &&
						y.createElement("img", {
							className: U.FooterBlurImage,
							src: l,
						}),
				),
			),
	);
});
const ke = (0, f.PA)(function (e) {
	const { app: t, className: r, ...n } = e;
	const i = (0, O.Qn)();
	const a = (0, P.$2)();
	const s = (0, L.AH)(a, t, "mostavailable");
	const o = (0, L.Kw)(t, "mostavailable");
	const l = (0, L.WB)(s || o);
	if (!l) {
		console.warn("WARNING: No action icon for app action ", s);
	}
	const c = (0, L.Co)(s, U);
	let m = t.display_status == 13;
	const u = i;
	const d = (0, R.A)(
		r,
		U.LibraryItemActionButton,
		!u && U.Landscape,
		c,
		u && U.BasicPlayButton,
		!u && !s && U.Disabled,
		m && U.LockedGame,
	);
	return y.createElement(
		"div",
		{
			...n,
			className: d,
			key: "action button",
			onMouseDown: u
				? (e) => {
						if (i) {
							e.stopPropagation();
							e.preventDefault();
						}
					}
				: null,
			onClick: (e) => {
				const r = GetOwningWindowForEvent(e);
				(0, L.jy)(s, t, "mostavailable", 100, r)();
				if (s != "Play" || i) {
					e.stopPropagation();
					e.preventDefault();
				}
			},
		},
		m ? y.createElement(E.c_I, null) : l,
	);
});
let De = class extends y.Component {
	static contextType = O.QO;
	render() {
		let e;
		let t = this.props.bFeatured ? U.Landscape : U.Portrait;
		if (this.props.app.display_status == 13) {
			e = this.props.bShortLayout
				? "#AppBox_ComingSoon_Short"
				: "#AppBox_ComingSoon";
		} else if (this.props.app.display_status == 10) {
			e = "#GameAction_PreLoad";
		} else if (this.props.app.BIsNewToLibrary()) {
			e = this.props.bShortLayout
				? "#AppBox_NewToLibrary_Short"
				: "#AppBox_NewToLibrary";
		}
		if (e) {
			const r = this.context?.IN_GAMEPADUI;
			let n = this.props.context == 1;
			let i = this.props.app.display_status != 13;
			return y.createElement(
				"div",
				{
					className: (0, R.A)(r && U.BasicMode, U.AppPortraitBannerContainer),
				},
				y.createElement(
					"div",
					{
						className: (0, R.A)(
							!i && U.ComingSoonBanner,
							U.AppPortraitBanner,
							t,
							n ? U.InCollection : "",
						),
					},
					(0, Localize)(e),
				),
			);
		}
		return null;
	}
};
De = (0, n.Cg)([f.PA], De);
const Ne = (0, f.PA)(function (e) {
	const { app: t } = e;
	const r = (0, O.Qn)();
	const n = (0, P.$2)();
	if (!we(t)) {
		return null;
	}
	let i = t.display_status != 13;
	let a = y.createElement(
		M.t1,
		null,
		y.createElement(
			M.MA,
			null,
			i
				? (0, Localize)("#GameAction_Install")
				: (0, Localize)("#DisplayStatus_Compact_PresaleOnly"),
		),
	);
	const s = r;
	return y.createElement(
		M.m9,
		{
			bNavStop: false,
			bDisabled: s,
			direction: "top",
			nDelayShowMS: 100,
			toolTipContent: a,
			className: (0, R.A)(U.UninstalledIcon, !i && U.ComingSoonIcon),
			onClick: (e) => {
				const r = (0, L.AH)(n, t, "mostavailable");
				const i = GetOwningWindowForEvent(e);
				(0, L.jy)(r, t, "mostavailable", 100, i)();
				if (r != "Play") {
					e.stopPropagation();
				}
			},
			key: "UninstalledIcon",
		},
		i ? y.createElement(v.f5, null) : y.createElement(v.c_, null),
	);
});
const Fe = (0, f.PA)(function (e) {
	const { app: t } = e;
	let r = t.display_status == 7;
	switch (t.display_status) {
		case 3:
		case 9:
		case 13:
		case 7:
			break;
		default:
			return null;
	}
	return y.createElement(
		"div",
		{
			className: (0, R.A)(
				U.UninstalledBar,
				U.UninstalledBarBottom,
				r ? U.BarDownloading : null,
			),
		},
		y.createElement("div", {
			className: U.UninstalledProgressBar,
			style: {
				width: t.status_percentage + "%",
			},
		}),
	);
});
const Ge = (0, f.PA)(function (e) {
	const { app: t } = e;
	const r = (0, O.Qn)();
	const n = (0, P.$2)();
	if (
		!(function (e, t) {
			return (0, L.AH)(e, t, "mostavailable") == "Stream";
		})(n, t)
	) {
		return null;
	}
	const i = r;
	return y.createElement(
		M.he,
		{
			bNavStop: false,
			bDisabled: i,
			direction: "top",
			nDelayShowMS: 100,
			className: (0, R.A)(U.UninstalledIcon),
			onClick: (e) => {
				const r = (0, L.AH)(n, t, "mostavailable");
				const i = GetOwningWindowForEvent(e);
				const a = (0, L.jy)(r, t, "mostavailable", 100, i);
				if (a) {
					a();
				}
				if (r != "Stream") {
					e.stopPropagation();
				}
			},
			key: "StreamingIcon",
		},
		y.createElement(I.WirelessNetwork, null),
	);
});
function Oe(e) {
	if (e === 4) {
		return {
			Small: parseInt(U.GamepadPortraitWidthSmall),
			Medium: parseInt(U.GamepadPortraitWidthMedium),
			Large: parseInt(U.GamepadPortraitWidthLarge),
		};
	} else {
		return {
			Small: parseInt(U.PortraitWidthSmall),
			Medium: parseInt(U.PortraitWidthMedium),
			Large: parseInt(U.PortraitWidthLarge),
		};
	}
}
export function YQ(e, t) {
	if (
		e <= parseInt(a.GamepadUIBreakNarrow) ||
		t <= parseInt(a.GamepadUIBreakShort)
	) {
		return 1;
	} else if (e >= parseInt(a.GamepadUIBreakWide)) {
		return 3;
	} else {
		return 2;
	}
}
export function aH(e, t, r) {
	let n;
	let i;
	let a = false;
	let s = r == d.A8.AppType_Soundtracks;
	const o = Oe(t ? 4 : 7);
	switch (e) {
		case 1:
			n = o.Small;
			a = true;
			break;
		case 2:
			n = o.Medium;
			break;
		case 3:
			n = o.Large;
			break;
		default:
			(0, T.w)(false, "Invalid displaySize", e);
			n = o.Medium;
	}
	i = n * (s ? 1 : 1.5);
	return {
		childWidth: n,
		childHeight: i,
		bShort: a,
	};
}
export function jF(e, t) {
	const r = Oe(t ? 4 : 7);
	switch (e) {
		case r.Small:
			return 1;
		case r.Medium:
			return 2;
		case r.Large:
			return 3;
	}
	(0, T.w)(
		false,
		"Invalid childWidth " + e + " passed to GetELibraryDisplaySizeForWidth",
	);
	return 2;
}
