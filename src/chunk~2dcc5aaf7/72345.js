import { GetConfiguredLocale } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import { A as A_1 } from "./90765.js";
import a, { o4, y9 } from "./39839.js";
import s, { OQ } from "./31958.js";
import o from "./64608.js";
import l from "./69164.js";
import c from "./83599.js";
import u from "./14145.js";
import A, { Te } from "./55007.js";
import p from "./46422.js";
import g, { VI } from "./34792.js";
import h, { u6 } from "./43152.js";
const d = u;
const _C = new c.wd("ConsolePage");
const _ = {
	info: d.Info,
	warning: d.Warning,
	error: d.Error,
	assert: d.Assert,
	input: d.Input,
};
function F(e) {
	const { line, bShowTime, className, ...s } = e;
	return (
		<l.Z className={A_1(d.LineWrapper, className)} {...s}>
			{bShowTime && line.spew.length > 0 && (
				<pre className={d.Timestamp}>
					{`${Intl.DateTimeFormat(GetConfiguredLocale(), {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						hour12: false,
					}).format(line.time)}.${line.time
						.getMilliseconds()
						.toString()
						.padStart(3, "0")}`}
				</pre>
			)}
			<pre className={d.SpewLine}>
				{line.spew.length == 0 && <span>{"\xA0"}</span>}
				{line.spew.map((e, t) => (
					<span key={t} className={A_1(d.Spew, _[e.type])}>
						{(e.type == "input" ? "] " : "") + e.text}
					</span>
				))}
			</pre>
		</l.Z>
	);
}
function B(e) {
	const { onSubmit } = e;
	const [r, setR] = n.useState("");
	const m = o4();
	const URef = n.useRef(m.length);
	const [A, setA] = n.useState([]);
	const GRef = n.useRef(-1);
	const HRef = n.useRef(undefined);
	const _ = n.useCallback((e) => {
		SteamClient.Console.GetAutocompleteSuggestions(e).then((e) => {
			_C.Debug("Suggestions", e);
			setA(e);
			GRef.current = -1;
		});
	}, []);
	const f = n.useCallback(
		(e) => {
			setR(e);
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
				URef.current = m.length;
				if (onSubmit) {
					onSubmit(r);
				}
				f("");
			}
			e.stopPropagation();
			e.preventDefault();
		},
		[r, f, onSubmit, m],
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
				if (URef.current >= m.length - 1 && t == 1) {
					setR("");
					URef.current = m.length;
				} else {
					const e = OQ(URef.current + t, 0, m.length - 1);
					if (e != URef.current) {
						URef.current = e;
						setR(m[URef.current]);
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
				const r = OQ(GRef.current + t, 0, A.length - 1);
				if (r != GRef.current) {
					GRef.current = r;
					URef.current = m.length;
					setR(`${A[r]} `);
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
			f(`${t} `);
			HRef.current?.Focus();
			e.stopPropagation();
			e.preventDefault();
		},
		[f],
	);
	n.useEffect(() => {
		HRef.current?.Focus();
	}, []);
	return (
		<form className={d.ConsoleInput} onSubmit={y}>
			{A.length > 0 && (
				<l.Z className={A_1(d.Suggestions, A.length == 0 && d.Empty)}>
					{A.slice(0, 9).map((e) => (
						<div
							key={e}
							className={d.Suggestion}
							onClick={(t) => {
								w(t, e);
							}}
						>
							{e}
						</div>
					))}
				</l.Z>
			)}
			<o.pd
				ref={HRef}
				autoFocus
				className={d.InputBox}
				value={r}
				onChange={b}
				onKeyDown={S}
			/>
		</form>
	);
}
export function C() {
	const ERef = n.useRef(true);
	const [t, setT] = n.useState();
	const SRef = n.useRef(undefined);
	const [o] = VI("show_timestamps_in_console");
	const c = y9();
	n.useEffect(() => {
		p.oy.SetConsoleEnabled();
		a.dn.StartListening();
	}, []);
	const m = n.useCallback((t) => {
		const r = Math.ceil(
			t.currentTarget.scrollTop + t.currentTarget.clientHeight,
		);
		if (!ERef.current && r >= t.currentTarget.scrollHeight) {
			_C.Debug("Pinning");
			ERef.current = true;
		} else if (ERef.current && r < t.currentTarget.scrollHeight) {
			_C.Debug("Unpinning");
			ERef.current = false;
		}
	}, []);
	const u = n.useCallback((t) => {
		if (!ERef.current) {
			_C.Debug("Pinning");
			ERef.current = true;
		}
	}, []);
	n.useLayoutEffect(() => {
		if (ERef.current) {
			_C.Debug("Pinned, scrolling to", SRef.current?.scrollHeight);
			SRef.current?.scrollTo(0, SRef.current?.scrollHeight);
		}
	});
	const [_, set] = n.useState(false);
	const SRef_1 = n.useRef(false);
	const w = n.useCallback((e) => {
		if (SRef_1.current) {
			if (e.currentTarget.getSelection().isCollapsed) {
				_C.Debug("Resuming virtualization from selection change");
				set(false);
				SRef_1.current = false;
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
		set(true);
		SRef_1.current = false;
	}, []);
	const v = n.useCallback((e) => {
		if (e.currentTarget.ownerDocument.getSelection().isCollapsed) {
			_C.Debug("Resuming virtualization from mouse up");
			set(false);
			SRef_1.current = false;
		} else {
			_C.Debug("Waiting for selection change event");
			SRef_1.current = true;
		}
	}, []);
	const I = Te({
		count: c.length,
		getScrollElement: () => SRef.current,
		estimateSize: n.useCallback(() => parseInt(d.nRowHeight), []),
		overscan: _ ? c.length : 10,
	});
	const E = u6();
	return (
		<l.Z
			className={A_1(d.Console, E && d.KeyboardVisible)}
			ref={setT}
			flow-children="column"
		>
			<div className={A_1(d.ConsoleInner)} ref={SRef} onScroll={m}>
				<div
					className={d.ListWrapper}
					style={{
						height: `${I.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
					onMouseDown={B}
					onMouseUp={v}
				>
					{I.getVirtualItems().map((e) => (
						<F
							key={e.index.toString()}
							bShowTime={o}
							line={c[e.index]}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: `${e.size}px`,
								transform: `translateY(${e.start}px`,
							}}
						/>
					))}
				</div>
			</div>
			<B onSubmit={u} />
		</l.Z>
	);
}
