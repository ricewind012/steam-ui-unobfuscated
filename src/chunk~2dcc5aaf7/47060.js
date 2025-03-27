import {
	LocalizeCalendarTime,
	LocalizeRTimeToHourAndMinutes,
	LocalizeRtime32ToShorterDate,
} from "../../actual_src/utils/localization/datetime.js";

import {
	Localize,
	LocalizeReact,
	BLocStringExists,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { Seconds } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./64608.js";
import s, { PA } from "./41230.js";
import o, { q3 } from "./90095.js";
import l from "./79671.js";
import c from "./96593.js";
import m, { qw } from "./89748.js";
import u, { Qn } from "./72476.js";
import d from "./44846.js";
import A, { T as T_1 } from "./78057.js";
import p, { zM, bm, v_ as v_1, vO, JD, MD, vH, eC, dZ } from "./97893.js";
import g, { oA } from "./5640.js";
import h, { t0, VI } from "./34792.js";
import C from "./87935.js";
import _ from "./30496.js";
import b from "./52451.js";
import y, { dm } from "./34428.js";
import w from "./98995.js";
import { A as A_1 } from "./90765.js";
import v from "./35488.js";
import I from "./88696.js";
import E from "./56262.js";
import M, { w as w_1 } from "./49455.js";
import T from "./69164.js";
import R, { ZC } from "./39147.js";
import k from "./91486.js";
import D from "./92031.js";
import { lX } from "./31084.js";
import F from "./88750.js";
import G, { jy, zq } from "./5808.js";
import O from "./20797.js";
import P from "./91152.js";
import L from "./20893.js";
import z from "./39941.js";
import { W6 } from "./49519.js";
import U, { tf, KV } from "./18057.js";
import W from "./4690.js";
import V from "./66830.js";
import q, { br } from "./18869.js";
import { Kp } from "./70239.js";
const H = V;
function Y(e) {
	SteamClient.Downloads.SuspendLanPeerContent(true);
}
function K(e) {
	const t = zM();
	if (t.lan_peer_hostname.length == 0) {
		return null;
	} else {
		return (
			<div className={A_1(H.LocalNetworkTransferBar)}>
				<div className={A_1(H.LocalNetworkTransferSVG)}>
					{t.update_is_upload ? (
						<v.LanPeerContentSend />
					) : (
						<v.LanPeerContentReceive />
					)}
				</div>
				<div className={A_1(H.LocalNetworkTransferText)}>
					{(0, Localize)(
						t.update_is_upload
							? "#Downloads_LocalNetworkTransfer_Upload"
							: "#Downloads_LocalNetworkTransfer_Download",
					)}
					<span className={H.LocalNetworkTransferHostName}>
						{" "}
						{t.lan_peer_hostname}{" "}
					</span>
				</div>
				<w.he
					className={A_1(H.ContentTypes, "StopTransferButton")}
					toolTipContent={(0, Localize)(
						"#Downloads_LocalNetworkTransfer_Stop_ttip",
					)}
					direction="top"
				>
					<a.$n
						className={A_1(H.LocalNetworkTransferStop, "BarButton")}
						onClick={Y}
					>
						<div className={A_1(H.LocalNetworkTransferStopSVG)}>
							<v.Close />
						</div>
						{(0, Localize)("#Downloads_LocalNetworkTransfer_Stop")}
					</a.$n>
				</w.he>
			</div>
		);
	}
}
function X(e) {
	return (e.active || e.queue_index == 0) && p.hj.DownloadOverview;
}
export function eo(e) {
	if (g.jR.isParentalLocked) {
		return;
	}
	GetOwningWindowForEvent(e).location.href = "steam://settings/downloads";
	e.stopPropagation();
}
const $ = () => {
	const e = t0();
	const t = oA();
	const e_vecValidAutoUpdateRestrictHours = e.vecValidAutoUpdateRestrictHours;
	const [n] = VI("restrict_auto_updates_start");
	const [a] = VI("restrict_auto_updates_end");
	const [s] = VI("restrict_auto_updates");
	if (!s || (n == 0 && a == 0)) {
		return (
			<div className={H.AutoUpdate}>
				<div
					className={A_1(H.AutoUpdateHours, H.NoHours, t && H.ParentalLocked)}
					onClick={eo}
				>
					{(0, Localize)("#Downloads_AutoUpdates_Enabled")}
				</div>
			</div>
		);
	} else {
		return (
			<div className={H.AutoUpdate}>
				<div
					className={A_1(H.AutoUpdateHours, t && H.ParentalLocked)}
					onClick={eo}
				>
					<span>
						{LocalizeReact(
							"#Downloads_ScheduleUpdatesFor",
							<span className={H.UpdateHours}>
								{(0, Localize)(
									"#Downloads_ScheduledUpdateTimes",
									e_vecValidAutoUpdateRestrictHours[n].strDisplay,
									e_vecValidAutoUpdateRestrictHours[a].strDisplay,
								)}
							</span>,
						)}
					</span>
				</div>
			</div>
		);
	}
};
let ee;
function te(e, t, r) {
	const n = e.active && r.update_state == "Downloading";
	let ee_k_EUnknown = ee.k_EUnknown;
	const a = t && t.GetPerClientData("local");
	const s = a?.update_available_but_disabled_by_app;
	if (e.update_result != 0 && e.update_result != 4 && e.update_result != 2) {
		ee_k_EUnknown = ee.k_EError;
	} else if (e.queue_index == -1 && e.deferred_time != 0) {
		ee_k_EUnknown = ee.k_EScheduled;
	} else if (s) {
		ee_k_EUnknown = ee.k_EUpdatesDisabledByApp;
	} else if (e.paused) {
		const e = A.H.GetAppDetails(t.appid);
		const r = e && e.eAutoUpdateValue;
		ee_k_EUnknown =
			r && r == 1 ? ee.k_EUpdatesDisabledByUser : ee.k_ERemovedFromQueue;
	} else if (e.active) {
		ee_k_EUnknown = n ? ee.k_EActiveDownloading : ee.k_EActive;
	} else if (e.completed && e.completed_time != 0) {
		ee_k_EUnknown = ee.k_ECompleted;
	} else if (e.queue_index == 1) {
		ee_k_EUnknown = ee.k_EQueuedNext;
	} else if (e.queue_index >= 0) {
		ee_k_EUnknown = ee.k_EQueued;
		if (e.queue_index == 0 && r.paused) {
			ee_k_EUnknown = ee.k_EActivePaused;
		}
	} else {
		const e = A.H.GetAppDetails(t.appid);
		const r = e && e.eAutoUpdateValue;
		if (r && r == 1) {
			ee_k_EUnknown = ee.k_EUpdatesDisabledByUser;
		}
	}
	return ee_k_EUnknown;
}
((e) => {
	e[(e.k_EUnknown = 0)] = "k_EUnknown";
	e[(e.k_EActive = 1)] = "k_EActive";
	e[(e.k_EActiveDownloading = 2)] = "k_EActiveDownloading";
	e[(e.k_EActivePaused = 3)] = "k_EActivePaused";
	e[(e.k_EQueued = 4)] = "k_EQueued";
	e[(e.k_EQueuedNext = 5)] = "k_EQueuedNext";
	e[(e.k_EScheduled = 6)] = "k_EScheduled";
	e[(e.k_ERemovedFromQueue = 7)] = "k_ERemovedFromQueue";
	e[(e.k_EError = 8)] = "k_EError";
	e[(e.k_EUpdatesDisabledByUser = 9)] = "k_EUpdatesDisabledByUser";
	e[(e.k_EUpdatesDisabledByApp = 10)] = "k_EUpdatesDisabledByApp";
	e[(e.k_ECompleted = 11)] = "k_ECompleted";
})((ee ||= {}));
const re = {
	None: {
		network: false,
		disk: false,
	},
	Starting: {
		network: false,
		disk: false,
	},
	Validating: {
		network: false,
		disk: "Validating",
	},
	Preallocating: {
		network: "Downloading",
		disk: "Preallocating",
	},
	Downloading: {
		network: "Downloading",
		disk: "Installing",
	},
	Updating: {
		network: "Downloading",
		disk: "Updating",
	},
	Preloading: {
		network: "Preloading",
		disk: false,
	},
	Patching: {
		network: "Downloading",
		disk: "Patching",
	},
	Unpacking: {
		network: "Downloading",
		disk: "Unpacking",
	},
	Installing: {
		network: "Downloading",
		disk: "Installing",
	},
	Verifying: {
		network: "Downloading",
		disk: "Verifying",
	},
	Finalizing: {
		network: false,
		disk: false,
	},
	Stopping: {
		network: false,
		disk: false,
	},
	Transferring: {
		network: "Transferring",
		disk: "Transferring",
	},
	Hosting: {
		network: false,
		disk: false,
	},
};
const Ne_1 = (e) =>
	e.bytesCurrent > 0 ? (
		<>
			<span className={H.Progress}>
				{"\xA0"}
				{e.nPercentComplete}%
			</span>
			<E.Mm
				className={A_1(H.ProgressBar, H.NotActive)}
				progressPct={e.nPercentComplete}
			/>
		</>
	) : null;
function Ie_1(e) {
	const { className, label, nPercent, children } = e;
	return (
		<div className={H.ActiveItemProgressBar}>
			<div className={H.Status}>
				<div className={H.Label}>{label}</div>
				{children}
			</div>
			<E.Mm className={A_1(H.ProgressBar, className)} progressPct={nPercent} />
		</div>
	);
}
const Ae_1 = PA((e) => {
	const { item, app, section, index, className, ...o } = e;
	const l = zM();
	const c = re[l.update_state].network;
	const m = re[l.update_state].disk;
	let u =
		re[l.update_state].network &&
		(0, Localize)(`#Downloads_DetailedState_${re[l.update_state].network}`);
	let d =
		re[l.update_state].disk &&
		(0, Localize)(`#Downloads_DetailedState_${re[l.update_state].disk}`);
	if (u && bm(l) == v_1(l)) {
		const e = `#Downloads_DetailedState_${re[l.update_state].network}_Complete`;
		if (BLocStringExists(e)) {
			u = (0, Localize)(e);
		}
	}
	const [A, g] = vO(l);
	return (
		<div className={A_1(H.SectionItemStatus, className)} {...o}>
			{!c && !m && (
				<div className={A_1(H.SectionItemStatusLine, H.Downloading)}>
					<div className={H.State}>
						{(0, Localize)(`#Downloads_DetailedState_${l.update_state}`)}
					</div>
				</div>
			)}
			{(c || m) && (
				<div className={H.ProgressBars}>
					{c && v_1(l) > 0 && (
						<Ie_1 className={H.Network} label={u} nPercent={JD(l)}>
							<Le
								currentBytes={bm(l)}
								totalBytes={v_1(l)}
								active
								label={<v.Download className={H.Icon} />}
							/>
						</Ie_1>
					)}
					{m && (
						<Ie_1 className={H.Disk} label={d} nPercent={MD(l)}>
							<div className={H.Percentage}>{MD(l)}%</div>
						</Ie_1>
					)}
				</div>
			)}
		</div>
	);
});
const Se_1 = PA((e) => {
	const { item, app, section, index, className, ...o } = e;
	const l = te(item, app, X(item));
	if (l == ee.k_EActive || l == ee.k_EActiveDownloading) {
		return <Ae_1 {...e} />;
	}
	const [c, m] = vH(item);
	const u = eC(item);
	return (
		<div className={A_1(H.SectionItemStatus, className)} {...o}>
			{l == ee.k_EError && (
				<div className={A_1(H.State, H.Error)}>
					<w.he
						className={A_1(H.ErrorDetails)}
						direction="bottom"
						toolTipContent={item.update_error}
						bDisabled={item.update_error.length == 0}
					>
						{(0, Localize)(`#Steam_AppUpdateError_${item.update_result}`)}
					</w.he>
				</div>
			)}
			{(l == ee.k_EScheduled ||
				(l == ee.k_EError && item.deferred_time > 0)) && (
				<div className={H.ScheduledTime}>
					{(0, Localize)(
						"#Downloads_ScheduledFor",
						`${LocalizeCalendarTime(item.deferred_time, {
							bGranularFutureTime: true,
							bForce24HourClock: h.rV.friendSettings.b24HourClock,
						})} ${LocalizeRTimeToHourAndMinutes(item.deferred_time, {
							bForce24HourClock: h.rV.friendSettings.b24HourClock,
						})}`,
					)}
				</div>
			)}
			{l == ee.k_ERemovedFromQueue && (
				<div className={A_1(H.State, H.Paused)}>
					<Ne_1 bytesCurrent={c} nPercentComplete={u} />
				</div>
			)}
			{l == ee.k_EActivePaused && (
				<div className={H.State}>
					<span className={A_1(H.Paused, c > 0 && H.InProgress)}>
						{(0, Localize)("#Downloads_State_Paused")}
					</span>
					<Ne_1 bytesCurrent={c} nPercentComplete={u} />
				</div>
			)}
			{l == ee.k_ECompleted && (
				<div className={H.CompletedTime}>
					{(0, Localize)(
						"#Downloads_DownloadFinished",
						`${LocalizeRtime32ToShorterDate(
							item.completed_time,
						)} ${LocalizeRTimeToHourAndMinutes(item.completed_time, {
							bForce24HourClock: h.rV.friendSettings.b24HourClock,
						})}`,
					)}
				</div>
			)}
			{section != Te.k_EDownloadSection_Active && l == ee.k_EQueued && (
				<div className={H.State}>
					<Ne_1 bytesCurrent={c} nPercentComplete={u} />
				</div>
			)}
			{l == ee.k_EQueuedNext && (
				<div className={H.State}>
					<span className={A_1(H.Queued, c > 0 && H.InProgress)}>
						{(0, Localize)("#Downloads_State_UpNext")}
					</span>
					<Ne_1 bytesCurrent={c} nPercentComplete={u} />
				</div>
			)}
			{l == ee.k_EUpdatesDisabledByUser && (
				<div className={H.SectionItemStatusLine}>
					<Ve app={app} />
				</div>
			)}
			{l == ee.k_EUpdatesDisabledByApp && (
				<div className={H.State}>
					{(0, Localize)("#Downloads_State_UpdatesDiabledByApp")}
				</div>
			)}
		</div>
	);
});
class Oe_1 extends i.Component {
	SuppressContextMenu(e) {
		if (!e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	render() {
		const {
			item,
			app,
			index,
			section,
			className,
			buttonData,
			bShowRemoveButton,
			bShowPlayButton,
			onRemoveFromDownloadList,
			children,
			...d
		} = this.props;
		return (
			<div
				className={A_1(
					H.SectionItemButtons,
					bShowPlayButton && H.AvailableForPlay,
					className,
				)}
				{...d}
			>
				<div className={H.Buttons}>
					{buttonData && buttonData.icon && !bShowPlayButton && (
						<w.he
							className={A_1(H.ButtonWrapper, H.Left, buttonData.wrapperClass)}
							toolTipContent={(0, Localize)(buttonData.toolTip)}
							direction="top"
						>
							<a.$n
								className={A_1(H.Button, buttonData.className)}
								onContextMenu={this.SuppressContextMenu}
								onClick={buttonData.onClick}
							>
								{buttonData.icon}
							</a.$n>
						</w.he>
					)}
					{!buttonData && !bShowPlayButton && (
						<div className={A_1(H.ButtonWrapper, H.Left)} />
					)}
					{bShowPlayButton && section == Te.k_EDownloadSection_Completed && (
						<O.aV
							className={H.PlayButton}
							overview={app}
							buttonStyle="short"
							bShowStreamingSelector={false}
						/>
					)}
					{bShowRemoveButton && (
						<w.he
							className={A_1(
								H.ButtonWrapper,
								H.Right,
								H.RemoveFromQueueWrapper,
							)}
							toolTipContent={(0, Localize)(
								item.completed
									? "#Downloads_RemoveFromList_Tooltip"
									: "#Downloads_RemoveFromQueue_Tooltip",
							)}
							direction="top"
						>
							<a.$n
								className={A_1(H.Button, H.RemoveFromQueue)}
								onContextMenu={this.SuppressContextMenu}
								onClick={this.props.onRemoveFromDownloadList}
							>
								<v.Close />
							</a.$n>
						</w.he>
					)}
					{!bShowRemoveButton && (
						<div className={A_1(H.ButtonWrapper, H.Right)} />
					)}
				</div>
			</div>
		);
	}
}
function Le(e) {
	const {
		currentBytes = 0,
		totalBytes = 0,
		active,
		label,
		digitsAfterDecimal = 1,
	} = e;
	if (currentBytes == 0 && totalBytes == 0) {
		return null;
	} else {
		return (
			<div className={A_1(H.Stat, H.ProgressDetails)}>
				{!active && label && <div className={H.Label}>{label}</div>}
				{currentBytes != 0 &&
					LocalizeReact(
						"#Downloads_DownloadedBytesInProgress",
						<span className={A_1(H.Value, H.InProgress, active && H.Active)}>
							{dm(currentBytes, {
								nDigitsAfterDecimal: digitsAfterDecimal,
								nMinimumDigitsAfterDecimal: digitsAfterDecimal,
							})}
						</span>,
						<span className={A_1(H.Value, H.Denominator)}>
							{dm(totalBytes, {
								nDigitsAfterDecimal: digitsAfterDecimal,
								nMinimumDigitsAfterDecimal: digitsAfterDecimal,
							})}
						</span>,
					)}
				{currentBytes == 0 &&
					LocalizeReact(
						"#Downloads_TotalBytes",
						<span className={H.Value}>
							{dm(totalBytes, {
								nDigitsAfterDecimal: digitsAfterDecimal,
								nMinimumDigitsAfterDecimal: digitsAfterDecimal,
							})}
						</span>,
					)}
				{active && label && <div className={H.Label}>{label}</div>}
			</div>
		);
	}
}
const Ce_1 = (e) => (
	<div className={A_1(H.ContentType, (e.active || e.completed) && H.Highlight)}>
		{(!e.replaceIconWithStatus || (!e.active && !e.completed)) && e.elIcon}
		{e.replaceIconWithStatus && e.active && (
			<v.Spinner className={A_1(H.Icon, H.Status)} />
		)}
		{e.replaceIconWithStatus && e.completed && (
			<v.Checkmark className={A_1(H.Icon, H.Status, H.Check)} />
		)}
		{e.includeText && (
			<span className={H.Text}>
				{(0, Localize)(e.strToken)}
				{e.extraNameContent}
			</span>
		)}
		{!e.replaceIconWithStatus && e.active && (
			<v.Spinner className={A_1(H.Icon, H.Status)} />
		)}
		{!e.replaceIconWithStatus && e.completed && (
			<v.Checkmark className={A_1(H.Icon, H.Status, H.Check)} />
		)}
	</div>
);
const Me_1 = (e) => (
	<w.t1 className={H.ContentTypeTooltip}>
		<div className={H.Title}>
			{(0, Localize)("#Downloads_ContentType_Title")}
		</div>
		{e.rgIcons.map((e) => (
			<Ce_1 key={e.strToken} {...e} includeText />
		))}
	</w.t1>
);
const Ue = (e) => (
	<>
		{e.rgIcons.map((e) => (
			<Ce_1 key={e.strToken} {...e} includeText replaceIconWithStatus />
		))}
	</>
);
function De_1(e) {
	const t = Kp(e.appid, e.publishedfileid);
	if (t.isLoading || t.isLoadingError || t.isLoadingError || !t.isSuccess) {
		return null;
	} else if (t.data?.title && t.data.title.length != 0) {
		return (
			<span>
				{" - "}
				{t.data.title}
			</span>
		);
	} else {
		return null;
	}
}
const Ae = (e) => {
	const t = Qn();
	let r = [];
	let n = true;
	const a = e.item.appid == e.overview.update_appid;
	const s = {
		elIcon: <v.Inventory className={H.Icon} />,
		strToken: e.app.BIsApplicationOrTool()
			? "#Downloads_ContentType_AppContent"
			: "#Downloads_ContentType_Content",
		active: a && !e.overview.update_is_shader && !e.overview.update_is_workshop,
		completed:
			e.item.update_type_info[d.$6.k_EAppUpdateContentType_Content].completed,
	};
	const o = {
		elIcon: <v.Workshop className={H.Icon} />,
		strToken: "#Downloads_ContentType_Workshop",
		active: a && e.overview.update_is_workshop,
		completed:
			e.item.update_type_info[d.$6.k_EAppUpdateContentType_Workshop].completed,
	};
	const l = {
		elIcon: <v.Shader className={H.Icon} />,
		strToken: "#Downloads_ContentType_Shader",
		active: a && e.overview.update_is_shader,
		completed:
			e.item.update_type_info[d.$6.k_EAppUpdateContentType_Shader].completed,
	};
	if (e.item.update_type_info[d.$6.k_EAppUpdateContentType_Shader].has_update) {
		r.push(l);
		n = false;
	}
	if (
		e.item.update_type_info[d.$6.k_EAppUpdateContentType_Content].has_update
	) {
		r.push(s);
	}
	if (
		e.item.update_type_info[d.$6.k_EAppUpdateContentType_Workshop].has_update
	) {
		if (e.overview.update_publishedfileid?.length != 0) {
			o.extraNameContent = (
				<De_1
					appid={e.item.appid}
					publishedfileid={e.overview.update_publishedfileid}
				/>
			);
		}
		r.push(o);
		n = false;
	}
	const c = t || e.alwaysExpand;
	if (!n && r.length > 0) {
		return (
			<w.m9
				className={A_1(H.ContentTypes, c && H.Expanded)}
				toolTipContent={<Me_1 rgIcons={r} />}
				direction="top"
			>
				{!c && <v.Information className={H.Icon} />}
				{c && <Ue rgIcons={r} />}
			</w.m9>
		);
	} else {
		return null;
	}
};
const Pe_1 = (e) => {
	let t;
	return (
		<>
			<span className={H.Name}>{e.app.display_name}</span>
			{t}
		</>
	);
};
function Ge_1(e) {
	const { overview } = e;
	const r = oA();
	const [n] = VI("download_throttle_rate");
	if (!n || overview.lan_peer_hostname.length) {
		return <div className={A_1(H.Throttle, H.Empty)}>{"\xA0"}</div>;
	} else {
		return (
			<div
				className={A_1(
					H.Throttle,
					overview.throttling_suspended && H.Suspended,
					r && H.ParentalLocked,
				)}
				onClick={eo}
			>
				{(0, Localize)("#Downloads_Throttle")}
				{"\xA0"}
				<span className={H.ThrottleValue}>{ZC((n * 1000) / 8)}</span>
				{overview.throttling_suspended && (
					<span className={H.Suspended}>
						{"\xA0("}
						{(0, Localize)("#Downloads_ThrottleSuspended")})
					</span>
				)}
			</div>
		);
	}
}
const He = PA((e) => {
	const { item } = e;
	const { data } = dZ(item);
	if (data && data.length) {
		const e = data?.length && data[0].clan_event_gid;
		return (
			<z.N_ className={H.PatchNotes} to={tf(U.BV.Downloads(), item.appid, e)}>
				<v.Scratchpad className={H.Icon} />
				<div className={H.Text}>{(0, Localize)("#Downloads_PatchNotes")}</div>
			</z.N_>
		);
	}
	return null;
});
const Ce = (e) => {
	const { item, app, index, section, autoFocus, ...o } = e;
	const c = !item.completed;
	const m = W6();
	const d = Qn();
	const A = br();
	return (
		<l.sx
			key={`Download_${app.appid}`}
			draggableId={String(app.appid)}
			index={index}
			isDragDisabled={!c}
			{...o}
		>
			{(t, r) => (
				<_e
					{...e}
					provided={t}
					snapshot={r}
					history={m}
					autoFocus={autoFocus}
					bInGamepadUI={d}
					navigator={A}
				/>
			)}
		</l.sx>
	);
};
const _e = PA((e) => {
	const { provided, snapshot, history, navigator, bInGamepadUI, ...o } = e;
	const { item, app, index, section, autoFocus, onFocus, onBlur, ...C } = o;
	const [_, set] = i.useState(false);
	const l_appid = item.appid;
	T_1(app.appid);
	const y = i.useCallback(
		(e) => {
			SteamClient.Downloads.ResumeAppUpdate(l_appid);
			if (e) {
				e.stopPropagation();
			}
		},
		[l_appid],
	);
	i.useCallback(
		(e) => {
			SteamClient.Downloads.QueueAppUpdate(l_appid);
			if (e) {
				e.stopPropagation();
			}
		},
		[l_appid],
	);
	const w = i.useCallback(
		(e) => {
			Ie(item);
			if (e) {
				e.stopPropagation();
			}
		},
		[item],
	);
	const I = i.useCallback((e) => {
		SteamClient.Downloads.EnableAllDownloads(e);
	}, []);
	const E = i.useCallback(
		(e) => {
			const t = p.hj.DownloadOverview.paused;
			I(t);
			if (e) {
				e.stopPropagation();
			}
		},
		[I],
	);
	const M = i.useCallback(
		(e) => {
			navigator.App(l_appid);
			if (e) {
				e.stopPropagation();
			}
		},
		[navigator, l_appid],
	);
	const R = i.useCallback(
		(e) => {
			const t = GetOwningWindowForEvent(e);
			jy("Play", app, "local", 1001, t)();
			if (e) {
				e.stopPropagation();
			}
		},
		[app],
	);
	const k = i.useCallback(() => {
		const e = X(item);
		const t = te(item, app, e);
		let r;
		let n =
			!bInGamepadUI &&
			section == Te.k_EDownloadSection_Completed &&
			app.display_status == 11;
		let a =
			section != Te.k_EDownloadSection_NotQueued &&
			t != ee.k_EActive &&
			t != ee.k_EActiveDownloading;
		if (t == ee.k_EUpdatesDisabledByApp) {
			n = false;
			a = false;
			r = null;
		} else if (section != Te.k_EDownloadSection_Active || e.paused) {
			if (section == Te.k_EDownloadSection_Active && e.paused) {
				r = {
					onClick: E,
					wrapperClass: H.ResumeWrapper,
					className: H.Resume,
					toolTip: "#Downloads_Resume_Tooltip",
					icon: <v.Play />,
				};
			} else if (
				section == Te.k_EDownloadSection_Queued ||
				section == Te.k_EDownloadSection_Scheduled ||
				section == Te.k_EDownloadSection_Scheduled ||
				section == Te.k_EDownloadSection_NotQueued
			) {
				r = {
					onClick: y,
					wrapperClass: H.MoveToTopWrapper,
					className: H.MoveToTop,
					toolTip:
						t == ee.k_EError
							? "#Downloads_Retry_Tooltip"
							: "#Downloads_MoveToTop_Tooltip",
					icon: t == ee.k_EError ? <v.Reload /> : <v.Download />,
				};
			} else if (section == Te.k_EDownloadSection_Completed) {
				r = {
					onClick: n ? R : M,
					toolTip: (0, Localize)(
						n ? "#GameAction_Play" : "#Downloads_GoToGame_Tooltip",
					),
				};
			}
		} else {
			r = {
				onClick: E,
				wrapperClass: H.PauseWrapper,
				className: H.Pause,
				toolTip: "#Downloads_Pause_Tooltip",
				icon: <v.Pause />,
			};
		}
		return {
			buttonData: r,
			bShowRemoveButton: a,
			bShowPlayButton: n,
			onRemoveFromDownloadList: w,
		};
	}, [y, M, R, w, E, app, bInGamepadUI, item, section]);
	const D = i.useCallback(
		(e) => {
			const { bShowRemoveButton } = k();
			lX(
				<Ee
					app={app}
					item={item}
					navigator={navigator}
					bShowRemoveButton={bShowRemoveButton}
					history={history}
					ownerWindow={GetOwningWindowForEvent(e)}
				/>,
				e,
				zq(),
			);
		},
		[app, item, history, navigator, k],
	);
	const F = i.useCallback(
		(e) => {
			if (!e.isTrusted) {
				e.stopPropagation();
				e.preventDefault();
				return;
			}
			D(e);
		},
		[D],
	);
	const O = k();
	const P = bInGamepadUI;
	const z =
		section != Te.k_EDownloadSection_Active || snapshot.isDragging
			? provided.draggableProps.style
			: {};
	return (
		<T.Z
			className={A_1(
				H.SectionItemWrapper,
				snapshot.isDragging && H.Dragging,
				_ && H.Autofocused,
			)}
			noFocusRing
			focusable
			autoFocus={autoFocus}
			onContextMenu={F}
			onMenuButton={D}
			flow-children="row"
			ref={provided.innerRef}
			onGamepadFocus={(e) => {
				set(e.detail.focusSource == L.D$.APPLICATION);
			}}
			onGamepadBlur={(e) => {
				set(false);
			}}
			onFocus={onFocus}
			onBlur={onBlur}
			onOKButton={
				O.buttonData
					? () => {
							O.buttonData.onClick(undefined);
						}
					: undefined
			}
			onOKActionDescription={
				O.buttonData ? (0, Localize)(O.buttonData.toolTip) : undefined
			}
			onMenuActionDescription={(0, Localize)("#ActionButtonLabelContextMenu")}
			{...provided.draggableProps}
			{...(P ? {} : provided.dragHandleProps)}
			style={z}
		>
			<Be
				app={app}
				bIsDragging={snapshot.isDragging}
				bInGamepadUI={bInGamepadUI}
				dragHandleProps={P ? provided.dragHandleProps : undefined}
				buttonProps={O}
				{...o}
				{...C}
			/>
		</T.Z>
	);
});
const Fe_1 = PA((e) => {
	const { item, app, bInGamepadUI, overview } = e;
	return (
		<div className={H.DownloadItemName}>
			<div className={H.Name}>
				<Pe_1 item={item} app={app} overview={overview} />
				{!bInGamepadUI && <Ae item={item} app={app} overview={overview} />}
			</div>
		</div>
	);
});
const Be_1 = PA((e) => {
	const { item, app, section, overview } = e;
	const s = te(item, app, overview);
	const [o, l] = item.active && bm(overview) ? vO(overview) : vH(item);
	return (
		<div className={A_1(H.DetailsAndType)}>
			{section == Te.k_EDownloadSection_Active && <Ge_1 overview={overview} />}
			{section != Te.k_EDownloadSection_Active && (
				<Le currentBytes={o} totalBytes={l} active={item.active} />
			)}
			{s != ee.k_EUpdatesDisabledByUser && <Ve app={app} />}
			<He item={item} />
		</div>
	);
});
function Ye(e) {
	const { itemAndAppProps, buttonProps } = e;
	const n = zM();
	return (
		<div
			className={A_1(
				H.ActiveItemRightColumn,
				H.SectionItemColumn,
				H.NameSection,
				H.Left,
			)}
		>
			<R.mr />
			{itemAndAppProps && (
				<>
					<Be_1 {...itemAndAppProps} overview={n} />
					<Se_1 {...itemAndAppProps} className={A_1(H.Right)} />
					<div className={H.Bottom}>
						<div className={H.TimeRemaining}>
							{n.update_seconds_remaining >= 0 &&
								n.update_seconds_remaining < Seconds.PerMonth && (
									<span>
										{LocalizeReact(
											"#Downloads_Time_Remaining",
											<span className={H.StartTime}>
												{p.hj.LocalizeTimeRemaining(n.update_seconds_remaining)}
											</span>,
										)}
									</span>
								)}
						</div>
						<Oe_1 {...itemAndAppProps} {...buttonProps} />
					</div>
				</>
			)}
		</div>
	);
}
const Se = PA((e) => {
	const { bIsDragging, bInGamepadUI, dragHandleProps, buttonProps, ...s } = e;
	const { item, app, index, section, autoFocus, ...d } = s;
	const A = br();
	const g = zM();
	const h = app && (
		<k.z app={app} eAssetType={4} className={H.DownloadGameIcon} />
	);
	const C = (
		<div className={H.GameIconAndName}>
			{h}
			<div className={H.DownloadGameIconBevel} />
			<Fe_1 {...s} bInGamepadUI={bInGamepadUI} overview={g} />
		</div>
	);
	return (
		<div className={H.DownloadSectionActiveItem}>
			<R.b4
				className={H.DownloadGraph}
				appidTopOfQueue={app.appid}
				appidOverride={app.appid}
				nameElement={C}
				onClick={() => A.App(item.appid)}
			>
				<Ae item={item} app={app} overview={g} alwaysExpand />
			</R.b4>
			<Ye itemAndAppProps={s} buttonProps={buttonProps} />
			<div className={H.HoverRing} />
			<We dragHandleProps={dragHandleProps} />
		</div>
	);
});
function We(e) {
	const { dragHandleProps } = e;
	return (
		<div className={H.DragHandle} {...dragHandleProps}>
			<v.Rows />
		</div>
	);
}
const Be = PA((e) => {
	const { bIsDragging, bInGamepadUI, dragHandleProps, buttonProps, ...s } = e;
	const { item, app, index, section, autoFocus, ...d } = s;
	const A = X(item);
	const p = te(item, app, A);
	const g = !item.completed && p != ee.k_EUpdatesDisabledByApp;
	const h = section == Te.k_EDownloadSection_Active;
	return (
		<div
			className={A_1(H.SectionItem, bIsDragging && H.Dragging, h && H.Active)}
			{...d}
		>
			<div className={H.SectionItemContent}>
				{!h && (
					<>
						<div className={H.AppPortrait}>
							<_.TK
								app={app}
								bFeatured
								bHideFooter
								bHideBanners
								bShowFriendsAsIcons={false}
								context={6}
							/>
						</div>
						<div className={H.SectionItemCenter}>
							<div className={A_1(H.SectionItemColumn, H.NameSection, H.Left)}>
								<Fe_1 {...s} bInGamepadUI={bInGamepadUI} overview={A} />
								<Be_1 {...s} overview={A} />
								{bInGamepadUI && <Ae item={item} app={app} overview={A} />}
							</div>
							<Se_1 {...s} className={A_1(H.SectionItemColumn, H.Right)} />
						</div>
						<Oe_1 {...s} {...buttonProps} />
					</>
				)}
				{h && <Se {...e} />}
				{!h && g && <We dragHandleProps={dragHandleProps} />}
			</div>
		</div>
	);
});
let Ve = class extends i.Component {
	OpenAppAutoUpdateSettings() {
		SteamClient.Apps.OpenAppSettingsDialog(this.props.app.appid, "updates");
	}
	getDefaultAppUpdateSettingLocString(e) {
		if (e === 1) {
			return (0, Localize)("#Downloads_AutoUpdate_DoNotUpdate");
		} else {
			return "";
		}
	}
	LocalizeAutoUpdateBehavior(e, t) {
		switch (e) {
			case 0: {
				return this.getDefaultAppUpdateSettingLocString(t);
			}
			case 1: {
				return (0, Localize)("#Downloads_AutoUpdate_DoNotUpdate");
			}
			case 2: {
				return (0, Localize)("#Downloads_AutoUpdate_HighPriority");
			}
			case 3: {
				return "";
			}
		}
	}
	render() {
		const [e] = h.rV.GetClientSetting("default_app_update_behavior");
		const { app, className, ...n } = this.props;
		const a = A.H.GetAppDetails(app.appid);
		const s = a && this.LocalizeAutoUpdateBehavior(a.eAutoUpdateValue, e);
		if (s) {
			return (
				<div
					className={A_1(H.AutoUpdateSettings, className)}
					onClick={this.OpenAppAutoUpdateSettings}
					{...n}
				>
					{s}
				</div>
			);
		} else {
			return null;
		}
	}
};
function Ie(e) {
	SteamClient.Downloads.RemoveFromDownloadList(e.appid);
	if (e.queue_index == 0 && p.hj.DownloadOverview.paused) {
		SteamClient.Downloads.EnableAllDownloads(true);
	}
}
function Ee(e) {
	const { app, item, navigator, bShowRemoveButton, history, ownerWindow } = e;
	const l = Qn();
	const { data } = dZ(item);
	const [m] = VI("download_throttle_rate");
	const A = () =>
		SteamClient.Downloads.SuspendDownloadThrottling(
			!p.hj.DownloadOverview.throttling_suspended,
		);
	const g = [];
	if (item.queue_index == 0) {
		const e = () =>
			SteamClient.Downloads.SetLaunchOnUpdateComplete(
				item.launch_on_completion ? D.sc : item.appid,
			);
		g.push(
			<F.kt
				key="launch-on-complete"
				className={H.ContextMenuItem}
				onSelected={e}
			>
				<span>
					<v.Checkmark
						className={A_1(
							H.LaunchOnCompletion,
							item.launch_on_completion && H.Active,
						)}
					/>
				</span>
				{(0, Localize)("#Downloads_LaunchWhenComplete")}
			</F.kt>,
		);
		if (m > 0) {
			g.push(
				<F.kt
					key="suspend-throttle"
					className={H.ContextMenuItem}
					onSelected={A}
				>
					<span>
						<v.Checkmark
							className={A_1(
								H.LaunchOnCompletion,
								p.hj.DownloadOverview.throttling_suspended && H.Active,
							)}
						/>
					</span>
					{(0, Localize)("#Downloads_OverrideDownloadThrottle")}
				</F.kt>,
			);
		}
	}
	if (bShowRemoveButton) {
		g.push(
			<F.kt
				key="remove-from-downloadlist"
				className={H.ContextMenuItem}
				onSelected={() => Ie(item)}
			>
				{(0, Localize)(
					item.completed
						? "#Downloads_RemoveFromList_Tooltip"
						: "#Downloads_RemoveFromQueue_Tooltip",
				)}
			</F.kt>,
		);
	}
	if (item.update_type_info[d.$6.k_EAppUpdateContentType_Workshop].has_update) {
		g.push(
			<F.kt
				key="workshop-items"
				className={H.ContextMenuItem}
				onSelected={(e) =>
					C.B7.NavigateToSteamURLInOwningWindow(
						e,
						"SteamWorkshopUpdatedSubscriptions",
						item.appid,
					)
				}
			>
				{(0, Localize)("#Downloads_ViewSubscriptions")}
			</F.kt>,
		);
	}
	if (data && data.length > 0) {
		g.push(
			<F.kt
				key="patch-notes"
				className={H.ContextMenuItem}
				onSelected={() =>
					history.push(U.BV.Downloads(), KV(item.appid, data[0].clan_event_gid))
				}
			>
				{(0, Localize)("#Downloads_ViewPatchNotes")}
			</F.kt>,
		);
	}
	g.push(
		<F.kt
			key="view-in-library"
			className={H.ContextMenuItem}
			onSelected={() => navigator.App(item.appid)}
		>
			{(0, Localize)("#Generic_ViewInLibrary")}
		</F.kt>,
	);
	if (g.length > 0) {
		g.push(<F.K5 key="download-list-separator" />);
	}
	return (
		<G.uU
			overview={app}
			client="local"
			launchSource={1001}
			bInGamepadUI={l}
			additionalActions={g}
			ownerWindow={ownerWindow}
		/>
	);
}
function Me(e) {
	const { eSection } = e;
	return (
		<div className={H.EmptyTransfers}>
			<div className={H.Text}>{(0, Localize)("#Downloads_NoTransfers")}</div>
			{eSection == Te.k_EDownloadSection_Active && (
				<>
					<R.b4
						className={H.DownloadGraph}
						appidTopOfQueue={0}
						appidOverride={0}
						nameElement={undefined}
					/>
					<Ye />
				</>
			)}
		</div>
	);
}
var Te;
Cg([b.oI], Ve.prototype, "OpenAppAutoUpdateSettings", null);
Ve = Cg([s.PA], Ve);
((e) => {
	e[(e.k_EDownloadSection_Active = 0)] = "k_EDownloadSection_Active";
	e[(e.k_EDownloadSection_Queued = 1)] = "k_EDownloadSection_Queued";
	e[(e.k_EDownloadSection_Scheduled = 2)] = "k_EDownloadSection_Scheduled";
	e[(e.k_EDownloadSection_NotQueued = 3)] = "k_EDownloadSection_NotQueued";
	e[(e.k_EDownloadSection_Completed = 4)] = "k_EDownloadSection_Completed";
	e[(e.k_EDownloadSection_Max = 5)] = "k_EDownloadSection_Max";
})((Te ||= {}));
const Re = false;
function ke(e) {
	switch (e) {
		case Te.k_EDownloadSection_Queued: {
			return "#Downloads_Section_Current";
		}
		case Te.k_EDownloadSection_Scheduled: {
			return "#Downloads_Section_Scheduled";
		}
		case Te.k_EDownloadSection_NotQueued: {
			return "#Downloads_Section_NotQueued";
		}
		case Te.k_EDownloadSection_Completed: {
			return "#Downloads_Section_Completed";
		}
	}
	return "";
}
let De = class extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			bCollapsed: false,
		};
		this.props.storage.GetObject(this.GetStorageKey()).then((e) => {
			this.setState({
				bCollapsed: !!e,
			});
		});
	}
	GetStorageKey() {
		return `DownloadListSection_${this.props.eSection}`;
	}
	ToggleCollapsed() {}
	RemoveAll() {
		this.props.items.forEach((e) => {
			if (e?.appid) {
				SteamClient.Downloads.RemoveFromDownloadList(e.appid);
			}
		});
	}
	render() {
		const {
			eSection,
			storage,
			bFirstSection,
			bIsDroppable,
			items,
			nStartIndex,
			innerRef,
			className,
			onItemClick,
			onItemFocus,
			bInGamepadUI,
			...p
		} = this.props;
		const g = items
			? items.map((t, n) => ({
					item: t,
					app: c.tw.GetAppOverviewByAppID(t.appid),
					index: t.queue_index,
					section: eSection,
					autoFocus: bFirstSection && n == 0,
				}))
			: [];
		const h = g.length == 0 && eSection != Te.k_EDownloadSection_Queued;
		const C = g.length == 0 && eSection == Te.k_EDownloadSection_Queued;
		const _ = g.map((e, t) => (
			<Ce
				key={e.app.appid}
				{...e}
				index={t + nStartIndex}
				onClick={() => this.props.onItemClick(e.app.appid)}
				onFocus={() => onItemFocus(t)}
			/>
		));
		const f = ke(eSection);
		const b = A_1(
			className,
			H.Section,
			h && H.Empty,
			C && H.EmptyQueue,
			eSection == Te.k_EDownloadSection_Active && H.Active,
			eSection == Te.k_EDownloadSection_Completed && H.Completed,
		);
		if (bInGamepadUI && h) {
			return <div className={b} {...p} ref={innerRef} />;
		} else {
			return (
				<T.Z
					focusable={false}
					className={b}
					{...p}
					ref={innerRef}
					navEntryPreferPosition={W.iU.MAINTAIN_Y}
				>
					<Ne
						sectionTitle={f}
						count={_.length}
						collapsed={this.state.bCollapsed}
						onToggleCollapsed={this.ToggleCollapsed}
						showHours={eSection == Te.k_EDownloadSection_Queued}
						showRemoveButton={eSection == Te.k_EDownloadSection_Completed}
						onRemove={this.RemoveAll}
					/>
					{!this.state.bCollapsed && (
						<l.gL droppableId={String(eSection)} isDropDisabled={!bIsDroppable}>
							{(t, r) => (
								<Fe
									eSection={eSection}
									bIsDroppable={bIsDroppable}
									bIsDraggingOver={r.isDraggingOver}
									bEmptyQueue={C}
									rgElements={_}
									provided={t}
								/>
							)}
						</l.gL>
					)}
				</T.Z>
			);
		}
	}
};
Cg([b.oI], De.prototype, "ToggleCollapsed", null);
Cg([b.oI], De.prototype, "RemoveAll", null);
De = Cg([s.PA], De);
const Ne = (e) =>
	e.sectionTitle && (
		<div className={H.SectionTitle} onClick={e.onToggleCollapsed}>
			<div className={A_1(H.TitleAndCount, Re)}>
				{Re}
				<span className={H.Title}>
					{(0, Localize)(e.sectionTitle)}
					{"\xA0"}
				</span>
				<span className={H.Count}>({e.count})</span>
			</div>
			<div className={H.Rule} />
			{e.showHours && <$ />}
			{e.showRemoveButton && (
				<a.$n className={H.RemoveAllButton} onClick={e.onRemove}>
					{(0, Localize)("#Downloads_RemoveAll")}
				</a.$n>
			)}
		</div>
	);
