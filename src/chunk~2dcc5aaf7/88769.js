import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./35488.js";
import s from "./72476.js";
import { V } from "./24496.js";
export function Cj(e) {
	const t = V(e?.strDriveName);
	if (!e) {
		return null;
	}
	let e_strUserLabel = e.strUserLabel;
	if (e.strUserLabel.length > 0) {
		e_strUserLabel = e.strUserLabel;
		if (e.strDriveName.length > 1 && e.strDriveName.length < 4) {
			e_strUserLabel += ` (${e.strDriveName})`;
		}
	} else {
		const n = t?.path;
		e_strUserLabel =
			s.TS.ON_DECK && e.nFolderIndex == 0
				? Localize("#ContentManagement_InternalStorage")
				: (s.TS.ON_DECK && n != null && n.includes("mmcblk")) ||
					  e.strDriveName.startsWith("/run/media/mmcblk")
					? Localize("#ContentManagement_ExternalMicroSD")
					: e.strDriveName.length < 4
						? e.bIsFixed
							? `${Localize("#ContentManagement_FixedDrive")} (${e.strDriveName})`
							: `${Localize("#ContentManagement_RemovableDrive")} (${
									e.strDriveName
								})`
						: e.strDriveName;
	}
	return e_strUserLabel;
}
export function Gc(e) {
	const { folder } = e;
	const r = Cj(folder);
	return <>{r}</>;
}
export function EE(e) {
	const { folder, bProcessing } = e;
	if (bProcessing) {
		return <i.Spinner />;
	} else if (folder.bIsFixed) {
		return <i.HardDrive />;
	} else {
		return <i.SdCard />;
	}
}
