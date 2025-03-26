export let ho = D.h;
var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./49519.js");
var o = require("./96593.js");
var l = require("./64608.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require("./34792.js");
var u = require("./70239.js");
var d = require("./78057.js");
import {
	Localize,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
var p = require(/*webcrack:missing*/ "./44846.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require("./3651.js");
var C = require("./51095.js");
var _ = require("./91486.js");
var f = require("./34428.js");
var b = require("./46422.js");
var y = require(/*webcrack:missing*/ "./26853.js");
var S = require(/*webcrack:missing*/ "./98995.js");
var w = require(/*webcrack:missing*/ "./90242.js");
var B = require("./87935.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var I = require("./49206.js");
var E = require("./63259.js");
var M = require("./18057.js");
var T = require("./76356.js");
var R = require("./73317.js");
var k = require("./88769.js");
var D = require("./44191.js");
var N = require("./22047.js");
var F = require(/*webcrack:missing*/ "./69164.js");
import { LocalizeRTimeToHourAndMinutes } from "../../actual_src/utils/localization/datetime.js";
var O = require("./12750.js");
var P = require("./7552.js");
var L = require("./81884.js");
var z = require("./50350.js");
var x = require("./79112.js");
var U = require("./29670.js");
var W = require("./78023.js");
var V = W;
var H = require("./22091.js");
var j = require("./85360.js");
var q = require("./69913.js");
var Q = require("./51517.js");
var Z = require("./55571.js");
var Y = require("./96000.js");
var K = require("./35488.js");
var X = require("./71594.js");
function J(e) {
	const { overview: t, details: r } = e;
	return n.createElement(
		l.nB,
		null,
		n.createElement(ee, {
			details: r,
		}),
		!t.BIsModOrShortcut() &&
			n.createElement($, {
				details: r,
			}),
		n.createElement(te, {
			details: r,
		}),
	);
}
function $(e) {
	const { details: t } = e;
	const r = (0, Z.Uy)(t.unAppID);
	const i = n.useMemo(() => t.vecDLC.map((e) => e.unAppID), [t]);
	const { mutate: a, isPending: s, variables: o } = (0, Z.DT)();
	const c = t.vecDLC.length > 0;
	const m = (0, Z.h0)(i, r);
	if (r === undefined) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(l.y4, {
				label: (0, Localize)("#AppProperties_Privacy_MarkAppPrivate"),
				checked: s ? o.bPrivate : r,
				bottomSeparator: c ? "none" : "standard",
				description: (0, Localize)(
					"#AppProperties_Privacy_MarkAppPrivate_Description",
				),
				onChange: (e) =>
					a({
						rgAppIDs: [t.unAppID, ...i],
						bPrivate: e,
					}),
			}),
			c &&
				n.createElement(re, {
					details: t,
					bMountExpanded: !m,
					rgDLCAppIDs: i,
				}),
		);
	}
}
function ee(e) {
	const { details: t } = e;
	const r = t.unAppID;
	const a = (0, i.q3)(() => Y.md.BIsHidden(r));
	const s = n.useCallback((e) => Y.md.SetAppsAsHidden([r], e), [r]);
	return n.createElement(l.y4, {
		label: (0, Localize)("#AppProperties_Privacy_MarkAppHidden"),
		checked: a,
		description: (0, Localize)(
			"#AppProperties_Privacy_MarkAppHidden_Description",
		),
		onChange: s,
	});
}
function te(e) {
	const { details: t } = e;
	const r = (0, g.Qn)();
	const i = n.useCallback(() => {
		(0, q.d3)(t.unAppID);
	}, [t.unAppID]);
	const [a, s, o] = (0, Q.M)({
		bCloseOnOK: true,
		onOK: i,
		strTitle: (0, Localize)("#AppProperties_OverlayData"),
		strDescription: (0, Localize)(
			"#AppProperties_OverlayData_DeleteConfirm",
			t.strDisplayName,
		),
	});
	if (r) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			a,
			n.createElement(
				l.xh,
				{
					className: V.SettingsDialogButton,
					label: (0, Localize)("#AppProperties_OverlayData"),
					description: (0, Localize)("#AppProperties_OverlayData_Desc"),
					onClick: s,
				},
				(0, Localize)("#AppProperties_OverlayData_Delete"),
			),
		);
	}
}
function re(e) {
	const { details: t, bMountExpanded: r, rgDLCAppIDs: i } = e;
	const [a, s] = n.useState(r);
	return n.createElement(l.D0, {
		childrenLayout: "inline",
		indentLevel: 1,
		description: n.createElement(
			n.Fragment,
			null,
			n.createElement(
				"div",
				{
					className: V.PrivacyDLCSection,
				},
				n.createElement(
					"div",
					{
						className: V.PrivacyDLCDescription,
					},
					n.createElement(ae, {
						rgDLCAppIDs: i,
					}),
				),
				n.createElement(
					l.wl,
					{
						className: (0, c.A)(V.PrefDetailsToggle, a && V.Selected),
						onClick: () => s(!a),
					},
					n.createElement(K.DoubleCarat, {
						direction: "down",
					}),
				),
			),
			n.createElement(
				X.R,
				{
					visible: a,
					className: V.PrivacyDLCList,
				},
				n.createElement(ne, {
					details: t,
				}),
			),
		),
	});
}
function ne(e) {
	const { details: t } = e;
	const { data: r } = (0, Z.Pt)();
	const i = n.useRef(undefined);
	if (r === undefined) {
		return null;
	} else {
		i.current ||= t.vecDLC.slice().sort((e, t) => {
			if (r.has(e.unAppID)) {
				if (!r.has(t.unAppID)) {
					return -1;
				}
			} else if (r.has(t.unAppID)) {
				return 1;
			}
			return e.strName.localeCompare(t.strName);
		});
		return i.current.map((e) =>
			n.createElement(ie, {
				key: e.unAppID,
				details: t,
				dlc: e,
			}),
		);
	}
}
function ie(e) {
	const { details: t, dlc: r } = e;
	const i = (0, Z.Uy)(r.unAppID);
	const { mutate: a, isPending: s, variables: o } = (0, Z.bD)(r.unAppID);
	return n.createElement(
		"div",
		{
			className: V.PrivacyDLCRow,
		},
		n.createElement(
			"div",
			{
				className: V.CheckboxCol,
			},
			n.createElement(l.Yh, {
				checked: s ? o : i,
				onChange: (e) => a(e),
			}),
		),
		n.createElement(
			"a",
			{
				href: B.B7.BuildSteamURL("StoreAppPage", r.unAppID),
				className: V.DLCTitleArea,
			},
			n.createElement(h.lx, {
				className: V.DlcArt,
				item: r,
				appidParent: t.unAppID,
			}),
			n.createElement(
				"div",
				{
					className: V.NameText,
				},
				r.strName,
			),
		),
	);
}
function ae(e) {
	const { rgDLCAppIDs: t } = e;
	const r = (0, Z.h0)(t, true);
	const n = (0, Z.h0)(t, false);
	if (r) {
		return (0, Localize)("#AppProperties_Privacy_DLC_MarkedPrivate");
	} else if (n) {
		return (0, Localize)("#AppProperties_Privacy_DLC_NotMarkedPrivate");
	} else {
		return (0, Localize)("#AppProperties_Privacy_DLC_Customized");
	}
}
var se = require(/*webcrack:missing*/ "./11131.js");
var oe = require(/*webcrack:missing*/ "./79671.js");
var le = require("./39002.js");
var ce = require(/*webcrack:missing*/ "./49455.js");
var me = require("./78110.js");
var ue = require(/*webcrack:missing*/ "./89193.js");
const de = new (class {
	mapDialogs = new ue.Es();
	constructor() {
		(0, ue.Gn)(this);
	}
	ShowDialog(e, t) {
		let r = this.mapDialogs.get(e);
		if (r) {
			r.popup?.SteamClient.Window.BringToFront();
		} else {
			r = {
				appid: e,
				page: t,
				popup: null,
			};
			this.mapDialogs.set(e, r);
		}
	}
	SetDialogPopup(e, t) {
		let r = this.mapDialogs.get(e);
		if (r) {
			r.popup = t;
		}
	}
	CloseDialog(e) {
		this.mapDialogs.delete(e);
	}
	GetDialogs() {
		return Array.from(this.mapDialogs.values());
	}
})();
var Ae = require("./4069.js");
var pe = require(/*webcrack:missing*/ "./55007.js");
var ge = require(/*webcrack:missing*/ "./88750.js");
var he = require(/*webcrack:missing*/ "./31084.js");
var Ce = require(/*webcrack:missing*/ "./52451.js");
var _e = require("./10606.js");
var fe = require("./45309.js");
var be = require("./48289.js");
var ye = require(/*webcrack:missing*/ "./8573.js");
var Se = require("./89748.js");
var we = require("./24460.js");
var Be = require("./68608.js");
var ve = require("./57016.js");
var Ie = require("./50341.js");
var Ee = require("./96555.js");
var Me = require("./67429.js");
var Te = require("./52808.js");
var Re = require("./18869.js");
var ke = require("./37086.js");
function De(e) {
	const t = (0, Re.br)();
	const [r] = (0, m.VI)("g_background_mode");
	const i = n.createElement(Ae.ForegroundRecordingShortcut, {
		fallbackTextToken:
			"#AppProperties_GameRecording_GlobalStatus_ManualHotkeyFallback",
	});
	const a = {
		1: (0, Localize)("#AppProperties_GameRecording_GlobalStatus_Background"),
		2: LocalizeReact("#AppProperties_GameRecording_GlobalStatus_Manual", i),
		0: (0, Localize)("#AppProperties_GameRecording_GlobalStatus_Never"),
	};
	const s = n.createElement(
		"div",
		{
			style: {
				whiteSpace: "pre-line",
			},
		},
		a[r],
	);
	return n.createElement(
		ke.oN,
		{
			feature: 7,
			label: (0, Localize)("#AppProperties_GameRecording_GlobalStatus"),
			description: s,
			onClick: () => t.Settings("GameRecording"),
		},
		(0, Localize)("#AppProperties_GameRecording_GlobalStatus_Button"),
	);
}
function Ne(e) {
	const { gameID: t, disabled: r = false } = e;
	const { isError: i, isLoading: a, bEnabled: s } = (0, Te.Mm)(t);
	const o = (0, Te.lE)();
	const c = (0, Te.$k)(t);
	const m = s && !r;
	const u = [
		{
			label: (0, Localize)("#AppProperties_GameRecording_Enabled"),
			data: true,
		},
		{
			label: (0, Localize)("#AppProperties_GameRecording_Disabled"),
			data: false,
		},
	];
	const d = n.useCallback(
		(e) => {
			const r = !!e.data;
			if (r !== s) {
				if (r) {
					c.mutate();
				} else {
					o.mutate({
						gameID: t,
						enabled: false,
					});
				}
			}
		},
		[s, c, o, t],
	);
	if (i || a) {
		return null;
	}
	const p = m
		? (0, Localize)("#AppProperties_GameRecording_Enabled_Description")
		: (0, Localize)("#AppProperties_GameRecording_Disabled_Description");
	return n.createElement(l.Vb, {
		label: (0, Localize)("#AppProperties_GameRecording_Enabled_Label"),
		description: p,
		rgOptions: u,
		selectedOption: m,
		disabled: r,
		onChange: d,
	});
}
function Fe(e) {
	const { gameID: t } = e;
	const { isError: r, isLoading: i, bEnabled: a } = (0, Te.Mm)(t);
	if (r || i) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(Ne, {
				gameID: t,
			}),
			a &&
				n.createElement(Ae.PerGameRecordingSettings, {
					gameID: t,
					bShowGameName: false,
				}),
		);
	}
}
function Ge(e) {
	return n.createElement(n.Fragment, null);
}
function Oe(e) {
	return n.createElement(Ne, {
		gameID: e.gameID,
		disabled: true,
	});
}
function Pe(e) {
	const [t] = (0, m.VI)("g_background_mode");
	const r = {
		1: Fe,
		2: Ge,
		0: Oe,
	}[t];
	return n.createElement(r, {
		...e,
	});
}
function Le(e) {
	const { overview: t, details: r } = e;
	const i = new Me.VS(t.gameid);
	return n.createElement(
		l.nB,
		null,
		n.createElement(De, null),
		n.createElement(Pe, {
			gameID: i,
		}),
	);
}
export function eJ(e) {
	const t = (0, i.q3)(() => de.GetDialogs());
	if ((0, g.hf)()) {
		return n.createElement(
			n.Fragment,
			null,
			t.map((e) =>
				n.createElement(We, {
					key: e.appid,
					appId: e.appid,
					startingPage: e.page,
					closeModal: () => de.CloseDialog(e.appid),
				}),
			),
		);
	} else {
		return null;
	}
}
export function Ki(e, t) {
	const { navigate: r, ownerWindow: n } = t;
	if (e === "gamepad" || e === "gamepadoverlay") {
		return (e, t = D.h.General) => r(b.Y_[t](e));
	} else {
		return async (e, t) => {
			if (!o.tw.GetAppOverviewByAppID(e)) {
				throw "App not found";
			}
			await d.H.RequestAppDetails(e);
			de.ShowDialog(e, t);
		};
	}
}
function Ue(e) {
	const { appId: t } = e;
	const r = (0, d.T)(t);
	const i = o.tw.GetAppOverviewByAppID(t);
	const a = O.yX.BAllowDeckCompatibilityFeedback(t);
	(0, g.uI)();
	const s = (0, g.Qn)();
	if (!r) {
		return n.createElement(
			w.ml,
			{
				noFocusRing: true,
				className: V.ThrobberContainer,
			},
			n.createElement(y.t, {
				size: "xlarge",
			}),
		);
	}
	const l = [];
	if (i.app_type === 1073741824) {
		l.push({
			title: (0, Localize)("#AppProperties_ShortcutPage"),
			route: M.BV.AppProperties.Shortcut(),
			link: M.BV.AppProperties.Shortcut(t),
			content: n.createElement(Nt, {
				appId: r.unAppID,
			}),
		});
		if ((0, g.CI)()) {
			l.push({
				title: (0, Localize)("#AppProperties_CompatibilityPage"),
				route: M.BV.AppProperties.Compatibility(),
				link: M.BV.AppProperties.Compatibility(t),
				content: n.createElement($e, {
					details: r,
				}),
			});
		}
		l.push({
			title: (0, Localize)("#AppProperties_ControllerPage"),
			route: M.BV.AppProperties.Controller(),
			link: M.BV.AppProperties.Controller(t),
			content: n.createElement(gt, {
				details: r,
			}),
		});
		if ((0, Ae.BGameRecordingFeatureEnabled)()) {
			l.push({
				title: (0, Localize)("#AppProperties_GameRecording"),
				route: M.BV.AppProperties.GameRecording(),
				link: M.BV.AppProperties.GameRecording(t),
				content: n.createElement(Le, {
					overview: i,
					details: r,
				}),
			});
		}
	} else {
		l.push({
			title: (0, Localize)("#AppProperties_GeneralPage"),
			route: M.BV.AppProperties.General(),
			link: M.BV.AppProperties.General(t),
			content: n.createElement(He, {
				details: r,
			}),
		});
		if ((0, g.CI)()) {
			l.push({
				title: (0, Localize)("#AppProperties_CompatibilityPage"),
				route: M.BV.AppProperties.Compatibility(),
				link: M.BV.AppProperties.Compatibility(t),
				content: n.createElement($e, {
					details: r,
				}),
			});
		}
		l.push({
			title: (0, Localize)("#AppProperties_UpdatesPage"),
			route: M.BV.AppProperties.Updates(),
			link: M.BV.AppProperties.Updates(t),
			content: n.createElement(tt, {
				details: r,
			}),
		});
		if (r.bHasAnyLocalContent && !i.BIsModOrShortcut()) {
			l.push({
				title: (0, Localize)("#AppProperties_LocalFilesPage"),
				route: M.BV.AppProperties.LocalFiles(),
				link: M.BV.AppProperties.LocalFiles(t),
				content: n.createElement(lt, {
					details: r,
				}),
			});
		}
		if (r.vecBetas.length > 0 || r.bHasLockedPrivateBetas) {
			l.push({
				title: (0, Localize)("#AppProperties_BetasPage"),
				route: M.BV.AppProperties.Betas(),
				link: M.BV.AppProperties.Betas(t),
				content: n.createElement(ut, {
					details: r,
				}),
			});
		}
		l.push({
			title: (0, Localize)("#AppProperties_ControllerPage"),
			route: M.BV.AppProperties.Controller(),
			link: M.BV.AppProperties.Controller(t),
			content: n.createElement(gt, {
				details: r,
			}),
		});
		if (r.vecDLC.length > 0) {
			l.push({
				title: (0, Localize)("#AppProperties_DLCPage"),
				route: M.BV.AppProperties.DLC(),
				link: M.BV.AppProperties.DLC(t),
				content: n.createElement(ft, {
					details: r,
				}),
			});
		}
		if (r.bWorkshopVisible) {
			l.push({
				title: (0, Localize)("#AppProperties_WorkshopPage"),
				route: M.BV.AppProperties.Workshop(),
				link: M.BV.AppProperties.Workshop(t),
				content: n.createElement(Rt, {
					details: r,
				}),
			});
		}
		if ((0, Ae.BGameRecordingFeatureEnabled)()) {
			l.push({
				title: (0, Localize)("#AppProperties_GameRecording"),
				route: M.BV.AppProperties.GameRecording(),
				link: M.BV.AppProperties.GameRecording(t),
				content: n.createElement(Le, {
					overview: i,
					details: r,
				}),
			});
		}
		l.push({
			title: (0, Localize)("#AppProperties_PrivacyPage"),
			route: M.BV.AppProperties.Privacy(),
			link: M.BV.AppProperties.Privacy(t),
			content: n.createElement(J, {
				overview: i,
				details: r,
			}),
		});
		if (a) {
			l.push({
				title: (0, Localize)("#AppProperties_FeedbackPage"),
				route: M.BV.AppProperties.Feedback(),
				link: M.BV.AppProperties.Feedback(t),
				content: n.createElement(Ft, {
					appId: t,
				}),
			});
		}
	}
	return n.createElement(N.q, {
		className: (0, c.A)(V.AppProperties, s && V.GamepadUI),
		title: i.display_name,
		pages: l,
		showTitle: true,
	});
}
function We(e) {
	const { closeModal: t, appId: r, ...i } = e;
	const [a, s] = n.useState();
	const l = (0, o.Co)(r);
	const c = (b.Y_[e.startingPage] || M.BV.AppProperties.General)(r);
	if (l) {
		return n.createElement(
			me.w,
			{
				strTitle: l.display_name,
				onDismiss: t,
				refPopup: (e) => {
					if (e) {
						de.SetDialogPopup(r, e);
					}
					s(e);
				},
				popupWidth: 842,
				popupHeight: 601,
				minWidth: 842,
				minHeight: 601,
				resizable: true,
				modal: false,
			},
			n.createElement(
				M.Cc,
				{
					initialRoute: c,
				},
				n.createElement(Ue, {
					...i,
					appId: r,
				}),
			),
		);
	} else {
		return null;
	}
}
export function Z0() {
	const { appId: e } = (function () {
		const { appid: e } = (0, s.g)();
		return {
			appId: parseInt(e),
		};
	})();
	return n.createElement(
		z.dj,
		null,
		n.createElement(Ue, {
			appId: e,
		}),
	);
}
function He(e) {
	const { details: t } = e;
	const [r] = (0, m.VI)("enable_overlay");
	const i = (0, g.Qn)();
	return n.createElement(
		l.nB,
		null,
		n.createElement(
			l.G5,
			null,
			n.createElement(l.y4, {
				label: (0, Localize)("#AppProperties_EnableOverlay"),
				checked: t.bOverlayEnabled && r,
				onChange: () =>
					SteamClient.Apps.ToggleEnableSteamOverlayForApp(t.unAppID),
				disabled: !r,
			}),
		),
		n.createElement(ct, {
			details: t,
		}),
		i &&
			n.createElement(Ye, {
				details: t,
			}),
		n.createElement(
			l.G5,
			null,
			n.createElement(Ke, {
				details: t,
			}),
		),
		n.createElement(
			l.G5,
			null,
			n.createElement(
				"div",
				{
					className: V.Title,
				},
				(0, Localize)("#AppProperties_LaunchOptionsSection"),
			),
			n.createElement(Qe, {
				details: t,
			}),
			n.createElement(
				"div",
				{
					className: (0, c.A)(V.Detail),
				},
				(0, Localize)("#AppProperties_LaunchOptionsDescription"),
			),
			n.createElement(Gt, {
				spellCheck: false,
				value: t.strLaunchOptions,
				setValue: (e) => SteamClient.Apps.SetAppLaunchOptions(t.unAppID, e),
			}),
		),
		n.createElement(
			l.G5,
			null,
			n.createElement(qe, {
				details: t,
			}),
		),
	);
}
function je(e) {
	const { steamid: t } = e;
	const r = (0, be.gt)(t);
	const i = (0, be.KM)(t);
	const [a] = (0, m.I5)("bParenthesizeNicknames");
	return n.createElement(Be.A, {
		persona: r,
		strNickname: i,
		bParenthesizeNicknames: a,
	});
}
function qe(e) {
	const { details: t } = e;
	const [r, i] = n.useState(false);
	const a = t.strOwnerSteamID;
	const s = (0, Se.qw)().GetCurrentUser().strSteamID != a && t.bIsSubscribedTo;
	const o = t.bIsExcludedFromSharing && !(t.eAppOwnershipFlags & 262144);
	const l = !o && s && !t.bHasDifferentCopies;
	const c = !o && s && t.bHasDifferentCopies;
	const m = !o && !s && t.bHasDifferentCopies;
	const u = !o && t.bHasDifferentCopies;
	const d = new ye.b(a);
	return n.createElement(
		"div",
		{
			className: V.SectionTopLine,
		},
		n.createElement(we.YZ, {
			active: r,
			onDismiss: () => {
				i(false);
			},
			appID: t.unAppID,
			details: t,
		}),
		o && (0, Localize)("#AppProperties_SharingNotSupported"),
		l && (0, Localize)("#AppProperties_BorrowedFromFamily"),
		c &&
			LocalizeInlineReactWithFallback(
				"#AppProperties_BorrowedFromMember",
				n.createElement(je, {
					steamid: d,
				}),
			),
		m && (0, Localize)("#AppProperties_OwnedButOtherAvailable"),
		u &&
			n.createElement(
				w.Ii,
				{
					onClick: () => {
						i(true);
					},
				},
				" ",
				(0, Localize)("#AppProperties_ChoosePreferredLender"),
				" ",
			),
	);
}
function Qe(e) {
	const { details: t } = e;
	const [r, i] = n.useState();
	const a = (0, L.f)(t.unAppID, r);
	const s = (0, g.hf)();
	n.useEffect(() => {
		SteamClient.Apps.GetLaunchOptionsForApp(t.unAppID).then((e) => {
			i(e);
		});
	}, [t]);
	if (!r || r.length < 2 || a.value === undefined) {
		return null;
	}
	let o = [
		{
			data: -1,
			label: (0, Localize)("#LaunchOptionsDialog_Ask"),
		},
	];
	o = o.concat(
		r.map((e) => {
			const t = (0, Localize)(e.strDescription, e.strGameName);
			return {
				data: e.nIndex,
				label: t,
			};
		}),
	);
	return n.createElement(
		l.G5,
		null,
		n.createElement(l.Vb, {
			label: (0, Localize)("#LaunchOptionsDialog_PropertiesLabel"),
			strClassName: V.TopGapSmall,
			contextMenuPositionOptions: {
				bMatchWidth: !s,
			},
			rgOptions: o,
			selectedOption: a.value,
			onChange: (e) => a.set(e.data),
		}),
	);
}
function Ze(e) {
	const t = e.details;
	const r = e.bCloudEnabled && t.bCloudEnabledForApp;
	const i = t.bCloudSyncOnSuspendAvailable;
	if (g.TS.ON_DECK && i) {
		return n.createElement(Ot, {
			className: V.TopGapSmall,
			label: (0, Localize)(
				"#AppProperties_EnableSteamCloudSyncOnSuspend",
				t.strDisplayName,
			),
			disabled: !r,
			checked: t.bCloudSyncOnSuspendEnabled && r,
			onChange: () =>
				SteamClient.Apps.ToggleAppSteamCloudSyncOnSuspendEnabled(t.unAppID),
		});
	} else {
		return null;
	}
}
function Ye(e) {
	const { details: t } = e;
	const r = (0, g.hf)();
	const i = (0, Ee.EH)();
	const a =
		t.strResolutionOverride != "Default" && t.strResolutionOverride != "Native";
	return n.createElement(
		l.G5,
		null,
		n.createElement(l.Vb, {
			label: (0, Localize)("#AppProperties_ResolutionOverride"),
			strClassName: V.TopGapSmall,
			rgOptions: i,
			selectedOption: t.strResolutionOverride ?? "Default",
			contextMenuPositionOptions: {
				bMatchWidth: !r,
			},
			onChange: (e) =>
				SteamClient.Apps.SetAppResolutionOverride(t.unAppID, e.data),
		}),
		a &&
			n.createElement(l.y4, {
				label: (0, Localize)("#AppProperties_ResolutionOverride_Internal"),
				checked: t.bOverrideInternalResolution,
				onChange: () =>
					SteamClient.Apps.ToggleOverrideResolutionForInternalDisplay(
						t.unAppID,
					),
			}),
	);
}
function Ke(e) {
	const { details: t } = e;
	const [r] = (0, m.VI)("cloud_enabled");
	const i = (0, x.br)();
	if (t.bCloudAvailable) {
		return n.createElement(
			"div",
			{
				className: V.SteamCloudSection,
			},
			n.createElement(
				"div",
				{
					className: V.Title,
				},
				(0, Localize)("#AppProperties_SteamCloudSection"),
			),
			n.createElement(
				"div",
				{
					className: (0, c.A)(V.Detail),
				},
				(0, Localize)("#AppProperties_SteamCloudDescription"),
			),
			!r &&
				n.createElement(
					l.xh,
					{
						bottomSeparator: "none",
						className: V.DisabledGlobalCloud,
						label: (0, Localize)("#AppProperties_SteamCloudGlobalDisabled"),
						onClick: () => i.Settings("Cloud"),
					},
					(0, Localize)("#AppProperties_SteamCloudGlobalSettingsLink"),
				),
			r &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(l.y4, {
						className: V.TopGapSmall,
						label: (0, Localize)(
							"#AppProperties_EnableSteamCloud",
							t.strDisplayName,
						),
						disabled: !r,
						checked: t.bCloudEnabledForApp && r,
						onChange: () =>
							SteamClient.Apps.ToggleAppSteamCloudEnabled(t.unAppID),
					}),
					n.createElement(Ze, {
						details: t,
						bCloudEnabled: r,
					}),
					n.createElement(
						"div",
						{
							className: (0, c.A)(V.SteamCloudUsage, V.TopGapSmall),
						},
						n.createElement(
							"span",
							null,
							(0, Localize)(
								"#AppProperties_SteamCloudStored",
								t.strCloudBytesUsed,
							),
						),
						" / ",
						n.createElement(
							"span",
							{
								className: V.BlueHighlight,
							},
							(0, Localize)(
								"#AppProperties_SteamCloudAvailable",
								t.strCloudBytesAvailable,
							),
						),
					),
				),
		);
	} else {
		return null;
	}
}
const Xe = (0, a.PA)((e) => {
	const { details: t } = e;
	const r = (0, i.q3)(() => m.rV.settings.bCompatEnabled);
	const a = et(t.unAppID, r);
	const s = r && !!t.strCompatToolName && t.nCompatToolPriority == 250;
	const o = a.length ? a[0].strToolName : "";
	const c = a.map((e) => ({
		data: e.strToolName,
		label: e.strDisplayName,
	}));
	const [u, d] = n.useState(false);
	const p = s || u;
	const g = n.useCallback(
		(e) => {
			d(e);
			if (e) {
				SteamClient.Apps.SpecifyCompatTool(t.unAppID, s ? "" : o);
			} else {
				SteamClient.Apps.SpecifyCompatTool(t.unAppID, "");
			}
		},
		[t.unAppID, o, s],
	);
	return n.createElement(
		n.Fragment,
		null,
		a.length != 0 &&
			n.createElement(Ot, {
				label: (0, Localize)("#AppProperties_CompatilibityForceTool"),
				checked: p,
				onChange: g,
				disabled: !r || a.length === 0,
			}),
		p &&
			a.length > 0 &&
			n.createElement(l.m, {
				strClassName: V.TopGap,
				rgOptions: c,
				selectedOption: t.strCompatToolName,
				onChange: (e) => SteamClient.Apps.SpecifyCompatTool(t.unAppID, e.data),
			}),
	);
});
const Je = (0, a.PA)((e) => {
	const { details: t } = e;
	return null;
});
const $e = (0, a.PA)((e) => {
	const { details: t } = e;
	const r = (0, i.q3)(() => m.rV.settings.bCompatEnabled);
	et(t.unAppID, r);
	return n.createElement(
		l.nB,
		null,
		n.createElement(
			"div",
			{
				className: V.HiddenIfNotLast,
			},
			(0, Localize)("#AppProperties_CompatibilityNoOptions"),
		),
		n.createElement(Xe, {
			...e,
		}),
		n.createElement(Je, {
			...e,
		}),
	);
});
function et(e, t) {
	const [r, i] = n.useState([]);
	n.useEffect(() => {
		SteamClient.Apps.GetAvailableCompatTools(e).then(i);
	}, [e, t]);
	return r;
}
function tt(e) {
	const { details: t } = e;
	const [r] = (0, m.e_)("b24HourClock");
	return n.createElement(
		l.nB,
		null,
		n.createElement(st, {
			details: t,
		}),
		n.createElement(ot, {
			details: t,
		}),
		n.createElement(
			"div",
			{
				className: V.BuildInfo,
			},
			n.createElement(
				"div",
				null,
				(0, Localize)("#AppProperties_AppID", t.unAppID),
			),
			n.createElement(
				"div",
				null,
				(0, Localize)("#AppProperties_AutoUpdateBuild", t.nBuildID),
			),
			!t.bIsThirdPartyUpdater &&
				t.rtLastUpdated > 0 &&
				n.createElement(
					"div",
					null,
					(0, Localize)(
						"#AppProperties_AutoUpdateDate",
						LocalizeRtime32ToShortDate(t.rtLastUpdated),
						LocalizeRTimeToHourAndMinutes(t.rtLastUpdated, {
							bForce24HourClock: r,
						}),
					),
				),
			n.createElement("br", null),
			t.bIsThirdPartyUpdater &&
				n.createElement(
					"div",
					null,
					(0, Localize)("#AppProperties_IsThirdPartyUpdater", t.strDisplayName),
				),
		),
	);
}
export function FO(e, t) {
	(0, ce.w)(
		e != 0 || t != null,
		"Can't use default setting when global default is null",
	);
	switch (e) {
		case 0:
			const e = n.createElement(
				"span",
				{
					className: V.DefaultOptionText,
				},
				(0, Localize)("#AppProperties_AutoUpdateUseDefault"),
			);
			const r = FO(t, null);
			return LocalizeReact("#AppProperties_AutoUpdateUseDefault_Combine", e, r);
		case 1:
			return (0, Localize)("#AppProperties_AutoUpdateOnLaunch");
		case 3:
			return (0, Localize)("#AppProperties_AutoUpdateAlways");
		case 2:
			return (0, Localize)("#AppProperties_AutoUpdateHighPriority");
	}
}
export function Qx() {
	const [e] = (0, m.VI)("default_app_update_behavior");
	return [
		{
			value: 0,
			title: FO(0, e),
			description: (0, Localize)(
				"#AppProperties_AutoUpdateUseDefault_Description",
			),
		},
		"separator",
		{
			value: 1,
			title: (0, Localize)("#AppProperties_AutoUpdateOnLaunch"),
		},
		{
			value: 3,
			title: (0, Localize)("#AppProperties_AutoUpdateAlways"),
			description: (0, Localize)("#AppProperties_AutoUpdateAlways_Description"),
		},
		{
			value: 2,
			title: (0, Localize)("#AppProperties_AutoUpdateHighPriority"),
			description: (0, Localize)(
				"#AppProperties_AutoUpdateHighPriority_Description",
			),
		},
	];
}
export function R9(e, t) {
	const r = Qx().find((t) => t != "separator" && t.value == e);
	return r?.title;
}
export function BN() {
	return Qx().map((e) =>
		e == "separator"
			? {
					bIsSeparator: true,
				}
			: {
					data: e.value,
					label: n.createElement(l.aZ, {
						strTitleClassNames: V.DropDownLabel,
						title: e.title,
						description: e.description,
					}),
				},
	);
}
function st(e) {
	const { details: t } = e;
	const r = BN();
	if (t.bHasAnyLocalContent) {
		return n.createElement(l.Vb, {
			label: (0, Localize)("#AppProperties_AutoUpdateSection"),
			strClassName: (0, c.A)(V.BottomGap, V.FullWidth),
			layout: "below",
			disabled: t.bIsThirdPartyUpdater,
			rgOptions: r,
			selectedOption: t.eAutoUpdateValue,
			onChange: (e) =>
				SteamClient.Apps.SetAppAutoUpdateBehavior(t.unAppID, e.data),
		});
	}
}
function ot(e) {
	const { details: t } = e;
	const [r] = (0, m.VI)("download_while_app_running");
	const i = (0, Localize)(
		r
			? "#AppProperties_BackgroundDownloadGlobal_Allow"
			: "#AppProperties_BackgroundDownloadGlobal_Pause",
	);
	const a = [
		{
			data: 0,
			label: n.createElement(l.aZ, {
				strTitleClassNames: V.DropDownLabel,
				title: i,
				description: (0, Localize)(
					"#AppProperties_BackgroundDownloadGlobal_Description",
				),
			}),
		},
		{
			data: 1,
			label: n.createElement(l.aZ, {
				strTitleClassNames: V.DropDownLabel,
				title: (0, Localize)("#AppProperties_BackgroundDownloadAlways"),
			}),
		},
		{
			data: 2,
			label: n.createElement(l.aZ, {
				strTitleClassNames: V.DropDownLabel,
				title: (0, Localize)("#AppProperties_BackgroundDownloadNever"),
			}),
		},
	];
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(l.D0, {
			className: V.NoBottomGap,
			label: (0, Localize)("#AppProperties_BackgroundDownloadsSection"),
			description: (0, Localize)(
				"#AppProperties_BackgroundDownloadsDescription",
				t.strDisplayName,
			),
			bottomSeparator: "none",
			padding: "none",
		}),
		n.createElement(l.Vb, {
			strClassName: (0, c.A)(V.BottomGapSmall, V.FullWidth),
			layout: "below",
			disabled: t.bIsThirdPartyUpdater,
			rgOptions: a,
			selectedOption: t.eBackgroundDownloads,
			onChange: (e) =>
				SteamClient.Apps.SetAppBackgroundDownloadsBehavior(t.unAppID, e.data),
		}),
	);
}
function lt(e) {
	const { details: t } = e;
	const r = (0, g.Qn)();
	const [a, s] = n.useState(T.I.GetVerifyAppAction(t.unAppID));
	h = a;
	const {
		strTask: m,
		unProgress: u,
		unFiles: d,
		unAppID: p,
	} = (0, i.q3)(() => ({
		strTask: h ? h.m_strTask : "None",
		unProgress: h ? h.m_numProgress : 0,
		unFiles: h ? h.m_numFiles : 0,
		unAppID: h ? h.m_unAppID : 0,
	}));
	var h;
	const C = R.fN.GetInstallFolder(t.iInstallFolder);
	const _ = (0, k.Cj)(C);
	const b = o.tw.GetAppOverviewByAppID(t.unAppID);
	const y =
		b && b.app_type
			? (function (e) {
					switch (e) {
						case 1:
							return "game";
						case 2:
							return "software";
						case 4:
							return "tool";
						case 8:
							return "demo";
						case 32:
							return "dlc";
						case 128:
							return "driver";
						case 256:
							return "config";
						case 2048:
							return "video";
						case 8192:
							return "music";
						case 65536:
							return "beta";
					}
					return "invalid";
				})(b.app_type)
			: "game";
	const S =
		p != 0 && p != t.unAppID
			? "(" + o.tw.GetAppOverviewByAppID(p).display_name + ")"
			: "";
	return n.createElement(
		l.nB,
		null,
		n.createElement(
			"div",
			{
				className: V.BrowseDiskRow,
			},
			n.createElement(
				"div",
				{
					className: V.BrowseDiskSizeLabel,
				},
				(0, Localize)("#AppProperties_LocalFilesSize"),
			),
			n.createElement(
				"div",
				{
					className: (0, c.A)(V.BlueHighlight, V.BrowseDiskSize),
				},
				(0, Localize)(
					"#AppProperties_LocalFilesSizeOnDrive",
					(0, f.dm)(t.lDiskUsageBytes, 2),
					_,
				),
			),
			!r &&
				n.createElement(
					l.$n,
					{
						className: (0, c.A)(V.SettingsDialogButton, V.BrowseDiskButton),
						onClick: () =>
							SteamClient.System.OpenLocalDirectoryInSystemExplorer(
								t.strInstallFolder,
							),
					},
					(0, Localize)("#AppProperties_LocalFilesBrowse"),
				),
		),
		n.createElement(
			"div",
			{
				className: (0, c.A)(V.SectionTopLine, V.NoPadding),
			},
			!r &&
				n.createElement(
					l.xh,
					{
						className: V.SettingsDialogButton,
						label: n.createElement(
							"div",
							{
								className: V.TwoLineLabel,
							},
							n.createElement(
								"div",
								null,
								(0, Localize)("#AppProperties_LocalFilesBackupLabel_" + y),
							),
							!r &&
								n.createElement(
									"div",
									{
										className: V.LocalFilesLink,
									},
									LocalizeInlineReactWithFallback(
										"#AppProperties_LocalFilesBackupFAQ",
										n.createElement("a", {
											href: "steam://openurl_external/https://help.steampowered.com/faqs/view/4593-5CB7-DC3C-64F0",
										}),
									),
								),
						),
						bottomSeparator: "standard",
						disabled: t.bIsThirdPartyUpdater,
						onClick: (e) => (0, E.vq)([t.unAppID], GetOwningWindowForEvent(e)),
					},
					(0, Localize)("#AppProperties_LocalFilesBackup_" + y),
				),
			t.bCanMoveInstallFolder &&
				n.createElement(
					l.xh,
					{
						className: V.SettingsDialogButton,
						label: (0, Localize)("#AppProperties_LocalFilesMoveLabel_" + y),
						bottomSeparator: "standard",
						disabled: t.bIsThirdPartyUpdater,
						onClick: (e) => (0, I.P)([t.unAppID], GetOwningWindowForEvent(e)),
					},
					(0, Localize)("#AppProperties_LocalFilesMove"),
				),
			!a &&
				n.createElement(
					l.xh,
					{
						className: V.SettingsDialogButton,
						label: n.createElement(
							"div",
							{
								className: V.TwoLineLabel,
							},
							n.createElement(
								"div",
								null,
								(0, Localize)("#AppProperties_LocalFilesVerifyLabel_" + y),
							),
							!r &&
								n.createElement(
									"div",
									{
										className: V.LocalFilesLink,
									},
									LocalizeInlineReactWithFallback(
										"#AppProperties_LocalFilesVerifyFAQ",
										n.createElement("a", {
											href: "steam://openurl_external/https://help.steampowered.com/faqs/view/0C48-FCBD-DA71-93EB",
										}),
									),
								),
						),
						bottomSeparator: "standard",
						disabled: t.bIsThirdPartyUpdater,
						onClick: function () {
							s(T.I.VerifyAppFiles(t.unAppID));
						},
					},
					(0, Localize)("#AppProperties_LocalFilesVerify_" + y),
				),
		),
		t.bIsThirdPartyUpdater &&
			n.createElement(
				"div",
				{
					className: V.SectionTopLine,
				},
				(0, Localize)("#AppProperties_IsThirdPartyUpdater", b.display_name),
			),
		a &&
			n.createElement(
				"div",
				{
					className: V.LocalFilesVerify,
				},
				m == "None" &&
					n.createElement(
						"div",
						null,
						" ",
						(0, Localize)("#AppProperties_LocalFilesVerify_" + y),
						" ",
					),
				m == "UpdatingAppInfo" &&
					n.createElement(
						"div",
						null,
						" ",
						(0, Localize)("#AppProperties_LocalFilesVerify_UpdatingAppInfo"),
						" ",
					),
				m == "RunningInstallScript" &&
					n.createElement(
						"div",
						null,
						" ",
						(0, Localize)(
							"#AppProperties_LocalFilesVerify_RunningInstallScript",
						),
						" ",
					),
				m == "VerifyingFiles" &&
					n.createElement(
						"div",
						null,
						" ",
						(0, Localize)("#AppProperties_LocalFilesVerify_VerifyingFiles"),
						" ",
						u,
						"% ",
						S,
						" ",
					),
				m == "Completed" &&
					n.createElement(
						"div",
						null,
						" ",
						(0, Localize)("#AppProperties_LocalFilesVerify_Complete", d),
						" ",
					),
				m == "Failed" &&
					n.createElement(
						"div",
						null,
						" ",
						(0, Localize)("#AppProperties_LocalFilesVerify_Failed", d),
						" ",
					),
			),
	);
}
function ct(e) {
	const { details: t } = e;
	const r = (0, g.hf)();
	if (t.vecLanguages.length > 1 && g.TS.LAUNCHER_TYPE !== 7) {
		const e = t.vecLanguages.map((e) => ({
			label: mt(e.strShortName),
			data: e.strShortName,
		}));
		return n.createElement(l.Vb, {
			label: (0, Localize)("#AppProperties_SelectLanguage"),
			strClassName: V.TopGapSmall,
			contextMenuPositionOptions: {
				bMatchWidth: !r,
			},
			rgOptions: e,
			selectedOption: t.selectedLanguage.strShortName,
			onChange: (e) =>
				SteamClient.Apps.SetAppCurrentLanguage(t.unAppID, e.data),
		});
	}
	return null;
}
function mt(e) {
	if (e === "none") {
		return "None";
	} else {
		return (0, Localize)(`#language_selection_${e}`);
	}
}
function ut(e) {
	const { details: t } = e;
	const r = (0, g.hf)();
	const [a, s] = n.useState("");
	const [o, m] = n.useState(null);
	const u = (0, i.q3)(() => t.vecBetas.find((e) => e.strName === o));
	const d = (0, i.q3)(() => t.strSelectedBeta);
	const p = [
		{
			label: (0, Localize)("#AppProperties_Beta_SelectNoBeta"),
			data: "",
		},
		...t.vecBetas.map((e) => ({
			label: n.createElement(dt, {
				beta: e,
			}),
			data: e.strName,
		})),
	];
	return n.createElement(
		l.nB,
		null,
		n.createElement(l.Vb, {
			label: (0, Localize)("#AppProperties_Beta_Selection"),
			description: (0, Localize)("#AppProperties_Beta_SelectionDescription"),
			strClassName: V.NoTopPadding,
			strDropDownClassName: V.BetasDropDown,
			contextMenuPositionOptions: {
				bMatchWidth: !r,
				bPreferPopLeft: true,
			},
			rgOptions: p,
			selectedOption: d,
			onChange: (e) => {
				if (e.data !== d) {
					SteamClient.Apps.JoinAppContentBeta(t.unAppID, e.data);
					m(null);
				}
			},
		}),
		n.createElement(
			"div",
			{
				className: (0, c.A)(V.TopGapLarge, V.BetaLabel),
			},
			(0, Localize)("#AppProperties_Beta_Private"),
		),
		n.createElement(
			"div",
			null,
			(0, Localize)("#AppProperties_Beta_AccessCode"),
		),
		n.createElement(
			F.Z,
			{
				className: (0, c.A)(V.BetaAccessCodeRow, V.TopGapSmall),
				"flow-children": "row",
			},
			n.createElement(l.pd, {
				className: V.AccessCodeInput,
				spellCheck: false,
				value: a,
				onChange: (e) => {
					s(e.currentTarget.value);
					m(null);
				},
				onKeyDown: (e) => {
					if (typeof o != "string" && e.key === "Enter") {
						pt(t.unAppID, a, m);
						m(null);
					}
				},
			}),
			n.createElement(
				l.$n,
				{
					className: (0, c.A)(V.SettingsDialogButton, V.CheckButton),
					onClick: () => pt(t.unAppID, a, m),
				},
				(0, Localize)("#AppProperties_Beta_CheckCode"),
			),
		),
		o === false &&
			n.createElement(
				"div",
				{
					className: V.Error,
				},
				(0, Localize)("#AppProperties_Beta_AccessCodeInvalid"),
			),
		u &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					"div",
					{
						className: V.Detail,
					},
					(0, Localize)("#AppProperties_Beta_AccessCodeSuccess"),
				),
				d !== u.strName &&
					n.createElement(
						l.$n,
						{
							className: (0, c.A)(
								V.SettingsDialogButton,
								"Primary",
								V.BetaOptIntoButton,
							),
							onClick: () => {
								SteamClient.Apps.JoinAppContentBeta(t.unAppID, u.strName);
								s("");
								m(null);
							},
						},
						LocalizeReact(
							"#AppProperties_Beta_OptInto",
							n.createElement(At, {
								beta: u,
							}),
						),
					),
			),
	);
}
function dt(e) {
	return n.createElement(
		"div",
		{
			className: V.BetaOption,
		},
		n.createElement(At, {
			beta: e.beta,
		}),
	);
}
function At(e) {
	const { beta: t } = e;
	let r;
	r = (0, p.ID)(g.TS.LAUNCHER_TYPE)
		? t.strDescription
		: t.strName && t.strDescription
			? `${t.strName} - ${t.strDescription}`
			: t.strDescription || t.strName;
	return n.createElement(n.Fragment, null, r);
}
function pt(e, t, r) {
	SteamClient.Apps.JoinAppContentBetaByPassword(e, t).then(
		(e) => r(e.strName),
		() => r(false),
	);
}
function gt(e) {
	const { details: t } = e;
	const [r] = (0, m.VI)("controller_generic_support");
	const [a] = (0, m.VI)("controller_xbox_support");
	const [s] = (0, m.VI)("controller_ps_support");
	const [u] = (0, m.VI)("controller_switch_support");
	const d = o.tw.GetAppOverviewByAppID(e.details.unAppID);
	let p = (0, i.q3)(() => t.eEnableThirdPartyControllerConfiguration);
	let h = (0, i.q3)(() => {
		let e = r ? 4 : 0;
		e += a ? 2 : 0;
		if (
			s == 2 ||
			(s == 1 && H.Fd.Get().BPSControllerSupportMismatch(d, false))
		) {
			e += 1;
		}
		e += u ? 8 : 0;
		return e;
	});
	const C = (0, g.hf)();
	const _ = (0, g.Qn)();
	(0, x.br)();
	const f = (0, H.tk)();
	const y = [
		{
			data: 0,
			label: (0, Localize)("#AppProperties_SteamInputOff"),
		},
		{
			data: 1,
			label: (0, Localize)("#AppProperties_SteamInputDefaultSettings"),
		},
		{
			data: 2,
			label: (0, Localize)("#AppProperties_SteamInputOn"),
		},
	];
	return n.createElement(
		l.nB,
		null,
		n.createElement("div", null, (0, Localize)("#AppProperties_SteamInput")),
		n.createElement(
			"div",
			{
				className: V.TopGap,
			},
			LocalizeReact(
				"#AppProperties_SteamInputGeneralSetting",
				n.createElement(
					"span",
					{
						className: V.SteamInputLink,
						onClick: () => {
							const e = b.oy.WindowStore.MainWindowInstance;
							if (_) {
								j.v3.ClearEditingConfiguration();
								e.Navigate(M.BV.GamepadUI.ControllerConfigurator.Main(d.appid));
							} else {
								SteamClient.Apps.ShowControllerConfigurator(d.appid);
							}
						},
					},
					(0, Localize)("#AppProperties_SteamInputGeneralSetting_Link"),
				),
			),
		),
		n.createElement(l.Vb, {
			label: (0, Localize)(
				"#AppProperties_SteamInputOverride",
				t.strDisplayName,
			),
			description: (0, Localize)("#AppProperties_SteamInputRequiresRestart"),
			strClassName: V.TopGapSmall,
			contextMenuPositionOptions: {
				bMatchWidth: !C,
			},
			rgOptions: y,
			selectedOption: t.eEnableThirdPartyControllerConfiguration,
			onChange: (e) => {
				r = e.data;
				SteamClient.Apps.SetThirdPartyControllerConfiguration(t.unAppID, r);
				j.v3.ClearSelectedConfigCache(t.unAppID);
				return;
				var r;
			},
		}),
		n.createElement(
			"div",
			{
				className: (0, c.A)(V.TopGap, V.SteamInputStatus),
			},
			(0, Localize)("#AppProperties_SteamInputStatus"),
		),
		n.createElement(
			"div",
			{
				className: (0, c.A)(V.TopGapSmall, V.SteamInputStatusGrid),
			},
			ht.map((e) =>
				n.createElement(
					n.Fragment,
					{
						key: e,
					},
					n.createElement(Ct, {
						strType: e,
						rgConnected: f,
					}),
					n.createElement(_t, {
						controller: e,
						globalMask: h,
						appMask: t.eSteamInputControllerMask,
						perGameSupport: p,
					}),
				),
			),
		),
		t?.strShortcutExe &&
			n.createElement(l.y4, {
				className: V.TopGapLarge,
				label: (0, Localize)(
					"#AppProperties_SteamInputDesktopConfigInLauncher",
				),
				checked: t?.bEnableAllowDesktopConfiguration,
				onChange: () =>
					SteamClient.Apps.ToggleAllowDesktopConfiguration(t.unAppID),
			}),
	);
}
const ht = [
	"Xbox",
	"PlayStation",
	"NintendoSwitch",
	"Generic",
	"Steam",
	"Remote",
];
function Ct(e) {
	const { strType: t, rgConnected: r } = e;
	const i =
		r.filter(
			(e) =>
				(function (e) {
					switch (e) {
						case 31:
						case 32:
						case 46:
							return "Xbox";
						case 33:
						case 34:
						case 45:
						case 48:
							return "PlayStation";
						case 39:
						case 40:
						case 41:
						case 38:
						case 42:
							return "NintendoSwitch";
						case 2:
						case 3:
						case 4:
						case 49:
							return "Steam";
						default:
							return "Generic";
					}
				})(e.eControllerType) === t,
		).length > 0;
	return n.createElement(
		"div",
		{
			className: V.Controller,
			title: i ? (0, Localize)("#AppProperties_SteamInput_Connected") : null,
		},
		n.createElement("div", {
			className: (0, c.A)({
				[V.ControllerPip]: true,
				[V.ControllerConnected]: i,
			}),
		}),
		(0, Localize)(`#AppProperties_Controller_${t}`),
	);
}
function _t(e) {
	const { controller: t, globalMask: r, appMask: i, perGameSupport: a } = e;
	let s = false;
	let o = "";
	if (t === "Steam" || t === "Remote") {
		s = true;
		o = (0, Localize)("#AppProperties_SteamInput_ReasonRequired");
	} else if (a === 2) {
		s = true;
		o = (0, Localize)("#AppProperties_SteamInput_ReasonGameOverride");
	} else if (a === 0) {
		s = false;
		o = (0, Localize)("#AppProperties_SteamInput_ReasonGameOverride");
	} else if (H.Fd.Get().BControllerInMask(t, r)) {
		s = true;
		o = (0, Localize)("#AppProperties_SteamInput_ReasonGeneralSetting");
	} else if (H.Fd.Get().BControllerInMask(t, i)) {
		s = true;
		o = (0, Localize)("#AppProperties_SteamInput_ReasonDeveloperSetting");
	} else if (g.TS.ON_DECK && t != "Generic") {
		s = true;
		o = (0, Localize)("#AppProperties_SteamInput_ReasonDeckDefault");
	}
	if (o) {
		return n.createElement(
			"div",
			null,
			n.createElement(
				"span",
				{
					className: V.SteamInputStatus,
				},
				(0, Localize)(
					s
						? "#AppProperties_SteamInput_Enabled"
						: "#AppProperties_SteamInput_Disabled",
				),
			),
			n.createElement("span", null, o),
		);
	} else {
		return n.createElement("div", null);
	}
}
function ft(e) {
	const { details: t } = e;
	const [r, i] = n.useState("");
	const [a, s] = n.useState(false);
	const [o, m] = n.useState("added");
	function u(e) {
		if (o === e) {
			s(!a);
		} else {
			m(e);
			s(true);
		}
	}
	const d = n.useMemo(() => {
		let e = t.vecDLC.slice();
		if (r) {
			const t = r.toLocaleLowerCase();
			e = e.filter((e) => e.strName.toLocaleLowerCase().includes(t));
		}
		(function (e, t, r) {
			if (t === "install") {
				e.sort(
					(function (e) {
						let t = Dt(true);
						let r = e ? 1 : -1;
						return (e, n) =>
							e.bEnabled == n.bEnabled ? t(e, n) : e.bEnabled ? -r : r;
					})(r),
				);
			} else if (t === "name") {
				e.sort(Dt(r));
			} else if (t === "size") {
				e.sort(
					(function (e) {
						let t = e ? 1 : -1;
						return (e, r) => t * (r.lDiskUsageBytes - e.lDiskUsageBytes);
					})(r),
				);
			} else if (t === "state") {
				e.sort(
					(function (e) {
						let t = e ? 1 : -1;
						return (e, r) => t * (0, C.lY)(e.strState, r.strState);
					})(r),
				);
			} else {
				e.sort(
					(function (e) {
						let t = Dt(true);
						let r = e ? 1 : -1;
						return (e, n) =>
							e.rtPurchaseDate == n.rtPurchaseDate
								? t(e, n)
								: r * (e.rtPurchaseDate - n.rtPurchaseDate);
					})(r),
				);
			}
		})(e, o, a);
		return e;
	}, [t.vecDLC, r, a, o]);
	const p = t.vecDLC.length >= 50;
	const g = d.map((e) =>
		n.createElement(
			n.Fragment,
			{
				key: e.unAppID,
			},
			n.createElement(
				"div",
				{
					className: V.Install,
				},
				n.createElement(l.Yh, {
					checked: e.bEnabled,
					onChange: (r) =>
						SteamClient.Apps.SetDLCEnabled(t.unAppID, e.unAppID, r),
				}),
			),
			n.createElement(
				"a",
				{
					href: B.B7.BuildSteamURL("StoreAppPage", e.unAppID),
				},
				n.createElement(
					"div",
					{
						className: (0, c.A)(V.Name, p && V.HideImages),
					},
					!p &&
						n.createElement(h.lx, {
							className: V.DlcArt,
							item: e,
							appidParent: t.unAppID,
						}),
					n.createElement(
						"div",
						{
							className: V.NameText,
						},
						e.strName,
					),
				),
			),
			n.createElement(
				"div",
				{
					className: V.Added,
				},
				e.rtPurchaseDate ? LocalizeRtime32ToShortDate(e.rtPurchaseDate) : "",
			),
			n.createElement(
				"div",
				{
					className: V.SizeDisk,
				},
				n.createElement(
					S.he,
					{
						toolTipContent: (0, Localize)(
							"#AppProperties_Dlc_State_" + e.strState,
						),
					},
					e.lDiskUsageBytes ? (0, f.dm)(e.lDiskUsageBytes, 2) : "",
				),
			),
		),
	);
	const _ = (0, M.bG)("StoreDlcPage", t.unAppID);
	return n.createElement(
		l.nB,
		{
			className: V.NoScroll,
		},
		n.createElement(
			"div",
			{
				className: V.DlcTopRow,
			},
			n.createElement(
				l.$n,
				{
					className: (0, c.A)(V.SettingsDialogButton, V.ViewMore),
					onClick: _,
				},
				(0, Localize)("#AppProperties_Dlc_ViewInStore"),
			),
			n.createElement(l.pd, {
				className: V.Search,
				value: r,
				onChange: (e) => i(e.currentTarget.value),
				bShowClearAction: true,
				placeholder: (0, Localize)("#AppProperties_Dlc_Search"),
			}),
		),
		n.createElement(
			"div",
			{
				className: V.DlcGrid,
			},
			n.createElement(
				"div",
				{
					className: V.DlcHeader,
					onClick: () => u("install"),
				},
				(0, Localize)("#AppProperties_Dlc_Installed"),
				n.createElement(kt, {
					hide: o !== "install",
					ascending: a,
				}),
			),
			n.createElement(
				"div",
				{
					className: V.DlcHeader,
					onClick: () => u("name"),
				},
				(0, Localize)("#AppProperties_Dlc_Name"),
				n.createElement(kt, {
					hide: o !== "name",
					ascending: a,
				}),
			),
			n.createElement(
				"div",
				{
					className: V.DlcHeader,
					onClick: () => u("added"),
				},
				(0, Localize)("#AppProperties_Dlc_DateAdded"),
				n.createElement(kt, {
					hide: o !== "added",
					ascending: a,
				}),
			),
			n.createElement(
				"div",
				{
					className: V.DlcHeader,
					onClick: () => u("size"),
				},
				(0, Localize)("#AppProperties_Dlc_SizeDisk"),
				n.createElement(kt, {
					hide: o !== "size",
					ascending: a,
				}),
			),
			...g,
		),
		t.bHasDifferentCopies &&
			n.createElement(qe, {
				details: t,
			}),
	);
}
function bt(e) {
	const { item: t, subscribedItems: r } = e;
	let i = n.useMemo(() => {
		if (!t.details?.children || t.details.children.length == 0) {
			return "";
		}
		let e = [];
		for (let n of t.details.children) {
			let t = r.findIndex((e) => e.publishedfileid == n);
			if (t != -1) {
				e.push(
					(0, Localize)(
						"#AppProperties_Workshop_DependsOn",
						r[t].details?.title ?? n,
					),
				);
			} else {
				e.push(
					(0, Localize)("#AppProperties_Workshop_DependsOntNotSubscribed", n),
				);
			}
		}
		return e.join(", ");
	}, [t.details?.children, r]);
	if (i.length == 0) {
		return null;
	}
	let a = (0, Localize)("#AppProperties_Workshop_Dependencies", i);
	return n.createElement(
		S.he,
		{
			toolTipContent: a,
		},
		n.createElement(
			"div",
			{
				className: V.WorkshopItemDependencies,
			},
			a,
		),
	);
}
function yt(e) {
	const { item: t } = e;
	let r = n.useMemo(
		() =>
			t.details?.tags && t.details.tags.length != 0
				? t.details.tags.sort().join(", ")
				: "",
		[t.details?.tags],
	);
	if (r.length == 0) {
		return null;
	}
	const i = (0, Localize)("#AppProperties_Workshop_Tags", r);
	return n.createElement(
		S.he,
		{
			toolTipContent: i,
		},
		n.createElement(
			"div",
			{
				className: V.WorkshopItemTagsContainer,
			},
			i,
		),
	);
}
function St(e) {
	const { appid: t, game_branch: r } = e;
	const i = (0, u.DJ)(t, r);
	const [a, s] = n.useState();
	n.useEffect(() => {
		if (i.isSuccess && i?.data) {
			let e = i.data;
			ve.IB.LoadPartnerEventFromClanEventGID(e.appid, e.clan_event_gid, 0).then(
				(e) => {
					s(e);
				},
			);
		}
	}, [i]);
	const o = (function (e) {
		const t = b.oy.WindowStore.MainWindowInstance;
		const r = (0, Ie.Wk)();
		const i = e?.appid;
		const a = e?.GID;
		const s = e?.clanSteamID;
		const o = (0, g.Qn)();
		return n.useCallback(
			(e) => {
				if (i || a) {
					const e = (0, M.KV)(i, a, s, {
						require_tags: ["patchnotes", ...r],
					});
					if (o) {
						t.Navigate(M.BV.AppProperties.Workshop(i), false, false, e);
					} else {
						t.Navigate(M.BV.Library.App.Root(i), false, false, e);
					}
				}
				e.stopPropagation();
				e.preventDefault();
			},
			[i, a, s, t, r, o],
		);
	})(a);
	const l =
		r == "public"
			? (0, Localize)("#AppProperties_Workshop_Snapshot_Latest")
			: r;
	if (a) {
		return n.createElement(
			"div",
			{
				className: V.PatchNotesLink,
				onClick: o,
			},
			l,
		);
	} else {
		return n.createElement(
			"div",
			{
				className: V.PatchNotesLink,
			},
			l,
		);
	}
}
function wt(e) {
	const { appid: t, snapshot: r, currently_used: i } = e;
	return n.createElement(
		"div",
		{
			className: (0, c.A)(
				V.WorkshopItemAuthorSnapshot,
				i && V.UsedAuthorSnapshot,
			),
		},
		r.game_branch_min?.length != 0 &&
			n.createElement(St, {
				appid: t,
				game_branch: r.game_branch_min,
			}),
		r.game_branch_min?.length != 0 &&
			r.game_branch_max?.length != 0 &&
			r.game_branch_min != r.game_branch_max &&
			n.createElement("span", null, "\xA0-\xA0"),
		r.game_branch_max?.length != 0 &&
			r.game_branch_min != r.game_branch_max &&
			n.createElement(St, {
				appid: t,
				game_branch: r.game_branch_max,
			}),
	);
}
function Bt(e) {
	const { appid: t, item: r } = e;
	if (
		r.details &&
		r.details.author_snapshots &&
		r.details.author_snapshots.length != 0
	) {
		return n.createElement(
			"div",
			{
				className: V.WorkshopItemAuthorSnapshotsContainer,
			},
			r.details.author_snapshots.map((e, i) =>
				n.createElement(wt, {
					key: i,
					appid: t,
					snapshot: e,
					currently_used: r.manifestid == e.manifestid,
				}),
			),
			n.createElement(
				"div",
				{
					className: (0, c.A)(
						V.WorkshopItemAuthorSnapshot,
						r.details.manifestid == r.manifestid && V.UsedAuthorSnapshot,
					),
				},
				n.createElement(St, {
					appid: t,
					game_branch: "public",
				}),
			),
		);
	} else {
		return null;
	}
}
function vt(e) {
	const { item: t, sortBy: r } = e;
	switch (r) {
		case "subscribed":
			return n.createElement(
				"div",
				{
					className: V.SortedColumn,
				},
				LocalizeRtime32ToShortDate(t.time_subscribed) +
					" @ " +
					LocalizeRTimeToHourAndMinutes(t.time_subscribed, {
						bForce24HourClock: false,
					}),
			);
		case "updated":
			return n.createElement(
				"div",
				{
					className: V.SortedColumn,
				},
				LocalizeRtime32ToShortDate(t.time_updated) +
					" @ " +
					LocalizeRTimeToHourAndMinutes(t.time_updated, {
						bForce24HourClock: false,
					}),
			);
	}
	let i = t.file_size ?? t.details?.file_size;
	return n.createElement(
		"div",
		{
			className: V.SortedColumn,
		},
		" ",
		i ? (0, f.dm)(Number(i), 2) : "",
	);
}
function It(e) {
	const {
		appid: t,
		item: r,
		bCanDrag: i,
		sortBy: a,
		itemListOriginal: s,
		provided: o,
		snapshot: m,
		style: d,
	} = e;
	const p = (0, le.gQ)({
		...o.draggableProps.style,
		...d,
	});
	const g = (e) => {
		u.B6.ReorderSubscribedItems(t, r.load_order, 0);
	};
	const h = (e) => {
		u.B6.ReorderSubscribedItems(t, r.load_order, s.length - 1);
	};
	return n.createElement(
		F.Z,
		{
			className: (0, c.A)(
				V.WorkshopItemRow,
				m.isDragging && V.IsDragging,
				i && V.CanChangeLoadOrder,
			),
			ref: o.innerRef,
			...o.draggableProps,
			...o.dragHandleProps,
			style: p,
			"flow-children": "row",
			onContextMenu: (e) => {
				let t = n.createElement(
					ge.tz,
					null,
					n.createElement(
						ge.kt,
						{
							onSelected: g,
						},
						(0, Localize)("#AppProperties_Workshop_LoadOrder_MoveToTop"),
					),
					n.createElement(
						ge.kt,
						{
							onSelected: h,
						},
						(0, Localize)("#AppProperties_Workshop_LoadOrder_MoveToBottom"),
					),
				);
				(0, he.lX)(t, e);
			},
		},
		n.createElement(
			"div",
			{
				className: V.Install,
			},
			n.createElement(l.Yh, {
				onOKActionDescription: (0, Localize)(
					r.disabled_locally
						? "#AppProperties_Workshop_EnableLocally"
						: "#AppProperties_Workshop_DisableLocally",
				),
				tooltip: (0, Localize)(
					r.disabled_locally
						? "#AppProperties_Workshop_EnableLocally"
						: "#AppProperties_Workshop_DisableLocally",
				),
				checked: !r.disabled_locally,
				onChange: (e) => {
					n = r.publishedfileid;
					i = !e;
					SteamClient.Apps.SetWorkshopItemsDisabledLocally(t, [n], i);
					return;
					var n;
					var i;
				},
			}),
		),
		n.createElement(
			"div",
			{
				className: V.LoadOrder,
			},
			r.load_order + 1 + ".",
		),
		n.createElement(
			"a",
			{
				href: B.B7.BuildSteamURL("CommunityFilePage", r.publishedfileid),
			},
			n.createElement(
				"div",
				{
					className: V.Details,
				},
				r.details?.preview_url &&
					n.createElement(
						S.he,
						{
							toolTipContent: r.details?.short_description + "...",
						},
						n.createElement("img", {
							className: V.PreviewArt,
							src: r.details.preview_url,
						}),
					),
				n.createElement(
					"div",
					{
						className: V.TextDetails,
					},
					n.createElement(
						"div",
						{
							className: V.NameText,
						},
						n.createElement(
							S.he,
							{
								toolTipContent: r.details?.short_description + "...",
							},
							r.details?.title,
						),
					),
					n.createElement(bt, {
						item: r,
						subscribedItems: s,
					}),
					n.createElement(yt, {
						item: r,
					}),
					n.createElement(Bt, {
						appid: t,
						item: r,
					}),
				),
				n.createElement(K.Rows, {
					className: V.DragHandle,
				}),
			),
		),
		n.createElement(vt, {
			item: r,
			sortBy: a,
		}),
		n.createElement(
			"div",
			{
				className: V.Controls,
			},
			n.createElement(l.$n, {
				svgicon: () => n.createElement(K.Trash, null),
				title: (0, Localize)("#AppProperties_Workshop_Unsubscribe"),
				onOKActionDescription: (0, Localize)(
					"#AppProperties_Workshop_Unsubscribe",
				),
				className: V.UnsubscribeButton,
				onClick: () => {
					e = r.publishedfileid;
					SteamClient.Apps.SubscribeWorkshopItem(t, e, false);
					return;
					var e;
				},
			}),
		),
	);
}
var Et;
function Mt(e) {
	const { appid: t, items: r, closeModal: i } = e;
	const [a, s] = (0, n.useState)(Et.kInitial);
	const [o, c] = (0, n.useState)(2);
	const m = [
		{
			data: 2,
			label: n.createElement("div", null, (0, Localize)("#Privacy_Private")),
		},
		{
			data: 3,
			label: n.createElement("div", null, (0, Localize)("#Privacy_Unlisted")),
		},
		{
			data: 1,
			label: n.createElement(
				"div",
				null,
				(0, Localize)("#Privacy_FriendsOnly"),
			),
		},
		{
			data: 0,
			label: n.createElement("div", null, (0, Localize)("#Privacy_Public")),
		},
	];
	const d = (0, u.EH)(t);
	let p = null;
	const g = (e) => e.length > 0 && e.length <= 255;
	const h = async (e) => {
		let { result: n, publishedfileid: a } = await u.B6.CreateNewCollection(
			t,
			e,
			o,
			r.map((e) => e.publishedfileid),
		);
		if (n != 1) {
			s(Et.kError);
		} else {
			i();
		}
	};
	switch (a) {
		case Et.kInitial:
			p = n.createElement(_e.o0, {
				strTitle: (0, Localize)("#Workshop_Subscriptions_SaveToCollection"),
				strDescription: (0, Localize)(
					"#Workshop_Subscriptions_SaveToCollection_Prompt",
				),
				onOK: () => s(Et.kNewCollection),
				strOKButtonText: (0, Localize)(
					"#Workshop_Subscriptions_SaveToCollection_New",
				),
				onMiddleButton: () => s(Et.kExistingCollection),
				strMiddleButtonText: (0, Localize)(
					"#Workshop_Subscriptions_SaveToCollection_Existing",
				),
				onCancel: i,
			});
			break;
		case Et.kNewCollection:
			p = n.createElement(
				fe.Qj,
				{
					title: (0, Localize)("#Workshop_Subscriptions_SaveToCollection"),
					description: undefined,
					isValid: g,
					onResult: h,
					inputOptions: {
						maxLength: 255,
						label: (0, Localize)(
							"#Workshop_Subscriptions_SaveToCollection_NewCollectionName",
						),
						focusOnMount: true,
					},
					onCancel: i,
				},
				n.createElement(l.ZU, {
					selectedOption: 2,
					onChange: (e) => c(e.data),
					rgOptions: m,
				}),
			);
			break;
		case Et.kExistingCollection:
			p = n.createElement(
				_e.eV,
				{
					className: V.SaveToWorkshopCollection,
					closeModal: i,
					onCancel: i,
				},
				n.createElement(
					l.Y9,
					null,
					(0, Localize)(
						"#Workshop_Subscriptions_SaveToCollection_OverwriteCollection",
					),
				),
				n.createElement(
					"div",
					null,
					(0, Localize)(
						"#Workshop_Subscriptions_SaveToCollection_OverwriteCollection_Desc",
					),
				),
				n.createElement(
					F.Z,
					{
						className: V.WorkshopCollections,
						"flow-children": "column",
						focusableIfNoChildren: true,
					},
					d.data?.map((e) =>
						n.createElement(
							S.he,
							{
								key: e.publishedfileid,
								toolTipContent: e.short_description + "...",
							},
							n.createElement(
								F.Z,
								{
									className: V.WorkshopCollection,
									onActivate: () =>
										(async (e) => {
											if (
												(await u.B6.SaveToCollection(
													t,
													e,
													r.map((e) => e.publishedfileid),
												)) != 1
											) {
												s(Et.kError);
											} else {
												i();
											}
										})(e.publishedfileid),
									focusable: true,
								},
								e.preview_url &&
									n.createElement("img", {
										className: V.PreviewArt,
										src: e.preview_url,
									}),
								n.createElement(
									"div",
									{
										className: V.TextDetails,
									},
									e.title,
								),
							),
						),
					),
				),
			);
			break;
		case Et.kError:
			p = n.createElement(_e.KG, {
				strTitle: (0, Localize)("#Workshop_Subscriptions_SaveToCollection"),
				strDescription: (0, Localize)(
					"#Workshop_Subscriptions_SaveToCollection_Error",
				),
				onCancel: i,
				closeModal: i,
			});
	}
	return n.createElement(
		_e.EN,
		{
			active: true,
		},
		p,
	);
}
function Tt(e) {
	const { appid: t, closeModal: r } = e;
	const { ownerWindow: i } = (0, se.R7)();
	const a = (0, u.EH)(t);
	const s = (0, x.br)();
	const o = async (e, n) => {
		await u.B6.SetSubscriptionsFromCollection(t, e, n);
		r();
	};
	return n.createElement(
		_e.EN,
		{
			active: true,
		},
		n.createElement(
			_e.eV,
			{
				className: V.SubscribeCollectionDialog,
				closeModal: r,
				onCancel: r,
			},
			n.createElement(
				l.Y9,
				null,
				(0, Localize)("#Workshop_Subscriptions_ApplyCollection"),
			),
			n.createElement(
				"div",
				null,
				(0, Localize)("#Workshop_Subscriptions_ApplyCollection_Desc"),
			),
			n.createElement(
				F.Z,
				{
					className: V.WorkshopCollections,
					"flow-children": "column",
					focusableIfNoChildren: true,
				},
				a.data?.map((e) =>
					n.createElement(
						F.Z,
						{
							key: e.publishedfileid,
							className: V.WorkshopCollection,
						},
						e.preview_url &&
							n.createElement("img", {
								className: V.PreviewArt,
								src: e.preview_url,
							}),
						n.createElement(
							"div",
							{
								className: V.TextDetails,
							},
							e.title,
						),
						n.createElement(
							F.Z,
							{
								className: V.Controls,
								"flow-children": "row",
							},
							n.createElement(
								S.he,
								{
									toolTipContent: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_AddBtn",
									),
								},
								n.createElement(l.$n, {
									svgicon: () => n.createElement(K.AddContained, null),
									className: V.CollectionButton,
									onOKActionDescription: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_AddBtn",
									),
									onClick: () => o(e.publishedfileid, true),
								}),
							),
							n.createElement(
								S.he,
								{
									toolTipContent: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_OverwriteBtn",
									),
								},
								n.createElement(l.$n, {
									svgicon: () => n.createElement(K.Restore, null),
									className: V.CollectionButton,
									onOKActionDescription: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_OverwriteBtn",
									),
									onClick: () => o(e.publishedfileid, false),
								}),
							),
							n.createElement(
								S.he,
								{
									toolTipContent: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_ViewBtn",
									),
								},
								n.createElement(l.$n, {
									svgicon: () => n.createElement(K.Globe, null),
									className: V.CollectionButton,
									onOKActionDescription: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_ViewBtn",
									),
									onClick: () =>
										((e) => {
											let t = B.B7.BuildSteamURL("CommunityFilePage", e);
											s.SteamWeb(t);
											r();
										})(e.publishedfileid),
								}),
							),
							n.createElement(
								S.he,
								{
									toolTipContent: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_CopyLink",
									),
								},
								n.createElement(l.$n, {
									svgicon: () => n.createElement(K.Hyperlink, null),
									className: V.CollectionButton,
									onOKActionDescription: (0, Localize)(
										"#Workshop_Subscriptions_ApplyCollection_CopyLink",
									),
									onClick: () =>
										((e) => {
											let t = B.B7.ResolveURL("CommunityFilePage", e);
											i.navigator.clipboard.writeText(t);
										})(e.publishedfileid),
								}),
							),
						),
					),
				),
			),
		),
	);
}
(function (e) {
	e[(e.kInitial = 0)] = "kInitial";
	e[(e.kNewCollection = 1)] = "kNewCollection";
	e[(e.kExistingCollection = 2)] = "kExistingCollection";
	e[(e.kError = 3)] = "kError";
})((Et ||= {}));
const Rt = (0, a.PA)((e) => {
	const { details: t } = e;
	const r = (0, se.R7)();
	let i = u.B6.GetSubscribedItems(t.unAppID);
	let a = i?.filter((e) => e.details?.file_type != 15);
	const [s, o] = n.useState("");
	const [m, d] = n.useState("loadorder");
	const [p, h] = n.useState(false);
	const _ = n.useMemo(() => {
		let e = a;
		if (s) {
			const t = s.toLocaleLowerCase();
			e = a.filter((e) => {
				if (e.details?.title.toLocaleLowerCase().includes(t)) {
					return true;
				}
				if (e.details?.tags) {
					for (let r of e.details.tags) {
						if (r.toLocaleLowerCase().includes(t)) {
							return true;
						}
					}
				}
				if (e.details.author_snapshots?.length != 0) {
					const r = (0, Localize)(
						"#AppProperties_Workshop_Snapshot_Latest",
					).toLocaleLowerCase();
					for (let n of e.details.author_snapshots) {
						if (n.game_branch_min?.toLocaleLowerCase().includes(t)) {
							return true;
						}
						if (n.game_branch_max?.toLocaleLowerCase().includes(t)) {
							return true;
						}
						if (n.game_branch_min == "public" && r.includes(t)) {
							return true;
						}
						if (n.game_branch_max == "public" && r.includes(t)) {
							return true;
						}
					}
				}
				return false;
			});
		}
		if (m == "enabled" || m == "disabled") {
			let t = m == "disabled";
			e = e.filter((e) => e.disabled_locally == t);
		} else if (m == "missing_dependencies") {
			e = e.filter((e) => {
				if (!e.details?.children || e.details?.children.length == 0) {
					return false;
				}
				for (let t of e.details.children) {
					if (a.findIndex((e) => e.publishedfileid == t) == -1) {
						return true;
					}
				}
				return false;
			});
		}
		(function (e, t) {
			let r = true;
			if (
				t === "loadorder" ||
				t == "enabled" ||
				t == "disabled" ||
				t == "missing_dependencies"
			) {
				e.sort((e, t) => (r ? 1 : -1) * (e.load_order - t.load_order));
			} else if (t === "name") {
				e.sort((e, t) => {
					let n = r ? 1 : -1;
					let i = e.details?.title ?? e.publishedfileid;
					let a = t.details?.title ?? t.publishedfileid;
					return n * (0, C.lY)(i, a);
				});
			} else if (t === "subscribed") {
				r = false;
				e.sort(
					(e, t) => (r ? 1 : -1) * (e.time_subscribed - t.time_subscribed),
				);
			} else if (t === "updated") {
				r = false;
				e.sort((e, t) => (r ? 1 : -1) * (e.time_updated - t.time_updated));
			} else if (t === "size") {
				r = false;
				e.sort(
					(e, t) =>
						(r ? 1 : -1) *
						(parseFloat(e.file_size ?? e.details?.file_size) -
							parseFloat(t.file_size ?? t.details?.file_size)),
				);
			} else {
				(0, ce.w)(false, "Unknown WorkshopSortBy: ", t);
			}
		})(e, m);
		return e;
	}, [a, m, s]);
	const f = (0, g.Qn)();
	const b = s.length == 0 && m == "loadorder" && !f;
	const y = (0, M.bG)("SteamWorkshopPage", t.unAppID);
	const S = n.useCallback(
		(e, r) => {
			if (e.destination) {
				u.B6.ReorderSubscribedItems(
					t.unAppID,
					e.source.index,
					e.destination.index,
				);
			}
		},
		[t.unAppID],
	);
	const w = n.useCallback(() => {
		u.B6.ReorderSubscribedItemsByDependencies(t.unAppID);
	}, [t.unAppID]);
	const B = (e) => {
		let r = _.map((e) => e.publishedfileid);
		if (r?.length != 0) {
			SteamClient.Apps.SetWorkshopItemsDisabledLocally(t.unAppID, r, !e);
		}
	};
	const [v, I, E] = (0, Ce.uD)();
	const [T, R, k] = (0, Ce.uD)();
	const D = [
		{
			data: "loadorder",
			label: (0, Localize)(
				"#AppProperties_Workshop_Subscription_Sort_LoadOrder",
			),
		},
		{
			data: "name",
			label: (0, Localize)("#AppProperties_Workshop_Subscription_Sort_Name"),
		},
		{
			data: "subscribed",
			label: (0, Localize)(
				"#AppProperties_Workshop_Subscription_Sort_Subscribed",
			),
		},
		{
			data: "updated",
			label: (0, Localize)("#AppProperties_Workshop_Subscription_Sort_Updated"),
		},
		{
			data: "size",
			label: (0, Localize)("#AppProperties_Workshop_Subscription_Sort_Size"),
		},
		{
			data: "enabled",
			label: (0, Localize)("#AppProperties_Workshop_Subscription_Sort_Enabled"),
		},
		{
			data: "disabled",
			label: (0, Localize)(
				"#AppProperties_Workshop_Subscription_Sort_Disabled",
			),
		},
		{
			data: "missing_dependencies",
			label: (0, Localize)(
				"#AppProperties_Workshop_Subscription_Sort_MissingDependencies",
			),
		},
	];
	const N = n.useRef(undefined);
	const G = (0, pe.Te)({
		count: _.length,
		getScrollElement: () => N.current,
		getItemKey: n.useCallback((e) => _[e].publishedfileid, [_]),
		estimateSize: n.useCallback(
			(e) =>
				parseInt(V.nSubscribedWorkshopItemHeight) +
				parseInt(V.nSubscribedWorkshopItemMarginBottom),
			[],
		),
		overscan: 5,
	});
	n.useEffect(() => {
		let e = r.ownerWindow;
		const t = () => {
			window.requestAnimationFrame(() => G.measure());
		};
		e.addEventListener("resize", t);
		return () => e.removeEventListener("resize", t);
	}, [r.ownerWindow, G]);
	const O = n.useCallback(
		(e, r, a, s) => {
			const o = _[a.source.index];
			return n.createElement(It, {
				appid: t.unAppID,
				item: o,
				bCanDrag: b,
				itemListOriginal: i,
				sortBy: m,
				provided: e,
				snapshot: r,
				style: s,
			});
		},
		[t.unAppID, b, i, m, _],
	);
	const P = O;
	const L = n.useCallback(() => N.current, [N]);
	return n.createElement(
		l.nB,
		{
			className: V.NoScroll,
		},
		v &&
			n.createElement(Mt, {
				appid: t.unAppID,
				items: _,
				closeModal: E,
			}),
		T &&
			n.createElement(Tt, {
				appid: t.unAppID,
				closeModal: k,
			}),
		n.createElement(
			l.dR,
			null,
			n.createElement(
				l.$n,
				{
					className: (0, c.A)(V.SettingsDialogButton, V.ViewMore),
					onClick: y,
				},
				LocalizeReact("#AppProperties_Workshop_Visit", t.strDisplayName),
			),
			n.createElement(
				l.$n,
				{
					className: V.SettingsDialogButton,
					onClick: () => h(!p),
				},
				(0, Localize)(
					p
						? "#AppProperties_Workshop_Advanced_Hide"
						: "#AppProperties_Workshop_Advanced_Show",
				),
				n.createElement(K.DoubleCarat, {
					className: V.SortCaret,
					direction: p ? "up" : "down",
				}),
				" ",
			),
		),
		p &&
			n.createElement(
				"div",
				{
					className: V.AdvancedOptions,
				},
				n.createElement(
					l.D0,
					{
						bottomSeparator: "none",
						label: (0, Localize)("#AppProperties_Workshop_LoadOrder_Title"),
						description: (0, Localize)(
							"#AppProperties_Workshop_LoadOrder_Desc",
						),
					},
					n.createElement(
						l.$n,
						{
							className: V.SettingsDialogButton,
							onClick: w,
						},
						(0, Localize)("#AppProperties_Workshop_ResetLoadOrder"),
					),
				),
				n.createElement(
					l.D0,
					{
						label: (0, Localize)("#AppProperties_Workshop_ToggleEnabled"),
						description: (0, Localize)(
							"#AppProperties_Workshop_ToggleEnabled_Desc",
						),
					},
					n.createElement(
						l.$n,
						{
							className: (0, c.A)(V.SettingsDialogButton, V.EnableAllBtn),
							onClick: () => B(true),
						},
						(0, Localize)("#AppProperties_Workshop_EnableAll"),
					),
					n.createElement(
						l.$n,
						{
							className: (0, c.A)(V.SettingsDialogButton, V.DisableAllBtn),
							onClick: () => B(false),
						},
						(0, Localize)("#AppProperties_Workshop_DisableAll"),
					),
				),
				n.createElement(
					l.D0,
					{
						label: (0, Localize)("#AppProperties_Workshop_Collection_Presets"),
						description: (0, Localize)(
							"#AppProperties_Workshop_Collection_Presets_Desc",
						),
					},
					n.createElement(
						l.$n,
						{
							className: (0, c.A)(V.SettingsDialogButton, V.SaveCollectionBtn),
							onClick: I,
						},
						(0, Localize)("#AppProperties_Workshop_SaveFilteredToCollection"),
					),
					n.createElement(
						l.$n,
						{
							className: (0, c.A)(V.SettingsDialogButton, V.ShowCollectionsBtn),
							onClick: R,
						},
						(0, Localize)("#AppProperties_Workshop_ShowCollectionPresets"),
					),
				),
			),
		n.createElement(
			F.Z,
			{
				className: V.WorkshopTopRow,
				"flow-children": "row",
			},
			n.createElement(
				F.Z,
				{
					className: V.WorkshopOptionsContainer,
				},
				n.createElement(
					l.JU,
					null,
					(0, Localize)("#AppProperties_Workshop_Filter_Label"),
				),
				n.createElement(l.pd, {
					className: V.Search,
					value: s,
					onChange: (e) => o(e.currentTarget.value),
					bShowClearAction: true,
					placeholder: (0, Localize)("#AppProperties_Workshop_Filter"),
				}),
			),
			n.createElement(
				F.Z,
				{
					className: V.WorkshopOptionsContainer,
				},
				n.createElement(
					l.JU,
					null,
					(0, Localize)("#AppProperties_Workshop_SortBy_Label"),
				),
				n.createElement(l.ZU, {
					strDropDownButtonClassName: V.SortBy,
					rgOptions: D,
					onChange: (e) => d(e?.data),
					selectedOption: m,
					strDefaultLabel: (0, Localize)(
						"#AppProperties_Workshop_Subscription_Sort_LoadOrder",
					),
				}),
			),
		),
		n.createElement(
			F.Z,
			{
				className: V.WorkshopItemsRowsScrollable,
				ref: N,
			},
			n.createElement(
				oe.JY,
				{
					onDragEnd: S,
					stylesInsertionPoint: r.ownerWindow?.document?.head,
				},
				n.createElement(
					oe.gL,
					{
						droppableId: "droppable",
						renderClone: P,
						getContainerForClone: L,
						mode: "virtual",
					},
					(e, t) =>
						n.createElement(
							F.Z,
							{
								className: (0, c.A)(
									V.WorkshopItemRowsScroll,
									t.isDraggingOver && V.IsDraggingOver,
								),
								style: {
									height: G.getTotalSize(),
									width: "100%",
									position: "relative",
								},
								...e.droppableProps,
								ref: e.innerRef,
								"flow-children": "column",
								retainFocus: true,
							},
							G.getVirtualItems().map((e) => {
								const t = {
									position: "absolute",
									top: e.start,
									left: 0,
									width: "100%",
									height: `${parseInt(V.nSubscribedWorkshopItemHeight)}px`,
								};
								const r = _[e.index];
								return n.createElement(
									oe.sx,
									{
										draggableId: r.publishedfileid,
										index: e.index,
										key: r.publishedfileid,
										isDragDisabled: !b,
									},
									(e, r, n) => O(e, r, n, t),
								);
							}),
							e.placeholder,
						),
				),
			),
		),
	);
});
function kt(e) {
	return n.createElement("div", {
		className: e.hide
			? V.TriangleHide
			: e.ascending
				? V.TriangleDown
				: V.TriangleUp,
	});
}
function Dt(e) {
	let t = e ? 1 : -1;
	return (e, r) => t * (0, C.lY)(e.strName, r.strName);
}
const Nt = (0, a.PA)((e) => {
	const { appId: t } = e;
	const r = (0, g.Qn)();
	const i = o.tw.GetAppOverviewByAppID(t);
	const a = d.H.GetAppDetails(t);
	const [s] = (0, m.VI)("enable_overlay");
	const u =
		a.strShortcutStartDir && a.strShortcutStartDir[0] == '"'
			? a.strShortcutStartDir.slice(1, -1)
			: a.strShortcutStartDir || "";
	return n.createElement(
		l.nB,
		null,
		n.createElement(
			"div",
			{
				className: V.ShortcutRow,
			},
			n.createElement(
				"div",
				{
					className: V.Icon,
					onClick: () => {
						const e = [
							{
								strFileTypeName: "Image Files (*.tga,*.png)",
								rFilePatterns: ["*.tga", "*.png"],
							},
						];
						if ((0, g.td)()) {
							e.push({
								strFileTypeName: "Executables (*.exe)",
								rFilePatterns: ["*.exe"],
							});
						}
						SteamClient.System.OpenFileDialog({
							strTitle: (0, Localize)(
								"#AppProperties_Shortcut_ChooseIconDialogTitle",
							),
							rgFilters: e,
							strInitialFile: u,
						}).then((e) => {
							if (e) {
								SteamClient.Apps.SetShortcutIcon(t, e);
							}
						});
					},
				},
				n.createElement(_.z, {
					app: i,
					eAssetType: 4,
					className: V.AssetImage,
				}),
			),
			n.createElement(Gt, {
				className: V.Name,
				value: a.strDisplayName,
				setValue: (e) => SteamClient.Apps.SetShortcutName(t, e),
			}),
		),
		n.createElement(
			Gt,
			{
				className: V.SectionTopLine,
				spellCheck: false,
				value: a.strShortcutExe,
				setValue: (e) => SteamClient.Apps.SetShortcutExe(t, e),
				title: (0, Localize)("#AppProperties_Shortcut_TargetExecutable"),
			},
			n.createElement(
				l.$n,
				{
					className: (0, c.A)(V.SettingsDialogButton, V.ShortcutChange),
					onClick: () => {
						(0, U.V)(a.strShortcutStartDir).then((e) => {
							if (e) {
								SteamClient.Apps.SetShortcutExe(t, e);
							}
						});
					},
				},
				(0, Localize)("#AppProperties_Shortcut_BrowseFiles"),
			),
		),
		n.createElement(
			Gt,
			{
				className: V.TopGap,
				spellCheck: false,
				value: a.strShortcutStartDir,
				setValue: (e) => SteamClient.Apps.SetShortcutStartDir(t, e),
				title: (0, Localize)("#AppProperties_Shortcut_StartInFolder"),
			},
			n.createElement(
				l.$n,
				{
					className: (0, c.A)(V.SettingsDialogButton, V.ShortcutChange),
					onClick: () => {
						SteamClient.System.OpenFileDialog({
							strTitle: (0, Localize)(
								"#AppProperties_Shortcut_ChooseStartDirectoryDialogTitle",
							),
							strInitialFile: u,
							bChooseDirectory: true,
						}).then((e) => {
							if (e) {
								SteamClient.Apps.SetShortcutStartDir(t, e);
							}
						});
					},
				},
				(0, Localize)("#AppProperties_Shortcut_BrowseFiles"),
			),
		),
		n.createElement(Gt, {
			className: V.SectionTopLine,
			spellCheck: false,
			value: a.strLaunchOptions,
			setValue: (e) => SteamClient.Apps.SetShortcutLaunchOptions(t, e),
			title: (0, Localize)("#AppProperties_LaunchOptionsSection"),
		}),
		r &&
			n.createElement(Ye, {
				details: a,
			}),
		n.createElement(
			l.G5,
			null,
			n.createElement(l.y4, {
				label: (0, Localize)("#AppProperties_EnableOverlay"),
				checked: a.bOverlayEnabled && s,
				onChange: () =>
					SteamClient.Apps.ToggleEnableSteamOverlayForApp(a.unAppID),
				disabled: !s,
			}),
		),
		n.createElement(l.y4, {
			className: V.TopGapLarge,
			label: (0, Localize)("#AppProperties_Shortcut_InVR"),
			checked: a.bShortcutIsVR,
			onChange: () => SteamClient.Apps.SetShortcutIsVR(t, !a.bShortcutIsVR),
		}),
	);
});
const Ft = (0, a.PA)((e) => {
	const { appId: t } = e;
	const r = o.tw.GetAppOverviewByAppID(t);
	let i = O.yX.GetDeckCompatibilityFeedback(t);
	if (i == 0 || i == 3) {
		i = null;
	}
	const a = [
		{
			data: 1,
			label: (0, Localize)("#AppProperties_FeedbackPage_Agree"),
		},
		{
			data: 2,
			label: (0, Localize)("#AppProperties_FeedbackPage_Disagree"),
		},
	];
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(P.UN, {
			category: r.steam_deck_compat_category,
			appName: r.display_name,
			descriptionToken: "#SteamDeckVerified_Feedback_Question",
		}),
		n.createElement(l.Vb, {
			rgOptions: a,
			selectedOption: i,
			onChange: (e) => O.yX.SetDeckCompatibilityFeedback(t, e.data),
		}),
	);
});
function Gt(e) {
	const [t, r] = n.useState(e.value);
	const i = n.useRef([]);
	n.useEffect(() => {
		if (i.current.length > 0) {
			const t = i.current.indexOf(e.value);
			if (t === -1) {
				i.current = [];
				r(e.value);
			} else {
				i.current.splice(0, t + 1);
			}
		} else if (e.value !== t) {
			i.current = [];
			r(e.value);
		}
	}, [e.value]);
	return n.createElement(
		"div",
		{
			className: e.className,
		},
		e.title &&
			n.createElement(
				"div",
				{
					className: V.Title,
				},
				e.title + (t !== e.value ? "..." : ""),
			),
		e.details &&
			n.createElement(
				"div",
				{
					className: V.Detail,
				},
				e.details,
			),
		n.createElement(
			"div",
			{
				className: (0, c.A)(
					V.AsyncBackedInputChildren,
					!!e.title && V.TopGameSmall,
				),
			},
			n.createElement(l.pd, {
				spellCheck: e.spellCheck,
				value: t,
				onChange: (t) => {
					const n = t.currentTarget.value;
					i.current.push(n);
					r(n);
					e.setValue(n);
				},
			}),
			e.children,
		),
	);
}
function Ot(e) {
	const { checked: t, onChange: r, className: i, disabled: a, label: s } = e;
	return n.createElement(l.Yh, {
		className: (0, c.A)(V.Checkbox, i, a && V.Disabled),
		label: s,
		checked: t,
		onChange: r,
		disabled: a,
	});
}
