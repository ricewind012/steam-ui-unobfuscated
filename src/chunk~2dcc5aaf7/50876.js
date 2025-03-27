import {
	Localize,
	LocalizeReact,
	LocalizePlural,
	BLocStringExists,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";

import {
	GetOwningWindowForEvent,
	GetOwningWindowForElement,
} from "../../actual_src/utils/domutils.js";
import { CC } from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i, { Qt as Qt_1, bG } from "./18057.js";
import a from "./70519.js";
import s, { gk, FA, oM, LC } from "./46422.js";
import o, { C2 } from "./89411.js";
import l, { VI, t0, hX, Tr as Tr_2, e_ as e, I5, sE, Hg } from "./34792.js";
import c from "./67863.js";
import m from "./64608.js";
import u from "./35488.js";
import d, { A } from "./90765.js";
import p, { U as U_2 } from "./83184.js";
import h from "./3475.js";
import C, {
	hf,
	uI,
	Y2,
	Qn as Qn_2,
	TL,
	CI,
	rP,
	td,
	Pr as Pr_2,
} from "./72476.js";
import _ from "./57472.js";
import f from "./48331.js";
import y from "./1470.js";
import S, { l9, hb as hb_2 } from "./5640.js";
import w, { wT } from "./28934.js";
import B from "./69164.js";
import I, { IU, qw, ZW, iZ } from "./89748.js";
import E from "./37086.js";
import T, { q3 } from "./90095.js";
import R from "./83247.js";
import k from "./74362.js";
import D, { xU, In as In_2, fW } from "./51943.js";
import N, { vJ, uN, Sz, uD, gc, _g } from "./52451.js";
import F, { li as li_2 } from "./96593.js";
import "./91040.js";
import G from "./91486.js";
import O from "./91957.js";
import { sr as sr_2, Pi as Pi_2, d$, cg, KO, Iz } from "./25467.js";
import V from "./28020.js";
import j from "./66943.js";
import Q from "./85182.js";
import Z, { Cg } from "./34629.js";
import K, { pg } from "./13869.js";
import X from "./10606.js";
import J, { CN, gU, nR } from "./66186.js";
import $ from "./4406.js";
import ee from "./61277.js";
import te, { Gn as Gn_2, XI } from "./89193.js";
import re from "./51297.js";
import ae from "./83571.js";
import se from "./8326.js";
import { tn as tn_2, br as br_2 } from "./18869.js";
import { $ as $_2 } from "./27756.js";
import { R7 } from "./11131.js";
import me from "./2306.js";
import ue from "./13897.js";
import he from "./28351.js";
import Ce, { vB, DP } from "./17386.js";
import { PA } from "./41230.js";
import Pe, { _x, Ru, TD, T0, yc, Wy, MC, MH, zg, xs, Xs } from "./34819.js";
import ze from "./38660.js";
import { l5, hb } from "./96555.js";
import We from "./11714.js";
import lt from "./68120.js";
import ct from "./22136.js";
import ut, { ak, sf } from "./44846.js";
import { T2 } from "./12491.js";
import { M as M_2 } from "./51517.js";
import pt from "./75961.js";
import Ct from "./96000.js";
import _t from "./26853.js";
import { Qx, R9, BN, FO } from "./13656.js";
import { T as T_3 } from "./78057.js";
import xt from "./24460.js";
import Ut from "./34776.js";
import Wt from "./96670.js";
import Vt from "./81969.js";
import Qt, { W6 } from "./49519.js";
import Zt from "./50376.js";
import Yt, { Ss, M3 } from "./57016.js";
import Kt from "./3015.js";
import ir from "./57421.js";
import ar from "./22091.js";
import sr from "./53453.js";
import { N4, Id } from "./77347.js";
import lr, { FN } from "./43152.js";
import cr from "./87935.js";
import mr, { TR, Tr as Tr_2, sf as sf_2, oS, dT } from "./74416.js";
import ur from "./37141.js";
import { G$, zK } from "./42983.js";
import Sr from "./2053.js";
import Br from "./11471.js";
import Ir from "./75085.js";
import Er from "./81994.js";
import { pw } from "./31319.js";
import kr from "./39940.js";
import { K as K_2 } from "./46085.js";
import Vr from "./89600.js";
import Hr from "./65424.js";
import { dm } from "./34428.js";
import Qr, { F2, TN, d0, dN } from "./64004.js";
import Zr from "./48969.js";
import { VB, rg } from "./3142.js";
import Kr from "./26328.js";
import nn, { oE } from "./91209.js";
import { kN } from "./13925.js";
import sn, { PA as PA_2 } from "./56970.js";
import cn from "./93023.js";
import mn from "./17231.js";
import un from "./68608.js";
import dn from "./88724.js";
import An from "./8573.js";
import pn from "./66531.js";
import Bn from "./4690.js";
import vn from "./11666.js";
import En from "./94692.js";
import xn, { LK } from "./48289.js";
import Un from "./63713.js";
import Wn from "./3289.js";
import Yn from "./10064.js";
import { Dp, Fj } from "./736.js";
import { W6 as W6_2 } from "./69913.js";
import { f as f_2 } from "./63538.js";
import $n from "./79671.js";
import { gQ } from "./39002.js";
import ti from "./13277.js";
import ri from "./52733.js";
import { T as T_1 } from "./59718.js";
import { Dy } from "./88750.js";
import wi from "./89373.js";
import { $2 } from "./96680.js";
import ki from "./87913.js";
import Di from "./49180.js";
import Ni from "./30449.js";
import Fi from "./10024.js";
import ta from "./5072.js";
import "./41480.js";
import { I as I_2 } from "./61416.js";
import na from "./75144.js";
import ma, { BGameRecordingFeatureEnabled } from "./4069.js";
const b = f;
function v(e) {
	const { feature: t, disabled: r, ...i } = e;
	const a = l9(t);
	const s = a !== 0;
	const o = wT();
	return n.createElement(
		B.Z,
		{
			onActivate: s && !r ? () => o(a, t) : undefined,
		},
		n.createElement(m.zW, {
			...i,
			disabled: s || r,
		}),
	);
}
function M() {
	const e = hf();
	const t = uI();
	const r = Y2();
	const a = IU();
	const [s, o] = VI("library_display_size");
	const c = Qt_1("steam://open/addnonsteamgame");
	const f = bG("StoreFrontPage");
	const S = (e) => {
		U_2(GetOwningWindowForEvent(e));
	};
	return n.createElement(
		E.sh,
		{
			className: A(b.NoScroll, b.LibrarySettings),
		},
		e &&
			n.createElement(
				m.G5,
				null,
				n.createElement(
					m.a3,
					{
						className: b.DescriptionText,
					},
					(0, Localize)("#Settings_Library_DisplaySize"),
				),
				n.createElement(
					v,
					{
						feature: h.uX,
						value: s,
						onChange: (e) => o(e),
					},
					n.createElement(
						m.a,
						{
							value: 0,
						},
						(0, Localize)("#Settings_Library_DisplaySize_Automatic"),
					),
					n.createElement(
						m.a,
						{
							value: 1,
						},
						(0, Localize)("#Settings_Library_DisplaySize_Small"),
					),
					n.createElement(
						m.a,
						{
							value: 2,
						},
						(0, Localize)("#Settings_Library_DisplaySize_Medium"),
					),
					n.createElement(
						m.a,
						{
							value: 3,
						},
						(0, Localize)("#Settings_Library_DisplaySize_Large"),
					),
				),
				n.createElement(m.Nu, {
					className: b.TopMargin,
				}),
			),
		e &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_Library_LowBandwidthMode"),
					description: (0, Localize)(
						"#Settings_Library_LowBandwidthMode_Description",
					),
					setting: "library_low_bandwidth_mode",
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_Library_LowPerfMode"),
					description: (0, Localize)(
						"#Settings_Library_LowPerfMode_Description",
					),
					setting: "library_low_perf_mode",
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_Library_DisableCommunityContent"),
					description: (0, Localize)(
						"#Settings_Library_DisableCommunityContent_Description",
					),
					setting: "library_disable_community_content",
					visible: !r,
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_Library_ShowGameIcons"),
					setting: "library_display_icon_in_game_list",
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)(
						"#Settings_Library_ReadyToPlayIncludesStreaming",
					),
					description: (0, Localize)(
						"#Settings_Library_ReadyToPlayIncludesStreaming_Description",
					),
					setting: "ready_to_play_includes_streaming",
				}),
			),
		!t &&
			n.createElement(_.G, {
				feature: h.uX,
				label: (0, Localize)("#Settings_Library_Show_SteamDeck_Info"),
				setting: "show_steam_deck_info",
			}),
		a &&
			n.createElement(_.G, {
				feature: h.uX,
				label: (0, Localize)("#Settings_Library_Show_Copy_Count"),
				setting: "show_copy_count_in_library",
			}),
		!e &&
			n.createElement(
				m.G5,
				null,
				n.createElement(
					m.lr,
					null,
					(0, Localize)("#Settings_Library_ProdKey_Activate"),
				),
				n.createElement(
					E.WG,
					{
						icon: n.createElement(u.CD, null),
						label: (0, Localize)("#Settings_Library_Add_To_Library"),
						description: (0, Localize)("#Settings_Library_ProdKey_UseCode"),
						onClick: S,
					},
					(0, Localize)("#Settings_Library_ProdKey_AddGame"),
				),
			),
		e &&
			!r &&
			n.createElement(
				m.G5,
				{
					className: b.ActionSection,
				},
				n.createElement(
					E.CS,
					{
						onClick: c,
					},
					(0, Localize)("#Settings_Library_AddNonSteam"),
				),
				n.createElement(
					E.CS,
					{
						onClick: S,
					},
					(0, Localize)("#Settings_Library_Activate"),
				),
				n.createElement(
					y.t,
					{
						as: E.CS,
						feature: 1,
						onClick: f,
					},
					(0, Localize)("#Settings_Library_BrowseStore"),
				),
			),
	);
}
function P(e) {
	const t = k.T4.Output;
	if (xU(t).length == 0) {
		return n.createElement(m.D0, {
			disabled: true,
			icon: n.createElement(u.VolumeMuted, null),
			label: (0, Localize)("#Audio_No_Output_Devices_Detected"),
		});
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(m.iK, null, (0, Localize)("#Audio_Header_Output")),
			n.createElement(a.RC, {
				direction: t,
			}),
			n.createElement(a.E1, {
				direction: t,
				label: (0, Localize)("#Audio_OutputDevice"),
			}),
		);
	}
}
function L(e) {
	const t = k.T4.Input;
	if (xU(t).length == 0) {
		return n.createElement(m.D0, {
			disabled: true,
			icon: n.createElement(u.VolumeMuted, null),
			label: (0, Localize)("#Audio_No_Input_Devices_Detected"),
		});
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(m.iK, null, (0, Localize)("#Audio_Header_Voice")),
			n.createElement(a.RC, {
				direction: t,
			}),
			n.createElement(a.E1, {
				direction: t,
				label: (0, Localize)("#Audio_InputDevice"),
			}),
		);
	}
}
function z(e) {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(m.iK, null, (0, Localize)("#Audio_Header_General")),
		n.createElement(_.G, {
			feature: h.uX,
			setting: "enable_ui_sounds",
			label: (0, Localize)("#Audio_Setting_Enable_UI_Sounds"),
		}),
	);
}
function x(e) {
	if (In_2()) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(P, null),
			false,
			n.createElement(L, null),
		);
	} else {
		return null;
	}
}
function U(e) {
	fW();
	const [t] = gk();
	Qn_2();
	return n.createElement(
		m.nB,
		null,
		n.createElement(x, null),
		n.createElement(z, null),
		false,
	);
}
const H = V;
function q(e) {
	sr_2();
	const t = Pi_2();
	const [r] = d$();
	const [i] = cg();
	const { rPairedDevices: a, rAvailableDevices: s } = KO(i);
	const o = ((e, t) => {
		if (e.length > 0) {
			return (0, Localize)("#QuickAccess_Tab_Bluetooth_Available_To_Pair");
		} else if (t) {
			return (0, Localize)("#QuickAccess_Tab_Bluetooth_Searching");
		} else {
			return (0, Localize)("#QuickAccess_Tab_Bluetooth_No_Devices_Found");
		}
	})(s, r);
	return n.createElement(
		m.f3,
		null,
		n.createElement(
			m.G5,
			null,
			n.createElement(j.tN, {
				label: (0, Localize)("#QuickAccess_Tab_Bluetooth_ToggleLabel"),
			}),
			n.createElement(j.cQ, null),
		),
		a.length > 0 &&
			n.createElement(
				m.G5,
				null,
				n.createElement(
					m.lr,
					null,
					(0, Localize)("#QuickAccess_Tab_Bluetooth_Paired"),
				),
				a.map((e, t) =>
					n.createElement(j.LV, {
						nDeviceId: e.id,
						key: e.id,
						bottomSeparator: t < a.length ? "standard" : "none",
					}),
				),
			),
		(t || s.length > 0) &&
			n.createElement(
				m.G5,
				null,
				n.createElement(
					m.lr,
					{
						className: H.Header,
					},
					o,
					r && n.createElement(u.Spinner, null),
				),
				s.map((e, t) =>
					n.createElement(j.LV, {
						nDeviceId: e.id,
						key: e.id,
						bottomSeparator: t < s.length - 1 ? "standard" : "none",
					}),
				),
			),
	);
}
class Y {
	static s_Singleton = null;
	static Get() {
		if (Y.s_Singleton == null) {
			Y.s_Singleton = new Y();
			window.SystemDevkitStore = Y.s_Singleton;
		}
		return Y.s_Singleton;
	}
	m_fnShowDevkitPairingConfirmation;
	constructor() {
		SteamClient.System.Devkit.RegisterForPairingPrompt(this.OnPairingPrompt);
	}
	RegisterPairingFunction(e) {
		this.m_fnShowDevkitPairingConfirmation = e;
	}
	OnPairingPrompt(e) {
		this.m_fnShowDevkitPairingConfirmation(e);
		return false;
	}
	RespondToPairingPrompt(e, t) {
		SteamClient.System.Devkit.RespondToPairingPrompt(e, t);
	}
	SetPairing(e) {
		SteamClient.System.Devkit.SetPairing(e);
	}
}
Cg([N.oI], Y.prototype, "OnPairingPrompt", null);
class ne {
	static s_Singleton = null;
	static Get() {
		if (ne.s_Singleton == null) {
			ne.s_Singleton = new ne();
			window.SystemAudioDevicesStore = ne.s_Singleton;
		}
		return ne.s_Singleton;
	}
	m_msgState = {};
	get msgState() {
		return this.m_msgState;
	}
	constructor() {
		Gn_2(this);
		SteamClient.System.AudioDevices?.RegisterForStateChanges(
			this.OnStateChanged,
		);
	}
	OnStateChanged(e) {
		const t = re.K6.deserializeBinary(e).toObject();
		Object.keys(t).forEach((e) => (this.m_msgState[e] = t[e]));
	}
	SetCounter(e) {
		let t = new re.id();
		t.set_counter(Math.round(e));
		SteamClient.System.AudioDevices?.UpdateSomething(t.serializeBase64String());
	}
	RunSpeakerTest() {
		let e = new re.id();
		e.set_counter(0);
		SteamClient.System.AudioDevices?.UpdateSomething(e.serializeBase64String());
	}
}
function ie() {
	return n.createElement(
		y.E,
		{
			feature: 7,
			label: (0, Localize)("#Settings_Developer_SpeakerTest"),
			onClick: ne.Get().RunSpeakerTest,
		},
		(0, Localize)("#Settings_Developer_SpeakerTest_Start"),
	);
}
Cg([te.sH], ne.prototype, "m_msgState", undefined);
Cg([te.XI.bound], ne.prototype, "OnStateChanged", null);
Cg([N.oI], ne.prototype, "SetCounter", null);
Cg([N.oI], ne.prototype, "RunSpeakerTest", null);
function de() {
	const e = R7();
	return [
		vJ(() => SteamClient.Settings.GetGlobalCompatTools(), []),
		n.useCallback(
			(t) => {
				SteamClient.Settings.SpecifyGlobalCompatTool(t);
				$_2({
					strDescription: (0, Localize)("#Settings_SteamPlay_NeedsRestart"),
					strOKButtonText: (0, Localize)("#Settings_SteamPlay_Restart"),
					strCancelButtonText: (0, Localize)(
						"#Settings_SteamPlay_RestartLater",
					),
					fnOnOK: () => {},
					ownerWindow: e.ownerWindow,
				});
			},
			[e],
		),
	];
}
function Ae(e) {
	const t = t0();
	const r = t.bCompatEnabled;
	const i = t.bCompatEnabledForOtherTitles;
	const [a, s] = n.useState(i);
	const [o, c] = de();
	const m = n.useCallback(
		(e) => {
			s(e);
			if (e) {
				if (o === undefined || o.length == 0) {
					c("proton_experimental");
				} else {
					c(o[0].strToolName);
				}
			} else {
				c("");
			}
		},
		[o, c, s],
	);
	return n.createElement(me.C, {
		feature: 7,
		label: (0, Localize)("#Settings_SteamPlay_EnableForOtherTitles"),
		description: (0, Localize)("#Settings_SteamPlay_EnableForOtherTitles_Desc"),
		controlled: true,
		disabled: !r,
		checked: a,
		onChange: m,
	});
}
function pe(e) {
	const t = t0().strCompatTool;
	const [r, i] = de();
	const a =
		r?.map((e) => ({
			label: e.strDisplayName,
			data: e.strToolName,
		})) ?? [];
	const s = n.useCallback(
		(e) => {
			i(e);
		},
		[i],
	);
	if (t) {
		return n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_SteamPlay_RunOtherTitlesWith"),
			rgOptions: a,
			disabled: a.length == 0,
			selectedOption: t,
			onChange: (e) => s(e.data),
		});
	} else {
		return null;
	}
}
function ge(e) {
	return n.createElement(
		E.sh,
		null,
		n.createElement(
			"div",
			null,
			(0, Localize)("#Settings_SteamPlay_IsEnabled"),
		),
		n.createElement(Ae, null),
		n.createElement(pe, null),
	);
}
function _e() {
	const [e, t] = CN();
	return n.createElement(me.C, {
		feature: 7,
		label: (0, Localize)("#Settings_Tracing"),
		description: (0, Localize)("#Settings_Tracing_Description"),
		checked: t,
		onChange: (e) => {
			J.Hn.Get().SetSystemTracingEnabled(e);
		},
		disabled: !e,
	});
}
function fe() {
	const [e, t] = gU();
	return n.createElement(me.C, {
		feature: 7,
		label: (0, Localize)("#Settings_Profiling"),
		description: (0, Localize)("#Settings_Profiling_Description"),
		checked: t,
		onChange: (e) => {
			J.Hn.Get().SetGraphicsProfilingEnabled(e);
		},
		disabled: !e,
	});
}
function be(e) {
	if (TL()) {
		return n.createElement(
			m.G5,
			null,
			n.createElement(m.tX, null, (0, Localize)("#Settings_Profiling_Title")),
			n.createElement(_e, null),
			n.createElement(fe, null),
		);
	} else {
		return null;
	}
}
function ye(e) {
	const [t, r] = n.useState(false);
	const i = n.useCallback((e) => {
		pg(
			n.createElement(X.o0, {
				strTitle: (0, Localize)("#Settings_System_Devkit_Pairing_Confirmation"),
				strDescription: e,
				onOK: () => Y.Get().RespondToPairingPrompt(1, "access granted"),
				onCancel: () => Y.Get().RespondToPairingPrompt(15, "access denied"),
			}),
			window,
		);
	}, []);
	n.useEffect(() => {
		Y.Get().RegisterPairingFunction(i);
		return () => {
			if (t) {
				Y.Get().SetPairing(false);
			}
		};
	});
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: (0, Localize)("#Settings_System_Devkit_PairingLabel"),
			onClick: () => {
				let e = !t;
				Y.Get().SetPairing(e);
				r(e);
			},
		},
		t
			? (0, Localize)("#Settings_System_Devkit_Pairing")
			: (0, Localize)("#Settings_System_Devkit_DoPairing"),
	);
}
function Se(e) {
	if (TL()) {
		return n.createElement(
			m.G5,
			null,
			n.createElement(m.lr, null, (0, Localize)("#Settings_System_Devkit")),
			n.createElement(ye, null),
		);
	} else {
		return null;
	}
}
function we() {
	const [e, t] = VI("steam_input_configurator_error_msg_enable");
	return n.createElement(me.C, {
		feature: 7,
		label: (0, Localize)("#Settings_Developer_SteamInputDev"),
		description: (0, Localize)("#Settings_Developer_SteamInputDev_Desc"),
		checked: e,
		onChange: (e) => {
			t(e);
		},
	});
}
function Be(e) {
	return n.createElement(
		m.G5,
		null,
		n.createElement(m.tX, null, (0, Localize)("#Settings_System_SteamInput")),
		n.createElement(we, null),
	);
}
function ve() {
	return n.createElement(_.G, {
		feature: 7,
		setting: "force_oobe",
		label: (0, Localize)("#Settings_ForceOOBE"),
		description: (0, Localize)("#Settings_ForceOOBE_Description"),
	});
}
function Ie() {
	const [e, t] = FA();
	return n.createElement(me.C, {
		feature: 7,
		label: (0, Localize)("#Settings_Developer_ShowAdvancedOSBranches"),
		checked: e,
		onChange: t,
	});
}
function Ee() {
	const [e, t] = VI("override_browser_composer_mode");
	if (CI()) {
		return n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_Developer_ForceSystemComposer"),
			checked: e == 1,
			onChange: (e) => {
				t(e ? 1 : 0);
				pg(
					n.createElement(X.o0, {
						strTitle: (0, Localize)("#Modal_ConfirmSteamRestart_Title"),
						strOKButtonText: (0, Localize)(
							"#Modal_ConfirmSteamRestart_RestartNow",
						),
						strCancelButtonText: (0, Localize)(
							"#Modal_ConfirmSteamRestart_RestartLater",
						),
						onOK: () => {
							SteamClient.User.StartRestart(false);
						},
					}),
					window,
				);
			},
		});
	} else {
		return null;
	}
}
function Me() {
	return n.createElement(_.G, {
		feature: 7,
		setting: "cef_remote_debugging_enabled",
		label: (0, Localize)("#Settings_Developer_CefRemoteDebugging"),
		description: (0, Localize)("#Settings_Developer_CefRemoteDebugging_Desc"),
	});
}
function Te(e) {
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: (0, Localize)(
				"#Settings_Developer_ClearGameLaunchInterstitialsSeen",
			),
			onClick: ee.z.ClearAllInterstitialsSeen,
		},
		(0, Localize)("#Settings_Developer_ClearGameLaunchInterstitialsSeenButton"),
	);
}
function Re(e) {
	let t = tn_2(i.BV.Console());
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: (0, Localize)("#Settings_Developer_OpenSteamConsoleTab"),
			onClick: t,
		},
		(0, Localize)("#Settings_Developer_OpenSteamConsoleTab_Button"),
	);
}
function ke(e) {
	return null;
}
function De(e) {
	if (TL()) {
		return n.createElement(
			m.G5,
			null,
			n.createElement(
				m.lr,
				null,
				(0, Localize)("#Settings_Developer_WiFi_Title"),
			),
			n.createElement($.MF, null),
			n.createElement(he.I8, null),
			n.createElement(he.bu, null),
		);
	} else {
		return null;
	}
}
function Ne(e) {
	const t = TL() || false;
	const r = Qn_2() || false;
	return n.createElement(
		m.G5,
		null,
		n.createElement(m.tX, null, (0, Localize)("#Settings_Miscellaneous_Title")),
		t &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(ae.kf, null),
				n.createElement(ke, null),
				n.createElement(se.XT, null),
				n.createElement(ae.TZ, null),
				n.createElement(ae.zK, null),
				n.createElement(ae.BF, null),
				n.createElement(ae.nK, null),
				n.createElement(ae.e5, null),
				n.createElement(ie, null),
				n.createElement(Ie, null),
				n.createElement(ae.Ac, null),
				n.createElement(ae.ON, null),
				n.createElement(ae.Jd, null),
				n.createElement($.n8, {
					bForceFormat: true,
					strLabel: (0, Localize)("#Settings_System_ForceFormatSD_Label"),
				}),
			),
		r &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(Ce.RP, null),
				n.createElement(ve, null),
				n.createElement(Te, null),
				n.createElement(Re, null),
			),
		n.createElement(_.G, {
			feature: 7,
			setting: "show_timestamps_in_console",
			label: (0, Localize)("#Settings_Developer_ShowTimestampsInConsole"),
		}),
		n.createElement(Ee, null),
		n.createElement(Me, null),
		false,
		n.createElement(_.G, {
			feature: 7,
			setting: "hdr_compat_testing",
			label: (0, Localize)("#Settings_Developer_HDRCompatTesting"),
			description: (0, Localize)("#Settings_Developer_HDRCompatTesting_Desc"),
		}),
	);
}
function Fe(e) {
	if (CI()) {
		return n.createElement(
			m.G5,
			null,
			n.createElement(
				m.tX,
				null,
				(0, Localize)("#Settings_SteamPlay_SteamPlay"),
			),
			n.createElement(
				"div",
				null,
				(0, Localize)("#Settings_SteamPlay_IsEnabled"),
			),
			n.createElement(Ae, null),
			n.createElement(pe, null),
		);
	} else {
		return null;
	}
}
function Ge(e) {
	return n.createElement(
		m.nB,
		null,
		n.createElement(be, null),
		n.createElement(Se, null),
		n.createElement(Fe, null),
		n.createElement(De, null),
		n.createElement(Ne, null),
		n.createElement(Be, null),
	);
}
const Le =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAALCAYAAAC3SYXQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCRjAzN0Y1RDU5ODhFQzExOTg2MEQwRjhBQkYyQ0M4OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRUYzRjlBMzg4NUYxMUVDQkU3RUFCNjgyMTIyOUFGNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRUYzRjlBMjg4NUYxMUVDQkU3RUFCNjgyMTIyOUFGNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDAzN0Y1RDU5ODhFQzExOTg2MEQwRjhBQkYyQ0M4OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRDAzN0Y1RDU5ODhFQzExOTg2MEQwRjhBQkYyQ0M4OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phx76n8AAAFNSURBVHja7JjdksMgCIXB66SvvJMnPxv8yRJWpV50a3fkoojB7xCHmEyZiEAN2/aduAQAgTnG+7alcZnLXubluowlX4wz5xP44rfH48YuWntD45pX/KgttZ4xznntZd6yb5w/5gfqGKsxVFzG1ts86nXXhHx01ng2kjtTfvAxejthxtbbPHLKmI3PnTWejeTOkx88CPI+MuOK5fc8cCo+JQMc9fmJZ3QuvmX7T1KNn+J0+lqv67Za7+AH9xhRO3CLKx5azMYfwI+7aBsq6zRbrMFvvl4a9/EuvvsNAM4bAv6Jo8Jvz8gdmtdc8dR8fWAartJpNlmNXxilZuVn4wf3TZIXe8K2gFvx0/H1yZEaoWjYXE+nt6Z2D/PxMfJhsey/2WqA1QCrAVYDvFqEj0GRr6Fs+ROsde1gxuuUo3hVm48x3VFhdL/tn7dvAQYA7D+tEgev8ZYAAAAASUVORK5CYII=";
const xe = ze;
const Ve = 1000;
function He() {
	const e = _x();
	return n.createElement(me.C, {
		feature: 7,
		checked: e,
		onChange: (e) => Pe.mG.Get().SetNightModeEnabled(e),
		label: (0, Localize)("#Settings_Display_NightMode"),
		description: (0, Localize)("#Settings_Display_NightMode_Desc"),
	});
}
function je(e) {
	const [t, r] = Ru();
	const [i, a] = uN(t, r, Ve);
	const s = n.useMemo(
		() => [
			{
				notchIndex: 0,
				label: (0, Localize)("#Settings_Display_NightModeColor_Cool"),
			},
			{
				notchIndex: 1,
				label: (0, Localize)("#Settings_Display_NightModeColor_Warm"),
			},
		],
		[],
	);
	return n.createElement(O.V, {
		feature: 7,
		layout: "inline",
		bottomSeparator: e.bottomSeparator,
		label: (0, Localize)("#Settings_Display_NightModeColor"),
		value: i,
		onChange: a,
		min: 0.1,
		max: 1,
		step: 0,
		notchCount: 2,
		notchLabels: s,
		notchTicksVisible: false,
	});
}
function qe() {
	const e = TD();
	return n.createElement(O.V, {
		feature: 7,
		layout: "inline",
		label: (0, Localize)("#Settings_Display_NightModeDominantHue"),
		value: e,
		onChange: (e) => Pe.mG.Get().SetNightModeMaxHue(e),
		min: 0,
		max: 60,
		step: 0,
	});
}
function Qe() {
	const e = T0();
	return n.createElement(O.V, {
		feature: 7,
		layout: "inline",
		label: (0, Localize)("#Settings_Display_NightModePeakSaturation"),
		value: e,
		onChange: (e) => Pe.mG.Get().SetNightModeMaxSat(e),
		min: 0.5,
		max: 1,
		step: 0,
	});
}
function Ze() {
	const [e, t] = yc();
	return (
		e &&
		n.createElement(O.V, {
			feature: 7,
			layout: "inline",
			label: (0, Localize)("#Settings_Display_NightModeShadowSaturation"),
			value: t,
			onChange: (e) => Pe.mG.Get().SetNightModeBlend(e),
			min: -1,
			max: 1,
			step: 0,
		})
	);
}
function Ye() {
	const [e, t, r] = Wy();
	const i = t0().vecNightModeScheduledHours.map((e) => ({
		data: e.nHour,
		label: e.strDisplay,
	}));
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(me.C, {
			feature: 7,
			checked: e,
			onChange: (e) => Pe.mG.Get().SetNightModeScheduleEnabled(e),
			label: (0, Localize)("#Settings_Display_ScheduleNightMode"),
		}),
		n.createElement(
			m.D0,
			{
				label: (0, Localize)("#Settings_Display_AutoEnableBetween"),
				childrenLayout: "inline",
				childrenContainerWidth: "fixed",
			},
			n.createElement(
				B.Z,
				{
					className: xe.TimeRangeControls,
				},
				n.createElement(ue.I, {
					feature: 7,
					disabled: !e,
					rgOptions: i,
					selectedOption: Math.floor(t),
					onChange: (e, t) => {
						Pe.mG.Get().SetNightModeScheduleStartTime(e.data);
					},
				}),
				n.createElement(
					"div",
					{
						className: xe.And,
					},
					(0, Localize)("#Settings_Display_AutoEnableBetween_And"),
				),
				n.createElement(ue.I, {
					feature: 7,
					disabled: !e,
					rgOptions: i,
					selectedOption: Math.floor(r),
					onChange: (e, t) => {
						Pe.mG.Get().SetNightModeScheduleEndTime(e.data);
					},
				}),
			),
		),
	);
}
function Ke() {
	const e = MC();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			m.G5,
			null,
			n.createElement(
				m.lr,
				null,
				" ",
				(0, Localize)("#Settings_Display_NightModeSection"),
				" ",
			),
			n.createElement(Ye, null),
			n.createElement(He, null),
			n.createElement(je, {
				bottomSeparator: e ? "standard" : "none",
			}),
			e &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(qe, null),
					n.createElement(Qe, null),
					n.createElement(Ze, null),
					n.createElement(
						m.D0,
						{
							bottomSeparator: "none",
							childrenLayout: "below",
							childrenContainerWidth: "fixed",
						},
						n.createElement("img", {
							style: {
								width: "100%",
								imageRendering: "pixelated",
							},
							src: Le,
						}),
					),
				),
			n.createElement(
				m.BC,
				{
					childrenLayout: "inline",
					bottomSeparator: "none",
				},
				e &&
					n.createElement(
						y.t,
						{
							feature: 7,
							onClick: Pe.mG.Get().ResetNightMode,
						},
						(0, Localize)("#Settings_Display_NightModeReset"),
					),
				n.createElement(
					m.$n,
					{
						onClick: () => Pe.mG.Get().SetNightModeAdvancedView(!e),
					},
					e
						? (0, Localize)("#Common_Basic_View")
						: (0, Localize)("#Common_Advanced_View"),
				),
			),
		),
	);
}
function Xe() {
	const [e, t, r] = MH();
	if (e) {
		return n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_Display_NativeColorTemp"),
			checked: !t,
			onChange: (e) => r(!e),
		});
	} else {
		return null;
	}
}
function Je(e) {
	const [t, r, i] = nR();
	const [a, s] = uN(r, i);
	const o = l5();
	if (t && o) {
		return n.createElement(O.V, {
			feature: 7,
			label: (0, Localize)("#Settings_HDR_SDRContentBrightness"),
			value: a,
			onChange: s,
			min: 0,
			max: 1,
			step: 0,
			resetValue: 0.292,
		});
	} else {
		return null;
	}
}
function $e(e) {
	const [t, r] = gk();
	Qn_2();
	const [i, a] = zg();
	return n.createElement(
		m.G5,
		null,
		n.createElement(
			m.lr,
			null,
			(0, Localize)("#Settings_Display_Advanced_Header"),
		),
		n.createElement(ae.s0, null),
		n.createElement(ot, null),
		n.createElement(se.lt, null),
		n.createElement(se.XT, null),
		n.createElement($.Yo, null),
		n.createElement(ae.fn, {
			bAdvanced: true,
		}),
		n.createElement(Je, null),
		n.createElement(Xe, null),
		n.createElement(ae.kf, null),
		false,
		false,
	);
}
function et() {
	const e = vB();
	if (DP()) {
		return n.createElement(
			m.G5,
			null,
			n.createElement(m.lr, null, e),
			n.createElement(se.cP, {
				bottomSeparator: "auto",
			}),
			n.createElement(se.KX, null),
			n.createElement(Ce.Eh, {
				bottomSeparator: "auto",
			}),
			n.createElement(Ce.dy, null),
			C.TS.ON_DECK &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(Ce.VJ, {
						bottomSeparator: "auto",
					}),
					n.createElement(Ce.XD, null),
				),
		);
	} else {
		return null;
	}
}
const tt = PA(() => {
	const e = !rP().IN_VR;
	n.useEffect(() => {
		if (e) {
			l.rV.RefreshMonitorInfo();
		}
	}, [e]);
	if (!e) {
		return null;
	}
	const t = l.rV.monitorInfo;
	let r = [
		{
			data: 0,
			label: (0, Localize)("#Settings_Display_PreferredMonitor_None"),
		},
	];
	t?.monitors?.forEach((e, t) => {
		r.push({
			data: t + 1,
			label: `${e.monitor_display_name} ${t + 1}`,
		});
	});
	const i =
		t?.monitors.findIndex(
			(e) => e.monitor_device_name == t?.selected_display_name,
		) + 1;
	return n.createElement(
		n.Fragment,
		null,
		t &&
			n.createElement(
				m.G5,
				null,
				n.createElement(
					m.iK,
					null,
					" ",
					(0, Localize)("#Settings_Display_PreferredMonitor"),
				),
				n.createElement(m.D0, {
					description: (0, Localize)("#Settings_Display_PreferredMonitor_Desc"),
					bottomSeparator: "none",
				}),
				n.createElement(ue.I, {
					feature: 7,
					rgOptions: r,
					selectedOption: i,
					onChange: (e) =>
						l.rV.SetPreferredMonitor(
							e.data > 0 ? t.monitors[e.data - 1].monitor_device_name : "",
						),
				}),
			),
	);
});
function rt() {
	if (C.TS.ON_DECK) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(
				m.lr,
				null,
				" ",
				(0, Localize)("#Settings_System_Idle_Sleep"),
			),
			n.createElement($.Xk, {
				bOnAC: true,
			}),
			n.createElement($.Xk, {
				bOnAC: false,
			}),
		);
	} else {
		return null;
	}
}
function nt() {
	const e = q3(() => l.rV.WindowedMode);
	if (rP().IN_VR) {
		return null;
	} else {
		return n.createElement(
			m.G5,
			null,
			n.createElement(m.iK, null, " ", (0, Localize)("#Settings_Display_BPM")),
			n.createElement(me.C, {
				feature: 7,
				checked: e,
				onChange: (e) => l.rV.SetWindowedMode(e),
				label: (0, Localize)("#Settings_Display_BPM_Windowed"),
				description: (0, Localize)("#Settings_Display_BPM_Windowed_Desc"),
			}),
		);
	}
}
function it() {
	const e = tn_2(i.BV.GamepadUI.ColorSettings(), {});
	const [t, r, a] = xs();
	const [s, o, l, c] = Xs();
	return (
		(t || s) &&
		n.createElement(
			n.Fragment,
			null,
			n.createElement(
				E.oN,
				{
					feature: 7,
					bottomSeparator: "none",
					onClick: e,
				},
				(0, Localize)("#Settings_Display_AdjustDisplayColors"),
			),
		)
	);
}
function at(e) {
	return n.createElement(
		m.G5,
		null,
		n.createElement(
			m.lr,
			null,
			" ",
			(0, Localize)("#Settings_System_Idle_Dim"),
		),
		n.createElement($.QY, {
			bOnAC: true,
		}),
		n.createElement($.QY, {
			bOnAC: false,
		}),
		n.createElement(rt, null),
	);
}
function st(e) {
	const t = hb();
	const [r, i] = gk();
	Qn_2();
	return n.createElement(
		m.nB,
		null,
		t &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement($.jJ, null),
				n.createElement($.qg, null),
				n.createElement(it, null),
			),
		false,
		n.createElement(et, null),
		td() && n.createElement(tt, null),
		!C.TS.IN_GAMESCOPE && n.createElement(nt, null),
		t && n.createElement(Ke, null),
		t && n.createElement(at, null),
		n.createElement(he.dU, null),
		n.createElement($e, null),
	);
}
function ot(e) {
	if (C.TS.ON_STEAMOS) {
		return n.createElement(We.Pl, {
			setting: "steamos_magnifier_scale",
			label: (0, Localize)("#Settings_Display_Mangifier_Scale"),
			min: 120,
			max: 300,
			step: 10,
			resetValue: 150,
			layout: "inline",
			valueSuffix: "%",
			showValue: true,
		});
	} else {
		return null;
	}
}
const mt = ct;
function gt(e) {
	const {
		feature: t,
		label: r,
		focusable: i,
		className: a,
		inputClassName: s,
		disabled: o,
		bottomSeparator: l,
		indentLevel: c,
		...u
	} = e;
	const d = Qn_2();
	const A = l9(t);
	const p = A !== 0;
	const g = wT();
	return n.createElement(
		m.D0,
		{
			className: a,
			label: r,
			disabled: p || o,
			focusable: !d || p,
			onActivate: p && !o ? () => g(A, t) : undefined,
			bottomSeparator: l,
			indentLevel: c,
		},
		n.createElement(m.pd, {
			...u,
			className: s,
			disabled: p || o,
		}),
	);
}
function ht(e) {
	const { feature: t, focusable: r, disabled: i, children: a, ...s } = e;
	const o = Qn_2();
	const l = l9(t);
	const c = l !== 0;
	const u = wT();
	return n.createElement(
		m.D0,
		{
			...s,
			disabled: c || i,
			focusable: !o || c,
			onActivate: c && !i ? () => u(l, t) : undefined,
		},
		a,
	);
}
function yt(e) {
	const { rgAppIDs: t } = e;
	const [r, i] = n.useState("");
	const a = n.useMemo(() => new Set(), []);
	const [s, o] = n.useState([]);
	n.useEffect(() => {
		t.forEach((e) => a.add(e));
		o([...a]);
	}, [t, a]);
	const l = ((e, t) =>
		n.useMemo(() => {
			const r = (t ?? "").trim().toLocaleLowerCase();
			return e
				.filter(
					(e) =>
						e?.display_name &&
						(r.length == 0 || e.display_name.toLocaleLowerCase().includes(r)),
				)
				.sort((e, t) => e.display_name.localeCompare(t.display_name));
		}, [e, t]))(li_2(s), r);
	return n.createElement(
		"div",
		{
			className: mt.AppsGrid,
		},
		n.createElement(m.pd, {
			className: mt.FilterText,
			value: r,
			onChange: (e) => i(e.currentTarget.value),
			placeholder: (0, Localize)("#AppUpdateOverrideManagement_SearchHint"),
			bShowClearAction: true,
		}),
		n.createElement(
			B.Z,
			{
				className: mt.AppsListCtn,
			},
			n.createElement(lt.t$, null, ({ width: e, height: t }) =>
				n.createElement(lt.B8, {
					className: mt.AppList,
					rowHeight: parseInt(mt.ItemHeight),
					rowCount: l.length,
					width: e,
					height: t,
					rowRenderer: ({ key: e, index: t, style: r }) =>
						n.createElement(St, {
							key: e,
							style: r,
							app: l[t],
							last: t == l.length - 1,
						}),
				}),
			),
		),
	);
}
function St(e) {
	const { style: t, app: r, last: i } = e;
	const a = T_3(r.appid);
	Qx();
	const s = R9(a?.eAutoUpdateValue, true);
	const o = BN();
	const l = br_2();
	if (a) {
		return n.createElement(
			"div",
			{
				style: t,
				className: mt.AppListItem,
			},
			n.createElement(
				"div",
				{
					className: mt.AppRow,
				},
				n.createElement(G.z, {
					className: mt.AppImage,
					app: r,
					eAssetType: 4,
				}),
				n.createElement(
					"a",
					{
						className: A(mt.AppName, mt.AppLink),
						onClick: () => l.App(r.appid),
					},
					r.display_name,
				),
				n.createElement(m.ZU, {
					strDropDownButtonClassName: mt.AppDropDown,
					menuLabel: (0, Localize)("#AppProperties_AutoUpdateSection"),
					rgOptions: o,
					selectedOption: a.eAutoUpdateValue,
					disabled: a.bIsThirdPartyUpdater || !a.bHasAnyLocalContent,
					onChange: (e) =>
						SteamClient.Apps.SetAppAutoUpdateBehavior(a.unAppID, e.data),
					controlled: true,
					bMatchWidth: false,
					renderButtonValue: () =>
						n.createElement(
							"div",
							{
								className: "DialogDropDown_CurrentDisplay",
							},
							s,
						),
				}),
			),
			!i &&
				n.createElement("div", {
					className: mt.AppSeparator,
				}),
		);
	}
}
function wt(e) {
	const { rgAppIDs: t, closeModal: r } = e;
	const [i] = VI("default_app_update_behavior");
	const a = FO(i, null);
	return n.createElement(
		m.nB,
		{
			className: A(mt.NoScroll, mt.AppUpdateOverrideManagement),
		},
		n.createElement(
			m.Y9,
			null,
			(0, Localize)("#AppUpdateOverrideManagement_Title"),
			" ",
		),
		n.createElement(
			E.Tv,
			null,
			LocalizeReact(
				"#AppUpdateOverrideManagement_Setting",
				n.createElement(
					"span",
					{
						className: mt.CurrentSetting,
					},
					a,
				),
			),
			n.createElement("br", null),
			(0, Localize)("#AppUpdateOverrideManagement_Description"),
		),
		n.createElement(yt, {
			rgAppIDs: t,
		}),
		n.createElement(
			E.CS,
			{
				className: mt.DoneButton,
				onClick: r,
			},
			(0, Localize)("#AppUpdateOverrideManagement_Done"),
		),
	);
}
const Bt = (e) => {
	const { closeModal: t } = e;
	const r = vt();
	return n.createElement(
		X.mt,
		{
			active: true,
			onDismiss: t,
		},
		r == null
			? n.createElement(_t.t, null)
			: n.createElement(wt, {
					rgAppIDs: r,
					closeModal: t,
				}),
	);
};
function vt() {
	const [e] = VI("default_app_update_behavior");
	const [t, r] = n.useState(undefined);
	n.useEffect(
		() =>
			SteamClient.Settings.RegisterForAppsWithAutoUpdateOverrides((e) =>
				r(e.map((e) => e.appid)),
			).unregister,
		[e],
	);
	return t;
}
const It = () => {
	const e = t0().vecValidDownloadRegions.map((e) => ({
		data: e.nRegionID,
		label: e.strRegionName,
	}));
	return n.createElement(pt.X, {
		label: (0, Localize)("#DownloadSettings_SelectRegion"),
		onChange: (e, t) => {
			const r = GetOwningWindowForElement(t.element);
			$_2({
				ownerWindow: r,
				strCancelButtonText: (0, Localize)("#Settings_RestartLater_ButtonText"),
			});
		},
		rgOptions: e,
		layout: "inline",
		setting: "download_region",
	});
};
const Et = () => {
	const [e, t] = VI("download_throttle_rate");
	const [r] = VI("download_rate_bits_per_s");
	const [i, a] = n.useState(e.toString());
	const [s, o] = n.useState(Number(i) > 0);
	const c = r ? 1 : 8;
	const u = Sz(c);
	const p = Number(i);
	const g = XI((e) => {
		if (!isNaN(Number(e.target.value))) {
			a(e.target.value);
		}
	});
	n.useEffect(() => {
		a(u == 8 ? (p * u).toString() : (p / c).toString());
	}, [c]);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#DownloadSettings_BandwidthLimit"),
			checked: s,
			onChange: (e) => {
				t(e ? Math.floor(p * c) : 0);
				o(e);
			},
			bottomSeparator: "standard",
		}),
		s &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(gt, {
					feature: 7,
					label: (0, Localize)(
						r
							? "#DownloadSettings_BandwidthLimit_Desc_Kilobits"
							: "#DownloadSettings_BandwidthLimit_Desc_Kilobytes",
					),
					className: mt.BandwidthInputField,
					inputClassName: mt.BandwidthInput,
					mustBeNumeric: true,
					value: p > 0 ? i : "",
					placeholder: (0, Localize)(
						"#DownloadSettings_BandwidthLimit_Placeholder",
					),
					onChange: g,
					onBlur: (r) => {
						if (p * c != e) {
							t(Math.floor(p * c));
						}
					},
					bottomSeparator: "none",
					indentLevel: 1,
					inlineControls: n.createElement(
						"div",
						{
							className: mt.BandwidthLimit,
						},
						(0, Localize)(
							r ? "#Kilobits_PerSecond" : "#Kilobytes_PerSecond",
							"",
						),
					),
				}),
				n.createElement(m.Nu, {
					className: A(mt.Indent, mt.MinHeight),
				}),
			),
	);
};
const Mt = () => {
	const e = t0();
	const [t] = VI("restrict_auto_updates");
	const [r, i] = VI("restrict_auto_updates_start");
	const [a, s] = VI("restrict_auto_updates_end");
	const o = e.vecValidAutoUpdateRestrictHours.map((e) => ({
		data: e.nHour,
		label: e.strDisplay,
	}));
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(_.G, {
			feature: 7,
			bottomSeparator: "standard",
			label: (0, Localize)("#DownloadSettings_ScheduleAutoUpdates"),
			setting: "restrict_auto_updates",
		}),
		t &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					ht,
					{
						feature: 7,
						indentLevel: 1,
						bottomSeparator: "none",
						label: (0, Localize)("#DownloadSettings_RestrictUpdatesFrom"),
						childrenLayout: "inline",
						childrenContainerWidth: "fixed",
					},
					n.createElement(
						B.Z,
						{
							className: mt.TimeRangeControls,
						},
						n.createElement(ue.I, {
							feature: 7,
							rgOptions: o,
							selectedOption: r,
							onChange: (e) => {
								i(e.data);
							},
						}),
						n.createElement(
							"div",
							{
								className: mt.And,
							},
							(0, Localize)("#DownloadSettings_RestrictUpdatesTo"),
						),
						n.createElement(ue.I, {
							feature: 7,
							rgOptions: o,
							selectedOption: a,
							onChange: (e) => {
								s(e.data);
							},
						}),
					),
				),
				n.createElement(m.Nu, {
					className: A(mt.Indent, mt.MinHeight),
				}),
			),
	);
};
const Tt = () =>
	n.createElement(_.G, {
		feature: 7,
		label: (0, Localize)("#DownloadSettings_AllowDownloadDuringGameplay"),
		description: (0, Localize)(
			"#DownloadSettings_AllowDownloadDuringGameplay_Description",
		),
		setting: "download_while_app_running",
	});
