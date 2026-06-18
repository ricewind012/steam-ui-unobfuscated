import { Localize } from "@actual_src/utils/localization.js";

import l from "./47628.js";
import s from "./50376.js";
import { SW } from "./58839.js";
import { CI, Hn, Pr, rf } from "./72476.js";
import { G6 } from "./82594.js";

const c = l;
export function Q(e) {
	const { item: t, strClassName: r, bMinimizePlatforms: l } = e;
	const [d] = G6(t?.id, SW(t?.type), {
		include_platforms: true,
	});
	if (!d) {
		return null;
	}
	const A = d.GetPlatforms();
	if (l) {
		let e = A.windows && (
			<span title={Localize("#Platform_Windows")}>
				<s.Xz0 />
			</span>
		);
		if (Pr() && A.mac) {
			e = (
				<span title={Localize("#Platform_Mac")}>
					<s.kPc />
				</span>
			);
		} else if ((CI() || Hn() || Hn() || rf()) && A.steamos_linux) {
			e = (
				<span title={Localize("#Platform_Linux")}>
					<s.Qte />
				</span>
			);
		}
		if (e) {
			return <span className={A(c.CapsulePlatform, r)}>{e}</span>;
		} else {
			return null;
		}
	}
	return (
		<span className={A(c.CapsulePlatform, r)}>
			{A.windows && (
				<span title={Localize("#Platform_Windows")}>
					<s.Xz0 />
				</span>
			)}
			{A.mac && (
				<span title={Localize("#Platform_Mac")}>
					<s.kPc />
				</span>
			)}
			{A.steamos_linux && (
				<span title={Localize("#Platform_Linux")}>
					<s.Qte />
				</span>
			)}
			{A.vr_support?.vrhmd && (
				<span title={Localize("#Platform_VR")}>
					<s.VR />
				</span>
			)}
		</span>
	);
}
