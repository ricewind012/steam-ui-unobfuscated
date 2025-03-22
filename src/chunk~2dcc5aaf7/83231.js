var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./46970.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./7470.js");
var l = require(/*webcrack:missing*/ "./11131.js");
var c = require(/*webcrack:missing*/ "./54644.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require("./95773.js");
var A = require("./23024.js");
var p = require(/*webcrack:missing*/ "./8573.js");
var g = require("./27337.js");
var h = require("./36032.js");
var C = require(/*webcrack:missing*/ "./92251.js");
export function Rg(e) {
	return s.createElement(
		C.g,
		{
			target: e.target,
			className: "friendHover miniProfileHover",
			visibilityObserver: e.hoverInstance,
			onNoSpace: e.onNoSpace,
			direction: e.direction,
		},
		s.createElement(A6, {
			hoverInstance: e.hoverInstance,
		}),
	);
}
let f = class extends s.Component {
	constructor(e) {
		super(e);
		const t =
			this.props.broadcastAccountID &&
			p.b.InitFromAccountID(this.props.broadcastAccountID);
		this.state = {
			broadcastInfo:
				t && A.BroadcastWatchStore.StartInfo(t.ConvertTo64BitString()),
		};
	}
	componentDidUpdate(e) {
		if (this.props.broadcastAccountID !== e.broadcastAccountID) {
			if (this.state.broadcastInfo) {
				A.BroadcastWatchStore.StopInfo(this.state.broadcastInfo);
			}
			const e =
				this.props.broadcastAccountID &&
				p.b.InitFromAccountID(this.props.broadcastAccountID);
			this.setState({
				broadcastInfo:
					e && A.BroadcastWatchStore.StartInfo(e.ConvertTo64BitString()),
			});
		}
	}
	componentWillUnmount() {
		if (this.state.broadcastInfo) {
			A.BroadcastWatchStore.StopInfo(this.state.broadcastInfo);
		}
	}
	render() {
		if (this.state.broadcastInfo) {
			return s.createElement(g.y, {
				src: this.state.broadcastInfo.m_strThumbnailUrl,
			});
		} else {
			return null;
		}
	}
};
f = (0, n.Cg)([a.PA], f);
class b extends s.Component {
	render() {
		let e =
			d.xm.FriendStore.FriendGroupStore.incoming_invites_group.map_steamid_to_mutual_friends.get(
				this.props.friend.steamid64,
			);
		if (e != null) {
			let t = 10;
			let r = s.createElement(
				"div",
				{
					className: "mutualFriendTitle",
				},
				" ",
				(0, m.we)("#FriendGroup_MutualFriends_Title"),
				" ",
			);
			let n = [];
			let i = Array.from(e);
			for (let e = 0; e < i.length && e < t; e++) {
				let t = d.xm.FriendStore.GetFriend(i[e]);
				n.push(
					s.createElement(
						"div",
						{
							className: "mutualFriend",
							key: t.steamid64,
						},
						s.createElement("img", {
							className: "mutualFriendAvatar",
							src: t.persona.avatar_url_medium,
						}),
						s.createElement(
							"div",
							{
								className: "mutualFriendLabel",
							},
							t.display_name,
						),
					),
				);
			}
			if (i.length >= t) {
				n.push(
					s.createElement(
						"div",
						{
							className: "mutualFriend",
						},
						s.createElement(
							"div",
							{
								className: "mutualFriendLabel plusOthersLabel",
							},
							(0, m.Yp)("#FriendGroup_MutualFriends_Others", i.length - t),
						),
					),
				);
			}
			return s.createElement(
				"div",
				{
					className: "mutualFriendsContainer",
				},
				" ",
				r,
				" ",
				s.createElement("div", null, " ", n, " "),
				" ",
			);
		}
		return s.createElement("div", null);
	}
}
export let A6 = class extends s.Component {
	constructor(e) {
		super(e);
	}
	render() {
		let e = this.props.hoverInstance.hover;
		let t = e.persona;
		let r = {
			className: "miniProfileHoverInner",
			persona: e.persona,
			data_loader: e.data_loader,
		};
		if (t.is_watchingbroadcast) {
			r.broadcast_description = e.friend.GetBroadcastDescription();
			r.broadcast_thumbnail = s.createElement(
				"div",
				{
					className: "watchingbroadcastThumbnail",
				},
				s.createElement(f, {
					broadcastAccountID: t.m_broadcastAccountId,
				}),
			);
		}
		if (e.friend.has_nickname) {
			r.nickname = e.friend.nickname;
		}
		r.is_friend = e.friend.is_friend || e.friend == d.xm.FriendStore.self;
		r.is_blocked = e.friend.is_blocked;
		r.friend_relationship = e.friend.efriendrelationship;
		let n = s.createElement("div", null);
		let a = this.props.hoverInstance.context;
		if (
			a &&
			a.friendGroup &&
			a.friendGroup.m_eDisplayType == i.oy.eIncomingInvites
		) {
			n = s.createElement(b, {
				friend: e.friend,
			});
		}
		r.mutual_friends = n;
		return s.createElement(h.Vr, {
			...r,
		});
	}
};
A6 = (0, n.Cg)([a.PA], A6);
class S extends l.Ad {
	m_hoverProps;
	m_reactRoot;
	constructor(e, t) {
		super("hoverpopup", {
			title: "hover",
			html_class: "friendsui-container HoverPopup client_chat_frame",
			body_class: "HoverPopupBody Hover" + e.className,
			replace_existing_popup: true,
			target_browser: t,
			window_opener_id:
				e.target.ownerDocument.defaultView?.SteamClient.Browser.GetBrowserID(),
			eCreationFlags: (0, l.yq)(l.Dr.Tooltip),
		});
		this.m_hoverProps = e;
	}
	UpdateParamsBeforeShow(e) {
		let t = c.pd(
			this.m_hoverProps.target.ownerDocument.defaultView,
			this.m_hoverProps.target.getBoundingClientRect(),
		);
		e.dimensions = {
			left: t.right,
			top: t.top,
			width: 1,
			height: 1,
		};
		e.availscreenwidth =
			this.m_hoverProps.target.ownerDocument.defaultView.screen.availWidth;
		e.availscreenheight =
			this.m_hoverProps.target.ownerDocument.defaultView.screen.availHeight;
		return e;
	}
	Render(e, t) {
		let r = this.InternalRender();
		this.m_reactRoot = o.H(t);
		this.m_reactRoot.render(
			s.createElement(
				B,
				{
					...this.m_hoverProps,
					popup: e,
				},
				r,
			),
		);
	}
	OnClose() {
		this.m_reactRoot.unmount();
	}
}
export class Io extends S {
	m_instance;
	constructor(e, t, r) {
		super(
			{
				target: e,
				visibilityObserver: t,
				className: "friendHover miniProfileHover",
			},
			r,
		);
		this.m_instance = t;
	}
	OnLoad() {}
	OnResize() {}
	InternalRender() {
		return s.createElement(A6, {
			hoverInstance: this.m_instance,
		});
	}
}
let B = class extends s.Component {
	m_elHover;
	m_bNoSpace = false;
	state = {
		x: undefined,
		y: undefined,
		width: undefined,
		height: undefined,
		hoverPositionReady: false,
	};
	bindHover(e) {
		this.m_elHover = e || undefined;
		this.positionHover();
	}
	componentDidUpdate() {
		this.positionHover();
	}
	render() {
		if (this.state.x !== undefined) {
			this.props.target.ownerDocument.defaultView.SteamClient.Window.GetWindowRestoreDetails().then(
				(e) => {
					const t =
						this.state.x - this.props.target.ownerDocument.defaultView.screenX;
					const r =
						this.state.y - this.props.target.ownerDocument.defaultView.screenY;
					try {
						this.props.popup.SteamClient.Window.PositionWindowRelative(
							e,
							t,
							r,
							this.state.width,
							this.state.height,
						);
					} catch (e) {
						console.error(e);
					}
				},
			);
		}
		return s.createElement(
			"div",
			{
				className: "HoverPositionPopup",
				ref: this.bindHover,
			},
			this.props.children,
		);
	}
	positionHover() {
		let e = this.m_elHover;
		let t = this.props.target;
		if (!e || !t) {
			return;
		}
		if (
			this.state.hoverPositionReady &&
			this.props.visibilityObserver &&
			!this.props.visibilityObserver.visible
		) {
			return;
		}
		let r = this.props.popup;
		let n = t.ownerDocument.defaultView;
		if (!r || r.closed) {
			return;
		}
		let i = c.pd(n, t.getBoundingClientRect());
		let a = c.pd(r, e.getBoundingClientRect());
		let s = i.left;
		let o = i.top;
		let l = r.screen;
		let m = 0;
		if (l.availLeft) {
			m = l.availLeft;
		}
		let u = i.right + c.No(a) + 2;
		let d = r.screen.availWidth + m - u;
		let A = i.left - c.No(a) - m;
		s = d < 2 && A > d ? i.left - c.No(a) - 3 + 3 : i.left + c.No(i) - -3;
		let p = 0;
		if (c.SY(i) < 48) {
			p = Math.floor(c.SY(i) / 2) - 24;
		}
		o = i.top - 15 + p;
		if (i.top + c.SY(a) + 0 > r.screen.availHeight) {
			let t = c.SY(a) + 0 - (r.screen.availHeight - i.top);
			let n = e.querySelector(".miniprofile_ingame") != null ? 78 : 24;
			t = Math.min(c.SY(a) - n, t);
			o = i.top - t;
		}
		s = Math.floor(s);
		o = Math.floor(o);
		let g = Math.ceil(c.No(a));
		let h = Math.ceil(c.SY(a));
		if (s != this.state.x) {
			this.setState({
				x: s,
			});
		}
		if (o != this.state.y) {
			this.setState({
				y: o,
			});
		}
		if (g != this.state.width) {
			this.setState({
				width: g,
			});
		}
		if (h != this.state.height) {
			this.setState({
				height: h,
			});
		}
		if (!this.state.hoverPositionReady) {
			this.setState({
				hoverPositionReady: true,
			});
		}
	}
};
(0, n.Cg)([u.oI], B.prototype, "bindHover", null);
B = (0, n.Cg)([a.PA], B);
