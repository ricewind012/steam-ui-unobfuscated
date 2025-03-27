import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./69164.js";
import a from "./4690.js";
import s from "./64608.js";
import o, { A as A_1 } from "./90765.js";
import l, { Ue, RY } from "./52451.js";
import c from "./2053.js";
import u, { Qn } from "./72476.js";
import d, { R7 } from "./11131.js";
import A, { Zw } from "./12774.js";
import g from "./27793.js";
const m = c;
export const D0 = n.forwardRef((props, ref) => {
	const {
		label,
		description,
		icon,
		children,
		childrenLayout,
		inlineWrap,
		childrenContainerWidth,
		spacingBetweenLabelAndChild,
		padding,
		disabled,
		bottomSeparator,
		className,
		highlightOnFocus,
		indentLevel,
		verticalAlignment,
		iconLocation,
		tooltip,
		explainer,
		explainerTitle,
		...k
	} = props;
	const D = Qn();
	const N = childrenLayout ?? "inline";
	const F = iconLocation ?? "front";
	const G = F == "front" && !!icon;
	const O = F == "before-children" && !!icon;
	const P = N == "inline" && !!children;
	const L = N == "below" && !!children;
	const z = inlineWrap ?? (D ? "shift-children-below" : "keep-inline");
	const x = !!k.onClick || !!k.onActivate || !!k.onActivate || !!k.focusable;
	const U = (icon != null && G) || label != null || (P && children != null);
	const W = childrenContainerWidth ?? "min";
	const V = spacingBetweenLabelAndChild ?? "standard";
	const H = padding ?? "standard";
	const j = bottomSeparator ?? "standard";
	const q = highlightOnFocus ?? true;
	const Q = indentLevel ?? 0;
	const Z = verticalAlignment ?? "center";
	const Y = ((e, t) => {
		const r = R7();
		const i = n.useCallback(() => {
			Zw(e, t, r.ownerWindow ?? window);
		}, [r, e, t]);
		if (t == null) {
			return {};
		}
		const a = Localize("#Field_MoreInfo_Action");
		return {
			onOptionsButton: i,
			onOptionsActionDescription: a,
		};
	})(explainerTitle ?? label, explainer);
	const KRef = n.useRef();
	const X = Ue(KRef, props.navRef);
	const J = n.useCallback(
		(e) => {
			KRef.current?.TakeFocus();
			e.preventDefault();
		},
		[KRef],
	);
	return (
		<i.Z
			focusable={x}
			noFocusRing
			scrollIntoViewWhenChildFocused
			onActivate={(e) => k.onClick?.(e)}
			ref={ref}
			onMouseDown={x || J}
			{...k}
			{...Y}
			navRef={X}
			className={A_1(
				className,
				m.Field,
				disabled && m.Disabled,
				U && m.WithFirstRow,
				P && m.WithChildrenInline,
				L && m.WithChildrenBelow,
				Z == "center" && m.VerticalAlignCenter,
				z == "shift-children-below" && m.InlineWrapShiftsChildrenBelow,
				!!description && m.WithDescription,
				j == "standard" && m.WithBottomSeparatorStandard,
				j == "thick" && m.WithBottomSeparatorThick,
				W == "fixed" && m.ChildrenWidthFixed,
				W == "max" && m.ChildrenWidthGrow,
				V == "standard" && m.ExtraPaddingOnChildrenBelow,
				H == "standard" && m.StandardPadding,
				H == "compact" && m.CompactPadding,
				x && m.Clickable,
				q && m.HighlightOnFocus,
			)}
			style={{
				"--indent-level": Q,
			}}
		>
			{U && (
				<div className={m.FieldLabelRow}>
					<div className={m.FieldLabel}>
						{G && <div className={A_1(m.FieldIcon, m.Front)}>{icon}</div>}
						{label}
						{tooltip && <g.o tooltip={tooltip} />}
					</div>
					{P && (
						<div className={m.FieldChildrenWithIcon}>
							{O && (
								<div className={A_1(m.FieldIcon, m.BeforeChildren)}>{icon}</div>
							)}
							<div className={m.FieldChildrenInner}>{children}</div>
						</div>
					)}
				</div>
			)}
			{L && (
				<div className={m.FieldChildrenWithIcon}>
					{O && (
						<div className={A_1(m.FieldIcon, m.BeforeChildren)}>{icon}</div>
					)}
					<div className={m.FieldChildrenInner}>{children}</div>
				</div>
			)}
			{description && <div className={m.FieldDescription}>{description}</div>}
		</i.Z>
	);
});
export function Nv(e) {
	const { layout, ...r } = e;
	return (
		<D0 spacingBetweenLabelAndChild="none" childrenLayout={e.layout} {...r}>
			<div className={m.LabelFieldValue}>{e.children}</div>
		</D0>
	);
}
export const xh = n.forwardRef((props, ref) => {
	const {
		label,
		description,
		explainer,
		icon,
		layout,
		disabled,
		onActivate,
		bottomSeparator,
		highlightOnFocus,
		childrenContainerWidth,
		padding,
		inlineWrap,
		fieldClassName,
		fieldChildren,
		...b
	} = props;
	const { refWithValue, refForElement } = RY(ref);
	return (
		<D0
			label={label}
			description={description}
			icon={icon}
			bottomSeparator={bottomSeparator}
			highlightOnFocus={highlightOnFocus}
			childrenLayout={layout ?? "inline"}
			childrenContainerWidth={childrenContainerWidth ?? "min"}
			onMouseDown={(e) => {
				refWithValue.current?.focus();
				e.preventDefault();
			}}
			padding={padding}
			inlineWrap={inlineWrap}
			explainer={explainer}
			className={fieldClassName}
			disabled={disabled}
			onActivate={disabled ? onActivate : undefined}
		>
			<s.$n {...b} disabled={disabled} ref={refForElement} />
			{fieldChildren}
		</D0>
	);
});
export const qq = n.forwardRef((props, ref) => {
	const {
		label,
		description,
		icon,
		layout,
		bottomSeparator,
		highlightOnFocus,
		...u
	} = props;
	const { refWithValue, refForElement } = RY(ref);
	return (
		<D0
			label={label}
			description={description}
			icon={icon}
			bottomSeparator={bottomSeparator}
			highlightOnFocus={highlightOnFocus}
			childrenLayout={layout ?? "inline"}
			childrenContainerWidth="fixed"
			onMouseDown={(e) => {
				refWithValue.current?.element?.focus();
				e.preventDefault();
			}}
		>
			<s.pd {...u} ref={refForElement} />
		</D0>
	);
});
export function $S(e) {
	const t = e.alignItems ?? "left";
	const r = e.spacing ?? "standard";
	const s = e.itemMaxSize ?? "gamepad";
	return (
		<i.Z
			className={A_1(
				m.ControlsListOuterPanel,
				t == "left" && m.AlignLeft,
				t == "right" && m.AlignRight,
				t == "center" && m.AlignCenter,
				r == "standard" && m.StandardSpacing,
				r == "extra" && m.ExtraSpacing,
				s == "desktop" && m.ItemMaxSizeDesktop,
				e.fullWidth && m.FullWidth,
			)}
			navEntryPreferPosition={a.iU.PREFERRED_CHILD}
		>
			{n.Children.map(
				e.children,
				(e) => e && <div className={m.ControlsListChild}>{e}</div>,
			)}
		</i.Z>
	);
}
export function BC(e) {
	const { children, alignItems, spacing, itemMaxSize, fullWidth, ...o } = e;
	const l = {
		fullWidth: fullWidth,
		children: children,
		alignItems: alignItems,
		spacing: spacing,
		itemMaxSize: itemMaxSize,
	};
	return (
		<D0 childrenLayout="below" {...o}>
			<$S {...l} />
		</D0>
	);
}
export function T8(e) {
	const t = e.onClick ?? (() => {});
	return (
		<Nv
			key={e.name}
			label={e.name}
			onClick={t}
			bottomSeparator={e.bottomSeparator}
		>
			{e.value}
		</Nv>
	);
}
export function Nu(e) {
	return <div className={A_1(m.StandaloneFieldSeparator, e.className)} />;
}
