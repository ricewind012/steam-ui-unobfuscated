import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./78325.js";
import s, { Fd } from "./52451.js";
import o, { OQ } from "./31958.js";
import l, { s as s_1 } from "./81255.js";
import c from "./68120.js";
import m from "./61657.js";
import u from "./69164.js";
import d from "./7558.js";
import { b$ } from "./90242.js";
import p from "./83599.js";
import g, { SP } from "./51076.js";
import h, { Qn } from "./72476.js";
const C = new p.wd("VirtualizedBoxCarousel").Debug;
export const X = i.forwardRef((props, ref) => {
	const { name, initialColumn } = props;
	const [a, s] = SP(`VBC_${name}`, initialColumn || 0);
	const o = Qn();
	return (
		<F
			{...props}
			ref={ref}
			focusedColumn={a}
			setFocusedColumn={s}
			autoHeight={!o}
		/>
	);
});
class F extends i.PureComponent {
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
		let { fnGetColumnWidth } = this.props;
		let r = fnGetColumnWidth(e.index) + this.props.nItemMarginX;
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
			fnGetColumnWidth,
			fnGetId,
			fnItemRenderer,
			nItemHeight,
			autoFocus,
		} = this.props;
		const { key, columnIndex, style } = e;
		const m = fnGetColumnWidth(columnIndex);
		const d = parseInt(style.left.toString());
		const p = fnGetId(columnIndex);
		const g = !this.m_mapRefs.has(p);
		const h = this.m_mapRefs.get(p) || b$();
		this.m_mapRefs.set(p, h);
		return (
			<u.Z
				key={key}
				navKey={key}
				navRef={h}
				focusable={false}
				onGamepadDirection={this.OnGamepadDirection}
				autoFocus={autoFocus && columnIndex == this.props.focusedColumn && g}
				data-id={p}
				onFocus={(e) => this.OnItemFocused(e, columnIndex)}
				style={style}
			>
				{fnItemRenderer(columnIndex, m, nItemHeight, d)}
			</u.Z>
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
			this.m_resizeObserver = Fd(this.m_refContainer.current, this.OnResize);
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
		const r = OQ(
			this.props.focusedColumn - t,
			this.props.nIndexLeftmost,
			this.props.nNumItems - 1,
		);
		const n = this.alignment;
		return this.ScrollToItem(m.pR.INVALID, r, n, e);
	}
	ScrollRight(e) {
		const t = this.m_iEnd - this.m_iStart;
		const r = OQ(
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
			case m.pR.BUMPER_LEFT: {
				return !!this.props.enableBumperPaging && this.ScrollLeft(e);
			}
			case m.pR.BUMPER_RIGHT: {
				return !!this.props.enableBumperPaging && this.ScrollRight(e);
			}
		}
		return false;
	}
	OnGamepadDirection(e) {
		C("OnGamepadDirection", e.detail);
		switch (e.detail.button) {
			case m.pR.DIR_LEFT: {
				return this.MoveLeft(e);
			}
			case m.pR.DIR_RIGHT: {
				return this.MoveRight(e);
			}
		}
		return false;
	}
	render() {
		const {
			className,
			nNumItems,
			nIndexLeftmost,
			nHeight,
			nItemHeight,
			overscan = 3,
			scrollToAlignment,
			focusedColumn,
			autoHeight,
		} = this.props;
		const d = this.state.nContainerWidth;
		C(
			"Inner render",
			this.props.name,
			this.props.nNumItems,
			d,
			nIndexLeftmost,
			focusedColumn,
		);
		return (
			<u.Z
				ref={this.m_refContainer}
				flow-children="row"
				onButtonDown={this.OnGamepadButtonDown}
				focusable={false}
			>
				{d && (
					<c.xA
						ref={this.BindGridObject}
						containerProps={{
							ref: this.m_refGridContainer,
						}}
						className={className}
						cellRenderer={this.CellRenderer}
						onScroll={this.OnScroll}
						onSectionRendered={this.OnSectionRendered}
						columnCount={nNumItems}
						columnWidth={this.GetCellColumnWidth}
						overscanColumnCount={overscan}
						overscanIndicesGetter={({
							cellCount,
							overscanCellsCount,
							startIndex,
							stopIndex,
						}) => ({
							overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
							overscanStopIndex: Math.min(
								cellCount - 1,
								stopIndex + overscanCellsCount,
							),
						})}
						rowCount={1}
						rowHeight={nItemHeight}
						height={nHeight}
						width={d}
						containerStyle={{
							overflow: "visible",
						}}
						scrollToAlignment={this.alignment}
						scrollToColumn={focusedColumn}
						tabIndex={null}
						autoHeight={autoHeight}
					/>
				)}
			</u.Z>
		);
	}
}
Cg([s.oI], F.prototype, "RestoreScrollPosition", null);
Cg([s.oI], F.prototype, "OnAnimationScrollComplete", null);
Cg([s.oI], F.prototype, "OnTouchStart", null);
Cg([s.oI], F.prototype, "OnTouchEnd", null);
Cg([s.oI], F.prototype, "OnTouchMove", null);
Cg([s.oI], F.prototype, "OnMouseDown", null);
Cg([s.oI], F.prototype, "OnMouseUp", null);
Cg([s.oI, s_1(250)], F.prototype, "SnapBackToFirstElement", null);
Cg([s.oI], F.prototype, "OnScroll", null);
Cg([s.oI], F.prototype, "GetCellColumnWidth", null);
Cg([s.oI], F.prototype, "OnItemFocused", null);
Cg([s.oI], F.prototype, "CellRenderer", null);
Cg([s.oI], F.prototype, "OnSectionRendered", null);
Cg([s.oI, s_1(250)], F.prototype, "UpdateScrollArrows", null);
Cg([s.oI], F.prototype, "BindGridObject", null);
Cg([s.oI], F.prototype, "OnResize", null);
Cg([s.oI], F.prototype, "ScrollLeft", null);
Cg([s.oI], F.prototype, "ScrollRight", null);
Cg([s.oI], F.prototype, "ScrollToFirstChild", null);
Cg([s.oI], F.prototype, "MoveLeft", null);
Cg([s.oI], F.prototype, "MoveRight", null);
Cg([s.oI], F.prototype, "OnGamepadButtonDown", null);
Cg([s.oI], F.prototype, "OnGamepadDirection", null);
