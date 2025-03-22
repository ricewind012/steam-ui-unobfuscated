var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./78325.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require(/*webcrack:missing*/ "./31958.js");
var l = require(/*webcrack:missing*/ "./81255.js");
var c = require(/*webcrack:missing*/ "./68120.js");
var m = require(/*webcrack:missing*/ "./61657.js");
var u = require(/*webcrack:missing*/ "./69164.js");
var d = require("./7558.js");
var A = require(/*webcrack:missing*/ "./90242.js");
var p = require(/*webcrack:missing*/ "./83599.js");
var g = require("./51076.js");
var h = require(/*webcrack:missing*/ "./72476.js");
const C = new p.wd("VirtualizedBoxCarousel").Debug;
export const X = i.forwardRef(function (e, t) {
	const { name: r, initialColumn: n } = e;
	const [a, s] = (0, g.SP)("VBC_" + r, n || 0);
	const o = (0, h.Qn)();
	return i.createElement(f, {
		...e,
		ref: t,
		focusedColumn: a,
		setFocusedColumn: s,
		autoHeight: !o,
	});
});
class f extends i.PureComponent {
	static defaultProps = {
		nIndexLeftmost: 0,
		scrollDuration: 100,
		scrollTiming: "sine",
		enableBumperPaging: false,
		initialColumn: 0,
		bPlaySoundOnFailedScroll: true,
	};
	state = {
		nContainerWidth: 0,
		nRightPadding: 0,
	};
	m_refContainer = i.createRef();
	m_refGrid = undefined;
	m_refGridContainer = i.createRef();
	m_refGridElement = undefined;
	m_resizeObserver;
	m_scrollAnimation = null;
	m_mapRefs = new Map();
	m_iStart = 0;
	m_iEnd = 0;
	m_activeScrollTo = null;
	StartScrollAnimation(e, t, r, n, i) {
		let a = this.m_refGrid;
		if (a) {
			if (i) {
				const a = this.m_refGridElement;
				C("StartScrollAnimation", r, n, i);
				let s = {
					msDuration: i,
					timing: this.props.scrollTiming,
					onComplete: () => this.OnAnimationScrollComplete(e, t, r, n),
				};
				if (this.m_scrollAnimation) {
					this.m_scrollAnimation.End();
				}
				this.m_scrollAnimation = new d.JV(
					a,
					{
						scrollLeft: n,
					},
					s,
				);
				this.m_scrollAnimation.Start();
			} else {
				a.scrollToPosition({
					scrollLeft: n,
					scrollTop: 0,
				});
				this.OnAnimationScrollComplete(e, t, r, n);
			}
		}
	}
	RestoreScrollPosition(e) {
		this.StartScrollAnimation(m.pR.INVALID, 0, "RestoreScrollPosition", e, 0);
	}
	m_timeout = undefined;
	SendScrollNotification(e) {
		if (this.m_timeout) {
			window.clearTimeout(this.m_timeout);
		}
		const t = this.props.fnOnScroll;
		this.m_timeout = window.setTimeout(() => {
			if (t) {
				t(e);
			}
			this.m_timeout = undefined;
		}, 250);
	}
	OnAnimationScrollComplete(e, t, r, n) {
		a.unstable_batchedUpdates(() => {
			C("OnAnimationScrollComplete", r, n);
			this.SendScrollNotification(n);
			const i = this.m_mapRefs.get(r);
			if (i && i.current) {
				C("Sending focus to", r);
				i.current.TakeFocus(e);
			}
			this.props.setFocusedColumn(t);
			this.m_scrollAnimation = null;
			this.m_activeScrollTo = null;
		});
	}
	m_nTouchStartClientX = undefined;
	OnTouchStart(e) {
		if (e.touches.length == 1) {
			this.m_nTouchStartClientX = e.touches[0].clientX;
		}
	}
	OnTouchEnd(e) {
		this.m_nTouchStartClientX = undefined;
	}
	OnTouchMove(e) {
		if (!this.m_refGrid || e.touches.length == 0) {
			return;
		}
		const t = this.m_nTouchStartClientX - e.touches[0].clientX;
		this.BlockMovementLeftPastFirstElement(e, t);
	}
	m_bMouseDown = false;
	OnMouseDown(e) {
		this.m_bMouseDown = true;
	}
	OnMouseUp(e) {
		this.m_bMouseDown = false;
	}
	BlockMovementLeftPastFirstElement(e, t) {
		const r = this.m_refGrid.getOffsetForCell({
			alignment: this.props.scrollToAlignment,
			columnIndex: this.props.nIndexLeftmost,
		});
		if (
			this.m_refGridElement.scrollLeft - r.scrollLeft + t < 0 &&
			e.cancelable
		) {
			console.warn("Blocking touch scroll out of bounds");
			if (e.cancelable) {
				e.preventDefault();
			}
		}
	}
	SnapBackToFirstElement(e) {
		console.warn("Carousel out of bounds, scrolling back to", e);
		this.RestoreScrollPosition(e);
	}
	OnScroll(e) {
		const t = this.m_refGrid?.getOffsetForCell({
			alignment: this.props.scrollToAlignment,
			columnIndex: this.props.nIndexLeftmost,
		});
		this.SendScrollNotification(e.scrollLeft);
		if (e.scrollLeft < Math.floor(t?.scrollLeft)) {
			this.SnapBackToFirstElement(t.scrollLeft);
		}
		this.UpdateScrollArrows();
	}
	GetCellColumnWidth(e) {
		let { fnGetColumnWidth: t } = this.props;
		let r = t(e.index) + this.props.nItemMarginX;
		if (e.index == this.props.nNumItems - 1) {
			r += this.state.nRightPadding;
		}
		return r;
	}
	OnItemFocused(e, t) {
		if (!this.m_bMouseDown) {
			this.ScrollToItem(
				m.pR.INVALID,
				t,
				this.props.scrollToAlignment || "auto",
				undefined,
				0,
			);
		}
	}
	CellRenderer(e) {
		const {
			fnGetColumnWidth: t,
			fnGetId: r,
			fnItemRenderer: n,
			nItemHeight: a,
			autoFocus: s,
		} = this.props;
		const { key: o, columnIndex: l, style: c } = e;
		const m = t(l);
		const d = parseInt(c.left.toString());
		const p = r(l);
		const g = !this.m_mapRefs.has(p);
		const h = this.m_mapRefs.get(p) || (0, A.b$)();
		this.m_mapRefs.set(p, h);
		return i.createElement(
			u.Z,
			{
				key: o,
				navKey: o,
				navRef: h,
				focusable: false,
				onGamepadDirection: this.OnGamepadDirection,
				autoFocus: s && l == this.props.focusedColumn && g,
				"data-id": p,
				onFocus: (e) => this.OnItemFocused(e, l),
				style: c,
			},
			n(l, m, a, d),
		);
	}
	OnSectionRendered(e) {
		this.m_iStart = e.columnStartIndex;
		this.m_iEnd = e.columnStopIndex;
		C("Section rendered", this.m_iStart, this.m_iEnd);
		this.UpdateScrollArrows();
	}
	get alignment() {
		return this.props.scrollToAlignment || "start";
	}
	GetLastFocusableColumn() {
		let e = this.props.nNumItems - 1;
		if (this.props.fnDoesItemTakeFocus) {
			while (
				!this.props.fnDoesItemTakeFocus(e) &&
				e > this.props.nIndexLeftmost
			) {
				e--;
			}
		}
		C("LastFocusableColumn: ", e);
		return e;
	}
	UpdateScrollArrows() {
		if (this.props.fnUpdateArrows) {
			const e = this.m_refGrid?.getOffsetForCell({
				alignment: this.props.scrollToAlignment,
				columnIndex: this.props.nIndexLeftmost,
			});
			const t = this.m_refGrid?.getOffsetForCell({
				alignment: this.props.scrollToAlignment,
				columnIndex: this.GetLastFocusableColumn(),
			});
			const r = Math.round(this.m_refGridElement?.scrollLeft);
			const n =
				r != Math.floor(e?.scrollLeft) && r != Math.round(e?.scrollLeft);
			const i =
				r != Math.floor(t?.scrollLeft) && r != Math.round(t?.scrollLeft);
			C("ShowLeftArrow: ", n, e, " ShowRightArrow: ", i, t, " ScrollPos: ", r);
			this.props.fnUpdateArrows(n, i);
		}
	}
	BindGridObject(e) {
		if (this.m_refGridElement) {
			this.m_refGridElement.removeEventListener(
				"touchstart",
				this.OnTouchStart,
			);
			this.m_refGridElement.removeEventListener("touchend", this.OnTouchEnd);
			this.m_refGridElement.removeEventListener("touchmove", this.OnTouchMove);
			this.m_refGridElement.removeEventListener("mousedown", this.OnMouseDown);
			this.m_refGridElement.removeEventListener("mouseup", this.OnMouseUp);
		}
		this.m_refGrid = e;
		this.m_refGridElement = undefined;
		if (this.m_refGrid) {
			const e = this.m_refGridContainer.current;
			this.m_refGrid._setScrollingContainerRef(e);
			this.m_refGridElement = e;
			e?.addEventListener("touchstart", this.OnTouchStart);
			e?.addEventListener("touchend", this.OnTouchEnd);
			e?.addEventListener("touchmove", this.OnTouchMove, {
				passive: false,
			});
			e?.addEventListener("mousedown", this.OnMouseDown);
			e?.addEventListener("mouseup", this.OnMouseUp);
			const t = window.getComputedStyle(e);
			const r = parseInt(t.getPropertyValue("padding-right")) || 0;
			const n = parseInt(t.getPropertyValue("scroll-padding-right")) || 0;
			const i = Math.max(r, n);
			if (i != this.state.nRightPadding) {
				C("Computed", i, "additional right padding");
				this.setState(
					{
						nRightPadding: i,
					},
					() => {
						this.m_refGrid.recomputeGridSize({
							columnIndex: this.props.nNumItems - 1,
						});
					},
				);
			}
		}
	}
	componentDidMount() {
		if (this.m_refContainer.current) {
			this.m_resizeObserver = (0, s.Fd)(
				this.m_refContainer.current,
				this.OnResize,
			);
			C(
				"componentDidMount Setting width to",
				this.m_refContainer.current.clientWidth,
			);
			this.setState({
				nContainerWidth: this.m_refContainer.current.clientWidth,
			});
		}
	}
	componentDidUpdate(e) {
		if (this.props.fnGetColumnWidth != e.fnGetColumnWidth) {
			C("Column width function changes, recalculating sizes");
			this.m_refGrid?.recomputeGridSize();
		}
	}
	componentWillUnmount() {
		this.m_resizeObserver?.disconnect();
	}
	OnResize() {
		const e = this.m_refContainer.current.clientWidth;
		if (e != this.state.nContainerWidth) {
			C("OnResize Setting width to", this.m_refContainer.current.clientWidth);
			this.setState({
				nContainerWidth: e,
			});
		}
		this.UpdateScrollArrows();
	}
	ScrollLeft(e) {
		const t = this.m_iEnd - this.m_iStart;
		const r = (0, o.OQ)(
			this.props.focusedColumn - t,
			this.props.nIndexLeftmost,
			this.props.nNumItems - 1,
		);
		const n = this.alignment;
		return this.ScrollToItem(m.pR.INVALID, r, n, e);
	}
	ScrollRight(e) {
		const t = this.m_iEnd - this.m_iStart;
		const r = (0, o.OQ)(
			this.props.focusedColumn + t,
			this.props.nIndexLeftmost,
			this.props.nNumItems - 1,
		);
		const n = this.alignment;
		return this.ScrollToItem(m.pR.INVALID, r, n, e);
	}
	ScrollToFirstChild() {
		return this.ScrollToItem(m.pR.INVALID, this.props.nIndexLeftmost, "auto");
	}
	MoveLeft(e) {
		C("MoveLeft from", this.props.focusedColumn);
		let t = this.props.focusedColumn - 1;
		while (
			t != this.props.nIndexLeftmost - 1 &&
			this.props.fnDoesItemTakeFocus &&
			!this.props.fnDoesItemTakeFocus(t)
		) {
			t--;
		}
		if (t == this.props.nIndexLeftmost - 1) {
			C("At left edge, not handling left gamepad");
			return false;
		} else {
			C("MoveLeft to", t);
			return this.ScrollToItem(
				e ? e.detail.button : m.pR.INVALID,
				t,
				this.props.scrollToAlignment || "auto",
				e,
			);
		}
	}
	MoveRight(e) {
		C("MoveRight from", this.props.focusedColumn);
		let t = this.props.focusedColumn + 1;
		while (
			t != this.props.nNumItems &&
			this.props.fnDoesItemTakeFocus &&
			!this.props.fnDoesItemTakeFocus(t)
		) {
			t++;
		}
		if (t == this.props.nNumItems) {
			C("At right edge, not handling right gamepad");
			return false;
		} else {
			C("MoveRight to", t);
			return this.ScrollToItem(
				e ? e.detail.button : m.pR.INVALID,
				t,
				this.props.scrollToAlignment || "auto",
				e,
			);
		}
	}
	ScrollToItem(e, t, r, n, i) {
		if (
			this.m_activeScrollTo &&
			this.m_activeScrollTo.alignment === r &&
			this.m_activeScrollTo.iNewFocus === t
		) {
			return true;
		}
		C("ScrollToItem", t, r, n, i);
		if (
			t != this.props.focusedColumn &&
			this.m_refGrid &&
			(!this.props.fnDoesItemTakeFocus || this.props.fnDoesItemTakeFocus(t))
		) {
			const a = this.m_refGrid.getOffsetForCell({
				alignment: r,
				columnIndex: t,
				rowIndex: 0,
			});
			const s = this.props.fnGetId(t);
			C("Scrolling to item", t, s, r, a.scrollLeft, i);
			this.m_activeScrollTo = {
				iNewFocus: t,
				alignment: r,
			};
			if (this.props.fnOnFocusedColumnChange) {
				this.props.fnOnFocusedColumnChange(this.props.focusedColumn, t);
			}
			this.StartScrollAnimation(
				e,
				t,
				s,
				a.scrollLeft,
				i ?? this.props.scrollDuration,
			);
			n?.stopPropagation();
			n?.preventDefault();
			return true;
		}
		return false;
	}
	OnGamepadButtonDown(e) {
		C("OnGamepadButtonDown", e.detail);
		switch (e.detail.button) {
			case m.pR.BUMPER_LEFT:
				return !!this.props.enableBumperPaging && this.ScrollLeft(e);
			case m.pR.BUMPER_RIGHT:
				return !!this.props.enableBumperPaging && this.ScrollRight(e);
		}
		return false;
	}
	OnGamepadDirection(e) {
		C("OnGamepadDirection", e.detail);
		switch (e.detail.button) {
			case m.pR.DIR_LEFT:
				return this.MoveLeft(e);
			case m.pR.DIR_RIGHT:
				return this.MoveRight(e);
		}
		return false;
	}
	render() {
		const {
			className: e,
			nNumItems: t,
			nIndexLeftmost: r,
			nHeight: n,
			nItemHeight: a,
			overscan: s = 3,
			scrollToAlignment: o,
			focusedColumn: l,
			autoHeight: m,
		} = this.props;
		const d = this.state.nContainerWidth;
		C("Inner render", this.props.name, this.props.nNumItems, d, r, l);
		return i.createElement(
			u.Z,
			{
				ref: this.m_refContainer,
				"flow-children": "row",
				onButtonDown: this.OnGamepadButtonDown,
				focusable: false,
			},
			d &&
				i.createElement(c.xA, {
					ref: this.BindGridObject,
					containerProps: {
						ref: this.m_refGridContainer,
					},
					className: e,
					cellRenderer: this.CellRenderer,
					onScroll: this.OnScroll,
					onSectionRendered: this.OnSectionRendered,
					columnCount: t,
					columnWidth: this.GetCellColumnWidth,
					overscanColumnCount: s,
					overscanIndicesGetter: ({
						cellCount: e,
						overscanCellsCount: t,
						startIndex: r,
						stopIndex: n,
					}) => ({
						overscanStartIndex: Math.max(0, r - t),
						overscanStopIndex: Math.min(e - 1, n + t),
					}),
					rowCount: 1,
					rowHeight: a,
					height: n,
					width: d,
					containerStyle: {
						overflow: "visible",
					},
					scrollToAlignment: this.alignment,
					scrollToColumn: l,
					tabIndex: null,
					autoHeight: m,
				}),
		);
	}
}
(0, n.Cg)([s.oI], f.prototype, "RestoreScrollPosition", null);
(0, n.Cg)([s.oI], f.prototype, "OnAnimationScrollComplete", null);
(0, n.Cg)([s.oI], f.prototype, "OnTouchStart", null);
(0, n.Cg)([s.oI], f.prototype, "OnTouchEnd", null);
(0, n.Cg)([s.oI], f.prototype, "OnTouchMove", null);
(0, n.Cg)([s.oI], f.prototype, "OnMouseDown", null);
(0, n.Cg)([s.oI], f.prototype, "OnMouseUp", null);
(0, n.Cg)([s.oI, (0, l.s)(250)], f.prototype, "SnapBackToFirstElement", null);
(0, n.Cg)([s.oI], f.prototype, "OnScroll", null);
(0, n.Cg)([s.oI], f.prototype, "GetCellColumnWidth", null);
(0, n.Cg)([s.oI], f.prototype, "OnItemFocused", null);
(0, n.Cg)([s.oI], f.prototype, "CellRenderer", null);
(0, n.Cg)([s.oI], f.prototype, "OnSectionRendered", null);
(0, n.Cg)([s.oI, (0, l.s)(250)], f.prototype, "UpdateScrollArrows", null);
(0, n.Cg)([s.oI], f.prototype, "BindGridObject", null);
(0, n.Cg)([s.oI], f.prototype, "OnResize", null);
(0, n.Cg)([s.oI], f.prototype, "ScrollLeft", null);
(0, n.Cg)([s.oI], f.prototype, "ScrollRight", null);
(0, n.Cg)([s.oI], f.prototype, "ScrollToFirstChild", null);
(0, n.Cg)([s.oI], f.prototype, "MoveLeft", null);
(0, n.Cg)([s.oI], f.prototype, "MoveRight", null);
(0, n.Cg)([s.oI], f.prototype, "OnGamepadButtonDown", null);
(0, n.Cg)([s.oI], f.prototype, "OnGamepadDirection", null);
