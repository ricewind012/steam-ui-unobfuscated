import {
	GetConfiguredLocale,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";
import r from "./63696.js";
import i from "./7470.js";
import s, { q3 } from "./90095.js";
import o, { A } from "./90765.js";
import c from "./3586.js";
import u from "./26853.js";
import m from "./72476.js";
import d from "./80986.js";
import { ID } from "./44846.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
import f from "./37905.js";
import b from "./92228.js";
import C from "./75144.js";
import v from "./42318.js";
import M from "./46382.js";
import { bs } from "./52451.js";
import y from "./88696.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import B from "./91435.js";
import x from "./24295.js";
import L from "./72905.js";
function a(e, t) {
	let n = document.createElement("link");
	n.href = e;
	n.type = "text/css";
	n.rel = "stylesheet";
	let t_parentElement = t.parentElement;
	t_parentElement.insertBefore(n, t);
	t_parentElement.removeChild(t);
}
const l = c;
const _ = "steam-dev-configparams";
function w(e) {
	return e === "true" || (e !== "false" && (Number(e) || e));
}
const K = r.lazy(() =>
	Promise.all([require.e(8732), require.e(9858)]).then(
		require.bind(require, 26326),
	),
);
const R = r.lazy(() =>
	Promise.all([require.e(8732), require.e(9858), require.e(3714)]).then(
		require.bind(require, 26965),
	),
);
const I = "is-first-client-load";
export function Q() {
	return sessionStorage.getItem(I) !== "false";
}
function D() {
	return (
		<div className={A(l.Container, l.PreloadThrobber)}>
			<u.t size="xlarge" static />
			<div className={l.ThreeDots}>
				<div className={A(l.Dot, l.Dot1)} />
				<div className={A(l.Dot, l.Dot2)} />
				<div className={A(l.Dot, l.Dot3)} />
			</div>
		</div>
	);
}
function F(e) {
	const { cm } = e;
	let n = null;
	if (m.TS.IN_LOGIN || m.TS.IN_LOGIN_REFRESH) {
		n = (
			<r.Suspense fallback={<D />}>
				<v.tH>
					<L.A domain="steamclient">
						<m.ss IN_DESKTOPUI={false} IN_GAMEPADUI={false} IN_VR={false}>
							<B.EO>
								<K cm={cm} />
							</B.EO>
						</m.ss>
					</L.A>
				</v.tH>
			</r.Suspense>
		);
	} else {
		AssertMsg(
			m.TS.IN_STEAMUI_SHARED_CONTEXT,
			"nosteamuisharedjscontext is no longer supported!",
		);
		n = (
			<r.Suspense fallback={null}>
				<R cm={cm} />
			</r.Suspense>
		);
	}
	return (
		<C.s debug steamUI>
			<O cm={cm}>{n}</O>
		</C.s>
	);
}
function O(e) {
	const { cm, children } = e;
	const i = r.useCallback(() => cm, [cm]);
	const o = bs(() => new y.A());
	const a = q3(() => cm.steamid.ConvertTo64BitString());
	const c = r.useMemo(
		() => ({
			useActiveAccount: () => a,
		}),
		[a],
	);
	return (
		<x.Rh value={c}>
			<M.VQ useActiveCMInterface={i} useStorage={o}>
				{children}
			</M.VQ>
		</x.Rh>
	);
}
SteamClient._internal.RegisterForStyleChanges((e) => {
	const t = "https://steamloopback.host/";
	let n = [];
	let r = document.querySelectorAll('link[rel="stylesheet"]');

	for (let s of r) {
		let s_href = s.href;
		let a = "";
		if (s_href.startsWith(t)) {
			a = s_href.substr(27);
		}
		let c = a.indexOf("?");
		if (c >= 0) {
			a = a.substr(0, c);
		}
		a = decodeURI(a).replace(/\\/g, "/");
		for (let t of e) {
			if (a != t) {
				continue;
			}
			const e = a.startsWith("/") ? a : `/${a}`;
			n.push({
				sheet: s,
				newAbsolute: e,
			});
			break;
		}
	}

	for (let e of n) {
		a(e.newAbsolute, e.sheet);
	}
});
(() => {
	window.cm = new b.ij();
	(() => {
		let e = "";
		if (
			["index.html", "sp.html"].some((e) =>
				window.location.pathname.includes(e),
			)
		) {
			e = window.location.search;
			sessionStorage.setItem(_, e);
			console.log("Storing new config params", e);
		} else {
			e = sessionStorage.getItem(_);
			console.log("Loading previous config params", e);
		}
		if (e) {
			const t = d.parse(e.slice(1));
			for (const e in t) {
				if (Object.getOwnPropertyNames(m.TS).includes(e)) {
					m.TS[e] = w(t[e]);
				} else if (Object.getOwnPropertyNames(m.iA).includes(e)) {
					m.iA[e] = w(t[e]);
				} else if (Object.getOwnPropertyNames(f.w).includes(e)) {
					f.w[e] = w(t[e]);
				} else {
					console.error("Got unknown config property", e);
				}
			}
			const n = GetConfiguredLocale();
			console.log("setting locale:", n);
			if (n) {
				document.documentElement.setAttribute("lang", n);
				LocalizationManager.SetPreferredLocales([n]);
			}
		}
		if (m.TS.EREALM == ESteamRealm.k_ESteamRealmUnknown) {
			m.TS.EREALM = ID(m.TS.LAUNCHER_TYPE)
				? ESteamRealm.k_ESteamRealmChina
				: ESteamRealm.k_ESteamRealmGlobal;
		}
	})();
	m.TS.IN_STEAMUI = true;
	(() => {
		let e = true;
		if (sessionStorage.getItem(I) && m.TS.CLIENT_SESSION > 0) {
			const t = 30;
			if (Date.now() / 1000 > m.TS.CLIENT_SESSION + t) {
				e = false;
			}
		}
		sessionStorage.setItem(I, e ? "true" : "false");
	})();
	const e = document.getElementById("root");
	i.H(e).render(<F cm={window.cm} />);
})();
