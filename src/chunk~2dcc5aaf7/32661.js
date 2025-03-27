import { Localize } from "../../actual_src/utils/localization.js";
import { P0 } from "../../actual_src/utils/localization/datetime.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useRef, useState } from "./63696.js";
import i from "./67863.js";
import a from "./73375.js";
import s, { v as v_1 } from "./55700.js";
import o from "./64608.js";
import l, { Nr } from "./42318.js";
import c from "./10606.js";
import u from "./17373.js";
import d, { D as D_1 } from "./24590.js";
import h, { Ll } from "./95979.js";
import C, { e_ as e, t0, VI } from "./34792.js";
import _, { gc, vJ, CH, hL, Ue as Ue_2 } from "./52451.js";
import f, { cZ } from "./81969.js";
import y from "./63367.js";
import S, { CI, hf } from "./72476.js";
import w from "./59840.js";
import v, { A as A_2 } from "./90765.js";
import I from "./35488.js";
import T, { PA, q3 } from "./90095.js";
import R from "./5790.js";
import D, { cM } from "./50341.js";
import N, { Tt as Tt_2, wN, Yk } from "./89411.js";
import F from "./87935.js";
import G from "./30449.js";
import O from "./97893.js";
import P, { dm } from "./34428.js";
import { qw, iZ, Wx } from "./89748.js";
import te from "./11958.js";
import ie from "./51964.js";
import ae from "./43873.js";
import se from "./29670.js";
import oe from "./47356.js";
import le from "./11536.js";
import ce from "./72655.js";
import me from "./55116.js";
import { bG, Qt as Qt_2 } from "./18057.js";
import de from "./81994.js";
import ge, { xn } from "./46422.js";
import { Co, _R } from "./96593.js";
import Ce from "./26853.js";
import _e from "./29505.js";
import { Cg } from "./34629.js";
import { lX } from "./31084.js";
import we from "./88750.js";
import { pg } from "./13869.js";
import ve, { R7 } from "./11131.js";
import Ee from "./43599.js";
import { I as I_2 } from "./61416.js";
import Te from "./66248.js";
import Re from "./50376.js";
import ke, { useTable } from "./50169.js";
import { Te as Te_2 } from "./55007.js";
import Ne, { Gn } from "./89193.js";
import { w as w_2 } from "./49455.js";
import Ge, { m, j as j_2 } from "./56332.js";
import { Z as Z_2, q as q_2 } from "./9758.js";
import rt from "./78055.js";
import nt from "./81827.js";
import { mJ } from "./45967.js";
import lt from "./52177.js";
import ct from "./63098.js";
import dt from "./59718.js";
import "./27954.js";
import At from "./32792.js";
import pt from "./73128.js";
import ht from "./28987.js";
import Ct from "./83599.js";
import _t from "./13337.js";
import yt from "./21110.js";
import St from "./46430.js";
import wt, { _U, Dk } from "./76356.js";
import Bt from "./30496.js";
import vt from "./56262.js";
import { T as T_2 } from "./78057.js";
import Mt from "./33512.js";
import Tt, { M as M_2 } from "./51517.js";
import Rt from "./40692.js";
import Lt from "./17024.js";
import xt from "./94496.js";
import Ht from "./37086.js";
import jt from "./28592.js";
import qt from "./95753.js";
import Qt, { XA } from "./91720.js";
import tr from "./13656.js";
import rr from "./31627.js";
const A = Nr(() => {
	const [e, t] = n.useState();
	const [r, i] = n.useState();
	const a = n.useRef(null);
	a.current = r;
	n.useEffect(
		() =>
			SteamClient.Apps.RegisterForShowMarketingMessageDialog((e) => {
				t(e);
				a.current?.SteamClient.Window.BringToFront();
			}).unregister,
		[a],
	);
	const s = n.useCallback(() => {
		t(undefined);
		SteamClient.Apps.ReportMarketingMessageDialogShown();
	}, []);
	if (e) {
		return n.createElement(
			c.hM,
			{
				strTitle: Localize("#LibraryHome_MarketingMessages"),
				onDismiss: s,
				popupWidth: 706,
				popupHeight: 830,
				refPopup: i,
				className: u.MarketingMessagesDialog,
			},
			n.createElement(p, {
				strURL: e,
				popup: r,
				onClose: s,
			}),
		);
	} else {
		return null;
	}
});
function p(e) {
	const { strURL: t, onClose: r, popup: i } = e;
	const [o, l] = v_1(i, "MessageDisplay", {
		strURL: t,
	});
	D_1(o);
	if (o) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(a.m4, {
				browser: o,
				visible: l,
				style: {
					display: "block",
				},
				className: u.BrowserViewHost,
			}),
			n.createElement(g, {
				onClose: r,
				browser: o,
			}),
		);
	} else {
		return null;
	}
}
function g(e) {
	const { onClose: t, browser: r } = e;
	const [i, a] = n.useState();
	n.useEffect(() => {
		if (r) {
			r.on("message", (e, t) => {
				if (e == "MarketingMessageLegal") {
					a(t);
				}
			});
			try {
				r.PostMessage("MarketingMessageDialogReady", "");
			} catch (e) {}
		}
	}, [r]);
	return n.createElement(
		"div",
		{
			className: u.FooterControls,
		},
		n.createElement("div", {
			className: u.Legal,
			dangerouslySetInnerHTML: {
				__html: i,
			},
		}),
		n.createElement(
			"div",
			{
				className: u.ButtonWrapper,
			},
			n.createElement(
				o.$n,
				{
					onClick: t,
				},
				Localize("#Button_Close"),
			),
		),
	);
}
const B = w;
const E = Nr(() => {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState();
	n.useEffect(
		() =>
			y.Dt.RegisterForRunSteamURL(7, "open/about", (e, r) => {
				t(true);
			}).unregister,
		[],
	);
	const a = n.useCallback(() => {
		t(false);
	}, [t]);
	if (!e) {
		return null;
	}
	const s = Localize("#Menu_About");
	return n.createElement(
		c.hM,
		{
			strTitle: s,
			onDismiss: a,
			popupWidth: 500,
			popupHeight: 300,
			refPopup: i,
			className: A_2(B.AboutSteamDialog, B.Desktop),
		},
		n.createElement(
			o.Y9,
			{
				className: B.DialogHeader,
			},
			n.createElement(I.SteamLogo, {
				className: B.SteamLogoIcon,
			}),
			s,
		),
		n.createElement(
			o.a3,
			{
				className: B.DialogBodyText,
			},
			n.createElement(M, null),
		),
		n.createElement(
			o.wi,
			null,
			n.createElement(
				o.$n,
				{
					onClick: a,
				},
				Localize("#Button_Close"),
			),
		),
	);
});
function M() {
	const [e] = e("b24HourClock");
	const t = gc(C.rV.CurrentTimeZoneID);
	const r = vJ(() => SteamClient.Settings.GetAvailableTimeZones(), []);
	const i = r?.find((e) => e.timezoneID == t);
	const a = i ? cZ(i) : "";
	const s = t0();
	const o = s.vecAvailableClientBetas.find(
		(e) => e.nBetaID == s.nSelectedBetaID,
	);
	const l = o ? o?.strName : Localize("#Settings_System_SteamBeta_None");
	const c = Ll();
	if (!c) {
		return null;
	}
	const u =
		c.nSteamVersion > 0
			? c.nSteamVersion.toString()
			: Localize("#Settings_System_SteamLocalBuild");
	const d = parseInt(1741736707);
	const A = d && (0, P0)(d, e, a);
	const p = c.sSteamBuildDate;
	const g = CI() ? " GMT+0000" : " GMT-0800";
	const y = Date.parse(p + g) / 1000;
	const w = y ? (0, P0)(y, e, a) : p;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"span",
			{
				className: B.DialogBodyLabel,
			},
			Localize("#Settings_System_SteamBeta"),
			":",
		),
		" \xA0",
		l,
		n.createElement("br", null),
		n.createElement(
			"span",
			{
				className: B.DialogBodyLabel,
			},
			Localize("#Settings_System_SteamVersion"),
			":",
		),
		" \xA0",
		u,
		n.createElement("br", null),
		n.createElement(
			"span",
			{
				className: B.DialogBodyLabel,
			},
			Localize("#Settings_System_SteamBuildDate"),
			":",
		),
		" \xA0",
		w,
		n.createElement("br", null),
		n.createElement(
			"span",
			{
				className: B.DialogBodyLabel,
			},
			Localize("#Settings_System_SteamWebBuildDate"),
			":",
		),
		" \xA0",
		A,
		n.createElement("br", null),
		n.createElement(
			"span",
			{
				className: B.DialogBodyLabel,
			},
			Localize("#Settings_System_SteamAPIVersion"),
			":",
		),
		" \xA0",
		c.sSteamAPI,
		n.createElement("br", null),
	);
}
const k = R;
const L = Nr(() => {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState();
	Tt_2();
	n.useEffect(
		() =>
			y.Dt.RegisterForRunSteamURL(7, "checkforupdates", (e, r) => {
				t(true);
			}).unregister,
		[],
	);
	const a = n.useCallback(() => {
		t(false);
	}, [t]);
	if (!e) {
		return null;
	}
	const s = Localize("#Settings_Updates_Header");
	return n.createElement(
		c.hM,
		{
			strTitle: s,
			onDismiss: a,
			popupWidth: 450,
			popupHeight: 300,
			refPopup: i,
			className: k.CheckForUpdatesDialog,
		},
		n.createElement(
			o.Y9,
			{
				className: k.DialogHeader,
			},
			s,
		),
		n.createElement(
			o.a3,
			{
				className: k.DialogBodyText,
			},
			n.createElement(z, {
				popup: r,
				onClose: a,
			}),
		),
	);
});
const z = PA((e) => {
	const [t, r] = n.useState({
		eResult: 1,
		strMsg: null,
	});
	const [i, a] = n.useState(false);
	const s = Tt_2();
	const o = n.useCallback(() => J(r), []);
	n.useEffect(() => {
		s.CheckForUpdates(o());
		console.log("checking for updates");
	}, [s, o]);
	let l = s.m_updateState.state;
	let c = {
		0: null,
		2: U,
		3: W,
		4: V,
		5: H,
		6: _j,
		7: Q,
		8: Q,
	}[l];
	let m = {
		0: null,
		2: null,
		3: null,
		4: Z,
		5: null,
		6: null,
		7: null,
		8: null,
	}[l];
	if (t.eResult != 1) {
		c = $;
		m = null;
		l = 0;
	}
	if (l == 6 && i) {
		c = q;
	}
	x(l, e.popup);
	return n.createElement(
		n.Fragment,
		null,
		c &&
			n.createElement(c, {
				popup: e.popup,
				...t,
			}),
		n.createElement("br", null),
		n.createElement("br", null),
		!i &&
			n.createElement(Y, {
				state: l,
				onApplyUpdate:
					l == 4
						? () => {
								const e = s.GetAvailableTypes();
								s.ApplyUpdate(e, o());
								console.log("Applying updates");
							}
						: null,
				onRestart:
					l == 6
						? () => {
								SteamClient.User.StartRestart(false);
								a(true);
							}
						: null,
				onClose: e.onClose,
			}),
		n.createElement("br", null),
		m &&
			n.createElement(m, {
				popup: e.popup,
				...t,
			}),
	);
});
const x = (e, t) => {
	if (!t) {
		return;
	}
	let r = 450;
	let n = 300;
	if (e == 4) {
		r = 900;
		n = 900;
	}
	if (t.outerWidth != r || t.outerHeight != n) {
		const e = t.screenX + t.outerWidth / 2;
		const i = t.screenY + t.outerHeight / 2;
		console.log(`resizing updater dialog to ${r}, ${n}`);
		t.SteamClient.Window.ResizeTo(r, n, true);
		t.SteamClient.Window.MoveTo(Math.round(e - r / 2), Math.round(i - n / 2));
	}
};
const U = (e) =>
	n.createElement(
		"div",
		null,
		Localize("#Settings_Updates_NoUpdatesAvailable"),
	);
