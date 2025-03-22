export var fz;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./36974.js");
var s = a;
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./23038.js");
var c = require(/*webcrack:missing*/ "./58254.js");
var m = require(/*webcrack:missing*/ "./69164.js");
export function FF(e) {
	const {
		childrenKey: t,
		childrenClasses: r,
		children: n,
		directionClass: a,
		animate: c = true,
	} = e;
	const m = (0, o.A)(s.TransitionGroup, a);
	return i.createElement(
		l.A,
		{
			className: m,
			appear: false,
			enter: c,
			exit: c,
		},
		i.createElement(
			rO,
			{
				key: t,
				childrenClasses: r,
			},
			n,
		),
	);
}
export function rO(e) {
	const { sizeClass: t, children: r, childrenClasses: n, navKey: a, ...l } = e;
	const [u, d, A, p] = (function () {
		let e = i.useRef(null);
		let t = i.useRef();
		i.useLayoutEffect(() => {
			let r = e.current;
			if (!r || t.current) {
				return;
			}
			t.current = {
				element: r,
				activeProps: new Set(),
				bExiting: false,
				fnDone: null,
			};
			let n = t.current;
			let i = (e) => {
				if (e.target == r) {
					n.activeProps.add(e.propertyName);
				}
			};
			r.addEventListener("transitionrun", i, false);
			let a = (e) => {
				if (e.target == r) {
					n.activeProps.delete(e.propertyName);
					if (n.fnDone && n.activeProps.size == 0 && n.bExiting) {
						n.fnDone();
					}
				}
			};
			r.addEventListener("transitionend", a, false);
			r.addEventListener("transitioncancel", a, false);
		}, []);
		let r = i.useCallback(
			(e) => {
				if (t.current) {
					t.current.fnDone = e;
				} else {
					e();
				}
			},
			[t],
		);
		let n = i.useCallback(() => {
			if (t.current) {
				t.current.bExiting = false;
			}
		}, [t]);
		let a = i.useCallback(() => {
			if (t.current) {
				t.current.bExiting = true;
			}
		}, [t]);
		return [e, r, n, a];
	})();
	const g = i.useRef(true);
	const h = i.useCallback(() => g.current, [g]);
	const C = i.useCallback(() => {
		g.current = true;
		A();
	}, [A]);
	const _ = i.useCallback(() => {
		g.current = false;
		p();
	}, [p]);
	const f = e.childrenClasses;
	const b = {
		enter: f.enterStart,
		enterActive: f.enterEnd,
		exit: f.exitStart,
		exitActive: f.exitEnd,
	};
	if (u.current && !u.current.ownerDocument.defaultView) {
		return null;
	} else {
		return i.createElement(
			c.A,
			{
				nodeRef: u,
				classNames: b,
				in: true,
				timeout: 10000,
				addEndListener: d,
				onEntering: C,
				onExiting: _,
				...l,
			},
			i.createElement(
				"div",
				{
					ref: u,
					className: (0, o.A)(s.ContentWrapper, t, f.base),
				},
				i.createElement(
					m.Z,
					{
						className: t,
						fnCanTakeFocus: h,
						navKey: a,
					},
					e.children,
				),
			),
		);
	}
}
export function Qh(e, t) {
	return {
		base: t,
		enterStart: e.Enter,
		enterEnd: e.EnterActive,
		exitStart: e.Exit,
		exitEnd: e.ExitActive,
	};
}
export function K$(e, t) {
	if (t == fz.Left) {
		return e.Left;
	} else if (t == fz.Right) {
		return e.Right;
	} else if (t == fz.Up) {
		return e.Up;
	} else if (t == fz.Down) {
		return e.Down;
	} else {
		return "";
	}
}
export function ls(e, t, r, a) {
	let s = i.useRef(null);
	let o = i.useRef(fz.None);
	if (s.current == t) {
		return o.current;
	}
	let l = r(e, t);
	let c = l;
	if (s.current != null) {
		c = r(e, s.current);
	}
	let m = fz.None;
	if (c < l) {
		m = a[1];
	} else if (c > l) {
		m = a[0];
	}
	s.current = t;
	o.current = m;
	return m;
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Left = 1)] = "Left";
	e[(e.Right = 2)] = "Right";
	e[(e.Up = 3)] = "Up";
	e[(e.Down = 4)] = "Down";
})((fz ||= {}));
