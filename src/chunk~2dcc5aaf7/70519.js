var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./35488.js");
var s = require("./74362.js");
var o = require(/*webcrack:missing*/ "./85243.js");
var l = require("./55489.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./51943.js");
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require("./43933.js");
var A = d;
var p = require(/*webcrack:missing*/ "./46108.js");
var g = require("./46422.js");
var h = require(/*webcrack:missing*/ "./10975.js");
require(/*webcrack:missing*/ "./43691.js");
const C = 1000;
const _ = 1000;
export function vR(e) {
	const [t, r] = n.useState(null);
	const d = n.useCallback(() => {
		r(undefined);
		h.eZ.PlayNavSound(h.PN.VolSound);
	}, []);
	const { bKeepVisible: p, fnKeepVisible: g } = (function (e) {
		const [t, r] = n.useState(false);
		const i = n.useRef(0);
		const a = n.useCallback(() => {
			r(true);
			window.clearTimeout(i.current);
			i.current = window.setTimeout(() => r(false), e);
		}, [e]);
		n.useEffect(() => window.clearTimeout(i.current), []);
		return {
			bKeepVisible: t,
			fnKeepVisible: a,
		};
	})(C);
	const f = (0, m.aO)();
	const b = n.useCallback(() => {
		if (!f) {
			g();
		}
	}, [f, g]);
	const y = (0, m.ml)(s.T4.Output);
	(0, c.hL)(y?.m_VolumeChangedSubscribable, b);
	(0, c.hL)(m.F5.m_VolumePressedSubscribable, b);
	const S = p || t != null;
	const w = S ? o.I5.Notification : null;
	(0, l.Bx)(w, "VolumePopin");
	const { flVolume: B, setVolume: v } = (0, m.Cu)(s.T4.Output);
	const [I, E] = (0, c.uN)(B, v, _);
	if (!y) {
		return null;
	}
	const M = !y.BOnboardAudio();
	const T = y.GetName(s.T4.Output);
	return n.createElement(
		"div",
		{
			className: (0, u.A)(A.VolumePopin, {
				[A.VolumePopinHidden]: !S,
			}),
		},
		n.createElement(
			"div",
			{
				className: A.VolumeSliderPosition,
			},
			n.createElement(i.d3, {
				layout: "inline",
				childrenContainerWidth: "max",
				padding: "none",
				max: 1,
				min: 0,
				step: 0,
				value: I,
				onChangeStart: (e) => r(e),
				onChange: E,
				onChangeComplete: d,
				isKeyNavTarget: false,
				trackTone: "dark",
				showHandle: false,
				bottomSeparator: "none",
				icon: n.createElement(a.AudioVolumeIcon, {
					flVolume: I,
					color: "#FFFFFF",
				}),
			}),
			M &&
				n.createElement(
					"div",
					{
						className: A.VolumeSliderLabel,
					},
					T,
				),
		),
	);
}
function b(e) {
	const { flVolume: t, setVolume: r } = (0, m._t)(e.id, e.direction);
	const [o, l] = (0, c.uN)(t, r, _);
	return n.createElement(i.d3, {
		disabled: t == null,
		min: 0,
		max: e.direction == s.T4.Input ? 1.3 : 1,
		step: 0,
		value: o,
		onChange: l,
		onChangeComplete: () => {
			if (e.direction == s.T4.Output && !g.oy.BIsInOOBE) {
				h.eZ.PlayNavSound(h.PN.VolSound);
			}
		},
		label: e.label,
		layout: e.layout,
		padding: e.padding,
		icon:
			e.direction == s.T4.Output
				? n.createElement(a.AudioVolumeIcon, {
						flVolume: t,
					})
				: n.createElement(a.Microphone, {
						off: t == 0,
					}),
		bottomSeparator: e.bottomSeparator,
	});
}
export function RC(e) {
	const t = (0, m.hn)(e.direction);
	return n.createElement(b, {
		...e,
		id: t,
	});
}
export function XZ(e) {
	const { flVolume: t } = (0, m.Cu)(s.T4.Output);
	return n.createElement(a.AudioVolumeIcon, {
		flVolume: t ?? 1,
	});
}
export function E1(e) {
	const t = (0, m.ml)(e.direction);
	const r = (0, m.tQ)(e.direction);
	let a = (0, m.xU)(e.direction).map((t) => ({
		data: t,
		label: t.GetName(e.direction),
	}));
	let s = "";
	if (r == -1) {
		const r = t?.GetName(e.direction) ?? "";
		s = (0, p.we)("#Audio_DeviceDefaultWithDevice", r);
	} else {
		s = (0, p.we)("#Audio_DeviceDefault");
	}
	a.unshift({
		data: null,
		label: s,
	});
	const o = r == -1 ? null : t;
	const l = n.useCallback(
		(t) => {
			if (t) {
				t.setAsDefaultDevice(e.direction);
			} else {
				m.F5.ClearDefaultDeviceOverride(e.direction);
			}
		},
		[e.direction],
	);
	return n.createElement(i.Vb, {
		label: e.label,
		rgOptions: a,
		onChange: (e) => l(e.data),
		selectedOption: o,
		strDefaultLabel: "Select a value",
		bottomSeparator: e.bottomSeparator,
	});
}
