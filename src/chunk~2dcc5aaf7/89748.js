import n, { Cg } from "./34629.js";
import i, { PR, bg } from "./68292.js";
import a, { Z9 } from "./91720.js";
import s from "./81482.js";
import o, { Qu, uV } from "./32700.js";
import l from "./46422.js";
import c, { zK } from "./63367.js";
import m from "./87935.js";
import u from "./83599.js";
import d from "./61175.js";
import A from "./96593.js";
import p, { F as F_1 } from "./63947.js";
import g from "./50876.js";
import h from "./85360.js";
import C from "./8573.js";
import _ from "./43599.js";
import f, { Ab, On, Tc, Y2 } from "./72476.js";
import b from "./37499.js";
import y, { U as U_1 } from "./83184.js";
import { vq, ht as ht_1 } from "./63259.js";
import w from "./76356.js";
import B from "./34792.js";
import { Sj } from "./24287.js";
import I, { AP } from "./45967.js";
import E from "./49171.js";
import M from "./5640.js";
import { c as c_1 } from "./80553.js";
import z from "./61277.js";
import x from "./87913.js";
import U from "./61518.js";
import W from "./34776.js";
import V from "./33706.js";
import H from "./6160.js";
import j from "./71033.js";
import q from "./25467.js";
import Q from "./95979.js";
import Z from "./77347.js";
import Y from "./24496.js";
import K from "./75140.js";
import X from "./60917.js";
import J from "./56970.js";
import $ from "./13661.js";
import ee from "./74416.js";
import te from "./99235.js";
import re from "./69767.js";
import ne from "./18521.js";
import ie, { Gn, h5, z7 } from "./89193.js";
import { q3 } from "./90095.js";
import se from "./52451.js";
import oe, { I8 } from "./12176.js";
import ce from "./58663.js";
import me from "./48307.js";
import { OI } from "./12251.js";
import xe from "./31930.js";
import Ve from "./34665.js";
import He from "./36934.js";
import je from "./13337.js";
import qe from "./55444.js";
import Qe from "./83591.js";
import Ze, { aj } from "./63088.js";
import Ye from "./83957.js";
import Xe from "./37976.js";
import "./63696.js";
import Je from "./28987.js";
import { w as w_1 } from "./49455.js";
import et from "./93960.js";
import { H as H_1 } from "./16154.js";
import nt from "./31222.js";
import Wt from "./49265.js";
import Vt from "./94361.js";
import Ht from "./70541.js";
import jt from "./13672.js";
import { b as b_1 } from "./86172.js";
import { Tg } from "./31958.js";
import { I as I_1 } from "./91369.js";
import Yt from "./32179.js";
import Kt from "./10927.js";
import Xt from "./12750.js";
import Jt from "./78057.js";
import $t from "./31993.js";
import er from "./74827.js";
import tr from "./47801.js";
import rr from "./96000.js";
import nr from "./3963.js";
import ir from "./39839.js";
import ar from "./97893.js";
import sr from "./78475.js";
import or from "./94496.js";
import lr from "./48289.js";
import cr from "./45387.js";
import mr from "./73317.js";
import ur from "./57016.js";
import dr from "./33512.js";
import Ar from "./90985.js";
import pr from "./9156.js";
import gr from "./92749.js";
import hr from "./64004.js";
import Cr from "./65528.js";
import _r from "./75248.js";
import fr from "./91745.js";
import br from "./16139.js";
import yr from "./83399.js";
import Sr from "./70239.js";
import wr from "./75144.js";
import { Bf } from "./24274.js";
const R = [
	[
		"url",
		[7, 4],
		(e) => {
			let { navigate: t, strRest: r } = e;
			const [n, ...i] = r.split("/");
			const a = m.B7.ResolveURL(n, ...i);
			if (!a) {
				k.Error(
					`WebURL ${n} is not registered in URLStore, cannot navigate to ${r} `,
				);
				return;
			}
			t.SteamWeb(a);
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"helpurl",
		[7, 4],
		(e) => {
			let { strRest: t, navigate: r } = e;
			let n = m.B7.ResolveURL("HelpFrontPage");
			if (t.startsWith("/")) {
				n += t;
			} else {
				n += `/${t}`;
			}
			r.SteamWeb(n);
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"openurl",
		[7, 4],
		(e) => {
			const { navigate: t, strRest: r } = e;
			if (m.B7.BIsSteamURL(r)) {
				t.SteamWeb(r);
			} else if (r.startsWith("http://") || r.startsWith("https://")) {
				t.ExternalWeb(r);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"openurl_external",
		[7, 4],
		(e) => {
			const { strRest: t, navigate: r } = e;
			if (t.startsWith("http://") || t.startsWith("https://")) {
				r.ExternalWeb(t);
			}
		},
	],
	[
		"openurlforpid",
		[7, 4],
		(e) => {
			const { strRest: t, rgURLParts: r, navigate: n } = e;
			if (r.length < 2) {
				return;
			}
			const i = t.indexOf("/");
			const a = t.substring(i + 1);
			const s = parseInt(r.shift());
			const o = l.oy.GetWindowInstanceForPID(s);
			const c = o?.Navigator || n;
			if (m.B7.BIsSteamURL(a)) {
				c.SteamWeb(a);
			} else {
				c.ExternalWeb(a);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"openexternalforpid",
		7,
		(e) => {
			const { strRest: t, rgURLParts: r, navigate: n } = e;
			if (r.length < 2) {
				return;
			}
			const i = t.indexOf("/");
			const a = t.substring(i + 1);
			const s = parseInt(r.shift());
			const o = l.oy.GetWindowInstanceForPID(s);
			const c = o?.Navigator || n;
			if (N(a)) {
				c.SteamWebTab(a);
			} else {
				c.ExternalWeb(a);
			}
		},
	],
	[
		"openexternalforpid",
		4,
		(e) => {
			const { url: t, strRest: r, rgURLParts: n, navigate: i } = e;
			if (n.length < 2) {
				return;
			}
			const a = r.indexOf("/");
			const s = r.substring(a + 1);
			const o = parseInt(n.shift());
			const c = l.oy.GetWindowInstanceForPID(o);
			const m = c?.Navigator || i;
			if (N(s)) {
				b.Q.OnSteamURLOpenExternalForPID(t);
			} else {
				m.ExternalWeb(s);
			}
		},
	],
	[
		"open/apprunningcontrols",
		4,
		({ navigate: e, url: t, rgURLParts: r }) =>
			e.AppOverlay.AppRunningControls(),
	],
	[
		"publisher",
		[7, 4],
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = m.B7.ResolveURL("StorePublisherPage", i);
				r.SteamWeb(e);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"open/storefront",
		[7, 4],
		F,
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"open/defaultdialog/maininstance",
		[7, 4],
		G,
		{
			bForceOpenInMainInstance: true,
		},
	],
	["open/defaultdialog", [7, 4], G],
	[
		["store", "purchase", "advertise", "store_demo"],
		[7, 4],
		O,
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"storeurl",
		[7, 4],
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = `${m.B7.GetStoreURL()}/${i}`;
				r.SteamWeb(e);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"broadcast/watch",
		[7, 4],
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = m.B7.ResolveURL("SteamIDBroadcastPage", i);
				r.SteamWeb(e);
			}
		},
	],
	[
		"video/watch",
		7,
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = Number(i);
				const t = m.B7.ResolveURL("WatchVideo", e);
				r.SteamWeb(t);
			}
		},
	],
	[
		["appnews", "updatenews"],
		7,
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = Number(i);
				const t = m.B7.ResolveURL("AppNewsPage", e);
				r.SteamWeb(t);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[["open/library", "open/games", "nav/games"], [7, 4, 0], P],
	[
		["open/downloads", "nav/downloads"],
		[7, 4, 0],
		({ navigate: e }) => e.Downloads(),
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"open/minigameslist",
		[7],
		() => {
			const [e, t] = B.rV.GetClientSetting("small_mode");
			SteamClient.UI.SetUIMode(7);
			l.oy.WindowStore.EnsureMainWindowCreated();
			t(true);
		},
	],
	[
		"open/largegameslist",
		7,
		() => {
			SteamClient.UI.SetUIMode(7);
			l.oy.WindowStore.EnsureMainWindowCreated();
			d.n6.EnsureLargeMode();
		},
		{
			bRequiresLargeMode: true,
		},
	],
	["open/largegameslist", 4, P],
	[
		"cdkeys",
		[7, 4],
		(e) => {
			const { url: t, window: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = Number(i);
				const t = A.tw.GetAppOverviewByAppID(e);
				if (t) {
					F_1(r, t);
				}
			}
		},
	],
	["open/friends", 4, ({ navigate: e }) => e.Chat()],
	[
		["open/console", "nav/console"],
		[7, 4],
		({ navigate: e }) => e.Console(),
		{
			bRequiresLargeMode: true,
		},
	],
	["open/screenshots", 4, ({ navigate: e }) => e.Media.Grid()],
	[
		["settings", "open/settings"],
		4,
		({ navigate: e, url: t, rgURLParts: r }) => {
			const [n] = r;
			k.Debug("Navigating to gamepad settings page:", t);
			let i = g.Bv[n];
			if (!i) {
				if (n) {
					k.Error("unhandled settings page", n);
				}
				i = "General";
			}
			return e.Settings(i);
		},
	],
	[
		["settings", "open/settings"],
		7,
		(e) => {
			const { url: t, rgURLParts: r } = e;
			let [n] = r;
			if (n == "gr") {
				n = "gamerecording";
			}
			k.Debug("Navigating to desktop settings page:", t);
			let i = g.Bv[n];
			if (!i) {
				if (n) {
					k.Error("unhandled settings page", n);
				}
				i = "Account";
			}
			Sj(i);
		},
		{
			bForceOpenInMainInstance: true,
		},
	],
	[
		"currentcontrollerconfig",
		4,
		({ navigate: e, url: t }) => {
			let r = Number(t.split("/").pop());
			if (!r) {
				r = h.v3?.EditingConfigurationAppId;
				if (r <= 0) {
					r = l.oy.MainRunningApp?.appid;
				}
			}
			if (r) {
				e.ControllerConfigurator.Main(r);
			}
		},
	],
	[
		"viewfriendsgame",
		[7, 4],
		(e) => {
			const t = e.rgURLParts[0];
			const r = e.instance;
			_.Xw.ShowUserGameInfoDialog(r?.params.browserInfo.m_unPID, new C.b(t));
		},
	],
	[
		"joinfriendsgame",
		[7, 4],
		(e) => {
			const t = e.rgURLParts[0];
			_.Xw.ConnectToFriendsGameBySteamID(new C.b(t), e.window);
		},
	],
	[
		"ClientBeta",
		7,
		(e) => {
			const { window: t, url: r } = e;
			Sj("Interface");
		},
	],
	[
		"ClientBeta",
		4,
		(e) => {
			const { navigate: t } = e;
			t.Settings("System");
		},
	],
	[
		"open/activateproduct",
		7,
		(e) => {
			U_1(e.window);
		},
	],
	[
		"backup",
		7,
		(e) => {
			const t = Number(e.rgURLParts[0]);
			vq([t], e.window);
		},
	],
	[
		"validate",
		7,
		(e) => {
			const t = Number(e.rgURLParts[0]);
			if (A.tw.GetAppOverviewByAppID(t)) {
				w.I.VerifyAppFiles(t);
				e.navigate.App(t);
			}
		},
	],
	[
		["open/tools", "nav/tools"],
		[7, 4],
		(e) => d.n6.OnOpenLibrary("steam://open/library/view/tools", e.instance),
	],
	[
		"open/restoredialog",
		7,
		(e) => {
			const { window: t } = e;
			ht_1(t);
		},
	],
	[
		"exit",
		[7, 4],
		(e) => {
			SteamClient.User.StartShutdown(true);
		},
	],
	[
		"friends/add",
		[7, 4],
		({ navigate: e }) => {
			e.SteamWeb(m.B7.ResolveURL("CommunityAddFriends"));
		},
	],
	["friends/status/online", [7, 4], () => L(1)],
	["friends/status/away", [7, 4], () => L(3)],
	["friends/status/invisible", [7, 4], () => L(7)],
	["friends/status/offline", [7, 4], () => L(0)],
	[
		"friends/ShowChatRoomGroupInvite",
		[7, 4],
		(e) => {
			let t = {
				command: "ShowChatRoomGroupInvite",
				invite_code: e.rgURLParts[0],
			};
			let r = PR();
			let n = e.instance.params.browserInfo;
			r.ExecuteCommand(n, t);
		},
	],
	[
		"itemstore",
		[7, 4],
		({ navigate: e, rgURLParts: t }) => {
			if (t.length != 1) {
				return;
			}
			let r = t[0];
			const n = m.B7.ResolveURL("ItemStorePage", r);
			e.SteamWeb(n);
		},
	],
	[
		"itemstoredetail",
		[7, 4],
		({ navigate: e, rgURLParts: t }) => {
			if (t.length != 2) {
				return;
			}
			let r = t[0];
			let n = t[1];
			const i = m.B7.ResolveURL("ItemStoreDetailPage", r, n);
			e.SteamWeb(i);
		},
	],
	[
		"guestpasses",
		[7, 4],
		({ navigate: e }) => {
			const t = m.B7.ResolveURL("ManageGiftsPage");
			e.SteamWeb(t);
		},
	],
	[
		"connect",
		[7],
		(e) => {
			const { rgURLParts: t } = e;
			let r = t[0];
			let n = 27015;
			let i = r.indexOf(":");
			if (i > 0) {
				n = parseInt(r.slice(i + 1));
				r = r.slice(0, i);
			}
			let a = t.length >= 2 ? t[1] : null;
			const s = {
				ip: r,
				port: n,
				queryPort: n,
			};
			_.Xw.ShowServerGameInfoDialog(s).then((e) => {
				if (a) {
					e.SetPassword(a);
				}
				e.Connect(false);
			});
		},
	],
	[
		"open/bigpicture/storefront",
		[7, 4],
		F,
		{
			bRequiresLargeMode: true,
		},
	],
	["open/bigpicture/store", [7, 4], O],
	["open/bigpicture/games", [7, 4], P],
	["open/bigpicture/librarydetails", [7, 4], P],
	[
		"open/bigpicture/workshopitem",
		[7, 4],
		({ navigate: e, rgURLParts: t }) => {
			const r = t[0];
			if (r) {
				const t = Number(r);
				const n = m.B7.ResolveURL("CommunityFilePage", t);
				e.SteamWeb(n);
			}
		},
	],
	[
		"open/bigpicture",
		[7, 4],
		({ navigate: e }) => {
			if (I.qL.IsSteamVRRunning && I.qL.IsVRHMDAwake) {
				const e = l.oy.WindowStore.GetVRWindowInstance();
				if (e) {
					c_1(e.GetMainVROverlayKey());
				}
			} else {
				SteamClient.UI.SetUIMode(4);
			}
		},
	],
	[
		"devmode",
		[7, 4],
		({ rgURLParts: e }) => {
			if (e.length == 1 && (e[0] == "enable" || e[0] == "disable")) {
				const t = e[0] == "enable";
				f.TS.DEV_MODE = t;
				SteamClient._internal?.SetDevMode(t);
			}
		},
	],
	[
		"webhelper/disablegpu",
		[7, 4],
		({ rgURLParts: e }) => {
			SteamClient._internal?.RequestDisableGpu();
		},
	],
];
const k = new u.wd("NavHandlers");
function D() {
	const e = (...e) => {
		const [t, r, n, i] = e;
		const a = Array.isArray(r) ? r : [r];
		const s = Array.isArray(t) ? t : [t];
		a.forEach((e) =>
			s.forEach((t) =>
				c.Dt.RegisterForRunSteamURL(
					e,
					t,
					((e, t, r, n) => (i, a) => {
						const {
							strProtocol: s,
							strSteamURL: o,
							rgParts: m,
							strRest: u,
							params: A,
						} = zK(t, a);
						if (!Ab(s)) {
							return;
						}
						if (o != t) {
							return;
						}
						if (e == 7 && n?.bRequiresLargeMode) {
							d.n6.EnsureLargeMode();
						}
						let p =
							l.oy.WindowStore.MainWindowInstance ?? l.oy.ActiveWindowInstance;
						if (
							!n?.bForceOpenInMainInstance &&
							I.qL.IsSteamVRRunning &&
							I.qL.IsVRHMDAwake
						) {
							p = l.oy.WindowStore.GetVRWindowInstance() ?? p;
							if (p?.IsVRWindow()) {
								c_1(p.GetMainVROverlayKey());
							}
						}
						return r({
							mode: e,
							eSource: i,
							url: a,
							navigate: p?.Navigator ?? E.z.GetNavigator(),
							window: p?.BrowserWindow || window,
							instance: p,
							rgURLParts: m,
							urlParams: A,
							strSteamURL: t,
							strRest: u,
						});
					})(e, t, n, i),
				),
			),
		);
	};
	R.forEach((t) => e(...t));
}
function N(e) {
	return (
		!!On(e, f.TS.STORE_BASE_URL) ||
		!!On(e, f.TS.COMMUNITY_BASE_URL) ||
		!!On(e, f.TS.COMMUNITY_BASE_URL) ||
		!!On(e, f.TS.HELP_BASE_URL) ||
		!!On(e, f.TS.COMMUNITY_BASE_URL) ||
		!!On(e, f.TS.HELP_BASE_URL) ||
		!!On(e, f.TS.STORE_CHECKOUT_BASE_URL)
	);
}
function F({ navigate: e }) {
	e.SteamWeb(m.B7.GetStoreURL());
}
function G({ navigate: e }) {
	const [t] = B.rV.GetClientSetting("start_page");
	const [r, n] = B.rV.GetClientSetting("small_mode");
	switch (t) {
		case "library":
		case "friends":
		case "servers": {
			e.Home(undefined, {
				bReplace: true,
			});
			break;
		}
		case "console": {
			d.n6.EnsureLargeMode();
			e.Console({
				bReplace: true,
			});
			break;
		}
		case "store": {
			if (r || M.jR.BIsFeatureBlocked(1)) {
				e.Home(undefined, {
					bReplace: true,
				});
			} else {
				n(false);
				e.SteamWeb(m.B7.ResolveURL("StoreFrontPage"), {
					bReplace: true,
				});
			}
			break;
		}
		default: {
			const i = {
				friendactivity: {
					knownUrl: "SteamIDFriendsPage",
					eFeature: 4,
				},
				community: {
					knownUrl: "CommunityHome",
					eFeature: 2,
				},
				news: {
					knownUrl: "NewsHomePage",
					eFeature: 5,
				},
			};
			if (t in i && !M.jR.BIsFeatureBlocked(i[t].eFeature)) {
				n(false);
				e.SteamWeb(m.B7.ResolveURL(i[t].knownUrl), {
					bReplace: true,
				});
			} else {
				e.Home(undefined, {
					bReplace: true,
				});
			}
		}
	}
}
function O(e) {
	const { navigate: t, rgURLParts: r } = e;
	const n = r[0];
	if (n) {
		let e = m.B7.ResolveURL("StoreAppPage", n);
		if (e.endsWith("/")) {
			e = e.slice(0, -1);
		}
		t.SteamWeb(e);
	} else {
		t.SteamWeb(m.B7.GetStoreURL());
	}
}
function P({ url: e, instance: t }) {
	return d.n6.OnOpenLibrary(e, t);
}
function L(e) {
	bg().SetUserPersonaState(e, true);
}
class le {
	AssertEq(e, t, r) {
		if (e === t) {
			return true;
		}
		throw Error(`${r} unexpected value: have:'${e}' got:'${t}'`);
	}
	AssertNe(e, t, r) {
		if (e !== t) {
			return true;
		}
		throw Error(`${r} unexpected equality: have:'${e}' got:'${t}'`);
	}
	AssertLt(e, t, r) {
		if (e < t) {
			return true;
		}
		throw Error(`${r} failed lt test: have:'${e}' got:'${t}'`);
	}
	AssertGt(e, t, r) {
		if (e > t) {
			return true;
		}
		throw Error(`${r} failed gt test: have:'${e}' got:'${t}'`);
	}
	async MeasureTestLatency(e, t, r) {
		let n = 0;
		let i = Number.MAX_VALUE;
		let a = 0;
		for (let e = 0; e < t; ++e) {
			const t = performance.now();
			await r();
			const s = performance.now() - t;
			n += (s - n) / (e + 1);
			i = Math.min(s, i);
			a = Math.max(s, a);
		}
		console.log(
			`${e}: avg: ${n.toFixed(3)} ms, min: ${i.toFixed(3)} ms, max: ${a.toFixed(
				3,
			)} ms, count: ${t} ops`,
		);
		return {
			nAvgMs: n,
			nMinMs: i,
			nMaxMs: a,
		};
	}
	async MeasureTestThroughput(e, t, r) {
		const n = [];
		const i = performance.now();
		for (let e = 0; e < t; ++e) {
			n.push(r());
		}
		for (const e of n) {
			await e;
		}
		const a = performance.now() - i;
		const s = a / t;
		const o = (1 / s) * 1000;
		console.log(
			`${e}: rate: ${o.toFixed(3)} ops/s, per-op: ${s.toFixed(
				3,
			)} ms, total time: ${a.toFixed(3)} ms, count: ${t} ops`,
		);
		return {
			nElapsedMs: a,
			nMsPerOperation: s,
			nOpsPerSec: o,
		};
	}
}

const { Message } = ce;

class Ae extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.append_strings) {
			me.Sg(Ae.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				append_strings: {
					n: 1,
					r: true,
					q: true,
					br: me.qM.readString,
					bw: me.gp.writeRepeatedString,
				},
			},
		};
		return Ae.sm_m;
	}
	static MBF() {
		Ae.sm_mbf ||= me.w0(Ae.M());
		return Ae.sm_mbf;
	}
	toObject(e = false) {
		return Ae.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Ae.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ae();
		return Ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AppendToString_Request";
	}
}
class pe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pe.prototype.combined_text) {
			me.Sg(pe.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pe.sm_m ||= {
			proto: pe,
			fields: {
				combined_text: {
					n: 1,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return pe.sm_m;
	}
	static MBF() {
		pe.sm_mbf ||= me.w0(pe.M());
		return pe.sm_mbf;
	}
	toObject(e = false) {
		return pe.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(pe.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AppendToString_Response";
	}
}
class ge extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ge.prototype.text) {
			me.Sg(ge.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ge.sm_m ||= {
			proto: ge,
			fields: {
				text: {
					n: 1,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return ge.sm_m;
	}
	static MBF() {
		ge.sm_mbf ||= me.w0(ge.M());
		return ge.sm_mbf;
	}
	toObject(e = false) {
		return ge.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ge.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ge.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ge.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyText_Notification";
	}
}
class he extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.number) {
			me.Sg(he.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				number: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return he.sm_m;
	}
	static MBF() {
		he.sm_mbf ||= me.w0(he.M());
		return he.sm_mbf;
	}
	toObject(e = false) {
		return he.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(he.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(he.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(he.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(he.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyNumber_Notification";
	}
}
class Ce extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Ce();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLastNotifyNumber_Request";
	}
}
class _e extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_e.prototype.last_notify_number) {
			me.Sg(_e.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_e.sm_m ||= {
			proto: _e,
			fields: {
				last_notify_number: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return _e.sm_m;
	}
	static MBF() {
		_e.sm_mbf ||= me.w0(_e.M());
		return _e.sm_mbf;
	}
	toObject(e = false) {
		return _e.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(_e.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(_e.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(_e.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(_e.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLastNotifyNumber_Response";
	}
}
class fe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fe.prototype.count) {
			me.Sg(fe.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fe.sm_m ||= {
			proto: fe,
			fields: {
				count: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return fe.sm_m;
	}
	static MBF() {
		fe.sm_mbf ||= me.w0(fe.M());
		return fe.sm_mbf;
	}
	toObject(e = false) {
		return fe.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(fe.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(fe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(fe.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_TriggerSyntheticEvents_Request";
	}
}
class be extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return be.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new be();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new be();
		return be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_TriggerSyntheticEvents_Response";
	}
}
class ye extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.sequence) {
			me.Sg(ye.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				sequence: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return ye.sm_m;
	}
	static MBF() {
		ye.sm_mbf ||= me.w0(ye.M());
		return ye.sm_mbf;
	}
	toObject(e = false) {
		return ye.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ye.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ye.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifySyntheticEvent_Notification";
	}
}
class Se extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Se.prototype.numbers) {
			me.Sg(Se.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Se.sm_m ||= {
			proto: Se,
			fields: {
				numbers: {
					n: 1,
					r: true,
					q: true,
					br: me.qM.readInt32,
					pbr: me.qM.readPackedInt32,
					bw: me.gp.writeRepeatedInt32,
				},
			},
		};
		return Se.sm_m;
	}
	static MBF() {
		Se.sm_mbf ||= me.w0(Se.M());
		return Se.sm_mbf;
	}
	toObject(e = false) {
		return Se.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Se.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Se.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Se.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AddNumbers_Request";
	}
}
class we extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!we.prototype.accumulated) {
			me.Sg(we.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		we.sm_m ||= {
			proto: we,
			fields: {
				accumulated: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return we.sm_m;
	}
	static MBF() {
		we.sm_mbf ||= me.w0(we.M());
		return we.sm_mbf;
	}
	toObject(e = false) {
		return we.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(we.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(we.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new we();
		return we.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(we.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(we.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AddNumbers_Response";
	}
}
class Be extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Be.prototype.ordered_bytes) {
			me.Sg(Be.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Be.sm_m ||= {
			proto: Be,
			fields: {
				ordered_bytes: {
					n: 1,
					br: me.qM.readBytes,
					bw: me.gp.writeBytes,
				},
			},
		};
		return Be.sm_m;
	}
	static MBF() {
		Be.sm_mbf ||= me.w0(Be.M());
		return Be.sm_mbf;
	}
	toObject(e = false) {
		return Be.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Be.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Be.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_CountOrderedBytes_Request";
	}
}
class ve extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ve.prototype.byte_count) {
			me.Sg(ve.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ve.sm_m ||= {
			proto: ve,
			fields: {
				byte_count: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return ve.sm_m;
	}
	static MBF() {
		ve.sm_mbf ||= me.w0(ve.M());
		return ve.sm_mbf;
	}
	toObject(e = false) {
		return ve.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ve.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ve.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ve.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_CountOrderedBytes_Response";
	}
}
class Ie extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ie.prototype.start_num) {
			me.Sg(Ie.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ie.sm_m ||= {
			proto: Ie,
			fields: {
				start_num: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
				end_num: {
					n: 2,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return Ie.sm_m;
	}
	static MBF() {
		Ie.sm_mbf ||= me.w0(Ie.M());
		return Ie.sm_mbf;
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Ie.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Ie.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_ThreadedCount_Request";
	}
}
class Ee extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ee.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Ee();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ee();
		return Ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_ThreadedCount_Response";
	}
}
class Me extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.num) {
			me.Sg(Me.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				num: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return Me.sm_m;
	}
	static MBF() {
		Me.sm_mbf ||= me.w0(Me.M());
		return Me.sm_mbf;
	}
	toObject(e = false) {
		return Me.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Me.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Me();
		return Me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Me.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyCount_Notification";
	}
}
class Te extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Te.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Te();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Te();
		return Te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestInvalidBool_Request";
	}
}
class Re extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Re.prototype.before) {
			me.Sg(Re.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Re.sm_m ||= {
			proto: Re,
			fields: {
				before: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
				output: {
					n: 2,
					br: me.qM.readBool,
					bw: me.gp.writeBool,
				},
				after: {
					n: 3,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return Re.sm_m;
	}
	static MBF() {
		Re.sm_mbf ||= me.w0(Re.M());
		return Re.sm_mbf;
	}
	toObject(e = false) {
		return Re.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Re.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Re();
		return Re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Re.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestInvalidBool_Response";
	}
}
class ke extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.data_size) {
			me.Sg(ke.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				data_size: {
					n: 1,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
			},
		};
		return ke.sm_m;
	}
	static MBF() {
		ke.sm_mbf ||= me.w0(ke.M());
		return ke.sm_mbf;
	}
	toObject(e = false) {
		return ke.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ke.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ke();
		return ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ke.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ke.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLargeResponse_Request";
	}
}
class De extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!De.prototype.data) {
			me.Sg(De.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		De.sm_m ||= {
			proto: De,
			fields: {
				data: {
					n: 1,
					br: me.qM.readBytes,
					bw: me.gp.writeBytes,
				},
			},
		};
		return De.sm_m;
	}
	static MBF() {
		De.sm_mbf ||= me.w0(De.M());
		return De.sm_mbf;
	}
	toObject(e = false) {
		return De.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(De.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(De.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(De.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(De.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLargeResponse_Response";
	}
}
class Ne extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.data_size) {
			me.Sg(Ne.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				data_size: {
					n: 1,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
			},
		};
		return Ne.sm_m;
	}
	static MBF() {
		Ne.sm_mbf ||= me.w0(Ne.M());
		return Ne.sm_mbf;
	}
	toObject(e = false) {
		return Ne.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Ne.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ne();
		return Ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestLargeNotification_Request";
	}
}
class Fe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Fe.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Fe();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Fe();
		return Fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestLargeNotification_Response";
	}
}
class Ge extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ge.prototype.data) {
			me.Sg(Ge.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ge.sm_m ||= {
			proto: Ge,
			fields: {
				data: {
					n: 1,
					br: me.qM.readBytes,
					bw: me.gp.writeBytes,
				},
			},
		};
		return Ge.sm_m;
	}
	static MBF() {
		Ge.sm_mbf ||= me.w0(Ge.M());
		return Ge.sm_mbf;
	}
	toObject(e = false) {
		return Ge.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Ge.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ge();
		return Ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Ge.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Ge.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyLarge_Notification";
	}
}
class Oe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Oe.prototype.numbers) {
			me.Sg(Oe.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Oe.sm_m ||= {
			proto: Oe,
			fields: {
				numbers: {
					n: 1,
					r: true,
					q: true,
					br: me.qM.readInt32,
					pbr: me.qM.readPackedInt32,
					bw: me.gp.writeRepeatedInt32,
				},
			},
		};
		return Oe.sm_m;
	}
	static MBF() {
		Oe.sm_mbf ||= me.w0(Oe.M());
		return Oe.sm_mbf;
	}
	toObject(e = false) {
		return Oe.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Oe.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Oe();
		return Oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidationClient_AddNumbers_Request";
	}
}
class Pe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pe.prototype.accumulated) {
			me.Sg(Pe.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pe.sm_m ||= {
			proto: Pe,
			fields: {
				accumulated: {
					n: 1,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
			},
		};
		return Pe.sm_m;
	}
	static MBF() {
		Pe.sm_mbf ||= me.w0(Pe.M());
		return Pe.sm_mbf;
	}
	toObject(e = false) {
		return Pe.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Pe.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Pe();
		return Pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidationClient_AddNumbers_Response";
	}
}
let Le;
let ze;
((e) => {
	e.AppendToStringHandler = {
		name: "TransportValidation.AppendToString#1",
		request: Ae,
		response: pe,
	};
	e.AppendToString = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportValidation.AppendToString#1", I8(Ae, e), pe, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgAppendToString = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportValidation.AppendToString#1", I8(Ae, e), pe, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.AddNumbersHandler = {
		name: "TransportValidation.AddNumbers#1",
		request: Se,
		response: we,
	};
	e.AddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportValidation.AddNumbers#1", I8(Se, e), we, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgAddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportValidation.AddNumbers#1", I8(Se, e), we, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.AddNumbersStaticHandler = {
		name: "TransportValidation.AddNumbersStatic#1",
		request: Se,
		response: we,
	};
	e.AddNumbersStatic = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AddNumbersStatic#1",
				I8(Se, e),
				we,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgAddNumbersStatic = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AddNumbersStatic#1",
				I8(Se, e),
				we,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyTextHandler = {
		name: "TransportValidation.NotifyText#1",
		request: ge,
	};
	e.RegisterForNotifyText = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyTextHandler, t);
		}
	};
	e.NotifyText = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification("TransportValidation.NotifyText#1", I8(ge, e), {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgNotifyText = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification("TransportValidation.NotifyText#1", I8(ge, e), {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.NotifyNumberHandler = {
		name: "TransportValidation.NotifyNumber#1",
		request: he,
	};
	e.RegisterForNotifyNumber = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyNumberHandler, t);
		}
	};
	e.NotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyNumber#1",
				I8(he, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyNumber#1",
				I8(he, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetLastNotifyNumberHandler = {
		name: "TransportValidation.GetLastNotifyNumber#1",
		request: Ce,
		response: _e,
	};
	e.GetLastNotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLastNotifyNumber#1",
				I8(Ce, e),
				_e,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetLastNotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLastNotifyNumber#1",
				I8(Ce, e),
				_e,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifySyntheticEventHandler = {
		name: "TransportValidation.NotifySyntheticEvent#1",
		request: ye,
	};
	e.RegisterForNotifySyntheticEvent = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifySyntheticEventHandler,
				t,
			);
		}
	};
	e.NotifySyntheticEvent = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifySyntheticEvent#1",
				I8(ye, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifySyntheticEvent = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifySyntheticEvent#1",
				I8(ye, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.TriggerSyntheticEventsHandler = {
		name: "TransportValidation.TriggerSyntheticEvents#1",
		request: fe,
		response: be,
	};
	e.TriggerSyntheticEvents = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.TriggerSyntheticEvents#1",
				I8(fe, e),
				be,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgTriggerSyntheticEvents = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.TriggerSyntheticEvents#1",
				I8(fe, e),
				be,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.CountOrderedBytesHandler = {
		name: "TransportValidation.CountOrderedBytes#1",
		request: Be,
		response: ve,
	};
	e.CountOrderedBytes = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.CountOrderedBytes#1",
				I8(Be, e),
				ve,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgCountOrderedBytes = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.CountOrderedBytes#1",
				I8(Be, e),
				ve,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.ThreadedCountHandler = {
		name: "TransportValidation.ThreadedCount#1",
		request: Ie,
		response: Ee,
	};
	e.ThreadedCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportValidation.ThreadedCount#1", I8(Ie, e), Ee, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgThreadedCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportValidation.ThreadedCount#1", I8(Ie, e), Ee, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.NotifyCountHandler = {
		name: "TransportValidation.NotifyCount#1",
		request: Me,
	};
	e.RegisterForNotifyCount = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyCountHandler, t);
		}
	};
	e.NotifyCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyCount#1",
				I8(Me, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyCount#1",
				I8(Me, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.RequestInvalidBoolHandler = {
		name: "TransportValidation.RequestInvalidBool#1",
		request: Te,
		response: Re,
	};
	e.RequestInvalidBool = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestInvalidBool#1",
				I8(Te, e),
				Re,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgRequestInvalidBool = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestInvalidBool#1",
				I8(Te, e),
				Re,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetLargeResponseHandler = {
		name: "TransportValidation.GetLargeResponse#1",
		request: ke,
		response: De,
	};
	e.GetLargeResponse = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLargeResponse#1",
				I8(ke, e),
				De,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetLargeResponse = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLargeResponse#1",
				I8(ke, e),
				De,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.RequestLargeNotificationHandler = {
		name: "TransportValidation.RequestLargeNotification#1",
		request: Ne,
		response: Fe,
	};
	e.RequestLargeNotification = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestLargeNotification#1",
				I8(Ne, e),
				Fe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgRequestLargeNotification = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestLargeNotification#1",
				I8(Ne, e),
				Fe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyLargeHandler = {
		name: "TransportValidation.NotifyLarge#1",
		request: Ge,
	};
	e.RegisterForNotifyLarge = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyLargeHandler, t);
		}
	};
	e.NotifyLarge = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyLarge#1",
				I8(Ge, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyLarge = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyLarge#1",
				I8(Ge, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
})((Le ||= {}));
((e) => {
	e.AddNumbersHandler = {
		name: "TransportValidationClient.AddNumbers#1",
		request: Oe,
		response: Pe,
	};
	e.AddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidationClient.AddNumbers#1",
				I8(Oe, e),
				Pe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgAddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidationClient.AddNumbers#1",
				I8(Oe, e),
				Pe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
})((ze ||= {}));
class Ue extends le {
	async Test_CallMethod() {
		const e = await Le.AppendToString({
			append_strings: ["The ", "most ", "important ", "words"],
		});
		this.AssertEq(1, e.GetEResult(), "eresult");
		this.AssertEq(
			"The most important words",
			e.Body().combined_text(),
			"combined_text",
		);
	}
	async Test_CallMethodClient() {
		const e = await ze.AddNumbers({
			numbers: [1, 2, 3, 5, 7, 11, 13],
		});
		this.AssertEq(1, e.GetEResult(), "eresult");
		this.AssertEq(42, e.Body().accumulated(), "accumulated");
	}
	async Test_CallMethodClientSimple() {
		const e = await ze.AddNumbers({
			numbers: [2, 3],
		});
		this.AssertEq(1, e.GetEResult(), "eresult");
		this.AssertEq(5, e.Body().accumulated(), "accumulated");
	}
	async Test_CallMethodSimple() {
		const e = await Le.AddNumbersStatic({
			numbers: [2, 3],
		});
		this.AssertEq(5, e.Body().accumulated(), "accumulated");
	}
	async Test_CallMethodBoundSimple() {
		const e = await Le.AddNumbers({
			numbers: [2, 3],
		});
		this.AssertEq(5, e.Body().accumulated(), "accumulated");
	}
	async Test_CallMethodSendMsgSimple() {
		const e = oe.w.Init(Ae);
		e.Body().append_strings().push("The ", "most ", "important ", "words");
		const t = await Le.SendMsgAppendToString(e);
		this.AssertEq(1, t.GetEResult(), "eresult");
		this.AssertEq(
			"The most important words",
			t.Body().combined_text(),
			"combined_text",
		);
	}
	async Test_CallMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI steamui transport latency",
			5000,
			this.Test_CallMethodSimple,
		);
		this.AssertGt(2, e.nAvgMs, "nAvgMs");
	}
	async Test_CallMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI steamui transport throughput",
			10000,
			this.Test_CallMethodSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}
	async Test_CallBoundMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI steamui+bind transport latency",
			5000,
			this.Test_CallMethodBoundSimple,
		);
		this.AssertGt(2, e.nAvgMs, "nAvgMs");
	}
	async Test_CallBoundMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI steamui+bind transport throughput",
			10000,
			this.Test_CallMethodBoundSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}
	async Test_CallSendMsgMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI steamui+sendmsg transport latency",
			5000,
			this.Test_CallMethodSendMsgSimple,
		);
		this.AssertGt(2, e.nAvgMs, "nAvgMs");
	}
	async Test_CallSendMsgMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI steamui+sendmsg transport throughput",
			10000,
			this.Test_CallMethodSendMsgSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}
	async Test_CallClientMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI client transport latency",
			100,
			this.Test_CallMethodClientSimple,
		);
		this.AssertGt(60, e.nAvgMs, "nAvgMs");
	}
	async Test_CallClientMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI client transport throughput",
			10000,
			this.Test_CallMethodClientSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}
	async Test_SendNotification() {
		const e = Le.NotifyText({
			text: "Hello from WebUI",
		});
		this.AssertEq(true, e, "bResult");
	}
	async Test_SendNumberNotification() {
		const e = Le.NotifyNumber({
			number: 42,
		});
		this.AssertEq(true, e, "bResult");
		const t = await Le.GetLastNotifyNumber({});
		this.AssertEq(1, t.GetEResult(), "eresult");
		this.AssertEq(42, t.Body().last_notify_number(), "last_notify_number");
	}
	m_nSyntheticEventReceiveCount = 0;
	OnSyntheticEvent(e) {
		this.m_nSyntheticEventReceiveCount++;
		return 1;
	}
	async Test_ClientToJSNotification() {
		const e = Le.RegisterForNotifySyntheticEvent(this.OnSyntheticEvent);
		this.m_nSyntheticEventReceiveCount = 0;
		const t = await Le.TriggerSyntheticEvents({
			count: 10,
		});
		this.AssertEq(1, t.GetEResult(), "eresult");
		this.AssertEq(10, this.m_nSyntheticEventReceiveCount, "event count");
		e.unregister();
	}
	m_nLastCount = 0;
	m_bCountFail = false;
	OnCountEvent(e) {
		const t = e.Body().num();
		if (this.m_nLastCount + 1 != t) {
			this.m_bCountFail = true;
		}
		this.m_nLastCount = t;
		return 1;
	}
	async Test_ClientToJSThreadedNotification() {
		const e = Le.RegisterForNotifyCount(this.OnCountEvent);
		this.m_bCountFail = false;
		this.m_nLastCount = 79;
		const t = await Le.ThreadedCount({
			start_num: 80,
			end_num: 100,
		});
		this.AssertEq(1, t.GetEResult(), "eresult");
		this.AssertEq(this.m_bCountFail, false, "count fail");
		e.unregister();
	}
	async Test_TransportError() {
		const e = oe.w.Init(Ae);
		const t = await xe.N.SendMsg("Test_TransportError.InvalidService", e, pe, {
			ePrivilege: 1,
			eClientExecutionSite: 1,
		});
		this.AssertNe(1, t.Hdr().transport_error(), "transport error");
		this.AssertNe(1, t.GetEResult(), "eresult");
	}
	async SendBinaryMessage(e) {
		let t = new Uint8Array(e);
		for (let e = 0; e < t.length; e++) {
			t[e] = e % 256;
		}
		return await Le.CountOrderedBytes({
			ordered_bytes: t,
		});
	}
	async Test_BinaryData() {
		const e = await this.SendBinaryMessage(32);
		this.AssertEq(1, e.GetEResult(), "eresult");
		this.AssertEq(32, e.Body().byte_count(), "byte_count");
	}
	async Test_LargeRequest() {
		const e = await this.SendBinaryMessage(
			xe.N.TEST_GetMaximumMsgBodySizeBytes(),
		);
		this.AssertEq(1, e.GetEResult(), "large message failed to send");
		const t = await this.SendBinaryMessage(xe.N.GetMaximumMsgSizeBytes() + 1);
		this.AssertEq(
			2,
			t.GetEResult(),
			"over-size-limit message must fail to send",
		);
		const r = await this.SendBinaryMessage(
			xe.N.TEST_GetExcessivelyLargeBodySize(),
		);
		this.AssertEq(2, r.GetEResult(), "disconnect message must fail to send");
	}
	async Test_LargeResponse() {
		const e = xe.N.TEST_GetMaximumMsgBodySizeBytes();
		const t = await Le.GetLargeResponse({
			data_size: e,
		});
		this.AssertEq(1, t.GetEResult(), "unexpected eresult");
		const r = t.Body().toObject().data.byteLength;
		this.AssertEq(e, r, "unexpected size");
	}
	async Test_OverLimitResponse() {
		const e = xe.N.TEST_GetExcessivelyLargeBodySize();
		const t = await Le.GetLargeResponse({
			data_size: e,
		});
		this.AssertEq(2, t.GetEResult(), "unexpected eresult");
	}
	m_nLastLargeNotificationSize = 0;
	OnLargeNotification(e) {
		this.m_nLastLargeNotificationSize = e.Body().toObject().data.byteLength;
		return 1;
	}
	async Test_LargeNotification() {
		const e = Le.RegisterForNotifyLarge(this.OnLargeNotification);
		const t = xe.N.TEST_GetMaximumMsgBodySizeBytes();
		const r = await Le.RequestLargeNotification({
			data_size: t,
		});
		this.AssertEq(1, r.GetEResult(), "unexpected eresult");
		this.AssertEq(t, this.m_nLastLargeNotificationSize, "unexpected size");
		e.unregister();
	}
	async Test_OverLimitNotification() {
		const e = xe.N.TEST_GetExcessivelyLargeBodySize();
		const t = await Le.RequestLargeNotification({
			data_size: e,
		});
		this.AssertEq(2, t.GetEResult(), "unexpected eresult");
	}
	async Test_InvalidBool() {
		const e = await Le.RequestInvalidBool({});
		this.AssertEq(1, e.GetEResult(), "eresult");
		const t = e.Body().toObject();
		this.AssertEq(1, t.before, "before");
		if (t.after !== undefined) {
			this.AssertEq(3, t.after, "after set");
		} else {
			this.AssertEq(undefined, t.after, "after undefined");
		}
		if (e.Body().output() === true) {
			this.AssertEq(true, e.Body().output(), "check output true");
		} else {
			this.AssertEq(undefined, e.Body().output(), "check output undefined");
		}
	}
	GetName() {
		return "WebUITransportValidation";
	}
	GetTests() {
		return [
			{
				fnRunTest: this.Test_CallMethod,
			},
			{
				fnRunTest: this.Test_CallMethodClient,
			},
			{
				fnRunTest: this.Test_CallMethodSimple,
			},
			{
				fnRunTest: this.Test_CallMethodBoundSimple,
			},
			{
				fnRunTest: this.Test_CallMethodSendMsgSimple,
			},
			{
				fnRunTest: this.Test_InvalidBool,
			},
			{
				fnRunTest: this.Test_SendNotification,
			},
			{
				fnRunTest: this.Test_SendNumberNotification,
			},
			{
				fnRunTest: this.Test_ClientToJSNotification,
			},
			{
				fnRunTest: this.Test_ClientToJSThreadedNotification,
			},
			{
				fnRunTest: this.Test_CallMethodLatency,
			},
			{
				fnRunTest: this.Test_CallMethodThroughput,
			},
			{
				fnRunTest: this.Test_CallBoundMethodLatency,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallBoundMethodThroughput,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallSendMsgMethodLatency,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallSendMsgMethodThroughput,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallClientMethodLatency,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallClientMethodThroughput,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_TransportError,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_BinaryData,
			},
			{
				fnRunTest: this.Test_LargeRequest,
			},
			{
				fnRunTest: this.Test_LargeResponse,
			},
			{
				fnRunTest: this.Test_OverLimitResponse,
			},
			{
				fnRunTest: this.Test_LargeNotification,
			},
			{
				fnRunTest: this.Test_OverLimitNotification,
			},
		];
	}
}
Cg([se.oI], Ue.prototype, "Test_CallMethod", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodClient", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodClientSimple", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodSimple", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodBoundSimple", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodSendMsgSimple", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodLatency", null);
Cg([se.oI], Ue.prototype, "Test_CallMethodThroughput", null);
Cg([se.oI], Ue.prototype, "Test_CallBoundMethodLatency", null);
Cg([se.oI], Ue.prototype, "Test_CallBoundMethodThroughput", null);
Cg([se.oI], Ue.prototype, "Test_CallSendMsgMethodLatency", null);
Cg([se.oI], Ue.prototype, "Test_CallSendMsgMethodThroughput", null);
Cg([se.oI], Ue.prototype, "Test_CallClientMethodLatency", null);
Cg([se.oI], Ue.prototype, "Test_CallClientMethodThroughput", null);
Cg([se.oI], Ue.prototype, "Test_SendNotification", null);
Cg([se.oI], Ue.prototype, "Test_SendNumberNotification", null);
Cg([se.oI], Ue.prototype, "OnSyntheticEvent", null);
Cg([se.oI], Ue.prototype, "Test_ClientToJSNotification", null);
Cg([se.oI], Ue.prototype, "OnCountEvent", null);
Cg([se.oI], Ue.prototype, "Test_ClientToJSThreadedNotification", null);
Cg([se.oI], Ue.prototype, "Test_TransportError", null);
Cg([se.oI], Ue.prototype, "Test_BinaryData", null);
Cg([se.oI], Ue.prototype, "Test_LargeRequest", null);
Cg([se.oI], Ue.prototype, "Test_LargeResponse", null);
Cg([se.oI], Ue.prototype, "Test_OverLimitResponse", null);
Cg([se.oI], Ue.prototype, "OnLargeNotification", null);
Cg([se.oI], Ue.prototype, "Test_LargeNotification", null);
Cg([se.oI], Ue.prototype, "Test_OverLimitNotification", null);
Cg([se.oI], Ue.prototype, "Test_InvalidBool", null);
class We {
	static s_Singleton = null;
	static Get() {
		if (We.s_Singleton == null) {
			We.s_Singleton = new We();
		}
		return We.s_Singleton;
	}
	rTestSuites = [];
	constructor() {}
	async Init() {
		0;
	}
	RegisterTestSuite(e) {
		this.rTestSuites.push(e);
	}
	async RunTests(e = {}) {
		e = {
			bFullTestPlan: false,
			bRunInParallel: false,
			...e,
		};
		let t = [];
		let r = [];
		for (const n of this.rTestSuites) {
			console.log(`Running test suite: ${n.GetName()}`);
			for (const i of n.GetTests()) {
				if (!e.bFullTestPlan && i.bFullOnly === true) {
					continue;
				}
				const n = this.RunTest(i, t);
				if (e.bRunInParallel) {
					r.push(n);
				} else {
					await n;
				}
			}
		}
		await Promise.all(r);
		if (t.length > 0) {
			console.error(`Failed test count: ${t.length}`);
			for (const e of t) {
				console.error(`    ${e.fnRunTest.name}`);
			}
		} else {
			console.log("All tests passed");
		}
	}
	async RunTest(e, t) {
		try {
			console.log(`    Running Test: ${this.GetTestName(e)}`);
			await e.fnRunTest();
			return true;
		} catch (r) {
			console.error(`    Test Failed: ${this.GetTestName(e)}: ${r.message}`);
			t.push(e);
			return false;
		}
	}
	GetTestName(e) {
		return e.fnRunTest.name.replace("bound Test_", "").trim();
	}
}
const Ke = Ye;
class rt {
	m_summary;
	m_mapStoredDrafts;
	m_mapLocalUpdates = new Map();
	constructor(e, t) {
		Gn(this);
		this.m_summary = e;
		this.m_mapStoredDrafts = t;
		this.m_mapLocalUpdates = new Map();
		for (let e = 0; e < 31; e++) {
			this.m_mapLocalUpdates.set(e, {});
		}
	}
	BNeedsSaving(e) {
		if (e !== undefined) {
			const t = this.m_mapLocalUpdates.get(e);
			return !!t.strTitle || !!t.strContent;
		}
		return Array.from(this.m_mapLocalUpdates.values()).some(
			(e) => !!e.strTitle || !!e.strContent,
		);
	}
	async SaveDrafts() {
		w_1(
			Boolean(this.m_summary?.faq_id),
			"Attempting to save when we lack a FaqID in the summary object",
		);
		let e = 1;
		let t = new Array();
		for (let r = 0; r < 31; ++r) {
			if (
				(this.m_mapLocalUpdates.get(r).strTitle &&
					this.m_mapLocalUpdates.get(r).strTitle !==
						this.m_mapStoredDrafts.get(r)?.title) ||
				(this.m_mapLocalUpdates.get(r).strContent &&
					this.m_mapLocalUpdates.get(r).strContent !==
						this.m_mapStoredDrafts.get(r)?.content)
			) {
				const n = this.GetDraftTitle(r);
				const i = this.GetDraftContent(r);
				const a = xt.Get().UpdateDraft(this.m_summary?.faq_id, r, n, i);
				a.then((t) => {
					if (t.eResult == 1) {
						h5(() => {
							if (!this.m_mapStoredDrafts.has(r)) {
								this.m_mapStoredDrafts.set(r, {});
							}
							this.m_mapStoredDrafts.get(r).title = n;
							this.m_mapStoredDrafts.get(r).content = i;
							this.m_mapStoredDrafts.get(r).timestamp = t.rtUpdateTime;
							this.m_mapStoredDrafts.get(r).author_account_id =
								f.iA.accountid.toString();
							this.m_mapLocalUpdates.get(r).strTitle = null;
							this.m_mapLocalUpdates.get(r).strContent = null;
							let e = false;
							this.m_summary.per_language_info.forEach((n) => {
								if (r == n.language) {
									e = true;
									n.last_update_timestamp = Math.max(
										n.last_update_timestamp,
										t.rtUpdateTime,
									);
								}
							});
							if (!e) {
								this.m_summary.per_language_info.push({
									language: r,
									last_update_timestamp: t.rtUpdateTime,
								});
							}
						});
					} else if (e == 1) {
						console.error(
							`FAQModel.SaveDraft: Response not ok ${t.eResult}`,
							t,
						);
						e = t.eResult;
					}
				}).catch((t) => {
					console.error(`FAQModel.SaveDrafts: Hit error ${H_1(t).strErrorMsg}`);
					if (e == 1) {
						e = 2;
					}
				});
				t.push(a);
			}
		}
		await Promise.all(t);
		return e;
	}
	GetFAQInternalName() {
		return this.m_summary?.internal_name;
	}
	GetDraftTitle(e) {
		return (
			this.m_mapLocalUpdates.get(e).strTitle ??
			this.m_mapStoredDrafts.get(e)?.title
		);
	}
	GetDraftContent(e) {
		return (
			this.m_mapLocalUpdates.get(e).strContent ??
			this.m_mapStoredDrafts.get(e)?.content
		);
	}
	GetDraftTitleWithFallback(e, t = Je.TU.k_ESteamRealmGlobal) {
		const r = t == Je.TU.k_ESteamRealmChina ? 6 : 0;
		return (
			this.m_mapLocalUpdates.get(e).strTitle ??
			this.m_mapLocalUpdates.get(r).strTitle ??
			this.m_mapStoredDrafts.get(e)?.title ??
			this.m_mapStoredDrafts.get(r)?.title ??
			""
		);
	}
	GetDraftContentWithFallback(e, t = Je.TU.k_ESteamRealmGlobal) {
		const r = t == Je.TU.k_ESteamRealmChina ? 6 : 0;
		return (
			this.m_mapLocalUpdates.get(e).strContent ??
			this.m_mapLocalUpdates.get(r).strContent ??
			this.m_mapStoredDrafts.get(e)?.content ??
			this.m_mapStoredDrafts.get(r)?.content ??
			""
		);
	}
	GetLastSavedDraftVersion(e) {
		return this.m_mapStoredDrafts.get(e);
	}
	BHasSomeTextForLanguage(e) {
		return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
	}
	SetDraftTitle(e, t) {
		if (t === this.m_mapStoredDrafts.get(e)?.title) {
			this.m_mapLocalUpdates.get(e).strTitle = null;
		} else {
			this.m_mapLocalUpdates.get(e).strTitle = t;
		}
	}
	SetDraftContent(e, t) {
		if (t === this.m_mapStoredDrafts.get(e)?.content) {
			this.m_mapLocalUpdates.get(e).strContent = null;
		} else {
			this.m_mapLocalUpdates.get(e).strContent = t;
		}
	}
	GetIncludedRealmList() {
		const e = new Array();
		if (this.m_summary.visible_in_global_realm) {
			e.push(Je.TU.k_ESteamRealmGlobal);
		}
		if (this.m_summary.visible_in_global_realm) {
			e.push(Je.TU.k_ESteamRealmChina);
		}
		if (e.length == 0) {
			e.push(Je.TU.k_ESteamRealmGlobal);
		}
		w_1(
			e.length > 0,
			`FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
		);
		return e;
	}
	BHasPublished() {
		return Boolean(
			this.m_summary.per_language_info.some((e) => !!e.last_publish_timestamp),
		);
	}
	GetLastTimeLanguageUpdated(e) {
		return this.GetLastSavedDraftVersion(e)?.timestamp ?? 0;
	}
	GetFAQID() {
		return this.m_summary.faq_id;
	}
	GetSummary() {
		return this.m_summary;
	}
}
Cg([ie.sH], rt.prototype, "m_mapLocalUpdates", undefined);
Cg([et.o], rt.prototype, "BHasSomeTextForLanguage", null);
Cg([et.o], rt.prototype, "GetLastTimeLanguageUpdated", null);
class at extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!at.prototype.faq_id) {
			me.Sg(at.M());
		}
		Message.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		at.sm_m ||= {
			proto: at,
			fields: {
				faq_id: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				internal_name: {
					n: 2,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				visible_in_global_realm: {
					n: 3,
					br: me.qM.readBool,
					bw: me.gp.writeBool,
				},
				visible_in_china_realm: {
					n: 4,
					br: me.qM.readBool,
					bw: me.gp.writeBool,
				},
				json_data: {
					n: 5,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				per_language_info: {
					n: 6,
					c: st,
					r: true,
					q: true,
				},
				url_code: {
					n: 7,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return at.sm_m;
	}
	static MBF() {
		at.sm_mbf ||= me.w0(at.M());
		return at.sm_mbf;
	}
	toObject(e = false) {
		return at.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(at.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(at.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new at();
		return at.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(at.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		at.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(at.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		at.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQSummary";
	}
}
class st extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!st.prototype.language) {
			me.Sg(st.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		st.sm_m ||= {
			proto: st,
			fields: {
				language: {
					n: 1,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
				last_update_timestamp: {
					n: 2,
					br: me.qM.readFixed32,
					bw: me.gp.writeFixed32,
				},
				last_publish_timestamp: {
					n: 3,
					br: me.qM.readFixed32,
					bw: me.gp.writeFixed32,
				},
			},
		};
		return st.sm_m;
	}
	static MBF() {
		st.sm_mbf ||= me.w0(st.M());
		return st.sm_mbf;
	}
	toObject(e = false) {
		return st.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(st.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(st.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new st();
		return st.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(st.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		st.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(st.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		st.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQSummary_CLanguageInfo";
	}
}
class ot extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ot.prototype.faq_id) {
			me.Sg(ot.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ot.sm_m ||= {
			proto: ot,
			fields: {
				faq_id: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				language: {
					n: 2,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
				version: {
					n: 3,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				content: {
					n: 4,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				title: {
					n: 5,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				timestamp: {
					n: 6,
					br: me.qM.readFixed32,
					bw: me.gp.writeFixed32,
				},
				author_account_id: {
					n: 7,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				url_code: {
					n: 8,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return ot.sm_m;
	}
	static MBF() {
		ot.sm_mbf ||= me.w0(ot.M());
		return ot.sm_mbf;
	}
	toObject(e = false) {
		return ot.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ot.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ot.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ot();
		return ot.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ot.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ot.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ot.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ot.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQContent";
	}
}
class lt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lt.prototype.steamid) {
			me.Sg(lt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lt.sm_m ||= {
			proto: lt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				internal_name: {
					n: 2,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				json_data: {
					n: 3,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return lt.sm_m;
	}
	static MBF() {
		lt.sm_mbf ||= me.w0(lt.M());
		return lt.sm_mbf;
	}
	toObject(e = false) {
		return lt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(lt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(lt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new lt();
		return lt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(lt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		lt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(lt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		lt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Create_Request";
	}
}
class ct extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ct.prototype.faq_id) {
			me.Sg(ct.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ct.sm_m ||= {
			proto: ct,
			fields: {
				faq_id: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
			},
		};
		return ct.sm_m;
	}
	static MBF() {
		ct.sm_mbf ||= me.w0(ct.M());
		return ct.sm_mbf;
	}
	toObject(e = false) {
		return ct.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ct.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ct.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ct();
		return ct.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ct.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ct.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ct.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ct.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Create_Response";
	}
}
class mt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!mt.prototype.steamid) {
			me.Sg(mt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		mt.sm_m ||= {
			proto: mt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
			},
		};
		return mt.sm_m;
	}
	static MBF() {
		mt.sm_mbf ||= me.w0(mt.M());
		return mt.sm_mbf;
	}
	toObject(e = false) {
		return mt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(mt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(mt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new mt();
		return mt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(mt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		mt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(mt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		mt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Delete_Request";
	}
}
class ut extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ut.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new ut();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ut();
		return ut.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ut.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ut.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Delete_Response";
	}
}
class dt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dt.prototype.steamid) {
			me.Sg(dt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dt.sm_m ||= {
			proto: dt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				internal_name: {
					n: 3,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return dt.sm_m;
	}
	static MBF() {
		dt.sm_mbf ||= me.w0(dt.M());
		return dt.sm_mbf;
	}
	toObject(e = false) {
		return dt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(dt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(dt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new dt();
		return dt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(dt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		dt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(dt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		dt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateInternalName_Request";
	}
}
class At extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return At.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new At();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new At();
		return At.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		At.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		At.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateInternalName_Response";
	}
}
class pt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pt.prototype.steamid) {
			me.Sg(pt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pt.sm_m ||= {
			proto: pt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				json_data: {
					n: 3,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return pt.sm_m;
	}
	static MBF() {
		pt.sm_mbf ||= me.w0(pt.M());
		return pt.sm_mbf;
	}
	toObject(e = false) {
		return pt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(pt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(pt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new pt();
		return pt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(pt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		pt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(pt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		pt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateJsonData_Request";
	}
}
class gt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return gt.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new gt();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new gt();
		return gt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		gt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		gt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateJsonData_Response";
	}
}
class ht extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ht.prototype.steamid) {
			me.Sg(ht.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ht.sm_m ||= {
			proto: ht,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				visible_in_global_realm: {
					n: 3,
					br: me.qM.readBool,
					bw: me.gp.writeBool,
				},
				visible_in_china_realm: {
					n: 4,
					br: me.qM.readBool,
					bw: me.gp.writeBool,
				},
			},
		};
		return ht.sm_m;
	}
	static MBF() {
		ht.sm_mbf ||= me.w0(ht.M());
		return ht.sm_mbf;
	}
	toObject(e = false) {
		return ht.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ht.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ht.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ht();
		return ht.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ht.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ht.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ht.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ht.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SetVisibility_Request";
	}
}
class Ct extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ct.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Ct();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ct();
		return Ct.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ct.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ct.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SetVisibility_Response";
	}
}
class _t extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_t.prototype.steamid) {
			me.Sg(_t.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_t.sm_m ||= {
			proto: _t,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				language: {
					n: 3,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
				content: {
					n: 4,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				title: {
					n: 5,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return _t.sm_m;
	}
	static MBF() {
		_t.sm_mbf ||= me.w0(_t.M());
		return _t.sm_mbf;
	}
	toObject(e = false) {
		return _t.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(_t.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(_t.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new _t();
		return _t.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(_t.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		_t.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(_t.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		_t.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateDraft_Request";
	}
}
class ft extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ft.prototype.last_update_timestamp) {
			me.Sg(ft.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ft.sm_m ||= {
			proto: ft,
			fields: {
				last_update_timestamp: {
					n: 1,
					br: me.qM.readFixed32,
					bw: me.gp.writeFixed32,
				},
			},
		};
		return ft.sm_m;
	}
	static MBF() {
		ft.sm_mbf ||= me.w0(ft.M());
		return ft.sm_mbf;
	}
	toObject(e = false) {
		return ft.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(ft.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(ft.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new ft();
		return ft.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(ft.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		ft.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(ft.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		ft.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateDraft_Response";
	}
}
class bt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bt.prototype.steamid) {
			me.Sg(bt.M());
		}
		Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bt.sm_m ||= {
			proto: bt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				language: {
					n: 3,
					r: true,
					q: true,
					br: me.qM.readUint32,
					pbr: me.qM.readPackedUint32,
					bw: me.gp.writeRepeatedUint32,
				},
			},
		};
		return bt.sm_m;
	}
	static MBF() {
		bt.sm_mbf ||= me.w0(bt.M());
		return bt.sm_mbf;
	}
	toObject(e = false) {
		return bt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(bt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(bt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new bt();
		return bt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(bt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		bt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(bt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		bt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PublishDraft_Request";
	}
}
class yt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!yt.prototype.last_publish_timestamp) {
			me.Sg(yt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		yt.sm_m ||= {
			proto: yt,
			fields: {
				last_publish_timestamp: {
					n: 1,
					br: me.qM.readFixed32,
					bw: me.gp.writeFixed32,
				},
			},
		};
		return yt.sm_m;
	}
	static MBF() {
		yt.sm_mbf ||= me.w0(yt.M());
		return yt.sm_mbf;
	}
	toObject(e = false) {
		return yt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(yt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(yt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new yt();
		return yt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(yt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		yt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(yt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		yt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PublishDraft_Response";
	}
}
class St extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!St.prototype.steamid) {
			me.Sg(St.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		St.sm_m ||= {
			proto: St,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				language: {
					n: 3,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
			},
		};
		return St.sm_m;
	}
	static MBF() {
		St.sm_mbf ||= me.w0(St.M());
		return St.sm_mbf;
	}
	toObject(e = false) {
		return St.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(St.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(St.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new St();
		return St.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(St.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		St.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(St.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		St.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PreviewDraft_Request";
	}
}
class wt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!wt.prototype.faq) {
			me.Sg(wt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		wt.sm_m ||= {
			proto: wt,
			fields: {
				faq: {
					n: 1,
					c: ot,
				},
			},
		};
		return wt.sm_m;
	}
	static MBF() {
		wt.sm_mbf ||= me.w0(wt.M());
		return wt.sm_mbf;
	}
	toObject(e = false) {
		return wt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(wt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(wt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new wt();
		return wt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(wt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		wt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(wt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		wt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PreviewDraft_Response";
	}
}
class Bt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Bt.prototype.faq_id) {
			me.Sg(Bt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Bt.sm_m ||= {
			proto: Bt,
			fields: {
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				language: {
					n: 3,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
			},
		};
		return Bt.sm_m;
	}
	static MBF() {
		Bt.sm_mbf ||= me.w0(Bt.M());
		return Bt.sm_mbf;
	}
	toObject(e = false) {
		return Bt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Bt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Bt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Bt();
		return Bt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Bt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Bt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Bt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Bt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQ_Request";
	}
}
class vt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!vt.prototype.faq) {
			me.Sg(vt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		vt.sm_m ||= {
			proto: vt,
			fields: {
				faq: {
					n: 1,
					c: ot,
				},
				faq_exists: {
					n: 2,
					d: false,
					br: me.qM.readBool,
					bw: me.gp.writeBool,
				},
			},
		};
		return vt.sm_m;
	}
	static MBF() {
		vt.sm_mbf ||= me.w0(vt.M());
		return vt.sm_mbf;
	}
	toObject(e = false) {
		return vt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(vt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(vt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new vt();
		return vt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(vt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		vt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(vt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		vt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQ_Response";
	}
}
class It extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!It.prototype.steamid) {
			me.Sg(It.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		It.sm_m ||= {
			proto: It,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				language: {
					n: 3,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
				version: {
					n: 4,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
			},
		};
		return It.sm_m;
	}
	static MBF() {
		It.sm_mbf ||= me.w0(It.M());
		return It.sm_mbf;
	}
	toObject(e = false) {
		return It.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(It.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(It.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new It();
		return It.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(It.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		It.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(It.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		It.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQVersion_Request";
	}
}
class Et extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Et.prototype.faq) {
			me.Sg(Et.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Et.sm_m ||= {
			proto: Et,
			fields: {
				faq: {
					n: 1,
					c: ot,
				},
			},
		};
		return Et.sm_m;
	}
	static MBF() {
		Et.sm_mbf ||= me.w0(Et.M());
		return Et.sm_mbf;
	}
	toObject(e = false) {
		return Et.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Et.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Et.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Et();
		return Et.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Et.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Et.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Et.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Et.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQVersion_Response";
	}
}
class Mt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Mt.prototype.steamid) {
			me.Sg(Mt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Mt.sm_m ||= {
			proto: Mt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
			},
		};
		return Mt.sm_m;
	}
	static MBF() {
		Mt.sm_mbf ||= me.w0(Mt.M());
		return Mt.sm_mbf;
	}
	toObject(e = false) {
		return Mt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Mt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Mt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Mt();
		return Mt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Mt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Mt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Mt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Mt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllDrafts_Request";
	}
}
class Tt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Tt.prototype.summary) {
			me.Sg(Tt.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Tt.sm_m ||= {
			proto: Tt,
			fields: {
				summary: {
					n: 1,
					c: at,
				},
				draft: {
					n: 2,
					c: ot,
					r: true,
					q: true,
				},
			},
		};
		return Tt.sm_m;
	}
	static MBF() {
		Tt.sm_mbf ||= me.w0(Tt.M());
		return Tt.sm_mbf;
	}
	toObject(e = false) {
		return Tt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Tt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Tt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Tt();
		return Tt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Tt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Tt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Tt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Tt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllDrafts_Response";
	}
}
class Rt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Rt.prototype.steamid) {
			me.Sg(Rt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Rt.sm_m ||= {
			proto: Rt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
			},
		};
		return Rt.sm_m;
	}
	static MBF() {
		Rt.sm_mbf ||= me.w0(Rt.M());
		return Rt.sm_mbf;
	}
	toObject(e = false) {
		return Rt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Rt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Rt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Rt();
		return Rt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Rt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Rt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Rt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Rt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllFAQsForClan_Request";
	}
}
class kt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kt.prototype.faq) {
			me.Sg(kt.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kt.sm_m ||= {
			proto: kt,
			fields: {
				faq: {
					n: 1,
					c: at,
					r: true,
					q: true,
				},
			},
		};
		return kt.sm_m;
	}
	static MBF() {
		kt.sm_mbf ||= me.w0(kt.M());
		return kt.sm_mbf;
	}
	toObject(e = false) {
		return kt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(kt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(kt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new kt();
		return kt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(kt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		kt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(kt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		kt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllFAQsForClan_Response";
	}
}
class Dt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Dt.prototype.steamid) {
			me.Sg(Dt.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Dt.sm_m ||= {
			proto: Dt,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
			},
		};
		return Dt.sm_m;
	}
	static MBF() {
		Dt.sm_mbf ||= me.w0(Dt.M());
		return Dt.sm_mbf;
	}
	toObject(e = false) {
		return Dt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Dt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Dt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Dt();
		return Dt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Dt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Dt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Dt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Dt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
	}
}
class Nt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Nt.prototype.faqs) {
			me.Sg(Nt.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Nt.sm_m ||= {
			proto: Nt,
			fields: {
				faqs: {
					n: 1,
					c: ot,
					r: true,
					q: true,
				},
			},
		};
		return Nt.sm_m;
	}
	static MBF() {
		Nt.sm_mbf ||= me.w0(Nt.M());
		return Nt.sm_mbf;
	}
	toObject(e = false) {
		return Nt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Nt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Nt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Nt();
		return Nt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Nt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Nt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Nt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Nt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
	}
}
class Ft extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ft.prototype.steamid) {
			me.Sg(Ft.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ft.sm_m ||= {
			proto: Ft,
			fields: {
				steamid: {
					n: 1,
					br: me.qM.readFixed64String,
					bw: me.gp.writeFixed64String,
				},
			},
		};
		return Ft.sm_m;
	}
	static MBF() {
		Ft.sm_mbf ||= me.w0(Ft.M());
		return Ft.sm_mbf;
	}
	toObject(e = false) {
		return Ft.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Ft.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Ft.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ft();
		return Ft.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Ft.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ft.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Ft.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ft.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_CheckFAQPermissions_Request";
	}
}
class Gt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Gt.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Gt();
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Gt();
		return Gt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Gt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Gt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_CheckFAQPermissions_Response";
	}
}
class Ot extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ot.prototype.search_text) {
			me.Sg(Ot.M());
		}
		Message.initialize(this, e, 0, -1, [2, 5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ot.sm_m ||= {
			proto: Ot,
			fields: {
				search_text: {
					n: 1,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				elanguages: {
					n: 2,
					r: true,
					q: true,
					br: me.qM.readInt32,
					pbr: me.qM.readPackedInt32,
					bw: me.gp.writeRepeatedInt32,
				},
				count: {
					n: 3,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
				cursor: {
					n: 4,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				filter_clanids: {
					n: 5,
					r: true,
					q: true,
					br: me.qM.readUint32,
					pbr: me.qM.readPackedUint32,
					bw: me.gp.writeRepeatedUint32,
				},
			},
		};
		return Ot.sm_m;
	}
	static MBF() {
		Ot.sm_mbf ||= me.w0(Ot.M());
		return Ot.sm_mbf;
	}
	toObject(e = false) {
		return Ot.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Ot.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Ot.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Ot();
		return Ot.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Ot.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Ot.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Ot.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Ot.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SearchFAQs_Request";
	}
}
class Pt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pt.prototype.faqs) {
			me.Sg(Pt.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pt.sm_m ||= {
			proto: Pt,
			fields: {
				faqs: {
					n: 1,
					c: Lt,
					r: true,
					q: true,
				},
				num_total_results: {
					n: 2,
					br: me.qM.readInt32,
					bw: me.gp.writeInt32,
				},
				next_cursor: {
					n: 3,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
			},
		};
		return Pt.sm_m;
	}
	static MBF() {
		Pt.sm_mbf ||= me.w0(Pt.M());
		return Pt.sm_mbf;
	}
	toObject(e = false) {
		return Pt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Pt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Pt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Pt();
		return Pt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Pt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Pt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Pt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Pt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SearchFAQs_Response";
	}
}
class Lt extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Lt.prototype.articleid) {
			me.Sg(Lt.M());
		}
		Message.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Lt.sm_m ||= {
			proto: Lt,
			fields: {
				articleid: {
					n: 1,
					br: me.qM.readUint64String,
					bw: me.gp.writeUint64String,
				},
				name: {
					n: 2,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				content: {
					n: 3,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				clan_accountid: {
					n: 4,
					br: me.qM.readUint32,
					bw: me.gp.writeUint32,
				},
				url_code: {
					n: 5,
					br: me.qM.readString,
					bw: me.gp.writeString,
				},
				localized_names: {
					n: 6,
					r: true,
					q: true,
					br: me.qM.readString,
					bw: me.gp.writeRepeatedString,
				},
			},
		};
		return Lt.sm_m;
	}
	static MBF() {
		Lt.sm_mbf ||= me.w0(Lt.M());
		return Lt.sm_mbf;
	}
	toObject(e = false) {
		return Lt.toObject(e, this);
	}
	static toObject(e, t) {
		return me.BT(Lt.M(), e, t);
	}
	static fromObject(e) {
		return me.Uq(Lt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new ce.BinaryReader(e);
		let r = new Lt();
		return Lt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return me.zj(Lt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new ce.BinaryWriter();
		Lt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		me.i0(Lt.M(), e, t);
	}
	serializeBase64String() {
		const e = new ce.BinaryWriter();
		Lt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
	}
}
let zt;
((e) => {
	e.Create = (e, t) =>
		e.SendMsg("ClanFAQS.Create#1", I8(lt, t), ct, {
			ePrivilege: 1,
		});
	e.Delete = (e, t) =>
		e.SendMsg("ClanFAQS.Delete#1", I8(mt, t), ut, {
			ePrivilege: 1,
		});
	e.UpdateInternalName = (e, t) =>
		e.SendMsg("ClanFAQS.UpdateInternalName#1", I8(dt, t), At, {
			ePrivilege: 1,
		});
	e.UpdateJsonData = (e, t) =>
		e.SendMsg("ClanFAQS.UpdateJsonData#1", I8(pt, t), gt, {
			ePrivilege: 1,
		});
	e.SetVisibility = (e, t) =>
		e.SendMsg("ClanFAQS.SetVisibility#1", I8(ht, t), Ct, {
			ePrivilege: 1,
		});
	e.UpdateDraft = (e, t) =>
		e.SendMsg("ClanFAQS.UpdateDraft#1", I8(_t, t), ft, {
			ePrivilege: 1,
		});
	e.PublishDraft = (e, t) =>
		e.SendMsg("ClanFAQS.PublishDraft#1", I8(bt, t), yt, {
			ePrivilege: 1,
		});
	e.PreviewDraft = (e, t) =>
		e.SendMsg("ClanFAQS.PreviewDraft#1", I8(St, t), wt, {
			ePrivilege: 1,
		});
	e.GetFAQ = (e, t) =>
		e.SendMsg("ClanFAQS.GetFAQ#1", I8(Bt, t), vt, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	e.GetFAQVersion = (e, t) =>
		e.SendMsg("ClanFAQS.GetFAQVersion#1", I8(It, t), Et, {
			ePrivilege: 1,
		});
	e.GetAllDrafts = (e, t) =>
		e.SendMsg("ClanFAQS.GetAllDrafts#1", I8(Mt, t), Tt, {
			ePrivilege: 1,
		});
	e.GetAllFAQsForClan = (e, t) =>
		e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", I8(Rt, t), kt, {
			ePrivilege: 1,
		});
	e.GetAllLatestVersionPublishedFAQS = (e, t) =>
		e.SendMsg("ClanFAQS.GetAllLatestVersionPublishedFAQS#1", I8(Dt, t), Nt, {
			ePrivilege: 1,
		});
	e.CheckFAQPermissions = (e, t) =>
		e.SendMsg("ClanFAQS.CheckFAQPermissions#1", I8(Ft, t), Gt, {
			ePrivilege: 1,
		});
	e.SearchFAQs = (e, t) =>
		e.SendMsg("ClanFAQS.SearchFAQs#1", I8(Ot, t), Pt, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
})((zt ||= {}));
class xt {
	m_mapFAQSummaries = new Map();
	m_mapFAQPublishedContent = new Map();
	m_mapFAQDrafts = new Map();
	m_bHasFAQEdit = false;
	m_steamInterface = null;
	static s_Singleton;
	static Get() {
		xt.s_Singleton ||= new xt();
		return xt.s_Singleton;
	}
	static Init(e) {
		xt.Get().m_steamInterface = e;
	}
	constructor() {
		Gn(this);
		if (f.TS.WEB_UNIVERSE == "dev") {
			window.g_FAQStore = this;
		}
		if (!f.TS.IN_STEAMUI) {
			this.ReadInitialPayload();
			this.SetUpWebAPIInterface();
		}
	}
	SetUpWebAPIInterface() {
		const e = Tc("faqstore", "application_config");
		const t = e?.webapi_token;
		this.m_steamInterface = new nt.D(f.TS.WEBAPI_BASE_URL, t);
	}
	ReadInitialPayload() {
		const e = Tc("faqstore", "application_config");
		if (f.TS.WEB_UNIVERSE == "dev" || f.TS.WEB_UNIVERSE == "beta") {
			console.log("DEV_DEBUG: CFAQStore loading payload: ", e);
		}
		if (this.BIsConfigValid(e)) {
			if (e.faqs) {
				for (const t in e.faqs) {
					const r = e.faqs[t];
					if (r?.faq_id == t && r?.language !== undefined) {
						if (!this.m_mapFAQPublishedContent.has(t)) {
							this.m_mapFAQPublishedContent.set(t, new Map());
						}
						this.m_mapFAQPublishedContent.get(t).set(r.language, r);
					}
				}
			}
			if (e.alldrafts) {
				for (const t in e.alldrafts) {
					const r = e.alldrafts[t];
					if (!r?.summary || !r.draft) {
						continue;
					}
					this.m_mapFAQSummaries.set(t, r.summary);
					const n = new Map();
					for (const e of r.draft) {
						n.set(e.language, e);
					}
					this.m_mapFAQDrafts.set(t, new rt(this.m_mapFAQSummaries.get(t), n));
				}
			}
			if (e.allfaqs) {
				for (const t of e.allfaqs) {
					if (t.faq_id) {
						if (!this.m_mapFAQSummaries.has(t.faq_id)) {
							this.m_mapFAQSummaries.set(t.faq_id, t);
						}
					}
				}
			}
			this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
		} else if (f.TS.WEB_UNIVERSE == "dev") {
			console.error("CFAQStore Invalid payload");
		}
	}
	BIsConfigValid(e) {
		const t = e;
		return (
			(!!t && !!t.faqs && typeof t.faqs == "object") ||
			(!!t.alldrafts && typeof t.alldrafts == "object") ||
			(!!t.allfaqs && !!Array.isArray(t.allfaqs))
		);
	}
	async CreateFAQ(e) {
		const t = oe.w.Init(lt);
		t.Body().set_steamid(f.UF.CLANSTEAMID);
		t.Body().set_internal_name(e);
		let r;
		let n = 2;
		try {
			const i = await zt.Create(this.m_steamInterface.GetServiceTransport(), t);
			n = i.GetEResult();
			if (n == 1) {
				r = i.Body().faq_id();
				const t = {
					faq_id: r,
					internal_name: e,
				};
				this.m_mapFAQSummaries.set(r, t);
			} else {
				console.error("FAQStore.CreateFAQ: Create request failed:", n);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.CreateFAQ: caught error ${t.strErrorMsg}`, t);
		}
		return {
			eResult: n,
			strFaqId: r,
		};
	}
	async UpdateDraft(e, t, r, n) {
		const i = oe.w.Init(_t);
		i.Body().set_steamid(f.UF.CLANSTEAMID);
		i.Body().set_faq_id(e);
		i.Body().set_language(t);
		i.Body().set_content(n);
		i.Body().set_title(r);
		let a = 2;
		let s = 0;
		try {
			const e = await zt.UpdateDraft(
				this.m_steamInterface.GetServiceTransport(),
				i,
			);
			a = e.GetEResult();
			if (a != 1) {
				console.error("FAQStore.UpdateDraft request failed:", a);
			} else {
				s = e.Body().last_update_timestamp();
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.UpdateDraft: caught error ${t.strErrorMsg}`, t);
		}
		return {
			eResult: a,
			rtUpdateTime: s,
		};
	}
	async UpdateJsonData(e, t) {
		const r = JSON.stringify(t);
		const n = oe.w.Init(pt);
		n.Body().set_steamid(f.UF.CLANSTEAMID);
		n.Body().set_faq_id(e);
		n.Body().set_json_data(r);
		let i = 2;
		try {
			i = (
				await zt.UpdateJsonData(this.m_steamInterface.GetServiceTransport(), n)
			).GetEResult();
			if (i != 1) {
				console.error("FAQStore.UpdateJsonData request failed:", i);
			} else {
				this.m_mapFAQSummaries.get(e).json_data = r;
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FAQStore.UpdateJsonData: caught error ${t.strErrorMsg}`,
				t,
			);
		}
		return i;
	}
	async GetFAQVersion(e, t, r) {
		const n = oe.w.Init(It);
		n.Body().set_steamid(f.UF.CLANSTEAMID);
		n.Body().set_faq_id(e);
		n.Body().set_version(t);
		n.Body().set_language(r);
		try {
			const e = await zt.GetFAQVersion(
				this.m_steamInterface.GetServiceTransport(),
				n,
			);
			const t = e.GetEResult();
			if (t == 1) {
				return e.Body().faq().toObject();
			}
			console.error("FAQStore.GetFAQVersion request failed:", t);
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.GetFAQVersion: caught error ${t.strErrorMsg}`, t);
		}
		return null;
	}
	async DeleteFAQ(e) {
		const t = oe.w.Init(mt);
		t.Body().set_steamid(f.UF.CLANSTEAMID);
		t.Body().set_faq_id(e);
		let r = 2;
		try {
			r = (
				await zt.Delete(this.m_steamInterface.GetServiceTransport(), t)
			).GetEResult();
			if (r != 1) {
				console.error("FAQStore.DeleteFAQ request failed:", r);
			} else {
				this.m_mapFAQDrafts.delete(e);
				this.m_mapFAQPublishedContent.delete(e);
				this.m_mapFAQSummaries.delete(e);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.DeleteFAQ: caught error ${t.strErrorMsg}`, t);
		}
		return r;
	}
	static sm_mapFallbackLanguages = new Map([
		[5, 27],
		[27, 5],
		[29, 6],
	]);
	GetFAQPublishedContent(e, t) {
		const r = this.m_mapFAQPublishedContent.get(e);
		if (!r) {
			return null;
		}
		let n = r.get(t);
		if (!n && xt.sm_mapFallbackLanguages.has(t)) {
			n = r.get(xt.sm_mapFallbackLanguages.get(t));
		}
		if (!n && t != 0 && !Y2()) {
			n = r.get(0);
		}
		return n;
	}
	GetFAQDraftContent(e) {
		return this.m_mapFAQDrafts.get(e);
	}
	GetAllFAQSummaries() {
		return Array.from(this.m_mapFAQSummaries.values());
	}
	GetFAQArticleSummary(e) {
		return this.m_mapFAQSummaries.get(e) || {};
	}
	async LoadFAQDraftContent(e) {
		if (this.m_mapFAQDrafts.has(e)) {
			return this.m_mapFAQDrafts.get(e);
		}
		const t = oe.w.Init(Mt);
		t.Body().set_steamid(f.UF.CLANSTEAMID);
		t.Body().set_faq_id(e);
		let r = 2;
		try {
			const n = await zt.GetAllDrafts(
				this.m_steamInterface.GetServiceTransport(),
				t,
			);
			r = n.GetEResult();
			if (r != 1) {
				console.error("FaqStore.LoadFAQDraftContent request failed:", r);
				return null;
			}
			{
				const t = n.Body().summary().toObject();
				this.m_mapFAQSummaries.set(e, t);
				const r = new Map();
				n.Body()
					.draft()
					.forEach((e) => r.set(e.language(), e.toObject()));
				const i = new rt(this.m_mapFAQSummaries.get(e), r);
				this.m_mapFAQDrafts.set(e, i);
				return i;
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FaqStore.LoadFAQDraftContent: exception ${t.strErrorMsg}`,
				t,
			);
		}
		return null;
	}
	async UpdateVisibility(e, t, r) {
		const n = oe.w.Init(ht);
		n.Body().set_steamid(f.UF.CLANSTEAMID);
		n.Body().set_faq_id(e);
		n.Body().set_visible_in_global_realm(t);
		n.Body().set_visible_in_china_realm(r);
		let i = 2;
		try {
			i = (
				await zt.SetVisibility(this.m_steamInterface.GetServiceTransport(), n)
			).GetEResult();
			if (i === 1) {
				const n = this.m_mapFAQSummaries.get(e);
				if (n) {
					n.visible_in_global_realm = t;
					n.visible_in_china_realm = r;
					this.m_mapFAQSummaries.set(e, n);
				}
			} else {
				console.error(`FaqStore.UpdateVisibility: Failed ${i}`);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FaqStore.UpdateVisibility: exception ${t.strErrorMsg}`, t);
		}
		return i;
	}
	async PublishDraftByLanguage(e, t) {
		if (!t || t.length == 0) {
			return 1;
		}
		const r = oe.w.Init(bt);
		r.Body().set_steamid(f.UF.CLANSTEAMID);
		r.Body().set_faq_id(e);
		t.forEach((e) => r.Body().add_language(e));
		let n = 2;
		try {
			const i = await zt.PublishDraft(
				this.m_steamInterface.GetServiceTransport(),
				r,
			);
			n = i.GetEResult();
			if (n === 1) {
				const r = this.m_mapFAQSummaries.get(e);
				if (r) {
					h5(() => {
						if (!this.m_mapFAQPublishedContent.has(e)) {
							this.m_mapFAQPublishedContent.set(e, new Map());
						}
						r.per_language_info.forEach((r) => {
							const n = r.language;
							if (t.includes(n)) {
								r.last_publish_timestamp = Math.max(
									r.last_publish_timestamp,
									i.Body().last_publish_timestamp(),
								);
								const t = this.m_mapFAQDrafts
									.get(e)
									?.GetLastSavedDraftVersion(n);
								this.m_mapFAQPublishedContent.get(e).set(n, t);
							}
						});
					});
				}
			} else {
				console.error(`FaqStore.PublishDraftByLanguage: Failed ${n}`);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FaqStore.PublishDraftByLanguage: exception ${t.strErrorMsg}`,
				t,
			);
		}
		return n;
	}
	async UpdateInternalName(e, t) {
		const r = oe.w.Init(dt);
		r.Body().set_steamid(f.UF.CLANSTEAMID);
		r.Body().set_faq_id(e);
		r.Body().set_internal_name(t);
		let n = 2;
		try {
			n = (
				await zt.UpdateInternalName(
					this.m_steamInterface.GetServiceTransport(),
					r,
				)
			).GetEResult();
			if (n === 1) {
				h5(() => {
					if (this.m_mapFAQSummaries.get(e)?.internal_name) {
						this.m_mapFAQSummaries.get(e).internal_name = t;
					}
					if (this.m_mapFAQDrafts.get(e)?.GetSummary()?.internal_name) {
						this.m_mapFAQDrafts.get(e).GetSummary().internal_name = t;
					}
				});
			} else {
				console.error(`FaqStore.UpdateInternalName: Failed ${n}`);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FaqStore.UpdateInternalName: exception ${t.strErrorMsg}`,
				t,
			);
		}
		return n;
	}
	GetLoadedDraftObjs() {
		return Array.from(this.m_mapFAQDrafts.values());
	}
	RemoveAllDirtyDrafts() {
		const e = this.GetLoadedDraftObjs()
			?.filter((e) => e.BNeedsSaving())
			?.map((e) => e.GetFAQID());
		e?.forEach((e) => this.m_mapFAQDrafts.delete(e));
	}
	BHasFAQEdit() {
		return this.m_bHasFAQEdit;
	}
	async ExportEnglishDraftToCrowdin(e) {
		const t = `${f.TS.COMMUNITY_BASE_URL}faqs/${
			f.UF.VANITY_ID
		}/ajaxpushtocrowdin/${Ut(e)}`;
		await Ke.get(t);
	}
	async ImportNonEnglishDraftsFromCrowdin(e, t, r) {
		const n = `${f.TS.COMMUNITY_BASE_URL}faqs/${
			f.UF.VANITY_ID
		}/ajaxpullfromcrowdin/${Ut(e)}`;
		const i = new FormData();
		i.append("sessionid", f.TS.SESSIONID);
		i.append("languages", t.join(","));
		let a = null;
		try {
			const t = await Ke.post(n, i, {
				withCredentials: true,
				cancelToken: r?.token,
			});
			if (t?.status == 200 && t.data?.success == 1) {
				const r = t.data.updated;
				const n = r?.[e] ?? [];
				if (
					n.length > 0 &&
					(this.m_mapFAQSummaries.has(e) || this.m_mapFAQDrafts.has(e))
				) {
					this.m_mapFAQDrafts.delete(e);
					await this.LoadFAQDraftContent(e);
				}
				return n;
			}
			a = {
				response: t,
			};
		} catch (e) {
			a = e;
		}
		const s = H_1(a);
		console.error("Could not import from crowdin", e, s.strErrorMsg, s);
		return [];
	}
	BHasLiveEnglishVersion(e) {
		return this.m_mapFAQSummaries
			.get(e)
			.per_language_info.some(
				(e) => e.language == 0 && e.last_publish_timestamp > 0,
			);
	}
	GetNonEnglishDraftsToPublish(e) {
		return this.m_mapFAQSummaries
			.get(e)
			.per_language_info.filter(
				(e) =>
					e.language != 0 &&
					e.last_update_timestamp > (e.last_publish_timestamp ?? 0),
			)
			.map((e) => e.language);
	}
}
Cg([ie.sH], xt.prototype, "m_mapFAQSummaries", undefined);
Cg([ie.XI], xt.prototype, "RemoveAllDirtyDrafts", null);
function Ut(e) {
	const t = `0000000000000000${Xe.A.fromString(e, true, 10).toString(16)}`
		.slice(-16)
		.toUpperCase();
	return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(
		12,
		16,
	)}`;
}
class vr {
	m_cm;
	m_eLoginState = 0;
	m_bFinishedStage1 = false;
	m_bStartedStage2 = false;
	m_CurrentUser = undefined;
	m_bSupportAlertModalActive = false;
	m_bHaveShownSupportAlertModal = false;
	constructor() {
		Gn(this);
	}
	async Init(e) {
		this.m_cm = e;
		this.m_cm.AddOnDisconnectCallback(this.OnCMDisconnect);
		this.m_cm.AddOnLogonCallback(this.OnCMLogon);
		await b_1("SteamApp Init - WebUI Transport", [
			["WebUITransportStore", () => te.r.Init()],
		]);
		await b_1("SteamApp Init - Before Login", [
			["CM Connect", () => e.Connect()],
			["SteamURLStore", () => c.Dt.InitWithoutUser()],
			["BasicUIStore", () => l.oy.InitWithoutUser()],
			["OverlayModalDialogsStore", () => b.Q.Init()],
			["SystemNetworkStore", () => Z.OQ.Get().Init(e)],
			["VirtualMenuStore", () => K.Mf.Init()],
			["URLStore", () => m.B7.Init()],
			["LoginStore", () => dr.b.Init()],
			["NotificationStore", () => X.Tu.Init()],
			[
				"Localization",
				() => (f.TS.USE_LONGEST_LOC_STRING ? Qu() : uV(f.TS.LANGUAGE)),
			],
			["FriendsChatStore", () => x.LN.Init()],
			["SuspendResumeStore", () => j.Ze.Init()],
			["SteamingStore", () => H.Gc.Init()],
			["SecurityStore", () => J.yE.Init()],
			["KeyboardSettingsStore", () => W.O.InitWithoutUser()],
			["IBusConnection", () => Ve.aJ.Init()],
			["ConsoleStore", () => ir.dn.Init()],
			["FocusedAppWindowStore", () => or.iP.Init()],
			["SystemReportStore", () => $.Ty.Init()],
			["SimpleTests", () => We.Get().Init()],
			["VRGamepadUIMessages", () => I_1()],
			["VRStore", () => AP()],
			["VRAudioSettingsStore", () => Ht.t.Init()],
		]);
		SteamClient.User.RegisterForLoginStateChange(this.OnLoginStateChange);
		SteamClient.User.RegisterForCurrentUserChanges(this.OnCurrentUserChanges);
		D();
		this.m_bFinishedStage1 = true;
	}
	BFinishedInitStageOne() {
		return this.m_bFinishedStage1;
	}
	get LoginState() {
		return this.m_eLoginState;
	}
	get cm() {
		return this.m_cm;
	}
	m_cloudStorage = undefined;
	m_bWasEverLoggedIn = false;
	m_bServicesInitialized = false;
	GetCloudStorageForLibrary() {
		return this.m_cloudStorage;
	}
	BWasEverLoggedIn() {
		return this.m_bWasEverLoggedIn;
	}
	async OnLoginStateChange(e, t, r, n, i, a) {
		if (this.m_eLoginState == 8) {
			return;
		}
		if (t == 7) {
			await this.InitStage2();
		}
		let s = this.m_eLoginState == 0;
		this.m_eLoginState = t;
		if (!s && t == 7) {
			J.yE.InitialLoginComplete(e);
			if (l.oy.WindowStore.BHasGamepadUIMainWindow()) {
				ee.iG.CheckClaimSteamDeckRewards();
			}
		}
	}
	async InitStage2() {
		if (this.m_bStartedStage2) {
			return;
		}
		this.m_bStartedStage2 = true;
		let e = this.m_cm;
		console.time("SteamApp Init - After Login");
		try {
			await Promise.all([rr.md.Register(), cr.X$.Register()]);
			const t = aj();
			t.Init(
				f.TS.IN_STEAMUI_SHARED_CONTEXT ? "Shared SteamUI" : "Library",
				CLSTAMP,
				e.GetServiceTransport(),
				{
					fnGetReportingInterval: Lr,
				},
			);
			e.messageHandlers.InstallErrorReportingStore(t);
			te.r.InstallErrorReportingStore(t);
			Vt.y.Init(
				f.TS.IN_STEAMUI_SHARED_CONTEXT ? "Shared SteamUI" : "Library",
				CLSTAMP,
				e.GetServiceTransport(),
			);
			const r = (e, r, n) => {
				if (e instanceof Error) {
					t.ReportError(e);
				} else {
					t.ReportError(new Error(`Startup error in ${r} - ${n}: ${e}`), {
						bIncludeMessageInIdentifier: true,
					});
				}
			};
			await b_1(
				"SteamApp Init - After Login - Stage 1",
				[
					[
						"localization",
						() => (f.TS.USE_LONGEST_LOC_STRING ? Qu() : uV(f.TS.LANGUAGE)),
					],
					["CM Connection", () => e.Connect()],
					["CloudStorage", () => s.s7.Init(e)],
					["AppStore", () => A.tw.Init(e)],
					["AchievementProgress", () => Kt.y.Init(e)],
					["URLStore", () => m.B7.Init()],
					["GameActionStore", () => w.I.Init()],
					["SettingsStore", () => B.rV.Init(e)],
					["SystemInfoStore", () => Q.Z4.Init()],
					["SystemNetworkStore", () => Z.OQ.Get().Init(e)],
					["FriendsChatStore - Startup", () => x.LN.AwaitStartupFinished()],
				],
				true,
				r,
			);
			await b_1(
				"SteamApp Init - After Login - Friend Store",
				[["FriendStore", () => lr.O$.Init(e, bg())]],
				true,
				r,
			);
			this.m_cloudStorage = await s.s7.ForNamespace(
				s.Jq.k_EUserConfigStoreNamespaceLibrary,
			);
			await b_1(
				"SteamApp Init - After Login - Collection Store",
				[["CollectionStore", () => rr.md.Init(this.m_cloudStorage)]],
				true,
				r,
			);
			const n = d.n6.Init(e);
			await b_1(
				"SteamApp Init - After Login - Stage 2",
				[
					["AppInfoStore", () => He.Vw.Init(e)],
					["AppActivityStore", () => Xt.yX.Init(e)],
					["AppDetailsStore", () => Jt.H.Init(e)],
					["AppReviewStore", () => $t.x.Init(e)],
					["AppSpotlightsStore", () => er.Ri.Init(e)],
					["LibraryUIStore", () => n],
					["WorkshopStore", () => Sr.B6.Init(e)],
					["CommunityStore", () => nr.Nb.Init(e)],
					["LibraryEventStore", () => ur.dm.Init(e)],
					["BadgeStore", () => tr.x_.Init(e)],
					["ShowcaseStore", () => br.N.Init(this.m_cloudStorage)],
					["SettingsZooStore", () => fr.hG.Init()],
					["PlayNextStore", () => gr.x3.Init(e)],
					["DownloadsStore", () => ar.hj.Init(e)],
					["FAQStore", () => xt.Init(e)],
					["ParentalStore", () => n.then(() => M.jR.Init(e))],
					["ControllerConfigStore", () => h.v3.Init()],
					["ControllerConfigInterstitialStore", () => z.z.Init()],
					["InstallFolderStore", () => mr.fN.Init()],
					["SubscriberAgreementStore", () => je.Yq.Init(e)],
					["ScreenshotStore", () => Cr.y.Init(e)],
					["TrendingStore", () => yr.J.Init(e)],
					["DiscoveryQueueStore", () => qe.aI.Init(e.GetServiceTransport())],
					["DynamicUserStore", () => Qe.Fm.Get().HintLoad()],
					["UserProfileStore", () => ee.iG.Init(e)],
					["SearchStore", () => _r.U.Init(e)],
					["MarketingStore", () => Wt.Nt.Init(e)],
					["AchievementStore", () => Yt.p6.Init()],
					["BasicUIStore - with user", () => l.oy.InitWithUser()],
					["KeyboardSettingsStore", () => W.O.Init()],
					["LibraryLoyaltyAwardModal", () => jt.EX.Initialize(e)],
					["RemotePlayStore", () => hr.ut.Init(e)],
					["OverlayStore", () => pr.Q.Init(e)],
					["GameReleasedStore", () => cr.X$.Init(this.m_cloudStorage)],
					["ServerBrowserStore", () => _.Xw.Init(e)],
					["MusicStore", () => Ar.l.Init()],
					["GRS", () => Z9(e.GetServiceTransport(), re.XP, re.Nd)],
					["EmojiStore", () => sr._.Init()],
					["SteamNotificationsStore", () => X.$Z.Initialize(e)],
					["GamescopeStore", () => U.YS.Init()],
					["SystemStorageStore", () => Y._r.Init()],
					["SDCardStore", () => Y.bh.Init()],
					["SteamOSStore", () => V.qF.Init()],
					["BluetoothStore", () => q.Y4.Init()],
					["EAAccessPromptManager", () => ne.Cf.Init(this.m_cloudStorage)],
				],
				true,
				r,
			);
			this.m_bServicesInitialized = true;
			SteamClient.UI.NotifyAppInitialized();
		} catch (e) {
			console.log("FAILED TO INITIALIZE THE STORES", e);
		}
		console.timeEnd("SteamApp Init - After Login");
	}
	GetServicesInitialized() {
		return this.m_bServicesInitialized === true;
	}
	async WaitForServicesInitialized() {
		await z7(() => this.m_bServicesInitialized);
		return this.m_bServicesInitialized;
	}
	OnCMDisconnect() {
		aj().PauseReporting();
	}
	OnCMLogon() {
		aj().PauseReportingForDuration(Tg(0, 300) * 1000);
	}
	PrefetchParentalSettingsForChildren(e) {
		const t = this.m_cm.GetServiceTransport();
		for (let r of e) {
			wr.L.prefetchQuery(
				Bf(t, C.b.InitFromAccountID(r).ConvertTo64BitString(), {
					staleTime: 60000,
				}),
			);
		}
	}
	async OnCurrentUserChanges(e) {
		this.m_CurrentUser = e;
		if (
			this.m_CurrentUser.strFamilyGroupID &&
			this.m_CurrentUser.eFamilyGroupRole == 1
		) {
			this.PrefetchParentalSettingsForChildren(
				this.m_CurrentUser.rgFamilyGroupMembers
					.filter((e) => e.role == 2)
					.map((e) => e.accountid),
			);
		}
		if (!this.m_bHaveShownSupportAlertModal && e.bSupportPopupMessage) {
			this.m_bSupportAlertModalActive = true;
			this.m_bHaveShownSupportAlertModal = true;
		}
	}
	BHasCurrentUser() {
		return this.m_eLoginState == 7;
	}
	BIsInOOBE() {
		switch (this.m_eLoginState) {
			case 2:
			case 1: {
				return true;
			}
		}
		return false;
	}
	GetCurrentUser() {
		return this.m_CurrentUser;
	}
	BIsInFamilyGroup() {
		return Number(this.m_CurrentUser.strFamilyGroupID) != 0;
	}
	GetFamilyGroupID() {
		return this.m_CurrentUser.strFamilyGroupID;
	}
	BIsFamilyGroupMember(e) {
		return (
			this.m_CurrentUser.rgFamilyGroupMembers.filter((t) => t.accountid == e)
				.length > 0
		);
	}
	GetFamilyGroupName() {
		return this.m_CurrentUser.strFamilyGroupName;
	}
	BIsOfflineMode() {
		return this.m_CurrentUser?.bIsOfflineMode;
	}
	ShowSupportAlertsModal() {
		w_1(
			this.m_CurrentUser.bSupportAlertActive,
			"Can't show support alert modals; no active alerts.",
		);
		if (this.m_CurrentUser.bSupportAlertActive) {
			this.m_bSupportAlertModalActive = true;
		}
	}
	CloseSupportAlertsModal() {
		this.m_bSupportAlertModalActive = false;
	}
	BHasActiveSupportAlerts() {
		return !!this.m_CurrentUser?.bSupportAlertActive;
	}
	BHasAckOnlyActiveSupportAlerts() {
		return !!this.m_CurrentUser?.bSupportAckOnlyMessages;
	}
	BSupportAlertDialogActive() {
		return this.m_bSupportAlertModalActive;
	}
	BMustShowSupportAlertDialog() {
		return !!this.m_CurrentUser?.bSupportPopupMessage;
	}
	BHardwareSurveyPending() {
		return !!this.m_CurrentUser?.bHWSurveyPending;
	}
	SendSurvey() {
		SteamClient.User.SendSurvey();
		this.m_CurrentUser.bHWSurveyPending = false;
	}
	OptOutOfSurvey() {
		SteamClient.User.OptOutOfSurvey();
		this.m_CurrentUser.bHWSurveyPending = false;
	}
}
let Ir;
export function qw() {
	return Ir;
}
export function KC() {
	w_1(!Ir, "SteamUI already initialized");
	Ir = new vr();
	window.App = Ir;
	return Ir;
}
export function gK() {
	return q3(() => qw().BFinishedInitStageOne());
}
export function Wx() {
	return q3(() => qw().BHasCurrentUser());
}
export function iZ() {
	return q3(() => qw().GetCurrentUser());
}
export function QR() {
	return q3(() => qw().BIsOfflineMode());
}
export function Pp() {
	return q3(() => qw().GetCurrentUser() && qw().GetCurrentUser().bIsLimited);
}
export function ZW() {
	return q3(() => qw().GetCurrentUser().eFamilyGroupRole);
}
export function IU() {
	return q3(() => qw().BIsInFamilyGroup());
}
export function EK() {
	return q3(() => qw().GetFamilyGroupID());
}
export function kU() {
	return q3(() => qw().GetCurrentUser().rgFamilyGroupMembers);
}
function Lr() {
	return Tg(10, 60) * 1000;
}
Cg([ie.sH], vr.prototype, "m_eLoginState", undefined);
Cg([ie.sH], vr.prototype, "m_bFinishedStage1", undefined);
Cg([ie.sH], vr.prototype, "m_CurrentUser", undefined);
Cg([ie.sH], vr.prototype, "m_bSupportAlertModalActive", undefined);
Cg([ie.sH], vr.prototype, "m_cloudStorage", undefined);
Cg([ie.sH], vr.prototype, "m_bWasEverLoggedIn", undefined);
Cg([ie.sH], vr.prototype, "m_bServicesInitialized", undefined);
Cg([se.oI], vr.prototype, "OnLoginStateChange", null);
Cg([se.oI], vr.prototype, "OnCMDisconnect", null);
Cg([se.oI], vr.prototype, "OnCMLogon", null);
Cg([ie.XI.bound], vr.prototype, "OnCurrentUserChanges", null);
