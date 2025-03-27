import n from "./12176.js";
import i from "./25399.js";
import a, { I } from "./61416.js";
import s, { jE } from "./3715.js";
import { n as n_1 } from "./26667.js";
import { KV } from "./46382.js";
import c from "./43691.js";
export function Pt() {
	const e = KV();
	return I({
		queryKey: ["AccountPrivateApps"],
		queryFn: async () => {
			const t = n.w.Init(i.Fn);
			const r = await i.c4.GetPrivateAppList(e, t);
			return new Set(r.Body().private_apps(true).appids());
		},
		enabled: !!c.iA.accountid,
	});
}
export function Uy(e) {
	const { data } = Pt();
	return !!c.iA.accountid && !!e && (data ? data.has(e) : undefined);
}
export function h0(e, t = true) {
	const { data } = Pt();
	return !!e && (data ? !e.some((e) => data.has(e) != t) : undefined);
}
function A(e) {
	e.invalidateQueries({
		queryKey: ["AccountPrivateApps"],
	});
}
export function JT(e, t) {
	e.setQueryData(["AccountPrivateApps"], () => new Set(t));
}
export function bD(e) {
	const t = KV();
	const r = jE();
	return n_1({
		mutationFn: async (r) => C(t, [e], r),
		onSuccess: (t, n) => _(r, [e], n),
		onError() {
			A(r);
		},
	});
}
export function DT() {
	const e = KV();
	const t = jE();
	return n_1({
		mutationFn: async (t) => {
			const { rgAppIDs, bPrivate } = t;
			return C(e, rgAppIDs, bPrivate);
		},
		onSuccess: (e, r) => {
			const { rgAppIDs, bPrivate } = r;
			_(t, rgAppIDs, bPrivate);
		},
		onError() {
			A(t);
		},
	});
}
async function C(e, t, r) {
	const a = n.w.Init(i.i9);
	a.Body().set_appids(t.slice());
	a.Body().set_private(r);
	const s = await i.c4.ToggleAppPrivacy(e, a);
	if (!s.BSuccess()) {
		throw s.GetErrorMessage();
	}
}
function _(e, t, r) {
	e.setQueryData(["AccountPrivateApps"], (e) => {
		if (!e) {
			return;
		}
		const n = new Set(e);
		t.forEach((e) => {
			if (r) {
				n.add(e);
			} else {
				n.delete(e);
			}
		});
		return n;
	});
}
