var n = require(/*webcrack:missing*/ "./83957.js");
var i = n;
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./5859.js");
export function G6(e, t, r, n) {
	const l = (0, a.useRef)();
	const c = (0, a.useRef)(undefined);
	const m = (0, s.CH)();
	l.current = e;
	const [u, d] = (0, a.useState)(undefined);
	const {
		include_assets: A,
		include_release: p,
		include_platforms: g,
		include_all_purchase_options: h,
		include_screenshots: C,
		include_trailers: _,
		include_ratings: f,
		include_tag_count: b,
		include_reviews: y,
		include_basic_info: S,
		include_supported_languages: w,
		include_full_description: B,
		include_included_items: v,
		include_assets_without_overrides: I,
		apply_user_filters: E,
		include_links: M,
	} = r;
	(0, a.useEffect)(() => {
		const r = {
			include_assets: A,
			include_release: p,
			include_platforms: g,
			include_all_purchase_options: h,
			include_screenshots: C,
			include_trailers: _,
			include_ratings: f,
			include_tag_count: b,
			include_reviews: y,
			include_basic_info: S,
			include_supported_languages: w,
			include_full_description: B,
			include_included_items: v,
			include_assets_without_overrides: I,
			apply_user_filters: E,
			include_links: M,
		};
		let a = null;
		if (
			!!e &&
			!(e < 0) &&
			!o.A.Get().BHasStoreItem(e, t, r) &&
			(u === undefined || !n || n != c.current)
		) {
			if (n !== c.current) {
				d(undefined);
				c.current = n;
			}
			a = i.CancelToken.source();
			o.A.Get()
				.QueueStoreItemRequest(e, t, r)
				.then((t) => {
					if (!a?.token.reason && l.current === e) {
						d(t == 1);
					}
					m();
				});
		}
		return () => a?.cancel("useStoreItemCache: unmounting");
	}, [e, t, n, u, A, p, g, h, C, _, f, b, y, S, w, B, v, I, E, M, m]);
	if (!e) {
		return [null, 2];
	}
	if (u === false) {
		return [undefined, 2];
	}
	if (o.A.Get().BIsStoreItemMissing(e, t)) {
		return [undefined, 2];
	}
	if (!o.A.Get().BHasStoreItem(e, t, r)) {
		return [undefined, 1];
	}
	const T = o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
	if (T) {
		return [T, 3];
	} else {
		return [null, 2];
	}
}
export function t7(e, t, r) {
	return G6(e, 0, t, r);
}
export function Gg(e, t, r) {
	return G6(e, 1, t, r);
}
export function mZ(e, t, r) {
	const [n, i] = G6(e, t, r);
	let a;
	if (
		n?.GetStoreItemType() == 1 &&
		!n.GetAssets()?.GetHeaderURL() &&
		n?.GetIncludedAppIDs().length == 1
	) {
		a = n.GetIncludedAppIDs()[0];
	}
	const [s, o] = t7(a, r);
	if (a && s?.BIsVisible()) {
		return [s, o];
	} else {
		return [n, i];
	}
}
function d(e, t, r, n) {
	const l = (0, s.CH)();
	const {
		include_assets: c,
		include_release: m,
		include_platforms: u,
		include_all_purchase_options: d,
		include_screenshots: A,
		include_trailers: p,
		include_ratings: g,
		include_tag_count: h,
		include_reviews: C,
		include_basic_info: _,
		include_supported_languages: f,
		include_full_description: b,
		include_included_items: y,
		include_assets_without_overrides: S,
		apply_user_filters: w,
		include_links: B,
	} = r;
	(0, a.useEffect)(() => {
		if (!e || e.length == 0) {
			return;
		}
		const r = {
			include_assets: c,
			include_release: m,
			include_platforms: u,
			include_all_purchase_options: d,
			include_screenshots: A,
			include_trailers: p,
			include_ratings: g,
			include_tag_count: h,
			include_reviews: C,
			include_basic_info: _,
			include_supported_languages: f,
			include_full_description: b,
			include_included_items: y,
			include_assets_without_overrides: S,
			apply_user_filters: w,
			include_links: B,
		};
		const n = e.filter(
			(e) =>
				!o.A.Get().BHasStoreItem(e, t, r) &&
				!o.A.Get().BIsStoreItemMissing(e, t),
		);
		if (n.length == 0) {
			return;
		}
		const a = i.CancelToken.source();
		const s = n.map((e) => o.A.Get().QueueStoreItemRequest(e, t, r));
		Promise.all(s).then(() => {
			if (!a.token.reason) {
				l();
			}
		});
		return () => a.cancel("useStoreItemCacheMultiplePackages: unmounting");
	}, [e, t, n, l, c, m, u, d, A, p, g, h, C, _, f, b, y, S, w, B]);
	if (!e) {
		return 2;
	}
	if (
		!e.every(
			(e) =>
				o.A.Get().BHasStoreItem(e, t, r) || o.A.Get().BIsStoreItemMissing(e, t),
		)
	) {
		return 1;
	}
	if (e.every((e) => o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t))) {
		return 3;
	} else {
		return 2;
	}
}
export function zX(e, t, r) {
	return d(e, 0, t, r);
}
