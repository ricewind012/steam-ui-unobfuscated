import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./35488.js";
import a from "./98995.js";
import o from "./93452.js";
const l = o;
export function S(e) {
	const { deferred: t, label: r } = e;
	if (t) {
		return (
			<span className={l.DeferredSettingLabel}>
				<a.he
					toolTipContent={Localize("#Settings_Deferred_ToolTip")}
					direction="top"
				>
					<i.ExclamationPoint className={l.Icon} />
				</a.he>
				{r}
			</span>
		);
	} else {
		return <>{r}</>;
	}
}
