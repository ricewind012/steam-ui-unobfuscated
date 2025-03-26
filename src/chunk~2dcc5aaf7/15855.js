var n = require("./52912.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./69164.js");
import { BIsDragLeaveOutOfElement } from "../../actual_src/utils/domutils.js";
export const T = i.forwardRef(function (e, t) {
	const {
		rgAcceptedTypes: r,
		bAcceptsFiles: n,
		fnDragEnter: a,
		fnDragLeave: s,
		fnDragOver: o,
		fnDrop: l,
		...m
	} = e;
	const u = c({
		rgAcceptedTypes: r,
		bAcceptsFiles: n,
		fnDragEnter: a,
		fnDragLeave: s,
		fnDragOver: o,
		fnDrop: l,
	});
	return i.createElement("div", {
		...m,
		...u,
		className: "DropTarget " + m.className,
		ref: t,
	});
});
export const D = i.forwardRef(function (e, t) {
	const {
		rgAcceptedTypes: r,
		bAcceptsFiles: n,
		fnDragEnter: s,
		fnDragLeave: o,
		fnDragOver: l,
		fnDrop: m,
		...u
	} = e;
	const d = c({
		rgAcceptedTypes: r,
		bAcceptsFiles: n,
		fnDragEnter: s,
		fnDragLeave: o,
		fnDragOver: l,
		fnDrop: m,
	});
	return i.createElement(a.Z, {
		...u,
		...d,
		className: "DropTarget " + u.className,
		ref: t,
	});
});
function c(e) {
	const {
		rgAcceptedTypes: t,
		bAcceptsFiles: r,
		fnDragEnter: a,
		fnDragLeave: o,
		fnDragOver: l,
		fnDrop: c,
	} = e;
	const m = i.useRef(null);
	const u = i.useRef(false);
	const d = i.useRef([]);
	const A = i.useCallback(() => {
		let e = n.ZM.DragDropManager.GetDragData();
		if (!e && d.current) {
			const t = new Map();
			for (const e of d.current) {
				t.set(e, "");
			}
			e = {
				type: "html",
				mapData: t,
			};
		}
		return a(e, m.current.bFiles);
	}, [a]);
	return {
		onDragEnter: i.useCallback(
			(e) => {
				if (!u.current) {
					d.current = [];
					let i = n.ZM.DragDropManager.GetDragData();
					let s = r && e.dataTransfer.types.indexOf("Files") != -1;
					if ((i && t.indexOf(i.type) != -1) || s) {
						u.current = true;
					} else if (
						t.filter((t) => e.dataTransfer.types.includes(t)).length > 0
					) {
						d.current = t.filter((t) => e.dataTransfer.types.includes(t));
						u.current = true;
					} else {
						u.current = false;
					}
					if (u.current && a) {
						m.current = {
							bFiles: s,
						};
					}
					if (u.current) {
						e.preventDefault();
						e.stopPropagation();
					}
				}
			},
			[r, t, a],
		),
		onDragLeave: i.useCallback(
			(e) => {
				if (u.current) {
					if (!BIsDragLeaveOutOfElement(e)) {
						return;
					}
					u.current = false;
					e.preventDefault();
					e.stopPropagation();
					if (o) {
						o();
					}
				}
			},
			[o],
		),
		onDragOver: i.useCallback(
			(e) => {
				if (u.current) {
					if (m.current) {
						let e = A();
						m.current = null;
						if (!e) {
							u.current = false;
							return;
						}
					}
					e.preventDefault();
					e.stopPropagation();
					if (l) {
						l(e);
					}
				}
			},
			[l, A],
		),
		onDrop: i.useCallback(
			(e) => {
				if (u.current) {
					u.current = false;
					e.preventDefault();
					e.stopPropagation();
					let i = n.ZM.DragDropManager.GetDragData();
					if (i && t.indexOf(i.type) != -1) {
						if (c) {
							c(i, e);
						}
					} else if (r && e.dataTransfer.files.length != 0) {
						if (c) {
							c(null, e);
						}
					} else if (!i && d.current.length > 0 && c) {
						const t = new Map();
						for (const r of d.current) {
							t.set(r, e.dataTransfer.getData(r));
						}
						c(
							{
								type: "html",
								mapData: t,
							},
							e,
						);
					}
				}
			},
			[t, r, c],
		),
	};
}
