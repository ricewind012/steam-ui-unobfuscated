import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { Nr } from "./42318.js";
import a from "./10606.js";
import s from "./64608.js";
import { Co } from "./96593.js";
export const u = Nr(() => {
	const [e, setE] = n.useState(false);
	const [r, setR] = n.useState();
	const [c, setC] = n.useState();
	const u = Co(r?.appid);
	const d = n.useCallback((e, r, n) => {
		setE(true);
		setR({
			appid: e,
			eResult: r,
			errorCode: n,
		});
	}, []);
	const A = n.useCallback(() => {
		setE(false);
	}, [setE]);
	n.useEffect(
		() => SteamClient.Apps.RegisterForDRMFailureResponse(d).unregister,
		[d],
	);
	if (!e || !u) {
		return null;
	}
	const p = (0, Localize)("#Game_Start_Problem_Title");
	const g = (0, Localize)(
		"#Game_Start_Problem_Text",
		u.display_name,
		r.errorCode,
	);
	return (
		<a.hM
			strTitle={p}
			onDismiss={A}
			popupWidth={500}
			popupHeight={250}
			refPopup={setC}
			modal
		>
			<s.Y9>{p}</s.Y9>
			<s.a3>{g}</s.a3>
			<s.wi>
				<s.$n onClick={A}>{(0, Localize)("#Button_Close")}</s.$n>
			</s.wi>
		</a.hM>
	);
});
export function T(e) {
	const [t, setT] = n.useState(false);
	const [i, setI] = n.useState();
	const c = Co(i?.appid);
	const m = n.useCallback((e, t, n) => {
		setT(true);
		setI({
			appid: e,
			eResult: t,
			errorCode: n,
		});
	}, []);
	const u = n.useCallback(() => {
		setT(false);
	}, [setT]);
	n.useEffect(
		() => SteamClient.Apps.RegisterForDRMFailureResponse(m).unregister,
		[m],
	);
	if (!t || !c) {
		return null;
	}
	const d = (0, Localize)("#Game_Start_Problem_Title");
	const A = (0, Localize)(
		"#Game_Start_Problem_Text",
		c.display_name,
		i.errorCode,
	);
	return (
		<a.EN active>
			<a.KG onOK={u} strTitle={d} strDescription={A} />
		</a.EN>
	);
}
