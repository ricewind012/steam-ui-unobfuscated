export let vn = ee.vn;
export let v$ = ee.v$;
export let a_ = g.a_;
export let dR = n.dR;
export let P8 = S.P8;
export let RF = n.RF;
export let Hk = S._H;
export let Xp = n.Xp;
export let QW = n.QW;
export let iK = n.iK;
export let Nu = re.Nu;
export let xv = n.xv;
export let wl = n.wl;
export let tX = n.tX;
export let Od = n.Od;
export let AL = $.AL;
export let jn = n.jn;
export let Vj = ee.Vj;
export let I0 = ee.I0;
export let _Z = ee._Z;
export let O7 = ee.O7;
export let Bv = ee.Bv;
export let VQ = n.VQ;
export let CB = n.CB;
export let ck = $.ck;
export let JU = n.JU;
export let T8 = re.T8;
export let xz = n.xz;
export let Y9 = n.Y9;
export let _E = n._E;
export let qq = re.qq;
export let lV = n.lV;
export let wi = n.wi;
export let D0 = re.D0;
export let cK = n.cK;
export let Ce = g.Ce;
export let Mw = ee.Mw;
export let lr = n.lr;
export let G5 = n.G5;
export let BC = re.BC;
export let $S = re.$S;
export let U9 = n.U9;
export let UC = n.UC;
export let VP = n.VP;
export let Yh = n.Yh;
export let xh = re.xh;
export let $n = n.$n;
export let a3 = n.a3;
export let f3 = n.f3;
export let nB = n.nB;
export let Nv = re.Nv;
export let pF = n.pF;
var n = require("./44351.js");
var i = require(/*webcrack:missing*/ "./34629.js");
var _a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./90242.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./50376.js");
var c = require(/*webcrack:missing*/ "./49455.js");
var _m = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var d = require(/*webcrack:missing*/ "./52451.js");
var A = require("./29889.js");
var p = require("./27793.js");
var g = require("./7514.js");
const h = _a.forwardRef(function (e, t) {
	const r = (0, g.Zt)("InputElement", s.BA);
	return _a.createElement(r, {
		...e,
		ref: t,
	});
});
export class pd extends _a.PureComponent {
	m_CopiedAnimation;
	ref = _a.createRef();
	constructor(e) {
		super(e);
		this.CheckProps(e);
		this.state = {
			m_CopiedYPos: 0,
			m_bPlayingCopiedAnimation: false,
			m_bCompletedCopiedAnimation: false,
			m_bNumberBelowMinRange: false,
			m_bNumberAboveMaxRange: false,
			m_bIsNotNumeric: false,
			m_bIsInvalidURL: false,
			m_strInvalidURLMessage: null,
			m_bIsInvalidEmail: false,
			m_bAboveMaxChars: false,
		};
	}
	componentDidUpdate(e) {
		this.CheckProps(this.props);
	}
	m_elInput;
	OnInputRef(e) {
		this.m_elInput = e;
		if (this.m_elInput && this.props.focusOnMount) {
			this.m_elInput.focus();
		}
	}
	get element() {
		return this.m_elInput;
	}
	get value() {
		return this.m_elInput && this.m_elInput.value;
	}
	Focus() {
		this.m_elInput?.focus();
	}
	static validateUrl(e) {
		return (
			e != null &&
			(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
				e,
			) ||
				/^steam:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}/i.test(e))
		);
	}
	static validateEmail(e) {
		return (
			e != null &&
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				e.toLowerCase(),
			)
		);
	}
	Validate() {
		this.setState({
			m_bNumberBelowMinRange:
				this.props.rangeMin !== null &&
				this.props.rangeMin !== undefined &&
				Number(this.m_elInput?.value) < this.props.rangeMin,
			m_bNumberAboveMaxRange:
				this.props.rangeMax !== null &&
				this.props.rangeMax !== undefined &&
				Number(this.m_elInput?.value) > this.props.rangeMax,
			m_bIsNotNumeric:
				this.props.mustBeNumeric == 1 && isNaN(Number(this.m_elInput?.value)),
			m_bIsInvalidURL:
				this.props.mustBeURL == 1 && !pd.validateUrl(this.m_elInput?.value),
			m_strInvalidURLMessage: this.props.fnStrValidateURL
				? this.props.fnStrValidateURL(this.m_elInput?.value)
				: null,
			m_bIsInvalidEmail:
				this.props.mustBeEmail == 1 && !pd.validateEmail(this.m_elInput?.value),
			m_bAboveMaxChars:
				this.props.maxChars != null &&
				this.m_elInput != null &&
				this.m_elInput.value.length > this.props.maxChars,
		});
	}
	OnChanged(e) {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
		this.Validate();
	}
	OnCopyClick(e) {
		if (!this.m_elInput) {
			return;
		}
		this.m_elInput.select();
		let t = this.m_elInput.ownerDocument;
		if (t.queryCommandEnabled("copy")) {
			t.execCommand("copy");
			e.currentTarget.focus();
			if (this.m_CopiedAnimation) {
				this.m_CopiedAnimation.Cancel();
			}
			let r = -4;
			let n = -24;
			this.setState({
				m_bCompletedCopiedAnimation: false,
			});
			this.setState(
				{
					m_CopiedYPos: r,
				},
				() => {
					this.m_CopiedAnimation = new A.w(
						this,
						{
							m_CopiedYPos: n,
						},
						{
							msDuration: 300,
							timing: "sine",
							setStateOnComplete: {
								m_bCompletedCopiedAnimation: true,
							},
						},
					);
					this.m_CopiedAnimation.Start();
				},
			);
		}
	}
	OnClearClick(e) {
		if (this.m_elInput && this.m_elInput.value) {
			Object.getOwnPropertyDescriptor(
				window.HTMLInputElement.prototype,
				"value",
			).set.call(this.m_elInput, "");
			this.m_elInput.dispatchEvent(
				new Event("input", {
					bubbles: true,
				}),
			);
		}
	}
	CheckProps(e) {
		(0, c.w)(
			(!e.bShowClearAction && !e.bAlwaysShowClearAction) || e.onChange,
			"In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.",
		);
	}
	render() {
		const {
			label: e,
			description: t,
			requiredLabel: r,
			bShowCopyAction: i,
			bShowClearAction: s,
			bAlwaysShowClearAction: c,
			rangeMin: m,
			rangeMax: d,
			mustBeNumeric: A,
			mustBeURL: g,
			fnStrValidateURL: C,
			mustBeEmail: _,
			focusOnMount: f,
			tooltip: b,
			inlineControls: y,
			maxChars: S,
			...w
		} = this.props;
		let B =
			"DialogInput DialogInputPlaceholder DialogTextInputBase" +
			(w.className ? " " + w.className : "");
		let v = "copiedAnimation";
		let I = this.state.m_bCompletedCopiedAnimation;
		if (this.m_CopiedAnimation) {
			v = "copiedAnimation animationPlaying";
		}
		if (I) {
			v = "copiedAnimation animationComplete";
		}
		let E = {};
		if (this.state.m_CopiedYPos !== undefined) {
			E.transform = "translateY(" + this.state.m_CopiedYPos + "px)";
		}
		let M = _a.createElement(
			_a.Fragment,
			null,
			_a.createElement(
				o.Z,
				{
					className: "DialogInput_Wrapper _DialogLayout",
					"flow-children": "row",
					ref: this.ref,
				},
				_a.createElement(h, {
					type: "text",
					...w,
					className: B,
					ref: this.OnInputRef,
					onChange: this.OnChanged,
				}),
				i &&
					_a.createElement(
						"div",
						{
							className: "displayRow",
						},
						_a.createElement(
							n.$n,
							{
								className: "DialogInput_CopyAction Primary",
								onClick: this.OnCopyClick,
							},
							(0, Localize)("#Button_Copy"),
						),
						_a.createElement(
							"div",
							{
								style: E,
								className: v,
							},
							(0, Localize)("#Button_Copied"),
						),
					),
				(c || (s && w.value)) &&
					_a.createElement(
						"div",
						{
							className: "DialogInput_ClearAction",
							onClick: this.OnClearClick,
						},
						_a.createElement(l.sED, null),
					),
				y,
			),
			t &&
				_a.createElement(
					"div",
					{
						className: "DialogLabelExplainer",
					},
					t,
				),
		);
		if (e) {
			return _a.createElement(
				"div",
				{
					className:
						"DialogInputLabelGroup _DialogLayout DialogRequirementLabel",
				},
				_a.createElement(
					"label",
					null,
					_a.createElement(
						"div",
						{
							className: "DialogLabel",
						},
						e,
						" ",
						this.props.tooltip &&
							_a.createElement(p.o, {
								tooltip: this.props.tooltip,
							}),
						_a.createElement(
							"span",
							{
								className: "DialogInputRequirementLabel",
							},
							this.props.requiredLabel,
						),
						" ",
					),
					M,
					this.state.m_bNumberBelowMinRange
						? _a.createElement(
								"div",
								null,
								" ",
								(0, Localize)("#Input_Error_NumberTooSmall"),
								" ",
							)
						: null,
					this.state.m_bNumberAboveMaxRange
						? _a.createElement(
								"div",
								null,
								" ",
								(0, Localize)("#Input_Error_NumberTooLarge"),
								" ",
							)
						: null,
					this.state.m_bIsInvalidURL
						? _a.createElement(
								"div",
								null,
								" ",
								(0, Localize)("#Input_Error_MustBeURL"),
								" ",
							)
						: null,
					this.state.m_strInvalidURLMessage
						? _a.createElement(
								"div",
								null,
								" ",
								this.state.m_strInvalidURLMessage,
								" ",
							)
						: null,
					this.state.m_bIsInvalidEmail
						? _a.createElement(
								"div",
								null,
								" ",
								(0, Localize)("#Input_Error_MustBeEmail"),
								" ",
							)
						: null,
					this.state.m_bIsNotNumeric
						? _a.createElement(
								"div",
								null,
								" ",
								(0, Localize)("#Input_Error_MustBeNumber"),
								" ",
							)
						: null,
					this.state.m_bAboveMaxChars
						? _a.createElement(
								"div",
								null,
								" ",
								LocalizeReact("#Input_Error_TooManyCharacters", S),
								" ",
							)
						: null,
				),
			);
		} else {
			return M;
		}
	}
}
(0, i.Cg)([d.oI], pd.prototype, "OnInputRef", null);
(0, i.Cg)([d.oI], pd.prototype, "OnChanged", null);
(0, i.Cg)([d.oI], pd.prototype, "OnCopyClick", null);
(0, i.Cg)([d.oI], pd.prototype, "OnClearClick", null);
export class eo extends pd {
	m_bFocused = false;
	OnBackgroundClick() {
		if (this.m_elInput) {
			this.m_elInput.focus();
		}
	}
	OnInputFocus(e) {
		if (!this.m_bFocused) {
			this.m_bFocused = true;
			this.forceUpdate();
		}
		if (this.props.onFocus) {
			this.props.onFocus(e);
		}
	}
	OnInputBlur(e) {
		if (this.m_bFocused) {
			this.m_bFocused = false;
			this.forceUpdate();
		}
		if (this.props.onBlur) {
			this.props.onBlur(e);
		}
	}
	render() {
		const {
			label: e,
			description: t,
			requiredLabel: r,
			bShowCopyAction: n,
			bShowClearAction: i,
			bAlwaysShowClearAction: l,
			rangeMin: c,
			rangeMax: u,
			maxChars: d,
			mustBeNumeric: A,
			mustBeURL: p,
			fnStrValidateURL: g,
			mustBeEmail: h,
			focusOnMount: C,
			tooltip: _,
			inlineControls: f,
			className: b,
			children: y,
			...S
		} = this.props;
		return _a.createElement(
			"div",
			{
				className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
			},
			_a.createElement(
				"label",
				null,
				e &&
					_a.createElement(
						"div",
						{
							className: "DialogLabel",
						},
						e,
					),
				_a.createElement(
					"div",
					{
						className: (0, _m.A)(
							"_DialogInputContainer",
							"DialogTextInputBase",
							this.m_bFocused && "Active",
						),
						onClick: this.OnBackgroundClick,
					},
					_a.createElement(
						o.Z,
						{
							className: "DialogListBuilderInput_List",
							"flow-children": "row",
						},
						_a.Children.map(y, (e, t) =>
							_a.createElement(
								"div",
								{
									className: "DialogListBuilderInput_ListItem",
									key: t,
								},
								e,
							),
						),
						_a.createElement(s.BA, {
							type: "text",
							...S,
							className: "DialogListBuilderInput_Input DialogInputPlaceholder",
							ref: this.OnInputRef,
							onFocus: this.OnInputFocus,
							onBlur: this.OnInputBlur,
							size: 4,
						}),
					),
				),
				t &&
					_a.createElement(
						"div",
						{
							className: "DialogLabelExplainer",
						},
						t,
					),
			),
		);
	}
}
(0, i.Cg)([d.oI], eo.prototype, "OnBackgroundClick", null);
(0, i.Cg)([d.oI], eo.prototype, "OnInputFocus", null);
(0, i.Cg)([d.oI], eo.prototype, "OnInputBlur", null);
export const Zy = (e, t) =>
	"" + (e != null ? Number.parseFloat(e.toFixed(3)) : null) + (t ?? "");
