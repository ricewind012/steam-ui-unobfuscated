var _n = require("./49787.js");
var i = _n;
var a = require(/*webcrack:missing*/ "./44846.js");
var s = require(/*webcrack:missing*/ "./90242.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./37322.js");
var c = require(/*webcrack:missing*/ "./63696.js");
var m = require("./92008.js");
var u = require(/*webcrack:missing*/ "./45328.js");
var d = require(/*webcrack:missing*/ "./36885.js");
var A = require("./88341.js");
var p = require("./34091.js");
var g = require("./54573.js");
var h = require("./40772.js");
var C = require(/*webcrack:missing*/ "./50376.js");
var _ = require(/*webcrack:missing*/ "./98995.js");
var f = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var y = require(/*webcrack:missing*/ "./53807.js");
var S = require(/*webcrack:missing*/ "./43691.js");
var w = require(/*webcrack:missing*/ "./24546.js");
export const W4 = new Map([
	[
		"b",
		{
			Constructor: yN,
			autocloses: false,
		},
	],
	[
		"i",
		{
			Constructor: J2,
			autocloses: false,
		},
	],
	[
		"h1",
		{
			Constructor: Zb,
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"h2",
		{
			Constructor: Sz,
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"h3",
		{
			Constructor: ZS,
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"h4",
		{
			Constructor: function (e) {
				return N("h4", e, (0, f.A)(i.Header4, "BB_Header4"));
			},
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"h5",
		{
			Constructor: function (e) {
				return N("h5", e, (0, f.A)(i.Header5, "BB_Header5"));
			},
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"center",
		{
			Constructor: function (e) {
				let t = j$(e.args, "id");
				if (t && typeof t == "string" && t.length > 0 && t[0] === "#") {
					t = t.substring(1);
				}
				return c.createElement(
					"span",
					{
						id: t || undefined,
						className: (0, f.A)(i.CenterSpan, "BB_Center"),
					},
					e.children,
				);
			},
			autocloses: false,
		},
	],
	[
		"smalltext",
		{
			Constructor: function (e) {
				return N("div", e, (0, f.A)(i.SmallText, "BB_SmallText"));
			},
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"u",
		{
			Constructor: z2,
			autocloses: false,
		},
	],
	[
		"strike",
		{
			Constructor: n,
			autocloses: false,
		},
	],
	[
		"spoiler",
		{
			Constructor: dC,
			autocloses: false,
		},
	],
	[
		"hr",
		{
			Constructor: function (e) {
				return c.createElement("hr", {
					className: i.HR,
				});
			},
			autocloses: false,
		},
	],
	[
		"noparse",
		{
			Constructor: PT,
			autocloses: false,
		},
	],
	[
		"url",
		{
			Constructor: s0,
			autocloses: false,
		},
	],
	[
		"quote",
		{
			Constructor: Pk,
			autocloses: false,
		},
	],
	[
		"pullquote",
		{
			Constructor: function (e) {
				return c.createElement(
					"div",
					{
						className: i.PullQuote,
					},
					e.children,
				);
			},
			autocloses: false,
		},
	],
	[
		"code",
		{
			Constructor: function (e) {
				return c.createElement(
					"code",
					{
						className: i.CodeBlock,
					},
					e.children,
				);
			},
			autocloses: false,
		},
	],
	[
		"c",
		{
			Constructor: function (e) {
				return c.createElement(
					"code",
					{
						className: i.Code,
					},
					e.children,
				);
			},
			autocloses: false,
		},
	],
	[
		"list",
		{
			Constructor: B8,
			autocloses: false,
			skipInternalNewline: true,
		},
	],
	[
		"olist",
		{
			Constructor: _J,
			autocloses: false,
			skipInternalNewline: true,
		},
	],
	[
		"*",
		{
			Constructor: ck,
			autocloses: true,
			skipInternalNewline: true,
		},
	],
	[
		"table",
		{
			Constructor: function (e) {
				const t = j$(e.args, "noborder");
				const r = j$(e.args, "equalcells");
				const n = j$(e.args, "colwidth");
				return c.createElement(
					"table",
					{
						className: (0, f.A)(
							i.Table,
							"BB_Table",
							t && i.NoBorder,
							r && i.EqualCells,
						),
					},
					n &&
						c.createElement(
							"colgroup",
							null,
							n.split(",").map((e, t) =>
								c.createElement("col", {
									key: t,
									style: e
										? {
												width: `${e}px`,
											}
										: undefined,
								}),
							),
						),
					c.createElement("tbody", null, e.children),
				);
			},
			autocloses: false,
			skipInternalNewline: true,
		},
	],
	[
		"tr",
		{
			Constructor: function (e) {
				return c.createElement(
					"tr",
					{
						className: (0, f.A)(i.TableRow, "BB_TableRow"),
					},
					e.children,
				);
			},
			autocloses: false,
			skipInternalNewline: true,
			skipFollowingNewline: true,
		},
	],
	[
		"th",
		{
			Constructor: function (e) {
				return q("th", e);
			},
			autocloses: false,
			skipInternalNewline: true,
			skipFollowingNewline: true,
		},
	],
	[
		"td",
		{
			Constructor: function (e) {
				return q("td", e);
			},
			autocloses: false,
			skipInternalNewline: true,
			skipFollowingNewline: true,
		},
	],
	[
		"expand",
		{
			Constructor: function (e) {
				const t = Boolean(j$(e.args, "expanded"));
				const [r, n] = c.useState(t);
				const a = j$(e.args, "title");
				const s = j$(e.args, "collapsed_str");
				const o = j$(e.args, "expanded_str");
				const l = (function (e, t, r, n) {
					switch (e) {
						case "details":
							return {
								collapsed: "#Bbcode_Expand_Details_Collapsed",
								expanded: "#Bbcode_Expand_Details_Expanded",
								style: i.ExpandSection_Details,
							};
						case "spoiler":
							return {
								collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
								expanded: "#Bbcode_Expand_Spoiler_Expanded",
								style: i.ExpandSection_Spoiler,
							};
						case "title":
							return {
								collapsed: t || r || "#Bbcode_Expand_ShowMore_Collapsed",
								expanded: t || n || "#Bbcode_Expand_ShowMore_Expanded",
								style: i.ExpandSection_WithTitle,
							};
						default:
							return {
								collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
								expanded: "#Bbcode_Expand_ShowMore_Expanded",
								style: i.ExpandSection_ShowMore,
							};
					}
				})(j$(e.args, "type"), a, s, o);
				return c.createElement(
					"div",
					{
						className: (0, f.A)({
							[i.ExpandSectionBlock]: true,
							[l.style]: true,
							[i.ExpandSectionExpanded]: r,
							[i.ExpandSectionCollapsed]: !r,
							BBCodeExpanded: r,
							BBCodeCollapsed: !r,
						}),
					},
					c.createElement(
						"div",
						{
							className: i.ExpandSectionHeader,
							onClick: () => n(!r),
						},
						Localize(r ? l.expanded : l.collapsed),
						c.createElement(
							"div",
							{
								className: i.EmbedArrow,
							},
							c.createElement(C.DK4, {
								angle: r ? 180 : 0,
							}),
						),
					),
					r &&
						c.createElement(
							"div",
							{
								className: i.ExpandSectionBody,
							},
							e.children,
						),
				);
			},
			autocloses: false,
			skipInternalNewline: true,
			allowWrapTextForCopying: true,
		},
	],
	[
		"remindme",
		{
			Constructor: function (e) {
				const { event: t, showErrorInfo: r } = e.context;
				const n = j$(e.args);
				if (n) {
					return c.createElement(g.y, {
						eventGID: n,
						bPreviewMode: r,
					});
				}
				if (t) {
					const e = (0, a.sf)(S.TS.LANGUAGE);
					return c.createElement(g.j, {
						eventModel: t,
						lang: e,
					});
				}
				return null;
			},
			autocloses: false,
		},
	],
	[
		"calendarevent",
		{
			Constructor: function (e) {
				const t = j$(e.args, "title");
				const r = j$(e.args, "start") ?? j$(e.args, "datetime");
				const n = j$(e.args, "end") ?? j$(e.args, "datetime");
				const a = j$(e.args, "body") ?? null;
				const s = j$(e.args, "location") ?? null;
				const o = j$(e.args, "id") ?? "";
				const m = new Date(r);
				const u = m.getUTCFullYear();
				const d = ("0" + (m.getUTCMonth() + 1)).slice(-2);
				const A = ("0" + m.getUTCDate()).slice(-2);
				const p = ("0" + m.getUTCHours()).slice(-2);
				const g = ("0" + m.getUTCMinutes()).slice(-2);
				const h = `${u}${d}${A}T${p}${g}00Z`;
				const C = new Date(n);
				const _ = C.getUTCFullYear();
				const b = ("0" + (C.getUTCMonth() + 1)).slice(-2);
				const y = ("0" + C.getUTCDate()).slice(-2);
				const S = ("0" + C.getUTCHours()).slice(-2);
				const w = ("0" + C.getUTCMinutes()).slice(-2);
				const B = `${_}${b}${y}T${S}${w}00Z`;
				let v;
				try {
					let e = "BEGIN:VCALENDAR\r\n";
					e += "VERSION:2.0\r\n";
					e += "BEGIN:VEVENT\r\n";
					e += `DTSTART:${h}\r\n`;
					e += `DTEND:${B}\r\n`;
					e += `SUMMARY:${t.replace("\n", "\\n")}\r\n`;
					if (a) {
						e += `DESCRIPTION:${a.replace("\n", "\\n")}\r\n`;
					}
					if (s) {
						e += `LOCATION:${s.replace("\n", "\\n")}\r\n`;
					}
					e += "END:VEVENT\r\n";
					e += "END:VCALENDAR\r\n";
					v = `data:text/calendar;charset=utf-8;base64,${l.iI(new TextEncoder().encode(e))}`;
				} catch (e) {
					console.error(e);
				}
				let I = "https://calendar.google.com/calendar/render?action=TEMPLATE";
				I += `&text=${encodeURI(t)}`;
				I += `&details=${encodeURI(a)}`;
				I += `&dates=${encodeURI(h + "/" + B)}`;
				const M = (e) => {
					if ("ReactNativeWebView" in window) {
						const r = window.ReactNativeWebView;
						const n = {
							event_name: "addcalendarevent",
							tsStart: m.getTime(),
							tsEnd: C.getTime(),
							strTitle: t,
							strNotes: a,
							strLocation: s,
						};
						r.postMessage(JSON.stringify(n));
						e.preventDefault();
					}
				};
				return c.createElement(
					"div",
					{
						className: (0, f.A)(
							"SaleSectionCalendarEventContainer",
							i.CalendarEventContainer,
						),
						id: o,
					},
					v &&
						c.createElement(
							"a",
							{
								className: (0, f.A)(
									"SaleSectionCalendarEventLink",
									i.CalendarEventLink,
								),
								href: v,
								onClick: M,
								download: "steam_deck_white_release.ics",
							},
							"Apple",
						),
					c.createElement(
						"a",
						{
							className: (0, f.A)(
								"SaleSectionCalendarEventLink",
								i.CalendarEventLink,
							),
							href: I,
						},
						"Google",
					),
					v &&
						c.createElement(
							"a",
							{
								className: (0, f.A)(
									"SaleSectionCalendarEventLink",
									i.CalendarEventLink,
								),
								href: v,
								onClick: M,
								download: "steam_deck_white_release.ics",
							},
							"Outlook",
						),
				);
			},
			autocloses: true,
		},
	],
	[
		"doclink",
		{
			Constructor: function (e) {
				const t = j$(e.args);
				const r = j$(e.args, "style") == "button" ? i.LinkButton : null;
				return c.createElement(
					z,
					{
						className: r,
						href: `${S.TS.PARTNER_BASE_URL}doc/${t}`,
					},
					e.children,
				);
			},
			autocloses: false,
		},
	],
	[
		"color",
		{
			Constructor: function (e) {
				const t = j$(e.args);
				return c.createElement(
					"span",
					{
						style: {
							color: t,
						},
					},
					e.children,
				);
			},
			autocloses: false,
		},
	],
	[
		"p",
		{
			Constructor: function (e) {
				return c.createElement(
					"p",
					{
						className: i.Paragraph,
					},
					e.children,
					c.createElement("wbr", null),
				);
			},
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
]);
export const N2 = new Map([
	[
		"looping_media",
		{
			Constructor: $A,
			autocloses: false,
		},
	],
	[
		"video",
		{
			Constructor: UT,
			autocloses: false,
		},
	],
	[
		"youtubeorvideo",
		{
			Constructor: p.Eo,
			autocloses: false,
		},
	],
	[
		"previewyoutube",
		{
			Constructor: p.gH,
			autocloses: false,
		},
	],
]);
export function _D(e, t, r = 0) {
	if (e?.startsWith(w.lw)) {
		return (0, d.v6)(e);
	}
	if (e?.startsWith(w.eg)) {
		const n = new Array();
		const i = (0, d.mJ)();
		const s = e.substring(w.eg.length + 1);
		const o = A.i6.GetHashFromHashAndExt(s);
		const l = A.i6.GetExtensionStringFromHashAndExt(s);
		if (t != null) {
			let e = (0, a.Lg)(t);
			n.push(i + o + "/" + e + l + "?t=" + r);
			if (t == 4) {
				e = (0, a.x6)((0, a.Lg)(t));
				n.push(i + o + "/" + e + l + "?t=" + r);
			}
		}
		n.push(i + s);
		return n;
	}
	return e;
}
export function j$(e, t) {
	if (t === undefined) {
		return e[""];
	} else {
		return e[t];
	}
}
export function Tu(e, t) {
	return (r) =>
		e({
			...r,
			className: (0, f.A)(r.className, t),
		});
}
export function yN(e) {
	return c.createElement(
		"b",
		{
			className: i.Bold,
		},
		e.children,
	);
}
export function J2(e) {
	return c.createElement(
		"i",
		{
			className: (0, f.A)(i.Italic, "BB_Italic"),
		},
		e.children,
	);
}
export function z2(e) {
	return c.createElement(
		"u",
		{
			className: i.Underline,
		},
		e.children,
	);
}
export function n(e) {
	return c.createElement(
		"s",
		{
			className: i.Strike,
		},
		e.children,
	);
}
function N(e, t, r) {
	let n = j$(t.args, "id");
	n ||= j$(t.args);
	if (n && typeof n == "string" && n.length > 0 && n[0] === "#") {
		n = n.substring(1);
	}
	return c.createElement(
		e,
		{
			id: n || undefined,
			className: (0, f.A)(r, t.className),
		},
		t.children,
	);
}
export function Zb(e) {
	return N("h1", e, (0, f.A)(i.Header1, "BB_Header1"));
}
export function Sz(e) {
	return N("h2", e, (0, f.A)(i.Header2, "BB_Header2"));
}
export function ZS(e) {
	return N("h3", e, (0, f.A)(i.Header3, "BB_Header3"));
}
export function dC(e) {
	let [t, r] = c.useState(false);
	let n = c.useCallback(() => {
		r(!t);
	}, [t]);
	return c.createElement(
		o.Z,
		{
			className: (0, f.A)(i.Spoiler, t && i.Revealed),
			focusable: true,
			onActivate: n,
			onOKActionDescription: Localize(
				t ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
			),
		},
		c.createElement(
			"span",
			{
				className: i.SpoilerText,
			},
			e.children,
		),
	);
}
export function s0(e) {
	let t = j$(e.args);
	if (!t) {
		const r = e.children;
		if (
			typeof r == "string" &&
			(r.startsWith("http://") || r.startsWith("https://"))
		) {
			t = r;
		}
	}
	const r = j$(e.args, "style") == "button" ? i.LinkButton : null;
	let n = j$(e.args, "id");
	if (n && typeof n == "string" && n.length > 0 && n[0] === "#") {
		n = n.substring(1);
	}
	if (t !== undefined || n) {
		if (
			t === undefined ||
			(typeof t == "string" && t.length > 0 && t[0] == "#")
		) {
			return c.createElement(
				"a",
				{
					href: t ?? null,
					id: n,
				},
				e.children,
			);
		} else {
			return c.createElement(
				z,
				{
					className: r,
					href: t,
					id: n,
				},
				e.children,
			);
		}
	} else {
		return e.children || "";
	}
}
const z = (e) => {
	const { href: t, ...r } = e;
	let n;
	let i = (0, u.OZ)(t);
	if ((0, m.p)(i)) {
		i = (S.TS.IN_CLIENT ? "steam://openurl_external/" : "") + (0, m.E)(i);
		n = "noopener nofollow";
	} else {
		i = (0, y.NT)(i);
	}
	const a =
		typeof e.children == "string" &&
		e.children.length > 0 &&
		t &&
		!t.startsWith("steam://")
			? (0, y.Qz)(t)
			: undefined;
	return c.createElement(
		_.Gq,
		{
			toolTipContent: a,
			direction: "top",
		},
		c.createElement(
			s.Ii,
			{
				...r,
				href: i,
				rel: n,
			},
			e.children,
		),
	);
};
export function Cd(e) {
	return c.createElement(
		"a",
		{
			className: i.DisabledMouseEvents,
			href: j$(e.args),
		},
		e.children,
	);
}
export function Pk(e) {
	const t = j$(e.args, "author");
	return c.createElement(
		"blockquote",
		{
			className: (0, f.A)(i.BlockQuote, e.className),
		},
		!!t &&
			c.createElement(
				"div",
				{
					className: i.QuoteAuthor,
				},
				Localize("#Bbcode_Originally_Posted_By") + " ",
				" ",
				c.createElement("b", null, t + ":"),
			),
		e.children,
	);
}
export function B8(e) {
	return c.createElement(
		"ul",
		{
			className: (0, f.A)(i.List, "bullets"),
		},
		e.children,
	);
}
export function _J(e) {
	return c.createElement(
		"ol",
		{
			className: i.OrderedList,
		},
		e.children,
	);
}
export function ck(e) {
	let t = j$(e.args, "id");
	if (t && typeof t == "string" && t.length > 0 && t[0] === "#") {
		t = t.substring(1);
	}
	return c.createElement(
		"li",
		{
			className: i.ListItem,
			id: t || undefined,
		},
		e.children,
	);
}
export function PT(e) {
	return e.children;
}
function q(e, t) {
	const r = j$(t.args, "width");
	const n = j$(t.args, "colspan");
	const a = j$(t.args, "rowspan");
	const s = {};
	if (n && parseInt(n) > 1) {
		s.colSpan = parseInt(n);
	}
	if (a && parseInt(a) > 1) {
		s.rowSpan = parseInt(a);
	}
	return c.createElement(
		e,
		{
			className: (0, f.A)(i.TableCell, e == "td" && "BB_TableData"),
			...s,
			style: r && {
				width: r,
			},
		},
		t.children,
	);
}
function Q(e) {
	let t = j$(e, "poster");
	t &&= (0, y.L$)(t);
	const r = new Array();
	{
		const t = j$(e, "mp4");
		if (t) {
			r.push({
				sURL: (0, y.L$)(t),
				sFormat: "video/mp4",
			});
		}
		const n = j$(e, "webm");
		if (n) {
			r.push({
				sURL: (0, y.L$)(n),
				sFormat: "video/webm",
			});
		}
	}
	const n = (0, a.sf)(S.TS.LANGUAGE);
	const i = n != 0;
	const s = new Array();
	for (let t = 0; t < 31; t++) {
		const r = j$(e, "sub_" + (0, a.ww)(t));
		if (r) {
			s.push({
				sURL: (0, y.L$)(r),
				eLanguage: t,
				sKind: "subtitles",
				bDefault: i && t == n,
			});
		}
		const o = j$(e, "cap_" + (0, a.ww)(t));
		if (o) {
			s.push({
				sURL: (0, y.L$)(o),
				eLanguage: t,
				sKind: "captions",
				bDefault: i && t == n,
			});
		}
	}
	return {
		sPoster: t,
		rgVideoSources: r,
		rgVideoTracks: s,
	};
}
export function $A(e) {
	const t = Q(e.args);
	return c.createElement(h.L, {
		video: t,
		bAutoPlay: true,
		bControls: false,
		bLoop: true,
	});
}
export function UT(e) {
	const t = Q(e.args);
	const r = e.children ? e.children.toString() : undefined;
	if (r && r.startsWith("http")) {
		t.rgVideoSources.push({
			sURL: (0, y.L$)(r),
			sFormat: "video/webm",
		});
	}
	const n = j$(e.args, "autoplay");
	const i = n !== "0" && n !== "off" && n !== "false";
	const a = j$(e.args, "controls");
	const s = a !== "0" && a !== "off" && a !== "false";
	const o = j$(e.args, "loop");
	const l = a !== "0" && a !== "off" && a !== "false";
	return c.createElement(h.L, {
		video: t,
		bAutoPlay: i,
		bControls: s,
		bLoop: o ? l : i,
	});
}
