var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require("./51517.js");
import { Localize } from "../../actual_src/utils/localization.js";
export function y(e) {
	const t = (0, i.W6)();
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
	const e = (0, i.W6)();
	const [t, r] = n.useState(e.location.state?.RemoveProtonFilesTargets);
	n.useEffect(() => e.listen((e) => r(e.state?.RemoveProtonFilesTargets)), [e]);
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
	return n.createElement(a.Q, {
		active: c,
		strTitle: (0, Localize)("#RemoveProtonFilesModal_Title"),
		strDescription: (0, Localize)("#RemoveProtonFilesModal_Description"),
		onOK: l,
		closeModal: o,
		bCloseOnOK: true,
	});
}
