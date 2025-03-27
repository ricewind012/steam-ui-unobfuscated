import { Localize, PP } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./10606.js";
import s from "./72476.js";
export const g = (e) => {
	let t = `${s.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`;
	return (
		<i.o0
			strTitle={Localize("#Informational_Message")}
			onCancel={e.closeModal}
			onOK={e.closeModal}
			bAlertDialog
		>
			<div>
				{(0, PP)(
					e.strTokenOverride || "#User_LimitedAccount",
					<a href={t} target={s.TS.IN_CLIENT || "_blank"}>
						{Localize("#User_LimitedAccount_UrlInfo")}
					</a>,
				)}
			</div>
		</i.o0>
	);
};
