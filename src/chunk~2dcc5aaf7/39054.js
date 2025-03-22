var n = require(/*webcrack:missing*/ "./61416.js");
var i = require(/*webcrack:missing*/ "./75144.js");
var _a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./34043.js");
var o = require("./20414.js");
var l = require("./3963.js");
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require(/*webcrack:missing*/ "./41180.js");
var u = require("./36141.js");
const d = 5;
const A = 10;
const p = "favoriteguides";
const g = "popularguides";
const h = "guidedetails";
const C = "guidesubsections";
const _ = "publishedfiledetailsforbbcode";
const f = "guidefavorite";
const b = "guidevotestatus";
function y(e) {
	return `${p}_${e}`;
}
function S(e) {
	return `${h}_${e}`;
}
function w(e) {
	return `${C}_${e}`;
}
function B(e) {
	return `${f}_${e}`;
}
function v(e) {
	return `${b}_${e}`;
}
function I(e) {
	return `${_}_${e}`;
}
export async function Jm(e, t, r) {
	let n;
	if (r) {
		let r = _a.w.Init(s.d5);
		r.Body().set_publishedfileid(t);
		r.Body().set_list_type(2);
		r.Body().set_appid(e);
		n = await s.a5.Subscribe(l.Nb.CMInterface.GetServiceTransport(), r);
	} else {
		let r = _a.w.Init(s.Mg);
		r.Body().set_publishedfileid(t);
		r.Body().set_list_type(2);
		r.Body().set_appid(e);
		n = await s.a5.Unsubscribe(l.Nb.CMInterface.GetServiceTransport(), r);
	}
	if (n.GetEResult() == 1) {
		i.L.setQueryData([B(t)], r);
		i.L.invalidateQueries({
			queryKey: [y(e)],
		});
	}
}
export function BP(e) {
	i.L.invalidateQueries({
		queryKey: [y(e)],
	});
}
export async function GK(e, t) {
	let r = new Map();
	r.set(e, {
		vote: t,
		bReported: false,
	});
	i.L.setQueryData([v(e)], r);
	let n = await (0, o.GU)(e, t);
	if (n == 1) {
		i.L.invalidateQueries({
			queryKey: [v(e)],
		});
		return n;
	}
	throw `Failed VoteOnGuide { publishedfileid: ${e} }`;
}
export function zg(e, t, r = d) {
	return (0, n.I)({
		queryKey: [y(e), t, r],
		queryFn: async () =>
			await (async function (e, t, r) {
				let n = {
					page: t,
					totalpages: 0,
					publishedfiledetails: [],
				};
				if (e == 0) {
					return n;
				}
				let i = _a.w.Init(s.NZ);
				i.Body().set_steamid(l.Nb.CMInterface.steamid.ConvertTo64BitString());
				i.Body().set_type("myfavorites");
				i.Body().set_page(t);
				i.Body().set_numperpage(r);
				i.Body().set_sortmethod("subscriptiondate");
				i.Body().set_privacy(30);
				i.Body().set_appid(e);
				i.Body().set_filetype(11);
				i.Body().set_strip_description_bbcode(true);
				i.Body().set_return_vote_data(true);
				let o = await s.a5.GetUserFiles(
					l.Nb.CMInterface.GetServiceTransport(),
					i,
				);
				if (o.GetEResult() == 1) {
					const e = o.Body().toObject();
					n.publishedfiledetails = e.publishedfiledetails || [];
					n.totalpages = Math.ceil(e.total / r);
					return n;
				}
				throw `Failed FetchFavoriteGuides { appid: ${e}, page: ${t} }`;
			})(e, t, r),
		staleTime: m.Kp.PerMinute * 10 * 1000,
	});
}
export function a(e, t, r = A) {
	let i = (0, u.l)();
	return (0, n.I)({
		queryKey: [((o = e), `${g}_${o}`), t, r, i],
		queryFn: async () =>
			await (async function (e, t, r, n) {
				let i = {
					page: t,
					totalpages: 0,
					publishedfiledetails: [],
				};
				if (e == 0) {
					return i;
				}
				let o = _a.w.Init(s.WJ);
				o.Body().set_filetype(11);
				o.Body().set_appid(e);
				o.Body().set_query_type(3);
				o.Body().set_days(7);
				o.Body().set_page(t);
				o.Body().set_numperpage(r);
				o.Body().set_return_details(true);
				o.Body().set_return_short_description(true);
				o.Body().set_strip_description_bbcode(true);
				o.Body().set_requiredtags([c.TS.LANGUAGE]);
				o.Body().set_return_vote_data(true);
				o.Body().set_cache_max_age_seconds(m.Kp.PerDay);
				o.Body().set_excluded_content_descriptors(n);
				let u = await s.a5.QueryFiles(
					l.Nb.CMInterface.GetServiceTransport(),
					o,
				);
				if (u.GetEResult() == 1) {
					const e = u.Body().toObject();
					i.publishedfiledetails = e.publishedfiledetails || [];
					i.totalpages = Math.ceil(e.total / r);
					return i;
				}
				throw `Failed FetchPopularGuides { appid: ${e}, page: ${t} }`;
			})(e, t, r, i),
		staleTime: m.Kp.PerDay * 1000,
	});
	var o;
}
export function CD(e, t) {
	return (0, n.I)({
		queryKey: [S(t)],
		queryFn: async () =>
			await (async function (e, t) {
				let r = _a.w.Init(s.TA);
				r.Body().set_publishedfileids([t]);
				r.Body().set_appid(e);
				r.Body().set_includeadditionalpreviews(true);
				r.Body().set_includevotes(true);
				let n = await s.a5.GetDetails(
					l.Nb.CMInterface.GetServiceTransport(),
					r,
				);
				if (n.GetEResult() == 1) {
					const e = n.Body().toObject();
					if (e.publishedfiledetails.length > 0) {
						return e.publishedfiledetails[0];
					}
				}
				throw `Failed FetchGuideDetails { publishedfileid: ${t} }`;
			})(e, t),
		staleTime: m.Kp.PerHour * 1000,
	});
}
export function Gr(e) {
	return (0, n.I)({
		queryKey: [w(e)],
		queryFn: async () =>
			await (async function (e) {
				let t = _a.w.Init(s.Gl);
				t.Body().set_publishedfileid(e);
				let r = await s.a5.GetSubSectionData(
					l.Nb.CMInterface.GetServiceTransport(),
					t,
				);
				if (r.GetEResult() == 1) {
					const e = r.Body().toObject();
					if (e.sub_sections) {
						e.sub_sections.sort((e, t) => e.sort_order - t.sort_order);
						return e.sub_sections;
					}
				}
				throw `Failed FetchGuideSubSections { publishedfileid: ${e} }`;
			})(e),
		staleTime: m.Kp.PerHour * 1000,
	});
}
export function cH(e) {
	return (0, n.I)({
		queryKey: [I(e)],
		queryFn: async () =>
			await (async function (e) {
				if (!e) {
					return null;
				}
				let t = _a.w.Init(s.TA);
				t.Body().set_publishedfileids([e]);
				t.Body().set_short_description(true);
				t.Body().set_strip_description_bbcode(true);
				let r = await s.a5.GetDetails(
					l.Nb.CMInterface.GetServiceTransport(),
					t,
				);
				if (r.GetEResult() == 1) {
					const e = r.Body().toObject();
					if (e.publishedfiledetails.length > 0) {
						return e.publishedfiledetails[0];
					}
				}
				throw `Failed FetchPublishedFileDetailsForBBCode { publishedfileid: ${e} }`;
			})(e),
		staleTime: m.Kp.PerHour * 1000,
	});
}
export function wX(e, t) {
	return (0, n.I)({
		queryKey: [B(t)],
		queryFn: async () =>
			await (async function (e, t) {
				let r = _a.w.Init(s.oA);
				r.Body().set_appid(e);
				r.Body().set_publishedfileids([t]);
				r.Body().set_listtype(2);
				r.Body().set_workshopfiletype(9);
				const n = await s.a5.AreFilesInSubscriptionList(
					l.Nb.CMInterface.GetServiceTransport(),
					r,
				);
				if (n && n.GetEResult() == 1) {
					const e = n.Body().toObject();
					return e.files.length > 0 && e.files[0].inlist;
				}
				throw `Failed FetchGuideIsFavorite { publishedfileid: ${t} }`;
			})(e, t),
		staleTime: m.Kp.PerMinute * 1000,
	});
}
export function I$(e) {
	return (0, n.I)({
		queryKey: [v(e)],
		queryFn: async () => await (0, o.dK)([e]),
		staleTime: m.Kp.PerMinute * 1000,
	});
}
