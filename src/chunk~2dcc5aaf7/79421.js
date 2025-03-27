import { GetOwningWindowForElement } from "../../actual_src/utils/domutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { cZ } from "./52451.js";
import o from "./7558.js";
import { A as A_1 } from "./90765.js";
import m from "./10731.js";
import d, { Gn } from "./89193.js";
import A from "./41230.js";
import { q3 } from "./90095.js";
const u = m;
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
const HContext = i.createContext(null);
export let kd = class extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
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
			HContext.Provider,
			{
				value: this,
			},
			this.props.children,
		);
	}
};
export function iE() {
	const e = i.useContext(HContext);
	return q3(
		() =>
			e.m_mountedSmartScrollContainers.length == 0 ||
			e.m_mountedSmartScrollContainers[
				e.m_mountedSmartScrollContainers.length - 1
			],
	);
}
Cg([d.sH], kd.prototype, "m_mountedSmartScrollContainers", undefined);
Cg([d.EW], kd.prototype, "latestScrollContainerScrollTop", null);
kd = Cg([A.PA], kd);
class f extends i.Component {
	m_animation;
	m_elTarget;
	get Element() {
		return this.m_elTarget;
	}
	RestoreScrollPosition() {
		const e = g.get(this.props.strRememberScrollKey);
		if (this.m_elTarget && e) {
			const t = GetOwningWindowForElement(this.m_elTarget);
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
		cZ(this.props.innerRef, e);
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
		const { className, innerRef, strRememberScrollKey, ...n } = this.props;
		return i.createElement(
			"div",
			{
				className: A_1(u.Body, className),
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
Cg([a.oI], f.prototype, "UpdateRef", null);
Cg([a.oI], f.prototype, "ScrollToTop", null);
export class ix extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	static contextType = HContext;
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
			className,
			onScroll,
			scrollClassName,
			scrollToTopThreshold,
			scrollToTopButtonWrapper,
			innerRef,
			strRememberScrollKey,
			...c
		} = this.props;
		let m = scrollToTopButtonWrapper || b;
		return i.createElement(
			"div",
			{
				className: A_1(u.Container, className),
				...c,
			},
			i.createElement(
				f,
				{
					className: scrollClassName,
					ref: this.m_elTarget,
					onScroll: this.OnScroll,
					innerRef: innerRef,
					strRememberScrollKey: strRememberScrollKey,
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
Cg([d.sH], ix.prototype, "m_nScrollTop", undefined);
Cg([a.oI], ix.prototype, "OnScroll", null);
Cg([a.oI], ix.prototype, "ScrollToTop", null);
class S extends i.Component {
	render() {
		let { action, visible } = this.props;
		return i.createElement(
			"div",
			{
				className: A_1(u.ScrollToTopButton, visible && u.Visible),
				onClick: action,
			},
			i.createElement("div", null, Localize("#Generic_ScrollToTop")),
		);
	}
}
