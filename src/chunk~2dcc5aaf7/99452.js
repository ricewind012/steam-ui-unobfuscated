var n = require(/*webcrack:missing*/ "./41230.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./34792.js");
var s = require(/*webcrack:missing*/ "./49519.js");
var o = require(/*webcrack:missing*/ "./31084.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./88750.js");
var m = require("./64608.js");
var u = require("./35488.js");
var d = require("./10606.js");
var A = require("./13869.js");
var p = require(/*webcrack:missing*/ "./46108.js");
var g = require("./45309.js");
var h = require("./46422.js");
var C = require("./83314.js");
var _ = require("./84914.js");
var f = require("./62486.js");
var b = require("./52192.js");
var y = require("./85360.js");
var S = require("./94899.js");
var w = require("./75706.js");
var B = w;
var v = require(/*webcrack:missing*/ "./90765.js");
var I = require(/*webcrack:missing*/ "./4690.js");
var E = require("./22091.js");
var M = require("./46396.js");
var T = require("./75140.js");
var R = require(/*webcrack:missing*/ "./54644.js");
var k = require(/*webcrack:missing*/ "./11131.js");
function D(e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: n,
		group: a,
		appid: h,
		actionset_section: C,
	} = e;
	const _ = (0, s.W6)();
	if (a == null) {
		return null;
	}
	const S = (0, b.Kw)(a?.modeid);
	if (!S) {
		return null;
	}
	if (S.mode != 11 && S.mode != 14 && S.mode != 19) {
		return null;
	}
	const w = S.settings.find((e) => e.key == 129)?.int_value;
	if (w == 1) {
		return null;
	}
	const v = f.k$[S.mode].id;
	const I = S.friendlyname ? S.friendlyname : (0, f.GW)(v);
	const E = (0, b.rw)(S.mode);
	const T = {
		action_set_key: t?.key,
		action_set_layer_key: r?.key,
		source_binding_key: n,
		modeid: a?.modeid,
	};
	const k = (e) => {
		const t = {
			action_set_key: T.action_set_key,
			action_set_layer_key: T.action_set_layer_key,
			source_binding_key: T.source_binding_key,
			new_name: e,
			modeid: a?.modeid,
		};
		y.v3.DuplicateControllerSourceMode(h, t);
		y.v3.SaveEditingConfiguration(h);
		y.v3.EnsureEditingConfiguration();
	};
	const D = () => {
		const e = {
			action_set_key: T.action_set_key,
			action_set_layer_key: T.action_set_layer_key,
			source_binding_key: T.source_binding_key,
			modeid: a?.modeid,
			change_mode: true,
			new_mode: 20,
		};
		y.v3.SetControllerSourceMode(h, e);
		y.v3.SaveEditingConfiguration(h);
		y.v3.EnsureEditingConfiguration();
	};
	const N = (e) => {
		let t = (0, R.uX)(e);
		(0, A.pg)(
			i.createElement(d.o0, {
				strTitle: (0, p.we)(
					"#ControllerConfigurator_VirtualMenu_Confirm_Delete",
					I,
				),
				strDescription: (0, p.we)(
					"#ControllerConfigurator_VirtualMenu_Confirm_Delete_Desc",
				),
				bDestructiveWarning: true,
				onOK: D,
				onCancel: null,
			}),
			t,
			{
				strTitle: (0, p.we)("#AppControllerConfiguration_ConfirmRevertConfig"),
			},
		);
	};
	const F = (e) => {
		const t = {
			action_set_key: T.action_set_key,
			action_set_layer_key: T.action_set_layer_key,
			source_binding_key: T.source_binding_key,
			modeid: a?.modeid,
			mode_shift: a?.mode_shift,
			new_name: e,
		};
		y.v3.SetControllerSourceMode(h, t);
		y.v3.SaveEditingConfiguration(h);
		y.v3.EnsureEditingConfiguration();
	};
	const G = (e) => {
		const t = i.createElement(
			c.tz,
			{
				label: (0, p.we)(
					"#ControllerConfigurator_VirtualMenu_ContextMenu_Title",
				),
			},
			i.createElement(
				g.G,
				{
					title: (0, p.we)(
						"#ControllerConfigurator_VirtualMenu_ContextMenu_Rename",
					),
					onResult: F,
				},
				i.createElement(g.Qj, {
					title: (0, p.we)(
						"#ControllerConfigurator_ActionSets_RenameVirtualMenuDialog_Title_1",
						I,
					),
					description: "",
					inputOptions: {
						placeholder: (0, p.we)(
							"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
							S.friendlyname,
						),
					},
				}),
			),
			i.createElement(
				g.G,
				{
					title: (0, p.we)(
						"#ControllerConfigurator_VirtualMenu_ContextMenu_Duplicate",
					),
					onResult: k,
				},
				i.createElement(g.Qj, {
					title: (0, p.we)(
						"#ControllerConfigurator_ActionSets_DuplicateVirtualMenuDialog_Title_1",
						I,
					),
					description: "",
					inputOptions: {
						placeholder: (0, p.we)(
							"#ControllerConfigurator_ActionSets_RenameBaseSetDialog_InitialText_1",
							S.friendlyname,
						),
					},
				}),
			),
			i.createElement(
				c.kt,
				{
					onSelected: N,
				},
				(0, p.we)("#ControllerConfigurator_VirtualMenu_ContextMenu_Delete"),
			),
		);
		(0, o.lX)(t, e);
	};
	return i.createElement(
		m.D0,
		{
			icon: E,
			label: I,
			description: S.description,
			onContextMenu: G,
		},
		i.createElement(
			l.Z,
			{
				className: B.VirtualMenuListButtons,
				retainFocus: true,
			},
			i.createElement(
				m.$n,
				{
					className: B.VirtualMenuListButton,
					onClick: () => {
						(0, M.qb)(h, _, t, r, a, n);
					},
				},
				i.createElement(u.Edit, null),
			),
			i.createElement(
				m.$n,
				{
					className: B.VirtualMenuListButton,
					onClick: G,
				},
				i.createElement(u.Settings, null),
			),
		),
	);
}
function N(e) {
	const t = f.k$[e].id;
	const r = (0, f.GW)(t);
	let n = (0, f.JS)(t);
	const a = (0, b.rw)(e);
	return i.createElement(m.aZ, {
		title: r,
		description: n,
		descriptionVisibility: "always",
		icon: a,
		iconVisibility: "always",
	});
}
export const TX = (0, n.PA)(function (e) {
	const { appid: t } = e;
	const r = (0, k.R7)();
	const n =
		y.v3.EditingConfigurationControllerIndex ??
		h.oy.MostRecentlyActiveControllerIndex;
	y.v3.EnsureEditingConfiguration(t, n);
	let s = i.useRef(undefined);
	const u = y.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const C = y.v3.ControllerConfiguratorLayerSetIndex;
	const _ = y.v3.EditingConfiguration?.sets[u];
	const f = _ == null ? undefined : _.layers[C];
	const S = f ?? _;
	const w = i.useCallback(
		(e, r) => {
			const n = {
				action_set_key: _.key,
				action_set_layer_key: f?.key,
				source_binding_key: 3,
			};
			n.new_mode = r;
			n.new_virtual_menu = true;
			n.new_name = e ?? undefined;
			n.enable_virtual_menu_support = true;
			y.v3.SetControllerSourceMode(t, n);
			y.v3.SaveEditingConfiguration(t);
			y.v3.EnsureEditingConfiguration();
		},
		[t, _?.key, f?.key],
	);
	const B = i.useCallback(
		(e) => {
			const t = i.createElement(
				c.tz,
				{
					label: (0, p.we)("#ControllerConfigurator_VirtualMenu_CreateNew"),
				},
				i.createElement(
					c.kt,
					{
						onSelected: () => w(e, 14),
					},
					N(14),
				),
				i.createElement(
					c.kt,
					{
						onSelected: () => w(e, 11),
					},
					N(11),
				),
				i.createElement(
					c.kt,
					{
						onSelected: () => w(e, 19),
					},
					N(19),
				),
			);
			return (0, o.lX)(t, s.current);
		},
		[w, s],
	);
	const v = i.useCallback(
		(e) => {
			let t = (0, R.uX)(e);
			const r = i.createElement(g.Qj, {
				title: (0, p.we)(
					"#ControllerConfigurator_CreateVirtualMenuDialog_Title_1",
				),
				description: (0, p.we)(
					"#ControllerConfigurator_CreateVirtualMenuDialog_Description_1",
				),
				isValid: (e) => e.length != 0,
				onResult: (e) => {
					B(e);
				},
				onCancel: () => {},
			});
			return (0, A.pg)(r, t, {});
		},
		[B],
	);
	const [I] = (0, a.VI)("steam_input_configurator_error_msg_enable");
	if (I && y.v3.EditingConfiguration?.error_msg?.length > 0) {
		(0, A.pg)(
			i.createElement(d.o0, {
				strTitle: (0, p.we)("#ControllerConfigurator_ErrorMsg_Title"),
				strDescription: y.v3.EditingConfiguration?.error_msg,
				bAlertDialog: true,
			}),
			r?.ownerWindow ?? window,
		);
	}
	const E = y.v3.EditingConfiguration?.modes;
	let M = [];
	E?.forEach((e) => {
		const t = e.settings.find((e) => e.key == 129)?.int_value;
		const r = (0, b.kF)(e.mode);
		if (t != 1 && r) {
			M.push({
				key: e.source,
				active_group: {
					mode: e.mode,
					inputs: e.inputs,
					settings: e.settings,
					modeid: e.modeid,
					mode_shift: e.mode_shift,
				},
			});
		}
	});
	let T = M.filter(
		(e, t) =>
			t === M.findIndex((t) => t.active_group.modeid === e.active_group.modeid),
	);
	if (S == null) {
		return null;
	} else {
		return i.createElement(
			l.Z,
			{
				retainFocus: true,
				ref: s,
			},
			T?.map((e, r) =>
				i.createElement(D, {
					key: e.key + "_" + r,
					baseActionSet: _,
					layerActionSet: f,
					eControllerSource: e.key,
					group: e?.active_group,
					appid: t,
					actionset_section: undefined,
				}),
			),
			i.createElement(
				m.xh,
				{
					onClick: v,
					bottomSeparator: "none",
					highlightOnFocus: false,
				},
				(0, p.we)("#ControllerConfigurator_VirtualMenu_CreateNew"),
			),
		);
	}
});
export const DL = (e, t) => {
	let r = 30;
	const n = (0, b.Kw)(e);
	let i = n.mode == 14 ? 49 : 44;
	let a = i - 30;
	let s = 0;
	const o = n.inputs.find(
		(e) =>
			e.key >= r &&
			e.key <= i &&
			(e.activators?.length && s++,
			e.activators?.length == 0 || e.activators[0]?.bindings?.length == 0),
	);
	r = o?.key ?? (s <= a ? r : undefined);
	if (t) {
		const e = (0, b.Kw)(t);
		const n = e?.inputs.find(
			(e) =>
				e.key >= r &&
				e.key <= i &&
				(e.activators?.length == 0 || e.activators[0]?.bindings?.length == 0),
		);
		r = n?.key ?? r;
	}
	if (!(r > i)) {
		return r;
	}
};
export const WJ = (0, n.PA)(function (e) {
	const { appid: t, modeid: r, econtrollersource: n, actionset_section: s } = e;
	const [o] = (0, a.VI)("steam_input_configurator_error_msg_enable");
	const c = (0, b.Kw)(r);
	if (!c) {
		return null;
	}
	if (o && y.v3.EditingConfiguration?.error_msg?.length > 0) {
		(0, A.pg)(
			i.createElement(d.o0, {
				strTitle: (0, p.we)("#ControllerConfigurator_ErrorMsg_Title"),
				strDescription: y.v3.EditingConfiguration?.error_msg,
				bAlertDialog: true,
			}),
			window,
		);
	}
	const m = y.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const u = y.v3.ControllerConfiguratorLayerSetIndex;
	const g = y.v3.EditingConfiguration?.sets[m];
	const h = g == null ? undefined : g.layers[u];
	const f = h ?? g;
	const S = _.N;
	if (f == null) {
		return null;
	} else {
		return i.createElement(
			"div",
			null,
			i.createElement(
				l.Z,
				{
					onButtonDown: S,
					retainFocus: true,
				},
				i.createElement(C.$W, {
					baseActionSet: g,
					layerActionSet: h,
					eControllerSource: n,
					group: {
						mode: c.mode,
						inputs: c.inputs,
						settings: c.settings,
						modeid: c.modeid,
					},
					appid: t,
					actionset_section: s,
					virtualmenu_section: true,
					modeShift: c?.mode_shift,
				}),
			),
		);
	}
});
export const Jc = (0, n.PA)((e) => {
	const { appid: t, mode: r } = e;
	const n = r?.virtual_menu_info
		? T.gw.FromPreview(r.virtual_menu_info, t)
		: null;
	const a = y.v3.VirtualMenuPreviewKey;
	i.useEffect(() => n?.SetSelectedPreviewKey(a), [n, a]);
	if (n) {
		switch (r.virtual_menu_info?.menu_style) {
			case 0:
			case 2:
				return i.createElement(S.F9, {
					virtualMenu: n,
				});
			case 1:
				return i.createElement(S.yq, {
					virtualMenu: n,
				});
		}
	}
	return null;
});
export const L3 = (0, n.PA)(function (e) {
	const {
		baseActionSet: t,
		layerActionSet: r,
		eControllerSource: n,
		group: a,
		simpleView: o,
		appid: c,
	} = e;
	(0, s.W6)();
	const u =
		y.v3.EditingConfigurationControllerIndex ??
		h.oy.MostRecentlyActiveControllerIndex;
	const d = E.Fd.Get().GetController(u)?.eControllerType;
	let A = [];
	A.push({
		eMode: 14,
		modeid: a.modeid,
	});
	A.push({
		eMode: 11,
		modeid: a.modeid,
	});
	A.push({
		eMode: 19,
		modeid: a.modeid,
	});
	const p = a;
	const g = p ? f.jg[p.mode] : undefined;
	if (p) {
		(0, f.X)(p.settings, g, n, d);
	}
	const _ =
		A &&
		A.map(function (e) {
			return (function (e, t) {
				const r = e.gameAction;
				const n = f.k$[e.eMode].id;
				const a = e.strDisplay
					? e.strDisplay
					: r != null && r.action.display_name
						? r.action.display_name
						: (0, f.GW)(n) || (0, b.Xt)(n);
				let s = (0, f.JS)(n);
				const o =
					(0, b.rw)(e.eMode) ??
					i.createElement("svg", {
						className: B.ModeSelectDropDownIcon,
					});
				const l = i.createElement(m.aZ, {
					title: a,
					description: s,
					descriptionVisibility: "when-expanded",
					icon: o,
					iconVisibility: "when-expanded",
					strTitleClassNames: t,
				});
				const c = B.HideOnMinified;
				return {
					label: l,
					data: e,
					strOptionClass: c,
				};
			})(e, "");
		});
	const S = (0, m.Ld)(_).find((e) => (0, f.QQ)(a, e.data))?.data;
	return i.createElement(
		l.Z,
		{
			className: (0, v.A)(B.BindingButtons),
			navEntryPreferPosition: I.iU.PREFERRED_CHILD,
		},
		i.createElement(m.ZU, {
			rgOptions: _,
			onChange: (e) => {
				const i = {
					action_set_key: t.key,
					action_set_layer_key: r?.key,
					source_binding_key: n,
					change_mode: true,
					mode_shift: p?.mode_shift,
				};
				i.new_mode = e.data.eMode;
				i.modeid = e.data.modeid;
				const a = e.data.gameAction;
				if (a != null) {
					const e = a.layerSet ?? a.baseSet;
					i.new_game_action = {
						action_set_key: e.key,
						action_key: a.action.key,
					};
				}
				C.tG.Debug("onChangeModeOption", e.data, i);
				y.v3.SetControllerSourceMode(c, i);
				y.v3.SaveEditingConfiguration(c);
				y.v3.EnsureEditingConfiguration();
			},
			selectedOption: S,
			menuLabel: e.menuLabel,
		}),
		false,
	);
});
