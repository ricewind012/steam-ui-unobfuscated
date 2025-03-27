import { Localize } from "../../actual_src/utils/localization.js";
import n, { q3 } from "./90095.js";
import i from "./63696.js";
import { L3 } from "./45328.js";
import s from "./83591.js";
import o, { t7 } from "./82594.js";
import l from "./47628.js";
import m from "./76565.js";
import { vg } from "./4816.js";
import A from "./10606.js";
import p, { pg } from "./13869.js";
import g from "./50376.js";
import { n9 } from "./92059.js";
import C from "./12911.js";
import { H } from "./16154.js";
import { A as A_1 } from "./90765.js";
import y from "./72476.js";
import S from "./98995.js";
const c = l;
const u = m;
function w(e) {
	pg(
		<A.KG
			strTitle={Localize("#Wishlist_Error")}
			strDescription={Localize("#Wishlist_Error_Desc")}
		>
			<br />
			<br />
			{e}
		</A.KG>,
		window,
	);
}
export function _(e) {
	const [t, setT] = i.useState(false);
	const [o, setO] = i.useState(!s.Fm.Get().BIsLoaded());
	const m = n9();
	const { appid, bIsFree, bIsComingSoon, className } = e;
	const [E, M] = q3(() => [
		s.Fm.Get().BIsGameWishlisted(appid),
		s.Fm.Get().BOwnsApp(appid),
	]);
	i.useEffect(() => {
		(async () => {
			await s.Fm.Get().HintLoad();
			setO(false);
		})();
	}, []);
	if (M || (!bIsComingSoon && bIsFree)) {
		if (bIsFree) {
			return <V possibleDemoAppID={appid} />;
		} else {
			return null;
		}
	} else {
		return (
			<S.he toolTipContent={Localize("#AddToWishlist_ttip")}>
				<div
					className={A_1(c.WishList, u.FlexRowContainer, className)}
					onClick={async () => {
						if (y.iA.logged_in) {
							if (!t) {
								setT(true);
								const e = !E;
								try {
									const t = await s.Fm.Get().UpdateGameWishlist(
										appid,
										e,
										L3(m),
									);
									setT(false);
									if (t.success != 1) {
										w(H(t).strErrorMsg);
									}
								} catch (e) {
									setT(false);
									w(H(e).strErrorMsg);
								}
							}
						} else {
							vg();
						}
					}}
				>
					{(o || t) && <C.k size={18} />}
					{!t && E && <g.qnF />}
					{!t && !E && <g.T4m />}
				</div>
			</S.he>
		);
	}
}
function V(e) {
	const { possibleDemoAppID, className } = e;
	const [n] = t7(possibleDemoAppID, {});
	if (
		(n?.GetAppType() == 1 || n?.GetAppType() == 12) &&
		n?.GetParentAppID() > 0
	) {
		return <I parentAppID={n?.GetParentAppID()} className={className} />;
	} else {
		return null;
	}
}
function I(e) {
	const { parentAppID, className } = e;
	const [n] = t7(parentAppID, {
		include_release: true,
	});
	if (n) {
		return (
			<_
				appid={parentAppID}
				bIsComingSoon={n.BIsComingSoon()}
				bIsFree={n.BIsFree()}
				className={className}
			/>
		);
	} else {
		return null;
	}
}
