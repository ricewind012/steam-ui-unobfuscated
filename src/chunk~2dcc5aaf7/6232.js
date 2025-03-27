import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import a, { pg } from "./13869.js";
import s from "./10606.js";
import o from "./28934.js";
import l from "./10294.js";
export function $(e, t, r, i) {
	pg(<o.g5 feature={r} blockReason={t} onUnlock={i} />, e);
}
const M = (e) => {
	const { blockReason, closeModal } = e;
	const a =
		blockReason == 4
			? Localize("#KioskMode_Dialog_Title")
			: Localize("#FamilyView_Dialog_Title");
	const o =
		blockReason == 4
			? Localize("#KioskMode_LockDialog_Description")
			: Localize("#FamilyView_LockDialog_Description");
	return (
		<s.o0
			strTitle={a}
			strDescription={o}
			onOK={() => {
				switch (blockReason) {
					case 2:
					case 1:
					default: {
						SteamClient.Parental.LockParentalLock();
						break;
					}
					case 4: {
						l.Ih.KioskModeLock();
					}
				}
				closeModal();
			}}
			onCancel={closeModal}
		/>
	);
};
export function S(e, t) {
	pg(<M blockReason={t} />, e);
}
