import { Localize } from "@actual_src/utils/localization.js";

import { PA } from "./41230.js";
import c from "./47628.js";
import { o as o_1 } from "./57931.js";
import s from "./83591.js";
import { A } from "./90765.js";

const m = c;
export const E = PA((e) => {
	const { appid, bIsMuted } = e;
	const n = s.Fm.Get().BOwnsApp(appid);
	const c = A(
		m.CapsuleBottomBar,
		bIsMuted && m.Muted,
		n ? m.PlayNowButton : m.AddToLibraryButton,
	);
	return (
		<div
			onClick={(e) => {
				e.preventDefault();
				if (n) {
					o_1(appid);
				} else {
					s.Fm.Get().AddLicenseForFreeGame(appid);
				}
			}}
			className={c}
		>
			{Localize(n ? "#Sale_PlayNow" : "#Sale_AddToLibrary")}
		</div>
	);
});
