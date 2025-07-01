import { SubscribableValue } from "../../actual_src/utils/callbackutils";
import * as i from "./64880.js";
import { rV, Bn, hc } from "./85606.js";
import * as s from "./12176.js";
import * as o from "./5640.js";
import * as l from "./96593.js";
import * as c from "./5859.js";
import * as m from "./34792.js";
export const U = new (class {
	m_cm;
	m_strSearchText = SubscribableValue("");
	async Init(e) {
		this.m_cm = e;
	}
	GetSearchText() {
		return this.m_strSearchText;
	}
	SetSearchText(e) {
		this.m_strSearchText.Set(e);
	}
	ClearSearchText() {
		this.m_strSearchText.Set("");
	}
	async FetchSearchSuggestions(e, t) {
		if (e.length < 2) {
			return {
				total: 0,
				items: [],
			};
		}
		{
			let r = s.w.Init(i.pI);
			rV(r);
			Bn(r, {
				include_basic_info: true,
				include_assets: true,
				include_platforms: true,
			});
			let n = {
				type_filters: {
					include_apps: true,
					include_software: true,
				},
				content_descriptors_excluded: m.rV.excludedStoreContentDescriptors,
			};
			hc(r, n);
			r.Body().set_query_name("SearchStore.FetchSearchSuggestions");
			r.Body().set_search_term(e);
			r.Body().set_max_results(t);
			r.Body().set_use_spellcheck(true);
			r.Body().set_search_tags(true);
			r.Body().set_search_creators(false);
			let o = await i.Fs.SearchSuggestions(this.m_cm.GetServiceTransport(), r);
			if (o.GetEResult() == 1) {
				return {
					total: o.Body().metadata().total_matching_records(),
					items: c.A.Get()
						.ReadResults(
							o.Body().store_items(),
							r.Body().data_request().toObject(),
						)
						.filter((e) => this.BIsSuggestionVisible(e.GetAppID())),
				};
			} else {
				return {
					total: 0,
					items: [],
				};
			}
		}
	}
	BIsSuggestionVisible(e) {
		return (
			(!o.jR.BIsFeatureBlocked(1) ||
				l.tw.GetAppOverviewByAppID(e)?.visible_in_game_list) &&
			!o.jR.BIsAppBlocked(e)
		);
	}
})();
window.searchstore = U;
