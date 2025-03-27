import {
	LocalizeReact,
	Localize,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./23379.js";
import s, { PA } from "./41230.js";
import l from "./91486.js";
import c from "./52470.js";
import m from "./87935.js";
import { t7 } from "./82594.js";
import d from "./5859.js";
import A from "./85965.js";
const a = i;
export const P = PA((e) => {
	let { overview, details } = e;
	const [i] = t7(overview.appid, d.A.k_DataRequest_Assets);
	if (!details.unTimedTrialSecondsAllowed) {
		return null;
	}
	if (details.unTimedTrialSecondsAllowed > details.unTimedTrialSecondsPlayed) {
		return null;
	}
	if (!i) {
		return null;
	}
	let s;
	if (details.unMasterSubAppID) {
		let e = `${m.B7.GetStoreURL()}app/${details.unMasterSubAppID}`;
		let i = (
			<a className={a.MasterSubLink} href={e}>
				{details.strMasterSubAppName}
			</a>
		);
		s = LocalizeReact(
			"#TimedTrial_SpotlightExp_DescMasterSub",
			overview.display_name,
			i,
		);
	} else {
		s = LocalizeReact("#TimedTrial_SpotlightExp_Desc", overview.display_name);
	}
	const p = [i.GetAssets().GetHeaderURL(), A.A];
	return (
		<div className={a.TimedTrialBannerWrapper}>
			<div className={a.TimedTrialBanner}>
				<div className={a.LeftColumn}>
					<l.z
						className={a.HeaderArt}
						eAssetType={3}
						appid={overview.appid}
						rgSources={p}
					/>
				</div>
				<div className={a.RightColumn}>
					<div className={a.Header}>
						{(0, Localize)("#TimedTrial_ContinuePlaying")}
					</div>
					<div className={a.Description}>{s}</div>
					<c.aX
						className={a.StoreButton}
						label={(0, Localize)("#Demo_VisitStorePage")}
						link="StoreAppPage"
						appid={overview.appid}
					/>
				</div>
			</div>
		</div>
	);
});
