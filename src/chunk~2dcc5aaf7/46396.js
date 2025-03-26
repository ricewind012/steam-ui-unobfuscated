var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./78567.js");
var o = s;
var l = require("./62486.js");
var c = require("./85360.js");
var m = require("./52192.js");
var u = require(/*webcrack:missing*/ "./69164.js");
import { Localize } from "../../actual_src/utils/localization.js";
var A = require("./22091.js");
var p = require("./18057.js");
var g = require("./64608.js");
var h = require("./19037.js");
var C = require("./15917.js");
var _ = require("./43152.js");
var f = require("./83314.js");
var b = require("./99452.js");
var y = require("./50350.js");
var S = require(/*webcrack:missing*/ "./42318.js");
var w = require(/*webcrack:missing*/ "./90765.js");
var B = require(/*webcrack:missing*/ "./10975.js");
var v = require("./22047.js");
var I = require(/*webcrack:missing*/ "./4690.js");
var E = require("./10606.js");
var M = require(/*webcrack:missing*/ "./52451.js");
var T = require("./70078.js");
var R = T;
var k = require("./78787.js");
function D(e) {
	const {
		appid: t,
		baseActionSet: r,
		layerActionSet: i,
		eControllerSource: a,
		modeId: s,
		mode_shift: o,
		buttonBehaviourSetting: m,
		buttonMaskSetting: u,
	} = e;
	const p = (0, l.ix)(m.id);
	const [h, C, _] = (0, M.uD)();
	const f = BigInt(u.long_value) != k.Dk;
	let b;
	if (m) {
		switch (m.int_value) {
			case 0:
				b = (0, l.ix)("GyroConfigurationModeSetting_Off_Description");
				break;
			case 1:
				b = (0, l.ix)("GyroConfigurationModeSetting_On_Description");
				break;
			case 2:
				b = (0, l.ix)("GyroConfigurationModeSetting_Toggle_Description");
		}
		b +=
			" " +
			Localize("#ControllerBinding_GyroConfigurationModeSetting_NoteCarefully");
	} else {
		b = (0, l.ix)(u.id + "_Description");
	}
	n.useEffect(
		() => () => {
			if (h) {
				c.v3.SaveEditingConfiguration(t);
			}
		},
		[t, h],
	);
	const y = n.useCallback(
		(e) => {
			const n = {
				action_set_key: r?.key,
				action_set_layer_key: i?.key,
				source_binding_key: a,
				modeid: s,
				mode_shift: o,
				new_setting: {
					key: 157,
					long_value: e.toString(),
				},
			};
			c.v3.SetControllerSourceMode(t, n);
		},
		[t, r, i, a, s, o],
	);
	const S = c.v3.EditingConfigurationControllerIndex;
	const B = (0, A.as)(S);
	if (!B) {
		return null;
	}
	const v = (0, k.ej)(B);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			g.xh,
			{
				key: m.id,
				label: Localize(p),
				onClick: () => {
					C();
				},
				layout: m.layout,
				bottomSeparator: "none",
				childrenContainerWidth: "fixed",
				fieldClassName: (0, w.A)(R.SettingField, R.SettingMaxWidth),
			},
			n.createElement(k.ZZ, {
				nButtonMaskValue: BigInt(u?.long_value ?? 0),
				nAvailableButtonsMask: v,
				controllerDetailItem: B,
			}),
		),
		n.createElement(
			E.EN,
			{
				key: m.id + 1,
				active: h,
			},
			n.createElement(
				E.eV,
				{
					bAllowFullSize: true,
					className: (0, w.A)(R.ButtonPickerDialog),
					onCancel: _,
				},
				n.createElement(
					g.Y9,
					null,
					p || n.createElement(n.Fragment, null, "\xA0"),
				),
				n.createElement(NO, {
					key: 69,
					baseActionSet: c.v3.BaseActionSet,
					layerActionSet: c.v3.LayerActionSet,
					eControllerSource: 10,
					mapKey: 69,
					localizationOverride: (0, l.ix)("GyroEnableButtonBehavior"),
					disabled: !f,
					showDesc: false,
					showOptionsDescs: true,
				}),
				n.createElement(
					g.f3,
					{
						onCancelButton: _,
					},
					n.createElement(k.lP, {
						eControllerSource: a,
						controllerDetailItem: B,
						nSelectedButtonMaskValue: BigInt(u?.long_value ?? 0),
						nAvailableButtonsMask: v,
						onSetButtonMaskSetting: y,
					}),
				),
				n.createElement(
					"div",
					{
						className: (0, w.A)(R.DialogBodyText, R.Center),
					},
					b,
				),
			),
		),
	);
}
function N(e) {
	const {
		appid: t,
		baseActionSet: r,
		layerActionSet: i,
		eControllerSource: a,
		modeId: s,
		mode_shift: o,
		buttonMaskSetting: m,
	} = e;
	const u = (0, l.ix)(m.id);
	const [p, h, C] = (0, M.uD)();
	const _ = (0, l.ix)(m.id + "_Description");
	n.useEffect(
		() => () => {
			if (p) {
				c.v3.SaveEditingConfiguration(t);
			}
		},
		[t, p],
	);
	const f = n.useCallback(
		(e) => {
			const n = {
				action_set_key: r?.key,
				action_set_layer_key: i?.key,
				source_binding_key: a,
				modeid: s,
				mode_shift: o,
				new_setting: {
					key: 157,
					long_value: e.toString(),
				},
			};
			c.v3.SetControllerSourceMode(t, n);
		},
		[t, r, i, a, s, o],
	);
	const b = c.v3.EditingConfigurationControllerIndex;
	const y = (0, A.as)(b);
	if (!y) {
		return null;
	}
	const S = (0, k.ej)(y);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			g.xh,
			{
				key: m.id,
				label: Localize(u),
				onClick: () => {
					h();
				},
				layout: m.layout,
				bottomSeparator: "none",
				childrenContainerWidth: "fixed",
				fieldClassName: (0, w.A)(R.SettingField, R.SettingMaxWidth),
			},
			n.createElement(k.ZZ, {
				nButtonMaskValue: BigInt(m?.long_value ?? 0),
				nAvailableButtonsMask: S,
				controllerDetailItem: y,
			}),
		),
		n.createElement(
			E.EN,
			{
				key: m.id + 1,
				active: p,
			},
			n.createElement(
				E.eV,
				{
					bAllowFullSize: true,
					className: (0, w.A)(R.ButtonPickerDialog),
					onCancel: C,
				},
				n.createElement(
					g.Y9,
					null,
					u || n.createElement(n.Fragment, null, "\xA0"),
				),
				n.createElement(NO, {
					key: 69,
					baseActionSet: c.v3.BaseActionSet,
					layerActionSet: c.v3.LayerActionSet,
					eControllerSource: 10,
					mapKey: 69,
					localizationOverride: (0, l.ix)("GyroEnableButtonBehavior"),
					disabled: false,
					showDesc: false,
					showOptionsDescs: true,
				}),
				n.createElement(
					g.f3,
					{
						onCancelButton: C,
					},
					n.createElement(k.lP, {
						eControllerSource: a,
						controllerDetailItem: y,
						nSelectedButtonMaskValue: BigInt(m?.long_value ?? 0),
						nAvailableButtonsMask: S,
						onSetButtonMaskSetting: f,
					}),
				),
				n.createElement(
					"div",
					{
						className: (0, w.A)(R.DialogBodyText, R.Center),
					},
					_,
				),
			),
		),
	);
}
var F = require("./94790.js");
var G = require("./35376.js");
const O = new Map([
	[0, k.fK.k_eGamepadButtonBitMask_RightTriggerFullPull],
	[1, k.fK.k_eGamepadButtonBitMask_LeftTriggerFullPull],
	[45, k.fK.k_eGamepadButtonBitMask_LeftTriggerSoftPull],
	[46, k.fK.k_eGamepadButtonBitMask_RightTriggerSoftPull],
	[16, k.fK.k_eGamepadButtonBitMask_ButtonDPadUp],
	[17, k.fK.k_eGamepadButtonBitMask_ButtonDPadRight],
	[18, k.fK.k_eGamepadButtonBitMask_ButtonDPadLeft],
	[19, k.fK.k_eGamepadButtonBitMask_ButtonDPadDown],
	[2, k.fK.k_eGamepadButtonBitMask_ButtonNorth],
	[3, k.fK.k_eGamepadButtonBitMask_ButtonEast],
	[4, k.fK.k_eGamepadButtonBitMask_ButtonWest],
	[5, k.fK.k_eGamepadButtonBitMask_ButtonSouth],
	[6, k.fK.k_eGamepadButtonBitMask_ButtonRightBumper],
	[7, k.fK.k_eGamepadButtonBitMask_ButtonLeftBumper],
	[8, k.fK.k_eGamepadButtonBitMask_ButtonLeftStick],
	[63, k.fK.k_eGamepadButtonBitMask_ButtonRightStick],
	[9, k.fK.k_eGamepadButtonBitMask_ButtonStartOrOptions],
	[11, k.fK.k_eGamepadButtonBitMask_ButtonBackOrView],
	[10, k.fK.k_eGamepadButtonBitMask_ButtonGuideOrSteam],
	[20, k.fK.k_eGamepadButtonBitMask_ButtonBackGripLeftLower],
	[21, k.fK.k_eGamepadButtonBitMask_ButtonBackGripRightLower],
	[64, k.fK.k_eGamepadButtonBitMask_CapSenseLeftTouchPad],
	[65, k.fK.k_eGamepadButtonBitMask_CapSenseRightTouchPad],
	[42, k.fK.k_eGamepadButtonBitMask_ButtonLeftPadClicked],
	[43, k.fK.k_eGamepadButtonBitMask_ButtonRightPadClicked],
	[47, k.fK.k_eGamepadButtonBitMask_ButtonBackGripLeftUpper],
	[48, k.fK.k_eGamepadButtonBitMask_ButtonBackGripRightUpper],
	[50, k.fK.k_eGamepadButtonBitMask_ButtonAncillary1],
	[61, k.fK.k_eGamepadButtonBitMask_CapSenseLeftAux],
	[62, k.fK.k_eGamepadButtonBitMask_CapSenseRightAux],
]);
function P(e) {
	const {
		appid: t,
		baseActionSet: r,
		layerActionSet: i,
		controllerDetails: a,
		eControllerSource: s,
		modeId: l,
	} = e;
	const [m, u, A] = (0, M.uD)();
	let p = [];
	c.v3.EditingConfiguration?.modes?.find((e) => {
		if (e?.mode_shift_buttons?.length > 0) {
			const t = e.reference_modeid ?? e.modeid;
			if (l == t) {
				p = e.mode_shift_buttons;
				return true;
			}
		}
		return false;
	});
	const h = p.reduce((e, t) => {
		const r = O.get(t);
		return e | (0, k.E0)(r);
	}, BigInt(0));
	n.useEffect(
		() => () => {
			if (m) {
				c.v3.SaveEditingConfiguration(t);
			}
		},
		[t, m],
	);
	const C = n.useCallback(
		(e) => {
			let n = [];
			const a = Array.from(O.entries());
			for (let t = 0; t < a.length; t++) {
				const [r, i] = a[t];
				if ((0, k.UP)(e, i)) {
					n.push(r);
				}
			}
			let o = {
				action_set_key: r.key,
				action_set_layer_key: i?.key,
				source: s,
				modeid: l,
				mode_shift_buttons_digital_io: n,
			};
			c.v3.SetControllerModeShiftBinding(t, o);
		},
		[t, r, i, s, l],
	);
	const _ = (0, k.ej)(a);
	const f = (function () {
		let e = BigInt(0);
		O.forEach((t, r) => {
			e |= (0, k.E0)(t);
		});
		return e;
	})();
	const b = _ & f;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			g.xh,
			{
				key: "MultButtonContents",
				label: Localize("#ControllerBinding_ModeShiftDropDown"),
				onClick: () => {
					u();
				},
				layout: "inline",
				bottomSeparator: "none",
				childrenContainerWidth: "fixed",
				fieldClassName: (0, w.A)(o.SettingField, o.SettingMaxWidth),
			},
			n.createElement(k.ZZ, {
				nButtonMaskValue: h,
				nAvailableButtonsMask: b,
				controllerDetailItem: a,
			}),
		),
		n.createElement(
			F.E,
			{
				key: "MultButtonContentsPopupModal",
				active: m,
			},
			n.createElement(
				G.e,
				{
					bAllowFullSize: true,
					className: (0, w.A)(o.ButtonPickerDialog),
					onCancel: A,
				},
				n.createElement(
					g.Y9,
					null,
					Localize("#ControllerBinding_ModeShiftDropDown") ||
						n.createElement(n.Fragment, null, "\xA0"),
				),
				n.createElement(
					g.f3,
					{
						onCancelButton: A,
					},
					n.createElement(k.lP, {
						eControllerSource: s,
						controllerDetailItem: a,
						nSelectedButtonMaskValue: h,
						nAvailableButtonsMask: b,
						onSetButtonMaskSetting: C,
					}),
				),
			),
		),
	);
}
export const g8 = (0, a.PA)(function (e) {
	const { appid: t } = e;
	const r = c.v3.EditingConfigurationAppId;
	const {
		modeKey: a,
		strBaseActionSetKey: s,
		strLayerActionSetKey: u,
		eControllerSource: g,
		modeId: f,
		index: S,
		modeshift: w,
	} = (function (e) {
		const t = (0, i.g)();
		return {
			modeKey: parseInt(t?.modeKey),
			strBaseActionSetKey:
				t?.strBaseActionSetKey != "0" ? t?.strBaseActionSetKey : undefined,
			strLayerActionSetKey: t?.strLayerActionSetKey,
			eControllerSource: parseInt(t?.eControllerSource),
			modeId: parseInt(t?.modeId),
			index: parseInt(t?.index),
			modeshift: t?.modeshift == "true",
		};
	})();
	const B = A.Fd.Get().GetController(c.v3.EditingConfigurationControllerIndex);
	const { eControllerType: I } = B;
	const E = c.v3.EditingConfiguration?.sets?.find((e) => e.key == s);
	const M = E?.layers.find((e) => e.key == u);
	let T = (0, m.Kw)(f);
	T ||=
		M?.source_bindings?.find((e) => e.key == g)?.active_group ??
		E?.source_bindings?.find((e) => e.key == g)?.active_group;
	const R = c.v3.EditIdx;
	const k = (0, i.W6)();
	n.useEffect(() => {
		if (I === undefined) {
			k.replace(p.BV.GamepadUI.ControllerConfigurator.Main(t));
		}
	}, [I, t, k]);
	n.useEffect(() => {
		if (r == -1) {
			c.v3.EnsureEditingConfiguration(t);
		}
	}, [r, t]);
	n.useEffect(() => {
		const e = T ? T.mode : undefined;
		const t = T ? T.settings : undefined;
		const r = e ? l.jg[e] : undefined;
		c.v3.SetEditedGroupSettings(s, u, t, r, g, I);
	}, [R, T, a, s, u, g, I, f, r]);
	const F = (0, c.Ij)({
		baseActionSetKey: s,
		layerActionSetKey: u ?? "",
		eControllerSource: g,
	});
	const G = c.v3.CurrentEditedGroupSettings.get(F);
	const O = n.useMemo(() => {
		const e = c.v3.EditingConfiguration?.sets?.find((e) => e.key == s);
		const r = e?.layers?.find((e) => e.key == u);
		const i = (e) => {
			const t = G?.find((t) => t.key == e);
			if (t) {
				return t.sortOrder;
			} else {
				return 9999;
			}
		};
		let o = {
			Commands: [],
		};
		o.General = [
			w
				? n.createElement(P, {
						key: "ModeShiftButtonSelector",
						appid: t,
						baseActionSet: e,
						layerActionSet: r,
						modeId: f,
						controllerDetails: B,
						eControllerSource: g,
					})
				: null,
		];
		G?.slice()
			?.sort((e, t) => i(e.key) - i(t.key))
			?.filter((e) => !e.hiddenByViz)
			?.forEach((i, a) => {
				let s;
				if (i.visualizerType) {
					if (i.visualizerType == "GyroButtonPicker") {
						const i = G.find((e) => e.key == 69);
						const o = G.find((e) => e.key == 157);
						s = n.createElement(D, {
							key: a,
							appid: t,
							baseActionSet: e,
							layerActionSet: r,
							modeId: f,
							mode_shift: w,
							eControllerSource: g,
							buttonBehaviourSetting: i,
							buttonMaskSetting: o,
						});
					} else if (i.visualizerType == "TouchMenuActivatorButtonPicker") {
						const i = G.find((e) => e.key == 157);
						s = n.createElement(N, {
							key: a,
							appid: t,
							baseActionSet: e,
							layerActionSet: r,
							modeId: f,
							mode_shift: w,
							eControllerSource: g,
							buttonMaskSetting: i,
						});
					} else if (i.visualizerType == "Deadzones_Default") {
						s = n.createElement(C.NQ, {
							key: a,
							appid: t,
							mode: "default",
						});
					} else if (i.visualizerType == "Deadzones_Custom") {
						s = n.createElement(C.NQ, {
							key: a,
							appid: t,
							mode: "custom",
						});
					} else {
						console.error(
							"Configurator Mode Setting specifying an invalid visualizerType: " +
								i.visualizerType,
						);
					}
				} else {
					const t = !i.sectionContainsViz && !i.hiddenByViz;
					s = n.createElement(NO, {
						key: a,
						baseActionSet: e,
						layerActionSet: r,
						eControllerSource: g,
						mapKey: i.key,
						showDesc: i.showDesc,
						showOptionsDescs: i.showOptionsDescs,
						bottomSeparator: t ? "standard" : "none",
						modeid: f,
						layout: i.layout,
					});
				}
				const l = i.sectionId ? i.sectionId : "General";
				o[l] ||= [];
				o[l].push(s);
			});
		if (l.G9.includes(c.v3.CurrentEditedGroup?.mode)) {
			o.Commands.push(
				n.createElement(b.WJ, {
					key: f,
					appid: t,
					modeid: f,
					econtrollersource: g,
				}),
			);
		}
		for (const e in o) {
			if (o[e].length == 0) {
				delete o[e];
			}
		}
		let m = [];
		Object.keys(o).forEach((e, r) => {
			let i = n.createElement(
				"div",
				{
					key: r,
				},
				o[e],
			);
			m.push({
				title: Localize("#ControllerConfigurator_Setting_Section_" + e),
				route: p.BV.GamepadUI.ControllerConfigurator.ModeSettings(
					t,
					a,
					s,
					u,
					g,
					f,
					r,
					w,
				),
				content: i,
				hideTitle: false,
				padding: "none",
			});
		});
		return m;
	}, [t, a, B, g, G, s, u, f, w]);
	const L = (0, _.u6)();
	const x = (0, m.kF)(T?.mode) && !L;
	let U;
	if ((0, m.kF)(T?.mode)) {
		const e = O.map((e) => ({
			title: e.title,
			route: e.route,
			link: e.route,
			content: e.content,
			hideTitle: true,
		}));
		U = n.createElement(v.q, {
			title: "Unused",
			bNoHeaderPadding: true,
			topControls: n.createElement(z, {
				modeKey: a,
				modeId: f,
			}),
			pages: e,
			disablePageListScrolling: true,
			bottomControls:
				x &&
				n.createElement(
					"div",
					{
						className: o.VirtualMenuPreviewContainer,
					},
					n.createElement(b.Jc, {
						appid: t,
						mode: (0, m.Kw)(f),
					}),
				),
		});
	} else {
		U = n.createElement(j, {
			topControls: n.createElement(z, {
				modeKey: a,
				modeId: f,
			}),
			pages: O,
			bottomControls:
				x &&
				n.createElement(
					"div",
					{
						className: o.VirtualMenuPreviewContainer,
					},
					n.createElement(b.Jc, {
						appid: t,
						mode: (0, m.Kw)(f),
					}),
				),
		});
	}
	return n.createElement(
		y.dj,
		{
			onMouseDown: (e) => e.preventDefault(),
		},
		U,
		n.createElement(h.LP, {
			appid: t,
		}),
	);
});
const z = (0, a.PA)(function (e) {
	const { modeKey: t, modeId: r } = e;
	const i = (0, m.Kw)(r);
	const a = l.Dd[i?.source]?.id;
	const s = l.k$[t]?.id;
	let c = (0, l.ND)(a);
	if (c == a) {
		c = (0, m.Xt)(a);
	}
	const u = (0, l.GW)(s);
	const A = Localize("#ControllerConfigurator_SourceMode_Group_Settings", u);
	const p = i?.friendlyname != null && i.friendlyname.length > 0;
	return n.createElement(
		"div",
		{
			className: o.SettingsHeaderContainer,
		},
		n.createElement(
			"div",
			{
				className: o.SettingsSource,
			},
			p ? i.friendlyname : c,
		),
		n.createElement(
			"div",
			{
				className: o.SettingsMode,
			},
			A,
		),
	);
});
export function qb(e, t, r, n, i, a, s, o) {
	c.v3.SetActiveInputGroup(r, n, i, s, a, o, i.modeid);
	const l = r?.key && r?.key.length ? r?.key : "0";
	const m = p.BV.GamepadUI.ControllerConfigurator.ModeSettings(
		e,
		i.mode,
		l,
		n?.key ?? "0",
		a,
		i.modeid,
		0,
		i.mode_shift,
	);
	t.push(m);
}
export const Hx = (0, a.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		group: i,
		eControllerSource: a,
		eControllerType: s,
		disabled: o,
		...m
	} = e;
	n.useEffect(() => {
		const e = i ? l.jg[i.mode] : undefined;
		c.v3.SetEditedGroupSettings(t?.key, r?.key, i.settings, e, a, s);
	}, [t, r, i, a, s]);
	return n.createElement(NO, {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: a,
		bottomSeparator: "standard",
		modeid: i.modeid,
		looseSetting: true,
		disabled: o,
		...m,
	});
});
export const NO = (0, a.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: i,
		mapKey: a,
		bottomSeparator: s,
		localizationOverride: o,
		showDesc: l,
		showOptionsDescs: m,
		modeid: u,
		looseSetting: d,
		layout: A,
	} = e;
	const p = c.v3.CurrentEditedGroupSettings.get(
		(0, c.Ij)({
			baseActionSetKey: t?.key,
			layerActionSetKey: r?.key,
			eControllerSource: i,
		}),
	);
	const g = p?.find((e) => e.key == a);
	const h = c.v3.StableAppId;
	if (g == null) {
		return null;
	} else {
		return n.createElement(f.Qr, {
			setting: g,
			onChange: (e) => {
				const n = {
					action_set_key: t?.key,
					action_set_layer_key: r?.key,
					source_binding_key: i,
					modeid: u,
					mode_shift: c.v3.CurrentEditedGroup?.mode_shift,
					new_setting: {
						key: g.key,
						int_value: Math.trunc(e),
					},
				};
				c.v3.SetControllerSourceMode(h, n);
			},
			indent: 1,
			bottomSeparator: "none",
			localizationOverride: o,
			showDesc: l,
			showOptionsDescs: m,
			looseSetting: d,
			layout: A,
		});
	}
});
function V(e) {
	const { title: t, icon: r, active: i, navRef: a, ...s } = e;
	return n.createElement(
		u.Z,
		{
			preferredFocus: i,
			navRef: i ? e.navRef : null,
			noFocusRing: true,
			onActivate: s.onClick,
			onFocus: s.onClick,
			...s,
		},
		r &&
			n.createElement(
				"div",
				{
					className: o.PageListItem_Icon,
				},
				r,
			),
		n.createElement(
			"div",
			{
				className: o.PageListItem_Title,
			},
			t,
		),
	);
}
const H = n.forwardRef(function (e, t) {
	const r = (0, i.W6)();
	return n.createElement(
		u.Z,
		{
			ref: t,
			navRef: e.navRef,
			className: (0, w.A)(e.activePage.pageClassName, o.PageContainer),
			onFocusWithin: (t) => {
				if (t) {
					r.replace(e.activePage.route);
				}
			},
			navEntryPreferPosition: I.iU.MAINTAIN_Y,
		},
		e.activePage.header,
		!e.hideTitle && n.createElement(g.Y9, null, e.activePage.title),
		n.createElement(
			S.tH,
			{
				errorKey: e.activePage.title,
			},
			e.activePage.content != null && n.cloneElement(e.activePage.content),
		),
	);
});
function j(e) {
	const t = (0, i.zy)();
	const r = (0, i.W6)();
	const a = n.useMemo(
		() =>
			e.pages.map((e) => {
				let t = e;
				t.leftColumnNavRef = e.leftColumnNavRef ?? n.createRef();
				t.rightColumnNavRef = e.rightColumnNavRef ?? n.createRef();
				t.htmlRef = e.htmlRef ?? n.createRef();
				return t;
			}),
		[e.pages],
	);
	const s = a.find(({ route: e }) => (0, i.B6)(t.pathname, e)) || a[0];
	a.findIndex((e) => e == s);
	const l = n.useCallback(() => s.leftColumnNavRef.current.TakeFocus(), [s]);
	const c = n.useMemo(
		() =>
			a.map((e, t) =>
				n.createElement(
					u.Z,
					{
						key: t,
						navRef: e.rightColumnNavRef,
						navEntryPreferPosition: I.iU.MAINTAIN_Y,
					},
					" ",
					n.createElement(H, {
						key: e.identifier,
						hideTitle: false,
						activePage: e,
						ref: e.htmlRef,
					}),
					" ",
				),
			),
		[a],
	);
	const m = n.useMemo(
		() =>
			a.map((e, t) => {
				if (e.visible === false) {
					return null;
				}
				const l = e == s;
				const c = e.title && e.title.length > 0 ? e.title : t.toString();
				return n.createElement(V, {
					key: c,
					onClick: () => {
						B.eZ.PlayNavSound(B.PN.PagedNavigation);
						if (!(0, i.B6)(e.route, s.route)) {
							r.replace(e.route);
						}
						a[t].rightColumnNavRef?.current.TakeFocus();
					},
					onFocus: () => {
						if (!(0, i.B6)(e.route, s.route) && s.htmlRef.current) {
							e.htmlRef.current?.scrollIntoView({
								block: "center",
							});
							r.replace(e.route);
						}
					},
					title: e?.title,
					icon: e?.icon,
					active: l,
					className: (0, w.A)(o.PageListItem, l && o.Active),
					navRef: e.leftColumnNavRef,
				});
			}),
		[a, s, r],
	);
	return n.createElement(
		"div",
		{
			className: (0, w.A)(o.PagedSettingsDialog, e.className),
		},
		n.createElement(
			u.Z,
			{
				className: (0, w.A)(o.PageListColumn),
				onMoveRight: () => s?.rightColumnNavRef?.current.TakeFocus(),
			},
			e.topControls && n.createElement("div", null, e.topControls),
			n.createElement(
				"div",
				{
					className: o.PageList,
				},
				m,
			),
			e.bottomControls && n.createElement("div", null, e.bottomControls),
		),
		n.createElement(
			u.Z,
			{
				className: o.RightColumnContainer,
				onCancelButton: l,
				onMoveLeft: l,
				autoFocus: true,
			},
			c,
		),
	);
}
