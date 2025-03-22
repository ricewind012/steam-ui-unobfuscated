var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./64608.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require(/*webcrack:missing*/ "./79671.js");
var c = require("./96593.js");
var m = require("./89748.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require(/*webcrack:missing*/ "./44846.js");
var A = require("./78057.js");
var p = require("./97893.js");
var g = require("./5640.js");
var h = require("./34792.js");
var C = require("./87935.js");
var _ = require("./30496.js");
var f = require(/*webcrack:missing*/ "./11010.js");
var b = require(/*webcrack:missing*/ "./52451.js");
var y = require("./34428.js");
var S = require(/*webcrack:missing*/ "./46108.js");
var w = require(/*webcrack:missing*/ "./98995.js");
var B = require(/*webcrack:missing*/ "./90765.js");
var v = require("./35488.js");
var I = require(/*webcrack:missing*/ "./88696.js");
var E = require("./56262.js");
var M = require(/*webcrack:missing*/ "./49455.js");
var T = require(/*webcrack:missing*/ "./69164.js");
var R = require("./39147.js");
var k = require("./91486.js");
var D = require("./92031.js");
var N = require(/*webcrack:missing*/ "./31084.js");
var F = require(/*webcrack:missing*/ "./88750.js");
var G = require("./5808.js");
var O = require("./20797.js");
var P = require("./91152.js");
var L = require(/*webcrack:missing*/ "./20893.js");
var z = require(/*webcrack:missing*/ "./39941.js");
var x = require(/*webcrack:missing*/ "./49519.js");
var U = require("./18057.js");
var W = require(/*webcrack:missing*/ "./4690.js");
var V = require("./66830.js");
var H = V;
var j = require(/*webcrack:missing*/ "./54644.js");
var q = require("./18869.js");
var Q = require("./70239.js");
var Z = require(/*webcrack:missing*/ "./41180.js");
function Y(e) {
	SteamClient.Downloads.SuspendLanPeerContent(true);
}
function K(e) {
	const t = (0, p.zM)();
	if (t.lan_peer_hostname.length == 0) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: (0, B.A)(H.LocalNetworkTransferBar),
			},
			i.createElement(
				"div",
				{
					className: (0, B.A)(H.LocalNetworkTransferSVG),
				},
				t.update_is_upload
					? i.createElement(v.LanPeerContentSend, null)
					: i.createElement(v.LanPeerContentReceive, null),
			),
			i.createElement(
				"div",
				{
					className: (0, B.A)(H.LocalNetworkTransferText),
				},
				(0, S.we)(
					t.update_is_upload
						? "#Downloads_LocalNetworkTransfer_Upload"
						: "#Downloads_LocalNetworkTransfer_Download",
				),
				i.createElement(
					"span",
					{
						className: H.LocalNetworkTransferHostName,
					},
					" ",
					t.lan_peer_hostname,
					" ",
				),
			),
			i.createElement(
				w.he,
				{
					className: (0, B.A)(H.ContentTypes, "StopTransferButton"),
					toolTipContent: (0, S.we)(
						"#Downloads_LocalNetworkTransfer_Stop_ttip",
					),
					direction: "top",
				},
				i.createElement(
					a.$n,
					{
						className: (0, B.A)(H.LocalNetworkTransferStop, "BarButton"),
						onClick: Y,
					},
					i.createElement(
						"div",
						{
							className: (0, B.A)(H.LocalNetworkTransferStopSVG),
						},
						i.createElement(v.Close, null),
					),
					(0, S.we)("#Downloads_LocalNetworkTransfer_Stop"),
				),
			),
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
	(0, j.uX)(e).location.href = "steam://settings/downloads";
	e.stopPropagation();
}
const $ = () => {
	const e = (0, h.t0)();
	const t = (0, g.oA)();
	const r = e.vecValidAutoUpdateRestrictHours;
	const [n] = (0, h.VI)("restrict_auto_updates_start");
	const [a] = (0, h.VI)("restrict_auto_updates_end");
	const [s] = (0, h.VI)("restrict_auto_updates");
	if (!s || (n == 0 && a == 0)) {
		return i.createElement(
			"div",
			{
				className: H.AutoUpdate,
			},
			i.createElement(
				"div",
				{
					className: (0, B.A)(
						H.AutoUpdateHours,
						H.NoHours,
						t && H.ParentalLocked,
					),
					onClick: eo,
				},
				(0, S.we)("#Downloads_AutoUpdates_Enabled"),
			),
		);
	} else {
		return i.createElement(
			"div",
			{
				className: H.AutoUpdate,
			},
			i.createElement(
				"div",
				{
					className: (0, B.A)(H.AutoUpdateHours, t && H.ParentalLocked),
					onClick: eo,
				},
				i.createElement(
					"span",
					null,
					(0, S.PP)(
						"#Downloads_ScheduleUpdatesFor",
						i.createElement(
							"span",
							{
								className: H.UpdateHours,
							},
							(0, S.we)(
								"#Downloads_ScheduledUpdateTimes",
								r[n].strDisplay,
								r[a].strDisplay,
							),
						),
					),
				),
			),
		);
	}
};
var ee;
function te(e, t, r) {
	const n = e.active && r.update_state == "Downloading";
	let i = ee.k_EUnknown;
	const a = t && t.GetPerClientData("local");
	const s = a?.update_available_but_disabled_by_app;
	if (e.update_result != 0 && e.update_result != 4 && e.update_result != 2) {
		i = ee.k_EError;
	} else if (e.queue_index == -1 && e.deferred_time != 0) {
		i = ee.k_EScheduled;
	} else if (s) {
		i = ee.k_EUpdatesDisabledByApp;
	} else if (e.paused) {
		const e = A.H.GetAppDetails(t.appid);
		const r = e && e.eAutoUpdateValue;
		i = r && r == 1 ? ee.k_EUpdatesDisabledByUser : ee.k_ERemovedFromQueue;
	} else if (e.active) {
		i = n ? ee.k_EActiveDownloading : ee.k_EActive;
	} else if (e.completed && e.completed_time != 0) {
		i = ee.k_ECompleted;
	} else if (e.queue_index == 1) {
		i = ee.k_EQueuedNext;
	} else if (e.queue_index >= 0) {
		i = ee.k_EQueued;
		if (e.queue_index == 0 && r.paused) {
			i = ee.k_EActivePaused;
		}
	} else {
		const e = A.H.GetAppDetails(t.appid);
		const r = e && e.eAutoUpdateValue;
		if (r && r == 1) {
			i = ee.k_EUpdatesDisabledByUser;
		}
	}
	return i;
}
(function (e) {
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
const ne = (e) =>
	e.bytesCurrent > 0
		? i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"span",
					{
						className: H.Progress,
					},
					"\xA0",
					e.nPercentComplete,
					"%",
				),
				i.createElement(E.Mm, {
					className: (0, B.A)(H.ProgressBar, H.NotActive),
					progressPct: e.nPercentComplete,
				}),
			)
		: null;
