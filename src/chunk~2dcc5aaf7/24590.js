var n;
var i;
var a = require(/*webcrack:missing*/ "./63696.js");
(function (e) {
	e[(e.CM_TYPEFLAG_NONE = 0)] = "CM_TYPEFLAG_NONE";
	e[(e.CM_TYPEFLAG_PAGE = 1)] = "CM_TYPEFLAG_PAGE";
	e[(e.CM_TYPEFLAG_FRAME = 2)] = "CM_TYPEFLAG_FRAME";
	e[(e.CM_TYPEFLAG_LINK = 4)] = "CM_TYPEFLAG_LINK";
	e[(e.CM_TYPEFLAG_MEDIA = 8)] = "CM_TYPEFLAG_MEDIA";
	e[(e.CM_TYPEFLAG_SELECTION = 16)] = "CM_TYPEFLAG_SELECTION";
	e[(e.CM_TYPEFLAG_EDITABLE = 32)] = "CM_TYPEFLAG_EDITABLE";
})((n ||= {}));
(function (e) {
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
var s;
var o = require(/*webcrack:missing*/ "./31084.js");
var l = require(/*webcrack:missing*/ "./11131.js");
var c = require(/*webcrack:missing*/ "./54644.js");
var m = require(/*webcrack:missing*/ "./46108.js");
var u = require(/*webcrack:missing*/ "./43691.js");
var d = require(/*webcrack:missing*/ "./88750.js");
var A = require(/*webcrack:missing*/ "./24892.js");
var p = A;
function g(e) {
	return a.createElement("hr", {
		className: p.ContextMenuHRSeparator,
	});
}
export function D(e) {
	const t = (0, l.R7)();
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
						a.createElement(
							d.kt,
							{
								key: "selection_text",
								onSelected: () => (0, c.OG)(r.selection_text),
							},
							(0, m.we)("#BrowserContextMenu_Copy"),
						),
					);
				} else if (r.unfiltered_link_url) {
					h.push(
						a.createElement(
							d.kt,
							{
								key: "link_url",
								onSelected: () =>
									e?.HandleContextMenuCommand(s.OpenLinkInNewTab, r),
							},
							(0, m.we)("#BrowserContextMenu_OpenLinkInNewTab"),
						),
					);
					h.push(
						a.createElement(
							d.kt,
							{
								key: "unfiltered_link_url",
								onSelected: () => (0, c.OG)(r.unfiltered_link_url),
							},
							(0, m.we)("#BrowserContextMenu_CopyLink"),
						),
					);
				} else if (r.edit_state_flags) {
					let t = (r.edit_state_flags & i.CM_EDITFLAG_CAN_PASTE) != 0;
					h.push(
						a.createElement(
							d.kt,
							{
								key: "paste",
								disabled: !t,
								onSelected: () => e?.Paste(),
							},
							(0, m.we)("#BrowserContextMenu_Paste"),
						),
					);
				} else {
					h.push(
						a.createElement(
							d.kt,
							{
								key: "back",
								disabled: !e?.CanGoBackward(),
								onSelected: () => e?.GoBack(),
							},
							(0, m.we)("#BrowserContextMenu_GoBack"),
						),
					);
					h.push(
						a.createElement(
							d.kt,
							{
								key: "forward",
								disabled: !e?.CanGoForward(),
								onSelected: () => e?.GoForward(),
							},
							(0, m.we)("#BrowserContextMenu_GoForward"),
						),
					);
					h.push(
						a.createElement(
							d.kt,
							{
								key: "reload",
								onSelected: () => e?.Reload(),
							},
							(0, m.we)("#BrowserContextMenu_Reload"),
						),
					);
					h.push(
						a.createElement(
							d.kt,
							{
								key: "copypageurl",
								onSelected: () => (0, c.OG)(r.page_url),
							},
							(0, m.we)("#BrowserContextMenu_CopyPageURL"),
						),
					);
				}
				if (r.custom_commands?.length != 0) {
					h.push(
						a.createElement(g, {
							key: "customcommands",
						}),
					);
					h = r.custom_commands.map((t) =>
						a.createElement(
							d.kt,
							{
								key: t.id,
								onSelected: () => e?.HandleContextMenuCommand(t.id, r),
							},
							t.label,
						),
					);
				}
				if (u.TS.DEV_MODE) {
					h.push(
						a.createElement(g, {
							key: "devcommands",
						}),
					);
					h.push(
						a.createElement(
							d.kt,
							{
								key: s.OpenDevTools,
								onSelected: () => e.HandleContextMenuCommand(s.OpenDevTools, r),
							},
							"Open Dev Tools",
						),
					);
					h.push(
						a.createElement(
							d.kt,
							{
								key: s.InspectElement,
								onSelected: () =>
									e.HandleContextMenuCommand(s.InspectElement, r),
							},
							"Inspect Element",
						),
					);
				}
				if (h.length != 0) {
					(0, o.lX)(a.createElement(d.tz, null, h), A, p).SetOnHideCallback(
						() => e?.HandleContextMenuCommand(s.Close, r),
					);
					return true;
				}
				return false;
			};
			e.SetShowContextMenuCallback(r);
		}
	}, [e, t.ownerWindow]);
}
(function (e) {
	e[(e.Close = -1)] = "Close";
	e[(e.OpenDevTools = 26500)] = "OpenDevTools";
	e[(e.CloseDevTools = 26501)] = "CloseDevTools";
	e[(e.InspectElement = 26502)] = "InspectElement";
	e[(e.OpenLinkInNewTab = 26503)] = "OpenLinkInNewTab";
})((s ||= {}));
