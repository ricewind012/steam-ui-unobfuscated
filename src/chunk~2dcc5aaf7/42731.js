export var FD;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require("./84731.js");
var o = require(/*webcrack:missing*/ "./49455.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require("./70232.js");
var m = require("./12956.js");
(function (e) {
	e.k_ERecent = "recent";
	e.k_ELibrary = "library";
	e.k_EWishlist = "wishlist";
	e.k_EFollowing = "following";
	e.k_ERecommended = "recommended";
	e.k_ESteam = "steam";
	e.k_EFeatured = "featured";
	e.k_ECurator = "curator";
})((FD ||= {}));
const u = [
	FD.k_ELibrary,
	FD.k_EWishlist,
	FD.k_EFollowing,
	FD.k_ERecommended,
	FD.k_ESteam,
	FD.k_ECurator,
];
const d = [...u, FD.k_EFeatured];
const A = [FD.k_EFeatured];
export var xj;
(function (e) {
	e.k_ENews = "news";
	e.k_EEvents = "events";
	e.k_EStreaming = "streaming";
	e.k_EUpdates = "updates";
	e.k_EReleases = "releases";
	e.k_ESales = "sales";
})((xj ||= {}));
const g = [
	xj.k_ENews,
	xj.k_EEvents,
	xj.k_EStreaming,
	xj.k_EUpdates,
	xj.k_EReleases,
	xj.k_ESales,
];
const h = new Map([
	[xj.k_ENews, [28]],
	[xj.k_EEvents, [9, 27, 22, 23, 24, 35, 25, 26]],
	[xj.k_EStreaming, [11]],
	[xj.k_EUpdates, [12, 13, 14]],
	[xj.k_EReleases, [10, 29, 16, 15, 32]],
	[xj.k_ESales, [20, 21, 31, 34]],
]);
function C(e) {
	return new Map(e.map((e) => [e, true]));
}
export class vJ {
	m_mapEventTypeGroupsAllowed = new Map();
	m_mapGameSources = new Map();
	m_bCuratorUnhideOnFollowDialogDismissed = false;
	m_mapHiddenApps = new Map();
	m_mapHiddenClans = new Map();
	m_bInitializedForUpdatesOnly;
	m_eStorageType = "session";
	m_strStorageKey;
	constructor(e) {
		(0, a.Gn)(this);
		(0, a.h5)(() => {
			if (e?.rgHiddenApps) {
				e.rgHiddenApps.forEach((e) => this.m_mapHiddenApps.set(e, true));
			}
			if (e?.rgHiddenClans) {
				e.rgHiddenClans.forEach((e) => this.m_mapHiddenClans.set(e, true));
			}
		});
	}
	GetGameSources() {
		return Array.from(this.m_mapGameSources.keys());
	}
	GetStorageObject() {
		if (this.m_strStorageKey) {
			if (this.m_eStorageType === "session") {
				return window.sessionStorage;
			} else {
				return window.localStorage;
			}
		} else {
			return null;
		}
	}
	GetPreferencesStorageKey() {
		return `${this.m_strStorageKey}-event-calendar-prefs`;
	}
	get enabledEventTypeSet() {
		const e = new Set();
		for (const t of Array.from(this.m_mapEventTypeGroupsAllowed.keys())) {
			h.get(t).forEach((t) => e.add(t));
		}
		return e;
	}
	MapClanEventTypeToGroup(e) {
		let t = null;
		h.forEach((r, n) => {
			if (r.indexOf(e) !== -1) {
				t = n;
			}
		});
		return t || xj.k_EEvents;
	}
	InitDefaultCheckboxes(e, t, r) {
		this.m_bInitializedForUpdatesOnly = t;
		this.m_mapEventTypeGroupsAllowed = C(t ? [xj.k_EUpdates] : g);
		const i = (0, l.Y2)() ? d : u;
		this.m_mapGameSources = C(e ? i : A);
		if (r) {
			this.m_mapGameSources.set(FD.k_EFeatured, true);
		}
	}
	Init(e, t, r, n, i) {
		this.m_eStorageType = i;
		this.m_strStorageKey = n;
		const a = this.GetStorageObject();
		const s = a ? a.getItem(this.GetPreferencesStorageKey()) : null;
		if (s) {
			const e = JSON.parse(s);
			if (e.rgEventTypeGroupsAllowed && e.rgGameSources) {
				const { rgEventTypeGroupsAllowed: t, rgGameSources: r } = e;
				this.m_mapEventTypeGroupsAllowed = C(t);
				this.m_mapGameSources = C(r);
				if (e.bCuratorUnhideOnFollowDismissed !== undefined) {
					this.m_bCuratorUnhideOnFollowDialogDismissed =
						e.bCuratorUnhideOnFollowDismissed;
				}
				return;
			}
		}
		this.InitDefaultCheckboxes(e, t, r);
	}
	SaveFilterPreferences() {
		const e = this.GetStorageObject();
		if (!e) {
			return;
		}
		const t = {
			rgEventTypeGroupsAllowed: Array.from(
				this.m_mapEventTypeGroupsAllowed.keys(),
			),
			rgGameSources: Array.from(this.m_mapGameSources.keys()),
			bCuratorUnhideOnFollowDismissed:
				this.m_bCuratorUnhideOnFollowDialogDismissed,
		};
		e.setItem(this.GetPreferencesStorageKey(), JSON.stringify(t));
	}
	BCuratorUnhideOnFollowDialogDismissed() {
		return this.m_bCuratorUnhideOnFollowDialogDismissed;
	}
	SetCuratorUnhideOnFollowDialogDismissed(e) {
		this.m_bCuratorUnhideOnFollowDialogDismissed = e;
		this.SaveFilterPreferences();
	}
	BIsEventTypeGroupAllowed(e) {
		return this.m_mapEventTypeGroupsAllowed.has(e);
	}
	BIsGameSourceAllowed(e) {
		return (
			(e !== FD.k_EFollowing || !!m.HD.bIsFollowingEnabled) &&
			(e !== FD.k_ECurator || !!m.HD.bIsCuratorsEnabled) &&
			this.m_mapGameSources.has(e)
		);
	}
	SetEventTypeGroupAllowed(e, t) {
		if (t) {
			this.m_mapEventTypeGroupsAllowed.set(e, true);
		} else {
			this.m_mapEventTypeGroupsAllowed.delete(e);
		}
		this.SaveFilterPreferences();
		c.V.RecordFilterChangeEvent(this);
	}
	SetGameSourceAllowed(e, t) {
		if (t) {
			this.m_mapGameSources.set(e, true);
			if (e == FD.k_ERecent) {
				this.m_mapGameSources.delete(FD.k_ELibrary);
			} else if (e == FD.k_ELibrary) {
				(0, o.w)(
					!this.m_mapGameSources.has(FD.k_ERecent),
					"Setting Library although Recent already set - illusion was broken",
				);
				this.m_mapGameSources.delete(FD.k_ERecent);
			}
		} else {
			this.m_mapGameSources.delete(e);
			if (e == FD.k_ERecent) {
				this.m_mapGameSources.set(FD.k_ELibrary, true);
			} else if (e == FD.k_ELibrary) {
				this.m_mapGameSources.delete(FD.k_ERecent);
			}
		}
		this.SaveFilterPreferences();
		c.V.RecordFilterChangeEvent(this);
	}
	BShouldDisplayEvent(e) {
		const t = e.GetSource();
		const r = Boolean(
			e.appInfo &&
				e.appInfo.last_played &&
				e.appInfo.last_played + 15552000 >= m.HD.GetTimeNowWithOverride(),
		);
		return (
			(!!this.enabledEventTypeSet.has(e.event_type) ||
				(!!this.m_bInitializedForUpdatesOnly &&
					!!this.BIsEventTypeGroupAllowed(xj.k_EUpdates) &&
					e.event_type == 28 &&
					!!(e.start_time < 1599202800))) &&
			!this.m_mapHiddenApps.has(e.appid) &&
			!this.m_mapHiddenClans.has(e.clanid) &&
			(!!(t & s.bK.k_eRequired) ||
				!!(t & s.bK.k_eReposted) ||
				Boolean(
					(this.BIsGameSourceAllowed(FD.k_ERecent) && r) ||
						(this.BIsGameSourceAllowed(FD.k_ELibrary) && t & s.bK.k_eLibrary) ||
						(this.BIsGameSourceAllowed(FD.k_EWishlist) &&
							t & s.bK.k_eWishlist) ||
						(this.BIsGameSourceAllowed(FD.k_EFollowing) &&
							t & s.bK.k_eFollowing) ||
						(this.BIsGameSourceAllowed(FD.k_ERecommended) &&
							t & s.bK.k_eRecommended) ||
						(this.BIsGameSourceAllowed(FD.k_ESteam) && t & s.bK.k_eSteam) ||
						(this.BIsGameSourceAllowed(FD.k_EFeatured) &&
							t & s.bK.k_eFeatured) ||
						(this.BIsGameSourceAllowed(FD.k_ECurator) && t & s.bK.k_eCurator),
				))
		);
	}
	BAreAllEventsHidden() {
		return (
			this.m_mapEventTypeGroupsAllowed.size == 0 ||
			this.m_mapGameSources.size == 0
		);
	}
	BAreAnyEventsFiltered(e) {
		const t = (0, l.Y2)() ? d : u;
		return (
			(e ? t : A).some((e) => !this.BIsGameSourceAllowed(e)) ||
			g.some((e) => !this.BIsEventTypeGroupAllowed(e))
		);
	}
	BIsClanVisible(e) {
		return !this.m_mapHiddenClans.has(e);
	}
	SetClanVisibility(e, t) {
		if (t) {
			if (this.m_mapHiddenClans.has(e)) {
				this.m_mapHiddenClans.delete(e);
			}
		} else if (!this.m_mapHiddenClans.has(e)) {
			this.m_mapHiddenClans.set(e, true);
		}
	}
	BIsAppVisible(e) {
		return !this.m_mapHiddenApps.has(e);
	}
	SetAppVisibility(e, t) {
		if (t) {
			if (this.m_mapHiddenApps.has(e)) {
				this.m_mapHiddenApps.delete(e);
			}
		} else if (!this.m_mapHiddenApps.has(e)) {
			this.m_mapHiddenApps.set(e, true);
		}
	}
}
(0, i.Cg)([a.sH], vJ.prototype, "m_mapEventTypeGroupsAllowed", undefined);
(0, i.Cg)([a.sH], vJ.prototype, "m_mapGameSources", undefined);
(0, i.Cg)(
	[a.sH],
	vJ.prototype,
	"m_bCuratorUnhideOnFollowDialogDismissed",
	undefined,
);
(0, i.Cg)([a.sH], vJ.prototype, "m_mapHiddenApps", undefined);
(0, i.Cg)([a.sH], vJ.prototype, "m_mapHiddenClans", undefined);
(0, i.Cg)(
	[
		(0, a.EW)({
			keepAlive: true,
			equals: a.m3.structural,
		}),
	],
	vJ.prototype,
	"enabledEventTypeSet",
	null,
);
(0, i.Cg)([a.XI], vJ.prototype, "SetEventTypeGroupAllowed", null);
(0, i.Cg)([a.XI], vJ.prototype, "SetGameSourceAllowed", null);
