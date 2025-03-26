var n = require("./12103.js");
var i = n;
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./83957.js");
var o = s;
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require("./18057.js");
var u = require(/*webcrack:missing*/ "./69164.js");
var d = require("./87935.js");
var A = require(/*webcrack:missing*/ "./88696.js");
import { Localize } from "../../actual_src/utils/localization.js";
var g = require(/*webcrack:missing*/ "./61416.js");
var h = require(/*webcrack:missing*/ "./3715.js");
var C = require(/*webcrack:missing*/ "./75144.js");
var _ = require(/*webcrack:missing*/ "./92059.js");
const f = "Deck_SeasonalSale";
export function Uc(e) {
	const t = (0, _.aL)(d.B7.GetStoreURL(), "deckbanner");
	const r = (0, m.Qt)(t);
	const { strImage: n, fnDismiss: s } = (function () {
		let { data: e } = (0, g.I)({
			queryKey: ["SeasonalSale"],
			queryFn: ({ signal: e }) =>
				(async function (e) {
					let t = new Date();
					let r = new A.A();
					let n = await r.GetObject(f);
					if (n) {
						let e = n.nextCheck ? new Date(n.nextCheck) : null;
						if (e && e > t) {
							return n;
						}
					} else {
						n = {
							sale: "",
						};
					}
					n.nextCheck = S(30).toJSON();
					try {
						let t = `${d.B7.GetStoreURL()}api/seasonalsale?l=${encodeURIComponent(c.TS.LANGUAGE)}&origin=${(0, c.xv)()}`;
						0;
						let r = await o.get(t, {
							signal: e,
						});
						if (r.status != 200 || !r.data) {
							throw new Error("invalid");
						}
						n.deckImage = r.data.deckImage ?? "";
						let i = r.data.hideAfter;
						if (i || i === 0) {
							n.hideAfter = S(i).toJSON();
						}
						let a = r.data.nextCheck;
						if (a || a === 0) {
							n.nextCheck = S(a).toJSON();
						}
						if (r.data.sale != n.sale) {
							n.sale = r.data.sale;
							n.state = "active";
						}
					} catch (e) {}
					await r.StoreObject(f, n);
					return n;
				})(e),
			staleTime: 0,
		});
		const t = (0, h.jE)();
		let r = a.useCallback(() => {
			(async function (e, t) {
				let r = new A.A();
				let n = {
					sale: t ?? "",
					state: "complete",
				};
				await r.StoreObject(f, n);
				e.invalidateQueries({
					queryKey: ["SeasonalSale"],
				});
			})(t, e?.sale);
		}, [e, t]);
		let n = e?.hideAfter ? new Date(e.hideAfter) : null;
		let i = !!n && !!(n < new Date());
		let s = "";
		if (e && e.deckImage && e.state != "complete" && !i) {
			s = e.deckImage;
		}
		return {
			strImage: s,
			fnDismiss: r,
		};
	})();
	const [C, b] = (0, a.useState)(false);
	let y = a.useCallback(() => {
		s();
	}, [s]);
	if (!n) {
		return null;
	}
	let w = (0, l.A)(i.SeasonalSale, C && i.Loaded);
	return a.createElement(
		u.Z,
		{
			focusClassName: i.Focused,
			navKey: "SeasonalSale",
			className: w,
			focusable: C,
			onActivate: r,
			onSecondaryButton: y,
			onSecondaryActionDescription: (0, Localize)("#Button_Dismiss"),
		},
		a.createElement("img", {
			className: i.Banner,
			src: n,
			onLoad: () => b(true),
		}),
	);
}
export async function RS() {
	let e = new A.A();
	await e.RemoveObject(f);
	C.L.invalidateQueries({
		queryKey: ["SeasonalSale"],
	});
}
function S(e) {
	return new Date(new Date().getTime() + e * 60000);
}
