import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import { rO } from "./88724.js";
import { A } from "./90765.js";
import l from "./50376.js";
import c from "./20492.js";
import u from "./46217.js";
const m = c;
export const X = PA((e) => {
	const { persona: t, className: r, ...i } = e;
	if (!t) {
		return null;
	}
	if (!t.is_online) {
		return null;
	}
	const c = t.HasStateFlag(512);
	const d = t.HasStateFlag(2048);
	const A = t.IsOnSteamDeck();
	const p = !A && !d && t.HasStateFlag(1024);
	return (
		<>
			{c && (
				<div
					className={A(r, m.PersonaStatusIcon, m.MobilePhoneIcon, rO(t))}
					title={Localize("#Platform_Hint_Mobile")}
					{...i}
				>
					<u.rf />
				</div>
			)}
			{d && (
				<div
					className={A(r, m.PersonaStatusIcon, m.VRIcon, rO(t))}
					title={Localize("#Platform_Hint_VR")}
					{...i}
				>
					<l.MUh />
				</div>
			)}
			{p && (
				<div
					className={A(r, m.PersonaStatusIcon, m.BigPictureIcon, rO(t))}
					title={Localize("#Platform_Hint_BigPicture")}
					{...i}
				>
					<l.bPr />
				</div>
			)}
			{A && (
				<div
					className={A(r, m.PersonaStatusIcon, m.SteamDeckIcon, rO(t))}
					title={Localize("#Platform_Hint_SteamDeck")}
					{...i}
				>
					<l.DQe />
				</div>
			)}
		</>
	);
});
