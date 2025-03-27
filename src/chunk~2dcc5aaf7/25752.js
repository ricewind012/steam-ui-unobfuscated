import n from "./90242.js";
import { aL } from "./92059.js";
import a from "./63696.js";
import "./86455.js";
import { Ps } from "./53807.js";
import o from "./72476.js";
import("../../actual_src/utils/localization.js");
export function q(e) {
	const { className, url, style, children, bSkipForcingStoreLink } = e;
	const u = bSkipForcingStoreLink ? url : Ps(url, o.TS.STORE_BASE_URL);
	const d = aL(u);
	if (d) {
		return (
			<n.Ii
				href={d}
				target={o.TS.IN_CLIENT || "_blank"}
				className={className}
				style={style}
			>
				{children}
			</n.Ii>
		);
	} else {
		return (
			<span style={style} className={className}>
				{children}
			</span>
		);
	}
}
