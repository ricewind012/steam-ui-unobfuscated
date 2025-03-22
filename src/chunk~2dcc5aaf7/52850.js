var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./72476.js");
class l {
	constructor() {
		(0, s.Gn)(this);
	}
	m_mapYouTubeVideo = new Map();
	m_mapSharedFile = new Map();
	async LoadYouTubeDynamicData(e, t) {
		let r = new Array();
		let n = "";
		e.forEach((e, t) => {
			if (this.m_mapYouTubeVideo.has(e)) {
				r.push(this.m_mapYouTubeVideo.get(e));
			} else {
				if (n.length > 0) {
					n += ",";
				}
				n += e;
			}
		});
		if (n.length == 0) {
			return r;
		}
		let i = {
			youtubevideoids: n,
		};
		let l = null;
		l = await a.get(
			o.TS.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
			{
				params: i,
				cancelToken: t.token,
			},
		);
		if (l && l.data && l.data.youtube) {
			(0, s.h5)(() => {
				l.data.youtube.forEach((e, t) => {
					this.m_mapYouTubeVideo.set(e.videoid, e);
					r.push(e);
				});
			});
		}
		return r;
	}
	async LoadSharedFileDynamicData(e, t) {
		let r = new Array();
		let n = "";
		e.forEach((e, t) => {
			if (this.m_mapSharedFile.has(e)) {
				r.push(this.m_mapSharedFile.get(e));
			} else {
				if (n.length > 0) {
					n += ",";
				}
				n += e;
			}
		});
		if (n.length == 0) {
			return r;
		}
		let i = {
			sharedfileids: n,
		};
		let l = null;
		l = await a.get(
			o.TS.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
			{
				params: i,
				cancelToken: t.token,
			},
		);
		if (l && l.data && l.data.sharedfiles) {
			(0, s.h5)(() => {
				l.data.sharedfiles.forEach((e, t) => {
					this.m_mapSharedFile.set(e.sharedfileid, e);
					r.push(e);
				});
			});
		}
		return r;
	}
}
(0, n.Cg)([s.sH], l.prototype, "m_mapYouTubeVideo", undefined);
(0, n.Cg)([s.sH], l.prototype, "m_mapSharedFile", undefined);
export const R = new l();
