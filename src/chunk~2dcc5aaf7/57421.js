var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./49519.js");
var s = require("./64608.js");
var o = require("./35488.js");
var l = require("./34792.js");
var c = require(/*webcrack:missing*/ "./44846.js");
var m = require("./46422.js");
var u = require(/*webcrack:missing*/ "./90095.js");
var d = require("./44313.js");
var A = require(/*webcrack:missing*/ "./52451.js");
var p = require("./77347.js");
var g = require("./10606.js");
var h = require("./13869.js");
var C = require("./28916.js");
var _ = require("./18057.js");
var f = require("./45309.js");
var b = require("./4406.js");
var y = require("./32179.js");
var S = require("./13925.js");
var w = require("./47356.js");
var B = require("./46375.js");
var v = require("./17386.js");
var I = require(/*webcrack:missing*/ "./54644.js");
var E = require(/*webcrack:missing*/ "./89193.js");
var M = require("./52698.js");
var T = require("./19840.js");
var R = require("./50350.js");
var k = require(/*webcrack:missing*/ "./72476.js");
var D = require("./20326.js");
var N = require("./81247.js");
var F = require("./28351.js");
var G = require("./57472.js");
var O = require(/*webcrack:missing*/ "./46108.js");
var P = require("./66943.js");
var L = require("./25467.js");
var z = require("./60517.js");
function x() {
	const e = (0, A.gc)(m.oy.NavigationManager.GetShowDebugFocusRing());
	return i.createElement(s.y4, {
		label: "Show Debug Focus Ring",
		checked: e,
		onChange: (e) => {
			m.oy.NavigationManager.SetShowDebugFocusRing(e);
		},
	});
}
export class Lc {
	static s_Singleton;
	static k_strContinuouslyRenderStorageKey = "continuously_render_store";
	m_machineStorage = new M.g();
	m_bContinuouslyRender = false;
	static Get() {
		Lc.s_Singleton ||= new Lc();
		return Lc.s_Singleton;
	}
	constructor() {
		(0, E.Gn)(this);
		this.Load().then(() => (0, E.fm)(this.Save));
	}
	get ContinuouslyRender() {
		return this.m_bContinuouslyRender;
	}
	set ContinuouslyRender(e) {
		this.m_bContinuouslyRender = e;
	}
	async Load() {
		this.m_bContinuouslyRender =
			(await this.m_machineStorage.GetObject(
				Lc.k_strContinuouslyRenderStorageKey,
			)) ?? false;
	}
	async Save() {
		return this.m_machineStorage.StoreObject(
			Lc.k_strContinuouslyRenderStorageKey,
			this.m_bContinuouslyRender,
		);
	}
}
function W() {
	const e = (0, u.q3)(() => Lc.Get().ContinuouslyRender);
	return i.createElement(s.y4, {
		label: "Continuously Render Frames",
		description:
			'\n\t\t\t\tWhen nothing is painted/composited, Chromium won\'t update the framebuffer, resulting in "0 fps".\n\t\t\t\tThis setting puts a flashing pixel in the corner of the screen to continuously push frames with\n\t\t\t\tnearly zero overhead to help comparatively profile performance changes in GamepadUI.\n\t\t\t',
		checked: e,
		onChange: (e) => (Lc.Get().ContinuouslyRender = e),
	});
}
function V() {
	const e = (0, u.q3)(() => l.rV.settings.bEnableSoftProcessKill);
	return i.createElement(s.y4, {
		label: "Enable Soft Process Kill",
		checked: e,
		onChange: (e) => {
			SteamClient.Settings.SetEnableSoftProcessKill(e);
		},
	});
}
function H() {
	const e = (0, u.q3)(() => m.oy.ForceBetaSectionVisible);
	return i.createElement(s.y4, {
		label: "Force Beta Section Visible",
		checked: e,
		onChange: (e) => {
			m.oy.ForceBetaSectionVisible = e;
		},
	});
}
function j() {
	const e = (0, k.rP)();
	const t = (0, u.q3)(() => m.oy.RemainInBigPictureModeOnClose);
	const r = i.useCallback(
		(t) => {
			m.oy.RemainInBigPictureModeOnClose = t;
			if (e.IN_GAMEPADUI) {
				SteamClient.UI.ExitBigPictureMode();
			}
		},
		[e],
	);
	if (k.TS.IN_GAMESCOPE) {
		return null;
	} else {
		return i.createElement(s.y4, {
			label: "Remain in Big Picture Mode on Window Close",
			description: "Changing setting will exit Big Picture Mode to apply.",
			checked: t,
			onChange: r,
		});
	}
}
function q() {
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(s.iK, null, "Log Settings"),
		i.createElement(d.e, null),
	);
}
function Q() {
	const e = (0, p.Av)();
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(s.lr, null, "Internet Connectivity Test"),
		i.createElement(s.Vb, {
			label: "Simulate connectivity condition",
			layout: "inline",
			rgOptions: [
				{
					label: "None",
					data: c.jr.k_ENetFakeLocalSystemState_Normal,
				},
				{
					label: "Not connected to AP (NoLAN)",
					data: c.jr.k_ENetFakeLocalSystemState_NoLAN,
				},
				{
					label: "No Internet",
					data: c.jr.k_ENetFakeLocalSystemState_NoInternet,
				},
				{
					label: "Captive Portal - redirected",
					data: c.jr.k_ENetFakeLocalSystemState_CaptivePortal_Redirected,
				},
				{
					label: "Captive Portal - in place",
					data: c.jr.k_ENetFakeLocalSystemState_CaptivePortal_InPlace,
				},
				{
					label: "Can't connect to Steam",
					data: c.jr.k_ENetFakeLocalSystemState_NoSteam,
				},
			],
			selectedOption: e.eFakeState,
			onChange: (e) => p.OQ.Get().SetNetFakeLocalSystemState(e.data),
		}),
		i.createElement(
			s.xh,
			{
				label: "Connectivity state",
				description: c.ck[e.eConnectivityTestResult],
				icon: e.bChecking && i.createElement(o.Spinner, null),
				disabled: e.bChecking,
				onClick: () => p.OQ.Get().RecheckConnectivity(),
			},
			"Retest",
		),
		e.strCaptivePortalURL &&
			i.createElement(
				s.xh,
				{
					label: "Captive portal detected",
					description: e.strCaptivePortalURL,
					onClick: (e) => (0, C.Y)((0, I.uX)(e)),
				},
				"Open",
			),
	);
}
function Z() {
	const e = (0, a.W6)();
	const t = (0, u.q3)(() => l.rV.settings.bIsSteamSideload)
		? "Set system Steam as default"
		: "Set sideload Steam as default";
	return i.createElement(
		s.BC,
		{
			alignItems: "right",
		},
		i.createElement(
			s.$n,
			{
				onClick: () => e.push(_.BV.GamepadUI.Zoo.Root()),
			},
			"Open Zoo",
		),
		i.createElement(
			s.$n,
			{
				onClick: () => (0, h.pg)(i.createElement(X, null), window),
			},
			"Open Drive Info",
		),
		i.createElement(
			s.$n,
			{
				onClick: () => SteamClient.Settings.ToggleSteamInstall(),
			},
			t,
		),
		i.createElement(
			s.$n,
			{
				onClick: () => (0, h.pg)(i.createElement(J, null), window, {}),
			},
			"Add Client Beta",
		),
	);
}
function Y() {
	const e = (0, a.W6)();
	let t = i.useCallback(() => {
		(0, S.Di)({});
	}, []);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(s.lr, null, "Internal Links"),
		i.createElement(
			s.BC,
			null,
			i.createElement(
				s.$n,
				{
					onClick: t,
				},
				"Lock Screen",
			),
			i.createElement(
				s.$n,
				{
					onClick: () =>
						e.push(_.BV.Library.Home(), {
							bShowGuidedTour: true,
						}),
				},
				"Guided Tour",
			),
			i.createElement(
				s.$n,
				{
					onClick: (e) => (0, w.Qo)((0, I.uX)(e)),
				},
				"Hardware Survey",
			),
		),
	);
}
function K() {
	const e = (0, y.dd)();
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(s.lr, null, "Miscellaneous"),
		i.createElement(s.y4, {
			controlled: true,
			checked: e,
			onChange: () => {},
			disabled: true,
			label: "Use New Achievements Pages",
		}),
		i.createElement(B.g5, null),
	);
}
function X(e) {
	return i.createElement(
		g.x_,
		{
			onEscKeypress: e.closeModal,
		},
		i.createElement(
			s.UC,
			null,
			i.createElement(s.Y9, null, "Drives"),
			i.createElement(s.nB, null, i.createElement(N.q, null), ";"),
		),
	);
}
function J(e) {
	const [t, r] = i.useState("");
	const [n, a] = i.useState("");
	return i.createElement(
		f.X_,
		{
			...e,
			title: "Add Client Beta",
			description: "Specify a name and password for a new Steam Client beta",
			disableCommit: t.length == 0 || n.length == 0,
			onCommitResult: () => {
				if (t.length > 0) {
					SteamClient.Settings.AddClientBeta(t, n);
				}
			},
		},
		i.createElement(s.pd, {
			autoFocus: true,
			label: "Beta Name",
			onChange: (e) => r(e.target.value),
			placeholder: "New Beta",
		}),
		i.createElement(s.pd, {
			label: "Beta Password",
			onChange: (e) => a(e.target.value),
			placeholder: "Password",
		}),
	);
}
function $() {
	(0, h.pg)(
		i.createElement(g.o0, {
			strTitle: "Reboot to alternate OS partition?",
			strDescription: "Confirm will restart your device",
			onOK: () => {
				SteamClient.System?.RebootToAlternateSystemPartition();
			},
		}),
		window,
		{
			strTitle: "Error",
		},
	);
}
function ee(e) {
	return i.createElement(
		s.xh,
		{
			label: "Reboot to alternate system partition",
			onClick: $,
		},
		"Reboot",
	);
}
function te() {
	(0, h.pg)(
		i.createElement(g.o0, {
			strTitle: "Delete all browser data?",
			strDescription:
				"This includes the Chrome browser as well as Steam internal HTTP client",
			onOK: () => {
				SteamClient.Settings.ClearAllHTTPCaches();
			},
		}),
		window,
		{
			strTitle: "Error",
		},
	);
}
function re(e) {
	return i.createElement(
		s.xh,
		{
			label: "Delete all CEF & internal HTTP client data",
			onClick: te,
		},
		"Delete",
	);
}
function ne(e) {
	const [t, r] = (0, v.lJ)();
	const [n, a, o] = (0, A.uD)();
	return i.createElement(
		s.G5,
		null,
		n &&
			i.createElement(v.Rw, {
				closeModal: o,
			}),
		i.createElement(s.lr, null, "Display"),
		i.createElement(s.y4, {
			label: "Show display scaling settings for Internal Display",
			checked: t,
			onChange: r,
		}),
		i.createElement(G.G, {
			feature: 7,
			setting: "gamescope_use_game_refresh_rate_in_steam",
			label: (0, O.we)("#Settings_Developer_UseGameRefreshRateInSteam"),
		}),
		i.createElement(
			s.BC,
			{
				alignItems: "right",
			},
			i.createElement(
				s.$n,
				{
					onClick: () => {
						m.oy.WindowStore.GamepadUIMainWindowInstance?.BrowserWindow?.SteamClient.Window.ResizeTo(
							1280,
							800,
							false,
						);
					},
				},
				"Reset window size",
			),
			i.createElement(
				s.$n,
				{
					onClick: a,
				},
				"Show display scale dialog",
			),
		),
	);
}
function ie(e) {
	const { device: t } = e;
	const r = (0, L.cS)(t.id);
	const n = (0, L.ws)(r);
	if (!r) {
		return null;
	}
	let a = r.name;
	if (n !== null) {
		a += ` - Battery Percent: ${n}`;
	}
	return i.createElement(s.y4, {
		icon: i.createElement(P.u3, {
			type: t.etype,
			name: r.name,
		}),
		label: a,
		disabled: !r.wake_allowed_supported,
		checked: r.wake_allowed,
		onChange: (e) =>
			z.RF.SetWakeAllowed({
				device: t.id,
				allowed: e,
			}),
	});
}
function ae(e) {
	const { rPairedDevices: t } = (0, L.KO)();
	return i.createElement(
		s.G5,
		null,
		i.createElement(s.lr, null, "Bluetooth WakeAllowed"),
		t.map((e, t) =>
			i.createElement(ie, {
				device: e,
				key: e.id,
			}),
		),
	);
}
export function Vg() {
	const e = (0, k.rP)();
	const t = (0, T.M)("GamepadPage_MaxWidthEnabled_2", true);
	const r = i.useCallback((e) => {}, []);
	if (e.IN_VR) {
		return [false, r];
	} else {
		return t;
	}
}
export function W1() {
	return (0, T.M)("GamepadPage_MaxWidth", R.QK);
}
function le(e) {
	const [t, r] = Vg();
	const [n, a] = W1();
	const o = (0, k.rP)().IN_VR;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(s.RF, {
			label: "Constrain GamepadPage width",
			checked: t,
			onChange: r,
			disabled: o,
		}),
		t &&
			i.createElement(s.d3, {
				indentLevel: 1,
				label: "Max width in virtual pixels",
				min: 200,
				max: 2000,
				layout: "inline",
				showValue: true,
				editableValue: true,
				resetValue: R.QK,
				valueSuffix: "px",
				value: n,
				onChange: a,
			}),
	);
}
function ce(e) {
	const [t, r] = (0, D.Vs)();
	const [n, a] = (0, D.Lb)();
	const [o, l] = (0, D.Hy)();
	const [c, m] = (0, D.y_)();
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(s.RF, {
			label: "Show debug pointer",
			checked: t,
			onChange: r,
		}),
		t &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(s.d3, {
					indentLevel: 1,
					label: "Debug pointer size",
					min: 1,
					max: 100,
					layout: "inline",
					showValue: true,
					editableValue: true,
					resetValue: 12,
					valueSuffix: "px",
					value: n,
					onChange: a,
				}),
				i.createElement(s.d3, {
					indentLevel: 1,
					label: "Debug pointer opacity (when inside window)",
					min: 0,
					max: 1,
					step: 0.1,
					layout: "inline",
					showValue: true,
					renderValue: (e) => Math.round(e * 100) + "%",
					resetValue: 1,
					value: o,
					onChange: l,
				}),
				i.createElement(s.d3, {
					indentLevel: 1,
					label: "Debug pointer opacity (when outside window)",
					min: 0,
					max: 1,
					step: 0.1,
					layout: "inline",
					showValue: true,
					renderValue: (e) => Math.round(e * 100) + "%",
					resetValue: 0.5,
					value: c,
					onChange: m,
				}),
			),
	);
}
export function BY(e) {
	return i.createElement(
		s.nB,
		null,
		i.createElement(Z, null),
		i.createElement(s.lr, null, "Internal Settings"),
		i.createElement(le, null),
		i.createElement(x, null),
		i.createElement(ce, null),
		i.createElement(W, null),
		i.createElement(V, null),
		i.createElement(H, null),
		i.createElement(j, null),
		i.createElement(ee, null),
		i.createElement(b.Lf, null),
		i.createElement(re, null),
		i.createElement(F.w2, null),
		i.createElement(ne, null),
		i.createElement(ae, null),
		i.createElement(Q, null),
		i.createElement(q, null),
		i.createElement(Y, null),
		i.createElement(K, null),
	);
}
(0, n.Cg)([E.sH], Lc.prototype, "m_bContinuouslyRender", undefined);
(0, n.Cg)([A.oI], Lc.prototype, "Save", null);
