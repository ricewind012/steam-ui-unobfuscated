var n = require("./18057.js");
var i = require("./50350.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./10975.js");
var o = require("./22047.js");
var l = require("./13869.js");
import { Localize } from "../../actual_src/utils/localization.js";
var m = require("./31319.js");
var u = require("./89748.js");
var d = require("./12491.js");
var A = require(/*webcrack:missing*/ "./90765.js");
var p = require(/*webcrack:missing*/ "./42318.js");
var g = require("./78110.js");
var h = require("./50876.js");
var C = require("./24287.js");
var _ = require("./67444.js");
var f = _;
var b = require("./44351.js");
var y = require("./12316.js");
var S = require(/*webcrack:missing*/ "./90242.js");
var w = require("./1470.js");
function B() {
	a.useEffect(() => {
		s.eZ.PlayNavSound(s.PN.ShowModal);
		return function () {
			s.eZ.PlayNavSound(s.PN.HideModal);
		};
	}, []);
}
export function wB() {
	B();
	let e = (0, h.r4)();
	let t = (0, u.qw)().BHasCurrentUser();
	(0, m.Xf)(t ? "show-icon" : "hidden", "Settings");
	return a.createElement(
		i.dj,
		null,
		a.createElement(o.q, {
			title: Localize("#Settings_Title"),
			pages: e,
		}),
	);
}
export function bB(e) {
	const {
		className: t,
		closeModal: r,
		initialRoute: i,
		hideTopBar: s,
		fnSetNavigateToPage: m,
	} = e;
	B();
	let u = (0, h.r4)();
	return a.createElement(
		l.x_,
		{
			onEscKeypress: r,
			hideTopBar: s,
		},
		a.createElement(
			n.Cc,
			{
				initialRoute: n.BV.Settings[i](),
			},
			false,
			a.createElement(
				d.hE,
				{
					closeModal: r,
				},
				a.createElement(o.q, {
					title: Localize("#Settings_Title"),
					pages: u,
					className: (0, A.A)(f.SettingsModal, t),
					fnSetNavigateToPage: m,
				}),
			),
		),
	);
}
export const er = (0, p.Nr)(function () {
	const [e, t] = (0, C.nT)();
	const [r, n] = a.useState();
	a.useEffect(() => {
		C.Ti.SetPopup(r);
	}, [r]);
	const i = a.useCallback(() => {
		t(false);
	}, [t]);
	if (e) {
		return a.createElement(
			g.w,
			{
				strTitle: Localize("#Settings_Title"),
				onDismiss: i,
				refPopup: n,
				popupWidth: 850,
				popupHeight: 722,
				minWidth: 850,
				minHeight: 722,
				resizable: true,
				modal: false,
				titleBarClassName: f.SettingsTitleBar,
			},
			a.createElement(bB, {
				initialRoute: C.Ti.sTargetPage,
				fnSetNavigateToPage: C.Ti.SetNavigateToPage,
				closeModal: i,
				className: f.DesktopPopup,
			}),
		);
	} else {
		return null;
	}
});
export function CS(e) {
	const { className: t } = e;
	return a.createElement(b.$n, {
		...e,
		className: (0, A.A)(f.SettingsDialogButton, t),
	});
}
export function WG(e) {
	const { className: t } = e;
	return a.createElement(y.xh, {
		...e,
		className: (0, A.A)(f.SettingsDialogButton, t),
	});
}
export function sh(e) {
	const { className: t, disableFade: r, ...n } = e;
	return a.createElement(b.nB, {
		...n,
		className: (0, A.A)(t, !r && f.SettingsDialogBodyFade),
	});
}
export function Pq(e) {
	return a.createElement(
		"div",
		{
			className: f.SettingsDialogBodyText,
		},
		e.children,
	);
}
export function Tv(e) {
	return a.createElement("div", {
		className: f.SettingsDialogDescriptionText,
		...e,
	});
}
export function tX(e) {
	return a.createElement(b.iK, {
		className: f.SettingsDialogSubHeader,
		...e,
	});
}
export function Oy(e) {
	return a.createElement(S.Ii, {
		...e,
		className: (0, A.A)(f.SettingsLink, e.className),
	});
}
export function oN(e) {
	return a.createElement(w.E, {
		as: WG,
		...e,
	});
}
