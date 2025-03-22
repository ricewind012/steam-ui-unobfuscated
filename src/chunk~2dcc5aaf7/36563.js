var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require(/*webcrack:missing*/ "./81255.js");
var l = require("./3299.js");
var c = l;
export let S = class extends i.Component {
	m_elContainer;
	m_elItem;
	m_resizeObserver;
	BindContainer(e) {
		this.m_elContainer = e;
		if (e) {
			this.m_resizeObserver?.disconnect();
			this.m_resizeObserver = (0, s.Fd)(e, this.OnResize);
		}
	}
	BindItem(e) {
		this.m_elItem = e;
	}
	OnItemLoad() {
		this.forceUpdate();
	}
	componentDidMount() {
		this.forceUpdate();
	}
	componentWillUnmount() {
		this.m_resizeObserver?.disconnect();
	}
	OnResize() {
		this.forceUpdate();
	}
	render() {
		const {
			keyExtractor: e,
			itemRenderer: t,
			remainderRenderer: r,
			items: n,
			totalItemOverride: a,
			justifyContent: s,
			...o
		} = this.props;
		let l = [];
		if (n.length == 0) {
			if (!(a > 0)) {
				return null;
			}
			l.push(
				i.createElement(
					"div",
					{
						className: c.ItemWrapper,
						key: "remaining",
					},
					r(a),
				),
			);
		} else {
			let s = Math.min(1, n.length);
			let o = a || n.length;
			if (this.m_elContainer && this.m_elItem && this.m_elItem.offsetWidth) {
				let e = this.m_elContainer.clientWidth;
				let t = this.m_elItem.offsetWidth;
				let i = r ? 1 : 0;
				s = Math.min(n.length, Math.floor(e / t) - i);
				if (i && o - s == 1) {
					s = n.length;
				}
			}
			for (let r = 0; r < s; r++) {
				let a = n[r];
				l.push(
					i.createElement(
						"div",
						{
							className: c.ItemWrapper,
							key: e(a),
							ref: r == 0 ? this.BindItem : undefined,
							onLoad: r == 0 ? this.OnItemLoad : undefined,
						},
						t(a),
					),
				);
			}
			if (r && s < o && this.m_elItem && this.m_elItem.offsetWidth) {
				let e = s < n.length ? n[s] : undefined;
				l.push(
					i.createElement(
						"div",
						{
							className: c.ItemWrapper,
							key: "remaining",
						},
						r(o - s, e),
					),
				);
			}
		}
		if (l.length > 0) {
			return i.createElement(
				"div",
				{
					...o,
				},
				i.createElement(
					"div",
					{
						className: c.InnerContainer,
						style: {
							justifyContent: s,
						},
						ref: this.BindContainer,
					},
					l,
				),
			);
		} else {
			return null;
		}
	}
};
(0, n.Cg)([s.oI], S.prototype, "BindContainer", null);
(0, n.Cg)([s.oI], S.prototype, "BindItem", null);
(0, n.Cg)([s.oI], S.prototype, "OnItemLoad", null);
(0, n.Cg)([s.oI, (0, o.s)(100)], S.prototype, "OnResize", null);
S = (0, n.Cg)([a.PA], S);
