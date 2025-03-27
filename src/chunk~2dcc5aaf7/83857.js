import n from "./25399.js";
import i, { useEffect } from "./63696.js";
import { jE } from "./3715.js";
import { zv } from "./46382.js";
import { JT } from "./55571.js";
export const L = i.memo(() => {
	const e = jE();
	((e, t) => {
		const r = zv();
		useEffect(() => {
			if (r) {
				return r.messageHandlers.RegisterServiceNotificationHandler(e, t)
					.unregister;
			}
		}, [r, e, t]);
	})(
		n.$y.NotifyPrivateAppListChangedHandler,
		i.useCallback(
			(t) => {
				JT(e, t.Body().private_apps().appids());
				return 1;
			},
			[e],
		),
	);
	return null;
});
