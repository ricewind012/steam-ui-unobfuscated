import { Localize } from "../../actual_src/utils/localization.js";
import n, { useState, useEffect } from "./63696.js";
import i from "./52850.js";
import a from "./26853.js";
import { m as m_1 } from "./39039.js";
import o, { H } from "./16154.js";
import { A as A_1 } from "./90765.js";
import m, { Dq } from "./34428.js";
import u from "./72476.js";
import d, { o as o_1 } from "./4042.js";
import _A from "./44184.js";
const p = _A;
export function A(e) {
	const {
		videoID,
		bShowVideoImmediately,
		bAutoPlay,
		nStartSeconds,
		classNameSize,
		classNameAlign,
	} = e;
	const [_, set] = useState(!bShowVideoImmediately);
	const [b, setB] = useState(false);
	const S = m_1("YouTubeInlineSnippet");
	const [w, setW] = useState({
		title: Localize("#Loading"),
		description: "",
		videoid: videoID,
		views: "0",
	});
	useEffect(() => {
		if (_) {
			i.R.LoadYouTubeDynamicData([videoID], S)
				.then((e) => {
					if (!S.token.reason && e.length > 0) {
						setW(e[0]);
						setB(true);
					}
				})
				.catch((e) =>
					console.error(`YouTubeInlineSnippet: ${H(e).strErrorMsg}`),
				);
		}
	}, [_, S, videoID]);
	const v = false;
	n.useEffect(() => {
		if (bShowVideoImmediately) {
			o_1(() => {});
		}
	}, [bShowVideoImmediately, v]);
	if (_) {
		const { title, views, description } = w;

		return (
			<div className={p.DynamicLinkBox} onClick={() => set(false)}>
				<img
					className={p.DynamicLink_Preview}
					src={`https://img.youtube.com/vi/${videoID}/0.jpg`}
				/>
				<div className={p.DynamicLink_Content}>
					<div className={p.DynamicLink_Name}>
						{Localize("#EventEditor_YouTubeVideoTitle", title)}
					</div>
					<div className={p.DynamicLink_YoutubeViews}>
						{Localize("#EventEditor_YouTubeVideoViews", Dq(Number(views)))}
					</div>
					<div className={p.Dynamiclink_Content}>
						{b && description}
						{!b && <a.t size="medium" />}
					</div>
				</div>
			</div>
		);
	}
	return (
		<div
			className={A_1(p.PreviewYouTubeVideo, classNameSize, classNameAlign)}
			id={videoID}
		>
			<img
				className={p.PlaceholderImg}
				src={`${u.TS.COMMUNITY_CDN_URL}public/shared/images/responsive/youtube_16x9_placeholder.gif`}
			/>
			<d.N
				video={videoID}
				autoplay={bAutoPlay ?? false}
				startSeconds={nStartSeconds}
				controls
				playsInline
				autopause
				showFullscreenBtn
			/>
		</div>
	);
}
