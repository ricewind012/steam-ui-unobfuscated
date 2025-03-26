import * as o from /*webcrack:missing*/ "./34629.js";
import * as n from /*webcrack:missing*/ "./63696.js";
import * as s from /*webcrack:missing*/ "./52912.js";
import * as r from /*webcrack:missing*/ "./95773.js";
import * as i from /*webcrack:missing*/ "./50376.js";
import * as l from /*webcrack:missing*/ "./13869.js";
import * as c from /*webcrack:missing*/ "./64608.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import * as h from /*webcrack:missing*/ "./69649.js";
import * as d from /*webcrack:missing*/ "./52451.js";
import * as p from /*webcrack:missing*/ "./53414.js";
import * as g from /*webcrack:missing*/ "./98829.js";
const u = ({ group: e, onClick: t }) => {
	const a = e.watching_broadcast_steamid;
	return n.createElement(
		"button",
		{
			className:
				"ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
			onClick: t,
		},
		n.createElement(
			"div",
			{
				className: "ChatRoomListGroupItem_header",
			},
			n.createElement(p.I, {
				group: e,
				small: true,
			}),
			n.createElement(
				"div",
				{
					className: "groupNameStatusContainer",
				},
				n.createElement(
					"div",
					{
						className: "chatRoomName",
					},
					e.name,
				),
				a &&
					n.createElement(
						"div",
						{
							className: "chatRoomDetails",
						},
						Localize("#Broadcast_WatchParty_Viewers_NoneActive"),
					),
			),
		),
	);
};
class C extends n.Component {
	CreateWatchParty(e = false) {
		const {
			browserContext: t,
			ownerWindow: a,
			broadcastAccountId: o,
			initialFriend: r,
		} = this.props;
		this.Close();
		const i = e && r ? [r.accountid] : [];
		(function (e, t, a, o) {
			(0, l.HT)(
				n.createElement(h.zw, {
					browserContext: e,
					bHideChatNameEntry: false,
					vecInvitePlayers: o,
					chatViewToReplace: undefined,
					creationOptions: {
						unBroadcastAccountId: a,
					},
					strTitle: Localize("#Broadcast_CreateWatchParty"),
				}),
				t,
				"CreateChatDialog",
				{
					strTitle: Localize("#Broadcast_CreateWatchParty"),
					popupWidth: 450,
					popupHeight: 600,
				},
				(0, s.h8)(t),
			);
		})(t, a || window, o, i);
	}
	WatchAlone() {
		this.Close();
	}
	UpgradeExisting(e) {
		const {
			broadcastAccountId: t,
			browserContext: a,
			broadcastChannelID: o,
			broadcastTabId: n,
		} = this.props;
		this.Close();
		if (o) {
			e.SetChatRoomGroupWatchingBroadcast(undefined, o);
		} else {
			e.SetChatRoomGroupWatchingBroadcast(t);
		}
		const s = r.xm.UIStore.ShowAndOrActivateChatRoomGroup(a, e, true);
		if (n) {
			r.xm.UIStore.CloseTabByID(n);
		}
		if (!this.props.bIsNewSteamTVDialog) {
			s.ShowBroadcast();
		}
	}
	Close() {
		const { closeModal: e } = this.props;
		if (e) {
			e();
		}
	}
	render() {
		const { closeModal: e, initialFriend: t } = this.props;
		const a = r.xm.ChatStore.currentChatRoomGroups.filter((e) =>
			e.BCanIAssociateBroadcast(),
		);
		const o = t;
		return n.createElement(
			"div",
			{
				className: "chatModalCover",
			},
			n.createElement(
				l.x_,
				{
					onEscKeypress: e,
				},
				n.createElement(
					c.UC,
					{
						className: "watchPartyDialog",
					},
					n.createElement(
						c.nB,
						null,
						n.createElement(
							"div",
							{
								className: "watchPartyPrompt",
							},
							Localize("#Broadcast_WatchPrompt"),
						),
						n.createElement(
							c.xz,
							null,
							!this.props.bIsNewSteamTVDialog &&
								n.createElement(
									c.$n,
									{
										svgicon: i.Gv$,
										className: "watchHowButton",
										onClick: this.WatchAlone,
									},
									Localize("#Broadcast_WatchAlone"),
								),
							o &&
								n.createElement(
									c.$n,
									{
										className: "watchHowButton",
										onClick: () => this.CreateWatchParty(true),
									},
									n.createElement(g.gv, {
										friend: o,
										context: null,
										bLarge: false,
									}),
									LocalizeReact(
										"#Broadcast_WatchWith",
										n.createElement(
											"span",
											{
												className: "highlight",
											},
											" ",
											o.display_name,
										),
									),
								),
							a.length !== 0 &&
								n.createElement(
									n.Fragment,
									null,
									n.createElement(
										c.JU,
										null,
										Localize("#Broadcast_WatchWithExistingWatchParty"),
									),
									a.map((e) =>
										n.createElement(u, {
											key: e.unique_id,
											group: e,
											onClick: () => this.UpgradeExisting(e),
										}),
									),
								),
							n.createElement(
								c.$n,
								{
									className: "watchHowButton newWatchGroup",
									svgicon: i.u9R,
									onClick: () => this.CreateWatchParty(false),
								},
								Localize("#Broadcast_LinkBroadcastToGroup_New"),
							),
						),
					),
					n.createElement(c.wi, null),
				),
			),
		);
	}
}
(0, o.Cg)([d.oI], C.prototype, "WatchAlone", null);
(0, o.Cg)([d.oI], C.prototype, "Close", null);
import * as E from /*webcrack:missing*/ "./89193.js";
import * as b from /*webcrack:missing*/ "./41230.js";
import * as S from /*webcrack:missing*/ "./7470.js";
import * as I from /*webcrack:missing*/ "./56654.js";
import * as _ from /*webcrack:missing*/ "./89454.js";
var f = _;
import * as w from /*webcrack:missing*/ "./21866.js";
import * as v from /*webcrack:missing*/ "./72993.js";
import * as B from /*webcrack:missing*/ "./46382.js";
import * as L from /*webcrack:missing*/ "./73870.js";
import * as D from /*webcrack:missing*/ "./17385.js";
import * as T from /*webcrack:missing*/ "./31222.js";
import * as y from /*webcrack:missing*/ "./23024.js";
import * as W from /*webcrack:missing*/ "./27337.js";
import * as M from /*webcrack:missing*/ "./10606.js";
import * as N from /*webcrack:missing*/ "./31958.js";
import * as P from /*webcrack:missing*/ "./75144.js";
import * as R from /*webcrack:missing*/ "./72476.js";
class A {
	constructor() {
		(0, E.Gn)(this);
	}
	m_fnLaunchChat;
	m_iTimeoutLogin = undefined;
	m_eLogonState = 0;
	m_bLogonDialogVisisible = false;
	m_steamID = undefined;
	m_reactRoot;
	Init(e) {
		this.m_fnLaunchChat = e;
		this.m_steamID = R.GP.steamid;
		window.addEventListener("message", this.HandlePostMessage);
		this.m_reactRoot = S.H(document.getElementById("friendslist-container"));
		this.m_reactRoot.render(
			n.createElement(x, {
				app: this,
			}),
		);
		this.m_iTimeoutLogin = window.setTimeout(() => {
			if (this.m_eLogonState == 0) {
				this.m_eLogonState = 1;
			}
		}, 2500);
	}
	LaunchChat() {
		this.m_reactRoot.unmount();
		window.removeEventListener("message", this.HandlePostMessage);
		window.clearTimeout(this.m_iTimeoutLogin);
		(0, s.xT)(R.GP.steamid);
		this.m_fnLaunchChat();
	}
	GetLoginURL() {
		return `${R.TS.STORE_BASE_URL}login/?steamtv`;
	}
	BIsPerformingLogonCheck() {
		return this.m_eLogonState == 0 || this.m_eLogonState == 1;
	}
	BIsLogonDialogVisible() {
		return this.m_bLogonDialogVisisible;
	}
	ShowLogonDialog() {
		this.m_bLogonDialogVisisible = true;
	}
	BReadyToRender() {
		return this.m_eLogonState != 0;
	}
	DismissLogonDialog() {
		this.m_bLogonDialogVisisible = false;
	}
	GetSteamIDWatched() {
		return this.m_steamID;
	}
	ExtractOrigin(e) {
		return e.replace(/^(https?:\/\/[^/]*).*$/, "$1");
	}
	HandlePostMessage(e) {
		if (
			e.origin != this.ExtractOrigin(R.TS.STORE_BASE_URL) &&
			e.origin != this.ExtractOrigin(R.TS.CHAT_BASE_URL)
		) {
			console.warn(`Ignoring message from untrusted domain "${e.origin}"`);
			return;
		}
		let t = e.data;
		if (t) {
			if (t.msg == "OnLoginButtonClicked") {
				console.log("Login button clicked");
				this.m_bLogonDialogVisisible = true;
			} else if (t.command == "LoginNeeded") {
				this.m_eLogonState = 2;
			} else if (t.command == "LogonComplete") {
				this.LaunchChat();
				return;
			}
		}
	}
}
(0, o.Cg)([E.sH], A.prototype, "m_eLogonState", undefined);
(0, o.Cg)([E.sH], A.prototype, "m_bLogonDialogVisisible", undefined);
(0, o.Cg)([E.sH], A.prototype, "m_steamID", undefined);
(0, o.Cg)([E.XI], A.prototype, "LaunchChat", null);
(0, o.Cg)([E.XI.bound], A.prototype, "HandlePostMessage", null);
let x = class extends n.Component {
	m_broadcastInfo = null;
	constructor(e) {
		super(e);
		this.m_broadcastInfo = y.BroadcastWatchStore.StartInfo(
			this.props.app.GetSteamIDWatched(),
		);
		this.state = {
			bChatCollapsed: false,
			bTheaterMode: false,
		};
	}
	componentWillUnmount() {
		if (this.m_broadcastInfo) {
			y.BroadcastWatchStore.StopInfo(this.m_broadcastInfo);
			this.m_broadcastInfo = null;
		}
	}
	OnShowLogin() {
		this.props.app.ShowLogonDialog();
	}
	ToggleChat() {
		this.setState({
			bChatCollapsed: !this.state.bChatCollapsed,
		});
	}
	ToggleTheaterMode() {
		this.setState({
			bTheaterMode: !this.state.bTheaterMode,
		});
	}
	render() {
		const e = this.props.app;
		let t = this.m_broadcastInfo;
		let a = V();
		return n.createElement(
			k,
			null,
			e.BReadyToRender() &&
				n.createElement(
					"div",
					{
						className:
							"StandalonePlayer" +
							(this.state.bTheaterMode ? " TheaterMode" : ""),
					},
					n.createElement(W.y, {
						className: "FullpageBroadcastBackdrop",
						src: t.m_strThumbnailUrl,
						draggable: false,
						duration: 2500,
					}),
					n.createElement(
						"div",
						{
							className: "BroadcastTab",
						},
						n.createElement(
							"div",
							{
								className: "StandalonePlayerHeader",
							},
							n.createElement(
								"div",
								{
									className: "STV_Logo",
								},
								n.createElement(i.P7C, null),
							),
							n.createElement(
								"div",
								{
									className:
										"BroadcastTab_HeaderRow" +
										(this.state.bChatCollapsed ? " ChatCollapsed" : ""),
								},
								n.createElement(O, {
									onClick: this.OnShowLogin,
								}),
								n.createElement(U, {
									onClick: this.ToggleChat,
									hideIcon: this.state.bChatCollapsed,
								}),
							),
						),
						n.createElement(
							$,
							{
								steamID: e.GetSteamIDWatched(),
								watchLocation: a,
								bHideChat: this.state.bChatCollapsed,
								onTheaterMode: this.ToggleTheaterMode,
							},
							n.createElement(Q, {
								app: e,
							}),
						),
					),
				),
			n.createElement(H, {
				app: e,
			}),
		);
	}
};
function G() {
	const e = (0, R.Fd)("loyalty_webapi_token", "application_config");
	return new T.D(R.TS.WEBAPI_BASE_URL, e);
}
function k(e) {
	const { children: t } = e;
	const a = n.useCallback(() => r.xm?.CMInterface, []);
	const o = (0, d.bs)(n.useCallback(() => new L.A(), []));
	const s = (0, d.bs)(G);
	return n.createElement(
		P.s,
		null,
		n.createElement(
			R.ss,
			null,
			R.iA.logged_in
				? n.createElement(
						B.VQ,
						{
							useActiveCMInterface: a,
							useStorage: o,
						},
						t,
					)
				: n.createElement(
						B.VQ,
						{
							useActiveSteamInterface: s,
							useStorage: o,
						},
						t,
					),
		),
	);
}
(0, o.Cg)([d.oI], x.prototype, "OnShowLogin", null);
(0, o.Cg)([d.oI], x.prototype, "ToggleChat", null);
(0, o.Cg)([d.oI], x.prototype, "ToggleTheaterMode", null);
x = (0, o.Cg)([b.PA], x);
let H = (0, b.PA)(({ app: e }) =>
	e.BIsPerformingLogonCheck()
		? n.createElement(
				"div",
				null,
				n.createElement("iframe", {
					style: {
						display: "none",
					},
					src: e.GetLoginURL(),
				}),
			)
		: null,
);
function O(e) {
	return n.createElement(
		"div",
		{
			className: "BroadcastButton WatchWithFriends",
			onClick: e.onClick,
		},
		n.createElement(i.y_e, null),
		Localize("#Broadcast_WatchWithFriends"),
	);
}
function U(e) {
	return n.createElement(
		"div",
		{
			className: "ToggleBroadcastChat",
			title: Localize("#Broadcast_ToggleChat"),
			onClick: e.onClick,
		},
		n.createElement(i.K7s, {
			showChat: e.hideIcon,
		}),
	);
}
function V() {
	if (R.TS.STEAM_TV) {
		return 1;
	} else {
		return 3;
	}
}
let F = class extends n.Component {
	m_broadcastInfo = null;
	constructor(e) {
		super(e);
		let t = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
		this.m_broadcastInfo = y.BroadcastWatchStore.StartInfo(t);
		this.state = {
			bChatCollapsed: false,
		};
	}
	componentWillUnmount() {
		if (this.m_broadcastInfo) {
			y.BroadcastWatchStore.StopInfo(this.m_broadcastInfo);
			this.m_broadcastInfo = null;
		}
	}
	OnWatchWithFriends() {
		this.props.broadcastView.ShowWatchPromptDialog();
	}
	ToggleChat() {
		this.setState({
			bChatCollapsed: !this.state.bChatCollapsed,
		});
	}
	ToggleTheaterMode() {
		r.xm.UIStore.SetTheaterMode(!r.xm.UIStore.GetTheaterMode());
	}
	render() {
		const { broadcastView: e, popup: t, style: a } = this.props;
		const o = e.GetSteamID().ConvertTo64BitString();
		let s = V();
		const r = e.m_bShowWatchPromptDialog
			? n.createElement(C, {
					closeModal: () => e.HideWatchPromptDialog(),
					broadcastAccountId: e.GetSteamID().GetAccountID(),
					broadcastTabId: e.GetUniqueID(),
					initialFriend: e.m_watchPromptInitialFriend,
					browserContext: D.m,
					ownerWindow: t,
				})
			: null;
		return n.createElement(
			"div",
			{
				className: "BroadcastTab",
				style: a,
			},
			n.createElement(W.y, {
				className: "FullpageBroadcastBackdrop",
				src: this.m_broadcastInfo.m_strThumbnailUrl,
				draggable: false,
				duration: 2500,
			}),
			n.createElement(
				"div",
				{
					className: "BroadcastTab_OverBackground",
				},
				n.createElement(
					"div",
					{
						className: "BroadcastTabHeaderContainer",
					},
					n.createElement(
						"div",
						{
							className:
								"BroadcastTab_HeaderRow" +
								(this.state.bChatCollapsed ? " ChatCollapsed" : ""),
						},
						n.createElement(O, {
							onClick: this.OnWatchWithFriends,
						}),
						n.createElement(U, {
							onClick: this.ToggleChat,
							hideIcon: this.state.bChatCollapsed,
						}),
					),
				),
				n.createElement(
					$,
					{
						steamID: o,
						watchLocation: s,
						bHideChat: this.state.bChatCollapsed,
						onTheaterMode: this.ToggleTheaterMode,
					},
					r,
				),
			),
		);
	}
};
(0, o.Cg)([d.oI], F.prototype, "OnWatchWithFriends", null);
(0, o.Cg)([d.oI], F.prototype, "ToggleChat", null);
(0, o.Cg)([d.oI], F.prototype, "ToggleTheaterMode", null);
F = (0, o.Cg)([b.PA], F);
let $ = class extends n.Component {
	m_strLocalSteamID = "";
	m_refBroadcastContainer = n.createRef();
	m_elMainContent;
	constructor(e) {
		super(e);
		(0, E.Gn)(this);
		this.state = {
			info: null,
		};
	}
	componentDidMount() {
		if (w.td.stream["76561198208088121"] && R.TS.LANGUAGE === "chinese") {
			this.OnLocalStreamChange("76561198208088121");
		} else if (
			w.td.stream["76561198207552741"] &&
			R.TS.LANGUAGE === "russian"
		) {
			this.OnLocalStreamChange("76561198207552741");
		}
	}
	static getDerivedStateFromProps(e, t) {
		if (!t.info || t.info.m_steamIDBroadcast !== e.steamID) {
			if (t.info) {
				y.BroadcastWatchStore.StopInfo(t.info);
			}
			return {
				info: y.BroadcastWatchStore.StartInfo(e.steamID),
			};
		}
		return null;
	}
	componentWillUnmount() {
		if (this.state.info) {
			y.BroadcastWatchStore.StopInfo(this.state.info);
		}
	}
	OnLocalStreamChange(e) {
		this.m_strLocalSteamID = e;
	}
	SetMainContentRef(e) {
		this.m_elMainContent = e;
	}
	CalculateBroadcastSectionStyles(e) {
		if (this.props.bHideChat) {
			return {
				width: "100%",
				height: "100%",
			};
		}
		let t;
		let a;
		if (s.ZM) {
			t = s.ZM.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage;
			a = s.ZM.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage;
		}
		const o = {};
		if (e) {
			const e = t || 66;
			o.height = `${e}%`;
			if (this.m_elMainContent) {
				const { clientWidth: t, clientHeight: a } = this.m_elMainContent;
				const n = (9 / 16) * t + 50;
				const s = (0, N.OQ)(e, 1, (n / a) * 100);
				o.height = `${s}%`;
			}
		} else {
			o.width = a ? `${a}%` : "66%";
			o.minWidth = a ? `${a}%` : "66%";
			o.maxWidth = "calc( 100% - 316px )";
			o.overflowY = "auto";
		}
		return o;
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterDragEvents);
		this.setState({
			bDraggingChatGrabber: true,
		});
	}
	HandleMouseMove(e) {
		e.preventDefault();
		e.stopPropagation();
		let t = this.m_refBroadcastContainer.current.getBoundingClientRect();
		let a =
			this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
		const o = t.left;
		const n = e.clientX;
		const r = a.width;
		const i = (0, N.OQ)(((n - o) / r) * 100, 1, 100);
		s.ZM.SetUIDisplayPref("nWatchPartyBroadcastWidthPercentage", i);
	}
	UnregisterDragEvents(e) {
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("mouseup", this.UnregisterDragEvents);
		this.setState({
			bDraggingChatGrabber: false,
		});
	}
	render() {
		let { steamID: e, children: t } = this.props;
		let a = this.m_strLocalSteamID || e;
		let o = this.state.info.m_bIsOnline;
		let s = null;
		const i = this.CalculateBroadcastSectionStyles(false);
		i.flexGrow = this.props.bHideChat ? 1 : null;
		if (w.td.bValid) {
			s = n.createElement(z, {
				info: w.td,
			});
		}
		const l = new A();
		const c = n.createElement(
			"div",
			{
				className: "LoginDiv",
			},
			n.createElement(
				"a",
				{
					onClick: () => l.ShowLogonDialog(),
					className: f.ChatLoginButton,
					href: "#",
				},
				Localize("#BroadcastChat_Login"),
			),
			n.createElement(Q, {
				app: l,
			}),
		);
		const h = y.BroadcastWatchStore.GetBroadcast(a)
			? y.BroadcastWatchStore.GetBroadcast(a).m_ulBroadcastID
			: "0";
		return n.createElement(
			"div",
			{
				className: "BroadcastContainer",
			},
			n.createElement(
				"div",
				{
					className: "BroadcastContainerSection",
					ref: this.m_refBroadcastContainer,
					style: i,
				},
				n.createElement(
					"div",
					{
						className: "BroadcastContainerSectionVideoContainer",
					},
					o &&
						n.createElement(v.default, {
							key: a,
							steamIDBroadcast: a,
							watchLocation: this.props.watchLocation,
							onTheaterMode: this.props.onTheaterMode,
						}),
					!o && s,
					n.createElement("div", {
						className: "videoContainerSizer",
					}),
				),
				t,
				n.createElement(
					"div",
					{
						className: "BroadcastDetailsSection",
					},
					n.createElement(v.BroadcastDetails, {
						steamID: a,
						onLocalStreamChange: this.OnLocalStreamChange,
						bVerticalBroadcastChat: true,
					}),
				),
			),
			!this.props.bHideChat &&
				n.createElement("div", {
					className: "BroadcastChatDivider horizontal",
					onMouseDown: this.OnGrabberMouseDown,
				}),
			n.createElement(
				"div",
				{
					className: "BroadcastChatDiv",
					style: {
						display: this.props.bHideChat ? "none" : "flex",
						flexDirection: "column",
						width: "100%",
						minWidth: "300px",
					},
				},
				n.createElement(I.I, {
					emoticonStore: r.xm ? r.xm.ChatStore.EmoticonStore : null,
					broadcastID: h,
					steamID: a,
					watchLocation: this.props.watchLocation,
					hidden: this.props.bHideChat,
				}),
				R.iA && R.iA.logged_in ? null : c,
			),
		);
	}
};
function z(e) {
	let t = `url( "${R.TS.CHAT_BASE_URL + e.info.offlineImage}" )`;
	return n.createElement("div", {
		style: {
			backgroundImage: t,
		},
		className: "BroadcastOffline",
	});
}
(0, o.Cg)([E.sH], $.prototype, "m_strLocalSteamID", undefined);
(0, o.Cg)([d.oI], $.prototype, "OnLocalStreamChange", null);
(0, o.Cg)([d.oI], $.prototype, "SetMainContentRef", null);
(0, o.Cg)([d.oI], $.prototype, "OnGrabberMouseDown", null);
(0, o.Cg)([d.oI], $.prototype, "HandleMouseMove", null);
(0, o.Cg)([d.oI], $.prototype, "UnregisterDragEvents", null);
$ = (0, o.Cg)([b.PA], $);
class q extends n.Component {
	Dismiss() {
		this.props.app.DismissLogonDialog();
	}
	render() {
		return n.createElement(
			M.x_,
			{
				onEscKeypress: this.Dismiss,
			},
			n.createElement(
				c.UC,
				{
					className: "SteamTVLoginDialog",
				},
				n.createElement("iframe", {
					className: "steamTVLogin",
					src: this.props.app.GetLoginURL(),
				}),
			),
		);
	}
}
(0, o.Cg)([d.oI], q.prototype, "Dismiss", null);
let Q = class extends n.Component {
	render() {
		if (!this.props.app.BIsLogonDialogVisible()) {
			return null;
		}
		let e = n.createElement(q, {
			app: this.props.app,
		});
		return n.createElement(
			"div",
			{
				className: "FullModalOverlay",
			},
			n.createElement("div", {
				className: "ModalOverlayContent ModalOverlayBackground",
			}),
			n.createElement(
				"div",
				{
					className: "ModalOverlayContent active",
				},
				e,
			),
		);
	}
};
Q = (0, o.Cg)([b.PA], Q);
import * as Z from /*webcrack:missing*/ "./52003.js";
let K = class extends n.Component {
	render() {
		let e = this.props.broadcastView;
		if (!e || !(e instanceof Z.w)) {
			return null;
		}
		let t = {};
		if (!this.props.isActive) {
			t.display = "none";
		}
		return n.createElement(F, {
			style: t,
			broadcastView: e,
			popup: this.props.popup,
		});
	}
};
K = (0, o.Cg)([b.PA], K);
export default K;
