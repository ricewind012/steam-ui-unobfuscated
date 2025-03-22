var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./46108.js");
var a = require("./13869.js");
var s = require("./10606.js");
export function $(e) {
	(0, a.pg)(
		n.createElement(s.o0, {
			strTitle: e.strTitle || (0, i.we)("#Settings_RestartRequired_Title"),
			strDescription:
				e.strDescription || (0, i.we)("#Settings_RestartRequired_Description"),
			strOKButtonText:
				e.strOKButtonText || (0, i.we)("#Settings_RestartNow_ButtonText"),
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
