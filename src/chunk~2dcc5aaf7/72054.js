import n, { useRef } from "./63696.js";
import { SW } from "./58839.js";
import { G6 } from "./82594.js";
import s from "./47628.js";
import l from "./72476.js";
const o = s;
export function M(e) {
	const { appInfo } = e;
	const RRef = useRef({
		include_trailers: true,
	});
	const [s] = G6(appInfo?.id, SW(appInfo?.type), RRef.current);
	if (!s) {
		return null;
	}
	const _m = s.GetMicroTrailer();
	if (_m) {
		return (
			<video
				className={o.CapsuleMicroTrailer}
				loop
				muted
				autoPlay
				key={`mtv-${_m.strMP4URL}`}
			>
				<source src={_m.strWebMURL} type="video/webm" />
				{!l.TS.IN_CLIENT && <source src={_m.strMP4URL} type="video/mp4" />}
			</video>
		);
	} else if (
		!s.GetParentAppID() ||
		(s.GetAppType() != 1 && s.GetAppType() != 12)
	) {
		return null;
	} else {
		return (
			<M
				appInfo={{
					id: s.GetParentAppID(),
					type: "game",
				}}
			/>
		);
	}
}
