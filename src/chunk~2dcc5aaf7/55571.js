var n = require(/*webcrack:missing*/ "./12176.js");
var i = require("./25399.js");
var a = require(/*webcrack:missing*/ "./61416.js");
var s = require(/*webcrack:missing*/ "./3715.js");
var o = require(/*webcrack:missing*/ "./26667.js");
var l = require(/*webcrack:missing*/ "./46382.js");
var c = require(/*webcrack:missing*/ "./43691.js");
export function Pt() {
	const e = (0, l.KV)();
	return (0, a.I)({
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
	const { data: t } = Pt();
	return !!c.iA.accountid && !!e && (t ? t.has(e) : undefined);
}
export function h0(e, t = true) {
	const { data: r } = Pt();
	return !!e && (r ? !e.some((e) => r.has(e) != t) : undefined);
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
	const t = (0, l.KV)();
	const r = (0, s.jE)();
	return (0, o.n)({
		mutationFn: async (r) => C(t, [e], r),
		onSuccess: (t, n) => _(r, [e], n),
		onError() {
			A(r);
		},
	});
}
export function DT() {
	const e = (0, l.KV)();
	const t = (0, s.jE)();
	return (0, o.n)({
		mutationFn: async (t) => {
			const { rgAppIDs: r, bPrivate: n } = t;
			return C(e, r, n);
		},
		onSuccess: (e, r) => {
			const { rgAppIDs: n, bPrivate: i } = r;
			_(t, n, i);
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
