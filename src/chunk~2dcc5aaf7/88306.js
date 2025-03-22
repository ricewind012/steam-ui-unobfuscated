var n = require(/*webcrack:missing*/ "./90095.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./76565.js");
var o = s;
var l = require("./82775.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./98670.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./24418.js");
var A = d;
var p = require(/*webcrack:missing*/ "./53807.js");
var g = require(/*webcrack:missing*/ "./98995.js");
var h = require("./82594.js");
var C = require(/*webcrack:missing*/ "./50376.js");
export function lS(e) {
	const { appid: t } = e;
	return i.createElement(
		"div",
		{
			className: A.AppSocialLinksCtn,
		},
		i.createElement(f, {
			appid: t,
		}),
	);
}
function f(e) {
	const { appid: t } = e;
	const [r] = (0, h.t7)(t, {
		include_basic_info: true,
		include_links: true,
	});
	if (!r) {
		return null;
	}
	const n = r.GetLinks();
	if (n && n.length != 0 && u.TS.IMG_URL) {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(
				"div",
				{
					className: (0, a.A)(o.EventEditorTextTitle, "EventEditorTextTitle"),
				},
				(0, c.we)("#EventDisplay_SocialTitle"),
			),
			i.createElement(
				"div",
				{
					className: A.AppSocialLinks,
				},
				n.map((e) =>
					e.url
						? i.createElement(b, {
								key: "app_social_link_" + t + "_" + e.link_type,
								social: e,
							})
						: i.createElement(y, {
								key: "app_social_text_" + t + "_" + e.link_type + "_" + e.text,
								social: e,
							}),
				),
			),
		);
	} else {
		return null;
	}
}
function b(e) {
	const { social: t } = e;
	return i.createElement(
		"a",
		{
			href: (0, p.NT)(t.url),
			target: u.TS.IN_CLIENT ? undefined : "_blank",
			rel: "noopener noreferrer",
		},
		i.createElement(
			g.he,
			{
				toolTipContent: t.url,
			},
			i.createElement(S, {
				social: t,
			}),
		),
	);
}
function y(e) {
	const { social: t } = e;
	return i.createElement(
		"div",
		{
			className: A.AppSocialLinkWithText,
		},
		i.createElement(
			g.he,
			{
				toolTipContent: t.text,
			},
			i.createElement(S, {
				social: t,
			}),
		),
		i.createElement(
			"div",
			{
				className: A.AppSocialText,
			},
			t.text,
		),
	);
}
function S(e) {
	const { social: t } = e;
	return i.createElement(w, {
		linkType: t.link_type,
		className: A.AppSocialLinkIcon,
	});
}
function w(e) {
	const { linkType: t, ...r } = e;
	switch (t) {
		case 1:
			return i.createElement(C.agV, {
				...r,
			});
		case 2:
			return i.createElement(C.ZnA, {
				...r,
			});
		case 3:
			return i.createElement(C.oy, {
				...r,
			});
		case 4:
			return i.createElement(C.ofN, {
				...r,
			});
		case 5:
			return i.createElement(C.Bki, {
				...r,
			});
		case 6:
		case 18:
			return i.createElement(C.$vK, {
				...r,
			});
		case 7:
			return i.createElement(C.OSJ, {
				...r,
			});
		case 8:
			return i.createElement(C.nm_, {
				...r,
			});
		case 9:
			return i.createElement(C.tIO, {
				...r,
			});
		case 10:
			return i.createElement(C.Vt2, {
				...r,
			});
		case 11:
			return i.createElement(C.Vgk, {
				...r,
			});
		case 12:
			return i.createElement(C.VSd, {
				...r,
			});
		case 13:
			return i.createElement(C.ccb, {
				...r,
			});
		case 14:
			return i.createElement(C.rNt, {
				...r,
			});
		case 15:
			return i.createElement(C.g$j, {
				...r,
			});
		case 16:
			return i.createElement(C.BQz, {
				...r,
			});
		case 17:
			return i.createElement(C.jdP, {
				...r,
			});
		case 19:
			return i.createElement(C.bKN, {
				...r,
			});
		case 20:
			return i.createElement(C.sDU, {
				...r,
			});
		case 21:
			return i.createElement(C.MbF, {
				...r,
			});
		case 22:
			return i.createElement(C.emH, {
				...r,
			});
		case 23:
		case 0:
			return "invalid social media type";
	}
}
export function OT(e) {
	const { event: t, dateRangeLayout: r = "horizontal" } = e;
	const [a, s, o] = (0, n.q3)(() => [
		t.GetStartTimeAndDateUnixSeconds(),
		t.GetEndTimeAndDateUnixSeconds(),
		t.type,
	]);
	const c = {};
	if (r == "vertical") {
		c.ShortDateRange = A.VerticalLocalDateAndTime;
	}
	return i.createElement(
		"div",
		{
			className: A.EventDetailTimeInfo,
		},
		i.createElement(l.u1, {
			startDateAndTime: a,
			endDateAndTime: s,
			bHideEndTime: !(0, m.JS)(o),
			stylesmodule: c,
		}),
	);
}
