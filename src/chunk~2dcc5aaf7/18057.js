export let AX = i.AX;
export let R_ = i.R_;
export let VT = i.VT;
export let Qx = i.Qx;
export let BV = n.B;
export let tf = i.tf;
export let CQ = n.C;
export let KV = i.KV;
var n = require("./37449.js");
var i = require("./58437.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./87935.js");
var o = require(/*webcrack:missing*/ "./45328.js");
var l = require(/*webcrack:missing*/ "./43691.js");
var c = require("./18869.js");
export function bG(e, ...t) {
	return Qt(s.B7.ResolveURL(e, ...t));
}
export function vT() {
	return Qt(s.B7.GetStoreURL() + "explore/new");
}
export function ut() {
	return Qt(s.B7.GetStoreURL() + "genre/Free%20to%20Play/");
}
export function ZQ() {
	return Qt(s.B7.GetStoreURL() + "specials#tab=TopSellers");
}
export function DV() {
	return Qt(s.B7.GetStoreURL() + "fwlink?id=steamdeck_manual");
}
export function FI() {
	const e = Qt(s.B7.ResolveURL("GameHubDiscussions", 1675200) + "/1/");
	const t = Qt(l.TS.COMMUNITY_BASE_URL + "groups/bigpicture/discussions/4/");
	if (l.TS.ON_DECK) {
		return e;
	} else {
		return t;
	}
}
export function JE() {
	return Qt(s.B7.GetHelpURL());
}
export function t6(e, t = null) {
	return Qt((0, o.Dn)(e, t));
}
export function Qt(e) {
	const t = (0, c.br)().SteamWeb;
	return a.useCallback(
		(r) => {
			t(e || r);
		},
		[t, e],
	);
}
export function jb(e) {
	const t = (0, c.br)().ExternalWeb;
	return a.useCallback(
		(r) => {
			t(e || r);
		},
		[t, e],
	);
}
var b = require(/*webcrack:missing*/ "./93861.js");
var y = require("./49171.js");
var S = require(/*webcrack:missing*/ "./49519.js");
var w = require(/*webcrack:missing*/ "./39941.js");
var B = require("./94361.js");
var v = require(/*webcrack:missing*/ "./49455.js");
const I = new (require(/*webcrack:missing*/ "./83599.js").wd)("Backstack");
export const Qc = "router-backstack";
export function Gl(e) {
	const { children: t, initialPath: r } = e;
	const n = (function (e) {
		const t = (function () {
			0;
			return (0, a.useRef)(undefined).current;
		})();
		const r = (0, a.useRef)(undefined);
		if (!r.current) {
			try {
				r.current = (0, b.sC)(
					t || {
						initialEntries: [e],
					},
				);
			} catch (t) {
				console.error(t);
				r.current = (0, b.sC)({
					initialEntries: [e],
				});
			}
		}
		const n = r.current;
		(function (e) {
			(0, a.useEffect)(() => {
				let t = true;
				const r = {};
				SteamClient.Messaging.RegisterForMessages(
					"PostToLibrary",
					(n, i, a) => {
						if (i === Qc && t) {
							const t = (function (e, t) {
								let r = t;
								while (r in e) {
									r = e[r];
								}
								return r;
							})(r, a);
							let n;
							for (
								n = e.entries.length - 1;
								n >= 0 && e.entries[n].key !== t;
								n--
							);
							if (n === -1) {
								console.error(
									`Could not find backstack entry "${a}" the client told us to navigate to.`,
								);
								return;
							}
							e.go(n - e.index);
						}
					},
				);
				let n = "";
				const i = e.listen((t, i) => {
					switch (i) {
						case "PUSH":
						case "POP":
							break;
						case "REPLACE":
							r[n] = t.key;
							break;
						default:
							console.error(`Unhandled router action ${i}`);
					}
					n = t.key;
					(function (e) {
						const t = {
							initialEntries: e.entries.map(b.AO),
							initialIndex: e.index,
						};
						window.history.replaceState(
							{
								...(window.history.state ?? {}),
								memoryhistory: t,
							},
							"",
						);
					})(e);
				});
				return () => {
					t = false;
					i();
				};
			}, [e]);
		})(n);
		return n;
	})(r);
	return a.createElement(
		S.Ix,
		{
			history: n,
		},
		t,
		a.createElement(G, null),
		a.createElement(L, {
			name: "SteamRouter",
		}),
	);
}
export function Kw(e) {
	const { children: t, basename: r } = e;
	return a.createElement(
		w.Kd,
		{
			basename: r,
		},
		t,
		a.createElement(G, null),
		a.createElement(L, {
			name: "SteamBrowserRouter " + r,
		}),
	);
}
export function m_(e) {
	const { children: t, appid: r, pid: n, ...i } = e;
	return a.createElement(
		S.fS,
		{
			...i,
		},
		t,
		a.createElement(L, {
			name: "Overlay " + r,
		}),
	);
}
export function NM(e) {
	const { children: t, ...r } = e;
	return a.createElement(
		S.fS,
		{
			...r,
		},
		t,
		a.createElement(L, {
			name: "SteamMemoryRouter",
		}),
	);
}
const D = (0, a.createContext)(false);
function N(e) {
	const { children: t, routePath: r, disabled: n } = e;
	const i = (0, a.useContext)(D);
	a.useEffect(() => {
		if (!n) {
			if (i) {
				console.error(
					`Detected nested use of route tracking at "${r}". Ignoring double report.`,
				);
			} else {
				B.y.ReportRouteMatch(r);
			}
		}
	}, [r, i, n]);
	return a.createElement(
		D.Provider,
		{
			value: true,
		},
		t,
	);
}
export function Jh(e) {
	const { children: t, ...r } = e;
	return a.createElement(
		S.qh,
		{
			...r,
		},
		(e) => {
			return a.createElement(
				N,
				{
					routePath: e.match?.path,
					disabled: !e.match,
				},
				((r = e), typeof t == "function" ? t(r) : t),
			);
			var r;
		},
	);
}
function G() {
	const e = (0, S.zy)();
	const t = (0, S.W6)();
	(0, a.useEffect)(() => {
		y.z.UpdateRoutingInfo(t, e);
	}, [t, e]);
	return null;
}
const O = (0, a.createContext)(null);
export function Cc(e) {
	const { children: t, initialRoute: r, initialEntries: n } = e;
	const i = n || [r];
	const s = (0, S.W6)();
	return a.createElement(
		O.Provider,
		{
			value: s,
		},
		a.createElement(
			S.fS,
			{
				initialIndex: i.length - 1,
				initialEntries: i,
			},
			t,
		),
	);
}
function L(e) {
	const { name: t } = e;
	const r = (0, S.W6)();
	(0, a.useEffect)(
		() =>
			r.listen((e, r) => {
				I.Debug(t + ":", r, e);
			}),
		[t, r],
	);
	return null;
}
export function jB() {
	const e = (0, S.W6)();
	(0, v.w)(
		e && "entries" in e,
		"History object does not look like a MemoryHistory, which the calling code expects!",
	);
	return e;
}