const W = (e) =>
	n.createElement("div", null, Localize("#Settings_Updates_Checking"));
const V = (e) =>
	n.createElement("div", null, Localize("#Settings_Updates_UpdatePending"));
const H = (e) => {
	const t = Tt_2();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(K, {
			...e,
		}),
		n.createElement("br", null),
		n.createElement(G.z2, {
			nProgress: t.GetProgressPercent(),
			nTransitionSec: 0.3,
		}),
		n.createElement("br", null),
		n.createElement(X, {
			...e,
		}),
	);
};
const _j = (e) =>
	n.createElement("div", null, Localize("#Settings_Updates_RestartClient"));
const q = (e) =>
	n.createElement("div", null, Localize("#Settings_Updates_Restarting"));
const Q = (e) =>
	n.createElement(
		"div",
		{
			className: k.Error,
		},
		Localize("#Settings_Updates_UpdateError_Generic"),
	);
const Z = (e) => {
	const t = cM();
	const r = F.B7.ResolveURL(
		t ? "SteamClientBetaNewsPageFancy" : "SteamClientNewsPage",
	);
	const [i, o] = v_1(e.popup, "Steam Client Update Notes", {
		strURL: r,
	});
	if (i) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement("br", null),
			n.createElement(a.m4, {
				browser: i,
				visible: o,
				style: {
					display: "block",
				},
				className: k.BrowserViewHost,
			}),
		);
	} else {
		return null;
	}
};
const Y = (e) => {
	const t = Localize("#Button_Close");
	if (e.onApplyUpdate || e.onRestart) {
		return n.createElement(o.CB, {
			onOK: e.onApplyUpdate ?? e.onRestart,
			strOKText: e.onApplyUpdate
				? Localize("#Settings_Updates_UpdateApply")
				: Localize("#Settings_Updates_RestartClientNow"),
			onCancel: e.onClose,
			strCancelText: t,
		});
	} else {
		return n.createElement(
			o.$n,
			{
				onClick: e.onClose,
			},
			t,
		);
	}
};
const K = (e) => {
	const t = wN();
	let r = "";
	if (t) {
		r = O.hj.LocalizeTimeRemaining(t);
	}
	return n.createElement(
		"div",
		{
			className: k.TimeRemaining,
		},
		r,
	);
};
const X = (e) => {
	const t = Tt_2();
	const r = t.m_updateState;
	const i = r?.progress?.stage_progress;
	const a = t.GetUpdateSize();
	if (a == null) {
		return null;
	}
	const s = a * i ?? null;
	const o = a ? dm(a, 0) : "? MB";
	const l = s ? dm(s, 0) : "? MB";
	return n.createElement(
		"div",
		{
			className: k.UpdateBytesRemaining,
		},
		Localize("#Settings_Updates_UpdateDownloading_Progress", l, o),
	);
};
const J = (e) => (t) => {
	e(t);
	return Promise.resolve();
};
const $ = (e) => {
	const t = n.createElement(
		"div",
		{
			className: k.Error,
		},
		Localize("#Settings_Updates_UpdateError_Generic"),
	);
	return n.createElement(
		n.Fragment,
		null,
		t,
		e.strMsg &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement("br", null),
				n.createElement(
					"div",
					{
						className: k.Error,
					},
					e.strMsg,
				),
			),
	);
};
const re = Nr(() => {
	const e = hf();
	const t = q3(() => qw().GetCurrentUser()?.bPromptToChangePassword);
	const r = q3(() => qw().GetCurrentUser()?.strClientInstanceID);
	const [i, a] = n.useState(false);
	n.useEffect(() => {
		a(t);
	}, [t]);
	const s = n.useCallback(() => {
		a(false);
	}, [a]);
	if (!i || !e) {
		return null;
	}
	const o = F.B7.ResolveURL("HelpChangePassword", r);
	const l = Localize("#SteamUI_Dialog_HelpChangePassword_Title");
	return n.createElement(te.W, {
		strName: l,
		strURL: o,
		popupWidth: 1024,
		popupHeight: 768,
		onClose: s,
	});
});
const ne = Nr(() => {
	const e = hf();
	const t = iZ();
	const [r, i] = n.useState(false);
	n.useEffect(
		() =>
			y.Dt.RegisterForRunSteamURL(7, "open/changeemail", (e, t) => {
				i(true);
			}).unregister,
		[],
	);
	const a = n.useCallback(() => {
		i(false);
	}, [i]);
	if (!r || !e) {
		return null;
	}
	const s = F.B7.ResolveURL("HelpChangeEmail", t.strClientInstanceID);
	const o = Localize("#SteamUI_Dialog_HelpChangeEmail_Title");
	return n.createElement(te.W, {
		strName: o,
		strURL: s,
		popupWidth: 1024,
		popupHeight: 768,
		onClose: a,
	});
});
const Ae = Nr(() => {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState();
	const a = bG("HardwareSurvey");
	const s = n.useCallback(() => {
		t(true);
	}, []);
	const l = n.useCallback(() => {
		t(false);
	}, []);
	const u = n.useCallback(() => {
		a();
		t(false);
	}, [a]);
	n.useEffect(
		() =>
			y.Dt.RegisterForRunSteamURL(7, "open/systeminfo", (e, t) => s())
				.unregister,
		[s],
	);
	if (!e) {
		return null;
	}
	const d = Localize("#Menu_SystemInfo");
	return n.createElement(
		c.hM,
		{
			strTitle: d,
			onDismiss: l,
			popupWidth: 600,
			popupHeight: 500,
			refPopup: i,
			resizable: true,
		},
		n.createElement(
			"div",
			{
				className: A_2(le.HardwareSurveyDialog, le.Desktop),
			},
			n.createElement(
				o.Y9,
				{
					className: le.DialogHeader,
				},
				d,
			),
			n.createElement(
				o.a3,
				{
					className: le.DialogBodyText,
				},
				Localize("#SteamUI_Dialog_SystemInfo_Desc"),
			),
			n.createElement(pe, null),
			n.createElement(
				o.wi,
				{
					className: le.FooterControls,
				},
				n.createElement(o.CB, {
					onOK: u,
					strOKText: Localize("#SteamUI_Dialog_SystemInfo_ViewSurvey"),
					onCancel: l,
					strCancelText: Localize("#SteamUI_Dialog_SystemInfo_Close"),
				}),
			),
		),
	);
});
function pe() {
	let [e, t] = n.useState([]);
	const r = n.useCallback((e) => {
		t(e);
	}, []);
	n.useEffect(() => {
		SteamClient.User.RunSurvey(r);
	}, [r]);
	return n.createElement(
		n.Fragment,
		null,
		e.length == 0 && n.createElement(de.j, null),
		e.length != 0 &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					ce.f7,
					{
						className: le.HardwareSurveySections,
						scrollStepPercent: 60,
					},
					n.createElement(
						me.g,
						null,
						e.map((e, t) =>
							n.createElement(oe.qJ, {
								key: t,
								surveyData: e,
							}),
						),
					),
				),
			),
	);
}
const fe = _e;
function be(e) {
	const {
		eShutdownState: t,
		appid: r,
		bAllowForceQuit: i,
		bFailed: a,
	} = q3(() => ({
		...ge.oy.GetShutdownState(),
	}));
	const s = Co(r);
	let l = a && s;
	let u = Localize("#Steam_Shutdown_Generic");
	switch (t) {
		case 0:
		case 8:
		case 1: {
			break;
		}
		case 2:
		case 6: {
			if (s) {
				u = Localize("#Steam_Shutdown_Waiting_For_Game", s.display_name);
			}
			break;
		}
		case 3: {
			u = Localize("#Steam_Shutdown_Waiting_For_Cloud");
			break;
		}
		case 4: {
			u = Localize("#Steam_Shutdown_Finishing_Download");
			break;
		}
		case 5: {
			if (s) {
				u = Localize("#Steam_Shutdown_Waiting_For_Download", s.display_name);
			}
			break;
		}
		case 7: {
			u = Localize("#Steam_Shutdown_Waiting_For_Logoff");
		}
	}
	if (l) {
		u = Localize("#Steam_AppMustBeClosedToQuit_Info", s.display_name);
	}
	return n.createElement(
		c.EN,
		{
			active: t != 0 || a,
		},
		n.createElement(
			c.hM,
			{
				strTitle: Localize("#Steam_Shutdown_Dialog_Title"),
				popupWidth: 600,
				popupHeight: 240,
				modalClassName: fe.ShutdownDialog,
				resizable: false,
				onDismiss: () => {},
			},
			n.createElement(
				o.nB,
				{
					className: fe.Body,
				},
				n.createElement(Ce.t, null),
				n.createElement(o.a3, null, u),
				!l &&
					n.createElement(
						"div",
						{
							className: fe.Buttons,
						},
						n.createElement(
							o.jn,
							{
								className: fe.Button,
								disabled: !i,
								onClick: () => SteamClient.User.ForceShutdown(),
							},
							Localize("#Steam_Shutdown_ForceQuit"),
						),
						n.createElement(
							o.$n,
							{
								className: fe.Button,
								onClick: () => SteamClient.User.CancelShutdown(),
							},
							Localize("#Button_Cancel"),
						),
					),
				l &&
					n.createElement(
						o.jn,
						{
							className: fe.Button,
							onClick: ge.oy.ClearShutdownFailure,
						},
						Localize("#Button_OK"),
					),
			),
		),
	);
}
const Pe = Nr(() => n.createElement(tt, null));
function Le(e) {
	if (e.ip) {
		return `${e.ip}:${e.port}`;
	} else {
		return "";
	}
}
let ze;
const xe = {
	id: "players",
	desc: true,
};
const Ue = {
	sortBy: [xe],
	hiddenColumns: ["botPlayers", "ip"],
};
let We;
function Ve() {
	if (We) {
		console.log("Saving ServerBrowser preferences");
		SteamClient.ServerBrowser.SetServerListPreferences(We);
	}
}
class He {
	id;
	all_servers = [];
	filtered_servers = [];
	nActiveServerListRequestID = 0;
	selectedServer = null;
	strLastSearchSettingsAsString = "";
	bRefreshNextTimeWeAreVisible = false;
	sEmptyListExplanation = "";
	seq_num = 0;
	pending_servers = [];
	timerFlushPendingServers = undefined;
	sortByState = xe;
	fnResorted = null;
	m_owner;
	constructor(e, t) {
		Gn(this);
		this.m_owner = e;
		this.id = t;
		this.bRefreshNextTimeWeAreVisible = t != "internet";
		this.FindFilterGameObj();
	}
	BRequestActive() {
		return this.nActiveServerListRequestID != 0;
	}
	Prefs() {
		const e = We && We.filters && We.filters[this.id];
		w_2(e, "Order of operations bug, preferences not loaded?");
		return e;
	}
	StartedRequest(e) {
		Ve();
		this.DestroyRequest();
		this.nActiveServerListRequestID = e;
		this.strLastSearchSettingsAsString = this.GetSearchSettingsAsString();
		console.log(
			`Started ServerListRequest ${this.nActiveServerListRequestID} for server tab ${this.id}, settings '${this.strLastSearchSettingsAsString}'`,
		);
		this.Modified();
	}
	DestroyRequest() {
		if (this.nActiveServerListRequestID) {
			console.log(
				`Destroy ServerListRequest ${this.nActiveServerListRequestID} for server tab ${this.id}`,
			);
			SteamClient.ServerBrowser.DestroyServerListRequest(
				this.nActiveServerListRequestID,
			);
			this.nActiveServerListRequestID = 0;
			this.Modified();
		}
	}
	ClearServers() {
		this.all_servers = [];
		this.filtered_servers = [];
		this.pending_servers = [];
		this.selectedServer = null;
		this.DestroyFlushPendingServersTimer();
		this.Modified();
	}
	AddServer(e) {
		this.pending_servers.push(e);
		this.ScheduleFlush();
	}
	SetSelectedServer(e) {
		if (this.selectedServer != e) {
			this.selectedServer = e;
			this.Modified();
		}
	}
	Modified() {
		this.seq_num += 1;
	}
	FlushPendingServers() {
		this.DestroyFlushPendingServersTimer();
		for (let e of this.pending_servers) {
			let t = {
				...e,
				bMatchesFilter: undefined,
				idxUnfiltered: this.all_servers.length,
				idxFiltered: undefined,
			};
			this.SetServerCompareValue(t);
			this.all_servers.push(t);
		}
		this.pending_servers = [];
		this.all_servers.sort((e, t) => {
			if (e.compare_val == null) {
				if (t.compare_val != null) {
					return 1;
				}
			} else {
				if (t.compare_val == null) {
					return -1;
				}
				if (e.compare_val < t.compare_val) {
					if (this.sortByState.desc) {
						return 1;
					} else {
						return -1;
					}
				}
				if (e.compare_val > t.compare_val) {
					if (this.sortByState.desc) {
						return -1;
					} else {
						return 1;
					}
				}
			}
			return e.idxUnfiltered - t.idxUnfiltered;
		});
		this.filtered_servers = [];
		const e = this.Prefs();
		const t = (e.map || "").toLowerCase();
		const r = (e.name || "").toLowerCase();

		this.all_servers.forEach((i, n) => {
			i.idxUnfiltered = n;
			i.idxFiltered = this.filtered_servers.length;
			if (
				(e.NoEmpty && i.players == 0) ||
				(e.NoFull && i.players >= i.maxPlayers) ||
				(e.NoPassword && i.bPassword) ||
				(e.Secure == 1 && i.bSecure == 0) ||
				(e.Secure == 2 && i.bSecure) ||
				(e.ping > 0 && i.ping > e.ping) ||
				(e.appid && i.appid && e.appid != i.appid) ||
				(t && i.map != null && !i.map.toLowerCase().includes(t)) ||
				(r && i.name != null && !i.name.toLowerCase().includes(r))
			) {
				i.bMatchesFilter = false;
			} else {
				i.bMatchesFilter = true;
				this.filtered_servers.push(i);
			}
		});

		if (this.fnResorted) {
			this.fnResorted();
		}
		this.Modified();
	}
	DestroyFlushPendingServersTimer() {
		if (this.timerFlushPendingServers != null) {
			window.clearTimeout(this.timerFlushPendingServers);
			this.timerFlushPendingServers = undefined;
		}
	}
	SetFilterNoFull(e) {
		this.Prefs().NoFull = e;
		this.FlushPendingServers();
	}
	SetFilterNoEmpty(e) {
		this.Prefs().NoEmpty = e;
		this.FlushPendingServers();
	}
	SetFilterNoPassword(e) {
		this.Prefs().NoPassword = e;
		this.FlushPendingServers();
	}
	SetFilterPing(e) {
		this.Prefs().ping = e;
		this.FlushPendingServers();
	}
	SetFilterSecure(e) {
		this.Prefs().Secure = e;
		this.FlushPendingServers();
	}
	SetFilterName(e) {
		this.Prefs().name = e;
		this.ScheduleFlush();
		this.Modified();
	}
	SetFilterMap(e) {
		this.Prefs().map = e;
		this.ScheduleFlush();
		this.Modified();
	}
	SetFilterGameAppID(e) {
		let t = this.Prefs();
		t.game = "";
		t.appid = e;
		this.FindFilterGameObj();
		this.FlushPendingServers();
	}
	FindFilterGameObj() {
		const e = this.Prefs();
		this.m_filterGameObj = null;
		if (e) {
			for (const t of this.m_owner.GetMultiplayerGames()) {
				if (t.appid == e.appid) {
					this.m_filterGameObj = t;
					break;
				}
			}
		}
	}
	m_filterGameObj = null;
	SetFilterGame(e) {
		let t = this.Prefs();
		this.m_filterGameObj = e;
		t.game = e ? e.gamedir : "";
		t.appid = e ? e.appid : 0;
		this.FlushPendingServers();
	}
	GetFilterGame() {
		return this.m_filterGameObj;
	}
	GetSearchSettings() {
		let e = [];
		let t = 0;
		if (this.id == "internet") {
			const r = this.Prefs();
			t = r.appid;
			if (r.game) {
				e.push("gamedir");
				e.push(r.game);
			}
			if (r.NoFull) {
				e.push("notfull");
				e.push("1");
			}
			if (r.NoEmpty) {
				e.push("hasplayers");
				e.push("1");
			}
		}
		return [t, e];
	}
	GetSearchSettingsAsString() {
		const [e, t] = this.GetSearchSettings();
		return `${e}/${t.join("/")}`;
	}
	SetSortByState(e) {
		const t = JSON.stringify(e);
		if (t != JSON.stringify(this.sortByState)) {
			this.sortByState = JSON.parse(t);
			for (let e of this.all_servers) {
				this.SetServerCompareValue(e);
			}
			this.FlushPendingServers();
		}
	}
	SetServerCompareValue(e) {
		e.compare_val = undefined;
		switch (this.sortByState.id) {
			case "bPassword": {
				if (e.bHadSuccessfulResponse && e.bPassword != null) {
					e.compare_val = e.bPassword ? 1 : 0;
				}
				break;
			}
			case "bSecure": {
				if (e.bHadSuccessfulResponse && e.bSecure != null) {
					e.compare_val = e.bSecure ? 1 : 0;
				}
				break;
			}
			case "botPlayers": {
				if (e.bHadSuccessfulResponse && e.botPlayers != null) {
					e.compare_val = e.botPlayers > 0 ? 1 : 0;
				}
				break;
			}
			case "ip": {
				if (e.ip && e.port) {
					e.compare_val = `${e.ip}:${`00000${e.port}`.slice(-5)}`;
				}
				break;
			}
			case "players": {
				if (e.players >= 0) {
					e.compare_val = e.players;
				}
				break;
			}
			case "ping": {
				if (e.ping >= 0) {
					e.compare_val = e.ping;
				}
				break;
			}
			default: {
				if (e.bHadSuccessfulResponse) {
					e.compare_val = e[this.sortByState.id];
				}
			}
		}
	}
	StartSearch() {
		this.bRefreshNextTimeWeAreVisible = false;
		this.sEmptyListExplanation = "";
		this.DestroyRequest();
		this.ClearServers();
		const e = this;
		const [t, r] = this.GetSearchSettings();
		console.log("Starting server list request");
		SteamClient.ServerBrowser.CreateServerListRequest(
			t,
			e.id,
			r,
			(t) => {
				if (t.bDoNotRefresh || !t.bHadSuccessfulResponse) {
					if (
						e.id == "internet" ||
						e.id == "lan" ||
						e.id == "lan" ||
						e.id == "history"
					) {
						return;
					}
					t.gameDesc = Localize("#ServerBrowser_NotResponding");
					t.players = undefined;
					t.maxPlayers = undefined;
					t.map = undefined;
					t.ping = undefined;
				}
				e.AddServer(t);
			},
			(t) => e.RefreshComplete(t),
		).then((t) => {
			e.StartedRequest(t);
		});
	}
	RefreshComplete(e) {
		console.log("RefreshComplete");
		this.FlushPendingServers();
		this.DestroyRequest();
		if (this.filtered_servers.length == 0) {
			let t = "";
			t =
				this.id == "lan"
					? this.all_servers.length > 0
						? "#ServerBrowser_NoServersMatch"
						: "#ServerBrowser_NoLanServers"
					: this.id == "internet"
						? this.all_servers.length > 0
							? "#ServerBrowser_NoInternetGamesMatch"
							: e == 1
								? "#ServerBrowser_MasterServerNotResponsive"
								: e == 2
									? "#ServerBrowser_MasterServerHasNoServersListed"
									: "#ServerBrowser_NoInternetGamesResponded"
						: this.id == "favorites"
							? this.all_servers.length > 0
								? "#ServerBrowser_NoServersMatch"
								: "#ServerBrowser_NoFavoriteServers"
							: this.id == "history"
								? this.all_servers.length > 0
									? "#ServerBrowser_NoHistoryServersMatch"
									: "#ServerBrowser_NoServersPlayed"
								: this.id == "friends"
									? this.all_servers.length > 0
										? "#ServerBrowser_NoServersMatch"
										: "#ServerBrowser_NoFriendsServers"
									: "BUGBUG";
			if (t) {
				this.sEmptyListExplanation = Localize(t);
			}
		}
	}
	ScheduleFlush() {
		if (this.timerFlushPendingServers === undefined) {
			let e = 10 + this.all_servers.length * 2;
			if (e > 500) {
				e = 500;
			}
			this.timerFlushPendingServers = window.setTimeout(() => {
				this.FlushPendingServers();
			}, e);
		}
	}
	OnFavoritesChanged(e) {
		this.bRefreshNextTimeWeAreVisible = true;
		this.Modified();
	}
}
Cg([Ne.sH], He.prototype, "seq_num", undefined);
Cg([Ne.XI], He.prototype, "StartedRequest", null);
Cg([Ne.XI], He.prototype, "ClearServers", null);
Cg([Ne.XI], He.prototype, "SetSelectedServer", null);
Cg([Ne.XI], He.prototype, "FlushPendingServers", null);
Cg([Ne.XI], He.prototype, "StartSearch", null);
Cg([Ne.XI], He.prototype, "RefreshComplete", null);
class je {
	constructor(e) {
		Gn(this);
		this.m_states = {};
		this.m_fixedAppID = e;
	}
	m_fixedAppID;
	GetFixedAppID() {
		return this.m_fixedAppID;
	}
	BFixedAppID() {
		return this.m_fixedAppID > 0;
	}
	m_states;
	GetTabState(e) {
		return this.m_states[e];
	}
	StopRequests() {
		for (let e in this.m_states) {
			this.m_states[e].DestroyRequest();
		}
	}
	m_activeTab = undefined;
	seq_num = 0;
	Modified() {
		this.seq_num += 1;
	}
	SetActiveTab(e) {
		We.GameList = e;
		Ve();
		this.m_activeTab = e;
		this.Modified();
	}
	SetAppIDFromURL(e) {
		w_2(
			!this.m_fixedAppID,
			"Shouldn't get an AppID from the URL for server browser with Fixed AppID",
		);
		this.m_appidFromURL = parseInt(e);
		this.Modified();
	}
	m_appidFromURL = 0;
	useMultiplayerGames() {
		return q3(() => this.m_multiplayerGames);
	}
	GetMultiplayerGames() {
		if (this.m_multiplayerGames == null) {
			return [];
		} else {
			return this.m_multiplayerGames;
		}
	}
	m_multiplayerGames = null;
	useActiveTabWhenReady() {
		const e = this.BFixedAppID();
		const t = this;
		const r = I_2({
			enabled: e,
			queryKey: [`ServerBrowserGamesFixed_${this.m_fixedAppID}`],
			queryFn: () => [
				{
					appid: this.m_fixedAppID,
					gamedir: "",
					name: `App${this.m_fixedAppID}`,
				},
			],
		});
		const i = I_2({
			enabled: !e,
			queryKey: ["ServerBrowserGames"],
			queryFn: () => SteamClient.ServerBrowser.GetMultiplayerGames(),
		});
		const a = e ? r.data : i.data;
		let s = q3(
			() => this.m_multiplayerGames != null && this.m_activeTab !== undefined,
		);
		q3(() => this.seq_num);
		if (!We || !this.m_activeTab) {
			SteamClient.ServerBrowser.GetServerListPreferences().then((e) => {
				console.log("Loaded ServerBrowser preferences");
				We = e;
				let r = "internet";
				if (We.GameList) {
					for (const t of qe) {
						if (t.id == e.GameList.toLowerCase()) {
							r = t.id;
							break;
						}
					}
				}
				t.m_activeTab = r;
			});
			s = false;
		}
		const o = this.m_states.internet && true;
		n.useEffect(() => {
			if (!a) {
				return;
			}
			let e = false;
			if (t.m_multiplayerGames == null && ((t.m_multiplayerGames = a), !o)) {
				for (const e of qe) {
					t.m_states[e.id] = new He(t, e.id);
				}
				e = true;
			}
			if (s && t.m_appidFromURL) {
				const r = t.m_appidFromURL;
				t.m_appidFromURL = 0;
				t.m_activeTab = "internet";
				t.m_states[t.m_activeTab].SetFilterGameAppID(r);
				e = true;
			}
			if (e) {
				t.Modified();
			}
		});
		if (s && o) {
			return this.m_activeTab;
		} else {
			return undefined;
		}
	}
}
Cg([Ne.sH], je.prototype, "seq_num", undefined);
Cg([Ne.sH], je.prototype, "m_multiplayerGames", undefined);
const qe = [
	{
		id: "internet",
		locToken: "#ServerBrowser_Internet",
		svg_fn: () => n.createElement(I.WiredNetwork, null),
	},
	{
		id: "favorites",
		locToken: "#ServerBrowser_Favorites",
		svg_fn: () => n.createElement(I.Star, null),
	},
	{
		id: "history",
		locToken: "#ServerBrowser_History",
		svg_fn: () => n.createElement(I.Clock, null),
	},
	{
		id: "lan",
		locToken: "#ServerBrowser_LAN",
		svg_fn: () => n.createElement(I.LAN, null),
	},
	{
		id: "friends",
		locToken: "#ServerBrowser_Friends",
		svg_fn: () => n.createElement(I.Friends, null),
	},
];
function Qe(e) {
	console.log(`ServerBrowser ConnectToServer( ${e.ip}:${e.port} )`);
	Ee.Xw.ShowServerGameInfoDialog(e).then((t) => {
		if (t) {
			console.log(
				`ServerBrowser ShowServerGameInfoDialog( ${e.ip}:${e.port} ) got dialog ID ${t.id}, calling connect`,
			);
			t.Connect();
		} else {
			console.log(
				`ServerBrowser ShowServerGameInfoDialog( ${e.ip}:${e.port} ) failed`,
			);
		}
	});
}
function Ze(e) {
	let t = {
		...e,
	};
	for (let e in t) {
		if (t[e] === undefined || t[e] === null) {
			delete t[e];
		}
	}
	return t;
}
function Ye(e) {
	const { tab: t, server: r } = e;
	const { ownerWindow: i } = R7();
	const a = (e) => {
		i.navigator.clipboard.writeText(e).catch((e) => {
			console.error("Failed to copy to clipboard:", e);
		});
	};
	let s = Le(r);
	let o = "";
	if (s) {
		o = `steam://connect/${s}`;
		if (r.appid) {
			o += `?appid=${r.appid}`;
		}
	}
	return n.createElement(
		we.tz,
		null,
		n.createElement(
			we.kt,
			{
				onSelected: () =>
					((e) => {
						Ee.Xw.ShowServerGameInfoDialog(e);
					})(r),
			},
			Localize("#ServerBrowser_ViewServerInfo"),
		),
		n.createElement(
			we.kt,
			{
				onSelected: () => Qe(r),
			},
			Localize("#ServerBrowser_ConnectToServer"),
		),
		s &&
			n.createElement(
				we.kt,
				{
					onSelected: () => a(s),
				},
				Localize("#ServerBrowser_CopyIPAddressToClipboard", s),
			),
		o &&
			n.createElement(
				we.kt,
				{
					onSelected: () => a(o),
				},
				Localize("#ServerBrowser_CopySteamJoinLinkToClipboard"),
			),
		t.id != "favorites" &&
			n.createElement(
				we.kt,
				{
					onSelected: () =>
						(async (e) => {
							await SteamClient.ServerBrowser.AddFavoriteServer(Ze(e));
						})(r),
				},
				Localize("#ServerBrowser_AddServerToFavorites"),
			),
		t.id == "favorites" &&
			n.createElement(
				we.kt,
				{
					onSelected: () =>
						SteamClient.ServerBrowser.RemoveFavoriteServer(Ze(r)),
				},
				Localize("#ServerBrowser_RemoveServerFromFavorites"),
			),
		t.id == "history" &&
			n.createElement(
				we.kt,
				{
					onSelected: () =>
						SteamClient.ServerBrowser.RemoveHistoryServer(Ze(r)),
				},
				Localize("#ServerBrowser_RemoveServerFromHistory"),
			),
	);
}
function Ke(e) {
	const { closeModal: t, owningWindow: r } = e;
	const [i, a] = n.useState("");
	const s = async () => {
		t();
		let e = await SteamClient.ServerBrowser.AddFavoriteServersByIP(i);
		if (e) {
			pg(
				n.createElement(c.KG, {
					strDescription: Localize(e),
				}),
				r,
			);
		}
	};
	return n.createElement(
		c.eV,
		{
			onOK: s,
			closeModal: t,
			onCancel: t,
		},
		n.createElement(o.Y9, null, Localize("#ServerBrowser_AddServerByIP")),
		n.createElement(
			o.f3,
			null,
			n.createElement(
				o.a3,
				null,
				n.createElement(o.pd, {
					maxLength: 64,
					size: 32,
					value: i,
					placeholder: Localize("#ServerBrowser_IPAddressPlaceholder"),
					onChange: (e) => a(e.currentTarget.value),
				}),
			),
			n.createElement(
				o.wi,
				null,
				n.createElement(o.CB, {
					onOK: s,
					strOKText: Localize("#Button_OK"),
					onCancel: t,
					strCancelText: Localize("#Button_Cancel"),
				}),
			),
		),
	);
}
const Xe = Nr((e) => {
	const { serverBrowserState: t, tab: r } = e;
	const i = n.useRef(undefined);
	const a = !t.BFixedAppID() && r.id != "internet";
	const s = t.GetTabState(r.id);
	q3(() => s.seq_num);
	const l = s.GetFilterGame();
	const c = s.Prefs();
	const [u, d] = n.useState(l == null && !a);
	const A = n.useCallback(
		(e) => {
			const t = e?.data;
			s.SetFilterGame(t);
		},
		[s],
	);
	const p = n.useCallback((e) => s.SetFilterName(e.currentTarget.value), [s]);
	const g = n.useCallback((e) => s.SetFilterMap(e.currentTarget.value), [s]);
	const h = t.useMultiplayerGames();
	const C = n.useMemo(() => {
		let e = h ? [...h] : [];
		const t = new Intl.Collator(undefined, {
			sensitivity: "base",
		});
		e.sort((e, r) => t.compare(e.name, r.name));
		return [
			{
				data: null,
				label: n.createElement(o.aZ, {
					title: a
						? Localize("#ServerBrowser_AnyGame")
						: Localize("#ServerBrowser_SelectGame"),
				}),
			},
			...e.map((e) => ({
				data: e,

				label: n.createElement(o.aZ, {
					title: e.name,
				}),
			})),
		];
	}, [h, a]);
	const _ = n.useMemo(
		() => [
			{
				data: 0,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_All"),
				}),
			},
			{
				data: 50,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_LessThan50"),
				}),
			},
			{
				data: 100,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_LessThan100"),
				}),
			},
			{
				data: 150,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_LessThan150"),
				}),
			},
			{
				data: 250,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_LessThan250"),
				}),
			},
		],
		[],
	);
	const f = n.useMemo(
		() => [
			{
				data: 0,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_All"),
				}),
			},
			{
				data: 1,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_SecureOnly"),
				}),
			},
			{
				data: 2,
				label: n.createElement(o.aZ, {
					title: Localize("#ServerBrowser_InsecureOnly"),
				}),
			},
		],
		[],
	);
	const b = n.useCallback(() => s.StartSearch(), [s]);
	ze ||= [
		{
			Header: () =>
				n.createElement(I.Lock, {
					locked: true,
				}),
			HeaderText: Localize("#ServerBrowser_Password"),
			Cell: ({ value: e }) =>
				e
					? n.createElement(I.Lock, {
							locked: true,
						})
					: "",
			accessor: "bPassword",
			id: "bPassword",
			width: 18,
			minWidth: 18,
			maxWidth: 18,
			disableResizing: true,
			align: "left",
			className: Te.PasswordColumn,
		},
		{
			Header: () => n.createElement(Re.wB_, null),
			HeaderText: Localize("#ServerBrowser_Bots"),
			Cell: ({ value: e }) => (e ? n.createElement(Re.wB_, null) : ""),
			accessor: "botPlayers",
			id: "botPlayers",
			width: 18,
			minWidth: 18,
			maxWidth: 18,
			disableResizing: true,
			align: "left",
			className: Te.BotsColumn,
		},
		{
			Header: () => n.createElement(Re.gzV, null),
			HeaderText: Localize("#ServerBrowser_Secure"),
			Cell: ({ value: e }) => (e ? n.createElement(Re.gzV, null) : ""),
			accessor: "bSecure",
			id: "bSecure",
			width: 18,
			minWidth: 18,
			maxWidth: 18,
			disableResizing: true,
			align: "left",
			className: Te.SecureColumn,
		},
		{
			Header: Localize("#ServerBrowser_Servers"),
			id: "name",
			accessor: "name",
			align: "left",
			width: 150,
			minWidth: 20,
			maxWidth: 1200,
			className: Te.ServerNameColumn,
		},
		{
			Header: Localize("#ServerBrowser_IPAddress"),
			id: "ip",
			accessor: Le,
			align: "left",
			width: 120,
			minWidth: 20,
			maxWidth: 1200,
			className: Te.IPAddressColumn,
		},
		{
			Header: Localize("#ServerBrowser_Game"),
			id: "gameDesc",
			accessor: "gameDesc",
			align: "left",
			width: 150,
			minWidth: 20,
			maxWidth: 1200,
			className: Te.GameColumn,
		},
		{
			Header: Localize("#ServerBrowser_Map"),
			id: "map",
			accessor: "map",
			width: 100,
			minWidth: 20,
			maxWidth: 1200,
			align: "left",
			className: Te.MapColumn,
		},
		{
			Header: Localize("#ServerBrowser_Players"),
			id: "players",
			accessor: "players",
			Cell: (e) => {
				const t = e.row.original;
				if (t.maxPlayers > 0) {
					return n.createElement("span", null, t.players, "/", t.maxPlayers);
				} else {
					return n.createElement("span", null);
				}
			},
			minWidth: 20,
			width: 60,
			maxWidth: 1200,
			align: "left",
			className: Te.PlayersColumn,
		},
		{
			Header: Localize("#ServerBrowser_Latency"),
			accessor: "ping",
			minWidth: 20,
			width: 60,
			maxWidth: 1200,
			align: "left",
			className: Te.LatencyColumn,
			id: "ping",
		},
	];
	const y = {
		columns: ze,
		data: s.filtered_servers,
		disableSortRemove: true,
		disableMultiSort: true,
		initialState: Ue,
		manualSortBy: true,
	};
	const S = useTable(y, ke.useResizeColumns, ke.useFlexLayout, ke.useSortBy);
	const {
		getTableProps: w,
		getTableBodyProps: B,
		headerGroups: E,
		rows: M,
		prepareRow: R,
		allColumns: k,
		visibleColumns: D,
	} = S;
	const N = M.length;
	const F = S.state;
	const G = F && F.sortBy && F.sortBy[0];
	const O = Te_2({
		count: N,
		getScrollElement: () => i.current,
		estimateSize: n.useCallback(() => 34, [34]),
		overscan: 5,
	});
	const P = useRef(null);
	const { columnWidths: L, OnMouseDown: z } = m(ze, D, P);
	s.fnResorted = undefined;
	if (s.selectedServer && i && i.current) {
		const e = s.selectedServer.idxFiltered * 34 - i.current.scrollTop;
		s.fnResorted = () => {
			if (!s.selectedServer) {
				return;
			}
			let t = s.selectedServer.idxFiltered * 34 - e;
			if (t < 0) {
				t = 0;
			}
			O.scrollToOffset(t);
		};
	}
	const x = n.useCallback(
		(e) => {
			const t = e.currentTarget.getAttribute("data-server-idx");
			if (!t) {
				return;
			}
			const i = parseInt(t);
			const a = s.all_servers[i];
			if (a) {
				s.SetSelectedServer(a);
				if (a.ip && a.port) {
					lX(
						n.createElement(Ye, {
							tab: r,
							server: a,
						}),
						e,
					);
				}
			}
		},
		[r, s],
	);
	const U = n.useCallback(() => Qe(s.selectedServer), [s]);
	const W = s.selectedServer && s.selectedServer.bMatchesFilter;
	const V = n.useCallback(
		(e) => {
			const t = n.createElement(
				we.tz,
				null,
				k.map((e) => {
					const t = e.id == "name";
					return n.createElement(
						we.Fd,
						{
							key: e.id,
							icon: e.isVisible ? n.createElement(Re.Jlk, null) : undefined,
							disabled: t,
							onSelected:
								t ||
								(() => {
									e.toggleHidden(e.isVisible);
								}),
						},
						e.HeaderText ?? e.Header,
					);
				}),
			);
			lX(t, e, {
				bOverlapHorizontal: true,
				bOverlapVertical: false,
			});
		},
		[k],
	);
	n.useEffect(() => {
		if (e.selected && s.bRefreshNextTimeWeAreVisible) {
			b();
		}
	});
	n.useEffect(() => {
		let e = () => {};
		if (s.id == "favorites" || s.id == "history") {
			const t = (e) => {
				if (s) {
					s.OnFavoritesChanged(e[s.id]);
				}
			};
			e = SteamClient.ServerBrowser.RegisterForFavorites(t).unregister;
		}
		return () => {
			e();
			if (s) {
				s.DestroyRequest();
			}
		};
	}, [s]);
	n.useEffect(() => s.SetSortByState(G));
	if (!e.selected) {
		return null;
	}
	let H = "";
	const j = (e) => {
		if (H) {
			H += "; ";
		}
		H += e;
	};
	if (c.Secure == 1) {
		j(Localize("#ServerBrowser_FilterDescSecureOnly"));
	}
	if (c.Secure == 2) {
		j(Localize("#ServerBrowser_FilterDescInsecureOnly"));
	}
	if (c.ping > 0) {
		j(`${Localize("#ServerBrowser_FilterDescLatency")} < ${c.ping}`);
	}
	if (c.NoFull) {
		j(Localize("#ServerBrowser_FilterDescNotFull"));
	}
	if (c.NoEmpty) {
		j(Localize("#ServerBrowser_FilterDescNotEmpty"));
	}
	if (c.NoPassword) {
		j(Localize("#ServerBrowser_FilterDescNoPassword"));
	}
	const q = s.sEmptyListExplanation == "" || N > 0;
	let Q;
	if (s.BRequestActive()) {
		Q = n.createElement(
			o.wl,
			{
				className: A_2(Te.SearchButton, Te.SearchActive),
				onClick: () => s.DestroyRequest(),
			},
			n.createElement(I.Spinner, {
				className: Te.Spinner,
			}),
			n.createElement(I.Close, {
				className: Te.Stop,
			}),
		);
	} else {
		const e = s.GetSearchSettingsAsString() == s.strLastSearchSettingsAsString;
		const t = l == null && !a;
		let i;
		if (!t && r.id == "internet") {
			if (!e && s.strLastSearchSettingsAsString) {
				i = Localize("#ServerBrowser_ServerSideFiltersChanged");
			}
		}
		Q = n.createElement(
			o.wl,
			{
				className: A_2(Te.SearchButton, !t && !e && Te.NewSearchButton),
				onClick: b,
				disabled: t,
				title: i,
			},
			e ? n.createElement(I.Refresh, null) : n.createElement(I.Search, null),
		);
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"div",
			{
				className: Te.TopControlsCtr,
			},
			qe.map((e) =>
				n.createElement(
					o.wl,
					{
						key: e.id,
						className: A_2({
							[Te.SwitchTabButton]: true,
							[Te.Selected]: e.id == r.id,
						}),
						onClick: () => t.SetActiveTab(e.id),
					},
					e.svg_fn(),
					" ",
					Localize(e.locToken),
				),
			),
			n.createElement("span", {
				className: Te.Spacer,
			}),
			n.createElement(o.ZU, {
				rgOptions: C,
				onChange: A,
				selectedOption: l,
			}),
			Q,
		),
		n.createElement(
			"div",
			{
				className: Te.ServerTabPane,
			},
			n.createElement(
				"div",
				{
					...w(),
					className: Te.ServerList,
				},
				n.createElement(
					"div",
					{
						className: Te.ServerListHeaderCtr,
					},
					E.map((e) =>
						n.createElement(
							"span",
							{
								ref: P,
								key: e.id,
								...e.getHeaderGroupProps([
									{
										className: Te.ServerListHeaderRow,
									},
								]),
							},
							n.createElement("span", {
								className: Te.RadioButtonColumn,
							}),
							e.headers.map((e, t) =>
								n.createElement(Je, {
									key: t,
									SlamColumnProperties: Ge.j,
									column: e,
									onResizerMouseDown: z,
									columnWidths: L,
								}),
							),
						),
					),
					n.createElement(
						"span",
						{
							className: Te.SelectColumnsButton,
							onClick: V,
							onContextMenu: V,
						},
						"+",
					),
				),
				n.createElement(
					"div",
					{
						...B(),
						ref: i,
					},
					q
						? n.createElement(
								"div",
								{
									style: {
										height: `${O.getTotalSize()}px`,
										width: "100%",
										position: "relative",
									},
								},
								O.getVirtualItems().map((e) => {
									const t = M[e.index];
									R(t);
									const r = t.original;
									const i = r == s.selectedServer;
									let a = t.getRowProps();
									a.style.position = "absolute";
									a.style.top = 0;
									a.style.left = 0;
									a.style.width = "100%";
									a.style.height = `${e.size}px`;
									a.style.transform = `translateY(${e.start}px)`;
									a.className = A_2(
										a.className,
										Te.ServerRow,
										i && Te.SelectedRow,
									);
									return n.createElement(
										"div",
										{
											key: e.key,
											...a,
											onClick: () => s.SetSelectedServer(r),
											"data-server-idx": r.idxUnfiltered,
											onContextMenu: x,
										},
										n.createElement(
											"span",
											{
												className: Te.RadioButtonColumn,
											},
											n.createElement(o.Od, {
												checked: i,
											}),
										),
										t.cells.map((e) => {
											let { key: t, ...r } = e.getCellProps();
											const i = e.column;
											j_2(r, Te.currentSortCol, i, L);
											return n.createElement(
												"span",
												{
													key: t,
													...r,
												},
												e.render("Cell"),
											);
										}),
									);
								}),
							)
						: n.createElement(
								"div",
								{
									className: Te.EmptyListExplanation,
								},
								s.sEmptyListExplanation,
							),
				),
			),
			n.createElement(
				"div",
				{
					className: A_2(Te.FilterOptionsCtr, !u && Te.Collapsed),
				},
				n.createElement(
					"div",
					{
						className: Te.FilterOptionsNameMapCtr,
					},
					n.createElement(
						"span",
						null,
						n.createElement(
							"span",
							{
								className: Te.DropdownLabel,
							},
							Localize("#ServerBrowser_ServerName"),
						),
						n.createElement(o.pd, {
							maxLength: 64,
							size: 64,
							value: c.name,
							onChange: p,
						}),
					),
					n.createElement(
						"span",
						null,
						n.createElement(
							"span",
							{
								className: Te.DropdownLabel,
							},
							Localize("#ServerBrowser_Map"),
						),
						n.createElement(o.pd, {
							maxLength: 64,
							size: 64,
							value: c.map,
							onChange: g,
						}),
					),
				),
				n.createElement(
					"div",
					{
						className: Te.FilterOptionsLatencyAntiCheatCtr,
					},
					n.createElement(
						"span",
						null,
						n.createElement(
							"span",
							{
								className: Te.DropdownLabel,
							},
							Localize("#ServerBrowser_Latency"),
						),
						n.createElement(o.ZU, {
							rgOptions: _,
							onChange: (e) => s.SetFilterPing(e.data),
							selectedOption: c.ping,
						}),
					),
					n.createElement(
						"span",
						null,
						n.createElement(
							"span",
							{
								className: Te.DropdownLabel,
							},
							Localize("#ServerBrowser_AntiCheat"),
						),
						n.createElement(o.ZU, {
							rgOptions: f,
							onChange: (e) => s.SetFilterSecure(e.data),
							selectedOption: c.Secure,
						}),
					),
				),
				n.createElement(
					"div",
					{
						className: Te.FilterOptionsCheckboxesCtr,
					},
					n.createElement(o.Yh, {
						label: Localize("#ServerBrowser_ServerNotFull"),
						checked: c.NoFull,
						onChange: (e) => s.SetFilterNoFull(e),
					}),
					n.createElement(o.Yh, {
						label: Localize("#ServerBrowser_HasUsersPlaying"),
						checked: c.NoEmpty,
						onChange: (e) => s.SetFilterNoEmpty(e),
					}),
					n.createElement(o.Yh, {
						label: Localize("#ServerBrowser_NoPassword"),
						checked: c.NoPassword,
						onChange: (e) => s.SetFilterNoPassword(e),
					}),
				),
			),
			n.createElement(
				"div",
				{
					className: Te.BottomControlsRow,
				},
				n.createElement(
					o.wl,
					{
						className: A_2({
							[Te.ToggleShowFilterDetailsButton]: true,
							[Te.Selected]: u,
						}),
						onClick: () => d(!u),
					},
					n.createElement(I.DoubleCarat, {
						direction: "up",
					}),
					Localize("#ServerBrowser_ChangeFilters"),
				),
				n.createElement(
					"span",
					{
						className: Te.CurrentFiltersSummaryText,
					},
					H,
				),
				n.createElement(
					o.wi,
					null,
					r.id == "favorites" &&
						n.createElement(
							o.wl,
							{
								className: Te.AddFavoriteButton,
								onClick: (e) => {
									t = GetOwningWindowForEvent(e);
									pg(
										n.createElement(Ke, {
											owningWindow: t,
										}),
										t,
									);
									return;
									var t;
								},
								title: Localize("#ServerBrowser_AddFavoriteServerByIP"),
							},
							n.createElement(I.Add, null),
						),
					n.createElement(o.CB, {
						onOK: U,
						bOKDisabled: !W,
						strOKText: Localize("#ServerBrowser_Connect"),
						onCancel: e.onClose,
						strCancelText: Localize("#Generic_Close"),
					}),
				),
			),
		),
	);
});
const Je = (e) => {
	const {
		column: t,
		SlamColumnProperties: r,
		onResizerMouseDown: i,
		columnWidths: a,
	} = e;
	let { key: s, ...o } = t.getHeaderProps();
	const l = t.getSortByToggleProps();
	l.title = undefined;
	o.className = A_2(o.className, Te.ServerListHeaderCell);
	r(o, Te.currentSortCol, t, a);
	o.title = t.HeaderText;
	const c = !t.HeaderText;
	return n.createElement(
		"div",
		{
			key: s,
			...o,
		},
		n.createElement(
			"div",
			{
				className: Te.ServerListHeaderSort,
				...l,
			},
			t.render("Header"),
			t.isSorted &&
				c &&
				n.createElement(I.Carat, {
					className: Te.SortCaret,
					direction: t.isSortedDesc ? "down" : "up",
				}),
		),
		t.canResize &&
			n.createElement(
				"div",
				{
					key: `${s}-resizer`,
					className: Te.ColumnResizer,
					onMouseDown: (e) => i(e, t.id),
				},
				n.createElement("span", null),
			),
	);
};
const $e = Nr((e) => {
	const { serverBrowserState: t, onClose: r } = e;
	const i = t.useActiveTabWhenReady();
	if (i) {
		return n.createElement(
			o.nB,
			{
				className: Te.DialogBody,
			},
			qe.map((e) =>
				n.createElement(Xe, {
					key: e.id,
					serverBrowserState: t,
					tab: e,
					selected: e.id === i,
					onClose: r,
				}),
			),
		);
	} else {
		return null;
	}
});
let et = new je(0);
const tt = Nr(() => {
	const e = n.useCallback((e) => {
		const t = new URL(e.strURL)?.searchParams?.get("appid");
		if (t) {
			et.SetAppIDFromURL(t);
		}
	}, []);
	let [t, r, i] = Z_2(7, "open/servers", e);
	const a = n.useCallback(() => {
		et.StopRequests();
		i();
	}, [i]);
	if (!t) {
		return null;
	}
	const s = Localize("#Menu_Servers");
	return n.createElement(
		c.hM,
		{
			strTitle: s,
			onDismiss: a,
			resizable: true,
			popupWidth: 1200,
			popupHeight: 700,
			minWidth: 1000,
			minHeight: 500,
			refPopup: r,
			titleBarClassName: Te.TitleBar,
			saveDimensionsKey: "Window_ServerBrowser",
		},
		n.createElement(
			"div",
			{
				className: Te.ServerBrowserDialog,
			},
			n.createElement(
				o.Y9,
				{
					className: Te.DialogHeader,
				},
				s,
			),
			n.createElement($e, {
				serverBrowserState: et,
				onClose: a,
			}),
		),
	);
});
const at = Nr(() =>
	n.createElement(
		n.Fragment,
		null,
		n.createElement(st, null),
		n.createElement(ot, null),
	),
);
function st() {
	const { clearError: e, ...t } = mJ();
	if (!t) {
		return null;
	}
	const r = () => {
		SteamClient.OpenVR.StartVR(true);
	};
	let i;
	let a;
	let s;
	switch (t.eClient) {
		case nt.V.k_EVRError_VRSkipParam: {
			i = r;
			a = "#VR_Error_Query_IgnoreSkip";
			s = "#VR_Error_VRSkipParam";
			break;
		}
		case nt.V.k_EVRError_ComponentNotInstalled: {
			i = () => SteamClient.OpenVR.InstallVR();
			a = "#VR_Error_Query_InstallSteamVR";
			s = "#VR_Error_ComponentNotInstalled";
			break;
		}
		case nt.V.k_EVRError_ComponentBusy: {
			s = "#VR_Error_ComponentBusy";
			break;
		}
		case nt.V.k_EVRError_CrashProtection: {
			i = r;
			a = "#VR_Error_Query_Yes";
			s = "#VR_Error_CrashProtection";
			break;
		}
		case nt.V.k_EVRError_HmdError: {
			s = Localize("#VR_Error_UnknownError", t.strInit, t.eInit);
		}
	}
	if (s) {
		return n.createElement(
			c.EN,
			{
				active: true,
			},
			n.createElement(c.o0, {
				strTitle: Localize("#VR_Error_Title"),
				onCancel: e,
				bAlertDialog: !i,
				onOK: () => {
					i?.();
					e();
				},
				strOKButtonText: a ? Localize(a) : undefined,
				strDescription: Localize(s),
			}),
		);
	} else {
		e();
		return null;
	}
}
function ot() {
	const [e, t] = n.useState();
	const [r, i] = n.useState();
	n.useEffect(
		() =>
			SteamClient.Messaging.RegisterForMessages("vrerror", (e, r, n) => {
				if (r === "path_changed") {
					t("#VR_Notice_PathChanged_Title");
					i("#VR_Notice_PathChanged_Message");
				}
			}).unregister,
		[],
	);
	if (e && e) {
		return n.createElement(
			c.EN,
			{
				active: true,
			},
			n.createElement(c.o0, {
				strTitle: Localize(e),
				onOK: () => {
					t(undefined);
					i(undefined);
				},
				strDescription: Localize(r),
				bAlertDialog: true,
			}),
		);
	} else {
		return null;
	}
}
const mt = n.lazy(() => require.e(1220).then(require.bind(require, 44840)));
function ut() {
	const e = CH();
	hL(ct.U.PopupsChangedCallbacks, e);
	return n.createElement(
		n.Suspense,
		{
			fallback: null,
		},
		ct.U.active_popups.map((e) =>
			n.createElement(mt, {
				key: e.id,
				popup: e,
			}),
		),
	);
}
const gt = pt;
new Ct.wd("SSA").Debug;
const ft = Nr(() => {
	const e = `${S.TS.STORE_BASE_URL}subscriber_agreement/${S.TS.LANGUAGE}`;
	const [t, r] = n.useState();
	const i = n.useCallback((e) => {
		if (e) {
			e.SteamClient.Window.SetModal(true);
			e.SteamClient.Window.BringToFront();
			r(e);
		}
	}, []);
	const a = xn();
	if (S.TS.EREALM != ht.TU.k_ESteamRealmGlobal) {
		return null;
	}
	if (a != 7) {
		return null;
	}
	const s = Localize("#SSA_Title");
	const l = () => {
		SteamClient.User.StartShutdown(true);
	};
	return n.createElement(
		c.Q9,
		{
			refPopup: i,
			strTitle: s,
			onDismiss: l,
			resizable: true,
			popupWidth: 824,
			popupHeight: 620,
			minWidth: 600,
			minHeight: 400,
			className: gt.SSADialog,
		},
		n.createElement(bt, {
			popup: t,
			strName: s,
			strURL: e,
			onClose: l,
			className: gt.SSAContent,
		}),
		n.createElement(
			o.a3,
			{
				className: gt.Explanation,
			},
			Localize("#SSA_Explanation"),
		),
		n.createElement(
			"div",
			{
				className: gt.ButtonBar,
			},
			n.createElement(
				o.jn,
				{
					onClick: () => {
						_t.Yq.AcceptSSA(0);
						ge.oy.ResetErrorCondition();
						SteamClient.UI.NotifyAppInitialized();
					},
				},
				Localize("#SSA_Accept"),
			),
			n.createElement(
				o.$n,
				{
					onClick: () => {
						SteamClient.System.OpenInSystemBrowser(e);
					},
				},
				Localize("#SSA_OpenInBrowser"),
			),
			n.createElement(
				o.$n,
				{
					onClick: l,
				},
				Localize("#SSA_ExitSteam"),
			),
		),
	);
});
const bt = (e) => {
	let { onClose: t, popup: r, strName: i, strURL: o } = e;
	const [l, c] = v_1(r, i, {
		strURL: o,
	});
	const m = n.useCallback(
		(e, r, n) => {
			if (r == "CloseBrowser" && t) {
				t();
			}
		},
		[t],
	);
	n.useEffect(() => {
		if (l) {
			l.on("message", m);
		}
	}, [l, m]);
	if (l) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement("span", null, e.strName),
			n.createElement(a.m4, {
				browser: l,
				visible: c,
				className: gt.SSABrowser,
			}),
		);
	} else {
		return null;
	}
};
const Et = Nr((e) => {
	let t = _U();
	const r = hf();
	const i = ((e) => {
		let [t, r] = n.useState();
		let i = n.useRef(undefined);
		let a = n.useRef(undefined);
		a.current = e;
		n.useEffect(() => {
			if (e.length == 0) {
				if (!i.current) {
					r(undefined);
				}
				return;
			}
			if (t == e[0]) {
				return;
			}
			r(e[0]);
			window.clearTimeout(i.current);
			let n = () => {
				i.current = undefined;
				if (!a.current || !(a.current.length > 0)) {
					r(undefined);
				}
			};
			i.current = window.setTimeout(n, 3000);
		}, [t, r, e]);
		n.useEffect(
			() => () => {
				if (i.current) {
					window.clearTimeout(i.current);
				}
			},
			[],
		);
		return t;
	})(t);
	s = i;
	let a = n.useCallback(() => {
		if (s) {
			wt.I.ShowGameLaunchingDialog(s, false);
		}
	}, [s]);
	var s;
	let l = n.useCallback((e) => {
		if (e) {
			e.SteamClient.Window.MoveToLocation("center");
		}
	}, []);
	let u = ((e, t) => {
		const r = Qt_2(`steam://open/library/details/${e}`);
		const i = n.useCallback(() => {
			r();
			t();
		}, [r, t]);
		return i;
	})(i, a);
	let d = _R(i);
	let A = d?.appid || 0;
	let p = T_2(A);
	if (i && r && d && p) {
		return n.createElement(
			c.hM,
			{
				strTitle: Localize("#GameAction_LaunchingDialog_Title"),
				onDismiss: a,
				popupWidth: 600,
				popupHeight: 286,
				className: St.GameLaunchingDialog,
				refPopup: l,
			},
			n.createElement(
				"div",
				{
					className: St.Layout,
				},
				n.createElement(
					"div",
					{
						className: St.LeftColumn,
					},
					n.createElement(
						"div",
						{
							className: St.PortraitContainer,
						},
						n.createElement(Bt.Mf, {
							app: d,
						}),
					),
				),
				n.createElement(
					"div",
					{
						className: St.RightColumn,
					},
					n.createElement(
						"div",
						{
							className: St.Launching,
						},
						Localize("#GameAction_LaunchingDialog_Starting"),
					),
					n.createElement(
						"div",
						{
							className: St.GameName,
						},
						d.display_name,
					),
					n.createElement(
						"div",
						{
							className: St.StatusWrapper,
						},
						n.createElement(vt.qj, {
							className: St.StatusOverride,
							overview: d,
							statusPanelType: 0,
							details: p,
						}),
					),
					n.createElement(
						o.$n,
						{
							className: St.OpenSteamButton,
							onClick: u,
						},
						Localize("#GameAction_LaunchingDialog_OpenSteam"),
					),
				),
			),
		);
	} else {
		return null;
	}
});
const kt = Rt;
function Dt(e) {
	const { elCheckbox: t, ...r } = e;
	const [i, a] = (() => {
		const e = q3(() => ge.oy.MainRunningApp);
		return [
			e != null,
			n.createElement(Gt, {
				key: "restart prompt",
				mainApp: e,
			}),
		];
	})();
	const s = q3(() => ge.oy.GetShutdownState().eShutdownState);
	const [o, l, c] = M_2({
		className: kt.Dialog,
		bCloseOnOK: false,
		bOKDisabled: i,
		...r,
		children: i ? a : t,
	});
	n.useEffect(() => {
		if (s != 0) {
			c();
		}
	}, [s, c]);
	return [o, l];
}
const Nt = () => {
	const [e, t] = VI("always_show_user_chooser");
	const r = n.createElement(o.Yh, {
		label: Localize("#ChangeUser_ShouldShowUserChooser"),
		checked: e,
		disabled: false,
		onChange: t,
	});
	return Dt({
		onOK: () => SteamClient.User.ChangeUser(),
		strTitle: Localize("#ChangeUser_Title"),
		strOKButtonText: Localize("#ChangeUser_OKButton"),
		strDescription: Localize(
			Mt.b.currentUserIsRemembered
				? "#ChangeUser_Description"
				: "#ChangeUser_Description_NoCachedCredentials",
		),
		elCheckbox: r,
	});
};
function Ft(e) {
	const [t, r] = Nt();
	n.useEffect(
		() =>
			y.Dt.RegisterForRunSteamURL(7, "changeuser", (e, t) => {
				r();
			}).unregister,
		[r],
	);
	return n.createElement(n.Fragment, null, t);
}
function Gt(e) {
	if (e.mainApp) {
		return n.createElement(
			"div",
			{
				className: A_2(kt.Prompt, kt.Warning),
			},
			Localize("#Steam_AppMustBeClosedToQuit_Info", e.mainApp.display_name),
		);
	} else {
		return n.createElement(
			"div",
			{
				className: kt.Prompt,
			},
			Localize("#ChangeUser_Prompt"),
		);
	}
}
const Ot = () =>
	Dt({
		onOK: () => SteamClient.User.SignOutAndRestart(),
		strTitle: Localize("#SignOut_Title"),
		strDescription: Localize("#SignOut_Description"),
	});
