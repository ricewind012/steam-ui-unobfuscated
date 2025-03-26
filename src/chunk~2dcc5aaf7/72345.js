var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./39839.js");
var s = require(/*webcrack:missing*/ "./31958.js");
var o = require("./64608.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./83599.js");
import { GetConfiguredLocale } from "../../actual_src/utils/localization.js";
var u = require("./14145.js");
var d = u;
var A = require(/*webcrack:missing*/ "./55007.js");
var p = require("./46422.js");
var g = require("./34792.js");
var h = require("./43152.js");
const _C = new c.wd("ConsolePage");
const _ = {
	info: d.Info,
	warning: d.Warning,
	error: d.Error,
	assert: d.Assert,
	input: d.Input,
};
function f(e) {
	const { line: t, bShowTime: r, className: a, ...s } = e;
	return n.createElement(
		l.Z,
		{
			className: (0, i.A)(d.LineWrapper, a),
			...s,
		},
		r &&
			t.spew.length > 0 &&
			n.createElement(
				"pre",
				{
					className: d.Timestamp,
				},
				Intl.DateTimeFormat(GetConfiguredLocale(), {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: false,
				}).format(t.time) +
					"." +
					t.time.getMilliseconds().toString().padStart(3, "0"),
			),
		n.createElement(
			"pre",
			{
				className: d.SpewLine,
			},
			t.spew.length == 0 && n.createElement("span", null, "\xA0"),
			t.spew.map((e, t) =>
				n.createElement(
					"span",
					{
						key: t,
						className: (0, i.A)(d.Spew, _[e.type]),
					},
					(e.type == "input" ? "] " : "") + e.text,
				),
			),
		),
	);
}
function b(e) {
	const { onSubmit: t } = e;
	const [r, c] = n.useState("");
	const m = (0, a.o4)();
	const u = n.useRef(m.length);
	const [A, p] = n.useState([]);
	const g = n.useRef(-1);
	const h = n.useRef(undefined);
	const _ = n.useCallback((e) => {
		SteamClient.Console.GetAutocompleteSuggestions(e).then((e) => {
			_C.Debug("Suggestions", e);
			p(e);
			g.current = -1;
		});
	}, []);
	const f = n.useCallback(
		(e) => {
			c(e);
			_(e);
		},
		[_],
	);
	const b = n.useCallback(
		(e) => {
			f(e.currentTarget.value);
		},
		[f],
	);
	const y = n.useCallback(
		(e) => {
			if (r) {
				if (r.trim() === "clear_console") {
					a.dn.Reset();
				} else {
					SteamClient.Console.ExecCommand(r);
				}
				m.push(r);
				u.current = m.length;
				if (t) {
					t(r);
				}
				f("");
			}
			e.stopPropagation();
			e.preventDefault();
		},
		[r, f, t, m],
	);
	const S = n.useCallback(
		(e) => {
			let t = 0;
			if (e.key == "ArrowUp") {
				_C.Debug("Up");
				t = -1;
			} else if (e.key == "ArrowDown") {
				_C.Debug("Down");
				t = 1;
			}
			if (A.length == 0 && t != 0) {
				if (u.current >= m.length - 1 && t == 1) {
					c("");
					u.current = m.length;
				} else {
					const e = (0, s.OQ)(u.current + t, 0, m.length - 1);
					if (e != u.current) {
						u.current = e;
						c(m[u.current]);
					}
				}
				e.preventDefault();
				e.stopPropagation();
				return;
			}
			if (e.key == "Escape" || (e.key == "u" && e.ctrlKey)) {
				f("");
				e.preventDefault();
				e.stopPropagation();
				return;
			}
			if (e.key == "Tab") {
				_C.Debug("Tab");
				t = e.shiftKey ? -1 : 1;
			}
			if (t != 0) {
				const r = (0, s.OQ)(g.current + t, 0, A.length - 1);
				if (r != g.current) {
					g.current = r;
					u.current = m.length;
					c(A[r] + " ");
					e.preventDefault();
					e.stopPropagation();
					return;
				}
			}
		},
		[f, A, m],
	);
	const w = n.useCallback(
		(e, t) => {
			f(t + " ");
			h.current?.Focus();
			e.stopPropagation();
			e.preventDefault();
		},
		[f],
	);
	n.useEffect(() => {
		h.current?.Focus();
	}, []);
	return n.createElement(
		"form",
		{
			className: d.ConsoleInput,
			onSubmit: y,
		},
		A.length > 0 &&
			n.createElement(
				l.Z,
				{
					className: (0, i.A)(d.Suggestions, A.length == 0 && d.Empty),
				},
				A.slice(0, 9).map((e) =>
					n.createElement(
						"div",
						{
							key: e,
							className: d.Suggestion,
							onClick: (t) => {
								w(t, e);
							},
						},
						e,
					),
				),
			),
		n.createElement(o.pd, {
			ref: h,
			autoFocus: true,
			className: d.InputBox,
			value: r,
			onChange: b,
			onKeyDown: S,
		}),
	);
}
export function C() {
	const e = n.useRef(true);
	const [t, r] = n.useState();
	const s = n.useRef(undefined);
	const [o] = (0, g.VI)("show_timestamps_in_console");
	const c = (0, a.y9)();
	n.useEffect(() => {
		p.oy.SetConsoleEnabled();
		a.dn.StartListening();
	}, []);
	const m = n.useCallback((t) => {
		const r = Math.ceil(
			t.currentTarget.scrollTop + t.currentTarget.clientHeight,
		);
		if (!e.current && r >= t.currentTarget.scrollHeight) {
			_C.Debug("Pinning");
			e.current = true;
		} else if (e.current && r < t.currentTarget.scrollHeight) {
			_C.Debug("Unpinning");
			e.current = false;
		}
	}, []);
	const u = n.useCallback((t) => {
		if (!e.current) {
			_C.Debug("Pinning");
			e.current = true;
		}
	}, []);
	n.useLayoutEffect(() => {
		if (e.current) {
			_C.Debug("Pinned, scrolling to", s.current?.scrollHeight);
			s.current?.scrollTo(0, s.current?.scrollHeight);
		}
	});
	const [_, y] = n.useState(false);
	const S = n.useRef(false);
	const w = n.useCallback((e) => {
		if (S.current) {
			if (e.currentTarget.getSelection().isCollapsed) {
				_C.Debug("Resuming virtualization from selection change");
				y(false);
				S.current = false;
			}
		}
	}, []);
	n.useEffect(() => {
		if (t) {
			t.ownerDocument.addEventListener("selectionchange", w);
		}
		return () => {
			t?.ownerDocument?.removeEventListener("selectionchange", w);
		};
	}, [t, w]);
	const B = n.useCallback((e) => {
		_C.Debug("Pausing virtualization");
		y(true);
		S.current = false;
	}, []);
	const v = n.useCallback((e) => {
		if (e.currentTarget.ownerDocument.getSelection().isCollapsed) {
			_C.Debug("Resuming virtualization from mouse up");
			y(false);
			S.current = false;
		} else {
			_C.Debug("Waiting for selection change event");
			S.current = true;
		}
	}, []);
	const I = (0, A.Te)({
		count: c.length,
		getScrollElement: () => s.current,
		estimateSize: n.useCallback(() => parseInt(d.nRowHeight), []),
		overscan: _ ? c.length : 10,
	});
	const E = (0, h.u6)();
	return n.createElement(
		l.Z,
		{
			className: (0, i.A)(d.Console, E && d.KeyboardVisible),
			ref: r,
			"flow-children": "column",
		},
		n.createElement(
			"div",
			{
				className: (0, i.A)(d.ConsoleInner),
				ref: s,
				onScroll: m,
			},
			n.createElement(
				"div",
				{
					className: d.ListWrapper,
					style: {
						height: `${I.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					},
					onMouseDown: B,
					onMouseUp: v,
				},
				I.getVirtualItems().map((e) =>
					n.createElement(f, {
						key: e.index.toString(),
						bShowTime: o,
						line: c[e.index],
						style: {
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: `${e.size}px`,
							transform: `translateY(${e.start}px`,
						},
					}),
				),
			),
		),
		n.createElement(b, {
			onSubmit: u,
		}),
	);
}
