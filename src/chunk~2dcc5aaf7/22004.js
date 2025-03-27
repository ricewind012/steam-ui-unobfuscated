import i from "./63696.js";
import a from "./36974.js";
import o, { A } from "./90765.js";
import l from "./23038.js";
import c from "./58254.js";
import m from "./69164.js";
export let fz;
const s = a;
export function FF(e) {
	const {
		childrenKey,
		childrenClasses,
		children,
		directionClass,
		animate = true,
	} = e;
	const m = A(s.TransitionGroup, directionClass);
	return (
		<l.A className={m} appear={false} enter={animate} exit={animate}>
			<RO key={childrenKey} childrenClasses={childrenClasses}>
				{children}
			</RO>
		</l.A>
	);
}
export function RO(e) {
	const { sizeClass, children, childrenClasses, navKey, ...l } = e;
	const [u, d, A, p] = (() => {
		let ERef = i.useRef(null);
		let TRef = i.useRef();
		i.useLayoutEffect(() => {
			let e_current = ERef.current;
			if (!e_current || TRef.current) {
				return;
			}
			TRef.current = {
				element: e_current,
				activeProps: new Set(),
				bExiting: false,
				fnDone: null,
			};
			let t_current = TRef.current;
			let i = (e) => {
				if (e.target == e_current) {
					t_current.activeProps.add(e.propertyName);
				}
			};
			e_current.addEventListener("transitionrun", i, false);
			let a = (e) => {
				if (e.target == e_current) {
					t_current.activeProps.delete(e.propertyName);
					if (
						t_current.fnDone &&
						t_current.activeProps.size == 0 &&
						t_current.bExiting
					) {
						t_current.fnDone();
					}
				}
			};
			e_current.addEventListener("transitionend", a, false);
			e_current.addEventListener("transitioncancel", a, false);
		}, []);
		let r = i.useCallback(
			(e) => {
				if (TRef.current) {
					TRef.current.fnDone = e;
				} else {
					e();
				}
			},
			[TRef],
		);
		let n = i.useCallback(() => {
			if (TRef.current) {
				TRef.current.bExiting = false;
			}
		}, [TRef]);
		let a = i.useCallback(() => {
			if (TRef.current) {
				TRef.current.bExiting = true;
			}
		}, [TRef]);
		return [ERef, r, n, a];
	})();
	const GRef = i.useRef(true);
	const h = i.useCallback(() => GRef.current, [GRef]);
	const C = i.useCallback(() => {
		GRef.current = true;
		A();
	}, [A]);
	const _ = i.useCallback(() => {
		GRef.current = false;
		p();
	}, [p]);
	const e_childrenClasses = e.childrenClasses;
	const b = {
		enter: e_childrenClasses.enterStart,
		enterActive: e_childrenClasses.enterEnd,
		exit: e_childrenClasses.exitStart,
		exitActive: e_childrenClasses.exitEnd,
	};
	if (u.current && !u.current.ownerDocument.defaultView) {
		return null;
	} else {
		return (
			<c.A
				nodeRef={u}
				classNames={b}
				in
				timeout={10000}
				addEndListener={d}
				onEntering={C}
				onExiting={_}
				{...l}
			>
				<div
					ref={u}
					className={A(s.ContentWrapper, sizeClass, e_childrenClasses.base)}
				>
					<m.Z className={sizeClass} fnCanTakeFocus={h} navKey={navKey}>
						{e.children}
					</m.Z>
				</div>
			</c.A>
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
	let SRef = i.useRef(null);
	let ORef = i.useRef(fz.None);
	if (SRef.current == t) {
		return ORef.current;
	}
	let l = r(e, t);
	let c = l;
	if (SRef.current != null) {
		c = r(e, SRef.current);
	}
	let fz_None = fz.None;
	if (c < l) {
		fz_None = a[1];
	} else if (c > l) {
		fz_None = a[0];
	}
	SRef.current = t;
	ORef.current = fz_None;
	return fz_None;
}
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Left = 1)] = "Left";
	e[(e.Right = 2)] = "Right";
	e[(e.Up = 3)] = "Up";
	e[(e.Down = 4)] = "Down";
})((fz ||= {}));
