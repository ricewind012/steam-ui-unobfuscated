var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./58839.js");
var a = require("./82594.js");
var s = require("./47628.js");
var o = s;
var l = require(/*webcrack:missing*/ "./72476.js");
export function m(e) {
	const { appInfo: t } = e;
	const r = (0, n.useRef)({
		include_trailers: true,
	});
	const [s] = (0, a.G6)(t?.id, (0, i.SW)(t?.type), r.current);
	if (!s) {
		return null;
	}
	const _m = s.GetMicroTrailer();
	if (_m) {
		return n.createElement(
			"video",
			{
				className: o.CapsuleMicroTrailer,
				loop: true,
				muted: true,
				autoPlay: true,
				key: "mtv-" + _m.strMP4URL,
			},
			n.createElement("source", {
				src: _m.strWebMURL,
				type: "video/webm",
			}),
			!l.TS.IN_CLIENT &&
				n.createElement("source", {
					src: _m.strMP4URL,
					type: "video/mp4",
				}),
		);
	} else if (
		!s.GetParentAppID() ||
		(s.GetAppType() != 1 && s.GetAppType() != 12)
	) {
		return null;
	} else {
		return n.createElement(m, {
			appInfo: {
				id: s.GetParentAppID(),
				type: "game",
			},
		});
	}
}
