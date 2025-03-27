import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import { W6 } from "./49519.js";
import a from "./51517.js";
export function y(e) {
	const t = W6();
	return n.useCallback(() => {
		if (e) {
			t.replace(t.location.pathname, {
				...t.location.state,
				RemoveProtonFilesTargets: e,
			});
		}
	}, [t, e]);
}
export function x() {
	const e = W6();
	const [t, setT] = n.useState(e.location.state?.RemoveProtonFilesTargets);
	n.useEffect(
		() => e.listen((e) => setT(e.state?.RemoveProtonFilesTargets)),
		[e],
	);
	const o = n.useCallback(() => {
		e.replace(e.location.pathname, {
			...e.location.state,
			RemoveProtonFilesTargets: undefined,
		});
	}, [e]);
	const l = n.useCallback(() => {
		t.forEach((e) => SteamClient.Apps.ClearProton(e));
	}, [t]);
	const c = t != null && t.length > 0;
	return (
		<a.Q
			active={c}
			strTitle={(0, Localize)("#RemoveProtonFilesModal_Title")}
			strDescription={(0, Localize)("#RemoveProtonFilesModal_Description")}
			onOK={l}
			closeModal={o}
			bCloseOnOK
		/>
	);
}
