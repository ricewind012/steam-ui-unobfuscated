var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./44234.js");
var a = require("./3756.js");
var s = require("./66146.js");
var o = require("./96127.js");
var l = require("./8653.js");
var c = require("./95773.js");
var m = require("./52912.js");
var u = require("./15855.js");
var d = require(/*webcrack:missing*/ "./63696.js");
var A = require("./83665.js");
var p = require("./7308.js");
var g = p;
const h = ({ message: e, name: t, renderImage: r, ...n }) =>
	d.createElement(
		A.M,
		{
			key: "inviteDrop",
			classNames: {
				...g,
			},
			timeout: 300,
			...n,
		},
		(n) =>
			d.createElement(
				"div",
				{
					ref: n,
					className: g.ChatModalCover,
				},
				d.createElement(
					"div",
					{
						className: g.InviteDropContainer,
					},
					d.createElement(
						"span",
						{
							className: g.InviteDropImage,
						},
						r(),
					),
					d.createElement(
						"span",
						{
							className: g.InviteDropName,
						},
						t,
					),
					d.createElement(
						"span",
						{
							className: g.InviteDropMessage,
						},
						e,
					),
					d.createElement("span", {
						className: g.InviteDropBackground,
					}),
				),
			),
	);
var C = require("./53414.js");
var _ = require("./88620.js");
var f = require("./69649.js");
var b = require("./78060.js");
var y = require("./59704.js");
var S = require(/*webcrack:missing*/ "./41230.js");
var w = require(/*webcrack:missing*/ "./90242.js");
var B = require("./17231.js");
var v = require("./66408.js");
var I = require("./64608.js");
var E = require(/*webcrack:missing*/ "./42318.js");
var M = require("./13869.js");
var T = require(/*webcrack:missing*/ "./50376.js");
var R = require(/*webcrack:missing*/ "./49455.js");
var k = require(/*webcrack:missing*/ "./90765.js");
var D = require(/*webcrack:missing*/ "./54644.js");
var N = require(/*webcrack:missing*/ "./46108.js");
var F = require(/*webcrack:missing*/ "./52451.js");
var G = require(/*webcrack:missing*/ "./69164.js");
var O = require("./10042.js");
var P = require("./76815.js");
var L = require("./47036.js");
var z = require("./97422.js");
var x = require("./87949.js");
var U = require(/*webcrack:missing*/ "./23038.js");
var W = require(/*webcrack:missing*/ "./8573.js");
var V = require(/*webcrack:missing*/ "./31958.js");
var H = require("./39590.js");
var j = require("./50551.js");
var q = require("./1918.js");
var Q = require(/*webcrack:missing*/ "./45328.js");
var Z = require(/*webcrack:missing*/ "./4690.js");
var Y = require(/*webcrack:missing*/ "./11131.js");
const K = d.lazy(() => require.e(7653).then(require.bind(require, 72993)));
let X = class extends d.Component {
	static contextType = i.QO;
	m_fnUnregisterDropComplete = undefined;
	m_friendSteamId;
	m_bChatHidden = false;
	m_bShowVerticalBroadcastChat;
	m_strLocalBroadcastId;
	m_refBroadcastContainer = d.createRef();
	m_elMainContent;
	constructor(e) {
		super(e);
		this.state = {
			dropToInviteFriend: undefined,
			dropGroupToInviteFriend: undefined,
			dropClanToInvite: undefined,
			speakerLabelWidth: 0,
		};
		this.m_friendSteamId = W.b
			.InitFromAccountID(e.chatView.chat.accountid_partner)
			.ConvertTo64BitString();
	}
	OnDragEnter(e, t) {
		if (e) {
			(0, R.w)(
				e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "clan" ||
					e.type == "html",
				"Invalid data type passed to FriendChatDialog.OnDrop",
			);
		} else {
			(0, R.w)(t, "Invalid data type passed to FriendChatDialog.OnDrop");
		}
		if (!e) {
			return true;
		}
		let r = e.type == "friend" ? e.friend : undefined;
		if (r && r.accountid !== this.props.chatView.chat.accountid_partner) {
			this.m_fnUnregisterDropComplete ||=
				m.ZM.DragDropManager.RegisterForDropComplete(this.OnDropComplete);
			this.setState({
				dropToInviteFriend: r,
			});
			return true;
		}
		let n = e.type == "chatroomgroup" ? e.group : undefined;
		if (n) {
			this.m_fnUnregisterDropComplete ||=
				m.ZM.DragDropManager.RegisterForDropComplete(this.OnDropComplete);
			this.setState({
				dropGroupToInviteFriend: n,
			});
			return true;
		}
		let i = e.type == "clan" ? e.clan : undefined;
		return (
			!i ||
			((this.m_fnUnregisterDropComplete ||=
				m.ZM.DragDropManager.RegisterForDropComplete(this.OnDropComplete)),
			this.setState({
				dropClanToInvite: i,
			}),
			true)
		);
	}
	OnDragLeave() {
		if (
			this.state.dropToInviteFriend ||
			this.state.dropGroupToInviteFriend ||
			this.state.dropClanToInvite
		) {
			this.m_fnUnregisterDropComplete.Unregister();
			this.m_fnUnregisterDropComplete = undefined;
			this.setState({
				dropToInviteFriend: undefined,
				dropGroupToInviteFriend: undefined,
				dropClanToInvite: undefined,
			});
		}
	}
	OnDragOver(e) {
		e.dataTransfer.dropEffect = "move";
	}
	OnDrop(e, t) {
		if (e) {
			(0, R.w)(
				e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "clan" ||
					e.type == "html",
				"Invalid data type passed to FriendChatDialog.OnDrop",
			);
		} else {
			(0, R.w)(
				t.dataTransfer.files.length != 0,
				"Invalid data type passed to FriendChatDialog.OnDrop",
			);
		}
		let r = this.props.chatView;
		if (e) {
			let n = t.currentTarget.ownerDocument.defaultView;
			let i = r.chat.chat_partner;
			let a = e.type == "friend" ? e.friend : undefined;
			let s = e.type == "chatroomgroup" ? e.group : undefined;
			let o = e.type == "clan" ? e.clan : undefined;
			let l = e.type == "html" ? e.mapData : undefined;
			if (a) {
				if (i == a) {
					return;
				}
				if (this.state.dropToInviteFriend) {
					this.m_fnUnregisterDropComplete.Unregister();
					this.m_fnUnregisterDropComplete = undefined;
					this.setState({
						dropToInviteFriend: undefined,
					});
				}
				m.ZM.DragDropManager.SetDropConsumed();
				nn(
					{
						invitee: a,
						chatview: r,
						invitedto: i,
					},
					(0, m.CO)(t),
					n,
				);
			} else if (s || o) {
				if (this.state.dropGroupToInviteFriend || this.state.dropClanToInvite) {
					this.m_fnUnregisterDropComplete.Unregister();
					this.m_fnUnregisterDropComplete = undefined;
					this.setState({
						dropGroupToInviteFriend: undefined,
						dropClanToInvite: undefined,
					});
				}
				m.ZM.DragDropManager.SetDropConsumed();
				if (o) {
					s = c.xm.ChatStore.GetChatRoomGroup(o.GetChatGroupIDIfLoaded());
				}
				nn(
					{
						invitee: i,
						invitedto: s,
					},
					(0, m.CO)(t),
					n,
				);
			} else if (l && l.has("text/plain")) {
				r.AddPendingText(l.get("text/plain"));
			}
		} else if (t.dataTransfer.files.length != 0) {
			let e = t.dataTransfer.files[0];
			r.SetFileToUpload(e);
		}
	}
	OnDropComplete(e) {
		if (!e && this.state.dropToInviteFriend) {
			this.m_fnUnregisterDropComplete = undefined;
			this.setState({
				dropToInviteFriend: undefined,
			});
		}
	}
	OnNameWidthChanged(e) {
		this.setState({
			speakerLabelWidth: e,
		});
	}
	componentDidMount() {
		window.addEventListener("resize", this.OnLayoutChange);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.OnLayoutChange);
	}
	CalculateBroadcastSectionStyles(e) {
		if (this.m_bChatHidden) {
			return {
				width: "100%",
				height: "100%",
			};
		}
		const {
			nWatchPartyBroadcastHeightPercentage: t,
			nWatchPartyBroadcastWidthPercentage: r,
		} = m.ZM.UIDisplayPrefs;
		const n = {};
		if (e) {
			const e = t || 66;
			n.height = `${e}%`;
			if (this.m_elMainContent) {
				const { clientWidth: t, clientHeight: r } = this.m_elMainContent;
				const i = (9 / 16) * t + 50;
				const a = (0, V.OQ)(e, 1, (i / r) * 100);
				n.height = `${a}%`;
			}
		} else {
			n.width = r ? `${r}%` : "66%";
			n.overflowY = "auto";
		}
		return n;
	}
	ShouldShowVerticalBroadcastChat() {
		if (this.m_bShowVerticalBroadcastChat !== undefined) {
			return this.m_bShowVerticalBroadcastChat;
		} else {
			return (
				!!this.m_elMainContent &&
				this.m_elMainContent.clientHeight / this.m_elMainContent.clientWidth >
					5 / 7
			);
		}
	}
	OnLayoutChange() {
		this.forceUpdate();
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterDragEvents);
	}
	HandleMouseMove(e) {
		e.preventDefault();
		e.stopPropagation();
		let t = this.m_refBroadcastContainer.current.getBoundingClientRect();
		let r =
			this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
		const n = this.ShouldShowVerticalBroadcastChat();
		const i = n ? t.top : t.left;
		const a = n ? e.clientY : e.clientX;
		const s = n ? r.height : r.width;
		const o = (0, V.OQ)(((a - i) / s) * 100, 1, 100);
		const l = n
			? "nWatchPartyBroadcastHeightPercentage"
			: "nWatchPartyBroadcastWidthPercentage";
		m.ZM.SetUIDisplayPref(l, o);
	}
	UnregisterDragEvents(e) {
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("mouseup", this.UnregisterDragEvents);
	}
	HideChat() {
		this.SetChatHidden(true);
	}
	ShowChat() {
		this.SetChatHidden(false);
	}
	SetChatHidden(e) {
		this.m_bChatHidden = e;
		this.forceUpdate();
	}
	ShowBroadcast() {
		c.xm.UIStore.SetFriendBroadcastVisible(this.m_friendSteamId, true);
		SetBackgroundTimeout(() => {
			this.props.chatView.OnChatFrameChanged();
		}, 30);
	}
	HideBroadcast() {
		c.xm.UIStore.SetFriendBroadcastVisible(this.m_friendSteamId, false);
		c.xm.UIStore.SetTheaterMode(false);
		SetBackgroundTimeout(() => {
			this.props.chatView.OnChatFrameChanged();
		}, 30);
	}
	ToggleVerticalBroadcastChat() {
		this.SetVerticalBroadcastChat(!this.ShouldShowVerticalBroadcastChat());
		this.SetChatHidden(false);
	}
	ToggleTheaterModeBroadcastChat() {
		c.xm.UIStore.SetTheaterMode(!c.xm.UIStore.GetTheaterMode());
	}
	SetVerticalBroadcastChat(e) {
		this.m_bShowVerticalBroadcastChat = e;
	}
	SetLocalBroadcastId(e) {
		this.m_strLocalBroadcastId = e;
	}
	SetMainContentRef(e) {
		this.m_elMainContent = e;
		this.OnLayoutChange();
	}
	GetTitleBarDragDropProps() {
		let e = {
			rgAcceptedTypes: [],
			bAcceptsFiles: true,
		};
		e.fnDrop = this.OnDrop;
		return e;
	}
	GetChatBodyDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend", "chatroomgroup", "clan", "text/plain"],
			bAcceptsFiles: true,
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDragOver = this.OnDragOver;
		e.fnDrop = this.OnDrop;
		return e;
	}
	RenderInnerChatTabs() {
		return d.createElement(
			"div",
			{
				className: "ChatBodyControls",
			},
			d.createElement(
				"div",
				{
					className: "Close",
					onClick: this.HideChat,
					title: (0, N.we)("#Broadcast_View_HideChat"),
				},
				d.createElement(T.K7s, {
					showChat: false,
				}),
			),
			d.createElement(nK, {
				chatView: this.props.chatView,
				additionalClasses: "broadcastVisible",
			}),
		);
	}
	render() {
		if (!this.props.chatView) {
			return null;
		}
		let e = this.props.chatView.chat;
		let t = c.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(
			e.accountid_partner,
		);
		let r = this.props.chatView.BVoiceActive();
		let n = c.xm.UIStore.IsFriendBroadcastVisible(this.m_friendSteamId);
		let i = e.GetShowNonFriendWarning();
		const {
			dropToInviteFriend: a,
			dropGroupToInviteFriend: s,
			dropClanToInvite: o,
		} = this.state;
		let l;
		if (a) {
			l = d.createElement(J3, {
				chatView: this.props.chatView,
				friend: this.state.dropToInviteFriend,
			});
		} else if (s || o) {
			l = d.createElement(C1, {
				chatView: this.props.chatView,
				group: this.state.dropGroupToInviteFriend,
				clan: this.state.dropClanToInvite,
			});
		}
		let m = false;
		let p = null;
		let g = this.ShouldShowVerticalBroadcastChat();
		let h = this.m_bChatHidden;
		if (n) {
			const t = this.CalculateBroadcastSectionStyles(g);
			p = d.createElement(
				d.Suspense,
				{
					fallback: null,
				},
				d.createElement(ee, {
					ref: this.m_refBroadcastContainer,
					steamID: W.b
						.InitFromAccountID(e.accountid_partner)
						.ConvertTo64BitString(),
					localSteamID: this.m_strLocalBroadcastId,
					watchLocation: 12,
					bWebRTC: true,
					onRequestClose: this.HideBroadcast,
					actions: [
						d.createElement("div", {
							key: "ChatPosToggle",
							onClick: this.ToggleVerticalBroadcastChat,
							title: `${g ? ((0, N.we))("#Broadcast_View_Stack_H") : ((0, N.we))("#Broadcast_View_Stack_V")}`,
							className:
								"BroadcastChatPositionToggle " + (g ? "right" : "bottom"),
						}),
					],
					style: t,
					onTheaterMode: this.ToggleTheaterModeBroadcastChat,
				}),
				!h &&
					d.createElement("div", {
						className:
							"BroadcastChatDivider " + (g ? "vertical" : "horizontal"),
						onMouseDown: this.OnGrabberMouseDown,
					}),
				h &&
					d.createElement(Ko, {
						onClick: this.ShowChat,
						edge: g ? "bottom" : "right",
					}),
			);
			m = true;
		} else {
			m = false;
		}
		let C = {};
		if (!this.props.isActive) {
			C.display = "none";
		}
		const _ = (0, k.A)(
			"chatWindow",
			"MultiUserChat",
			r && "VoiceActive",
			r && c.xm.ChatStore.VoiceChat.IsMicMuted() && "MicMuted",
			t && "VoiceRequested",
			i && "NotAFriendOrApproved",
			c.xm.SettingsStore.FriendsSettings.bCompactFriendsList && "compactView",
			m && "broadcastVisible",
		);
		const f = (0, k.A)("chatBody", (a || s || o) && "chatRoomActiveDrop");
		const b =
			this.m_bChatHidden && n
				? null
				: d.createElement(Y.gs.Consumer, null, (t) =>
						d.createElement(L.o, {
							key: e.unique_id,
							chatView: this.props.chatView,
							isActive: this.props.isActive,
							disabled: false,
							ownerWindow: t.ownerWindow,
						}),
					);
		let y = d.createElement(
			u.T,
			{
				style: C,
				className: "chatHistoryAndMembers",
				...this.GetChatBodyDragDropProps(),
			},
			d.createElement(U.A, null, l),
			d.createElement(
				"div",
				{
					className: "displayColumn fullWidth",
				},
				d.createElement(
					G.Z,
					{
						className: "displayRow minHeightZero",
						"flow-children": "row",
						navEntryPreferPosition: Z.iU.PREFERRED_CHILD,
					},
					i &&
						d.createElement(SU, {
							chatView: this.props.chatView,
							friend: e.chat_partner,
						}),
					d.createElement(
						"div",
						{
							className: "ChatRoomGroupDialog_history",
						},
						c.xm.UIStore.show_winter_sale_ui &&
							!c.xm.SettingsStore.FriendsSettings.bDisableRoomEffects &&
							d.createElement(q.Y, {
								effectManager: e.RoomEffectManager(),
							}),
						d.createElement(H.D, {
							chatView: this.props.chatView,
							isActive: this.props.isActive,
							speakerLabelWidth: this.state.speakerLabelWidth,
							blockInteraction: i,
						}),
					),
					!n &&
						!this.context?.IN_GAMEPADUI &&
						d.createElement(nK, {
							chatView: this.props.chatView,
							additionalClasses: undefined,
						}),
					this.context?.IN_GAMEPADUI &&
						d.createElement(
							G.Z,
							{
								className: "RightSideButtonContainer",
								"flow-children": "column",
							},
							d.createElement(QH, {
								chatView: this.props.chatView,
								bSteamDeck: true,
							}),
							!e.chat_partner.is_friend &&
								d.createElement(J, {
									friend: e.chat_partner,
								}),
							d.createElement(nK, {
								chatView: this.props.chatView,
								additionalClasses: undefined,
							}),
						),
					d.createElement("div", {
						className: "dropTargetBox",
					}),
				),
				b,
			),
		);
		let S =
			"chatStack " + (g ? "displayRow" : "displayColumn") + " GroupChatVisible";
		let w = {};
		if (r) {
			w.onSecondaryButton = () => e.ToggleVoiceChat();
			w.onSecondaryActionDescription = (0, N.we)("#Friend_Menu_StopVoiceChat");
		}
		return d.createElement(
			u.D,
			{
				fnCanTakeFocus: () => this.props.isActive,
				"data-activechat": this.props.isActive,
				style: C,
				className: _,
				...this.GetTitleBarDragDropProps(),
				...w,
			},
			d.createElement("div", {
				className: "chatHeader",
			}),
			this.props.isActive &&
				d.createElement($, {
					chatView: this.props.chatView,
					onNameWidthChanged: this.OnNameWidthChanged,
				}),
			d.createElement(
				U.A,
				null,
				(r || t) &&
					!this.context?.IN_GAMEPADUI &&
					d.createElement(
						A.M,
						{
							key: "OneOnOneVoiceHeader",
							classNames: "OneOnOneVoice-anim",
							timeout: 300,
						},
						(e) =>
							d.createElement(
								"div",
								{
									ref: e,
								},
								d.createElement(QH, {
									chatView: this.props.chatView,
								}),
							),
					),
			),
			d.createElement(
				"div",
				{
					className: "ChatRoomGroupDialog_contents",
				},
				d.createElement(
					"div",
					{
						className: "ChatRoomGroup_MainAndChatEntry displayColumn",
						ref: this.SetMainContentRef,
					},
					d.createElement(
						"div",
						{
							className: "ChatRoomGroup_Main_ContentAndMembers displayRow",
						},
						d.createElement(
							"div",
							{
								className: `ChatRoomGroup_Main_Content ${g ? "Vertical" : "Horizontal"} ${h ? "chatHidden" : ""}`,
							},
							p,
							(!this.m_bChatHidden || !n) &&
								d.createElement(
									"div",
									{
										className: f,
									},
									this.context?.IN_GAMEPADUI && d.createElement(x.H, null),
									n && this.RenderInnerChatTabs(),
									d.createElement(
										"div",
										{
											className: S,
										},
										y,
									),
								),
						),
					),
				),
			),
		);
	}
};
function J(e) {
	let { friend: t } = e;
	const r = d.useCallback(
		(e) => {
			let r = (0, D.uX)(e);
			c.xm.FriendStore.SendFriendInvite(t).then((e) => {
				let { eResult: n, eFriendRelationship: i } = e;
				if (i == 4) {
					(0, b.Ic)(
						r,
						(0, N.we)("#Friend_Menu_AddToFriendsList"),
						(0, N.we)("#Friend_InviteSent"),
					);
				} else if (i == 3) {
					(0, b.Ic)(
						r,
						(0, N.we)("#Friend_Menu_AddToFriendsList"),
						(0, N.we)("#Friend_MutualInviteSent", t.display_name),
					);
				} else {
					(0, z.Jw)(r, n, i, t.display_name);
				}
			});
		},
		[t],
	);
	return d.createElement(
		G.Z,
		{
			focusable: true,
			className: "AddFriendButton",
			onActivate: r,
			onOKActionDescription: (0, N.we)("#Friend_Menu_AddToFriendsList"),
		},
		d.createElement(T.sdo, null),
	);
}
(0, n.Cg)([F.oI], X.prototype, "OnDragEnter", null);
(0, n.Cg)([F.oI], X.prototype, "OnDragLeave", null);
(0, n.Cg)([F.oI], X.prototype, "OnDragOver", null);
(0, n.Cg)([F.oI], X.prototype, "OnDrop", null);
(0, n.Cg)([F.oI], X.prototype, "OnDropComplete", null);
(0, n.Cg)([F.oI], X.prototype, "OnNameWidthChanged", null);
(0, n.Cg)([F.oI], X.prototype, "ShouldShowVerticalBroadcastChat", null);
(0, n.Cg)([F.oI], X.prototype, "OnLayoutChange", null);
(0, n.Cg)([F.oI], X.prototype, "OnGrabberMouseDown", null);
(0, n.Cg)([F.oI], X.prototype, "HandleMouseMove", null);
(0, n.Cg)([F.oI], X.prototype, "UnregisterDragEvents", null);
(0, n.Cg)([F.oI], X.prototype, "HideChat", null);
(0, n.Cg)([F.oI], X.prototype, "ShowChat", null);
(0, n.Cg)([F.oI], X.prototype, "SetChatHidden", null);
(0, n.Cg)([F.oI], X.prototype, "ShowBroadcast", null);
(0, n.Cg)([F.oI], X.prototype, "HideBroadcast", null);
(0, n.Cg)([F.oI], X.prototype, "ToggleVerticalBroadcastChat", null);
(0, n.Cg)([F.oI], X.prototype, "ToggleTheaterModeBroadcastChat", null);
(0, n.Cg)([F.oI], X.prototype, "SetVerticalBroadcastChat", null);
(0, n.Cg)([F.oI], X.prototype, "SetLocalBroadcastId", null);
(0, n.Cg)([F.oI], X.prototype, "SetMainContentRef", null);
X = (0, n.Cg)([S.PA], X);
let $ = class extends d.Component {
	SpeakerLabel(e) {
		if (e) {
			this.props.onNameWidthChanged(e.clientWidth);
		}
	}
	render() {
		let e = this.props.chatView.chat;
		let t = c.xm.SettingsStore.FriendsSettings.nChatFontSize;
		let r = "speakerLabelWidthContainer";
		if (t == j.ki.k_EChatFontSizeSmall) {
			r += " smallChatFont";
		} else if (t == j.ki.k_EChatFontSizeLarge) {
			r += " largeChatFont";
		}
		if (e.chat_partner.is_ready && e.self.is_ready) {
			return d.createElement(
				"div",
				{
					className: r,
					ref: this.SpeakerLabel,
				},
				d.createElement(
					"div",
					{
						className: "nameWidthLabel",
					},
					e.self.display_name + ":",
				),
				d.createElement(
					"div",
					{
						className: "nameWidthLabel",
					},
					e.chat_partner.display_name + ":",
				),
			);
		} else {
			return null;
		}
	}
};
(0, n.Cg)([F.oI], $.prototype, "SpeakerLabel", null);
$ = (0, n.Cg)([S.PA], $);
const ee = d.forwardRef(function (
	{
		steamID: e,
		localSteamID: t,
		watchLocation: r,
		bWebRTC: n,
		style: i,
		onRequestClose: a,
		actions: s,
		onTheaterMode: o,
	},
	l,
) {
	const c = t || e;
	return d.createElement(
		"div",
		{
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				...i,
			},
		},
		d.createElement(
			"div",
			{
				className: "BroadcastSection",
			},
			d.createElement(K, {
				key: c,
				steamIDBroadcast: c,
				watchLocation: r,
				bWebRTC: n,
				onRequestClose: a,
				actions: s,
				onTheaterMode: o,
				onOpenLinkInNewWindow: y.EP,
			}),
			d.createElement("div", {
				className: "videoContainerSizer",
			}),
		),
		d.createElement(te, {
			steamID: e,
		}),
	);
});
let te = class extends d.Component {
	OnClick(e, t) {
		let r = (0, Q.Dn)(t, "friendbroadcast");
		(0, y.EP)(e, r);
		e.stopPropagation();
	}
	render() {
		let e = new W.b(this.props.steamID);
		let t = c.xm.FriendStore.GetPlayer(e.GetAccountID());
		let r = t.persona.GetCurrentGameIconURL();
		let n = t.persona.GetCurrentGameName();
		let i = t.persona.m_unGamePlayedAppID;
		if (n || r) {
			return d.createElement(
				"div",
				{
					className: "FriendChatBroadcastDetails",
				},
				d.createElement(
					"div",
					{
						className: "FriendChatBroadcastDetails_PlayingText",
					},
					(0, N.we)("#broadcastDetails_Playing"),
				),
				r &&
					d.createElement("img", {
						className: "FriendChatBroadcastDetails_Icon",
						src: r,
					}),
				d.createElement(
					"div",
					{
						className: "FriendChatBroadcastDetails_GameName",
						onClick: (e) => this.OnClick(e, i),
					},
					n,
				),
			);
		} else {
			return null;
		}
	}
};
(0, n.Cg)([F.oI], te.prototype, "OnClick", null);
te = (0, n.Cg)([S.PA], te);
var re = require("./98829.js");
var ne = require("./92009.js");
const ie = d.lazy(() => require.e(7653).then(require.bind(require, 31711)));
export let yA = class extends d.Component {
	m_refChatTabs;
	m_keyEventListener = "keydown";
	macUserAgentStrings = /(MacIntel|Macintosh|Mac OS X)/;
	linuxUserAgentStrings = /(Linux|X11)/;
	constructor(e) {
		super(e);
		if (
			navigator.userAgent.search(this.macUserAgentStrings) != -1 ||
			navigator.userAgent.search(this.linuxUserAgentStrings) != -1
		) {
			this.m_keyEventListener = "keyup";
		}
		if (this.props.popup) {
			this.props.popup.addEventListener(
				this.m_keyEventListener,
				this.OnHTMLKeyEvent,
			);
		}
	}
	componentWillUnmount() {
		if (this.props.popup) {
			this.props.popup.removeEventListener(
				this.m_keyEventListener,
				this.OnHTMLKeyEvent,
			);
		}
	}
	OnCopy(e) {
		let t = this.props.popup || window;
		if (!t) {
			return;
		}
		let r = t.getSelection();
		if (r.rangeCount == 0) {
			return;
		}
		let n = (0, v.JO)(r.getRangeAt(0));
		if (n !== undefined) {
			if (t.navigator.platform == "Win32") {
				n = n.replace(/\n/g, "\r\n");
			}
			e.clipboardData.setData("text", n);
			e.preventDefault();
		}
	}
	OnChatTabRef(e) {
		this.m_refChatTabs = e;
	}
	OnDragEnter(e) {
		(0, R.w)(
			e &&
				(e.type == "chattab" ||
					e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "html"),
			"Invalid data type passed to MultiChatDialog.OnDragEnter",
			e.type,
		);
		if (e.type == "chattab") {
			let t = this.props.tabs;
			let r = e;
			if (r.tabSet != t || t.tabCount > 1) {
				t.Focus();
				if (this.m_refChatTabs && this.m_refChatTabs.GetDragTab() != r.tab) {
					this.m_refChatTabs.SetDragTab(r.tab);
				}
			}
		}
		return true;
	}
	OnDragLeave() {
		if (this.m_refChatTabs) {
			this.m_refChatTabs.SetDragTab(undefined);
		}
	}
	OnDragOver(e) {
		if (this.m_refChatTabs) {
			this.m_refChatTabs.UpdateDragOffset(e);
		}
	}
	OnDrop(e, t) {
		(0, R.w)(
			e &&
				(e.type == "chattab" ||
					e.type == "friend" ||
					e.type == "chatroomgroup" ||
					e.type == "html"),
			"Invalid data type passed to MultiChatDialog.OnDrop",
			e.type,
		);
		if (e.type == "chattab") {
			let t = e;
			let r = -1;
			if (this.m_refChatTabs) {
				r = this.m_refChatTabs.state.iDragIndex;
			}
			m.ZM.DragDropManager.SetDropConsumed();
			if (t.tabSet != this.props.tabs) {
				t.tabSet.RemoveTab(t.tab);
				this.props.tabs.AddTab(t.tab);
				m.ZM.DragDropManager.EndDrag();
			}
			if (r != -1) {
				this.props.tabs.MoveTabToIndex(t.tab, r);
			}
			this.props.tabs.ActivateTab(t.tab);
			this.setState({
				tabDrag: undefined,
			});
		} else if (e.type == "friend") {
			m.ZM.DragDropManager.SetDropConsumed();
			e.friend.OpenChatDialog((0, m.CO)(t));
		} else if (e.type == "chatroomgroup") {
			m.ZM.DragDropManager.SetDropConsumed();
			let r = e;
			c.xm.UIStore.ShowAndOrActivateChatRoomGroup((0, m.CO)(t), r.group, true);
		} else if (e.type == "html" && e.mapData.has("text/plain")) {
			this.props.tabs.activeTab
				.GetChatView()
				.AddPendingText(e.mapData.get("text/plain"));
		}
	}
	OnHTMLKeyEvent(e) {
		if (i.TS.IN_CLIENT && e.ctrlKey && !e.altKey) {
			if ((!e.shiftKey && e.keyCode == 9) || e.keyCode == 34) {
				this.props.tabs.ActivateNextTab();
			} else if (e.keyCode == 9 || e.keyCode == 33) {
				this.props.tabs.ActivatePreviousTab();
			} else {
				if (e.key != "W" && e.key != "w") {
					return;
				}
				this.props.tabs.RemoveTab(this.props.tabs.activeTab);
			}
			e.preventDefault();
			e.stopPropagation();
			return;
		}
	}
	OnKeyDown(e) {
		let t = this.props.tabs.activeTab;
		if (!t) {
			return;
		}
		if (e.ctrlKey || e.altKey || e.metaKey || e.key.length > 1) {
			return;
		}
		let r = e.target;
		let n = r && r.tagName ? r.tagName.toLowerCase() : "";
		if (n != "input" && n != "select" && n != "textarea") {
			t.GetChatView().FocusTextInput();
		}
	}
	render() {
		let e = this.props.tabs.activeTab;
		const t = this.m_refChatTabs?.GetDragTab();
		if (t) {
			e = t;
		}
		let r = this.props.tabs.tabs.slice();
		if (t && r.indexOf(t) == -1) {
			r.push(t);
		}
		r.sort((e, t) => (e.GetUniqueID() < t.GetUniqueID() ? 1 : -1));
		let n = r.map((t) => {
			let r = null;
			let n = t instanceof s.$C && t;
			let i = t.IsBroadcast();
			r = n
				? d.createElement(O.vY, {
						groupView: n,
						isActive: t == e,
						popup: this.props.popup,
					})
				: i
					? d.createElement(ie, {
							broadcastView: t,
							isActive: t == e,
							popup: this.props.popup,
						})
					: d.createElement(X, {
							chatView: t.GetChatView(),
							isActive: t == e,
						});
			return d.createElement(
				E.tH,
				{
					key: t.GetUniqueID(),
				},
				d.createElement(
					d.Suspense,
					{
						fallback: null,
					},
					r,
				),
			);
		});
		return d.createElement(
			u.D,
			{
				className: "multiChatDialog",
				rgAcceptedTypes: ["chattab", "friend", "chatroomgroup", "text/plain"],
				fnDragEnter: this.OnDragEnter,
				fnDragOver: this.OnDragOver,
				fnDragLeave: this.OnDragLeave,
				fnDrop: this.OnDrop,
				onKeyDown: this.OnKeyDown,
				onCopy: this.OnCopy,
			},
			d.createElement(P.dH, {
				tabSet: this.props.tabs,
				popup: this.props.popup,
				activeTab: e,
				ref: this.OnChatTabRef,
				ResponsiveWindowState: this.props.ResponsiveWindowState,
				showOpenFriendsList: this.props.showOpenFriendsList,
			}),
			d.createElement(
				G.Z,
				{
					className: "chatDialogs",
					onMoveUp: () => this.m_refChatTabs.FocusActiveTab(),
				},
				n.length == 0 &&
					d.createElement(
						"div",
						{
							className: "emptyChatDialogs",
						},
						(0, N.we)("#Chat_EmptyDialogsWindowMsg"),
					),
				n,
			),
		);
	}
};
(0, n.Cg)([F.oI], yA.prototype, "OnCopy", null);
(0, n.Cg)([F.oI], yA.prototype, "OnChatTabRef", null);
(0, n.Cg)([F.oI], yA.prototype, "OnDragEnter", null);
(0, n.Cg)([F.oI], yA.prototype, "OnDragLeave", null);
(0, n.Cg)([F.oI], yA.prototype, "OnDragOver", null);
(0, n.Cg)([F.oI], yA.prototype, "OnDrop", null);
(0, n.Cg)([F.oI], yA.prototype, "OnHTMLKeyEvent", null);
(0, n.Cg)([F.oI], yA.prototype, "OnKeyDown", null);
yA = (0, n.Cg)([S.PA], yA);
export let ft = class extends d.Component {
	m_refChatTabs;
	constructor(e) {
		super(e);
	}
	OnChatTabRef(e) {
		this.m_refChatTabs = e;
	}
	render() {
		let e = this.props.tabs.activeTab;
		const t = this.m_refChatTabs?.GetDragTab();
		if (t) {
			e = t;
		}
		let r = this.props.tabs.tabs.slice();
		if (t && r.indexOf(t) == -1) {
			r.push(t);
		}
		r.sort((e, t) => (e.GetUniqueID() < t.GetUniqueID() ? 1 : -1));
		let n = r.map((t) => {
			let r = null;
			let n = t instanceof s.$C && t;
			let i = t.IsBroadcast();
			r = n
				? d.createElement(O.vY, {
						groupView: n,
						isActive: t == e,
						popup: this.props.popup,
						bSteamDeck: true,
					})
				: i
					? d.createElement(ie, {
							broadcastView: t,
							isActive: t == e,
							popup: this.props.popup,
						})
					: d.createElement(X, {
							chatView: t.GetChatView(),
							isActive: t == e,
						});
			return d.createElement(
				E.tH,
				{
					key: t.GetUniqueID(),
				},
				d.createElement(
					d.Suspense,
					{
						fallback: null,
					},
					r,
				),
			);
		});
		return d.createElement(
			G.Z,
			{
				className: "multiChatDialog GamepadMode",
			},
			e &&
				e.IsFriendChat() &&
				d.createElement(P.sU, {
					tab: e,
					active: true,
					selectTab: () => {},
				}),
			d.createElement(
				G.Z,
				{
					className: "chatDialogs",
				},
				n.length == 0 &&
					d.createElement(
						"div",
						{
							className: "emptyChatDialogs",
						},
						(0, N.we)("#Chat_EmptyDialogsWindowGamePadUIMsg"),
					),
				n,
			),
		);
	}
};
(0, n.Cg)([F.oI], ft.prototype, "OnChatTabRef", null);
ft = (0, n.Cg)([S.PA], ft);
export let QH = class extends d.Component {
	constructor(e) {
		super(e);
	}
	InitiateVoiceChat() {
		let e = this.props.chatView.chat.accountid_partner;
		c.xm.VoiceStore.InitiateFriendChat(e);
	}
	VoidOnClick() {}
	EndVoiceChat() {
		if (
			c.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() ==
			this.props.chatView.chat.accountid_partner
		) {
			c.xm.VoiceStore.OnUserEndVoiceChat();
		}
	}
	OnCloseClick() {
		if (
			c.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() ==
			this.props.chatView.chat.accountid_partner
		) {
			c.xm.VoiceStore.OnUserEndVoiceChat();
		} else {
			c.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(
				this.props.chatView.chat.accountid_partner,
			);
		}
	}
	RejectVoiceChatRequest() {
		c.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(
			this.props.chatView.chat.accountid_partner,
		);
	}
	OnSettingsClick(e) {
		if (c.xm.IsDesktopUIActive()) {
			SteamClient.URL.ExecuteSteamURL("steam://open/settings/voice");
		} else {
			(0, ne.T)(
				(0, m.CO)(e),
				e.currentTarget.ownerDocument.defaultView,
				"voice",
			);
		}
	}
	render() {
		if (this.props.bSteamDeck) {
			return this.renderSteamDeck();
		}
		let e;
		let t = c.xm.VoiceStore.BInitiatedOneOnOneChat(
			this.props.chatView.chat.accountid_partner,
		);
		let r = c.xm.CMInterface.steamid.GetAccountID();
		let n = this.props.chatView.chat.accountid_partner;
		let i = c.xm.FriendStore.GetPlayer(r);
		let a = c.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(n);
		let s = c.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(n);
		let o = this.props.chatView.chat.chat_partner;
		let l = c.xm.VoiceStore.BPartnerHasAcceptedOrInitiatedOneOnOneChat(n);
		let m =
			!a &&
			c.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(o.accountid);
		let u = false;
		let p = false;
		let g = false;
		if (c.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() == n) {
			u =
				c.xm.VoiceStore.HasBeenAttemptingOverTwoSeconds() ||
				c.xm.VoiceStore.IsAttemptingReconnect();
			p =
				!c.xm.VoiceStore.BIsAccountFullyConnectedToActiveVoiceChat(r) ||
				c.xm.VoiceStore.IsAttemptingReconnect();
			g = !c.xm.VoiceStore.BIsAccountFullyConnectedToActiveVoiceChat(n);
		}
		e =
			t || a
				? d.createElement(
						A.M,
						{
							key: r,
							classNames: "friend-anim",
							timeout: 320,
						},
						(e) =>
							d.createElement(re.bP, {
								divRef: e,
								friend: i,
								key: r,
								showVoiceLevel: true,
								context: {
									chat: this.props.chatView.chat,
								},
								listStatusIndicator: d.createElement("div", {
									className: "connectionSpinner",
								}),
							}),
					)
				: d.createElement(
						A.M,
						{
							key: r,
							classNames: "friend-anim",
							timeout: 320,
						},
						(e) =>
							d.createElement(
								"div",
								{
									ref: e,
									className: "friend emptyFriend",
									onClick: !a && this.InitiateVoiceChat,
								},
								d.createElement(
									"div",
									{
										className: "avatarHolder",
									},
									d.createElement("img", {
										className: "avatar",
										src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA",
										draggable: false,
									}),
								),
							),
					);
		let h;
		let C = [];
		if (t) {
			C.push(e);
		}
		if (l || m) {
			C.push(
				d.createElement(
					A.M,
					{
						key: n,
						classNames: "friend-anim",
						timeout: 320,
					},
					(e) =>
						d.createElement(re.bP, {
							friend: o,
							key: n,
							showVoiceLevel: true,
							context: {
								chat: this.props.chatView.chat,
							},
							listStatusIndicator: d.createElement("div", {
								className: "connectionSpinner",
							}),
						}),
				),
			);
		} else {
			C.push(
				d.createElement(
					A.M,
					{
						key: n,
						classNames: "friend-anim",
						timeout: 320,
					},
					(e) =>
						d.createElement(
							"div",
							{
								className: "friend emptyFriend",
								onClick: a ? this.VoidOnClick : this.InitiateVoiceChat,
							},
							d.createElement(
								"div",
								{
									className: "avatarHolder ",
								},
								d.createElement("img", {
									className: "avatar",
									src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA",
									draggable: false,
								}),
							),
						),
				),
			);
		}
		if (!t) {
			C.push(e);
		}
		h =
			a && l
				? d.createElement(
						w.fu,
						{
							className: "inviteButton inviteButtonJoinVoice",
							onClick: this.EndVoiceChat,
							onOKActionDescription: (0, N.we)("#Voice_StopTalking"),
						},
						(0, N.we)("#Voice_StopTalking"),
					)
				: a && !l
					? d.createElement(
							w.fu,
							{
								className: "inviteButton inviteButtonJoinVoice",
								onClick: this.EndVoiceChat,
								onOKActionDescription: (0, N.we)("#Voice_EndVoice"),
							},
							(0, N.we)("#Voice_EndVoice"),
						)
					: d.createElement(
							w.fu,
							{
								className: "inviteButton inviteButtonJoinVoice",
								onClick: this.InitiateVoiceChat,
								onOKActionDescription: (0, N.we)("#Voice_StartTalking"),
							},
							(0, N.we)("#Voice_StartTalking"),
						);
		let _ = "";
		let f = "OneOnOneVoiceRoomControls";
		let b = false;
		if (a && !l) {
			_ = (0, N.we)("#Voice_WaitingForFriendToJoin", o.display_name);
			f += " WaitingForPartner";
		} else if (l && !a) {
			if (s) {
				_ = (0, N.we)("#Voice_ChannelRejoinAvailable", o.display_name);
			} else {
				_ = (0, N.we)("#Voice_ChannelAvailable", o.display_name);
				f += " WaitingForYouFirstTime";
			}
			f += " WaitingForYou";
		} else {
			_ = p
				? u
					? d.createElement(
							"a",
							{
								title: (0, N.we)("#VoiceChatConnectingHelp"),
								className: "connectionStatus",
								target: "_blank",
								href: "https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114",
							},
							(0, N.we)("#VoiceChatConnecting"),
						)
					: ""
				: !p && g
					? d.createElement(
							"a",
							{
								title: (0, N.we)("#VoiceChatConnectingHelp"),
								className: "connectionStatus",
								target: "_blank",
								href: "https://support.steampowered.com/kb_article.php?ref=2598-RTZB-6114",
							},
							(0, N.we)("#VoiceChatParterConnecting", o.display_name),
						)
					: (0, N.we)("#Voice_ChannelActive", o.display_name);
			f += " OneOnOneVoiceActive";
			b = true;
		}
		let y = d.createElement(
			"div",
			{
				className: "OneOnOneVoiceStatusLabel",
			},
			_,
		);
		let S = a ? (0, N.we)("#Voice_EndVoice") : (0, N.we)("#Voice_Decline");
		return d.createElement(
			G.Z,
			{
				className: f,
				"flow-children": "row",
				focusable: false,
			},
			d.createElement(
				"div",
				{
					className: "VoiceToggleIconCtn friendSettingsButton no-drag",
					onClick: this.OnSettingsClick,
					title: (0, N.we)("#Tooltip_VoiceSettings"),
				},
				d.createElement(T.wB_, null),
			),
			d.createElement(
				"div",
				{
					className: "OneOnOneVoiceMembers",
				},
				h,
				!b &&
					!a &&
					d.createElement(
						w.fu,
						{
							className: "inviteButton inviteButtonDeclineVoice",
							onClick: this.OnCloseClick,
							onOKActionDescription: S,
						},
						S,
					),
				d.createElement(
					G.Z,
					{
						fnCanTakeFocus: () => false,
						style: {
							display: "flex",
						},
					},
					C,
				),
				y,
			),
			!b &&
				d.createElement(
					G.Z,
					{
						className: "OneOnOneVoiceClose",
						focusable: true,
						onActivate: this.OnCloseClick,
						onOKActionDescription: S,
						title: S,
					},
					d.createElement(T.sED, null),
				),
		);
	}
	renderSteamDeck() {
		let e = this.props.chatView.chat.accountid_partner;
		let t = c.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(e);
		let r = c.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(e);
		let n = c.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(e);
		let i = this.props.chatView.chat.BIsVoiceAllowed();
		let a = "oneOnOneVoiceChatButton";
		let s = null;
		let o = {
			onSecondaryButton: null,
			onSecondaryActionDescription: null,
		};
		if (t && n) {
			s = d.createElement(T.ETd, null);
			o.onActivate = this.EndVoiceChat;
			o.onOKActionDescription = (0, N.we)("#Voice_StopTalking");
		} else if (t && !n) {
			s = d.createElement(T.ETd, null);
			o.onActivate = this.EndVoiceChat;
			o.onOKActionDescription = (0, N.we)("#Voice_EndVoice");
		} else if (n && !t && r) {
			s = d.createElement(T.fpT, null);
			o.onActivate = this.InitiateVoiceChat;
			o.onOKActionDescription = (0, N.we)("#Voice_StartTalking");
			o.onSecondaryButton = this.RejectVoiceChatRequest;
			o.onSecondaryActionDescription = (0, N.we)("#Voice_DeclineVoiceChat");
		} else if (n) {
			s = d.createElement(
				"div",
				{
					className: "WaitingForYouFirstTime",
				},
				d.createElement(T.BeN, null),
				d.createElement(
					"div",
					{
						className: "Sonar",
					},
					d.createElement("div", {
						className: "SonarCircle",
					}),
				),
			);
			o.onActivate = this.InitiateVoiceChat;
			o.onOKActionDescription = (0, N.we)("#Voice_StartTalking");
			o.onSecondaryButton = this.RejectVoiceChatRequest;
			o.onSecondaryActionDescription = (0, N.we)("#Voice_DeclineVoiceChat");
		} else {
			if (!i) {
				return null;
			}
			a += " NotInVoiceChat";
			s = d.createElement(T.mrd, null);
			o.onActivate = this.InitiateVoiceChat;
			o.onOKActionDescription = (0, N.we)("#Voice_StartChat");
		}
		return d.createElement(
			G.Z,
			{
				className: a,
				focusable: true,
				...o,
			},
			s,
		);
	}
};
export function nn(e, t, r) {
	let n;
	let i = false;
	let l = true;
	if (e.invitedto instanceof o.$c) {
		n = 300;
	} else if (e.invitedto instanceof s.a$) {
		n = 340;
		let t = e.invitedto;
		if (!t.BCanInvite() && !t.BHasMember(e.invitee.accountid)) {
			l = false;
		}
	} else if (e.invitedto instanceof a.d) {
		i = true;
		n = 340;
		let t = e.invitedto.GetGroup();
		if (!t.BCanInvite() && !t.BHasMember(e.invitee.accountid)) {
			l = false;
		}
	}
	if (l) {
		(0, M.HT)(
			d.createElement(ce, {
				...e,
			}),
			r,
			"InviteDialog",
			{
				strTitle: i
					? (0, N.we)("#Chat_Actions_InviteFriend_VoiceChat")
					: (0, N.we)("#Chat_Actions_DropGroupInvite_Title"),
				popupWidth: 650,
				popupHeight: n,
			},
			(0, m.h8)(r),
		);
	} else {
		(0, b.Ic)(
			r,
			(0, N.we)("#Chat_Actions_DropGroupInvite_Denied"),
			(0, N.we)("#Chat_Actions_DropGroupInvite_Denied_Description"),
		);
	}
}
(0, n.Cg)([F.oI], QH.prototype, "InitiateVoiceChat", null);
(0, n.Cg)([F.oI], QH.prototype, "VoidOnClick", null);
(0, n.Cg)([F.oI], QH.prototype, "EndVoiceChat", null);
(0, n.Cg)([F.oI], QH.prototype, "OnCloseClick", null);
(0, n.Cg)([F.oI], QH.prototype, "RejectVoiceChatRequest", null);
(0, n.Cg)([F.oI], QH.prototype, "OnSettingsClick", null);
QH = (0, n.Cg)([S.PA], QH);
let ce = class extends d.Component {
	constructor(e) {
		super(e);
	}
	invitee = this.props.invitee;
	invitedToPlayer;
	invitedToGroup;
	invitedToChatRoom;
	formRef = d.createRef();
	AddMoreFriends(e) {
		let t = [];
		let r = e.currentTarget.ownerDocument.defaultView;
		t.push(this.invitee.accountid);
		if (this.props.invitedto instanceof o.$c) {
			(0, f.UA)((0, m.CO)(e), r, this.props.chatview, true, t);
		} else if (this.props.invitedto instanceof s.a$) {
			(0, _.jv)((0, m.CO)(e), r, this.props.invitedto, undefined, true, t);
		} else if (this.props.invitedto instanceof a.d) {
			(0, _.E5)(
				(0, m.CO)(e),
				r,
				this.props.invitedto.GetGroup(),
				this.props.invitedto,
				t,
			);
		}
		this.props.closeModal();
	}
	Cancel() {
		this.props.closeModal();
	}
	OnInviteClicked(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		if (this.props.invitedto instanceof o.$c) {
			this.invitedToPlayer = this.props.invitedto;
			let e = [];
			e.push(this.invitedToPlayer.persona.m_steamid.ConvertTo64BitString());
			e.push(this.invitee.persona.m_steamid.ConvertTo64BitString());
			(0, f.eJ)(t, this.props.chatview, e);
		} else if (this.props.invitedto instanceof s.a$) {
			this.invitedToGroup = this.props.invitedto;
			this.invitedToGroup.InviteFriend(this.invitee.accountid);
		} else if (this.props.invitedto instanceof a.d) {
			[].push(this.invitee.accountid);
			this.invitedToChatRoom = this.props.invitedto;
			this.invitedToChatRoom
				.GetGroup()
				.InviteFriend(this.invitee.accountid, this.invitedToChatRoom);
		}
		this.props.closeModal();
	}
	render() {
		let e;
		let t;
		let r;
		let n = this.props.invitee;
		let i = c.xm.FriendStore.self;
		let l = false;
		if (this.props.invitedto instanceof o.$c) {
			e = this.props.invitedto;
		} else if (this.props.invitedto instanceof s.a$) {
			t = this.props.invitedto;
		} else if (this.props.invitedto instanceof a.d) {
			r = this.props.invitedto;
		}
		let m;
		let u;
		let A = "#Chat_Actions_DropGroupInvite_Confirm";
		let p = false;
		if (t) {
			if (t.BIsUserGroupMember(n)) {
				A = "#Chat_Actions_DropGroupInvite_Member_Confirm";
			}
			l =
				!!t.BIsClanChatRoom() &&
				c.xm.FriendStore.ClanStore.GetClan(t.GetClanID()).BIsOGG();
			m = t.name;
			u = d.createElement(C.I, {
				group: t,
				name: t.name,
			});
			p = t.BIsUserGroupMember(n);
		} else if (e) {
			A = "#Chat_Actions_DropGroupInvite_1v2_Confirm";
			m = e.display_name;
			u = d.createElement(
				"div",
				{
					className: "displayRow",
				},
				d.createElement(
					"div",
					{
						className: "dropGroupInviteDialog_Friend",
					},
					d.createElement("img", {
						src: i.persona.avatar_url_medium,
					}),
				),
				d.createElement(
					"div",
					{
						className: "dropGroupInviteDialog_Friend",
					},
					d.createElement("img", {
						src: e.persona.avatar_url_medium,
					}),
				),
			);
		} else if (r) {
			A = "#Chat_Actions_DropVoiceInvite_Confirm";
			m = r.name;
			u = d.createElement(
				"div",
				{
					className: "displayRow",
				},
				d.createElement(T.mrd, null),
			);
		}
		return d.createElement(
			M.x_,
			{
				onEscKeypress: this.Cancel,
			},
			d.createElement(
				I.U9,
				{
					classNameContent: "GenericConfirmDialog",
					onSubmit: this.OnInviteClicked,
					bCenterVertically: true,
				},
				d.createElement(
					I.Y9,
					null,
					r
						? (0, N.we)("#Chat_Actions_InviteFriend_VoiceChat")
						: (0, N.we)("#Chat_Actions_DropGroupInvite_Title"),
				),
				d.createElement(
					I.nB,
					null,
					d.createElement(
						"div",
						{
							className:
								"dropGroupInviteDialog displayColumn" +
								(t || r ? " groupInviteHeight" : ""),
						},
						d.createElement(
							"span",
							{
								className: "dropGroupInviteDialog_Desc",
							},
							(0, N.PP)(
								A,
								d.createElement(
									"span",
									{
										className: "highlight",
									},
									n.display_name,
								),
								d.createElement(
									"span",
									{
										className: "highlight",
									},
									m,
								),
								e &&
									d.createElement(
										"span",
										{
											className: "highlight",
										},
										(0, N.we)("#Chat_You"),
									),
							),
						),
						d.createElement(
							"div",
							{
								className:
									"dropGroupInviteDialog_Graphic" + (l ? " isOGGGroup" : ""),
							},
							d.createElement(
								"div",
								{
									className: "dropGroupInviteDialog_Friend",
								},
								d.createElement("img", {
									src: n.persona.avatar_url_medium,
								}),
							),
							d.createElement(
								"div",
								{
									className: "movingArrow",
								},
								d.createElement(T.i3G, {
									angle: 90,
								}),
							),
							u,
							d.createElement(
								"div",
								{
									className: "addMoreFriendsButton",
									onClick: this.AddMoreFriends,
								},
								d.createElement(
									"div",
									null,
									(0, N.we)("#Chat_Actions_AddMoreFriends"),
								),
								d.createElement("div", {
									className: "ExpandArrow",
								}),
							),
						),
					),
				),
				d.createElement(
					I.wi,
					null,
					d.createElement(
						I.dR,
						null,
						d.createElement(
							I.jn,
							{
								autoFocus: true,
								onClick: this.OnInviteClicked,
							},
							p ? (0, N.we)("#Chat_SendLink") : (0, N.we)("#Chat_Invite"),
							" ",
						),
						d.createElement(
							I.$n,
							{
								onClick: this.Cancel,
							},
							(0, N.we)("#Button_Cancel"),
						),
					),
				),
			),
		);
	}
};
(0, n.Cg)([F.oI], ce.prototype, "AddMoreFriends", null);
(0, n.Cg)([F.oI], ce.prototype, "Cancel", null);
(0, n.Cg)([F.oI], ce.prototype, "OnInviteClicked", null);
ce = (0, n.Cg)([S.PA], ce);
export let nK = class extends d.Component {
	AddFriendClick(e) {
		this.ContinueCreateChat((0, m.CO)(e), (0, D.uX)(e));
	}
	ContinueCreateChat(e, t) {
		(0, f.UA)(e, t, this.props.chatView, true);
	}
	render() {
		this.props.chatView.chat.chat_partner;
		let e = "inviteAnotherFriendButton";
		if (this.props.additionalClasses) {
			e += " " + this.props.additionalClasses;
		}
		return d.createElement(
			G.Z,
			{
				title: (0, N.we)("#Chat_AddFriend_Hint"),
				className: e,
				onActivate: this.AddFriendClick,
				onOKActionDescription: (0, N.we)(
					"#Chat_CreateChatRoom_InviteFriendsToChat",
				),
			},
			d.createElement(T.MxO, null),
		);
	}
};
(0, n.Cg)([F.oI], nK.prototype, "AddFriendClick", null);
nK = (0, n.Cg)([S.PA], nK);
export const Ko = ({ onClick: e, edge: t }) =>
	d.createElement(
		"div",
		{
			className: (0, k.A)("BroadcastChatExpander", t),
			onClick: e,
			title: (0, N.we)("#Broadcast_View_ShowChat"),
		},
		d.createElement(T.K7s, {
			showChat: true,
		}),
	);
