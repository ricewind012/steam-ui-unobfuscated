var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./41230.js");
var l = require(/*webcrack:missing*/ "./83599.js");
var c = require("./7558.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require("./95773.js");
var d = require("./50551.js");
var A = require("./92564.js");
var p = require(/*webcrack:missing*/ "./50376.js");
var g = require(/*webcrack:missing*/ "./44846.js");
var h = require(/*webcrack:missing*/ "./46108.js");
var C = require("./80663.js");
var _ = require("./3756.js");
var f = require("./89459.js");
var b = require(/*webcrack:missing*/ "./54644.js");
var y = require("./51095.js");
var S = require(/*webcrack:missing*/ "./69164.js");
var w = require("./59704.js");
var B = require("./44234.js");
var v = require("./50979.js");
var I = require("./96127.js");
var E = require("./98829.js");
var M = require("./66408.js");
var T = require("./34616.js");
var R = require(/*webcrack:missing*/ "./90765.js");
var k = require("./2561.js");
var _D = k;
var N = require("./17231.js");
var F = require(/*webcrack:missing*/ "./78325.js");
var G = require(/*webcrack:missing*/ "./90095.js");
var O = require(/*webcrack:missing*/ "./92251.js");
var P = require("./31760.js");
var L = require(/*webcrack:missing*/ "./31084.js");
var z = require("./44164.js");
var x = require("./56840.js");
var U = require("./89495.js");
var W = require("./92757.js");
const V = (0, o.PA)((e) => {
	const { msg: t, chat: r } = e;
	const { showPicker: n } = Y(r, t);
	if (t.reactions.length === 0) {
		return null;
	}
	return i.createElement(
		"div",
		{
			className: U.MessageReactions,
		},
		t.reactions.map((e) =>
			i.createElement(H, {
				key: e.strReaction,
				chat: r,
				msg: t,
				reaction: e,
				onClick: () =>
					((e) =>
						r.UpdateMessageReaction(
							t,
							e.eReactionType,
							e.strReaction,
							!e.bUserReacted,
						))(e),
			}),
		),
		i.createElement(X, {
			className: U.OpenPickerButton,
			onClick: n,
		}),
	);
});
const H = (0, o.PA)((e) => {
	const {
		onClick: t,
		reaction: { bUserReacted: r, cReactors: n },
		chat: a,
		msg: s,
	} = e;
	const [o, l] = (function (e = 400) {
		const [t, r] = (0, i.useState)(false);
		const n = (0, i.useRef)();
		(0, i.useEffect)(() => () => clearTimeout(n.current), []);
		return [
			t,
			(i) => {
				if (i && !t && n.current === undefined) {
					n.current = window.setTimeout(() => {
						n.current = undefined;
						r(true);
					}, e);
				} else if (!i) {
					window.clearTimeout(n.current);
					n.current = undefined;
					if (t) {
						r(i);
					}
				}
			},
		];
	})();
	const c = (0, i.useRef)();
	const m = {
		borderColor: r ? "#8D8E94" : "#1B1C20",
	};
	return i.createElement(
		"div",
		{
			onClick: t,
			style: m,
			className: U.MessageReaction,
			onMouseEnter: () => l(true),
			onMouseLeave: () => l(false),
			ref: c,
		},
		i.createElement(j, {
			reaction: e.reaction,
		}),
		i.createElement(
			"div",
			{
				className: U.ReactionCount,
			},
			n,
		),
		o &&
			i.createElement(Z, {
				target: c.current,
				reaction: e.reaction,
				chat: a,
				msg: s,
			}),
	);
});
function j(e) {
	switch (e.reaction.eReactionType) {
		case 1:
			return i.createElement(q, {
				...e,
			});
		case 2:
			return i.createElement(Q, {
				...e,
			});
		default:
			console.error(
				`Unknown message reaction type: ${e.reaction.eReactionType}`,
			);
			return null;
	}
}
function q(e) {
	const { reaction: t, large: r } = e;
	return i.createElement("img", {
		className: (0, R.A)(U.EmoticonReaction, r && U.Large),
		src: P.p.GetEmoticonURL(t.strReaction, e.large),
	});
}
function Q(e) {
	const {
		reaction: { strReaction: t },
		large: r,
	} = e;
	const n = (0, W.G)(B.TS.COMMUNITY_CDN_URL, t);
	return i.createElement("img", {
		className: (0, R.A)(U.StickerReaction, r && U.Large),
		src: n,
	});
}
const Z = (0, o.PA)((e) => {
	const { target: t, reaction: r, chat: n, msg: a } = e;
	const { strReaction: s, cReactors: o } = r;
	const l = n.GetMessageReactionReactors(a, r, 3);
	let c = (function (e, t, r) {
		const n = u.xm.FriendStore.self;
		if (t.length === 0) {
			if (r === 1) {
				return (0, h.PP)("#MessageReaction_DescriptionCountOnly", e);
			} else {
				return (0, h.PP)("#MessageReaction_DescriptionCountOnly_Plural", r, e);
			}
		}
		const a = t.filter((e) => e !== n.accountid);
		const s = a.length != t.length;
		if (t.length < r) {
			if (t.length >= 2) {
				return (0, h.PP)(
					"#MessageReaction_DescriptionMany" + (s ? "You" : ""),
					a.slice(0, s ? 1 : 2).map((e) =>
						i.createElement(J, {
							key: e.toString(),
							accountid: e,
						}),
					),
					r - 2,
					e,
				);
			} else if (s) {
				return (0, h.PP)(
					"#MessageReaction_DescriptionYouAndCount" +
						(r - 1 == 1 ? "" : "_Plural"),
					r - 1,
					e,
				);
			} else if (r === 1) {
				return (0, h.PP)("#MessageReaction_DescriptionCountOnly", e);
			} else {
				return (0, h.PP)("#MessageReaction_DescriptionCountOnly_Plural", r, e);
			}
		} else {
			return (0, h.PP)(
				`#MessageReaction_Description${r}${s ? "You" : ""}`,
				...a.map((e) =>
					i.createElement(J, {
						key: e.toString(),
						accountid: e,
					}),
				),
				e,
			);
		}
	})(
		i.createElement(
			"span",
			{
				className: U.ReactionName,
			},
			s,
		),
		l,
		o,
	);
	return (0, F.createPortal)(
		i.createElement(
			O.g,
			{
				direction: "top",
				target: t,
				className: U.ReactionHover,
			},
			i.createElement(j, {
				reaction: r,
				large: true,
			}),
			i.createElement(
				"div",
				{
					className: U.HoverDescription,
				},
				c,
			),
		),
		t.ownerDocument.body,
	);
});
function Y(e, t) {
	const [r, n] = (0, i.useState)(null);
	return {
		bOpen: !!r,
		showPicker: (a) => {
			if (r) {
				return;
			}
			const s = {
				bOverlapHorizontal: true,
				strClassName: U.ManageAppFiltersPopupContextMenu,
			};
			const o = (0, L.lX)(
				i.createElement(K, {
					chat: e,
					msg: t,
					onRequestClose: () => o && o.Hide(),
				}),
				a,
				s,
			);
			o.SetOnHideCallback(() => n(null));
			n(o);
		},
	};
}
function K(e) {
	const { msg: t, chat: r, onRequestClose: n } = e;
	const a = (e, i) => {
		const a = e == 1 ? `:${i}:` : i;
		const s = t.reactions.find((e) => e.strReaction === a);
		const o = !s || !s.bUserReacted;
		r.UpdateMessageReaction(t, e, a, o);
		n();
	};
	return i.createElement(z.X6, {
		emoticonHoverStore: x.s,
		emoticonStore: u.xm.ChatStore.EmoticonStore,
		onEmoticonSelected: (e) => a(1, e),
		onStickerSelected: (e) => a(2, e),
		strFlairGroupID: "",
	});
}
function X(e) {
	const { className: t, ...r } = e;
	return i.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			className: (0, R.A)(t, U.AddReactionIcon),
			...r,
		},
		i.createElement("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
		}),
	);
}
function J(e) {
	const t = (0, G.q3)(
		() => u.xm.FriendStore.GetPlayer(e.accountid).display_name,
	);
	return i.createElement(
		"span",
		{
			className: U.ReactorName,
		},
		t,
	);
}
var $ = require("./78060.js");
var ee = require(/*webcrack:missing*/ "./88750.js");
var te = require(/*webcrack:missing*/ "./17385.js");
var re = require("./52912.js");
var ne = require(/*webcrack:missing*/ "./11131.js");
var ie = require(/*webcrack:missing*/ "./13099.js");
function ae(e) {
	const { reason: t } = e;
	let r;
	r =
		t == 2
			? (0, h.we)("#Friend_Chat_CommunityBanned")
			: (0, h.we)("#Friend_Chat_Blocked");
	return i.createElement(
		"div",
		{
			className: "msg",
		},
		i.createElement(
			"div",
			{
				className: "msgText MessageFromBlockedUser",
			},
			r,
		),
	);
}
let se = (0, o.PA)((e) =>
	i.createElement(
		E.Rg,
		{
			friend: e.player,
			context: e.context,
		},
		i.createElement("span", null, e.player.display_name),
	),
);
let oe = class extends i.Component {
	render() {
		let e = this.props.messages;
		let t = this.props.friendRenderContext;
		if (e.length == 0) {
			return null;
		}
		let r = [];
		let n = [];
		let a = true;
		for (let s of e) {
			if (n.indexOf(s.unServerMsgParamAccountID) != -1) {
				continue;
			}
			if (r.length > 0) {
				r.push(", ");
			}
			let e = u.xm.FriendStore.GetPlayer(s.unServerMsgParamAccountID);
			r.push(
				i.createElement(se, {
					context: t,
					player: e,
				}),
			);
			n.push(s.unServerMsgParamAccountID);
			if (!e.is_ready) {
				e.LoadIfNecessary();
				a = false;
			}
		}
		let s = u.xm.FriendStore.GetPlayer(e[0].unAccountID);
		if (!s.is_ready) {
			s.LoadIfNecessary();
			a = false;
		}
		let o = i.createElement(se, {
			context: t,
			player: s,
		});
		let l = "";
		if (r.length > 1) {
			let e = i.createElement(i.Fragment, null, ...r);
			l = (0, h.PP)("#ChatRoom_ServerMessage_Invited_Multiple", e, o);
		} else {
			l = (0, h.PP)("#ChatRoom_ServerMessage_Invited", r[0], o);
		}
		return i.createElement(
			M.xh,
			{
				style: "server",
			},
			i.createElement(
				"div",
				{
					className: "msg serverMsg",
				},
				i.createElement(
					"div",
					{
						className: "msgText",
					},
					a ? l : "\xA0",
				),
			),
		);
	}
};
oe = (0, n.Cg)([o.PA], oe);
let le = class extends i.Component {
	render() {
		let e = this.props.messages;
		let t = this.props.friendRenderContext;
		if (e.length == 0) {
			return null;
		}
		let r = [];
		let n = [];
		let a = true;
		for (let s of e) {
			if (n.indexOf(s.unServerMsgParamAccountID) != -1) {
				continue;
			}
			if (r.length > 0) {
				r.push((0, h.we)("#ChatRoom_ServerMessageMultiple_Separator"));
			}
			let e = u.xm.FriendStore.GetPlayer(s.unServerMsgParamAccountID);
			r.push(
				i.createElement(se, {
					context: t,
					player: e,
				}),
			);
			n.push(s.unServerMsgParamAccountID);
			if (!e.is_ready) {
				e.LoadIfNecessary();
				a = false;
			}
		}
		let s = "";
		if (r.length > 1) {
			let e = r.pop();
			if (r.length == 2) {
				r.pop();
			}
			let t = i.createElement(i.Fragment, null, ...r);
			s = (0, h.PP)(this.props.tokenPrefix + "_Multiple", t, e);
		} else {
			s = (0, h.PP)(this.props.tokenPrefix, r[0]);
		}
		return i.createElement(ce, null, a ? s : "\xA0");
	}
};
le = (0, n.Cg)([o.PA], le);
const ce = ({ children: e }) =>
	i.createElement(
		M.xh,
		{
			style: "server",
		},
		i.createElement(
			"div",
			{
				className: "msg serverMsg",
			},
			i.createElement(
				"div",
				{
					className: "msgText",
				},
				e,
			),
		),
	);
