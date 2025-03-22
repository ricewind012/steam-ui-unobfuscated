var n = require("./55667.js");
var i = require("./58839.js");
var a = require("./991.js");
var s = require("./83591.js");
var o = require("./5859.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require("./35268.js");
export async function H2(e, t, r) {
	if (!e || e.length == 0) {
		return [];
	}
	const n = e.filter((e) => (0, a.f)(e.type)).map((e) => e.id);
	const i = e.filter((e) => e.type === "sub").map((e) => e.id);
	const s = e.filter((e) => e.type === "bundle").map((e) => e.id);
	await Promise.all([
		o.A.Get().QueueMultipleAppRequests(n, t),
		o.A.Get().QueueMultiplePackageRequests(i, t),
		o.A.Get().QueueMultipleBundleRequests(s, t),
	]);
	const l = new Set();
	s?.forEach((e) => {
		const t = o.A.Get().GetBundle(e);
		t?.GetIncludedAppIDs().forEach((e) => l.add(e));
	});
	i?.forEach((e) => {
		const t = o.A.Get().GetPackage(e);
		t?.GetIncludedAppIDs().forEach((e) => l.add(e));
	});
	await o.A.Get().QueueMultipleAppRequests(Array.from(l), t);
	n.forEach((e) => l.add(e));
	if (r) {
		const e = Array.from(l)
			.map((e) => {
				const t = o.A.Get().GetApp(e);
				if (t?.GetParentAppID()) {
					l.add(t.GetParentAppID());
					return t.GetParentAppID();
				} else {
					return null;
				}
			})
			.filter(Boolean);
		await o.A.Get().QueueMultipleAppRequests(e, t);
	}
	return Array.from(l).filter((e) => {
		const t = o.A.Get().GetApp(e);
		return t && !t.GetParentAppID();
	});
}
export const jy = {
	include_tag_count: 20,
	include_basic_info: true,
	include_supported_languages: true,
};
export function Li(e) {
	const t = s.Fm.Get();
	const r = e?.GetAllLanguagesWithSomeSupport() || [];
	const n = c.f.Get().GetHomeView()?.localized;
	return (
		!e ||
		(e.GetStoreItemType() == 0 &&
			(t.BIsGameIgnored(e.GetAppID()) ||
				t.BIsGameIgnored(e.GetParentAppID()))) ||
		t.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
		t.BExcludeTagIDs(e.GetTagIDs()) ||
		e.GetAllCreatorClanIDs().some((e) => t.BIsIgnoringCurator(e)) ||
		(n &&
			r.length != 0 &&
			!e.BHasSomeLanguageSupport(0) &&
			!t.BIsAnyLanguageEnabled(r))
	);
}
export async function AX(e, t, r, a) {
	let s = 0;
	let c = 0;
	const u = [];
	await H2(e, n.Xh, t);
	for (const n of e) {
		const e = o.A.Get().GetStoreItem(n.id, (0, i.SW)(n.type));
		if (!e) {
			s++;
			continue;
		}
		const l = e
			.GetIncludedAppIDs()
			.map((e) => o.A.Get().GetApp(e))
			.filter(Boolean);
		l.push(e);
		if (t) {
			const e = new Set(l.map((e) => e.GetParentAppID()).filter(Boolean));
			const t = Array.from(e)
				.map((e) => o.A.Get().GetApp(e))
				.filter(Boolean);
			if (t) {
				l.push(...t);
			}
		}
		if (l.some(a || Li)) {
			c++;
			if (r) {
				r.push(n);
			}
		} else {
			u.push(n);
		}
	}
	if (l.TS.WEB_UNIVERSE === "dev" && u.length === 0) {
		console.log(
			"ApplyStorePreferenceFilters: " +
				s +
				" failed to load, " +
				c +
				" hidden by user filter.",
		);
	}
	return u;
}
export async function a9(e, t, r, n, a, l, c) {
	let m = await AX(
		e,
		t,
		c,
		a
			? (e) =>
					!e ||
					s.Fm.Get().BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
					s.Fm.Get().BExcludeTagIDs(e.GetTagIDs())
			: Li,
	);
	const u = [];
	for (const e of m) {
		const t = o.A.Get().GetStoreItem(e.id, (0, i.SW)(e.type));
		if (!t) {
			continue;
		}
		const a = t?.GetIncludedAppIDsOrSelf();
		let m = false;
		if (r) {
			m = m || a.every((e) => s.Fm.Get().BIsGameOwned(e));
		}
		if (n) {
			m = m || a.every((e) => s.Fm.Get().BIsGameWishlisted(e));
		}
		if (l) {
			m = m || a.every((e) => s.Fm.Get().BIsGameIgnored(e));
		}
		if (m) {
			if (c) {
				c.push(e);
			}
		} else {
			u.push(e);
		}
	}
	return u;
}
