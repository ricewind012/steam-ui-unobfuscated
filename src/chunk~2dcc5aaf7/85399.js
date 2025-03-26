var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./72476.js");
var a = require(/*webcrack:missing*/ "./49519.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require("./64608.js");
var c = require(/*webcrack:missing*/ "./69164.js");
var m = require(/*webcrack:missing*/ "./61657.js");
var u = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
var A = require("./50727.js");
var p = require("./78567.js");
var g = require("./35488.js");
var h = require("./85360.js");
var C = require("./45309.js");
var _ = require("./46422.js");
var f = require(/*webcrack:missing*/ "./31084.js");
var b = require(/*webcrack:missing*/ "./88750.js");
var y = require("./62486.js");
var S = require("./83314.js");
var w = require("./61277.js");
var B = require(/*webcrack:missing*/ "./4690.js");
var v = require("./13869.js");
import {
	GetOwningWindowForEvent,
	CopyTextToClipboard,
	_f,
} from "../../actual_src/utils/domutils.js";
const E = (0, s.PA)(function (e) {
	const { appid: t } = e;
	const r =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	h.v3.EnsureEditingConfiguration(t, r);
	const i = h.v3.EditingConfiguration?.sets;
	const a = !(0, y.K7)(i);
	return n.createElement(
		c.Z,
		{
			navEntryPreferPosition: B.iU.PREFERRED_CHILD,
		},
		n.createElement(
			l.Y9,
			null,
			Localize("#ControllerConfigurator_Section_ActionSets"),
			n.createElement(
				"div",
				{
					className: A.HelpButtonContainer,
				},
				n.createElement(M, null),
			),
		),
		n.createElement(
			l.nB,
			null,
			i?.map((e, r) =>
				n.createElement(R, {
					key: e.key,
					baseSetIndex: r,
					appid: t,
				}),
			),
			a &&
				n.createElement(
					c.Z,
					{
						className: A.AddSetButtonContainer,
					},
					n.createElement(
						l.$n,
						{
							className: A.GlobalSetButton,
							onClick: (e) => {
								let r = GetOwningWindowForEvent(e);
								const i = [];
								const a = h.v3.EditingConfiguration?.sets;
								i.push(
									...(y.TK.filter((e) => e.usableForSetCloning).map(
										(e) => e.key,
									) ?? []),
								);
								i.push(...(a?.filter((e) => e.key) ?? []));
								(0, v.pg)(
									n.createElement(F, {
										title: Localize(
											"#ControllerConfigurator_ActionSets_AddBaseSetDialog_Title",
										),
										description: Localize(
											"#ControllerConfigurator_ActionSets_AddBaseSetDialog_Description",
										),
										inputOptions: {
											placeholder: Localize(
												"#ControllerConfigurator_ActionSets_AddBaseSetDialog_InitialText",
											),
										},
										actionSetOptions: i,
										onResult: (e) => {
											h.v3.SetControllerActionSet(t, e);
										},
									}),
									r,
								);
							},
						},
						Localize(
							"#ControllerConfigurator_ActionSets_AddBaseSetButton_Title",
						),
					),
					n.createElement(
						l.$n,
						{
							className: A.GlobalSetButton,
							onClick: (e) => {
								let r = GetOwningWindowForEvent(e);
								const i = [];
								const a = h.v3.EditingConfiguration?.sets;
								i.push(
									...(y.TK.filter(
										(e) => e.usableForCursorVisibilityOptions,
									).map((e) => e.key) ?? []),
								);
								i.push(...(a?.filter((e) => e.key) ?? []));
								(0, v.pg)(
									n.createElement(N, {
										title: Localize(
											"#ControllerConfigurator_ActionSets_SetOptions_Title",
										),
										description: Localize(
											"#ControllerConfigurator_ActionSets_SetOptions_Desc",
										),
										actionSetOptions: i,
										onResult: (e) => {
											h.v3.SetControllerMiscSettings(t, e);
										},
										cursorShownValue:
											h.v3.EditingConfiguration?.misc_action_set_settings
												?.cursor_visible_action_set_key,
										cursorHiddenValue:
											h.v3.EditingConfiguration?.misc_action_set_settings
												?.cursor_hidden_action_set_key,
									}),
									r,
								);
							},
						},
						Localize("#ControllerConfigurator_ActionSets_SetOptions_Title"),
					),
				),
			n.createElement("div", {
				className: A.Spacer,
			}),
		),
	);
});
function M(e) {
	const t = h.v3.StableAppId;
	return n.createElement(
		l.$n,
		{
			className: A.HelpButton,
			onClick: async () => {
				w.z.AddInterstitialToQueue({
					eInterstitial: w.H.k_eIntroToActionSets,
					appid: t,
					bForce: true,
				});
			},
			onOKActionDescription: Localize("#Help"),
		},
		n.createElement(g.Question, null),
	);
}
const T = (e, t) => {
	const r = t || e;
	const i = r?.source_bindings?.find(
		(e) => e.active_group?.mode == 16,
	)?.active_group;
	const a = i?.inputs?.filter((e) => e.key == 67 && e.activators.length > 0);
	let s = [];
	a?.forEach((r, a) => {
		s.push(
			n.createElement(S.aK, {
				key: a,
				baseActionSet: e,
				layerActionSet: t,
				eControllerSource: 5,
				input: r,
				eControllerMode: 16,
				indentLevel: t ? 3 : 1,
				modeid: i?.modeid,
			}),
		);
	});
	return s;
};
const R = (0, s.PA)(function (e) {
	const { baseSetIndex: t, appid: r } = e;
	const i = h.v3.EditingConfiguration?.sets;
	const a = i?.[t];
	const s =
		a.display_name ??
		Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title");
	const o = D(
		Localize(
			"#ControllerConfigurator_ActionSets_BaseSetContextMenu_Title_1",
			s,
		),
		a,
		undefined,
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			l.D0,
			{
				label: s,
				onContextMenu: o,
				icon: n.createElement(g.Copy, null),
				bottomSeparator: "standard",
				preferredFocus: true,
			},
			n.createElement(
				l.$n,
				{
					focusable: true,
					preferredFocus: true,
					className: p.BindingOptionsButton,
					onClick: o,
				},
				n.createElement(g.Settings, null),
			),
		),
		T(a, undefined),
		a.layers?.map((e, r) =>
			n.createElement(
				n.Fragment,
				null,
				n.createElement(k, {
					key: r,
					baseSetIndex: t,
					layerSetIndex: r,
				}),
				T(a, e),
			),
		),
	);
});
const k = (0, s.PA)(function (e) {
	const { baseSetIndex: t, layerSetIndex: r } = e;
	const i = h.v3.EditingConfiguration?.sets?.[t];
	const a = i?.layers;
	const s = a?.[r];
	const o =
		s.display_name ??
		Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title");
	const c = D("Layer", i, s);
	return n.createElement(
		l.D0,
		{
			label: n.createElement(
				"span",
				{
					className: (0, u.A)(A.ActionSetEntry, A.ActionSetLayerEntry),
				},
				n.createElement(g.Inventory, null),
				" ",
				o,
			),
			onContextMenu: c,
			indentLevel: 2,
			bottomSeparator: "standard",
		},
		n.createElement(
			l.$n,
			{
				focusable: true,
				className: p.BindingOptionsButton,
				onClick: c,
			},
			n.createElement(g.Settings, null),
		),
	);
});
function D(e, t, r) {
	const i = h.v3.StableAppId;
	return (a) => {
		const s = r ?? t;
		if (s == null) {
			return;
		}
		const o =
			s.display_name ??
			Localize("#ControllerConfigurator_ActionSets_UnnamedSet_Title");
		const l =
			r != null
				? undefined
				: (e) => {
						if (!(e?.length > 0)) {
							return;
						}
						const r = {
							action_set_key: t.key,
							action_set_layer_key: "",
							new_display_name: e,
						};
						h.v3.SetControllerActionSet(i, r);
					};
		const c = () => {
			const e = {
				action_set_key: t.key,
			};
			if (r != null) {
				e.action_set_layer_key = r.key;
			}
			h.v3.SetControllerActionSet(i, e);
		};
		const m = n.createElement(
			b.tz,
			{
				label: e,
			},
			r == null &&
				n.createElement(
					C.G,
					{
						title: Localize(
							"#ControllerConfigurator_ActionSets_BaseSetContextMenu_AddLayerSetMenuItem_Title",
						),
						onResult: l,
					},
					n.createElement(C.Qj, {
						title: Localize(
							"#ControllerConfigurator_ActionSets_AddLayerSetDialog_Title_1",
							o,
						),
						description: Localize(
							"#ControllerConfigurator_ActionSets_AddLayerSetDialog_Description_1",
							o,
						),
						inputOptions: {
							placeholder: Localize(
								"#ControllerConfigurator_ActionSets_AddLayerSetDialog_InitialText_1",
								o,
							),
						},
					}),
				),
			n.createElement(
				b.kt,
				{
					onSelected: () => {
						const e = r || t;
						const n = e?.source_bindings?.find(
							(e) => e.active_group?.mode == 16,
						)?.active_group;
						const a = n?.inputs?.filter((e) => e.key == 67);
						a?.forEach((e) => {
							(0, S.M0)(i, 5, e, t, r, -1, undefined, n.modeid, n.mode_shift);
						});
					},
				},
				Localize(
					"#ControllerConfigurator_ActionSets_BaseSetContextMenu_AddAlwaysOnCommandMenuItem_Title",
				),
			),
			(h.v3.EditingConfiguration?.sets?.length != 1 || r != null) &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(b.K5, null),
					n.createElement(
						C.G,
						{
							title: Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_BaseSetContextMenu_RenameMenuItem_Title"
									: "#ControllerConfigurator_ActionSets_LayerSetContextMenu_RenameMenuItem_Title",
							),
							onResult: (e) => {
								if (!(e?.length > 0)) {
									return;
								}
								const n = {
									action_set_key: t.key,
									new_display_name: e,
								};
								if (r != null) {
									n.action_set_layer_key = r.key;
								}
								h.v3.SetControllerActionSet(i, n);
							},
						},
						n.createElement(C.Qj, {
							title: Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_RenameBaseSetDialog_Title_1"
									: "#ControllerConfigurator_ActionSets_RenameLayerSetDialog_Title_1",
								o,
							),
							description: Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_RenameBaseSetDialog_Description_1"
									: "#ControllerConfigurator_ActionSets_RenameLayerSetDialog_Description_1",
								o,
							),
							inputOptions: {
								placeholder: Localize(
									r == null
										? "#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1"
										: "#ControllerConfigurator_ActionSets_RenameLayerSetDialog_InitialText_1",
									o,
								),
							},
						}),
					),
					n.createElement(
						C.G,
						{
							title: Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_BaseSetContextMenu_RemoveMenuItem_Title"
									: "#ControllerConfigurator_ActionSets_LayerSetContextMenu_RemoveMenuItem_Title",
							),
							onResult: c,
						},
						n.createElement(C.X_, {
							title: Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_RemoveSetDialog_Title_1"
									: "#ControllerConfigurator_ActionSets_RemoveLayerDialog_Title_1",
								o,
							),
							description: Localize(
								r == null
									? "#ControllerConfigurator_ActionSets_RemoveSetDialog_Description_1"
									: "#ControllerConfigurator_ActionSets_RemoveLayerDialog_Description_1",
								o,
							),
							onCommitResult: c,
						}),
					),
				),
		);
		(0, f.lX)(m, a);
	};
}
function N(e) {
	const {
		actionSetOptions: t,
		onResult: r,
		cursorShownValue: i,
		cursorHiddenValue: a,
		...s
	} = e;
	const [o, c] = n.useState(
		t.find(
			(e) => (typeof e == "number" ? y.TW[e]?.cursorBackendKey : e.key) == i,
		) ?? 32767,
	);
	const [m, u] = n.useState(
		t.find(
			(e) => (typeof e == "number" ? y.TW[e]?.cursorBackendKey : e.key) == a,
		) ?? 32767,
	);
	const A = t.map((e) =>
		typeof e == "number"
			? {
					label: Localize(
						"#ControllerConfigurator_EControllerPresetType_" + y.TW[e]?.id,
					),
					data: e,
				}
			: {
					label: e.display_name,
					data: e,
				},
	);
	const p =
		r == null
			? undefined
			: () => {
					const e = {
						cursor_visible_action_set_key: "",
						cursor_hidden_action_set_key: "",
					};
					e.cursor_visible_action_set_key =
						typeof o == "number" ? y.TW[o].cursorBackendKey : o.key;
					e.cursor_hidden_action_set_key =
						typeof m == "number" ? y.TW[m].cursorBackendKey : m.key;
					r(e);
				};
	return n.createElement(
		C.X_,
		{
			...s,
			onCommitResult: p,
		},
		n.createElement(l.Vb, {
			autoFocus: true,
			label: Localize("#ControllerConfigurator_ActionSets_Global_CursorShown"),
			rgOptions: A,
			selectedOption: o,
			onChange: (e) => c(e.data),
		}),
		n.createElement(l.Vb, {
			autoFocus: true,
			label: Localize("#ControllerConfigurator_ActionSets_Global_CursorHidden"),
			rgOptions: A,
			selectedOption: m,
			onChange: (e) => u(e.data),
			bottomSeparator: "none",
		}),
	);
}
function F(e) {
	const {
		inputOptions: t,
		onResult: r,
		isValid: i,
		actionSetOptions: a,
		...s
	} = e;
	const [o, c] = n.useState("");
	const m = i ? i(o) : o?.length > 0;
	const [u, A] = n.useState(a[0]);
	const p = a.map((e) =>
		typeof e == "number"
			? {
					label: Localize(
						"#ControllerConfigurator_EControllerPresetType_" + y.TW[e]?.id,
					),
					data: e,
				}
			: {
					label: e.display_name,
					data: e,
				},
	);
	const g =
		r == null
			? undefined
			: () => {
					const e = typeof u == "number" ? y.TW[u].cloningBackendKey : u.key;
					if (m && r) {
						r({
							action_set_key: "",
							new_display_name: o,
							action_set_to_copy_key: e,
						});
					}
				};
	return n.createElement(
		C.X_,
		{
			...s,
			disableCommit: !m,
			onCommitResult: g,
		},
		n.createElement(l.pd, {
			autoFocus: true,
			onChange: (e) => {
				c(e.target.value);
			},
			...t,
		}),
		n.createElement(l.Vb, {
			autoFocus: true,
			label: Localize(
				"#ControllerConfigurator_ActionSets_AddBaseSetButton_CopyFrom",
			),
			rgOptions: p,
			selectedOption: u,
			onChange: (e) => A(e.data),
			bottomSeparator: "none",
		}),
	);
}
var G = require("./46396.js");
var O = require("./99452.js");
var P = require("./82667.js");
var L = require("./13110.js");
var z = require("./84056.js");
var x = require("./12272.js");
var U = require("./93966.js");
var W = require(/*webcrack:missing*/ "./11131.js");
var V = require("./31319.js");
var H = require("./34792.js");
var j = require(/*webcrack:missing*/ "./52451.js");
var q = require("./53622.js");
var Q = require("./43014.js");
var Z = require("./96680.js");
var Y = require("./3499.js");
var K = require("./67429.js");
var X = require("./78721.js");
function J(e) {
	const [t, r] = n.useState(true);
	const i = () => r(!t);
	if (t) {
		return n.createElement($, {
			appid: e.appid,
			ToggleVisiblity: i,
		});
	} else {
		return n.createElement(ee, {
			appid: e.appid,
			ToggleVisiblity: i,
		});
	}
}
function $(e) {
	const { appid: t, ToggleVisiblity: r } = e;
	const a = (0, U.yq)();
	const [s, o] = n.useState(
		h.v3?.CurrentEditedBinding?.controller_action?.mouse?.x ?? 0,
	);
	const [m, A] = n.useState(
		h.v3?.CurrentEditedBinding?.controller_action?.mouse?.y ?? 0,
	);
	const [p, g] = n.useState(
		h.v3?.CurrentEditedBinding?.controller_action?.mouse?.restore ?? true,
	);
	const f = (e) => {
		o(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const b = (e) => {
		A(Number.isSafeInteger(Number(e)) ? Number(e) : 0);
	};
	const y = (0, W.R7)().ownerWindow;
	const S = (0, _.Un)();
	const w =
		_.oy.WindowStore.SteamUIWindows.find(
			(e) => e.BrowserWindow == y,
		)?.IsGamepadUIOverlayWindow() ||
		(i.TS.IN_GAMESCOPE && S);
	return n.createElement(
		"div",
		{
			className: (0, u.A)(x.BackgroundDiv, !w && x.Opaque),
		},
		n.createElement(
			"div",
			{
				className: (0, u.A)(x.MouseControlPanelContainer),
			},
			n.createElement(
				c.Z,
				{
					className: (0, u.A)(x.MouseControlPanel),
				},
				n.createElement(
					l.Y9,
					null,
					" ",
					Localize("#ControllerBinding_MousePositionModal_Title"),
					" ",
				),
				n.createElement(
					l.nB,
					null,
					" ",
					Localize("#ControllerBinding_MousePositionModal_Desc"),
					n.createElement(
						l.D0,
						{
							label: Localize(
								"#ControllerBinding_MousePositionModal_XPosition",
							),
							className: (0, u.A)(x.Row),
						},
						n.createElement(
							C.Ql,
							{
								title: String(s),
								onResult: f,
							},
							n.createElement(C.Qj, {
								title: Localize(
									"#ControllerBinding_MousePositionModal_XPosition",
								),
								description: "",
								inputOptions: {
									placeholder: String(s),
								},
								onResult: f,
							}),
						),
					),
					n.createElement(
						l.D0,
						{
							label: Localize(
								"#ControllerBinding_MousePositionModal_YPosition",
							),
							className: (0, u.A)(x.Row),
						},
						n.createElement(
							C.Ql,
							{
								title: String(m),
								onResult: b,
							},
							n.createElement(C.Qj, {
								title: Localize(
									"#ControllerBinding_MousePositionModal_YPosition",
								),
								description: "",
								inputOptions: {
									placeholder: String(m),
								},
								onResult: b,
							}),
						),
					),
					n.createElement(l.y4, {
						label: Localize(
							"#ControllerBinding_MousePositionModal_TeleportSetting",
						),
						checked: p,
						onChange: g,
						className: (0, u.A)(x.Row),
					}),
					n.createElement(
						l.D0,
						{
							label: Localize(
								"#ControllerBinding_MousePositionModal_SelectMousePosition",
							),
							className: (0, u.A)(x.Row),
						},
						n.createElement(
							l.$n,
							{
								onClick: () => {
									const e = {
										x: s,
										y: m,
										restore:
											h.v3?.CurrentEditedBinding?.controller_action?.mouse
												?.restore,
									};
									const t = {
										type: z.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 3,
											mouse: e,
										},
									};
									h.v3.SetEditedInputBinding(t);
									r();
								},
							},
							" ",
							Localize(
								"#ControllerBinding_MousePositionModal_SelectMousePosition_StartButton",
							),
							" ",
						),
					),
				),
				n.createElement(
					l.wi,
					{
						className: (0, u.A)(x.Footer),
					},
					n.createElement(l.CB, {
						focusButton: "primary",
						onOK: () => {
							const e = {
								x: s,
								y: m,
								restore: p,
							};
							const r = {
								type: z.N.k_EControllerBindingType_ControllerAction,
								controller_action: {
									action: 3,
									mouse: e,
								},
							};
							let n = h.v3.ActiveInputBinding;
							if (r != null) {
								n.new_binding = r;
							}
							h.v3.SetControllerInputBinding(t, n);
							a();
							a();
						},
						onCancel: () => {
							a();
							a();
						},
					}),
				),
			),
		),
	);
}
function ee(e) {
	const { appid: t, ToggleVisiblity: r } = e;
	const a = (0, W.R7)().ownerWindow;
	const [s, o] = n.useState(0);
	const [l, A] = n.useState(0);
	const p = (0, Z.$2)();
	const g = (0, _.Un)();
	const C =
		_.oy.WindowStore.SteamUIWindows.find(
			(e) => e.BrowserWindow == a,
		)?.IsGamepadUIOverlayWindow() ||
		(i.TS.IN_GAMESCOPE && g);
	const f = C ? p.params.browserInfo.m_unPID : 0;
	(0, _.LC)();
	(0, V.pw)();
	n.useEffect(() => {
		SteamClient.Input.SetCursorActionset(true);
		return () => {
			SteamClient.Input.SetCursorActionset(false);
		};
	}, []);
	n.useEffect(() => {
		const e = H.rV.settings?.flCurrentDisplayScaleFactor;
		const t = h.v3?.CurrentEditedBinding?.controller_action?.mouse?.x;
		const r = h.v3?.CurrentEditedBinding?.controller_action?.mouse?.y;
		const n = Math.round(a.screenLeft + (e * a.innerWidth * t) / 32767);
		const i = Math.round(a.screenTop + (e * a.innerHeight * r) / 32767);
		if (t != 0 || r != 0) {
			SteamClient.Input.SetMousePosition(f, 0, 0);
			SteamClient.Input.SetMousePosition(f, n, i);
		}
	}, [a, f]);
	const b = n.useCallback(
		(e) => {
			o(Math.round((e.pageX / a.innerWidth) * 32767));
			A(Math.round((e.pageY / a.innerHeight) * 32767));
		},
		[a],
	);
	(0, j.l6)(a, "mousemove", b);
	const [y, S] = n.useState(-1);
	const { rgMedia: w } = (0, Y.MZ)(
		{
			listSource: {
				type: "app",
				gameid: (0, K.bY)(t),
			},
			mediaType: "screenshot",
			uploadStatus: "all",
		},
		10,
	);
	const B = () => {
		if (y != -1 && w.length > 0) {
			S(y - 1);
		} else {
			S(w.length - 1);
		}
		return true;
	};
	const v = () => {
		if (y != w.length - 1) {
			S(y + 1);
		} else {
			S(-1);
		}
		return true;
	};
	const I = n.createElement(
		c.Z,
		{
			onActivate: () => {
				const e = {
					x: s,
					y: l,
					restore:
						h.v3?.CurrentEditedBinding?.controller_action?.mouse?.restore,
				};
				const t = {
					type: z.N.k_EControllerBindingType_ControllerAction,
					controller_action: {
						action: 3,
						mouse: e,
					},
				};
				h.v3.SetEditedInputBinding(t);
				r();
			},
			onCancel: () => r(),
			className: (0, u.A)(x.MouseCapturePanel),
			autoFocus: true,
			onMoveRight: () => v(),
			onMoveLeft: () => B(),
			onButtonDown: (e) => {
				switch (e.detail.button) {
					case m.pR.BUMPER_LEFT:
						B();
						return true;
					case m.pR.BUMPER_RIGHT:
						v();
						return true;
					default:
						return false;
				}
			},
		},
		n.createElement(
			"div",
			{
				className: (0, u.A)(x.HintLabel),
			},
			" ",
			LocalizeReact(
				"#ControllerBinding_MousePositionModal_SelectMousePosition_Hint",
				n.createElement(q.W, {
					button: Q.g4.A,
				}),
				n.createElement(q.W, {
					button: Q.g4.B,
				}),
				n.createElement(q.W, {
					button: Q.g4.LeftBumper,
				}),
				n.createElement(q.W, {
					button: Q.g4.RightBumper,
				}),
			),
			" ",
		),
	);
	if (y >= 0) {
		const e = w[y];
		return n.createElement(
			"div",
			{
				className: (0, u.A)(x.MouseCapturePanel, !C && x.Opaque),
			},
			n.createElement(
				"div",
				{
					className: (0, u.A)(x.MouseCapturePanel, x.BackgroundScreenshot),
					style: {
						backgroundImage: "url( " + (0, X.fu)(e.strUrl) + ")",
					},
				},
				I,
			),
		);
	}
	return n.createElement(
		"div",
		{
			className: (0, u.A)(x.MouseCapturePanel, !C && x.Opaque),
		},
		I,
	);
}
var te = require("./70456.js");
var re = require("./12307.js");
var ne = require("./50350.js");
var ie = require("./31800.js");
var ae = require("./48289.js");
var se = require("./78057.js");
var oe = require("./96593.js");
var le = require("./22091.js");
var ce = require(/*webcrack:missing*/ "./37976.js");
var me = require("./70239.js");
var ue = require("./20414.js");
var de = require(/*webcrack:missing*/ "./44846.js");
var Ae = require("./10606.js");
var pe = require(/*webcrack:missing*/ "./26853.js");
var ge = require("./51076.js");
function he() {
	return n.createElement(
		"div",
		{
			className: te.SteamInputAPILogoContainer,
		},
		n.createElement(
			"div",
			{
				className: te.SteamInputAPILogo,
			},
			n.createElement(g.SteamInputAPISvg, null),
		),
		n.createElement(
			"div",
			{
				className: te.SteamInputAPILogoText,
			},
			" ",
			Localize("#SteamInputAPI_LogoText"),
		),
	);
}
const Ce = (0, s.PA)(function (e) {
	const {
		appid: t,
		currentSelectedConfig: r,
		configInfo: i,
		type: s,
		bShowGameTitle: o,
	} = e;
	const l = (0, Z.$2)();
	const m = t ?? i.appID;
	let A = h.v3.EditingConfigurationControllerIndex;
	(0, a.W6)();
	const p = n.useCallback(() => {
		h.v3.PreviewConfiguration(m, A, i.URL);
		_.oy.NavigateToLayoutPreview(m, l);
	}, [m, A, i.URL, l]);
	const C = se.H.GetAppDetails(m);
	const f = oe.tw.GetAppOverviewByAppID(m);
	let b = null;
	let y = null;
	const S = Localize("#" + le.Fd.GetControllerTypeString(i.nControllerType));
	let w =
		i?.Title.charAt(0) == "#" ? Localize(i?.Title, f?.display_name) : i?.Title;
	w = h.v3.FilterText(w);
	let B =
		i?.Description.charAt(0) == "#"
			? Localize(i?.Description, y, S)
			: i?.Description;
	B = h.v3.FilterText(B);
	let E = i?.bOfficial || i?.bRecommended;
	let M = false;
	let T = false;
	let R = (0, me.C6)(i?.publishedFileID);
	switch (s) {
		case h7.Autosave:
			b = w;
			y = Localize("#AppControllerConfiguration_SelectedConfigCustomized");
			break;
		case h7.Official:
			b = Localize(
				"#AppControllerConfiguration_OfficialConfig",
				f?.display_name,
				w,
			);
			y = C?.strDeveloperName;
			break;
		case h7.Personal:
			b = w;
			y = ae.O$.GetFriendState(ae.O$.currentUserSteamID).display_name;
			break;
		case h7.Workshop:
			b = w;
			y = ae.O$.GetFriendState(i.accountID).display_name;
			M = R?.user_vote_summary?.vote_for === true;
			T = true;
			break;
		case h7.Template:
			b = w;
			y = E
				? Localize("#AppControllerConfiguration_RecommendedTemplateConfig")
				: Localize("#AppControllerConfiguration_TemplateConfig");
			break;
		case h7.Search:
			b = Localize(
				"#AppControllerConfiguration_SearchResult",
				C?.strDisplayName,
				w,
			);
			y = E
				? Localize("#AppControllerConfiguration_RecommendedTemplateConfig")
				: Localize("#AppControllerConfiguration_TemplateConfig");
	}
	if (b == "$$$autosave") {
		b = Localize("#SettingsController_AutosaveName");
	}
	if (o === true) {
		const e =
			m == 0
				? Localize("#AppControllerConfiguration_TemplateConfig")
				: m?.toString();
		b = Localize(
			"#AppControllerConfiguration_SearchResult",
			f?.display_name ?? e,
			b,
		);
	}
	const k = () => {
		SteamClient.Input.DeletePersonalControllerConfiguration(i?.URL);
		h.v3.AddDeletedConfig(i?.URL);
		if (i.URL == r?.URL) {
			SteamClient.Input.ClearSelectedConfigForApp(m, A);
		}
	};
	const D = M
		? "#ControllerConfigurator_ChooseConfiguration_DownVote"
		: "#ControllerConfigurator_ChooseConfiguration_UpVote";
	const N =
		i.accountID == ae.O$.currentUserSteamID.GetAccountID() ||
		(s == h7.Template && i.publishedFileID != "0")
			? {
					onMenuButton: (e) => {
						let t = GetOwningWindowForEvent(e);
						(0, v.pg)(
							n.createElement(Ae.o0, {
								strTitle: Localize(
									"#AppControllerConfiguration_DeleteConfig_Title",
								),
								strDescription: Localize(
									"#AppControllerConfiguration_DeleteConfig_Desc",
									w,
								),
								strOKButtonText: Localize(
									"#AppControllerConfiguration_DeleteConfig_Confirm",
								),
								bDestructiveWarning: true,
								onOK: k,
							}),
							t,
							{
								strTitle: Localize(
									"#AppControllerConfiguration_OverwriteConfig_Title",
								),
							},
						);
					},
					onMenuActionDescription: Localize(
						"#ControllerConfigurator_ChooseConfiguration_Delete",
					),
				}
			: s == h7.Workshop
				? {
						onOptionsButton: () => {
							me.B6.VoteOnPublishedFile(
								i?.publishedFileID,
								M ? ue.bJ.Down : ue.bJ.Up,
							);
						},
						onOptionsActionDescription: Localize(D),
					}
				: {};
	const F = T ? R?.file?.vote_data?.votes_up : null;
	const G = y != null || F != null || i.playtime != null;
	const O = i.playtime && s == h7.Workshop;
	const P = i.timeUpdated && s == h7.Personal;
	const L = i.timeUpdated ? new Date(Number(i?.timeUpdated) * 1000) : undefined;
	const z = i.URL == r?.URL;
	const x = i?.publishedFileID ?? "0";
	const U = x != "0";
	const W =
		U && me.B6.GetDownloadingItems(de.rm)?.some((e) => e.publishedfileid == x);
	const V =
		U && me.B6.GetDownloadedItems(de.rm)?.some((e) => e.publishedfileid == x);
	const H = U && !V;
	let j;
	j =
		H && !W
			? () => {
					me.B6.Download(de.rm, i?.publishedFileID);
					Y(true);
				}
			: H && !V
				? null
				: p;
	let q = H && W ? null : Localize("#AppControllerConfiguration_Select");
	const [Q, Y] = n.useState(false);
	const K = me.B6.BConnectedToSteam();
	const X = H && !W && K;
	const J = i?.bUsesSIAPI;
	n.useEffect(() => {
		if (Q && V) {
			p();
			Y(false);
		}
	}, [Q, V, W, p]);
	if (h.v3.IsDeletedConfig(i?.URL)) {
		return null;
	} else {
		return n.createElement(
			c.Z,
			{
				className: (0, u.A)(
					te.ConfigurationButton,
					i.bRecommended && te.Recommended,
					z && te.Selected,
				),
				focusable: true,
				noFocusRing: true,
				onActivate: j,
				onOKButton: j,
				onOKActionDescription: q,
				onSecondaryActionDescription: X
					? Localize("#AppControllerConfiguration_Download")
					: null,
				onSecondaryButton: X
					? () => me.B6.Download(de.rm, i?.publishedFileID)
					: null,
				...N,
			},
			n.createElement(
				"div",
				{
					className: te.IconContainer,
				},
				n.createElement(g.ControllerType, {
					controllerType: i.nControllerType,
				}),
			),
			n.createElement(
				"div",
				{
					className: te.TextRows,
				},
				G &&
					n.createElement(
						"div",
						{
							className: (0, u.A)(te.TextRow, te.Header),
						},
						y &&
							n.createElement(
								"div",
								{
									className: te.Author,
								},
								y,
							),
						n.createElement("div", {
							className: te.Stretch,
						}),
						W &&
							n.createElement(
								"div",
								{
									className: te.InfoSection,
								},
								n.createElement(g.Spinner, null),
								n.createElement(
									"span",
									null,
									Localize("#AppControllerConfiguration_Downloading"),
								),
							),
						V &&
							n.createElement(
								"div",
								{
									className: te.InfoSection,
								},
								n.createElement(g.Checkmark, null),
								n.createElement(
									"span",
									null,
									Localize("#AppControllerConfiguration_Downloaded"),
								),
							),
						H &&
							!W &&
							n.createElement(
								"div",
								{
									className: te.InfoSection,
								},
								n.createElement(g.Download, null),
								n.createElement(
									"span",
									null,
									Localize("#AppControllerConfiguration_NotDownloaded"),
								),
							),
						F != null &&
							n.createElement(
								"div",
								{
									className: te.InfoSection,
								},
								n.createElement(g.ThumbsUp, {
									className: M ? te.ReviewIconThumbsUpColor : "",
								}),
								n.createElement("span", null, F),
							),
						O &&
							n.createElement(
								"div",
								{
									className: te.InfoSection,
								},
								n.createElement(g.Clock, null),
								n.createElement(
									"span",
									null,
									Localize(
										"#AppControllerConfiguration_ConfigPlaytime",
										i.playtime,
									),
								),
							),
						P &&
							n.createElement(
								"div",
								{
									className: te.InfoSection,
								},
								n.createElement(g.Edit, null),
								n.createElement(
									"span",
									null,
									Localize(
										"#AppControllerConfiguration_ConfigUpdated",
										L?.toDateString() ?? "",
									),
								),
							),
					),
				n.createElement(
					"div",
					{
						className: te.ConfigTitleRow,
					},
					n.createElement(
						"div",
						{
							className: (0, u.A)(te.TextRow, te.Title),
						},
						b,
					),
					J && n.createElement(he, null),
				),
				i.Description &&
					n.createElement(
						"div",
						{
							className: (0, u.A)(te.TextRow, te.Description),
						},
						B,
					),
			),
		);
	}
});
function _e(e) {
	const {
		title: t,
		description: r,
		appid: i,
		controllerIndex: a,
		currentSelectedConfig: s,
		type: l,
		configs: c,
	} = e;
	const m = (0, o.q3)(() =>
		c.filter(
			(e) =>
				e?.Title?.toLowerCase()?.includes(h.v3.SearchText.toLowerCase()) ||
				e?.Description?.toLowerCase()?.includes(
					h.v3.SearchText.toLowerCase(),
				) ||
				oe.tw
					.GetAppOverviewByAppID(e?.appID)
					?.display_name?.toLowerCase()
					.includes(h.v3.SearchText.toLowerCase()),
		),
	);
	return n.createElement(
		"div",
		null,
		n.createElement(Se, null),
		n.createElement(fe, {
			title: t,
			description: r,
			controllerIndex: a,
			type: l,
			currentSelectedConfig: s,
			configs: m,
			bShowGameTitle: true,
		}),
	);
}
function fe(e) {
	const {
		title: t,
		description: r,
		appid: i,
		controllerIndex: a,
		currentSelectedConfig: s,
		type: o,
		configs: l,
		bShowGameTitle: c,
	} = e;
	return n.createElement(
		"div",
		{
			className: te.PageContainer,
		},
		n.createElement(
			"div",
			{
				className: te.OuterColumn,
			},
			n.createElement("h1", null, t),
			n.createElement(
				"p",
				null,
				" ",
				l.length
					? r
					: Localize(
							"#ControllerConfigurator_ChooseConfiguration_EmptyDescription",
						),
			),
			l.map((e, t) =>
				n.createElement(Ce, {
					key: t,
					appid: i,
					configInfo: e,
					type: o,
					currentSelectedConfig: s,
					bShowGameTitle: c,
				}),
			),
		),
	);
}
const be = (0, s.PA)(function (e) {
	n.useEffect(() => {
		h.v3.QueryConfigsForApp(e.appid, e.controllerIndex);
	}, [e.appid, e.controllerIndex]);
	if (h.v3.BConfigurationQueryInFlight) {
		return n.createElement(
			ne.Sw,
			{
				background: "dialog",
				scrollable: false,
				dialogContentPadding: "none",
				autoFocus: true,
			},
			n.createElement(pe.t, {
				size: "medium",
				position: "center",
			}),
		);
	} else {
		return n.createElement(ye, {
			...e,
		});
	}
});
const ye = (0, s.PA)(function (e) {
	const {
		appid: t,
		controllerIndex: r,
		currentSelectedConfig: i,
		strDefaultTab: a,
	} = e;
	(0, ie.Wh)(
		Localize("#ControllerConfigurator_ChooseConfiguration_Title"),
		"ControllerConfiguratorChooseConfiguration",
	);
	const s = h.v3.BFilterOtherControllerTypes;
	const o = me.B6.BConnectedToSteam();
	const l = le.Fd.Get().GetController(r)?.eControllerType;
	const c = h.v3.GetOfficialConfigsForApp(t, l);
	const m = h.v3
		.GetTemplateConfigsForApp(t, l)
		?.filter((e) => e.publishedFileID == "0")
		?.sort((e, t) => (t?.bRecommended ? 1 : 0) - (e?.bRecommended ? 1 : 0));
	const u = h.v3
		.GetTemplateConfigsForApp(t, l)
		?.filter((e) => e.publishedFileID != "0");
	const A = h.v3.GetUserConfigsForApp(
		t,
		l,
		ae.O$.currentUserSteamID.GetAccountID(),
	);
	let p = h.v3.GetWorkshopConfigsForApp(t, l);
	if (!o) {
		p = p.filter(
			(e) =>
				me.B6.GetDownloadedItems(de.rm)?.findIndex(
					(t) => e.publishedFileID == t.publishedfileid,
				) >= 0,
		);
	}
	const C = p
		.filter((e) => !e.bOfficial)
		.sort((e, t) =>
			ce.A.fromString(t.playtime, false)
				.subtract(ce.A.fromString(e.playtime, false))
				.toNumber(),
		);
	const _ = m.filter((e) => e.bRecommended);
	const f = c?.length ?? 0;
	const b = _?.length ?? 0;
	let y = n.useMemo(() => {
		let e = [];
		if (c?.length || _?.length) {
			e.push({
				id: "Official",
				title: "#ControllerConfigurator_ChooseConfiguration_RecommendedSection",
				icon: n.createElement(g.Star, null),
				content: n.createElement(
					n.Fragment,
					null,
					f > 0 &&
						n.createElement(fe, {
							title: Localize(
								"#ControllerConfigurator_ChooseConfiguration_Official",
							),
							description: Localize(
								"#ControllerConfigurator_ChooseConfiguration_Official_Description",
							),
							type: h7.Official,
							configs: c,
							appid: t,
							controllerIndex: r,
							currentSelectedConfig: i,
						}),
					f == 0 &&
						b > 0 &&
						n.createElement(fe, {
							title: Localize(
								"#ControllerConfigurator_ChooseConfiguration_Recommended",
							),
							description: Localize(
								"#ControllerConfigurator_ChooseConfiguration_Recommended_Description",
							),
							type: h7.Template,
							configs: _,
							appid: t,
							controllerIndex: r,
							currentSelectedConfig: i,
						}),
				),
			});
		}
		if (A?.length) {
			e.push({
				id: "User",
				title: "#ControllerConfigurator_ChooseConfiguration_User",
				icon: n.createElement(g.User, null),
				content: n.createElement(fe, {
					title: Localize("#ControllerConfigurator_ChooseConfiguration_User"),
					type: h7.Personal,
					configs: A,
					appid: t,
					controllerIndex: r,
					currentSelectedConfig: i,
				}),
			});
		}
		e.push(
			{
				id: "Templates",
				title: "#ControllerConfigurator_ChooseConfiguration_Template",
				icon: n.createElement(g.ControllerType, {
					controllerType: l,
				}),
				content: n.createElement(
					n.Fragment,
					null,
					n.createElement(fe, {
						title: Localize(
							"#ControllerConfigurator_ChooseConfiguration_Template",
						),
						description: Localize(
							"#ControllerConfigurator_ChooseConfiguration_Template_Description",
						),
						type: h7.Template,
						configs: m,
						appid: t,
						controllerIndex: r,
						currentSelectedConfig: i,
					}),
					u.length > 0 &&
						n.createElement(fe, {
							title: Localize(
								"#ControllerConfigurator_ChooseConfiguration_UserTemplate",
							),
							description: Localize(
								"#ControllerConfigurator_ChooseConfiguration_UserTemplate_Description",
							),
							type: h7.Template,
							configs: u,
							appid: t,
							controllerIndex: r,
							currentSelectedConfig: i,
						}),
				),
			},
			{
				id: "Community",
				title: "#ControllerConfigurator_ChooseConfiguration_Community",
				icon: n.createElement(g.SteamLogo, null),
				content: n.createElement(fe, {
					title: Localize(
						"#ControllerConfigurator_ChooseConfiguration_Community",
					),
					type: h7.Workshop,
					configs: C,
					appid: t,
					controllerIndex: r,
					currentSelectedConfig: i,
				}),
			},
			{
				id: "Search",
				title: "#ControllerConfigurator_ChooseConfiguration_Search",
				icon: n.createElement(g.Search, null),
				content: n.createElement(_e, {
					title: Localize(
						"#ControllerConfigurator_ChooseConfiguration_SearchResults",
					),
					type: h7.Workshop,
					configs: h.v3.GetAllConfigs(),
					appid: t,
					controllerIndex: r,
					currentSelectedConfig: i,
				}),
			},
		);
		return e;
	}, [b, f, t, r, l, m, c, C, u, A, i, _]);
	const S = n.useCallback(() => {
		h.v3.SetFilterOtherControllerTypes(!s);
		SteamClient.Input.QueryControllerConfigsForApp(t, r, !s);
	}, [t, r, s]);
	const [w, B] = (0, ge.SP)(
		a ??
			(c?.length || _?.length ? "Official" : A.length ? "User" : "Templates"),
	);
	const v = s
		? {
				onSecondaryButton: S,
				onSecondaryActionDescription: Localize(
					"#ControllerConfigurator_ChooseConfiguration_ShowAllConfigs",
				),
			}
		: {
				onSecondaryButton: S,
				onSecondaryActionDescription: Localize(
					"#ControllerConfigurator_ChooseConfiguration_ShowCompatibleConfigs",
				),
			};
	return n.createElement(
		ne.Sw,
		{
			background: "dialog",
			scrollable: false,
			dialogContentPadding: "none",
			...v,
			autoFocus: true,
		},
		n.createElement(re.xC, {
			tabs: y,
			activeTab: w,
			autoFocusContents: false,
			onShowTab: B,
			cancelSkipTabHeader: true,
		}),
	);
});
function Se(e) {
	const t = (0, o.q3)(() => h.v3.SearchText);
	const r = t.length > 0;
	const i = n.useCallback(() => "VKClose", []);
	return n.createElement(
		c.Z,
		{
			className: te.SearchBoxContainer,
			onOptionsButton: r ? () => h.v3.SetSearchText("") : undefined,
			onOptionsActionDescription: r ? Localize("#Clear") : undefined,
		},
		n.createElement(l.pd, {
			type: "search",
			noFocusRing: true,
			focusable: true,
			preferredFocus: true,
			value: t,
			onChange: (e) => h.v3.SetSearchText(e.target.value),
			onEnterKeyPress: i,
			onKeyboardNavOut: i,
			strEnterKeyLabel: Localize("#SearchEnterKeyLabel"),
			spellCheck: false,
			placeholder: Localize(
				"#ControllerConfigurator_ChooseConfiguration_Search",
			),
		}),
	);
}
var we = require("./84914.js");
var Be = require("./52192.js");
var ve = require("./81540.js");
const Ie = (0, s.PA)(function (e) {
	const { appid: t, controllerIndex: r, onRender: i } = e;
	const a = h.v3.EditingConfiguration?.controller_type;
	const s = h.v3.ActionSet;
	const o = s?.source_bindings?.find(
		(e) => e.active_group?.mode == 16,
	)?.active_group;
	const m = s?.source_bindings?.find((e) => e.key == 4)?.active_group;
	const [u, p] = n.useState(le.Fd.Get().GetController(r));
	n.useEffect(() => {
		p(le.Fd.Get().GetController(r));
	}, [r]);
	const g = o?.inputs
		?.filter(
			(e) =>
				(e.key == 55 || e.key == 57 || e.key == 79) &&
				(0, Be.SG)(5, e.key) &&
				(0, Be.nQ)(a, e.key) &&
				(0, Be.hq)(a, 5, e.key) &&
				!!u &&
				(0, Be.Uz)(u.unCapabilities, e.key),
		)
		.sort((e, t) => ((0, Be.S1)(e.key) > (0, Be.S1)(t.key) ? 1 : -1));
	const C = o?.inputs
		?.filter(
			(e) =>
				(e.key == 56 || e.key == 58 || e.key == 80) &&
				(0, Be.SG)(5, e.key) &&
				(0, Be.nQ)(a, e.key) &&
				(0, Be.hq)(a, 5, e.key) &&
				!!u &&
				(0, Be.Uz)(u.unCapabilities, e.key),
		)
		.sort((e, t) => ((0, Be.S1)(e.key) > (0, Be.S1)(t.key) ? 1 : -1));
	let _ = false;
	g?.forEach((e) => {
		e.activators?.forEach((e) => {
			if (e.bindings?.length >= 1) {
				_ = true;
			}
		});
	});
	if (!_) {
		C?.forEach((e) => {
			e.activators?.forEach((e) => {
				if (e.bindings?.length >= 1) {
					_ = true;
				}
			});
		});
	}
	const f = n.useCallback(
		(e) => {
			const r = (e, r, n, i) => {
				const a = n?.inputs.find((e) => e.key == i);
				if (a?.disabled_activators?.length) {
					a?.disabled_activators.forEach((e, r) => {
						const n = {
							action_set_key: h.v3.BaseActionSet.key,
							action_set_layer_key: h.v3.LayerActionSet?.key,
							source_binding_key: 5,
							input_key: i,
							activator_index: r,
							enabled: true,
						};
						h.v3.SetControllerInputActivatorEnabled(t, n);
					});
					return;
				}
				const s = e?.inputs?.find((e) => e.key == r);
				s?.activators?.forEach((e, r) => {
					(0, S.M0)(
						t,
						5,
						a,
						h.v3.BaseActionSet,
						h.v3.LayerActionSet,
						r,
						undefined,
						n.modeid,
						n.mode_shift,
					);
					e?.bindings?.forEach((e, n) => {
						const a = {
							action_set_key: h.v3.BaseActionSet.key,
							action_set_layer_key: h.v3.LayerActionSet?.key,
							source_binding_key: 5,
							input_key: i,
							activator_index: r,
							binding_index: n,
							new_binding: e,
						};
						h.v3.SetControllerInputBinding(t, a);
					});
				});
			};
			if (e) {
				r(m, 12, o, 56);
				r(m, 11, o, 55);
				if ((0, Be.nQ)(a, 57)) {
					r(m, 10, o, 58);
					r(m, 9, o, 57);
				}
			} else {
				g?.forEach((e) => {
					e.activators?.forEach((r, n) => {
						(0, S.zB)(
							t,
							5,
							e,
							h.v3.BaseActionSet,
							h.v3.LayerActionSet,
							n,
							false,
							false,
						);
					});
				});
				C?.forEach((e) => {
					e.activators?.forEach((r, n) => {
						(0, S.zB)(
							t,
							5,
							e,
							h.v3.BaseActionSet,
							h.v3.LayerActionSet,
							n,
							false,
							false,
						);
					});
				});
				(0, S.es)(t);
			}
		},
		[m, t, a, 5, o, g, C],
	);
	const b =
		a == 2 || a == 4
			? "#ControllerConfigurationQuickSettings_EnableGrips"
			: "#ControllerConfigurationQuickSettings_EnableBackButtons";
	const y = n.createElement(l.RF, {
		label: Localize(b),
		checked: _,
		onChange: f,
	});
	const w = _
		? g.map((e, t) => {
				const r =
					g.filter((t) => t.key == e.key).length > 1 ||
					e?.activators?.length > 1;
				return n.createElement(S.aK, {
					key: t,
					baseActionSet: h.v3.BaseActionSet,
					layerActionSet: h.v3.LayerActionSet,
					eControllerSource: 5,
					input: e,
					eControllerMode: 16,
					childrenContainerWidth: r ? "min" : "max",
					bottomSeparator: "none",
					minimalPresentation: true,
					modeid: o.modeid,
				});
			})
		: [];
	const v = _
		? C.map((e, t) => {
				const r =
					C.filter((t) => t.key == e.key).length > 1 ||
					e?.activators?.length > 1;
				return n.createElement(S.aK, {
					key: t,
					baseActionSet: h.v3.BaseActionSet,
					layerActionSet: h.v3.LayerActionSet,
					eControllerSource: 5,
					input: e,
					eControllerMode: 16,
					childrenContainerWidth: r ? "min" : "fixed",
					bottomSeparator: "none",
					modeid: o.modeid,
					labelAlignment: "right",
					minimalPresentation: true,
				});
			})
		: [];
	const I = [];
	let E = 0;
	const M = (0, Be.sn)(a, 10);
	const T = M && s?.source_bindings?.find((e) => e.key == 10)?.active_group;
	const R = (0, Be.sn)(a, 2);
	const k = R && s?.source_bindings?.find((e) => e.key == 2)?.active_group;
	const D = R && s?.source_bindings?.find((e) => e.key == 1)?.active_group;
	const N =
		(0, Be.sn)(a, 3) &&
		s?.source_bindings?.find((e) => e.key == 3)?.active_group;
	const F = (0, Be.sn)(a, 12);
	const O = F && s?.source_bindings?.find((e) => e.key == 12)?.active_group;
	if (M) {
		I.push(
			n.createElement(S.Zm, {
				key: E++,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 10,
				group: T,
				appid: t,
			}),
		);
	}
	const P = T?.mode == 4 ? 140 : 30;
	if (T && T?.mode && (0, Be.og)(a, T.mode, 10, P)) {
		I.push(
			n.createElement(G.Hx, {
				key: E++,
				eControllerType: a,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 10,
				group: T,
				mapKey: P,
				localizationOverride: Localize(
					"#ControllerConfigurationQuickSettings_GyroSensitivity",
				),
			}),
		);
		if (T && T?.mode && T?.mode != 4 && (0, Be.og)(a, T.mode, 10, 140)) {
			I.push(
				n.createElement(G.Hx, {
					key: E++,
					eControllerType: a,
					baseActionSet: h.v3.BaseActionSet,
					layerActionSet: h.v3.LayerActionSet,
					eControllerSource: 10,
					group: T,
					mapKey: 140,
					localizationOverride: Localize(
						"#ControllerConfigurationQuickSettings_GyroNaturalSensitivity",
					),
				}),
			);
		}
	}
	if (
		(T?.mode != 25 && T?.mode != 27 && (0, Be.og)(a, T?.mode, 10, 137)) ||
		(0, Be.og)(a, O?.mode, 12, 137) ||
		(0, Be.og)(a, N?.mode, 3, 137) ||
		(0, Be.og)(a, k?.mode, 2, 137) ||
		(0, Be.og)(a, D?.mode, 1, 137)
	) {
		const e =
			T?.mode == 22
				? T
				: O?.mode == 17
					? O
					: N?.mode == 17
						? N
						: k?.mode == 17
							? k
							: D?.mode == 17
								? D
								: null;
		const t =
			T?.mode == 22
				? 10
				: O?.mode == 17
					? 12
					: N?.mode == 17
						? 3
						: k?.mode == 17
							? 2
							: D?.mode == 17
								? 1
								: 0;
		if (e && t != 0) {
			I.push(
				n.createElement(G.Hx, {
					key: E++,
					eControllerType: a,
					baseActionSet: h.v3.BaseActionSet,
					layerActionSet: h.v3.LayerActionSet,
					eControllerSource: t,
					group: e,
					mapKey: 137,
					localizationOverride: Localize(
						"#ControllerConfigurationQuickSettings_PixelsPerRevolution",
					),
				}),
			);
		}
	}
	if (T && T?.mode && (0, Be.og)(a, T.mode, 10, 42)) {
		I.push(
			n.createElement(G.Hx, {
				key: E++,
				eControllerType: a,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 10,
				group: T,
				mapKey: 42,
				localizationOverride: Localize(
					"#ControllerConfigurationQuickSettings_GyroInvert",
				),
			}),
		);
	}
	if (R) {
		I.push(
			n.createElement(S.Zm, {
				key: E++,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 2,
				group: k,
				appid: t,
			}),
		);
	}
	if (k && k?.mode && (0, Be.og)(a, k.mode, 2, 30)) {
		I.push(
			n.createElement(G.Hx, {
				key: E++,
				eControllerType: a,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 2,
				group: k,
				mapKey: 30,
				localizationOverride: Localize(
					"#ControllerConfigurationQuickSettings_RPadSensitivity",
				),
			}),
		);
	}
	if (k && k?.mode && (0, Be.og)(a, k.mode, 2, 42)) {
		I.push(
			n.createElement(G.Hx, {
				key: E++,
				eControllerType: a,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 2,
				group: k,
				mapKey: 42,
				localizationOverride: Localize(
					"#ControllerConfigurationQuickSettings_RPadInvert",
				),
			}),
		);
	}
	if (F && O?.mode && (0, Be.og)(a, O.mode, 12, 30)) {
		I.push(
			n.createElement(G.Hx, {
				key: E++,
				eControllerType: a,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 12,
				group: O,
				mapKey: 30,
				localizationOverride: Localize(
					"#ControllerConfigurationQuickSettings_RStickSensitivity",
				),
			}),
		);
	}
	if (F && O?.mode && (0, Be.og)(a, O.mode, 12, 42)) {
		I.push(
			n.createElement(G.Hx, {
				key: E++,
				eControllerType: a,
				baseActionSet: h.v3.BaseActionSet,
				layerActionSet: h.v3.LayerActionSet,
				eControllerSource: 12,
				group: O,
				mapKey: 42,
				localizationOverride: Localize(
					"#ControllerConfigurationQuickSettings_RStickInvert",
				),
			}),
		);
	}
	const L = (e) => {
		p(e);
		le.Fd.Get().CommitControllerSettings(e);
	};
	if (u && T && T?.mode && (0, Be.og)(a, T.mode, 10, 65)) {
		I.push(
			n.createElement(ve.mZ, {
				key: E++,
				controllerSettings: u,
				setControllerSettings: L,
			}),
		);
	}
	const [z, x] = n.useState(false);
	const U = h.v3.EditingConfiguration;
	const W = (0, Be.P4)(U);
	const V = (0, Be.nQ)(a, 55);
	const H = V && (w?.length > 0 || v?.length > 0);
	const j = n.useRef(undefined);
	n.useEffect(() => {
		const e = j.current?.childElementCount > 0;
		if (i) {
			i(e || W || V);
		}
	});
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"div",
			{
				className: A.QuickSettingsHeader,
			},
			W
				? Localize(
						"#ControllerConfigurationQuickSettings_SectionTitle_MultipleActionSets",
					)
				: Localize("#ControllerConfigurationQuickSettings_SectionTitle"),
		),
		n.createElement(we.dY, {
			showGlyphs: z,
			bleedGlpyhs: true,
		}),
		n.createElement(
			c.Z,
			{
				onButtonDown: we.N,
				onFocusWithin: x,
				noFocusRing: true,
				retainFocus: true,
			},
			V && y,
			H &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						c.Z,
						{
							className: A.QuickSettingsGripGridContainer,
							"flow-children": "grid",
							navEntryPreferPosition: B.iU.MAINTAIN_X,
						},
						n.createElement(
							c.Z,
							{
								"flow-children": "column",
								navEntryPreferPosition: B.iU.MAINTAIN_Y,
							},
							V && w,
						),
						n.createElement(
							c.Z,
							{
								"flow-children": "column",
								navEntryPreferPosition: B.iU.MAINTAIN_Y,
							},
							V && v,
						),
					),
					n.createElement(l.Nu, null),
				),
			n.createElement(
				"div",
				{
					className: A.QuickSettingsFieldsContainer,
					ref: j,
				},
				I,
			),
		),
	);
});
var Ee = require(/*webcrack:missing*/ "./85243.js");
var Me = require("./18057.js");
var Te = require("./22047.js");
var Re = require("./13200.js");
var ke = require("./19037.js");
var De = require("./21105.js");
var Ne = require(/*webcrack:missing*/ "./10975.js");
var Fe = require("./55489.js");
var Ge = require("./9482.js");
var Oe = require("./33572.js");
var Pe = require("./77347.js");
var Le = require("./89748.js");
function ze() {
	const e = (0, a.zy)();
	return [e.state?.source ?? undefined, e.state?.input ?? undefined];
}
function xe(e) {
	const [t, r] = ze();
	const i = n.useCallback(
		(e) =>
			e
				?.filter((e) => !y.Dd[e.key].analog && !y.Dd[e.key].dpad)
				.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? 1 : -1)),
		[],
	);
	return n.createElement(S.ih, {
		sourcesFilter: i,
		selectedSource: t,
		selectedInput: r,
		appid: e.appid,
	});
}
function Ue(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) => e?.filter((e) => y.Dd[e.key].dpad)?.sort((e) => e.key),
		[],
	);
	return n.createElement(S.ih, {
		sourcesFilter: r,
		rgBackupSources: [13],
		selectedSource: t,
		appid: e.appid,
	});
}
function We(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) =>
			e
				?.filter((e) => y.Dd[e.key].stick)
				?.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? -1 : 1)),
		[],
	);
	return n.createElement(S.ih, {
		sourcesFilter: r,
		rgBackupSources: [3, 12, 18, 17],
		selectedSource: t,
		appid: e.appid,
	});
}
function Ve(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) =>
			e
				?.filter((e) => y.Dd[e.key].trigger)
				?.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? -1 : 1)),
		[],
	);
	return n.createElement(S.ih, {
		sourcesFilter: r,
		selectedSource: t,
		appid: e.appid,
	});
}
function He(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) =>
			e
				?.filter((e) => y.Dd[e.key].trackpad)
				?.sort((e, t) => (y.Dd[e.key].id > y.Dd[t.key].id ? -1 : 1)),
		[],
	);
	return n.createElement(S.ih, {
		sourcesFilter: r,
		rgBackupSources: [1, 2, 11],
		selectedSource: t,
		appid: e.appid,
	});
}
function je(e) {
	const [t] = ze();
	const r = n.useCallback(
		(e) => e?.filter((e) => y.Dd[e.key].gyro)?.sort((e) => e.key),
		[],
	);
	const i =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const [a, s] = n.useState(le.Fd.Get().GetController(i));
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(S.ih, {
			sourcesFilter: r,
			rgBackupSources: [10],
			selectedSource: t,
			appid: e.appid,
		}),
		n.createElement(S.oW, {
			label: Localize("#Settings_ControllerCalibration_CalibrateIMU"),
		}),
		n.createElement(ve.mZ, {
			controllerSettings: a,
			setControllerSettings: (e) => {
				s(e);
				le.Fd.Get().CommitControllerSettings(e);
			},
		}),
	);
}
var qe;
export var h7;
function Ze(e) {
	if (e) {
		if (e.startsWith("template")) {
			return qe.Template;
		} else if (e.startsWith("autosave")) {
			return qe.Autosave;
		} else if (e.startsWith("workshop")) {
			return qe.Workshop;
		} else if (e.startsWith("game")) {
			return qe.Game;
		} else {
			return qe.Unknown;
		}
	} else {
		return qe.Unknown;
	}
}
export function QP(e) {
	if (!e) {
		return {
			eConfigType: h7.Unknown,
			bModified: false,
		};
	}
	if (!e.bConfigurationEnabled) {
		return {
			eConfigType: h7.OptedOut,
			bModified: false,
		};
	}
	if (e.bOfficial) {
		return {
			eConfigType: h7.Official,
			bModified: false,
		};
	}
	switch (Ze(e.URL)) {
		case qe.Unknown:
			return {
				eConfigType: h7.Unknown,
				bModified: false,
			};
		case qe.Autosave:
			if (e.bProgenitorOfficial) {
				return {
					eConfigType: h7.Official,
					bModified: true,
				};
			}
			switch (Ze(e.ProgenitorURL)) {
				case qe.Unknown:
				case qe.Autosave:
				default:
					return {
						eConfigType: h7.Unknown,
						bModified: true,
					};
				case qe.Workshop:
					if (e.accountID == ae.O$.currentUserSteamID?.GetAccountID()) {
						return {
							eConfigType: h7.Personal,
							bModified: true,
						};
					} else {
						return {
							eConfigType: h7.Workshop,
							bModified: true,
						};
					}
				case qe.Template:
					return {
						eConfigType: h7.Template,
						bModified: true,
					};
				case qe.Game:
					return {
						eConfigType: h7.Official,
						bModified: true,
					};
			}
		case qe.Workshop:
			if (e.accountID == ae.O$.currentUserSteamID?.GetAccountID()) {
				return {
					eConfigType: h7.Personal,
					bModified: false,
				};
			} else {
				return {
					eConfigType: h7.Workshop,
					bModified: false,
				};
			}
		case qe.Template:
			return {
				eConfigType: h7.Template,
				bModified: false,
			};
		case qe.Game:
			return {
				eConfigType: h7.Official,
				bModified: false,
			};
	}
}
export function hY(e) {
	return (
		!!e && (Ze(e.URL) == qe.Template || Ze(e.ProgenitorURL) == qe.Template)
	);
}
export function jT(e) {
	return (
		!!e &&
		((e.bRecommended && !e.bOfficial) ||
			(e.bProgenitorRecommended && !e.bProgenitorOfficial))
	);
}
export function W4(e) {
	const {
		onClick: t,
		bGamepadSupport: r,
		configType: i,
		bDisabled: a,
		iconType: s,
		creator: o,
		description: c,
		label: m,
		bInfoOnly: p,
	} = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			l.$n,
			{
				className: (0, u.A)(
					A.CurrentConfigurationButton,
					!r && A.CommunityConfigCalloutContainer,
				),
				onClick: t,
				onOKActionDescription: Localize(
					"#ControllerConfigurator_ChooseConfiguration_Title",
				),
				focusable: !a && i != h7.OptedOut,
			},
			n.createElement(l.aZ, {
				icon: n.createElement(g.ControllerType, {
					controllerType: s,
					className: A.ControllerIcon,
				}),
				upperDescription: o,
				upperDescriptionVisibility: "always",
				title: m,
				description: p ? null : Localize(c),
				descriptionVisibility: "when-expanded",
				strTitleClassNames: (0, u.A)(
					!r && A.CommunityConfigCalloutPresent,
					a && A.DisabledOverride,
				),
			}),
			i != h7.OptedOut &&
				n.createElement(g.Carat, {
					direction: "right",
					className: A.Carat,
				}),
		),
	);
}
(function (e) {
	e[(e.Unknown = 0)] = "Unknown";
	e[(e.Autosave = 1)] = "Autosave";
	e[(e.Workshop = 2)] = "Workshop";
	e[(e.Template = 3)] = "Template";
	e[(e.Game = 4)] = "Game";
})((qe ||= {}));
(function (e) {
	e[(e.Unknown = 0)] = "Unknown";
	e[(e.Autosave = 1)] = "Autosave";
	e[(e.Official = 2)] = "Official";
	e[(e.Personal = 3)] = "Personal";
	e[(e.Workshop = 4)] = "Workshop";
	e[(e.Template = 5)] = "Template";
	e[(e.Search = 6)] = "Search";
	e[(e.OptedOut = 7)] = "OptedOut";
})((h7 ||= {}));
const $e = (0, s.PA)((e) => {
	const { config: t, type: r, bInfoOnly: i, onClick: a } = e;
	const s = h.v3.StableAppId;
	let o = null;
	let l = null;
	const m = se.H.GetAppDetails(s);
	let u = (0, Be.yZ)(t);
	if (u == "$$$autosave") {
		u = Localize("#SettingsController_AutosaveName");
	}
	const p =
		t?.bOfficial ||
		t?.bRecommended ||
		t?.bProgenitorOfficial ||
		t?.bProgenitorRecommended;
	let g = t?.nControllerType;
	switch (r) {
		case h7.Unknown:
			o = u;
			break;
		case h7.Autosave:
			o = u;
			l = Localize("#AppControllerConfiguration_SelectedConfigCustomized");
			break;
		case h7.Official:
			o = u;
			l = m?.strDeveloperName;
			break;
		case h7.Personal:
			o = u;
			l = ae.O$.GetFriendState(ae.O$.currentUserSteamID).display_name;
			break;
		case h7.Workshop:
			o = u;
			l = ae.O$.GetFriendState(t.accountID).display_name;
			break;
		case h7.Template:
			o = u;
			l = p
				? Localize("#AppControllerConfiguration_RecommendedTemplateConfigUsing")
				: Localize("#AppControllerConfiguration_TemplateConfigUsing");
			break;
		case h7.OptedOut:
			o = Localize("#AppControllerConfiguration_SelectedConfigBuiltInGamepad");
			l = Localize("#AppControllerConfiguration_SelectedConfigBuiltIn");
			const e =
				h.v3.EditingConfigurationControllerIndex ??
				_.oy.MostRecentlyActiveControllerIndex;
			const r = le.Fd.Get().GetControllers() ?? [];
			const n = r.findIndex((t) => t.nControllerIndex == e);
			g = r[n]?.eControllerType;
	}
	if (p) {
		o = Localize(
			"#AppControllerConfiguration_OfficialConfig",
			m?.strDisplayName,
			o,
		);
	}
	const C = (0, Be.M8)(s);
	const f = n.createElement(W4, {
		onClick: a,
		description: t?.Description,
		bInfoOnly: i,
		bGamepadSupport: C,
		creator: l,
		label: o,
		configType: r,
		iconType: g,
	});
	if (C) {
		return n.createElement("div", null, f);
	} else {
		return n.createElement(
			c.Z,
			{
				onOKButton: a,
			},
			f,
			i &&
				!C &&
				n.createElement(
					c.Z,
					{
						focusable: false,
						onActivate: a,
						className: A.CommunityConfigsCallout,
					},
					n.createElement(
						"div",
						{
							className: A.Description,
						},
						n.createElement(
							"div",
							{
								className: A.SubTitle,
							},
							LocalizeInlineReactWithFallback(
								"#AppControllerConfiguration_FindCommunityConfig_Desc",
								n.createElement("span", {
									className: A.ConfigurationHeaderBold,
								}),
							),
						),
					),
				),
		);
	}
});
const et = (0, s.PA)((e) => {
	const { currentConfig: t, onClick: r } = e;
	return (0, o.q3)(() => {
		let { eConfigType: e, bModified: i } = QP(t);
		if (i) {
			e = h7.Personal;
		}
		if (e == h7.OptedOut) {
			return n.createElement($e, {
				config: t,
				type: h7.OptedOut,
				bInfoOnly: true,
				onClick: null,
			});
		} else {
			return n.createElement($e, {
				config: t,
				type: e,
				bInfoOnly: true,
				onClick: r,
			});
		}
	});
});
function tt(e, t) {
	const r = _.oy.IsAnyAppRunning();
	const n = le.Fd.Get().GetControllersSorted(r);
	const i =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const a = n.findIndex((e) => e.nControllerIndex == i) + t;
	if (a >= 0 && a < n.length) {
		const t = n[a].nControllerIndex;
		h.v3.SaveEditingConfiguration(e);
		h.v3.EnsureEditingConfiguration(e, t);
		Ne.eZ.PlayNavSound(Ne.PN.ChangeTabs);
	} else {
		Ne.eZ.PlayNavSound(Ne.PN.FailedNav);
	}
}
function rt(e) {
	const { appid: t, autoFocus: r, ...i } = e;
	const a = n.useCallback(
		(e) => {
			h.v3.SaveEditingConfiguration(t);
			h.v3.EnsureEditingConfiguration(t, e);
		},
		[t],
	);
	const s = (le.Fd.Get().GetControllers() ?? []).length >= 2;
	return n.createElement(
		c.Z,
		{
			className: (0, u.A)(A.ControllerSelectionContainer, s && A.Visible),
			autoFocus: r,
		},
		s &&
			n.createElement(bV, {
				...i,
				onControllerSelected: a,
			}),
	);
}
export function bV(e) {
	const {
		selectedControllerIndex: t,
		onControllerSelected: r,
		showGlyphs: i,
		wrapAround: a,
		showUnboundControllers: s,
	} = e;
	const o = (0, _.Un)();
	const l = (0, le.wy)(o);
	const u = (0, le.Sz)();
	const A = (0, W.R7)();
	let p = 0;
	let h = l.map((e, r) => {
		const i = e.eControllerType == 4;
		if (e.nControllerIndex == t) {
			p = r;
		}
		const a = e.strName.startsWith("#")
			? i
				? Localize("#SteamDeckName")
				: Localize(e.strName)
			: e.strName;
		return {
			id: "" + e.nControllerIndex,
			title: a,
			icon: n.createElement(g.ControllerType, {
				controllerType: e.eControllerType,
			}),
		};
	});
	if (s) {
		h = h.concat(
			u.map((e, r) => {
				if (r == (0, le.q_)(t)) {
					p = l.length + r;
				}
				return {
					id: "" + (0, le.Id)(r),
					title: e.strName,
					icon: n.createElement(g.ControllerType, {
						controllerType: 30,
					}),
				};
			}),
		);
	}
	const C = n.useRef(undefined);
	const f = n.useCallback(
		(e) => {
			const t = Number.parseInt(e);
			if (r) {
				r(t);
			}
		},
		[r],
	);
	const b = n.useCallback(
		(e) => !!o && e.detail.button == m.pR.SELECT && ((0, Ge.b)(A), true),
		[o, A],
	);
	return n.createElement(
		c.Z,
		{
			onButtonDown: b,
			actionDescriptionMap: o && {
				[m.pR.SELECT]: Localize(
					"#ControllerConfigurator_ActionButtonLabel_ChangeOrder",
				),
			},
		},
		n.createElement(re.JZ, {
			tabs: h,
			activeTab: "" + t,
			onShowTab: f,
			showGlyphs: i,
			navRef: C,
			wrapAround: a,
		}),
	);
}
export function FD() {
	const e = h.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const t = h.v3.EditingConfiguration?.sets[e];
	const r = (0, y.U$)(t, 2);
	return r?.length > 0;
}
function at(e) {
	let [t, r] = n.useState(e);
	return [t, (e) => r(e.target.value)];
}
const st = (0, s.PA)((e) => {
	const {
		appid: t,
		controllerIndex: r,
		currentConfig: i,
		typeOverride: a,
		...s
	} = e;
	const c =
		i.bOfficial ||
		i.accountID != ae.O$.currentUserSteamID.GetAccountID() ||
		i.Title?.charAt(0) == "#";
	const m = se.H.GetAppDetails(i?.appID);
	let [u, p] = at(c ? "" : (0, Be.yZ)(i));
	let [g, _] = at((0, Be.ut)(i, m?.strDisplayName));
	let [f, b] = n.useState(a || 1);
	const y = (0, Be.yZ)(i);
	const S = u.trim().length != 0 || u == y;
	let w = n.useRef(undefined);
	let B = n.useRef(undefined);
	h.v3.EnsureEditingConfiguration(t, r);
	const {
		bTimerCompleted: v,
		fnStopTimer: I,
		fnRestartTimer: E,
	} = (0, j.L$)(2000);
	n.useEffect(() => I(), [I]);
	let [M, T] = n.useState(false);
	const R = (0, Pe.N4)();
	const k = (0, o.q3)(() => (0, Le.qw)().BIsOfflineMode());
	n.useEffect(() => {
		if (v) {
			h.v3.EnsureEditingConfiguration(t, r);
			h.v3.QueryConfigsForApp(t, r);
			e.closeModal();
		}
	}, [v, t, r, e]);
	let D = [
		{
			data: 1,
			label: Localize("#AppControllerConfiguration_Export_Type_PersonalLocal"),
		},
		{
			data: 2,
			label: Localize("#AppControllerConfiguration_Export_Type_PersonalCloud"),
		},
		{
			data: 4,
			label: Localize("#AppControllerConfiguration_Export_Type_Template"),
		},
	];
	if (!R || !!k) {
		D = D.slice(0, 1);
	}
	return n.createElement(
		C.X_,
		{
			...s,
			onCustomOK: () => {
				if (!M) {
					T(true);
					const e = y == u ? i?.Title : u;
					h.v3.ExportEditingConfiguration(t, f, e, g, "");
				}
				E();
			},
			onCancel: () => {
				e.closeModal();
			},
			title: Localize("#AppControllerConfiguration_OverwriteConfig_New"),
			disableCommit: !S,
		},
		n.createElement(l.pd, {
			placeholder: Localize("#AppControllerConfiguration_Export_Title"),
			className: A.AccountNameCtn,
			label: Localize("#AppControllerConfiguration_Export_Title"),
			value: u,
			maxLength: 64,
			autoFocus: true,
			onChange: p,
			onEnterKeyPress: () => {
				B.current.TakeFocus();
			},
			navRef: w,
		}),
		n.createElement(l.pd, {
			placeholder: Localize("#AppControllerConfiguration_Export_Description"),
			className: A.AccountNameCtn,
			label: Localize("#AppControllerConfiguration_Export_Description"),
			value: g,
			maxLength: 512,
			autoFocus: false,
			onChange: _,
			onEnterKeyPress: () => {},
			navRef: B,
		}),
		!a &&
			n.createElement(l.Vb, {
				label: Localize("#AppControllerConfiguration_Export_Type"),
				rgOptions: D,
				onChange: (e) => b(e.data),
				selectedOption: f,
				strDefaultLabel: Localize("#AppControllerConfiguration_Export_Type"),
			}),
	);
});
const ot = (0, s.PA)((e) => {
	const { appid: t, controllerIndex: r, currentConfig: i, ...a } = e;
	let s = i.vecOfficialTitles[0]?.strToken;
	let o = i.vecOfficialDescriptions[0]?.strToken;
	h.v3.EnsureEditingConfiguration(t, r);
	let [c, m] = n.useState(false);
	const u = oe.tw.GetAppOverviewByAppID(t)?.display_name;
	const A = i?.vecOfficialTitles?.map((e, t) => ({
		label: Localize(e.strLocalized, u),
		data: t,
	}));
	const p = se.H.GetAppDetails(t);
	const g = p?.strDeveloperName;
	const _ = Localize("#" + le.Fd.GetControllerTypeString(i.nControllerType));
	const f = i.vecOfficialDescriptions.map((e, t) => ({
		label: Localize(e.strLocalized, g, _),
		data: t,
	}));
	return n.createElement(
		C.X_,
		{
			...a,
			onCommitResult: () => {
				if (!c) {
					m(true);
					h.v3.EnsureEditingConfiguration(t, r);
					h.v3.ExportEditingConfiguration(t, 2, s, o, "");
				}
				e.closeModal();
			},
			onCancel: () => {
				e.closeModal();
			},
			title: Localize("#AppControllerConfiguration_OfficialExport"),
		},
		n.createElement(l.Vb, {
			label: Localize("#AppControllerConfiguration_Export_Title"),
			rgOptions: A,
			onChange: (e) => {
				t = e.data;
				s = i.vecOfficialTitles[t].strToken;
				return;
				var t;
			},
			selectedOption: 0,
			strDefaultLabel: Localize("#AppControllerConfiguration_Export_Title"),
		}),
		n.createElement(l.Vb, {
			label: Localize("#AppControllerConfiguration_Export_Description"),
			rgOptions: f,
			onChange: (e) => {
				t = e.data;
				o = i.vecOfficialDescriptions[t].strToken;
				return;
				var t;
			},
			selectedOption: 0,
			strDefaultLabel: Localize(
				"#AppControllerConfiguration_Export_Description",
			),
		}),
	);
});
const lt = (0, s.PA)(function (e) {
	const t = (0, h.st)(e.appid, e.controllerIndex);
	const [r] = (0, H.VI)("steam_input_configurator_error_msg_enable");
	if (!t) {
		return n.createElement(
			Ae.eV,
			{
				onCancel: e.closeModal,
			},
			n.createElement(
				l.Y9,
				null,
				Localize("#AppControllerConfiguration_Configuration_Details"),
			),
			n.createElement(l.iK, null, "Not found"),
		);
	}
	const i = se.H.GetAppDetails(t?.appID);
	const a = (0, Be.yZ)(t);
	const s = t.bOfficial
		? i?.strDeveloperName
		: ae.O$.GetFriendState(t.accountID).display_name;
	const o = (0, Be.ut)(t, s);
	const c = "steam://controllerconfig/" + e.appid + "/" + t.publishedFileID;
	const { eConfigType: m, bModified: u } = QP(t);
	const p = m == h7.Template || t.eExportType == 4;
	const g = t.publishedFileID != "0" && !u && !p && t.eExportType != 1;
	const C = g;
	const _ = r && H.rV.settings?.bIsValveEmail;
	const f = h.v3.EditingConfiguration?.error_msg?.split("\n").map((e, t) =>
		n.createElement(
			"span",
			{
				key: t,
			},
			e,
			n.createElement("br", null),
		),
	);
	const b = h.v3.EditingConfiguration?.action_block_path?.length > 0;
	if (C) {
		CopyTextToClipboard(c);
	}
	return n.createElement(
		Ae.eV,
		{
			onCancel: e.closeModal,
		},
		n.createElement(
			l.Y9,
			null,
			Localize("#AppControllerConfiguration_Configuration_Details"),
		),
		n.createElement(
			l.a3,
			null,
			n.createElement(
				l.Nv,
				{
					label: Localize(
						"#AppControllerConfiguration_Configuration_Details_Title",
					),
				},
				a,
			),
			n.createElement(
				l.Nv,
				{
					label: Localize(
						"#AppControllerConfiguration_Configuration_Details_Description",
					),
				},
				o,
			),
			n.createElement(
				l.Nv,
				{
					label: Localize(
						"#AppControllerConfiguration_Configuration_Details_Author",
					),
				},
				p ? Localize("#AppControllerConfiguration_TemplateConfig") : s,
			),
			n.createElement(
				l.Nv,
				{
					label: "URL",
				},
				t.URL,
			),
			g &&
				n.createElement(
					l.Nv,
					{
						label: Localize(
							"#AppControllerConfiguration_Configuration_Details_ID",
						),
					},
					t.publishedFileID,
				),
			C &&
				n.createElement(
					l.Nv,
					{
						label: Localize(
							"#AppControllerConfiguration_Configuration_Details_Link",
						),
					},
					c,
				),
			n.createElement(
				"div",
				{
					className: A.ClipboardLabel,
				},
				Localize(
					C
						? "#AppControllerConfiguration_Configuration_LinkInfo"
						: "#AppControllerConfiguration_Configuration_NoLinkInfo",
				),
			),
			r &&
				n.createElement(
					l.G5,
					null,
					n.createElement(
						l.lr,
						null,
						Localize("#ControllerConfigurator_ConfigInfo_Title"),
					),
					n.createElement(
						l.Nv,
						{
							label: Localize(
								"#ControllerConfigurator_ConfigInfo_ActionBlockSource",
							),
						},
						b
							? h.v3.EditingConfiguration?.action_block_path
							: Localize(
									"#ControllerConfigurator_ConfigInfo_ActionBlockSource_None",
								),
					),
					n.createElement(
						l.iK,
						null,
						Localize("#ControllerConfigurator_ConfigInfo_ErrorMsgs"),
					),
					n.createElement(
						l.a3,
						null,
						" ",
						h.v3.EditingConfiguration?.error_msg?.length > 0
							? f
							: Localize(
									"#ControllerConfigurator_ConfigInfo_ActionBlockSource_None",
								),
						" ",
					),
				),
			_ &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(l.lr, null, "Valve-Only Developer Info"),
					n.createElement(
						l.Nv,
						{
							label: "Launching Interstitial Type",
						},
						h7[m],
						jT(t) && " (Recommended)",
						u && " (Modified)",
					),
					n.createElement(
						l.Nv,
						{
							label: "Progenitor URL",
						},
						t.ProgenitorURL?.length > 0 ? t.ProgenitorURL : "None",
					),
				),
		),
	);
});
function ct(e) {
	const { appid: t, controllerIndex: r, currentConfig: i, autoFocus: s } = e;
	const m = (0, a.W6)();
	(0, Oe.oH)();
	const u = (0, Pe.N4)();
	const p = (0, o.q3)(() => (0, Le.qw)().BIsOfflineMode());
	const [C] = (0, H.VI)("steam_input_configurator_error_msg_enable");
	let _ = i?.bDeveloper || C;
	let y = le.Fd.Get().GetControllers();
	const S = h.v3.EditingConfigurationControllerIndex;
	const w = y.findIndex((e) => e.nControllerIndex == S);
	const B = Math.max(0, Math.min(w, y.length));
	const E = y[w]?.eControllerType != 4 && y[w]?.eControllerType != 2;
	const { eConfigType: M, bModified: T } = (0, o.q3)(() => QP(i));
	const R = () => {
		h.v3.Navigate(m, Me.BV.GamepadUI.ControllerConfigurator.Summary(t));
	};
	const k = _ && h.v3.EditingConfiguration?.error_msg?.length > 0;
	const D = () => {
		h.v3.Navigate(m, Me.BV.GamepadUI.ControllerConfigurator.Buttons(t));
	};
	let [N, F] = n.useState(false);
	const G = (e) => {
		(0, v.pg)(
			n.createElement(st, {
				appid: t,
				controllerIndex: r,
				currentConfig: i,
			}),
			e,
		);
	};
	const O = (e) => {
		let a = GetOwningWindowForEvent(e);
		(0, v.pg)(
			n.createElement(st, {
				appid: t,
				controllerIndex: r,
				currentConfig: i,
				typeOverride: 3,
			}),
			a,
		);
	};
	const P = () => {
		if (!i) {
			return;
		}
		if (!i.ProgenitorURL || Ze(i.URL) == qe.Workshop) {
			return;
		}
		let e = i.ProgenitorURL;
		var n;
		var a;
		var s;
		var o;
		n = i.Title;
		a = i.Description;
		s = i.eExportType;
		o = e;
		if (!N) {
			F(true);
			h.v3.EnsureEditingConfiguration(t, r);
			h.v3.ExportEditingConfiguration(t, s, n, a, o);
		}
	};
	const L = (e) => {
		let a = GetOwningWindowForEvent(e);
		if (i?.vecOfficialTitles?.length > 0) {
			(0, v.pg)(
				n.createElement(ot, {
					appid: t,
					controllerIndex: r,
					currentConfig: i,
				}),
				a,
			);
		} else {
			(0, v.pg)(
				n.createElement(st, {
					appid: t,
					controllerIndex: r,
					currentConfig: i,
					typeOverride: 2,
				}),
				a,
			);
		}
	};
	const z = (e) => {
		let i = GetOwningWindowForEvent(e);
		h.v3.SaveEditingConfiguration(t);
		(0, v.pg)(
			n.createElement(lt, {
				controllerIndex: r,
				appid: t,
			}),
			i,
			{
				strTitle: Localize("#AppControllerConfiguration_Configuration_Details"),
			},
		);
	};
	const x = (e) => {
		let t = GetOwningWindowForEvent(e);
		if (
			!(function (e) {
				return (
					!!e &&
					(!e.ProgenitorURL || Ze(e.ProgenitorURL) == qe.Workshop) &&
					e.accountID == ae.O$.currentUserSteamID.GetAccountID() &&
					(e.eExportType == null || e.eExportType == 1 || e.eExportType == 2)
				);
			})(i) ||
			!u ||
			p
		) {
			G(t);
		} else {
			(0, v.pg)(
				n.createElement(Ae.o0, {
					strTitle: Localize(
						"#AppControllerConfiguration_OverwriteConfig_Title",
					),
					strDescription: Localize(
						"#AppControllerConfiguration_OverwriteConfig_Desc",
						i?.Title,
					),
					strOKButtonText: Localize(
						"#AppControllerConfiguration_OverwriteConfig_Overwrite",
					),
					strCancelButtonText: Localize(
						"#AppControllerConfiguration_OverwriteConfig_New",
					),
					bDestructiveWarning: true,
					onOK: P,
					onCancel: () => G(t),
				}),
				t,
				{
					strTitle: Localize(
						"#AppControllerConfiguration_OverwriteConfig_Title",
					),
				},
			);
		}
	};
	const U = () => {
		if (i && i.ProgenitorURL != "") {
			let e = h.v3.EditingConfigurationControllerIndex;
			const n = false;
			h.v3.SetActiveConfigForApp(t, e, i.ProgenitorURL, n);
			h.v3.EnsureEditingConfiguration(t, r);
		}
	};
	const W = () => {
		SteamClient.Apps.SetThirdPartyControllerConfiguration(t, 0);
		h.v3.SaveEditingConfiguration(t);
		h.v3.ClearSelectedConfigCache(t);
		h.v3.EnsureEditingConfiguration(t, r);
	};
	const V = (e) => {
		let t = GetOwningWindowForEvent(e);
		(0, v.pg)(
			n.createElement(Ae.o0, {
				strTitle: Localize("#AppControllerConfiguration_SteamInputToggle"),
				strDescription: Localize(
					"#AppControllerConfiguration_SteamInputToggle_Desc",
				),
				bDestructiveWarning: true,
				onOK: W,
				onCancel: null,
			}),
			t,
			{
				strTitle: Localize("#AppControllerConfiguration_SteamInputToggle"),
			},
		);
	};
	const j = (e) => {
		let t = GetOwningWindowForEvent(e);
		if (i?.ProgenitorURL != "") {
			(0, v.pg)(
				n.createElement(Ae.o0, {
					strTitle: Localize("#AppControllerConfiguration_ConfirmRevertConfig"),
					strDescription: Localize(
						"#AppControllerConfiguration_ConfirmRevertConfig_Desc",
					),
					bDestructiveWarning: true,
					onOK: U,
					onCancel: null,
				}),
				t,
				{
					strTitle: Localize("#AppControllerConfiguration_ConfirmRevertConfig"),
				},
			);
		}
	};
	let q = null;
	if (w != B && y.length > 0) {
		const e = y[B].nControllerIndex;
		h.v3.SaveEditingConfiguration(t);
		h.v3.EnsureEditingConfiguration(t, e);
	}
	q =
		y.length == 0
			? n.createElement(
					"div",
					{
						className: A.NoControllerMessage,
					},
					Localize("#AppControllerConfiguration_NoController"),
				)
			: M == h7.OptedOut
				? null
				: n.createElement(
						n.Fragment,
						null,
						n.createElement(
							c.Z,
							{
								className: A.ControllerConfigurationActionButtons,
								"flow-children": "row",
							},
							n.createElement(
								"div",
								null,
								n.createElement(
									l.jn,
									{
										autoFocus: s,
										onClick: R,
									},
									Localize("#AppControllerConfiguration_ViewLayout"),
								),
							),
							n.createElement(
								"div",
								null,
								n.createElement(
									l.$n,
									{
										onClick: D,
									},
									Localize("#AppControllerConfiguration_Edit"),
								),
							),
							n.createElement(
								l.$n,
								{
									className: A.MainOptionsButton,
									onClick: (e) =>
										((e) => {
											const t = n.createElement(
												b.tz,
												{
													label: Localize(
														"#ControllerConfigurator_Main_ContextMenu_Title",
													),
												},
												n.createElement(
													b.kt,
													{
														onSelected: x,
													},
													Localize("#AppControllerConfiguration_Export"),
												),
												u &&
													!p &&
													n.createElement(
														b.kt,
														{
															onSelected: O,
														},
														Localize("#AppControllerConfiguration_Share"),
													),
												_ &&
													u &&
													!p &&
													n.createElement(
														b.kt,
														{
															onSelected: L,
														},
														Localize(
															"#AppControllerConfiguration_OfficialExport",
														),
													),
												n.createElement(
													b.kt,
													{
														onSelected: z,
													},
													Localize(
														"#AppControllerConfiguration_Configuration_Details",
													),
												),
												n.createElement(
													b.kt,
													{
														onSelected: j,
														disabled: i?.ProgenitorURL == "",
													},
													Localize("#AppControllerConfiguration_RevertChanges"),
												),
												E &&
													n.createElement(
														b.kt,
														{
															onSelected: V,
														},
														Localize(
															"#AppControllerConfiguration_SteamInputToggle",
														),
													),
											);
											(0, f.lX)(t, e);
										})(e),
								},
								n.createElement(g.Settings, null),
							),
						),
						k &&
							n.createElement(
								c.Z,
								{
									focusable: true,
									className: A.ErrorMsgButton,
									onActivate: z,
								},
								" ",
								Localize("#AppControllerConfiguration_SeeErrorMsgs"),
							),
					);
	return n.createElement(
		c.Z,
		{
			style: {
				scrollMargin: "60px 0",
			},
		},
		n.createElement(l.iK, null, false),
		q,
	);
}
function mt(e) {
	const t = h.v3.StableAppId;
	return n.createElement(
		l.$n,
		{
			className: A.HelpButton,
			onClick: async () => {
				await w.z.ClearInterstitialSeen(w.H.k_eIntro);
				let e = oe.tw.GetAppOverviewByAppID(t)?.steam_deck_compat_category;
				if (i.TS.ON_DECK && e != 3) {
					await w.z.ClearInterstitialSeen(w.H.k_eNonVerifiedGame);
				}
				await w.z.ClearInterstitialSeen(w.H.k_eGyro);
				w.z.AddInterstitialToQueue({
					eInterstitial: w.H.k_eIntro,
					appid: t,
				});
				if (i.TS.ON_DECK && e != 3) {
					w.z.AddInterstitialToQueue({
						eInterstitial: w.H.k_eNonVerifiedGame,
						appid: t,
					});
				}
			},
			onOKActionDescription: Localize("#Help"),
		},
		n.createElement(g.Question, null),
	);
}
function ut(e) {
	const { appid: t, onFocusWithin: r, children: i, grow: a } = e;
	const s = n.useRef(undefined);
	const o = n.useRef(undefined);
	const l = n.useCallback(
		(e) => {
			if (r) {
				r(e);
			}
			if (o.current != null && e) {
				const e = (0, _f)(o.current);
				window.clearTimeout(s.current);
				s.current = window.setTimeout(
					() =>
						e.scrollTo({
							top: 0,
							behavior: "smooth",
						}),
					0,
				);
			}
		},
		[o, s, r],
	);
	const d = n.useCallback(
		(e) =>
			e.detail.button == m.pR.BUMPER_LEFT
				? (tt(t, -1), true)
				: e.detail.button == m.pR.BUMPER_RIGHT && (tt(t, 1), true),
		[t],
	);
	n.useEffect(() => window.clearTimeout(s.current), []);
	return n.createElement(
		"div",
		{
			className: (0, u.A)(A.TopSection, a && A.Grow),
		},
		n.createElement(
			c.Z,
			{
				className: A.Inner,
				ref: o,
				onFocusWithin: l,
				onButtonDown: d,
			},
			i,
		),
	);
}
function dt(e) {
	const t = n.useRef(undefined);
	const r = n.useRef(undefined);
	const i = n.useCallback(() => {
		const e = (0, _f)(r.current);
		const n = e.getBoundingClientRect().top;
		const i = r.current.getBoundingClientRect().top;
		const a = Math.round(e.scrollTop);
		const s = Math.round(i - n + e.scrollTop);
		if (a < s) {
			window.clearTimeout(t.current);
			t.current = window.setTimeout(
				() =>
					e.scrollTo({
						top: s,
						behavior: "smooth",
					}),
				0,
			);
		}
	}, [r, t]);
	n.useEffect(() => window.clearTimeout(t.current), []);
	const { strMinHeightStyle: a, refForResizeObserver: s } = (0, j.X)();
	const o = (0, j.Ue)(s, r);
	return n.createElement(
		c.Z,
		{
			style: {
				minHeight: a,
			},
			className: (0, u.A)(A.BottomSection, e.visible && A.Visible),
			ref: o,
			onGamepadFocus: i,
		},
		e.children,
	);
}
export function E6(e) {
	if (le.Fd.Get().GetControllers()?.length > 0) {
		return null;
	} else {
		return n.createElement(
			"div",
			{
				className: A.NoControllerColumn,
			},
			n.createElement(g.NoController, {
				className: (0, u.A)(A.NoControllerSVG, e.wide && A.Wide),
			}),
			n.createElement(
				"div",
				{
					className: A.NoControllerLabel,
				},
				Localize("#AppControllerConfiguration_NoController"),
			),
		);
	}
}
export function dh(e) {
	const {
		appid: t,
		controllerIndex: r,
		currentConfig: a,
		app: s,
		centerLayout: o,
	} = e;
	const c = le.Fd.Get().GetControllers();
	const m = s?.BHasStoreCategory(59);
	const p = le.Fd.Get().GetController(r);
	const g =
		m ||
		(s?.ps4_controller_support >= 1 && !p?.bBluetooth) ||
		(s?.ps4_controller_support == 2 && p.bBluetooth);
	const C =
		m ||
		(s?.ps5_controller_support >= 1 && !p?.bBluetooth) ||
		(s?.ps5_controller_support == 2 && p.bBluetooth);
	let _ = false;
	const f = (0, Be.$c)(p?.eControllerType);
	switch (f) {
		case 32:
			_ = s?.xbox_controller_support >= 1;
			break;
		case 34:
			_ = g;
			break;
		case 45:
			_ = C;
	}
	let b;
	b = m
		? [
				"#AppControllerConfiguration_SteamInputAPI",
				"#AppControllerConfiguration_SteamInputAPI_Desc",
			]
		: a?.bConfigurationEnabled && _
			? [
					"#AppControllerConfiguration_SteamInputTranslation",
					"#AppControllerConfiguration_SteamInputRemap_Desc",
				]
			: a?.bConfigurationEnabled
				? [
						"#AppControllerConfiguration_SteamInputTranslation",
						"#AppControllerConfiguration_SteamInputTranslation_Desc",
					]
				: [
						"#AppControllerConfiguration_BuiltInSupport",
						"#AppControllerConfiguration_ControllerOptedOut1",
					];
	let y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_None";
	if (s?.BIsShortcut()) {
		y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_Shortcut";
	} else if (s?.xbox_controller_support == 2) {
		y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_Full";
	} else if (s?.xbox_controller_support == 1) {
		y = "#AppControllerConfiguration_SteamInputTranslation_Desc2_Partial";
	}
	const S = f == 34 || f == 45 || f == 32 || (m && (f == 38 || f == 30));
	const w =
		!i.TS.ON_DECK || (S && !p?.bRemoteDevice && !a?.bConfigurationEnabled);
	const B = c?.filter((e) => (0, Be.mx)(e.eControllerType)).length == 0;
	if (w) {
		return n.createElement(
			"div",
			{
				className: A.ControllerSupportInfoSection,
			},
			B &&
				n.createElement(
					l.xh,
					{
						label: Localize(b[0]),
						description: n.createElement(n.Fragment, null, Localize(b[1])),
						onClick: a?.bConfigurationEnabled
							? () => {
									SteamClient.Apps.SetThirdPartyControllerConfiguration(t, 0);
									h.v3.SaveEditingConfiguration(t);
									h.v3.ClearSelectedConfigCache(t);
									h.v3.EnsureEditingConfiguration(t, r);
								}
							: () => {
									SteamClient.Apps.SetThirdPartyControllerConfiguration(t, 2);
									h.v3.SaveEditingConfiguration(t);
									h.v3.ClearSelectedConfigCache(t);
									h.v3.EnsureEditingConfiguration(t, r);
								},
						highlightOnFocus: false,
						bottomSeparator: "standard",
					},
					a?.bConfigurationEnabled
						? Localize("#AppProperties_SteamInputOff")
						: Localize("#AppProperties_SteamInputOn"),
				),
			!i.TS.ON_DECK &&
				s &&
				n.createElement(
					"div",
					{
						className: (0, u.A)((o || c?.length == 0) && A.CenterColumn),
					},
					n.createElement(
						"div",
						{
							className: A.SupportTitle,
						},
						Localize("#AppControllerConfiguration_ControllerSupportInfo_Title"),
					),
					n.createElement(
						"div",
						{
							className: A.SupportLabel,
						},
						Localize(y),
					),
					s?.xbox_controller_support >= 1 &&
						n.createElement(
							"div",
							{
								className: (0, u.A)(A.ControllerImageRow, S && A.HasADevice),
							},
							n.createElement(gt, {
								controllerIndex: r,
								controllerType: 32,
								checked: s?.xbox_controller_support >= 1,
								partial: s?.xbox_controller_support == 1,
							}),
							n.createElement(gt, {
								controllerIndex: r,
								controllerType: 34,
								checked: g,
								partial: s?.xbox_controller_support == 1,
							}),
							n.createElement(gt, {
								controllerIndex: r,
								controllerType: 45,
								checked: C,
								partial: s?.xbox_controller_support == 1,
							}),
							m &&
								n.createElement(gt, {
									controllerIndex: r,
									controllerType: 38,
									checked: true,
									partial: s?.xbox_controller_support == 1,
								}),
							m &&
								n.createElement(gt, {
									controllerIndex: r,
									controllerType: 30,
									checked: true,
									partial: s?.xbox_controller_support == 1,
								}),
						),
				),
		);
	} else {
		return null;
	}
}
function gt(e) {
	const t = le.Fd.Get().GetController(e.controllerIndex)?.eControllerType;
	return n.createElement(
		"div",
		{
			className: (0, u.A)(e.checked && A.Checked, A.ControllerSupportImage),
		},
		n.createElement(g.ControllerType, {
			className: A.ControllerInfoSVG,
			controllerType: e.controllerType,
			partial: e.partial,
		}),
		e.checked &&
			n.createElement(g.Checkmark, {
				className: A.Checkmark,
			}),
		e.controllerType == (0, Be.$c)(t) &&
			n.createElement(
				"div",
				{
					className: A.YourControllerLabel,
				},
				Localize(
					"#AppControllerConfiguration_ControllerSupportInfo_YourController",
				),
			),
	);
}
const ht = (0, s.PA)((e) => {
	const { appid: t } = e;
	const r =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const s = (0, h.st)(e.appid, e.controllerIndex);
	const m = (0, W.R7)();
	const [u, p] = n.useState(false);
	const g = oe.tw.GetAppOverviewByAppID(t);
	n.useEffect(() => {
		w.z.AddInterstitialToQueue({
			eInterstitial: w.H.k_eIntro,
			appid: t,
		});
		let e = g?.steam_deck_compat_category;
		if (i.TS.ON_DECK && e != 3) {
			w.z.AddInterstitialToQueue({
				eInterstitial: w.H.k_eNonVerifiedGame,
				appid: t,
			});
		}
	}, [t, g?.steam_deck_compat_category]);
	const C = (0, a.W6)();
	(0, o.q3)(() => h.v3.EnsureEditingConfiguration(t, r));
	const f = (0, le.tk)();
	const b = f.length > 0 && s?.bConfigurationEnabled;
	const [y, S] = n.useState(true);
	const v = n.useCallback(
		(e) => {
			if (e != y) {
				S(e);
			}
		},
		[y],
	);
	const I = se.H.GetAppDetails(t);
	let E = false;
	if (I?.bSteamInputRequiresGameInstall) {
		let e = g && g.GetPerClientData("local");
		if (g && e) {
			E = !g.BIsPerClientDataLocal(e) || !e.installed;
		}
	}
	const M = (0, Ge.Z)();
	const T = f.length > 1;
	return n.createElement(
		ne.Jr,
		{
			scrollable: false,
			className: A.ControllerConfiguratorGamepadPage,
			onMouseDown: (e) => e.preventDefault(),
		},
		n.createElement(rt, {
			autoFocus: T,
			appid: t,
			selectedControllerIndex: r,
			showGlyphs: u,
		}),
		n.createElement(
			De.MS,
			{
				className: A.ControllerConfiguratorMain,
				scrollIntoViewType: B.Yo.NoTransform,
			},
			!E &&
				s &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						ut,
						{
							appid: t,
							onFocusWithin: p,
							grow: !b,
						},
						n.createElement(E6, null),
						n.createElement(dh, {
							appid: t,
							controllerIndex: r,
							currentConfig: s,
							app: g,
						}),
						s?.bConfigurationEnabled &&
							n.createElement(
								n.Fragment,
								null,
								n.createElement(
									"div",
									{
										className: A.TopSectionHeader,
									},
									Localize("#AppControllerConfiguration_CurrentConfiguration"),
									n.createElement(
										c.Z,
										{
											className: A.HelpButtonContainer,
										},
										M &&
											n.createElement(
												l.$n,
												{
													className: A.SmallTopButtons,
													onClick: () => (0, Ge.b)(m),
													onOKActionDescription: Localize(
														"#ControllerConfigurator_ActionButtonLabel_ChangeOrder",
													),
												},
												Localize(
													"#ControllerConfigurator_ActionButtonLabel_ChangeOrder",
												),
											),
										n.createElement(mt, null),
									),
								),
								n.createElement(et, {
									currentConfig: s,
									onClick: () => {
										h.v3.Navigate(
											C,
											Me.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Root(
												t,
											),
										);
									},
								}),
								n.createElement(ct, {
									appid: t,
									controllerIndex: r,
									currentConfig: s,
									autoFocus: !T,
								}),
							),
					),
					b &&
						n.createElement(
							dt,
							{
								visible: y,
							},
							n.createElement(Ie, {
								appid: t,
								controllerIndex: r,
								onRender: v,
							}),
						),
				),
			E &&
				n.createElement(
					l.a3,
					{
						className: A.NeedsInstallWarning,
					},
					" ",
					Localize("#AppControllerConfiguration_ConfigNeedsGameInstall"),
				),
		),
		n.createElement(ke.LP, {
			appid: t,
		}),
	);
});
function Ct() {
	const e = (0, a.W6)();
	const t = h.v3.BControllerConfigCloudConflict;
	const r = !h.v3.BControllerConfigCloudSyncPending;
	const [i, s] = n.useState(false);
	const o = (0, W.R7)();
	const m = o?.ownerWindow || window;
	const u = (0, U.yq)();
	n.useEffect(() => {
		if (t && !i) {
			s(true);
			(0, Re.TE)(
				{
					bOnAppLaunch: true,
					appid: y.rm,
					onCancel: u,
					keepLocal: () => h.v3.ResolveControllerConfig(true),
					keepRemote: () => {
						h.v3.ResolveControllerConfig(false);
						u();
					},
					onOK: u,
				},
				m,
			);
		}
	}, [u, e, r, t, i, m]);
	return n.createElement(
		c.Z,
		{
			className: A.ControllerConfiguratorBackgroundContainer,
		},
		n.createElement(
			"div",
			{
				className: A.ControllerConfiguratorMain,
			},
			n.createElement(
				l.nB,
				null,
				n.createElement(pe.t, {
					size: "medium",
					position: "center",
				}),
			),
		),
	);
}
export const yE = (0, s.PA)(function () {
	const e = (0, Z.$2)().BRouteMatch({
		path: Me.BV.GamepadUI.ControllerConfigurator.MousePosition(),
	});
	(0, Fe.Bx)(e ? Ee.I5.Overlay : Ee.I5.Opaque, "ControllerConfigurator");
	const t = (0, Oe.oH)();
	const r = (0, Me.R_)() ?? h.v3.EditingConfigurationAppId;
	const [i, s] = n.useState(false);
	const o =
		h.v3.EditingConfigurationControllerIndex ??
		_.oy.MostRecentlyActiveControllerIndex;
	const l = (0, h.st)(r, o);
	const c = oe.tw.GetAppOverviewByAppID(r)?.display_name;
	const m = c
		? Localize("#ControllerConfigurator_Header_TitleWithApp", c)
		: Localize("#ControllerConfigurator_Header_Title");
	(0, ie.Wh)(m, "ControllerConfigurator");
	(0, ie.ez)(true, "ControllerConfigurator");
	const u = (0, W.R7)();
	const A = u?.ownerWindow || window;
	const p = (0, a.W6)();
	n.useEffect(() => h.v3.InitHistory(p), [p]);
	n.useEffect(() => {
		h.v3.SyncDownControllerConfigs();
		const e = () => {
			h.v3.UploadControllerConfigs();
			if (t.mode == Oe._5.ControllerConfigurator) {
				SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow();
				A?.close();
			}
		};
		return function () {
			h.v3.SaveEditingConfiguration(r, e);
		};
	}, [t, r, A]);
	n.useEffect(() => {
		const e = () => {
			if (i) {
				h.v3.SaveEditingConfiguration(r);
			}
		};
		A?.addEventListener("blur", e);
		return () => {
			A?.removeEventListener("blur", e);
		};
	}, [A, i, r]);
	const g = h.v3.BControllerConfigCloudConflict;
	const C = !h.v3.BControllerConfigCloudSyncPending;
	n.useEffect(() => {
		let e = false;
		if (!e && !g && !!C) {
			s(true);
		}
		return () => {
			e = true;
		};
	}, [g, C]);
	return n.createElement(
		a.dO,
		null,
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.Root(),
				exact: true,
			},
			i
				? n.createElement(ht, {
						appid: r,
						controllerIndex: o,
					})
				: n.createElement(Ct, null),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.Main(),
			},
			i
				? n.createElement(ht, {
						appid: r,
						controllerIndex: o,
					})
				: n.createElement(Ct, null),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.Summary(),
			},
			n.createElement(P.c, {
				appid: r,
				controllerIndex: o,
			}),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.SharedLayout(),
			},
			n.createElement(P.c, {
				appid: r,
				controllerIndex: o,
				bSharedLayout: true,
			}),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.ChooseBinding(),
			},
			n.createElement(L.I, {
				appid: r,
			}),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.MousePosition(),
			},
			n.createElement(J, {
				appid: r,
			}),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Community(),
			},
			n.createElement(be, {
				appid: r,
				controllerIndex: o,
				currentSelectedConfig: l,
				strDefaultTab: "Community",
			}),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.ChooseConfiguration.Root(),
			},
			n.createElement(be, {
				appid: r,
				controllerIndex: o,
				currentSelectedConfig: l,
			}),
		),
		n.createElement(
			Me.Jh,
			{
				path: Me.BV.GamepadUI.ControllerConfigurator.ModeSettings(),
				exact: false,
			},
			n.createElement(G.g8, {
				appid: r,
			}),
		),
		n.createElement(
			Me.Jh,
			null,
			n.createElement(ft, {
				appid: r,
				controllerIndex: o,
			}),
		),
	);
});
const ft = (0, s.PA)(function (e) {
	const { appid: t, controllerIndex: r } = e;
	const i = (0, a.W6)();
	const s = (0, a.zy)();
	const o =
		(0, a.B6)(
			s.pathname,
			Me.BV.GamepadUI.ControllerConfigurator.ActionSets(),
		) != null;
	const c =
		(0, a.B6)(
			s.pathname,
			Me.BV.GamepadUI.ControllerConfigurator.VirtualMenus(),
		) != null;
	const u = n.useCallback(
		(e) =>
			(!o && !!(0, we.N)(e)) ||
			(e.detail.button == m.pR.SELECT &&
				(h.v3.Navigate(i, Me.BV.GamepadUI.ControllerConfigurator.Summary(t)),
				true)),
		[t, i, o],
	);
	const p = le.Fd.Get().GetController(r)?.eControllerType;
	const C = h.v3.EditingConfiguration;
	const _ = (0, Be.P4)(C);
	const f = n.useMemo(
		() => [
			{
				title: Localize("#ControllerConfigurator_Section_Buttons"),
				icon: n.createElement(Be.UT, {
					className: A.SectionGlyph,
					controllerType: 4,
					controllerSource: 4,
					controllerModeInput: 12,
				}),
				route: Me.BV.GamepadUI.ControllerConfigurator.Buttons(t),
				content: n.createElement(xe, {
					appid: t,
				}),
			},
			{
				title: Localize("#ControllerConfigurator_Section_DPad"),
				icon: n.createElement(Be.UT, {
					className: A.SectionGlyph,
					controllerType: 4,
					controllerSource: 13,
					controllerModeInput: 0,
				}),
				route: Me.BV.GamepadUI.ControllerConfigurator.DPad(t),
				content: n.createElement(Ue, {
					appid: t,
				}),
				visible: (0, Be.sn)(p, 13),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Triggers"),
				icon: n.createElement(Be.UT, {
					className: A.SectionGlyph,
					controllerType: 4,
					controllerSource: 6,
					controllerModeInput: 13,
				}),
				route: Me.BV.GamepadUI.ControllerConfigurator.Triggers(t),
				content: n.createElement(Ve, {
					appid: t,
				}),
				visible: (0, Be.sn)(p, 7),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Sticks"),
				icon: n.createElement(Be.UT, {
					className: A.SectionGlyph,
					controllerType: 4,
					controllerSource: 3,
					controllerModeInput: 0,
				}),
				route: Me.BV.GamepadUI.ControllerConfigurator.Sticks(t),
				content: n.createElement(We, {
					appid: t,
				}),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Touchpads"),
				icon: n.createElement(Be.UT, {
					className: A.SectionGlyph,
					controllerType: 4,
					controllerSource: 1,
					controllerModeInput: 0,
				}),
				route: Me.BV.GamepadUI.ControllerConfigurator.Touchpads(t),
				content: n.createElement(He, {
					appid: t,
				}),
				visible: (0, Be.sn)(p, 2),
			},
			{
				title: Localize("#ControllerConfigurator_Section_Gyros"),
				icon: n.createElement(Be.UT, {
					className: A.SectionGlyph,
					controllerType: 4,
					controllerSource: 10,
					controllerModeInput: 0,
				}),
				route: Me.BV.GamepadUI.ControllerConfigurator.Gyroscopes(t),
				content: n.createElement(je, {
					appid: t,
				}),
				visible: (0, Be.sn)(p, 10),
			},
			l.Vj,
			l.I0,
			{
				title: Localize("#ControllerConfigurator_Section_VirtualMenus"),
				icon: n.createElement(g.TouchMenu, null),
				route: Me.BV.GamepadUI.ControllerConfigurator.VirtualMenus(t),
				content: n.createElement(O.TX, {
					appid: t,
				}),
				visible: true,
			},
			{
				title: Localize("#ControllerConfigurator_Section_ActionSets"),
				hideTitle: true,
				icon: n.createElement(g.Copy, null),
				route: Me.BV.GamepadUI.ControllerConfigurator.ActionSets(t),
				content: n.createElement(E, {
					appid: t,
				}),
			},
		],
		[t, p],
	);
	return n.createElement(
		ne.dj,
		{
			onButtonDown: u,
			actionDescriptionMap: {
				[m.pR.SELECT]: Localize(
					"#ControllerConfigurator_ActionButtonLabel_Preview",
				),
			},
			onMouseDown: (e) => e.preventDefault(),
		},
		n.createElement(Te.q, {
			bNoHeaderPadding: _,
			title: null,
			bAutoFocusPageContent: true,
			topControls: n.createElement(we.eu, {
				className: A.ControllerConfiguratorActionSetSelector,
				disabled: o || c,
			}),
			pages: f,
		}),
		n.createElement(ke.LP, {
			appid: t,
		}),
	);
});
