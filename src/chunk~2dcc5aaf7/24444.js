var n = require(/*webcrack:missing*/ "./61416.js");
export function yW(e) {
	return (0, n.I)({
		queryKey: ["OverrideableResource_" + e, e],
		queryFn: async () => {
			const t = "/uioverrides" + e;
			const r = (
				await fetch(t, {
					method: "HEAD",
				})
			).ok;
			return {
				bIsOverride: r,
				strUrl: r ? t : e,
			};
		},
		staleTime: Infinity,
	});
}
