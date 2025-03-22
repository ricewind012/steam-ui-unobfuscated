import * as a from /*webcrack:missing*/ "./89748.js";
import * as l from /*webcrack:missing*/ "./35560.js";
import * as c from /*webcrack:missing*/ "./46422.js";
import * as r from /*webcrack:missing*/ "./10501.js";
import * as o from /*webcrack:missing*/ "./63696.js";
import * as u from /*webcrack:missing*/ "./4855.js";
import * as m from /*webcrack:missing*/ "./46382.js";
import * as i from /*webcrack:missing*/ "./5859.js";
import * as s from /*webcrack:missing*/ "./43691.js";
function w(e) {
	const { msDelayBatch: t, children: n } = e;
	const a = (0, m.rW)();
	const l = o.useMemo(
		() => ({
			country: s.TS.COUNTRY,
			language: s.TS.LANGUAGE,
			realm: s.TS.EREALM,
		}),
		[],
	);
	o.useEffect(() => i.A.Initialize(a), [a]);
	return o.createElement(
		u.V3,
		{
			context: l,
			msDelayBatch: t,
			legacyCacheStoreItemData: i.A.Get().ReadItem,
		},
		n,
	);
}
import * as E from /*webcrack:missing*/ "./91435.js";
import * as d from /*webcrack:missing*/ "./50341.js";
import * as f from /*webcrack:missing*/ "./83857.js";
import * as g from /*webcrack:missing*/ "./42318.js";
const k = o.memo(function (e) {
	return o.createElement(
		g.wC,
		null,
		o.createElement(f.L, null),
		o.createElement(d.BV, null),
	);
});
(0, require(/*webcrack:missing*/ "./89193.js").jK)({
	enforceActions: "never",
});
(async function () {
	(function () {
		let e = window;
		e.ClearBackgroundInterval = window.clearInterval;
		e.ClearBackgroundTimeout = window.clearTimeout;
		e.SetBackgroundInterval = window.setInterval;
		e.SetBackgroundTimeout = window.setTimeout;
	})();
	let e = (0, a.KC)();
	await e.Init(window.cm);
})();
export default (function (e) {
	const t = (0, a.gK)();
	return o.createElement(
		o.Fragment,
		null,
		o.createElement(
			E.EO,
			{
				bOnlyPopups: true,
			},
			o.createElement(k, null),
			t &&
				o.createElement(
					l.VQ,
					{
						controller: c.oy.NavigationManager,
					},
					o.createElement(
						w,
						null,
						o.createElement(r.u, {
							cm: e.cm,
						}),
					),
				),
		),
	);
});