function ie(e) {
	const { className: t, label: r, nPercent: n, children: a } = e;
	return i.createElement(
		"div",
		{
			className: H.ActiveItemProgressBar,
		},
		i.createElement(
			"div",
			{
				className: H.Status,
			},
			i.createElement(
				"div",
				{
					className: H.Label,
				},
				r,
			),
			a,
		),
		i.createElement(E.Mm, {
			className: (0, B.A)(H.ProgressBar, t),
			progressPct: n,
		}),
	);
}
const ae = (0, s.PA)(function (e) {
	const { item: t, app: r, section: n, index: a, className: s, ...o } = e;
	const l = (0, p.zM)();
	const c = re[l.update_state].network;
	const m = re[l.update_state].disk;
	let u =
		re[l.update_state].network &&
		(0, S.we)("#Downloads_DetailedState_" + re[l.update_state].network);
	let d =
		re[l.update_state].disk &&
		(0, S.we)("#Downloads_DetailedState_" + re[l.update_state].disk);
	if (u && (0, p.bm)(l) == (0, p.v_)(l)) {
		const e =
			"#Downloads_DetailedState_" + re[l.update_state].network + "_Complete";
		if ((0, S.c9)(e)) {
			u = (0, S.we)(e);
		}
	}
	const [A, g] = (0, p.vO)(l);
	return i.createElement(
		"div",
		{
			className: (0, B.A)(H.SectionItemStatus, s),
			...o,
		},
		!c &&
			!m &&
			i.createElement(
				"div",
				{
					className: (0, B.A)(H.SectionItemStatusLine, H.Downloading),
				},
				i.createElement(
					"div",
					{
						className: H.State,
					},
					(0, S.we)("#Downloads_DetailedState_" + l.update_state),
				),
			),
		(c || m) &&
			i.createElement(
				"div",
				{
					className: H.ProgressBars,
				},
				c &&
					(0, p.v_)(l) > 0 &&
					i.createElement(
						ie,
						{
							className: H.Network,
							label: u,
							nPercent: (0, p.JD)(l),
						},
						i.createElement(le, {
							currentBytes: (0, p.bm)(l),
							totalBytes: (0, p.v_)(l),
							active: true,
							label: i.createElement(v.Download, {
								className: H.Icon,
							}),
						}),
					),
				m &&
					i.createElement(
						ie,
						{
							className: H.Disk,
							label: d,
							nPercent: (0, p.MD)(l),
						},
						i.createElement(
							"div",
							{
								className: H.Percentage,
							},
							(0, p.MD)(l),
							"%",
						),
					),
			),
	);
});
const se = (0, s.PA)(function (e) {
	const { item: t, app: r, section: n, index: a, className: s, ...o } = e;
	const l = te(t, r, X(t));
	if (l == ee.k_EActive || l == ee.k_EActiveDownloading) {
		return i.createElement(ae, {
			...e,
		});
	}
	const [c, m] = (0, p.vH)(t);
	const u = (0, p.eC)(t);
	return i.createElement(
		"div",
		{
			className: (0, B.A)(H.SectionItemStatus, s),
			...o,
		},
		l == ee.k_EError &&
			i.createElement(
				"div",
				{
					className: (0, B.A)(H.State, H.Error),
				},
				i.createElement(
					w.he,
					{
						className: (0, B.A)(H.ErrorDetails),
						direction: "bottom",
						toolTipContent: t.update_error,
						bDisabled: t.update_error.length == 0,
					},
					(0, S.we)("#Steam_AppUpdateError_" + t.update_result),
				),
			),
		(l == ee.k_EScheduled || (l == ee.k_EError && t.deferred_time > 0)) &&
			i.createElement(
				"div",
				{
					className: H.ScheduledTime,
				},
				(0, S.we)(
					"#Downloads_ScheduledFor",
					(0, f.lQ)(t.deferred_time, {
						bGranularFutureTime: true,
						bForce24HourClock: h.rV.friendSettings.b24HourClock,
					}) +
						" " +
						(0, f.KC)(t.deferred_time, {
							bForce24HourClock: h.rV.friendSettings.b24HourClock,
						}),
				),
			),
		l == ee.k_ERemovedFromQueue &&
			i.createElement(
				"div",
				{
					className: (0, B.A)(H.State, H.Paused),
				},
				i.createElement(ne, {
					bytesCurrent: c,
					nPercentComplete: u,
				}),
			),
		l == ee.k_EActivePaused &&
			i.createElement(
				"div",
				{
					className: H.State,
				},
				i.createElement(
					"span",
					{
						className: (0, B.A)(H.Paused, c > 0 && H.InProgress),
					},
					(0, S.we)("#Downloads_State_Paused"),
				),
				i.createElement(ne, {
					bytesCurrent: c,
					nPercentComplete: u,
				}),
			),
		l == ee.k_ECompleted &&
			i.createElement(
				"div",
				{
					className: H.CompletedTime,
				},
				(0, S.we)(
					"#Downloads_DownloadFinished",
					(0, f._l)(t.completed_time) +
						" " +
						(0, f.KC)(t.completed_time, {
							bForce24HourClock: h.rV.friendSettings.b24HourClock,
						}),
				),
			),
		n != Te.k_EDownloadSection_Active &&
			l == ee.k_EQueued &&
			i.createElement(
				"div",
				{
					className: H.State,
				},
				i.createElement(ne, {
					bytesCurrent: c,
					nPercentComplete: u,
				}),
			),
		l == ee.k_EQueuedNext &&
			i.createElement(
				"div",
				{
					className: H.State,
				},
				i.createElement(
					"span",
					{
						className: (0, B.A)(H.Queued, c > 0 && H.InProgress),
					},
					(0, S.we)("#Downloads_State_UpNext"),
				),
				i.createElement(ne, {
					bytesCurrent: c,
					nPercentComplete: u,
				}),
			),
		l == ee.k_EUpdatesDisabledByUser &&
			i.createElement(
				"div",
				{
					className: H.SectionItemStatusLine,
				},
				i.createElement(ve, {
					app: r,
				}),
			),
		l == ee.k_EUpdatesDisabledByApp &&
			i.createElement(
				"div",
				{
					className: H.State,
				},
				(0, S.we)("#Downloads_State_UpdatesDiabledByApp"),
			),
	);
});
class oe extends i.Component {
	SuppressContextMenu(e) {
		if (!e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	render() {
		const {
			item: e,
			app: t,
			index: r,
			section: n,
			className: s,
			buttonData: o,
			bShowRemoveButton: l,
			bShowPlayButton: c,
			onRemoveFromDownloadList: m,
			children: u,
			...d
		} = this.props;
		return i.createElement(
			"div",
			{
				className: (0, B.A)(H.SectionItemButtons, c && H.AvailableForPlay, s),
				...d,
			},
			i.createElement(
				"div",
				{
					className: H.Buttons,
				},
				o &&
					o.icon &&
					!c &&
					i.createElement(
						w.he,
						{
							className: (0, B.A)(H.ButtonWrapper, H.Left, o.wrapperClass),
							toolTipContent: (0, S.we)(o.toolTip),
							direction: "top",
						},
						i.createElement(
							a.$n,
							{
								className: (0, B.A)(H.Button, o.className),
								onContextMenu: this.SuppressContextMenu,
								onClick: o.onClick,
							},
							o.icon,
						),
					),
				!o &&
					!c &&
					i.createElement("div", {
						className: (0, B.A)(H.ButtonWrapper, H.Left),
					}),
				c &&
					n == Te.k_EDownloadSection_Completed &&
					i.createElement(O.aV, {
						className: H.PlayButton,
						overview: t,
						buttonStyle: "short",
						bShowStreamingSelector: false,
					}),
				l &&
					i.createElement(
						w.he,
						{
							className: (0, B.A)(
								H.ButtonWrapper,
								H.Right,
								H.RemoveFromQueueWrapper,
							),
							toolTipContent: (0, S.we)(
								e.completed
									? "#Downloads_RemoveFromList_Tooltip"
									: "#Downloads_RemoveFromQueue_Tooltip",
							),
							direction: "top",
						},
						i.createElement(
							a.$n,
							{
								className: (0, B.A)(H.Button, H.RemoveFromQueue),
								onContextMenu: this.SuppressContextMenu,
								onClick: this.props.onRemoveFromDownloadList,
							},
							i.createElement(v.Close, null),
						),
					),
				!l &&
					i.createElement("div", {
						className: (0, B.A)(H.ButtonWrapper, H.Right),
					}),
			),
		);
	}
}
function le(e) {
	const {
		currentBytes: t = 0,
		totalBytes: r = 0,
		active: n,
		label: a,
		digitsAfterDecimal: s = 1,
	} = e;
	if (t == 0 && r == 0) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: (0, B.A)(H.Stat, H.ProgressDetails),
			},
			!n &&
				a &&
				i.createElement(
					"div",
					{
						className: H.Label,
					},
					a,
				),
			t != 0 &&
				(0, S.PP)(
					"#Downloads_DownloadedBytesInProgress",
					i.createElement(
						"span",
						{
							className: (0, B.A)(H.Value, H.InProgress, n && H.Active),
						},
						(0, y.dm)(t, {
							nDigitsAfterDecimal: s,
							nMinimumDigitsAfterDecimal: s,
						}),
					),
					i.createElement(
						"span",
						{
							className: (0, B.A)(H.Value, H.Denominator),
						},
						(0, y.dm)(r, {
							nDigitsAfterDecimal: s,
							nMinimumDigitsAfterDecimal: s,
						}),
					),
				),
			t == 0 &&
				(0, S.PP)(
					"#Downloads_TotalBytes",
					i.createElement(
						"span",
						{
							className: H.Value,
						},
						(0, y.dm)(r, {
							nDigitsAfterDecimal: s,
							nMinimumDigitsAfterDecimal: s,
						}),
					),
				),
			n &&
				a &&
				i.createElement(
					"div",
					{
						className: H.Label,
					},
					a,
				),
		);
	}
}
const ce = (e) =>
	i.createElement(
		"div",
		{
			className: (0, B.A)(
				H.ContentType,
				(e.active || e.completed) && H.Highlight,
			),
		},
		(!e.replaceIconWithStatus || (!e.active && !e.completed)) && e.elIcon,
		e.replaceIconWithStatus &&
			e.active &&
			i.createElement(v.Spinner, {
				className: (0, B.A)(H.Icon, H.Status),
			}),
		e.replaceIconWithStatus &&
			e.completed &&
			i.createElement(v.Checkmark, {
				className: (0, B.A)(H.Icon, H.Status, H.Check),
			}),
		e.includeText &&
			i.createElement(
				"span",
				{
					className: H.Text,
				},
				(0, S.we)(e.strToken),
				e.extraNameContent,
			),
		!e.replaceIconWithStatus &&
			e.active &&
			i.createElement(v.Spinner, {
				className: (0, B.A)(H.Icon, H.Status),
			}),
		!e.replaceIconWithStatus &&
			e.completed &&
			i.createElement(v.Checkmark, {
				className: (0, B.A)(H.Icon, H.Status, H.Check),
			}),
	);
