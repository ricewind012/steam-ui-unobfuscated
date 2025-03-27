import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./95773.js";
import a, { PA } from "./41230.js";
import s, { HT } from "./13869.js";
import o from "./63696.js";
import l from "./96127.js";
import c from "./52451.js";
import u from "./64608.js";
import d from "./69164.js";
import A from "./68665.js";
import { h8, _k } from "./52912.js";
import h from "./98829.js";
import C from "./50376.js";
import { Ic } from "./78060.js";
export function UA(e, t, r, n = false, i) {
	HT(
		<Zw
			browserContext={e}
			chatViewToReplace={r}
			bHideChatNameEntry={n}
			vecInvitePlayers={i}
		/>,
		t,
		"CreateChatDialog",
		{
			strTitle: Localize("#Chat_CreateChatRoom"),
			popupWidth: 664,
			popupHeight: 580,
		},
		h8(t),
	);
}
export function eJ(e, t, r, n) {
	let a = _k(e);
	let s = i.xm.ChatStore.FindNamelessChatGroupWithFriends(r);
	if (s) {
		i.xm.UIStore.ReplaceFriendChatWithGroup(a, t, s);
	} else {
		i.xm.ChatStore.CreateChatRoomGroup(a, "", r, n)
			.then((e) => {
				i.xm.UIStore.GetPerContextChatData(a);
				let r = i.xm.ChatStore.GetChatRoomGroup(e);
				if (r) {
					i.xm.UIStore.ReplaceFriendChatWithGroup(a, t, r);
				}
			})
			.catch(() => {
				Ic(
					e,
					Localize("#Generic_Error"),
					Localize("#Chat_CreateChatRoom_GenericError"),
				);
			});
	}
}
export let Zw = class extends o.Component {
	constructor(e) {
		super(e);
		const t = e.vecInvitePlayers
			? e.vecInvitePlayers.map((e) => i.xm.FriendStore.GetPlayer(e))
			: [];
		this.state = {
			strCurrentNameEntry: "",
			strError: undefined,
			bCreateInFlight: false,
			rgSelectedFriends: t,
		};
	}
	HandleTextEntry(e) {
		this.setState({
			strCurrentNameEntry: e.target.value,
		});
	}
	HandleSubmit(e) {
		if (e) {
			e.preventDefault();
		}
		if (this.state.bCreateInFlight) {
			return;
		}
		let t = GetOwningWindowForEvent(e);
		this.setState((e) => {
			if (!e.bCreateInFlight) {
				this.InternalDoSubmit(t);
			}
			return {
				bCreateInFlight: true,
			};
		});
	}
	InternalDoSubmit(e) {
		const t = this.state.rgSelectedFriends.map((e) =>
			e.persona.m_steamid.ConvertTo64BitString(),
		);
		let r = this.props.chatViewToReplace;
		if (r) {
			let n = new l.$c(this.props.chatViewToReplace.chat.accountid_partner);
			t.push(n.persona.m_steamid.ConvertTo64BitString());
			eJ(e, r, t);
			this.props.closeModal();
			return;
		}
		let n = this.props.bHideChatNameEntry ? "" : this.state.strCurrentNameEntry;
		i.xm.ChatStore.CreateChatRoomGroup(
			this.props.browserContext,
			n,
			t,
			this.props.creationOptions,
		)
			.then((e) => {
				this.props.closeModal();
			})
			.catch(() => {
				this.setState({
					strError: Localize("#Chat_CreateChatRoom_GenericError"),
					bCreateInFlight: false,
				});
			});
	}
	IsChatRoomNameValid() {
		return this.state.strCurrentNameEntry.length > 0;
	}
	render() {
		let e = this.props.chatViewToReplace
			? this.props.chatViewToReplace.chat.chat_partner
			: null;
		let t = Localize("#Chat_CreateChatRoom_Button");
		const r = this.state.rgSelectedFriends.length > 0;
		let n = new Set();
		if (this.props.chatViewToReplace) {
			n.add(this.props.chatViewToReplace.chat.accountid_partner);
		}
		let i = false;
		if (this.state.bCreateInFlight) {
			i = false;
			t = Localize("#GroupSettings_Permissions_Saving");
		} else if (e) {
			i = this.state.rgSelectedFriends.length > 0;
		} else {
			i = this.IsChatRoomNameValid() || r;
			if (this.IsChatRoomNameValid() && !r) {
				t = Localize("#Chat_CreateChatRoom_Button");
			} else if (r && !this.IsChatRoomNameValid()) {
				t = Localize("#Chat_CreateChatRoom_InviteFriends");
			} else if (r && this.IsChatRoomNameValid()) {
				t = Localize("#Chat_CreateChatRoom_Button_wFriends");
			}
		}
		const a =
			this.props.strTitle ||
			(e
				? Localize("#Chat_CreateChatRoom_InviteFriends")
				: Localize("#Chat_CreateChatRoom"));
		return (
			<s.x_ onEscKeypress={this.props.closeModal}>
				<u.U9 classNameContent="CreateChatDialog" onSubmit={this.HandleSubmit}>
					<u.Y9>{a}</u.Y9>
					<u.nB>
						{e && (
							<u.a3>
								<span>
									{Localize("#Chat_CreateChatRoom_With")}
									<span className="DialogHighlight">
										{Localize("#Chat_CreateChatRoom_You")}
									</span>
									{Localize("#Chat_CreateChatRoom_And")}
									<span className="DialogHighlight">{e.display_name}</span>
								</span>
							</u.a3>
						)}
						{this.state.strError && (
							<u.a3 className="nicknameError">{this.state.strError}</u.a3>
						)}
						{!this.props.bHideChatNameEntry && (
							<u.pd
								type="text"
								label={Localize("#Chat_Settings_Room_Name")}
								className="nicknameInput"
								value={this.state.strCurrentNameEntry}
								onChange={this.HandleTextEntry}
								autoFocus
							/>
						)}
						<A.r
							label={Localize("#Chat_DropToInviteGroup")}
							eSort={1}
							autoFocus={this.props.bHideChatNameEntry}
							renderChosenFriend={S}
							excludeFriend={(e) => n.has(e.accountid)}
							onChange={(e) =>
								this.setState({
									rgSelectedFriends: e,
								})
							}
							rgPickedFriends={this.state.rgSelectedFriends}
						/>
					</u.nB>
					<u.wi>
						<u.CB
							strOKText={t}
							onCancel={this.props.closeModal}
							bOKDisabled={!i}
						/>
					</u.wi>
				</u.U9>
			</s.x_>
		);
	}
};
Cg([c.oI], Zw.prototype, "HandleTextEntry", null);
Cg([c.oI], Zw.prototype, "HandleSubmit", null);
Zw = Cg([a.PA], Zw);
let S = PA((e) => (
	<>
		<h.Rg friend={e.friend} context={null}>
			<d.Z
				className="FriendPicker_ChosenFriend"
				onClick={() => {
					e.onClick(e.friend);
				}}
			>
				<span>{e.friend.display_name}</span>
				<C.sED />
			</d.Z>
		</h.Rg>
	</>
));
