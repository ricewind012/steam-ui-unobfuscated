require("./69740.js");
var n = require(/*webcrack:missing*/ "./63696.js");
export const Wn = 940;
export function a4(e = Wn) {
	return (
		(function () {
			const [e, t] = (0, n.useState)(window.innerWidth);
			(0, n.useEffect)(() => {
				const e = () => {
					t(window.innerWidth);
				};
				window.addEventListener("resize", e);
				return () => window.removeEventListener("resize", e);
			}, []);
			return e;
		})() >= e
	);
}
