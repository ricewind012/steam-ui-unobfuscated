var n = require("./52192.js");
var i = require("./98385.js");
var a = require("./22091.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./43014.js");
var c = require("./13743.js");
var m = require(/*webcrack:missing*/ "./90765.js");
var u = require("./46422.js");
var d = require("./35552.js");
var A = d;
export const W = (0, s.PA)((e) => {
	const { button: t, bKnockout: r, ...i } = e;
	let s = r;
	let m = u.oy.ActiveControllerIndex;
	if (m < 0 && a.Fd.Get().GetControllers()?.length > 0) {
		m = a.Fd.Get().GetControllers()[0].nControllerIndex;
	}
	const d = u.oy.MostRecentlyActiveController;
	const A = a.Fd.Get().GetControllers();
	let [p, g] = o.useState(4);
	o.useEffect(() => {
		g(A.find((e) => e.nControllerIndex == m)?.eControllerType);
	}, [m, A]);
	let h = p ?? 4;
	if (d?.bNintendoLayout && p != 39 && p != 40) {
		h = 38;
	} else if (p == 47) {
		h = 34;
	}
	if (t == l.g4.HomeMenu) {
		let e = "";
		switch (h) {
			case 33:
			case 34:
			case 45:
			case 48:
				e = "/steaminputglyphs/ps4_button_logo.svg";
				break;
			case 2:
			case 3:
			case 43:
			case 49:
				e = "/steaminputglyphs/sc_button_steam.svg";
				break;
			case 38:
			case 42:
			case 39:
			case 40:
			case 41:
				e = "/steaminputglyphs/switchpro_button_home.svg";
				break;
			case 4:
				return o.createElement(c.$m, {
					button: t,
					size: c.xY.Small,
				});
			default:
				e = "/steaminputglyphs/xbox_button_logo.svg";
		}
		return o.createElement("img", {
			src: (0, n.Uq)(e),
			...i,
		});
	}
	if (r) {
		switch (t) {
			case l.g4.A:
			case l.g4.B:
			case l.g4.X:
			case l.g4.Y:
				s = (!!r && p == 34) || undefined;
				break;
			default:
				s = undefined;
		}
	}
	let C = d?.bUseReversedLayout;
	let _ = t;
	if (C) {
		switch (t) {
			case l.g4.A:
				_ = l.g4.B;
				break;
			case l.g4.B:
				_ = l.g4.A;
				break;
			case l.g4.X:
				_ = l.g4.Y;
				break;
			case l.g4.Y:
				_ = l.g4.X;
		}
	}
	const f = (function (e) {
		switch (e) {
			default:
			case l.g4.A:
				return {
					eControllerModeInput: 12,
					eControllerSource: 4,
				};
			case l.g4.B:
				return {
					eControllerModeInput: 10,
					eControllerSource: 4,
				};
			case l.g4.X:
				return {
					eControllerModeInput: 11,
					eControllerSource: 4,
				};
			case l.g4.Y:
				return {
					eControllerModeInput: 9,
					eControllerSource: 4,
				};
			case l.g4.Select:
				return {
					eControllerModeInput: 51,
					eControllerSource: 5,
				};
			case l.g4.Start:
				return {
					eControllerModeInput: 52,
					eControllerSource: 5,
				};
			case l.g4.LeftBumper:
				return {
					eControllerModeInput: 53,
					eControllerSource: 5,
				};
			case l.g4.RightBumper:
				return {
					eControllerModeInput: 54,
					eControllerSource: 5,
				};
			case l.g4.LeftTrigger:
				return {
					eControllerModeInput: 13,
					eControllerSource: 6,
				};
			case l.g4.RightTrigger:
				return {
					eControllerModeInput: 13,
					eControllerSource: 7,
				};
			case l.g4.LeftStick:
				return {
					eControllerModeInput: 0,
					eControllerSource: 3,
				};
			case l.g4.LeftStickClick:
				return {
					eControllerModeInput: 13,
					eControllerSource: 3,
				};
			case l.g4.Up:
				return {
					eControllerModeInput: 1,
					eControllerSource: 3,
				};
			case l.g4.Down:
				return {
					eControllerModeInput: 5,
					eControllerSource: 3,
				};
			case l.g4.Left:
				return {
					eControllerModeInput: 7,
					eControllerSource: 3,
				};
			case l.g4.Right:
				return {
					eControllerModeInput: 3,
					eControllerSource: 3,
				};
			case l.g4.RightStick:
				return {
					eControllerModeInput: 0,
					eControllerSource: 12,
				};
			case l.g4.RightStickClick:
				return {
					eControllerModeInput: 13,
					eControllerSource: 12,
				};
			case l.g4.LeftTrackpad:
				return {
					eControllerModeInput: 0,
					eControllerSource: 1,
				};
			case l.g4.LeftTrackpadClick:
				return {
					eControllerModeInput: 13,
					eControllerSource: 1,
				};
			case l.g4.RightTrackpad:
				return {
					eControllerModeInput: 0,
					eControllerSource: 2,
				};
			case l.g4.RightTrackpadClick:
				return {
					eControllerModeInput: 13,
					eControllerSource: 2,
				};
			case l.g4.RearLeftUpper:
				return {
					eControllerModeInput: 57,
					eControllerSource: 5,
				};
			case l.g4.RearLeftLower:
				return {
					eControllerModeInput: 55,
					eControllerSource: 5,
				};
			case l.g4.RearRightUpper:
				return {
					eControllerModeInput: 58,
					eControllerSource: 5,
				};
			case l.g4.RearRightLower:
				return {
					eControllerModeInput: 56,
					eControllerSource: 5,
				};
		}
	})(_);
	return o.createElement(n.UT, {
		controllerType: h,
		controllerSource: f.eControllerSource,
		controllerModeInput: f.eControllerModeInput,
		knockout: s,
		...i,
	});
});
export const X = (0, s.PA)((e) => {
	const { button: t, ...r } = e;
	const n = (0, i.w)(t);
	const s = o.useCallback(
		(e) => {
			u.oy.NavigationManager.DispatchVirtualButtonClick((0, l.ck)(t));
			e.preventDefault();
			e.stopPropagation();
		},
		[t],
	);
	const d = a.Fd.Get().GetControllers();
	let g = u.oy.ActiveControllerIndex;
	if (g < 0 && a.Fd.Get().GetControllers()?.length > 0) {
		g = a.Fd.Get().GetControllers()[0].nControllerIndex;
	}
	let [h, C] = o.useState(4);
	o.useEffect(() => {
		C(d.find((e) => e.nControllerIndex == g)?.eControllerType ?? 4);
	}, [g, d]);
	const _ = h != 4 || (t != l.g4.HomeMenu && t != l.g4.QuickMenu);
	if (n) {
		return o.createElement(
			"div",
			{
				className: (0, m.A)(A.ActionButtonLegend),
				onClick: s,
				onTouchEnd: s,
				...r,
			},
			o.createElement(
				"div",
				{
					className: A.ActionButtonGlyph,
				},
				_
					? o.createElement(W, {
							button: t,
							className: A.FooterGlyphSize,
						})
					: o.createElement(c.$m, {
							button: t,
							type: c.wt.Light,
						}),
			),
			o.createElement(
				"div",
				{
					className: A.ActionButtonLabel,
				},
				n,
			),
		);
	} else {
		return null;
	}
});
