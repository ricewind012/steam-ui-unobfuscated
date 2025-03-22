var n = require("./34792.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./10593.js");
export function q(e) {
	let { children: t } = e;
	let r = l();
	let n = a.useMemo(
		() => ({
			content_descriptors_excluded: r,
		}),
		[r],
	);
	return a.createElement(
		s.E2,
		{
			defaultOptions: n,
		},
		t,
	);
}
export function l() {
	const [e, t] = a.useState([]);
	a.useEffect(() => {
		let e = (0, i.fm)(() => {
			let e =
				n.rV.storePreferences.content_descriptor_preferences.content_descriptors_to_exclude.map(
					(e) => e.content_descriptorid,
				);
			e.sort((e, t) => e - t);
			t((t) => {
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