const Rt = () =>
	n.createElement(_.G, {
		feature: 7,
		label: (0, Localize)("#DownloadSettings_ThrottleDuringStreaming"),
		description: (0, Localize)(
			"#DownloadSettings_ThrottleDuringStreaming_Description",
		),
		setting: "download_throttle_while_streaming",
	});
const kt = (e) =>
	n.createElement(_.G, {
		feature: h.uX,
		bottomSeparator: "standard",
		label: (0, Localize)("#DownloadSettings_DisplayInBitsPerSecond"),
		setting: "download_rate_bits_per_s",
	});
const Dt = () => {
	const [e, t] = VI("default_app_update_behavior");
	const r = vt();
	const i = [
		...Ct.md.GetCollection(Ct.A8.LocalPlayed).visibleApps,
		...Ct.md.GetCollection(Ct.A8.Recent).visibleApps,
	].filter((e) => !ak(e.appid))[0];
	const a = !!i;
	const s = a
		? () => SteamClient.Apps.OpenAppSettingsDialog(i.appid, "updates")
		: undefined;
	const [o, c, u] = uD(false);
	const p = [
		{
			label: (0, Localize)(
				"#DownloadSettings_DefaultAppUpdateBehavior_KeepUpToDate",
			),
			data: 3,
		},
		{
			label: (0, Localize)(
				"#DownloadSettings_DefaultAppUpdateBehavior_UpdateOnLaunch",
			),
			data: 1,
		},
	];
	const g = e == 3;
	return n.createElement(
		n.Fragment,
		null,
		o &&
			n.createElement(Bt, {
				closeModal: u,
			}),
		n.createElement(
			m.G5,
			null,
			n.createElement(
				E.Pq,
				null,
				(0, Localize)("#DownloadSettings_DefaultAppUpdateBehavior"),
			),
			n.createElement(
				E.Tv,
				null,
				(0, Localize)("#DownloadSettings_DefaultAppUpdateBehavior_Description"),
			),
			!a &&
				n.createElement(
					E.Tv,
					null,
					(0, Localize)(
						"#DownloadSettings_DefaultAppUpdateBehavior_Exceptions_NoGame",
					),
				),
			a &&
				n.createElement(
					E.Tv,
					null,
					LocalizeReact(
						"#DownloadSettings_DefaultAppUpdateBehavior_Exceptions",
						n.createElement(
							"a",
							{
								className: mt.LastGamePlayed,
								onClick: s,
							},
							i.display_name,
						),
					),
				),
			n.createElement(
				B.Z,
				{
					className: mt.DropDownRow,
				},
				n.createElement(ue.B, {
					feature: 7,
					layout: "below",
					rgOptions: p,
					selectedOption: e,
					onChange: (e) => {
						t(e.data);
					},
					contextMenuPositionOptions: {
						bMatchWidth: true,
					},
					bottomSeparator: "none",
				}),
				r?.length > 0 &&
					n.createElement(
						E.oN,
						{
							feature: 7,
							onClick: c,
							bottomSeparator: "none",
						},
						LocalizePlural(
							"#DownloadSettings_ManageAppUpdateOverrides",
							r?.length,
						),
					),
			),
			n.createElement(m.Nu, {
				className: A(mt.MinHeight),
			}),
			g && n.createElement(Mt, null),
		),
	);
};
const Nt = () => {
	const [e, t] = VI("download_peer_content");
	const r = e != 0;
	const i = [
		{
			label: (0, Localize)("#DownloadSettings_PeerContentSameUser"),
			data: 1,
		},
		{
			label: (0, Localize)("#DownloadSettings_PeerContentFriends"),
			data: 2,
		},
		{
			label: (0, Localize)("#DownloadSettings_PeerContentAnyUser"),
			data: 3,
		},
	];
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#DownloadSettings_PeerContent"),
			description: (0, Localize)("#DownloadSettings_PeerContentDescription"),
			checked: r,
			onChange: (e) => {
				t(e ? 1 : 0);
			},
			bottomSeparator: "standard",
		}),
		r &&
			n.createElement(
				"div",
				{
					className: mt.Indent,
				},
				n.createElement(ue.B, {
					feature: 7,
					label: (0, Localize)("#DownloadSettings_PeerContentServerMode"),
					rgOptions: i,
					selectedOption: e,
					onChange: (e) => {
						t(e.data);
					},
					contextMenuPositionOptions: {
						bMatchWidth: false,
					},
				}),
			),
	);
};
const Ft = () => {
	const e = T2();
	const [t, r, i] = M_2({
		className: mt.ConfirmCacheClearDialog,
		bCloseOnOK: true,
		onOK: () => {
			if (e) {
				e();
			}
			SteamClient.Settings.ClearDownloadCache();
		},
		strTitle: (0, Localize)("#DownloadSettings_ClearDownloadCache"),
		strDescription: (0, Localize)(
			"#DownloadSettings_ClearDownloadCacheWarning",
		),
	});
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: (0, Localize)("#DownloadSettings_ClearDownloadCache"),
			description: (0, Localize)("#DownloadSettings_ClearDownloadCacheDesc"),
			onClick: r,
		},
		t,
		(0, Localize)("#DownloadSettings_ClearDownloadCacheButton"),
	);
};
const Gt = () => {
	const [e] = VI("enable_shader_precache");
	const [t] = hX("shader_precached_size");
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			m.tX,
			null,
			(0, Localize)("#DownloadSettings_PreShaderHeader"),
		),
		n.createElement(m.D0, {
			description: (0, Localize)("#DownloadSettings_PreShaderDesc"),
			bottomSeparator: "none",
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#DownloadSettings_PreShaderEnable", t || 0),
			setting: "enable_shader_precache",
		}),
		n.createElement(_.G, {
			feature: 7,
			disabled: !e,
			setting: "enable_shader_background_processing",
			label: (0, Localize)("#DownloadSettings_PreShaderBackgroundProcessing"),
		}),
	);
};
function Ot(e) {
	const t = hf();
	return n.createElement(
		E.sh,
		{
			className: mt.DownloadBody,
		},
		n.createElement(It, null),
		n.createElement(Et, null),
		n.createElement(Dt, null),
		n.createElement(Tt, null),
		n.createElement(Rt, null),
		n.createElement(kt, null),
		t && n.createElement(Ft, null),
		n.createElement(Nt, null),
		t && n.createElement(m.G5, null, n.createElement(Gt, null)),
	);
}
const Pt = () =>
	n.createElement(_.G, {
		feature: h.uX,
		label: (0, Localize)("#CloudSettings_CloudEnabled"),
		description: (0, Localize)("#CloudSettings_CloudEnabled_Description"),
		setting: "cloud_enabled",
	});
