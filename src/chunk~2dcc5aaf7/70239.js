import { Seconds } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i, { GU } from "./20414.js";
import a from "./96538.js";
import s, { Gn } from "./89193.js";
import o, { q3 } from "./90095.js";
import l from "./12176.js";
import c from "./34043.js";
import m from "./52451.js";
import u from "./34792.js";
import { Yb } from "./39002.js";
import { I } from "./61416.js";
import g from "./43691.js";
import h from "./75144.js";
import { KV } from "./46382.js";
import _ from "./32493.js";
function f(e) {
	return `publishedfiledetails_${e}`;
}
export function Kp(e, t) {
	return I({
		queryKey: [f(t)],
		queryFn: async () =>
			await (async (e, t) => {
				let r = l.w.Init(c.TA);
				r.Body().set_publishedfileids([t]);
				r.Body().set_appid(e);
				let n = await c.a5.GetDetails(B6.CMInterface.GetServiceTransport(), r);
				if (n.GetEResult() == 1) {
					const e = n.Body().toObject();
					if (e.publishedfiledetails.length > 0) {
						return e.publishedfiledetails[0];
					}
				}
				throw `Failed FetchPublishedFileDetails { publishedfileid: ${t} }`;
			})(e, t),
		staleTime: Seconds.PerHour * 1000,
	});
}
function y(e) {
	return `usercollections_${e}`;
}
export function EH(e) {
	return I({
		queryKey: [y(e)],
		queryFn: async () =>
			await (async (e) => {
				let t = l.w.Init(c.NZ);
				t.Body().set_steamid(g.iA.steamid);
				t.Body().set_type("myfiles");
				t.Body().set_page(1);
				t.Body().set_numperpage(1000);
				t.Body().set_sortmethod("alpha");
				t.Body().set_privacy(30);
				t.Body().set_appid(e);
				t.Body().set_filetype(1);
				let r = await c.a5.GetUserFiles(
					B6.CMInterface.GetServiceTransport(),
					t,
				);
				if (r.GetEResult() == 1) {
					return r.Body().toObject().publishedfiledetails;
				}
				throw `Failed FetchUserCollections { appid: ${e} }`;
			})(e),
		staleTime: Seconds.PerHour * 1000,
	});
}
const w = "workshop_hidden_items";
const B = "workshop_trendy_items";
class v {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_hRegisterForWorkshopChanges = SteamClient.Apps?.RegisterForWorkshopChanges(
		this.onWorkshopChanges,
	);
	m_hRegisterForItemInstalled =
		SteamClient.Apps?.RegisterForWorkshopItemInstalled(
			this.onWorkshopItemInstalled,
		);
	m_mapWorkshopItemsTrendy = new Map();
	m_mapWorkshopItemsSubscribed = new Map();
	m_mapWorkshopItemsSubscriptionCount = new Map();
	m_mapWorkshopItemsDownloaded = new Map();
	m_mapWorkshopItemsDownloading = new Map();
	m_mapPublishedFiles = new Map();
	m_LoadQueue = new Array();
	m_LoadTimer = 0;
	m_LoadDelayMS = 25;
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			c.be.NotifyFileDeletedHandler,
			(e) => {
				this.InvalidateWorkshopItems(e.Body().app_id());
				return 1;
			},
		);
	}
	get CMInterface() {
		return this.m_CMInterface;
	}
	onWorkshopChanges(e) {
		if (this.m_mapWorkshopItemsSubscribed.has(e)) {
			this.FetchSubscribedItems(e);
		}
	}
	onWorkshopItemInstalled(e) {
		if (!this.m_mapWorkshopItemsSubscribed.has(e.appid)) {
			return;
		}
		let t = this.m_mapWorkshopItemsSubscribed
			.get(e.appid)
			.find((t) => t.publishedfileid == e.publishedfileid);
		if (t) {
			t.manifestid = e.manifestid;
		}
	}
	GetSubscribedItems(e) {
		if (!this.m_mapWorkshopItemsSubscribed.has(e)) {
			this.m_mapWorkshopItemsSubscribed.set(e, new Array());
			this.FetchSubscribedItems(e);
		}
		return this.m_mapWorkshopItemsSubscribed.get(e);
	}
	ReorderSubscribedItems(e, t, r) {
		let n = this.GetSubscribedItems(e);
		n = Yb(n, t, r);
		this.m_mapWorkshopItemsSubscribed.set(e, n);
		for (let e = 0; e < n.length; ++e) {
			n[e].load_order = e;
		}
		SteamClient.Apps.MoveWorkshopItemLoadOrder(e, t, r);
	}
	ReorderSubscribedItemsByDependencies(e) {
		let t = this.GetSubscribedItems(e);
		t.sort((e, t) => e.time_subscribed - t.time_subscribed);
		let r = new Map();
		let n = new Map();
		for (let e of t) {
			let t = [];
			if (e.details?.children) {
				for (let r of e.details.children) {
					t.push(r);
				}
			}
			r.set(e.publishedfileid, t);
			n.set(e.publishedfileid, e);
		}
		let i = new Map();
		let a = [];
		let s = (e) => {
			let t = i.get(e.publishedfileid);
			if (t == "processed") {
				return;
			}
			if (t == "processing") {
				return;
			}
			i.set(e.publishedfileid, "processing");
			let o = r.get(e.publishedfileid);
			for (let e of o) {
				let t = n.get(e);
				if (t) {
					s(t);
				}
			}
			i.set(e.publishedfileid, "processed");
			a.push(e);
		};
		for (let e of t) {
			i.set(e.publishedfileid, "pending");
		}
		for (let e of t) {
			s(e);
		}
		this.m_mapWorkshopItemsSubscribed.set(e, a);
		let o = a.map((e) => e.publishedfileid);
		SteamClient.Apps.SetWorkshopItemsLoadOrder(e, o);
	}
	GetNumSubscribedItems(e) {
		if (!this.m_mapWorkshopItemsSubscriptionCount.has(e)) {
			this.m_mapWorkshopItemsSubscriptionCount.set(e, 0);
			SteamClient.Apps.GetSubscribedWorkshopItems(e).then((t) => {
				this.m_mapWorkshopItemsSubscriptionCount.set(e, t.length);
			});
		}
		return this.m_mapWorkshopItemsSubscriptionCount.get(e);
	}
	async FetchSubscribedItems(e) {
		let t = await SteamClient.Apps.GetSubscribedWorkshopItems(e);
		let r = this.m_mapWorkshopItemsSubscribed.get(e);
		let n = new Map();
		r.forEach((e) => n.set(e.publishedfileid, e.details));
		let i = new Map();
		let a = [];
		t.forEach((e, t) => {
			let r = n.get(e.publishedfileid);
			if (r) {
				e.details = r;
			} else {
				a.push(e.publishedfileid);
				i.set(e.publishedfileid, t);
			}
		});
		if (a.length != 0) {
			(await SteamClient.Apps.GetSubscribedWorkshopItemDetails(e, a)).forEach(
				(e) => {
					let r = i.get(e.publishedfileid);
					if (r >= 0) {
						t[r].details = e;
					}
				},
			);
		}
		this.m_mapWorkshopItemsSubscriptionCount.set(e, t.length);
		this.m_mapWorkshopItemsSubscribed.set(e, t);
	}
	async FetchTrendyItems(e) {
		let t = l.w.Init(c.WJ);
		t.Body().set_filetype(0);
		t.Body().set_appid(e);
		t.Body().set_query_type(3);
		t.Body().set_include_recent_votes_only(true);
		t.Body().set_days(7);
		t.Body().set_excluded_content_descriptors(
			u.rV.excludedCommunityContentDescriptors,
		);
		return await this.FetchItemDataUsingRequest(t);
	}
	async FetchTopClassicItems(e) {
		let t = l.w.Init(c.WJ);
		t.Body().set_filetype(0);
		t.Body().set_appid(e);
		t.Body().set_query_type(11);
		t.Body().set_excluded_content_descriptors(
			u.rV.excludedCommunityContentDescriptors,
		);
		return await this.FetchItemDataUsingRequest(t);
	}
	async FetchItemDataUsingRequest(e) {
		let t = await a.O.GetCachedDataForApp(e.Body().appid(), w, 1);
		e.Body().set_numperpage(30);
		e.Body().set_return_vote_data(true);
		e.Body().set_return_short_description(true);
		e.Body().set_return_tags(true);
		e.Body().set_strip_description_bbcode(true);
		let r = new Array();
		let n = 1;
		let i = false;
		while (r.length < 1 && !i) {
			e.Body().set_page(n);
			let a = await c.a5.QueryFiles(
				this.m_CMInterface.GetServiceTransport(),
				e,
			);
			if (a.GetEResult() != 1) {
				console.warn(
					`Error when calling PublishedFileService.QueryFiles: EResult=${a.GetEResult()}, Msg=${a
						.Hdr()
						.error_message()}`,
				);
				break;
			}
			{
				i = a.Body().publishedfiledetails().length < 30;
				let s = new Map();
				for (let e of a.Body().publishedfiledetails()) {
					if (e.result() == 1) {
						if (
							!(e.flags() & 1) &&
							!e.banned() &&
							(!t || !t.find((t) => e.publishedfileid() == t))
						) {
							s.set(e.publishedfileid(), e.toObject());
						}
					}
				}
				if (s.size > 0) {
					let t = l.w.Init(c.oA);
					t.Body().set_appid(e.Body().appid());
					t.Body().set_listtype(1);
					t.Body().set_publishedfileids(Array.from(s.keys()));
					let n = await c.a5.AreFilesInSubscriptionList(
						this.m_CMInterface.GetServiceTransport(),
						t,
					);
					if (n.GetEResult() != 1) {
						console.warn(
							`Error when calling PublishedFileService.AreFilesInSubscriptionList: EResult=${n.GetEResult()}, Msg=${n
								.Hdr()
								.error_message()}`,
						);
						break;
					}
					for (let e of n.Body().files()) {
						if (
							!e.inlist() &&
							(r.push(s.get(e.publishedfileid())), r.length == 1)
						) {
							break;
						}
					}
				}
				n++;
			}
		}
		return r;
	}
	async FetchTrendyWorkshopItems(e) {
		let t = await a.O.GetCachedDataForApp(e, B, 2);
		if (t) {
			this.m_mapWorkshopItemsTrendy.set(e, t);
		}
		let r = await this.FetchTrendyItems(e);
		if (r.length == 0) {
			r = await this.FetchTopClassicItems(e);
		}
		this.m_mapWorkshopItemsTrendy.set(e, r);
		a.O.SetCachedDataForApp(e, B, 2, t);
	}
	onWorkshopDownload(e, t, r) {
		if (this.m_mapWorkshopItemsDownloaded.has(e) && r == 1) {
			const r = this.m_mapWorkshopItemsDownloading
				.get(e)
				?.findIndex((e) => e.publishedfileid == t);
			if (r >= 0) {
				this.m_mapWorkshopItemsDownloading.get(e)?.splice(r, 1);
			}
			this.m_mapWorkshopItemsDownloaded.get(e).push({
				publishedfileid: t,
			});
		}
	}
	GetDownloadedItems(e) {
		if (!this.m_mapWorkshopItemsDownloaded.has(e)) {
			this.m_mapWorkshopItemsDownloaded.set(e, new Array());
			this.FetchDownloadedItems(e);
			SteamClient.Apps.RegisterForWorkshopItemDownloads(
				e,
				this.onWorkshopDownload,
			);
		}
		return this.m_mapWorkshopItemsDownloaded.get(e);
	}
	async FetchDownloadedItems(e) {
		const t = await SteamClient.Apps.GetDownloadedWorkshopItems(e);
		let r = new Array();
		for (let e of t) {
			r.push({
				publishedfileid: e.publishedfileid,
			});
		}
		this.m_mapWorkshopItemsDownloaded.set(e, r);
	}
	Download(e, t) {
		SteamClient.Apps.DownloadWorkshopItem(e, t, true);
		const r = {
			publishedfileid: t,
		};
		if (this.m_mapWorkshopItemsDownloading.has(e)) {
			this.m_mapWorkshopItemsDownloading.get(e).push(r);
		} else {
			const t = [r];
			this.m_mapWorkshopItemsDownloading.set(e, t);
		}
	}
	GetDownloadingItems(e) {
		return this.m_mapWorkshopItemsDownloading.get(e);
	}
	GetTrendyWorkshopItems(e) {
		if (!this.m_mapWorkshopItemsTrendy.has(e)) {
			this.m_mapWorkshopItemsTrendy.set(e, new Array());
			this.FetchTrendyWorkshopItems(e);
		}
		return this.m_mapWorkshopItemsTrendy.get(e);
	}
	InvalidateWorkshopItems(e) {
		if (this.m_mapWorkshopItemsTrendy.has(e)) {
			this.m_mapWorkshopItemsTrendy.delete(e);
		}
	}
	async HideWorkshopItem(e, t) {
		if (!this.m_mapWorkshopItemsTrendy.has(e)) {
			return;
		}
		let r = this.m_mapWorkshopItemsTrendy.get(e);
		for (let e = 0; e < r.length; ++e) {
			if (r[e].publishedfileid == t) {
				r.splice(e, 1);
			}
		}
		this.m_mapWorkshopItemsTrendy.set(e, r.slice());
		let n = await a.O.GetCachedDataForApp(e, w, 1);
		n ||= new Array();
		n.push(t);
		a.O.SetCachedDataForApp(e, w, 1, n);
	}
	Subscribe(e, t) {
		SteamClient.Apps.SubscribeWorkshopItem(e, t, true);
	}
	Unsubscribe(e, t) {
		SteamClient.Apps.SubscribeWorkshopItem(e, t, false);
	}
	GetPublishedFiles(e) {
		let t = [];
		for (let r of e) {
			let e = this.m_mapPublishedFiles.get(r);
			if (e) {
				t.push(e);
			} else if (!e) {
				this.m_LoadQueue.push(r);
			}
		}
		if (this.m_LoadQueue.length) {
			clearTimeout(this.m_LoadTimer);
			this.m_LoadTimer = window.setTimeout(
				() => this.LoadPublishedFiles(this.m_LoadQueue),
				this.m_LoadDelayMS,
			);
		}
		return t;
	}
	GetPublishedFile(e) {
		if (e) {
			let t = B6.GetPublishedFiles([e]);
			if (t.length > 0) {
				return t[0];
			} else {
				return null;
			}
		}
		return null;
	}
	BVotedForPublishedFile(e) {
		let t = false;
		let r = this.GetPublishedFile(e);
		if (r && r.user_vote_summary) {
			t = r.user_vote_summary.vote_for;
		}
		return t;
	}
	async LoadPublishedFiles(e) {
		this.m_LoadQueue = new Array();
		let t = l.w.Init(c.TA);
		t.Body().set_publishedfileids(e.slice());
		t.Body().set_includevotes(true);
		t.Body().set_includetags(true);
		let r = await c.a5.GetDetails(this.m_CMInterface.GetServiceTransport(), t);
		let n = new Array();
		for (let e of r.Body().publishedfiledetails()) {
			if (e.result() == 1) {
				this.m_mapPublishedFiles.set(e.publishedfileid(), {
					file: e.toObject(),
				});
				n.push(e.publishedfileid());
			}
		}
		await this.RefreshVoteSummary(n);
	}
	async RefreshVoteSummary(e) {
		let t = l.w.Init(c.qu);
		t.Body().set_publishedfileids(e.slice());
		let r = await c.a5.GetUserVoteSummary(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		for (let e of r.Body().summaries()) {
			this.m_mapPublishedFiles.get(e.publishedfileid()).user_vote_summary =
				e.toObject();
		}
	}
	async VoteOnPublishedFile(e, t) {
		if (!this.m_mapPublishedFiles.has(e)) {
			return 8;
		}
		let r = this.m_mapPublishedFiles.get(e);
		if (
			(r.user_vote_summary.vote_for && t == i.bJ.Up) ||
			(r.user_vote_summary.vote_against && t == i.bJ.Down)
		) {
			return 1;
		}
		let n = await GU(e, t);
		if (t == i.bJ.Down) {
			if (r.user_vote_summary.vote_for) {
				r.file.vote_data.votes_up--;
			}
			r.user_vote_summary.vote_for = false;
			r.user_vote_summary.vote_against = true;
			r.file.vote_data.votes_down++;
		} else if (t == i.bJ.Up) {
			if (r.user_vote_summary.vote_against) {
				r.file.vote_data.votes_down--;
			}
			r.user_vote_summary.vote_for = true;
			r.user_vote_summary.vote_against = false;
			r.file.vote_data.votes_up++;
		}
		return n;
	}
	BConnectedToSteam() {
		return this.m_CMInterface.BIsConnected();
	}
	async CreateNewCollection(e, t, r, n) {
		let i = l.w.Init(c.mU);
		i.Body().set_appid(e);
		i.Body().set_consumer_appid(e);
		i.Body().set_title(t);
		i.Body().set_file_type(2);
		i.Body().set_visibility(r);
		i.Body().set_collection_type("subscribeAll");
		let a = await c.a5.Publish(B6.CMInterface.GetServiceTransport(), i);
		if (a.GetEResult() != 1) {
			return {
				publishedfileid: null,
				result: a.GetEResult(),
			};
		}
		h.L.invalidateQueries({
			queryKey: [y(e)],
		});
		let s = a.Body().publishedfileid();
		return {
			publishedfileid: s,
			result: await this.SaveToCollection(e, s, n),
		};
	}
	async SaveToCollection(e, t, r) {
		let n = l.w.Init(c.WG);
		n.Body().set_appid(e);
		n.Body().set_publishedfileid(t);
		n.Body().set_children(r);
		return (
			await c.a5.SetCollectionChildren(B6.CMInterface.GetServiceTransport(), n)
		).GetEResult();
	}
	async SetSubscriptionsFromCollection(e, t, r) {
		let n = l.w.Init(c.GV);
		n.Body().set_appid(e);
		n.Body().set_list_type(1);
		n.Body().set_publishedfileid(t);
		n.Body().set_add_only(r);
		return (
			await c.a5.SetSubscriptionListFromCollection(
				B6.CMInterface.GetServiceTransport(),
				n,
			)
		).GetEResult();
	}
}
Cg([s.sH.shallow], v.prototype, "m_mapWorkshopItemsTrendy", undefined);
Cg([s.sH.shallow], v.prototype, "m_mapWorkshopItemsSubscribed", undefined);
Cg(
	[s.sH.shallow],
	v.prototype,
	"m_mapWorkshopItemsSubscriptionCount",
	undefined,
);
Cg([s.sH], v.prototype, "m_mapWorkshopItemsDownloaded", undefined);
Cg([s.sH], v.prototype, "m_mapWorkshopItemsDownloading", undefined);
Cg([s.sH], v.prototype, "m_mapPublishedFiles", undefined);
Cg([m.oI], v.prototype, "onWorkshopChanges", null);
Cg([m.oI], v.prototype, "onWorkshopItemInstalled", null);
Cg([s.XI], v.prototype, "ReorderSubscribedItems", null);
Cg([s.XI], v.prototype, "ReorderSubscribedItemsByDependencies", null);
Cg([m.oI], v.prototype, "onWorkshopDownload", null);
export const B6 = new v();
export function ZG(e) {
	return q3(() => (e ? B6.GetNumSubscribedItems(e) : 0));
}
export function $L(e) {
	return q3(() => (e ? B6.GetTrendyWorkshopItems(e) : []));
}
export function C6(e) {
	return q3(() => (e ? B6.GetPublishedFile(e) : null));
}
export function DJ(e, t) {
	const r = KV();
	return I({
		queryKey: ["patchnotes", e, t],
		queryFn: async () => {
			const n = l.w.Init(_.b1);
			const i = n.Body().add_requests();
			i.set_appid(e);
			if (t != "public") {
				i.set_branch(t);
			}
			i.set_start_build_id(1);
			n.Body().set_count(1);
			const a = await _.oH.GetPartnerEventsByBuildIDRange(r, n);
			if (a.GetEResult() == 1) {
				let e = a
					.Body()
					.toObject()
					.matches.sort((e, t) => t.build_id - e.build_id);
				if (e.length > 0) {
					return e[0];
				} else {
					return null;
				}
			}
			throw a.GetErrorMessage();
		},
		enabled: Boolean(e),
	});
}
window.workshopStore = B6;
