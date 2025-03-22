var n = require(/*webcrack:missing*/ "./12176.js");
var i = require("./34043.js");
var a = require("./96593.js");
var s = require("./78721.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./19106.js");
var c = require(/*webcrack:missing*/ "./3715.js");
var m = require(/*webcrack:missing*/ "./61416.js");
var u = require(/*webcrack:missing*/ "./30329.js");
var d = require(/*webcrack:missing*/ "./26667.js");
var A = require(/*webcrack:missing*/ "./24295.js");
var p = require(/*webcrack:missing*/ "./46382.js");
var g = require(/*webcrack:missing*/ "./83599.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require("./67429.js");
var _ = require("./91720.js");
var f = require(/*webcrack:missing*/ "./85688.js");
var b = require("./34428.js");
var y = require("./60917.js");
var S = require("./51095.js");
var w = require("./65528.js");
var B = require(/*webcrack:missing*/ "./75144.js");
function v(e) {
	return e.startsWith("remote_");
}
function I(e) {
	if (v(e)) {
		const { strUGCHandle: t } = (function (e) {
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
		return t;
	}
	{
		const { hHandle: t, gameid: r } = (function (e) {
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
		return `${r}_${t}`;
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
		strUrl: (0, s.fu)(e.strUrl),
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
	const r = e.getQueryCache().get((0, l.EN)(F))?.state.data;
	if (!r || !t) {
		return null;
	}
	var n;
	if ((n = t).startsWith("remote_") || n.startsWith("local_")) {
		t = I(t);
	}
	const i = r.modifiedIDs[t];
	return N(r.local[i] || r.local[t], r.remote[i] || r.remote[t]);
}
export function FD(e) {
	const t = (0, c.jE)();
	return z((0, o.useCallback)((r) => e8(t, (r.screenshots[e], e)), [t, e]));
}
export function Kr(e) {
	const t = Bo(e);
	te(B.L, t, true);
	return t.id;
}
const L = ["screenshots", "local"];
function z(e) {
	const t = (0, c.jE)();
	return (0, m.I)({
		queryKey: L,
		queryFn: () =>
			(async function (e) {
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
						e.strUrl = (0, s.fu)(e.strUrl);
						const r = Bo(e);
						const n = r.id;
						if (r.strShortcutName) {
							w.y.SetShortcutDisplayName(r.strGameID, r.strShortcutName);
						}
						t.rgOrder.push(n);
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
		const t = a.tw.allApps.find(
			(t) => (0, S.lY)(t.display_name, e.shortcutname) == 0,
		);
		if (t) {
			r = t.GetGameID();
			const n = new C.VS(r);
			w.y.SetShortcutOverride(n.GetInternalAppID(), e.consumer_shortcutid);
		}
	}
	const n = r ?? (0, C.gX)(e.consumer_shortcutid);
	if (t) {
		return n;
	} else {
		return e.consumer_appid?.toString();
	}
}
function U(e, t, r) {
	const a = (0, p.KV)();
	const s = (0, A.LH)();
	const o = (0, c.jE)();
	return (0, u.q)({
		queryKey: ["screenshots", "remote", e],
		queryFn: ({ pageParam: r = 1 }) =>
			(async function (e, t, r, a, s, o) {
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
				if ((0, h.Y2)()) {
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
				throw `Failed FetchScreenshotRemoteHandles { filter: "${JSON.stringify(a)}", nPage: ${o} }`;
			})(o, a, s, e, t, r),
		getNextPageParam: (e, t) => (t?.length || 0) + 1,
		initialPageParam: 1,
		select: r,
	});
}
export function MZ(e, t = 50) {
	const r = (function (e) {
		const { uploadStatus: t, mediaType: r, listSource: n } = e;
		return z(
			(0, o.useCallback)(
				(e) => {
					const i = [];
					const a = {};
					const s = NN(n);
					if (!e || (r !== "all" && r != "screenshot")) {
						return {
							rgOrder: i,
							screenshots: a,
						};
					}
					if (n.type === "phase") {
						const t = n.phase.screenshots || [];
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
								(t === "all" ||
									(t === "uploaded" && !!n.local.bUploaded) ||
									(t === "notuploaded" && !n.local.bUploaded))
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
				[n, t, r],
			),
		);
	})(e);
	const n = U(e, t);
	const { rgClips: i, bLoading: a } = H(e);
	const { rgRecordings: s, bLoading: l } = j(e);
	const [c, m] = (0, o.useState)(1);
	const u = r.data;
	const d = n.data;
	const A = n.fetchNextPage;
	const p = c * t;
	const g = (0, o.useMemo)(
		() =>
			(function (e, t, r, n, i) {
				const a = [];
				const s = {};
				const o = {};
				if (t) {
					for (let r = 0; r < t.pages.length && a.length < i; r++) {
						const n = t.pages[r];
						for (let t = 0; t < n.rgOrder.length; t++) {
							const r = n.rgOrder[t];
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
						let e = a[c];
						while (o[e]) {
							c++;
							if (!(c < a.length)) {
								e = null;
								break;
							}
							e = a[c];
						}
						if (e) {
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
						case "clip":
							m++;
							break;
						case "recording":
							u++;
							break;
						case "screenshot":
							if (i.local) {
								l++;
							} else {
								c++;
							}
					}
				}
				return d;
			})(u, d, i, s, p),
		[u, d, i, s, p],
	);
	const h = r.isLoading || n.isLoading || a || l;
	const C = n.isFetchingNextPage;
	const _ = !n.data || n.data.pages[n.data.pages.length - 1].rgOrder.length > 0;
	const f = (0, o.useMemo)(
		() =>
			(u?.rgOrder || []).reduce(
				(e, t) => e + (u.screenshots[t].bUploaded ? 0 : 1),
				0,
			),
		[u],
	);
	const b = u ? u.rgOrder.length : 0;
	const y = d ? d.pages[d.pages.length - 1].cTotal : 0;
	const S = (y > 0 ? f : b) + y + i.length + s.length;
	const w = Math.max(S, g.length);
	const B = p < w;
	const v = _ && (!C || !h);
	const I = (0, o.useCallback)(() => {
		if (v) {
			A();
		}
		if (B) {
			m((e) => e + 1);
		}
	}, [v, A, B]);
	(0, o.useEffect)(() => {
		if (!d) {
			return;
		}
		const e = d.pages.length < c;
		const t = d.pages[d.pages.length - 1].rgOrder.length > 0;
		if (e && t && !C) {
			A();
		}
	}, [d, c, C, A]);
	return {
		rgMedia: g,
		requestNextPage: I,
		cTotal: S,
		bLoadingInitialData: h,
		bFetchingNextPage: C,
		bHasNextPage: B,
	};
}
export function Re() {
	const e = (function () {
		const e = z(
			(0, o.useCallback)((e) => {
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
			(0, o.useCallback)((e) => {
				let t = new Map();
				if (e && e.pages.length > 0) {
					e.pages[0].rgApps.forEach((e) => {
						if (e.appid) {
							const r = (0, C.bY)(e.appid);
							if (!t.get(r)) {
								t.set(r, "");
							}
						} else if (e.shortcutid) {
							const r = a.tw.allApps.find(
								(t) => (0, S.lY)(t.display_name, e.name) == 0,
							);
							if (r) {
								t.set(r.GetGameID(), e.name);
								const n = new C.VS(r.GetGameID());
								w.y.SetShortcutOverride(n.GetInternalAppID(), e.shortcutid);
								w.y.SetShortcutDisplayName(r.GetGameID(), e.name);
							} else {
								const r = (0, C.gX)(e.shortcutid);
								t.set(r, e.name);
								w.y.SetShortcutDisplayName(r, e.name);
							}
						}
					});
				}
				return t;
			}, []),
		);
		const r = e.data;
		const n = t.data;
		return (0, o.useMemo)(() => {
			const e = new Map();
			r?.forEach((t, r) => {
				if (Array.from(e.values()).find((e) => e == t) == null) {
					e.set(r, t);
				}
			});
			n?.forEach((t, r) => {
				if (Array.from(e.values()).find((e) => e == t) == null) {
					e.set(r, t);
				}
			});
			return e;
		}, [r, n]);
	})();
	const t = (function () {
		const { rgClips: e } = H();
		return (0, o.useMemo)(() => {
			const t = new Map();
			e.forEach((e) => t.set(e.summary.game_id, ""));
			return t;
		}, [e]);
	})();
	const r = (function () {
		const { rgRecordings: e } = j();
		return (0, o.useMemo)(() => {
			const t = new Map();
			e.forEach((e) => t.set(e.summary.game_id, ""));
			return t;
		}, [e]);
	})();
	return (0, o.useMemo)(() => new Map([...e, ...t, ...r]), [e, t, r]);
}
function H(e = sF) {
	const { listSource: t, mediaType: r, uploadStatus: n } = e;
	const i = NN(t);
	let { bLoading: a, rgClipHandles: s } = (0, _.Km)(i);
	if (t.type === "phase") {
		s = t.phase.clip_ids || [];
	}
	return (0, o.useMemo)(() => {
		if (r !== "all" && r !== "clip") {
			return {
				rgClips: [],
				bLoading: false,
			};
		}
		if (n !== "all" && n !== "notuploaded") {
			return {
				rgClips: [],
				bLoading: false,
			};
		}
		let e = s.map((e) => ({
			id: e,
			type: "clip",
			summary: (0, _.XA)(e),
		}));
		e = e.filter((e) => !e.summary.temporary);
		e.sort((e, t) => q(t) - q(e));
		return {
			bLoading: a,
			rgClips: e,
		};
	}, [a, s, r, n]);
}
function j(e = sF) {
	const { bLoading: t, rgApps: r } = (0, _.z)();
	const { listSource: n, mediaType: i, uploadStatus: a } = e;
	const s = NN(n);
	return {
		rgRecordings: (0, o.useMemo)(() => {
			const e = [];
			if (
				(i === "all" || i === "recording") &&
				(a === "all" || a === "notuploaded")
			) {
				r.forEach((t) => {
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
		}, [r, s, i, a]),
		bLoading: t,
	};
}
function q(e) {
	switch (e.type) {
		case "screenshot":
			return e.rtCreated;
		case "clip":
			if (e.summary?.date_clipped) {
				return (
					e.summary?.date_clipped + parseInt(e.summary?.duration_ms) / 1000
				);
			} else {
				return e.summary?.date_recorded;
			}
		case "recording":
			return e.summary.most_recent_start_time;
		default:
			console.error(`Unknown media type "${e.type}"`);
			return 0;
	}
}
export function b4() {
	const e = (0, c.jE)();
	return (0, d.n)({
		mutationFn: async (e) => {
			const { screenshot: t, strCaption: r } = e;
			if (t.bUploaded || !t.local) {
				console.warn(
					"Attempt to edit caption on a local screenshot that has already been uploaded!",
				);
				return false;
			} else {
				return SteamClient.Apps.SetLocalScreenshotCaption(
					t.local.strGameID,
					t.local.hHandle,
					r || "",
				);
			}
		},
		onMutate: ({ screenshot: t, strCaption: r }) =>
			ee(e, t.id, {
				strCaption: r,
			}),
		onError: (e, t, r) => r(),
	});
}
export function PM() {
	const e = (0, c.jE)();
	return (0, d.n)({
		mutationFn: async (e) => {
			const { screenshot: t, eVisibility: r } = e;
			const n = (0, s.s$)(r);
			if (t.bUploaded || !t.local) {
				console.warn(
					"Attempt to edit visibility on a local screenshot that has already been uploaded!",
				);
				return false;
			} else {
				return SteamClient.Apps.SetLocalScreenshotPrivacy(
					t.local.strGameID,
					t.local.hHandle,
					n,
				);
			}
		},
		onMutate: ({ screenshot: t, eVisibility: r }) =>
			ee(e, t.id, {
				ePrivacy: (0, s.s$)(r),
			}),
		onError: (e, t, r) => r(),
	});
}
export function TW() {
	const e = (0, c.jE)();
	return (0, d.n)({
		mutationFn: async (e) => {
			const { screenshot: t, bSpoilers: r } = e;
			if (t.bUploaded || !t.local) {
				console.warn(
					"Attempt to edit visibility on a local screenshot that has already been uploaded!",
				);
				return false;
			} else {
				return SteamClient.Apps.SetLocalScreenshotSpoiler(
					t.local.strGameID,
					t.local.hHandle,
					r,
				);
			}
		},
		onMutate: ({ screenshot: t, bSpoilers: r }) =>
			ee(e, t.id, {
				bSpoilers: r,
			}),
		onError: (e, t, r) => r(),
	});
}
export function Ab() {
	const e = (0, c.jE)();
	const t = (0, p.KV)();
	return (0, d.n)({
		mutationFn: async (e) => {
			const { screenshots: r, location: a } = e;
			const s = {
				rgRemote: [],
				rgLocal: [],
			};
			if (a !== "local") {
				s.rgRemote = await (async function (e, t) {
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
				})(t, r);
			}
			if (a !== "remote") {
				s.rgLocal = await (async function (e) {
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
				})(r);
			}
			const o = {
				local: {},
				remote: {},
			};
			for (const e of r) {
				o.local[e.id] = !s.rgLocal.includes(e);
				o.remote[e.id] = !s.rgRemote.includes(e);
			}
			return o;
		},
		onSuccess: (t, { screenshots: r, location: n }) => {
			re(e, (e) => {
				const i = {
					...e,
				};
				if (n !== "remote") {
					i.local = {
						...i.local,
					};
					for (const e of r) {
						if (t.local[e.id]) {
							delete i.local[e.id];
						}
					}
				}
				if (n !== "local") {
					i.remote = {
						...i.remote,
					};
					for (const e of r) {
						if (t.remote[e.id]) {
							delete i.remote[e.id];
						}
					}
				}
				return i;
			});
			if (n !== "remote") {
				e.setQueryData(L, (e) => {
					const n = {
						...e,
						screenshots: {
							...e.screenshots,
						},
						rgOrder: e.rgOrder.filter((e) => !t.local[e]),
					};
					for (const e of r) {
						if (t.local[e.id]) {
							delete n.screenshots[e.id];
						}
					}
					return n;
				});
			}
			if (n !== "local") {
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
							for (const e of r) {
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
	const e = (0, c.jE)();
	return (0, d.n)({
		mutationFn: async (e) => {
			const { screenshot: t, eVisibility: r } = e;
			if (t.bUploaded) {
				console.error("Attempt to upload an already uploaded screenshot!");
				return false;
			}
			const n = (0, s.s$)(r);
			const i = await SteamClient.Screenshots.UploadLocalScreenshot(
				t.strGameID,
				t.local?.hHandle,
				n,
			);
			y.Tu.DoScreenshotNotification(
				t.id,
				i
					? "#MediaPage_Upload_Notification_Success"
					: "#MediaPage_Upload_Notification_Failure",
			);
			return i;
		},
		onSuccess: (t, { screenshot: r }) => {
			if (t) {
				SteamClient.Screenshots.GetLocalScreenshotByHandle(
					r.strGameID,
					r.local.hHandle,
				).then((t) => {
					const n = Bo(t);
					re(e, (e) => ({
						...e,
						modifiedIDs: {
							...e.modifiedIDs,
							[r.id]: n.id,
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
								const e = t.listSource;
								if (e && typeof e == "object") {
									return e.type === "recents" || NN(e) === r.strGameID;
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
	return (0, m.I)({
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
	return (0, m.I)({
		queryKey: ["screenshots", "uploaddetails", e.map(({ id: e }) => e)],
		queryFn: () =>
			(async function (e) {
				(0, f.w)(
					e?.length,
					"LoadMultipleScreenshotUploadDetails expected at least one screenshot to operate on",
				);
				if (!e.length) {
					return null;
				}
				const t = e.reduce((e, t) => {
					const r = t.strGameID;
					e[r] ||= [];
					e[r].push(t.local?.hHandle);
					return e;
				}, {});
				const r = await Promise.all(
					Object.keys(t).map((e) =>
						SteamClient.Apps.GetDetailsForScreenshotUploads(e, t[e]),
					),
				);
				const {
					strCloudAvailable: n,
					strCloudTotal: i,
					unSizeOnDisk: a,
				} = r.reduce((e, t) => ({
					...e,
					unSizeOnDisk: e.unSizeOnDisk + t.unSizeOnDisk,
				}));
				return {
					strCloudAvailable: n,
					strCloudTotal: i,
					strSizeOnDisk: (0, b.dm)(a),
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
		case "app":
			return e.gameid;
		case "phase":
			return e.phase.game_id;
		default:
			return null;
	}
}
