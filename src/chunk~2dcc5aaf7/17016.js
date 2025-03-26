var n;
var i = require("./33572.js");
var a = require("./96680.js");
var s = require(/*webcrack:missing*/ "./34629.js");
var o = require("./53622.js");
var l = require("./87913.js");
var c = require("./46422.js");
var m = require("./53453.js");
var u = require("./34776.js");
var d = require("./78475.js");
var A = require("./45050.js");
var p = require("./74416.js");
var g = require(/*webcrack:missing*/ "./90095.js");
var h = require(/*webcrack:missing*/ "./41230.js");
var C = require(/*webcrack:missing*/ "./63696.js");
var _ = require(/*webcrack:missing*/ "./78325.js");
var f = require(/*webcrack:missing*/ "./68120.js");
var b = require(/*webcrack:missing*/ "./90242.js");
var y = require(/*webcrack:missing*/ "./3524.js");
var S = require(/*webcrack:missing*/ "./69164.js");
var w = require(/*webcrack:missing*/ "./20893.js");
var B = require("./38964.js");
var v = require(/*webcrack:missing*/ "./61657.js");
var I = require(/*webcrack:missing*/ "./4690.js");
var E = require(/*webcrack:missing*/ "./15181.js");
var M = require("./34665.js");
(function (e) {
	e[(e.BackSpace = 65288)] = "BackSpace";
	e[(e.Tab = 65289)] = "Tab";
	e[(e.Return = 65293)] = "Return";
	e[(e.Page_Up = 65365)] = "Page_Up";
	e[(e.Page_Down = 65366)] = "Page_Down";
})((n ||= {}));
var T = require(/*webcrack:missing*/ "./10975.js");
var R = require("./43014.js");
var k = require("./44164.js");
var D = require("./35488.js");
var N = require("./16251.js");
var F = require("./43397.js");
var G = require(/*webcrack:missing*/ "./34742.js");
var O = require(/*webcrack:missing*/ "./90765.js");
import { IsHTMLElement } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
var z = require(/*webcrack:missing*/ "./31958.js");
var x = require(/*webcrack:missing*/ "./52451.js");
var U = require("./27752.js");
var W = U;
var V = require("./42983.js");
var H = require(/*webcrack:missing*/ "./72476.js");
var j = require("./55116.js");
var q = require("./21105.js");
var Q = require("./3963.js");
var Z = require("./1918.js");
var _Y = require(/*webcrack:missing*/ "./55007.js");
const K = 44;
const X = 3;
function J(e) {
	let {
		steamItem: t,
		row: r,
		column: n,
		itemWidth: i,
		touched: a,
		ignoreFocusState: s,
	} = e;
	const o = {
		"data-key-row": r,
		"data-key-col": n,
		"data-key": t.item.name,
	};
	let l;
	let c = {
		position: "absolute",
		width: `${i}px`,
		height: "100%",
		top: r * K + "px",
		left: n * i + "px",
	};
	let m = t.type;
	switch (m) {
		case "Emoticon_t":
			o["data-key-handler"] = "emoticon";
			l = C.createElement(k.kS, {
				emoticon: t.item,
				emoticonHoverStore: Q.Nb.EmoticonHoverStore,
				large: true,
			});
			break;
		case "Sticker_t":
			o["data-key-handler"] = "sticker";
			l = C.createElement(k.eE, {
				sticker: t.item,
			});
			break;
		case "Effect_t":
			o["data-key-handler"] = "roomeffect";
			l = C.createElement(k.P6, {
				className: W.Effect,
				effect: t.item,
				roomEffectSettings: Z.B,
			});
	}
	let u = a ? W.Touched : undefined;
	return C.createElement(
		S.Z,
		{
			style: c,
			id: `KB.Steam_${m}_${r}.${n}`,
			focusable: true,
			className: (0, O.A)(W.KeyboardSteamItemKey, u),
			focusClassName: s ? undefined : W.Focused,
			...o,
		},
		l,
	);
}
function $(e) {
	let {
		steamItems: t,
		row: r,
		columnStart: n,
		columnEnd: i,
		itemWidth: a,
		keyDown: s,
		rgLayoutTouchCount: o,
		bAnyTrackpadActive: l,
	} = e;
	let c = [];
	for (let e = n; e <= i; ++e) {
		let n = e * X + r;
		let i = t[n];
		if (i) {
			let t = (o[r] != null && o[r][e] > 0) || s == i.item.name;
			let m = C.createElement(J, {
				key: n,
				steamItem: i,
				row: r,
				column: e,
				itemWidth: a,
				touched: t,
				ignoreFocusState: l,
			});
			c.push(m);
		}
	}
	return C.createElement(C.Fragment, null, c);
}
function ee(e) {
	let {
		filter: t,
		keyDown: r,
		rgLayoutTouchCount: n,
		bAnyTrackpadActive: i,
	} = e;
	let a = C.useRef(undefined);
	C.useEffect(() => Q.Nb.EmoticonStore.UpdateEmoticonList(), []);
	const s = Q.Nb.EmoticonStore.GetTimeReceivedNewestEmoticon();
	const o = Q.Nb.EmoticonStore.GetTimeReceivedForStickerOrEffect();
	const l = (0, g.q3)(() => Q.Nb.EmoticonStore.is_initialized);
	const c = H.iA.logged_in;
	let [m, u] = C.useState([]);
	C.useEffect(() => {
		let e = [];
		if (c) {
			switch (t) {
				case "RecentSteamItems":
					let t = Q.Nb.EmoticonStore.recent_emoticons.map((e) => ({
						type: "Emoticon_t",
						item: e,
					}));
					let r = Q.Nb.EmoticonStore.recent_stickers.map((e) => ({
						type: "Sticker_t",
						item: e,
					}));
					e = t.concat(r);
					break;
				case "Emoticons":
					e = Q.Nb.EmoticonStore.emoticon_list.map((e) => ({
						type: "Emoticon_t",
						item: e,
					}));
					break;
				case "Stickers":
					e = Q.Nb.EmoticonStore.GetStickerList().map((e) => ({
						type: "Sticker_t",
						item: e,
					}));
					break;
				case "ChatFX":
					e = Q.Nb.EmoticonStore.GetEffectList().map((e) => ({
						type: "Effect_t",
						item: e,
					}));
			}
			u(e);
		}
	}, [c, t, u, l, s, o]);
	const d = Math.ceil(m.length / X);
	const A = (0, _Y.Te)({
		count: d,
		horizontal: true,
		getScrollElement: () => a.current,
		estimateSize: C.useCallback(() => 58, []),
		overscan: 1,
	});
	let p = [];
	const h = A.getVirtualItems();
	const _ = A.getTotalSize();
	if (h.length != 0) {
		let e = h[0].index;
		let t = e + h.length;
		for (let a = 0; a < X; ++a) {
			let s = C.createElement($, {
				key: a,
				steamItems: m,
				row: a,
				columnStart: e,
				columnEnd: t,
				itemWidth: 58,
				rgLayoutTouchCount: n,
				keyDown: r,
				bAnyTrackpadActive: i,
			});
			p.push(s);
		}
	}
	const f = {
		height: K * X + "px",
		width: `${_}px`,
	};
	return C.createElement(
		q.MS,
		{
			ref: a,
			scrollDirection: "x",
		},
		C.createElement(
			j.g,
			null,
			c &&
				l &&
				_ != 0 &&
				C.createElement(
					S.Z,
					{
						className: W.KeyboardSteamItems,
						style: f,
						"flow-children": "grid",
					},
					p,
				),
			c &&
				l &&
				_ == 0 &&
				C.createElement(
					S.Z,
					{
						className: W.KeyboardSteamItemsNotLoggedIn,
					},
					(0, Localize)("#Keyboard_SteamItems_None"),
				),
			c &&
				!l &&
				C.createElement(
					S.Z,
					{
						className: W.KeyboardSteamItemsNotLoggedIn,
					},
					(0, Localize)("#Keyboard_SteamItems_Loading"),
				),
			!c &&
				C.createElement(
					S.Z,
					{
						className: W.KeyboardSteamItemsNotLoggedIn,
					},
					(0, Localize)("#Keyboard_SteamItems_NotLoggedIn"),
				),
		),
	);
}
var te;
var re = require("./45967.js");
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
const ie = (e) => {
	const {
		onCommitText: t,
		onForwardKeyEvent: r,
		onDeleteSurroundingText: n,
	} = e;
	(0, M.u7)(t, r, n);
	return null;
};
const ae = (e) => {
	const { layout: t } = e;
	(0, M.mQ)(t);
	return null;
};
const se = (e) => {
	const { layout: t, bHasTrackpadHover: r, rgLayoutTouchCount: n } = e;
	const i = (0, M.E5)(t);
	const { strText: a, nCursorPos: s, bVisible: l } = (0, M.kM)();
	const { strText: m, bVisible: u } = (0, M.VX)();
	const {
		vecCandidates: d,
		nCursorPos: A,
		nPageSize: p,
		nCursorInPage: g,
		bIsCursorVisible: h,
		bVisible: _,
	} = (0, M.WF)();
	let [f, b] = C.useState("");
	const y = C.useCallback(() => {
		b("");
	}, []);
	const w = s - (t == 34 ? 1 : 0);
	const B = a.slice(0, w);
	const T = u && (t == 2 || t == 3 || t == 31 || t == 34);
	const k = l && a !== "" && !T && t != 32;
	const N = u && t != 12 && t != 33;
	if (i) {
		return C.createElement(
			S.Z,
			{
				key: "KB.IME",
				className: (0, O.A)(W.KeyboardRow, "Row_IME", W.KeyboardImeUnavailable),
				"flow-children": "row",
				...E.C3,
			},
			C.createElement(
				"span",
				null,
				(0, Localize)("#Keyboard_IME_Not_available"),
			),
		);
	}
	if (!N && !k && !_) {
		return null;
	}
	const F = m.split(" (")[0];
	let G = (e) => e;
	if (t == 32 || t == 34) {
		G = (e) => e.split(" ")[0];
	}
	const P = Math.floor(A / p) * p;
	const z = _ && A >= p;
	const x = _ && d.length - P >= p;
	const U = c.oy.ActiveNavigationSourceType !== v.Vz.GAMEPAD || r;
	let V = r ? W.FocusedIgnored : W.Focused;
	return C.createElement(
		S.Z,
		{
			key: "KB.IME",
			className: (0, O.A)(W.KeyboardRow, "Row_IME", "Row_-1"),
			"flow-children": "row",
			...E.C3,
			navEntryPreferPosition: I.iU.MAINTAIN_X,
		},
		N &&
			C.createElement(
				S.Z,
				{
					key: "KB.Aux",
					autoFocus: false,
					focusable: false,
					className: (0, O.A)(W.KeyboardImeAuxText),
				},
				C.createElement("span", null, (T ? B : "") + F),
			),
		k &&
			C.createElement(
				S.Z,
				{
					key: "KB.Preedit",
					autoFocus: false,
					focusable: false,
					className: (0, O.A)(W.KeyboardImePreeditText),
				},
				C.createElement("span", null, a),
			),
		_ &&
			d.slice(P, P + p).map((e, t) => {
				const r = h && t == A - P;
				const i = n[-1] && n[-1][t] > 0 ? W.Touched : undefined;
				return C.createElement(
					S.Z,
					{
						key: `KB.LUT.${t}`,
						autoFocus: r && U,
						focusable: true,
						className: (0, O.A)(
							`Col_${t}`,
							W.KeyboardKeyHitArea,
							r ? W.KeyboardImeLutKeyCursor : undefined,
						),
						onGamepadFocus: () => b(`KB.LUT.${t}`),
						onGamepadBlur: y,
						"data-key": `IME_LUT_Select_${t}`,
						"data-key-row": -1,
						"data-key-col": t,
					},
					C.createElement(
						S.Z,
						{
							className: (0, O.A)(
								i,
								W.KeyboardKey,
								W.KeyboardImeLutKey,
								f === `KB.LUT.${t}` ? V : undefined,
							),
						},
						C.createElement("span", null, G(e)),
					),
				);
			}),
		z &&
			C.createElement(
				S.Z,
				{
					key: "KB.LUT.Up",
					autoFocus: false,
					focusable: true,
					className: (0, O.A)(W.KeyboardKeyHitArea, W.KeyboardImeLutNavSize),
					onGamepadFocus: () => b("KB.LUT.Up"),
					onGamepadBlur: y,
					"data-key": "IME_LUT_Up",
				},
				C.createElement(
					S.Z,
					{
						className: (0, O.A)(
							W.KeyboardKey,
							W.KeyboardImeLutNav,
							W.KeyboardImeLutKey,
							f === "KB.LUT.Up" ? V : undefined,
						),
					},
					e.bShowGlyphs &&
						C.createElement(o.W, {
							className: W.KeyboardImeLutActionGlyph,
							button: R.g4.LeftBumper,
						}),
					D.KaratLeft({}),
				),
			),
		x &&
			C.createElement(
				S.Z,
				{
					key: "KB.LUT.Down",
					autoFocus: false,
					focusable: true,
					className: (0, O.A)(W.KeyboardKeyHitArea, W.KeyboardImeLutNavSize),
					onGamepadFocus: () => b("KB.LUT.Down"),
					onGamepadBlur: y,
					"data-key": "IME_LUT_Down",
				},
				C.createElement(
					S.Z,
					{
						className: (0, O.A)(
							W.KeyboardKey,
							W.KeyboardImeLutNav,
							W.KeyboardImeLutKey,
							f === "KB.LUT.Down" ? V : undefined,
						),
					},
					D.KaratRight({}),
					e.bShowGlyphs &&
						C.createElement(o.W, {
							className: W.KeyboardImeLutActionGlyph,
							button: R.g4.RightBumper,
						}),
				),
			),
	);
};
const oe = (e) => {
	const {
		VirtualKeyboardManager: t,
		onActiveElementChanged: r,
		onActiveElementClicked: n,
	} = e;
	(0, x.hL)(t.OnActiveElementChanged, r);
	(0, x.hL)(t.OnActiveElementClicked, n);
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
		case 23:
			return e.toLocaleUpperCase("TR");
		default:
			return e.toLocaleUpperCase();
	}
}
function ge(e) {
	const t = e.bExtendRight ? 0 : e.extendedChars.length - 1;
	let r = c.oy.ActiveNavigationSourceType === v.Vz.GAMEPAD;
	const n = C.useRef(undefined);
	C.useEffect(() => {
		if (r) {
			n.current.TakeFocus();
		}
	}, [r]);
	let i = (0, O.A)(
		W.KeyboardExtendedRow,
		e.bExtendRight ? W.Right : W.Left,
		e.parentRow == 0 ? W.TopRow : undefined,
	);
	return C.createElement(
		S.Z,
		{
			key: `KB.ExtRow_${e.extendedChars[t]}`,
			className: i,
			onMoveLeft: () => true,
			onMoveRight: () => true,
			onMoveUp: () => true,
			onMoveDown: () => true,
			focusable: false,
		},
		e.extendedChars.map((i, a) =>
			C.createElement(
				S.Z,
				{
					key: `KB.Ext_${i}`,
					navRef: a === t && r ? n : null,
					autoFocus: a === t && r,
					focusable: true,
					"data-key": i,
					"data-key-col": a,
					"data-key-is-literal": 1,
					"parent-row": e.parentRow,
					"parent-col": e.parentCol,
					className: (0, O.A)(
						W.KeyboardExtendedKey,
						e.nExtendedKeyTouched == a && W.Touched,
					),
					focusClassName: e.children ? undefined : W.Focused,
				},
				C.createElement(
					"span",
					{
						style: {
							pointerEvents: "none",
						},
					},
					e.bIsUpperCase ? pe(e.extendedChars[a]) : e.extendedChars[a],
				),
			),
		),
		e.children,
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
	const s = C.useRef(undefined);
	C.useEffect(() => {
		if (a) {
			s.current.TakeFocus();
		}
	}, [a]);
	let o = (0, O.A)(
		W.KeyboardExtendedRow,
		e.bExtendRight ? W.Right : W.Left,
		e.parentRow == 0 ? W.TopRow : undefined,
	);
	return C.createElement(
		S.Z,
		{
			key: `KB.EmojiTintRow_${t[i]}`,
			className: o,
			onMoveLeft: () => true,
			onMoveRight: () => true,
			onMoveUp: () => true,
			onMoveDown: () => true,
			focusable: false,
		},
		t.map((n, o) =>
			C.createElement(
				S.Z,
				{
					key: `KB.Ext_${n}`,
					navRef: o === i && a ? s : null,
					autoFocus: o === i && a,
					focusable: true,
					"data-key": n,
					"data-key-col": o,
					"data-emoji-index": e.emojiIndex,
					"data-emoji-tint": r[o],
					"parent-row": e.parentRow,
					"parent-col": e.parentCol,
					className: (0, O.A)(
						W.KeyboardExtendedKey,
						e.nExtendedKeyTouched == o && W.Touched,
					),
					focusClassName: e.children ? undefined : W.Focused,
				},
				C.createElement("span", null, t[o]),
			),
		),
		e.children,
	);
}
function _e(e) {
	return (0, G.wH)(
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
function fe(e) {
	const { EmojiStore: t, mapEmoji: r, bAnyTrackpadActive: n } = e;
	let i = r.length;
	let a = r[0].length;
	let s = i * 44;
	return C.createElement(f.xA, {
		columnCount: a,
		overscanColumnCount: 2,
		rowCount: i,
		width: 870,
		height: s,
		columnWidth: 58,
		rowHeight: 44,
		cellRenderer: function (i) {
			if (
				r[i.rowIndex] === undefined ||
				r[i.rowIndex][i.columnIndex] === undefined
			) {
				return null;
			}
			const a = r[i.rowIndex][i.columnIndex];
			const s = a.column;
			const o = a.row;
			const l = t.FullEmojiList[a.index].key;
			const c = t.FullEmojiList[a.index].nNumTints === 1;
			const m = c ? he(l, t.GetEmojiTint(a.index)) : l;
			const u = e.longPressRow === o && e.longPressCol === s;
			const d =
				(e.rgLayoutTouchCount[o] && e.rgLayoutTouchCount[o][s] > 0) ||
				(e.keyDown.key == m && e.keyDown.keyRow == o && e.keyDown.keyCol == s)
					? W.Touched
					: undefined;
			let A;
			let p = true;
			if (c && u && e.holdTarget !== null) {
				const t = e.holdTarget;
				let r = _e(t);
				let n = _e(t.ownerDocument.body);
				p = r.x < n.x;
				A = C.createElement(
					Ce,
					{
						emoji: l,
						emojiIndex: a.index,
						parentRow: o,
						parentCol: s,
						bExtendRight: p,
						nExtendedKeyTouched: e.nExtendedKeyTouched,
					},
					e.holdSourceTouchpad,
				);
			}
			return C.createElement(
				S.Z,
				{
					key: `KB.${a.category.key}_Emoji_${o}.${s}`,
					id: `KB.${a.category.key}_Emoji_${o}.${s}`,
					style: i.style,
					focusable: true,
					"data-key": m,
					"data-key-row": o,
					"data-key-col": s,
					"data-emoji-index": a.index,
					"data-category-index": a.category.categoryIndex,
					className: (0, O.A)(W.KeyboardEmojiKey, d),
					focusClassName: n ? W.FocusedIgnored : W.Focused,
					onGamepadFocus: e.onGamepadFocus,
				},
				C.createElement("span", null, m),
				A,
			);
		},
		className: W.EmojiKeyboardGrid,
		style: {
			overflowY: "hidden",
		},
	});
}
function be(e) {
	const t = e.windowInstance?.IsVRWindow();
	const r = (0, re.JP)();
	const n = {
		Paste: !t,
		AllowMove: !t,
		Arrows: !t || r.bShowArrowKeys,
		DoneInsteadOfHide: t && r.bShowDoneKey,
	};
	return C.createElement(H.QO.Consumer, null, (t) =>
		C.createElement(ye, {
			configContext: t,
			...e,
			...n,
		}),
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
let ye = class extends C.Component {
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
			label: () => C.createElement(k.ZT, null),
			type: V.dI.Character,
			emojiCategoryIndex: 10,
			bSteamItemCategory: true,
		},
		{
			key: "SwitchKeys_Stickers",
			label: () => C.createElement(k.qm, null),
			type: V.dI.Character,
			emojiCategoryIndex: 11,
			bSteamItemCategory: true,
		},
		{
			key: "SwitchKeys_ChatFX",
			label: () => C.createElement(k.Mj, null),
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
	static s_rgSteamItemsBottomRow = (e) => [
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
		t.push(e.FullEmojiList.findIndex((e) => e.key === "😀"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "💆"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "🐵"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "🍇"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "🌍"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "👓"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "💋"));
		t.push(e.FullEmojiList.findIndex((e) => e.key === "🏁"));
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
			standardLayout: (0, V.r_)(),
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
		setTimeout(
			() =>
				this.props.VirtualKeyboardManager.RestoreVirtualKeyboardForLastActiveElement(),
			1,
		);
		this.SetLayoutNameTimeout();
		this.setState({
			standardLayout: (0, V.r_)(),
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
			strKey: t,
			strKeycode: r,
			strIsLiteral: i,
			strKeyHandler: a,
			strEmojiIndex: s,
			strEmojiTint: o,
			strShifted: l,
			strDeadKeyNext: c,
			strDeadKeyCombined: m,
		} = e;
		const u = te.s_keyToggleData[t];
		if (u) {
			if (u === "CapsLock") {
				this.setState((e, t) => ({
					...e,
					toggleStates: {
						...e.toggleStates,
						[u]: me(e.toggleStates[u]),
					},
				}));
			} else {
				this.setState((e, t) => ({
					...e,
					toggleStates: {
						...e.toggleStates,
						[u]: ue(e.toggleStates[u]),
					},
				}));
			}
		} else {
			if (t.startsWith("SwitchKeys_")) {
				if (t.endsWith("ABC")) {
					this.setState({
						layoutState: ce.Layout_Standard,
					});
				} else if (t.endsWith("123")) {
					this.setState({
						layoutState: ce.Layout_Numeric,
					});
				} else if (t.endsWith("Steam")) {
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
				} else if (t.endsWith("Layout")) {
					(0, V.gM)(this.OnLayoutChanged);
				} else if (t.endsWith("Emoji")) {
					this.setState({
						layoutState: ce.Layout_Emoji,
					});
				} else {
					const e = t.replace("SwitchKeys_", "");
					let r = te.s_rgSteamItemCategories.indexOf(e);
					this.WithEmojiStore((t) => {
						if (r != -1) {
							r += this.m_emojiCategories.length;
							this.setState({
								layoutState: ce.Layout_SteamItems,
								curEmojiCategoryIndex: r,
							});
						} else {
							const t = this.m_emojiCategories.find(({ key: t }) => t === e);
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
			} else if (t.startsWith("IME_")) {
				if (t.endsWith("LUT_Down")) {
					if (this.context) {
						this.context.process_key_event(n.Page_Down, 0, 0);
					}
				} else if (t.endsWith("LUT_Up")) {
					if (this.context) {
						this.context.process_key_event(n.Page_Up, 0, 0);
					}
				} else if (t.startsWith("IME_LUT_Select_")) {
					(0, M.CB)(
						this.context,
						this.state.standardLayout.layout,
						parseInt(t.substring(15)),
					);
				}
			} else {
				const e = parseInt(s);
				if (
					this.state.layoutState === ce.Layout_Emoji &&
					!isNaN(e) &&
					(d._.AddRecentEmoji(e), o !== null)
				) {
					let t = parseInt(o);
					d._.AddEmojiTint(e, t);
				}
				if (
					t.length === 1 &&
					(!!de(this.state.toggleStates.Shift) ||
						!!de(this.state.toggleStates.CapsLock)) &&
					!l
				) {
					t = pe(t);
				}
				if (a) {
					this.HandleSpecialBehaviorForKey(t, a);
				} else if (c) {
					this.props.VirtualKeyboardManager.HandleDeadKeyDown(t, c, m);
				} else if (t === "VKMove") {
					this.RotateWindowPosition();
				} else if (
					t.length != 1 &&
					t !== "Backspace" &&
					t !== "Enter" &&
					t !== "Tab"
				) {
					this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
						t,
						de(this.state.toggleStates.Shift),
					);
				} else if (i || this.state.layoutState === ce.Layout_Emoji) {
					if (this.context) {
						this.context.reset();
					}
					this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
						t,
						de(this.state.toggleStates.Shift),
					);
				} else {
					const e = async (e, t) => {
						let i = false;
						if (this.context) {
							let a;
							switch (e) {
								case "Backspace":
									a = n.BackSpace;
									break;
								case "Tab":
									a = n.Tab;
									break;
								case "Enter":
									a = n.Return;
									break;
								default:
									a = e.charCodeAt(0);
							}
							const s = parseFloat(r) || 0;
							const o = t ? IBus.ModifierType.SHIFT_MASK : 0;
							i = !!(await this.context.process_key_event(a, s, o));
						}
						if (!i) {
							this.props.VirtualKeyboardManager.HandleVirtualKeyDown(e, t);
						}
					};
					e(t, de(this.state.toggleStates.Shift));
				}
			}
			this.setState((e, t) => ({
				...e,
				toggleStates: {
					...e.toggleStates,
					Shift: Ae(e.toggleStates.Shift),
					Control: Ae(e.toggleStates.Control),
					Alt: Ae(e.toggleStates.Alt),
					AltGr: Ae(e.toggleStates.AltGr),
				},
			}));
		}
	}
	OnForwardKeyEvent(e, t, r) {
		const i = (r & IBus.ModifierType.SHIFT_MASK) != 0;
		let a;
		switch (e) {
			case n.BackSpace:
				a = "Backspace";
				break;
			case n.Tab:
				a = "Tab";
				break;
			case n.Return:
				a = "Enter";
				break;
			default:
				a = String.fromCharCode(e);
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
		e = e.replace(/./g, (e) => ne[e] || e);
		this.props.VirtualKeyboardManager.HandleVirtualKeyDown(e, false);
	}
	OnActiveElementChangedOrClicked(e) {
		if (this.context) {
			this.context.reset();
		}
	}
	HandleSpecialBehaviorForKey(e, t) {
		switch (t) {
			case "emoticon":
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					`:${e}:`,
					de(this.state.toggleStates.Shift),
				);
				break;
			case "sticker":
				l.LN.TrackStickerUsage(e, Date.now() / 1000);
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					`/sticker ${e}\r`,
					de(this.state.toggleStates.Shift),
				);
				break;
			case "roomeffect":
				this.props.VirtualKeyboardManager.HandleVirtualKeyDown(
					`/roomeffect ${e}\r`,
					de(this.state.toggleStates.Shift),
				);
		}
	}
	KeyDown(e) {
		const { target: t } = e;
		if (IsHTMLElement(t)) {
			T.eZ.PlayNavSound(T.PN.Typing, true);
			const r = parseFloat(t.getAttribute("data-key-row"));
			const n = parseFloat(t.getAttribute("data-key-col"));
			const i = {
				key: t.getAttribute("data-key"),
				keyRow: r,
				keyCol: n,
			};
			this.setState({
				keyDown: i,
			});
			const a = "clientX" in e;
			const s = t.hasAttribute("data-extended-chars");
			const o = parseFloat(t.getAttribute("data-emoji-index"));
			const l =
				t.hasAttribute("data-emoji-index") &&
				d._.FullEmojiList[o].nNumTints != 0;
			if (this.state.holdTarget) {
				this.TypeKey(this.state.holdTarget);
				this.CancelLongPressTimer();
				this.DismissLongPress();
				this.ClearHoldTarget();
			}
			if (s || l || a) {
				let r = e;
				this.StartLongPressTimer(t, a ? v.Vz.MOUSE : r.detail.source);
				t.addEventListener("mouseleave", this.OnKeyMouseLeave);
			} else {
				this.TypeKey(t);
			}
			e.stopPropagation();
			e.preventDefault();
		}
	}
	KeyUp(e) {
		const { target: t } = e;
		if (IsHTMLElement(t)) {
			const r = {
				key: null,
				keyRow: -1,
				keyCol: -1,
			};
			this.setState({
				keyDown: r,
			});
			const n = t.hasAttribute("parent-row")
				? parseFloat(t.getAttribute("parent-row") || "")
				: null;
			const i = t.hasAttribute("parent-col")
				? parseFloat(t.getAttribute("parent-col") || "")
				: null;
			let a =
				n !== null &&
				i !== null &&
				this.state.longPressRow === n &&
				this.state.longPressCol === i;
			if (!this.state.bLongPressSentKey) {
				if (t === this.state.holdTarget || a) {
					this.TypeKey(t);
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
				case ce.Layout_Emoji:
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
			case v.pR.TRIGGER_LEFT:
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
			case v.pR.RPAD_CLICK:
			case v.pR.TRIGGER_RIGHT:
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
		if (r) {
			(0, w.AE)(r, t ? "vgp_onbuttondown" : "vgp_onbuttonup", {
				button: v.pR.OK,
				source: n,
				is_repeat: false,
			});
		}
	}
	OnGamepadButtonDown(e) {
		switch (e.detail.button) {
			case v.pR.OK:
				this.KeyDown(e);
				break;
			case v.pR.OPTIONS:
				this.DispatchEventByDataKey(" ", true);
				break;
			case v.pR.LPAD_CLICK:
				this.HandleTrackpadClick(e.detail.button, true);
				break;
			case v.pR.TRIGGER_LEFT:
				if (this.m_leftTrackpad.active && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, true);
				} else {
					this.setState((e, t) => ({
						...e,
						toggleStates: {
							...e.toggleStates,
							Shift: le.Stuck,
						},
					}));
				}
				break;
			case v.pR.RPAD_CLICK:
				this.HandleTrackpadClick(e.detail.button, true);
				break;
			case v.pR.TRIGGER_RIGHT:
				if (this.m_rightTrackpad.active && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, true);
				} else {
					this.DispatchEventByDataKey("Enter", true);
				}
				break;
			case v.pR.SECONDARY:
				if (e.detail.source == v.Vz.KEYBOARD_SIMULATOR) {
					return;
				}
				this.DispatchEventByDataKey("Backspace", true);
				this.StartBackspaceTimer();
				break;
			case v.pR.DIR_UP:
			case v.pR.DIR_DOWN:
			case v.pR.DIR_LEFT:
			case v.pR.DIR_RIGHT:
				break;
			case v.pR.BUMPER_LEFT:
				this.TypeKeyInternal({
					strKey: "IME_LUT_Up",
				});
				this.OnSelectSiblingEmojiCategory(-1);
				break;
			case v.pR.BUMPER_RIGHT:
				this.TypeKeyInternal({
					strKey: "IME_LUT_Down",
				});
				this.OnSelectSiblingEmojiCategory(1);
				break;
			case v.pR.START:
				this.RotateWindowPosition();
		}
	}
	OnGamepadButtonUp(e) {
		switch (e.detail.button) {
			case v.pR.OK:
				this.KeyUp(e);
				break;
			case v.pR.RPAD_CLICK:
				this.HandleTrackpadClick(e.detail.button, false);
				break;
			case v.pR.TRIGGER_RIGHT:
				if (this.state.bRightTrackpadDown && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, false);
				} else {
					this.DispatchEventByDataKey("Enter", false);
				}
				break;
			case v.pR.LPAD_CLICK:
				this.HandleTrackpadClick(e.detail.button, false);
				break;
			case v.pR.TRIGGER_LEFT:
				if (this.state.bLeftTrackpadDown && u.O.TrackpadTypingTriggerAsClick) {
					this.HandleTrackpadClick(e.detail.button, false);
				} else {
					this.setState((e, t) => ({
						...e,
						toggleStates: {
							...e.toggleStates,
							Shift: le.Off,
						},
					}));
				}
				break;
			case v.pR.LSTICK_CLICK:
				this.setState((e, t) => ({
					...e,
					toggleStates: {
						...e.toggleStates,
						CapsLock: me(e.toggleStates.CapsLock),
					},
				}));
				break;
			case v.pR.SECONDARY:
				this.DispatchEventByDataKey("Backspace", false);
				this.CancelBackpaceTimer();
				this.DismissBackpaceTimer();
				break;
			case v.pR.OPTIONS:
				this.DispatchEventByDataKey(" ", false);
		}
	}
	DispatchEventByDataKey(e, t) {
		const r =
			this.m_keyboardDiv?.ownerDocument.defaultView ??
			this.props.windowInstance.BrowserWindow;
		let n = r?.document.querySelector('[data-key="' + e + '"]');
		return (
			!!n &&
			((0, w.AE)(n, t ? "vgp_onbuttondown" : "vgp_onbuttonup", {
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
			e ? () => this.m_keyboardNavRef.current.PopState() : null,
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
			const s = e[a];
			const o = (t && t[a]) || false;
			n[a] = o
				? s | le.Held
				: s & le.Held
					? r
						? le.Off
						: a === "CapsLock"
							? me(s)
							: ue(s)
					: s;
		}
		return n;
	}
	UpdateTouchState(e, t) {
		let r = 0;
		let n = [];
		let i = -1;
		let a = null;
		for (let s = 0; s < t.length; ++s) {
			const o = t[s];
			const l = o.target;
			if (IsHTMLElement(l)) {
				const t = parseFloat(l.getAttribute("data-key-row") || "");
				const s = parseFloat(l.getAttribute("data-key-col") || "");
				if (
					this.state.longPressRow !== null &&
					this.state.longPressCol !== null
				) {
					const t = e.elementFromPoint(o.clientX, o.clientY);
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
				const c = l.getAttribute("data-key");
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
					this.m_mapTouched.has(l) &&
					this.state.longPressRow === null &&
					this.state.longPressCol === null
				) {
					this.StartLongPressTimer(l, v.Vz.TOUCH);
				}
			}
		}
		this.setState((e, t) => ({
			...e,
			rgLayoutTouchCount: n,
			nExtendedKeyTouched: i,
			toggleStates: this.ToggleStatesUpdate(
				e.toggleStates,
				a,
				e.bIsInMultitouch,
			),
			bIsInMultitouch: r !== 0 && (r !== 1 || e.bIsInMultitouch),
		}));
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
				const i = n.target;
				const a = this.ElementFromTouch(t, n);
				if (IsHTMLElement(a) && IsHTMLElement(i)) {
					const e = this.IsCharacterFromActiveExtendedMenu(a);
					if (this.m_mapTouched.has(i) || e) {
						const t = i.getAttribute("data-key");
						if (t == null) {
							continue;
						}
						const r = te.s_keyToggleData[t];
						if (
							!this.state.bLongPressSentKey &&
							(!r || !this.state.bIsInMultitouch)
						) {
							this.TypeKey(e ? a : i);
						}
					}
				}
				this.m_mapTouched.delete(i);
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
		const { target: t } = e;
		if (IsHTMLElement(t)) {
			const e = parseInt(t.getAttribute("data-category-index"));
			this.setState({
				curEmojiCategoryIndex: e,
			});
		}
	}
	GetEmojiGridProps() {
		const e = te.s_numEmojiRows;
		let t = [];
		for (let r = 0; r < e; ++r) {
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
			for (let i = 0; i < e; ++i) {
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
					o += e;
					c++;
					a = Math.max(c, a);
				}
				for (; c < a; ++c) {
					t[i].push(undefined);
				}
			}
		});
		if (this.state.holdSource == v.Vz.LPAD) {
			r = C.createElement(we, {
				className: W.ExtendedRowTrackpad,
				pressed: this.state.bLeftTrackpadDown,
				input: this.m_trackpadInput,
				trackpad: v.pR.LPAD_TOUCH,
				fnCallback: this.OnLeftTrackpadAnalog,
			});
		} else if (this.state.holdSource == v.Vz.RPAD) {
			r = C.createElement(we, {
				className: W.ExtendedRowTrackpad,
				pressed: this.state.bRightTrackpadDown,
				input: this.m_trackpadInput,
				trackpad: v.pR.RPAD_TOUCH,
				fnCallback: this.OnRightTrackpadAnalog,
			});
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
				const e = (0, F.DH)(this.m_keyboardDiv);
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
			case "SwitchKeys_Layout":
				if (u.O.GetKeyboardLayoutSettings().selectedLayouts.length == 1) {
					return false;
				}
				break;
			case "VKMove":
				return !!this.props.bStandalone || !!this.props.bModal;
		}
		return true;
	}
	FilterKeyCapSpec(e) {
		if (e instanceof Array) {
			let t = [null, null, null, null];
			for (let r = 0; r < e.length && r < t.length; ++r) {
				let n = e[r];
				t[r] = this.BIsKeyEnabled(n instanceof Object ? n.key : n) ? n : null;
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
		const { VirtualKeyboardManager: o } = this.props;
		const {
			toggleStates: l,
			rgLayoutTouchCount: c,
			nExtendedKeyTouched: m,
		} = this.state;
		const u = de(this.state.toggleStates.Shift);
		const d = de(this.state.toggleStates.CapsLock);
		const A = de(this.state.toggleStates.AltGr);
		const p = (!u || !d) && (u || d);
		const g = this.BShowGlyphs();
		if (!(n = this.FilterKeyCapSpec(n))) {
			return null;
		}
		const h = (e) => (e ? (e instanceof Object ? e.key : e) : "");
		const _ = (e) =>
			typeof e == "function"
				? e({})
				: typeof e == "string" && e.startsWith("#")
					? (0, Localize)(e)
					: e;
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
		const I = (e) =>
			e === null
				? null
				: e instanceof Object
					? e.key === "Enter" && o.GetEnterKeyLabel()
						? _(o.GetEnterKeyLabel())
						: p && !B && typeof e.label == "string" && e.label.length === 1
							? _(pe(e.label))
							: e.type == V.dI.Spacebar && this.state.bShowLayoutName
								? (0, Localize)(this.state.standardLayout.locToken)
								: _(e.label)
					: e;
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
			P = e.split("").filter((e, t, r) => r.indexOf(e) === t);
			if (!G) {
				P = P.reverse();
			}
		}
		const z =
			f instanceof Object && f.dead
				? E == o.GetDeadKeyPending()
					? W.KeyboardKeyDeadKeyActive
					: W.KeyboardKeyDeadKey
				: undefined;
		const x =
			y instanceof Object && y.dead
				? y.key == o.GetDeadKeyPending()
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
			? l[K] & le.OneShot
				? W.ToggleOneShot
				: l[K] & (le.Held | le.Stuck)
					? W.ToggleOn
					: undefined
			: undefined;
		const J = c[e] && c[e][i] > 0 ? W.Touched : undefined;
		const $ =
			this.state.keyDown.key == E && E?.length > 0 ? W.Touched : undefined;
		const ee = this.state.longPressRow === e && this.state.longPressCol === i;
		const re = e === t && i === r && !ee;
		const ne = f instanceof Object && f.is_literal;
		let ie;
		if (Z !== undefined) {
			ie = this.m_emojiHeaderMapRefs.get(E) || (0, b.b$)();
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
		let ce = (0, O.A)(W.KeyboardKey, T, X, J, $, z, Y, oe);
		if (P != null && ee) {
			let t;
			if (this.state.holdSource == v.Vz.LPAD) {
				t = C.createElement(we, {
					className: W.ExtendedRowTrackpad,
					pressed: this.state.bLeftTrackpadDown,
					input: this.m_trackpadInput,
					trackpad: v.pR.LPAD_TOUCH,
					fnCallback: this.OnLeftTrackpadAnalog,
				});
			} else if (this.state.holdSource == v.Vz.RPAD) {
				t = C.createElement(we, {
					className: W.ExtendedRowTrackpad,
					pressed: this.state.bRightTrackpadDown,
					input: this.m_trackpadInput,
					trackpad: v.pR.RPAD_TOUCH,
					fnCallback: this.OnRightTrackpadAnalog,
				});
			}
			se = C.createElement(
				ge,
				{
					extendedChars: P,
					parentRow: e,
					parentCol: i,
					bIsUpperCase: p,
					bExtendRight: G,
					nExtendedKeyTouched: m,
				},
				t,
			);
		}
		return C.createElement(Se, {
			key: `KB.${e}.${i}`,
			nRow: e,
			nKey: i,
			navRef: ie,
			bAutoFocus: re,
			bFocusable: k,
			bIsShift: u,
			bHasTrackpadHover: this.BHasTrackpadHover(),
			dataProps: ae,
			className: R,
			innerClassName: ce,
			leftActionButton: j,
			centerLeftActionButton: q,
			rightActionButton: Q,
			label: M,
			inactiveLabel: D,
			strInactiveLabelDeadKeyStyle: x,
			altGrLabel: N,
			inactiveAltGrLabel: F,
			extendedKeyRow: se,
		});
	}
	RenderKeyboardRow(e, t, r, n, i) {
		return C.createElement(
			S.Z,
			{
				key: `KB.${r}`,
				className: (0, O.A)(W.KeyboardRow, "Row_" + r),
				"flow-children": "row",
				...E.C3,
				navEntryPreferPosition: I.iU.MAINTAIN_X,
			},
			e.map((a, s) => this.RenderKey(r, n, i, a, s, t?.[s] || 0, e.length)),
		);
	}
	KeyboardPanel(e) {
		const { className: t, children: r, ...n } = e;
		const i = this.props.VirtualKeyboardManager;
		const a = (0, g.q3)(() => this.GetKeyboardThemeClassName());
		const s = (0, g.q3)(() => i.KeyboardLocation);
		return C.createElement(
			S.Z,
			{
				ref: this.SetKeyboardDiv,
				navRef: this.m_keyboardNavRef,
				"flow-children": "grid",
				autoFocus: true,
				focusable: false,
				className: (0, O.A)(
					t,
					W.Keyboard,
					a,
					this.props.bModal && s,
					this.props.bModal && W.Modal,
					this.props.bVRFloatingKeyboard && W.VRFloatingKeyboard,
				),
				...n,
				onTouchStart: this.HandleTouchStart,
				onTouchMove: this.HandleTouchMove,
				onTouchEnd: this.HandleTouchEnd,
				onTouchCancel: this.HandleTouchCancel,
				onMouseDown: this.OnMouseDown,
				onMouseUp: this.OnMouseUp,
				onButtonDown: this.OnGamepadButtonDown,
				onButtonUp: this.OnGamepadButtonUp,
				onMoveUp: this.HandleNavOut,
			},
			r,
		);
	}
	RenderStandardKeyboard(e) {
		const { name: t, rgLayout: r, rgKeycodes: n } = e;
		const i =
			this.state.holdSource == v.Vz.LPAD &&
			this.state.longPressCol !== null &&
			this.state.longPressRow !== null;
		const a =
			this.state.holdSource == v.Vz.RPAD &&
			this.state.longPressCol !== null &&
			this.state.longPressRow !== null;
		const s = "Layout_" + t;
		const o = this.BShowGlyphs();
		const l = this.GetLayoutOptions();
		return C.createElement(
			this.KeyboardPanel,
			{
				className: (0, O.A)(W.Keyboard, s),
				scrollIntoViewWhenChildFocused: true,
			},
			C.createElement(se, {
				layout: e.layout,
				bHasTrackpadHover: this.BHasTrackpadHover(),
				rgLayoutTouchCount: this.state.rgLayoutTouchCount,
				bShowGlyphs: o,
			}),
			C.createElement(ie, {
				onCommitText: this.OnCommitText,
				onForwardKeyEvent: this.OnForwardKeyEvent,
				onDeleteSurroundingText: this.OnDeleteSurroundingText,
			}),
			C.createElement(oe, {
				VirtualKeyboardManager: this.props.VirtualKeyboardManager,
				onActiveElementChanged: this.OnActiveElementChangedOrClicked,
				onActiveElementClicked: this.OnActiveElementChangedOrClicked,
			}),
			C.createElement(ae, {
				layout: e.layout,
			}),
			r(l).map((e, t) =>
				this.RenderKeyboardRow(
					e,
					n?.[t],
					t,
					te.s_initialFocusRow,
					te.s_initialFocusColumn,
				),
			),
			!i &&
				C.createElement(we, {
					className: W.LeftTrackpad,
					pressed: this.state.bLeftTrackpadDown,
					input: this.m_trackpadInput,
					trackpad: v.pR.LPAD_TOUCH,
					fnCallback: this.OnLeftTrackpadAnalog,
				}),
			!a &&
				C.createElement(we, {
					className: W.RightTrackpad,
					pressed: this.state.bRightTrackpadDown,
					input: this.m_trackpadInput,
					trackpad: v.pR.RPAD_TOUCH,
					fnCallback: this.OnRightTrackpadAnalog,
				}),
			C.createElement(Be, {
				keyboard: this.m_keyboardDiv,
				fnCallback: this.OnRightTrackpadAnalog,
			}),
		);
	}
	OnTrackpadHover(e, t) {
		if (e != t) {
			if (e) {
				e.classList.remove(W.Focused);
				let t = e.firstElementChild;
				if (t) {
					t.classList.remove(W.Focused);
				}
			}
			if (t) {
				t.classList.add(W.Focused);
				let e = t.firstElementChild;
				if (e) {
					e.classList.add(W.Focused);
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
			const r = (0, F.DH)(this.m_keyboardDiv);
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
		return C.createElement(
			this.KeyboardPanel,
			{
				className: (0, O.A)(W.NumericKeypad),
			},
			C.createElement(
				S.Z,
				{
					className: W.NumericLeftCtn,
				},
				this.RenderKey(4, 0, 0, r, 0),
				this.RenderKey(4, 0, 0, n, 1),
			),
			C.createElement(
				S.Z,
				{
					"flow-children": "grid",
					className: W.NumberPad,
				},
				te.s_rgNumericLayout.map((e, t) =>
					this.RenderKeyboardRow(e, undefined, t, 0, 0),
				),
			),
			C.createElement(
				S.Z,
				{
					className: W.NumericRightCtn,
				},
				this.RenderKey(4, 0, 0, e, 0),
				this.RenderKey(4, 0, 0, t, 1),
				C.createElement(
					S.Z,
					{
						className: W.Controls,
					},
					this.RenderKey(1, 0, 0, i, 0),
					this.RenderKey(2, 0, 0, a, 1),
				),
			),
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
		return C.createElement(
			this.KeyboardPanel,
			{
				className: (0, O.A)(W.EmojiKeyboard),
			},
			C.createElement(
				S.Z,
				{
					className: W.KeyboardEmojiHeader,
				},
				a &&
					C.createElement(o.W, {
						className: W.CategoryScrollLeft,
						button: R.g4.LeftBumper,
					}),
				!this.props.bStandalone &&
					this.RenderKeyboardRow(
						te.s_rgCombinedSteamAndEmojiRowHeader,
						undefined,
						-1,
						0,
						0,
					),
				this.props.bStandalone &&
					this.RenderKeyboardRow(te.s_rgEmojiRowHeader, undefined, -1, 0, 0),
				a &&
					C.createElement(o.W, {
						className: W.CategoryScrollRight,
						button: R.g4.RightBumper,
					}),
			),
			e &&
				C.createElement(
					S.Z,
					{
						key: "KB.Emoji_Container",
						"flow-children": "grid",
						className: W.KeyboardEmojiContainer,
						ref: this.m_emojiScrollRef,
						navEntryPreferPosition: I.iU.MAINTAIN_X,
					},
					r &&
						C.createElement(fe, {
							...r,
						}),
				),
			!e &&
				C.createElement(ee, {
					filter: t,
					keyDown: this.state.keyDown.key,
					rgLayoutTouchCount: this.state.rgLayoutTouchCount,
					bAnyTrackpadActive: this.BHasTrackpadHover(),
				}),
			this.RenderKeyboardRow(
				te.s_rgSteamItemsBottomRow(this.GetLayoutOptions()),
				undefined,
				4,
				0,
				0,
			),
			!n &&
				C.createElement(we, {
					className: W.LeftTrackpad,
					pressed: this.state.bLeftTrackpadDown,
					input: this.m_trackpadInput,
					trackpad: v.pR.LPAD_TOUCH,
					fnCallback: this.OnLeftTrackpadAnalog,
				}),
			!i &&
				C.createElement(we, {
					className: W.RightTrackpad,
					pressed: this.state.bRightTrackpadDown,
					input: this.m_trackpadInput,
					trackpad: v.pR.RPAD_TOUCH,
					fnCallback: this.OnRightTrackpadAnalog,
				}),
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
			case ce.Layout_SteamItems:
				return this.RenderSteamItemsAndEmojiKeyboard();
			case ce.Layout_Numeric:
				return this.RenderNumericKeyboard();
			case ce.Layout_Standard:
			default:
				return this.RenderStandardKeyboard(this.state.standardLayout);
		}
	}
};
function Se(e) {
	const {
		nRow: t,
		nKey: r,
		navRef: n,
		bAutoFocus: i,
		bFocusable: a,
		bIsShift: s,
		bHasTrackpadHover: l,
		dataProps: c,
		className: m,
		innerClassName: u,
		leftActionButton: d,
		centerLeftActionButton: A,
		rightActionButton: p,
		label: g,
		inactiveLabel: h,
		strInactiveLabelDeadKeyStyle: _,
		altGrLabel: f,
		inactiveAltGrLabel: b,
		extendedKeyRow: w,
	} = e;
	const [B, v] = C.useState(false);
	const I = C.useCallback(() => v(true), []);
	const E = C.useCallback(() => v(false), []);
	const [M, T] = C.useState(false);
	const R = C.useCallback(() => T(true), []);
	const k = C.useCallback(() => T(false), []);
	const D = (0, y.bJ)() ? !l && B : M;
	return C.createElement(
		S.Z,
		{
			navRef: n,
			autoFocus: i,
			focusable: a,
			onGamepadFocus: I,
			onGamepadBlur: E,
			...c,
			className: (0, O.A)(W.KeyboardKeyHitArea, m),
			onMouseEnter: R,
			onMouseLeave: k,
		},
		w,
		C.createElement(
			"div",
			{
				className: (0, O.A)(u, D && W.Focused),
			},
			d === undefined
				? null
				: C.createElement(
						"div",
						{
							className: (0, O.A)(
								W.ActionButtonGlyph,
								W.KeyboardActionButtonLeft,
							),
						},
						C.createElement(o.W, {
							button: d,
							bKnockout: true,
							...c,
						}),
					),
			h === null
				? null
				: s
					? C.createElement(
							"span",
							{
								className: W.ShiftActive,
							},
							g,
						)
					: C.createElement(
							"span",
							{
								className: (0, O.A)(W.ShiftedLabel, _),
							},
							h,
						),
			h === null
				? C.createElement("span", null, g)
				: s
					? C.createElement(
							"span",
							{
								className: W.InactiveLabel,
							},
							h,
						)
					: C.createElement("span", null, g),
			f === null || b === null
				? null
				: s
					? C.createElement(
							"span",
							{
								className: (0, O.A)(W.ShiftActive, W.AltGrLabel),
							},
							f,
						)
					: C.createElement(
							"span",
							{
								className: (0, O.A)(W.ShiftedLabel, W.AltGrLabel),
							},
							b,
						),
			f === null
				? null
				: b === null
					? C.createElement(
							"span",
							{
								className: W.AltGrLabel,
							},
							f,
						)
					: s
						? C.createElement(
								"span",
								{
									className: (0, O.A)(W.InactiveLabel, W.AltGrLabel),
								},
								b,
							)
						: C.createElement(
								"span",
								{
									className: W.AltGrLabel,
								},
								f,
							),
			p === undefined
				? null
				: C.createElement(
						"div",
						{
							className: (0, O.A)(
								W.ActionButtonGlyph,
								W.KeyboardActionButtonRight,
							),
						},
						C.createElement(o.W, {
							button: p,
							bKnockout: true,
							...c,
						}),
					),
			A === undefined
				? null
				: C.createElement(
						"div",
						{
							className: (0, O.A)(
								W.ActionButtonGlyph,
								W.KeyboardActionButtonCenterLeft,
							),
						},
						C.createElement(o.W, {
							button: A,
							bKnockout: true,
							...c,
						}),
					),
		),
	);
}
function we(e) {
	let { input: t, fnCallback: r } = e;
	let n = (e.inputScale ?? 1) * u.O.TrackPadTypingInputScale;
	let i = C.useRef(undefined);
	let [a, s] = C.useState();
	let o = C.useRef(undefined);
	const l = C.useCallback(() => {
		if (o.current) {
			o.current = undefined;
			r(false, 0, 0);
		}
		s({
			active: false,
			trackpadX: 0,
			trackpadY: 0,
		});
	}, [r, o]);
	const c = C.useCallback((e) => {
		i.current = e?.getBoundingClientRect();
	}, []);
	const m = C.useCallback(
		(t, r, a, c) => {
			_.unstable_batchedUpdates(() => {
				if (
					t == e.trackpad &&
					(s({
						active: true,
						trackpadX: a,
						trackpadY: c,
					}),
					i.current)
				) {
					let t = (1 + (0, z.OQ)(a * n, -1, 1)) * 0.5;
					let s = (1 - (0, z.OQ)(c * n, -1, 1)) * 0.5;
					let m = i.current;
					let u = m.left + m.width * t;
					let d = m.top + m.height * s;
					e.fnCallback(true, u, d, r);
					if (o.current !== undefined) {
						window.clearTimeout(o.current);
					}
					o.current = window.setTimeout(l, 100);
				}
			});
		},
		[e, o, l, n],
	);
	C.useEffect(() => {
		if (t) {
			let e = t.RegisterForAnalog(m);
			return () => e.Unregister();
		}
		return () => {};
	}, [t, m]);
	C.useEffect(
		() => () => {
			if (o.current !== undefined) {
				r(false, 0, 0);
				s({
					active: false,
					trackpadX: 0,
					trackpadY: 0,
				});
				window.clearTimeout(o.current);
			}
		},
		[r],
	);
	if (!a?.active) {
		return null;
	}
	let d = {
		left: `calc( ${(1 + (0, z.OQ)(a.trackpadX * n, -1, 1)) * 50 + "%"} - 15px)`,
		top: `calc( ${(1 - (0, z.OQ)(a.trackpadY * n, -1, 1)) * 50 + "%"} - 15px)`,
	};
	return C.createElement(
		S.Z,
		{
			ref: c,
			className: (0, O.A)(W.TouchpadPointerContainer, e.className),
		},
		C.createElement(
			"svg",
			{
				className: (0, O.A)(W.TouchpadPointer, e.pressed && W.PressedDown),
				style: d,
			},
			C.createElement("circle", {
				cx: "50%",
				cy: "50%",
				r: "10",
			}),
		),
	);
}
(0, s.Cg)([x.oI], ye.prototype, "OnLayoutChanged", null);
(0, s.Cg)([x.oI], ye.prototype, "OnForwardKeyEvent", null);
(0, s.Cg)([x.oI], ye.prototype, "OnDeleteSurroundingText", null);
(0, s.Cg)([x.oI], ye.prototype, "OnCommitText", null);
(0, s.Cg)([x.oI], ye.prototype, "OnActiveElementChangedOrClicked", null);
(0, s.Cg)([x.oI], ye.prototype, "KeyDown", null);
(0, s.Cg)([x.oI], ye.prototype, "KeyUp", null);
(0, s.Cg)([x.oI], ye.prototype, "OnMouseDown", null);
(0, s.Cg)([x.oI], ye.prototype, "OnMouseUp", null);
(0, s.Cg)([x.oI], ye.prototype, "HandleTrackpadClick", null);
(0, s.Cg)([x.oI], ye.prototype, "OnGamepadButtonDown", null);
(0, s.Cg)([x.oI], ye.prototype, "OnGamepadButtonUp", null);
(0, s.Cg)([x.oI], ye.prototype, "DispatchEventByDataKey", null);
(0, s.Cg)([x.oI], ye.prototype, "HandleNavOut", null);
(0, s.Cg)([x.oI], ye.prototype, "LongPressTimerExpired", null);
(0, s.Cg)([x.oI], ye.prototype, "DismissLongPress", null);
(0, s.Cg)([x.oI], ye.prototype, "StartLongPressTimer", null);
(0, s.Cg)([x.oI], ye.prototype, "StartBackspaceTimer", null);
(0, s.Cg)([x.oI], ye.prototype, "BackspaceTimeExpired", null);
(0, s.Cg)([x.oI], ye.prototype, "DismissBackpaceTimer", null);
(0, s.Cg)([x.oI], ye.prototype, "CancelBackpaceTimer", null);
(0, s.Cg)([x.oI], ye.prototype, "OnKeyMouseLeave", null);
(0, s.Cg)([x.oI], ye.prototype, "ClearHoldTarget", null);
(0, s.Cg)([x.oI], ye.prototype, "CancelLongPressTimer", null);
(0, s.Cg)([x.oI], ye.prototype, "HandleTouchStart", null);
(0, s.Cg)([x.oI], ye.prototype, "HandleTouchMove", null);
(0, s.Cg)([x.oI], ye.prototype, "IsCharacterFromActiveExtendedMenu", null);
(0, s.Cg)([x.oI], ye.prototype, "HandleTouchEnd", null);
(0, s.Cg)([x.oI], ye.prototype, "HandleTouchCancel", null);
(0, s.Cg)([x.oI], ye.prototype, "ElementFromTouch", null);
(0, s.Cg)([x.oI], ye.prototype, "OnEmojiFocus", null);
(0, s.Cg)([x.oI], ye.prototype, "SetKeyboardDiv", null);
(0, s.Cg)([x.oI], ye.prototype, "UpdateWindowSize", null);
(0, s.Cg)([x.oI], ye.prototype, "RotateWindowPosition", null);
(0, s.Cg)([x.oI], ye.prototype, "KeyboardPanel", null);
(0, s.Cg)([x.oI], ye.prototype, "getElementFromPointWorkaround", null);
(0, s.Cg)([x.oI], ye.prototype, "OnLeftTrackpadAnalog", null);
(0, s.Cg)([x.oI], ye.prototype, "OnRightTrackpadAnalog", null);
ye = te = (0, s.Cg)([h.PA], ye);
const Be = (e) => {
	const { keyboard: t, fnCallback: r } = e;
	const n = (0, H.rP)();
	C.useEffect(() => {
		if (!n.IN_VR) {
			return;
		}
		const e =
			t?.ownerDocument.defaultView.SteamClient?.OpenVR?.VROverlay.RegisterForCursorMovement(
				(e, t, n, i) => {
					if (e === 1) {
						r(t, n, i, e);
					}
				},
			);
		return () => e?.unregister();
	}, [n.IN_VR, t, r]);
	return null;
};
var ve = require("./43152.js");
var Ie = require(/*webcrack:missing*/ "./84252.js");
var Ee = require("./67067.js");
var Me = require("./60115.js");
var Te = require(/*webcrack:missing*/ "./85243.js");
var Re = require("./67686.js");
var ke = require("./35425.js");
var De = require("./80467.js");
var Ne = De;
var Fe = require(/*webcrack:missing*/ "./44080.js");
var Ge = Fe;
var Oe = require("./57565.js");
var Pe = require("./18057.js");
var Le = require("./51076.js");
const ze = Number.parseInt(Ne["vrgamepadui-floating-keyboard-width"]);
const xe = Number.parseInt(Ne["vrgamepadui-floating-keyboard-height"]);
export function Y(e) {
	const t = C.useRef(undefined);
	const r = (0, i.oH)();
	const n = (0, a.$2)();
	const s = n.VirtualKeyboardManager;
	const o = (0, ve.u6)();
	const l = (0, ve.Nr)();
	const c = r.mode == i._5.StandaloneKeyboard;
	const m = (0, Me.on)();
	const u = p.iG.GetKeyboardSkinTheme() ?? "DefaultTheme";
	const d = (0, x.uH)(o, 100);
	(0, ve.a1)(s, "VirtualKeyboardContainer");
	C.useEffect(() => {
		if (o && t.current) {
			console.log("giving focus to keyboard 2");
			t.current.Activate();
		}
	});
	C.useEffect(() => {
		s.InitKeyboardLocation(c, l, n.BrowserWindow);
	}, [s, c, l, n.BrowserWindow]);
	const A = C.useCallback(
		(e) => {
			if (e && o && t.current) {
				window.setTimeout(() => t.current?.Activate(), 1);
			}
		},
		[o],
	);
	(0, x.hL)(s.OnActiveElementChanged, A);
	const g = (0, Le.OU)(Pe.BV.GamepadUI.GameAPIOSK());
	const h = (0, Le.OU)(Pe.BV.GamepadUI.AppRunning());
	if (!o && !d) {
		return null;
	}
	const _ = C.createElement(
		Ie.B2,
		{
			navID: "virtual keyboard",
			onGlobalButtonDown: m,
			navTreeRef: t,
			virtualFocus: true,
			className: (0, O.A)(
				u,
				l ? Ee.ModalVirtualKeyboardContainer : Ee.VirtualKeyboardContainer,
				h && Ee.OpenUpwards,
			),
			onCancelButton: () => s.SetVirtualKeyboardHidden(),
			onPointerDown: (0, ve.f0)()
				? () => {
						t.current?.Activate();
					}
				: undefined,
		},
		C.createElement(
			M.Y5,
			{
				name: "Virtual Keyboard",
			},
			C.createElement(be, {
				bVRFloatingKeyboard: false,
				bStandalone: c,
				bModal: l,
				windowInstance: n,
				VirtualKeyboardManager: s,
			}),
		),
	);
	if (l || c || g) {
		return _;
	} else {
		return C.createElement(
			"div",
			{
				className: Ee.Positioner,
			},
			C.createElement(Oe.H, {
				appearance: "darkblur",
				visible: true,
			}),
			_,
		);
	}
}
export function r(e) {
	const { popup: t, element: r } = (0, Re.WR)("VRKeyboard", {
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
	if (r) {
		return _.createPortal(C.createElement(He, null), r);
	} else {
		return null;
	}
}
function Ve(e) {
	return new Ge().splitGraphemes(e ?? "");
}
function He(e) {
	const t = C.useRef(undefined);
	const r = (0, a.$2)();
	const n = r.VirtualKeyboardManager;
	const i = (0, ve.Nr)();
	(0, ve.a1)(n, "VRVirtualKeyboardContainer");
	const s = C.useRef(true);
	const [o, l] = C.useState(true);
	const [c, m] = C.useState(false);
	const [u, d] = C.useState("");
	const [A, p] = C.useState(0);
	const { onKeypress: g } = (function (e, t, r, n) {
		const i = C.useCallback(
			(i) => {
				const a = Ve(e);
				let s = e;
				switch (i) {
					case "Backspace":
						if (r > 0) {
							s = a.slice(0, r - 1).join("") + a.splice(r).join("");
							t(s);
							n(Math.max(r - 1, 0));
						}
						break;
					case "Enter":
						break;
					case "ArrowLeft":
						n(Math.max(r - 1, 0));
						break;
					case "ArrowRight":
						n(Math.min(r + 1, a.length));
						break;
					case "ArrowUp":
					case "ArrowDown":
						break;
					case "Tab":
						i = "\t";
					default:
						s = a.slice(0, r).join("") + i + a.splice(r).join("");
						t(s);
						n(r + 1);
				}
				return s;
			},
			[e, t, r, n],
		);
		return {
			onKeypress: i,
		};
	})(u, d, A, p);
	const h = C.useRef(undefined);
	h.current = g;
	const _ = C.useCallback((e) => {
		if (s.current) {
			(0, ve.I7)(`VR keyboard key ${e}`);
			(0, ve._1)(e);
		} else {
			const t = h.current(e);
			(0, ve.I7)(`VR keyboard key ${e}, buffer: ${t}`);
			(0, ve._1)(t);
		}
	}, []);
	const f = (0, ve.FN)({
		onTextEntered: _,
	});
	const b = (0, re.JP)();
	C.useEffect(() => {
		m(b.bIsOpen);
		if (b.bIsOpen != c) {
			if (b.bIsOpen) {
				f.SetAsCurrentVirtualKeyboardTarget();
				d(b.sInitialText);
				p(Ve(b.sInitialText).length);
				l(b.bMinimal);
				s.current = b.bMinimal;
				(0, ve.I7)(
					`VR keyboard opened in ${b.bMinimal ? "minimal" : "buffered"} mode`,
				);
			} else {
				(0, ve.I7)("VR keyboard closed");
			}
		}
	}, [f, b, c]);
	C.useEffect(() => () => f.BIsActive() && f.HideVirtualKeyboard(), [f]);
	return C.createElement(
		Ie.B2,
		{
			navID: "virtual keyboard",
			navTreeRef: t,
			virtualFocus: true,
			className: (0, O.A)(
				Ee.VRFloatingKeyboard,
				i && Ee.ModalVirtualKeyboardContainer,
				!i && Ee.VirtualKeyboardContainer,
			),
			onCancelButton: () => n.SetVirtualKeyboardHidden(),
			onPointerDown: (0, ve.f0)()
				? () => {
						t.current?.Activate();
					}
				: undefined,
		},
		C.createElement(
			M.Y5,
			{
				name: "Virtual Keyboard",
			},
			C.createElement(
				"div",
				{
					className: Ee.VRVirtualKeyboardContents,
				},
				o ||
					C.createElement(je, {
						text: u,
						cursorPos: A,
					}),
				C.createElement(be, {
					bVRFloatingKeyboard: true,
					bStandalone: false,
					bModal: i,
					windowInstance: r,
					VirtualKeyboardManager: n,
				}),
			),
		),
	);
}
function je(e) {
	const { text: t, cursorPos: r } = e;
	const n = Ve(t);
	const i = n.slice(0, r).join("");
	const a = n.splice(r).join("");
	return C.createElement(
		"div",
		{
			className: Ee.VirtualKeyboardTextBuffer,
		},
		C.createElement(
			"span",
			{
				className: Ee.VirtualKeyboardTextBufferText,
			},
			i,
		),
		C.createElement(
			"div",
			{
				className: Ee.VirtualKeyboardTextBufferCursorContainer,
			},
			C.createElement("div", {
				className: Ee.VirtualKeyboardTextBufferCursor,
			}),
		),
		C.createElement(
			"span",
			{
				className: Ee.VirtualKeyboardTextBufferText,
			},
			a,
		),
	);
}
