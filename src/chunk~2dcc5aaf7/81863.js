var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./23379.js");
var a = i;
var s = require(/*webcrack:missing*/ "./41230.js");
import {
	LocalizeReact,
	Localize,
} from "../../actual_src/utils/localization.js";
var l = require("./91486.js");
var c = require("./52470.js");
var m = require("./87935.js");
var u = require("./82594.js");
var d = require("./5859.js");
var A = require("./85965.js");
export const P = (0, s.PA)((e) => {
	let { overview: t, details: r } = e;
	const [i] = (0, u.t7)(t.appid, d.A.k_DataRequest_Assets);
	if (!r.unTimedTrialSecondsAllowed) {
		return null;
	}
	if (r.unTimedTrialSecondsAllowed > r.unTimedTrialSecondsPlayed) {
		return null;
	}
	if (!i) {
		return null;
	}
	let s;
	if (r.unMasterSubAppID) {
		let e = m.B7.GetStoreURL() + "app/" + r.unMasterSubAppID;
		let i = n.createElement(
			"a",
			{
				className: a.MasterSubLink,
				href: e,
			},
			r.strMasterSubAppName,
		);
		s = LocalizeReact(
			"#TimedTrial_SpotlightExp_DescMasterSub",
			t.display_name,
			i,
		);
	} else {
		s = LocalizeReact("#TimedTrial_SpotlightExp_Desc", t.display_name);
	}
	const p = [i.GetAssets().GetHeaderURL(), A.A];
	return n.createElement(
		"div",
		{
			className: a.TimedTrialBannerWrapper,
		},
		n.createElement(
			"div",
			{
				className: a.TimedTrialBanner,
			},
			n.createElement(
				"div",
				{
					className: a.LeftColumn,
				},
				n.createElement(l.z, {
					className: a.HeaderArt,
					eAssetType: 3,
					appid: t.appid,
					rgSources: p,
				}),
			),
			n.createElement(
				"div",
				{
					className: a.RightColumn,
				},
				n.createElement(
					"div",
					{
						className: a.Header,
					},
					(0, Localize)("#TimedTrial_ContinuePlaying"),
				),
				n.createElement(
					"div",
					{
						className: a.Description,
					},
					s,
				),
				n.createElement(c.aX, {
					className: a.StoreButton,
					label: (0, Localize)("#Demo_VisitStorePage"),
					link: "StoreAppPage",
					appid: t.appid,
				}),
			),
		),
	);
});
