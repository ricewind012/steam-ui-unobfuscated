var n = require("./68292.js");
var i = require("./26271.js");
var a = require("./36464.js");
var s = require("./18057.js");
var o = require("./18869.js");
var l = require("./87913.js");
var c = require("./96593.js");
var m = require("./48289.js");
var u = require("./5640.js");
var d = require("./34792.js");
var A = require("./87935.js");
var p = require("./96680.js");
var g = require(/*webcrack:missing*/ "./41230.js");
var h = require(/*webcrack:missing*/ "./90095.js");
var C = require(/*webcrack:missing*/ "./63696.js");
var _ = require(/*webcrack:missing*/ "./11131.js");
var f = require(/*webcrack:missing*/ "./69164.js");
var b = require("./72655.js");
var y = require("./88724.js");
var S = require("./68608.js");
var w = require(/*webcrack:missing*/ "./8573.js");
var B = require("./15918.js");
var v = require("./5859.js");
var I = require("./82594.js");
var E = require("./35488.js");
var M = require("./17815.js");
var T = require("./43520.js");
var R = require(/*webcrack:missing*/ "./90765.js");
var k = require(/*webcrack:missing*/ "./46108.js");
var D = require("./80254.js");
var N = require("./51095.js");
var F = require("./56726.js");
var G = require("./32735.js");
var O = G;
var P = require("./1965.js");
var L = require("./93050.js");
function z(e, t) {
	return `${A.B7.GetStoreURL()}wishlist/profiles/${e.persona.m_steamid.ConvertTo64BitString()}/?appid=${t.unAppID}`;
}
const x = (e) => {
	const { appid: t, friendAndPlaytime: r } = e;
	const n = r.playtime;
	const [i] = (0, I.t7)(t, v.A.k_DataRequest_Assets);
	if (!i || !n.minutes_played_forever) {
		return null;
	}
	const a = i.GetAssets().GetHeaderURL();
	const s = r.friend.persona.m_unGamePlayedAppID == t;
	let o = C.createElement(
		"span",
		{
			className: O.TimePlayed,
		},
		(0, D.l)(n.minutes_played, "#Playtime_"),
	);
	let l = C.createElement(
		"span",
		{
			className: O.TimePlayed,
		},
		(0, D.l)(n.minutes_played_forever, "#Playtime_"),
	);
	return C.createElement(
		"div",
		{
			className: (0, R.A)(O.PlaytimeSection, s && O.ForCurrentGame),
		},
		!s &&
			a &&
			C.createElement("img", {
				className: O.GameLogo,
				src: a,
			}),
		C.createElement(
			"div",
			{
				className: O.PlaytimeContent,
			},
			n.minutes_played &&
				C.createElement("div", null, (0, k.PP)("#Playtime_Recently", o), " "),
			n.minutes_played != n.minutes_played_forever &&
				C.createElement("div", null, (0, k.PP)("#Playtime_Total", l)),
		),
	);
};
function U(e, t) {
	const r = t.friend.persona.m_unGamePlayedAppID == e;
	const n = "playtime-section-" + t.friend.persona.m_steamid.GetAccountID();
	return [
		r,
		C.createElement(x, {
			key: n,
			appid: e,
			friendAndPlaytime: t,
		}),
	];
}
export const a0 = (0, g.PA)(function (e) {
	const {
		className: t,
		friend: r,
		appid: n,
		bHideRichPresence: i,
		bAlwaysShowGameName: s,
		renderStatus: o,
		renderPlaytime: l,
		onAvatarClick: c,
		...m
	} = e;
	const u = r.persona;
	const A = r.nickname;
	const p = (0, _.R7)();
	return C.createElement(
		"div",
		{
			...m,
			className: (0, R.A)(t, O.AvatarAndLabel),
			onDoubleClick: (e) => {
				(0, a.ul)(r);
			},
			onContextMenu: (e) => {
				(0, a.Cc)(e, r, p);
			},
		},
		C.createElement(a.fH, {
			friend: r,
			size: "Medium",
			statusPosition: "right",
			onClick: c,
			renderPlaytime: l,
		}),
		C.createElement(S.D, {
			className: O.LabelHolder,
			persona: u,
			eFriendRelationship: 3,
			bIsSelf: false,
			bCompactView: false,
			strNickname: A,
			bParenthesizeNicknames: d.rV.communityPreferences.bParenthesizeNicknames,
			bHideGameName: !s && (!n || u.m_unGamePlayedAppID == n),
			renderStatus: o,
			bHideEnhancedRichPresenceLabel: i,
			bNoMask: true,
		}),
	);
});
function V(e) {
	const {
		className: t,
		details: r,
		cFriends: n,
		strHeaderTag: i,
		children: a,
	} = e;
	if (n == 0) {
		return null;
	} else {
		return C.createElement(
			"div",
			{
				className: (0, R.A)(O.Subsection, t),
			},
			C.createElement(
				"div",
				{
					className: O.SubsectionHeader,
				},
				(0, k.Yp)(i, n, r.strDisplayName),
			),
			C.createElement(
				"div",
				{
					className: (0, R.A)(O.Friends),
				},
				a,
			),
		);
	}
}
function H(e) {
	const { playtime: t, type: r } = e;
	let n;
	n =
		r == "ever"
			? (0, D.l)(t.minutes_played_forever, "#Playtime_Total_")
			: (0, D.l)(t.minutes_played, "#Playtime_TwoWeeks_");
	return C.createElement(
		"div",
		{
			className: O.PlaytimeStatus,
		},
		n,
	);
}
function j(e) {
	const t = (0, o.br)();
	const r = e.steamid64;
	return C.useCallback(() => {
		t.SteamWeb(A.B7.BuildSteamURL("SteamIDPage", r));
	}, [t, r]);
}
function q(e) {
	const { details: t, friendAndPlaytime: r } = e;
	const { friend: n, playtime: i } = r;
	const a = j(n);
	return C.createElement(a0, {
		friend: n,
		appid: t.unAppID,
		onAvatarClick: a,
		renderPlaytime: () => U(t.unAppID, r),
	});
}
function Q(e) {
	const { details: t, friendAndPlaytime: r } = e;
	const { friend: n, playtime: i } = r;
	const a = j(n);
	return C.createElement(a0, {
		friend: n,
		appid: t.unAppID,
		onAvatarClick: a,
		renderStatus: () =>
			C.createElement(H, {
				playtime: i,
				type: "recent",
			}),
		renderPlaytime: () => U(t.unAppID, r),
		bHideRichPresence: true,
	});
}
function Z(e) {
	const { details: t, friendAndPlaytime: r } = e;
	const { friend: n, playtime: i } = r;
	const s = j(n);
	return C.createElement(a.fH, {
		friend: n,
		size: "Small",
		statusPosition: "bottom",
		onClick: s,
		renderPlaytime: () => U(t.unAppID, r),
	});
}
function Y(e) {
	const { details: t, friendAndPlaytime: r } = e;
	const { friend: n, playtime: i } = r;
	const s = (function (e, t) {
		const r = (0, o.br)();
		return C.useCallback(() => {
			r.SteamWeb(z(e, t));
		}, [r, e, t]);
	})(n, t);
	return C.createElement(a.fH, {
		friend: n,
		size: "Small",
		statusPosition: "bottom",
		onClick: s,
		renderPlaytime: () => U(t.unAppID, r),
	});
}
function K(e) {
	const { nMaxRows: t, strExpandTag: r, children: n } = e;
	return C.createElement(
		M.S,
		{
			className: O.FriendsOverflow,
			nMaxRows: t,
			classNameWhenHidden: (0, R.A)(O.FriendsActivityOverFlow),
			classNameWhenExpanded: (0, R.A)(O.FriendsActivityOverFlow, O.Expanded),
			collapseString: (0, k.we)("#AppDetails_FriendsLess"),
			expandString: (0, k.we)(r),
			suppressMask: true,
			buttonClass: O.ShowMore,
		},
		n,
	);
}
function X(e) {
	return c.tw.GetAppOverviewByAppID(e).BIsApplicationOrTool();
}
function J(e) {
	return (t, r) => {
		const n = d.rV.communityPreferences.bParenthesizeNicknames;
		const i = !d.rV.friendSettings.bForceAlphabeticFriendSorting;
		let a = 0;
		if (
			e == "ingame" &&
			((a = y.Z.SortStatusComparator(i, t.friend.persona, r.friend.persona)),
			a != 0)
		) {
			return a;
		}
		if (e != "wishlist") {
			if (
				e != "ever" &&
				((a = r.playtime.minutes_played - t.playtime.minutes_played), a != 0)
			) {
				return a;
			}
			a = r.playtime.minutes_played_forever - t.playtime.minutes_played_forever;
			if (a != 0) {
				return a;
			}
		}
		if (n) {
			return (0, N.lY)(
				t.friend.persona.m_strPlayerName,
				r.friend.persona.m_strPlayerName,
			);
		} else {
			return (0, N.lY)(
				t.friend.nickname
					? t.friend.nickname
					: t.friend.persona.m_strPlayerName,
				r.friend.nickname
					? r.friend.nickname
					: r.friend.persona.m_strPlayerName,
			);
		}
	};
}
export const yj = (0, g.PA)(function (e) {
	const {
		details: { unAppID: t },
	} = e;
	if ((0, n.bg)().BIsOfflineMode()) {
		return C.createElement(te, {
			appid: t,
		});
	} else {
		return C.createElement(ee, {
			...e,
		});
	}
});
const ee = (0, g.PA)(function (e) {
	const { details: t } = e;
	const { unAppID: r } = t;
	const n = (0, s.bG)("CommunityFriendsThatPlay", r);
	const i = $0(r);
	const a = oG(r);
	const o = Ce(r);
	const l = _e(r);
	if (i.length + a.length + o.length + l.length == 0) {
		return null;
	}
	const c = X(r)
		? (0, k.we)("#AppDetails_SectionTitle_Friends_Software")
		: (0, k.we)("#AppDetails_SectionTitle_Friends");
	return C.createElement(
		P.n,
		{
			feature: 4,
			primaryAction: {
				action: n,
				label: (0, k.we)("#AppDetails_Friends_ViewAll"),
			},
			className: O.FriendsSection,
			label: c,
			rightColumnSection: true,
		},
		C.createElement(
			P.n.Body,
			null,
			C.createElement(
				V,
				{
					className: O.InGame,
					details: t,
					strHeaderTag: "#AppDetails_FriendsInGameNow",
					cFriends: i.length,
				},
				i.map((e) =>
					C.createElement(q, {
						key: e.friend.accountid,
						details: t,
						friendAndPlaytime: e,
					}),
				),
			),
			C.createElement(
				V,
				{
					className: O.Recent,
					details: t,
					strHeaderTag: "#AppDetails_FriendsPlayedRecently",
					cFriends: a.length,
				},
				C.createElement(
					K,
					{
						nMaxRows: 5,
						strExpandTag: "#AppDetails_FriendsPlayedRecentlyExpand",
					},
					a.map((e) =>
						C.createElement(Q, {
							key: e.friend.accountid,
							details: t,
							friendAndPlaytime: e,
						}),
					),
				),
			),
			C.createElement(
				V,
				{
					className: O.Ever,
					details: t,
					strHeaderTag: "#AppDetails_FriendsPlayed",
					cFriends: o.length,
				},
				C.createElement(
					K,
					{
						nMaxRows: i.length + a.length < 5 ? 6 : 2,
						strExpandTag: "#AppDetails_FriendsPlayedExpand",
					},
					o.map((e) =>
						C.createElement(Z, {
							key: e.friend.accountid,
							details: t,
							friendAndPlaytime: e,
						}),
					),
				),
			),
			C.createElement(
				V,
				{
					className: O.Wishlist,
					details: t,
					strHeaderTag: "#AppDetails_FriendsWishlisted",
					cFriends: l.length,
				},
				C.createElement(
					K,
					{
						nMaxRows: 2,
						strExpandTag: "#AppDetails_FriendsWishlistExpand",
					},
					l.map((e) =>
						C.createElement(Y, {
							key: e.friend.accountid,
							details: t,
							friendAndPlaytime: e,
						}),
					),
				),
			),
		),
	);
});
function te(e) {
	const t = X(e.appid)
		? (0, k.we)("#AppDetails_SectionTitle_Friends_Software")
		: (0, k.we)("#AppDetails_SectionTitle_Friends");
	return C.createElement(
		P.n,
		{
			feature: 4,
			className: O.FriendsSection,
			label: t,
			rightColumnSection: true,
		},
		C.createElement(
			P.n.Body,
			null,
			C.createElement(
				F.bw,
				{
					onClick: () =>
						SteamClient.Messaging.PostMessage(
							"FriendsLoader",
							"SignInToFriends",
							"{}",
						),
				},
				(0, k.PP)(
					"#AppDetails_SectionTitle_SignIn",
					C.createElement(
						"span",
						{
							style: {
								color: "white",
							},
						},
						(0, k.we)("#AppDetails_SectionTitle_SignIn_Pre"),
					),
				),
			),
		),
	);
}
export function gr(e) {
	const { details: t } = e;
	const { unAppID: r } = t;
	const n = (0, p.$2)();
	const i = $0(r);
	if (i.length === 0) {
		return null;
	} else {
		return C.createElement(
			P.n,
			{
				feature: 4,
				label: (0, k.Yp)("#AppDetails_FriendsInGameNow_Short", i.length),
				className: O.FriendsSectionPlayingNow,
				rightColumnSection: true,
			},
			C.createElement(
				P.n.Body,
				{
					className: O.PlayingNowBody,
				},
				C.createElement(
					ne,
					{
						friends: i,
					},
					(e) =>
						C.createElement(be, {
							key: e.friend.persona.m_steamid.GetAccountID(),
							appid: r,
							friendAndPlaytime: e,
							onActivate: () =>
								l.LN.ShowFriendChatDialog(n, e.friend.persona.m_steamid),
							actionDescription: (0, k.we)("#AppDetails_Friends_SendMessage"),
						}),
				),
			),
		);
	}
}
function ne(e) {
	const { children: t, friends: r } = e;
	const n = (0, T.S1)();
	return C.createElement(
		T.VJ,
		null,
		C.createElement(
			f.Z,
			{
				"flow-children": "row",
			},
			C.createElement(
				i.Q,
				{
					className: O.SummaryCarouselContainer,
					leftMargin: 32,
					edgeMask: "none",
					fnUpdateArrows: () => {},
					fnRenderScrollingDiv: ({ htmlElementRef: e, ...t }) =>
						C.createElement("div", {
							...t,
							ref: e,
							style: n,
						}),
				},
				r.map(t),
				C.createElement("div", {
					style: {
						width: "16px",
					},
					"data-carousel": "ignore",
				}),
			),
		),
	);
}
export function w4(e) {
	const t = $0(e.details.unAppID);
	const r = oG(e.details.unAppID);
	const n = _e(e.details.unAppID);
	const i = Ce(e.details.unAppID);
	if ((0, u.hb)(4)) {
		return null;
	}
	if (r.length === 0 && n.length === 0 && i.length === 0) {
		return null;
	}
	const a = t.length === 0;
	const s = n.length > 0 || i.length > 0;
	const o = i.length ? 10 : 21;
	const l = n.length ? 10 : 21;
	return C.createElement(
		"div",
		{
			className: O.FriendsContainer,
		},
		a &&
			C.createElement(L.w, {
				label: (0, k.we)("#AppDetails_FriendsSection_Title"),
			}),
		C.createElement(se, {
			...e,
			friends: r,
		}),
		s &&
			C.createElement(
				f.Z,
				{
					"flow-children": "row",
					style: {
						display: "flex",
						flexDirection: "row",
						gap: "12px",
						marginTop: "10px",
					},
				},
				C.createElement(oe, {
					...e,
					maxToShowCollapsed: l,
					friends: i,
				}),
				C.createElement(le, {
					...e,
					maxToShowCollapsed: o,
					friends: n,
				}),
			),
	);
}
function ae(e) {
	let { appid: t, friendAndPlaytime: r, mini: n } = e;
	let i = (0, s.bG)(
		"SteamIDPage",
		r.friend.persona.m_steamid.ConvertTo64BitString(),
	);
	return C.createElement(be, {
		key: r.friend.persona.m_steamid.GetAccountID(),
		appid: t,
		friendAndPlaytime: r,
		onActivate: i,
		actionDescription: (0, k.we)("#AppDetails_Friends_ViewProfile"),
		showStatus: true,
		bHideRichPresence: true,
		mini: n,
	});
}
function se(e) {
	const { details: t, friends: r } = e;
	const { unAppID: n } = t;
	if (r.length === 0) {
		return null;
	} else {
		return C.createElement(
			P.n,
			{
				feature: 4,
				className: O.RecentlyPlayedFriends,
				label: C.createElement(
					ce,
					null,
					(0, k.Yp)("#AppDetails_FriendsPlayedRecently", r.length),
				),
				rightColumnSection: true,
			},
			C.createElement(
				P.n.Body,
				null,
				C.createElement(
					ne,
					{
						friends: r,
					},
					(e) =>
						C.createElement(ae, {
							key: e.friend.persona.m_steamid.GetAccountID(),
							appid: n,
							friendAndPlaytime: e,
						}),
				),
			),
		);
	}
}
function oe(e) {
	const { details: t, maxToShowCollapsed: r, friends: n } = e;
	const { unAppID: i } = t;
	if (n.length === 0) {
		return null;
	} else {
		return C.createElement(
			P.n,
			{
				feature: 4,
				label: C.createElement(
					ce,
					null,
					(0, k.we)("#AppDetails_FriendsPlayed_Short"),
				),
				className: O.FriendsPlayingHalfSection,
				rightColumnSection: true,
			},
			C.createElement(b.hN, null, (e) =>
				C.createElement(
					P.n.Body,
					null,
					C.createElement(
						f.Z,
						{
							"flow-children": "grid",
							className: O.FriendsPlayingAvatarGrid,
						},
						(e ? n : n.slice(0, r)).map((e) =>
							C.createElement(ae, {
								key: e.friend.persona.m_steamid.GetAccountID(),
								appid: i,
								friendAndPlaytime: e,
								mini: true,
							}),
						),
					),
				),
			),
		);
	}
}
function le(e) {
	const { details: t, maxToShowCollapsed: r, friends: n } = e;
	if (n.length === 0) {
		return null;
	} else {
		return C.createElement(
			P.n,
			{
				feature: 4,
				label: C.createElement(
					ce,
					null,
					(0, k.we)("#AppDetails_FriendsWishlisted_Short"),
				),
				className: O.FriendsPlayingHalfSection,
				rightColumnSection: true,
			},
			C.createElement(b.hN, null, (e) =>
				C.createElement(
					P.n.Body,
					null,
					C.createElement(
						f.Z,
						{
							"flow-children": "grid",
							className: O.FriendsPlayingAvatarGrid,
						},
						(e ? n : n.slice(0, r)).map((e) =>
							C.createElement(me, {
								key: e.friend.persona.m_steamid.GetAccountID(),
								friend: e,
								details: t,
							}),
						),
					),
				),
			),
		);
	}
}
function ce(e) {
	return C.createElement(
		"div",
		{
			className: O.FriendsSectionSubHeading,
		},
		e.children,
	);
}
function me(e) {
	const { friend: t, details: r } = e;
	const n = (0, s.Qt)(z(t.friend, r));
	return C.createElement(be, {
		key: t.friend.persona.m_steamid.GetAccountID(),
		appid: r.unAppID,
		friendAndPlaytime: t,
		onActivate: n,
		actionDescription: (0, k.we)("#AppDetails_Friends_ViewWishlist"),
		mini: true,
	});
}
function ue(e, t, r = true) {
	return e.filter(({ friend: e }) =>
		r
			? e.persona.m_unGamePlayedAppID === t
			: e.persona.m_unGamePlayedAppID !== t,
	);
}
function de(e) {
	return e.filter((e) => !e.friend.is_blocked);
}
function Ae(e) {
	return {
		playtime: e,
		friend: m.O$.GetFriendState(new w.b(e.steamid)),
	};
}
function pe(e) {
	const { data: t } = (0, B.Nd)(e, {
		staleTime: 3600000,
	});
	return (0, C.useMemo)(
		() =>
			t && {
				in_game: t.in_game.map(Ae),
				played_recently: t.played_recently.map(Ae),
				played_ever: t.played_ever.map(Ae),
				in_wishlist: t.in_wishlist.map(Ae),
				owns: t.owns.map(Ae),
				your_info: t.your_info && Ae(t.your_info),
			},
		[t],
	);
}
export function $0(e) {
	const t = pe(e);
	return (0, h.q3)(() => {
		if (!t) {
			return [];
		}
		const r = [
			...ue(t.in_game, e),
			...ue(t.played_recently, e),
			...ue(t.played_ever, e),
		];
		const n = new Set(r.map(({ friend: e }) => e.accountid));
		const i = ue(t.in_wishlist, e).filter(
			({ friend: e }) => !n.has(e.accountid),
		);
		return de([...r, ...i]).sort(J("ingame"));
	});
}
export function oG(e) {
	const t = pe(e);
	return (0, h.q3)(() => {
		if (!t) {
			return [];
		}
		return de([
			...ue(t.in_game, e, false),
			...ue(t.played_recently, e, false),
		]).sort(J("recent"));
	});
}
function Ce(e) {
	const t = pe(e);
	return (0, h.q3)(() => {
		if (!t) {
			return [];
		}
		return de(ue(t.played_ever, e, false)).sort(J("ever"));
	});
}
function _e(e) {
	const t = pe(e);
	return (0, h.q3)(() => {
		if (!t) {
			return [];
		}
		return de(ue(t.in_wishlist, e, false)).sort(J("wishlist"));
	});
}
export function n8(e) {
	const t = (0, m.uU)(e.appid);
	if (t === 0) {
		return null;
	} else {
		return C.createElement(
			"div",
			{
				className: (0, R.A)(
					O.FriendsPlayingNowBadge,
					e.bFriendsTabOverride && O.InFriendsTab,
					e.tabSelected && O.TabSelected,
				),
			},
			C.createElement(E.Friends, {
				className: O.Icon,
			}),
			C.createElement(
				"div",
				{
					className: O.Count,
				},
				t,
			),
		);
	}
}
function be(e) {
	const {
		mini: t,
		friendAndPlaytime: r,
		appid: n,
		showStatus: i,
		onActivate: s,
		actionDescription: o,
		bHideRichPresence: l,
	} = e;
	const c = t
		? C.createElement(a.fH, {
				friend: r.friend,
				size: "Small",
				statusPosition: "bottom",
				renderPlaytime: () => U(n, r),
			})
		: C.createElement(a0, {
				friend: r.friend,
				appid: n,
				renderStatus: i
					? () =>
							C.createElement(
								"div",
								{
									className: O.PlaytimeStatus,
								},
								(0, D.l)(r.playtime.minutes_played, "#Playtime_TwoWeeks_"),
							)
					: undefined,
				renderPlaytime: () => U(n, r),
				className: O.GamepadFriendSectionItemLong,
				bHideRichPresence: l,
			});
	return C.createElement(
		f.Z,
		{
			onActivate: s,
			onOKActionDescription: o,
			focusable: true,
		},
		c,
	);
}
