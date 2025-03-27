import n from "./18057.js";
import i from "./99731.js";
import a, { q3 } from "./90095.js";
import s from "./63696.js";
import { W6, B6 } from "./49519.js";
import l from "./18052.js";
import c from "./83599.js";
import { Sz } from "./52451.js";
import u, { OU } from "./51076.js";
import d from "./72476.js";
import A from "./64581.js";
import p from "./8436.js";
import { WE } from "./93966.js";
import { we } from "./33572.js";
import _, { $2 } from "./96680.js";
import f, { Nr } from "./42318.js";
const g = p;
const b = new c.wd("BrowserBackstack").Debug;
export function N() {
	return (
		<f.tH>
			<S />
			<W />
			<A.B8 />
		</f.tH>
	);
}
function S() {
	const e = $2();
	if (OU(n.BV.GamepadUI.SteamWeb())) {
		return (
			<G
				browser={e.GetStoreBrowser()}
				path={n.BV.GamepadUI.SteamWeb()}
				className={g.MainBrowserContainer}
				hideForModals
				allowUnderlay
			/>
		);
	} else {
		return null;
	}
}
function W() {
	const e = $2();
	const t = OU(n.BV.GamepadUI.ExternalWeb());
	const RRef = s.useRef(undefined);
	if (t || RRef.current) {
		RRef.current ||= e.CreateBrowserView("ExternalWeb", {
			strInitialURL: l.p,
		});
		return (
			<G
				browser={RRef.current}
				external
				path={n.BV.GamepadUI.ExternalWeb()}
				className={g.ExternalBrowserContainer}
				hideForModals
				allowUnderlay
			/>
		);
	} else {
		return null;
	}
}
export const G = Nr((e) => {
	const { browser, path, external, bCanChangeURL, ...A } = e;
	const p = OU(path);
	const g = ((e, t, r) => {
		const n = W6();
		const i = q3(() => e.History);
		const c = q3(() => e.BIsLoadingURL());
		const u = n.location.state?.initialIndex;
		const A = Sz(u);
		const p = u !== A;
		s.useEffect(() => {
			const t = B6(n.location.pathname, r);
			if (!t || !i) {
				return;
			}
			const a = n.location.state || {};
			const s = {};
			if (t && typeof u != "number") {
				s.initialIndex = i.index + 1;
				const t = a.url || d.TS.STORE_BASE_URL;
				e.LoadURL(t);
				b(
					`Browser "${e.name}" loading new session url "${t}" with browser history index ${s.initialIndex}`,
				);
			}
			if (
				t &&
				!p &&
				(typeof a.finalIndex != "number" || a.finalIndex < i.index)
			) {
				s.finalIndex = i.index;
				b(`Browser "${e.name}" updating final index: ${s.finalIndex}`);
			}
			if (Object.keys(s).length > 0) {
				n.replace({
					...n.location,
					state: {
						...a,
						...s,
					},
				});
			}
		}, [r, t, p, n, i, e, u]);
		return s.useCallback(() => {
			const t = n.location.state?.initialIndex === undefined;
			const r = c
				? i.index < n.location.state.initialIndex
				: i.index <= n.location.state.initialIndex;
			const a = i.entries[i.index - 1]?.url === l.p;
			if (t || r || r || a) {
				b(`Browser "${e.name}" and router back()`);
				n.goBack();
			} else {
				b(`Browser "${e.name}" back()`);
			}
			e.GetBrowser().GoBack();
			return true;
		}, [i, n, e, c]);
	})(browser, p, path);
	WE(p ? g : null);
	const _ = we();
	s.useEffect(() => {
		browser?.SetGoBackOverride(g);
		return () => browser?.SetGoBackOverride(undefined);
	}, [browser, g]);
	s.useEffect(
		() =>
			p
				? (_.SetCurrentBrowserAndBackstack(browser, external, bCanChangeURL),
					() => {
						if (
							browser.name === _.GetCurrentBrowserAndBackstack().browser.name
						) {
							_.SetCurrentBrowserAndBackstack(null, false, false);
						}
					})
				: () => {},
		[p, external, bCanChangeURL, browser, _],
	);
	return (
		<i.DS
			browser={browser}
			external={external}
			bCanChangeURL={bCanChangeURL}
			{...A}
			visible={p}
			autoFocus
		/>
	);
});
