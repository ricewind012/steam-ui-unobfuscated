import n from "./34792.js";
import { fm } from "./89193.js";
import a from "./63696.js";
import s from "./10593.js";
export function q(e) {
	let { children } = e;
	let r = l();
	let n = a.useMemo(
		() => ({
			content_descriptors_excluded: r,
		}),
		[r],
	);
	return <s.E2 defaultOptions={n}>{children}</s.E2>;
}
export function l() {
	const [e, setE] = a.useState([]);
	a.useEffect(() => {
		let e = fm(() => {
			let e =
				n.rV.storePreferences.content_descriptor_preferences.content_descriptors_to_exclude.map(
					(e) => e.content_descriptorid,
				);
			e.sort((e, t) => e - t);
			setE((t) => {
				let r = e.length != t.length;
				for (let n = 0; n < e.length && !r; n++) {
					if (e[n] != t[n]) {
						r = true;
					}
				}
				if (r) {
					return e;
				} else {
					return t;
				}
			});
		});
		return () => e();
	}, []);
	return e;
}
