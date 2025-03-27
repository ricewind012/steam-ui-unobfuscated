import { Localize } from "../../actual_src/utils/localization.js";
import { P0 } from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i from "./64608.js";
import a, { Ll } from "./95979.js";
import s, { dm } from "./34428.js";
import c from "./22091.js";
import m from "./95311.js";
import u from "./4406.js";
import d, { e_ as e } from "./34792.js";
import A from "./85243.js";
import p, { gk, FA } from "./46422.js";
import g from "./10606.js";
import h, { pg } from "./13869.js";
import C, { $ as $_2 } from "./27756.js";
import _, { gc, vJ } from "./52451.js";
import f from "./35488.js";
import b, { CI, uI, hf } from "./72476.js";
import y, { KS } from "./93440.js";
import S, { Tt, j9, Qc, KZ, NZ, hi, Bv } from "./89411.js";
import w, { cZ } from "./81969.js";
import B, { jz, Ls } from "./50341.js";
import v from "./34789.js";
import E from "./46375.js";
import M from "./87935.js";
import { Qt, jb } from "./18057.js";
import { R7 } from "./11131.js";
import k from "./81247.js";
import D, { q3 } from "./90095.js";
import N from "./26853.js";
import F from "./63367.js";
import G, { Nr } from "./42318.js";
import O from "./78110.js";
import P from "./95572.js";
import L from "./83571.js";
import z from "./28351.js";
import x from "./13897.js";
import U from "./37086.js";
import W from "./2306.js";
const I = v;
function V() {
	const [e, t] = gk();
	const r = (() => {
		const e = q3(() => d.rV.settings?.bIsValveEmail);
		return b.TS.ON_DECK || e || e || b.TS.DEV_MODE;
	})();
	return n.createElement(
		n.Fragment,
		null,
		r &&
			n.createElement(W.C, {
				feature: 7,
				label: (0, Localize)("#Settings_System_EnableDeveloperMode"),
				checked: e,
				onChange: t,
			}),
	);
}
export function hd() {
	const e = ne();
	const t = d.rV.settings?.bIsInClientBeta;
	if (e || t) {
		return n.createElement(
			i.G5,
			null,
			n.createElement(i.lr, null, (0, Localize)("#Settings_RecoveryActions")),
			t && n.createElement(X, null),
			e && n.createElement(z.Ax, null),
		);
	} else {
		return null;
	}
}
function j(e) {
	if (b.TS.ON_DECK) {
		const t = () => pg(n.createElement(le, null), window);
		return n.createElement(
			U.oN,
			{
				feature: 7,
				label: (0, Localize)("#Settings_System_Hostname"),
				onClick: t,
			},
			e.hostname,
		);
	}
	return n.createElement(i.T8, {
		name: (0, Localize)("#Settings_System_Hostname"),
		value: e.hostname,
	});
}
export function jI() {
	const e = Ll();
	if (e) {
		return n.createElement(Q, {
			systemInfo: e,
		});
	} else {
		return null;
	}
}
function Q(e) {
	const { systemInfo: t } = e;
	const r = R7();
	const [a] = e("b24HourClock");
	const m = gc(d.rV.CurrentTimeZoneID);
	const u = vJ(() => SteamClient.Settings.GetAvailableTimeZones(), []);
	const A = u?.find((e) => e.timezoneID == m);
	const p = A ? cZ(A) : "";
	const g = t.nSteamVersion > 0 ? t.nSteamVersion.toString() : "local";
	const C = parseInt(1741736707);
	const f = C && (0, P0)(C, a, p);
	const y = `${t.nCPUHz / 1000 / 1000 / 1000} GHz`;
	const S = dm(t.nSystemRAMSizeMB * 1024 * 1024);
	const B = dm(t.nVideoRAMSizeMB * 1024 * 1024);
	let v = c.Fd.Get()
		.GetControllers()
		.find((e) => e.eControllerType == 4);
	const I = t.sSteamBuildDate;
	const k = CI() ? " GMT+0000" : " GMT-0800";
	const D = Date.parse(I + k) / 1000;
	const N = D ? (0, P0)(D, a, p) : I;
	const F = v?.strFirmwareBuildTime;
	const G = Math.floor(Date.parse(`${F} GMT+0000`) / 1000);
	const O = G ? (0, P0)(G, a, p) : F;
	const P = Qt(
		`${M.B7.ResolveURL("StoreAccount")}steamdeckcomponents/?serialnumber=${
			v?.strSerialNumber
		}&componentcode=${v?.strChipID}`,
	);
	const L = CI();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			i.G5,
			null,
			n.createElement(i.lr, null, (0, Localize)("#Settings_System_About")),
			n.createElement(j, {
				hostname: t.sHostname,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_OSName"),
				value: t.sOSName,
			}),
			L &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_OSCodename"),
					value: t.sOSCodename,
				}),
			L &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_OSVariantId"),
					value: t.sOSVariantId,
				}),
			L &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_OSVersionId"),
					value: t.sOSVersionId,
				}),
			L &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_OSBuildId"),
					value: t.sOSBuildId,
				}),
			L &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_KernalVersion"),
					value: t.sKernelVersion,
				}),
			v &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_DeckControllerVersion"),
					value: O,
				}),
			v &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_DeckSerialNumber"),
					value: v.strSerialNumber,
				}),
			v &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_DeckChipID"),
					value: v.strChipID,
				}),
			L &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_BIOSVersion"),
					value: t.sBIOSVersion,
					bottomSeparator: "standard",
				}),
			n.createElement(E.Xo, null),
		),
		n.createElement(
			i.G5,
			null,
			n.createElement(i.lr, null, (0, Localize)("#Settings_System_Steam")),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_SteamVersion"),
				value: g,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_SteamBuildDate"),
				value: N,
			}),
			f &&
				n.createElement(i.T8, {
					name: (0, Localize)("#Settings_System_SteamWebBuildDate"),
					value: f,
				}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_SteamAPIVersion"),
				value: t.sSteamAPI,
			}),
			n.createElement(
				i.xh,
				{
					onClick: () => pg(n.createElement(oe, null), r.ownerWindow ?? window),
					bottomSeparator: "standard",
				},
				(0, Localize)("#ThirdPartyLicenses_Link"),
			),
		),
		n.createElement(
			i.G5,
			null,
			n.createElement(i.lr, null, (0, Localize)("#Settings_System_Hardware")),
			v &&
				n.createElement(
					i.xh,
					{
						onClick: P,
						bottomSeparator: "standard",
					},
					(0, Localize)("#Settings_System_Components"),
				),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_CPUVendor"),
				value: t.sCPUVendor,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_CPUName"),
				value: t.sCPUName,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_CPUFrequency"),
				value: y,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_CPUPhysicalCores"),
				value: t.nCPUPhysicalCores.toString(),
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_CPULogicalCores"),
				value: t.nCPULogicalCores.toString(),
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_RAMSize"),
				value: S,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_VideoCard"),
				value: t.sVideoCardName,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_VideoDriver"),
				value: t.sVideoDriverVersion,
			}),
			n.createElement(i.T8, {
				name: (0, Localize)("#Settings_System_VRAMSize"),
				value: B,
				bottomSeparator: "standard",
			}),
		),
	);
}
const Z = new RegExp(/steam\s*(pal|deck)|Local/i);
export function oE() {
	return q3(() => d.rV.settings?.bChangeBetaEnabled);
}
function K(e) {
	const t = Tt();
	const [r] = gk();
	const [i] = FA();
	const a = (r && i) || e.bForceAdvanced;
	j9();
	Qc();
	let s = KZ();
	let l = NZ();
	const c = n.useCallback(
		(e) =>
			e.eBranch == 0 && l.eBranch == 0
				? e.sRawName == l.sRawName
				: e.eBranch == l.eBranch,
		[l],
	);
	if (s.length == 0) {
		return null;
	}
	let m = s.find(c);
	if (m == null) {
		console.error("current OS branch not in branch list");
		s = s.slice();
		s.push(l);
		m = s.find(c);
	}
	s.sort();
	const u = [];
	for (const e of s) {
		const t = hi(e);
		if (!t) {
			continue;
		}
		const r = Bv(e);
		if (e == m || !r || !r || a) {
			u.push({
				label: t,
				data: e,
			});
		}
	}
	if (u.length == 0) {
		return null;
	} else {
		return n.createElement(x.B, {
			feature: 7,
			label: (0, Localize)("#Settings_Beta_OSUpdateChannel"),
			rgOptions: u,
			selectedOption: m,
			onChange: (e) => t.SelectOSBranch(e.data.eBranch, e.data.sRawName),
		});
	}
}
function X(e) {
	const t = Tt();
	const r = R7();
	const a = n.useCallback(() => {
		$_2({
			strDescription: (0, Localize)("#Settings_BetaReset_Restart"),
			fnOnOK: () =>
				(async () => {
					SteamClient.Settings.SelectClientBeta(A.E8);
					await t.SelectOSBranch(1);
				})(),
			bSystemRestart: true,
			ownerWindow: r.ownerWindow,
		});
	}, [t, r.ownerWindow]);
	return n.createElement(
		i.xh,
		{
			label: (0, Localize)("#Settings_BetaReset"),
			description: (0, Localize)("#Settings_BetaReset_Description"),
			onClick: a,
			bottomSeparator: e.bottomSeparator,
		},
		(0, Localize)("#Settings_BetaReset_Button"),
	);
}
export function lm(e) {
	const { label: t, description: r, contextMenuPositionOptions: i } = e;
	const a = uI();
	const s = (0, Localize)("#Settings_Beta_None");
	const l = d.rV.settings.nSelectedBetaID ?? A.E8;
	const c = n.useRef(undefined);
	const m = R7();
	const u = [];
	const p = d.rV.settings.vecAvailableClientBetas ?? [];
	if (p.length == 0 || l == A.E8 || l == A.E8 || !a) {
		u.push({
			label: s,
			data: A.E8.toString(),
		});
	}
	u.push(
		...p
			.filter((e) =>
				((e) =>
					!e.strName.toLowerCase().includes("legacy") &&
					(!b.TS.ON_DECK || Z.test(e.strName)))(e),
			)
			.map((e) => ({
				label: e.strName,
				data: e.nBetaID.toString(),
			})),
	);
	const g = n.useCallback(() => {
		c.current.SetSelectedOption(l.toString());
	}, [c, l]);
	const h = n.useCallback((e) => {
		SteamClient.Settings.SelectClientBeta(e);
	}, []);
	const _ = n.useCallback(
		(e) => {
			if (a && e == A.E8) {
				window.setTimeout(() => g(), 0);
			} else if (e != l) {
				$_2({
					strDescription: (0, Localize)("#Settings_Beta_NeedsRestart"),
					fnOnOK: () => h(e),
					fnOnCancel: g,
					ownerWindow: m.ownerWindow,
				});
			}
		},
		[a, h, g, l, m.ownerWindow],
	);
	return n.createElement(x.B, {
		feature: 7,
		label: t,
		description: r,
		dropDownControlRef: c,
		rgOptions: u,
		selectedOption: l.toString(),
		onChange: (e) => _(parseInt(e.data)),
		contextMenuPositionOptions: i,
	});
}
function $(e) {
	return n.createElement(i.aZ, {
		title: (0, Localize)(e.name),
		description: (0, Localize)(e.description),
		descriptionVisibility: "when-expanded",
	});
}
function ee(e) {
	const { channels: t, currentChannel: r } = e;
	const i = R7();
	const a = n.useRef(undefined);
	const s = t.map((e) => ({
		label: n.createElement($, {
			name: e.label,
			description: e.description,
		}),

		data: e.eChannel,
	}));
	const l = n.useCallback(() => {
		a.current.SetSelectedOption(r?.eChannel || B.wR.k_EStable);
	}, [a, r]);
	const c = n.useCallback(
		(e) => {
			const r = t.find((t) => t.eChannel == e)?.fnOptIn;
			if (r) {
				r();
			}
		},
		[t],
	);
	const m = n.useCallback(
		(e) => {
			if (e != r?.eChannel) {
				$_2({
					strDescription: (0, Localize)("#Settings_UpdateChannel_Restart"),
					fnOnOK: () => c(e),
					fnOnCancel: l,
					bSystemRestart: true,
					ownerWindow: i.ownerWindow,
				});
			}
		},
		[c, l, r, i.ownerWindow],
	);
	if (r) {
		return n.createElement(x.B, {
			feature: 7,
			label: (0, Localize)("#Settings_UpdateChannelSelection"),
			dropDownControlRef: a,
			rgOptions: s,
			selectedOption: r.eChannel,
			onChange: (e) => m(e.data),
		});
	} else {
		return null;
	}
}
function te(e) {
	const t = n.createElement(
		"div",
		{
			className: I.SoftwareUpdateSection,
		},
		(0, Localize)("#Settings_Updates_Title"),
	);
	return n.createElement(
		i.G5,
		null,
		n.createElement(i.lr, null, (0, Localize)("#Settings_Updates_Header")),
		n.createElement(E.g5, {
			bHideWhenUnavailable: true,
		}),
		n.createElement(m.km, {
			strLabel: t,
		}),
	);
}
function re(e) {
	const t = q3(() => p.oy.ForceBetaSectionVisible);
	const r = oE();
	const a = q3(() => d.rV.settings?.bIsSteamSideload);
	const [s] = FA();
	const l = jz();
	const c = Ls();
	let m = c && !s;
	let u = a && !t;
	if (u) {
		if (!b.TS.ON_STEAMOS) {
			return null;
		}
		m = false;
	}
	let A = !m;
	if (m && l.length == 0) {
		return null;
	} else {
		return n.createElement(
			i.G5,
			null,
			n.createElement(
				i.lr,
				null,
				(0, Localize)("#Settings_Beta_Participation"),
			),
			m &&
				n.createElement(ee, {
					channels: l,
					currentChannel: c,
				}),
			A &&
				n.createElement(K, {
					bForceAdvanced: false,
				}),
			!m &&
				n.createElement(
					n.Fragment,
					null,
					!u &&
						r &&
						n.createElement(lm, {
							label: (0, Localize)("#Settings_Beta_SteamUpdateChannel"),
						}),
					a && n.createElement(L.A2, null),
				),
		);
	}
}
function ne() {
	return b.TS.ON_DECK;
}
function ie(e) {
	const t = b.TS.ON_DECK;
	const r = ne();
	const a = CI();
	if (t || r || r || a) {
		return n.createElement(
			i.G5,
			null,
			n.createElement(
				i.lr,
				null,
				(0, Localize)("#Settings_System_Advanced_Header"),
			),
			a && n.createElement(de, null),
			n.createElement(P.eH, null),
			n.createElement(k.r, null),
			t && n.createElement(u.J1, null),
			r &&
				n.createElement(z.Ax, {
					bottomSeparator: "none",
				}),
		);
	} else {
		return null;
	}
}
function ae(e) {
	return n.createElement(
		i.G5,
		null,
		n.createElement(i.lr, null, (0, Localize)("#Settings_System_Header")),
		n.createElement(V, null),
		b.TS.ON_DECK &&
			n.createElement(u.n8, {
				bottomSeparator: "standard",
			}),
	);
}
function se(e) {
	const [t, r] = n.useState(false);
	const a = n.createRef();
	n.useEffect(() => {
		if (t) {
			a.current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
			});
		}
	}, [t, a]);
	return n.createElement(
		i.D0,
		{
			label: e.license.name,
			description:
				t &&
				n.createElement(
					"pre",
					{
						className: I.LicenseText,
					},
					e.license.licenseText,
				),
			onActivate: () => r(!t),
			onOKActionDescription: t
				? (0, Localize)("#ThirdPartyLicenses_Hide_License")
				: (0, Localize)("#ThirdPartyLicenses_Show_License"),
			onMoveRight: () => {
				r(true);
				return true;
			},
			autoFocus: e.autoFocus,
			ref: a,
		},
		n.createElement(f.Carat, {
			direction: t ? "down" : "right",
		}),
	);
}
function oe(e) {
	const t = vJ(() => import("/licenses.js"), [], null);
	const r = hf();
	const a = "https://steamdeck-packages.steamos.cloud/archlinux-mirror/sources";
	const s = jb(a);
	let l = t?.default ?? [];
	l = l.filter((e) => e.name != "@steam/shared");
	l.sort((e, t) => (e.name == t.name ? 0 : e.name < t.name ? -1 : 1));
	return n.createElement(
		g.eV,
		{
			onCancel: e.closeModal,
			className: I.LicensesDialog,
		},
		n.createElement(
			i.f3,
			{
				className: I.InfoDialogBody,
			},
			n.createElement(i.Y9, null, (0, Localize)("#ThirdPartyLicenses_Link")),
			n.createElement(
				i.iK,
				null,
				(0, Localize)("#ThirdPartyLicenses_SourceCode_Header"),
			),
			n.createElement(
				i.xh,
				{
					label: (0, Localize)("#ThirdPartyLicenses_SourceCode_SteamOS"),
					onClick: () => {
						if (r) {
							SteamClient.System.OpenInSystemBrowser(a);
						} else {
							s();
						}
						e?.closeModal();
					},
				},
				(0, Localize)("#ThirdPartyLicenses_SourceCode_OpenLink"),
			),
			n.createElement(i.iK, null, (0, Localize)("#ThirdPartyLicenses_Header")),
			!l && n.createElement(f.Spinner, null),
			l.map((e, t) =>
				n.createElement(se, {
					license: e,
					key: e.name,
				}),
			),
		),
	);
}
function le(e) {
	const t = (e) => {
		if (e.length > 0) {
			SteamClient.Settings.SetHostname(e);
			a.Z4.UpdateSystemInfo();
			if (CI()) {
				KS();
			}
		}
	};
	const [r, s] = n.useState("");
	return n.createElement(
		g.eV,
		{
			onCancel: e.closeModal,
		},
		n.createElement(
			i.Y9,
			null,
			(0, Localize)("#Settings_System_Change_Hostname_Header"),
		),
		n.createElement(
			i.nB,
			null,
			n.createElement(
				i.a3,
				null,
				(0, Localize)("#Settings_System_Change_Hostname_Body"),
			),
			n.createElement(
				"div",
				{
					className: I.HostnameInputWrapper,
				},
				n.createElement(i.pd, {
					className: I.HostnameInput,
					type: "string",
					value: r,
					onChange: (e) => {
						const t = (e.target.value || "").match(/[\w-]*/);
						if (t) {
							s(t[0]);
						}
					},
				}),
			),
		),
		n.createElement(
			i.wi,
			null,
			n.createElement(
				i.dR,
				null,
				n.createElement(
					i.$n,
					{
						autoFocus: true,
						onClick: e.closeModal,
					},
					(0, Localize)("#Button_Cancel"),
				),
				n.createElement(
					i.$n,
					{
						onClick: () => {
							if (t) {
								t(r);
							}
							if (e.closeModal) {
								e.closeModal();
							}
						},
					},
					(0, Localize)("#Settings_System_Change_Hostname_Set"),
				),
			),
		),
	);
}
function ce(e) {
	const { systemInfo: t } = e;
	if (t) {
		return n.createElement(
			"div",
			{
				className: I.TextContainer,
			},
			n.createElement(
				"div",
				{
					className: I.Text,
				},
				t,
			),
		);
	} else {
		return n.createElement(N.t, {
			size: "xlarge",
		});
	}
}
function me(e) {
	const { strName: t, onClose: r } = e;
	const [i, a] = n.useState();
	const s = R7().ownerWindow;
	const l = n.useCallback(() => {
		s.navigator.clipboard.writeText(i);
	}, [s, i]);
	n.useEffect(() => {
		SteamClient.System.SteamRuntimeSystemInfo().then((e) => a(e));
	}, [a]);
	const c = i
		? (0, Localize)("#Settings_SteamRuntimeSystemInformation_Desc")
		: (0, Localize)("#Settings_SteamRuntimeSystemInformation_PleaseWait");
	return n.createElement(
		g.o0,
		{
			onOK: l,
			onCancel: r,
			className: I.SteamRuntimeSystemInfoDialogContent,
			strTitle: t,
			bOKDisabled: !i,
			strDescription: c,
			strOKButtonText: (0, Localize)(
				"#Settings_SteamRuntimeSystemInformation_Copy",
			),
			strCancelButtonText: (0, Localize)(
				"#Settings_SteamRuntimeSystemInformation_Close",
			),
		},
		n.createElement(
			"div",
			{
				className: I.SteamRuntimeSystemInfoContainer,
			},
			n.createElement(ce, {
				systemInfo: i,
			}),
		),
	);
}
export const kz = Nr((e) => {
	const { uiMode: t } = e;
	const [r, i] = n.useState(false);
	const [a, s] = n.useState();
	n.useEffect(
		() =>
			t == 7 || t == 4
				? F.Dt.RegisterForRunSteamURL(t, "open/runtimeinfo", (e, t) => {
						i(true);
					}).unregister
				: () => {},
		[t],
	);
	const l = n.useCallback(() => {
		i(false);
	}, [i]);
	if (!r) {
		return null;
	}
	const c = (0, Localize)("#Settings_SteamRuntimeSystemInformation");
	return n.createElement(
		O.w,
		{
			strTitle: c,
			onDismiss: l,
			popupWidth: 700,
			popupHeight: 480,
			minWidth: 700,
			minHeight: 480,
			resizable: true,
			refPopup: s,
			modal: false,
		},
		n.createElement(me, {
			strName: c,
			onClose: l,
		}),
	);
});
function de() {
	const e = (() => {
		const e = R7().ownerWindow;
		return n.useCallback(() => {
			e.location.href = "steam://open/runtimeinfo";
		}, [e]);
	})();
	return n.createElement(
		i.xh,
		{
			label: (0, Localize)("#Settings_SteamRuntimeSystemInformation"),
			onClick: e,
		},
		(0, Localize)("#Settings_SRSI_Run"),
	);
}
export function Xl(e) {
	return n.createElement(
		i.nB,
		null,
		n.createElement(m.aY, null),
		n.createElement(te, null),
		n.createElement(re, null),
		n.createElement(ae, null),
		n.createElement(z.w2, null),
		n.createElement(jI, null),
		n.createElement(ie, null),
	);
}
