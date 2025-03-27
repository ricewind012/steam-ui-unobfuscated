import "./69740.js";
import { useState, useEffect } from "./63696.js";
export const Wn = 940;
export function a4(e = Wn) {
	return (
		(() => {
			const [e, setE] = useState(window.innerWidth);
			useEffect(() => {
				const e = () => {
					setE(window.innerWidth);
				};
				window.addEventListener("resize", e);
				return () => window.removeEventListener("resize", e);
			}, []);
			return e;
		})() >= e
	);
}
