import {
	Localize,
	LocalizeReact,
	LocalizeDateHumanReadable,
} from "../../actual_src/utils/localization.js";
import { Seconds, IsDateSameYear } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./41230.js";
import a from "./42689.js";
import s from "./63696.js";
import o, { sf, Lg } from "./44846.js";
import l, { lX } from "./31084.js";
import c from "./84731.js";
import { RR } from "./34875.js";
import u from "./78771.js";
import d from "./70232.js";
import A, { sB } from "./12956.js";
import p from "./13665.js";
import g, { Gn, h5 } from "./89193.js";
import h, { Fd } from "./72476.js";
import C from "./83957.js";
import _y from "./24892.js";
import S from "./64608.js";
import { yi } from "./82775.js";
import B from "./10606.js";
import { pg, HT } from "./13869.js";
import I from "./50376.js";
import E from "./26853.js";
import M from "./98995.js";
import { H as H_1 } from "./16154.js";
import { A as A_1 } from "./90765.js";
import D from "./52451.js";
import { k2 } from "./53807.js";
import G from "./43088.js";
import P, { qT, LJ } from "./95020.js";
import L from "./6440.js";
import z from "./76565.js";
import { vg } from "./4816.js";
import U from "./24218.js";
const _ = C;
class f {
	constructor() {
		Gn(this);
	}
	m_bValidatedEmail = false;
	m_nMobileDeviceCount = 0;
	m_bIsLoaded = false;
	m_promise;
	m_bLoadedFromConfig = false;
	LazyInit() {
		if (!this.m_bLoadedFromConfig) {
			let e = Fd("notificationstore", "application_config");
			if (this.ValidateStoreDefault(e)) {
				h5(() => {
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
		const e = `${h.TS.STORE_BASE_URL}notification/ajaxusersettings`;
		const t = await _.get(e, {
			withCredentials: true,
		});
		if (t.data.success == 1) {
			h5(() => {
				this.m_bIsLoaded = true;
				this.m_bValidatedEmail = t.data.email_validated;
				this.m_nMobileDeviceCount = t.data.mobile_device_count;
			});
		}
		return t.data.success;
	}
}
Cg([g.sH], f.prototype, "m_bValidatedEmail", undefined);
Cg([g.sH], f.prototype, "m_nMobileDeviceCount", undefined);
let b = new f();
const O = G;
export let J = class extends s.Component {
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
					console.error(`EventReminderWidget load fail: ${H_1(e).strErrorMsg}`);
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
			pg(
				<B.o0
					strTitle={(0, Localize)("#EventDisplay_Share_NotLoggedIn")}
					strDescription={(0, Localize)(
						"#EventDisplay_Share_NotLoggedIn_Description",
					)}
					strOKButtonText={(0, Localize)("#MobileLogin_SignIn")}
					onOK={() => vg()}
				/>,
				window,
			);
		}
	}
	ShowMenu() {
		let e = (
			<_j
				{...this.props}
				fnHasReminderSet={(e) => this.BHasSomeNotificationSetting(e)}
				fnHidePanel={this.HideMenu}
			/>
		);
		let t = {
			bOverlapHorizontal: true,
			bOverlapVertical: true,
			bDisablePopTop: true,
			bMatchWidth: true,
			strClassName: A_1(L.ReminderDialog, L.ReminderOptions, _y.contextMenu),
		};
		this.m_iMenuInstance = lX(e, this.m_elDropDownRef.current, t);
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
		const e_GID = e.GID;
		return (
			(b.BHasValidatedEmail() &&
				p.KN.Get().BFollowsEventAndNotifiedBy(
					e.clanSteamID,
					e_GID,
					p.Nh.k_ENotifyFlagByEmail,
				)) ||
			(b.BHasPushNotification() &&
				p.KN.Get().BFollowsEventAndNotifiedBy(
					e.clanSteamID,
					e_GID,
					p.Nh.k_ENotifyFlagByPush,
				))
		);
	}
	render() {
		const e = this.props.bOnlyShowIcon && !this.state.bIsOpen;
		const t = this.BHasSomeNotificationSetting(this.props.eventModel);
		const r = sB();
		if (
			this.props.eventModel.startTime < r ||
			this.props.eventModel.BIsUnlistedEvent()
		) {
			return null;
		} else {
			return (
				<div
					className={A_1({
						[L.ReminderCheckBox]: true,
						[O.ReminderCtn]: true,
						[L.IconMode]: e,
						[L.TextMode]: !e,
						ReminderSet: t,
						RemindMeWidget: true,
					})}
					onClick={this.ToggleMenu}
					ref={this.m_elDropDownRef}
				>
					{t && (
						<div className={L.RemindCheck}>
							<I.Jlk />
						</div>
					)}
					{e && (
						<div className={L.RemindBell}>
							<I.IrQ />
						</div>
					)}
					<div className={L.ReminderDefault}>
						{(0, Localize)("#EventDisplay_Reminder_SetReminder")}
					</div>
					<div className={L.ReminderOptions} />
				</div>
			);
		}
	}
};
export function y(e) {
	const { bPreviewMode, eventGID, ...n } = e;
	const i = RR(eventGID);
	if (!i) {
		if (bPreviewMode) {
			return (
				<div className={U.ErrorDiv}>
					{(0, Localize)("#EventDidplay_Reminder_EventNotVisible", eventGID)}
				</div>
			);
		} else {
			return null;
		}
	}
	const a = sf(h.TS.LANGUAGE);
	return <J lang={a} {...n} eventModel={i} />;
}
function H(e) {
	return a.unix(e).utc().format("YYYYMMDD[T]HHmmss[Z]");
}
Cg([D.oI], J.prototype, "ToggleMenu", null);
Cg([D.oI], J.prototype, "ShowMenu", null);
Cg([D.oI], J.prototype, "HideMenu", null);
J = Cg([i.PA], J);
let _j = class extends s.Component {
	state = {
		bIsRequestInFlight: false,
	};
	async OnChangeFollowOrIgnore(e, t, r) {
		const { eventModel } = this.props;
		const i = eventModel?.GID;
		if (i && i != o.kF) {
			this.setState({
				bIsRequestInFlight: true,
			});
			try {
				await p.KN.Get().SetFollowOrUnfollowEvent(
					!e,
					t,
					eventModel.clanSteamID,
					i,
					r,
				);
				if (e) {
					if (r === p.Nh.k_ENotifyFlagByEmail) {
						this.TrackEventAction(d.E.k_eReminder_Email);
					} else if (r === p.Nh.k_ENotifyFlagByPush) {
						this.TrackEventAction(d.E.k_eReminder_MobilePush);
					}
				}
			} catch (e) {
				HT(
					<B.KG
						strTitle={(0, Localize)(
							t
								? "#EventDisplay_Reminder_IgnoreEvent_Error"
								: "#EventDisplay_Reminder_FollowEvent_Error",
						)}
						strDescription={(0, Localize)(
							t
								? "#EventDisplay_Reminder_IgnoreEvent_ErrorDesc"
								: "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
						)}
					>
						{H_1(e).strErrorMsg}
					</B.KG>,
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
		const { eventModel, lang } = this.props;
		const r = eventModel.GetNameWithFallback(lang);
		if (
			c.NK.BHasEntityNameForID(
				eventModel.appid,
				eventModel.clanSteamID.GetAccountID(),
			)
		) {
			return `${c.NK.GetEntityNameForID(
				eventModel.appid,
				eventModel.clanSteamID.GetAccountID(),
			)}: ${r}`;
		}
		return r;
	}
	TrackEventAction(e) {
		const { eventModel } = this.props;
		d.V.RecordAppInteractionEvent(eventModel.appid, e);
	}
	GetExternalCalendarEventBody() {
		const { eventModel, lang } = this.props;
		let r = eventModel.GetSubTitleWithLanguageFallback(lang);
		r = r ? `${r}\n\n\n` : "";
		const n = eventModel.GetSummaryWithFallback(lang);
		const i = eventModel.jsondata.bSaleEnabled
			? P.PH.k_eStoreSalePage
			: P.PH.k_eStoreView;
		return `${r}${n}\n\n${qT(eventModel, i, "forceAbsolute")}`;
	}
	GetGoogleCalendarLink() {
		const { eventModel } = this.props;
		const t = encodeURIComponent(this.GetExternalCalendarEventTitle());
		const r = encodeURIComponent(this.GetExternalCalendarEventBody());
		const n = eventModel.GetStartTimeAndDateUnixSeconds();
		const i = H(n);
		const a = H(
			eventModel.GetEndTimeAndDateUnixSeconds() || n + Seconds.PerHour,
		);
		const s = `${
			h.TS.IN_CLIENT ? "steam://openurl_external/" : ""
		}https://calendar.google.com/calendar/r/eventedit?text=${t}&details=${r}&dates=${i}/${a}`;
		return k2(s);
	}
	GetICSDownloadLink(e) {
		const { eventModel, lang } = this.props;
		const n = eventModel.appid
			? `app/${eventModel.appid}`
			: `group/${eventModel.clanSteamID.GetAccountID()}`;
		const i = `l=${Lg(lang)}`;
		return `${h.TS.STORE_BASE_URL}${LJ()}/download/${n}/${e}/${
			eventModel.GID
		}?${i}`;
	}
	render() {
		const {
			eventModel,
			bShowStartTime,
			bExpandLeft,
			bOnlyShowIcon,
			fnHasReminderSet,
			fnHidePanel,
		} = this.props;
		const o = b.BHasValidatedEmail();
		const l = b.BHasPushNotification();
		const c = bShowStartTime && eventModel.GetStartTimeAndDateUnixSeconds();
		return (
			<div>
				<div
					className={A_1(
						L.ReminderCheckBox,
						bOnlyShowIcon ? L.IconMode : L.TextMode,
						"RemindMeWidget",
					)}
					onClick={fnHidePanel}
				>
					{fnHasReminderSet(this.props.eventModel) && (
						<div className={L.RemindCheck}>
							<I.Jlk />
						</div>
					)}
					{bOnlyShowIcon && (
						<div className={L.RemindBell}>
							<I.IrQ />
						</div>
					)}
					<div className={L.ReminderDefault}>
						{(0, Localize)("#EventDisplay_Reminder_SetReminder")}
					</div>
					<div className={L.ReminderOpennedOptions} />
				</div>
				<div
					className={A_1(
						L.FlexColumnContainer,
						L.ReminderBackground,
						bExpandLeft && L.ReminderExpandsLeft,
					)}
				>
					{this.state.bIsRequestInFlight && (
						<E.t className={L.RpcThrobber} size="xlarge" position="center" />
					)}
					{c && (
						<div className={L.FullStartTime}>
							{LocalizeReact(
								"#EventDisplay_EventUpcoming_WithDateAndTime",
								LocalizeDateHumanReadable(
									c,
									IsDateSameYear(
										new Date(c * 1000),
										A.HD.GetTimeNowWithOverrideAsDate(),
									),
								),
								yi(c, true),
							)}
						</div>
					)}
					<div className={L.ReminderOptionsHeader}>
						{(0, Localize)("#EventDisplay_Reminder_GetNotification_Via")}
					</div>
					<div className={A_1(L.ReminderOption, !o && L.Unverified)}>
						<M.he
							className={L.CheckboxWrapper}
							bTopmost
							toolTipContent={(0, Localize)(
								o
									? "#EventReminder_NotifyByEmail_ttip"
									: "#EventReminder_NotifyByEmail_Missing",
							)}
						>
							<S.Yh
								label={(0, Localize)("#EventDisplay_Reminder_ViaEmail")}
								disabled={!o}
								checked={p.KN.Get().BFollowsEventAndNotifiedBy(
									eventModel.clanSteamID,
									eventModel.GID,
									p.Nh.k_ENotifyFlagByEmail,
								)}
								onChange={this.OnChangeFollowByEmail}
							/>
						</M.he>
						{!o && (
							<div className={z.FlexColumnContainer}>
								<a
									href={`${h.TS.STORE_BASE_URL}account/`}
									target={h.TS.IN_CLIENT || "_blank"}
									onClick={() =>
										this.TrackEventAction(d.E.k_eReminder_EmailUnverified)
									}
								>
									{(0, Localize)("#EventReminder_NotifyByEmail_Missing_Add")}
								</a>
							</div>
						)}
					</div>
					<div className={A_1(L.ReminderOption, !l && L.Unverified)}>
						<M.he
							className={L.CheckboxWrapper}
							bTopmost
							toolTipContent={(0, Localize)(
								l
									? "#EventReminder_NotifyByMobile_ttip"
									: "#EventReminder_NotifyByMobile_Missing",
							)}
						>
							<S.Yh
								label={(0, Localize)("#EventDisplay_Reminder_ViaMobileApp")}
								disabled={!l}
								checked={p.KN.Get().BFollowsEventAndNotifiedBy(
									eventModel.clanSteamID,
									eventModel.GID,
									p.Nh.k_ENotifyFlagByPush,
								)}
								onChange={this.OnChangeFollowByPush}
							/>
						</M.he>
						{!l && (
							<div className={z.FlexColumnContainer}>
								<a
									href={`${h.TS.STORE_BASE_URL}mobile/?show=steamapp`}
									target={h.TS.IN_CLIENT || "_blank"}
									onClick={() =>
										this.TrackEventAction(d.E.k_eReminder_MobilePushMissing)
									}
								>
									{(0, Localize)("#EventReminder_NotifyByMobile_Install")}
								</a>
							</div>
						)}
					</div>
					<>
						<div className={L.ReminderOptionsHeader}>
							{(0, Localize)("#EventDisplay_Reminder_AddToCalendar")}
						</div>
						<div className={L.ReminderCalendarOptions}>
							<a
								className={L.ReminderOption}
								href={this.GetICSDownloadLink("ics")}
								onClick={() =>
									this.TrackEventAction(d.E.k_eReminder_CalendarApple)
								}
							>
								{(0, Localize)("#EventDisplay_Reminder_AppleCalendar_Short")}
							</a>
							<a
								className={L.ReminderOption}
								target={h.TS.IN_CLIENT || "_blank"}
								href={this.GetGoogleCalendarLink()}
								onClick={() =>
									this.TrackEventAction(d.E.k_eReminder_CalendarGoogle)
								}
							>
								{(0, Localize)("#EventDisplay_Reminder_GoogleCalendar_Short")}
							</a>
							<a
								className={L.ReminderOption}
								href={this.GetICSDownloadLink("outlook")}
								onClick={() =>
									this.TrackEventAction(d.E.k_eReminder_CalendarOutlook)
								}
							>
								{(0, Localize)("#EventDisplay_Reminder_OutlookCalendar_Short")}
							</a>
						</div>
					</>
				</div>
			</div>
		);
	}
};
Cg([D.oI], _j.prototype, "OnChangeFollowByEmail", null);
Cg([D.oI], _j.prototype, "OnChangeFollowByPush", null);
Cg([D.oI], _j.prototype, "TrackEventAction", null);
_j = Cg([i.PA], _j);
