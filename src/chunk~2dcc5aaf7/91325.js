import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import a from "./10606.js";
export function I() {
	const [e, t] = n.useState(false);
	const [r, i] = n.useState(false);
	const [a, s] = n.useState(false);
	n.useEffect(
		() =>
			SteamClient.Messaging.RegisterForMessages("BootReserve", (t, r, n) => {
				if (r == "Completed") {
					i(parseInt(n) != 1);
					if (!e) {
						s(true);
					}
				}
			}).unregister,
		[e],
	);
	n.useEffect(() => {
		if (a && !e) {
			t(true);
		}
	}, [a, e]);
	return [r, a, s];
}
export function p(e) {
	const { active: t, onDismiss: r } = e;
	return (
		<a.EN active={t}>
			<a.KG
				strTitle={Localize("#BootReserve_Dialog_Title")}
				strDescription={Localize("#BootReserve_Dialog_Contents")}
				closeModal={r}
			/>
		</a.EN>
	);
}