const Lt = () => {
	const e = Y2();
	return n.createElement(_.G, {
		feature: h.uX,
		label: (0, Localize)("#CloudSettings_ShowScreenshotManager"),
		description: (0, Localize)(
			"#CloudSettings_ShowScreenshotManager_Description",
		),
		setting: "show_screenshot_manager",
		visible: !e,
	});
};
function zt(e) {
	return n.createElement(
		E.sh,
		null,
		n.createElement(Pt, null),
		n.createElement(Lt, null),
	);
}
function Ht(e) {
	const t = R7();
	const r = vJ(() => SteamClient.Settings.GetCurrentLanguage(), []);
	const i = vJ(() => SteamClient.Settings.GetAvailableLanguages(), []);
	const a =
		i?.map((e) => {
			return {
				label:
					((t = e.strShortName),
					t === "none" ? "None" : (0, Localize)(`#language_selection_${t}`)),
				data: e.strShortName,
			};
			var t;
		}) ?? [];
	const s = n.useRef(undefined);
	const o = q3(() => l.rV.IsDeferred("Language"));
	const c = n.useCallback((e) => {
		SteamClient.Settings.SetCurrentLanguage(e);
		Ut.O.AddValidKeyboardLayoutByLanguage(sf(e));
	}, []);
	const m = n.useCallback(
		(e) => {
			c(e);
			l.rV.SetDeferred("Language");
		},
		[c],
	);
	const u = n.useCallback(
		(e) => {
			if (e != r) {
				$_2({
					strDescription: (0, Localize)("#Settings_Language_NeedsRestart"),
					fnOnOK: () => c(e),
					strCancelButtonText: (0, Localize)(
						"#Settings_RestartLater_ButtonText",
					),
					fnOnCancel: () => m(e),
					ownerWindow: t.ownerWindow,
				});
			}
		},
		[c, m, r, t.ownerWindow],
	);
	return n.createElement(ue.B, {
		feature: 7,
		autoFocus: e.autoFocus,
		bottomSeparator: e.bottomSeparator,
		strClassName: e.className,
		label: n.createElement(Wt.S, {
			deferred: o,
			label: e.strLabel,
		}),
		description: e.description,
		disabled: r === undefined || a.length == 0,
		rgOptions: a,
		selectedOption: r,
		onChange: (e) => u(e.data),
		dropDownControlRef: s,
		contextMenuPositionOptions: e.contextMenuPositionOptions,
	});
}
function jt(e) {
	const t = rP();
	const r = gc(l.rV.GetBatteryPreferences());
	return (
		!t.IN_VR &&
		n.createElement(me.C, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Battery_Percentage"),
			description: (0, Localize)("#Settings_Battery_Percentage_Desc"),
			checked: r?.bShowBatteryPercentage,
			onChange: (e) => {
				let t = {
					bShowBatteryPercentage: e,
				};
				t.bShowBatteryPercentage = e;
				l.rV.SetBatteryPreferences(t);
			},
		})
	);
}
function qt(e) {
	return n.createElement(
		m.nB,
		null,
		n.createElement(Ht, {
			bottomSeparator: "standard",
			strLabel: (0, Localize)("#Settings_Language_Select"),
		}),
		n.createElement(jt, null),
		n.createElement(Vt.tm, null),
	);
}
const Xt = Kt;
const Jt = PA((e) => {
	const { appid: t } = e;
	const r = F.tw.GetAppOverviewByAppID(t);
	return n.createElement(
		"div",
		{
			className: Xt.AppSelectorLabel,
		},
		n.createElement(
			"div",
			{
				className: Xt.PortraitContainer,
			},
			n.createElement(G.z, {
				className: Xt.Portrait,
				eAssetType: 3,
				app: r,
			}),
		),
		n.createElement(
			"div",
			{
				className: Xt.Name,
			},
			r.display_name,
		),
	);
});
const $t = (e) => {
	const { appid: t } = e;
	const r = n.useCallback(() => {
		Yt.dm.ResetUserAppPriorityForApp(t);
	}, [t]);
	return n.createElement(
		m.xh,
		{
			bottomSeparator: "none",
			className: Xt.AppSelectorButton,
			label: n.createElement(Jt, {
				appid: t,
			}),
			onClick: r,
		},
		n.createElement(Zt.sED, {
			color: "currentColor",
		}),
	);
};
const er = (e) => {
	const { count: t } = e;
	const r =
		t == 1
			? "#HomeSettings_HiddenGameCount"
			: "#HomeSettings_HiddenGameCount_Plural";
	return n.createElement(
		"div",
		{
			className: Xt.HiddenGameLabel,
		},
		n.createElement(
			"div",
			null,
			LocalizeReact(
				r,
				n.createElement(
					"span",
					{
						className: Xt.GameCount,
					},
					t,
				),
			),
		),
		n.createElement(
			"div",
			{
				className: Xt.Description,
			},
			(0, Localize)("#HomeSettings_HiddenGameCount_Description"),
		),
	);
};
const tr = () => {
	const e = q3(() => Ct.md.GetCollection(Ct.A8.Hidden).allApps);
	const t = W6();
	const r = n.useCallback(() => {
		t.push(i.BV.Library.Collection(Ct.A8.Hidden));
	}, [t]);
	if (e.length == 0) {
		return null;
	} else {
		return n.createElement(
			E.oN,
			{
				feature: h.uX,
				bottomSeparator: "standard",
				label: n.createElement(er, {
					count: e.length,
				}),
				onClick: r,
			},
			(0, Localize)("#HomeSettings_ManageHiddenGames"),
		);
	}
};
const rr = (e) => {
	const { rgApps: t, strHeader: r } = e;
	const i = q3(() => t.filter((e) => !S.jR.BIsAppBlocked(e)));
	if (i.length == 0) {
		return null;
	} else {
		return n.createElement(
			"div",
			{
				className: A(Xt.AppPrioritySection, Xt.ShowLess),
			},
			n.createElement(
				"div",
				{
					className: Xt.AppPriorityHeader,
				},
				r,
			),
			n.createElement(
				"div",
				{
					className: Xt.AppPriorityList,
				},
				i.map((e) =>
					n.createElement($t, {
						key: e,
						appid: e,
					}),
				),
			),
		);
	}
};
const nr = () => {
	let e = Ss();
	let t = M3();
	n.useEffect(() => {
		Yt.dm.FetchUpdatedEventAppPrioritiesForUser();
	}, []);
	return n.createElement(
		m.nB,
		{
			className: A(Xt.HomeSettings),
		},
		n.createElement(_.G, {
			feature: h.uX,
			setting: "show_store_content_on_home",
			label: (0, Localize)("#HomeSettings_ShowStoreContent"),
		}),
		n.createElement(m.iK, null, (0, Localize)("#WhatsNewSettings")),
		n.createElement(_.G, {
			feature: h.uX,
			setting: "library_whats_new_show_only_product_updates",
			bottomSeparator: "standard",
			label: (0, Localize)("#HomeSettings_WhatsNewUpdatesOnly"),
		}),
		n.createElement(tr, null),
		n.createElement(
			"div",
			{
				className: Xt.Instructions,
			},
			(0, Localize)("#HomeSettings_WhatsNew_Instructions"),
		),
		n.createElement(rr, {
			rgApps: e,
			strHeader: (0, Localize)("#HomeSettings_ShowingLess"),
		}),
		n.createElement(rr, {
			rgApps: t,
			strHeader: (0, Localize)("#HomeSettings_ShowingMore"),
		}),
	);
};
const dr = ur;
function pr(e) {
	const t = n.useCallback((e) => {}, []);
	const r = n.useCallback(() => {}, []);
	const i = FN({
		onTextEntered: t,
		onKeyboardNavOut: r,
	});
	return n.createElement(
		m.$n,
		{
			className: dr.ShowKeyboardButton,
			onClick: () => i.ShowVirtualKeyboard(),
			onOKActionDescription: (0, Localize)("#Settings_Keyboard_Preview"),
		},
		n.createElement(u.ShowKeyboard, null),
	);
}
function gr(e) {
	const t = Qt_1(`${cr.B7.ResolveURL("PointsShop")}c/keyboard`);
	return n.createElement(
		E.oN,
		{
			feature: 1,
			label: (0, Localize)("#Settings_Keyboard_PointsShop"),
			description: (0, Localize)("#Settings_Keyboard_PointsShop_Desc"),
			onClick: t,
			bottomSeparator: "standard",
		},
		(0, Localize)("#Settings_Keyboard_PointsShop_Visit"),
	);
}
function hr(e) {
	const t = q3(() => Ut.O.HapticPreset);
	const r = q3(() => Ut.O.HapticSettings);
	const i = oM() || t == Ut.X.Custom;
	const a = [
		{
			data: Ut.X.Off,
			label: (0, Localize)("#Settings_Keyboard_Haptics_Off"),
		},
		{
			data: Ut.X.Low,
			label: (0, Localize)("#Settings_Keyboard_Haptics_Low"),
		},
		{
			data: Ut.X.Medium,
			label: (0, Localize)("#Settings_Keyboard_Haptics_Medium"),
		},
		{
			data: Ut.X.High,
			label: (0, Localize)("#Settings_Keyboard_Haptics_High"),
		},
	];
	if (i) {
		a.push({
			data: Ut.X.Custom,
			label: "Custom (Valve only)",
		});
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(ue.B, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Keyboard_Haptics"),
			rgOptions: a,
			selectedOption: t,
			onChange: (e) => Ut.O.SetHapticSettings(e.data),
		}),
		t == Ut.X.Custom &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(ue.B, {
					feature: h.uX,
					indentLevel: 1,
					label: "Haptic Type",
					disabled: t != Ut.X.Custom,
					rgOptions: [
						{
							data: sr.n.Tick,
							label: "Tick",
						},
						{
							data: sr.n.Click,
							label: "Click",
						},
					],
					selectedOption: r.eHapticType,
					onChange: (e) =>
						Ut.O.SetHapticSettings({
							...r,
							eHapticType: e.data,
						}),
				}),
				n.createElement(O.V, {
					feature: h.uX,
					indentLevel: 1,
					label: "Intensity",
					description:
						"Changes the waveform specification between four intensities.",
					disabled: t != Ut.X.Custom,
					min: 1,
					max: 4,
					value: r.unIntensity,
					onChange: (e) =>
						Ut.O.SetHapticSettings({
							...r,
							unIntensity: e,
						}),
					layout: "inline",
					showValue: true,
				}),
				n.createElement(O.V, {
					feature: h.uX,
					indentLevel: 1,
					label: "Gain",
					description: "Modulates the amplitude of the waveform.",
					disabled: t != Ut.X.Custom,
					min: -5,
					max: 5,
					value: r.ndBGain,
					onChange: (e) =>
						Ut.O.SetHapticSettings({
							...r,
							ndBGain: e,
						}),
					showValue: true,
					valueSuffix: "dB",
					layout: "inline",
				}),
			),
	);
}
function Cr(e) {
	const t = C.TS.ON_DECK;
	const r = q3(() => Ut.O.InitialLocationDesktop);
	const i = q3(() => Ut.O.InitialLocationOverlay);
	const a = [
		{
			data: "center-bottom",
			label: (0, Localize)("#Settings_Keyboard_Location_Center_Bottom"),
		},
		!t && {
			data: "lower-left",
			label: (0, Localize)("#Settings_Keyboard_Location_Lower_Left"),
		},
		!t && {
			data: "upper-left",
			label: (0, Localize)("#Settings_Keyboard_Location_Upper_Left"),
		},
		{
			data: "center-top",
			label: (0, Localize)("#Settings_Keyboard_Location_Center_Top"),
		},
		!t && {
			data: "upper-right",
			label: (0, Localize)("#Settings_Keyboard_Location_Upper_Right"),
		},
		!t && {
			data: "lower-right",
			label: (0, Localize)("#Settings_Keyboard_Location_Lower_Right"),
		},
	];
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(ue.B, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Keyboard_Location_Desktop"),
			rgOptions: a,
			selectedOption: r,
			onChange: (e) => (Ut.O.InitialLocationDesktop = e.data),
		}),
		n.createElement(ue.B, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Keyboard_Location_Overlay"),
			rgOptions: a,
			selectedOption: i,
			onChange: (e) => (Ut.O.InitialLocationOverlay = e.data),
		}),
	);
}
function _r(e) {
	n.useEffect(() => {
		mr.iG.ForceRefreshEquippedItems();
	}, []);
	let t = n.useRef(undefined);
	const r = q3(() => ar.Fd.Get().GetControllers()).find(
		(e) => e.eControllerType == 4,
	);
	const i = TR(r?.strSerialNumber);
	const a = qw().BIsOfflineMode();
	const s = N4();
	const o = Tr_2();
	const l = sf_2();
	let c = [
		{
			label: (0, Localize)("#Settings_Keyboard_DefaultTheme"),
			data: "0",
		},
	];
	if (l?.length > 0) {
		c = c.concat(
			l.map((e) => ({
				label: e.item_title,
				data: e.communityitemid,
			})),
		);
	}
	let u = c.length > 1 && !a && s;
	let d = null;
	if (!u) {
		d = a
			? (0, Localize)("#Settings_Keyboard_CannotSetTheme_Offline")
			: s
				? i
					? (0, Localize)("#Settings_Keyboard_CannotSetTheme_NoThemes")
					: (0, Localize)("#Settings_Keyboard_CannotSetTheme_ClaimThemes")
				: (0, Localize)(
						"#Settings_Keyboard_CannotSetTheme_NoNetworkConnection",
					);
	}
	return n.createElement(
		m.D0,
		{
			label: (0, Localize)("#Settings_Keyboard_Theme"),
			description: d,
			childrenContainerWidth: "min",
			ref: t,
		},
		n.createElement(
			B.Z,
			{
				className: dr.KeyboardThemeButtons,
			},
			n.createElement(ue.I, {
				feature: h.uX,
				disabled: !u,
				selectedOption: o?.steam_deck_keyboard_skin?.communityitemid ?? "0",
				rgOptions: c,
				onChange: (e) => {
					r = GetOwningWindowForElement(t.current);
					i = e.data;
					mr.iG.EquipKeyboardSkin(i).then((e) => {
						if (e != 1) {
							pg(
								n.createElement(X.KG, {
									strDescription: (0, Localize)(
										"#Settings_Keyboard_SetThemeError_Body",
										e,
									),
								}),
								r,
							);
						}
					});
					return;
					var r;
					var i;
				},
			}),
			n.createElement(pr, {
				ownerWindow: t.current?.ownerDocument.defaultView,
			}),
		),
	);
}
function fr(e) {
	const t = rP();
	let r = q3(() => Ut.O.TrackpadTypingTriggerAsClick);
	let i = q3(() => Ut.O.TrackPadTypingInputScale);
	return (
		!t.IN_VR &&
		n.createElement(
			m.G5,
			null,
			n.createElement(
				m.lr,
				null,
				" ",
				(0, Localize)("#Settings_Keyboard_TrackpadingTyping_Section"),
				" ",
			),
			n.createElement(me.C, {
				feature: h.uX,
				checked: r,
				onChange: (e) => (Ut.O.TrackpadTypingTriggerAsClick = e),
				label: (0, Localize)(
					"#Settings_Keyboard_TrackpadingTyping_TriggerAsClick",
				),
				description: (0, Localize)(
					"#Settings_Keyboard_TrackpadingTyping_TriggerAsClick_Desc",
				),
			}),
			n.createElement(O.V, {
				feature: h.uX,
				layout: "inline",
				label: (0, Localize)("#Settings_Keyboard_TrackpadingTyping_InputScale"),
				description: (0, Localize)(
					"#Settings_Keyboard_TrackpadingTyping_InputScale_Desc",
				),
				value: i,
				onChange: (e) => (Ut.O.TrackPadTypingInputScale = e),
				min: 1,
				max: 2,
				step: 0.25,
				showValue: true,
				notchCount: 5,
				renderValue: (e) => `${e}x`,
			}),
		)
	);
}
function br(e) {
	const t = q3(() => Ut.O.GetKeyboardLayoutSettings().currentLayout);
	const r = q3(() => G$());
	const i = n.useCallback((e) => {
		Ut.O.SetKeyboardLayout(e);
	}, []);
	return n.createElement(
		B.Z,
		null,
		n.createElement(
			E.oN,
			{
				feature: 7,
				label: (0, Localize)("#Settings_Keyboard_ActiveKeyboards"),
				description:
					r.length > 1 &&
					LocalizeReact(
						"#Settings_Keyboard_SwitchHint",
						n.createElement(u.Network, {
							height: "16px",
							style: {
								verticalAlign: "bottom",
							},
						}),
					),
				onClick: (e) => zK(GetOwningWindowForEvent(e)),
				bottomSeparator: "none",
			},
			(0, Localize)("#Settings_Keyboard_ActiveKeyboards_Edit"),
		),
		r.map((e, r) =>
			n.createElement(
				m.Nv,
				{
					focusable: true,
					key: r,
					label: (0, Localize)(e.locToken),
					bottomSeparator: "none",
					padding: "none",
					onClick: () => i(e.layout),
				},
				t == e.layout ? (0, Localize)("#Settings_Keyboard_CurrentLayout") : "",
			),
		),
	);
}
function yr(e) {
	return n.createElement(
		m.nB,
		null,
		n.createElement(_r, null),
		n.createElement(gr, null),
		n.createElement(hr, null),
		n.createElement(Cr, null),
		n.createElement(br, null),
		n.createElement(fr, null),
	);
}
const wr = Sr;
const vr = Br;
const Tr =
	"data:image/png;base64,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";
