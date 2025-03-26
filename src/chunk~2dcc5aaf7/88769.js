var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./35488.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require(/*webcrack:missing*/ "./72476.js");
var o = require("./24496.js");
export function Cj(e) {
	const t = (0, o.V)(e?.strDriveName);
	if (!e) {
		return null;
	}
	let r = e.strUserLabel;
	if (e.strUserLabel.length > 0) {
		r = e.strUserLabel;
		if (e.strDriveName.length > 1 && e.strDriveName.length < 4) {
			r += " (" + e.strDriveName + ")";
		}
	} else {
		const n = t?.path;
		r =
			s.TS.ON_DECK && e.nFolderIndex == 0
				? Localize("#ContentManagement_InternalStorage")
				: (s.TS.ON_DECK && n != null && n.includes("mmcblk")) ||
					  e.strDriveName.startsWith("/run/media/mmcblk")
					? Localize("#ContentManagement_ExternalMicroSD")
					: e.strDriveName.length < 4
						? e.bIsFixed
							? Localize("#ContentManagement_FixedDrive") +
								" (" +
								e.strDriveName +
								")"
							: Localize("#ContentManagement_RemovableDrive") +
								" (" +
								e.strDriveName +
								")"
						: e.strDriveName;
	}
	return r;
}
export function Gc(e) {
	const { folder: t } = e;
	const r = Cj(t);
	return n.createElement(n.Fragment, null, r);
}
export function EE(e) {
	const { folder: t, bProcessing: r } = e;
	if (r) {
		return n.createElement(i.Spinner, null);
	} else if (t.bIsFixed) {
		return n.createElement(i.HardDrive, null);
	} else {
		return n.createElement(i.SdCard, null);
	}
}