export const Kc = (e) => {
	const t = (0, g.Zt)("SliderField", rP);
	return _a.createElement(t, {
		...e,
	});
};
export class rP extends _a.Component {
	m_flLastSetValue = null;
	constructor(e) {
		super(e);
	}
	ClampValue(e) {
		if (e === undefined || isNaN(e) || e < this.props.min) {
			return this.props.min;
		} else if (e > this.props.max) {
			return this.props.max;
		} else {
			return e;
		}
	}
	BPropsValid() {
		return this.props.max > this.props.min;
	}
	m_elSlider;
	m_rectSlider;
	OnMouseDown(e) {
		this.m_elSlider = e.currentTarget;
		this.m_rectSlider = this.m_elSlider.getBoundingClientRect();
		if (this.props.onChangeStart) {
			this.props.onChangeStart(1);
		}
		this.AdjustSliderForClientX(e.clientX, 1);
		this.m_elSlider.ownerDocument.defaultView?.addEventListener(
			"mousemove",
			this.OnMouseMove,
		);
		this.m_elSlider.ownerDocument.defaultView?.addEventListener(
			"mouseup",
			this.OnMouseUp,
		);
	}
	OnMouseMove(e) {
		this.AdjustSliderForClientX(e.clientX, 1);
	}
	OnMouseUp(e) {
		this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
			"mousemove",
			this.OnMouseMove,
		);
		this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
			"mouseup",
			this.OnMouseUp,
		);
		this.CompleteChange(1);
	}
	OnTouchStart(e) {
		this.m_elSlider = e.currentTarget;
		this.m_rectSlider = this.m_elSlider.getBoundingClientRect();
		if (this.props.onChangeStart) {
			this.props.onChangeStart(0);
		}
		this.AdjustSliderForClientX(e.touches[0].clientX, 0);
		this.m_elSlider.ownerDocument.defaultView?.addEventListener(
			"touchmove",
			this.OnTouchMove,
		);
		this.m_elSlider.ownerDocument.defaultView?.addEventListener(
			"touchend",
			this.OnTouchEnd,
		);
	}
	OnTouchMove(e) {
		this.AdjustSliderForClientX(e.touches[0].clientX, 0);
	}
	OnTouchEnd(e) {
		this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
			"touchmove",
			this.OnTouchMove,
		);
		this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
			"touchend",
			this.OnTouchEnd,
		);
		this.CompleteChange(0);
	}
	OnKeyDown(e) {
		let t = 1;
		if (e.ctrlKey) {
			t = Math.max(
				1,
				Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
			);
		}
		if (e.keyCode == 37) {
			this.IncrementValue(t * -1);
			e.preventDefault();
		} else if (e.keyCode == 39) {
			this.IncrementValue(t * 1);
			e.preventDefault();
		}
		this.CompleteChange(2);
	}
	AdjustSliderForClientX(e, t) {
		let r =
			((e - this.m_rectSlider.left) /
				(this.m_rectSlider.right - this.m_rectSlider.left)) *
				(this.props.max - this.props.min) +
			this.props.min;
		r = Math.floor(r + 0.5);
		const n = this.ClampValue(r);
		if (n != this.props.value) {
			if (this.props.onChange) {
				this.props.onChange(n, t);
			}
			this.m_flLastSetValue = n;
		}
	}
	CompleteChange(e) {
		if (this.m_flLastSetValue != null) {
			if (this.props.onChangeComplete) {
				this.props.onChangeComplete(this.m_flLastSetValue, e);
			}
			this.m_flLastSetValue = null;
		}
	}
	IncrementValue(e) {
		let t = this.ClampValue(this.props.value + e);
		if (t != this.props.value) {
			if (this.props.onChange) {
				this.props.onChange(t, 2);
			}
			this.m_flLastSetValue = t;
		}
	}
	render() {
		let e = {};
		let t = {};
		if (this.BPropsValid()) {
			let r =
				((this.props.value - this.props.min) * 100) /
					(this.props.max - this.props.min) +
				"%";
			e.width = r;
			t.left = r;
		}
		const { label: r, description: n, tooltip: i, ...s } = this.props;
		const o = this.props.renderValue ?? Zy;
		return _a.createElement(
			"div",
			{
				className:
					"DialogSlider_Container _DialogInputContainer _DialogLayout" +
					(this.props.className ? " " + this.props.className : ""),
				onKeyDown: this.OnKeyDown,
				tabIndex: this.props.tabIndex || 0,
			},
			r &&
				_a.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					r,
					Boolean(i) &&
						_a.createElement(p.o, {
							tooltip: i,
						}),
				),
			_a.createElement(
				"div",
				{
					className: "DialogSlider_Slider",
					onMouseDown: this.OnMouseDown,
					onTouchStart: this.OnTouchStart,
				},
				_a.createElement("div", {
					className: "DialogSlider_Value",
					style: e,
				}),
				_a.createElement("div", {
					className: "DialogSlider_Grabber",
					style: t,
				}),
			),
			this.props.showValue &&
				_a.createElement(
					"div",
					{
						className: "DialogLabelExplainer",
					},
					o(this.props.value, this.props.valueSuffix),
				),
			n &&
				_a.createElement(
					"div",
					{
						className: "DialogLabelExplainer",
					},
					n,
				),
		);
	}
}
(0, i.Cg)([d.oI], rP.prototype, "OnMouseDown", null);
(0, i.Cg)([d.oI], rP.prototype, "OnMouseMove", null);
(0, i.Cg)([d.oI], rP.prototype, "OnMouseUp", null);
(0, i.Cg)([d.oI], rP.prototype, "OnTouchStart", null);
(0, i.Cg)([d.oI], rP.prototype, "OnTouchMove", null);
(0, i.Cg)([d.oI], rP.prototype, "OnTouchEnd", null);
(0, i.Cg)([d.oI], rP.prototype, "OnKeyDown", null);
var S = require("./26970.js");
var w = require("./83441.js");
var B = w;
const v = _a.createContext({
	setValue: () => {},
});
export function zW(e) {
	const { value: t, onChange: r, classNames: n, disabled: i, children: s } = e;
	const l = {
		value: t,
		setValue: r,
		disabled: i,
	};
	return _a.createElement(
		v.Provider,
		{
			value: l,
		},
		_a.createElement(
			o.Z,
			{
				className: (0, _m.A)(
					B.Group,
					"Shared_Radio_Group",
					n,
					i && B.Disabled,
					l.bVertical && B.VerticalGrouping,
				),
			},
			s,
		),
	);
}
export function a(e) {
	const { value: t, children: r, ...n } = e;
	const { value: i, setValue: o, disabled: l } = _a.useContext(v);
	let c = o;
	const u = t === i;
	return _a.createElement(
		s.ml,
		{
			className: (0, _m.A)(
				B.Button,
				"RadioButton",
				u && B.Active,
				l && B.Disabled,
			),
			onClick: l ? undefined : () => c(t),
			...n,
		},
		r,
	);
}
import { AssertMsg } from "../../actual_src/utils/assert.js";
var T = require(/*webcrack:missing*/ "./31084.js");
var R = require(/*webcrack:missing*/ "./98995.js");
var k = require("./28999.js");
var D = k;
export function m1(e) {
	return typeof e == "object" && "data" in e;
}
export function MJ(e) {
	return typeof e == "object" && "bIsSeparator" in e;
}
export function OV(e) {
	return typeof e == "object" && "options" in e;
}
function O(e, t) {
	if (e === t) {
		return true;
	}
	if (!Array.isArray(e) || !Array.isArray(t)) {
		return false;
	}
	if (e.length != t.length) {
		return false;
	}
	for (let r = 0; r < e.length; r++) {
		if (!P(e[r], t[r])) {
			return false;
		}
	}
	return true;
}
function P(e, t) {
	if (e == null || t == null) {
		return e == t;
	} else {
		return (
			(!!MJ(e) && !!MJ(t)) ||
			(!MJ(e) &&
				!MJ(t) &&
				e.label === t.label &&
				e.tooltip === t.tooltip &&
				OV(e) == OV(t) &&
				(!OV(e) || !OV(t) || !!O(e.options, t.options)) &&
				(!m1(e) || !m1(t) || e.data === t.data))
		);
	}
}
export function Ld(e) {
	const t = [e];
	const r = [];
	while (t.length > 0) {
		const e = t.shift();
		if (Array.isArray(e)) {
			e.forEach((e) => {
				if (m1(e)) {
					r.push(e);
				} else if (OV(e)) {
					t.push(e.options);
				}
			});
		}
	}
	return r;
}
function z(e, t) {
	if (e != null) {
		for (let r = 0; r < e.length; r++) {
			const n = e[r];
			if (m1(n) && n.data === t) {
				return n;
			}
			if (OV(n)) {
				const e = z(n.options, t);
				if (e != null) {
					return e;
				}
			}
		}
	}
}
export function m(e) {
	const t = (0, g.Zt)("DropDownField", pU);
	return _a.createElement(t, {
		...e,
	});
}
export function pU(e) {
	const {
		label: t,
		tooltip: r,
		strClassName: i,
		dropDownControlRef: s,
		...o
	} = e;
	return _a.createElement(
		n.mq,
		{
			label: t,
			tooltip: r,
			className: i,
		},
		_a.createElement(ZU, {
			menuLabel: t,
			...o,
			ref: s,
		}),
	);
}
export const Ws = _a.forwardRef(function (e, t) {
	return _a.createElement(
		s.fu,
		{
			focusable: e.focusable,
			className: (0, _m.A)(
				e.className,
				"DialogDropDown",
				"_DialogInputContainer",
				{
					Active: e.opened,
					Disabled: e.disabled,
				},
			),
			tabIndex: e.tabIndex,
			onClick: e.onClick,
			onKeyDown: e.onKeyDown,
			disabled: e.disabled,
			type: "button",
			ref: t,
			noFocusRing: e.noFocusRing,
		},
		e.children,
		!e.disabled &&
			_a.createElement(
				"div",
				{
					className: (0, _m.A)(e.arrowClassName, "DialogDropDown_Arrow"),
				},
				_a.createElement(l.GB9, null),
			),
	);
});
export class ZU extends _a.Component {
	static contextType = g.Ce;
	m_elInput;
	m_iMenuInstance;
	constructor(e) {
		super(e);
		this.state = {
			value: z(e.rgOptions, e.selectedOption),
			bOpened: false,
		};
	}
	SetSelectedOption(e) {
		if (this.props.controlled) {
			return;
		}
		const t = z(this.props.rgOptions, e);
		if (!P(t, this.value)) {
			this.setState({
				value: t,
			});
		}
	}
	get value() {
		if (this.props.controlled) {
			return z(this.props.rgOptions, this.props.selectedOption);
		} else {
			return this.state.value;
		}
	}
	shouldComponentUpdate(e, t, r) {
		if (e.selectedOption !== this.props.selectedOption) {
			return true;
		}
		if (e.disabled != this.props.disabled) {
			return true;
		}
		if (t.bOpened !== this.state.bOpened) {
			return true;
		}
		if (!O(this.props.rgOptions, e.rgOptions)) {
			return true;
		}
		if (!P(t.value, this.value)) {
			return true;
		}
		let n = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
		for (let t of n) {
			if (e[t] !== this.props[t]) {
				return true;
			}
		}
		return false;
	}
	componentDidUpdate(e, t) {
		AssertMsg(
			this.props.controlled === e.controlled,
			'"controlled" prop should never change after mount',
		);
		const r = !O(e.rgOptions, this.props.rgOptions);
		const n = e.selectedOption !== this.props.selectedOption;
		const i = this.value !== t.value;
		if (!this.props.controlled && (r || i || n)) {
			if (n || this.value == null) {
				this.SetSelectedOption(this.props.selectedOption);
			} else {
				this.SetSelectedOption(this.value.data);
			}
		}
		if (r || i) {
			if (this.state.bOpened) {
				this.m_iMenuInstance?.SetOnHideCallback(undefined);
				this.m_iMenuInstance?.Hide();
				this.m_iMenuInstance = undefined;
				this.BuildMenu();
			} else if (this.m_iMenuInstance) {
				this.m_iMenuInstance.SetOnHideCallback(undefined);
				this.m_iMenuInstance = undefined;
			}
		}
	}
	OnInputRef(e) {
		if (e) {
			this.m_elInput = e;
		}
	}
	get element() {
		return this.m_elInput;
	}
	ToggleMenu() {
		if (this.state.bOpened) {
			this.HideMenu();
		} else {
			if (
				this.props.onMenuWillOpen &&
				this.props.onMenuWillOpen(this.ShowMenu) == 0
			) {
				return;
			}
			this.ShowMenu();
		}
	}
	OnValueSelected(e, t) {
		this.HideMenu();
		this.setState({
			value: t,
		});
		if (this.props.onChange) {
			this.props.onChange(t, this, e);
		}
	}
	BuildMenu() {
		let e = "DialogMenuPosition";
		if (this.props.strDropDownClassName) {
			e += " " + this.props.strDropDownClassName;
		}
		let t = {
			bOverlapHorizontal: true,
			bMatchWidth: this.props.bMatchWidth ?? true,
			bFitToWindow: true,
			strClassName: e,
			bDisableMouseOverlay: this.props.bDisableMouseOverlay,
			...this.props.contextMenuPositionOptions,
		};
		let r = this.props.contextMenuPositionOptions?.onCancel;
		this.m_iMenuInstance = (0, T.lX)(
			_a.createElement(n4, {
				rgOptions: this.props.rgOptions,
				onValueSelected: this.OnValueSelected,
				onCancel: r,
				selectedValue: this.value?.data,
				strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
				strDropDownItemClassName: this.props.strDropDownItemClassName,
			}),
			this.m_elInput,
			t,
		);
		this.m_iMenuInstance.SetLabel(
			this.props.menuLabel ??
				(typeof this.props.strDefaultLabel == "string" &&
					this.props.strDefaultLabel),
		);
		this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
	}
	ShowMenu() {
		if (this.m_iMenuInstance) {
			this.m_iMenuInstance.Show();
		} else {
			this.BuildMenu();
		}
		if (this.props.onMenuOpened) {
			this.props.onMenuOpened();
		}
		this.setState({
			bOpened: true,
		});
	}
	HideMenu() {
		if (this.m_iMenuInstance) {
			this.m_iMenuInstance.Hide();
		}
		this.setState(
			{
				bOpened: false,
			},
			() => this.m_elInput.focus(),
		);
	}
	OnKeyDown(e) {
		q(e, this.props.rgOptions.filter(m1), this.value?.data, (e) =>
			this.OnValueSelected(undefined, e),
		);
	}
	render() {
		const e = _a.createElement(
			"div",
			{
				className: "DialogDropDown_CurrentDisplay",
			},
			this.value?.label ?? this.props.strDefaultLabel,
		);
		const t =
			this.props.renderButtonValue != null
				? this.props.renderButtonValue(e)
				: e;
		const r = this.props.focusable ?? true;
		const n =
			this.props.renderButton || this.context.DropDownControlButton || Ws;
		return _a.createElement(
			n,
			{
				focusable: r,
				disabled: this.props.disabled ?? false,
				opened: this.state.bOpened,
				onClick: this.props.disabled ? undefined : this.ToggleMenu,
				onKeyDown: this.props.disabled ? undefined : this.OnKeyDown,
				tabIndex: this.props.tabIndex ?? (r ? 0 : undefined),
				ref: this.OnInputRef,
				className: this.props.strDropDownButtonClassName,
				arrowClassName: this.props.arrowClassName,
			},
			t,
		);
	}
}
(0, i.Cg)([d.oI], ZU.prototype, "OnInputRef", null);
(0, i.Cg)([d.oI], ZU.prototype, "ToggleMenu", null);
(0, i.Cg)([d.oI], ZU.prototype, "OnValueSelected", null);
(0, i.Cg)([d.oI], ZU.prototype, "ShowMenu", null);
(0, i.Cg)([d.oI], ZU.prototype, "HideMenu", null);
(0, i.Cg)([d.oI], ZU.prototype, "OnKeyDown", null);
export const Gt = _a.createContext(null);
export function n4(e) {
	const t = (0, g.Zt)("DropDownMenu", Q);
	return _a.createElement(
		Gt.Provider,
		{
			value: {},
		},
		_a.createElement(t, {
			...e,
		}),
	);
}
function q(e, t, r, n) {
	let i;
	if (e.key === "ArrowDown") {
		i = (t.findIndex((e) => e.data === r) + 1) % t.length;
	} else if (e.key === "ArrowUp") {
		const e = t.findIndex((e) => e.data === r);
		i = e <= 0 ? t.length - 1 : e - 1;
	}
	if (i !== undefined) {
		n(t[i]);
		e.preventDefault();
	}
}
function Q(e) {
	const {
		rgOptions: t,
		strDropDownItemClassName: r,
		onValueSelected: n,
		selectedValue: i,
	} = e;
	const [s, o] = _a.useState(i);
	const l = _a.useMemo(() => t.filter(m1), [t]);
	const c = _a.useCallback(
		(e) => {
			q(e, l, s, (e) => o(e.data));
		},
		[s, l],
	);
	return _a.createElement(
		"div",
		{
			className: (0, _m.A)(
				D.DialogDropDownMenu,
				"_DialogInputContainer",
				e.strDropDownMenuCtnClass,
			),
			onKeyDown: c,
		},
		_a.createElement(Z, {
			rgOptions: t,
			strDropDownItemClassName: r,
			onValueSelected: n,
			activeValue: s,
			setActiveValue: o,
		}),
	);
}
function Z(e) {
	const { rgOptions: t, ...r } = e;
	return t.map((e, t) =>
		MJ(e)
			? _a.createElement("hr", {
					key: t,
					className: (0, _m.A)(
						D.DialogDropDownMenu_Item,
						D.DialogDropDownMenu_Separator,
					),
				})
			: OV(e)
				? _a.createElement(Z, {
						key: t,
						...r,
						rgOptions: e.options,
					})
				: _a.createElement(Y, {
						key: t,
						...r,
						option: e,
					}),
	);
}
function Y(e) {
	const {
		option: t,
		strDropDownItemClassName: r,
		onValueSelected: n,
		activeValue: i,
		setActiveValue: s,
	} = e;
	const o = _a.useCallback((e) => e && e.focus(), []);
	const l = _a.useCallback(() => {
		s(t.data);
	}, [s, t]);
	const c = t.data === i;
	return _a.createElement(
		"button",
		{
			type: "button",
			className: (0, _m.A)(
				D.DialogDropDownMenu_Item,
				r,
				t.strOptionClass,
				c && "ContextMenuAutoFocus",
			),
			onClick: (e) => n(e, t),
			ref: c ? o : undefined,
			onMouseEnter: l,
		},
		Boolean(t.tooltip)
			? _a.createElement(
					R.he,
					{
						toolTipContent: t.tooltip,
						bTopmost: true,
						className: "TooltipContainer",
					},
					t.label,
				)
			: _a.createElement("div", null, t.label),
	);
}
class K extends _a.Component {
	state = {
		rgOptions: undefined,
	};
	async OnMenuOpened() {
		if (!this.state.rgOptions) {
			let e = await this.props.fnLoadOptions();
			this.setState({
				rgOptions: e,
			});
		}
	}
	render() {
		const {
			fnLoadOptions: e,
			strInitialDisplay: t,
			initialValue: r,
			...n
		} = this.props;
		let { rgOptions: i } = this.state;
		if (i === undefined) {
			if (t || r) {
				i = [
					{
						label: t,
						data: r,
					},
				];
				n.selectedOption = r;
			} else {
				i = [];
			}
		}
		return _a.createElement(m, {
			...n,
			rgOptions: i,
			onMenuOpened: this.OnMenuOpened,
		});
	}
}
(0, i.Cg)([d.oI], K.prototype, "OnMenuOpened", null);
var X = require("./91999.js");
export function aZ(e) {
	const t = e.descriptionVisibility ?? "always";
	const r = e.upperDescriptionVisibility ?? "always";
	const n = e.iconVisibility ?? "always";
	const i = (0, _m.A)(X.DropDownLabelContainer, e.strClassNames);
	const s = _a.useContext(Gt) != null;
	const o = e.description != null && (s || t == "always");
	const l = e.upperDescription != null && (s || r == "always");
	const c = e.icon != null && (s || n == "always");
	return _a.createElement(
		"div",
		{
			className: i,
		},
		c &&
			_a.createElement(
				"div",
				{
					className: X.DropDownLabelIconContainer,
				},
				e.icon,
			),
		_a.createElement(
			"div",
			{
				className: X.DropDownLabelTextColumn,
			},
			l &&
				_a.createElement(
					"div",
					{
						className: X.DropDownLabelUpperDescription,
					},
					e.upperDescription,
				),
			_a.createElement(
				"div",
				{
					className: (0, _m.A)(X.DropDownLabelTitle, e.strTitleClassNames),
				},
				e.title,
			),
			o &&
				_a.createElement(
					"div",
					{
						className: X.DropDownLabelDescription,
					},
					e.description,
				),
		),
	);
}
var $ = require("./54043.js");
var ee = require("./97936.js");
export class Cl extends _a.Component {
	m_refTextArea = _a.createRef();
	m_nTextAreaPadding;
	m_cEntryLength = Number.MAX_VALUE;
	get textarea() {
		return this.m_refTextArea.current;
	}
	get value() {
		return this.m_refTextArea.current?.value;
	}
	focus() {
		this.m_refTextArea.current?.focus();
	}
	InternalOnInput() {
		const e = this.m_refTextArea.current;
		const t = this.GetMinHeight();
		const r = this.GetMaxHeight();
		let n;
		let i = e.value.length;
		if (this.m_nTextAreaPadding === undefined) {
			this.CalculatePadding();
		}
		if (i < this.m_cEntryLength) {
			n = window.scrollY;
			e.style.height = t + "px";
		}
		if (e.scrollHeight > r) {
			e.style.height = r + "px";
			e.style.overflow = "auto";
		} else if (e.scrollHeight != e.clientHeight) {
			let r = Math.max(e.scrollHeight, t);
			e.style.height = r - this.m_nTextAreaPadding + "px";
			if (e.style.overflow == "auto") {
				e.style.overflow = "hidden";
			}
		}
		if (n !== undefined) {
			window.scrollTo(window.scrollX, n);
		}
		this.m_cEntryLength = i;
	}
	CalculatePadding() {
		const e = getComputedStyle(this.m_refTextArea.current);
		this.m_nTextAreaPadding =
			e.boxSizing == "border-box"
				? 0
				: parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
	}
	GetMinHeight() {
		return this.props.nMinHeight || 20;
	}
	GetMaxHeight() {
		return this.props.nMaxHeight || 500;
	}
	DeferredInternalOnInput() {
		window.setTimeout(this.InternalOnInput, 1);
	}
	OnKeyUp(e) {
		this.InternalOnInput();
		if (this.props.onKeyUp) {
			this.props.onKeyUp(e);
		}
	}
	OnBlur(e) {
		this.DeferredInternalOnInput();
		if (this.props.onBlur) {
			this.props.onBlur(e);
		}
	}
	OnClick(e) {
		this.InternalOnInput();
		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}
	OnPaste(e) {
		this.DeferredInternalOnInput();
		if (this.props.onPaste) {
			this.props.onPaste(e);
		}
	}
	OnCut(e) {
		this.InternalOnInput();
		if (this.props.onCut) {
			this.props.onCut(e);
		}
	}
	componentDidMount() {
		this.m_refTextArea.current.style.overflow = "hidden";
		this.m_refTextArea.current.style.resize = "none";
		this.InternalOnInput();
	}
	componentDidUpdate(e) {
		if (
			e.nMinHeight != this.props.nMinHeight ||
			e.nMaxHeight != this.props.nMaxHeight
		) {
			this.m_cEntryLength = Number.MAX_VALUE;
		}
		if (this.m_refTextArea.current?.value.length != this.m_cEntryLength) {
			this.InternalOnInput();
		}
	}
	render() {
		const { nMinHeight: e, nMaxHeight: t, ...r } = this.props;
		return _a.createElement(s.dO, {
			...r,
			ref: this.m_refTextArea,
			onKeyUp: this.OnKeyUp,
			onBlur: this.OnBlur,
			onClick: this.OnClick,
			onPaste: this.OnPaste,
			onCut: this.OnCut,
		});
	}
}
(0, i.Cg)([d.oI], Cl.prototype, "InternalOnInput", null);
(0, i.Cg)([d.oI], Cl.prototype, "OnKeyUp", null);
(0, i.Cg)([d.oI], Cl.prototype, "OnBlur", null);
(0, i.Cg)([d.oI], Cl.prototype, "OnClick", null);
(0, i.Cg)([d.oI], Cl.prototype, "OnPaste", null);
(0, i.Cg)([d.oI], Cl.prototype, "OnCut", null);
var re = require("./12316.js");
var ne = require("./2053.js");
var ie = ne;
var ae = require("./22004.js");
var se = require("./91371.js");
var oe = se;
var le = require(/*webcrack:missing*/ "./72476.js");
var ce = require(/*webcrack:missing*/ "./28864.js");
const me = _a.createContext(null);
function ue(e) {
	const t = _a.useContext(me);
	const r = (0, le.rP)().IN_VR;
	const { title: n, icon: i, active: s, ...l } = e;
	return _a.createElement(
		o.Z,
		{
			preferredFocus: s,
			navRef: s && t ? t : undefined,
			noFocusRing: true,
			onActivate: r ? undefined : l.onClick,
			onFocus: r ? undefined : l.onClick,
			...l,
		},
		i &&
			_a.createElement(
				"div",
				{
					className: oe.PageListItem_Icon,
				},
				i,
			),
		_a.createElement(
			"div",
			{
				className: oe.PageListItem_Title,
			},
			n,
		),
	);
}
function de(e) {
	return _a.createElement("div", {
		className: oe.Separator,
	});
}
const Ae = _a.forwardRef(function (e, t) {
	const { page: r, bAutoFocusPageContent: n, showTitle: i = false } = e;
	const s = _a.useRef(null);
	const o = _a.useRef(true);
	_a.useEffect(() => {
		if (!o.current || !n) {
			s.current?.TakeFocus();
		}
		o.current = false;
	}, [r, n]);
	return _a.createElement(
		me.Provider,
		{
			value: s,
		},
		_a.createElement(ee.Mw, {
			...e,
			stylesheet: oe,
			showTitle: i,
			PageListItemComponent: ue,
			PageListSeparatorComponent: de,
			renderPageContent:
				e.renderPageContent ||
				((t, r, n) =>
					_a.createElement(pe, {
						pages: e.pages,
						activePage: t,
						refForPage: r,
						PageComponent: n,
					})),
		}),
	);
});
function pe(e) {
	const { pages: t, activePage: r, refForPage: n, PageComponent: i } = e;
	const s = (function (e) {
		let t = _a.useRef(e);
		let r = _a.useRef(ae.fz.None);
		let n = t.current;
		if (n == e) {
			return r.current;
		}
		let i = ae.fz.None;
		if (n < e) {
			i = ae.fz.Down;
		} else if (n > e) {
			i = ae.fz.Up;
		}
		t.current = e;
		r.current = i;
		return i;
	})(_a.useMemo(() => t.findIndex((e) => e == r), [t, r]));
	const o = (function (e, t) {
		const r = _a.useMemo(() => new Map(), []);
		const n = _a.useRef();
		n.current = e;
		const i = _a.useRef();
		i.current = t;
		const s = _a.useCallback(
			(e) => (t) => {
				r.set(e, t);
				if (e === n.current) {
					(0, ce.cZ)(i.current, t);
				}
			},
			[r],
		);
		_a.useEffect(() => {
			(0, ce.cZ)(t, e && r.get(e));
			return () => (0, ce.cZ)(t, undefined);
		}, [r, e, t]);
		return s;
	})(r?.identifier, n);
	let l = (0, ae.K$)(oe, s);
	return _a.createElement(
		ae.FF,
		{
			childrenKey: r?.identifier,
			childrenClasses: (0, ae.Qh)(oe, oe.ContentTransition),
			directionClass: l,
			animate: s != ae.fz.None,
		},
		r &&
			_a.createElement(i, {
				ref: o(r.identifier),
				key: r.identifier,
				stylesheet: oe,
				activePage: r,
			}),
	);
}
const ge = _a.forwardRef(function (e, t) {
	return _a.createElement(s.BA, {
		noFocusRing: true,
		...e,
		ref: t,
		className: (0, _m.A)(ie.BasicTextInput, e.className),
		size: e.size ?? 1,
	});
});
const he = (e) =>
	_a.createElement(Vb, {
		layout: "below",
		...e,
	});
