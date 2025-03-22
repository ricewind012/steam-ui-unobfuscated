var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./50376.js");
var l = require("./35488.js");
var c = require("./3443.js");
var m = c;
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require("./74827.js");
var A = require("./12750.js");
var p = require("./31993.js");
var g = require("./63032.js");
var h = require(/*webcrack:missing*/ "./46108.js");
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require("./52470.js");
var f = require("./91486.js");
var b = require("./97561.js");
var y = require("./13869.js");
var S = require(/*webcrack:missing*/ "./41180.js");
var w = require(/*webcrack:missing*/ "./54644.js");
var B = require(/*webcrack:missing*/ "./72476.js");
var v = require("./82594.js");
var I = require("./5859.js");
var E = require("./85965.js");
var M = require("./13656.js");
var T = require(/*webcrack:missing*/ "./98995.js");
var R = require("./18869.js");
var k = require("./89748.js");
export function Pp(e) {
	let { details: t } = e;
	let r = t.unAppID;
	let n = (0, R.br)();
	let a = i.useCallback(() => n.AppProperties(r, M.ho.Dlc), [n, r]);
	let s = i.useCallback(
		(e) => {
			d.Ri.StopShowingNewDLC(r);
			e.preventDefault();
			e.stopPropagation();
		},
		[r],
	);
	let c = (0, d.BI)(r);
	if (c && c.length != 0) {
		return i.createElement(
			"div",
			{
				className: m.SpotlightDLCOuter,
				onClick: a,
			},
			i.createElement(
				"div",
				{
					className: m.SpotlightDLC,
				},
				i.createElement(l.Information, {
					className: m.Icon,
				}),
				i.createElement(
					"div",
					null,
					(0, h.we)("#AppDetails_DLCSpotlight_Summary", t.strDisplayName),
				),
				i.createElement(
					T.he,
					{
						toolTipContent: (0, h.we)("#AppDetails_WorkshopFeaturedHideItem"),
						className: m.HideButton,
						onClick: s,
					},
					i.createElement(o.sED, null),
				),
			),
		);
	} else {
		return null;
	}
}
export let Cz = class extends i.Component {
	constructor(e) {
		super(e);
		(0, a.Gn)(this);
	}
	static contextType = B.QO;
	m_ReviewDetails = undefined;
	storedSettingsPerApp = undefined;
	m_bReviewLoaded = false;
	m_rgPromptPeriods = [3, 10, 30, 1000];
	async componentDidMount() {
		await this.FetchRoamingStorageState();
		this.m_ReviewDetails = await p.x.GetReview(this.props.parent.unAppID);
		this.m_bReviewLoaded = true;
	}
	get GetPerAppStorageKey() {
		return "spotlight.review." + this.props.overview.appid;
	}
	async FetchRoamingStorageState() {
		const e = {
			rgPromptDismissals: 0,
			bWasAskedToRevise: false,
		};
		this.storedSettingsPerApp = null;
		try {
			const e = await new g.O().GetObject(this.GetPerAppStorageKey);
			this.storedSettingsPerApp = e;
		} catch (t) {
			if (t.message && t.message == "Not found") {
				this.storedSettingsPerApp = e;
			} else {
				console.error("Could not fetch review roaming storage:", t);
			}
		}
	}
	OnVoteUp(e) {
		if (this.m_ReviewDetails) {
			this.storedSettingsPerApp.bWasAskedToRevise = true;
			SteamClient.Stats.RecordActivationEvent(
				"LibraryReviewSpotlight",
				"ReviseClicked",
			);
		} else {
			SteamClient.Stats.RecordActivationEvent(
				"LibraryReviewSpotlight",
				"PositiveClicked",
			);
		}
		this.ShowWriteReviewDialog(e, b._g.Up);
		this.OnFinish();
	}
	OnVoteDown(e) {
		if (this.m_ReviewDetails) {
			this.storedSettingsPerApp.bWasAskedToRevise = true;
			this.OnFinish();
			SteamClient.Stats.RecordActivationEvent(
				"LibraryReviewSpotlight",
				"ReviseCloseClicked",
			);
		} else {
			this.ShowWriteReviewDialog(e, b._g.Down);
			SteamClient.Stats.RecordActivationEvent(
				"LibraryReviewSpotlight",
				"NegativeClicked",
			);
		}
	}
	ShowWriteReviewDialog(e, t) {
		let r = this.props.overview.minutes_playtime_forever;
		if (this.m_ReviewDetails) {
			r =
				this.props.parent.nPlaytimeForever -
				this.m_ReviewDetails.playtime_at_review;
		}
		const n = (0, h.we)("#WriteReview_Dialog_Title");
		(0, y.mK)(
			i.createElement(b.jB, {
				ownerWindow: (0, w.uX)(e),
				steamID: this.props.parent.strOwnerSteamID,
				appid: this.props.overview.appid,
				nPlaytime: r,
				eReviewVote: t,
				onSuccess: this.OnPostReview,
				closeModal: this.OnCancelPostReview,
				prevReview: this.m_ReviewDetails,
			}),
			(0, w.uX)(e),
			{
				strTitle: n,
			},
		);
	}
	async OnPostReview(e) {
		if (this.m_ReviewDetails) {
			SteamClient.Stats.RecordActivationEvent(
				"LibraryReviewSpotlight",
				e ? "PositiveRevisePosted" : "NegativeRevisePosted",
			);
		} else {
			SteamClient.Stats.RecordActivationEvent(
				"LibraryReviewSpotlight",
				e ? "PositiveReviewPosted" : "NegativeReviewPosted",
			);
		}
		this.m_ReviewDetails = await p.x.GetReview(this.props.overview.appid, true);
		await A.yX.FetchLatestActivity(this.props.overview.appid, true);
	}
	OnCancelPostReview(e) {
		if (!e) {
			if (this.m_ReviewDetails) {
				SteamClient.Stats.RecordActivationEvent(
					"LibraryReviewSpotlight",
					"ReviseCanceled",
				);
			} else {
				SteamClient.Stats.RecordActivationEvent(
					"LibraryReviewSpotlight",
					"ReviewCanceled",
				);
			}
		}
	}
	async OnFinish() {
		for (let e = 0; e < this.m_rgPromptPeriods.length; ++e) {
			if (this.hoursPlayed > this.m_rgPromptPeriods[e]) {
				this.storedSettingsPerApp.rgPromptDismissals = e + 1;
			}
		}
		await this.StoreSettings();
	}
	async OnClose(e) {
		SteamClient.Stats.RecordActivationEvent(
			"LibraryReviewSpotlight",
			"CloseClicked",
		);
		this.OnFinish();
	}
	async StoreSettings() {
		try {
			await new g.O().StoreObject(
				this.GetPerAppStorageKey,
				this.storedSettingsPerApp,
			);
		} catch (e) {
			console.error("could not store roaming storage:", e);
		}
	}
	BPlayedGameRecently() {
		return (
			new Date().getTime() / 1000 - this.props.overview.rt_last_time_played <
			S.Kp.PerWeek
		);
	}
	get hoursPlayed() {
		return this.props.overview.minutes_playtime_forever / 60;
	}
	render() {
		let e;
		if (this.context?.IN_GAMEPADUI) {
			return null;
		}
		if ((0, k.qw)().BIsOfflineMode()) {
			return null;
		}
		if (!this.BPlayedGameRecently()) {
			return null;
		}
		if (!this.storedSettingsPerApp) {
			return null;
		}
		if (!this.m_bReviewLoaded) {
			return null;
		}
		if (this.m_ReviewDetails) {
			if (this.m_ReviewDetails.voted_up) {
				return null;
			}
			if (this.storedSettingsPerApp.bWasAskedToRevise) {
				return null;
			}
			let t =
				this.props.parent.nPlaytimeForever -
				this.m_ReviewDetails.playtime_at_review;
			if (t < 360) {
				return null;
			}
			e = (0, b.pH)(
				this.props.parent.unAppID,
				m.RatingContainer,
				t,
				false,
				this.OnVoteUp,
				false,
				this.OnVoteDown,
				null,
				b.qR.ReviseQuery,
			);
		} else {
			if (
				this.storedSettingsPerApp.rgPromptDismissals >=
				this.m_rgPromptPeriods.length
			) {
				return null;
			}
			if (
				this.hoursPlayed <
				this.m_rgPromptPeriods[this.storedSettingsPerApp.rgPromptDismissals]
			) {
				return null;
			}
			e = (0, b.pH)(
				this.props.parent.unAppID,
				m.RatingContainer,
				this.props.overview.minutes_playtime_forever,
				false,
				this.OnVoteUp,
				false,
				this.OnVoteDown,
				this.OnClose,
			);
		}
		if (e) {
			return i.createElement(
				"div",
				{
					className: m.ReviewContainerOuter,
				},
				i.createElement(
					"div",
					{
						className: m.ReviewContainer,
					},
					i.createElement(
						"div",
						{
							className: m.Inner,
						},
						e,
					),
				),
			);
		} else {
			return null;
		}
	}
};
(0, n.Cg)([a.sH], Cz.prototype, "m_ReviewDetails", undefined);
(0, n.Cg)([a.sH], Cz.prototype, "storedSettingsPerApp", undefined);
(0, n.Cg)([a.sH], Cz.prototype, "m_bReviewLoaded", undefined);
(0, n.Cg)([C.oI], Cz.prototype, "FetchRoamingStorageState", null);
(0, n.Cg)([C.oI], Cz.prototype, "OnVoteUp", null);
(0, n.Cg)([C.oI], Cz.prototype, "OnVoteDown", null);
(0, n.Cg)([C.oI], Cz.prototype, "ShowWriteReviewDialog", null);
(0, n.Cg)([C.oI], Cz.prototype, "OnPostReview", null);
(0, n.Cg)([C.oI], Cz.prototype, "OnCancelPostReview", null);
(0, n.Cg)([C.oI], Cz.prototype, "OnFinish", null);
(0, n.Cg)([C.oI], Cz.prototype, "OnClose", null);
(0, n.Cg)([C.oI], Cz.prototype, "StoreSettings", null);
Cz = (0, n.Cg)([s.PA], Cz);
export const Be = (0, s.PA)((e) => {
	const t = e.overview.optional_parent_app_id;
	const [r] = (0, v.t7)(t, I.A.k_DataRequest_Assets);
	if (!t || !r) {
		return null;
	}
	const n = [r.GetAssets().GetHeaderURL(), E.A];
	return i.createElement(
		"div",
		{
			className: m.AppDetailsSpotlightDemoWrapper,
		},
		i.createElement(
			"div",
			{
				className: (0, u.A)(m.AppDetailsSpotlight, m.AppDetailsSpotlightDemo),
			},
			i.createElement(
				"div",
				{
					className: m.Header,
				},
				i.createElement(f.z, {
					className: m.HeaderArt,
					eAssetType: 3,
					appid: t,
					rgSources: n,
				}),
			),
			i.createElement(
				"div",
				{
					className: m.Info,
				},
				i.createElement(
					"div",
					{
						className: m.Intro,
					},
					(0, h.we)("#Demo_SpotlightIntro"),
				),
				i.createElement(
					"div",
					{
						className: m.Title,
					},
					r.GetName(),
				),
				i.createElement(
					"div",
					{
						className: m.Buttons,
					},
					i.createElement(_.Kd, {
						innerClassName: m.SpotlightButton,
						position: undefined,
						label: (0, h.we)("#Demo_VisitStorePage"),
						link: "StoreAppPage",
						appid: t,
					}),
				),
			),
		),
	);
});
