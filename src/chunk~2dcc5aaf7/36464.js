import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./41230.js";
import s from "./17231.js";
import o from "./52451.js";
import l from "./36032.js";
import c from "./15489.js";
import m, { bg, _k, tj } from "./68292.js";
import u from "./11131.js";
export function Cc(e, t, r) {
	if (e.shiftKey) {
		return;
	}
	const n = bg()?.GetFriend(t.persona.m_steamid.GetAccountID());
	if (n) {
		const t = _k(r.ownerWindow);
		tj(
			t,
			{
				chatContext: "friendslist",
			},
			n,
			e,
		);
	}
	e.stopPropagation();
	e.preventDefault();
}
export function ul(e) {
	SteamClient.Messaging.PostMessage(
		"LibraryCommands",
		"ShowFriendChatDialog",
		JSON.stringify({
			steamid: e.persona.m_steamid.ConvertTo64BitString(),
		}),
	);
}
let P = class extends i.Component {
	render() {
		let e = this.props.friend;
		e.miniProfileData.EnsureCommunityDataLoaded();
		let t = {
			persona: this.props.friend.persona,
			data_loader: e.miniProfileData,
			is_friend: true,
		};
		if (e.nickname) {
			t.nickname = e.nickname;
		}
		if (this.props.renderPlaytime) {
			const [e, r] = this.props.renderPlaytime();
			if (r) {
				if (e) {
					t.in_game_section_additional = r;
				} else {
					t.bottom_section_additional = r;
				}
			}
		}
		return <l.Vr {...t} />;
	}
};
P = Cg([a.PA], P);
export let fH = class extends i.Component {
	static contextType = u.gs;
	RenderMiniProfile() {
		this.props.friend.miniProfileData.EnsureCommunityDataLoaded();
		return (
			<P
				friend={this.props.friend}
				renderPlaytime={this.props.renderPlaytime}
			/>
		);
	}
	OnMouseEnter(e) {
		this.props.friend.miniProfileData.EnsureCommunityDataLoaded();
	}
	render() {
		const {
			friend,
			size,
			onClick,
			statusStyle,
			statusPosition,
			renderPlaytime,
			...l
		} = this.props;
		const e_persona = friend.persona;
		let u =
			onClick ||
			((t) => {
				ul(friend);
			});
		return (
			<c.z
				{...l}
				onMouseEnter={this.OnMouseEnter}
				renderHover={this.RenderMiniProfile}
				style={{
					width: "fit-content",
				}}
			>
				<s.i8
					persona={e_persona}
					size={size}
					statusStyle={statusStyle}
					statusPosition={statusPosition}
					onClick={onClick}
					onDoubleClick={u}
					onContextMenu={(t) => {
						Cc(t, friend, this.context);
					}}
				/>
			</c.z>
		);
	}
};
Cg([o.oI], fH.prototype, "RenderMiniProfile", null);
Cg([o.oI], fH.prototype, "OnMouseEnter", null);
fH = Cg([a.PA], fH);
