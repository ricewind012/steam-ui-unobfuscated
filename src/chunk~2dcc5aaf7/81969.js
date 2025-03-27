import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import s, { e_ as e } from "./34792.js";
import { gc, vJ } from "./52451.js";
import l from "./72476.js";
import c from "./13897.js";
import m from "./2306.js";
import u from "./3475.js";
export function cZ(e) {
	return Localize(
		"#TimeZoneOffset",
		e.utcOffset > 0 ? "+" : "-",
		Math.abs(e.utcOffset / 100).toLocaleString(undefined, {
			minimumIntegerDigits: 2,
		}),
		Math.abs(e.utcOffset % 100).toLocaleString(undefined, {
			minimumIntegerDigits: 2,
		}),
	);
}
export function CY(e) {
	const { tz: t } = e;
	const r = cZ(t);
	return n.createElement(i.aZ, {
		upperDescription: r,
		title: Localize(t.timezoneLocalizationToken),
		description: Localize(t.regionsLocalizationToken),
	});
}
function p() {
	const [e, t] = e("b24HourClock");
	return n.createElement(m.C, {
		feature: u.uX,
		label: Localize("#Settings_TimeAndDate_24HourClock"),
		description: Localize("#Settings_TimeAndDate_24HourClock_Description"),
		checked: e,
		onChange: t,
	});
}
export function tm() {
	const e = l.TS.ON_DECK;
	const t = gc(s.rV.CurrentTimeZoneID);
	const r = vJ(() => SteamClient.Settings.GetAvailableTimeZones(), []);
	const i =
		r?.map((e) => ({
			label: n.createElement(CY, {
				tz: e,
			}),

			data: e.timezoneID,
		})) ?? [];
	const m = n.useRef(undefined);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(p, null),
		e &&
			n.createElement(c.B, {
				feature: 7,
				label: Localize("#Settings_TimeAndDate_Timezone"),
				rgOptions: i,
				selectedOption: t,
				onChange: (e) => {
					t = e.data;
					SteamClient.Settings.SetTimeZone(t);
					return;
					var t;
				},
				dropDownControlRef: m,
			}),
	);
}
