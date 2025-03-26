var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./31084.js");
var o = require("./92008.js");
var l = require(/*webcrack:missing*/ "./736.js");
var c = require(/*webcrack:missing*/ "./90765.js");
import { CopyURLToClipboard } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
var d = require(/*webcrack:missing*/ "./72476.js");
var A = require(/*webcrack:missing*/ "./88750.js");
export function Id(e, t) {
	let r;
	r = "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e;
	if (t.indexOf("steam://") == 0) {
		if ((0, l.Fj)(r, "URL.ExecuteSteamURL")) {
			r.SteamClient.URL.ExecuteSteamURL(t);
		} else {
			r.location.href = t;
		}
	} else {
		r.open(
			t,
			undefined,
			"menubar,location,resizable,scrollbars,status,noopener",
		);
	}
}
export function uU(e) {
	let {
		bDisableContextMenu: t,
		onContextMenu: r,
		bForceExternal: n,
		href: i,
		bUseLinkFilter: s,
		getPIDFromEvent: l,
		...c
	} = e;
	if (!t && !r) {
		r = AJ;
	}
	if (s && i) {
		i = (d.TS.IN_CLIENT ? "steam://openurl_external/" : "") + (0, o.E)(i);
	}
	l ||= () => 0;
	return a.createElement(
		"a",
		{
			...c,
			href: i,
			onClick: (e) => {
				e.preventDefault();
				EP(window, i, {
					bForceExternal: !!n,
					bUseLinkFilter: !!s,
					unPID: l(e),
				});
			},
			onContextMenu: r,
			rel: s ? "noopener noreferrer" : undefined,
		},
		e.children,
	);
}
function h(e) {
	const { strURL: t, unPID: r } = e;
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(
			A.kt,
			{
				onSelected: () => {
					CopyURLToClipboard(t);
				},
			},
			(0, Localize)("#ContextMenu_CopyLinkURL"),
		),
		a.createElement(
			A.kt,
			{
				onSelected: (e) => {
					EP(e, t, {
						unPID: r,
					});
				},
			},
			(0, Localize)("#ContextMenu_OpenLinkInNewWindow"),
		),
	);
}
export function AJ(e, t) {
	let r = e.currentTarget;
	return (0, s.lX)(
		a.createElement(
			A.tz,
			null,
			a.createElement(h, {
				strURL: r.href,
				unPID: t,
			}),
		),
		e,
	);
}
function _(e) {
	const { strFullImageURL: t, unPID: r } = e;
	return a.createElement(
		a.Fragment,
		null,
		a.createElement(
			A.kt,
			{
				onSelected: () => {
					CopyURLToClipboard(t);
				},
			},
			(0, Localize)("#ContextMenu_CopyImageURL"),
		),
		a.createElement(
			A.kt,
			{
				onSelected: (e) => {
					EP(e, t, {
						unPID: r,
					});
				},
			},
			(0, Localize)("#ContextMenu_OpenImageInNewWindow"),
		),
	);
}
export function xE(e, t, r) {
	return W4(e, e.currentTarget.src, t, r);
}
export function W4(e, t, r, n) {
	return (0, s.lX)(
		a.createElement(
			A.tz,
			null,
			r &&
				a.createElement(h, {
					strURL: r,
				}),
			a.createElement(_, {
				strFullImageURL: t,
				unPID: n,
			}),
		),
		e,
	);
}
export function EP(e, t, r = {}) {
	const { bForceExternal: n, unPID: i, bUseLinkFilter: a } = r;
	let s;
	s = "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e;
	if (typeof SteamClient != "undefined" && SteamClient.WebChat !== undefined) {
		SteamClient.WebChat.OpenURLInClient(t, i || 0, !!n);
	} else if (
		t.indexOf("steam://") == 0 &&
		t.indexOf("steam://remoteplay/connect") != 0
	) {
		s.location.href = t;
	} else {
		s.open(
			t,
			undefined,
			"menubar,location,resizable,scrollbars,status,noopener" +
				(a ? ",noreferrer" : ""),
		);
	}
}
export function Ri(e) {
	return a.forwardRef(function (t, r) {
		return a.createElement("div", {
			...t,
			className: (0, c.A)(e, t.className),
			ref: r,
		});
	});
}
export function rA(e) {
	if (e.result != 1) {
		console.error(
			"Error",
			e.result,
			":",
			"message" in e ? e.message : "No message.",
		);
	}
}
export function qo(e, t) {
	if (e < t) {
		return -1;
	} else if (e > t) {
		return 1;
	} else {
		return 0;
	}
}
export function i_(e) {
	if (typeof e != "string") {
		return NaN;
	}
	const t = !e.includes("ms") && e.includes("s");
	let r = Number.parseFloat(e);
	if (t) {
		r *= 1000;
	}
	return r;
}
export function DH(e, t = 1) {
	while (e) {
		let t = (e.ownerDocument.defaultView || window).getComputedStyle(e);
		let r = parseFloat(t.zoom);
		if (r && r != 1) {
			return r;
		}
		e = e.parentElement;
	}
	return t;
}
(0, n.Cg)(
	[i.sH],
	class {
		m_Promise;
		m_Value = undefined;
		constructor(e) {
			(0, i.Gn)(this);
			this.promise = e;
		}
		set promise(e) {
			this.m_Promise = e;
			this.m_Value = undefined;
			e?.then((t) => {
				if (this.m_Promise === e) {
					this.m_Value = t;
				}
			});
		}
		get promise() {
			return this.m_Promise;
		}
		get value() {
			return this.m_Value;
		}
	}.prototype,
	"m_Value",
	undefined,
);
