var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./91486.js");
var a = require("./18057.js");
var s = require("./96593.js");
var o = require("./96000.js");
var l = require("./52958.js");
var c = require("./47979.js");
var m = require("./88244.js");
var u = require("./61175.js");
var d = require("./33000.js");
var A = require("./39400.js");
var p = require(/*webcrack:missing*/ "./89193.js");
var g = require(/*webcrack:missing*/ "./41230.js");
var h = require(/*webcrack:missing*/ "./63696.js");
var C = require(/*webcrack:missing*/ "./49519.js");
var _ = require(/*webcrack:missing*/ "./44846.js");
var f = require(/*webcrack:missing*/ "./31084.js");
var b = require(/*webcrack:missing*/ "./69164.js");
var y = require("./46217.js");
var S = require(/*webcrack:missing*/ "./50376.js");
var w = require("./79421.js");
var B = require(/*webcrack:missing*/ "./98995.js");
var v = require(/*webcrack:missing*/ "./90765.js");
var I = require(/*webcrack:missing*/ "./54644.js");
var E = require(/*webcrack:missing*/ "./46108.js");
var M = require(/*webcrack:missing*/ "./52451.js");
var T = require(/*webcrack:missing*/ "./72476.js");
var R = require("./27941.js");
var k = R;
var D = require("./4237.js");
var N = require("./59298.js");
var F = require("./18521.js");
var G = require("./31706.js");
var O = require("./42805.js");
var P = require("./81432.js");
var L = require("./6356.js");
var z = require("./19944.js");
var x = require("./18869.js");
var U = require("./45426.js");
var W = require("./30496.js");
var V = require("./74491.js");
export let R0 = class extends h.Component {
	m_elScrollElement = undefined;
	constructor(e) {
		super(e);
		(0, p.Gn)(this);
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
			(0, E.we)("#AllCollectionsView_InfoIconCollections"),
		);
		let t = h.createElement(
			"span",
			{
				className: k.Highlight,
			},
			h.createElement(y.Qi, null),
			(0, E.we)("#AllCollectionsView_InfoIconDynamicCollections"),
		);
		let r = h.createElement(
			"div",
			null,
			(0, E.PP)(
				"#AllCollectionsView_InfoIconFav",
				h.createElement(
					"span",
					{
						className: k.Highlight,
					},
					(0, E.we)("#AllCollectionsView_InfoIconFavorites"),
				),
			),
		);
		let n = h.createElement(
			B.t1,
			null,
			h.createElement(
				B.MA,
				null,
				(0, E.PP)("#AllCollectionsView_InfoIcon", e, t),
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
					(0, E.we)("#AllCollectionsView_Title"),
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
(0, n.Cg)([p.sH], R0.prototype, "m_elScrollElement", undefined);
(0, n.Cg)([M.oI], R0.prototype, "BindScrollElement", null);
R0 = (0, n.Cg)([g.PA], R0);
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
export const lc = (0, g.PA)((e) => {
	const {
		coverSize: t,
		scrollElement: r,
		autofocus: n,
		filterCollections: i,
		bHideCreateButton: a,
	} = e;
	const s = (0, T.Qn)();
	const o = h.useContext(V.g);
	const l = h.useCallback(() => {
		const e = s
			? (0, W.YQ)(o.libraryWidth, o.libraryHeight)
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
	} = (0, D.J)([A], 1, r);
	const {
		onFocusWithinContainer: v,
		fastScrollOverlay: I,
		onGamepadDirectionGridContainer: E,
	} = (0, P.J)(f, S, w);
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
		(0, F.jv)() &&
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
		return (0, I.qf)(this.m_childRef.current);
	}
	render() {
		const e = c.b.GetSelectedAppsInContext();
		const t = l._.GetDragData("apps");
		const r = e.length > 0 || (t && t.length > 0);
		return h.createElement(
			O._k,
			{
				className: (0, v.A)(k.Collection, k.NewCollection),
				strTargetId: "new-collection",
				strEligibleClassName: (0, v.A)(k.DropOption),
				strTargetedClassName: k.DropTarget,
				fnOnDroppedApps: (e) =>
					(0, G.oy)(
						this.GetWindow(),
						e.map((e) => s.tw.GetAppOverviewByAppID(e)),
						"drop",
					),
				onClick: (e) => (0, G.oy)(this.GetWindow(), [], "button"),
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
				(0, E.we)(
					r
						? "#AllCollectionsView_DragToAddCollection"
						: "#AllCollectionsView_AddCollection",
				),
			),
		);
	}
};
(0, n.Cg)([M.oI], ee.prototype, "GetWindow", null);
ee = (0, n.Cg)([g.PA], ee);
const te = (e) =>
	h.createElement(
		"div",
		{
			className: (0, v.A)(k.Collection, k.NewCollection),
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
			(0, E.we)("#EAAccessCollection_NewCollection_Button"),
		),
	);
export const lp = (0, g.PA)((e) => {
	const { className: t, strEligibleClassName: r } = e;
	const {
		bTimerRunning: n,
		HoverEntered: i,
		HoverLeft: s,
	} = (function () {
		const [e, t] = (0, h.useState)(false);
		const r = (0, C.W6)();
		(0, h.useEffect)(() => {
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
			className: (0, v.A)(k.Collection, k.NewCollection, t),
			strTargetId: "nav-to-collection",
			strEligibleClassName: (0, v.A)(k.DropOption, r),
			strTargetedClassName: k.DropTarget,
			fnOnDroppedApps: s,
			fnOnTargetEntered: i,
			fnOnTargetLeft: s,
		},
		h.createElement(
			"div",
			{
				className: (0, v.A)(k.NavTimer, n && k.StartTimer),
			},
			h.createElement(
				"div",
				{
					className: k.Message,
				},
				(0, E.we)("#GameAction_NavigateToAllCollectionsWithDrag"),
			),
			h.createElement(S.a3E, {
				percentComplete: 0,
			}),
		),
	);
});
export const F9 = (0, g.PA)(function (e) {
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
				(0, f.lX)(
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
	const c = (0, x.br)();
	const [m, p, g] = (0, M.uD)();
	if (n) {
		return null;
	}
	let C = (0, v.A)(
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
	_.onMenuActionDescription = (0, E.we)("#ActionButtonLabelContextMenu");
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
					toolTipContent: (0, E.we)("#Collection_DynamicCollection"),
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
			let r = e[0];
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
				className: (0, v.A)(k.CollectionImage, n),
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
ie = (0, n.Cg)([g.PA], ie);
