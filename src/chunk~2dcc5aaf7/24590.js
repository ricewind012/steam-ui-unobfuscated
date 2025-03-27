import { CopyTextToClipboard } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import a from "./63696.js";
import { lX } from "./31084.js";
import l, { R7 } from "./11131.js";
import u from "./43691.js";
import d from "./88750.js";
import A from "./24892.js";
let n;
let i;
((e) => {
	e[(e.CM_TYPEFLAG_NONE = 0)] = "CM_TYPEFLAG_NONE";
	e[(e.CM_TYPEFLAG_PAGE = 1)] = "CM_TYPEFLAG_PAGE";
	e[(e.CM_TYPEFLAG_FRAME = 2)] = "CM_TYPEFLAG_FRAME";
	e[(e.CM_TYPEFLAG_LINK = 4)] = "CM_TYPEFLAG_LINK";
	e[(e.CM_TYPEFLAG_MEDIA = 8)] = "CM_TYPEFLAG_MEDIA";
	e[(e.CM_TYPEFLAG_SELECTION = 16)] = "CM_TYPEFLAG_SELECTION";
	e[(e.CM_TYPEFLAG_EDITABLE = 32)] = "CM_TYPEFLAG_EDITABLE";
})((n ||= {}));
((e) => {
	e[(e.CM_EDITFLAG_NONE = 0)] = "CM_EDITFLAG_NONE";
	e[(e.CM_EDITFLAG_CAN_UNDO = 1)] = "CM_EDITFLAG_CAN_UNDO";
	e[(e.CM_EDITFLAG_CAN_REDO = 2)] = "CM_EDITFLAG_CAN_REDO";
	e[(e.CM_EDITFLAG_CAN_CUT = 4)] = "CM_EDITFLAG_CAN_CUT";
	e[(e.CM_EDITFLAG_CAN_COPY = 8)] = "CM_EDITFLAG_CAN_COPY";
	e[(e.CM_EDITFLAG_CAN_PASTE = 16)] = "CM_EDITFLAG_CAN_PASTE";
	e[(e.CM_EDITFLAG_CAN_DELETE = 32)] = "CM_EDITFLAG_CAN_DELETE";
	e[(e.CM_EDITFLAG_CAN_SELECT_ALL = 64)] = "CM_EDITFLAG_CAN_SELECT_ALL";
	e[(e.CM_EDITFLAG_CAN_TRANSLATE = 128)] = "CM_EDITFLAG_CAN_TRANSLATE";
})((i ||= {}));
let s;
const p = A;
function G(e) {
	return <hr className={p.ContextMenuHRSeparator} />;
}
export function D(e) {
	const t = R7();
	a.useEffect(() => {
		if (e) {
			const r = (r) => {
				let n = t.ownerWindow.document.elementFromPoint(r.coord_x, r.coord_y);
				let l = e.GetBounds();
				let A = {
					preventDefault: () => {},
					stopPropagation: () => {},
					currentTarget: n,
					clientX: r.coord_x + l.x,
					clientY: r.coord_y + l.y,
				};
				let p = {
					title: "useBrowserViewContextMenu",
					bForcePopup: true,
				};
				let h = [];
				if (r.selection_text) {
					h.push(
						<d.kt
							key="selection_text"
							onSelected={() => CopyTextToClipboard(r.selection_text)}
						>
							{Localize("#BrowserContextMenu_Copy")}
						</d.kt>,
					);
				} else if (r.unfiltered_link_url) {
					h.push(
						<d.kt
							key="link_url"
							onSelected={() =>
								e?.HandleContextMenuCommand(s.OpenLinkInNewTab, r)
							}
						>
							{Localize("#BrowserContextMenu_OpenLinkInNewTab")}
						</d.kt>,
					);
					h.push(
						<d.kt
							key="unfiltered_link_url"
							onSelected={() => CopyTextToClipboard(r.unfiltered_link_url)}
						>
							{Localize("#BrowserContextMenu_CopyLink")}
						</d.kt>,
					);
				} else if (r.edit_state_flags) {
					let t = (r.edit_state_flags & i.CM_EDITFLAG_CAN_PASTE) != 0;
					h.push(
						<d.kt key="paste" disabled={!t} onSelected={() => e?.Paste()}>
							{Localize("#BrowserContextMenu_Paste")}
						</d.kt>,
					);
				} else {
					h.push(
						<d.kt
							key="back"
							disabled={!e?.CanGoBackward()}
							onSelected={() => e?.GoBack()}
						>
							{Localize("#BrowserContextMenu_GoBack")}
						</d.kt>,
					);
					h.push(
						<d.kt
							key="forward"
							disabled={!e?.CanGoForward()}
							onSelected={() => e?.GoForward()}
						>
							{Localize("#BrowserContextMenu_GoForward")}
						</d.kt>,
					);
					h.push(
						<d.kt key="reload" onSelected={() => e?.Reload()}>
							{Localize("#BrowserContextMenu_Reload")}
						</d.kt>,
					);
					h.push(
						<d.kt
							key="copypageurl"
							onSelected={() => CopyTextToClipboard(r.page_url)}
						>
							{Localize("#BrowserContextMenu_CopyPageURL")}
						</d.kt>,
					);
				}
				if (r.custom_commands?.length != 0) {
					h.push(<G key="customcommands" />);
					h = r.custom_commands.map((t) => (
						<d.kt
							key={t.id}
							onSelected={() => e?.HandleContextMenuCommand(t.id, r)}
						>
							{t.label}
						</d.kt>
					));
				}
				if (u.TS.DEV_MODE) {
					h.push(<G key="devcommands" />);
					h.push(
						<d.kt
							key={s.OpenDevTools}
							onSelected={() => e.HandleContextMenuCommand(s.OpenDevTools, r)}
						>
							Open Dev Tools
						</d.kt>,
					);
					h.push(
						<d.kt
							key={s.InspectElement}
							onSelected={() => e.HandleContextMenuCommand(s.InspectElement, r)}
						>
							Inspect Element
						</d.kt>,
					);
				}
				if (h.length != 0) {
					lX(<d.tz>{h}</d.tz>, A, p).SetOnHideCallback(() =>
						e?.HandleContextMenuCommand(s.Close, r),
					);
					return true;
				}
				return false;
			};
			e.SetShowContextMenuCallback(r);
		}
	}, [e, t.ownerWindow]);
}
((e) => {
	e[(e.Close = -1)] = "Close";
	e[(e.OpenDevTools = 26500)] = "OpenDevTools";
	e[(e.CloseDevTools = 26501)] = "CloseDevTools";
	e[(e.InspectElement = 26502)] = "InspectElement";
	e[(e.OpenLinkInNewTab = 26503)] = "OpenLinkInNewTab";
})((s ||= {}));
