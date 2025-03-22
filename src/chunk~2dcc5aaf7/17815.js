var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./44351.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require("./97063.js");
var m = c;
var u = require(/*webcrack:missing*/ "./81255.js");
export class S extends i.Component {
	m_contentRef;
	m_resizeObserver;
	state = {
		bExpanded: undefined,
		bHeightOverflows: true,
		nItemsHidden: 0,
		nBoxHeight: 1,
	};
	constructor(e) {
		super(e);
		this.m_contentRef = i.createRef();
	}
	SetOverflowState() {
		const { nBoxHeight: e, nItemsHidden: t } = this.CalculateMaxHeight();
		if (!this.m_contentRef.current) {
			return;
		}
		const r = this.m_contentRef.current.scrollHeight > e;
		if (
			r != this.state.bHeightOverflows ||
			t != this.state.nItemsHidden ||
			e != this.state.nBoxHeight
		) {
			this.setState((n) => ({
				bHeightOverflows: r,
				nItemsHidden: t,
				nBoxHeight: e,
			}));
		}
	}
	ButtonText() {
		if (this.state.bExpanded) {
			return (
				this.props.collapseString || (0, o.we)("#OverflowBox_Action_Collapse")
			);
		}
		{
			let e =
				this.props.expandString || (0, o.we)("#OverflowBox_Action_Expand");
			if (this.props.nMaxRows) {
				e += " " + (0, o.we)("#OverflowBox_More", this.state.nItemsHidden);
			}
			return e;
		}
	}
	componentDidMount() {
		this.forceUpdate();
		if (this.m_contentRef.current) {
			this.m_resizeObserver = (0, l.Fd)(
				this.m_contentRef.current,
				this.OnResize,
			);
		}
		this.SetOverflowState();
	}
	componentWillUnmount() {
		this.m_resizeObserver.disconnect();
	}
	OnResize() {
		this.SetOverflowState();
	}
	getBoxHeight() {
		if (this.m_contentRef) {
			return this.m_contentRef.current.scrollHeight;
		} else {
			return 220;
		}
	}
	CalculateMaxHeight() {
		if (this.props.nMaxRows) {
			let e;
			let t = i.Children.count(this.props.children);
			let r = 1;
			let n = 0;
			let a = 1;
			if (
				this.m_contentRef.current &&
				this.m_contentRef.current.getClientRects().length != 0
			) {
				let i = this.m_contentRef.current.getClientRects()[0].width;
				let s = Math.floor(i);
				let o = this.m_contentRef.current.children[0].getClientRects()[0].width;
				let l = Math.floor(o);
				r = Math.max(1, Math.floor(s / l));
				e = Math.min(t, this.props.nMaxRows * r);
				n = this.m_contentRef.current.children[0].getClientRects()[0].height;
				a = Math.floor(n);
			} else {
				e = 1;
			}
			return {
				nBoxHeight: Math.ceil(e / r) * a,
				nItemsHidden: t - e,
			};
		}
		return {
			nBoxHeight: this.props.pxOverflowHeight || 220,
			nItemsHidden: 0,
		};
	}
	render() {
		const {
			classNameWhenHidden: e,
			classNameWhenExpanded: t,
			buttonClass: r,
			suppressTransitions: n,
			suppressMask: o,
			className: l,
		} = this.props;
		const c = (0, s.A)(r, m.ButtonContainer);
		let u;
		let d;
		let A;
		let p = {
			maxHeight: this.state.bExpanded
				? this.getBoxHeight()
				: this.CalculateMaxHeight().nBoxHeight + "px",
		};
		if (this.props.nMaxRows) {
			p.display = "flex";
			p.flexDirection = "row";
			p.flexWrap = "wrap";
		}
		if (this.state.bHeightOverflows) {
			if (this.state.bExpanded) {
				u = t;
				d = m.BoxExpanded;
			} else {
				u = e;
				d = m.BoxCollapsed;
			}
			A = i.createElement(
				"div",
				{
					className: m.ButtonContainer,
				},
				i.createElement(
					a.QW,
					{
						className: (0, s.A)(c, m.ShorterButton),
						onClick: this.ToggleExpanded,
					},
					this.ButtonText(),
				),
			);
		} else {
			u = t;
			A = null;
		}
		return i.createElement(
			"div",
			{
				className: (0, s.A)(
					m.OverflowBox,
					this.state.bExpanded !== undefined && m.ExplicitlyCollapsed,
					l,
				),
			},
			i.createElement(
				"div",
				{
					ref: this.m_contentRef,
					className: (0, s.A)(
						u,
						m.OverflowBoxContent,
						d,
						n && m.NoTransitions,
						o && m.NoMask,
					),
					style: p,
				},
				this.props.children,
			),
			A,
		);
	}
	ToggleExpanded() {
		this.setState((e) => ({
			bExpanded: !e.bExpanded,
		}));
	}
}
(0, n.Cg)([l.oI, (0, u.s)(100)], S.prototype, "OnResize", null);
(0, n.Cg)([l.oI], S.prototype, "ToggleExpanded", null);
