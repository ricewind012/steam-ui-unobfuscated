import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./90242.js";
import s from "./69164.js";
import o from "./50376.js";
import l, { Ri } from "./43397.js";
import c from "./93960.js";
import m, { A as A_1 } from "./90765.js";
import d from "./27793.js";
import A, { Zt, a_ as a_1 } from "./7514.js";
import p from "./26970.js";
function g(e) {
	return i.forwardRef((t, r) => (
		<s.Z {...t} className={A_1(e, t.className)} ref={r} />
	));
}
export let Y9 = Ri("DialogHeader");
export let iK = Ri("DialogSubHeader");
export let tX = Ri("SettingsDialogSubHeader");
export let wi = Ri("DialogFooter");
export let JU = Ri("DialogLabel _DialogLayout");
export let a3 = Ri("DialogBodyText");
export let nB = Ri("DialogBody");
export let f3 = g("DialogBody");
export let xz = Ri("DialogInnerBody");
export let G5 = Ri("DialogControlsSection");
export let lr = Ri("DialogControlsSectionHeader");
export let DR = g("DialogTwoColLayout _DialogColLayout");
export let Xp = g("DialogThreeColLayout _DialogColLayout");
g("DialogTwoThirdColLayout _DialogColLayout");
export let VP = Ri("DialogColumn _DialogLayout");
export function UC(e) {
	const T = Zt("Content", k);
	return <T {...e} />;
}
function k(e) {
	let { children, bCenterVertically, refElem, ...a } = e;
	let s = `DialogContent _DialogLayout${e.className ? ` ${e.className}` : ""}`;
	if (bCenterVertically) {
		s += " _DialogCenterVertically";
	}
	return (
		<div {...a} ref={refElem} className={s}>
			<div className="DialogContent_InnerWidth">{children}</div>
		</div>
	);
}
export class LV extends i.Component {
	OnSubmit(e) {
		e.preventDefault();
		if (this.props.onSubmit) {
			this.props.onSubmit(e);
		}
	}
	render() {
		return <form {...this.props} onSubmit={this.OnSubmit} />;
	}
}
export function U9(e) {
	const { classNameContent, bCenterVertically, ...n } = e;
	return (
		<UC className={classNameContent} bCenterVertically={bCenterVertically}>
			<LV {...n} />
		</UC>
	);
}
export function mq(e) {
	const { label, tooltip, className, children } = e;
	return (
		<label className={A_1("DialogInputLabelGroup", "_DialogLayout", className)}>
			{label && (
				<JU>
					{label} {tooltip && <d.o tooltip={tooltip} />}{" "}
				</JU>
			)}
			{children}
		</label>
	);
}
Cg([c.o], LV.prototype, "OnSubmit", null);
const G = i.forwardRef((props, ref) => {
	const r = a_1();
	const { svgicon, ...s } = props;
	const o = A_1(
		props.className,
		svgicon !== undefined && "hasSVGIcon",
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
	return (
		<a.fu
			ref={ref}
			onOKActionDescription={s.disabled || undefined}
			noFocusRing={!!r.strButtonClassName}
			{...s}
			className={o}
			disabled={false}
			onClick={l(s.onClick)}
			onPointerDown={l(s.onPointerDown)}
			onPointerUp={l(s.onPointerUp)}
			onPointerCancel={l(s.onPointerCancel)}
			onMouseDown={l(s.onMouseDown)}
			onMouseUp={l(s.onMouseUp)}
			onTouchStart={l(s.onTouchStart)}
			onTouchEnd={l(s.onTouchEnd)}
			onTouchCancel={l(s.onTouchCancel)}
			onSubmit={l(s.onSubmit)}
		>
			{svgicon && svgicon()}
			{props.children}
		</a.fu>
	);
});
export const Jn = i.forwardRef((props, ref) => (
	<G
		preferredFocus
		type={props.onClick ? "button" : "submit"}
		{...props}
		ref={ref}
		className={A_1(props.className, "DialogButton", "_DialogLayout", "Primary")}
	/>
));
export const $n = i.forwardRef((props, ref) => (
	<G
		type="button"
		{...props}
		ref={ref}
		className={A_1(
			props.className,
			"DialogButton",
			"_DialogLayout",
			"Secondary",
		)}
	/>
));
export const cK = i.forwardRef((props, ref) => (
	<G
		type="button"
		{...props}
		ref={ref}
		className={A_1(
			props.className,
			"DialogButton",
			"_DialogLayout",
			"EmptyButton",
		)}
	/>
));
export const wl = i.forwardRef((props, ref) => (
	<G
		type="button"
		{...props}
		ref={ref}
		className={A_1(props.className, "DialogButton _DialogLayout Small")}
	/>
));
export const QW = i.forwardRef((props, ref) => (
	<G
		type="button"
		{...props}
		ref={ref}
		className={A_1(props.className, "TextButton")}
	/>
));
export function _E(e) {
	let t = `DialogHBar${e.className ? ` ${e.className}` : ""}`;
	return <div {...e} className={t} />;
}
export function CB(e) {
	return (
		<DR className={e.className}>
			<Jn
				onClick={e.onOK}
				disabled={e.bOKDisabled}
				autoFocus={e.focusButton == "primary"}
			>
				{e.strOKText || (0, Localize)("#Button_Confirm")}{" "}
			</Jn>
			<$n
				onClick={e.onCancel}
				disabled={e.bCancelDisabled}
				autoFocus={e.focusButton == "secondary"}
			>
				{e.strCancelText || (0, Localize)("#Button_Cancel")}
			</$n>
		</DR>
	);
}
export function VQ(e) {
	const T = e.bOKDisabled ? $n : Jn;
	const R = e.bOKDisabled ? Jn : $n;
	return (
		<Xp>
			<T onClick={e.onOK} disabled={e.bOKDisabled}>
				{e.strOKText || (0, Localize)("#Button_Confirm")}{" "}
			</T>
			<R onClick={e.onUpdate} disabled={e.bUpdateDisabled}>
				{e.strUpdateText || (0, Localize)("#Button_Update")}{" "}
			</R>
			<$n onClick={e.onCancel} disabled={e.bCancelDisabled}>
				{e.strCancelText || (0, Localize)("#Button_Cancel")}
			</$n>
		</Xp>
	);
}
export function xv(e) {
	const {
		onPrimary,
		onSecondary,
		onCancel,
		bDisableSecondary,
		strPrimaryButtonText,
		strSecondaryButtonText,
		strCancelButtonText,
		className,
		classNamePrimary,
	} = e;
	return (
		<div className={className}>
			<Jn
				onClick={onPrimary}
				className={A_1("Stacked", classNamePrimary)}
				autoFocus
			>
				{strPrimaryButtonText}
			</Jn>
			<DR>
				<$n onClick={onCancel}>
					{strCancelButtonText || (0, Localize)("#Button_Cancel")}
				</$n>
				<$n onClick={onSecondary} disabled={bDisableSecondary}>
					{strSecondaryButtonText}
				</$n>
			</DR>
		</div>
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
			e.description != this.props.description ||
			e.onChange != this.props.onChange ||
			e.description != this.props.description ||
			e.onChange != this.props.onChange ||
			e.controlled != this.props.controlled ||
			e.description != this.props.description ||
			e.onChange != this.props.onChange ||
			e.controlled != this.props.controlled ||
			e.disabled != this.props.disabled ||
			e.description != this.props.description ||
			e.onChange != this.props.onChange ||
			e.controlled != this.props.controlled ||
			e.disabled != this.props.disabled ||
			t.disabled != this.state.disabled ||
			e.description != this.props.description ||
			e.onChange != this.props.onChange ||
			e.controlled != this.props.controlled ||
			e.disabled != this.props.disabled ||
			t.disabled != this.state.disabled ||
			e.checked != this.checked ||
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
			onChange,
			checked,
			label,
			description,
			tabIndex,
			disabled,
			className,
			tooltip,
			color,
			highlightColor,
			bottomSeparator,
			controlled,
			...d
		} = this.props;
		return {
			...d,
			tabIndex: tabIndex || 0,
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
Cg([c.o], pF.prototype, "Toggle", null);
Cg([c.o], pF.prototype, "KeyDown", null);
Cg([c.o], pF.prototype, "SetChecked", null);
export class Yh extends pF {
	render() {
		let e = `DialogCheckbox${this.checked ? " Active" : ""}`;
		if (this.state.disabled == 1) {
			e += " Disabled";
		}
		if (this.props.label) {
			return (
				<s.Z
					className={`DialogCheckbox_Container _DialogLayout ${
						this.props.className ? this.props.className : ""
					}${this.state.disabled ? " Disabled" : ""}`}
					{...this.GetPanelElementProps()}
				>
					<div className={e}>
						<o.X4B
							color={this.props.color}
							highlightColor={this.props.highlightColor}
						/>
					</div>
					<div className="DialogToggle_Label">
						{typeof this.props.label == "string" && (
							<span>{this.props.label}</span>
						)}
						{typeof this.props.label != "string" && this.props.label}
						{this.props.tooltip && <d.o tooltip={this.props.tooltip} />}
					</div>
					<div
						style={{
							clear: "left",
						}}
					/>
					{this.props.description && (
						<div className="DialogToggle_Description">
							{this.props.description}
						</div>
					)}
					{this.props.children}
				</s.Z>
			);
		} else {
			return (
				<s.Z className={e} {...this.GetPanelElementProps()}>
					<o.X4B />
				</s.Z>
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
		return (
			<s.Z
				className={A_1(
					"DialogRoundCheckboxField_Container",
					this.props.className,
					this.props.label ? "WithLabel" : "",
					e,
				)}
				{...this.GetPanelElementProps()}
			>
				<div className="DialogRoundCheckboxField">
					<div className={`DialogRoundCheckboxField_Control${e}`}>
						<div className="DialogRoundCheckboxField_OuterCircle">
							<div className="DialogRoundCheckboxField_InnerCircle" />
						</div>
					</div>
				</div>
				{this.props.label && (
					<div className="DialogToggle_Label">
						<span>{this.props.label}</span>
						{this.props.tooltip && <d.o tooltip={this.props.tooltip} />}
					</div>
				)}
			</s.Z>
		);
	}
}
export const RF = i.forwardRef((props, ref) => {
	const R = Zt("ToggleField", Y);
	return <R ref={ref} {...props} />;
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
		let e = `DialogToggleField _DialogInputContainer _DialogLayout ${
			this.props.className ? this.props.className : ""
		}`;
		if (this.props.disabled) {
			e += " Disabled";
		}
		return (
			<div
				className={e}
				tabIndex={this.props.tabIndex || 0}
				onKeyDown={this.OnOffKeyDown}
			>
				<div className="displayColumn alignSelfCenter">
					<div className="DialogToggle_Label">
						<span>{this.props.label}</span>
						{this.props.tooltip && <d.o tooltip={this.props.tooltip} />}
					</div>
					{this.props.description && (
						<div className="DialogToggle_Description">
							{this.props.description}
						</div>
					)}
					{this.props.children}
				</div>
				{this.props.useToggleRail ? (
					<div className="DialogToggleField_NewUIContainer">
						<p._H onChange={this.OnNewUIToggle} value={this.checked} />
					</div>
				) : (
					<div className="DialogToggleField_Control" onClick={this.Toggle}>
						<s.Z
							className="DialogToggleField_OptionPanel"
							onOKButton={this.Toggle}
						>
							<div
								className={`DialogToggleField_Option Off${
									this.checked ? "" : " Active"
								}`}
							>
								{(0, Localize)("#Dialog_Off")}
							</div>
							<div
								className={`DialogToggleField_Option On${
									this.checked ? " Active" : ""
								}`}
							>
								{(0, Localize)("#Dialog_On")}
							</div>
						</s.Z>
					</div>
				)}
			</div>
		);
	}
}
Cg([c.o], Y.prototype, "OnOffKeyDown", null);
Cg([c.o], Y.prototype, "OnNewUIToggle", null);
