import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import { pg } from "./13869.js";
import a from "./10606.js";
export function J(e) {
	pg(<L />, e || window, {
		strTitle: (0, Localize)("#VideoError_PlaybackUnsupported"),
	});
}
const L = (e) => (
	<a.KG
		strTitle={(0, Localize)("#VideoError_PlaybackUnsupported")}
		strDescription={(0, Localize)(
			"#VideoError_PlaybackUnsupported_Description",
		)}
		closeModal={e.closeModal}
	/>
);
