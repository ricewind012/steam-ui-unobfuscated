var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./90242.js");
var s = require(/*webcrack:missing*/ "./69164.js");
var o = require(/*webcrack:missing*/ "./50376.js");
var l = require("./43397.js");
var c = require(/*webcrack:missing*/ "./93960.js");
var m = require(/*webcrack:missing*/ "./90765.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require("./27793.js");
var A = require("./7514.js");
var p = require("./26970.js");
function g(e) {
	return i.forwardRef(function (t, r) {
		return i.createElement(s.Z, {
			...t,
			className: (0, m.A)(e, t.className),
			ref: r,
		});
	});
}
export let Y9 = (0, l.Ri)("DialogHeader");
export let iK = (0, l.Ri)("DialogSubHeader");
export let tX = (0, l.Ri)("SettingsDialogSubHeader");
export let wi = (0, l.Ri)("DialogFooter");
export let JU = (0, l.Ri)("DialogLabel _DialogLayout");
export let a3 = (0, l.Ri)("DialogBodyText");
export let nB = (0, l.Ri)("DialogBody");
export let f3 = g("DialogBody");
export let xz = (0, l.Ri)("DialogInnerBody");
export let G5 = (0, l.Ri)("DialogControlsSection");
export let lr = (0, l.Ri)("DialogControlsSectionHeader");
export let dR = g("DialogTwoColLayout _DialogColLayout");
export let Xp = g("DialogThreeColLayout _DialogColLayout");
g("DialogTwoThirdColLayout _DialogColLayout");
export let VP = (0, l.Ri)("DialogColumn _DialogLayout");
export function UC(e) {
	const t = (0, A.Zt)("Content", k);
	return i.createElement(t, {
		...e,
	});
}
function k(e) {
	let { children: t, bCenterVertically: r, refElem: n, ...a } = e;
	let s =
		"DialogContent _DialogLayout" + (e.className ? " " + e.className : "");
	if (r) {
		s += " _DialogCenterVertically";
	}
	return i.createElement(
		"div",
		{
			...a,
			ref: n,
			className: s,
		},
		i.createElement(
			"div",
			{
				className: "DialogContent_InnerWidth",
			},
			t,
		),
	);
}
export class lV extends i.Component {
	OnSubmit(e) {
		e.preventDefault();
		if (this.props.onSubmit) {
			this.props.onSubmit(e);
		}
	}
	render() {
		return i.createElement("form", {
			...this.props,
			onSubmit: this.OnSubmit,
		});
	}
}
export function U9(e) {
	const { classNameContent: t, bCenterVertically: r, ...n } = e;
	return i.createElement(
		UC,
		{
			className: t,
			bCenterVertically: r,
		},
		i.createElement(lV, {
			...n,
		}),
	);
}
export function mq(e) {
	const { label: t, tooltip: r, className: n, children: a } = e;
	return i.createElement(
		"label",
		{
			className: (0, m.A)("DialogInputLabelGroup", "_DialogLayout", n),
		},
		t &&
			i.createElement(
				JU,
				null,
				t,
				" ",
				r &&
					i.createElement(d.o, {
						tooltip: r,
					}),
				" ",
			),
		a,
	);
}
(0, n.Cg)([c.o], lV.prototype, "OnSubmit", null);
const G = i.forwardRef(function (e, t) {
	const r = (0, A.a_)();
	const { svgicon: n, ...s } = e;
	const o = (0, m.A)(
		e.className,
		n !== undefined && "hasSVGIcon",
		s.disabled && "Disabled",
		r.strButtonClassName,
	);
	const l = (e) => {
		if (!s.disabled && e) {
			return (t) => {
				t.stopPropagation();
				e(t);
			};
		}
	};
	return i.createElement(
		a.fu,
		{
			ref: t,
			onOKActionDescription: s.disabled ? null : undefined,
			noFocusRing: !!r.strButtonClassName,
			...s,
			className: o,
			disabled: false,
			onClick: l(s.onClick),
			onPointerDown: l(s.onPointerDown),
			onPointerUp: l(s.onPointerUp),
			onPointerCancel: l(s.onPointerCancel),
			onMouseDown: l(s.onMouseDown),
			onMouseUp: l(s.onMouseUp),
			onTouchStart: l(s.onTouchStart),
			onTouchEnd: l(s.onTouchEnd),
			onTouchCancel: l(s.onTouchCancel),
			onSubmit: l(s.onSubmit),
		},
		n && n(),
		e.children,
	);
});
export const jn = i.forwardRef(function (e, t) {
	return i.createElement(G, {
		preferredFocus: true,
		type: e.onClick ? "button" : "submit",
		...e,
		ref: t,
		className: (0, m.A)(
			e.className,
			"DialogButton",
			"_DialogLayout",
			"Primary",
		),
	});
});
export const $n = i.forwardRef(function (e, t) {
	return i.createElement(G, {
		type: "button",
		...e,
		ref: t,
		className: (0, m.A)(
			e.className,
			"DialogButton",
			"_DialogLayout",
			"Secondary",
		),
	});
});
export const cK = i.forwardRef(function (e, t) {
	return i.createElement(G, {
		type: "button",
		...e,
		ref: t,
		className: (0, m.A)(
			e.className,
			"DialogButton",
			"_DialogLayout",
			"EmptyButton",
		),
	});
});
export const wl = i.forwardRef(function (e, t) {
	return i.createElement(G, {
		type: "button",
		...e,
		ref: t,
		className: (0, m.A)(e.className, "DialogButton _DialogLayout Small"),
	});
});
export const QW = i.forwardRef(function (e, t) {
	return i.createElement(G, {
		type: "button",
		...e,
		ref: t,
		className: (0, m.A)(e.className, "TextButton"),
	});
});
export function _E(e) {
	let t = "DialogHBar" + (e.className ? " " + e.className : "");
	return i.createElement("div", {
		...e,
		className: t,
	});
}
export function CB(e) {
	return i.createElement(
		dR,
		{
			className: e.className,
		},
		i.createElement(
			jn,
			{
				onClick: e.onOK,
				disabled: e.bOKDisabled,
				autoFocus: e.focusButton == "primary",
			},
			e.strOKText || (0, u.we)("#Button_Confirm"),
			" ",
		),
		i.createElement(
			$n,
			{
				onClick: e.onCancel,
				disabled: e.bCancelDisabled,
				autoFocus: e.focusButton == "secondary",
			},
			e.strCancelText || (0, u.we)("#Button_Cancel"),
		),
	);
}
export function VQ(e) {
	const t = e.bOKDisabled ? $n : jn;
	const r = e.bOKDisabled ? jn : $n;
	return i.createElement(
		Xp,
		null,
		i.createElement(
			t,
			{
				onClick: e.onOK,
				disabled: e.bOKDisabled,
			},
			e.strOKText || (0, u.we)("#Button_Confirm"),
			" ",
		),
		i.createElement(
			r,
			{
				onClick: e.onUpdate,
				disabled: e.bUpdateDisabled,
			},
			e.strUpdateText || (0, u.we)("#Button_Update"),
			" ",
		),
		i.createElement(
			$n,
			{
				onClick: e.onCancel,
				disabled: e.bCancelDisabled,
			},
			e.strCancelText || (0, u.we)("#Button_Cancel"),
		),
	);
}
export function xv(e) {
	const {
		onPrimary: t,
		onSecondary: r,
		onCancel: n,
		bDisableSecondary: a,
		strPrimaryButtonText: s,
		strSecondaryButtonText: o,
		strCancelButtonText: l,
		className: c,
		classNamePrimary: d,
	} = e;
	return i.createElement(
		"div",
		{
			className: c,
		},
		i.createElement(
			jn,
			{
				onClick: t,
				className: (0, m.A)("Stacked", d),
				autoFocus: true,
			},
			s,
		),
		i.createElement(
			dR,
			null,
			i.createElement(
				$n,
				{
					onClick: n,
				},
				l || (0, u.we)("#Button_Cancel"),
			),
			i.createElement(
				$n,
				{
					onClick: r,
					disabled: a,
				},
				o,
			),
		),
	);
}
export class pF extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			checked: e.checked,
			disabled: e.disabled,
		};
	}
	componentDidUpdate(e) {
		if (!this.props.controlled) {
			if (
				e.checked != this.props.checked &&
				this.props.checked != this.state.checked
			) {
				this.setState({
					checked: this.props.checked,
				});
			}
		}
		if (
			e.disabled != this.props.disabled &&
			this.props.disabled != this.state.disabled
		) {
			this.setState({
				disabled: this.props.disabled,
			});
		}
	}
	shouldComponentUpdate(e, t) {
		return (
			e.label != this.props.label ||
			e.description != this.props.description ||
			e.onChange != this.props.onChange ||
			e.controlled != this.props.controlled ||
			e.disabled != this.props.disabled ||
			t.disabled != this.state.disabled ||
			e.checked != this.checked ||
			t.checked != this.state.checked
		);
	}
	get checked() {
		if (this.props.controlled) {
			return this.props.checked;
		} else {
			return this.state.checked;
		}
	}
	GetPanelElementProps() {
		const {
			onChange: e,
			checked: t,
			label: r,
			description: n,
			tabIndex: i,
			disabled: a,
			className: s,
			tooltip: o,
			color: l,
			highlightColor: c,
			bottomSeparator: m,
			controlled: u,
			...d
		} = this.props;
		return {
			...d,
			tabIndex: i || 0,
			onActivate: this.Toggle,
			onKeyDown: this.KeyDown,
		};
	}
	Toggle() {
		if (this.props.disabled) {
			return;
		}
		let e = !this.checked;
		if (!this.props.controlled) {
			this.setState({
				checked: e,
			});
		}
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	}
	KeyDown(e) {
		if (e.keyCode == 32) {
			this.Toggle();
			e.preventDefault();
			e.stopPropagation();
		}
	}
	SetChecked(e, t) {
		this.setState({
			checked: e,
		});
		if (t && this.props.onChange) {
			this.props.onChange(e);
		}
	}
}
(0, n.Cg)([c.o], pF.prototype, "Toggle", null);
(0, n.Cg)([c.o], pF.prototype, "KeyDown", null);
(0, n.Cg)([c.o], pF.prototype, "SetChecked", null);
export class Yh extends pF {
	render() {
		let e = "DialogCheckbox" + (this.checked ? " Active" : "");
		if (this.state.disabled == 1) {
			e += " Disabled";
		}
		if (this.props.label) {
			return i.createElement(
				s.Z,
				{
					className:
						"DialogCheckbox_Container _DialogLayout " +
						(this.props.className ? this.props.className : "") +
						(this.state.disabled ? " Disabled" : ""),
					...this.GetPanelElementProps(),
				},
				i.createElement(
					"div",
					{
						className: e,
					},
					i.createElement(o.X4B, {
						color: this.props.color,
						highlightColor: this.props.highlightColor,
					}),
				),
				i.createElement(
					"div",
					{
						className: "DialogToggle_Label",
					},
					typeof this.props.label == "string" &&
						i.createElement("span", null, this.props.label),
					typeof this.props.label != "string" && this.props.label,
					this.props.tooltip &&
						i.createElement(d.o, {
							tooltip: this.props.tooltip,
						}),
				),
				i.createElement("div", {
					style: {
						clear: "left",
					},
				}),
				this.props.description &&
					i.createElement(
						"div",
						{
							className: "DialogToggle_Description",
						},
						this.props.description,
					),
				this.props.children,
			);
		} else {
			return i.createElement(
				s.Z,
				{
					className: e,
					...this.GetPanelElementProps(),
				},
				i.createElement(o.X4B, null),
			);
		}
	}
}
export class Od extends pF {
	render() {
		let e = this.checked ? " Active" : "";
		if (this.state.disabled == 1) {
			e += " Disabled";
		}
		return i.createElement(
			s.Z,
			{
				className: (0, m.A)(
					"DialogRoundCheckboxField_Container",
					this.props.className,
					this.props.label ? "WithLabel" : "",
					e,
				),
				...this.GetPanelElementProps(),
			},
			i.createElement(
				"div",
				{
					className: "DialogRoundCheckboxField",
				},
				i.createElement(
					"div",
					{
						className: "DialogRoundCheckboxField_Control" + e,
					},
					i.createElement(
						"div",
						{
							className: "DialogRoundCheckboxField_OuterCircle",
						},
						i.createElement("div", {
							className: "DialogRoundCheckboxField_InnerCircle",
						}),
					),
				),
			),
			this.props.label &&
				i.createElement(
					"div",
					{
						className: "DialogToggle_Label",
					},
					i.createElement("span", null, this.props.label),
					this.props.tooltip &&
						i.createElement(d.o, {
							tooltip: this.props.tooltip,
						}),
				),
		);
	}
}
export const RF = i.forwardRef(function (e, t) {
	const r = (0, A.Zt)("ToggleField", Y);
	return i.createElement(r, {
		ref: t,
		...e,
	});
});
class Y extends pF {
	OnOffKeyDown(e) {
		if (
			(e.keyCode == 37 && this.checked) ||
			(e.keyCode == 39 && !this.checked)
		) {
			this.Toggle();
			e.preventDefault();
			e.stopPropagation();
		} else {
			this.KeyDown(e);
		}
	}
	OnNewUIToggle(e) {
		if (e !== this.checked) {
			this.Toggle();
		}
	}
	render() {
		let e =
			"DialogToggleField _DialogInputContainer _DialogLayout " +
			(this.props.className ? this.props.className : "");
		if (this.props.disabled) {
			e += " Disabled";
		}
		return i.createElement(
			"div",
			{
				className: e,
				tabIndex: this.props.tabIndex || 0,
				onKeyDown: this.OnOffKeyDown,
			},
			i.createElement(
				"div",
				{
					className: "displayColumn alignSelfCenter",
				},
				i.createElement(
					"div",
					{
						className: "DialogToggle_Label",
					},
					i.createElement("span", null, this.props.label),
					this.props.tooltip &&
						i.createElement(d.o, {
							tooltip: this.props.tooltip,
						}),
				),
				this.props.description &&
					i.createElement(
						"div",
						{
							className: "DialogToggle_Description",
						},
						this.props.description,
					),
				this.props.children,
			),
			this.props.useToggleRail
				? i.createElement(
						"div",
						{
							className: "DialogToggleField_NewUIContainer",
						},
						i.createElement(p._H, {
							onChange: this.OnNewUIToggle,
							value: this.checked,
						}),
					)
				: i.createElement(
						"div",
						{
							className: "DialogToggleField_Control",
							onClick: this.Toggle,
						},
						i.createElement(
							s.Z,
							{
								className: "DialogToggleField_OptionPanel",
								onOKButton: this.Toggle,
							},
							i.createElement(
								"div",
								{
									className:
										"DialogToggleField_Option Off" +
										(this.checked ? "" : " Active"),
								},
								(0, u.we)("#Dialog_Off"),
							),
							i.createElement(
								"div",
								{
									className:
										"DialogToggleField_Option On" +
										(this.checked ? " Active" : ""),
								},
								(0, u.we)("#Dialog_On"),
							),
						),
					),
		);
	}
}
(0, n.Cg)([c.o], Y.prototype, "OnOffKeyDown", null);
(0, n.Cg)([c.o], Y.prototype, "OnNewUIToggle", null);
