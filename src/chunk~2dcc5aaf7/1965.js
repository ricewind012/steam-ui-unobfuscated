import { Cg } from "./34629.js";
import i, { createContext, useContext } from "./63696.js";
import a from "./41230.js";
import s from "./93050.js";
import { A as A_1 } from "./90765.js";
import l from "./3475.js";
import c from "./5640.js";
import m from "./69164.js";
import u from "./19819.js";
import A, { Qn } from "./72476.js";
import p from "./56726.js";
import g from "./43520.js";
import h from "./55116.js";
import { qw } from "./89748.js";
const d = u;
const _Context = createContext({});
function f(e) {
	const { children, className } = e;
	return i.createElement(
		g.hL,
		{
			spacing: {
				horizontal: parseInt(d.BodyGutter),
			},
		},
		i.createElement(
			"div",
			{
				className: A_1(d.Body, className),
			},
			children,
			i.createElement(b, null),
		),
	);
}
function b() {
	const { primaryAction, secondaryAction, renderActions } =
		useContext(_Context);
	if (Qn() || renderActions === null || (!primaryAction && !secondaryAction)) {
		return null;
	} else if (renderActions) {
		return i.createElement(
			i.Fragment,
			null,
			renderActions(primaryAction, secondaryAction),
		);
	} else if (primaryAction && !secondaryAction) {
		return i.createElement(
			p.TD,
			{
				onClick: primaryAction.action,
			},
			primaryAction.label,
		);
	} else {
		return i.createElement(
			"div",
			{
				className: d.ButtonContainer,
			},
			secondaryAction &&
				i.createElement(
					p.Po,
					{
						onClick: secondaryAction.action,
					},
					secondaryAction.label,
				),
			primaryAction &&
				i.createElement(
					p.TD,
					{
						onClick: primaryAction.action,
					},
					primaryAction.label,
				),
		);
	}
}
function y(e) {
	const { className, ...r } = e;
	return i.createElement("div", {
		className: A_1(d.Highlight, className),
		...r,
	});
}
export let n = class extends i.Component {
	static Body = f;
	static Highlight = y;
	render() {
		const {
			children,
			className,
			label,
			tooltip,
			showRule,
			highlight,
			feature = l.uX,
			availableOffline,
			rightColumnSection,
			headerClass,
			primaryAction,
			secondaryAction,
			renderActions,
			scrollIntoViewWhenChildFocused,
			...B
		} = this.props;
		if (
			c.jR.BIsFeatureBlocked(feature) ||
			(!availableOffline && qw().BIsOfflineMode())
		) {
			return null;
		} else {
			return i.createElement(
				_Context.Provider,
				{
					value: {
						primaryAction: primaryAction,
						secondaryAction: secondaryAction,
						renderActions: renderActions,
					},
				},
				i.createElement(
					m.Z,
					{
						className: A_1(d.AppDetailsSection, className),
						scrollIntoViewWhenChildFocused: scrollIntoViewWhenChildFocused,
						...B,
					},
					label &&
						i.createElement(s.w, {
							label: label,
							tooltip: tooltip,
							showRule: showRule,
							className: headerClass,
						}),
					i.createElement(
						m.Z,
						{
							className: A_1(
								d.AppDetailsSectionContainer,
								label && d.AppDetailsSectionHasLabel,
								rightColumnSection && d.RightColumnSection,
							),
							onOKButton: primaryAction?.action,
							onOKActionDescription: primaryAction?.label,
							onSecondaryButton: secondaryAction?.action,
							onSecondaryActionDescription: secondaryAction?.label,
						},
						i.createElement(h.q, null, highlight, children),
					),
				),
			);
		}
	}
};
n = Cg([a.PA], n);
