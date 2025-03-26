var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./49519.js");
var s = require("./18057.js");
var o = require("./50350.js");
var l = require("./78057.js");
var c = require("./3200.js");
var m = require("./60155.js");
var u = require("./9808.js");
var d = require(/*webcrack:missing*/ "./69164.js");
var A = require("./96593.js");
var p = require("./91486.js");
import { Localize } from "../../actual_src/utils/localization.js";
var h = require("./32179.js");
var C = require("./48289.js");
var _ = require(/*webcrack:missing*/ "./90095.js");
var f = require("./12307.js");
var b = require("./17231.js");
var y = require("./64608.js");
var S = require(/*webcrack:missing*/ "./8573.js");
var w = require("./87935.js");
var B = require("./21105.js");
var v = require("./81994.js");
var I = require("./57665.js");
var E = require(/*webcrack:missing*/ "./4690.js");
var M = require("./32084.js");
var T = require(/*webcrack:missing*/ "./72476.js");
var R = require(/*webcrack:missing*/ "./79671.js");
var k = require("./35488.js");
var D = require(/*webcrack:missing*/ "./90765.js");
var N = require(/*webcrack:missing*/ "./11131.js");
var F = require(/*webcrack:missing*/ "./88696.js");
var G = require(/*webcrack:missing*/ "./89193.js");
var O = require(/*webcrack:missing*/ "./88750.js");
var P = require(/*webcrack:missing*/ "./31084.js");
var L = require("./39002.js");
var z = require("./93966.js");
var x = require(/*webcrack:missing*/ "./55007.js");
import { _f } from "../../actual_src/utils/domutils.js";
var W = require("./19579.js");
var V = require("./31800.js");
var H = require("./15918.js");
export function wi(e) {
	const { bShowGameInfoInHeader: t, appid: r } = e;
	const n = (0, i.useRef)(undefined);
	const c = (0, M.j)(n, W.headerPadding);
	const m = (0, l.T)(r);
	(0, V.Tc)(n, 250);
	return i.createElement(
		o.Jr,
		{
			headerVisibility: "default",
			padForHeader: false,
			padForFooter: false,
			minimumOpacity: 0,
			scrollable: false,
			flexed: true,
		},
		i.createElement(
			B.MS,
			{
				className: W.Page,
				ref: n,
				scrollPaddingTop: 0,
				scrollIntoViewType: E.Yo.NoTransform,
			},
			i.createElement(ae, {
				appid: r,
			}),
			i.createElement(
				d.Z,
				{
					"flow-children": "column",
					className: W.Container,
				},
				i.createElement(
					a.dO,
					null,
					i.createElement(
						a.qh,
						{
							path: s.BV.Library.App.Achievements.My.Root(),
						},
						i.createElement(Rp, {
							bShowGameInfoInHeader: t,
							appid: r,
							scrollTabsTop: c,
							autoFocus: true,
						}),
					),
					i.createElement(
						a.qh,
						{
							path: s.BV.Library.App.Achievements.Friend.Root(),
						},
						({ match: e }) =>
							i.createElement($, {
								bShowGameInfoInHeader: t,
								appid: r,
								accountid: parseInt(e.params.accountid),
								scrollTabsTop: c,
								details: m,
							}),
					),
				),
			),
		),
	);
}
function q(e) {
	const t = (0, h.ex)(e);
	return (0, i.useMemo)(() => {
		if (!t.data) {
			return {
				loading: t.loading,
				error: t.error,
			};
		}
		const { achieved: e, unachieved: r, hidden: n } = t.data;
		const i = Object.keys(e).map((t) => e[t]);
		const a = Object.keys(r).map((e) => r[e]);
		const s = i.sort((e, t) => t.rtUnlocked - e.rtUnlocked);
		const o = a.sort((e, t) => t.flAchieved - e.flAchieved);
		const l = Object.keys(n).length;
		return {
			data: {
				rgAchieved: s,
				rgUnachieved: o,
				cHidden: l,
				cTotal: s.length + o.length + l,
				cEarned: s.length,
			},
		};
	}, [t]);
}
export function Rp(e) {
	const {
		appid: t,
		bShowGameInfoInHeader: r,
		bPinnedView: n,
		bShowInProgress: a,
		scrollTabsTop: s,
		autoFocus: o,
		strDefaultTab: l,
		onSetTab: c,
	} = e;
	const u = (0, i.useRef)(undefined);
	const { data: p, loading: h, error: C } = q(t);
	const _ = (0, A.Co)(t);
	const [b, y] = (0, i.useState)(l || "achievements");
	const S = p?.rgUnachieved;
	const w = p?.cHidden;
	const [B, v] = (0, i.useState)(0);
	const I = (0, i.useCallback)(() => v(0), []);
	const E = !(0, T.hf)();
	const M = i.useCallback(
		(e) => {
			y(e);
			if (c) {
				c(e);
			}
		},
		[c],
	);
	if (h) {
		return i.createElement(me, null);
	}
	if (C) {
		return i.createElement(ue, {
			error: C,
		});
	}
	const { cEarned: R, cTotal: k } = p;
	const N = R == k && k > 0;
	let F = [
		{
			id: "inprogress",
			title: Localize("#Achievements_Tab_InProgress"),
			content: i.createElement(Y, {
				appid: t,
				bPinnedView: n,
			}),
		},
		{
			id: "achievements",
			title: Localize("#Achievements_Tab_MyAchievements"),
			content: i.createElement(J, {
				appid: t,
				accountIDToCompare: B,
				onChangeAccountIDToCompare: v,
				bPinnedView: n,
			}),
		},
		{
			id: "global",
			title: Localize("#Achievements_Tab_GlobalAchievements"),
			content: i.createElement(ne, {
				appid: t,
			}),
		},
	];
	if (!a || S?.length + w == 0) {
		F = F.slice(1);
	}
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			d.Z,
			{
				scrollIntoViewWhenChildFocused: true,
				className: (0, D.A)(
					W.HeaderContainer,
					n && W.PinnedView,
					N && W.PerfectGame,
				),
			},
			i.createElement(m.c$, {
				bShowGameInfoInHeader: r,
				bPinnedInOverlayView: n,
				appid: t,
				achievements: {
					cEarned: R,
					cTotal: k,
				},
				playtime:
					E && _
						? {
								minutesForever: _.minutes_playtime_forever,
								minutesInLastTwoWeeks: _.minutes_playtime_last_two_weeks,
							}
						: undefined,
				autoFocus: o,
			}),
		),
		i.createElement(
			d.Z,
			{
				ref: u,
				className: (0, D.A)(W.AchievementTabs, n && W.PinnedView),
				onSecondaryButton: B ? I : undefined,
				onSecondaryActionDescription: B
					? Localize("#Achievements_ComparisonLabel_Clear")
					: undefined,
			},
			i.createElement(f.xC, {
				canBeHeaderBackground: "on-outer-scroll",
				autoFocusContents: false,
				activeTab: b,
				onShowTab: M,
				onFocusWithin: (e) => e && s && s(u.current),
				bPinnedInOverlayView: n,
				tabs: F,
			}),
		),
	);
}
class Z {
	m_appid;
	m_storage;
	m_rgAchievements = [];
	constructor(e) {
		(0, G.Gn)(this);
		this.m_appid = e;
		this.m_storage = new F.A();
		this.m_storage.GetObject(this.GetKey()).then((e) => {
			if (e) {
				this.m_rgAchievements = e;
			}
		});
	}
	GetKey() {
		return `SortedAchievements_${this.m_appid}`;
	}
	GetSortedAchievements() {
		return this.m_rgAchievements;
	}
	SetSortedAchievements(e) {
		this.m_rgAchievements = e;
		this.m_storage.StoreObject(this.GetKey(), e);
	}
}
function Y(e) {
	const { appid: t, bPinnedView: r } = e;
	const n = (0, N.R7)();
	const { data: a, loading: s, error: o } = q(t);
	const { rgUnachieved: l, cHidden: d } = a;
	const A = (function (e) {
		const t = i.useRef(undefined);
		t.current ||= new Z(e);
		return t.current;
	})(t);
	const p = (0, _.q3)(() => A.GetSortedAchievements());
	const h = (0, T.Qn)();
	const [C, f, b] = (0, m.V3)(l);
	let y = i.useMemo(() => {
		const e = b.slice();
		e.sort((e, t) => {
			let r = p.indexOf(e.strID);
			let n = p.indexOf(t.strID);
			if (r == n) {
				return 0;
			} else if (r == -1) {
				return 1;
			} else if (n == -1) {
				return -1;
			} else {
				return r - n;
			}
		});
		return e;
	}, [b, p]);
	const S = i.useCallback(
		(e, t) => {
			if (!e.destination) {
				return;
			}
			let r = (0, L.Yb)(y, e.source.index, e.destination.index).map(
				(e) => e.strID,
			);
			A.SetSortedAchievements(r);
		},
		[A, y],
	);
	const w = i.useCallback(
		(e, t, r, n) => {
			const a = y;
			let s = r.source.index;
			let o = a[r.source.index];
			const l = (e) => {
				let t = a.map((e) => e.strID);
				t.splice(s, 1);
				t.unshift(o.strID);
				A.SetSortedAchievements(t);
			};
			const m = (e) => {
				let t = a.map((e) => e.strID);
				t.splice(s, 1);
				t.push(o.strID);
				A.SetSortedAchievements(t);
			};
			const d = (0, L.gQ)({
				...e.draggableProps.style,
				...n,
			});
			return i.createElement(
				"div",
				{
					className: (0, D.A)(
						W.SortableUserAchievement,
						t.isDragging && W.IsDragging,
					),
					ref: e.innerRef,
					...e.draggableProps,
					...e.dragHandleProps,
					style: d,
				},
				i.createElement(
					"div",
					{
						className: W.SortableUserAchievementInner,
					},
					i.createElement(c.fm, {
						title: o.strName,
						description: o.strDescription,
						percentGlobalUnlocked: o.flAchieved,
						unlockDate: o.rtUnlocked,
						imgUrl: o.strImage,
						progress: (0, u._h)(o),
						glow: (0, I.Qv)(o.bAchieved, o.flAchieved),
						onContextMenu: (e) => {
							let t = i.createElement(
								O.tz,
								null,
								i.createElement(
									O.kt,
									{
										onSelected: l,
									},
									Localize("#Achievements_Sort_MoveToTop"),
								),
								i.createElement(
									O.kt,
									{
										onSelected: m,
									},
									Localize("#Achievements_Sort_MoveToBottom"),
								),
							);
							(0, P.lX)(t, e);
						},
					}),
					!h &&
						i.createElement(k.Rows, {
							className: W.DragHandle,
						}),
				),
			);
		},
		[h, A, y],
	);
	const B = w;
	const v = i.useCallback(() => {
		let e = window.document.body;
		if (n?.ownerWindow) {
			e = n.ownerWindow.document.body;
		}
		return e;
	}, [n]);
	const E = i.createElement(
		"div",
		{
			className: W.Label,
		},
		Localize("#Achievements_Tab_InProgress"),
	);
	const M = i.createElement(m.zp, {
		className: W.MyAchievementsHeader,
		strFilter: C,
		onChangeFilter: f,
		leftContent: E,
	});
	const F = i.useRef(undefined);
	const G = i.useCallback((e) => {
		F.current = e ? (0, _f)(e) : null;
	}, []);
	const z = (0, x.Te)({
		count: y.length,
		getScrollElement: () => F.current,
		estimateSize: i.useCallback(
			(e) => parseInt(W.nAchievementHeight) + parseInt(W.nAchievementGap),
			[],
		),
		overscan: 5,
	});
	if (s) {
		return i.createElement(me, null);
	} else if (o) {
		return i.createElement(ue, {
			error: o,
		});
	} else {
		return i.createElement(
			oe,
			{
				bPinnedView: r,
			},
			M,
			i.createElement("div", {
				ref: G,
			}),
			i.createElement(
				R.JY,
				{
					onDragEnd: S,
					stylesInsertionPoint: n?.ownerWindow?.document?.head,
				},
				i.createElement(
					R.gL,
					{
						droppableId: "droppable",
						renderClone: B,
						getContainerForClone: v,
						mode: "virtual",
					},
					(e, t) =>
						i.createElement(
							"div",
							{
								className: (0, D.A)(
									W.SortableAchievementsList,
									t.isDraggingOver && W.IsDraggingOver,
								),
								style: {
									height: z.getTotalSize(),
									width: "100%",
									position: "relative",
								},
								...e.droppableProps,
								ref: e.innerRef,
							},
							z.getVirtualItems().map((e) => {
								const t = {
									position: "absolute",
									top: e.start,
									left: 0,
									width: "100%",
									height: e.size,
								};
								const r = y[e.index];
								return i.createElement(
									R.sx,
									{
										key: r.strID,
										draggableId: r.strID,
										index: e.index,
									},
									(e, r, n) => w(e, r, n, t),
								);
							}),
						),
				),
			),
			i.createElement(se, {
				count: d,
			}),
		);
	}
}
function K(e) {
	const {
		achievement: t,
		accountIDToCompare: r,
		friendAchievements: n,
		...a
	} = e;
	const s = (0, C.Sk)();
	const o = (0, C.Sv)(r);
	if (r) {
		return i.createElement(c.ui, {
			key: t.strID,
			...a,
			title: t.strName,
			description: t.strDescription,
			imgUrl: t.strImage,
			percentGlobalUnlocked: t.flAchieved,
			primaryAchiever: {
				avatarURL: s,
				unlockDate: t.rtUnlocked,
				progress: (0, u._h)(t),
			},
			secondaryAchiever: n
				? {
						avatarURL: o,
						unlockDate: n[t.strID]?.rtUnlocked,
						progress: (0, u._h)(n[t.strID]),
					}
				: undefined,
		});
	} else {
		return i.createElement(le, {
			key: t.strID,
			...a,
			achievement: t,
		});
	}
}
function X(e) {
	const { rgAchieved: t, rgUnachieved: r, fnRenderAchievement: n } = e;
	const a = i.useMemo(() => {
		const e = [];
		e.push(
			...t.map((e) => ({
				type: "item",
				data: n(e),
			})),
		);
		if (r.length > 0) {
			e.push({
				type: "title",
				data: i.createElement(
					c.YG,
					null,
					Localize("#Achievements_LockedList_Title"),
				),
			});
		}
		e.push(
			...r.map((e) => ({
				type: "item",
				data: n(e),
			})),
		);
		return e;
	}, [t, r, n]);
	const s = i.useCallback(
		(e) => {
			let t;
			if (a[e].type === "title") {
				t =
					parseInt(W.nAchievementsListTitleHeight) +
					parseInt(W.nAchievementGap) * 2;
			} else {
				t = parseInt(W.nAchievementHeight);
				if (e != a.length - 1) {
					t += parseInt(W.nAchievementGap);
				}
			}
			return t;
		},
		[a],
	);
	const o = i.useRef(undefined);
	const l = i.useCallback((e) => {
		o.current = e ? (0, _f)(e) : null;
	}, []);
	const m = (0, x.Te)({
		count: a.length,
		getScrollElement: () => o.current,
		estimateSize: s,
		overscan: 5,
	});
	return i.createElement(
		"div",
		{
			className: W.ListWrapper,
			ref: l,
			style: {
				height: m.getTotalSize(),
				width: "100%",
				position: "relative",
			},
		},
		m.getVirtualItems().map((e) => {
			const t = {
				position: "absolute",
				top: e.start,
				left: 0,
				width: "100%",
				height: e.size - parseInt(W.nAchievementGap),
			};
			return (0, i.cloneElement)(a[e.index].data, {
				style: t,
				key: e.key,
			});
		}),
	);
}
function J(e) {
	const {
		appid: t,
		accountIDToCompare: r,
		onChangeAccountIDToCompare: n,
		bPinnedView: a,
	} = e;
	const { data: s, loading: o, error: l } = q(t);
	const { rgAchieved: c, rgUnachieved: u, cHidden: d } = s;
	const { achievements: A, rgOptions: p } = (function (e, t) {
		const { data: r } = (0, h.kn)(e, t);
		const { data: n } = (0, H.Nd)(e, {
			staleTime: 3600000,
		});
		const a = (0, _.q3)(() => {
			if (!n) {
				return [];
			}
			const e = [
				...n.in_game,
				...n.played_ever,
				...n.played_recently,
				...n.owns,
			]
				.map(({ steamid: e }) => new S.b(e).GetAccountID())
				.map((e) => ({
					data: e,
					label: C.O$.GetFriendState(e).display_name,
				}))
				.sort((e, t) => e.label.localeCompare(t.label));
			if (t) {
				e.unshift({
					data: 0,
					label: Localize("#Achievements_ComparisonLabel_Clear"),
				});
			}
			return e;
		});
		return {
			achievements: (0, i.useMemo)(
				() =>
					r
						? {
								...r.achieved,
								...r.unachieved,
							}
						: null,
				[r],
			),
			rgOptions: a,
		};
	})(t, r);
	const [f, b, w, B] = (0, m.V3)(c);
	const v = i.useMemo(() => u.filter((e) => B(e)), [u, B]);
	const I =
		p &&
		p.length != 0 &&
		i.createElement(
			"div",
			{
				className: W.CompareButtonContainer,
			},
			i.createElement(y.ZU, {
				strDefaultLabel: Localize("#Achievements_ComparisonLabel_NotComparing"),
				selectedOption: r,
				rgOptions: p,
				onChange: (e) => n(e.data),
				renderButtonValue: () =>
					r
						? Localize(
								"#Achievements_ComparisonLabel_Comparing",
								C.O$.GetFriendState(r).display_name,
							)
						: Localize("#Achievements_ComparisonLabel_NotComparing"),
			}),
		);
	const E = i.createElement(m.zp, {
		className: W.MyAchievementsHeader,
		bPinnedView: a,
		onChangeFilter: b,
		strFilter: f,
		rightContent: I,
	});
	const M = i.useCallback(
		(e) =>
			i.createElement(K, {
				achievement: e,
				accountIDToCompare: r,
				friendAchievements: A,
			}),
		[r, A],
	);
	const T = c.length > 0 || u.length > 0;
	if (o) {
		return i.createElement(me, null);
	} else if (l) {
		return i.createElement(ue, {
			error: l,
		});
	} else {
		return i.createElement(
			oe,
			{
				bPinnedView: a,
			},
			T && E,
			i.createElement(X, {
				rgAchieved: w,
				rgUnachieved: v,
				fnRenderAchievement: M,
			}),
			i.createElement(se, {
				count: d,
			}),
		);
	}
}
function $(e) {
	const t = (0, A.Co)(e.appid);
	if ((0, A.mM)(t)) {
		return i.createElement(ee, {
			...e,
		});
	} else {
		return i.createElement(te, {
			...e,
		});
	}
}
function ee(e) {
	const {
		appid: t,
		bShowGameInfoInHeader: r,
		accountid: n,
		scrollTabsTop: a,
	} = e;
	const { data: s, loading: o, error: l } = (0, h.hj)(t, n);
	const [c, u] = (0, i.useMemo)(
		() =>
			s
				? [
						Object.keys(s.achieved)
							.map((e) => s.achieved[e])
							.sort((e, t) => t.rtUnlocked - e.rtUnlocked),
						Object.keys(s.unachieved)
							.map((e) => s.unachieved[e])
							.sort((e, t) => t.flGlobalAchieved - e.flGlobalAchieved),
					]
				: [],
		[s],
	);
	const A = (0, C.bV)(n);
	const p = (0, C.Sv)(n);
	const _ = (0, i.useRef)(undefined);
	const [y, S] = (0, i.useState)("achievements");
	const [w, B] = (0, i.useState)(true);
	if (o || !A) {
		return i.createElement(me, null);
	}
	if (l) {
		return i.createElement(ue, {
			error: l,
		});
	}
	const v = Object.keys(s.hiddenAchieved).length;
	const I = Object.keys(s.hiddenUnachieved).length;
	const E = c.length + u.length + v + I;
	const M = c.length + v;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			d.Z,
			{
				scrollIntoViewWhenChildFocused: true,
				className: W.HeaderContainer,
			},
			i.createElement(m.c$, {
				bShowGameInfoInHeader: r,
				bPinnedInOverlayView: false,
				appid: t,
				achievements: {
					cTotal: E,
					cEarned: M,
				},
				subtitle: i.createElement(ce, {
					name: A,
					avatarURL: p,
				}),
				autoFocus: true,
			}),
		),
		i.createElement(
			"div",
			{
				ref: _,
				className: W.AchievementTabs,
			},
			i.createElement(f.xC, {
				canBeHeaderBackground: "on-outer-scroll",
				autoFocusContents: false,
				activeTab: y,
				onShowTab: S,
				onFocusWithin: (e) => {
					if (e && a) {
						a(_.current);
					}
				},
				tabs: [
					{
						id: "achievements",
						title: Localize("#Achievements_Tab_FriendAchievements"),
						renderTabAddon: () =>
							i.createElement(b.Ul, {
								statusPosition: "none",
								strAvatarURL: p,
								size: "X-Small",
							}),
						tabAddonPosition: "left",
						content: i.createElement(re, {
							appid: t,
							accountid: n,
							comparison: w,
							onComparisonChange: B,
						}),
					},
					{
						id: "global",
						title: Localize("#Achievements_Tab_GlobalAchievements"),
						content: i.createElement(ie, {
							appid: t,
							accountid: n,
						}),
					},
				],
			}),
		),
	);
}
function te(e) {
	const { appid: t, accountid: r } = e;
	const n = (0, a.W6)();
	(0, i.useEffect)(() => {
		const e = w.B7.BuildSteamURL(
			"UserAchievementsPage",
			S.b.InitFromAccountID(r).ConvertTo64BitString(),
			t,
		);
		n.replace(s.BV.GamepadUI.SteamWeb(), {
			url: e,
		});
	}, [n, t, r]);
	return null;
}
function re(e) {
	const { appid: t, accountid: r, comparison: n, onComparisonChange: a } = e;
	const { data: s, loading: o, error: l } = (0, h.hj)(t, r);
	const d = (0, C.Sv)(r);
	const p = (0, C.Sk)();
	const [_, f] = (0, i.useMemo)(() => {
		if (!s) {
			return [[], []];
		}
		const e = {
			...s.achieved,
			...s.hiddenAchieved,
		};
		return [
			Object.keys(e)
				.map((t) => e[t])
				.sort((e, t) => t.rtUnlocked - e.rtUnlocked),
			Object.keys(s.unachieved)
				.map((e) => s.unachieved[e])
				.sort((e, t) => t.rtUnlocked - e.rtUnlocked),
		];
	}, [s]);
	const b = (0, A.mM)((0, A.Co)(t));
	const S = Object.keys(s.hiddenUnachieved).length;
	const [w, B, v, I] = (0, m.V3)(_);
	const E = i.useMemo(() => f.filter((e) => I(e)), [f, I]);
	const M =
		b &&
		i.createElement(
			"div",
			{
				className: W.ToggleContainer,
			},
			i.createElement(
				"div",
				{
					className: W.Label,
				},
				Localize("#Achievements_ComparisonToggle_Label"),
			),
			i.createElement(y.Hk, {
				value: n,
				onChange: a,
			}),
		);
	const T = i.createElement(m.zp, {
		className: W.MyAchievementsHeader,
		strFilter: w,
		onChangeFilter: B,
		rightContent: M,
	});
	const R = i.useCallback(
		(e) =>
			i.createElement(c.ui, {
				key: e.strID,
				title: e.strName,
				description: e.strDescription,
				imgUrl: e.strImage,
				hidden: !!s.hiddenAchieved[e.strID],
				percentGlobalUnlocked: e.flGlobalAchieved,
				primaryAchiever: {
					avatarURL: d,
					unlockDate: e.rtUnlocked,
					progress: (0, u._h)(e),
				},
				secondaryAchiever: n
					? {
							avatarURL: p,
							unlockDate: e.rtCurrentUserUnlock,
							progress: (0, u._h)({
								...e,
								flCurrentProgress: e.flCurrentUserCurrentProgress,
							}),
						}
					: undefined,
			}),
		[s, n, d, p],
	);
	if (o) {
		return i.createElement(me, null);
	} else if (l) {
		return i.createElement(ue, {
			error: l,
		});
	} else {
		return i.createElement(
			oe,
			null,
			T,
			i.createElement(X, {
				rgAchieved: v,
				rgUnachieved: E,
				fnRenderAchievement: R,
			}),
			i.createElement(se, {
				count: S,
			}),
		);
	}
}
function ne(e) {
	const { appid: t } = e;
	const {
		data: r,
		loading: n,
		error: a,
	} = (function (e) {
		const t = (0, h.ex)(e);
		const r = (0, h.Hc)(e);
		return (0, i.useMemo)(() => {
			const { data: e, loading: n, error: i } = t;
			const { data: a, loading: s, error: o } = r;
			if (n || s) {
				return {
					loading: true,
				};
			}
			if (i || o) {
				return {
					error: i || o,
				};
			}
			const l = {
				...e.achieved,
				...e.unachieved,
				...e.hidden,
			};
			return {
				data: Object.keys(l)
					.sort((e, t) => a[t] - a[e])
					.map((e) => l[e]),
			};
		}, [t, r]);
	})(t);
	const s = (0, C.Sk)();
	if (n || !s) {
		return i.createElement(me, null);
	} else if (a) {
		return i.createElement(ue, {
			error: a,
		});
	} else {
		return i.createElement(c.Wh, {
			avatarURL: s,
			achievements: r.map((e) => ({
				id: e.strID,
				strName: e.strName,
				strDescription: e.strDescription,
				imgUrl: e.strImage,
				percentGlobalUnlocked: e.flAchieved,
				unlocked: e.bAchieved,
				hidden: e.bHidden && !e.bAchieved,
			})),
		});
	}
}
function ie(e) {
	const { appid: t, accountid: r } = e;
	const {
		data: n,
		loading: a,
		error: s,
	} = (function (e, t) {
		const r = (0, h.hj)(e, t);
		const n = (0, h.Hc)(e);
		return (0, i.useMemo)(() => {
			const { data: e, loading: t, error: i } = r;
			const { data: a, loading: s, error: o } = n;
			if (t || s) {
				return {
					loading: true,
				};
			}
			if (i || o) {
				return {
					error: i || o,
				};
			}
			const l = {
				...e.achieved,
				...e.unachieved,
				...e.hiddenAchieved,
				...e.hiddenUnachieved,
			};
			return {
				data: Object.keys(l)
					.sort((e, t) => a[t] - a[e])
					.map((t) => ({
						...l[t],
						flAchieved: a[t],
						bHidden: !!e.hiddenAchieved[t] || !!e.hiddenUnachieved[t],
					})),
			};
		}, [r, n]);
	})(t, r);
	const o = (0, C.Sv)(r);
	if (a) {
		return i.createElement(me, null);
	} else if (s) {
		return i.createElement(ue, {
			error: s,
		});
	} else {
		return i.createElement(c.Wh, {
			avatarURL: o,
			achievements: n.map((e) => ({
				id: e.strID,
				strName: e.strName,
				strDescription: e.strDescription,
				imgUrl: e.strImage,
				percentGlobalUnlocked: e.flAchieved,
				unlocked: e.bAchieved,
				hidden: e.bHidden,
			})),
		});
	}
}
function ae(e) {
	const { appid: t } = e;
	const r = (0, A.Co)(t);
	if (!r) {
		return null;
	}
	const { rgHeroImages: n, bHasHeroImage: a } = l.H.GetHeroImages(r);
	return i.createElement(
		"div",
		{
			className: W.Background,
		},
		i.createElement("div", {
			className: W.Blur,
		}),
		a &&
			i.createElement(p.z, {
				className: W.HeaderImage,
				eAssetType: 1,
				appid: t,
				rgSources: n,
				neverShowTitle: true,
			}),
		!a &&
			i.createElement(p.z, {
				className: W.HeaderImage,
				eAssetType: 3,
				app: r,
				bShortDisplay: true,
				neverShowTitle: true,
			}),
	);
}
function se(e) {
	const { count: t } = e;
	if (t === 0) {
		return null;
	} else {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				c.YG,
				{
					style: {
						paddingTop: 0,
					},
				},
				Localize("#Achievements_HiddenList_Title"),
			),
			i.createElement(c.Eu, {
				count: t,
			}),
		);
	}
}
(0, n.Cg)([G.sH], Z.prototype, "m_rgAchievements", undefined);
(0, n.Cg)([G.XI], Z.prototype, "SetSortedAchievements", null);
const oe = (e) => {
	const { bPinnedView: t, ...r } = e;
	return i.createElement(c.Om, {
		...r,
		className: (0, D.A)(W.List, t && W.PinnedView),
	});
};
function le(e) {
	const { achievement: t, ...r } = e;
	return i.createElement(c.fm, {
		title: t.strName,
		description: t.strDescription,
		percentGlobalUnlocked: t.flAchieved,
		unlockDate: t.rtUnlocked,
		imgUrl: t.strImage,
		progress: (0, u._h)(t),
		glow: (0, I.Qv)(t.bAchieved, t.flAchieved),
		...r,
	});
}
function ce(e) {
	const { name: t, avatarURL: r } = e;
	return i.createElement(
		"div",
		{
			className: W.UserContext,
		},
		i.createElement(b.Ul, {
			statusPosition: "none",
			strAvatarURL: r,
			size: "Small",
		}),
		i.createElement(
			"div",
			{
				className: W.Text,
			},
			Localize("#Achievements_FriendsAchievements", t),
		),
	);
}
function me() {
	return i.createElement(
		"div",
		{
			className: W.LoadingContainer,
		},
		i.createElement(v.j, {
			className: W.Throbber,
			showFooter: true,
		}),
	);
}
function ue(e) {
	const t = (0, h.w$)();
	const r = (0, z.yq)();
	return i.createElement(
		"div",
		{
			className: W.ErrorContainer,
		},
		i.createElement(
			"div",
			{
				className: W.ErrorTitle,
			},
			Localize("#Achievements_FailedToLoad_Title"),
		),
		i.createElement(
			d.Z,
			{
				"flow-children": "row",
				className: W.ErrorButtons,
			},
			i.createElement(
				y.$n,
				{
					onClick: t,
				},
				Localize("#Button_Retry"),
			),
			i.createElement(
				y.$n,
				{
					onClick: r,
				},
				Localize("#ActionButtonLabelBack"),
			),
		),
	);
}
