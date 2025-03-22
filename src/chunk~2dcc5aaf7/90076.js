var n = require(/*webcrack:missing*/ "./61416.js");
var i = require("./41240.js");
var a = require("./4855.js");
export function j4(e) {
	const t = (0, a.eG)();
	return (0, n.I)(
		(function (e, t) {
			return o(e, t, "include_screenshots", "screenshots");
		})(t, e),
	);
}
function o(e, t, r, n) {
	return {
		queryKey: c(t, r),
		queryFn: async () => (await A(e, t, r))[n] || null,
		staleTime: 21600000,
		enabled: !!t,
	};
}
function l(e, t, r, n, i) {
	e.setQueryData(c(t, n), r[i]);
}
function c(e, t) {
	return ["StoreItem", e && (0, i.ER)(e), t];
}
export function vB(e, t, r) {
	const n = (0, i.Jz)(t);
	if (n) {
		(function (e, t, r) {
			e.setQueryData(c(t, "default_info"), d(r));
		})(e, n, t);
		if (r.include_assets) {
			(function (e, t, r) {
				l(e, t, r, "include_assets", "assets");
			})(e, n, t);
		}
		if (r.include_screenshots) {
			(function (e, t, r) {
				l(e, t, r, "include_screenshots", "screenshots");
			})(e, n, t);
		}
		if (r.include_assets_without_overrides) {
			(function (e, t, r) {
				l(
					e,
					t,
					r,
					"include_assets_without_overrides",
					"assets_without_overrides",
				);
			})(e, n, t);
		}
		if (r.include_reviews) {
			(function (e, t, r) {
				l(e, t, r, "include_reviews", "reviews");
			})(e, n, t);
		}
		if (r.include_release) {
			(function (e, t, r) {
				l(e, t, r, "include_release", "release");
			})(e, n, t);
		}
		if (r.include_tag_count && r.include_tag_count > 0) {
			(function (e, t, r) {
				l(e, t, r, "top_tags", "tags");
			})(e, n, t);
		}
		if (r.include_platforms) {
			(function (e, t, r) {
				l(e, t, r, "include_platforms", "platforms");
			})(e, n, t);
		}
		if (r.apply_user_filters) {
			(function (e, t, r) {
				l(e, t, r, "apply_user_filters", "user_filter_failure");
			})(e, n, t);
		}
		if (r.include_included_items && r.included_item_data_request) {
			t.included_items?.included_apps?.forEach((t) =>
				vB(e, t, r.included_item_data_request),
			);
			t.included_items?.included_packages?.forEach((t) =>
				vB(e, t, r.included_item_data_request),
			);
		}
	}
}
const u = [
	"assets",
	"tagids",
	"tags",
	"basic_info",
	"reviews",
	"categories",
	"game_rating",
	"purchase_options",
	"accessories",
	"screenshots",
	"trailers",
	"supported_languages",
	"assets_without_overrides",
	"user_filter_failure",
	"links",
	"platforms",
	"release",
];
function d(e) {
	const t = {
		...e,
	};
	for (const e of u) {
		delete t[e];
	}
	return t;
}
async function A(e, t, r) {
	return await e.load(`${(0, i.ER)(t)}|${r}`);
}
