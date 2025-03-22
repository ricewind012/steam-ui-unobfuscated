var n = require("./20414.js");
var i = require("./81994.js");
var a = require("./5822.js");
var s = require("./48289.js");
var o = require("./39054.js");
var l = require("./46422.js");
var c = require("./87935.js");
var m = require(/*webcrack:missing*/ "./90095.js");
var u = require(/*webcrack:missing*/ "./63696.js");
var d = require("./8090.js");
var A = require("./1521.js");
var p = require("./16117.js");
var g = require(/*webcrack:missing*/ "./90242.js");
var h = require(/*webcrack:missing*/ "./69164.js");
var C = require("./21105.js");
var _ = require(/*webcrack:missing*/ "./8573.js");
var f = require("./21920.js");
var b = require("./64608.js");
var y = require("./35488.js");
var S = require("./23337.js");
var w = require(/*webcrack:missing*/ "./90765.js");
var B = require(/*webcrack:missing*/ "./46108.js");
var v = require("./51076.js");
var I = require("./96892.js");
var E = require(/*webcrack:missing*/ "./43691.js");
const M = 25;
export function _j(e) {
	let { app: t, bVisible: r } = e;
	const n = (0, a.xv)();
	let i = (0, m.q3)(() => n.GetSelectedGuide(t.appid));
	let [s, o] = u.useState(0);
	let l = u.useRef(undefined);
	let c = u.useCallback(() => {
		n.SetSelectedGuide(t.appid, null);
		o(s + 1);
		return true;
	}, [n, t.appid, s, o]);
	let d = u.useCallback(
		(e) => {
			l.current?.PushState();
			n.SetSelectedGuide(t.appid, e);
		},
		[n, t.appid],
	);
	u.useEffect(() => {
		if (l.current) {
			l.current?.PopState();
		}
	}, [s]);
	if (r) {
		return u.createElement(
			h.Z,
			{
				retainFocus: true,
				className: I.OverlayGuides,
				navRef: l,
			},
			i &&
				u.createElement(Z, {
					appid: t.appid,
					publishedfileid: i,
					onClose: c,
				}),
			!i &&
				u.createElement(R, {
					app: t,
					onActivateGuide: d,
				}),
		);
	} else {
		return null;
	}
}
function R(e) {
	let { app: t, onActivateGuide: r } = e;
	return u.createElement(
		h.Z,
		{
			className: I.OverlayGuidesHome,
		},
		u.createElement(k, {
			app: t,
		}),
		u.createElement(D, {
			type: "Favorites",
			title: (0, B.we)("#AppOverlay_Guides_Favorites"),
			appid: t.appid,
			onActivateGuide: r,
			useGuidesQuery: o.zg,
			childComponentType: x,
		}),
		u.createElement(D, {
			type: "Popular",
			title: (0, B.we)("#AppOverlay_Guides_Popular"),
			appid: t.appid,
			onActivateGuide: r,
			useGuidesQuery: o.a,
			childComponentType: U,
		}),
	);
}
const k = (e) =>
	u.createElement(
		"div",
		{
			className: I.GuidesHomeHeader,
		},
		u.createElement(
			"div",
			{
				className: I.AppName,
			},
			e.app.display_name,
		),
		u.createElement(
			"div",
			{
				className: I.GuidesHomeHeaderDesc,
			},
			(0, B.we)("#AppOverlay_Guides_Desc", e.app.display_name),
		),
	);
