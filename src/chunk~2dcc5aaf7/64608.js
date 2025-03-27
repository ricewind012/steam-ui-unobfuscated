import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { AssertMsg } from "../../actual_src/utils/assert.js";
import { GetTotalZoom } from "../../actual_src/utils/domutils.js";
import n from "./44351.js";
import i, { Cg } from "./34629.js";
import _a from "./63696.js";
import s, { b$ } from "./90242.js";
import o from "./69164.js";
import l from "./50376.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { A as A_1 } from "./90765.js";
import d, { Ue, XB, wY } from "./52451.js";
import A from "./29889.js";
import p from "./27793.js";
import g, { Zt } from "./7514.js";
import S from "./26970.js";
import w from "./83441.js";
import T, { lX } from "./31084.js";
import R from "./98995.js";
import k from "./28999.js";
import X from "./91999.js";
import $ from "./54043.js";
import ee from "./97936.js";
import re from "./12316.js";
import ne from "./2053.js";
import ae, { K$, Qh } from "./22004.js";
import se from "./91371.js";
import { rP as rP_1 } from "./72476.js";
import { cZ } from "./28864.js";
import fe from "./35488.js";
import be from "./10768.js";
import Se from "./88750.js";
import { C7 } from "./28869.js";
import Me from "./62403.js";
import De from "./34384.js";
import { OQ, bT } from "./31958.js";
import { D0 as D0_1, LD, Fg } from "./34742.js";
import Oe from "./10975.js";
import Pe from "./72655.js";
import Le from "./61657.js";
import { i_ as i_1 } from "./43397.js";
import xe from "./16251.js";
import { tw } from "./69.js";
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
const h = _a.forwardRef((e, t) => {
	const r = Zt("InputElement", s.BA);
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
				Number(this.m_elInput?.value) < this.props.rangeMin,
			m_bNumberAboveMaxRange:
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
		AssertMsg(
			(!e.bShowClearAction && !e.bAlwaysShowClearAction) || e.onChange,
			"In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.",
		);
	}
	render() {
		const {
			label,
			description,
			requiredLabel,
			bShowCopyAction,
			bShowClearAction,
			bAlwaysShowClearAction,
			rangeMin,
			rangeMax,
			mustBeNumeric,
			mustBeURL,
			fnStrValidateURL,
			mustBeEmail,
			focusOnMount,
			tooltip,
			inlineControls,
			maxChars,
			...w
		} = this.props;
		let B = `DialogInput DialogInputPlaceholder DialogTextInputBase${
			w.className ? ` ${w.className}` : ""
		}`;
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
			E.transform = `translateY(${this.state.m_CopiedYPos}px)`;
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
				bShowCopyAction &&
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
				(bAlwaysShowClearAction || (bShowClearAction && w.value)) &&
					_a.createElement(
						"div",
						{
							className: "DialogInput_ClearAction",
							onClick: this.OnClearClick,
						},
						_a.createElement(l.sED, null),
					),
				inlineControls,
			),
			description &&
				_a.createElement(
					"div",
					{
						className: "DialogLabelExplainer",
					},
					description,
				),
		);
		if (label) {
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
						label,
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
								LocalizeReact("#Input_Error_TooManyCharacters", maxChars),
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
Cg([d.oI], pd.prototype, "OnInputRef", null);
Cg([d.oI], pd.prototype, "OnChanged", null);
Cg([d.oI], pd.prototype, "OnCopyClick", null);
Cg([d.oI], pd.prototype, "OnClearClick", null);
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
			label,
			description,
			requiredLabel,
			bShowCopyAction,
			bShowClearAction,
			bAlwaysShowClearAction,
			rangeMin,
			rangeMax,
			maxChars,
			mustBeNumeric,
			mustBeURL,
			fnStrValidateURL,
			mustBeEmail,
			focusOnMount,
			tooltip,
			inlineControls,
			className,
			children,
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
				label &&
					_a.createElement(
						"div",
						{
							className: "DialogLabel",
						},
						label,
					),
				_a.createElement(
					"div",
					{
						className: A_1(
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
						_a.Children.map(children, (e, t) =>
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
				description &&
					_a.createElement(
						"div",
						{
							className: "DialogLabelExplainer",
						},
						description,
					),
			),
		);
	}
}
Cg([d.oI], eo.prototype, "OnBackgroundClick", null);
Cg([d.oI], eo.prototype, "OnInputFocus", null);
Cg([d.oI], eo.prototype, "OnInputBlur", null);
export const Zy = (e, t) =>
	`${e != null ? Number.parseFloat(e.toFixed(3)) : null}${t ?? ""}`;
export const Kc = (e) => {
	const t = Zt("SliderField", rP);
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
		if (e === undefined || isNaN(e) || isNaN(e) || e < this.props.min) {
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
			let r = `${
				((this.props.value - this.props.min) * 100) /
				(this.props.max - this.props.min)
			}%`;
			e.width = r;
			t.left = r;
		}
		const { label, description, tooltip, ...s } = this.props;
		const o = this.props.renderValue ?? Zy;
		return _a.createElement(
			"div",
			{
				className: `DialogSlider_Container _DialogInputContainer _DialogLayout${
					this.props.className ? ` ${this.props.className}` : ""
				}`,
				onKeyDown: this.OnKeyDown,
				tabIndex: this.props.tabIndex || 0,
			},
			label &&
				_a.createElement(
					"div",
					{
						className: "DialogLabel",
					},
					label,
					Boolean(tooltip) &&
						_a.createElement(p.o, {
							tooltip: tooltip,
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
			description &&
				_a.createElement(
					"div",
					{
						className: "DialogLabelExplainer",
					},
					description,
				),
		);
	}
}
Cg([d.oI], rP.prototype, "OnMouseDown", null);
Cg([d.oI], rP.prototype, "OnMouseMove", null);
Cg([d.oI], rP.prototype, "OnMouseUp", null);
Cg([d.oI], rP.prototype, "OnTouchStart", null);
Cg([d.oI], rP.prototype, "OnTouchMove", null);
Cg([d.oI], rP.prototype, "OnTouchEnd", null);
Cg([d.oI], rP.prototype, "OnKeyDown", null);
const B = w;
const VContext = _a.createContext({
	setValue: () => {},
});
export function zW(e) {
	const { value, onChange, classNames, disabled, children } = e;
	const l = {
		value: value,
		setValue: onChange,
		disabled: disabled,
	};
	return _a.createElement(
		VContext.Provider,
		{
			value: l,
		},
		_a.createElement(
			o.Z,
			{
				className: A_1(
					B.Group,
					"Shared_Radio_Group",
					classNames,
					disabled && B.Disabled,
					l.bVertical && B.VerticalGrouping,
				),
			},
			children,
		),
	);
}
export function a(e) {
	const { value, children, ...n } = e;
	const { value: value_1, setValue, disabled } = _a.useContext(VContext);
	let c = setValue;
	const u = value === value_1;
	return _a.createElement(
		s.ml,
		{
			className: A_1(
				B.Button,
				"RadioButton",
				u && B.Active,
				disabled && B.Disabled,
			),
			onClick: disabled || (() => c(value)),
			...n,
		},
		children,
	);
}
const D = k;
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
				(!OV(e) || !OV(t) || !OV(t) || !!O(e.options, t.options)) &&
				(!m1(e) || !m1(t) || !m1(t) || e.data === t.data))
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
		for (const n of e) {
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
	const t = Zt("DropDownField", pU);
	return _a.createElement(t, {
		...e,
	});
}
export function pU(e) {
	const { label, tooltip, strClassName, dropDownControlRef, ...o } = e;
	return _a.createElement(
		n.mq,
		{
			label: label,
			tooltip: tooltip,
			className: strClassName,
		},
		_a.createElement(ZU, {
			menuLabel: label,
			...o,
			ref: dropDownControlRef,
		}),
	);
}
export const Ws = _a.forwardRef((e, t) =>
	_a.createElement(
		s.fu,
		{
			focusable: e.focusable,
			className: A_1(e.className, "DialogDropDown", "_DialogInputContainer", {
				Active: e.opened,
				Disabled: e.disabled,
			}),
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
					className: A_1(e.arrowClassName, "DialogDropDown_Arrow"),
				},
				_a.createElement(l.GB9, null),
			),
	),
);
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
		if (!this.props.controlled && (r || i || i || n)) {
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
			e += ` ${this.props.strDropDownClassName}`;
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
		this.m_iMenuInstance = lX(
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
			this.props.renderButton ||
			this.context.DropDownControlButton ||
			this.context.DropDownControlButton ||
			Ws;
		return _a.createElement(
			n,
			{
				focusable: r,
				disabled: this.props.disabled ?? false,
				opened: this.state.bOpened,
				onClick: this.props.disabled || this.ToggleMenu,
				onKeyDown: this.props.disabled || this.OnKeyDown,
				tabIndex: this.props.tabIndex ?? (r ? 0 : undefined),
				ref: this.OnInputRef,
				className: this.props.strDropDownButtonClassName,
				arrowClassName: this.props.arrowClassName,
			},
			t,
		);
	}
}
Cg([d.oI], ZU.prototype, "OnInputRef", null);
Cg([d.oI], ZU.prototype, "ToggleMenu", null);
Cg([d.oI], ZU.prototype, "OnValueSelected", null);
Cg([d.oI], ZU.prototype, "ShowMenu", null);
Cg([d.oI], ZU.prototype, "HideMenu", null);
Cg([d.oI], ZU.prototype, "OnKeyDown", null);
export const Gt = _a.createContext(null);
export function n4(e) {
	const t = Zt("DropDownMenu", Q);
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
		rgOptions,
		strDropDownItemClassName,
		onValueSelected,
		selectedValue,
	} = e;
	const [s, o] = _a.useState(selectedValue);
	const l = _a.useMemo(() => rgOptions.filter(m1), [rgOptions]);
	const c = _a.useCallback(
		(e) => {
			q(e, l, s, (e) => o(e.data));
		},
		[s, l],
	);
	return _a.createElement(
		"div",
		{
			className: A_1(
				D.DialogDropDownMenu,
				"_DialogInputContainer",
				e.strDropDownMenuCtnClass,
			),
			onKeyDown: c,
		},
		_a.createElement(Z, {
			rgOptions: rgOptions,
			strDropDownItemClassName: strDropDownItemClassName,
			onValueSelected: onValueSelected,
			activeValue: s,
			setActiveValue: o,
		}),
	);
}
function Z(e) {
	const { rgOptions, ...r } = e;
	return rgOptions.map((e, t) =>
		MJ(e)
			? _a.createElement("hr", {
					key: t,
					className: A_1(
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
		option,
		strDropDownItemClassName,
		onValueSelected,
		activeValue,
		setActiveValue,
	} = e;
	const o = _a.useCallback((e) => e && e.focus(), []);
	const l = _a.useCallback(() => {
		setActiveValue(option.data);
	}, [setActiveValue, option]);
	const c = option.data === activeValue;
	return _a.createElement(
		"button",
		{
			type: "button",
			className: A_1(
				D.DialogDropDownMenu_Item,
				strDropDownItemClassName,
				option.strOptionClass,
				c && "ContextMenuAutoFocus",
			),
			onClick: (e) => onValueSelected(e, option),
			ref: c ? o : undefined,
			onMouseEnter: l,
		},
		Boolean(option.tooltip)
			? _a.createElement(
					R.he,
					{
						toolTipContent: option.tooltip,
						bTopmost: true,
						className: "TooltipContainer",
					},
					option.label,
				)
			: _a.createElement("div", null, option.label),
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
		const { fnLoadOptions, strInitialDisplay, initialValue, ...n } = this.props;
		let { rgOptions } = this.state;
		if (rgOptions === undefined) {
			if (strInitialDisplay || initialValue) {
				rgOptions = [
					{
						label: strInitialDisplay,
						data: initialValue,
					},
				];
				n.selectedOption = initialValue;
			} else {
				rgOptions = [];
			}
		}
		return _a.createElement(m, {
			...n,
			rgOptions: rgOptions,
			onMenuOpened: this.OnMenuOpened,
		});
	}
}
Cg([d.oI], K.prototype, "OnMenuOpened", null);
export function aZ(e) {
	const t = e.descriptionVisibility ?? "always";
	const r = e.upperDescriptionVisibility ?? "always";
	const n = e.iconVisibility ?? "always";
	const i = A_1(X.DropDownLabelContainer, e.strClassNames);
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
					className: A_1(X.DropDownLabelTitle, e.strTitleClassNames),
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
			e.style.height = `${t}px`;
		}
		if (e.scrollHeight > r) {
			e.style.height = `${r}px`;
			e.style.overflow = "auto";
		} else if (e.scrollHeight != e.clientHeight) {
			let r = Math.max(e.scrollHeight, t);
			e.style.height = `${r - this.m_nTextAreaPadding}px`;
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
		const { nMinHeight, nMaxHeight, ...r } = this.props;
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
Cg([d.oI], Cl.prototype, "InternalOnInput", null);
Cg([d.oI], Cl.prototype, "OnKeyUp", null);
Cg([d.oI], Cl.prototype, "OnBlur", null);
Cg([d.oI], Cl.prototype, "OnClick", null);
Cg([d.oI], Cl.prototype, "OnPaste", null);
Cg([d.oI], Cl.prototype, "OnCut", null);
const ie = ne;
const oe = se;
const me = _a.createContext(null);
function ue(e) {
	const t = _a.useContext(me);
	const r = rP_1().IN_VR;
	const { title, icon, active, ...l } = e;
	return _a.createElement(
		o.Z,
		{
			preferredFocus: active,
			navRef: active && t ? t : undefined,
			noFocusRing: true,
			onActivate: r || l.onClick,
			onFocus: r || l.onClick,
			...l,
		},
		icon &&
			_a.createElement(
				"div",
				{
					className: oe.PageListItem_Icon,
				},
				icon,
			),
		_a.createElement(
			"div",
			{
				className: oe.PageListItem_Title,
			},
			title,
		),
	);
}
function de(e) {
	return _a.createElement("div", {
		className: oe.Separator,
	});
}
const Ae = _a.forwardRef((e, t) => {
	const { page, bAutoFocusPageContent, showTitle = false } = e;
	const s = _a.useRef(null);
	const o = _a.useRef(true);
	_a.useEffect(() => {
		if (!o.current || !bAutoFocusPageContent) {
			s.current?.TakeFocus();
		}
		o.current = false;
	}, [page, bAutoFocusPageContent]);
	return _a.createElement(
		me.Provider,
		{
			value: s,
		},
		_a.createElement(ee.Mw, {
			...e,
			stylesheet: oe,
			showTitle: showTitle,
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
	const { pages, activePage, refForPage, PageComponent } = e;
	const s = ((e) => {
		let t = _a.useRef(e);
		let r = _a.useRef(ae.fz.None);
		let t_current = t.current;
		if (t_current == e) {
			return r.current;
		}
		let i = ae.fz.None;
		if (t_current < e) {
			i = ae.fz.Down;
		} else if (t_current > e) {
			i = ae.fz.Up;
		}
		t.current = e;
		r.current = i;
		return i;
	})(
		_a.useMemo(
			() => pages.findIndex((e) => e == activePage),
			[pages, activePage],
		),
	);
	const o = ((e, t) => {
		const r = _a.useMemo(() => new Map(), []);
		const n = _a.useRef();
		n.current = e;
		const i = _a.useRef();
		i.current = t;
		const s = _a.useCallback(
			(e) => (t) => {
				r.set(e, t);
				if (e === n.current) {
					cZ(i.current, t);
				}
			},
			[r],
		);
		_a.useEffect(() => {
			cZ(t, e && r.get(e));
			return () => cZ(t, undefined);
		}, [r, e, t]);
		return s;
	})(activePage?.identifier, refForPage);
	let l = K$(oe, s);
	return _a.createElement(
		ae.FF,
		{
			childrenKey: activePage?.identifier,
			childrenClasses: Qh(oe, oe.ContentTransition),
			directionClass: l,
			animate: s != ae.fz.None,
		},
		activePage &&
			_a.createElement(PageComponent, {
				ref: o(activePage.identifier),
				key: activePage.identifier,
				stylesheet: oe,
				activePage: activePage,
			}),
	);
}
const ge = _a.forwardRef((e, t) =>
	_a.createElement(s.BA, {
		noFocusRing: true,
		...e,
		ref: t,
		className: A_1(ie.BasicTextInput, e.className),
		size: e.size ?? 1,
	}),
);
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
	const n = A_1(
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
const ye = be;
export function Vb(e) {
	const {
		label,
		tooltip,
		explainer,
		explainerTitle,
		disabled,
		strClassName,
		dropDownControlRef,
		description,
		layout,
		bottomSeparator,
		highlightOnFocus,
		autoFocus,
		indentLevel,
		childrenContainerWidth = "fixed",
		onContextMenu,
		onActivate,
		..._
	} = e;
	const { actionDescriptions, gamepadEvents, props } = C7(_);
	return _a.createElement(
		re.D0,
		{
			className: strClassName,
			disabled: disabled,
			label: label,
			onActivate: onActivate,
			description: description ?? tooltip,
			childrenLayout: layout ?? "inline",
			childrenContainerWidth: childrenContainerWidth,
			bottomSeparator: bottomSeparator,
			highlightOnFocus: highlightOnFocus,
			autoFocus: autoFocus,
			indentLevel: indentLevel,
			onContextMenu: onContextMenu,
			actionDescriptionMap: actionDescriptions,
			explainer: explainer,
			explainerTitle: explainerTitle,
			...gamepadEvents,
		},
		_a.createElement(ZU, {
			menuLabel: label,
			disabled: disabled,
			...props,
			ref: dropDownControlRef,
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
export const OB = _a.forwardRef((e, t) =>
	_a.createElement(
		n.$n,
		{
			className: A_1(ye.DropDownControlButton, e.className),
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
				className: A_1(ie.Spacer, "Spacer"),
			}),
			_a.createElement(fe.Carat, {
				direction: "down",
			}),
		),
	),
);
export const yA = _a.forwardRef((e, t) => {
	const { className, ...i } = e;
	let s = _a.useRef();
	let l = Ue(t, s);
	const [c, m] = _a.useState(false);
	const A = _a.useCallback(() => {
		m((e) => !e);
		window.setTimeout(() => s.current?.Focus(), 1);
	}, []);
	return _a.createElement(
		o.Z,
		{
			className: className,
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
export const MQ = _a.forwardRef((e, t) => {
	const { className, value, ...i } = e;
	const s = value ?? "";
	return _a.createElement(re.qq, {
		autoComplete: "off",
		value: s,
		ref: t,
		placeholder: "   .   .   .   ",
		...i,
		onChange: (e) => {
			if (
				!((e) => {
					const t = e.split(".");
					if (t.length > 4) {
						return false;
					}
					for (let e = 0; e < t.length; e++) {
						const t_e = t[e];
						if (t_e == "") {
							if (e == t.length - 1) {
								continue;
							}
							return false;
						}
						if (!/^[0-9]*$/.test(t_e)) {
							return false;
						}
						const n = parseInt(t_e);
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
		digits,
		onChange,
		autoFocus,
		type,
		className,
		digitClassName,
		value,
		validateDigit,
	} = e;
	const A = _a.useRef([]);
	_a.useEffect(() => {
		A.current[Math.min(value.length, digits - 1)]?.current?.TakeFocus();
	}, [digits, value]);
	const p = (e) => {
		if (!validateDigit || !!validateDigit(e.target.value)) {
			onChange(value + e.target.value);
		}
	};
	const g = (e) => {
		if (e.key === "Backspace") {
			onChange(value.slice(0, -1));
			e.preventDefault();
		}
	};
	const h = (e) => {
		let n = e.clipboardData.getData("Text");
		if (validateDigit) {
			n = n
				.split("")
				.filter((e) => validateDigit(e))
				.join("");
		}
		onChange((value + n).slice(0, digits));
		e.preventDefault();
	};
	const _ = [];
	for (let e = 0; e < digits; e++) {
		A.current[e] ||= b$();
		_.push(
			_a.createElement(
				o.Z,
				{
					key: `digit_${e}`,
					className: digitClassName,
					navRef: A.current[e],
				},
				_a.createElement(pd, {
					type: type || "password",
					maxLength: 1,
					autoFocus: autoFocus && e == 0,
					onChange: p,
					onPaste: h,
					onKeyDown: g,
					value: value.charAt(e),
					disabled: e != Math.min(value.length, digits - 1),
					className: A_1(Me.PinDigit),
				}),
			),
		);
	}
	return _a.createElement(
		o.Z,
		{
			"flow-children": "row",
			className: A_1(className, Me.Digits),
		},
		_,
	);
}
const Ne = De;
const We = 1;
const Ve = i_1(Ne["error-shake-duration"]);
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
let Qe;
((e) => {
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
	m_vTouchStartPosition = D0_1();
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
				: OQ(this.props.value, this.props.min, this.props.max);
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
		const e = OQ(0, this.props.min, this.props.max);
		return qe(this.props.min, this.props.max, e);
	}
	get CanResetToDefault() {
		return (
			this.props.resetValue != null && this.props.value != this.props.resetValue
		);
	}
	get SliderChangeSource() {
		switch (this.m_eDragMode) {
			case Qe.MouseDragging: {
				return 1;
			}
			case Qe.TouchDragging:
			case Qe.TouchStart: {
				return 0;
			}
			case Qe.None: {
				return;
			}
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
				case Qe.TouchStart: {
					this.RecomputeSliderBounds();
					this.m_fStartValue = this.props.value;
					this.m_fLatestUserValue = this.props.value;
				}
				case Qe.None:
			}
			switch (e) {
				case Qe.MouseDragging: {
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
				}
				case Qe.TouchStart:
				case Qe.TouchDragging: {
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
				}
				case Qe.None: {
					this.RemoveDocumentEventListeners();
				}
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
		const n = bT(r, 0, 2000, 500, 250);
		const i = 2 ** Math.floor(r / n);
		const a = this.normalizedDpadStep * i;
		const s = OQ(a, this.normalizedDpadStep, 0.05) * t;
		const o = He(this.normalizedStep, this.normalizedClampedValue + s);
		let l = je(this.props.min, this.props.max, o);
		l = OQ(
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
		n = OQ(n, i, a);
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
				case Qe.TouchStart: {
					const t = {
						x: e.touches[0].clientX,
						y: e.touches[0].clientY,
					};
					if (LD(this.m_vTouchStartPosition, t) >= 10) {
						const e = Fg(this.m_vTouchStartPosition, t);
						if (Math.abs(e.x) > Math.abs(e.y)) {
							this.SetDragMode(Qe.TouchDragging);
							this.m_refSlider.current?.focus();
						} else {
							this.SetDragMode(Qe.None);
						}
					}
					break;
				}
				case Qe.TouchDragging: {
					this.UpdateSliderValueForPosition(e.touches[0].clientX);
				}
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
			lX(t, e);
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
			_ = A_1(
				Ne.ParenSliderHandle,
				this.props.handleType == "leftparen" ? Ne.Left : Ne.Right,
				"SliderHandle",
			);
			f = A_1(
				Ne.ParenSliderHandleContainer,
				this.props.handleType == "leftparen" ? Ne.Left : Ne.Right,
				"SliderHandleContainer",
			);
		}
		return _a.createElement(
			Pe.YZ,
			{
				noFocusRing: true,
				className: A_1(
					Ne.SliderControlPanelGroup,
					"SliderControlPanelGroup",
					this.props.className,
				),
				navRef: this.props.navRef,
				onMouseDown: (e) => this.OnMouseDown(e.nativeEvent),
				onTouchStart: (e) => this.OnTouchStart(e.nativeEvent),
				onOKActionDescription:
					this.props.disabled || (0, Localize)("#Slider_AdjustSlider"),
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
					className: A_1(
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
					ref: XB(this.m_refSlider, this.props.innerRef),
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
						className: A_1(Ne.SliderControl, "SliderControl"),
					},
					_a.createElement("div", {
						className: A_1(
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
	let { sliderValue, notchCount, notchLabels, notchTicksVisible, renderNotch } =
		e;
	let l = notchLabels ?? [];
	if (!notchCount) {
		return null;
	}
	let c = false;
	let u = [];
	for (let e = 0; e < notchCount; ++e) {
		let n = l.find((t) => t.notchIndex == e);
		if (n) {
			c = true;
		}
		u.push(
			_a.createElement(Ke, {
				key: e,
				notchIndex: e,
				sliderValue: sliderValue,
				notchLabel: n,
				notchCount: notchCount,
				notchTicksVisible: notchTicksVisible,
				renderNotch: renderNotch,
			}),
		);
	}
	return _a.createElement(
		o.Z,
		{
			className: A_1(Ne.SliderNotchContainer),
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
			className: A_1(Ne.SliderNotch, r && Ne.AlignToEnds),
		},
		e.renderNotch
			? e.renderNotch(s)
			: _a.createElement(Xe, {
					...s,
				}),
	);
}
function Xe(e) {
	const { alignLeftEnd, alignRightEnd, active } = e;
	return _a.createElement(
		_a.Fragment,
		null,
		e.notchTicksVisible &&
			_a.createElement("div", {
				className: A_1(Ne.SliderNotchTick, active && Ne.TickActive),
			}),
		e.notchLabel &&
			_a.createElement(
				"div",
				{
					className: A_1(
						Ne.SliderNotchLabel,
						alignLeftEnd && Ne.AlignToLeft,
						alignRightEnd && Ne.AlignToRight,
					),
				},
				e.notchLabel?.label,
			),
	);
}
export function d3(e) {
	const {
		label,
		description,
		tabIndex,
		className,
		showValue,
		renderValue,
		valueSuffix,
		tooltip,
		layout,
		padding,
		bottomSeparator,
		notchCount,
		indentLevel,
		editableValue,
		highlightOnFocus,
		parentSliderRef,
		onOptionsButton,
		onOptionsActionDescription,
		iconLocation,
		childrenContainerWidth,
		explainer,
		explainerTitle,
		onActivate,
		disabled,
		...T
	} = e;
	const { icon, ...k } = T;
	const D = _a.useRef(null);
	const N = _a.useRef(null);
	const F = _a.useRef(null);
	const G = (renderValue ?? Zy)(e.value, e.valueSuffix);
	const O = ((e) => {
		const { min, max } = e;
		const n = e.validValues ?? "steps";
		const i = e.step ?? We;
		const s = _a.useCallback(
			(e) => typeof e == "number" && !Number.isNaN(e),
			[],
		);
		const o = _a.useCallback(
			(e) => !!s(e) && e >= min && e <= max,
			[s, min, max],
		);
		const l = _a.useCallback(
			(e) => !!o(e) && (i == 0 || ((e - min) / i) % 1 == 0),
			[o, min, i],
		);
		const c = _a.useCallback(
			(e) => !!s(e) && typeof n == "function" && n(e),
			[s, n],
		);
		switch (n) {
			case "all": {
				return s;
			}
			case "range": {
				return o;
			}
			case "steps": {
				return l;
			}
			default: {
				return c;
			}
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
	let U = label;
	if (editableValue) {
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
	} else if (showValue) {
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
	const j = Ue(W, parentSliderRef);
	const q = editableValue ? z : undefined;
	const Q = editableValue ? (0, Localize)("#Slider_EditValue") : undefined;
	let Z = onOptionsButton || q;
	let Y = onOptionsButton ? onOptionsActionDescription : Q;
	let K = onOptionsButton ? q : undefined;
	let X = onOptionsButton ? Q : undefined;
	return _a.createElement(
		re.D0,
		{
			disabled: disabled,
			childrenLayout: layout ?? "below",
			padding: padding,
			bottomSeparator: bottomSeparator,
			childrenContainerWidth: childrenContainerWidth ?? "fixed",
			label: U,
			description: description,
			ref: D,
			className: className,
			onTouchStart: V,
			onContextMenu: H,
			indentLevel: indentLevel,
			onMenuActionDescription: X,
			onMenuButton: K,
			onActivate: onActivate,
			highlightOnFocus: highlightOnFocus,
			onOptionsButton: Z,
			onOptionsActionDescription: Y,
			icon: icon,
			iconLocation: iconLocation ?? "before-children",
			explainer: explainer,
			explainerTitle: explainerTitle,
		},
		_a.createElement(A0, {
			ref: j,
			disabled: disabled,
			notchCount: notchCount,
			focusable: !P,
			navRef: N,
			...k,
		}),
	);
}
function $e(e) {
	const {
		editing,
		renderedValue,
		valueSuffix,
		onClick,
		onChangeComplete,
		navRef,
		validator,
	} = e;
	const A = _a.useRef(null);
	const p = _a.useRef(null);
	const g = _a.useRef(null);
	const h = Ue(navRef, g);
	const { fnTriggerErrorShake, bPlayingErrorShake } = ((e) => {
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
	const f = editing || bPlayingErrorShake;
	const [b, y] = _a.useState("");
	_a.useEffect(() => {
		if (!f) {
			y("");
		}
	}, [f]);
	const S = validator(Number.parseFloat(b));
	const w = _a.useRef(false);
	const B = _a.useCallback(
		(e) => {
			if (!S && b.length > 0) {
				fnTriggerErrorShake();
			}
			if (!w.current) {
				if (S || e) {
					onChangeComplete(Number.parseFloat(b));
					w.current = true;
				}
			}
		},
		[S, b, fnTriggerErrorShake, onChangeComplete],
	);
	const v = _a.useCallback(() => p.current?.TakeFocusAndShowKeyboard(), [p]);
	const I = _a.useRef(false);
	_a.useEffect(() => {
		if (editing && !I.current) {
			v();
		}
		I.current = editing;
	}, [g, editing, v]);
	const E = bPlayingErrorShake || (f && !S && b.length > 0 && b != "-");
	const M = A_1(Ne.DescriptionValue, E && Ne.RedBorder);
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
	const G = wY(F);
	const O = Ue(N, G);
	_a.useEffect(() => {
		if (g.current?.BHasFocus()) {
			g.current?.Node().ForceMeasureFocusRing();
		}
	}, [k]);
	const P = f ? b : renderedValue;
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
			focusable: editing,
			className: Ne.EditableValue,
			style: {
				width: L,
			},
			onEnterKeyPress: () => B(false),
			strEnterKeyLabel: (0, Localize)("#ActionButtonLabelDone"),
			onClick: onClick,
			onFocus: () => (w.current = false),
			onBlur: () => B(true),
			value: P,
			placeholder: renderedValue,
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
		label,
		description,
		tabIndex,
		className,
		showValue,
		tooltip,
		layout,
		padding,
		bottomSeparator,
		indentLevel,
		sliders,
		highlightOnFocus,
		useLeftRightParen,
	} = e;
	const h = _a.useRef(new Array());
	let C = [];
	sliders.forEach((e, t) => {
		let r = "verticalline";
		if (useLeftRightParen && !e.noLabel) {
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
			childrenLayout: layout ?? "below",
			padding: padding,
			bottomSeparator: bottomSeparator,
			childrenContainerWidth: "max",
			label: label,
			description: description,
			className: A_1(Ne.CompoundSlider, className),
			indentLevel: indentLevel,
			highlightOnFocus: highlightOnFocus,
		},
		_a.createElement(rt, {
			key: "labels",
			sliders: sliders,
			sliderRefs: h,
		}),
		C,
	);
}
Cg([d.oI], A0.prototype, "RecomputeSliderBounds", null);
Cg([d.oI], A0.prototype, "SetDragMode", null);
Cg([d.oI], A0.prototype, "OnGamepadDirection", null);
Cg([d.oI], A0.prototype, "UpdateSliderValueForPosition", null);
Cg([d.oI], A0.prototype, "OnWindowMouseMove", null);
Cg([d.oI], A0.prototype, "OnWindowMouseUp", null);
Cg([d.oI], A0.prototype, "OnMouseDown", null);
Cg([d.oI], A0.prototype, "OnTouchStart", null);
Cg([d.oI], A0.prototype, "OnWindowTouchMove", null);
Cg([d.oI], A0.prototype, "OnWindowTouchEnd", null);
Cg([d.oI], A0.prototype, "Complete", null);
Cg([d.oI], A0.prototype, "BlurInnerSlider", null);
Cg([d.oI], A0.prototype, "OnInnerSliderFocus", null);
Cg([d.oI], A0.prototype, "OnInnerSliderBlur", null);
Cg([d.oI], A0.prototype, "ResetToDefault", null);
Cg([d.oI], A0.prototype, "OnContextMenu", null);
const tt = _a.forwardRef((e, t) => {
	const { label, labelIndex, xOffset, onResize, OnMouseDown, OnTouchStart } = e;
	_a.useEffect(() => {
		onResize(labelIndex);
	}, [onResize, labelIndex]);
	const c = _a.useCallback(
		(e) => {
			onResize(labelIndex);
		},
		[onResize, labelIndex],
	);
	const m = wY(c);
	const u = Ue(m, t);
	return _a.createElement(
		"div",
		{
			className: Ne.CompoundSliderSubSliderLabel,
			ref: u,
			onMouseDown: OnMouseDown,
			onTouchStart: OnTouchStart,
			style: {
				transform: `translateX(${xOffset}px)`,
			},
		},
		_a.createElement(
			"div",
			{
				className: Ne.CompoundSliderSubSliderLabelInternal,
			},
			label,
		),
	);
});
function rt(e) {
	const { sliders, sliderRefs } = e;
	const n = _a.useRef(null);
	const t_length = sliders.length;
	const s = _a.useRef([]);
	const [o, l] = _a.useState(new Array(t_length));
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
	const u = sliders.filter((e) => !e.noLabel);
	let d = [];
	let A = [];
	let p = [];
	u.forEach((e, t) => {
		const r =
			e.value == null || isNaN(e.value) ? e.min : OQ(e.value, e.min, e.max);
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
		const n = `${Math.round(p[t] * 100)}`;
		const i = sliderRefs.current?.[t];
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
		rValues,
		onChange,
		onChangeComplete,
		value,
		renderValue,
		showBookendLabels = false,
		...l
	} = e;
	const [c, m] = _a.useState(nt(rValues, value));
	const u = _a.useCallback(
		(e, n) => {
			m(e);
			if (onChange) {
				onChange(rValues[e], n);
			}
		},
		[rValues, onChange],
	);
	const d = _a.useCallback(
		(e, r) => {
			if (onChangeComplete) {
				onChangeComplete(rValues[e], r);
			}
		},
		[rValues, onChangeComplete],
	);
	const A = _a.useCallback(
		(e, r) =>
			renderValue ? renderValue(rValues[e], r) : rValues[e].toString(),
		[rValues, renderValue],
	);
	_a.useEffect(() => {
		m(nt(rValues, value));
	}, [rValues, value]);
	const p = rValues.length - 1;
	const g = [
		{
			notchIndex: 0,
			label: rValues[0]?.toString(),
		},
		{
			notchIndex: 1,
			label: rValues[p]?.toString(),
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
		notchLabels: showBookendLabels ? g : undefined,
		renderValue: A,
		notchTicksVisible: false,
		...l,
	});
}
export const J0 = _a.forwardRef((e, t) => {
	const { value, onChange, disabled, className, focusable, children, navRef } =
		e;
	return _a.createElement(
		s.ml,
		{
			noFocusRing: true,
			className: A_1(className, ie.Toggle, {
				[ie.Disabled]: !!disabled,
				[ie.On]: !!value,
			}),
			onClick: () => {
				if (!disabled && onChange) {
					const e = !value;
					onChange(e);
					Oe.eZ.PlayNavSound(e ? Oe.PN.ToggleOn : Oe.PN.ToggleOff);
				}
			},
			ref: t,
			navRef: navRef,
			focusable: focusable,
		},
		_a.createElement("div", {
			className: ie.ToggleRail,
		}),
		_a.createElement("div", {
			className: ie.ToggleSwitch,
		}),
		children,
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
		const { actionDescriptions, gamepadEvents } = C7(this.props);
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
				actionDescriptionMap: actionDescriptions,
				onClick: this.props.onClick,
				indentLevel: this.props.indentLevel,
				...gamepadEvents,
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
Cg([d.oI], y4.prototype, "OnToggleChange", null);
export function P9(e) {
	const { children, bCenterVertically, refElem, ...i } = e;
	const s = A_1(
		ie.GamepadDialogContent,
		"DialogContent _DialogLayout",
		e.className,
		bCenterVertically && " _DialogCenterVertically",
	);
	const { ref, navRef } = tw();
	const u = Ue(refElem, ref);
	return _a.createElement(
		o.Z,
		{
			...i,
			className: s,
			ref: u,
			navRef: navRef,
		},
		_a.createElement(
			o.Z,
			{
				className: A_1(
					ie.GamepadDialogContent_InnerWidth,
					"DialogContent_InnerWidth",
				),
			},
			children,
		),
	);
}
