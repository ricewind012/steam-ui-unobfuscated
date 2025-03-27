import n, { Cg } from "./34629.js";
import _i from "./63696.js";
import a, { A } from "./90765.js";
import s, { wY, Ue, md, xP } from "./52451.js";
import o from "./25348.js";
import c, { w } from "./49455.js";
import m from "./69164.js";
import u from "./4690.js";
import d, { OQ } from "./31958.js";
const l = o;
export function i(e) {
	const [t, r] = _i.useState(-1);
	const n = _i.useRef(undefined);
	const {
		paddingLeft: a,
		paddingRight: o,
		childWidth: l,
		scaleGridItems: c,
		gridColumnGap: m,
		childElements: u,
		refItemsPerRow: d,
	} = e;
	const A = u.length;
	const g = l * c + m;
	const h = _i.useCallback(() => {
		const e = n.current.getBoundingClientRect().width - a - o;
		const t = Math.max(1, Math.min(A, Math.floor((e + m) / g)));
		if (d) {
			d.current = t;
		}
		r(t);
	}, [g, m, A, a, o, n, d]);
	const C = wY(h);
	_i.useEffect(h, [h]);
	const _ = Ue(n, C);
	return _i.createElement(
		_i.Fragment,
		null,
		_i.createElement("div", {
			className: "CSSGrid_Measure",
			ref: _,
		}),
		t != -1 &&
			_i.createElement(p, {
				...e,
				iItemsPerRow: t,
			}),
	);
}
class p extends _i.Component {
	m_elGrid = _i.createRef();
	m_fLastScrollTop = undefined;
	m_nItemsDisplayed = 0;
	m_intersectionObserver = undefined;
	m_bWasIntersecting = undefined;
	constructor(e) {
		super(e);
		this.state = {
			iFirstRenderableChild: 0,
			iLastRenderableChild: 0,
		};
	}
	componentDidMount() {
		this.StartListening();
		this.ComputeLayout();
	}
	componentWillUnmount() {
		this.StopListening(this.props.scrollElement);
	}
	componentDidUpdate(e) {
		if (this.props.scrollElement != e.scrollElement) {
			this.StopListening(e.scrollElement);
			this.StartListening();
			this.ComputeLayout();
		} else if (
			this.props.maxRows != e.maxRows ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.gridColumnGap != e.gridColumnGap ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.gridColumnGap != e.gridColumnGap ||
			this.props.gridRowGap != e.gridRowGap ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.gridColumnGap != e.gridColumnGap ||
			this.props.gridRowGap != e.gridRowGap ||
			this.props.scaleGridItems != e.scaleGridItems ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.gridColumnGap != e.gridColumnGap ||
			this.props.gridRowGap != e.gridRowGap ||
			this.props.scaleGridItems != e.scaleGridItems ||
			this.props.paddingLeft != e.paddingLeft ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.gridColumnGap != e.gridColumnGap ||
			this.props.gridRowGap != e.gridRowGap ||
			this.props.scaleGridItems != e.scaleGridItems ||
			this.props.paddingLeft != e.paddingLeft ||
			this.props.paddingRight != e.paddingRight ||
			this.props.childElements.length != e.childElements.length ||
			this.props.childWidth != e.childWidth ||
			this.props.childHeight != e.childHeight ||
			this.props.gridColumnGap != e.gridColumnGap ||
			this.props.gridRowGap != e.gridRowGap ||
			this.props.scaleGridItems != e.scaleGridItems ||
			this.props.paddingLeft != e.paddingLeft ||
			this.props.paddingRight != e.paddingRight ||
			this.props.iItemsPerRow != e.iItemsPerRow
		) {
			this.ComputeLayout();
		}
	}
	OnScroll(e) {
		const {
			renderOutsideRows: t,
			childHeight: r,
			scaleGridItems: n,
		} = this.props;
		const i = this.m_elGrid.current.getBoundingClientRect();
		if (
			Math.abs(i.top - this.m_fLastScrollTop) > (r * n) / (t > 0 ? 1 : 8) ||
			this.m_fLastScrollTop === undefined
		) {
			this.m_fLastScrollTop = i.top;
			const e = this.m_elGrid.current.ownerDocument.defaultView;
			const r = (t || 0) * this.fScaledChildHeight;
			const n = i.top - r < e.innerHeight && i.bottom + r > 0;
			const { iFirstRenderableChild: a, iLastRenderableChild: s } = this.state;
			if (n || s > a) {
				this.ComputeLayout();
			}
		}
	}
	OnRestoreScroll() {
		this.ComputeLayout();
	}
	OnIntersection(e, t) {
		const r = e.length && e[0];
		if (
			r &&
			(r.isIntersecting || r.isIntersecting !== this.m_bWasIntersecting)
		) {
			this.m_bWasIntersecting = r.isIntersecting;
			this.ComputeLayout();
		}
	}
	StartListening() {
		if (this.props.scrollElement) {
			this.props.scrollElement.addEventListener("scroll", this.OnScroll);
			this.props.scrollElement.addEventListener(
				"restorescroll",
				this.OnRestoreScroll,
			);
			this.m_intersectionObserver = md(
				this.m_elGrid.current,
				this.OnIntersection,
				{
					root: null,
				},
			);
		}
	}
	StopListening(e) {
		if (e) {
			e.removeEventListener("scroll", this.OnScroll);
			e.removeEventListener("restorescroll", this.OnRestoreScroll);
		}
		if (this.m_intersectionObserver) {
			this.m_intersectionObserver.disconnect();
			this.m_intersectionObserver = undefined;
		}
	}
	GetGridStyle(e, t) {
		return {
			gridTemplateColumns: `repeat(auto-fill, ${e}px)`,
			gridAutoRows: `${t}px`,
			gridColumnGap: this.props.gridColumnGap,
			gridRowGap: this.props.gridRowGap,
			fontSize: `${t / 11}px`,
			paddingLeft: this.props.paddingLeft,
			paddingRight: this.props.paddingRight,
		};
	}
	get fScaledChildWidth() {
		return this.props.childWidth * this.props.scaleGridItems;
	}
	get fScaledChildHeight() {
		return this.props.childHeight * this.props.scaleGridItems;
	}
	get fScaledPaddedChildWidth() {
		return this.fScaledChildWidth + this.props.gridColumnGap;
	}
	get fScaledPaddedChildHeight() {
		return this.fScaledChildHeight + this.props.gridRowGap;
	}
	get itemsDisplayed() {
		return this.m_nItemsDisplayed;
	}
	ComputeLayout() {
		const e = this.fScaledPaddedChildHeight;
		const { iItemsPerRow: t } = this.props;
		const r = this.m_elGrid.current.getBoundingClientRect();
		const n = this.m_elGrid.current.ownerDocument.defaultView;
		const i = (this.props.renderOutsideRows || 0) * e;
		const a = 0 - i - r.top;
		const s = n.innerHeight + i - r.top;
		const o = Math.floor(a / e) * t;
		const l = Math.ceil(s / e) * t;
		const c = OQ(o, 0, this.props.childElements.length);
		const m = OQ(l, 0, this.props.childElements.length);
		if (
			c != this.state.iFirstRenderableChild ||
			m != this.state.iLastRenderableChild
		) {
			this.setState({
				iFirstRenderableChild: c,
				iLastRenderableChild: m,
			});
		}
		const u =
			this.props.maxRows !== undefined
				? Math.min(this.props.childElements.length, t * this.props.maxRows)
				: this.props.childElements.length;
		if (u != this.m_nItemsDisplayed) {
			if (this.props.onItemsDisplayedCountChanged) {
				this.props.onItemsDisplayedCountChanged(u);
			}
			this.m_nItemsDisplayed = u;
		}
	}
	GetChildren(e, t, r) {
		const n = this.props.childElements.slice(e, t);
		const a = e % r;
		for (let e = 0; e < a; ++e) {
			n.unshift(
				_i.createElement("div", {
					key: `_grid_pad_${e}`,
				}),
			);
		}
		return n;
	}
	render() {
		const e = this.fScaledChildWidth;
		const t = this.fScaledChildHeight;
		const r = this.fScaledPaddedChildHeight;
		const { iItemsPerRow: n, childElements: s } = this.props;
		const { iFirstRenderableChild: o, iLastRenderableChild: d } = this.state;
		const A = Math.floor(o / n);
		const p = Math.floor(d / n);
		const g = Math.ceil(s.length / n);
		let h = Math.max(this.props.minRows || 0, g);
		if (this.props.maxRows !== undefined) {
			h = Math.min(h, this.props.maxRows);
		}
		const C = {
			width: "100%",
			height: A * r,
		};
		const _ = {
			width: "100%",
			height: Math.max(0, h - p - 1) * r,
		};
		const f = this.GetChildren(o, d, n);
		w(f.length <= (p - A + 1) * n, "Too many children for row count");
		let b = this.props.paddingBottom ?? 0;
		if (h == 0) {
			b = 0;
		}
		return _i.createElement(
			m.Z,
			{
				"flow-children": "grid",
				ref: this.m_elGrid,
				navRef: this.props.navRef,
				navKey: this.props.name,
				navEntryPreferPosition: u.iU.MAINTAIN_X,
				className: A(l.Container, this.props.animateExpansion && l.Animate),
				style: {
					height: `${r * h + b}px`,
				},
			},
			_i.createElement("div", {
				key: "cssgrid_upfront_padding",
				style: C,
			}),
			_i.createElement(
				m.Z,
				{
					className: A(l.CSSGrid, this.props.gridClassName),
					style: this.GetGridStyle(e, t),
					navEntryPreferPosition: u.iU.MAINTAIN_X,
				},
				f,
			),
			_i.createElement("div", {
				key: "cssgrid_end_padding",
				style: _,
			}),
		);
	}
}
Cg([s.oI, xP("on_scroll", "cssgrid")], p.prototype, "OnScroll", null);
Cg([s.oI], p.prototype, "OnRestoreScroll", null);
Cg([s.oI], p.prototype, "OnIntersection", null);
Cg([xP("get_children", "cssgrid")], p.prototype, "GetChildren", null);
Cg([xP("render", "cssgrid")], p.prototype, "render", null);
