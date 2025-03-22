var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./42689.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./44846.js");
var l = require(/*webcrack:missing*/ "./31084.js");
var c = require("./84731.js");
var m = require("./34875.js");
var u = require("./78771.js");
var d = require("./70232.js");
var A = require("./12956.js");
var p = require("./13665.js");
var g = require(/*webcrack:missing*/ "./89193.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require(/*webcrack:missing*/ "./83957.js");
var _ = C;
class f {
	constructor() {
		(0, g.Gn)(this);
	}
	m_bValidatedEmail = false;
	m_nMobileDeviceCount = 0;
	m_bIsLoaded = false;
	m_promise;
	m_bLoadedFromConfig = false;
	LazyInit() {
		if (!this.m_bLoadedFromConfig) {
			let e = (0, h.Fd)("notificationstore", "application_config");
			if (this.ValidateStoreDefault(e)) {
				(0, g.h5)(() => {
					this.m_bIsLoaded = true;
					this.m_bValidatedEmail = e.email_validated;
					this.m_nMobileDeviceCount = e.mobile_device_count;
				});
			}
			this.m_bLoadedFromConfig = true;
		}
	}
	ValidateStoreDefault(e) {
		return (
			e && typeof e == "object" && typeof e.mobile_device_count == "number"
		);
	}
	BIsLoaded() {
		return this.m_bIsLoaded;
	}
	BHasValidatedEmail() {
		return this.m_bValidatedEmail;
	}
	BHasPushNotification() {
		return this.m_nMobileDeviceCount > 0;
	}
	async HintLoad() {
		this.LazyInit();
		if (this.m_bIsLoaded) {
			return 1;
		} else if (h.iA.logged_in) {
			this.m_promise ||= this.InternalLoad();
			return this.m_promise;
		} else {
			return 1;
		}
	}
	async InternalLoad() {
		const e = h.TS.STORE_BASE_URL + "notification/ajaxusersettings";
		const t = await _.get(e, {
			withCredentials: true,
		});
		if (t.data.success == 1) {
			(0, g.h5)(() => {
				this.m_bIsLoaded = true;
				this.m_bValidatedEmail = t.data.email_validated;
				this.m_nMobileDeviceCount = t.data.mobile_device_count;
			});
		}
		return t.data.success;
	}
}
(0, n.Cg)([g.sH], f.prototype, "m_bValidatedEmail", undefined);
(0, n.Cg)([g.sH], f.prototype, "m_nMobileDeviceCount", undefined);
let b = new f();
var _y = require(/*webcrack:missing*/ "./24892.js");
var S = require("./64608.js");
var w = require("./82775.js");
var B = require("./10606.js");
var v = require("./13869.js");
var I = require(/*webcrack:missing*/ "./50376.js");
var E = require(/*webcrack:missing*/ "./26853.js");
var M = require(/*webcrack:missing*/ "./98995.js");
var T = require("./16154.js");
var R = require(/*webcrack:missing*/ "./90765.js");
var k = require(/*webcrack:missing*/ "./46108.js");
var D = require(/*webcrack:missing*/ "./52451.js");
var N = require(/*webcrack:missing*/ "./41180.js");
var F = require(/*webcrack:missing*/ "./53807.js");
var G = require("./43088.js");
var O = G;
var P = require("./95020.js");
var L = require("./6440.js");
var z = require("./76565.js");
var x = require("./4816.js");
var U = require("./24218.js");
export let j = class extends s.Component {
	m_iMenuInstance;
	m_elDropDownRef = s.createRef();
	m_bLoadWasCancelled = false;
	state = {
		bIsOpen: false,
		bIsLoadingNotificationSettings: !b.BIsLoaded(),
	};
	componentDidMount() {
		if (this.state.bIsLoadingNotificationSettings) {
			b.HintLoad()
				.catch((e) => {
					console.error(
						"EventReminderWidget load fail: " + (0, T.H)(e).strErrorMsg,
					);
					return 2;
				})
				.then((e) => {
					if (e == 1 && !this.m_bLoadWasCancelled) {
						this.setState({
							bIsLoadingNotificationSettings: false,
						});
					}
				});
		}
		if (!this.props.eventModel.appid && this.props.eventModel.clanSteamID) {
			u.ac.LoadClanInfoForClanSteamID(this.props.eventModel.clanSteamID);
		}
	}
	componentWillUnmount() {
		this.m_bLoadWasCancelled = true;
	}
	ToggleMenu(e) {
		const t = p.KN.Get().BIsUserLoggedIn();
		if (t || h.TS.IN_CLIENT) {
			if (!t && h.TS.IN_CLIENT) {
				console.log(
					"EventReminderWidget: In Client: Cannot use login widget. We expect to be already logged in.",
				);
			}
			if (this.state.bIsOpen) {
				this.HideMenu();
			} else {
				this.ShowMenu();
			}
			e.stopPropagation();
			e.preventDefault();
		} else {
			(0, v.pg)(
				s.createElement(B.o0, {
					strTitle: (0, k.we)("#EventDisplay_Share_NotLoggedIn"),
					strDescription: (0, k.we)(
						"#EventDisplay_Share_NotLoggedIn_Description",
					),
					strOKButtonText: (0, k.we)("#MobileLogin_SignIn"),
					onOK: () => (0, x.vg)(),
				}),
				window,
			);
		}
	}
	ShowMenu() {
		let e = s.createElement(_j, {
			...this.props,
			fnHasReminderSet: (e) => this.BHasSomeNotificationSetting(e),
			fnHidePanel: this.HideMenu,
		});
		let t = {
			bOverlapHorizontal: true,
			bOverlapVertical: true,
			bDisablePopTop: true,
			bMatchWidth: true,
			strClassName: (0, R.A)(
				L.ReminderDialog,
				L.ReminderOptions,
				_y.contextMenu,
			),
		};
		this.m_iMenuInstance = (0, l.lX)(e, this.m_elDropDownRef.current, t);
		this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
		this.setState({
			bIsOpen: true,
		});
		d.V.RecordAppInteractionEvent(
			this.props.eventModel.appid,
			d.E.k_eReminder_Opened,
		);
	}
	HideMenu() {
		if (this.m_iMenuInstance) {
			this.m_iMenuInstance.Hide();
		}
		this.setState({
			bIsOpen: false,
		});
	}
	BHasSomeNotificationSetting(e) {
		const t = e.GID;
		return (
			(b.BHasValidatedEmail() &&
				p.KN.Get().BFollowsEventAndNotifiedBy(
					e.clanSteamID,
					t,
					p.Nh.k_ENotifyFlagByEmail,
				)) ||
			(b.BHasPushNotification() &&
				p.KN.Get().BFollowsEventAndNotifiedBy(
					e.clanSteamID,
					t,
					p.Nh.k_ENotifyFlagByPush,
				))
		);
	}
	render() {
		const e = this.props.bOnlyShowIcon && !this.state.bIsOpen;
		const t = this.BHasSomeNotificationSetting(this.props.eventModel);
		const r = (0, A.sB)();
		if (
			this.props.eventModel.startTime < r ||
			this.props.eventModel.BIsUnlistedEvent()
		) {
			return null;
		} else {
			return s.createElement(
				"div",
				{
					className: (0, R.A)({
						[L.ReminderCheckBox]: true,
						[O.ReminderCtn]: true,
						[L.IconMode]: e,
						[L.TextMode]: !e,
						ReminderSet: t,
						RemindMeWidget: true,
					}),
					onClick: this.ToggleMenu,
					ref: this.m_elDropDownRef,
				},
				t &&
					s.createElement(
						"div",
						{
							className: L.RemindCheck,
						},
						s.createElement(I.Jlk, null),
					),
				e &&
					s.createElement(
						"div",
						{
							className: L.RemindBell,
						},
						s.createElement(I.IrQ, null),
					),
				s.createElement(
					"div",
					{
						className: L.ReminderDefault,
					},
					(0, k.we)("#EventDisplay_Reminder_SetReminder"),
				),
				s.createElement("div", {
					className: L.ReminderOptions,
				}),
			);
		}
	}
};
export function y(e) {
	const { bPreviewMode: t, eventGID: r, ...n } = e;
	const i = (0, m.RR)(r);
	if (!i) {
		if (t) {
			return s.createElement(
				"div",
				{
					className: U.ErrorDiv,
				},
				(0, k.we)("#EventDidplay_Reminder_EventNotVisible", r),
			);
		} else {
			return null;
		}
	}
	const a = (0, o.sf)(h.TS.LANGUAGE);
	return s.createElement(j, {
		lang: a,
		...n,
		eventModel: i,
	});
}
function H(e) {
	return a.unix(e).utc().format("YYYYMMDD[T]HHmmss[Z]");
}
(0, n.Cg)([D.oI], j.prototype, "ToggleMenu", null);
(0, n.Cg)([D.oI], j.prototype, "ShowMenu", null);
(0, n.Cg)([D.oI], j.prototype, "HideMenu", null);
j = (0, n.Cg)([i.PA], j);
let _j = class extends s.Component {
	state = {
		bIsRequestInFlight: false,
	};
	async OnChangeFollowOrIgnore(e, t, r) {
		const { eventModel: n } = this.props;
		const i = n?.GID;
		if (i && i != o.kF) {
			this.setState({
				bIsRequestInFlight: true,
			});
			try {
				await p.KN.Get().SetFollowOrUnfollowEvent(!e, t, n.clanSteamID, i, r);
				if (e) {
					if (r === p.Nh.k_ENotifyFlagByEmail) {
						this.TrackEventAction(d.E.k_eReminder_Email);
					} else if (r === p.Nh.k_ENotifyFlagByPush) {
						this.TrackEventAction(d.E.k_eReminder_MobilePush);
					}
				}
			} catch (e) {
				(0, v.HT)(
					s.createElement(
						B.KG,
						{
							strTitle: (0, k.we)(
								t
									? "#EventDisplay_Reminder_IgnoreEvent_Error"
									: "#EventDisplay_Reminder_FollowEvent_Error",
							),
							strDescription: (0, k.we)(
								t
									? "#EventDisplay_Reminder_IgnoreEvent_ErrorDesc"
									: "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
							),
						},
						(0, T.H)(e).strErrorMsg,
					),
					window,
				);
			}
			this.setState({
				bIsRequestInFlight: false,
			});
		}
	}
	OnChangeFollowByEmail(e) {
		this.OnChangeFollowOrIgnore(e, false, p.Nh.k_ENotifyFlagByEmail);
	}
	OnChangeFollowByPush(e) {
		this.OnChangeFollowOrIgnore(e, false, p.Nh.k_ENotifyFlagByPush);
	}
	GetExternalCalendarEventTitle() {
		const { eventModel: e, lang: t } = this.props;
		const r = e.GetNameWithFallback(t);
		if (c.NK.BHasEntityNameForID(e.appid, e.clanSteamID.GetAccountID())) {
			return `${c.NK.GetEntityNameForID(e.appid, e.clanSteamID.GetAccountID())}: ${r}`;
		}
		return r;
	}
	TrackEventAction(e) {
		const { eventModel: t } = this.props;
		d.V.RecordAppInteractionEvent(t.appid, e);
	}
	GetExternalCalendarEventBody() {
		const { eventModel: e, lang: t } = this.props;
		let r = e.GetSubTitleWithLanguageFallback(t);
		r = r ? `${r}\n\n\n` : "";
		const n = e.GetSummaryWithFallback(t);
		const i = e.jsondata.bSaleEnabled
			? P.PH.k_eStoreSalePage
			: P.PH.k_eStoreView;
		return `${r}${n}\n\n${(0, P.qT)(e, i, "forceAbsolute")}`;
	}
	GetGoogleCalendarLink() {
		const { eventModel: e } = this.props;
		const t = encodeURIComponent(this.GetExternalCalendarEventTitle());
		const r = encodeURIComponent(this.GetExternalCalendarEventBody());
		const n = e.GetStartTimeAndDateUnixSeconds();
		const i = H(n);
		const a = H(e.GetEndTimeAndDateUnixSeconds() || n + N.Kp.PerHour);
		const s = `${h.TS.IN_CLIENT ? "steam://openurl_external/" : ""}https://calendar.google.com/calendar/r/eventedit?text=${t}&details=${r}&dates=${i}/${a}`;
		return (0, F.k2)(s);
	}
	GetICSDownloadLink(e) {
		const { eventModel: t, lang: r } = this.props;
		const n = t.appid
			? "app/" + t.appid
			: "group/" + t.clanSteamID.GetAccountID();
		const i = "l=" + (0, o.Lg)(r);
		return `${h.TS.STORE_BASE_URL}${(0, P.LJ)()}/download/${n}/${e}/${t.GID}?${i}`;
	}
	render() {
		const {
			eventModel: e,
			bShowStartTime: t,
			bExpandLeft: r,
			bOnlyShowIcon: n,
			fnHasReminderSet: i,
			fnHidePanel: a,
		} = this.props;
		const o = b.BHasValidatedEmail();
		const l = b.BHasPushNotification();
		const c = t && e.GetStartTimeAndDateUnixSeconds();
		return s.createElement(
			"div",
			null,
			s.createElement(
				"div",
				{
					className: (0, R.A)(
						L.ReminderCheckBox,
						n ? L.IconMode : L.TextMode,
						"RemindMeWidget",
					),
					onClick: a,
				},
				i(this.props.eventModel) &&
					s.createElement(
						"div",
						{
							className: L.RemindCheck,
						},
						s.createElement(I.Jlk, null),
					),
				n &&
					s.createElement(
						"div",
						{
							className: L.RemindBell,
						},
						s.createElement(I.IrQ, null),
					),
				s.createElement(
					"div",
					{
						className: L.ReminderDefault,
					},
					(0, k.we)("#EventDisplay_Reminder_SetReminder"),
				),
				s.createElement("div", {
					className: L.ReminderOpennedOptions,
				}),
			),
			s.createElement(
				"div",
				{
					className: (0, R.A)(
						L.FlexColumnContainer,
						L.ReminderBackground,
						r && L.ReminderExpandsLeft,
					),
				},
				this.state.bIsRequestInFlight &&
					s.createElement(E.t, {
						className: L.RpcThrobber,
						size: "xlarge",
						position: "center",
					}),
				c &&
					s.createElement(
						"div",
						{
							className: L.FullStartTime,
						},
						(0, k.PP)(
							"#EventDisplay_EventUpcoming_WithDateAndTime",
							(0, k.TW)(
								c,
								(0, N.Ct)(
									new Date(c * 1000),
									A.HD.GetTimeNowWithOverrideAsDate(),
								),
							),
							(0, w.yi)(c, true),
						),
					),
				s.createElement(
					"div",
					{
						className: L.ReminderOptionsHeader,
					},
					(0, k.we)("#EventDisplay_Reminder_GetNotification_Via"),
				),
				s.createElement(
					"div",
					{
						className: (0, R.A)(L.ReminderOption, !o && L.Unverified),
					},
					s.createElement(
						M.he,
						{
							className: L.CheckboxWrapper,
							bTopmost: true,
							toolTipContent: (0, k.we)(
								o
									? "#EventReminder_NotifyByEmail_ttip"
									: "#EventReminder_NotifyByEmail_Missing",
							),
						},
						s.createElement(S.Yh, {
							label: (0, k.we)("#EventDisplay_Reminder_ViaEmail"),
							disabled: !o,
							checked: p.KN.Get().BFollowsEventAndNotifiedBy(
								e.clanSteamID,
								e.GID,
								p.Nh.k_ENotifyFlagByEmail,
							),
							onChange: this.OnChangeFollowByEmail,
						}),
					),
					!o &&
						s.createElement(
							"div",
							{
								className: z.FlexColumnContainer,
							},
							s.createElement(
								"a",
								{
									href: h.TS.STORE_BASE_URL + "account/",
									target: h.TS.IN_CLIENT ? undefined : "_blank",
									onClick: () =>
										this.TrackEventAction(d.E.k_eReminder_EmailUnverified),
								},
								(0, k.we)("#EventReminder_NotifyByEmail_Missing_Add"),
							),
						),
				),
				s.createElement(
					"div",
					{
						className: (0, R.A)(L.ReminderOption, !l && L.Unverified),
					},
					s.createElement(
						M.he,
						{
							className: L.CheckboxWrapper,
							bTopmost: true,
							toolTipContent: (0, k.we)(
								l
									? "#EventReminder_NotifyByMobile_ttip"
									: "#EventReminder_NotifyByMobile_Missing",
							),
						},
						s.createElement(S.Yh, {
							label: (0, k.we)("#EventDisplay_Reminder_ViaMobileApp"),
							disabled: !l,
							checked: p.KN.Get().BFollowsEventAndNotifiedBy(
								e.clanSteamID,
								e.GID,
								p.Nh.k_ENotifyFlagByPush,
							),
							onChange: this.OnChangeFollowByPush,
						}),
					),
					!l &&
						s.createElement(
							"div",
							{
								className: z.FlexColumnContainer,
							},
							s.createElement(
								"a",
								{
									href: h.TS.STORE_BASE_URL + "mobile/?show=steamapp",
									target: h.TS.IN_CLIENT ? undefined : "_blank",
									onClick: () =>
										this.TrackEventAction(d.E.k_eReminder_MobilePushMissing),
								},
								(0, k.we)("#EventReminder_NotifyByMobile_Install"),
							),
						),
				),
				s.createElement(
					s.Fragment,
					null,
					s.createElement(
						"div",
						{
							className: L.ReminderOptionsHeader,
						},
						(0, k.we)("#EventDisplay_Reminder_AddToCalendar"),
					),
					s.createElement(
						"div",
						{
							className: L.ReminderCalendarOptions,
						},
						s.createElement(
							"a",
							{
								className: L.ReminderOption,
								href: this.GetICSDownloadLink("ics"),
								onClick: () =>
									this.TrackEventAction(d.E.k_eReminder_CalendarApple),
							},
							(0, k.we)("#EventDisplay_Reminder_AppleCalendar_Short"),
						),
						s.createElement(
							"a",
							{
								className: L.ReminderOption,
								target: h.TS.IN_CLIENT ? undefined : "_blank",
								href: this.GetGoogleCalendarLink(),
								onClick: () =>
									this.TrackEventAction(d.E.k_eReminder_CalendarGoogle),
							},
							(0, k.we)("#EventDisplay_Reminder_GoogleCalendar_Short"),
						),
						s.createElement(
							"a",
							{
								className: L.ReminderOption,
								href: this.GetICSDownloadLink("outlook"),
								onClick: () =>
									this.TrackEventAction(d.E.k_eReminder_CalendarOutlook),
							},
							(0, k.we)("#EventDisplay_Reminder_OutlookCalendar_Short"),
						),
					),
				),
				false,
			),
		);
	}
};
(0, n.Cg)([D.oI], _j.prototype, "OnChangeFollowByEmail", null);
(0, n.Cg)([D.oI], _j.prototype, "OnChangeFollowByPush", null);
(0, n.Cg)([D.oI], _j.prototype, "TrackEventAction", null);
_j = (0, n.Cg)([i.PA], _j);
