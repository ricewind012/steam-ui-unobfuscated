import { Localize } from "../../actual_src/utils/localization.js";
import n from "./12103.js";
import a, { useState } from "./63696.js";
import s from "./83957.js";
import { A as A_1 } from "./90765.js";
import c, { xv } from "./72476.js";
import { Qt } from "./18057.js";
import u from "./69164.js";
import d from "./87935.js";
import A from "./88696.js";
import { I } from "./61416.js";
import { jE } from "./3715.js";
import C from "./75144.js";
import { aL } from "./92059.js";
const i = n;
const o = s;
const f = "Deck_SeasonalSale";
export function Uc(e) {
	const t = aL(d.B7.GetStoreURL(), "deckbanner");
	const r = Qt(t);
	const { strImage, fnDismiss } = (() => {
		let { data } = I({
			queryKey: ["SeasonalSale"],
			queryFn: ({ signal }) =>
				(async (e) => {
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
						let t = `${d.B7.GetStoreURL()}api/seasonalsale?l=${encodeURIComponent(
							c.TS.LANGUAGE,
						)}&origin=${xv()}`;
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
				})(signal),
			staleTime: 0,
		});
		const t = jE();
		let r = a.useCallback(() => {
			(async (e, t) => {
				let r = new A.A();
				let n = {
					sale: t ?? "",
					state: "complete",
				};
				await r.StoreObject(f, n);
				e.invalidateQueries({
					queryKey: ["SeasonalSale"],
				});
			})(t, data?.sale);
		}, [data, t]);
		let n = data?.hideAfter ? new Date(data.hideAfter) : null;
		let i = !!n && !!(n < new Date());
		let s = "";
		if (data && data.deckImage && data.state != "complete" && !i) {
			s = data.deckImage;
		}
		return {
			strImage: s,
			fnDismiss: r,
		};
	})();
	const [C, setC] = useState(false);
	let y = a.useCallback(() => {
		fnDismiss();
	}, [fnDismiss]);
	if (!strImage) {
		return null;
	}
	let w = A_1(i.SeasonalSale, C && i.Loaded);
	return (
		<u.Z
			focusClassName={i.Focused}
			navKey="SeasonalSale"
			className={w}
			focusable={C}
			onActivate={r}
			onSecondaryButton={y}
			onSecondaryActionDescription={(0, Localize)("#Button_Dismiss")}
		>
			<img className={i.Banner} src={strImage} onLoad={() => setC(true)} />
		</u.Z>
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
