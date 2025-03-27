import {
	LocalizeRTimeToHourAndMinutes,
	LocalizeTimeSince,
	ETimeSinceSuffix,
	qZ,
} from "../../actual_src/utils/localization/datetime.js";
import {
	LocalizeRtime32ToShorterDate,
	Localize,
	LocalizeReact,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import { IsDateSameDay } from "../../actual_src/utils/time.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useCallback } from "./63696.js";
import i, { tB } from "./59351.js";
import a, { q3 } from "./90095.js";
import s, { PA } from "./41230.js";
import o, { fL, ey } from "./44846.js";
import l from "./35488.js";
import c, { bG, Qt } from "./18057.js";
import m from "./83247.js";
import A from "./96593.js";
import p from "./87935.js";
import g, { no } from "./60917.js";
import h, { tG, bV } from "./48289.js";
import C from "./8573.js";
import _ from "./69164.js";
import f from "./57665.js";
import b, { A as A_1 } from "./90765.js";
import y from "./87913.js";
import S, { rO } from "./88724.js";
import B, { e_ as e, VI } from "./34792.js";
import v from "./23861.js";
import I, { as } from "./22091.js";
import E, { TR } from "./74416.js";
import M, { XW, hf, Qn, uI } from "./72476.js";
import T, { Qo, gh } from "./47356.js";
import R, { qw } from "./89748.js";
import k from "./73317.js";
import { f_ as f_2 } from "./67863.js";
import { G3 } from "./46375.js";
import G, { uT } from "./5822.js";
import { $2 } from "./96680.js";
import { k1 } from "./13688.js";
import { br } from "./18869.js";
import z from "./48248.js";
import { hr, T4, n8, V4, bP, IC, sR, aq, u5, K9, iO, OT, IL } from "./655.js";
import { p$ } from "./88475.js";
import { pg } from "./13869.js";
import H from "./10606.js";
import { mZ, t7 } from "./82594.js";
import q from "./6496.js";
import Q from "./88750.js";
import Z, { lX } from "./31084.js";
import X from "./21728.js";
import ee from "./65067.js";
import te from "./58394.js";
import { TB } from "./78771.js";
import ie from "./50376.js";
import _e from "./75883.js";
import { w } from "./49455.js";
import Be from "./30449.js";
import Ee from "./72905.js";
import { aL } from "./92059.js";
import { FD } from "./3499.js";
import Re from "./46422.js";
import { T as T_2 } from "./78057.js";
const x = z;
function Y(e) {
	return e == 1;
}
function K(e, t) {
	return n.useCallback(
		(r) => {
			if (e) {
				e(r);
			}
			if (t) {
				t();
			}
		},
		[e, t],
	);
}
const J = X;
function $(e) {
	let {
		onActivate: t,
		onDismiss: r,
		logo: i,
		icon: a,
		title: s,
		body: o,
		personaStatus: l,
		className: c,
		singleLineOnly: m,
		fullWidth: u,
	} = e;
	let d = K(t, r);
	return n.createElement(
		_.Z,
		{
			className: A_1(J.ShortTemplate, !m && J.TwoLine, c),
			onActivate: d,
			onMouseDown: (e) => {
				if (e.button == 1 && r) {
					r();
				}
			},
		},
		n.createElement(
			"div",
			{
				className: J.ShortLogoDimensions,
			},
			i,
		),
		e.personaStatus &&
			n.createElement("div", {
				className: A_1(J.AvatarStatus, l),
			}),
		n.createElement(
			"div",
			{
				className: A_1(J.Content, u && J.FullWidth),
			},
			n.createElement(
				"div",
				{
					className: J.Header,
				},
				n.createElement(
					"div",
					{
						className: J.Icon,
					},
					a,
				),
				n.createElement(
					"div",
					{
						className: J.Title,
					},
					s,
				),
			),
			n.createElement(
				"div",
				{
					className: J.Body,
				},
				o,
			),
		),
	);
}
const re = te;
function ae(e) {
	switch (e) {
		case 6: {
			return n.createElement(ie.ilR, null);
		}
		case 11: {
			return n.createElement(ie.Cv4, null);
		}
		default: {
			return n.createElement(ie.Qte, null);
		}
	}
}
function se(e) {
	let {
		fallbackLogo: t,
		app: r,
		data: i,
		location: a,
		icon: s,
		timestamp: o,
		fnRenderTimestamp: l,
		onHide: c,
	} = e;
	const m = typeof i?.image == "number";
	const u = i?.display_name ?? "";
	const d = i?.title ?? i?.body;
	const A = i?.title ? i.body : null;
	const p = Y(a);
	const g = m && !r;
	const [h, C] = n.useState(false);
	const _ = () => C(true);
	let f = null;
	if (m) {
		f = ge(r, t, p);
	} else {
		const e = p ? re.ShortLogoDimensions : re.StandardLogoDimensions;
		f =
			i?.image && !h
				? n.createElement("img", {
						className: e,
						src: i.image,
						onError: _,
					})
				: t;
	}
	if (p) {
		return n.createElement($, {
			...e,
			logo: f,
			icon: s,
			title: u,
			body: d,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					logo: f,
					bLoading: g,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: s,
					title: u,
					timestamp: o,
					location: a,
					fnRenderTimestamp: l,
				}),
				n.createElement(
					ee.NF,
					{
						multiline: !A,
					},
					d,
				),
				!!A && n.createElement(ee.C0, null, A),
				c
					? n.createElement(he, {
							onHide: c,
						})
					: null,
			),
		);
	}
}
function oe(e) {
	let {
		displayName: t,
		location: r,
		icon: i,
		timestamp: a,
		fnRenderTimestamp: s,
		onHide: o,
	} = e;
	const l = Y(r);
	const c = Localize("#SteamNotifications_TradeOffer_Title");
	const m = l
		? Localize("#SteamNotifications_TradeOffer_Body_Short", t ?? "")
		: Localize("#SteamNotifications_TradeOffer_Body");
	const u = Localize("#SteamNotifications_TradeOffer_Description", t ?? "");
	const A = !t;
	if (l) {
		return n.createElement($, {
			...e,
			logo: e.logo,
			icon: e.icon,
			title: c,
			body: m,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					bLoading: A,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: i,
					title: c,
					timestamp: a,
					location: r,
					fnRenderTimestamp: s,
				}),
				n.createElement(ee.NF, null, m),
				n.createElement(ee.C0, null, u),
				o
					? n.createElement(he, {
							onHide: o,
						})
					: null,
			),
		);
	}
}
function le(e) {
	let {
		senderName: t,
		location: r,
		icon: i,
		timestamp: a,
		fnRenderTimestamp: s,
		onHide: o,
	} = e;
	const l = Y(r);
	const c = l
		? Localize("#Notification_GiftReceived_Body_Short", t ?? "")
		: Localize("#Notification_GiftReceived_Body");
	const m = t ? Localize("#Notification_GiftReceived_Description", t) : null;
	const u = Localize("#Notification_GiftReceived_Title");
	const A = !t;
	if (l) {
		return n.createElement($, {
			...e,
			logo: e.logo,
			icon: e.icon,
			title: u,
			body: c,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					bLoading: A,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: i,
					title: u,
					timestamp: a,
					location: r,
					fnRenderTimestamp: s,
				}),
				n.createElement(
					ee.NF,
					{
						multiline: !m,
					},
					c,
				),
				!!m && n.createElement(ee.C0, null, m),
				o
					? n.createElement(he, {
							onHide: o,
						})
					: null,
			),
		);
	}
}
function ce(e) {
	let {
		requestorName: t,
		requestorAvatarURL: r,
		fallbackLogo: i,
		data: a,
		location: s,
		icon: o,
		timestamp: l,
		fnRenderTimestamp: c,
		onHide: m,
	} = e;
	const u = Y(s);
	let A = "";
	if (t && a.state == 2) {
		A = Localize(
			"#SteamNotifications_FriendInvite_Description_AwaitingResponse",
		);
	} else if (t && a.state == 3) {
		A = Localize("#SteamNotifications_FriendInvite_Description_Friends");
	} else if (t) {
		A = Localize("#SteamNotifications_FriendInvite_Description");
	}
	const [p, g] = n.useState(false);
	const h = () => g(true);
	let C = i;
	if (r && !p) {
		const e = a.state == 3 && s != 1;
		const t = u ? re.ShortLogoDimensions : re.StandardLogoDimensions;
		C = n.createElement(
			_.Z,
			{
				style: {
					position: "relative",
				},
			},
			e &&
				n.createElement(ie.GSe, {
					className: re.FriendIndicator,
				}),
			n.createElement("img", {
				className: t,
				src: r,
				onError: h,
			}),
		);
	}
	const f = t || Localize("#SteamNotifications_FriendInvite_Body_Generic");
	const b = !t;
	if (u) {
		return n.createElement($, {
			...e,
			logo: C,
			icon: e.icon,
			title: Localize("#Notification_FriendInvite_Title"),
			body: f,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					logo: C,
					bLoading: b,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: o,
					title: Localize("#Notification_FriendInvite_Title"),
					timestamp: l,
					location: s,
					fnRenderTimestamp: c,
				}),
				n.createElement(
					ee.NF,
					{
						multiline: !A,
					},
					f,
				),
				!!A && n.createElement(ee.C0, null, A),
				m
					? n.createElement(he, {
							onHide: m,
						})
					: null,
			),
		);
	}
}
function me(e) {
	let {
		itemState: t,
		fallbackLogo: r,
		data: i,
		location: a,
		icon: s,
		timestamp: o,
		fnRenderTimestamp: l,
		nUnread: c,
		onHide: m,
	} = e;
	const [u, A] = n.useState(false);
	const p = () => A(true);
	const g = Y(a);
	let h = r;
	if (t?.item_data?.icon_url && !u) {
		let e = `${M.TS.COMMUNITY_CDN_URL}economy/image/${t.item_data.icon_url}`;
		let r = t.item_data.background_color
			? `#${t.item_data.background_color}`
			: null;
		const i = g ? re.ShortLogoDimensions : re.StandardLogoDimensions;
		h = n.createElement(
			_.Z,
			{
				style: {
					position: "relative",
				},
			},
			n.createElement("img", {
				className: i,
				style: {
					backgroundColor: r ?? undefined,
					justifyContent: "center",
				},
				src: e,
				onError: p,
			}),
		);
	}
	const C = parseInt(i.appid) == 753;
	let f = null;
	if (c !== undefined && c > 1) {
		const e = c - 1;
		f = C
			? Localize("#Notification_Item_RollupMore_Steam", e)
			: t?.app_name
				? Localize("#Notification_Item_RollupMore_GameName", e, t.app_name)
				: Localize("#Notification_Item_RollupMore", e);
	} else if (t?.app_name) {
		f = C
			? t.app_name
			: Localize("#Notification_Item_Single_GameName", t.app_name);
	}
	const b = t?.item_data?.name
		? t.item_data.name
		: Localize("#Notification_Item_Body_Generic");
	const y = !t || !t.item_data;
	if (g) {
		let r = "";
		r = t?.app_name
			? c > 1
				? Localize("#Notification_Item_Body_Short_Plural", t?.app_name)
				: Localize("#Notification_Item_Body_Short", t?.app_name)
			: Localize("#Notification_Item_Body_Generic");
		return n.createElement($, {
			...e,
			logo: h,
			icon: e.icon,
			title: Localize("#Notification_ItemAnnouncement_Body"),
			body: r,
		});
	}
	return n.createElement(
		Ce,
		null,
		n.createElement(
			ee.FG,
			{
				logo: h,
				bLoading: y,
				...e,
			},
			n.createElement(ee.OJ, {
				icon: s,
				title: Localize("#Notification_ItemAnnouncement_TitleLong"),
				timestamp: o,
				location: a,
				fnRenderTimestamp: l,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: !f,
				},
				b,
			),
			!!f && n.createElement(ee.C0, null, f),
			m
				? n.createElement(he, {
						onHide: m,
					})
				: null,
		),
	);
}
function ue(e) {
	let {
		fallbackLogo: t,
		app: r,
		data: i,
		location: a,
		icon: s,
		timestamp: o,
		fnRenderTimestamp: l,
		onHide: c,
	} = e;
	const m = Y(a);
	const u = ge(r, t, m);
	const A = !r;
	let p = "";
	if (i.state == 1) {
		p =
			m && r?.GetName()
				? Localize("#SteamNotification_AsyncGame_Action_Short", r.GetName())
				: Localize("#SteamNotification_AsyncGame_Action");
	} else if (i.state == 2) {
		p =
			m && r?.GetName()
				? Localize("#SteamNotification_AsyncGame_Done_Short", r.GetName())
				: Localize("#SteamNotification_AsyncGame_Done");
	}
	if (m) {
		return n.createElement($, {
			...e,
			logo: u,
			icon: e.icon,
			title: Localize("#SteamNotification_AsyncGame_Title"),
			body: p,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					logo: u,
					bLoading: A,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: s,
					title: Localize("#SteamNotification_AsyncGame_Title"),
					timestamp: o,
					location: a,
					fnRenderTimestamp: l,
				}),
				n.createElement(ee.NF, null, p),
				n.createElement(ee.C0, null, r?.GetName()),
				c
					? n.createElement(he, {
							onHide: c,
						})
					: null,
			),
		);
	}
}
function de(e) {
	const {
		title: t,
		body: r,
		logoUrl: i,
		bDataLoading: a,
		icon: s,
		onHide: o,
		location: l,
		timestamp: c,
		fnRenderTimestamp: m,
		onActivate: u,
		personaStatus: d,
	} = e;
	const A = Y(l);
	const p = A ? re.ShortLogoDimensions : re.StandardLogoDimensions;
	const g = n.createElement(
		_.Z,
		{
			style: {
				position: "relative",
			},
		},
		n.createElement("img", {
			className: p,
			style: {
				justifyContent: "center",
			},
			src: i,
		}),
	);
	if (A) {
		return n.createElement($, {
			logo: g,
			icon: e.icon,
			title: t,
			body: r,
			onActivate: u,
			personaStatus: d,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					logo: g,
					bLoading: a,
					onActivate: u,
					personaStatus: d,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: s,
					title: t,
					timestamp: c,
					location: l,
					fnRenderTimestamp: m,
				}),
				n.createElement(
					ee.NF,
					{
						multiline: true,
					},
					r,
				),
				o
					? n.createElement(he, {
							onHide: o,
						})
					: null,
			),
		);
	}
}
function Ae(e) {
	let {
		currentUserSteamID: t,
		fallbackLogo: r,
		postedByDisplayName: i,
		postedByAvatarURL: a,
		ownerDisplayName: s,
		data: o,
		location: l,
		icon: c,
		timestamp: m,
		fnRenderTimestamp: u,
		nUnread: A,
		app: p,
		onHide: g,
		commentTitle: h,
		commentBody: C,
	} = e;
	let _ = h;
	const f = Y(l);
	const [b, y] = n.useState(false);
	const S = () => y(true);
	const [w, B] = TB(
		o.bclan_account ? o.owner_steam_id?.GetAccountID() : undefined,
	);
	const v = hr(o) ? i : null;
	const I = T4(o) ? s : null;
	if (o.comment_type == 10) {
		_ =
			o.owner_steam_id?.ConvertTo64BitString() == t
				? l == 4 && v
					? Localize("#SteamNotifications_Comment_Your_Profile_By", v)
					: Localize("#SteamNotifications_Comment_Your_Profile")
				: I
					? l == 4 && v
						? Localize("#SteamNotifications_Comment_Player_Profile_By", v, I)
						: Localize("#SteamNotifications_Comment_Player_Profile", I)
					: Localize("#SteamNotifications_Comment_Profile");
	} else if (o.comment_type == 5 && o.json_data?.file_type == 5) {
		_ =
			o.owner_steam_id?.ConvertTo64BitString() == t
				? p
					? Localize(
							"#SteamNotifications_Comment_Your_Screenshot_Game",
							p.GetName(),
						)
					: Localize("#SteamNotifications_Comment_Your_Screenshot")
				: p
					? Localize("#SteamNotifications_Comment_Screenshot_Game", p.GetName())
					: Localize("#SteamNotifications_Comment_Screenshot");
	} else if (!_ && o.json_data?.title) {
		_ = o.json_data.title;
	}
	let E = null;
	E =
		o.comment_type == 7 && o.bis_forum && C
			? n.createElement(
					ee.C0,
					null,
					Localize("#SteamNotifications_Comment_NewDiscussion", C),
				)
			: n.createElement(ee.C0, null, '"', C, '"');
	let M = Localize("#SteamNotifications_Comment");
	let T = null;
	if (A !== undefined && A > 1) {
		const e = `+${A - 1}`;
		if (l == 4) {
			T = n.createElement(
				"div",
				{
					className: re.AllNotificationsCommentPlus,
				},
				e,
			);
		} else {
			M = `${M} ${e}`;
		}
	}
	let R = r;
	if (!b) {
		const e = f ? re.ShortLogoDimensions : re.StandardLogoDimensions;
		if (a && n8(o)) {
			const t = o.bhas_friend && l != 1;
			R = n.createElement(
				"div",
				{
					style: {
						position: "relative",
					},
				},
				t &&
					n.createElement(ie.GSe, {
						className: re.FriendIndicator,
					}),
				n.createElement("img", {
					className: e,
					src: a,
					onError: S,
				}),
			);
		} else if (B?.avatar_medium_url) {
			R = n.createElement("img", {
				className: e,
				src: B.avatar_medium_url,
				onError: S,
			});
		}
	}
	if (f) {
		return n.createElement($, {
			...e,
			logo: R,
			icon: e.icon,
			title: M,
			body: _,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					logo: R,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: c,
					title: M,
					timestamp: m,
					location: l,
					fnRenderTimestamp: u,
				}),
				n.createElement(ee.NF, null, _),
				E,
				T,
				g
					? n.createElement(he, {
							onHide: g,
						})
					: null,
			),
		);
	}
}
function pe(e) {
	let {
		app: t,
		fallbackLogo: r,
		data: i,
		location: a,
		icon: s,
		timestamp: o,
		fnRenderTimestamp: l,
		onHide: c,
	} = e;
	const m = Y(a);
	const u = ge(t, r, m);
	const A = i.appid && !t;
	let p = "";
	let g = null;
	if (t) {
		p = t.GetName();
		if (i.count == 1) {
			if (m) {
				p = LocalizeReact(
					"#SteamNotifications_Wishlist_OnSale_Single_Short",
					n.createElement("span", null, t.GetName()),
					n.createElement(
						"span",
						{
							style: {
								color: "#FFFFFF",
							},
						},
						t.GetBestPurchasePriceFormatted(),
					),
				);
			} else {
				g = LocalizeReact(
					"#SteamNotifications_Wishlist_OnSale_Single",
					n.createElement(
						"span",
						{
							style: {
								color: "#FFFFFF",
							},
						},
						t.GetBestPurchasePriceFormatted(),
					),
				);
			}
		} else if (i.count == 2) {
			if (m) {
				p = Localize(
					"#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
					t.GetName(),
				);
			} else {
				g = Localize("#SteamNotifications_Wishlist_OnSale_PlusOne");
			}
		} else if (m) {
			p = Localize(
				"#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
				t.GetName(),
				i.count - 1,
			);
		} else {
			g = Localize("#SteamNotifications_Wishlist_OnSale_PlusMany", i.count - 1);
		}
	} else {
		p = Localize("#SteamNotifications_Wishlist_Generic");
	}
	if (m) {
		return n.createElement($, {
			...e,
			logo: u,
			icon: e.icon,
			title: Localize("#SteamNotifications_Wishlist"),
			body: p,
		});
	} else {
		return n.createElement(
			Ce,
			null,
			n.createElement(
				ee.FG,
				{
					logo: u,
					bLoading: A,
					...e,
				},
				n.createElement(ee.OJ, {
					icon: s,
					title: Localize("#SteamNotifications_Wishlist"),
					timestamp: o,
					location: a,
					fnRenderTimestamp: l,
				}),
				n.createElement(
					ee.NF,
					{
						multiline: !g,
					},
					p,
				),
				!!g && n.createElement(ee.C0, null, g),
				c
					? n.createElement(he, {
							onHide: c,
						})
					: null,
			),
		);
	}
}
function ge(e, t, r = false) {
	const [i, a] = n.useState(false);
	const s = () => a(true);
	if (!e || i) {
		return n.createElement(
			_.Z,
			{
				style: {
					position: "relative",
				},
			},
			t,
		);
	} else if (r) {
		return n.createElement(
			_.Z,
			{
				style: {
					position: "relative",
				},
			},
			n.createElement("img", {
				src: e?.GetAssets()?.GetCommunityIconURL(),
				className: re.ShortLogoDimensions,
				onError: s,
			}),
		);
	} else {
		return n.createElement(
			_.Z,
			{
				style: {
					position: "relative",
				},
			},
			n.createElement("img", {
				className: A_1(re.WishlistBlurImage),
				src: e?.GetAssets()?.GetCommunityIconURL(),
				onError: s,
			}),
			n.createElement("img", {
				src: e?.GetAssets()?.GetCommunityIconURL(),
				onError: s,
				style: {
					position: "absolute",
					left: 7,
					top: 7,
					height: 32,
					width: 32,
				},
			}),
		);
	}
}
function he(e) {
	return n.createElement(
		"div",
		{
			className: re.HideButton,
			onClick: (t) => {
				e.onHide();
				t.stopPropagation();
				t.preventDefault();
			},
			onMouseDown: (e) => {
				e.stopPropagation();
				e.preventDefault();
			},
		},
		n.createElement(ie.zHo, null),
	);
}
function Ce(e) {
	return n.createElement(
		"div",
		{
			className: re.SteamNotificationWrapper,
		},
		e.children,
	);
}
const fe = _e;
function be(e) {
	let {
		onActivate: t,
		onDismiss: r,
		logo: i,
		icon: a,
		title: s,
		body: o,
		personaStatus: l,
		className: c,
		gameName: m,
	} = e;
	let u = K(t, r);
	return n.createElement(
		_.Z,
		{
			className: A_1(fe.DesktopToastTemplate, c),
			onActivate: u,
			onMouseDown: (e) => {
				if (e.button == 1 && r) {
					r();
				}
			},
		},
		n.createElement(
			"div",
			{
				className: fe.StandardLogoDimensions,
			},
			i,
		),
		!!l &&
			n.createElement("div", {
				className: A_1(fe.AvatarStatus, l),
			}),
		n.createElement(
			"div",
			{
				className: fe.Content,
			},
			n.createElement(
				"div",
				{
					className: fe.Header,
				},
				s,
			),
			n.createElement(
				"div",
				{
					className: fe.Body,
				},
				o,
			),
		),
	);
}
function ye(e) {
	let {
		onActivate: t,
		onDismiss: r,
		logo: i,
		icon: a,
		title: s,
		body: o,
		personaStatus: l,
		className: c,
		gameName: m,
	} = e;
	let u = K(t, r);
	return n.createElement(
		_.Z,
		{
			className: A_1(fe.DesktopToastTemplate, c),
			onActivate: u,
			onMouseDown: (e) => {
				if (e.button == 1 && r) {
					r();
				}
			},
		},
		n.createElement(
			"div",
			{
				className: fe.StandardLogoDimensions,
			},
			i,
		),
		!!l &&
			n.createElement("div", {
				className: A_1(fe.AvatarStatus, l),
			}),
		n.createElement(
			"div",
			{
				className: fe.Content,
			},
			n.createElement(
				"div",
				{
					className: fe.Header,
				},
				s,
			),
			n.createElement(
				"div",
				{
					className: fe.Body,
				},
				o,
				!!m &&
					n.createElement(
						"div",
						{
							className: fe.FriendInGameAppColor,
						},
						m,
					),
			),
		),
	);
}
function Se(e) {
	let {
		onActivate: t,
		onDismiss: r,
		logo: i,
		title: a,
		body: s,
		personaStatus: o,
		className: l,
		groupName: c,
	} = e;
	let m = K(t, r);
	return n.createElement(
		_.Z,
		{
			className: A_1(fe.DesktopToastTemplate, l),
			onActivate: m,
			onMouseDown: (e) => {
				if (e.button == 1 && r) {
					r();
				}
			},
		},
		n.createElement(
			"div",
			{
				className: fe.StandardLogoDimensions,
			},
			i,
		),
		!!o &&
			n.createElement("div", {
				className: A_1(fe.AvatarStatus, o),
			}),
		n.createElement(
			"div",
			{
				className: fe.Content,
			},
			n.createElement(
				"div",
				{
					className: fe.Header,
				},
				!!c &&
					n.createElement(
						"div",
						{
							className: fe.GroupMessageTitle,
						},
						c,
					),
			),
			n.createElement(
				"div",
				{
					className: fe.Body,
				},
				n.createElement(
					"div",
					{
						className: fe.GroupMessageUserName,
					},
					a,
				),
				n.createElement(
					"div",
					{
						className: A_1(fe.GroupMessageBody, !c && fe.Multiline),
					},
					n.createElement(
						"span",
						{
							className: A_1(fe.Icon, fe.GroupMessageIcon),
						},
						e.icon,
					),
					s,
				),
			),
		),
	);
}
function ve(e) {
	if (!e) {
		return;
	}
	const t = typeof e == "string" ? e : e.locString;
	const r = typeof e == "string" ? [] : e.params || [];
	if (t) {
		if (t[0] !== "#") {
			return t;
		} else {
			return Localize(t, ...r);
		}
	} else {
		return undefined;
	}
}
function Ie(e) {
	return n.useMemo(() => (V4(e.type) ? bP(e) : null), [e]);
}
const De = 70;
const Ne = 90;
export function P7(e) {
	let t = e.onActivate;
	t ||= () => console.log("Missing activate function");
	const r = XW();
	return n.createElement(
		ee.FG,
		{
			...e,
			eUIMode: r,
			onActivate: t,
		},
		e.children,
	);
}
function Ge(e) {
	const t = $2();
	return n.useCallback(() => {
		y.LN.ShowFriendChatDialog(t, e);
	}, [t, e]);
}
export function Tm(e) {
	const { className: t, group: r, ...i } = e;
	const a = XW();
	const s = ((e) => {
		switch (e) {
			case 1: {
				return Ze;
			}
			case 3: {
				return $e;
			}
			case 4: {
				return et;
			}
			case 5: {
				return rt;
			}
			case 6: {
				return st;
			}
			case 7: {
				return lt;
			}
			case 8: {
				return mt;
			}
			case 9: {
				return ut;
			}
			case 10: {
				return dt;
			}
			case 11: {
				return At;
			}
			case 12: {
				return pt;
			}
			case 13: {
				return gt;
			}
			case 14: {
				return Qe;
			}
			case 15: {
				return Ye;
			}
			case 16: {
				return Ke;
			}
			case 17: {
				return tt;
			}
			case 18: {
				return ht;
			}
			case 21: {
				return Ct;
			}
			case 22: {
				return ot;
			}
			case 23: {
				return bt;
			}
			case 24: {
				return _t;
			}
			case 25:
			case 0: {
				return null;
			}
			case 26: {
				return ft;
			}
			case 33: {
				return yt;
			}
			case 34: {
				return wt;
			}
			case 35: {
				return Bt;
			}
			case 36: {
				return vt;
			}
			case 38: {
				return It;
			}
			case 40: {
				return Ft;
			}
			case 41: {
				return Gt;
			}
			case 42: {
				return Ot;
			}
			case 43: {
				return Pt;
			}
			case 45: {
				return kt;
			}
			case 50: {
				return Lt;
			}
			case 54: {
				return xt;
			}
			case 55: {
				return Wt;
			}
			case 56: {
				return Vt;
			}
			case 57: {
				return zt;
			}
			case 53: {
				return Mt;
			}
			case 58: {
				return Ht;
			}
			default: {
				const t = no(e);
				if (t) {
					if (IC(t)) {
						return Nt;
					}
					if (sR(t)) {
						return Rt;
					}
					if (Yt[t]) {
						return Yt[t];
					}
				}
				return null;
			}
		}
	})(e.group.eType);
	if (s) {
		return n.createElement(
			Ee.A,
			{
				controller: "notification",
				method: fL(a),
				submethod: ey(e.location),
			},
			n.createElement(s, {
				className: t,
				group: r,
				...i,
			}),
		);
	} else {
		return null;
	}
}
function Pe(e, t) {
	if (!t.read) {
		window.setTimeout(() => g.$Z.MarkItemRead(t.notification_id), 0);
	}
	e(null);
}
function Le(e) {
	const [t] = e("b24HourClock");
	q3(() => {
		tB(new Date().setHours(24, 0, 0, 0) - new Date().getTime());
	});
	let r = new Date();
	let s = new Date(e.timestamp * 1000);
	const o = hf() ? x.TimestampDesktop : x.Timestamp;
	let l = IsDateSameDay(r, s)
		? LocalizeRTimeToHourAndMinutes(e.timestamp, {
				bForce24HourClock: t,
			})
		: LocalizeRtime32ToShorterDate(e.timestamp, false, false, false);
	// TODO: localization
	return n.createElement(
		"div",
		{
			className: o,
		},
		l,
	);
}
const ze = PA((e) => {
	let { steamID: t, children: r, ...i } = e;
	let a = h.O$.GetFriendState(t);
	let s = n.createElement("img", {
		className: x.StandardLogoDimensions,
		src: a.persona.avatar_url_medium || q.A,
	});
	let o = rO(a?.persona);
	let l = Ge(t);
	return n.createElement(
		P7,
		{
			logo: s,
			personaStatus: o,
			onActivate: l,
			...i,
		},
		r,
	);
});
function xe(e) {
	let { overview: t, children: r, ...i } = e;
	let a = n.createElement(Ve, {
		overview: t,
		type: "standard",
	});
	return n.createElement(
		P7,
		{
			logo: a,
			...i,
		},
		r,
	);
}
const Ue = PA((e) => {
	let {
		steamID: t,
		icon: r,
		body: i,
		onDismiss: a,
		onActivate: s,
		className: o,
		location: l,
	} = e;
	let c = h.O$.GetFriendState(t);
	let m = n.createElement("img", {
		className: x.ShortLogoDimensions,
		src: c.persona.avatar_url_medium,
	});
	let u = n.createElement("span", null, c.display_name);
	let d = rO(c?.persona);
	return n.createElement($, {
		className: o,
		onDismiss: a,
		logo: m,
		icon: r,
		title: u,
		body: i,
		personaStatus: d,
		onActivate: s,
	});
});
function We(e) {
	let { overview: t, icon: r, title: i, onActivate: a, onDismiss: s } = e;
	let o = n.createElement(Ve, {
		overview: t,
		type: "short",
	});
	let l = qe(t);
	return n.createElement($, {
		logo: o,
		icon: r,
		title: i,
		body: l,
		onActivate: a,
		onDismiss: s,
	});
}
function Ve(e) {
	let t = (e.overview && A.tw.GetIconURLForApp(e.overview)) || v.A;
	return n.createElement(
		"div",
		{
			className: x.AppLogo,
		},
		n.createElement("img", {
			className: x.AppLogoBackgroundImage,
			src: t,
		}),
		n.createElement("img", {
			src: t,
		}),
	);
}
function He(e) {
	let t = {
		backgroundImage: `url(${e.url})`,
	};
	return n.createElement("div", {
		style: t,
		className: x.ScreenshotThumbnail,
	});
}
function je(e) {
	if (Y(e.location)) {
		return n.createElement(l.SteamLogo, {
			className: x.ShortNotificationSteamLogo,
		});
	} else {
		return n.createElement(l.SteamLogo, null);
	}
}
function qe(e, t) {
	if (e) {
		return e.display_name;
	} else if (t) {
		return `Unknown - ${t.toString()}`;
	} else {
		return "Unknown";
	}
}
function Qe(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = a.data.screenshot_handle();
	const o = br();
	const c = FD(s).data?.local;
	const m = useCallback(
		() =>
			o.Media.Screenshot({
				state: {
					id: s,
				},
			}),
		[o, s],
	);
	if (!c) {
		return null;
	}
	let u = A.tw.GetAppOverviewByAppID(c.nAppID);
	let p = n.createElement(He, {
		url: c.strUrl,
	});
	let g = n.createElement(l.Screenshot, null);
	let h = Localize(a.data.description());
	let C = u ? u.display_name : "";
	if (Y(t)) {
		return n.createElement($, {
			logo: p,
			icon: g,
			title: h,
			body: C,
			onActivate: m,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: p,
				onActivate: m,
				bNewIndicator: a.bNewIndicator,
			},
			n.createElement(ee.OJ, {
				icon: g,
				title: h,
				location: t,
			}),
			n.createElement(ee.NF, null, C),
		);
	}
}
function Ze(e) {
	let t = e.group.notifications[0];
	const r = A.tw.GetAppOverviewByAppID(t.data.appid());
	const i = T_2(t.data.appid());
	let a = n.createElement(l.Download, null);
	let s = Localize("#Notification_DownloadComplete_Title");
	let o = qe(r, t.data.appid());
	if (i && t.data.dlc_appid() != 0) {
		const e = i.vecDLC.find((e) => e.unAppID == t.data.dlc_appid());
		if (e) {
			o = e.strName;
		}
	}
	const c = br();
	let m = () => c.App(t.data.appid());
	if (Y(e.location)) {
		return n.createElement(We, {
			overview: r,
			icon: a,
			title: s,
			onActivate: m,
			onDismiss: e.onDismiss,
		});
	} else {
		return n.createElement(
			xe,
			{
				location: e.location,
				overview: r,
				onActivate: m,
				bNewIndicator: t.bNewIndicator,
			},
			n.createElement(ee.OJ, {
				icon: a,
				title: s,
				location: e.location,
				timestamp: t.rtCreated,
			}),
			n.createElement(ee.NF, null, o),
			n.createElement(
				ee.C0,
				null,
				Localize("#Notification_DownloadComplete_Description"),
			),
		);
	}
}
function Ye(e) {
	let t = e.group.notifications[0];
	let r = A.tw.GetAppOverviewByAppID(t.data.appid());
	let i = n.createElement(l.CloudSync, {
		error: true,
	});
	let a = Localize("#Notification_CloudSyncFailure_Title");
	let s = qe(r, t.data.appid());
	const o = br();
	let c = () => o.App(t.data.appid());
	if (Y(e.location)) {
		return n.createElement(We, {
			overview: r,
			icon: i,
			title: a,
			onActivate: c,
			onDismiss: e.onDismiss,
		});
	} else {
		return n.createElement(
			xe,
			{
				location: e.location,
				overview: r,
				onActivate: c,
				bNewIndicator: t.bNewIndicator,
			},
			n.createElement(ee.OJ, {
				icon: i,
				title: a,
				location: e.location,
				timestamp: t.rtCreated,
			}),
			n.createElement(ee.NF, null, s),
		);
	}
}
function Ke(e) {
	let t = e.group.notifications[0];
	let r = A.tw.GetAppOverviewByAppID(t.data.appid());
	let i = n.createElement(l.CloudSync, {
		error: true,
	});
	let a = Localize("#Notification_CloudSyncConflict_Title");
	let s = qe(r, t.data.appid());
	const o = br();
	let c = () => o.App(t.data.appid());
	if (Y(e.location)) {
		return n.createElement(We, {
			overview: r,
			icon: i,
			title: a,
			onActivate: c,
			onDismiss: e.onDismiss,
		});
	} else {
		return n.createElement(
			xe,
			{
				location: e.location,
				overview: r,
				onActivate: c,
				bNewIndicator: t.bNewIndicator,
			},
			n.createElement(ee.OJ, {
				icon: i,
				title: a,
				location: e.location,
				timestamp: t.rtCreated,
			}),
			n.createElement(ee.NF, null, s),
		);
	}
}
const Xe = PA((e) =>
	n.createElement(
		"span",
		{
			className: x.FriendName,
		},
		e.friend.display_name,
	),
);
const Je = PA((e) => {
	let { friend: t, state: r } = e;
	let i = t.persona?.m_strPlayerName || "";
	let a = B.rV.communityPreferences.bParenthesizeNicknames;
	return n.createElement(ee.ll, {
		playerName: i,
		nickName: t.nickname,
		parenthesizeNickNames: a,
		state: r,
	});
});
const $e = PA((e) => {
	const { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = new C.b(a.data.steamid());
	let o = tG(s);
	let c = n.createElement(l.Controller, {
		type: "generic",
	});
	let m = n.createElement(
		"span",
		{
			className: x.FriendInGameAppColor,
		},
		a.data.game_name(),
	);
	let u = Ge(s);
	let A = LocalizeReact("#Notification_FriendInGame_Body_Short", m);
	if (Y(e.location)) {
		return n.createElement(Ue, {
			steamID: s,
			icon: c,
			body: A,
			onActivate: u,
			onDismiss: i,
			location: t,
		});
	}
	if (t == 2) {
		let e = n.createElement("img", {
			className: x.StandardLogoDimensions,
			src: o.persona.avatar_url_medium,
		});
		let t = rO(o?.persona);
		let r = n.createElement(Je, {
			friend: o,
			state: "ingame",
		});
		return n.createElement(ye, {
			logo: e,
			title: r,
			icon: c,
			body: Localize("#Notification_FriendInGame_Body_ShortToast"),
			gameName: a.data.game_name(),
			onActivate: u,
			onDismiss: i,
			personaStatus: t,
		});
	}
	const p = r.notifications[0].bNewIndicator;
	return n.createElement(
		ze,
		{
			location: t,
			steamID: s,
			onActivate: u,
			bNewIndicator: p,
		},
		n.createElement(ee.OJ, {
			icon: c,
			title: Localize("#Notification_FriendStatus_Title"),
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(ee.NF, null, o.display_name),
		n.createElement(ee.C0, null, A),
	);
});
const et = PA((e) => {
	const { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = new C.b(a.data.steamid());
	let o = tG(s);
	let c = n.createElement(l.Friends, null);
	let m = Ge(s);
	if (t == 1) {
		let e = Localize("#Notification_FriendOnline_Body_Short");
		return n.createElement(Ue, {
			steamID: s,
			icon: c,
			body: e,
			onActivate: m,
			onDismiss: i,
			location: t,
		});
	}
	if (t == 2) {
		let e = n.createElement("img", {
			className: x.StandardLogoDimensions,
			src: o.persona.avatar_url_medium,
		});
		let t = rO(o?.persona);
		let r = n.createElement(
			"span",
			{
				className: x.FriendOnlineColor,
			},
			Localize("#Notification_FriendOnline_Online_Body_DesktopToast"),
		);
		let a = n.createElement(Je, {
			friend: o,
			state: "online",
		});
		const s = LocalizeReact("#Notification_FriendOnline_Body_DesktopToast", r);
		return n.createElement(be, {
			logo: e,
			title: a,
			icon: c,
			body: s,
			onActivate: m,
			onDismiss: i,
			personaStatus: t,
		});
	}
	const u = r.notifications[0].bNewIndicator;
	return n.createElement(
		ze,
		{
			location: t,
			steamID: s,
			onActivate: m,
			bNewIndicator: u,
		},
		n.createElement(ee.OJ, {
			icon: c,
			title: Localize("#Notification_FriendStatus_Title"),
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(ee.NF, null, o.display_name),
		n.createElement(
			ee.C0,
			null,
			Localize("#Notification_FriendOnline_Body_Short"),
		),
	);
});
function tt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = Zt(r);
	const s = new C.b(a.data.steamid());
	const o = bV(s);
	const c = n.createElement(l.IncomingVoiceCall, null);
	const m = Qn();
	const u = uT(G.qE.VoiceChat);
	const A = Ge(s);
	const p = m ? u : A;
	if (Y(e.location)) {
		let e = Localize("#Notification_IncomingVoiceChat");
		return n.createElement(Ue, {
			steamID: s,
			icon: c,
			body: e,
			onActivate: p,
			onDismiss: i,
			className: x.IncomingCallToast,
			location: t,
		});
	}
	const g = r.notifications[0].bNewIndicator;
	return n.createElement(
		ze,
		{
			location: t,
			steamID: s,
			onActivate: p,
			bNewIndicator: g,
		},
		n.createElement(ee.OJ, {
			icon: c,
			title: Localize("#Notification_IncomingVoiceChat"),
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(ee.NF, null, o),
	);
}
function rt(e) {
	let t;
	let { location: r } = e;
	let i = Zt(e.group);
	let a = i.data.appid();
	let s = A.tw.GetAppOverviewByAppID(i.data.appid());
	let o = {
		strID: i.data.achievement_id(),
		strName: i.data.name(),
		strDescription: i.data.description(),
		strImage: i.data.image_url(),
		bAchieved: i.data.achieved(),
		rtUnlocked: i.data.rtime_unlocked(),
		bHidden: false,
		flAchieved: i.data.global_achieved_pct(),
		flMinProgress: i.data.min_progress(),
		flCurrentProgress: i.data.current_progress(),
		flMaxProgress: i.data.max_progress(),
	};
	let m = bG("SteamIDAchievementsPage", a);
	let u = !o.bAchieved && o.flMinProgress !== undefined && !!o.flMaxProgress;
	if (Y(e.location)) {
		let t;
		t = o.strImage
			? n.createElement(f.Tv, {
					className: x.ShortLogoDimensions,
					achievement: o,
					hidden: false,
					pauseAnimation: true,
				})
			: n.createElement(Ve, {
					overview: s,
					type: "standard",
				});
		let r;
		let i = n.createElement(l.Achievement, null);
		let a = o.strName;
		r = u
			? n.createElement(at, {
					achievement: o,
				})
			: o.strDescription;
		return n.createElement($, {
			className: x.AchievementTextSection,
			logo: t,
			icon: i,
			title: a,
			body: r,
			fullWidth: u,
			onActivate: m,
			onDismiss: e.onDismiss,
		});
	}
	t = o.strImage
		? n.createElement(f.Tv, {
				className: A_1(x.AchievementIcon, !o.bAchieved && x.NotAchieved),
				achievement: o,
				hidden: false,
				pauseAnimation: !o.bAchieved,
			})
		: n.createElement(Ve, {
				overview: s,
				type: "standard",
			});
	return n.createElement(
		P7,
		{
			location: r,
			logo: t,
			onActivate: m,
			bNewIndicator: i.bNewIndicator,
		},
		n.createElement(
			"div",
			{
				className: x.AchievementTextSection,
			},
			n.createElement(
				"div",
				{
					className: A_1(x.Name, u && x.NoWrap),
				},
				o.strName,
			),
			!u &&
				n.createElement(
					"div",
					{
						className: x.Desc,
					},
					o.strDescription,
				),
			u &&
				n.createElement(it, {
					achievement: o,
				}),
			u &&
				n.createElement(at, {
					achievement: o,
				}),
		),
	);
}
function nt(e) {
	let t = Number.isInteger(e) ? 0 : 1;
	return e.toLocaleString(undefined, {
		maximumFractionDigits: t,
	});
}
function it(e) {
	let { achievement: t } = e;
	let r = `(${nt(t.flCurrentProgress)}/${nt(t.flMaxProgress)})`;
	let i = n.createElement(l.Achievement, null);
	return n.createElement(
		"div",
		{
			className: x.ProgressLine,
		},
		n.createElement(ee.VJ, {
			icon: i,
		}),
		n.createElement(ee.OO, {
			title: r,
		}),
	);
}
function at(e) {
	let { achievement: t } = e;
	let r =
		((t.flCurrentProgress - t.flMinProgress) /
			(t.flMaxProgress - t.flMinProgress)) *
		100;
	r = Math.max(r, 0);
	return n.createElement(
		"div",
		{
			className: x.ProgressBar,
		},
		n.createElement(Be.z2, {
			nProgress: r,
		}),
	);
}
function st(e) {
	let t = Zt(e.group).data.pct_remaining();
	let r = Math.round(t * 100);
	let i = r < 4;
	let a = K(undefined, e.onDismiss);
	if (XW() == 7) {
		return n.createElement(
			_.Z,
			{
				className: A_1(x.DesktopLowBattery, i && x.ReallyLow),
				onActivate: a,
			},
			n.createElement(l.SteamLogoInsetLowBattery, {
				className: x.LowBatterySteamLogo,
			}),
			n.createElement(
				"div",
				{
					className: x.Text,
				},
				Localize("#Notification_BatteryLow", r),
			),
		);
	} else {
		return n.createElement(
			_.Z,
			{
				className: A_1(x.LowBattery, i && x.ReallyLow),
				onActivate: a,
			},
			n.createElement(l.BatteryLow, {
				className: x.LowBatteryGauge,
			}),
			n.createElement(
				"div",
				{
					className: x.Text,
				},
				Localize("#QuickAccess_Tab_Notifications_BatteryLow"),
			),
			n.createElement(
				"div",
				{
					className: x.Remaining,
				},
				`${r}%`,
			),
		);
	}
}
function ot(e) {
	let t = q3(() => k.fN.BSteamDeckHasLowDiskSpace());
	let r = K(() => f_2(0), e.onDismiss);
	if (t) {
		return n.createElement(
			_.Z,
			{
				className: x.LowDiskSpace,
				onActivate: r,
			},
			n.createElement(l.HardDrive, {
				className: x.HardDrive,
			}),
			n.createElement(
				"div",
				{
					className: x.Text,
				},
				Localize("#QuickAccess_Tab_Notifications_LowDiskSpace"),
			),
		);
	} else {
		return null;
	}
}
function lt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = a.data.type() == 2;
	let o = s
		? Localize("#Notification_SystemUpdateRestart_Title")
		: Localize("#Notification_SystemUpdateAvailable_Title");
	let c = n.createElement(je, {
		location: t,
	});
	let m = n.createElement(l.SteamdeckUpdate, {
		className: x.SystemUpdateIcon,
	});
	let u = k1();
	let A = () => u.Settings("System");
	if (Y(e.location)) {
		let e = s
			? Localize("#Notification_SystemUpdateRestart_Body_Short")
			: Localize("#Notification_SystemUpdateAvailable_Body_Short");
		return n.createElement($, {
			logo: c,
			icon: m,
			title: o,
			body: e,
			onActivate: A,
			onDismiss: i,
		});
	}
	let p = s
		? Localize("#Notification_SystemUpdateRestart_Body")
		: Localize("#Notification_SystemUpdateAvailable_Body");
	const g = e.group.notifications[0].bNewIndicator;
	return n.createElement(
		P7,
		{
			location: t,
			logo: c,
			onActivate: A,
			bNewIndicator: g,
		},
		n.createElement(ee.OJ, {
			icon: m,
			title: o,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			p,
		),
	);
}
function ct(e) {
	const t = bV(e.steamID);
	return n.createElement(
		"div",
		{
			className: A_1(x.MessageBody),
		},
		n.createElement(
			"span",
			{
				className: x.Sender,
			},
			t,
		),
		n.createElement(
			"span",
			{
				className: x.Dash,
			},
			" - ",
		),
		n.createElement(
			"span",
			{
				className: x.Body,
			},
			e.message,
		),
	);
}
function mt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = a.data.steamid();
	let o = r.notifications.length;
	let c = n.useMemo(() => new C.b(s), [s]);
	let m = a.data.response_steamurl();
	let u = n.createElement(l.Chat, null);
	const A = bV(c);
	const p = Ge(c);
	const g = ((e) =>
		n.useCallback(
			(t) => {
				const r = n.createElement(
					Q.tz,
					null,
					n.createElement(
						Q.kt,
						{
							onSelected: () =>
								SteamClient.WebChat.OpenURLInClient(e, 0, false),
						},
						Localize("#Overlay_FriendInviteToGame_Accept"),
					),
					false,
				);
				lX(r, t);
			},
			[e],
		))(m);
	const _ = Qn();
	const f =
		m && m.length > 0
			? () => SteamClient.WebChat.OpenURLInClient(m, 0, false)
			: undefined;
	const b =
		m && m.length > 0
			? Localize("#Overlay_FriendInviteToGame_Accept")
			: undefined;
	const y = m && _ ? g : p;
	if (Y(e.location)) {
		return n.createElement(Ue, {
			steamID: c,
			icon: u,
			body: a.data.body(),
			onActivate: y,
			onDismiss: i,
			location: t,
		});
	}
	if (e.location == 2) {
		let e = h.O$.GetFriendState(c);
		let t = n.createElement("img", {
			className: x.StandardLogoDimensions,
			src: e.persona.avatar_url_medium,
		});
		let r = rO(e?.persona);
		let i = n.createElement(l.Chat, null);
		return n.createElement(Se, {
			body: a.data.body(),
			logo: t,
			icon: i,
			title: A,
			personaStatus: r,
			onActivate: y,
		});
	}
	const w = r.notifications[0].bNewIndicator;
	return n.createElement(
		ze,
		{
			location: t,
			steamID: c,
			onActivate: y,
			count: o,
			onOptionsButton: f,
			onOptionsButtonDesc: b,
			bNewIndicator: w,
		},
		n.createElement(ee.OJ, {
			icon: u,
			title: A,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			a.data.body(),
		),
	);
}
function ut(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = $2();
	let s = Zt(r);
	let o = r.notifications.length;
	let c = new C.b(s.data.steamid_sender());
	let m = s.data.chat_group_id();
	let u = s.data.chat_id();
	let A = s.data.body();
	let p = n.createElement(l.Chat, null);
	let g = n.useCallback(() => {
		y.LN.ShowChatRoomGroupDialog(a.params.browserInfo, m, u);
	}, [a.params.browserInfo, m, u]);
	const _ = bV(c);
	if (Y(e.location)) {
		return n.createElement(Ue, {
			steamID: c,
			icon: p,
			body: A,
			onActivate: g,
			onDismiss: e.onDismiss,
			location: t,
		});
	}
	if (e.location == 2) {
		let e = h.O$.GetFriendState(c);
		let t = n.createElement("img", {
			className: x.StandardLogoDimensions,
			src: e.persona.avatar_url_medium,
		});
		let r = rO(e?.persona);
		let i = n.createElement(l.Chat, null);
		let a = s.data.title();
		return n.createElement(Se, {
			body: s.data.body(),
			logo: t,
			icon: i,
			title: _,
			groupName: a,
			personaStatus: r,
			onActivate: g,
		});
	}
	const f = r.notifications[0].bNewIndicator;
	return n.createElement(
		ze,
		{
			location: t,
			steamID: c,
			onActivate: g,
			count: o,
			bNewIndicator: f,
		},
		n.createElement(ee.OJ, {
			icon: p,
			title: Localize("#Notification_GroupMessage_Title"),
			location: t,
			timestamp: s.rtCreated,
		}),
		n.createElement(ct, {
			steamID: c,
			message: s.data.body(),
		}),
	);
}
function dt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	let a = $2();
	let s = Zt(r);
	let o = s.data.new_invite_count();
	let c = Localize("#Notification_FriendInviteRollup_Body", o.toLocaleString());
	let m = n.createElement(l.AddFriend, null);
	let u = n.createElement(je, {
		location: t,
	});
	let A = Localize("#Notification_FriendInviteRollup_Title");
	const p = n.useCallback(() => y.LN.ShowInvitesDialog(a), [a]);
	if (Y(e.location)) {
		return n.createElement($, {
			logo: u,
			icon: m,
			title: A,
			body: c,
			onActivate: p,
			onDismiss: i,
		});
	} else if (t == 2) {
		return n.createElement(
			P7,
			{
				location: t,
				logo: u,
				onActivate: p,
			},
			n.createElement(ee.OJ, {
				icon: m,
				title: A,
				location: t,
				timestamp: s.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				c,
			),
		);
	} else {
		return null;
	}
}
function At(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = Zt(r);
	const s = h.O$.GetFriendState(a.data.accountid_owner());
	const o = n.createElement(l.FamilySharing, null);
	const c = n.createElement(Xe, {
		friend: s,
	});
	const m = Localize("#Notification_FamilySharing_Title");
	const u = LocalizeReact(
		a.data.authorized()
			? "#Notification_FamilySharingAuthorization_Authorized"
			: "#Notification_FamilySharingAuthorization_Deuthorized",
		c,
	);
	const A = n.createElement(je, {
		location: t,
	});
	if (Y(e.location)) {
		return n.createElement($, {
			logo: A,
			icon: o,
			title: m,
			body: u,
			onDismiss: i,
		});
	}
	const p = r.notifications[0].bNewIndicator;
	return n.createElement(
		P7,
		{
			location: t,
			logo: A,
			bNewIndicator: p,
		},
		n.createElement(ee.OJ, {
			icon: o,
			title: m,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			u,
		),
	);
}
function pt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = Zt(r);
	const s = h.O$.GetFriendState(a.data.accountid_owner());
	const o = n.createElement(l.FamilySharing, null);
	const c = n.createElement(Xe, {
		friend: s,
	});
	const m = Math.floor(a.data.seconds_remaining() / 60);
	const u = Localize("#Notification_FamilySharing_Title");
	let p = A.tw.GetAppOverviewByAppID(a.data.appid());
	const g = n.createElement(Ve, {
		overview: p,
		type: "standard",
	});
	let C = LocalizeReact(
		"#Notification_FamilySharingAuthorization_StopPlaying",
		c,
		m,
	);
	if (qw().BIsInFamilyGroup()) {
		C = LocalizeReact("#Notification_FamilySharing_StopPlaying", m);
	}
	if (Y(e.location)) {
		return n.createElement($, {
			logo: g,
			icon: o,
			title: u,
			body: C,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: g,
			},
			n.createElement(ee.OJ, {
				icon: o,
				title: u,
				location: t,
				timestamp: a.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				C,
			),
		);
	}
}
function gt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = Zt(r);
	const s = h.O$.GetFriendState(a.data.accountid_owner());
	const o = n.createElement(l.FamilySharing, null);
	const c = n.createElement(Xe, {
		friend: s,
	});
	const m = Localize("#Notification_FamilySharing_Title");
	const u = n.createElement(je, {
		location: t,
	});
	const A = LocalizeReact(
		"#Notification_FamilySharingAuthorization_LibraryAvailable",
		c,
	);
	if (Y(e.location)) {
		return n.createElement($, {
			logo: u,
			icon: o,
			title: m,
			body: A,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: u,
			},
			n.createElement(ee.OJ, {
				icon: o,
				title: m,
				location: t,
				timestamp: a.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				A,
			),
		);
	}
}
function ht(e) {
	const { location: t, onDismiss: r } = e;
	const i = q3(() => I.Fd.Get().GetControllers()).find(
		(e) => e.eControllerType == 4,
	);
	const s = TR(i?.strSerialNumber);
	const o = k1();
	const c = K(
		useCallback(() => o.Account(), [o]),
		r,
	);
	if (!i || s) {
		return null;
	}
	const m = Localize("#Notification_SteamDeckRewards_Title");
	const u = Localize("#Notification_SteamDeckRewards_Body");
	const A = n.createElement(l.DeckLogo, null);
	const p = n.createElement(l.Information, null);
	if (Y(e.location)) {
		return n.createElement($, {
			logo: A,
			icon: p,
			title: m,
			body: u,
			onActivate: c,
			onDismiss: r,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: A,
				onActivate: c,
			},
			n.createElement(ee.OJ, {
				icon: p,
				title: m,
				location: t,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				u,
			),
		);
	}
}
function Ct(e) {
	const { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = Localize("#Notification_HardwareSurveyPending_Title");
	let o = Localize("#Notification_HardwareSurveyPending_Body");
	let c = n.createElement(je, {
		location: t,
	});
	const m = n.createElement(l.Information, null);
	const u = uI();
	const A = $2();
	const p = K(
		n.useCallback(
			(e) => {
				const t = u ? GetOwningWindowForEvent(e) : A.BrowserWindow;
				if (qw().BHardwareSurveyPending()) {
					Qo(t);
				} else {
					gh(t);
				}
			},
			[u, A],
		),
		i,
	);
	if (Y(e.location)) {
		return n.createElement($, {
			logo: c,
			icon: m,
			title: s,
			body: o,
			onActivate: p,
			onDismiss: i,
		});
	}
	const g = r.notifications[0].bNewIndicator;
	return n.createElement(
		P7,
		{
			location: t,
			logo: c,
			onActivate: p,
			bNewIndicator: g,
		},
		n.createElement(ee.OJ, {
			icon: m,
			title: s,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			o,
		),
	);
}
function _t(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = Zt(r);
	const s = Localize("#Notification_DockUnsupportedFirmware_Title");
	const o = Localize("#Notification_DockUnsupportedFirmware_Body");
	const c = n.createElement(l.DeckDockFront, null);
	const m = n.createElement(l.Information, null);
	const u = K(
		n.useCallback(() => {
			G3();
		}, []),
		i,
	);
	if (Y(e.location)) {
		return n.createElement($, {
			logo: c,
			icon: m,
			title: s,
			body: o,
			onActivate: u,
			onDismiss: i,
		});
	}
	const A = r.notifications[0].bNewIndicator;
	return n.createElement(
		P7,
		{
			location: t,
			logo: c,
			onActivate: u,
			bNewIndicator: A,
		},
		n.createElement(ee.OJ, {
			icon: m,
			title: s,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			o,
		),
	);
}
function ft(e) {
	const { location: t, group: r } = e;
	const i = $2();
	const a = Zt(r);
	as(a.data.controller_index());
	const s = Localize("#Notification_CannotReadControllerGuideButton_Title");
	const o = Localize("#Notification_CannotReadControllerGuideButton_Body");
	if (Y(t)) {
		x.ShortNotificationXboxLogo;
	} else {
		x.StandardNotificationXboxLogo;
	}
	const c = n.createElement(l.GuideButton, null);
	const m = n.createElement(l.ExclamationPoint, {
		className: x.Yellow,
	});
	const u = K(
		n.useCallback(() => {
			pg(
				n.createElement(H.KG, {
					strTitle: s,
					strDescription: o,
				}),
				i.BrowserWindow,
			);
		}, [s, o, i.BrowserWindow]),
		e.onDismiss,
	);
	if (Y(t)) {
		return n.createElement($, {
			logo: c,
			icon: m,
			title: s,
			body: o,
			onActivate: u,
			onDismiss: e.onDismiss,
		});
	}
	const A = r.notifications[0].bNewIndicator;
	return n.createElement(
		P7,
		{
			location: t,
			logo: c,
			onActivate: u,
			bNewIndicator: A,
		},
		n.createElement(ee.OJ, {
			icon: m,
			title: s,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			o,
		),
	);
}
function bt(e) {
	const t = Zt(e.group).data.notification_type();
	let r = K(undefined, e.onDismiss);
	const i = A_1(x.BatteryTemperature, t != "normal" && x.Warning);
	const a = n.createElement(l.ExclamationPoint, {
		className: x.Icon,
	});
	const { title: s, description: o } = ((e) => {
		let t;
		let r;
		switch (e) {
			case "low": {
				t = "#Notification_BatteryTemperature_Low";
				r = "#Notification_BatteryTemperature_Low_Desc";
				break;
			}
			case "high": {
				t = "#Notification_BatteryTemperature_High";
				r = "#Notification_BatteryTemperature_High_Desc";
				break;
			}
			default: {
				t = "#Notification_BatteryTemperature_Normal";
				r = "#Notification_BatteryTemperature_Normal_Desc";
			}
		}
		return {
			title: t,
			description: r,
		};
	})(t);
	return n.createElement(
		_.Z,
		{
			className: i,
			onActivate: r,
		},
		a,
		n.createElement(
			"div",
			{
				className: x.Content,
			},
			n.createElement(
				"div",
				{
					className: x.Title,
				},
				Localize(s),
			),
			n.createElement(
				"div",
				{
					className: x.Description,
				},
				Localize(o),
			),
		),
	);
}
function yt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	Zt(r);
	Localize("#Notification_Overlay_ShiftTab");
	let a = Localize("#Notification_OverlayGeneric");
	let s = n.createElement(je, {
		location: t,
	});
	n.createElement(l.SteamdeckUpdate, {
		className: x.SystemUpdateIcon,
	});
	let o = n.createElement(St, null);
	w(!Y(e.location), "Missing short template");
	return n.createElement(
		P7,
		{
			location: t,
			logo: s,
			onActivate: () => {},
			footer: o,
		},
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			a,
		),
	);
}
function St(e) {
	const [t, r] = VI("overlay_key");
	let i = Localize("#Notification_Overlay_ShiftTab", t.display_name);
	return n.createElement(ee.PT, {
		text: i,
	});
}
function wt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = Localize("#Notification_BroadcastAvailableToWatch_Title");
	let o = n.createElement(je, {
		location: t,
	});
	let c = n.createElement(l.Broadcast, null);
	let m =
		a.data.broadcast_permission() == 2
			? "#Notification_OverlaySplashScreen_Friends"
			: "#Notification_OverlaySplashScreen_Public";
	let u = Localize(m);
	w(!Y(e.location), "Missing short template");
	return n.createElement(
		P7,
		{
			location: t,
			logo: o,
			onActivate: () => {},
		},
		n.createElement(ee.OJ, {
			icon: c,
			title: s,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			u,
		),
	);
}
function Bt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = A.tw.GetAppOverviewByAppID(a.data.appid());
	let o = n.createElement(l.SteamdeckUpdate, {
		className: x.SystemUpdateIcon,
	});
	let c = null;
	c = a.data.icon()
		? n.createElement("img", {
				className: x.StandardLogoDimensions,
				src: a.data.icon(),
			})
		: n.createElement(Ve, {
				overview: s,
				type: "standard",
			});
	const { title: m, description: p } = ((e) => {
		let t = e.allowed_seconds() ?? 0;
		let r = e.played_seconds() ?? 0;
		let n = Math.max(0, t - r);
		let i = Math.round(n / 60);
		let a = "";
		let s = "";
		if (i == 0) {
			a = Localize("#Notification_TimedTrial_Over");
			s = Localize("#Notification_TimedTrial_CloseNow");
		} else if (i <= 30) {
			a = Localize("#Notification_TimedTrial_EndsSoon");
			s = LocalizePlural("#Notification_TimedTrial_CloseSoon", i);
		} else {
			a = Localize("#Notification_TimedTrial_Enjoy");
			s = LocalizeTimeSince(n, {
				eSuffix: ETimeSinceSuffix.Remaining,
				bForceSingleUnits: false,
				bHighGranularity: false,
			});
		}
		if (e.offline()) {
			a = Localize("#Notification_TimedTrial_Offline");
		}
		return {
			title: a,
			description: s,
		};
	})(a.data);
	w(!Y(e.location), "Missing short template");
	return n.createElement(
		P7,
		{
			location: t,
			logo: c,
			onActivate: () => {},
		},
		n.createElement(ee.OJ, {
			icon: o,
			title: m,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			p,
		),
	);
}
function vt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	Zt(r);
	let a = n.createElement(St, null);
	return n.createElement(
		P7,
		{
			location: t,
			logo: n.createElement(je, {
				location: t,
			}),
			onActivate: () => {},
			footer: a,
		},
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			Localize("#Steam_RefreshLogin_AccountAlreadyLoggedInNeedPasswordToast"),
		),
	);
}
function It(e) {
	let { location: t, group: r, onDismiss: i } = e;
	Zt(r);
	let a = n.createElement(St, null);
	return n.createElement(
		P7,
		{
			location: t,
			logo: n.createElement(je, {
				location: t,
			}),
			onActivate: () => {},
			footer: a,
		},
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			Localize("#AppOverlay_TimerExpiredNotificationText"),
		),
	);
}
function Et(e) {
	const {
		steamid: t,
		url: r,
		strTitleLoc: i,
		strBodyLoc: a,
		location: s,
		group: o,
	} = e;
	const m = o.notifications[0].data;
	let u = tG(new C.b(t));
	const A = Qt(r);
	const p = o.notifications[0].bNewIndicator;
	const g = XW();
	if (!a) {
		return null;
	}
	const _ = !u.display_name;
	const f = Localize(i, u.display_name);
	const b = Localize(a, u.display_name);
	return n.createElement(de, {
		title: f,
		body: b,
		bDataLoading: _,
		logoUrl: u?.persona.avatar_url_medium,
		icon: n.createElement(l.SteamLogo, null),
		onActivate: () => Pe(A, m.item),
		location: s,
		timestamp: m.timestamp,
		nUnread: m.rgunread.length,
		eUIMode: g,
		fnRenderTimestamp: Le,
		bNewIndicator: p,
	});
}
function Mt(e) {
	const { location: t, group: r } = e;
	const i = r.notifications[0].data;
	const a = r.notifications[0].bNewIndicator;
	const s = Ie(i);
	const o = tG(new C.b(s.responder_steamid));
	const c = s.package_id > 0 ? s.package_id : s.bundle_id;
	const m = s.package_id > 0 ? 1 : 2;
	const [u] = mZ(c, m, {});
	const A = !o.display_name || !u;
	const p = Localize("#SteamNotifications_RequestedGameAddedTitle");
	const g = Localize(
		"#SteamNotifications_RequestedGameAddedBody",
		u?.GetName() ?? "",
	);
	const _ = br();
	let f = () => _.App(u?.GetAppID() ?? 0);
	const b = XW();
	return n.createElement(de, {
		title: p,
		body: g,
		bDataLoading: A,
		logoUrl: o?.persona.avatar_url_medium,
		icon: n.createElement(l.SteamLogo, null),
		onActivate: () => Pe(f, i.item),
		location: t,
		timestamp: i.timestamp,
		nUnread: i.rgunread.length,
		eUIMode: b,
		fnRenderTimestamp: Le,
		bNewIndicator: a,
	});
}
function Tt(e, t) {
	return ((e, t) =>
		n.useMemo(() => {
			const r = e;
			const n = aq(r);
			const i = u5(t);
			if (!n) {
				return null;
			}
			const a = typeof n.titleLoc == "string" ? n.titleLoc : n.titleLoc(i);
			const s = typeof n.bodyLoc == "string" ? n.bodyLoc : n.bodyLoc(i);
			const o = typeof n.url == "string" ? n.url : n.url(i);
			const l =
				typeof n.steamidAttribute == "string"
					? n.steamidAttribute
					: n.steamidAttribute(i);
			return {
				strTitleLoc: a,
				strBodyLoc: s,
				strUrl: o,
				steamid: i && i[l],
			};
		}, [t, e]))(no(e), t);
}
function Rt(e) {
	const t = e.group.notifications[0].data;
	const {
		strTitleLoc: r,
		strBodyLoc: i,
		strUrl: a,
		steamid: s,
	} = Tt(e.group.eType, t.item.body_data);
	if (s && r && i) {
		return n.createElement(Et, {
			steamid: s,
			url: a,
			strTitleLoc: r,
			strBodyLoc: i,
			...e,
		});
	} else {
		return null;
	}
}
function kt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = br();
	const s = Zt(r);
	const o = n.createElement(l.FamilySharing, null);
	const c = s.data.playtime_remaining();
	const m = n.createElement(je, {
		location: t,
	});
	const u = Y(t);
	const A = Localize("#Notification_FamilyGroup_PlaytimeWarning_Title");
	const p = LocalizePlural("#Notification_FamilyGroup_PlaytimeWarning_Body", c);
	const g = n.useCallback(() => {
		a.RequestPlaytimeDialog("manual");
	}, [a]);
	if (u) {
		return n.createElement($, {
			logo: m,
			icon: o,
			title: A,
			body: p,
			onActivate: g,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: m,
				onActivate: g,
			},
			n.createElement(ee.OJ, {
				icon: o,
				title: A,
				location: t,
				timestamp: s.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				p,
			),
		);
	}
}
const Dt = PA((e) => {
	const { location: t } = e;
	const r = Qn();
	const i = e.group.notifications[0].data;
	const a = Ie(i);
	const s = C.b.InitFromAccountID(a.requestorID);
	const o = $2();
	const m = n.useCallback(() => y.LN.ShowInvitesDialog(o), [o]);
	const u = `${
		M.TS.COMMUNITY_BASE_URL
	}profiles/${h.O$.currentUserSteamID.ConvertTo64BitString()}/friends/pending`;
	const d = Qt(u);
	const A = tG(s);
	const p = bV(s);
	const g = rO(A?.persona);
	const _ = e.group.notifications[0].bNewIndicator;
	const f = Y(t) ? x.ShortLogoDimensions : x.StandardLogoDimensions;
	const b = n.createElement("img", {
		className: f,
		src: q.A,
	});
	const w = XW();
	return n.createElement(ce, {
		icon: n.createElement(l.AddFriend, null),
		requestorAvatarURL: A?.persona.avatar_url_medium,
		fallbackLogo: b,
		onActivate: () => Pe(r ? m : d, i.item),
		location: t,
		data: a,
		timestamp: i.timestamp,
		nUnread: i.rgunread.length,
		eUIMode: w,
		fnRenderTimestamp: Le,
		requestorName: p,
		personaStatus: g,
		bNewIndicator: _,
	});
});
function Nt(e) {
	const { location: t } = e;
	const r = e.group.notifications[0].data;
	const i = Qt();
	s = r.item.notification_type;
	o = r.item.body_data;
	const a = n.useMemo(() => {
		if (s === undefined) {
			return null;
		}
		let e = K9(s);
		const t = u5(o);
		if (!e || !t) {
			return null;
		}
		const r =
			typeof e.displayNameLoc != "function"
				? {
						locString: e.displayNameLoc,
					}
				: e.displayNameLoc(t);
		const n =
			typeof e.titleLoc != "function"
				? {
						locString: e.titleLoc,
					}
				: e.titleLoc(t);
		const i =
			typeof e.bodyLoc != "function"
				? {
						locString: e.bodyLoc,
					}
				: e.bodyLoc(t);
		const a = typeof e.image != "function" ? e.image : e.image(t);
		const l = typeof e.link != "function" ? e.link : e.link(t);
		return {
			display_name: ve(r),
			title: ve(n),
			body: ve(i),
			image: a,
			link: l,
		};
	}, [o, s]);
	var s;
	var o;
	const m = typeof a?.image == "number";
	const [u] = t7(m ? a.image : 0, {
		include_assets: true,
	});
	const d = p$(r.type).replace("k_ESteamNotificationType_", "")?.toLowerCase();
	const A = aL(a.link, d);
	const p = useCallback(() => {
		if (a.link) {
			i(A);
		}
	}, [i, a.link, A]);
	const g = e.group.notifications[0].bNewIndicator;
	const h = XW();
	return n.createElement(se, {
		icon: ae(r.type),
		data: a,
		timestamp: r.timestamp,
		nUnread: r.rgunread.length,
		onActivate: () => Pe(p, r.item),
		fallbackLogo: n.createElement(l.SteamLogo, null),
		location: t,
		eUIMode: h,
		app: u,
		bNewIndicator: g,
	});
}
function Ft(e) {
	let { location: t } = e;
	let r = Zt(e.group);
	const i = as(r.data.controller_index());
	const a = Localize("#SteamInput_ChangeActionSet_Toast");
	const s = Localize(r.data.action_set_name());
	const o = n.createElement(l.ControllerType, {
		controllerType: i?.eControllerType,
	});
	const c = n.createElement(l.Information, null);
	return n.createElement(
		P7,
		{
			location: t,
			logo: o,
		},
		n.createElement(ee.OJ, {
			icon: c,
			title: a,
			location: t,
			timestamp: r.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			s,
		),
	);
}
function Gt(e) {
	let { location: t } = e;
	let r = Zt(e.group);
	const i = Localize("#Notification_RemotePlay_Title");
	let a = "";
	const s = n.createElement(l.RemotePlay, null);
	const o = n.createElement(l.Information, null);
	a = r.data.connected()
		? Localize("#Notification_RemoteClientConnected", r.data.machine())
		: Localize("#Notification_RemoteClientDisconnected", r.data.machine());
	if (Y(e.location)) {
		return n.createElement($, {
			logo: s,
			icon: o,
			title: i,
			body: a,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: s,
			},
			n.createElement(ee.OJ, {
				icon: o,
				title: i,
				location: t,
				timestamp: r.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				a,
			),
		);
	}
}
function Ot(e) {
	let { location: t } = e;
	let r = Zt(e.group);
	const i = Localize("#Notification_RemotePlay_Title");
	const a = Localize(
		"#Notification_RemoteClientStartStream",
		r.data.machine(),
		r.data.game_name(),
	);
	const s = n.createElement(l.RemotePlay, null);
	const o = n.createElement(l.Information, null);
	if (Y(e.location)) {
		return n.createElement($, {
			logo: s,
			icon: o,
			title: i,
			body: a,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: s,
			},
			n.createElement(ee.OJ, {
				icon: o,
				title: i,
				location: t,
				timestamp: r.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				a,
			),
		);
	}
}
function Pt(e) {
	let { location: t } = e;
	let r = Zt(e.group);
	const i = Localize("#Notification_RemotePlay_Title");
	let a = "";
	const s = n.createElement(l.RemotePlay, null);
	const o = n.createElement(l.Information, null);
	a = r.data.connected()
		? Localize(
				"#Notification_StreamingClientConnected",
				r.data.hostname(),
				r.data.machine(),
			)
		: Localize("#Notification_StreamingClientDisconnected", r.data.machine());
	if (Y(e.location)) {
		return n.createElement($, {
			logo: s,
			icon: o,
			title: i,
			body: a,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: s,
			},
			n.createElement(ee.OJ, {
				icon: o,
				title: i,
				location: t,
				timestamp: r.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				a,
			),
		);
	}
}
function Lt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	const s = a.data.error_type();
	let o;
	let c = Localize("#Notification_GRE_Title");
	let m = n.createElement(je, {
		location: t,
	});
	let u = n.createElement(l.Screenshot, null);
	let A = () => {};
	if (Y(e.location)) {
		let e = Localize("#Notification_GRE_Body_Short");
		return n.createElement($, {
			logo: m,
			icon: u,
			title: c,
			body: e,
			onActivate: A,
			onDismiss: i,
		});
	}
	if (s === 2) {
		o = Localize("#Notification_GRE_Body_DiskSpace");
	} else {
		o = Localize("#Notification_GRE_Body");
	}
	return n.createElement(
		P7,
		{
			location: t,
			logo: m,
			onActivate: A,
			bNewIndicator: false,
		},
		n.createElement(ee.OJ, {
			icon: u,
			title: c,
			location: t,
			timestamp: a.rtCreated,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			o,
		),
	);
}
function zt(e) {
	let { location: t, group: r, onDismiss: i } = e;
	let a = Zt(r);
	let s = Localize("#Notification_GRE_Title");
	let o = Localize("#Notification_GRUM_Body");
	let c = n.createElement(je, {
		location: t,
	});
	let m = n.createElement(l.Screenshot, null);
	let u = () => {};
	if (Y(e.location)) {
		return n.createElement($, {
			logo: c,
			icon: m,
			title: s,
			body: o,
			onActivate: u,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: c,
				onActivate: u,
				bNewIndicator: false,
			},
			n.createElement(ee.OJ, {
				icon: m,
				title: s,
				location: t,
				timestamp: a.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				Localize("#Notification_GRUM_Body"),
			),
		);
	}
}
function xt(e) {
	const { location: t, onDismiss: r } = e;
	const i = e.group.notifications[0].data;
	const a = u5(i.item.body_data);
	const s = e.group.notifications[0].bNewIndicator;
	const o = br();
	let c = Localize("#Notification_ClipDownloaded_Title");
	let m = n.createElement(je, {
		location: t,
	});
	let u = n.createElement(l.Screenshot, null);
	let A = useCallback(() => {
		o.Media.Clip({
			state: {
				id: a.clip_id,
			},
		});
	}, [a.clip_id, o.Media]);
	const p = () => Pe(A, i.item);
	if (Y(e.location)) {
		let e = Localize("#Notification_ClipDownloaded_Body");
		return n.createElement($, {
			logo: m,
			icon: u,
			title: c,
			body: e,
			onActivate: p,
			onDismiss: r,
		});
	}
	let g = Localize("#Notification_ClipDownloaded_Body");
	return n.createElement(
		P7,
		{
			location: t,
			logo: m,
			onActivate: p,
			bNewIndicator: s,
			nUnread: i.rgunread.length,
		},
		n.createElement(ee.OJ, {
			icon: u,
			title: c,
			location: t,
			timestamp: i.timestamp,
		}),
		n.createElement(
			ee.NF,
			{
				multiline: true,
			},
			g,
		),
	);
}
function Ut(e) {
	const t = (0, qZ)(e.durationSecs, false);
	return n.createElement(
		"span",
		{
			className: x.GameRecordingDuration,
		},
		t,
	);
}
function Wt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = Zt(r);
	const s = Localize("#Notification_RecordingStarted_Title");
	const o = Localize("#Notification_RecordingStarted_Body");
	const c = n.createElement(
		"div",
		{
			className: x.GameRecordingLogo,
		},
		n.createElement(m.Nm, {
			direction: "left",
		}),
	);
	const u = n.createElement(l.Video, null);
	const A = () => {};
	if (Y(e.location)) {
		return n.createElement($, {
			logo: c,
			icon: u,
			title: s,
			body: o,
			onActivate: A,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: c,
				onActivate: A,
				bNewIndicator: false,
			},
			n.createElement(ee.OJ, {
				icon: u,
				title: s,
				location: t,
				timestamp: a.rtCreated,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				o,
			),
		);
	}
}
function Vt(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = br();
	const s = Zt(r);
	const o = Localize("#Notification_RecordingStopped_Title");
	const c = Localize("#Notification_RecordingStopped_Body");
	const u = n.createElement(
		"div",
		{
			className: x.GameRecordingLogo,
		},
		n.createElement(m.Nm, {
			direction: "right",
		}),
	);
	const A = r.notifications[0].data.duration_secs();
	const p = n.createElement(l.Video, null);
	const g = () => {
		a.Media.Clip({
			state: {
				id: r.notifications[0].data.clip_id(),
			},
		});
	};
	if (Y(e.location)) {
		return n.createElement($, {
			logo: u,
			icon: p,
			title: o,
			body: c,
			onActivate: g,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: u,
				onActivate: g,
				bNewIndicator: false,
			},
			n.createElement(ee.OJ, {
				icon: p,
				title: o,
				location: t,
				timestamp: s.rtCreated,
			}),
			n.createElement(Ut, {
				durationSecs: A,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				c,
			),
		);
	}
}
function Ht(e) {
	const { location: t, group: r, onDismiss: i } = e;
	const a = br();
	const s = Zt(r);
	const o = Localize("#Notification_InstantClip_Title");
	const c = Localize("#Notification_InstantClip_Body");
	const u = n.createElement(
		"div",
		{
			className: x.GameRecordingLogo,
		},
		n.createElement(m.Wd, null),
	);
	const A = r.notifications[0].data.duration_secs();
	const p = n.createElement(l.Video, null);
	const g = () => {
		a.Media.Clip({
			state: {
				id: r.notifications[0].data.clip_id(),
			},
		});
	};
	if (Y(e.location)) {
		return n.createElement($, {
			logo: u,
			icon: p,
			title: o,
			body: c,
			onActivate: g,
			onDismiss: i,
		});
	} else {
		return n.createElement(
			P7,
			{
				location: t,
				logo: u,
				onActivate: g,
				bNewIndicator: false,
			},
			n.createElement(ee.OJ, {
				icon: p,
				title: o,
				location: t,
				timestamp: s.rtCreated,
			}),
			n.createElement(Ut, {
				durationSecs: A,
			}),
			n.createElement(
				ee.NF,
				{
					multiline: true,
				},
				c,
			),
		);
	}
}
export function WZ(e) {
	if (!e) {
		return false;
	}
	switch (e.eType) {
		case 22:
		case 6: {
			return true;
		}
	}
	return false;
}
export function xW(e) {
	let t = De;
	switch (e.eType) {
		case 33:
		case 36: {
			t = Ne;
		}
	}
	return t;
}
export function oS(e) {
	return false;
}
function Zt(e) {
	return e.notifications[e.notifications.length - 1];
}
const Yt = {
	3: PA((e) => {
		const { location: t } = e;
		const r = e.group.notifications[0].data;
		const i = Ie(r);
		const s = q3(() => qw().GetCurrentUser());
		const o = iO(i) ? i?.account_steam_id?.GetAccountID() : null;
		const m = tG(o);
		const u = OT(i) ? i?.owner_steam_id?.GetAccountID() : null;
		const d = tG(u);
		const [A] = t7(i.json_data?.app_id, {
			include_assets: true,
		});
		const g = Qt(p.B7.GetCommunityURL() + r.url);
		const C = e.group.notifications[0].bNewIndicator;
		const _ = XW();
		const f = Re.oy.TextFilterStore.FilterText(
			i.account_steam_id.GetAccountID(),
			i.title,
		);
		const b = Re.oy.TextFilterStore.FilterText(
			i.account_steam_id.GetAccountID(),
			i.comment,
		);
		return n.createElement(Ae, {
			icon: n.createElement(l.Comment, null),
			fallbackLogo: n.createElement(l.SteamLogo, null),
			onActivate: () => Pe(g, r.item),
			location: t,
			data: i,
			timestamp: r.timestamp,
			nUnread: r.rgunread.length,
			eUIMode: _,
			fnRenderTimestamp: Le,
			currentUserSteamID: s.strSteamID,
			postedByDisplayName: m?.display_name,
			postedByAvatarURL: m?.persona.avatar_url_medium,
			ownerDisplayName: d?.display_name,
			bNewIndicator: C,
			commentBody: b,
			commentTitle: f,
			app: A,
		});
	}),
	8: function (e) {
		const { location: t } = e;
		const r = e.group.notifications[0].data;
		const i = Ie(r);
		const [a, s] = t7(i.appid, {
			include_assets: true,
		});
		const o = Qt();
		const m = useCallback(() => {
			if (i.count > 1 && i.appids?.length) {
				return o(
					`${p.B7.GetStoreURL()}wishlist/profiles/${h.O$.currentUserSteamID.ConvertTo64BitString()}/?wng=${i.appids.toString()}#sort=discount`,
				);
			}
			if (a) {
				return o(a.GetStorePageURL());
			}
			const e = i.appid ? `?appid=${i.appid}` : "";
			return o(
				`${p.B7.GetStoreURL()}wishlist/profiles/${h.O$.currentUserSteamID.ConvertTo64BitString()}/${e}#sort=discount`,
			);
		}, [i, a, o]);
		const u = e.group.notifications[0].bNewIndicator;
		const d = XW();
		return n.createElement(pe, {
			icon: n.createElement(l.Store, null),
			fallbackLogo: n.createElement(l.Games, null),
			onActivate: () => Pe(m, r.item),
			location: t,
			data: i,
			timestamp: r.timestamp,
			nUnread: r.rgunread.length,
			eUIMode: d,
			fnRenderTimestamp: Le,
			app: a,
			bNewIndicator: u,
		});
	},
	5: Dt,
	4: function (e) {
		const { location: t } = e;
		const r = e.group.notifications[0].data;
		const i = q3(() => qw().GetCurrentUser());
		const s = IL(r.item, i.strSteamID, g.$Z.GetTransport());
		const o = Ie(r);
		const m = new C.b(i.strSteamID);
		const u = `${
			M.TS.COMMUNITY_BASE_URL
		}profiles/${m.ConvertTo64BitString()}/inventory`;
		const d = Qt(u);
		const A = e.group.notifications[0].bNewIndicator;
		const p = XW();
		return n.createElement(me, {
			icon: n.createElement(l.Inventory, null),
			fallbackLogo: n.createElement(l.SteamLogo, null),
			onActivate: () => Pe(d, r.item),
			location: t,
			data: o,
			timestamp: r.timestamp,
			nUnread: r.rgunread.length,
			eUIMode: p,
			fnRenderTimestamp: Le,
			itemState: s,
			bNewIndicator: A,
		});
	},
	2: function (e) {
		const { location: t } = e;
		const r = e.group.notifications[0].data;
		const i = Ie(r);
		const a = C.b.InitFromAccountID(i);
		const s = bV(a);
		const o = Qt(p.B7.ResolveURL("PendingGift"));
		const m = e.group.notifications[0].bNewIndicator;
		const u = XW();
		return n.createElement(le, {
			icon: n.createElement(l.Gift, null),
			logo: n.createElement(je, {
				location: 3,
			}),
			onActivate: () => Pe(o, r.item),
			location: t,
			timestamp: r.timestamp,
			nUnread: r.rgunread.length,
			eUIMode: u,
			fnRenderTimestamp: Le,
			senderName: s,
			bNewIndicator: m,
		});
	},
	9: function (e) {
		const { location: t } = e;
		const r = e.group.notifications[0].data;
		const i = Ie(r);
		const a = C.b.InitFromAccountID(i);
		const s = bV(a);
		const o = Qt(
			`${p.B7.GetCommunityURL()}profiles/${h.O$.currentUserSteamID.ConvertTo64BitString()}/tradeoffers`,
		);
		const m = e.group.notifications[0].bNewIndicator;
		const u = XW();
		return n.createElement(oe, {
			logo: n.createElement(l.SteamLogo, null),
			icon: n.createElement(l.Trade, null),
			onActivate: () => Pe(o, r.item),
			location: t,
			timestamp: r.timestamp,
			nUnread: r.rgunread.length,
			eUIMode: u,
			fnRenderTimestamp: Le,
			displayName: s,
			bNewIndicator: m,
		});
	},
	12: function (e) {
		const { location: t } = e;
		const r = e.group.notifications[0].data;
		const i = Ie(r);
		const [a] = t7(i.appid, {
			include_assets: true,
		});
		const s = Qt(`${p.B7.GetCommunityURL()}my/gamenotifications/`);
		const o = e.group.notifications[0].bNewIndicator;
		const m = XW();
		return n.createElement(ue, {
			icon: n.createElement(l.AsyncGameTurn, null),
			fallbackLogo: n.createElement(l.Games, null),
			onActivate: () => Pe(s, r.item),
			location: t,
			data: i,
			timestamp: r.timestamp,
			nUnread: r.rgunread.length,
			eUIMode: m,
			fnRenderTimestamp: Le,
			app: a,
			bNewIndicator: o,
		});
	},
};
export function F7(e) {
	switch (e) {
		case 18:
		case 34:
		case 40:
		case 41: {
			return false;
		}
	}
	return true;
}
