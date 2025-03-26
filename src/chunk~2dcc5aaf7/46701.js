var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./42318.js");
var a = require(/*webcrack:missing*/ "./50376.js");
import { BIsParentOrSelf } from "../../actual_src/utils/domutils.js";
export const Nm = n.createContext({});
const l = () => n.useContext(Nm);
export function x_(e) {
	const t = l().ModalPosition ?? m;
	return n.createElement(t, {
		...e,
	});
}
function m(e) {
	let t;
	let r = {};
	if (e.onEscKeypress) {
		r.tabIndex = 0;
		r.onKeyDown = (t) => {
			if (t.keyCode == 27) {
				e.onEscKeypress();
			}
		};
		r.onMouseDown = (t) => {
			if (t.currentTarget === t.target && !e.bDisableBackgroundDismiss) {
				e.onEscKeypress();
			}
		};
		t = (e) => {
			if (e) {
				if (!BIsParentOrSelf(e, e.ownerDocument.activeElement)) {
					e.focus();
				}
			}
		};
	}
	let o = ["ModalPosition"];
	if (e.className) {
		o.push(e.className);
	}
	if (e.bDestructiveWarning) {
		o.push("Destructive");
	}
	const l =
		e.renderContent ||
		((e) =>
			n.createElement("div", {
				...e,
			}));
	const c = n.createElement(
		n.Fragment,
		null,
		!e.hideTopBar &&
			n.createElement("div", {
				className: "ModalPosition_TopBar",
			}),
		e.onEscKeypress &&
			!e.bHideCloseIcon &&
			n.createElement(
				"div",
				{
					className: "ModalPosition_Dismiss",
				},
				n.createElement(
					"div",
					{
						className: "closeButton",
						onClick: (t) => {
							t.stopPropagation();
							e.onEscKeypress();
						},
					},
					n.createElement(a.sED, null),
				),
			),
		n.createElement(i.tH, null, e.children),
	);
	return n.createElement(
		"div",
		{
			className: o.join(" "),
			...r,
			ref: t,
		},
		l({
			className: "ModalPosition_Content",
			children: c,
		}),
	);
}
