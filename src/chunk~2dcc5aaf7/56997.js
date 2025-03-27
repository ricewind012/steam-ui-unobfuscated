import { useState, useEffect } from "./63696.js";
import { Fc } from "./22588.js";
import { Ks } from "./91720.js";
import { bB } from "./52451.js";
export function V(e) {
	const { app } = Ks(e);
	const { loader } = Fc(e);
	const o = app?.recording_type === 3 || app?.recording_type === 2;
	const [l, setL] = useState(null);
	useEffect(
		() =>
			loader
				? (setL(
						o
							? {
									startTime: Date.now(),
									startDuration: loader.GetTotalRecordingDuration(),
								}
							: null,
					),
					() => {})
				: () => {},
		[o, loader],
	);
	bB({
		msInterval: 1000,
		bEnabled: !!l,
	});
	if (l) {
		const e = Date.now() - l.startTime + l.startDuration;
		const t = loader.GetTotalRecordingDuration();
		if (Math.abs(e - t) > 10000) {
			return Math.floor(t / 1000);
		} else {
			return Math.floor(e / 1000);
		}
	}
	if (loader && loader.BInitialized()) {
		return Math.floor(loader.GetTotalRecordingDuration() / 1000);
	} else if (app) {
		return app.video_duration_seconds;
	} else {
		return 0;
	}
}
