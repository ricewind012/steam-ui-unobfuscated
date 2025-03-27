import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a, { CO, h8 } from "./52912.js";
import o from "./95773.js";
import l, { qj } from "./53414.js";
import { Ci } from "./78060.js";
import m, { Hf } from "./97422.js";
import u, { HT } from "./13869.js";
import { EP } from "./59704.js";
import A from "./41230.js";
import p from "./63696.js";
import { lX } from "./31084.js";
import h from "./88750.js";
import C from "./64608.js";
import f from "./52451.js";
import b from "./50376.js";
import { E5 } from "./88620.js";
import S from "./65815.js";
import { L } from "./76319.js";
import v from "./72476.js";
const w = S;
export function Tz(e, t, r) {
	let n;
	let i = CO(e);
	if (t.BIsClanChatRoom()) {
		n = o.xm.FriendStore.ClanStore.GetClan(t.GetClanID());
	}
	return lX(
		<R
			browserContext={i}
			group={t}
			clan={n}
			context={r}
			ownerWindow={GetOwningWindowForEvent(e)}
		/>,
		e,
	);
}
export function fM(e, t, r) {
	let n;
	let i = CO(e);
	if (t.GetChatGroupIDIfLoaded()) {
		n = o.xm.ChatStore.GetChatRoomGroup(t.GetChatGroupIDIfLoaded());
	}
	return lX(
		<R
			browserContext={i}
			group={n}
			clan={t}
			context={r}
			ownerWindow={GetOwningWindowForEvent(e)}
		/>,
		e,
	);
}
function M(e, t) {
	L("FindGamesToPlayWithFriends/ChatRoom");
	e.stopPropagation();
	Hf(t, CO(e));
}
function T(e, t, r, n, a) {
	if (
		i.TS.IN_CLIENT &&
		o.xm.SettingsStore.BClientHasFeatureOrOnWeb("FriendsFilter")
	) {
		let i = e < 2 || e > 8;
		return (
			<h.kt
				disabled={i}
				key={n}
				onSelected={a}
				className={w.ChatroomContextMenuDisableableItem}
			>
				{t}
				{i && (
					<div className={w.DisabledDescriptor}>{(0, Localize)(r, 2, 8)}</div>
				)}
			</h.kt>
		);
	}
	return null;
}
class R extends p.Component {
	static contextType = v.QO;
	OpenChatWindow(e) {
		if (this.props.group) {
			o.xm.UIStore.ShowAndOrActivateChatRoomGroup(
				this.props.browserContext,
				this.props.group,
				true,
			);
		} else {
			this.props.clan.OpenChatDialog(this.props.browserContext, true);
		}
	}
	ShowClanProfile(e) {
		let t;
		if (this.props.clan.BIsOGG()) {
			t = `${i.TS.COMMUNITY_BASE_URL}app/${this.props.clan.GetOGGAppID()}`;
		} else {
			let e = this.props.clan.steamid;
			t = `${i.TS.COMMUNITY_BASE_URL}gid/${e.ConvertTo64BitString()}`;
		}
		EP(e, t);
		e.stopPropagation();
	}
	FindGamesToPlay(e) {
		M(
			e,
			this.props.group.memberList.member_list.map((e) => e.accountid),
		);
	}
	LeaveChatRoomGroup(e) {
		qj(e.currentTarget.ownerDocument.defaultView, this.props.group);
	}
	render() {
		let e = [];
		let t = this.props.group;
		let r = this.props.clan;
		let n = this.props.context || {};
		let i = o.xm.FriendStore.FavoritesStore;
		let a = this.props.group.memberList.member_list.length;
		if (n.tab) {
			e.push(
				<h.kt
					key="closetab"
					onSelected={() => {
						o.xm.UIStore.CloseTab(this.props.browserContext, n.tab);
					}}
				>
					{(0, Localize)(
						this.context?.IN_GAMEPADUI
							? "#Chat_CloseTabAction_SteamDeck"
							: "#Chat_CloseTabAction",
					)}
				</h.kt>,
			);
		} else if (!n.is_chat_window) {
			e.push(
				<h.kt key="opentab" onSelected={this.OpenChatWindow}>
					{(0, Localize)("#Chat_Actions_OpenChat")}
				</h.kt>,
			);
		}
		if (r && !r.BIsOGG()) {
			e.push(
				<h.kt key="viewprofile" onSelected={this.ShowClanProfile}>
					{(0, Localize)("#Friend_Menu_ViewProfile")}
				</h.kt>,
			);
		}
		if (this.props.group.readyToRender) {
			const t = T(
				a,
				(0, Localize)("#Chat_Actions_FindGamesToPlay"),
				"#Chat_Tooltip_FindGamesToPlay_UserCountRestriction_ChatGroup",
				"findgamestoplay",
				this.FindGamesToPlay,
			);
			if (t) {
				e.push(t);
			}
		}
		e.push(
			<h.kt key="leavechatroom" onSelected={this.LeaveChatRoomGroup}>
				{(0, Localize)(
					r
						? "#Chat_Actions_LeaveChatRoom"
						: "#Chat_Actions_LeaveChatRoomGroup",
				)}
			</h.kt>,
		);
		let s = r
			? {
					clan: r,
				}
			: {
					chat: t,
				};
		if (o.xm.FriendStore.FavoritesStore.BIsFavorited(s)) {
			if (n.is_favorites) {
				e.push(
					<h.kt
						key="quickaccess"
						onSelected={() => {
							i.RemoveFromFavorites(s);
						}}
					>
						{(0, Localize)("#Friend_Menu_RemoveFromQuickAccess")}
					</h.kt>,
				);
			}
		} else {
			e.push(
				<h.kt
					key="quickaccess"
					onSelected={() => {
						i.AddToFavorites(s);
					}}
				>
					{(0, Localize)("#Friend_Menu_AddToQuickAccess")}
				</h.kt>,
			);
		}
		if (r && r.BIsOGG()) {
			e.push(<m.Rm unAppID={r.GetOGGAppID()} strGameName={r.name} />);
		}
		return (
			<h.tz className="chatRoomListItemContextMenu" label={t.name}>
				{e}
			</h.tz>
		);
	}
}
export function ae(e, t, r, n, i) {
	if (t.GetDefaultChatID() == r) {
		return null;
	}
	if (D.BIsMenuEmpty(t, r, !!i)) {
		return null;
	}
	let a = GetOwningWindowForEvent(n);
	return lX(
		<D
			browserContext={e}
			group={t}
			roomID={r}
			ownerWindow={a}
			onStartRoomRename={i}
		/>,
		n,
	);
}
Cg([f.oI], R.prototype, "OpenChatWindow", null);
Cg([f.oI], R.prototype, "ShowClanProfile", null);
Cg([f.oI], R.prototype, "FindGamesToPlay", null);
Cg([f.oI], R.prototype, "LeaveChatRoomGroup", null);
class D extends p.PureComponent {
	ShowInviteDialog() {
		let e = this.props.group.GetChatRoom(this.props.roomID);
		E5(this.props.browserContext, this.props.ownerWindow, this.props.group, e);
	}
	FindGamesToPlayInChannel(e) {
		M(
			e,
			this.props.group
				.GetChatRoom(this.props.roomID)
				.voice_active_member_list.member_list.map((e) => e.accountid),
		);
	}
	SaveVoiceRoom(e) {
		let t = GetOwningWindowForEvent(e);
		let r;
		let n;
		let i;
		r = t;
		n = this.props.group;
		i = this.props.roomID;
		HT(
			<N group={n} roomID={i} />,
			r,
			"SaveVoiceRoomDialog",
			{
				strTitle: (0, Localize)("#Chat_SaveVoiceRoom"),
				popupWidth: 664,
				popupHeight: 380,
			},
			h8(r),
		);
	}
	RemoveRoom() {
		Ci(
			this.props.ownerWindow,
			(0, Localize)("#Chat_Actions_RemoveRoom"),
			(0, Localize)("#Chat_Actions_RemoveRoom_Confirm"),
			(0, Localize)("#Chat_Actions_RemoveRoom_Action"),
		)
			.then(() => {
				let e = this.props.group;
				let t = this.props.roomID;
				e.DeleteChatRoom(t);
			})
			.catch(() => {});
	}
	ChangeRoomName() {
		this.props.onStartRoomRename(this.props.roomID);
	}
	static BIsMenuEmpty(e, t, r) {
		let n = e.GetDefaultChatID() == t;
		let i = e.BIsTempVoiceChannel(t);
		let a = e.BCanAdminChannel();
		return (
			!e.BIsVoiceChannel(t) &&
			(!i || !a) &&
			(!r || !!n || !!n || !!i || !!n || !!i || !a) &&
			(!!n || !a)
		);
	}
	render() {
		let e = [];
		let t = this.props.group;
		let r = this.props.roomID;
		let n = this.props.group.GetChatRoom(this.props.roomID);
		let i = t.GetDefaultChatID() == r;
		let a = t.BIsTempVoiceChannel(r);
		let s = t.BCanAdminChannel();
		t.BCanInvite();
		let o = n.voice_active_member_list.member_count;
		e.push(
			<h.kt key="invitefriend" onSelected={this.ShowInviteDialog}>
				{(0, Localize)("#Chat_Actions_InviteFriendtoVoice")}
			</h.kt>,
		);
		const l = T(
			o,
			(0, Localize)("#Chat_Actions_FindGamesToPlay"),
			"#Chat_Tooltip_FindGamesToPlay_UserCountRestriction_Channel",
			"findgamestoplayinchannel",
			this.FindGamesToPlayInChannel,
		);
		if (l) {
			e.push(l);
		}
		if (a) {
			e.push(
				<h.kt
					key="savechannel"
					className={s ? "" : w.ChatRoomContextNoPermission}
					onSelected={this.SaveVoiceRoom}
				>
					{!s && <b.c_I />}
					{(0, Localize)("#Chat_Actions_SaveChannel")}
				</h.kt>,
			);
		}
		if (this.props.onStartRoomRename && !i && !a && s) {
			e.push(
				<h.kt key="renameroom" onSelected={this.ChangeRoomName}>
					{(0, Localize)("#Chat_Actions_ChangeRoomName")}
				</h.kt>,
			);
		}
		if (!i && s) {
			e.push(
				<h.kt key="removeroom" onSelected={this.RemoveRoom}>
					{(0, Localize)("#Chat_Actions_RemoveRoom")}
				</h.kt>,
			);
		}
		if (e.length < 1) {
			console.log(
				"warning: empty context menu. Did someone not update BIsMenuEmpty?",
			);
			return null;
		} else {
			return (
				<h.tz className="friendsContextMenu" label={t.name}>
					{e}
				</h.tz>
			);
		}
	}
}
Cg([f.oI], D.prototype, "ShowInviteDialog", null);
Cg([f.oI], D.prototype, "FindGamesToPlayInChannel", null);
Cg([f.oI], D.prototype, "SaveVoiceRoom", null);
Cg([f.oI], D.prototype, "RemoveRoom", null);
Cg([f.oI], D.prototype, "ChangeRoomName", null);
let N = class extends p.Component {
	constructor(e) {
		super(e);
		this.state = {
			strName: "",
			strError: undefined,
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strName: e.target.value,
		});
	}
	HandleSubmit(e) {
		if (e) {
			e.preventDefault();
		}
		let t = this.state.strName;
		if (t.length != 0) {
			this.props.group.RenameRoom(this.props.roomID, t);
			this.props.closeModal();
		} else {
			this.setState({
				strError: (0, Localize)("#Chat_SaveVoiceRoom_Error_EmptyName"),
			});
		}
	}
	render() {
		return (
			<u.x_ onEscKeypress={this.props.closeModal}>
				<C.U9
					classNameContent="SaveVoiceRoomDialog"
					onSubmit={this.HandleSubmit}
				>
					<C.Y9>{(0, Localize)("#Chat_SaveVoiceRoom")}</C.Y9>
					<C.nB>
						{this.state.strError && (
							<C.a3 className="nicknameError">{this.state.strError}</C.a3>
						)}
						<C.a3>{(0, Localize)("#Chat_SaveVoiceRoom_Description")}</C.a3>
						<C.pd
							type="text"
							label={(0, Localize)("#Chat_SaveVoiceRoom_Name")}
							className="nicknameInput"
							value={this.state.strName}
							onChange={this.HandleTextEntry}
							autoFocus
						/>
					</C.nB>
					<C.wi>
						<C.CB onCancel={this.props.closeModal} />
					</C.wi>
				</C.U9>
			</u.x_>
		);
	}
};
Cg([f.oI], N.prototype, "HandleTextEntry", null);
Cg([f.oI], N.prototype, "HandleSubmit", null);
N = Cg([A.PA], N);
