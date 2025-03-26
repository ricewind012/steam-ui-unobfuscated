var n = require(/*webcrack:missing*/ "./41230.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./57931.js");
var s = require("./83591.js");
var o = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./47628.js");
var m = c;
export const E = (0, n.PA)((e) => {
	const { appid: t, bIsMuted: r } = e;
	const n = s.Fm.Get().BOwnsApp(t);
	const c = (0, o.A)(
		m.CapsuleBottomBar,
		r && m.Muted,
		n ? m.PlayNowButton : m.AddToLibraryButton,
	);
	return i.createElement(
		"div",
		{
			onClick: (e) => {
				e.preventDefault();
				if (n) {
					(0, a.o)(t);
				} else {
					s.Fm.Get().AddLicenseForFreeGame(t);
				}
			},
			className: c,
		},
		Localize(n ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
	);
});
