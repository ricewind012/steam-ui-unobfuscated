import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import { A as A_1 } from "./90765.js";
import s from "./10191.js";
import l from "./35488.js";
import c, { PA } from "./41230.js";
import { q3 } from "./90095.js";
import u from "./1965.js";
import { zX } from "./28346.js";
import A from "./22091.js";
import p from "./45967.js";
import { $c } from "./52192.js";
import h, { st } from "./85360.js";
import { Qn } from "./72476.js";
import _, { T } from "./78057.js";
const o = s;
export function jt(e) {
	const { overview } = e;
	if (
		T(overview.appid).bGamepadRequired &&
		overview.xbox_controller_support >= 1
	) {
		return <B />;
	} else if (overview.vr_only) {
		return <Y />;
	} else {
		return null;
	}
}
function B(e) {
	return (
		<div className={A_1(o.PurchaseNoticeContainer)}>
			<div className={A_1(o.PurchaseNoticeImageContainer)}>
				<l.Controller
					type="xbox"
					className={A_1(o.PurchaseNoticeImage, o.Tilt)}
				/>
			</div>
			<div className={A_1(o.PurchaseNoticeLabel)}>
				{Localize("#AppDetails_Controller_ControllerRequired")}
			</div>
		</div>
	);
}
function Y(e) {
	return (
		<div className={A_1(o.PurchaseNoticeContainer)}>
			<div className={A_1(o.PurchaseNoticeImageContainer)}>
				<l.VROnlyIcon className={A_1(o.PurchaseNoticeImage, o.VROnly)} />
			</div>
			<div className={A_1(o.PurchaseNoticeLabel)}>
				{Localize("#AppDetails_Controller_VRRequired")}
			</div>
		</div>
	);
}
export const Ve = PA((e) => {
	const { details, overview } = e;
	const s = Qn();
	const c = q3(() => A.Fd.Get().GetControllers());
	const _ = q3(() => A.Fd.Get().GetControllers()?.length > 0);
	const [f] = c;
	const b = st(overview.appid, f?.nControllerIndex);
	if (
		!details?.bStorePagePublished ||
		overview.BIsModOrShortcut() ||
		overview.BIsModOrShortcut() ||
		overview.BIsApplicationOrTool() ||
		overview.BIsModOrShortcut() ||
		overview.BIsApplicationOrTool() ||
		s
	) {
		return null;
	}
	if (!_ && !p.qL?.HasVRHMDBeenSeen()) {
		return null;
	}
	const y = overview?.BHasStoreCategory(59);
	const S =
		y ||
		(overview.ps4_controller_support >= 1 && !f?.bBluetooth) ||
		(overview.ps4_controller_support == 2 && f.bBluetooth);
	const w =
		y ||
		(overview.ps5_controller_support >= 1 && !f?.bBluetooth) ||
		(overview.ps5_controller_support == 2 && f.bBluetooth);
	let B = false;
	let v = false;
	const I = $c(f?.eControllerType);
	switch (I) {
		case 32: {
			B = overview.xbox_controller_support >= 1;
			break;
		}
		case 34: {
			B = S;
			break;
		}
		case 45: {
			B = w;
			break;
		}
		case 30:
		case 33:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42: {
			v = true;
		}
	}
	let E;
	switch (I) {
		case 32: {
			E = "#AppDetailsControllerSection_Title_Supported_Xbox";
			break;
		}
		case 34: {
			E = "#AppDetailsControllerSection_Title_Supported_DualShock";
			break;
		}
		case 45: {
			E = "#AppDetailsControllerSection_Title_Supported_Dualsense";
			break;
		}
		default: {
			E = "#AppDetailsControllerSection_Title_Supported_Generic";
		}
	}
	let M = overview.xbox_controller_support == 1;
	let T = !overview.xbox_controller_support;
	const R = overview.vr_supported || overview.vr_only;
	let k;
	if (T) {
		k = [
			"#AppDetailsControllerSection_Title_Unsupported",
			"#AppDetailsControllerSection_NoSupport",
		];
	} else if (details?.bControllerSurveyFilledOut || I == 32) {
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
		} else if (T || B || B || v) {
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
	return (
		<u.n
			className={o.ControllerSection}
			primaryAction={{
				action: () => {
					SteamClient.Apps.ShowControllerConfigurator(overview.appid);
					if (s) {
						h.v3.ClearEditingConfiguration();
					}
				},
				label: Localize("#AppControllerConfiguration_Link"),
			}}
			label={Localize(
				zX(overview, 3)
					? "#AppDetails_SectionTitle_Hardware"
					: "#AppDetails_SectionTitle_Controller",
			)}
			rightColumnSection
			availableOffline
		>
			<u.n.Body>
				{T && !v && <div className={o.Stroke} />}
				<div className={o.ControllerSectionBody}>
					<div className={o.ControllerSectionRow}>
						<l.ControllerType
							className={A_1(o.ControllerStatusSVG, v && o.Unknown)}
							controllerType={f?.eControllerType ?? 32}
							partial={M}
						/>
						<div className={o.ControllerSectionColumn}>
							<div className={o.ControllerSupportSectionHeader}>
								{Localize(k[0])}
							</div>
							<div className={o.ControllerSupportSectionDesc}>
								{Localize(k[1])}
							</div>
						</div>
					</div>
					{R && <div className={o.Separator} />}
					{R && (
						<div className={o.ControllerSectionRow}>
							{overview.vr_only ? (
								<l.VROnlyIcon className={o.ControllerStatusSVG} />
							) : (
								<l.VRSupportedIcon className={o.ControllerStatusSVG} />
							)}
							<div className={o.ControllerSectionColumn}>
								<div className={o.ControllerSupportSectionHeader}>
									{Localize(
										overview.vr_only
											? "#AppDetailsControllerSection_Title_VR_Only"
											: "#AppDetailsControllerSection_Title_VR_Supported",
									)}
								</div>
								<div className={o.ControllerSupportSectionDesc}>
									{Localize(
										overview.vr_only
											? "#AppDetailsControllerSection_VR_Only"
											: "#AppDetailsControllerSection_VR_Supported",
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</u.n.Body>
		</u.n>
	);
});
