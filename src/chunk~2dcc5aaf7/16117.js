import { Localize } from "../../actual_src/utils/localization.js";
import _n from "./49787.js";
import a, { sf, Lg, x6, ww } from "./44846.js";
import s from "./90242.js";
import o from "./69164.js";
import l from "./37322.js";
import c from "./63696.js";
import m, { p as p_1, E } from "./92008.js";
import u, { OZ } from "./45328.js";
import d, { v6, mJ } from "./36885.js";
import A from "./88341.js";
import p from "./34091.js";
import g from "./54573.js";
import h from "./40772.js";
import C from "./50376.js";
import _ from "./98995.js";
import { A as A_1 } from "./90765.js";
import y, { NT, Qz, L$ } from "./53807.js";
import S from "./43691.js";
import w from "./24546.js";
const i = _n;
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
			Constructor(e) {
				return N("h4", e, A_1(i.Header4, "BB_Header4"));
			},
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"h5",
		{
			Constructor(e) {
				return N("h5", e, A_1(i.Header5, "BB_Header5"));
			},
			autocloses: false,
			skipFollowingNewline: true,
		},
	],
	[
		"center",
		{
			Constructor(e) {
				let t = j$(e.args, "id");
				if (t && typeof t == "string" && t.length > 0 && t[0] === "#") {
					t = t.substring(1);
				}
				return (
					<span id={t || undefined} className={A_1(i.CenterSpan, "BB_Center")}>
						{e.children}
					</span>
				);
			},
			autocloses: false,
		},
	],
	[
		"smalltext",
		{
			Constructor(e) {
				return N("div", e, A_1(i.SmallText, "BB_SmallText"));
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
			Constructor(e) {
				return <hr className={i.HR} />;
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
			Constructor(e) {
				return <div className={i.PullQuote}>{e.children}</div>;
			},
			autocloses: false,
		},
	],
	[
		"code",
		{
			Constructor(e) {
				return <code className={i.CodeBlock}>{e.children}</code>;
			},
			autocloses: false,
		},
	],
	[
		"c",
		{
			Constructor(e) {
				return <code className={i.Code}>{e.children}</code>;
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
			Constructor(e) {
				const t = j$(e.args, "noborder");
				const r = j$(e.args, "equalcells");
				const n = j$(e.args, "colwidth");
				return (
					<table
						className={A_1(
							i.Table,
							"BB_Table",
							t && i.NoBorder,
							r && i.EqualCells,
						)}
					>
						{n && (
							<colgroup>
								{n.split(",").map((e, t) => (
									<col
										key={t}
										style={
											e
												? {
														width: `${e}px`,
													}
												: undefined
										}
									/>
								))}
							</colgroup>
						)}
						<tbody>{e.children}</tbody>
					</table>
				);
			},
			autocloses: false,
			skipInternalNewline: true,
		},
	],
	[
		"tr",
		{
			Constructor(e) {
				return <tr className={A_1(i.TableRow, "BB_TableRow")}>{e.children}</tr>;
			},
			autocloses: false,
			skipInternalNewline: true,
			skipFollowingNewline: true,
		},
	],
	[
		"th",
		{
			Constructor(e) {
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
			Constructor(e) {
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
			Constructor(e) {
				const t = Boolean(j$(e.args, "expanded"));
				const [r, setR] = c.useState(t);
				const a = j$(e.args, "title");
				const s = j$(e.args, "collapsed_str");
				const o = j$(e.args, "expanded_str");
				const l = ((e, t, r, n) => {
					switch (e) {
						case "details": {
							return {
								collapsed: "#Bbcode_Expand_Details_Collapsed",
								expanded: "#Bbcode_Expand_Details_Expanded",
								style: i.ExpandSection_Details,
							};
						}
						case "spoiler": {
							return {
								collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
								expanded: "#Bbcode_Expand_Spoiler_Expanded",
								style: i.ExpandSection_Spoiler,
							};
						}
						case "title": {
							return {
								collapsed: t || r || r || "#Bbcode_Expand_ShowMore_Collapsed",
								expanded: t || n || n || "#Bbcode_Expand_ShowMore_Expanded",
								style: i.ExpandSection_WithTitle,
							};
						}
						default: {
							return {
								collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
								expanded: "#Bbcode_Expand_ShowMore_Expanded",
								style: i.ExpandSection_ShowMore,
							};
						}
					}
				})(j$(e.args, "type"), a, s, o);
				return (
					<div
						className={A_1({
							[i.ExpandSectionBlock]: true,
							[l.style]: true,
							[i.ExpandSectionExpanded]: r,
							[i.ExpandSectionCollapsed]: !r,
							BBCodeExpanded: r,
							BBCodeCollapsed: !r,
						})}
					>
						<div className={i.ExpandSectionHeader} onClick={() => setR(!r)}>
							{Localize(r ? l.expanded : l.collapsed)}
							<div className={i.EmbedArrow}>
								<C.DK4 angle={r ? 180 : 0} />
							</div>
						</div>
						{r && <div className={i.ExpandSectionBody}>{e.children}</div>}
					</div>
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
			Constructor(e) {
				const { event, showErrorInfo } = e.context;
				const n = j$(e.args);
				if (n) {
					return <g.y eventGID={n} bPreviewMode={showErrorInfo} />;
				}
				if (event) {
					const e = sf(S.TS.LANGUAGE);
					return <g.j eventModel={event} lang={e} />;
				}
				return null;
			},
			autocloses: false,
		},
	],
	[
		"calendarevent",
		{
			Constructor(e) {
				const t = j$(e.args, "title");
				const r = j$(e.args, "start") ?? j$(e.args, "datetime");
				const n = j$(e.args, "end") ?? j$(e.args, "datetime");
				const a = j$(e.args, "body") ?? null;
				const s = j$(e.args, "location") ?? null;
				const o = j$(e.args, "id") ?? "";
				const m = new Date(r);
				const u = m.getUTCFullYear();
				const d = `0${m.getUTCMonth() + 1}`.slice(-2);
				const A = `0${m.getUTCDate()}`.slice(-2);
				const p = `0${m.getUTCHours()}`.slice(-2);
				const g = `0${m.getUTCMinutes()}`.slice(-2);
				const h = `${u}${d}${A}T${p}${g}00Z`;
				const C = new Date(n);
				const _ = C.getUTCFullYear();
				const b = `0${C.getUTCMonth() + 1}`.slice(-2);
				const y = `0${C.getUTCDate()}`.slice(-2);
				const S = `0${C.getUTCHours()}`.slice(-2);
				const w = `0${C.getUTCMinutes()}`.slice(-2);
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
					v = `data:text/calendar;charset=utf-8;base64,${l.iI(
						new TextEncoder().encode(e),
					)}`;
				} catch (e) {
					console.error(e);
				}
				let I = "https://calendar.google.com/calendar/render?action=TEMPLATE";
				I += `&text=${encodeURI(t)}`;
				I += `&details=${encodeURI(a)}`;
				I += `&dates=${encodeURI(`${h}/${B}`)}`;
				const M = (e) => {
					if ("ReactNativeWebView" in window) {
						const window_ReactNativeWebView = window.ReactNativeWebView;
						const n = {
							event_name: "addcalendarevent",
							tsStart: m.getTime(),
							tsEnd: C.getTime(),
							strTitle: t,
							strNotes: a,
							strLocation: s,
						};
						window_ReactNativeWebView.postMessage(JSON.stringify(n));
						e.preventDefault();
					}
				};
				return (
					<div
						className={A_1(
							"SaleSectionCalendarEventContainer",
							i.CalendarEventContainer,
						)}
						id={o}
					>
						{v && (
							<a
								className={A_1(
									"SaleSectionCalendarEventLink",
									i.CalendarEventLink,
								)}
								href={v}
								onClick={M}
								download="steam_deck_white_release.ics"
							>
								Apple
							</a>
						)}
						<a
							className={A_1(
								"SaleSectionCalendarEventLink",
								i.CalendarEventLink,
							)}
							href={I}
						>
							Google
						</a>
						{v && (
							<a
								className={A_1(
									"SaleSectionCalendarEventLink",
									i.CalendarEventLink,
								)}
								href={v}
								onClick={M}
								download="steam_deck_white_release.ics"
							>
								Outlook
							</a>
						)}
					</div>
				);
			},
			autocloses: true,
		},
	],
	[
		"doclink",
		{
			Constructor(e) {
				const t = j$(e.args);
				const r = j$(e.args, "style") == "button" ? i.LinkButton : null;
				return (
					<Z className={r} href={`${S.TS.PARTNER_BASE_URL}doc/${t}`}>
						{e.children}
					</Z>
				);
			},
			autocloses: false,
		},
	],
	[
		"color",
		{
			Constructor(e) {
				const t = j$(e.args);
				return (
					<span
						style={{
							color: t,
						}}
					>
						{e.children}
					</span>
				);
			},
			autocloses: false,
		},
	],
	[
		"p",
		{
			Constructor(e) {
				return (
					<p className={i.Paragraph}>
						{e.children}
						<wbr />
					</p>
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
		return v6(e);
	}
	if (e?.startsWith(w.eg)) {
		const n = new Array();
		const i = mJ();
		const s = e.substring(w.eg.length + 1);
		const o = A.i6.GetHashFromHashAndExt(s);
		const l = A.i6.GetExtensionStringFromHashAndExt(s);
		if (t != null) {
			let e = Lg(t);
			n.push(`${i + o}/${e}${l}?t=${r}`);
			if (t == 4) {
				e = x6(Lg(t));
				n.push(`${i + o}/${e}${l}?t=${r}`);
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
			className: A_1(r.className, t),
		});
}
export function yN(e) {
	return <b className={i.Bold}>{e.children}</b>;
}
export function J2(e) {
	return <i className={A_1(i.Italic, "BB_Italic")}>{e.children}</i>;
}
export function z2(e) {
	return <u className={i.Underline}>{e.children}</u>;
}
export function n(e) {
	return <s className={i.Strike}>{e.children}</s>;
}
function N(E, t, r) {
	let n = j$(t.args, "id");
	n ||= j$(t.args);
	if (n && typeof n == "string" && n.length > 0 && n[0] === "#") {
		n = n.substring(1);
	}
	return (
		<E id={n || undefined} className={A_1(r, t.className)}>
			{t.children}
		</E>
	);
}
export function Zb(e) {
	return N("h1", e, A_1(i.Header1, "BB_Header1"));
}
export function Sz(e) {
	return N("h2", e, A_1(i.Header2, "BB_Header2"));
}
export function ZS(e) {
	return N("h3", e, A_1(i.Header3, "BB_Header3"));
}
export function dC(e) {
	let [t, setT] = c.useState(false);
	let n = c.useCallback(() => {
		setT(!t);
	}, [t]);
	return (
		<o.Z
			className={A_1(i.Spoiler, t && i.Revealed)}
			focusable
			onActivate={n}
			onOKActionDescription={Localize(
				t ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
			)}
		>
			<span className={i.SpoilerText}>{e.children}</span>
		</o.Z>
	);
}
export function s0(e) {
	let t = j$(e.args);
	if (!t) {
		const e_children = e.children;
		if (
			typeof e_children == "string" &&
			(e_children.startsWith("http://") || e_children.startsWith("https://"))
		) {
			t = e_children;
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
			return (
				<a href={t ?? null} id={n}>
					{e.children}
				</a>
			);
		} else {
			return (
				<Z className={r} href={t} id={n}>
					{e.children}
				</Z>
			);
		}
	} else {
		return e.children || "";
	}
}
const Z = (e) => {
	const { href, ...r } = e;
	let n;
	let i = OZ(href);
	if (p_1(i)) {
		i = (S.TS.IN_CLIENT ? "steam://openurl_external/" : "") + E(i);
		n = "noopener nofollow";
	} else {
		i = NT(i);
	}
	const a =
		typeof e.children == "string" &&
		e.children.length > 0 &&
		href &&
		!href.startsWith("steam://")
			? Qz(href)
			: undefined;
	return (
		<_.Gq toolTipContent={a} direction="top">
			<s.Ii {...r} href={i} rel={n}>
				{e.children}
			</s.Ii>
		</_.Gq>
	);
};
export function Cd(e) {
	return (
		<a className={i.DisabledMouseEvents} href={j$(e.args)}>
			{e.children}
		</a>
	);
}
export function Pk(e) {
	const t = j$(e.args, "author");
	return (
		<blockquote className={A_1(i.BlockQuote, e.className)}>
			{!!t && (
				<div className={i.QuoteAuthor}>
					{`${Localize("#Bbcode_Originally_Posted_By")} `} <b>{`${t}:`}</b>
				</div>
			)}
			{e.children}
		</blockquote>
	);
}
export function B8(e) {
	return <ul className={A_1(i.List, "bullets")}>{e.children}</ul>;
}
export function _J(e) {
	return <ol className={i.OrderedList}>{e.children}</ol>;
}
export function ck(e) {
	let t = j$(e.args, "id");
	if (t && typeof t == "string" && t.length > 0 && t[0] === "#") {
		t = t.substring(1);
	}
	return (
		<li className={i.ListItem} id={t || undefined}>
			{e.children}
		</li>
	);
}
export function PT(e) {
	return e.children;
}
function q(E, t) {
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
	return (
		<E
			className={A_1(i.TableCell, E == "td" && "BB_TableData")}
			{...s}
			style={
				r && {
					width: r,
				}
			}
		>
			{t.children}
		</E>
	);
}
function Q(e) {
	let t = j$(e, "poster");
	t &&= L$(t);
	const r = new Array();
	{
		const t = j$(e, "mp4");
		if (t) {
			r.push({
				sURL: L$(t),
				sFormat: "video/mp4",
			});
		}
		const n = j$(e, "webm");
		if (n) {
			r.push({
				sURL: L$(n),
				sFormat: "video/webm",
			});
		}
	}
	const n = sf(S.TS.LANGUAGE);
	const i = n != 0;
	const s = new Array();
	for (let t = 0; t < 31; t++) {
		const r = j$(e, `sub_${ww(t)}`);
		if (r) {
			s.push({
				sURL: L$(r),
				eLanguage: t,
				sKind: "subtitles",
				bDefault: i && t == n,
			});
		}
		const o = j$(e, `cap_${ww(t)}`);
		if (o) {
			s.push({
				sURL: L$(o),
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
	return <h.L video={t} bAutoPlay bControls={false} bLoop />;
}
export function UT(e) {
	const t = Q(e.args);
	const r = e.children ? e.children.toString() : undefined;
	if (r && r.startsWith("http")) {
		t.rgVideoSources.push({
			sURL: L$(r),
			sFormat: "video/webm",
		});
	}
	const n = j$(e.args, "autoplay");
	const i = n !== "0" && n !== "off" && n !== "false";
	const a = j$(e.args, "controls");
	const s = a !== "0" && a !== "off" && a !== "false";
	const o = j$(e.args, "loop");
	const l = a !== "0" && a !== "off" && a !== "false";
	return <h.L video={t} bAutoPlay={i} bControls={s} bLoop={o ? l : i} />;
}
