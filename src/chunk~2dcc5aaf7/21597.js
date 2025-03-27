import {
	Localize,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./84009.js";
import s from "./61662.js";
import { A as A_1 } from "./90765.js";
import c from "./60142.js";
import { Qn } from "./72476.js";
import { fu } from "./78721.js";
import { br } from "./18869.js";
import A, { jE } from "./26094.js";
const a = i;
export function R(e) {
	const { screenshot, sizeAxis, onClick, className, ...h } = e;
	const C = br();
	const _ = jE();
	const f = (e) => _(screenshot, e.currentTarget);
	const b = !Qn();
	let y = A_1(
		a.ClickableScreenshotImg,
		sizeAxis == "width" ? a.UseWidth : a.UseHeight,
	);
	return (
		<s.z
			{...h}
			className={A_1(className, a.ClickableScreenshot)}
			renderHover={() => (
				<G
					url={screenshot.strUrl}
					dateCreated={screenshot.rtCreated}
					caption={screenshot.remote?.short_description}
				/>
			)}
			onClick={
				onClick ||
				(() =>
					C.Media.Screenshot({
						state: {
							id: screenshot.id,
							filter: {
								listSource: {
									type: "app",
									gameid: screenshot.strGameID,
								},
							},
						},
					}))
			}
			onContextMenu={f}
			showFocusRing
			onMenuActionDescription={(0, Localize)("#Generic_Share")}
		>
			<img className={y} src={fu(screenshot.strUrl)} />
			{b && (
				<div
					className={a.ScreenshotShareIcon}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						f(e);
					}}
				>
					<c.li />
				</div>
			)}
		</s.z>
	);
}
function G(e) {
	const { url, caption, dateCreated } = e;
	return (
		<s.M className={a.Hover}>
			<img className={a.Screenshot} src={fu(url)} />
			{caption && <div className={a.Caption}>{caption}</div>}
			<div className={a.Date}>{LocalizeRtime32ToShortDate(dateCreated)}</div>
		</s.M>
	);
}
