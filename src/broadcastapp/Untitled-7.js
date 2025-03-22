"use strict";

(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
	[7653],
	{
		31711: (e, t, a) => {
			a.r(t);
			a.d(t, {
				default: () => X,
			});
			var o = a(34629);
			var n = a(63696);
			var s = a(52912);
			var r = a(95773);
			var i = a(50376);
			var l = a(13869);
			var c = a(64608);
			var m = a(46108);
			var h = a(69649);
			var d = a(52451);
			var p = a(53414);
			var g = a(98829);
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
									(0, m.we)("#Broadcast_WatchParty_Viewers_NoneActive"),
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
								strTitle: (0, m.we)("#Broadcast_CreateWatchParty"),
							}),
							t,
							"CreateChatDialog",
							{
								strTitle: (0, m.we)("#Broadcast_CreateWatchParty"),
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
										(0, m.we)("#Broadcast_WatchPrompt"),
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
												(0, m.we)("#Broadcast_WatchAlone"),
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
												(0, m.PP)(
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
													(0, m.we)("#Broadcast_WatchWithExistingWatchParty"),
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
											(0, m.we)("#Broadcast_LinkBroadcastToGroup_New"),
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
			var E = a(89193);
			var b = a(41230);
			var S = a(7470);
			var I = a(56654);
			var _ = a(89454);
			var f = a.n(_);
			var w = a(21866);
			var v = a(72993);
			var B = a(46382);
			var L = a(73870);
			var D = a(17385);
			var T = a(31222);
			var y = a(23024);
			var W = a(27337);
			var M = a(10606);
			var N = a(31958);
			var P = a(75144);
			var R = a(72476);
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
					this.m_reactRoot = S.H(
						document.getElementById("friendslist-container"),
					);
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
						console.warn(
							`Ignoring message from untrusted domain "${e.origin}"`,
						);
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
					(0, m.we)("#Broadcast_WatchWithFriends"),
				);
			}
			function U(e) {
				return n.createElement(
					"div",
					{
						className: "ToggleBroadcastChat",
						title: (0, m.we)("#Broadcast_ToggleChat"),
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
								className: f().ChatLoginButton,
								href: "#",
							},
							(0, m.we)("#BroadcastChat_Login"),
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
			var Z = a(52003);
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
			const X = K;
		},
		53694: (e, t, a) => {
			a.r(t);
			a.d(t, {
				default: () => r,
			});
			var o = a(63696);
			var n = a(72993);
			var s = a(43397);
			const r = o.forwardRef(function (
				{
					steamID: e,
					localSteamID: t,
					watchLocation: a,
					bWebRTC: r,
					style: i,
					onRequestClose: l,
					actions: c,
					onTheaterMode: m,
					onLocalStreamChange: h,
					bVerticalBroadcastChat: d,
				},
				p,
			) {
				const g = t || e;
				return o.createElement(
					"div",
					{
						ref: p,
						style: {
							display: "flex",
							flexDirection: "column",
							...i,
						},
					},
					o.createElement(
						"div",
						{
							className: "BroadcastSection",
						},
						o.createElement(n.default, {
							key: g,
							steamIDBroadcast: g,
							watchLocation: a,
							bWebRTC: r,
							onRequestClose: l,
							actions: c,
							onTheaterMode: m,
							onOpenLinkInNewWindow: s.EP,
						}),
						o.createElement("div", {
							className: "videoContainerSizer",
						}),
					),
					o.createElement(
						"div",
						{
							className: "BroadcastDetailsSection",
						},
						o.createElement(n.BroadcastDetails, {
							steamID: g,
							onLocalStreamChange: h,
							bVerticalBroadcastChat: d,
						}),
					),
				);
			});
		},
	},
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/broadcastapp.js.map
