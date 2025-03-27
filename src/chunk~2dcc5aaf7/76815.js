import { MoveElement } from "../../actual_src/utils/arrayutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a from "./3756.js";
import s from "./66146.js";
import o from "./8653.js";
import l from "./95773.js";
import c, { CO, _k, h8 } from "./52912.js";
import m from "./70839.js";
import u from "./53414.js";
import d, { Tz } from "./27847.js";
import A, { tj } from "./97422.js";
import p, { Gn } from "./89193.js";
import g from "./41230.js";
import h from "./63696.js";
import C from "./23038.js";
import _ from "./21866.js";
import { lX } from "./31084.js";
import b from "./69164.js";
import y from "./88750.js";
import S from "./64608.js";
import w from "./42318.js";
import B, { XB } from "./52451.js";
import v from "./7558.js";
import E, { HT } from "./13869.js";
import M from "./50376.js";
import T from "./27773.js";
import { A as A_1 } from "./90765.js";
import N from "./51079.js";
import G from "./98829.js";
import O, { Pr } from "./72476.js";
import P, { u as u_1 } from "./17385.js";
import L from "./83665.js";
class I extends h.Component {
	m_elScroll;
	m_animation;
	constructor(e) {
		super(e);
		this.state = {
			nCalculatedHeightPx: undefined,
			bLeftSliderVisible: false,
			bRightSliderVisible: false,
		};
	}
	OnRef(e) {
		this.UnbindWindowHandlers();
		if (e) {
			this.m_elScroll = e;
			if (e.ownerDocument.defaultView) {
				this.m_elScroll.ownerDocument.defaultView.addEventListener(
					"resize",
					this.CheckScrollPosition,
				);
			}
			this.CheckScrollPosition();
		}
	}
	CheckScrollPosition() {
		if (
			!this.m_elScroll ||
			(this.m_animation && this.m_animation.BIsActive())
		) {
			return;
		}
		let e = 0;
		for (
			let t = this.m_elScroll.firstElementChild;
			t;
			t = t.nextElementSibling
		) {
			e = Math.max(e, t.getBoundingClientRect().height);
		}
		if (e != this.state.nCalculatedHeightPx) {
			this.setState({
				nCalculatedHeightPx: e,
			});
		}
		this.UpdateSliderControlsForScrollOffset(this.m_elScroll.scrollLeft);
	}
	UpdateSliderControlsForScrollOffset(e) {
		let t = e > 1;
		let r =
			e + this.m_elScroll.getBoundingClientRect().width <
			this.m_elScroll.scrollWidth - 1;
		if (t != this.state.bLeftSliderVisible) {
			this.setState({
				bLeftSliderVisible: t,
			});
		}
		if (r != this.state.bRightSliderVisible) {
			this.setState({
				bRightSliderVisible: r,
			});
		}
	}
	AnimateScrollLeftTo(e) {
		if (this.m_animation) {
			this.m_animation.Cancel();
		}
		this.m_animation = new v.JV(
			this.m_elScroll,
			{
				scrollLeft: e,
			},
			{
				msDuration: 500,
				onComplete: this.CheckScrollPosition,
				timing: "cubic-in-out",
			},
		);
		this.m_animation.Start();
		this.UpdateSliderControlsForScrollOffset(e);
	}
	OnSlideLeftClick() {
		if (!this.m_animation || !this.m_animation.BIsActive()) {
			if (this.m_elScroll) {
				this.AnimateScrollLeftTo(
					Math.max(
						0,
						this.m_elScroll.scrollLeft -
							this.m_elScroll.getBoundingClientRect().width,
					),
				);
			}
		}
	}
	OnSlideRightClick() {
		if (!this.m_animation || !this.m_animation.BIsActive()) {
			if (this.m_elScroll) {
				this.AnimateScrollLeftTo(
					Math.min(
						this.m_elScroll.scrollWidth -
							this.m_elScroll.getBoundingClientRect().width,
						this.m_elScroll.scrollLeft +
							this.m_elScroll.getBoundingClientRect().width,
					),
				);
			}
		}
	}
	OnWheel(e) {
		if (e && e.nativeEvent) {
			if (e.nativeEvent.deltaY < 0) {
				this.OnSlideLeftClick();
			} else {
				this.OnSlideRightClick();
			}
		}
	}
	GetScrollRef() {
		return this.m_elScroll;
	}
	componentWillUnmount() {
		this.UnbindWindowHandlers();
		if (this.m_animation) {
			this.m_animation.Cancel();
		}
	}
	componentDidUpdate() {
		this.CheckScrollPosition();
	}
	UnbindWindowHandlers() {
		if (this.m_elScroll) {
			if (this.m_elScroll.ownerDocument.defaultView) {
				this.m_elScroll.ownerDocument.defaultView.removeEventListener(
					"resize",
					this.CheckScrollPosition,
				);
			}
			this.m_elScroll = undefined;
		}
	}
	render() {
		let e = "auto";
		if (this.state.nCalculatedHeightPx) {
			e = `${this.state.nCalculatedHeightPx}px`;
		}
		return (
			<div
				onWheel={this.OnWheel}
				className="HorizontalMiniSlider"
				style={{
					height: e,
				}}
			>
				<div
					className={`HorizontalMiniSliderScroll ${this.props.className}`}
					onScroll={this.CheckScrollPosition}
					ref={this.OnRef}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}
Cg([B.oI], I.prototype, "OnRef", null);
Cg([B.oI], I.prototype, "CheckScrollPosition", null);
Cg([B.oI], I.prototype, "OnSlideLeftClick", null);
Cg([B.oI], I.prototype, "OnSlideRightClick", null);
Cg([B.oI], I.prototype, "OnWheel", null);
const F = N;
export let dH = class extends h.Component {
	static contextType = O.QO;
	m_mapTabs = new Map();
	m_rgOrderedRenderedTabs = [];
	m_bUsePopups = false;
	m_nInitialTabDragOffset = -1;
	m_window;
	m_nTheaterTopHoverHeight = 12;
	m_elchatTabDiv;
	m_elScroll;
	m_animation;
	m_fnUnregisterDropComplete = undefined;
	m_tabDrag = undefined;
	constructor(e) {
		super(e);
		Gn(this);
		this.state = {
			iDragIndex: 0,
			windowWidth: 0,
			bTheaterModeTopHovered: false,
		};
	}
	componentDidUpdate() {
		this.FixScrollLocation();
	}
	componentDidMount() {
		let e = this.props.popup ? this.props.popup.window : window;
		if (e) {
			e.addEventListener("resize", this.OnWindowResizeEvent);
		}
		if (this.m_elchatTabDiv) {
			this.setState({
				windowWidth: this.m_elchatTabDiv.clientWidth,
			});
			this.UpdateWindowIcon();
		}
	}
	componentWillUnmount() {
		let e = this.props.popup ? this.props.popup.window : window;
		if (e) {
			e.removeEventListener("resize", this.OnWindowResizeEvent);
		}
	}
	OnWindowResizeEvent() {
		if (this.m_elchatTabDiv) {
			this.setState({
				windowWidth: this.m_elchatTabDiv.clientWidth,
			});
		}
	}
	FocusActiveTab() {
		let e = this.m_mapTabs.get(this.props.activeTab.GetUniqueID());
		if (!e) {
			return false;
		}
		let t = e.GetChatTabRef();
		return !!t && (t.focus(), true);
	}
	SetDragTab(e) {
		if (e !== undefined) {
			this.m_fnUnregisterDropComplete =
				c.ZM.DragDropManager.RegisterForDropComplete(this.HandleDropComplete);
		} else if (this.m_fnUnregisterDropComplete) {
			this.m_fnUnregisterDropComplete.Unregister();
			this.m_fnUnregisterDropComplete = undefined;
		}
		this.m_tabDrag = e;
		this.m_nInitialTabDragOffset = -1;
	}
	GetDragTab() {
		return this.m_tabDrag;
	}
	HandleDropComplete(e) {
		this.m_fnUnregisterDropComplete = undefined;
		this.m_tabDrag = undefined;
	}
	FixScrollLocation() {
		if (!this.m_elScroll) {
			return;
		}
		if (!this.props.activeTab) {
			return;
		}
		let e = this.m_mapTabs.get(this.props.activeTab.GetUniqueID());
		if (!e) {
			return;
		}
		let t = e.GetChatTabRef();
		if (!t) {
			return;
		}
		let t_offsetLeft = t.offsetLeft;
		let n = t.offsetLeft + t.offsetWidth;
		let i = Math.ceil(this.m_elScroll.scrollLeft + this.m_elScroll.clientWidth);
		if (t_offsetLeft < i && n > i) {
			let e = n - Math.floor(this.m_elScroll.clientWidth) + 40;
			this.SetScrollLeft(e);
		} else if (t_offsetLeft < this.m_elScroll.scrollLeft + 40 || n > i) {
			let e = t_offsetLeft;
			if (e != 0) {
				e -= 40;
			}
			this.SetScrollLeft(e);
		}
	}
	SetScrollLeft(e) {
		if (this.m_elScroll.scrollLeft != e) {
			if (this.m_animation) {
				this.m_animation.Cancel();
			}
			this.m_animation = new v.JV(
				this.m_elScroll,
				{
					scrollLeft: e,
				},
				{
					msDuration: 300,
					timing: "sine",
					onComplete: () => {},
				},
			);
			this.m_animation.Start();
		}
	}
	UpdateDragOffset(e) {
		let t;
		let e_clientX = e.clientX;
		for (t = 0; t < this.m_rgOrderedRenderedTabs.length; t++) {
			let e = this.m_rgOrderedRenderedTabs[t];
			let n = this.m_mapTabs.get(e.GetUniqueID());
			let i = n && n.GetBoundingClientRect();
			if (
				n &&
				i &&
				e_clientX - i.left < i.width &&
				(this.m_nInitialTabDragOffset < 0 &&
					(this.m_nInitialTabDragOffset = e_clientX - i.left),
				e_clientX - this.m_nInitialTabDragOffset < i.left + i.width / 2)
			) {
				break;
			}
		}
		if (this.state.iDragIndex != t) {
			this.setState({
				iDragIndex: t,
			});
		}
	}
	OnTabRef(e, t) {
		if (t) {
			this.m_mapTabs.set(e, t);
		} else {
			this.m_mapTabs.delete(e);
		}
		this.UpdateWindowIcon();
	}
	OnScrollRef(e) {
		this.m_elScroll = e ? e.GetScrollRef() : null;
	}
	SelectTab(e) {
		this.props.tabSet.ActivateTab(e);
	}
	OnDragStart(e) {
		let t = c.ZM.DragDropManager.GetDragData();
		if (t && t.type == "chattab") {
			t.tabSet = this.props.tabSet;
		}
	}
	OnChatTabContianerRef(e) {
		this.m_elchatTabDiv = e;
	}
	OnDragEnd() {
		this.m_tabDrag = undefined;
	}
	OnBackClick(e) {
		this.props.ResponsiveWindowState.SetActiveView(m.OC.FriendsList);
	}
	ShowFriendsList(e) {
		l.xm.UIStore.SetTheaterMode(false);
		l.xm.UIStore.SetFriendsListCollapsed(CO(e), false);
	}
	StartTopbarEventListener() {
		this.m_elchatTabDiv.ownerDocument.defaultView.addEventListener(
			"mousemove",
			this.OnTopbarHovered,
		);
	}
	OnTopbarHovered(e) {
		let e_clientY = e.clientY;
		if (!l.xm.UIStore.GetTheaterMode()) {
			this.m_elchatTabDiv.ownerDocument.defaultView.removeEventListener(
				"mousemove",
				this.OnTopbarHovered,
			);
		}
		if (e_clientY > this.m_nTheaterTopHoverHeight) {
			if (this.state.bTheaterModeTopHovered) {
				this.setState({
					bTheaterModeTopHovered: false,
				});
				this.m_nTheaterTopHoverHeight = 12;
			}
		} else if (!this.state.bTheaterModeTopHovered) {
			this.m_nTheaterTopHoverHeight = 50;
			this.setState({
				bTheaterModeTopHovered: true,
			});
		}
	}
	OnTabSelectorClick(e) {
		let t =
			this.m_mapTabs.size * 33 +
				(e.currentTarget.offsetTop + e.currentTarget.clientHeight) +
				16 >
			e.currentTarget.ownerDocument.defaultView.innerHeight;
		lX(<X tabSet={this.props.tabSet} />, e.currentTarget, {
			bOverlapHorizontal: true,
			bPreferPopLeft: false,
			bPreferPopTop: false,
			bForcePopup: t,
		});
	}
	UpdateWindowIcon() {
		try {
			if (
				this.props.popup &&
				this.props.popup.window &&
				this.props.popup.window.SteamClient !== undefined
			) {
				let e = false;
				let t = false;
				let r = this.props.tabSet.tabs;
				for (let n of r) {
					if (n.GetUnreadMessageCount() > 0) {
						e = true;
					}
					if (n.IsVoiceActive()) {
						t = true;
					}
				}
				if (t) {
					this.props.popup.window.SteamClient.Window.SetWindowIcon("voice");
				} else if (e) {
					this.props.popup.window.SteamClient.Window.SetWindowIcon("messages");
				} else {
					this.props.popup.window.SteamClient.Window.SetWindowIcon("steam");
				}
			}
		} catch (e) {}
	}
	render() {
		let e = l.xm.UIStore.GetTheaterMode();
		this.UpdateWindowIcon();
		if (this.props.tabSet.tabCount <= 0 && !this.props.popup) {
			return null;
		}
		let t;
		let r = this.props.tabSet.tabs;
		let n = this.props.activeTab;
		let a = false;
		let o = false;
		if (n instanceof s.$C) {
			a = n.isBroadcastShown;
		} else if (n && n.IsBroadcast && n.IsBroadcast()) {
			a = true;
		}
		for (let e of r) {
			if (e.GetUnreadMessageCount() > 0) {
				o = true;
				break;
			}
		}
		if (this.m_tabDrag) {
			let e = r.indexOf(this.m_tabDrag);
			if (e != -1) {
				if (e != this.state.iDragIndex) {
					t = r.slice();
					MoveElement(t, e, Math.min(this.state.iDragIndex, r.length - 1));
				}
			} else if (this.state.iDragIndex < r.length) {
				t = r.slice();
				t.splice(this.state.iDragIndex, 0, this.m_tabDrag);
			} else {
				t = r.concat(this.m_tabDrag);
			}
		}
		r = t || r;
		this.m_rgOrderedRenderedTabs = r;
		let m;
		let u = "ChatTabs titleBarContainer";
		if (this.props.popup) {
			u += " HasWindowControls";
		}
		if (r.length == 1) {
			u += " OneTab";
		} else if (this.state.windowWidth < r.length * 180 + 180) {
			u += " HasTabs";
		}
		if (l.xm.SettingsStore.FriendsSettings.bCompactFriendsList) {
			u += " compactView";
		}
		if (this.state.bTheaterModeTopHovered) {
			u += " TheaterTopHovered";
		}
		if (Pr()) {
			u += " OSX";
		}
		if (this.props.ResponsiveWindowState) {
			m = (
				<div className="ChatTabsBackButton" onClick={this.OnBackClick}>
					{"<<"}
				</div>
			);
		}
		if (a) {
			u += " activeTabHasBroadcast";
		}
		let d;
		let A = false;
		let p = true;
		if (this.props.popup) {
			d = _k(this.props.popup);
			p = l.xm.UIStore.BIsFriendsListSingleWindow(d);
			A = !u_1(d, P.m);
		}
		if (e && this.m_elchatTabDiv) {
			this.StartTopbarEventListener();
		}
		const g =
			(this.m_elchatTabDiv &&
				this.props.tabSet.tabCount * 180 + (i.TS.IN_CLIENT ? 168 : 48) >
					this.m_elchatTabDiv.clientWidth) ||
			false;
		const _ = A;
		return (
			<b.Z
				flow-children="row"
				className={A_1(
					u,
					this.props.showOpenFriendsList && "friendsListCollapsed",
				)}
				onDragStart={this.OnDragStart}
				ref={this.OnChatTabContianerRef}
			>
				{this.props.popup && (
					<T.c
						hideMin={_}
						hideMax={_}
						popup={this.props.popup}
						className="chatTitleBar"
					/>
				)}
				{m}
				{((e && p) || this.props.showOpenFriendsList) && (
					<div
						className="chatTabOpenFriendsList"
						onClick={this.ShowFriendsList}
					>
						<M.YJl />
						{(0, Localize)("#FriendsList_ExpandButton")}
					</div>
				)}
				{this.props.tabSet.tabCount > 0 && (
					<div
						className={A_1(
							"chatTabSetContainer",
							this.context?.IN_GAMEPADUI && "gamepadui",
							i.TS.IN_CLIENT && "inclient",
						)}
					>
						<I className="chatTabList" ref={this.OnScrollRef}>
							<C.A className={F.ChatTabTransitionGroup}>
								{r.map((e, t) => {
									let r = this.props.activeTab == e;
									let n = (t) => this.OnTabRef(e.GetUniqueID(), t);
									let i = {
										enter: F.ChatTabTransition_Enter,
										enterActive: F.ChatTabTransition_EnterActive,
										exit: F.ChatTabTransition_Exit,
										exitActive: F.ChatTabTransition_ExitActive,
									};
									return (
										<L.M classNames={i} key={e.GetUniqueID()} timeout={350}>
											{(t) => (
												<SU
													tab={e}
													active={r}
													selectTab={this.SelectTab}
													ref={n}
													containerRef={t}
													fnOnDragEnd={this.OnDragEnd}
												/>
											)}
										</L.M>
									);
								})}
							</C.A>
						</I>
						{g && !this.context?.IN_GAMEPADUI && (
							<div
								className={`chatTabSelector${o ? " UnreadMessages" : ""}`}
								onClick={this.OnTabSelectorClick}
							>
								<M.GB9 />
								{o && <div className="ChatUnreadMessageIndicator" />}
							</div>
						)}
					</div>
				)}
				<div className="dropTargetBox" />
				{e && (
					<div
						className={`theaterModeHoverSpace${o ? " hasUnreadMessages" : ""}`}
					>
						{o && (
							<div className="ChatUnreadMessageIndicator">
								<div className="chatUnreadCircle" />
							</div>
						)}
					</div>
				)}
			</b.Z>
		);
	}
};
Cg([p.sH], dH.prototype, "m_nTheaterTopHoverHeight", undefined);
Cg([p.sH], dH.prototype, "m_tabDrag", undefined);
Cg([B.oI], dH.prototype, "OnWindowResizeEvent", null);
Cg([B.oI], dH.prototype, "HandleDropComplete", null);
Cg([B.oI], dH.prototype, "OnTabRef", null);
Cg([B.oI], dH.prototype, "OnScrollRef", null);
Cg([B.oI], dH.prototype, "SelectTab", null);
Cg([B.oI], dH.prototype, "OnDragStart", null);
Cg([B.oI], dH.prototype, "OnChatTabContianerRef", null);
Cg([B.oI], dH.prototype, "OnDragEnd", null);
Cg([B.oI], dH.prototype, "OnBackClick", null);
Cg([B.oI], dH.prototype, "ShowFriendsList", null);
Cg([B.oI], dH.prototype, "StartTopbarEventListener", null);
Cg([B.oI], dH.prototype, "OnTopbarHovered", null);
Cg([B.oI], dH.prototype, "OnTabSelectorClick", null);
dH = Cg([g.PA], dH);
let X = class extends h.Component {
	SelectTab(e) {
		this.props.tabSet.ActivateTab(e);
	}
	render() {
		let e = [];
		let t = this.props.tabSet.tabs;
		for (let r of t) {
			let t = (
				<SU
					tab={r}
					active
					selectTab={this.SelectTab}
					fnOnDragEnd={null}
					bDisableContextMenu
				/>
			);
			e.push(
				<y.kt
					key={r.GetUniqueID()}
					className="ChatTabContextMenuItem"
					onSelected={null}
				>
					{t}
				</y.kt>,
			);
		}
		return (
			<y.tz className="ChatTabs ChatTabsContextMenu compactView CompactFriendsList">
				{e}
			</y.tz>
		);
	}
};
Cg([B.oI], X.prototype, "SelectTab", null);
X = Cg([g.PA], X);
export let SU = class extends h.Component {
	static contextType = O.QO;
	m_elChatTab;
	m_bMiddleMouseDown = false;
	BindChatTab(e) {
		this.m_elChatTab = e;
	}
	GetBoundingClientRect() {
		if (this.m_elChatTab) {
			return this.m_elChatTab.getBoundingClientRect();
		} else {
			return undefined;
		}
	}
	GetChatTabRef() {
		return this.m_elChatTab;
	}
	OnDragStart(e) {
		let t = e.clientX - e.currentTarget.getBoundingClientRect().left;
		let r = e.clientY - e.currentTarget.getBoundingClientRect().top;
		c.ZM.DragDropManager.StartDrag({
			type: "chattab",
			tab: this.props.tab,
			offsetX: t,
			offsetY: r,
		});
	}
	OnDragEnd(e) {
		let t = c.ZM.DragDropManager.GetDragData();
		if (t && t.type == "chattab") {
			let r = t;
			let n = false;
			if (r.tabSet) {
				n = l.xm.UIStore.GetPerContextChatData(
					r.tabSet.GetBrowserContext(),
				).BUsePopups();
			}
			if (
				!c.ZM.DragDropManager.BWasDropConsumed() &&
				r.tabSet &&
				r.tabSet.tabCount > 1 &&
				n
			) {
				let t = e.currentTarget.getBoundingClientRect();
				const i = 100;
				let a = t.left - e.clientX;
				let s = t.top - e.clientY;
				if (a * a + s * s > i * i) {
					let t = e.currentTarget.ownerDocument.defaultView;
					let i = {
						left: Math.max(0, e.screenX - r.offsetX),
						top: Math.max(0, e.screenY - r.offsetY),
						width: t.innerWidth,
						height: t.innerHeight,
					};
					this.props.fnOnDragEnd();
					if (n) {
						let t = CO(e);
						e.currentTarget.ownerDocument.defaultView.SteamClient.Window.GetMousePositionDetails().then(
							(e) => {
								if (e) {
									i.left = -r.offsetX;
									i.top = -r.offsetY;
								}
								l.xm.UIStore.MoveTabToNewPopup(t, r.tab, i, e);
							},
						);
					} else {
						l.xm.UIStore.MoveTabToNewPopup(CO(e), r.tab, i);
					}
				}
			}
		}
		c.ZM.DragDropManager.EndDrag();
	}
	OnMouseDown(e) {
		if (e.button == 0) {
			this.props.selectTab(this.props.tab);
		} else if (e.button == 1) {
			e.preventDefault();
			this.m_bMiddleMouseDown = true;
		}
	}
	OnOKButton(e) {
		this.props.selectTab(this.props.tab);
	}
	OnMouseUp(e) {
		if (e.button == 1 && this.m_bMiddleMouseDown) {
			l.xm.UIStore.CloseTab(CO(e), this.props.tab);
			e.preventDefault();
			this.m_bMiddleMouseDown = false;
		}
	}
	OnMouseLeave(e) {
		this.m_bMiddleMouseDown = false;
	}
	OnCloseMouseDown(e) {
		e.stopPropagation();
	}
	OnCloseClick(e) {
		l.xm.UIStore.CloseTab(CO(e), this.props.tab);
		e.stopPropagation();
	}
	OnContextMenu(e) {
		if (this.props.bDisableContextMenu) {
			return;
		}
		let t = this.props.tab;
		if (t.IsChatRoom()) {
			if (t instanceof s.$C) {
				let r = t;
				Tz(e, r.GetGroup(), {
					tab: t,
				});
			}
		} else {
			let t = this.props.tab.GetChatView();
			tj(
				CO(e),
				{
					tab: this.props.tab,
				},
				t.chat.chat_partner,
				e,
			);
		}
	}
	render() {
		let e;
		let t;
		if (this.props.tab.GetChatView()?.IsFriendChat()) {
			e = this.props.tab.GetChatView();
			t = e.chat.accountid_partner;
		}
		let r =
			t != null && l.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(t);
		let n =
			t != null &&
			l.xm.VoiceStore.BPartnerHasAcceptedOrInitiatedOneOnOneChat(t);
		let i = r && !n;
		let a = l.xm.ChatStore.VoiceChat.IsMicMuted();
		let s = this.props.tab;
		let o = s.IsVoiceActive();
		let c = A_1(
			F.ChatTab,
			"no-drag",
			this.props.active && F.Active,
			o && F.VoiceActive,
			o && a && F.MicMuted,
		);
		return (
			<b.Z
				className={c}
				ref={XB(this.BindChatTab, this.props.containerRef)}
				focusable={this.props.selectTab != null}
				draggable
				onSecondaryButton={this.OnCloseClick}
				onSecondaryActionDescription={(0, Localize)(
					"#Chat_CloseTabAction_SteamDeck",
				)}
				onOKButton={this.OnOKButton}
				onMenuButton={this.OnContextMenu}
				onMouseDown={this.OnMouseDown}
				onMouseUp={this.OnMouseUp}
				onMouseLeave={this.OnMouseLeave}
				onDragStart={this.OnDragStart}
				onDragEnd={this.OnDragEnd}
				onContextMenu={this.OnContextMenu}
				onOKActionDescription={null}
				onMenuActionDescription={(0, Localize)("#Chat_Tab_ContextMenu")}
			>
				<V tab={this.props.tab} active={this.props.active}>
					<div className={F.ChatTabRow}>
						{s.IsVoiceActive() && (
							<div
								className={F.MicStatus}
								title={
									a
										? (0, Localize)("#Tooltip_MicStatus_Muted")
										: (0, Localize)("#Tooltip_MicStatus_Active")
								}
							>
								{this.context?.IN_GAMEPADUI ? (
									i ? (
										<M.t$Q />
									) : (
										<M.mrd />
									)
								) : (
									<M.EQ9 off={a} />
								)}
							</div>
						)}
						<w.tH>
							<J tab={this.props.tab} />
						</w.tH>
						<w.tH>
							{this.context?.IN_GAMEPADUI &&
								((e) => {
									if (!e) {
										return null;
									}
									let t = e.chat.accountid_partner;
									let r =
										l.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(t);
									let n =
										l.xm.VoiceStore.BPartnerHasAcceptedOrInitiatedOneOnOneChat(
											t,
										);
									if (!n && !r) {
										return null;
									}
									let i = "";
									let a =
										l.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(t);
									let s = e.chat.chat_partner;
									let o = l.xm.CMInterface.steamid.GetAccountID();
									let c = false;
									let m = false;
									let u = false;
									if (
										l.xm.VoiceStore.GetActiveOneOnOneVoiceChatAccountID() == t
									) {
										c =
											l.xm.VoiceStore.HasBeenAttemptingOverTwoSeconds() ||
											l.xm.VoiceStore.IsAttemptingReconnect();
										m =
											!l.xm.VoiceStore.BIsAccountFullyConnectedToActiveVoiceChat(
												o,
											) || l.xm.VoiceStore.IsAttemptingReconnect();
										u =
											!l.xm.VoiceStore.BIsAccountFullyConnectedToActiveVoiceChat(
												t,
											);
									}
									i =
										r && !n
											? (0, Localize)(
													"#Voice_WaitingForFriendToJoin",
													s.display_name,
												)
											: n && !r
												? a
													? (0, Localize)(
															"#Voice_ChannelRejoinAvailable",
															s.display_name,
														)
													: (0, Localize)(
															"#Voice_ChannelAvailable",
															s.display_name,
														)
												: m
													? c
														? (0, Localize)("#VoiceChatConnecting")
														: ""
													: !m && u
														? (0, Localize)(
																"#VoiceChatParterConnecting",
																s.display_name,
															)
														: (0, Localize)(
																"#Voice_ChannelActive",
																s.display_name,
															);
									return <div className={F.VoiceStatusMessage}>{i}</div>;
								})(e)}
						</w.tH>
						<W
							onClick={this.OnCloseClick}
							onMouseDown={this.OnCloseMouseDown}
						/>
						<H tab={this.props.tab} />
					</div>
				</V>
			</b.Z>
		);
	}
};
function W(e) {
	return (
		<div
			title={(0, Localize)("#Chat_CloseTooltip")}
			className={F.CloseButton}
			onClick={e.onClick}
			onMouseDown={e.onMouseDown}
		>
			<M.sED />
		</div>
	);
}
Cg([B.oI], SU.prototype, "BindChatTab", null);
Cg([B.oI], SU.prototype, "OnDragStart", null);
Cg([B.oI], SU.prototype, "OnDragEnd", null);
Cg([B.oI], SU.prototype, "OnMouseDown", null);
Cg([B.oI], SU.prototype, "OnOKButton", null);
Cg([B.oI], SU.prototype, "OnMouseUp", null);
Cg([B.oI], SU.prototype, "OnMouseLeave", null);
Cg([B.oI], SU.prototype, "OnCloseMouseDown", null);
Cg([B.oI], SU.prototype, "OnCloseClick", null);
Cg([B.oI], SU.prototype, "OnContextMenu", null);
SU = Cg([g.PA], SU);
class V extends h.Component {
	m_refHideHover = h.createRef();
	componentDidUpdate(e) {
		if (!e.active && this.props.active && this.m_refHideHover.current) {
			this.m_refHideHover.current();
		}
	}
	render() {
		let e = this.props;
		let t = e.tab.GetChatView();
		if (t && t.chat instanceof o.s) {
			let r = t.chat.chat_partner;
			return (
				<G.Rg
					key={r.accountid}
					refHideHover={this.m_refHideHover}
					friend={r}
					context={{}}
					disableContextMenu
					direction="bottom"
				>
					{e.children}
				</G.Rg>
			);
		}
		return e.children;
	}
}
let H = class extends h.Component {
	render() {
		const { tab } = this.props;
		if (tab.IsChatRoom() && tab instanceof s.$C) {
			if (!tab.GetGroup().hasUnreadChatMessage) {
				return null;
			}
		} else if (!tab.GetUnreadMessageCount()) {
			return null;
		}
		return (
			<div className={F.UnreadGlow}>
				<div className={F.UnreadCircle} />
			</div>
		);
	}
};
H = Cg([g.PA], H);
let J = class extends h.Component {
	static contextType = O.QO;
	render() {
		let e = this.props.tab.GetChatView();
		if (e && e.chat instanceof o.s) {
			let t = e.chat.chat_partner;
			let r = t.persona.is_ingame || this.context?.IN_GAMEPADUI;
			let n = this.context?.IN_GAMEPADUI ? "Medium" : "X-Small";
			return (
				<div className={F.ChatTabContent_Friend}>
					<G.bP
						friend={e.chat.chat_partner}
						noActions
						context={{
							chat: e.chat,
						}}
						bHideGameName={!r}
						bHideEnhancedRichPresenceLabel={!this.context?.IN_GAMEPADUI}
						bHidePersona={!r}
						bHideSnooze={false}
						avatarSize={n}
					/>
					{this.context?.IN_GAMEPADUI && !t.is_friend && (
						<div className={F.IsNotFriendLabel}>
							{(0, Localize)("#Friend_Menu_NotAFriendLabel")}{" "}
						</div>
					)}
				</div>
			);
		}
		if (e && e.chat instanceof a.d) {
			let e = this.props.tab.GetGroup();
			let t = true;
			return (
				<div className={F.ChatTabContent_ChatRoom}>
					<u.I group={e} smaller={t} smallish={!t} />
					<div className={F.ChatTabContent_ChatRoomName}>
						{this.props.tab.GetTabName()}
					</div>
				</div>
			);
		}
		if (this.props.tab.IsBroadcast()) {
			let e = this.props.tab.GetTabName();
			return (
				<div className={F.ChatTabContent_ChatRoom}>
					<div className="ChatRoomGroupAvatar HasAvatar Smaller">
						<img className="ChatRoomGroupAvatar_Avatar" src={_.td.tabIcon} />
					</div>
					<div className={F.ChatTabContent_ChatRoomName}>{e}</div>
				</div>
			);
		}
		return null;
	}
};
export function XX(e) {
	if (!c.ZM.UIDisplayPrefs.bDontShowVoiceAlert) {
		if (e) {
			HT(
				<Q />,
				e,
				"ActiveVoiceAlert",
				{
					strTitle: (0, Localize)("#Chat_StillInVoiceDialog_Title"),
					popupWidth: 650,
					popupHeight: 340,
				},
				h8(e),
			);
		}
	}
}
J = Cg([g.PA], J);
let Q = class extends h.Component {
	m_strChannelName;
	constructor(e) {
		super(e);
		this.state = {
			bDontShowChecked: false,
			strChatName: "",
		};
		this.m_strChannelName = "";
	}
	DismissDialog() {
		this.props.closeModal();
	}
	OnSubmit() {
		c.ZM.SetUIDisplayPref("bDontShowVoiceAlert", this.state.bDontShowChecked);
		this.props.closeModal();
	}
	OnDialogChecked() {
		this.setState({
			bDontShowChecked: !this.state.bDontShowChecked,
		});
	}
	OnManualVoiceChatExit() {
		l.xm.VoiceStore.OnUserEndVoiceChat();
		this.OnSubmit();
	}
	componentDidMount() {
		this.setState({
			strChatName: l.xm.ChatStore.GetActiveVoiceChat().name,
		});
	}
	render() {
		return (
			<E.x_ onEscKeypress={this.DismissDialog}>
				<S.U9
					classNameContent="CloseActiveVoiceWindowConfirmation"
					onSubmit={this.OnSubmit}
				>
					<S.Y9>
						<div>{(0, Localize)("#Chat_StillInVoiceDialog_Title")}</div>
					</S.Y9>
					<S.nB>
						<div className="activeVoiceDetails">
							{(0, Localize)("#Chat_StillInVoiceDialog_Desc1")}
						</div>
						<div className="activeVoiceDetails">
							{(0, Localize)("#Chat_StillInVoiceDialog_Desc2")}
						</div>
						<div className="voiceControlsExample">
							<G.lg
								name={this.state.strChatName}
								chat={l.xm.ChatStore.GetActiveVoiceChat()}
								nostatus
							/>
							<div className="circleHighlight voiceExit" />
						</div>
					</S.nB>
					<S.wi>
						<div className="_DialogColLayout">
							<S.jn onClick={this.OnSubmit}>
								{(0, Localize)("#Chat_StillInVoiceDialog_KeepChatting")}
							</S.jn>
						</div>
						<div
							className="dontShowConfirmation"
							onClick={this.OnDialogChecked}
						>
							<S.Yh
								checked={this.state.bDontShowChecked}
								onChange={this.OnDialogChecked}
							/>
							{(0, Localize)("#Dialog_DontShowMeAgain")}
						</div>
					</S.wi>
				</S.U9>
			</E.x_>
		);
	}
};
Cg([B.oI], Q.prototype, "DismissDialog", null);
Cg([B.oI], Q.prototype, "OnSubmit", null);
Cg([B.oI], Q.prototype, "OnDialogChecked", null);
Cg([B.oI], Q.prototype, "OnManualVoiceChatExit", null);
Q = Cg([g.PA], Q);
