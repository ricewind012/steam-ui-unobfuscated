import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./31958.js";
import a from "./44846.js";
import s from "./12767.js";
import l, { H_ as H } from "./47801.js";
import c from "./88244.js";
import m from "./87935.js";
import u from "./1965.js";
import d, { lX } from "./31084.js";
import A from "./88750.js";
import p, { N as N_1 } from "./94715.js";
import g from "./34792.js";
import h from "./98995.js";
import C, { A as A_1 } from "./90765.js";
import f from "./60712.js";
import y from "./69164.js";
import S from "./26271.js";
import w, { S1 } from "./43520.js";
import v from "./38731.js";
import E, { wY } from "./99251.js";
const _ =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAEFCAYAAAD60+tkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALuSURBVHhe7dMxAcAwDMCwdCjDn0j7jIMf6TECn929AyS+v0DAgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwIIQNCyIAQMiCEDAghA0LIgBAyIIQMCCEDQsiAEDIghAwImZkHnS8EEZhTJo8AAAAASUVORK5CYII=";
const b = f;
const I = v;
const M = 224 / 261;
export function DI(e) {
	const { className, bMaxed, bClickable, data, animateHover } = e;
	const h = data.nOwned > 0 || bMaxed;
	let f = e.cardScale ?? (h ? 2.5 : 1.5);
	const {
		hoverActive,
		wrapperProps,
		cardProps,
		containerProps,
		imageProps,
		shineElements,
	} = ((e, t, r) => {
		const [a, setA] = n.useState(false);
		const [o, setO] = n.useState(0);
		const [c, setC] = n.useState(0);
		const [u, setU] = n.useState(0);
		const [A, setA_1] = n.useState(0);
		const g = A / M;
		const h = A * t;
		const C = g * t;
		const _ = wY((e) => {
			setA_1(e.contentRect.width);
		});
		let f = {
			transform: "rotate3D( 0, 0, 0, 0deg)",
		};
		let b = "";
		let y = 1;
		let S = 1;
		let w = 1;
		function B(e) {
			return 1 / (1 + Math.E ** -e);
		}
		n.useEffect(() => {
			setA(false);
			setO(0);
			setC(0);
			setU(0);
		}, [r]);
		const v = n.useCallback(
			(e) => {
				let t = i.Fu(e.offsetX, 0, h, -1, 1);
				let r = i.Fu(e.offsetY, 0, C, 1, -1);
				t = B(t);
				r = B(r);
				t = i.Fu(t, 0, 1, -45, 45);
				r = i.Fu(r, 0, 1, -45, 45);
				setO(t);
				setC(r);
			},
			[h, C],
		);
		const T = n.useCallback(
			(e) => {
				const r = e.currentTarget.ownerDocument.defaultView;
				if (!a) {
					let n = e.currentTarget.getBoundingClientRect();
					let i = n.left + n.width / 2 + (n.width * t) / 2;
					const a = 30;
					if (i > r.innerWidth - a) {
						setU(r.innerWidth - i - a);
					} else {
						setU(0);
					}
				}
				setA(true);
				r.addEventListener("mousemove", v);
			},
			[v, a, t],
		);
		const R = n.useCallback(
			(e) => {
				e.currentTarget.ownerDocument.defaultView.removeEventListener(
					"mousemove",
					v,
				);
				setA(false);
			},
			[v],
		);
		if (a) {
			f = {
				transform: `rotateX(${c}deg) rotateY(${o}deg)`,
			};
			b = `brightness(${i.Fu(c, -45, 45, 0, 2)})`;
			y = i.Fu(o, -45, 45, -1, 1);
			S = i.Fu(o, -45, 45, 1, -1);
			w = i.Fu(c, -45, 45, -1, 1);
		}
		const k = {
			transform: `scale(${1 / t})`,
			width: h,
			height: C,
			left: ((h - A) * -1) / 2,
			top: ((C - g) * -1) / 2,
		};
		if (e && a) {
			let e = "scale(1.0)";
			if (u) {
				e = `translateX(${u}px) ${e}`;
			}
			k.transform = e;
		}
		const D = (
			<>
				<div
					className={I.CardShineContainer_W}
					style={{
						opacity: y,
					}}
				>
					<div
						className={I.CardShine}
						style={{
							left: -o * 2,
							top: c * 2,
						}}
					/>
				</div>
				<div
					className={I.CardShineContainer_E}
					style={{
						opacity: S,
					}}
				>
					<div
						className={I.CardShine}
						style={{
							left: -o * 2,
							top: c * 2,
						}}
					/>
				</div>
				<div
					className={I.CardShineContainer_S}
					style={{
						opacity: w,
					}}
				>
					<div
						className={I.CardShine}
						style={{
							left: -o * 2,
							top: c * 2,
						}}
					/>
				</div>
			</>
		);
		return {
			hoverActive: a,
			wrapperProps: {
				ref: _,
				style: {
					height: g,
				},
			},
			cardProps: {
				onMouseEnter: e ? T : undefined,
				onMouseLeave: e ? R : undefined,
				style: k,
			},
			containerProps: {
				style: f,
			},
			imageProps: {
				filterStyle: b,
			},
			shineElements: D,
		};
	})(animateHover, f, data.strMarketHash);
	let c_strImgURL = data.strImgURL;
	const [D] = g.rV.GetClientSetting("library_low_bandwidth_mode");
	if (D) {
		c_strImgURL += "/100x100";
	}
	if (hoverActive) {
		c_strImgURL = data.strImgURL;
	}
	const [N, F, G, O] = ((e) => {
		const [t, setT] = n.useState(true);
		const [i, setI] = n.useState(false);
		n.useEffect(() => {
			setT(true);
			setI(false);
		}, [e]);
		const s = n.useCallback((e) => {
			setT(false);
		}, []);
		const o = n.useCallback((e, t, n) => {
			setT(false);
			setI(true);
		}, []);
		let I_Loaded = I.Loaded;
		if (t) {
			I_Loaded = I.Loading;
		} else if (i) {
			I_Loaded = I.LoadFailed;
		}
		return [I_Loaded, i, s, o];
	})(c_strImgURL);
	const P = n.useCallback(
		(e) =>
			N_1({
				strURL: data.strArtworkURL,
				strTitle: data.strTitle,
				windowOverride: GetOwningWindowForEvent(e),
			}),
		[data.strArtworkURL, data.strTitle],
	);
	const L = n.useCallback(
		(e) => {
			if (data.strMarketHash) {
				const t = (e) => {
					GetOwningWindowForEvent(e).location.href = m.B7.BuildSteamURL(
						"CommunityMarketSearch",
						a.cw,
						encodeURIComponent(data.strMarketHash),
					);
				};
				lX(
					<A.tz>
						<A.kt onSelected={t}>
							{(0, Localize)("#AppDetails_SearchCard")}
						</A.kt>
					</A.tz>,
					e,
				);
			}
		},
		[data.strMarketHash],
	);
	return (
		<div
			{...wrapperProps}
			className={A_1(
				I.CardWrapper,
				h ? I.Owned : I.Unowned,
				animateHover && I.AnimateHover,
			)}
		>
			<y.Z
				{...cardProps}
				focusable
				className={A_1(
					className,
					N,
					I.Card,
					h ? I.Owned : I.Unowned,
					(h || bClickable) && I.Clickable,
					animateHover && I.AnimateHover,
				)}
				onActivate={bClickable || h ? P : undefined}
				onContextMenu={L}
			>
				<div {...containerProps} className={I.CardContainer}>
					<s.c
						style={{
							filter: `saturate(${h ? "1" : hoverActive ? "0.3" : "0.1"}) ${
								imageProps.filterStyle
							}`,
						}}
						className={I.CardImage}
						rgSources={[c_strImgURL, _]}
						onLoad={G}
						onIncrementalError={O}
						alt={data.strTitle}
					/>
					{F && <div className={I.Title}>{data.strTitle}</div>}
					{shineElements}
				</div>
			</y.Z>
		</div>
	);
}
function R(e, t) {
	GetOwningWindowForEvent(e).location.href = m.B7.BuildSteamURL(
		"SteamIDAppTradingCardsPage",
		t,
	);
}
export function LB(e) {
	const {
		details: { unAppID: t },
	} = e;
	const r = H(t);
	if (!r.rgCards) {
		return null;
	}
	const i = r.rgCards.map((e) => (
		<DI
			key={e.strMarketHash}
			bMaxed={r.bMaxed}
			bClickable={r.nLevel > 0}
			data={e}
			animateHover
		/>
	));
	let a = (
		<span className={I.Highlight}>
			{(0, Localize)("#AppDetails_TradingCards_Tooltip1")}
		</span>
	);
	let s = (
		<span className={I.Highlight}>
			{(0, Localize)("#AppDetails_TradingCards_Tooltip2")}
		</span>
	);
	let m = (
		<h.t1>
			<h.MA>{a}</h.MA>
			<br />
			<h.MA>{s}</h.MA>
		</h.t1>
	);
	const d = c.o.rightPanelWidth;
	let A = "";
	if (d >= parseInt(b.RightBreakNarrow) + 42) {
		A = I.SlightlyLargerThanNarrow;
	}
	if (d >= parseInt(b.RightBreakNarrow) + 242) {
		A = I.BetweenNarrowAndMedium;
	}
	return (
		<u.n
			feature={3}
			primaryAction={{
				label: (0, Localize)("#AppDetails_ViewTradingCards"),
				action: (e) => R(e, t),
			}}
			className={A_1(I.Container, A)}
			label={(0, Localize)("#AppDetails_SectionTitle_TradingCards")}
			tooltip={m}
			highlight={<D appid={t} badge={r} />}
			rightColumnSection
		>
			<u.n.Body>
				<N appid={t} badge={r} />
				<div className={I.CardsSection}>{i}</div>
			</u.n.Body>
		</u.n>
	);
}
function D(e) {
	const {
		appid,
		badge: {
			nLevel: r,
			strIconURL: i,
			strName: a,
			strNextLevelName: s,
			nNextLevelXP: l,
			nXP: c,
		},
	} = e;
	const m = (e) => R(e, appid);
	const p =
		r == 0 ? (
			<>
				<div className={A_1(I.Badge, I.EmptyCircle)} />
				<div className={I.BadgeInfo}>
					<div className={I.BadgeName}>{s}</div>
					<div className={I.BadgeLevel}>
						{(0, Localize)("#AppDetails_UnearnedBadgeXP", l)}
					</div>
				</div>
			</>
		) : (
			<>
				<img className={I.Badge} src={i} onClick={m} />
				<div className={I.BadgeInfo}>
					<div className={I.BadgeName}>{a}</div>
					<div className={I.BadgeLevel}>
						{(0, Localize)("#AppDetails_BadgeLevel", r, c)}
					</div>
				</div>
			</>
		);
	return (
		<u.n.Highlight
			className={I.BadgeSection}
			onContextMenu={(e) =>
				lX(
					<A.tz>
						<A.kt onSelected={m}>
							{(0, Localize)("#AppDetails_ViewBadgePage")}
						</A.kt>
					</A.tz>,
					e,
				)
			}
		>
			{p}
		</u.n.Highlight>
	);
}
function N(e) {
	const {
		appid,
		badge: { rgCards: r, bMaxed: i },
	} = e;
	if (r.length === 0) {
		return null;
	}
	const a = r.reduce((e, t) => (i || t.nOwned !== 0 ? e : e + 1), 0);
	if (a > 0) {
		return (
			<div className={I.CardsLeft}>
				{LocalizePlural("#AppDetails_TradingCardsLeft", a)}
			</div>
		);
	} else if (a != 0 || i) {
		return (
			<div className={A_1(I.CardsLeft, I.BadgeMaxed)}>
				{(0, Localize)("#AppDetails_TradingCardsMaxed")}
			</div>
		);
	} else {
		return (
			<div
				className={A_1(I.CardsLeft, I.CanLevelUp)}
				onClick={(e) => R(e, appid)}
			>
				{(0, Localize)("#AppDetails_TradingCardsLevelUp")}
			</div>
		);
	}
}
export function on(e) {
	const {
		details: { unAppID: t },
	} = e;
	const r = H(t);
	if (!r.rgCards) {
		return null;
	}
	const [i, a] = r.rgCards.reduce(
		([e, t], r) => {
			if (r.nOwned > 0) {
				e.push(r);
			} else {
				t.push(r);
			}
			return [e, t];
		},
		[[], []],
	);
	return (
		<u.n
			feature={3}
			className={A_1(I.Container)}
			label={(0, Localize)("#AppDetails_SectionTitle_TradingCards")}
			highlight={<D appid={t} badge={r} />}
			rightColumnSection
		>
			<u.n.Body>
				<G cards={i} />
				<N appid={t} badge={r} />
				<G cards={a} />
			</u.n.Body>
		</u.n>
	);
}
function G(e) {
	const { cards } = e;
	const r = S1();
	return (
		<w.VJ>
			<y.Z flow-children="row">
				<S.Q
					className={I.SummaryCarouselContainer}
					leftMargin={32}
					edgeMask="none"
					fnUpdateArrows={() => {}}
					fnRenderScrollingDiv={({ htmlElementRef, ...t }) => (
						<div {...t} ref={htmlElementRef} style={r} />
					)}
				>
					{cards.map((e) => (
						<O key={e.strName} card={e} />
					))}
					<div
						style={{
							width: "16px",
						}}
						data-carousel="ignore"
					/>
				</S.Q>
			</y.Z>
		</w.VJ>
	);
}
function O(e) {
	const { card } = e;
	const r = card.nOwned > 0;
	return (
		<y.Z
			focusable={!r}
			focusClassName={I.Focused}
			className={A_1(I.TradingCardCarouselItem, r ? I.Owned : I.Unowned)}
			onOKActionDescription={r || null}
		>
			<DI data={card} animateHover={false} bMaxed={false} />
		</y.Z>
	);
}
