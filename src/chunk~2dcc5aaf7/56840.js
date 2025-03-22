var n = require(/*webcrack:missing*/ "./72476.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./83957.js");
var _s = a;
export class h {
	m_mapEmoticonHovers = i.sH.map();
	m_inflightRequests = {};
	Get(e) {
		if (this.m_mapEmoticonHovers.has(e) || this.m_inflightRequests[e]) {
			return this.m_mapEmoticonHovers.get(e);
		} else {
			this.Load(e);
			return null;
		}
	}
	BLoaded(e) {
		return !!this.m_mapEmoticonHovers.get(e);
	}
	async Load(e) {
		const t = `${n.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(n.TS.LANGUAGE)}&origin=${(0, n.xv)()}`;
		this.m_inflightRequests[e] = true;
		try {
			const { data: r } = await _s.get(t);
			if (
				!(function (e) {
					return (
						e &&
						typeof e == "object" &&
						typeof e.appid == "number" &&
						typeof e.app_name == "string"
					);
				})(r)
			) {
				this.m_mapEmoticonHovers.set(e, null);
			} else {
				this.m_mapEmoticonHovers.set(e, r);
			}
		} catch (t) {
			this.m_mapEmoticonHovers.set(e, null);
		} finally {
			this.m_inflightRequests[e] = false;
		}
	}
}
export const s = new h();
