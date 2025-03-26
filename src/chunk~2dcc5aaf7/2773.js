var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./44926.js");
var a = require(/*webcrack:missing*/ "./30329.js");
var s = require(/*webcrack:missing*/ "./3715.js");
var o = require(/*webcrack:missing*/ "./61416.js");
import { IsDateSameDay } from "../../actual_src/utils/time.js";
import { LocalizationManager } from "../../actual_src/utils/localization.js";
var m = require("./25633.js");
const u = 20;
const d = "PhaseList";
export function nY(e = {}) {
	(function () {
		const e = (0, s.jE)();
		(0, n.useEffect)(() => {
			const t = () => {
				e.invalidateQueries({
					queryKey: [d],
				});
				return 1;
			};
			const r = i.xM.RegisterForNotifyPhaseListChanged(t);
			const n = i.xM.RegisterForNotifyClipCreated(t);
			const a = i.xM.RegisterForNotifyClipDeleted(t);
			return () => {
				r.unregister();
				n.unregister();
				a.unregister();
			};
		}, [e]);
	})();
	const t = (function (e) {
		const t = e.tags || {};
		return {
			filter_gameid: e.gameid,
			filter_search_string: e.strSearch || undefined,
			filter_tags: Object.keys(t).map((e) => ({
				group: e,
				name: t[e],
			})),
			filter_phase_id: e.phaseID,
		};
	})(e);
	return (0, a.q)({
		queryKey: [d, "Query", t],
		queryFn: async (r) => {
			const n = (
				await i.xM.QueryPhases({
					count: u,
					page: r.pageParam,
					...t,
				})
			)
				.Body()
				.toObject();
			if (e.strSearch && e.strSearch.trim()) {
				const t = e.strSearch.toLowerCase();
				for (const e of n.phases) {
					for (const r of e.tags) {
						r.bFilterMatch = r.name.toLowerCase().indexOf(t) > -1;
					}
				}
			}
			return {
				...n,
				nextPage: n.phases.length === u ? r.pageParam + 1 : null,
			};
		},
		initialPageParam: 0,
		getNextPageParam: (e) => e.nextPage,
	});
}
export function sn(e) {
	return (0, o.I)({
		queryKey: [d, "GetTags", e],
		queryFn: async () => {
			const t = (
				await i.xM.GetTags({
					game_id: e,
				})
			)
				.Body()
				.toObject().tags;
			const { rgIconGroups: r } = g(t);
			return r.sort((e, t) => t[0].priority - e[0].priority);
		},
	});
}
function g(e) {
	const t = {};
	for (const r of e) {
		t[r.group] ||= [];
		t[r.group].push(r);
	}
	const r = [];
	const n = [];
	for (const e of Object.values(t)) {
		const t = e.some(({ icon: e }) => !!e);
		e.sort((e, t) => t.priority - e.priority);
		if (t) {
			r.push(e);
		} else {
			n.push(...e);
		}
	}
	return {
		rgIconGroups: r,
		rgTextOnlyTags: n,
	};
}
export function g7(e, t) {
	return (0, n.useMemo)(
		() =>
			(function (e = [], t = []) {
				const { rgIconGroups: r, rgTextOnlyTags: n } = g(e);
				const i = [
					...t.map((e) => ({
						type: "attribute",
						attribute: e,
					})),
					...r.map((e) => ({
						type: "tags",
						tags: e,
					})),
				];
				const a = (e) =>
					e.type === "attribute" ? e.attribute.priority : e.tags[0].priority;
				i.sort((e, t) => a(t) - a(e));
				return {
					rgMetadata: i,
					rgDemoted: n,
				};
			})(e, t),
		[e, t],
	);
}
export function $P(e) {
	return Hy(e.date_recorded);
}
export function Hy(e) {
	const t = new Date();
	const r = new Date(e * 1000);
	const n = t.getFullYear() == r.getFullYear();
	let i = "";
	if (!IsDateSameDay(t, r)) {
		const e = {
			day: "numeric",
			month: "short",
			year: n ? undefined : "numeric",
		};
		i = r.toLocaleDateString(LocalizationManager.GetPreferredLocales(), e);
	}
	const a = r.toLocaleTimeString(LocalizationManager.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
	});
	return {
		strDate: i,
		strTime: a,
		strDateTime: i ? `${i} ${a}` : a,
	};
}
export function DV(e, t, r, n) {
	const i = r + 1;
	const a = i + n - 2;
	return (0, m.B1)(
		e,
		undefined,
		undefined,
		t,
		i,
		t,
		a,
		a - i,
		7,
		{
			latestRangeMethod: 7,
			originalRangeMethod: 7,
			relativeMS: 0,
		},
		{
			latestRangeMethod: 7,
			originalRangeMethod: 7,
			relativeMS: 0,
		},
	).create(false);
}
