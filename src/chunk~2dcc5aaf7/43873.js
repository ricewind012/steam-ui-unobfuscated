import { Localize } from "../../actual_src/utils/localization.js";
import n from "./46422.js";
import i, { q3 } from "./90095.js";
import a from "./63696.js";
import { zv } from "./46382.js";
import o from "./11131.js";
import l from "./10606.js";
import { hf } from "./72476.js";
import _u from "./26326.js";
import d from "./85733.js";
import p, { aS } from "./83718.js";
const A = d;
const g = 705;
const h = 470;
function C(e) {
	const [t, setT] = a.useState();
	const i = zv();
	return (
		<l.hM
			strTitle={Localize("#Login_RefreshSignIn")}
			popupWidth={g}
			popupHeight={h}
			modalClassName={A.RefreshLoginDialogModal}
			className={A.RefreshLoginDialog}
			modal
			refPopup={setT}
			onDismiss={() => {
				if (!o.Of.BShuttingDown()) {
					SteamClient.User?.StartShutdown(true);
				}
			}}
		>
			<_u.FullLogin
				cm={i}
				popup={t}
				includeTitleBar
				refreshLogin
				onLoginComplete={() => {
					n.oy.ResetErrorCondition();
				}}
			/>
		</l.hM>
	);
}
export function Y(e) {
	const t = hf();
	const r = q3(() => n.oy.ErrorCondition);
	if (!t) {
		return null;
	}
	if (r == 0) {
		return null;
	}
	switch (r) {
		case 1:
		case 2: {
			return <C />;
		}
		default: {
			return null;
		}
	}
}
function F(e) {
	const [t, setT] = a.useState();
	const i = zv();
	const o = aS(g, h);
	return (
		<p.rG
			strTitle={Localize("#Login_RefreshSignIn")}
			updateParamsBeforeShow={o}
			refPopup={setT}
		>
			<_u.FullLogin
				cm={i}
				popup={t}
				includeTitleBar
				refreshLogin
				onLoginComplete={() => {
					n.oy.ResetErrorCondition();
				}}
			/>
		</p.rG>
	);
}
export function u(e) {
	const t = hf();
	const r = q3(() => n.oy.ErrorCondition);
	if (!t) {
		return null;
	}
	if (r == 0) {
		return null;
	}
	switch (r) {
		case 1:
		case 2: {
			return <F />;
		}
		default: {
			return null;
		}
	}
}
