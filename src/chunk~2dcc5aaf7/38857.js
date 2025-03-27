import { Localize } from "../../actual_src/utils/localization.js";
import { Seconds } from "../../actual_src/utils/time.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s, { PA } from "./41230.js";
import o from "./50376.js";
import l from "./35488.js";
import c from "./3443.js";
import { A as A_1 } from "./90765.js";
import d, { BI } from "./74827.js";
import A from "./12750.js";
import p from "./31993.js";
import g from "./63032.js";
import C from "./52451.js";
import _ from "./52470.js";
import f from "./91486.js";
import b, { pH } from "./97561.js";
import { mK } from "./13869.js";
import B from "./72476.js";
import { t7 } from "./82594.js";
import I from "./5859.js";
import E from "./85965.js";
import M from "./13656.js";
import T from "./98995.js";
import { br } from "./18869.js";
import { qw } from "./89748.js";
const m = c;
export function Pp(e) {
	let { details } = e;
	let t_unAppID = details.unAppID;
	let n = br();
	let a = i.useCallback(
		() => n.AppProperties(t_unAppID, M.ho.Dlc),
		[n, t_unAppID],
	);
	let s = i.useCallback(
		(e) => {
			d.Ri.StopShowingNewDLC(t_unAppID);
			e.preventDefault();
			e.stopPropagation();
		},
		[t_unAppID],
	);
	let c = BI(t_unAppID);
	if (c && c.length != 0) {
		return (
			<div className={m.SpotlightDLCOuter} onClick={a}>
				<div className={m.SpotlightDLC}>
					<l.Information className={m.Icon} />
					<div>
						{Localize(
							"#AppDetails_DLCSpotlight_Summary",
							details.strDisplayName,
						)}
					</div>
					<T.he
						toolTipContent={Localize("#AppDetails_WorkshopFeaturedHideItem")}
						className={m.HideButton}
						onClick={s}
					>
						<o.sED />
					</T.he>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
export let Cz = class extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
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
		return `spotlight.review.${this.props.overview.appid}`;
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
		const n = Localize("#WriteReview_Dialog_Title");
		mK(
			<b.jB
				ownerWindow={GetOwningWindowForEvent(e)}
				steamID={this.props.parent.strOwnerSteamID}
				appid={this.props.overview.appid}
				nPlaytime={r}
				eReviewVote={t}
				onSuccess={this.OnPostReview}
				closeModal={this.OnCancelPostReview}
				prevReview={this.m_ReviewDetails}
			/>,
			GetOwningWindowForEvent(e),
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
			Seconds.PerWeek
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
		if (qw().BIsOfflineMode()) {
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
			e = pH(
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
			e = pH(
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
			return (
				<div className={m.ReviewContainerOuter}>
					<div className={m.ReviewContainer}>
						<div className={m.Inner}>{e}</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
Cg([a.sH], Cz.prototype, "m_ReviewDetails", undefined);
Cg([a.sH], Cz.prototype, "storedSettingsPerApp", undefined);
Cg([a.sH], Cz.prototype, "m_bReviewLoaded", undefined);
Cg([C.oI], Cz.prototype, "FetchRoamingStorageState", null);
Cg([C.oI], Cz.prototype, "OnVoteUp", null);
Cg([C.oI], Cz.prototype, "OnVoteDown", null);
Cg([C.oI], Cz.prototype, "ShowWriteReviewDialog", null);
Cg([C.oI], Cz.prototype, "OnPostReview", null);
Cg([C.oI], Cz.prototype, "OnCancelPostReview", null);
Cg([C.oI], Cz.prototype, "OnFinish", null);
Cg([C.oI], Cz.prototype, "OnClose", null);
Cg([C.oI], Cz.prototype, "StoreSettings", null);
Cz = Cg([s.PA], Cz);
export const Be = PA((e) => {
	const t = e.overview.optional_parent_app_id;
	const [r] = t7(t, I.A.k_DataRequest_Assets);
	if (!t || !r) {
		return null;
	}
	const n = [r.GetAssets().GetHeaderURL(), E.A];
	return (
		<div className={m.AppDetailsSpotlightDemoWrapper}>
			<div className={A_1(m.AppDetailsSpotlight, m.AppDetailsSpotlightDemo)}>
				<div className={m.Header}>
					<f.z className={m.HeaderArt} eAssetType={3} appid={t} rgSources={n} />
				</div>
				<div className={m.Info}>
					<div className={m.Intro}>{Localize("#Demo_SpotlightIntro")}</div>
					<div className={m.Title}>{r.GetName()}</div>
					<div className={m.Buttons}>
						<_.Kd
							innerClassName={m.SpotlightButton}
							position={undefined}
							label={Localize("#Demo_VisitStorePage")}
							link="StoreAppPage"
							appid={t}
						/>
					</div>
				</div>
			</div>
		</div>
	);
});
