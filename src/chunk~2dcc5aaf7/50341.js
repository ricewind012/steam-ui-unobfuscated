import i from "./63696.js";
import { Tt, NZ } from "./89411.js";
import { t0 } from "./34792.js";
import o from "./85243.js";
import l, { FA } from "./46422.js";
export let wR;
function c(e) {
	return e == 1;
}
function m(e) {
	return e == 3;
}
((e) => {
	e.k_EStable = "stable";
	e.k_EBeta = "beta";
	e.k_EPreview = "preview";
})((wR ||= {}));
const u = "Steam Deck Stable";
const d = [
	"Steam Deck Beta",
	"Steam Beta Update",
	"Steam Families Beta",
	"Steam Internal Beta Client",
	"Steam Deck Internal Beta",
];
function A(e) {
	return d.findIndex((t) => t == e) >= 0;
}
function p(e) {
	const t = t0();
	const r = t?.vecAvailableClientBetas?.find((t) => t.nBetaID == e);
	return A(r?.strName);
}
export function jz() {
	const e = Tt();
	const t = t0();
	const r = t.vecAvailableClientBetas.find((e) => e.strName == u);
	const o = t.vecAvailableClientBetas.find((e) => A(e.strName));
	const l = i.useCallback(() => {
		e.SelectOSBranch(1);
		SteamClient.Settings.SelectClientBeta(r.nBetaID);
	}, [e, r]);
	const c = i.useCallback(() => {
		e.SelectOSBranch(3);
		SteamClient.Settings.SelectClientBeta(o.nBetaID);
	}, [e, o]);
	const m = i.useCallback(() => {
		e.SelectOSBranch(5);
		SteamClient.Settings.SelectClientBeta(o.nBetaID);
	}, [e, o]);
	return [
		{
			eChannel: wR.k_EStable,
			label: "#Settings_UpdateChannel_Stable",
			description: "#Settings_UpdateChannel_Stable_Description",
			fnOptIn: l,
			event_tag: "stablechannel",
		},
		{
			eChannel: wR.k_EBeta,
			label: "#Settings_UpdateChannel_Beta",
			description: "#Settings_UpdateChannel_Beta_Description",
			fnOptIn: c,
			event_tag: "betachannel",
		},
		{
			eChannel: wR.k_EPreview,
			label: "#Settings_UpdateChannel_Preview",
			description: "#Settings_UpdateChannel_Preview_Description",
			fnOptIn: m,
			event_tag: "previewchannel",
		},
	];
}
export function cM() {
	const e = t0();
	return p(e?.nSelectedBetaID ?? o.E8);
}
export function Ls() {
	const e = jz();
	const t = NZ().eBranch;
	const r = t0();
	const i = r?.nSelectedBetaID ?? o.E8;
	const l = ((e) => {
		const t = t0();
		const r = t?.vecAvailableClientBetas?.find((t) => t.nBetaID == e);
		return e == o.E8 || r?.strName == u;
	})(i);
	const d = p(i);
	if (c(t) && l) {
		return e.find((e) => e.eChannel == wR.k_EStable);
	} else if (m(t) && d) {
		return e.find((e) => e.eChannel == wR.k_EBeta);
	} else if (m(t) && d) {
		return e.find((e) => e.eChannel == wR.k_EPreview);
	} else {
		return undefined;
	}
}
export function Wk() {
	const e = Ls();
	if (e) {
		return [e.event_tag];
	} else {
		return [];
	}
}
export const BV = i.memo(() => {
	const e = Tt();
	const t = cM();
	const r = NZ();
	const [n] = FA();
	i.useEffect(() => {
		const i = c(r.eBranch);
		if (t && i && !n) {
			e.SelectOSBranch(3);
		}
	}, [e, t, r, n]);
	return null;
});
