import n from "./83957.js";
import a, { useRef, useState, useEffect } from "./63696.js";
import s, { CH } from "./52451.js";
import o from "./5859.js";
const i = n;
export function G6(e, t, r, n) {
	const LRef = useRef();
	const CRef = useRef(undefined);
	const m = CH();
	LRef.current = e;
	const [u, setU] = useState(undefined);
	const {
		include_assets,
		include_release,
		include_platforms,
		include_all_purchase_options,
		include_screenshots,
		include_trailers,
		include_ratings,
		include_tag_count,
		include_reviews,
		include_basic_info,
		include_supported_languages,
		include_full_description,
		include_included_items,
		include_assets_without_overrides,
		apply_user_filters,
		include_links,
	} = r;
	useEffect(() => {
		const r = {
			include_assets: include_assets,
			include_release: include_release,
			include_platforms: include_platforms,
			include_all_purchase_options: include_all_purchase_options,
			include_screenshots: include_screenshots,
			include_trailers: include_trailers,
			include_ratings: include_ratings,
			include_tag_count: include_tag_count,
			include_reviews: include_reviews,
			include_basic_info: include_basic_info,
			include_supported_languages: include_supported_languages,
			include_full_description: include_full_description,
			include_included_items: include_included_items,
			include_assets_without_overrides: include_assets_without_overrides,
			apply_user_filters: apply_user_filters,
			include_links: include_links,
		};
		let a = null;
		if (
			!!e &&
			!(e < 0) &&
			!o.A.Get().BHasStoreItem(e, t, r) &&
			(u === undefined || !n || !n || n != CRef.current)
		) {
			if (n !== CRef.current) {
				setU(undefined);
				CRef.current = n;
			}
			a = i.CancelToken.source();
			o.A.Get()
				.QueueStoreItemRequest(e, t, r)
				.then((t) => {
					if (!a?.token.reason && LRef.current === e) {
						setU(t == 1);
					}
					m();
				});
		}
		return () => a?.cancel("useStoreItemCache: unmounting");
	}, [
		e,
		t,
		n,
		u,
		include_assets,
		include_release,
		include_platforms,
		include_all_purchase_options,
		include_screenshots,
		include_trailers,
		include_ratings,
		include_tag_count,
		include_reviews,
		include_basic_info,
		include_supported_languages,
		include_full_description,
		include_included_items,
		include_assets_without_overrides,
		apply_user_filters,
		include_links,
		m,
	]);
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
	const l = CH();
	const {
		include_assets,
		include_release,
		include_platforms,
		include_all_purchase_options,
		include_screenshots,
		include_trailers,
		include_ratings,
		include_tag_count,
		include_reviews,
		include_basic_info,
		include_supported_languages,
		include_full_description,
		include_included_items,
		include_assets_without_overrides,
		apply_user_filters,
		include_links,
	} = r;
	useEffect(() => {
		if (!e || e.length == 0) {
			return;
		}
		const r = {
			include_assets: include_assets,
			include_release: include_release,
			include_platforms: include_platforms,
			include_all_purchase_options: include_all_purchase_options,
			include_screenshots: include_screenshots,
			include_trailers: include_trailers,
			include_ratings: include_ratings,
			include_tag_count: include_tag_count,
			include_reviews: include_reviews,
			include_basic_info: include_basic_info,
			include_supported_languages: include_supported_languages,
			include_full_description: include_full_description,
			include_included_items: include_included_items,
			include_assets_without_overrides: include_assets_without_overrides,
			apply_user_filters: apply_user_filters,
			include_links: include_links,
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
	}, [
		e,
		t,
		n,
		l,
		include_assets,
		include_release,
		include_platforms,
		include_all_purchase_options,
		include_screenshots,
		include_trailers,
		include_ratings,
		include_tag_count,
		include_reviews,
		include_basic_info,
		include_supported_languages,
		include_full_description,
		include_included_items,
		include_assets_without_overrides,
		apply_user_filters,
		include_links,
	]);
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
