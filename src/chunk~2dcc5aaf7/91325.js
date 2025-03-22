var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./46108.js");
var a = require("./10606.js");
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
	return n.createElement(
		a.EN,
		{
			active: t,
		},
		n.createElement(a.KG, {
			strTitle: (0, i.we)("#BootReserve_Dialog_Title"),
			strDescription: (0, i.we)("#BootReserve_Dialog_Contents"),
			closeModal: r,
		}),
	);
}
