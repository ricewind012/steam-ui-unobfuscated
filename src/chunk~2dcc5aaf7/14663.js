import { GetOwningWindowForElement } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./91486.js";
import a from "./18057.js";
import s from "./96593.js";
import o from "./96000.js";
import l from "./52958.js";
import c from "./47979.js";
import m from "./88244.js";
import u from "./61175.js";
import d from "./33000.js";
import A from "./39400.js";
import p, { Gn } from "./89193.js";
import g, { PA } from "./41230.js";
import h, { useState, useEffect } from "./63696.js";
import C, { W6 } from "./49519.js";
import _ from "./44846.js";
import f, { lX } from "./31084.js";
import b from "./69164.js";
import y from "./46217.js";
import S from "./50376.js";
import w from "./79421.js";
import B from "./98995.js";
import v, { A as A_1 } from "./90765.js";
import M, { uD } from "./52451.js";
import T, { Qn } from "./72476.js";
import R from "./27941.js";
import { J as J_1 } from "./4237.js";
import N from "./59298.js";
import F, { jv } from "./18521.js";
import { oy } from "./31706.js";
import O from "./42805.js";
import { J as J_1 } from "./81432.js";
import L from "./6356.js";
import z from "./19944.js";
import x, { br } from "./18869.js";
import U from "./45426.js";
import { YQ } from "./30496.js";
import V from "./74491.js";
const k = R;
export let R0 = class extends h.Component {
	m_elScrollElement = undefined;
	constructor(e) {
		super(e);
		Gn(this);
	}
	BindScrollElement(e) {
		this.m_elScrollElement = e;
	}
	render() {
		let e = h.createElement(
			"span",
			{
				className: k.Highlight,
			},
			(0, Localize)("#AllCollectionsView_InfoIconCollections"),
		);
		let t = h.createElement(
			"span",
			{
				className: k.Highlight,
			},
			h.createElement(y.Qi, null),
			(0, Localize)("#AllCollectionsView_InfoIconDynamicCollections"),
		);
		let r = h.createElement(
			"div",
			null,
			LocalizeReact(
				"#AllCollectionsView_InfoIconFav",
				h.createElement(
					"span",
					{
						className: k.Highlight,
					},
					(0, Localize)("#AllCollectionsView_InfoIconFavorites"),
				),
			),
		);
		let n = h.createElement(
			B.t1,
			null,
			h.createElement(
				B.MA,
				null,
				LocalizeReact("#AllCollectionsView_InfoIcon", e, t),
			),
			h.createElement("br", null),
			h.createElement(B.MA, null, r),
		);
		return h.createElement(
			w.ix,
			{
				className: k.Container,
				scrollClassName: k.ScrollContainer,
				scrollToTopThreshold: 1200,
				strRememberScrollKey: "all-collections",
				innerRef: this.BindScrollElement,
				scrollToTopButtonWrapper: U.f,
			},
			h.createElement(
				"div",
				{
					className: k.Header,
				},
				h.createElement(
					"div",
					{
						className: k.Label,
					},
					(0, Localize)("#AllCollectionsView_Title"),
				),
				h.createElement(z.m, {
					direction: "right",
					nBodyAlignment: 0,
					content: n,
				}),
				h.createElement("div", {
					className: k.Rule,
				}),
			),
			h.createElement(lc, {
				coverSize: this.props.coverSize,
				scrollElement: this.m_elScrollElement,
			}),
		);
	}
};
Cg([p.sH], R0.prototype, "m_elScrollElement", undefined);
Cg([M.oI], R0.prototype, "BindScrollElement", null);
R0 = Cg([g.PA], R0);
class j {
	m_name;
	constructor(e) {
		this.m_name = e;
	}
	get sort_as() {
		return this.m_name;
	}
	get display_name() {
		return this.m_name;
	}
	GetFriendsPlaying() {
		return 0;
	}
	GetAchievementPercentage() {
		return 0;
	}
}
const q = {
	childWidth: 130,
	childHeight: 130,
	gridColumnGap: 12,
	gridRowGap: 20,
};
const Q = {
	childWidth: 175,
	childHeight: 175,
	gridColumnGap: 18,
	gridRowGap: 24,
};
const Z = {
	childWidth: 200,
	childHeight: 200,
	gridColumnGap: 24,
	gridRowGap: 30,
};
export const V$ = {
	childWidth: 185,
	childHeight: 185,
	gridColumnGap: 22,
	gridRowGap: 22,
};
export const lc = PA((e) => {
	const {
		coverSize: t,
		scrollElement: r,
		autofocus: n,
		filterCollections: i,
		bHideCreateButton: a,
	} = e;
	const s = Qn();
	const o = h.useContext(V.g);
	const l = h.useCallback(() => {
		const e = s
			? YQ(o.libraryWidth, o.libraryHeight)
			: m.o.GetComputedDisplaySize(t);
		let r;
		if (s) {
			r = V$;
		} else if (e == 1) {
			r = q;
		} else if (e == 2) {
			r = Q;
		} else if (e == 3) {
			r = Z;
		}
		return r;
	}, [t, s, o]);
	let c = n !== false;
	const u = J(i || []);
	const d = l();
	const A = {
		subSectionName: "",
		sectionIndex: 0,
		children: u.map((e) => new j(e.displayName)),
		childHeight: d.childHeight,
		nGridRowGap: d.gridRowGap,
		refSection: h.createRef(),
		refItemsPerRow: h.createRef(),
	};
	let p = 0;
	if (X()) {
		A.children.unshift(new j(""));
		p++;
	}
	if (!a) {
		A.children.unshift(new j(""));
		p++;
	}
	const {
		onItemFocused: g,
		onGamepadButtonDown: C,
		onGamepadButtonUp: _,
		onFocusWithin: f,
		scrollIntoViewHandler: y,
		strFastScrollTo: S,
		navRefPlaceholder: w,
		bindNavRef: B,
	} = J_1([A], 1, r);
	const {
		onFocusWithinContainer: v,
		fastScrollOverlay: I,
		onGamepadDirectionGridContainer: E,
	} = J_1(f, S, w);
	const M = u.map((e, t) =>
		h.createElement(F9, {
			bStartFocused: c && t === 0,
			key: e.id,
			collection: e,
			fnScrollIntoViewHandler: y,
			onGamepadFocus: () => g(0, t + p),
			navRef: (e) => B(0, t + p, e),
		}),
	);
	if (X()) {
		M.unshift(
			h.createElement(te, {
				key: "ea-button",
			}),
		);
	}
	if (!a) {
		M.unshift(
			h.createElement(ee, {
				key: "new-collection-button",
			}),
		);
	}
	return h.createElement(
		b.Z,
		{
			onButtonDown: C,
			onButtonUp: _,
			onFocusWithin: v,
		},
		h.createElement(
			b.Z,
			{
				onGamepadDirection: E,
				ref: A.refSection,
			},
			h.createElement(N.i, {
				childWidth: d.childWidth,
				childHeight: d.childWidth,
				gridColumnGap: d.gridColumnGap,
				gridRowGap: d.gridRowGap,
				scaleGridItems: 1,
				renderOutsideRows: 2,
				paddingLeft: 0,
				paddingRight: 0,
				gridClassName: k.Grid,
				scrollElement: r,
				childElements: M,
				name: "AllCollectionsGrid",
				refItemsPerRow: A.refItemsPerRow,
			}),
		),
		I,
	);
});
function X() {
	return (
		jv() &&
		!o.md.GetCollection("partner-ea-access") &&
		!_.ID(T.TS.LAUNCHER_TYPE)
	);
}
function J(e) {
	return o.md.userCollections.filter((t) => {
		if (t.id == o.A8.Uncategorized) {
			return false;
		}
		if (e.includes(t.id)) {
			return false;
		}
		if (!t.bIsEditable) {
			if (!t.visibleApps.filter(u.n6.collectionsAppFilter.Matches).length) {
				return false;
			}
		}
		return true;
	});
}
export function T4(e) {
	let t = J(e).length;
	if (X()) {
		t++;
	}
	return t;
}
let ee = class extends h.Component {
	m_childRef = h.createRef();
	GetWindow() {
		return GetOwningWindowForElement(this.m_childRef.current);
	}
	render() {
		const e = c.b.GetSelectedAppsInContext();
		const t = l._.GetDragData("apps");
		const r = e.length > 0 || (t && t.length > 0);
		return h.createElement(
			O._k,
			{
				className: A_1(k.Collection, k.NewCollection),
				strTargetId: "new-collection",
				strEligibleClassName: A_1(k.DropOption),
				strTargetedClassName: k.DropTarget,
				fnOnDroppedApps: (e) =>
					oy(
						this.GetWindow(),
						e.map((e) => s.tw.GetAppOverviewByAppID(e)),
						"drop",
					),
				onClick: (e) => oy(this.GetWindow(), [], "button"),
			},
			h.createElement(
				"div",
				{
					className: k.BigPlus,
					ref: this.m_childRef,
				},
				h.createElement(y.OM, null),
			),
			h.createElement(
				"div",
				{
					className: k.CollectionLabel,
				},
				(0, Localize)(
					r
						? "#AllCollectionsView_DragToAddCollection"
						: "#AllCollectionsView_AddCollection",
				),
			),
		);
	}
};
Cg([M.oI], ee.prototype, "GetWindow", null);
ee = Cg([g.PA], ee);
const te = (e) =>
	h.createElement(
		"div",
		{
			className: A_1(k.Collection, k.NewCollection),
			onClick: F.kx,
		},
		h.createElement(
			"div",
			{
				className: k.BigPlus,
			},
			"+",
		),
		h.createElement(
			"div",
			{
				className: k.CollectionLabel,
			},
			(0, Localize)("#EAAccessCollection_NewCollection_Button"),
		),
	);
