import { Localize } from "../../actual_src/utils/localization.js";
import n, { PA } from "./41230.js";
import i, { q3 } from "./90095.js";
import a from "./63696.js";
import s from "./43014.js";
import o from "./69164.js";
import l from "./64608.js";
import { A as A_1 } from "./90765.js";
import u from "./22091.js";
import { dI } from "./83314.js";
import A, { q8, bj, GW } from "./62486.js";
import p from "./85360.js";
import g from "./11625.js";
import h, { JD, _H, nQ, yD } from "./52192.js";
import C, { LC } from "./46422.js";
import _ from "./85243.js";
import { Bx } from "./55489.js";
import b from "./57565.js";
import y from "./53622.js";
import { pw } from "./31319.js";
const WContext = a.createContext(null);
function B() {
	const e = a.useContext(WContext);
	if (e == null) {
		throw new Error(
			"useControllerLayoutContext cannot find ControllerLayoutContext!",
		);
	}
	return e;
}
function v() {
	const e = C.oy.MostRecentlyActiveControllerIndex;
	p.v3.LoadChordConfig(e);
}
function I(e) {
	const { activator } = e;
	let r = [];
	activator.bindings.forEach((e, t) => {
		let n = ((e, t) => {
			const r = B();
			v();
			const n = p.v3.ChordConfiguration?.sets[0];
			const r_rgBindingOptions = r.rgBindingOptions;
			if (e.controller_action?.action !== undefined) {
				return JD(
					e.controller_action,
					p.v3.ChordConfiguration?.sets,
					n?.layers,
				);
			}
			let a = r_rgBindingOptions?.find((t) => q8(e, t.data));
			if (a) {
				if (
					e.key_binding_data?.friendly_name_utf8 &&
					typeof a.label == "string"
				) {
					return Localize(
						"#ControllerBinding_Binding_FriendlyName",
						e.key_binding_data.friendly_name_utf8,
						Localize(a.label),
					);
				}
				let t = typeof a.label == "string" ? a.label : undefined;
				if (t?.charAt(0) == "#") {
					return Localize(a.label);
				} else {
					return a.label;
				}
			}
			return "unknown";
		})(e);
		if (p.v3.ChordConfiguration?.controller_type == 4) {
			if (n == "Next") {
				n = Localize("#ControllerActionKey_BrightnessUp");
			} else if (n == "Prev") {
				n = Localize("#ControllerActionKey_BrightnessDown");
			}
		}
		if (n) {
			if (r.length == 0) {
				r.push(n);
			} else {
				r[0] += `, ${n}`;
			}
		}
	});
	if (r.length == 0) {
		return null;
	}
	let n = "";
	if (
		activator.activation != 1 &&
		activator.activation != 2 &&
		activator.activation != 3
	) {
		n = bj(A.VD[activator.activation].id);
	}
	return a.createElement(
		"div",
		{
			className: g.ChordControl,
		},
		a.createElement(
			"div",
			{
				className: A_1(g.ActivatorText, g.ChordControlActivation),
			},
			n,
			" ",
		),
		a.createElement(
			"div",
			{
				className: A_1(g.ActivatorText, g.ChordControlBinding),
			},
			r.map((e, t) =>
				a.createElement(
					"span",
					{
						key: t,
					},
					e,
				),
			),
		),
	);
}
function E(e) {
	const { input, eMode, eSource, showBindingName } = e;
	v();
	if (eMode == null) {
		return null;
	}
	const o = _H(input?.key);
	let l = input?.activators;
	if (input?.activators?.length > 1) {
		l = input?.activators.slice(0, 1);
	}
	const m = l.map((e, t) =>
		a.createElement(I, {
			key: t,
			activator: e,
		}),
	);
	if (!m || m.length == 0) {
		return null;
	} else {
		return a.createElement(
			"div",
			{
				key: input.key,
				className: A_1(g.ControllerInputDisplay, g.ChordInputDisplay),
			},
			a.createElement(
				"div",
				{
					className: A_1(g.ChordControlBinding),
				},
				a.createElement(y.W, {
					button: s.g4.HomeMenu,
					className: g.PreviewHomeButton,
				}),
				a.createElement(
					"span",
					{
						className: g.PlusSign,
					},
					" + ",
				),
				a.createElement(h.VF, {
					eControllerType: p.v3.ChordConfiguration?.controller_type,
					eInput: o,
					eMode: eMode,
					eSource: eSource,
					bPreview: true,
				}),
			),
			a.createElement(
				"div",
				{
					className: g.ChordControlContainer,
				},
				(showBindingName ?? true) && m,
			),
		);
	}
}
const M = PA((e) => {
	const { sourcesFilter } = e;
	v();
	const r = p.v3.ChordConfiguration?.sets[0];
	const n =
		sourcesFilter == null
			? r?.source_bindings
			: sourcesFilter(r?.source_bindings);
	const i = n[0]?.active_group ? n[0]?.active_group?.mode : undefined;
	const o = i == 4 || i == 7;
	const l = p.v3.ChordConfiguration?.controller_type;
	let m = [];
	n?.forEach((e) => {
		let t = e?.active_group?.inputs.filter(
			(e) => e.activators.length > 0 && nQ(l, e.key) && e.key != 68,
		);
		m = m.concat(t);
	});
	m.sort((e, t) => e.key - t.key);
	if (o || m.length != 0) {
		return a.createElement(
			"div",
			{
				className: g.ControlsListSection,
			},
			o &&
				a.createElement(
					"div",
					{
						className: A_1(g.ControllerInputDisplay),
					},
					a.createElement(
						"div",
						{
							className: A_1(g.ChordControlBinding),
						},
						a.createElement(y.W, {
							button: s.g4.HomeMenu,
							className: g.PreviewHomeButton,
						}),
						a.createElement(
							"span",
							{
								className: g.PlusSign,
							},
							" + ",
						),
						a.createElement(h.UT, {
							controllerType: p.v3.ChordConfiguration?.controller_type,
							controllerSource: n[0].key,
							controllerModeInput: 0,
							className: g.MediumGlyphIcon,
						}),
					),
					a.createElement(
						"div",
						{
							className: g.ChordControl,
						},
						a.createElement(
							"div",
							{
								className: A_1(g.ActivatorText, g.ChordControlActivation),
							},
							"",
							" ",
						),
						a.createElement(
							"div",
							{
								className: A_1(g.ActivatorText, g.ChordControlBinding),
							},
							a.createElement(
								"span",
								{
									style: {
										maxWidth: "400px",
									},
								},
								GW(A.k$[i].id),
							),
						),
					),
				),
			m.map((e, t) =>
				a.createElement(E, {
					key: t,
					input: e,
					eMode: i,
					eSource: n[0].key,
				}),
			),
		);
	} else {
		return null;
	}
});
function T(e) {
	const { controllerSource } = e;
	return a.createElement(M, {
		sourcesFilter: (e) => {
			if (!e) {
				return [];
			}
			return e.filter((e) => e.key == controllerSource).sort((e) => e.key);
		},
	});
}
function R(e) {
	let t = ((e) => {
		if (!e) {
			return null;
		}
		let t = [];
		if (e.unCapabilities & 1) {
			t.push(
				a.createElement(T, {
					controllerSource: 4,
				}),
			);
		}
		if (e.unCapabilities & 8) {
			t.push(
				a.createElement(T, {
					controllerSource: 12,
				}),
			);
		}
		if (e.unCapabilities & 2) {
			t.push(
				a.createElement(T, {
					controllerSource: 13,
				}),
			);
		}
		if (e.unCapabilities & 4096) {
			t.push(
				a.createElement(T, {
					controllerSource: 1,
				}),
			);
		}
		if (e.unCapabilities & 4) {
			t.push(
				a.createElement(T, {
					controllerSource: 3,
				}),
			);
		}
		if (e.unCapabilities & 2048) {
			t.push(
				a.createElement(T, {
					controllerSource: 10,
				}),
			);
		}
		if (e.unCapabilities & 4096) {
			t.push(
				a.createElement(T, {
					controllerSource: 2,
				}),
			);
		}
		t.push(
			a.createElement(T, {
				controllerSource: 5,
			}),
		);
		return t;
	})(B().controller);
	return a.createElement(
		"div",
		{
			className: g.ChordControlsSections,
		},
		t,
	);
}
function k(e) {
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(
			"div",
			{
				className: g.ChordControlsSections,
			},
			a.createElement(T, {
				controllerSource: 4,
			}),
			a.createElement(T, {
				controllerSource: 5,
			}),
			a.createElement(T, {
				controllerSource: 6,
			}),
			a.createElement(T, {
				controllerSource: 7,
			}),
			a.createElement(T, {
				controllerSource: 2,
			}),
			a.createElement(T, {
				controllerSource: 1,
			}),
			a.createElement(T, {
				controllerSource: 3,
			}),
			a.createElement(T, {
				controllerSource: 10,
			}),
		),
	);
}
function D(e) {
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(
			"div",
			{
				className: g.ChordControlsSections,
			},
			a.createElement(T, {
				controllerSource: 4,
			}),
			a.createElement(T, {
				controllerSource: 5,
			}),
			a.createElement(T, {
				controllerSource: 6,
			}),
			a.createElement(T, {
				controllerSource: 7,
			}),
			a.createElement(T, {
				controllerSource: 12,
			}),
			a.createElement(T, {
				controllerSource: 3,
			}),
			a.createElement(T, {
				controllerSource: 13,
			}),
		),
	);
}
function N(e) {
	return a.createElement(
		"div",
		{
			className: g.ChordControlsSections,
		},
		a.createElement(T, {
			controllerSource: 4,
		}),
		a.createElement(T, {
			controllerSource: 5,
		}),
		a.createElement(T, {
			controllerSource: 6,
		}),
		a.createElement(T, {
			controllerSource: 7,
		}),
		a.createElement(T, {
			controllerSource: 12,
		}),
		a.createElement(T, {
			controllerSource: 3,
		}),
		a.createElement(T, {
			controllerSource: 13,
		}),
	);
}
function F(e) {
	return a.createElement(
		"div",
		{
			className: g.ChordControlsSections,
		},
		a.createElement(T, {
			controllerSource: 4,
		}),
		a.createElement(T, {
			controllerSource: 5,
		}),
		a.createElement(T, {
			controllerSource: 6,
		}),
		a.createElement(T, {
			controllerSource: 7,
		}),
		a.createElement(T, {
			controllerSource: 12,
		}),
		a.createElement(T, {
			controllerSource: 3,
		}),
		a.createElement(T, {
			controllerSource: 13,
		}),
	);
}
const G = {
	[-1]: R,
	20: R,
	0: R,
	1: F,
	2: k,
	3: k,
	4: function (e) {
		return a.createElement(
			a.Fragment,
			null,
			a.createElement(
				"div",
				{
					className: g.ChordControlsSections,
				},
				a.createElement(T, {
					controllerSource: 4,
				}),
				a.createElement(T, {
					controllerSource: 5,
				}),
				a.createElement(T, {
					controllerSource: 6,
				}),
				a.createElement(T, {
					controllerSource: 7,
				}),
				a.createElement(T, {
					controllerSource: 12,
				}),
				a.createElement(T, {
					controllerSource: 2,
				}),
				a.createElement(T, {
					controllerSource: 3,
				}),
				a.createElement(T, {
					controllerSource: 13,
				}),
				a.createElement(T, {
					controllerSource: 1,
				}),
				a.createElement(T, {
					controllerSource: 10,
				}),
			),
		);
	},
	30: R,
	31: D,
	32: D,
	33: N,
	34: N,
	47: R,
	35: R,
	36: F,
	37: F,
	38: R,
	42: R,
	44: R,
	43: function (e) {
		return a.createElement(
			"div",
			{
				className: g.ChordControlsSections,
			},
			a.createElement(T, {
				controllerSource: 5,
			}),
			a.createElement(T, {
				controllerSource: 13,
			}),
			a.createElement(T, {
				controllerSource: 3,
			}),
			a.createElement(T, {
				controllerSource: 6,
			}),
			a.createElement(T, {
				controllerSource: 7,
			}),
			a.createElement(T, {
				controllerSource: 12,
			}),
			a.createElement(T, {
				controllerSource: 4,
			}),
		);
	},
	45: N,
	48: N,
	46: D,
	49: D,
	39: R,
	40: R,
	41: R,
	50: R,
	400: R,
	800: R,
};
function O() {
	v();
	pw();
	LC();
	if (!q3(() => p.v3.ChordConfiguration)) {
		return null;
	}
	const e = C.oy.MostRecentlyActiveControllerIndex;
	const t = u.Fd.Get().GetController(e);
	const r = dI(undefined, undefined);
	const n = t && G[t.eControllerType];
	const s = t && u.Fd.GetControllerTypeString(t.eControllerType);
	return a.createElement(
		b.H,
		{
			appearance: "darkblur",
			visible: true,
		},
		a.createElement(
			o.Z,
			{
				className: A_1(g.ChordSummary),
			},
			a.createElement(
				o.Z,
				{
					className: A_1(g.ControllerConfiguratorSummary, s),
					focusable: false,
				},
				a.createElement(
					"div",
					{
						className: g.ChordControlsTitle,
					},
					Localize("#ControllerChord_GuideButtonShortcuts"),
				),
				n &&
					a.createElement(
						WContext.Provider,
						{
							value: {
								controller: t,
								rgBindingOptions: r,
							},
						},
						a.createElement(n, null),
					),
			),
		),
	);
}
export const Xw = PA((e) => {
	const t = e.visible ? _.I5.Notification : null;
	Bx(t, "ControllerChordSummary");
	if (e.visible) {
		return a.createElement(O, null);
	} else {
		return null;
	}
});
function L(e) {
	const { input, eMode, eSource, separator } = e;
	v();
	if (!input || !eMode) {
		return null;
	}
	const o = _H(input?.key);
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(
			"div",
			{
				className: A_1(
					g.ControllerInputDisplay,
					g.ChordInputDisplay,
					g.FieldInput,
				),
			},
			a.createElement(
				"div",
				{
					className: A_1(g.ChordControlBinding),
				},
				a.createElement(y.W, {
					button: s.g4.HomeMenu,
					className: g.PreviewHomeButton,
				}),
				a.createElement(
					"span",
					{
						className: g.PlusSign,
					},
					" + ",
				),
				a.createElement(h.UT, {
					className: g.ChordButton,
					controllerType: p.v3.ChordConfiguration?.controller_type,
					controllerModeInput: o,
					controllerSource: eSource,
				}),
			),
		),
		separator && a.createElement("div", null, "/"),
	);
}
function z(e) {
	v();
	const { actionSet, configLoaded } = q3(() => ({
		actionSet: p.v3.ChordConfiguration?.sets[0],
		configLoaded: p.v3.ChordConfiguration != null,
	}));
	const n = actionSet?.source_bindings;
	const a = C.oy.MostRecentlyActiveControllerIndex;
	const s = u.Fd.Get().GetController(a);
	const o = dI(undefined, undefined);
	let l = [];
	n?.forEach((t) => {
		t.active_group?.inputs?.forEach((r) => {
			r?.activators?.forEach((n) => {
				if (n?.bindings?.some((t) => yD(t, e))) {
					l.push({
						input: r,
						eMode: t?.active_group?.mode,
						eSource: t.key,
					});
				}
			});
		});
	});
	return {
		rgMatchingChords: l,
		rgFlatBindingOptions: o,
		controller: s,
		configLoaded: configLoaded,
	};
}
export function Gn(e) {
	const { binding, onActivate } = e;
	const { rgMatchingChords, rgFlatBindingOptions, controller, configLoaded } =
		z(binding);
	if (configLoaded) {
		if (rgMatchingChords.length == 0) {
			return a.createElement(
				"div",
				{
					className: g.LargeChordRow,
				},
				a.createElement(
					WContext.Provider,
					{
						value: {
							controller: controller,
							rgBindingOptions: rgFlatBindingOptions,
						},
					},
					a.createElement(
						l.$n,
						{
							onClick: onActivate,
							className: g.SettingsDialogButton,
						},
						Localize("#ControllerChordSummary_Unbound"),
						" ",
					),
				),
			);
		} else {
			return a.createElement(
				o.Z,
				{
					className: A_1(g.LargeChordRow, g.NoButton),
					onActivate: onActivate,
					focusable: true,
				},
				a.createElement(
					WContext.Provider,
					{
						value: {
							controller: controller,
							rgBindingOptions: rgFlatBindingOptions,
						},
					},
					rgMatchingChords.map((e, t) =>
						a.createElement(L, {
							key: e.input.toString() + t,
							input: e.input,
							eMode: e.eMode,
							eSource: e.eSource,
							separator: t < rgMatchingChords.length - 1,
						}),
					),
				),
			);
		}
	} else {
		return null;
	}
}
export function Lr(e) {
	const { binding, fallbackTextToken } = e;
	const { rgMatchingChords, rgFlatBindingOptions, controller, configLoaded } =
		z(binding);
	if (configLoaded && rgMatchingChords.length != 0) {
		return a.createElement(
			"span",
			{
				className: g.InlineChordContainer,
			},
			rgMatchingChords.map((e, t) =>
				a.createElement(
					"span",
					{
						key: e.input.toString() + t,
					},
					a.createElement(
						"div",
						{
							className: A_1(g.InlineChordControlBinding),
						},
						a.createElement(y.W, {
							button: s.g4.HomeMenu,
							className: g.InlineChordButton,
						}),
						a.createElement(
							"span",
							{
								className: g.PlusSign,
							},
							" + ",
						),
						a.createElement(h.UT, {
							className: g.InlineChordButton,
							controllerType: p.v3.ChordConfiguration?.controller_type,
							controllerModeInput: _H(e.input?.key),
							controllerSource: e.eSource,
						}),
					),
					t < rgMatchingChords.length - 1 && a.createElement("div", null, "/"),
				),
			),
		);
	} else {
		return a.createElement("span", null, Localize(fallbackTextToken));
	}
}
