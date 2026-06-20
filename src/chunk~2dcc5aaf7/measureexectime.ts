export async function MeasureExecTime(
	strLabel: string,
	rgPromises: [string, () => Promise<void>][],
	bGroup = true,
	n: (...args: any[]) => any,
) {
	const ts = performance.now();
	const vecLogs = [];
	const onReject = (t, strPromiseLabel) => {
		console.error(`${strLabel} - ${strPromiseLabel} - ERROR`, t);
		if (n) {
			n(t, strLabel, strPromiseLabel);
		}
	};

	await Promise.all(
		rgPromises.map(([strPromiseLabel, fnInit]) => {
			const n = performance.now();
			try {
				const initPromise = fnInit();
				if (
					(l = initPromise) &&
					typeof l == "object" &&
					"then" in l &&
					typeof l.then == "function"
				) {
					return initPromise.then(
						() =>
							bGroup &&
							vecLogs.push(BuildGroupLabel(`async ${strPromiseLabel}`, ts)),
						(t) => onReject(t, strPromiseLabel),
					);
				}
				if (bGroup) {
					vecLogs.push(BuildGroupLabel(strPromiseLabel, n));
				}
			} catch (ex) {
				onReject(ex, strPromiseLabel);
			}
			var l;
			return null;
		}),
	);
	if (bGroup) {
		console.groupCollapsed(BuildGroupLabel(strLabel, ts));
		vecLogs.forEach((e) => console.log(e));
		console.groupEnd();
	}
}

function BuildGroupLabel(strLabel: string, ts: number) {
	return `${strLabel} - ${(performance.now() - ts).toLocaleString()}ms`;
}
