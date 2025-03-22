var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./17231.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require("./36032.js");
var c = require("./15489.js");
var m = require("./68292.js");
var u = require(/*webcrack:missing*/ "./11131.js");
export function Cc(e, t, r) {
	if (e.shiftKey) {
		return;
	}
	const n = (0, m.bg)()?.GetFriend(t.persona.m_steamid.GetAccountID());
	if (n) {
		const t = (0, m._k)(r.ownerWindow);
		(0, m.tj)(
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
let p = class extends i.Component {
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
		return i.createElement(l.Vr, {
			...t,
		});
	}
};
p = (0, n.Cg)([a.PA], p);
export let fH = class extends i.Component {
	static contextType = u.gs;
	RenderMiniProfile() {
		this.props.friend.miniProfileData.EnsureCommunityDataLoaded();
		return i.createElement(p, {
			friend: this.props.friend,
			renderPlaytime: this.props.renderPlaytime,
		});
	}
	OnMouseEnter(e) {
		this.props.friend.miniProfileData.EnsureCommunityDataLoaded();
	}
	render() {
		const {
			friend: e,
			size: t,
			onClick: r,
			statusStyle: n,
			statusPosition: a,
			renderPlaytime: o,
			...l
		} = this.props;
		const m = e.persona;
		let u = r
			? undefined
			: (t) => {
					ul(e);
				};
		return i.createElement(
			c.z,
			{
				...l,
				onMouseEnter: this.OnMouseEnter,
				renderHover: this.RenderMiniProfile,
				style: {
					width: "fit-content",
				},
			},
			i.createElement(s.i8, {
				persona: m,
				size: t,
				statusStyle: n,
				statusPosition: a,
				onClick: r,
				onDoubleClick: u,
				onContextMenu: (t) => {
					Cc(t, e, this.context);
				},
			}),
		);
	}
};
(0, n.Cg)([o.oI], fH.prototype, "RenderMiniProfile", null);
(0, n.Cg)([o.oI], fH.prototype, "OnMouseEnter", null);
fH = (0, n.Cg)([a.PA], fH);
