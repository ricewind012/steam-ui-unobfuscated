export var $b;
var i = require(/*webcrack:missing*/ "./34629.js");
var s = require("./93960.js");
var o = require("./73870.js");
var a = require("./79769.js");
(function (e) {
	e[(e.Debug = 0)] = "Debug";
	e[(e.Info = 1)] = "Info";
	e[(e.Warning = 2)] = "Warning";
	e[(e.Error = 3)] = "Error";
})(($b ||= {}));
export class wd {
	m_sName;
	m_fnIdGenerator = undefined;
	constructor(e, t) {
		this.m_sName = e;
		this.m_fnIdGenerator = t;
		fi.Get().RegisterLogName(e);
	}
	Debug(...e) {
		this.Log($b.Debug, ...e);
	}
	Info(...e) {
		this.Log($b.Info, ...e);
	}
	Warning(...e) {
		this.Log($b.Warning, ...e);
	}
	Error(...e) {
		this.Log($b.Error, ...e);
	}
	Assert(e, ...t) {
		if (!e) {
			this.Log($b.Error, "Assertion failed:", ...t);
		}
	}
	IsDebugEnabled() {
		return fi.Get().IsDebugLogEnabled(this.m_sName);
	}
	Log(e, ...t) {
		const n = fi.Get().IsDebugLogEnabled(this.m_sName);
		if (e == $b.Debug && !n) {
			return;
		}
		let i = this.m_sName;
		const s = this.m_fnIdGenerator?.() ?? null;
		if (s != null) {
			i += " (" + s + ")";
		}
		u(e, n, fi.Get().IncludeBacktraceInLog, i, this.m_sName, ...t);
	}
}
(0, i.Cg)([s.o], wd.prototype, "Debug", null);
(0, i.Cg)([s.o], wd.prototype, "Info", null);
(0, i.Cg)([s.o], wd.prototype, "Warning", null);
(0, i.Cg)([s.o], wd.prototype, "Error", null);
(0, i.Cg)([s.o], wd.prototype, "Assert", null);
export class fi {
	static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
	static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
	static s_Singleton = null;
	m_Storage = null;
	m_setKnownDebugLogs = new Set();
	m_setEnabledDebugLogs = new Set();
	m_bIncludeBacktraceInLog = false;
	m_SettingsChangedCallback = new a.lu();
	m_bLoading = false;
	constructor() {
		this.m_Storage = new o.A();
		this.LoadSettings();
	}
	LogAsLogManager(...e) {
		u(
			$b.Info,
			true,
			this.IncludeBacktraceInLog,
			"LogManager",
			"LogManager",
			...e,
		);
	}
	async LoadSettings() {
		this.m_bLoading = true;
		this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
			fi.k_IncludeBacktraceInLog_StorageKey,
		));
		const e = await this.m_Storage?.GetObject(fi.k_EnabledLogNames_StorageKey);
		if (Array.isArray(e)) {
			this.m_setEnabledDebugLogs = new Set(e);
			for (const t of e) {
				this.m_setKnownDebugLogs.add(t);
			}
			this.LogAsLogManager(
				"Loaded debug enabled log names. Will print log messages for:",
				Array.from(this.m_setEnabledDebugLogs),
			);
		} else {
			0;
		}
		this.m_bLoading = false;
		this.m_SettingsChangedCallback.Dispatch();
	}
	async SaveSettings() {
		await this.m_Storage?.StoreObject(
			fi.k_EnabledLogNames_StorageKey,
			Array.from(this.m_setEnabledDebugLogs),
		);
		await this.m_Storage?.StoreObject(
			fi.k_IncludeBacktraceInLog_StorageKey,
			this.m_bIncludeBacktraceInLog,
		);
		this.LogAsLogManager(
			"Saved enabled debug log names. Will print log messages for:",
			Array.from(this.m_setEnabledDebugLogs),
		);
	}
	static Get() {
		if (fi.s_Singleton == null) {
			fi.s_Singleton = new fi();
		}
		return fi.s_Singleton;
	}
	get Loading() {
		return this.m_bLoading;
	}
	get LogNames() {
		return this.m_setKnownDebugLogs.values();
	}
	RegisterLogName(e) {
		this.m_setKnownDebugLogs.add(e);
	}
	IsLogName(e) {
		return this.m_setKnownDebugLogs.has(e);
	}
	IsDebugLogEnabled(e) {
		return this.m_setEnabledDebugLogs.has(e);
	}
	async ToggleDebugLogEnabled(e) {
		this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
	}
	async SetDebugLogEnabled(e, t) {
		if (t) {
			this.m_setEnabledDebugLogs.add(e);
		} else {
			this.m_setEnabledDebugLogs.delete(e);
		}
		this.m_SettingsChangedCallback.Dispatch();
		await this.SaveSettings();
	}
	async SetAllDebugLogsEnabled(e) {
		this.m_setEnabledDebugLogs = e
			? new Set(this.m_setKnownDebugLogs)
			: new Set();
		this.m_SettingsChangedCallback.Dispatch();
		await this.SaveSettings();
	}
	RegisterForSettingsChanges(e) {
		return this.m_SettingsChangedCallback.Register(e);
	}
	get IncludeBacktraceInLog() {
		return this.m_bIncludeBacktraceInLog;
	}
	async SetIncludeBacktraceInLog(e) {
		this.m_bIncludeBacktraceInLog = e;
		this.m_SettingsChangedCallback.Dispatch();
		await this.SaveSettings();
	}
}
function u(e, t, n, i, s, ...o) {
	const a = (function (e) {
		let t = 0;
		for (let n = 0; n < e.length; n++) {
			t = e.charCodeAt(n) + ((t << 5) - t);
		}
		return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
	})(s).map((e, t) =>
		Math.round(
			Math.max(0, Math.min(255, ((e / 255 - 0.5) * 0.8 + 0.15) * 255)),
		),
	);
	const c = ((l = a)[0] * 299 + l[1] * 587 + l[2] * 114) / 1000 >= 128;
	var l;
	let u = i;
	if (n) {
		u =
			(function (e) {
				switch (e) {
					case $b.Debug:
						return String.fromCodePoint(128027);
					case $b.Info:
						return String.fromCodePoint(8505);
					case $b.Warning:
						return String.fromCodePoint(9888);
					case $b.Error:
						return String.fromCodePoint(128165);
				}
			})(e) +
			" " +
			u;
	}
	const m = o.length >= 1 && typeof o[0] == "string" && o[0].includes("%c");
	const d = m && o.shift();
	let h;
	h = t
		? [
				`%c${u}%c:${m ? " %c" + d : ""}`,
				`color: ${c ? "black" : "white"}; background: rgb(${a.join(",")}); padding: 0 1ch; border-radius: 3px;`,
				"color: transparent; margin-right: -1ch",
				...(m ? [""] : []),
				...o,
			]
		: o;
	if (n) {
		console.groupCollapsed(...h);
		console.trace("Callstack");
		console.groupEnd();
	} else {
		switch (e) {
			case $b.Debug:
			case $b.Info:
				console.log(...h);
				break;
			case $b.Warning:
				console.warn(...h);
				break;
			case $b.Error:
				if (console.clogerror) {
					console.clogerror(3, ...h);
				} else {
					console.error(...h);
				}
		}
	}
}
const m = () => [...fi.Get().LogNames].sort();
const d = (e, t) => {
	if (fi.Get().IsLogName(e)) {
		fi.Get().SetDebugLogEnabled(e, t);
	} else {
		console.warn(`No log named "${e}", available logs:`, m());
	}
};
window.DebugLogEnable = (...e) => e.forEach((e) => d(e, true));
window.DebugLogDisable = (...e) => e.forEach((e) => d(e, false));
window.DebugLogEnableAll = () => fi.Get().SetAllDebugLogsEnabled(true);
window.DebugLogDisableAll = () => fi.Get().SetAllDebugLogsEnabled(false);
window.DebugLogEnableBacktrace = () => fi.Get().SetIncludeBacktraceInLog(true);
window.DebugLogDisableBacktrace = () =>
	fi.Get().SetIncludeBacktraceInLog(false);
window.DebugLogNames = m;
window.EnableSteamConsole = (e = true) =>
	fi.Get().SetDebugLogEnabled("SteamClient", e);
