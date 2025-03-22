var n = require(/*webcrack:missing*/ "./41230.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./43014.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require("./64608.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require("./22091.js");
var d = require("./83314.js");
var A = require("./62486.js");
var p = require("./85360.js");
var g = require("./11625.js");
var h = require("./52192.js");
var C = require("./46422.js");
var _ = require(/*webcrack:missing*/ "./85243.js");
var f = require("./55489.js");
var b = require("./57565.js");
var y = require("./53622.js");
var S = require("./31319.js");
const w = a.createContext(null);
function B() {
	const e = a.useContext(w);
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
	const { activator: t } = e;
	let r = [];
	t.bindings.forEach((e, t) => {
		let n = (function (e, t) {
			const r = B();
			v();
			const n = p.v3.ChordConfiguration?.sets[0];
			const i = r.rgBindingOptions;
			if (e.controller_action?.action !== undefined) {
				return (0, h.JD)(
					e.controller_action,
					p.v3.ChordConfiguration?.sets,
					n?.layers,
				);
			}
			let a = i?.find((t) => (0, A.q8)(e, t.data));
			if (a) {
				if (
					e.key_binding_data?.friendly_name_utf8 &&
					typeof a.label == "string"
				) {
					return (0, m.we)(
						"#ControllerBinding_Binding_FriendlyName",
						e.key_binding_data.friendly_name_utf8,
						(0, m.we)(a.label),
					);
				}
				let t = typeof a.label == "string" ? a.label : undefined;
				if (t?.charAt(0) == "#") {
					return (0, m.we)(a.label);
				} else {
					return a.label;
				}
			}
			return "unknown";
		})(e);
		if (p.v3.ChordConfiguration?.controller_type == 4) {
			if (n == "Next") {
				n = (0, m.we)("#ControllerActionKey_BrightnessUp");
			} else if (n == "Prev") {
				n = (0, m.we)("#ControllerActionKey_BrightnessDown");
			}
		}
		if (n) {
			if (r.length == 0) {
				r.push(n);
			} else {
				r[0] += ", " + n;
			}
		}
	});
	if (r.length == 0) {
		return null;
	}
	let n = "";
	if (t.activation != 1 && t.activation != 2 && t.activation != 3) {
		n = (0, A.bj)(A.VD[t.activation].id);
	}
	return a.createElement(
		"div",
		{
			className: g.ChordControl,
		},
		a.createElement(
			"div",
			{
				className: (0, c.A)(g.ActivatorText, g.ChordControlActivation),
			},
			n,
			" ",
		),
		a.createElement(
			"div",
			{
				className: (0, c.A)(g.ActivatorText, g.ChordControlBinding),
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
	const { input: t, eMode: r, eSource: n, showBindingName: i } = e;
	v();
	if (r == null) {
		return null;
	}
	const o = (0, h._H)(t?.key);
	let l = t?.activators;
	if (t?.activators?.length > 1) {
		l = t?.activators.slice(0, 1);
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
				key: t.key,
				className: (0, c.A)(g.ControllerInputDisplay, g.ChordInputDisplay),
			},
			a.createElement(
				"div",
				{
					className: (0, c.A)(g.ChordControlBinding),
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
					eMode: r,
					eSource: n,
					bPreview: true,
				}),
			),
			a.createElement(
				"div",
				{
					className: g.ChordControlContainer,
				},
				(i ?? true) && m,
			),
		);
	}
}
const M = (0, n.PA)(function (e) {
	const { sourcesFilter: t } = e;
	v();
	const r = p.v3.ChordConfiguration?.sets[0];
	const n = t == null ? r?.source_bindings : t(r?.source_bindings);
	const i = n[0]?.active_group ? n[0]?.active_group?.mode : undefined;
	const o = i == 4 || i == 7;
	const l = p.v3.ChordConfiguration?.controller_type;
	let m = [];
	n?.forEach((e) => {
		let t = e?.active_group?.inputs.filter(
			(e) => e.activators.length > 0 && (0, h.nQ)(l, e.key) && e.key != 68,
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
						className: (0, c.A)(g.ControllerInputDisplay),
					},
					a.createElement(
						"div",
						{
							className: (0, c.A)(g.ChordControlBinding),
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
								className: (0, c.A)(g.ActivatorText, g.ChordControlActivation),
							},
							"",
							" ",
						),
						a.createElement(
							"div",
							{
								className: (0, c.A)(g.ActivatorText, g.ChordControlBinding),
							},
							a.createElement(
								"span",
								{
									style: {
										maxWidth: "400px",
									},
								},
								(0, A.GW)(A.k$[i].id),
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
	const { controllerSource: t } = e;
	return a.createElement(M, {
		sourcesFilter: (e) => {
			if (!e) {
				return [];
			}
			return e.filter((e) => e.key == t).sort((e) => e.key);
		},
	});
}
function R(e) {
	let t = (function (e) {
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
	(0, S.pw)();
	(0, C.LC)();
	if (!(0, i.q3)(() => p.v3.ChordConfiguration)) {
		return null;
	}
	const e = C.oy.MostRecentlyActiveControllerIndex;
	const t = u.Fd.Get().GetController(e);
	const r = (0, d.dI)(undefined, undefined);
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
				className: (0, c.A)(g.ChordSummary),
			},
			a.createElement(
				o.Z,
				{
					className: (0, c.A)(g.ControllerConfiguratorSummary, s),
					focusable: false,
				},
				a.createElement(
					"div",
					{
						className: g.ChordControlsTitle,
					},
					(0, m.we)("#ControllerChord_GuideButtonShortcuts"),
				),
				n &&
					a.createElement(
						w.Provider,
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
export const Xw = (0, n.PA)(function (e) {
	const t = e.visible ? _.I5.Notification : null;
	(0, f.Bx)(t, "ControllerChordSummary");
	if (e.visible) {
		return a.createElement(O, null);
	} else {
		return null;
	}
});
function L(e) {
	const { input: t, eMode: r, eSource: n, separator: i } = e;
	v();
	if (!t || !r) {
		return null;
	}
	const o = (0, h._H)(t?.key);
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(
			"div",
			{
				className: (0, c.A)(
					g.ControllerInputDisplay,
					g.ChordInputDisplay,
					g.FieldInput,
				),
			},
			a.createElement(
				"div",
				{
					className: (0, c.A)(g.ChordControlBinding),
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
					controllerSource: n,
				}),
			),
		),
		i && a.createElement("div", null, "/"),
	);
}
function z(e) {
	v();
	const { actionSet: t, configLoaded: r } = (0, i.q3)(() => ({
		actionSet: p.v3.ChordConfiguration?.sets[0],
		configLoaded: p.v3.ChordConfiguration != null,
	}));
	const n = t?.source_bindings;
	const a = C.oy.MostRecentlyActiveControllerIndex;
	const s = u.Fd.Get().GetController(a);
	const o = (0, d.dI)(undefined, undefined);
	let l = [];
	n?.forEach((t) => {
		t.active_group?.inputs?.forEach((r) => {
			r?.activators?.forEach((n) => {
				if (n?.bindings?.some((t) => (0, h.yD)(t, e))) {
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
		configLoaded: r,
	};
}
export function Gn(e) {
	const { binding: t, onActivate: r } = e;
	const {
		rgMatchingChords: n,
		rgFlatBindingOptions: i,
		controller: s,
		configLoaded: u,
	} = z(t);
	if (u) {
		if (n.length == 0) {
			return a.createElement(
				"div",
				{
					className: g.LargeChordRow,
				},
				a.createElement(
					w.Provider,
					{
						value: {
							controller: s,
							rgBindingOptions: i,
						},
					},
					a.createElement(
						l.$n,
						{
							onClick: r,
							className: g.SettingsDialogButton,
						},
						(0, m.we)("#ControllerChordSummary_Unbound"),
						" ",
					),
				),
			);
		} else {
			return a.createElement(
				o.Z,
				{
					className: (0, c.A)(g.LargeChordRow, g.NoButton),
					onActivate: r,
					focusable: true,
				},
				a.createElement(
					w.Provider,
					{
						value: {
							controller: s,
							rgBindingOptions: i,
						},
					},
					n.map((e, t) =>
						a.createElement(L, {
							key: e.input.toString() + t,
							input: e.input,
							eMode: e.eMode,
							eSource: e.eSource,
							separator: t < n.length - 1,
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
	const { binding: t, fallbackTextToken: r } = e;
	const {
		rgMatchingChords: n,
		rgFlatBindingOptions: i,
		controller: o,
		configLoaded: l,
	} = z(t);
	if (l && n.length != 0) {
		return a.createElement(
			"span",
			{
				className: g.InlineChordContainer,
			},
			n.map((e, t) =>
				a.createElement(
					"span",
					{
						key: e.input.toString() + t,
					},
					a.createElement(
						"div",
						{
							className: (0, c.A)(g.InlineChordControlBinding),
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
							controllerModeInput: (0, h._H)(e.input?.key),
							controllerSource: e.eSource,
						}),
					),
					t < n.length - 1 && a.createElement("div", null, "/"),
				),
			),
		);
	} else {
		return a.createElement("span", null, (0, m.we)(r));
	}
}
