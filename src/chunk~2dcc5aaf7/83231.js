import {
	ClientRectToScreenCoords,
	No,
	SY,
} from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./46970.js";
import a from "./41230.js";
import s from "./63696.js";
import o from "./7470.js";
import l, { yq } from "./11131.js";
import u from "./52451.js";
import d from "./95773.js";
import A from "./23024.js";
import p from "./8573.js";
import g from "./27337.js";
import h from "./36032.js";
import C from "./92251.js";
export function Rg(e) {
	return (
		<C.g
			target={e.target}
			className="friendHover miniProfileHover"
			visibilityObserver={e.hoverInstance}
			onNoSpace={e.onNoSpace}
			direction={e.direction}
		>
			<A6 hoverInstance={e.hoverInstance} />
		</C.g>
	);
}
let F = class extends s.Component {
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
			return <g.y src={this.state.broadcastInfo.m_strThumbnailUrl} />;
		} else {
			return null;
		}
	}
};
F = Cg([a.PA], F);
class B_1 extends s.Component {
	render() {
		let e =
			d.xm.FriendStore.FriendGroupStore.incoming_invites_group.map_steamid_to_mutual_friends.get(
				this.props.friend.steamid64,
			);
		if (e != null) {
			let t = 10;
			let r = (
				<div className="mutualFriendTitle">
					{" "}
					{Localize("#FriendGroup_MutualFriends_Title")}{" "}
				</div>
			);
			let n = [];
			let i = Array.from(e);
			for (let e = 0; e < i.length && e < t; e++) {
				let t = d.xm.FriendStore.GetFriend(i[e]);
				n.push(
					<div className="mutualFriend" key={t.steamid64}>
						<img
							className="mutualFriendAvatar"
							src={t.persona.avatar_url_medium}
						/>
						<div className="mutualFriendLabel">{t.display_name}</div>
					</div>,
				);
			}
			if (i.length >= t) {
				n.push(
					<div className="mutualFriend">
						<div className="mutualFriendLabel plusOthersLabel">
							{LocalizePlural(
								"#FriendGroup_MutualFriends_Others",
								i.length - t,
							)}
						</div>
					</div>,
				);
			}
			return (
				<div className="mutualFriendsContainer">
					{" "}
					{r} <div> {n} </div>{" "}
				</div>
			);
		}
		return <div />;
	}
}
export let A6 = class extends s.Component {
	constructor(e) {
		super(e);
	}
	render() {
		let e = this.props.hoverInstance.hover;
		let e_persona = e.persona;
		let r = {
			className: "miniProfileHoverInner",
			persona: e.persona,
			data_loader: e.data_loader,
		};
		if (e_persona.is_watchingbroadcast) {
			r.broadcast_description = e.friend.GetBroadcastDescription();
			r.broadcast_thumbnail = (
				<div className="watchingbroadcastThumbnail">
					<F broadcastAccountID={e_persona.m_broadcastAccountId} />
				</div>
			);
		}
		if (e.friend.has_nickname) {
			r.nickname = e.friend.nickname;
		}
		r.is_friend = e.friend.is_friend || e.friend == d.xm.FriendStore.self;
		r.is_blocked = e.friend.is_blocked;
		r.friend_relationship = e.friend.efriendrelationship;
		let n = <div />;
		let a = this.props.hoverInstance.context;
		if (
			a &&
			a.friendGroup &&
			a.friendGroup.m_eDisplayType == i.oy.eIncomingInvites
		) {
			n = <B_1 friend={e.friend} />;
		}
		r.mutual_friends = n;
		return <h.Vr {...r} />;
	}
};
A6 = Cg([a.PA], A6);
class S extends l.Ad {
	m_hoverProps;
	m_reactRoot;
	constructor(e, t) {
		super("hoverpopup", {
			title: "hover",
			html_class: "friendsui-container HoverPopup client_chat_frame",
			body_class: `HoverPopupBody Hover${e.className}`,
			replace_existing_popup: true,
			target_browser: t,
			window_opener_id:
				e.target.ownerDocument.defaultView?.SteamClient.Browser.GetBrowserID(),
			eCreationFlags: yq(l.Dr.Tooltip),
		});
		this.m_hoverProps = e;
	}
	UpdateParamsBeforeShow(e) {
		let t = ClientRectToScreenCoords(
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
			<B {...this.m_hoverProps} popup={e}>
				{r}
			</B>,
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
		return <A6 hoverInstance={this.m_instance} />;
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
		return (
			<div className="HoverPositionPopup" ref={this.bindHover}>
				{this.props.children}
			</div>
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
		let i = ClientRectToScreenCoords(n, t.getBoundingClientRect());
		let a = ClientRectToScreenCoords(r, e.getBoundingClientRect());

		let { left, top } = i;

		let r_screen = r.screen;
		let m = 0;
		if (r_screen.availLeft) {
			m = r_screen.availLeft;
		}
		let u = i.right + No(a) + 2;
		let d = r.screen.availWidth + m - u;
		let A = i.left - No(a) - m;
		left = d < 2 && A > d ? i.left - No(a) - 3 + 3 : i.left + No(i) - -3;
		let p = 0;
		if (SY(i) < 48) {
			p = Math.floor(SY(i) / 2) - 24;
		}
		top = i.top - 15 + p;
		if (i.top + SY(a) + 0 > r.screen.availHeight) {
			let t = SY(a) + 0 - (r.screen.availHeight - i.top);
			let n = e.querySelector(".miniprofile_ingame") != null ? 78 : 24;
			t = Math.min(SY(a) - n, t);
			top = i.top - t;
		}
		left = Math.floor(left);
		top = Math.floor(top);
		let g = Math.ceil(No(a));
		let h = Math.ceil(SY(a));
		if (left != this.state.x) {
			this.setState({
				x: left,
			});
		}
		if (top != this.state.y) {
			this.setState({
				y: top,
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
Cg([u.oI], B.prototype, "bindHover", null);
B = Cg([a.PA], B);
