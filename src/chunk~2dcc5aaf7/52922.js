var n = require(/*webcrack:missing*/ "./63696.js");
require(/*webcrack:missing*/ "./11131.js");
export function E(e, t, r, i) {
	n.useEffect(() => {
		const n = (n) => {
			if (n.key === e) {
				t(n);
				if (r) {
					n.preventDefault();
				}
				if (i) {
					n.stopPropagation();
				}
			}
		};
		document.addEventListener("keydown", n);
		return () => document.removeEventListener("keydown", n);
	}, [e, t, r, i]);
}
