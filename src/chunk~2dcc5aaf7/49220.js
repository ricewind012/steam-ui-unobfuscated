var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require(/*webcrack:missing*/ "./58254.js");
var s = require(/*webcrack:missing*/ "./93861.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./41618.js");
var c = require(/*webcrack:missing*/ "./88696.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./43014.js");
var d = require("./35488.js");
var A = require(/*webcrack:missing*/ "./50376.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var g = require("./46422.js");
var h = require("./10606.js");
var C = require("./22004.js");
var _ = require("./71033.js");
var f = require("./31319.js");
var b = require("./14982.js");
var y = require(/*webcrack:missing*/ "./72476.js");
var S = require("./53622.js");
const w = 20;
const B = 1;
const v = "Deck_GuidedTourVersionSeen";
function I() {
	const { bShowTour: e, onComplete: t } = (function () {
		const e = (0, i.W6)();
		const t = (0, i.zy)();
		const r = t.state && t.state.bShowGuidedTour;
		const n = () => {
			const { bShowGuidedTour: r, ...n } = t.state || {};
			e.replace((0, s.AO)(t), n);
		};
		return {
			bShowTour: r,
			onComplete: n,
		};
	})();
	const [r, a] = (0, n.useState)(false);
	const o = (0, y.rP)();
	(0, n.useEffect)(() => {
		(async function () {
			const e = new c.A();
			const t = await e.GetString(v);
			if (!t) {
				return false;
			}
			const r = parseInt(t);
			if (isNaN(r)) {
				e.RemoveObject(v);
				return false;
			} else {
				return r >= B;
			}
		})().then((e) => a(!e));
	}, []);
	return {
		bShowTour: (!y.TS.TESLA && !o.IN_VR && r) || e,
		onComplete: () => {
			a(false);
			t();
		},
	};
}
export function JD() {
	const { bShowTour: e, onComplete: t } = I();
	if (e) {
		return n.createElement(
			h.EN,
			{
				active: true,
			},
			n.createElement(M, {
				onComplete: t,
			}),
		);
	} else {
		return null;
	}
}
function M(e) {
	const { onComplete: t } = e;
	const [r, i] = (0, n.useState)(0);
	(0, g.LC)();
	(0, f.pw)();
	(0, _.Nx)();
	(0, n.useEffect)(() => {
		new c.A().StoreString(v, B.toString());
	}, []);
	const s = (0, n.useRef)(undefined);
	(0, n.useEffect)(() => {
		window.setTimeout(() => s.current.focus(), 100);
	}, []);
	const o = (0, n.useRef)(null);
	const u = (function () {
		if ((0, y.uI)()) {
			return [T, G, O, P, L, z, R];
		}
		return [T, G, O, R];
	})();
	const d = u[r];
	if (!d) {
		return null;
	}
	const A = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (r + 1 >= u.length) {
			t();
		}
		i(r + 1);
	};
	const p = r !== 0 && r !== u.length - 1;
	return n.createElement(
		m.Z,
		{
			focusable: true,
			autoFocus: true,
			noFocusRing: true,
			style: {
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			},
			onButtonDown: A,
			onActivate: A,
			ref: s,
		},
		n.createElement(
			a.A,
			{
				nodeRef: o,
				mountOnEnter: true,
				unmountOnExit: true,
				in: p,
				timeout: 800,
				classNames: {
					enter: l.PaginationContentEnter,
					enterActive: l.PaginationContentEnterActive,
					exit: l.PaginationContentExit,
					exitActive: l.PaginationContentExitActive,
				},
			},
			n.createElement(
				k,
				{
					divRef: o,
				},
				n.createElement(V, {
					count: u.length - 2,
					activePage: r - 1,
				}),
				n.createElement(N, null),
			),
		),
		n.createElement(
			C.FF,
			{
				childrenKey: r.toString(),
				childrenClasses: (0, C.Qh)(l, l.ActiveTourPage),
				directionClass: "none",
			},
			n.createElement(d, null),
		),
	);
}
function T() {
	const e = (0, y.uI)();
	return n.createElement(
		k,
		null,
		n.createElement(
			"div",
			{
				className: l.WelcomeTitle,
			},
			(0, Localize)(
				e ? "#GuidedTour_Welcome_Title" : "#GuidedTour_BPM_Welcome_Title",
			),
		),
		n.createElement(
			D,
			{
				className: l.WelcomeDescription,
			},
			(0, Localize)(
				e
					? "#GuidedTour_Welcome_Description"
					: "#GuidedTour_BPM_Welcome_Description",
			),
		),
		n.createElement(N, null),
	);
}
function R() {
	const e = (0, y.uI)();
	return n.createElement(
		k,
		null,
		n.createElement(
			"div",
			{
				className: l.WelcomeTitle,
			},
			(0, Localize)(
				e ? "#GuidedTour_SendOff_Title" : "#GuidedTour_BPM_SendOff_Title",
			),
		),
		n.createElement(
			D,
			{
				className: l.WelcomeDescription,
			},
			(0, Localize)(
				e
					? "#GuidedTour_SendOff_Description"
					: "#GuidedTour_BPM_SendOff_Description",
			),
		),
		n.createElement(N, null),
	);
}
function k(e) {
	return n.createElement(
		"div",
		{
			ref: e.divRef,
			className: l.CenteredContent,
		},
		e.children,
	);
}
function D(e) {
	const { className: t, children: r } = e;
	return n.createElement(
		"div",
		{
			className: (0, o.A)(l.TourText, t),
		},
		r,
	);
}
function N() {
	return n.createElement(
		"div",
		{
			className: l.ContinueMessage,
		},
		LocalizeReact(
			"#GuidedTour_ContinueMessage_Template",
			n.createElement(
				F,
				null,
				(0, Localize)("#GuidedTour_ContinueMessage_ActionPress"),
			),
			n.createElement(
				F,
				null,
				(0, Localize)("#GuidedTour_ContinueMessage_ActionTap"),
			),
		),
	);
}
function F(e) {
	return n.createElement(
		"span",
		{
			className: l.MessageAction,
		},
		e.children,
	);
}
function G() {
	const e = (0, y.uI)();
	const t = e
		? n.createElement(S.W, {
				button: u.g4.HomeMenu,
			})
		: null;
	return n.createElement(W, {
		position: {
			bottom: 90,
			left: -w / 2,
		},
		targetDirection: "left",
		title: (0, Localize)(
			e ? "#GuidedTour_SteamButton_Title" : "#GuidedTour_BPM_SteamButton_Title",
		),
		description: LocalizeReact(
			e
				? "#GuidedTour_SteamButton_Description"
				: "#GuidedTour_BPM_SteamButton_Description",
			n.createElement(S.W, {
				button: u.g4.HomeMenu,
			}),
		),
		icon: t,
	});
}
function O() {
	const e = (0, y.uI)();
	const t = e
		? n.createElement(S.W, {
				button: u.g4.QuickMenu,
			})
		: null;
	const r = n.createElement(
		n.Fragment,
		null,
		n.createElement(S.W, {
			button: u.g4.HomeMenu,
		}),
		"+",
		n.createElement(S.W, {
			button: u.g4.A,
		}),
	);
	return n.createElement(W, {
		position: {
			bottom: 90,
			right: -w / 2,
		},
		targetDirection: "right",
		title: (0, Localize)(
			e
				? "#GuidedTour_QuickAccessButton_Title"
				: "#GuidedTour_BPM_QuickAccessButton_Title",
		),
		description: LocalizeReact(
			e
				? "#GuidedTour_QuickAccessButton_Description"
				: "#GuidedTour_BPM_QuickAccessButton_Description",
			r,
		),
		icon: t,
	});
}
function P() {
	return n.createElement(W, {
		position: {
			top: -w / 2,
			right: w / 2,
		},
		targetDirection: "top",
		align: "right",
		title: (0, Localize)("#GuidedTour_PowerButton_Title"),
		description: (0, Localize)("#GuidedTour_PowerButton_Description"),
		icon: n.createElement(d.Power, {
			className: l.Icon,
		}),
	});
}
function L() {
	return n.createElement(W, {
		position: {
			top: -w / 2,
			left: w,
		},
		targetDirection: "top",
		align: "left",
		title: (0, Localize)("#GuidedTour_VolumeButtons_Title"),
		description: (0, Localize)("#GuidedTour_VolumeButtons_Description"),
		icon: n.createElement(A.fSs, {
			className: l.Icon,
		}),
	});
}
function z() {
	return n.createElement(W, {
		position: {
			bottom: -w / 2,
			right: w / 2,
		},
		targetDirection: "bottom",
		align: "right",
		title: (0, Localize)("#GuidedTour_SDCard_Title"),
		description: (0, Localize)("#GuidedTour_SDCard_Description"),
		icon: n.createElement(d.SdCard, {
			className: l.Icon,
		}),
	});
}
const x = {
	bottom: "column",
	top: "column",
	left: "row",
	right: "row",
};
const U = {
	left: "flex-start",
	right: "flex-end",
};
function W(e) {
	const {
		icon: t,
		title: r,
		description: i,
		position: a,
		targetDirection: s,
		align: o,
	} = e;
	const c = Object.keys(a).reduce(
		(e, t) => ({
			...e,
			[t]: `${a[t]}px`,
		}),
		{},
	);
	const m = s === "bottom" || s === "right";
	c.flexDirection = x[s];
	c.alignItems = o ? U[o] : undefined;
	c.textAlign = o;
	const u = n.createElement(b.kP, null);
	const d = n.createElement(
		"div",
		{
			className: l.TourStopTextContainer,
			style: {
				alignItems: c.alignItems,
			},
		},
		n.createElement(
			"div",
			{
				className: l.Title,
			},
			r,
		),
		n.createElement(
			"div",
			{
				className: l.Description,
			},
			n.createElement(D, null, i),
		),
	);
	const A = m
		? n.createElement(n.Fragment, null, d, t, u)
		: n.createElement(n.Fragment, null, u, t, d);
	return n.createElement(
		"div",
		{
			style: c,
			className: l.TourStopContent,
		},
		A,
	);
}
function V(e) {
	const { count: t, activePage: r } = e;
	const i = [];
	for (let e = 0; e < t; e++) {
		i.push(
			n.createElement(H, {
				key: e,
				active: r === e,
			}),
		);
	}
	return n.createElement(
		"div",
		{
			className: l.PageIndicators,
		},
		i,
	);
}
function H(e) {
	return n.createElement("div", {
		className: (0, o.A)(l.PageIndicator, e.active && l.Active),
	});
}
