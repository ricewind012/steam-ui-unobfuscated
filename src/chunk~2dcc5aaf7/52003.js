var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./5128.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require("./21866.js");
var o = require(/*webcrack:missing*/ "./8573.js");
export class w extends i.Q {
	m_steamID;
	m_tabset;
	m_info = undefined;
	m_bShowWatchPromptDialog = false;
	m_watchPromptInitialFriend = undefined;
	constructor(e, t) {
		super();
		(0, a.Gn)(this);
		this.m_steamID = o.b.InitFromAccountID(t);
		this.m_tabset = e;
		this.InitInfo();
	}
	async InitInfo() {
		this.m_info = (await w.GetBroadcastWatchStore()).StartInfo(
			this.m_steamID.ConvertTo64BitString(),
		);
	}
	static async GetBroadcastWatchStore() {
		const { BroadcastWatchStore: e } = await require
			.e(7653)
			.then(require.bind(require, 23024));
		return e;
	}
	GetSteamID() {
		return this.m_steamID;
	}
	GetTabName() {
		const e = this.m_info && this.m_info.m_strTitle;
		if (!e && s.td.bValid) {
			return s.td.name;
		} else {
			return e;
		}
	}
	GetUniqueID() {
		return "br" + this.m_steamID.GetAccountID();
	}
	OnTabFocus() {}
	InternalOnTabActivate() {}
	OnTabDeactivate() {}
	OnTabClosed() {
		(async () => {
			(await w.GetBroadcastWatchStore()).StopInfo(this.m_info);
		})();
	}
	IsVoiceActive() {
		return false;
	}
	GetUnreadMessageCount() {
		return 0;
	}
	IsTabForChat(e) {
		return false;
	}
	GetChatView() {
		return null;
	}
	IsBroadcast() {
		return true;
	}
	ShowWatchPromptDialog(e) {
		this.m_bShowWatchPromptDialog = true;
		this.m_watchPromptInitialFriend = e;
	}
	HideWatchPromptDialog() {
		this.m_bShowWatchPromptDialog = false;
		this.m_watchPromptInitialFriend = undefined;
	}
}
(0, n.Cg)([a.sH], w.prototype, "m_info", undefined);
(0, n.Cg)([a.sH], w.prototype, "m_bShowWatchPromptDialog", undefined);
(0, n.Cg)([a.sH], w.prototype, "m_watchPromptInitialFriend", undefined);
(0, n.Cg)([a.XI], w.prototype, "ShowWatchPromptDialog", null);
(0, n.Cg)([a.XI], w.prototype, "HideWatchPromptDialog", null);
