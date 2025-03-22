var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./10606.js");
var a = require(/*webcrack:missing*/ "./46108.js");
var s = require(/*webcrack:missing*/ "./72476.js");
export const g = (e) => {
	let t = s.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
	return n.createElement(
		i.o0,
		{
			strTitle: (0, a.we)("#Informational_Message"),
			onCancel: e.closeModal,
			onOK: e.closeModal,
			bAlertDialog: true,
		},
		n.createElement(
			"div",
			null,
			(0, a.PP)(
				e.strTokenOverride || "#User_LimitedAccount",
				n.createElement(
					"a",
					{
						href: t,
						target: s.TS.IN_CLIENT ? undefined : "_blank",
					},
					(0, a.we)("#User_LimitedAccount_UrlInfo"),
				),
			),
		),
	);
};
