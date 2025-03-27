import n, { Cg } from "./34629.js";
import i from "./8573.js";
import a from "./95773.js";
import s from "./17385.js";
import o from "./44234.js";
import l, { Gn } from "./89193.js";
export function xE(e, t, r, n, a) {
	let s;
	let l = i.b.InitFromAccountID(e);
	if (a) {
		s = `steam://joinlobby/${t}/${a}/${l.ConvertTo64BitString()}`;
	} else if (n) {
		s = o.TS.IN_MOBILE
			? `https://s.team/remoteplay/connect/${l.ConvertTo64BitString()}?appid=${t}&${n}`
			: `steam://remoteplay/connect/${l.ConvertTo64BitString()}?appid=${t}&${n}`;
	} else {
		s = `steam://rungame/${t}/${l.ConvertTo64BitString()}`;
		if (r !== undefined) {
			s += `/${encodeURIComponent(r)}`;
		}
	}
	return s;
}
class m {
	unAccountIDInviter;
	rtTimestamp;
	appID;
	connectString;
	remoteplayString;
	lobbyID;
	bDismissed = undefined;
	bAccepted = undefined;
	constructor(e, t, r, n, i, a, s) {
		Gn(this);
		this.unAccountIDInviter = e;
		this.rtTimestamp = t;
		this.appID = r;
		this.connectString = n;
		this.remoteplayString = i;
		this.lobbyID = s;
		this.bDismissed = a;
		this.bAccepted = false;
	}
	get inviteString() {
		return xE(
			this.unAccountIDInviter,
			this.appID,
			this?.connectString,
			this?.remoteplayString,
			this?.lobbyID,
		);
	}
	AcceptGameInvite() {
		a.xm.OpenURLInBrowser(this.inviteString, s.m);
		this.bAccepted = true;
		a.xm.ChatStore.GameInviteStore.RecordDismissTime(this);
		if (this.remoteplayString) {
			SteamClient.Messaging.PostMessage(
				"FriendsUI",
				"AcceptedRemotePlayInvite",
				JSON.stringify({
					id: this.appID,
				}),
			);
		} else {
			SteamClient.Messaging.PostMessage(
				"FriendsUI",
				"AcceptedGameInvite",
				JSON.stringify({
					id: this.appID,
				}),
			);
		}
	}
	DismissInvite() {
		this.bDismissed = true;
		a.xm.ChatStore.GameInviteStore.RecordDismissTime(this);
	}
	get bOld() {
		return a.xm.GetServerRTime32() - this.rtTimestamp > 21600;
	}
}
Cg([l.sH], m.prototype, "bDismissed", undefined);
Cg([l.sH], m.prototype, "bAccepted", undefined);
Cg([l.XI], m.prototype, "AcceptGameInvite", null);
Cg([l.XI], m.prototype, "DismissInvite", null);
const u = {
	dismisstimes: {},
};
const d = "GameInvites";
export class e7 {
	m_mapGameInvites = new Map();
	m_mapDismissedInvites = l.sH.map();
	Init() {
		a.xm.SettingsStore.GetObjectFromLocalStorageWhenReady(d, u).then((e) => {
			let t = new Date();
			t.setDate(t.getDate() - 14);
			this.m_mapDismissedInvites.clear();
			for (let r in e.dismisstimes) {
				let n = parseInt(r);
				let i = e.dismisstimes[r];
				if (!(new Date(i * 1000) < t)) {
					this.m_mapDismissedInvites.set(n, i);
				}
			}
		});
	}
	RegisterGameInvite(e, t, r, n, i, a) {
		let s = this.m_mapGameInvites.get(e);
		if (!s) {
			s = new Map();
			this.m_mapGameInvites.set(e, s);
		}
		let o = s.get(t);
		if (!o) {
			let l = false;
			let c = this.m_mapDismissedInvites.get(e);
			if (c) {
				l = t <= c;
			}
			o = new m(e, t, r, n, i, l, a);
			s.set(t, o);
			s.forEach((e) => {
				if (e.rtTimestamp < t) {
					e.DismissInvite();
				}
			});
		}
		return o;
	}
	m_mapInviteByCode = new Map();
	RecordDismissTime(e) {
		let t = this.m_mapDismissedInvites.get(e.unAccountIDInviter);
		if (!t || !(t > e.rtTimestamp)) {
			this.m_mapDismissedInvites.set(e.unAccountIDInviter, e.rtTimestamp);
			this.WriteToLocalStorage();
		}
	}
	WriteToLocalStorage() {
		a.xm.SettingsStore.StoreObjectInLocalStorage(d, {
			dismisstimes: this.m_mapDismissedInvites,
		});
	}
}
