import { I } from "./61416.js";
export function yW(e) {
	return I({
		queryKey: [`OverrideableResource_${e}`, e],
		queryFn: async () => {
			const t = `/uioverrides${e}`;
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
