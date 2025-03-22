var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require(/*webcrack:missing*/ "./46108.js");
var s = require("./10191.js");
var o = s;
var l = require("./35488.js");
var c = require(/*webcrack:missing*/ "./41230.js");
var m = require(/*webcrack:missing*/ "./90095.js");
var u = require("./1965.js");
var d = require("./28346.js");
var A = require("./22091.js");
var p = require("./45967.js");
var g = require("./52192.js");
var h = require("./85360.js");
var C = require(/*webcrack:missing*/ "./72476.js");
var _ = require("./78057.js");
export function jt(e) {
	const { overview: t } = e;
	if ((0, _.T)(t.appid).bGamepadRequired && t.xbox_controller_support >= 1) {
		return n.createElement(b, null);
	} else if (t.vr_only) {
		return n.createElement(y, null);
	} else {
		return null;
	}
}
function b(e) {
	return n.createElement(
		"div",
		{
			className: (0, i.A)(o.PurchaseNoticeContainer),
		},
		n.createElement(
			"div",
			{
				className: (0, i.A)(o.PurchaseNoticeImageContainer),
			},
			n.createElement(l.Controller, {
				type: "xbox",
				className: (0, i.A)(o.PurchaseNoticeImage, o.Tilt),
			}),
		),
		n.createElement(
			"div",
			{
				className: (0, i.A)(o.PurchaseNoticeLabel),
			},
			(0, a.we)("#AppDetails_Controller_ControllerRequired"),
		),
	);
}
function y(e) {
	return n.createElement(
		"div",
		{
			className: (0, i.A)(o.PurchaseNoticeContainer),
		},
		n.createElement(
			"div",
			{
				className: (0, i.A)(o.PurchaseNoticeImageContainer),
			},
			n.createElement(l.VROnlyIcon, {
				className: (0, i.A)(o.PurchaseNoticeImage, o.VROnly),
			}),
		),
		n.createElement(
			"div",
			{
				className: (0, i.A)(o.PurchaseNoticeLabel),
			},
			(0, a.we)("#AppDetails_Controller_VRRequired"),
		),
	);
}
export const Ve = (0, c.PA)(function (e) {
	const { details: t, overview: r } = e;
	const s = (0, C.Qn)();
	const c = (0, m.q3)(() => A.Fd.Get().GetControllers());
	const _ = (0, m.q3)(() => A.Fd.Get().GetControllers()?.length > 0);
	const f = c[0];
	const b = (0, h.st)(r.appid, f?.nControllerIndex);
	if (
		!t?.bStorePagePublished ||
		r.BIsModOrShortcut() ||
		r.BIsApplicationOrTool() ||
		s
	) {
		return null;
	}
	if (!_ && !p.qL?.HasVRHMDBeenSeen()) {
		return null;
	}
	const y = r?.BHasStoreCategory(59);
	const S =
		y ||
		(r.ps4_controller_support >= 1 && !f?.bBluetooth) ||
		(r.ps4_controller_support == 2 && f.bBluetooth);
	const w =
		y ||
		(r.ps5_controller_support >= 1 && !f?.bBluetooth) ||
		(r.ps5_controller_support == 2 && f.bBluetooth);
	let B = false;
	let v = false;
	const I = (0, g.$c)(f?.eControllerType);
	switch (I) {
		case 32:
			B = r.xbox_controller_support >= 1;
			break;
		case 34:
			B = S;
			break;
		case 45:
			B = w;
			break;
		case 30:
		case 33:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
			v = true;
	}
	let E;
	switch (I) {
		case 32:
			E = "#AppDetailsControllerSection_Title_Supported_Xbox";
			break;
		case 34:
			E = "#AppDetailsControllerSection_Title_Supported_DualShock";
			break;
		case 45:
			E = "#AppDetailsControllerSection_Title_Supported_Dualsense";
			break;
		default:
			E = "#AppDetailsControllerSection_Title_Supported_Generic";
	}
	let M = r.xbox_controller_support == 1;
	let T = !r.xbox_controller_support;
	const R = r.vr_supported || r.vr_only;
	let k;
	if (T) {
		k = [
			"#AppDetailsControllerSection_Title_Unsupported",
			"#AppDetailsControllerSection_NoSupport",
		];
	} else if (t?.bControllerSurveyFilledOut || I == 32) {
		if (y || (B && !b?.bConfigurationEnabled && !M)) {
			k = [E, "#AppDetailsControllerSection_DevSupported"];
		} else if (b?.bConfigurationEnabled && B) {
			k = [
				"#AppDetailsControllerSection_Title_Playable",
				"#AppDetailsControllerSection_SteamInput",
			];
			M = true;
		} else if ((M && B) || b?.bConfigurationEnabled) {
			k = [
				"#AppDetailsControllerSection_Title_Playable",
				"#AppDetailsControllerSection_SteamInputTranslation",
			];
			M = true;
		} else if (T || B || v) {
			if (!T && v) {
				k = [
					"#AppDetailsControllerSection_Title_Unknown_NoSteamInput",
					"#AppDetailsControllerSection_UnknownSupportForDevice",
				];
				T = true;
			} else {
				k = [
					"#AppDetailsControllerSection_Title_Unsupported",
					"#AppDetailsControllerSection_NoSupport",
				];
			}
		} else {
			k = [
				"#AppDetailsControllerSection_Title_Unsupported_NoSteamInput",
				"#AppDetailsControllerSection_NoSupportForDevice",
			];
			T = true;
		}
	} else {
		k = [
			"#AppDetailsControllerSection_Title_Unknown",
			"#AppDetailsControllerSection_Unknown",
		];
		v = true;
	}
	return n.createElement(
		u.n,
		{
			className: o.ControllerSection,
			primaryAction: {
				action: () => {
					SteamClient.Apps.ShowControllerConfigurator(r.appid);
					if (s) {
						h.v3.ClearEditingConfiguration();
					}
				},
				label: (0, a.we)("#AppControllerConfiguration_Link"),
			},
			label: (0, a.we)(
				(0, d.zX)(r, 3)
					? "#AppDetails_SectionTitle_Hardware"
					: "#AppDetails_SectionTitle_Controller",
			),
			rightColumnSection: true,
			availableOffline: true,
		},
		n.createElement(
			u.n.Body,
			null,
			T &&
				!v &&
				n.createElement("div", {
					className: o.Stroke,
				}),
			n.createElement(
				"div",
				{
					className: o.ControllerSectionBody,
				},
				n.createElement(
					"div",
					{
						className: o.ControllerSectionRow,
					},
					n.createElement(l.ControllerType, {
						className: (0, i.A)(o.ControllerStatusSVG, v && o.Unknown),
						controllerType: f?.eControllerType ?? 32,
						partial: M,
					}),
					n.createElement(
						"div",
						{
							className: o.ControllerSectionColumn,
						},
						n.createElement(
							"div",
							{
								className: o.ControllerSupportSectionHeader,
							},
							(0, a.we)(k[0]),
						),
						n.createElement(
							"div",
							{
								className: o.ControllerSupportSectionDesc,
							},
							(0, a.we)(k[1]),
						),
					),
				),
				R &&
					n.createElement("div", {
						className: o.Separator,
					}),
				R &&
					n.createElement(
						"div",
						{
							className: o.ControllerSectionRow,
						},
						r.vr_only
							? n.createElement(l.VROnlyIcon, {
									className: o.ControllerStatusSVG,
								})
							: n.createElement(l.VRSupportedIcon, {
									className: o.ControllerStatusSVG,
								}),
						n.createElement(
							"div",
							{
								className: o.ControllerSectionColumn,
							},
							n.createElement(
								"div",
								{
									className: o.ControllerSupportSectionHeader,
								},
								(0, a.we)(
									r.vr_only
										? "#AppDetailsControllerSection_Title_VR_Only"
										: "#AppDetailsControllerSection_Title_VR_Supported",
								),
							),
							n.createElement(
								"div",
								{
									className: o.ControllerSupportSectionDesc,
								},
								(0, a.we)(
									r.vr_only
										? "#AppDetailsControllerSection_VR_Only"
										: "#AppDetailsControllerSection_VR_Supported",
								),
							),
						),
					),
			),
		),
	);
});
