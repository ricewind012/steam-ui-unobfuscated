import { Localize } from "../../actual_src/utils/localization.js";
import n, { useState } from "./63696.js";
import i, { pg } from "./13869.js";
import s from "./72476.js";
import o from "./89791.js";
import l from "./31222.js";
import c from "./90869.js";
import "./10606.js";
function M(e) {
	return (
		<i.x_ onEscKeypress={e.closeModal} bDisableBackgroundDismiss>
			<D redirectURL={e.redirectURL} guestOption={e.guestOption} />
		</i.x_>
	);
}
export function vg() {
	pg(<M ownerWin={window} redirectURL={window.location.href} />, window, {
		strTitle: Localize("#Login_SignInTitle"),
	});
}
function D(e) {
	const { redirectURL, guestOption } = e;
	const [i] = useState(
		new l.D(s.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
	);
	const [a, setA] = useState(false);
	return (
		<div>
			{a ? (
				<o.Fn />
			) : (
				<o.YN
					autoFocus
					transport={i}
					platform={2}
					onComplete={(e) => {
						if (e == c.wI.k_PrimaryDomainFail) {
							setA(true);
						} else {
							window.location.assign(redirectURL);
						}
					}}
					redirectUrl={redirectURL}
					theme="modal"
				>
					{guestOption && <o.Mk redirectURL={redirectURL} />}
				</o.YN>
			)}
		</div>
	);
}
