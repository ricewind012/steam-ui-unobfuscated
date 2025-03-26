var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./1079.js");
var a = require("./83591.js");
var s = require("./5859.js");
var o = require(/*webcrack:missing*/ "./50376.js");
var l = require("./47628.js");
var c = l;
var m = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var d = require("./81726.js");
export const V = (0, require(/*webcrack:missing*/ "./41230.js").PA)(
	function (e) {
		const { appids: t, hide_status_banners: r } = e;
		const l = t.every((e) => a.Fm.Get().BOwnsApp(e));
		const A = t.every((e) => a.Fm.Get().BIsGameWishlisted(e));
		const p = t.some((e) => {
			const t = s.A.Get().GetApp(e);
			return (
				t &&
				(function (e, t) {
					if (t || e) {
						const r = t || e;
						return r && i.j.Get().BIsAppStreaming(r);
					}
					return false;
				})(e, t?.GetParentAppID())
			);
		});
		const g = l && !r;
		const h = A && !r;
		return n.createElement(
			"div",
			{
				className: (0, m.A)(c.CapsuleDecorators, "CapsuleDecorators"),
			},
			g &&
				n.createElement(
					"span",
					{
						className: (0, m.A)(c.Banner, c.Blue),
					},
					n.createElement("img", {
						src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC",
						className: c.LinesImg,
					}),
					(0, Localize)("#Sale_InLibrary"),
				),
			h &&
				n.createElement(
					"span",
					{
						className: c.Banner,
					},
					n.createElement(o.qnF, {
						className: c.LinesImg,
					}),
					(0, Localize)("#Sale_OnWishlist"),
				),
			p && n.createElement(d.K, null),
		);
	},
);
