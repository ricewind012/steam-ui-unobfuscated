import { CopyURLToClipboard } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./63696.js";
import s, { lX } from "./31084.js";
import { E } from "./92008.js";
import l, { Fj } from "./736.js";
import c, { A as A_1 } from "./90765.js";
import d from "./72476.js";
import A from "./88750.js";
export function Id(e, t) {
	let r;
	r = "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e;
	if (t.indexOf("steam://") == 0) {
		if (Fj(r, "URL.ExecuteSteamURL")) {
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
		bDisableContextMenu,
		onContextMenu,
		bForceExternal,
		href,
		bUseLinkFilter,
		getPIDFromEvent,
		...c
	} = e;
	if (!bDisableContextMenu && !onContextMenu) {
		onContextMenu = AJ;
	}
	if (bUseLinkFilter && href) {
		href = (d.TS.IN_CLIENT ? "steam://openurl_external/" : "") + E(href);
	}
	getPIDFromEvent ||= () => 0;
	return (
		<a
			{...c}
			href={href}
			onClick={(e) => {
				e.preventDefault();
				EP(window, href, {
					bForceExternal: !!bForceExternal,
					bUseLinkFilter: !!bUseLinkFilter,
					unPID: getPIDFromEvent(e),
				});
			}}
			onContextMenu={onContextMenu}
			rel={bUseLinkFilter ? "noopener noreferrer" : undefined}
		>
			{e.children}
		</a>
	);
}
function H(e) {
	const { strURL, unPID } = e;
	return (
		<>
			<A.kt
				onSelected={() => {
					CopyURLToClipboard(strURL);
				}}
			>
				{(0, Localize)("#ContextMenu_CopyLinkURL")}
			</A.kt>
			<A.kt
				onSelected={(e) => {
					EP(e, strURL, {
						unPID: unPID,
					});
				}}
			>
				{(0, Localize)("#ContextMenu_OpenLinkInNewWindow")}
			</A.kt>
		</>
	);
}
export function AJ(e, t) {
	let e_currentTarget = e.currentTarget;
	return lX(
		<A.tz>
			<H strURL={e_currentTarget.href} unPID={t} />
		</A.tz>,
		e,
	);
}
function _(e) {
	const { strFullImageURL, unPID } = e;
	return (
		<>
			<A.kt
				onSelected={() => {
					CopyURLToClipboard(strFullImageURL);
				}}
			>
				{(0, Localize)("#ContextMenu_CopyImageURL")}
			</A.kt>
			<A.kt
				onSelected={(e) => {
					EP(e, strFullImageURL, {
						unPID: unPID,
					});
				}}
			>
				{(0, Localize)("#ContextMenu_OpenImageInNewWindow")}
			</A.kt>
		</>
	);
}
export function xE(e, t, r) {
	return W4(e, e.currentTarget.src, t, r);
}
export function W4(e, t, r, n) {
	return lX(
		<A.tz>
			{r && <H strURL={r} />}
			<_ strFullImageURL={t} unPID={n} />
		</A.tz>,
		e,
	);
}
export function EP(e, t, r = {}) {
	const { bForceExternal, unPID, bUseLinkFilter } = r;
	let s;
	s = "currentTarget" in e ? e.currentTarget.ownerDocument.defaultView : e;
	if (typeof SteamClient != "undefined" && SteamClient.WebChat !== undefined) {
		SteamClient.WebChat.OpenURLInClient(t, unPID || 0, !!bForceExternal);
	} else if (
		t.indexOf("steam://") == 0 &&
		t.indexOf("steam://remoteplay/connect") != 0
	) {
		s.location.href = t;
	} else {
		s.open(
			t,
			undefined,
			`menubar,location,resizable,scrollbars,status,noopener${
				bUseLinkFilter ? ",noreferrer" : ""
			}`,
		);
	}
}
export function Ri(e) {
	return a.forwardRef((t, r) => (
		<div {...t} className={A_1(e, t.className)} ref={r} />
	));
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
Cg(
	[i.sH],
	class {
		m_Promise;
		m_Value = undefined;
		constructor(e) {
			Gn(this);
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
