var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./54644.js");
var o = require("./7558.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./10731.js");
var u = m;
var d = require(/*webcrack:missing*/ "./89193.js");
var A = require(/*webcrack:missing*/ "./41230.js");
var p = require(/*webcrack:missing*/ "./90095.js");
const g = new (class {
	m_data = new Map();
	get(e) {
		return e && this.m_data.get(e);
	}
	set(e, t) {
		if (e) {
			this.m_data.set(e, t);
		}
	}
})();
const h = i.createContext(null);
export let kd = class extends i.Component {
	constructor(e) {
		super(e);
		(0, d.Gn)(this);
	}
	m_mountedSmartScrollContainers = [];
	AddSmartScrollContainer(e) {
		this.m_mountedSmartScrollContainers.push(e);
	}
	RemoveSmartScrollContainer(e) {
		this.m_mountedSmartScrollContainers.splice(
			this.m_mountedSmartScrollContainers.indexOf(e),
			1,
		);
	}
	get latestScrollContainerScrollTop() {
		if (this.m_mountedSmartScrollContainers.length == 0) {
			return null;
		} else {
			return this.m_mountedSmartScrollContainers[
				this.m_mountedSmartScrollContainers.length - 1
			].scrollTop;
		}
	}
	render() {
		return i.createElement(
			h.Provider,
			{
				value: this,
			},
			this.props.children,
		);
	}
};
export function iE() {
	const e = i.useContext(h);
	return (0, p.q3)(() =>
		e.m_mountedSmartScrollContainers.length == 0
			? null
			: e.m_mountedSmartScrollContainers[
					e.m_mountedSmartScrollContainers.length - 1
				],
	);
}
(0, n.Cg)([d.sH], kd.prototype, "m_mountedSmartScrollContainers", undefined);
(0, n.Cg)([d.EW], kd.prototype, "latestScrollContainerScrollTop", null);
kd = (0, n.Cg)([A.PA], kd);
class f extends i.Component {
	m_animation;
	m_elTarget;
	get Element() {
		return this.m_elTarget;
	}
	RestoreScrollPosition() {
		const e = g.get(this.props.strRememberScrollKey);
		if (this.m_elTarget && e) {
			const t = (0, s.qf)(this.m_elTarget);
			if (t) {
				t.requestAnimationFrame(() => {
					this.m_elTarget.scrollLeft = e[0];
					this.m_elTarget.scrollTop = e[1];
					this.m_elTarget.dispatchEvent(new Event("scroll"));
					this.m_elTarget.dispatchEvent(new Event("restorescroll"));
				});
			}
		}
	}
	SaveScrollPosition() {
		if (this.m_elTarget && this.props.strRememberScrollKey != null) {
			const e = this.m_elTarget.scrollLeft;
			const t = this.m_elTarget.scrollTop;
			g.set(this.props.strRememberScrollKey, [e, t]);
		}
	}
	componentDidMount() {
		this.RestoreScrollPosition();
	}
	componentDidUpdate(e) {
		if (this.props.strRememberScrollKey !== e.strRememberScrollKey) {
			this.RestoreScrollPosition();
		}
	}
	componentWillUnmount() {
		this.SaveScrollPosition();
	}
	get scrollTop() {
		return this.m_elTarget.scrollTop;
	}
	UpdateRef(e) {
		this.m_elTarget = e;
		(0, a.cZ)(this.props.innerRef, e);
	}
	ScrollToTop() {
		this.ScrollTo(0);
	}
	ScrollToBottom() {
		this.ScrollTo(this.m_elTarget.scrollHeight);
	}
	ScrollTo(e, t = "smooth") {
		if (this.m_animation) {
			this.m_animation.Cancel();
		}
		if (t == "smooth") {
			let t = Math.abs(this.m_elTarget.scrollTop - e);
			let r = Math.max(Math.min((t / 1000) * 200, 500), 300);
			this.m_animation = new o.JV(
				this.m_elTarget,
				{
					scrollTop: e,
				},
				{
					msDuration: r,
					timing: "sine",
					onComplete: () => {},
				},
			);
			this.m_animation.Start();
		} else {
			this.m_elTarget.scrollTop = e;
		}
	}
	render() {
		const {
			className: e,
			innerRef: t,
			strRememberScrollKey: r,
			...n
		} = this.props;
		return i.createElement(
			"div",
			{
				className: (0, l.A)(u.Body, e),
				...n,
				ref: this.UpdateRef,
			},
			this.props.children,
		);
	}
}
function b(e) {
	return i.createElement(
		"div",
		{
			className: u.ScrollToTopButtonPosition,
		},
		e.children,
	);
}
(0, n.Cg)([a.oI], f.prototype, "UpdateRef", null);
(0, n.Cg)([a.oI], f.prototype, "ScrollToTop", null);
export class ix extends i.Component {
	constructor(e) {
		super(e);
		(0, d.Gn)(this);
	}
	static contextType = h;
	static defaultProps = {
		scrollToTopThreshold: 1000,
	};
	state = {
		bScrollToTopButtonVisible: false,
	};
	m_nScrollTop = 0;
	m_elTarget = i.createRef();
	OnScroll(e) {
		if (this.props.onScroll) {
			this.props.onScroll(e);
		}
		this.CheckScrollPosition();
	}
	CheckScrollPosition() {
		const e = Math.ceil(this.m_elTarget.current?.scrollTop ?? 0);
		let t = e > this.props.scrollToTopThreshold;
		if (this.state.bScrollToTopButtonVisible != t) {
			this.setState({
				bScrollToTopButtonVisible: t,
			});
		}
		this.m_nScrollTop = e;
	}
	get scrollTop() {
		return this.m_nScrollTop;
	}
	ScrollToTop() {
		this.m_elTarget.current?.ScrollToTop();
	}
	ScrollToBottom() {
		this.m_elTarget.current?.ScrollToBottom();
	}
	ScrollTo(e, t = "smooth") {
		this.m_elTarget.current?.ScrollTo(e, t);
	}
	get Element() {
		return this.m_elTarget.current?.Element;
	}
	componentDidMount() {
		if (this.context) {
			this.context.AddSmartScrollContainer(this);
		}
		this.CheckScrollPosition();
	}
	componentWillUnmount() {
		if (this.context) {
			this.context.RemoveSmartScrollContainer(this);
		}
	}
	render() {
		const {
			className: e,
			onScroll: t,
			scrollClassName: r,
			scrollToTopThreshold: n,
			scrollToTopButtonWrapper: a,
			innerRef: s,
			strRememberScrollKey: o,
			...c
		} = this.props;
		let m = a || b;
		return i.createElement(
			"div",
			{
				className: (0, l.A)(u.Container, e),
				...c,
			},
			i.createElement(
				f,
				{
					className: r,
					ref: this.m_elTarget,
					onScroll: this.OnScroll,
					innerRef: s,
					strRememberScrollKey: o,
				},
				this.props.children,
			),
			i.createElement(
				m,
				null,
				i.createElement(S, {
					action: this.ScrollToTop,
					visible: this.state.bScrollToTopButtonVisible,
				}),
			),
		);
	}
}
(0, n.Cg)([d.sH], ix.prototype, "m_nScrollTop", undefined);
(0, n.Cg)([a.oI], ix.prototype, "OnScroll", null);
(0, n.Cg)([a.oI], ix.prototype, "ScrollToTop", null);
class S extends i.Component {
	render() {
		let { action: e, visible: t } = this.props;
		return i.createElement(
			"div",
			{
				className: (0, l.A)(u.ScrollToTopButton, t && u.Visible),
				onClick: e,
			},
			i.createElement("div", null, (0, c.we)("#Generic_ScrollToTop")),
		);
	}
}
