import {
	LocalizeReact,
	Localize,
	LocalizationManager,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { useState, useRef, useEffect } from "./63696.js";
import a from "./52451.js";
import s, { Gn } from "./89193.js";
import o, { PA } from "./41230.js";
import l from "./83599.js";
import c from "./7558.js";
import m from "./72476.js";
import u from "./95773.js";
import d from "./50551.js";
import A from "./92564.js";
import p from "./50376.js";
import g from "./44846.js";
import C from "./80663.js";
import _ from "./3756.js";
import f from "./89459.js";
import y, { aQ } from "./51095.js";
import S from "./69164.js";
import w from "./59704.js";
import B, { Qn } from "./44234.js";
import v from "./50979.js";
import I from "./96127.js";
import E from "./98829.js";
import M, { pM } from "./66408.js";
import T, { J_1 as j_1 } from "./34616.js";
import { A as A_1 } from "./90765.js";
import k from "./2561.js";
import N from "./17231.js";
import F, { createPortal } from "./78325.js";
import G, { q3 } from "./90095.js";
import O from "./92251.js";
import P from "./31760.js";
import L, { lX } from "./31084.js";
import z from "./44164.js";
import x from "./56840.js";
import U from "./89495.js";
import W, { G as G_1 } from "./92757.js";
import { WQ, Ic } from "./78060.js";
import ee from "./88750.js";
import te, { u as u_1 } from "./17385.js";
import { _k } from "./52912.js";
import { R7 } from "./11131.js";
import { qf } from "./13099.js";
import { w as w_1 } from "./49455.js";
import Ie from "./4690.js";
import ze from "./87949.js";
import xe from "./72655.js";
import { s1 } from "./15181.js";
const _D = k;
const V = PA((e) => {
	const { msg, chat } = e;
	const { showPicker } = Y(chat, msg);
	if (msg.reactions.length === 0) {
		return null;
	}
	return (
		<div className={U.MessageReactions}>
			{msg.reactions.map((e) => (
				<H
					key={e.strReaction}
					chat={chat}
					msg={msg}
					reaction={e}
					onClick={() =>
						((e) =>
							chat.UpdateMessageReaction(
								msg,
								e.eReactionType,
								e.strReaction,
								!e.bUserReacted,
							))(e)
					}
				/>
			))}
			<X className={U.OpenPickerButton} onClick={showPicker} />
		</div>
	);
});
const H = PA((e) => {
	const {
		onClick,
		reaction: { bUserReacted: r, cReactors: n },
		chat,
		msg,
	} = e;
	const [o, l] = ((e = 400) => {
		const [t, setT] = useState(false);
		const NRef = useRef();
		useEffect(() => () => clearTimeout(NRef.current), []);
		return [
			t,
			(i) => {
				if (i && !t && NRef.current === undefined) {
					NRef.current = window.setTimeout(() => {
						NRef.current = undefined;
						setT(true);
					}, e);
				} else if (!i) {
					window.clearTimeout(NRef.current);
					NRef.current = undefined;
					if (t) {
						setT(i);
					}
				}
			},
		];
	})();
	const CRef = useRef();
	const m = {
		borderColor: r ? "#8D8E94" : "#1B1C20",
	};
	return (
		<div
			onClick={onClick}
			style={m}
			className={U.MessageReaction}
			onMouseEnter={() => l(true)}
			onMouseLeave={() => l(false)}
			ref={CRef}
		>
			<J_1 reaction={e.reaction} />
			<div className={U.ReactionCount}>{n}</div>
			{o && (
				<Z target={CRef.current} reaction={e.reaction} chat={chat} msg={msg} />
			)}
		</div>
	);
});
function J_1(e) {
	switch (e.reaction.eReactionType) {
		case 1: {
			return <Q_1 {...e} />;
		}
		case 2: {
			return <Q {...e} />;
		}
		default: {
			console.error(
				`Unknown message reaction type: ${e.reaction.eReactionType}`,
			);
			return null;
		}
	}
}
function Q_1(e) {
	const { reaction, large } = e;
	return (
		<img
			className={A_1(U.EmoticonReaction, large && U.Large)}
			src={P.p.GetEmoticonURL(reaction.strReaction, e.large)}
		/>
	);
}
function Q(e) {
	const {
		reaction: { strReaction: t },
		large,
	} = e;
	const n = G_1(B.TS.COMMUNITY_CDN_URL, t);
	return <img className={A_1(U.StickerReaction, large && U.Large)} src={n} />;
}
const Z = PA((e) => {
	const { target, reaction, chat, msg } = e;
	const { strReaction, cReactors } = reaction;
	const l = chat.GetMessageReactionReactors(msg, reaction, 3);
	let c = ((e, t, r) => {
		const n = u.xm.FriendStore.self;
		if (t.length === 0) {
			if (r === 1) {
				return LocalizeReact("#MessageReaction_DescriptionCountOnly", e);
			} else {
				return LocalizeReact(
					"#MessageReaction_DescriptionCountOnly_Plural",
					r,
					e,
				);
			}
		}
		const a = t.filter((e) => e !== n.accountid);
		const s = a.length != t.length;
		if (t.length < r) {
			if (t.length >= 2) {
				return LocalizeReact(
					`#MessageReaction_DescriptionMany${s ? "You" : ""}`,
					a
						.slice(0, s ? 1 : 2)
						.map((e) => <J key={e.toString()} accountid={e} />),
					r - 2,
					e,
				);
			} else if (s) {
				return LocalizeReact(
					`#MessageReaction_DescriptionYouAndCount${
						r - 1 == 1 ? "" : "_Plural"
					}`,
					r - 1,
					e,
				);
			} else if (r === 1) {
				return LocalizeReact("#MessageReaction_DescriptionCountOnly", e);
			} else {
				return LocalizeReact(
					"#MessageReaction_DescriptionCountOnly_Plural",
					r,
					e,
				);
			}
		} else {
			return LocalizeReact(
				`#MessageReaction_Description${r}${s ? "You" : ""}`,
				...a.map((e) => <J key={e.toString()} accountid={e} />),
				e,
			);
		}
	})(<span className={U.ReactionName}>{strReaction}</span>, l, cReactors);
	return createPortal(
		<O.g direction="top" target={target} className={U.ReactionHover}>
			<J_1 reaction={reaction} large />
			<div className={U.HoverDescription}>{c}</div>
		</O.g>,
		target.ownerDocument.body,
	);
});
function Y(e, t) {
	const [r, setR] = useState(null);
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
			const o = lX(
				<K chat={e} msg={t} onRequestClose={() => o && o.Hide()} />,
				a,
				s,
			);
			o.SetOnHideCallback(() => setR(null));
			setR(o);
		},
	};
}
function K(e) {
	const { msg, chat, onRequestClose } = e;
	const a = (e, i) => {
		const a = e == 1 ? `:${i}:` : i;
		const s = msg.reactions.find((e) => e.strReaction === a);
		const o = !s || !s.bUserReacted;
		chat.UpdateMessageReaction(msg, e, a, o);
		onRequestClose();
	};
	return (
		<z.X6
			emoticonHoverStore={x.s}
			emoticonStore={u.xm.ChatStore.EmoticonStore}
			onEmoticonSelected={(e) => a(1, e)}
			onStickerSelected={(e) => a(2, e)}
			strFlairGroupID=""
		/>
	);
}
function X(e) {
	const { className, ...r } = e;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 36 36"
			fill="none"
			className={A_1(className, U.AddReactionIcon)}
			{...r}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z"
			/>
		</svg>
	);
}
function J(e) {
	const t = q3(() => u.xm.FriendStore.GetPlayer(e.accountid).display_name);
	return <span className={U.ReactorName}>{t}</span>;
}
function Ae_1(e) {
	const { reason } = e;
	let r;
	r =
		reason == 2
			? Localize("#Friend_Chat_CommunityBanned")
			: Localize("#Friend_Chat_Blocked");
	return (
		<div className="msg">
			<div className="msgText MessageFromBlockedUser">{r}</div>
		</div>
	);
}
let Se_1 = PA((e) => (
	<E.Rg friend={e.player} context={e.context}>
		<span>{e.player.display_name}</span>
	</E.Rg>
));
let Oe_1 = class extends i.Component {
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
			if (n.includes(s.unServerMsgParamAccountID)) {
				continue;
			}
			if (r.length > 0) {
				r.push(", ");
			}
			let e = u.xm.FriendStore.GetPlayer(s.unServerMsgParamAccountID);
			r.push(<Se_1 context={t} player={e} />);
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
		let o = <Se_1 context={t} player={s} />;
		let l = "";
		if (r.length > 1) {
			let e = <>{...r}</>;
			l = LocalizeReact("#ChatRoom_ServerMessage_Invited_Multiple", e, o);
		} else {
			l = LocalizeReact("#ChatRoom_ServerMessage_Invited", r[0], o);
		}
		return (
			<M.xh style="server">
				<div className="msg serverMsg">
					<div className="msgText">{a ? l : "\xA0"}</div>
				</div>
			</M.xh>
		);
	}
};
Oe_1 = Cg([o.PA], Oe_1);
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
			if (n.includes(s.unServerMsgParamAccountID)) {
				continue;
			}
			if (r.length > 0) {
				r.push(Localize("#ChatRoom_ServerMessageMultiple_Separator"));
			}
			let e = u.xm.FriendStore.GetPlayer(s.unServerMsgParamAccountID);
			r.push(<Se_1 context={t} player={e} />);
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
			let t = <>{...r}</>;
			s = LocalizeReact(`${this.props.tokenPrefix}_Multiple`, t, e);
		} else {
			s = LocalizeReact(this.props.tokenPrefix, r[0]);
		}
		return <Ce_1>{a ? s : "\xA0"}</Ce_1>;
	}
};
le = Cg([o.PA], le);
const Ce_1 = ({ children }) => (
	<M.xh style="server">
		<div className="msg serverMsg">
			<div className="msgText">{children}</div>
		</div>
	</M.xh>
);
async function me(e, t, r) {
	if (r.length == 0) {
		return;
	}
	const n = r.length > 1;
	let i = r[0].unAccountID;
	let a = u.xm.FriendStore.GetPlayer(i).primary_display_name;
	let s = Localize(
		n ? "#Chat_Actions_DeleteChatMessages" : "#Chat_Actions_DeleteChatMessage",
	);
	let o = Localize(
		n
			? "#Chat_Actions_DeleteChatMessages_Confirm"
			: "#Chat_Actions_DeleteChatMessage_Confirm",
		a,
	);
	let l = Localize("#Chat_Actions_Delete");
	if (!(await WQ(e, s, o, l))) {
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
	o = Localize(m, a);
	Ic(e, s, o);
}
function Ue_1(e) {
	const { elMessage, msg, chatView, fnCloseContextMenu } = e;
	const r_unAccountID = msg.unAccountID;
	let o;
	if (chatView.chat instanceof _.d) {
		o = chatView.chat;
	}
	const l = [];
	const c = qf(elMessage);
	const m = c.getSelection();
	const u = m && m.rangeCount > 0 && m.toString().length > 0;
	let d;
	d =
		document.queryCommandEnabled("copy") || u
			? () => {
					c.document.execCommand("copy");
				}
			: () => pM(elMessage);
	l.push(
		<ee.kt key="copy" onSelected={d}>
			{Localize("#ContextMenu_Copy")}
		</ee.kt>,
	);
	l.push(
		<ee.kt
			key="select"
			onSelected={() => c.getSelection().selectAllChildren(elMessage)}
		>
			{Localize("#Chat_Actions_Select_Message")}
		</ee.kt>,
	);
	l.push(
		<ee.Vs key="react" label={Localize("#Chat_Actions_React")}>
			<K
				chat={chatView.chat}
				msg={msg}
				onRequestClose={() => fnCloseContextMenu()}
			/>
		</ee.Vs>,
	);
	if (o && o.BCanDeleteMemberMessages(r_unAccountID)) {
		l.push(
			<ee.kt key="delete" onSelected={() => me(c, o, [msg])}>
				{Localize("#Chat_Actions_Delete")}
			</ee.kt>,
		);
	}
	return <ee.tz>{l}</ee.tz>;
}
function de(e, t) {
	return i.useCallback(
		(r, n) => {
			const a = lX(
				<Ue_1
					elMessage={r.currentTarget}
					msg={e}
					chatView={t}
					fnCloseContextMenu={() => a?.Hide()}
				/>,
				r,
				n,
			);
			return a;
		},
		[e, t],
	);
}
const Ae = PA((e) => {
	const { msg, speakerWidth, chatView, onUpdate, children, extraClassName } = e;
	const l = Qn();
	const CRef = useRef(0);
	const c_current = CRef.current;
	const [d, setD] = i.useState(false);
	const GRef = useRef();
	const CRef_1 = i.useRef();
	const { showPicker } = Y(chatView.chat, msg);
	const E = de(msg, chatView);
	let T = (e) =>
		E(e, {
			bOverlapHorizontal: true,
			bOverlapVertical: false,
		});
	const n_chat = chatView.chat;
	let t_strMessage = msg.strMessage;
	const F = e.hideTimeStamp || chatView.IsChatRoom();
	const G = !F && u.xm.FriendStore.GetPlayer(msg.unAccountID);
	const O = aQ(t_strMessage);
	let P;
	let L;
	if (msg.eErrorSending != f.Bm.None) {
		switch (msg.eErrorSending) {
			case f.Bm.NotFriends: {
				L = "ChatMessageErrorSending";
				P = (
					<div className="ChatMessageErrorSendingAlert">
						{Localize("#Chat_ErrorSending_NotFriends")}
					</div>
				);
				break;
			}
			case f.Bm.RateLimitExceeded: {
				L = "ChatMessageErrorSending";
				P = (
					<div className="ChatMessageErrorSendingAlert">
						{Localize("#Chat_ErrorSending_RateLimitExceeded")}
					</div>
				);
				break;
			}
			case f.Bm.NoChatPermissionInGroup: {
				L = "ChatMessageErrorSendingPermissionDenied";
				P = (
					<div className="ChatMessageErrorPermissionDeniedAlert">
						<p.c_I />
						{Localize("#Chat_ErrorPermissionDenied")}
					</div>
				);
				break;
			}
			case f.Bm.Generic:
			default: {
				L = "ChatMessageErrorSending";
				P = (
					<div className="ChatMessageErrorSendingAlert">
						{Localize("#Chat_ErrorSending")}
					</div>
				);
			}
		}
	}
	const z = A_1(
		"msg",
		_D.MsgWithAddons,
		extraClassName,
		L,
		{
			isCurrentUser: n_chat.self.accountid === msg.unAccountID,
			HasTimeStamp: !F,
			EmojiOnly: y.tV(t_strMessage),
		},
		d && "RevealSpoiler",
	);
	const x = {
		width: speakerWidth ? `${speakerWidth}px` : undefined,
	};
	const U = {
		chat: n_chat,
		unAccountIDSender: msg.unAccountID,
		rtTimestamp: msg.rtTimestamp,
		key: msg.UniqueKey(),
		onLoad: onUpdate,
		bUseLargeEmoticons: aQ(t_strMessage),
		bAnimate: msg.eAnimationState === f.oO.Animating,
		onAnimationStart: () => CRef.current++,
		onAnimationEnd: () => {
			if (c_current) {
				CRef.current--;
			}
			if (!CRef.current) {
				e.msg.OnAnimationEnd();
			}
		},
	};
	t_strMessage = n_chat.ChatStore.TextFilterStore.FilterText(
		msg.unAccountID,
		t_strMessage,
	);
	const W = t_strMessage.includes("[spoiler]");
	const H = children || (
		<v.wr bbcode={t_strMessage} context={U} parser={n_chat.GetBBCodeParser()} />
	);
	const j = A_1("msgText", {
		MsgNoUserContent: !msg.HasUserContent(),
		EmoticonOnly: O,
	});
	let q;
	let Q = {
		onMenuButton: (e) => {
			T(e);
		},
		onMenuActionDescription: Localize("#Chat_MessageContextMenu"),
	};
	if (!l) {
		Q = {
			...Q,
			onOKButton: (e) => showPicker(e),
			onOKActionDescription: Localize("#Chat_Actions_React"),
		};
	}
	if (e.chatView.chat instanceof _.d) {
		q = e.chatView.chat;
	}
	if (q && q.BCanDeleteMemberMessages(e.msg.unAccountID)) {
		Q.onSecondaryButton = (t) => {
			me(GetOwningWindowForEvent(t), q, [e.msg]);
		};
		Q.onSecondaryActionDescription = Localize("#Chat_Actions_Delete");
	}
	return (
		<S.Z
			className={z}
			navRef={CRef_1}
			focusableIfNoChildren
			onContextMenu={E}
			onSecondaryButton={W ? () => setD(!d) : undefined}
			onSecondaryActionDescription={
				W ? Localize(d ? "#Hide_Spoiler" : "#Reveal_Spoiler") : undefined
			}
			{...Q}
		>
			{!F && (
				<Ce className="FriendChatTimeStamp" friend={G} style={x}>
					<w.EO rtime={msg.rtTimestamp} bTimeOnly />
				</Ce>
			)}
			{P}
			<M.xh>
				<div className={j} ref={GRef}>
					{H}
				</div>
			</M.xh>
			<V msg={msg} chat={n_chat} />
			<Pe_1 msg={msg} chat={n_chat} onShowContextMenu={T} />
		</S.Z>
	);
});
const Pe_1 = PA((e) => {
	const { msg, chat } = e;
	const { bOpen, showPicker } = Y(chat, msg);
	const { bOpen: bOpen_1, showContextMenu } = ((e) => {
		const [t, setT] = useState(null);
		const n = (n) => {
			if (t) {
				return;
			}
			let i = e(n);
			i.SetOnHideCallback(() => setT(null));
			setT(i);
		};
		return {
			bOpen: !!t,
			showContextMenu: n,
		};
	})(e.onShowContextMenu);
	let l;
	let c = bOpen || bOpen_1;
	if (chat instanceof _.d) {
		l = chat;
	}
	let m = null;
	if (l && l.BCanDeleteMemberMessages(msg.unAccountID)) {
		m = (t) => {
			me(GetOwningWindowForEvent(t), l, [e.msg]);
		};
	}
	return (
		<div className={A_1(_D.Addons, c && _D.Open)}>
			<X className={_D.Emoticon} onClick={showPicker} />
			{m && <Ge_1 className={_D.Emoticon} onClick={m} />}
			<He_1 className={_D.Emoticon} onShowContextMenu={showContextMenu} />
		</div>
	);
});
function Ge_1(e) {
	const { className, onClick, ...n } = e;
	return (
		<div className={className} onClick={onClick}>
			<p.PRY />
		</div>
	);
}
function He_1(e) {
	const { className, ...r } = e;
	return (
		<div className={className} onClick={e.onShowContextMenu}>
			<p.h28 />
		</div>
	);
}
let Ce = PA((e) => {
	const t = e.friend.persona;
	let r = false;
	if (t.m_broadcastAccountId) {
		r = true;
	}
	const n = A_1(
		e.className,
		(t.is_ingame ? "ingame" : t.is_online && "online") || "offline",
		{
			away: t.is_awayOrSnooze,
			watchingbroadcast: r,
		},
	);
	return (
		<div className={n} style={e.style}>
			{e.children}
		</div>
	);
});
const _e = (e) => {
	const t = R7();
	const r = _k(t.ownerWindow);
	const n = !u_1(r, te.m);
	return <Fe_1 bInOverlay={n} {...e} />;
};
let Fe_1 = class extends i.Component {
	GetChatRoomSpeakerClass(e) {
		let e_persona = e.persona;
		if (e_persona.is_ingame) {
			return _D.SpeakerName_InGame;
		} else if (e_persona.m_broadcastAccountId) {
			return _D.SpeakerName_WatchingBroadcast;
		} else if (e_persona.is_online) {
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
				default: {
					break;
				}
				case 30: {
					r = "Moderator";
					break;
				}
				case 40: {
					r = "Officer";
					break;
				}
				case 50: {
					r = "Owner";
					if (!a.GetGroup().BIsClanChatRoom()) {
						e = (
							<div className="rankIcon rankOwner">
								<p.OeC />
							</div>
						);
					}
				}
			}
			if (a.GetGroup().BIsClanChatRoom()) {
				if (n >= 40) {
					e = (
						<div className="rankIcon rankOwner">
							<img
								src={`${B.TS.COMMUNITY_CDN_URL}public/images/skin_1/comment_modindicator_officer.png`}
							/>
						</div>
					);
				} else if (n >= 30) {
					e = (
						<div className="rankIcon rankOwner">
							<img
								src={`${B.TS.COMMUNITY_CDN_URL}public/images/skin_1/comment_modindicator_moderator.png`}
							/>
						</div>
					);
				}
			}
		} else {
			r = "";
		}
		n = `speakerName ${this.GetChatRoomSpeakerClass(t)}`;
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
		return (
			<M.xh
				style="speaker allow-embedded-newlines"
				text={[
					`[${j_1(this.props.msg.rtTimestamp, {
						bIncludeWeekday: false,
					})}]`,
					`${t.primary_display_name}:`,
				]}
			>
				<div
					ref={this.props.refFocus}
					className={`ChatSpeaker ChatRoomSpeaker SpeakerLineBreak${
						t.accountid == this.props.chatView.chat.self.accountid
							? " isCurrentUser"
							: ""
					}`}
				>
					<Ce friend={t} className="speaker">
						<E.Rg friend={t} context={this.props.friendRenderContext}>
							<div className={`speakerHoverArea ${r}`}>
								{e}
								<N.xz
									loopDuration={l && c ? "Medium" : "None"}
									className={a}
									persona={t.persona}
									animatedAvatar={s}
									avatarFrame={o}
									size="Small"
									bLimitProfileFrameAnimationTime={!l || !c}
								/>
								<div className="speakerStatus" />
								<div className={n}>
									{t.primary_display_name}
									{!t.is_display_name_nickname &&
										t.has_secondary_display_name && (
											<span className="playerNickname">
												{" ("}
												{t.secondary_display_name})
											</span>
										)}
									{t.is_display_name_nickname && (
										<span
											className="playerNicknameBracket"
											title={Localize("#isNickname")}
										>
											*
										</span>
									)}
								</div>
							</div>
						</E.Rg>
						<div className="speakerTimeStamp">
							<w.EO rtime={this.props.msg.rtTimestamp} bTimeOnly={false} />
						</div>
					</Ce>
				</div>
			</M.xh>
		);
	}
};
Fe_1 = Cg([o.PA], Fe_1);
const Be_1 = PA((e) => {
	const { onUpdate, msg, chatView, speakerWidth } = e;
	const s = i.useCallback(
		() => onUpdate(`ChatMessageSlashEmote ${msg.UniqueKey()}`),
		[onUpdate, msg],
	);
	const o = de(msg, chatView);
	const n_chat = chatView.chat;
	const c = u.xm.FriendStore.GetPlayer(msg.unAccountID);
	const m = msg.strMessage.slice(msg.strMessage.search(/\s/g) + 1);
	const d = A_1(
		"speaker",
		c.persona.is_ingame ? "ingame" : c.persona.is_online ? "online" : "offline",
	);
	const A = {
		width: speakerWidth ? `${speakerWidth}px` : undefined,
	};
	const p = A_1(
		"msg",
		_D.MsgWithAddons,
		"ChatMsgSlashEmote",
		"ChatRoomSlashEmote",
		{
			isCurrentUser: n_chat.self.accountid === msg.unAccountID,
			ChatMessageErrorSending: msg.eErrorSending != f.Bm.None,
		},
	);
	return (
		<div className={p} onContextMenu={o}>
			{msg.eErrorSending != f.Bm.None && (
				<div className="ChatMessageErrorSendingAlert">
					{Localize("#Chat_ErrorSending")}
				</div>
			)}
			<div
				className={`SpeakerLineBreak${
					msg.unAccountID == n_chat.self.accountid ? " isCurrentUser" : ""
				}`}
			>
				<div className={d}>
					<E.Rg
						friend={c}
						context={{
							chat: n_chat,
							chatContext: "message",
						}}
					>
						<div className="speakerHoverArea">
							<img
								className="avatar speakerAvatar"
								src={c.persona.avatar_url}
								onLoad={s}
							/>
							<div className="speakerStatus" />
							<M.xh
								style="speaker allow-embedded-newlines"
								text={[
									`[${j_1(msg.rtTimestamp, {
										bIncludeWeekday: false,
									})}]`,
									`${c.display_name}:`,
								]}
							>
								<div className="speakerName" style={A}>
									{c.display_name}
								</div>
							</M.xh>
						</div>
					</E.Rg>
					<M.xh style="force-display append-innertext" text="/me">
						<div className="msgText">
							<v.wr
								bbcode={m}
								context={{
									chat: n_chat,
									unAccountIDSender: msg.unAccountID,
									rtTimestamp: msg.rtTimestamp,
									onUpdate: onUpdate,
								}}
								parser={n_chat.GetBBCodeParser()}
							/>
						</div>
					</M.xh>
					<div className="speakerTimeStamp">
						<w.EO rtime={msg.rtTimestamp} bTimeOnly={false} />
					</div>
				</div>
			</div>
			<V msg={msg} chat={n_chat} />
			<Pe_1
				msg={msg}
				chat={n_chat}
				onShowContextMenu={(e) =>
					o(e, {
						bOverlapHorizontal: true,
						bOverlapVertical: false,
					})
				}
			/>
		</div>
	);
});
let ye = class extends i.Component {
	render() {
		return (
			<Ae {...this.props} extraClassName="ChatMessageDeleted">
				<div className="msgText">
					<span className="filteredURL bb_removedlink">
						{Localize("#Chat_MessageDeleted")}
					</span>
				</div>
			</Ae>
		);
	}
};
ye = Cg([o.PA], ye);
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
			return (
				<Ce_1>
					<v.wr
						bbcode={this.props.msg.strServerMsgAppCustomLocalized}
						context={r}
						parser={t.chat.GetBBCodeParser()}
					/>
				</Ce_1>
			);
		}
		{
			const r = ((e) => {
				switch (e.eServerMsgType) {
					case 1: {
						let t = u.xm.FriendStore.GetPlayer(e.unAccountID);
						return {
							strToken: "#ChatRoom_ServerMessage_RenameChatRoom",
							parts: [e.strServerMsgParam, t],
						};
					}
					case 2: {
						return {
							strToken: "#ChatRoom_ServerMessage_Joined",
							parts: [u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID)],
						};
					}
					case 3: {
						return {
							strToken: "#ChatRoom_ServerMessage_Parted",
							parts: [u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID)],
						};
					}
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
					case 10: {
						return {
							strToken: "#ChatRoom_ServerMessage_ChatRoomAvatarChanged",
							parts: [u.xm.FriendStore.GetPlayer(e.unAccountID)],
						};
					}
					case 5: {
						return {
							strToken: "#ChatRoom_ServerMessage_Invited",
							parts: [
								u.xm.FriendStore.GetPlayer(e.unServerMsgParamAccountID),
								u.xm.FriendStore.GetPlayer(e.unAccountID),
							],
						};
					}
					default: {
						return {
							strToken: "#ChatRoom_ServerMessage_Unhandled",
							parts: [],
						};
					}
				}
			})(e);
			const n = r.parts.length
				? ((e, t, ...r) => {
						let n = [];
						for (let t of r) {
							if (t instanceof I.$c) {
								n.push(<Se_1 context={e} player={t} />);
							} else {
								n.push(t);
							}
						}
						return LocalizeReact(t, ...n);
					})(t, r.strToken, ...r.parts)
				: Localize(r.strToken);
			return <Ce_1>{n}</Ce_1>;
		}
	}
};
Se = Cg([o.PA], Se);
let We = class extends i.Component {
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
		return (
			<Ce_1>
				<v.wr
					bbcode={e.strMessage}
					context={r}
					parser={t.chat.GetBBCodeParser()}
				/>
			</Ce_1>
		);
	}
};
We = Cg([o.PA], We);
let Be = class extends i.Component {
	render() {
		return (
			<M.xh style="invite" text={this.props.msg.strMessage}>
				<div className="msg">
					<div className="msg voiceChannelInvite">
						{this.props.msg.strMessage}
					</div>
					<div className="msg voiceChannelInviteClear" />
				</div>
			</M.xh>
		);
	}
};
Be = Cg([o.PA], Be);
let Ee = class extends i.Component {
	componentDidUpdate() {
		this.props.onUpdate(
			`ChatMessageBlocks ${this.props.chatView.GetUniqueID()}`,
		);
	}
	renderBlock(e) {
		const t = this.props;
		const { chatView } = this.props;
		const n = chatView.chat.chat_message_blocks;
		const a = !chatView.IsChatRoom() && n.time_passes_index;
		const s = chatView.IsChatRoom()
			? chatView.chat.first_unread_msg_time
			: g.ME;
		const o = n.message_blocks[e];
		const l = e == 0 ? g.ME : n.message_blocks[e - 1].GetRTimeLastMessage();
		if (s && l <= s && o.GetRTimeLastMessage() > s) {
			let r;
			let n = o;
			if (s > o.GetRTimeFirstMessage()) {
				[r, n] = o.CreateVirtualSplitOnTimestamp(s);
				w_1(r.messages.length, "No messages in prefix");
			}
			let l = s;
			return (
				<i.Fragment key={o.UniqueKey()}>
					{r && (
						<Me
							{...t}
							block={r}
							bIsInitialBlock={e === 0}
							bShowTimePasses={e === a}
						/>
					)}
					<De rtTimestamp={l} bUnread />
					{n.messages.length > 0 && (
						<Me
							{...t}
							block={n}
							bIsInitialBlock={false}
							bShowTimePasses={false}
						/>
					)}
				</i.Fragment>
			);
		}
		return (
			<Me
				{...t}
				key={o.UniqueKey()}
				block={o}
				bIsInitialBlock={e === 0}
				bShowTimePasses={e === a}
			/>
		);
	}
	render() {
		this.props;
		const { chatView } = this.props;
		return chatView.chat.chat_message_blocks.message_blocks.map((e, t) =>
			this.renderBlock(t),
		);
	}
};
Ee = Cg([o.PA], Ee);
let Me = class extends i.Component {
	componentDidUpdate() {
		if (this.props.block.is_last_block) {
			this.props.onUpdate(`ChatMessageBlock ${this.props.block.UniqueKey()}`);
		}
	}
	render() {
		let e;
		let t;
		let { block, bIsInitialBlock, bShowTimePasses, ...s } = this.props;
		let s_friendRenderContext = s.friendRenderContext;
		let r_messages = block.messages;
		if (block.BIsInvite()) {
			e = (
				<Oe_1
					messages={r_messages}
					friendRenderContext={s_friendRenderContext}
				/>
			);
		} else if (block.BIsServerMsg()) {
			e = <Ne block={block} friendRenderContext={s_friendRenderContext} />;
		} else if (block.BIsLocalMsg()) {
			e = <Fe block={block} friendRenderContext={s_friendRenderContext} />;
		} else if (r_messages.length) {
			e = (
				<Re
					{...s}
					messages={r_messages}
					bLastMessageBlock={block.is_last_block}
				/>
			);
		}
		if (block.is_last_block) {
			let e = u.xm.GetLocalMidnightInRTime32();
			if (block.GetRTimeMidnightBeforeBlock() != e) {
				t = <De rtTimestamp={e} />;
			}
		} else if (
			block.GetRTimeMidnightBeforeBlock() !=
			block.GetRTimeMidnightBeforeNextBlock()
		) {
			t = <De rtTimestamp={block.GetRTimeMidnightBeforeNextBlock()} />;
		}
		return (
			<>
				{bIsInitialBlock && r_messages.length > 0 && <Te msg={r_messages[0]} />}
				{bShowTimePasses && (
					<De rtTimestamp={r_messages[0].rtTimestamp} bTimePassesLine />
				)}
				{e}
				{t}
			</>
		);
	}
};
function Te(e) {
	if (e.msg.rtTimestamp < u.xm.GetLocalMidnightInRTime32()) {
		return <De rtTimestamp={e.msg.rtTimestamp} />;
	} else {
		return null;
	}
}
Me = Cg([o.PA], Me);
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
		pM(this.m_element.current);
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
		const a = GetOwningWindowForEvent(e);
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
			<ee.kt key="copy" onSelected={l}>
				{Localize("#ContextMenu_Copy")}
			</ee.kt>,
		);
		n.push(
			<ee.kt
				key="select"
				onSelected={() => {
					this.SelectMessage(a);
				}}
			>
				{Localize("#Chat_Actions_Select_Message")}
			</ee.kt>,
		);
		if (t && t.BCanDeleteMemberMessages(r)) {
			n.push(
				<ee.kt
					key="delete"
					onSelected={() => {
						me(a, t, this.props.messages);
					}}
				>
					{Localize("#Chat_Actions_Delete")}
				</ee.kt>,
			);
		}
		if (n.length) {
			return lX(<ee.tz>{n}</ee.tz>, e);
		} else {
			return null;
		}
	}
	componentDidMount() {
		const { chatView } = this.props;
		const t = this.props.messages[0].unAccountID;
		if (chatView instanceof C.CF && chatView.virtualizer) {
			chatView.virtualizer.SubscribeToPersona(t);
		}
	}
	componentDidUpdate(e) {
		const { chatView } = this.props;
		if (
			e.messages[0].unAccountID !== this.props.messages[0].unAccountID &&
			chatView instanceof C.CF &&
			chatView.virtualizer
		) {
			chatView.virtualizer.UnsubscribeFromPersona(e.messages[0].unAccountID);
			chatView.virtualizer.SubscribeToPersona(
				this.props.messages[0].unAccountID,
			);
		}
	}
	componentWillUnmount() {
		const { chatView } = this.props;
		if (chatView instanceof C.CF && chatView.virtualizer) {
			chatView.virtualizer.UnsubscribeFromPersona(
				this.props.messages[0].unAccountID,
			);
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
						c.push(<Be_1 {...m} />);
					} else if (o instanceof f.$G) {
						e = false;
						c.push(<Be {...m} />);
					} else {
						c.push(<Ae {...m} speakerWidth={this.props.speakerWidth} />);
					}
				}
			}
		} else {
			c.push(<Ae_1 reason={l} key="blocked" />);
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
			return (
				<M.xh>
					<S.Z
						ref={this.m_element}
						className={o}
						onContextMenu={this.OnMessageBlockContextMenu}
						scrollIntoViewWhenChildFocused
						fnScrollIntoViewHandler={this.ScrollIntoViewHandler}
						navEntryPreferPosition={Ie.iU.LAST}
						flow-children="column"
					>
						{e && (
							<_e
								refFocus={this.m_refSpeaker}
								friend={a}
								chatView={this.props.chatView}
								msg={this.props.messages[0]}
								friendRenderContext={this.props.friendRenderContext}
								key="speaker"
								speakerWidth={this.props.speakerWidth}
								onUpdate={this.props.onUpdate}
							/>
						)}
						{c}
					</S.Z>
				</M.xh>
			);
		}
	}
};
Cg([a.oI], Re.prototype, "OnHoverDelete", null);
Cg([a.oI], Re.prototype, "CopyMessage", null);
Cg([a.oI], Re.prototype, "SelectMessage", null);
Cg([a.oI], Re.prototype, "OnMessageBlockContextMenu", null);
Cg([a.oI], Re.prototype, "ScrollIntoViewHandler", null);
Re = Cg([o.PA], Re);
class ke extends i.Component {
	OnMouseEnter() {
		this.props.onHover(true);
	}
	OnMouseLeave() {
		this.props.onHover(false);
	}
	OnDeleteMessages(e) {
		me(GetOwningWindowForEvent(e), this.props.chatRoom, this.props.messages);
	}
	render() {
		return (
			<div
				className="ChatMessageBlockDelete"
				onMouseEnter={this.OnMouseEnter}
				onMouseLeave={this.OnMouseLeave}
				onClick={this.OnDeleteMessages}
				title={Localize("#Chat_Actions_Delete")}
			>
				<p.lMJ />
			</div>
		);
	}
}
Cg([a.oI], ke.prototype, "OnMouseEnter", null);
Cg([a.oI], ke.prototype, "OnMouseLeave", null);
Cg([a.oI], ke.prototype, "OnDeleteMessages", null);
class De extends i.Component {
	shouldComponentUpdate(e) {
		return (
			e.rtTimestamp !== this.props.rtTimestamp ||
			e.bUnread !== this.props.bUnread ||
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
			e = Localize(
				"#ChatRoom_New_Messages",
				t.toLocaleDateString(LocalizationManager.GetPreferredLocales(), n),
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
			e = t.toLocaleDateString(LocalizationManager.GetPreferredLocales(), r);
		}
		return (
			<M.xh style="timestamp" text={e}>
				<div className={r.join(" ")}>
					<div className="preHorizDivider" />
					{e}
					<div className="horizDivider" />
				</div>
			</M.xh>
		);
	}
}
const Ne = (e) => {
	const { block, friendRenderContext } = e;
	const n = block.messages.reduce((e, t) => {
		if (!e.length) {
			e.push([t]);
			return e;
		}
		const r = e[e.length - 1];
		const [n] = r;
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
	return (
		<>
			{n.map((e) =>
				Ge(e[0]) ? (
					<Oe
						key={e[0].UniqueKey()}
						messages={e}
						friendRenderContext={friendRenderContext}
					/>
				) : (
					e.map((e) => (
						<Se
							msg={e}
							key={e.UniqueKey()}
							friendRenderContext={friendRenderContext}
						/>
					))
				),
			)}
		</>
	);
};
const Fe = (e) => {
	const { block, friendRenderContext } = e;
	return (
		<>
			{block.messages.map((e) => (
				<We
					msg={e}
					key={e.UniqueKey()}
					friendRenderContext={friendRenderContext}
				/>
			))}
		</>
	);
};
const Ge = (e) => e.eServerMsgType === 2 || e.eServerMsgType === 3;
const Oe = (e) => {
	const { messages, friendRenderContext } = e;
	const { rgLeavers, rgJoiners } = messages.reduce(
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
	if (!rgLeavers.length && !rgJoiners.length) {
		return null;
	}
	let s;
	s =
		rgLeavers.length === 0
			? rgJoiners.length > 2
				? LocalizeReact(
						"#ChatRoom_ServerMessage_Joined_Number",
						<Le accountids={rgJoiners} />,
					)
				: rgJoiners.length === 2
					? LocalizeReact(
							"#ChatRoom_ServerMessage_Joined_Multiple",
							<Pe context={friendRenderContext} accountid={rgJoiners[0]} />,
							<Pe context={friendRenderContext} accountid={rgJoiners[1]} />,
						)
					: LocalizeReact(
							"#ChatRoom_ServerMessage_Joined",
							<Pe context={friendRenderContext} accountid={rgJoiners[0]} />,
						)
			: rgJoiners.length === 0
				? rgLeavers.length > 2
					? LocalizeReact(
							"#ChatRoom_ServerMessage_Parted_Number",
							<Le accountids={rgLeavers} />,
						)
					: rgLeavers.length === 2
						? LocalizeReact(
								"#ChatRoom_ServerMessage_Parted_Multiple",
								<Pe context={friendRenderContext} accountid={rgLeavers[0]} />,
								<Pe context={friendRenderContext} accountid={rgLeavers[1]} />,
							)
						: LocalizeReact(
								"#ChatRoom_ServerMessage_Parted",
								<Pe context={friendRenderContext} accountid={rgLeavers[0]} />,
							)
				: rgLeavers.length === 1 && rgJoiners.length === 1
					? LocalizeReact(
							"#ChatRoom_ServerMessage_SingleJoined_SingleParted",
							<Pe context={friendRenderContext} accountid={rgJoiners[0]} />,
							<Pe context={friendRenderContext} accountid={rgLeavers[0]} />,
						)
					: rgLeavers.length === 1
						? LocalizeReact(
								"#ChatRoom_ServerMessage_MultipleJoined_SingleParted",
								<Le accountids={rgJoiners} />,
								<Pe context={friendRenderContext} accountid={rgLeavers[0]} />,
							)
						: rgJoiners.length === 1
							? LocalizeReact(
									"#ChatRoom_ServerMessage_SingleJoined_MultipleParted",
									<Pe context={friendRenderContext} accountid={rgJoiners[0]} />,
									<Le accountids={rgLeavers} />,
								)
							: LocalizeReact(
									"#ChatRoom_ServerMessage_MultipleJoined_MultipleParted",
									<Le accountids={rgJoiners} />,
									<Le accountids={rgLeavers} />,
								);
	return <Ce_1>{s}</Ce_1>;
};
const Pe = PA((e) => {
	const { context, accountid } = e;
	const n = u.xm.FriendStore.GetPlayer(accountid);
	return (
		<E.Rg friend={n} context={context}>
			<span>{n.display_name}</span>
		</E.Rg>
	);
});
const Le = PA((e) => {
	const { accountids } = e;
	const r = accountids.map((e) => u.xm.FriendStore.GetPlayer(e));
	return (
		<span title={r.map((e) => e.display_name).join(", ")}>{r.length}</span>
	);
});
export let D = class extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
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
			const { scrollHeight, clientHeight } = this.m_elHistoryScroll;
			return {
				scrollTop: this.GetScrollTop(),
				scrollHeight: scrollHeight,
				clientHeight: clientHeight,
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
		const { scrollTop, scrollHeight, clientHeight } = this.GetScrollInfo();
		let { lastScrollTop, lastScrollHeight, lastClientHeight } =
			this.props.chatView;
		this.LOG(
			`${e}: scrolltop ${scrollTop} scrollHeight ${scrollHeight} clientHeight ${clientHeight}, was scrollTop ${lastScrollTop} scrollHeight ${lastScrollHeight} clientHeight ${lastClientHeight} `,
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
		const { scrollTop, scrollHeight, clientHeight } = this.GetScrollInfo();
		let { lastScrollTop, lastScrollHeight, lastClientHeight } = e;
		this.LogScrollInfo("OnScroll");
		if (clientHeight == 0) {
			this.LOG("Onscroll zero clientHeight, ignoring");
			return;
		}
		let o = scrollHeight - scrollTop <= clientHeight;
		let l = lastScrollHeight - lastScrollTop <= lastClientHeight;
		w_1(
			l == e.is_scrolled_to_bottom,
			`${e.GetUniqueID()}: computed and stored at bottom don't match`,
		);
		this.LOG("bAtBottom", o, "bWasAtBottom", l);
		let c = scrollTop;
		if (l && lastScrollTop - c == 1) {
			this.LOG(
				"*** Scroll position off by one while pinned, ignoring and setting scrollTop to",
				lastScrollTop,
			);
			c = lastScrollTop;
		}
		if (
			o ||
			(l && scrollHeight != lastScrollHeight) ||
			(c < lastScrollTop && l && Date.now() < this.m_nIgnoreScrollUpUntilTime)
		) {
			this.LogScrollInfo("At bottom");
			if (
				c < lastScrollTop &&
				l &&
				Date.now() < this.m_nIgnoreScrollUpUntilTime
			) {
				this.LOG(
					"**** IGNORING APPARENT SCROLL UP WHILE PINNED TO BOTTOM IN LAYOUT",
				);
			}
			c = scrollHeight - clientHeight;
			w_1(
				c >= 0,
				`${e.GetUniqueID()}: Onscroll client height bigger than scroll height`,
			);
			e.is_scrolled_to_bottom = true;
			if (c != scrollTop) {
				this.LOG("Setting scrollTop to", c);
				this.m_elHistoryScroll.scrollTop = c;
			}
		} else if (clientHeight < lastClientHeight && l) {
			this.LogScrollInfo("Shrinking window while pinned to bottom");
			c = scrollHeight - clientHeight;
			e.is_scrolled_to_bottom = true;
			if (c != scrollTop) {
				this.LOG("Setting scrollTop to", c);
				this.m_elHistoryScroll.scrollTop = c;
			}
		} else if (c < lastScrollTop) {
			this.LogScrollInfo("Detected scroll up");
			e.is_scrolled_to_bottom = o;
		} else if (c != lastScrollTop) {
			this.LogScrollInfo("Detected scroll down but not to bottom");
			e.is_scrolled_to_bottom = false;
		}
		e.lastScrollTop = c;
		e.lastScrollHeight = scrollHeight;
		e.lastClientHeight = clientHeight;
		let m =
			e.is_scrolled_to_bottom !=
			e.lastScrollHeight - e.lastScrollTop <= e.lastClientHeight;
		if (m) {
			w_1(!m, `${e.GetUniqueID()}: setting mismatched computed and stored`);
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
		const { scrollHeight, clientHeight } = this.GetScrollInfo();
		this.LogScrollInfo("ScrollToBottom");
		const r = scrollHeight - clientHeight;
		w_1(
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
		const { chatView } = this.props;
		const e_chat = chatView.chat;
		if (!e_chat.IsMoreHistoryAvailable()) {
			return;
		}
		if (this.m_bLoadingOperationInProgress) {
			this.LOG("noting pended load");
			this.m_bHasPendedLoadOlder = true;
			return;
		}
		let r = () =>
			e_chat.LoadMoreHistory().then((t) => {
				const { scrollHeight } = this.GetScrollInfo();
				const { lastScrollTop, lastScrollHeight } = chatView;
				const s = lastScrollTop + scrollHeight - lastScrollHeight;
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
			let { chatView } = this.props;
			let { scrollHeight, clientHeight } = this.GetScrollInfo();
			chatView.lastScrollTop = scrollHeight - clientHeight;
			chatView.lastScrollHeight = scrollHeight;
			chatView.lastClientHeight = clientHeight;
			this.m_elHistoryScroll.scrollTop = chatView.lastScrollTop;
			w_1(
				chatView.is_scrolled_to_bottom ==
					chatView.lastScrollHeight - chatView.lastScrollTop <=
						chatView.lastClientHeight,
				`${chatView.GetUniqueID()}: setting mismatched computed and stored`,
			);
		}
	}
	componentDidUpdate() {
		const { chatView } = this.props;
		this.UpdateChatViewCallback();
		const { scrollTop, scrollHeight, clientHeight } = this.GetScrollInfo();
		const { lastScrollTop, lastScrollHeight } = chatView;
		if (clientHeight == 0) {
			this.LOG("componentDidUpdate clientHeight == 0, ignoring");
			return;
		}
		let s = scrollTop;
		if (scrollHeight == lastScrollHeight) {
			s = lastScrollTop;
		} else if (scrollHeight - scrollTop <= clientHeight) {
			s = scrollHeight - clientHeight;
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
		const { scrollHeight, clientHeight } = this.GetScrollInfo();
		const { lastScrollTop, lastScrollHeight, lastClientHeight } = e;
		let s;
		this.LogScrollInfo("OnFrameChanged");
		this.m_nIgnoreScrollUpUntilTime = Date.now() + 300;
		if (e.is_scrolled_to_bottom) {
			this.LOG("OnFrameChanged scrolling to bottom");
			s = scrollHeight - clientHeight;
		} else {
			this.LOG("OnFrameChanged preserving bottom");
			s =
				lastScrollTop +
				lastClientHeight +
				scrollHeight -
				lastScrollHeight -
				clientHeight;
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
		const { scrollHeight, clientHeight } = this.GetScrollInfo();
		this.LogScrollInfo(`OnUpdate for ${e}`);
		this.LOG("Scrolled to bottom is", t.is_scrolled_to_bottom);
		if (scrollHeight == 0) {
			this.LOG("OnUpdate zero scroll height");
		} else if (t.is_scrolled_to_bottom) {
			this.LogScrollInfo("OnUpdate currently scrolled to bottom");
			const e = scrollHeight - clientHeight;
			this.DelayedScrollTo(e);
		} else if (t.chat.BIsPrepend) {
			t.chat.ResetPrepended();
			const { lastScrollTop, lastScrollHeight, lastClientHeight } = t;
			this.LogScrollInfo("OnUpdate prepended messages");
			const s =
				lastScrollTop +
				lastClientHeight +
				scrollHeight -
				lastScrollHeight -
				clientHeight;
			this.DelayedScrollTo(s);
		} else {
			this.LogScrollInfo("OnUpdate content updated, doing nothing");
		}
	}
	OnResize() {
		const { scrollTop, scrollHeight, clientHeight } = this.GetScrollInfo();
		this.LogScrollInfo("OnResize");
		let n = scrollTop;
		if (scrollHeight - scrollTop <= clientHeight) {
			n = scrollHeight - clientHeight;
		}
		this.DelayedScrollTo(n);
	}
	Swallow(e) {
		e.stopPropagation();
		e.preventDefault();
	}
	render() {
		let { chatView, speakerLabelWidth, blockInteraction } = this.props;
		if (!chatView || chatView != this.state.chatSubscribed) {
			return null;
		}
		let e_chat = chatView.chat;
		let a = this.GetFriendRenderContext();
		let s = speakerLabelWidth && Math.max(Math.min(speakerLabelWidth, 120), 50);
		this.LOG("Render");
		e_chat.LoadChatLogs();
		let o = u.xm.SettingsStore.FriendsSettings.nChatFontSize;
		let l = "ChatHistoryContainer";
		if (o == d.ki.k_EChatFontSizeSmall) {
			l += " smallChatFont";
		} else if (o == d.ki.k_EChatFontSizeLarge) {
			l += " largeChatFont";
		}
		return (
			<xe.YZ
				className={l}
				navEntryPreferPosition={Ie.iU.LAST}
				preferredFocus
				onGamepadDirection={s1({
					bPreventMovementUp: true,
				})}
				onOKActionDescription={Localize("#Chat_SelectChatWindow")}
			>
				{blockInteraction && (
					<div className="interactionBlocker" onClick={this.Swallow} />
				)}
				{!this.context?.IN_GAMEPADUI && <ze.H />}
				{this.context?.IN_GAMEPADUI && <div className="ChatHistorySelector" />}
				<Ve chatHistory={this} chatView={chatView} />
				<div
					className="chatHistoryScroll"
					ref={this.OnHistoryScrollRef}
					onScroll={this.OnScrollEvent}
					tabIndex={0}
				>
					<div className="chatHistory">
						<Ee
							chatView={chatView}
							friendRenderContext={a}
							onUpdate={this.OnUpdate}
							speakerWidth={s}
						/>
						<div className="disconnectBlocker" />
					</div>
				</div>
				<A.ln chatView={chatView} />
				{!this.context?.IN_GAMEPADUI && (
					<He chatView={chatView} action={this.ScrollToBottom} />
				)}
				{!this.context?.IN_GAMEPADUI && <ze.P />}
			</xe.YZ>
		);
	}
};
Cg([s.sH], D.prototype, "m_bLoadHistoryInProgress", undefined);
Cg([a.oI], D.prototype, "DumpChildSizes", null);
Cg([a.oI], D.prototype, "OnHistoryScrollRef", null);
Cg([a.oI], D.prototype, "OnScrollEvent", null);
Cg([a.oI], D.prototype, "OnScroll", null);
Cg([a.oI], D.prototype, "OnRequestScrollToBottom", null);
Cg([a.oI], D.prototype, "ScrollToBottom", null);
Cg([a.oI], D.prototype, "LoadOlderMessages", null);
Cg([a.oI], D.prototype, "OnFrameChanged", null);
Cg([a.oI], D.prototype, "OnUpdate", null);
Cg([a.oI], D.prototype, "OnResize", null);
Cg([a.oI], D.prototype, "Swallow", null);
D = Cg([o.PA], D);
let Ve = class extends i.Component {
	render() {
		let e = "LoadingOlderMessages";
		if (!this.props.chatHistory.m_bLoadHistoryInProgress) {
			e += " Hidden";
		}
		return (
			<div className={e}>
				<span>{Localize("#Chat_Loading")}</span>
			</div>
		);
	}
};
Ve = Cg([o.PA], Ve);
let He = class extends i.Component {
	render() {
		let { chatView, action } = this.props;
		let r = "ScrollToBottomButton";
		if (chatView.is_scrolled_to_bottom) {
			r += " Hidden";
		}
		let n = Localize("#Chat_ScrollToBottom");
		if (chatView.chat.unread_message_count > 0) {
			n = LocalizePlural(
				"#Chat_UnreadMessages",
				chatView.chat.unread_message_count,
			);
			r += " UnreadMessages";
		}
		return (
			<div className={r} onClick={action}>
				<span>{n}</span>
			</div>
		);
	}
};
He = Cg([o.PA], He);
