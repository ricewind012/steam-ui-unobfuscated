var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require("./84056.js");
var _c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./50350.js");
var d = require("./85360.js");
var A = require("./11625.js");
var p = require("./22091.js");
var g = require("./84914.js");
var h = require("./62486.js");
var C = require("./52192.js");
var _ = require("./83314.js");
var f = require("./85399.js");
import {
	LocalizeReact,
	Localize,
} from "../../actual_src/utils/localization.js";
var y = require("./93681.js");
var S = require("./46422.js");
var w = require("./37449.js");
var B = require(/*webcrack:missing*/ "./61657.js");
var v = require("./78057.js");
var I = require("./33572.js");
var E = require("./18869.js");
var M = require("./91703.js");
var T = require(/*webcrack:missing*/ "./4690.js");
var R = require("./34792.js");
var k = require(/*webcrack:missing*/ "./11131.js");
var D = require("./96680.js");
var N = require(/*webcrack:missing*/ "./83599.js");
var F = require("./96593.js");
var G = require("./78787.js");
var O = require("./35488.js");
const P = new N.wd("ControllerConfiguratorSummary");
class L {
	constructor() {
		(0, a.Gn)(this);
	}
	m_bLegacyControllerSummary = false;
}
(0, n.Cg)([a.sH], L.prototype, "m_bLegacyControllerSummary", undefined);
const z = new L();
const x = i.createContext(null);
function U() {
	const e = i.useContext(x);
	if (e == null) {
		throw new Error(
			"useControllerLayoutContext cannot find ControllerLayoutContext!",
		);
	}
	return e;
}
function W(e) {
	const { className: t } = e;
	return i.createElement("div", {
		className: (0, _c.A)(t, A.BackgroundController),
	});
}
function V(e, t, r) {
	const n = d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const i = d.v3.EditingConfiguration?.sets[n];
	const a = e.rgBindingOptions;
	let s = null;
	const o = d.v3.EditingConfiguration?.sets;
	const c = !(0, h.K7)(o);
	if (t.controller_action?.action !== undefined) {
		s = (0, C.JD)(t.controller_action, c ? o : undefined, i?.layers);
	}
	if (s && r > 0) {
		return LocalizeReact("#ControllerBinding_Binding_FriendlyNameMultiple", s);
	}
	if (s) {
		if (t.key_binding_data?.friendly_name_utf8) {
			return LocalizeReact(
				"#ControllerBinding_Binding_FriendlyName",
				t.key_binding_data.friendly_name_utf8,
				s,
			);
		} else {
			return s;
		}
	}
	let m = a?.find((e) => (0, h.q8)(t, e.data));
	if (m) {
		if (t.key_binding_data?.friendly_name_utf8 && typeof m.label == "string") {
			if (r > 0) {
				return Localize(
					"#ControllerBinding_Binding_FriendlyNameMultiple",
					Localize(m.label),
				);
			} else {
				return Localize(
					"#ControllerBinding_Binding_FriendlyName",
					t.key_binding_data.friendly_name_utf8,
					Localize(m.label),
				);
			}
		}
		if (
			t.game_action?.action_key &&
			t.key_binding_data?.friendly_name_utf8 &&
			t.key_binding_data?.friendly_name_utf8?.charAt(0) != "#"
		) {
			return t.key_binding_data?.friendly_name_utf8;
		}
		let e = typeof m.label == "string" ? m.label : undefined;
		if (e?.charAt(0) == "#") {
			return Localize(m.label);
		} else {
			return m.label;
		}
	}
	if (t?.type == l.N.k_EControllerBindingType_Modeshift) {
		return Localize(
			"#ControllerBinding_ModeShift_FriendlyName",
			(0, h.ND)(h.Dd[t?.mode_shift.source].id),
		);
	} else {
		return "unknown";
	}
}
function H(e) {
	const { activator: t, focused: r } = e;
	const n = U();
	let a = [];
	t.bindings.forEach((e, t) => {
		if (e.type == 7 && e.controller_action.action == 43) {
			return;
		}
		let r = V(n, e, t);
		if (r) {
			if (a.length == 0 || typeof r != "string") {
				a.push(r);
			} else {
				a[0] += ", " + r;
			}
		}
	});
	if (a.length == 0) {
		return null;
	} else {
		return i.createElement(
			"div",
			{
				className: A.ControllerInputActivatorDisplay,
			},
			a.map((e, t) =>
				i.createElement(
					y.r,
					{
						key: t,
						play: r,
						className: A.Activator,
					},
					e,
				),
			),
		);
	}
}
function j(e) {
	const {
		input: t,
		eMode: r,
		bIconOnRight: n,
		bShrinkList: a,
		eSource: s,
		maxLength: o,
		parentFocused: l,
	} = e;
	const [u, p] = i.useState(false);
	const g = U();
	const h = s == 5;
	const _ = (0, M.Cu)(g.appid, s, t.key);
	if (r == null) {
		return null;
	}
	let f = t?.activators;
	const b = o && t?.activators?.length > o;
	if (b) {
		f = t?.activators.slice(0, o);
	}
	let y = f.map((e, t) =>
		i.createElement(H, {
			key: t,
			focused: u || l,
			activator: e,
		}),
	);
	const S = (function (e, t, r, n) {
		if (r?.activators?.length > 1) {
			return false;
		}
		if (e == 6 || e == 7) {
			return true;
		}
		switch (t) {
			case 6:
				if (r.key != 13) {
					return false;
				}
				if (e == 3 || e == 12) {
					return true;
				}
				break;
			case 3:
				if (e == 4) {
					switch (r.key) {
						case 12:
						case 10:
						case 11:
						case 9:
							return true;
						default:
							return false;
					}
				}
				break;
			case 1:
				if (e == 13 || e == 1) {
					switch (r.key) {
						case 1:
						case 7:
						case 5:
						case 3:
							return true;
						default:
							return false;
					}
				}
				break;
			case 16:
				if (e == 5) {
					switch (r.key) {
						case 53:
						case 54:
						case 61:
						case 62:
						case 52:
						case 51:
						case 55:
						case 57:
						case 56:
						case 58:
						case 79:
						case 80:
						case 68:
							return true;
						default:
							return false;
					}
				}
		}
		return false;
	})(s, r, t);
	const w = !y || y.length == 0;
	if (!S && w) {
		return null;
	}
	let B = (function (e, t) {
		let r = false;
		t?.activators.forEach((t) => {
			let n = [];
			t.bindings.forEach((t, r) => {
				if (t.type == 7 && t.controller_action.action == 43) {
					return;
				}
				let i = V(e, t, r);
				if (i) {
					if (n.length == 0 || typeof i != "string") {
						n.push(i);
					} else {
						n[0] += ", " + i;
					}
				}
			});
			if (n.length > 0 && n[0].toString().length > 23) {
				r = true;
			}
		});
		return r;
	})(g, t);
	const v = Q(s, r, t, true) ? A.StandardControl : undefined;
	const I = a || y.length > 1 || B ? A.ShrinkList : undefined;
	const E = h ? A.DirectAccessButton : undefined;
	return i.createElement(
		m.Z,
		{
			focusable: h,
			onActivate: () => {
				if (h) {
					_();
				}
			},
			onGamepadFocus: () => p(true),
			onGamepadBlur: () => p(false),
			noFocusRing: true,
			className: E,
		},
		i.createElement(
			"div",
			{
				key: t.key,
				className: (0, _c.A)(A.ControllerInputDisplay, n && A.IconOnRight, I),
			},
			i.createElement(
				"div",
				{
					className: (0, _c.A)(v, A.ActivatorText, I),
				},
				w ? "--" : y,
				b &&
					i.createElement(
						"div",
						{
							className: (0, _c.A)(v, A.ActivatorText, I, A.IconOnRight),
						},
						" ",
						"...",
						" ",
					),
			),
			i.createElement(
				"div",
				{
					className: (0, _c.A)(v, A.InputGlyph),
				},
				i.createElement(C.VF, {
					eControllerType: d.v3.EditingConfiguration?.controller_type,
					eInput: (0, C._H)(t.key),
					eMode: r,
					eSource: s,
					bSmall: a,
					bPreview: true,
				}),
			),
		),
	);
}
function q(e) {
	const { bIconOnRight: t, eMode: r, rgInputs: n, eSource: a } = e;
	n.sort((e, t) => t.key - e.key);
	return i.createElement(
		i.Fragment,
		null,
		n.map((e, n) =>
			i.createElement(j, {
				key: n,
				parentFocused: false,
				input: e,
				eMode: r,
				bIconOnRight: t,
				eSource: a,
				maxLength: 2,
			}),
		),
	);
}
function Q(e, t, r, n) {
	if ((0, f.FD)()) {
		return true;
	}
	if (r?.activators.length > 1) {
		return false;
	}
	switch (t) {
		case 6:
			if (r.key != 13) {
				return r?.activators.length == 0;
			}
			if (e == 3 || e == 1) {
				return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 9;
			}
			if (e == 12 || e == 2) {
				return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 10;
			}
			break;
		case 3:
			if (r?.activators.length < 1) {
				return false;
			}
			if (r?.activators[0]?.bindings?.length != 1) {
				return false;
			}
			if (e == 4) {
				switch (r.key) {
					case 12:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 3;
					case 10:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 4;
					case 11:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 6;
					case 9:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 5;
					default:
						return r?.activators.length == 0;
				}
			}
			break;
		case 1:
			if (e == 13 || e == 1 || e == 3) {
				if (
					r?.activators.length > 0 &&
					r?.activators[0]?.bindings?.length != 1
				) {
					return false;
				}
				switch (r.key) {
					case 1:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 14;
					case 7:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 16;
					case 5:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 15;
					case 3:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 17;
					default:
						return r?.activators.length == 0;
				}
			}
			break;
		case 16:
			if (r?.activators.length < 1) {
				return false;
			}
			if (r?.activators[0]?.bindings?.length != 1) {
				return false;
			}
			if (e == 5) {
				switch (r.key) {
					case 53:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 7;
					case 54:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 8;
					case 61:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 1;
					case 62:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 2;
					case 52:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 11;
					case 51:
						return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 12;
					default:
						return r?.activators.length == 0;
				}
			}
			break;
		case 10:
			if (r.key != 13 || !n) {
				return r?.activators.length == 0;
			}
			if (r?.activators.length == 0) {
				return true;
			}
			if (e == 6) {
				return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 1;
			}
			if (e == 7) {
				return r?.activators[0]?.bindings[0]?.gamepad_button?.button == 2;
			}
	}
	return false;
}
function Z(e) {
	const { group: t, source: r, baseActionSet: n, layerActionSet: a } = e;
	const s = i.useMemo(() => {
		let e;
		if (t) {
			d.v3.EditingConfiguration?.sets.some((t) =>
				t.source_bindings?.some((t) =>
					t?.active_group?.inputs?.some((t) =>
						t.activators?.some((n) =>
							n.bindings?.some(
								(n) =>
									n.mode_shift?.source == r &&
									((e = Localize(
										h.vU.find((e) => e.input == t.key)?.label ??
											"#Library_Details_ModeShift_Title_" + h.SW[t.key].id,
									)),
									true),
							),
						),
					),
				),
			);
			return e ?? Localize("#None_Title");
		} else {
			return e;
		}
	}, [t, r]);
	if (!t) {
		return null;
	}
	const o = (0, C.Kw)(t?.modeid);
	const l = t.mode;
	let m = o?.friendlyname;
	if (m) {
		const e = h.k$[l].summaryId ?? h.k$[l].id;
		m += " (" + (0, h.GW)(e) + ")";
	}
	const u = (0, f.FD)() ? A.StandardControl : undefined;
	const p = t.game_action;
	if (p != null && p.action_key) {
		const e = (0, h.Bv)(r, n, a).find(
			(e) =>
				e.gameAction?.action?.key && e.gameAction?.action?.key == p.action_key,
		);
		if (e && e.gameAction && e.gameAction.action) {
			m = e.gameAction.action.display_name;
		}
	}
	if (m?.length == 0) {
		m = (0, h.GW)(h.k$[l].id);
	}
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				className: u,
			},
			Localize("#ControllerSource_ModeShift_Header", m),
		),
		s &&
			i.createElement(
				"div",
				{
					className: (0, _c.A)(A.ControllerInputDisplay),
				},
				Localize("#ControllerSource_ModeShift_Subheader", s),
			),
	);
}
const Y = (0, s.PA)(function (e) {
	const {
		className: t,
		focusable: r = true,
		title: n,
		additionalLabel: a,
		additionalLabelStyle: s,
		bIconOnRight: o,
		maxLength: l,
		sourcesFilter: u,
		parentFocused: p,
		eSource: g,
		onActivate: _,
	} = e;
	const [b, y] = i.useState(false);
	const S = d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const w = d.v3.ControllerConfiguratorLayerSetIndex;
	const B = d.v3.EditingConfiguration?.sets[S];
	const v = B == null ? undefined : B.layers[w];
	const I = v ?? B;
	const E = u == null ? I?.source_bindings : u(I?.source_bindings);
	const M = E[0]?.active_group ? E[0]?.active_group?.mode : undefined;
	const T = g ?? E[0]?.key;
	const R = (0, C.Kw)(E[0]?.active_group?.modeid);
	const k = U();
	const D = {
		onActivate: _,
		onGamepadFocus: () => y(true),
		onGamepadBlur: () => y(false),
	};
	let N = R?.friendlyname;
	if (N) {
		const e = h.k$[M].summaryId ?? h.k$[M].id;
		N += " (" + (0, h.GW)(e) + ")";
	}
	const F = (0, f.FD)() ? A.StandardControl : undefined;
	const O = E[0]?.active_group?.game_action;
	if (O != null && O.action_key) {
		const e = (0, h.Bv)(T, B, v).find(
			(e) =>
				e.gameAction?.action?.key && e.gameAction?.action?.key == O.action_key,
		);
		if (e && e.gameAction && e.gameAction.action) {
			N = e.gameAction.action.display_name;
		}
	}
	let P;
	let L;
	if (E?.length == 1 && E[0]?.active_group) {
		const e = E[0].active_group?.mode;
		const a = E[0].active_group?.settings;
		if (T == 10 && e > 0) {
			const e = a.find((e) => e.key == 157);
			const t = BigInt(e?.long_value ?? 0);
			const r = a.find((e) => e.key == 69)?.int_value;
			const n = t == BigInt(0);
			P = i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					{
						className: A.GyroButtonMask,
					},
					n &&
						i.createElement(
							i.Fragment,
							null,
							i.createElement(
								"div",
								{
									className: A.GyroButtonMaskLabel,
								},
								(0, h.ix)("GyroEnableButton"),
								" ",
							),
							i.createElement(
								"div",
								{
									className: A.GyroButtonMaskLabel,
								},
								(0, h.Fq)("GyroNone"),
								" ",
							),
						),
					!n &&
						i.createElement(
							i.Fragment,
							null,
							i.createElement(
								"div",
								{
									className: A.GyroButtonMaskLabel,
								},
								(0, h.ix)("GyroEnableButton"),
								" ",
							),
							i.createElement(
								"div",
								{
									className: A.InputGlyph,
								},
								" ",
								i.createElement(G.ZZ, {
									nButtonMaskValue: t,
									nAvailableButtonsMask: (0, G.ej)(k.controller),
									controllerDetailItem: k.controller,
									overrideStyle: (0, _c.A)(A.MediumGlyphIcon),
								}),
								" ",
							),
							i.createElement(
								"div",
								{
									className: A.GyroButtonMaskLabel,
								},
								(0, h.Fq)(h.BC.find((e) => e.value == r)?.id),
								" ",
							),
						),
				),
			);
		}
		const s = h.k$[e]?.id ?? "#None";
		if (N == null) {
			switch (e) {
				case 11:
				case 14:
				case 19:
					N = (0, h.GW)(s);
			}
		}
		if (E[0].active_group?.mode_shift_source_group) {
			L = i.createElement(Z, {
				group: E[0].active_group?.mode_shift_source_group,
				baseActionSet: B,
				layerActionSet: v,
				source: T,
			});
		}
		if (N) {
			return i.createElement(
				"div",
				{
					className: (0, _c.A)(A.ControlsListSection, t),
				},
				i.createElement(
					m.Z,
					{
						focusable: r,
						...D,
						noFocusRing: true,
						className: A.DirectAccessButton,
					},
					i.createElement(
						"div",
						{
							className: A.Title,
						},
						n,
					),
					R?.mode > 0 &&
						i.createElement(
							"div",
							{
								className: F,
							},
							N,
						),
					L,
				),
			);
		}
		if (!h.k$[e]?.hideTitleInSummary) {
			N = (0, h.GW)(s);
		}
	}
	let z = [];
	E?.forEach((e) => {
		const t = e?.active_group?.inputs;
		if (!t) {
			return;
		}
		let r = t.filter(
			(e, r) =>
				e.activators.length > 0 && r === t.findIndex((t) => t.key === e.key),
		);
		z = z.concat(r);
	});
	z.sort((e, t) => (0, C.S1)(e.key) - (0, C.S1)(t.key));
	const x = z.length > 4;
	const W = o ? A.IconOnRight : undefined;
	return i.createElement(
		"div",
		{
			className: (0, _c.A)(A.ControlsListSection, t),
		},
		i.createElement(
			m.Z,
			{
				focusable: r,
				...D,
				noFocusRing: true,
				className: A.DirectAccessButton,
			},
			i.createElement(
				"div",
				{
					className: A.Title,
				},
				n,
			),
			R?.mode > 0 &&
				i.createElement(
					"div",
					{
						className: F,
					},
					N,
				),
			P &&
				i.createElement(
					"div",
					{
						className: (0, _c.A)(A.ControllerInputDisplay),
					},
					P,
				),
			i.createElement(
				"div",
				{
					className: (0, _c.A)(A.ControllerInputDisplay, A.ActivatorText, W, s),
				},
				" ",
				a,
				" ",
			),
			z.map((e, t) =>
				i.createElement(j, {
					key: t,
					parentFocused: b || p,
					input: e,
					eMode: M,
					eSource: E[0].key,
					bIconOnRight: o,
					bShrinkList: x,
					maxLength: l,
				}),
			),
			L,
		),
	);
});
function K(e) {
	const { className: t, controllerSource: r, capability: n } = e;
	const a = U();
	const s = (0, M.Cu)(a.appid, r);
	let o = a?.controller.unCapabilities;
	if (n && !(o & n)) {
		return null;
	}
	const l = h.Dd[r].id;
	let c;
	if (r != 6 && r != 7) {
		c = (0, h.ND)(l) || (0, C.Xt)(l);
	}
	return i.createElement(Y, {
		className: t,
		title: c,
		sourcesFilter: (e) => {
			if (!e) {
				return [];
			}
			return e.filter((e) => e.key == r).sort((e) => e.key);
		},
		additionalLabel: undefined,
		bIconOnRight: false,
		maxLength: 2,
		parentFocused: false,
		eSource: r,
		onActivate: s,
	});
}
function X(e) {
	return (function (e, t) {
		return (r) => {
			if (!r) {
				return [];
			}
			let n = r.filter((t) => t.key == e);
			n = n.sort((e) => e.key);
			let i = [];
			n.forEach((e) => {
				let r = e?.active_group?.inputs.filter(
					(e) =>
						!h.SW[e.key]?.macro &&
						!h.SW[e.key]?.dupe &&
						(t == null || t.includes(e.key)),
				);
				i = i.concat(r);
			});
			return i;
		};
	})(5, e);
}
function J() {
	return {
		fnLeftShoulderButtons: X([53]),
		fnRightShoulderButtons: X([54]),
	};
}
const $ = (0, s.PA)(function (e) {
	const { funcFilter: t, className: r, bIconOnRight: n, capability: a } = e;
	const s = U();
	const o = d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const l = d.v3.ControllerConfiguratorLayerSetIndex;
	const c = d.v3.EditingConfiguration?.sets[o];
	const m = (c == null ? undefined : c.layers[l]) ?? c;
	let u = t(m?.source_bindings);
	if (u.length == 0) {
		return null;
	}
	if (a && !(s?.controller.unCapabilities & a)) {
		return null;
	}
	if (
		(a == 1024 || a == 4194304) &&
		((s.controller.eControllerType == 39 && !n) ||
			(s.controller.eControllerType == 40 && n))
	) {
		return null;
	}
	const A = m?.source_bindings;
	const p = A[0]?.active_group ? A[0]?.active_group?.mode : undefined;
	return i.createElement(
		"div",
		{
			className: r,
		},
		i.createElement(q, {
			rgInputs: u,
			eMode: p,
			bIconOnRight: n,
			eSource: A[0].key,
		}),
	);
});
const ee = (0, s.PA)(function (e) {
	const {
		controllerSource: t,
		className: r,
		bIconOnRight: n,
		capability: a,
	} = e;
	const s = (0, o.q3)(() => z.m_bLegacyControllerSummary);
	const [l, u] = i.useState(false);
	const p = (e) => {
		if (!e) {
			return [];
		}
		return e.filter((e) => e.key == t).sort((e) => e.key);
	};
	const g = d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const _ = d.v3.ControllerConfiguratorLayerSetIndex;
	const f = d.v3.EditingConfiguration?.sets[g];
	const b = (f == null ? undefined : f.layers[_]) ?? f;
	const y = p == null ? b?.source_bindings : p(b?.source_bindings);
	const S = h.Dd[t].id;
	const w = U();
	const B = (0, M.Cu)(w.appid, t);
	if (a && !(w?.controller.unCapabilities & a)) {
		return null;
	}
	let v;
	let I;
	let E;
	if (t != 6 && t != 7) {
		I = (0, h.ND)(S) || (0, C.Xt)(S);
	}
	let T = false;
	if (
		(y?.length != 1 || !y[0]?.active_group) &&
		((v = "--"), (E = A.StandardControl), t == 11 && ((T = true), s))
	) {
		return null;
	}
	const R = t == 1 || t == 2 || 11;
	return i.createElement(
		"div",
		{
			className: (0, _c.A)(r, T && A.Empty),
		},
		i.createElement(
			m.Z,
			{
				focusable: !T,
				onActivate: () => {
					console.log("hooo3");
					B();
				},
				onGamepadFocus: () => u(true),
				onGamepadBlur: () => u(false),
				noFocusRing: true,
				className: A.DirectAccessButton,
			},
			i.createElement(
				"div",
				{
					className: (0, _c.A)(A.ControllerInputDisplay, n && A.IconOnRight),
				},
				i.createElement(Y, {
					title: I,
					focusable: !T,
					parentFocused: l,
					sourcesFilter: p,
					additionalLabel: v,
					additionalLabelStyle: E,
					bIconOnRight: n,
					maxLength: 2,
					eSource: t,
				}),
				!R &&
					i.createElement(
						"div",
						{
							className: (0, _c.A)(A.InputGlyph),
						},
						i.createElement(C.UT, {
							controllerType: d.v3.EditingConfiguration?.controller_type,
							controllerSource: t,
							controllerModeInput: 0,
							className: A.MediumGlyphIcon,
						}),
					),
			),
		),
	);
});
const te = (0, s.PA)(function (e) {
	const { controllerSource: t, className: r, bIconOnRight: n } = e;
	const [a, s] = i.useState(false);
	const o = (e) => {
		if (!e) {
			return [];
		}
		return e.filter((e) => e.key == t).sort((e) => e.key);
	};
	let l;
	const u = d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const p = d.v3.ControllerConfiguratorLayerSetIndex;
	const g = d.v3.EditingConfiguration?.sets[u];
	const h = (g == null ? undefined : g.layers[p]) ?? g;
	const _ = o == null ? h?.source_bindings : o(h?.source_bindings);
	const y = U();
	const S = (0, M.Cu)(y.appid, t);
	let w = false;
	let B = false;
	if (
		y.controller.eControllerType == 39 ||
		y.controller.eControllerType == 40
	) {
		return null;
	}
	if (_?.length == 1 && _[0]?.active_group) {
		const e = _[0].active_group?.inputs;
		const r = _[0].active_group?.settings;
		if (
			!(function (e, t, r, n) {
				let i = [];
				let a = r.filter((r) => !Q(e, t, r, true));
				i = i.concat(a);
				if (i.length > 0) {
					return false;
				}
				switch (t) {
					case 6:
						return e == 3 || e == 12 || e == 1 || e == 2;
					case 3:
						return e == 4;
					case 1:
						return true;
					case 10:
						let t = 0;
						n.forEach((e) => {
							if (e.key == 58) {
								t = e.int_value;
							}
						});
						if (e == 6) {
							return t == 1;
						}
						if (e == 7) {
							return t == 2;
						}
						break;
					case 16:
						return e == 5;
				}
				return false;
			})(t, 10, e, r)
		) {
			r.forEach((e) => {
				if (e.key == 58 && e.int_value) {
					l =
						e.int_value == 1
							? Localize("#ControllerBinding_LeftAnalogTrigger")
							: Localize("#ControllerBinding_RightAnalogTrigger");
					w = t == 6 ? e.int_value == 1 : e.int_value == 2;
				}
			});
		} else {
			B = true;
			w = true;
		}
	}
	let v = [];
	_?.forEach((e) => {
		let t = e?.active_group?.inputs.filter((e) => e.activators.length > 0);
		v = v.concat(t);
	});
	const I = v.length == 0 && !w && !_[0]?.active_group?.game_action?.action_key;
	const E = ((0, f.FD)() || !w) && v.length == 0;
	const T = w ? A.StandardControl : undefined;
	const R = B ? A.StandardControl : undefined;
	return i.createElement(
		"div",
		{
			className: r,
		},
		i.createElement(
			m.Z,
			{
				focusable: true,
				onActivate: S,
				onGamepadFocus: () => s(true),
				onGamepadBlur: () => s(false),
				noFocusRing: true,
				className: A.DirectAccessButton,
			},
			i.createElement(
				"div",
				{
					className: (0, _c.A)(A.ControllerInputDisplay, n && A.IconOnRight),
				},
				I &&
					i.createElement(
						"div",
						{
							className: (0, _c.A)(A.StandardControl, A.ActivatorText),
						},
						"--",
					),
				i.createElement(Y, {
					title: undefined,
					sourcesFilter: o,
					additionalLabel: l,
					additionalLabelStyle: T,
					bIconOnRight: n,
					maxLength: 2,
					parentFocused: a,
					eSource: t,
				}),
				B &&
					i.createElement(
						"div",
						{
							className: (0, _c.A)(A.InputGlyph, R),
						},
						i.createElement(C.UT, {
							controllerType: d.v3.EditingConfiguration?.controller_type,
							controllerSource: t,
							controllerModeInput: R ? 13 : 0,
							className: A.MediumGlyphIcon,
						}),
					),
				!B &&
					E &&
					i.createElement(
						"div",
						{
							className: (0, _c.A)(A.InputGlyph),
						},
						i.createElement(C.UT, {
							controllerType: d.v3.EditingConfiguration?.controller_type,
							controllerSource: t,
							controllerModeInput: 13,
							className: A.MediumGlyphIcon,
						}),
					),
			),
		),
	);
});
function re(e) {
	const t = U();
	const r = (0, E.tn)(w.B.GamepadUI.ControllerConfigurator.Main(t.appid));
	if (t.inMainMenu) {
		return i.createElement(
			m.Z,
			{
				className: A.ConfigButton,
				focusable: true,
				onActivate: r,
				preferredFocus: true,
				noFocusRing: true,
			},
			Localize("#AppOverlay_ControllerSettings"),
		);
	} else {
		return null;
	}
}
function ne(e) {
	let t = (function (e) {
		if (!e) {
			return null;
		}
		let t = [];
		if (e.unCapabilities & 64) {
			t.push(
				i.createElement(K, {
					controllerSource: 6,
				}),
			);
			t.push(
				i.createElement(K, {
					controllerSource: 7,
				}),
			);
		}
		if (e.unCapabilities & 2) {
			t.push(
				i.createElement(K, {
					controllerSource: 13,
				}),
			);
		} else if (e.unCapabilities & 4096) {
			t.push(
				i.createElement(K, {
					controllerSource: 1,
				}),
			);
		}
		if (e.unCapabilities & 4) {
			t.push(
				i.createElement(K, {
					controllerSource: 3,
				}),
			);
		}
		if (e.unCapabilities & 2048) {
			t.push(
				i.createElement(K, {
					controllerSource: 10,
				}),
			);
		}
		if (e.unCapabilities & 1) {
			t.push(
				i.createElement(K, {
					controllerSource: 4,
				}),
			);
		}
		if (e.unCapabilities & 4096) {
			t.push(
				i.createElement(K, {
					controllerSource: 2,
				}),
			);
		}
		if (e.unCapabilities & 8) {
			t.push(
				i.createElement(K, {
					controllerSource: 12,
				}),
			);
		}
		return t;
	})(U().controller);
	return i.createElement(
		"div",
		{
			className: A.BottomControlsSections,
		},
		t,
		i.createElement(re, null),
	);
}
function ie(e) {
	const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
	const n = U();
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				focusable: false,
				navEntryPreferPosition: T.iU.PREFERRED_CHILD,
			},
			i.createElement($, {
				funcFilter: t,
				bIconOnRight: true,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.LeftShoulderButtons,
				),
			}),
			i.createElement($, {
				funcFilter: r,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightShoulderButtons,
				),
			}),
			i.createElement(te, {
				controllerSource: 6,
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTriggerButtons),
			}),
			i.createElement(te, {
				controllerSource: 7,
				bIconOnRight: false,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightTriggerButtons,
				),
			}),
			i.createElement($, {
				funcFilter: X([55]),
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
			}),
			i.createElement($, {
				funcFilter: X([56]),
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
			}),
			i.createElement($, {
				funcFilter: X([51]),
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
			}),
			i.createElement($, {
				funcFilter: X([52]),
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
			}),
			i.createElement(
				m.Z,
				{
					className: A.BottomControlsSections,
					preferredFocus: n.inMainMenu,
					navEntryPreferPosition: T.iU.PREFERRED_CHILD,
				},
				i.createElement(K, {
					controllerSource: 1,
				}),
				i.createElement(K, {
					controllerSource: 3,
				}),
				i.createElement(K, {
					controllerSource: 10,
				}),
				i.createElement(K, {
					controllerSource: 4,
				}),
				i.createElement(K, {
					controllerSource: 2,
				}),
				i.createElement(re, null),
			),
		),
	);
}
function ae(e) {
	const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
	U();
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				focusable: false,
			},
			i.createElement($, {
				funcFilter: t,
				bIconOnRight: true,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.LeftShoulderButtons,
				),
			}),
			i.createElement($, {
				funcFilter: r,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightShoulderButtons,
				),
			}),
			i.createElement($, {
				funcFilter: X([52]),
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
			}),
			i.createElement(
				"div",
				{
					className: A.BottomControlsSections,
				},
				i.createElement(K, {
					controllerSource: 3,
				}),
				i.createElement(K, {
					controllerSource: 10,
				}),
				i.createElement(K, {
					controllerSource: 4,
				}),
				i.createElement(re, null),
			),
		),
	);
}
function se(e) {
	const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
	const n = U();
	const a = (n.controller?.unCapabilities & 8388608) != 0;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				focusable: false,
			},
			i.createElement($, {
				funcFilter: t,
				bIconOnRight: true,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.LeftShoulderButtons,
				),
			}),
			i.createElement($, {
				funcFilter: r,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightShoulderButtons,
				),
			}),
			i.createElement(te, {
				controllerSource: 6,
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTriggerButtons),
			}),
			i.createElement(te, {
				controllerSource: 7,
				bIconOnRight: false,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightTriggerButtons,
				),
			}),
			i.createElement($, {
				funcFilter: X([51]),
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
			}),
			i.createElement($, {
				funcFilter: X([52]),
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
			}),
			a &&
				i.createElement($, {
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
			i.createElement(
				"div",
				{
					className: A.BottomControlsSections,
				},
				i.createElement(K, {
					controllerSource: 3,
				}),
				i.createElement(K, {
					controllerSource: 13,
				}),
				i.createElement(K, {
					controllerSource: 12,
				}),
				i.createElement(K, {
					controllerSource: 4,
				}),
				i.createElement(re, null),
			),
		),
	);
}
function oe(e) {
	const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
	const n = U();
	const a = (n.controller?.unCapabilities & 8388608) != 0;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				focusable: false,
			},
			i.createElement($, {
				funcFilter: t,
				bIconOnRight: true,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.LeftShoulderButtons,
				),
			}),
			i.createElement($, {
				funcFilter: r,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightShoulderButtons,
				),
			}),
			i.createElement(te, {
				controllerSource: 6,
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTriggerButtons),
			}),
			i.createElement(te, {
				controllerSource: 7,
				bIconOnRight: false,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightTriggerButtons,
				),
			}),
			i.createElement($, {
				funcFilter: X([51]),
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
			}),
			i.createElement($, {
				funcFilter: X([52]),
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
			}),
			a &&
				i.createElement($, {
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
			i.createElement(
				"div",
				{
					className: A.BottomControlsSections,
				},
				i.createElement(K, {
					controllerSource: 3,
				}),
				i.createElement(K, {
					controllerSource: 13,
				}),
				i.createElement(K, {
					capability: 2048,
					className: A.Gyro,
					controllerSource: 10,
				}),
				i.createElement(K, {
					controllerSource: 12,
				}),
				i.createElement(K, {
					controllerSource: 4,
				}),
				i.createElement(re, null),
			),
		),
	);
}
function le(e) {
	const t = U();
	const r = t.inMainMenu;
	const { fnLeftShoulderButtons: n, fnRightShoulderButtons: a } = J();
	const s = (function (e) {
		switch (e) {
			case 33:
			case 34:
			case 45:
			case 48:
			case 36:
			case 4:
			case 43:
				return true;
		}
		return false;
	})(t?.controller.eControllerType);
	let o = "";
	if (r) {
		o = A.MainMenu;
	}
	if (t.controller.eControllerType != 39) {
		t.controller.eControllerType;
	}
	return i.createElement(
		m.Z,
		{
			"flow-children": "grid",
			className: A.ControllerLayout,
			focusable: false,
			navEntryPreferPosition: T.iU.PREFERRED_CHILD,
			autoFocus: !r,
		},
		i.createElement(
			"div",
			{
				className: A.TopSection,
			},
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
					navEntryPreferPosition: T.iU.MAINTAIN_Y,
					className: A.Left,
				},
				i.createElement($, {
					capability: 32,
					funcFilter: n,
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftShoulderButtons),
				}),
				i.createElement(te, {
					controllerSource: 6,
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftTriggerButtons),
				}),
				i.createElement($, {
					capability: 4194304,
					funcFilter: X([57]),
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftGripButtonsUpper),
				}),
				i.createElement($, {
					capability: 1024,
					funcFilter: X([55]),
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftGripButtons),
				}),
				i.createElement($, {
					capability: 1073741824,
					funcFilter: X([79]),
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftGripButtons),
				}),
				i.createElement($, {
					capability: 128,
					funcFilter: X([51]),
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftGripButtons),
				}),
				i.createElement($, {
					capability: 8388608,
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftAuxButtons),
				}),
				i.createElement(ee, {
					capability: 4096,
					controllerSource: 1,
					bIconOnRight: true,
					className: (0, _c.A)(A.ControlContainer, A.LeftTrackpad),
				}),
			),
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
					navEntryPreferPosition: T.iU.MAINTAIN_Y,
					className: A.Center,
				},
				t?.controller?.eControllerType != 49 &&
					i.createElement(W, {
						className: o,
					}),
				t?.controller?.eControllerType == 49 &&
					i.createElement(O.HoriController, {
						className: o,
					}),
				i.createElement(ee, {
					capability: 33554432,
					controllerSource: 11,
					className: (0, _c.A)(A.ControlContainer, A.CenterTrackpad),
				}),
			),
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
					navEntryPreferPosition: T.iU.MAINTAIN_Y,
					className: A.Right,
				},
				i.createElement($, {
					capability: 32,
					funcFilter: a,
					className: (0, _c.A)(A.ControlContainer, A.RightShoulderButtons),
				}),
				i.createElement(te, {
					controllerSource: 7,
					bIconOnRight: false,
					className: (0, _c.A)(A.ControlContainer, A.RightTriggerButtons),
				}),
				i.createElement($, {
					capability: 4194304,
					funcFilter: X([58]),
					className: (0, _c.A)(A.ControlContainer, A.RightGripButtonsUpper),
				}),
				i.createElement($, {
					capability: 1024,
					funcFilter: X([56]),
					className: (0, _c.A)(A.ControlContainer, A.RightGripButtons),
				}),
				i.createElement($, {
					capability: 1073741824,
					funcFilter: X([80]),
					className: (0, _c.A)(A.ControlContainer, A.RightGripButtons),
				}),
				i.createElement($, {
					capability: 256,
					funcFilter: X([52]),
					className: (0, _c.A)(A.ControlContainer, A.RightGripButtons),
				}),
				i.createElement(ee, {
					capability: 4096,
					controllerSource: 2,
					bIconOnRight: false,
					className: (0, _c.A)(A.ControlContainer, A.RightTrackpad),
				}),
			),
		),
		i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				className: (0, _c.A)(A.BottomControlsSections),
				preferredFocus: r,
				navEntryPreferPosition: r ? T.iU.PREFERRED_CHILD : T.iU.MAINTAIN_X,
			},
			s &&
				i.createElement(K, {
					capability: 2,
					className: A.Dpad,
					controllerSource: 13,
				}),
			i.createElement(K, {
				capability: 4,
				className: A.LeftStick,
				controllerSource: 3,
			}),
			!s &&
				i.createElement(K, {
					capability: 2,
					className: A.Dpad,
					controllerSource: 13,
				}),
			i.createElement(K, {
				capability: 2048,
				className: A.Gyro,
				controllerSource: 10,
			}),
			i.createElement(K, {
				capability: 8,
				className: A.RightStick,
				controllerSource: 12,
			}),
			i.createElement(K, {
				capability: 1,
				className: A.ABXY,
				controllerSource: 4,
			}),
			i.createElement(re, null),
		),
	);
}
function ce(e) {
	const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
	const n = U();
	const a = n.controller?.eControllerType == 45;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				focusable: false,
			},
			i.createElement($, {
				funcFilter: t,
				bIconOnRight: true,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.LeftShoulderButtons,
				),
			}),
			i.createElement($, {
				funcFilter: r,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightShoulderButtons,
				),
			}),
			i.createElement(te, {
				controllerSource: 6,
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTriggerButtons),
			}),
			i.createElement(te, {
				controllerSource: 7,
				bIconOnRight: false,
				className: (0, _c.A)(
					A.FloatingControlsContainer,
					A.RightTriggerButtons,
				),
			}),
			i.createElement($, {
				funcFilter: X([51]),
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
			}),
			i.createElement($, {
				funcFilter: X([52]),
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
			}),
			a &&
				i.createElement($, {
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
				}),
			i.createElement(ee, {
				controllerSource: 1,
				bIconOnRight: true,
				className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTrackpad),
			}),
			i.createElement(ee, {
				controllerSource: 11,
				className: (0, _c.A)(A.FloatingControlsContainer, A.CenterTrackpad),
			}),
			i.createElement(ee, {
				controllerSource: 2,
				bIconOnRight: false,
				className: (0, _c.A)(A.FloatingControlsContainer, A.RightTrackpad),
			}),
			i.createElement(
				"div",
				{
					className: A.BottomControlsSections,
				},
				i.createElement(K, {
					controllerSource: 13,
				}),
				i.createElement(K, {
					controllerSource: 3,
				}),
				i.createElement(K, {
					controllerSource: 10,
				}),
				i.createElement(K, {
					controllerSource: 12,
				}),
				i.createElement(K, {
					controllerSource: 4,
				}),
				i.createElement(re, null),
			),
		),
	);
}
function me(e) {
	const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
	U();
	return i.createElement(
		m.Z,
		{
			"flow-children": "grid",
			focusable: false,
		},
		i.createElement($, {
			funcFilter: t,
			bIconOnRight: true,
			className: (0, _c.A)(A.FloatingControlsContainer, A.LeftShoulderButtons),
		}),
		i.createElement($, {
			funcFilter: r,
			className: (0, _c.A)(A.FloatingControlsContainer, A.RightShoulderButtons),
		}),
		i.createElement(te, {
			controllerSource: 6,
			bIconOnRight: true,
			className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTriggerButtons),
		}),
		i.createElement(te, {
			controllerSource: 7,
			bIconOnRight: false,
			className: (0, _c.A)(A.FloatingControlsContainer, A.RightTriggerButtons),
		}),
		i.createElement($, {
			funcFilter: X([51]),
			bIconOnRight: true,
			className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
		}),
		i.createElement($, {
			funcFilter: X([52]),
			className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
		}),
		i.createElement(
			"div",
			{
				className: A.BottomControlsSections,
			},
			i.createElement(K, {
				controllerSource: 13,
			}),
			i.createElement(K, {
				controllerSource: 3,
			}),
			i.createElement(K, {
				controllerSource: 12,
			}),
			i.createElement(K, {
				controllerSource: 4,
			}),
			i.createElement(re, null),
		),
	);
}
const ue = {
	[-1]: ne,
	20: ne,
	0: ne,
	1: me,
	2: ie,
	3: ie,
	4: function (e) {
		const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
		U();
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
					navEntryPreferPosition: T.iU.PREFERRED_CHILD,
				},
				i.createElement($, {
					funcFilter: t,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftShoulderButtons,
					),
				}),
				i.createElement($, {
					funcFilter: X([51]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
				i.createElement($, {
					funcFilter: X([52]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
				}),
				i.createElement($, {
					funcFilter: r,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightShoulderButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 6,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftTriggerButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 7,
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightTriggerButtons,
					),
				}),
				i.createElement($, {
					funcFilter: X([57]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftGripButtonUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([58]),
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightGripButtonUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([55]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftGripButtonLower,
					),
				}),
				i.createElement($, {
					funcFilter: X([56]),
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightGripButtonLower,
					),
				}),
				i.createElement(ee, {
					controllerSource: 1,
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTrackpad),
				}),
				i.createElement(ee, {
					controllerSource: 2,
					bIconOnRight: false,
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightTrackpad),
				}),
				i.createElement(
					"div",
					{
						className: A.BottomControlsSections,
					},
					i.createElement(K, {
						controllerSource: 13,
					}),
					i.createElement(K, {
						controllerSource: 3,
					}),
					i.createElement(K, {
						controllerSource: 10,
					}),
					i.createElement(K, {
						controllerSource: 12,
					}),
					i.createElement(K, {
						controllerSource: 4,
					}),
					i.createElement(re, null),
				),
			),
		);
	},
	30: ne,
	47: ne,
	44: ne,
	31: se,
	32: se,
	33: ce,
	34: ce,
	35: ne,
	36: me,
	37: me,
	38: function (e) {
		const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
		U();
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
				},
				i.createElement($, {
					funcFilter: t,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftShoulderButtons,
					),
				}),
				i.createElement($, {
					funcFilter: r,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightShoulderButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 6,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftTriggerButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 7,
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightTriggerButtons,
					),
				}),
				i.createElement($, {
					funcFilter: X([51]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
				}),
				i.createElement($, {
					funcFilter: X([52]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
				}),
				i.createElement($, {
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
				i.createElement(
					"div",
					{
						className: A.BottomControlsSections,
					},
					i.createElement(K, {
						controllerSource: 3,
					}),
					i.createElement(K, {
						controllerSource: 13,
					}),
					i.createElement(K, {
						controllerSource: 10,
					}),
					i.createElement(K, {
						controllerSource: 12,
					}),
					i.createElement(K, {
						controllerSource: 4,
					}),
					i.createElement(re, null),
				),
			),
		);
	},
	42: ne,
	43: function (e) {
		U();
		return i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				focusable: false,
			},
			i.createElement(
				"div",
				{
					className: A.BottomControlsSections,
				},
				i.createElement(K, {
					controllerSource: 13,
				}),
				i.createElement(K, {
					controllerSource: 3,
				}),
				i.createElement(K, {
					controllerSource: 12,
				}),
				i.createElement(K, {
					controllerSource: 4,
				}),
				i.createElement(re, null),
			),
		);
	},
	45: ce,
	48: function (e) {
		const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
		U();
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
				},
				i.createElement($, {
					funcFilter: t,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftShoulderButtons,
					),
				}),
				i.createElement($, {
					funcFilter: r,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightShoulderButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 6,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftTriggerButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 7,
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightTriggerButtons,
					),
				}),
				i.createElement($, {
					funcFilter: X([57]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftGripButtonUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([58]),
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightGripButtonUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([55]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftGripButtonLower,
					),
				}),
				i.createElement($, {
					funcFilter: X([56]),
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightGripButtonLower,
					),
				}),
				i.createElement($, {
					funcFilter: X([51]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
				i.createElement($, {
					funcFilter: X([52]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
				}),
				i.createElement($, {
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
				i.createElement(ee, {
					controllerSource: 1,
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftTrackpad),
				}),
				i.createElement(ee, {
					controllerSource: 11,
					className: (0, _c.A)(A.FloatingControlsContainer, A.CenterTrackpad),
				}),
				i.createElement(ee, {
					controllerSource: 2,
					bIconOnRight: false,
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightTrackpad),
				}),
				i.createElement(
					"div",
					{
						className: A.BottomControlsSections,
					},
					i.createElement(K, {
						controllerSource: 13,
					}),
					i.createElement(K, {
						controllerSource: 3,
					}),
					i.createElement(K, {
						controllerSource: 10,
					}),
					i.createElement(K, {
						controllerSource: 12,
					}),
					i.createElement(K, {
						controllerSource: 4,
					}),
					i.createElement(re, null),
				),
			),
		);
	},
	46: function (e) {
		const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
		U();
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
				},
				i.createElement($, {
					funcFilter: t,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftShoulderButtons,
					),
				}),
				i.createElement($, {
					funcFilter: r,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightShoulderButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 6,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftTriggerButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 7,
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightTriggerButtons,
					),
				}),
				i.createElement($, {
					funcFilter: X([57]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftGripButtonsUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([58]),
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightGripButtonsUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([55]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
				}),
				i.createElement($, {
					funcFilter: X([56]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
				}),
				i.createElement($, {
					funcFilter: X([51]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
				i.createElement($, {
					funcFilter: X([52]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
				}),
				i.createElement(
					"div",
					{
						className: A.BottomControlsSections,
					},
					i.createElement(K, {
						controllerSource: 3,
					}),
					i.createElement(K, {
						controllerSource: 13,
					}),
					i.createElement(K, {
						controllerSource: 12,
					}),
					i.createElement(K, {
						controllerSource: 4,
					}),
					i.createElement(re, null),
				),
			),
		);
	},
	39: ae,
	40: ae,
	41: function (e) {
		const { fnLeftShoulderButtons: t, fnRightShoulderButtons: r } = J();
		U();
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				m.Z,
				{
					"flow-children": "grid",
					focusable: false,
				},
				i.createElement($, {
					funcFilter: t,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftShoulderButtons,
					),
				}),
				i.createElement($, {
					funcFilter: r,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightShoulderButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 6,
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftTriggerButtons,
					),
				}),
				i.createElement(te, {
					controllerSource: 7,
					bIconOnRight: false,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightTriggerButtons,
					),
				}),
				i.createElement($, {
					funcFilter: X([51]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftAuxButtons),
				}),
				i.createElement($, {
					funcFilter: X([52]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightAuxButtons),
				}),
				i.createElement($, {
					funcFilter: X([57]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftGripButtonsUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([58]),
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.RightGripButtonsUpper,
					),
				}),
				i.createElement($, {
					funcFilter: X([55]),
					bIconOnRight: true,
					className: (0, _c.A)(A.FloatingControlsContainer, A.LeftGripButtons),
				}),
				i.createElement($, {
					funcFilter: X([56]),
					className: (0, _c.A)(A.FloatingControlsContainer, A.RightGripButtons),
				}),
				i.createElement($, {
					funcFilter: X([68]),
					bIconOnRight: true,
					className: (0, _c.A)(
						A.FloatingControlsContainer,
						A.LeftCaptureButton,
					),
				}),
				i.createElement(
					"div",
					{
						className: A.BottomControlsSections,
					},
					i.createElement(K, {
						controllerSource: 3,
					}),
					i.createElement(K, {
						controllerSource: 13,
					}),
					i.createElement(K, {
						controllerSource: 10,
					}),
					i.createElement(K, {
						controllerSource: 12,
					}),
					i.createElement(K, {
						controllerSource: 4,
					}),
					i.createElement(re, null),
				),
			),
		);
	},
	49: oe,
	50: ne,
	400: ne,
	800: ne,
};
export const c = (0, s.PA)(function (e) {
	const { appid: t, controllerIndex: r, inMainMenu: n, bSharedLayout: a } = e;
	const s = (0, D.$2)();
	const l = (0, I.oH)();
	const h = p.Fd.Get().GetController(r);
	const y = d.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const w = d.v3.ControllerConfiguratorLayerSetIndex;
	const E = d.v3.EditingConfiguration?.sets[y];
	const M = E == null ? undefined : E.layers[w];
	const N = (0, k.R7)();
	const F = (0, o.q3)(() => z.m_bLegacyControllerSummary);
	const G = (0, d.st)(t, r);
	if (h && P.IsDebugEnabled()) {
		P.Debug("Capabilities:", "0x" + h?.unCapabilities.toString(16));
		const e = [];
		for (let t = 0; t < 32; t++) {
			if (h.unCapabilities & (1 << t)) {
				e.push(t);
			}
		}
		P.Debug("Bits:", e.join(", "));
	}
	const O = i.useMemo(() => (0, _.dI)(E, M), [E, M]);
	const L = i.useCallback(
		(e) => {
			if (a) {
				if (e.detail.button == B.pR.CANCEL) {
					d.v3.ClearPreviewConfiguration(t, r);
					return false;
				}
				if (e.detail.button == B.pR.SECONDARY) {
					if (d.v3.PreviewedConfiguration) {
						d.v3.SetActiveConfigForApp(
							t,
							r,
							d.v3.PreviewedConfiguration.url,
							false,
						);
						d.v3.ClearPreviewConfiguration(t, r);
						s?.NavigateHistory(-2);
					}
					return false;
				}
			}
			return (0, g.N)(e);
		},
		[t, r, a, s],
	);
	const U = v.H.GetAppDetails(t);
	const V =
		G?.bOfficial ||
		G?.bRecommended ||
		G?.bProgenitorOfficial ||
		G?.bProgenitorRecommended;
	let H = (0, C.yZ)(G);
	if (H == "$$$autosave") {
		H = Localize("#SettingsController_AutosaveName");
	}
	if (V) {
		H = Localize(
			"#AppControllerConfiguration_OfficialConfig",
			U?.strDisplayName,
			H,
		);
	}
	if (H.length == 0) {
		H = d.v3.EditingConfiguration?.display_name || "";
	}
	if (H.length == 0) {
		H = ".";
	}
	const j = {};
	if (a) {
		j[B.pR.SECONDARY] = Localize(
			"#ControllerConfigurator_ActionButtonLabel_ApplyLayout",
		);
		j[B.pR.OK] = null;
	}
	const q = h && (F ? ue[h.eControllerType] : le);
	const Q = h && p.Fd.GetControllerTypeString(h.eControllerType);
	let Z = 1;
	const Y = l.mode == I._5.ControllerConfigurator && l.forcedAppID != 0;
	if (
		N.ownerWindow.screen.availWidth != 853 &&
		N.ownerWindow.screen.availHeight != 533
	) {
		const e = Y || R.rV.settings?.bDisplayIsUsingAutoScale;
		const t = R.rV.settings?.flCurrentDisplayScaleFactor ?? 1.5;
		const r = R.rV.settings?.flAutoDisplayScaleFactor;
		Z = 1.5 / ((e ? r : t) / r);
	}
	if (S.oy.ShouldZoomStandaloneConfigurator && A.StandaloneConfigurator) {
		Z = 2;
	}
	let K = a ?? false;
	let X = "";
	if (n) {
		X = A.MainMenu;
	}
	if (p.Fd.Get().GetControllers().length == 0) {
		return i.createElement(
			u.Jr,
			{
				padForHeader: !n,
				padForFooter: !n,
				headerVisibility: n ? "default" : "opaque",
			},
			i.createElement(
				"div",
				{
					className: A.OptedOutPage,
				},
				i.createElement(f.E6, {
					wide: true,
				}),
			),
		);
	} else if (G?.bConfigurationEnabled) {
		return i.createElement(
			u.Jr,
			{
				padForHeader: !n,
				padForFooter: !n,
				headerVisibility: n ? "default" : "opaque",
			},
			i.createElement(
				"div",
				{
					className: A.FlexColumn,
				},
				i.createElement(
					m.Z,
					{
						className: (0, _c.A)(
							X,
							A.ControllerConfiguratorSummary,
							Q,
							l.mode == I._5.ControllerConfigurator &&
								S.oy.ShouldZoomStandaloneConfigurator &&
								A.StandaloneConfigurator,
							S.oy.ShouldZoomStandaloneConfigurator && A.Fullscreen,
							n && A.Overlay,
							!F && A.New,
						),
						focusableIfNoChildren: true,
						onButtonDown: L,
						autoFocus: K,
						noFocusRing: true,
						onActivate: undefined,
						actionDescriptionMap: j,
						navEntryPreferPosition: T.iU.PREFERRED_CHILD,
						style: {
							zoom: Z,
						},
					},
					q != le &&
						q != oe &&
						i.createElement(W, {
							className: (0, _c.A)(X, A.Absolute),
						}),
					i.createElement(
						"div",
						{
							className: (0, _c.A)(A.SubTitle, A.TitleLabel),
						},
						H,
					),
					i.createElement(g.dY, {
						className: A.SummaryActionSetSelector,
						bShowWhenOneActionSet: false,
						wrapAround: !n,
					}),
					h &&
						i.createElement(
							x.Provider,
							{
								value: {
									controller: h,
									rgBindingOptions: O,
									inMainMenu: n,
									appid: t,
								},
							},
							i.createElement(q, {
								key: y + "_" + w,
							}),
						),
				),
			),
		);
	} else {
		return i.createElement(Ae, {
			appid: t,
			controllerIndex: r,
			currentConfig: G,
		});
	}
});
function Ae(e) {
	const { appid: t, controllerIndex: r, currentConfig: n } = e;
	const a = F.tw.GetAppOverviewByAppID(t);
	const s = p.Fd.Get().GetController(r);
	const o = s && p.Fd.GetControllerTypeString(s.eControllerType);
	return i.createElement(
		"div",
		{
			className: (0, _c.A)(A.OptedOutPage, o),
		},
		i.createElement(W, {
			className: A.OptedOutControllerImg,
		}),
		i.createElement(f.dh, {
			appid: t,
			app: a,
			controllerIndex: r,
			currentConfig: n,
			centerLayout: true,
		}),
	);
}
