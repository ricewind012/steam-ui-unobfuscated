import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./1965.js";
import a from "./64608.js";
import o from "./79390.js";
import { Qt } from "./18057.js";
const l = o;
export const t = () => {
	const e = Qt("steam://open/goonline");
	return (
		<i.n className={l.OfflineSection} availableOffline>
			<i.n.Body className={l.OfflineSectionBody}>
				{(0, Localize)("#AppDetails_InOfflineMode")}
				<a.jn className={l.OfflineButton} onClick={e}>
					{(0, Localize)("#AppDetails_GoOnline")}
				</a.jn>
			</i.n.Body>
		</i.n>
	);
};
