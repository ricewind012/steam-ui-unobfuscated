import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { FindAndRemoveWhere } from "../../actual_src/utils/arrayutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s from "./44234.js";
import o from "./66146.js";
import l, { h8, CO } from "./52912.js";
import c from "./95773.js";
import m from "./14182.js";
import u from "./88620.js";
import d, { Ci, Nw, Ic, hr } from "./78060.js";
import A from "./98829.js";
import p, { HT } from "./13869.js";
import g from "./69164.js";
import h, { Gn } from "./89193.js";
import C from "./41230.js";
import _, { useState } from "./63696.js";
import f from "./64608.js";
import b from "./50376.js";
import y from "./26853.js";
import v from "./52451.js";
import { u as u_1 } from "./24761.js";
import E from "./59704.js";
import M from "./8573.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import R from "./72945.js";
import { A as A_1 } from "./90765.js";
import G from "./86360.js";
import z from "./36308.js";
import U from "./72476.js";
const a = i;
const k = R;
function N(e) {
	const { title, pages, children, initialActivePage, renderNavFooter } = e;
	const [s, setS] = useState(initialActivePage || pages[0]);
	return (
		<g.Z className={k.Container} flow-children="row">
			<g.Z className={k.Nav} flow-children="column">
				<span className={k.NavTitle}>{title}</span>
				<g.Z className={k.NavItems} flow-children="column">
					{pages.map((e) => (
						<F key={e} active={e === s} onClick={() => setS(e)}>
							{e}
						</F>
					))}
				</g.Z>
				{renderNavFooter && renderNavFooter()}
			</g.Z>
			<div className={k.Content}>{children(s)}</div>
		</g.Z>
	);
}
const F = (e) => {
	const { active, onClick, ...n } = e;
	return (
		<g.Z
			{...n}
			focusable
			onActivate={onClick}
			className={A_1(k.NavItem, active && k.Active)}
		/>
	);
};
const O = G;
const P = (e) => {
	const { className, ...r } = e;
	return <div className={A_1(O.DialogTitle, className)} {...r} />;
};
const L = (e) => {
	const { className, ...r } = e;
	return <div className={A_1(O.DialogContent, className)} {...r} />;
};
const x = z;
export function hI(e, t) {
	HT(
		<V groupView={t} />,
		e,
		"ChatRoomGroupSettings",
		{
			strTitle: (0, Localize)("#GroupSettings"),
			popupWidth: 842,
			popupHeight: 600,
		},
		h8(e),
		{
			nDragAreaHeight: 32,
		},
	);
}
let V = class extends _.Component {
	static contextType = U.QO;
	m_inviteLinks = {
		loadingState: "pending",
		rgInviteLinks: null,
	};
	m_bans = new o.L2();
	m_invitedUsers = {
		loadingState: "pending",
		rgInvitedUsers: null,
	};
	constructor(e) {
		super(e);
		Gn(this);
		this.state = {
			strRoomName: this.props.groupView.GetGroup().name,
		};
	}
	DismissDialog() {
		this.props.closeModal();
	}
	CloseDialog() {
		this.props.closeModal();
	}
	OnLeave(e) {
		let t = GetOwningWindowForEvent(e);
		let r = CO(e);
		let n = this.props.groupView.GetGroup();
		let i = n.BIsClanChatRoom()
			? "#Chat_Actions_LeaveChatRoomGroup_ClanConfirm"
			: n.BIsAccountIDOwner(c.xm.CMInterface.steamid.GetAccountID())
				? "#Chat_Actions_OwnerLeaveChatRoomGroup_Confirm"
				: "#Chat_Actions_LeaveChatRoomGroup_Confirm";
		Ci(
			t,
			(0, Localize)("#GroupSettings_Leave_Section"),
			(0, Localize)(i, n.name),
			(0, Localize)("#GroupSettings_Leave_Button"),
		)
			.then(() => {
				n.LeaveChatRoomGroup(r);
			})
			.then(() => {
				this.props.closeModal();
			})
			.catch(() => {});
	}
	GetNamedGroupPageList() {
		const e = this.props.groupView.GetGroup();
		if (this.context?.IN_GAMEPADUI) {
			return [
				{
					title: (0, Localize)("#GroupSettings_General_Section"),
					render: () => <Q_1 group={e} />,
				},
				{
					title: (0, Localize)("#GroupSettings_InvitedUsers_Section"),
					render: () => <Te group={e} invitedUsers={this.m_invitedUsers} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Bans_Section"),
					render: () => <Re group={e} bans={this.m_bans} />,
				},
			];
		} else {
			return [
				{
					title: (0, Localize)("#GroupSettings_General_Section"),
					render: () => <Q_1 group={e} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Channels_Section"),
					render: () => <Y groupView={this.props.groupView} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Permissions_Section"),
					render: () => <X group={e} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Invite_Section"),
					render: () => <Ee group={e} inviteLinks={this.m_inviteLinks} />,
				},
				{
					title: (0, Localize)("#GroupSettings_InvitedUsers_Section"),
					render: () => <Te group={e} invitedUsers={this.m_invitedUsers} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Bans_Section"),
					render: () => <Re group={e} bans={this.m_bans} />,
				},
			];
		}
	}
	GetNonNamedGroupPageList() {
		const e = this.props.groupView.GetGroup();
		if (this.context?.IN_GAMEPADUI) {
			return [
				{
					title: (0, Localize)("#GroupSettings_Save_Section"),
					render: () => <J_1 group={e} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Leave_Section"),
					render: () => <Q group={e} />,
				},
			];
		} else {
			return [
				{
					title: (0, Localize)("#GroupSettings_Save_Section"),
					render: () => <J_1 group={e} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Invite_Section"),
					render: () => <Ee group={e} inviteLinks={this.m_inviteLinks} />,
				},
				{
					title: (0, Localize)("#GroupSettings_Leave_Section"),
					render: () => <Q group={e} />,
				},
			];
		}
	}
	GetPageList() {
		if (this.props.groupView.GetGroup().IsNamedGroupChat()) {
			return this.GetNamedGroupPageList();
		} else {
			return this.GetNonNamedGroupPageList();
		}
	}
	render() {
		let e = this.GetPageList();
		const { groupView } = this.props;
		const r = groupView.GetGroup();
		const n = `${r.unique_id}_${r.IsNamedGroupChat()}`;
		return (
			<p.x_ onEscKeypress={this.DismissDialog}>
				<N
					title={(0, Localize)("#GroupSettings")}
					pages={e.map(({ title }) => title)}
					renderNavFooter={() => <H onActivate={this.OnLeave} />}
					key={n}
				>
					{(t) => {
						const r = e.find((e) => e.title === t);
						const n = r ? r.render() : null;
						return (
							<L
								style={{
									flexDirection: "column",
								}}
								key={t}
							>
								{n}
							</L>
						);
					}}
				</N>
			</p.x_>
		);
	}
};
Cg([h.sH], V.prototype, "m_inviteLinks", undefined);
Cg([h.sH], V.prototype, "m_invitedUsers", undefined);
Cg([v.oI], V.prototype, "DismissDialog", null);
Cg([v.oI], V.prototype, "CloseDialog", null);
Cg([v.oI], V.prototype, "OnLeave", null);
V = Cg([C.PA], V);
const H = (e) => (
	<g.Z className={x.LeaveButton} {...e}>
		<b.Gq2 />
		{(0, Localize)("#GroupSettings_Leave_Section")}
	</g.Z>
);
let J_1 = class extends _.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	m_refInput;
	m_bSaving = false;
	m_strError = "";
	BindInputRef(e) {
		this.m_refInput = e;
	}
	AnimateUpgrade_In() {
		document.getElementById("animUp");
	}
	AnimateUpgrade_Out() {
		document.getElementById("animDown");
	}
	SaveGroup() {
		let e = this.props.group;
		this.m_bSaving = false;
		this.m_strError = "";
		e.SaveChatRoomGroup(this.m_refInput.value).catch((e) => {
			this.m_bSaving = false;
			this.m_strError =
				e == 12
					? (0, Localize)("#GroupSettings_Save_NameError")
					: (0, Localize)("#GroupSettings_Save_GenericError");
		});
	}
	render() {
		let e = this.m_bSaving;
		let t = this.m_strError;
		return (
			<f.lV className="DialogBody" onSubmit={this.SaveGroup}>
				<f.a3>
					{(0, Localize)("#GroupSettings_Save_Desc")}
					<div>
						<ul>
							<li>{(0, Localize)("#GroupSettings_Save_Feature_1")}</li>
							<li>{(0, Localize)("#GroupSettings_Save_Feature_2")}</li>
							<li>{(0, Localize)("#GroupSettings_Save_Feature_3")}</li>
							<li>{(0, Localize)("#GroupSettings_Save_Feature_4")}</li>
						</ul>
					</div>
				</f.a3>
				<f.pd
					ref={this.BindInputRef}
					autoFocus
					label={(0, Localize)("#GroupSettings_Save_NameGroup")}
					disabled={e}
				/>
				{!e && (
					<>
						{t.length > 0 && <div className="ErrorWhileSaving">{t}</div>}
						<f.jn className="_FixedHeight">
							{(0, Localize)("#GroupSettings_Save_Section")}
						</f.jn>
					</>
				)}
				{e && <y.t />}
			</f.lV>
		);
	}
};
Cg([h.sH], J_1.prototype, "m_bSaving", undefined);
Cg([h.sH], J_1.prototype, "m_strError", undefined);
Cg([v.oI], J_1.prototype, "BindInputRef", null);
Cg([v.oI], J_1.prototype, "AnimateUpgrade_In", null);
Cg([v.oI], J_1.prototype, "AnimateUpgrade_Out", null);
Cg([v.oI], J_1.prototype, "SaveGroup", null);
J_1 = Cg([C.PA], J_1);
let Q_1 = class extends _.Component {
	static contextType = U.QO;
	m_strRoomName = undefined;
	m_strTagLine = undefined;
	m_fileInput;
	constructor(e) {
		super(e);
		Gn(this);
		this.m_strRoomName = this.props.group.IsNamedGroupChat()
			? this.props.group.name
			: "";
		this.m_strTagLine = this.props.group.tagline;
		this.state = {
			bNameSubmitted: false,
			bTaglineSubmitted: false,
		};
	}
	AvatarUploadEResultToString(e) {
		let t = "#Chat_Settings_Error_Unknown";
		switch (e) {
			case 21: {
				t = "#Chat_Settings_Error_NotLoggedOn";
				break;
			}
			case 112: {
				t = "#Chat_Settings_Error_LimitedUser";
				break;
			}
			case 15: {
				t = "#Chat_Settings_Error_AccessDenied";
				break;
			}
			case 2: {
				t = "#Chat_Settings_Error_FailedToUpload";
				break;
			}
			case 25: {
				t = "#Chat_Settings_Error_FileTooLarge";
				break;
			}
			case 8: {
				t = "#Chat_Settings_Error_InvalidImage";
				break;
			}
			case 37: {
				t = "#Chat_Settings_Error_ServerError";
			}
		}
		return (0, Localize)(t);
	}
	SetChatRoomGroupAvatarEResultToString(e) {
		let t = "#Chat_Settings_Error_Unknown";
		switch (e) {
			case 10:
			case 8:
			case 32: {
				t = "#Chat_Settings_Error_ServerError";
				break;
			}
			case 15: {
				t = "#Chat_Settings_Error_NotAdmin";
			}
		}
		return (0, Localize)(t);
	}
	OnFileChange(e) {
		let t = e.target.files[0];
		let r = this.props.group;
		e.preventDefault();
		let n = new FormData();
		n.set("sessionid", s.TS.SESSIONID);
		n.set("avatar", t);
		a.post(`${s.TS.CHAT_BASE_URL}chat/avatarfileupload/`, n, {
			headers: {
				"content-type": "multipart/form-data",
			},
		})
			.then((e) => {
				if (e.data.success == 1) {
					r.SetChatRoomGroupAvatar(e.data.sha).catch((e) => {
						let t = this.SetChatRoomGroupAvatarEResultToString(e);
						Nw((0, Localize)("#Generic_Error"), t);
					});
				}
			})
			.catch((e) => {
				let t = this.AvatarUploadEResultToString(e.response.data.success);
				Nw((0, Localize)("#Generic_Error"), t);
				console.log(e.response);
			});
	}
	bindFileUploadControl(e) {
		this.m_fileInput = e;
	}
	OnNameChange(e) {
		this.m_strRoomName = e.target.value;
		this.setState({
			bNameSubmitted: false,
		});
	}
	OnAvatarChange() {
		this.m_fileInput.click();
	}
	OnTagLineChange(e) {
		this.m_strTagLine = e.target.value;
		this.setState({
			bTaglineSubmitted: false,
		});
	}
	OnNameBlur() {
		let e = this.props.group;
		if (!e.IsNamedGroupChat() && !this.m_strRoomName) {
			return;
		}
		if (e.IsNamedGroupChat() && e.name === this.m_strRoomName) {
			return;
		}
		const t = () => (this.m_strRoomName = this.props.group.name);
		e.RenameChatRoomGroup(this.m_strRoomName).then(t, t);
		let r = document.getElementById("b1");
		if (r) {
			r.blur();
		}
		this.setState({
			bNameSubmitted: true,
		});
	}
	OnTagLineBlur() {
		let e = this.props.group;
		if (e.tagline != this.m_strTagLine) {
			e.SetChatRoomGroupTagline(this.m_strTagLine);
			this.setState({
				bTaglineSubmitted: true,
			});
			let t = document.getElementById("b2");
			if (t) {
				t.blur();
			}
		}
	}
	OnSubmitSent() {
		this.OnTagLineBlur();
		this.OnNameBlur();
	}
	render() {
		const { group } = this.props;
		const t = group.BCanAdminGroup();
		let r;
		if (group.BIsClanChatRoom()) {
			r = <div />;
		} else if (group.GetOwnerAccountID() == null) {
			r = <div> {(0, Localize)("#Chat_Settings_No_Owner")} </div>;
		} else {
			let t = c.xm.FriendStore.GetPlayer(group.GetOwnerAccountID());
			r = (
				<g.Z focusable={false} fnCanTakeFocus={() => false}>
					<f.JU> {(0, Localize)("#Chat_Settings_General_Owner")}</f.JU>
					<A.bP className="groupOwnerFriend" friend={t} context={null} />
				</g.Z>
			);
		}
		return (
			<>
				<P>{(0, Localize)("#GroupSettings_General_Section")}</P>
				{!t && <Ne />}
				<f.lV
					onSubmit={this.OnSubmitSent}
					className={A_1("DialogBody", x.General)}
				>
					<f.dR>
						<div className={x.AvatarAndUser}>
							<f.JU>{(0, Localize)("#Chat_Settings_General_Icon")}</f.JU>
							<img
								className={A_1(x.Avatar, "no-drag")}
								src={
									group.hasIcon
										? group.avatar_url_full
										: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
								}
							/>
							{!group.hasIcon && (
								<div className={x.NoIconLabel}>
									{(0, Localize)("#Chat_Settings_General_NoIcon")}
								</div>
							)}
							<input
								type="file"
								style={{
									display: "none",
								}}
								name="fileupload"
								accept=".png, .jpg, .jpeg, .gif"
								ref={this.bindFileUploadControl}
								onChange={this.OnFileChange}
							/>
							{!this.context?.IN_GAMEPADUI && (
								<f.$n onClick={this.OnAvatarChange} disabled={!t}>
									{(0, Localize)(
										group.hasIcon
											? "#Chat_Settings_General_ChangeIcon"
											: "#Chat_Settings_General_AddIcon",
									)}
								</f.$n>
							)}
						</div>
						<div className="GeneralChatSettings">
							<f.pd
								autoComplete="off"
								id="b1"
								className="groupChatName"
								label={(0, Localize)("#Chat_Settings_General_Chat_Name")}
								type="text"
								value={this.m_strRoomName}
								onChange={this.OnNameChange}
								onBlur={this.OnNameBlur}
								autoFocus
								disabled={!t}
							/>
							<input
								type="submit"
								style={{
									display: "none",
								}}
							/>
							<f.pd
								autoComplete="off"
								id="b2"
								className="groupChatTag"
								label={(0, Localize)("#Chat_Settings_General_Tagline")}
								type="text"
								value={this.m_strTagLine}
								onChange={this.OnTagLineChange}
								onBlur={this.OnTagLineBlur}
								disabled={!t}
							/>
							{r}
						</div>
					</f.dR>
				</f.lV>
			</>
		);
	}
};
Cg([h.sH], Q_1.prototype, "m_strRoomName", undefined);
Cg([h.sH], Q_1.prototype, "m_strTagLine", undefined);
Cg([v.oI], Q_1.prototype, "OnFileChange", null);
Cg([v.oI], Q_1.prototype, "bindFileUploadControl", null);
Cg([v.oI], Q_1.prototype, "OnNameChange", null);
Cg([v.oI], Q_1.prototype, "OnAvatarChange", null);
Cg([v.oI], Q_1.prototype, "OnTagLineChange", null);
Cg([v.oI], Q_1.prototype, "OnNameBlur", null);
Cg([v.oI], Q_1.prototype, "OnTagLineBlur", null);
Cg([v.oI], Q_1.prototype, "OnSubmitSent", null);
Q_1 = Cg([C.PA], Q_1);
let Q = class extends _.Component {
	OnLeave(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		let r = CO(e);
		let n = this.props.group.BIsClanChatRoom()
			? "#Chat_Actions_LeaveChatRoomGroup_ClanConfirm"
			: this.props.group.BIsAccountIDOwner(
						c.xm.CMInterface.steamid.GetAccountID(),
				  )
				? "#Chat_Actions_OwnerLeaveChatRoomGroup_Confirm"
				: "#Chat_Actions_LeaveChatRoomGroup_Confirm";
		Ci(
			t,
			(0, Localize)("#GroupSettings_Leave_Section"),
			(0, Localize)(n, this.props.group.name),
			(0, Localize)("#GroupSettings_Leave_Button"),
		)
			.then(() => {
				this.props.group.LeaveChatRoomGroup(r);
			})
			.catch(() => {});
	}
	render() {
		return (
			<div>
				{(0, Localize)("#GroupSettings_Leave_Confirm")}
				<f.$n onClick={this.OnLeave}>
					{(0, Localize)("#GroupSettings_Leave_Button")}
				</f.$n>
			</div>
		);
	}
};
Cg([v.oI], Q.prototype, "OnLeave", null);
Q = Cg([C.PA], Q);
let Z = class extends _.Component {
	render() {
		let e = this.props.roomList.indexOf(this.props.room);
		AssertMsg(e !== -1, "Couldn't find CChatRoom inside of its list?");
		let t = e - 1;
		let r = () => {
			this.props.room
				.GetGroup()
				.ReorderRoom(
					this.props.roomList[t].GetRoomID(),
					this.props.room.GetRoomID(),
				);
		};
		let n = e + 1;
		let i = () => {
			this.props.room
				.GetGroup()
				.ReorderRoom(
					this.props.room.GetRoomID(),
					this.props.roomList[n].GetRoomID(),
				);
		};
		if (t < 0 || this.props.roomList[t].BIsDefaultRoom()) {
			r = undefined;
		}
		if (n >= this.props.roomList.length) {
			i = undefined;
		}
		if (this.props.room.BIsDefaultRoom()) {
			r = undefined;
			i = undefined;
		}
		if (!this.props.enabled) {
			r = undefined;
			i = undefined;
		}
		if (r === undefined && i === undefined) {
			return null;
		} else {
			return (
				<div className="rolePriorityContainer">
					<div
						className={`rolePriorityButton roleUp${
							r === undefined ? " Disabled" : ""
						}`}
						onClick={r}
					>
						<b.V5W angle={0} />
					</div>
					<div
						className={`rolePriorityButton roleDown${
							i === undefined ? " Disabled" : ""
						}`}
						onClick={i}
					>
						<b.V5W angle={180} />
					</div>
				</div>
			);
		}
	}
};
Z = Cg([C.PA], Z);
let Y = class extends _.Component {
	OnCreateNewTextChannel(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		HT(
			<m.Ey
				ownerWin={t}
				groupView={this.props.groupView}
				bVoiceChannel={false}
				bJoinChannel={false}
			/>,
			t,
		);
	}
	OnCreateNewVoiceChannel(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		HT(
			<m.Ey
				ownerWin={t}
				groupView={this.props.groupView}
				bVoiceChannel
				bJoinChannel={false}
			/>,
			t,
		);
	}
	OnDeleteChannel(e, t) {
		let r = e.currentTarget.ownerDocument.defaultView;
		Ci(
			r,
			(0, Localize)("#GroupSettings_Channels_DeleteChannel"),
			(0, Localize)("#GroupSettings_Channels_DeleteConfirm"),
			(0, Localize)("#GroupSettings_Channels_DeleteButtonLabel"),
			(0, Localize)("#Button_Cancel"),
			true,
		)
			.then(() => {
				let e = t.GetGroup();
				let r = t.GetRoomID();
				e.DeleteChatRoom(r);
			})
			.catch(() => {});
	}
	render() {
		const { groupView } = this.props;
		let t = groupView.GetGroup().BCanAdminChannel();
		const r = groupView.GetGroup().textRoomList;
		const n = groupView.GetGroup().voiceRoomList;
		let i = (e, i, a) => (
			<div key={e.GetRoomID()} className="ChatGroupSettingsChannels_Row">
				<div className="_DialogRow _DialogRowBackground">
					<div className="_DialogRowLabel">
						{a ? <b.mrd /> : <b.tcj />}
						<div
							className={e.IsDefaultRoomForGroup() ? "HomeChannel" : ""}
							style={{
								alignSelf: "center",
							}}
						>
							{e.BIsDefaultRoom()
								? (0, Localize)("#Chat_DefaultChannelName")
								: e.name}
						</div>
					</div>
					{e.IsDefaultRoomForGroup() && (
						<div className="_DialogRowSecondaryLabel">
							{(0, Localize)("#GroupSettings_Channels_HomeChannelDeleteLabel")}
						</div>
					)}
					{!e.IsDefaultRoomForGroup() && t && (
						<div
							className="ChannelDeleteButton"
							onClick={(t) => this.OnDeleteChannel(t, e)}
						>
							{(0, Localize)("#GroupSettings_Channels_Delete")}
						</div>
					)}
				</div>
				<Z room={e} roomList={a ? n : r} enabled={t} />
			</div>
		);
		let a = r.map((e) => i(e, 0, false));
		let s = n.map((e) => i(e, 0, true));
		return (
			<>
				<P>{(0, Localize)("#GroupSettings_Channels_Section")}</P>
				{!t && <Ne />}
				<f.lV className="DialogBody">
					<f.dR className={x.ChannelsButtons}>
						<f.$n
							className="DialogButtonTall"
							svgicon={b.tcj}
							onClick={this.OnCreateNewTextChannel}
							disabled={!t}
						>
							{" "}
							{(0, Localize)("#GroupSettings_Channels_CreateText")}{" "}
						</f.$n>
						<f.$n
							className="DialogButtonTall"
							svgicon={() => b.mrd({})}
							onClick={this.OnCreateNewVoiceChannel}
							disabled={!t}
						>
							{" "}
							{(0, Localize)("#GroupSettings_Channels_CreateVoice")}{" "}
						</f.$n>
					</f.dR>
					<f.xz>
						{a.length != 0 && (
							<div
								className="displayColumn flexShrinkNone"
								style={{
									marginBottom: "32px",
								}}
							>
								<f.JU>
									{(0, Localize)("#GroupSettings_Channels_TextChannels")}
								</f.JU>
								<f._E />
								{a}
							</div>
						)}
						{s.length != 0 && (
							<div className="displayColumn flexShrinkNone">
								<f.JU>
									{(0, Localize)("#GroupSettings_Channels_VoiceChannels")}
								</f.JU>
								<f._E />
								{s}
							</div>
						)}
					</f.xz>
				</f.lV>
			</>
		);
	}
};
Cg([v.oI], Y.prototype, "OnCreateNewTextChannel", null);
Cg([v.oI], Y.prototype, "OnCreateNewVoiceChannel", null);
Cg([v.oI], Y.prototype, "OnDeleteChannel", null);
Y = Cg([C.PA], Y);
class K extends _.Component {
	m_refInput;
	state = {
		strRoleName: "",
	};
	OnSubmit() {
		let e = this.m_refInput && this.m_refInput.value.trim();
		if (e && e.length != 0) {
			this.props.closeModal();
			this.props.group.CreateRole(e).catch(() => {
				Ic(
					this.props.ownerWin,
					(0, Localize)("#Generic_Error"),
					(0, Localize)("#GroupSettings_CreateRole_GenericError"),
				);
				this.props.closeModal();
			});
		}
	}
	HandleTextEntry(e) {
		this.setState({
			strRoleName: e.target.value,
		});
	}
	render() {
		let e = this.state.strRoleName.length > 0;
		return (
			<p.x_ onEscKeypress={this.props.closeModal}>
				<f.U9
					classNameContent="CreateChatChannelDialog"
					onSubmit={this.OnSubmit}
				>
					<f.Y9>{(0, Localize)("#GroupSettings_CreateRole_Title")}</f.Y9>
					<f.nB>
						<f.pd
							ref={(e) => {
								this.m_refInput = e;
							}}
							autoFocus
							label={(0, Localize)("#GroupSettings_CreateRole_Description")}
							value={this.state.strRoleName}
							onChange={this.HandleTextEntry}
						/>
					</f.nB>
					<f.wi>
						<f.CB onCancel={this.props.closeModal} bOKDisabled={!e} />
					</f.wi>
				</f.U9>
			</p.x_>
		);
	}
}
Cg([v.oI], K.prototype, "OnSubmit", null);
Cg([v.oI], K.prototype, "HandleTextEntry", null);
let X = class extends _.Component {
	state = {};
	m_topRef = _.createRef();
	OnCreateRole(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		HT(<K ownerWin={t} group={this.props.group} />, t);
	}
	BCanLocalUserEditRole(e) {
		return this.props.group.BCanIModifyRole(e);
	}
	BCanLocalUserAssignRole() {
		return this.props.group.BCanIAssignRoles();
	}
	EditRole(e) {
		let t = this.props.group.GetRoleName(e);
		let r = this.props.group.GetRoleActions(e);
		if (t && r) {
			this.setState({
				editRoleID: e,
				editRoleName: t,
				editRoleActions: r,
			});
		}
	}
	DoesRoleGrantPermission(e, t) {
		return true;
	}
	OnSettingToggled(e, t) {
		this.props.group.SetRoleAction(this.state.editRoleID, e, t);
	}
	MoveRoleUp(e) {
		let t = this.props.group.GetRoleOrdinal(e);
		let r = Math.max(0, t - 1);
		this.props.group.ReorderRole(e, r).then((e) => {
			this.forceUpdate();
		});
	}
	MoveRoleDown(e) {
		let t = this.props.group.GetRoleOrdinal(e) + 1;
		this.props.group.ReorderRole(e, t).then((e) => {
			this.forceUpdate();
		});
	}
	componentDidUpdate(e, t) {
		if (
			this.state.editRoleID !== t.editRoleID &&
			this.m_topRef &&
			this.m_topRef.current
		) {
			let e = this.m_topRef.current.parentElement;
			while (e) {
				if (e.scrollHeight > e.clientHeight) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
	}
	render() {
		const { group } = this.props;
		const { editRoleID } = this.state;
		const r = group.BIsAccountIDOwner(c.xm.CMInterface.steamid.GetAccountID());
		let n = group.BIsClanChatRoom();
		if (editRoleID) {
			return (
				<div ref={this.m_topRef}>
					<$
						group={group}
						roleID={editRoleID}
						onRequestClose={() =>
							this.setState({
								editRoleID: undefined,
							})
						}
					/>
				</div>
			);
		}
		let i = group.DefaultRoleID();
		let a = group
			.GetRoles()
			.slice()
			.sort((e, t) =>
				e.role_id == i ? 1 : t.role_id == i ? -1 : e.ordinal - t.ordinal,
			);
		let o = group.GetHighestRankRoleIDForPermission(
			c.xm.FriendStore.self.accountid,
			8,
		);
		let l = o ? group.GetRoleOrdinal(o) : Number.MAX_VALUE - 1;
		let m = group.BIsAccountIDOwner(c.xm.FriendStore.self.accountid);
		let u = false;
		let d = this.BCanLocalUserAssignRole();
		let A = a.map((t, r) => {
			let s = false;
			let o = this.BCanLocalUserEditRole(t.role_id);
			let d = o && (m || t.ordinal > l + 1) && t.ordinal > 0;
			let A = o && r < a.length - 2;
			if (o) {
				u = true;
			}
			if (t.role_id == i) {
				s = true;
				d = false;
				A = false;
			} else if (
				group.BMemberHasRole(c.xm.FriendStore.self.accountid, t.role_id)
			) {
				s = true;
			}
			return (
				<div className="roleRow" key={t.role_id}>
					<f.$n
						className={`roleButton${s && !m ? " currentUserRole" : ""}`}
						onClick={(e) => {
							this.EditRole(t.role_id);
						}}
					>
						<b.X4B />
						{(0, Localize)(t.name)}
						<span className="roleSubtitle">
							{o
								? (0, Localize)("#Generic_Edit")
								: (0, Localize)("#Generic_View")}
						</span>
					</f.$n>
					{!n && u && a.length > 2 && (d || A) && (
						<div className="rolePriorityContainer">
							<div
								className={`rolePriorityButton roleUp${d ? "" : " Disabled"}`}
								onClick={(e) => {
									this.MoveRoleUp(t.role_id);
									e.stopPropagation();
								}}
							>
								<b.V5W angle={0} />
							</div>
							<div
								className={`rolePriorityButton roleDown${A ? "" : " Disabled"}`}
								onClick={(e) => {
									this.MoveRoleDown(t.role_id);
									e.stopPropagation();
								}}
							>
								<b.V5W angle={180} />
							</div>
						</div>
					)}
				</div>
			);
		});
		let p = (0, Localize)("#ChatRoomRole_Description_NoEdit");
		if (n) {
			let t = M.b.InitFromClanID(group.GetClanID());
			let r = `${
				s.TS.COMMUNITY_BASE_URL
			}gid/${t.ConvertTo64BitString()}/membersManage`;
			p = LocalizeReact(
				"#ChatRoomRole_Description_Clan",
				<E.uU href={r}>
					{(0, Localize)("#ChatRoomRole_Description_ClanLink")}
				</E.uU>,
			);
		} else if (u && !m) {
			p = (0, Localize)("#ChatRoomRole_Description");
		} else if (d || m) {
			p = (0, Localize)("#ChatRoomRole_Description_NoEditCanAssign");
		}
		return (
			<>
				<div ref={this.m_topRef} />
				<P>{(0, Localize)("#GroupSettings_Permissions_Section")}</P>
				{!r && !u && (
					<Ne>
						{(0, Localize)("#Chat_Settings_Permission_Denied_Permissions")}
					</Ne>
				)}
				<div className="roleList">
					<f.a3 className={x.PermissionsDescription}>{p}</f.a3>
					<div className={x.RoleNameHeader}>
						<f.JU>
							{(0, Localize)("#GroupSettings_Permissions_RolesTitle")}{" "}
						</f.JU>
						{!m && (
							<f.JU className="meKey">
								<b.X4B />
								{(0, Localize)("#GroupSettings_meKey_Desc")}
							</f.JU>
						)}
						{m && (
							<f.JU className="meKey">
								<b.OeC />
								{(0, Localize)("#GroupSettings_meKey_Desc_Owner")}
							</f.JU>
						)}
					</div>
					<f.lV className="DialogBody">
						<f.$n
							disabled
							className="roleButton owner"
							svgicon={b.OeC}
							onClick={() => {}}
						>
							{(0, Localize)("#ChatRoomRole_Owner")}
							<span className="roleSubtitle">
								{(0, Localize)("#ChatRoomRole_OwnerSubtitle")}
							</span>
						</f.$n>
						{A}
					</f.lV>
					{!n && (
						<f.jn
							className="createNewRoleButton"
							svgicon={() =>
								b.f5w({
									minus: false,
									nocircle: false,
								})
							}
							onClick={this.OnCreateRole}
							disabled={!group.BCanICreateRoles()}
						>
							{(0, Localize)("#GroupSettings_Permissions_CreateNew")}
						</f.jn>
					)}
				</div>
			</>
		);
	}
};
Cg([v.oI], X.prototype, "OnCreateRole", null);
Cg([v.oI], X.prototype, "EditRole", null);
Cg([v.oI], X.prototype, "OnSettingToggled", null);
Cg([v.oI], X.prototype, "MoveRoleUp", null);
Cg([v.oI], X.prototype, "MoveRoleDown", null);
X = Cg([C.PA], X);
const J = (e) => {
	const { eAction, strLabel, disabled, group, roleID } = e;
	const s = group.GetRoleActions(roleID);
	const o = s && s.BCanPerformAction(eAction);
	const [l, setL] = _.useState(0);
	return (
		<f.P8
			onChange={(e) => {
				group.SetRoleAction(roleID, eAction, e);
				setL(l + 1);
			}}
			label={strLabel}
			value={o}
			disabled={disabled}
			className={x.PermissionToggle}
		/>
	);
};
let $ = class extends _.Component {
	constructor(e) {
		super(e);
		this.state = {
			editRoleName: e.group.GetRoleName(e.roleID),
		};
	}
	OnEditRoleNameChange(e) {
		this.setState({
			editRoleName: e.target.value,
		});
	}
	OnEditRoleNameBlur() {
		this.RenameRole();
		let e = document.getElementById("b1");
		if (e) {
			e.blur();
		}
	}
	RenameRole() {
		const { roleID } = this.props;
		const t = this.state.editRoleName;
		this.props.group.RenameRole(roleID, t).catch(() => {
			this.setState({
				editRoleName: this.props.group.GetRoleName(roleID),
			});
		});
	}
	DeleteRole(e, t) {
		let r = e.currentTarget.ownerDocument.defaultView;
		if (t == this.props.group.DefaultRoleID()) {
			return;
		}
		let n = this.props.group.GetRoleName(t);
		let i = (
			<div
				style={{
					marginTop: "8px",
					color: "white",
				}}
			>
				{n}
			</div>
		);
		Ci(
			r,
			(0, Localize)("#GroupSettings_Permissions_ConfirmDeleteTitle"),
			(0, Localize)("#GroupSettings_Permissions_ConfirmDelete"),
			(0, Localize)("#GroupSettings_Permissions_ConfirmDeleteButton"),
			(0, Localize)("#Button_Cancel"),
			true,
			i,
		)
			.then(() => this.props.group.DeleteRole(t))
			.then(() => this.props.onRequestClose())
			.catch((e) => {
				if (e != null) {
					Ic(
						r,
						(0, Localize)("#Generic_Error"),
						(0, Localize)("#GroupSettings_DeleteRole_GenericError"),
					);
				}
			});
	}
	render() {
		const { group, roleID, onRequestClose } = this.props;
		if (!group.GetRoleActions(roleID)) {
			return null;
		}
		let n = group.BIsClanChatRoom();
		let i = roleID == group.DefaultRoleID();
		let a =
			i && !n ? (0, Localize)("#ChatRoomRole_Member") : this.state.editRoleName;
		let s = group.BCanIModifyRole(roleID);
		const o = {
			disabled: !s,
			group: group,
			roleID: roleID,
		};
		const l =
			n || !s ? (
				<div className={A_1(x.RoleNameHeader, x.FixedRoleName)}>
					{(0, Localize)(a)}
				</div>
			) : (
				<div className={x.RoleNameHeader}>
					<f.pd
						autoComplete="off"
						id="b1"
						className="editRoleName"
						label={(0, Localize)("#GroupSettings_Permissions_RoleName")}
						type="text"
						value={a}
						disabled={i || !s}
						onChange={this.OnEditRoleNameChange}
						onBlur={this.OnEditRoleNameBlur}
					/>
				</div>
			);
		return (
			<f.lV onSubmit={this.OnEditRoleNameBlur} className={x.PermissionsEdit}>
				<div className={x.Back} onClick={() => onRequestClose()}>
					<b.aeP />
					{(0, Localize)("#GroupSettings_Permissions_BackButton")}
				</div>
				{!s && <Ne>{(0, Localize)("#Chat_Settings_Permission_Denied")}</Ne>}
				{l}
				<f.nB>
					<div className={A_1("SettingsGroup", x.PermissionsGroup)}>
						<f.JU className="PermissionsSectionHeader">
							{(0, Localize)("#GroupSettings_Permissions_Heading_General")}
						</f.JU>
						<J
							{...o}
							eAction={6}
							strLabel={(0, Localize)("#GroupSettings_Permissions_Chat")}
						/>
						<J
							{...o}
							eAction={10}
							strLabel={(0, Localize)("#GroupSettings_Permissions_MentionAll")}
						/>
						<J
							{...o}
							eAction={11}
							strLabel={(0, Localize)(
								"#GroupSettings_Permissions_SetWatchingBroadcast",
							)}
						/>
					</div>
					<div className={A_1("SettingsGroup", x.PermissionsGroup)}>
						<f.JU className="PermissionsSectionHeader">
							{(0, Localize)(
								"#GroupSettings_Permissions_Heading_MembersAndRoles",
							)}
						</f.JU>
						<J
							{...o}
							eAction={2}
							strLabel={(0, Localize)("#GroupSettings_Permissions_Kick")}
						/>
						<J
							{...o}
							eAction={3}
							strLabel={(0, Localize)("#GroupSettings_Permissions_Ban")}
						/>
						<J
							{...o}
							eAction={4}
							strLabel={(0, Localize)("#GroupSettings_Permissions_Invite")}
						/>
						<J
							{...o}
							eAction={8}
							strLabel={(0, Localize)(
								"#GroupSettings_Permissions_ChangeGroupRoles",
							)}
							disabled={o.disabled || i}
						/>
						{!n && (
							<J
								{...o}
								eAction={9}
								strLabel={(0, Localize)(
									"#GroupSettings_Permissions_ChangeUserRoles",
								)}
								disabled={o.disabled || i}
							/>
						)}
					</div>
					<div className={A_1("SettingsGroup", x.PermissionsGroup)}>
						<f.JU className="PermissionsSectionHeader">
							{(0, Localize)(
								"#GroupSettings_Permissions_Heading_RoomManagement",
							)}
						</f.JU>
						<J
							{...o}
							eAction={5}
							strLabel={(0, Localize)(
								"#GroupSettings_Permissions_ChangeTaglineAvatarName",
							)}
						/>
						<J
							{...o}
							eAction={1}
							strLabel={(0, Localize)(
								"#GroupSettings_Permissions_CreateRenameDeleteChannel",
							)}
						/>
					</div>
				</f.nB>
				<f.wi>
					{!n && !i && s && (
						<f.$n
							className="deleteButton"
							onClick={(e) => {
								this.DeleteRole(e, roleID);
							}}
						>
							{(0, Localize)("#GroupSettings_Permissions_DeleteRoleButton")}
						</f.$n>
					)}
				</f.wi>
			</f.lV>
		);
	}
};
Cg([v.oI], $.prototype, "OnEditRoleNameChange", null);
Cg([v.oI], $.prototype, "OnEditRoleNameBlur", null);
Cg([v.oI], $.prototype, "RenameRole", null);
Cg([v.oI], $.prototype, "DeleteRole", null);
$ = Cg([C.PA], $);
let Ee = class extends _.Component {
	componentDidMount() {
		const { group, inviteLinks } = this.props;
		if (inviteLinks.loadingState == "loaded") {
			return;
		}
		if (group.BCanInvite() && inviteLinks.loadingState == "pending") {
			group.GetInviteLinksForGroup().then((e) => {
				setTimeout(() => {
					if (e.loadingState == "loaded") {
						inviteLinks.rgInviteLinks = e.rgInviteLinks.sort(
							(e, t) => e.time_expires() - t.time_expires(),
						);
					}
					inviteLinks.loadingState = e.loadingState;
				}, 500);
			});
		} else {
			inviteLinks.loadingState = "denied";
		}
	}
	OnDeleteLink(e) {
		let t = this.props.inviteLinks;
		let r = (
			<div
				style={{
					marginTop: "5px",
					color: "#dee2e5",
				}}
			>
				{u_1(e.invite_code())}
			</div>
		);
		hr(
			(0, Localize)("#GroupSettings_Invite_ConfirmDeleteTitle"),
			(0, Localize)("#GroupSettings_Invite_ConfirmDelete"),
			(0, Localize)("#GroupSettings_Invite_ConfirmDeleteButton"),
			(0, Localize)("#Button_Cancel"),
			true,
			r,
		)
			.then(() => {
				this.props.group.DeleteInviteLink(e.invite_code()).then((r) => {
					AssertMsg(
						t.loadingState == "loaded",
						"somehow got a valid link to delete without links being loaded",
					);
					let n = t.rgInviteLinks.findIndex(
						(t) => t.invite_code() == e.invite_code(),
					);
					if (n >= 0) {
						t.rgInviteLinks.splice(n, 1);
						console.log("removed link", t.rgInviteLinks);
					}
				});
			})
			.then(() => {})
			.catch(() => {});
	}
	FormatExpires(e) {
		if (e > 2145916800) {
			return (0, Localize)("#GroupSettings_Invite_NeverExpires");
		}
		return c.xm.RTime32ToDate(e).toLocaleString([], {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	}
	HandleFocus(e) {
		e.target.select();
	}
	render() {
		const { inviteLinks, group } = this.props;
		let r;
		const n = group.BCanInvite();
		if (inviteLinks.loadingState == "pending") {
			r = (
				<div>
					<y.t />
				</div>
			);
		} else if (inviteLinks.loadingState == "denied") {
			r = <div>{(0, Localize)("#GroupSettings_Invite_Denied")}</div>;
		} else if (inviteLinks.loadingState == "failed") {
			r = <div>{(0, Localize)("#GroupSettings_Invite_Failed")}</div>;
		} else if (inviteLinks.loadingState == "loaded") {
			let t = [];
			t = inviteLinks.rgInviteLinks.map((e) => (
				<tr key={e.invite_code()}>
					<td>
						{" "}
						<f.pd
							className="inviteURLLink"
							value={u_1(e.invite_code())}
							readOnly
							onClick={this.HandleFocus}
							onFocus={this.HandleFocus}
						/>{" "}
					</td>
					<td className="dateCell allCaps">
						{" "}
						{this.FormatExpires(e.time_expires())}{" "}
					</td>
					<td className="buttonCell">
						<f.$n onClick={(t) => this.OnDeleteLink(e)} disabled={!n}>
							{(0, Localize)("#GroupSettings_Invite_Delete")}
						</f.$n>
					</td>
				</tr>
			));
			r =
				t.length == 0 ? (
					<div>{(0, Localize)("#GroupSettings_Invite_NoInvites")}</div>
				) : (
					<table className="DialogSpanningTable InviteLinksTable">
						<thead>
							<tr>
								<th className="inviteCodeColumn">
									{" "}
									{(0, Localize)("#GroupSettings_Invite_Code")}{" "}
								</th>
								<th className="dateColumn">
									{" "}
									{(0, Localize)("#GroupSettings_Invite_Expiration")}{" "}
								</th>
								<th className="buttonColumn"> </th>
							</tr>
						</thead>
						<tbody>{t}</tbody>
					</table>
				);
		}
		return (
			<>
				<P>{(0, Localize)("#GroupSettings_Invite_Section")}</P>
				{!n && <Ne />}
				<f.lV className="DialogBody">
					{n && (
						<div className="inviteLinkContainer">
							<u.Rf chat={group.GetDefaultChatRoom()} disabled={!n} />
						</div>
					)}
					{n && (
						<div className="OrSeparator">
							<f._E />
						</div>
					)}
					{r}
				</f.lV>
			</>
		);
	}
};
Cg([v.oI], Ee.prototype, "OnDeleteLink", null);
Cg([v.oI], Ee.prototype, "HandleFocus", null);
Ee = Cg([C.PA], Ee);
let Te = class extends _.Component {
	static contextType = U.QO;
	componentDidMount() {
		let e = this.props.invitedUsers;
		if (e.loadingState == "loaded") {
			return;
		}
		let t = this.props.group;
		if (e.loadingState == "pending") {
			t.GetInvitedUsersForGroup().then((t) => {
				setTimeout(() => {
					if (t.loadingState == "loaded") {
						e.rgInvitedUsers = t.rgInvitedUsers.sort(
							(e, t) => e.time_invited() - t.time_invited(),
						);
					}
					e.loadingState = t.loadingState;
				}, 500);
			});
		}
	}
	RevokeInvite(e, t) {
		let r = c.xm.FriendStore.GetPlayer(t);
		let n = e.currentTarget.ownerDocument.defaultView;
		let i = (
			<A.bP className="friend" friend={r} context={null} disableContextMenu />
		);
		Ci(
			n,
			(0, Localize)("#GroupSettings_InvitedUsers_RevokeTitle"),
			(0, Localize)("#GroupSettings_InvitedUsers_RevokeBody"),
			(0, Localize)("#GroupSettings_InvitedUsers_RevokeConfirm"),
			(0, Localize)("#Button_Cancel"),
			true,
			i,
		)
			.then(() => {
				this.props.group
					.RevokeInvite(t)
					.then(() => {
						FindAndRemoveWhere(
							this.props.invitedUsers.rgInvitedUsers,
							(e) => e.accountid() === t,
						);
					})
					.catch((e) => {
						Ic(
							n,
							(0, Localize)("#Generic_Error"),
							(0, Localize)("#GroupSettings_InvitedUsers_RevokeGenericError"),
						);
					});
			})
			.catch(() => {});
	}
	FormatDate(e) {
		return c.xm.RTime32ToDate(e).toLocaleString([], {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	}
	RenderContent() {
		const { invitedUsers, group } = this.props;
		const r = group.BCanInvite();
		if (invitedUsers.loadingState == "loaded") {
			if (
				!invitedUsers.rgInvitedUsers ||
				invitedUsers.rgInvitedUsers.length == 0
			) {
				return (
					<f.lV>{(0, Localize)("#GroupSettings_InvitedUsers_Noone")}</f.lV>
				);
			}
			let t = invitedUsers.rgInvitedUsers.map((e) => {
				let t = {
					friend: c.xm.FriendStore.GetPlayer(e.accountid()),
					bHideGameName: true,
					bHidePersona: true,
					noActions: this.context?.IN_GAMEPADUI,
					context: null,
				};
				return (
					<tr className="hoverRow" key={e.accountid()}>
						<td className="friendCell">
							{" "}
							<A.bP {...t} />{" "}
						</td>
						<td className="dateCell"> {this.FormatDate(e.time_invited())} </td>
						<td className="buttonCell">
							<f.$n
								onClick={(t) => this.RevokeInvite(t, e.accountid())}
								disabled={!r}
							>
								{(0, Localize)("#GroupSettings_InvitedUsers_RevokeInvite")}
							</f.$n>
						</td>
					</tr>
				);
			});
			return (
				<f.lV className="DialogBody">
					<g.Z flow-children="grid">
						<table className="DialogSpanningTable InvitedUsersTable">
							<thead>
								<tr className="headerRow">
									<th className="friendColumn">
										{(0, Localize)(
											"#GroupSettings_InvitedUsers_InvitedHeader",
										)}{" "}
									</th>
									<th className="dateColumn">
										{" "}
										{(0, Localize)(
											"#GroupSettings_InvitedUsers_InvitedDate",
										)}{" "}
									</th>
									<th className="buttonColumn"> </th>
								</tr>
							</thead>
							<tbody>{t}</tbody>
						</table>
					</g.Z>
				</f.lV>
			);
		}
		return (
			<f.lV>
				{invitedUsers.loadingState == "pending" ? (
					<y.t size="medium" />
				) : (
					(0, Localize)("#GroupSettings_InvitedUsers_Failed")
				)}
			</f.lV>
		);
	}
	render() {
		const { group } = this.props;
		const t = group.BCanInvite();
		return (
			<>
				<P>{(0, Localize)("#GroupSettings_InvitedUsers_Section")}</P>
				{!t && <Ne />}
				{this.RenderContent()}
			</>
		);
	}
};
Cg([v.oI], Te.prototype, "RevokeInvite", null);
Te = Cg([C.PA], Te);
let Re = class extends _.Component {
	static contextType = U.QO;
	componentDidMount() {
		let e = this.props.group;
		let t = this.props.bans;
		if (t.loadingState == "pending") {
			e.GetBanList().then((e) => {
				setTimeout(() => {
					t.rgBans = e.rgBans;
					t.loadingState = e.loadingState;
				}, 500);
			});
		}
	}
	OnClickUnban(e, t) {
		let r = c.xm.FriendStore.GetPlayer(t);
		let n = e.currentTarget.ownerDocument.defaultView;
		let i = (
			<A.bP className="friend" friend={r} context={null} disableContextMenu />
		);
		Ci(
			n,
			(0, Localize)("#GroupSettings_Bans_UnbanTitle"),
			(0, Localize)("#GroupSettings_Bans_UnbanBody", r.display_name),
			(0, Localize)("#GroupSettings_Bans_UnbanConfirm"),
			(0, Localize)("#Button_Cancel"),
			true,
			i,
		)
			.then(() => {
				this.props.group
					.SetUserBanState(t, false)
					.then(() => {
						FindAndRemoveWhere(
							this.props.bans.rgBans,
							(e) => e.accountid() === t,
						);
					})
					.catch((e) => {
						Ic(
							n,
							(0, Localize)("#Generic_Error"),
							(0, Localize)("#GroupSettings_Bans_UnbanGenericError"),
						);
					});
			})
			.catch(() => {});
	}
	FormatDate(e) {
		return c.xm.RTime32ToDate(e).toLocaleString([], {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
	}
	RenderContent() {
		const { bans } = this.props;
		let t;
		if (bans.loadingState == "loaded") {
			if (bans.rgBans.length == 0) {
				return <f.lV>{(0, Localize)("#GroupSettings_Bans_NoOneBanned")}</f.lV>;
			} else {
				t = bans.rgBans.map((e) => {
					let t = {
						friend: c.xm.FriendStore.GetPlayer(e.accountid()),
						noActions: this.context?.IN_GAMEPADUI,
						context: null,
					};
					return (
						<tr className="hoverRow" key={e.accountid()}>
							<td className="friendCell">
								{" "}
								<A.bP {...t} />{" "}
							</td>
							<td className="dateCell"> {this.FormatDate(e.time_banned())} </td>
							<td className="buttonCell">
								{" "}
								<f.$n onClick={(t) => this.OnClickUnban(t, e.accountid())}>
									{(0, Localize)("#GroupSettings_Bans_RevokeBan")}
								</f.$n>
							</td>
						</tr>
					);
				});
				return (
					<f.lV className="DialogBody">
						<table className="DialogSpanningTable BannedUsersTable">
							<thead>
								<tr className="headerRow">
									<th className="friendColumn">
										{(0, Localize)("#GroupSettings_Bans_InvitedHeader")}{" "}
									</th>
									<th className="dateColumn">
										{" "}
										{(0, Localize)("#GroupSettings_Bans_BannedDate")}{" "}
									</th>
									<th className="buttonColumn"> </th>
								</tr>
							</thead>
							<tbody>{t}</tbody>
						</table>
					</f.lV>
				);
			}
		}
		{
			let t;
			t =
				bans.loadingState == "pending" ? (
					<y.t size="medium" />
				) : bans.loadingState == "denied" ? (
					(0, Localize)("#GroupSettings_Bans_AccessDenied")
				) : (
					(0, Localize)("#GroupSettings_Bans_Failed")
				);
			return <f.lV className="DialogBody">{t}</f.lV>;
		}
	}
	render() {
		const { group } = this.props;
		const t = group.BCanBan();
		return (
			<>
				<P>{(0, Localize)("#GroupSettings_Bans_Section")}</P>
				{!t && <Ne />}
				{this.RenderContent()}
			</>
		);
	}
};
Cg([v.oI], Re.prototype, "OnClickUnban", null);
Re = Cg([C.PA], Re);
const Ne = (e) => (
	<div className={x.Notification}>
		<b.c_I />
		{e.children || (0, Localize)("#Chat_Settings_Permission_Denied")}
	</div>
);
