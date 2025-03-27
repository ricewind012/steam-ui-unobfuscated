import n, { xv } from "./72476.js";
import i from "./89193.js";
import a from "./83957.js";
const _s = a;
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
		const t = `${
			n.TS.COMMUNITY_CDN_URL
		}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(
			n.TS.LANGUAGE,
		)}&origin=${xv()}`;
		this.m_inflightRequests[e] = true;
		try {
			const { data } = await _s.get(t);
			if (
				!((e) =>
					e &&
					typeof e == "object" &&
					typeof e.appid == "number" &&
					typeof e.app_name == "string")(data)
			) {
				this.m_mapEmoticonHovers.set(e, null);
			} else {
				this.m_mapEmoticonHovers.set(e, data);
			}
		} catch (t) {
			this.m_mapEmoticonHovers.set(e, null);
		} finally {
			this.m_inflightRequests[e] = false;
		}
	}
}
export const s = new h();
