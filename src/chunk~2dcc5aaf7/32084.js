var n = require(/*webcrack:missing*/ "./63696.js");
export function j(e, t) {
	return n.useCallback(
		(r) => {
			let n = e.current;
			if (!n || !r) {
				return;
			}
			let i = r.getBoundingClientRect().top + n.scrollTop - parseInt(t);
			n.scrollTo({
				top: i,
				behavior: "smooth",
			});
		},
		[e, t],
	);
}
