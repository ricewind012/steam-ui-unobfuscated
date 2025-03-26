var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./10606.js");
import { Localize, PP } from "../../actual_src/utils/localization.js";
var s = require(/*webcrack:missing*/ "./72476.js");
export const g = (e) => {
	let t = s.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
	return n.createElement(
		i.o0,
		{
			strTitle: Localize("#Informational_Message"),
			onCancel: e.closeModal,
			onOK: e.closeModal,
			bAlertDialog: true,
		},
		n.createElement(
			"div",
			null,
			(0, PP)(
				e.strTokenOverride || "#User_LimitedAccount",
				n.createElement(
					"a",
					{
						href: t,
						target: s.TS.IN_CLIENT ? undefined : "_blank",
					},
					Localize("#User_LimitedAccount_UrlInfo"),
				),
			),
		),
	);
};
