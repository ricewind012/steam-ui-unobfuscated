import { memo, useCallback, useEffect } from "react";

import { t0 } from "./34792.js";
import { FA } from "./46422.js";
import { E8 } from "./85243.js";
import {
	NZ as useCurrentOSBranchObserver,
	Tt as useUpdaterObserver,
} from "./89411.js";
import { EOSBranch } from "@steamclient_types/Updates.js";

export enum wR {
	k_EStable = "stable",
	k_EBeta = "beta",
	k_EPreview = "preview",
}

function BIsBranchRelease(eBranch: EOSBranch) {
	return eBranch == EOSBranch.Release;
}

function BIsBranchBeta(eBranch: EOSBranch) {
	return eBranch == EOSBranch.Beta;
}

const k_strSteamDeckStableBranchName = "Steam Deck Stable";
const k_vecBetaBranchNames = [
	"Steam Deck Beta",
	"Steam Beta Update",
	"Steam Families Beta",
	"Steam Internal Beta Client",
	"Steam Deck Internal Beta",
];

function BIsBranchNameBeta(name: string) {
	return k_vecBetaBranchNames.findIndex((t) => t == name) >= 0;
}

function p(e) {
	const t = t0();
	const r = t?.vecAvailableClientBetas?.find((t) => t.nBetaID == e);
	return BIsBranchNameBeta(r?.strName);
}

interface NewType {
	eChannel: wR;
	label: string;
	description: string;
	fnOptIn: () => void;
	event_tag: string;
}

export function jz(): NewType[] {
	const updater = useUpdaterObserver();
	const t = t0();
	const r = t.vecAvailableClientBetas.find(
		(e) => e.strName == k_strSteamDeckStableBranchName,
	);
	const o = t.vecAvailableClientBetas.find((e) => BIsBranchNameBeta(e.strName));
	const setReleaseBranch = useCallback(() => {
		updater.SelectOSBranch(EOSBranch.Release);
		SteamClient.Settings.SelectClientBeta(r.nBetaID);
	}, [updater, r]);
	const setBetaBranch = useCallback(() => {
		updater.SelectOSBranch(EOSBranch.Beta);
		SteamClient.Settings.SelectClientBeta(o.nBetaID);
	}, [updater, o]);
	const setPreviewBranch = useCallback(() => {
		updater.SelectOSBranch(EOSBranch.Preview);
		SteamClient.Settings.SelectClientBeta(o.nBetaID);
	}, [updater, o]);

	return [
		{
			eChannel: wR.k_EStable,
			label: "#Settings_UpdateChannel_Stable",
			description: "#Settings_UpdateChannel_Stable_Description",
			fnOptIn: setReleaseBranch,
			event_tag: "stablechannel",
		},
		{
			eChannel: wR.k_EBeta,
			label: "#Settings_UpdateChannel_Beta",
			description: "#Settings_UpdateChannel_Beta_Description",
			fnOptIn: setBetaBranch,
			event_tag: "betachannel",
		},
		{
			eChannel: wR.k_EPreview,
			label: "#Settings_UpdateChannel_Preview",
			description: "#Settings_UpdateChannel_Preview_Description",
			fnOptIn: setPreviewBranch,
			event_tag: "previewchannel",
		},
	];
}

export function cM() {
	const e = t0();
	return p(e?.nSelectedBetaID ?? E8);
}

export function Ls() {
	const e = jz();
	const t = useCurrentOSBranchObserver().eBranch;
	const r = t0();
	const i = r?.nSelectedBetaID ?? E8;
	const l = ((e) => {
		const t = t0();
		const r = t?.vecAvailableClientBetas?.find((t) => t.nBetaID == e);
		return e == E8 || r?.strName == k_strSteamDeckStableBranchName;
	})(i);
	const d = p(i);
	if (BIsBranchRelease(t) && l) {
		return e.find((e) => e.eChannel == wR.k_EStable);
	} else if (BIsBranchBeta(t) && d) {
		return e.find((e) => e.eChannel == wR.k_EBeta);
	} else if (BIsBranchBeta(t) && d) {
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

export const BV = memo(() => {
	const updater = useUpdaterObserver();
	const t = cM();
	const r = useCurrentOSBranchObserver();
	const [n] = FA();
	useEffect(() => {
		const i = BIsBranchRelease(r.eBranch);
		if (t && i && !n) {
			updater.SelectOSBranch(3);
		}
	}, [updater, t, r, n]);
	return null;
});
