import n from "./63696.js";
import i, { uX } from "./91720.js";
export function d(e) {
	let { clipID, clipSummary, className } = e;
	if (clipSummary) {
		return <O clipSummary={clipSummary} className={className} />;
	} else if (clipID) {
		return <S clipID={clipID} className={className} />;
	} else {
		return null;
	}
}
function S(e) {
	let { clipID, className } = e;
	const a = uX(clipID);
	return <O clipSummary={a} className={className} />;
}
function O(e) {
	let { clipSummary, className } = e;
	if (clipSummary?.thumbnail_url) {
		return <img className={className} src={clipSummary.thumbnail_url} />;
	} else {
		return <div className={className} />;
	}
}
