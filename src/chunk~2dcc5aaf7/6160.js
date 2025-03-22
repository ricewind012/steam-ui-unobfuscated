var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./3142.js");
var l = require("./51354.js");
var c = require("./76356.js");
var m = require("./61398.js");
var u = require("./81884.js");
var d = require("./47296.js");
var A = require(/*webcrack:missing*/ "./79769.js");
var p = require(/*webcrack:missing*/ "./52451.js");
var g = require("./46422.js");
export const ax = -1;
class C {
	constructor() {
		(0, i.Gn)(this);
	}
	m_streamingAppid = null;
	m_bLaunchOptionContinued = false;
	m_launchStatus = (0, A.Jc)();
	m_eLaunchResult = d.l.k_ERemoteClientLaunchOK;
	m_sLaunchResult = "";
	m_bStreamingLaunchResultDialogVisible = false;
	Init() {
		SteamClient.Streaming.RegisterForStreamingShowIntro(
			this.StreamingShowIntro,
		);
		SteamClient.Streaming.RegisterForStreamingShowLaunchOptions(
			this.StreamingShowLaunchOptions,
		);
		SteamClient.Streaming.RegisterForStreamingShowEula(this.StreamingShowEula);
		SteamClient.Streaming.RegisterForStreamingLaunchComplete(
			this.StreamingLaunchComplete,
		);
		SteamClient.Streaming.RegisterForStreamingClientFinished(
			this.StreamingClientFinished,
		);
		SteamClient.Streaming.RegisterForStreamingClientStarted(
			this.StreamingClientStarted,
		);
		SteamClient.Streaming.RegisterForStreamingClientLaunchProgress(
			this.StreamingLaunchProgress,
		);
	}
	StreamingShowIntro(e, t) {
		(0, o._f)(e, t);
	}
	StreamingShowLaunchOptions(e, t) {
		this.m_bLaunchOptionContinued = false;
		(0, u.lZ)(
			{
				appid: e,
				continue: (e) => {
					this.m_bLaunchOptionContinued = true;
					SteamClient.Streaming.StreamingSetLaunchOption(e);
				},
				onCancel: () => {
					if (!this.m_bLaunchOptionContinued) {
						SteamClient.Streaming.CancelStreamGame();
					}
				},
				ownerWindow: g.oy.ActiveWindowInstance?.BrowserWindow,
			},
			t,
		);
	}
	StreamingShowEula(e) {
		const t = () => SteamClient.Streaming.CancelStreamGame();
		const r = new l.b(
			e,
			() => SteamClient.Streaming.StreamingContinueStreamGame(),
			t,
			(e, t, r) => SteamClient.Streaming.AcceptStreamingEULA(e, t, r),
		);
		r.Start();
		(0, m.Fe)({
			appid: e,
			eulaWorkflow: r,
			onCancel: t,
			ownerWindow: g.oy.ActiveWindowInstance?.BrowserWindow,
		});
	}
	StreamingLaunchComplete(e, t) {
		console.log("launch result:", t, "code:", e);
		this.m_eLaunchResult = e;
		this.m_sLaunchResult = t;
		switch (e) {
			case d.l.k_ERemoteClientLaunchOK:
			case d.l.k_ERemoteClientLaunchCanceled:
				this.m_bStreamingLaunchResultDialogVisible = false;
				break;
			default:
				this.m_bStreamingLaunchResultDialogVisible = true;
		}
		this.OnStreamingUIDone();
	}
	StreamingClientFinished(e, t) {
		console.log("streaming result:", t, "code:", e);
		this.OnStreamingUIDone();
	}
	StreamingClientStarted(e) {
		console.log("streaming client started for", e);
		this.m_streamingAppid = e;
		c.I.AddActiveLaunch(this.m_streamingAppid.toString(), ax);
	}
	StreamingLaunchProgress(e, t, r, n) {
		console.log(
			"streaming client progress action:",
			e,
			"task:",
			t,
			"done:",
			r,
			"total:",
			n,
		);
		this.m_launchStatus.Set({
			strTaskName: e,
			strTaskDetails: t,
			numDone: r,
			numTotal: n,
		});
	}
	OnStreamingUIDone() {
		if (this.m_streamingAppid) {
			c.I.RemoveActiveLaunch(this.m_streamingAppid.toString());
			this.m_launchStatus.Set(null);
			this.m_streamingAppid = null;
		}
	}
	get launchStatus() {
		return this.m_launchStatus;
	}
	get eLaunchResult() {
		return this.m_eLaunchResult;
	}
	get sLaunchResult() {
		return this.m_sLaunchResult;
	}
	HideStreamingLaunchResultDialog() {
		this.m_bStreamingLaunchResultDialogVisible = false;
	}
	get bStreamingLaunchResultDialogVisible() {
		return this.m_bStreamingLaunchResultDialogVisible;
	}
}
(0, n.Cg)([i.sH], C.prototype, "m_eLaunchResult", undefined);
(0, n.Cg)([i.sH], C.prototype, "m_sLaunchResult", undefined);
(0, n.Cg)(
	[i.sH],
	C.prototype,
	"m_bStreamingLaunchResultDialogVisible",
	undefined,
);
(0, n.Cg)([p.oI], C.prototype, "StreamingShowIntro", null);
(0, n.Cg)([p.oI], C.prototype, "StreamingShowLaunchOptions", null);
(0, n.Cg)([p.oI], C.prototype, "StreamingShowEula", null);
(0, n.Cg)([i.XI.bound], C.prototype, "StreamingLaunchComplete", null);
(0, n.Cg)([p.oI], C.prototype, "StreamingClientFinished", null);
(0, n.Cg)([p.oI], C.prototype, "StreamingClientStarted", null);
(0, n.Cg)([p.oI], C.prototype, "StreamingLaunchProgress", null);
export const Gc = new C();
export function R8() {
	return (0, p.gc)(Gc.launchStatus);
}
export function o6() {
	return [(0, a.q3)(() => Gc.eLaunchResult), (0, a.q3)(() => Gc.sLaunchResult)];
}
export function wh() {
	return [
		(0, a.q3)(() => Gc.bStreamingLaunchResultDialogVisible),
		s.useCallback(() => {
			Gc.HideStreamingLaunchResultDialog();
		}, []),
	];
}
