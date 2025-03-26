var n = require("./96000.js");
var i = require("./48289.js");
var a = require("./5640.js");
var s = require("./64004.js");
var o = require("./34792.js");
var l = require("./46422.js");
var c = require(/*webcrack:missing*/ "./90095.js");
var m = require(/*webcrack:missing*/ "./63696.js");
var u = require("./3475.js");
var d = require(/*webcrack:missing*/ "./88750.js");
var A = require(/*webcrack:missing*/ "./78325.js");
var p = require(/*webcrack:missing*/ "./21937.js");
var g = require(/*webcrack:missing*/ "./11131.js");
var h = require(/*webcrack:missing*/ "./88808.js");
function C(e) {
	const {
		active: t,
		hideMenu: r,
		element: n,
		position: i,
		browserInfo: a,
		options: s = {},
		refInstance: o,
		children: l,
	} = e;
	const c = (0, g.R7)().ownerWindow;
	const [u, C] = m.useState();
	const _ = m.useRef();
	_.current ||= new p.z();
	m.useLayoutEffect(() => {
		if (t || s.bRetainOnHide) {
			if (u) {
				if (t) {
					u.Show();
				}
			} else {
				const e = _.current.CreateContextMenuInstance(
					m.createElement(
						d.tz,
						{
							bForceDesktopPresentation: true,
						},
						l,
					),
					n,
					i?.x,
					i?.y,
					{
						...s,
						bForcePopup: true,
						bStandalone: true,
					},
				);
				e.SetOnHideCallback(() => {
					r();
					if (!s.bRetainOnHide) {
						o.current = undefined;
						C(undefined);
					}
				});
				o.current = e;
				C(e);
			}
		}
	}, [t, u]);
	m.useEffect(() => {
		if (u) {
			u.SetPosition(i.x, i.y, s);
		}
	}, [u, i, s]);
	if (t || s.bRetainOnHide) {
		return A.createPortal(
			m.createElement(h.k, {
				managerOverride: _.current,
				bSuppressMouseOverlay: true,
			}),
			c.document.body,
		);
	} else {
		return null;
	}
}
var _ = require("./35488.js");
import { Localize } from "../../actual_src/utils/localization.js";
var b = require(/*webcrack:missing*/ "./52451.js");
var y = require(/*webcrack:missing*/ "./72476.js");
var S = require("./37743.js");
var w = S;
var B = require("./32998.js");
var v = require(/*webcrack:missing*/ "./90765.js");
const I = new Map([
	[
		"Online",
		{
			flags: 1,
			ePersonaState: 1,
			strURL: "steam://friends/status/online",
			eParentalFeature: 4,
		},
	],
	[
		"Away",
		{
			flags: 2,
			ePersonaState: 3,
			strURL: "steam://friends/status/away",
			eParentalFeature: 4,
		},
	],
	[
		"Invisible",
		{
			flags: 131072,
			ePersonaState: 7,
			strURL: "steam://friends/status/invisible",
			eParentalFeature: 4,
		},
	],
	[
		"Offline",
		{
			flags: 8,
			ePersonaState: 0,
			strURL: "steam://friends/status/offline",
			eParentalFeature: 4,
		},
	],
	[
		"Store",
		{
			flags: 16,
			bHideInCybercafe: true,
			strURL: "steam://store",
			eParentalFeature: 1,
		},
	],
	[
		"MyGames",
		{
			flags: 64,
			strURL: "steam://open/library",
		},
	],
	[
		"Community",
		{
			flags: 32,
			bHideInChina: true,
			strURL: "steam://url/CommunityHome",
		},
	],
	[
		"Friends",
		{
			flags: 512,
			strURL: "steam://open/friends",
			eParentalFeature: 4,
		},
	],
	[
		"FriendActivity",
		{
			flags: 16384,
			bHideInChina: true,
			strURL: "steam://url/SteamIDFriendsPage",
			eParentalFeature: 4,
		},
	],
	[
		"Screenshots",
		{
			flags: 4096,
			strURL: "steam://open/screenshots",
		},
	],
	[
		"Servers",
		{
			flags: 128,
			strURL: "steam://open/servers",
		},
	],
	[
		"Settings",
		{
			flags: 2048,
			strURL: "steam://open/settings",
		},
	],
	[
		"BigPicture",
		{
			flags: 8192,
			bHideInChina: true,
			bHideInGamepadUI: true,
			strURL: "steam://open/bigpicture",
		},
	],
	[
		"CloseBigPicture",
		{
			flags: 8192,
			bHideInChina: true,
			bHideInDesktop: true,
			strURL: "steam://close/bigpicture",
		},
	],
	[
		"VR",
		{
			flags: 65536,
			bHideInChina: true,
			strURL: "steam://run/250820",
		},
	],
	[
		"Exit",
		{
			flags: 1024,
			onSelected: () => {
				SteamClient.User.StartShutdown(true);
			},
		},
	],
	[
		"AlwaysExit",
		{
			onSelected: () => {
				SteamClient.User.StartShutdown(true);
			},
		},
	],
	[
		"StopStreaming",
		{
			bHideWhenNotStreaming: true,
			strURL: "steam://stopstreaming",
		},
	],
	[
		"Console",
		{
			strURL: "steam://open/console",
			eParentalFeature: u.JC,
		},
	],
]);
export function T() {
	return I;
}
function M(e) {
	const { overview: t } = e;
	const [r] = (0, o.VI)("library_display_icon_in_game_list");
	return m.createElement(
		d.kt,
		{
			key: t.appid,
			onSelected: () => {
				SteamClient.Apps.RunGame(t.GetGameID(), "", -1, 500);
			},
		},
		r &&
			m.createElement(
				"div",
				{
					className: w.GameIcon,
				},
				m.createElement(B.nK, {
					item: t,
				}),
			),
		m.createElement(_T, {
			item: t,
		}),
	);
}
function _T(e) {
	let t = (0, c.q3)(() => {
		let { item: t } = e;
		return {
			display_name: t.display_name,
			display_status: t.display_status,
			active_beta: t.active_beta,
		};
	});
	let r = "";
	switch (t.display_status) {
		case 6:
		case 18:
		case 19:
		case 20:
		case 39:
		case 7:
		case 22:
		case 23:
		case 24:
		case 38:
		case 8:
		case 34:
		case 35:
			r = w.Updating;
			break;
		case 4:
		case 36:
			r = w.Running;
	}
	let n = t.display_name;
	if (t.active_beta) {
		n = n + " [" + t.active_beta + "]";
	}
	return m.createElement(
		"span",
		{
			className: (0, v.A)(w.JumpListGameName, r),
		},
		n,
	);
}
function R(e) {
	const t = (0, c.q3)(() =>
		n.md
			.GetCollection(n.A8.Recent)
			.visibleApps.filter((e) => e.BIsVisibleInMRUList())
			.slice(0, 5),
	);
	if (t.length == 0) {
		return null;
	} else {
		return m.createElement(
			m.Fragment,
			null,
			t.map((e) =>
				m.createElement(M, {
					key: e.appid,
					overview: e,
				}),
			),
			m.createElement(d.K5, null),
		);
	}
}
function k(e) {
	const { option: t, details: r, personaState: n } = e;
	const i = r.ePersonaState !== undefined && n == r.ePersonaState;
	let a = m.useCallback(
		() => SteamClient.URL?.ExecuteSteamURL(r.strURL),
		[r.strURL],
	);
	if (!r.strURL) {
		a = r.onSelected;
	}
	return m.createElement(
		d.kt,
		{
			onSelected: a,
			className: w.JumpListItem,
		},
		i &&
			m.createElement(_.Checkmark, {
				className: w.Icon,
			}),
		!i &&
			r.ePersonaState !== undefined &&
			m.createElement("div", {
				className: w.Icon,
			}),
		m.createElement(
			"div",
			{
				className: w.JumpListItemText,
			},
			Localize("#TaskbarOption_" + t),
		),
	);
}
function D(e) {
	const { rgItemsInSection: t, personaState: r } = e;
	const [n] = (0, o.VI)("jumplist_flags");
	const i = T();
	const l = (0, s.Gs)();
	const u = (0, y.Qn)();
	const A = !u;
	const p = (0, c.q3)(() =>
		t.filter((e) => {
			const t = i.get(e);
			return (
				t &&
				(!t.flags || n & t.flags) &&
				(!(0, y.Y2)() || !t.bHideInChina) &&
				(l || !t.bHideWhenNotStreaming) &&
				!a.jR.BIsFeatureBlocked(t.eParentalFeature) &&
				((u && !t.bHideInGamepadUI) || (A && !t.bHideInDesktop))
			);
		}),
	);
	if (p.length == 0) {
		return null;
	} else {
		return m.createElement(
			m.Fragment,
			null,
			p.map((e) =>
				m.createElement(k, {
					key: e,
					option: e,
					details: i.get(e),
					personaState: r,
				}),
			),
			m.createElement(d.K5, null),
		);
	}
}
function N(e) {
	const t = (0, i.Bh)("m_ePersonaState");
	const r = (0, l.Sn)();
	return m.createElement(
		m.Fragment,
		null,
		m.createElement(R, null),
		m.createElement(D, {
			rgItemsInSection: ["Online", "Away", "Invisible", "Offline"],
			personaState: t,
		}),
		m.createElement(D, {
			rgItemsInSection: ["Store", "MyGames", "Community", "FriendActivity"],
		}),
		m.createElement(D, {
			rgItemsInSection: ["Friends", "Screenshots", "Servers", "Settings"],
		}),
		m.createElement(D, {
			rgItemsInSection: [
				"StopStreaming",
				"BigPicture",
				"CloseBigPicture",
				"VR",
			],
		}),
		r &&
			m.createElement(D, {
				rgItemsInSection: ["Console"],
			}),
		m.createElement(D, {
			rgItemsInSection: ["AlwaysExit"],
		}),
	);
}
export function x(e) {
	const [t, r, n] = (0, b.uD)();
	const i = m.useRef(undefined);
	const [a, s] = m.useState({
		position: {
			x: 100000,
			y: 100000,
		},
		options: {
			targetMonitor: {
				nScreenLeft: 0,
				nScreenTop: 0,
				nScreenWidth: 100,
				nScreenHeight: 100,
				flMonitorScale: 1,
			},
			flGamepadScale: 1,
		},
	});
	const o = (0, b.CH)();
	m.useEffect(
		() =>
			SteamClient.Messaging.RegisterForMessages("JumpList", (e, n, a) => {
				if (n == "Open") {
					let e = JSON.parse(a);
					let n = {
						x: e.position.x,
						y: e.position.y,
					};
					let o = {
						targetMonitor: {
							nScreenLeft: e.monitorLeft,
							nScreenTop: e.monitorTop,
							nScreenWidth: e.monitorRight - e.monitorLeft,
							nScreenHeight: e.monitorBottom - e.monitorTop,
							flMonitorScale: e.monitorScale,
						},
						flGamepadScale: e.gamepadScale,
					};
					if (t) {
						SteamClient.Messaging.PostMessage("Jumplist", "Rendered", "");
						i.current.TakeFocus();
					}
					s({
						position: n,
						options: o,
					});
					r();
				}
			}).unregister,
		[r, t, o],
	);
	m.useEffect(() => {
		if (t) {
			SteamClient.Messaging.PostMessage("Jumplist", "Rendered", "");
		}
	}, [t]);
	const l = m.useMemo(
		() => ({
			bForcePopup: true,
			bAlwaysOnTop: true,
			bScreenCoordinates: true,
			bPreferPopTop: true,
			bCreateHidden: true,
			bRetainOnHide: (0, y.td)(),
			...a?.options,
		}),
		[a],
	);
	const c = m.useMemo(() => a?.position, [a?.position.x, a?.position.y]);
	return m.createElement(
		C,
		{
			active: t,
			position: c,
			hideMenu: n,
			options: l,
			refInstance: i,
		},
		m.createElement(N, null),
	);
}
