import n from "./7455.js";
import { VI } from "./34792.js";
import a from "./63696.js";
import s from "./38602.js";
export function A(e) {
	const [t, r] = VI("game_notes_enable_spellcheck");
	return (
		<s.th
			store={n.L.Get()}
			bSpellcheckEnabled={t}
			setSpellcheckEnabled={r}
			{...e}
		/>
	);
}
