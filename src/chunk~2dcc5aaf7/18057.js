import n from "./37449.js";
import i from "./58437.js";
import a, { useRef, useEffect, createContext, useContext } from "./63696.js";
import s from "./87935.js";
import { Dn } from "./45328.js";
import l from "./43691.js";
import { br } from "./18869.js";
import b, { sC } from "./93861.js";
import y from "./49171.js";
import S, { zy, W6 } from "./49519.js";
import w from "./39941.js";
import B from "./94361.js";
import { w as w_1 } from "./49455.js";
export let AX = i.AX;
export let R_ = i.R_;
export let VT = i.VT;
export let Qx = i.Qx;
export let BV = n.B;
export let tf = i.tf;
export let CQ = n.C;
export let KV = i.KV;
export function bG(e, ...t) {
	return Qt(s.B7.ResolveURL(e, ...t));
}
export function vT() {
	return Qt(`${s.B7.GetStoreURL()}explore/new`);
}
export function ut() {
	return Qt(`${s.B7.GetStoreURL()}genre/Free%20to%20Play/`);
}
export function ZQ() {
	return Qt(`${s.B7.GetStoreURL()}specials#tab=TopSellers`);
}
export function DV() {
	return Qt(`${s.B7.GetStoreURL()}fwlink?id=steamdeck_manual`);
}
export function FI() {
	const e = Qt(`${s.B7.ResolveURL("GameHubDiscussions", 1675200)}/1/`);
	const t = Qt(`${l.TS.COMMUNITY_BASE_URL}groups/bigpicture/discussions/4/`);
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
	return Qt(Dn(e, t));
}
export function Qt(e) {
	const t = br().SteamWeb;
	return a.useCallback(
		(r) => {
			t(e || r);
		},
		[t, e],
	);
}
export function jb(e) {
	const t = br().ExternalWeb;
	return a.useCallback(
		(r) => {
			t(e || r);
		},
		[t, e],
	);
}
const I = new (require(/*webcrack:missing*/ "./83599.js").wd)("Backstack");
export const Qc = "router-backstack";
export function Gl(e) {
	const { children, initialPath } = e;
	const n = ((e) => {
		const t = (() => {
			0;
			return useRef(undefined).current;
		})();
		const r = useRef(undefined);
		if (!r.current) {
			try {
				r.current = sC(
					t || {
						initialEntries: [e],
					},
				);
			} catch (t) {
				console.error(t);
				r.current = sC({
					initialEntries: [e],
				});
			}
		}
		const r_current = r.current;
		((e) => {
			useEffect(() => {
				let t = true;
				const r = {};
				SteamClient.Messaging.RegisterForMessages(
					"PostToLibrary",
					(n, i, a) => {
						if (i === Qc && t) {
							const t = ((e, t) => {
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
							) {}
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
						case "POP": {
							break;
						}
						case "REPLACE": {
							r[n] = t.key;
							break;
						}
						default: {
							console.error(`Unhandled router action ${i}`);
						}
					}
					n = t.key;
					((e) => {
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
		})(r_current);
		return r_current;
	})(initialPath);
	return (
		<S.Ix history={n}>
			{children}
			<G />
			<L name="SteamRouter" />
		</S.Ix>
	);
}
export function Kw(e) {
	const { children, basename } = e;
	return (
		<w.Kd basename={basename}>
			{children}
			<G />
			<L name={`SteamBrowserRouter ${basename}`} />
		</w.Kd>
	);
}
export function m_(e) {
	const { children, appid, pid, ...i } = e;
	return (
		<S.fS {...i}>
			{children}
			<L name={`Overlay ${appid}`} />
		</S.fS>
	);
}
export function NM(e) {
	const { children, ...r } = e;
	return (
		<S.fS {...r}>
			{children}
			<L name="SteamMemoryRouter" />
		</S.fS>
	);
}
const DContext = createContext(false);
function N(e) {
	const { children, routePath, disabled } = e;
	const i = useContext(DContext);
	a.useEffect(() => {
		if (!disabled) {
			if (i) {
				console.error(
					`Detected nested use of route tracking at "${routePath}". Ignoring double report.`,
				);
			} else {
				B.y.ReportRouteMatch(routePath);
			}
		}
	}, [routePath, i, disabled]);
	return <DContext.Provider value>{children}</DContext.Provider>;
}
export function Jh(e) {
	const { children, ...r } = e;
	return (
		<S.qh {...r}>
			{(e) => {
				return (
					<N routePath={e.match?.path} disabled={!e.match}>
						{((r = e), typeof children == "function" ? children(r) : children)}
					</N>
				);
				var r;
			}}
		</S.qh>
	);
}
function G() {
	const e = zy();
	const t = W6();
	useEffect(() => {
		y.z.UpdateRoutingInfo(t, e);
	}, [t, e]);
	return null;
}
const O = createContext(null);
export function Cc(e) {
	const { children, initialRoute, initialEntries } = e;
	const i = initialEntries || [initialRoute];
	const s = W6();
	return (
		<O.Provider value={s}>
			<S.fS initialIndex={i.length - 1} initialEntries={i}>
				{children}
			</S.fS>
		</O.Provider>
	);
}
function L(e) {
	const { name } = e;
	const r = W6();
	useEffect(
		() =>
			r.listen((e, r) => {
				I.Debug(`${name}:`, r, e);
			}),
		[name, r],
	);
	return null;
}
export function jB() {
	const e = W6();
	w_1(
		e && "entries" in e,
		"History object does not look like a MemoryHistory, which the calling code expects!",
	);
	return e;
}
