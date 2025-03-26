var n = require(/*webcrack:missing*/ "./90095.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./45328.js");
var s = require("./83591.js");
var o = require("./82594.js");
var l = require("./47628.js");
var c = l;
var m = require("./76565.js");
var u = m;
var d = require("./4816.js");
var A = require("./10606.js");
var p = require("./13869.js");
var g = require(/*webcrack:missing*/ "./50376.js");
var h = require(/*webcrack:missing*/ "./92059.js");
var C = require("./12911.js");
var _2 = require("./16154.js");
var f = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var y = require(/*webcrack:missing*/ "./72476.js");
var S = require(/*webcrack:missing*/ "./98995.js");
function w(e) {
	(0, p.pg)(
		i.createElement(
			A.KG,
			{
				strTitle: Localize("#Wishlist_Error"),
				strDescription: Localize("#Wishlist_Error_Desc"),
			},
			i.createElement("br", null),
			i.createElement("br", null),
			e,
		),
		window,
	);
}
export function _(e) {
	const [t, r] = i.useState(false);
	const [o, l] = i.useState(!s.Fm.Get().BIsLoaded());
	const m = (0, h.n9)();
	const { appid: A, bIsFree: p, bIsComingSoon: B, className: I } = e;
	const [E, M] = (0, n.q3)(() => [
		s.Fm.Get().BIsGameWishlisted(A),
		s.Fm.Get().BOwnsApp(A),
	]);
	i.useEffect(() => {
		(async () => {
			await s.Fm.Get().HintLoad();
			l(false);
		})();
	}, []);
	if (M || (!B && p)) {
		if (p) {
			return i.createElement(v, {
				possibleDemoAppID: A,
			});
		} else {
			return null;
		}
	} else {
		return i.createElement(
			S.he,
			{
				toolTipContent: Localize("#AddToWishlist_ttip"),
			},
			i.createElement(
				"div",
				{
					className: (0, f.A)(c.WishList, u.FlexRowContainer, I),
					onClick: async () => {
						if (y.iA.logged_in) {
							if (!t) {
								r(true);
								const e = !E;
								try {
									const t = await s.Fm.Get().UpdateGameWishlist(
										A,
										e,
										(0, a.L3)(m),
									);
									r(false);
									if (t.success != 1) {
										w((0, _2.H)(t).strErrorMsg);
									}
								} catch (e) {
									r(false);
									w((0, _2.H)(e).strErrorMsg);
								}
							}
						} else {
							(0, d.vg)();
						}
					},
				},
				(o || t) &&
					i.createElement(C.k, {
						size: 18,
					}),
				!t && E && i.createElement(g.qnF, null),
				!t && !E && i.createElement(g.T4m, null),
			),
		);
	}
}
function v(e) {
	const { possibleDemoAppID: t, className: r } = e;
	const [n] = (0, o.t7)(t, {});
	if (
		(n?.GetAppType() == 1 || n?.GetAppType() == 12) &&
		n?.GetParentAppID() > 0
	) {
		return i.createElement(I, {
			parentAppID: n?.GetParentAppID(),
			className: r,
		});
	} else {
		return null;
	}
}
function I(e) {
	const { parentAppID: t, className: r } = e;
	const [n] = (0, o.t7)(t, {
		include_release: true,
	});
	if (n) {
		return i.createElement(_, {
			appid: t,
			bIsComingSoon: n.BIsComingSoon(),
			bIsFree: n.BIsFree(),
			className: r,
		});
	} else {
		return null;
	}
}
