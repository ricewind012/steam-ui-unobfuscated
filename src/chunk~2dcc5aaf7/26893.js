var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./85243.js");
var s = require("./65265.js");
var o = s;
var l = require("./67686.js");
var c = require("./93681.js");
var m = require("./96680.js");
var u = require("./22969.js");
var d = require(/*webcrack:missing*/ "./42318.js");
var A = require(/*webcrack:missing*/ "./11131.js");
var p = require(/*webcrack:missing*/ "./41230.js");
var g = require("./35425.js");
function h(e) {
	const { host: t } = e;
	const r = `${u.b7[t.m_eHostType]} (${t.m_unIndex + 1})`;
	const { popup: i, element: s } = (0, l.WR)(r, {
		browserType: a.W.EBrowserType_OpenVROverlay,
		eCreationFlags: 0,
		strVROverlayKey: t.overlayKey,
		title: "SteamVR - " + r,
		dimensions: {
			width: t.m_Params.unWidth,
			height: t.m_Params.unHeight,
			left: 0,
			top: 0,
		},
		replace_existing_popup: true,
		popup_class: o.PopupRoot,
	});
	n.useEffect(() => {
		if (i && s) {
			t.m_Popup = i;
			t.m_RootElement = s;
		}
		return () => {
			if (t.m_Popup === i) {
				t.m_Popup = undefined;
			}
			if (t.m_RootElement === s) {
				t.m_RootElement = undefined;
			}
		};
	}, [i, s, t]);
	return null;
}
export const z = (0, p.PA)(function (e) {
	let t = [];
	const r = (0, m.$2)();
	const i = r?.BIsGamepadApplicationUIInitialized();
	for (const e of Object.values(
		r?.VRPooledPopupStore?.m_mapPooledPopupHosts ?? {},
	)) {
		t = [...t, ...e];
	}
	if (i) {
		return n.createElement(
			n.Fragment,
			null,
			t.map((e) =>
				n.createElement(
					d.tH,
					{
						key: e.m_eHostType + "-" + e.m_unIndex,
					},
					n.createElement(h, {
						host: e,
					}),
				),
			),
		);
	} else {
		return null;
	}
});
const _ = (0, p.PA)(function (e) {
	const { tooltip: t } = e;
	const r = A.Of?.GetPopupForWindow(t.m_Element?.ownerDocument?.defaultView);
	const a = r?.params?.strVROverlayKey;
	let s = {
		parent_overlay_key: a,
		interactive: false,
		origin_on_parent: t.m_CalculatedPositionOnParent,
		offset: t.m_Params.offset,
		inherit_parent_curvature: false,
	};
	if (a == g.rn) {
		s = {
			...s,
			offset: {
				y_pixels: -30,
				z_pixels: 10,
			},
			origin_on_parent: {
				...s.origin_on_parent,
				y: -1,
			},
		};
	}
	const { element: l } = (0, u.Xy)(u.b7.Tooltip, s);
	if (l) {
		return i.createPortal(
			n.createElement(
				"div",
				{
					className: o.Tooltip,
				},
				n.createElement(
					c.r,
					{
						center: true,
						delay: 0.5,
					},
					t.m_StrText,
				),
			),
			l,
		);
	} else {
		return null;
	}
});
export const ny = (0, p.PA)(function () {
	const e = (0, m.$2)();
	const t = e?.BIsGamepadApplicationUIInitialized();
	const r = Array.from(e?.VRPooledPopupStore?.m_mapTooltips.entries() ?? []);
	if (t) {
		return n.createElement(
			n.Fragment,
			null,
			r.map(([e, t]) =>
				t.BDelayFinished()
					? n.createElement(
							d.tH,
							{
								key: e,
							},
							n.createElement(_, {
								tooltip: t,
							}),
						)
					: null,
			),
		);
	} else {
		return null;
	}
});
const b = n.createContext({
	unDelayMS: 0,
	normalizedPositionOnElement: {
		x: 0,
		y: 1,
	},
	offset: {
		y_pixels: 30,
		z_pixels: 15,
	},
});
export const Cb = () => n.useContext(b);
