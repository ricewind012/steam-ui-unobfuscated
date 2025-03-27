import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s, { Gn, h5 } from "./89193.js";
import o from "./72476.js";
const a = i;
class l {
	constructor() {
		Gn(this);
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
			`${o.TS.STORE_BASE_URL}/events/ajaxgetdynamiceventmetadata`,
			{
				params: i,
				cancelToken: t.token,
			},
		);
		if (l && l.data && l.data.youtube) {
			h5(() => {
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
			`${o.TS.STORE_BASE_URL}/events/ajaxgetdynamiceventmetadata`,
			{
				params: i,
				cancelToken: t.token,
			},
		);
		if (l && l.data && l.data.sharedfiles) {
			h5(() => {
				l.data.sharedfiles.forEach((e, t) => {
					this.m_mapSharedFile.set(e.sharedfileid, e);
					r.push(e);
				});
			});
		}
		return r;
	}
}
Cg([s.sH], l.prototype, "m_mapYouTubeVideo", undefined);
Cg([s.sH], l.prototype, "m_mapSharedFile", undefined);
export const R = new l();
