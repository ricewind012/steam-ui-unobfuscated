import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s from "./46162.js";
import { A as A_1 } from "./90765.js";
import c, { XB } from "./52451.js";
import m from "./31958.js";
import u from "./90242.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
const A = new (require(/*webcrack:missing*/ "./83599.js").wd)("DragDrop").Debug;
export function ck(e) {
	return e.children;
}
export class AL extends i.Component {
	m_coordinator = new np();
	OnDrop(e, t) {
		if (t > e) {
			t--;
		}
		if (t != e) {
			this.props.onReorder(e, t);
		}
	}
	render() {
		let e = [];
		e.push(
			<S
				coordinator={this.m_coordinator}
				key="dropregion_top"
				fnBAcceptDraggable={(e) => e.props.data != 0}
				fnOnDrop={(e) => this.OnDrop(e.props.data, 0)}
			/>,
		);
		i.Children.forEach(this.props.children, (t, r) => {
			const n = t.props.id || `__list_${r}`;
			const a = r + 1;
			e.push(
				<Sx coordinator={this.m_coordinator} data={r} key={n}>
					{t}
				</Sx>,
			);
			e.push(
				<S
					coordinator={this.m_coordinator}
					key={`dropregion_${n}`}
					fnBAcceptDraggable={(e) => e.props.data != a}
					fnOnDrop={(e) => this.OnDrop(e.props.data, a)}
				/>,
			);
		});
		return <div className="DialogReorderableList">{e}</div>;
	}
}
function h(e, t, r, n) {
	if (n) {
		return r && e > r.left && e < r.right && t > r.top && t < r.bottom;
	} else {
		return r && e >= r.left && e <= r.right && t >= r.top && t <= r.bottom;
	}
}
Cg([c.oI], AL.prototype, "OnDrop", null);
export class np {
	m_embeddedElement = new s.MX("DragGhosts");
	m_rgDropRegions = [];
	m_activeDraggable;
	m_rgActiveDropRegions = [];
	m_activeDropRegion;
	m_dropGhost;
	m_dragGhost;
	m_dragOffWindowTimer;
	RegisterDropRegion(e) {
		this.m_rgDropRegions.push(e);
		if (this.m_activeDraggable && e.BAcceptDraggable(this.m_activeDraggable)) {
			e.OnDragStarted(this.m_activeDraggable);
			this.m_rgActiveDropRegions.push(e);
		}
	}
	UnregisterDropRegion(e) {
		FindAndRemove(this.m_rgDropRegions, e);
		FindAndRemove(this.m_rgActiveDropRegions, e);
		if (this.m_activeDropRegion == e) {
			this.m_activeDropRegion = undefined;
			if (this.m_activeDraggable) {
				this.ShowDragGhost();
			}
		}
	}
	OnDragGhostRef(e) {
		this.m_dragGhost = e;
	}
	ShowDragGhost() {
		const e = this.m_activeDraggable.renderDragGhost();
		const t = A_1(
			e.props.className,
			!!this.m_activeDropRegion && "DraggedOverActiveDrop",
		);
		const r = i.cloneElement(e, {
			ref: this.OnDragGhostRef,
			className: t,
		});
		this.m_embeddedElement.ShowElement(
			this.m_activeDraggable.GetDragDocument(),
			r,
			this.m_activeDraggable,
		);
	}
	HideDragGhost() {
		this.m_embeddedElement.HideElement(
			this.m_activeDraggable.GetDragDocument(),
			this.m_activeDraggable,
		);
	}
	m_elCloneContainer;
	m_elCloneOriginal;
	m_nodeCloneCopy;
	MakeDragClone(e) {
		AssertMsg(
			!this.m_nodeCloneCopy && !this.m_elCloneOriginal,
			"Drag already in progress",
		);
		this.m_elCloneOriginal = e.m_divRef.current;
		this.m_nodeCloneCopy = this.m_elCloneOriginal.cloneNode(true);
		e.m_divRef.current.replaceWith(this.m_nodeCloneCopy);
		if (!this.m_elCloneContainer) {
			this.m_elCloneContainer = e
				.GetDragDocument()
				.body.ownerDocument.createElement("div");
			e.GetDragDocument().body.appendChild(this.m_elCloneContainer);
		}
		this.m_elCloneContainer.appendChild(this.m_elCloneOriginal);
	}
	ReverseDragClone() {
		this.m_nodeCloneCopy.parentNode?.replaceChild(
			this.m_elCloneOriginal,
			this.m_nodeCloneCopy,
		);
		this.m_nodeCloneCopy = undefined;
		this.m_elCloneOriginal = undefined;
	}
	OnDragStart(e) {
		this.m_activeDraggable = e;
		this.m_rgActiveDropRegions = [];
		for (let t of this.m_rgDropRegions) {
			if (t.BAcceptDraggable(e)) {
				t.OnDragStarted(e);
				this.m_rgActiveDropRegions.push(t);
			}
		}
		this.MakeDragClone(e);
		this.ShowDragGhost();
	}
	EndDrag() {
		if (this.m_activeDraggable) {
			this.ReverseDragClone();
			this.HideDragGhost();
			if (this.m_activeDropRegion) {
				this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
			}
			for (let e of this.m_rgActiveDropRegions) {
				e.OnDragEnded(this.m_activeDraggable);
			}
			this.m_activeDraggable = undefined;
			this.m_dropGhost = undefined;
			this.m_rgActiveDropRegions = [];
		}
	}
	FindBestActiveDropRegionForPoint(e, t) {
		const r = this.m_activeDraggable.GetDragDocument();
		let n;
		if ("elementsFromPoint" in r) {
			n = r.elementsFromPoint(e, t);
		}
		if (n) {
			const e = new Map();
			this.m_rgActiveDropRegions.forEach((t) => e.set(t.GetElement(), t));
			for (const t of n) {
				const r = e.get(t);
				if (r) {
					return r;
				}
			}
		} else {
			if (
				this.m_activeDropRegion &&
				this.m_activeDropRegion.BDraggableInRegion(e, t, this.m_activeDraggable)
			) {
				return this.m_activeDropRegion;
			}
			for (let r = this.m_rgActiveDropRegions.length - 1; r >= 0; r--) {
				const n = this.m_rgActiveDropRegions[r];
				if (n.BDraggableInRegion(e, t, this.m_activeDraggable)) {
					return n;
				}
			}
		}
	}
	m_prevClientX = 0;
	m_prevClientY = 0;
	OnDrag(e, t, r) {
		const n = this.m_prevClientX || t;
		const i = this.m_prevClientY || r;
		if (e.props.bEnableHTMLDrag && this.m_dragOffWindowTimer) {
			window.clearTimeout(this.m_dragOffWindowTimer);
		}
		if (this.m_dragGhost) {
			const t = n === undefined ? 0 : n - (this.m_dragGhost.state.clientX ?? 0);
			const r = i === undefined ? 0 : i - (this.m_dragGhost.state.clientY ?? 0);
			this.m_dragGhost.setState({
				clientX: n,
				clientY: i,
				clientXDelta: t,
				clientYDelta: r,
				bVisible: true,
			});
			if (e.props.bEnableHTMLDrag && (t || r)) {
				const a = n + t;
				const s = i + r;
				const o = e.GetDragDocument().body.getBoundingClientRect();
				if (h(n, i, o) && !h(a, s, o, true)) {
					const t = m.Fu(a, o.left, o.right, o.left - 200, o.right + 200);
					const r = m.Fu(s, o.top, o.bottom, o.top - 100, o.bottom + 100);
					const n = 50;
					this.m_dragOffWindowTimer = window.setTimeout(() => {
						if (e == this.m_activeDraggable) {
							this.OnDrag(e, t, r);
						}
					}, n);
				}
			}
		}
		const a = this.FindBestActiveDropRegionForPoint(n, i);
		this.m_prevClientX = t;
		this.m_prevClientY = r;
		if (!!this.m_activeDropRegion != !!a) {
			this.ShowDragGhost();
			this.m_dropGhost ||= this.m_activeDraggable.renderDropGhost();
		}
		if (this.m_activeDropRegion && this.m_activeDropRegion != a) {
			this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable);
		}
		if (a && this.m_activeDropRegion != a) {
			a.OnDragEnter(this.m_activeDraggable, this.m_dropGhost);
		}
		this.m_activeDropRegion = a;
		if (this.m_activeDropRegion) {
			this.m_activeDropRegion.OnDragMove(n, i, this.m_activeDraggable);
		}
	}
}
Cg([c.oI], np.prototype, "OnDragGhostRef", null);
export class Sx extends i.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	m_DragInfo = {
		bStarted: false,
		startClientX: undefined,
		startClientY: undefined,
		startOffsetX: undefined,
		startOffsetY: undefined,
		startWidth: undefined,
		startHeight: undefined,
		ownerWin: undefined,
	};
	m_divRef = i.createRef();
	GetDragDocument() {
		return this.m_DragInfo.ownerWin?.document;
	}
	RecordDragStart(e, t, r) {
		this.m_DragInfo.startClientX = t;
		this.m_DragInfo.startClientY = r;
		let n = e.getBoundingClientRect();
		this.m_DragInfo.startOffsetX = t - n.left;
		this.m_DragInfo.startOffsetY = r - n.top;
		this.m_DragInfo.startWidth = n.width;
		this.m_DragInfo.startHeight = n.height;
		this.m_DragInfo.ownerWin = e.ownerDocument.defaultView;
	}
	ProcessDragMove(e) {
		A("ProcessDragMove", e, this.props.data);
		const [t, r] = ((e) => {
			if ("touches" in e) {
				let t = e;
				return [t.touches[0].clientX, t.touches[0].clientY];
			}
			return [e.clientX, e.clientY];
		})(e);
		if (this.m_DragInfo.bStarted) {
			if (this.props.bEnableHTMLDrag && t == 0 && r == 0) {
				return;
			}
			this.props.coordinator.OnDrag(this, t, r);
		} else if (
			(t - (this.m_DragInfo.startClientX ?? 0)) ** 2 +
				(r - (this.m_DragInfo.startClientY ?? 0)) ** 2 >=
			25
		) {
			this.m_DragInfo.bStarted = true;
			this.forceUpdate();
			if (this.props.fnOnDragStart) {
				this.props.fnOnDragStart();
			}
			this.props.coordinator.OnDragStart(this);
			this.props.coordinator.OnDrag(this, t, r);
		}
	}
	OnMouseDown(e) {
		if (!this.m_DragInfo.bStarted && e.button == 0) {
			this.RecordDragStart(e.currentTarget, e.clientX, e.clientY);
			this.m_DragInfo.ownerWin?.addEventListener(
				"mousemove",
				this.ProcessDragMove,
			);
			this.m_DragInfo.ownerWin?.addEventListener("mouseup", this.OnMouseUp);
		}
	}
	OnMouseUp(e) {
		this.m_DragInfo.ownerWin?.removeEventListener(
			"mousemove",
			this.ProcessDragMove,
		);
		this.m_DragInfo.ownerWin?.removeEventListener("mouseup", this.OnMouseUp);
		this.ResetDragState();
	}
	OnTouchStart(e) {
		if (!this.m_DragInfo.bStarted) {
			this.RecordDragStart(
				e.currentTarget,
				e.touches[0].clientX,
				e.touches[0].clientY,
			);
			this.m_DragInfo.ownerWin?.addEventListener(
				"touchmove",
				this.ProcessDragMove,
			);
			this.m_DragInfo.ownerWin?.addEventListener("touchend", this.OnTouchEnd);
		}
	}
	OnTouchEnd(e) {
		this.m_DragInfo.ownerWin?.removeEventListener(
			"touchmove",
			this.ProcessDragMove,
		);
		this.m_DragInfo.ownerWin?.removeEventListener("touchend", this.OnTouchEnd);
		this.ResetDragState();
	}
	ResetDragState() {
		A("ResetDragState", this.props.data);
		if (this.m_DragInfo.bStarted) {
			this.props.coordinator.EndDrag();
			if (this.props.fnOnDragEnd) {
				this.props.fnOnDragEnd();
			}
		}
		this.m_DragInfo.bStarted = false;
		this.m_DragInfo.startClientX = undefined;
		this.m_DragInfo.startClientY = undefined;
		this.m_DragInfo.startOffsetX = undefined;
		this.m_DragInfo.startOffsetY = undefined;
		this.m_DragInfo.ownerWin = undefined;
		this.forceUpdate();
	}
	OnHTMLDragStart(e) {
		A("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData);
		e.dataTransfer.effectAllowed = "copyMove";
		if (this.props.strHTMLDragData) {
			this.props.strHTMLDragData.forEach((t, r) =>
				e.dataTransfer.setData(r, t),
			);
		}
		if (!e.dataTransfer.getData("text/plain")) {
			e.dataTransfer.setData("text/plain", this.props.data.toString());
		}
		const t = new Image();
		e.dataTransfer.setDragImage(t, 0, 0);
		this.RecordDragStart(e.currentTarget, e.clientX, e.clientY);
		this.m_DragInfo.ownerWin?.addEventListener("drag", this.OnHTMLDrag);
		this.m_DragInfo.ownerWin?.addEventListener("dragend", this.OnHTMLDragEnd);
	}
	OnHTMLDrag(e) {
		A("HTMLDrag", e, e.dataTransfer?.types.length);
		this.ProcessDragMove(e);
	}
	OnHTMLDragEnd(e) {
		A(
			"HTMLDragEnd",
			e,
			e.dataTransfer?.getData("text/plain") || "NOTHING",
			this.props.data,
		);
		this.m_DragInfo.ownerWin?.removeEventListener("drag", this.OnHTMLDrag);
		this.m_DragInfo.ownerWin?.removeEventListener(
			"dragend",
			this.OnHTMLDragEnd,
		);
		this.ResetDragState();
	}
	render() {
		const {
			coordinator,
			data,
			bEnableHTMLDrag,
			strHTMLDragData,
			fnOnDragStart,
			fnOnDragEnd,
			fnRenderDragGhost,
			fnRenderDropGhost,
			className,
			strActiveClassName,
			children,
			...A
		} = this.props;
		let p = {};
		let g = className || "DialogDraggable";
		if (this.m_DragInfo.bStarted) {
			g = A_1(g, strActiveClassName || "DraggedOut");
			if (bEnableHTMLDrag) {
				p = {
					onDragEnd: this.OnHTMLDragEnd,
				};
			}
		} else {
			p = bEnableHTMLDrag
				? {
						onDragStart: this.OnHTMLDragStart,
					}
				: {
						onMouseDown: this.OnMouseDown,
						onTouchStart: this.OnTouchStart,
					};
		}
		return (
			<div
				ref={this.m_divRef}
				className={g}
				{...p}
				{...A}
				draggable={bEnableHTMLDrag}
			>
				{children}
			</div>
		);
	}
	renderDropGhost() {
		if (this.props.fnRenderDropGhost) {
			return this.props.fnRenderDropGhost();
		} else {
			return <F elContent={this.GetClone()} />;
		}
	}
	renderDragGhost() {
		if (this.props.fnRenderDragGhost) {
			return this.props.fnRenderDragGhost();
		} else {
			return (
				<_H
					elContent={this.GetClone()}
					offsetX={this.m_DragInfo.startOffsetX}
					offsetY={this.m_DragInfo.startOffsetY}
					width={this.m_DragInfo.startWidth}
					height={this.m_DragInfo.startHeight}
				/>
			);
		}
	}
	GetClone() {
		const e = this.m_divRef.current;
		let t;
		if (e && e.childElementCount) {
			if (e.childElementCount == 1) {
				t = e.firstElementChild.cloneNode(true);
			} else {
				t = document.createElement("div");
				for (let r = e.firstChild; r; r = r.nextSibling) {
					t.appendChild(r.cloneNode(true));
				}
			}
		}
		return t;
	}
}
Cg([c.oI], Sx.prototype, "ProcessDragMove", null);
Cg([c.oI], Sx.prototype, "OnMouseDown", null);
Cg([c.oI], Sx.prototype, "OnMouseUp", null);
Cg([c.oI], Sx.prototype, "OnTouchStart", null);
Cg([c.oI], Sx.prototype, "OnTouchEnd", null);
Cg([a.XI], Sx.prototype, "ResetDragState", null);
Cg([c.oI], Sx.prototype, "OnHTMLDragStart", null);
Cg([c.oI], Sx.prototype, "OnHTMLDrag", null);
Cg([c.oI], Sx.prototype, "OnHTMLDragEnd", null);
class F extends i.Component {
	OnRef(e) {
		if (e && this.props.elContent) {
			e.appendChild(this.props.elContent);
		}
	}
	render() {
		return <div className="DialogDraggable_DropGhost" ref={this.OnRef} />;
	}
}
Cg([c.oI], F.prototype, "OnRef", null);
export class _H extends i.Component {
	state = {
		clientX: undefined,
		clientY: undefined,
		bVisible: true,
		clientXDelta: undefined,
		clientYDelta: undefined,
	};
	OnRef(e) {
		if (e && this.props.elContent) {
			e.appendChild(this.props.elContent);
		}
	}
	CalculateRotationDegrees(e) {
		if (!e || Math.abs(e) < 4) {
			return 0;
		}
		return (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
	}
	render() {
		if (
			!this.state.bVisible ||
			this.state.clientX === undefined ||
			this.state.clientX === undefined ||
			this.state.clientY === undefined
		) {
			return <div />;
		}
		let e = {
			left: this.state.clientX - (this.props.offsetX || 0),
			top: this.state.clientY - (this.props.offsetY || 0),
			width: this.props.width || "auto",
			height: this.props.height || "auto",
			perspective: "600px",
		};
		let t = m.Fu(
			this.CalculateRotationDegrees(this.state.clientYDelta),
			-90,
			90,
			2,
			0,
		);
		let r = {
			transform: `rotateX(${this.CalculateRotationDegrees(
				(this.state.clientYDelta ?? 0) * -1,
			)}deg) rotateY( ${this.CalculateRotationDegrees(
				this.state.clientXDelta,
			)}deg)`,
			transition: "transform .16s ease-out, filter .16s ease-out",
			filter: `brightness(${t})`,
		};
		const n = this.props.className || "DialogDraggable_DragGhost";
		return (
			<div className={n} style={e}>
				<div ref={this.OnRef} style={r} />
			</div>
		);
	}
}
Cg([c.oI], _H.prototype, "OnRef", null);
export class cL extends i.Component {
	m_divRef = i.createRef();
	constructor(e) {
		super(e);
		this.state = {};
	}
	componentDidMount() {
		this.props.coordinator.RegisterDropRegion(this);
	}
	componentWillUnmount() {
		this.props.coordinator.UnregisterDropRegion(this);
	}
	OnDragStarted(e) {
		this.setState({
			bDraggableActive: true,
		});
	}
	OnDragEnded(e) {
		this.setState({
			bDraggableActive: false,
		});
	}
	OnDragEnter(e, t) {
		this.setState({
			dropGhost: t,
		});
		if (this.props.fnOnDragEnter) {
			this.props.fnOnDragEnter(e);
		}
	}
	OnDragLeave(e) {
		this.setState({
			dropGhost: undefined,
		});
		if (this.props.fnOnDragLeave) {
			this.props.fnOnDragLeave(e);
		}
	}
	OnDragMove(e, t, r) {}
	OnDrop(e) {
		this.setState({
			dropGhost: undefined,
		});
		this.props.fnOnDrop(e);
	}
	BAcceptDraggable(e) {
		return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e);
	}
	BDraggableInRegion(e, t, r) {
		return h(e, t, this.GetClientRect());
	}
	GetElement() {
		return this.m_divRef.current;
	}
	GetClientRect() {
		return (
			this.m_divRef.current && this.m_divRef.current.getBoundingClientRect()
		);
	}
	render() {
		const {
			coordinator,
			fnBAcceptDraggable,
			fnOnDrop,
			fnOnDragEnter,
			fnOnDragLeave,
			className,
			strActiveClassName,
			children,
			focusable,
			containerRef,
			...p
		} = this.props;
		const g = A_1(
			className || "DialogDropRegion",
			this.state.bDraggableActive && (strActiveClassName || "Active"),
		);
		return (
			<u.ml
				ref={XB(containerRef, this.m_divRef)}
				className={g}
				{...p}
				focusable={focusable === undefined ? !!p.onClick : focusable}
			>
				{this.state.dropGhost}
				{children}
			</u.ml>
		);
	}
}
class S extends cL {
	BDraggableInRegion(e, t, r) {
		let n = this.GetClientRect();
		return (
			!!n &&
			e >= n.left &&
			e <= n.right &&
			t >= n.top - 20 &&
			t <= n.bottom + 20
		);
	}
}
