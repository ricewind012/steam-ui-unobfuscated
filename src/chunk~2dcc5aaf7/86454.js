import { FindAncestrally } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import s, { md } from "./52451.js";
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
			this.m_observer = md(t, this.OnIntersection, e);
		}
		if (this.m_observer && t && t != this.m_elTracked) {
			this.m_observer.observe(t);
			this.m_elTracked = t;
		}
	}
	FindScrollableAncestor(e) {
		return FindAncestrally(e, (e) => {
			const t = this.props.bHorizontal
				? window.getComputedStyle(e).overflowX
				: window.getComputedStyle(e).overflowY;
			return (
				t == "scroll" ||
				t == "auto" ||
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
		let { onVisibilityChange, rootMargin, trigger, bHorizontal, ...a } =
			this.props;
		return (
			<div ref={this.m_refElement} {...a}>
				{this.props.children}
			</div>
		);
	}
}
Cg([s.oI], J.prototype, "OnIntersection", null);
