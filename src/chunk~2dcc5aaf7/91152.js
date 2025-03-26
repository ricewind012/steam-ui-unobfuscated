var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./1965.js");
var a = require("./64608.js");
import { Localize } from "../../actual_src/utils/localization.js";
var o = require("./79390.js");
var l = o;
var c = require("./18057.js");
export const t = () => {
	const e = (0, c.Qt)("steam://open/goonline");
	return n.createElement(
		i.n,
		{
			className: l.OfflineSection,
			availableOffline: true,
		},
		n.createElement(
			i.n.Body,
			{
				className: l.OfflineSectionBody,
			},
			(0, Localize)("#AppDetails_InOfflineMode"),
			n.createElement(
				a.jn,
				{
					className: l.OfflineButton,
					onClick: e,
				},
				(0, Localize)("#AppDetails_GoOnline"),
			),
		),
	);
};
