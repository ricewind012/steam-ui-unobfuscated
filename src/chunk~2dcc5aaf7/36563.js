import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./41230.js";
import s, { Fd } from "./52451.js";
import o, { s as s_1 } from "./81255.js";
import l from "./3299.js";
const c = l;
export let S = class extends i.Component {
	m_elContainer;
	m_elItem;
	m_resizeObserver;
	BindContainer(e) {
		this.m_elContainer = e;
		if (e) {
			this.m_resizeObserver?.disconnect();
			this.m_resizeObserver = Fd(e, this.OnResize);
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
			keyExtractor,
			itemRenderer,
			remainderRenderer,
			items,
			totalItemOverride,
			justifyContent,
			...o
		} = this.props;
		let l = [];
		if (items.length == 0) {
			if (!(totalItemOverride > 0)) {
				return null;
			}
			l.push(
				<div className={c.ItemWrapper} key="remaining">
					{remainderRenderer(totalItemOverride)}
				</div>,
			);
		} else {
			let s = Math.min(1, items.length);
			let o = totalItemOverride || items.length;
			if (this.m_elContainer && this.m_elItem && this.m_elItem.offsetWidth) {
				let e = this.m_elContainer.clientWidth;
				let t = this.m_elItem.offsetWidth;
				let i = remainderRenderer ? 1 : 0;
				s = Math.min(items.length, Math.floor(e / t) - i);
				if (i && o - s == 1) {
					s = items.length;
				}
			}
			for (let r = 0; r < s; r++) {
				let n_r = items[r];
				l.push(
					<div
						className={c.ItemWrapper}
						key={keyExtractor(n_r)}
						ref={r == 0 ? this.BindItem : undefined}
						onLoad={r == 0 ? this.OnItemLoad : undefined}
					>
						{itemRenderer(n_r)}
					</div>,
				);
			}
			if (
				remainderRenderer &&
				s < o &&
				this.m_elItem &&
				this.m_elItem.offsetWidth
			) {
				let e = s < items.length ? items[s] : undefined;
				l.push(
					<div className={c.ItemWrapper} key="remaining">
						{remainderRenderer(o - s, e)}
					</div>,
				);
			}
		}
		if (l.length > 0) {
			return (
				<div {...o}>
					<div
						className={c.InnerContainer}
						style={{
							justifyContent: justifyContent,
						}}
						ref={this.BindContainer}
					>
						{l}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
};
Cg([s.oI], S.prototype, "BindContainer", null);
Cg([s.oI], S.prototype, "BindItem", null);
Cg([s.oI], S.prototype, "OnItemLoad", null);
Cg([s.oI, s_1(100)], S.prototype, "OnResize", null);
S = Cg([a.PA], S);
