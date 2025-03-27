import n from "./63696.js";
import i from "./78325.js";
import a from "./85243.js";
import s from "./65265.js";
import l, { WR } from "./67686.js";
import c from "./93681.js";
import { $2 } from "./96680.js";
import u, { Xy } from "./22969.js";
import d from "./42318.js";
import A from "./11131.js";
import { PA } from "./41230.js";
import g from "./35425.js";
const o = s;
function h(e) {
	const { host } = e;
	const r = `${u.b7[host.m_eHostType]} (${host.m_unIndex + 1})`;
	const { popup, element } = WR(r, {
		browserType: a.W.EBrowserType_OpenVROverlay,
		eCreationFlags: 0,
		strVROverlayKey: host.overlayKey,
		title: `SteamVR - ${r}`,
		dimensions: {
			width: host.m_Params.unWidth,
			height: host.m_Params.unHeight,
			left: 0,
			top: 0,
		},
		replace_existing_popup: true,
		popup_class: o.PopupRoot,
	});
	n.useEffect(() => {
		if (popup && element) {
			host.m_Popup = popup;
			host.m_RootElement = element;
		}
		return () => {
			if (host.m_Popup === popup) {
				host.m_Popup = undefined;
			}
			if (host.m_RootElement === element) {
				host.m_RootElement = undefined;
			}
		};
	}, [popup, element, host]);
	return null;
}
export const z = PA((e) => {
	let t = [];
	const r = $2();
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
						key: `${e.m_eHostType}-${e.m_unIndex}`,
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
const _ = PA((e) => {
	const { tooltip } = e;
	const r = A.Of?.GetPopupForWindow(
		tooltip.m_Element?.ownerDocument?.defaultView,
	);
	const a = r?.params?.strVROverlayKey;
	let s = {
		parent_overlay_key: a,
		interactive: false,
		origin_on_parent: tooltip.m_CalculatedPositionOnParent,
		offset: tooltip.m_Params.offset,
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
	const { element } = Xy(u.b7.Tooltip, s);
	if (element) {
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
					tooltip.m_StrText,
				),
			),
			element,
		);
	} else {
		return null;
	}
});
export const ny = PA(() => {
	const e = $2();
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
const BContext = n.createContext({
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
export const Cb = () => n.useContext(BContext);
