var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./58360.js");
var a = i;
var s = require("./52912.js");
var o = require(/*webcrack:missing*/ "./54644.js");
var l = require("./95773.js");
var c = require("./27847.js");
var m = require("./43229.js");
var u = require("./5222.js");
var d = require("./78060.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require(/*webcrack:missing*/ "./63696.js");
var g = require(/*webcrack:missing*/ "./50376.js");
var h = require(/*webcrack:missing*/ "./46108.js");
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require("./51095.js");
var f = require("./88620.js");
var b = require("./23024.js");
var y = require("./27337.js");
var S = require(/*webcrack:missing*/ "./90765.js");
var w = require(/*webcrack:missing*/ "./8573.js");
var B = require(/*webcrack:missing*/ "./88750.js");
var v = require(/*webcrack:missing*/ "./31084.js");
var _I = require(/*webcrack:missing*/ "./69164.js");
var E = require("./13869.js");
var M = require("./10042.js");
var T = require("./59704.js");
var R = require("./82594.js");
const k = ["148618792083695825", "76561197960266962"];
export let z7 = class extends p.Component {
	InviteFriend(e) {
		(0, f.E5)((0, s.CO)(e), (0, o.uX)(e), this.props.groupView.GetGroup());
	}
	OpenSettings(e) {
		(0, m.hI)((0, o.uX)(e), this.props.groupView);
	}
	OpenNotificationPreferences(e) {
		(0, u.lV)((0, o.uX)(e), this.props.groupView);
	}
	OnContextMenu(e) {
		(0, c.Tz)(e, this.props.groupView.GetGroup(), {
			is_chat_window: true,
		});
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetGroup();
		let r = t.name;
		let n = t.tagline;
		let i = false;
		if (t.readyToRender) {
			i = t.BCanInvite();
		}
		const a = e.GetGroup().watching_broadcast_steamid;
		return p.createElement(
			"div",
			{
				className: "chatRoomHeader",
			},
			p.createElement(
				_I.Z,
				{
					"flow-children": "row",
					className: "chatRoomGroupHeader" + (a ? " notifyBroadcast" : ""),
					onContextMenu: this.OnContextMenu,
					onMenuButton: this.OnContextMenu,
				},
				p.createElement(I, {
					group: t,
				}),
				p.createElement(
					"div",
					{
						className: "chatRoomGroupHeaderNameandTag",
					},
					p.createElement(
						"div",
						{
							className: "chatRoomGroupHeaderName",
						},
						r,
					),
					p.createElement(N, {
						strTagline: n,
					}),
				),
				p.createElement("div", {
					className: "chatRoomGroupSpacer",
				}),
				t.readyToRender &&
					p.createElement(
						p.Fragment,
						null,
						a &&
							p.createElement(G, {
								groupView: e,
							}),
						p.createElement(
							"div",
							{
								className: "chatRoomGroupControls",
							},
							p.createElement(
								"div",
								{
									className: "chatRoomOptions",
								},
								p.createElement(
									_I.Z,
									{
										className: "chatRoomButton ManageNotifications",
										onActivate: this.OpenNotificationPreferences,
										title: (0, h.we)("#Tooltip_NotificationSettings"),
									},
									p.createElement(g.IrQ, null),
								),
								i &&
									p.createElement(
										_I.Z,
										{
											className: "chatRoomButton InviteToGroupChat",
											onActivate: this.InviteFriend,
											title: (0, h.we)("#Tooltip_InviteToGroup"),
										},
										p.createElement(g.MxO, null),
									),
								!i &&
									p.createElement(
										"div",
										{
											className: "chatRoomButton InviteToGroupChat Disabled",
											onClick: (e) => {},
											title: (0, h.we)("#Tooltip_InviteToGroup_Denied"),
										},
										p.createElement(g.MxO, null),
									),
								p.createElement(
									_I.Z,
									{
										className: "chatRoomButton GroupChatSettings",
										onActivate: this.OpenSettings,
										title: (0, h.we)("#Tooltip_GroupChatSettings"),
									},
									p.createElement(g.m59, null),
								),
							),
							p.createElement(
								"div",
								{
									className: "chatRoomGroupStats",
								},
								p.createElement(L, {
									groupView: e,
								}),
								p.createElement(x, {
									groupView: e,
								}),
								p.createElement(z, {
									groupView: e,
								}),
							),
						),
					),
			),
		);
	}
};
function N(e) {
	const { strTagline: t } = e;
	const r = t.toLowerCase();
	if (
		(!r.startsWith("https://") && !r.startsWith("http://")) ||
		t.includes(" ")
	) {
		return p.createElement(
			"div",
			{
				className: "chatRoomGroupHeaderTagline",
			},
			e.strTagline,
		);
	} else {
		return p.createElement(
			T.uU,
			{
				href: t,
				className: "chatRoomGroupHeaderTagline",
				bUseLinkFilter: true,
			},
			t,
		);
	}
}
(0, n.Cg)([C.oI], z7.prototype, "InviteFriend", null);
(0, n.Cg)([C.oI], z7.prototype, "OpenSettings", null);
(0, n.Cg)([C.oI], z7.prototype, "OpenNotificationPreferences", null);
(0, n.Cg)([C.oI], z7.prototype, "OnContextMenu", null);
z7 = (0, n.Cg)([A.PA], z7);
export let wu = class extends p.Component {
	fnShowTextChannelsDialog(e) {
		(0, E.pg)(
			p.createElement(M.LC, {
				groupView: this.props.groupView,
			}),
			(0, o.uX)(e),
		);
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetGroup();
		let r = t.name;
		let n = t.tagline;
		let i = false;
		if (t.readyToRender) {
			i = t.BCanInvite();
		}
		const a = e.GetGroup().watching_broadcast_steamid;
		const s = e.GetActiveChatView()?.chat.GetVoiceAllowed();
		let o = e.GetActiveChatView()?.GetTabName();
		if (s) {
			o = (0, h.we)("#GroupSettings_Channels_VoiceQuickChatRoom", o);
		}
		return p.createElement(
			"div",
			{
				className: "chatRoomHeader",
			},
			p.createElement(
				_I.Z,
				{
					focusable: false,
					fnCanTakeFocus: () => true,
					"flow-children": "row",
					className: "chatRoomGroupHeader" + (a ? " notifyBroadcast" : ""),
				},
				p.createElement(I, {
					group: t,
				}),
				p.createElement(
					"div",
					{
						className: "chatRoomGroupHeaderNameandTag",
					},
					p.createElement(
						"div",
						{
							className: "chatRoomGroupHeaderName",
						},
						r,
						p.createElement(N, {
							strTagline: n,
						}),
					),
					p.createElement(
						_I.Z,
						{
							className: "chatRoomGroupActiveChat " + (s ? "voiceRoom" : ""),
							focusable: true,
							fnCanTakeFocus: () => true,
							onActivate: this.fnShowTextChannelsDialog,
							onOKActionDescription: (0, h.we)(
								"#GroupSettings_Channels_TextChannels",
							),
						},
						p.createElement(g.tcj, null),
						o,
					),
				),
				p.createElement("div", {
					className: "chatRoomGroupSpacer",
				}),
				t.readyToRender &&
					p.createElement(
						p.Fragment,
						null,
						a &&
							p.createElement(G, {
								groupView: e,
							}),
						p.createElement(
							"div",
							{
								className: "chatRoomGroupControls",
							},
							p.createElement(
								"div",
								{
									className: "chatRoomGroupStats",
								},
								p.createElement(L, {
									groupView: e,
								}),
								p.createElement(x, {
									groupView: e,
								}),
								p.createElement(z, {
									groupView: e,
								}),
							),
						),
					),
			),
		);
	}
};
(0, n.Cg)([C.oI], wu.prototype, "fnShowTextChannelsDialog", null);
wu = (0, n.Cg)([A.PA], wu);
let G = class extends p.Component {
	constructor(e) {
		super(e);
		let t = this.GetBroadcastID(e.groupView);
		this.state = {
			info: b.BroadcastWatchStore.StartInfo(t),
		};
	}
	GetBroadcastID(e) {
		return e.GetGroup().watching_broadcast_steamid.ConvertTo64BitString();
	}
	componentWillUnmount() {
		b.BroadcastWatchStore.StopInfo(this.state.info);
	}
	OnRemoveBroadcast(e) {
		e.stopPropagation();
		const t = this.props.groupView.GetGroup();
		if (!t.BCanIAssociateBroadcast()) {
			return;
		}
		const r = (0, o.uX)(e);
		(0, d.Ci)(
			r,
			(0, h.we)("#Broadcast_EndWatchParty"),
			(0, h.we)("#Broadcast_EndWatchPartyPrompt"),
			(0, h.we)("#Broadcast_EndWatchParty"),
		).then(() => t.SetChatRoomGroupWatchingBroadcast(undefined));
	}
	OnToggleBroadcast(e) {
		let t = this.props.groupView;
		if (t.isBroadcastShown) {
			t.HideBroadcast();
		} else {
			t.ShowBroadcast();
		}
	}
	render() {
		const {
			info: { m_strAppTitle: e, m_strThumbnailUrl: t, m_strTitle: r },
		} = this.state;
		const n = this.props.groupView;
		const i = n.GetGroup();
		const a = this.GetBroadcastID(this.props.groupView);
		const s = n.isBroadcastShown;
		if (k.indexOf(a) >= 0) {
			return p.createElement(O, {
				groupView: n,
				onClick: this.OnToggleBroadcast,
				onRemoveBroadcast: this.OnRemoveBroadcast,
				watchingBroadcast: s,
			});
		}
		if (s) {
			return null;
		}
		let o = new w.b(a);
		let c = r;
		if (!r) {
			c = (0, h.we)(
				"#PersonaStateWatchingBroadcast_Player",
				l.xm.FriendStore.GetPlayer(o.GetAccountID()).display_name,
			);
		}
		return p.createElement(
			"div",
			{
				className: "broadcastInfoContainer",
				onClick: this.OnToggleBroadcast,
			},
			p.createElement(
				"div",
				{
					className: "broadcastDetails",
				},
				p.createElement(
					"div",
					{
						className: "nowWatching",
					},
					(0, h.we)("#Broadcast_NowWatching"),
				),
				p.createElement(
					"div",
					{
						className: "gameTitle",
					},
					e,
				),
				p.createElement(
					"div",
					{
						className: "broadcastTitle",
					},
					c,
				),
			),
			p.createElement(
				"div",
				{
					className: "thumbnail",
				},
				t &&
					p.createElement(y.y, {
						className: "thumbnailImg",
						src: t,
						duration: 2500,
					}),
			),
			i.BCanIAssociateBroadcast() &&
				p.createElement(
					"div",
					{
						className: "actions",
						onClick: this.OnRemoveBroadcast,
					},
					p.createElement(g.X, null),
				),
		);
	}
};
(0, n.Cg)([C.oI], G.prototype, "OnRemoveBroadcast", null);
(0, n.Cg)([C.oI], G.prototype, "OnToggleBroadcast", null);
G = (0, n.Cg)([A.PA], G);
class O extends p.Component {
	OnContextMenu(e) {
		if (this.props.groupView.GetGroup().BCanIAssociateBroadcast()) {
			(function (e, t) {
				(0, v.lX)(
					p.createElement(P, {
						onRemoveBroadcast: t,
					}),
					e,
				);
			})(e, this.props.onRemoveBroadcast);
		}
	}
	render() {
		let e = this.props.watchingBroadcast;
		let t = (0, S.A)(a.YuleLog, e && a.Watching);
		return p.createElement("div", {
			className: t,
			onClick: this.props.onClick,
			onContextMenu: this.OnContextMenu,
		});
	}
}
(0, n.Cg)([C.oI], O.prototype, "OnContextMenu", null);
class P extends p.Component {
	render() {
		return p.createElement(
			B.tz,
			{
				className: "chatRoomListItemContextMenu",
			},
			p.createElement(
				B.kt,
				{
					key: "removebroadcast",
					onSelected: this.props.onRemoveBroadcast,
				},
				(0, h.we)("#Chat_Actions_RemoveRoom_Action"),
			),
		);
	}
}
let L = (0, A.PA)((e) => {
	const { groupView: t } = e;
	return p.createElement(
		"div",
		{
			className: "statMemberStat statMembersTotal",
		},
		p.createElement("div", {
			className: "statCircle",
		}),
		(0, h.Yp)("#Chat_Members", t.GetMemberCountTotal()),
	);
});
let z = (0, A.PA)((e) => {
	const { groupView: t } = e;
	let r = t.GetMemberCountInGame();
	if (r == 0) {
		return null;
	} else {
		return p.createElement(
			"div",
			{
				className: "statMemberStat statMembersInGame",
				title: (0, h.Yp)("#Chat_Members_InGame_Tooltip", r),
			},
			p.createElement("div", {
				className: "statCircle",
			}),
			r,
		);
	}
});
let x = (0, A.PA)((e) => {
	const { groupView: t } = e;
	let r = t.GetMemberCountOnline();
	if (r == 0) {
		return null;
	} else {
		return p.createElement(
			"div",
			{
				className: "statMemberStat statMembersOnline",
				title: (0, h.Yp)("#Chat_Members_Online_Tooltip", r),
			},
			p.createElement("div", {
				className: "statCircle",
			}),
			r,
		);
	}
});
function U(e) {
	const { appID: t } = e;
	const [r] = (0, R.t7)(t, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return p.createElement(
			"div",
			{
				className: "ChatRoomGroupOGGAvatar Large",
			},
			p.createElement("img", {
				className: "OGGAvatar",
				src: n,
			}),
		);
	} else {
		return p.createElement("div", {
			className: "ChatRoomGroupOGGAvatar Large",
		});
	}
}
export let _O = (0, A.PA)((e) => {
	let t = e.size;
	if (
		(t == "large" || t == "medium") &&
		e.clan.BIsOGG() &&
		e.clan.GetOGGAppID()
	) {
		return p.createElement(U, {
			appID: e.clan.GetOGGAppID(),
		});
	}
	let r = "";
	if (t == "micro") {
		r = "Micro";
	} else if (t == "smallish") {
		r = "Small Smallish";
	} else if (t == "smaller") {
		r = "Smaller";
	} else if (t == "small") {
		r = "Small";
	} else if (t == "large") {
		r = "Large";
	}
	let n = t == "large" ? e.clan.avatar_url_full : e.clan.avatar_url_medium;
	return p.createElement(
		"div",
		{
			className: "ChatRoomGroupAvatar " + r,
		},
		p.createElement("img", {
			className: "ChatRoomGroupAvatar_Avatar",
			src: n,
		}),
	);
});
export let I = class extends p.Component {
	render() {
		let e = this.props.group;
		if (e && e.BIsClanChatRoom()) {
			let t = l.xm.FriendStore.ClanStore.GetClan(e.GetClanID());
			let r = "medium";
			if (this.props.micro) {
				r = "micro";
			} else if (this.props.small) {
				r = "small";
			} else if (this.props.smallish) {
				r = "smallish";
			} else if (this.props.smaller) {
				r = "smaller";
			} else if (this.props.large) {
				r = "large";
			}
			return p.createElement(_O, {
				clan: t,
				size: r,
			});
		}
		let t = "";
		if (this.props.micro) {
			t = "Micro";
		} else if (this.props.small) {
			t = "Small";
		} else if (this.props.smallish) {
			t = "Small Smallish";
		} else if (this.props.smaller) {
			t = "Smaller";
		} else if (this.props.large) {
			t = "Large";
		}
		if (e && !e.IsNamedGroupChat()) {
			let r = e.members_to_highlight;
			let n = r.members;
			let i = r.remaining_count;
			if (n.length) {
				let e = n.length + (i ? 1 : 0);
				return p.createElement(
					"div",
					{
						className: "ChatRoomMultiFriendAvatar With" + e + "Items " + t,
					},
					n.map((e, t) =>
						p.createElement("img", {
							src: this.props.large
								? e.persona.avatar_url_medium
								: e.persona.avatar_url,
							key: t,
							className: "MultiAvatar Index" + t,
						}),
					),
					i > 0 &&
						p.createElement(
							"div",
							{
								className: "ChatRoomMultiFriendMore MultiAvatar Index3",
							},
							"+",
							i,
						),
				);
			}
		}
		if (e && e.hasIcon) {
			return p.createElement(
				"div",
				{
					className: "ChatRoomGroupAvatar HasAvatar " + t,
				},
				p.createElement("img", {
					className: "ChatRoomGroupAvatar_Avatar",
					src: e.avatar_url_full,
				}),
			);
		}
		{
			let r = "";
			if (e) {
				r = e.name;
			} else if (this.props.name) {
				r = this.props.name;
			}
			let n = (0, _.g)(r);
			let i = "ChatRoomGroupAvatar " + t;
			if (_.tV(n)) {
				i += " EmojiInitials";
			}
			return p.createElement(
				"div",
				{
					className: i,
				},
				p.createElement(
					"div",
					{
						className: "ChatRoomGroupAvatar_initials",
					},
					n,
				),
			);
		}
	}
};
export async function qj(e, t) {
	let r = (0, s._k)(e);
	let n = t.BIsClanChatRoom()
		? "#Chat_Actions_LeaveChatRoomGroup_ClanConfirm"
		: t.BIsAccountIDOwner(l.xm.CMInterface.steamid.GetAccountID())
			? "#Chat_Actions_OwnerLeaveChatRoomGroup_Confirm"
			: "#Chat_Actions_LeaveChatRoomGroup_Confirm";
	if (
		await (0, d.WQ)(
			e,
			(0, h.we)("#Chat_Actions_LeaveChatRoomGroup"),
			(0, h.we)(n, t.name),
			(0, h.we)("#Chat_Actions_LeaveChatRoomGroup"),
		)
	) {
		t.LeaveChatRoomGroup(r);
	}
}
I = (0, n.Cg)([A.PA], I);