let Rr;
function Nr(e) {
	if (e.startsWith("https://")) {
		return e;
	} else {
		return `${C.TS.MEDIA_CDN_COMMUNITY_URL}images/${e}`;
	}
}
function Fr(e) {
	const t = Qt_1(`${cr.B7.ResolveURL("PointsShop")}c/startupmovie`);
	return n.createElement(
		E.oN,
		{
			feature: 1,
			label: (0, Localize)("#Settings_Customization_StartupVideo_PointsShop"),
			onClick: t,
			bottomSeparator: "standard",
		},
		(0, Localize)("#Settings_Customization_StartupVideo_PointsShop_Visit"),
	);
}
function Gr(e) {
	let {
		strURL: t,
		bFullscreenVideo: r,
		playingState: i,
		onCancel: a,
		onVideoComplete: o,
	} = e;
	LC();
	pw();
	return n.createElement(
		X.EN,
		{
			active: true,
		},
		n.createElement(
			B.Z,
			{
				className: vr.StartupMoviePreviewContainer,
				focusable: true,
				noFocusRing: true,
				autoFocus: true,
				onOKActionDescription: null,
				onCancel: a,
			},
			i == Rr.StartupAnimation &&
				n.createElement(Ir.r, {
					strOverrideStartupMovie: t,
					bFullscreenVideo: r,
					onVideoComplete: o,
				}),
			i == Rr.LoadingSpinner &&
				n.createElement(Er.j, {
					showFooter: true,
				}),
		),
	);
}
function Or(e) {
	let { strImageURL: t, strMovieURL: r, bFullscreenVideo: i, ...a } = e;
	let [s, o] = n.useState(Rr.None);
	const l = () => {
		if (s == Rr.StartupAnimation) {
			o(Rr.LoadingSpinner);
			setTimeout(() => o(Rr.None), 1500);
		}
	};
	return n.createElement(
		n.Fragment,
		null,
		s != Rr.None &&
			n.createElement(Gr, {
				strURL: r,
				bFullscreenVideo: i,
				playingState: s,
				onCancel: () => {
					o(Rr.None);
				},
				onVideoComplete: l,
			}),
		n.createElement(
			B.Z,
			{
				noFocusRing: true,
				className: vr.StartupMovieOption,
				...a,
				onOptionsButton: () => {
					o(Rr.StartupAnimation);
					setTimeout(l, 10000);
				},
				onOptionsActionDescription: (0, Localize)(
					"#Settings_Customization_StartupVideo_Preview",
				),
			},
			t &&
				n.createElement("img", {
					src: t,
					className: vr.PreviewImage,
				}),
		),
	);
}
function Pr(e) {
	const {
		bIsLoading: t,
		bFullscreenVideo: r,
		strMovieUrl: i,
		strThumbnailUrl: a,
	} = K_2();
	const s = hb_2(7);
	if (t) {
		return null;
	} else {
		return n.createElement(Or, {
			strImageURL: a,
			strMovieURL: i,
			focusable: !s,
			onActivate:
				s ||
				(() => {
					mr.iG.SetStartupMovie(null);
				}),
			bFullscreenVideo: r,
		});
	}
}
function Lr(e) {
	let { movie: t, bSelected: r } = e;
	let [i, a] = n.useState(false);
	let s = t.communityitemid.length != 0;
	let o = s ? t.movie_webm_local_path || Nr(t.movie_webm) : t.movie_webm;
	let l = s ? Nr(t.image_large) : Tr;
	if (!s && t.image_large) {
		l = t.image_large;
	}
	const c = n.useCallback(() => {
		if (!i) {
			if (t.movie_webm_local_path.length != 0) {
				mr.iG.SetStartupMovie(t);
			} else {
				a(true);
				mr.iG.DownloadMovie(t);
			}
		}
	}, [t, i]);
	const m = n.useCallback(() => {
		mr.iG.RemoveMovieFromDisk(t);
	}, [t]);
	let u = {
		onActivate: c,
	};
	if (s) {
		if (i) {
			u.onActivate = undefined;
			u.onOKActionDescription = undefined;
		} else if (t.movie_webm_local_path.length == 0) {
			u.onOKActionDescription = (0, Localize)(
				"#Settings_Customization_StartupVideo_Download",
			);
		} else if (!r) {
			u.onSecondaryButton = m;
			u.onSecondaryActionDescription = (0, Localize)(
				"#Settings_Customization_StartupVideo_RemoveFromDisk",
			);
		}
	}
	return n.createElement(Or, {
		strImageURL: i ? kr.A : l,
		strMovieURL: o,
		bFullscreenVideo: true,
		...u,
	});
}
function zr(e) {
	const { name: t, description: r } = e;
	return n.createElement(
		"div",
		null,
		n.createElement("div", null, t),
		n.createElement(
			"div",
			{
				className: wr.FieldDescription,
			},
			r,
		),
	);
}
function xr(e) {
	const t = oS();
	const [r] = VI("startup_movie_local_path");
	const [i, a] = VI("startup_movie_shuffle");
	const [s, o] = VI("startup_movie_used_for_resume");
	const c = q3(() => mr.iG.GetStartupMovies());
	const p = n.useCallback(
		(e) =>
			e.communityitemid.length != 0
				? t == e.communityitemid
				: e.movie_webm == r,
		[t, r],
	);
	const g = n.useCallback(
		(e) => e.communityitemid.length == 0 || e.movie_webm_local_path.length != 0,
		[],
	);
	const h = n.useCallback(
		(e) =>
			e.communityitemid.length != 0
				? (0, Localize)("#Settings_Customization_StartupVideo_Type_PointsShop")
				: (0, Localize)("#Settings_Customization_StartupVideo_Type_Local"),
		[],
	);
	const _ = n.useCallback(
		(e) => {
			o(e);
			if (e) {
				dT();
			}
		},
		[o],
	);
	const f = n.useCallback(
		(e) => {
			a(e);
			dT();
		},
		[a],
	);
	let b = t == "0" && r.length == 0;
	let y = c.filter((e) => g(e));
	let S = c.filter((e) => !g(e));
	return n.createElement(
		B.Z,
		{
			retainFocus: true,
		},
		n.createElement(
			"div",
			{
				className: vr.StartupMoviesSelectionDesc,
			},
			(0, Localize)("#Settings_Customization_StartupVideo_Desc"),
		),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_Customization_StartupVideo_Shuffle"),
			description: (0, Localize)(
				"#Settings_Customization_StartupVideo_Shuffle_Desc",
			),
			checked: i,
			onChange: f,
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_Customization_StartupVideo_Resume"),
			description: (0, Localize)(
				"#Settings_Customization_StartupVideo_Resume_Desc",
			),
			checked: s,
			onChange: _,
		}),
		n.createElement(
			m.Nv,
			{
				label: n.createElement(zr, {
					name: (0, Localize)("#Settings_Customization_StartupVideo_Default"),
					description: (0, Localize)(
						C.TS.ON_DECK
							? "#Settings_Customization_StartupVideo_Default_Deck_Desc"
							: "#Settings_Customization_StartupVideo_Default_Desc",
					),
				}),
				icon: n.createElement(u.Checkmark, {
					className: A(vr.Checkmark, b && vr.Selected),
				}),
			},
			n.createElement(Pr, {
				bSelected: b,
			}),
		),
		y.map((e) =>
			n.createElement(
				m.Nv,
				{
					key: e.movie_webm,
					label: n.createElement(zr, {
						name: e.item_title,
						description: h(e),
					}),
					icon: n.createElement(u.Checkmark, {
						className: A(vr.Checkmark, p(e) && vr.Selected),
					}),
				},
				n.createElement(Lr, {
					movie: e,
					bSelected: p(e),
				}),
			),
		),
		S.length != 0 &&
			n.createElement(
				m.lr,
				null,
				(0, Localize)("#Settings_Customization_StartupVideo_NotDownloaded"),
			),
		S.map((e) =>
			n.createElement(
				m.Nv,
				{
					key: e.movie_webm,
					label: n.createElement(zr, {
						name: e.item_title,
						description: h(e),
					}),
					icon: n.createElement(u.Checkmark, {
						className: A(vr.Checkmark, p(e) && vr.Selected),
					}),
				},
				n.createElement(Lr, {
					movie: e,
					bSelected: p(e),
				}),
			),
		),
	);
}
function Ur(e) {
	return n.createElement(
		m.G5,
		null,
		n.createElement(
			m.lr,
			null,
			(0, Localize)("#Settings_Customization_StartupVideo"),
			" ",
		),
		n.createElement(xr, null),
		n.createElement(Fr, null),
	);
}
function Wr(e) {
	return n.createElement(m.nB, null, n.createElement(Ur, null));
}
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.StartupAnimation = 1)] = "StartupAnimation";
	e[(e.LoadingSpinner = 2)] = "LoadingSpinner";
})((Rr ||= {}));
const jr = Hr;
function Xr(e) {
	if (e.enable_performance_overlay()) {
		return 2;
	} else if (e.enable_performance_icons()) {
		return 1;
	} else {
		return 0;
	}
}
function Jr(e) {
	F2();
	const [t, r] = TN();
	const i = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => ({
		label:
			e == 0
				? (0, Localize)("#Settings_RemotePlay_SoftwareEncodingThreads_Auto")
				: e.toString(),

		data: e,
	}));
	return n.createElement(
		"div",
		{
			className: jr.Advanced,
		},
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_HostPlayAudioAlways"),
			checked: t.host_play_audio() == 1,
			onChange: (e) => {
				t.set_host_play_audio(e ? 1 : 0);
				r(t);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_ChangeDesktopResolution"),
			checked: t.change_desktop_resolution(),
			onChange: (e) => {
				t.set_change_desktop_resolution(e);
				r(t);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_EnableCaptureNVFBC"),
			checked: t.enable_capture_nvfbc(),
			onChange: (e) => {
				t.set_enable_capture_nvfbc(e);
				r(t);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_EnableHardwareEncoding"),
			checked: t.enable_hardware_encoding(),
			onChange: (e) => {
				t.set_enable_hardware_encoding(e);
				r(t);
			},
		}),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)(
				"#Settings_RemotePlay_SoftwareEncodingThreads_Description",
			),
			rgOptions: i,
			selectedOption: t.software_encoding_threads(),
			onChange: (e) => {
				t.set_software_encoding_threads(e.data);
				r(t);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_EnableTrafficPriority"),
			description: (0, Localize)(
				"#Settings_RemotePlay_EnableTrafficPriority_Description",
			),
			checked: t.enable_traffic_priority(),
			onChange: (e) => {
				t.set_enable_traffic_priority(e);
				r(t);
			},
		}),
	);
}
function $r(e, t) {
	t.set_enable_hardware_decoding(e.enable_hardware_decoding());
	t.set_enable_performance_overlay(e.enable_performance_overlay());
	t.set_enable_video_streaming(e.enable_video_streaming());
	t.set_enable_audio_streaming(e.enable_audio_streaming());
	t.set_enable_input_streaming(e.enable_input_streaming());
	t.set_audio_channels(e.audio_channels());
	t.set_enable_video_av1(e.enable_video_av1());
	t.set_enable_performance_icons(e.enable_performance_icons());
	t.set_enable_microphone_streaming(e.enable_microphone_streaming());
	t.set_controller_overlay_hotkey(e.controller_overlay_hotkey());
	t.set_p2p_scope(e.p2p_scope());
	t.set_enable_audio_uncompressed(e.enable_audio_uncompressed());
	t.set_display_limit(e.display_limit());
	t.set_runtime_limit(e.runtime_limit());
	t.set_decoder_limit(e.decoder_limit());
}
function en(e) {
	const t = F2();
	hf();
	const [r, i] = d0();
	const a = [
		{
			label: (0, Localize)("#Settings_RemotePlay_VideoQualityFast"),
			data: 1,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_VideoQualityBalanced"),
			data: 2,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_VideoQualityBeautiful"),
			data: 3,
		},
	];
	let s = [];
	if (
		r.audio_channels() == 0 ||
		(t.unStreamingSessionID == 0 && t.nDefaultAudioChannels > 0)
	) {
		s.push({
			label: (0, Localize)(
				`#Settings_RemotePlay_AudioChannels_AutoDetect${t.nDefaultAudioChannels}`,
			),
			data: 0,
		});
	}
	[2, 4, 6].forEach((e) => {
		s.push({
			label: (0, Localize)(`#Settings_RemotePlay_AudioChannels_${e}`),
			data: e,
		});
	});
	const o = [
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyAuto"),
			data: "auto",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyStart"),
			data: "start",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyBack"),
			data: "back",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyGuide"),
			data: "guide",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyY"),
			data: "y",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyNone"),
			data: "none",
		},
	];
	const l = [
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyAuto"),
			data: "auto",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyMenu"),
			data: "start",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyView"),
			data: "back",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeySteam"),
			data: "guide",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyY"),
			data: "y",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkeyNone"),
			data: "none",
		},
	];
	const c = [
		{
			label: (0, Localize)("#Settings_RemotePlay_PerformanceOverlay_Disabled"),
			data: 0,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_PerformanceOverlay_Icons"),
			data: 1,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_PerformanceOverlay_Details"),
			data: 2,
		},
	];
	const u = [
		-1, 3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 75000, 0,
	].map((e) => {
		let t = "";
		t =
			e == -1
				? (0, Localize)("#Settings_RemotePlay_Bandwidth_Auto")
				: e == 0
					? (0, Localize)("#Settings_RemotePlay_Bandwidth_Unlimited")
					: dm(e * 1000, {
							bUseBinary1K: false,
							bValueIsRate: true,
							bValueIsInBytes: false,
						});
		return {
			label: t,
			data: e,
		};
	});
	const d = [0, 3000, 4975, 5000, 5975, 6000, 9000, 12000, 14400, 24000].map(
		(e) => ({
			label: (0, Localize)(`#Settings_RemotePlay_Framerate_${e}`),
			data: e,
		}),
	);
	const p = [
		{
			label: (0, Localize)(
				"#Settings_RemotePlay_ResolutionAutomatic",
				t.nAutomaticResolutionX,
				t.nAutomaticResolutionY,
			),
			data: "0x0",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution480p"),
			data: "852x480",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution720p"),
			data: "1280x720",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution900p"),
			data: "1600x900",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution1080p"),
			data: "1920x1080",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution1440p"),
			data: "2560x1440",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution2160p"),
			data: "3840x2160",
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_Resolution8K"),
			data: "7680x4320",
		},
	];
	let g = `${(r.desired_resolution_x() ?? 0).toString()}x${(
		r.desired_resolution_y() ?? 0
	).toString()}`;
	return n.createElement(
		"div",
		{
			className: jr.Advanced,
		},
		n.createElement(
			m.BC,
			{
				fullWidth: true,
			},
			n.createElement(
				y.t,
				{
					feature: 7,
					as: E.CS,
					onClick: () => {
						let e = new Zr.fO();
						e.set_quality(2);
						$r(r, e);
						i(e);
					},
				},
				(0, Localize)("#Settings_RemotePlay_UsePresetDefault"),
			),
			n.createElement(
				y.t,
				{
					feature: 7,
					as: E.CS,
					onClick: () => {
						let e = new Zr.qN();
						e.set_width(1920);
						e.set_height(1080);
						let t = new Zr.ye();
						t.set_mode(e);
						let n = new Zr.fO();
						n.set_quality(3);
						n.set_quality_limit(t);
						n.set_desired_bitrate_kbps(30000);
						n.set_enable_unreliable_fec(true);
						n.set_enable_video_hevc(true);
						$r(r, n);
						i(n);
					},
				},
				(0, Localize)("#Settings_RemotePlay_UsePresetEnhanced1080p"),
			),
			n.createElement(
				y.t,
				{
					feature: 7,
					as: E.CS,
					onClick: () => {
						let e = new Zr.qN();
						e.set_width(3840);
						e.set_height(2160);
						let t = new Zr.ye();
						t.set_mode(e);
						let n = new Zr.fO();
						n.set_quality(3);
						n.set_quality_limit(t);
						n.set_desired_bitrate_kbps(50000);
						n.set_enable_unreliable_fec(true);
						n.set_enable_video_hevc(true);
						$r(r, n);
						i(n);
					},
				},
				(0, Localize)("#Settings_RemotePlay_UsePresetEnhanced4K"),
			),
		),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_Video"),
			rgOptions: a,
			selectedOption: r.enable_video_streaming() ? r.quality() : -1,
			onChange: (e) => {
				if (e.data >= 0) {
					r.set_enable_video_streaming(true);
					r.set_quality(e.data);
				} else {
					r.set_enable_video_streaming(false);
				}
				i(r);
			},
		}),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_Audio"),
			rgOptions: s,
			selectedOption: r.enable_audio_streaming() ? r.audio_channels() : -1,
			onChange: (e) => {
				if (e.data >= 0) {
					r.set_enable_audio_streaming(true);
					r.set_audio_channels(e.data);
				} else {
					r.set_enable_audio_streaming(false);
				}
				i(r);
			},
		}),
		!C.TS.ON_DECK &&
			n.createElement(ue.B, {
				feature: 7,
				label: (0, Localize)("#Settings_RemotePlay_ControllerOverlayHotkey"),
				description: (0, Localize)(
					"#Settings_RemotePlay_ControllerOverlayHotkeyDescription",
				),
				rgOptions: C.TS.ON_DECK ? l : o,
				selectedOption: r.controller_overlay_hotkey() ?? "auto",
				onChange: (e) => {
					r.set_controller_overlay_hotkey(e.data);
					i(r);
				},
			}),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_PerformanceOverlay"),
			rgOptions: c,
			selectedOption: Xr(r),
			onChange: (e) => {
				((e, t) => {
					switch (t) {
						case 2: {
							e.set_enable_performance_icons(true);
							e.set_enable_performance_overlay(true);
							break;
						}
						case 1: {
							e.set_enable_performance_icons(true);
							e.set_enable_performance_overlay(false);
							break;
						}
						default: {
							e.set_enable_performance_icons(false);
							e.set_enable_performance_overlay(false);
						}
					}
				})(r, e.data);
				i(r);
			},
		}),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_Bandwidth"),
			rgOptions: u,
			selectedOption: r.desired_bitrate_kbps() ?? -1,
			onChange: (e) => {
				r.set_desired_bitrate_kbps(e.data);
				i(r);
			},
			contextMenuPositionOptions: {
				bMatchWidth: false,
			},
		}),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_Framerate"),
			rgOptions: d,
			selectedOption: r.desired_framerate_numerator() ?? 0,
			onChange: (e) => {
				if (e.data > 0) {
					r.set_desired_framerate_numerator(e.data);
					r.set_desired_framerate_denominator(100);
				} else {
					r.set_desired_framerate_numerator(0);
					r.set_desired_framerate_denominator(0);
				}
				i(r);
			},
		}),
		n.createElement(ue.B, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_Resolution"),
			rgOptions: p,
			selectedOption: g,
			onChange: (e) => {
				let [t, n] = e.data.split("x");
				r.set_desired_resolution_x(parseInt(t));
				r.set_desired_resolution_y(parseInt(n));
				i(r);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_HardwareDecoding"),
			checked: r.enable_hardware_decoding(),
			onChange: (e) => {
				r.set_enable_hardware_decoding(e);
				i(r);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_HEVC"),
			disabled: !t.bHEVCDecodeAvailable,
			checked: t.bHEVCDecodeAvailable && r.enable_video_hevc(),
			onChange: (e) => {
				r.set_enable_video_hevc(e);
				i(r);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_AV1"),
			disabled: !t.bAV1DecodeAvailable,
			checked: t.bAV1DecodeAvailable && r.enable_video_av1(),
			onChange: (e) => {
				r.set_enable_video_av1(e);
				i(r);
			},
		}),
		n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_RemotePlay_LowLatencyNetworking"),
			checked: r.enable_unreliable_fec(),
			onChange: (e) => {
				r.set_enable_unreliable_fec(e);
				i(r);
			},
		}),
	);
}
function tn(e) {
	if (e.status === "Streaming") {
		return jr.Streaming;
	} else if (e.status === "Connected") {
		return jr.Connected;
	} else {
		return jr.Normal;
	}
}
function rn(e) {
	const t = F2();
	const r = dN();
	const a = n.useRef(undefined);
	const s = [
		{
			label: (0, Localize)("#Settings_RemotePlay_P2PScopeAutomatic"),
			data: 0,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_P2PScopeDisabled"),
			data: 1,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_P2PScopeOnlyMe"),
			data: 2,
		},
		{
			label: (0, Localize)("#Settings_RemotePlay_P2PScopeEveryone"),
			data: 4,
		},
	];
	const o = n.useCallback(
		(e) => {
			SteamClient.RemotePlay.SetStreamingClientConfigEnabled(
				e,
				t.unStreamingSessionID,
			);
			a.current?.scrollIntoView({
				behavior: "smooth",
				block: e ? "center" : "end",
			});
		},
		[t],
	);
	const l = Qt_1(`${C.TS.HELP_BASE_URL}faqs/view/0689-74B8-92AC-10F2`);
	const c = t.bRemotePlayDisabledBySystemPolicy;
	let d;
	d = t.bRemotePlayDisabledBySystemPolicy
		? (0, Localize)("#Settings_RemotePlay_Description_DisabledBySystemPolicy")
		: C.TS.ON_DECK
			? (0, Localize)("#Settings_RemotePlay_Description_SteamDeck")
			: (0, Localize)("#Settings_RemotePlay_Description");
	return n.createElement(
		E.sh,
		null,
		t.bRemotePlayEnabled && n.createElement(Kr.K, null),
		n.createElement(
			m.G5,
			null,
			n.createElement(me.C, {
				feature: 7,
				label: (0, Localize)("#Settings_RemotePlay_Enabled"),
				description: d,
				checked: t.bRemotePlayEnabled,
				disabled: c,
				onChange: (e) => SteamClient.RemotePlay.SetRemotePlayEnabled(e),
			}),
		),
		t.bRemotePlayEnabled &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					m.G5,
					null,
					n.createElement(
						"div",
						{
							className: jr.TableHeader,
						},
						n.createElement(
							"div",
							null,
							(0, Localize)("#Settings_RemotePlay_DeviceName"),
						),
						n.createElement(
							"div",
							null,
							(0, Localize)("#Settings_RemotePlay_Status"),
						),
					),
					r.length == 0 &&
						n.createElement(m.D0, {
							className: jr.DeviceList,
							disabled: true,
							icon: n.createElement(u.DevicesNone, null),
							label: (0, Localize)("#Settings_RemotePlay_DevicesEmpty"),
							bottomSeparator: "none",
						}),
					r.length > 0 &&
						r.map((e) =>
							n.createElement(
								m.Nv,
								{
									label: e.clientName,
									key: e.clientName,
									bottomSeparator: "none",
								},
								n.createElement(
									"span",
									{
										className: tn(e),
									},
									(0, Localize)(`#Settings_RemotePlay_Status_${e.status}`),
								),
							),
						),
					n.createElement(
						m.BC,
						{
							fullWidth: true,
						},
						n.createElement(
							y.t,
							{
								feature: 7,
								as: E.CS,
								disabled: !t.bRemotePlayEnabled,
								onClick: (e) => {
									Qr.ut.ShowRemoteDeviceHostPairingDialog("");
								},
							},
							(0, Localize)("#Settings_RemotePlay_Pair"),
						),
						n.createElement(
							y.t,
							{
								feature: 7,
								as: E.CS,
								onClick: (e) => {
									const t = GetOwningWindowForEvent(e);
									VB(t);
								},
							},
							(0, Localize)("#Settings_RemotePlay_Unpair"),
						),
						n.createElement(
							y.t,
							{
								feature: 7,
								as: E.CS,
								onClick: (e) => {
									const t = GetOwningWindowForEvent(e);
									rg(t);
								},
							},
							(0, Localize)("#Settings_RemotePlay_SetPIN"),
						),
					),
				),
				n.createElement(
					n.Fragment,
					null,
					n.createElement(ue.B, {
						feature: 7,
						label: (0, Localize)("#Settings_RemotePlay_P2PScope_Description"),
						rgOptions: s,
						selectedOption: t.eRemotePlayP2PScope,
						onChange: (e) =>
							SteamClient.RemotePlay.SetStreamingP2PScope(e.data),
					}),
				),
				n.createElement(
					m.G5,
					null,
					n.createElement(
						E.tX,
						null,
						(0, Localize)("#Settings_RemotePlay_AdvancedConfig"),
					),
					t.bRemotePlayServerConfigAvailable &&
						n.createElement(
							"div",
							null,
							n.createElement(me.C, {
								feature: 7,
								label: (0, Localize)("#Settings_RemotePlay_EnableServerConfig"),
								description: t.bRemotePlaySupported
									? (0, Localize)(
											"#Settings_RemotePlay_ServerConfigDescription",
										)
									: (0, Localize)("#Settings_RemotePlay_UnsupportedPlatform"),
								checked: t.bRemotePlayServerConfigEnabled,
								disabled: !t.bRemotePlaySupported,
								onChange: (e) =>
									SteamClient.RemotePlay.SetStreamingServerConfigEnabled(e),
							}),
							t.bRemotePlaySupported &&
								t.bRemotePlayServerConfigEnabled &&
								n.createElement(Jr, null),
						),
					n.createElement(
						m.G5,
						null,
						t.unStreamingSessionID > 0
							? n.createElement(
									n.Fragment,
									null,
									n.createElement(m.Nv, {
										label: (0, Localize)(
											"#Settings_RemotePlay_RemoteClientConfig",
										),
										description: (0, Localize)(
											"#Settings_RemotePlay_RemoteClientConfigDescription",
											t.strStreamingClientName,
										),
									}),
									n.createElement(en, null),
								)
							: n.createElement(
									n.Fragment,
									null,
									n.createElement(
										"div",
										{
											ref: a,
										},
										n.createElement(me.C, {
											feature: 7,
											label: (0, Localize)(
												"#Settings_RemotePlay_EnableClientConfig",
											),
											description: (0, Localize)(
												"#Settings_RemotePlay_ClientConfigDescription",
											),
											checked: t.bRemotePlayClientConfigEnabled,
											onChange: o,
										}),
									),
									t.bRemotePlayClientConfigEnabled && n.createElement(en, null),
								),
					),
				),
			),
		n.createElement(
			"div",
			{
				className: jr.ViewMore,
			},
			n.createElement(
				E.WG,
				{
					label: (0, Localize)("#Settings_RemotePlay_FAQLearnMore"),
					onClick: l,
				},
				(0, Localize)("#Settings_RemotePlay_FAQViewFAQ"),
			),
		),
	);
}
function on(e, t) {
	kN({
		allowAnyPIN: true,
		strPromptOverride: "#LockScreen_NewPINPrompt",
		hideForgotPIN: true,
		onSuccess: (r) => {
			kN({
				allowAnyPIN: true,
				strPromptOverride: "#LockScreen_NewPINPrompt2",
				hideForgotPIN: true,
				onSuccess: (i) => {
					if (r === i) {
						t({
							...e,
							strPIN: i,
							strOwnerAccountName: qw().GetCurrentUser().strAccountName,
						});
					} else {
						let e = n.createElement(X.o0, {
							strTitle: (0, Localize)("#LockScreen_PINSetMismatch_Title"),
							strDescription: (0, Localize)("#LockScreen_PINSetMismatch_Body"),
							bAlertDialog: true,
						});
						pg(e, window, {
							strTitle: (0, Localize)("#LockScreen_PINSetMismatch_Title"),
						});
					}
				},
			});
		},
	});
}
function ln(e) {
	let [t, r] = PA_2();
	const [i, a] = n.useState(false);
	((e) => {
		let t = n.useRef(false);
		t.current = e;
		n.useEffect(
			() => () => {
				if (t.current) {
					sn.yE.ClearPINIfNotUsed();
				}
			},
			[t],
		);
	})(i);
	let s = (e) => {
		if (t.strPIN) {
			if (i) {
				r(e);
			} else {
				kN({
					onSuccess: () => {
						r(e);
						a(true);
					},
				});
			}
		} else {
			on(e, r);
			a(true);
		}
	};
	return n.createElement(
		m.nB,
		null,
		n.createElement(
			m.G5,
			null,
			n.createElement(
				m.iK,
				null,
				(0, Localize)("#Settings_Security_LockScreenSection"),
			),
			t &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(m.D0, {
						description: (0, Localize)("#Settings_Security_LockScreen_Desc"),
						bottomSeparator: "none",
					}),
					n.createElement(me.C, {
						feature: 7,
						label: (0, Localize)("#Settings_Security_LockOnWake"),
						controlled: true,
						checked: t.bLockOnWake,
						onChange: (e) =>
							s({
								...t,
								bLockOnWake: e,
							}),
					}),
					n.createElement(me.C, {
						feature: 7,
						label: (0, Localize)("#Settings_Security_LockOnLogin"),
						controlled: true,
						checked: t.bLockOnLogin,
						onChange: (e) =>
							s({
								...t,
								bLockOnLogin: e,
							}),
					}),
					n.createElement(me.C, {
						feature: 7,
						label: (0, Localize)("#Settings_Security_LockOnDesktopMode"),
						controlled: true,
						checked: t.bLockDesktopMode,
						onChange: (e) =>
							s({
								...t,
								bLockDesktopMode: e,
							}),
					}),
					t.strPIN &&
						n.createElement(
							y.E,
							{
								feature: 7,
								onClick: () =>
									((e, t) => {
										kN({
											onSuccess: () => {
												on(e, t);
											},
										});
									})(t, r),
								bottomSeparator: "none",
							},
							(0, Localize)("#Settings_Security_ResetPIN"),
						),
					false,
				),
		),
	);
}
const gn = pn;
const hn = (e) => {
	const { bParenthesizeNicknames: t } = e;
	const r = new dn.Z(new An.b());
	r.m_strPlayerName = (0, Localize)("#FriendSettings_ExampleFriend");
	r.m_ePersonaState = 1;
	r.m_strAvatarHash = cn.d;
	return n.createElement(
		"div",
		{
			className: A(gn.FakeFriend, "online"),
		},
		n.createElement(mn.i8, {
			persona: r,
			statusPosition: "right",
		}),
		n.createElement(un.D, {
			persona: r,
			eFriendRelationship: 3,
			bIsSelf: false,
			strNickname: (0, Localize)("#FriendSettings_ExampleNickname"),
			bParenthesizeNicknames: t,
			bCompactView: false,
		}),
	);
};
const Cn = () => {
	const e = Tr_2();
	const t = n.createElement(
		"div",
		null,
		n.createElement(
			"div",
			null,
			(0, Localize)("#FriendSettings_ParenthesizeNicknames"),
		),
		n.createElement(hn, {
			bParenthesizeNicknames: e.bParenthesizeNicknames,
		}),
	);
	const r = n.useCallback(
		(t) => {
			e.bParenthesizeNicknames = t;
			l.rV.UpdateCommunityPreferences(e);
		},
		[e],
	);
	return n.createElement(me.C, {
		feature: 4,
		label: t,
		checked: e.bParenthesizeNicknames,
		onChange: r,
	});
};
const _n = (e) => {
	const { settingName: t, label: r, description: i, onChange: a } = e;
	const [s, o] = e(t);
	const c = n.useCallback(
		(e) => {
			o(e);
			if (a) {
				a(e);
			}
		},
		[o, a],
	);
	return n.createElement(me.C, {
		feature: 4,
		label: (0, Localize)(r),
		description: (0, Localize)(i),
		checked: s,
		onChange: c,
	});
};
function fn(e) {
	const t = Y2();
	const r = bG("TextFilterSettings");
	const [a] = I5("eTextFilterSetting");
	let s = "";
	switch (a) {
		case 1: {
			s = (0, Localize)("#ChatFilterType_Enabled");
			break;
		}
		case 2: {
			s = (0, Localize)("#ChatFilterType_AllowProfanity");
			break;
		}
		case 3: {
			s = (0, Localize)("#ChatFilterType_Disabled");
		}
	}
	if (t) {
		return null;
	} else {
		return n.createElement(
			E.oN,
			{
				feature: 4,
				label: (0, Localize)("#Settings_InGame_ChatFiltering"),
				description: s,
				onClick: r,
			},
			(0, Localize)("#Button_Manage"),
		);
	}
}
let bn;
function yn(e) {
	const [t, r] = e("nChatFontSize");
	return n.createElement(
		m.G5,
		null,
		n.createElement(m.tX, null, (0, Localize)("#FriendSettings_ChatFontSize")),
		n.createElement(
			v,
			{
				feature: 4,
				value: t,
				onChange: (e) => r(e),
			},
			n.createElement(
				m.a,
				{
					value: bn.k_EChatFontSizeSmall,
				},
				(0, Localize)("#FriendSetting_ChatFontSmall"),
			),
			n.createElement(
				m.a,
				{
					value: bn.k_EChatFontSizeDefault,
				},
				(0, Localize)("#FriendSetting_ChatFontDefault"),
			),
			n.createElement(
				m.a,
				{
					value: bn.k_EChatFontSizeLarge,
				},
				(0, Localize)("#FriendSetting_ChatFontLarge"),
			),
		),
	);
}
function Sn(e) {
	const [t] = e("bSingleWindowMode");
	return n.createElement(me.C, {
		feature: 4,
		label: (0, Localize)("#FriendSettings_DockChats"),
		checked: t,
		onChange: (e) => {
			SteamClient.Messaging.PostMessage(
				"LibraryCommands",
				"ToggleDockedMode",
				JSON.stringify({
					checked: e,
				}),
			);
		},
	});
}
((e) => {
	e[(e.k_EChatFontSizeSmall = 1)] = "k_EChatFontSizeSmall";
	e[(e.k_EChatFontSizeDefault = 2)] = "k_EChatFontSizeDefault";
	e[(e.k_EChatFontSizeLarge = 3)] = "k_EChatFontSizeLarge";
})((bn ||= {}));
const wn = (e) => {
	const t = uI();
	return n.createElement(
		E.sh,
		null,
		n.createElement(
			m.G5,
			null,
			n.createElement(Cn, null),
			n.createElement(_n, {
				settingName: "bCategorizeInGameFriendsByGame",
				label: "#FriendSettings_CategorizeInGameFriendsByGame",
			}),
			n.createElement(_n, {
				settingName: "bHideOfflineFriendsInTagGroups",
				label: "#FriendSettings_HideOfflineFriendsInCategories",
			}),
			n.createElement(_n, {
				settingName: "bHideCategorizedFriends",
				label: "#FriendSettings_HideCategorizedFriends",
			}),
			n.createElement(_n, {
				settingName: "bForceAlphabeticFriendSorting",
				label: "#FriendSettings_SortFriendsByStatus",
			}),
			n.createElement(_n, {
				settingName: "bSignIntoFriends",
				label: t
					? "#FriendSettings_SignInToFriends_SteamDeck"
					: "#FriendSettings_SignInToFriends",
			}),
			n.createElement(_n, {
				settingName: "bAnimatedAvatars",
				label: "#FriendSettings_AnimatedAvatars",
			}),
			n.createElement(_n, {
				settingName: "bCompactFriendsList",
				label: "#FriendSettings_CompactFriendsList",
			}),
			n.createElement(_n, {
				settingName: "bCompactQuickAccess",
				label: "#FriendSettings_CompactQuickAccess_Client",
			}),
		),
		n.createElement(
			m.G5,
			null,
			n.createElement(
				m.tX,
				null,
				(0, Localize)("#FriendSettings_Heading_Chat"),
			),
			n.createElement(Sn, null),
			n.createElement(_n, {
				settingName: "bAlwaysNewChatWindow",
				label: "#FriendSettings_AlwaysNewChatWindow",
			}),
			n.createElement(_n, {
				settingName: "bDisableEmbedInlining",
				label: "#FriendSettings_DisableEmbedInlining",
			}),
			n.createElement(_n, {
				settingName: "bRememberOpenChats",
				label: "#FriendSettings_RememberOpenChats",
				description: "#FriendSettings_RememberOpenChats_DescClient",
			}),
			n.createElement(_n, {
				settingName: "bDisableSpellcheck",
				label: "#FriendSettings_DisableSpellcheck",
			}),
			n.createElement(_n, {
				settingName: "bDisableRoomEffects",
				label: "#FriendSettings_DisableRoomEffects",
			}),
			n.createElement(fn, null),
		),
		n.createElement(yn, null),
	);
};
const In = vn;
const Mn = En;
function Tn(e) {
	const { feature: t, className: r, disabled: i, ...a } = e;
	const s = l9(t);
	const o = s !== 0;
	const l = wT();
	return n.createElement(
		m.Yh,
		{
			...a,
			focusable: !o,
			className: A(Mn.ParentalButton, r, o && Mn.Blocked),
			disabled: o || i,
		},
		n.createElement(B.Z, {
			className: Mn.ParentalWrapper,
			onActivate: o && !i ? () => l(s, t) : undefined,
		}),
	);
}
const Rn = (e) => {
	const { settingNotify: t, settingSound: r, description: i } = e;
	const [a, s] = e(t);
	const [o, c] = e(r);
	const [u] = VI("disable_all_toasts");
	const [d] = VI("play_sound_on_toast");
	const p = !d || u;
	return n.createElement(
		m.D0,
		{
			highlightOnFocus: true,
			label: (0, Localize)(i),
		},
		n.createElement(
			B.Z,
			{
				className: In.Toggles,
				"flow-children": "row",
				navEntryPreferPosition: Bn.iU.MAINTAIN_X,
			},
			n.createElement(me.D, {
				feature: h.uX,
				value: a,
				onChange: s,
				disabled: u,
			}),
			n.createElement(me.D, {
				feature: h.uX,
				value: o,
				onChange: c,
				disabled: p,
			}),
		),
	);
};
function kn(e) {
	const [t, r] = e("nChatFlashMode");
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(E.Pq, null, (0, Localize)("#FriendSettings_Flash_Header")),
		n.createElement(
			v,
			{
				feature: h.uX,
				value: t,
				onChange: (e) => r(e),
			},
			n.createElement(
				m.a,
				{
					value: 0,
				},
				(0, Localize)("#FriendSettings_Flash_Always"),
			),
			n.createElement(
				m.a,
				{
					value: 1,
				},
				(0, Localize)("#FriendSettings_Flash_Minimized"),
			),
			n.createElement(
				m.a,
				{
					value: 2,
				},
				(0, Localize)("#FriendSettings_Flash_Never"),
			),
		),
	);
}
const Dn = PA((e) => {
	const { preferenceSetting: t } = e;
	const [r, i] = n.useState(false);
	const a = (t.notification_targets & 1) == 1;
	const s = (t.notification_targets & 2) == 2;
	const o = (t.notification_targets & 8) == 8;
	const c = sE(t.notification_type, 1);
	const p = sE(t.notification_type, 8);
	const g = sE(t.notification_type, 2);
	_ = t.notification_type;
	const C = BLocStringExists(`#SteamNotificationTypeDesc_${_}`)
		? (0, Localize)(`#SteamNotificationTypeDesc_${_}`)
		: null;
	var _;
	if (C) {
		return n.createElement(
			"div",
			{
				className: A(In.NotificationGroup, r && In.NotificationGroupExpanded),
			},
			n.createElement(
				B.Z,
				{
					"flow-children": "row",
					className: In.NotificationSection,
					navEntryPreferPosition: Bn.iU.MAINTAIN_X,
				},
				n.createElement(me.C, {
					feature: h.uX,
					className: In.NotificationFeedToggle,
					padding: "compact",
					onChange: c,
					bottomSeparator: "none",
					checked: a,
				}),
				n.createElement(
					"p",
					{
						className: In.NotificationDescription,
					},
					C,
				),
				n.createElement(
					m.wl,
					{
						className: A({
							[In.PrefDetailsToggle]: true,
							[In.Selected]: r,
						}),
						onClick: () => i(!r),
					},
					n.createElement(u.DoubleCarat, {
						direction: "down",
					}),
				),
			),
			r &&
				n.createElement(
					B.Z,
					{
						"flow-children": "row",
						className: In.NotificationPrefDetails,
					},
					n.createElement(Tn, {
						feature: h.uX,
						label: (0, Localize)("#NotificationSettings_SendToast"),
						disabled: !a,
						checked: o,
						onChange: p,
					}),
					n.createElement(Tn, {
						feature: h.uX,
						label: (0, Localize)("#NotificationSettings_PushNotification"),
						disabled: !a,
						checked: s,
						onChange: g,
					}),
				),
		);
	} else {
		return null;
	}
});
function Nn(e) {
	const [t, r] = VI("disable_all_toasts");
	const [i, a] = VI("disable_toasts_in_game");
	const s = hf();
	const o = JSON.stringify([t, i]);
	const c = (e) =>
		e == "[false,false]"
			? (0, Localize)("#NotificationsSettings_Description_Always")
			: (0, Localize)("#NotificationsSettings_Description");
	const [u, d] = n.useState(c(o));
	const p = [
		{
			label: (0, Localize)("#NotificationsSettings_ShowAlways"),
			data: "[false,false]",
		},
		{
			label: (0, Localize)("#NotificationsSettings_ShowWhenNotInGame"),
			data: "[false,true]",
		},
		{
			label: (0, Localize)("#NotificationsSettings_ShowNever"),
			data: "[true,true]",
		},
	];
	const g = n.useCallback(
		(e, t) => {
			const n = JSON.parse(e.data);
			r(n[0]);
			a(n[1]);
			d(c(e.data));
		},
		[r, a],
	);
	return n.createElement(
		m.G5,
		null,
		n.createElement(ue.B, {
			feature: h.uX,
			label: (0, Localize)("#NotificationsSettings_ShowNotifications"),
			description: u,
			selectedOption: o,
			rgOptions: p,
			onChange: g,
			contextMenuPositionOptions: {
				bMatchWidth: !s,
			},
		}),
		n.createElement(_.G, {
			feature: h.uX,
			setting: "play_sound_on_toast",
			label: (0, Localize)("#NotificationsSettings_PlaySoundOnToast"),
		}),
	);
}
let Fn;
((e) => {
	e[(e.k_ESectionInvalid = 0)] = "k_ESectionInvalid";
	e[(e.k_ESectionDefault = 1)] = "k_ESectionDefault";
	e[(e.k_ESectionFamily = 2)] = "k_ESectionFamily";
	e[(e.k_ESectionMax = 3)] = "k_ESectionMax";
})((Fn ||= {}));
const Gn = [
	{
		type: 5,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 8,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 3,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 4,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 2,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 6,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 9,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 10,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 11,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 12,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 13,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 14,
		section: Fn.k_ESectionDefault,
	},
	{
		type: 16,
		section: Fn.k_ESectionFamily,
	},
	{
		type: 17,
		section: Fn.k_ESectionFamily,
		role: 1,
	},
	{
		type: 15,
		section: Fn.k_ESectionFamily,
		role: 1,
	},
	{
		type: 18,
		section: Fn.k_ESectionFamily,
		role: 1,
	},
	{
		type: 19,
		section: Fn.k_ESectionFamily,
		role: 2,
	},
	{
		type: 20,
		section: Fn.k_ESectionFamily,
		role: 2,
	},
	{
		type: 21,
		section: Fn.k_ESectionFamily,
		role: 2,
	},
	{
		type: 22,
		section: Fn.k_ESectionFamily,
		role: 2,
	},
];
function On(e) {
	const t = Gn.findIndex((t) => t.type == e);
	if (t == -1) {
		return {
			section: Fn.k_ESectionDefault,
			position: -1,
		};
	} else {
		return {
			section: Gn[t].section,
			position: t,
			role: Gn[t].role,
		};
	}
}
function Pn(e) {
	const { section: t, children: r } = e;
	if (!BLocStringExists(`#SteamNotificationSection_${t}`)) {
		console.error(`No localization for notification list section ${t}`);
		return null;
	}
	const i = (0, Localize)(`#SteamNotificationSection_${t}`);
	return n.createElement(
		"div",
		{
			className: In.NotificationListSection,
		},
		i && n.createElement(m.tX, null, i),
		r,
	);
}
function Ln(e) {
	const t = Hg();
	const r = ZW();
	let i = [];
	for (const e of t) {
		const t = On(e.notification_type);
		if (t.role !== undefined && t.role != r) {
			continue;
		}
		i[t.section] ||= [];
		const a = n.createElement(Dn, {
			key: e.notification_type,
			preferenceSetting: e,
		});
		if (t.position == -1) {
			if (i[t.section].length < 10000) {
				i[t.section][10000] = null;
			}
			i[t.section].push(a);
		} else {
			i[t.section][t.position] = a;
		}
	}
	return n.createElement(
		n.Fragment,
		null,
		i.map(
			(e, t) =>
				e.length == 0 ||
				n.createElement(
					Pn,
					{
						key: t,
						section: t,
					},
					e,
				),
		),
	);
}
const zn = () => {
	const [e] = VI("disable_all_toasts");
	const [t] = VI("disable_toasts_in_game");
	return n.createElement(
		E.sh,
		null,
		n.createElement(Nn, null),
		n.createElement(
			m.G5,
			null,
			n.createElement(
				m.tX,
				null,
				(0, Localize)("#NotificationsSettings_Heading_Friends"),
			),
			n.createElement(
				m.a3,
				{
					className: In.FriendsDescription,
				},
				(0, Localize)("#NotificationsSettings_Heading_FriendsDescription"),
			),
			!e &&
				t &&
				n.createElement(
					m.a3,
					{
						className: In.FriendsDescription,
					},
					(0, Localize)(
						"#NotificationsSettings_Heading_FriendsDescription_InGame",
					),
				),
			n.createElement(
				m.D0,
				{
					className: In.ToggleHeader,
					bottomSeparator: "none",
				},
				n.createElement(
					"div",
					{
						className: In.Toggles,
					},
					n.createElement(
						"div",
						{
							className: In.Toast,
						},
						(0, Localize)("#NotificationsSettings_Column_Notification"),
					),
					n.createElement(
						"div",
						{
							className: In.Sound,
						},
						(0, Localize)("#NotificationsSettings_Column_Sound"),
					),
				),
			),
			n.createElement(Rn, {
				settingNotify: "bNotifications_ShowIngame",
				settingSound: "bSounds_PlayIngame",
				description: "#NotificationsSettings_Notification_FriendJoins",
			}),
			n.createElement(Rn, {
				settingNotify: "bNotifications_ShowOnline",
				settingSound: "bSounds_PlayOnline",
				description: "#NotificationsSettings_Notification_FriendOnline",
			}),
			n.createElement(Rn, {
				settingNotify: "bNotifications_ShowMessage",
				settingSound: "bSounds_PlayMessage",
				description: "#NotificationsSettings_Notification_ChatMessage",
			}),
			n.createElement(Rn, {
				settingNotify: "bNotifications_ShowChatRoomNotification",
				settingSound: "bSounds_PlayChatRoomNotification",
				description: "#NotificationsSettings_Notification_ChatRoomNotification",
			}),
		),
		n.createElement(m.G5, null, n.createElement(kn, null)),
		n.createElement(
			m.G5,
			null,
			n.createElement(
				m.tX,
				null,
				(0, Localize)("#NotificationsSettings_Heading_PlatformNotif"),
			),
			n.createElement(
				m.a3,
				{
					className: In.FriendsDescription,
				},
				(0, Localize)("#NotificationsSettings_Heading_PlatformNotifDesc"),
			),
			n.createElement(Ln, null),
		),
	);
};
function Vn(e) {
	const t = Tr_2();
	const r = q3(() => xn.O$.GetFriendState(new An.b(xn.O$.currentUserSteamID)));
	const a = Id();
	const s = LK();
	const o = Qt_1(cr.B7.ResolveURL("SteamIDMyProfile"));
	n.useEffect(() => {
		mr.iG.ForceRefreshEquippedItems();
	}, []);
	let c = n.createElement(
		"div",
		{
			className: Un.AvatarAndLabel,
		},
		a &&
			n.createElement(mn.xz, {
				className: Un.Avatar,
				loopDuration: "Infinite",
				size: "Large",
				persona: r?.persona,
				animatedAvatar: t?.animated_avatar,
				avatarFrame: t?.avatar_frame,
				statusPosition: "right",
			}),
		!a &&
			n.createElement(mn.Ul, {
				size: "Small",
				strAvatarURL: s,
			}),
		n.createElement(un.D, {
			className: Un.LabelHolder,
			persona: r?.persona,
			eFriendRelationship: 3,
			bIsSelf: true,
			bCompactView: false,
			strNickname: r?.nickname,
			bParenthesizeNicknames: l.rV.communityPreferences.bParenthesizeNicknames,
		}),
	);
	return n.createElement(
		E.oN,
		{
			feature: 3,
			label: c,
			bottomSeparator: "standard",
			autoFocus: true,
			onClick: o,
		},
		(0, Localize)("#Settings_Account_ViewProfile"),
	);
}
function Hn() {
	const e = iZ();
	const t = new An.b(e.strSteamID);
	const r = Qt_1(cr.B7.ResolveURL("CommunityAddFriends"));
	const a = n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"span",
			{
				className: Un.EntryLabel,
			},
			(0, Localize)("#Settings_Account_FriendCode"),
		),
		n.createElement(
			"span",
			{
				className: Un.EntryValue,
			},
			t.GetAccountID(),
		),
	);
	return n.createElement(
		E.oN,
		{
			feature: 4,
			label: a,
			bottomSeparator: "standard",
			onClick: r,
		},
		(0, Localize)("#UserManagement_AddFriends"),
	);
}
function jn(e) {
	const { accountSettings: t } = e;
	const r = iZ();
	const a = Qt_1(cr.B7.ResolveURL("HelpChangeEmail", r.strClientInstanceID));
	const s = n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"span",
			{
				className: Un.EntryLabel,
			},
			(0, Localize)("#Settings_Account_EmailAddress"),
		),
		n.createElement(
			"span",
			{
				className: Un.EntryValue,
			},
			t.strEmail,
		),
	);
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: s,
			bottomSeparator: "standard",
			onClick: a,
		},
		(0, Localize)("#Settings_Account_ChangeEmailAddress"),
	);
}
function qn(e) {
	const { accountSettings: t } = e;
	const r = Qt_1(cr.B7.ResolveURL("HelpVacBans"));
	const a = (0, Localize)(
		t.bHasAnyVACBans
			? "#Settings_Account_VAC_HasBans"
			: "#Settings_Account_VAC_NoBans",
	);
	const s = n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"span",
			{
				className: Un.EntryLabel,
			},
			(0, Localize)("#Settings_Account_VAC_Status"),
		),
		n.createElement(
			"span",
			{
				className: Un.EntryValue,
			},
			a,
		),
	);
	return n.createElement(
		m.D0,
		{
			label: s,
			bottomSeparator: "standard",
		},
		n.createElement(
			E.CS,
			{
				onClick: r,
			},
			(0, Localize)("#Settings_Account_VAC_LearnMore"),
		),
	);
}
function Qn(e) {
	const t = (() => {
		let [e, t] = n.useState(null);
		n.useEffect(() => {
			let e = true;
			SteamClient.Settings.GetAccountSettings().then((r) => e && t(r));
			return () => {
				e = false;
			};
		}, [t]);
		return e;
	})();
	if (t) {
		return n.createElement(
			E.sh,
			null,
			n.createElement(Vn, null),
			n.createElement(Wn.f, {
				itemMaxSize: "desktop",
				buttonClass: Un.SettingsDialogFatButton,
			}),
			n.createElement(Hn, null),
			n.createElement(jn, {
				accountSettings: t,
			}),
			n.createElement(qn, {
				accountSettings: t,
			}),
		);
	} else {
		return null;
	}
}
let Zn;
function ni() {
	return n.useMemo(
		() => [
			{
				label: (0, Localize)("#Corner_Off"),
				data: 0,
			},
			{
				label: (0, Localize)("#Corner_TopLeft"),
				data: 1,
			},
			{
				label: (0, Localize)("#Corner_TopRight"),
				data: 2,
			},
			{
				label: (0, Localize)("#Corner_BottomRight"),
				data: 3,
			},
			{
				label: (0, Localize)("#Corner_BottomLeft"),
				data: 4,
			},
		],
		[],
	);
}
function ii(e) {
	const [t, r] = VI("overlay_key");
	Y2();
	const i = Pr_2();
	const a = ni();
	const [s, o] = n.useState(false);
	const c = n.useCallback(() => {
		o(true);
	}, []);
	const u = n.useCallback((e) => {
		e?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start",
		});
	}, []);
	return n.createElement(
		m.G5,
		null,
		n.createElement(E.tX, null, (0, Localize)("#Settings_InGame_Overlay")),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_EnableOverlay"),
			setting: "enable_overlay",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_Overlay_ToolBar_ListView"),
			setting: "overlay_toolbar_list_view",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_Overlay_Restore_Browser_Tabs"),
			setting: "overlay_restore_browser_tabs",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_UseGamepadOverlay"),
			setting: "always_use_gamepadui_overlay",
		}),
		!i &&
			n.createElement(_.G, {
				feature: 7,
				label: (0, Localize)("#Settings_InGame_ScaleInterface"),
				setting: "overlay_scale_interface",
			}),
		n.createElement(ti.j, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_OverlayShortcut"),
			currentKey: t,
			onSetKey: (e) => {
				r(e);
			},
			strTitle: (0, Localize)("#Settings_Hotkey_ToggleOverlay"),
		}),
		n.createElement(pt.X, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_FPSCounter"),
			rgOptions: a,
			setting: "overlay_fps_counter_corner",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_InGame_HighContrastFPS"),
			controlled: true,
			setting: "overlay_fps_counter_high_contrast",
		}),
		n.createElement(ai, null),
		!s &&
			n.createElement(
				E.WG,
				{
					bottomSeparator: "none",
					label: (0, Localize)("#Settings_InGame_ToolbarPreferences"),
					onClick: c,
				},
				(0, Localize)("#Settings_InGame_ToolbarPreferences"),
			),
		s &&
			n.createElement(
				"div",
				{
					ref: u,
				},
				n.createElement(
					E.tX,
					null,
					(0, Localize)("#Settings_InGame_ToolbarPreferences"),
				),
				n.createElement(li, null),
			),
	);
}
function ai(e) {
	const [t, r, i] = M_2({
		bCloseOnOK: true,
		onOK: () => {
			if (Dp("Browser.ClearAllBrowsingData")) {
				SteamClient.Browser.ClearAllBrowsingData();
			}
		},
		strTitle: (0, Localize)("#Settings_InGame_WebBrowserDeleteData"),
		strDescription: (0, Localize)(
			"#Settings_InGame_WebBrowserDeleteBrowserCache",
		),
	});
	return n.createElement(
		n.Fragment,
		null,
		t,
		n.createElement(
			m.D0,
			{
				label: (0, Localize)("#Settings_InGame_WebBrowserHome"),
				focusable: true,
			},
			n.createElement(Yn.C, {
				setting: "web_browser_home",
			}),
		),
		n.createElement(
			E.WG,
			{
				label: (0, Localize)("#Settings_InGame_WebBrowserDeleteData"),
				description: (0, Localize)(
					"#Settings_InGame_WebBrowserDeleteBrowserCache",
				),
				onClick: r,
			},
			(0, Localize)("#Settings_InGame_WebBrowserDelete"),
		),
	);
}
function si(e) {
	const t = C.TS.IN_GAMESCOPE;
	const [r, i] = VI("screenshots_path");
	const [a, s] = VI("screenshot_key");
	const [o] = VI("save_uncompressed_screenshots");
	const c = n.useCallback(
		(e) => {
			s(e);
		},
		[s],
	);
	const m = n.useCallback(
		(e) => {
			let t = GetOwningWindowForEvent(e) ?? window;
			if (!Fj(t, "System.OpenFileDialog")) {
				t = window;
			}
			t.SteamClient.System.OpenFileDialog({
				strTitle: (0, Localize)(
					"#Settings_InGame_ScreenshotFolderPicker_Title",
				),
				strInitialFile: r,
				bChooseDirectory: true,
			}).then((e) => {
				i(e);
			});
		},
		[r, i],
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(E.tX, null, (0, Localize)("#Settings_InGame_Screenshots")),
		!t &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(ti.j, {
					feature: h.uX,
					label: (0, Localize)("#Settings_InGame_ScreenshotShortcut"),
					currentKey: a,
					onSetKey: c,
					strTitle: (0, Localize)("#Settings_Hotkey_TakeScreenshot"),
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_InGame_ScreenshotNotify"),
					setting: "enable_screenshot_notification",
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_InGame_ScreenshotSound"),
					setting: "enable_screenshot_sound",
				}),
				n.createElement(_.G, {
					feature: h.uX,
					label: (0, Localize)("#Settings_InGame_ScreenshotUncompressed"),
					setting: "save_uncompressed_screenshots",
				}),
				o &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(_.G, {
							feature: h.uX,
							className: ri.NestedChild,
							label: (0, Localize)(
								"#Settings_InGame_ScreenshotUncompressedAVIF",
							),
							setting: "enable_avif_screenshots",
						}),
						n.createElement(
							E.oN,
							{
								feature: h.uX,
								fieldClassName: ri.NestedChild,
								label: (0, Localize)("#Settings_InGame_ScreenshotFolder"),
								description: r,
								onClick: m,
							},
							(0, Localize)("#Settings_InGame_ChangeFolder"),
						),
					),
			),
		t &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(_.G, {
					feature: h.uX,
					invert: true,
					label: (0, Localize)("#Settings_InGame_ScreenshotIncludeSteamUI"),
					setting: "gamescope_include_steamui_in_screenshots",
					bottomSeparator: "none",
				}),
			),
	);
}
function oi(e) {
	const t = C.TS.IN_GAMESCOPE;
	const [r] = hX("default_ping_rate");
	const i = [
		{
			label: (0, Localize)("#ServerPing_Auto", r),
			data: 0,
		},
		{
			label: (0, Localize)("#ServerPing_5000"),
			data: 5000,
		},
		{
			label: (0, Localize)("#ServerPing_3000"),
			data: 3000,
		},
		{
			label: (0, Localize)("#ServerPing_1500"),
			data: 1500,
		},
		{
			label: (0, Localize)("#ServerPing_1000"),
			data: 1000,
		},
		{
			label: (0, Localize)("#ServerPing_500"),
			data: 500,
		},
		{
			label: (0, Localize)("#ServerPing_250"),
			data: 250,
		},
	];
	const a = [
		{
			label: (0, Localize)("#SteamNetworkingOption_Default"),
			data: Zn.k_EAllowShareIP_Default,
		},
		{
			label: (0, Localize)("#SteamNetworkingOption_Never"),
			data: Zn.k_EAllowShareIP_Never,
		},
		{
			label: (0, Localize)("#SteamNetworkingOption_Friends"),
			data: Zn.k_EAllowShareIP_FriendsOnly,
		},
		{
			label: (0, Localize)("#SteamNetworkingOption_Always"),
			data: Zn.k_EAllowShareIP_Anyone,
		},
	];
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(E.tX, null, (0, Localize)("#Settings_InGame_Misc")),
		!t &&
			n.createElement(pt.X, {
				label: (0, Localize)("#Settings_InGame_ServerBrowserPings"),
				description: (0, Localize)(
					"#Settings_InGame_ServerBrowserPings_Description",
				),
				rgOptions: i,
				setting: "server_ping_rate",
			}),
		n.createElement(pt.X, {
			label: (0, Localize)("#Settings_InGame_SteamNetworking"),
			description: LocalizeInlineReactWithFallback(
				"#Settings_InGame_SteamNetworking_Description",
				n.createElement("a", {
					href: "steam://openurl_external/https://help.steampowered.com/en/faqs/view/1433-AD20-F11D-B71E",
				}),
			),
			rgOptions: a,
			setting: "steam_networking_share_ip",
			bottomSeparator: "none",
		}),
	);
}
function li(e) {
	const { rTabs: t, setTabVisibility: r, moveTab: i } = W6_2();
	const a = n.useCallback(
		(e, t) => {
			i(e.draggableId, e.destination.index);
		},
		[i],
	);
	return n.createElement(
		$n.JY,
		{
			onDragEnd: a,
		},
		n.createElement(
			$n.gL,
			{
				droppableId: "tablist",
			},
			(e) =>
				n.createElement(
					"div",
					{
						...e.droppableProps,
						ref: e.innerRef,
					},
					t.map((e, t) =>
						n.createElement(ci, {
							key: e.window,
							visible: e.visible,
							window: e.window,
							index: t,
							setTabVisibility: r,
						}),
					),
					e.placeholder,
				),
		),
	);
}
function ci(e) {
	return n.createElement(
		$n.sx,
		{
			draggableId: e.window,
			index: e.index,
		},
		(t) =>
			n.createElement(
				"div",
				{
					...t.draggableProps,
					...t.dragHandleProps,
					ref: t.innerRef,
					style: gQ(t.draggableProps.style),
				},
				n.createElement(me.C, {
					feature: h.uX,
					className: ri.OverlayTabSetting,
					label: (0, Localize)(f_2(e.window)?.tooltipToken),
					controlled: true,
					icon: n.createElement(u.Rows, null),
					checked: e.visible,
					onChange: (t) => e.setTabVisibility(e.window, t),
				}),
			),
	);
}
function mi(e) {
	const t = C.TS.IN_GAMESCOPE;
	return n.createElement(
		E.sh,
		null,
		!t && n.createElement(ii, null),
		n.createElement(si, null),
		n.createElement(oi, null),
	);
}
((e) => {
	e[(e.k_EAllowShareIP_Invalid = -1)] = "k_EAllowShareIP_Invalid";
	e[(e.k_EAllowShareIP_Default = 0)] = "k_EAllowShareIP_Default";
	e[(e.k_EAllowShareIP_Never = 1)] = "k_EAllowShareIP_Never";
	e[(e.k_EAllowShareIP_FriendsOnly = 2)] = "k_EAllowShareIP_FriendsOnly";
	e[(e.k_EAllowShareIP_Anyone = 3)] = "k_EAllowShareIP_Anyone";
})((Zn ||= {}));
function Ai(e) {
	const { option: t, flags: r, onChange: i } = e;
	const a = T_1().get(t);
	const s = !!(r & a.flags);
	if (Y2() && a.bHideInChina) {
		return null;
	} else {
		return n.createElement(me.C, {
			feature: h.uX,
			label: (0, Localize)(`#TaskbarOption_${t}`),
			controlled: true,
			checked: s,
			onChange: (e) => {
				i(e, a.flags);
			},
		});
	}
}
function pi(e) {
	const { rgOptions: t, flags: r, onChange: i } = e;
	return n.createElement(
		n.Fragment,
		null,
		t.map((e) =>
			n.createElement(Ai, {
				key: e,
				option: e,
				flags: r,
				onChange: i,
			}),
		),
	);
}
function gi(e) {
	const [t, r] = VI("jumplist_flags");
	const i = n.useCallback(
		(e, n) => {
			let i = t;
			if (e) {
				i |= n;
			} else {
				i &= ~n;
			}
			r(i);
		},
		[t, r],
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			n.Fragment,
			null,
			n.createElement(m.lr, null, (0, Localize)("#TaskbarOptions_Online")),
			n.createElement(pi, {
				rgOptions: ["Online", "Away", "Invisible", "Offline"],
				flags: t,
				onChange: i,
			}),
		),
		n.createElement(
			n.Fragment,
			null,
			n.createElement(
				m.lr,
				null,
				(0, Localize)("#TaskbarOptions_Destinations"),
			),
			n.createElement(pi, {
				rgOptions: [
					"Store",
					"MyGames",
					"Community",
					"Friends",
					"FriendActivity",
					"Screenshots",
					"Servers",
					"Settings",
					"BigPicture",
					"VR",
					"Exit",
				],
				flags: t,
				onChange: i,
			}),
		),
	);
}
function hi(e) {
	const t = Qt_1(cr.B7.ResolveURL("SteamClientBetaBugReports"));
	const r = hf();
	if (!oE()) {
		return null;
	}
	const a = n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"div",
			null,
			(0, Localize)("#Settings_Account_ClientBeta_Desc"),
		),
		n.createElement(
			E.Oy,
			{
				href: "#",
				onClick: t,
			},
			(0, Localize)("#Settings_Account_ClientBeta_ReportBug"),
		),
	);
	return n.createElement(nn.lm, {
		label: (0, Localize)("#Settings_Account_ClientBeta"),
		description: a,
		contextMenuPositionOptions: {
			bMatchWidth: !r,
		},
	});
}
function Ci(e) {
	const [t, r, i] = Dy();
	if (CI() && t) {
		return n.createElement(me.C, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_EnableContextMenuBlurDelay"),
			checked: r,
			onChange: i,
		});
	} else {
		return null;
	}
}
function _i(e) {
	const [t, r] = n.useState(false);
	const i = td();
	const a = Y2();
	const s = hf();
	const [o] = VI("enable_gpu_accelerated_webviews");
	const c = n.useCallback(() => {
		r(true);
	}, []);
	const m = n.useCallback((e) => {
		e?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start",
		});
	}, []);
	const u = [
		{
			data: "store",
			label: (0, Localize)("#StartPage_Store"),
		},
		{
			data: "library",
			label: (0, Localize)("#StartPage_Library"),
		},
		{
			data: "news",
			label: (0, Localize)("#StartPage_News"),
		},
		{
			data: "friendactivity",
			label: (0, Localize)("#StartPage_FriendActivity"),
		},
	];
	if (!a) {
		u.push({
			data: "community",
			label: (0, Localize)("#StartPage_Community"),
		});
	}
	const d = !o;
	const p = d
		? (0, Localize)("#Settings_Interface_EnableHardwareDecoding_Disabled")
		: "";
	return n.createElement(
		E.sh,
		null,
		!a &&
			s &&
			n.createElement(Ht, {
				bottomSeparator: "standard",
				strLabel: (0, Localize)("#Settings_Language_Select_Desktop"),
				description: (0, Localize)("#Settings_Language_Select_Description"),
				contextMenuPositionOptions: {
					bMatchWidth: !s,
				},
			}),
		s && n.createElement(Vt.tm, null),
		s && n.createElement(hi, null),
		s &&
			n.createElement(pt.X, {
				feature: h.uX,
				label: (0, Localize)("#Settings_Interface_StartPage"),
				description: (0, Localize)("#Settings_Interface_StartPage_Description"),
				rgOptions: u,
				setting: "start_page",
			}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_ScaleText"),
			bRequiresRestart: true,
			setting: "enable_dpi_scaling",
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_RunAtStartup"),
			setting: "run_at_startup",
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#ChangeUser_ShouldShowUserChooser"),
			setting: "always_show_user_chooser",
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_StartInBigPicture"),
			setting: "start_in_big_picture_mode",
			visible: !a,
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_EnableSmoothScrolling"),
			bRequiresRestart: true,
			setting: "smooth_scroll_webviews",
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_EnableGPURendering"),
			bRequiresRestart: true,
			setting: "enable_gpu_accelerated_webviews",
		}),
		n.createElement(_.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Interface_EnableHardwareDecoding"),
			bRequiresRestart: true,
			setting: "enable_hardware_video_decoding",
			displayOffIfDisabled: true,
			disabled: d,
			description: p,
		}),
		n.createElement(_.G, {
			feature: 1,
			label: (0, Localize)("#Settings_Interface_ShowMarketingMessages"),
			setting: "enable_marketing_messages",
		}),
		n.createElement(Ci, null),
		i &&
			!t &&
			n.createElement(
				E.WG,
				{
					bottomSeparator: "none",
					label: (0, Localize)("#Settings_Interface_TaskbarPreferences"),
					onClick: c,
				},
				(0, Localize)("#Settings_Interface_SetTaskbarPreferences"),
			),
		i &&
			t &&
			n.createElement(
				"div",
				{
					ref: m,
				},
				n.createElement(
					E.tX,
					null,
					(0, Localize)("#Settings_Interface_TaskbarPreferences"),
				),
				n.createElement(gi, null),
			),
	);
}
const fi = 1000;
function bi() {
	const [e, t] = VI("music_volume");
	const r = _g(50);
	const [i, a] = uN(e, (e) => r(() => t(e)), fi);
	return n.createElement(O.V, {
		feature: h.uX,
		min: 0,
		max: 100,
		step: 10,
		value: i,
		onChange: a,
		label: (0, Localize)("#Settings_Music_Volume"),
		icon: n.createElement(u.AudioVolumeIcon, {
			flVolume: e,
		}),
		padding: "standard",
		showValue: true,
	});
}
function yi() {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Music_PauseMusic_StartApp"),
			setting: "music_pause_on_app_start",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Music_PauseMusic_VoiceChat"),
			setting: "music_pause_on_voice_chat",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Music_DownloadHighQuality"),
			setting: "music_download_high_quality",
		}),
		n.createElement(_.G, {
			feature: h.uX,
			label: (0, Localize)("#Settings_Music_DisplayNotification"),
			setting: "music_playlist_notification",
		}),
	);
}
function Si() {
	return n.createElement(
		E.sh,
		null,
		n.createElement(bi, null),
		n.createElement(yi, null),
	);
}
const Bi = wi;
const vi = new Map([
	[1080, 1920],
	[720, 1280],
	[480, 854],
	[360, 640],
]);
function Ii(e) {
	const { broadcastStatus: t } = e;
	const r = iZ();
	const a = Qt_1();
	return n.createElement(
		E.WG,
		{
			label: (0, Localize)(
				"#Settings_Broadcast_Status",
				(0, Localize)(
					t?.bIsBroadcasting
						? "#BroadcastStatus_Broadcasting"
						: "#BroadcastStatus_NotBroadcasting",
				),
			),
			onClick: () => {
				a(`steam://url/SteamIDBroadcastPage/${r.strSteamID}`);
			},
			description: LocalizePlural(
				"#Settings_Broadcast_StatusViewers",
				t.nViewers,
			),
		},
		(0, Localize)("#Settings_Broadcast_Manage"),
	);
}
function Ei(e) {
	const { broadcastStatus: t } = e;
	let r = "#BroadcastError_DisabledUser";
	switch (t.eBroadcastReady) {
		case 20: {
			r = t.bCompatibilityMode
				? "#BroadcastError_ServiceUnavailable_CompatEnabled"
				: "#BroadcastError_ServiceUnavailable";
			break;
		}
		case 80: {
			r = "#BroadcastError_DisabledOverlay";
		}
	}
	return n.createElement(
		m.a3,
		{
			className: Bi.Error,
		},
		n.createElement(
			"div",
			{
				className: Bi.ErrorText,
			},
			LocalizeInlineReactWithFallback(
				r,
				n.createElement("p", null),
				n.createElement("p", null),
				n.createElement("a", {
					href: "steam://openurl_external/https://help.steampowered.com/en/faqs/view/443B-C1B8-0998-C02A",
				}),
			),
		),
	);
}
function Mi(e) {
	const t = ni();
	const [r] = VI("broadcast_permissions");
	const [a, s] = VI("broadcast_output_width");
	const [o, c] = n.useState();
	const m = n.useCallback((e) => {
		c(e);
	}, []);
	n.useEffect(() => {
		const e = SteamClient.Broadcast.RegisterForBroadcastStatus(m);
		return () => e.unregister();
	}, [m]);
	const u = [
		{
			label: (0, Localize)("#BroadcastPrivacy_Disabled"),
			data: 0,
		},
		{
			label: (0, Localize)("#BroadcastPrivacy_FriendsApprove"),
			data: 1,
		},
		{
			label: (0, Localize)("#BroadcastPrivacy_FriendsAllowed"),
			data: 2,
		},
		{
			label: (0, Localize)("#BroadcastPrivacy_Public"),
			data: 3,
		},
	];
	const d = [
		{
			label: (0, Localize)("#BroadcastResolutionOption_1080p"),
			data: 1080,
		},
		{
			label: (0, Localize)("#BroadcastResolutionOption_720p"),
			data: 720,
		},
		{
			label: (0, Localize)("#BroadcastResolutionOption_480p"),
			data: 480,
		},
		{
			label: (0, Localize)("#BroadcastResolutionOption_360p"),
			data: 360,
		},
	];
	const p = [3500, 3000, 2500, 2000, 1500, 1000, 750].map((e) => ({
		label: (0, Localize)("#Kilobits_PerSecond", e),
		data: e,
	}));
	const g = [
		{
			label: (0, Localize)("#EncodingOption_Quality"),
			data: 0,
		},
		{
			label: (0, Localize)("#EncodingOption_Performance"),
			data: 1,
		},
	];
	const h = r == 0;
	const f = Qt_1(`${C.TS.HELP_BASE_URL}faqs/view/548F-BC55-89EB-1BC8`);
	if (o) {
		return n.createElement(
			E.sh,
			null,
			o.eBroadcastReady == 1 &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(Ii, {
						broadcastStatus: o,
					}),
					n.createElement(pt.X, {
						label: (0, Localize)("#Settings_Broadcast_Privacy"),
						rgOptions: u,
						setting: "broadcast_permissions",
					}),
					!h &&
						n.createElement(
							n.Fragment,
							null,
							n.createElement(pt.X, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_VideoDimensions"),
								rgOptions: d,
								setting: "broadcast_output_height",
								onChange: (e) => {
									const t = e.data;
									s(vi.get(t));
								},
							}),
							n.createElement(pt.X, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_MaxBitRate"),
								rgOptions: p,
								setting: "broadcast_bitrate",
							}),
							n.createElement(pt.X, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_OptimizeEncoding"),
								rgOptions: g,
								setting: "broadcast_encoding_option",
							}),
							n.createElement(pt.X, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_ShowChat"),
								rgOptions: t,
								setting: "broadcast_chat_corner",
							}),
							n.createElement(_.G, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_RecordAllVideo"),
								setting: "broadcast_record_all_video",
							}),
							n.createElement(_.G, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_RecordAllAudio"),
								setting: "broadcast_record_all_audio",
							}),
							n.createElement(_.G, {
								feature: 7,
								label: LocalizeInlineReactWithFallback(
									"#Settings_Broadcast_RecordMicrophone",
									n.createElement("a", {
										className: Bi.ConfigureMic,
										href: "steam://open/settings/voice",
									}),
								),
								setting: "broadcast_record_microphone",
							}),
							n.createElement(_.G, {
								feature: 7,
								label: (0, Localize)("#Settings_Broadcast_ShowUploadStats"),
								setting: "broadcast_show_upload_stats",
							}),
							r == 3 &&
								n.createElement(_.G, {
									feature: 7,
									label: (0, Localize)("#Settings_Broadcast_AlwaysShowLive"),
									setting: "broadcast_show_live_reminder",
								}),
						),
					n.createElement(
						E.WG,
						{
							label: LocalizeInlineReactWithFallback(
								"#Settings_Broadcast_HelpLink",
							),
							onClick: f,
						},
						(0, Localize)("#Settings_RemotePlay_FAQViewFAQ"),
					),
				),
			o.eBroadcastReady != 1 &&
				n.createElement(Ei, {
					broadcastStatus: o,
				}),
		);
	} else {
		return null;
	}
}
let Ti;
const Gi = Fi;
function Oi(e) {
	const { voiceStore: t } = e;
	hf();
	const r = q3(() => t.IsLocalMicTestActive());
	const i = q3(() => ki.LN.GetCurrentUserVoiceLevel());
	let a = Math.min(i * 3.2, 1);
	let s = Math.max(0, a * 100);
	s = r ? Math.round(s * 10) / 10 : 0;
	n.useEffect(() => t.EndLocalMicTest, [t]);
	return n.createElement(
		m.D0,
		{
			className: Gi.MicrophoneTestField,
			childrenContainerWidth: "max",
		},
		n.createElement(
			"div",
			{
				className: Gi.MicrophoneTest,
			},
			n.createElement(Ni.z2, {
				className: Gi.VolumeBar,
				nProgress: s,
			}),
			n.createElement(
				y.t,
				{
					as: E.CS,
					feature: 7,
					className: Gi.MicrophoneTestButton,
					onClick: r ? t.EndLocalMicTest : t.InitiateLocalMicTest,
				},
				(0, Localize)(r ? "#VoiceStopLocalMicTest" : "#VoiceStartLocalMicTest"),
			),
		),
	);
}
function Pi(e) {
	const { rgDevices: t, selectedDeviceId: r, onSelect: i, ...a } = e;
	const s = n.useMemo(
		() =>
			[
				{
					label: (0, Localize)("#Voice_DefaultDevice"),
					data: "default",
				},
			].concat(
				t.map((e) => ({
					data: e.deviceId,

					label:
						e.deviceId == "communications"
							? (0, Localize)("#Voice_DefaultCommunicationsDefault")
							: e.label,
				})),
			),
		[t],
	);
	return n.createElement(ue.B, {
		feature: 7,
		...a,
		contextMenuPositionOptions: {
			bMatchWidth: false,
			bPreferPopLeft: true,
		},
		strDefaultLabel: (0, Localize)("#Voice_DefaultDevice"),
		selectedOption: r,
		onChange: (e) => i(e.data),
		rgOptions: s,
	});
}
function Li(e) {
	const { voiceStore: t, rgDevices: r } = e;
	const i = q3(() => t.GetSelectedMic());
	const a = r.filter((e) => e.kind == "audioinput" && e.deviceId != "default");
	return n.createElement(Pi, {
		label: (0, Localize)("#VoiceDevice"),
		rgDevices: a,
		selectedDeviceId: i,
		onSelect: t.SetSelectedMic,
		bottomSeparator: "none",
	});
}
function zi(e) {
	const { voiceStore: t, rgDevices: r } = e;
	const i = q3(() => t.GetSelectedOutputDevice());
	const a = r.filter((e) => e.kind == "audiooutput" && e.deviceId != "default");
	return n.createElement(Pi, {
		label: (0, Localize)("#VoiceOutputDevice"),
		rgDevices: a,
		selectedDeviceId: i,
		onSelect: t.SetSelectedOutput,
	});
}
function xi(e) {
	const { voiceStore: t } = e;
	const [r, i] = n.useState([]);
	n.useEffect(() => {
		let e = true;
		navigator.mediaDevices
			.enumerateDevices()
			.then((t) => {
				if (e) {
					i(t);
				}
			})
			.catch(() => {
				if (e) {
					i([]);
				}
			});
		return () => {
			e = false;
		};
	}, []);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(Li, {
			voiceStore: t,
			rgDevices: r,
		}),
		n.createElement(Oi, {
			voiceStore: t,
		}),
		n.createElement(zi, {
			voiceStore: t,
			rgDevices: r,
		}),
	);
}
function Ui(e) {
	const { voiceStore: t, label: r, description: i, gain: a, setGain: s } = e;
	const o = t.GetMaxInputOutputGain();
	const l = t.ConvertGainValueToSliderValue(a, o);
	const [c, m] = uN(l, (e) => s(t.ConvertSliderToGainValue(e, o)));
	return n.createElement(O.V, {
		feature: 7,
		label: r,
		description: i,
		min: 0,
		max: 100,
		value: c,
		onChange: m,
	});
}
function Wi(e) {
	const { voiceStore: t } = e;
	const r = q3(() => t.GetVoiceInputGain());
	const i = t.SetVoiceInputGain;
	return n.createElement(Ui, {
		voiceStore: t,
		label: (0, Localize)("#VoiceInputGain"),
		description: (0, Localize)("#VoiceInputGainExplainer"),
		gain: r,
		setGain: i,
	});
}
function Vi(e) {
	const { voiceStore: t } = e;
	const r = q3(() => t.GetVoiceOutputGain());
	const i = t.SetVoiceOutputGain;
	return n.createElement(Ui, {
		voiceStore: t,
		label: (0, Localize)("#VoiceOutputGain"),
		description: (0, Localize)("#VoiceOutputGainExplainer"),
		gain: r,
		setGain: i,
	});
}
function Hi(e) {
	const { eTransmissionType: t, voiceStore: r } = e;
	return n.createElement(
		m.G5,
		null,
		n.createElement(E.Pq, null, (0, Localize)("#VoiceTransmissionType_Label")),
		n.createElement(
			v,
			{
				feature: 7,
				value: t,
				onChange: (e) => {
					if (e == Ti.k_EPushToMute) {
						SteamClient.WebChat.SetPushToMuteEnabled(true);
						r.SetPushToMuteEnabled(true);
					} else {
						SteamClient.WebChat.SetPushToTalkEnabled(e == Ti.k_EPushToTalk);
						r.SetPushToTalkEnabled(e == Ti.k_EPushToTalk);
					}
				},
			},
			n.createElement(
				m.a,
				{
					value: Ti.k_EOpenMic,
				},
				(0, Localize)("#VoiceTransmissionType_OpenMic"),
			),
			n.createElement(
				m.a,
				{
					value: Ti.k_EPushToTalk,
				},
				(0, Localize)("#VoiceTransmissionType_PushToTalk"),
			),
			n.createElement(
				m.a,
				{
					value: Ti.k_EPushToMute,
				},
				(0, Localize)("#VoiceTransmissionType_PushToMute"),
			),
		),
		n.createElement(m.Nu, {
			className: A(Gi.TopMargin),
		}),
	);
}
function ji(e) {
	const { voiceStore: t, eTransmissionType: r } = e;
	const i = q3(() => t.GetPushToTalkHotKeyDisplayString());
	const a = r == Ti.k_EOpenMic;
	let s = "#VoiceMuteToggleAssigned";
	if (r == Ti.k_EPushToTalk) {
		s = "#VoicePushToTalkAssigned";
	} else if (r == Ti.k_EPushToMute) {
		s = "#VoicePushToMuteAssigned";
	}
	return n.createElement(
		ti.n,
		{
			feature: 7,
			label: (0, Localize)(s),
			className: Gi.HotKeyField,
			current: i,
			onKeyChange: (e) => {
				SteamClient.WebChat.SetPushToTalkHotKey(e);
				t.RefreshPushToTalkKeySettings();
			},
			onButtonChange: (e) => {
				SteamClient.WebChat.SetPushToTalkMouseButton(e);
				t.RefreshPushToTalkKeySettings();
			},
		},
		a &&
			n.createElement(
				y.t,
				{
					as: E.CS,
					feature: 7,
					className: Gi.ClearButton,
					onClick: () => {
						SteamClient.WebChat.SetPushToTalkHotKey(0);
						t.RefreshPushToTalkKeySettings();
					},
				},
				"X",
			),
	);
}
function qi(e) {
	const { voiceStore: t } = e;
	const r = q3(() => t.GetPushToTalkOrMuteSoundsEnabled());
	return n.createElement(me.C, {
		feature: 7,
		label: (0, Localize)("#VoicePushToSomethingSoundOption"),
		checked: r,
		onChange: t.SetPushToTalkOrMuteSoundsEnabled,
	});
}
function Qi(e) {
	const { voiceStore: t } = e;
	const r = q3(() => t.GetPushToTalkEnabled());
	const i = q3(() => t.GetPushToMuteEnabled());
	const a = r ? Ti.k_EPushToTalk : i ? Ti.k_EPushToMute : Ti.k_EOpenMic;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(Hi, {
			voiceStore: t,
			eTransmissionType: a,
		}),
		n.createElement(ji, {
			voiceStore: t,
			eTransmissionType: a,
		}),
		n.createElement(qi, {
			voiceStore: t,
		}),
	);
}
function Zi(e) {
	const { voiceStore: t } = e;
	const r = q3(() => t.GetUseNoiseGateLevel());
	const i = r === Di.H.k_ENoiseGateLevel_Low ? Di.H.k_ENoiseGateLevel_Off : r;
	return n.createElement(
		m.G5,
		null,
		n.createElement(E.Pq, null, (0, Localize)("#VoiceTransmisionThreshold")),
		n.createElement(
			E.Tv,
			null,
			(0, Localize)("#VoiceTransmissionThresholdExplainer"),
		),
		n.createElement(
			v,
			{
				feature: 7,
				value: i,
				onChange: t.SetUseNoiseGateLevel,
			},
			n.createElement(
				m.a,
				{
					value: Di.H.k_ENoiseGateLevel_Off,
				},
				(0, Localize)("#VoiceTransmissionThresholdOff"),
			),
			n.createElement(
				m.a,
				{
					value: Di.H.k_ENoiseGateLevel_Medium,
				},
				(0, Localize)("#VoiceTransmissionThresholdMedium"),
				n.createElement(
					"span",
					{
						className: Gi.RecommendedNote,
					},
					(0, Localize)("#VoiceTransmissionThresholdRecommended"),
				),
			),
			n.createElement(
				m.a,
				{
					value: Di.H.k_ENoiseGateLevel_High,
				},
				(0, Localize)("#VoiceTransmissionThresholdHigh"),
			),
		),
		n.createElement(m.Nu, {
			className: Gi.TopMargin,
		}),
	);
}
function Yi(e) {
	const { voiceStore: t } = e;
	const r = n.useRef(undefined);
	const [i, a, s] = q3(() => [
		t.GetUseEchoCancellation(),
		t.GetUseNoiseCancellation(),
		t.GetUseAutoGainControl(),
	]);
	return n.createElement(
		"div",
		{
			ref: r,
		},
		n.createElement(
			m.G5,
			{
				className: Gi.Advanced,
			},
			n.createElement(m.tX, null, (0, Localize)("#VoiceAdvancedSettings")),
			n.createElement(
				m.a3,
				{
					className: Gi.AdvancedDescription,
				},
				(0, Localize)("#VoiceAdvancedSettingsExplainer"),
			),
			n.createElement(me.C, {
				feature: 7,
				label: (0, Localize)("#VoiceEchoCancellation"),
				checked: i,
				onChange: t.SetUseEchoCancellation,
			}),
			n.createElement(me.C, {
				feature: 7,
				label: (0, Localize)("#VoiceNoiseCancellation"),
				checked: a,
				onChange: t.SetUseNoiseCancellation,
			}),
			n.createElement(me.C, {
				feature: 7,
				label: (0, Localize)("#VoiceAutoGainControl"),
				checked: s,
				onChange: t.SetUseAutoGainControl,
			}),
			false,
			n.createElement(
				E.oN,
				{
					feature: 7,
					label: (0, Localize)("#CopyVoiceChatLogs"),
					onClick: () => {
						const e = t.GetVoiceLogs();
						r.current?.ownerDocument.defaultView.navigator.clipboard.writeText(
							e,
						);
					},
				},
				(0, Localize)("#Button_Copy"),
			),
		),
	);
}
function Ki(e) {
	const t = ki.LN.GetVoiceInterface();
	const [r, i] = n.useState(false);
	return n.createElement(
		E.sh,
		null,
		n.createElement(xi, {
			voiceStore: t,
		}),
		n.createElement(Wi, {
			voiceStore: t,
		}),
		n.createElement(Vi, {
			voiceStore: t,
		}),
		n.createElement(Qi, {
			voiceStore: t,
		}),
		n.createElement(Zi, {
			voiceStore: t,
		}),
		!r &&
			n.createElement(
				E.WG,
				{
					bottomSeparator: "none",
					label: (0, Localize)("#Voice_ShowAdvanced"),
					onClick: () => i(true),
				},
				(0, Localize)("#Voice_Button_Show"),
			),
		r &&
			n.createElement(
				"div",
				{
					ref: (e) => {
						e?.scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "start",
						});
					},
				},
				n.createElement(Yi, {
					voiceStore: t,
				}),
			),
	);
}
function Xi(e) {
	const [t, r] = VI("voice_mic_input_gain");
	const [i, a] = uN(t * 100, (e) => r(e / 100));
	return n.createElement(O.V, {
		feature: 7,
		label: (0, Localize)("#VoiceInputGain"),
		description: (0, Localize)("#VoiceInputGainExplainer"),
		min: 0,
		max: 100,
		step: 1,
		value: i,
		onChange: a,
	});
}
function Ji(e) {
	const [t, r] = VI("voice_speaker_output_gain");
	const [i, a] = uN(t * 100, (e) => {
		console.log(e);
		r(e / 100);
	});
	return n.createElement(O.V, {
		feature: 7,
		label: (0, Localize)("#VoiceOutputGain"),
		description: (0, Localize)("#VoiceOutputGainExplainer"),
		min: 0,
		max: 100,
		step: 1,
		value: i,
		onChange: a,
	});
}
function $i(e) {
	const [t, r] = n.useState(0);
	const [i, a] = n.useState(false);
	const [s] = VI("voice_mic_device_name");
	const o = hf();
	n.useEffect(() => {
		SteamClient.Settings.RegisterForMicVolumeUpdates(r);
	}, [r]);
	const c = n.useCallback((e) => {
		a(e);
		SteamClient.Settings.SetMicTestMode(e);
	}, []);
	const u = ki.LN.GetVoiceInterface();
	const d = q3(() => u.GetPushToTalkEnabled());
	const p = q3(() => u.GetPushToMuteEnabled());
	const g = d ? Ti.k_EPushToTalk : p ? Ti.k_EPushToMute : Ti.k_EOpenMic;
	const [h, _] = n.useState(false);
	const f = h
		? (0, Localize)("#Settings_InGame_Voice_Done")
		: (0, Localize)("#Settings_InGame_Voice_Manage");
	return n.createElement(
		E.sh,
		{
			className: e.className,
		},
		n.createElement(m.tX, null, (0, Localize)("#Settings_InGame_Voice")),
		n.createElement(
			m.D0,
			{
				label: (0, Localize)("#Settings_InGame_Voice_MicDeviceName"),
				className: Gi.HotKeyField,
			},
			s,
		),
		n.createElement(
			y.t,
			{
				feature: 7,
				onClick: () => {
					if (h) {
						SteamClient.Settings.ReinitMicSettings();
					} else {
						SteamClient.Settings.OpenWindowsMicSettings();
					}
					_(!h);
				},
			},
			f,
		),
		n.createElement(
			m.D0,
			{
				className: Gi.MicrophoneTestField,
				childrenContainerWidth: "max",
			},
			n.createElement(
				"div",
				{
					className: Gi.MicrophoneTest,
				},
				n.createElement(Ni.z2, {
					className: Gi.VolumeBar,
					nProgress: i ? t * 100 : 0,
				}),
				n.createElement(
					y.t,
					{
						as: E.CS,
						feature: 7,
						className: Gi.MicrophoneTestButton,
						onClick: () => c(!i),
					},
					(0, Localize)(
						i ? "#VoiceStopLocalMicTest" : "#VoiceStartLocalMicTest",
					),
				),
			),
		),
		n.createElement(Xi, null),
		n.createElement(Ji, null),
		o &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(Hi, {
					voiceStore: u,
					eTransmissionType: g,
				}),
				n.createElement(ji, {
					voiceStore: u,
					eTransmissionType: g,
				}),
			),
	);
}
((e) => {
	e[(e.k_EOpenMic = 0)] = "k_EOpenMic";
	e[(e.k_EPushToTalk = 1)] = "k_EPushToTalk";
	e[(e.k_EPushToMute = 2)] = "k_EPushToMute";
})((Ti ||= {}));
const ia = ["account_settings"];
function aa(e) {
	const t = iZ();
	const r = Qt_1(cr.B7.ResolveURL("HelpChangePassword", t.strClientInstanceID));
	const a = n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"span",
			{
				className: ta.EntryLabel,
			},
			(0, Localize)("#Settings_Account_AccountName"),
		),
		n.createElement(
			"span",
			{
				className: ta.EntryValue,
			},
			t.strAccountName,
		),
	);
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: a,
			bottomSeparator: "standard",
			autoFocus: true,
			onClick: r,
		},
		(0, Localize)("#Settings_Account_ChangePassword"),
	);
}
function sa(e) {
	const { accountSettings: t } = e;
	let r = "";
	let i = "";
	let a = n.createElement(
		"a",
		null,
		(0, Localize)("#Settings_Account_SteamGuard_LearnMore"),
	);
	switch (t.eSteamGuardState) {
		case 1: {
			r = (0, Localize)("#Settings_Account_Security_Status_State_0");
			break;
		}
		case 2: {
			r = (0, Localize)("#Settings_Account_Security_Status_State_2");
			break;
		}
		case 3: {
			i = ta.Enabled;
			r = t.rtSteamGuardEnableTime
				? (0, Localize)(
						"#Settings_Account_Security_Status_State_1_WithTime",
						(0, CC)(t.rtSteamGuardEnableTime),
					)
				: (0, Localize)("#Settings_Account_Security_Status_State_1");
			break;
		}
		case 4: {
			r = (0, Localize)("#Settings_Account_Security_Status_State_4");
			break;
		}
		default: {
			r = (0, Localize)("#Settings_Account_Security_Status_State_3");
		}
	}
	if (t.bHasTwoFactor) {
		i = ta.EnabledTwoFactor;
		r = (0, Localize)(
			t.rtSteamGuardEnableTime
				? "#Settings_Account_Security_Status_TwoFactor_WithTime"
				: "#Settings_Account_Security_Status_TwoFactor",
			(0, CC)(t.rtSteamGuardEnableTime),
		);
		a = undefined;
	}
	return n.createElement(
		"div",
		{
			className: ta.Description,
		},
		n.createElement(
			"div",
			{
				className: ta.Status,
			},
			n.createElement(Zt.iSZ, {
				className: A(ta.SteamGuardIcon, i),
			}),
			n.createElement("span", null, r),
		),
		a,
	);
}
function oa(e) {
	const { accountSettings: t } = e;
	const r = Qt_1(cr.B7.ResolveURL("ManageSteamGuard"));
	return n.createElement(
		E.oN,
		{
			feature: 7,
			label: (0, Localize)("#Settings_Account_SteamGuard"),
			description: n.createElement(sa, {
				accountSettings: t,
			}),
			onClick: r,
		},
		(0, Localize)("#Settings_Account_ManageSteamGuard"),
	);
}
function la(e) {
	const { accountSettings: t } = e;
	const r = Qt_1(cr.B7.ResolveURL("ManageSteamGuard"));
	if (t.eSteamGuardState != 3) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			t.bHasTwoFactor &&
				n.createElement(
					E.oN,
					{
						feature: 7,
						label: (0, Localize)("#Settings_Account_BackupCodes"),
						description: (0, Localize)("#Settings_Account_BackupCodes_Desc"),
						onClick: r,
					},
					(0, Localize)("#Settings_Account_BackupCodes_Button"),
				),
			n.createElement(
				E.oN,
				{
					feature: 7,
					label: (0, Localize)("#Settings_Account_Deauthorize"),
					description: (0, Localize)("#Settings_Account_Deauthorize_Desc"),
					onClick: r,
				},
				(0, Localize)("#Settings_Account_Deauthorize_Button"),
			),
		);
	}
}
function ca(e) {
	const t = I_2({
		queryKey: ia,
		queryFn: async () => await SteamClient.Settings.GetAccountSettings(),
	}).data;
	if (t) {
		return n.createElement(
			E.sh,
			null,
			n.createElement(aa, null),
			n.createElement(me.C, {
				feature: 7,
				label: (0, Localize)("#Settings_Account_DontSaveCredentials"),
				description: (0, Localize)(
					"#Settings_Account_DontSaveCredentials_Desc",
				),
				checked: !t.bSaveAccountCredentials,
				onChange: (e) => {
					SteamClient.Settings.SetSaveAccountCredentials(!e);
					na.L.invalidateQueries({
						queryKey: ia,
					});
				},
				bottomSeparator: "none",
			}),
			false,
			n.createElement(m.Nu, null),
			n.createElement(
				m.G5,
				null,
				n.createElement(
					m.tX,
					null,
					(0, Localize)("#Settings_Account_SteamGuard"),
				),
				n.createElement(oa, {
					accountSettings: t,
				}),
				n.createElement(la, {
					accountSettings: t,
				}),
			),
		);
	} else {
		return null;
	}
}
const ua = n.lazy(() => require.e(7462).then(require.bind(require, 4069)));
export const Bv = {
	network: "Internet",
	audio: "Audio",
	controller: "Controller",
	display: "Display",
	downloads: "Downloads",
	DiskManagement: "Storage",
	storage: "Storage",
	family: "Family",
	general: "General",
	account: "General",
	SteamPlay: "General",
	system: "System",
	security: "Security",
	notifications: "Notifications",
	bluetooth: "Bluetooth",
	keyboard: "Keyboard",
	customization: "Customization",
	friends: "Friends",
	cloud: "Cloud",
	home: "Home",
	library: "Library",
	ingame: "InGame",
	compatibility: "Compatibility",
	interface: "Interface",
	music: "Music",
	broadcast: "Broadcast",
	developer: "Developer",
	internal: "Internal",
	voice: "Voice",
	gamerecording: "GameRecording",
};
const Aa = [
	"General",
	"System",
	"Security",
	"Internet",
	"Notifications",
	m.I0,
	"Display",
	"Audio",
	"Bluetooth",
	"Controller",
	"Keyboard",
	"Customization",
	m.I0,
	"Friends",
	"Downloads",
	"Cloud",
	"InGame",
	"Family",
	"RemotePlay",
	"Storage",
	"GameRecording",
	m.I0,
	"Home",
	"Library",
	"Developer",
	"Internal",
];
m.I0;
m.I0;
m.I0;
const pa = [
	"General",
	"System",
	"Security",
	"Internet",
	"Notifications",
	m.I0,
	"Display",
	"Audio",
	"Bluetooth",
	"Controller",
	"Keyboard",
	"Customization",
	m.I0,
	"Account",
	"Friends",
	"Downloads",
	"Cloud",
	"InGame",
	"Compatibility",
	"Family",
	"RemotePlay",
	"Storage",
	"InGameVoice",
	"GameRecording",
	m.I0,
	"Home",
	"Library",
	"Interface",
	"Developer",
	"Internal",
];
const ga = [
	"General",
	"System",
	"Security",
	"Internet",
	"Notifications",
	m.I0,
	"Display",
	"Audio",
	"Bluetooth",
	"Controller",
	"Keyboard",
	"Customization",
	m.I0,
	"Friends",
	"Downloads",
	"Cloud",
	"InGame",
	"Compatibility",
	"Family",
	"RemotePlay",
	"Storage",
	"InGameVoice",
	"GameRecording",
	m.I0,
	"Home",
	"Library",
	"Interface",
	"Developer",
	"Internal",
];
const ha = [
	"Account",
	"Friends",
	"Family",
	"DesktopSecurity",
	m.I0,
	"Notifications",
	"Interface",
	"Library",
	"Downloads",
	"Storage",
	"Cloud",
	"InGame",
	"Compatibility",
	m.I0,
	"Controller",
	"GameRecording",
	"Voice",
	"RemotePlay",
	"Broadcast",
	"Music",
	"Developer",
	"Internal",
];
const Ca = [
	"InGame",
	"Friends",
	"Voice",
	"Music",
	"Broadcast",
	"InGameVoice",
	"GameRecording",
];
function _a() {
	const [e] = gk();
	const t = C.TS.DEV_MODE;
	return e || t;
}
export function lA() {
	const e = _a();
	return !!q3(() => l.rV.settings?.bIsValveEmail) && e;
}
function ba(e) {
	return n.createElement(
		n.Suspense,
		{
			fallback: null,
		},
		n.createElement(ua, null),
	);
}
export function r4() {
	const e = (() => {
		const e = Qn_2();
		const t = uI();
		const r = $2();
		const n = rP().IN_VR;
		if (r?.IsDesktopOverlayWindow()) {
			return Ca;
		} else if (t && e) {
			return Aa;
		} else if (n) {
			return pa;
		} else if (e) {
			return ga;
		} else {
			return ha;
		}
	})();
	const t = q3(() => qw().GetServicesInitialized());
	const r = Iz();
	const l = _a();
	const d = lA();
	const p = C2();
	const g = C.TS.ON_DECK && (C.TS.DECK_DISPLAY_MODE || C.TS.IN_GAMESCOPE);
	const h = Qn_2();
	const _ = Y2();
	const f = s.oy.MainRunningAppID;
	const [b, y] = n.useState(false);
	const S = rP().IN_VR;
	n.useEffect(() => {
		if (f > 0) {
			SteamClient.Settings.GetAppUsesP2PVoice(f ?? 0).then((e) => y(e));
		}
	}, [f]);
	const w = n.useMemo(
		() => ({
			General: {
				visible: t,
				title: (0, Localize)("#Settings_Page_General"),
				icon: n.createElement(u.Settings, null),
				route: i.BV.Settings.General(),
				content: n.createElement(qt, null),
			},

			System: {
				visible: t,
				title: (0, Localize)("#Settings_Page_System"),
				icon: p
					? n.createElement(u.SteamDeckNeedsUpdate, null)
					: n.createElement(u.SteamDeck, null),
				route: i.BV.Settings.System(),
				content: n.createElement(nn.Xl, null),
			},

			Security: {
				visible: t && g,
				title: (0, Localize)("#Settings_Page_Security"),
				icon: n.createElement(u.Lock, {
					locked: true,
				}),
				route: i.BV.Settings.Security(),
				content: n.createElement(ln, null),
			},

			Internet: {
				visible: true,
				title: (0, Localize)("#Settings_Page_Internet"),
				icon: n.createElement(u.WirelessNetwork, null),
				route: i.BV.Settings.Internet(),
				content: n.createElement(Vr.KM, null),
			},

			Notifications: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Notifications"),
				icon: n.createElement(u.ExclamationPoint, null),
				route: i.BV.Settings.Notifications(),
				content: n.createElement(zn, null),
			},

			Display: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Display"),
				icon: n.createElement(u.Display, null),
				route: i.BV.Settings.Display(),
				content: n.createElement(st, null),
			},

			Audio: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Audio"),
				icon: n.createElement(a.XZ, null),
				route: i.BV.Settings.Audio(),
				content: n.createElement(U, null),
			},

			Bluetooth: {
				visible: r,
				title: (0, Localize)("#Settings_Page_Bluetooth"),
				icon: n.createElement(u.Bluetooth, null),
				route: i.BV.Settings.Bluetooth(),
				content: n.createElement(q, null),
			},

			Controller: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Controller"),
				icon: n.createElement(u.ControllerStatus, null),
				route: i.BV.Settings.Controller(),
				content: n.createElement(Q.yk, null),
			},

			Keyboard: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Keyboard"),
				icon: n.createElement(u.Keyboard, null),
				route: i.BV.Settings.Keyboard(),
				content: n.createElement(yr, null),
			},

			Customization: {
				visible: t && !S,
				title: (0, Localize)("#Settings_Page_Customization"),
				icon: n.createElement(u.CustomizeSteamDeck, null),
				route: i.BV.Settings.Customization(),
				content: n.createElement(Wr, null),
			},

			Friends: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Friends"),
				icon: n.createElement(u.Friends, null),
				route: i.BV.Settings.Friends(),
				content: n.createElement(wn, null),
			},

			Downloads: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Downloads"),
				icon: n.createElement(u.Download, null),
				route: i.BV.Settings.Downloads(),
				content: n.createElement(Ot, null),
			},

			Cloud: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Cloud"),
				icon: n.createElement(u.CloudSync, null),
				route: i.BV.Settings.Cloud(),
				content: n.createElement(zt, null),
			},

			Family: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Family"),
				icon: n.createElement(u.FamilySharing, null),
				route: i.BV.Settings.Family(),
				content: n.createElement(xt.Ci, null),
			},

			RemotePlay: {
				visible: t && !_,
				title: (0, Localize)("#Settings_Page_RemotePlay"),
				icon: n.createElement(u.RemotePlay, null),
				route: i.BV.Settings.RemotePlay(),
				content: n.createElement(rn, null),
			},

			Storage: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Storage"),
				icon: n.createElement(u.HardDrive, null),
				route: i.BV.Settings.Storage(),
				content: n.createElement(c.rN, {
					bInPagedSettingsDialog: true,
				}),
			},

			Home: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Home"),
				icon: n.createElement(u.Home, null),
				route: i.BV.Settings.Home(),
				content: n.createElement(nr, null),
			},

			Library: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Library"),
				icon: n.createElement(u.Library, null),
				route: i.BV.Settings.Library(),
				content: n.createElement(M, null),
			},

			Developer: {
				visible: l && t,
				title: (0, Localize)("#Settings_Page_Developer"),
				icon: n.createElement(u.Shader, null),
				route: i.BV.Settings.Developer(),
				content: n.createElement(Ge, null),
			},

			Internal: {
				visible: d && t,
				title: (0, Localize)("#Settings_Page_Internal"),
				icon: n.createElement(u.SteamLogo, null),
				route: i.BV.Settings.Internal(),
				content: d ? n.createElement(ir.BY, null) : null,
			},

			Account: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Account"),
				icon: n.createElement(u.ContactInfo, null),
				route: i.BV.Settings.Account(),
				content: n.createElement(Qn, null),
			},

			InGame: {
				visible: t,
				title: (0, Localize)("#Settings_Page_InGame"),
				icon: n.createElement(u.InGame, null),
				route: i.BV.Settings.InGame(),
				content: n.createElement(mi, null),
			},

			Compatibility: {
				visible: t && CI(),
				title: (0, Localize)("#Settings_Page_Compatibility"),
				icon: n.createElement(u.SteamLogo, null),
				route: i.BV.Settings.Compatibility(),
				content: n.createElement(ge, null),
			},

			Interface: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Interface"),
				icon: n.createElement(u.Display, null),
				route: i.BV.Settings.Interface(),
				content: n.createElement(_i, null),
			},

			Music: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Music"),
				icon: n.createElement(u.Music, null),
				route: i.BV.Settings.Music(),
				content: n.createElement(Si, null),
			},

			Broadcast: {
				visible: t && !_,
				title: (0, Localize)("#Settings_Page_Broadcast"),
				icon: n.createElement(u.Broadcast, null),
				route: i.BV.Settings.Broadcast(),
				content: n.createElement(Mi, null),
			},

			Voice: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Voice"),
				icon: n.createElement(u.Microphone, null),
				route: i.BV.Settings.Voice(),
				content: n.createElement(Ki, null),
			},

			InGameVoice: {
				visible: t && (h || b),
				title: (0, Localize)("#Settings_Page_InGameVoice"),
				icon: n.createElement(u.Microphone, null),
				route: i.BV.Settings.InGameVoice(),
				content: n.createElement($i, null),
			},

			DesktopSecurity: {
				visible: t,
				title: (0, Localize)("#Settings_Page_Security"),
				icon: n.createElement(u.Security, null),
				route: i.BV.Settings.Security(),
				content: n.createElement(ca, null),
			},

			GameRecording: {
				visible: t && !_ && BGameRecordingFeatureEnabled(),
				title: (0, Localize)("#Settings_Page_GameRecording"),
				icon: n.createElement(R.vN, null),
				route: i.BV.Settings.GameRecording(),
				content: n.createElement(ba, null),
				hideTitle: true,
				header: n.createElement(ma.GameRecordingSettingsHeader, null),
			},
		}),
		[r, l, d, p, g, t, b, h, _, S],
	);
	return n.useMemo(() => {
		const t = [];

		e.forEach((n, r) => {
			if (n === m.I0) {
				if (r !== 0 && r !== e.length - 1 && e[r + 1] !== m.I0) {
					t.push(m.I0);
				}
			} else {
				const e = w[n];
				if (e && e && e.visible) {
					t.push(e);
				}
			}
		});

		return t;
	}, [e, w]);
}
