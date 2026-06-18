import { Localize } from "../../actual_src/utils/localization.js";
import o from "./8340.js";
import a from "./35488.js";
import n from "./63696.js";
import i from "./69164.js";
export function I(e) {
	return (
		<i.Z className={o.NoNetwork} focusable={e.focusable}>
			<div className={o.Message}>
				{(0, Localize)("#NetworkConnectionRequiredToLoad")}
			</div>
			<a.Globe className={o.Globe} />
		</i.Z>
	);
}
