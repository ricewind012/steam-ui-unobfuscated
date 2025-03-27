import { Localize } from "../../actual_src/utils/localization.js";
import n, { useRef } from "./63696.js";
import { o as o_1 } from "./57931.js";
import { SW } from "./58839.js";
import { G6 } from "./82594.js";
import o from "./98995.js";
import { A as A_1 } from "./90765.js";
import m from "./15612.js";
import u from "./59265.js";
import A, { $W } from "./67784.js";
const d = u;
export function j(e) {
	const { info, className } = e;
	const URef = useRef({
		include_release: true,
	});
	const [p] = G6(info?.id, SW(info?.type), URef.current);
	const g = p?.BHasDemo();
	const h = g || p?.GetAppType() === 1;
	const C = h
		? Localize("#Sale_InstallDemo_ttip", p?.GetName())
		: g
			? Localize("#Sale_CannotInstallDemo_ttip", p?.GetName())
			: Localize("#Loading");
	if (!$W()) {
		if (!h && g && p?.BIsFree()) {
			return <m.h info={info} className={className} />;
		} else {
			return (
				<o.he
					toolTipContent={C}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						if (h) {
							o_1(p?.GetAppType() === 1 ? p.GetAppID() : p.GetDemoAppIDs()[0]);
						}
					}}
					className={A_1(className, d.DemoButton, !h && d.DisabledButton)}
				>
					{h ? Localize("#Sale_InstallDemo") : Localize("#Sale_DemoNotFound")}
				</o.he>
			);
		}
	}
}
