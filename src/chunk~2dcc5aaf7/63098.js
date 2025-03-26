var n = require("./23472.js");
import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
var a = require(/*webcrack:missing*/ "./79769.js");
export const U = new (class {
	m_rgActivePopups = [];
	m_callbackPopupsChanged = new a.lu();
	get PopupsChangedCallbacks() {
		return this.m_callbackPopupsChanged;
	}
	get active_popups() {
		return this.m_rgActivePopups;
	}
	ShowGameNotesPopup(e, t, r) {
		const a = this.m_rgActivePopups.find(
			(t) => (0, n.$U)(t.noteParent, e) && t.noteid === r,
		);
		if (a) {
			if (a.focus) {
				a.focus();
			}
			return;
		}
		const s = {
			id: `GameNotesPopup_${"appid" in e ? e.appid : `shortcut_${e.shortcut}`}_${r || "list"}`,
			display_name: t,
			noteParent: e,
			noteid: r,
		};
		s.close = () => {
			FindAndRemove(this.m_rgActivePopups, s);
			this.m_callbackPopupsChanged.Dispatch();
		};
		this.m_rgActivePopups.push(s);
		this.m_callbackPopupsChanged.Dispatch();
	}
	RegisterPopup(e, t) {
		e.focus = t;
		return () => e.close();
	}
})();
