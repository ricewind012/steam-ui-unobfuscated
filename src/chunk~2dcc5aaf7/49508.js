var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
import {
	LocalizeTimeSince,
	qZ,
} from "../../actual_src/utils/localization/datetime.js";
var s = require("./96593.js");
var o = require(/*webcrack:missing*/ "./98995.js");
var l = require("./2773.js");
var c = require("./28220.js");
var m = require("./22588.js");
var u = require("./91720.js");
var d = require("./6967.js");
var A = require("./18869.js");
var p = require("./3499.js");
var g = require("./91486.js");
var h = require("./40848.js");
var C = require(/*webcrack:missing*/ "./99251.js");
import { Localize } from "../../actual_src/utils/localization.js";
var f = require("./86454.js");
var b = require("./35488.js");
var y = require(/*webcrack:missing*/ "./31084.js");
var S = require(/*webcrack:missing*/ "./88750.js");
var w = require("./60291.js");
var B = require(/*webcrack:missing*/ "./90095.js");
require("./44351.js");
var v = require("./32676.js");
var I = require("./661.js");
var E = require("./3874.js");
const M = "#1A9FFF";
const T = "#E4BE52";
export function UJ(e) {
	const { topPadding: t, filter: r } = e;
	const i = (0, l.nY)(r);
	const a = i.isLoading;
	const s = (function (e) {
		return !e.gameid && !e.phaseID && !e.strSearch && !e.tags;
	})(r);
	const o = i.data?.pages.length && i.data.pages[0].total_count > 0;
	const c = {
		paddingTop: `${t}px`,
	};
	if (o && i.hasNextPage) {
		const e = i.data.pages[i.data.pages.length - 1];
		c.minHeight = (e.total_count || 0) * 100 + "px";
	}
	return n.createElement(
		"div",
		{
			className: h.PhaseListContainer,
			style: {
				maxWidth: "100vw",
				"--stickyHeaderHeight": `${t}px`,
			},
		},
		n.createElement(
			"div",
			{
				className: h.PhaseList,
				style: c,
			},
			!a &&
				!o &&
				n.createElement(k, {
					isDefaultFilter: s,
				}),
			!a &&
				o &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(O, {
						filter: r,
						phases: i,
					}),
					i.isFetchingNextPage && n.createElement(oe, null),
					n.createElement(f.J, {
						trigger: "repeated",
						onVisibilityChange: (e) => {
							if (e && i.hasNextPage && !i.isFetching) {
								i.fetchNextPage();
							}
						},
					}),
				),
			a && n.createElement(oe, null),
		),
	);
}
function k(e) {
	const { isDefaultFilter: t } = e;
	const r = t ? "#PhaseList_AllContentFilteredOut" : "#PhaseList_NoResults";
	return n.createElement(
		"div",
		{
			className: h.NoContent,
		},
		(0, Localize)(r),
	);
}
function D(e) {
	const { tags: t, selectedTagName: r, onTagSelected: i, gameID: a } = e;
	const s = t.length > 4;
	let o = t;
	if (r) {
		const e = o.findIndex(({ name: e }) => r === e);
		if (e > -1 && e > (s ? 2 : 3)) {
			o = [o[e], ...o.filter((t, r) => r !== e)];
		}
	}
	if (s) {
		o = o.slice(0, 3);
	}
	return n.createElement(
		"div",
		{
			className: h.TagFilter,
		},
		n.createElement(
			"div",
			{
				className: h.GroupName,
			},
			t[0].group,
		),
		o.map((e) =>
			n.createElement(N, {
				tag: e,
				gameID: a,
				key: e.name,
				onTagSelected: i,
				selectedTagName: r,
			}),
		),
		s &&
			n.createElement(
				F,
				{
					onClick: (t) =>
						(0, y.lX)(
							n.createElement(G, {
								...e,
							}),
							t,
						),
					title: (0, Localize)("#PhaseList_FilterOverflowTooltip"),
				},
				n.createElement(b.Dots, {
					className: h.OverflowDots,
				}),
			),
	);
}
function N(e) {
	const { gameID: t, tag: r, onTagSelected: i, selectedTagName: a } = e;
	return n.createElement(
		F,
		{
			selected: r.name === a,
			key: r.name,
			title: r.name,
			onClick: () => i(r),
		},
		n.createElement(c.N, {
			gameID: t,
			icon: r.icon,
		}),
	);
}
function F(e) {
	const { selected: t, title: r, ...a } = e;
	return n.createElement(
		o.Gq,
		{
			toolTipContent: r,
		},
		n.createElement("div", {
			className: (0, i.A)(h.FilterOptionButton, t && h.Selected),
			...a,
		}),
	);
}
function G(e) {
	const { tags: t, selectedTagName: r, onTagSelected: i, gameID: a } = e;
	const s = (0, n.useContext)(S.P);
	const o = (e) => {
		s.instance.ForceHide();
		i(e);
	};
	return n.createElement(
		S.tz,
		null,
		n.createElement(
			"div",
			{
				className: h.OverflowGrid,
			},
			t.map((e) =>
				n.createElement(N, {
					tag: e,
					gameID: a,
					key: e.name,
					onTagSelected: o,
					selectedTagName: r,
				}),
			),
		),
	);
}
function O(e) {
	const { phases: t, filter: r } = e;
	const i = (function (e, t) {
		const r = false;
		return (0, n.useMemo)(() => {
			if (!e) {
				return [];
			}
			const t = [];
			let n = "";
			let i = "";
			for (const s of e.pages) {
				for (const e of s.phases) {
					if (r || !ne(e)) {
						if (e.game_id !== n) {
							const r = LocalizeTimeSince(Date.now() / 1000 - e.date_recorded);
							if (r !== i) {
								t.push({
									type: "date",
									strTimeSince: r,
								});
								i = r;
							}
							t.push({
								type: "game",
								gameid: e.game_id,
							});
							n = e.game_id;
						}
						t.push({
							type: "phase",
							phase: e,
						});
					}
				}
			}
			return t;
		}, [e, r]);
	})(t.data);
	if (t.isError) {
		return n.createElement("div", null, "Error... ", t.error.message);
	} else {
		return n.createElement(
			n.Fragment,
			null,
			i.map((e, t) =>
				n.createElement(P, {
					...e,
					key: `${t}_${e.type}`,
				}),
			),
		);
	}
}
function P(e) {
	switch (e.type) {
		case "phase":
			return n.createElement(z, {
				...e,
			});
		case "date":
			return n.createElement(
				"div",
				{
					className: h.DateHeader,
				},
				e.strTimeSince,
			);
		case "game":
			return n.createElement(L, {
				...e,
			});
	}
}
function L(e) {
	const { gameid: t } = e;
	const r = (0, s._R)(t);
	if (r) {
		return n.createElement(
			"div",
			{
				className: h.GameHeader,
			},
			n.createElement(g.z, {
				app: r,
				eAssetType: 4,
				className: h.Icon,
			}),
			r.display_name,
		);
	} else {
		return null;
	}
}
function z(e) {
	const { phase: t } = e;
	if (re(t)) {
		return n.createElement(x, {
			...e,
		});
	} else {
		return n.createElement(H, {
			...e,
		});
	}
}
function x(e) {
	const { phase: t } = e;
	const r = ne(t);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			V,
			{
				empty: r,
			},
			n.createElement(eg, {
				time: t.date_recorded,
			}),
		),
		!r &&
			n.createElement(Q, {
				...e,
			}),
		r &&
			n.createElement(
				V,
				{
					empty: r,
				},
				n.createElement(
					"div",
					{
						className: h.LoneDurationContainer,
					},
					n.createElement(j, {
						duration:
							parseInt(t.background_recording?.duration_ms || "0") / 1000,
						color: M,
					}),
				),
			),
	);
}
export function eg(e) {
	const { time: t } = e;
	const { strDate: r, strTime: i } = (0, l.Hy)(t);
	return n.createElement(
		"div",
		{
			className: h.PhaseTimestamp,
		},
		r &&
			n.createElement(
				"div",
				{
					className: h.Date,
				},
				r,
			),
		n.createElement("div", null, i),
	);
}
function W(e) {
	return n.createElement(
		"div",
		{
			className: h.ActiveTagContainer,
		},
		n.createElement("div", {
			className: h.ColorBar,
		}),
		n.createElement(
			"div",
			{
				className: h.ActiveLabel,
			},
			(0, Localize)("#PhaseList_NowPlaying"),
		),
	);
}
const V = (0, n.forwardRef)(function (e, t) {
	return n.createElement(
		"div",
		{
			ref: t,
			className: (0, i.A)(
				h.BlankPhaseGridItem,
				e.empty && h.Empty,
				e.className,
			),
		},
		e.children,
	);
});
function H(e) {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(q, {
			...e,
		}),
		n.createElement(Q, {
			...e,
		}),
	);
}
function j(e) {
	const { duration: t, color: r } = e;
	return n.createElement(
		"div",
		{
			className: h.DurationMetric,
		},
		n.createElement("div", {
			className: h.DurationBar,
			style: {
				width: `${Math.min(100, (t / 3600) * 100)}%`,
				backgroundColor: r,
			},
		}),
		n.createElement(
			"div",
			{
				className: h.DurationText,
				style: {
					color: r,
				},
			},
			(0, qZ)(t, false),
		),
	);
}
function q(e) {
	const { phase: t } = e;
	return n.createElement(
		te,
		{
			className: h.PhaseDetails,
		},
		t.active && n.createElement(W, null),
		n.createElement(eg, {
			time: t.date_recorded,
		}),
		n.createElement(c.x, {
			gameID: t.game_id,
			tags: [...(t.tags || []), ...(t.contained_tags || [])],
			attributes: t.attributes,
		}),
	);
}
function Q(e) {
	const { phase: t } = e;
	const {
		recording: r,
		rgClips: i,
		rgScreenshots: a,
	} = (function (e) {
		return {
			recording: e.background_recording,
			rgClips: (0, u.y$)(e.clip_ids),
			rgScreenshots: (0, p.ZQ)(e.game_id, e.screenshots).data || [],
		};
	})(t);
	const s = (0, A.br)();
	const o = re(t) ? V : te;
	const [l, c] = (0, n.useState)();
	const m = (0, C.wY)(c);
	const d = i.length + a.length + (r ? 1 : 0);
	const g = l ? l.contentRect.width : 0;
	const _ = Math.floor(
		g / (parseInt(h.MediaListItemWidth) + parseInt(h.MediaListGap) / 2),
	);
	const f = [];
	if (r) {
		f.push(
			n.createElement(X, {
				gameID: t.game_id,
				recording: r,
				key: "recording",
			}),
		);
	}
	for (const e of i) {
		f.push(
			n.createElement(J, {
				summary: e,
				key: e.clip_id,
			}),
		);
	}
	for (const e of a) {
		f.push(
			n.createElement(K, {
				screenshot: e,
				key: e.id,
			}),
		);
	}
	if (f.length === 0) {
		f.push(
			n.createElement(Z, {
				key: "invisible",
			}),
		);
	}
	const b = d > _;
	return n.createElement(
		o,
		{
			className: h.PhaseMediaList,
			ref: m,
		},
		f.slice(0, b ? _ - 1 : _),
		b &&
			n.createElement(Y, {
				total: d,
				onClick: () =>
					s.Media.Grid({
						state: {
							filter: {
								listSource: {
									type: "phase",
									phase: t,
								},
							},
						},
					}),
			}),
	);
}
function Z(e) {
	return n.createElement(
		ee,
		{
			onClick: () => {},
		},
		n.createElement("div", {
			className: h.InvisibleItem,
		}),
	);
}
function Y(e) {
	const { total: t, onClick: r } = e;
	return n.createElement(
		ee,
		{
			onClick: r,
		},
		n.createElement(
			"div",
			{
				className: h.OverflowItem,
			},
			(0, Localize)("#PhaseList_ShowAllN", t),
		),
	);
}
function K(e) {
	const { screenshot: t } = e;
	const r = (0, A.br)();
	const i = () =>
		r.Media.Screenshot({
			state: {
				id: t.id,
			},
		});
	return n.createElement($, {
		src: t.strUrl,
		onClick: i,
		onShowOptions: (e) => {
			(0, y.lX)(
				n.createElement(v.ListItemContextMenu, {
					item: t,
					onView: i,
					summoningElement: e.currentTarget,
				}),
				e,
			);
			return true;
		},
	});
}
function X(e) {
	const { gameID: t, recording: r } = e;
	const { loader: i } = (0, m.Fc)(t);
	const a = (0, B.q3)(() => i.GetGlobalOffsetDataForTimeline(r.timeline_id, 0));
	const s =
		(a?.nGlobalOffsetMS || 0) +
		parseInt(r.offset) +
		parseInt(r.duration_ms) / 2;
	const o = (0, B.q3)(() =>
		i.ConvertGlobaOffsetToRecordingAndRelativeOffset(s),
	);
	const c = o?.strRecordingID || "";
	const u = o?.nRecordingOffsetMS || 0;
	const p = o?.nStartOffsetMS || 0;
	const g = (0, d.rX)(t, undefined, c, u, p, 320, false);
	const h = (0, A.br)();
	const C = () =>
		h.Media.Recording({
			state: {
				gameid: t,
				playbackDefinition: {
					m_strTimelineID: r.timeline_id,
					m_nTimelineStartMS: parseInt(r.offset),
				},
			},
		});
	const f = (0, I.f)();
	const b = () =>
		(0, l.DV)(t, r.timeline_id, parseInt(r.offset), parseInt(r.duration_ms));
	return n.createElement($, {
		duration: parseInt(r.duration_ms) / 1000,
		src: g,
		durationColor: M,
		onClick: C,
		onShowOptions: (e) => {
			(0, y.lX)(
				n.createElement(
					E.IP,
					{
						...f,
					},
					n.createElement(v.BaseListItemContextMenu, {
						onView: C,
						additionalOptions: [
							{
								label: (0, Localize)("#PhaseList_Recording_SaveAsClip"),
								onSelected: b,
							},
						],
					}),
				),
				e,
			);
			return true;
		},
	});
}
function J(e) {
	const { summary: t } = e;
	const r = (0, A.br)();
	const i = () =>
		r.Media.Clip({
			state: {
				id: t.clip_id,
			},
		});
	const a = (0, I.f)();
	return n.createElement($, {
		duration: parseInt(t.duration_ms) / 1000,
		src: t.thumbnail_url,
		durationColor: T,
		onClick: i,
		onShowOptions: (e) => {
			(0, y.lX)(
				n.createElement(
					E.IP,
					{
						...a,
					},
					n.createElement(v.ListItemContextMenu, {
						item: {
							type: "clip",
							id: t.clip_id,
							summary: t,
						},
						onView: i,
						summoningElement: e.currentTarget,
					}),
				),
				e,
			);
			return true;
		},
	});
}
function $(e) {
	const {
		duration: t,
		durationColor: r,
		src: i,
		onClick: a,
		onShowOptions: s,
	} = e;
	return n.createElement(
		ee,
		{
			onClick: a,
			onContextMenu: s,
		},
		n.createElement("img", {
			src: i,
			className: h.Thumbnail,
		}),
		t > 0 &&
			n.createElement(j, {
				duration: t,
				color: r || "white",
			}),
	);
}
function ee(e) {
	return n.createElement("div", {
		className: h.MediaListItem,
		...e,
	});
}
const te = (0, n.forwardRef)(function (e, t) {
	const { children: r, className: a } = e;
	return n.createElement(
		"div",
		{
			ref: t,
			className: (0, i.A)(h.PhaseGridItem, a),
		},
		r,
	);
});
function re(e) {
	return e.type === 2;
}
function ne(e) {
	return re(e) && e.clip_ids.length === 0 && e.screenshots.length === 0;
}
export function M4(e) {
	const { filter: t, phaseFilter: r, onPhaseFilterChange: i } = e;
	const a = !!(0, p.NN)(t.listSource);
	const s = a ? t.listSource.gameid : null;
	const o = a && false;
	return n.createElement(w.fC, {
		...e,
		left: n.createElement(ae, {
			filter: r,
			onFilterChange: i,
		}),
		right: n.createElement(
			n.Fragment,
			null,
			o &&
				n.createElement(se, {
					filter: r,
					onFilterChange: i,
					gameID: s,
				}),
			false,
		),
	});
}
function ae(e) {
	const { filter: t, onFilterChange: r } = e;
	return n.createElement(
		"div",
		{
			className: h.InputFilter,
		},
		n.createElement(b.Search, null),
		n.createElement("input", {
			value: t.strSearch || "",
			onChange: (e) =>
				r({
					...t,
					strSearch: e.target.value,
				}),
			placeholder: (0, Localize)("#PhaseList_SearchPlaceholder"),
		}),
	);
}
function se(e) {
	const { filter: t, onFilterChange: r, gameID: i } = e;
	const a = (0, l.sn)(i).data || [];
	const s = (e) => {
		if (t.tags && t.tags[e.group] === e.name) {
			const n = {
				...t,
			};
			delete n.tags[e.group];
			r(n);
		} else {
			r({
				...t,
				tags: {
					...(t.tags || {}),
					[e.group]: e.name,
				},
			});
		}
	};
	return n.createElement(
		n.Fragment,
		null,
		a.map((e) =>
			n.createElement(D, {
				key: e[0].group,
				tags: e,
				onTagSelected: s,
				gameID: i,
				selectedTagName: (t.tags || {})[e[0].group],
			}),
		),
	);
}
function oe(e) {
	const t = [];
	for (let e = 0; e < 20; e++) {
		t.push(
			n.createElement(le, {
				key: e,
			}),
		);
	}
	return t;
}
function le(e) {
	return n.createElement(w.O0, {
		className: h.PhaseListSkeleton,
	});
}
