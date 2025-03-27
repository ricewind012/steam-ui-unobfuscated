import n from "./63696.js";
export function j(e, t) {
	return n.useCallback(
		(r) => {
			let e_current = e.current;
			if (!e_current || !r) {
				return;
			}
			let i = r.getBoundingClientRect().top + e_current.scrollTop - parseInt(t);
			e_current.scrollTo({
				top: i,
				behavior: "smooth",
			});
		},
		[e, t],
	);
}
