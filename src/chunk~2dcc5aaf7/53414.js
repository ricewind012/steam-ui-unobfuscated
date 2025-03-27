import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./58360.js";
import s, { CO, _k } from "./52912.js";
import l from "./95773.js";
import c, { Tz } from "./27847.js";
import { hI } from "./43229.js";
import { lV } from "./5222.js";
import { Ci, WQ } from "./78060.js";
import A, { PA } from "./41230.js";
import p from "./63696.js";
import g from "./50376.js";
import C from "./52451.js";
import _, { g as g_1 } from "./51095.js";
import { E5 } from "./88620.js";
import b from "./23024.js";
import y from "./27337.js";
import { A as A_1 } from "./90765.js";
import w from "./8573.js";
import B from "./88750.js";
import { lX } from "./31084.js";
import _I from "./69164.js";
import { pg } from "./13869.js";
import M from "./10042.js";
import T from "./59704.js";
import { t7 } from "./82594.js";
const a = i;
const k = ["148618792083695825", "76561197960266962"];
export let z7 = class extends p.Component {
	InviteFriend(e) {
		E5(CO(e), GetOwningWindowForEvent(e), this.props.groupView.GetGroup());
	}
	OpenSettings(e) {
		hI(GetOwningWindowForEvent(e), this.props.groupView);
	}
	OpenNotificationPreferences(e) {
		lV(GetOwningWindowForEvent(e), this.props.groupView);
	}
	OnContextMenu(e) {
		Tz(e, this.props.groupView.GetGroup(), {
			is_chat_window: true,
		});
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetGroup();

		let { name, tagline } = t;

		let i = false;
		if (t.readyToRender) {
			i = t.BCanInvite();
		}
		const a = e.GetGroup().watching_broadcast_steamid;
		return (
			<div className="chatRoomHeader">
				<_I.Z
					flow-children="row"
					className={`chatRoomGroupHeader${a ? " notifyBroadcast" : ""}`}
					onContextMenu={this.OnContextMenu}
					onMenuButton={this.OnContextMenu}
				>
					<I group={t} />
					<div className="chatRoomGroupHeaderNameandTag">
						<div className="chatRoomGroupHeaderName">{name}</div>
						<N strTagline={tagline} />
					</div>
					<div className="chatRoomGroupSpacer" />
					{t.readyToRender && (
						<>
							{a && <G groupView={e} />}
							<div className="chatRoomGroupControls">
								<div className="chatRoomOptions">
									<_I.Z
										className="chatRoomButton ManageNotifications"
										onActivate={this.OpenNotificationPreferences}
										title={Localize("#Tooltip_NotificationSettings")}
									>
										<g.IrQ />
									</_I.Z>
									{i && (
										<_I.Z
											className="chatRoomButton InviteToGroupChat"
											onActivate={this.InviteFriend}
											title={Localize("#Tooltip_InviteToGroup")}
										>
											<g.MxO />
										</_I.Z>
									)}
									{!i && (
										<div
											className="chatRoomButton InviteToGroupChat Disabled"
											onClick={(e) => {}}
											title={Localize("#Tooltip_InviteToGroup_Denied")}
										>
											<g.MxO />
										</div>
									)}
									<_I.Z
										className="chatRoomButton GroupChatSettings"
										onActivate={this.OpenSettings}
										title={Localize("#Tooltip_GroupChatSettings")}
									>
										<g.m59 />
									</_I.Z>
								</div>
								<div className="chatRoomGroupStats">
									<L groupView={e} />
									<X groupView={e} />
									<Z groupView={e} />
								</div>
							</div>
						</>
					)}
				</_I.Z>
			</div>
		);
	}
};
function N(e) {
	const { strTagline } = e;
	const r = strTagline.toLowerCase();
	if (
		(!r.startsWith("https://") && !r.startsWith("http://")) ||
		strTagline.includes(" ")
	) {
		return <div className="chatRoomGroupHeaderTagline">{e.strTagline}</div>;
	} else {
		return (
			<T.uU
				href={strTagline}
				className="chatRoomGroupHeaderTagline"
				bUseLinkFilter
			>
				{strTagline}
			</T.uU>
		);
	}
}
Cg([C.oI], z7.prototype, "InviteFriend", null);
Cg([C.oI], z7.prototype, "OpenSettings", null);
Cg([C.oI], z7.prototype, "OpenNotificationPreferences", null);
Cg([C.oI], z7.prototype, "OnContextMenu", null);
z7 = Cg([A.PA], z7);
export let wu = class extends p.Component {
	fnShowTextChannelsDialog(e) {
		pg(<M.LC groupView={this.props.groupView} />, GetOwningWindowForEvent(e));
	}
	render() {
		let e = this.props.groupView;
		let t = e.GetGroup();

		let { name, tagline } = t;

		let i = false;
		if (t.readyToRender) {
			i = t.BCanInvite();
		}
		const a = e.GetGroup().watching_broadcast_steamid;
		const s = e.GetActiveChatView()?.chat.GetVoiceAllowed();
		let o = e.GetActiveChatView()?.GetTabName();
		if (s) {
			o = Localize("#GroupSettings_Channels_VoiceQuickChatRoom", o);
		}
		return (
			<div className="chatRoomHeader">
				<_I.Z
					focusable={false}
					fnCanTakeFocus={() => true}
					flow-children="row"
					className={`chatRoomGroupHeader${a ? " notifyBroadcast" : ""}`}
				>
					<I group={t} />
					<div className="chatRoomGroupHeaderNameandTag">
						<div className="chatRoomGroupHeaderName">
							{name}
							<N strTagline={tagline} />
						</div>
						<_I.Z
							className={`chatRoomGroupActiveChat ${s ? "voiceRoom" : ""}`}
							focusable
							fnCanTakeFocus={() => true}
							onActivate={this.fnShowTextChannelsDialog}
							onOKActionDescription={Localize(
								"#GroupSettings_Channels_TextChannels",
							)}
						>
							<g.tcj />
							{o}
						</_I.Z>
					</div>
					<div className="chatRoomGroupSpacer" />
					{t.readyToRender && (
						<>
							{a && <G groupView={e} />}
							<div className="chatRoomGroupControls">
								<div className="chatRoomGroupStats">
									<L groupView={e} />
									<X groupView={e} />
									<Z groupView={e} />
								</div>
							</div>
						</>
					)}
				</_I.Z>
			</div>
		);
	}
};
Cg([C.oI], wu.prototype, "fnShowTextChannelsDialog", null);
wu = Cg([A.PA], wu);
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
		const r = GetOwningWindowForEvent(e);
		Ci(
			r,
			Localize("#Broadcast_EndWatchParty"),
			Localize("#Broadcast_EndWatchPartyPrompt"),
			Localize("#Broadcast_EndWatchParty"),
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
		const n_isBroadcastShown = n.isBroadcastShown;
		if (k.includes(a)) {
			return (
				<O
					groupView={n}
					onClick={this.OnToggleBroadcast}
					onRemoveBroadcast={this.OnRemoveBroadcast}
					watchingBroadcast={n_isBroadcastShown}
				/>
			);
		}
		if (n_isBroadcastShown) {
			return null;
		}
		let o = new w.b(a);
		let c = r;
		if (!r) {
			c = Localize(
				"#PersonaStateWatchingBroadcast_Player",
				l.xm.FriendStore.GetPlayer(o.GetAccountID()).display_name,
			);
		}
		return (
			<div className="broadcastInfoContainer" onClick={this.OnToggleBroadcast}>
				<div className="broadcastDetails">
					<div className="nowWatching">
						{Localize("#Broadcast_NowWatching")}
					</div>
					<div className="gameTitle">{e}</div>
					<div className="broadcastTitle">{c}</div>
				</div>
				<div className="thumbnail">
					{t && <y.y className="thumbnailImg" src={t} duration={2500} />}
				</div>
				{i.BCanIAssociateBroadcast() && (
					<div className="actions" onClick={this.OnRemoveBroadcast}>
						<g.X />
					</div>
				)}
			</div>
		);
	}
};
Cg([C.oI], G.prototype, "OnRemoveBroadcast", null);
Cg([C.oI], G.prototype, "OnToggleBroadcast", null);
G = Cg([A.PA], G);
class O extends p.Component {
	OnContextMenu(e) {
		if (this.props.groupView.GetGroup().BCanIAssociateBroadcast()) {
			((e, t) => {
				lX(<P onRemoveBroadcast={t} />, e);
			})(e, this.props.onRemoveBroadcast);
		}
	}
	render() {
		let e = this.props.watchingBroadcast;
		let t = A_1(a.YuleLog, e && a.Watching);
		return (
			<div
				className={t}
				onClick={this.props.onClick}
				onContextMenu={this.OnContextMenu}
			/>
		);
	}
}
Cg([C.oI], O.prototype, "OnContextMenu", null);
class P extends p.Component {
	render() {
		return (
			<B.tz className="chatRoomListItemContextMenu">
				<B.kt key="removebroadcast" onSelected={this.props.onRemoveBroadcast}>
					{Localize("#Chat_Actions_RemoveRoom_Action")}
				</B.kt>
			</B.tz>
		);
	}
}
let L = PA((e) => {
	const { groupView } = e;
	return (
		<div className="statMemberStat statMembersTotal">
			<div className="statCircle" />
			{LocalizePlural("#Chat_Members", groupView.GetMemberCountTotal())}
		</div>
	);
});
let Z = PA((e) => {
	const { groupView } = e;
	let r = groupView.GetMemberCountInGame();
	if (r == 0) {
		return null;
	} else {
		return (
			<div
				className="statMemberStat statMembersInGame"
				title={LocalizePlural("#Chat_Members_InGame_Tooltip", r)}
			>
				<div className="statCircle" />
				{r}
			</div>
		);
	}
});
let X = PA((e) => {
	const { groupView } = e;
	let r = groupView.GetMemberCountOnline();
	if (r == 0) {
		return null;
	} else {
		return (
			<div
				className="statMemberStat statMembersOnline"
				title={LocalizePlural("#Chat_Members_Online_Tooltip", r)}
			>
				<div className="statCircle" />
				{r}
			</div>
		);
	}
});
function U(e) {
	const { appID } = e;
	const [r] = t7(appID, {
		include_assets_without_overrides: true,
	});
	const n = r?.GetAssetsWithoutOverrides()?.GetHeaderURL();
	if (n) {
		return (
			<div className="ChatRoomGroupOGGAvatar Large">
				<img className="OGGAvatar" src={n} />
			</div>
		);
	} else {
		return <div className="ChatRoomGroupOGGAvatar Large" />;
	}
}
export let _O = PA((e) => {
	let e_size = e.size;
	if (
		(e_size == "large" || e_size == "medium") &&
		e.clan.BIsOGG() &&
		e.clan.GetOGGAppID()
	) {
		return <U appID={e.clan.GetOGGAppID()} />;
	}
	let r = "";
	if (e_size == "micro") {
		r = "Micro";
	} else if (e_size == "smallish") {
		r = "Small Smallish";
	} else if (e_size == "smaller") {
		r = "Smaller";
	} else if (e_size == "small") {
		r = "Small";
	} else if (e_size == "large") {
		r = "Large";
	}
	let n = e_size == "large" ? e.clan.avatar_url_full : e.clan.avatar_url_medium;
	return (
		<div className={`ChatRoomGroupAvatar ${r}`}>
			<img className="ChatRoomGroupAvatar_Avatar" src={n} />
		</div>
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
			return <_O clan={t} size={r} />;
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
			let e_members_to_highlight = e.members_to_highlight;

			let { members, remaining_count } = e_members_to_highlight;

			if (members.length) {
				let e = members.length + (remaining_count ? 1 : 0);
				return (
					<div className={`ChatRoomMultiFriendAvatar With${e}Items ${t}`}>
						{members.map((e, t) => (
							<img
								src={
									this.props.large
										? e.persona.avatar_url_medium
										: e.persona.avatar_url
								}
								key={t}
								className={`MultiAvatar Index${t}`}
							/>
						))}
						{remaining_count > 0 && (
							<div className="ChatRoomMultiFriendMore MultiAvatar Index3">
								+{remaining_count}
							</div>
						)}
					</div>
				);
			}
		}
		if (e && e.hasIcon) {
			return (
				<div className={`ChatRoomGroupAvatar HasAvatar ${t}`}>
					<img className="ChatRoomGroupAvatar_Avatar" src={e.avatar_url_full} />
				</div>
			);
		}
		{
			let r = "";
			if (e) {
				r = e.name;
			} else if (this.props.name) {
				r = this.props.name;
			}
			let n = g_1(r);
			let i = `ChatRoomGroupAvatar ${t}`;
			if (_.tV(n)) {
				i += " EmojiInitials";
			}
			return (
				<div className={i}>
					<div className="ChatRoomGroupAvatar_initials">{n}</div>
				</div>
			);
		}
	}
};
export async function qj(e, t) {
	let r = _k(e);
	let n = t.BIsClanChatRoom()
		? "#Chat_Actions_LeaveChatRoomGroup_ClanConfirm"
		: t.BIsAccountIDOwner(l.xm.CMInterface.steamid.GetAccountID())
			? "#Chat_Actions_OwnerLeaveChatRoomGroup_Confirm"
			: "#Chat_Actions_LeaveChatRoomGroup_Confirm";
	if (
		await WQ(
			e,
			Localize("#Chat_Actions_LeaveChatRoomGroup"),
			Localize(n, t.name),
			Localize("#Chat_Actions_LeaveChatRoomGroup"),
		)
	) {
		t.LeaveChatRoomGroup(r);
	}
}
I = Cg([A.PA], I);
