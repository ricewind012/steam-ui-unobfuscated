var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./35488.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./86078.js");
var o = s;
var l = require("./85360.js");
var c = require("./43014.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require("./53622.js");
var A = require("./12307.js");
var p = require(/*webcrack:missing*/ "./61657.js");
var g = require(/*webcrack:missing*/ "./69164.js");
var h = require(/*webcrack:missing*/ "./10975.js");
var C = require("./52192.js");
export const eu = (0, a.PA)(function (e) {
	const t = l.v3.EditingConfiguration;
	const r = l.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const a = l.v3.ControllerConfiguratorLayerSetIndex;
	const s = t?.sets[r];
	const A = s?.layers?.[a];
	if (e.bShowWhenOneActionSet === true || (0, C.P4)(t)) {
		return n.createElement(
			"div",
			{
				className: (0, u.A)(
					e.className,
					o.ActionSetNameOverIndicators,
					e.disabled && o.ActionSetSelectorDisabled,
				),
			},
			n.createElement(
				"div",
				{
					className: o.ActionSetNameAndGlyphs,
				},
				n.createElement(
					"div",
					{
						className: o.ActionSetGlyph,
						onClick: e.disabled
							? null
							: () =>
									l.v3.GoToRelativeEditingConfigurationActionSetInFlattenedList(
										-1,
									),
					},
					n.createElement(d.W, {
						button: c.g4.LeftBumper,
					}),
				),
				n.createElement(
					"div",
					{
						className: o.ActionSetNameAndHeader,
					},
					n.createElement(
						"span",
						{
							className: o.ActionSetHeader,
						},
						(0, m.we)("#ControllerConfigurator_ActionSet"),
					),
					n.createElement(
						"span",
						{
							className: (0, u.A)(o.ActionSetName, A && o.SetDisabled),
						},
						s?.display_name ??
							(0, m.we)("#ControllerConfigurator_ActionSets_UnnamedSet_Title"),
					),
					A &&
						n.createElement(
							"div",
							{
								className: o.ActionSetLayer,
							},
							n.createElement(i.Inventory, null),
							A?.display_name ??
								(0, m.we)(
									"#ControllerConfigurator_ActionSets_UnnamedSet_Title",
								),
						),
				),
				n.createElement(
					"div",
					{
						className: o.ActionSetGlyph,
						onClick: e.disabled
							? null
							: () =>
									l.v3.GoToRelativeEditingConfigurationActionSetInFlattenedList(
										1,
									),
					},
					n.createElement(d.W, {
						button: c.g4.RightBumper,
					}),
				),
			),
		);
	} else {
		return null;
	}
});
export const dY = (0, a.PA)(function (e) {
	const t = l.v3.EditingConfiguration;
	const r = l.v3.ControllerConfiguratorBaseSetIndex ?? 0;
	const a = l.v3.ControllerConfiguratorLayerSetIndex;
	const s = l.v3.GetFlattenedActionSets().map((e) => ({
		id: JSON.stringify([e.nActionSetIndex, e.nLayerIndex]),
		title: e.strName,
		icon: e.nLayerIndex == null ? null : n.createElement(i.Inventory, null),
	}));
	const c = n.useRef(undefined);
	const [m, d] = n.useState(false);
	const p = n.useCallback((e) => !!m && N(e), [m]);
	const h = n.useRef([r, a]);
	n.useEffect(() => {
		if (h.current[0] != r || h.current[1] != a) {
			if (m) {
				c.current?.TakeFocus();
			}
			h.current = [r, a];
		}
	}, [m, c, r, a]);
	const _ = n.useCallback((e) => {
		const [t, r] = JSON.parse(e);
		l.v3.SetControllerConfiguratorBaseSetIndex(t);
		l.v3.SetControllerConfiguratorLayerSetIndex(r);
	}, []);
	if (e.bShowWhenOneActionSet === true || (0, C.P4)(t)) {
		return n.createElement(
			g.Z,
			{
				className: (0, u.A)(e.className, o.ControllerSelectionContainer),
				onFocusWithin: d,
				onButtonDown: p,
			},
			n.createElement(A.JZ, {
				tabs: s,
				activeTab: JSON.stringify([r, a]),
				onShowTab: _,
				showGlyphs: m || e.showGlyphs,
				bleedGlyphs: e.bleedGlpyhs,
				navRef: c,
				wrapAround: e.wrapAround,
			}),
		);
	} else {
		return null;
	}
});
export function N(e) {
	let t;
	if (e.detail.button == p.pR.BUMPER_LEFT) {
		t = -1;
	} else {
		if (e.detail.button != p.pR.BUMPER_RIGHT) {
			return false;
		}
		t = 1;
	}
	const r = l.v3.GoToRelativeEditingConfigurationActionSetInFlattenedList(t);
	h.eZ.PlayNavSound(r ? h.PN.ChangeTabs : h.PN.FailedNav);
	e.stopPropagation();
	return true;
}