function Pt(e) {
	const [t, r] = Ot();
	n.useEffect(
		() =>
			y.Dt.RegisterForRunSteamURL(7, "signout", (e, t) => {
				r();
			}).unregister,
		[r],
	);
	return n.createElement(n.Fragment, null, t);
}
const zt = Lt;
function Ut(e) {
	const t = xt.iP.GetDefaultMonitorDimensions();
	const r = n.useCallback(
		(e) => {
			if (!e) {
				return;
			}
			let r = t.m_full.m_nWidth;
			let n = t.m_full.m_nHeight;
			e.SteamClient.Window.ResizeTo(r, n, true);
			e.SteamClient.Window.MoveTo(t.m_full.m_nTop, t.m_full.m_nTop, t.m_flDPI);
			e.SteamClient.Window.SetModal(true);
			e.SteamClient.Window.BringToFront();
		},
		[t],
	);
	let i = Dk();
	let [a, s] = ((e) => {
		let t = n.useCallback(() => {
			if (e) {
				e.ConfirmContinue();
			}
			wt.I.SetActiveDurationControlHandler(null);
		}, [e]);
		let r = n.useCallback(() => {
			if (e) {
				e.Cancel();
			}
			wt.I.SetActiveDurationControlHandler(null);
		}, [e]);
		return [t, r];
	})(i);
	if (!i) {
		return null;
	}
	let o = t.m_full.m_nWidth;
	let l = t.m_full.m_nHeight;
	return n.createElement(
		c.Q9,
		{
			refPopup: r,
			onDismiss: s,
			strTitle: "",
			className: zt.DurationControlDialogBackground,
			strName: "GlobalDurationControlDialog",
			popupWidth: o,
			popupHeight: l,
			minWidth: o,
			minHeight: l,
		},
		n.createElement(Wt, {
			onComplete: a,
		}),
	);
}
function Wt(e) {
	let { onComplete: t } = e;
	let r = ((e) => {
		let [t, r] = n.useState(undefined);
		let i = n.useRef(undefined);
		i.current = e;
		n.useEffect(() => {
			const e = 5;
			let t;
			let n = Date.now() + e * 1000;
			let a = () => {
				let e = (n - Date.now()) / 1000;
				let a = Math.max(Math.ceil(e), 0);
				r(a);
				if (a <= 0) {
					if (i.current) {
						i.current();
					}
					window.clearInterval(t);
				}
			};
			t = window.setInterval(a, 250);
			return () => window.clearInterval(t);
		}, [r, i]);
		return t;
	})(t);
	return n.createElement(
		"div",
		{
			className: zt.DurationControlDialog,
		},
		n.createElement(
			o.Y9,
			null,
			n.createElement(
				"div",
				{
					className: zt.TimerContainer,
				},
				n.createElement(
					"div",
					{
						className: zt.TimerDisplay,
					},
					n.createElement(
						"span",
						{
							className: zt.TimerText,
						},
						r || "",
					),
				),
			),
		),
		n.createElement(
			o.a3,
			{
				className: zt.InfoContainer,
			},
			n.createElement(
				"div",
				{
					className: zt.InfoContent,
				},
				n.createElement(
					"div",
					null,
					Localize("#SteamChina_DurationControl_Init_1"),
				),
				n.createElement(
					"div",
					null,
					Localize("#SteamChina_DurationControl_Init_2"),
				),
				n.createElement(
					"div",
					null,
					Localize("#SteamChina_DurationControl_Init_3"),
				),
				n.createElement(
					"div",
					null,
					Localize("#SteamChina_DurationControl_Init_4"),
				),
				n.createElement(
					"div",
					null,
					Localize("#SteamChina_DurationControl_Init_5"),
				),
			),
		),
	);
}
const Vt = Nr(() => {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState("");
	const [a, s] = n.useState(0);
	const [l, u] = n.useState();
	const d = Co(a);
	const A = n.useCallback((e, r) => {
		t(true);
		s(e);
		i(r);
	}, []);
	const p = n.useCallback(() => {
		t(false);
	}, [t]);
	n.useEffect(
		() => SteamClient.FamilySharing.RegisterForKickedBorrower(A).unregister,
		[A],
	);
	if (!e || !d) {
		return null;
	}
	const g = Localize("#Notification_FamilySharing_Title");
	const h = Localize(
		"#Notification_FamilySharing_StoppedSharedGame",
		d.display_name,
		r,
	);
	return n.createElement(
		c.hM,
		{
			strTitle: g,
			onDismiss: p,
			popupWidth: 500,
			popupHeight: 250,
			refPopup: u,
			modal: true,
		},
		n.createElement(o.Y9, null, g),
		n.createElement(o.a3, null, h),
		n.createElement(
			o.wi,
			null,
			n.createElement(
				o.$n,
				{
					onClick: p,
				},
				Localize("#Button_Close"),
			),
		),
	);
});
const Zt = n.lazy(() => require.e(7462).then(require.bind(require, 96884)));
const Yt = 1020;
const Kt = 750;
const Xt = 675;
const Jt = 500;
const $t = 0.8;
function er(e) {
	let [t, r] = useState(null);
	let [i, a, s] = Z_2(7, "open/screenshots", r);
	let [o, l, u] = Z_2(7, "open/clip", r);
	let [d, A, p] = Z_2(7, "open/recording", r);
	let [g, h, C] = Z_2(7, "open/media", r);
	let f = q_2();
	let b = Ue_2(f, a, l, A, h);
	let y = () => {
		s();
		u();
		p();
		C();
		r(null);
	};
	E = t;
	const {
		bActive: S,
		initialItem: w,
		initialFilter: B,
		initialView: I,
	} = n.useMemo(() => {
		const e = E && E.strFragmentURL == "open/recording";
		const t = e || (E && !e);
		if (!E) {
			return {
				bActive: t,
				bRecordingActive: e,
			};
		}
		const { strFragmentURL: r, urlParams: n, urlParts: i } = E;
		let a;
		let s;
		let o;
		switch (r) {
			case "open/screenshots": {
				const [e, t] = i;
				let r;
				let n = "all";
				switch (e) {
					case "clip": {
						n = "clip";
						break;
					}
					case "recording": {
						n = "recording";
						break;
					}
					case "screenshot": {
						n = "screenshot";
						break;
					}
					default: {
						r = e;
					}
				}
				a = {
					listSource: r
						? {
								type: "app",
								gameid: r,
							}
						: {
								type: "recents",
							},
					mediaType: n,
				};
				s = t
					? {
							type: "screenshot",
							id: t,
						}
					: undefined;
				break;
			}
			case "open/clip": {
				const e = i[0];
				if (e) {
					a = {
						listSource: {
							type: "app",
							gameid: XA(e).game_id,
						},
					};
					s = {
						type: "clip",
						id: e,
					};
				}
				break;
			}
			case "open/recording": {
				const e = i[0];
				if (e) {
					a = {
						listSource: {
							type: "app",
							gameid: e,
						},
					};
					s = {
						type: "recording",
						id: e,
					};
				}
				break;
			}
			case "open/media": {
				const e = n.item;
				const t = n.filter;
				o = n.view;
				try {
					if (t) {
						const e = JSON.parse(t);
						if (e && typeof e == "object") {
							a = e;
						}
					}
					if (e) {
						const t = JSON.parse(e);
						if (t && typeof t == "object" && "type" in t) {
							s = t;
						}
					}
				} catch (e) {
					console.error("Failed to parse media URL params", e);
				}
				break;
			}
			default: {
				console.error(`Unexpected media entry point. "${r}"`);
			}
		}
		return {
			bActive: t,
			bRecordingActive: e,
			initialFilter: a,
			initialItem: s,
			initialView: o,
		};
	}, [E]);
	var E;
	if (!S) {
		return n.createElement(
			"div",
			{
				style: {
					display: "none",
				},
			},
			n.createElement(
				n.Suspense,
				{
					fallback: null,
				},
				n.createElement(Zt, null),
				";",
			),
		);
	}
	let M = (() => {
		let e = ve.Of.GetRestoreDetails("Window_SteamDesktop").split("&");
		let t = {};
		for (let r of e) {
			let [e, n] = r.split("=");
			t[e] = n;
		}
		let r = Number(t.maxW || t.w) || Yt;
		let n = Number(t.maxH || t.h) || Kt;
		return {
			nWidth: $t * r,
			nHeight: $t * n,
		};
	})();
	return n.createElement(
		c.hM,
		{
			className: A_2(qt.MM),
			strTitle: Localize("#MediaManager_Dialog_Header"),
			onDismiss: y,
			resizable: true,
			popupWidth: M.nWidth,
			popupHeight: M.nHeight,
			minWidth: Xt,
			minHeight: Jt,
			refPopup: b,
			saveDimensionsKey: "Window_Media",
		},
		n.createElement(jt.MN, {
			initialItem: w,
			initialFilter: B,
			initialView: I,
			fnDismiss: y,
		}),
	);
}
export function j() {
	const e = hf();
	const t = Wx();
	return n.createElement(
		l.wC,
		null,
		n.createElement(rr.g, null),
		n.createElement(A, null),
		n.createElement(i.Xb, null),
		n.createElement(E, null),
		n.createElement(Ae, null),
		n.createElement(se.p, null),
		!Yk() && n.createElement(L, null),
		n.createElement(re, null),
		n.createElement(ne, null),
		n.createElement(ie.z, null),
		n.createElement(ae.Y, null),
		n.createElement(oe.bT, null),
		n.createElement(Et, null),
		n.createElement(Ut, null),
		n.createElement(be, null),
		n.createElement(Pe, null),
		e && n.createElement(ft, null),
		n.createElement(rt.Y, null),
		n.createElement(at, null),
		n.createElement(er, null),
		n.createElement(ut, null),
		e &&
			n.createElement(lt.e, {
				bDesktopBanner: true,
			}),
		e && t && n.createElement(dt.x, null),
		false,
		t && n.createElement(At.F, null),
		n.createElement(yt.u, null),
		e && n.createElement(Ft, null),
		e && n.createElement(Pt, null),
		n.createElement(Vt, null),
		n.createElement(Ht.er, null),
		n.createElement(tr.eJ, null),
	);
}
