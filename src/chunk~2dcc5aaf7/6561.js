var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./50376.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./52922.js");
var _o = require("./10606.js");
var l = require("./20555.js");
var c = l;
function m(e) {
	const { closeModal: t, rgImageURL: r } = e;
	const [i, a] = n.useState(0);
	const s = n.useCallback(() => {
		a(i == 0 ? r.length - 1 : i - 1);
	}, [i, r.length]);
	const l = n.useCallback(() => {
		if (i + 1 >= r.length) {
			a(0);
		} else {
			a(i + 1);
		}
	}, [i, r.length]);
	return n.createElement(
		_o.eV,
		{
			bAllowFullSize: true,
			bOKDisabled: true,
			closeModal: t,
			bHideCloseIcon: true,
			modalClassName: c.PopupScreenshotModal,
		},
		n.createElement(u, {
			index: i,
			numElements: r.length,
			fnForward: l,
			fnBackwards: s,
			fnClose: t,
			bCircular: true,
		}),
		n.createElement(
			"div",
			{
				className: c.PopupScreenshotContainer,
			},
			n.createElement("img", {
				className: c.PopupScreenshot,
				src: r[i],
			}),
		),
	);
}
function u(e) {
	const {
		index: t,
		numElements: r,
		fnForward: o,
		fnBackwards: l,
		fnClose: m,
		bCircular: u,
	} = e;
	(0, s.E)("ArrowLeft", l);
	(0, s.E)("Left", l);
	(0, s.E)("ArrowRight", o);
	(0, s.E)("Right", o);
	(0, s.E)("Escape", () => m && m());
	(0, s.E)("Esc", () => m && m());
	let d = r > 1;
	return n.createElement(
		"div",
		{
			className: c.ButtonCtn,
		},
		d &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					"div",
					{
						className: (0, a.A)(c.ButtonIcon, t !== 0 || u ? null : c.Disabled),
						onClick: l,
					},
					n.createElement(i.V5W, {
						angle: 270,
					}),
				),
				n.createElement(
					"div",
					{
						className: (0, a.A)(
							c.ButtonIcon,
							t !== r - 1 || u ? null : c.Disabled,
						),
						onClick: o,
					},
					n.createElement(i.V5W, {
						angle: 90,
					}),
				),
			),
		n.createElement(
			"div",
			{
				className: c.ButtonIcon,
				onClick: m,
			},
			n.createElement(i.X, null),
		),
	);
}
var d = require("./38837.js");
var A = require("./92076.js");
const p = 1.3;
const g = 3;
const h = 256;
export function o(e) {
	const [t, r] = (0, n.useState)(false);
	const [s, l] = (0, n.useState)({
		naturalWidth: 0,
		naturalHeight: 0,
		displayWidth: 0,
		displayHeight: 0,
	});
	const c = (0, n.useRef)();
	const [u, C] = (function () {
		const [e, t] = n.useState(undefined);
		const r = n.useCallback(() => t(undefined), []);
		const i = n.createElement(
			_o.EN,
			{
				active: e !== undefined,
			},
			n.createElement(m, {
				closeModal: r,
				rgImageURL: e,
			}),
		);
		return [t, i];
	})();
	(0, n.useEffect)(() => {
		if (
			s.naturalWidth > s.displayWidth * p &&
			s.naturalHeight > s.displayHeight * p &&
			s.naturalWidth > h
		) {
			if (s.naturalWidth / s.naturalHeight < g) {
				r(true);
			}
		}
	}, [s]);
	if (t) {
		return n.createElement(
			"span",
			{
				className: A.PreviewCtn,
			},
			C,
			n.createElement(
				"span",
				{
					className: A.SVG,
				},
				n.createElement(i.YNO, null),
			),
			n.createElement("img", {
				...e,
				className: (0, a.A)({
					[e.className]: Boolean(e.className),
					[A.ExpandableHover]: true,
				}),
				onClick: (t) => u([e.src]),
			}),
		);
	} else {
		return n.createElement("img", {
			...e,
			ref: c,
			onLoad: (e) => {
				if (!e.currentTarget.closest("a") && !(0, d.c)()) {
					const {
						naturalWidth: t,
						naturalHeight: r,
						width: n,
						height: i,
					} = e.currentTarget;
					l({
						naturalWidth: t,
						naturalHeight: r,
						displayWidth: n,
						displayHeight: i,
					});
				}
			},
		});
	}
}
