var n = require(/*webcrack:missing*/ "./90095.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./61510.js");
var s = require("./23024.js");
var o = require(/*webcrack:missing*/ "./36885.js");
var l = require(/*webcrack:missing*/ "./34629.js");
var c = require(/*webcrack:missing*/ "./83957.js");
var m = c;
var u = require(/*webcrack:missing*/ "./89193.js");
var d = require(/*webcrack:missing*/ "./93960.js");
var A = require(/*webcrack:missing*/ "./79769.js");
var p = require(/*webcrack:missing*/ "./52451.js");
var g = require(/*webcrack:missing*/ "./72476.js");
class h {
	constructor() {
		(0, u.Gn)(this);
	}
	giveaway_id = undefined;
	seconds_until_drawing = undefined;
	rtime_start = undefined;
	rtime_end = undefined;
	closed = undefined;
	winner_count = undefined;
	BIsValid() {
		return this.giveaway_id !== undefined && this.giveaway_id !== null;
	}
	BStarted() {
		return (
			this.BIsValid() &&
			(this.seconds_until_drawing >= 0 || this.winner_count > 0)
		);
	}
	clone() {
		const e = new h();
		e.giveaway_id = this.giveaway_id;
		e.seconds_until_drawing = this.seconds_until_drawing;
		e.rtime_start = this.rtime_start;
		e.rtime_end = this.rtime_end;
		e.closed = this.closed;
		e.winner_count = this.winner_count;
		return e;
	}
}
(0, l.Cg)([u.sH], h.prototype, "giveaway_id", undefined);
(0, l.Cg)([u.sH], h.prototype, "seconds_until_drawing", undefined);
(0, l.Cg)([u.sH], h.prototype, "rtime_start", undefined);
(0, l.Cg)([u.sH], h.prototype, "rtime_end", undefined);
(0, l.Cg)([u.sH], h.prototype, "closed", undefined);
(0, l.Cg)([u.sH], h.prototype, "winner_count", undefined);
class C {
	constructor() {
		(0, u.Gn)(this);
	}
	m_mapGiveawayIDToNextDrawInfo = new Map();
	m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
	m_bLoadedFromConfig = false;
	m_mapNextDrawChangeCallback = new Map();
	GetKey(e, t) {
		return e + "_" + t;
	}
	GetInfoByInstance(e, t) {
		return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(e, t));
	}
	GetNextDrawChangeCallback(e) {
		if (!this.m_mapNextDrawChangeCallback.has(e)) {
			this.m_mapNextDrawChangeCallback.set(e, new A.lu());
		}
		return this.m_mapNextDrawChangeCallback.get(e);
	}
	CopyToGiveaway(e, t) {
		if (t.closed != e.closed) {
			t.closed = e.closed;
		}
		if (t.giveaway_id != e.giveaway_id) {
			t.giveaway_id = e.giveaway_id;
		}
		if (t.rtime_start != e.rtime_start) {
			t.rtime_start = e.rtime_start;
		}
		if (t.rtime_end != e.rtime_end) {
			t.rtime_end = e.rtime_end;
		}
		if (t.winner_count != e.winner_count) {
			t.winner_count = e.winner_count;
		}
		if (t.seconds_until_drawing != e.seconds_until_drawing) {
			t.seconds_until_drawing = e.seconds_until_drawing;
		}
	}
	async ReloadGiveaway(e, t) {
		if (!e) {
			return null;
		}
		let r = g.TS.STORE_BASE_URL + "prizes/nextdraw/" + e;
		let n = null;
		let i = {
			origin: self.origin,
		};
		n = await m.get(r, {
			params: i,
		});
		(0, u.h5)(() => {
			if (!this.m_mapGiveawayIDToNextDrawInfo.has(e)) {
				this.m_mapGiveawayIDToNextDrawInfo.set(e, new h());
			}
			this.CopyToGiveaway(n.data, this.m_mapGiveawayIDToNextDrawInfo.get(e));
			if (t !== undefined) {
				const r = this.GetKey(e, t);
				if (!this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(r)) {
					this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(r, new h());
				}
				this.CopyToGiveaway(
					n.data,
					this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(r),
				);
			}
		});
		this.GetNextDrawChangeCallback(e).Dispatch(
			this.m_mapGiveawayIDToNextDrawInfo.get(e),
		);
		return this.m_mapGiveawayIDToNextDrawInfo.get(e);
	}
	static s_Singleton;
	static Get() {
		if (!C.s_Singleton) {
			C.s_Singleton = new C();
			C.s_Singleton.Init();
			if (g.TS.WEB_UNIVERSE == "dev") {
				window.g_GiveawayStore = C.s_Singleton;
			}
		}
		return C.s_Singleton;
	}
	Init() {
		if (!this.m_bLoadedFromConfig) {
			let e = (0, g.Tc)("giveawaynextdraw", "application_config");
			if (e && e.giveaway_id) {
				let t = new h();
				this.CopyToGiveaway(e, t);
				this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
			}
			this.m_bLoadedFromConfig = true;
		}
	}
}
(0, l.Cg)([u.sH], C.prototype, "m_mapGiveawayIDToNextDrawInfo", undefined);
(0, l.Cg)([u.XI], C.prototype, "CopyToGiveaway", null);
class _ {
	m_intervalID;
	m_intervalCountDownID;
	static s_GlobalInstance = 0;
	m_myInstanceNumber = 0;
	constructor() {
		this.m_myInstanceNumber = _.s_GlobalInstance;
		_.s_GlobalInstance += 1;
	}
	ClearRefreshInterval() {
		if (this.m_intervalID) {
			window.clearInterval(this.m_intervalID);
			this.m_intervalID = undefined;
		}
	}
	ClearCountDown() {
		if (this.m_intervalCountDownID) {
			window.clearInterval(this.m_intervalCountDownID);
			this.m_intervalCountDownID = undefined;
		}
	}
	SetupRefreshDataInterval(e, t) {
		this.ClearRefreshInterval();
		if (!e.closed) {
			let r =
				e.seconds_until_drawing <= 0 && e.winner_count == 0 ? 60000 : 5000;
			this.m_intervalID = window.setInterval(t, r);
		}
	}
	SetupCountDown(e, t) {
		if (e > 0) {
			this.m_intervalCountDownID = window.setInterval(t, 1000);
		}
	}
}
function f(e, t) {
	const r = C.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
	r.seconds_until_drawing -= 1;
	if (r.seconds_until_drawing == 0) {
		t.ClearCountDown();
	}
}
function b(e) {
	const [t] = (0, i.useState)(new _());
	const r = (0, p.CH)();
	(0, i.useEffect)(() => {
		C.Get()
			.ReloadGiveaway(e, t.m_myInstanceNumber)
			.then((n) => {
				t.SetupRefreshDataInterval(n, () =>
					(function (e, t) {
						const r = C.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
						if (
							r &&
							r.BIsValid() &&
							r.seconds_until_drawing <= 0 &&
							!r.closed
						) {
							t.ClearCountDown();
							C.Get()
								.ReloadGiveaway(e, t.m_myInstanceNumber)
								.then((r) => {
									t.SetupCountDown(r.seconds_until_drawing, () => f(e, t));
								});
						}
					})(e, t),
				);
				t.SetupCountDown(n.seconds_until_drawing, () => f(e, t));
				r();
			});
		return () => {
			t.ClearRefreshInterval();
			t.ClearCountDown();
		};
	}, [t, e, r]);
	const a = C.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
	const [s, o, l] = (0, n.q3)(() => [
		a?.winner_count,
		a?.closed,
		a?.seconds_until_drawing,
	]);
	return {
		bLoadingGiveawayInfo:
			!a || a.giveaway_id == null || !a.BStarted() || s === undefined,
		winner_count: s,
		closed: o,
		seconds_until_drawing: l,
	};
}
(0, l.Cg)([d.o], _.prototype, "ClearRefreshInterval", null);
(0, l.Cg)([d.o], _.prototype, "ClearCountDown", null);
(0, l.Cg)([d.o], _.prototype, "SetupRefreshDataInterval", null);
(0, l.Cg)([d.o], _.prototype, "SetupCountDown", null);
var y = require("./5047.js");
var S = require("./43397.js");
var w = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var v = require(/*webcrack:missing*/ "./53807.js");
var I = require("./1929.js");
var E = I;
export function P(e) {
	const { latestAnnouncement: t } = e;
	if (t?.type == "giveaway_draw") {
		return i.createElement(T, {
			latestWinner: t,
		});
	} else {
		return null;
	}
}
function T(e) {
	const {
		latestWinner: t,
		className: r,
		strActionButton: n,
		strActionClassname: a,
	} = e;
	const s = t.winners_info?.length > 0 ? t.winners_info[0].accountid : 0;
	const [l, c] = i.useState(s);
	const m = (0, v.L$)(
		`${(0, o.mJ)()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
	);
	const u = (0, v.L$)(
		`${(0, o.mJ)()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
	);
	const d = b(t.giveaway_gid);
	let A = d.bLoadingGiveawayInfo || d.closed ? null : d.seconds_until_drawing;
	const p = s === g.iA.accountid;
	i.useEffect(() => {
		if (l != s) {
			setTimeout(() => c(s), 1500);
		}
	}, [s, l]);
	const h =
		t.winners_info?.length > 0 && Boolean(t.winners_info[0].persona)
			? t.winners_info[0].persona
			: (0, Localize)("#GA2022_UnknownPersonaName");
	return i.createElement(
		S.uU,
		{
			href: "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
			className: r,
		},
		i.createElement(
			"div",
			{
				className: (0, w.A)({
					[E.GiveawayWinnerBox]: true,
					[E.GiveawayWinnerAnnounced]: l === s,
				}),
			},
			i.createElement(
				"div",
				{
					className: E.GiveawayWinnerBoxLeft,
				},
				i.createElement("img", {
					className: E.GiveawayWinnerArt,
					src: m,
				}),
			),
			i.createElement(
				"div",
				{
					className: E.GiveawayWinnerBoxRight,
				},
				Boolean(l !== s) &&
					i.createElement(
						"div",
						{
							className: (0, w.A)(E.GiveawayWinnerText),
						},
						LocalizeReact(
							"#GA2022_Congrats_Deck_Unknown",
							i.createElement("br", null),
						),
					),
				Boolean(l === s) &&
					i.createElement(
						"div",
						{
							className: (0, w.A)(
								E.GiveawayWinnerText,
								E.GiveawayWinnerAnnounced,
							),
						},
						LocalizeReact(
							p ? "#GA2022_Congrats_Deck_Me" : "#GA2022_Congrats_Deck_OTher",
							h,
							i.createElement("br", null),
						),
					),
				Boolean(A > 0) &&
					i.createElement(
						"div",
						{
							className: E.GiveawayWinnerCountdown,
						},
						LocalizeReact("#GA2022_Congrats_NextDraw", A),
					),
			),
			i.createElement("img", {
				className: E.GiveawayWinnerQuestion,
				src: u,
			}),
			Boolean(n) &&
				i.createElement(
					"div",
					{
						className: a,
					},
					p ? (0, Localize)("#GA2022_YouWonNextSteps") : n,
				),
		),
	);
}
export function V(e) {
	const { gidGiveaway: t, stream: r } = e;
	const o = (function (e, t) {
		const [r, o] = (0, n.q3)(() => [
			t?.steamid,
			s.BroadcastWatchStore.GetBroadcast(t?.steamid)?.m_ulBroadcastID,
		]);
		const [l, c] = i.useState(null);
		i.useEffect(() => {
			let e = null;
			if (r || o) {
				e = a.q.Get().GetOrCreateChat(o, r);
				e.StartForSteamID(r, o);
				c(e);
			}
			return () => {
				if (e) {
					e.Stop();
					c(null);
				}
			};
		}, [r, o]);
		const m = (0, n.q3)(() => l?.m_latestAnnouncement || null);
		if (m?.type == "giveaway_draw") {
			const t = m;
			if (t.giveaway_gid == e) {
				return t;
			}
		}
		return null;
	})(t, r);
	const l = (0, y.h)("GameAwardDrop2022");
	let c = null;
	let m = E.GiveawayRegisterButton;
	if (g.iA.logged_in) {
		if (l?.registered) {
			c = (0, Localize)("#GA2022_AlreadyRegistered");
			m = E.GiveawayAlreadyRegistered;
		} else {
			c = (0, Localize)("#GA2022_RegisterToWin");
		}
	} else {
		c = (0, Localize)("#GA2022_RegisterLoginToWin");
	}
	if (o) {
		return i.createElement(T, {
			latestWinner: o,
			className: E.InViewerBar,
			strActionButton: c,
			strActionClassname: m,
		});
	} else {
		return null;
	}
}