function D(e) {
	const {
		type: t,
		title: r,
		className: n,
		childComponentType: a,
		appid: s,
		onActivateGuide: o,
		useGuidesQuery: l,
	} = e;
	const c = a;
	let [m, d] = (0, v.SP)(`${t}_${s}_page`, 1);
	let A = l(s, m);
	let p = A.data;
	let g = A.isSuccess && (p.totalpages > 1 || m > p.totalpages);
	const C = u.useCallback(
		(e) => {
			if (A.isSuccess) {
				let t = A.data;
				let r = m + e;
				if (r >= 1 && r <= t.totalpages) {
					d(r);
				}
			}
		},
		[m, d, A],
	);
	return u.createElement(
		h.Z,
		{
			navKey: t,
			"flow-children": "column",
			className: (0, w.A)(I.GuideList, n),
		},
		u.createElement(
			h.Z,
			{
				className: I.Header,
			},
			u.createElement(N, null, r),
			A.isSuccess &&
				u.createElement(
					h.Z,
					{
						className: (0, w.A)(!g && I.Hidden, I.PagingControls),
						fnCanTakeFocus: () => g,
					},
					u.createElement(
						b.$n,
						{
							className: I.PagingButton,
							onClick: () => C(-1),
							disabled: m <= 1,
							focusable: m > 1,
						},
						"<",
					),
					u.createElement(
						"div",
						{
							className: I.PageNumber,
						},
						p.page,
						" / ",
						Math.max(p.totalpages, 1),
					),
					u.createElement(
						b.$n,
						{
							className: I.PagingButton,
							onClick: () => C(1),
							disabled: m >= p.totalpages,
							focusable: m < p.totalpages,
						},
						">",
					),
				),
		),
		A.isLoading &&
			u.createElement(
				h.Z,
				{
					focusable: true,
				},
				u.createElement(i.j, {
					showFooter: true,
				}),
			),
		!A.isSuccess &&
			!A.isLoading &&
			u.createElement(
				h.Z,
				{
					className: I.LoadingGuidesError,
					focusable: true,
				},
				(0, B.we)("#AppOverlay_Guides_Error"),
			),
		A.isSuccess &&
			!A.isLoading &&
			p.totalpages == 0 &&
			u.createElement(
				h.Z,
				{
					className: I.NoGuides,
					focusable: true,
				},
				(0, B.we)("#AppOverlay_Guides_None"),
			),
		A.isSuccess &&
			p.publishedfiledetails.map((e) =>
				u.createElement(c, {
					navKey: `${t}_${e.publishedfileid}`,
					key: e.publishedfileid,
					details: e,
					onActivateGuide: o,
				}),
			),
	);
}
const N = (e) =>
	u.createElement(
		"div",
		{
			className: I.ListTitle,
		},
		e.children,
	);
function F(e) {
	const { details: t, onActivateGuide: r, ...n } = e;
	if (t.result != 1) {
		return null;
	} else {
		return u.createElement(
			h.Z,
			{
				focusable: true,
				className: I.GuideListItemBase,
				...n,
				onActivate: () => r(t.publishedfileid),
			},
			u.createElement(
				"div",
				{
					className: I.Container,
				},
				u.createElement(
					"div",
					{
						className: I.Media,
					},
					u.createElement(L, {
						details: t,
					}),
				),
				u.createElement(
					"div",
					{
						className: I.Content,
					},
					u.createElement(
						z,
						{
							className: I.GuideContent,
						},
						u.createElement(
							h.Z,
							{
								style: {
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								},
							},
							u.createElement(
								G,
								null,
								l.oy.TextFilterStore.FilterText(t.creator, t.title),
							),
							u.createElement(sn, {
								details: t,
							}),
						),
						u.createElement(O, {
							steamid: t.creator,
						}),
						u.createElement(
							P,
							null,
							l.oy.TextFilterStore.FilterText(t.creator, t.short_description) +
								(t.short_description.length == 256 ? "..." : ""),
						),
					),
				),
			),
		);
	}
}
const G = (e) =>
	u.createElement(
		"div",
		{
			className: I.GuideTitle,
		},
		e.children,
	);
const O = (e) => {
	let t = (0, m.q3)(() => s.O$.GetFriendState(new _.b(e.steamid)).display_name);
	return u.createElement(
		"div",
		{
			className: I.GuideAuthor,
		},
		(0, B.we)("#AppOverlay_Guides_Author", t),
	);
};
const P = (e) =>
	u.createElement(
		"div",
		{
			className: I.GuideDescription,
		},
		e.children,
	);
const L = (e) =>
	u.createElement(S.o, {
		className: (0, w.A)(e.className, I.GuideImage),
		srcs: [e.details.preview_url + (0, f._o)(128, 128)],
	});