export function J1(e) {
	return _a.createElement(
		g.Ce.Provider,
		{
			value: {
				PagedSettings: Ae,
				Content: P9,
				DropDownControlButton: OB,
				DropDownField: he,
				DropDownMenu: Mm,
				ToggleField: y4,
				ToggleControl: J0,
				InputElement: ge,
				SliderField: d3,
				strButtonClassName: ie.Button,
			},
		},
		e.children,
	);
}
export function X8(e) {
	if (!e.children) {
		return null;
	}
	const t = e.topPadding ?? "standard";
	const r = e.alignItems ?? "left";
	const n = (0, _m.A)(
		ie.BottomButtons,
		t == "standard" && ie.StandardPadding,
		t == "compact" && ie.CompactPadding,
	);
	return _a.createElement(
		"div",
		{
			className: n,
		},
		_a.createElement(
			re.BC,
			{
				alignItems: r,
				spacing: "extra",
				bottomSeparator: "none",
				highlightOnFocus: false,
				navRef: e.navRef,
			},
			e.children,
		),
	);
}
var fe = require("./35488.js");
var be = require("./10768.js");
var ye = be;
var Se = require(/*webcrack:missing*/ "./88750.js");
var we = require(/*webcrack:missing*/ "./28869.js");
export function Vb(e) {
	const {
		label: t,
		tooltip: r,
		explainer: n,
		explainerTitle: i,
		disabled: s,
		strClassName: o,
		dropDownControlRef: l,
		description: c,
		layout: m,
		bottomSeparator: u,
		highlightOnFocus: d,
		autoFocus: A,
		indentLevel: p,
		childrenContainerWidth: g = "fixed",
		onContextMenu: h,
		onActivate: C,
		..._
	} = e;
	const { actionDescriptions: f, gamepadEvents: b, props: y } = (0, we.C7)(_);
	return _a.createElement(
		re.D0,
		{
			className: o,
			disabled: s,
			label: t,
			onActivate: C,
			description: c ?? r,
			childrenLayout: m ?? "inline",
			childrenContainerWidth: g,
			bottomSeparator: u,
			highlightOnFocus: d,
			autoFocus: A,
			indentLevel: p,
			onContextMenu: h,
			actionDescriptionMap: f,
			explainer: n,
			explainerTitle: i,
			...b,
		},
		_a.createElement(ZU, {
			menuLabel: t,
			disabled: s,
			...y,
			ref: l,
		}),
	);
}
function ve(e, t) {
	for (const r of e.options) {
		if (m1(r) && r.data === t) {
			return true;
		}
		if (OV(r) && ve(r, t)) {
			return true;
		}
	}
	return false;
}
export function Mm(e) {
	const t = (r) =>
		r?.map((r, n) =>
			MJ(r)
				? _a.createElement(Se.K5, {
						key: n,
					})
				: m1(r)
					? _a.createElement(
							Se.kt,
							{
								key: n,
								onSelected: (t) => e.onValueSelected && e.onValueSelected(t, r),
								selected: e.selectedValue === r.data,
							},
							_a.createElement(_a.Fragment, null, r.label),
						)
					: OV(r)
						? _a.createElement(
								Se.Vs,
								{
									label: r.label,
									key: n,
									selectedWithin: ve(r, e.selectedValue),
								},
								t(r.options),
							)
						: null,
		);
	return _a.createElement(
		Se.tz,
		{
			onCancel: e.onCancel,
		},
		t(e.rgOptions),
	);
}
export const OB = _a.forwardRef(function (e, t) {
	return _a.createElement(
		n.$n,
		{
			className: (0, _m.A)(ye.DropDownControlButton, e.className),
			focusable: e.focusable,
			disabled: e.disabled,
			onClick: e.onClick,
			tabIndex: e.tabIndex,
			ref: t,
		},
		_a.createElement(
			"div",
			{
				className: ie.DropDownControlButtonContents,
			},
			e.children,
			_a.createElement("div", {
				className: (0, _m.A)(ie.Spacer, "Spacer"),
			}),
			_a.createElement(fe.Carat, {
				direction: "down",
			}),
		),
	);
});
var Me = require("./62403.js");
export const yA = _a.forwardRef(function (e, t) {
	const { className: r, ...i } = e;
	let s = _a.useRef();
	let l = (0, d.Ue)(t, s);
	const [c, m] = _a.useState(false);
	const A = _a.useCallback(() => {
		m((e) => !e);
		window.setTimeout(() => s.current?.Focus(), 1);
	}, []);
	return _a.createElement(
		o.Z,
		{
			className: r,
			onOptionsButton: A,
			onOptionsActionDescription: (0, Localize)(
				c ? "#Login_HidePassword" : "#Login_ShowPassword",
			),
		},
		_a.createElement(pd, {
			autoComplete: "off",
			ref: l,
			inlineControls: _a.createElement(
				n.$n,
				{
					className: Me.TogglePasswordVisibilityBtn,
					onPointerDown: A,
					onOKButton: A,
				},
				c
					? _a.createElement(fe.FeatureVisible, null)
					: _a.createElement(fe.FeatureHidden, null),
			),
			...i,
			type: c ? "text" : "password",
		}),
	);
});
export const MQ = _a.forwardRef(function (e, t) {
	const { className: r, value: n, ...i } = e;
	const s = n ?? "";
	return _a.createElement(re.qq, {
		autoComplete: "off",
		value: s,
		ref: t,
		placeholder: "   .   .   .   ",
		...i,
		onChange: (e) => {
			if (
				!(function (e) {
					const t = e.split(".");
					if (t.length > 4) {
						return false;
					}
					for (let e = 0; e < t.length; e++) {
						const r = t[e];
						if (r == "") {
							if (e == t.length - 1) {
								continue;
							}
							return false;
						}
						if (!/^[0-9]*$/.test(r)) {
							return false;
						}
						const n = parseInt(r);
						if (!(n >= 0) || !(n <= 255)) {
							return false;
						}
					}
					return true;
				})(e.target.value)
			) {
				e.target.value = s;
			} else if (i.onChange) {
				i.onChange(e);
			}
		},
	});
});
export function QJ(e) {
	const {
		digits: t,
		onChange: r,
		autoFocus: n,
		type: i,
		className: l,
		digitClassName: c,
		value: u,
		validateDigit: d,
	} = e;
	const A = _a.useRef([]);
	_a.useEffect(() => {
		A.current[Math.min(u.length, t - 1)]?.current?.TakeFocus();
	}, [t, u]);
	const p = (e) => {
		if (!d || !!d(e.target.value)) {
			r(u + e.target.value);
		}
	};
	const g = (e) => {
		if (e.key === "Backspace") {
			r(u.slice(0, -1));
			e.preventDefault();
		}
	};
	const h = (e) => {
		let n = e.clipboardData.getData("Text");
		if (d) {
			n = n
				.split("")
				.filter((e) => d(e))
				.join("");
		}
		r((u + n).slice(0, t));
		e.preventDefault();
	};
	const _ = [];
	for (let e = 0; e < t; e++) {
		A.current[e] ||= (0, s.b$)();
		_.push(
			_a.createElement(
				o.Z,
				{
					key: "digit_" + e,
					className: c,
					navRef: A.current[e],
				},
				_a.createElement(pd, {
					type: i || "password",
					maxLength: 1,
					autoFocus: n && e == 0,
					onChange: p,
					onPaste: h,
					onKeyDown: g,
					value: u.charAt(e),
					disabled: e != Math.min(u.length, t - 1),
					className: (0, _m.A)(Me.PinDigit),
				}),
			),
		);
	}
	return _a.createElement(
		o.Z,
		{
			"flow-children": "row",
			className: (0, _m.A)(l, Me.Digits),
		},
		_,
	);
}
var De = require("./34384.js");
var Ne = De;
var Fe = require(/*webcrack:missing*/ "./31958.js");
var Ge = require(/*webcrack:missing*/ "./34742.js");
var Oe = require(/*webcrack:missing*/ "./10975.js");
var Pe = require("./72655.js");
var Le = require(/*webcrack:missing*/ "./61657.js");
var ze = require("./43397.js");
var xe = require("./16251.js");
import { GetTotalZoom } from "../../actual_src/utils/domutils.js";
const We = 1;
const Ve = (0, ze.i_)(Ne["error-shake-duration"]);
function He(e, t) {
	if (t < 0) {
		return 0;
	} else if (t > 1) {
		return 1;
	} else if (e == 0) {
		return t;
	} else {
		return Math.round(t / e) * e;
	}
}
function je(e, t, r) {
	const n = e + r * (t - e);
	return Number.parseFloat(n.toFixed(10));
}
function qe(e, t, r) {
	return (r - e) / (t - e);
}
var Qe;
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.MouseDragging = 1)] = "MouseDragging";
	e[(e.TouchStart = 2)] = "TouchStart";
	e[(e.TouchDragging = 3)] = "TouchDragging";
})((Qe ||= {}));
export class A0 extends _a.Component {
	m_refSlider = _a.createRef();
	m_refHandle = _a.createRef();
	m_navRefSlider = _a.createRef();
	m_sliderBounds = undefined;
	m_handleBounds = undefined;
	m_fZoom = 1;
	m_eDragMode = Qe.None;
	m_vTouchStartPosition = (0, Ge.D0)();
	m_fStartValue;
	m_fLatestUserValue;
	m_fLatestOnChangeValue;
	m_bInnerSliderHasFocus = false;
	m_nRepeatCount = 0;
	m_fInitalRepeatTime = undefined;
	get showHandle() {
		return this.props.showHandle ?? true;
	}
	get isKeyNavTarget() {
		return this.props.isKeyNavTarget ?? true;
	}
	get validRange() {
		return this.props.min < this.props.max;
	}
	get range() {
		if (this.validRange) {
			return this.props.max - this.props.min;
		} else {
			return 0;
		}
	}
	get step() {
		return Math.abs(this.props.step ?? We);
	}
	get normalizedStep() {
		return this.step / this.range;
	}
	get normalizedDpadStep() {
		const e = this.props.dpadStep ?? this.step;
		const t = e > 0 ? e / this.range : 0.01;
		return Math.max(t, this.normalizedStep);
	}
	get normalizedClampedValue() {
		const e =
			this.props.value == null || isNaN(this.props.value)
				? this.props.min
				: (0, Fe.OQ)(this.props.value, this.props.min, this.props.max);
		return qe(this.props.min, this.props.max, e);
	}
	get normalizedDefaultValue() {
		const e = this.props.resetValue;
		if (
			e != null &&
			!isNaN(e) &&
			!(e < this.props.min) &&
			!(e > this.props.max)
		) {
			return qe(this.props.min, this.props.max, e);
		}
	}
	get normalizedSliderOrigin() {
		const e = (0, Fe.OQ)(0, this.props.min, this.props.max);
		return qe(this.props.min, this.props.max, e);
	}
	get CanResetToDefault() {
		return (
			this.props.resetValue != null && this.props.value != this.props.resetValue
		);
	}
	get SliderChangeSource() {
		switch (this.m_eDragMode) {
			case Qe.MouseDragging:
				return 1;
			case Qe.TouchDragging:
			case Qe.TouchStart:
				return 0;
			case Qe.None:
				return;
		}
	}
	constructor(e) {
		super(e);
		this.m_fStartValue = this.props.value;
		this.m_fLatestUserValue = this.props.value;
		this.m_fLatestOnChangeValue = this.props.value;
	}
	RecomputeSliderBounds() {
		this.m_sliderBounds = this.m_refSlider.current?.getBoundingClientRect();
		this.m_handleBounds = this.m_refHandle.current?.getBoundingClientRect();
	}
	SetDragMode(e) {
		if (e != this.m_eDragMode) {
			this.m_eDragMode = e;
			if (this.props.onChangeStart) {
				this.props.onChangeStart(this.SliderChangeSource);
			}
			switch (e) {
				case Qe.MouseDragging:
				case Qe.TouchDragging:
				case Qe.TouchStart:
					this.RecomputeSliderBounds();
					this.m_fStartValue = this.props.value;
					this.m_fLatestUserValue = this.props.value;
				case Qe.None:
			}
			switch (e) {
				case Qe.MouseDragging:
					this.m_refSlider.current?.ownerDocument?.addEventListener(
						"mousemove",
						this.OnWindowMouseMove,
						{
							passive: false,
						},
					);
					this.m_refSlider.current?.ownerDocument?.addEventListener(
						"mouseup",
						this.OnWindowMouseUp,
						{
							passive: false,
						},
					);
					break;
				case Qe.TouchStart:
				case Qe.TouchDragging:
					this.m_refSlider.current?.ownerDocument?.addEventListener(
						"touchmove",
						this.OnWindowTouchMove,
						{
							passive: false,
						},
					);
					this.m_refSlider.current?.ownerDocument?.addEventListener(
						"touchend",
						this.OnWindowTouchEnd,
						{
							passive: false,
						},
					);
					break;
				case Qe.None:
					this.RemoveDocumentEventListeners();
			}
		}
	}
	OnGamepadDirection(e) {
		if (this.props.disabled) {
			return false;
		}
		let t = 0;
		if (e.detail.button == Le.pR.DIR_LEFT) {
			t = -1;
		} else {
			if (e.detail.button != Le.pR.DIR_RIGHT) {
				return false;
			}
			t = 1;
		}
		if (e.detail.is_repeat) {
			if (this.m_nRepeatCount == 0) {
				this.m_fInitalRepeatTime = performance.now();
			}
			this.m_nRepeatCount++;
		} else {
			this.m_nRepeatCount = 0;
			this.m_fInitalRepeatTime = performance.now();
		}
		const r = performance.now() - this.m_fInitalRepeatTime;
		const n = (0, Fe.bT)(r, 0, 2000, 500, 250);
		const i = Math.pow(2, Math.floor(r / n));
		const a = this.normalizedDpadStep * i;
		const s = (0, Fe.OQ)(a, this.normalizedDpadStep, 0.05) * t;
		const o = He(this.normalizedStep, this.normalizedClampedValue + s);
		let l = je(this.props.min, this.props.max, o);
		l = (0, Fe.OQ)(
			l,
			this.props.clampMin ?? this.props.min,
			this.props.clampMax ?? this.props.max,
		);
		if (l != this.props.value) {
			const e = l > this.m_fLatestUserValue;
			Oe.eZ.PlayNavSound(e ? Oe.PN.SliderUp : Oe.PN.SliderDown);
			this.m_fLatestUserValue = l;
			this.FireOnChange(l, 2);
		} else {
			Oe.eZ.PlayNavSound(Oe.PN.FailedNav);
		}
		return true;
	}
	FireOnChange(e, t) {
		if (this.m_fLatestOnChangeValue != e) {
			this.m_fLatestOnChangeValue = e;
			if (this.props.onChange) {
				this.props.onChange(e, t);
			}
		}
	}
	ComputeNormalizedValueForMousePosition(e) {
		if (this.m_sliderBounds == null) {
			return 0;
		}
		const t = e / this.m_fZoom;
		const r = this.m_sliderBounds.right - this.m_sliderBounds.left;
		const n =
			this.m_handleBounds == null
				? 0
				: this.m_handleBounds.right - this.m_handleBounds.left;
		const i = r - n;
		return (t - this.m_sliderBounds.left - n / 2) / i;
	}
	BShouldTriggerHapticOnSnap() {
		const e = this.normalizedStep;
		return e > 0 && e >= 1 / 40;
	}
	PlayHaptic(e) {
		this.m_refSlider.current?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
			e,
			0,
		);
	}
	UpdateSliderValueForPosition(e) {
		if (this.props.disabled || !this.m_refSlider.current) {
			return;
		}
		const t = this.ComputeNormalizedValueForMousePosition(e);
		const r = He(this.normalizedStep, t);
		let n = je(this.props.min, this.props.max, r);
		const i = this.props.clampMin ?? this.props.min;
		const a = this.props.clampMax ?? this.props.max;
		n = (0, Fe.OQ)(n, i, a);
		if (n != this.props.value) {
			const e = n > this.props.value;
			const t = this.step == 0;
			if (this.m_eDragMode == Qe.None || !t) {
				Oe.eZ.PlayNavSound(e ? Oe.PN.SliderUp : Oe.PN.SliderDown);
			}
			if (
				this.m_eDragMode == Qe.MouseDragging ||
				this.m_eDragMode == Qe.TouchDragging
			) {
				let e = false;
				if (
					(n == i || n == a) &&
					this.m_fLatestUserValue > i &&
					this.m_fLatestUserValue < a &&
					!e
				) {
					this.PlayHaptic(xe.en.SlidingEdge);
					e = true;
				} else if (
					!this.BShouldTriggerHapticOnSnap() &&
					this.m_fLatestUserValue >= i &&
					this.m_fLatestUserValue <= a
				) {
					const t = 40;
					if (
						Math.floor(((this.m_fLatestUserValue - i) / (a - i)) * t) !=
							Math.floor(((n - i) / (a - i)) * t) &&
						!e
					) {
						this.PlayHaptic(xe.en.Sliding);
						e = true;
					}
				}
				if (!t && !e) {
					this.PlayHaptic(xe.en.Snap);
					e = true;
				}
			}
			this.m_fLatestUserValue = n;
			this.FireOnChange(n, this.SliderChangeSource);
		}
	}
	OnWindowMouseMove(e) {
		this.UpdateSliderValueForPosition(e.clientX);
	}
	OnWindowMouseUp(e) {
		if (this.m_eDragMode != Qe.None) {
			this.Complete();
		}
	}
	OnMouseDown(e) {
		if (e.button == 0) {
			if (!this.props.disabled) {
				e.preventDefault();
				this.SetDragMode(Qe.MouseDragging);
				this.UpdateSliderValueForPosition(e.clientX);
			}
		}
	}
	OnTouchStart(e) {
		if (this.props.disabled || e.touches.length != 1) {
			return;
		}
		e.preventDefault();
		const t = this.ComputeNormalizedValueForMousePosition(e.touches[0].clientX);
		if (!(t < 0) && !(t > 1)) {
			this.SetDragMode(Qe.TouchStart);
			this.m_vTouchStartPosition = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY,
			};
		}
	}
	OnWindowTouchMove(e) {
		if (e.touches.length == 1) {
			switch (this.m_eDragMode) {
				case Qe.TouchStart:
					const t = {
						x: e.touches[0].clientX,
						y: e.touches[0].clientY,
					};
					if ((0, Ge.LD)(this.m_vTouchStartPosition, t) >= 10) {
						const e = (0, Ge.Fg)(this.m_vTouchStartPosition, t);
						if (Math.abs(e.x) > Math.abs(e.y)) {
							this.SetDragMode(Qe.TouchDragging);
							this.m_refSlider.current?.focus();
						} else {
							this.SetDragMode(Qe.None);
						}
					}
					break;
				case Qe.TouchDragging:
					this.UpdateSliderValueForPosition(e.touches[0].clientX);
			}
			e.preventDefault();
		}
	}
	OnWindowTouchEnd(e) {
		if (this.m_eDragMode != Qe.None) {
			this.Complete();
		}
	}
	Complete() {
		const e = this.m_eDragMode != Qe.None;
		this.FireOnChange(this.m_fLatestUserValue, this.SliderChangeSource);
		if (this.props.onChangeComplete) {
			this.props.onChangeComplete(
				this.m_fLatestUserValue,
				this.SliderChangeSource,
			);
		}
		this.SetDragMode(Qe.None);
		const t = this.step == 0;
		if (this.m_fLatestUserValue != this.m_fStartValue && t && e) {
			const e = this.m_fLatestUserValue > this.m_fStartValue;
			Oe.eZ.PlayNavSound(e ? Oe.PN.SliderUp : Oe.PN.SliderDown);
		}
	}
	RemoveDocumentEventListeners() {
		this.m_refSlider.current?.ownerDocument?.removeEventListener(
			"mousemove",
			this.OnWindowMouseMove,
		);
		this.m_refSlider.current?.ownerDocument?.removeEventListener(
			"touchmove",
			this.OnWindowTouchMove,
		);
		this.m_refSlider.current?.ownerDocument?.removeEventListener(
			"mouseup",
			this.OnWindowMouseUp,
		);
		this.m_refSlider.current?.ownerDocument?.removeEventListener(
			"touchend",
			this.OnWindowTouchEnd,
		);
	}
	componentDidMount() {
		this.m_fZoom = GetTotalZoom(this.m_refSlider.current);
	}
	componentWillUnmount() {
		this.RemoveDocumentEventListeners();
	}
	BlurInnerSlider() {
		this.m_navRefSlider.current?.ParentTakeFocus();
	}
	OnInnerSliderFocus() {
		this.m_bInnerSliderHasFocus = true;
		this.m_fStartValue = this.props.value;
	}
	OnInnerSliderBlur() {
		this.m_bInnerSliderHasFocus = false;
		if (this.m_fStartValue != this.m_fLatestUserValue) {
			this.Complete();
		}
	}
	ResetToDefault() {
		if (!this.CanResetToDefault || this.m_eDragMode != Qe.None) {
			return;
		}
		let e;
		this.m_fLatestUserValue = this.props.resetValue;
		this.FireOnChange(this.props.resetValue, 4);
		if (this.m_bInnerSliderHasFocus) {
			e = this.props.resetValue > this.m_fLatestUserValue;
		} else {
			e = this.props.resetValue > this.props.value;
			if (this.props.onChangeComplete) {
				this.props.onChangeComplete(this.props.resetValue, 4);
			}
		}
		Oe.eZ.PlayNavSound(e ? Oe.PN.SliderUp : Oe.PN.SliderDown);
	}
	OnContextMenu(e) {
		if (this.props.resetValue != null) {
			const t = _a.createElement(
				Se.tz,
				null,
				_a.createElement(
					Se.kt,
					{
						disabled: !this.CanResetToDefault,
						onSelected: this.ResetToDefault,
					},
					(0, Localize)("#ResetToDefault"),
				),
			);
			(0, T.lX)(t, e);
		}
	}
	render() {
		const e = this.props.showBookendLabels ?? false;
		const t = this.props.notchTicksVisible ?? !e;
		const r = e ? 2 : this.props.notchCount;
		const n = [
			{
				notchIndex: 0,
				label: `${this.props.min}`,
			},
			{
				notchIndex: 1,
				label: `${this.props.max}`,
			},
		];
		const i = e ? n : this.props.notchLabels;
		const o = this.props.focusable ?? true;
		const l = this.normalizedDefaultValue;
		const c = this.normalizedSliderOrigin;
		const A = l != null;
		const p = this.props.resetValueAppearance ?? "top-caret";
		const g = p == "top-caret";
		const h = !g;
		const C = {};
		if (this.CanResetToDefault) {
			C[Le.pR.SECONDARY] = (0, Localize)("#ResetToDefault");
		}
		let _ = `${Ne.SliderHandle} SliderHandle`;
		let f = `${Ne.SliderHandleContainer} SliderHandleContainer `;
		if (this.props.handleType == "verticalline") {
			_ = `${Ne.VerticalLineSliderHandle} SliderHandle`;
			f = `${Ne.VerticalLineSliderHandleContainer} SliderHandleContainer `;
		} else if (
			this.props.handleType == "leftparen" ||
			this.props.handleType == "rightparen"
		) {
			_ = (0, _m.A)(
				Ne.ParenSliderHandle,
				this.props.handleType == "leftparen" ? Ne.Left : Ne.Right,
				"SliderHandle",
			);
			f = (0, _m.A)(
				Ne.ParenSliderHandleContainer,
				this.props.handleType == "leftparen" ? Ne.Left : Ne.Right,
				"SliderHandleContainer",
			);
		}
		return _a.createElement(
			Pe.YZ,
			{
				noFocusRing: true,
				className: (0, _m.A)(
					Ne.SliderControlPanelGroup,
					"SliderControlPanelGroup",
					this.props.className,
				),
				navRef: this.props.navRef,
				onMouseDown: (e) => this.OnMouseDown(e.nativeEvent),
				onTouchStart: (e) => this.OnTouchStart(e.nativeEvent),
				onOKActionDescription: this.props.disabled
					? null
					: (0, Localize)("#Slider_AdjustSlider"),
				focusable: o,
				childFocusDisabled: this.props.disabled || !o,
				onContextMenu: this.OnContextMenu,
				onOKButton: this.props.disabled
					? () => Oe.eZ.PlayNavSound(Oe.PN.FailedNav)
					: undefined,
				onSecondaryButton: this.CanResetToDefault
					? this.ResetToDefault
					: undefined,
				onSecondaryActionDescription: this.CanResetToDefault
					? (0, Localize)("#ResetToDefault")
					: undefined,
				actionDescriptionMap: C,
			},
			_a.createElement(
				s.ml,
				{
					className: (0, _m.A)(
						Ne.SliderControlAndNotches,
						this.props.disabled && Ne.Disabled,
						A && Ne.WithDefaultValue,
						A && h && Ne.DefaultValueIsColorRange,
						A && h && p.side == "left" && Ne.DefaultValueColorLeft,
						A && h && p.side != "left" && Ne.DefaultValueColorRight,
					),
					focusable: this.isKeyNavTarget,
					noFocusRing: true,
					onFocus: this.OnInnerSliderFocus,
					onBlur: this.OnInnerSliderBlur,
					style: {
						"--normalized-slider-value": this.normalizedClampedValue,
						"--normalized-slider-default-value": l,
						"--normalized-slider-origin": c,
						"--default-value-track-color": h
							? p.trackForegroundColor
							: undefined,
						"--slider-extra-notch-padding":
							this.props.extraNotchPadding ?? "0px",
					},
					ref: (0, d.XB)(this.m_refSlider, this.props.innerRef),
					navRef: this.m_navRefSlider,
					onGamepadDirection: this.OnGamepadDirection,
					onOKButton: this.BlurInnerSlider,
					onOKActionDescription: null,
					onCancelButton: this.BlurInnerSlider,
					onCancelActionDescription: (0, Localize)("#ActionButtonLabelDone"),
				},
				_a.createElement(
					"div",
					{
						className: (0, _m.A)(Ne.SliderControl, "SliderControl"),
					},
					_a.createElement("div", {
						className: (0, _m.A)(
							Ne.SliderTrack,
							this.props.notchCount != null && t && Ne.SliderHasNotches,
							{
								[Ne.SliderTrackDark]: this.props.trackTone === "dark",
							},
							"SliderTrack",
						),
					}),
					A &&
						g &&
						_a.createElement(
							"div",
							{
								className: Ne.DefaultValueTickContainer,
							},
							_a.createElement(
								"div",
								{
									className: Ne.DefaultValueTick,
								},
								_a.createElement(fe.Carat, {
									direction: "down",
								}),
							),
						),
					this.validRange &&
						this.props.value != null &&
						!isNaN(this.props.value) &&
						this.showHandle &&
						_a.createElement(
							"div",
							{
								className: f,
							},
							_a.createElement(
								"div",
								{
									className: _,
									ref: this.m_refHandle,
								},
								this.props.handleType == "leftparen" &&
									_a.createElement(fe.CompoundSliderNotchLeft, null),
								this.props.handleType == "rightparen" &&
									_a.createElement(fe.CompoundSliderNotchRight, null),
							),
						),
				),
				_a.createElement(Ye, {
					notchCount: r,
					notchLabels: i,
					sliderValue: this.normalizedClampedValue,
					notchTicksVisible: t,
					renderNotch: this.props.renderNotch,
				}),
			),
		);
	}
}
function Ye(e) {
	let {
		sliderValue: t,
		notchCount: r,
		notchLabels: n,
		notchTicksVisible: i,
		renderNotch: s,
	} = e;
	let l = n ?? [];
	if (!r) {
		return null;
	}
	let c = false;
	let u = [];
	for (let e = 0; e < r; ++e) {
		let n = l.find((t) => t.notchIndex == e);
		if (n) {
			c = true;
		}
		u.push(
			_a.createElement(Ke, {
				key: e,
				notchIndex: e,
				sliderValue: t,
				notchLabel: n,
				notchCount: r,
				notchTicksVisible: i,
				renderNotch: s,
			}),
		);
	}
	return _a.createElement(
		o.Z,
		{
			className: (0, _m.A)(Ne.SliderNotchContainer),
		},
		u,
	);
}
function Ke(e) {
	const t = e.notchIndex <= (e.notchCount - 1) * e.sliderValue;
	const r = e.notchCount <= 3 && !e.notchTicksVisible;
	const n = r && e.notchIndex == 0;
	const i = r && e.notchIndex == e.notchCount - 1;
	const s = {
		...e,
		alignLeftEnd: n,
		alignRightEnd: i,
		active: t,
	};
	return _a.createElement(
		"div",
		{
			className: (0, _m.A)(Ne.SliderNotch, r && Ne.AlignToEnds),
		},
		e.renderNotch
			? e.renderNotch(s)
			: _a.createElement(Xe, {
					...s,
				}),
	);
}
function Xe(e) {
	const { alignLeftEnd: t, alignRightEnd: r, active: n } = e;
	return _a.createElement(
		_a.Fragment,
		null,
		e.notchTicksVisible &&
			_a.createElement("div", {
				className: (0, _m.A)(Ne.SliderNotchTick, n && Ne.TickActive),
			}),
		e.notchLabel &&
			_a.createElement(
				"div",
				{
					className: (0, _m.A)(
						Ne.SliderNotchLabel,
						t && Ne.AlignToLeft,
						r && Ne.AlignToRight,
					),
				},
				e.notchLabel?.label,
			),
	);
}
export function d3(e) {
	const {
		label: t,
		description: r,
		tabIndex: n,
		className: i,
		showValue: s,
		renderValue: o,
		valueSuffix: l,
		tooltip: c,
		layout: m,
		padding: A,
		bottomSeparator: p,
		notchCount: g,
		indentLevel: h,
		editableValue: C,
		highlightOnFocus: _,
		parentSliderRef: b,
		onOptionsButton: y,
		onOptionsActionDescription: S,
		iconLocation: w,
		childrenContainerWidth: B,
		explainer: v,
		explainerTitle: I,
		onActivate: E,
		disabled: M,
		...T
	} = e;
	const { icon: R, ...k } = T;
	const D = _a.useRef(null);
	const N = _a.useRef(null);
	const F = _a.useRef(null);
	const G = (o ?? Zy)(e.value, e.valueSuffix);
	const O = (function (e) {
		const { min: t, max: r } = e;
		const n = e.validValues ?? "steps";
		const i = e.step ?? We;
		const s = _a.useCallback(
			(e) => typeof e == "number" && !Number.isNaN(e),
			[],
		);
		const o = _a.useCallback((e) => !!s(e) && e >= t && e <= r, [s, t, r]);
		const l = _a.useCallback(
			(e) => !!o(e) && (i == 0 || ((e - t) / i) % 1 == 0),
			[o, t, i],
		);
		const c = _a.useCallback(
			(e) => !!s(e) && typeof n == "function" && n(e),
			[s, n],
		);
		switch (n) {
			case "all":
				return s;
			case "range":
				return o;
			case "steps":
				return l;
			default:
				return c;
		}
	})(e);
	const [P, L] = _a.useState(false);
	const z = () => {
		if (e.onChangeStart) {
			e.onChangeStart(3);
		}
		L(true);
	};
	const x = (t) => {
		if (O(t)) {
			if (e.onChange) {
				e.onChange(t, 3);
			}
			if (e.onChangeComplete) {
				e.onChangeComplete(t, 3);
			}
		}
		L(false);
	};
	_a.useEffect(() => {
		if (!P && F.current?.BHasFocus()) {
			N.current?.TakeFocus();
		}
	}, [F, N, P]);
	let U = t;
	if (C) {
		U = _a.createElement(
			_a.Fragment,
			null,
			_a.createElement(
				"div",
				{
					className: Ne.LabelText,
				},
				e.label,
			),
			_a.createElement($e, {
				navRef: F,
				editing: P,
				renderedValue: G,
				valueSuffix: e.valueSuffix,
				onClick: z,
				onChangeComplete: x,
				validator: O,
			}),
		);
	} else if (s) {
		U = _a.createElement(
			_a.Fragment,
			null,
			_a.createElement(
				"div",
				{
					className: Ne.LabelText,
				},
				e.label,
			),
			_a.createElement(
				"div",
				{
					className: Ne.DescriptionValue,
				},
				G,
			),
		);
	}
	const W = _a.useRef(null);
	const V = _a.useCallback(
		(e) => {
			W.current?.OnTouchStart(e.nativeEvent);
		},
		[W],
	);
	const H = _a.useCallback(
		(e) => {
			W.current?.OnContextMenu(e);
		},
		[W],
	);
	const j = (0, d.Ue)(W, b);
	const q = C ? z : undefined;
	const Q = C ? (0, Localize)("#Slider_EditValue") : undefined;
	let Z = y || q;
	let Y = y ? S : Q;
	let K = y ? q : undefined;
	let X = y ? Q : undefined;
	return _a.createElement(
		re.D0,
		{
			disabled: M,
			childrenLayout: m ?? "below",
			padding: A,
			bottomSeparator: p,
			childrenContainerWidth: B ?? "fixed",
			label: U,
			description: r,
			ref: D,
			className: i,
			onTouchStart: V,
			onContextMenu: H,
			indentLevel: h,
			onMenuActionDescription: X,
			onMenuButton: K,
			onActivate: E,
			highlightOnFocus: _,
			onOptionsButton: Z,
			onOptionsActionDescription: Y,
			icon: R,
			iconLocation: w ?? "before-children",
			explainer: v,
			explainerTitle: I,
		},
		_a.createElement(A0, {
			ref: j,
			disabled: M,
			notchCount: g,
			focusable: !P,
			navRef: N,
			...k,
		}),
	);
}
function $e(e) {
	const {
		editing: t,
		renderedValue: r,
		valueSuffix: n,
		onClick: i,
		onChangeComplete: o,
		navRef: l,
		validator: c,
	} = e;
	const A = _a.useRef(null);
	const p = _a.useRef(null);
	const g = _a.useRef(null);
	const h = (0, d.Ue)(l, g);
	const { fnTriggerErrorShake: C, bPlayingErrorShake: _ } = (function (e) {
		const [t, r] = _a.useState(false);
		const n = _a.useRef();
		const i = _a.useRef();
		const s = _a.useCallback(() => {
			window.clearTimeout(n.current);
			n.current = window.setTimeout(() => {
				e.current?.classList.remove(Ne.ErrorShake);
				e.current?.getBoundingClientRect();
				e.current?.classList.add(Ne.ErrorShake);
			}, 0);
			r(true);
			window.clearTimeout(i.current);
			i.current = window.setTimeout(() => r(false), Ve);
		}, [e]);
		_a.useEffect(
			() => () => {
				window.clearTimeout(n.current);
				window.clearTimeout(i.current);
			},
			[],
		);
		return {
			fnTriggerErrorShake: s,
			bPlayingErrorShake: t,
		};
	})(A);
	const f = t || _;
	const [b, y] = _a.useState("");
	_a.useEffect(() => {
		if (!f) {
			y("");
		}
	}, [f]);
	const S = c(Number.parseFloat(b));
	const w = _a.useRef(false);
	const B = _a.useCallback(
		(e) => {
			if (!S && b.length > 0) {
				C();
			}
			if (!w.current) {
				if (S || e) {
					o(Number.parseFloat(b));
					w.current = true;
				}
			}
		},
		[S, b, C, o],
	);
	const v = _a.useCallback(() => p.current?.TakeFocusAndShowKeyboard(), [p]);
	const I = _a.useRef(false);
	_a.useEffect(() => {
		if (t && !I.current) {
			v();
		}
		I.current = t;
	}, [g, t, v]);
	const E = _ || (f && !S && b.length > 0 && b != "-");
	const M = (0, _m.A)(Ne.DescriptionValue, E && Ne.RedBorder);
	const [T, R] = _a.useState(0);
	const [k, D] = _a.useState(0);
	const N = _a.useRef();
	const F = _a.useCallback(() => {
		const e = N.current.clientWidth;
		if (f) {
			D(e);
		} else {
			R(e);
		}
	}, [f]);
	_a.useLayoutEffect(F, [F]);
	const G = (0, d.wY)(F);
	const O = (0, d.Ue)(N, G);
	_a.useEffect(() => {
		if (g.current?.BHasFocus()) {
			g.current?.Node().ForceMeasureFocusRing();
		}
	}, [k]);
	const P = f ? b : r;
	const L = f ? Math.max(T, k) : T;
	return _a.createElement(
		"div",
		{
			className: M,
		},
		_a.createElement(
			"div",
			{
				className: Ne.FakeEditableValue,
				ref: O,
			},
			P,
		),
		_a.createElement(s.BA, {
			refKeyboardHandle: p,
			navRef: h,
			ref: A,
			focusable: t,
			className: Ne.EditableValue,
			style: {
				width: L,
			},
			onEnterKeyPress: () => B(false),
			strEnterKeyLabel: (0, Localize)("#ActionButtonLabelDone"),
			onClick: i,
			onFocus: () => (w.current = false),
			onBlur: () => B(true),
			value: P,
			placeholder: r,
			onChange: (e) => y(e.target.value.trim()),
			onCancelButton: () => B(true),
			onCancelActionDescription: (0, Localize)("#ActionButtonLabelDone"),
			onOKButton: v,
			onOKActionDescription: (0, Localize)("#Slider_EditValue"),
			onOptionsActionDescription: undefined,
			onOptionsButton: v,
		}),
	);
}
export function ou(e) {
	const {
		label: t,
		description: r,
		tabIndex: n,
		className: i,
		showValue: s,
		tooltip: o,
		layout: l,
		padding: c,
		bottomSeparator: u,
		indentLevel: d,
		sliders: A,
		highlightOnFocus: p,
		useLeftRightParen: g,
	} = e;
	const h = _a.useRef(new Array());
	let C = [];
	A.forEach((e, t) => {
		let r = "verticalline";
		if (g && !e.noLabel) {
			r = t == 0 ? "rightparen" : "leftparen";
		}
		C.push(
			_a.createElement(d3, {
				key: t,
				className: Ne.CompoundSliderSubSlider,
				bottomSeparator: "none",
				handleType: r,
				highlightOnFocus: false,
				parentSliderRef: (e) => (h.current[t] = e),
				dpadStep: e.minimumDpadPercent,
				...e,
			}),
		);
	});
	return _a.createElement(
		re.D0,
		{
			childrenLayout: l ?? "below",
			padding: c,
			bottomSeparator: u,
			childrenContainerWidth: "max",
			label: t,
			description: r,
			className: (0, _m.A)(Ne.CompoundSlider, i),
			indentLevel: d,
			highlightOnFocus: p,
		},
		_a.createElement(rt, {
			key: "labels",
			sliders: A,
			sliderRefs: h,
		}),
		C,
	);
}
(0, i.Cg)([d.oI], A0.prototype, "RecomputeSliderBounds", null);
(0, i.Cg)([d.oI], A0.prototype, "SetDragMode", null);
(0, i.Cg)([d.oI], A0.prototype, "OnGamepadDirection", null);
(0, i.Cg)([d.oI], A0.prototype, "UpdateSliderValueForPosition", null);
(0, i.Cg)([d.oI], A0.prototype, "OnWindowMouseMove", null);
(0, i.Cg)([d.oI], A0.prototype, "OnWindowMouseUp", null);
(0, i.Cg)([d.oI], A0.prototype, "OnMouseDown", null);
(0, i.Cg)([d.oI], A0.prototype, "OnTouchStart", null);
(0, i.Cg)([d.oI], A0.prototype, "OnWindowTouchMove", null);
(0, i.Cg)([d.oI], A0.prototype, "OnWindowTouchEnd", null);
(0, i.Cg)([d.oI], A0.prototype, "Complete", null);
(0, i.Cg)([d.oI], A0.prototype, "BlurInnerSlider", null);
(0, i.Cg)([d.oI], A0.prototype, "OnInnerSliderFocus", null);
(0, i.Cg)([d.oI], A0.prototype, "OnInnerSliderBlur", null);
(0, i.Cg)([d.oI], A0.prototype, "ResetToDefault", null);
(0, i.Cg)([d.oI], A0.prototype, "OnContextMenu", null);
const tt = _a.forwardRef(function (e, t) {
	const {
		label: r,
		labelIndex: n,
		xOffset: i,
		onResize: s,
		OnMouseDown: o,
		OnTouchStart: l,
	} = e;
	_a.useEffect(() => {
		s(n);
	}, [s, n]);
	const c = _a.useCallback(
		(e) => {
			s(n);
		},
		[s, n],
	);
	const m = (0, d.wY)(c);
	const u = (0, d.Ue)(m, t);
	return _a.createElement(
		"div",
		{
			className: Ne.CompoundSliderSubSliderLabel,
			ref: u,
			onMouseDown: o,
			onTouchStart: l,
			style: {
				transform: `translateX(${i}px)`,
			},
		},
		_a.createElement(
			"div",
			{
				className: Ne.CompoundSliderSubSliderLabelInternal,
			},
			r,
		),
	);
});
function rt(e) {
	const { sliders: t, sliderRefs: r } = e;
	const n = _a.useRef(null);
	const i = t.length;
	const s = _a.useRef([]);
	const [o, l] = _a.useState(new Array(i));
	const c = _a.useCallback(
		(e) => {
			l((t) => {
				const r = [...t];
				r[e] = s.current[e].clientWidth;
				return r;
			});
		},
		[s],
	);
	let m = 0;
	if (n.current) {
		const e = window.getComputedStyle(n.current);
		m =
			n.current.clientWidth -
			parseFloat(e.paddingLeft) -
			parseFloat(e.paddingRight);
	}
	const u = t.filter((e) => !e.noLabel);
	let d = [];
	let A = [];
	let p = [];
	u.forEach((e, t) => {
		const r =
			e.value == null || isNaN(e.value)
				? e.min
				: (0, Fe.OQ)(e.value, e.min, e.max);
		p.push(qe(e.min, e.max, r));
		let n = m * p[t];
		let i = false;
		if (t > 0) {
			const e = n + o[t] * 0.5;
			if (e >= d[t - 1] - o[t - 1] * 0.5) {
				const r = A[t - 1] ? d[t - 1] : d[t - 1] + o[t - 1] * 0.5;
				const a = Math.min(r - o[t] * 0.5, e);
				n = a - o[t] * 0.5;
				d[t - 1] = a + o[t - 1] * 0.5;
				i = true;
			}
		}
		d.push(n);
		A.push(i);
	});
	let g = [];
	u.forEach((e, t) => {
		const n = "" + Math.round(p[t] * 100);
		const i = r.current?.[t];
		g.push(
			_a.createElement(tt, {
				key: t,
				ref: (e) => (s.current[t] = e),
				labelIndex: t,
				onResize: c,
				label: n,
				xOffset: d[t],
				OnMouseDown: (e) => {
					i?.OnMouseDown(e.nativeEvent);
				},
				OnTouchStart: (e) => {
					i?.OnTouchStart(e.nativeEvent);
				},
			}),
		);
	});
	return _a.createElement(
		"div",
		{
			className: Ne.CompoundSliderSubSliderLabelContainer,
			ref: n,
		},
		g,
	);
}
function nt(e, t) {
	let r = e.findIndex((e) => e == t);
	if (r < 0) {
		console.error(
			"Failed to find a corresponding index for initial GamepadDiscreteValuesSlider value",
		);
		r = 0;
	}
	return r;
}
export function gz(e) {
	const {
		rValues: t,
		onChange: r,
		onChangeComplete: n,
		value: i,
		renderValue: s,
		showBookendLabels: o = false,
		...l
	} = e;
	const [c, m] = _a.useState(nt(t, i));
	const u = _a.useCallback(
		(e, n) => {
			m(e);
			if (r) {
				r(t[e], n);
			}
		},
		[t, r],
	);
	const d = _a.useCallback(
		(e, r) => {
			if (n) {
				n(t[e], r);
			}
		},
		[t, n],
	);
	const A = _a.useCallback(
		(e, r) => (s ? s(t[e], r) : t[e].toString()),
		[t, s],
	);
	_a.useEffect(() => {
		m(nt(t, i));
	}, [t, i]);
	const p = t.length - 1;
	const g = [
		{
			notchIndex: 0,
			label: t[0]?.toString(),
		},
		{
			notchIndex: 1,
			label: t[p]?.toString(),
		},
	];
	return _a.createElement(d3, {
		onChange: u,
		onChangeComplete: d,
		min: 0,
		max: p,
		value: c,
		step: 1,
		notchCount: 2,
		notchLabels: o ? g : undefined,
		renderValue: A,
		notchTicksVisible: false,
		...l,
	});
}
export const J0 = _a.forwardRef(function (e, t) {
	const {
		value: r,
		onChange: n,
		disabled: i,
		className: o,
		focusable: l,
		children: c,
		navRef: u,
	} = e;
	return _a.createElement(
		s.ml,
		{
			noFocusRing: true,
			className: (0, _m.A)(o, ie.Toggle, {
				[ie.Disabled]: !!i,
				[ie.On]: !!r,
			}),
			onClick: () => {
				if (!i && n) {
					const e = !r;
					n(e);
					Oe.eZ.PlayNavSound(e ? Oe.PN.ToggleOn : Oe.PN.ToggleOff);
				}
			},
			ref: t,
			navRef: u,
			focusable: l,
		},
		_a.createElement("div", {
			className: ie.ToggleRail,
		}),
		_a.createElement("div", {
			className: ie.ToggleSwitch,
		}),
		c,
	);
});
export class y4 extends n.pF {
	OnToggleChange(e) {
		if (!this.props.disabled && e !== this.checked) {
			this.Toggle();
		}
	}
	render() {
		const e = !!this.props.disabled;
		const { actionDescriptions: t, gamepadEvents: r } = (0, we.C7)(this.props);
		return _a.createElement(
			re.D0,
			{
				className: this.props.className,
				disabled: e,
				label: this.props.label,
				icon: this.props.icon,
				description: this.props.description,
				explainer: this.props.explainer,
				explainerTitle: this.props.explainerTitle,
				padding: this.props.padding,
				bottomSeparator: this.props.bottomSeparator,
				highlightOnFocus: this.props.highlightOnFocus,
				inlineWrap: "keep-inline",
				onContextMenu: this.props.onContextMenu,
				actionDescriptionMap: t,
				onClick: this.props.onClick,
				indentLevel: this.props.indentLevel,
				...r,
			},
			_a.createElement(J0, {
				onChange: this.OnToggleChange,
				value: this.checked,
				disabled: e,
				navRef: this.props.navRef,
			}),
		);
	}
}
(0, i.Cg)([d.oI], y4.prototype, "OnToggleChange", null);
var ot = require("./69.js");
export function P9(e) {
	const { children: t, bCenterVertically: r, refElem: n, ...i } = e;
	const s = (0, _m.A)(
		ie.GamepadDialogContent,
		"DialogContent _DialogLayout",
		e.className,
		r && " _DialogCenterVertically",
	);
	const { ref: l, navRef: c } = (0, ot.tw)();
	const u = (0, d.Ue)(n, l);
	return _a.createElement(
		o.Z,
		{
			...i,
			className: s,
			ref: u,
			navRef: c,
		},
		_a.createElement(
			o.Z,
			{
				className: (0, _m.A)(
					ie.GamepadDialogContent_InnerWidth,
					"DialogContent_InnerWidth",
				),
			},
			t,
		),
	);
}