function Fe(e) {
	const {
		eSection,
		bIsDroppable,
		bIsDraggingOver,
		bEmptyQueue,
		rgElements,
		provided,
	} = e;
	return (
		<div
			className={A_1(
				H.SectionList,
				bIsDroppable && H.DropOption,
				bIsDraggingOver && H.DragOver,
			)}
			{...provided.droppableProps}
			ref={provided.innerRef}
		>
			{rgElements}
			{rgElements.length == 0 && <Me eSection={eSection} />}
			<span className={A_1(H.PlaceHolder, bEmptyQueue && H.Empty)}>
				{provided.placeholder}
			</span>
		</div>
	);
}
const Ge = i.forwardRef((props, ref) => <De {...props} innerRef={ref} />);
let Oe;
((e) => {
	e[(e.Unknown = 0)] = "Unknown";
	e[(e.Above = 1)] = "Above";
	e[(e.OnScreen = 2)] = "OnScreen";
	e[(e.Below = 3)] = "Below";
	e[(e.Empty = 4)] = "Empty";
})((Oe ||= {}));
class Pe extends i.Component {
	m_storage;
	m_intersectionObserver = undefined;
	m_rgelJumpBarSections = [];
	m_elScrollableContainer = i.createRef();
	m_fnUnregister = undefined;
	constructor(e) {
		super(e);
		this.m_storage = new I.A();
		if (!this.props.bInGamepadUI) {
			this.m_rgelJumpBarSections[Te.k_EDownloadSection_Scheduled] =
				i.createRef();
			this.m_rgelJumpBarSections[Te.k_EDownloadSection_NotQueued] =
				i.createRef();
			this.m_rgelJumpBarSections[Te.k_EDownloadSection_Completed] =
				i.createRef();
		}
		const t = new Map();
		for (
			let e = Te.k_EDownloadSection_Queued;
			e < Te.k_EDownloadSection_Max;
			e++
		) {
			t.set(e, []);
		}
		this.state = {
			eDragSource: null,
			mapSectionItems: t,
			mapSectionPositions: new Map(),
			appidForceHeader: undefined,
			elRoot: undefined,
		};
	}
	componentDidMount() {
		this.m_fnUnregister = p.hj.RegisterForDownloadItemsUpdate(
			this.OnDownloadItemsUpdate,
		);
		this.StartObserving();
	}
	componentDidUpdate(e, t, r) {
		if (this.props.bOffline && !e.bOffline) {
			this.StopObserving();
		} else if (!this.props.bOffline && e.bOffline) {
			this.StartObserving();
		}
	}
	StartObserving() {
		if (this.m_elScrollableContainer.current) {
			const e = this.m_elScrollableContainer.current.ownerDocument.defaultView;
			this.m_intersectionObserver = new e.IntersectionObserver(
				this.OnIntersection,
				{
					root: this.m_elScrollableContainer.current,
					rootMargin: `0px 0px -${H.JumpBarHeight} 0px`,
				},
			);
			this.m_rgelJumpBarSections.forEach((e) => {
				if (e.current) {
					this.m_intersectionObserver.observe(e.current);
				}
			});
		}
	}
	StopObserving() {
		this.m_intersectionObserver?.disconnect();
	}
	componentWillUnmount() {
		this.StopObserving();
		this.m_fnUnregister.Unregister();
	}
	SetRoot(e) {
		this.setState({
			elRoot: e,
		});
	}
	OnDownloadItemsUpdate(e) {
		if (e) {
			const e = new Map();
			e.set(Te.k_EDownloadSection_Queued, p.hj.QueuedTransfers);
			e.set(Te.k_EDownloadSection_Scheduled, p.hj.ScheduledTransfers);
			e.set(Te.k_EDownloadSection_NotQueued, p.hj.UnqueuedTransfers);
			e.set(Te.k_EDownloadSection_Completed, p.hj.CompletedTransfers);
			this.setState({
				mapSectionItems: e,
			});
		}
	}
	OnIntersection(e, t) {
		let r = false;
		const n = new Map(this.state.mapSectionPositions);
		for (const t of e) {
			const e = this.m_rgelJumpBarSections.findIndex(
				(e) => e?.current == t.target,
			);
			w_1(e !== -1, "Intersection target not in map");
			let Oe_OnScreen = Oe.OnScreen;
			if (t.boundingClientRect.height == 0) {
				Oe_OnScreen = Oe.Empty;
			} else if (t.boundingClientRect.bottom < t.rootBounds.top) {
				Oe_OnScreen = Oe.Above;
			} else if (t.boundingClientRect.top > t.rootBounds.bottom) {
				Oe_OnScreen = Oe.Below;
			}
			if (Oe_OnScreen != n.get(e)) {
				n.set(e, Oe_OnScreen);
				r = true;
			}
		}
		if (r) {
			this.setState({
				mapSectionPositions: n,
			});
		}
	}
	JumpToSection(e) {
		this.m_rgelJumpBarSections[e].current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
	}
	ReorderItems(e, t, r, n, i) {
		const a = this.state.mapSectionItems;
		const [s] = a.get(e).splice(t, 1);
		a.get(r).splice(n, 0, s);
		a.set(e, a.get(e).slice());
		if (e != r) {
			a.set(r, a.get(r).slice());
		}
		this.setState(
			{
				mapSectionItems: a,
			},
			i,
		);
	}
	OnDragStart(e, t) {
		this.setState({
			eDragSource: Number(e.source.droppableId),
		});
	}
	NormalizeDropSection(e) {
		if (e == Te.k_EDownloadSection_Active) {
			return Te.k_EDownloadSection_Queued;
		} else {
			return e;
		}
	}
	OnDragEnd(e, t) {
		this.setState({
			eDragSource: null,
		});
		if (!e.destination) {
			return;
		}
		if (Number(e.destination.droppableId) == Te.k_EDownloadSection_Queued) {
			if (e.destination.index == 0 && p.hj.QueuedTransfers.length == 1) {
				e.destination.index = 1;
			} else if (Number(e.source.droppableId) == Te.k_EDownloadSection_Active) {
				e.destination.index -= 1;
			}
		} else if (
			Number(e.destination.droppableId) == Te.k_EDownloadSection_Active
		) {
			e.destination.index = 0;
		}
		const r = this.NormalizeDropSection(Number(e.source.droppableId));
		const n = this.NormalizeDropSection(Number(e.destination.droppableId));
		if (r != n || e.source.index != e.destination.index) {
			if (n != Te.k_EDownloadSection_Queued) {
				if (
					(r != Te.k_EDownloadSection_Queued &&
						r != Te.k_EDownloadSection_Scheduled) ||
					n != Te.k_EDownloadSection_NotQueued
				) {
				} else {
					const t = Number(e.draggableId);
					this.ReorderItems(r, e.source.index, n, e.destination.index, () => {
						SteamClient.Downloads.PauseAppUpdate(t);
						if (
							(p.hj.DownloadOverview.paused && e.destination.index == 0) ||
							(r == Te.k_EDownloadSection_Queued && e.source.index == 0)
						) {
							SteamClient.Downloads.EnableAllDownloads(true);
						}
					});
				}
			} else {
				const t = Number(e.draggableId);
				this.ReorderItems(r, e.source.index, n, e.destination.index, () => {
					SteamClient.Downloads.SetQueueIndex(t, e.destination.index);
					if (
						(p.hj.DownloadOverview.paused && e.destination.index == 0) ||
						(r == Te.k_EDownloadSection_Queued && e.source.index == 0)
					) {
						SteamClient.Downloads.EnableAllDownloads(true);
					}
				});
			}
		}
	}
	IsSectionDroppable(e) {
		switch (e) {
			case Te.k_EDownloadSection_Active: {
				return (
					this.state.eDragSource == Te.k_EDownloadSection_Active ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled ||
					this.state.eDragSource == Te.k_EDownloadSection_NotQueued
				);
			}
			case Te.k_EDownloadSection_Queued: {
				return (
					(this.state.eDragSource == Te.k_EDownloadSection_Active &&
						this.GetFilteredSectionItems(Te.k_EDownloadSection_Queued)?.length >
							1) ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled ||
					this.state.eDragSource == Te.k_EDownloadSection_NotQueued
				);
			}
			case Te.k_EDownloadSection_Scheduled: {
				return false;
			}
			case Te.k_EDownloadSection_NotQueued: {
				return (
					this.state.eDragSource == Te.k_EDownloadSection_Active ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled
				);
			}
			case Te.k_EDownloadSection_Completed: {
				return false;
			}
		}
		return false;
	}
	OnItemClick(e) {
		if (window.bDebugDownloadHeader) {
			this.setState({
				appidForceHeader: e,
			});
		}
	}
	m_nLastIndex = undefined;
	m_eLastSection = undefined;
	OnItemFocus(e, t) {
		const r =
			this.m_eLastSection === undefined ||
			e < this.m_eLastSection ||
			(e == this.m_eLastSection && t < this.m_nLastIndex);
		this.m_eLastSection = e;
		this.m_nLastIndex = t;
		if (t != 0 || !r) {
			return;
		}
		let n = false;
		const i = this.GetFilteredSectionItems(Te.k_EDownloadSection_Queued).length;
		if (
			e == Te.k_EDownloadSection_Active ||
			e == Te.k_EDownloadSection_Queued
		) {
			n = true;
		} else if (e == Te.k_EDownloadSection_Scheduled) {
			n = i < 2;
		} else if (e == Te.k_EDownloadSection_NotQueued) {
			n =
				this.GetFilteredSectionItems(Te.k_EDownloadSection_Scheduled).length ==
					0 && i < 2;
		} else if (e == Te.k_EDownloadSection_Completed) {
			n =
				this.GetFilteredSectionItems(Te.k_EDownloadSection_NotQueued).length ==
					0 &&
				this.GetFilteredSectionItems(Te.k_EDownloadSection_Scheduled).length ==
					0 &&
				i < 2;
		}
		if (n) {
			window.setTimeout(
				() =>
					this.m_elScrollableContainer.current.scrollTo({
						top: 0,
						behavior: "smooth",
					}),
				5,
			);
		}
	}
	GetFilteredSectionItems(e) {
		return this.state.mapSectionItems
			.get(e)
			?.filter((e) => !g.jR.BIsAppBlocked(e?.appid));
	}
	render() {
		const { bOffline } = this.props;
		const t = [];
		const r = [];
		const n = this.GetFilteredSectionItems(Te.k_EDownloadSection_Queued).slice(
			0,
			1,
		);
		let n_length = n.length;
		if (!bOffline) {
			let e = true;
			this.state.mapSectionPositions.forEach((r, n) => {
				const a = ke(n);
				const s = this.GetFilteredSectionItems(n)?.length || 0;
				const o = e && r == Oe.Below;
				if (o) {
					e = false;
				}
				t.push(
					<div
						key={`jumpbar_${n}`}
						className={A_1(H.SectionJumpBar, o && H.Show)}
						onClick={() => {
							this.JumpToSection(n);
						}}
						style={{
							zIndex: 20 - n,
						}}
					>
						<div className={H.TitleAndCount}>
							<span className={H.Title}>
								{(0, Localize)(a)}
								{"\xA0"}
							</span>
							<span className={H.Count}>({s})</span>
						</div>
						<div className={H.View}>{(0, Localize)("#Downloads_View")}</div>
					</div>,
				);
			});
			for (
				let e = Te.k_EDownloadSection_Queued, t = 1;
				e < Te.k_EDownloadSection_Max;
				e++, t++
			) {
				const t =
					e == Te.k_EDownloadSection_Queued
						? this.GetFilteredSectionItems(e).slice(1)
						: this.GetFilteredSectionItems(e);
				r.push(
					<Ge
						key={`section_${e}`}
						eSection={e}
						bFirstSection={n_length == 0}
						storage={this.m_storage}
						bIsDroppable={this.IsSectionDroppable(e)}
						items={t}
						nStartIndex={e == Te.k_EDownloadSection_Queued ? 1 : 0}
						ref={this.m_rgelJumpBarSections[e]}
						onItemClick={this.OnItemClick}
						onItemFocus={(t) => this.OnItemFocus(e, t)}
						bInGamepadUI={this.props.bInGamepadUI}
					/>,
				);
				n_length += t.length;
			}
		}
		if (!window.nDownloadHeaderAppid) {
			this.state.appidForceHeader;
		}
		if (!!bOffline || !n || !n || !n[0] || !n || !n[0] || !n[0].appid) {
			D.sc;
		}
		let s = n_length > 0;
		let o = {
			focusable: !s,
			autoFocus: !s,
			noFocusRing: true,
		};
		return (
			<T.Z
				ref={this.SetRoot}
				className={A_1(H.DownloadsPage, this.props.bInGamepadUI && H.BasicUI)}
				{...o}
			>
				<l.JY
					onDragStart={this.OnDragStart}
					onDragEnd={this.OnDragEnd}
					stylesInsertionPoint={this.state.elRoot}
				>
					<div className={H.TopSection}>
						<Ge
							eSection={Te.k_EDownloadSection_Active}
							storage={this.m_storage}
							bFirstSection={n.length > 0}
							bIsDroppable={this.IsSectionDroppable(
								Te.k_EDownloadSection_Active,
							)}
							items={n}
							nStartIndex={0}
							ref={this.m_rgelJumpBarSections[Te.k_EDownloadSection_Active]}
							onItemFocus={() =>
								this.OnItemFocus(Te.k_EDownloadSection_Active, 0)
							}
							onItemClick={this.OnItemClick}
							bInGamepadUI={this.props.bInGamepadUI}
						/>
						<R.q className={H.SettingsButton} />
					</div>
					<K />
					<div className={H.TopBar} />
					<div className={H.ItemListWrapper}>
						{bOffline && (
							<div className={H.OfflineWrapper}>
								<P.t />
							</div>
						)}
						{!bOffline && this.state.elRoot && (
							<div className={H.ItemListScrollWrapper}>
								<div className={H.ItemLists} ref={this.m_elScrollableContainer}>
									{r}
								</div>
							</div>
						)}
						{t}
					</div>
				</l.JY>
			</T.Z>
		);
	}
}
export function lw(e) {
	const t = q3(() => qw().BIsOfflineMode());
	const r = Qn();
	return <Pe bOffline={t} bInGamepadUI={r} />;
}
Cg([b.oI], Pe.prototype, "SetRoot", null);
Cg([b.oI], Pe.prototype, "OnDownloadItemsUpdate", null);
Cg([b.oI], Pe.prototype, "OnIntersection", null);
Cg([b.oI], Pe.prototype, "JumpToSection", null);
Cg([b.oI], Pe.prototype, "OnDragStart", null);
Cg([b.oI], Pe.prototype, "OnDragEnd", null);
Cg([b.oI], Pe.prototype, "IsSectionDroppable", null);
Cg([b.oI], Pe.prototype, "OnItemClick", null);
Cg([b.oI], Pe.prototype, "OnItemFocus", null);