const z = (e) =>
	u.createElement(
		"div",
		{
			className: (0, w.A)(I.VerticalContent, e.className),
		},
		e.children,
	);
function x(e) {
	const { details: t, onActivateGuide: r, ...n } = e;
	return u.createElement(F, {
		details: t,
		onActivateGuide: r,
		...n,
	});
}
function U(e) {
	const { details: t, onActivateGuide: r, ...n } = e;
	return u.createElement(F, {
		details: t,
		onActivateGuide: r,
		...n,
	});
}
function W(e) {
	const { text: t, details: r } = e;
	const n = u.useMemo(
		() =>
			new Map([
				...Array.from(p.W4),
				...Array.from(p.N2),
				[
					"img",
					{
						Constructor: V,
						autocloses: false,
					},
				],
				[
					"previewimg",
					{
						Constructor: j,
						autocloses: false,
						skipFollowingNewline: true,
					},
				],
				[
					"previewicon",
					{
						Constructor: j,
						autocloses: false,
					},
				],
				[
					"screenshot",
					{
						Constructor: q,
						autocloses: false,
					},
				],
				[
					"publishedfile",
					{
						Constructor: Q,
						autocloses: false,
					},
				],
			]),
		[],
	);
	const i = u.useCallback((e) => new A.OJ(new A.R8(), 0), []);
	const a = u.useRef(undefined);
	a.current ||= new d.B(n, i, E.TS.LANGUAGE);
	return a.current.ParseBBCode(t, {
		details: r,
	});
}
function V(e) {
	const t = e.children?.toString();
	if (t) {
		return u.createElement("img", {
			src: t,
		});
	} else {
		return null;
	}
}
function H(e) {
	let t = "";
	let r = [I.SharedFilePreviewImage];
	e.forEach((e) => {
		switch (e) {
			case "sizeThumb":
				r.push(I.SizeThumb);
				break;
			case "sizeFull":
			case "full":
				r.push(I.SizeFull);
				break;
			case "sizeOriginal":
			case "original":
				r.push(I.SizeOriginal);
				break;
			case "floatLeft":
				r.push(I.FloatLeft);
				break;
			case "floatRight":
				r.push(I.FloatRight);
				break;
			case "inline":
				break;
			case "leftthumb":
				r.push(I.SizeThumb);
				r.push(I.FloatLeft);
				t = "512x0.resizedimage";
				break;
			case "rightthumb":
				r.push(I.SizeThumb);
				r.push(I.FloatRight);
				t = "512x0.resizedimage";
		}
	});
	return {
		cssClassNames: (0, w.A)(...r),
		extension: t,
	};
}
function j(e) {
	let t = e.context.details;
	let r = p.j$(e.args);
	let n = r?.split(";");
	if (!n || n.length < 2) {
		return null;
	}
	let i = n[0];
	let a = H(n[1].split(","));
	let s = (function (e, t) {
		for (let r = 0; r < t.previews.length; ++r) {
			let n = t.previews[r];
			if (n.previewid == e) {
				return n.url;
			}
		}
		return "";
	})(i, t);
	let o = e.children?.toString();
	return u.createElement("img", {
		className: a.cssClassNames,
		src: s + a.extension,
		title: o,
	});
}
function q(e) {
	let t = p.j$(e.args);
	let r = t?.split(";");
	if (!r || r.length < 2) {
		return null;
	}
	let n = r[0];
	let i = H(r[1].split(","));
	let a = r[2]
		.replace(".steampowered.com", ".steamusercontent.com")
		.replace("http://", "https://");
	if (!a.startsWith("https://")) {
		a = "https://" + a;
	}
	let s = e.children?.toString();
	let o = c.B7.BuildSteamURL("CommunityFilePage", n);
	return u.createElement(
		g.Ii,
		{
			href: o,
		},
		u.createElement("img", {
			className: i.cssClassNames,
			src: a + i.extension,
			title: s,
		}),
	);
}
function Q(e) {
	let t = p.j$(e.args);
	let r = t?.split(";");
	let n = r?.length == 1 ? r[0] : null;
	let i = o.cH(n);
	if (!i.isSuccess || !i.data) {
		return null;
	}
	const a = i.data;
	const s = c.B7.BuildSteamURL("CommunityFilePage", n);
	return u.createElement(
		g.Ii,
		{
			href: s,
		},
		u.createElement(L, {
			details: a,
		}),
		u.createElement(
			h.Z,
			null,
			l.oy.TextFilterStore.FilterText(a.creator, a.title),
		),
		u.createElement(
			h.Z,
			null,
			l.oy.TextFilterStore.FilterText(a.creator, a.short_description),
		),
	);
}
function Z(e) {
	const { appid: t, publishedfileid: r, onClose: n } = e;
	let a = o.CD(t, r);
	let s = o.Gr(r);
	let c = u.useRef(new Map());
	const m = u.useCallback((e, t) => {
		c.current.set(e, t);
	}, []);
	const d = u.useCallback(
		(e) => {
			let t = c.current.get(e);
			if (t) {
				t.TakeFocus();
			}
		},
		[c],
	);
	return u.createElement(
		h.Z,
		{
			className: I.GuideDetails,
			onCancelButton: n,
			retainFocus: true,
			focusableIfNoChildren: true,
		},
		(a.isLoading || s.isLoading) &&
			u.createElement(
				h.Z,
				{
					noFocusRing: true,
					focusable: true,
					style: {
						height: "100%",
					},
				},
				u.createElement(
					i.j,
					{
						showFooter: true,
					},
					(0, B.we)("#AppOverlay_Guides_Loading"),
				),
			),
		a.isSuccess &&
			s.isSuccess &&
			u.createElement(
				h.Z,
				{
					className: I.GuideDetailsContainer,
				},
				u.createElement(
					C.iq,
					{
						name: "OverlayGuide_" + a.data.publishedfileid,
						className: I.GuideSubSections,
						scrollPaddingTop: 20,
						scrollPaddingBottom: 20,
					},
					u.createElement(
						h.Z,
						{
							className: I.GuideDetailsHeader,
							navRef: (e) => m("overview", e),
							focusable: true,
							noFocusRing: true,
						},
						u.createElement(L, {
							details: a.data,
						}),
						u.createElement(
							"div",
							null,
							u.createElement(
								h.Z,
								{
									className: I.GuideDetailsTitle,
								},
								l.oy.TextFilterStore.FilterText(a.data.creator, a.data.title),
							),
							u.createElement(O, {
								steamid: a.data.creator,
							}),
						),
						u.createElement(
							"div",
							{
								style: {
									marginLeft: "auto",
								},
							},
							u.createElement(sn, {
								details: a.data,
								bShowTotalRatings: true,
							}),
						),
					),
					u.createElement(J, {
						details: a.data,
					}),
					u.createElement(
						h.Z,
						{
							className: I.GuideDetailsDesc,
						},
						u.createElement(W, {
							text: l.oy.TextFilterStore.FilterText(
								a.data.creator,
								a.data.file_description,
							),
							details: a.data,
						}),
					),
					s.data.map((e) =>
						u.createElement(K, {
							navRef: (t) => m(e.sectionid, t),
							key: e.sectionid,
							details: a.data,
							subSection: e,
						}),
					),
				),
				u.createElement(Y, {
					details: a.data,
					rgSubSections: s.data,
					onSelectSubsection: d,
				}),
			),
	);
}
function Y(e) {
	let { details: t, rgSubSections: r, onSelectSubsection: n } = e;
	return u.createElement(
		C.MS,
		{
			className: I.TableOfContents,
		},
		u.createElement(
			h.Z,
			{
				key: "overview",
				className: I.TOCEntry,
				onActivate: () => n("overview"),
				focusable: true,
			},
			(0, B.we)("#AppOverlay_Guides_TOC_Overview"),
		),
		r.map((e) =>
			e.title.length > 0
				? u.createElement(
						h.Z,
						{
							key: e.sectionid,
							className: I.TOCEntry,
							onActivate: () => n(e.sectionid),
							focusable: true,
						},
						u.createElement(W, {
							text: l.oy.TextFilterStore.FilterText(t.creator, e.title),
							details: t,
						}),
					)
				: null,
		),
	);
}
function K(e) {
	let { details: t, subSection: r, navRef: n } = e;
	return u.createElement(
		h.Z,
		{
			className: I.SubSection,
		},
		u.createElement(
			h.Z,
			{
				className: I.SubSectionTitle,
				navRef: n,
				focusable: true,
				noFocusRing: true,
			},
			u.createElement(W, {
				text: l.oy.TextFilterStore.FilterText(t.creator, r.title),
				details: t,
			}),
		),
		u.createElement(
			h.Z,
			{
				className: I.SubSectionDesc,
			},
			u.createElement(W, {
				text: l.oy.TextFilterStore.FilterText(t.creator, r.description_text),
				details: t,
			}),
		),
	);
}
export function sn(e) {
	let { details: t, bShowTotalRatings: r } = e;
	let n = t.vote_data.votes_up + t.vote_data.votes_down;
	let i = Math.ceil(t.vote_data.score * 5);
	let a = n >= M;
	let s = [];
	for (let e = 0; e < 5; ++e) {
		s.push(
			e + 1 <= i && a
				? u.createElement(y.Star, {
						className: I.UGCRatingStar,
					})
				: u.createElement(y.EmptyStar, {
						className: I.UGCRatingStar,
					}),
		);
	}
	return u.createElement(
		"div",
		{
			className: I.UGCRating,
		},
		u.createElement(
			"div",
			{
				className: I.UGCRatingStars,
			},
			...s,
		),
		u.createElement(
			"div",
			{
				className: I.UGCTotalRatings,
			},
			r && a && (0, B.we)("#AppOverlay_Guides_TotalRatings", n),
			r && !a && (0, B.we)("#AppOverlay_Guides_TotalRatings_NotEnough"),
		),
	);
}
function J(e) {
	let { details: t } = e;
	return u.createElement(
		h.Z,
		{
			className: I.UGCControls,
		},
		u.createElement($, {
			nAppID: t.consumer_appid,
			publishedfileid: t.publishedfileid,
		}),
		u.createElement(ee, {
			nAppID: t.consumer_appid,
			publishedfileid: t.publishedfileid,
		}),
	);
}
function $(e) {
	let { nAppID: t, publishedfileid: r } = e;
	let i = o.I$(r);
	let a = i.isSuccess && i.data && i.data.get(r)?.vote == n.bJ.Up;
	let s = i.isSuccess && i.data && i.data.get(r)?.vote == n.bJ.Down;
	const l = u.useCallback(
		(e) => {
			if (i.isSuccess) {
				o.GK(r, e);
			}
		},
		[i, r],
	);
	return u.createElement(
		u.Fragment,
		null,
		u.createElement(
			b.$n,
			{
				className: (0, w.A)(I.UGCButton, I.VotingButton),
				onClick: () => l(n.bJ.Up),
			},
			u.createElement(y.ThumbsUp, {
				className: (0, w.A)(I.VoteIcon, a ? I.ThumbsUpColor : ""),
			}),
		),
		u.createElement(
			b.$n,
			{
				className: (0, w.A)(I.UGCButton, I.VotingButton),
				onClick: () => l(n.bJ.Down),
			},
			u.createElement(y.ThumbsDown, {
				className: (0, w.A)(I.VoteIcon, s ? I.ThumbsDownColor : ""),
			}),
		),
	);
}
function ee(e) {
	let { nAppID: t, publishedfileid: r } = e;
	let n = o.wX(t, r);
	let i = n.isSuccess && n.data;
	const a = u.useCallback(() => {
		if (n.isSuccess) {
			o.Jm(t, r, !n.data);
		}
	}, [n, t, r]);
	return u.createElement(
		b.$n,
		{
			className: I.UGCButton,
			onClick: a,
		},
		(0, B.we)(
			i
				? "#AppOverlay_Guides_Favorites_Remove"
				: "#AppOverlay_Guides_Favorites_Add",
		),
	);
}
