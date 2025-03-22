var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./44234.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require("./24171.js");
var o = require(/*webcrack:missing*/ "./12176.js");
var l = require(/*webcrack:missing*/ "./8573.js");
var c = require("./38870.js");
class _m {
	constructor() {
		(0, a.Gn)(this);
	}
	m_CMInterface;
	m_status = s.vV;
	m_mapPendingRequests = new a.Es();
	m_nRequestID = 1;
	m_BroadcastDetails = {};
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.RunWhenLoggedOn(() => {
			if (i.TS.IN_CLIENT) {
				if (
					SteamClient &&
					SteamClient.Broadcast &&
					SteamClient.Broadcast.RegisterForBroadcastStatus
				) {
					SteamClient.Broadcast.RegisterForBroadcastStatus(
						this.OnBroadcastStatus,
					);
				}
				if (
					SteamClient &&
					SteamClient.Broadcast &&
					SteamClient.Broadcast.RegisterForViewerRequests
				) {
					SteamClient.Broadcast.RegisterForViewerRequests(this.OnViewerRequest);
				}
			}
		});
	}
	MakeKey(e, t) {
		return e + "_" + t;
	}
	get status() {
		return this.m_status;
	}
	get is_broadcasting() {
		return this.m_status.bIsBroadcasting;
	}
	get broadcastid() {
		return this.m_status.broadcastid;
	}
	get is_broadcast_capable() {
		return this.m_status.bBroadcastCapable;
	}
	OnBroadcastStatus(e) {
		if (
			(this.m_status.bIsBroadcasting && !e.bIsBroadcasting) ||
			(this.m_status.broadcastid != "0" && e.broadcastid == "0")
		) {
			this.m_mapPendingRequests.forEach((e, t, r) => {
				if (e == s.i_.k_EPending) {
					r.delete(t);
				}
			});
		}
		this.m_status = e;
	}
	OnViewerRequest(e, t, r) {
		if (r == s.i_.k_EPending) {
			let t = this.m_nRequestID++;
			this.m_mapPendingRequests.set(this.MakeKey(e, t), r);
			let n = xm.GetDefaultBrowserContext();
			let i = xm.ShowFriendChatDialog(n, e);
			if (i) {
				i.ViewerNeedsApproval(t);
			}
		} else {
			this.m_mapPendingRequests.set(this.MakeKey(e, t), r);
		}
	}
	ApproveViewerRequest(e, t) {
		let r = l.b.InitFromAccountID(e);
		SteamClient.Broadcast.ApproveViewerRequest(
			r.ConvertTo64BitString(),
			Number(t),
		);
	}
	RejectViewerRequest(e, t) {
		let r = l.b.InitFromAccountID(e);
		SteamClient.Broadcast.RejectViewerRequest(
			r.ConvertTo64BitString(),
			Number(t),
		);
	}
	GetRequestState(e, t) {
		return this.m_mapPendingRequests.get(this.MakeKey(e, t));
	}
	InviteToWatch(e) {
		let t = l.b.InitFromAccountID(e);
		return SteamClient.Broadcast.InviteToWatch(t.ConvertTo64BitString());
	}
	SubscribeToBroadcastDetails(e, t) {
		if (this.m_BroadcastDetails[e]) {
			if (this.m_BroadcastDetails[e].refCount === 0) {
				this.m_BroadcastDetails[e].details.Subscribe();
			}
			this.m_BroadcastDetails[e].refCount++;
		} else {
			const r = new u(e, t, this.m_CMInterface.GetServiceTransport());
			r.Subscribe();
			this.m_BroadcastDetails[e] = {
				details: r,
				refCount: 1,
			};
		}
	}
	UnsubscribeFromBroadcastDetails(e, t) {
		const r = this.m_BroadcastDetails[e];
		if (r) {
			if (r.refCount > 1) {
				r.refCount--;
			} else {
				r.details.Unsubscribe();
				delete this.m_BroadcastDetails[e];
			}
		}
	}
	GetBroadcastDetails(e, t) {
		let r = this.m_BroadcastDetails[e];
		if (!r) {
			r = {
				details: new u(e, t, this.m_CMInterface.GetServiceTransport()),
				refCount: 0,
			};
			this.m_BroadcastDetails[e] = r;
		}
		return r.details;
	}
}
(0, n.Cg)([a.sH], _m.prototype, "m_status", undefined);
(0, n.Cg)([a.sH], _m.prototype, "m_mapPendingRequests", undefined);
(0, n.Cg)([a.EW], _m.prototype, "status", null);
(0, n.Cg)([a.EW], _m.prototype, "is_broadcasting", null);
(0, n.Cg)([a.EW], _m.prototype, "broadcastid", null);
(0, n.Cg)([a.EW], _m.prototype, "is_broadcast_capable", null);
(0, n.Cg)([a.XI.bound], _m.prototype, "OnBroadcastStatus", null);
(0, n.Cg)([a.XI.bound], _m.prototype, "OnViewerRequest", null);
(0, n.Cg)([a.XI], _m.prototype, "ApproveViewerRequest", null);
(0, n.Cg)([a.XI], _m.prototype, "RejectViewerRequest", null);
(0, n.Cg)([a.XI], _m.prototype, "InviteToWatch", null);
class u {
	m_bExpired = false;
	m_strThumbnail = "";
	m_nThumbnailCount = 0;
	m_strBroadcastID;
	m_strBroadcasterID;
	m_nTimer;
	m_nTimeout = 10;
	m_bSubscribed = false;
	m_ServiceTransport;
	get strThumbnail() {
		if (this.m_strThumbnail) {
			return `${this.m_strThumbnail}?n=${this.m_nThumbnailCount}`;
		} else {
			return null;
		}
	}
	get bExpired() {
		return this.m_bExpired;
	}
	constructor(e, t, r) {
		(0, a.Gn)(this);
		this.m_strBroadcastID = e;
		this.m_strBroadcasterID = t;
		this.m_ServiceTransport = r;
	}
	Subscribe() {
		if (!this.m_bSubscribed) {
			this.m_bSubscribed = true;
			this.PollForDetails();
		}
	}
	SchedulePollForDetails() {
		const e = this.m_strThumbnail ? this.m_nTimeout : 10;
		this.m_nTimer = window.setTimeout(() => {
			this.m_nTimer = undefined;
			if (this.m_bSubscribed) {
				this.PollForDetails();
			}
		}, e * 1000);
	}
	async PollForDetails() {
		if (!this.m_nTimer && !this.m_bExpired) {
			if ((await this.FetchBroadcastStatus()).GetEResult() != 1) {
				this.m_bExpired = true;
			} else {
				if (this.m_strThumbnail) {
					this.m_nThumbnailCount++;
				} else {
					const e = await this.FetchBroadcastThumbnail();
					if (e.GetEResult() === 1) {
						this.m_strThumbnail = e.Body().thumbnail_url();
						this.m_nTimeout = e.Body().update_interval();
					}
				}
				this.SchedulePollForDetails();
			}
		}
	}
	FetchBroadcastStatus() {
		let e = o.w.Init(c.jl);
		e.Body().set_steamid(this.m_strBroadcasterID);
		e.Body().set_broadcast_id(this.m_strBroadcastID);
		return c.DK.GetBroadcastStatus(this.m_ServiceTransport, e);
	}
	FetchBroadcastThumbnail() {
		let e = o.w.Init(c.XZ);
		e.Body().set_steamid(this.m_strBroadcasterID);
		e.Body().set_broadcast_id(this.m_strBroadcastID);
		return c.DK.GetBroadcastThumbnail(this.m_ServiceTransport, e);
	}
	Unsubscribe() {
		this.m_bSubscribed = false;
		if (this.m_nTimer) {
			clearTimeout(this.m_nTimer);
			this.m_nTimer = undefined;
		}
	}
}
(0, n.Cg)([a.sH], u.prototype, "m_bExpired", undefined);
(0, n.Cg)([a.sH], u.prototype, "m_strThumbnail", undefined);
(0, n.Cg)([a.sH], u.prototype, "m_nThumbnailCount", undefined);
var d = require("./80663.js");
var A = require("./38849.js");
var p = require("./8974.js");
class g {
	m_CMInterface;
	m_strTradeOfferToken;
	Init(e) {
		this.m_CMInterface = e;
	}
	GetTradeOfferURL() {
		if (this.m_strTradeOfferToken) {
			return Promise.resolve(this.GetConstructedTradeOfferURL());
		}
		{
			let e = o.w.Init(p.Bi);
			return p.tB
				.GetTradeOfferAccessToken(this.m_CMInterface.GetServiceTransport(), e)
				.then((e) => {
					if (e.GetEResult() == 1) {
						this.m_strTradeOfferToken = e.Body().trade_offer_access_token();
						return this.GetConstructedTradeOfferURL();
					}
					throw new Error("Error getting Trade Offer token");
				});
		}
	}
	GetDefaultTradeOfferURLForFriend(e) {
		return `${i.TS.COMMUNITY_BASE_URL}tradeoffer/new/?partner=${e}`;
	}
	GetConstructedTradeOfferURL() {
		let e = this.m_CMInterface.steamid.GetAccountID();
		return `${i.TS.COMMUNITY_BASE_URL}tradeoffer/new/?partner=${e}&token=${encodeURIComponent(this.m_strTradeOfferToken)}`;
	}
}
var h = require("./96127.js");
var C = require("./20475.js");
var _ = require("./89610.js");
var f = require(/*webcrack:missing*/ "./44846.js");
var b = require("./3475.js");
var y = require("./81383.js");
class S {
	m_ParentalSettings = {
		is_enabled: false,
	};
	m_ParentalState = b.KL;
	m_CMInterface;
	constructor() {
		(0, a.Gn)(this);
	}
	SetLockState(e) {
		this.m_ParentalState.locked = e;
	}
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.RunWhenLoggedOn(() => {
			let e = o.w.Init(_.QG);
			e.Body().set_steamid(this.m_CMInterface.steamid.ConvertTo64BitString());
			if (i.TS.IN_CLIENT) {
				SteamClient.Parental.RegisterForParentalSettingsChanges((e) =>
					this.UpdateParentalState(e),
				);
			} else {
				_.JL.GetParentalSettings(
					this.m_CMInterface.GetServiceTransport(),
					e,
				).then((e) => {
					this.m_ParentalSettings = e.Body().settings().toObject();
					if (this.m_ParentalSettings.is_enabled) {
						this.ValidateWebToken().then((e) => {
							this.m_ParentalState = {
								locked: e,
							};
						});
					} else {
						this.m_ParentalState = {
							locked: false,
						};
					}
				});
			}
		});
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			_.w0.NotifyLockHandler,
			(e) => {
				if (i.TS.SESSIONID == e.Body().sessionid()) {
					this.SetLockState(true);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			_.w0.NotifyUnlockHandler,
			(e) => {
				if (i.TS.SESSIONID == e.Body().sessionid()) {
					this.SetLockState(false);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			_.w0.NotifySettingsChangeHandler,
			(e) => 1,
		);
	}
	UpdateParentalState(e) {
		this.m_ParentalSettings = y.Zc.deserializeBinary(e.settings).toObject();
		this.m_ParentalState = e;
	}
	BIsFeatureBlocked(e) {
		return (
			this.m_ParentalState.locked &&
			e != 0 &&
			(this.m_ParentalSettings.enabled_features & (1 << e)) == 0
		);
	}
	BIsAppBlocked(e) {
		if (!this.isLocked) {
			return false;
		}
		if (this.m_ParentalSettings.applist_base_id == 0) {
			return false;
		}
		if (e == 0) {
			return false;
		}
		if (e >= f.y4 && e <= f.Iy) {
			return false;
		}
		return (
			[f.w1, f.g5, f.lm, f.JP, f.wK].indexOf(e) === -1 &&
			(this.m_ParentalSettings.applist_custom.find((t) => t.appid == e)
				? !this.m_ParentalSettings.applist_custom.find((e) => e.appid)
						.is_allowed
				: !this.m_ParentalSettings.applist_base.find((t) => t.appid == e) ||
					!this.m_ParentalSettings.applist_base.find((t) => t.appid == e)
						.is_allowed)
		);
	}
	get isEnabled() {
		return !!this.m_ParentalSettings.is_enabled;
	}
	get isLocked() {
		return this.m_ParentalState.locked;
	}
	ValidateWebToken() {
		let e = i.TS.SESSIONID;
		let t = document.cookie.match("(^|; )steamparental=([^;]*)");
		if (!t || !t[2]) {
			return Promise.resolve(false);
		}
		let r = t[2];
		let n = r.split("||");
		r = n.length == 2 ? n[1] : n[0];
		let a = o.w.Init(_.R2);
		a.Body().set_unlock_token(e + "||" + r);
		return new Promise((e, t) => {
			_.JL.ValidateToken(this.m_CMInterface.GetServiceTransport(), a).then(
				(t) => {
					if (t.GetEResult() == 1) {
						e(true);
					} else {
						e(false);
					}
				},
			);
		});
	}
	get locked() {
		console.log("ParentalState.locked", this.m_ParentalState.locked);
		return this.m_ParentalState.locked;
	}
	BIsFriendsBlocked() {
		return this.BIsFeatureBlocked(4);
	}
	Unlock(e) {
		if (i.TS.IN_CLIENT) {
			return new Promise((t, r) => {
				SteamClient.Parental.UnlockParentalLock(e, false).then((e) => {
					t(e);
				});
			});
		}
		{
			let t = o.w.Init(_.Rk);
			t.Body().set_password(e);
			t.Body().set_session(i.TS.SESSIONID);
			t.Body().set_send_unlock_on_success(true);
			return new Promise((e, r) => {
				_.JL.ValidatePassword(this.m_CMInterface.GetServiceTransport(), t).then(
					(t) => {
						if (t.GetEResult() == 1) {
							let e = Date.now().toString() + "||" + t.Body().token();
							document.cookie =
								"steamparental=" + encodeURIComponent(e) + "; path=/";
						}
						e(t.GetEResult());
					},
				);
			});
		}
	}
}
(0, n.Cg)([a.sH], S.prototype, "m_ParentalSettings", undefined);
(0, n.Cg)([a.sH], S.prototype, "m_ParentalState", undefined);
(0, n.Cg)([a.XI], S.prototype, "UpdateParentalState", null);
(0, n.Cg)([a.EW], S.prototype, "isEnabled", null);
(0, n.Cg)([a.EW], S.prototype, "isLocked", null);
(0, n.Cg)([a.EW], S.prototype, "locked", null);
var w = require("./97023.js");
var B = require("./47296.js");
var v = require(/*webcrack:missing*/ "./736.js");
var I = require(/*webcrack:missing*/ "./52451.js");
var E = require(/*webcrack:missing*/ "./54644.js");
var M = require(/*webcrack:missing*/ "./83599.js");
var T = require(/*webcrack:missing*/ "./17385.js");
const R = new M.wd("FriendsUI/RemotePlay");
class k {
	constructor() {
		(0, a.Gn)(this);
	}
	m_canCreateInviteForGame = a.sH.map();
	m_nonGuestSessions = a.sH.map();
	m_guestSessions = a.sH.map();
	m_controllerSlotPlayers = [];
	m_bIsShowingPlaceholder = false;
	m_unGuestLinkCopied = 0;
	m_nGameVolume = -1;
	m_bAllowDesktopStream = false;
	m_nHostStreamingQualityOverride = -1;
	m_nClientStreamingQuality = 2;
	m_nClientStreamingBitrate = -1;
	m_bIsHost = false;
	m_sessionHost = null;
	m_strGameID = "";
	m_rgDialogCloseHandles = [];
	m_dialogContext = null;
	m_unNextGuestID = 1;
	Init(e) {
		R.Debug("RemotePlayStore Init");
		this.m_controllerSlotPlayers = new Array(20);
		this.ClearControllerSlotPlayers();
		if (i.TS.IN_CLIENT) {
			SteamClient.RemotePlay.RegisterForSessionStarted((e, t, r) =>
				this.SessionStarted(
					{
						steamid: e,
						guestid: r,
					},
					t,
				),
			);
			SteamClient.RemotePlay.RegisterForSessionStopped((e, t) =>
				this.SessionStopped({
					steamid: e,
					guestid: t,
				}),
			);
			SteamClient.RemotePlay.RegisterForSessionJoined((e, t, r) =>
				this.SessionJoined(
					{
						steamid: e,
						guestid: t,
					},
					r,
				),
			);
			SteamClient.RemotePlay.RegisterForInputUsed((e, t, r) => {
				this.PlayerUsedInput(
					{
						steamid: e,
						guestid: r,
					},
					t,
				);
			});
			SteamClient.RemotePlay.RegisterForPlayerInputSettingsChanged(
				(e, t, r) => {
					this.PlayerInputSettingsChanged(
						{
							steamid: e,
							guestid: r,
						},
						t,
					);
				},
			);
			SteamClient.RemotePlay.RegisterForPlaceholderStateChanged((e) => {
				this.m_bIsShowingPlaceholder = e;
			});
			SteamClient.RemotePlay.RegisterForClearControllers(() => {
				this.ClearControllerSlotPlayers();
			});
			SteamClient.RemotePlay.RegisterForControllerIndexSet((e, t, r) => {
				this.ControllerIndexSet(
					{
						steamid: e,
						guestid: r,
					},
					t,
				);
			});
			SteamClient.RemotePlay.RegisterForQualityOverride(
				(e) => (this.m_nHostStreamingQualityOverride = e),
			);
			SteamClient.RemotePlay.RegisterForNetworkUtilizationUpdate(
				this.OnNetworkUtilizationUpdate,
			);
			SteamClient.RemotePlay.RegisterForInviteResult(this.HandleLaunchResult);
			SteamClient.RemotePlay.RegisterForGroupDisbanded(
				this.HandleGroupDisbanded,
			);
			SteamClient.RemotePlay.RegisterForRemoteClientStopped(
				this.HandleRemoteClientStopped,
			);
		}
		(0, a.fm)(() => {
			const e = xm.FriendStore.self?.persona?.m_gameid;
			if (e != null) {
				if (!this.m_canCreateInviteForGame.has(e)) {
					this.BCanCreateInviteForGame(e, false).then((t) => {
						this.m_canCreateInviteForGame.set(e, t);
					});
				}
			}
		});
	}
	async BCanCreateInviteForGame(e, t) {
		return (
			!!(0, v.Dp)("RemotePlay.BCanCreateInviteForGame") &&
			SteamClient.RemotePlay.BCanCreateInviteForGame(e, t)
		);
	}
	async BCanAcceptInviteForGame(e, t) {
		if ((0, v.Dp)("RemotePlay.BCanAcceptInviteForGame")) {
			return SteamClient.RemotePlay.BCanAcceptInviteForGame(e, t);
		} else {
			return !i.TS.COUNTRY || t.indexOf(i.TS.COUNTRY) === -1;
		}
	}
	BCanCreateInviteForCurrentGame() {
		const e = xm.FriendStore.self?.persona?.m_gameid;
		return this.m_canCreateInviteForGame.get(e);
	}
	BShowQuickAccessControls() {
		return this.BCanCreateInviteForCurrentGame() || this.in_session;
	}
	HasInviteAndSession(e) {
		let t = l.b.InitFromAccountID(e).ConvertTo64BitString();
		if (
			this.m_nonGuestSessions.has(t) &&
			this.m_nonGuestSessions.get(t).bSession
		) {
			return true;
		}
		let r = false;
		this.m_guestSessions.forEach(
			({ playerID: { steamid: e } }) => (r = r || t === e),
		);
		return r;
	}
	HasInviteAndSessionForGameIDOtherThan(e) {
		let t = false;
		this.GetAllSessions().forEach((r) => {
			if (r.bSession && r.gameID !== e && r.gameID !== undefined) {
				t = true;
			}
		});
		return t;
	}
	GetPlayerPropsIndexOf(e) {
		return this.GetAllSessions().findIndex((t) => D(e, t.playerID));
	}
	GetPlayerPropsByIndex(e) {
		return this.GetAllSessions()[e];
	}
	get player_props_count() {
		return this.m_nonGuestSessions.size + this.m_guestSessions.size;
	}
	ClearControllerSlotPlayers() {
		for (let e = 0; e < this.m_controllerSlotPlayers.length; ++e) {
			this.m_controllerSlotPlayers[e] = null;
		}
	}
	ClearControllerSlotsWithPlayer(e) {
		for (let t = 0; t < this.m_controllerSlotPlayers.length; ++t) {
			if (D(e, this.m_controllerSlotPlayers[t])) {
				this.m_controllerSlotPlayers[t] = null;
			}
		}
	}
	SetPlayerInControllerSlot(e, t) {
		if (!(e < 0) && !(e >= this.m_controllerSlotPlayers.length)) {
			this.m_controllerSlotPlayers[e] = t;
		}
	}
	GetPlayerInControllerSlot(e) {
		if (e < 0 || e >= this.m_controllerSlotPlayers.length) {
			return null;
		} else {
			return this.m_controllerSlotPlayers[e];
		}
	}
	GetControllerSlotsForPlayer(e) {
		return this.m_controllerSlotPlayers
			.map((t, r) => (D(t, e) ? r : null))
			.filter((e) => e !== null);
	}
	async GetControllerType(e) {
		return SteamClient.RemotePlay.GetControllerType(e);
	}
	RemoveControllerFromPrioritySlot(e) {
		const t =
			this.m_controllerSlotPlayers
				.slice(this.priority_controller_slot_count)
				.findIndex((e) => e === null) + this.priority_controller_slot_count;
		if (t === -1) {
			R.Error(
				"[RPT] No empty controller slots found in RemoveControllerFromPrioritySlot. Swapping with another non-priority controller.",
			);
			this.SwapControllerSlots(e, this.priority_controller_slot_count);
		} else {
			this.SwapControllerSlots(e, t);
		}
	}
	SwapControllerSlots(e, t, r = true) {
		return (
			e != t &&
			!(t < 0) &&
			!(t > this.m_controllerSlotPlayers.length - 1) &&
			(SteamClient.RemotePlay.MoveControllerToSlot(e, t),
			r && (this.TriggerControllerRumble(e), this.TriggerControllerRumble(t)),
			true)
		);
	}
	TriggerControllerRumble(e) {
		SteamClient.RemotePlay.IdentifyController(e);
	}
	get priority_controller_slot_count() {
		return 4;
	}
	get bIsShowingPlaceholder() {
		return this.m_bIsShowingPlaceholder;
	}
	CreateInviteAndSession(e, t, r) {
		R.Debug(`CreateInviteAndSession for accountid ${e}`);
		this.m_dialogContext = r;
		if (!e) {
			R.Error(
				"RemotePlayStore.CreateInviteAndSession called with invalid accountid. Did you mean to call CreateGuestInviteAndSession?",
			);
			return this.CreateGuestInviteAndSession(t, r);
		}
		const n = l.b.InitFromAccountID(e);
		return SteamClient.RemotePlay.CreateInviteAndSession(
			n.ConvertTo64BitString(),
			t,
		);
	}
	GetNextGuestID() {
		return this.m_unNextGuestID++;
	}
	CreateGuestInviteAndSession(e, t) {
		R.Debug("CreateGuestInviteAndSession");
		this.m_dialogContext = t;
		const r = l.b.InitFromAccountID(0);
		return SteamClient.RemotePlay.CreateInviteAndSessionWithGuestID(
			r.ConvertTo64BitString(),
			this.GetNextGuestID(),
			e,
		);
	}
	async CreateGuestInviteAndCopyLink(e, t) {
		R.Debug("CreateGuestInviteAndCopyLink");
		this.m_dialogContext = t;
		const r = l.b.InitFromAccountID(0);
		const n = this.GetNextGuestID();
		const i = await SteamClient.RemotePlay.CreateInviteAndSessionWithGuestID(
			r.ConvertTo64BitString(),
			n,
			e,
		);
		if (i != 0) {
			R.Error(`Failed to create guest invite: ${i}`);
			return i;
		} else {
			await (0, a.z7)(() => {
				const e = this.m_guestSessions.get(n);
				return e && !!e.strConnectUrl;
			});
			this.CopyLink(n);
			return i;
		}
	}
	CancelInviteAndSession(e) {
		R.Debug(`CancelInviteAndSession for accountid ${e}`);
		if (!e) {
			R.Error(
				"RemotePlayStore.CancelInviteAndSession called with invalid accountid. Did you mean to call CancelGuestInviteAndSession()?",
			);
		}
		const t = l.b.InitFromAccountID(e);
		return SteamClient.RemotePlay.CancelInviteAndSessionWithGuestID(
			t.ConvertTo64BitString(),
			0,
		);
	}
	CancelGuestInviteAndSession(e, t) {
		R.Debug(`CancelGuestInviteAndSession for guestid ${t}`);
		return SteamClient.RemotePlay.CancelInviteAndSessionWithGuestID(e, t);
	}
	CancelAllInvitesAndSessions() {
		R.Debug("CancelAllInvitesAndSessions");
		this.GetAllSessions().forEach((e) =>
			SteamClient.RemotePlay.CancelInviteAndSessionWithGuestID(
				e.playerID.steamid,
				e.playerID.guestid,
			),
		);
	}
	StopStreamingClient() {
		SteamClient.RemotePlay.StopStreamingClient();
	}
	SetStreamingDesktopToRemotePlayTogetherEnabled(e) {
		this.m_bAllowDesktopStream = e;
		return SteamClient.RemotePlay.SetStreamingDesktopToRemotePlayTogetherEnabled(
			e,
		);
	}
	SetPerUserKeyboardInputEnabled(e, t) {
		return SteamClient.RemotePlay.SetPerUserKeyboardInputEnabledWithGuestID(
			e.steamid,
			e.guestid,
			t,
		);
	}
	SetPerUserMouseInputEnabled(e, t) {
		return SteamClient.RemotePlay.SetPerUserMouseInputEnabledWithGuestID(
			e.steamid,
			e.guestid,
			t,
		);
	}
	SetPerUserControllerInputEnabled(e, t) {
		return SteamClient.RemotePlay.SetPerUserControllerInputEnabledWithGuestID(
			e.steamid,
			e.guestid,
			t,
		);
	}
	async GetPerUserInputSettings(e) {
		return SteamClient.RemotePlay.GetPerUserInputSettingsWithGuestID(
			e.steamid,
			e.guestid,
		);
	}
	BHasGuestPlayer() {
		if (this.m_guestSessions.size === 0) {
			return false;
		}
		let e = false;
		this.m_guestSessions.forEach(({ bSession: t }) => (e = e || t));
		return e;
	}
	BHasPlayer() {
		if (this.m_nonGuestSessions.size === 0 && this.m_guestSessions.size === 0) {
			return false;
		}
		let e = false;
		this.m_nonGuestSessions.forEach(({ bSession: t }) => (e = e || t));
		this.m_guestSessions.forEach(({ bSession: t }) => (e = e || t));
		return e;
	}
	BHasJoinedPlayer() {
		if (this.m_nonGuestSessions.size === 0 && this.m_guestSessions.size === 0) {
			return false;
		}
		let e = false;
		this.m_nonGuestSessions.forEach((t) => (e = e || t?.bJoined));
		this.m_guestSessions.forEach((t) => (e = e || t?.bJoined));
		return e;
	}
	OnGroupCreated(e, t, r) {
		R.Debug(`OnGroupCreated - ${e.steamid64} - ${r}`);
		this.m_sessionHost = e;
		this.m_bIsHost = t;
		this.m_strGameID = r;
	}
	SessionStarted(e, t) {
		R.Debug(`SessionStarted: ${JSON.stringify(e)}`);
		if (typeof e.guestid == "number") {
			this.m_unNextGuestID = Math.max(this.m_unNextGuestID, e.guestid + 1);
		}
		let r = this.GetSessionForPlayer(e);
		if (r === undefined) {
			let n = new l.b(e.steamid).GetAccountID();
			const i = !!e.guestid;
			r = {
				playerID: e,
				friend: xm.FriendStore.GetPlayer(n),
				gameID: t,
				bSession: true,
				bJoined: false,
				bMobile: false,
				bKeyboardEnabled: true,
				bMouseEnabled: true,
				bControllerEnabled: true,
				nKeyboardUsedTime: 0,
				nMouseUsedTime: 0,
				nControllerUsedTime: 0,
				bGuest: i,
				strConnectUrl: i ? "" : undefined,
			};
			this.GetPerUserInputSettings(e)
				.then((t) => {
					this.PlayerInputSettingsChanged(e, t);
				})
				.catch();
			r.friend.LoadIfNecessary();
			if (e.guestid) {
				this.m_guestSessions.set(e.guestid, r);
			} else {
				this.m_nonGuestSessions.set(e.steamid, r);
			}
		} else {
			r.bSession = true;
		}
	}
	GetSessionForPlayer(e) {
		if (e.guestid) {
			return this.m_guestSessions.get(e.guestid);
		} else {
			return this.m_nonGuestSessions.get(e.steamid);
		}
	}
	ClearSessionForPlayer(e) {
		if (e.guestid) {
			this.m_guestSessions.delete(e.guestid);
		} else {
			this.m_nonGuestSessions.delete(e.steamid);
		}
	}
	GetAllSessions() {
		return [
			...Array.from(this.m_nonGuestSessions.values()),
			...Array.from(this.m_guestSessions.values()),
		];
	}
	SessionStopped(e) {
		R.Debug(`SessionStopped: ${JSON.stringify(e)}`);
		if (this.GetSessionForPlayer(e)) {
			this.ClearSessionForPlayer(e);
			xm.AudioPlaybackManager.PlayAudioURL(
				i.TS.COMMUNITY_CDN_URL + "public/sounds/webui/steam_rpt_leave.m4a",
			);
		}
		this.ClearControllerSlotsWithPlayer(e);
	}
	SessionJoined(e, t) {
		R.Debug(`SessionJoined: ${JSON.stringify(e)} - ${t}`);
		let r = this.GetSessionForPlayer(e);
		if (r === undefined) {
			return;
		}
		if (r.bJoined === true) {
			return;
		}
		r.bJoined = true;
		r.rtJoined = Date.now() / 1000;
		r.strAvatarHash = t;
		SteamClient.RemotePlay.BRemotePlayTogetherGuestOnPhoneOrTablet(
			e.steamid,
			e.guestid,
		).then((e) => (r.bMobile = e));
		let n = new l.b(e.steamid).GetAccountID();
		if (n != 0) {
			if (e.guestid && r.playerID.steamid !== e.steamid) {
				r.playerID = e;
				r.friend = xm.FriendStore.GetPlayer(n);
			}
			if (n !== xm.FriendStore.self.accountid) {
				xm.AudioPlaybackManager.PlayAudioURL(
					i.TS.COMMUNITY_CDN_URL + "public/sounds/webui/steam_rpt_join.m4a",
				);
			}
		}
	}
	PlayerUsedInput(e, t) {
		let r = this.GetSessionForPlayer(e);
		if (r !== undefined) {
			switch (t) {
				case w.YI.k_EClientUsedInputTypeKeyboard:
					r.nKeyboardUsedTime = Date.now();
					break;
				case w.YI.k_EClientUsedInputTypeMouse:
					r.nMouseUsedTime = Date.now();
					break;
				case w.YI.k_EClientUsedInputTypeController:
					r.nControllerUsedTime = Date.now();
			}
		}
	}
	PlayerInputSettingsChanged(e, t) {
		let r = this.GetSessionForPlayer(e);
		if (r !== undefined) {
			r.bKeyboardEnabled = t.bKeyboardEnabled;
			r.bMouseEnabled = t.bMouseEnabled;
			r.bControllerEnabled = t.bControllerEnabled;
		}
	}
	ControllerIndexSet(e, t) {
		R.Debug(`ControllerIndexSet: ${t} - ${JSON.stringify(e)}`);
		this.SetPlayerInControllerSlot(t, e);
	}
	HandleLaunchResult(e, t, r, n, i, a) {
		this.m_strGameID = t;
		const s = {
			steamid: e,
			guestid: a,
		};
		R.Debug(`HandleLaunchResult: ${JSON.stringify(s)}`);
		if (r === B.l.k_ERemoteClientLaunchOK) {
			this.GetSessionSettings();
			if (s.guestid) {
				const e = this.GetSessionForPlayer(s);
				if (e && e.bGuest) {
					e.strConnectUrl = i;
				} else {
					R.Error("Got remote play launch result for unknown guest session!");
				}
			}
		} else {
			this.m_unGuestLinkCopied = 0;
		}
	}
	OnNetworkUtilizationUpdate(e, t, r, n) {
		const i = this.GetSessionForPlayer({
			steamid: e,
			guestid: t,
		});
		if (i) {
			i.flNetworkUtilization = r;
			i.flNetworkDuration = n;
		}
	}
	HandleGroupDisbanded() {
		R.Debug("HandleGroupDisbanded");
		this.Reset();
	}
	Reset() {
		R.Debug("Resetting.");
		this.CloseRemotePlayTogetherDialogs();
		this.m_guestSessions.clear();
		this.m_nonGuestSessions.clear();
		this.m_unGuestLinkCopied = 0;
		this.m_strGameID = "";
		this.m_sessionHost = null;
		this.m_bIsHost = false;
		this.m_unNextGuestID = 1;
		this.m_dialogContext = null;
		this.m_rgDialogCloseHandles = [];
	}
	HandleRemoteClientStopped(e, t) {
		this.Reset();
	}
	CloseRemotePlayTogetherDialogs() {
		R.Debug(
			"CloseRemotePlayTogetherDialogs. Have any dialog close handles? " +
				(this.m_rgDialogCloseHandles.length > 0 ? "Yes" : "No"),
		);
		if (this.m_rgDialogCloseHandles.length > 0) {
			const e = this.m_rgDialogCloseHandles;
			this.m_rgDialogCloseHandles = [];
			e.forEach(([e, t]) => t());
		}
	}
	async StopRemotePlay() {
		R.Debug("StopRemotePlay");
		await SteamClient.RemotePlay.CloseGroup();
		this.Reset();
	}
	CopyLink(e) {
		const t = this.m_guestSessions.get(e);
		if (t && t.bGuest) {
			E.YQ(t.strConnectUrl);
			this.m_unGuestLinkCopied = e;
		} else {
			R.Error("Cannot find guest session for copying link");
		}
	}
	get link_copied_for_guest() {
		return this.m_unGuestLinkCopied;
	}
	get game_volume() {
		return this.m_nGameVolume;
	}
	SetGameVolume(e) {
		SteamClient.RemotePlay.SetGameSystemVolume(e);
		this.m_nGameVolume = e;
	}
	get client_streaming_quality() {
		return this.m_nClientStreamingQuality;
	}
	get host_streaming_quality_override() {
		return this.m_nHostStreamingQualityOverride;
	}
	SetClientStreamingQuality(e) {
		SteamClient.RemotePlay.SetClientStreamingQuality(e);
		this.m_nClientStreamingQuality = e;
	}
	get client_streaming_bitrate() {
		return this.m_nClientStreamingBitrate;
	}
	SetClientStreamingBitrate(e) {
		SteamClient.RemotePlay.SetClientStreamingBitrate(e);
		this.m_nClientStreamingBitrate = e;
	}
	get allow_desktop_stream() {
		return this.m_bAllowDesktopStream;
	}
	get is_host() {
		return this.m_bIsHost;
	}
	get host() {
		return this.m_sessionHost;
	}
	get in_session() {
		return this.m_sessionHost != null;
	}
	DialogOpened(e, t, r) {
		this.m_rgDialogCloseHandles.push([e, t, r]);
	}
	DialogClosed(e, t) {
		this.m_rgDialogCloseHandles = this.m_rgDialogCloseHandles.filter(
			([r, n, i]) => !(0, T.u)(r, e) || i != t,
		);
	}
	BDialogOpenInContext(e, t) {
		return this.m_rgDialogCloseHandles.some(
			([r, n, i]) => (0, T.u)(r, e) && (t == null || i == t),
		);
	}
	get dialog_context() {
		return this.m_dialogContext;
	}
	get game_id() {
		return this.m_strGameID;
	}
	RemoteClientStarted(e, t, r) {
		this.m_sessionHost = e;
		this.m_bIsHost = t;
		this.m_strGameID = r;
		this.GetSessionSettings();
	}
	GetSessionSettings() {
		SteamClient.RemotePlay.GetGameSystemVolume().then(
			(e) => (this.m_nGameVolume = e),
		);
		SteamClient.RemotePlay.GetClientStreamingQuality().then(
			(e) => (this.m_nClientStreamingQuality = e),
		);
		SteamClient.RemotePlay.GetClientStreamingBitrate().then(
			(e) => (this.m_nClientStreamingBitrate = e),
		);
	}
}
function D(e, t) {
	return e?.steamid === t?.steamid && e?.guestid === t?.guestid;
}
(0, n.Cg)([a.sH], k.prototype, "m_controllerSlotPlayers", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_bIsShowingPlaceholder", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_unGuestLinkCopied", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_nGameVolume", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_bAllowDesktopStream", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_nHostStreamingQualityOverride", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_nClientStreamingQuality", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_nClientStreamingBitrate", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_bIsHost", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_sessionHost", undefined);
(0, n.Cg)([a.sH], k.prototype, "m_strGameID", undefined);
(0, n.Cg)([a.XI], k.prototype, "Init", null);
(0, n.Cg)([a.EW], k.prototype, "player_props_count", null);
(0, n.Cg)([a.EW], k.prototype, "bIsShowingPlaceholder", null);
(0, n.Cg)([a.XI], k.prototype, "SessionStopped", null);
(0, n.Cg)([a.XI], k.prototype, "SessionJoined", null);
(0, n.Cg)([a.XI], k.prototype, "PlayerInputSettingsChanged", null);
(0, n.Cg)([I.oI], k.prototype, "HandleLaunchResult", null);
(0, n.Cg)([I.oI], k.prototype, "OnNetworkUtilizationUpdate", null);
(0, n.Cg)([I.oI], k.prototype, "HandleGroupDisbanded", null);
(0, n.Cg)([a.XI], k.prototype, "Reset", null);
(0, n.Cg)([I.oI], k.prototype, "HandleRemoteClientStopped", null);
(0, n.Cg)([I.oI], k.prototype, "SetClientStreamingQuality", null);
var N = require("./4563.js");
var F = require("./54946.js");
var G = require("./46948.js");
var O = require(/*webcrack:missing*/ "./49455.js");
class P {
	m_bReady = false;
	m_FriendsSettings = undefined;
	m_CommunityPreferences = undefined;
	m_StorePreferences = undefined;
	m_bSteamIsInTournamentMode = false;
	m_ServerCommunityPreferences;
	m_unTimerUploadCommunityPreferences = undefined;
	m_CM;
	m_rgOnReadyCallbacks = [];
	m_iFriendSettingsStore;
	m_bFriendSettingsReady = false;
	m_Storage;
	constructor(e) {
		(0, a.Gn)(this);
		this.m_Storage = e;
		if (i.TS.IN_CLIENT) {
			this.m_iFriendSettingsStore = new z(
				this,
				this.OnFriendSettingsChanged.bind(this),
			);
		} else {
			this.m_iFriendSettingsStore = new x(
				this,
				this.OnFriendSettingsChanged.bind(this),
			);
		}
		this.m_bSteamIsInTournamentMode = false;
		if (i.TS.IN_CLIENT) {
			SteamClient.System.IsSteamInTournamentMode().then(
				(e) => (this.m_bSteamIsInTournamentMode = e),
			);
		}
		{
			let e = new F.B4();
			this.m_CommunityPreferences = {
				bParenthesizeNicknames: e.parenthesize_nicknames(),
				eTextFilterSetting: e.text_filter_setting(),
				bTextFilterIgnoreFriends: e.text_filter_ignore_friends(),
				content_descriptor_preferences: {
					content_descriptors_to_exclude: [],
				},
			};
		}
		this.m_ServerCommunityPreferences = undefined;
	}
	Init(e) {
		this.m_CM = e;
		this.m_CM.AddOnLogonCallback(() => {
			if (!this.m_bReady) {
				this.m_iFriendSettingsStore.InternalInit();
				this.SetReady();
			}
			let e = o.w.Init(G.xf);
			G.nd.GetStorePreferences(this.m_CM.GetServiceTransport(), e).then((e) => {
				this.m_StorePreferences = e.Body();
			});
			let t = o.w.Init(F.tz);
			F.xt
				.GetCommunityPreferences(this.m_CM.GetServiceTransport(), t)
				.then((e) => {
					this.UpdateCommunityPreferences(e.Body().preferences());
				});
		});
		this.m_CM.messageHandlers.RegisterServiceNotificationHandlerAction(
			F.QA.NotifyCommunityPreferencesChangedHandler,
			(e) => {
				this.UpdateCommunityPreferences(e.Body().preferences());
				return 1;
			},
		);
	}
	BReady() {
		return this.m_bReady;
	}
	get FriendsSettings() {
		return this.m_FriendsSettings;
	}
	BUpdateFriendsSettings(e) {
		return (
			!!this.m_iFriendSettingsStore.BUpdateSettings(e) &&
			((this.m_FriendsSettings = e), true)
		);
	}
	BClientHasFeatureOrOnWeb(e) {
		return (
			!i.TS.IN_CLIENT ||
			(!!this.BReady() &&
				typeof this.m_FriendsSettings.featuresEnabled == "object" &&
				!!this.m_FriendsSettings.featuresEnabled.hasOwnProperty(e) &&
				this.m_FriendsSettings.featuresEnabled[e])
		);
	}
	IsSteamInTournamentMode() {
		return this.m_bSteamIsInTournamentMode;
	}
	BAlwaysShowChatsInNewWindow() {
		return this.m_FriendsSettings.bAlwaysNewChatWindow;
	}
	BSingleWindowModeEnabled() {
		return !!this.m_FriendsSettings.bSingleWindowMode;
	}
	BackfillSingleWindowMode(e) {
		if (this.m_FriendsSettings.bSingleWindowMode === undefined) {
			console.log("Performing single window mode backfill", e);
			this.SetSingleWindowMode(e);
		}
	}
	SetSingleWindowMode(e) {
		this.m_FriendsSettings.bSingleWindowMode = e;
		this.BUpdateFriendsSettings(this.m_FriendsSettings);
	}
	BForceAlphabeticFriendSorting() {
		return this.m_FriendsSettings.bForceAlphabeticFriendSorting;
	}
	RunOnReady(e) {
		if (this.m_bReady) {
			e();
		} else {
			this.m_rgOnReadyCallbacks.push(e);
		}
	}
	GetAccountSpecificLocalStorageKey(e) {
		if (this.m_CM && this.m_CM.steamid && this.m_CM.steamid.BIsValid()) {
			return e + "_" + this.m_CM.steamid.GetAccountID();
		} else {
			return null;
		}
	}
	async GetObjectFromLocalStorageWhenReady(e, t) {
		await this.WhenReady();
		return this.GetObjectFromLocalStorage(e, t);
	}
	GetObjectFromLocalStorage(e, t) {
		let r = this.GetAccountSpecificLocalStorageKey(e);
		if (r) {
			return this.m_Storage.GetObject(r).then((e) => {
				let r = Object.assign({}, t, e);
				if (t && typeof t == "object") {
					for (let n in t) {
						if (typeof t[n] == "object" && e) {
							r[n] = Object.assign({}, t[n], e[n]);
						}
					}
				}
				return r;
			});
		} else {
			return Promise.reject("Storage not ready");
		}
	}
	StoreObjectInLocalStorage(e, t) {
		let r = this.GetAccountSpecificLocalStorageKey(e);
		return !!r && (this.m_Storage.StoreObject(r, t), true);
	}
	async GetFlagFromLocalStorageWhenReady(e) {
		await this.WhenReady();
		return this.GetFlagFromLocalStorage(e);
	}
	GetFlagFromLocalStorage(e) {
		let t = this.GetAccountSpecificLocalStorageKey(e);
		if (t) {
			return this.m_Storage.GetString(t).then((e) => e === "true");
		} else {
			return Promise.reject("Storage not ready");
		}
	}
	SetFlagInLocalStorage(e, t) {
		let r = this.GetAccountSpecificLocalStorageKey(e);
		return (
			!!r &&
			(t
				? this.m_Storage.StoreString(r, "true")
				: this.m_Storage.RemoveObject(r),
			true)
		);
	}
	BFlagExistsInLocalStorage(e) {
		const t = this.GetAccountSpecificLocalStorageKey(e);
		if (t) {
			return this.m_Storage.GetString(t).then((e) => e !== null);
		} else {
			return Promise.reject("Storage not ready");
		}
	}
	WhenReady() {
		if (this.m_bReady) {
			return Promise.resolve();
		} else {
			return new Promise((e) => this.RunOnReady(e));
		}
	}
	SetReady() {
		if (
			this.m_bFriendSettingsReady &&
			this.m_CM &&
			this.m_CM.steamid.BIsValid()
		) {
			this.m_bReady = true;
			for (let e of this.m_rgOnReadyCallbacks) {
				e();
			}
			this.m_rgOnReadyCallbacks = [];
		}
	}
	OnFriendSettingsChanged(e) {
		this.m_FriendsSettings = e;
		this.m_bFriendSettingsReady = true;
		this.SetReady();
	}
	get CommunityPreferences() {
		return this.m_CommunityPreferences;
	}
	UpdateCommunityPreferences(e) {
		let t = {
			...this.m_CommunityPreferences,
		};
		if (e.parenthesize_nicknames() !== undefined) {
			t.bParenthesizeNicknames = e.parenthesize_nicknames();
		}
		this.m_ServerCommunityPreferences = {
			...t,
		};
		this.m_CommunityPreferences = t;
	}
	CommunityPreferencesToMessage(e) {
		let t = new F.B4();
		t.set_parenthesize_nicknames(e.bParenthesizeNicknames);
		return t;
	}
	SetCommunityPreferences(e) {
		this.m_CommunityPreferences = e;
		if ((0, v.Dp)("Messaging.PostMessage")) {
			SteamClient.Messaging.PostMessage(
				"Settings",
				"CommunityPreferences",
				JSON.stringify(e),
			);
		}
		if (this.m_unTimerUploadCommunityPreferences) {
			clearTimeout(this.m_unTimerUploadCommunityPreferences);
		}
		this.m_unTimerUploadCommunityPreferences = SetBackgroundTimeout(() => {
			this.m_unTimerUploadCommunityPreferences = undefined;
			this.UploadCommunityPreferences();
		}, 5000);
	}
	UploadCommunityPreferences() {
		let e = false;
		if (this.m_ServerCommunityPreferences === undefined) {
			e = true;
		} else {
			for (let t of Object.keys(this.m_ServerCommunityPreferences)) {
				if (
					this.m_ServerCommunityPreferences[t] !== this.CommunityPreferences[t]
				) {
					e = true;
					break;
				}
			}
		}
		if (!e) {
			return;
		}
		let t = o.w.Init(F.pr);
		t.Body().set_preferences(
			this.CommunityPreferencesToMessage(this.CommunityPreferences),
		);
		F.xt
			.SetCommunityPreferences(this.m_CM.GetServiceTransport(), t)
			.then((e) => {});
	}
	get StorePreferences() {
		return this.m_StorePreferences;
	}
	FillInChatUsabilityMetrics(e) {
		let t = e.settings();
		let r = this.FriendsSettings;
		t.set_notifications_show_ingame(r.bNotifications_ShowIngame);
		t.set_notifications_show_online(r.bNotifications_ShowOnline);
		t.set_notifications_show_message(r.bNotifications_ShowMessage);
		t.set_notifications_events_and_announcements(
			r.bNotifications_EventsAndAnnouncements,
		);
		t.set_sounds_play_ingame(r.bSounds_PlayIngame);
		t.set_sounds_play_online(r.bSounds_PlayOnline);
		t.set_sounds_play_message(r.bSounds_PlayMessage);
		t.set_sounds_events_and_announcements(r.bSounds_EventsAndAnnouncements);
		t.set_always_new_chat_window(r.bAlwaysNewChatWindow);
		t.set_force_alphabetic_friend_sorting(r.bForceAlphabeticFriendSorting);
		t.set_chat_flash_mode(r.nChatFlashMode);
		t.set_remember_open_chats(r.bRememberOpenChats);
		t.set_compact_quick_access(r.bCompactQuickAccess);
		t.set_compact_friends_list(r.bCompactFriendsList);
		t.set_notifications_show_chat_room_notification(
			r.bNotifications_ShowChatRoomNotification,
		);
		t.set_sounds_play_chat_room_notification(
			r.bSounds_PlayChatRoomNotification,
		);
		t.set_hide_offline_friends_in_tag_groups(r.bHideOfflineFriendsInTagGroups);
		t.set_hide_categorized_friends(r.bHideCategorizedFriends);
		t.set_categorize_in_game_friends_by_game(r.bCategorizeInGameFriendsByGame);
		t.set_chat_font_size(r.nChatFontSize);
		t.set_use24hour_clock(r.b24HourClock);
		t.set_do_not_disturb_mode(r.bDoNotDisturbMode);
		t.set_disable_embed_inlining(r.bDisableEmbedInlining);
		t.set_sign_into_friends(r.bSignIntoFriends);
		t.set_animated_avatars(r.bAnimatedAvatars);
	}
}
(0, n.Cg)([a.sH], P.prototype, "m_bReady", undefined);
(0, n.Cg)([a.sH], P.prototype, "m_FriendsSettings", undefined);
(0, n.Cg)([a.sH], P.prototype, "m_CommunityPreferences", undefined);
(0, n.Cg)([a.sH], P.prototype, "m_StorePreferences", undefined);
(0, n.Cg)([a.sH], P.prototype, "m_bSteamIsInTournamentMode", undefined);
(0, n.Cg)([a.XI], P.prototype, "BUpdateFriendsSettings", null);
(0, n.Cg)([a.XI], P.prototype, "UpdateCommunityPreferences", null);
(0, n.Cg)([a.XI], P.prototype, "SetCommunityPreferences", null);
class L {
	m_SettingsStore;
	m_fnFriendSettingsChanged;
	constructor(e, t) {
		this.m_SettingsStore = e;
		this.m_fnFriendSettingsChanged = t;
	}
}
class z extends L {
	m_bClientInitComplete = false;
	constructor(e, t) {
		super(e, t);
		this.InternalInit();
	}
	InternalInit() {
		if (!this.m_bClientInitComplete) {
			if (
				SteamClient &&
				SteamClient.FriendSettings &&
				SteamClient.FriendSettings.RegisterForSettingsChanges
			) {
				SteamClient.FriendSettings.RegisterForSettingsChanges(
					this.OnClientSettingsChange.bind(this),
				);
				this.m_bClientInitComplete = true;
			} else {
				(0, O.w)(false, "Can't initialize settings from client");
			}
		}
	}
	OnClientSettingsChange(e) {
		let t;
		let r = N.u();
		if (typeof e != "string") {
			t = e.FriendsSettings;
			if (
				SteamClient.FriendSettings &&
				SteamClient.FriendSettings.SetFriendSettings
			) {
				this.BUpdateSettings(t);
				return;
			}
		} else {
			t = JSON.parse(e, (e, t) =>
				e.substring(0, 1) == "b" && typeof t == "number" ? t != 0 : t,
			);
		}
		Object.assign(r, t);
		this.m_fnFriendSettingsChanged(r);
	}
	BUpdateSettings(e) {
		let t = JSON.stringify(e);
		SteamClient.FriendSettings.SetFriendSettings(t);
		return true;
	}
}
class x extends L {
	static k_strLocalStorageKeyPrefix = "LocalStorageFriendsSettings";
	InternalInit() {
		this.m_SettingsStore
			.GetObjectFromLocalStorage(
				x.k_strLocalStorageKeyPrefix,
				this.GetDefaultSettings(),
			)
			.then((e) => {
				this.m_fnFriendSettingsChanged(e.friendsSettings);
			});
	}
	GetDefaultSettings() {
		return {
			friendsSettings: N.u(),
		};
	}
	BUpdateSettings(e) {
		let t = {
			friendsSettings: e,
		};
		return this.m_SettingsStore.StoreObjectInLocalStorage(
			x.k_strLocalStorageKeyPrefix,
			t,
		);
	}
}
var U = require("./70839.js");
class W {
	constructor() {
		(0, a.Gn)(this);
	}
	m_CMInterface;
	m_PrivacySettings = {
		privacy_state: 0,
		privacy_state_inventory: 0,
		privacy_state_gifts: 0,
		privacy_state_ownedgames: 0,
		privacy_state_playtime: 0,
		privacy_state_friendslist: 0,
	};
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.RunWhenLoggedOn(async () => {
			let e = o.w.Init(F.be);
			let t = await F.xt.GetPrivacySettings(
				this.m_CMInterface.GetServiceTransport(),
				e,
			);
			if (t.GetEResult() == 1) {
				this.ReadPrivacySettings(t.Body().privacy_settings());
			}
		});
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			F.QA.NotifyPrivacyPrivacySettingsChangedHandler,
			(e) => {
				this.ReadPrivacySettings(e.Body().privacy_settings());
				return 1;
			},
		);
	}
	get PrivacySettings() {
		return this.m_PrivacySettings;
	}
	ReadPrivacySettings(e) {
		Object.assign(this.m_PrivacySettings, e.toObject());
	}
}
(0, n.Cg)([a.sH], W.prototype, "m_PrivacySettings", undefined);
var V = require("./95377.js");
var H = require("./36934.js");
var j = require("./66146.js");
var q = require("./15498.js");
var Q = require("./86172.js");
var Z = require(/*webcrack:missing*/ "./90095.js");
function Y(e, t) {
	return function (...t) {
		if (xm.ready_to_render) {
			e.apply(this, t);
		} else {
			(0, a.z7)(
				() => xm.ready_to_render,
				() => {
					e.apply(this, t);
				},
			);
		}
	};
}
export function Nw(e, t, r) {
	return {
		value: Y(r.value),
	};
}
export function zy(e) {
	return Y(e, e.name);
}
export class iw {}
export class RV {}
export class m {
	m_CMInterface;
	m_BrowserContextDefaultTarget = T.m;
	m_ChatRoomBBCodeParser;
	m_FriendChatBBCodeParser;
	m_NotificationBBCodeParser;
	m_ChatRoomEffectSettings;
	m_FriendStore;
	m_ChatStore;
	m_UIStore;
	m_Storage;
	m_SettingsStore;
	m_AppInfoStore = H.Vw;
	m_NotificationManager;
	m_EconomyStore = new g();
	m_UserStore = new W();
	m_VoiceChatStore;
	m_ParentalStore = new S();
	m_BroadcastStore = new _m();
	m_GroupMemberStore = new C.me();
	m_RemotePlayStore = new k();
	m_CookiePreferenceStore;
	m_bReadyToRender = false;
	static sm_msStartup = performance.now();
	m_bShuttingDown = false;
	m_exportsCurrentUserStatus;
	m_exportsVoiceInterface = null;
	constructor(e, t = {}) {
		(0, a.Gn)(this);
		(0, O.w)(!xm, "FriendsUIApp already initialized");
		xm = this;
		window.g_FriendsUIApp = this;
		this.m_Storage = e;
		this.m_SettingsStore = t.SettingsStore || new P(e);
		this.m_FriendStore = t.FriendStore || new h.VT();
		this.m_ChatStore = t.ChatStore || new d.fl(this.m_FriendStore);
		this.m_UIStore = t.UIStore || new U.Vi(this.m_ChatStore);
		this.m_VoiceChatStore = new V.F$(this.m_SettingsStore);
		this.m_exportsCurrentUserStatus = {
			GetPersonaState: () =>
				this.FriendStore.self
					? this.FriendStore.self.persona.m_ePersonaState
					: 0,
			SetUserOnline: () => this.FriendStore.SetUserPersonaState(1),
			SetUserInvisible: () => this.FriendStore.SetUserPersonaState(7),
			SetUserAway: () => this.FriendStore.SetUserPersonaState(3),
			SetUserOffline: () => {
				this.SignOutOfFriends(T.m);
				this.FriendStore.SetUserPersonaState(0);
			},
			GetUserDoNotDisturb: () => this.FriendStore.GetUserDoNotDisturb(),
			SetUserDoNotDisturb: (e) => this.FriendStore.SetUserDoNotDisturb(e),
		};
		this.m_exportsVoiceInterface = {
			IsAnyVoiceActive: () => this.VoiceStore.IsAnyVoiceActive(),
			IsMicMuted: () => this.VoiceStore.IsMicMuted(),
			IsOutputMuted: () => this.VoiceStore.IsOutputMuted(),
			ToggleMicMuting: () => this.VoiceStore.ToggleMicMuting(),
			ToggleOutputMuting: () => this.VoiceStore.ToggleOutputMuting(),
			EndVoiceChat: () => this.VoiceStore.OnUserEndVoiceChat(),
			RegisterForPendingOneOnOneVoiceChatRequests: (e) =>
				this.VoiceStore.RegisterForPendingOneOnOneVoiceChatRequests(e),
			RegisterForCurrentUserVoiceLevel: (e) =>
				this.VoiceStore.RegisterForCurrentUserVoiceLevel(e),
			IsLocalMicTestActive: () => this.VoiceStore.IsLocalMicTestActive(),
			InitiateLocalMicTest: () => this.VoiceStore.InitiateLocalMicTest(),
			EndLocalMicTest: () => this.VoiceStore.EndLocalMicTest(),
			GetSelectedMic: () => this.VoiceStore.GetSelectedMic(),
			GetSelectedOutputDevice: () => this.VoiceStore.GetSelectedOutputDevice(),
			SetSelectedMic: (e) => this.VoiceStore.SetSelectedMic(e),
			SetSelectedOutput: (e) => this.VoiceStore.SetSelectedOutput(e),
			ConvertGainValueToSliderValue: (e, t) =>
				this.VoiceStore.ConvertGainValueToSliderValue(e, t),
			ConvertSliderToGainValue: (e, t) =>
				this.VoiceStore.ConvertSliderToGainValue(e, t),
			GetVoiceInputGain: () => this.VoiceStore.GetVoiceInputGain(),
			GetVoiceOutputGain: () => this.VoiceStore.GetVoiceOutputGain(),
			GetMaxInputOutputGain: () => V.F$.k_MaxInputOutputGainValue,
			SetVoiceInputGain: (e) => this.VoiceStore.SetVoiceInputGain(e),
			SetVoiceOutputGain: (e) => this.VoiceStore.SetVoiceOutputGain(e),
			GetPushToTalkEnabled: () => this.VoiceStore.GetPushToTalkEnabled(),
			GetPushToMuteEnabled: () => this.VoiceStore.GetPushToMuteEnabled(),
			SetPushToTalkEnabled: (e) => this.VoiceStore.SetPushToTalkEnabled(e),
			SetPushToMuteEnabled: (e) => this.VoiceStore.SetPushToMuteEnabled(e),
			GetPushToTalkHotKeyDisplayString: () =>
				this.VoiceStore.GetPushToTalkHotKeyDisplayString(),
			GetPushToTalkOrMuteSoundsEnabled: () =>
				this.VoiceStore.GetPushToTalkOrMuteSoundsEnabled(),
			SetPushToTalkOrMuteSoundsEnabled: (e) =>
				this.VoiceStore.SetPushToTalkOrMuteSoundsEnabled(e),
			RefreshPushToTalkKeySettings: () =>
				this.VoiceStore.RefreshPushToTalkKeySettings(),
			GetUseNoiseGateLevel: () => this.VoiceStore.GetUseNoiseGateLevel(),
			SetUseNoiseGateLevel: (e) => this.VoiceStore.SetUseNoiseGateLevel(e),
			GetUseEchoCancellation: () => this.VoiceStore.GetUseEchoCancellation(),
			SetUseEchoCancellation: (e) => this.VoiceStore.SetUseEchoCancellation(e),
			GetUseNoiseCancellation: () => this.VoiceStore.GetUseNoiseCancellation(),
			SetUseNoiseCancellation: (e) =>
				this.VoiceStore.SetUseNoiseCancellation(e),
			GetUseAutoGainControl: () => this.VoiceStore.GetUseAutoGainControl(),
			SetUseAutoGainControl: (e) => this.VoiceStore.SetUseAutoGainControl(e),
			GetVoiceLogs: () => this.VoiceStore.GetVoiceLogs(),
			GetUseSteamAudioSpatialization: () =>
				this.VoiceStore.GetUseSteamAudioSpatialization(),
			SetUseSteamAudioSpatialization: (e) =>
				this.VoiceStore.SetUseSteamAudioSpatialization(e),
		};
	}
	InitInternal(e, t, r = []) {
		this.m_CMInterface = e;
		this.m_NotificationManager = t;
		const n = [
			["FriendStore", () => this.m_FriendStore.Init(e)],
			["ChatStore", () => this.m_ChatStore.Init(e, this.m_VoiceChatStore)],
			["Clock Drift", () => this.InitAdjustClockDriftFromServer()],
			["VoiceChatStore", () => this.m_VoiceChatStore.Init(e)],
			["SettingsStore", () => this.m_SettingsStore.Init(e)],
			["AppInfoStore", () => this.m_AppInfoStore.Init(e)],
			["UIStore", () => this.m_UIStore.Init()],
			["EconomyStore", () => this.m_EconomyStore.Init(e)],
			["ParentalStore", () => this.m_ParentalStore.Init(e)],
			["BroadcastStore", () => this.m_BroadcastStore.Init(e)],
			["RemotePlayStore", () => this.m_RemotePlayStore.Init(e)],
			["GroupMemberStore", () => this.m_GroupMemberStore.Init()],
			["UserStore", () => this.m_UserStore.Init(e)],
			[
				"CookiePreferenceStore",
				() => (this.m_CookiePreferenceStore = new q._(e)),
			],
			...r,
		];
		(0, Q.b)("FriendsUI ReadyToRender", n).then(
			() => {
				console.log("Ready To Render promises succeeded");
				this.SetReadyToRender();
			},
			(e) => {
				console.error("Ready To Render promise failed: ", e);
				this.SetReadyToRender();
			},
		);
	}
	GetChatRoomBBCodeParser() {
		return this.m_ChatRoomBBCodeParser;
	}
	GetFriendChatBBCodeParser() {
		return this.m_FriendChatBBCodeParser;
	}
	GetNotificationBBCodeParser() {
		return this.m_NotificationBBCodeParser;
	}
	GetChatRoomEffectSettings() {
		return this.m_ChatRoomEffectSettings;
	}
	get CMInterface() {
		return this.m_CMInterface;
	}
	get FriendStore() {
		return this.m_FriendStore;
	}
	get ChatStore() {
		return this.m_ChatStore;
	}
	get VoiceStore() {
		return this.m_VoiceChatStore;
	}
	get UIStore() {
		return this.m_UIStore;
	}
	get SettingsStore() {
		return this.m_SettingsStore;
	}
	get AppInfoStore() {
		return this.m_AppInfoStore;
	}
	get Storage() {
		return this.m_Storage;
	}
	get NotificationManager() {
		return this.m_NotificationManager;
	}
	get EconomyStore() {
		return this.m_EconomyStore;
	}
	get UserStore() {
		return this.m_UserStore;
	}
	get ParentalStore() {
		return this.m_ParentalStore;
	}
	get BroadcastStore() {
		return this.m_BroadcastStore;
	}
	get RemotePlayStore() {
		return this.m_RemotePlayStore;
	}
	get GroupMemberStore() {
		return this.m_GroupMemberStore;
	}
	get CookiePreferenceStore() {
		return this.m_CookiePreferenceStore;
	}
	async SetReadyToRender() {
		if (
			!this.m_bReadyToRender &&
			(console.log(
				`FriendsUI ready to render after ${performance.now() - m.sm_msStartup}ms`,
			),
			(this.m_bReadyToRender = true),
			await this.OnReadyToRender(),
			this.IsLoadedInClientSharedJSContext())
		) {
			let e = {
				message: "FriendsUIReady",
				data: i.TS.BUILD_TIMESTAMP,
			};
			window.parent.postMessage(e, "https://steamloopback.host");
		}
	}
	get ready_to_render() {
		return this.m_bReadyToRender;
	}
	GetStartupTime() {
		return m.sm_msStartup;
	}
	ShowFriendChatDialog(e, t, r = true) {
		return this.UIStore.ShowFriendChatDialog(e, t, r, r);
	}
	GetDefaultBrowserContext() {
		return this.m_BrowserContextDefaultTarget;
	}
	SetDefaultPopupContext(e) {
		console.log("Set default popup context: " + e.m_unPID);
		this.m_BrowserContextDefaultTarget = e;
	}
	CreateNewTabFromUniqueID(e, t, r, n) {
		let i = t.match(/^f(\d+)$/);
		if (i && i[1]) {
			let t = parseInt(i[1]);
			let r = xm.FriendStore.GetPlayer(t);
			if (r && !r.is_blocked) {
				let i = this.m_ChatStore.GetFriendChat(t);
				if (i) {
					const a = new A.JB(e, i);
					if (
						!!n &&
						!r.is_friend &&
						!xm.FriendStore.BApprovedNonFriendMessages(t)
					) {
						i.SetShowNonFriendWarning(true);
					}
					return a;
				}
			}
		}
		let a = t.match(/^cg(\d+)$/);
		if (a && a[1]) {
			let t = this.m_ChatStore.GetChatRoomGroup(a[1]);
			if (t) {
				this.m_ChatStore.IncRefActiveChatRoomGroup(t.GetGroupID(), !r);
				return new j.$C(e, t);
			}
		}
		return null;
	}
	async InitAdjustClockDriftFromServer() {
		return new Promise((e, t) => {
			this.m_CMInterface.RunWhenLoggedOn(async () => {
				try {
					await (0, a.z7)(
						() => this.m_CMInterface.BPerformedInitialClockAdjustment(),
						{
							timeout: 1000,
						},
					);
					e();
				} catch (e) {
					console.warn(
						"Timed out waiting for initial server clock drift adjustment",
					);
					t();
				}
			});
		});
	}
	GetServerTimeMS() {
		return this.m_CMInterface.GetServerTimeMS();
	}
	GetServerRTime32() {
		return this.m_CMInterface.GetServerRTime32();
	}
	RTime32ToDate(e) {
		return this.m_CMInterface.RTime32ToDate(e);
	}
	static sm_tzOffset;
	GetLocalMidnightInRTime32(e) {
		if (m.sm_tzOffset === undefined) {
			m.sm_tzOffset = new Date().getTimezoneOffset() * 60;
			(0, O.w)(
				m.sm_tzOffset || m.sm_tzOffset === 0,
				`Computed invalid timezone offset ${m.sm_tzOffset}`,
			);
		}
		let t = m.sm_tzOffset || 0;
		let r = (e || this.m_CMInterface.GetServerRTime32()) - t;
		return Math.floor(r / 86400) * 86400 + t;
	}
	IsInBeta() {
		return i.TS.FRIENDSUI_BETA;
	}
	OnWindowBecameVisible() {
		this.m_FriendStore.EnsureFriendsListLoaded();
	}
	BIsValidBrowserContext(e) {
		return (0, T.u)(e, T.m);
	}
	ShowCloseActiveVoiceConfirmation(e, t) {}
	UpdatePersonaState(e) {}
	BShowChatRoomNotification() {
		return (
			!!this.IsGamepadUIActive() ||
			this.SettingsStore.FriendsSettings.bNotifications_ShowChatRoomNotification
		);
	}
	BPlayChatRoomNotificationSound() {
		return (
			!this.IsGamepadUIActive() &&
			this.SettingsStore.FriendsSettings.bSounds_PlayChatRoomNotification
		);
	}
	BShowDirectChatNotification() {
		return this.SettingsStore.FriendsSettings.bNotifications_ShowMessage;
	}
	GetCurrentUserStatusInterface() {
		return this.m_exportsCurrentUserStatus;
	}
	GetVoiceInterface() {
		return this.m_exportsVoiceInterface;
	}
	SetEmoticonTrackerCallback(e) {
		this.m_ChatStore.EmoticonStore.SetEmoticonTrackerCallback(e);
	}
	SetStickerTrackerCallback(e) {
		this.m_ChatStore.EmoticonStore.SetStickerTrackerCallback(e);
	}
	async Reconnect() {
		await Promise.all([
			this.CMInterface.Connect(),
			this.UIStore.RestorePopupState(),
		]);
	}
}
export let xm;
export function TN() {
	return (0, Z.q3)(() => xm.FriendStore.self?.persona?.m_gameid ?? "0") != "0";
}
(0, n.Cg)([a.sH], m.prototype, "m_bReadyToRender", undefined);
(0, n.Cg)([a.EW], m.prototype, "ready_to_render", null);
