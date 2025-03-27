import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import n from "./91703.js";
import i, { useEffect } from "./63696.js";
import a, { W6 } from "./49519.js";
import o, { w } from "./49455.js";
import l from "./83599.js";
import { hL } from "./42898.js";
const m = new l.wd("Backstack").Debug;
export function yq() {
	const e = W6();
	const {
		OnNavigateBack,
		refGlobalBackOverride,
		rgSuppressForwardBackNavigation,
	} = i.useContext(n.GL);
	return i.useCallback(() => {
		if (
			!refGlobalBackOverride.current ||
			refGlobalBackOverride.current() !== true
		) {
			for (const e of rgSuppressForwardBackNavigation) {
				if (e()) {
					m("Ignoring back navigation - currently suppressed");
					return;
				}
			}
			OnNavigateBack.Dispatch();
			e.goBack();
		}
	}, [
		e,
		OnNavigateBack,
		refGlobalBackOverride,
		rgSuppressForwardBackNavigation,
	]);
}
export function kV() {
	const e = W6();
	const { rgSuppressForwardBackNavigation } = i.useContext(n.GL);
	return i.useCallback(() => {
		for (const e of rgSuppressForwardBackNavigation) {
			if (e()) {
				m("Ignoring forward navigation - currently suppressed");
				return;
			}
		}
		e.goForward();
	}, [e, rgSuppressForwardBackNavigation]);
}
export function LB(e, t) {
	const r = W6();
	const { OnNavigateBack, refGlobalBackOverride } = i.useContext(n.GL);
	return i.useCallback(() => {
		if (
			!refGlobalBackOverride.current ||
			refGlobalBackOverride.current() !== true
		) {
			OnNavigateBack.Dispatch();
			((e, t, r, n) => {
				let i = false;
				const a = () => {
					i = true;
					r();
				};
				e.addEventListener("popstate", a);
				t.goBack();
				setTimeout(() => {
					e.removeEventListener("popstate", a);
					if (!i) {
						n();
					}
				}, 200);
			})(e, r, () => OnNavigateBack.Dispatch(), t);
		}
	}, [e, r, OnNavigateBack, refGlobalBackOverride, t]);
}
export function pC(e) {
	const { OnNavigateBack } = i.useContext(n.GL);
	hL(OnNavigateBack, e);
}
export function WE(e) {
	const { refGlobalBackOverride } = i.useContext(n.GL);
	useEffect(() => {
		if (e) {
			w(
				!refGlobalBackOverride.current,
				"Two callers registering useGlobalBackOverride",
			);
			refGlobalBackOverride.current = e;
			return () => {
				if (refGlobalBackOverride.current == e) {
					refGlobalBackOverride.current = undefined;
				}
			};
		}
	}, [refGlobalBackOverride, e]);
}
export function VM(e) {
	const { rgSuppressForwardBackNavigation } = i.useContext(n.GL);
	useEffect(() => {
		if (e) {
			rgSuppressForwardBackNavigation.push(e);
			return () => {
				FindAndRemove(rgSuppressForwardBackNavigation, e);
			};
		}
	}, [rgSuppressForwardBackNavigation, e]);
}
