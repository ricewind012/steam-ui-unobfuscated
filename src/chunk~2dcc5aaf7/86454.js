var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./54644.js");
var s = require(/*webcrack:missing*/ "./52451.js");
export class J extends i.Component {
	static GetScrollableClassname() {
		return "vt-scrollable";
	}
	m_observer = null;
	m_refElement = i.createRef();
	m_elTracked = null;
	m_bPreviouslyIntersecting = false;
	BTriggerOnce() {
		return (this.props.trigger || "once") == "once";
	}
	GetBoundingClientRect() {
		if (this.m_refElement.current) {
			return this.m_refElement.current.getBoundingClientRect();
		} else {
			return null;
		}
	}
	DestroyObserver() {
		if (this.m_observer) {
			this.m_observer.disconnect();
			this.m_observer = null;
			this.m_elTracked = null;
		}
	}
	componentWillUnmount() {
		this.DestroyObserver();
	}
	componentDidMount() {
		this.UpdateObserver(null);
	}
	componentDidUpdate(e) {
		this.UpdateObserver(e);
	}
	UpdateObserver(e) {
		if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) {
			return;
		}
		if (
			this.m_observer &&
			e &&
			(e.rootMargin != this.m_observer.rootMargin ||
				e.thresholds != this.m_observer.thresholds)
		) {
			this.DestroyObserver();
		}
		let t = this.m_refElement.current;
		if (this.m_observer && t != this.m_elTracked) {
			if (this.m_elTracked) {
				this.m_observer.unobserve(this.m_elTracked);
			}
			this.m_elTracked = null;
		}
		if (!this.m_observer && t) {
			let e = {
				root: this.FindScrollableAncestor(t),
			};
			if (this.props.rootMargin) {
				e.rootMargin = this.props.rootMargin;
			}
			if (this.props.thresholds) {
				e.threshold = this.props.thresholds;
			}
			this.m_observer = (0, s.md)(t, this.OnIntersection, e);
		}
		if (this.m_observer && t && t != this.m_elTracked) {
			this.m_observer.observe(t);
			this.m_elTracked = t;
		}
	}
	FindScrollableAncestor(e) {
		return a.Kf(e, (e) => {
			const t = this.props.bHorizontal
				? window.getComputedStyle(e).overflowX
				: window.getComputedStyle(e).overflowY;
			return (
				t == "scroll" ||
				t == "auto" ||
				!!e.classList.contains(J.GetScrollableClassname())
			);
		});
	}
	OnIntersection(e, t) {
		let r = false;
		for (const t of e) {
			if (t.isIntersecting) {
				r = true;
				break;
			}
		}
		if (this.m_bPreviouslyIntersecting != r) {
			this.m_bPreviouslyIntersecting = r;
			if (this.props.onVisibilityChange) {
				this.props.onVisibilityChange(r);
			}
			if (r && this.BTriggerOnce()) {
				this.DestroyObserver();
			}
		}
	}
	render() {
		let {
			onVisibilityChange: e,
			rootMargin: t,
			trigger: r,
			bHorizontal: n,
			...a
		} = this.props;
		return i.createElement(
			"div",
			{
				ref: this.m_refElement,
				...a,
			},
			this.props.children,
		);
	}
}
(0, n.Cg)([s.oI], J.prototype, "OnIntersection", null);
