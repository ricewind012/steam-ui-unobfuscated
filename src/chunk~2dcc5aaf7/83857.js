var n = require("./25399.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./3715.js");
var s = require(/*webcrack:missing*/ "./46382.js");
var o = require("./55571.js");
export const L = i.memo(function () {
	const e = (0, a.jE)();
	(function (e, t) {
		const r = (0, s.zv)();
		(0, i.useEffect)(() => {
			if (r) {
				return r.messageHandlers.RegisterServiceNotificationHandler(e, t)
					.unregister;
			}
		}, [r, e, t]);
	})(
		n.$y.NotifyPrivateAppListChangedHandler,
		i.useCallback(
			(t) => {
				(0, o.JT)(e, t.Body().private_apps().appids());
				return 1;
			},
			[e],
		),
	);
	return null;
});
