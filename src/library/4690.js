var r = require(/*webcrack:missing*/ "./34629.js");
var i = require("./61657.js");
var s = require("./34742.js");
var o = require("./85688.js");
var a = require("./93960.js");
var c = require("./90039.js");
var l = require("./83599.js");
var u = require("./87197.js");
var m = require("./20893.js");
var d = require("./61050.js");
var h = require("./54644.js");
function p(e, t, n) {
	const r = [];
	const [i, s] = e.GetChildren();
	const o = e.GetActiveChild();
	let a;
	const c = o ? o.Element?.getBoundingClientRect() : null;
	if (o) {
		const e = _(o, t, n);
		if (
			e &&
			!e.offScreen &&
			((a = g(o, e, e.overlap, n)), a && !a.visibility.offScreen)
		) {
			return a;
		}
		if (e) {
			r.push({
				child: o,
				visibility: e,
			});
		}
	}
	const l = n || c;
	for (let e = 0; e < i.length; e++) {
		const n = i[e];
		if (n == o) {
			continue;
		}
		const s = _(n, t, l ?? undefined);
		if (s) {
			r.push({
				child: n,
				visibility: s,
			});
		}
	}
	let u;
	r.sort(f);
	for (const e of r) {
		const { child: n, visibility: r } = e;
		if (r.offScreen && u) {
			if (!u.visibility.offScreen) {
				break;
			}
			if (r.distance && r.distance > u.visibility.distance) {
				break;
			}
		}
		const i = n == o ? a : g(n, r, r.overlap || t, l ?? undefined);
		if (i && (!u || f(i, u) < 0)) {
			u = i;
		}
	}
	return u;
}
function g(e, t, n, r) {
	switch (e.GetFocusable()) {
		case "none":
			return;
		case "children":
			return p(e, t.overlap || n, r);
		case "self":
			return {
				child: e,
				visibility: t,
			};
	}
}
function f(e, t) {
	const n = e.visibility;
	const r = t.visibility;
	if (n.offScreen) {
		if (r.offScreen) {
			return n.distance - r.distance;
		} else {
			return 1;
		}
	} else if (r.offScreen) {
		return -1;
	} else {
		return n.distance - r.distance;
	}
}
function _(e, t, n) {
	const r = e.Element?.getBoundingClientRect();
	const i = e.GetFocusable();
	let s;
	if (i == "none" || !r || !t) {
		return null;
	}
	if (i == "self") {
		if (
			r.top < t.top ||
			r.right > t.right ||
			r.bottom > t.bottom ||
			r.left < t.left
		) {
			const e = r.top + r.height / 2;
			const n = r.left + r.width / 2;
			if (e < t.top) {
				return {
					offScreen: "top",
					distance: t.top - e,
				};
			}
			if (n > t.right) {
				return {
					offScreen: "right",
					distance: n - t.right,
				};
			}
			if (e > t.bottom) {
				return {
					offScreen: "bottom",
					distance: e - t.bottom,
				};
			}
			if (n < t.left) {
				return {
					offScreen: "left",
					distance: t.left - n,
				};
			}
		}
		if (n) {
			s = (0, h.bZ)(r, n);
		}
	} else if (i == "children") {
		const n = e.Element;
		if (!n) {
			return null;
		}
		if (n.scrollHeight > r.height || n.scrollWidth > r.width) {
			const e = n.ownerDocument.defaultView.getComputedStyle(n);
			if (e.overflowX == "visible" || e.overflowY == "visible") {
				return {
					overlap: t,
				};
			}
		}
		if (r.bottom < t.top) {
			return {
				offScreen: "top",
				distance: t.top - r.bottom,
			};
		}
		if (r.left > t.right) {
			return {
				offScreen: "right",
				distance: r.left - t.right,
			};
		}
		if (r.top > t.bottom) {
			return {
				offScreen: "bottom",
				distance: r.top - t.bottom,
			};
		}
		if (r.right < t.left) {
			return {
				offScreen: "left",
				distance: t.left - r.right,
			};
		}
	}
	return {
		overlap: {
			top: Math.max(r.top, t.top),
			right: Math.min(r.right, t.right),
			bottom: Math.min(r.bottom, t.bottom),
			left: Math.max(r.left, t.left),
		},
		distance: s,
	};
}
var w = require("./71255.js");
const b = new l.wd("FocusNavigationMovement").Debug;
export var xj;
export var iU;
export var Yo;
export var $C;
(function (e) {
	e[(e.NONE = 0)] = "NONE";
	e[(e.COLUMN = 1)] = "COLUMN";
	e[(e.ROW = 2)] = "ROW";
	e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE";
	e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE";
	e[(e.GRID = 5)] = "GRID";
	e[(e.GEOMETRIC = 6)] = "GEOMETRIC";
})((xj ||= {}));
(function (e) {
	e[(e.FIRST = 0)] = "FIRST";
	e[(e.LAST = 1)] = "LAST";
	e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X";
	e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y";
	e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD";
})((iU ||= {}));
(function (e) {
	e[(e.Standard = 0)] = "Standard";
	e[(e.NoTransform = 1)] = "NoTransform";
	e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent";
})((Yo ||= {}));
(function (e) {
	e[(e.INVALID = 0)] = "INVALID";
	e[(e.FORWARD = 1)] = "FORWARD";
	e[(e.BACKWARD = 2)] = "BACKWARD";
})(($C ||= {}));
export class Bp {
	m_Tree;
	m_Parent;
	m_rgChildren = [];
	m_ActiveChild;
	m_iLastActiveChildIndex = -1;
	m_Properties;
	m_element;
	m_FocusRing;
	m_bChildrenSorted = false;
	m_bAutoFocusChild = false;
	m_bMounted = false;
	m_nDepth;
	m_bFocused = false;
	m_FocusCallbackList = new c.l();
	m_bFocusWithin = false;
	m_FocusWithinCallbackList = new c.l();
	m_ActionDescriptionsChangedCallbackList = new c.l();
	m_RetainFocusParent = null;
	m_rgNavigationHandlers = [];
	m_rgFocusHandlers = [];
	constructor(e, t, n) {
		this.m_Tree = e;
		this.m_Parent = t;
		this.m_FocusRing = n;
		this.m_nDepth = t ? t.m_nDepth + 1 : 0;
	}
	CreateHandle() {
		return new d.kI(this);
	}
	get Tree() {
		return this.m_Tree;
	}
	get NavKey() {
		if (this.m_Properties?.navKey) {
			return this.m_Properties.navKey;
		} else if (this.m_element?.id) {
			return this.m_element.id;
		} else {
			return undefined;
		}
	}
	get Element() {
		return this.m_element;
	}
	get Parent() {
		return this.m_Parent;
	}
	SetProperties(e) {
		const t = !(0, u.e)(
			this.m_Properties?.actionDescriptionMap,
			e?.actionDescriptionMap,
		);
		const n = this.m_Properties?.retainFocus;
		const r = this.m_Properties?.noFocusRing;
		this.m_Properties = e || {};
		if (t) {
			this.m_ActionDescriptionsChangedCallbackList.Dispatch();
		}
		if (this.m_Properties.retainFocus && !n) {
			this.PropagateRetainFocusParentToChildren(this);
		} else if (!this.m_Properties.retainFocus && n) {
			this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent);
		}
		if (this.m_Properties.noFocusRing && !r && this.BHasFocus()) {
			this.m_FocusRing?.OnBlur(m.D$.APPLICATION, this, this);
		} else if (!this.m_Properties.noFocusRing && r && this.BHasFocus()) {
			this.m_FocusRing?.OnFocus(m.D$.APPLICATION, this, this);
		}
		if (this.m_element) {
			this.RegisterDOMEvents();
		}
	}
	BWantsAutoFocus() {
		return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
	}
	BWantsPreferredFocus() {
		return this.m_Properties?.preferredFocus;
	}
	BWantsFocusRing() {
		return (
			!this.m_Properties?.noFocusRing ||
			this.m_Tree.Controller.GetShowDebugFocusRing().Value
		);
	}
	GetBoundingRect() {
		return this.m_element && this.m_element.getBoundingClientRect();
	}
	SetHasFocus(e) {
		if (e != this.m_bFocused) {
			this.m_bFocused = e;
			this.m_FocusCallbackList.Dispatch(this.m_bFocused);
		}
	}
	SetFocusWithin(e) {
		if (e != this.m_bFocusWithin) {
			this.m_bFocusWithin = e;
			this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin);
			if (this.m_Properties?.onFocusWithin) {
				this.m_Properties.onFocusWithin(this.m_bFocusWithin);
			}
		}
	}
	BHasFocus() {
		return this.m_bFocused;
	}
	BFocusWithin() {
		return this.m_bFocusWithin;
	}
	get FocusCallbackList() {
		return this.m_FocusCallbackList;
	}
	get FocusWithinCallbackList() {
		return this.m_FocusWithinCallbackList;
	}
	ForceMeasureFocusRing() {
		this.m_FocusRing?.OnForceMeasureFocusRing();
	}
	get ActionDescriptionChangedCallbackList() {
		return this.m_ActionDescriptionsChangedCallbackList;
	}
	GetActiveActionDescriptions() {
		return this.BuildConsolidatedActionDescriptionMap({});
	}
	BuildConsolidatedActionDescriptionMap(e) {
		const t = this.m_Properties?.actionDescriptionMap;
		if (t) {
			for (const n in t) {
				const r = n;
				if (e[r] === undefined) {
					e[r] = t[r];
				}
			}
		}
		if (this.m_Parent) {
			return this.m_Parent.BuildConsolidatedActionDescriptionMap(e);
		} else {
			return e;
		}
	}
	AddChild(e) {
		this.m_rgChildren.push(e);
		this.m_bChildrenSorted = false;
		if (this.m_element) {
			this.RegisterDOMEvents();
		}
		if (this.m_Properties?.retainFocus) {
			e.SetRetainFocusParent(this);
		} else if (this.m_RetainFocusParent) {
			e.SetRetainFocusParent(this.m_RetainFocusParent);
		}
		if (this.m_bMounted && e.BFocusWithin()) {
			(0, o.w)(
				!this.m_ActiveChild && this.BFocusWithin(),
				"Invalid focus state in AddChild",
			);
			this.SetActiveChild(this.m_rgChildren.length - 1);
		}
	}
	OnMount(e) {
		this.m_element = e;
		if (this.m_Parent) {
			this.m_Parent.AddChild(this);
		} else {
			(0, o.w)(this == this.m_Tree.Root, "Only root should have no parent");
		}
		this.m_bMounted = true;
		this.RegisterDOMEvents();
		const t = this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus();
		const n = this.m_Properties?.autoFocus || t;
		if (this.BWantsAutoFocus() || n) {
			let e = -1;
			if (this.m_rgChildren.length) {
				this.EnsureChildrenSorted();
				e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus());
			}
			if (this.m_Properties?.autoFocus || n || e !== -1) {
				this.SetActiveChild(e);
				if (!this.m_Parent || this.m_Parent.m_element) {
					if (t) {
						if (!this.m_Tree.DeferredFocus.BHasQueuedFocusNode()) {
							this.m_Tree.DeferredFocus.RequestFocus(this.m_RetainFocusParent, {
								bFocusDescendant: true,
							});
						}
					} else {
						this.Tree.DeferredFocus.RequestFocus(this);
					}
				} else {
					this.m_Parent.m_bAutoFocusChild = true;
				}
			}
		} else if (this.m_rgChildren.length) {
			const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
			if (e != -1) {
				this.SetActiveChild(e);
				(0, o.w)(
					this.m_bFocusWithin,
					"Child has focus, we should be m_bFocusWithin",
				);
			}
		}
	}
	DEV_SetDebugPropsOnElement() {}
	OnUnmount() {
		if (this.m_Properties?.retainFocus) {
			this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent);
		}
		this.m_bMounted = false;
		const e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
		if (this.m_bFocused || e) {
			b(
				`The focused node is unmounting, ${this.m_RetainFocusParent ? "will transfer to retain focus ancestor" : "will blur"}.`,
			);
			if (e) {
				this.Tree.DeferredFocus.RequestFocus(null);
			}
			if (this.m_RetainFocusParent) {
				this.m_RetainFocusParent.OnFocusedDecendantRemoved(this);
			} else if (this.m_bFocused) {
				this.m_Tree.TransferFocus(m.D$.APPLICATION, null);
			}
		}
		this.UnregisterDOMEvents();
		if (this.m_Parent) {
			this.m_Parent.RemoveChild(this);
		} else {
			(0, o.w)(this == this.m_Tree.Root, "Only root should have no parent");
		}
	}
	RegisterDOMEvents() {
		if (
			!this.m_rgNavigationHandlers.length &&
			this.m_element &&
			(this.m_rgChildren.length >= 2 ||
				this.m_Properties?.layout != xj.NONE ||
				this.m_Properties.onMoveUp ||
				this.m_Properties.onMoveRight ||
				this.m_Properties.onMoveDown ||
				this.m_Properties.onMoveLeft)
		) {
			this.m_rgNavigationHandlers.push(
				(0, m.u8)(this.m_element, this.OnNavigationEvent),
			);
		}
		if (
			this.m_Properties?.focusable ||
			this.m_Properties?.focusableIfNoChildren ||
			this.m_rgChildren.length == 0
		) {
			if (!this.m_rgFocusHandlers.length) {
				this.m_element?.addEventListener("focus", this.OnDOMFocus);
				this.m_element?.addEventListener("blur", this.OnDOMBlur);
				this.m_rgFocusHandlers.push(() => {
					this.m_element?.removeEventListener("focus", this.OnDOMFocus);
					this.m_element?.removeEventListener("blur", this.OnDOMBlur);
				});
			}
		}
	}
	RemoveChild(e) {
		let t = this.m_rgChildren.indexOf(e);
		(0, o.w)(t !== -1, "Child was not found to remove");
		if (t !== -1) {
			if (this.m_ActiveChild == e) {
				this.m_ActiveChild = undefined;
			}
			this.m_rgChildren.splice(t, 1);
		}
	}
	UnregisterDOMEvents() {
		this.m_rgNavigationHandlers.forEach((e) => e());
		this.m_rgNavigationHandlers = [];
		this.m_rgFocusHandlers.forEach((e) => e());
		this.m_rgFocusHandlers = [];
	}
	GetActiveDescendant() {
		const e = this.GetActiveChild();
		if (e) {
			return e.GetActiveDescendant();
		} else {
			return this;
		}
	}
	IsValidChildIndex(e) {
		return e >= 0 && e < this.m_rgChildren.length;
	}
	GetActiveChild() {
		if (this.m_ActiveChild) {
			return this.m_ActiveChild;
		} else {
			this.EnsureChildrenSorted();
			if (this.IsValidChildIndex(this.m_iLastActiveChildIndex)) {
				return this.m_rgChildren[this.m_iLastActiveChildIndex];
			} else {
				return null;
			}
		}
	}
	GetActiveChildIndex() {
		if (this.m_ActiveChild) {
			if (
				this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
				this.m_rgChildren[this.m_iLastActiveChildIndex] == this.m_ActiveChild
			) {
				return this.m_iLastActiveChildIndex;
			}
			this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
				this.m_ActiveChild,
			);
		}
		return this.m_iLastActiveChildIndex;
	}
	EnsureChildrenSorted(e = false) {
		if (!this.m_bChildrenSorted || !!e) {
			this.m_rgChildren.sort((e, t) => {
				const n = e.m_element;
				const r = t.m_element;
				if (!n) {
					if (r) {
						return 1;
					} else {
						return 0;
					}
				}
				if (!r) {
					return -1;
				}
				const i = n.compareDocumentPosition(r);
				if (i & Node.DOCUMENT_POSITION_PRECEDING) {
					return 1;
				} else if (i & Node.DOCUMENT_POSITION_FOLLOWING) {
					return -1;
				} else {
					return 0;
				}
			});
			if (this.m_ActiveChild) {
				this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
					this.m_ActiveChild,
				);
			}
			this.m_bChildrenSorted = true;
		}
	}
	GetLastFocusElement() {
		const e = this.GetActiveChild();
		if (e) {
			return e.GetLastFocusElement();
		} else {
			return this.m_element;
		}
	}
	OnDOMFocus(e) {
		if (!this.m_bFocused) {
			if (this.GetFocusable() == "children") {
				const e = this.FindFocusableDescendant();
				if (e && e !== this) {
					b(
						"Browser gave node focus but we are marked focusableIfNoChildren, transfering focus to descendant.",
						this.m_element,
						e.m_element,
					);
					this.m_Tree.TransferFocus(m.D$.BROWSER, e);
					return;
				}
			}
			this.m_Tree.TransferFocus(m.D$.BROWSER, this);
		}
	}
	OnDOMBlur(e) {
		if (this.m_bFocused && this.m_element?.ownerDocument.hasFocus()) {
			this.m_Tree.TransferFocus(m.D$.BROWSER, null);
		}
	}
	UpdateParentActiveChild() {
		if (this.m_Parent) {
			this.m_Parent.SetActiveChild(this);
			this.m_Parent.UpdateParentActiveChild();
		}
	}
	GetFocusable() {
		const {
			focusable: e,
			focusableIfNoChildren: t,
			childFocusDisabled: n,
			fnCanTakeFocus: r,
		} = this.m_Properties;
		if (this.m_bMounted) {
			if (r && !r(this)) {
				return "none";
			} else if (e || (t && (n || this.m_rgChildren.length == 0))) {
				return "self";
			} else if (!n && this.m_rgChildren.length) {
				return "children";
			} else {
				return "none";
			}
		} else {
			return "none";
		}
	}
	BTakeFocus(e, t) {
		const n = this.FindFocusableNode(t);
		return this.InternalFocusDescendant(n, e, t);
	}
	FindFocusableNode(e, t) {
		switch (this.GetFocusable()) {
			case "none":
				return null;
			case "self":
				return this;
			case "children":
				return this.FindFocusableDescendant(e, t);
		}
	}
	BChildTakeFocus(e, t) {
		const n = this.FindFocusableDescendant(t);
		return this.InternalFocusDescendant(n, e, t);
	}
	BFocusFirstChild(e) {
		const t = this.FindNextFocusableChildInDirection(
			-1,
			$C.FORWARD,
			i.pR.INVALID,
		);
		return this.InternalFocusDescendant(t, e);
	}
	BFocusLastChild(e) {
		const t = this.FindNextFocusableChildInDirection(
			this.m_rgChildren.length,
			$C.BACKWARD,
			i.pR.INVALID,
		);
		return this.InternalFocusDescendant(t, e);
	}
	FindFocusableDescendant(e, t) {
		const n = (0, d.G4)(e);
		const { focusableIfNoChildren: r, childFocusDisabled: i } =
			this.m_Properties ?? {};
		if (i) {
			return null;
		}
		if (this.m_rgChildren.length) {
			this.EnsureChildrenSorted();
			const { navEntryPreferPosition: i, resetNavOnEntry: o } =
				this.m_Properties ?? {};
			let a;
			let c = this.GetActiveChildIndex();
			if (o && e !== undefined) {
				c = -1;
			}
			if (!this.IsValidChildIndex(c)) {
				const e = this.GetLayout();
				c =
					c >= this.m_rgChildren.length ||
					e == xj.ROW_REVERSE ||
					e == xj.COLUMN_REVERSE ||
					i == iU.LAST
						? this.m_rgChildren.length - 1
						: 0;
			}
			if ((i == iU.MAINTAIN_X || i == iU.MAINTAIN_Y || t) && n) {
				let r;
				let o;
				if (i == iU.MAINTAIN_X) {
					r = "x";
				} else if (i == iU.MAINTAIN_Y) {
					r = "y";
				}
				if (r == s.xr[n]) {
					o =
						this.m_Tree.GetLastFocusedMovementRect(s.xr[n]) ??
						this.m_Tree.GetLastFocusedNode()?.GetBoundingRect();
				}
				b(
					`Taking focus while preserving ${i && iU[i]} preserved: ${r} movement: ${n}, node:`,
					o || t,
				);
				const c = this.ComputeRelativeDirection(e, xj.GRID);
				if (o || t) {
					const i = c == $C.BACKWARD ? this.m_rgChildren.length - 1 : 0;
					a = this.FindClosestChildInNextAxiallyAlignedSet(
						r || s.xr[n],
						c,
						e,
						o || t,
						i,
						this.m_rgChildren[i].GetBoundingRect(),
					);
				} else if (r != s.xr[n]) {
					const t = c == $C.BACKWARD ? this.m_rgChildren.length : -1;
					a = this.FindNextFocusableChildInDirection(t, c, e);
				}
			} else if (i == iU.PREFERRED_CHILD) {
				for (const t of this.m_rgChildren) {
					a = t.BWantsPreferredFocus() ? t.FindFocusableNode(e) : undefined;
					if (a) {
						return a;
					}
				}
			} else if (i == iU.LAST) {
				a = this.FindNextFocusableChildInDirection(c + 1, $C.BACKWARD, e);
			}
			a ||= this.FindNextFocusableChildInDirection(c - 1, $C.FORWARD, e);
			a ||= this.FindNextFocusableChildInDirection(c, $C.BACKWARD, e);
			return a || (r ? this : null);
		}
		return null;
	}
	BVisibleChildTakeFocus(e) {
		const t = this.Element?.ownerDocument?.defaultView ?? window;
		const n = p(this, {
			top: 0,
			left: 0,
			right: t.innerWidth,
			bottom: t.innerHeight,
		});
		b(
			`Focusing visible child, best child match is ${n?.child?.Element?.className} - ${JSON.stringify(n?.visibility)}`,
		);
		return !!n && n.child.BTakeFocus(e);
	}
	GetLayout() {
		if (this.m_Properties?.layout) {
			return this.m_Properties.layout;
		}
		if (this.m_rgChildren.length < 2) {
			return xj.NONE;
		}
		return (0, d.ko)(this.m_element);
	}
	OnNavigationEvent(e) {
		const t = e.detail.button;
		if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? false)) {
			return true;
		}
		const {
			onMoveUp: n,
			onMoveRight: r,
			onMoveDown: s,
			onMoveLeft: o,
		} = this.m_Properties ?? {};
		let a = false;
		switch (t) {
			case i.pR.DIR_UP:
				if (n) {
					a = n(e.detail, this);
				}
				break;
			case i.pR.DIR_RIGHT:
				if (r) {
					a = r(e.detail, this);
				}
				break;
			case i.pR.DIR_DOWN:
				if (s) {
					a = s(e.detail, this);
				}
				break;
			case i.pR.DIR_LEFT:
				if (o) {
					a = o(e.detail, this);
				}
		}
		return a;
	}
	InternalFocusDescendant(e, t, n) {
		return !!e && (this.m_Tree.TransferFocus(t, e, (0, d.G4)(n)), true);
	}
	BTryInternalNavigation(e, t) {
		const n = this.GetLayout();
		let r;
		let s = this.ComputeRelativeDirection(e, n);
		b(
			`Handling navigation event ${i.pR[e]} - ${xj[n]} - ${$C[s]}`,
			this.m_element,
		);
		if (s == $C.INVALID) {
			return false;
		}
		if (this.m_Properties?.focusable && this.m_bFocused) {
			b("Skipping navigation within focused element");
			return false;
		}
		this.EnsureChildrenSorted(true);
		if (n == xj.GRID) {
			r = this.FindNextFocusableChildInGrid(this.GetActiveChildIndex(), s, e);
		} else {
			let t = this.GetActiveChildIndex();
			if (!this.IsValidChildIndex(t)) {
				t = s == $C.FORWARD ? -1 : this.m_rgChildren.length;
			}
			r = this.FindNextFocusableChildInDirection(t, s, e);
		}
		if (r) {
			const n = (0, d.G4)(e);
			if (this.GetScrollIntoViewType() == Yo.NoTransformSparseContent) {
				const e = r.Element?.ownerDocument.defaultView;
				if (e) {
					const i =
						(n == "y" ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33);
					const s = (0, w.QE)(r.Element);
					if (
						(s.top > e.innerHeight && s.bottom > e.innerHeight + i) ||
						(s.bottom < 0 && s.top < -i) ||
						(s.left > e.innerWidth && s.right > e.innerWidth + i) ||
						(s.right < 0 && s.left < -i)
					) {
						b(`Element too far away, scrolling ${i} on ${n} axis `);
						(0, w.Pl)(r.Element, r.Element, "smooth", n, i);
						return true;
					}
				}
			}
			this.m_Tree.TransferFocus(m.D$.GAMEPAD, r, n);
			return true;
		}
		return false;
	}
	GetScrollIntoViewType() {
		if (this.m_Properties?.scrollIntoViewType) {
			return this.m_Properties.scrollIntoViewType;
		} else if (this.m_Parent) {
			return this.m_Parent.GetScrollIntoViewType();
		} else {
			return Yo.Standard;
		}
	}
	GetRelativeDirection(e) {
		return this.ComputeRelativeDirection(e, this.GetLayout());
	}
	ComputeRelativeDirection(e, t) {
		let n = t == xj.ROW_REVERSE || t == xj.COLUMN_REVERSE;
		switch (t) {
			case xj.ROW:
			case xj.ROW_REVERSE:
				switch (e) {
					case i.pR.DIR_LEFT:
						if (n) {
							return $C.FORWARD;
						} else {
							return $C.BACKWARD;
						}
					case i.pR.DIR_RIGHT:
						if (n) {
							return $C.BACKWARD;
						} else {
							return $C.FORWARD;
						}
					default:
						return $C.INVALID;
				}
			case xj.COLUMN:
			case xj.COLUMN_REVERSE:
				switch (e) {
					case i.pR.DIR_UP:
						if (n) {
							return $C.FORWARD;
						} else {
							return $C.BACKWARD;
						}
					case i.pR.DIR_DOWN:
						if (n) {
							return $C.BACKWARD;
						} else {
							return $C.FORWARD;
						}
					default:
						return $C.INVALID;
				}
			case xj.GRID:
				switch (e) {
					case i.pR.DIR_LEFT:
					case i.pR.DIR_UP:
						if (n) {
							return $C.FORWARD;
						} else {
							return $C.BACKWARD;
						}
					case i.pR.DIR_RIGHT:
					case i.pR.DIR_DOWN:
						if (n) {
							return $C.BACKWARD;
						} else {
							return $C.FORWARD;
						}
					default:
						return $C.INVALID;
				}
			default:
				return $C.INVALID;
		}
	}
	AdvanceIndex(e, t) {
		return e + (t == $C.FORWARD ? 1 : -1);
	}
	FindNextFocusableChildInDirection(e, t, n) {
		let r = t == $C.FORWARD ? 1 : -1;
		for (let t = e + r; t >= 0 && t < this.m_rgChildren.length; t += r) {
			const e = this.m_rgChildren[t].FindFocusableNode(n);
			if (e) {
				return e;
			}
		}
		return null;
	}
	ScanChildren(e, t, n) {
		let r = t == $C.FORWARD ? 1 : -1;
		for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += r) {
			if (n(this.m_rgChildren[t], t)) {
				return t;
			}
		}
		return -1;
	}
	FindNextFocusableChildInGrid(e, t, n) {
		const r = n == i.pR.DIR_UP || n == i.pR.DIR_DOWN;
		const s = this.GetLastFocusElement();
		if (!s || s == this.m_element) {
			(0, o.w)(
				false,
				"No active child for grid navigation",
				this.m_iLastActiveChildIndex,
				this.m_rgChildren.length,
				s,
			);
			return this.FindFocusableDescendant(n);
		}
		const a = this.GetActiveDescendant().GetBoundingRect();
		if (n == i.pR.DIR_UP || n == i.pR.DIR_DOWN) {
			const e =
				this.m_Tree.GetLastFocusedMovementRect("x") ??
				this.m_Tree.GetLastFocusedNode()?.GetBoundingRect();
			if (e) {
				a.x = e.x;
				a.width = e.width;
			}
		}
		if (r) {
			let r = e;
			while (r != -1) {
				const e = this.ScanChildren(
					this.AdvanceIndex(r, t),
					t,
					(e) => !(0, d.UR)("y", a, e.GetBoundingRect()),
				);
				if (e != -1) {
					const r = this.m_rgChildren[e].GetBoundingRect();
					const i = this.FindClosestChildInNextAxiallyAlignedSet(
						"x",
						t,
						n,
						a,
						e,
						r,
					);
					if (i) {
						return i;
					}
				}
				r = e;
			}
		} else {
			let r = t == $C.FORWARD ? 1 : -1;
			for (
				let i = this.AdvanceIndex(e, t);
				i >= 0 && i < this.m_rgChildren.length;
				i += r
			) {
				const e = this.m_rgChildren[i];
				if (!(0, d.UR)("y", a, e.GetBoundingRect())) {
					return null;
				}
				let t = e.FindFocusableNode(n);
				if (t) {
					return t;
				}
			}
		}
		return null;
	}
	FindClosestChildInNextAxiallyAlignedSet(e, t, n, r, i, o) {
		if (!i || i < 0) {
			i = 0;
		}
		let a = [];
		if (!r) {
			return null;
		}
		const c = (0, d.xb)(r);
		this.ScanChildren(i, t, (t) => {
			const n = t.GetBoundingRect();
			return (
				!!n &&
				((!!o && !(0, d.UR)(s.xr[e], o, n)) ||
					(a.push({
						child: t,
						overlap: (0, d.ix)(e, r, n),
						dist: (0, d._V)(e, c, n),
					}),
					false))
			);
		});
		if (t == $C.BACKWARD) {
			a.reverse();
		}
		a.sort((e, t) => {
			const n = t.overlap - e.overlap;
			if (n != 0) {
				return n;
			} else {
				return e.dist - t.dist;
			}
		});
		for (const { child: e } of a) {
			const t = e.FindFocusableNode(n, r);
			if (t) {
				return t;
			}
		}
		return null;
	}
	GetChildren() {
		this.EnsureChildrenSorted();
		return [this.m_rgChildren, this.m_iLastActiveChildIndex];
	}
	SetActiveChild(e) {
		if (e instanceof Bp) {
			this.EnsureChildrenSorted();
			this.m_ActiveChild = e;
			this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e);
		} else {
			if (this.IsValidChildIndex(e)) {
				this.m_ActiveChild = this.m_rgChildren[e];
			}
			this.m_iLastActiveChildIndex = e;
		}
	}
	GetDepth() {
		return this.m_nDepth;
	}
	SetRetainFocusParent(e) {
		this.m_RetainFocusParent = e;
		if (!this.m_Properties?.retainFocus) {
			this.PropagateRetainFocusParentToChildren(e);
		}
	}
	PropagateRetainFocusParentToChildren(e) {
		for (let t = 0; t < this.m_rgChildren.length; t++) {
			this.m_rgChildren[t].SetRetainFocusParent(e);
		}
	}
	OnFocusedDecendantRemoved(e) {
		this.m_Tree.DeferredFocus.RequestFocus(this, {
			bFocusDescendant: true,
		});
	}
	SetDOMFocusAndScroll(e, t) {
		this.UpdateParentActiveChild();
		if (this.m_Tree.BIsActiveFocus()) {
			(0, o.w)(
				!this.m_Tree.BUseVirtualFocus(),
				"Virtual focus tree should not have browser focus",
			);
			this.m_element?.focus({
				preventScroll: true,
			});
		} else if (!this.m_Tree.BUseVirtualFocus()) {
			b(
				`Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
			);
		}
		(0, w.ZQ)(this, t);
		this.m_Tree.OnChildActivated(e);
	}
}
(0, r.Cg)([a.o], Bp.prototype, "OnDOMFocus", null);
(0, r.Cg)([a.o], Bp.prototype, "OnDOMBlur", null);
(0, r.Cg)([a.o], Bp.prototype, "OnNavigationEvent", null);
