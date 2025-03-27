import { Seconds } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./37322.js";
import a from "./91705.js";
import s from "./88696.js";
import o from "./31993.js";
import l from "./3963.js";
import c from "./5640.js";
import m, { Gn, EW, L3, h5 } from "./89193.js";
import u from "./3475.js";
import d from "./44846.js";
import A from "./12176.js";
import p from "./8573.js";
import g from "./54946.js";
import h from "./34043.js";
import C from "./46948.js";
import _ from "./16053.js";
import { w as w_1 } from "./49455.js";
import y from "./72476.js";
import S from "./96538.js";
import w from "./96593.js";
import B from "./57016.js";
import v from "./34792.js";
import I from "./5859.js";
import { aj } from "./63088.js";
import M from "./48289.js";
const T = "achievementmap";
const R = Seconds.PerMonth * 2;
const k = "usernews";
const D = "gameactivity";
class N {
	constructor() {
		Gn(this);
	}
	gameid;
	unUniqueID;
	rtEventTime;
	steamIDActor;
	steamIDTarget;
	eEventType;
	eEventSubType;
	eGameActivityType;
	bIsGameActivity;
	commentThreads = [];
	activeThread = 0;
	static sm_unLastUniqueID = 0;
	InitFromUserNewsEvent(e, t, r, n, i) {
		this.bIsGameActivity = false;
		this.gameid = t;
		this.eEventType = e;
		this.rtEventTime = r;
		this.steamIDActor = n;
		this.steamIDTarget = i;
		this.unUniqueID = ++N.sm_unLastUniqueID;
	}
	InitFromGameActivity(e, t, r, n, i) {
		this.bIsGameActivity = true;
		this.gameid = r;
		this.eGameActivityType = e;
		this.eEventSubType = t;
		this.rtEventTime = n;
		this.steamIDActor = i;
		this.unUniqueID = ++N.sm_unLastUniqueID;
	}
	get appid() {
		return Number(this.gameid);
	}
	GetAppIds() {
		return [this.appid];
	}
	GetCommentThreadType() {
		if (this.bIsGameActivity) {
			return 0;
		}
		switch (this.eEventType) {
			case a._Q.FilePublished_Screenshot:
			case a._Q.FilePublished_Video: {
				return 5;
			}
			case a._Q.UserStatus: {
				return 15;
			}
			case a._Q.ReceivedNewGame:
			case a._Q.PlayedGameFirstTime:
			case a._Q.AddedGameToWishlist:
			case a._Q.AchievementUnlocked: {
				return 16;
			}
			case a._Q.PostedAnnouncement: {
				return 11;
			}
			case a._Q.RecommendedGame: {
				return 8;
			}
			default: {
				return 0;
			}
		}
	}
	AddCommentThread(e, t) {
		if (this.GetCommentThreadType() != 0) {
			this.commentThreads.push({
				eCommentThreadType: this.GetCommentThreadType(),
				gidFeature: e,
				gidFeature2: t,
			});
		}
	}
	SetActiveCommentThread(e) {
		if (e >= 0 && e < this.commentThreads.length) {
			this.activeThread = e;
		}
	}
	BSupportsCommentThreads() {
		return (
			this.BIsValid() &&
			this.commentThreads &&
			this.commentThreads.length > 0 &&
			!c.jR.BIsFeatureBlocked(2)
		);
	}
	GetActiveCommentThread() {
		if (!this.BSupportsCommentThreads()) {
			return null;
		}
		let e = this.commentThreads[this.activeThread];
		e.commentThread ||= l.Nb.ThreadStore.FindOrLoadThread(
			e.eCommentThreadType,
			this.steamIDActor,
			e.gidFeature,
			e.gidFeature2,
		);
		return e.commentThread;
	}
	BIsValid() {
		return true;
	}
	BUserCanDelete() {
		return (
			this.BIsValid() &&
			this.eEventType == a._Q.UserStatus &&
			this.steamIDActor.GetAccountID() == M.O$.currentUserSteamID.GetAccountID()
		);
	}
	DeleteOnServer() {
		console.log(
			`No delete method implemented for events of type ${this.eEventType}`,
		);
	}
	GetParentalFeature() {
		if (
			this.steamIDActor.ConvertTo64BitString() ==
			yX.CMInterface.steamid.ConvertTo64BitString()
		) {
			return 3;
		} else {
			return 2;
		}
	}
}
Cg([m.sH.shallow], N.prototype, "commentThreads", undefined);
Cg([m.sH], N.prototype, "activeThread", undefined);
class F extends N {
	m_rgAchievements = [];
	m_rtOldestAchievement = undefined;
	constructor(e, t, r) {
		super();
		this.InitFromUserNewsEvent(a._Q.AchievementUnlocked, r, e, t);
	}
	AddAchievement(e, t) {
		if (this.m_rgAchievements.find((t) => t == e) == null) {
			this.m_rgAchievements.push({
				...e,
				rtUnlocked: t,
				bAchieved: true,
			});
			if (
				this.m_rtOldestAchievement === undefined ||
				t < this.m_rtOldestAchievement
			) {
				if (this.commentThreads.length) {
					this.commentThreads.splice(0, this.commentThreads.length);
				}
				this.m_rtOldestAchievement = t;
				this.AddCommentThread(
					`${this.m_rtOldestAchievement}`,
					`${this.eEventType}`,
				);
			}
		}
	}
	get achievements() {
		return this.m_rgAchievements;
	}
}
export let qz;
((e) => {
	e[(e.k_ETradingCardActivity_Invalid = 0)] = "k_ETradingCardActivity_Invalid";
	e[(e.k_ETradingCardActivity_CardDrop = 1)] =
		"k_ETradingCardActivity_CardDrop";
	e[(e.k_ETradingCardActivity_BoosterDrop = 2)] =
		"k_ETradingCardActivity_BoosterDrop";
	e[(e.k_ETradingCardActivity_BadgeCraft = 3)] =
		"k_ETradingCardActivity_BadgeCraft";
})((qz ||= {}));
class O extends N {
	m_nItemClass = 0;
	m_nNewBadgeLevel = 0;
	constructor(e, t, r) {
		super();
		this.InitFromGameActivity(
			2,
			qz.k_ETradingCardActivity_BadgeCraft,
			r,
			e.timestamp(),
			t,
		);
		this.m_nItemClass = parseInt(e.data1());
		this.m_nNewBadgeLevel = parseInt(e.data3());
	}
	BIsValid() {
		return true;
	}
	GetHeadline() {
		return "#AppActivity_SteamTradingCards_BadgeCrafted";
	}
}
class P extends N {
	m_nItemClass = 0;
	m_nItemType = 0;
	constructor(e, t, r) {
		super();
		this.InitFromGameActivity(
			2,
			qz.k_ETradingCardActivity_BoosterDrop,
			r,
			e.timestamp(),
			t,
		);
		this.m_nItemClass = parseInt(e.data1());
		this.m_nItemType = parseInt(e.data2());
	}
	BIsValid() {
		return true;
	}
	GetHeadline() {
		return "#AppActivity_SteamTradingCards_EarnedBoosterPack";
	}
}
class L extends N {
	m_rgTradingCards = [];
	m_cardAssetIDs = [];
	constructor(e, t, r) {
		super();
		Gn(this);
		this.InitFromGameActivity(
			2,
			qz.k_ETradingCardActivity_CardDrop,
			r,
			e.timestamp(),
			t,
		);
	}
	BIsValid() {
		return true;
	}
	GetHeadline() {
		if (this.m_rgTradingCards.length == 1) {
			return "#AppActivity_SteamTradingCards_EarnedTradingCard";
		} else {
			return "#AppActivity_SteamTradingCards_EarnedTradingCards";
		}
	}
	AddTradingCard(e) {
		let t = e.item_assetid();
		if (this.m_cardAssetIDs.includes(t)) {
			return;
		}
		this.m_cardAssetIDs.push(t);
		let r = parseInt(e.data2());
		this.m_rgTradingCards.push(r);
	}
	get tradingCards() {
		return this.m_rgTradingCards;
	}
}
Cg([m.sH], L.prototype, "m_rgTradingCards", undefined);
export class hO extends N {
	m_rgScreenshots = [];
	m_bIsValid = true;
	constructor(e, t, r) {
		super();
		Gn(this);
		this.InitFromUserNewsEvent(a._Q.FilePublished_Screenshot, r, e, t);
		this.m_bIsValid = false;
	}
	async AddScreenshot(e) {
		let t = A.w.Init(h.TA);
		t.Body().set_publishedfileids([e]);
		let r = await h.a5.GetDetails(yX.CMInterface.GetServiceTransport(), t);
		if (
			r.Body().publishedfiledetails().length > 0 &&
			r.Body().publishedfiledetails()[0].result() == 1
		) {
			this.m_bIsValid = true;
			this.m_rgScreenshots.push(e);
			this.AddCommentThread(e);
		}
	}
	GetCurrentPublishedFileID() {
		if (this.activeThread >= this.m_rgScreenshots.length) {
			return null;
		} else {
			return this.m_rgScreenshots[this.activeThread];
		}
	}
	get publishedfileids() {
		return this.m_rgScreenshots;
	}
	AddInitialCommentThread() {}
	BIsValid() {
		return this.m_bIsValid;
	}
}
Cg([m.sH], hO.prototype, "m_rgScreenshots", undefined);
Cg([m.sH], hO.prototype, "m_bIsValid", undefined);
export class UV extends N {
	m_rgVideos = [];
	m_bIsValid = true;
	constructor(e, t, r) {
		super();
		Gn(this);
		this.InitFromUserNewsEvent(a._Q.FilePublished_Video, r, e, t);
		this.m_bIsValid = false;
	}
	async AddVideo(e) {
		let t = A.w.Init(h.TA);
		t.Body().set_publishedfileids([e]);
		let r = await h.a5.GetDetails(yX.CMInterface.GetServiceTransport(), t);
		if (
			r.Body().publishedfiledetails().length > 0 &&
			r.Body().publishedfiledetails()[0].result() == 1
		) {
			this.m_bIsValid = true;
			this.m_rgVideos.push(e);
			this.AddCommentThread(e);
		}
	}
	GetCurrentPublishedFileID() {
		if (this.activeThread >= this.m_rgVideos.length) {
			return null;
		} else {
			return this.m_rgVideos[this.activeThread];
		}
	}
	get publishedfileids() {
		return this.m_rgVideos;
	}
	BIsValid() {
		return this.m_bIsValid;
	}
}
Cg([m.sH], UV.prototype, "m_rgVideos", undefined);
Cg([m.sH], UV.prototype, "m_bIsValid", undefined);
class U extends N {
	m_RecommendationDetails = null;
	constructor(e, t, r) {
		super();
		Gn(this);
		this.InitFromUserNewsEvent(a._Q.RecommendedGame, r, e, t);
	}
	async AddRecommendation(e) {
		this.m_RecommendationDetails = await o.x.GetReview(
			e,
			false,
			this.steamIDActor,
		);
	}
	BIsValid() {
		return this.m_RecommendationDetails != null;
	}
	GetRecommendationDetails() {
		return this.m_RecommendationDetails;
	}
}
Cg([m.sH.shallow], U.prototype, "m_RecommendationDetails", undefined);
class W extends N {
	m_rgAppIds = [];
	constructor(e, t, r) {
		super();
		Gn(this);
		this.InitFromUserNewsEvent(r, undefined, e, t);
	}
	AddAppId(e) {
		this.m_rgAppIds.push(e);
	}
	BIsValid() {
		return this.m_rgAppIds.length > 0;
	}
	GetAppIds() {
		return this.m_rgAppIds;
	}
}
Cg([m.sH.shallow], W.prototype, "m_rgAppIds", undefined);
class V extends W {
	constructor(e, t) {
		super(e, t, a._Q.ReceivedNewGame);
	}
	GetFilteredAppIds() {
		return this.GetAppIds()
			.slice()
			.sort((e, t) => e - t);
	}
}
class H extends W {
	constructor(e, t) {
		super(e, t, a._Q.AddedGameToWishlist);
	}
	GetFilteredAppIds() {
		const e = this.GetAppIds();
		return Array.from(new Set(e));
	}
}
class j {
	constructor() {
		Gn(this);
	}
	statusText = undefined;
	time = undefined;
}
Cg([m.sH], j.prototype, "statusText", undefined);
Cg([m.sH], j.prototype, "time", undefined);
class q extends N {
	m_userStatus = undefined;
	m_bIsValid = true;
	constructor(e, t, r) {
		super();
		Gn(this);
		this.InitFromUserNewsEvent(a._Q.UserStatus, r, e, t);
	}
	async AddUserStatus(e) {
		let t = A.w.Init(g.d5);
		t.Body().set_steamid(this.steamIDActor.ConvertTo64BitString());
		t.Body().set_postid(e.toString());
		let r = await g.xt.GetPostedStatus(yX.CMInterface.GetServiceTransport(), t);
		if (r.GetEResult() != 1 || r.Body().deleted()) {
			this.m_bIsValid = false;
		} else {
			this.m_userStatus = new j();
			this.m_userStatus.statusText = r.Body().status_text();
			this.m_userStatus.time = e;
		}
	}
	GetUserStatus() {
		return this.m_userStatus;
	}
	BIsValid() {
		return this.m_bIsValid;
	}
	async DeleteOnServer() {
		if (this.m_userStatus) {
			let e = A.w.Init(g.Av);
			e.Body().set_postid(this.m_userStatus.time.toString());
			if (
				(
					await g.xt.DeletePostedStatus(yX.CMInterface.GetServiceTransport(), e)
				).GetEResult() == 1
			) {
				this.m_bIsValid = false;
			}
		}
	}
}
Cg([m.sH.shallow], q.prototype, "m_userStatus", undefined);
Cg([m.sH], q.prototype, "m_bIsValid", undefined);
export class fE extends N {
	m_gidAnnouncement = "";
	m_unTimeLastMod = 0;
	constructor(e, t, r, n, i) {
		super();
		this.InitFromUserNewsEvent(a._Q.PostedAnnouncement, i, e, t);
		this.m_gidAnnouncement = r;
		this.m_unTimeLastMod = n;
	}
	GetParentalFeature() {
		return u.uX;
	}
	get eventModel() {
		return B.IB.GetClanEventFromAnnouncementGID(this.m_gidAnnouncement);
	}
	get upvotes() {
		return this.eventModel?.nVotesUp;
	}
	get downvotes() {
		return this.eventModel?.nVotesDown;
	}
	get comment_count() {
		return this.eventModel?.nCommentCount;
	}
	get announcementGID() {
		return this.m_gidAnnouncement;
	}
	get forumTopicGID() {
		return this.eventModel?.forumTopicGID;
	}
	get appid() {
		return this.eventModel?.appid || Number(this.gameid);
	}
	get rtPartnerEventSortDate() {
		return this.eventModel?.rtime32_moderator_reviewed;
	}
	BIsValid() {
		return true;
	}
	IsEventLoaded() {
		return this.eventModel !== undefined && this.eventModel !== null;
	}
	async GetEvent() {
		try {
			return B.IB.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
				this.steamIDActor,
				this.m_gidAnnouncement,
				this.m_unTimeLastMod,
			);
		} catch (e) {}
		return null;
	}
	async ReloadEvent(e) {
		this.m_unTimeLastMod = e;
		B.IB.FlushEventFromCache(null, this.m_gidAnnouncement);
		return this.GetEvent();
	}
}
class Z {
	constructor() {
		Gn(this);
	}
	m_rgEvents = m.sH.array();
	m_rtDayBegin;
	m_mapAchievementsByUser = new Map();
	m_mapScreenshotsByUser = new Map();
	m_mapVideosByUser = new Map();
	m_mapTradingCardsByUser = new Map();
	m_mapReceivedGameByUser = new Map();
	m_mapWishlistedGameByUser = new Map();
	AddEvent(e) {
		this.m_rgEvents.push(e);
	}
	AddActivityEvent(e, t, r, n) {
		const i = new N();
		const a = (n && n.toString()) || e.gameid();
		if (a != "0") {
			i.InitFromUserNewsEvent(r, a, e.eventtime(), t);
			i.AddCommentThread(`${e.eventtime()}`, `${r}`);
			this.AddEvent(i);
		} else {
			console.warn("No gameid for event", e.toObject());
		}
	}
	async AddScreenshotEvent(e, t) {
		const r = t.GetAccountID();
		const n = e.gameid();
		if (n == "0") {
			console.warn("No gameid for event", e.toObject());
			return;
		}
		let i = this.m_mapScreenshotsByUser.get(r);
		if (!i) {
			i = new hO(e.eventtime(), t, n);
			this.m_mapScreenshotsByUser.set(r, i);
			this.AddEvent(i);
		}
		await i.AddScreenshot(e.publishedfileid());
	}
	async AddVideoEvent(e, t) {
		const r = t.GetAccountID();
		const n = e.gameid();
		if (n == "0") {
			console.warn("No gameid for event", e.toObject());
			return;
		}
		let i = this.m_mapVideosByUser.get(r);
		if (!i) {
			i = new UV(e.eventtime(), t, n);
			this.m_mapVideosByUser.set(r, i);
			this.AddEvent(i);
		}
		await i.AddVideo(e.publishedfileid());
	}
	async AddAchievementEvent(e, t, r) {
		const n = t.GetAccountID();
		const i = e.gameid();
		if (i == "0") {
			console.warn("No gameid for event", e.toObject());
			return;
		}
		let a = this.m_mapAchievementsByUser.get(n);
		if (!a) {
			a = new F(e.eventtime(), t, i);
			this.m_mapAchievementsByUser.set(n, a);
			this.AddEvent(a);
		}
		for (let t of e.achievement_names()) {
			const n = r && r.get(t);
			if (n) {
				a.AddAchievement(n, e.eventtime());
			} else {
				const r = `Achievement ${t} missing from map for ${e.gameid()}`;
				console.warn(r);
				aj().ReportError(new Error(r), {
					bIncludeMessageInIdentifier: true,
				});
			}
		}
	}
	async AddUserStatusEvent(e, t) {
		const r = e.gameid();
		if (r == "0") {
			console.warn("No gameid for event", e.toObject());
			return;
		}
		let n = new q(e.eventtime(), t, r);
		n.AddCommentThread(`${e.eventtime()}`);
		this.AddEvent(n);
		await n.AddUserStatus(e.eventtime());
	}
	async AddRecommendedGameEvent(e, t, r) {
		const n = (r && r.toString()) || e.gameid();
		if (n == "0") {
			console.warn("No gameid for event", e.toObject());
			return;
		}
		let i = new U(e.eventtime(), t, n);
		i.AddCommentThread(`${r}`);
		this.AddEvent(i);
		await i.AddRecommendation(r);
	}
	async AddReceivedGameEvent(e, t, r) {
		const n = t.GetAccountID();
		let i = this.m_mapReceivedGameByUser.get(n);
		if (!i) {
			i = new V(e.eventtime(), t);
			this.m_mapReceivedGameByUser.set(n, i);
			this.AddEvent(i);
		}
		if (e.appids().length > 0) {
			e.appids().forEach((e) => {
				i.AddAppId(e);
			});
		} else if (r) {
			i.AddAppId(r);
		}
	}
	async AddWishlistedGameEvent(e, t) {
		const r = t.GetAccountID();
		let n = this.m_mapWishlistedGameByUser.get(r);
		if (!n) {
			n = new H(e.eventtime(), t);
			this.m_mapWishlistedGameByUser.set(r, n);
			this.AddEvent(n);
		}
		n.AddAppId(Number.parseInt(e.gameid()));
	}
	async AddPartnerEvent(e, t) {
		if (e.gameid() == "0") {
			console.warn("No gameid for event", e.toObject());
			return null;
		}
		if (
			this.m_rgEvents.some(
				(t) =>
					t.eEventType == a._Q.PostedAnnouncement &&
					t.announcementGID == e.clan_announcementid(),
			)
		) {
			return null;
		}
		let r = new fE(
			e.eventtime(),
			t,
			e.clan_announcementid(),
			e.event_last_mod_time(),
			e.gameid(),
		);
		this.AddEvent(r);
		return r;
	}
	AddSteamTradingCardEvent(e, t, r) {
		if (!r) {
			return;
		}
		const n = r.toString();
		switch (e.event_sub_type()) {
			case qz.k_ETradingCardActivity_BadgeCraft: {
				this.AddEvent(new O(e, t, n));
				break;
			}
			case qz.k_ETradingCardActivity_CardDrop:
				{
					let r = t.GetAccountID();
					let i = this.m_mapTradingCardsByUser.get(r);
					if (!i) {
						i = new L(e, t, n);
						this.m_mapTradingCardsByUser.set(r, i);
						this.AddEvent(i);
					}
					i.AddTradingCard(e);
				}
				break;
			case qz.k_ETradingCardActivity_BoosterDrop: {
				this.AddEvent(new P(e, t, n));
			}
		}
	}
	RemoveEvent(e) {
		for (let t = 0; t < this.m_rgEvents.length; ++t) {
			if (this.m_rgEvents[t].unUniqueID === e.unUniqueID) {
				this.m_rgEvents.splice(t, 1);
				return true;
			}
		}
		return false;
	}
	get isValid() {
		let e = false;
		for (let t of this.m_rgEvents) {
			e = e || t.BIsValid();
		}
		return e;
	}
	BHasEvents() {
		return this.events.length > 0;
	}
	get events() {
		return this.m_rgEvents.filter(
			(e) => e.BIsValid() && !c.jR.BIsFeatureBlocked(e.GetParentalFeature()),
		);
	}
	GetLatestEventTime() {
		if (this.m_rgEvents.length) {
			return this.m_rgEvents[0].rtEventTime;
		} else {
			return d.ME;
		}
	}
	GetEarliestEventTime() {
		if (this.m_rgEvents.length) {
			return this.m_rgEvents[this.m_rgEvents.length - 1].rtEventTime;
		} else {
			return d.ME;
		}
	}
	set dayBegin(e) {
		this.m_rtDayBegin = e;
	}
	get dayBegin() {
		return this.m_rtDayBegin;
	}
	SortEvents() {
		this.m_rgEvents.replace(
			this.m_rgEvents.slice().sort((e, t) => t.rtEventTime - e.rtEventTime),
		);
	}
}
Cg([m.sH.shallow], Z.prototype, "m_rgEvents", undefined);
Cg([m.XI], Z.prototype, "AddEvent", null);
Cg([m.XI], Z.prototype, "AddActivityEvent", null);
Cg([m.XI], Z.prototype, "AddScreenshotEvent", null);
Cg([m.XI], Z.prototype, "AddVideoEvent", null);
Cg([m.XI], Z.prototype, "AddAchievementEvent", null);
Cg([m.XI], Z.prototype, "AddUserStatusEvent", null);
Cg([m.XI], Z.prototype, "AddRecommendedGameEvent", null);
Cg([m.XI], Z.prototype, "AddReceivedGameEvent", null);
Cg([m.XI], Z.prototype, "AddWishlistedGameEvent", null);
Cg([m.XI], Z.prototype, "AddPartnerEvent", null);
Cg([m.XI], Z.prototype, "AddSteamTradingCardEvent", null);
Cg([m.XI], Z.prototype, "RemoveEvent", null);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	Z.prototype,
	"isValid",
	null,
);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	Z.prototype,
	"events",
	null,
);
class Y {
	m_unAppID;
	m_rtEarliestUserNewsTime = 4294967295;
	m_rtEarliestGameActivityTime = 4294967295;
	m_rtLatestUserNewsTime = 0;
	m_rtLatestGameActivityTime = 0;
	m_rgCachedUserNewsEvents = [];
	m_rgCachedGameActivityEvents = [];
	m_bNoMoreHistoryAvailable = false;
	m_mapActivityByDay = new Map();
	m_AchievementMap = new Map();
	constructor(e) {
		Gn(this);
		this.m_unAppID = e;
		this.m_mapActivityByDay.clear();
		this.m_AchievementMap.clear();
	}
	get earliest_user_news_time() {
		return this.m_rtEarliestUserNewsTime;
	}
	set earliest_user_news_time(e) {
		this.m_rtEarliestUserNewsTime = e;
	}
	get earliest_game_activity_time() {
		return this.m_rtEarliestGameActivityTime;
	}
	set earliest_game_activity_time(e) {
		this.m_rtEarliestGameActivityTime = e;
	}
	get latest_user_news_time() {
		return this.m_rtLatestUserNewsTime;
	}
	set latest_user_news_time(e) {
		this.m_rtLatestUserNewsTime = e;
	}
	get latest_game_activity_time() {
		return this.m_rtLatestGameActivityTime;
	}
	set latest_game_activity_time(e) {
		this.m_rtLatestGameActivityTime = e;
	}
	get latest_activity_time() {
		return Math.max(this.latest_game_activity_time, this.latest_user_news_time);
	}
	BHasEvents() {
		return (
			this.m_rgCachedGameActivityEvents.length > 0 ||
			this.m_rgCachedUserNewsEvents.length > 0
		);
	}
	get lastAddedEventType() {
		const e = this.appActivityByDay && this.appActivityByDay[0];
		if (e && e.events.length > 0) {
			return e.events[0].eEventType;
		} else {
			return a._Q.Invalid;
		}
	}
	get lastAddedPartnerEvent() {
		for (let e of this.appActivityByDay) {
			let t = e.events.find((e) => e.eEventType == a._Q.PostedAnnouncement);
			if (t) {
				return t;
			}
		}
		return null;
	}
	get appActivityByDay() {
		let e = [];
		const t = this.m_mapActivityByDay;
		Array.from(t.keys())
			.sort((e, t) => t - e)
			.forEach((r) => {
				let n = t.get(r);
				if (n && n.BHasEvents()) {
					e.push(n);
				}
			});
		return e;
	}
	SortEvents() {
		this.m_mapActivityByDay.forEach((e) => e.SortEvents());
	}
	AddNewsEvents(e) {
		const t = [];
		for (let r of e) {
			t.push(this.AddUserNewsEvent(r));
		}
		return Promise.all(t);
	}
	MergeUserNews = L3(function* (e) {
		if (e.news().length != 0) {
			for (const r of e.achievement_display_data()) {
				const n = r.appid();
				if (!this.m_AchievementMap.has(n)) {
					this.m_AchievementMap.set(n, new Map());
				}
				Y.BuildAchievementMapFromProto(this.m_AchievementMap.get(n), n, r);
			}

			yield this.AddNewsEvents(e.news());
			yield this.RequestStoreItems();
			this.SortEvents();
		}
	});
	async RequestStoreItems() {
		const e = new Set();
		this.m_mapActivityByDay.forEach((t) => {
			t.events.forEach((t) => {
				const r = t.GetAppIds();
				w_1(r && r[0], "Bad appid list from", t, r);
				r.forEach((r) => {
					w_1(r, "Bad appid", r, "in", t);
					e.add(r);
				});
			});
		});
		await I.A.Get().QueueMultipleAppRequests(
			Array.from(e),
			I.A.k_DataRequest_Assets,
		);
	}
	async AddUserNewsEvent(e) {
		this.CacheUserNewsEvent(e);
		const t = e.eventtime();
		if (e.eventtype() == a._Q.PostedAnnouncement) {
			if (e.event_post_time()) {
				e.set_eventtime(e.event_post_time());
			} else {
				const t = await B.IB.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
					new p.b(e.steamid_actor()),
					e.clan_announcementid(),
					e.event_last_mod_time(),
				);
				e.set_eventtime(t.GetPostTimeAndDateUnixSeconds());
			}
		}
		let r = Y.GetLocalMidnightInRTime32(e.eventtime());
		let n = this.m_mapActivityByDay.get(r);
		if (!n) {
			n = new Z();
			this.m_mapActivityByDay.set(r, n);
		}
		this.earliest_user_news_time = Math.min(t, this.earliest_user_news_time);
		if (t > this.latest_user_news_time) {
			this.latest_user_news_time = t;
		}
		let i = e.eventtype();
		let s = new p.b(e.steamid_actor());
		switch (i) {
			case a._Q.AchievementUnlocked: {
				await n.AddAchievementEvent(
					e,
					s,
					this.m_AchievementMap.get(Number(e.gameid())),
				);
				break;
			}
			case a._Q.FilePublished_Screenshot: {
				await n.AddScreenshotEvent(e, s);
				break;
			}
			case a._Q.FilePublished_Video: {
				await n.AddVideoEvent(e, s);
				break;
			}
			case a._Q.UserStatus: {
				await n.AddUserStatusEvent(e, s);
				break;
			}
			case a._Q.RecommendedGame: {
				await n.AddRecommendedGameEvent(e, s, this.m_unAppID);
				break;
			}
			case a._Q.ReceivedNewGame: {
				await n.AddReceivedGameEvent(e, s, this.m_unAppID);
				break;
			}
			case a._Q.AddedGameToWishlist: {
				await n.AddWishlistedGameEvent(e, s);
				break;
			}
			case a._Q.PlayedGameFirstTime: {
				await n.AddActivityEvent(e, s, i, this.m_unAppID);
				break;
			}
			case a._Q.PostedAnnouncement: {
				await n.AddPartnerEvent(e, s);
				break;
			}
			default: {
				console.log(`Unknown Event Type ${a._Q[i]}`);
			}
		}
	}
	async DeleteLocally(e) {
		const t = Y.GetLocalMidnightInRTime32(e.rtEventTime);
		const r = this.m_mapActivityByDay.get(t);
		r?.RemoveEvent(e);
	}
	async DeleteEvent(e) {
		await e.DeleteOnServer();
	}
	MergeGameActivity(e, t) {
		for (let r of e.events()) {
			this.AddGameActivityEvent(r, t);
		}
	}
	AddGameActivityEvent(e, t) {
		this.CacheGameActivityEvent(e);
		let r = Y.GetLocalMidnightInRTime32(e.timestamp());
		let n = this.m_mapActivityByDay.get(r);
		if (!n) {
			n = new Z();
			this.m_mapActivityByDay.set(r, n);
		}
		this.earliest_game_activity_time = Math.min(
			this.earliest_game_activity_time,
			e.timestamp(),
		);
		this.latest_game_activity_time = Math.max(
			this.latest_game_activity_time,
			e.timestamp(),
		);
		let i = e.event_type();
		switch (i) {
			case 1: {
				break;
			}
			case 2: {
				n.AddSteamTradingCardEvent(e, t, this.m_unAppID);
				break;
			}
			default: {
				console.log(`Unknown game activity type: ${i}`);
			}
		}
	}
	static sm_tzOffset;
	static GetLocalMidnightInRTime32(e) {
		if (Y.sm_tzOffset === undefined) {
			Y.sm_tzOffset = new Date().getTimezoneOffset() * 60;
			w_1(
				Y.sm_tzOffset || Y.sm_tzOffset === 0,
				`Computed invalid timezone offset ${Y.sm_tzOffset}`,
			);
		}
		let t = Y.sm_tzOffset || 0;
		let r = e - t;
		return Math.floor(r / 86400) * 86400 + t;
	}
	static BuildAchievementMapFromProto(e, t, r) {
		w_1(r.appid() == t, "unexpected app data in achievement display map");
		for (let n of r.achievements()) {
			let r = {
				strName: n.display_name(),
				strDescription: n.display_description(),
				strImage: `${y.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${n.icon()}`,
				flAchieved: n.unlocked_pct(),
				bHidden: n.hidden(),
				strID: n.name(),
			};
			e.set(n.name(), r);
		}
	}
	BEventIsTooOldToCache(e) {
		return e < Math.floor(Date.now() / 1000) - R;
	}
	CacheUserNewsEvent(e) {
		this.m_rgCachedUserNewsEvents.push(e);
	}
	GetUserNewsCache() {
		let e = [];
		for (let t of this.m_rgCachedUserNewsEvents) {
			if (this.BEventIsTooOldToCache(t.eventtime())) {
				continue;
			}
			let r = t.serializeBinary();
			let n = i.iI(r);
			e.push(n);
		}
		return e;
	}
	CacheGameActivityEvent(e) {
		this.m_rgCachedGameActivityEvents.push(e);
	}
	GetGameActivityCache() {
		let e = [];
		for (let t of this.m_rgCachedGameActivityEvents) {
			if (this.BEventIsTooOldToCache(t.timestamp())) {
				console.log(`old game activity ${t.timestamp()}`);
				continue;
			}
			let r = t.serializeBinary();
			let n = i.iI(r);
			e.push(n);
		}
		return e;
	}
	GetAchievementMapCache() {
		return JSON.stringify(
			Array.from(this.m_AchievementMap).map((e) => [e[0], Array.from(e[1])]),
		);
	}
	RestoreAchievementMapFromCache(e) {
		this.m_AchievementMap.clear();
		let t = JSON.parse(e);
		for (let e of t) {
			this.m_AchievementMap.set(e[0], new Map(e[1]));
		}
	}
}
Cg([m.sH], Y.prototype, "m_bNoMoreHistoryAvailable", undefined);
Cg([m.sH.shallow], Y.prototype, "m_mapActivityByDay", undefined);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	Y.prototype,
	"lastAddedEventType",
	null,
);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	Y.prototype,
	"lastAddedPartnerEvent",
	null,
);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	Y.prototype,
	"appActivityByDay",
	null,
);
Cg([m.XI], Y.prototype, "SortEvents", null);
Cg([m.XI], Y.prototype, "AddUserNewsEvent", null);
Cg([m.XI], Y.prototype, "MergeGameActivity", null);
class K {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_mapAppActivity = new Map();
	m_setAppsLoading = new Set();
	m_setAppFetchRequested = new Set();
	static k_strStorageKeyDeckCompatibilityFeedback_Ask =
		"deck_compatibility_feedback_ask";
	static k_strStorageKeyDeckCompatibilityFeedback_EligibleApps =
		"deck_compatibility_feedback_eligible_apps";
	static k_strStorageKeyDeckCompatibilityFeedback_Deprecated =
		"deck_compatibility_feedback_user_responded";
	m_localStorage;
	m_rgDeckCompatibilityFeedback_Ask = [];
	m_deckCompatibilityFeedback_EligibleApps = {};
	Init(e) {
		this.m_CMInterface = e;
		SteamClient.GameSessions.RegisterForAppLifetimeNotifications(
			this.OnAppLifetimeNotification,
		);
		SteamClient.GameSessions.RegisterForScreenshotNotification(
			this.OnScreenshotNotification,
		);
		SteamClient.GameSessions.RegisterForAchievementNotification(
			this.OnAchievementNotification,
		);
		this.m_localStorage = new s.A();
		this.m_localStorage
			.GetObject(K.k_strStorageKeyDeckCompatibilityFeedback_Ask)
			.then((e) => {
				if (e !== null) {
					this.m_rgDeckCompatibilityFeedback_Ask = e;
				}
			});
		this.m_localStorage
			.GetObject(K.k_strStorageKeyDeckCompatibilityFeedback_EligibleApps)
			.then((e) => {
				if (e !== null) {
					this.m_deckCompatibilityFeedback_EligibleApps = e;
				}
			});
		this.m_localStorage
			.GetObject(K.k_strStorageKeyDeckCompatibilityFeedback_Deprecated)
			.then((e) => {
				if (e !== null) {
					e.forEach((e) => {
						this.m_deckCompatibilityFeedback_EligibleApps[e] = 0;
					});
				}
			});
		this.m_localStorage.RemoveObject(
			K.k_strStorageKeyDeckCompatibilityFeedback_Deprecated,
		);
	}
	get CMInterface() {
		return this.m_CMInterface;
	}
	OnAppLifetimeNotification(e) {
		if (e.unAppID != 0 && !e.bRunning) {
			this.FetchLatestActivity(e.unAppID);
			const t = w.tw.GetAppOverviewByAppID(e.unAppID)?.BIsSteamDeckVerified();
			if (
				!t ||
				this.m_deckCompatibilityFeedback_EligibleApps[e.unAppID] !== undefined
			) {
				return;
			}
			let r = A.w.Init(C.bv);
			r.Body().set_appid(e.unAppID);
			C.nd
				.ShouldPromptForCompatibilityFeedback(
					yX.CMInterface.GetServiceTransport(),
					r,
				)
				.then((t) => {
					if (!t) {
						return;
					}
					const r = this.m_rgDeckCompatibilityFeedback_Ask.findIndex(
						(t) => t == e.unAppID,
					);
					const n = t.Body();
					if (n.prompt() && r == -1) {
						this.m_rgDeckCompatibilityFeedback_Ask.push(e.unAppID);
					} else if (!n.prompt() && r !== -1) {
						this.m_rgDeckCompatibilityFeedback_Ask.splice(r, 1);
					}
					if (n.feedback_eligible()) {
						const t =
							n.existing_feedback() !== undefined ? n.existing_feedback() : 0;
						this.m_deckCompatibilityFeedback_EligibleApps[e.unAppID] = t;
					}
					this.writeDeckCompatibilityFeedbackToLocalStorage();
				});
		}
	}
	OnScreenshotNotification(e) {
		if (e.unAppID != 0) {
			this.FetchLatestActivity(e.unAppID, true);
		}
	}
	OnAchievementNotification(e) {
		if (e.unAppID != 0) {
			this.FetchLatestActivity(e.unAppID, true);
		}
	}
	GetAppActivity(e) {
		let t = this.m_mapAppActivity.get(e);
		if (!t) {
			this.RequestRestoreActivity(e);
		}
		return t;
	}
	RequestRestoreActivity(e) {
		if (!this.m_mapAppActivity.has(e) && !this.m_setAppsLoading.has(e)) {
			this.m_setAppsLoading.add(e);
			this.RestoreActivity(e);
		}
	}
	async RestoreActivity(e) {
		await this.RestoreCachedActivity(e);
		if (!this.m_mapAppActivity.get(e)) {
			this.m_mapAppActivity.set(e, new Y(e));
			this.m_setAppFetchRequested.add(e);
		}
		this.m_setAppsLoading.delete(e);
		if (this.m_setAppFetchRequested.has(e)) {
			await this.FetchLatestActivityFromServer(e, true);
		}
	}
	BShouldPromptForDeckCompatibilityFeedback(e) {
		if (!y.TS.ON_DECK) {
			return false;
		}
		if (v.rV.storePreferences.provide_deck_feedback != 1) {
			return false;
		}
		return (
			this.m_rgDeckCompatibilityFeedback_Ask.findIndex((t) => t == e) !== -1
		);
	}
	BAllowDeckCompatibilityFeedback(e) {
		return (
			y.TS.ON_DECK &&
			this.m_deckCompatibilityFeedback_EligibleApps[e] !== undefined
		);
	}
	GetDeckCompatibilityFeedback(e) {
		return this.m_deckCompatibilityFeedback_EligibleApps[e] ?? 0;
	}
	async SetDeckCompatibilityFeedback(e, t) {
		let r = A.w.Init(C.Le);
		r.Body().set_appid(e);
		r.Body().set_feedback(t);
		let n = await C.nd.SetCompatibilityFeedback(
			yX.CMInterface.GetServiceTransport(),
			r,
		);
		const i = this.m_rgDeckCompatibilityFeedback_Ask.findIndex((t) => t == e);
		if (i !== -1) {
			this.m_rgDeckCompatibilityFeedback_Ask.splice(i, 1);
		}
		this.m_deckCompatibilityFeedback_EligibleApps[e] =
			n.GetEResult() == 1 ? t : 0;
		this.writeDeckCompatibilityFeedbackToLocalStorage();
		return n.GetEResult() == 1;
	}
	writeDeckCompatibilityFeedbackToLocalStorage() {
		this.m_localStorage.StoreObject(
			K.k_strStorageKeyDeckCompatibilityFeedback_Ask,
			this.m_rgDeckCompatibilityFeedback_Ask,
		);
		this.m_localStorage.StoreObject(
			K.k_strStorageKeyDeckCompatibilityFeedback_EligibleApps,
			this.m_deckCompatibilityFeedback_EligibleApps,
		);
	}
	ClearDeckCompatibilityFeedbackAskList() {
		this.m_rgDeckCompatibilityFeedback_Ask = [];
		this.m_localStorage.StoreObject(
			K.k_strStorageKeyDeckCompatibilityFeedback_Ask,
			this.m_rgDeckCompatibilityFeedback_Ask,
		);
	}
	RestoreCachedActivity = L3(function* (e) {
		let t = new Y(e);
		let r = yield S.O.GetCachedDataForApp(e, T, 5);
		if (!r) {
			return;
		}
		t.RestoreAchievementMapFromCache(r);
		const n = [];
		let a = yield S.O.GetCachedDataForApp(e, k, 5);
		if (a && a.length) {
			try {
				for (let e = 0; e < a.length; ++e) {
					let r = i.bg(a[e]);
					let s = _.Bi.deserializeBinary(r);
					n.push(t.AddUserNewsEvent(s));
				}
			} catch (e) {}
		}
		if (e && ((a = yield S.O.GetCachedDataForApp(e, D, 5)), a && a.length)) {
			try {
				for (let e = 0; e < a.length; ++e) {
					let r = i.bg(a[e]);
					let n = _.HN.deserializeBinary(r);
					t.AddGameActivityEvent(n, this.m_CMInterface.steamid);
				}
			} catch (e) {
				console.log("FAILED to restore the game activity cache.");
			}
		}
		yield Promise.all([...n]);
		yield t.RequestStoreItems();
		t.SortEvents();
		if (t.BHasEvents()) {
			this.m_mapAppActivity.set(e, t);
		}
	});
	FetchLatestActivity(e, t) {
		if (!this.m_setAppFetchRequested.has(e)) {
			this.m_setAppFetchRequested.add(e);
			if (this.m_mapAppActivity.has(e)) {
				this.FetchLatestActivityFromServer(e, t);
			} else {
				this.RequestRestoreActivity(e);
			}
		}
	}
	async FetchLatestActivityFromServer(e, t) {
		let r = this.m_mapAppActivity.get(e);
		let n = A.w.Init(_.zm);
		n.Body().set_filterappid(e);
		n.Body().set_language(y.TS.LANGUAGE);
		n.Body().set_count(100);
		n.Body().set_starttime(r.latest_user_news_time + 1);
		n.Body().set_endtime(0);
		n.Body().set_filterflags(J());
		let i;
		let a = _.eW.GetUserNews(this.m_CMInterface.GetServiceTransport(), n);
		if (e) {
			let t = A.w.Init(_.Uk);
			t.Body().set_steamid(this.m_CMInterface.steamid.ConvertTo64BitString());
			t.Body().set_appid(e);
			t.Body().set_count(100);
			t.Body().set_starttime(r.latest_game_activity_time + 1);
			t.Body().set_endtime(0);
			i = _.ag.GetActivity(this.m_CMInterface.GetServiceTransport(), t);
		}
		let s = await a;
		let o = i ? await i : undefined;
		await r.MergeUserNews(s.Body());
		if (o) {
			r.MergeGameActivity(o.Body(), this.m_CMInterface.steamid);
		}
		await Promise.all([
			S.O.SetCachedDataForApp(e, T, 5, r.GetAchievementMapCache()),
			S.O.SetCachedDataForApp(e, k, 5, r.GetUserNewsCache()),
			S.O.SetCachedDataForApp(e, D, 5, r.GetGameActivityCache()),
		]);
		this.m_setAppFetchRequested.delete(e);
	}
	async FetchActivityHistory(e, t) {
		let r = await this.GetAppActivity(e);
		if (r.m_bNoMoreHistoryAvailable) {
			return;
		}
		let n = A.w.Init(_.zm);
		n.Body().set_filterappid(e);
		n.Body().set_language(y.TS.LANGUAGE);
		n.Body().set_count(t);
		n.Body().set_starttime(0);
		n.Body().set_endtime(r.earliest_user_news_time - 1);
		n.Body().set_filterflags(J());
		let i = await _.eW.GetUserNews(this.m_CMInterface.GetServiceTransport(), n);
		const a = i
			.Body()
			.news()
			.reduce((e, t) => Math.min(e, t.eventtime()), 4294967295);
		let s;
		if (e) {
			const n = A.w.Init(_.Uk);
			n.Body().set_steamid(this.m_CMInterface.steamid.ConvertTo64BitString());
			n.Body().set_appid(e);
			n.Body().set_count(t);
			n.Body().set_starttime(a);
			n.Body().set_endtime(r.earliest_game_activity_time - 1);
			s = await _.ag.GetActivity(this.m_CMInterface.GetServiceTransport(), n);
		}
		h5(() => {
			r.MergeUserNews(i.Body());
			if (s) {
				this.m_mapAppActivity
					.get(e)
					.MergeGameActivity(s.Body(), this.m_CMInterface.steamid);
			}
			if (i.Body().news().length < t) {
				r.m_bNoMoreHistoryAvailable = true;
			}
		});
	}
}
let X;
function J() {
	if (X !== undefined) {
		return X;
	}
	let e = [
		a._Q.AchievementUnlocked,
		a._Q.FilePublished_Screenshot,
		a._Q.FilePublished_Video,
		a._Q.UserStatus,
		a._Q.RecommendedGame,
		a._Q.ReceivedNewGame,
		a._Q.AddedGameToWishlist,
		a._Q.PlayedGameFirstTime,
		a._Q.PostedAnnouncement,
	];
	X = 0;
	for (let t of e) {
		X |= $(t);
	}
	return X;
}
function $(e) {
	switch (e) {
		case a._Q.FriendAdded: {
			return 1;
		}
		case a._Q.AchievementUnlocked: {
			return 2;
		}
		case a._Q.ReceivedNewGame:
		case a._Q.PlayedGameFirstTime: {
			return 4;
		}
		case a._Q.JoinedGroup: {
			return 8;
		}
		case a._Q.AddedGameToWishlist: {
			return 128;
		}
		case a._Q.RecommendedGame: {
			return 256;
		}
		case a._Q.ScreenshotPublished_Deprecated: {
			return 512;
		}
		case a._Q.VideoPublished_Deprecated: {
			return 1024;
		}
		case a._Q.FilePublished_Screenshot: {
			return 512;
		}
		case a._Q.FilePublished_Video: {
			return 1024;
		}
		case a._Q.FilePublished_WorkshopItem: {
			return 8192;
		}
		case a._Q.UserStatus: {
			return 4096;
		}
		case a._Q.FilePublished_Collection:
		case a._Q.FilePublished_WebGuide:
		case a._Q.FilePublished_Art: {
			return 8192;
		}
		case a._Q.ClanAchievement: {
			return 65536;
		}
		case a._Q.PostedAnnouncement: {
			return 131072;
		}
		case a._Q.ScheduledEvent: {
			return 262144;
		}
		case a._Q.SelectedNewPOTW: {
			return 524288;
		}
		case a._Q.PromotedNewAdmin: {
			return 1048576;
		}
		case a._Q.MessageOnClanPage: {
			return 2097152;
		}
		case a._Q.CuratorRecommendedGame: {
			return 4194304;
		}
		case a._Q.FileFavorited: {
			return 16384;
		}
		default: {
			console.log("Unknown user news type", e);
		}
	}
	return 0;
}
Cg([m.sH.shallow], K.prototype, "m_mapAppActivity", undefined);
Cg([m.sH], K.prototype, "m_rgDeckCompatibilityFeedback_Ask", undefined);
Cg([m.sH], K.prototype, "m_deckCompatibilityFeedback_EligibleApps", undefined);
Cg([m.XI.bound], K.prototype, "OnAppLifetimeNotification", null);
Cg([m.XI.bound], K.prototype, "OnScreenshotNotification", null);
Cg([m.XI.bound], K.prototype, "OnAchievementNotification", null);
export const yX = new K();
window.appActivityStore = yX;
