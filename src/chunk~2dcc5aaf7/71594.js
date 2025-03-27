import n from "./63696.js";
import i from "./78325.js";
export function R(e) {
	const {
		visible = true,
		className,
		keepMounted = false,
		expandDirection = "height",
		msAnimationDuration = 250,
		children,
	} = e;
	const { style, active, refDiv } = ((e, t = "height", r = 250) => {
		const ARef = n.useRef();
		const SRef = n.useRef(true);
		const [o, setO] = n.useState("idle");
		const [c, setC] = n.useState({});
		n.useLayoutEffect(() => {
			if (SRef.current) {
				SRef.current = false;
			} else {
				setO("start");
			}
		}, [e]);
		n.useLayoutEffect(() => {
			const a_current = ARef.current;
			const n = t == "height" ? "scrollHeight" : "scrollWidth";
			const s = () => {
				i.unstable_batchedUpdates(() => {
					setC({});
					setO("idle");
				});
			};
			if (o == "start") {
				const a_current_n = a_current[n];
				if (a_current_n == 0) {
					s();
				} else {
					setC((r) => ({
						[t]: e ? "0px" : `${a_current_n}px`,
						...r,
						overflow: "hidden",
					}));
					setO("active");
				}
			} else if (o == "active") {
				a_current.scrollTop;
				const a_current_n = a_current[n];
				setC({
					overflow: "hidden",
					[t]: e ? `${a_current_n}px` : "0px",
				});
				a_current.addEventListener("transitionend", s);
				return () => {
					a_current.removeEventListener("transitionend", s);
				};
			}
		}, [o, e]);
		const u = {
			...c,
			transition: `${t} ${r}ms`,
		};
		return {
			style: u,
			active: o != "idle",
			refDiv: ARef,
		};
	})(visible, expandDirection, msAnimationDuration);
	if (visible || active || active || keepMounted) {
		return (
			<div className={className} ref={refDiv} style={style}>
				{children}
			</div>
		);
	} else {
		return null;
	}
}
