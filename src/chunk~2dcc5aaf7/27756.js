var n = require(/*webcrack:missing*/ "./63696.js");
import { Localize } from "../../actual_src/utils/localization.js";
var a = require("./13869.js");
var s = require("./10606.js");
export function $(e) {
	(0, a.pg)(
		n.createElement(s.o0, {
			strTitle: e.strTitle || Localize("#Settings_RestartRequired_Title"),
			strDescription:
				e.strDescription || Localize("#Settings_RestartRequired_Description"),
			strOKButtonText:
				e.strOKButtonText || Localize("#Settings_RestartNow_ButtonText"),
			strCancelButtonText: e.strCancelButtonText,
			onOK: async () => {
				if (e.fnOnOK) {
					await e.fnOnOK();
				}
				if (e.bSystemRestart) {
					SteamClient.System.RestartPC();
				} else {
					SteamClient.User.StartRestart(false);
				}
			},
			onCancel: e.fnOnCancel,
		}),
		e.ownerWindow,
		{
			strTitle: e.strTitle,
			bForcePopOut: true,
		},
	);
}