async function me(e, t, r) {
	if (r.length == 0) {
		return;
	}
	const n = r.length > 1;
	let i = r[0].unAccountID;
	let a = u.xm.FriendStore.GetPlayer(i).primary_display_name;
	let s = (0, h.we)(
		n ? "#Chat_Actions_DeleteChatMessages" : "#Chat_Actions_DeleteChatMessage",
	);
	let o = (0, h.we)(
		n
			? "#Chat_Actions_DeleteChatMessages_Confirm"
			: "#Chat_Actions_DeleteChatMessage_Confirm",
		a,
	);
	let l = (0, h.we)("#Chat_Actions_Delete");
	if (!(await (0, $.WQ)(e, s, o, l))) {
		return;
	}
	let c = await t.DeleteChatMessages(r);
	if (c == 1) {
		return;
	}
	let m =
		c == 15
			? "#Chat_Actions_DeleteChatMessage_FailAccess"
			: "#Chat_Actions_DeleteChatMessage_Fail";
	o = (0, h.we)(m, a);
	(0, $.Ic)(e, s, o);
}
function ue(e) {
	const { elMessage: t, msg: r, chatView: n, fnCloseContextMenu: a } = e;
	const s = r.unAccountID;
	let o;
	if (n.chat instanceof _.d) {
		o = n.chat;
	}
	const l = [];
	const c = (0, ie.qf)(t);
	const m = c.getSelection();
	const u = m && m.rangeCount > 0 && m.toString().length > 0;
	let d;
	d =
		document.queryCommandEnabled("copy") || u
			? () => {
					c.document.execCommand("copy");
				}
			: () => (0, M.pM)(t);
	l.push(
		i.createElement(
			ee.kt,
			{
				key: "copy",
				onSelected: d,
			},
			(0, h.we)("#ContextMenu_Copy"),
		),
	);
	l.push(
		i.createElement(
			ee.kt,
			{
				key: "select",
				onSelected: () => c.getSelection().selectAllChildren(t),
			},
			(0, h.we)("#Chat_Actions_Select_Message"),
		),
	);
	l.push(
		i.createElement(
			ee.Vs,
			{
				key: "react",
				label: (0, h.we)("#Chat_Actions_React"),
			},
			i.createElement(K, {
				chat: n.chat,
				msg: r,
				onRequestClose: () => a(),
			}),
		),
	);
	if (o && o.BCanDeleteMemberMessages(s)) {
		l.push(
			i.createElement(
				ee.kt,
				{
					key: "delete",
					onSelected: () => me(c, o, [r]),
				},
				(0, h.we)("#Chat_Actions_Delete"),
			),
		);
	}
	return i.createElement(ee.tz, null, l);
}
function de(e, t) {
	return i.useCallback(
		(r, n) => {
			const a = (0, L.lX)(
				i.createElement(ue, {
					elMessage: r.currentTarget,
					msg: e,
					chatView: t,
					fnCloseContextMenu: () => a?.Hide(),
				}),
				r,
				n,
			);
			return a;
		},
		[e, t],
	);
}
const Ae = (0, o.PA)((e) => {
	const {
		msg: t,
		speakerWidth: r,
		chatView: n,
		onUpdate: a,
		children: s,
		extraClassName: o,
	} = e;
	const l = (0, B.Qn)();
	const c = (0, i.useRef)(0);
	const m = c.current;
	const [d, A] = i.useState(false);
	const g = (0, i.useRef)();
	const C = i.useRef();
	const { showPicker: I } = Y(n.chat, t);
	const E = de(t, n);
	let T = (e) =>
		E(e, {
			bOverlapHorizontal: true,
			bOverlapVertical: false,
		});
	const k = n.chat;
	let N = t.strMessage;
	const F = e.hideTimeStamp || n.IsChatRoom();
	const G = !F && u.xm.FriendStore.GetPlayer(t.unAccountID);
	const O = (0, y.aQ)(N);
	let P;
	let L;
	if (t.eErrorSending != f.Bm.None) {
		switch (t.eErrorSending) {
			case f.Bm.NotFriends:
				L = "ChatMessageErrorSending";
				P = i.createElement(
					"div",
					{
						className: "ChatMessageErrorSendingAlert",
					},
					(0, h.we)("#Chat_ErrorSending_NotFriends"),
				);
				break;
			case f.Bm.RateLimitExceeded:
				L = "ChatMessageErrorSending";
				P = i.createElement(
					"div",
					{
						className: "ChatMessageErrorSendingAlert",
					},
					(0, h.we)("#Chat_ErrorSending_RateLimitExceeded"),
				);
				break;
			case f.Bm.NoChatPermissionInGroup:
				L = "ChatMessageErrorSendingPermissionDenied";
				P = i.createElement(
					"div",
					{
						className: "ChatMessageErrorPermissionDeniedAlert",
					},
					i.createElement(p.c_I, null),
					(0, h.we)("#Chat_ErrorPermissionDenied"),
				);
				break;
			case f.Bm.Generic:
			default:
				L = "ChatMessageErrorSending";
				P = i.createElement(
					"div",
					{
						className: "ChatMessageErrorSendingAlert",
					},
					(0, h.we)("#Chat_ErrorSending"),
				);
		}
	}
	const z = (0, R.A)(
		"msg",
		_D.MsgWithAddons,
		o,
		L,
		{
			isCurrentUser: k.self.accountid === t.unAccountID,
			HasTimeStamp: !F,
			EmojiOnly: y.tV(N),
		},
		d && "RevealSpoiler",
	);
	const x = {
		width: r ? `${r}px` : undefined,
	};
	const U = {
		chat: k,
		unAccountIDSender: t.unAccountID,
		rtTimestamp: t.rtTimestamp,
		key: t.UniqueKey(),
		onLoad: a,
		bUseLargeEmoticons: (0, y.aQ)(N),
		bAnimate: t.eAnimationState === f.oO.Animating,
		onAnimationStart: () => c.current++,
		onAnimationEnd: () => {
			if (m) {
				c.current--;
			}
			if (!c.current) {
				e.msg.OnAnimationEnd();
			}
		},
	};
	N = k.ChatStore.TextFilterStore.FilterText(t.unAccountID, N);
	const W = N.includes("[spoiler]");
	const H =
		s ||
		i.createElement(v.wr, {
			bbcode: N,
			context: U,
			parser: k.GetBBCodeParser(),
		});
	const j = (0, R.A)("msgText", {
		MsgNoUserContent: !t.HasUserContent(),
		EmoticonOnly: O,
	});
	let q;
	let Q = {
		onMenuButton: (e) => {
			T(e);
		},
		onMenuActionDescription: (0, h.we)("#Chat_MessageContextMenu"),
	};
	if (!l) {
		Q = {
			...Q,
			onOKButton: (e) => I(e),
			onOKActionDescription: (0, h.we)("#Chat_Actions_React"),
		};
	}
	if (e.chatView.chat instanceof _.d) {
		q = e.chatView.chat;
	}
	if (q && q.BCanDeleteMemberMessages(e.msg.unAccountID)) {
		Q.onSecondaryButton = (t) => {
			me((0, b.uX)(t), q, [e.msg]);
		};
		Q.onSecondaryActionDescription = (0, h.we)("#Chat_Actions_Delete");
	}
	return i.createElement(
		S.Z,
		{
			className: z,
			navRef: C,
			focusableIfNoChildren: true,
			onContextMenu: E,
			onSecondaryButton: W ? () => A(!d) : undefined,
			onSecondaryActionDescription: W
				? (0, h.we)(d ? "#Hide_Spoiler" : "#Reveal_Spoiler")
				: undefined,
			...Q,
		},
		!F &&
			i.createElement(
				Ce,
				{
					className: "FriendChatTimeStamp",
					friend: G,
					style: x,
				},
				i.createElement(w.EO, {
					rtime: t.rtTimestamp,
					bTimeOnly: true,
				}),
			),
		P,
		i.createElement(
			M.xh,
			null,
			i.createElement(
				"div",
				{
					className: j,
					ref: g,
				},
				H,
			),
		),
		i.createElement(V, {
			msg: t,
			chat: k,
		}),
		i.createElement(pe, {
			msg: t,
			chat: k,
			onShowContextMenu: T,
		}),
	);
});
const pe = (0, o.PA)((e) => {
	const { msg: t, chat: r } = e;
	const { bOpen: n, showPicker: a } = Y(r, t);
	const { bOpen: s, showContextMenu: o } = (function (e) {
		const [t, r] = (0, i.useState)(null);
		const n = (n) => {
			if (t) {
				return;
			}
			let i = e(n);
			i.SetOnHideCallback(() => r(null));
			r(i);
		};
		return {
			bOpen: !!t,
			showContextMenu: n,
		};
	})(e.onShowContextMenu);
	let l;
	let c = n || s;
	if (r instanceof _.d) {
		l = r;
	}
	let m = null;
	if (l && l.BCanDeleteMemberMessages(t.unAccountID)) {
		m = (t) => {
			me((0, b.uX)(t), l, [e.msg]);
		};
	}
	return i.createElement(
		"div",
		{
			className: (0, R.A)(_D.Addons, c && _D.Open),
		},
		i.createElement(X, {
			className: _D.Emoticon,
			onClick: a,
		}),
		m &&
			i.createElement(ge, {
				className: _D.Emoticon,
				onClick: m,
			}),
		i.createElement(he, {
			className: _D.Emoticon,
			onShowContextMenu: o,
		}),
	);
});
function ge(e) {
	const { className: t, onClick: r, ...n } = e;
	return i.createElement(
		"div",
		{
			className: t,
			onClick: r,
		},
		i.createElement(p.PRY, null),
	);
}
function he(e) {
	const { className: t, ...r } = e;
	return i.createElement(
		"div",
		{
			className: t,
			onClick: e.onShowContextMenu,
		},
		i.createElement(p.h28, null),
	);
}
let Ce = (0, o.PA)((e) => {
	const t = e.friend.persona;
	let r = false;
	if (t.m_broadcastAccountId) {
		r = true;
	}
	const n = (0, R.A)(
		e.className,
		(t.is_ingame ? "ingame" : t.is_online && "online") || "offline",
		{
			away: t.is_awayOrSnooze,
			watchingbroadcast: r,
		},
	);
	return i.createElement(
		"div",
		{
			className: n,
			style: e.style,
		},
		e.children,
	);
});
const _e = (e) => {
	const t = (0, ne.R7)();
	const r = (0, re._k)(t.ownerWindow);
	const n = !(0, te.u)(r, te.m);
	return i.createElement(fe, {
		bInOverlay: n,
		...e,
	});
};
let fe = class extends i.Component {
	GetChatRoomSpeakerClass(e) {
		let t = e.persona;
		if (t.is_ingame) {
			return _D.SpeakerName_InGame;
		} else if (t.m_broadcastAccountId) {
			return _D.SpeakerName_WatchingBroadcast;
		} else if (t.is_online) {
			return _D.SpeakerName_Online;
		} else {
			return _D.SpeakerName_Default;
		}
	}
	render() {
		let e;
		let t = this.props.friend;
		let r = "";
		let n = "";
		if (this.props.chatView.IsChatRoom()) {
			let n;
			let a = this.props.chatView.chat;
			if (a.GetMember(t.accountid)) {
				n = a.GetGroup().GetMemberRank(t.accountid);
			}
			switch (n) {
				default:
					break;
				case 30:
					r = "Moderator";
					break;
				case 40:
					r = "Officer";
					break;
				case 50:
					r = "Owner";
					if (!a.GetGroup().BIsClanChatRoom()) {
						e = i.createElement(
							"div",
							{
								className: "rankIcon rankOwner",
							},
							i.createElement(p.OeC, null),
						);
					}
			}
			if (a.GetGroup().BIsClanChatRoom()) {
				if (n >= 40) {
					e = i.createElement(
						"div",
						{
							className: "rankIcon rankOwner",
						},
						i.createElement("img", {
							src:
								B.TS.COMMUNITY_CDN_URL +
								"public/images/skin_1/comment_modindicator_officer.png",
						}),
					);
				} else if (n >= 30) {
					e = i.createElement(
						"div",
						{
							className: "rankIcon rankOwner",
						},
						i.createElement("img", {
							src:
								B.TS.COMMUNITY_CDN_URL +
								"public/images/skin_1/comment_modindicator_moderator.png",
						}),
					);
				}
			}
		} else {
			r = "";
		}
		n = "speakerName " + this.GetChatRoomSpeakerClass(t);
		let a = "avatar speakerAvatar";
		let s = null;
		let o = null;
		if (t.BLoadedEquippedItems()) {
			let e = t.GetEquippedProfileItems();
			if (e) {
				s = e.animated_avatar;
				o = e.avatar_frame;
				if (o && o.image_small && o.image_small.length > 0) {
					a += " hasAvatarFrame";
				}
			}
		}
		let l =
			u.xm.SettingsStore.FriendsSettings.bAnimatedAvatars &&
			t.persona.is_online &&
			!this.props.bInOverlay;
		let c = u.xm.GetServerRTime32() - this.props.msg.rtTimestamp < 60;
		return i.createElement(
			M.xh,
			{
				style: "speaker allow-embedded-newlines",
				text: [
					`[${(0, T.j)(this.props.msg.rtTimestamp, {
						bIncludeWeekday: false,
					})}]`,
					`${t.primary_display_name}:`,
				],
			},
			i.createElement(
				"div",
				{
					ref: this.props.refFocus,
					className:
						"ChatSpeaker ChatRoomSpeaker SpeakerLineBreak" +
						(t.accountid == this.props.chatView.chat.self.accountid
							? " isCurrentUser"
							: ""),
				},
				i.createElement(
					Ce,
					{
						friend: t,
						className: "speaker",
					},
					i.createElement(
						E.Rg,
						{
							friend: t,
							context: this.props.friendRenderContext,
						},
						i.createElement(
							"div",
							{
								className: "speakerHoverArea " + r,
							},
							e,
							i.createElement(N.xz, {
								loopDuration: l && c ? "Medium" : "None",
								className: a,
								persona: t.persona,
								animatedAvatar: s,
								avatarFrame: o,
								size: "Small",
								bLimitProfileFrameAnimationTime: !l || !c,
							}),
							i.createElement("div", {
								className: "speakerStatus",
							}),
							i.createElement(
								"div",
								{
									className: n,
								},
								t.primary_display_name,
								!t.is_display_name_nickname &&
									t.has_secondary_display_name &&
									i.createElement(
										"span",
										{
											className: "playerNickname",
										},
										" (",
										t.secondary_display_name,
										")",
									),
								t.is_display_name_nickname &&
									i.createElement(
										"span",
										{
											className: "playerNicknameBracket",
											title: (0, h.we)("#isNickname"),
										},
										"*",
									),
							),
						),
					),
					i.createElement(
						"div",
						{
							className: "speakerTimeStamp",
						},
						i.createElement(w.EO, {
							rtime: this.props.msg.rtTimestamp,
							bTimeOnly: false,
						}),
					),
				),
			),
		);
	}
};
fe = (0, n.Cg)([o.PA], fe);
const be = (0, o.PA)(function (e) {
	const { onUpdate: t, msg: r, chatView: n, speakerWidth: a } = e;
	const s = i.useCallback(
		() => t("ChatMessageSlashEmote " + r.UniqueKey()),
		[t, r],
	);
	const o = de(r, n);
	const l = n.chat;
	const c = u.xm.FriendStore.GetPlayer(r.unAccountID);
	const m = r.strMessage.slice(r.strMessage.search(/\s/g) + 1);
	const d = (0, R.A)(
		"speaker",
		c.persona.is_ingame ? "ingame" : c.persona.is_online ? "online" : "offline",
	);
	const A = {
		width: a ? `${a}px` : undefined,
	};
	const p = (0, R.A)(
		"msg",
		_D.MsgWithAddons,
		"ChatMsgSlashEmote",
		"ChatRoomSlashEmote",
		{
			isCurrentUser: l.self.accountid === r.unAccountID,
			ChatMessageErrorSending: r.eErrorSending != f.Bm.None,
		},
	);
	return i.createElement(
		"div",
		{
			className: p,
			onContextMenu: o,
		},
		r.eErrorSending != f.Bm.None &&
			i.createElement(
				"div",
				{
					className: "ChatMessageErrorSendingAlert",
				},
				(0, h.we)("#Chat_ErrorSending"),
			),
		i.createElement(
			"div",
			{
				className:
					"SpeakerLineBreak" +
					(r.unAccountID == l.self.accountid ? " isCurrentUser" : ""),
			},
			i.createElement(
				"div",
				{
					className: d,
				},
				i.createElement(
					E.Rg,
					{
						friend: c,
						context: {
							chat: l,
							chatContext: "message",
						},
					},
					i.createElement(
						"div",
						{
							className: "speakerHoverArea",
						},
						i.createElement("img", {
							className: "avatar speakerAvatar",
							src: c.persona.avatar_url,
							onLoad: s,
						}),
						i.createElement("div", {
							className: "speakerStatus",
						}),
						i.createElement(
							M.xh,
							{
								style: "speaker allow-embedded-newlines",
								text: [
									`[${(0, T.j)(r.rtTimestamp, {
										bIncludeWeekday: false,
									})}]`,
									`${c.display_name}:`,
								],
							},
							i.createElement(
								"div",
								{
									className: "speakerName",
									style: A,
								},
								c.display_name,
							),
						),
					),
				),
				i.createElement(
					M.xh,
					{
						style: "force-display append-innertext",
						text: "/me",
					},
					i.createElement(
						"div",
						{
							className: "msgText",
						},
						i.createElement(v.wr, {
							bbcode: m,
							context: {
								chat: l,
								unAccountIDSender: r.unAccountID,
								rtTimestamp: r.rtTimestamp,
								onUpdate: t,
							},
							parser: l.GetBBCodeParser(),
						}),
					),
				),
				i.createElement(
					"div",
					{
						className: "speakerTimeStamp",
					},
					i.createElement(w.EO, {
						rtime: r.rtTimestamp,
						bTimeOnly: false,
					}),
				),
			),
		),
		i.createElement(V, {
			msg: r,
			chat: l,
		}),
		i.createElement(pe, {
			msg: r,
			chat: l,
			onShowContextMenu: (e) =>
				o(e, {
					bOverlapHorizontal: true,
					bOverlapVertical: false,
				}),
		}),
	);
});
let ye = class extends i.Component {
	render() {
		return i.createElement(
			Ae,
			{
				...this.props,
				extraClassName: "ChatMessageDeleted",
			},
			i.createElement(
				"div",
				{
					className: "msgText",
				},
				i.createElement(
					"span",
					{
						className: "filteredURL bb_removedlink",
					},
					(0, h.we)("#Chat_MessageDeleted"),
				),
			),
		);
	}
};
ye = (0, n.Cg)([o.PA], ye);
let Se = class extends i.Component {
	render() {
		let e = this.props.msg;
		let t = this.props.friendRenderContext;
		if (e.eServerMsgType == 11) {
			const r = {
				unAccountIDSender: 0,
				chat: t.chat,
				rtTimestamp: e.rtTimestamp,
				key: e.UniqueKey(),
				onLoad: undefined,
			};
			return i.createElement(
				ce,
				null,
				i.createElement(v.wr, {
					bbcode: this.props.msg.strServerMsgAppCustomLocalized,
					context: r,
					parser: t.chat.GetBBCodeParser(),
				}),
			);
		}
		{
			const r = (function (e) {
				switch (e.eServerMsgType) {
					case 1: {
						let t = u.xm.FriendStore.GetPlayer(e.unAccountID);
						return {
							strToken: "#ChatRoom_ServerMessage_RenameChatRoom",
							parts: [e.strServerMsgParam, t],
						};
					}
					case 2:
						return {
							strToken: "#ChatRoom_ServerMessage_Joined",
							parts: [u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID)],
						};
					case 3:
						return {
							strToken: "#ChatRoom_ServerMessage_Parted",
							parts: [u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID)],
						};
					case 4: {
						let t = u.xm.FriendStore.GetPlayer(e.unAccountID);
						return {
							strToken: "#ChatRoom_ServerMessage_Kicked",
							parts: [
								u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID),
								t,
							],
						};
					}
					case 9: {
						let t = u.xm.FriendStore.GetPlayer(e.unAccountID);
						if (e.strServerMsgParam.length) {
							return {
								strToken: "#ChatRoom_ServerMessage_ChatRoomTaglineChanged",
								parts: [e.strServerMsgParam, t],
							};
						} else {
							return {
								strToken: "#ChatRoom_ServerMessage_ChatRoomTaglineRemoved",
								parts: [t],
							};
						}
					}
					case 10:
						return {
							strToken: "#ChatRoom_ServerMessage_ChatRoomAvatarChanged",
							parts: [u.xm.FriendStore.GetPlayer(e.unAccountID)],
						};
					case 5:
						return {
							strToken: "#ChatRoom_ServerMessage_Invited",
							parts: [
								u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID),
								u.xm.FriendStore.GetPlayer(e.unAccountID),
							],
						};
					default:
						return {
							strToken: "#ChatRoom_ServerMessage_Unhandled",
							parts: [],
						};
				}
			})(e);
			const n = r.parts.length
				? (function (e, t, ...r) {
						let n = [];
						for (let t of r) {
							if (t instanceof I.$c) {
								n.push(
									i.createElement(se, {
										context: e,
										player: t,
									}),
								);
							} else {
								n.push(t);
							}
						}
						return (0, h.PP)(t, ...n);
					})(t, r.strToken, ...r.parts)
				: (0, h.we)(r.strToken);
			return i.createElement(ce, null, n);
		}
	}
};
Se = (0, n.Cg)([o.PA], Se);
let we = class extends i.Component {
	render() {
		let e = this.props.msg;
		let t = this.props.friendRenderContext;
		const r = {
			unAccountIDSender: 0,
			chat: t.chat,
			rtTimestamp: e.rtTimestamp,
			key: e.UniqueKey(),
			onLoad: undefined,
		};
		return i.createElement(
			ce,
			null,
			i.createElement(v.wr, {
				bbcode: e.strMessage,
				context: r,
				parser: t.chat.GetBBCodeParser(),
			}),
		);
	}
};
we = (0, n.Cg)([o.PA], we);
let Be = class extends i.Component {
	render() {
		return i.createElement(
			M.xh,
			{
				style: "invite",
				text: this.props.msg.strMessage,
			},
			i.createElement(
				"div",
				{
					className: "msg",
				},
				i.createElement(
					"div",
					{
						className: "msg voiceChannelInvite",
					},
					this.props.msg.strMessage,
				),
				i.createElement("div", {
					className: "msg voiceChannelInviteClear",
				}),
			),
		);
	}
};
Be = (0, n.Cg)([o.PA], Be);
var ve = require(/*webcrack:missing*/ "./49455.js");
var Ie = require(/*webcrack:missing*/ "./4690.js");
let Ee = class extends i.Component {
	componentDidUpdate() {
		this.props.onUpdate(
			"ChatMessageBlocks " + this.props.chatView.GetUniqueID(),
		);
	}
	renderBlock(e) {
		const t = this.props;
		const { chatView: r } = this.props;
		const n = r.chat.chat_message_blocks;
		const a = !r.IsChatRoom() && n.time_passes_index;
		const s = r.IsChatRoom() ? r.chat.first_unread_msg_time : g.ME;
		const o = n.message_blocks[e];
		const l = e == 0 ? g.ME : n.message_blocks[e - 1].GetRTimeLastMessage();
		if (s && l <= s && o.GetRTimeLastMessage() > s) {
			let r;
			let n = o;
			if (s > o.GetRTimeFirstMessage()) {
				[r, n] = o.CreateVirtualSplitOnTimestamp(s);
				(0, ve.w)(r.messages.length, "No messages in prefix");
			}
			let l = s;
			return i.createElement(
				i.Fragment,
				{
					key: o.UniqueKey(),
				},
				r &&
					i.createElement(Me, {
						...t,
						block: r,
						bIsInitialBlock: e === 0,
						bShowTimePasses: e === a,
					}),
				i.createElement(De, {
					rtTimestamp: l,
					bUnread: true,
				}),
				n.messages.length > 0 &&
					i.createElement(Me, {
						...t,
						block: n,
						bIsInitialBlock: false,
						bShowTimePasses: false,
					}),
			);
		}
		return i.createElement(Me, {
			...t,
			key: o.UniqueKey(),
			block: o,
			bIsInitialBlock: e === 0,
			bShowTimePasses: e === a,
		});
	}
	render() {
		this.props;
		const { chatView: e } = this.props;
		return e.chat.chat_message_blocks.message_blocks.map((e, t) =>
			this.renderBlock(t),
		);
	}
};
Ee = (0, n.Cg)([o.PA], Ee);
let Me = class extends i.Component {
	componentDidUpdate() {
		if (this.props.block.is_last_block) {
			this.props.onUpdate("ChatMessageBlock " + this.props.block.UniqueKey());
		}
	}
	render() {
		let e;
		let t;
		let { block: r, bIsInitialBlock: n, bShowTimePasses: a, ...s } = this.props;
		let o = s.friendRenderContext;
		let l = r.messages;
		if (r.BIsInvite()) {
			e = i.createElement(oe, {
				messages: l,
				friendRenderContext: o,
			});
		} else if (r.BIsServerMsg()) {
			e = i.createElement(Ne, {
				block: r,
				friendRenderContext: o,
			});
		} else if (r.BIsLocalMsg()) {
			e = i.createElement(Fe, {
				block: r,
				friendRenderContext: o,
			});
		} else if (l.length) {
			e = i.createElement(Re, {
				...s,
				messages: l,
				bLastMessageBlock: r.is_last_block,
			});
		}
		if (r.is_last_block) {
			let e = u.xm.GetLocalMidnightInRTime32();
			if (r.GetRTimeMidnightBeforeBlock() != e) {
				t = i.createElement(De, {
					rtTimestamp: e,
				});
			}
		} else if (
			r.GetRTimeMidnightBeforeBlock() != r.GetRTimeMidnightBeforeNextBlock()
		) {
			t = i.createElement(De, {
				rtTimestamp: r.GetRTimeMidnightBeforeNextBlock(),
			});
		}
		return i.createElement(
			i.Fragment,
			null,
			n &&
				l.length > 0 &&
				i.createElement(Te, {
					msg: l[0],
				}),
			a &&
				i.createElement(De, {
					rtTimestamp: l[0].rtTimestamp,
					bTimePassesLine: true,
				}),
			e,
			t,
		);
	}
};
function Te(e) {
	if (e.msg.rtTimestamp < u.xm.GetLocalMidnightInRTime32()) {
		return i.createElement(De, {
			rtTimestamp: e.msg.rtTimestamp,
		});
	} else {
		return null;
	}
}
Me = (0, n.Cg)([o.PA], Me);
let Re = class extends i.Component {
	m_element = i.createRef();
	m_refSpeaker = i.createRef();
	constructor(e) {
		super(e);
		this.state = {
			bHoveringDelete: false,
		};
	}
	OnHoverDelete(e) {
		this.setState({
			bHoveringDelete: e,
		});
	}
	CopyMessage() {
		(0, M.pM)(this.m_element.current);
	}
	SelectMessage(e) {
		e.getSelection().selectAllChildren(this.m_element.current);
	}
	OnMessageBlockContextMenu(e) {
		let t;
		let r = this.props.messages[0].unAccountID;
		if (this.props.chatView.chat instanceof _.d) {
			t = this.props.chatView.chat;
		}
		const n = [];
		const a = (0, b.uX)(e);
		const s = a.getSelection();
		const o = s && s.rangeCount > 0 && s.toString().length > 0;
		let l;
		l =
			document.queryCommandEnabled("copy") || o
				? () => {
						a.document.execCommand("copy");
					}
				: this.CopyMessage;
		n.push(
			i.createElement(
				ee.kt,
				{
					key: "copy",
					onSelected: l,
				},
				(0, h.we)("#ContextMenu_Copy"),
			),
		);
		n.push(
			i.createElement(
				ee.kt,
				{
					key: "select",
					onSelected: () => {
						this.SelectMessage(a);
					},
				},
				(0, h.we)("#Chat_Actions_Select_Message"),
			),
		);
		if (t && t.BCanDeleteMemberMessages(r)) {
			n.push(
				i.createElement(
					ee.kt,
					{
						key: "delete",
						onSelected: () => {
							me(a, t, this.props.messages);
						},
					},
					(0, h.we)("#Chat_Actions_Delete"),
				),
			);
		}
		if (n.length) {
			return (0, L.lX)(i.createElement(ee.tz, null, n), e);
		} else {
			return null;
		}
	}
	componentDidMount() {
		const { chatView: e } = this.props;
		const t = this.props.messages[0].unAccountID;
		if (e instanceof C.CF && e.virtualizer) {
			e.virtualizer.SubscribeToPersona(t);
		}
	}
	componentDidUpdate(e) {
		const { chatView: t } = this.props;
		if (
			e.messages[0].unAccountID !== this.props.messages[0].unAccountID &&
			t instanceof C.CF &&
			t.virtualizer
		) {
			t.virtualizer.UnsubscribeFromPersona(e.messages[0].unAccountID);
			t.virtualizer.SubscribeToPersona(this.props.messages[0].unAccountID);
		}
	}
	componentWillUnmount() {
		const { chatView: e } = this.props;
		if (e instanceof C.CF && e.virtualizer) {
			e.virtualizer.UnsubscribeFromPersona(this.props.messages[0].unAccountID);
		}
	}
	ScrollIntoViewHandler(e, t, r) {
		let n = this.m_refSpeaker.current;
		return !!n && (n.scrollIntoView(), true);
	}
	render() {
		let e = true;
		let t = false;
		let r = this.props.bLastMessageBlock;
		let n = this.props.messages[0].unAccountID;
		let a = u.xm.FriendStore.GetPlayer(n);
		let s = this.props.chatView.IsChatRoom() ? this.props.chatView.chat : null;
		let o = "ChatMessageBlock";
		let l = 0;
		if (s && a.is_blocked) {
			l = 1;
		} else if (s && a.persona.m_bCommunityBanned) {
			l = 2;
		}
		let c = [];
		if (l == 0) {
			if (
				this.props.messages.length &&
				this.props.messages[0].GetSlashCommand() === "/me"
			) {
				e = false;
			}
			let n = 0;
			for (let a = 0; a < this.props.messages.length; a++) {
				let o = this.props.messages[a];
				let l = true;
				if (!s) {
					let e = Math.floor(o.rtTimestamp / 60);
					if (n && e != n) {
						l = false;
						t = true;
					} else if (r && t && a == this.props.messages.length - 1) {
						l = false;
					}
					n = e;
				}
				let m = {
					msg: o,
					key: o.UniqueKey(),
					chatView: this.props.chatView,
					hideTimeStamp: l,
					onUpdate: this.props.onUpdate,
				};
				if (o.eDeleteState != f.$F.Deleting && o.eDeleteState != f.$F.Deleted) {
					if (o.GetSlashCommand() === "/me") {
						c.push(
							i.createElement(be, {
								...m,
							}),
						);
					} else if (o instanceof f.$G) {
						e = false;
						c.push(
							i.createElement(Be, {
								...m,
							}),
						);
					} else {
						c.push(
							i.createElement(Ae, {
								...m,
								speakerWidth: this.props.speakerWidth,
							}),
						);
					}
				}
			}
		} else {
			c.push(
				i.createElement(ae, {
					reason: l,
					key: "blocked",
				}),
			);
			o += " ChatMessageBlock_BlockedSender";
		}
		if (r) {
			o += " LastMessageBlock";
			if (t) {
				o += " HasInternalTimeStamp";
			}
		}
		if (c.length == 1 && !s) {
			o += " SingletonMsg";
		}
		if (c.length == 0) {
			return null;
		} else {
			return i.createElement(
				M.xh,
				null,
				i.createElement(
					S.Z,
					{
						ref: this.m_element,
						className: o,
						onContextMenu: this.OnMessageBlockContextMenu,
						scrollIntoViewWhenChildFocused: true,
						fnScrollIntoViewHandler: this.ScrollIntoViewHandler,
						navEntryPreferPosition: Ie.iU.LAST,
						"flow-children": "column",
					},
					e &&
						i.createElement(_e, {
							refFocus: this.m_refSpeaker,
							friend: a,
							chatView: this.props.chatView,
							msg: this.props.messages[0],
							friendRenderContext: this.props.friendRenderContext,
							key: "speaker",
							speakerWidth: this.props.speakerWidth,
							onUpdate: this.props.onUpdate,
						}),
					false,
					c,
				),
			);
		}
	}
};
(0, n.Cg)([a.oI], Re.prototype, "OnHoverDelete", null);
(0, n.Cg)([a.oI], Re.prototype, "CopyMessage", null);
(0, n.Cg)([a.oI], Re.prototype, "SelectMessage", null);
(0, n.Cg)([a.oI], Re.prototype, "OnMessageBlockContextMenu", null);
(0, n.Cg)([a.oI], Re.prototype, "ScrollIntoViewHandler", null);
Re = (0, n.Cg)([o.PA], Re);
class ke extends i.Component {
	OnMouseEnter() {
		this.props.onHover(true);
	}
	OnMouseLeave() {
		this.props.onHover(false);
	}
	OnDeleteMessages(e) {
		me((0, b.uX)(e), this.props.chatRoom, this.props.messages);
	}
	render() {
		return i.createElement(
			"div",
			{
				className: "ChatMessageBlockDelete",
				onMouseEnter: this.OnMouseEnter,
				onMouseLeave: this.OnMouseLeave,
				onClick: this.OnDeleteMessages,
				title: (0, h.we)("#Chat_Actions_Delete"),
			},
			i.createElement(p.lMJ, null),
		);
	}
}
(0, n.Cg)([a.oI], ke.prototype, "OnMouseEnter", null);
(0, n.Cg)([a.oI], ke.prototype, "OnMouseLeave", null);
(0, n.Cg)([a.oI], ke.prototype, "OnDeleteMessages", null);
class De extends i.Component {
	shouldComponentUpdate(e) {
		return (
			e.rtTimestamp !== this.props.rtTimestamp ||
			e.bUnread !== this.props.bUnread ||
			e.bTimePassesLine !== this.props.bTimePassesLine
		);
	}
	render() {
		let e;
		let t = u.xm.RTime32ToDate(this.props.rtTimestamp);
		let r = ["msg", "timeDivision"];
		if (this.props.bUnread) {
			let n = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
			};
			e = (0, h.we)(
				"#ChatRoom_New_Messages",
				t.toLocaleDateString(h.pf.GetPreferredLocales(), n),
			);
			r.push("new_messages");
		} else if (this.props.bTimePassesLine) {
			e = "";
			r.push("time_passes");
		} else {
			let r = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			};
			e = t.toLocaleDateString(h.pf.GetPreferredLocales(), r);
		}
		return i.createElement(
			M.xh,
			{
				style: "timestamp",
				text: e,
			},
			i.createElement(
				"div",
				{
					className: r.join(" "),
				},
				i.createElement("div", {
					className: "preHorizDivider",
				}),
				e,
				i.createElement("div", {
					className: "horizDivider",
				}),
			),
		);
	}
}
const Ne = (e) => {
	const { block: t, friendRenderContext: r } = e;
	const n = t.messages.reduce((e, t) => {
		if (!e.length) {
			e.push([t]);
			return e;
		}
		const r = e[e.length - 1];
		const n = r[0];
		const i = Ge(n);
		const a = Ge(t);
		if (i && a) {
			r.push(t);
			return e;
		} else {
			e.push([t]);
			return e;
		}
	}, []);
	return i.createElement(
		i.Fragment,
		null,
		n.map((e) =>
			Ge(e[0])
				? i.createElement(Oe, {
						key: e[0].UniqueKey(),
						messages: e,
						friendRenderContext: r,
					})
				: e.map((e) =>
						i.createElement(Se, {
							msg: e,
							key: e.UniqueKey(),
							friendRenderContext: r,
						}),
					),
		),
	);
};
const Fe = (e) => {
	const { block: t, friendRenderContext: r } = e;
	return i.createElement(
		i.Fragment,
		null,
		t.messages.map((e) =>
			i.createElement(we, {
				msg: e,
				key: e.UniqueKey(),
				friendRenderContext: r,
			}),
		),
	);
};
const Ge = (e) => e.eServerMsgType === 2 || e.eServerMsgType === 3;
const Oe = (e) => {
	const { messages: t, friendRenderContext: r } = e;
	const { rgLeavers: n, rgJoiners: a } = t.reduce(
		(e, t) => {
			if (t.eServerMsgType === 2) {
				e.rgJoiners.push(t.unAccountID);
			}
			if (t.eServerMsgType === 3) {
				e.rgLeavers.push(t.unAccountID);
			}
			return e;
		},
		{
			rgLeavers: [],
			rgJoiners: [],
		},
	);
	if (!n.length && !a.length) {
		return null;
	}
	let s;
	s =
		n.length === 0
			? a.length > 2
				? (0, h.PP)(
						"#ChatRoom_ServerMessage_Joined_Number",
						i.createElement(Le, {
							accountids: a,
						}),
					)
				: a.length === 2
					? (0, h.PP)(
							"#ChatRoom_ServerMessage_Joined_Multiple",
							i.createElement(Pe, {
								context: r,
								accountid: a[0],
							}),
							i.createElement(Pe, {
								context: r,
								accountid: a[1],
							}),
						)
					: (0, h.PP)(
							"#ChatRoom_ServerMessage_Joined",
							i.createElement(Pe, {
								context: r,
								accountid: a[0],
							}),
						)
			: a.length === 0
				? n.length > 2
					? (0, h.PP)(
							"#ChatRoom_ServerMessage_Parted_Number",
							i.createElement(Le, {
								accountids: n,
							}),
						)
					: n.length === 2
						? (0, h.PP)(
								"#ChatRoom_ServerMessage_Parted_Multiple",
								i.createElement(Pe, {
									context: r,
									accountid: n[0],
								}),
								i.createElement(Pe, {
									context: r,
									accountid: n[1],
								}),
							)
						: (0, h.PP)(
								"#ChatRoom_ServerMessage_Parted",
								i.createElement(Pe, {
									context: r,
									accountid: n[0],
								}),
							)
				: n.length === 1 && a.length === 1
					? (0, h.PP)(
							"#ChatRoom_ServerMessage_SingleJoined_SingleParted",
							i.createElement(Pe, {
								context: r,
								accountid: a[0],
							}),
							i.createElement(Pe, {
								context: r,
								accountid: n[0],
							}),
						)
					: n.length === 1
						? (0, h.PP)(
								"#ChatRoom_ServerMessage_MultipleJoined_SingleParted",
								i.createElement(Le, {
									accountids: a,
								}),
								i.createElement(Pe, {
									context: r,
									accountid: n[0],
								}),
							)
						: a.length === 1
							? (0, h.PP)(
									"#ChatRoom_ServerMessage_SingleJoined_MultipleParted",
									i.createElement(Pe, {
										context: r,
										accountid: a[0],
									}),
									i.createElement(Le, {
										accountids: n,
									}),
								)
							: (0, h.PP)(
									"#ChatRoom_ServerMessage_MultipleJoined_MultipleParted",
									i.createElement(Le, {
										accountids: a,
									}),
									i.createElement(Le, {
										accountids: n,
									}),
								);
	return i.createElement(ce, null, s);
};
const Pe = (0, o.PA)((e) => {
	const { context: t, accountid: r } = e;
	const n = u.xm.FriendStore.GetPlayer(r);
	return i.createElement(
		E.Rg,
		{
			friend: n,
			context: t,
		},
		i.createElement("span", null, n.display_name),
	);
});
const Le = (0, o.PA)((e) => {
	const { accountids: t } = e;
	const r = t.map((e) => u.xm.FriendStore.GetPlayer(e));
	return i.createElement(
		"span",
		{
			title: r.map((e) => e.display_name).join(", "),
		},
		r.length,
	);
});
var ze = require("./87949.js");
var xe = require("./72655.js");
var Ue = require(/*webcrack:missing*/ "./15181.js");
export let D = class extends i.Component {
	constructor(e) {
		super(e);
		(0, s.Gn)(this);
	}
	static contextType = m.QO;
	state = {
		chatSubscribed: null,
	};
	m_window;
	m_elHistoryScroll;
	m_animation;
	LOG = new l.wd("ChatHistory", () => this.props.chatView.GetUniqueID()).Debug;
	m_bLoadHistoryInProgress = false;
	m_bLoadingOperationInProgress = false;
	m_bHasPendedLoadOlder = false;
	m_nIgnoreScrollUpUntilTime = 0;
	GetScrollTop() {
		this.LOG(
			"scrollTop is",
			this.m_elHistoryScroll.scrollTop,
			"returning",
			Math.ceil(this.m_elHistoryScroll.scrollTop),
		);
		return Math.ceil(this.m_elHistoryScroll.scrollTop);
	}
	GetScrollInfo() {
		if (this.m_elHistoryScroll) {
			const { scrollHeight: e, clientHeight: t } = this.m_elHistoryScroll;
			return {
				scrollTop: this.GetScrollTop(),
				scrollHeight: e,
				clientHeight: t,
			};
		}
		return {
			scrollTop: 0,
			scrollHeight: 0,
			clientHeight: 0,
		};
	}
	LogScrollInfo(e) {
		if (!l.fi.Get().IsDebugLogEnabled("ChatHistory")) {
			return;
		}
		const {
			scrollTop: t,
			scrollHeight: r,
			clientHeight: n,
		} = this.GetScrollInfo();
		let {
			lastScrollTop: i,
			lastScrollHeight: a,
			lastClientHeight: s,
		} = this.props.chatView;
		this.LOG(
			`${e}: scrolltop ${t} scrollHeight ${r} clientHeight ${n}, was scrollTop ${i} scrollHeight ${a} clientHeight ${s} `,
		);
	}
	DumpChildSizes() {
		if (!l.fi.Get().IsDebugLogEnabled("ChatHistory")) {
			return;
		}
		let e = this.m_elHistoryScroll.children[0];
		let t = e.children.length;
		if (t < 0) {
			let r = 0;
			this.LOG("History has", t, "children");
			for (let n = 0; n < t; n++) {
				let t = e.children[n];
				r += t.clientHeight;
				this.LOG("Child", n, "height", t.clientHeight, t);
			}
			this.LOG("Total height:", r);
		}
	}
	OnHistoryScrollRef(e) {
		if (this.m_elHistoryScroll && this.m_window) {
			this.m_window.removeEventListener("resize", this.OnResize);
		}
		this.m_elHistoryScroll = e;
		if (e) {
			this.m_window = e.ownerDocument.defaultView;
			this.m_window.addEventListener("resize", this.OnResize);
		}
	}
	OnScrollEvent(e) {
		this.LogScrollInfo("*** OnScrollEvent");
		this.OnScroll();
	}
	OnScroll() {
		const e = this.props.chatView;
		const {
			scrollTop: t,
			scrollHeight: r,
			clientHeight: n,
		} = this.GetScrollInfo();
		let { lastScrollTop: i, lastScrollHeight: a, lastClientHeight: s } = e;
		this.LogScrollInfo("OnScroll");
		if (n == 0) {
			this.LOG("Onscroll zero clientHeight, ignoring");
			return;
		}
		let o = r - t <= n;
		let l = a - i <= s;
		(0, ve.w)(
			l == e.is_scrolled_to_bottom,
			`${e.GetUniqueID()}: computed and stored at bottom don't match`,
		);
		this.LOG("bAtBottom", o, "bWasAtBottom", l);
		let c = t;
		if (l && i - c == 1) {
			this.LOG(
				"*** Scroll position off by one while pinned, ignoring and setting scrollTop to",
				i,
			);
			c = i;
		}
		if (
			o ||
			(l && r != a) ||
			(c < i && l && Date.now() < this.m_nIgnoreScrollUpUntilTime)
		) {
			this.LogScrollInfo("At bottom");
			if (c < i && l && Date.now() < this.m_nIgnoreScrollUpUntilTime) {
				this.LOG(
					"**** IGNORING APPARENT SCROLL UP WHILE PINNED TO BOTTOM IN LAYOUT",
				);
			}
			c = r - n;
			(0, ve.w)(
				c >= 0,
				`${e.GetUniqueID()}: Onscroll client height bigger than scroll height`,
			);
			e.is_scrolled_to_bottom = true;
			if (c != t) {
				this.LOG("Setting scrollTop to", c);
				this.m_elHistoryScroll.scrollTop = c;
			}
		} else if (n < s && l) {
			this.LogScrollInfo("Shrinking window while pinned to bottom");
			c = r - n;
			e.is_scrolled_to_bottom = true;
			if (c != t) {
				this.LOG("Setting scrollTop to", c);
				this.m_elHistoryScroll.scrollTop = c;
			}
		} else if (c < i) {
			this.LogScrollInfo("Detected scroll up");
			e.is_scrolled_to_bottom = o;
		} else if (c != i) {
			this.LogScrollInfo("Detected scroll down but not to bottom");
			e.is_scrolled_to_bottom = false;
		}
		e.lastScrollTop = c;
		e.lastScrollHeight = r;
		e.lastClientHeight = n;
		let m =
			e.is_scrolled_to_bottom !=
			e.lastScrollHeight - e.lastScrollTop <= e.lastClientHeight;
		if (m) {
			(0, ve.w)(
				!m,
				`${e.GetUniqueID()}: setting mismatched computed and stored`,
			);
			this.LOG(
				e.lastScrollTop,
				e.lastScrollHeight,
				e.lastClientHeight,
				e.is_scrolled_to_bottom,
			);
		}
		if (c < 10) {
			this.LoadOlderMessages();
		}
	}
	OnRequestScrollToBottom() {
		this.ScrollToBottom();
	}
	ScrollToBottom() {
		const { scrollHeight: e, clientHeight: t } = this.GetScrollInfo();
		this.LogScrollInfo("ScrollToBottom");
		const r = e - t;
		(0, ve.w)(
			r >= 0,
			`${this.props.chatView.GetUniqueID()}: ScrollToBottom client height bigger than scroll height`,
		);
		if (this.m_animation) {
			this.m_animation.Cancel();
		}
		this.m_animation = new c.JV(
			this.m_elHistoryScroll,
			{
				scrollTop: r,
			},
			{
				msDuration: 300,
				timing: "sine",
				onComplete: () => {},
			},
		);
		this.m_animation.Start();
	}
	LoadOlderMessages() {
		const { chatView: e } = this.props;
		const t = e.chat;
		if (!t.IsMoreHistoryAvailable()) {
			return;
		}
		if (this.m_bLoadingOperationInProgress) {
			this.LOG("noting pended load");
			this.m_bHasPendedLoadOlder = true;
			return;
		}
		let r = () =>
			t.LoadMoreHistory().then((t) => {
				const { scrollHeight: n } = this.GetScrollInfo();
				const { lastScrollTop: i, lastScrollHeight: a } = e;
				const s = i + n - a;
				this.LogScrollInfo("LoadOlderMessags");
				this.m_elHistoryScroll.scrollTop = s;
				if (this.m_bHasPendedLoadOlder) {
					this.LOG("LoadOlderMessages starting pended");
					this.m_bHasPendedLoadOlder = false;
					return r();
				} else {
					this.m_bLoadingOperationInProgress = false;
					return t;
				}
			});
		this.LOG("LoadOlderMessages starting");
		this.m_bLoadHistoryInProgress = true;
		this.m_bLoadingOperationInProgress = true;
		this.DoAndDelay(this.m_window, r, 500).then((e) => {
			this.LOG("loading over");
			this.m_bLoadHistoryInProgress = false;
		});
	}
	DoAndDelay(e, t, r) {
		const n = performance.now();
		return t().then((t) => {
			const i = performance.now() - n;
			if (i < r) {
				return new Promise((n) => e.setTimeout(n.bind(null, t), r - i));
			} else {
				return t;
			}
		});
	}
	Focus() {
		if (this.m_elHistoryScroll) {
			this.m_elHistoryScroll.focus();
		}
	}
	componentDidMount() {
		this.LOG("ComponentDidMount");
		this.UpdateChatViewCallback();
		if (this.m_elHistoryScroll && this.props.chatView.is_scrolled_to_bottom) {
			let { chatView: e } = this.props;
			let { scrollHeight: t, clientHeight: r } = this.GetScrollInfo();
			e.lastScrollTop = t - r;
			e.lastScrollHeight = t;
			e.lastClientHeight = r;
			this.m_elHistoryScroll.scrollTop = e.lastScrollTop;
			(0, ve.w)(
				e.is_scrolled_to_bottom ==
					e.lastScrollHeight - e.lastScrollTop <= e.lastClientHeight,
				`${e.GetUniqueID()}: setting mismatched computed and stored`,
			);
		}
	}
	componentDidUpdate() {
		const { chatView: e } = this.props;
		this.UpdateChatViewCallback();
		const {
			scrollTop: t,
			scrollHeight: r,
			clientHeight: n,
		} = this.GetScrollInfo();
		const { lastScrollTop: i, lastScrollHeight: a } = e;
		if (n == 0) {
			this.LOG("componentDidUpdate clientHeight == 0, ignoring");
			return;
		}
		let s = t;
		if (r == a) {
			s = i;
		} else if (r - t <= n) {
			s = r - n;
		}
		this.LogScrollInfo("componentDidUpdate");
		this.DelayedScrollTo(s);
	}
	UpdateChatViewCallback() {
		let e = this.state.chatSubscribed;
		if (this.props.chatView != e) {
			this.props.chatView.RemoveOnChatFrameChangedCallback(this.OnFrameChanged);
			this.props.chatView.RemoveOnChatRequestScrollBottomCallback(
				this.OnRequestScrollToBottom,
			);
			e = null;
		}
		if (!e && this.props.isActive) {
			this.props.chatView.AddOnChatFrameChangedCallback(this.OnFrameChanged);
			this.props.chatView.AddOnChatRequestScrollBottomCallback(
				this.OnRequestScrollToBottom,
			);
			e = this.props.chatView;
		}
		if (this.state.chatSubscribed != e) {
			this.setState({
				chatSubscribed: e,
			});
		}
	}
	componentWillUnmount() {
		if (this.m_window) {
			this.m_window.removeEventListener("resize", this.OnResize);
			this.m_window = undefined;
		}
		this.props.chatView.RemoveOnChatFrameChangedCallback(this.OnFrameChanged);
	}
	m_FriendRenderContext;
	GetFriendRenderContext() {
		if (
			!this.m_FriendRenderContext ||
			this.m_FriendRenderContext.chat != this.props.chatView.chat
		) {
			this.m_FriendRenderContext = {
				chatContext: "message",
				chat: this.props.chatView.chat,
			};
		}
		return this.m_FriendRenderContext;
	}
	OnFrameChanged() {
		const e = this.props.chatView;
		const { scrollHeight: t, clientHeight: r } = this.GetScrollInfo();
		const { lastScrollTop: n, lastScrollHeight: i, lastClientHeight: a } = e;
		let s;
		this.LogScrollInfo("OnFrameChanged");
		this.m_nIgnoreScrollUpUntilTime = Date.now() + 300;
		if (e.is_scrolled_to_bottom) {
			this.LOG("OnFrameChanged scrolling to bottom");
			s = t - r;
		} else {
			this.LOG("OnFrameChanged preserving bottom");
			s = n + a + t - i - r;
		}
		this.LOG("OnFrameChanged setting scrollTop to", s);
		this.DelayedScrollTo(s);
	}
	DelayedScrollTo(e) {
		this.LOG("DelayedScrollTo", e);
		this.m_elHistoryScroll.scrollTop = e;
		this.m_window.setTimeout(() => {
			this.LOG("DelayedOnScroll firing", e);
			this.OnScroll();
		}, 150);
	}
	OnUpdate(e) {
		const t = this.props.chatView;
		const { scrollHeight: r, clientHeight: n } = this.GetScrollInfo();
		this.LogScrollInfo("OnUpdate for " + e);
		this.LOG("Scrolled to bottom is", t.is_scrolled_to_bottom);
		if (r == 0) {
			this.LOG("OnUpdate zero scroll height");
		} else if (t.is_scrolled_to_bottom) {
			this.LogScrollInfo("OnUpdate currently scrolled to bottom");
			const e = r - n;
			this.DelayedScrollTo(e);
		} else if (t.chat.BIsPrepend) {
			t.chat.ResetPrepended();
			const { lastScrollTop: e, lastScrollHeight: i, lastClientHeight: a } = t;
			this.LogScrollInfo("OnUpdate prepended messages");
			const s = e + a + r - i - n;
			this.DelayedScrollTo(s);
		} else {
			this.LogScrollInfo("OnUpdate content updated, doing nothing");
		}
	}
	OnResize() {
		const {
			scrollTop: e,
			scrollHeight: t,
			clientHeight: r,
		} = this.GetScrollInfo();
		this.LogScrollInfo("OnResize");
		let n = e;
		if (t - e <= r) {
			n = t - r;
		}
		this.DelayedScrollTo(n);
	}
	Swallow(e) {
		e.stopPropagation();
		e.preventDefault();
	}
	render() {
		let { chatView: e, speakerLabelWidth: t, blockInteraction: r } = this.props;
		if (!e || e != this.state.chatSubscribed) {
			return null;
		}
		let n = e.chat;
		let a = this.GetFriendRenderContext();
		let s = t && Math.max(Math.min(t, 120), 50);
		this.LOG("Render");
		n.LoadChatLogs();
		let o = u.xm.SettingsStore.FriendsSettings.nChatFontSize;
		let l = "ChatHistoryContainer";
		if (o == d.ki.k_EChatFontSizeSmall) {
			l += " smallChatFont";
		} else if (o == d.ki.k_EChatFontSizeLarge) {
			l += " largeChatFont";
		}
		return i.createElement(
			xe.YZ,
			{
				className: l,
				navEntryPreferPosition: Ie.iU.LAST,
				preferredFocus: true,
				onGamepadDirection: (0, Ue.s1)({
					bPreventMovementUp: true,
				}),
				onOKActionDescription: (0, h.we)("#Chat_SelectChatWindow"),
			},
			r &&
				i.createElement("div", {
					className: "interactionBlocker",
					onClick: this.Swallow,
				}),
			!this.context?.IN_GAMEPADUI && i.createElement(ze.H, null),
			this.context?.IN_GAMEPADUI &&
				i.createElement("div", {
					className: "ChatHistorySelector",
				}),
			i.createElement(Ve, {
				chatHistory: this,
				chatView: e,
			}),
			i.createElement(
				"div",
				{
					className: "chatHistoryScroll",
					ref: this.OnHistoryScrollRef,
					onScroll: this.OnScrollEvent,
					tabIndex: 0,
				},
				i.createElement(
					"div",
					{
						className: "chatHistory",
					},
					i.createElement(Ee, {
						chatView: e,
						friendRenderContext: a,
						onUpdate: this.OnUpdate,
						speakerWidth: s,
					}),
					i.createElement("div", {
						className: "disconnectBlocker",
					}),
				),
			),
			i.createElement(A.ln, {
				chatView: e,
			}),
			!this.context?.IN_GAMEPADUI &&
				i.createElement(He, {
					chatView: e,
					action: this.ScrollToBottom,
				}),
			!this.context?.IN_GAMEPADUI && i.createElement(ze.P, null),
		);
	}
};
(0, n.Cg)([s.sH], D.prototype, "m_bLoadHistoryInProgress", undefined);
(0, n.Cg)([a.oI], D.prototype, "DumpChildSizes", null);
(0, n.Cg)([a.oI], D.prototype, "OnHistoryScrollRef", null);
(0, n.Cg)([a.oI], D.prototype, "OnScrollEvent", null);
(0, n.Cg)([a.oI], D.prototype, "OnScroll", null);
(0, n.Cg)([a.oI], D.prototype, "OnRequestScrollToBottom", null);
(0, n.Cg)([a.oI], D.prototype, "ScrollToBottom", null);
(0, n.Cg)([a.oI], D.prototype, "LoadOlderMessages", null);
(0, n.Cg)([a.oI], D.prototype, "OnFrameChanged", null);
(0, n.Cg)([a.oI], D.prototype, "OnUpdate", null);
(0, n.Cg)([a.oI], D.prototype, "OnResize", null);
(0, n.Cg)([a.oI], D.prototype, "Swallow", null);
D = (0, n.Cg)([o.PA], D);
let Ve = class extends i.Component {
	render() {
		let e = "LoadingOlderMessages";
		if (!this.props.chatHistory.m_bLoadHistoryInProgress) {
			e += " Hidden";
		}
		return i.createElement(
			"div",
			{
				className: e,
			},
			i.createElement("span", null, (0, h.we)("#Chat_Loading")),
		);
	}
};
Ve = (0, n.Cg)([o.PA], Ve);
let He = class extends i.Component {
	render() {
		let { chatView: e, action: t } = this.props;
		let r = "ScrollToBottomButton";
		if (e.is_scrolled_to_bottom) {
			r += " Hidden";
		}
		let n = (0, h.we)("#Chat_ScrollToBottom");
		if (e.chat.unread_message_count > 0) {
			n = (0, h.Yp)("#Chat_UnreadMessages", e.chat.unread_message_count);
			r += " UnreadMessages";
		}
		return i.createElement(
			"div",
			{
				className: r,
				onClick: t,
			},
			i.createElement("span", null, n),
		);
	}
};
He = (0, n.Cg)([o.PA], He);
