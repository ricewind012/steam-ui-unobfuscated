import { AssertMsg } from "../../actual_src/utils/assert.js";
import n from "./12176.js";
import i from "./34043.js";
import a from "./96593.js";
import s, { fu, s$ } from "./78721.js";
import o, { useCallback, useState, useMemo, useEffect } from "./63696.js";
import l, { EN } from "./19106.js";
import c, { jE } from "./3715.js";
import m, { I as I_1 } from "./61416.js";
import u, { q as q_1 } from "./30329.js";
import d, { n as n_1 } from "./26667.js";
import A, { LH } from "./24295.js";
import p, { KV } from "./46382.js";
import g from "./83599.js";
import h, { Y2 } from "./72476.js";
import C, { gX, bY } from "./67429.js";
import _, { Km, XA, z as z_1 } from "./91720.js";
import b, { dm } from "./34428.js";
import y from "./60917.js";
import S, { lY } from "./51095.js";
import w from "./65528.js";
import B from "./75144.js";
function v(e) {
	return e.startsWith("remote_");
}
function I(e) {
	if (v(e)) {
		const { strUGCHandle } = ((e) => {
			if (!v(e)) {
				return {
					strPublishedFileID: undefined,
					strUGCHandle: undefined,
				};
			}
			const [t, r, n] = e.split("_");
			return {
				strPublishedFileID: r,
				strUGCHandle: n,
			};
		})(e);
		return strUGCHandle;
	}
	{
		const { hHandle, gameid } = ((e) => {
			if (v(e)) {
				return {
					hHandle: 0,
					gameid: "0",
				};
			}
			const [t, r, n] = e.split("_");
			return {
				hHandle: parseInt(n),
				gameid: r,
			};
		})(e);
		return `${gameid}_${hHandle}`;
	}
}
const E = new g.wd("Screenshots").Debug;
export const sF = {
	listSource: {
		type: "recents",
	},
	mediaType: "all",
	uploadStatus: "all",
};
export function Bo(e) {
	return {
		type: "screenshot",
		id: i3(e),
		local: e,
		nHeight: e.nHeight,
		nWidth: e.nWidth,
		rtCreated: e.nCreated,
		strGameID: e.strGameID,
		strUrl: fu(e.strUrl),
		bUploaded: e.bUploaded,
		strShortcutName: e.strShortcutName,
	};
}
export function i3(e) {
	if (e.bUploaded && e.ugcHandle) {
		return e.ugcHandle;
	} else {
		return k(e);
	}
}
function k(e) {
	return `${e.strGameID}_${e.hHandle}`;
}
function D(e) {
	return e.hcontent_file;
}
function N(e, t) {
	if (e || t) {
		if (e) {
			if (t) {
				return {
					...e,
					...t,
				};
			} else {
				return e;
			}
		} else {
			return t;
		}
	} else {
		return null;
	}
}
const F = ["screenshots", "all"];
export function e8(e, t) {
	const r = e.getQueryCache().get(EN(F))?.state.data;
	if (!r || !t) {
		return null;
	}
	let n;
	if ((n = t).startsWith("remote_") || n.startsWith("local_")) {
		t = I(t);
	}
	const i = r.modifiedIDs[t];
	return N(r.local[i] || r.local[t], r.remote[i] || r.remote[t]);
}
export function FD(e) {
	const t = jE();
	return z(useCallback((r) => e8(t, (r.screenshots[e], e)), [t, e]));
}
export function Kr(e) {
	const t = Bo(e);
	te(B.L, t, true);
	return t.id;
}
const L = ["screenshots", "local"];
function z(e) {
	const t = jE();
	return I_1({
		queryKey: L,
		queryFn: () =>
			(async (e) => {
				const t = {
					rgOrder: [],
					screenshots: {},
				};
				const r =
					await SteamClient.Screenshots.GetAllAppsLocalScreenshotsCount();
				for (let e = 0; e < r; e += 1000) {
					const n = Math.min(r - 1, e + 1000 - 1);
					const i =
						await SteamClient.Screenshots.GetAllAppsLocalScreenshotsRange(e, n);
					for (const e of i) {
						e.strUrl = fu(e.strUrl);
						const r = Bo(e);
						const r_id = r.id;
						if (r.strShortcutName) {
							w.y.SetShortcutDisplayName(r.strGameID, r.strShortcutName);
						}
						t.rgOrder.push(r_id);
						t.screenshots[n] = r;
					}
				}
				t.rgOrder.sort(
					(e, r) =>
						t.screenshots[r].local.nCreated - t.screenshots[e].local.nCreated,
				);
				re(e, (e) => ({
					...(e || {
						remote: {},
						modifiedIDs: {},
					}),

					local: t.screenshots,
				}));
				return t;
			})(t),
		select: e,
		structuralSharing: false,
	});
}
function x(e) {
	const t = !e.consumer_appid && e.consumer_shortcutid;
	let r;
	if (t) {
		const t = a.tw.allApps.find((t) => lY(t.display_name, e.shortcutname) == 0);
		if (t) {
			r = t.GetGameID();
			const n = new C.VS(r);
			w.y.SetShortcutOverride(n.GetInternalAppID(), e.consumer_shortcutid);
		}
	}
	const n = r ?? gX(e.consumer_shortcutid);
	if (t) {
		return n;
	} else {
		return e.consumer_appid?.toString();
	}
}
function U(e, t, r) {
	const a = KV();
	const s = LH();
	const o = jE();
	return q_1({
		queryKey: ["screenshots", "remote", e],
		queryFn: ({ pageParam = 1 }) =>
			(async (e, t, r, a, s, o) => {
				E("FetchScreenshotRemoteHandles", a);
				const l = {
					rgOrder: [],
					screenshots: {},
					cTotal: 0,
					rgApps: [],
				};
				if (a.listSource.type === "phase") {
					return l;
				}
				if (Y2()) {
					return l;
				}
				if (
					a.uploadStatus === "notuploaded" ||
					(a.mediaType !== "all" && a.mediaType !== "screenshot")
				) {
					return l;
				}
				let c = n.w.Init(i.NZ);
				c.Body().set_steamid(r);
				c.Body().set_page(o);
				c.Body().set_numperpage(s);
				c.Body().set_sortmethod("newestfirst");
				c.Body().set_privacy(30);
				c.Body().set_filetype(4);
				c.Body().set_return_apps(true);
				c.Body().set_return_reactions(true);
				const m = NN(a.listSource);
				const u = m ? (w.y.GetShortcutDisplayName(m) ?? -1) : null;
				if (m) {
					const e = new C.VS(m);
					if (e.BIsSteamApp()) {
						c.Body().set_appid(e.GetAppID());
					} else {
						c.Body().set_shortcutid(
							w.y.GetShortcutOverride(e.GetInternalAppID()),
						);
					}
				}
				let d = await i.a5.GetUserFiles(t, c);
				if (d.GetEResult() == 1) {
					const t = d.Body().toObject();
					l.cTotal = t.total;
					l.rgApps = t.apps;
					if (t.publishedfiledetails.length == 0) {
						return l;
					}
					for (const e of t.publishedfiledetails) {
						const t = e;
						const r = D(t);
						const n = x(t);
						if (!u || t.shortcutname == u) {
							l.rgOrder.push(r);
							l.screenshots[r] = {
								id: r,
								type: "screenshot",
								remote: t,
								nHeight: t.image_height,
								nWidth: t.image_width,
								rtCreated: t.time_created,
								strUrl: t.image_url,
								strGameID: n,
								bUploaded: true,
								strShortcutName: t.shortcutname,
							};
						}
					}
					re(e, (e) => ({
						...(e || {
							local: {},
							modifiedIDs: {},
						}),

						remote: {
							...(e?.remote || {}),
							...l.screenshots,
						},
					}));
					return l;
				}
				throw `Failed FetchScreenshotRemoteHandles { filter: "${JSON.stringify(
					a,
				)}", nPage: ${o} }`;
			})(o, a, s, e, t, pageParam),
		getNextPageParam: (e, t) => (t?.length || 0) + 1,
		initialPageParam: 1,
		select: r,
	});
}
export function MZ(e, t = 50) {
	const r = ((e) => {
		const { uploadStatus, mediaType, listSource } = e;
		return z(
			useCallback(
				(e) => {
					const i = [];
					const a = {};
					const s = NN(listSource);
					if (!e || (mediaType !== "all" && mediaType != "screenshot")) {
						return {
							rgOrder: i,
							screenshots: a,
						};
					}
					if (listSource.type === "phase") {
						const t = listSource.phase.screenshots || [];
						for (const r of t) {
							const t = k({
								strGameID: s,
								hHandle: r,
							});
							if (e.screenshots[t]) {
								i.push(t);
								a[t] = e.screenshots[t];
							}
						}
					} else {
						for (let r = 0; r < e.rgOrder.length; r++) {
							const n = e.screenshots[e.rgOrder[r]];
							if (
								(!s || s === n.local.strGameID) &&
								(uploadStatus === "all" ||
									(uploadStatus === "uploaded" && !!n.local.bUploaded) ||
									(uploadStatus === "notuploaded" && !n.local.bUploaded))
							) {
								i.push(n.id);
								a[n.id] = n;
							}
						}
					}
					return {
						rgOrder: i,
						screenshots: a,
					};
				},
				[listSource, uploadStatus, mediaType],
			),
		);
	})(e);
	const n = U(e, t);
	const { rgClips, bLoading } = H(e);
	const { rgRecordings, bLoading: bLoading_1 } = j(e);
	const [c, setC] = useState(1);
	const r_data = r.data;

	const { data, fetchNextPage, isFetchingNextPage } = n;

	const p = c * t;
	const g = useMemo(
		() =>
			((e, t, r, n, i) => {
				const a = [];
				const s = {};
				const o = {};
				if (t) {
					for (let r = 0; r < t.pages.length && a.length < i; r++) {
						const n = t.pages[r];

						for (const r of n.rgOrder) {
							const i = n.screenshots[r];
							if (!s[r]) {
								if (e?.screenshots[r]) {
									o[r] = N(e.screenshots[r], i);
								}
								a.push(r);
								s[r] = i;
							}
						}
					}
				}
				let l = 0;
				let c = 0;
				let m = 0;
				let u = 0;
				const d = [];
				while (d.length < i) {
					const t = [];
					if (e && l < e.rgOrder.length) {
						const r = e.screenshots[e.rgOrder[l]];
						if (o[r.id]) {
							t.push(o[r.id]);
						} else {
							t.push(r);
						}
					}
					if (c < a.length) {
						let a_c = a[c];
						while (o[e]) {
							c++;
							if (!(c < a.length)) {
								a_c = null;
								break;
							}
							a_c = a[c];
						}
						if (a_c) {
							t.push(s[e]);
						}
					}
					if (m < r.length) {
						t.push(r[m]);
					}
					if (u < n.length) {
						t.push(n[u]);
					}
					if (t.length === 0) {
						break;
					}
					const i = t.reduce((e, t) => (q(t) - q(e) > 0 ? t : e));
					d.push(i);
					switch (i.type) {
						case "clip": {
							m++;
							break;
						}
						case "recording": {
							u++;
							break;
						}
						case "screenshot": {
							if (i.local) {
								l++;
							} else {
								c++;
							}
						}
					}
				}
				return d;
			})(r_data, data, rgClips, rgRecordings, p),
		[r_data, data, rgClips, rgRecordings, p],
	);
	const h =
		r.isLoading ||
		n.isLoading ||
		n.isLoading ||
		bLoading ||
		n.isLoading ||
		bLoading ||
		bLoading_1;
	const _ = !n.data || n.data.pages[n.data.pages.length - 1].rgOrder.length > 0;
	const f = useMemo(
		() =>
			(r_data?.rgOrder || []).reduce(
				(e, t) => e + (r_data.screenshots[t].bUploaded ? 0 : 1),
				0,
			),
		[r_data],
	);
	const b = r_data ? r_data.rgOrder.length : 0;
	const y = data ? data.pages[data.pages.length - 1].cTotal : 0;
	const S = (y > 0 ? f : b) + y + rgClips.length + rgRecordings.length;
	const w = Math.max(S, g.length);
	const B = p < w;
	const v = _ && (!isFetchingNextPage || !h);
	const I = useCallback(() => {
		if (v) {
			fetchNextPage();
		}
		if (B) {
			setC((e) => e + 1);
		}
	}, [v, fetchNextPage, B]);
	useEffect(() => {
		if (!data) {
			return;
		}
		const e = data.pages.length < c;
		const t = data.pages[data.pages.length - 1].rgOrder.length > 0;
		if (e && t && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [data, c, isFetchingNextPage, fetchNextPage]);
	return {
		rgMedia: g,
		requestNextPage: I,
		cTotal: S,
		bLoadingInitialData: h,
		bFetchingNextPage: isFetchingNextPage,
		bHasNextPage: B,
	};
}
export function Re() {
	const e = (() => {
		const e = z(
			useCallback((e) => {
				let t = new Map();
				e.rgOrder.forEach((r) => {
					t.set(e.screenshots[r].strGameID, e.screenshots[r].strShortcutName);
				});
				return t;
			}, []),
		);
		const t = U(
			sF,
			50,
			useCallback((e) => {
				let t = new Map();
				if (e && e.pages.length > 0) {
					e.pages[0].rgApps.forEach((e) => {
						if (e.appid) {
							const r = bY(e.appid);
							if (!t.get(r)) {
								t.set(r, "");
							}
						} else if (e.shortcutid) {
							const r = a.tw.allApps.find(
								(t) => lY(t.display_name, e.name) == 0,
							);
							if (r) {
								t.set(r.GetGameID(), e.name);
								const n = new C.VS(r.GetGameID());
								w.y.SetShortcutOverride(n.GetInternalAppID(), e.shortcutid);
								w.y.SetShortcutDisplayName(r.GetGameID(), e.name);
							} else {
								const r = gX(e.shortcutid);
								t.set(r, e.name);
								w.y.SetShortcutDisplayName(r, e.name);
							}
						}
					});
				}
				return t;
			}, []),
		);
		const e_data = e.data;
		const t_data = t.data;
		return useMemo(() => {
			const e = new Map();
			e_data?.forEach((t, r) => {
				if (Array.from(e.values()).find((e) => e == t) == null) {
					e.set(r, t);
				}
			});
			t_data?.forEach((t, r) => {
				if (Array.from(e.values()).find((e) => e == t) == null) {
					e.set(r, t);
				}
			});
			return e;
		}, [e_data, t_data]);
	})();
	const t = (() => {
		const { rgClips } = H();
		return useMemo(() => {
			const t = new Map();
			rgClips.forEach((e) => t.set(e.summary.game_id, ""));
			return t;
		}, [rgClips]);
	})();
	const r = (() => {
		const { rgRecordings } = j();
		return useMemo(() => {
			const t = new Map();
			rgRecordings.forEach((e) => t.set(e.summary.game_id, ""));
			return t;
		}, [rgRecordings]);
	})();
	return useMemo(() => new Map([...e, ...t, ...r]), [e, t, r]);
}
function H(e = sF) {
	const { listSource, mediaType, uploadStatus } = e;
	const i = NN(listSource);
	let { bLoading, rgClipHandles } = Km(i);
	if (listSource.type === "phase") {
		rgClipHandles = listSource.phase.clip_ids || [];
	}
	return useMemo(() => {
		if (mediaType !== "all" && mediaType !== "clip") {
			return {
				rgClips: [],
				bLoading: false,
			};
		}
		if (uploadStatus !== "all" && uploadStatus !== "notuploaded") {
			return {
				rgClips: [],
				bLoading: false,
			};
		}
		let e = rgClipHandles.map((e) => ({
			id: e,
			type: "clip",
			summary: XA(e),
		}));
		e = e.filter((e) => !e.summary.temporary);
		e.sort((e, t) => q(t) - q(e));
		return {
			bLoading: bLoading,
			rgClips: e,
		};
	}, [bLoading, rgClipHandles, mediaType, uploadStatus]);
}
function j(e = sF) {
	const { bLoading, rgApps } = z_1();
	const { listSource, mediaType, uploadStatus } = e;
	const s = NN(listSource);
	return {
		rgRecordings: useMemo(() => {
			const e = [];
			if (
				(mediaType === "all" || mediaType === "recording") &&
				(uploadStatus === "all" || uploadStatus === "notuploaded")
			) {
				rgApps.forEach((t) => {
					const r = !s || s === t.game_id;
					const n =
						((!t.recording_type || t.recording_type === 1) &&
							t.video_duration_seconds > 0) ||
						t.recording_type === 4 ||
						t.recording_type === 3 ||
						t.recording_type === 2;
					if (r && n) {
						e.push({
							type: "recording",
							id: t.game_id,
							summary: t,
						});
					}
				});
				e.sort((e, t) => q(t) - q(e));
			}
			return e;
		}, [rgApps, s, mediaType, uploadStatus]),
		bLoading: bLoading,
	};
}
function q(e) {
	switch (e.type) {
		case "screenshot": {
			return e.rtCreated;
		}
		case "clip": {
			if (e.summary?.date_clipped) {
				return (
					e.summary?.date_clipped + parseInt(e.summary?.duration_ms) / 1000
				);
			} else {
				return e.summary?.date_recorded;
			}
		}
		case "recording": {
			return e.summary.most_recent_start_time;
		}
		default: {
			console.error(`Unknown media type "${e.type}"`);
			return 0;
		}
	}
}
export function b4() {
	const e = jE();
	return n_1({
		mutationFn: async (e) => {
			const { screenshot, strCaption } = e;
			if (screenshot.bUploaded || !screenshot.local) {
				console.warn(
					"Attempt to edit caption on a local screenshot that has already been uploaded!",
				);
				return false;
			} else {
				return SteamClient.Apps.SetLocalScreenshotCaption(
					screenshot.local.strGameID,
					screenshot.local.hHandle,
					strCaption || "",
				);
			}
		},
		onMutate: ({ screenshot, strCaption }) =>
			ee(e, screenshot.id, {
				strCaption: strCaption,
			}),
		onError: (e, t, r) => r(),
	});
}
export function PM() {
	const e = jE();
	return n_1({
		mutationFn: async (e) => {
			const { screenshot, eVisibility } = e;
			const n = s$(eVisibility);
			if (screenshot.bUploaded || !screenshot.local) {
				console.warn(
					"Attempt to edit visibility on a local screenshot that has already been uploaded!",
				);
				return false;
			} else {
				return SteamClient.Apps.SetLocalScreenshotPrivacy(
					screenshot.local.strGameID,
					screenshot.local.hHandle,
					n,
				);
			}
		},
		onMutate: ({ screenshot, eVisibility }) =>
			ee(e, screenshot.id, {
				ePrivacy: s$(eVisibility),
			}),
		onError: (e, t, r) => r(),
	});
}
export function TW() {
	const e = jE();
	return n_1({
		mutationFn: async (e) => {
			const { screenshot, bSpoilers } = e;
			if (screenshot.bUploaded || !screenshot.local) {
				console.warn(
					"Attempt to edit visibility on a local screenshot that has already been uploaded!",
				);
				return false;
			} else {
				return SteamClient.Apps.SetLocalScreenshotSpoiler(
					screenshot.local.strGameID,
					screenshot.local.hHandle,
					bSpoilers,
				);
			}
		},
		onMutate: ({ screenshot, bSpoilers }) =>
			ee(e, screenshot.id, {
				bSpoilers: bSpoilers,
			}),
		onError: (e, t, r) => r(),
	});
}
export function Ab() {
	const e = jE();
	const t = KV();
	return n_1({
		mutationFn: async (e) => {
			const { screenshots, location } = e;
			const s = {
				rgRemote: [],
				rgLocal: [],
			};
			if (location !== "local") {
				s.rgRemote = await (async (e, t) => {
					const r = [];
					for (const a of t) {
						const t = a.remote?.publishedfileid;
						if (!t) {
							continue;
						}
						const s = n.w.Init(i.qH);
						s.Body().set_publishedfileid(t);
						const o = await i.a5.Delete(e, s);
						if (!o.BSuccess()) {
							console.error(
								`Failed to delete remote screenshot with result ${o.GetEResult()}`,
							);
							r.push(a);
						}
					}
					return r;
				})(t, screenshots);
			}
			if (location !== "remote") {
				s.rgLocal = await (async (e) => {
					const t = {};
					for (const r of e) {
						if (typeof r.local?.hHandle == "number") {
							t[r.strGameID] ||= [];
							t[r.strGameID].push(r);
						}
					}
					const r = Object.keys(t).map((e) => ({
						gameID: e,
						rgHandles: t[e].map((e) => e.local.hHandle),
					}));
					const n = await SteamClient.Screenshots.DeleteLocalScreenshots(r);
					if (n.bSuccess) {
						return [];
					}
					const i = [];
					for (const e of n.rgFailedRequestIndices) {
						i.push(...t[r[e].gameID]);
					}
					console.error(
						`Failed to delete ${i.length} of ${e.length} local screenshots`,
					);
					return i;
				})(screenshots);
			}
			const o = {
				local: {},
				remote: {},
			};
			for (const e of screenshots) {
				o.local[e.id] = !s.rgLocal.includes(e);
				o.remote[e.id] = !s.rgRemote.includes(e);
			}
			return o;
		},
		onSuccess: (t, { screenshots, location }) => {
			re(e, (e) => {
				const i = {
					...e,
				};
				if (location !== "remote") {
					i.local = {
						...i.local,
					};
					for (const e of screenshots) {
						if (t.local[e.id]) {
							delete i.local[e.id];
						}
					}
				}
				if (location !== "local") {
					i.remote = {
						...i.remote,
					};
					for (const e of screenshots) {
						if (t.remote[e.id]) {
							delete i.remote[e.id];
						}
					}
				}
				return i;
			});
			if (location !== "remote") {
				e.setQueryData(L, (e) => {
					const n = {
						...e,
						screenshots: {
							...e.screenshots,
						},
						rgOrder: e.rgOrder.filter((e) => !t.local[e]),
					};
					for (const e of screenshots) {
						if (t.local[e.id]) {
							delete n.screenshots[e.id];
						}
					}
					return n;
				});
			}
			if (location !== "local") {
				e.setQueriesData(
					{
						queryKey: ["screenshots", "remote"],
					},
					(e) => {
						if (
							e &&
							e.pages &&
							e.pages.length &&
							e.pages[0].rgOrder &&
							e.pages[0].screenshots
						) {
							const n = e;
							let i = {
								...n,
							};
							for (const e of screenshots) {
								if (!t.remote[e.id]) {
									continue;
								}
								const r = n.pages.findIndex((t) => !!t.screenshots[e.id]);
								if (r >= 0) {
									i = {
										...n,
										pages: n.pages.map((t, n) => {
											const i = {
												...t,
											};
											i.cTotal--;
											if (n === r) {
												i.rgOrder = i.rgOrder.filter((t) => t !== e.id);
												i.screenshots = {
													...i.screenshots,
													[e.id]: undefined,
												};
											}
											return i;
										}),
									};
								}
							}
							return i;
						}
						return e;
					},
				);
			}
		},
	});
}
export function jh() {
	const e = jE();
	return n_1({
		mutationFn: async (e) => {
			const { screenshot, eVisibility } = e;
			if (screenshot.bUploaded) {
				console.error("Attempt to upload an already uploaded screenshot!");
				return false;
			}
			const n = s$(eVisibility);
			const i = await SteamClient.Screenshots.UploadLocalScreenshot(
				screenshot.strGameID,
				screenshot.local?.hHandle,
				n,
			);
			y.Tu.DoScreenshotNotification(
				screenshot.id,
				i
					? "#MediaPage_Upload_Notification_Success"
					: "#MediaPage_Upload_Notification_Failure",
			);
			return i;
		},
		onSuccess: (t, { screenshot }) => {
			if (t) {
				SteamClient.Screenshots.GetLocalScreenshotByHandle(
					screenshot.strGameID,
					screenshot.local.hHandle,
				).then((t) => {
					const n = Bo(t);
					re(e, (e) => ({
						...e,

						modifiedIDs: {
							...e.modifiedIDs,
							[screenshot.id]: n.id,
						},

						local: {
							...e.local,
							[n.id]: n,
						},
					}));
					te(e, n, false);
				});
				e.invalidateQueries({
					queryKey: ["screenshots", "remote"],
					predicate: (e) => {
						if (Array.isArray(e.queryKey) && e.queryKey.length >= 3) {
							const t = e.queryKey[2];
							if (t && typeof t == "object" && "listSource" in t) {
								const t_listSource = t.listSource;
								if (t_listSource && typeof t_listSource == "object") {
									return (
										t_listSource.type === "recents" ||
										NN(t_listSource) === screenshot.strGameID
									);
								}
							}
						}
						return false;
					},
				});
			}
		},
	});
}
export function tS(e) {
	return I_1({
		queryKey: ["screenshots", "uploaddetails", e.id],
		queryFn: () =>
			SteamClient.Apps.GetDetailsForScreenshotUpload(
				e.strGameID,
				e.local?.hHandle,
			),
		staleTime: Infinity,
	});
}
export function bj(e) {
	return I_1({
		queryKey: ["screenshots", "uploaddetails", e.map(({ id }) => id)],
		queryFn: () =>
			(async (e) => {
				AssertMsg(
					e?.length,
					"LoadMultipleScreenshotUploadDetails expected at least one screenshot to operate on",
				);
				if (!e.length) {
					return null;
				}
				const t = e.reduce((e, t) => {
					const t_strGameID = t.strGameID;
					e[r] ||= [];
					e[r].push(t.local?.hHandle);
					return e;
				}, {});
				const r = await Promise.all(
					Object.keys(t).map((e) =>
						SteamClient.Apps.GetDetailsForScreenshotUploads(e, t[e]),
					),
				);
				const { strCloudAvailable, strCloudTotal, unSizeOnDisk } = r.reduce(
					(e, t) => ({
						...e,
						unSizeOnDisk: e.unSizeOnDisk + t.unSizeOnDisk,
					}),
				);
				return {
					strCloudAvailable: strCloudAvailable,
					strCloudTotal: strCloudTotal,
					strSizeOnDisk: dm(unSizeOnDisk),
				};
			})(e),
		staleTime: Infinity,
	});
}
function ee(e, t, r, n = {}) {
	const i = e.getQueryData(L).screenshots[t];
	const a = {
		...i,
		...n,
		local: {
			...i.local,
			...r,
		},
	};
	te(e, a, false);
	return () => te(e, i, false);
}
function te(e, t, r) {
	re(e, (e) => ({
		...(e || {
			remote: {},
			modifiedIDs: {},
		}),

		local: {
			...e?.local,
			[t.id]: t,
		},
	}));
	e.setQueryData(L, (e) => {
		const n = {
			...(e || {
				rgOrder: [],
			}),
			screenshots: {
				...e?.screenshots,
				[t.id]: t,
			},
		};
		if (r) {
			n.rgOrder.unshift(t.id);
		} else {
			const e = k(t.local);
			if (e !== t.id) {
				n.rgOrder.forEach((r, i) => {
					if (r === e) {
						n.rgOrder[i] = t.id;
					}
				});
			}
		}
		return n;
	});
}
function re(e, t) {
	e.setQueryDefaults(F, {
		gcTime: Infinity,
		staleTime: Infinity,
		structuralSharing: false,
	});
	e.setQueryData(F, t);
}
export function ZQ(e, t) {
	return z((r) =>
		t.map((t) => {
			const n = k({
				strGameID: e,
				hHandle: t,
			});
			return r.screenshots[n];
		}),
	);
}
export function NN(e) {
	switch (e.type) {
		case "app": {
			return e.gameid;
		}
		case "phase": {
			return e.phase.game_id;
		}
		default: {
			return null;
		}
	}
}
