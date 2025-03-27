import i from "./63696.js";
import a, { j$, UT } from "./16117.js";
import s from "./83610.js";
import o, { Y2 } from "./72476.js";
import l from "./44184.js";
export let V2;
function c(e) {
	return {
		sizeStr: e == V2.full ? l.sizeFull : l.sizeThumb,
		alignStr: e == V2.full ? "" : e == V2.left ? l.floatLeft : l.floatRight,
	};
}
export function gH(e) {
	if (Y2()) {
		return null;
	}
	let t = j$(e.args);
	if (t) {
		let e = t.split(";");
		if (e.length == 2) {
			let [t] = e;
			let r = e[1].toLocaleLowerCase();
			const { sizeStr, alignStr } = c(r);
			return (
				<s.A
					videoID={t}
					classNameAlign={alignStr}
					classNameSize={sizeStr}
					bShowVideoImmediately
				/>
			);
		}
	}
	return <></>;
}
export function Eo(e) {
	if (Y2() || o.TS.COUNTRY.toLocaleUpperCase() == "CN") {
		return UT(e);
	}
	const t = j$(e.args, "youtubeid");
	const r = j$(e.args, "size");
	const n = j$(e.args, "seconds");
	const { sizeStr, alignStr } = c(r);
	return (
		<s.A
			videoID={t}
			nStartSeconds={n ? Number.parseInt(n) : undefined}
			classNameAlign={alignStr}
			classNameSize={sizeStr}
			bShowVideoImmediately
		/>
	);
}
((e) => {
	e.left = "leftthumb";
	e.right = "rightthumb";
	e.full = "full";
	e.summary = "summary";
})((V2 ||= {}));
