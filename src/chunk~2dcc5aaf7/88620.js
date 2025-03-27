import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./72476.js";
import a, { h8 } from "./52912.js";
import s from "./95773.js";
import o from "./15855.js";
import l from "./53414.js";
import c from "./68665.js";
import m from "./98829.js";
import u, { HT } from "./13869.js";
import d, { PA } from "./41230.js";
import A from "./63696.js";
import p from "./64608.js";
import g from "./50376.js";
import C from "./52451.js";
import { w } from "./49455.js";
import f from "./69164.js";
import b from "./55116.js";
export function E5(e, t, r, n, i) {
	jv(e, t, r, n, false, i);
}
export function jv(e, t, r, n, i, s) {
	HT(
		<V
			browserContext={e}
			chatRoomGroup={r}
			chatRoom={n}
			bIsDropInvite={i}
			vecInvitePlayers={s}
		/>,
		t,
		"ChatRoomGroupInviteDialog",
		{
			strTitle: Localize("#Chat_CreateChatRoom"),
			popupWidth: 664,
			popupHeight: 680,
		},
		h8(t),
	);
}
export let Rf = class extends A.Component {
	constructor(e) {
		super(e);
	}
	componentDidMount() {
		let e = this.props.chat.lastChatLinkInfo;
		if (!e || Date.now() >= e.rtExpires) {
			this.GenerateLink(86400);
		}
	}
	GenerateLink(e) {
		this.props.chat.CreateInviteLink(e);
	}
	OnFocus(e) {
		e.target.select();
	}
	render() {
		let e = this.props.chat.lastChatLinkInfo;
		let t = Localize("#Chat_Invite_Loading");
		if (this.props.disabled) {
			e = undefined;
			t = "";
		}
		return (
			<>
				<p.pd
					label={Localize("#Chat_Invite_Linkheader")}
					className="InviteFriendToChatDialog_LinkInput"
					type="text"
					value={e ? e.strInviteURL : t}
					readOnly
					bShowCopyAction={!!e}
					onFocus={this.OnFocus}
					onClick={this.OnFocus}
				/>
				{!this.props.disabled && (
					<B onGenerate={this.GenerateLink} chat={this.props.chat} />
				)}
			</>
		);
	}
};
Cg([C.oI], Rf.prototype, "GenerateLink", null);
Cg([C.oI], Rf.prototype, "OnFocus", null);
Rf = Cg([d.PA], Rf);
let B = class extends A.Component {
	constructor(e) {
		super(e);
	}
	OnDropDownChange(e, t) {
		this.props.onGenerate(e.data);
		t.SetSelectedOption(undefined);
	}
	CreateExpiresText(e) {
		if (e == 0) {
			return Localize("#InviteLink_ExpiresNever_Short");
		}
		if (e - s.xm.GetServerRTime32() > 3600) {
			return Localize("#InviteLink_ExpiresDay_Short");
		} else {
			return Localize("#InviteLink_ExpiresHour_Short");
		}
	}
	render() {
		let e = this.props.chat.lastChatLinkInfo;
		let t = [
			{
				label: Localize("#InviteLink_ExpiresHour_Short"),
				data: 3600,
			},
			{
				label: Localize("#InviteLink_ExpiresDay_Short"),
				data: 86400,
			},
			{
				label: Localize("#InviteLink_ExpiresNever_Short"),
				data: 0,
			},
		];
		return (
			<div className="expireLinkInContainer">
				<p.JU>{Localize("#InviteLink_ExpireDropDownLabel")}</p.JU>
				<p.m
					strClassName="inviteLinkDropDown"
					rgOptions={t}
					strDefaultLabel={
						e ? this.CreateExpiresText(e.rtExpires) : <span>{"\xA0"}</span>
					}
					onChange={this.OnDropDownChange}
					selectedOption={undefined}
				/>
			</div>
		);
	}
};
Cg([C.oI], B.prototype, "OnDropDownChange", null);
B = Cg([d.PA], B);
class V extends A.PureComponent {
	static contextType = i.QO;
	m_setMembersOfGroup;
	constructor(e) {
		super(e);
		this.state = {
			dropToInviteFriend: undefined,
			rgPickedFriends: [],
		};
		this.BuildMemberOfGroupSet(e);
	}
	componentDidUpdate(e) {
		if (e.chatRoomGroup !== this.props.chatRoomGroup) {
			this.BuildMemberOfGroupSet(this.props);
		}
	}
	BuildMemberOfGroupSet(e) {
		let e_chatRoomGroup = e.chatRoomGroup;
		this.m_setMembersOfGroup = e_chatRoomGroup.memberList.GetCurrentMemberSet();
		this.forceUpdate();
	}
	DismissDialog() {
		this.props.closeModal();
	}
	OnSubmit() {
		for (let e of this.state.rgPickedFriends) {
			this.props.chatRoomGroup.InviteFriend(e.accountid, this.props.chatRoom);
		}
		this.props.closeModal();
	}
	OnDragEnter(e, t) {
		w(
			(e && e.type == "friend") || t,
			"Invalid data type passed to ChatRoomGroupDialog.OnDragEnter",
		);
		if (e) {
			let t = e;
			if (t.friend) {
				this.setState({
					rgPickedFriends: this.state.rgPickedFriends.concat(t.friend),
				});
			}
		}
		return true;
	}
	OnDragLeave() {
		const { dropToInviteFriend, rgPickedFriends } = this.state;
		if (dropToInviteFriend) {
			const r = rgPickedFriends.findIndex(
				(t) => t.accountid === dropToInviteFriend.accountid,
			);
			this.setState({
				dropToInviteFriend: undefined,
				rgPickedFriends: rgPickedFriends
					.slice(0, r)
					.concat(rgPickedFriends.slice(r + 1)),
			});
		}
	}
	OnDrop(e, t) {
		w(
			e && e.type == "friend",
			"Invalid data type passed to ChatRoomGroupDialog.OnDrop",
		);
		if (e && e.type == "friend") {
			let t = e;
			if (t.friend) {
				a.ZM.DragDropManager.SetDropConsumed();
				if (
					this.state.rgPickedFriends.findIndex(
						(e) => e.accountid === t.friend.accountid,
					) > -1
				) {
					this.setState({
						dropToInviteFriend: undefined,
						rgPickedFriends: this.state.rgPickedFriends.concat(t.friend),
					});
				} else if (this.state.dropToInviteFriend) {
					this.setState({
						dropToInviteFriend: undefined,
					});
				}
			}
		}
	}
	GetDragDropProps() {
		let e = {
			rgAcceptedTypes: ["friend"],
		};
		e.fnDragEnter = this.OnDragEnter;
		e.fnDragLeave = this.OnDragLeave;
		e.fnDrop = this.OnDrop;
		return e;
	}
	render() {
		let e = this.props.chatRoomGroup.GetDefaultChatRoom();
		if (this.props.chatRoom) {
			e = this.props.chatRoom;
		}
		let t;
		let r = this.props.chatRoomGroup.name;
		let n = this.props.chatRoom != null;
		let i = new Set([]);
		let a = this.props.chatRoomGroup.BCanInvite();
		if (a) {
			if (!this.props.chatRoom) {
				i = this.m_setMembersOfGroup;
			}
		} else if (this.props.chatRoom) {
			s.xm.FriendStore.all_friends.forEach((e) => {
				if (!this.props.chatRoomGroup.BHasMember(e.accountid)) {
					i.add(e.accountid);
				}
			});
		} else {
			w(false, "User should not be able to invite to the group");
		}
		t = this.props.bIsDropInvite
			? Localize("#Chat_InviteFriends_DropInvite_Pre")
			: a
				? Localize("#Chat_InviteFriends")
				: Localize("#Chat_InviteGroupMembers");
		let m = `ChatRoomGroupInviteDialog${
			this.props.bIsDropInvite ? " IsDropInvite" : ""
		}`;
		if (this.context?.IN_GAMEPADUI) {
			m += " GamepadMode";
		}
		return (
			<u.x_ onEscKeypress={this.DismissDialog}>
				<p.U9 classNameContent={m} onSubmit={this.OnSubmit}>
					<p.Y9>
						{n ? (
							<div className="InviteToVoiceHeader">
								{Localize("#Chat_Actions_InviteFriend_VoiceChat")}
								<div className="DialogHeaderSubtitle DialogHighlight">
									"{this.props.chatRoom.name}"
								</div>
							</div>
						) : (
							Localize("#Chat_Actions_InviteFriend")
						)}
						<div className="displayRow">
							<l.I group={this.props.chatRoomGroup} small />
							<div className="DialogHeaderSubtitle DialogHighlight">{r}</div>
						</div>
					</p.Y9>
					<p.nB>
						<b.g>
							{!this.props.bIsDropInvite &&
								a &&
								!this.context?.IN_GAMEPADUI && (
									<>
										<div className="inviteLinkContainer">
											<Rf chat={e} disabled={false} />
										</div>
										<div className="OrSeparator">
											<div className="HBar" />
											<div className="OrSeparatorLabel">
												{Localize("#Chat_InviteFriends_OR_Separator")}
											</div>
											<div className="HBar" />
										</div>
									</>
								)}
							<o.T className="" {...this.GetDragDropProps()}>
								<c.r
									label={t}
									eSort={0}
									rgPickedFriends={this.state.rgPickedFriends}
									bDropInvite={this.props.bIsDropInvite}
									renderChosenFriend={I}
									onChange={(e) =>
										this.setState({
											rgPickedFriends: e,
										})
									}
									excludeFriend={(e) => i.has(e.accountid)}
								/>
							</o.T>
						</b.g>
					</p.nB>
					<p.wi>
						<f.Z
							className="DialogTwoColLayout _DialogColLayout"
							flow-children="row"
						>
							<p.jn disabled={this.state.rgPickedFriends.length === 0}>
								{Localize("#Chat_Invite")}
							</p.jn>
							<p.$n onClick={this.DismissDialog}>
								{Localize("#Button_Close")}
							</p.$n>
						</f.Z>
					</p.wi>
				</p.U9>
			</u.x_>
		);
	}
}
Cg([C.oI], V.prototype, "DismissDialog", null);
Cg([C.oI], V.prototype, "OnSubmit", null);
Cg([C.oI], V.prototype, "OnDragEnter", null);
Cg([C.oI], V.prototype, "OnDragLeave", null);
Cg([C.oI], V.prototype, "OnDrop", null);
let I = PA((e) => (
	<>
		<m.Rg friend={e.friend} context={null}>
			<f.Z
				className="FriendPicker_ChosenFriend"
				onActivate={() => {
					e.onClick(e.friend);
				}}
			>
				<span>{e.friend.display_name}</span>
				<g.sED />
			</f.Z>
		</m.Rg>
	</>
));
