import { IsHTMLElement } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import i, { oH } from "./33572.js";
import a, { $2 } from "./96680.js";
import s, { Cg } from "./34629.js";
import o from "./53622.js";
import l from "./87913.js";
import c from "./46422.js";
import m from "./53453.js";
import u from "./34776.js";
import d from "./78475.js";
import A from "./45050.js";
import p from "./74416.js";
import g, { q3 } from "./90095.js";
import h from "./41230.js";
import C from "./63696.js";
import _ from "./78325.js";
import f from "./68120.js";
import b, { b$ } from "./90242.js";
import y, { bJ } from "./3524.js";
import S from "./69164.js";
import w, { AE } from "./20893.js";
import B from "./38964.js";
import v from "./61657.js";
import I from "./4690.js";
import E from "./15181.js";
import M, { u7, mQ, E5, kM, VX, WF, CB } from "./34665.js";
import T from "./10975.js";
import R from "./43014.js";
import k from "./44164.js";
import D from "./35488.js";
import N from "./16251.js";
import F, { DH } from "./43397.js";
import G, { wH } from "./34742.js";
import O, { A as A_1 } from "./90765.js";
import z, { OQ } from "./31958.js";
import x, { hL, uH } from "./52451.js";
import U from "./27752.js";
import V, { r_ as r_1, gM } from "./42983.js";
import H, { rP } from "./72476.js";
import j from "./55116.js";
import q from "./21105.js";
import Q from "./3963.js";
import Z from "./1918.js";
import { Te as Te_1 } from "./55007.js";
import re, { JP } from "./45967.js";
import { u6, Nr, a1, f0, I7, _1, FN } from "./43152.js";
import Ie from "./84252.js";
import Ee from "./67067.js";
import { on } from "./60115.js";
import Te from "./85243.js";
import { WR } from "./67686.js";
import ke from "./35425.js";
import De from "./80467.js";
import Fe from "./44080.js";
import Oe from "./57565.js";
import Pe from "./18057.js";
import { OU } from "./51076.js";
var n;
(function (e) {
	e[(e.BackSpace = 65288)] = "BackSpace";
	e[(e.Tab = 65289)] = "Tab";
	e[(e.Return = 65293)] = "Return";
	e[(e.Page_Up = 65365)] = "Page_Up";
	e[(e.Page_Down = 65366)] = "Page_Down";
})((n ||= {}));
var W = U;
const K = 44;
const X = 3;
function J(e) {
	let { steamItem, row, column, itemWidth, touched, ignoreFocusState } = e;
	const o = {
		"data-key-row": row,
		"data-key-col": column,
		"data-key": steamItem.item.name,
	};
	let l;
	let c = {
		position: "absolute",
		width: `${itemWidth}px`,
		height: "100%",
		top: row * K + "px",
		left: column * itemWidth + "px",
	};
	let t_type = steamItem.type;
	switch (t_type) {
		case "Emoticon_t": {
			o["data-key-handler"] = "emoticon";
			l = (
				<k.kS
					emoticon={steamItem.item}
					emoticonHoverStore={Q.Nb.EmoticonHoverStore}
					large
				/>
			);
			break;
		}
		case "Sticker_t": {
			o["data-key-handler"] = "sticker";
			l = <k.eE sticker={steamItem.item} />;
			break;
		}
		case "Effect_t": {
			o["data-key-handler"] = "roomeffect";
			l = (
				<k.P6
					className={W.Effect}
					effect={steamItem.item}
					roomEffectSettings={Z.B}
				/>
			);
		}
	}
	let u = touched ? W.Touched : undefined;
	return (
		<S.Z
			style={c}
			id={`KB.Steam_${t_type}_${row}.${column}`}
			focusable
			className={A_1(W.KeyboardSteamItemKey, u)}
			focusClassName={ignoreFocusState || W.Focused}
			{...o}
		>
			{l}
		</S.Z>
	);
}
function $(e) {
	let {
		steamItems,
		row,
		columnStart,
		columnEnd,
		itemWidth,
		keyDown,
		rgLayoutTouchCount,
		bAnyTrackpadActive,
	} = e;
	let c = [];
	for (let e = columnStart; e <= columnEnd; ++e) {
		let n = e * X + row;
		let t_n = steamItems[n];
		if (t_n) {
			let t =
				(rgLayoutTouchCount[r] != null && rgLayoutTouchCount[r][e] > 0) ||
				keyDown == t_n.item.name;
			let m = (
				<J
					key={n}
					steamItem={t_n}
					row={row}
					column={e}
					itemWidth={itemWidth}
					touched={t}
					ignoreFocusState={bAnyTrackpadActive}
				/>
			);
			c.push(m);
		}
	}
	return <>{c}</>;
}
function Ee_1(e) {
	let { filter, keyDown, rgLayoutTouchCount, bAnyTrackpadActive } = e;
	let ARef = C.useRef(undefined);
	C.useEffect(() => {
		return Q.Nb.EmoticonStore.UpdateEmoticonList();
	}, []);
	const s = Q.Nb.EmoticonStore.GetTimeReceivedNewestEmoticon();
	const o = Q.Nb.EmoticonStore.GetTimeReceivedForStickerOrEffect();
	const l = q3(() => {
		return Q.Nb.EmoticonStore.is_initialized;
	});
	const c = H.iA.logged_in;
	let [m, setM] = C.useState([]);
	C.useEffect(() => {
		let e = [];
		if (c) {
			switch (filter) {
				case "RecentSteamItems": {
					let t = Q.Nb.EmoticonStore.recent_emoticons.map((e) => {
						return {
							type: "Emoticon_t",
							item: e,
						};
					});
					let r = Q.Nb.EmoticonStore.recent_stickers.map((e) => {
						return {
							type: "Sticker_t",
							item: e,
						};
					});
					e = t.concat(r);
					break;
				}
				case "Emoticons": {
					e = Q.Nb.EmoticonStore.emoticon_list.map((e) => {
						return {
							type: "Emoticon_t",
							item: e,
						};
					});
					break;
				}
				case "Stickers": {
					e = Q.Nb.EmoticonStore.GetStickerList().map((e) => {
						return {
							type: "Sticker_t",
							item: e,
						};
					});
					break;
				}
				case "ChatFX": {
					e = Q.Nb.EmoticonStore.GetEffectList().map((e) => {
						return {
							type: "Effect_t",
							item: e,
						};
					});
				}
			}
			setM(e);
		}
	}, [c, filter, setM, l, s, o]);
	const d = Math.ceil(m.length / X);
	const A = Te_1({
		count: d,
		horizontal: true,
		getScrollElement: () => {
			return ARef.current;
		},
		estimateSize: C.useCallback(() => {
			return 58;
		}, []),
		overscan: 1,
	});
	let p = [];
	const h = A.getVirtualItems();
	const _ = A.getTotalSize();
	if (h.length != 0) {
		let e = h[0].index;
		let t = e + h.length;
		for (let a = 0; a < X; ++a) {
			let s = (
				<$
					key={a}
					steamItems={m}
					row={a}
					columnStart={e}
					columnEnd={t}
					itemWidth={58}
					rgLayoutTouchCount={rgLayoutTouchCount}
					keyDown={keyDown}
					bAnyTrackpadActive={bAnyTrackpadActive}
				/>
			);
			p.push(s);
		}
	}
	const f = {
		height: K * X + "px",
		width: `${_}px`,
	};
	return (
		<q.MS ref={ARef} scrollDirection="x">
			<j.g>
				{c && l && _ != 0 && (
					<S.Z className={W.KeyboardSteamItems} style={f} flow-children="grid">
						{p}
					</S.Z>
				)}
				{c && l && _ == 0 && (
					<S.Z className={W.KeyboardSteamItemsNotLoggedIn}>
						{(0, Localize)("#Keyboard_SteamItems_None")}
					</S.Z>
				)}
				{c && !l && (
					<S.Z className={W.KeyboardSteamItemsNotLoggedIn}>
						{(0, Localize)("#Keyboard_SteamItems_Loading")}
					</S.Z>
				)}
				{!c && (
					<S.Z className={W.KeyboardSteamItemsNotLoggedIn}>
						{(0, Localize)("#Keyboard_SteamItems_NotLoggedIn")}
					</S.Z>
				)}
			</j.g>
		</q.MS>
	);
}
var te;
const ne = {
	ㄱ: "ᄀ",
	ㄲ: "ᄁ",
	ㄴ: "ᄂ",
	ㅥ: "ᄔ",
	ㅦ: "ᄕ",
	ㅧ: "ᅛ",
	ㄵ: "ᅜ",
	ㄶ: "ᅝ",
	ㄷ: "ᄃ",
	ㄸ: "ᄄ",
	ㄹ: "ᄅ",
	ㄺ: "ꥤ",
	ㅪ: "ꥦ",
	ㄻ: "ꥨ",
	ㄼ: "ꥩ",
	ㄽ: "ꥬ",
	ㅀ: "ᄚ",
	ㅁ: "ᄆ",
	ㅮ: "ᄜ",
	ㅯ: "ꥱ",
	ㅱ: "ᄝ",
	ㅂ: "ᄇ",
	ㅲ: "ᄞ",
	ㅳ: "ᄠ",
	ㅃ: "ᄈ",
	ㅄ: "ᄡ",
	ㅴ: "ᄢ",
	ㅵ: "ᄣ",
	ㅶ: "ᄧ",
	ㅷ: "ᄩ",
	ㅸ: "ᄫ",
	ㅹ: "ᄬ",
	ㅅ: "ᄉ",
	ㅺ: "ᄭ",
	ㅻ: "ᄮ",
	ㅼ: "ᄯ",
	ㅽ: "ᄲ",
	ㅆ: "ᄊ",
	ㅾ: "ᄶ",
	ㅿ: "ᅀ",
	ㅇ: "ᄋ",
	ㆀ: "ᅇ",
	ㆁ: "ᅌ",
	ㅈ: "ᄌ",
	ㅉ: "ᄍ",
	ㅊ: "ᄎ",
	ㅋ: "ᄏ",
	ㅌ: "ᄐ",
	ㅍ: "ᄑ",
	ㆄ: "ᅗ",
	ㅎ: "ᄒ",
	ㆅ: "ᅘ",
	ㆆ: "ᅙ",
	ㅏ: "ᅡ",
	ㅐ: "ᅢ",
	ㅑ: "ᅣ",
	ㅒ: "ᅤ",
	ㅓ: "ᅥ",
	ㅔ: "ᅦ",
	ㅕ: "ᅧ",
	ㅖ: "ᅨ",
	ㅗ: "ᅩ",
	ㅘ: "ᅪ",
	ㅙ: "ᅫ",
	ㅚ: "ᅬ",
	ㅛ: "ᅭ",
	ㆇ: "ᆄ",
	ㆈ: "ᆅ",
	ㆉ: "ᆈ",
	ㅜ: "ᅮ",
	ㅝ: "ᅯ",
	ㅞ: "ᅰ",
	ㅟ: "ᅱ",
	ㅠ: "ᅲ",
	ㆊ: "ᆑ",
	ㆋ: "ᆒ",
	ㆌ: "ᆔ",
	ㅡ: "ᅳ",
	ㅢ: "ᅴ",
	ㅣ: "ᅵ",
	ㆍ: "ᆞ",
	ㆎ: "ᆡ",
};
const Ie_1 = (e) => {
	const { onCommitText, onForwardKeyEvent, onDeleteSurroundingText } = e;
	u7(onCommitText, onForwardKeyEvent, onDeleteSurroundingText);
	return null;
};
const Ae_1 = (e) => {
	const { layout } = e;
	mQ(layout);
	return null;
};
const Se_1 = (e) => {
	const { layout, bHasTrackpadHover, rgLayoutTouchCount } = e;
	const i = E5(layout);
	const { strText, nCursorPos, bVisible } = kM();
	const { strText: strText_1, bVisible: bVisible_1 } = VX();
	const {
		vecCandidates,
		nCursorPos: nCursorPos_1,
		nPageSize,
		nCursorInPage,
		bIsCursorVisible,
		bVisible: bVisible_2,
	} = WF();
	let [f, setF] = C.useState("");
	const y = C.useCallback(() => {
		setF("");
	}, []);
	const w = nCursorPos - (layout == 34 ? 1 : 0);
	const B = strText.slice(0, w);
	const T =
		bVisible_1 &&
		(layout == 2 ||
			layout == 3 ||
			layout == 3 ||
			layout == 31 ||
			layout == 3 ||
			layout == 31 ||
			layout == 34);
	const k = bVisible && strText !== "" && !T && layout != 32;
	const N = bVisible_1 && layout != 12 && layout != 33;
	if (i) {
		return (
			<S.Z
				key="KB.IME"
				className={A_1(W.KeyboardRow, "Row_IME", W.KeyboardImeUnavailable)}
				flow-children="row"
				{...E.C3}
			>
				<span>{(0, Localize)("#Keyboard_IME_Not_available")}</span>
			</S.Z>
		);
	}
	if (!N && !k && !bVisible_2) {
		return null;
	}
	const F = strText_1.split(" (")[0];
	let G = (e) => {
		return e;
	};
	if (layout == 32 || layout == 34) {
		G = (e) => {
			return e.split(" ")[0];
		};
	}
	const P = Math.floor(nCursorPos_1 / nPageSize) * nPageSize;
	const z = bVisible_2 && nCursorPos_1 >= nPageSize;
	const x = bVisible_2 && vecCandidates.length - P >= nPageSize;
	const U =
		c.oy.ActiveNavigationSourceType !== v.Vz.GAMEPAD || bHasTrackpadHover;
	let V = bHasTrackpadHover ? W.FocusedIgnored : W.Focused;
	return (
		<S.Z
			key="KB.IME"
			className={A_1(W.KeyboardRow, "Row_IME", "Row_-1")}
			flow-children="row"
			{...E.C3}
			navEntryPreferPosition={I.iU.MAINTAIN_X}
		>
			{N && (
				<S.Z
					key="KB.Aux"
					autoFocus={false}
					focusable={false}
					className={A_1(W.KeyboardImeAuxText)}
				>
					<span>{(T ? B : "") + F}</span>
				</S.Z>
			)}
			{k && (
				<S.Z
					key="KB.Preedit"
					autoFocus={false}
					focusable={false}
					className={A_1(W.KeyboardImePreeditText)}
				>
					<span>{strText}</span>
				</S.Z>
			)}
			{bVisible_2 &&
				vecCandidates.slice(P, P + nPageSize).map((e, t) => {
					const r = bIsCursorVisible && t == nCursorPos_1 - P;
					const i =
						rgLayoutTouchCount[-1] && rgLayoutTouchCount[-1][t] > 0
							? W.Touched
							: undefined;
					return (
						<S.Z
							key={`KB.LUT.${t}`}
							autoFocus={r && U}
							focusable
							className={A_1(
								`Col_${t}`,
								W.KeyboardKeyHitArea,
								r ? W.KeyboardImeLutKeyCursor : undefined,
							)}
							onGamepadFocus={() => {
								return setF(`KB.LUT.${t}`);
							}}
							onGamepadBlur={y}
							data-key={`IME_LUT_Select_${t}`}
							data-key-row={-1}
							data-key-col={t}
						>
							<S.Z
								className={A_1(
									i,
									W.KeyboardKey,
									W.KeyboardImeLutKey,
									f === `KB.LUT.${t}` ? V : undefined,
								)}
							>
								<span>{G(e)}</span>
							</S.Z>
						</S.Z>
					);
				})}
			{z && (
				<S.Z
					key="KB.LUT.Up"
					autoFocus={false}
					focusable
					className={A_1(W.KeyboardKeyHitArea, W.KeyboardImeLutNavSize)}
					onGamepadFocus={() => {
						return setF("KB.LUT.Up");
					}}
					onGamepadBlur={y}
					data-key="IME_LUT_Up"
				>
					<S.Z
						className={A_1(
							W.KeyboardKey,
							W.KeyboardImeLutNav,
							W.KeyboardImeLutKey,
							f === "KB.LUT.Up" ? V : undefined,
						)}
					>
						{e.bShowGlyphs && (
							<o.W
								className={W.KeyboardImeLutActionGlyph}
								button={R.g4.LeftBumper}
							/>
						)}
						{D.KaratLeft({})}
					</S.Z>
				</S.Z>
			)}
			{x && (
				<S.Z
					key="KB.LUT.Down"
					autoFocus={false}
					focusable
					className={A_1(W.KeyboardKeyHitArea, W.KeyboardImeLutNavSize)}
					onGamepadFocus={() => {
						return setF("KB.LUT.Down");
					}}
					onGamepadBlur={y}
					data-key="IME_LUT_Down"
				>
					<S.Z
						className={A_1(
							W.KeyboardKey,
							W.KeyboardImeLutNav,
							W.KeyboardImeLutKey,
							f === "KB.LUT.Down" ? V : undefined,
						)}
					>
						{D.KaratRight({})}
						{e.bShowGlyphs && (
							<o.W
								className={W.KeyboardImeLutActionGlyph}
								button={R.g4.RightBumper}
							/>
						)}
					</S.Z>
				</S.Z>
			)}
		</S.Z>
	);
};
const Oe_1 = (e) => {
	const {
		VirtualKeyboardManager,
		onActiveElementChanged,
		onActiveElementClicked,
	} = e;
	hL(VirtualKeyboardManager.OnActiveElementChanged, onActiveElementChanged);
	hL(VirtualKeyboardManager.OnActiveElementClicked, onActiveElementClicked);
	return null;
};
var le;
var ce;
function me(e) {
	if ((e & le.NonHeld) === le.Off) {
		return le.Stuck;
	} else {
		return le.Off;
	}
}
function ue(e) {
	const t = e & le.NonHeld;
	if (t === le.Off) {
		return le.OneShot;
	} else if (t === le.OneShot) {
		return le.Stuck;
	} else {
		return le.Off;
	}
}
function de(e) {
	return (e & le.On) != 0;
}
function Ae(e) {
	const t = e & le.NonHeld;
	return (t === le.OneShot ? le.Off : t) | (e & le.Held);
}
function pe(e) {
	switch (u.O.GetKeyboardLayoutSettings().currentLayout) {
		case 22:
		case 23: {
			return e.toLocaleUpperCase("TR");
		}
		default: {
			return e.toLocaleUpperCase();
		}
	}
}
function Ge_1(e) {
	const t = e.bExtendRight ? 0 : e.extendedChars.length - 1;
	let r = c.oy.ActiveNavigationSourceType === v.Vz.GAMEPAD;
	const NRef = C.useRef(undefined);
	C.useEffect(() => {
		if (r) {
			NRef.current.TakeFocus();
		}
	}, [r]);
	let i = A_1(
		W.KeyboardExtendedRow,
		e.bExtendRight ? W.Right : W.Left,
		e.parentRow == 0 ? W.TopRow : undefined,
	);
	return (
		<S.Z
			key={`KB.ExtRow_${e.extendedChars[t]}`}
			className={i}
			onMoveLeft={() => {
				return true;
			}}
			onMoveRight={() => {
				return true;
			}}
			onMoveUp={() => {
				return true;
			}}
			onMoveDown={() => {
				return true;
			}}
			focusable={false}
		>
			{e.extendedChars.map((i, a) => {
				return (
					<S.Z
						key={`KB.Ext_${i}`}
						navRef={a === t && r ? NRef : null}
						autoFocus={a === t && r}
						focusable
						data-key={i}
						data-key-col={a}
						data-key-is-literal={1}
						parent-row={e.parentRow}
						parent-col={e.parentCol}
						className={A_1(
							W.KeyboardExtendedKey,
							e.nExtendedKeyTouched == a && W.Touched,
						)}
						focusClassName={e.children || W.Focused}
					>
						<span
							style={{
								pointerEvents: "none",
							}}
						>
							{e.bIsUpperCase ? pe(e.extendedChars[a]) : e.extendedChars[a]}
						</span>
					</S.Z>
				);
			})}
			{e.children}
		</S.Z>
	);
}
function he(e, t) {
	if (t === A.C.Default || t === A.C.Invalid) {
		return e
			.replace("*DEFAULT_PLACEHOLDER*", "️")
			.replace("%TINT_PLACEHOLDER%", "");
	}
	let r = e.replace("*DEFAULT_PLACEHOLDER*", "");
	const n = ["zero_pad", "🏻", "🏼", "🏽", "🏾", "🏿"];
	if (r.includes("%TINT_PLACEHOLDER%")) {
		return r.replace("%TINT_PLACEHOLDER%", n[t]);
	} else {
		return r + n[t];
	}
}
function Ce(e) {
	let t = [];
	let r = [];
	for (let n = A.C.Light; n <= A.C.Dark; n++) {
		t.push(he(e.emoji, n));
		r.push(n);
	}
	let n = he(e.emoji, A.C.Default);
	if (e.bExtendRight) {
		t.unshift(n);
		r.unshift(A.C.Default);
	} else {
		t.push(n);
		r.push(A.C.Default);
	}
	const i = e.bExtendRight ? 0 : t.length - 1;
	let a = c.oy.ActiveNavigationSourceType === v.Vz.GAMEPAD;
	const SRef = C.useRef(undefined);
	C.useEffect(() => {
		if (a) {
			SRef.current.TakeFocus();
		}
	}, [a]);
	let o = A_1(
		W.KeyboardExtendedRow,
		e.bExtendRight ? W.Right : W.Left,
		e.parentRow == 0 ? W.TopRow : undefined,
	);
	return (
		<S.Z
			key={`KB.EmojiTintRow_${t[i]}`}
			className={o}
			onMoveLeft={() => {
				return true;
			}}
			onMoveRight={() => {
				return true;
			}}
			onMoveUp={() => {
				return true;
			}}
			onMoveDown={() => {
				return true;
			}}
			focusable={false}
		>
			{t.map((n, o) => {
				return (
					<S.Z
						key={`KB.Ext_${n}`}
						navRef={o === i && a ? SRef : null}
						autoFocus={o === i && a}
						focusable
						data-key={n}
						data-key-col={o}
						data-emoji-index={e.emojiIndex}
						data-emoji-tint={r[o]}
						parent-row={e.parentRow}
						parent-col={e.parentCol}
						className={A_1(
							W.KeyboardExtendedKey,
							e.nExtendedKeyTouched == o && W.Touched,
						)}
						focusClassName={e.children || W.Focused}
					>
						<span>{t[o]}</span>
					</S.Z>
				);
			})}
			{e.children}
		</S.Z>
	);
}
function _e(e) {
	return wH(
		(function (e) {
			return {
				x: {
					min: (t = e.getBoundingClientRect()).left,
					max: t.right,
				},
				y: {
					min: t.top,
					max: t.bottom,
				},
			};
			var t;
		})(e),
	);
}
function Fe_1(e) {
	const { EmojiStore, mapEmoji, bAnyTrackpadActive } = e;
	let r_length = mapEmoji.length;
	let a = mapEmoji[0].length;
	let s = r_length * 44;
	return (
		<f.xA
			columnCount={a}
			overscanColumnCount={2}
			rowCount={r_length}
			width={870}
			height={s}
			columnWidth={58}
			rowHeight={44}
			cellRenderer={function (i) {
				if (
					mapEmoji[i.rowIndex] === undefined ||
					mapEmoji[i.rowIndex][i.columnIndex] === undefined
				) {
					return null;
				}
				const a = mapEmoji[i.rowIndex][i.columnIndex];

				const { column, row } = a;

				const l = EmojiStore.FullEmojiList[a.index].key;
				const c = EmojiStore.FullEmojiList[a.index].nNumTints === 1;
				const m = c ? he(l, EmojiStore.GetEmojiTint(a.index)) : l;
				const u = e.longPressRow === row && e.longPressCol === column;
				const d =
					(e.rgLayoutTouchCount[o] && e.rgLayoutTouchCount[o][s] > 0) ||
					(e.keyDown.key == m &&
						e.keyDown.keyRow == row &&
						e.keyDown.keyCol == column)
						? W.Touched
						: undefined;
				let A;
				let p = true;
				if (c && u && e.holdTarget !== null) {
					const e_holdTarget = e.holdTarget;
					let r = _e(e_holdTarget);
					let n = _e(e_holdTarget.ownerDocument.body);
					p = r.x < n.x;
					A = (
						<Ce
							emoji={l}
							emojiIndex={a.index}
							parentRow={row}
							parentCol={column}
							bExtendRight={p}
							nExtendedKeyTouched={e.nExtendedKeyTouched}
						>
							{e.holdSourceTouchpad}
						</Ce>
					);
				}
				return (
					<S.Z
						key={`KB.${a.category.key}_Emoji_${row}.${column}`}
						id={`KB.${a.category.key}_Emoji_${row}.${column}`}
						style={i.style}
						focusable
						data-key={m}
						data-key-row={row}
						data-key-col={column}
						data-emoji-index={a.index}
						data-category-index={a.category.categoryIndex}
						className={A_1(W.KeyboardEmojiKey, d)}
						focusClassName={bAnyTrackpadActive ? W.FocusedIgnored : W.Focused}
						onGamepadFocus={e.onGamepadFocus}
					>
						<span>{m}</span>
						{A}
					</S.Z>
				);
			}}
			className={W.EmojiKeyboardGrid}
			style={{
				overflowY: "hidden",
			}}
		/>
	);
}
function Be_1(e) {
	const t = e.windowInstance?.IsVRWindow();
	const r = JP();
	const n = {
		Paste: !t,
		AllowMove: !t,
		Arrows: !t || r.bShowArrowKeys,
		DoneInsteadOfHide: t && r.bShowDoneKey,
	};
	return (
		<H.QO.Consumer>
			{(t) => {
				return <Ye configContext={t} {...e} {...n} />;
			}}
		</H.QO.Consumer>
	);
}
(function (e) {
	e[(e.Off = 0)] = "Off";
	e[(e.OneShot = 1)] = "OneShot";
	e[(e.Stuck = 2)] = "Stuck";
	e[(e.NonHeld = 3)] = "NonHeld";
	e[(e.Held = 4)] = "Held";
	e[(e.On = 7)] = "On";
})((le ||= {}));
(function (e) {
	e[(e.Layout_Standard = 0)] = "Layout_Standard";
	e[(e.Layout_Numeric = 1)] = "Layout_Numeric";
	e[(e.Layout_Emoji = 2)] = "Layout_Emoji";
	e[(e.Layout_SteamItems = 3)] = "Layout_SteamItems";
})((ce ||= {}));
let Ye = class extends C.Component {
	static {
		te = this;
	}
	static contextType = M.E3;
	static s_keyCapTypeData = {
		[V.dI.Character]: [
			W.KeyboardCharacterKey,
			W.KeyboardCharacterKeySize,
			true,
		],
		[V.dI.Half]: [W.KeyboardHalfKey, W.KeyboardHalfKeySize, true],
		[V.dI.Tab]: [W.KeyboardTabKey, W.KeyboardTabKeySize, true],
		[V.dI.Meta]: [W.KeyboardMetaKey, W.KeyboardMetaKeySize, true],
		[V.dI.Close]: [W.KeyboardCharacterKey, W.KeyboardMetaKeySize, true],
		[V.dI.Caps]: [W.KeyboardCapsKey, W.KeyboardCapsKeySize, true],
		[V.dI.Backspace]: [W.KeyboardBackspace, W.KeyboardBackspaceSize, true],
		[V.dI.Enter]: [W.KeyboardEnter, W.KeyboardEnterSize, true],
		[V.dI.LeftShift]: [W.KeyboardLeftShift, W.KeyboardLeftShiftSize, true],
		[V.dI.RightShift]: [W.KeyboardRightShift, W.KeyboardRightShiftSize, true],
		[V.dI.Spacebar]: [W.KeyboardSpacebar, W.KeyboardSpacebarSize, true],
		[V.dI.Spacer25]: [W.KeyboardSpacer, W.KeyboardSpacerSize, false],
	};
	static s_keyToggleData = {
		Shift: "Shift",
		CapsLock: "CapsLock",
		Control: "Control",
		Alt: "Alt",
		AltGr: "AltGr",
	};
	static s_rgNumericLayout = [
		["7", "8", "9"],
		["4", "5", "6"],
		["1", "2", "3"],
		[
			"0",
			".",
			{
				key: "Backspace",
				label: "#Key_Backspace",
				type: V.dI.Backspace,
				centerLeftActionButton: R.g4.X,
			},
		],
	];
	static s_rgCombinedSteamAndEmojiRowHeader = [
		{
			key: "SwitchKeys_RecentSteamItems",
			label: D.ClockOutline,
			type: V.dI.Character,
			emojiCategoryIndex: 9,
			bSteamItemCategory: true,
		},
		{
			key: "SwitchKeys_Emoticons",
			label: () => {
				return <k.ZT />;
			},
			type: V.dI.Character,
			emojiCategoryIndex: 10,
			bSteamItemCategory: true,
		},
		{
			key: "SwitchKeys_Stickers",
			label: () => {
				return <k.qm />;
			},
			type: V.dI.Character,
			emojiCategoryIndex: 11,
			bSteamItemCategory: true,
		},
		{
			key: "SwitchKeys_ChatFX",
			label: () => {
				return <k.Mj />;
			},
			type: V.dI.Character,
			emojiCategoryIndex: 12,
			bSteamItemCategory: true,
		},
		{
			key: "",
			label: "",
			type: V.dI.Spacer25,
		},
		{
			key: "SwitchKeys_Recent",
			label: D.Recent,
			type: V.dI.Character,
			emojiCategoryIndex: 0,
		},
		{
			key: "SwitchKeys_People",
			label: D.Emoji,
			type: V.dI.Character,
			emojiCategoryIndex: 1,
		},
		{
			key: "SwitchKeys_Activity",
			label: D.Activities,
			type: V.dI.Character,
			emojiCategoryIndex: 2,
		},
		{
			key: "SwitchKeys_Animals",
			label: D.Nature,
			type: V.dI.Character,
			emojiCategoryIndex: 3,
		},
		{
			key: "SwitchKeys_Food",
			label: D.Food,
			type: V.dI.Character,
			emojiCategoryIndex: 4,
		},
		{
			key: "SwitchKeys_Travel",
			label: D.Travel,
			type: V.dI.Character,
			emojiCategoryIndex: 5,
		},
		{
			key: "SwitchKeys_Objects",
			label: D.Objects,
			type: V.dI.Character,
			emojiCategoryIndex: 6,
		},
		{
			key: "SwitchKeys_Symbols",
			label: D.Symbols,
			type: V.dI.Character,
			emojiCategoryIndex: 7,
		},
		{
			key: "SwitchKeys_Flags",
			label: D.Flags,
			type: V.dI.Character,
			emojiCategoryIndex: 8,
		},
	];
	static s_rgEmojiRowHeader = [
		{
			key: "SwitchKeys_Recent",
			label: D.Recent,
			type: V.dI.Character,
			emojiCategoryIndex: 0,
		},
		{
			key: "SwitchKeys_People",
			label: D.Emoji,
			type: V.dI.Character,
			emojiCategoryIndex: 1,
		},
		{
			key: "SwitchKeys_Activity",
			label: D.Activities,
			type: V.dI.Character,
			emojiCategoryIndex: 2,
		},
		{
			key: "SwitchKeys_Animals",
			label: D.Nature,
			type: V.dI.Character,
			emojiCategoryIndex: 3,
		},
		{
			key: "SwitchKeys_Food",
			label: D.Food,
			type: V.dI.Character,
			emojiCategoryIndex: 4,
		},
		{
			key: "SwitchKeys_Travel",
			label: D.Travel,
			type: V.dI.Character,
			emojiCategoryIndex: 5,
		},
		{
			key: "SwitchKeys_Objects",
			label: D.Objects,
			type: V.dI.Character,
			emojiCategoryIndex: 6,
		},
		{
			key: "SwitchKeys_Symbols",
			label: D.Symbols,
			type: V.dI.Character,
			emojiCategoryIndex: 7,
		},
		{
			key: "SwitchKeys_Flags",
			label: D.Flags,
			type: V.dI.Character,
			emojiCategoryIndex: 8,
		},
	];
	static s_rgSteamItemsBottomRow = (e) => {
		return [
			{
				key: "SwitchKeys_ABC",
				label: "ABC",
				type: V.dI.Meta,
			},
			{
				key: " ",
				label: " ",
				type: V.dI.Spacebar,
				leftActionButton: R.g4.Y,
			},
			{
				key: "Backspace",
				label: "#Key_Backspace",
				type: V.dI.Backspace,
				leftActionButton: R.g4.X,
			},
			{
				key: "Enter",
				label: "#Key_Enter",
				type: V.dI.Enter,
				leftActionButton: R.g4.RightTrigger,
			},
			e.Arrows
				? [
						{
							key: "ArrowLeft",
							label: D.KaratLeft,
							type: V.dI.Meta,
						},
						{
							key: "ArrowUp",
							label: D.KaratUp,
							type: V.dI.Meta,
						},
					]
				: undefined,
			e.Arrows
				? [
						{
							key: "ArrowRight",
							label: D.KaratRight,
							type: V.dI.Meta,
						},
						{
							key: "ArrowDown",
							label: D.KaratDown,
							type: V.dI.Meta,
						},
					]
				: undefined,
			[
				e.DoneInsteadOfHide
					? {
							key: "VKDone",
							label: D.Checkmark,
							type: V.dI.Close,
						}
					: {
							key: "VKClose",
							label: D.HideKeyboard,
							type: V.dI.Close,
						},
				e.AllowMove
					? {
							key: "VKMove",
							label: "#Key_Move",
							type: V.dI.Close,
						}
					: undefined,
			],
		];
	};
	static s_rgSteamItemCategories = [
		"RecentSteamItems",
		"Emoticons",
		"Stickers",
		"ChatFX",
	];
	m_emojiCategories;
	InitEmojiCategories(e) {
		if (this.m_emojiCategories) {
			return;
		}
		this.m_emojiCategories = [];
		let t = [];
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "😀";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "💆";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "🐵";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "🍇";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "🌍";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "👓";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "💋";
			}),
		);
		t.push(
			e.FullEmojiList.findIndex((e) => {
				return e.key === "🏁";
			}),
		);
		const r = [
			"People",
			"Activity",
			"Animals",
			"Food",
			"Travel",
			"Objects",
			"Symbols",
			"Flags",
		];
		this.m_emojiCategories.push({
			key: "Recent",
			startIndex: 0,
			startColumn: 0,
			categoryIndex: 0,
		});
		let n = Math.ceil(e.GetMaxRecentEmoji() / te.s_numEmojiRows);
		for (let e = 0; e < t.length; e++) {
			this.m_emojiCategories.push({
				key: r[e],
				startIndex: t[e],
				startColumn: n,
				categoryIndex: e + 1,
			});
			if (e < t.length - 1) {
				n += Math.ceil((t[e + 1] - t[e]) / te.s_numEmojiRows);
			}
		}
	}
	WithEmojiStore(e) {
		(() => {
			this.InitEmojiCategories(d._);
			e(d._);
		})();
	}
	static s_rgExtendedKeys = {
		a: "áàâãäåæāą",
		c: "ćçč",
		e: "éèêëēėę",
		i: "íìîïįī",
		l: "ł",
		n: "ńñ",
		o: "óòôõöøōœ",
		s: "śßš",
		u: "úùûüū",
		y: "ÿ",
		z: "źžż",
		0: "°",
		"-": "–—·",
		"=": "≈≠",
		".": "…",
		"!": "¡",
		"?": "¿",
		"'": "‘’",
		'"': "“”„»«",
		$: "¢€£¥₱₩",
		"%": "‰",
		"&": "§",
	};
	static s_initialFocusRow = 2;
	static s_initialFocusColumn = 5;
	static s_numEmojiRows = 3;
	static s_EmojiKeyWidth = 58;
	static s_longPressThreshold = 450;
	static s_longPressRepeatThreshold = 200;
	m_keyboardDiv = null;
	m_keyboardNavRef = C.createRef();
	m_emojiHeaderMapRefs = new Map();
	m_emojiScrollRef = C.createRef();
	m_resizeObserver;
	m_trackpadInput = new B.E();
	m_leftTrackpad = {
		active: false,
		x: 0,
		y: 0,
		lastElement: undefined,
	};
	m_rightTrackpad = {
		active: false,
		x: 0,
		y: 0,
		lastElement: undefined,
	};
	m_nBackspaceTimer = null;
	m_nLongPressTimer = null;
	m_mapTouched = new Set();
	constructor(e) {
		super(e);
		this.state = {
			toggleStates: {
				Shift: le.Off,
				CapsLock: le.Off,
				Control: le.Off,
				Alt: le.Off,
				AltGr: le.Off,
			},
			rgLayoutTouchCount: [],
			nExtendedKeyTouched: -1,
			layoutState: ce.Layout_Standard,
			standardLayout: r_1(),
			curEmojiCategoryIndex: 0,
			bIsInMultitouch: false,
			watchdogTimer: null,
			holdTarget: null,
			holdSource: v.Vz.UNKNOWN,
			longPressRow: null,
			longPressCol: null,
			keyDown: {
				key: null,
				keyRow: -1,
				keyCol: -1,
			},
			bLeftTrackpadActive: false,
			bRightTrackpadActive: false,
			bLeftTrackpadDown: false,
			bRightTrackpadDown: false,
			bLongPressSentKey: false,
			bShowLayoutName: false,
		};
	}
	m_timerShowLayoutName;
	SetLayoutNameTimeout() {
		if (this.m_timerShowLayoutName) {
			clearTimeout(this.m_timerShowLayoutName);
		}
		this.m_timerShowLayoutName = window.setTimeout(() => {
			this.m_timerShowLayoutName = 0;
			this.setState({
				bShowLayoutName: false,
			});
		}, 2000);
	}
	OnLayoutChanged(e) {
		setTimeout(() => {
			return this.props.VirtualKeyboardManager.RestoreVirtualKeyboardForLastActiveElement();
		}, 1);
		this.SetLayoutNameTimeout();
		this.setState({
			standardLayout: r_1(),
			bShowLayoutName: true,
		});
	}
	TypeKey(e) {
		for (
			let t = e;
			t != null && t !== this.m_keyboardDiv;
			t = t.parentElement
		) {
			const e = {
				strKey: t.getAttribute("data-key"),
				strKeycode: t.getAttribute("data-keycode"),
				strIsLiteral: t.getAttribute("data-key-is-literal"),
				strKeyHandler: t.getAttribute("data-key-handler"),
				strEmojiIndex: t.getAttribute("data-emoji-index"),
				strEmojiTint: t.getAttribute("data-emoji-tint"),
				strShifted: t.getAttribute("data-key-shifted"),
				strDeadKeyNext: t.getAttribute("data-dead-key-next"),
				strDeadKeyCombined: t.getAttribute("data-dead-key-combined"),
			};
			if (e.strKey != null) {
				return this.TypeKeyInternal(e);
			}
		}
	}
	TypeKeyInternal(e) {
		let {
			strKey,
			strKeycode,
			strIsLiteral,
			strKeyHandler,
			strEmojiIndex,
			strEmojiTint,
			strShifted,
			strDeadKeyNext,
			strDeadKeyCombined,
		} = e;
		const u = te.s_keyToggleData[t];
		if (u) {
			if (u === "CapsLock") {
				this.setState((e, t) => {
					return {
						...e,

						toggleStates: {
							...e.toggleStates,
							[u]: me(e.toggleStates[u]),
						},
					};
				});
			} else {
				this.setState((e, t) => {
					return {
						...e,

						toggleStates: {
							...e.toggleStates,
							[u]: ue(e.toggleStates[u]),
						},
					};
				});
			}
		} else {
			if (strKey.startsWith("SwitchKeys_")) {
				if (strKey.endsWith("ABC")) {
					this.setState({
						layoutState: ce.Layout_Standard,
					});
				} else if (strKey.endsWith("123")) {
					this.setState({
						layoutState: ce.Layout_Numeric,
					});
				} else if (strKey.endsWith("Steam")) {
					this.WithEmojiStore((e) => {
						if (this.props.bStandalone) {
							let e = 0;
							this.setState({
								layoutState: ce.Layout_Emoji,
								curEmojiCategoryIndex: e,
							});
						} else {
							let e =
								te.s_rgSteamItemCategories.indexOf("RecentSteamItems") +
								this.m_emojiCategories.length;
							this.setState({
								layoutState: ce.Layout_SteamItems,
								curEmojiCategoryIndex: e,
							});
						}
					});
				} else if (strKey.endsWith("Layout")) {
					gM(this.OnLayoutChanged);
				} else if (strKey.endsWith("Emoji")) {
					this.setState({
						layoutState: ce.Layout_Emoji,
					});
				} else {
					const e = strKey.replace("SwitchKeys_", "");
					let r = te.s_rgSteamItemCategories.indexOf(e);
					this.WithEmojiStore((t) => {
						if (r != -1) {
							r += this.m_emojiCategories.length;
							this.setState({
								layoutState: ce.Layout_SteamItems,
								curEmojiCategoryIndex: r,
							});
						} else {
							const t = this.m_emojiCategories.find(({ key }) => {
								return key === e;
							});
							if (t !== undefined) {
								this.OnSelectEmojiCategory(t);
								this.setState({
									layoutState: ce.Layout_Emoji,
									curEmojiCategoryIndex: t.categoryIndex,
								});
							}
						}
					});
				}
			} else if (strKey.startsWith("IME_")) {
				if (strKey.endsWith("LUT_Down")) {
					if (this.context) {
						this.context.process_key_event(n.Page_Down, 0, 0);
					}
				} else if (strKey.endsWith("LUT_Up")) {
					if (this.context) {
						this.context.process_key_event(n.Page_Up, 0, 0);
					}
				} else if (strKey.startsWith("IME_LUT_Select_")) {
					CB(
						this.context,
						this.state.standardLayout.layout,
						parseInt(strKey.substring(15)),
					);
				}
			} else {
				const e = parseInt(strEmojiIndex);
				if (
					this.state.layoutState === ce.Layout_Emoji &&
					!isNaN(e) &&
					(d._.AddRecentEmoji(e), strEmojiTint !== null)
				) {
					let t = parseInt(strEmojiTint);
					d._.AddEmojiTint(e, t);
				}
				if (
					strKey.length === 1 &&
					(!!de(this.state.toggleStates.Shift) ||
						!!de(this.state.toggleStates.CapsLock)) &&
					!strShifted
				) {
					strKey = pe(strKey);
				}
				if (strKeyHandler) {
					this.HandleSpecialBehaviorForKey(strKey, strKeyHandler);
				} else if (strDeadKeyNext) {
					this.props.VirtualKeyboardManager.HandleDeadKeyDown(
						strKey,
						strDeadKeyNext,
						strDeadKeyCombined,
					);
				} else if (strKey === "VKMove") {
					this.RotateWindowPosition();
				} else if (
					strKey.length != 1 &&
					strKey !== "Backspace" &&
					strKey !== "Enter" &&
					strKey !== "Tab"
				) {
					this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
						strKey,
						de(this.state.toggleStates.Shift),
					);
				} else if (strIsLiteral || this.state.layoutState === ce.Layout_Emoji) {
					if (this.context) {
						this.context.reset();
					}
					this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
						strKey,
						de(this.state.toggleStates.Shift),
					);
				} else {
					const e = async (e, t) => {
						let i = false;
						if (this.context) {
							let a;
							switch (e) {
								case "Backspace": {
									a = n.BackSpace;
									break;
								}
								case "Tab": {
									a = n.Tab;
									break;
								}
								case "Enter": {
									a = n.Return;
									break;
								}
								default: {
									a = e.charCodeAt(0);
								}
							}
							const s = parseFloat(strKeycode) || 0;
							const o = t ? IBus.ModifierType.SHIFT_MASK : 0;
							i = !!(await this.context.process_key_event(a, s, o));
						}
						if (!i) {
							this.props.VirtualKeyboardManager.HandleVirtualKeyDown(e, t);
						}
					};
					e(strKey, de(this.state.toggleStates.Shift));
				}
			}
			this.setState((e, t) => {
				return {
					...e,

					toggleStates: {
						...e.toggleStates,
						Shift: Ae(e.toggleStates.Shift),
						Control: Ae(e.toggleStates.Control),
						Alt: Ae(e.toggleStates.Alt),
						AltGr: Ae(e.toggleStates.AltGr),
					},
				};
			});
		}
	}
	OnForwardKeyEvent(e, t, r) {
		const i = (r & IBus.ModifierType.SHIFT_MASK) != 0;
		let a;
		switch (e) {
			case n.BackSpace: {
				a = "Backspace";
				break;
			}
			case n.Tab: {
				a = "Tab";
				break;
			}
			case n.Return: {
				a = "Enter";
				break;
			}
			default: {
				a = String.fromCharCode(e);
			}
		}
		this.props.VirtualKeyboardManager.HandleVirtualKeyDown(a, i);
	}
	OnDeleteSurroundingText(e, t) {
		if (e == -t) {
			for (let e = 0; e < t; ++e) {
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					"Backspace",
					false,
				);
			}
		}
	}
	OnCommitText(e) {
		e = e.replace(/./g, (e) => {
			return ne[e] || e;
		});
		this.props.VirtualKeyboardManager.HandleVirtualKeyDown(e, false);
	}
	OnActiveElementChangedOrClicked(e) {
		if (this.context) {
			this.context.reset();
		}
	}
	HandleSpecialBehaviorForKey(e, t) {
		switch (t) {
			case "emoticon": {
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					`:${e}:`,
					de(this.state.toggleStates.Shift),
				);
				break;
			}
			case "sticker": {
				l.LN.TrackStickerUsage(e, Date.now() / 1000);
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					`/sticker ${e}\r`,
					de(this.state.toggleStates.Shift),
				);
				break;
			}
			case "roomeffect": {
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					`/roomeffect ${e}\r`,
					de(this.state.toggleStates.Shift),
				);
			}
		}
	}
	KeyDown(e) {
		const { target } = e;
		if (IsHTMLElement(target)) {
			T.eZ.PlayNavSound(T.PN.Typing, true);
			const r = parseFloat(target.getAttribute("data-key-row"));
			const n = parseFloat(target.getAttribute("data-key-col"));
			const i = {
				key: target.getAttribute("data-key"),
				keyRow: r,
				keyCol: n,
			};
			this.setState({
				keyDown: i,
			});
			const a = "clientX" in e;
			const s = target.hasAttribute("data-extended-chars");
			const o = parseFloat(target.getAttribute("data-emoji-index"));
			const l =
				target.hasAttribute("data-emoji-index") &&
				d._.FullEmojiList[o].nNumTints != 0;
			if (this.state.holdTarget) {
				this.TypeKey(this.state.holdTarget);
				this.CancelLongPressTimer();
				this.DismissLongPress();
				this.ClearHoldTarget();
			}
			if (s || l || l || a) {
				let r = e;
				this.StartLongPressTimer(target, a ? v.Vz.MOUSE : r.detail.source);
				target.addEventListener("mouseleave", this.OnKeyMouseLeave);
			} else {
				this.TypeKey(target);
			}
			e.stopPropagation();
			e.preventDefault();
		}
	}
	KeyUp(e) {
		const { target } = e;
		if (IsHTMLElement(target)) {
			const r = {
				key: null,
				keyRow: -1,
				keyCol: -1,
			};
			this.setState({
				keyDown: r,
			});
			const n = target.hasAttribute("parent-row")
				? parseFloat(target.getAttribute("parent-row") || "")
				: null;
			const i = target.hasAttribute("parent-col")
				? parseFloat(target.getAttribute("parent-col") || "")
				: null;
			let a =
				n !== null &&
				i !== null &&
				this.state.longPressRow === n &&
				this.state.longPressCol === i;
			if (!this.state.bLongPressSentKey) {
				if (target === this.state.holdTarget || a) {
					this.TypeKey(target);
				} else {
					this.TypeKey(this.state.holdTarget);
				}
				e.stopPropagation();
				e.preventDefault();
			}
		}
		this.CancelLongPressTimer();
		this.DismissLongPress();
		this.ClearHoldTarget();
	}
	OnMouseDown(e) {
		this.KeyDown(e);
	}
	OnMouseUp(e) {
		this.KeyUp(e);
	}
	OnSelectEmojiCategory(e) {
		let t = d._.GetRecentEmoji();
		let r = e.key != "Recent" ? Math.ceil(t.length / te.s_numEmojiRows) : 0;
		let n =
			e.key != "Recent"
				? Math.ceil(d._.GetMaxRecentEmoji() / te.s_numEmojiRows)
				: 0;
		let i = (e.startColumn - n + r) * te.s_EmojiKeyWidth;
		if (this.m_emojiScrollRef.current) {
			this.m_emojiScrollRef.current.firstChild.scrollLeft = i;
		}
	}
	OnSelectSiblingEmojiCategory(e) {
		this.WithEmojiStore((t) => {
			const r = this.m_emojiCategories.length;
			const n = te.s_rgSteamItemCategories.length;
			let i;
			let a = this.state.curEmojiCategoryIndex;
			a += e;
			switch (this.state.layoutState) {
				case ce.Layout_SteamItems:
					{
						let e = a - r;
						if (e >= 0) {
							if (e >= n) {
								a = 0;
								let e = this.m_emojiCategories[a];
								this.setState({
									layoutState: ce.Layout_Emoji,
									curEmojiCategoryIndex: a,
								});
								this.OnSelectEmojiCategory(e);
								i = e.key;
							} else {
								this.setState({
									layoutState: ce.Layout_SteamItems,
									curEmojiCategoryIndex: a,
								});
								i = te.s_rgSteamItemCategories[e];
							}
						}
					}
					break;
				case ce.Layout_Emoji: {
					if (a < 0 && !this.props.bStandalone) {
						a = r + n - 1;
						this.setState({
							layoutState: ce.Layout_SteamItems,
							curEmojiCategoryIndex: a,
						});
						i = te.s_rgSteamItemCategories[n - 1];
					} else if (a < r && a >= 0) {
						let e = this.m_emojiCategories[a];
						this.setState({
							layoutState: ce.Layout_Emoji,
							curEmojiCategoryIndex: a,
						});
						this.OnSelectEmojiCategory(e);
						i = e.key;
					}
				}
			}
			let s = i ? this.m_emojiHeaderMapRefs.get("SwitchKeys_" + i) : undefined;
			if (s && s.current) {
				s.current.TakeFocus();
			}
		});
	}
	HandleTrackpadClick(e, t) {
		let r = null;
		let n = v.Vz.UNKNOWN;
		switch (e) {
			case v.pR.LPAD_CLICK:
			case v.pR.TRIGGER_LEFT: {
				r = this.getElementFromPointWorkaround(
					this.m_leftTrackpad.x,
					this.m_leftTrackpad.y,
				);
				this.setState({
					bLeftTrackpadDown: t,
				});
				n = v.Vz.LPAD;
				this.OnTrackpadHover(this.m_leftTrackpad.lastElement, r);
				break;
			}
			case v.pR.RPAD_CLICK:
			case v.pR.TRIGGER_RIGHT: {
				r = this.getElementFromPointWorkaround(
					this.m_rightTrackpad.x,
					this.m_rightTrackpad.y,
				);
				this.setState({
					bRightTrackpadDown: t,
				});
				n = v.Vz.RPAD;
				this.OnTrackpadHover(this.m_rightTrackpad.lastElement, r);
			}
		}
		if (r) {
			AE(r, t ? "vgp_onbuttondown" : "vgp_onbuttonup", {
				button: v.pR.OK,
				source: n,
				is_repeat: false,
			});
		}
	}
	OnGamepadButtonDown(e) {
		switch (e.detail.button) {
			case v.pR.OK: {
				this.KeyDown(e);
				break;
			}
			case v.pR.OPTIONS: {
				this.DispatchEventByDataKey(" ", true);
				break;
			}
			case v.pR.LPAD_CLICK: {
				this.HandleTrackpadClick(e.detail.button, true);
				break;
			}
			case v.pR.TRIGGER_LEFT: {
				if (this.m_leftTrackpad.active && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, true);
				} else {
					this.setState((e, t) => {
						return {
							...e,

							toggleStates: {
								...e.toggleStates,
								Shift: le.Stuck,
							},
						};
					});
				}
				break;
			}
			case v.pR.RPAD_CLICK: {
				this.HandleTrackpadClick(e.detail.button, true);
				break;
			}
			case v.pR.TRIGGER_RIGHT: {
				if (this.m_rightTrackpad.active && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, true);
				} else {
					this.DispatchEventByDataKey("Enter", true);
				}
				break;
			}
			case v.pR.SECONDARY: {
				if (e.detail.source == v.Vz.KEYBOARD_SIMULATOR) {
					return;
				}
				this.DispatchEventByDataKey("Backspace", true);
				this.StartBackspaceTimer();
				break;
			}
			case v.pR.DIR_UP:
			case v.pR.DIR_DOWN:
			case v.pR.DIR_LEFT:
			case v.pR.DIR_RIGHT: {
				break;
			}
			case v.pR.BUMPER_LEFT: {
				this.TypeKeyInternal({
					strKey: "IME_LUT_Up",
				});
				this.OnSelectSiblingEmojiCategory(-1);
				break;
			}
			case v.pR.BUMPER_RIGHT: {
				this.TypeKeyInternal({
					strKey: "IME_LUT_Down",
				});
				this.OnSelectSiblingEmojiCategory(1);
				break;
			}
			case v.pR.START: {
				this.RotateWindowPosition();
			}
		}
	}
	OnGamepadButtonUp(e) {
		switch (e.detail.button) {
			case v.pR.OK: {
				this.KeyUp(e);
				break;
			}
			case v.pR.RPAD_CLICK: {
				this.HandleTrackpadClick(e.detail.button, false);
				break;
			}
			case v.pR.TRIGGER_RIGHT: {
				if (this.state.bRightTrackpadDown && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, false);
				} else {
					this.DispatchEventByDataKey("Enter", false);
				}
				break;
			}
			case v.pR.LPAD_CLICK: {
				this.HandleTrackpadClick(e.detail.button, false);
				break;
			}
			case v.pR.TRIGGER_LEFT: {
				if (this.state.bLeftTrackpadDown && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, false);
				} else {
					this.setState((e, t) => {
						return {
							...e,

							toggleStates: {
								...e.toggleStates,
								Shift: le.Off,
							},
						};
					});
				}
				break;
			}
			case v.pR.LSTICK_CLICK: {
				this.setState((e, t) => {
					return {
						...e,

						toggleStates: {
							...e.toggleStates,
							CapsLock: me(e.toggleStates.CapsLock),
						},
					};
				});
				break;
			}
			case v.pR.SECONDARY: {
				this.DispatchEventByDataKey("Backspace", false);
				this.CancelBackpaceTimer();
				this.DismissBackpaceTimer();
				break;
			}
			case v.pR.OPTIONS: {
				this.DispatchEventByDataKey(" ", false);
			}
		}
	}
	DispatchEventByDataKey(e, t) {
		const r =
			this.m_keyboardDiv?.ownerDocument.defaultView ??
			this.props.windowInstance.BrowserWindow;
		let n = r?.document.querySelector('[data-key="' + e + '"]');
		return (
			!!n &&
			(AE(n, t ? "vgp_onbuttondown" : "vgp_onbuttonup", {
				button: v.pR.OK,
				source: v.Vz.GAMEPAD,
				is_repeat: false,
			}),
			true)
		);
	}
	HandleNavOut() {
		this.props.VirtualKeyboardManager.HandleNavOut(
			this.props.windowInstance.BrowserWindow,
		);
		return true;
	}
	LongPressTimerExpired() {
		if (this.state.holdTarget) {
			const e = this.state.holdTarget;
			const t = parseFloat(e.getAttribute("data-key-row") || "");
			const r = parseFloat(e.getAttribute("data-key-col") || "");
			const n = e.getAttribute("data-key") == "Backspace";
			this.setState({
				longPressRow: t,
				longPressCol: r,
				bLongPressSentKey: n,
			});
			if (!n) {
				this.m_keyboardNavRef.current.PushState();
			}
			if (n) {
				this.StartLongPressTimer(
					this.state.holdTarget,
					this.state.holdSource,
					true,
				);
				this.TypeKey(e);
			} else {
				this.CancelLongPressTimer();
			}
		}
	}
	DismissLongPress() {
		const e =
			(this.state.longPressRow || this.state.longPressCol) &&
			!this.state.bLongPressSentKey;
		this.setState(
			{
				longPressRow: null,
				longPressCol: null,
				bLongPressSentKey: false,
			},
			e
				? () => {
						return this.m_keyboardNavRef.current.PopState();
					}
				: null,
		);
	}
	StartLongPressTimer(e, t, r = false) {
		const n = this.m_nLongPressTimer;
		if (n) {
			window.clearTimeout(n);
		}
		const i = window.setTimeout(
			() => {
				this.LongPressTimerExpired();
			},
			r ? te.s_longPressRepeatThreshold : te.s_longPressThreshold,
		);
		this.m_nLongPressTimer = i;
		this.setState({
			holdTarget: e,
			holdSource: t,
		});
	}
	StartBackspaceTimer(e = false) {
		const t = this.m_nBackspaceTimer;
		if (t) {
			window.clearTimeout(t);
		}
		const r = window.setTimeout(
			() => {
				this.BackspaceTimeExpired();
			},
			e ? te.s_longPressRepeatThreshold : te.s_longPressThreshold,
		);
		this.m_nBackspaceTimer = r;
	}
	BackspaceTimeExpired() {
		this.StartBackspaceTimer(true);
		this.TypeKeyInternal({
			strKey: "Backspace",
		});
		this.setState({
			bLongPressSentKey: true,
		});
	}
	DismissBackpaceTimer() {
		this.setState({
			bLongPressSentKey: false,
		});
	}
	CancelBackpaceTimer() {
		const e = this.m_nBackspaceTimer;
		if (e) {
			clearTimeout(e);
		}
		this.setState({
			bLongPressSentKey: false,
		});
		this.m_nBackspaceTimer = null;
	}
	OnKeyMouseLeave(e) {
		this.CancelLongPressTimer();
		this.ClearHoldTarget();
	}
	ClearHoldTarget() {
		if (this.state.holdTarget) {
			this.state.holdTarget.removeEventListener(
				"mouseleave",
				this.OnKeyMouseLeave,
			);
		}
		this.setState({
			holdTarget: null,
			holdSource: v.Vz.UNKNOWN,
		});
	}
	CancelLongPressTimer() {
		if (this.m_nLongPressTimer) {
			clearTimeout(this.m_nLongPressTimer);
		}
		this.m_nLongPressTimer = null;
	}
	ToggleStatesUpdate(e, t, r) {
		const n = {};
		for (const i in e) {
			const a = i;
			const e_a = e[a];
			const o = (t && t[a]) || false;
			n[a] = o
				? e_a | le.Held
				: e_a & le.Held
					? r
						? le.Off
						: a === "CapsLock"
							? me(e_a)
							: ue(e_a)
					: e_a;
		}
		return n;
	}
	UpdateTouchState(e, t) {
		let r = 0;
		let n = [];
		let i = -1;
		let a = null;
		for (let s = 0; s < t.length; ++s) {
			const t_s = t[s];
			const t_s_target = t_s.target;
			if (IsHTMLElement(t_s_target)) {
				const t = parseFloat(t_s_target.getAttribute("data-key-row") || "");
				const s = parseFloat(t_s_target.getAttribute("data-key-col") || "");
				if (
					this.state.longPressRow !== null &&
					this.state.longPressCol !== null
				) {
					const t = e.elementFromPoint(t_s.clientX, t_s.clientY);
					const r = t?.hasAttribute("parent-row")
						? parseFloat(t?.getAttribute("parent-row") || "")
						: null;
					const n = t?.hasAttribute("parent-col")
						? parseFloat(t?.getAttribute("parent-col") || "")
						: null;
					if (r !== null && n !== null) {
						const e = parseFloat(t?.getAttribute("data-key-col") || "");
						i = e;
					}
				}
				if (n[t] === undefined) {
					n[t] = [];
				}
				n[t][s] ||= 0;
				++n[t][s];
				++r;
				const c = t_s_target.getAttribute("data-key");
				if (c == null) {
					continue;
				}
				const m = te.s_keyToggleData[c];
				if (m) {
					if (a === null) {
						a = {};
					}
					a[m] = true;
				} else if (
					this.m_mapTouched.has(t_s_target) &&
					this.state.longPressRow === null &&
					this.state.longPressCol === null
				) {
					this.StartLongPressTimer(t_s_target, v.Vz.TOUCH);
				}
			}
		}
		this.setState((e, t) => {
			return {
				...e,
				rgLayoutTouchCount: n,
				nExtendedKeyTouched: i,

				toggleStates: this.ToggleStatesUpdate(
					e.toggleStates,
					a,
					e.bIsInMultitouch,
				),

				bIsInMultitouch: r !== 0 && (r !== 1 || e.bIsInMultitouch),
			};
		});
	}
	HandleTouchStart(e) {
		if (!IsHTMLElement(e.target)) {
			return;
		}
		const t = e.target.ownerDocument;
		if (!t) {
			return;
		}
		const r = u.O.HapticSettings;
		m.l.PlaySteamDeckHaptic(2, r.eHapticType, r.unIntensity, r.ndBGain);
		if (this.state.holdTarget) {
			this.CancelLongPressTimer();
			this.DismissLongPress();
			this.ClearHoldTarget();
			this.m_mapTouched.delete(this.state.holdTarget);
		}
		for (let t = 0; t < e.changedTouches.length; ++t) {
			const r = e.changedTouches[t].target;
			if (IsHTMLElement(r)) {
				this.m_mapTouched.add(r);
			}
		}
		if (!H.TS.ON_DECK) {
			T.eZ.PlayNavSound(T.PN.Typing, true);
		}
		this.UpdateTouchState(t, e.touches);
	}
	HandleTouchMove(e) {
		if (this.state.longPressRow !== null && this.state.longPressCol !== null) {
			if (!IsHTMLElement(e.target)) {
				return;
			}
			const t = e.target.ownerDocument;
			if (!t) {
				return;
			}
			this.UpdateTouchState(t, e.touches);
		}
		e.preventDefault();
		e.stopPropagation();
	}
	IsCharacterFromActiveExtendedMenu(e) {
		const t = e.hasAttribute("parent-row")
			? parseFloat(e.getAttribute("parent-row") || "")
			: null;
		const r = e.hasAttribute("parent-col")
			? parseFloat(e.getAttribute("parent-col") || "")
			: null;
		return (
			t !== null &&
			r !== null &&
			this.state.longPressRow === t &&
			this.state.longPressCol === r
		);
	}
	HandleTouchEnd(e) {
		if (!IsHTMLElement(e.target)) {
			return;
		}
		const t = e.target.ownerDocument;
		if (t) {
			for (let r = 0; r < e.changedTouches.length; ++r) {
				const n = e.changedTouches[r];
				const n_target = n.target;
				const a = this.ElementFromTouch(t, n);
				if (IsHTMLElement(a) && IsHTMLElement(n_target)) {
					const e = this.IsCharacterFromActiveExtendedMenu(a);
					if (this.m_mapTouched.has(n_target) || e) {
						const t = n_target.getAttribute("data-key");
						if (t == null) {
							continue;
						}
						const r = te.s_keyToggleData[t];
						if (
							!this.state.bLongPressSentKey &&
							(!r || !this.state.bIsInMultitouch)
						) {
							this.TypeKey(e ? a : n_target);
						}
					}
				}
				this.m_mapTouched.delete(n_target);
			}
			this.CancelLongPressTimer();
			this.DismissLongPress();
			this.ClearHoldTarget();
			this.UpdateTouchState(t, e.touches);
			e.preventDefault();
			e.stopPropagation();
		}
	}
	HandleTouchCancel(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	ElementFromTouch(e, t) {
		const r = e.elementsFromPoint(t.clientX, t.clientY);
		let n = r.length > 0 ? r[0] : undefined;
		if (n?.id === "MouseHoverBlockerHack") {
			n = r.length > 1 ? r[1] : undefined;
		}
		return n;
	}
	OnEmojiFocus(e) {
		const { target } = e;
		if (IsHTMLElement(target)) {
			const e = parseInt(target.getAttribute("data-category-index"));
			this.setState({
				curEmojiCategoryIndex: e,
			});
		}
	}
	GetEmojiGridProps() {
		const te_s_numEmojiRows = te.s_numEmojiRows;
		let t = [];
		for (let r = 0; r < te_s_numEmojiRows; ++r) {
			t.push([]);
		}
		let r;
		let n = d._.GetRecentEmoji();
		this.m_emojiCategories.forEach((r, i) => {
			let a = 0;
			let s = r.key === "Recent";
			const o =
				i === this.m_emojiCategories.length - 1
					? d._.FullEmojiList.length
					: this.m_emojiCategories[i + 1].startIndex;
			const l = s ? n.length : o;
			for (let i = 0; i < te_s_numEmojiRows; ++i) {
				let o = r.startIndex + i;
				let c = 0;
				while (o < l) {
					const l = s ? n[o] : o;
					const m = c + r.startColumn;
					let u = {
						index: l,
						emoji: d._.FullEmojiList[l],
						category: r,
						row: i,
						column: m,
					};
					t[i].push(u);
					o += te_s_numEmojiRows;
					c++;
					a = Math.max(c, a);
				}
				for (; c < a; ++c) {
					t[i].push(undefined);
				}
			}
		});
		if (this.state.holdSource == v.Vz.LPAD) {
			r = (
				<We
					className={W.ExtendedRowTrackpad}
					pressed={this.state.bLeftTrackpadDown}
					input={this.m_trackpadInput}
					trackpad={v.pR.LPAD_TOUCH}
					fnCallback={this.OnLeftTrackpadAnalog}
				/>
			);
		} else if (this.state.holdSource == v.Vz.RPAD) {
			r = (
				<We
					className={W.ExtendedRowTrackpad}
					pressed={this.state.bRightTrackpadDown}
					input={this.m_trackpadInput}
					trackpad={v.pR.RPAD_TOUCH}
					fnCallback={this.OnRightTrackpadAnalog}
				/>
			);
		}
		return {
			EmojiStore: d._,
			mapEmoji: t,
			keyDown: this.state.keyDown,
			bAnyTrackpadActive: this.BHasTrackpadHover(),
			rgLayoutTouchCount: this.state.rgLayoutTouchCount,
			longPressRow: this.state.longPressRow,
			longPressCol: this.state.longPressCol,
			nExtendedKeyTouched: this.state.nExtendedKeyTouched,
			holdTarget: this.state.holdTarget,
			holdSourceTouchpad: r,
			onGamepadFocus: this.OnEmojiFocus,
		};
	}
	GetKeyboardThemeClassName() {
		return p.iG.GetKeyboardSkinTheme() ?? "DefaultTheme";
	}
	GetKeyClassNameForTheme(e, t, r) {
		let n = "Col_" + r;
		if (e instanceof Object) {
			let t = e;
			if (t.type != V.dI.Spacebar) {
				return n + " KeyTheme_" + t.key;
			} else {
				return null;
			}
		}
		return n + " KeyTheme_" + e;
	}
	BHasTrackpadHover() {
		return this.state.bLeftTrackpadActive || this.state.bRightTrackpadActive;
	}
	FilterButtonForTrackpad(e) {
		if (
			(!this.state.bLeftTrackpadActive || e != R.g4.LeftTrigger) &&
			(!this.state.bRightTrackpadActive || e != R.g4.RightTrigger)
		) {
			return e;
		}
	}
	StopResizeListening() {
		if (this.m_keyboardDiv) {
			this.m_resizeObserver.unobserve(this.m_keyboardDiv);
			this.m_keyboardDiv = null;
			this.m_resizeObserver = null;
		}
	}
	SetKeyboardDiv(e) {
		this.StopResizeListening();
		this.m_keyboardDiv = e;
		if (this.m_keyboardDiv) {
			this.m_resizeObserver =
				new this.m_keyboardDiv.ownerDocument.defaultView.ResizeObserver(
					this.UpdateWindowSize,
				);
			this.m_resizeObserver.observe(this.m_keyboardDiv);
		}
	}
	UpdateWindowSize() {
		if (this.m_keyboardDiv) {
			if (this.props.bStandalone) {
				const e = DH(this.m_keyboardDiv);
				const t = this.props.windowInstance.BrowserWindow;
				const r = Math.floor(e * this.m_keyboardDiv.offsetWidth);
				const n = Math.floor(e * this.m_keyboardDiv.offsetHeight);
				t.SteamClient.Window.GetWindowDimensions().then((e) => {
					if (t && e.height < n) {
						t.SteamClient.Window.ResizeTo(r, n, true);
					}
				});
			} else if (this.props.bModal) {
				this.m_keyboardDiv.getBoundingClientRect();
				this.props.VirtualKeyboardManager.SelectBestModalPosition(
					this.m_keyboardDiv,
				);
			}
		}
	}
	RotateWindowPosition() {
		this.props.VirtualKeyboardManager.RotateKeyboardLocation(
			this.props.bStandalone,
			this.props.windowInstance.BrowserWindow,
		);
	}
	BIsKeyEnabled(e) {
		switch (e) {
			case "SwitchKeys_Layout": {
				if (u.O.GetKeyboardLayoutSettings().selectedLayouts.length == 1) {
					return false;
				}
				break;
			}
			case "VKMove": {
				return !!this.props.bStandalone || !!this.props.bModal;
			}
		}
		return true;
	}
	FilterKeyCapSpec(e) {
		if (e instanceof Array) {
			let t = [null, null, null, null];
			for (let r = 0; r < e.length && r < t.length; ++r) {
				let e_r = e[r];
				t[r] = this.BIsKeyEnabled(e_r instanceof Object ? e_r.key : e_r)
					? e_r
					: null;
			}
			return t;
		}
		if (this.BIsKeyEnabled(e instanceof Object ? e.key : e)) {
			return e;
		} else {
			return null;
		}
	}
	BIsVR() {
		return this.props.windowInstance?.IsVRWindow();
	}
	BShowGlyphs() {
		return !this.BIsVR();
	}
	GetLayoutOptions() {
		return this.props;
	}
	RenderKey(e, t, r, n, i, a, s) {
		const { VirtualKeyboardManager } = this.props;
		const { toggleStates, rgLayoutTouchCount, nExtendedKeyTouched } =
			this.state;
		const u = de(this.state.toggleStates.Shift);
		const d = de(this.state.toggleStates.CapsLock);
		const A = de(this.state.toggleStates.AltGr);
		const p = (!u || !d) && (u || d);
		const g = this.BShowGlyphs();
		if (!(n = this.FilterKeyCapSpec(n))) {
			return null;
		}
		const h = (e) => {
			return e ? (e instanceof Object ? e.key : e) : "";
		};
		const _ = (e) => {
			return typeof e == "function"
				? e({})
				: typeof e == "string" && e.startsWith("#")
					? (0, Localize)(e)
					: e;
		};
		const [f, y, S, w, B] = ((e) => {
			if (A) {
				if (e instanceof Array) {
					if (e.length > 2) {
						if (e.length > 3) {
							if (u) {
								return [e[3], e[2], null, null, true];
							} else {
								return [e[2], e[3], null, null, false];
							}
						} else {
							return [e[2], null, null, null, false];
						}
					} else {
						return ["", null, null, null, false];
					}
				}
				{
					const t = e instanceof Object ? e.key : e;
					if (t?.length > 1) {
						return [e, null, null, null, false];
					} else {
						return ["", null, null, null, false];
					}
				}
			}
			if (e instanceof Array) {
				if (u) {
					return [
						e[1] ? e[1] : e[0],
						e[1] ? e[0] : e[1],
						e.length > 3 ? e[3] : null,
						e.length > 2 ? e[2] : null,
						!!e[1],
					];
				} else {
					return [
						e[0],
						e.length > 1 ? e[1] : null,
						e.length > 2 ? e[2] : null,
						e.length > 3 ? e[3] : null,
						false,
					];
				}
			} else {
				return [e, null, null, null, false];
			}
		})(n);
		const I = (e) => {
			return e === null
				? null
				: e instanceof Object
					? e.key === "Enter" && VirtualKeyboardManager.GetEnterKeyLabel()
						? _(VirtualKeyboardManager.GetEnterKeyLabel())
						: p && !B && typeof e.label == "string" && e.label.length === 1
							? _(pe(e.label))
							: e.type == V.dI.Spacebar && this.state.bShowLayoutName
								? (0, Localize)(this.state.standardLayout.locToken)
								: _(e.label)
					: e;
		};
		const [E, M, [T, R, k]] =
			f instanceof Object
				? [
						f.key,
						I(f),
						(f.type != null && te.s_keyCapTypeData[f.type]) || [
							undefined,
							undefined,
							true,
						],
					]
				: [
						f,
						p && !B && f?.length === 1 ? pe(f) : f,
						[undefined, undefined, true],
					];
		const D = I(y);
		const N = I(S);
		const F = I(w);
		const G = s && i < s / 2;
		let P = null;
		if (E?.length == 1 && E !== " ") {
			let e = E;
			if (f instanceof Object && f.extended_keys !== undefined) {
				e = f.extended_keys;
			}
			if (n instanceof Array && n.length > 1) {
				if (A) {
					e += h(n[1]);
					e += h(n[0]);
				} else {
					e += h(n[1]);
					if (n.length > 2) {
						e += h(n[2]);
					}
					if (n.length > 3) {
						e += h(n[3]);
					}
				}
			}
			e += te.s_rgExtendedKeys[E] ?? "";
			P = e.split("").filter((e, t, r) => {
				return r.indexOf(e) === t;
			});
			if (!G) {
				P = P.reverse();
			}
		}
		const z =
			f instanceof Object && f.dead
				? E == VirtualKeyboardManager.GetDeadKeyPending()
					? W.KeyboardKeyDeadKeyActive
					: W.KeyboardKeyDeadKey
				: undefined;
		const x =
			y instanceof Object && y.dead
				? y.key == VirtualKeyboardManager.GetDeadKeyPending()
					? W.InactiveLabelDeadKeyActive
					: W.InactiveLabelDeadKey
				: undefined;
		const U = f instanceof Object ? f.dead_next : null;
		const H = f instanceof Object ? f.dead_combined : null;
		const j =
			g && f instanceof Object
				? this.FilterButtonForTrackpad(f.leftActionButton)
				: undefined;
		const q =
			g && f instanceof Object
				? this.FilterButtonForTrackpad(f.centerLeftActionButton)
				: undefined;
		const Q =
			g && f instanceof Object
				? this.FilterButtonForTrackpad(f.rightActionButton)
				: undefined;
		const Z = f instanceof Object ? f.emojiCategoryIndex : undefined;
		const Y =
			f instanceof Object && Z === this.state.curEmojiCategoryIndex
				? W.KeyboardCategoryKeyHighlight
				: undefined;
		const K = te.s_keyToggleData[E];
		const X = K
			? toggleStates[K] & le.OneShot
				? W.ToggleOneShot
				: toggleStates[K] & (le.Held | le.Stuck)
					? W.ToggleOn
					: undefined
			: undefined;
		const J =
			rgLayoutTouchCount[e] && rgLayoutTouchCount[e][i] > 0
				? W.Touched
				: undefined;
		const $ =
			this.state.keyDown.key == E && E?.length > 0 ? W.Touched : undefined;
		const ee = this.state.longPressRow === e && this.state.longPressCol === i;
		const re = e === t && i === r && !ee;
		const ne = f instanceof Object && f.is_literal;
		let ie;
		if (Z !== undefined) {
			ie = this.m_emojiHeaderMapRefs.get(E) || b$();
			this.m_emojiHeaderMapRefs.set(E, ie);
		}
		const ae = {
			"data-key": E,
			"data-key-row": e,
			"data-key-col": i,
			"data-keycode": a || 0,
		};
		if (P) {
			ae["data-extended-chars"] = "1";
		}
		if (B) {
			ae["data-key-shifted"] = "1";
		}
		if (U) {
			ae["data-dead-key-next"] = U;
		}
		if (H) {
			ae["data-dead-key-combined"] = H;
		}
		if (ne) {
			ae["data-key-is-literal"] = "1";
		}
		let se;
		let oe = this.GetKeyClassNameForTheme(f, e, i);
		let ce = A_1(W.KeyboardKey, T, X, J, $, z, Y, oe);
		if (P != null && ee) {
			let t;
			if (this.state.holdSource == v.Vz.LPAD) {
				t = (
					<We
						className={W.ExtendedRowTrackpad}
						pressed={this.state.bLeftTrackpadDown}
						input={this.m_trackpadInput}
						trackpad={v.pR.LPAD_TOUCH}
						fnCallback={this.OnLeftTrackpadAnalog}
					/>
				);
			} else if (this.state.holdSource == v.Vz.RPAD) {
				t = (
					<We
						className={W.ExtendedRowTrackpad}
						pressed={this.state.bRightTrackpadDown}
						input={this.m_trackpadInput}
						trackpad={v.pR.RPAD_TOUCH}
						fnCallback={this.OnRightTrackpadAnalog}
					/>
				);
			}
			se = (
				<Ge_1
					extendedChars={P}
					parentRow={e}
					parentCol={i}
					bIsUpperCase={p}
					bExtendRight={G}
					nExtendedKeyTouched={nExtendedKeyTouched}
				>
					{t}
				</Ge_1>
			);
		}
		return (
			<Se
				key={`KB.${e}.${i}`}
				nRow={e}
				nKey={i}
				navRef={ie}
				bAutoFocus={re}
				bFocusable={k}
				bIsShift={u}
				bHasTrackpadHover={this.BHasTrackpadHover()}
				dataProps={ae}
				className={R}
				innerClassName={ce}
				leftActionButton={j}
				centerLeftActionButton={q}
				rightActionButton={Q}
				label={M}
				inactiveLabel={D}
				strInactiveLabelDeadKeyStyle={x}
				altGrLabel={N}
				inactiveAltGrLabel={F}
				extendedKeyRow={se}
			/>
		);
	}
	RenderKeyboardRow(e, t, r, n, i) {
		return (
			<S.Z
				key={`KB.${r}`}
				className={A_1(W.KeyboardRow, "Row_" + r)}
				flow-children="row"
				{...E.C3}
				navEntryPreferPosition={I.iU.MAINTAIN_X}
			>
				{e.map((a, s) => {
					return this.RenderKey(r, n, i, a, s, t?.[s] || 0, e.length);
				})}
			</S.Z>
		);
	}
	KeyboardPanel(e) {
		const { className, children, ...n } = e;
		const i = this.props.VirtualKeyboardManager;
		const a = q3(() => {
			return this.GetKeyboardThemeClassName();
		});
		const s = q3(() => {
			return i.KeyboardLocation;
		});
		return (
			<S.Z
				ref={this.SetKeyboardDiv}
				navRef={this.m_keyboardNavRef}
				flow-children="grid"
				autoFocus
				focusable={false}
				className={A_1(
					className,
					W.Keyboard,
					a,
					this.props.bModal && s,
					this.props.bModal && W.Modal,
					this.props.bVRFloatingKeyboard && W.VRFloatingKeyboard,
				)}
				{...n}
				onTouchStart={this.HandleTouchStart}
				onTouchMove={this.HandleTouchMove}
				onTouchEnd={this.HandleTouchEnd}
				onTouchCancel={this.HandleTouchCancel}
				onMouseDown={this.OnMouseDown}
				onMouseUp={this.OnMouseUp}
				onButtonDown={this.OnGamepadButtonDown}
				onButtonUp={this.OnGamepadButtonUp}
				onMoveUp={this.HandleNavOut}
			>
				{children}
			</S.Z>
		);
	}
	RenderStandardKeyboard(e) {
		const { name, rgLayout, rgKeycodes } = e;
		const i =
			this.state.holdSource == v.Vz.LPAD &&
			this.state.longPressCol !== null &&
			this.state.longPressRow !== null;
		const a =
			this.state.holdSource == v.Vz.RPAD &&
			this.state.longPressCol !== null &&
			this.state.longPressRow !== null;
		const s = "Layout_" + name;
		const o = this.BShowGlyphs();
		const l = this.GetLayoutOptions();
		const Component = this.KeyboardPanel;
		return (
			<Component className={A_1(W.Keyboard, s)} scrollIntoViewWhenChildFocused>
				<Se_1
					layout={e.layout}
					bHasTrackpadHover={this.BHasTrackpadHover()}
					rgLayoutTouchCount={this.state.rgLayoutTouchCount}
					bShowGlyphs={o}
				/>
				<Ie_1
					onCommitText={this.OnCommitText}
					onForwardKeyEvent={this.OnForwardKeyEvent}
					onDeleteSurroundingText={this.OnDeleteSurroundingText}
				/>
				<Oe_1
					VirtualKeyboardManager={this.props.VirtualKeyboardManager}
					onActiveElementChanged={this.OnActiveElementChangedOrClicked}
					onActiveElementClicked={this.OnActiveElementChangedOrClicked}
				/>
				<Ae_1 layout={e.layout} />
				{rgLayout(l).map((e, t) => {
					return this.RenderKeyboardRow(
						e,
						rgKeycodes?.[t],
						t,
						te.s_initialFocusRow,
						te.s_initialFocusColumn,
					);
				})}
				{!i && (
					<We
						className={W.LeftTrackpad}
						pressed={this.state.bLeftTrackpadDown}
						input={this.m_trackpadInput}
						trackpad={v.pR.LPAD_TOUCH}
						fnCallback={this.OnLeftTrackpadAnalog}
					/>
				)}
				{!a && (
					<We
						className={W.RightTrackpad}
						pressed={this.state.bRightTrackpadDown}
						input={this.m_trackpadInput}
						trackpad={v.pR.RPAD_TOUCH}
						fnCallback={this.OnRightTrackpadAnalog}
					/>
				)}
				<Be
					keyboard={this.m_keyboardDiv}
					fnCallback={this.OnRightTrackpadAnalog}
				/>
			</Component>
		);
	}
	OnTrackpadHover(e, t) {
		if (e != t) {
			if (e) {
				e.classList.remove(W.Focused);
				let e_firstElementChild = e.firstElementChild;
				if (e_firstElementChild) {
					e_firstElementChild.classList.remove(W.Focused);
				}
			}
			if (t) {
				t.classList.add(W.Focused);
				let t_firstElementChild = t.firstElementChild;
				if (t_firstElementChild) {
					t_firstElementChild.classList.add(W.Focused);
				}
			}
		}
	}
	getElementFromPointWorkaround(e, t) {
		const r =
			this.m_keyboardDiv?.ownerDocument.defaultView ??
			this.props.windowInstance.BrowserWindow;
		if (
			c.oy.WindowStore.BHasStandaloneConfiguratorWindow() ||
			c.oy.WindowStore.BHasStandaloneKeyboard()
		) {
			const r = DH(this.m_keyboardDiv);
			e *= r;
			t *= r;
		}
		let n = r.document.elementFromPoint(e, t);
		if (n) {
			if (!n.getAttribute("data-key")) {
				n = undefined;
			}
		}
		return n;
	}
	OnTrackpadAnalogInternal(e, t, r, n, i, a) {
		e.active = r;
		e.x = n;
		e.y = i;
		if (r) {
			let s = e.lastElement ? e.lastElementBoundingRect : undefined;
			if (
				!s ||
				!(s.x <= n) ||
				!(s.x <= n) ||
				!(n <= s.x + s.width) ||
				!(s.x <= n) ||
				!(n <= s.x + s.width) ||
				!(s.y <= i) ||
				!(s.x <= n) ||
				!(n <= s.x + s.width) ||
				!(s.y <= i) ||
				!(i <= s.y + s.height)
			) {
				let s = this.getElementFromPointWorkaround(n, i);
				if (s != e.lastElement) {
					this.OnTrackpadHover(e.lastElement, s);
					e.lastElement = s;
					e.lastElementBoundingRect = s?.getBoundingClientRect();
					m.l.PlayHaptic(a, t, m.n.Tick, 1, 0);
					this.m_keyboardDiv?.ownerDocument.defaultView.SteamClient?.OpenVR?.TriggerOverlayHapticEffect(
						r ? N.en.ButtonEnter : N.en.ButtonLeave,
						a,
					);
				}
			}
		} else {
			this.OnTrackpadHover(e.lastElement, undefined);
			e.lastElement = undefined;
		}
	}
	OnLeftTrackpadAnalog(e, t, r, n) {
		this.OnTrackpadAnalogInternal(this.m_leftTrackpad, 0, e, t, r, n);
		if (this.state.bLeftTrackpadActive != e) {
			this.setState({
				bLeftTrackpadActive: e,
			});
		}
	}
	OnRightTrackpadAnalog(e, t, r, n) {
		this.OnTrackpadAnalogInternal(this.m_rightTrackpad, 1, e, t, r, n);
		if (this.state.bRightTrackpadActive != e) {
			this.setState({
				bRightTrackpadActive: e,
			});
		}
	}
	RenderNumericKeyboard() {
		const e = {
			key: "ArrowLeft",
			label: D.KaratLeft,
			type: V.dI.Meta,
		};
		const t = {
			key: "ArrowRight",
			label: D.KaratRight,
			type: V.dI.Meta,
		};
		const r = {
			key: "SwitchKeys_Steam",
			label: D.Emoji,
			type: V.dI.Meta,
		};
		const n = {
			key: "SwitchKeys_ABC",
			label: "ABC",
			type: V.dI.Meta,
		};
		const i = {
			key: "Enter",
			label: "Enter",
			type: V.dI.Enter,
			leftActionButton: R.g4.RightTrigger,
		};
		const a = {
			key: "VKClose",
			label: D.HideKeyboard,
			type: V.dI.Meta,
		};
		const Component = this.KeyboardPanel;
		return (
			<Component className={A_1(W.NumericKeypad)}>
				<S.Z className={W.NumericLeftCtn}>
					{this.RenderKey(4, 0, 0, r, 0)}
					{this.RenderKey(4, 0, 0, n, 1)}
				</S.Z>
				<S.Z flow-children="grid" className={W.NumberPad}>
					{te.s_rgNumericLayout.map((e, t) => {
						return this.RenderKeyboardRow(e, undefined, t, 0, 0);
					})}
				</S.Z>
				<S.Z className={W.NumericRightCtn}>
					{this.RenderKey(4, 0, 0, e, 0)}
					{this.RenderKey(4, 0, 0, t, 1)}
					<S.Z className={W.Controls}>
						{this.RenderKey(1, 0, 0, i, 0)}
						{this.RenderKey(2, 0, 0, a, 1)}
					</S.Z>
				</S.Z>
			</Component>
		);
	}
	RenderSteamItemsAndEmojiKeyboard() {
		const e = this.state.layoutState == ce.Layout_Emoji;
		const t =
			te.s_rgSteamItemCategories[
				this.state.curEmojiCategoryIndex - this.m_emojiCategories.length
			];
		const r = e ? this.GetEmojiGridProps() : null;
		const n =
			this.state.holdSource == v.Vz.LPAD &&
			this.state.longPressCol !== null &&
			this.state.longPressRow !== null;
		const i =
			this.state.holdSource == v.Vz.RPAD &&
			this.state.longPressCol !== null &&
			this.state.longPressRow !== null;
		const a = this.BShowGlyphs();
		console.log(r);
		const Component = this.KeyboardPanel;
		return (
			<Component className={A_1(W.EmojiKeyboard)}>
				<S.Z className={W.KeyboardEmojiHeader}>
					{a && (
						<o.W className={W.CategoryScrollLeft} button={R.g4.LeftBumper} />
					)}
					{!this.props.bStandalone &&
						this.RenderKeyboardRow(
							te.s_rgCombinedSteamAndEmojiRowHeader,
							undefined,
							-1,
							0,
							0,
						)}
					{this.props.bStandalone &&
						this.RenderKeyboardRow(te.s_rgEmojiRowHeader, undefined, -1, 0, 0)}
					{a && (
						<o.W className={W.CategoryScrollRight} button={R.g4.RightBumper} />
					)}
				</S.Z>
				{e && (
					<S.Z
						key="KB.Emoji_Container"
						flow-children="grid"
						className={W.KeyboardEmojiContainer}
						ref={this.m_emojiScrollRef}
						navEntryPreferPosition={I.iU.MAINTAIN_X}
					>
						{r && <Fe_1 {...r} />}
					</S.Z>
				)}
				{!e && (
					<Ee_1
						filter={t}
						keyDown={this.state.keyDown.key}
						rgLayoutTouchCount={this.state.rgLayoutTouchCount}
						bAnyTrackpadActive={this.BHasTrackpadHover()}
					/>
				)}
				{this.RenderKeyboardRow(
					te.s_rgSteamItemsBottomRow(this.GetLayoutOptions()),
					undefined,
					4,
					0,
					0,
				)}
				{!n && (
					<We
						className={W.LeftTrackpad}
						pressed={this.state.bLeftTrackpadDown}
						input={this.m_trackpadInput}
						trackpad={v.pR.LPAD_TOUCH}
						fnCallback={this.OnLeftTrackpadAnalog}
					/>
				)}
				{!i && (
					<We
						className={W.RightTrackpad}
						pressed={this.state.bRightTrackpadDown}
						input={this.m_trackpadInput}
						trackpad={v.pR.RPAD_TOUCH}
						fnCallback={this.OnRightTrackpadAnalog}
					/>
				)}
			</Component>
		);
	}
	StartControllerInputWatchdogTimer() {
		SteamClient.Input.SetKeyboardActionset(
			true,
			this.props.windowInstance.IsStandaloneKeyboardWindow(),
		);
		const e = window.setInterval(() => {
			SteamClient.Input.SetKeyboardActionset(
				true,
				this.props.windowInstance.IsStandaloneKeyboardWindow(),
			);
		}, 1000);
		this.setState({
			watchdogTimer: e,
		});
	}
	ClearControllerInputWatchdogTimer() {
		window.clearInterval(this.state.watchdogTimer);
		this.setState({
			watchdogTimer: null,
		});
	}
	componentDidMount() {
		if (u.O.GetKeyboardLayoutSettings().selectedLayouts.length != 1) {
			this.SetLayoutNameTimeout();
			this.setState({
				bShowLayoutName: true,
			});
		}
		this.m_trackpadInput.EnableAnalogInputMessages(true);
		this.StartControllerInputWatchdogTimer();
	}
	componentWillUnmount() {
		this.StopResizeListening();
		this.CancelBackpaceTimer();
		this.DismissBackpaceTimer();
		this.CancelLongPressTimer();
		this.DismissLongPress();
		this.ClearHoldTarget();
		this.m_trackpadInput.EnableAnalogInputMessages(false);
		this.ClearControllerInputWatchdogTimer();
	}
	render() {
		switch (this.state.layoutState) {
			case ce.Layout_Emoji:
			case ce.Layout_SteamItems: {
				return this.RenderSteamItemsAndEmojiKeyboard();
			}
			case ce.Layout_Numeric: {
				return this.RenderNumericKeyboard();
			}
			case ce.Layout_Standard:
			default: {
				return this.RenderStandardKeyboard(this.state.standardLayout);
			}
		}
	}
};
function Se(e) {
	const {
		nRow,
		nKey,
		navRef,
		bAutoFocus,
		bFocusable,
		bIsShift,
		bHasTrackpadHover,
		dataProps,
		className,
		innerClassName,
		leftActionButton,
		centerLeftActionButton,
		rightActionButton,
		label,
		inactiveLabel,
		strInactiveLabelDeadKeyStyle,
		altGrLabel,
		inactiveAltGrLabel,
		extendedKeyRow,
	} = e;
	const [B, setB] = C.useState(false);
	const I = C.useCallback(() => {
		return setB(true);
	}, []);
	const E = C.useCallback(() => {
		return setB(false);
	}, []);
	const [M, setM] = C.useState(false);
	const R = C.useCallback(() => {
		return setM(true);
	}, []);
	const k = C.useCallback(() => {
		return setM(false);
	}, []);
	const D = bJ() ? !bHasTrackpadHover && B : M;
	return (
		<S.Z
			navRef={navRef}
			autoFocus={bAutoFocus}
			focusable={bFocusable}
			onGamepadFocus={I}
			onGamepadBlur={E}
			{...dataProps}
			className={A_1(W.KeyboardKeyHitArea, className)}
			onMouseEnter={R}
			onMouseLeave={k}
		>
			{extendedKeyRow}
			<div className={A_1(innerClassName, D && W.Focused)}>
				{leftActionButton === undefined || (
					<div className={A_1(W.ActionButtonGlyph, W.KeyboardActionButtonLeft)}>
						<o.W button={leftActionButton} bKnockout {...dataProps} />
					</div>
				)}
				{inactiveLabel === null ? null : bIsShift ? (
					<span className={W.ShiftActive}>{label}</span>
				) : (
					<span className={A_1(W.ShiftedLabel, strInactiveLabelDeadKeyStyle)}>
						{inactiveLabel}
					</span>
				)}
				{inactiveLabel === null ? (
					<span>{label}</span>
				) : bIsShift ? (
					<span className={W.InactiveLabel}>{inactiveLabel}</span>
				) : (
					<span>{label}</span>
				)}
				{altGrLabel === null ||
				inactiveAltGrLabel === null ? null : bIsShift ? (
					<span className={A_1(W.ShiftActive, W.AltGrLabel)}>{altGrLabel}</span>
				) : (
					<span className={A_1(W.ShiftedLabel, W.AltGrLabel)}>
						{inactiveAltGrLabel}
					</span>
				)}
				{altGrLabel === null ? null : inactiveAltGrLabel === null ? (
					<span className={W.AltGrLabel}>{altGrLabel}</span>
				) : bIsShift ? (
					<span className={A_1(W.InactiveLabel, W.AltGrLabel)}>
						{inactiveAltGrLabel}
					</span>
				) : (
					<span className={W.AltGrLabel}>{altGrLabel}</span>
				)}
				{rightActionButton === undefined || (
					<div
						className={A_1(W.ActionButtonGlyph, W.KeyboardActionButtonRight)}
					>
						<o.W button={rightActionButton} bKnockout {...dataProps} />
					</div>
				)}
				{centerLeftActionButton === undefined || (
					<div
						className={A_1(
							W.ActionButtonGlyph,
							W.KeyboardActionButtonCenterLeft,
						)}
					>
						<o.W button={centerLeftActionButton} bKnockout {...dataProps} />
					</div>
				)}
			</div>
		</S.Z>
	);
}
function We(e) {
	let { input, fnCallback } = e;
	let n = (e.inputScale ?? 1) * u.O.TrackPadTypingInputScale;
	let IRef = C.useRef(undefined);
	let [a, setA] = C.useState();
	let ORef = C.useRef(undefined);
	const l = C.useCallback(() => {
		if (ORef.current) {
			ORef.current = undefined;
			fnCallback(false, 0, 0);
		}
		setA({
			active: false,
			trackpadX: 0,
			trackpadY: 0,
		});
	}, [fnCallback, ORef]);
	const c = C.useCallback((e) => {
		IRef.current = e?.getBoundingClientRect();
	}, []);
	const m = C.useCallback(
		(t, r, a, c) => {
			_.unstable_batchedUpdates(() => {
				if (
					t == e.trackpad &&
					(setA({
						active: true,
						trackpadX: a,
						trackpadY: c,
					}),
					IRef.current)
				) {
					let t = (1 + OQ(a * n, -1, 1)) * 0.5;
					let s = (1 - OQ(c * n, -1, 1)) * 0.5;
					let i_current = IRef.current;
					let u = i_current.left + i_current.width * t;
					let d = i_current.top + i_current.height * s;
					e.fnCallback(true, u, d, r);
					if (ORef.current !== undefined) {
						window.clearTimeout(ORef.current);
					}
					ORef.current = window.setTimeout(l, 100);
				}
			});
		},
		[e, ORef, l, n],
	);
	C.useEffect(() => {
		if (input) {
			let e = input.RegisterForAnalog(m);
			return () => {
				return e.Unregister();
			};
		}
		return () => {};
	}, [input, m]);
	C.useEffect(() => {
		return () => {
			if (ORef.current !== undefined) {
				fnCallback(false, 0, 0);
				setA({
					active: false,
					trackpadX: 0,
					trackpadY: 0,
				});
				window.clearTimeout(ORef.current);
			}
		};
	}, [fnCallback]);
	if (!a?.active) {
		return null;
	}
	let d = {
		left: `calc( ${(1 + OQ(a.trackpadX * n, -1, 1)) * 50 + "%"} - 15px)`,
		top: `calc( ${(1 - OQ(a.trackpadY * n, -1, 1)) * 50 + "%"} - 15px)`,
	};
	return (
		<S.Z ref={c} className={A_1(W.TouchpadPointerContainer, e.className)}>
			<svg
				className={A_1(W.TouchpadPointer, e.pressed && W.PressedDown)}
				style={d}
			>
				<circle cx="50%" cy="50%" r="10" />
			</svg>
		</S.Z>
	);
}
Cg([x.oI], Ye.prototype, "OnLayoutChanged", null);
Cg([x.oI], Ye.prototype, "OnForwardKeyEvent", null);
Cg([x.oI], Ye.prototype, "OnDeleteSurroundingText", null);
Cg([x.oI], Ye.prototype, "OnCommitText", null);
Cg([x.oI], Ye.prototype, "OnActiveElementChangedOrClicked", null);
Cg([x.oI], Ye.prototype, "KeyDown", null);
Cg([x.oI], Ye.prototype, "KeyUp", null);
Cg([x.oI], Ye.prototype, "OnMouseDown", null);
Cg([x.oI], Ye.prototype, "OnMouseUp", null);
Cg([x.oI], Ye.prototype, "HandleTrackpadClick", null);
Cg([x.oI], Ye.prototype, "OnGamepadButtonDown", null);
Cg([x.oI], Ye.prototype, "OnGamepadButtonUp", null);
Cg([x.oI], Ye.prototype, "DispatchEventByDataKey", null);
Cg([x.oI], Ye.prototype, "HandleNavOut", null);
Cg([x.oI], Ye.prototype, "LongPressTimerExpired", null);
Cg([x.oI], Ye.prototype, "DismissLongPress", null);
Cg([x.oI], Ye.prototype, "StartLongPressTimer", null);
Cg([x.oI], Ye.prototype, "StartBackspaceTimer", null);
Cg([x.oI], Ye.prototype, "BackspaceTimeExpired", null);
Cg([x.oI], Ye.prototype, "DismissBackpaceTimer", null);
Cg([x.oI], Ye.prototype, "CancelBackpaceTimer", null);
Cg([x.oI], Ye.prototype, "OnKeyMouseLeave", null);
Cg([x.oI], Ye.prototype, "ClearHoldTarget", null);
Cg([x.oI], Ye.prototype, "CancelLongPressTimer", null);
Cg([x.oI], Ye.prototype, "HandleTouchStart", null);
Cg([x.oI], Ye.prototype, "HandleTouchMove", null);
Cg([x.oI], Ye.prototype, "IsCharacterFromActiveExtendedMenu", null);
Cg([x.oI], Ye.prototype, "HandleTouchEnd", null);
Cg([x.oI], Ye.prototype, "HandleTouchCancel", null);
Cg([x.oI], Ye.prototype, "ElementFromTouch", null);
Cg([x.oI], Ye.prototype, "OnEmojiFocus", null);
Cg([x.oI], Ye.prototype, "SetKeyboardDiv", null);
Cg([x.oI], Ye.prototype, "UpdateWindowSize", null);
Cg([x.oI], Ye.prototype, "RotateWindowPosition", null);
Cg([x.oI], Ye.prototype, "KeyboardPanel", null);
Cg([x.oI], Ye.prototype, "getElementFromPointWorkaround", null);
Cg([x.oI], Ye.prototype, "OnLeftTrackpadAnalog", null);
Cg([x.oI], Ye.prototype, "OnRightTrackpadAnalog", null);
Ye = te = Cg([h.PA], Ye);
const Be = (e) => {
	const { keyboard, fnCallback } = e;
	const n = rP();
	C.useEffect(() => {
		if (!n.IN_VR) {
			return;
		}
		const e =
			keyboard?.ownerDocument.defaultView.SteamClient?.OpenVR?.VROverlay.RegisterForCursorMovement(
				(e, t, n, i) => {
					if (e === 1) {
						fnCallback(t, n, i, e);
					}
				},
			);
		return () => {
			return e?.unregister();
		};
	}, [n.IN_VR, keyboard, fnCallback]);
	return null;
};
var Ne = De;
var Ge = Fe;
const ze = Number.parseInt(Ne["vrgamepadui-floating-keyboard-width"]);
const xe = Number.parseInt(Ne["vrgamepadui-floating-keyboard-height"]);
export function Y(e) {
	const TRef = C.useRef(undefined);
	const r = oH();
	const n = $2();
	const n_VirtualKeyboardManager = n.VirtualKeyboardManager;
	const o = u6();
	const l = Nr();
	const c = r.mode == i._5.StandaloneKeyboard;
	const m = on();
	const u = p.iG.GetKeyboardSkinTheme() ?? "DefaultTheme";
	const d = uH(o, 100);
	a1(n_VirtualKeyboardManager, "VirtualKeyboardContainer");
	C.useEffect(() => {
		if (o && TRef.current) {
			console.log("giving focus to keyboard 2");
			TRef.current.Activate();
		}
	});
	C.useEffect(() => {
		n_VirtualKeyboardManager.InitKeyboardLocation(c, l, n.BrowserWindow);
	}, [n_VirtualKeyboardManager, c, l, n.BrowserWindow]);
	const A = C.useCallback(
		(e) => {
			if (e && o && TRef.current) {
				window.setTimeout(() => {
					return TRef.current?.Activate();
				}, 1);
			}
		},
		[o],
	);
	hL(n_VirtualKeyboardManager.OnActiveElementChanged, A);
	const g = OU(Pe.BV.GamepadUI.GameAPIOSK());
	const h = OU(Pe.BV.GamepadUI.AppRunning());
	if (!o && !d) {
		return null;
	}
	const _ = (
		<Ie.B2
			navID="virtual keyboard"
			onGlobalButtonDown={m}
			navTreeRef={TRef}
			virtualFocus
			className={A_1(
				u,
				l ? Ee.ModalVirtualKeyboardContainer : Ee.VirtualKeyboardContainer,
				h && Ee.OpenUpwards,
			)}
			onCancelButton={() => {
				return n_VirtualKeyboardManager.SetVirtualKeyboardHidden();
			}}
			onPointerDown={
				f0()
					? () => {
							TRef.current?.Activate();
						}
					: undefined
			}
		>
			<M.Y5 name="Virtual Keyboard">
				<Be_1
					bVRFloatingKeyboard={false}
					bStandalone={c}
					bModal={l}
					windowInstance={n}
					VirtualKeyboardManager={n_VirtualKeyboardManager}
				/>
			</M.Y5>
		</Ie.B2>
	);
	if (l || c || c || g) {
		return _;
	} else {
		return (
			<div className={Ee.Positioner}>
				<Oe.H appearance="darkblur" visible />
				{_}
			</div>
		);
	}
}
export function r(e) {
	const { popup, element } = WR("VRKeyboard", {
		browserType: Te.W.EBrowserType_OpenVROverlay,
		eCreationFlags: 0,
		strVROverlayKey: ke.T3,
		title: "SteamVR - Keyboard",
		dimensions: {
			width: ze,
			height: xe,
			left: 0,
			top: 0,
		},
		replace_existing_popup: true,
	});
	if (element) {
		return _.createPortal(<He />, element);
	} else {
		return null;
	}
}
function Ve(e) {
	return new Ge().splitGraphemes(e ?? "");
}
function He(e) {
	const TRef = C.useRef(undefined);
	const r = $2();
	const r_VirtualKeyboardManager = r.VirtualKeyboardManager;
	const i = Nr();
	a1(r_VirtualKeyboardManager, "VRVirtualKeyboardContainer");
	const SRef = C.useRef(true);
	const [o, setO] = C.useState(true);
	const [c, setC] = C.useState(false);
	const [u, setU] = C.useState("");
	const [A, setA] = C.useState(0);
	const { onKeypress } = (function (e, t, r, n) {
		const i = C.useCallback(
			(i) => {
				const a = Ve(e);
				let s = e;
				switch (i) {
					case "Backspace": {
						if (r > 0) {
							s = a.slice(0, r - 1).join("") + a.splice(r).join("");
							t(s);
							n(Math.max(r - 1, 0));
						}
						break;
					}
					case "Enter": {
						break;
					}
					case "ArrowLeft": {
						n(Math.max(r - 1, 0));
						break;
					}
					case "ArrowRight": {
						n(Math.min(r + 1, a.length));
						break;
					}
					case "ArrowUp":
					case "ArrowDown": {
						break;
					}
					case "Tab": {
						i = "\t";
					}
					default: {
						s = a.slice(0, r).join("") + i + a.splice(r).join("");
						t(s);
						n(r + 1);
					}
				}
				return s;
			},
			[e, t, r, n],
		);
		return {
			onKeypress: i,
		};
	})(u, setU, A, setA);
	const HRef = C.useRef(undefined);
	HRef.current = onKeypress;
	const _ = C.useCallback((e) => {
		if (SRef.current) {
			I7(`VR keyboard key ${e}`);
			_1(e);
		} else {
			const t = HRef.current(e);
			I7(`VR keyboard key ${e}, buffer: ${t}`);
			_1(t);
		}
	}, []);
	const f = FN({
		onTextEntered: _,
	});
	const b = JP();
	C.useEffect(() => {
		setC(b.bIsOpen);
		if (b.bIsOpen != c) {
			if (b.bIsOpen) {
				f.SetAsCurrentVirtualKeyboardTarget();
				setU(b.sInitialText);
				setA(Ve(b.sInitialText).length);
				setO(b.bMinimal);
				SRef.current = b.bMinimal;
				I7(`VR keyboard opened in ${b.bMinimal ? "minimal" : "buffered"} mode`);
			} else {
				I7("VR keyboard closed");
			}
		}
	}, [f, b, c]);
	C.useEffect(() => {
		return () => {
			return f.BIsActive() && f.HideVirtualKeyboard();
		};
	}, [f]);
	return (
		<Ie.B2
			navID="virtual keyboard"
			navTreeRef={TRef}
			virtualFocus
			className={A_1(
				Ee.VRFloatingKeyboard,
				i && Ee.ModalVirtualKeyboardContainer,
				!i && Ee.VirtualKeyboardContainer,
			)}
			onCancelButton={() => {
				return r_VirtualKeyboardManager.SetVirtualKeyboardHidden();
			}}
			onPointerDown={
				f0()
					? () => {
							TRef.current?.Activate();
						}
					: undefined
			}
		>
			<M.Y5 name="Virtual Keyboard">
				<div className={Ee.VRVirtualKeyboardContents}>
					{o || <Je text={u} cursorPos={A} />}
					<Be_1
						bVRFloatingKeyboard
						bStandalone={false}
						bModal={i}
						windowInstance={r}
						VirtualKeyboardManager={r_VirtualKeyboardManager}
					/>
				</div>
			</M.Y5>
		</Ie.B2>
	);
}
function Je(e) {
	const { text, cursorPos } = e;
	const n = Ve(text);
	const i = n.slice(0, cursorPos).join("");
	const a = n.splice(cursorPos).join("");
	return (
		<div className={Ee.VirtualKeyboardTextBuffer}>
			<span className={Ee.VirtualKeyboardTextBufferText}>{i}</span>
			<div className={Ee.VirtualKeyboardTextBufferCursorContainer}>
				<div className={Ee.VirtualKeyboardTextBufferCursor} />
			</div>
			<span className={Ee.VirtualKeyboardTextBufferText}>{a}</span>
		</div>
	);
}
