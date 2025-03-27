import {
	GetDistanceFromRect,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
import {
	Localize,
	Hq,
	LocalizePlural,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { MoveElement } from "../../actual_src/utils/arrayutils.js";
import { LocalizeCalendarTime } from "../../actual_src/utils/localization/datetime.js";
import n, { Cg } from "./34629.js";
import i, { Qn } from "./44234.js";
import a from "./66146.js";
import s from "./3756.js";
import o from "./96127.js";
import l from "./8653.js";
import c from "./46970.js";
import m, { CO, _k, PJ, wj } from "./52912.js";
import u from "./95773.js";
import d from "./15855.js";
import A, { Ci, Ic } from "./78060.js";
import p, { tj, HS, iS, Jw } from "./97422.js";
import g, { f as f_1 } from "./81386.js";
import h from "./53414.js";
import C from "./65726.js";
import _, { fM, Tz } from "./27847.js";
import f, { Gn } from "./89193.js";
import b, { PA } from "./41230.js";
import y, { q3 } from "./90095.js";
import S, { useEffect, useState } from "./63696.js";
import w from "./69164.js";
import B from "./62556.js";
import v from "./17231.js";
import M, { hL, Ue as Ue_1, D5 } from "./52451.js";
import T, { R7 } from "./11131.js";
import R, { u as u_1 } from "./17385.js";
import P from "./92564.js";
import L, { EP } from "./59704.js";
import z from "./23038.js";
import x, { lX } from "./31084.js";
import U, { $b, Y8 } from "./88750.js";
import W from "./50376.js";
import V from "./35488.js";
import H from "./29889.js";
import { OQ } from "./31958.js";
import { UA } from "./69649.js";
import { T as T_1 } from "./92009.js";
import "./13869.js";
import Z, { a_ as a_1 } from "./64608.js";
import X from "./26853.js";
import J from "./83231.js";
import $ from "./43951.js";
import "./44313.js";
import { rO } from "./88724.js";
import se from "./27773.js";
import oe from "./8573.js";
import { Dn } from "./45328.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import me from "./68608.js";
import { A as A_1 } from "./90765.js";
import de from "./87949.js";
import Ae from "./63958.js";
import pe from "./54747.js";
import ge from "./18644.js";
import he from "./90242.js";
import Ce from "./4690.js";
import _e from "./61657.js";
import fe from "./43014.js";
import be from "./13743.js";
import ye from "./70839.js";
import Se from "./97764.js";
import { Yj } from "./50979.js";
import Ee from "./20590.js";
import { H as H_1 } from "./80310.js";
import { Pr, Qn } from "./72476.js";
import { l as l_2 } from "./47742.js";
import { Uy } from "./55571.js";
import De from "./83665.js";
let k = class extends S.Component {
	m_rgFavoriteElementRefs = [];
	constructor(e) {
		super(e);
	}
	render() {
		let e = this.props.FavoritesStore.favorites.map((e, t) => {
			let r;
			if (e.friend) {
				r = "f" + e.friend.accountid;
			} else if (e.clan) {
				r = "cl" + e.clan.clanid;
			} else {
				if (!e.chat) {
					return null;
				}
				r = "cg" + e.chat.GetGroupID();
			}
			return S.createElement(N, {
				favorite: e,
				index: t,
				friendRenderContext: this.GetFriendRenderContext(),
				key: r,
				bIsDragGhost: false,
				bIsDragOutGhost: false,
				refPanel: this.OnFavoriteElementRef.bind(this, t),
			});
		});
		return S.createElement(
			w.Z,
			{
				"flow-children": "column",
			},
			e,
		);
	}
	OnFavoriteElementRef(e, t) {
		this.m_rgFavoriteElementRefs[e] = t;
	}
	m_FriendRenderContext;
	GetFriendRenderContext() {
		this.m_FriendRenderContext ||= {
			chatContext: "friendslist",
		};
		return this.m_FriendRenderContext;
	}
};
k = Cg([b.PA], k);
let D = class extends S.Component {
	m_iActiveDragIndex = undefined;
	m_ActiveDrag = undefined;
	m_ActiveDragOut = undefined;
	m_bGhostIsDupe = false;
	m_rgFavoriteElementRefs = [];
	constructor(e) {
		super(e);
		Gn(this);
		this.state = {
			bHintDismissed: m.ZM.UIDisplayPrefs.bFavoritesHintDismissed,
		};
	}
	DismissFavoritesHint() {
		this.setState({
			bHintDismissed: true,
		});
		m.ZM.SetUIDisplayPref("bFavoritesHintDismissed", true);
	}
	render() {
		let e = this.props.FavoritesStore.favorites;
		let t = this.m_ActiveDrag;
		let r = "quickAccessFriends emptyQuickAccess";
		if (this.state.bHintDismissed) {
			r += " hintDismissed";
		}
		if (e.length || t) {
			let r = e;
			let n = u.xm.SettingsStore.FriendsSettings.bCompactQuickAccess;
			if (t) {
				let e;
				if (this.m_bGhostIsDupe) {
					e = r.findIndex((e) => {
						return f_1(e, t);
					});
				}
				if (
					this.m_iActiveDragIndex === undefined ||
					this.m_iActiveDragIndex >= r.length
				) {
					r = [
						...r,
						{
							isActiveDrag: true,
							...t,
						},
					];
				} else {
					this.m_iActiveDragIndex;
					r = [
						...r.slice(0, this.m_iActiveDragIndex),
						{
							isActiveDrag: true,
							...t,
						},
						...r.slice(this.m_iActiveDragIndex),
					];
				}
			}
			let i = r.map((e, r) => {
				let n;
				if (e.friend) {
					n = "f" + e.friend.accountid;
				} else if (e.clan) {
					n = "cl" + e.clan.clanid;
				} else {
					if (!e.chat) {
						return null;
					}
					n = "cg" + e.chat.GetGroupID();
				}
				let i = this.m_bGhostIsDupe && !e.isActiveDrag && f_1(t, e);
				let a = e.isActiveDrag;
				if (a) {
					n += "dragGhost";
				}
				return S.createElement(N, {
					favorite: e,
					index: r,
					friendRenderContext: this.GetFriendRenderContext(),
					key: n,
					bIsDragGhost: a,
					bIsDragOutGhost: i,
					refPanel: this.OnFavoriteElementRef.bind(this, r),
				});
			});
			let a = "quickAccessFriends";
			if (n) {
				a += " compactQuickAccess";
			}
			return S.createElement(
				d.D,
				{
					className: a,
					...this.GetDragDropProps(),
					"flow-children": "grid",
				},
				i,
				S.createElement("div", {
					className: "dropTargetBox",
				}),
			);
		}
		return S.createElement(
			d.T,
			{
				className: r,
				...this.GetDragDropProps(),
			},
			S.createElement(
				"div",
				{
					className: "quickAccessFriendsMessage",
				},
				Localize("#FriendsList_Favorites_Hint"),
			),
			!this.state.bHintDismissed &&
				S.createElement(
					"div",
					{
						className: "quickAccessFriendsMessageDismiss",
						onClick: this.DismissFavoritesHint,
					},
					Localize("#Generic_Got_It"),
				),
			S.createElement("div", {
				className: "dropTargetBox",
			}),
		);
	}
	OnFavoriteElementRef(e, t) {
		this.m_rgFavoriteElementRefs[e] = t;
	}
	m_FriendRenderContext;
	GetFriendRenderContext() {
		this.m_FriendRenderContext ||= {
			chatContext: "friendslist",
		};
		return this.m_FriendRenderContext;
	}
	m_bAcceptDrag = false;
	GetDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend", "chattab", "chatroomgroup", "clan"],
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragOver = this.OnDragOver;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDrop = this.OnDrop;
		e.onDragStart = this.OnDragStart;
		e.onDragEndCapture = this.OnDragEnd;
		return e;
	}
	OnDragStart(e) {
		let t = m.ZM.DragDropManager.GetDragData();
		if (
			!!t &&
			(t.type == "friend" ||
				t.type == "chatroomgroup" ||
				t.type == "chatroomgroup" ||
				t.type == "clan")
		) {
			t.is_favorite = true;
			this.m_ActiveDragOut = this.FindItemFromDrag(t);
		}
	}
	OnDragEnd(e) {
		let t = m.ZM.DragDropManager.GetDragData();
		let r = this.FindItemFromDrag(t);
		if (
			r &&
			"is_favorite" in t &&
			t.is_favorite &&
			!m.ZM.DragDropManager.BWasDropConsumed()
		) {
			let t = e.currentTarget.getBoundingClientRect();
			const n = 100;
			if (GetDistanceFromRect(t, e.clientX, e.clientY) > n) {
				this.props.FavoritesStore.RemoveFromFavorites(r);
				m.ZM.DragDropManager.EndDrag();
			}
		}
		this.m_ActiveDragOut = undefined;
	}
	FindItemFromDrag(e) {
		let t;
		let r;
		let n;
		let i;
		if (e.type == "friend") {
			r = e.friend;
		} else if (e.type == "chattab") {
			let t = e.tab;
			if (t instanceof a.$C) {
				let e = t.GetGroup();
				if (e.BIsClanChatRoom()) {
					n = u.xm.FriendStore.ClanStore.GetClan(e.GetClanID());
				}
				i = e;
			} else {
				r = t.GetChatView().chat.chat_partner;
			}
		} else if (e.type == "chatroomgroup") {
			i = e.group;
		} else if (e.type == "clan") {
			n = e.clan;
		}
		if (r) {
			if (r.is_friend) {
				t = {
					friend: r,
				};
			}
		} else if (n) {
			t = {
				clan: n,
			};
		} else if (i) {
			t = {
				chat: i,
			};
		}
		return t;
	}
	OnDragEnter(e, t) {
		let r = this.FindItemFromDrag(e);
		if (r && !f_1(this.m_ActiveDrag, r)) {
			this.m_ActiveDrag = r;
			this.m_bGhostIsDupe = this.props.FavoritesStore.BIsFavorited(r);
		}
		return true;
	}
	OnDragOver(e) {
		let t;
		let r;
		for (let n = 0; n < this.m_rgFavoriteElementRefs.length; n++) {
			const i = this.m_rgFavoriteElementRefs[n];
			let a = i && i.getBoundingClientRect();
			if (a) {
				let i = GetDistanceFromRect(a, e.clientX, e.clientY);
				if (r === undefined || i < r) {
					r = i;
					t = n;
				}
			}
		}
		if (t !== undefined) {
			this.m_iActiveDragIndex = t;
		}
		e.dataTransfer.dropEffect = "copy";
	}
	ResetDragState() {
		this.m_ActiveDrag = undefined;
		this.m_ActiveDragOut = undefined;
		this.m_iActiveDragIndex = undefined;
	}
	OnDragLeave() {
		if (this.m_ActiveDrag) {
			this.ResetDragState();
		}
	}
	OnDrop(e, t) {
		let r = this.FindItemFromDrag(e);
		this.m_ActiveDrag;
		if (r) {
			m.ZM.DragDropManager.SetDropConsumed();
			this.props.FavoritesStore.AddToFavorites(r, this.m_iActiveDragIndex);
			if (r.friend) {
				r.friend.LoadEquippedProfileItems();
			}
			this.ResetDragState();
		} else if (this.m_ActiveDrag) {
			this.ResetDragState();
		}
	}
};
Cg([f.sH], D.prototype, "m_iActiveDragIndex", undefined);
Cg([f.sH], D.prototype, "m_ActiveDrag", undefined);
Cg([f.sH], D.prototype, "m_ActiveDragOut", undefined);
Cg([M.oI], D.prototype, "DismissFavoritesHint", null);
Cg([M.oI], D.prototype, "OnDragStart", null);
Cg([M.oI], D.prototype, "OnDragEnd", null);
Cg([M.oI], D.prototype, "OnDragEnter", null);
Cg([M.oI], D.prototype, "OnDragOver", null);
Cg([M.oI], D.prototype, "OnDragLeave", null);
Cg([M.oI], D.prototype, "OnDrop", null);
D = Cg([b.PA], D);
class N extends S.Component {
	onFavoriteElementClick(e) {
		let t = this.props.favorite;
		if (t.friend) {
			this.props.favorite.friend.OpenChatDialog(CO(e));
		} else if (t.clan) {
			t.clan.OpenChatDialog(CO(e));
		} else {
			if (!t.chat) {
				return;
			}
			u.xm.UIStore.ShowAndOrActivateChatRoomGroup(CO(e), t.chat, true);
		}
		e.stopPropagation();
	}
	OnFavoriteElementContextMenu(e) {
		let t = this.props.favorite;
		if (t.friend) {
			tj(CO(e), this.props.friendRenderContext, t.friend, e);
		} else if (t.clan) {
			fM(e, t.clan, {
				is_favorites: true,
			});
		} else {
			if (!t.chat) {
				return;
			}
			Tz(e, t.chat, {
				is_favorites: true,
			});
		}
		e.stopPropagation();
	}
	render() {
		let e;
		let t;
		let r = "quickAccessFriend";
		let n = this.props.favorite;
		if (this.props.bIsDragGhost) {
			r += " dropGhost";
		} else if (this.props.bIsDragOutGhost) {
			r += " dragOriginGhost";
		}
		if (this.props.bIsDragOutGhost) {
			e = {
				display: "none",
			};
		}
		t = n.friend
			? S.createElement(F, {
					key: n.friend.accountid,
					friend: n.friend,
					friendRenderContext: this.props.friendRenderContext,
					className: r,
				})
			: n.clan
				? S.createElement(G, {
						key: n.clan.clanid,
						clan: n.clan,
						className: r,
					})
				: n.chat
					? S.createElement(O, {
							key: n.chat.GetGroupID(),
							chat: n.chat,
							className: r,
						})
					: null;
		let i = S.createElement(
			w.Z,
			{
				style: e,
				className: "favoriteElement",
				onActivate: this.onFavoriteElementClick,
				onOKActionDescription: Localize("#Friend_Menu_SendMessage"),
				onMenuActionDescription: Localize("#Friend_Menu_Open"),
				onContextMenu: this.OnFavoriteElementContextMenu,
				onMenuButton: this.OnFavoriteElementContextMenu,
				ref: this.props.refPanel,
			},
			t,
		);
		if (n.friend) {
			return S.createElement(
				Rg,
				{
					friend: n.friend,
					context: this.props.friendRenderContext,
				},
				i,
			);
		} else {
			return i;
		}
	}
}
Cg([M.oI], N.prototype, "onFavoriteElementClick", null);
Cg([M.oI], N.prototype, "OnFavoriteElementContextMenu", null);
let F = PA(function (e) {
	let t = Qn();
	let r = e.friend;
	let n = !t && u.xm.SettingsStore.FriendsSettings.bCompactQuickAccess;
	let a = null;
	const s = R7();
	const o = _k(s.ownerWindow);
	const l = !u_1(o, R.m);
	let c;
	let d = u.xm.CMInterface.logged_on;
	S.useEffect(() => {
		if (u.xm.CMInterface.logged_on) {
			r.LoadEquippedProfileItems();
		}
	}, [d, r]);
	if (r.persona.is_awayOrSnooze) {
		a = S.createElement(B.p, {
			persona: r.persona,
			className: "SnoozeContainer",
			size: "medium",
			dim: true,
		});
	}
	if (r.persona.is_ingame) {
		let e =
			r.persona.m_unGamePlayedAppID &&
			u.xm.AppInfoStore.GetAppInfo(r.persona.m_unGamePlayedAppID);
		if (e?.is_valid) {
			c = S.createElement(
				"div",
				{
					className: "FavoriteFriend_GameIcon",
				},
				S.createElement("img", {
					className: "gameIcon",
					src: e.icon_url,
					draggable: false,
				}),
			);
		}
	}
	let A =
		u.xm.ChatStore.FriendChatStore.GetUnfilteredFriendsWithUnreadMessages();
	let p = false;
	for (let e of A) {
		if (e.accountid_partner == r.accountid) {
			p = true;
			break;
		}
	}
	let g = null;
	if (p) {
		g = S.createElement(
			"div",
			{
				className: "ChatUnreadMessageIndicator",
			},
			S.createElement("div", {
				className: "chatUnreadCircle",
			}),
		);
	}
	let h = null;
	let C = null;
	let _ =
		u.xm.SettingsStore.FriendsSettings.bAnimatedAvatars && r.persona.is_online;
	if (
		q3(() => {
			return r.BLoadedEquippedItems();
		})
	) {
		let e = r.GetEquippedProfileItems();
		if (e) {
			h = e.animated_avatar;
			C = e.avatar_frame;
		}
	}
	return S.createElement(
		bP,
		{
			friend: r,
			key: r.accountid,
			className: e.className,
			context: e.friendRenderContext,
			bFriendsListEntry: true,
			bSingleClickActivate: true,
		},
		!t &&
			S.createElement(
				"div",
				null,
				S.createElement(
					v.xz,
					{
						key: `${r.persona.GetAccountID()}_${r.persona.is_online}`,
						loopDuration: _ ? "Medium" : "None",
						persona: r.persona,
						animatedAvatar: h,
						avatarFrame: C,
						size: "Medium",
						bLimitProfileFrameAnimationTime: !_ || l,
					},
					c,
					a,
				),
				!n &&
					S.createElement(
						"div",
						{
							className: "playerNameQuickAccessContainer",
						},
						S.createElement(
							"div",
							{
								className: "playerName",
							},
							r.display_name,
						),
						r.is_display_name_nickname &&
							S.createElement(
								"span",
								{
									className: "playerNicknameBracket",
									title: Localize("#isNickname"),
								},
								"*",
							),
					),
				g,
			),
	);
});
let G = class extends S.Component {
	static contextType = i.QO;
	OnDragStart(e) {
		m.ZM.DragDropManager.StartDrag({
			type: "clan",
			clan: this.props.clan,
		});
	}
	OnDragEnd(e) {
		m.ZM.DragDropManager.EndDrag();
	}
	render() {
		let e = "QuickAccessFriend QuickAccessClan";
		let t =
			!this.context?.IN_GAMEPADUI &&
			u.xm.SettingsStore.FriendsSettings.bCompactQuickAccess;
		if (this.props.className) {
			e += " " + this.props.className;
		}
		let r = null;
		let n = this.props.clan.GetChatGroupIDIfLoaded();
		if (n) {
			let e = u.xm.ChatStore.GetChatRoomGroup(n);
			if (e) {
				r = S.createElement(C.RB, {
					group: e,
				});
			}
		}
		return S.createElement(
			"div",
			{
				className: e,
				draggable: true,
				onDragStart: this.OnDragStart,
				onDragEnd: this.OnDragEnd,
			},
			S.createElement(h._O, {
				clan: this.props.clan,
				size: "small",
			}),
			!t &&
				S.createElement(
					"div",
					{
						className: "clanName",
					},
					this.props.clan.name,
				),
			r,
		);
	}
};
Cg([M.oI], G.prototype, "OnDragStart", null);
Cg([M.oI], G.prototype, "OnDragEnd", null);
G = Cg([b.PA], G);
let O = class extends S.Component {
	static contextType = i.QO;
	OnDragStart(e) {
		m.ZM.DragDropManager.StartDrag({
			type: "chatroomgroup",
			group: this.props.chat,
		});
	}
	OnDragEnd(e) {
		m.ZM.DragDropManager.EndDrag();
	}
	render() {
		let e = "QuickAccessChat";
		let t = null;
		let r =
			!this.context?.IN_GAMEPADUI &&
			u.xm.SettingsStore.FriendsSettings.bCompactQuickAccess;
		if (this.props.chat.hasUnreadChatMessage) {
			t = S.createElement(C.RB, {
				group: this.props.chat,
			});
		}
		if (this.props.className) {
			e += " " + this.props.className;
		}
		return S.createElement(
			"div",
			{
				className: e,
				draggable: true,
				onDragStart: this.OnDragStart,
				onDragEnd: this.OnDragEnd,
			},
			S.createElement(h.I, {
				group: this.props.chat,
			}),
			!r &&
				S.createElement(
					"div",
					{
						className: "clanName",
					},
					this.props.chat.name,
				),
			t,
		);
	}
};
Cg([M.oI], O.prototype, "OnDragStart", null);
Cg([M.oI], O.prototype, "OnDragEnd", null);
O = Cg([b.PA], O);
const K = "DEBUG_LogCMTraffic";
S.Component;
class ee extends S.Component {
	m_rgSelectOptions = [
		{
			label: "Option #1",
			data: 1,
		},
		{
			label: "Option #2",
			data: 2,
		},
		{
			label: S.createElement(
				"span",
				null,
				"Option ",
				S.createElement("u", null, "#3"),
			),
			data: 3,
		},
	];
	constructor(e) {
		super(e);
		this.state = {
			inputText: "Input text",
			checkboxChecked: true,
			selectedOption: undefined,
		};
	}
	OnInputChanged(e) {
		this.setState({
			inputText: e.currentTarget.value,
		});
	}
	OnToggled(e) {
		this.setState({
			checkboxChecked: e,
		});
	}
	OnSelectDropDownChanged(e) {
		this.setState({
			selectedOption: e.data,
		});
	}
	OnSubmit() {
		alert(JSON.stringify(this.state));
	}
	render() {
		return S.createElement(
			S.Fragment,
			null,
			S.createElement(
				Z.lV,
				{
					className: "DialogBody",
					onSubmit: this.OnSubmit,
				},
				S.createElement(
					"div",
					{
						className: "_FixedHeight",
					},
					S.createElement(Z.a3, null, "Text input"),
					S.createElement(Z.pd, {
						label: "INPUT TITLE",
						value: this.state.inputText,
						onChange: this.OnInputChanged,
					}),
					S.createElement(Z.pd, {
						label: "READ ONLY",
						value: "You can't change this",
						disabled: true,
					}),
					S.createElement(Z.m, {
						label: "Drop down",
						rgOptions: this.m_rgSelectOptions,
						strDefaultLabel: "Select one...",
						selectedOption: this.state.selectedOption,
						onChange: this.OnSelectDropDownChanged,
					}),
					S.createElement(Z.RF, {
						label: "On Off Toggle",
						checked: this.state.checkboxChecked,
						onChange: this.OnToggled,
					}),
					S.createElement(
						"div",
						{
							style: {
								marginBottom: "20px",
							},
						},
						S.createElement("span", null, "Checkbox:"),
						S.createElement(
							"div",
							{
								style: {
									display: "inline-block",
									marginLeft: "20px",
									verticalAlign: "middle",
								},
							},
							S.createElement(Z.Yh, null),
						),
					),
					S.createElement(
						"div",
						{
							style: {
								marginBottom: "20px",
							},
						},
						S.createElement("span", null, "Round checkbox:"),
						S.createElement(
							"div",
							{
								style: {
									display: "inline-block",
									marginLeft: "20px",
									verticalAlign: "middle",
								},
							},
							S.createElement(Z.Od, null),
						),
					),
					S.createElement(Z.Kc, {
						min: 0,
						max: 100,
						value: 25,
					}),
					S.createElement(
						"div",
						{
							style: {
								marginBottom: "20px",
							},
						},
						S.createElement(
							Z.Xp,
							null,
							S.createElement(Z.jn, null, "PrimaryButton"),
							S.createElement(Z.QW, null, "TextButton"),
							S.createElement(
								Z.$n,
								{
									svgicon: W.OeC,
								},
								"Button w/ Icon",
							),
						),
					),
					S.createElement(
						Z.dR,
						null,
						S.createElement(Z.pd, {
							label: "Left input",
							placeholder: "Placeholder",
						}),
						S.createElement(Z.pd, {
							label: "Right input",
							placeholder: "Placeholder",
						}),
					),
					S.createElement(Z.RF, {
						label: "Another toggle",
						description: "This one has a longer description with more details.",
					}),
				),
			),
			S.createElement(
				Z.wi,
				null,
				S.createElement(Z.CB, {
					onCancel: this.props.onCancel,
				}),
			),
		);
	}
}
Cg([M.oI], ee.prototype, "OnInputChanged", null);
Cg([M.oI], ee.prototype, "OnToggled", null);
Cg([M.oI], ee.prototype, "OnSelectDropDownChanged", null);
Cg([M.oI], ee.prototype, "OnSubmit", null);
class te extends S.Component {
	rgDragDropOptions = [
		S.createElement(
			Z.ck,
			{
				key: "key1",
				id: "key1",
			},
			S.createElement(Z.RF, {
				label: "Draggable toggle #1",
			}),
		),
		S.createElement(
			Z.ck,
			{
				key: "key2",
				id: "key2",
			},
			S.createElement(Z.RF, {
				label: "Draggable toggle #2",
			}),
		),
		S.createElement(
			Z.ck,
			{
				key: "key3",
				id: "key3",
			},
			S.createElement(Z.RF, {
				label: "Draggable toggle #3",
			}),
		),
		S.createElement(
			Z.ck,
			{
				key: "keyz",
				id: "keyz",
			},
			S.createElement(re, {
				ref: this.RefTest,
			}),
		),
		S.createElement(
			Z.ck,
			{
				key: "key4",
				id: "key4",
			},
			S.createElement(Z.RF, {
				label: "Draggable toggle #4",
			}),
		),
	];
	OnSubmit() {
		alert(JSON.stringify(this.state));
	}
	RefTest(e) {
		console.log("Got ref", e);
	}
	OnListReordered(e, t) {
		MoveElement(this.rgDragDropOptions, e, t);
		this.forceUpdate();
	}
	render() {
		return S.createElement(
			Z.lV,
			{
				className: "DialogBody",
				onSubmit: this.OnSubmit,
			},
			S.createElement(
				Z.AL,
				{
					onReorder: this.OnListReordered,
				},
				this.rgDragDropOptions,
			),
		);
	}
}
Cg([M.oI], te.prototype, "OnSubmit", null);
Cg([M.oI], te.prototype, "RefTest", null);
Cg([M.oI], te.prototype, "OnListReordered", null);
class re extends S.Component {
	m_iInterval;
	constructor(e) {
		super(e);
		this.state = {
			cSeconds: 0,
		};
	}
	componentDidMount() {
		this.m_iInterval = window.setInterval(() => {
			this.setState((e) => {
				return {
					cSeconds: e.cSeconds + 1,
				};
			});
		}, 1000);
	}
	componentWillUnmount() {
		window.clearInterval(this.m_iInterval);
	}
	render() {
		return S.createElement(Z.pd, {
			value: this.state.cSeconds,
			disabled: true,
			label: "COUNTER",
		});
	}
}
class ne extends S.Component {
	OnCMToggled(e) {
		if (e) {
			window.localStorage.setItem(K, "true");
		} else {
			window.localStorage.removeItem(K);
		}
		this.forceUpdate();
	}
	OnStickyContextMenuToggle(e) {
		$b(e);
		this.forceUpdate();
	}
	render() {
		return S.createElement(
			S.Fragment,
			null,
			S.createElement(
				Z.nB,
				null,
				S.createElement(Z.RF, {
					label: '"Sticky" Context Menus',
					description: "Context menus will stay open to allow inspecting CSS",
					checked: Y8(),
					onChange: this.OnStickyContextMenuToggle,
				}),
				S.createElement(Z.RF, {
					label: "Log all CM Traffic",
					description:
						"All messages to and from the steam servers will be logged to the browser console (F12)",
					checked:
						window.localStorage && window.localStorage.getItem(K) == "true",
					onChange: this.OnCMToggled,
				}),
			),
		);
	}
}
Cg([M.oI], ne.prototype, "OnCMToggled", null);
Cg([M.oI], ne.prototype, "OnStickyContextMenuToggle", null);
class ie extends S.Component {
	m_SteamID;
	constructor(e) {
		super(e);
		this.state = {
			searchString: "",
		};
	}
	OnSearchInput(e) {
		if (e.currentTarget.value != this.state.searchString) {
			this.setState({
				searchString: e.currentTarget.value,
			});
		}
	}
	render() {
		let e;
		let t = new $.JD();
		e =
			this.state.searchString == ""
				? u.xm.FriendStore.self.steamid.GetAccountID()
				: this.state.searchString;
		let r = new $.ol(u.xm.FriendStore.GetPlayer(Number(e)));
		t.hover = r;
		t.visible = true;
		r.data_loader.EnsureCommunityDataLoaded();
		return S.createElement(
			Z.lV,
			{
				className: "DialogBody",
			},
			S.createElement(
				Z.dR,
				null,
				S.createElement(
					"div",
					{
						style: {
							flex: 1,
						},
					},
					S.createElement(Z.JU, null, "Old Throbber"),
					S.createElement(
						"div",
						{
							className: "LoadingWrapper",
						},
						S.createElement(
							"div",
							{
								className: "LoadingThrobber",
							},
							S.createElement("div", {
								className: "Bar Bar1",
							}),
							S.createElement("div", {
								className: "Bar Bar2",
							}),
							S.createElement("div", {
								className: "Bar Bar3",
							}),
						),
						S.createElement("div", {
							className: "LoadingText",
						}),
					),
				),
				S.createElement(
					"div",
					{
						style: {
							flex: 2,
						},
					},
					S.createElement(Z.JU, null, "New Throbber (W.I.P.)"),
					S.createElement(
						"div",
						{
							className: "displayRow",
						},
						S.createElement(X.t, {
							size: "xlarge",
							string: "X-Large",
						}),
						S.createElement(X.t, {
							size: "large",
							string: "Large",
						}),
						S.createElement(X.t, {
							size: "medium",
							string: "Medium",
						}),
						S.createElement(X.t, {
							size: "small",
							string: "Small",
						}),
					),
				),
			),
			S.createElement(
				Z.nB,
				null,
				S.createElement(Z.JU, null, "Miniprofile Tester:"),
				S.createElement(
					"form",
					null,
					S.createElement("input", {
						className: "friendSearchInput",
						type: "text",
						name: "memberlistSearch",
						placeholder: "Enter SteamID",
						value: this.state.searchString,
						onInput: this.OnSearchInput,
						autoComplete: "off",
					}),
				),
				S.createElement(
					"div",
					{
						className: "fakeMiniProfile",
						style: {
							zIndex: 5,
						},
					},
					S.createElement(J.A6, {
						hoverInstance: t,
					}),
				),
				S.createElement(bP, {
					friend: u.xm.FriendStore.GetPlayer(Number(e)),
					context: null,
				}),
			),
		);
	}
}
Cg([M.oI], ie.prototype, "OnSearchInput", null);
let Be = class extends S.Component {
	render() {
		const e = u.xm.ChatStore.GetRecentChats();
		const t = {
			bGranularToday: true,
			bGranularYesterday: true,
			bGranularTodayTimeOnly: true,
			bGranularWeek: true,
			bAbbreviateDayOfWeek: true,
			bForce24HourClock: u.xm.SettingsStore.FriendsSettings.b24HourClock,
		};
		return S.createElement(
			"div",
			{
				className: Se.RecentChatsList,
			},
			e.map((e, r) => {
				if (e instanceof l.s) {
					const n = e;
					const i = n.GetMember(n.accountid_partner);
					let a;
					if (n.unread_message_count > 0) {
						a = S.createElement(
							"div",
							{
								key: "FriendMessageCount",
								className: "FriendMessageCount",
							},
							n.unread_message_count,
						);
					}
					let s = S.createElement(
						"div",
						{
							key: "RecentTime",
							className: Se.Time,
						},
						LocalizeCalendarTime(n.time_last_message, t),
					);
					return S.createElement(bP, {
						friend: i,
						key: r,
						className: A_1(
							Se.RecentChatElement,
							n.unread_message_count > 0 && "unreadFriend",
						),
						context: {
							chat: n,
							chatContext: "recentchats",
						},
						bHideStatus: true,
						bHideGameName: true,
						bInGameIcon: true,
						lastChat: n,
						statusPosition: "right",
						listStatusIndicator: [a, s],
					});
				}
				{
					const n = e;
					const i = n.GetRoomWithLastMessageForUser();
					let a;
					if (n.hasUnreadChatMessage) {
						a = S.createElement(
							"div",
							{
								key: "FriendMessageCount",
								className: A_1(
									"FriendMessageCount",
									n.HasUnreadMention && "HasUnreadMention",
								),
							},
							n.HasUnreadMention ? "@" : "!",
						);
					}
					let s = i
						? S.createElement(
								"div",
								{
									key: "RecentTime",
									className: Se.Time,
								},
								LocalizeCalendarTime(i.time_last_message, t),
							)
						: undefined;
					return S.createElement(C.AX, {
						key: r,
						className: Se.RecentChatElement,
						group: n,
						bShowLastChat: true,
						bHideUnreadMention: true,
						additionalElements: [s, a],
					});
				}
			}),
		);
	}
};
Be = Cg([b.PA], Be);
var ve;
let Ne = class extends S.Component {
	constructor(e) {
		super(e);
	}
	render() {
		let e = this.props.chat.VoiceChatStore.HasBeenAttemptingOverTwoSeconds();
		let t = this.props.chat.VoiceChatStore.IsAttemptingReconnect();
		return S.createElement(
			"div",
			{
				className: "connectionStatusLabels",
			},
			e &&
				S.createElement(
					"div",
					{
						className: "connectionStatus",
					},
					S.createElement(
						"a",
						{
							title: Localize("#VoiceChatConnectingHelp"),
							className: "connectionStatus",
							target: "_blank",
							href: "https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114",
						},
						Localize("#VoiceChatConnecting"),
					),
				),
			t &&
				S.createElement(
					"div",
					{
						className: "connectionStatus",
					},
					S.createElement(
						"a",
						{
							className: "connectionStatus",
							target: "_blank",
							href: "https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114",
						},
						Localize("#VoiceChatReconnecting"),
					),
				),
		);
	}
};
Ne = Cg([b.PA], Ne);
let Fe = class extends S.Component {
	render() {
		let e = this.props.chats.GetActiveVoiceChat();
		if (this.props.chats.VoiceChat.IsAnyVoiceActive() && e) {
			return S.createElement(lg, {
				chat: e,
				name: this.props.chats.GetActiveVoiceChannelName(),
				nostatus: false,
				containerRef: this.props.containerRef,
			});
		} else {
			return S.createElement(
				"div",
				{
					className: "activeVoiceControls",
					ref: this.props.containerRef,
				},
				S.createElement(
					"div",
					{
						className: "buttonsContainer",
					},
					S.createElement(
						"div",
						{
							className: "activeVoiceFlexBox",
						},
						S.createElement(
							"div",
							{
								className: "activeVoiceLabels",
							},
							S.createElement(
								"div",
								{
									className: "activeVoiceHeader",
								},
								Localize("#ActiveVoiceChat"),
							),
							S.createElement("div", {
								className: "activeVoiceName",
							}),
						),
						S.createElement(
							w.Z,
							{
								className: "activeVoiceButtons",
								"flow-children": "row",
							},
							S.createElement(f7, null),
							S.createElement(Ql, null),
							S.createElement("div", {
								className: "activeVoiceButtonsSpacer",
							}),
							S.createElement(Le, null),
							S.createElement("div", {
								className: "activeVoiceButtonsSpacerAfter",
							}),
						),
					),
				),
			);
		}
	}
};
Fe = Cg([b.PA], Fe);
export let lg = class extends S.Component {
	constructor(e) {
		super(e);
	}
	ActivateActiveVoiceChat(e) {
		if (this.props.chat instanceof s.d) {
			let t = u.xm.ChatStore.GetChatRoomGroup(
				this.props.chat.GetParentGroupID(),
			);
			if (t) {
				u.xm.UIStore.ShowAndOrActivateChatRoomGroup(CO(e), t, true);
				return;
			}
		}
		u.xm.UIStore.ShowAndOrActivateChat(CO(e), this.props.chat, true);
	}
	render() {
		let e = u.xm.VoiceStore.GetPushToTalkEnabled();
		let t = u.xm.VoiceStore.GetPushToMuteEnabled();
		let r = u.xm.VoiceStore.GetPushToTalkVoiceStateEnabled();
		let n = u.xm.VoiceStore.GetPushToTalkHotKeyDisplayString();
		let i = "";
		if (e || t) {
			i += " pushToTalkEnabled";
		}
		if (r) {
			i += " pushToTalkKeyDown";
		}
		return S.createElement(
			"div",
			{
				className: "activeVoiceControls" + i,
				ref: this.props.containerRef,
			},
			S.createElement(
				"div",
				{
					className: "buttonsContainer",
				},
				S.createElement(
					"div",
					{
						className: "activeVoiceFlexBox",
					},
					S.createElement(
						"div",
						{
							className: "activeVoiceLabels",
						},
						S.createElement(
							"div",
							{
								className: "activeVoiceHeader",
							},
							Localize("#ActiveVoiceChat"),
						),
						S.createElement(
							"div",
							{
								className: "activeVoiceName",
								onClick: this.ActivateActiveVoiceChat,
							},
							this.props.name,
						),
					),
					S.createElement(
						w.Z,
						{
							className: "activeVoiceButtons",
							"flow-children": "row",
						},
						S.createElement(f7, null),
						S.createElement(Ql, null),
						S.createElement("div", {
							className: "activeVoiceButtonsSpacer",
						}),
						S.createElement(Le, null),
						S.createElement("div", {
							className: "activeVoiceButtonsSpacerAfter",
						}),
					),
				),
				!this.props.nostatus &&
					S.createElement(Ne, {
						chat: this.props.chat,
					}),
			),
			(e || t) &&
				S.createElement(
					"div",
					{
						className: "activeVoicePushToTalk" + i,
					},
					Localize(t ? "#ActiveVoicePushToMute" : "#ActiveVoicePushToTalk", n),
				),
		);
	}
};
Cg([M.oI], lg.prototype, "ActivateActiveVoiceChat", null);
lg = Cg([b.PA], lg);
export let f7 = class extends S.Component {
	ToggleMicrophone(e) {
		if (u.xm.VoiceStore.IsMicMuted() && u.xm.VoiceStore.IsOutputMuted()) {
			u.xm.VoiceStore.ToggleOutputMuting();
		}
		u.xm.VoiceStore.ToggleMicMuting();
		e.stopPropagation();
	}
	render() {
		let e = u.xm.VoiceStore.BNoMicAvailableForSession();
		let t = u.xm.VoiceStore.BHasSampleRateTooHighInBrowser();
		let r = u.xm.VoiceStore.IsMicMuted();
		let n = "VoiceControlPanelButton ToggleMicrophoneButton";
		let i = "";
		i = r ? Localize("#VoiceChat_UnmuteMic") : Localize("#VoiceChat_MuteMic");
		if (e) {
			n += " NoMicrophone";
			i = t
				? Localize("#VoiceChat_ChromeSampleRateTooHighMicExplainer")
				: Localize("#VoiceChat_DeniedMicrophoneAccess");
		}
		if (r) {
			n += " disabled";
		}
		return S.createElement(
			he.fu,
			{
				className: n,
				onClick: this.ToggleMicrophone,
				onOKActionDescription: i,
				title: i,
			},
			S.createElement(
				"div",
				{
					className: "VoiceIconCtn",
				},
				r || e
					? S.createElement(W.EQ9, {
							off: true,
						})
					: S.createElement(W.EQ9, null),
			),
		);
	}
};
Cg([M.oI], f7.prototype, "ToggleMicrophone", null);
f7 = Cg([b.PA], f7);
export let Ql = class extends S.Component {
	ToggleVoiceOutput(e) {
		if (u.xm.VoiceStore.IsOutputMuted() == u.xm.VoiceStore.IsMicMuted()) {
			u.xm.VoiceStore.ToggleMicMuting();
		}
		u.xm.VoiceStore.ToggleOutputMuting();
		e.stopPropagation();
	}
	render() {
		let e = u.xm.VoiceStore.IsOutputMuted();
		let t = "VoiceControlPanelButton ToggleVoiceOutputButton";
		if (e) {
			t += " disabled";
		}
		let r = "";
		r = e
			? Localize("#VoiceChat_UnmuteSpeaker")
			: Localize("#VoiceChat_MuteSpeaker");
		return S.createElement(
			he.fu,
			{
				className: t,
				onClick: this.ToggleVoiceOutput,
				onOKActionDescription: r,
				title: r,
			},
			S.createElement(
				"div",
				{
					className: "VoiceIconCtn",
				},
				e
					? S.createElement(W.LeN, {
							off: true,
						})
					: S.createElement(W.LeN, null),
				" ",
			),
		);
	}
};
Cg([M.oI], Ql.prototype, "ToggleVoiceOutput", null);
Ql = Cg([b.PA], Ql);
let Le = class extends S.Component {
	static contextType = i.QO;
	EndVoiceChat(e) {
		u.xm.VoiceStore.OnUserEndVoiceChat();
		e.stopPropagation();
	}
	render() {
		return S.createElement(
			he.fu,
			{
				className: "VoiceControlPanelButton chatEndVoiceChat",
				onClick: this.EndVoiceChat,
				title: Localize("#VoiceChat_Leave"),
				onOKActionDescription: Localize("#VoiceChat_Leave"),
			},
			S.createElement(
				"div",
				{
					className: "VoiceIconCtn",
				},
				S.createElement(W.OWN, null),
			),
		);
	}
};
Cg([M.oI], Le.prototype, "EndVoiceChat", null);
Le = Cg([b.PA], Le);
class ze extends S.Component {
	constructor(e) {
		super(e);
	}
	GetNormalizedSearchString() {
		return (
			this.state.searchString &&
			this.state.searchString.trim().toLocaleLowerCase()
		);
	}
}
const xe = (e) => {
	e.fnOnToggleViewingIncomingInvites;
	let [t, r] = S.useState(u.xm.UIStore.FriendsListSteamDeckActiveTab);
	let n = S.useRef(u.xm.UIStore.FriendsListSteamDeckActiveTab);
	let [i] = S.useState(new Map());
	S.useEffect(() => {
		e.rgTabs.forEach((e) => {
			i.set(e.eTab, S.createRef());
		});
	}, [e, i]);
	S.useEffect(() => {
		if (t != n.current) {
			let e = i.get(n.current);
			let r = i.get(t);
			if (e.current?.BFocusWithin() && r.current) {
				r.current.TakeFocus();
			}
			n.current = t;
		}
	}, [t, i]);
	const a = S.useCallback(
		(e, t) => {
			r(t);
			n.current = e;
		},
		[r, n],
	);
	hL(u.xm.UIStore.FriendsListSteamDeckActiveTabCallbackList(), a);
	const s = S.useCallback((e) => {
		u.xm.UIStore.FriendsListSteamDeckActiveTab = e;
	}, []);
	const o = (e) => {
		u.xm.UIStore.SelectFriendsListSteamDeckSiblingTab(e);
	};
	let l = q3(() => {
		return u.xm.FriendStore.GetPendingInviteCount();
	});
	const c = () => {
		SteamClient.Messaging.PostMessage("FriendsUI", "NavigateToInvites", "{}");
	};
	return S.createElement(
		S.Fragment,
		null,
		S.createElement(
			"div",
			{
				className: "FriendsListSteamDeckTopSection",
			},
			S.createElement(
				"div",
				{
					className: "TabPanelHeader",
				},
				e.rgTabs[t].strTabContentTitle,
				t == ye.Jw.FriendsList &&
					S.createElement(
						w.Z,
						{
							className: "FriendActionsContainer",
						},
						l > 0 &&
							S.createElement(
								w.Z,
								{
									onActivate: c,
									onOKActionDescription: Localize("#Menu_FriendInvites"),
									focusable: true,
									className: "FriendsInvitesButton",
								},
								S.createElement(W.GSe, {
									bShowArm: true,
								}),
								S.createElement(
									"div",
									{
										className: "PendingInviteCount",
									},
									l,
								),
							),
						S.createElement(
							w.Z,
							{
								onActivate: c,
								onOKActionDescription: Localize("#FriendInviteLink_AddFriend"),
								focusable: true,
								className: "friendListButton AddFriendButton",
							},
							S.createElement(W.sdo, null),
						),
					),
				t == ye.Jw.GroupChats &&
					S.createElement(
						w.Z,
						{
							className: "FriendActionsContainer",
						},
						S.createElement(
							w.Z,
							{
								onActivate: (e) => {
									let t = GetOwningWindowForEvent(e);
									UA(_k(t), t);
								},
								onOKActionDescription: Localize("#Chat_CreateGroupChat"),
								focusable: true,
								className: "NewChatGroupButton",
							},
							S.createElement(W.nGC, null),
						),
					),
			),
			S.createElement(
				w.Z,
				{
					className: "FriendsListSteamDeckTabs",
					"flow-children": "row",
					navEntryPreferPosition: Ce.iU.PREFERRED_CHILD,
				},
				S.createElement(
					w.Z,
					{
						className: A_1(Ae.TabBumper, Ae.Previous),
						onActivate: () => {
							return o(-1);
						},
						focusable: false,
					},
					S.createElement(be.$m, {
						button: fe.g4.LeftBumper,
						type: be.wt.Dark,
					}),
				),
				e.rgTabs.map((e, r) => {
					return S.createElement(
						Ve,
						{
							key: r,
							navRef: i.get(e.eTab),
							tab: e.eTab,
							activeTab: t,
							preferredFocus: e.eTab == t,
							onFocus: () => {
								return s(e.eTab);
							},
							fnSetActiveTab: s,
						},
						e.tabElement,
					);
				}),
				S.createElement(
					w.Z,
					{
						className: A_1(Ae.TabBumper, Ae.Next),
						onActivate: () => {
							return o(1);
						},
						focusable: false,
					},
					S.createElement(be.$m, {
						button: fe.g4.RightBumper,
						type: be.wt.Dark,
					}),
				),
			),
		),
		S.createElement(We, {
			rgTabs: e.rgTabs,
			activeTab: t,
		}),
	);
};
const Ue = (e, t) => {
	let r;
	switch (e) {
		case ye.Jw.Favorites: {
			r = "FavoritesTabList";
			break;
		}
		case ye.Jw.FriendsList: {
			r = "FriendsTabList";
			break;
		}
		case ye.Jw.GroupChats: {
			r = "GroupsTabList";
			break;
		}
		case ye.Jw.RecentMessages: {
			r = "RecentMessagesTabList";
			break;
		}
		default: {
			r = "TabList";
		}
	}
	return A_1(r, e < t ? "beforeActiveTab" : e == t ? "" : "afterActiveTab");
};
function We(e) {
	const { rgTabs: t, activeTab: r } = e;
	const n = S.useRef(r);
	const i = a_1().bQuickAccessMenu;
	const a = S.useRef();
	const s = S.useRef();
	useEffect(() => {
		if (n.current !== r && a.current?.BFocusWithin() && s.current) {
			s.current.TakeFocus();
		}
		n.current = r;
	}, [r]);
	return S.createElement(
		w.Z,
		{
			className: A_1("FriendsListTabPanelContainer", i && "QuickAccess"),
			fnScrollIntoViewHandler: () => {
				return null;
			},
		},
		t.map((e) => {
			const t = e.eTab === r;
			const i = e.eTab === n.current;
			const o = t ? s : i ? a : null;
			return S.createElement(
				He,
				{
					className: Ue(e.eTab, r),
					key: e.eTab,
					navRef: o,
					bActiveTab: t,
				},
				e.tabContentElement,
			);
		}),
	);
}
const Ve = S.forwardRef(function (e, t) {
	let { tab: r, activeTab: n, fnSetActiveTab: i, ...a } = e;
	const s = r == n;
	return S.createElement(w.Z, {
		focusable: true,
		onActivate: () => {
			if (!s) {
				i(r);
			}
		},
		className: A_1("FriendsListTab", s && "Active"),
		...a,
		ref: t,
	});
});
const He = S.forwardRef(function (e, t) {
	let { bActiveTab: r, className: n, navRef: i, children: a, ...s } = e;
	const { refNav: o, bShouldMount: l } = H_1(true, 300000);
	const c = Ue_1(o, i);
	return S.createElement(
		w.Z,
		{
			navRef: c,
			className: A_1(n, "FriendsListTabPanel", r && "Active"),
			fnCanTakeFocus: () => {
				return r;
			},
			...s,
			ref: t,
		},
		l && a,
	);
});
function je() {
	let e = false;
	let t = q3(() => {
		let t = 0;
		const r = u.xm.ChatStore.GetRecentChats();
		for (const n of r) {
			if (n instanceof l.s) {
				const e = n;
				if (e.unread_message_count > 0) {
					t += e.unread_message_count;
				}
			} else if (n instanceof a.a$) {
				e ||= n.HasUnreadMention;
				if (n.hasUnreadChatMessage) {
					t++;
				}
			}
		}
		return t;
	});
	let r = t == 1 && e;
	let n = t < 100 && (!e || t != 1);
	let i = r ? "@" : "!";
	return S.createElement(
		"div",
		{
			className: A_1(Ae.RecentChatIcon, r && Ae.NotificationUnreadMention),
		},
		S.createElement(W.RO3, null),
		t > 0 &&
			S.createElement(
				"div",
				{
					className: Ae.UnreadAlert,
				},
				n ? t : i,
			),
	);
}
export let l$ = class extends ze {
	m_navRef = null;
	m_fnUnregisterMessages;
	constructor(e) {
		super(e);
		this.state = {
			searchString: "",
			bFriendTabSearch: false,
			bViewingIncomingInvites: false,
			tabLabelWidth: 0,
		};
		this.m_navRef = S.createRef();
	}
	componentDidMount() {
		const e = this.props.friends.FavoritesStore.favorites;
		u.xm.UIStore.FriendsListSteamDeckActiveTab = e.length
			? ye.Jw.Favorites
			: ye.Jw.FriendsList;
		this.m_fnUnregisterMessages = SteamClient.Messaging.RegisterForMessages(
			"FriendsList",
			this.OnMessage,
		);
	}
	componentWillUnmount() {
		if (this.m_fnUnregisterMessages) {
			this.m_fnUnregisterMessages.unregister();
		}
	}
	OnMessage(e, t, r) {
		if (e == "FriendsList" && t == "ShowInvitesList") {
			u.xm.UIStore.FriendsListSteamDeckActiveTab = ye.Jw.FriendsList;
			this.SetInviteListVisibility(true);
		}
	}
	OnSearchSelection() {
		this.setState({
			searchString: "",
		});
	}
	StartSearchOnKeyPress(e) {}
	SetInviteListVisibility(e) {
		this.setState(
			{
				bViewingIncomingInvites: e,
			},
			() => {
				if (this.state.bViewingIncomingInvites) {
					u.xm.FriendStore.FriendGroupStore.EnsureMutualFriendsForIncomingInvites();
					u.xm.FriendStore.ClanStore.EnsureInitialStateForClanInvites();
				}
			},
		);
	}
	ToggleViewingIncomingInvites() {
		this.SetInviteListVisibility(!this.state.bViewingIncomingInvites);
	}
	TakeFocus() {
		this.m_navRef.current.TakeFocus();
	}
	render() {
		let e = this.GetNormalizedSearchString();
		let t = "friendRequestButton";
		this.state.bViewingIncomingInvites;
		let r = "friendTab socialListTab activeTab";
		this.state.bFriendTabSearch;
		if (this.state.tabLabelWidth > 0) {
			this.state.tabLabelWidth;
		}
		let n = false;
		if (this.props.popup) {
			let e = _k(this.props.popup);
			n = !u_1(e, R.m);
		}
		let i = false;
		let a = 0;
		let s = false;
		let o =
			"friendListButton friendSettingsButton friendsListNeedsUpdate no-drag";
		if (m.ZM != null) {
			i = m.ZM.BNeedsUpdate();
			a = m.ZM.GetSecondsOutOfDate();
			if (a < 432000) {
				i = false;
			} else if (a > 604800) {
				o += " friendsListVeryOutOfDate";
				s = true;
			}
		}
		let l = "friendlist GamepadMode";
		if (!this.props.bQuickAccess) {
			l += " FriendsListAnchored";
		}
		if (this.state.bViewingIncomingInvites) {
			l += " FriendRequestViewActive";
		}
		const c = [
			{
				eTab: ye.Jw.Favorites,
				strTabContentTitle: Localize("#FriendGroup_Favorites"),
				tabElement: S.createElement(W.Em3, null),
				tabContentElement: S.createElement(k, {
					FavoritesStore: this.props.friends.FavoritesStore,
				}),
			},
			{
				eTab: ye.Jw.FriendsList,
				strTabContentTitle: Localize("#Label_Friends"),
				tabElement: S.createElement(W.GSe, {
					bShowArm: this.state.bViewingIncomingInvites,
				}),
				tabContentElement: S.createElement(et, {
					friends: this.props.friends,
					chats: this.props.chats,
					searchString: e,
					fnOnSearchSelection: this.OnSearchSelection,
					onStartSearch: this.StartSearchOnKeyPress,
					browserContext: this.props.browserContext,
					bViewingIncomingInvites: this.state.bViewingIncomingInvites,
					bHideGroupChats: true,
					onClose: this.ToggleViewingIncomingInvites,
				}),
			},
			{
				eTab: ye.Jw.GroupChats,
				strTabContentTitle: Localize("#Label_Groups"),
				tabElement: S.createElement(W.YJl, null),
				tabContentElement: S.createElement(tt, {
					friends: this.props.friends,
					chats: this.props.chats,
				}),
			},
			{
				eTab: ye.Jw.RecentMessages,
				strTabContentTitle: Localize("#FriendGroup_Recent"),
				tabElement: S.createElement(je, null),
				tabContentElement: S.createElement(Be, null),
			},
		];
		return S.createElement(
			w.Z,
			{
				className: l,
				"flow-children": "column",
				onButtonDown: (e) => {
					const t = e.detail.button;
					if (t == _e.pR.BUMPER_LEFT) {
						u.xm.UIStore.SelectFriendsListSteamDeckSiblingTab(-1);
						e.stopPropagation();
					} else if (t == _e.pR.BUMPER_RIGHT) {
						u.xm.UIStore.SelectFriendsListSteamDeckSiblingTab(1);
						e.stopPropagation();
					}
				},
				navRef: this.m_navRef,
			},
			S.createElement(
				"div",
				{
					className: A_1(
						"friendListHeaderContainer",
						"titleBarContainer",
						Pr() && "OSX",
					),
				},
				S.createElement("div", {
					className: "disconnectBlocker",
				}),
			),
			S.createElement(xe, {
				friends: this.props.friends,
				rgTabs: c,
				fnOnToggleViewingIncomingInvites: this.ToggleViewingIncomingInvites,
			}),
		);
	}
};
Cg([M.oI], l$.prototype, "OnMessage", null);
Cg([M.oI], l$.prototype, "OnSearchSelection", null);
Cg([M.oI], l$.prototype, "StartSearchOnKeyPress", null);
Cg([M.oI], l$.prototype, "SetInviteListVisibility", null);
Cg([M.oI], l$.prototype, "ToggleViewingIncomingInvites", null);
l$ = Cg([b.PA], l$);
export class hv extends S.Component {
	m_friendsListRef = null;
	constructor(e) {
		super(e);
		this.m_friendsListRef = S.createRef();
	}
	render() {
		let e = u.xm.UIStore.GetDefaultTabSetForContext(this.props.browserContext);
		return S.createElement(
			w.Z,
			{
				className: "FriendsListAndChatsSteamDeck",
				"flow-children": "row",
				onButtonDown: (e) => {
					const t = e.detail.button;
					if (t == _e.pR.BUMPER_LEFT) {
						u.xm.UIStore.SelectFriendsListSteamDeckSiblingTab(-1);
						e.stopPropagation();
					} else if (t == _e.pR.BUMPER_RIGHT) {
						u.xm.UIStore.SelectFriendsListSteamDeckSiblingTab(1);
						e.stopPropagation();
					}
				},
			},
			S.createElement(l$, {
				ref: this.m_friendsListRef,
				bQuickAccess: false,
				friends: this.props.friends,
				chats: this.props.chats,
				browserContext: this.props.browserContext,
				collapsed: false,
			}),
			S.createElement(
				w.Z,
				{
					className: "SteamDeckChats",
				},
				S.createElement(P.ft, {
					tabs: e,
					ResponsiveWindowState: null,
				}),
			),
			u.xm.CMInterface.BDisconnected() &&
				S.createElement(
					"div",
					{
						className: "FriendsDataOutofDate",
					},
					S.createElement(
						"div",
						null,
						S.createElement(V.Spinner, null),
						Localize("#Friends_Reconnecting_Msg"),
					),
				),
		);
	}
}
export let i$ = class extends ze {
	m_animationTabLabelCollapse;
	m_elTabLabel;
	m_tabLabelWidth;
	ref = S.createRef();
	constructor(e) {
		super(e);
		this.state = {
			searchString: "",
			bFriendTabSearch: false,
			bViewingIncomingInvites: false,
			tabLabelWidth: 0,
		};
		this.m_tabLabelWidth = -1;
	}
	m_refSearchInput;
	OnSearchInputRef(e) {
		this.m_refSearchInput = e;
	}
	StartSearchOnKeyPress(e) {
		let t = this.state.bFriendTabSearch;
		this.setState({
			bFriendTabSearch: true,
		});
		if (t && this.m_refSearchInput) {
			this.m_refSearchInput.focus();
		}
	}
	OnSearchInput(e) {
		if (e.currentTarget.value != this.state.searchString) {
			this.setState({
				searchString: e.currentTarget.value,
			});
		}
	}
	OnSearchSubmit(e) {
		e.preventDefault();
		let t = this.GetNormalizedSearchString();
		if (t && t.length) {
			let r =
				this.props.friends.FriendGroupStore.all_friends.GetMembersMatchingSearch(
					t,
				);
			if (r.length) {
				r[0].OpenChatDialog(CO(e));
			}
		}
		this.setState({
			searchString: "",
		});
	}
	OnSearchSelection() {
		this.setState({
			searchString: "",
		});
	}
	OnSearchKeyDown(e) {
		if (e.keyCode == 27) {
			this.setState({
				searchString: "",
			});
			e.preventDefault();
			e.currentTarget.blur();
			this.setState({
				bFriendTabSearch: false,
			});
			this.CollapseTabLabel();
		}
	}
	OnClearSearch() {
		this.setState({
			searchString: "",
		});
		this.OnTabSearchClick();
	}
	OnSettingsClick(e) {
		if (u.xm.IsDesktopUIActive()) {
			SteamClient.URL.ExecuteSteamURL("steam://open/settings/friends");
		} else {
			T_1(CO(e), e.currentTarget.ownerDocument.defaultView);
		}
	}
	ToggleCollapseExpand(e) {
		u.xm.UIStore.SetFriendsListCollapsed(CO(e), !this.props.collapsed);
	}
	OnDoFriendsListUpdate(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		let r = m.ZM.GetSecondsOutOfDate();
		let n = (0, Hq)(r, true);
		Ci(
			t,
			Localize("#Friends_ConfirmUpdate_Title"),
			Localize("#Friends_ConfirmUpdate_Body", n),
			Localize("#Friends_ConfirmUpdate_Ok"),
		)
			.then(() => {
				m.ZM.PerformFriendsUIUpdate();
			})
			.catch(() => {});
	}
	BindTabLabel(e) {
		this.m_elTabLabel = e;
		this.UpdateWindowIcon();
	}
	UpdateWindowIcon() {
		if (
			this.m_elTabLabel &&
			this.m_elTabLabel.ownerDocument.defaultView.SteamClient !== undefined
		) {
			let e = false;
			if (this.props.chats.VoiceChat.IsAnyVoiceActive()) {
				e = true;
			}
			let t =
				this.props.chats.FriendChatStore.GetFriendsWithUnreadMessages(
					this.props.browserContext,
				).length > 0;
			try {
				if (
					this.m_elTabLabel &&
					this.m_elTabLabel.ownerDocument.defaultView.SteamClient.Window
						.SetWindowIcon != null
				) {
					if (e) {
						this.m_elTabLabel.ownerDocument.defaultView.SteamClient.Window.SetWindowIcon(
							"voice",
						);
					} else if (t) {
						this.m_elTabLabel.ownerDocument.defaultView.SteamClient.Window.SetWindowIcon(
							"messages",
						);
					} else {
						this.m_elTabLabel.ownerDocument.defaultView.SteamClient.Window.SetWindowIcon(
							"steam",
						);
					}
				}
			} catch (e) {}
		}
	}
	CollapseTabLabel() {
		if (this.m_animationTabLabelCollapse) {
			this.m_animationTabLabelCollapse.Cancel();
		}
		if (this.state.bFriendTabSearch) {
			let e = 1;
			let t = this.m_tabLabelWidth;
			this.setState(
				{
					tabLabelWidth: e,
				},
				() => {
					this.m_animationTabLabelCollapse = new H.w(
						this,
						{
							tabLabelWidth: t,
						},
						{
							msDuration: 300,
							timing: "sine",
						},
					);
					this.m_animationTabLabelCollapse.Start();
				},
			);
		} else {
			let e = this.m_tabLabelWidth;
			let t = 1;
			this.setState(
				{
					tabLabelWidth: e,
				},
				() => {
					this.m_animationTabLabelCollapse = new H.w(
						this,
						{
							tabLabelWidth: t,
						},
						{
							msDuration: 300,
							timing: "sine",
						},
					);
					this.m_animationTabLabelCollapse.Start();
				},
			);
		}
	}
	OnTabSearchClick() {
		if (this.m_tabLabelWidth < 0) {
			this.m_tabLabelWidth = this.m_elTabLabel.clientWidth;
		}
		this.setState({
			bFriendTabSearch: !this.state.bFriendTabSearch,
		});
		this.CollapseTabLabel();
	}
	ToggleViewingIncomingInvites() {
		this.setState(
			{
				bViewingIncomingInvites: !this.state.bViewingIncomingInvites,
			},
			() => {
				if (this.state.bViewingIncomingInvites) {
					u.xm.FriendStore.FriendGroupStore.EnsureMutualFriendsForIncomingInvites();
					u.xm.FriendStore.ClanStore.EnsureInitialStateForClanInvites();
				}
			},
		);
	}
	SignIn() {
		window.parent.postMessage(
			{
				message: "SignInRequest",
				state: undefined,
			},
			"https://steamloopback.host",
		);
	}
	render() {
		let e = this.props.friends.self;
		let t = this.GetNormalizedSearchString();
		let r = this.state.bFriendTabSearch;
		let n = "friendTab socialListTab activeTab";
		if (r) {
			n += " TabSearchActive";
		}
		let a = {};
		if (this.state.tabLabelWidth > 0) {
			a.width = this.state.tabLabelWidth + "px";
		}
		let s = false;
		if (this.props.popup) {
			let e = _k(this.props.popup);
			s = !u_1(e, R.m);
		}
		let o = false;
		let l = 0;
		let c = false;
		let d =
			"friendListButton friendSettingsButton friendsListNeedsUpdate no-drag";
		if (m.ZM != null) {
			o = m.ZM.BNeedsUpdate();
			l = m.ZM.GetSecondsOutOfDate();
			if (l < 432000) {
				o = false;
			} else if (l > 604800) {
				d += " friendsListVeryOutOfDate";
				c = true;
			}
		}
		let A = this.props.chats.GetActiveVoiceChat();
		let p = false;
		if (this.props.chats.VoiceChat.IsAnyVoiceActive() || A) {
			p = true;
		}
		this.UpdateWindowIcon();
		let g = u.xm.SettingsStore.FriendsSettings.bCompactFriendsList;
		let h = this.props.collapsed;
		let C = "friendlist";
		let _ = m.ZM && m.ZM.IsDesktopUIActive();
		if (g) {
			C += " compactView";
		}
		if (o) {
			C += " needsUpdate";
		}
		if (h && this.props.collapsible) {
			C += " collapsed";
		}
		const f = u.xm.FriendStore.BIsOfflineMode();
		const b = s;
		return S.createElement(
			"div",
			{
				className: C,
				ref: this.ref,
			},
			S.createElement(
				"div",
				{
					className: A_1(
						"friendListHeaderContainer",
						"titleBarContainer",
						Pr() && "OSX",
					),
				},
				this.props.popup &&
					i.TS.IN_CLIENT &&
					S.createElement(se.c, {
						hideMin: b,
						hideMax: b,
						popup: this.props.popup,
						className: "chatTitleBar",
					}),
				this.props.collapsible &&
					S.createElement(
						"div",
						{
							className: "friendListCollapse no-drag",
						},
						S.createElement(
							"div",
							{
								className:
									"friendListButton friendCollapseButton no-drag " +
									(h ? "Collapsed" : ""),
								onClick: this.ToggleCollapseExpand,
							},
							S.createElement(W.F2T, null),
						),
					),
				S.createElement($e, {
					popup: this.props.popup && this.props.popup,
					currentUser: e,
				}),
				S.createElement(
					"div",
					{
						className: "friendListButtons",
					},
					o &&
						S.createElement(
							"div",
							{
								className: d,
								onClick: this.OnDoFriendsListUpdate,
								title: c
									? Localize("#Tooltip_FriendsListUpdate_VeryOld")
									: Localize("#Tooltip_FriendsListUpdate"),
							},
							S.createElement(W.MvQ, null),
						),
					!_ &&
						S.createElement(
							"div",
							{
								className: "friendListButton friendSettingsButton no-drag",
								onClick: this.OnSettingsClick,
								title: Localize("#Tooltip_Settings"),
							},
							S.createElement(W.wB_, null),
						),
				),
				!f &&
					S.createElement(
						S.Fragment,
						null,
						S.createElement(
							z.A,
							null,
							p &&
								S.createElement(
									De.M,
									{
										key: "activeVoiceControls1",
										classNames: "activevoice-anim",
										timeout: 500,
									},
									(e) => {
										return S.createElement(Fe, {
											chats: this.props.chats,
											containerRef: e,
										});
									},
								),
						),
						S.createElement(Je, {
							browserContext: this.props.browserContext,
						}),
						S.createElement(D, {
							FavoritesStore: this.props.friends.FavoritesStore,
							bInOverlay: s,
						}),
						S.createElement(
							"div",
							{
								className: "socialTabSearchContainer",
							},
							S.createElement(
								"div",
								{
									className: "socialTabContainer",
								},
								S.createElement(
									"div",
									{
										className: n,
									},
									S.createElement(
										"div",
										{
											className: "tabLabel",
											style: a,
											ref: this.BindTabLabel,
											onClick: r || this.OnTabSearchClick,
										},
										Localize("#tab_friends"),
									),
									S.createElement(
										"div",
										{
											className: "friendsTabButtonsContainer",
										},
										S.createElement(
											"div",
											{
												className: "TabSearchButton",
												onClick: r || this.OnTabSearchClick,
											},
											S.createElement(
												z.A,
												{
													className: "tabSearchTransitionGroup",
												},
												r &&
													S.createElement(
														De.M,
														{
															key: "tabSearch",
															classNames: "tab-search-anim",
															timeout: 500,
														},
														(e) => {
															return S.createElement(
																"div",
																{
																	ref: e,
																	className: "socialSearchContainer",
																},
																S.createElement(
																	"form",
																	{
																		className:
																			"socialInputContainer" +
																			(r ? " SearchActive" : ""),
																		name: "friendSearchForm",
																		onSubmit: this.OnSearchSubmit,
																	},
																	S.createElement(
																		"div",
																		{
																			className: "inputContainer no-drag",
																		},
																		S.createElement("input", {
																			id: "friendSearchInputID",
																			className: "friendSearchInput",
																			autoFocus: true,
																			type: "text",
																			name: "friendSearch",
																			placeholder: Localize("#SearchFriends"),
																			value: this.state.searchString,
																			onInput: this.OnSearchInput,
																			onKeyDown: this.OnSearchKeyDown,
																			autoComplete: "off",
																			ref: this.OnSearchInputRef,
																		}),
																		S.createElement(
																			"div",
																			{
																				className: "friendSearchClear",
																				onClick: this.OnClearSearch,
																			},
																			S.createElement(W.sED, null),
																		),
																	),
																),
															);
														},
													),
											),
											S.createElement(
												"div",
												{
													className: "searchIconButton",
													onClick: this.OnTabSearchClick,
													title: Localize("#Tooltip_SearchFriends"),
												},
												S.createElement(W.eSy, null),
											),
										),
										S.createElement(Ye, {
											fnToggleViewingIncomingInvites:
												this.ToggleViewingIncomingInvites,
											bViewingIncomingInvites:
												this.state.bViewingIncomingInvites,
										}),
										S.createElement(
											L.uU,
											{
												href: i.TS.COMMUNITY_BASE_URL + "friends/add",
											},
											S.createElement(
												"div",
												{
													className: "friendListButton addFriendButton no-drag",
													title: Localize("#Tooltip_AddFriend"),
												},
												S.createElement(W.sdo, null),
											),
										),
									),
								),
							),
						),
					),
				S.createElement("div", {
					className: "disconnectBlocker",
				}),
			),
			f
				? S.createElement(
						"div",
						{
							className: Ae.OfflineContainer,
						},
						S.createElement(
							"div",
							{
								className: Ae.OfflineMessage,
							},
							S.createElement(
								"div",
								{
									className: Ae.summaryText,
								},
								Localize("#FriendsList_SignedOut"),
							),
							S.createElement(
								"div",
								{
									className: Ae.detailText,
								},
								Localize("#FriendsList_SignedOut_Detail"),
							),
							S.createElement(
								"div",
								null,
								S.createElement(
									"button",
									{
										className: Ae.retryButton,
										onClick: this.SignIn,
									},
									Localize("#Friends_SignIn"),
								),
							),
						),
					)
				: S.createElement(et, {
						friends: this.props.friends,
						chats: this.props.chats,
						searchString: t,
						fnOnSearchSelection: this.OnSearchSelection,
						onStartSearch: this.StartSearchOnKeyPress,
						browserContext: this.props.browserContext,
						bViewingIncomingInvites: this.state.bViewingIncomingInvites,
						onClose: this.ToggleViewingIncomingInvites,
					}),
			S.createElement(
				"div",
				{
					className: "friendListFooter",
				},
				S.createElement(Xe, null),
			),
		);
	}
};
Cg([M.oI], i$.prototype, "OnSearchInputRef", null);
Cg([M.oI], i$.prototype, "StartSearchOnKeyPress", null);
Cg([M.oI], i$.prototype, "OnSearchInput", null);
Cg([M.oI], i$.prototype, "OnSearchSubmit", null);
Cg([M.oI], i$.prototype, "OnSearchSelection", null);
Cg([M.oI], i$.prototype, "OnSearchKeyDown", null);
Cg([M.oI], i$.prototype, "OnClearSearch", null);
Cg([M.oI], i$.prototype, "OnSettingsClick", null);
Cg([M.oI], i$.prototype, "ToggleCollapseExpand", null);
Cg([M.oI], i$.prototype, "OnDoFriendsListUpdate", null);
Cg([M.oI], i$.prototype, "BindTabLabel", null);
Cg([M.oI], i$.prototype, "CollapseTabLabel", null);
Cg([M.oI], i$.prototype, "OnTabSearchClick", null);
Cg([M.oI], i$.prototype, "ToggleViewingIncomingInvites", null);
Cg([M.oI], i$.prototype, "SignIn", null);
i$ = Cg([b.PA], i$);
const Ye = PA(function (e) {
	const { fnToggleViewingIncomingInvites: t, bViewingIncomingInvites: r } = e;
	const [n, i] = useState(false);
	if (n || r) {
		u.xm.FriendStore.FriendGroupStore.incoming_invites_group.member_list;
		u.xm.FriendStore.ClanStore.clan_invites;
	}
	const a = u.xm.FriendStore.GetClanInviteCount();
	const s = u.xm.FriendStore.GetFriendInviteCount();
	let o = u.xm.FriendStore.GetOutgoingFriendRequestCount() > 0;
	let l = s + a;
	const c = s > 0 || a > 0 || a > 0 || o;
	let m = "friendRequestButton";
	if (r) {
		m += " friendRequestViewActive";
	}
	if (o && l == 0) {
		m += " friendRequestOutgoingOnly";
	}
	useEffect(() => {
		if (!c && r) {
			t();
		}
	}, [c, r, t]);
	if (c) {
		return S.createElement(
			"div",
			{
				className: m,
				onClick: t,
				title: LocalizePlural("#Tooltip_FriendRequest", l),
				onMouseEnter: () => {
					return i(true);
				},
				onMouseLeave: () => {
					return i(false);
				},
			},
			S.createElement(W.Gv$, null),
			l > 0 &&
				S.createElement(
					"div",
					{
						className: "requestsNumber",
					},
					l,
				),
		);
	} else {
		return null;
	}
});
class Ke extends S.Component {
	render() {
		let e = i.TS.COMMUNITY_BASE_URL + "groups/SteamClientBeta/discussions/3/";
		if (u.xm.IsInBeta()) {
			return S.createElement(
				"div",
				{
					className: "betaFeedbackLabel",
				},
				LocalizeReact(
					"#GiveFeedbackToSteam_Desc",
					S.createElement(
						L.uU,
						{
							href: e,
							className: "betaFeedbackAnchor",
						},
						" ",
						Localize("#GiveFeedbackToSteam_URL"),
						" ",
					),
				),
			);
		} else {
			return null;
		}
	}
}
let Xe = class extends S.Component {
	constructor(e) {
		super(e);
	}
	OnSettingsZooClick(e) {
		0;
	}
	render() {
		return S.createElement(
			S.Fragment,
			null,
			S.createElement(
				"div",
				{
					className: "flexRowCentered",
				},
				false,
				S.createElement(Ke, null),
			),
		);
	}
};
Cg([M.oI], Xe.prototype, "OnSettingsZooClick", null);
Xe = Cg([b.PA], Xe);
const Je = PA((e) => {
	const { browserContext: t } = e;
	const r = (function () {
		const [e, t] = useState(false);
		const r = q3(() => {
			return u.xm.FriendStore.self.persona.m_gameid;
		});
		useEffect(() => {
			let e = true;
			u.xm.RemotePlayStore.BCanCreateInviteForGame(r, false).then((r) => {
				if (e) {
					t(r);
				}
			});
			return () => {
				e = false;
			};
		}, [r]);
		return e;
	})();
	const [n, i] = PJ("bRemotePlayLinkHintDismissed");
	const [a, s] = l_2();
	if (!r) {
		return null;
	}
	const o = Localize("#RemotePlay_LinkCopyTitle");
	return S.createElement(
		"div",
		{
			className: Ae.RemotePlayInviteLinkSection,
		},
		S.createElement(
			"div",
			{
				className: Ae.LinkRow,
				onClick: () => {
					return SteamClient.Friends.ShowRemotePlayTogetherUI();
				},
			},
			S.createElement(
				"div",
				{
					className: Ae.LinkRowText,
				},
				o,
			),
			S.createElement(
				"div",
				{
					title: Localize("#Tooltip_RemotePlay_CreateInvite"),
					className: Ae.LinkRowIconContainer,
				},
				S.createElement(pe.Ov, {
					className: Ae.LinkRowIcon,
				}),
			),
		),
		!n &&
			S.createElement(
				"div",
				{
					className: Ae.LinkExplanation,
				},
				S.createElement(
					"div",
					{
						className: Ae.ExplanationText,
					},
					LocalizeReact(
						"#RemotePlay_LinkCopyExplanation",
						S.createElement(
							"span",
							{
								className: Ae.Strong,
							},
							Localize("#RemotePlay_LinkCopyExplanation_Anyone"),
						),
					),
				),
				S.createElement(
					"div",
					{
						className: Ae.GotItButton,
						onClick: () => {
							return i(true);
						},
					},
					Localize("#Generic_Got_It"),
				),
				S.createElement(
					"svg",
					{
						className: Ae.AccentChevron,
						width: "30px",
						height: "15px",
						viewBox: "0 0 64 32",
					},
					S.createElement(
						"defs",
						null,
						S.createElement(
							"linearGradient",
							{
								id: a,
								x1: "0%",
								y1: "0%",
								x2: "0%",
								y2: "100%",
							},
							S.createElement("stop", {
								offset: "0%",
								style: {
									stopColor: "rgb(24, 92, 108)",
									stopOpacity: 1,
								},
							}),
							S.createElement("stop", {
								offset: "100%",
								style: {
									stopColor: "rgb(24, 92, 108)",
									stopOpacity: 1,
								},
							}),
						),
					),
					S.createElement("path", {
						d: "M 0 0 L 64 0 L 32 32 z",
						stroke: "colourname",
						fill: s,
					}),
				),
			),
	);
});
const $e = PA(function (e) {
	const { currentUser: t, popup: r } = e;
	const n = Qn();
	const i = Uy(t.persona.m_unGamePlayedAppID);
	useEffect(() => {
		t.LoadEquippedProfileItems();
	});
	const a = S.useCallback((e) => {
		return HS(CO(e), e);
	}, []);
	const s = S.useCallback(
		(e) => {
			let r = t.GetCommunityProfileURL();
			EP(e, r);
			e.stopPropagation();
		},
		[t],
	);
	let o = "currentUserContainer " + rO(t.persona);
	if (t.persona.m_ePersonaState == 2) {
		o += " userDoNotDisturb";
	}
	let l = null;
	if (u.xm.FriendStore.BIsInvisibleMode()) {
		l = () => {
			return Localize("#PersonaStateInvisible");
		};
	}
	let c = null;
	if (t.persona.HasCurrentGameRichPresence()) {
		c = () => {
			return t.persona.GetCurrentGameRichPresence();
		};
	} else if (t.persona.m_broadcastAccountId) {
		c = () => {
			return t.GetBroadcastDescription();
		};
	}
	let d =
		t.persona.is_ingame &&
		(u.xm.UserStore.PrivacySettings.privacy_state_ownedgames == 1 || i);
	let A = null;
	let g = null;
	let h = !n && u.xm.SettingsStore.FriendsSettings.bAnimatedAvatars;
	if (t.BLoadedEquippedItems()) {
		let e = t.GetEquippedProfileItems();
		if (e) {
			A = e.animated_avatar;
			g = e.avatar_frame;
		}
	}
	let C = false;
	if (r) {
		let e = _k(r);
		C = !u_1(e, R.m);
	}
	const _ = C ? "Medium" : "Infinite";
	let f = S.createElement(
		"div",
		{
			className: "currentUserAvatar",
		},
		S.createElement(v.xz, {
			loopDuration: h ? _ : "None",
			bLimitProfileFrameAnimationTime: !h || C,
			size: "Medium",
			persona: t.persona,
			animatedAvatar: A,
			avatarFrame: g,
			onClick: s,
		}),
	);
	return S.createElement(
		"div",
		{
			className: o,
		},
		S.createElement(
			"svg",
			{
				className: "statusHeaderGlow",
				width: "100%",
				height: "132",
				xmlns: "http://www.w3.org/2000/svg",
			},
			S.createElement(
				"defs",
				null,
				S.createElement(
					"radialGradient",
					{
						id: "exampleGradient",
						cx: "50%",
						cy: "50%",
						r: "50%",
						fx: "35%",
						fy: "30%",
					},
					S.createElement("stop", {
						offset: "10%",
						stopColor: "gold",
					}),
					S.createElement("stop", {
						offset: "95%",
						stopColor: "green",
					}),
				),
			),
			S.createElement("ellipse", {
				cx: "5%",
				cy: "28%",
				rx: "65%",
				ry: "60%",
				fill: "url(#exampleGradient)",
			}),
		),
		S.createElement(
			"div",
			{
				className: "AvatarAndUser",
				onContextMenu: a,
			},
			S.createElement(
				Rg,
				{
					friend: t,
					context: {
						chatContext: "friendslist",
					},
					onContextMenu: a,
				},
				f,
			),
			S.createElement(me.D, {
				className: "labelHolder",
				persona: t.persona,
				bIsSelf: true,
				eFriendRelationship: t.efriendrelationship,
				strNickname: t.nickname,
				bParenthesizeNicknames:
					u.xm.SettingsStore.CommunityPreferences.bParenthesizeNicknames,
				bCompactView: u.xm.SettingsStore.FriendsSettings.bCompactFriendsList,
				bHideSnooze: true,
				renderStatus: l,
				renderRichPresence: c,
				onContextMenu: a,
				bDNDSet: u.xm.FriendStore.GetUserDoNotDisturb(),
				bHasGamePrivacy: d,
			}),
		),
	);
});
let et = class extends S.Component {
	static contextType = i.QO;
	m_elFriendsListContent;
	m_elFriendsListScroll;
	constructor(e) {
		super(e);
		this.state = {
			bScrolledFromTop: false,
		};
	}
	get frame() {
		return this.m_elFriendsListContent;
	}
	OnContextMenu(e) {
		let t = this.props.searchString && this.props.searchString.length > 0;
		if (!this.props.bViewingIncomingInvites && !t) {
			iS(CO(e), null, e);
		}
	}
	BindFriendsListContent(e) {
		this.m_elFriendsListContent = e;
	}
	OnFriendsListKeyDown(e) {
		if (!e.ctrlKey && !e.altKey && !e.metaKey && !(e.key.length > 1)) {
			if (this.props.onStartSearch) {
				this.props.onStartSearch(e);
			}
		}
	}
	OnFriendsListScrollRef(e) {
		this.m_elFriendsListScroll = e;
	}
	ScrollToTop() {
		if (this.m_elFriendsListScroll) {
			this.m_elFriendsListScroll.scrollTop = 0;
		}
	}
	OnScrollFriendsList(e) {
		let t = e.currentTarget.scrollTop > 10;
		if (t != this.state.bScrolledFromTop) {
			this.setState({
				bScrolledFromTop: t,
			});
		}
	}
	OnAcceptClanInvite(e, t) {
		let r = e.currentTarget.ownerDocument.defaultView;
		u.xm.FriendStore.ClanStore.RespondToClanInvite(t, true).then((e) => {
			if (!e) {
				Ic(
					r,
					Localize("#Friend_AcceptClanInvite"),
					Localize("#Friend_AcceptClanInvite_Error"),
				);
			}
		});
	}
	OnDeclineClanInvite(e, t) {
		let r = e.currentTarget.ownerDocument.defaultView;
		u.xm.FriendStore.ClanStore.RespondToClanInvite(t, false).then((e) => {
			if (!e) {
				Ic(
					r,
					Localize("#Friend_DeclineClanInvite"),
					Localize("#Friend_DeclineClanInvite_Error"),
				);
			}
		});
	}
	render() {
		let e;
		let t = this.props.searchString && this.props.searchString.length > 0;
		let { bViewingIncomingInvites: r, bHideGroupChats: n } = this.props;
		const a =
			this.props.browserContext.m_unAppID &&
			this.props.browserContext.m_unAppID != 0;
		let s = {
			searchString: this.props.searchString,
			fnOnSearchSelection: this.props.fnOnSearchSelection,
		};
		if (this.props.friends.self.is_ready) {
			if (r) {
				let r = u.xm.FriendStore.ClanStore.clan_invites.length;
				oe.b.InitFromAccountID(u.xm.FriendStore.self.accountid);
				let n = [];
				if (r) {
					for (let e of u.xm.FriendStore.ClanStore.clan_invites) {
						const t = e.steamid;
						let r;
						r = e.BIsOGG()
							? `${i.TS.COMMUNITY_BASE_URL}app/${e.GetOGGAppID()}`
							: `${i.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}`;
						n.push(
							S.createElement(
								"div",
								{
									className: "clanInviteContainer",
									key: "clan_invite_" + t.GetAccountID(),
								},
								S.createElement(
									L.uU,
									{
										href: r,
									},
									S.createElement(
										"div",
										{
											className: "clanAvatar",
										},
										S.createElement("img", {
											className: "clanAvatarIcon",
											src: e.avatar_url_medium,
										}),
									),
									S.createElement(
										"div",
										{
											className: "clanName",
										},
										e.name,
										S.createElement(
											"div",
											{
												className: "clanDetails displayRow",
											},
											S.createElement(
												"div",
												{
													className: "displayRow statMembersTotal",
												},
												S.createElement("div", {
													className: "statCircle",
												}),
												e.member_count,
												" Members",
											),
											e.users_online > 0 &&
												S.createElement(
													"div",
													{
														className: "displayRow statMembersOnline",
														title: LocalizePlural(
															"#Chat_Members_Online_Tooltip",
															e.users_online,
														),
													},
													S.createElement("div", {
														className: "statCircle",
													}),
													e.users_online,
												),
											e.users_ingame > 0 &&
												S.createElement(
													"div",
													{
														className: "displayRow statMembersInGame",
														title: LocalizePlural(
															"#Chat_Members_InGame_Tooltip",
															e.users_ingame,
														),
													},
													S.createElement("div", {
														className: "statCircle",
													}),
													e.users_ingame,
												),
										),
									),
								),
								S.createElement(
									"div",
									{
										className: "clanActionButtons",
									},
									S.createElement(
										"div",
										{
											className: "displayColumn",
											title: Localize("#FriendGroup_Tip_Accept_Invite"),
										},
										S.createElement(
											Z.QW,
											{
												onClick: (e) => {
													this.OnAcceptClanInvite(e, t);
												},
											},
											Localize("#Button_Accept"),
										),
									),
									S.createElement(
										"div",
										{
											className: "displayColumn",
											title: Localize("#FriendGroup_Tip_Decline_Invite"),
										},
										S.createElement(
											Z.QW,
											{
												onClick: (e) => {
													this.OnDeclineClanInvite(e, t);
												},
											},
											Localize("#Button_Decline"),
										),
									),
								),
							),
						);
					}
				}
				e = S.createElement(
					S.Fragment,
					null,
					r > 0 &&
						!t &&
						S.createElement(
							S.Fragment,
							null,
							S.createElement(
								"div",
								{
									className: "clanInvitesGroupContainer",
								},
								S.createElement(
									"div",
									{
										className: "clanInviteTitle",
									},
									Localize("#Friend_PendingClanInvites"),
								),
								n,
							),
						),
					S.createElement(at, {
						group: this.props.friends.FriendGroupStore.incoming_invites_group,
						collapsed: false,
						...s,
						onClose: this.props.onClose,
						bInOverlay: a,
					}),
					S.createElement(at, {
						group: this.props.friends.FriendGroupStore.outgoing_invites_group,
						collapsed: false,
						...s,
						onClose: this.props.onClose,
						bInOverlay: a,
					}),
				);
			} else if (t) {
				e = S.createElement(at, {
					group: this.props.friends.FriendGroupStore.all_friends,
					collapsed: false,
					bInOverlay: a,
					...s,
				});
			} else {
				let t = this.props.friends.FriendGroupStore.user_groups.map((e) => {
					return S.createElement(at, {
						group: e,
						key: e.id,
						groupDisplayPrefs:
							this.props.friends.FriendGroupStore.groupDisplayPrefs,
						bInOverlay: a,
						...s,
					});
				});
				let r = this.props.friends.FriendGroupStore.default_groups.map((e) => {
					return S.createElement(at, {
						group: e,
						key: e.id,
						groupDisplayPrefs:
							this.props.friends.FriendGroupStore.groupDisplayPrefs,
						bInOverlay: a,
						...s,
					});
				});
				let n = false;
				if (
					this.props.chats.FriendChatStore.GetFriendsWithUnreadMessages(
						this.props.browserContext,
					).length
				) {
					n = true;
				}
				e = S.createElement(
					S.Fragment,
					null,
					n &&
						!this.context?.IN_GAMEPADUI &&
						S.createElement(
							"div",
							{
								className: "recentChatsGroup unreadChatsGroup",
							},
							S.createElement(_t, {
								friendChatStore: this.props.chats.FriendChatStore,
								browserContext: this.props.browserContext,
							}),
						),
					S.createElement(it, {
						bInOverlay: a,
					}),
					t,
					r,
				);
			}
		} else {
			e = undefined;
		}
		let o = u.xm.SettingsStore.FriendsSettings.bCompactFriendsList;
		return S.createElement(
			w.Z,
			{
				className: "FriendsListContent" + (o ? " CompactFriendsList" : ""),
				ref: this.BindFriendsListContent,
				retainFocus: true,
				"flow-children": "column",
			},
			S.createElement(de.H, null),
			!this.context?.IN_GAMEPADUI &&
				S.createElement(Ct, {
					browserContext: this.props.browserContext,
					bScrolledFromTop: this.state.bScrolledFromTop && !t,
					onClick: this.ScrollToTop,
				}),
			S.createElement(
				"div",
				{
					className: "friendlistListContainer",
					onContextMenu: this.OnContextMenu,
					tabIndex: 0,
					onKeyDown: this.OnFriendsListKeyDown,
					ref: this.OnFriendsListScrollRef,
					onScroll: this.OnScrollFriendsList,
				},
				S.createElement(
					Z.$n,
					{
						focusable: r,
						onClick: this.props.onClose,
						className: "BackToFriendsListButton",
					},
					Localize("#FriendGroup_CloseGamepadUI"),
				),
				S.createElement(
					"div",
					{
						className: "listContentContainer",
					},
					e,
					S.createElement("div", {
						className: "disconnectBlocker",
					}),
				),
			),
			S.createElement(de.P, null),
			!n &&
				S.createElement(rt, {
					friends: this.props.friends,
					chats: this.props.chats,
					parent: this,
				}),
		);
	}
};
Cg([M.oI], et.prototype, "OnContextMenu", null);
Cg([M.oI], et.prototype, "BindFriendsListContent", null);
Cg([M.oI], et.prototype, "OnFriendsListKeyDown", null);
Cg([M.oI], et.prototype, "OnFriendsListScrollRef", null);
Cg([M.oI], et.prototype, "ScrollToTop", null);
Cg([M.oI], et.prototype, "OnScrollFriendsList", null);
et = Cg([b.PA], et);
class tt extends S.Component {
	constructor(e) {
		super(e);
	}
	render() {
		return S.createElement(
			"div",
			{
				className: "GroupChats",
			},
			S.createElement(C.IV, {
				friends: this.props.friends,
				chats: this.props.chats,
			}),
		);
	}
}
let rt = class extends S.Component {
	static {
		ve = this;
	}
	static s_pxGroupChatsAutoCollapseThreshold = 45;
	m_elChatRoomTitleContainer;
	m_iTimeoutSaveHeightPref;
	m_iGrabberBarInitialGrabOffset;
	m_elChatRoomListContainer;
	m_elChatSection;
	m_window;
	m_observerChatSection;
	m_iTimeoutUpdateChatSectionSize;
	m_animationChatSectionShrink;
	ref = S.createRef();
	m_bMouseOver = false;
	constructor(e) {
		super(e);
		this.state = {
			nChatRoomListContainerHeight: m.ZM.UIDisplayPrefs.nChatRoomListHeightPx,
			nChatRoomListContainerMaxHeight:
				m.ZM.UIDisplayPrefs.nChatRoomListHeightPx,
			bChatRoomListCollapsed: m.ZM.UIDisplayPrefs.bChatRoomListCollapsed,
			nChatRoomListPreCollapseHeight: m.ZM.UIDisplayPrefs.nChatRoomListHeightPx,
			bChatRoomListResizing: false,
		};
	}
	UpdateChatSectionSize() {
		AssertMsg(this.m_elChatSection, "m_elChatRoomListContainer not set");
		if (this.m_bMouseOver) {
			if (this.m_iTimeoutUpdateChatSectionSize) {
				this.m_window.clearTimeout(this.m_iTimeoutUpdateChatSectionSize);
			}
			this.m_iTimeoutUpdateChatSectionSize = this.m_window.setTimeout(() => {
				this.m_iTimeoutUpdateChatSectionSize = undefined;
				this.UpdateChatSectionSize();
			}, 500);
			return;
		}
		let e = this.m_elChatSection.maximumHeight;
		let t = this.m_elChatSection.minimumHeight;
		this.m_elChatRoomListContainer.style.minHeight = t + "px";
		if (this.state.nChatRoomListContainerMaxHeight > e) {
			if (this.m_animationChatSectionShrink) {
				this.m_animationChatSectionShrink.Cancel();
			}
			let r = this.state.nChatRoomListContainerMaxHeight;
			let n = e;
			this.setState(
				{
					nChatRoomListContainerMaxHeight: r,
				},
				() => {
					this.m_animationChatSectionShrink = new H.w(
						this,
						{
							nChatRoomListContainerHeight: OQ(
								this.state.nChatRoomListContainerHeight,
								t,
								e,
							),
							nChatRoomListContainerMaxHeight: n,
						},
						{
							msDuration: 300,
							timing: "sine",
						},
					);
					this.m_animationChatSectionShrink.Start();
				},
			);
		} else {
			this.setState({
				nChatRoomListContainerMaxHeight: e,
			});
		}
	}
	OnChatSectionMutation(e, t) {
		if (this.m_iTimeoutUpdateChatSectionSize) {
			this.m_window.clearTimeout(this.m_iTimeoutUpdateChatSectionSize);
		}
		this.m_iTimeoutUpdateChatSectionSize = this.m_window.setTimeout(() => {
			this.m_iTimeoutUpdateChatSectionSize = undefined;
			this.UpdateChatSectionSize();
		}, 1000);
	}
	BindChatRoomTitleContainer(e) {
		this.m_elChatRoomTitleContainer = e;
	}
	BindChatRoomListContainer(e) {
		if (e) {
			this.m_elChatRoomListContainer = e;
			this.UpdateChatSectionSize();
		}
	}
	BindChatSection(e) {
		if (this.m_observerChatSection) {
			this.m_observerChatSection.disconnect();
			this.m_observerChatSection = null;
		}
		if (e) {
			this.m_elChatSection = e;
			this.m_window = e.div.ownerDocument.defaultView;
			this.m_observerChatSection = new MutationObserver(
				this.OnChatSectionMutation,
			);
			this.m_observerChatSection.observe(e.div, {
				childList: true,
				subtree: true,
			});
		}
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		this.m_iGrabberBarInitialGrabOffset =
			e.clientY - this.m_elChatRoomTitleContainer.getBoundingClientRect().top;
		this.setState({
			nChatRoomListPreCollapseHeight: m.ZM.UIDisplayPrefs.nChatRoomListHeightPx,
		});
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterChatRoomListDragEvents);
	}
	OnGrabberTouchStart(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		this.m_iGrabberBarInitialGrabOffset =
			e.touches[0].clientY -
			this.m_elChatRoomTitleContainer.getBoundingClientRect().top;
		t.addEventListener("touchmove", this.HandleTouchMove);
		t.addEventListener("touchend", this.UnregisterChatRoomListDragEvents);
	}
	HandleTouchMove(e) {
		if (e.touches.length >= 1) {
			this.InternalAdjustChatRoomListContainerOnDrag(e.touches[0].clientY);
		}
	}
	HandleMouseMove(e) {
		this.InternalAdjustChatRoomListContainerOnDrag(e.clientY);
	}
	OnMouseEnter(e) {
		this.m_bMouseOver = true;
	}
	OnMouseLeave(e) {
		this.m_bMouseOver = false;
	}
	InternalAdjustChatRoomListContainerOnDrag(e) {
		if (!this.props.parent || !this.props.parent.frame) {
			return;
		}
		let t = this.props.parent.frame.getBoundingClientRect();
		let r = t.top;
		let n = this.m_iGrabberBarInitialGrabOffset;
		let i =
			t.height -
			(this.m_elChatRoomTitleContainer.getBoundingClientRect().height - n);
		let a = e - r;
		if (a < 0) {
			a = 0;
		} else if (a > i) {
			a = i;
		}
		let s = i - a;
		s = OQ(
			s,
			this.m_elChatSection.minimumHeight,
			this.m_elChatSection.maximumHeight,
		);
		this.setState({
			nChatRoomListContainerHeight: s,
		});
		this.setState({
			bChatRoomListCollapsed: !(this.state.nChatRoomListContainerHeight > 0),
		});
		m.ZM.SetUIDisplayPref(
			"bChatRoomListCollapsed",
			!(this.state.nChatRoomListContainerHeight > 0),
		);
		this.setState({
			bChatRoomListResizing: true,
		});
	}
	ToggleChatsList() {
		if (this.state.bChatRoomListCollapsed) {
			this.setState({
				nChatRoomListContainerHeight: this.state.nChatRoomListPreCollapseHeight,
			});
		}
		this.setState({
			bChatRoomListCollapsed: !this.state.bChatRoomListCollapsed,
		});
		m.ZM.SetUIDisplayPref(
			"bChatRoomListCollapsed",
			!this.state.bChatRoomListCollapsed,
		);
	}
	UnregisterChatRoomListDragEvents(e) {
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("touchmove", this.HandleTouchMove);
		e.view.removeEventListener(
			"mouseup",
			this.UnregisterChatRoomListDragEvents,
		);
		e.view.removeEventListener(
			"touchend",
			this.UnregisterChatRoomListDragEvents,
		);
		if (
			this.state.nChatRoomListContainerHeight <
			ve.s_pxGroupChatsAutoCollapseThreshold
		) {
			m.ZM.SetUIDisplayPref(
				"nChatRoomListHeightPx",
				this.state.nChatRoomListPreCollapseHeight,
			);
			this.setState({
				bChatRoomListCollapsed: true,
			});
		} else {
			this.setState({
				nChatRoomListPreCollapseHeight: this.state.nChatRoomListContainerHeight,
			});
			m.ZM.SetUIDisplayPref(
				"nChatRoomListHeightPx",
				this.state.nChatRoomListContainerHeight,
			);
		}
		this.m_iGrabberBarInitialGrabOffset = null;
		this.setState({
			bChatRoomListResizing: false,
		});
	}
	OnCreateChatRoom(e) {
		UA(CO(e), e.currentTarget.ownerDocument.defaultView);
	}
	render() {
		let e = {
			height: this.state.bChatRoomListCollapsed
				? 0
				: this.state.nChatRoomListContainerHeight + "px",
			maxHeight: this.state.bChatRoomListCollapsed
				? 0
				: this.state.nChatRoomListContainerMaxHeight + "px",
		};
		let t = this.props.chats.currentChatRoomGroups;
		let r = false;
		let n = "FriendsListChatSection ChatRoomListContainerParent";
		if (this.props.chats.chat_group_list_ready) {
			for (let e of t) {
				if (e.hasUnreadChatMessage) {
					r = true;
				}
			}
		}
		if (this.state.bChatRoomListCollapsed) {
			n += " Collapsed";
		}
		if (this.state.bChatRoomListResizing) {
			n += " ChatListResizing";
		}
		if (r) {
			n += " HasUnreadChats";
		}
		return S.createElement(
			"div",
			{
				className: n,
				onMouseEnter: this.OnMouseEnter,
				onMouseLeave: this.OnMouseLeave,
				ref: this.ref,
			},
			S.createElement(
				"div",
				{
					className: "friendsListSectionTitle chatSectionTitle",
					ref: this.BindChatRoomTitleContainer,
				},
				this.state.bChatRoomListCollapsed && r && S.createElement(C.RB, null),
				S.createElement(
					"div",
					{
						className: "ToggleGroupChatList",
						onClick: this.ToggleChatsList,
						title: this.state.bChatRoomListCollapsed
							? Localize("#Tooltip_ChatsExpand")
							: Localize("#Tooltip_ChatsCollapse"),
					},
					S.createElement(W.F2T, {
						angle: -90,
					}),
				),
				S.createElement(
					"div",
					{
						className: "voiceRoomDragBar",
						onMouseDown: this.OnGrabberMouseDown,
						onTouchStart: this.OnGrabberTouchStart,
					},
					S.createElement(
						"div",
						{
							className: "groupChatSectionTitle",
						},
						Localize("#tab_chats"),
					),
				),
				S.createElement(
					"button",
					{
						className: "createChatRoomButton",
						onClick: this.OnCreateChatRoom,
						title: Localize("#Tooltip_CreateGroupChat"),
					},
					S.createElement(W.u9R, null),
				),
				S.createElement("div", {
					className: "disconnectBlocker",
				}),
			),
			S.createElement(de.H, null),
			S.createElement(
				"div",
				{
					className: "chatRoomListContainer",
					style: e,
					ref: this.BindChatRoomListContainer,
				},
				S.createElement(C.IV, {
					friends: this.props.friends,
					chats: this.props.chats,
					ref: this.BindChatSection,
				}),
			),
			S.createElement(de.P, null),
		);
	}
};
Cg([M.oI], rt.prototype, "UpdateChatSectionSize", null);
Cg([M.oI], rt.prototype, "OnChatSectionMutation", null);
Cg([M.oI], rt.prototype, "BindChatRoomTitleContainer", null);
Cg([M.oI], rt.prototype, "BindChatRoomListContainer", null);
Cg([M.oI], rt.prototype, "BindChatSection", null);
Cg([M.oI], rt.prototype, "OnGrabberMouseDown", null);
Cg([M.oI], rt.prototype, "OnGrabberTouchStart", null);
Cg([M.oI], rt.prototype, "HandleTouchMove", null);
Cg([M.oI], rt.prototype, "HandleMouseMove", null);
Cg([M.oI], rt.prototype, "OnMouseEnter", null);
Cg([M.oI], rt.prototype, "OnMouseLeave", null);
Cg([M.oI], rt.prototype, "ToggleChatsList", null);
Cg([M.oI], rt.prototype, "UnregisterChatRoomListDragEvents", null);
Cg([M.oI], rt.prototype, "OnCreateChatRoom", null);
rt = ve = Cg([b.PA], rt);
class nt extends S.Component {
	GetDragDropProps(e = true) {
		let t = {
			rgAcceptedTypes: [],
		};
		if (e) {
			t.fnDragEnter = this.OnDragEnter;
			t.fnDragLeave = this.OnDragLeave;
			t.fnDrop = this.OnDrop;
			t.rgAcceptedTypes = ["friend"];
		}
		t.onDragStart = this.OnDragStart;
		t.onDragEnd = this.OnDragEnd;
		return t;
	}
	OnDragStart(e) {
		let t = m.ZM.DragDropManager.GetDragData();
		if (t && t.type == "friend") {
			let e = t;
			e.group = this.GetGroup();
			this.setState({
				friendDraggedOut: e.friend,
			});
		}
	}
	OnDragEnd(e) {
		if (this.state.friendDraggedOut) {
			this.setState({
				friendDraggedOut: null,
			});
		}
	}
	OnDragEnter(e, t) {
		AssertMsg(
			e && e.type == "friend",
			"Invalid data type passed to FriendGroupDragDrop.OnDragEnter",
		);
		let r = e;
		let n = r.friend;
		let i = r.group;
		let a = this.GetGroup();
		if (
			(!a ||
				i == a ||
				i == a ||
				!this.GetGroup().HasMember(n.accountid) ||
				i == a ||
				!this.GetGroup().HasMember(n.accountid) ||
				r.is_favorite ||
				(this.GetGroup().accepts_group_removals && i.modifiable)) &&
			n.is_friend &&
			this.state.friendDrag != n
		) {
			this.setState({
				friendDrag: n,
			});
		}
		return true;
	}
	ResetDragState() {
		this.setState({
			friendDrag: null,
		});
	}
	OnDragLeave() {
		if (this.state.friendDrag) {
			this.ResetDragState();
		}
	}
	OnDrop(e, t) {
		AssertMsg(
			e && e.type == "friend",
			"Invalid data type passed to FriendGroupDragDrop.OnDrop",
		);
		let r = e;
		if (r.group == this.GetGroup()) {
			this.setState({
				friendDraggedOut: null,
			});
		} else {
			let e = this.state.friendDrag;
			let t = () => {
				if (this.state.friendDrag && this.state.friendDrag == e) {
					this.ResetDragState();
				}
			};
			this.PerformDropAction(r).then(t).catch(t);
		}
	}
}
Cg([M.oI], nt.prototype, "OnDragStart", null);
Cg([M.oI], nt.prototype, "OnDragEnd", null);
Cg([M.oI], nt.prototype, "OnDragEnter", null);
Cg([M.oI], nt.prototype, "OnDragLeave", null);
Cg([M.oI], nt.prototype, "OnDrop", null);
const it = PA((e) => {
	if (!u.xm.SettingsStore.FriendsSettings.bCategorizeInGameFriendsByGame) {
		return null;
	}
	let t = u.xm.FriendStore.FriendGroupStore.game_groups;
	let r = t.map((t) => {
		return S.createElement(lt, {
			key: t.id,
			group: t,
			bSingletonGroup: false,
			bOtherGroups: true,
			groupDisplayPrefs: u.xm.FriendStore.FriendGroupStore.groupDisplayPrefs,
			bInOverlay: e.bInOverlay,
		});
	});
	let n = u.xm.FriendStore.FriendGroupStore.singleton_game_group;
	if (n) {
		r.push(
			S.createElement(lt, {
				key: "singleton",
				group: n,
				bSingletonGroup: true,
				bOtherGroups: t.length > 0,
				groupDisplayPrefs: u.xm.FriendStore.FriendGroupStore.groupDisplayPrefs,
				bInOverlay: e.bInOverlay,
			}),
		);
	}
	return S.createElement(S.Fragment, null, r);
});
let at = class extends nt {
	static contextType = i.QO;
	m_actions = f.sH.map();
	containerRef = S.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bLocalCollapsed: this.props.collapsed,
			bSortOfflineByRecent: false,
		};
	}
	GetGroup() {
		return this.props.group;
	}
	PerformDropAction(e) {
		let t = e.friend;
		let r = e.group;
		let n = this.props.group;
		if (!e.is_favorite) {
			m.ZM.DragDropManager.SetDropConsumed();
		}
		return u.xm.FriendStore.FriendGroupStore.TransferFriendFromToGroup(t, r, n);
	}
	ToggleCollapsed() {
		if (this.props.groupDisplayPrefs) {
			this.props.groupDisplayPrefs.ToggleUserGroupCollapsed(
				this.props.group.unique_id,
			);
		} else {
			this.setState({
				bLocalCollapsed: !this.state.bLocalCollapsed,
			});
		}
	}
	IsCollapsed() {
		if (this.props.groupDisplayPrefs) {
			return this.props.groupDisplayPrefs.GetUserGroupCollapsed(
				this.props.group.unique_id,
			);
		} else {
			return this.state.bLocalCollapsed;
		}
	}
	IsInviteGroup() {
		return this.props.group.m_eDisplayType == c.oy.eIncomingInvites;
	}
	IsOutGoingInviteGroup() {
		return this.props.group.m_eDisplayType == c.oy.eOutgoingInvites;
	}
	OnContextMenu(e) {
		if (
			this.props.group.modifiable ||
			this.props.group.accepts_group_removals
		) {
			iS(CO(e), this.props.group, e);
		}
	}
	OnFriendSelected(e) {
		if (this.props.friendSelectAction) {
			this.props.friendSelectAction(e);
		} else {
			e.OpenChatDialog(wj(this.containerRef.current));
			if (this.props.fnOnSearchSelection) {
				this.props.fnOnSearchSelection();
			}
		}
	}
	OnAcceptInvite(e) {
		AssertMsg(this.IsInviteGroup(), "accept invite on non-invite group");
		let t = this.m_actions.get(e.accountid);
		if (t && t.action == "accept") {
			this.m_actions.delete(e.accountid);
		} else {
			this.m_actions.set(e.accountid, {
				friend: e,
				action: "accept",
			});
		}
	}
	OnDeclineInvite(e) {
		AssertMsg(this.IsInviteGroup(), "decline invite on non-invite group");
		let t = this.m_actions.get(e.accountid);
		if (!t || (t.action != "decline" && t.action != "block")) {
			this.m_actions.set(e.accountid, {
				friend: e,
				action: "decline",
			});
		} else {
			this.m_actions.delete(e.accountid);
		}
	}
	OnBlockInvite(e, t) {
		AssertMsg(this.IsInviteGroup(), "block invite on non-invite group");
		if (e) {
			this.m_actions.set(t.accountid, {
				friend: t,
				action: "block",
			});
		} else {
			this.m_actions.set(t.accountid, {
				friend: t,
				action: "decline",
			});
		}
	}
	async AcceptInvite(e, t) {
		let { eResult: r, eFriendRelationship: n } =
			await u.xm.FriendStore.SendFriendInvite(t);
		if (n != 3) {
			Jw(e, r, n, t.display_name);
		}
	}
	DeclineInvite(e, t) {
		u.xm.FriendStore.RemoveFriend(t).then((r) => {
			if (r != 1) {
				Ic(
					e,
					Localize("#Friend_Menu_IgnoreIncomingInvite"),
					Localize("#Friend_IgnoreIncomingInvite_Error", t.display_name),
				);
			}
		});
	}
	BlockInvite(e, t) {
		u.xm.FriendStore.BlockPlayer(t).then((r) => {
			if (r != 5) {
				Ic(
					e,
					Localize("#Friend_Menu_BlockIncomingInvite"),
					Localize("#Friend_BlockIncomingInvite_Error", t.display_name),
				);
			}
		});
	}
	OnConfirmChanges(e) {
		AssertMsg(this.IsInviteGroup(), "confirm changes on non-invite group");
		let t = e.currentTarget.ownerDocument.defaultView;
		this.m_actions.forEach((e) => {
			if (e.action == "accept") {
				this.AcceptInvite(t, e.friend);
			} else if (e.action == "decline") {
				this.DeclineInvite(t, e.friend);
			} else if (e.action == "block") {
				this.BlockInvite(t, e.friend);
			} else {
				console.log(`unknown action ${e.action}`);
			}
		});
	}
	OnIgnoreAllInvites(e) {
		AssertMsg(this.IsInviteGroup(), "ignore all invites on non-invite group");
		let t = e.currentTarget.ownerDocument.defaultView;
		Ci(
			t,
			Localize("#FriendGroup_ConfirmAllIgnore_Title"),
			Localize("#FriendGroup_ConfirmAllIgnore_Body"),
			Localize("#FriendGroup_ConfirmAllIgnore_OK"),
		)
			.then(() => {
				let e = this.props.group.member_list;
				for (let r of e) {
					this.DeclineInvite(t, r);
				}
			})
			.catch(() => {});
	}
	OnCloseInvites() {
		AssertMsg(this.IsInviteGroup(), "close invites on non-invite group");
		this.props.onClose();
	}
	ToggleOfflineSortMethod() {
		this.setState({
			bSortOfflineByRecent: !this.state.bSortOfflineByRecent,
		});
	}
	m_FriendRenderContext;
	GetFriendRenderContext() {
		if (
			!this.m_FriendRenderContext ||
			this.m_FriendRenderContext.friendGroup != this.props.group
		) {
			this.m_FriendRenderContext = {
				friendGroup: this.props.group,
				chatContext: "friendslist",
			};
		}
		return this.m_FriendRenderContext;
	}
	render() {
		let e = this.props.searchString && this.props.searchString.length > 0;
		let t = e;
		let r = this.IsCollapsed() && !e && !this.state.friendDrag;
		let n = [];
		let a = this.IsInviteGroup();
		let s = this.props.group.m_eDisplayType == c.oy.eOfflineOnly;
		let l = false;
		if (!r) {
			let t;
			let r = false;
			t =
				this.props.searchString && this.props.searchString.length
					? this.props.group.GetMembersMatchingSearch(this.props.searchString)
					: this.props.group.member_list;
			if (this.state.friendDrag) {
				if (this.props.group.HasMember(this.state.friendDrag.accountid)) {
					r = true;
				} else {
					t = t
						.concat(this.state.friendDrag)
						.sort(o.$c.DefaultFriendSortComparator);
				}
			}
			if (s && this.state.bSortOfflineByRecent) {
				t = this.props.group.member_list_unsorted
					.slice()
					.sort(o.$c.FriendSortByLastSeenComparator);
				l = true;
			}
			if (a) {
				let e = u.xm.FriendStore.FriendGroupStore.incoming_invites_group;
				t = t.slice().sort((t, r) => {
					let n = e.map_steamid_to_mutual_friends.get(t.steamid64);
					let i = e.map_steamid_to_mutual_friends.get(r.steamid64);
					let a = (n ? n.size : 0) - (i ? i.size : 0);
					if (a > 0 || (a == 0 && t.accountid > r.accountid)) {
						return -1;
					} else {
						return 1;
					}
				});
			}
			let i = null;
			if (!e && this.props.group.should_filter_categorized_friends) {
				i = u.xm.FriendStore.FriendGroupStore.categorized_friend_set;
			}
			for (let e of t) {
				if (
					this.props.setExcludedFriends &&
					this.props.setExcludedFriends.has(e.accountid)
				) {
					continue;
				}
				if (i && i.has(e.accountid)) {
					continue;
				}
				let t;
				let s;
				let o;
				let l = e.efriendrelationship == 4;
				let c = this.state.friendDrag != e || r ? "" : "dropGhost";
				if (this.state.friendDraggedOut == e && this.state.friendDrag != e) {
					c += " dragOriginGhost";
				}
				let m = this.props.gamepadEventOverrides ?? {};
				if (a) {
					let r = this.m_actions.get(e.accountid);
					t = r && r.action == "accept" ? "bright" : "dim";
					s =
						!r || (r.action != "decline" && r.action != "block")
							? "dim"
							: "bright";
					o =
						!r || (r.action != "decline" && r.action != "block")
							? ""
							: " declined";
					if (r && r.action == "accept") {
						c += "bright";
					} else if (!!r && (r.action == "decline" || r.action == "block")) {
						c += "dim";
					}
					if (this.context?.IN_GAMEPADUI) {
						m.onOKButton = (t) => {
							let r = GetOwningWindowForEvent(t);
							this.AcceptInvite(r, e);
						};
						m.onOKActionDescription = Localize("#FriendGroup_Tip_Accept");
						m.onSecondaryButton = (t) => {
							let r = GetOwningWindowForEvent(t);
							this.BlockInvite(r, e);
						};
						m.onSecondaryActionDescription = Localize("#Button_Block");
						m.onOptionsButton = (t) => {
							let r = GetOwningWindowForEvent(t);
							this.DeclineInvite(r, e);
						};
						m.onOptionsActionDescription = Localize("#FriendGroup_Tip_Decline");
					}
				}
				n.push(
					S.createElement(
						De.M,
						{
							className: a
								? "friendInviteContainer" + o
								: "friendCategoryContainer",
							key: e.accountid,
							classNames: "friend-anim",
							timeout: 320,
						},
						(r) => {
							return S.createElement(
								"div",
								{
									ref: r,
								},
								S.createElement(bP, {
									friend: e,
									key: e.accountid,
									className: c,
									context: this.GetFriendRenderContext(),
									bInOverlay: this.props.bInOverlay,
									noActions: a && this.context?.IN_GAMEPADUI,
									action:
										l || (a && this.context?.IN_GAMEPADUI)
											? () => {}
											: this.OnFriendSelected,
									...this.props.friendProps,
									gamepadEventOverrides: m,
									bFriendsListEntry: true,
								}),
								a &&
									!this.context?.IN_GAMEPADUI &&
									S.createElement(
										"div",
										{
											className: "friendInviteButtons",
										},
										S.createElement(
											"div",
											{
												className: "friendInviteButton acceptFriendInvite " + t,
												onClick: () => {
													return this.OnAcceptInvite(e);
												},
												title: Localize("#FriendGroup_Tip_Accept"),
											},
											S.createElement(W.Jlk, null),
										),
										S.createElement(
											"div",
											{
												className:
													"friendInviteButton declineFriendInvite " + s,
												onClick: () => {
													return this.OnDeclineInvite(e);
												},
												title: Localize("#FriendGroup_Tip_Decline"),
											},
											S.createElement(W.sED, null),
										),
									),
								a &&
									!this.context?.IN_GAMEPADUI &&
									S.createElement(
										"div",
										{
											className: "friendInviteBlockContainer",
										},
										S.createElement(Z.Yh, {
											onChange: (t) => {
												return this.OnBlockInvite(t, e);
											},
										}),
										S.createElement(
											"div",
											{
												className: "displayColumn",
											},
											S.createElement(
												"div",
												{
													className: "blockCommunicationLabel",
												},
												Localize("#FriendGroup_IncomingInvites_Block"),
											),
											S.createElement(
												"div",
												{
													className: "blockCommunicationLabel subtitle",
												},
												Localize("#FriendGroup_IncomingInvites_Block_desc"),
											),
										),
									),
							);
						},
					),
				);
			}
		}
		let m = "friendGroup";
		let A = false;
		let p = false;
		let g = false;
		if (t) {
			m += " noTransitions";
		}
		if (this.props.group.modifiable) {
			m += " taggedGroup ";
			A = true;
		} else if (this.props.group.m_eDisplayType == c.oy.eOnlineOnlyNotInGame) {
			m += " onlineFriends ";
			p = true;
		} else if (this.props.group.m_eDisplayType == c.oy.eOfflineOnly) {
			m += " offlineFriends ";
			g = true;
		} else if (this.IsInviteGroup()) {
			m += " friendRequests ";
		} else if (this.IsOutGoingInviteGroup()) {
			m += " friendOutgoingRequests ";
		}
		if (e && (!n || !n.length)) {
			return S.createElement(
				"div",
				{
					className: "friendSearchNoResultsContainer",
					ref: this.containerRef,
				},
				S.createElement(
					"div",
					null,
					Localize("#FriendGroup_Search_NoResults", this.props.searchString),
				),
				S.createElement(
					"div",
					{
						className: "searchSteamSuggestion",
					},
					Localize("#FriendGroup_Search_CantFind"),
				),
				S.createElement(
					L.uU,
					{
						href: i.TS.COMMUNITY_BASE_URL + "search/users",
					},
					Localize("#FriendGroup_Search_Link"),
				),
			);
		}
		if (n.length == 0 && !this.IsCollapsed()) {
			return null;
		}
		let h = this.m_actions.size != 0;
		let C = "SortByRecent";
		if (l) {
			C += " Recent";
		}
		if (r) {
			C += " Collapsed";
		}
		let _ = !this.IsInviteGroup() && !this.IsOutGoingInviteGroup();
		let f = {
			onActivate: this.ToggleCollapsed,
			onOKActionDescription: Localize(
				r ? "#FriendGroup_Expand" : "#FriendGroup_Collapse",
			),
			onContextMenu: this.OnContextMenu,
			onMenuButton: _ && this.OnContextMenu,
			onMenuActionDescription: _ ? Localize("#FriendGroup_Options") : undefined,
		};
		return S.createElement(
			d.T,
			{
				className: m,
				...this.GetDragDropProps(
					this.props.group.modifiable ||
						this.props.group.accepts_group_removals,
				),
				ref: this.containerRef,
			},
			S.createElement(
				w.Z,
				{
					className: "groupHeaderContainer",
					"flow-children": "row",
					focusable: false,
				},
				!e &&
					S.createElement(
						w.Z,
						{
							className: "groupName" + (r ? " Collapsed" : ""),
							...f,
						},
						S.createElement(
							"div",
							{
								className: "ExpandPlusMinus",
							},
							S.createElement(W.f5w, null),
						),
						this.props.group.icon_url &&
							S.createElement("img", {
								className: "groupIcon",
								src: this.props.group.icon_url,
							}),
						this.props.group.name,
						!e &&
							S.createElement(
								"span",
								{
									className: this.IsCollapsed()
										? "groupCount collapsed"
										: "groupCount",
								},
								"(",
								this.props.group.member_count,
								")",
							),
						A && S.createElement("hr", null),
					),
				g &&
					S.createElement(
						w.Z,
						{
							className: C,
							focusable: true,
							onActivate: this.ToggleOfflineSortMethod,
							title: l
								? Localize("#FriendGroup_Tip_SortByRecent")
								: Localize("#FriendGroup_Tip_SortByAlphabet"),
							onOKActionDescription: Localize("#FriendGroup_ChangeSort"),
						},
						S.createElement(W.gxp, null),
					),
			),
			S.createElement(
				z.A,
				{
					className: "groupList",
					enter: !t,
					exit: !t,
				},
				n,
				a &&
					!this.context?.IN_GAMEPADUI &&
					S.createElement(
						De.M,
						{
							key: "inviteButtons",
							classNames: "opacityfade-anim",
							timeout: 320,
						},
						(e) => {
							return S.createElement(
								"div",
								{
									className: "confirmInviteRequestContainer",
									ref: e,
								},
								S.createElement(
									"div",
									{
										className: "confirmInviteRequestActions",
									},
									h
										? S.createElement(
												"div",
												{
													className: "confirmInviteButton confirmInvites",
													onClick: this.OnConfirmChanges,
												},
												Localize("#FriendGroup_ConfirmInvites"),
											)
										: S.createElement(
												"div",
												{
													className: "confirmInviteButton confirmInvites dim",
												},
												Localize("#FriendGroup_ConfirmInvites"),
											),
									S.createElement(
										"div",
										{
											className: "confirmInviteButton ignoreAllRequests",
											onClick: this.OnIgnoreAllInvites,
										},
										Localize("#FriendGroup_AllIgnore"),
									),
								),
								S.createElement(
									w.Z,
									{
										className: "cancelAddFriends",
										onActivate: this.OnCloseInvites,
										onOKActionDescription: Localize("#FriendGroup_Close"),
										title: Localize("#FriendGroup_Close"),
									},
									S.createElement(W.i3G, {
										angle: -90,
									}),
								),
							);
						},
					),
			),
			A &&
				S.createElement("div", {
					className: "dropTargetBox",
				}),
		);
	}
};
export function JG(e, t, r) {
	return lX(
		S.createElement(ot, {
			browserContext: e,
			appid: t,
			ownerWindow: r.currentTarget.ownerDocument.defaultView,
		}),
		r,
	);
}
Cg([M.oI], at.prototype, "ToggleCollapsed", null);
Cg([M.oI], at.prototype, "OnContextMenu", null);
Cg([M.oI], at.prototype, "OnFriendSelected", null);
Cg([M.oI], at.prototype, "OnAcceptInvite", null);
Cg([M.oI], at.prototype, "OnDeclineInvite", null);
Cg([M.oI], at.prototype, "OnBlockInvite", null);
Cg([M.oI], at.prototype, "OnConfirmChanges", null);
Cg([M.oI], at.prototype, "OnIgnoreAllInvites", null);
Cg([M.oI], at.prototype, "OnCloseInvites", null);
Cg([M.oI], at.prototype, "ToggleOfflineSortMethod", null);
at = Cg([b.PA], at);
class ot extends S.PureComponent {
	render() {
		return S.createElement(
			U.tz,
			null,
			S.createElement(p.Rm, {
				unAppID: this.props.appid,
				bShowLargeHeader: true,
			}),
		);
	}
}
let lt = class extends nt {
	constructor(e) {
		super(e);
		this.state = {
			bLocalCollapsed: this.props.collapsed,
			bIsSubscribedToApp: false,
		};
		ge.W.BIsSubscribedApp(this.props.group.id).then((e) => {
			this.setState({
				bIsSubscribedToApp: e,
			});
		});
	}
	GetGroup() {
		return this.props.group;
	}
	PerformDropAction(e) {
		return Promise.reject("FriendGameGroups do not accept drops");
	}
	ToggleCollapsed() {
		if (this.props.groupDisplayPrefs) {
			this.props.groupDisplayPrefs.ToggleUserGroupCollapsed(
				this.props.group.unique_id,
			);
		} else {
			this.setState({
				bLocalCollapsed: !this.state.bLocalCollapsed,
			});
		}
	}
	IsCollapsed() {
		if (this.props.groupDisplayPrefs) {
			return this.props.groupDisplayPrefs.GetUserGroupCollapsed(
				this.props.group.unique_id,
			);
		} else {
			return this.state.bLocalCollapsed;
		}
	}
	m_FriendRenderContext;
	GetFriendRenderContext() {
		if (
			!this.m_FriendRenderContext ||
			this.m_FriendRenderContext.friendGroup != this.props.group
		) {
			this.m_FriendRenderContext = {
				friendGroup: this.props.group,
				chatContext: "friendslist",
			};
		}
		return this.m_FriendRenderContext;
	}
	OnShowHeaderContextMenu(e) {
		let t = this.props.group.id;
		if (t) {
			if (u.xm.AppInfoStore.GetAppInfo(t).is_valid) {
				JG(CO(e), t, e);
			}
		}
	}
	render() {
		if (this.props.bSingletonGroup && this.props.group.unfiltered_count == 0) {
			return null;
		}
		const e = this.IsCollapsed();
		let t = [];
		if (!e) {
			let e = this.props.group.member_list;
			let r = new Map();
			let n = new Map();
			let i = new Map();
			if (!this.props.bSingletonGroup) {
				let t = "";
				let a = null;
				for (let s of e) {
					if (a && s.persona.player_group != t) {
						r.set(a.accountid, "lastInGroup");
					}
					if (s.persona.player_group) {
						i.set(s.persona.player_group, s.persona.player_group_size);
						if (n.has(s.persona.player_group)) {
							n.set(s.persona.player_group, n.get(s.persona.player_group) + 1);
						} else {
							n.set(s.persona.player_group, 1);
						}
						if (s.persona.player_group != t) {
							r.set(s.accountid, "firstInGroup");
							t = s.persona.player_group;
							a = s;
						} else {
							r.set(s.accountid, "inGroup");
							a = s;
						}
					}
				}
				if (a) {
					r.set(a.accountid, "lastInGroup");
				}
			}
			let a = !this.props.bSingletonGroup && this.props.group.id != c.o_;
			let s = null;
			for (let o of e) {
				let e = "";
				if (this.state.friendDraggedOut == o && this.state.friendDrag != o) {
					e += " dragOriginGhost";
				}
				let l;
				let c = false;
				if (r.has(o.accountid)) {
					c = true;
					let t = r.get(o.accountid);
					if (t == "lastInGroup") {
						let e = n.get(o.persona.player_group);
						let r = i.get(o.persona.player_group);
						if (r <= 1 && e == 1) {
							t = "";
						} else if (r && e < r) {
							let n = false;
							if (
								u.xm.FriendStore.self.persona.player_group ==
								o.persona.player_group
							) {
								n = true;
							}
							let i = r - e;
							let a = r - e - (n ? 1 : 0);
							let l = "oneDigit";
							if (i >= 10 && i < 100) {
								l = "twoDigits";
							} else if (i >= 100) {
								l = "manyDigits";
							}
							let c =
								a == 1
									? "#FriendGroup_PlayerGroupFooter_Label_Singular"
									: "#FriendGroup_PlayerGroupFooter_Label";
							if (n) {
								c =
									a == 0
										? "#FriendGroup_PlayerGroupFooter_Label_PlusYouOnly"
										: a == 1
											? "#FriendGroup_PlayerGroupFooter_Label_PlusYou_Singular"
											: "#FriendGroup_PlayerGroupFooter_Label_PlusYou";
							}
							t = e == 1 ? "firstInGroup" : "inGroup";
							s = S.createElement(
								De.M,
								{
									key: o.persona.player_group + "_footer",
									classNames: "friend-anim",
									timeout: 320,
								},
								(e) => {
									return S.createElement(
										"div",
										{
											ref: e,
											className: "SteamPlayerGroupFooter lastInGroup",
											draggable: false,
										},
										S.createElement("div", {
											className: "SteamPlayerGroupLines",
										}),
										S.createElement(
											"div",
											{
												className: "SteamPlayerGroupFooterCount " + l,
											},
											S.createElement(
												"div",
												{
													className: "count",
												},
												"+",
												i,
											),
										),
										S.createElement(
											"div",
											{
												className: "SteamPlayerGroupFooterLabel",
											},
											Localize(c, a),
										),
									);
								},
							);
						}
					}
					e += " " + t;
				}
				if (this.props.bSingletonGroup) {
					l = S.createElement(ct, {
						appid: o.persona.m_unGamePlayedAppID,
					});
				}
				e += " " + B.p.hoverClass;
				t.push(
					S.createElement(
						De.M,
						{
							key: o.accountid,
							classNames: "friend-anim",
							timeout: 320,
						},
						(t) => {
							return S.createElement(bP, {
								divRef: t,
								friend: o,
								key: o.accountid,
								bHideGameName: a,
								className: e,
								context: this.GetFriendRenderContext(),
								bInGroup: c,
								bFriendsListEntry: true,
								listStatusIndicatorLeft: l,
								bInOverlay: this.props.bInOverlay,
							});
						},
					),
				);
				if (s) {
					t.push(s);
				}
			}
		}
		let r = "friendGroup gameGroup";
		let n = this.props.group.name;
		let i = null;
		if (this.props.bSingletonGroup) {
			r += " OtherGamesGroup";
			i = this.props.bOtherGroups
				? Localize("#FriendGroup_InGame_Others")
				: Localize("#FriendGroup_InGame");
		}
		let a = {
			onActivate: this.ToggleCollapsed,
			onOKActionDescription: Localize(
				e ? "#FriendGroup_Expand" : "#FriendGroup_Collapse",
			),
		};
		if (!this.props.bSingletonGroup && this.props.group.id != c.o_) {
			if (this.state.bIsSubscribedToApp) {
				a.onOptionsButton = () => {
					let e = "steam://open/library/details/" + this.props.group.id;
					u.xm.OpenURLInBrowser(e, R.m);
				};
				a.onOptionsActionDescription = Localize(
					"#Friend_Menu_ViewGameInLibrary",
				);
			} else {
				a.onOptionsButton = () => {
					let e = Dn(this.props.group.id, "friendcontextmenu");
					u.xm.OpenURLInBrowser(e, R.m);
				};
				a.onOptionsActionDescription = Localize(
					"#Friend_Menu_ViewGameStorePage",
				);
			}
		}
		return S.createElement(
			d.T,
			{
				className: r,
				...this.GetDragDropProps(
					this.props.group.modifiable ||
						this.props.group.accepts_group_removals,
				),
			},
			S.createElement(
				w.Z,
				{
					className: "groupName" + (e ? " Collapsed" : ""),
					onContextMenu: this.OnShowHeaderContextMenu,
					...a,
				},
				S.createElement(
					"div",
					{
						className: "gameGroupContainer",
					},
					S.createElement(
						"div",
						{
							className: "ExpandPlusMinus",
						},
						S.createElement(W.f5w, null),
					),
					i,
					this.props.group.icon_url &&
						S.createElement("img", {
							className: "groupIcon",
							src: this.props.group.icon_url,
						}),
				),
				n,
				S.createElement(
					"span",
					{
						className: this.IsCollapsed()
							? "groupCount collapsed"
							: "groupCount",
					},
					"(",
					this.props.group.member_count,
					")",
				),
				S.createElement("hr", null),
			),
			S.createElement(
				z.A,
				{
					className: this.IsCollapsed()
						? "friendsContainer groupCollapsed"
						: "friendsContainer",
				},
				t,
			),
		);
	}
};
Cg([M.oI], lt.prototype, "ToggleCollapsed", null);
Cg([M.oI], lt.prototype, "OnShowHeaderContextMenu", null);
lt = Cg([b.PA], lt);
let ct = class extends S.Component {
	OnShowGameIconContextMenu(e) {
		JG(CO(e), this.props.appid, e);
	}
	render() {
		let e =
			this.props.appid != 0
				? u.xm.AppInfoStore.GetAppInfo(this.props.appid)
				: null;
		if (e && e.is_valid) {
			return S.createElement(
				"div",
				{
					className: "FriendInGameIcon",
					onContextMenu: this.OnShowGameIconContextMenu,
				},
				S.createElement("img", {
					className: "gameIcon",
					alt: "",
					src: e.icon_url,
				}),
			);
		} else {
			return S.createElement(
				"div",
				{
					className: "FriendInGameIcon",
				},
				S.createElement(
					"div",
					{
						className: "FriendInGameIcon_NA",
					},
					"N/A",
				),
			);
		}
	}
};
export function Rg(e) {
	const {
		friend: t,
		children: r,
		context: n,
		disableContextMenu: i,
		onContextMenu: a,
		onContextMenuShown: s,
		direction: o,
	} = e;
	const l = S.useRef();
	const c = m.ZM.FriendHoverStore.GetHover(t);
	const u = S.useCallback(
		(e) => {
			if (i) {
				return;
			}
			let t;
			t = a ? a(e) : c.OnContextMenu(n, e);
			if (t && s) {
				s(t);
			}
		},
		[n, i, c, a, s],
	);
	const d = S.useCallback(
		(e) => {
			c.Show(e, n, o);
			l.current = e.currentTarget;
		},
		[n, o, c],
	);
	const A = S.useCallback(
		(e) => {
			c.Hide(e);
			l.current = undefined;
		},
		[c],
	);
	const p = S.useCallback(() => {
		c.HideByElement(l.current);
	}, [c]);
	D5(e.refHideHover, p);
	S.useEffect(() => {
		return () => {
			return p();
		};
	}, [p]);
	let g = S.Children.only(r);
	if (g) {
		return S.cloneElement(g, {
			onMouseEnter: d,
			onMouseLeave: A,
			onContextMenu: u,
		});
	} else {
		return r;
	}
}
Cg([M.oI], ct.prototype, "OnShowGameIconContextMenu", null);
ct = Cg([b.PA], ct);
export const bP = PA((e) => {
	const t = R7();
	const r = _k(t.ownerWindow);
	const n = !u_1(r, R.m);
	return S.createElement(dt, {
		bInOverlay: n,
		...e,
	});
});
let dt = class extends S.Component {
	static contextType = i.QO;
	constructor(e) {
		super(e);
		this.state = {
			bActive: false,
			bVisible: false,
			bHovered: false,
		};
	}
	OnWaypointEnter() {
		this.setState({
			bVisible: true,
		});
	}
	OnWaypointLeave() {
		this.setState({
			bVisible: false,
		});
	}
	OnMouseEnter() {
		this.setState({
			bHovered: true,
		});
	}
	OnMouseLeave() {
		this.setState({
			bHovered: false,
		});
	}
	OnDoubleClick(e) {
		this.RunAction(true, e);
	}
	OnClick(e) {
		this.RunAction(false, e);
	}
	OnOKButton(e) {
		this.RunAction(true, e);
	}
	RunAction(e, t) {
		if (!this.props.bSingleClickActivate == e) {
			if (this.props.action) {
				this.props.action(this.props.friend, t);
			} else if (!this.props.noActions) {
				this.props.friend.OpenChatDialog(CO(t));
			}
		}
	}
	OnDragStart(e) {
		e.dataTransfer.setData(
			"text/plain",
			this.props.friend.persona.m_strPlayerName,
		);
		e.dataTransfer.setData(
			"text/steamid",
			this.props.friend.persona.m_steamid.ConvertTo64BitString(),
		);
		if (this.props.friend.is_friend) {
			m.ZM.DragDropManager.StartDrag({
				type: "friend",
				source: this.props.context.chatContext,
				friend: this.props.friend,
				sourceContext: this.props.context,
			});
		} else {
			m.ZM.DragDropManager.StartDrag({
				type: "nonfriend",
				source: this.props.context.chatContext,
				friend: this.props.friend,
				sourceContext: this.props.context,
			});
		}
		m.ZM.FriendHoverStore.GetHover(this.props.friend).HideAllInstances();
	}
	OnDragEnd(e) {
		m.ZM.DragDropManager.EndDrag();
	}
	OnShowContextMenu(e) {
		let t = tj(CO(e), this.props.context, this.props.friend, e);
		if (t) {
			this.OnContextMenuShown(t);
		}
	}
	OnContextMenuShown(e) {
		this.setState({
			bActive: true,
		});
		e.SetOnHideCallback(() => {
			this.setState({
				bActive: false,
			});
		});
	}
	render() {
		const {
			friend: e,
			showVoiceLevel: t,
			bHideGameName: r,
			bHideEnhancedRichPresenceLabel: n,
			context: i,
			action: a,
			noActions: s,
			notDraggable: o,
			disableContextMenu: l,
			className: c,
			bInVoiceList: m,
			listStatusIndicator: d,
			listStatusIndicatorLeft: A,
			bInGroup: p,
			bFriendsListEntry: g,
			bForcePersonaNameDisplay: h,
			bSingleClickActivate: C,
			avatarSize: _ = "Medium",
			bHidePersona: f,
			bHideSnooze: b,
			bHideStatus: y,
			bHideStatusInfo: B,
			bInGameIcon: I,
			statusPosition: M,
			lastChat: T,
			gamepadEventOverrides: R,
			children: k,
			bInOverlay: D,
			video: N,
			divRef: F,
			...G
		} = this.props;
		e.LoadIfNecessary();
		if (!e.is_ready) {
			return S.createElement("div", null);
		}
		let O = u.xm.CMInterface.steamid.GetAccountID() == e.accountid;
		let P = null;
		let L = 0;
		if (this.props.showVoiceLevel) {
			L = u.xm.VoiceStore.get_volume(e.accountid);
		}
		let z;
		let x = {
			...G,
			className: "friend " + rO(e.persona),
		};
		if (c) {
			x.className += " " + c;
		}
		if (g) {
			x.className += " friendStatusHover";
		}
		if (O) {
			let e = u.xm.VoiceStore.IsAttemptingInitialConnection();
			let t = u.xm.VoiceStore.HasBeenAttemptingOverTwoSeconds();
			let r = u.xm.VoiceStore.IsAttemptingReconnect();
			let n =
				"https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114";
			let i = Localize("#VoiceChatConnectingHelp");
			let a = null;
			if (t) {
				a = Localize("#VoiceChatConnecting");
			} else if (r) {
				a = Localize("#VoiceChatReconnecting");
			}
			if (a) {
				P = O
					? () => {
							return S.createElement(
								"a",
								{
									target: "_blank",
									title: i,
									href: n,
								},
								a,
							);
						}
					: () => {
							return a;
						};
			}
			let s = "";
			if (e) {
				s += " connecting";
			}
			if (t) {
				s += " slowconnecting";
			}
			if (r) {
				s += " reconnecting";
			}
			x.className += s;
		}
		if (!s || !!a) {
			x.onDoubleClick = this.OnDoubleClick;
			x.onClick = this.OnClick;
			x.onOKButton = this.OnOKButton;
		}
		if (!s && !l && !!this.context?.IN_GAMEPADUI) {
			x.onContextMenu = this.OnShowContextMenu;
			x.onMenuButton = this.OnShowContextMenu;
			x.onOKActionDescription = Localize("#Friend_Menu_SendMessage");
			x.onMenuActionDescription = Localize("#Friend_Menu_Open");
		}
		if (!s && !o) {
			x.onDragStart = this.OnDragStart;
			x.onDragEnd = this.OnDragEnd;
			x.draggable = true;
		}
		if (R) {
			x = {
				...x,
				...R,
			};
		}
		if (k) {
			z = S.createElement(
				w.Z,
				{
					...x,
					ref: F,
				},
				k,
			);
		} else {
			let a;
			let o = 100;
			let c = {};
			if (t && L != 1) {
				let e = 3.2;
				let t = Math.min(L * e, 1);
				let r = Math.max(0, o * t);
				r = Math.round(r * 10) / 10;
				c.height = r + "%";
				c.top = "auto";
				if (r > 1) {
					x.className += " speaking";
				}
			}
			if (i && i.group) {
				a = i.group.GetMemberPartyBeacon(e.accountid);
				if (a) {
					x.className += " partyBeacon";
				}
			}
			if (this.state.bActive) {
				x.className += " Friend_ContextMenuActive";
			}
			let g;
			let h = u.xm.VoiceStore.GetPerUserMuting(e.accountid);
			let C = null;
			let E = null;
			let R =
				this.state.bVisible &&
				!this.context?.IN_GAMEPADUI &&
				u.xm.SettingsStore.FriendsSettings.bAnimatedAvatars &&
				e.persona.is_online;
			if (e.BLoadedEquippedItems()) {
				let t = e.GetEquippedProfileItems();
				if (t) {
					C = t.animated_avatar;
					E = t.avatar_frame;
				}
			}
			if (I && e.persona.is_ingame) {
				let t = u.xm.AppInfoStore.GetAppInfo(e.persona.m_unGamePlayedAppID);
				if (t.is_valid) {
					g = S.createElement(
						"div",
						{
							className: "FavoriteFriend_GameIcon",
						},
						S.createElement("img", {
							className: "gameIcon",
							src: t.icon_url,
							draggable: false,
						}),
					);
				}
			}
			let k = S.createElement(
				v.xz,
				{
					key: `${e.persona.GetAccountID()}_${e.persona.is_online}`,
					loopDuration: R ? "Medium" : "None",
					persona: e.persona,
					animatedAvatar: C,
					avatarFrame: E,
					size: _,
					statusStyle: c,
					statusPosition: M,
					bParentHovered: e.persona.is_online && this.state.bHovered,
					bLimitProfileFrameAnimationTime: !R || D,
				},
				m && h && S.createElement(W.fSs, null),
				g,
			);
			if (!s) {
				k = S.createElement(
					Rg,
					{
						friend: e,
						context: i,
						disableContextMenu: l,
						onContextMenuShown: this.OnContextMenuShown,
					},
					k,
				);
			}
			let G = i && i.chatContext == "chatmemberlist";
			let O = "";
			if (e.efriendrelationship == 2 && !G) {
				if (
					u.xm.FriendStore.FriendGroupStore.incoming_invites_group.map_steamid_to_mutual_friends.get(
						e.steamid64,
					) === undefined
				) {
					O = "noMutualFriends";
				}
				P = () => {
					return S.createElement(At, {
						friend: e,
					});
				};
			}
			let U = null;
			if (T && T.GetLastMessage()) {
				const e = u.xm.ChatStore.NotificationBBCodeParser.ParseBBCode(
					T.GetLastMessage(),
					{
						chat: T,
						unAccountIDSender: T.accountid_last_message,
						key: T.GetLastMessage(),
						rtTimestamp: T.time_last_message,
						onLoad: () => {},
					},
				);
				U = () => {
					return S.createElement(
						"div",
						{
							className: Ae.LastMessage,
						},
						`${(e && e.body) || Yj(T.GetLastMessage())}`,
					);
				};
			} else if (e.persona.HasCurrentGameRichPresence()) {
				U = () => {
					return e.persona.GetCurrentGameRichPresence();
				};
			} else if (e.persona.m_broadcastAccountId) {
				U = () => {
					return e.GetBroadcastDescription();
				};
			}
			const V = () => {
				N.showOnDesktop = !N.showOnDesktop;
				u.xm.ChatStore.VoiceChat.SetReceivingVideo(
					N.accountid,
					N.showOnDesktop,
				);
			};
			z = S.createElement(
				w.Z,
				{
					onMouseEnter: this.OnMouseEnter,
					onMouseLeave: this.OnMouseLeave,
					...x,
					ref: F,
				},
				S.createElement(Ee.Y, {
					onEnter: this.OnWaypointEnter,
					onLeave: this.OnWaypointLeave,
				}),
				S.createElement(pt, {
					friend: e,
				}),
				p &&
					S.createElement("div", {
						className: "SteamPlayerGroupLines",
					}),
				m &&
					S.createElement(gt, {
						friend: e,
					}),
				A,
				k,
				!B &&
					S.createElement(me.D, {
						className: A_1("labelHolder", O),
						persona: e.persona,
						eFriendRelationship: e.efriendrelationship,
						bIsSelf: u.xm.FriendStore.self == e,
						strNickname: e.nickname,
						bParenthesizeNicknames:
							u.xm.SettingsStore.CommunityPreferences.bParenthesizeNicknames,
						renderStatus: P,
						renderRichPresence: U,
						bHideGameName: r,
						bHideStatus: y,
						bHideEnhancedRichPresenceLabel: n,
						bHidePersona: f,
						bHideSnooze: b,
						bCompactView:
							u.xm.SettingsStore.FriendsSettings.bCompactFriendsList,
						onContextMenu:
							this.context?.IN_GAMEPADUI || s || l || this.OnShowContextMenu,
						bHasPartyBeacon: a !== undefined,
					}),
				d,
				N &&
					S.createElement(
						"div",
						{
							onClick: V,
							style: N.showOnDesktop
								? {
										color: "lightgreen",
									}
								: undefined,
						},
						"#",
					),
			);
		}
		return z;
	}
};
Cg([M.oI], dt.prototype, "OnWaypointEnter", null);
Cg([M.oI], dt.prototype, "OnWaypointLeave", null);
Cg([M.oI], dt.prototype, "OnMouseEnter", null);
Cg([M.oI], dt.prototype, "OnMouseLeave", null);
Cg([M.oI], dt.prototype, "OnDoubleClick", null);
Cg([M.oI], dt.prototype, "OnClick", null);
Cg([M.oI], dt.prototype, "OnOKButton", null);
Cg([M.oI], dt.prototype, "OnDragStart", null);
Cg([M.oI], dt.prototype, "OnDragEnd", null);
Cg([M.oI], dt.prototype, "OnShowContextMenu", null);
Cg([M.oI], dt.prototype, "OnContextMenuShown", null);
dt = Cg([b.PA], dt);
const At = PA(function (e) {
	const { friend: t } = e;
	let r;
	let n;
	let i =
		u.xm.FriendStore.FriendGroupStore.incoming_invites_group.map_steamid_to_mutual_friends.get(
			t.steamid64,
		);
	useEffect(() => {
		if (i === undefined) {
			u.xm.FriendStore.FriendGroupStore.EnsureMutualFriendsForIncomingInvites();
		}
	}, [i]);
	if (i === undefined) {
		n = Localize("#FriendGroup_NoMutualFriends");
	} else {
		n = LocalizePlural("#FriendGroup_YesMutualFriends", i.size);
		r = i.size;
	}
	return S.createElement(
		"span",
		{
			className: "inviteLabel",
		},
		S.createElement(
			"span",
			{
				className: "mutualFriendNumber",
			},
			r && r + "\xA0",
		),
		n,
	);
});
const pt = PA((e) => {
	const { friend: t } = e;
	const r = S.useCallback(() => {
		return t.LoadEquippedProfileItems();
	}, [t]);
	if (
		!t.BLoadedEquippedItems() &&
		t.persona.is_online &&
		u.xm.SettingsStore.FriendsSettings.bAnimatedAvatars
	) {
		return S.createElement(Ee.Y, {
			onEnter: r,
			topOffset: "-500px",
		});
	} else {
		return null;
	}
});
let gt = class extends S.Component {
	render() {
		let e = this.props.friend;
		let t = u.xm.CMInterface.steamid.GetAccountID() == e.accountid;
		let r = "voiceStatusIconsContainer";
		let n = "";
		let i = "";
		let a = false;
		let s = false;
		let o = false;
		let l = u.xm.VoiceStore.GetPerUserMuting(e.accountid);
		let c = u.xm.VoiceStore.GetUserMutedRemotely(e.accountid);
		let m = u.xm.VoiceStore.GetOutputMutedRemotely(e.accountid);
		if (t) {
			a = u.xm.VoiceStore.IsMicMuted();
			s = u.xm.VoiceStore.IsOutputMuted();
			o = u.xm.VoiceStore.BNoMicAvailableForSession();
			if (a) {
				r += " mic_muted_self";
			}
			if (s) {
				r += " output_muted_self";
			}
		} else {
			o = u.xm.VoiceStore.GetUserHasNoMicForSession(e.accountid);
		}
		if (l) {
			r += " muted_locally";
		}
		if (c) {
			r += " mic_muted_remotely";
		}
		if (m) {
			r += " output_muted_remotely";
		}
		if (o) {
			r += " no_mic_for_session";
		}
		if (o) {
			n = Localize("#Tooltip_MicStatus_NoMic");
		} else if (c) {
			n = Localize("#Tooltip_RemoteMicStatus_Muted");
		} else if (a) {
			n = Localize("#Tooltip_YourMicStatus_Muted");
		}
		if (m) {
			i = Localize("#Tooltip_RemoteOutputStatus_Muted");
		} else if (s) {
			i = Localize("#Tooltip_YourOutputStatus_Muted");
		}
		return S.createElement(
			"div",
			{
				className: r,
			},
			S.createElement(
				"div",
				{
					className: "voicestatusIcon voiceStatusMic disabled",
					title: n,
				},
				S.createElement(W.EQ9, {
					off: true,
				}),
			),
			S.createElement(
				"div",
				{
					className: "voicestatusIcon voiceStatusOutput disabled",
					title: i,
				},
				S.createElement(W.LeN, {
					off: true,
				}),
			),
		);
	}
};
gt = Cg([b.PA], gt);
export let gv = class extends S.Component {
	render() {
		const {
			friend: e,
			bLarge: t,
			className: r,
			context: n,
			children: i,
		} = this.props;
		return S.createElement(
			Rg,
			{
				friend: e,
				context: n,
			},
			S.createElement(
				"div",
				{
					className: A_1("friend", "FriendAvatar", rO(e.persona), r),
				},
				S.createElement(
					v.i8,
					{
						persona: e.persona,
						size: t ? "Large" : "Medium",
						className: r,
					},
					i,
				),
			),
		);
	}
};
gv = Cg([b.PA], gv);
let Ct = class extends S.Component {
	render() {
		let e;
		let t = u.xm.ChatStore.FriendChatStore.GetUnreadFriendMessageCount(
			this.props.browserContext,
		);
		if (this.props.bScrolledFromTop && t > 0) {
			e = S.createElement(
				De.M,
				{
					classNames: "unread-messages-anim",
					timeout: 320,
				},
				(e) => {
					return S.createElement(
						"div",
						{
							ref: e,
							className: "unreadMessageViolator",
							onClick: this.props.onClick,
						},
						t == 1 && Localize("#FriendGroup_UnreadMessagesViolator"),
						t > 1 && Localize("#FriendGroup_UnreadMessagesViolatorPlural", t),
					);
				},
			);
		}
		return S.createElement(z.A, null, e);
	}
};
Ct = Cg([b.PA], Ct);
let _t = class extends S.Component {
	constructor(e) {
		super(e);
		this.state = {
			collapsed: false,
		};
	}
	OnHeaderClick(e) {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		let e = this.props.friendChatStore.GetFriendsWithUnreadMessages(
			this.props.browserContext,
		);
		if (!e.length) {
			return null;
		}
		let t = this.state.collapsed;
		let r =
			t ||
			e.map((e) => {
				let t = e.unread_message_count;
				let r = e.chat_partner;
				let n = S.createElement(
					"div",
					{
						className: "FriendMessageCount",
					},
					t,
				);
				return S.createElement(
					De.M,
					{
						key: r.accountid,
						classNames: "friend-anim",
						timeout: 320,
					},
					(t) => {
						return S.createElement(
							"div",
							{
								ref: t,
								className: "unreadFriend",
							},
							S.createElement(bP, {
								friend: r,
								key: r.accountid,
								context: {
									chat: e,
								},
								bFriendsListEntry: true,
								listStatusIndicator: n,
								bInOverlay:
									this.props.browserContext.m_unAppID &&
									this.props.browserContext.m_unAppID != 0,
							}),
						);
					},
				);
			});
		return S.createElement(
			"div",
			{
				className: "friendGroup",
			},
			S.createElement(
				"div",
				{
					className: "groupName" + (t ? " Collapsed" : ""),
					onClick: this.OnHeaderClick,
				},
				S.createElement(
					"div",
					{
						className: "ExpandPlusMinus",
					},
					S.createElement(W.f5w, null),
				),
				Localize("#FriendGroup_UnreadMessages"),
				S.createElement(
					"span",
					{
						className: "groupCount",
					},
					"(",
					e.length,
					")",
				),
				S.createElement("hr", null),
			),
			S.createElement(z.A, null, r),
		);
	}
};
Cg([M.oI], _t.prototype, "OnHeaderClick", null);
_t = Cg([b.PA], _t);
