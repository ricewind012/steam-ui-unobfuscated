import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./12774.js";
import a, { uD } from "./52451.js";
import s from "./78110.js";
export function Q(e) {
	const { active, onOK, closeModal, bCloseOnOK, children, ...m } = e;
	if (!active) {
		return null;
	}
	const u =
		(typeof m.strTitle == "string" && m.strTitle) ||
		(0, Localize)("#Steam_Platform");
	return (
		<s.w onlyPopoutIfNeeded popupHeight={340} popupWidth={640} strTitle={u}>
			<i.o0
				{...m}
				onCancel={closeModal}
				onOK={() => {
					onOK();
					if (bCloseOnOK) {
						closeModal();
					}
				}}
			>
				{children}
			</i.o0>
		</s.w>
	);
}
export function M(e) {
	const { bCloseOnOK = true, children, ...i } = e;
	const [s, o, c] = uD();
	return [
		<Q active={s} bCloseOnOK={bCloseOnOK} closeModal={c} {...i}>
			{children}
		</Q>,
		o,
		c,
	];
}