const me = (e) =>
	i.createElement(
		w.t1,
		{
			className: H.ContentTypeTooltip,
		},
		i.createElement(
			"div",
			{
				className: H.Title,
			},
			(0, S.we)("#Downloads_ContentType_Title"),
		),
		e.rgIcons.map((e) =>
			i.createElement(ce, {
				key: e.strToken,
				...e,
				includeText: true,
			}),
		),
	);
const ue = (e) =>
	i.createElement(
		i.Fragment,
		null,
		e.rgIcons.map((e) =>
			i.createElement(ce, {
				key: e.strToken,
				...e,
				includeText: true,
				replaceIconWithStatus: true,
			}),
		),
	);
function de(e) {
	const t = (0, Q.Kp)(e.appid, e.publishedfileid);
	if (t.isLoading || t.isLoadingError || !t.isSuccess) {
		return null;
	} else if (t.data?.title && t.data.title.length != 0) {
		return i.createElement("span", null, " - ", t.data.title);
	} else {
		return null;
	}
}
const Ae = (e) => {
	const t = (0, u.Qn)();
	let r = [];
	let n = true;
	const a = e.item.appid == e.overview.update_appid;
	const s = {
		elIcon: i.createElement(v.Inventory, {
			className: H.Icon,
		}),
		strToken: e.app.BIsApplicationOrTool()
			? "#Downloads_ContentType_AppContent"
			: "#Downloads_ContentType_Content",
		active: a && !e.overview.update_is_shader && !e.overview.update_is_workshop,
		completed:
			e.item.update_type_info[d.$6.k_EAppUpdateContentType_Content].completed,
	};
	const o = {
		elIcon: i.createElement(v.Workshop, {
			className: H.Icon,
		}),
		strToken: "#Downloads_ContentType_Workshop",
		active: a && e.overview.update_is_workshop,
		completed:
			e.item.update_type_info[d.$6.k_EAppUpdateContentType_Workshop].completed,
	};
	const l = {
		elIcon: i.createElement(v.Shader, {
			className: H.Icon,
		}),
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
			o.extraNameContent = i.createElement(de, {
				appid: e.item.appid,
				publishedfileid: e.overview.update_publishedfileid,
			});
		}
		r.push(o);
		n = false;
	}
	const c = t || e.alwaysExpand;
	if (!n && r.length > 0) {
		return i.createElement(
			w.m9,
			{
				className: (0, B.A)(H.ContentTypes, c && H.Expanded),
				toolTipContent: i.createElement(me, {
					rgIcons: r,
				}),
				direction: "top",
			},
			!c &&
				i.createElement(v.Information, {
					className: H.Icon,
				}),
			c &&
				i.createElement(ue, {
					rgIcons: r,
				}),
		);
	} else {
		return null;
	}
};
const pe = (e) => {
	let t;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"span",
			{
				className: H.Name,
			},
			e.app.display_name,
		),
		t,
	);
};
function ge(e) {
	const { overview: t } = e;
	const r = (0, g.oA)();
	const [n] = (0, h.VI)("download_throttle_rate");
	if (!n || t.lan_peer_hostname.length) {
		return i.createElement(
			"div",
			{
				className: (0, B.A)(H.Throttle, H.Empty),
			},
			"\xA0",
		);
	} else {
		return i.createElement(
			"div",
			{
				className: (0, B.A)(
					H.Throttle,
					t.throttling_suspended && H.Suspended,
					r && H.ParentalLocked,
				),
				onClick: eo,
			},
			(0, S.we)("#Downloads_Throttle"),
			"\xA0",
			i.createElement(
				"span",
				{
					className: H.ThrottleValue,
				},
				(0, R.ZC)((n * 1000) / 8),
			),
			t.throttling_suspended &&
				i.createElement(
					"span",
					{
						className: H.Suspended,
					},
					"\xA0(",
					(0, S.we)("#Downloads_ThrottleSuspended"),
					")",
				),
		);
	}
}
const he = (0, s.PA)(function (e) {
	const { item: t } = e;
	const { data: r } = (0, p.dZ)(t);
	if (r && r.length) {
		const e = r?.length && r[0].clan_event_gid;
		return i.createElement(
			z.N_,
			{
				className: H.PatchNotes,
				to: (0, U.tf)(U.BV.Downloads(), t.appid, e),
			},
			i.createElement(v.Scratchpad, {
				className: H.Icon,
			}),
			i.createElement(
				"div",
				{
					className: H.Text,
				},
				(0, S.we)("#Downloads_PatchNotes"),
			),
		);
	}
	return null;
});
const Ce = (e) => {
	const { item: t, app: r, index: n, section: a, autoFocus: s, ...o } = e;
	const c = !t.completed;
	const m = (0, x.W6)();
	const d = (0, u.Qn)();
	const A = (0, q.br)();
	return i.createElement(
		l.sx,
		{
			key: "Download_" + r.appid,
			draggableId: String(r.appid),
			index: n,
			isDragDisabled: !c,
			...o,
		},
		(t, r) =>
			i.createElement(_e, {
				...e,
				provided: t,
				snapshot: r,
				history: m,
				autoFocus: s,
				bInGamepadUI: d,
				navigator: A,
			}),
	);
};
const _e = (0, s.PA)(function (e) {
	const {
		provided: t,
		snapshot: r,
		history: n,
		navigator: a,
		bInGamepadUI: s,
		...o
	} = e;
	const {
		item: l,
		app: c,
		index: m,
		section: u,
		autoFocus: d,
		onFocus: g,
		onBlur: h,
		...C
	} = o;
	const [_, f] = i.useState(false);
	const b = l.appid;
	(0, A.T)(c.appid);
	const y = i.useCallback(
		(e) => {
			SteamClient.Downloads.ResumeAppUpdate(b);
			if (e) {
				e.stopPropagation();
			}
		},
		[b],
	);
	i.useCallback(
		(e) => {
			SteamClient.Downloads.QueueAppUpdate(b);
			if (e) {
				e.stopPropagation();
			}
		},
		[b],
	);
	const w = i.useCallback(
		(e) => {
			Ie(l);
			if (e) {
				e.stopPropagation();
			}
		},
		[l],
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
			a.App(b);
			if (e) {
				e.stopPropagation();
			}
		},
		[a, b],
	);
	const R = i.useCallback(
		(e) => {
			const t = (0, j.uX)(e);
			(0, G.jy)("Play", c, "local", 1001, t)();
			if (e) {
				e.stopPropagation();
			}
		},
		[c],
	);
	const k = i.useCallback(() => {
		const e = X(l);
		const t = te(l, c, e);
		let r;
		let n =
			!s && u == Te.k_EDownloadSection_Completed && c.display_status == 11;
		let a =
			u != Te.k_EDownloadSection_NotQueued &&
			t != ee.k_EActive &&
			t != ee.k_EActiveDownloading;
		if (t == ee.k_EUpdatesDisabledByApp) {
			n = false;
			a = false;
			r = null;
		} else if (u != Te.k_EDownloadSection_Active || e.paused) {
			if (u == Te.k_EDownloadSection_Active && e.paused) {
				r = {
					onClick: E,
					wrapperClass: H.ResumeWrapper,
					className: H.Resume,
					toolTip: "#Downloads_Resume_Tooltip",
					icon: i.createElement(v.Play, null),
				};
			} else if (
				u == Te.k_EDownloadSection_Queued ||
				u == Te.k_EDownloadSection_Scheduled ||
				u == Te.k_EDownloadSection_NotQueued
			) {
				r = {
					onClick: y,
					wrapperClass: H.MoveToTopWrapper,
					className: H.MoveToTop,
					toolTip:
						t == ee.k_EError
							? "#Downloads_Retry_Tooltip"
							: "#Downloads_MoveToTop_Tooltip",
					icon:
						t == ee.k_EError
							? i.createElement(v.Reload, null)
							: i.createElement(v.Download, null),
				};
			} else if (u == Te.k_EDownloadSection_Completed) {
				r = {
					onClick: n ? R : M,
					toolTip: (0, S.we)(
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
				icon: i.createElement(v.Pause, null),
			};
		}
		return {
			buttonData: r,
			bShowRemoveButton: a,
			bShowPlayButton: n,
			onRemoveFromDownloadList: w,
		};
	}, [y, M, R, w, E, c, s, l, u]);
	const D = i.useCallback(
		(e) => {
			const { bShowRemoveButton: t } = k();
			(0, N.lX)(
				i.createElement(Ee, {
					app: c,
					item: l,
					navigator: a,
					bShowRemoveButton: t,
					history: n,
					ownerWindow: (0, j.uX)(e),
				}),
				e,
				(0, G.zq)(),
			);
		},
		[c, l, n, a, k],
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
	const P = s;
	const z =
		u != Te.k_EDownloadSection_Active || r.isDragging
			? t.draggableProps.style
			: {};
	return i.createElement(
		T.Z,
		{
			className: (0, B.A)(
				H.SectionItemWrapper,
				r.isDragging && H.Dragging,
				_ && H.Autofocused,
			),
			noFocusRing: true,
			focusable: true,
			autoFocus: d,
			onContextMenu: F,
			onMenuButton: D,
			"flow-children": "row",
			ref: t.innerRef,
			onGamepadFocus: (e) => {
				f(e.detail.focusSource == L.D$.APPLICATION);
			},
			onGamepadBlur: (e) => {
				f(false);
			},
			onFocus: g,
			onBlur: h,
			onOKButton: O.buttonData
				? () => {
						O.buttonData.onClick(undefined);
					}
				: undefined,
			onOKActionDescription: O.buttonData
				? (0, S.we)(O.buttonData.toolTip)
				: undefined,
			onMenuActionDescription: (0, S.we)("#ActionButtonLabelContextMenu"),
			...t.draggableProps,
			...(P ? {} : t.dragHandleProps),
			style: z,
		},
		i.createElement(Be, {
			app: c,
			bIsDragging: r.isDragging,
			bInGamepadUI: s,
			dragHandleProps: P ? t.dragHandleProps : undefined,
			buttonProps: O,
			...o,
			...C,
		}),
	);
});
const fe = (0, s.PA)(function (e) {
	const { item: t, app: r, bInGamepadUI: n, overview: a } = e;
	return i.createElement(
		"div",
		{
			className: H.DownloadItemName,
		},
		i.createElement(
			"div",
			{
				className: H.Name,
			},
			i.createElement(pe, {
				item: t,
				app: r,
				overview: a,
			}),
			!n &&
				i.createElement(Ae, {
					item: t,
					app: r,
					overview: a,
				}),
		),
	);
});
const be = (0, s.PA)(function (e) {
	const { item: t, app: r, section: n, overview: a } = e;
	const s = te(t, r, a);
	const [o, l] = t.active && (0, p.bm)(a) ? (0, p.vO)(a) : (0, p.vH)(t);
	return i.createElement(
		"div",
		{
			className: (0, B.A)(H.DetailsAndType),
		},
		n == Te.k_EDownloadSection_Active &&
			i.createElement(ge, {
				overview: a,
			}),
		n != Te.k_EDownloadSection_Active &&
			i.createElement(le, {
				currentBytes: o,
				totalBytes: l,
				active: t.active,
			}),
		s != ee.k_EUpdatesDisabledByUser &&
			i.createElement(ve, {
				app: r,
			}),
		i.createElement(he, {
			item: t,
		}),
	);
});
function ye(e) {
	const { itemAndAppProps: t, buttonProps: r } = e;
	const n = (0, p.zM)();
	return i.createElement(
		"div",
		{
			className: (0, B.A)(
				H.ActiveItemRightColumn,
				H.SectionItemColumn,
				H.NameSection,
				H.Left,
			),
		},
		i.createElement(R.mr, null),
		t &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(be, {
					...t,
					overview: n,
				}),
				i.createElement(se, {
					...t,
					className: (0, B.A)(H.Right),
				}),
				i.createElement(
					"div",
					{
						className: H.Bottom,
					},
					i.createElement(
						"div",
						{
							className: H.TimeRemaining,
						},
						n.update_seconds_remaining >= 0 &&
							n.update_seconds_remaining < Z.Kp.PerMonth &&
							i.createElement(
								"span",
								null,
								(0, S.PP)(
									"#Downloads_Time_Remaining",
									i.createElement(
										"span",
										{
											className: H.StartTime,
										},
										p.hj.LocalizeTimeRemaining(n.update_seconds_remaining),
									),
								),
							),
					),
					i.createElement(oe, {
						...t,
						...r,
					}),
				),
			),
	);
}
const Se = (0, s.PA)(function (e) {
	const {
		bIsDragging: t,
		bInGamepadUI: r,
		dragHandleProps: n,
		buttonProps: a,
		...s
	} = e;
	const { item: o, app: l, index: c, section: m, autoFocus: u, ...d } = s;
	const A = (0, q.br)();
	const g = (0, p.zM)();
	const h =
		l &&
		i.createElement(k.z, {
			app: l,
			eAssetType: 4,
			className: H.DownloadGameIcon,
		});
	const C = i.createElement(
		"div",
		{
			className: H.GameIconAndName,
		},
		h,
		i.createElement("div", {
			className: H.DownloadGameIconBevel,
		}),
		i.createElement(fe, {
			...s,
			bInGamepadUI: r,
			overview: g,
		}),
	);
	return i.createElement(
		"div",
		{
			className: H.DownloadSectionActiveItem,
		},
		i.createElement(
			R.b4,
			{
				className: H.DownloadGraph,
				appidTopOfQueue: l.appid,
				appidOverride: l.appid,
				nameElement: C,
				onClick: () => A.App(o.appid),
			},
			i.createElement(Ae, {
				item: o,
				app: l,
				overview: g,
				alwaysExpand: true,
			}),
		),
		i.createElement(ye, {
			itemAndAppProps: s,
			buttonProps: a,
		}),
		i.createElement("div", {
			className: H.HoverRing,
		}),
		i.createElement(we, {
			dragHandleProps: n,
		}),
	);
});
function we(e) {
	const { dragHandleProps: t } = e;
	return i.createElement(
		"div",
		{
			className: H.DragHandle,
			...t,
		},
		i.createElement(v.Rows, null),
	);
}
const Be = (0, s.PA)(function (e) {
	const {
		bIsDragging: t,
		bInGamepadUI: r,
		dragHandleProps: n,
		buttonProps: a,
		...s
	} = e;
	const { item: o, app: l, index: c, section: m, autoFocus: u, ...d } = s;
	const A = X(o);
	const p = te(o, l, A);
	const g = !o.completed && p != ee.k_EUpdatesDisabledByApp;
	const h = m == Te.k_EDownloadSection_Active;
	return i.createElement(
		"div",
		{
			className: (0, B.A)(H.SectionItem, t && H.Dragging, h && H.Active),
			...d,
		},
		i.createElement(
			"div",
			{
				className: H.SectionItemContent,
			},
			!h &&
				i.createElement(
					i.Fragment,
					null,
					i.createElement(
						"div",
						{
							className: H.AppPortrait,
						},
						i.createElement(_.TK, {
							app: l,
							bFeatured: true,
							bHideFooter: true,
							bHideBanners: true,
							bShowFriendsAsIcons: false,
							context: 6,
						}),
					),
					i.createElement(
						"div",
						{
							className: H.SectionItemCenter,
						},
						i.createElement(
							"div",
							{
								className: (0, B.A)(H.SectionItemColumn, H.NameSection, H.Left),
							},
							i.createElement(fe, {
								...s,
								bInGamepadUI: r,
								overview: A,
							}),
							i.createElement(be, {
								...s,
								overview: A,
							}),
							r &&
								i.createElement(Ae, {
									item: o,
									app: l,
									overview: A,
								}),
						),
						i.createElement(se, {
							...s,
							className: (0, B.A)(H.SectionItemColumn, H.Right),
						}),
					),
					i.createElement(oe, {
						...s,
						...a,
					}),
				),
			h &&
				i.createElement(Se, {
					...e,
				}),
			!h &&
				g &&
				i.createElement(we, {
					dragHandleProps: n,
				}),
		),
	);
});
let ve = class extends i.Component {
	OpenAppAutoUpdateSettings() {
		SteamClient.Apps.OpenAppSettingsDialog(this.props.app.appid, "updates");
	}
	getDefaultAppUpdateSettingLocString(e) {
		if (e === 1) {
			return (0, S.we)("#Downloads_AutoUpdate_DoNotUpdate");
		} else {
			return "";
		}
	}
	LocalizeAutoUpdateBehavior(e, t) {
		switch (e) {
			case 0:
				return this.getDefaultAppUpdateSettingLocString(t);
			case 1:
				return (0, S.we)("#Downloads_AutoUpdate_DoNotUpdate");
			case 2:
				return (0, S.we)("#Downloads_AutoUpdate_HighPriority");
			case 3:
				return "";
		}
	}
	render() {
		const [e] = h.rV.GetClientSetting("default_app_update_behavior");
		const { app: t, className: r, ...n } = this.props;
		const a = A.H.GetAppDetails(t.appid);
		const s = a && this.LocalizeAutoUpdateBehavior(a.eAutoUpdateValue, e);
		if (s) {
			return i.createElement(
				"div",
				{
					className: (0, B.A)(H.AutoUpdateSettings, r),
					onClick: this.OpenAppAutoUpdateSettings,
					...n,
				},
				s,
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
	const {
		app: t,
		item: r,
		navigator: n,
		bShowRemoveButton: a,
		history: s,
		ownerWindow: o,
	} = e;
	const l = (0, u.Qn)();
	const { data: c } = (0, p.dZ)(r);
	const [m] = (0, h.VI)("download_throttle_rate");
	const A = () =>
		SteamClient.Downloads.SuspendDownloadThrottling(
			!p.hj.DownloadOverview.throttling_suspended,
		);
	const g = [];
	if (r.queue_index == 0) {
		const e = () =>
			SteamClient.Downloads.SetLaunchOnUpdateComplete(
				r.launch_on_completion ? D.sc : r.appid,
			);
		g.push(
			i.createElement(
				F.kt,
				{
					key: "launch-on-complete",
					className: H.ContextMenuItem,
					onSelected: e,
				},
				i.createElement(
					"span",
					null,
					i.createElement(v.Checkmark, {
						className: (0, B.A)(
							H.LaunchOnCompletion,
							r.launch_on_completion && H.Active,
						),
					}),
				),
				(0, S.we)("#Downloads_LaunchWhenComplete"),
			),
		);
		if (m > 0) {
			g.push(
				i.createElement(
					F.kt,
					{
						key: "suspend-throttle",
						className: H.ContextMenuItem,
						onSelected: A,
					},
					i.createElement(
						"span",
						null,
						i.createElement(v.Checkmark, {
							className: (0, B.A)(
								H.LaunchOnCompletion,
								p.hj.DownloadOverview.throttling_suspended && H.Active,
							),
						}),
					),
					(0, S.we)("#Downloads_OverrideDownloadThrottle"),
				),
			);
		}
	}
	if (a) {
		g.push(
			i.createElement(
				F.kt,
				{
					key: "remove-from-downloadlist",
					className: H.ContextMenuItem,
					onSelected: () => Ie(r),
				},
				(0, S.we)(
					r.completed
						? "#Downloads_RemoveFromList_Tooltip"
						: "#Downloads_RemoveFromQueue_Tooltip",
				),
			),
		);
	}
	if (r.update_type_info[d.$6.k_EAppUpdateContentType_Workshop].has_update) {
		g.push(
			i.createElement(
				F.kt,
				{
					key: "workshop-items",
					className: H.ContextMenuItem,
					onSelected: (e) =>
						C.B7.NavigateToSteamURLInOwningWindow(
							e,
							"SteamWorkshopUpdatedSubscriptions",
							r.appid,
						),
				},
				(0, S.we)("#Downloads_ViewSubscriptions"),
			),
		);
	}
	if (c && c.length > 0) {
		g.push(
			i.createElement(
				F.kt,
				{
					key: "patch-notes",
					className: H.ContextMenuItem,
					onSelected: () =>
						s.push(U.BV.Downloads(), (0, U.KV)(r.appid, c[0].clan_event_gid)),
				},
				(0, S.we)("#Downloads_ViewPatchNotes"),
			),
		);
	}
	g.push(
		i.createElement(
			F.kt,
			{
				key: "view-in-library",
				className: H.ContextMenuItem,
				onSelected: () => n.App(r.appid),
			},
			(0, S.we)("#Generic_ViewInLibrary"),
		),
	);
	if (g.length > 0) {
		g.push(
			i.createElement(F.K5, {
				key: "download-list-separator",
			}),
		);
	}
	return i.createElement(G.uU, {
		overview: t,
		client: "local",
		launchSource: 1001,
		bInGamepadUI: l,
		additionalActions: g,
		ownerWindow: o,
	});
}
function Me(e) {
	const { eSection: t } = e;
	return i.createElement(
		"div",
		{
			className: H.EmptyTransfers,
		},
		i.createElement(
			"div",
			{
				className: H.Text,
			},
			(0, S.we)("#Downloads_NoTransfers"),
		),
		t == Te.k_EDownloadSection_Active &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(R.b4, {
					className: H.DownloadGraph,
					appidTopOfQueue: 0,
					appidOverride: 0,
					nameElement: undefined,
				}),
				i.createElement(ye, null),
			),
	);
}
var Te;
(0, n.Cg)([b.oI], ve.prototype, "OpenAppAutoUpdateSettings", null);
ve = (0, n.Cg)([s.PA], ve);
(function (e) {
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
		case Te.k_EDownloadSection_Queued:
			return "#Downloads_Section_Current";
		case Te.k_EDownloadSection_Scheduled:
			return "#Downloads_Section_Scheduled";
		case Te.k_EDownloadSection_NotQueued:
			return "#Downloads_Section_NotQueued";
		case Te.k_EDownloadSection_Completed:
			return "#Downloads_Section_Completed";
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
		return "DownloadListSection_" + this.props.eSection;
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
			eSection: e,
			storage: t,
			bFirstSection: r,
			bIsDroppable: n,
			items: a,
			nStartIndex: s,
			innerRef: o,
			className: m,
			onItemClick: u,
			onItemFocus: d,
			bInGamepadUI: A,
			...p
		} = this.props;
		const g = a
			? a.map((t, n) => ({
					item: t,
					app: c.tw.GetAppOverviewByAppID(t.appid),
					index: t.queue_index,
					section: e,
					autoFocus: r && n == 0,
				}))
			: [];
		const h = g.length == 0 && e != Te.k_EDownloadSection_Queued;
		const C = g.length == 0 && e == Te.k_EDownloadSection_Queued;
		const _ = g.map((e, t) =>
			i.createElement(Ce, {
				key: e.app.appid,
				...e,
				index: t + s,
				onClick: () => this.props.onItemClick(e.app.appid),
				onFocus: () => d(t),
			}),
		);
		const f = ke(e);
		const b = (0, B.A)(
			m,
			H.Section,
			h && H.Empty,
			C && H.EmptyQueue,
			e == Te.k_EDownloadSection_Active && H.Active,
			e == Te.k_EDownloadSection_Completed && H.Completed,
		);
		if (A && h) {
			return i.createElement("div", {
				className: b,
				...p,
				ref: o,
			});
		} else {
			return i.createElement(
				T.Z,
				{
					focusable: false,
					className: b,
					...p,
					ref: o,
					navEntryPreferPosition: W.iU.MAINTAIN_Y,
				},
				i.createElement(Ne, {
					sectionTitle: f,
					count: _.length,
					collapsed: this.state.bCollapsed,
					onToggleCollapsed: this.ToggleCollapsed,
					showHours: e == Te.k_EDownloadSection_Queued,
					showRemoveButton: e == Te.k_EDownloadSection_Completed,
					onRemove: this.RemoveAll,
				}),
				!this.state.bCollapsed &&
					i.createElement(
						l.gL,
						{
							droppableId: String(e),
							isDropDisabled: !n,
						},
						(t, r) =>
							i.createElement(Fe, {
								eSection: e,
								bIsDroppable: n,
								bIsDraggingOver: r.isDraggingOver,
								bEmptyQueue: C,
								rgElements: _,
								provided: t,
							}),
					),
			);
		}
	}
};
(0, n.Cg)([b.oI], De.prototype, "ToggleCollapsed", null);
(0, n.Cg)([b.oI], De.prototype, "RemoveAll", null);
De = (0, n.Cg)([s.PA], De);
const Ne = (e) =>
	e.sectionTitle &&
	i.createElement(
		"div",
		{
			className: H.SectionTitle,
			onClick: e.onToggleCollapsed,
		},
		i.createElement(
			"div",
			{
				className: (0, B.A)(H.TitleAndCount, Re),
			},
			Re,
			i.createElement(
				"span",
				{
					className: H.Title,
				},
				(0, S.we)(e.sectionTitle),
				"\xA0",
			),
			i.createElement(
				"span",
				{
					className: H.Count,
				},
				"(",
				e.count,
				")",
			),
		),
		i.createElement("div", {
			className: H.Rule,
		}),
		e.showHours && i.createElement($, null),
		e.showRemoveButton &&
			i.createElement(
				a.$n,
				{
					className: H.RemoveAllButton,
					onClick: e.onRemove,
				},
				(0, S.we)("#Downloads_RemoveAll"),
			),
	);
function Fe(e) {
	const {
		eSection: t,
		bIsDroppable: r,
		bIsDraggingOver: n,
		bEmptyQueue: a,
		rgElements: s,
		provided: o,
	} = e;
	return i.createElement(
		"div",
		{
			className: (0, B.A)(H.SectionList, r && H.DropOption, n && H.DragOver),
			...o.droppableProps,
			ref: o.innerRef,
		},
		s,
		s.length == 0 &&
			i.createElement(Me, {
				eSection: t,
			}),
		i.createElement(
			"span",
			{
				className: (0, B.A)(H.PlaceHolder, a && H.Empty),
			},
			o.placeholder,
		),
	);
}
const Ge = i.forwardRef(function (e, t) {
	return i.createElement(De, {
		...e,
		innerRef: t,
	});
});
var Oe;
(function (e) {
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
			(0, M.w)(e !== -1, "Intersection target not in map");
			let i = Oe.OnScreen;
			if (t.boundingClientRect.height == 0) {
				i = Oe.Empty;
			} else if (t.boundingClientRect.bottom < t.rootBounds.top) {
				i = Oe.Above;
			} else if (t.boundingClientRect.top > t.rootBounds.bottom) {
				i = Oe.Below;
			}
			if (i != n.get(e)) {
				n.set(e, i);
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
				);
				else {
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
			case Te.k_EDownloadSection_Active:
				return (
					this.state.eDragSource == Te.k_EDownloadSection_Active ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled ||
					this.state.eDragSource == Te.k_EDownloadSection_NotQueued
				);
			case Te.k_EDownloadSection_Queued:
				return (
					(this.state.eDragSource == Te.k_EDownloadSection_Active &&
						this.GetFilteredSectionItems(Te.k_EDownloadSection_Queued)?.length >
							1) ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled ||
					this.state.eDragSource == Te.k_EDownloadSection_NotQueued
				);
			case Te.k_EDownloadSection_Scheduled:
				return false;
			case Te.k_EDownloadSection_NotQueued:
				return (
					this.state.eDragSource == Te.k_EDownloadSection_Active ||
					this.state.eDragSource == Te.k_EDownloadSection_Queued ||
					this.state.eDragSource == Te.k_EDownloadSection_Scheduled
				);
			case Te.k_EDownloadSection_Completed:
				return false;
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
		const { bOffline: e } = this.props;
		const t = [];
		const r = [];
		const n = this.GetFilteredSectionItems(Te.k_EDownloadSection_Queued).slice(
			0,
			1,
		);
		let a = n.length;
		if (!e) {
			let e = true;
			this.state.mapSectionPositions.forEach((r, n) => {
				const a = ke(n);
				const s = this.GetFilteredSectionItems(n)?.length || 0;
				const o = e && r == Oe.Below;
				if (o) {
					e = false;
				}
				t.push(
					i.createElement(
						"div",
						{
							key: "jumpbar_" + n,
							className: (0, B.A)(H.SectionJumpBar, o && H.Show),
							onClick: () => {
								this.JumpToSection(n);
							},
							style: {
								zIndex: 20 - n,
							},
						},
						i.createElement(
							"div",
							{
								className: H.TitleAndCount,
							},
							i.createElement(
								"span",
								{
									className: H.Title,
								},
								(0, S.we)(a),
								"\xA0",
							),
							i.createElement(
								"span",
								{
									className: H.Count,
								},
								"(",
								s,
								")",
							),
						),
						i.createElement(
							"div",
							{
								className: H.View,
							},
							(0, S.we)("#Downloads_View"),
						),
					),
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
					i.createElement(Ge, {
						key: "section_" + e,
						eSection: e,
						bFirstSection: a == 0,
						storage: this.m_storage,
						bIsDroppable: this.IsSectionDroppable(e),
						items: t,
						nStartIndex: e == Te.k_EDownloadSection_Queued ? 1 : 0,
						ref: this.m_rgelJumpBarSections[e],
						onItemClick: this.OnItemClick,
						onItemFocus: (t) => this.OnItemFocus(e, t),
						bInGamepadUI: this.props.bInGamepadUI,
					}),
				);
				a += t.length;
			}
		}
		if (!window.nDownloadHeaderAppid) {
			this.state.appidForceHeader;
		}
		if (!!e || !n || !n[0] || !n[0].appid) {
			D.sc;
		}
		let s = a > 0;
		let o = {
			focusable: !s,
			autoFocus: !s,
			noFocusRing: true,
		};
		return i.createElement(
			T.Z,
			{
				ref: this.SetRoot,
				className: (0, B.A)(
					H.DownloadsPage,
					this.props.bInGamepadUI && H.BasicUI,
				),
				...o,
			},
			i.createElement(
				l.JY,
				{
					onDragStart: this.OnDragStart,
					onDragEnd: this.OnDragEnd,
					stylesInsertionPoint: this.state.elRoot,
				},
				i.createElement(
					"div",
					{
						className: H.TopSection,
					},
					i.createElement(Ge, {
						eSection: Te.k_EDownloadSection_Active,
						storage: this.m_storage,
						bFirstSection: n.length > 0,
						bIsDroppable: this.IsSectionDroppable(Te.k_EDownloadSection_Active),
						items: n,
						nStartIndex: 0,
						ref: this.m_rgelJumpBarSections[Te.k_EDownloadSection_Active],
						onItemFocus: () =>
							this.OnItemFocus(Te.k_EDownloadSection_Active, 0),
						onItemClick: this.OnItemClick,
						bInGamepadUI: this.props.bInGamepadUI,
					}),
					i.createElement(R.q, {
						className: H.SettingsButton,
					}),
				),
				i.createElement(K, null),
				i.createElement("div", {
					className: H.TopBar,
				}),
				i.createElement(
					"div",
					{
						className: H.ItemListWrapper,
					},
					e &&
						i.createElement(
							"div",
							{
								className: H.OfflineWrapper,
							},
							i.createElement(P.t, null),
						),
					!e &&
						this.state.elRoot &&
						i.createElement(
							"div",
							{
								className: H.ItemListScrollWrapper,
							},
							i.createElement(
								"div",
								{
									className: H.ItemLists,
									ref: this.m_elScrollableContainer,
								},
								r,
							),
						),
					t,
				),
			),
		);
	}
}
export function lw(e) {
	const t = (0, o.q3)(() => (0, m.qw)().BIsOfflineMode());
	const r = (0, u.Qn)();
	return i.createElement(Pe, {
		bOffline: t,
		bInGamepadUI: r,
	});
}
(0, n.Cg)([b.oI], Pe.prototype, "SetRoot", null);
(0, n.Cg)([b.oI], Pe.prototype, "OnDownloadItemsUpdate", null);
(0, n.Cg)([b.oI], Pe.prototype, "OnIntersection", null);
(0, n.Cg)([b.oI], Pe.prototype, "JumpToSection", null);
(0, n.Cg)([b.oI], Pe.prototype, "OnDragStart", null);
(0, n.Cg)([b.oI], Pe.prototype, "OnDragEnd", null);
(0, n.Cg)([b.oI], Pe.prototype, "IsSectionDroppable", null);
(0, n.Cg)([b.oI], Pe.prototype, "OnItemClick", null);
(0, n.Cg)([b.oI], Pe.prototype, "OnItemFocus", null);
