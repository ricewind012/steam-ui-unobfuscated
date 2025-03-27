import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
const a = "primary";
const s = "featured";
const o = "default_featured";
export let mY;
export function PH(e) {
	switch (e) {
		case a: {
			return mY.k_ePrimary;
		}
		case s: {
			return mY.k_eFeatured;
		}
		case o: {
			return mY.k_eDefaultFeatured;
		}
		default: {
			return mY.k_eGeneral;
		}
	}
}
((e) => {
	e[(e.k_ePrimary = 3)] = "k_ePrimary";
	e[(e.k_eFeatured = 2)] = "k_eFeatured";
	e[(e.k_eDefaultFeatured = 1)] = "k_eDefaultFeatured";
	e[(e.k_eGeneral = 0)] = "k_eGeneral";
})((mY ||= {}));
export class TT {
	constructor() {
		Gn(this);
	}
	accountid;
	steamid;
	hub_popular;
	popular;
	relay_broadcast_id;
	rowversion;
	thumbnail_http_address;
	nAppIDVOD;
	title = undefined;
	viewer_count = undefined;
	whitelist_rank;
	gamedata_subtitle = undefined;
	store_title;
	left_panel;
	right_panel;
	snr;
	broadcast_chat_visibility;
	default_selection_priority = mY.k_eGeneral;
	current_selection_priority = mY.k_eGeneral;
}
Cg([i.sH], TT.prototype, "title", undefined);
Cg([i.sH], TT.prototype, "viewer_count", undefined);
Cg([i.sH], TT.prototype, "gamedata_subtitle", undefined);
Cg([i.sH], TT.prototype, "current_selection_priority", undefined);