export const lp = PA((e) => {
	const { className: t, strEligibleClassName: r } = e;
	const {
		bTimerRunning: n,
		HoverEntered: i,
		HoverLeft: s,
	} = (() => {
		const [e, t] = useState(false);
		const r = W6();
		useEffect(() => {
			if (e) {
				const e = window.setTimeout(
					() => r.push(a.BV.Library.AllCollections()),
					600,
				);
				return () => window.clearTimeout(e);
			}
		}, [e, r]);
		return {
			bTimerRunning: e,
			HoverEntered: () => t(true),
			HoverLeft: () => t(false),
		};
	})();
	return h.createElement(
		O._k,
		{
			className: A_1(k.Collection, k.NewCollection, t),
			strTargetId: "nav-to-collection",
			strEligibleClassName: A_1(k.DropOption, r),
			strTargetedClassName: k.DropTarget,
			fnOnDroppedApps: s,
			fnOnTargetEntered: i,
			fnOnTargetLeft: s,
		},
		h.createElement(
			"div",
			{
				className: A_1(k.NavTimer, n && k.StartTimer),
			},
			h.createElement(
				"div",
				{
					className: k.Message,
				},
				(0, Localize)("#GameAction_NavigateToAllCollectionsWithDrag"),
			),
			h.createElement(S.a3E, {
				percentComplete: 0,
			}),
		),
	);
});
export const F9 = PA((e) => {
	const {
		collection: t,
		eCoverSize: r,
		bHide: n,
		bIsShowcase: i,
		bStartFocused: a,
		bNonInteractive: s,
		...o
	} = e;
	const l = h.useCallback(
		(e) => {
			if (t.bIsEditable || t.bIsDeletable) {
				lX(
					h.createElement(L.A, {
						bOnlyManagement: true,
						strCollectionId: t.id,
						strDisplayName: t.displayName,
					}),
					e,
				);
			}
		},
		[t],
	);
	const c = br();
	const [m, p, g] = uD();
	if (n) {
		return null;
	}
	let C = A_1(
		k.Collection,
		i && k.ShowcaseView,
		r == 1 && k.Small,
		r == 2 && k.Medium,
		r == 3 && k.Large,
	);
	let _ = {
		onSecondaryButton: p,
	};
	_.onSecondaryActionDescription = h.createElement(d.dq, null);
	_.onMenuButton = l;
	_.onMenuActionDescription = (0, Localize)("#ActionButtonLabelContextMenu");
	return h.createElement(
		O.wf,
		{
			focusable: !s,
			...o,
			..._,
			navKey: t.id,
			autoFocus: a,
			className: C,
			strCollectionId: t.id,
			strEligibleClassName: k.DropOption,
			strTargetedClassName: k.DropTarget,
			onContextMenu: l,
			onClick: () => c.Collection(t.id),
		},
		m &&
			h.createElement(A.x, {
				collectionid: "",
				closeModal: g,
			}),
		h.createElement(ie, {
			...e,
		}),
		h.createElement(
			"div",
			{
				className: k.CollectionLabel,
			},
			h.createElement("div", null, t.displayName),
			h.createElement(
				"div",
				{
					className: k.CollectionLabelCount,
				},
				"( ",
				t.GetAppCountWithToolsFilter(u.n6.collectionsAppFilter),
				" )",
			),
		),
		t.bIsDynamic &&
			h.createElement(
				B.he,
				{
					className: k.DynamicCollection,
					toolTipContent: (0, Localize)("#Collection_DynamicCollection"),
					nDelayShowMS: 100,
				},
				h.createElement(y.Qi, null),
			),
	);
});
let ie = class extends h.Component {
	render() {
		let e = this.props.collection.visibleApps;
		e = e
			.slice()
			.sort((e, t) => t.minutes_playtime_forever - e.minutes_playtime_forever)
			.slice(0, 13);
		let t = null;
		if (e.length > 0) {
			let [r] = e;
			t = h.createElement(
				"div",
				{
					className: k.CollectionBG,
				},
				h.createElement(i.z, {
					className: k.BackgroundImage,
					eAssetType: 0,
					app: r,
				}),
			);
		}
		const r = e.map((e) =>
			h.createElement(
				"div",
				{
					className: k.CapsuleImage,
					key: e.appid,
				},
				h.createElement(i.z, {
					className: k.Image,
					eAssetType: 0,
					app: e,
				}),
			),
		);
		const n = k[`Has${r.length}Apps`];
		return h.createElement(
			"div",
			{
				className: A_1(k.CollectionImage, n),
			},
			t,
			h.createElement(
				"div",
				{
					className: k.DisplayCaseContainerBounds,
				},
				h.createElement(
					"div",
					{
						className: k.DisplayCaseContainer,
					},
					h.createElement(
						"div",
						{
							className: k.AppGrid,
						},
						r,
					),
				),
			),
		);
	}
};
ie = Cg([g.PA], ie);
