var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require("./84056.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require(/*webcrack:missing*/ "./41230.js");
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require("./78567.js");
var u = m;
var d = require("./62486.js");
var A = require("./85360.js");
var p = require("./61277.js");
var g = require("./52192.js");
var h = require("./78057.js");
var C = require("./46422.js");
var _ = require(/*webcrack:missing*/ "./31084.js");
var f = require(/*webcrack:missing*/ "./69164.js");
var b = require("./6630.js");
var y = require(/*webcrack:missing*/ "./88750.js");
var S = require(/*webcrack:missing*/ "./46108.js");
var w = require("./13869.js");
var B = require("./10606.js");
var v = require("./22091.js");
var I = require("./18057.js");
var E = require("./35488.js");
var M = require(/*webcrack:missing*/ "./4690.js");
var T = require("./84914.js");
var R = require("./45309.js");
var k = require(/*webcrack:missing*/ "./83599.js");
var D = require("./87928.js");
var N = D;
var F = require("./12307.js");
var G = require("./2353.js");
var O = require("./21105.js");
var P = require("./18875.js");
var L = require(/*webcrack:missing*/ "./52451.js");
var z = require("./96593.js");
const x = [
	"#FFFFFF",
	"#E4E4E4",
	"#AAAAAA",
	"#787878",
	"#434343",
	"#222222",
	"#0000AD",
	"#0045AD",
	"#0074AD",
	"#00ADAD",
	"#33AD69",
	"#00AD3D",
	"#00AD00",
	"#48B119",
	"#74AD00",
	"#96AD00",
	"#ADA200",
	"#AD5D00",
	"#AD3A00",
	"#AD0000",
	"#AD0051",
	"#AD007F",
	"#AD00AD",
	"#6800AD",
	"#4800AD",
];
const U = [
	"#939393",
	"#787878",
	"#434343",
	"#232323",
	"#000000",
	"#000055",
	"#002163",
	"#002E4D",
	"#145252",
	"#006652",
	"#00663D",
	"#2C5800",
	"#2D4400",
	"#425800",
	"#555500",
	"#665200",
	"#552A00",
	"#4D0000",
	"#3D0000",
	"#4D001F",
	"#58002C",
	"#4D004C",
	"#420058",
	"#210063",
];
const W = "";
const V = x[0];
const H = U[3];
let j = null;
var q;
(function (e) {
	e[(e.Icon = 0)] = "Icon";
	e[(e.Color = 1)] = "Color";
})((q ||= {}));
const Q = (e) => {
	const [t, r] = n.useState(q.Icon);
	const [i, a] = n.useState(e.selectedIcon?.icon_filename);
	const [o, l] = n.useState(e.selectedIcon?.color_foreground ?? W);
	const [c, m] = n.useState(e.selectedIcon?.color_background ?? W);
	const [u, d] = n.useState(false);
	const A = e.selectedIcon?.icon_filename != null;
	const p = t == q.Icon;
	const g = t == q.Color;
	const h = i != null;
	const C = n.useRef(undefined);
	const _ = () => {
		if (e.onCancel) {
			e.onCancel();
		}
		if (e.closeModal) {
			e.closeModal();
		}
	};
	const b = () => {
		switch (t) {
			case q.Icon:
				_();
				break;
			case q.Color:
				r(q.Icon);
		}
		return true;
	};
	const y = () => {
		if (h) {
			switch (t) {
				case q.Icon:
					r(q.Color);
					break;
				case q.Color:
					if (e.onOK) {
						e.onOK({
							icon_filename: i,
							color_foreground: o,
							color_background: c,
						});
					}
					if (e.closeModal) {
						e.closeModal();
					}
			}
		}
	};
	const w = () => {
		j = i;
	};
	const v =
		t == q.Icon
			? (0, S.we)("#ControllerConfigurator_IconPicker_Title")
			: (0, S.we)("#ControllerConfigurator_IconPicker_PickColor_Title");
	return n.createElement(
		B.eV,
		{
			className: N.IconPickerDialog,
			closeModal: _,
			onCancel: b,
		},
		n.createElement(s.Y9, null, v),
		n.createElement(
			s.nB,
			null,
			t == q.Icon &&
				n.createElement(Z, {
					appID: e.appID,
					selectedFilename: i,
					onIconChange: (e) => {
						if (e != i) {
							a(e);
							if (!u) {
								l(W);
								m(W);
							}
						}
						C?.current?.TakeFocus();
						r(q.Color);
					},
				}),
			t == q.Color &&
				n.createElement(Y, {
					appID: e.appID,
					iconFilename: i,
					foreground: o,
					background: c,
					onColorChange: (e, t) => {
						l(e);
						m(t);
						d(true);
					},
					onIconClick: () => r(q.Icon),
					onResetToSystemColors: () => C.current?.TakeFocus(),
				}),
		),
		n.createElement(
			s.wi,
			{
				className: N.Footer,
			},
			n.createElement(
				f.Z,
				{
					className: N.FooterButtons,
					navEntryPreferPosition: M.iU.PREFERRED_CHILD,
				},
				n.createElement(
					s.jn,
					{
						navRef: C,
						disabled: !h,
						preferredFocus: h,
						onClick: () => {
							w();
							y();
						},
					},
					g
						? (0, S.we)("#Button_Done")
						: (0, S.we)("#ControllerConfigurator_IconPicker_Next"),
				),
				n.createElement(
					s.$n,
					{
						disabled: !A,
						onClick: () => {
							if (A) {
								w();
								if (e.onRemove) {
									e.onRemove();
								}
								if (e.closeModal) {
									e.closeModal();
								}
							}
						},
						className: "Destructive",
					},
					(0, S.we)("#ControllerConfigurator_IconPicker_RemoveIcon"),
				),
				n.createElement(
					s.$n,
					{
						onClick: () => {
							w();
							b();
						},
						preferredFocus: !h,
					},
					p ? (0, S.we)("#Button_Cancel") : (0, S.we)("#ActionButtonLabelBack"),
				),
			),
		),
	);
};
const Z = (e) => {
	const t =
		(0, L.vJ)(() => P.eA.Get().LoadIconsForApp(e.appID), [e.appID]) === true;
	const r = (0, L.vJ)(() => P.eA.Get().LoadIconsForApp(0), []) === true;
	const i = P.dS.filter(
		(t) => P.eA.Get().FilenamesForCategory(t, e.appID).length > 0,
	);
	const a = P.eA.Get().BFilenameExists(e.selectedFilename, e.appID)
		? e.selectedFilename
		: j;
	const s = i.map((t) => {
		let r = (0, P.ZC)(t);
		if (t == P.PP.AppIcons) {
			r = z.tw.GetAppOverviewByAppID(e.appID)?.display_name ?? r;
		}
		return {
			id: P.PP[t],
			title: r,
			content: n.createElement(J, {
				category: t,
				appID: e.appID,
				onSelect: e.onIconChange,
				filenameToHighlight: e.selectedFilename,
				filenameToAutofocus: a,
			}),
		};
	});
	let o = a == null ? P.PP.AppIcons : P.eA.Get().CategoryForFilename(a);
	const [l, c] = n.useState(P.PP[o]);
	const m = s.find((e) => e.id == l) ? l : s[0].id;
	return n.createElement(
		"div",
		{
			className: N.TabbedPageBleed,
		},
		t &&
			r &&
			n.createElement(F.xC, {
				tabs: s,
				activeTab: m,
				onShowTab: c,
				autoFocusContents: a == null,
			}),
	);
};
const Y = (e) => {
	const t = e.foreground == W && e.background == W;
	let r = e.foreground ?? "";
	if (r == "") {
		r = V;
	}
	let i = e.background ?? "";
	if (i == "") {
		i = H;
	}
	return n.createElement(
		f.Z,
		{
			className: N.ColorPickerStep,
		},
		n.createElement(
			f.Z,
			{
				focusable: false,
				className: N.Preview,
				onActivate: e.onIconClick,
			},
			n.createElement(ee, {
				iconScale: 0.5,
				appID: e.appID,
				filenameOrURI: e.iconFilename,
				foreground: e.foreground,
				background: e.background,
			}),
		),
		n.createElement(
			f.Z,
			{
				className: N.ColorPickers,
			},
			n.createElement(K, {
				label: (0, S.we)("#ControllerConfigurator_IconPicker_ForegroundColor"),
				colors: x,
				selectedColor: e.foreground,
				onColorChange: (t) => e.onColorChange && e.onColorChange(t, i),
			}),
			n.createElement(K, {
				label: (0, S.we)("#ControllerConfigurator_IconPicker_BackgroundColor"),
				colors: U,
				selectedColor: e.background,
				onColorChange: (t) => e.onColorChange && e.onColorChange(r, t),
			}),
			!t &&
				n.createElement(
					s.xh,
					{
						onClick: () => {
							if (e.onColorChange) {
								e.onColorChange(W, W);
							}
							if (e.onResetToSystemColors) {
								e.onResetToSystemColors();
							}
						},
						highlightOnFocus: false,
						bottomSeparator: "none",
					},
					(0, S.we)("#ControllerConfigurator_IconPicker_ResetToSystemTheme"),
				),
		),
	);
};
const K = (e) =>
	n.createElement(
		s.D0,
		{
			childrenLayout: "below",
			label: e.label,
			bottomSeparator: "none",
			highlightOnFocus: false,
		},
		n.createElement(
			f.Z,
			{
				className: N.ColorPickerColors,
				autoFocus: e.autoFocus,
				navEntryPreferPosition: M.iU.PREFERRED_CHILD,
			},
			e.colors.map((t) =>
				n.createElement(X, {
					key: t,
					color: t,
					onSelect: () => e.onColorChange && e.onColorChange(t),
					selected: t == e.selectedColor,
				}),
			),
		),
	);
const X = (e) => {
	const t = n.useRef(undefined);
	return n.createElement(f.Z, {
		focusable: true,
		navRef: t,
		className: (0, c.A)(N.ColorPickerColor, e.selected && N.Selected),
		style: {
			backgroundColor: e.color,
		},
		onFocus: e.onSelect,
		preferredFocus: e.selected,
		onMouseDown: (r) => {
			r.preventDefault();
			r.stopPropagation();
			if (e.onSelect) {
				e.onSelect();
			}
			t.current?.TakeFocus();
		},
	});
};
const J = (e) => {
	const t = P.eA.Get().FilenamesForCategory(e.category, e.appID);
	const r = (0, G.U)();
	return n.createElement(
		O.MS,
		{
			className: (0, c.A)(N.IconGridScrollable, r.strClassNamesForScrollable),
			onScroll: r.fnOnScroll,
			ref: r.refForScrollable,
			scrollIntoViewType: M.Yo.NoTransform,
		},
		n.createElement(
			f.Z,
			{
				className: N.IconGrid,
				navEntryPreferPosition: M.iU.MAINTAIN_X,
			},
			t.map((t) =>
				n.createElement($, {
					key: t,
					filename: t,
					appID: e.appID,
					onClick: () => e.onSelect(t),
					onFocus: () => (j = t),
					autoFocus: e.filenameToAutofocus == t,
					highlight: e.filenameToHighlight == t,
				}),
			),
		),
	);
};
const $ = (e) =>
	n.createElement(
		s.$n,
		{
			className: (0, c.A)(N.IconButton, e.highlight && N.Highlighted),
			onClick: e.onClick,
			noFocusRing: false,
			autoFocus: e.autoFocus,
			onGamepadFocus: e.onFocus,
		},
		n.createElement(ee, {
			filenameOrURI: e.filename,
			appID: e.appID,
		}),
	);
const ee = (e) => {
	let t = null;
	let r = false;
	const i = (0, P.j9)(e.filenameOrURI, e.appID);
	const a = e.filenameOrURI == i;
	const [s, o] = n.useState(false);
	const l = e.background == "" ? undefined : e.background;
	const m = e.foreground == "" ? undefined : e.foreground;
	const u = e.foreground != null && e.foreground.length > 0;
	if (e.filenameOrURI == null) {
		t = n.createElement(E.IconEmpty, null);
		r = true;
	} else if (i == null || s) {
		t = n.createElement(E.IconNotFound, null);
		r = true;
	} else {
		t = n.createElement(
			n.Fragment,
			null,
			n.createElement("div", {
				className: (0, c.A)(N.BindingIconImage, u && N.WithForeground),
				style: {
					backgroundImage: u
						? `url( "${i}" ), radial-gradient(${e.foreground}, ${e.foreground})`
						: `url("${i}")`,
					WebkitMaskImage: u ? `url("${i}")` : undefined,
				},
			}),
			a &&
				n.createElement("img", {
					style: {
						visibility: "hidden",
					},
					src: i,
					onError: () => o(true),
				}),
		);
	}
	return n.createElement(
		"div",
		{
			className: (0, c.A)(
				N.BindingIcon,
				r && N.Placeholder,
				e.background != null && N.WithBackground,
				e.foreground != null && N.WithForeground,
			),
			style: {
				"--touchmenuicon-bg": l,
				"--touchmenuicon-fg": m,
				"--touchmenuicon-scale": e.iconScale?.toString(),
			},
		},
		t,
	);
};
var te = require(/*webcrack:missing*/ "./31958.js");
var re = require("./53225.js");
var ne = require("./99452.js");
var ie = require("./46396.js");
var ae = require("./75140.js");
var se = require(/*webcrack:missing*/ "./54644.js");
var oe = require(/*webcrack:missing*/ "./11131.js");
var le = require("./34792.js");
var ce = require("./91703.js");
var me = require("./59396.js");
var ue = require("./61017.js");
var de = require("./44717.js");
var Ae = require(/*webcrack:missing*/ "./72476.js");
var pe = require("./60221.js");
var ge = require("./43014.js");
var he = require("./53622.js");
function Ce(e) {
	if ((0, Ae.CI)() && e.key.length > 1) {
		return e.key || e.code;
	} else {
		return e.code || e.key;
	}
}
function _e(e) {
	const { appid: t, onResult: r, ...i } = e;
	const [s, o] = n.useState(false);
	const [l, c] = n.useState(false);
	const m = n.useRef(undefined);
	n.useEffect(() => {
		if (s) {
			m.current = setInterval(() => {
				i.closeModal();
			}, 1000);
		} else {
			clearInterval(m.current);
		}
		return () => clearInterval(m.current);
	}, [s, i]);
	const u = (0, oe.R7)();
	n.useEffect(() => {
		const e = (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (!e.repeat) {
				c(true);
				if (e.key == "Escape") {
					o(true);
				} else {
					const r = (0, g.ot)(Ce(e));
					if (r != 0) {
						(0, ue.Xg)(t, r);
					}
				}
			}
		};
		const r = (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (e.key == "Escape") {
				o(false);
				const r = (0, g.ot)(Ce(e));
				if (r != 0) {
					(0, ue.Xg)(t, r);
				}
			}
			if (l) {
				i.closeModal();
			}
		};
		const n = (e) => {
			e.preventDefault();
			c(true);
			(0, de.ri)(t, (0, g.Sp)(e.button));
			i.closeModal();
		};
		const s = u.ownerWindow;
		s.addEventListener("keydown", e);
		s.addEventListener("keyup", r);
		s.addEventListener("mousedown", n);
		const m = SteamClient.Input.RegisterForControllerInputMessages(
			(e, r, n, s, m) => {
				if (r <= a.H.GAMEPAD_BUTTON_LAST) {
					if (n) {
						c(true);
						if (r == a.H.GAMEPAD_BUTTON_B) {
							o(true);
						} else {
							(0, pe.z8)(t, (0, g._N)(r));
						}
					} else if (!n) {
						if (r == a.H.GAMEPAD_BUTTON_B) {
							o(false);
							(0, pe.z8)(t, (0, g._N)(r));
						}
						if (l) {
							i.closeModal();
						}
					}
				}
			},
		);
		return () => {
			s.removeEventListener("keydown", e);
			s.removeEventListener("keyup", r);
			s.removeEventListener("mousedown", n);
			m.unregister();
		};
	}, [u.ownerWindow, t, l, i, e]);
	const d = A.v3.EditingConfigurationControllerIndex;
	n.useEffect(() => {
		SteamClient.Input.RegisterForControllerStateChanges((e) => {
			const r = e.find((e) => e.unControllerIndex == d);
			if (!r) {
				return;
			}
			const n = (e) => {
				c(true);
				(0, pe.z8)(t, e);
				i.closeModal();
			};
			if (r.sLeftPadX > 10000) {
				n(17);
			} else if (r.sLeftPadX < -10000) {
				n(16);
			} else if (r.sLeftPadY > 10000) {
				n(14);
			} else if (r.sLeftPadY < -10000) {
				n(15);
			} else if (r.ulButtons & 131072) {
				n(9);
			} else if (r.sRightPadX > 10000 || r.sRightStickX > 10000) {
				n(25);
			} else if (r.sRightPadX < -10000 || r.sRightStickX < -10000) {
				n(24);
			} else if (r.sRightPadY > 10000 || r.sRightStickY > 10000) {
				n(22);
			} else if (r.sRightPadY < -10000 || r.sRightStickY < -10000) {
				n(23);
			} else if (r.ulButtons & 262144) {
				n(10);
			} else if (r.ulButtons & 256) {
				n(14);
			} else if (r.ulButtons & 2048) {
				n(15);
			} else if (r.ulButtons & 1024) {
				n(16);
			} else if (r.ulButtons & 512) {
				n(17);
			}
		});
		return () => {
			SteamClient.Input.UnregisterForControllerStateChanges();
		};
	}, [t, d, i]);
	return n.createElement(
		B.eV,
		{
			onCancel: () => !l,
			...i,
		},
		n.createElement(
			f.Z,
			{
				autoFocus: true,
				onKeyDown: undefined,
			},
			n.createElement(
				"div",
				{
					className: me.ContainerDiv,
				},
				(0, S.PP)(
					"#ControllerConfigurator_ChooseBinding_Listener",
					n.createElement(he.W, {
						button: ge.g4.B,
						className: me.InlineGlyph,
					}),
				),
			),
		),
	);
}
var fe = require(/*webcrack:missing*/ "./49455.js");
export const tG = new k.wd("ControllerConfigurator");
function ye(e) {
	return A.v3.FilterText((0, S.we)(e));
}
export const ih = (0, l.PA)(function (e) {
	const {
		appid: t,
		sourcesFilter: r,
		actionset_section: a,
		rgBackupSources: s,
		selectedSource: o,
		selectedInput: l,
	} = e;
	const c = (0, oe.R7)();
	const m = (0, i.W6)();
	const u =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const p = v.Fd.Get().GetController(u)?.eControllerType;
	const [h] = (0, le.VI)("steam_input_configurator_error_msg_enable");
	if (h && A.v3.EditingConfiguration?.error_msg?.length > 0) {
		(0, w.pg)(
			n.createElement(B.o0, {
				strTitle: (0, S.we)("#ControllerConfigurator_ErrorMsg_Title"),
				strDescription: A.v3.EditingConfiguration?.error_msg,
				bAlertDialog: true,
			}),
			c.ownerWindow ?? window,
		);
	}
	if (l) {
		A.v3.SetControllerConfiguratorFocusInput(l);
	}
	const _ = A.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const b = A.v3.ControllerConfiguratorLayerSetIndex;
	const y = A.v3.EditingConfiguration?.sets[_];
	const E = y == null ? undefined : y.layers[b];
	const R = E ?? y;
	n.useEffect(() => {
		if (R?.source_bindings === undefined) {
			m.replace(I.BV.GamepadUI.ControllerConfigurator.Main(t));
		}
	}, [R?.source_bindings, t, m]);
	const k = T.N;
	const D = n.useMemo(() => {
		let e = r == null ? R?.source_bindings : r(R?.source_bindings);
		s?.forEach((t) => {
			if ((0, g.sn)(p, t)) {
				let r = {
					key: t,
				};
				if (e?.findIndex((e) => e?.key == t) < 0) {
					e.push(r);
				}
			}
		});
		return e?.map((e, r) =>
			(0, g.sn)(p, e.key)
				? n.createElement(
						n.Fragment,
						{
							key: r,
						},
						n.createElement($W, {
							baseActionSet: y,
							layerActionSet: E,
							eControllerSource: e.key,
							group: e?.active_group,
							appid: t,
							actionset_section: a,
							showInputs: !d.G9.includes(e.active_group?.mode),
							modeShift: false,
							autoFocus: e.key == o,
						}),
						e.active_group?.mode_shift_source_group !== undefined &&
							n.createElement($W, {
								baseActionSet: y,
								layerActionSet: E,
								eControllerSource: e.key,
								group: e?.active_group?.mode_shift_source_group,
								appid: t,
								actionset_section: a,
								showInputs: !d.G9.includes(
									e.active_group?.mode_shift_source_group?.mode,
								),
								modeShift: true,
								autoFocus: e.key == o,
							}),
					)
				: null,
		);
	}, [R?.source_bindings, p, r, s, a, t, y, E, o]);
	if (R == null) {
		return null;
	} else {
		return n.createElement(
			"div",
			null,
			n.createElement(
				f.Z,
				{
					onButtonDown: k,
					retainFocus: true,
					navEntryPreferPosition: M.iU.PREFERRED_CHILD,
				},
				D,
			),
		);
	}
});
Array.from(
	{
		length: 30,
	},
	(e, t) => ({
		eMode: t,
	}),
);
export function oW(e) {
	return n.createElement(
		s.D0,
		{
			className: u.GroupSectionHeaderField,
			label: n.createElement(s.iK, null, e.label),
			childrenContainerWidth: "fixed",
			bottomSeparator: "standard",
		},
		e.children,
	);
}
export const Zm = (0, l.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: i,
		group: a,
		appid: o,
	} = e;
	const l = d.Dd[i].id;
	const c = (0, d.ND)(l) ?? (0, g.Xt)(l);
	const m = (0, S.we)("#ControllerConfigurator_SourceMode_Group_Behavior", c);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			s.D0,
			{
				label: m,
				childrenContainerWidth: "fixed",
				bottomSeparator: "standard",
			},
			n.createElement(Ie, {
				baseActionSet: t,
				layerActionSet: r,
				eControllerSource: i,
				group: a,
				simpleView: true,
				appid: o,
				menuLabel: m,
			}),
		),
	);
});
function ve(e, t, r, i) {
	const a = e.gameAction;
	const o = d.k$[e.eMode].id;
	const l = d.Dd[t].id;
	let m;
	m = e.strDisplay
		? e.strDisplay
		: a?.action.display_name
			? a.action.display_name
			: (0, d.GW)(o, i) || (0, g.Xt)(o);
	let A = a == null ? (0, d.fU)(o, l) : undefined;
	let p = n.createElement("svg", {
		className: u.ModeSelectDropDownIcon,
	});
	if (a != null) {
		p = ((e) =>
			e.bMutatedActionMode
				? n.createElement(E.HierarchyRowEnd, {
						className: (0, c.A)(u.ModeSelectDropDownIcon, u.SIAPIActionMutated),
					})
				: n.createElement(E.SIAPIAction, {
						className: u.ModeSelectDropDownIcon,
					}))(e);
	} else {
		const t = (0, g._Q)(e.eMode)
			? u.ModeSelectDropDownIcon
			: (0, c.A)(u.ModeSelectDropDownIcon, u.XInputOutput);
		p = (0, g.rw)(e.eMode, t);
	}
	const h = e.bMutatedActionMode ? u.MutatedActionMode : "";
	return {
		label: n.createElement(s.aZ, {
			title: m,
			description: A,
			descriptionVisibility: "when-expanded",
			icon: p,
			iconVisibility: "when-expanded",
			strTitleClassNames: r,
			strClassNames: h,
		}),
		data: e,
		strOptionClass: u.HideOnMinified,
	};
}
const Ie = (0, l.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: a,
		group: o,
		simpleView: l,
		appid: m,
		modeShift: _,
		autoFocus: b,
	} = e;
	const y = (0, oe.R7)();
	const B = (0, i.W6)();
	h.H.GetAppDetails(m);
	const I =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const T = v.Fd.Get().GetController(I)?.eControllerType;
	const k = r
		? t.source_bindings?.find((e) => e.key == a)?.active_group
		: undefined;
	const D = a != 5;
	const N = D && (0, d.Bv)(a, t, r, l, o);
	const F = D && (0, d.ON)(a, t, r, m, l, o);
	const G = (0, d.KB)(a);
	const O = !(0, g.kF)(o?.mode) && l ? N.concat(F) : N.concat(G.concat(F));
	const P = k?.mode != null;
	const L = k?.mode
		? (O.find((e) => e.eMode == k?.mode)?.strDisplay ??
			(0, d.ND)(d.k$[k?.mode].id))
		: "";
	const z = D && (0, d.zB)(a, t, r, L);
	const x = N.shift && z.concat(O);
	const U = k && o?.mode == 0 ? k : o;
	const W = U ? d.jg[U.mode] : undefined;
	const V = U ? (0, d.X)(U.settings, W, a, T) : undefined;
	const H = (V != null && V.length > 0) || U?.mode_shift;
	const j = k?.mode && (!o || o?.mode == 0);
	const q = k?.mode && k?.mode == o?.mode;
	const Q = q || j ? u.BindingFromParentSet : "";
	let Z =
		x &&
		x.map(function (e) {
			return ve(e, a, j || q ? u.ModeFromParentSet : "", _);
		});
	const Y = (0, s.Ld)(Z).find((e) => (0, d.QQ)(o, e.data))?.data;
	if (!_ && Y) {
		const e = {
			label: (0, S.we)("#ControllerBinding_ModeShift_Create"),
			data: {
				eMode: Y.eMode,
				bMutatedActionMode: true,
				modeShift: true,
			},
		};
		Z.push(e);
	}
	const K =
		a == 10
			? function (e) {
					p.z.AddInterstitialToQueue({
						eInterstitial: p.H.k_eGyro,
						appid: m,
						onOK: e,
						onSkipped: e,
					});
					return false;
				}
			: undefined;
	const X = (e, n) => {
		const i = {
			action_set_key: t.key,
			action_set_layer_key: r?.key,
			source_binding_key: a,
			mode_shift: U?.mode_shift,
		};
		i.new_mode = e.data.eMode;
		i.modeid = e.data.modeid;
		i.new_name = n ?? undefined;
		i.enable_virtual_menu_support = true;
		i.mode_shift = _;
		const s = e.data.gameAction;
		if (s != null) {
			const e = s.layerSet ?? s.baseSet;
			i.new_game_action = {
				action_set_key: e.key,
				action_key: s.action.key,
			};
		}
		tG.Debug("onChangeModeOption", e.data, i);
		A.v3.SetControllerSourceMode(m, i);
	};
	const J = (e) => {
		if (e.data?.modeShift) {
			((e, n) => {
				const i = {
					action_set_key: t.key,
					action_set_layer_key: r?.key,
					source_binding_key: a,
					mode_shift: U?.mode_shift,
				};
				i.new_mode =
					e.data.eMode == 0 || (0, g.kF)(e.data.eMode) ? 1 : e.data.eMode;
				i.modeid = e.data.modeid;
				i.new_name = n ?? undefined;
				i.enable_virtual_menu_support = true;
				i.mode_shift = true;
				const s = e.data.gameAction;
				if (s != null) {
					const e = s.layerSet ?? s.baseSet;
					i.new_game_action = {
						action_set_key: e.key,
						action_key: s.action.key,
					};
				}
				tG.Debug("onCreateModeShift", e.data, i);
				A.v3.SetControllerSourceMode(m, i);
			})(e, undefined);
		} else if ((0, g.kF)(e.data.eMode) && !e.data.modeid) {
			((e) => {
				const t = n.createElement(R.Qj, {
					title: (0, S.we)(
						"#ControllerConfigurator_CreateVirtualMenuDialog_Title_1",
					),
					description: (0, S.we)(
						"#ControllerConfigurator_CreateVirtualMenuDialog_Description_1",
					),
					isValid: (e) => e.length != 0,
					onResult: (t) => {
						X(e, t);
					},
					onCancel: () => {},
				});
				(0, w.pg)(t, y.ownerWindow ?? window, {});
			})(e);
		} else {
			X(e, undefined);
		}
	};
	const $ = () => {
		const e = (0, g.kF)(k.mode) ? (0, g.Kw)(k.modeid) : undefined;
		const t =
			e?.friendlyname && e?.friendlyname.length
				? e.friendlyname
				: (0, d.GW)(d.k$[e?.mode]?.id);
		const r = e
			? (0, S.we)("#ControllerConfigurator_SourceMode_Layer_Title", t)
			: undefined;
		X(
			(0, s.Ld)(Z).find((e) => (0, d.QQ)(k, e.data, (0, g.kF)(k.mode))),
			r,
		);
	};
	const ee =
		e.onSouthpawSwap != null
			? (0, S.we)("#ControllerConfigurator_SourceMode_Swap_Left_With_Right")
			: undefined;
	return n.createElement(
		f.Z,
		{
			className: (0, c.A)(u.BindingButtons),
			navEntryPreferPosition: M.iU.PREFERRED_CHILD,
			onSecondaryButton: P
				? j
					? $
					: () => {
							J({
								label: "",
								data: {
									eMode: 0,
								},
							});
						}
				: null,
			onSecondaryActionDescription: P
				? j
					? (0, S.we)(
							"#ControllerConfigurator_SourceMode_Group_ConvertToEditable",
						)
					: (0, S.we)(
							"#ControllerConfigurator_SourceMode_Group_RevertToInherited",
						)
				: null,
			onOptionsActionDescription: ee,
			onOptionsButton: () => {
				if (e.onSouthpawSwap) {
					e.onSouthpawSwap();
				}
			},
			autoFocus: b,
		},
		n.createElement(s.ZU, {
			rgOptions: Z,
			onChange: J,
			selectedOption: Y,
			onMenuWillOpen: K,
			menuLabel: e.menuLabel,
			strDropDownButtonClassName: Q,
		}),
		(H || j) &&
			n.createElement(
				s.$n,
				{
					className: u.BindingOptionsButton,
					onClick: (e) => (H ? void (0, ie.qb)(m, B, t, r, o, a, W, T) : $()),
				},
				n.createElement(E.Settings, null),
			),
	);
});
const Ee = new Map([
	[1, 2],
	[3, 12],
	[4, 13],
	[18, 17],
	[6, 7],
	[8, 9],
	[2, 1],
	[12, 3],
	[13, 4],
	[17, 18],
	[7, 6],
	[9, 8],
]);
export const $W = (0, l.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: o,
		group: l,
		appid: m,
		actionset_section: p,
		virtualmenu_section: h,
		modeShift: _,
		autoFocus: f,
	} = e;
	const b = e.showInputs ?? true;
	const y =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const [B, E] = n.useState(v.Fd.Get().GetController(y));
	const M = B?.eControllerType;
	const T = B?.unCapabilities;
	const R = (0, oe.R7)();
	const k = (0, i.W6)();
	const D = l?.inputs ?? [];
	const N = D.filter(
		(e, t) =>
			(e.activators.length != 0 &&
				!(0, g.B8)(M, e.key) &&
				!d.SW[e.key]?.dupe) ||
			(!d.SW[e.key]?.macro &&
				((!d.SW[e.key]?.actionset_action && !p) ||
					(d.SW[e.key]?.actionset_action && p)) &&
				(0, g.Ek)(l?.mode, e.key) &&
				(0, g.Zq)(e, d.SW[e.key]?.only_show_if_bound) &&
				t === D.findIndex((t) => t.key === e.key) &&
				!(0, g.nr)(e) &&
				(h ||
					(!h &&
						(o != 5 || !d.SW[e.key]?.dupe) &&
						(0, g.SG)(o, e.key) &&
						(0, g.nQ)(M, e.key) &&
						(0, g.hq)(M, o, e.key) &&
						(0, g.Uz)(T, e.key) &&
						(0, g.sv)(o, l.mode, l.settings, e.key)))),
	).sort((e, t) => ((0, g.S1)(e.key) > (0, g.S1)(t.key) ? 1 : -1));
	const F = d.Dd[o]?.id;
	const G = h
		? (0, S.we)("#ControllerConfigurator_VirtualMenu_MenuType")
		: ((0, d.ND)(F) ?? (0, g.Xt)(F));
	const O = r
		? t.source_bindings?.find((e) => e.key == o)?.active_group
		: undefined;
	const P =
		O?.mode &&
		(!l || l?.mode == 0 || (O?.mode == l?.mode && O?.modeid != l?.modeid));
	const L = o;
	const z = ((e, t, r) => {
		let n = Ee.get(e);
		if (n != null && t == 2) {
			if (e == 4) {
				n = 3;
			} else if (e == 3) {
				n = 4;
			}
		}
		if (t != 2 || (e != 4 && e != 3)) {
			return n;
		}
	})(L, M);
	const x = l?.mode;
	const U = t.source_bindings?.find((e) => e.key == z)?.active_group;
	const W = U?.mode;
	const V = x == 0 && W == 0;
	const H = z != null && (0, g.Xe)(z, x);
	const j = L != null && (0, g.Xe)(L, W);
	const q =
		z != null && !V && H && j
			? () => {
					const e = {
						action_set_key_a: t.key,
						action_set_layer_key_b: r?.key,
						source_a: L,
						action_set_key_b: t.key,
						action_set_layer_key_a: r?.key,
						source_b: z,
					};
					A.v3.SwapControllerConfigurationSourceModes(m, e);
				}
			: undefined;
	const Q = N.filter((e) => !(0, g.nr)(e)).map((e, i) =>
		n.createElement(
			n.Fragment,
			{
				key: i,
			},
			(0, g.im)(M, e.key) &&
				n.createElement(oW, {
					label: (0, d.RW)(e.key),
				}),
			n.createElement(aK, {
				baseActionSet: t,
				layerActionSet: r,
				eControllerSource: o,
				input: e,
				eControllerMode: l.mode,
				indentLevel: 1,
				bModeInherited: P,
				modeid: l.modeid,
				modeShift: _,
			}),
		),
	);
	const Z = (0, d.wm)(h, F, G, _);
	const Y = (0, g.kF)(l?.mode);
	const K = Y;
	let X;
	let J;
	let $ = false;
	if (Y) {
		const e =
			l.mode == 11 ? l.settings?.find((e) => e.key == 73)?.int_value : 0;
		const i = (0, ne.DL)(l.modeid, O?.modeid);
		let a = l?.settings?.find((e) => e?.key == 73);
		let s = l.mode == 14 ? 30 : 29;
		$ = i >= 29 && (e == 0 || i - s < e);
		const c = l.mode == 11 && a?.int_value != 0 ? a?.int_value + s : 84;
		J = D.filter((e) => (0, g.nr)(e) && e?.key < c).sort((e, t) =>
			(0, g.S1)(e.key) > (0, g.S1)(t.key) ? 1 : -1,
		);
		if (
			!J.some((e) =>
				e?.activators?.some((e) =>
					e?.bindings?.some((e) => {
						const t =
							e?.key_binding_data?.icon_data?.color_background?.toUpperCase() ??
							"";
						const r =
							e?.key_binding_data?.icon_data?.color_foreground?.toUpperCase() ??
							"";
						return (t != "" && t != ae.Od) || (r != "" && r != ae.dH);
					}),
				),
			)
		) {
			for (let e of J) {
				for (let t of e?.activators ?? []) {
					for (let e of t?.bindings ?? []) {
						if (e?.key_binding_data?.icon_data != null) {
							e.key_binding_data.icon_data.color_background = "";
							e.key_binding_data.icon_data.color_foreground = "";
						}
					}
				}
			}
		}
		X = J.map((e, i) =>
			n.createElement(
				n.Fragment,
				{
					key: i,
				},
				(0, g.im)(M, e.key) &&
					n.createElement(oW, {
						label: (0, d.RW)(e.key),
					}),
				n.createElement(aK, {
					baseActionSet: t,
					layerActionSet: r,
					eControllerSource: o,
					input: e,
					eControllerMode: l.mode,
					indentLevel: 0,
					bModeInherited: P,
					modeid: l.modeid,
					modeShift: _,
				}),
			),
		);
	}
	return n.createElement(
		s.G5,
		null,
		o != 5 &&
			n.createElement(
				oW,
				{
					label: Z,
				},
				!h &&
					F &&
					n.createElement(Ie, {
						baseActionSet: t,
						layerActionSet: r,
						eControllerSource: o,
						group: l,
						appid: m,
						menuLabel: Z,
						modeShift: _,
						autoFocus: f,
						onSouthpawSwap: q,
					}),
				h &&
					n.createElement(ne.L3, {
						baseActionSet: t,
						layerActionSet: r,
						eControllerSource: o,
						group: l,
						appid: m,
						menuLabel: Z,
						modeid: l?.modeid,
						modeShift: _,
						autoFocus: f,
					}),
			),
		b &&
			n.createElement(
				n.Fragment,
				null,
				Y && X,
				K &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(
							s.D0,
							{
								highlightOnFocus: false,
							},
							n.createElement(
								s.$n,
								{
									disabled: !$,
									onClick: () => {
										const e = (0, ne.DL)(l.modeid, O?.modeid);
										if (e) {
											const n = {
												type: a.N.k_EControllerBindingType_ControllerAction,
												controller_action: {
													action: 43,
												},
											};
											const i = {
												action_set_key: t.key,
												action_set_layer_key: r?.key,
												source_binding_key: o,
												input_key: e,
												activator_index: 0,
												binding_index: 0,
												modeid: l?.modeid,
												mode_shift: _,
												new_binding: n,
												source_mode: l.mode,
											};
											A.v3.SetControllerInputBinding(m, i);
											A.v3.SaveEditingConfiguration(m);
											A.v3.EnsureEditingConfiguration();
											A.v3.SetEditedInputBinding(n);
											A.v3.SetActiveInputBinding(i);
											A.v3.Navigate(
												k,
												I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(m),
											);
										}
									},
									className: (0, c.A)(
										u.BindingButtons,
										u.StandardPlusIconButtonWidth,
									),
								},
								(0, S.we)("#ControllerConfigurator_VirtualMenu_AddBindingSlot"),
							),
						),
						n.createElement(
							s.D0,
							{
								highlightOnFocus: false,
							},
							n.createElement(
								s.$n,
								{
									onClick: () => {
										(0, w.pg)(
											n.createElement(Ve, {
												appid: m,
												actionSet: t,
												actionSetLayer: r,
												controllerType: M,
												source: o,
												group: l,
												filteredInputs: J,
											}),
											R.ownerWindow ?? window,
										);
									},
									className: (0, c.A)(
										u.BindingButtons,
										u.StandardPlusIconButtonWidth,
									),
								},
								(0, S.we)("#ControllerConfigurator_VirtualMenu_ReorderSlots"),
							),
						),
						n.createElement(oW, {
							label: (0, S.we)(
								"#ControllerConfigurator_Source_AdditionalCommands_Subheader_Title",
							),
						}),
					),
				Q,
			),
	);
});
export const Qr = (0, l.PA)(function (e) {
	const {
		setting: t,
		onChange: r,
		bottomSeparator: i,
		localizationOverride: a,
		showDesc: o,
		showOptionsDescs: l,
		looseSetting: m,
		layout: A,
		disabled: p,
	} = e;
	const { int_value: g, int_min: h, int_max: C, toggle: f, choices: b } = t;
	const w = a || (0, d.ix)(t.id);
	const B = t.valueSuffixToken ? (0, S.we)(t.valueSuffixToken) : undefined;
	const v =
		t?.parentset_setting && t?.parentset_setting.int_value == t.int_value
			? u.BindingFromParentSet
			: null;
	const I = h < C ? h : C;
	const E = h < C ? C : h;
	const M = t.humanDisplayMin ?? I;
	const T = t.humanDisplayMax ?? E;
	const [R, k] = n.useState(g);
	const D = o
		? (0, d.ix)(t.id + "_Description", (0, te.Fu)(R, I, E, M, T))
		: undefined;
	const [N, F] = n.useState(false);
	n.useEffect(() => {
		k(g);
	}, [g]);
	const G = Math.trunc(
		t.parentset_setting ? t.parentset_setting.int_value : t.int_default,
	);
	const O = t.int_value != G;
	const P = n.useCallback(() => {
		if (O) {
			r(G);
		}
	}, [O, G, r]);
	const L = n.useCallback(
		(e) => {
			const t = n.createElement(
				y.tz,
				null,
				n.createElement(
					y.kt,
					{
						disabled: !O,
						onSelected: P,
					},
					(0, S.we)("#ResetToDefault"),
				),
			);
			(0, _.lX)(t, e);
		},
		[O, P],
	);
	const z = m ? undefined : u.SettingMaxWidth;
	if (f) {
		return n.createElement(s.y4, {
			className: (0, c.A)(u.SettingField, v, z),
			label: w,
			description:
				D &&
				n.createElement(
					"div",
					{
						className: u.SettingFieldDescription,
					},
					D,
				),
			checked: g == 1,
			onChange: (e) => r(e ? 1 : 0),
			bottomSeparator: i,
			onSecondaryButton: P,
			onSecondaryActionDescription: O
				? (0, S.we)("#ResetToDefault")
				: undefined,
			onContextMenu: L,
			disabled: p,
		});
	}
	if (b != null) {
		const e = b.map((e) => ({
			label: n.createElement(s.aZ, {
				title: (0, d.Fq)(e.id),
				description: l && (0, d.Aj)(t.id, e.id),
				descriptionVisibility: "when-expanded",
			}),
			data: e.value,
		}));
		return n.createElement(s.Vb, {
			strClassName: (0, c.A)(u.SettingField, v, z),
			label: w,
			description: n.createElement(
				"div",
				{
					className: u.SettingFieldDescription,
				},
				D,
			),
			rgOptions: e,
			selectedOption: t.int_value,
			onChange: (e) => r(e.data),
			bottomSeparator: i,
			onSecondaryButton: P,
			onSecondaryActionDescription: O
				? (0, S.we)("#ResetToDefault")
				: undefined,
			onContextMenu: L,
			layout: A,
			disabled: p,
		});
	}
	{
		const e = (e, t) => {
			k(t == 3 ? (0, te.Fu)(e, M, T, I, E) : e);
		};
		const a = (e, t) => {
			r(t == 3 ? (0, te.Fu)(e, M, T, I, E) : e);
		};
		const o = (e) => e >= I && e <= E;
		const l = (e) =>
			"" +
			(e != null
				? Number.parseFloat((0, te.Fu)(e, I, E, M, T).toFixed(3))
				: null) +
			(t.valueSuffixToken ? B : "");
		return n.createElement(s.d3, {
			className: (0, c.A)(u.SettingField, v, z),
			label: w,
			description: n.createElement(
				"div",
				{
					className: u.SettingFieldDescription,
				},
				D,
			),
			value: R,
			onChange: e,
			onChangeComplete: a,
			renderValue: l,
			min: I,
			max: E,
			editableValue: true,
			validValues: o,
			valueSuffix: B,
			bottomSeparator: i,
			resetValue: G,
			dpadStep: N ? 1 : Math.abs(E - I) * 0.025,
			onOptionsButton: () => F(!N),
			layout: A,
			disabled: p,
			onOptionsActionDescription: N
				? (0, S.we)("#ControllerSettingSlider_Coarse")
				: (0, S.we)("#ControllerSettingSlider_Fine"),
		});
	}
});
const Re = (0, l.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: i,
		eControllerModeInput: a,
		activatorIndex: s,
		mapKey: o,
		bottomSeparator: l,
		appid: c,
		modeid: m,
		modeShift: u,
	} = e;
	const d = A.v3.StableAppId;
	const p = c ?? d;
	const g = A.v3.CurrentEditedActivatorSettings.find((e) => e.key == o);
	if (g == null) {
		return null;
	} else {
		return n.createElement(Qr, {
			setting: g,
			onChange: (e) => {
				const n = {
					action_set_key: t.key,
					action_set_layer_key: r?.key,
					source_binding_key: i,
					input_key: a,
					activator_index: s,
					new_activation: undefined,
					new_setting: {
						key: g.key,
						int_value: Math.trunc(e),
					},
					mode_shift: u,
					modeid: m,
				};
				A.v3.SetControllerInputActivator(p, n);
				A.v3.SaveEditingConfiguration(p);
				A.v3.EnsureEditingConfiguration();
			},
			indent: 2,
			bottomSeparator: l,
		});
	}
});
export const aK = (0, l.PA)(function (e) {
	const t = (0, i.W6)();
	const r = A.v3.StableAppId;
	const {
		input: l,
		eControllerMode: m,
		eControllerSource: d,
		baseActionSet: p,
		layerActionSet: h,
		modeid: C,
		modeShift: b,
		indentLevel: B,
		minimalPresentation: v,
		...T
	} = e;
	const k = l.activators
		.map((e) => {
			const t = {
				...e,
			};
			t.bindings = e.bindings.filter((e) => !e.mode_shift);
			return t;
		})
		.filter((e) => e.bindings.length > 0);
	const D = k.length > 1 || A.v3.EditingConfiguration?.controller_type == 43;
	const N = (B ?? 0) + (D ? 1 : 0);
	const F = m == 16 && l.key == 67;
	const G = (0, ce.Cu)(r, d, l.key);
	if (k.length == 0) {
		return n.createElement(Ne, {
			key: -1,
			...e,
			activatorIndex: -1,
			bModeInherited: e.bModeInherited,
			modeShift: e.modeShift,
		});
	}
	const O = k[0];
	const P = O.bindings?.length > 0 ? O.bindings[0] : null;
	const L = (0, g.kF)(m);
	const z =
		(L && (0, g.R0)(l.key)) || A.v3.EditingConfiguration?.controller_type == 43;
	const x = P?.mode_shift;
	const U = P?.game_action?.action_key;
	const W = P?.key_binding_data?.icon_data?.icon_filename != "";
	const V = P?.controller_action?.action == 43;
	const H = !V;
	const j = H || (V && L);
	const q = (H || j) && W ? P?.key_binding_data?.icon_data : undefined;
	const Z = n.createElement(g.VF, {
		eControllerType: A.v3.EditingConfiguration?.controller_type,
		eInput: (0, g._H)(l.key),
		eMode: m,
		eSource: d,
	});
	const Y = (e) => {
		const t = O?.bindings[0];
		t.key_binding_data.friendly_name_utf8 = e;
		const n = {
			action_set_key: p.key,
			action_set_layer_key: h?.key,
			source_binding_key: d,
			input_key: l.key,
			activator_index: 0,
			binding_index: 0,
			modeid: C,
			mode_shift: b,
		};
		if (t != null) {
			n.new_binding = t;
		}
		A.v3.SetControllerInputBinding(r, n);
		A.v3.SaveEditingConfiguration(r);
		A.v3.EnsureEditingConfiguration();
	};
	const K = (e) => {
		const i = n.createElement(
			"div",
			{
				className: u.FlexFlowRow,
			},
			Z,
		);
		const s = n.createElement(
			y.tz,
			{
				label: i,
			},
			!F &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						y.kt,
						{
							onSelected: () => {
								let e = k[0];
								if (l.inherited_from_parentset) {
									const t = (e, t) =>
										(0, o.h5)(() => {
											const n = {
												action_set_key: p.key,
												action_set_layer_key: h?.key,
												source_binding_key: d,
												input_key: l.key,
												activator_index: 0,
												binding_index: e,
												modeid: C,
												mode_shift: b,
											};
											if (t != null) {
												n.new_binding = t;
											}
											A.v3.SetControllerInputBinding(r, n);
											A.v3.SaveEditingConfiguration(r);
											A.v3.EnsureEditingConfiguration();
										});
									e?.bindings?.forEach((e) => t(-1, e));
								}
								M0(r, d, l, p, h, -1, undefined, C, b);
								const n = {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 43,
									},
								};
								const i = {
									action_set_key: p.key,
									action_set_layer_key: h?.key,
									source_binding_key: d,
									input_key: l.key,
									activator_index: l.activators?.length ?? 0,
									binding_index: 0,
									modeid: C,
									mode_shift: b,
									new_binding: n,
									source_mode: m,
								};
								A.v3.SetControllerInputBinding(r, i);
								A.v3.SaveEditingConfiguration(r);
								A.v3.EnsureEditingConfiguration();
								A.v3.SetEditedInputBinding(n);
								A.v3.SetActiveInputBinding(i);
								A.v3.Navigate(
									t,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(r),
								);
							},
						},
						(0, S.we)(
							"#ControllerConfigurator_Activator_ContextMenuItem_AddActivator_Title",
						),
					),
					n.createElement(
						y.kt,
						{
							onSelected: () => {
								(function (e, t, r, n, i, a, s, l) {
									(0, o.h5)(() => {
										for (let o = a - 1; o >= 0; --o) {
											const a = {
												action_set_key: n.key,
												action_set_layer_key: i?.key,
												source_binding_key: t,
												input_key: r.key,
												activator_index: o,
												modeid: s,
												mode_shift: l,
												new_activation: undefined,
											};
											A.v3.SetControllerInputActivator(e, a);
										}
									});
								})(r, d, l, p, h, k.length, C, b);
							},
						},
						(0, S.we)(
							"#ControllerConfigurator_Activator_ContextMenuItem_RemoveAllActivators_Title",
						),
					),
				),
			!U &&
				!x &&
				n.createElement(
					R.G,
					{
						title: (0, S.we)(
							"#ControllerConfigurator_Activator_ContextMenuItem_RenameGrouped_Activators_Title",
						),
						onResult: Y,
					},
					n.createElement(R.Qj, {
						title: (0, S.we)(
							"#ControllerConfigurator_ActionSets_RenameVirtualMenuDialog_Title_1",
							P?.key_binding_data?.friendly_name_utf8,
						),
						description: "",
						isValid: () => true,
						inputOptions: {
							placeholder: (0, S.we)(
								"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
								P?.key_binding_data?.friendly_name_utf8,
							),
						},
					}),
				),
		);
		(0, _.lX)(s, e);
	};
	const X = n.createElement(
		"div",
		{
			className: (0, c.A)(u.FlexFlowRow, u.GroupedActivators),
		},
		Z,
		n.createElement(
			"div",
			{
				className: (0, c.A)(u.ActivatorDesc, v && u.Minimal),
			},
			(0, S.we)("#ControllerConfigurator_Activators_Desc", k.length),
		),
	);
	const J = (e, t) => {
		const n = O?.bindings[e];
		const i = {
			...(n ?? {}),
			key_binding_data: {
				...(n?.key_binding_data ?? {}),
				icon_data: t ?? {
					icon_filename: "",
					color_background: "",
					color_foreground: "",
				},
			},
		};
		const a = {
			action_set_key: p.key,
			action_set_layer_key: h?.key,
			source_binding_key: d,
			input_key: l.key,
			activator_index: 0,
			binding_index: e,
			modeid: C,
			mode_shift: b,
			new_binding: i,
		};
		A.v3.SetControllerInputBinding(r, a);
		A.v3.SaveEditingConfiguration(r);
		A.v3.EnsureEditingConfiguration();
	};
	return n.createElement(
		n.Fragment,
		null,
		D &&
			n.createElement(
				s.D0,
				{
					label: X,
					inlineWrap: "keep-inline",
					onContextMenu: A.v3.IsUpdatingEditingConfiguration
						? undefined
						: (e) => K(e),
					indentLevel: B,
					childrenContainerWidth: e.childrenContainerWidth ?? "fixed",
				},
				n.createElement(
					f.Z,
					{
						className: (0, c.A)(u.BindingButtons, z && u.HasIcons),
						retainFocus: true,
						navEntryPreferPosition: M.iU.PREFERRED_CHILD,
					},
					z &&
						n.createElement(
							s.$n,
							{
								onClick: (e) =>
									((e, t, r, i) => {
										(0, w.pg)(
											n.createElement(Q, {
												onOK: (t) => J(e, t),
												onRemove: () => J(e, undefined),
												appID: t,
												selectedIcon: r,
											}),
											i,
										);
									})(0, r, q, (0, se.uX)(e)),
								className: (0, c.A)(u.BindingButton, u.BindingIconButton),
								disabled: !H && !j,
								noFocusRing: false,
							},
							n.createElement(ee, {
								filenameOrURI: q?.icon_url ?? q?.icon_filename,
								background: q?.color_background,
								foreground: q?.color_foreground,
							}),
						),
					P?.key_binding_data?.friendly_name_utf8 &&
						n.createElement(
							"div",
							{
								className: u.BindingDisplayName,
							},
							n.createElement(
								"div",
								{
									className: (0, c.A)(u.FriendlyName, u.GroupedActivators),
								},
								P?.key_binding_data?.friendly_name_utf8,
							),
						),
					n.createElement(
						s.$n,
						{
							className: u.BindingOptionsButton,
							onClick: (e) => (v ? G() : K(e)),
						},
						n.createElement(E.Settings, null),
					),
				),
			),
		(!v || !D) &&
			k.map((t, r) =>
				n.createElement(Ne, {
					key: r,
					input: l,
					indentLevel: N,
					eControllerMode: m,
					eControllerSource: d,
					baseActionSet: p,
					layerActionSet: h,
					activatorIndex: r,
					activator: t,
					bModeInherited: e.bModeInherited,
					modeid: C,
					modeShift: b,
					bActivatorsGrouped: D,
					...T,
				}),
			),
	);
});
function De(e) {
	const {
		activatorIndex: t,
		bIsActivatorSetToCycle: r,
		bIsExtraBinding: i,
	} = e;
	if (i) {
		return n.createElement(
			"div",
			{
				className: u.ActivatorDesc,
			},
			(0, S.we)("#ControllerConfigurator_Activator_SubCommand_Desc"),
		);
	} else {
		return n.createElement(
			"div",
			{
				className: u.ActivatorDesc,
			},
			(0, S.we)(
				r
					? "#ControllerConfigurator_Activator_Command_Cycles_Desc"
					: "#ControllerConfigurator_Activator_Command_Desc",
				t + 1,
			),
		);
	}
}
const Ne = (0, l.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: l,
		eControllerMode: m,
		input: p,
		activatorIndex: h,
		activator: B,
		bModeInherited: T,
		bottomSeparator: k,
		modeid: D,
		modeShift: N,
		labelAlignment: F,
	} = e;
	const G = A.v3.EditingConfiguration?.sets;
	const O = !(0, d.K7)(G);
	const P =
		A.v3.EditingConfigurationControllerIndex ??
		C.oy.MostRecentlyActiveControllerIndex;
	const L = v.Fd.Get().GetController(P)?.eControllerType;
	const z = p.inherited_from_parentset ? u.BindingFromParentSet : null;
	const x = F ?? "left";
	const U = A.v3.StableAppId;
	const W = (0, i.W6)();
	const V = (e, n) =>
		(0, o.h5)(() => {
			const i = {
				action_set_key: t.key,
				action_set_layer_key: r?.key,
				source_binding_key: l,
				input_key: p.key,
				activator_index: h,
				binding_index: e,
				modeid: D,
				mode_shift: N,
			};
			if (n != null) {
				i.new_binding = n;
			}
			A.v3.SetControllerInputBinding(U, i);
			A.v3.SaveEditingConfiguration(U);
			A.v3.EnsureEditingConfiguration();
		});
	const H = B && B?.activation != 1;
	const j = B && h > 0;
	const q = m == 16 && p.key == 67;
	const Z = j || q || H;
	const Y = (e) => {
		const t = e > 0;
		const r = ne && t;
		const n = B?.bindings[e]?.controller_action?.action == 29;
		const i = B?.bindings[e]?.controller_action?.action == 43;
		const a = t && i;
		const s = h >= 0 && e >= 0 && !i;
		const o = s || (i && (0, g.kF)(m));
		const l = Z || s || a || o;
		const c = s && B?.bindings[e]?.game_action?.action_key;
		const u = s && B?.bindings[e]?.mode_shift;
		(0, fe.w)(!u, "Mode shift bindings should not be handled here.");
		return {
			bIsExtraBinding: t,
			bIsBoundToEmptyBinding: i,
			bIsUnboundExtraBinding: a,
			bHasBinding: s,
			bAllowBindingRevert: l,
			bIsExtraBindingOnCycle: r,
			bIsBoundToEmptyAction: n,
			bAllowVirtualMenuOptions: o,
			bGameAction: c,
			bModeShift: u,
		};
	};
	const K = (e) => {
		const {
			bHasBinding: t,
			bIsUnboundExtraBinding: r,
			bIsBoundToEmptyBinding: n,
			bIsBoundToEmptyAction: i,
			bAllowVirtualMenuOptions: a,
		} = Y(e);
		if (!p.inherited_from_parentset && T) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_ResetToParentSet_Title";
		} else if (r) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_RemoveExtraBinding_Title";
		} else if (t || a) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_RemoveCommand_Title";
		} else if (H) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_ResetActivator_Title";
		} else if (j || q) {
			return "#ControllerConfigurator_Activator_ContextMenuItem_RemoveActivator_Title";
		} else {
			return "Unhandle Revert String";
		}
	};
	const X = (e) => {
		const {
			bIsExtraBinding: n,
			bHasBinding: i,
			bIsBoundToEmptyBinding: s,
			bIsUnboundExtraBinding: o,
			bAllowVirtualMenuOptions: c,
			bModeShift: m,
		} = Y(e);
		if (!p.inherited_from_parentset && T) {
			V(e, undefined);
			M0(U, l, p, t, r, h, undefined, D, N);
		} else if (o) {
			V(e, undefined);
		} else if (i || c) {
			if (m) {
				let n = {
					action_set_key: t.key,
					action_set_layer_key: r?.key,
					source: B?.bindings[e]?.mode_shift?.source,
					modeid: D,
					mode_shift_buttons_digital_io: [],
				};
				A.v3.SetControllerModeShiftBinding(U, n);
			} else {
				V(
					e,
					!s && e > 0
						? {
								type: a.N.k_EControllerBindingType_ControllerAction,
								controller_action: {
									action: 43,
								},
							}
						: undefined,
				);
			}
		} else if (H) {
			M0(U, l, p, t, r, h, 1, D, N);
		} else if (j || q) {
			M0(U, l, p, t, r, h, undefined, D, N);
		}
	};
	const J = (i, s) => {
		if (h == -1) {
			return;
		}
		const {
			bIsExtraBinding: o,
			bAllowBindingRevert: C,
			bIsExtraBindingOnCycle: f,
			bIsBoundToEmptyAction: b,
			bHasBinding: w,
			bGameAction: v,
			bModeShift: E,
		} = Y(i);
		const M = d.wn.filter((e) => e.value === B.activation);
		const T = n.createElement(
			"div",
			{
				className: (0, c.A)(
					u.FlexFlowRow,
					x == "right" && u.RightLabelAlignment,
				),
			},
			n.createElement(g.VF, {
				eControllerType: L,
				eInput: (0, g._H)(p.key),
				eMode: m,
				eSource: l,
			}),
			n.createElement(
				"div",
				{
					className: u.ActivatorText,
				},
				B == null || B.activation === 1 ? "" : (0, d.bj)(M[0].id),
			),
		);
		const k = q ? d.wn.filter((e) => !e.filter_alwayson) : d.wn;
		const F = n.createElement(
			y.tz,
			{
				label: T,
			},
			!o &&
				w &&
				n.createElement(
					y.Vs,
					{
						label: (0, d.bj)(M[0].id),
					},
					k.map((e) => {
						return n.createElement(
							y.kt,
							{
								key: e.value,
								onSelected:
									((i = e.value), () => M0(U, l, p, t, r, h, i, D, N)),
							},
							(0, d.bj)(e.id),
						);
						var i;
					}),
				),
			re &&
				!o &&
				w &&
				n.createElement(
					y.kt,
					{
						onSelected: ae,
					},
					(0, S.we)(
						"#ControllerConfigurator_Activator_ContextMenuItem_ActivatorSettings_Title",
					),
				),
			!o &&
				!v &&
				!j &&
				!E &&
				!e.bActivatorsGrouped &&
				n.createElement(
					R.G,
					{
						title: (0, S.we)(
							"#ControllerConfigurator_Activator_ContextMenuItem_Rename_Title",
						),
						onResult: function (e) {
							const n = B?.bindings[i];
							n.key_binding_data.friendly_name_utf8 = e;
							const a = {
								action_set_key: t.key,
								action_set_layer_key: r?.key,
								source_binding_key: l,
								input_key: p.key,
								activator_index: h,
								binding_index: i,
								modeid: D,
								mode_shift: N,
							};
							if (n != null) {
								a.new_binding = n;
							}
							A.v3.SetControllerInputBinding(U, a);
							A.v3.SaveEditingConfiguration(U);
							A.v3.EnsureEditingConfiguration();
						},
					},
					n.createElement(R.Qj, {
						title: (0, S.we)(
							"#ControllerConfigurator_ActionSets_RenameVirtualMenuDialog_Title_1",
							B?.bindings[i]?.key_binding_data?.friendly_name_utf8,
						),
						description: "",
						isValid: () => true,
						inputOptions: {
							placeholder: (0, S.we)(
								"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
								B?.bindings[i]?.key_binding_data?.friendly_name_utf8,
							),
						},
					}),
				),
			r &&
				!b &&
				n.createElement(
					y.kt,
					{
						onSelected: () => {
							ie(i);
						},
					},
					(0, S.we)(
						"#ControllerConfigurator_Activator_ContextMenuItem_ResetToEmpty_Title",
					),
				),
			C &&
				n.createElement(
					y.kt,
					{
						onSelected: () => {
							X(i);
						},
					},
					(0, S.we)(K(i)),
				),
			!q &&
				!o &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(y.K5, {
						key: "add-activator-separator",
					}),
					n.createElement(
						y.kt,
						{
							onSelected: () => {
								if (p.inherited_from_parentset) {
									B?.bindings?.forEach((e) => V(-1, e));
								}
								M0(U, l, p, t, r, -1, undefined, D, N);
								const e = {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 43,
									},
								};
								const n = {
									action_set_key: t.key,
									action_set_layer_key: r?.key,
									source_binding_key: l,
									input_key: p.key,
									activator_index: p.activators?.length ?? 0,
									binding_index: 0,
									modeid: D,
									mode_shift: N,
									new_binding: e,
									source_mode: m,
								};
								A.v3.SetControllerInputBinding(U, n);
								A.v3.SaveEditingConfiguration(U);
								A.v3.EnsureEditingConfiguration();
								A.v3.SetEditedInputBinding(e);
								A.v3.SetActiveInputBinding(n);
								A.v3.Navigate(
									W,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(U),
								);
							},
						},
						(0, S.we)(
							"#ControllerConfigurator_Activator_ContextMenuItem_AddActivator_Title",
						),
					),
					n.createElement(
						y.kt,
						{
							onSelected: () => {
								if (B?.bindings?.length > 0) {
									if (p.inherited_from_parentset) {
										B?.bindings?.forEach((e) => V(-1, e));
									}
								} else {
									V(-1, {
										type: a.N.k_EControllerBindingType_ControllerAction,
										controller_action: {
											action: 43,
										},
									});
								}
								const e = {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: {
										action: 43,
									},
								};
								V(-1, e);
								const n = {
									action_set_key: t.key,
									action_set_layer_key: r?.key,
									source_binding_key: l,
									input_key: p.key,
									activator_index: h,
									binding_index: B.bindings?.length ?? 0,
									modeid: D,
									mode_shift: N,
									new_binding: e,
									source_mode: m,
								};
								A.v3.SetControllerInputBinding(U, n);
								A.v3.SaveEditingConfiguration(U);
								A.v3.EnsureEditingConfiguration();
								A.v3.SetEditedInputBinding(e);
								A.v3.SetActiveInputBinding(n);
								A.v3.Navigate(
									W,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(U),
								);
							},
						},
						(0, S.we)(
							"#ControllerConfigurator_Activator_ContextMenuItem_AddExtraBinding_Title",
						),
					),
				),
		);
		(0, _.lX)(F, s);
	};
	const $ = d.av[B?.activation];
	const te = B == null ? undefined : (0, d.X)(B.settings, $, l, L);
	const re = te != null && te.length > 0;
	const ne = te?.find((e) => e.key == 102)?.int_value == 1;
	const ie = (e) => {
		V(e, {
			type: a.N.k_EControllerBindingType_ControllerAction,
			controller_action: {
				action: 29,
			},
		});
	};
	const ae = (e) => {
		let i = (0, se.uX)(e);
		A.v3.SetActiveInputActivator(B, $, l, L);
		(0, w.pg)(
			n.createElement(We, {
				activator: B,
				activatorIndex: h,
				baseActionSet: t,
				layerActionSet: r,
				eControllerSource: l,
				input: p,
				appid: U,
				modeid: D,
				modeShift: N,
			}),
			i,
			{
				fnOnClose: () => {
					const e = B == null ? undefined : (0, d.X)(B.settings, $, l, L);
					if (e?.find((e) => e.key == 102)?.int_value == 1 && ce?.length < 2) {
						V(-1, {
							type: a.N.k_EControllerBindingType_ControllerAction,
							controller_action: {
								action: 43,
							},
						});
					}
				},
			},
		);
		return true;
	};
	const oe = (e, n) => {
		const i = B?.bindings[e];
		const a = {
			...(i ?? {}),
			key_binding_data: {
				...(i?.key_binding_data ?? {}),
				icon_data: n ?? {
					icon_filename: "",
					color_background: "",
					color_foreground: "",
				},
			},
		};
		const s = {
			action_set_key: t.key,
			action_set_layer_key: r?.key,
			source_binding_key: l,
			input_key: p.key,
			activator_index: h,
			binding_index: e,
			modeid: D,
			mode_shift: N,
			new_binding: a,
		};
		A.v3.SetControllerInputBinding(U, s);
		A.v3.SaveEditingConfiguration(U);
		A.v3.EnsureEditingConfiguration();
	};
	const le = (i, o) => {
		const _ = []
			.concat(
				Fe(r?.key, (0, d.U$)(r, 2)),
				Fe(r?.key, (0, d.U$)(r, 1)),
				Fe(t?.key, (0, d.U$)(t, 2)),
				Fe(t?.key, (0, d.U$)(t, 1)),
				Pe,
				{
					label: "Action",
					options:
						((y = i),
						(v = O ? G : undefined),
						(T = t?.layers),
						d.X9.map((e) => {
							const t = {
								action: e.key,
							};
							if (e.set) {
								if (e.baseSet && v == null) {
									return;
								}
								if (!e.baseSet && T == null) {
									return;
								}
								t.action_set = {
									action_set_key: undefined,
									display: true,
									beep: true,
								};
							} else if (e.playerNumber) {
								t.change_player_number = {
									player_number: 0,
								};
							}
							const r =
								y?.controller_action?.action != e.key
									? (0, S.we)(e.id)
									: (0, g.JD)(y.controller_action, v, T);
							return {
								label: r ?? (0, g.Xt)(e.id),
								data: {
									type: a.N.k_EControllerBindingType_ControllerAction,
									controller_action: t,
								},
							};
						}).filter((e) => e != null)),
				},
			)
			.filter((e) => e != null);
		var y;
		var v;
		var T;
		const R = (0, s.Ld)(_);
		let F = R?.find((e) =>
			(0, d.q8)(o >= 0 ? B?.bindings[o] : undefined, e.data),
		);
		if (i?.controller_action?.action !== undefined && F) {
			F.data.controller_action = i.controller_action;
		}
		if (F) {
			F.data.key_binding_data = i?.key_binding_data;
		}
		const {
			bIsExtraBinding: P,
			bHasBinding: L,
			bAllowBindingRevert: V,
			bIsExtraBindingOnCycle: H,
			bAllowVirtualMenuOptions: q,
		} = Y(o);
		let Z = n.createElement(Oe, {
			dropDownValue: F,
			bHideFriendlyName: e.bActivatorsGrouped,
		});
		if (i?.type == a.N.k_EControllerBindingType_Modeshift) {
			return n.createElement(n.Fragment, null);
		}
		if (!L) {
			Z = (0, S.we)(
				"#ControllerConfigurator_Activator_ContextMenuItem_AddCommand_Title",
			);
		}
		const $ = (0, g.kF)(m);
		let te = -1;
		if ($ && p.key >= 29 && p.key <= 49) {
			te = p.key - 29;
		}
		const re = n.createElement(
			"div",
			{
				className: (0, c.A)(
					u.FlexFlowRow,
					H && u.ExtraBindingForCycle,
					x == "right" && u.RightLabelAlignment,
				),
			},
			H && n.createElement(E.HierarchyRowEnd, null),
			!e.bActivatorsGrouped &&
				n.createElement(g.VF, {
					eControllerType: A.v3.EditingConfiguration?.controller_type,
					eInput: (0, g._H)(p.key),
					eMode: m,
					eSource: l,
				}),
			e.bActivatorsGrouped &&
				n.createElement(De, {
					activatorIndex: h,
					bIsActivatorSetToCycle: ne,
					bIsExtraBinding: P,
				}),
			n.createElement(
				"div",
				{
					className: u.ActivatorText,
				},
				B == null ||
					B.activation === 1 ||
					(B.activation === 2 && p.key === 13 && (0, d.yQ)(l))
					? ""
					: (0, d.bj)(d.VD[B.activation].id) ||
							(0, g.Xt)(d.VD[B.activation].id),
			),
			false,
		);
		const ie = (e.indentLevel ?? 0) + (P && !H ? 2 : 0);
		const ae = r
			? t.source_bindings?.find((e) => e.key == l)?.active_group
			: undefined;
		if (
			$ &&
			!p.inherited_from_parentset &&
			!((e, t, r) => {
				if (r < 30 || r > 49) {
					return true;
				}
				const n = (0, g.Kw)(e);
				for (let e = 0; e < n.inputs.length; e++) {
					if (
						n.inputs[e].key == r &&
						n.inputs[e].activators?.length &&
						n.inputs[e].activators[0].bindings?.length
					) {
						return true;
					}
				}
				if (t) {
					const e = (0, g.Kw)(t);
					for (let t = 0; t < e.inputs.length; t++) {
						if (
							e.inputs[t].key >= r &&
							e.inputs[t].activators?.length &&
							e.inputs[t].activators[0].bindings?.length
						) {
							return true;
						}
					}
				}
				return false;
			})(D, ae?.modeid, p.key)
		) {
			return null;
		}
		const le = !e.bActivatorsGrouped && $ && (0, g.R0)(p.key) && !P && !j;
		const ce =
			(L || q) && i?.key_binding_data?.icon_data?.icon_filename != ""
				? i.key_binding_data.icon_data
				: undefined;
		return n.createElement(
			s.D0,
			{
				label: re,
				key: o < 0 ? 0 : o,
				id: `modeid-${D}-input-${b.$L(p.key)}-binding-${o}`,
				onContextMenu: A.v3.IsUpdatingEditingConfiguration
					? undefined
					: (e) => J(o, e),
				childrenContainerWidth: e.childrenContainerWidth ?? "fixed",
				indentLevel: ie,
				inlineWrap: "keep-inline",
				bottomSeparator: k,
				onFocusWithin: (e) => {
					if (e) {
						A.v3.SetVirtualMenuPreviewKey(te);
					}
				},
				onMouseOver: () => {
					if (C.oy.ActiveNavigationMode == C.DT.Cursor) {
						A.v3.SetVirtualMenuPreviewKey(te);
					}
				},
			},
			n.createElement(
				f.Z,
				{
					className: (0, c.A)(u.BindingButtons, le && u.HasIcons),
					retainFocus: true,
					navEntryPreferPosition: M.iU.PREFERRED_CHILD,
				},
				le &&
					n.createElement(
						s.$n,
						{
							onClick: (e) =>
								((e, t, r, i) => {
									(0, w.pg)(
										n.createElement(Q, {
											onOK: (t) => oe(e, t),
											onRemove: () => oe(e, undefined),
											appID: t,
											selectedIcon: r,
										}),
										i,
									);
								})(o, U, ce, (0, se.uX)(e)),
							className: (0, c.A)(u.BindingButton, u.BindingIconButton, z),
							disabled: !L && !q,
							noFocusRing: false,
						},
						n.createElement(ee, {
							filenameOrURI: ce?.icon_url ?? ce?.icon_filename,
							background: ce?.color_background,
							foreground: ce?.color_foreground,
						}),
					),
				n.createElement(
					s.$n,
					{
						onClick: () => {
							(() => {
								const e = {
									action_set_key: t.key,
									action_set_layer_key: r?.key,
									source_binding_key: l,
									source_mode: m,
									input_key: p.key,
									activator_index: h,
									binding_index: o,
									modeid: D,
									mode_shift: N,
								};
								A.v3.SetEditedInputBinding(i);
								A.v3.SetActiveInputBinding(e);
								A.v3.Navigate(
									W,
									I.BV.GamepadUI.ControllerConfigurator.ChooseBinding(U),
								);
							})();
						},
						className: (0, c.A)(u.BindingButton, z, !L && u.AddBindingText),
						onSecondaryButton: () => X(o),
						onSecondaryActionDescription: V ? (0, S.we)(K(o)) : undefined,
						onMenuButton: (e) =>
							((e) => {
								const a = {
									action_set_key: t.key,
									action_set_layer_key: r?.key,
									source_binding_key: l,
									source_mode: m,
									input_key: p.key,
									activator_index: h,
									binding_index: o,
									modeid: D,
									mode_shift: N,
								};
								A.v3.SetEditedInputBinding(i);
								A.v3.SetActiveInputBinding(a);
								(0, w.pg)(
									n.createElement(_e, {
										appid: U,
									}),
									e,
									{},
								);
							})((0, se.uX)(e)),
						onMenuActionDescription: (0, S.we)(
							"#ControllerConfigurator_Listen",
						),
						preferredFocus: true,
						autoFocus: A.v3.BControllerConfiguratorIsMatchingFocusInput(p.key),
					},
					Z,
				),
				n.createElement(
					s.$n,
					{
						className: u.BindingOptionsButton,
						disabled: !V,
						focusable: V,
						onClick: (e) => J(o, e),
					},
					n.createElement(E.Settings, null),
				),
			),
		);
	};
	const ce = B?.bindings;
	return n.createElement(
		n.Fragment,
		null,
		ce && ce.length != 0 ? ce.map((e, t) => le(e, t)) : [le(undefined, -1)],
	);
});
function Fe(e, t) {
	return t?.map((t) => ({
		label: n.createElement(
			"div",
			{
				className: u.GameActionName,
			},
			t.display_name,
		),
		data: {
			type: a.N.k_EControllerBindingType_GameAction,
			game_action: {
				action_set_key: e,
				action_key: t.key,
			},
		},
	}));
}
function Ge(e) {
	return n.createElement(
		"div",
		{
			className: u.BindingDisplayName,
		},
		n.createElement(
			"div",
			{
				className: u.FriendlyName,
			},
			ye(e.friendlyName),
		),
		n.createElement(
			"div",
			{
				className: u.Binding,
			},
			e.bindingLabel,
		),
	);
}
function Oe(e) {
	const { dropDownValue: t, bHideFriendlyName: r } = e;
	let i = t?.data;
	const a = A.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const s = A.v3.EditingConfiguration?.sets[a];
	let o = n.useMemo(() => {
		const e = A.v3.EditingConfiguration?.sets;
		const t = !(0, d.K7)(e);
		if (i?.controller_action?.action !== undefined) {
			return (0, g.JD)(i?.controller_action, t ? e : undefined, s?.layers);
		}
	}, [i, s]);
	if (o) {
		if (!r && i?.key_binding_data?.friendly_name_utf8) {
			return n.createElement(Ge, {
				friendlyName: i?.key_binding_data.friendly_name_utf8,
				bindingLabel: (0, S.we)(o),
			});
		} else {
			return n.createElement(n.Fragment, null, o);
		}
	}
	if (t?.label) {
		if (i?.key_binding_data?.friendly_name_utf8) {
			if (i?.game_action?.action_key) {
				if (i?.key_binding_data?.friendly_name_utf8.charAt(0) == "#") {
					return n.createElement(n.Fragment, null, t.label);
				} else {
					return n.createElement(
						n.Fragment,
						null,
						ye(i?.key_binding_data?.friendly_name_utf8),
					);
				}
			} else if (r) {
				return n.createElement(n.Fragment, null, (0, S.we)(t.label));
			} else {
				return n.createElement(Ge, {
					friendlyName: i?.key_binding_data.friendly_name_utf8,
					bindingLabel: (0, S.we)(t.label),
				});
			}
		}
		let e = typeof t.label == "string" ? t.label : undefined;
		if (e?.charAt(0) == "#") {
			return n.createElement(n.Fragment, null, (0, S.we)(t.label));
		} else {
			return n.createElement(n.Fragment, null, t.label);
		}
	}
	return null;
}
const Pe = [
	{
		label: "Keyboard",
		options: d.bu.map((e) => ({
			label: e.id,
			data: {
				type: a.N.k_EControllerBindingType_Key,
				keyboard_key: {
					key: e.key,
				},
			},
		})),
	},
	{
		label: "Mouse",
		options: d.Q7.map((e) =>
			e.button
				? {
						label: e.id,
						data: {
							type: a.N.k_EControllerBindingType_MouseButton,
							mouse_button: {
								button: e.key,
							},
						},
					}
				: e.wheel
					? {
							label: e.id,
							data: {
								type: a.N.k_EControllerBindingType_Mousewheel,
								mouse_wheel: {
									button: e.key,
								},
							},
						}
					: undefined,
		),
	},
	{
		label: "Gamepad",
		options: d.HL.map((e) => ({
			label: e.id,
			data: {
				type: a.N.k_EControllerBindingType_Gamepad,
				gamepad_button: {
					button: e.key,
				},
			},
		})),
	},
];
export function dI(e, t) {
	const r = []
		.concat(
			Fe(t?.key, (0, d.U$)(t, 2)),
			Fe(t?.key, (0, d.U$)(t, 1)),
			Fe(e?.key, (0, d.U$)(e, 2)),
			Fe(e?.key, (0, d.U$)(e, 1)),
			Pe,
		)
		.filter((e) => e != null);
	return (0, s.Ld)(r);
}
export function M0(e, t, r, n, i, a, s, l, c) {
	(0, o.h5)(() => {
		const o = {
			action_set_key: n.key,
			action_set_layer_key: i?.key,
			source_binding_key: t,
			input_key: r.key,
			activator_index: a,
			modeid: l,
			mode_shift: c,
			new_activation: undefined,
		};
		if (s != null) {
			o.new_activation = s;
		}
		A.v3.SetControllerInputActivator(e, o);
	});
}
export function zB(e, t, r, n, i, a, s, l) {
	(0, o.h5)(() => {
		const o = {
			action_set_key: n.key,
			action_set_layer_key: i?.key,
			source_binding_key: t,
			input_key: r.key,
			activator_index: a,
			enabled: s,
			mode_shift: l,
		};
		A.v3.SetControllerInputActivatorEnabled(e, o);
	});
}
export function es(e) {
	(0, o.h5)(() => {
		A.v3.SaveEditingConfiguration(e);
		A.v3.EnsureEditingConfiguration();
	});
}
function We(e) {
	const {
		activator: t,
		activatorIndex: r,
		baseActionSet: i,
		layerActionSet: a,
		eControllerSource: o,
		input: l,
		appid: c,
		modeid: m,
		modeShift: u,
	} = e;
	return n.createElement(
		B.eV,
		{
			onOK: e.closeModal,
			onCancel: e.closeModal,
		},
		n.createElement(
			s.Y9,
			null,
			(0, S.we)(
				"#ControllerConfigurator_Input_Settings",
				(0, d.bj)(d.VD[t?.activation]?.id),
			),
		),
		n.createElement(
			s.nB,
			null,
			n.createElement(
				s.a3,
				null,
				A.v3.CurrentEditedActivator.settings?.map((e, t) =>
					n.createElement(Re, {
						key: t,
						baseActionSet: i,
						layerActionSet: a,
						eControllerSource: o,
						eControllerModeInput: l.key,
						activatorIndex: r,
						mapKey: e.key,
						bottomSeparator: "standard",
						appid: c,
						modeid: m,
						modeShift: u,
					}),
				),
				n.createElement(
					s.X8,
					{
						alignItems: "center",
					},
					n.createElement(
						s.jn,
						{
							onClick: e.closeModal,
						},
						(0, S.we)("#Generic_Close"),
					),
				),
			),
		),
	);
}
const Ve = (0, l.PA)(function (e) {
	(0, C.LC)(false);
	const {
		appid: t,
		controllerType: r,
		source: i,
		group: a,
		filteredInputs: s,
		actionSet: o,
		actionSetLayer: l,
		closeModal: c,
	} = e;
	const [m, u] = n.useState([]);
	n.useEffect(() => {
		let e = [];
		s.forEach((t) => {
			e[t.key] = t.key;
		});
		u(e);
	}, [s]);
	if (m.length == 0) {
		return null;
	}
	const p = s
		.sort((e, t) => m[e.key] - m[t.key])
		.map((e, t) => {
			const s =
				e?.activators?.length > 0 &&
				e?.activators[0]?.bindings.length > 0 &&
				e?.activators[0]?.bindings[0]?.controller_action?.action != 43;
			const c = a.mode == 14 ? e.key - 29 : 2 + e.key - 30;
			let u;
			if (s) {
				let t = e?.activators[0]?.bindings[0];
				u = ye(t?.key_binding_data?.friendly_name_utf8);
				const r = dI(o, l);
				let i =
					s && r?.find((t) => (0, d.q8)(e?.activators[0]?.bindings[0], t.data));
				if (t?.controller_action?.action !== undefined && i) {
					i.data.controller_action = t.controller_action;
				}
				if (i) {
					i.data.key_binding_data = t?.key_binding_data;
				}
				u = n.createElement(Oe, {
					dropDownValue: i,
				});
			}
			const A =
				u ??
				n.createElement(g.VF, {
					eControllerType: r,
					eInput: (0, g._H)(e.key),
					eMode: a.mode,
					eSource: i,
				});
			return {
				key: e.key.toString(),
				label: A,
				icon: null,
				index: m[e.key],
				disabled: false,
				displayedIndex: c,
			};
		});
	return n.createElement(re.o, {
		title: (0, S.we)("#ControllerMode_ReorderInputs_Title"),
		items: p,
		onMoveRelative: (e, t) => {
			let r = m.findIndex((t) => t == e);
			let n = m.findIndex((r) => r == e + t);
			if (n < 29 || n > 49) {
				return false;
			}
			let i = [...m];
			let a = m[r];
			i[r] = m[n];
			i[n] = a;
			u(i);
			return true;
		},
		onReorderActionDescription: (0, S.we)(
			"#ControllerMode_ReorderInputs_Reorder",
		),
		onStopReorderActionDescription: (0, S.we)(
			"#ControllerMode_ReorderInputs_StopReorder",
		),
		closeModal: () => {
			let r = [];
			m.forEach((e, t) => {
				if (e == t || r.find((t) => t.new_key == e)) {
					return;
				}
				const n = {
					new_key: e,
					old_key: t,
				};
				r.push(n);
			});
			let n = {
				action_set_key: o.key,
				action_set_layer_key: l?.key,
				source_binding_key: i,
				mode_shift: false,
				modeid: a.modeid,
				swaps: r,
			};
			A.v3.ReOrderModeInputs(t, n);
			A.v3.SaveEditingConfiguration(t);
			A.v3.EnsureEditingConfiguration();
			if (e.closeModal) {
				e.closeModal();
			}
		},
	});
});
