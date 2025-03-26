var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./35488.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require(/*webcrack:missing*/ "./90242.js");
var l = require("./60680.js");
var c = l;
const m = i.forwardRef(function (e, t) {
	return i.createElement(
		o.fu,
		{
			noFocusRing: true,
			className: (0, s.A)(
				e.className,
				c.BasicHomeDropDownControlButton,
				c.SortingDropDownControlButton,
			),
			focusable: e.focusable,
			disabled: e.disabled,
			onClick: e.onClick,
			tabIndex: e.tabIndex,
			ref: t,
		},
		!e.disabled &&
			i.createElement(a.Carat, {
				direction: "down",
			}),
		e.children,
		i.createElement(a.SortDescending, {
			className: c.SortIcon,
		}),
	);
});
var u = require("./96000.js");
var d = require("./48289.js");
var A = require("./34792.js");
var p = require("./88244.js");
var g = require("./61175.js");
var h = require("./39400.js");
var C = require(/*webcrack:missing*/ "./89193.js");
var _ = require(/*webcrack:missing*/ "./41230.js");
var f = require(/*webcrack:missing*/ "./90095.js");
var b = require(/*webcrack:missing*/ "./31084.js");
var y = require(/*webcrack:missing*/ "./69164.js");
var S = require("./56655.js");
var w = require("./64608.js");
var B = require("./7514.js");
var v = require(/*webcrack:missing*/ "./42318.js");
var I = require(/*webcrack:missing*/ "./49455.js");
import { _f } from "../../actual_src/utils/domutils.js";
import {
	Localize,
	LocalizeReact,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
var T = require(/*webcrack:missing*/ "./52451.js");
var R = require(/*webcrack:missing*/ "./72476.js");
var k = require("./10927.js");
var D = require("./13260.js");
var N = D;
var F = require("./4237.js");
var G = require("./30496.js");
var O = require("./23393.js");
var P = require("./59298.js");
var L = require("./81432.js");
var z = require("./74491.js");
var x = require("./69.js");
var U = require("./91486.js");
var W = require(/*webcrack:missing*/ "./3524.js");
export let OJ = class extends i.Component {
	static contextType = R.QO;
	constructor(e) {
		super(e);
		(0, C.Gn)(this);
	}
	m_elDivRef = i.createRef();
	OnChange(e) {
		this.props.onSortChangeCallback(e.data);
		if (this.m_elDivRef.current) {
			this.m_elDivRef.current.focus();
		}
	}
	render() {
		const {
			className: e,
			initialValue: t,
			onSortChangeCallback: r,
			disabled: n,
			rgOptions: a,
			...o
		} = this.props;
		const l = Localize("#Library_SortCollectionBy");
		const c = a || q();
		const u = this.context?.IN_GAMEPADUI;
		const d = this.props.presentation ?? "auto";
		const A = d == "gamepadui" || (d == "auto" && u);
		return i.createElement(
			"div",
			{
				className: (0, s.A)(N.SortingDropDown, e),
				ref: this.m_elDivRef,
				tabIndex: -1,
				...o,
			},
			!A &&
				i.createElement(
					"div",
					{
						className: N.SortingDropDownLabel,
					},
					l,
				),
			i.createElement(w.ZU, {
				rgOptions: c,
				onChange: this.OnChange,
				disabled: n,
				selectedOption: t,
				strDropDownClassName: N.SortingDropDownContainer,
				strDropDownItemClassName: N.SortingDropDownItems,
				menuLabel: l,
				renderButton: A ? m : null,
			}),
		);
	}
};
export function dq(e) {
	const t = (0, S.Wm)(3);
	const r = (0, S.Wm)(2);
	const n = (0, S.Wm)(0);
	const a = (0, S.Wm)(1);
	const o = e.overrideCompatFilter ?? u.md.GetCurrentGamepadFilter();
	let l = null;
	if (u.md.BHasNonGamepadOptions()) {
		l = i.createElement(
			"div",
			{
				className: (0, s.A)(N.CompatFooterIcons, N.Advanced),
			},
			Localize("#Library_FilteredBy_Advanced"),
		);
	} else if (R.TS.ON_DECK || o < 15) {
		l = i.createElement(
			"div",
			{
				className: N.CompatFooterIcons,
			},
			i.createElement(t, null),
			o >= 13 && i.createElement(r, null),
			o >= 14 && i.createElement(n, null),
			o >= 15 && i.createElement(a, null),
		);
	}
	if (l) {
		return i.createElement(
			"div",
			{
				className: N.CompatFooterDescription,
			},
			LocalizeReact("#Library_FilteredBy", l),
		);
	} else {
		return i.createElement(
			"div",
			{
				className: N.CompatFooterDescription,
			},
			Localize("#Library_FilteredBy_None"),
		);
	}
}
function j(e) {
	switch (e) {
		case 1:
			return Localize("#Library_SortByAlphabetical");
		case 10:
			return Localize("#Library_SortByFriendsPlaying");
		case 2:
			return Localize("#Library_SortByPctAchievementsComplete");
		case 3:
			return Localize("#Library_SortByLastUpdated");
		case 4:
			return Localize("#Library_SortByHoursPlayed");
		case 5:
			return Localize("#Library_SortByLastPlayed");
		case 6:
			return Localize("#Library_SortByReleaseDate");
		case 7:
			return Localize("#Library_SortByAddedToLibrary");
		case 8:
			return Localize("#Library_SortBySizeOnDisk");
		case 9:
			return Localize("#Library_SortByMetacriticScore");
		case 11:
			return Localize("#Library_SortBySteamReview");
	}
}
function q() {
	return [1, 10, 2, 4, 5, 6, 7, 8, 9, 11].map((e) => ({
		data: e,
		label: j(e),
	}));
}
export function K9(e) {
	return i.useMemo(
		() => (e ? j(e) : Localize("#Library_SortCollectionBy")),
		[e],
	);
}
(0, n.Cg)([C.XI.bound], OJ.prototype, "OnChange", null);
OJ = (0, n.Cg)([_.PA], OJ);
class Z extends i.Component {
	m_elemScrollableAncestor = null;
	m_elemHeader = null;
	m_fBackgroundOpacity = 0;
	m_resizeObserver = undefined;
	m_mutationObserver = new MutationObserver(this.updateBackgroundFade);
	m_fMarginTop = 0;
	setHeaderElement(e) {
		this.stopScrollListening();
		this.m_elemHeader = e;
		if (this.m_elemHeader) {
			this.m_elemScrollableAncestor = (0, _f)(e, "y");
			if (this.m_elemScrollableAncestor) {
				this.m_elemScrollableAncestor.addEventListener(
					"scroll",
					this.updateBackgroundFade,
				);
				this.m_resizeObserver = (0, T.Fd)(
					this.m_elemScrollableAncestor,
					this.updateBackgroundFade,
				);
				this.m_mutationObserver.observe(this.m_elemScrollableAncestor, {
					subtree: true,
					childList: true,
				});
			}
			this.m_fMarginTop = 0;
			setTimeout(() => {
				this.m_fMarginTop = Number.parseFloat(
					window.getComputedStyle(this.m_elemHeader).marginTop,
				);
				this.updateBackgroundFade();
			}, 0);
		}
	}
	stopScrollListening() {
		if (this.m_elemScrollableAncestor) {
			this.m_resizeObserver.disconnect();
			this.m_resizeObserver = undefined;
			this.m_mutationObserver.disconnect();
			this.m_elemScrollableAncestor.removeEventListener(
				"scroll",
				this.updateBackgroundFade,
			);
			this.m_elemScrollableAncestor = null;
		}
	}
	componentWillUnmount() {
		this.stopScrollListening();
	}
	updateBackgroundFade() {
		const e = Math.floor(this.m_elemScrollableAncestor?.scrollTop ?? 0);
		const t = this.m_elemHeader?.offsetTop ?? 0;
		const r = this.m_elemHeader?.offsetParent?.offsetTop ?? 0;
		const n = Math.round(r + t - e);
		const i = this.m_fMarginTop < 0 ? -this.m_fMarginTop : 0;
		let a = 1 - n / ((this.m_elemHeader?.clientHeight ?? 0) - i);
		if (a > 0.95) {
			a = 1;
		}
		if (this.m_fBackgroundOpacity != a) {
			this.m_fBackgroundOpacity = a;
			this.m_elemHeader.style.setProperty(
				"--sticky-header-background-opacity",
				"" + a,
			);
		}
	}
	render() {
		let e = this.props.subSectionName;
		let t = this.props.notReallySticky;
		let r = t ? null : this.setHeaderElement;
		let n = (0, s.A)(N.AppGridSectionHeader, t && N.NotReallySticky);
		let a = {};
		if (this.props.hideHeaderIfEmpty && !e) {
			a = {
				display: "none",
			};
		}
		return i.createElement(
			"div",
			{
				key: "Header" + this.props.subSectionName,
				ref: r,
				className: n,
				style: a,
			},
			i.createElement(
				"div",
				{
					className: N.AppGridSectionLabel,
				},
				e,
			),
			i.createElement("div", {
				className: N.Rule,
			}),
		);
	}
}
(0, n.Cg)([T.oI], Z.prototype, "setHeaderElement", null);
(0, n.Cg)([T.oI], Z.prototype, "updateBackgroundFade", null);
const Y = (0, _.PA)((e) => {
	const t = i.useContext(R.QO);
	const r = {
		childWidth: e.childWidth,
		childHeight: e.childHeight,
		gridRowGap: e.nGridRowGap,
	};
	const n = e.stickyHeader;
	const a = e.hideHeaderIfEmpty;
	const s = e.children.map((n, a) =>
		((r, n, a) =>
			i.createElement(
				v.tH,
				{
					key: "app_list_" + r.appid,
				},
				i.createElement(
					G.TK,
					{
						app: r,
						navRef: (t) => e.bindNavRef(e.sectionIndex, a, t),
						strCollectionId: e.strCollectionId,
						bShowFriendsAsIcons: false,
						context: 1,
						nWidth: n,
						sortByType: e.eSortBy,
						onGamepadFocus: () => e.onItemFocused(e.sectionIndex, a),
						fnScrollIntoViewHandler: e.fnScrollIntoViewHandler,
						bShortLayout: (0, G.jF)(n, t?.IN_GAMEPADUI) == 1,
						onClick: e.onSelectApp ? () => e.onSelectApp(r.appid) : undefined,
					},
					i.createElement(U.z, {
						app: r,
						eAssetType: 0,
						className: N.LibraryImageBackgroundGlow,
					}),
				),
			))(n.m_overview, r.childWidth, a),
	);
	const o = t?.IN_GAMEPADUI ? 9 : 24;
	return i.createElement(
		"div",
		{
			className: N.AppGridSection,
			ref: e.refSection,
		},
		i.createElement(Z, {
			subSectionName: e.subSectionName,
			notReallySticky: !n,
			hideHeaderIfEmpty: a,
		}),
		i.createElement(P.i, {
			name: e.subSectionName,
			childWidth: r.childWidth,
			childHeight: r.childHeight,
			gridColumnGap: 16,
			gridRowGap: r.gridRowGap,
			scaleGridItems: 1,
			paddingLeft: 8,
			paddingRight: 8,
			paddingBottom: o,
			gridClassName: N.YourCollection,
			childElements: s,
			scrollElement: e.elScrollElement,
			refItemsPerRow: e.refItemsPerRow,
			renderOutsideRows: 3,
		}),
		i.createElement("div", {
			className: N.AppGridSectionFooter,
		}),
	);
});
function K(e, t) {
	switch (t) {
		case 1:
		case 2:
		case 3:
		case 7:
		case 10:
			return "";
		case 4:
			if (e.minutes_playtime_forever >= 6000) {
				return Localize("#GridSection_Over100Hours");
			} else if (e.minutes_playtime_forever >= 3600) {
				return Localize("#GridSection_Over60Hours");
			} else if (e.minutes_playtime_forever >= 2400) {
				return Localize("#GridSection_Over40Hours");
			} else if (e.minutes_playtime_forever >= 1200) {
				return Localize("#GridSection_Over20Hours");
			} else if (e.minutes_playtime_forever >= 600) {
				return Localize("#GridSection_Over10Hours");
			} else if (e.minutes_playtime_forever >= 60) {
				return Localize("#GridSection_Over1Hour");
			} else if (e.minutes_playtime_forever > 0) {
				return Localize("#GridSection_LessThan1Hour");
			} else {
				return Localize("#GridSection_NoPlaytime");
			}
		case 5:
			return e.GetLastPlayedSectionName();
		case 6:
			if (e.GetCanonicalReleaseDate() == 0 && e.BIsUnreleased()) {
				return Localize("#AppBox_ComingSoon");
			} else {
				return e.GetCanonicalReleaseYear();
			}
		case 8:
			const t = 1073741824;
			let r = parseFloat(e.size_on_disk);
			if (r > t * 100) {
				return Localize("#GridSection_GreaterThan100GB");
			} else if (r > t * 50) {
				return Localize("#GridSection_GreaterThan50GB");
			} else if (r > t * 20) {
				return Localize("#GridSection_GreaterThan20GB");
			} else if (r > 0) {
				return Localize("#GridSection_LessThan20GB");
			} else if (e.installed) {
				return Localize("#GridSection_NoSizeOnDisk");
			} else {
				return Localize("#GridSection_NotInstalled");
			}
		case 9:
			if (e.metacritic_score >= 90) {
				return Localize("#GridSection_Over90Metacritic");
			} else if (e.metacritic_score >= 80) {
				return Localize("#GridSection_Over80Metacritic");
			} else if (e.metacritic_score >= 70) {
				return Localize("#GridSection_Over70Metacritic");
			} else if (e.metacritic_score >= 50) {
				return Localize("#GridSection_Over50Metacritic");
			} else {
				return Localize("#GridSection_EverythingElseMetacritic");
			}
		case 11:
			return Localize("#SteamReviewScore_" + e.review_score);
		default:
			(0, I.w)(false, "Unknown sort type in ComputeChildSectionName");
	}
	return "";
}
export function xZ() {
	const [e, t] = i.useState(() => {
		let e;
		const t = window.localStorage.getItem("AppGridDisplaySettings");
		try {
			const r = JSON.parse(t);
			if (r && r.eSortBy) {
				e = r.eSortBy;
			}
		} catch (e) {}
		return e || 1;
	});
	const r = i.useCallback((e) => {
		t(e);
		const r = {
			eSortBy: e,
		};
		window.localStorage.setItem("AppGridDisplaySettings", JSON.stringify(r));
	}, []);
	const n = i.useContext(B.Ce);
	const a = i.useCallback(
		(e) => {
			(function (e, t, r) {
				let n = {
					bOverlapHorizontal: true,
					bMatchWidth: true,
					bFitToWindow: true,
					strClassName: (0, s.A)(
						"DialogMenuPosition",
						N.SortingDropDownContainer,
					),
				};
				let a = q();
				let o = i.createElement(
					B.Ce.Provider,
					{
						value: t,
					},
					i.createElement(w.n4, {
						rgOptions: a,
						onValueSelected: r,
						strDropDownItemClassName: N.SortingDropDownItems,
					}),
				);
				let l = (0, b.lX)(o, e, n);
				l.SetLabel(Localize("#Library_SortCollectionBy"));
			})(e, n, (e, t) => r(t.data));
		},
		[r, n],
	);
	return {
		eSortBy: e,
		setSortBy: r,
		showSortingContextMenu: a,
	};
}
function J(e) {
	const {
		appOverviews: t,
		eSortBy: r,
		stickyHeaders: n,
		hideHeaderIfEmpty: a,
	} = e;
	const [s] = (0, A.VI)("library_display_size");
	const o = (0, R.Qn)();
	const l = i.useContext(z.g);
	const c = o
		? (0, G.YQ)(l.libraryWidth, l.libraryHeight)
		: p.o.GetComputedDisplaySize(s);
	return (0, f.q3)(() => {
		const s = n !== false;
		const l = (0, O.g)(r);
		const m = l ? t.slice().sort(l) : t;
		let u;
		let d = -1;
		let A = Array();
		const p = {
			nPaddingBottom: o ? 9 : 24,
			nGridRowGap: o ? 42 : 24,
			...(0, G.aH)(c, o, e.strCollectionId),
		};
		for (let e = 0; e < m.length; ++e) {
			let t = m[e];
			let n = K(t, r);
			if (n != u || d == -1) {
				let t = e == 0 && a;
				A.push({
					subSectionName: n,
					children: [],
					stickyHeader: s,
					hideHeaderIfEmpty: t,
					sectionIndex: d + 1,
					refSection: i.createRef(),
					refItemsPerRow: i.createRef(),
					...p,
				});
				d = A.length - 1;
				u = n;
			}
			A[d].children.push(new te(t));
		}
		return A;
	});
}
export const IJ = (e) => {
	const { appOverviews: t, strCollectionId: r, bShowFilterText: n = true } = e;
	const a = i.createRef();
	const s = e.elScrollElement || a.current;
	const { eSortBy: o, setSortBy: l } = xZ();
	const c = J({
		appOverviews: t,
		eSortBy: o,
		strCollectionId: r,
		stickyHeaders: true,
		hideHeaderIfEmpty: false,
	});
	const m = c.length == 0;
	return i.createElement(
		y.Z,
		{
			className: N.GridWithControls,
			ref: a,
		},
		i.createElement(ie, {
			sortBy: o,
			onChange: l,
			bShowFilterText: n,
		}),
		m &&
			i.createElement(ne, {
				strCollectionId: r,
			}),
		!m &&
			i.createElement(re, {
				childSections: c,
				...e,
				eSortBy: o,
				elScrollElement: s,
			}),
	);
};
export const lx = (e) => {
	const { appOverviews: t, eSortBy: r, strCollectionId: n } = e;
	const a = J({
		appOverviews: t,
		eSortBy: r,
		strCollectionId: n,
		stickyHeaders: false,
		hideHeaderIfEmpty: true,
	});
	const [s, o, l] = (0, T.uD)();
	const c = i.createRef();
	const m = {
		onOptionsButton: (t) => e.showSortingContextMenu(t),
	};
	m.onOptionsActionDescription = Localize("#Library_SortCollectionBy");
	if (!e.hideFilterFooterButton) {
		m.onSecondaryButton = o;
		m.onSecondaryActionDescription = i.createElement(dq, null);
	}
	(0, x.to)(e.elScrollElement, c);
	const u = (0, W.bJ)();
	return i.createElement(
		y.Z,
		{
			className: N.GridWithControls,
			...m,
			retainFocus: u,
			focusableIfNoChildren: t.length != 0,
		},
		s &&
			i.createElement(h.x, {
				collectionid: n,
				closeModal: l,
			}),
		i.createElement(re, {
			childSections: a,
			...e,
			navRef: c,
		}),
	);
};
class te {
	m_overview;
	constructor(e) {
		this.m_overview = e;
	}
	get sort_as() {
		return this.m_overview.sort_as;
	}
	get display_name() {
		return this.m_overview.display_name;
	}
	GetFriendsPlaying() {
		return d.O$.GetCountFriendsInGame(this.m_overview.appid);
	}
	GetAchievementPercentage() {
		const e = k.y.GetAchievementProgress(this.m_overview.appid);
		if (k.y.BGameHasAchievements(this.m_overview.appid)) {
			return Math.floor(e);
		} else {
			return -1;
		}
	}
}
const re = (e) => {
	const {
		childSections: t,
		navRef: r,
		eSortBy: n,
		strCollectionId: a,
		elScrollElement: s,
		onSelectApp: o,
	} = e;
	const {
		onItemFocused: l,
		onGamepadButtonDown: c,
		onGamepadButtonUp: m,
		onFocusWithin: u,
		scrollIntoViewHandler: d,
		strFastScrollTo: A,
		navRefPlaceholder: p,
		bindNavRef: g,
		FastScrollTo: h,
	} = (0, F.J)(t, n, s);
	const C = (function (e) {
		const {
			childSections: t,
			strCollectionId: r,
			eSortBy: n,
			elScrollElement: a,
			onItemFocused: s,
			scrollIntoViewHandler: o,
			bindNavRef: l,
			onSelectApp: c,
		} = e;
		return t.map((e) =>
			i.createElement(Y, {
				key: e.subSectionName,
				...e,
				onItemFocused: s,
				strCollectionId: r,
				eSortBy: n,
				fnScrollIntoViewHandler: o,
				bindNavRef: l,
				elScrollElement: a,
				onSelectApp: c,
			}),
		);
	})({
		childSections: t,
		eSortBy: n,
		strCollectionId: a,
		elScrollElement: s,
		onItemFocused: l,
		scrollIntoViewHandler: d,
		bindNavRef: g,
		onSelectApp: o,
	});
	const {
		onFocusWithinContainer: _,
		fastScrollOverlay: f,
		onGamepadDirectionGridContainer: b,
	} = (0, L.J)(u, A, p);
	const S = (0, R.Qn)();
	const w = i.useCallback(
		(e) => {
			if (n == 1) {
				let t = e.key.toLowerCase();
				if (t >= "0" && t <= "9") {
					t = "#";
				}
				if (t.length == 1 && ((t >= "a" && t <= "z") || t == "#")) {
					h(t);
					e.preventDefault();
					e.stopPropagation();
				}
			}
		},
		[h, n],
	);
	i.useEffect(
		() =>
			s && S
				? (s.addEventListener("keydown", w),
					() => s.removeEventListener("keydown", w))
				: () => {},
		[s, S, w],
	);
	return i.createElement(
		y.Z,
		{
			onButtonDown: c,
			onButtonUp: m,
			onFocusWithin: _,
			navRef: r,
		},
		i.createElement(
			y.Z,
			{
				onGamepadDirection: b,
			},
			C,
		),
		f,
	);
};
const ne = (e) => {
	const { strCollectionId: t } = e;
	const {
		bAllowsDragAndDrop: r,
		bIsDynamic: n,
		bIsEditable: a,
		nApps: s,
	} = (0, f.q3)(() => {
		const e = t && u.md.GetCollection(t);
		return {
			bAllowsDragAndDrop: e?.bAllowsDragAndDrop,
			bIsDynamic: e?.bIsDynamic,
			bIsEditable: e?.bIsEditable,
			nApps: e?.visibleApps.length,
		};
	});
	let o;
	if (r) {
		if (n) {
			o = ["#CollectionView_EmptyDynamicCollection_Line1"];
			if (a) {
				o.push("#CollectionView_EmptyDynamicCollection_Line2");
			}
		} else {
			o =
				s > 0
					? [LocalizePlural("#CollectionView_EmptyCollection_BecauseFilter", s)]
					: ["#CollectionView_EmptyCollection"];
		}
	} else {
		o = ["#CollectionView_EmptyReadOnlyCollection"];
	}
	const [l, c, m] = (0, T.uD)();
	let d = {
		onSecondaryButton: c,
	};
	d.onSecondaryActionDescription = i.createElement(dq, null);
	return i.createElement(
		y.Z,
		{
			...d,
			focusable: true,
			noFocusRing: true,
			className: N.EmptyGridMessageContainer,
		},
		l &&
			i.createElement(h.x, {
				collectionid: t,
				closeModal: m,
			}),
		o.map((e, t) =>
			i.createElement(
				"div",
				{
					key: t,
					className: N.EmptyGridMessageLine,
				},
				Localize(e),
			),
		),
	);
};
function ie(e) {
	const t = (0, f.q3)(() => g.n6.collectionsAppFilter.BIsSelected(1, 2));
	return i.createElement(
		y.Z,
		{
			className: N.CollectionOptions,
		},
		i.createElement(OJ, {
			initialValue: e.sortBy,
			onSortChangeCallback: e.onChange,
		}),
		e.bShowFilterText &&
			i.createElement(
				"div",
				{
					className: N.CollectionOptionsRightJustified,
				},
				t &&
					i.createElement(
						"div",
						{
							className: N.ShowingReadyToPlay,
						},
						Localize("#GameList_View_ShowingOnlyReadyToPlay"),
					),
			),
	);
}
