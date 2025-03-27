import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import a from "./70057.js";
import s from "./6561.js";
export function o(e) {
	const {
		className: t,
		srcs: r,
		lazyLoad: i,
		width: a,
		height: s,
		alt: o,
		crossOrigin: l,
	} = e;
	const [c, m] = n.useState(r.length);
	const [u, d] = n.useState(0);
	n.useEffect(() => {
		if (c != r.length) {
			m(r.length);
			d(0);
		}
	}, [c, r.length]);
	const A = n.useCallback(() => {
		if (e.onImageError) {
			e.onImageError(e.srcs[u]);
		}
		if (u + 1 < e.srcs.length) {
			d(u + 1);
		}
	}, [u, e]);
	if (r.length == 0) {
		return null;
	} else {
		return (
			<img
				className={t}
				src={r[u]}
				crossOrigin={l}
				onError={A}
				loading={i ? "lazy" : undefined}
				width={a}
				height={s}
				alt={o}
			/>
		);
	}
}
export function i(e) {
	const [t, r] = n.useState(false);
	const {
		className: o,
		src: l,
		lazyLoad: c,
		width: m,
		height: u,
		alt: d,
		crossOrigin: A,
	} = e;
	if (t) {
		return (
			<div className={a.ErrorDiv}>
				<p>{Localize("#Image_ErrorTitle", l)}</p>
				<ul>
					<li>{Localize("#Image_Error_msg1")}</li>
					<li>{Localize("#Image_Error_msg2")}</li>
					<li>{Localize("#Image_Error_msg3")}</li>
				</ul>
				<p>{Localize("#Image_Error_suggestion")}</p>
			</div>
		);
	} else {
		return (
			<s.o
				className={o}
				src={l}
				onError={() => r(true)}
				crossOrigin={A}
				loading={c ? "lazy" : undefined}
				width={m}
				height={u}
				alt={d}
			/>
		);
	}
}
