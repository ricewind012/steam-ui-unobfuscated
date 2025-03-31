import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44846.js";
import a, { Np } from "./32700.js";
import "./18057.js";
import s, { br } from "./18869.js";
import o, { F as F_1 } from "./63947.js";
import l, { J as J_1 } from "./81371.js";
import c from "./22091.js";
import m, { T as T_1 } from "./78057.js";
import u from "./96593.js";
import d, { useState, useEffect } from "./63696.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import _ from "./96000.js";
import f from "./76356.js";
import b from "./10294.js";
import y from "./47979.js";
import S from "./5640.js";
import w from "./92749.js";
import B, { TP, gk } from "./46422.js";
import v from "./41230.js";
import I, { q3 } from "./90095.js";
import E, { W6 } from "./49519.js";
import { Pt, DT } from "./55571.js";
import T from "./92031.js";
import R from "./45967.js";
import k from "./88750.js";
import D from "./24892.js";
import F from "./46217.js";
import G from "./35488.js";
import O from "./10606.js";
import { pg } from "./13869.js";
import L from "./50376.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { A as A_1 } from "./90765.js";
import V from "./52451.js";
import H, { Qn, CI } from "./72476.js";
import { $2 } from "./96680.js";
import { vq } from "./63259.js";
import { J as J_1 } from "./9600.js";
import { y as y_3 } from "./76414.js";
import { oy } from "./31706.js";
import { Uo } from "./19731.js";
import X from "./80100.js";
import { kU, EK, ZW } from "./89748.js";
import { KV } from "./46382.js";
import { E as E_2 } from "./55037.js";
import { At, TW, Bf } from "./24274.js";
import { gt, KM as KM_2 } from "./48289.js";
import ie from "./8573.js";
import { I5 } from "./34792.js";
import se from "./68608.js";
import { Id } from "./77347.js";
import le from "./91369.js";
import { y as y_1 } from "./19056.js";
class p {
	m_mapLastConVarValues = new Map();
	m_mapConVarCallbacks = new Map();
	GetLastConVarValue(e, t, r) {
		if (this.m_mapLastConVarValues.has(e)) {
			return t(this.m_mapLastConVarValues.get(e));
		} else {
			return r;
		}
	}
	RegisterForConVar(e, t) {
		if (!this.m_mapConVarCallbacks.has(e)) {
			const t = new CCallbackList();
			const r = SteamClient.UI.RegisterForClientConVar(e, (r) => {
				if (r !== undefined) {
					this.m_mapLastConVarValues.set(e, r);
					t.Dispatch(r);
				} else {
					console.error(`Unknown convar: ${e}`);
				}
			}).unregister;
			this.m_mapConVarCallbacks.set(e, {
				callbacks: t,
				unregister: r,
			});
		}
		const r = this.m_mapConVarCallbacks.get(e);
		const n = r.callbacks.Register(t);
		return () => {
			n.Unregister();
			if (r.callbacks.CountRegistered() == 0) {
				this.m_mapConVarCallbacks.delete(e);
				r.unregister();
			}
		};
	}
	static sm_instance;
	static Get() {
		p.sm_instance ||= new p();
		return p.sm_instance;
	}
}
function g(e, t, r) {
	const [n, i] = useState(() => p.Get().GetLastConVarValue(e, t, r));
	useEffect(() => p.Get().RegisterForConVar(e, (e) => i(t(e))), [e, t]);
	return n;
}
function h(e) {
	return parseInt(e);
}
function C(e) {
	return !!h(e);
}
const N = D;
const J = X;
export function AH(e, t, r) {
	if (t.BIsAppBlocked()) {
		return null;
	}
	let n = t.GetPerClientData(r);
	if (!n) {
		return null;
	}
	if (t.BIsPerClientDataLocal(n)) {
		switch (n.display_status) {
			case 32:
			case 33: {
				return "Uninstall";
			}
			case 8:
			case 11:
			case 34:
			case 35: {
				switch (t.app_type) {
					case 8192: {
						return "PlayMusic";
					}
					case 1:
					case 1073741824:
					case 2048:
					case 8:
					case 65536: {
						return "Play";
					}
					default: {
						return "Launch";
					}
				}
			}
			case 28: {
				if (t.installed) {
					return "Play";
				} else {
					return "Install";
				}
			}
			case 1: {
				return "Cancel";
			}
			case 4: {
				return ue(e, t);
			}
			case 7:
			case 6: {
				return "Pause";
			}
			case 22:
			case 38:
			case 18:
			case 39: {
				return "Resume";
			}
			case 23:
			case 24: {
				return "Download";
			}
			case 19:
			case 20: {
				return "Update";
			}
			case 9: {
				return "Install";
			}
			case 10: {
				return "PreLoad";
			}
			case 29: {
				return "BorrowApp";
			}
			case 31:
			case 27:
			case 30:
			case 17: {
				return "PurchaseApp";
			}
			default: {
				return null;
			}
		}
	} else {
		switch (n.display_status) {
			case 32:
			case 33: {
				return "Uninstall";
			}
			case 11:
			case 34:
			case 35:
			case 22:
			case 38:
			case 18:
			case 39:
			case 23:
			case 24:
			case 19:
			case 20: {
				return "Stream";
			}
			case 1: {
				return "Cancel";
			}
			case 4: {
				if (n.streaming_to_local_client) {
					return ue(e, t);
				} else {
					return "Connect";
				}
			}
			case 7:
			case 6:
			case 29:
			case 37:
			case 3:
			case 5:
			case 8:
			case 2:
			case 26:
			case 36:
			case 25:
			case 21:
			case 12:
			case 13:
			case 14:
			case 16:
			default: {
				return null;
			}
			case 9:
			case 28: {
				return "Install";
			}
			case 10: {
				return "PreLoad";
			}
			case 31:
			case 27:
			case 30:
			case 17: {
				return "PurchaseApp";
			}
		}
	}
}
function ue(e, t) {
	if (
		(H.TS.IN_GAMESCOPE && e.IsGamepadUIWindow()) ||
		e.IsGamepadUIOverlayWindow()
	) {
		return "ResumeGameInProgress";
	} else if (t.BIsSteamVR()) {
		return "Stop";
	} else if (e.IsVRWindow() || e.IsGamepadUIWindow()) {
		return "ResumeGameInProgress";
	} else {
		return "Stop";
	}
}
export function Kw(e, t) {
	let r = e.GetPerClientData(t);
	if (e.BIsPerClientDataLocal(r)) {
		switch (r.display_status) {
			case 3:
			case 13: {
				return "Install";
			}
			case 2: {
				return "Uninstall";
			}
			case 36: {
				return "Terminating";
			}
			case 5:
			case 8: {
				return null;
			}
			case 25: {
				return "Download";
			}
			case 21: {
				return "Update";
			}
			case 37: {
				return "Play";
			}
			case 12:
			case 14: {
				return "Install";
			}
			case 16:
			case 26: {
				switch (e.app_type) {
					case 1:
					case 1073741824:
					case 8192:
					case 2048:
					case 8:
					case 65536: {
						return "Play";
					}
					default: {
						return "Launch";
					}
				}
			}
			default: {
				return null;
			}
		}
	} else {
		switch (r.display_status) {
			case 3:
			case 13:
			case 12:
			case 14: {
				return "Install";
			}
			case 5:
			case 8:
			default: {
				return null;
			}
			case 7:
			case 6:
			case 10:
			case 29:
			case 2:
			case 25:
			case 21:
			case 16:
			case 26: {
				return "Stream";
			}
		}
	}
}
function Ae(e, t) {
	let r = e.GetPerClientData(t);
	if (!e.BIsPerClientDataLocal(r)) {
		return [];
	}
	if (e.BIsAppBlocked()) {
		return [];
	}
	switch (e.app_type) {
		case 8192: {
			if (r.installed) {
				return ["Uninstall"];
			} else {
				return [];
			}
		}
		case 2048: {
			return [];
		}
		case 1073741824: {
			return ["RemoveShortcut", "CreateDesktopShortcut"];
		}
		case 1:
		case 2:
		case 4:
		case 8:
		case 65536: {
			switch (r.display_status) {
				case 11:
				case 7:
				case 22:
				case 23:
				case 24:
				case 25:
				case 38:
				case 6:
				case 18:
				case 19:
				case 20:
				case 21:
				case 39:
				case 3:
				case 1:
				case 4:
				case 5:
				case 8:
				case 2:
				case 16:
				case 29:
				case 31:
				case 17:
				case 37:
				case 34:
				case 35: {
					return ["CreateDesktopShortcut", "BackUpFiles", "Uninstall"];
				}
				case 32:
				case 28:
				case 27:
				case 33: {
					if (r.installed) {
						return ["Uninstall"];
					} else {
						return [];
					}
				}
				case 9:
				case 10:
				case 26:
				case 30:
				case 12:
				case 13:
				case 14: {
					return [];
				}
			}
		}
	}
	return [];
}
function pe(e) {
	window.setTimeout(() => {
		SteamClient.Apps.RemoveShortcut(e);
		for (const t of _.md.userCollections) {
			if (t.bAllowsDragAndDrop && t.apps.has(e)) {
				t.AsDragDropCollection().RemoveApps([u.tw.GetAppOverviewByAppID(e)]);
			}
		}
	}, 500);
}
export function aF(e, t, r) {
	t.location.href = `steam://musicplayer/playappalbum/${e}${r && `/${r}`}`;
}
export function _D(e, t, r, n) {
	let i = n ?? window;
	pg(
		d.createElement(Ce, {
			gameid: e,
			appid: t,
			fnAccepted: r,
		}),
		i,
		{
			strTitle: Localize("#GameAction_ConfirmExitGameTitle"),
		},
	);
}
function Ce(e) {
	const { gameid: t, fnAccepted: r, closeModal: n } = e;
	TP(true);
	return d.createElement(O.o0, {
		className: J.ExitGameDialog,
		strTitle: Localize("#GameAction_ConfirmExitGameTitle"),
		strDescription: Localize("#AppOverlay_UnsavedDataWarning"),
		onOK: () => {
			if (r) {
				r();
			}
			if (i.ak(e.appid)) {
				SteamClient.OpenVR.QuitAllVR();
			} else {
				SteamClient.Apps.TerminateApp(t, false);
			}
		},
		closeModal: n,
	});
}
export function a_(e, t, r) {
	let n = r ?? window;
	pg(
		d.createElement(fe, {
			gameid: e,
			fnAccepted: t,
		}),
		n,
		{
			strTitle: Localize("#GameAction_ConfirmStopStreamingTitle"),
		},
	);
}
function fe(e) {
	const { gameid: t, fnAccepted: r, closeModal: n } = e;
	TP(true);
	return d.createElement(O.o0, {
		strTitle: Localize("#GameAction_ConfirmStopStreamingTitle"),
		onOK: () => {
			if (r) {
				r();
			}
			SteamClient.Apps.TerminateApp(t, false);
		},
		closeModal: n,
	});
}
export function jy(e, t, r, n, i) {
	const a = t.GetPerClientData(r);
	switch (e) {
		case "Play":
		case "Launch": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () =>
				((e, t, r, n) => {
					if (!m.H.BHasRecentlyLaunched(e.appid)) {
						if (
							B.oy.IsGamepadUIWindowActive() &&
							H.TS.ON_DECK &&
							e.app_type == 2048
						) {
							J_1();
						} else {
							m.H.MarkAppAsRecentlyLaunched(e.appid);
							SteamClient.Apps.RunGame(e.GetGameID(), "", -1, n);
							B.oy.SetRunningApp(e.appid);
						}
					}
				})(t, 0, 0, n);
		}
		case "Connect":
		case "Stream": {
			return () => SteamClient.Apps.StreamGame(t.appid, a.clientid, -1);
		}
		case "Cancel": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () => SteamClient.Apps.CancelLaunch(t.GetGameID());
		}
		case "Stop": {
			return () => _D(t.GetGameID(), t.appid, undefined, i);
		}
		case "ResumeGameInProgress": {
			return () =>
				((e, t) => {
					const r = B.oy.WindowStore.GetWindowInstanceFromWindow(t);
					const n = R.qL.CurrentSceneAppID;
					if (r?.IsVRWindowInGamescope()) {
						if (n > T.sc && n === e?.appid) {
							SteamClient?.OpenVR?.VROverlay.HideDashboard();
						} else {
							try {
								le.p.SteamVR.ShowGame({
									overlay_key: `valve.steam.desktopgame.${e?.appid}`,
								});
							} catch (e) {}
						}
					} else if (r?.IsVRWindow()) {
						SteamClient?.OpenVR?.VROverlay.HideDashboard();
					} else if (H.TS.IN_GAMESCOPE) {
						B.oy.NavigateToRunningApp();
					}
					B.oy.SetRunningApp(e.appid);
					let i = B.oy.WindowStore.GetOverlayInstances(e.appid);
					if (i.length != 0) {
						i.forEach((e) => e.NavigateToRunningApp());
						SteamClient.Apps.RaiseWindowForGame(e.gameid);
					}
				})(t, i);
		}
		case "Pause": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () => SteamClient.Downloads.EnableAllDownloads(false);
		}
		case "Download":
		case "Resume":
		case "Update": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () => SteamClient.Downloads.ResumeAppUpdate(t.appid);
		}
		case "PreLoad":
		case "Install": {
			if (t.BIsPerClientDataLocal(a)) {
				return () => f.I.InstallApp(t.appid);
			} else {
				return () => SteamClient.Apps.StreamGame(t.appid, a.clientid, -1);
			}
		}
		case "Uninstall": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () => Uo([t.appid], i, false);
		}
		case "RemoveShortcut": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () => pe(t.appid);
		}
		case "BorrowApp": {
			AssertMsg(
				t.BIsPerClientDataLocal(a),
				"Local-only app action for non-local client data",
			);
			return () => J_1(t.gameid, i);
		}
		case "PurchaseApp": {
			return () => SteamClient.Apps.ShowStore(t.appid);
		}
		case "GameProperties": {
			return () => SteamClient.Apps.OpenAppSettingsDialog(t.appid, "");
		}
		case "CreateDesktopShortcut": {
			return () =>
				SteamClient.Apps.CreateDesktopShortcutForApp(t.appid).catch((e) =>
					console.error("CreateDesktopShortcutForApp failed:", e),
				);
		}
		case "BrowseLocalFiles": {
			return () =>
				((e) => {
					const t = m.H.GetAppDetails(e);
					SteamClient.System.OpenLocalDirectoryInSystemExplorer(
						t.strInstallFolder,
					);
				})(t.appid);
		}
		case "PlayMusic": {
			return () => aF(t.appid, i);
		}
		case "BackUpFiles": {
			return () => vq([t.appid], i);
		}
		default: {
			return null;
		}
	}
}
export function k2(e) {
	switch (e) {
		case "Play":
		case "PlayMusic":
		case "Launch":
		case "ResumeGameInProgress": {
			return true;
		}
		default: {
			return false;
		}
	}
}
export function KM(e) {
	switch (e) {
		case "Stream":
		case "Connect": {
			return true;
		}
		default: {
			return false;
		}
	}
}
export function WB(e) {
	if (k2(e)) {
		return d.createElement(F.jG, null);
	}
	if (KM(e)) {
		if (B.oy.IsGamepadUIWindowActive()) {
			return d.createElement(G.Stream, null);
		} else {
			return d.createElement(F.jG, null);
		}
	}
	switch (e) {
		case "Cancel":
		case "Stop": {
			return d.createElement(F.bm, null);
		}
		case "Pause": {
			return d.createElement(F.vR, null);
		}
		case "Download":
		case "Resume":
		case "PreLoad":
		case "Install": {
			return d.createElement(F.f5, null);
		}
		case "Update": {
			return d.createElement(F.UT, null);
		}
		case "Uninstall":
		case "RemoveShortcut": {
			return d.createElement(F.lM, null);
		}
		case "PurchaseApp": {
			return d.createElement(F.qz, null);
		}
		default: {
			return null;
		}
	}
}
export function Co(e, t) {
	let r;
	switch (e) {
		case "Play":
		case "Launch":
		case "Stream":
		case "Connect":
		case "ResumeGameInProgress": {
			r = t.Play;
			break;
		}
		case "Cancel":
		case "Stop": {
			r = t.Stop;
			break;
		}
		case "Pause": {
			r = t.Pause;
			break;
		}
		case "Download":
		case "Resume":
		case "PreLoad":
		case "Install": {
			r = t.Download;
			break;
		}
		case "Update": {
			r = t.Update;
		}
	}
	return r;
}
export function uU(e) {
	const t = br();
	const r = $2();
	return d.createElement(Ie, {
		navigator: t,
		instance: r,
		...e,
	});
}
let Ie = class extends d.Component {
	m_hAppDetails = null;
	constructor(e) {
		super(e);
		this.m_hAppDetails = m.H.RegisterForAppData(this.props.overview.appid);
	}
	componentWillUnmount() {
		if (this.m_hAppDetails) {
			this.m_hAppDetails.unregister();
		}
	}
	GetTargetApps() {
		if (this.props.includeMultiSelect) {
			if (
				y.b
					.GetSelectedAppsInContext()
					.some(
						(e) =>
							e.appid == this.props.overview.appid &&
							e.strCollectionId == this.props.strCollectionId,
					)
			) {
				return y.b
					.GetSelectedAppIds()
					.map((e) => u.tw.GetAppOverviewByAppID(e));
			}
		}
		return [this.props.overview];
	}
	AddToFavorites(e) {
		_.md.SetAppsAsFavorite(e, true);
	}
	RemoveFromFavorites(e) {
		_.md.SetAppsAsFavorite(e, false);
	}
	AddToHidden(e) {
		_.md.SetAppsAsHidden(e, true);
	}
	RemoveFromHidden(e) {
		_.md.SetAppsAsHidden(e, false);
	}
	AddToNewCollection(e, t) {
		oy(GetOwningWindowForEvent(e), t, "context-menu");
	}
	ShowCDKeys(e) {
		if (this.props.bInGamepadUI) {
			F_1(GetOwningWindowForEvent(e), this.props.overview);
		} else {
			GetOwningWindowForEvent(e).location.href =
				`steam://cdkeys/${this.props.overview.appid}`;
		}
	}
	ShowControllerConfig() {
		SteamClient.Apps.ShowControllerConfigurator(this.props.overview.appid);
	}
	DismissFromPlayNext() {
		w.x3.AddIgnoredApp(this.props.overview.appid);
	}
	GetCollectionManagementActions(e) {
		let t = [];
		let r = [];
		for (const n of _.md.userCollections) {
			if (
				!n.bAllowsDragAndDrop ||
				_.md.BIsSystemCollectionId(n.id) ||
				_.md.BIsSystemCollectionId(n.id) ||
				_.md.BIsPartnerCollectionId(n.id)
			) {
				continue;
			}
			const i = n.AsDragDropCollection();
			const a = e.some((e) => i.apps.has(e.appid));
			const s = e.some((e) => !i.apps.has(e.appid));
			if (a) {
				r.push(
					d.createElement(
						k.kt,
						{
							key: `remove-from-${n.id}`,
							onSelected: () => i.RemoveApps(e),
							className: N.UpperCase,
						},
						n.displayName,
					),
				);
			}
			t.push(
				d.createElement(
					k.kt,
					{
						key: `add-to-${n.id}`,
						disabled: !s,
						onSelected: () => i.AddApps(e),
						className: N.UpperCase,
					},
					n.displayName,
				),
			);
		}
		if (t.length > 0) {
			t.push(
				d.createElement(k.K5, {
					key: "add-all-to-new-separator",
				}),
			);
		}
		t.push(
			d.createElement(
				k.kt,
				{
					key: "add-all-to-new",
					onSelected: (t) => this.AddToNewCollection(t, e),
				},
				d.createElement(L.f5w, null),
				Localize("#GameAction_AddToCollectionOption_NewCollection"),
			),
		);
		return {
			rgCanAdd: t,
			rgCanRemove: r,
		};
	}
	GetPrimaryActionMenuItem(e, t) {
		if (e.length == 1) {
			const r = AH(this.props.instance, e[0], t);
			let n = r;
			const i = (n) => {
				const i = jy(
					r,
					e[0],
					t,
					this.props.launchSource,
					GetOwningWindowForEvent(n),
				);
				if (i) {
					i();
				}
			};
			return (
				r &&
				d.createElement(
					k.kt,
					{
						className: A_1(n, J.ContextMenuAction),
						onSelected: i,
					},
					WB(r),
					Np(r, 1),
				)
			);
		}
		const r = e.filter((e) => AH(this.props.instance, e, "local") == "Install");
		const n = e.filter(
			(e) => AH(this.props.instance, e, "local") == "Download",
		);
		const i = e.filter((e) => AH(this.props.instance, e, "local") == "Update");
		const s = e.filter((e) => AH(this.props.instance, e, "local") == "Resume");
		const o = e.filter((e) => AH(this.props.instance, e, "local") == "PreLoad");
		const l = r.length + n.length + i.length + s.length + o.length;
		if (l == 0) {
			return null;
		}
		const c =
			n.length == l
				? "Download"
				: i.length == l
					? "Update"
					: s.length == l
						? "Resume"
						: o.length == l
							? "PreLoad"
							: "Install";
		const m = r.concat(o).map((e) => e.appid);
		return d.createElement(
			k.kt,
			{
				onSelected: () => {
					if (m.length > 0) {
						SteamClient.Installs.OpenInstallWizard(m);
					}
					for (const e of n.concat(i).concat(s)) {
						SteamClient.Downloads.ResumeAppUpdate(e.appid);
					}
				},
			},
			WB(c),
			Np(c, e.length),
		);
	}
	GetOnSelectFunctionForAppActions(e, t, r) {
		if (t.length == 1) {
			return (n) => {
				jy(e, t[0], r, this.props.launchSource, GetOwningWindowForEvent(n))();
			};
		} else {
			return (r) => {
				let n = ((e, t, r, n) => {
					AssertMsg(
						r == "local",
						"Bulk management actions currently only supported on local clients",
					);
					const i = t.filter((t) => Ae(t, r).includes(e)).map((e) => e.appid);
					switch (e) {
						case "Uninstall": {
							return () => Uo(i, n, false);
						}
						case "BackUpFiles": {
							return () => vq(i, n);
						}
						case "RemoveShortcut": {
							return () => i.forEach((e) => pe(e));
						}
						case "CreateDesktopShortcut": {
							return () =>
								i.forEach((e) =>
									SteamClient.Apps.CreateDesktopShortcutForApp(e).catch((e) =>
										console.error("CreateDesktopShortcutForApp failed:", e),
									),
								);
						}
						default: {
							console.error("Unsupported bulk operation", e);
							return () => {};
						}
					}
				})(e, t, "local", GetOwningWindowForEvent(r));
				n();
			};
		}
	}
	BuildManageSubmenu(e, t, r) {
		const n = e.length == 1 && m.H.GetAppDetails(e[0].appid);
		const i = e
			.filter((e) => e.BIsAppInBlockList() && !e.BIsModOrShortcut())
			.map(r);
		const s = e
			.filter((e) => !e.BIsAppInBlockList() && !e.BIsModOrShortcut())
			.map(r);
		const o = e.map(r).filter((e) => _.md.BIsHidden(e));
		const l = e.map(r).filter((e) => !_.md.BIsHidden(e));
		const c = n && !this.props.bInGamepadUI && this.props.overview.installed;
		const u =
			e.length == 1
				? Ae(e[0], t)
				: ((e, t) => {
						let r = new Set();
						for (const n of e) {
							for (const e of Ae(n, t)) {
								r.add(e);
							}
						}
						return [
							"RemoveShortcut",
							"CreateDesktopShortcut",
							"Uninstall",
							"BackUpFiles",
						].filter((e) => r.has(e));
					})(e, t);
		const A =
			u.includes("CreateDesktopShortcut") &&
			!H.TS.IN_CHROMEOS &&
			!this.props.bInGamepadUI;
		const p = u.includes("RemoveShortcut") && !H.TS.IN_CHROMEOS;
		const g = u.includes("Uninstall");
		const h = u.includes("BackUpFiles") && !this.props.bInGamepadUI;
		const C = this.props.strCollectionId == "play-next";
		return d.createElement(
			k.Vs,
			{
				label: Localize("#GameAction_Manage"),
			},
			o.length > 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: () => this.RemoveFromHidden(o),
					},
					Np("RemoveFromHidden", e.length),
				),
			A &&
				d.createElement(
					k.kt,
					{
						key: "AddDesktopShortcut",
						onSelected: this.GetOnSelectFunctionForAppActions(
							"CreateDesktopShortcut",
							e,
							t,
						),
					},
					Np(
						H.TS.IN_CHROMEOS
							? "CreateLauncherShortcut"
							: "CreateDesktopShortcut",
						e.length,
					),
				),
			S.jR.isEnabled &&
				!S.jR.isParentalLocked &&
				i.length > 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: () => S.jR.SetAppBlockedState(i, false),
					},
					Np("AddToFamilyGames", e.length),
				),
			S.jR.isEnabled &&
				!S.jR.isParentalLocked &&
				s.length > 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: () => S.jR.SetAppBlockedState(s, true),
					},
					Np("RemoveFromFamilyGames", e.length),
				),
			n &&
				n.bShowCDKeyInMenus &&
				d.createElement(
					k.kt,
					{
						onSelected: this.ShowCDKeys,
					},
					Localize("#GameAction_ViewCDKeys"),
				),
			n &&
				n.bShowControllerConfig &&
				!this.props.bInGamepadUI &&
				d.createElement(
					k.kt,
					{
						onSelected: this.ShowControllerConfig,
					},
					Localize("#GameAction_ControllerConfiguration"),
				),
			n &&
				C &&
				d.createElement(
					k.kt,
					{
						onSelected: this.DismissFromPlayNext,
					},
					Localize("#GameAction_DismissPlayNext"),
				),
			!this.props.bInGamepadUI &&
				this.props.onChangeArtwork &&
				d.createElement(
					k.kt,
					{
						onSelected: this.props.onChangeArtwork,
					},
					Np(
						this.props.hasCustomArtwork
							? "ClearCustomArtwork"
							: "SetCustomArtwork",
					),
				),
			c &&
				d.createElement(
					k.kt,
					{
						onSelected: (r) =>
							jy(
								"BrowseLocalFiles",
								e[0],
								t,
								this.props.launchSource,
								GetOwningWindowForEvent(r),
							)(),
					},
					Localize("#GameAction_BrowseLocalFiles"),
				),
			l.length > 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: () => this.AddToHidden(l),
					},
					Np("AddToHidden", e.length),
				),
			d.createElement(De, {
				rgApps: e,
			}),
			e.length == 1 &&
				d.createElement(Ne, {
					app: e[0],
				}),
			p &&
				d.createElement(
					k.kt,
					{
						key: "RemoveShortcut",
						onSelected: this.GetOnSelectFunctionForAppActions(
							"RemoveShortcut",
							e,
							t,
						),
					},
					Np("RemoveShortcut", e.length),
				),
			g &&
				d.createElement(
					k.kt,
					{
						key: "Uninstall",
						onSelected: this.GetOnSelectFunctionForAppActions(
							"Uninstall",
							e,
							t,
						),
					},
					Np("Uninstall", e.length),
				),
			h &&
				d.createElement(
					k.kt,
					{
						key: "BackupFiles",
						onSelected: this.GetOnSelectFunctionForAppActions(
							"BackUpFiles",
							e,
							t,
						),
					},
					Np("BackUpFiles", e.length),
				),
		);
	}
	render() {
		const e = this.GetTargetApps();
		const t = (e) => e.appid;
		const r = e.map(t).filter((e) => _.md.BIsFavorite(e));
		const n = e.map(t).filter((e) => !_.md.BIsFavorite(e));
		const { rgCanAdd: i, rgCanRemove: s } =
			this.GetCollectionManagementActions(e);
		const o = this.props.client;
		return d.createElement(
			k.tz,
			{
				label: e.length == 1 ? e[0].display_name : null,
			},
			!this.props.omitPrimaryAction && this.GetPrimaryActionMenuItem(e, o),
			this.props.additionalActions,
			r.length > 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: () => this.RemoveFromFavorites(r),
					},
					Np("RemoveFromFavorites", e.length),
				),
			n.length > 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: () => this.AddToFavorites(n),
					},
					Np("AddToFavorites", e.length),
				),
			i.length > 0 &&
				d.createElement(
					k.Vs,
					{
						label: Np("AddToCollection", e.length),
					},
					i,
				),
			s.length > 0 &&
				d.createElement(
					k.Vs,
					{
						label: Np("RemoveFromCollection", e.length),
					},
					s,
				),
			d.createElement(ke, {
				rgApps: e,
			}),
			!b.Ih.BKioskModeLocked() && this.BuildManageSubmenu(e, o, t),
			d.createElement(Ge, {
				rgApps: e,
			}),
			e.length == 1 &&
				!b.Ih.BKioskModeLocked() &&
				d.createElement(
					d.Fragment,
					null,
					d.createElement(k.K5, null),
					d.createElement(
						k.kt,
						{
							onSelected: () => this.props.navigator.AppProperties(e[0].appid),
						},
						Localize("#GameAction_GameProperties"),
					),
				),
		);
	}
};
function Ee(e, t, r) {
	if (t) {
		for (let t of r) {
			const r = e.applist_custom.find((e) => e.appid == t);
			if (r) {
				r.is_allowed = true;
			} else {
				e.applist_custom.push({
					appid: t,
					is_allowed: true,
				});
			}
		}
	} else {
		const t = e.applist_custom.filter((e) => !r.includes(e.appid));
		e.applist_custom = t;
	}
}
function Me(e) {
	const { familyGroupId: t, rgApps: r, settings: n } = e;
	const i = KV();
	const a = ie.b.InitFromAccountID(Number(n.settings.steamid));
	const s = a.ConvertTo64BitString();
	const o = gt(a);
	const l = KM_2(a);
	const [c] = I5("bParenthesizeNicknames");
	const m = At(s);
	const u = r.filter((e) => n.mapAppsAllowed.get(e.appid));
	const A = r.filter((e) => !n.mapAppsAllowed.get(e.appid));
	const p = d.useCallback(async () => {
		const e = await TW(i, s);
		Ee(
			e.settings,
			true,
			r.map((e) => e.appid),
		);
		m.mutate(e.settings);
	}, [m, r, i, s]);
	const g = d.useCallback(async () => {
		const e = await TW(i, s);
		Ee(
			e.settings,
			false,
			r.map((e) => e.appid),
		);
		m.mutate(e.settings);
	}, [m, r, i, s]);
	if (o) {
		return d.createElement(
			d.Fragment,
			null,
			A.length != 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: p,
					},
					d.createElement(
						"span",
						null,
						LocalizeReact(
							"#GameAction_AllowForChild",
							d.createElement(se.A, {
								className: J.FamilyPersona,
								bDisableColoring: true,
								persona: o,
								strNickname: l,
								bParenthesizeNicknames: c,
								bIgnorePersonaStatus: true,
							}),
						),
					),
				),
			u.length != 0 &&
				d.createElement(
					k.kt,
					{
						onSelected: g,
					},
					d.createElement(
						"span",
						null,
						LocalizeReact(
							"#GameAction_DenyForChild",
							d.createElement(se.A, {
								className: J.FamilyPersona,
								bDisableColoring: true,
								persona: o,
								strNickname: l,
								bParenthesizeNicknames: c,
								bIgnorePersonaStatus: true,
							}),
						),
					),
				),
		);
	} else {
		return null;
	}
}
function Te(e) {
	const { familyGroupId: t, rgApps: r, rgChildrenSteamID: n } = e;
	const i = ((e) => {
		const t = KV();
		return E_2({
			queries: e.map((e) =>
				Bf(t, e, {
					staleTime: 60000,
				}),
			),
		});
	})(n);
	const a = i.filter(
		(e) =>
			e.isSuccess &&
			e.data?.settings?.is_enabled &&
			e.data?.settings?.applist_base_id != 0,
	);
	if (a.length > 0) {
		return d.createElement(
			k.Vs,
			{
				label: Localize("#GameAction_FamilyMenu"),
			},
			a.map((e) =>
				d.createElement(Me, {
					key: e.data.settings.steamid,
					familyGroupId: t,
					rgApps: r,
					settings: e.data,
				}),
			),
		);
	} else {
		return null;
	}
}
function Re(e) {
	const { familyGroupId: t, rgApps: r } = e;
	const n =
		kU()
			.filter((e) => e.role == 2)
			.map((e) => ie.b.InitFromAccountID(e.accountid).ConvertTo64BitString()) ||
		[];
	if (n.length == 0) {
		return null;
	} else {
		return d.createElement(Te, {
			familyGroupId: t,
			rgApps: r,
			rgChildrenSteamID: n,
		});
	}
}
function ke(e) {
	const { rgApps: t } = e;
	const r = Id();
	const n = EK();
	const i = ZW();
	if (r && n && i == 1) {
		return d.createElement(Re, {
			familyGroupId: n,
			rgApps: t,
		});
	} else {
		return null;
	}
}
function De(e) {
	const { rgApps: t } = e;
	const r = d.useMemo(() => t.map((e) => e.appid), [t]);
	const { data: n } = Pt();
	const i = W6();
	const s = n?.size === 0;
	const o = r.every((e) => n?.has(e));
	const l = DT();
	const c = d.useCallback(async () => {
		const e = await Promise.all(r.map((e) => m.H.RequestAppDetails(e)));
		const t = [...r].concat(...e.map((e) => e.vecDLC.map((e) => e.unAppID)));
		if (s) {
			i.replace(i.location.pathname, {
				...i.location.state,
				PrivateAppDialogTarget: t.join(","),
			});
		} else if (o) {
			l.mutate({
				rgAppIDs: t,
				bPrivate: false,
			});
		} else {
			l.mutate({
				rgAppIDs: t.filter((e) => !n.has(e)),
				bPrivate: true,
			});
		}
	}, [o, l, r, n, i, s]);
	const u = d.useMemo(
		() => t.filter((e) => e.BIsModOrShortcut()).length > 0,
		[t],
	);
	if (n) {
		return d.createElement(
			k.kt,
			{
				onSelected: u || c,
				disabled: u,
			},
			Np(o ? "UnmarkAsPrivate" : "MarkAsPrivate", t.length),
			u && ` ${Localize("#GameAction_MarkAsPrivate_NoShortcuts")}`,
		);
	} else {
		return null;
	}
}
function Ne(e) {
	const { app: t } = e;
	const r = T_1(t.appid);
	const n = y_3(t.appid);
	const i = g("@bShowUninstalledDemosInLibrary", C, false);
	let a = false;
	if (r) {
		if (r.bFreeRemovableLicense && (t.app_type != 8 || i)) {
			a = true;
		}
		if (r.unMasterSubAppID) {
			a = true;
		}
	}
	if (a) {
		return d.createElement(
			k.kt,
			{
				onSelected: n,
			},
			Localize("#GameAction_RemoveGameLicense"),
		);
	} else {
		return null;
	}
}
Cg([V.oI], Ie.prototype, "GetTargetApps", null);
Cg([V.oI], Ie.prototype, "AddToFavorites", null);
Cg([V.oI], Ie.prototype, "RemoveFromFavorites", null);
Cg([V.oI], Ie.prototype, "AddToHidden", null);
Cg([V.oI], Ie.prototype, "RemoveFromHidden", null);
Cg([V.oI], Ie.prototype, "AddToNewCollection", null);
Cg([V.oI], Ie.prototype, "ShowCDKeys", null);
Cg([V.oI], Ie.prototype, "ShowControllerConfig", null);
Cg([V.oI], Ie.prototype, "DismissFromPlayNext", null);
Cg([V.oI], Ie.prototype, "GetPrimaryActionMenuItem", null);
Ie = Cg([v.PA], Ie);
export function zq() {
	return {
		bFitToWindow: true,
		strClassName: A_1(N.contextMenu, J.LibraryContextMenu),
	};
}
function Ge(e) {
	const { rgApps: t } = e;
	const r = q3(() => c.Fd.Get().GetControllers());
	const n = Qn();
	const [i] = gk();
	const a = t.filter((e) => e.appid != null).map((e) => e.appid);
	const s = y_1(a);
	if (!n || !i) {
		return null;
	}
	const o = CI();
	const l = r.length > 0;
	if (o || l) {
		return d.createElement(
			k.Vs,
			{
				label: Localize("#GameAction_DevMenu"),
			},
			o &&
				d.createElement(
					k.kt,
					{
						key: "ClearProton",
						onSelected: s,
					},
					Localize("#GameAction_DeleteProtonFiles"),
				),
			l &&
				d.createElement(
					k.kt,
					{
						key: "ClearSelectedControllerConfig",
						onSelected: () =>
							a.forEach((e) =>
								((e) => {
									r.forEach((t) =>
										SteamClient.Input.ClearSelectedConfigForApp(
											e,
											t.nControllerIndex,
										),
									);
								})(e),
							),
					},
					Localize("#GameAction_ClearSelectedControllerConfig"),
				),
		);
	} else {
		return null;
	}
}
