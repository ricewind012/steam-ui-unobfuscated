var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require("./83013.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./41230.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./85360.js");
var u = require(/*webcrack:missing*/ "./69164.js");
var d = require("./22091.js");
var A = require("./62486.js");
var p = require(/*webcrack:missing*/ "./61657.js");
var g = require("./86196.js");
var h = require("./75121.js");
var C = require(/*webcrack:missing*/ "./47742.js");
const _ = a.VisualizerColorInnerDZ;
const f = a.VisualizerColorOuterDZ;
const b = a.VisualizerColorActiveArea;
const y = [
	{
		id: "OuterEdge",
		color: f,
		fill: f,
		strokeWidth: 2,
		showInKey: true,
		style: a.VizElement,
		fixedValue: 1,
		showInCustom: true,
		fixedCircle: true,
	},
	{
		id: "OuterEdge",
		color: f,
		fill: f,
		strokeWidth: 2,
		showInKey: true,
		style: a.VizElement,
		fixedValue: 1,
		showInDefault: true,
		fixedCircle: true,
	},
	{
		id: "DeadZoneOuter",
		color: b,
		fill: b,
		strokeWidth: 2,
		showInKey: true,
		style: a.VizElement,
		settingID: 13,
		showInCustom: true,
		fixedCircle: true,
	},
	{
		id: "DeadZoneInner",
		color: _,
		fill: _,
		strokeWidth: 3,
		showInKey: true,
		style: a.VizElement,
		settingID: 12,
		showInCustom: true,
		showInDefault: true,
	},
];
export const ZX = function (e) {
	const { startX: t, startY: r, endX: i, endY: a, width: s, data: o } = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"svg",
			{
				xmlns: "http://www.w3.org/2000/svg",
				className: o.style,
			},
			n.createElement("line", {
				x1: t,
				y1: r,
				x2: i,
				y2: a,
				stroke: o.color,
				fill: o.fill,
				strokeWidth: s,
			}),
		),
	);
};
export const zL = function (e) {
	const { centerX: t, centerY: r, radius: i, showCenter: s, data: l } = e;
	const c = isNaN(t) ? 0 : t;
	const m = isNaN(r) ? 0 : r;
	return n.createElement(
		n.Fragment,
		null,
		s &&
			n.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					className: (0, o.A)(l.style, a.SphereClip),
				},
				n.createElement("circle", {
					cx: c,
					cy: m,
					r: 2,
					stroke: l.color,
					fill: l.color,
					strokeWidth: 1,
				}),
			),
		n.createElement(
			"svg",
			{
				xmlns: "http://www.w3.org/2000/svg",
				className: (0, o.A)(l.style, a.SphereClip),
			},
			n.createElement("circle", {
				cx: c,
				cy: m,
				r: i,
				stroke: l.color,
				fill: l.fill,
				strokeWidth: l.strokeWidth,
			}),
		),
	);
};
const B = function (e) {
	const { centerX: t, centerY: r, radius: i, data: a } = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"svg",
			{
				xmlns: "http://www.w3.org/2000/svg",
				className: a.style,
			},
			n.createElement("rect", {
				x: t - i,
				y: r - i,
				width: i * 2,
				height: i * 2,
				stroke: a.color,
				fill: a.fill,
				strokeWidth: 1,
			}),
		),
	);
};
const v = function (e) {
	const {
		centerX: t,
		centerY: r,
		radius: i,
		data: s,
		maxradius: l,
		clipSphere: c,
	} = e;
	const m = l - i;
	let u = "M " + (t - l) + "," + (r - i);
	u += " h " + m;
	u += " v -" + m;
	u += " h " + i * 2;
	u += " v " + m;
	u += " h " + m;
	u += " v " + i * 2;
	u += " h -" + m;
	u += " v " + m;
	u += " h -" + i * 2;
	u += " v -" + m;
	u += " h -" + m;
	u += " Z";
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"svg",
			{
				xmlns: "http://www.w3.org/2000/svg",
				className: (0, o.A)(s.style, c && a.SphereClip),
			},
			n.createElement("path", {
				d: u,
				stroke: s.fill,
				fill: s.fill,
				strokeWidth: 1,
			}),
		),
	);
};
const I = function (e) {
	const { data: t } = e;
	return n.createElement(
		u.Z,
		{
			className: a.KeyLabelContainer,
		},
		n.createElement("div", {
			className: a.KeyColorBlock,
			style: {
				backgroundColor: t.fill,
			},
		}),
		n.createElement(
			"span",
			{
				className: a.KeyLabel,
			},
			(0, c.we)("#ControllerVisualization_Joystick_Deadzone_Value_" + t.id),
		),
	);
};
export const iL = function (e) {
	const {
		centerX: t,
		centerY: r,
		LiveX: i,
		LiveY: s,
		maxRadius: o,
		indicatorRadius: l,
	} = e;
	const c = a.VisualizerLiveStickColor;
	const m = {
		id: "LiveViz",
		color: c,
		fill: c,
		strokeWidth: 2,
		showInKey: false,
		style: a.LiveVizElement,
		showInDefault: true,
		showInCustom: true,
	};
	return n.createElement(zL, {
		centerX: t + i * o,
		centerY: r + s * o,
		data: m,
		radius: l || 20,
		showCenter: true,
	});
};
const M = function (e) {
	const { centerX: t, centerY: r, LiveX: i, LiveY: s, maxRadius: l } = e;
	const [c, m] = (0, C.l)();
	if (i == 0 && s == 0) {
		return null;
	}
	const u = "M" + (t + "," + r) + ", " + (t + i * l + "," + (r + s * l));
	const d = a.VisualizerLiveOutputColor;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"svg",
			{
				xmlns: "http://www.w3.org/2000/svg",
				className: (0, o.A)(a.LiveResultArrow),
			},
			n.createElement(
				"defs",
				null,
				n.createElement(
					"marker",
					{
						id: c,
						orient: "auto",
						markerWidth: "3",
						markerHeight: "4",
						refX: "0.1",
						refY: "2",
					},
					n.createElement("path", {
						d: "M0,0 V4 L2,2 Z",
						fill: d,
					}),
				),
			),
			n.createElement("path", {
				id: "arrow-line",
				markerEnd: m,
				strokeWidth: "2",
				fill: "none",
				stroke: d,
				d: u,
			}),
		),
	);
};
export const NQ = (0, l.PA)(function (e) {
	const { appid: t, mode: r } = e;
	const {
		baseActionSet: l,
		layerActionSet: C,
		eControllerSource: _,
		modeId: b,
	} = m.v3.CurrentEditedGroupSettingsData;
	const { mode_shift: S } = m.v3.CurrentEditedGroup;
	const T = m.v3.CurrentEditedGroupSettings.get(
		(0, m.Ij)({
			baseActionSetKey: l?.key,
			layerActionSetKey: C?.key,
			eControllerSource: _,
		}),
	);
	const R = r == "default";
	const k = n.useRef(undefined);
	const D = parseInt(a.VisualizerMaxRadius, 0);
	const N = parseInt(a.VisualizerCenterXOffset, 0);
	const F = parseInt(a.VisualizerCenterYOffset, 0);
	const G = T?.find((e) => e.key == 14);
	const O = !R && T?.find((e) => e.key == 127)?.int_value == 1;
	const P = _ == 3 || _ == 18 || _ == 1;
	const L = T?.find((e) => e.key == 12)?.int_max;
	const [z, x] = n.useState(false);
	const U = n.useCallback(() => {
		k.current.PushState();
		x(true);
	}, [x]);
	n.useEffect(() => {
		if (!z && k.current) {
			k.current.PopState();
		}
	}, [z]);
	const {
		LiveX: W,
		LiveY: V,
		OutputX: H,
		OutputY: j,
	} = (() => {
		const e = n.useCallback((e, t, n, a) => {
			i.unstable_batchedUpdates(() => {
				l(e / 32767);
				u(t / -32767);
				r(n / 32767);
				s(a / -32767);
			});
		}, []);
		n.useEffect(() => {
			const t = SteamClient.Input.RegisterForUIVisualization(e);
			SteamClient.Input.StartUIVisualization(
				m.v3.EditingConfigurationControllerIndex,
				m.v3.CurrentEditedGroup?.modeid,
			);
			return () => {
				SteamClient.Input.StopUIVisualization(
					m.v3.EditingConfigurationControllerIndex,
				);
				t?.unregister();
			};
		}, [e]);
		const [t, r] = n.useState(0.5);
		const [a, s] = n.useState(0.25);
		const [o, l] = n.useState(0.5);
		const [c, u] = n.useState(0.25);
		return {
			LiveX: o,
			LiveY: c,
			OutputX: t,
			OutputY: a,
		};
	})();
	const q = Math.sqrt(W * W + V * V);
	const Q = Math.sqrt(H * H + j * j);
	let Z = [];
	let Y = [];
	const K = y.filter(
		(e) =>
			(O || !e.showAntiDZ) &&
			((R && e.showInDefault) || (!R && e.showInCustom)),
	);
	const X = () => {
		let e = {};
		K?.forEach((t) => {
			if (t.settingID) {
				const r = T?.find((e) => e.key == t.settingID);
				if (r) {
					e[r.key] = r.int_value;
				}
			}
		});
		return e;
	};
	const [J, $] = n.useState(X);
	if (K.filter((e) => e.settingID).length != Object.keys(J)?.length) {
		$(X());
	}
	K?.forEach((e, r) => {
		let i = e.fixedValue ? e.fixedValue : 0;
		const a = T?.find((t) => t.key == e.settingID);
		if (R && !e.fixedValue) {
			const e = m.v3.EditingConfigurationControllerIndex;
			const t = d.Fd.Get().GetController(e);
			i = _ == 12 ? t?.nRStickDeadzone : t?.nLStickDeadzone;
			if (i == -1) {
				i =
					(0, A.ui)(t.eControllerType, t?.unVendorID, t?.unProductID) /
					(L - a?.int_min);
			}
		} else if (a) {
			i = J[a.key] / (L - a?.int_min);
		}
		if (G?.int_value == 2 && e.fixedCircle) {
			Z.push(
				n.createElement(B, {
					key: r,
					centerX: N,
					centerY: F,
					data: e,
					radius: i * D,
				}),
			);
		} else if (
			(G?.int_value == 0 && !e.fixedCircle) ||
			(G?.int_value == 2 && !e.fixedCircle)
		) {
			Z.push(
				n.createElement(v, {
					key: r,
					centerX: N,
					centerY: F,
					data: e,
					radius: i * D,
					maxradius: D,
					clipSphere: G?.int_value != 2,
				}),
			);
		} else {
			Z.push(
				n.createElement(zL, {
					key: r,
					centerX: N,
					centerY: F,
					data: e,
					radius: i * D,
					showCenter: false,
				}),
			);
		}
		if (!R && a) {
			const n = {
				background: Y.length == 0 ? f : "transparent",
				"--left-track-color": e.fill,
			};
			const i = Y.length > 0 ? Y[Y.length - 1] : undefined;
			const s = i ? i.value : L;
			const o =
				r < K.length - 1
					? T?.find((e) => e.key == K[r + 1]?.settingID)
					: undefined;
			const c = o ? J[o.key] : a.int_min;
			Y.push({
				min: a.int_min,
				max: L,
				clampMin: c,
				clampMax: s,
				value: J[a.key],
				onChange: (e) => {
					t = a.key;
					r = e;
					$({
						...J,
						[t]: r,
					});
					return;
					var t;
					var r;
				},
				onChangeComplete: () =>
					((e) => {
						const r = {
							action_set_key: l?.key,
							action_set_layer_key: C?.key,
							modeid: b,
							mode_shift: S,
							source_binding_key: _,
							new_setting: {
								key: e,
								int_value: Math.trunc(J[e]),
							},
						};
						m.v3.SetControllerSourceMode(t, r);
					})(a.key),
				trackStyleOverride: n,
				minimumDpadPercent: L * 0.01,
			});
		}
	});
	if (z) {
		const e = T?.find((e) => e.key == 12)?.int_value;
		const t = T?.find((e) => e.key == 13)?.int_value;
		const r = e + (t - e) * Q;
		Y.push({
			min: 0,
			max: L,
			value: r,
			trackStyleOverride: {
				background: "transparent",
				"--left-track-color": "transparent",
			},
			noLabel: true,
			minimumDpadPercent: L * 0.01,
		});
	}
	let ee = [];
	K.filter((e) => e.showInKey).forEach((e, t) => {
		ee.unshift(
			n.createElement(I, {
				key: t,
				data: e,
			}),
		);
	});
	let te = {};
	if (z) {
		te[p.pR.CANCEL] = (0, c.we)(
			"#ControllerVisualization_Joystick_Deadzone_LiveUpdate_Stop",
		);
	}
	return n.createElement(
		u.Z,
		{
			className: a.VisualizerContainer,
			onButtonDown: (e) =>
				e.detail.button == p.pR.CANCEL && z
					? (x(false), e.preventDefault(), e.stopPropagation(), true)
					: !!z && (e.preventDefault(), e.stopPropagation(), true),
			actionDescriptionMap: te,
			navRef: k,
			onBlur: () => {
				x(false);
			},
		},
		n.createElement(
			"div",
			{
				className: a.FlexRow,
			},
			n.createElement(
				u.Z,
				{
					className: a.StickData,
					retainFocus: true,
					noFocusRing: true,
				},
				!z &&
					n.createElement(
						s.$n,
						{
							className: a.TestButton,
							onClick: U,
						},
						(0, c.we)(
							"#ControllerVisualization_Joystick_Deadzone_LiveUpdate_Start",
						),
					),
				z &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(
							"div",
							{
								className: a.StickValue,
							},
							n.createElement(
								"div",
								{
									className: a.DataTitle,
								},
								(0, c.we)("#ControllerVisualization_Joystick_Deadzone_Value"),
							),
							Math.round(q * 100) + "%",
						),
						n.createElement(
							"div",
							{
								className: a.StickOutput,
							},
							n.createElement(
								"div",
								{
									className: a.DataTitle,
								},
								(0, c.we)("#ControllerVisualization_Joystick_Deadzone_Output"),
							),
							Math.round(Q * 100) + "%",
						),
					),
			),
			n.createElement(
				"div",
				{
					className: a.VisualizationMainContainer,
				},
				n.createElement("img", {
					className: (0, o.A)(a.BGImage, P ? a.Left : a.Right),
					src: P ? g.A : h.A,
				}),
				Z,
				z &&
					n.createElement(iL, {
						key: "Live",
						LiveX: W,
						LiveY: V,
						centerX: N,
						centerY: F,
						maxRadius: D,
					}),
				z &&
					n.createElement(M, {
						key: "LiveResult",
						LiveX: H,
						LiveY: j,
						centerX: N,
						centerY: F,
						maxRadius: D,
					}),
			),
		),
		n.createElement(
			"div",
			{
				className: (0, o.A)(a.FlexRow, a.KeyContainer),
			},
			ee,
		),
		!R &&
			n.createElement(
				"div",
				{
					className: a.CompoundSliderContainer,
				},
				n.createElement(s.ou, {
					sliders: Y,
					useLeftRightParen: true,
					bottomSeparator: "none",
					min: 0,
					max: 1,
					value: 0,
				}),
			),
	);
});
