var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./22588.js");
var a = require("./91720.js");
var s = require(/*webcrack:missing*/ "./52451.js");
export function V(e) {
	const { app: t } = (0, a.Ks)(e);
	const { loader: r } = (0, i.Fc)(e);
	const o = t?.recording_type === 3 || t?.recording_type === 2;
	const [l, c] = (0, n.useState)(null);
	(0, n.useEffect)(
		() =>
			r
				? (c(
						o
							? {
									startTime: Date.now(),
									startDuration: r.GetTotalRecordingDuration(),
								}
							: null,
					),
					() => {})
				: () => {},
		[o, r],
	);
	(0, s.bB)({
		msInterval: 1000,
		bEnabled: !!l,
	});
	if (l) {
		const e = Date.now() - l.startTime + l.startDuration;
		const t = r.GetTotalRecordingDuration();
		if (Math.abs(e - t) > 10000) {
			return Math.floor(t / 1000);
		} else {
			return Math.floor(e / 1000);
		}
	}
	if (r && r.BInitialized()) {
		return Math.floor(r.GetTotalRecordingDuration() / 1000);
	} else if (t) {
		return t.video_duration_seconds;
	} else {
		return 0;
	}
}
