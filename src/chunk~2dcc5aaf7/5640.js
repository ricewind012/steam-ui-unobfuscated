import n, { Cg } from "./34629.js";
import i, { Gn, mJ } from "./89193.js";
import a from "./3475.js";
import s from "./44846.js";
import { q3 } from "./90095.js";
import l from "./18057.js";
import { $ } from "./6232.js";
import m from "./46422.js";
import { B6 } from "./49519.js";
import d from "./87935.js";
import A from "./52451.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import g from "./64004.js";
import h from "./49171.js";
import C from "./10294.js";
import _ from "./96593.js";
import f from "./81383.js";
import { PG } from "./24274.js";
import { qw } from "./89748.js";
import S from "./73259.js";
export function Wf() {
	return q3(() => jR.isEnabled);
}
export function mV() {
	return q3(() => jR.wasEverEnabled);
}
export function oA() {
	return q3(() => jR.isParentalLocked);
}
export function hb(e) {
	return q3(() => jR.BIsFeatureBlocked(e));
}
export function e8(e, t) {
	return q3(() => jR.GetRouteFeature(e, t));
}
export function yp(e, t) {
	return q3(() => jR.BIsRouteBlocked(e, t));
}
export function sO(e) {
	return q3(() => jR.BIsURLBlocked(e));
}
export function Wp() {
	return q3(() => jR.hasPassword);
}
export function l9(e) {
	return q3(() => jR.GetFeatureBlockReason(e));
}
export function Is(e, t) {
	return q3(() => jR.GetRouteBlockReason(e, t));
}
export function OJ(e) {
	return q3(() => jR.GetURLBlockedReason(e));
}
export function dF() {
	return q3(() => jR.temporaryEnabledFeaturesExpiration);
}
export function L2() {
	return q3(() => jR.settings);
}
class O {
	constructor() {
		Gn(this);
	}
	m_ParentalSettings = {
		is_enabled: false,
	};
	m_mapAppsBlocked = new Map();
	m_ParentalState = a.KL;
	m_mapRouteToFeature = new Map([
		[l.BV.GamepadUI.SteamWeb(), this.CheckURLRoute],
		[l.BV.GamepadUI.Chat(), 4],
		[l.BV.Media.Grid(), 3],
		[l.BV.GamepadUI.ExternalWeb(), 9],
		[l.BV.GamepadUI.MicroTxnAuth(), 1],
		[l.BV.GamepadUI.Store(), 1],
		[l.BV.GamepadUI.Workshop(), 2],
		[l.BV.Settings.Root(), this.CheckKioskModeLocked],
		[l.BV.Library.App.Root(), this.CheckAppIDRoute],
		[l.BV.Library.AppInCollection(), this.CheckAppIDRoute],
		[l.BV.AppProperties.Root(), this.CheckAppIDRoute],
		[l.BV.GamepadUI.App.Tab(), this.CheckAppIDRoute],
		[S.O.AppNotes(":appid", ":noteid?"), this.CheckAppIDRoute],
		[l.BV.GamepadUI.ControllerConfigurator.Root(), this.CheckAppIDRoute],
		[l.BV.Browser(), this.CheckBrowserRoute],
		[l.BV.Console(), a.JC],
	]);
	m_RoutesByLength = Array.from(this.m_mapRouteToFeature.keys()).sort(
		(e, t) => t.length - e.length,
	);
	m_unblock;
	m_CMInterface;
	async Init(e) {
		this.m_CMInterface = e;
		await new Promise((e, t) => {
			let r = e;
			SteamClient.Parental.RegisterForParentalSettingsChanges((e) => {
				this.UpdateParentalState(e);
				if (r) {
					r();
				}
				r = null;
			});
		});
		mJ(
			() => this.isParentalLocked,
			() => this.EnsureCurrentRouteAllowed(),
		);
		mJ(
			() => this.isRemotePlayLocked,
			() => this.EnsureCurrentRouteAllowed(),
		);
		mJ(
			() => this.isKioskModeLocked,
			() => this.EnsureCurrentRouteAllowed(),
		);
		SteamClient.UI.RegisterForUIModeChanged((e) => {
			this.EnsureCurrentRouteAllowed();
		});
		mJ(
			() => [this.hasAnyLocks, h.z.m_history],
			() => {
				if (this.hasAnyLocks) {
					this.InstallNavigationBlocker();
				} else {
					this.RemoveNavigationBlocker();
				}
			},
		);
	}
	HandleBlockAction(e, t) {
		switch (t) {
			case "POP": {
				h.z.m_history.goBack();
				break;
			}
			case "PUSH": {
				h.z.m_history.push(e);
				break;
			}
			case "REPLACE": {
				h.z.m_history.replace(e);
			}
		}
	}
	CheckRouteAndShowUnlock(e, t) {
		const r = this.GetRouteBlockReason(e.pathname, e);
		if (r != 0) {
			const n = m.oy.ActiveWindowInstance?.BrowserWindow ?? window;
			const i = this.GetRouteFeature(e.pathname, e);
			console.warn(e.pathname, "blocked by parental controls feature", i);
			$(n, r, i, () => {
				this.HandleBlockAction(e, t);
			});
			return false;
		}
	}
	EnsureCurrentRouteAllowed() {
		const e = h.z.m_history;
		if (e && this.BIsRouteBlocked(e.location.pathname, e.location)) {
			e.push(l.BV.Library.Home());
		}
	}
	InstallNavigationBlocker() {
		this.RemoveNavigationBlocker();
		if (m.oy.IsGamepadUIWindowActive() || m.oy.IsDesktopUIWindowActive()) {
			this.m_unblock = h.z.m_history.block((e, t) =>
				this.CheckRouteAndShowUnlock(e, t),
			);
		}
	}
	RemoveNavigationBlocker() {
		if (this.m_unblock) {
			this.m_unblock();
		}
		this.m_unblock = null;
	}
	UpdateParentalState(e) {
		this.m_ParentalSettings = f.Zc.deserializeBinary(e.settings).toObject();
		const t = new Map();
		for (let e of this.settings.applist_base) {
			t.set(e.appid, !e.is_allowed);
		}
		for (let e of this.settings.applist_custom) {
			t.set(e.appid, !e.is_allowed);
		}
		this.m_mapAppsBlocked = t;
		this.m_ParentalState = e;
		this.EnsureCurrentRouteAllowed();
	}
	get settings() {
		return this.m_ParentalSettings;
	}
	get wasEverEnabled() {
		return this.m_ParentalState.ever_enabled;
	}
	get isEnabled() {
		return !!this.settings.is_enabled;
	}
	get isParentalLocked() {
		return this.m_ParentalState.locked;
	}
	get isRemotePlayLocked() {
		return g.ut.BHasParentalBlocks();
	}
	get isKioskModeLocked() {
		return C.Ih.BKioskModeLocked();
	}
	get hasAnyLocks() {
		return (
			this.isParentalLocked ||
			this.isRemotePlayLocked ||
			this.isRemotePlayLocked ||
			this.isKioskModeLocked
		);
	}
	get hasPassword() {
		return !!this.settings.passwordhash;
	}
	get temporaryEnabledFeaturesExpiration() {
		return this.settings.rtime_temporary_feature_expiration;
	}
	GetFeatureBlockReason(e = 0) {
		if (e !== a.uX && C.Ih.BHasKioskModeFeatureBlock(e)) {
			return 4;
		} else if (e !== a.uX && g.ut.BHasParentalBlock(e)) {
			return 3;
		} else if (e !== a.uX && e) {
			if (
				!this.isParentalLocked ||
				(e !== a.JC &&
					((this.settings.enabled_features |
						this.settings.temporary_enabled_features) &
						(1 << e)) !=
						0)
			) {
				return 0;
			} else if (this.hasPassword) {
				return 1;
			} else {
				return 2;
			}
		} else {
			return 0;
		}
	}
	BIsFeatureBlocked(e) {
		return this.GetFeatureBlockReason(e) != 0;
	}
	BIsAppBlocked(e) {
		return !!this.isParentalLocked && this.BIsAppInBlockList(e);
	}
	BIsAppInBlockList(e) {
		if (this.settings.applist_base_id == 0) {
			return false;
		}
		if (e == 0) {
			return false;
		}
		if (e >= s.y4 && e <= s.Iy) {
			return false;
		}
		return (
			![s.w1, s.g5, s.lm, s.JP, s.wK].includes(e) &&
			(this.m_mapAppsBlocked.get(e) ?? true)
		);
	}
	GetRouteFeature(e, t) {
		for (let r of this.m_RoutesByLength) {
			const n = B6(e, r);
			if (n) {
				const e = this.m_mapRouteToFeature.get(r);
				if (typeof e == "boolean" || typeof e == "number") {
					return e;
				} else {
					AssertMsg(typeof e == "function", "Invalid type in route table");
					return e(t, n);
				}
			}
		}
		return a.uX;
	}
	GetRouteBlockReason(e, t) {
		if (!this.hasAnyLocks) {
			return 0;
		}
		if (C.Ih.BHasKioskModeRouteBlock(e, t)) {
			return 4;
		}
		const r = this.GetRouteFeature(e, t);
		return this.GetFeatureBlockReason(r);
	}
	BIsRouteBlocked(e, t) {
		const r = this.GetRouteBlockReason(e, t);
		return r != null && r != 0;
	}
	GetURLFeature(e) {
		if (e) {
			return d.B7.GetParentalFeatureForFullUrl(e);
		} else {
			return a.JC;
		}
	}
	GetURLBlockedReason(e) {
		return this.GetFeatureBlockReason(this.GetURLFeature(e));
	}
	BIsURLBlocked(e) {
		if (!this.hasAnyLocks) {
			return false;
		}
		return this.GetURLBlockedReason(e) != 0;
	}
	CheckURLRoute(e, t) {
		const r = e?.state?.url;
		return this.GetURLFeature(r);
	}
	CheckAppIDRoute(e, t) {
		const r = t?.params?.appid;
		const n = _.tw.GetAppOverviewByAppID(parseInt(r));
		if (r && n) {
			if (n.BIsAppBlocked()) {
				return a.JC;
			} else {
				return a.uX;
			}
		} else {
			return a.JC;
		}
	}
	CheckBrowserRoute(e, t) {
		let r = e?.state?.strURL || e?.state?.strExpectedURL;
		if (r) {
			return this.GetURLFeature(r);
		} else {
			console.error("Browser route with no state");
			return a.JC;
		}
	}
	CheckKioskModeLocked(e, t) {
		if (this.isKioskModeLocked) {
			return a.JC;
		} else {
			return a.uX;
		}
	}
	async SetAppBlockedState(e, t) {
		if (this.isParentalLocked) {
			return;
		}
		const r = f.Zc.fromObject(this.settings).toObject();
		for (let n of e) {
			const e = r.applist_custom.find((e) => e.appid == n);
			if (e) {
				e.is_allowed = !t;
			} else {
				r.applist_custom.push({
					appid: n,
					is_allowed: !t,
				});
			}
		}
		try {
			await PG(
				this.m_CMInterface.GetServiceTransport(),
				this.m_CMInterface.steamid.ConvertTo64BitString(),
				r,
				{
					password: this.m_ParentalState.strPlaintextPassword,
					sessionid: qw().GetCurrentUser()?.strClientInstanceID,
				},
			);
		} catch {}
	}
}
Cg([i.sH], O.prototype, "m_ParentalSettings", undefined);
Cg([i.sH], O.prototype, "m_mapAppsBlocked", undefined);
Cg([i.sH], O.prototype, "m_ParentalState", undefined);
Cg([i.XI], O.prototype, "UpdateParentalState", null);
Cg([A.oI], O.prototype, "CheckURLRoute", null);
Cg([A.oI], O.prototype, "CheckAppIDRoute", null);
Cg([A.oI], O.prototype, "CheckBrowserRoute", null);
Cg([A.oI], O.prototype, "CheckKioskModeLocked", null);
Cg([i.XI], O.prototype, "SetAppBlockedState", null);
export const jR = new O();
