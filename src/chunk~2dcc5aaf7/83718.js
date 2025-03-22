var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./96680.js");
var o = require(/*webcrack:missing*/ "./11131.js");
var l = require(/*webcrack:missing*/ "./63439.js");
var c = require(/*webcrack:missing*/ "./42318.js");
var m = require(/*webcrack:missing*/ "./91435.js");
var u = require(/*webcrack:missing*/ "./27773.js");
var d = require(/*webcrack:missing*/ "./52451.js");
var A = require("./22176.js");
var p = A;
var g = require("./35488.js");
var h = require(/*webcrack:missing*/ "./98995.js");
var C = require("./19696.js");
var _ = require("./23600.js");
var f = require("./32411.js");
export const bj = n.createContext({
	width: undefined,
	height: undefined,
});
export function aS(e, t, r, i) {
	return n.useCallback(
		(n) => {
			let a = {
				width: e,
				height: t,
				minWidth: r,
				minHeight: i,
			};
			n.dimensions = a;
			n.minWidth = r;
			n.minHeight = i;
			return n;
		},
		[e, t, r, i],
	);
}
function S(e) {
	const {
		bPinned: t,
		bShowPinnedView: r,
		onTogglePin: i,
		onPinnedOpacity: s,
		bFlipped: o,
		onToggleFlip: l,
		extraTitleBarActions: c,
	} = e;
	return n.createElement(
		n.Fragment,
		null,
		i &&
			n.createElement(
				u.g,
				{
					className: (0, a.A)(p.PinWindowButton, t && p.Pinned),
					onClick: i,
				},
				n.createElement(
					h.he,
					{
						className: p.WindowButtonTooltip,
						toolTipContent: "#UserGameNotes_PinWindow",
						direction: "top",
					},
					n.createElement(g.Pin, null),
				),
			),
		i &&
			t &&
			!r &&
			n.createElement(
				u.g,
				{
					className: p.OpacityButton,
					onClick: s,
				},
				n.createElement(
					h.he,
					{
						className: p.WindowButtonTooltip,
						toolTipContent: "#UserGameNotes_WindowOpacity",
						direction: "top",
					},
					n.createElement(g.Opacity, null),
				),
			),
		l &&
			n.createElement(
				u.g,
				{
					className: (0, a.A)(p.FlipWindowButton, o && p.Flipped),
					onClick: l,
				},
				n.createElement(
					h.he,
					{
						className: p.WindowButtonTooltip,
						toolTipContent: "#UserGameNotes_FlipWindow",
						direction: "top",
					},
					n.createElement(g.Chevron, {
						className: (0, a.A)(o && p.Flipped),
					}),
				),
			),
		c,
	);
}
export const rG = (0, c.Nr)(function (e) {
	const {
		strName: t,
		strTitle: r,
		updateParamsBeforeShow: c,
		onMinimize: A,
		onMaximize: g,
		onClose: h,
		children: y,
		refPopup: w,
		bForceWindowFocused: B,
		bUseSavedDimensions: v,
		title: I,
		eCreationFlags: E,
		bFitToContent: M,
		className: T = "",
		titleBarClassName: R,
		refPinnedPopup: k,
		bPinned: D,
		bShowPinnedView: N,
		bFlipped: F,
		bShowMin: G,
		bShowMax: O,
		bHideResizeGrip: P,
		bHideWindowControls: L,
	} = e;
	const z = (0, s.$2)();
	const x = `OverlayPopup_${t}`;
	const U = (0, l.h3)(x);
	const W = v ? U : {};
	W.onClose = h;
	const V = v ? U?.onResize : null;
	const H = n.useCallback(
		(e, t) => {
			if (V) {
				V(e, t);
			}
			e.SteamClient.Window.GetWindowDimensions().then((t) => {
				if (e) {
					e.overlayPopupCachedDimensions = t;
				}
			});
		},
		[V],
	);
	W.onResize = H;
	const j = v ? U?.updateParamsBeforeShow : null;
	const q = n.useCallback(
		(e) => {
			if (j) {
				e = j(e);
			}
			return (e = c(e));
		},
		[c, j],
	);
	W.updateParamsBeforeShow = q;
	const Q = (t ? `${t}_` : "") + n.useId();
	const { popup: Z, element: Y } = (0, l.OJ)(
		Q,
		{
			title: r || "",
			html_class: "fullheight ModalDialogPopup " + T,
			body_class: "fullheight ModalDialogBody " + p.OverlayPopupBody,
			popup_class: "fullheight",
			replace_existing_popup: false,
			target_browser: z.params.browserInfo,
			eCreationFlags: E ?? o.Wf.Resizable,
			bPinned: D,
		},
		W,
	);
	const { width: K, height: X } = n.useContext(bj);
	n.useEffect(() => {
		Z?.SteamClient.Window.GetWindowDimensions().then((e) => {
			const r = e.x > K || e.y > X;
			if (Z && r) {
				console.warn(t, "fully offscreen, moving back to center");
				Z.SteamClient.Window.MoveTo(
					Math.ceil(Math.max(0, K / 2 - e.width / 2)),
					Math.ceil(Math.max(0, X / 2 - e.height / 2)),
				);
			}
		});
	}, [t, Z, K, X]);
	let J = (0, d.Ue)(w, k);
	n.useEffect(() => {
		(0, d.cZ)(J, Z);
		return () => (0, d.cZ)(J, null);
	}, [Z, J]);
	const $ = n.useCallback(
		(e) => {
			Z?.SteamClient.Window.ResizeTo(
				Math.ceil(e.borderBoxSize[0].inlineSize),
				Math.ceil(e.borderBoxSize[0].blockSize),
				true,
			);
		},
		[Z],
	);
	const ee = (0, d.wY)($);
	if (!Y) {
		return null;
	}
	const te = !M && !P;
	const re = n.createElement(S, {
		...e,
	});
	return i.createPortal(
		n.createElement(
			o.kc,
			{
				ownerWindow: Z,
			},
			n.createElement(
				_.w,
				{
					bForceWindowFocused: B,
				},
				n.createElement(
					"div",
					{
						className: (0, a.A)(
							p.OverlayPopup,
							"PopupFullWindow",
							te && p.Resizable,
							M && p.FitToContent,
							N && p.PinnedView,
							t,
							F && p.Flipped,
						),
						ref: M ? ee : undefined,
					},
					!L &&
						n.createElement(
							"div",
							{
								className: (0, a.A)(p.WindowControls, F && p.Flipped),
							},
							n.createElement(f.sl, null),
							n.createElement(
								u.c,
								{
									popup: Z,
									className: R,
									bForceWindowFocused: B,
									hideMin: !G,
									hideMax: !O,
									hideClose: !h || N,
									onMinimize: A,
									onMaximize: g,
									onClose: h,
									extraActions: re,
								},
								I,
							),
						),
					n.createElement(
						m.EO,
						{
							bCenterPopupsOnWindow: true,
							browserInfo: z.params.browserInfo,
						},
						y,
					),
				),
				te &&
					n.createElement(C.Z, {
						className: (0, a.A)(p.ResizeGrip, N && p.PinnedView),
						popup: Z,
					}),
			),
		),
		Y,
	);
});
