export const Kl = [
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"smalltext",
	"b",
	"u",
	"hr",
	"i",
	"img",
	"strike",
	"spoiler",
	"noparse",
	"url",
	"list",
	"olist",
	"*",
	"quote",
	"pullquote",
	"code",
	"table",
	"tr",
	"td",
	"th",
	"previewyoutube",
	"looping_media",
	"roomeffect",
	"sticker",
	"price",
	"pricesavings",
	"trailer",
	"speaker",
	"doclink",
	"video",
	"vod",
	"youtubeorvideo",
	"giveawayeligible",
	"claimitem",
	"packagepurchaseable",
	"actiondialog",
	"uploadfilebutton",
	"docimg",
	"meetsteamsessiongroup",
];
export const iH = [
	"h1",
	"h2",
	"h3",
	"b",
	"u",
	"i",
	"strike",
	"spoiler",
	"noparse",
	"url",
];
const a = [
	"img",
	"previewyoutube",
	"looping_media",
	"roomeffect",
	"video",
	"vod",
	"trailer",
	"youtubeorvideo",
	"docimg",
];
Kl.filter((e) => !a.includes(e));
let s;
function o(e) {
	if (e) {
		return e.map((e) => (e == "*" ? "\\*" : e)).join("|");
	} else {
		s ||= o(Kl);
		return s;
	}
}
export function Yj(e, t = null, r = " ") {
	const n = new RegExp("\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
	return e.replace(n, r);
}
export function zV(e, t = null, r = "") {
	const n = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
	return e.replace(new RegExp(n, "gi"), r);
}
