import { Localize } from "../../actual_src/utils/localization.js";
import o from "./10606.js";
import A from "./44798.js";
import c from "./46285.js";
import { QS } from "./52451.js";
import n from "./63696.js";
import u from "./69164.js";
import { hf } from "./72476.js";
import { vh } from "./87935.js";
import { qw } from "./89748.js";
import { q3 } from "./90095.js";
import l from "./99731.js";
import { BrowserViewHostPopup } from "./browserview_hostpopup";
const p = A;
export function S() {
	const e = q3(() => qw().GetServicesInitialized());
	const t = q3(() => qw().BSupportAlertDialogActive());
	if (e && t) {
		return (
			<o.EN active>
				<c.M padding="none">
					<F />
				</c.M>
			</o.EN>
		);
	} else {
		return null;
	}
}
export function z(e) {
	const t = hf();
	const r = q3(() => qw().BSupportAlertDialogActive());
	const [o, setO] = n.useState(false);
	const strURL = vh("SupportMessages");
	n.useEffect(() => {
		setO(r);
	}, [r]);
	const onClose = n.useCallback(() => {
		setO(false);
		qw().CloseSupportAlertsModal();
	}, [setO]);
	if (!o || !t || !t || !strURL) {
		return null;
	}
	const strName = Localize("#SteamUI_Dialog_SupportMessage_Title");
	return (
		<BrowserViewHostPopup strName={strName} strURL={strURL} onClose={onClose} />
	);
}
function F() {
	const e = vh("SupportMessages");
	const t = q3(() => !qw().BMustShowSupportAlertDialog());
	const r = n.useCallback(() => {
		qw().CloseSupportAlertsModal();
	}, []);
	const o = n.useCallback((e, t) => {
		if (e == "CloseBrowser") {
			qw().CloseSupportAlertsModal();
		}
	}, []);
	const c = QS(
		(e) => {
			if (e) {
				return e.GetOnMessageCallbacks("SupportMessages").Register(o)
					.Unregister;
			}
		},
		[o],
	);
	if (e) {
		return (
			<u.Z
				className={p.BrowserWrapper}
				onCancelButton={r}
				onCancelActionDescription={
					t ? Localize("#Button_Close") : Localize("#Button_Dismiss")
				}
			>
				<l.Pw name="SupportMessages" url={e} refBrowser={c} />
			</u.Z>
		);
	} else {
		return null;
	}
}
