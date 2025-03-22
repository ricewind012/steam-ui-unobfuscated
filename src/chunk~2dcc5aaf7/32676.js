import * as n from /*webcrack:missing*/ "./63696.js";
import * as i from /*webcrack:missing*/ "./90765.js";
import * as a from /*webcrack:missing*/ "./46108.js";
import * as s from "./57622.js";
import * as o from "./91720.js";
import * as l from "./661.js";
import * as c from "./93092.js";
import * as m from "./81393.js";
import * as u from "./56997.js";
import * as d from "./27541.js";
import * as A from "./92374.js";
import * as p from "./99998.js";
import * as g from "./41596.js";
import * as h from "./71729.js";
import * as C from "./64608.js";
import * as _ from "./60291.js";
import * as f from "./18057.js";
import * as b from /*webcrack:missing*/ "./72476.js";
import * as y from /*webcrack:missing*/ "./41180.js";
import * as S from "./22588.js";
import * as w from "./29516.js";
import * as B from "./35488.js";
import * as v from "./51517.js";
import * as I from "./82153.js";
import * as E from "./96884.js";
import * as M from "./13871.js";
import * as T from "./4069.js";
function R(e) {
	const {
		strSelectedApp: t,
		controlsVisible: r,
		fnOnContentWidth: a,
		initialPlaybackDefinition: s,
	} = e;
	const { rgApps: l } = (0, o.z)();
	const c = useGPUAccelErrorDialog();
	let m = !l || l.length == 0;
	return n.createElement(
		"div",
		{
			className: M.GameRecordingGamepadUI,
		},
		c,
		!m &&
			t &&
			n.createElement(
				"div",
				{
					className: (0, i.A)(M.MainContent, M.NoHeaderName, M.ClipHeader),
				},
				n.createElement(k, {
					gameID: t,
					controlsVisible: r,
					fnOnContentWidth: a,
					initialPlaybackDefinition: s,
				}),
			),
	);
}
function k(e) {
	const {
		gameID: t,
		controlsVisible: r,
		fnOnContentWidth: i,
		initialPlaybackDefinition: a,
	} = e;
	const { loader: s, fnGetManifest: l } = (0, S.Fc)(t);
	const c = (0, T.useGameRecordingSetting)();
	const m = (0, o.$O)(t);
	return n.createElement(
		A.Ni,
		{
			loader: s,
			fnGetManifest: l,
			mode: A.g_.Background,
			recordingSetting: c,
			controlsVisible: r,
			gamepadMode: true,
			renderGlyph: RenderGlyph,
			clipSummaries: m,
			playbackDefinition: a,
		},
		n.createElement(D, {
			gameID: t,
			loader: s,
			fnOnContentWidth: i,
		}),
	);
}
function D(e) {
	const { loader: t, gameID: r, fnOnContentWidth: i } = e;
	const a = (0, o.$O)(r);
	return n.createElement(
		I.p,
		null,
		n.createElement(
			w.tB,
			{
				loader: t,
			},
			n.createElement(p.Bo, {
				loader: t,
				clipSummaries: a,
				fnOnContentWidth: i,
			}),
		),
	);
}
import * as N from "./1385.js";
import * as F from "./91486.js";
import * as G from /*webcrack:missing*/ "./44846.js";
import * as O from "./96593.js";
import * as P from /*webcrack:missing*/ "./98995.js";
import * as L from "./65528.js";
import * as z from /*webcrack:missing*/ "./11131.js";
import * as x from "./46422.js";
import * as U from /*webcrack:missing*/ "./79769.js";
import * as W from "./37790.js";
import * as V from "./84838.js";
import * as H from /*webcrack:missing*/ "./69164.js";
import * as j from /*webcrack:missing*/ "./90242.js";
import * as q from /*webcrack:missing*/ "./84252.js";
import * as Q from "./55116.js";
import * as Z from /*webcrack:missing*/ "./61657.js";
import * as Y from /*webcrack:missing*/ "./4690.js";
import * as K from /*webcrack:missing*/ "./50376.js";
import * as X from /*webcrack:missing*/ "./49519.js";
import * as J from "./31800.js";
import * as $ from /*webcrack:missing*/ "./52451.js";
import * as ee from "./96555.js";
import * as te from "./53622.js";
import * as re from "./43014.js";
import * as ne from "./3499.js";
import * as ie from /*webcrack:missing*/ "./3715.js";
import * as ae from "./34428.js";
import * as se from "./34461.js";
import * as oe from "./83247.js";
import * as le from "./69767.js";
import * as ce from /*webcrack:missing*/ "./31084.js";
import * as me from /*webcrack:missing*/ "./88750.js";
import * as ue from "./26094.js";
import * as de from "./10606.js";
import * as Ae from "./13869.js";
import * as pe from "./18869.js";
import * as ge from "./21163.js";
import * as he from /*webcrack:missing*/ "./54644.js";
import * as Ce from "./34792.js";
import * as _e from "./84056.js";
import * as fe from "./61294.js";
import * as be from "./25633.js";
import * as ye from "./3874.js";
import * as Se from "./8717.js";
import * as we from "./94729.js";
import * as Be from /*webcrack:missing*/ "./90095.js";
const ve = 0.6;
export function PrevItemSVG(e) {
	return n.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			...e,
		},
		n.createElement("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M16.9038 17.5317L25 9.43553L21.4645 5.89999L9.83275 17.5317L21.4645 29.1634L25 25.6279L16.9038 17.5317Z",
		}),
	);
}
const Ee = false;
function Me(e) {
	const { offset: t } = e;
	const [r, s] = n.useState(true);
	const { fnRestartTimer: o } = (0, $.L$)(3000, () => s(false));
	const { fnNextItem: l, fnPrevItem: c, openedItem: m } = Le();
	(0, n.useEffect)(() => {
		s(true);
		o();
	}, [m, o]);
	const u = m.type == "screenshot";
	const d = m.type == "recording";
	const A = (0, b.hf)();
	const p = (0, b.Xk)();
	const h = A || p;
	const C = (0, ee.l5)();
	const _ = (0, X.W6)();
	if (h) {
		return n.createElement(
			n.Fragment,
			null,
			A &&
				n.createElement(
					"div",
					{
						className: g.OpenedItemHeaderControls,
					},
					n.createElement(
						H.Z,
						{
							className: g.BackLabel,
							onActivate: _.goBack,
						},
						n.createElement(B.Chevron, {
							direction: "left",
						}),
						" ",
						(0, a.we)("#Button_Back"),
					),
					n.createElement(Se.D, {
						name: "MediaManagerOpenedItemHeaderControls",
						className: g.Slot,
					}),
				),
			n.createElement(
				"div",
				{
					className: (0, i.A)(g.ChangeItemHoverArea, g.Left, d && g.Recording),
				},
				n.createElement(
					"div",
					{
						onClick: c,
						className: (0, i.A)(
							g.ChangeItem,
							g.Left,
							u && g.Screenshot,
							d && g.Recording,
							!c && g.Disabled,
						),
					},
					n.createElement(
						P.he,
						{
							direction: "top",
							toolTipContent: (0, a.we)("#MediaManager_Media_Previous"),
						},
						n.createElement(
							"div",
							{
								className: g.ChangeItemLabel,
							},
							n.createElement(PrevItemSVG, {
								className: g.PrevItemSVG,
							}),
						),
					),
				),
			),
			n.createElement(
				"div",
				{
					className: (0, i.A)(g.ChangeItemHoverArea, g.Right, d && g.Recording),
				},
				n.createElement(
					"div",
					{
						onClick: l,
						className: (0, i.A)(
							g.ChangeItem,
							g.Right,
							u && g.Screenshot,
							d && g.Recording,
							!l && g.Disabled,
						),
					},
					n.createElement(
						P.he,
						{
							direction: "top",
							toolTipContent: (0, a.we)("#MediaManager_Media_Next"),
						},
						n.createElement(
							"div",
							{
								className: (0, i.A)(g.ChangeItemLabel),
							},
							n.createElement(PrevItemSVG, {
								className: g.NextItemSVG,
							}),
						),
					),
				),
			),
		);
	}
	let f = 16;
	if (Ee) {
		f = (0, b.TL)() && !C ? t - 54 : t - 64;
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"div",
			{
				className: (0, i.A)(g.ChangeItemHoverArea, g.Left, d && g.Recording),
			},
			n.createElement(
				"div",
				{
					className: g.BumperImg,
					style: {
						left: f,
					},
					onClick: c,
				},
				n.createElement(te.W, {
					button: re.g4.LeftBumper,
					className: (0, i.A)(r && g.Visible, g.BumperGlyph, !c && g.Disabled),
				}),
			),
		),
		n.createElement(
			"div",
			{
				className: (0, i.A)(g.ChangeItemHoverArea, g.Right, d && g.Recording),
			},
			n.createElement(
				"div",
				{
					className: (0, i.A)(g.BumperImg, g.Right),
					style: {
						right: f,
					},
					onClick: l,
				},
				n.createElement(te.W, {
					button: re.g4.RightBumper,
					className: (0, i.A)(r && g.Visible, g.BumperGlyph, !l && g.Disabled),
				}),
			),
		),
	);
}
const Te = n.createContext(false);
export default function Re(e) {
	if ((0, b.Qn)()) {
		return n.createElement(Fe, {
			...e,
		});
	} else {
		return n.createElement(ke, {
			...e,
		});
	}
}
function ke(e) {
	const { initialView: t = "grid" } = e;
	const r = t !== "list" ? f.BV.Media.Grid() : f.BV.Media.List();
	return n.createElement(
		f.Cc,
		{
			initialEntries: [r],
		},
		n.createElement(
			se.Zz,
			null,
			n.createElement(De, {
				...e,
			}),
			n.createElement(Ne, {
				...e,
			}),
		),
	);
}
function De(e) {
	const { initialItem: t, ...r } = e;
	const i = n.createElement(Ge, {
		...r,
		initialOpenedItem: t,
	});
	const a = (0, X.W6)();
	const o = (0, pe.br)();
	const l = n.useCallback(
		(e, t) => {
			const r = f.BV.Media.Item("clip", e);
			if (t?.bReplaceRoute) {
				a.replace(r);
			} else {
				a.push(r);
			}
		},
		[a],
	);
	const { progressElement: c, onShowProgressBar: m } = (0, ge.e)();
	const u = n.useCallback(
		(e, t) => {
			const r = (0, ne.i3)({
				strGameID: e,
				hHandle: t,
			});
			a.push(f.BV.Media.Item("screenshot", r));
		},
		[a],
	);
	const d = n.useCallback(() => {
		o.SteamWeb(`${b.TS.HELP_BASE_URL}faqs/view/${s.k_strGRFAQ}`);
	}, [o]);
	const A = (0, ge.J)();
	return n.createElement(
		ye.IP,
		{
			onNavigateToGRSettings: () => o.Settings("GameRecording"),
			onNavigateToClip: l,
			onNavigateToScreenshot: u,
			onShowProgressBar: m,
			onNavigateToFAQ: d,
			onShowError: A,
		},
		c,
		i,
	);
}
function Ne(e) {
	const { initialView: t, initialFilter: r, initialItem: i } = e;
	const a = (0, n.useRef)(false);
	const s = (0, X.W6)();
	(0, n.useEffect)(() => {
		if (!a.current) {
			a.current = true;
			return;
		}
		if (i) {
			return;
		}
		const e = !!(0, X.B6)(s.location.pathname, [
			f.BV.Media.Grid(),
			f.BV.Media.List(),
		]);
		const r = t !== "list" ? f.BV.Media.Grid() : f.BV.Media.List();
		if (e) {
			s.replace(r);
		} else {
			s.push(r);
		}
	}, [s, t, r, i]);
	return null;
}
function Fe(e) {
	const { initialItem: t, ...r } = e;
	const i = (0, pe.br)();
	const a = (0, ge.J)();
	const { progressElement: s, onShowProgressBar: o } = (0, ge.e)();
	const l = n.useCallback(
		(e, t) => {
			let r = {};
			if (e) {
				r.listSource = {
					type: "app",
					gameid: e,
				};
			}
			if (t) {
				r.mediaType = t;
			}
			i.Media.Grid({
				state: {
					filter: r,
				},
			});
		},
		[i],
	);
	return n.createElement(
		ye.IP,
		{
			onNavigateToMedia: l,
			onShowError: a,
			onShowProgressBar: o,
		},
		n.createElement(Ge, {
			...r,
			initialOpenedItem: t,
		}),
		s,
	);
}
function Ge(e) {
	const { initialFilter: t, initialOpenedItem: r, onFilterChange: a } = e;
	const [s, o] = (function (e, t) {
		const [r, i] = (0, n.useState)(() => ({
			...ne.sF,
			...(e || {}),
		}));
		(0, n.useEffect)(() => {
			i(() => ({
				...ne.sF,
				...(e || {}),
			}));
		}, [e]);
		const a = (0, n.useCallback)(
			(e) => {
				i(e);
				if (t) {
					t(e);
				}
			},
			[t],
		);
		return [r, a];
	})(t, a);
	const l = (0, X.W6)();
	const c = (0, b.Qn)();
	const m = (0, b.Pr)();
	(function () {
		const e = (0, b.hf)();
		const t = (0, z.R7)();
		n.useEffect(() => {
			const r = new U.e0();
			if (e && t?.ownerWindow && x.oy.NavigationManager) {
				r.Push(
					x.oy.NavigationManager.RegisterInputSource(new V.K(t?.ownerWindow)),
				);
				r.Push(
					x.oy.NavigationManager.RegisterInputSource(new W.Q(t?.ownerWindow)),
				);
			}
			return () => r.Unregister();
		}, [t, e]);
	})();
	const u = n.useRef(undefined);
	(0, j.O7)(u, true, true);
	const { requestNextPage: d, rgMedia: A, cTotal: p, ...h } = (0, ne.MZ)(s);
	const { cTotal: C } = (0, ne.MZ)(ne.sF);
	const { onSelect: y, ...S } = (0, _.f0)(A);
	const w = (0, n.useMemo)(
		() =>
			A.map((e) => ({
				...e,
				navHandle: n.createRef(),
			})),
		[A],
	);
	const [B, v] = (0, n.useState)(false);
	const {
		openedItem: E,
		setOpenedItem: M,
		refLastOpened: T,
	} = (function (e, t) {
		const r = (0, b.Qn)();
		const i = (0, X.W5)(f.BV.Media.Item());
		const { state: a } = (0, X.zy)();
		const s = a?.item || i?.params;
		const o = n.useRef(undefined);
		if (s) {
			o.current = s;
		}
		const l = n.useCallback(
			(e, r = false) => {
				const n = r ? t.replace : t.push;
				if (e) {
					n(f.BV.Media.Item(e.type, e.id), {
						item: e,
					});
				} else {
					n(f.BV.Media.Grid());
				}
			},
			[t],
		);
		(0, n.useEffect)(() => {
			if (e) {
				l(e, r);
			}
		}, [e, r, l]);
		return {
			openedItem: s,
			setOpenedItem: l,
			refLastOpened: o,
		};
	})(r, l);
	(function (e) {
		const {
			ownerWindow: { document: t },
		} = (0, z.R7)();
		(0, n.useEffect)(() => {
			const r = (t) => {
				let r = false;
				if (t.button === 3) {
					e.goBack();
					r = true;
				} else if (t.button === 4) {
					e.goForward();
					r = true;
				}
				if (r) {
					t.stopPropagation();
					t.preventDefault();
				}
			};
			t.addEventListener("auxclick", r);
			return () => t.removeEventListener("auxclick", r);
		}, [e, t]);
	})(l);
	n.useEffect(() => () => L.y.SetOpenedItem(false), []);
	const R = S.onDeselectAll;
	n.useEffect(() => {
		R();
	}, [B, R]);
	const k = (function (e, t, r) {
		const i = (0, ee.l5)();
		const a = (0, b.TL)() && !i ? 1.6 : 16 / 9;
		return n.useCallback(
			(r, i, s) => {
				const o = r.id;
				const l = (r, n) => {
					const i = e.findIndex((e) => e.id === o);
					return t(
						n,
						{
							handle: o,
							index: i,
							bShiftKey: r.shiftKey,
							bCtrlKey: r.ctrlKey,
						},
						r,
					);
				};
				const c = {
					key: r.id,
					navHandle: r?.navHandle,
					selected: i,
					item: r,
					style: {
						"--listItemAspectRatio": a.toString(),
					},
				};
				switch (r.type) {
					case "screenshot":
						return n.createElement(nt, {
							onClick: (e) =>
								l(e, {
									type: "screenshot",
									id: o,
								}),
							screenshot: r,
							...c,
						});
					case "clip":
						return n.createElement(Ve, {
							clip: r,
							onClick: (e) =>
								l(e, {
									type: "clip",
									id: o,
								}),
							mini: s,
							...c,
						});
					case "recording":
						return n.createElement(Ke, {
							strGameID: r.summary.game_id,
							onClick: (e) =>
								l(e, {
									type: "recording",
									id: o,
								}),
							...c,
						});
					default:
						return null;
				}
			},
			[e, t, a],
		);
	})(w, (e, t, r) => {
		if (B) {
			y({
				...t,
				bCtrlKey: true,
			});
		} else if (t.bCtrlKey) {
			v(true);
			S.setSelected({
				[e.id]: true,
			});
		} else {
			M(e);
			if (e) {
				L.y.SetOpenedItem(true);
			}
		}
	});
	const D = T.current;
	const N =
		D || r
			? Math.max(
					A.findIndex((e) => e.id == (D?.id || r?.id)),
					0,
				)
			: 0;
	const F = () => {
		if (B) {
			v(false);
		} else if (c) {
			l.goBack();
		}
	};
	const G = !!(0, X.W5)({
		path: f.BV.Media.Grid(),
		exact: true,
	});
	const O = !!(0, X.W5)({
		path: f.BV.Media.Item(),
	});
	(0, n.useEffect)(() => {
		L.y.SetOpenedItem(O);
	}, [O]);
	const P = n.useRef(G);
	(0, n.useEffect)(() => {
		if (G !== P.current) {
			if (G) {
				w.find((e) => e.id === T.current?.id)?.navHandle.current?.TakeFocus();
			}
			P.current = G;
		}
	}, [G, w, T]);
	const Z = E?.type == "recording";
	const K = E?.type == "clip";
	const J = E?.type == "screenshot";
	let $ = (0, i.A)(
		g.FullHeight,
		g.ContentPadding,
		Z && g.Recording,
		K && g.Clip,
		J && g.Screenshot,
		c && E && g.BlackBackground,
		m && g.OSX,
	);
	const te = n.createElement(
		Q.q,
		null,
		n.createElement(
			Te.Provider,
			{
				value: B,
			},
			n.createElement(
				Oe,
				null,
				n.createElement(
					H.Z,
					{
						autoFocus: true,
						focusable: false,
						"flow-children": "grid",
						navEntryPreferPosition: Y.iU.MAINTAIN_X,
						className: (0, i.A)(g.FullHeight, "ClipManager"),
						onKeyDown: (e) => {
							if (!c && e.key === "Escape") {
								e.stopPropagation();
								e.preventDefault();
								F();
							}
						},
						onCancelButton: F,
					},
					n.createElement(
						I.b,
						{
							className: g.FullHeight,
						},
						n.createElement(
							_.Kz,
							{
								direction: "row",
								space: "md",
								grow: true,
								className: g.FullHeight,
							},
							n.createElement(_.Pc, {
								sortedItems: w,
								numTotal: p,
								...S,
								onRequestLoad: d,
								...h,
								renderItem: k,
								filter: s,
								onFilterChange: o,
								nInitialScroll: N,
								className: O ? g.PinnedBehind : undefined,
								selectModeActive: B,
								onSelectModeActiveChange: v,
								childFocusDisabled: E != null,
								numFiltered: C - p,
							}),
							n.createElement(
								X.qh,
								{
									path: f.BV.Media.Item(),
								},
								n.createElement(ze, {
									openedItem: E,
									sortedItems: A,
									setOpenedItem: M,
								}),
							),
						),
					),
				),
			),
		),
	);
	if (c) {
		return te;
	} else {
		return n.createElement(
			q.B2,
			{
				disableFocusClasses: !!E,
				navID: "root-clipmanager",
				navTreeRef: u,
				className: $,
				onCancelButton: F,
			},
			te,
		);
	}
}
function Oe(e) {
	let t = (0, C.a_)();
	let { strButtonClassName: r, ...i } = t;
	return n.createElement(
		C.Ce.Provider,
		{
			value: i,
		},
		e.children,
	);
}
const Pe = n.createContext({});
function Le() {
	return n.useContext(Pe);
}
function ze(e) {
	const { openedItem: t, sortedItems: r, setOpenedItem: i } = e;
	const a = r.findIndex((e) => e?.id == t?.id);
	const s = a > 0 ? a - 1 : undefined;
	const l = a + 1 < r.length ? a + 1 : undefined;
	const c = n.useCallback(() => {
		if (t && s != a) {
			i(
				{
					id: r[s].id,
					type: r[s].type,
				},
				true,
			);
		}
	}, [t, r, s, a, i]);
	const m = n.useCallback(() => {
		if (t && r.length > 1) {
			i(
				{
					id: r[l].id,
					type: r[l].type,
				},
				true,
			);
		}
	}, [t, r, l, i]);
	const u = ut(t?.id, t.type);
	const d =
		t?.type == "recording" &&
		r.some((e) => e.type == "clip" && (0, o.XA)(e.id)?.game_id == u);
	const A = (0, b.Qn)();
	return n.createElement(
		Pe.Provider,
		{
			value: {
				openedItem: t,
				fnPrevItem: s !== undefined ? c : undefined,
				fnNextItem: l !== undefined ? m : undefined,
				nextItem:
					l !== undefined
						? {
								id: r[l].id,
								type: r[l].type,
							}
						: undefined,
				prevItem:
					s !== undefined
						? {
								id: r[s].id,
								type: r[s].type,
							}
						: undefined,
				focusedRecordingHasClips: d,
			},
		},
		A ? n.createElement(Ue, null) : n.createElement(xe, null),
	);
}
function xe(e) {
	const { openedItem: t, fnPrevItem: r, fnNextItem: a } = Le();
	let s = null;
	let o = false;
	switch (t?.type) {
		case "screenshot":
			s = n.createElement(N.iN, {
				handle: t.id,
			});
			break;
		case "clip":
			s = n.createElement(dt, {
				handle: t.id,
				key: t.id,
			});
			o = true;
			break;
		case "recording":
			const { id: e, playbackDefinition: r } = t;
			s = n.createElement(E.GameRecordingSelectedClip, {
				initialGameID: e,
				initialPlaybackDefinition: r,
			});
			o = true;
	}
	const l = ut(t?.id, t.type);
	if (s) {
		return n.createElement(
			yt,
			{
				onLeft: r,
				onRight: a,
				reduceBottomMargin: o,
			},
			n.createElement(
				se.Zz,
				null,
				n.createElement(
					I.b,
					{
						className: (0, i.A)(g.FullHeight, g.BackLabelPaddingRecording),
					},
					n.createElement(Me, null),
					n.createElement(We, {
						strGameID: l,
					}),
					n.createElement(
						H.Z,
						{
							autoFocus: true,
							className: g.FullHeight,
							"flow-children": "grid",
							retainFocus: true,
						},
						s,
					),
				),
			),
		);
	} else {
		return null;
	}
}
function Ue(e) {
	const {
		openedItem: t,
		fnPrevItem: r,
		fnNextItem: s,
		focusedRecordingHasClips: o,
	} = Le();
	const [c, m] = (0, n.useState)(false);
	const [u, d] = (0, n.useState)(0);
	const A = (function (e, t) {
		let [r, i] = (0, n.useState)(true);
		let a = true;
		if (e?.type == "clip" || e?.type == "recording") {
			a = r;
		} else if (e?.type == "screenshot") {
			a = false;
		}
		(0, J.c2)(ve, t);
		(0, J.Mi)(a ? 1 : 0, t);
		return i;
	})(t, "GamepadOpenedItem");
	const p = ut(t.id, t.type);
	const h = (0, l.f)();
	const { fnRestartTimer: C } = (0, $.L$)(5000, () => {
		if (u == 0) {
			m(false);
		}
	});
	const _ = n.useCallback(() => {
		C();
		m(true);
	}, [C]);
	const f = (0, z.R7)()?.ownerWindow || window;
	(0, $.l6)(f, "keydown", (e) =>
		(e.key !== "ArrowUp" && e.key !== "ArrowDown") || !c
			? (_(), true)
			: (m(false), true),
	);
	(0, n.useEffect)(() => {
		const { Unregister: e } =
			x.oy.NavigationManager.RegisterForUnhandledButtonDownEvents(_);
		return e;
	}, [_]);
	const [y, S] = n.useState(12);
	const w = (0, b.TL)();
	const B = (0, ee.l5)();
	const v = n.useCallback(
		(e) => {
			const t = w && !B ? 12 : 26;
			const r = (f.innerWidth - e) / 2 - t;
			S(r);
		},
		[S, w, B, f.innerWidth],
	);
	let E = n.useMemo(() => {
		switch (t?.type) {
			case "screenshot":
				return n.createElement(N.Pj, {
					handle: t.id,
					controlsVisible: c,
					fnOnContentWidth: v,
				});
			case "clip":
				return n.createElement(ht, {
					handle: t.id,
					key: t.id,
					controlsVisible: c,
					fnOnContentWidth: v,
				});
			default:
				return n.createElement(R, {
					strSelectedApp: t.id,
					controlsVisible: c,
					fnOnContentWidth: v,
					initialPlaybackDefinition: t.playbackDefinition,
				});
		}
	}, [t, c, v]);
	const M = n.useCallback(() => {
		if (c) {
			m(false);
		} else {
			_();
		}
	}, [c, _]);
	const T = (0, pe.br)();
	const k = n.useCallback(
		(e) => {
			d(1 << e.detail.button);
			switch (e.detail.button) {
				case Z.pR.BUMPER_LEFT:
					if (r) {
						r();
						e.stopPropagation();
					}
					return true;
				case Z.pR.BUMPER_RIGHT:
					if (s) {
						s();
						e.stopPropagation();
					}
					return true;
				case Z.pR.OPTIONS:
					M();
					e.stopPropagation();
					return true;
				case Z.pR.DIR_DOWN:
				case Z.pR.DIR_UP:
					M();
					return true;
				case Z.pR.SELECT:
					if (o) {
						T.Media.Grid({
							state: {
								filter: {
									listSource: {
										type: "app",
										gameid: p,
									},
								},
							},
						});
					}
					return true;
				default:
					_();
					return false;
			}
		},
		[r, s, _, M, o, p, T.Media],
	);
	const D = n.useCallback(
		(e) => {
			d(u & ~(1 << e.detail.button));
			switch (e.detail.button) {
				case Z.pR.OPTIONS:
				case Z.pR.DIR_UP:
				case Z.pR.DIR_DOWN:
					break;
				default:
					_();
			}
		},
		[_, u],
	);
	const F = () => {
		M();
		return true;
	};
	const G = {
		[Z.pR.OPTIONS]: (0, a.we)(
			c
				? "#MediaManager_FloatingControls_Hide"
				: "#MediaManager_FloatingControls_Show",
		),
		[Z.pR.SELECT]: o
			? (0, a.we)("#MediaManager_FloatingControls_GoToClips")
			: undefined,
	};
	if (E) {
		return n.createElement(
			yt,
			{
				onActivity: _,
				reduceBottomMargin: false,
			},
			n.createElement(
				I.b,
				{
					className: (0, i.A)(g.FullHeight, g.BackLabelPaddingRecording),
				},
				n.createElement(
					l.m,
					{
						...h,
						onSetGamepadHeaderVisible: A,
					},
					n.createElement(Me, {
						offset: y,
					}),
					n.createElement(Bt, {
						width: y,
						left: true,
					}),
					n.createElement(Bt, {
						width: y,
					}),
					n.createElement(
						H.Z,
						{
							autoFocus: true,
							className: g.FullHeight,
							"flow-children": "grid",
							noFocusRing: true,
							retainFocus: true,
							onButtonDown: k,
							onButtonUp: D,
							actionDescriptionMap: G,
							onMoveUp: F,
							onMoveDown: F,
						},
						E,
					),
				),
			),
		);
	} else {
		return null;
	}
}
function We(e) {
	const { strGameID: t } = e;
	const r = St(t);
	const i = n.createElement(wt, {
		gameID: t,
	});
	return n.createElement(
		"div",
		{
			className: g.AppNameHeader,
		},
		i,
		n.createElement(
			"div",
			{
				className: g.AppName,
			},
			r ?? (0, a.we)("#MediaManager_AppHeader_NonSteamGame"),
		),
	);
}
function Ve(e) {
	const { clip: t, selected: r, item: i, ...a } = e;
	const s = t.summary;
	const l = (0, o.Bn)(s.clip_id);
	const u = l && l.progress !== 1 && l.resultStatus == 22;
	const [d, A] = (0, n.useState)(false);
	if (!s) {
		return null;
	}
	let p = n.createElement(
		"div",
		{
			className: g.ClipCorner,
		},
		n.createElement(je, {
			clipSummary: s,
		}),
		n.createElement(
			"div",
			{
				className: g.ClipCornerRow,
			},
			n.createElement(qe, {
				msDuration: parseInt(s.duration_ms),
			}),
			u &&
				n.createElement(B.Spinner, {
					className: g.ExportProgressSpinner,
				}),
		),
	);
	const h = s
		? n.createElement(Je, {
				gameID: s.game_id,
				summary: s,
			})
		: undefined;
	return n.createElement(
		"div",
		{
			className: g.ListItemAndGlowContainer,
		},
		n.createElement(
			it,
			{
				item: i,
				toolTipContent: h,
				cornerContent: p,
				selected: r,
				onSubstantialFocusChange: A,
				showHoverGradient: true,
				uploadTime: s?.published_file_id ? s?.date_clipped : undefined,
				...a,
			},
			n.createElement(c.d, {
				clipID: s.clip_id,
				className: g.ListItemThumbnailImg,
			}),
			n.createElement(m.z, {
				clipID: s.clip_id,
				playClip: d,
			}),
		),
		n.createElement(vt, {
			item: i,
		}),
	);
}
const He = 3600;
function je(e) {
	const { clipSummary: t } = e;
	if (t.original_device) {
		if (t.date_downloaded + He < Date.now() / 1000) {
			return null;
		} else {
			return n.createElement(
				"div",
				{
					className: (0, i.A)(g.ClipCornerRow, g.DownloadInfo),
				},
				(0, a.we)("#MediaManager_Clip_Downloaded_New"),
				t.original_gaming_device_type == G.zm.k_EGamingDeviceType_SteamDeck
					? n.createElement(B.DeckLogo, {
							height: "22px",
						})
					: n.createElement(B.SteamLogo, {
							height: "22px",
						}),
				t.original_device,
			);
		}
	} else {
		return null;
	}
}
function qe(e) {
	const { msDuration: t } = e;
	const r = t && !isNaN(t) ? (0, y.yS)(t) : "";
	return n.createElement(
		Ze,
		{
			className: g.DurationTextClip,
		},
		n.createElement(oe.O5, null),
		r,
	);
}
function Qe(e) {
	const { gameID: t } = e;
	const r = (0, u.V)(t);
	if (!r) {
		return null;
	}
	const i = Math.floor(r / 60);
	const s = Math.floor(r % 60);
	const o = n.createElement(
		n.Fragment,
		null,
		i > 0 ? (0, a.we)("#ClipManager_BackgroundRecordingTime_Min", i) : "",
		(0, a.we)("#ClipManager_BackgroundRecordingTime_Sec", s),
	);
	return n.createElement(Ze, null, n.createElement(oe.vN, null), o);
}
function Ze(e) {
	return n.createElement(
		"div",
		{
			className: (0, i.A)(g.DurationText, e.className),
		},
		e.children,
	);
}
function Ye(e) {
	const { highlights: t, bPlayRecording: r, gameID: i } = e;
	let a = (0, we.yX)(t, r);
	let s = a?.m_Event.timeline_id;
	let o = parseInt(a?.m_Event.timeline_offset_ms);
	let l = parseInt(a?.m_Event.duration_ms);
	let c = !a || !a.m_Image || a.m_Image.m_Bytes == "" ? "" : a?.m_Image.m_Bytes;
	return n.createElement(
		n.Fragment,
		null,
		c.length
			? n.createElement("img", {
					className: g.ClipThumbnail,
					src: c,
				})
			: n.createElement("div", {
					className: g.ClipThumbnail,
				}),
		n.createElement(m.G, {
			gameID: i,
			timelineID: s,
			startMS: o,
			durationMS: l,
			play: r,
		}),
	);
}
function Ke(e) {
	const { strGameID: t, handle: r, item: s, ...l } = e;
	let c = (0, O._R)(t);
	const { app: m } = (0, o.Ks)(t);
	const u = n.createElement(Qe, {
		gameID: m.game_id,
	});
	const d = n.createElement(Xe, {
		gameID: m.game_id,
		recording: m,
	});
	const [A, p] = (0, n.useState)(false);
	const [h, C] = (0, n.useState)([]);
	n.useEffect(() => {
		(0, o.Xg)(t, 0).then((e) => C(e));
	}, [t]);
	return n.createElement(
		"div",
		{
			className: g.ListItemAndGlowContainer,
		},
		n.createElement(
			it,
			{
				item: s,
				cornerContent: u,
				onSubstantialFocusChange: p,
				toolTipContent: d,
				...l,
			},
			n.createElement(
				"div",
				{
					className: (0, i.A)(g.BackgroundRecordingListItem),
				},
				!A &&
					n.createElement(
						"div",
						{
							className: (0, i.A)(
								g.BackgroundRecordingListScaler,
								(0, b.TL)() && g.OnDeck,
							),
						},
						n.createElement(F.z, {
							eAssetType: 3,
							className: g.BackgroundRecordingListItemHeaderContainer,
							imageClassName: g.BackgroundRecordingHeaderImg,
							app: c,
						}),
						n.createElement(
							"div",
							{
								className: g.BackgroundRecordingLabel,
							},
							(0, a.we)("#ClipManager_BackgroundRecordingLabel"),
						),
					),
				n.createElement(Ye, {
					gameID: t,
					bPlayRecording: A,
					highlights: h,
				}),
			),
		),
		n.createElement(vt, {
			item: s,
			strGameID: t,
		}),
	);
}
function Xe(e) {
	const { gameID: t, recording: r } = e;
	const i = r.most_recent_start_time + r.timeline_duration_seconds;
	const s = parseInt(r?.file_size) || 0;
	return n.createElement(
		et,
		{
			gameID: t,
		},
		n.createElement(
			rt,
			null,
			n.createElement(
				tt,
				{
					weak: true,
				},
				(0, a.we)("#MediaManager_ItemType_BackgroundRecording"),
			),
		),
		n.createElement(
			rt,
			null,
			n.createElement(tt, null, (0, a.Hq)(Date.now() / 1000 - i)),
		),
		n.createElement(rt, null, n.createElement(tt, null, (0, ae.dm)(s, 2))),
	);
}
function Je(e) {
	const { gameID: t, summary: r } = e;
	const i = (0, o.Bn)(r.clip_id);
	const s = r.date_recorded;
	const l = i && i.progress !== 1 && i.resultStatus == 22;
	return n.createElement(
		et,
		{
			gameID: t,
		},
		n.createElement(
			rt,
			null,
			n.createElement(
				tt,
				{
					weak: true,
				},
				(0, a.we)("#MediaManager_ItemType_Clip"),
			),
		),
		n.createElement(
			rt,
			null,
			n.createElement(tt, null, (0, a.Hq)(Date.now() / 1000 - s)),
		),
		l &&
			n.createElement(
				rt,
				null,
				n.createElement(
					tt,
					{
						weak: true,
					},
					(0, a.we)("#ExportClip_Progress"),
				),
			),
		n.createElement(
			rt,
			null,
			n.createElement(tt, null, (0, ae.dm)(parseInt(r.file_size), 2)),
		),
		r.original_device &&
			n.createElement(
				rt,
				null,
				n.createElement(
					tt,
					null,
					(0, a.we)("#MediaManager_Clip_Downloaded"),
					r.original_gaming_device_type == G.zm.k_EGamingDeviceType_SteamDeck
						? n.createElement(B.DeckLogo, {
								height: "16px",
							})
						: n.createElement(B.SteamLogo, {
								height: "16px",
							}),
					r.original_device,
				),
			),
	);
}
function $e(e) {
	const { screenshot: t } = e;
	return n.createElement(
		et,
		{
			gameID: t.strGameID,
		},
		n.createElement(
			rt,
			null,
			n.createElement(
				tt,
				{
					weak: true,
				},
				(0, a.we)("#MediaManager_ItemType_Screenshot"),
			),
		),
		n.createElement(
			rt,
			null,
			n.createElement(tt, null, (0, a.Hq)(Date.now() / 1000 - t.rtCreated)),
		),
	);
}
function et(e) {
	const { gameID: t, children: r } = e;
	const i = St(t);
	return n.createElement(
		"div",
		{
			className: g.ListItemTooltipBase,
		},
		n.createElement(
			"div",
			{
				className: g.TitleRow,
			},
			n.createElement(wt, {
				gameID: t,
			}),
			n.createElement(
				"div",
				{
					className: g.Title,
				},
				i,
			),
		),
		r,
	);
}
function tt(e) {
	const { children: t, weak: r } = e;
	return n.createElement(
		"div",
		{
			className: (0, i.A)(g.ListItemTooltipDetail, r && g.Weak),
		},
		t,
	);
}
function rt(e) {
	return n.createElement(
		"div",
		{
			className: g.ListItemTooltipDetailSection,
		},
		e.children,
	);
}
function nt(e) {
	const {
		screenshot: t,
		onClick: r,
		selected: a,
		style: s,
		navHandle: o,
		item: l,
		...c
	} = e;
	const [m, u] = (0, n.useState)(false);
	if (m) {
		const e = () => {
			u(false);
			new Image().src = t.strUrl;
		};
		return n.createElement(
			"div",
			{
				className: g.ListItemAndGlowContainer,
			},
			n.createElement(
				it,
				{
					navHandle: o,
					selected: a,
					style: s,
					item: t,
					...c,
				},
				n.createElement(N.TR, {
					onClick: e,
					className: (0, i.A)(g.ListItemThumbnailImg, g.Error, h.Tall),
				}),
			),
		);
	}
	const d = n.createElement($e, {
		screenshot: t,
	});
	return n.createElement(
		"div",
		{
			className: g.ListItemAndGlowContainer,
		},
		n.createElement(
			it,
			{
				onClick: r,
				style: s,
				navHandle: o,
				selected: a,
				uploadTime: t.remote?.time_created,
				toolTipContent: d,
				item: t,
				...c,
			},
			t.strUrl &&
				n.createElement("img", {
					src: t.strUrl,
					onError: () => u(true),
					className: (0, i.A)(g.ListItemThumbnailImg, h.Tall),
					style: {
						aspectRatio: "" + t.nWidth / t.nHeight,
					},
				}),
		),
		n.createElement(vt, {
			item: l,
		}),
	);
}
function it(e) {
	const {
		onClick: t,
		selected: r,
		navHandle: s,
		children: o,
		cornerContent: c,
		item: m,
		toolTipContent: u,
		style: d,
		uploadTime: A,
		onSubstantialFocusChange: p,
		showHoverGradient: h,
		onGamepadFocus: C,
		onMouseEnter: _,
		bOpenedItem: f,
	} = e;
	const b = n.useContext(Te);
	const y = (0, l.f)();
	const S = (0, n.useRef)(undefined);
	const { fnStopTimer: w, fnRestartTimer: B } = (0, $.L$)(
		350,
		() => p(true),
		false,
	);
	const {
		divProps: { onMouseEnter: v, onMouseLeave: I, ...E },
		tooltip: M,
	} = (0, P.fS)({
		toolTipContent: u,
		nDelayShowMS: 350,
	});
	(0, n.useEffect)(() => {
		if (f) {
			if (p) {
				w();
				p(false);
			}
			I();
		}
	}, [f, w, p, I]);
	const T = p
		? () => {
				w();
				p(false);
				I();
			}
		: I;
	const R = (e) => {
		(0, ce.lX)(
			n.createElement(
				ye.IP,
				{
					...y,
				},
				n.createElement(ListItemContextMenu, {
					item: m,
					onView: t,
					summoningElement: S.current,
				}),
			),
			e,
		);
		return true;
	};
	return n.createElement(
		n.Fragment,
		null,
		h &&
			n.createElement("div", {
				className: g.HoverGradientMask,
			}),
		n.createElement(
			H.Z,
			{
				focusable: true,
				noFocusRing: true,
				onActivate: t,
				navRef: s,
				style: d,
				className: (0, i.A)(g.ListItem, b && r && g.Selected),
				onMouseEnter: (e) => {
					const t = p
						? (e) => {
								B();
								v(e);
							}
						: v;
					if (_) {
						_(e);
					}
					t(e);
				},
				onMouseLeave: T,
				onGamepadFocus: (e) => {
					if (C) {
						C(e);
					}
					if (p) {
						B();
					}
				},
				onGamepadBlur: () => {
					if (p) {
						w();
						p(false);
					}
				},
				onMenuButton: R,
				onContextMenu: R,
				onMenuActionDescription: (0, a.we)("#ActionButtonLabelContextMenu"),
				ref: S,
				...E,
			},
			M,
			o,
			b &&
				n.createElement(
					"div",
					{
						className: g.CheckboxContainer,
					},
					r &&
						n.createElement(K.Jlk, {
							className: g.Check,
						}),
				),
			c &&
				n.createElement(
					"div",
					{
						className: g.CornerContent,
					},
					c,
				),
			A &&
				n.createElement(
					"div",
					{
						className: g.UploadContainer,
					},
					n.createElement(mt, {
						timestamp: A,
					}),
				),
		),
	);
}
export function ListItemContextMenu(e) {
	const { item: t, ...r } = e;
	switch (e.item.type) {
		case "clip":
			return n.createElement(st, {
				clip: e.item,
				...r,
			});
		case "screenshot":
			return n.createElement(ot, {
				screenshot: e.item,
				...r,
			});
		case "recording":
			return n.createElement(lt, {
				recording: e.item,
				...r,
			});
		default:
			return null;
	}
}
function st(e) {
	const { clip: t, summoningElement: r, ...i } = e;
	const { fnDeleteClip: a } = (0, o.Gb)();
	const s = (0, d.z)();
	return n.createElement(BaseListItemContextMenu, {
		onDelete: () => a(t.id),
		onShare: () => s((0, be.e3)(t.id), r),
		...i,
	});
}
function ot(e) {
	const { screenshot: t, summoningElement: r, ...i } = e;
	const { mutate: s } = (0, ne.Ab)();
	const o = (0, ue.jE)();
	const l = t.local
		? [
				{
					onSelected: () =>
						SteamClient.Screenshots.ShowScreenshotsOnDisk(t.strGameID),
					label: (0, a.we)("#ScreenshotUploader_ShowOnDisk"),
				},
			]
		: [];
	return n.createElement(BaseListItemContextMenu, {
		onDelete: () =>
			s({
				screenshots: [t],
				location: "all",
			}),
		onShare: () => o(t, r),
		additionalOptions: l,
		...i,
	});
}
function lt(e) {
	const { recording: t, ...r } = e;
	return n.createElement(BaseListItemContextMenu, {
		onDelete: () => (0, o.f5)([t.summary.game_id]),
		...r,
	});
}
export function BaseListItemContextMenu(e) {
	const { onDelete: t, onShare: r, onView: i, additionalOptions: s = [] } = e;
	const { ownerWindow: o } = (0, z.R7)();
	return n.createElement(
		me.tz,
		null,
		i &&
			n.createElement(
				me.kt,
				{
					onSelected: i,
				},
				(0, a.we)("#Button_View"),
			),
		r &&
			n.createElement(
				me.kt,
				{
					onSelected: r,
				},
				(0, a.we)("#MediaManager_FloatingControls_Share"),
			),
		s.map((e) =>
			n.createElement(
				me.kt,
				{
					key: e.label,
					onSelected: e.onSelected,
				},
				e.label,
			),
		),
		t &&
			n.createElement(
				me.kt,
				{
					onSelected: () => {
						(0, Ae.pg)(
							n.createElement(de.o0, {
								onOK: t,
								strOKButtonText: (0, a.we)("#MediaManager_Delete"),
								bDestructiveWarning: true,
								strTitle: (0, a.we)("#MediaManager_Delete"),
								strDescription: (0, a.we)(
									"#MediaManager_DeleteDialog_Explainer",
								),
							}),
							o,
						);
					},
					tone: "destructive",
				},
				(0, a.we)("#MediaManager_FloatingControls_Delete"),
			),
	);
}
function mt(e) {
	const { timestamp: t } = e;
	const { strDay: r, strTime: s } = (0, N.nN)(t);
	const o = (0, a.we)("#ScreenshotUploader_DateUploaded", r, s);
	return n.createElement(
		P.he,
		{
			toolTipContent: o,
		},
		n.createElement(_._X, {
			className: (0, i.A)(g.UploadIndicator),
		}),
	);
}
function ut(e, t) {
	const r = (0, ie.jE)();
	switch (t) {
		case "screenshot":
			const t = (0, ne.e8)(r, e);
			return t?.strGameID;
		case "clip":
			const n = (0, o.XA)(e);
			return n?.game_id;
		case "recording":
			return e;
		default:
			return null;
	}
}
function dt(e) {
	const { handle: t } = e;
	const { loader: r, fnGetManifest: i } = (0, S.Ni)(t);
	return n.createElement(
		H.Z,
		{
			autoFocus: true,
			retainFocus: true,
			focusable: false,
			className: g.FullHeight,
			onClick: () => {},
			"flow-children": "grid",
		},
		n.createElement(
			A.Ni,
			{
				loader: r,
				fnGetManifest: i,
				mode: A.g_.Clips,
			},
			n.createElement(
				I.p,
				null,
				n.createElement(pt, {
					loader: r,
				}),
			),
		),
	);
}
export function useGPUAccelErrorDialog() {
	const e = (0, A.aO)();
	const t = (0, Be.q3)(() => e?.GetGameRecordingVideo()?.GetMediaTypeError());
	let [r, i] = (0, le.d5)(g.GPUAccelerationDialog);
	n.useEffect(() => {
		if (t) {
			i();
		}
	}, [t, i]);
	return r;
}
function pt(e) {
	const { loader: t } = e;
	const r = useGPUAccelErrorDialog();
	return n.createElement(
		w.tB,
		{
			loader: t,
		},
		r,
		n.createElement(
			"div",
			{
				className: g.FocusedClip,
			},
			n.createElement(p.Sd, {
				loader: t,
			}),
		),
	);
}
export function RenderGlyph(e, t, r, a) {
	return n.createElement(te.W, {
		button: (0, re.sr)(e),
		className: (0, i.A)(g.TriggerGlyph, r && g.Disabled, t && g.Active, a),
	});
}
function ht(e) {
	const { handle: t, controlsVisible: r, fnOnContentWidth: i } = e;
	const { loader: a, fnGetManifest: s } = (0, S.Ni)(t);
	return n.createElement(
		H.Z,
		{
			autoFocus: true,
			retainFocus: true,
			focusable: false,
			className: g.FullHeight,
			onClick: () => {},
			"flow-children": "grid",
		},
		n.createElement(
			A.Ni,
			{
				loader: a,
				fnGetManifest: s,
				mode: A.g_.Clips,
				gamepadMode: true,
				controlsVisible: r,
				renderGlyph: RenderGlyph,
			},
			n.createElement(
				I.p,
				null,
				n.createElement(Ct, {
					clipID: t,
					loader: a,
					fnOnContentWidth: i,
				}),
			),
		),
	);
}
function Ct(e) {
	const { loader: t, clipID: r, fnOnContentWidth: i } = e;
	const { elDialog: s, showDeleteDialog: l } = (function (e) {
		const { fnDeleteClip: t } = (0, o.Gb)();
		const r = (0, X.W6)();
		const n = async () => {
			r.goBack();
			await t(e);
		};
		const [i, s] = (0, v.M)({
			bCloseOnOK: true,
			onOK: n,
			strTitle: (0, a.we)("#DeleteClip_Title"),
			strDescription: (0, a.we)("#DeleteClip_Description", e),
		});
		return {
			elDialog: i,
			showDeleteDialog: s,
		};
	})(r);
	const c = (0, d.z)();
	const m = {
		[Z.pR.SECONDARY]: (0, a.we)("#DeleteClip"),
		[Z.pR.START]: (0, a.we)("#ShareClip"),
	};
	const u = n.useCallback(
		(e) => {
			switch (e.detail.button) {
				case Z.pR.SECONDARY:
					l();
					return true;
				case Z.pR.START:
					c((0, be.e3)(r), e.target);
					return true;
			}
			return false;
		},
		[l, c, r],
	);
	return n.createElement(
		n.Fragment,
		null,
		s,
		n.createElement(
			H.Z,
			{
				onButtonDown: u,
				actionDescriptionMap: m,
				className: g.FocusedClip,
				focusable: false,
			},
			n.createElement(
				w.tB,
				{
					loader: t,
				},
				n.createElement(p.Bo, {
					loader: t,
					fnOnContentWidth: i,
				}),
			),
		),
	);
}
export function NoContentAvailable(e) {
	const { topPadding: t } = e;
	const r = (0, b.hf)();
	const i = (0, _.NB)(t);
	const [s] = (0, Ce.VI)("screenshot_key");
	const o = (0, pe.br)();
	const l = {
		"--stickyHeaderHeight": `${i}px`,
	};
	if ((0, b.Y2)()) {
		return n.createElement(ft, null);
	}
	const c = n.createElement(
		n.Fragment,
		null,
		n.createElement("div", {
			className: h.Divider,
		}),
		n.createElement(
			"div",
			{
				className: h.HeaderSmall,
			},
			(0, a.oW)(
				"#ClipManager_Explainer_RecordingHeader",
				n.createElement("span", {
					className: h.NewCallout,
				}),
			),
		),
		n.createElement("div", null, (0, a.we)("#ClipManager_Explainer_Recording")),
		n.createElement(
			"div",
			{
				className: h.ActionContainer,
			},
			n.createElement(
				_.$n,
				{
					className: h.ButtonText,
					variant: "primary",
					onClick: () => {
						o.Settings("GameRecording");
					},
				},
				(0, a.we)("#ClipManager_Explainer_RecordingGetStarted"),
			),
		),
	);
	const m = (0, T.BGameRecordingFeatureEnabled)();
	const u = {
		type: _e.N.k_EControllerBindingType_ControllerAction,
		controller_action: {
			action: 2,
		},
	};
	return n.createElement(
		"div",
		{
			className: h.ExplainerBox,
			style: l,
		},
		n.createElement(
			"div",
			{
				className: h.Explainer,
			},
			n.createElement(
				"div",
				{
					className: h.Header,
				},
				(0, a.we)(
					m
						? "#ClipManager_Explainer_Header"
						: "#ClipManager_Explainer_Header_NoGR",
				),
			),
			n.createElement(
				"div",
				null,
				(0, a.PP)(
					"#ClipManager_Explainer_ScreenshotTip",
					r
						? n.createElement("span", null, s?.display_name)
						: n.createElement(fe.Gn, {
								binding: u,
								onActivate: () => {},
							}),
				),
			),
			m && c,
		),
	);
}
function ft(e) {
	let [t] = (0, Ce.VI)("screenshot_key");
	let r = n.createElement("span", null, t.display_name);
	return n.createElement(
		"div",
		{
			className: h.SingleLineExplainerBox,
		},
		n.createElement(
			"div",
			null,
			(0, a.PP)("#ScreenshotUploader_Explainer_HowToTake", r),
		),
	);
}
export function AllContentFilteredOut(e) {
	const { topPadding: t } = e;
	const r = {
		"--stickyHeaderHeight": `${(0, _.NB)(t)}px`,
	};
	return n.createElement(
		"div",
		{
			className: h.SingleLineExplainerBox,
			style: r,
		},
		n.createElement(
			"div",
			null,
			(0, a.we)("#ClipManager_Explainer_AllContentFilteredOut"),
		),
	);
}
function yt(e) {
	const {
		children: t,
		onLeft: r,
		onRight: a,
		onActivity: s,
		reduceBottomMargin: o,
	} = e;
	const { ownerWindow: l } = (0, z.R7)();
	(0, n.useEffect)(() => {
		const e = (e) => {
			if (
				!he.kD(e.target) ||
				(e.target.nodeName !== "INPUT" &&
					e.target.nodeName !== "TEXTAREA" &&
					!e.target.hasAttribute("contenteditable"))
			) {
				if (e.key === "ArrowLeft" && r) {
					e.preventDefault();
					e.stopPropagation();
					r();
				} else if (e.key === "ArrowRight" && a) {
					e.preventDefault();
					e.stopPropagation();
					a();
				}
			}
		};
		l.document.addEventListener("keydown", e);
		return () => l.document.removeEventListener("keydown", e);
	}, [r, a, l]);
	return n.createElement(
		H.Z,
		{
			focusable: false,
			className: (0, i.A)(
				g.OpenedItemContainer,
				"OpenedItemContainer",
				o && g.ReduceBottomMargin,
			),
			"flow-children": "grid",
			onButtonDown: (e) => {
				if (s) {
					s();
				}
			},
		},
		t,
	);
}
function St(e) {
	const t = (0, O._R)(e);
	return t?.display_name;
}
function wt(e) {
	const { gameID: t, className: r } = e;
	const a = (0, O._R)(t);
	if (a) {
		return n.createElement(F.z, {
			app: a,
			eAssetType: 4,
			className: (0, i.A)(g.GameIcon, r),
		});
	} else {
		return null;
	}
}
function Bt(e) {
	const { width: t, left: r } = e;
	const { nextItem: a, prevItem: s } = Le();
	const o = r ? s : a;
	const [l, m] = n.useState(true);
	const { fnRestartTimer: u } = (0, $.L$)(3000, () => m(false));
	(0, n.useEffect)(() => {
		m(true);
		u();
	}, [o, u]);
	const d = (0, b.Qn)();
	if (!Ee || !d) {
		return null;
	}
	let A;
	switch (o?.type) {
		case "screenshot":
			A = n.createElement(N.tL, {
				handle: o.id,
				left: r,
				width: t,
			});
			break;
		case "clip":
			A = n.createElement(c.d, {
				clipID: o.id,
				className: g.PreviewThumbnailImg,
			});
			break;
		case "recording":
			A = n.createElement("div", {
				className: g.PreviewRecording,
			});
	}
	return n.createElement(
		"div",
		{
			className: (0, i.A)(g.SidePreviewContainer, r && g.Left, l && g.Visible),
			style: {
				width: t,
			},
		},
		A,
	);
}
function vt(e) {
	const { item: t, strGameID: r } = e;
	let a = null;
	switch (t.type) {
		case "screenshot":
			a = n.createElement(It, {
				item: t,
				className: g.BackgroundImageGlow,
			});
			break;
		case "clip":
			a = n.createElement(Et, {
				item: t,
				className: (0, i.A)(g.BackgroundImageGlow, g.Clip),
			});
			break;
		case "recording":
			a = n.createElement(Mt, {
				strGameID: r,
				className: (0, i.A)(g.BackgroundImageGlow, g.Clip),
			});
	}
	return a;
}
function It(e) {
	const { item: t, className: r } = e;
	return n.createElement("img", {
		src: t?.strUrl,
		className: r,
	});
}
function Et(e) {
	const { item: t, className: r } = e;
	const i = (0, o.XA)(t.id);
	if (i) {
		return n.createElement(c.d, {
			clipID: i.clip_id,
			className: r,
		});
	} else {
		return null;
	}
}
function Mt(e) {
	const { strGameID: t, className: r } = e;
	let i = (0, O._R)(t);
	return n.createElement(F.z, {
		eAssetType: 3,
		className: r,
		imageClassName: g.BackgroundRecordingGlowImage,
		app: i,
	});
}