export let n$ = class extends d.Component {
	OnTextChannelCloseClick(e) {
		this.props.groupView.ClosePopoverChat();
	}
	OnChatHistoryRef(e) {
		if (e) {
			e.Focus();
		}
	}
	render() {
		let e = this.props.groupView.GetPopoverChatView();
		if (e) {
			return d.createElement(
				A.M,
				{
					key: "quickChat",
					classNames: "chatWindow-anim",
					timeout: 320,
				},
				(t) =>
					d.createElement(
						"div",
						{
							ref: t,
							className: "VoiceRoomChatHistory",
						},
						d.createElement(
							"div",
							{
								className: "VoiceRoomChatWindow",
							},
							d.createElement(
								"div",
								{
									className: "VoiceRoomChatTitle",
								},
								d.createElement(
									"div",
									{
										className: "VoiceRoomTitleLabels",
									},
									d.createElement(
										"div",
										{
											className: "VoiceChatTextChannelName",
										},
										(0, N.we)("#Chat_Scratch_Pad"),
									),
								),
								d.createElement(
									"div",
									{
										className: "MinimizeTextChat",
										onClick: this.OnTextChannelCloseClick,
									},
									d.createElement(T.sED, null),
								),
							),
							d.createElement(
								"div",
								{
									className: "VoiceChatTextChannelDesc",
								},
								(0, N.we)("#Chat_Scratch_Pad_Desc"),
							),
							d.createElement(H.D, {
								chatView: e,
								isActive: true,
								ref: this.OnChatHistoryRef,
							}),
						),
					),
			);
		} else {
			return null;
		}
	}
};
(0, n.Cg)([F.oI], n$.prototype, "OnTextChannelCloseClick", null);
(0, n.Cg)([F.oI], n$.prototype, "OnChatHistoryRef", null);
n$ = (0, n.Cg)([S.PA], n$);
export let SU = class extends d.Component {
	constructor(e) {
		super(e);
	}
	OnBlock() {
		c.xm.FriendStore.BlockPlayer(this.props.friend, false);
		c.xm.UIStore.CloseTabByID(this.props.chatView.GetUniqueID());
	}
	OnAllow() {
		c.xm.FriendStore.SetApprovedNonFriendMessages(this.props.friend.accountid);
	}
	render() {
		return d.createElement(
			"div",
			{
				className: "NotAFriendMessage",
			},
			d.createElement(
				"div",
				{
					className: "NotAFriendBody",
				},
				d.createElement(
					"div",
					{
						className: "Exclamation",
					},
					d.createElement(T.eTF, null),
				),
				d.createElement(
					"div",
					{
						className: "Explanation",
					},
					d.createElement(
						"div",
						{
							className: "ExplanationHeader",
						},
						(0, N.we)("#DirectMessageFromNonFriend"),
					),
					d.createElement(
						"div",
						{
							className: "ExplanationBody",
						},
						(0, N.we)("#DirectMessageFromNonFriendNote"),
					),
					d.createElement(
						y.uU,
						{
							href: "https://support.steampowered.com/kb_article.php?ref=1266-OAFV-8478",
							className: "ExplanationMoreInfo",
						},
						(0, N.we)("#Generic_More_Info"),
					),
				),
				d.createElement(
					"div",
					{
						className: "Buttons",
					},
					d.createElement(
						"button",
						{
							className: "NotAFriendActionButton",
							onClick: this.OnBlock,
						},
						(0, N.we)("#NonFriendAction_Block"),
					),
					d.createElement(
						"button",
						{
							className: "NotAFriendActionButton",
							onClick: this.OnAllow,
						},
						(0, N.we)("#NonFriendAction_Allow"),
					),
				),
			),
		);
	}
};
(0, n.Cg)([F.oI], SU.prototype, "OnBlock", null);
(0, n.Cg)([F.oI], SU.prototype, "OnAllow", null);
SU = (0, n.Cg)([S.PA], SU);
export let J3 = class extends d.Component {
	render() {
		const { chatView: e, friend: t, ...r } = this.props;
		const n = e.chat instanceof a.d;
		return d.createElement(h, {
			message: n
				? (0, N.we)("#Chat_DropToInviteGroup")
				: (0, N.we)("#Chat_DropToInvite"),
			name: t.display_name,
			renderImage: () =>
				d.createElement(B.i8, {
					size: "Large",
					persona: t.persona,
				}),
			...r,
		});
	}
};
J3 = (0, n.Cg)([S.PA], J3);
export let C1 = class extends d.Component {
	render() {
		const { chatView: e, group: t, clan: r, ...n } = this.props;
		if (!t && !r) {
			(0, R.w)(
				false,
				"Either a group or clan must be passed to DropGroupToInviteFriendMessage.",
			);
			return null;
		}
		const i = (t || r).name;
		return d.createElement(h, {
			message: (0, N.we)("#Chat_DropGroupToInviteFriend"),
			name: i,
			renderImage: () =>
				r
					? d.createElement(C._O, {
							clan: r,
							size: "large",
						})
					: d.createElement(C.I, {
							group: t,
							large: true,
						}),
			...n,
		});
	}
};
C1 = (0, n.Cg)([S.PA], C1);
export let ln = class extends d.Component {
	render() {
		let e = false;
		if (!(this.props.chatView.chat instanceof l.s)) {
			return null;
		}
		let t = this.props.chatView.chat;
		if (t.is_friend_typing) {
			e = true;
		}
		return d.createElement(
			"div",
			{
				className:
					"FriendChatTypingNotification" + (e ? " FriendIsTyping" : ""),
			},
			(0, N.we)("#Friend_Chat_Typing", t.chat_partner.display_name),
		);
	}
};
ln = (0, n.Cg)([S.PA], ln);
