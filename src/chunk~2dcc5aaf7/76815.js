var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./44234.js");
var a = require("./3756.js");
var s = require("./66146.js");
var o = require("./8653.js");
var l = require("./95773.js");
var c = require("./52912.js");
var m = require("./70839.js");
var u = require("./53414.js");
var d = require("./27847.js");
var A = require("./97422.js");
var p = require(/*webcrack:missing*/ "./89193.js");
var g = require(/*webcrack:missing*/ "./41230.js");
var h = require(/*webcrack:missing*/ "./63696.js");
var C = require(/*webcrack:missing*/ "./23038.js");
var _ = require("./21866.js");
var f = require(/*webcrack:missing*/ "./31084.js");
var b = require(/*webcrack:missing*/ "./69164.js");
var y = require(/*webcrack:missing*/ "./88750.js");
var S = require("./64608.js");
var w = require(/*webcrack:missing*/ "./42318.js");
var B = require(/*webcrack:missing*/ "./52451.js");
var v = require("./7558.js");
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
			e = this.state.nCalculatedHeightPx + "px";
		}
		return h.createElement(
			"div",
			{
				onWheel: this.OnWheel,
				className: "HorizontalMiniSlider",
				style: {
					height: e,
				},
			},
			h.createElement(
				"div",
				{
					className: "HorizontalMiniSliderScroll " + this.props.className,
					onScroll: this.CheckScrollPosition,
					ref: this.OnRef,
				},
				this.props.children,
			),
		);
	}
}
(0, n.Cg)([B.oI], I.prototype, "OnRef", null);
(0, n.Cg)([B.oI], I.prototype, "CheckScrollPosition", null);
(0, n.Cg)([B.oI], I.prototype, "OnSlideLeftClick", null);
(0, n.Cg)([B.oI], I.prototype, "OnSlideRightClick", null);
(0, n.Cg)([B.oI], I.prototype, "OnWheel", null);
var E = require("./13869.js");
var M = require(/*webcrack:missing*/ "./50376.js");
var T = require(/*webcrack:missing*/ "./27773.js");
var R = require(/*webcrack:missing*/ "./53833.js");
var k = require(/*webcrack:missing*/ "./90765.js");
var D = require(/*webcrack:missing*/ "./46108.js");
var N = require("./51079.js");
var F = N;
var G = require("./98829.js");
var O = require(/*webcrack:missing*/ "./72476.js");
var P = require(/*webcrack:missing*/ "./17385.js");
var L = require("./83665.js");
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
		(0, p.Gn)(this);
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
		let r = t.offsetLeft;
		let n = t.offsetLeft + t.offsetWidth;
		let i = Math.ceil(this.m_elScroll.scrollLeft + this.m_elScroll.clientWidth);
		if (r < i && n > i) {
			let e = n - Math.floor(this.m_elScroll.clientWidth) + 40;
			this.SetScrollLeft(e);
		} else if (r < this.m_elScroll.scrollLeft + 40 || n > i) {
			let e = r;
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
		let r = e.clientX;
		for (t = 0; t < this.m_rgOrderedRenderedTabs.length; t++) {
			let e = this.m_rgOrderedRenderedTabs[t];
			let n = this.m_mapTabs.get(e.GetUniqueID());
			let i = n && n.GetBoundingClientRect();
			if (
				n &&
				i &&
				r - i.left < i.width &&
				(this.m_nInitialTabDragOffset < 0 &&
					(this.m_nInitialTabDragOffset = r - i.left),
				r - this.m_nInitialTabDragOffset < i.left + i.width / 2)
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
		l.xm.UIStore.SetFriendsListCollapsed((0, c.CO)(e), false);
	}
	StartTopbarEventListener() {
		this.m_elchatTabDiv.ownerDocument.defaultView.addEventListener(
			"mousemove",
			this.OnTopbarHovered,
		);
	}
	OnTopbarHovered(e) {
		let t = e.clientY;
		if (!l.xm.UIStore.GetTheaterMode()) {
			this.m_elchatTabDiv.ownerDocument.defaultView.removeEventListener(
				"mousemove",
				this.OnTopbarHovered,
			);
		}
		if (t > this.m_nTheaterTopHoverHeight) {
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
		(0, f.lX)(
			h.createElement(x, {
				tabSet: this.props.tabSet,
			}),
			e.currentTarget,
			{
				bOverlapHorizontal: true,
				bPreferPopLeft: false,
				bPreferPopTop: false,
				bForcePopup: t,
			},
		);
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
					(0, R.yY)(t, e, Math.min(this.state.iDragIndex, r.length - 1));
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
		if ((0, O.Pr)()) {
			u += " OSX";
		}
		if (this.props.ResponsiveWindowState) {
			m = h.createElement(
				"div",
				{
					className: "ChatTabsBackButton",
					onClick: this.OnBackClick,
				},
				"<<",
			);
		}
		if (a) {
			u += " activeTabHasBroadcast";
		}
		let d;
		let A = false;
		let p = true;
		if (this.props.popup) {
			d = (0, c._k)(this.props.popup);
			p = l.xm.UIStore.BIsFriendsListSingleWindow(d);
			A = !(0, P.u)(d, P.m);
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
		return h.createElement(
			b.Z,
			{
				"flow-children": "row",
				className: (0, k.A)(
					u,
					this.props.showOpenFriendsList && "friendsListCollapsed",
				),
				onDragStart: this.OnDragStart,
				ref: this.OnChatTabContianerRef,
			},
			this.props.popup &&
				h.createElement(T.c, {
					hideMin: _,
					hideMax: _,
					popup: this.props.popup,
					className: "chatTitleBar",
				}),
			m,
			((e && p) || this.props.showOpenFriendsList) &&
				h.createElement(
					"div",
					{
						className: "chatTabOpenFriendsList",
						onClick: this.ShowFriendsList,
					},
					h.createElement(M.YJl, null),
					(0, D.we)("#FriendsList_ExpandButton"),
				),
			this.props.tabSet.tabCount > 0 &&
				h.createElement(
					"div",
					{
						className: (0, k.A)(
							"chatTabSetContainer",
							this.context?.IN_GAMEPADUI && "gamepadui",
							i.TS.IN_CLIENT && "inclient",
						),
					},
					h.createElement(
						I,
						{
							className: "chatTabList",
							ref: this.OnScrollRef,
						},
						h.createElement(
							C.A,
							{
								className: F.ChatTabTransitionGroup,
							},
							r.map((e, t) => {
								let r = this.props.activeTab == e;
								let n = (t) => this.OnTabRef(e.GetUniqueID(), t);
								let i = {
									enter: F.ChatTabTransition_Enter,
									enterActive: F.ChatTabTransition_EnterActive,
									exit: F.ChatTabTransition_Exit,
									exitActive: F.ChatTabTransition_ExitActive,
								};
								return h.createElement(
									L.M,
									{
										classNames: i,
										key: e.GetUniqueID(),
										timeout: 350,
									},
									(t) =>
										h.createElement(sU, {
											tab: e,
											active: r,
											selectTab: this.SelectTab,
											ref: n,
											containerRef: t,
											fnOnDragEnd: this.OnDragEnd,
										}),
								);
							}),
						),
					),
					g &&
						!this.context?.IN_GAMEPADUI &&
						h.createElement(
							"div",
							{
								className: "chatTabSelector" + (o ? " UnreadMessages" : ""),
								onClick: this.OnTabSelectorClick,
							},
							h.createElement(M.GB9, null),
							o &&
								h.createElement("div", {
									className: "ChatUnreadMessageIndicator",
								}),
						),
				),
			h.createElement("div", {
				className: "dropTargetBox",
			}),
			e &&
				h.createElement(
					"div",
					{
						className:
							"theaterModeHoverSpace" + (o ? " hasUnreadMessages" : ""),
					},
					o &&
						h.createElement(
							"div",
							{
								className: "ChatUnreadMessageIndicator",
							},
							h.createElement("div", {
								className: "chatUnreadCircle",
							}),
						),
				),
		);
	}
};
(0, n.Cg)([p.sH], dH.prototype, "m_nTheaterTopHoverHeight", undefined);
(0, n.Cg)([p.sH], dH.prototype, "m_tabDrag", undefined);
(0, n.Cg)([B.oI], dH.prototype, "OnWindowResizeEvent", null);
(0, n.Cg)([B.oI], dH.prototype, "HandleDropComplete", null);
(0, n.Cg)([B.oI], dH.prototype, "OnTabRef", null);
(0, n.Cg)([B.oI], dH.prototype, "OnScrollRef", null);
(0, n.Cg)([B.oI], dH.prototype, "SelectTab", null);
(0, n.Cg)([B.oI], dH.prototype, "OnDragStart", null);
(0, n.Cg)([B.oI], dH.prototype, "OnChatTabContianerRef", null);
(0, n.Cg)([B.oI], dH.prototype, "OnDragEnd", null);
(0, n.Cg)([B.oI], dH.prototype, "OnBackClick", null);
(0, n.Cg)([B.oI], dH.prototype, "ShowFriendsList", null);
(0, n.Cg)([B.oI], dH.prototype, "StartTopbarEventListener", null);
(0, n.Cg)([B.oI], dH.prototype, "OnTopbarHovered", null);
(0, n.Cg)([B.oI], dH.prototype, "OnTabSelectorClick", null);
dH = (0, n.Cg)([g.PA], dH);
let x = class extends h.Component {
	SelectTab(e) {
		this.props.tabSet.ActivateTab(e);
	}
	render() {
		let e = [];
		let t = this.props.tabSet.tabs;
		for (let r of t) {
			let t = h.createElement(sU, {
				tab: r,
				active: true,
				selectTab: this.SelectTab,
				fnOnDragEnd: null,
				bDisableContextMenu: true,
			});
			e.push(
				h.createElement(
					y.kt,
					{
						key: r.GetUniqueID(),
						className: "ChatTabContextMenuItem",
						onSelected: null,
					},
					t,
				),
			);
		}
		return h.createElement(
			y.tz,
			{
				className:
					"ChatTabs ChatTabsContextMenu compactView CompactFriendsList",
			},
			e,
		);
	}
};
(0, n.Cg)([B.oI], x.prototype, "SelectTab", null);
x = (0, n.Cg)([g.PA], x);
export let sU = class extends h.Component {
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
						let t = (0, c.CO)(e);
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
						l.xm.UIStore.MoveTabToNewPopup((0, c.CO)(e), r.tab, i);
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
			l.xm.UIStore.CloseTab((0, c.CO)(e), this.props.tab);
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
		l.xm.UIStore.CloseTab((0, c.CO)(e), this.props.tab);
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
				(0, d.Tz)(e, r.GetGroup(), {
					tab: t,
				});
			}
		} else {
			let t = this.props.tab.GetChatView();
			(0, A.tj)(
				(0, c.CO)(e),
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
		let c = (0, k.A)(
			F.ChatTab,
			"no-drag",
			this.props.active && F.Active,
			o && F.VoiceActive,
			o && a && F.MicMuted,
		);
		return h.createElement(
			b.Z,
			{
				className: c,
				ref: (0, B.XB)(this.BindChatTab, this.props.containerRef),
				focusable: this.props.selectTab != null,
				draggable: true,
				onSecondaryButton: this.OnCloseClick,
				onSecondaryActionDescription: (0, D.we)(
					"#Chat_CloseTabAction_SteamDeck",
				),
				onOKButton: this.OnOKButton,
				onMenuButton: this.OnContextMenu,
				onMouseDown: this.OnMouseDown,
				onMouseUp: this.OnMouseUp,
				onMouseLeave: this.OnMouseLeave,
				onDragStart: this.OnDragStart,
				onDragEnd: this.OnDragEnd,
				onContextMenu: this.OnContextMenu,
				onOKActionDescription: null,
				onMenuActionDescription: (0, D.we)("#Chat_Tab_ContextMenu"),
			},
			h.createElement(
				V,
				{
					tab: this.props.tab,
					active: this.props.active,
				},
				h.createElement(
					"div",
					{
						className: F.ChatTabRow,
					},
					s.IsVoiceActive() &&
						h.createElement(
							"div",
							{
								className: F.MicStatus,
								title: a
									? (0, D.we)("#Tooltip_MicStatus_Muted")
									: (0, D.we)("#Tooltip_MicStatus_Active"),
							},
							this.context?.IN_GAMEPADUI
								? i
									? h.createElement(M.t$Q, null)
									: h.createElement(M.mrd, null)
								: h.createElement(M.EQ9, {
										off: a,
									}),
						),
					h.createElement(
						w.tH,
						null,
						h.createElement(j, {
							tab: this.props.tab,
						}),
					),
					h.createElement(
						w.tH,
						null,
						this.context?.IN_GAMEPADUI &&
							(function (e) {
								if (!e) {
									return null;
								}
								let t = e.chat.accountid_partner;
								let r =
									l.xm.VoiceStore.BSelfHasAcceptedOrInitiatedOneOnOneChat(t);
								let n =
									l.xm.VoiceStore.BPartnerHasAcceptedOrInitiatedOneOnOneChat(t);
								if (!n && !r) {
									return null;
								}
								let i = "";
								let a = l.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(t);
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
										? (0, D.we)("#Voice_WaitingForFriendToJoin", s.display_name)
										: n && !r
											? a
												? (0, D.we)(
														"#Voice_ChannelRejoinAvailable",
														s.display_name,
													)
												: (0, D.we)("#Voice_ChannelAvailable", s.display_name)
											: m
												? c
													? (0, D.we)("#VoiceChatConnecting")
													: ""
												: !m && u
													? (0, D.we)(
															"#VoiceChatParterConnecting",
															s.display_name,
														)
													: (0, D.we)("#Voice_ChannelActive", s.display_name);
								return h.createElement(
									"div",
									{
										className: F.VoiceStatusMessage,
									},
									i,
								);
							})(e),
					),
					h.createElement(W, {
						onClick: this.OnCloseClick,
						onMouseDown: this.OnCloseMouseDown,
					}),
					h.createElement(H, {
						tab: this.props.tab,
					}),
				),
			),
		);
	}
};
function W(e) {
	return h.createElement(
		"div",
		{
			title: (0, D.we)("#Chat_CloseTooltip"),
			className: F.CloseButton,
			onClick: e.onClick,
			onMouseDown: e.onMouseDown,
		},
		h.createElement(M.sED, null),
	);
}
(0, n.Cg)([B.oI], sU.prototype, "BindChatTab", null);
(0, n.Cg)([B.oI], sU.prototype, "OnDragStart", null);
(0, n.Cg)([B.oI], sU.prototype, "OnDragEnd", null);
(0, n.Cg)([B.oI], sU.prototype, "OnMouseDown", null);
(0, n.Cg)([B.oI], sU.prototype, "OnOKButton", null);
(0, n.Cg)([B.oI], sU.prototype, "OnMouseUp", null);
(0, n.Cg)([B.oI], sU.prototype, "OnMouseLeave", null);
(0, n.Cg)([B.oI], sU.prototype, "OnCloseMouseDown", null);
(0, n.Cg)([B.oI], sU.prototype, "OnCloseClick", null);
(0, n.Cg)([B.oI], sU.prototype, "OnContextMenu", null);
sU = (0, n.Cg)([g.PA], sU);
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
			return h.createElement(
				G.Rg,
				{
					key: r.accountid,
					refHideHover: this.m_refHideHover,
					friend: r,
					context: {},
					disableContextMenu: true,
					direction: "bottom",
				},
				e.children,
			);
		}
		return e.children;
	}
}
let H = class extends h.Component {
	render() {
		const { tab: e } = this.props;
		if (e.IsChatRoom() && e instanceof s.$C) {
			if (!e.GetGroup().hasUnreadChatMessage) {
				return null;
			}
		} else if (!e.GetUnreadMessageCount()) {
			return null;
		}
		return h.createElement(
			"div",
			{
				className: F.UnreadGlow,
			},
			h.createElement("div", {
				className: F.UnreadCircle,
			}),
		);
	}
};
H = (0, n.Cg)([g.PA], H);
let j = class extends h.Component {
	static contextType = O.QO;
	render() {
		let e = this.props.tab.GetChatView();
		if (e && e.chat instanceof o.s) {
			let t = e.chat.chat_partner;
			let r = t.persona.is_ingame || this.context?.IN_GAMEPADUI;
			let n = this.context?.IN_GAMEPADUI ? "Medium" : "X-Small";
			return h.createElement(
				"div",
				{
					className: F.ChatTabContent_Friend,
				},
				h.createElement(G.bP, {
					friend: e.chat.chat_partner,
					noActions: true,
					context: {
						chat: e.chat,
					},
					bHideGameName: !r,
					bHideEnhancedRichPresenceLabel: !this.context?.IN_GAMEPADUI,
					bHidePersona: !r,
					bHideSnooze: false,
					avatarSize: n,
				}),
				this.context?.IN_GAMEPADUI &&
					!t.is_friend &&
					h.createElement(
						"div",
						{
							className: F.IsNotFriendLabel,
						},
						(0, D.we)("#Friend_Menu_NotAFriendLabel"),
						" ",
					),
			);
		}
		if (e && e.chat instanceof a.d) {
			let e = this.props.tab.GetGroup();
			let t = true;
			return h.createElement(
				"div",
				{
					className: F.ChatTabContent_ChatRoom,
				},
				h.createElement(u.I, {
					group: e,
					smaller: t,
					smallish: !t,
				}),
				h.createElement(
					"div",
					{
						className: F.ChatTabContent_ChatRoomName,
					},
					this.props.tab.GetTabName(),
				),
			);
		}
		if (this.props.tab.IsBroadcast()) {
			let e = this.props.tab.GetTabName();
			return h.createElement(
				"div",
				{
					className: F.ChatTabContent_ChatRoom,
				},
				h.createElement(
					"div",
					{
						className: "ChatRoomGroupAvatar HasAvatar Smaller",
					},
					h.createElement("img", {
						className: "ChatRoomGroupAvatar_Avatar",
						src: _.td.tabIcon,
					}),
				),
				h.createElement(
					"div",
					{
						className: F.ChatTabContent_ChatRoomName,
					},
					e,
				),
			);
		}
		return null;
	}
};
export function XX(e) {
	if (!c.ZM.UIDisplayPrefs.bDontShowVoiceAlert) {
		if (e) {
			(0, E.HT)(
				h.createElement(Q, null),
				e,
				"ActiveVoiceAlert",
				{
					strTitle: (0, D.we)("#Chat_StillInVoiceDialog_Title"),
					popupWidth: 650,
					popupHeight: 340,
				},
				(0, c.h8)(e),
			);
		}
	}
}
j = (0, n.Cg)([g.PA], j);
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
		return h.createElement(
			E.x_,
			{
				onEscKeypress: this.DismissDialog,
			},
			h.createElement(
				S.U9,
				{
					classNameContent: "CloseActiveVoiceWindowConfirmation",
					onSubmit: this.OnSubmit,
				},
				h.createElement(
					S.Y9,
					null,
					h.createElement(
						"div",
						null,
						(0, D.we)("#Chat_StillInVoiceDialog_Title"),
					),
				),
				h.createElement(
					S.nB,
					null,
					h.createElement(
						"div",
						{
							className: "activeVoiceDetails",
						},
						(0, D.we)("#Chat_StillInVoiceDialog_Desc1"),
					),
					h.createElement(
						"div",
						{
							className: "activeVoiceDetails",
						},
						(0, D.we)("#Chat_StillInVoiceDialog_Desc2"),
					),
					h.createElement(
						"div",
						{
							className: "voiceControlsExample",
						},
						h.createElement(G.lg, {
							name: this.state.strChatName,
							chat: l.xm.ChatStore.GetActiveVoiceChat(),
							nostatus: true,
						}),
						h.createElement("div", {
							className: "circleHighlight voiceExit",
						}),
					),
					false,
				),
				h.createElement(
					S.wi,
					null,
					h.createElement(
						"div",
						{
							className: "_DialogColLayout",
						},
						h.createElement(
							S.jn,
							{
								onClick: this.OnSubmit,
							},
							(0, D.we)("#Chat_StillInVoiceDialog_KeepChatting"),
						),
					),
					h.createElement(
						"div",
						{
							className: "dontShowConfirmation",
							onClick: this.OnDialogChecked,
						},
						h.createElement(S.Yh, {
							checked: this.state.bDontShowChecked,
							onChange: this.OnDialogChecked,
						}),
						(0, D.we)("#Dialog_DontShowMeAgain"),
					),
				),
			),
		);
	}
};
(0, n.Cg)([B.oI], Q.prototype, "DismissDialog", null);
(0, n.Cg)([B.oI], Q.prototype, "OnSubmit", null);
(0, n.Cg)([B.oI], Q.prototype, "OnDialogChecked", null);
(0, n.Cg)([B.oI], Q.prototype, "OnManualVoiceChatExit", null);
Q = (0, n.Cg)([g.PA], Q);
