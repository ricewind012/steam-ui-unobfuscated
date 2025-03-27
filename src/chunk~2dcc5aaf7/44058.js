import n from "./83957.js";
import { sH } from "./89193.js";
import s, { H } from "./16154.js";
import o from "./72476.js";
import l from "./20711.js";
const i = n;
export class K {
	static s_VODStore;
	m_mapAppToVOD = new Map();
	GetVODForAppID(e) {
		return this.m_mapAppToVOD.get(e);
	}
	async LoadVODForAppID(e, t) {
		if (this.m_mapAppToVOD.has(e)) {
			return this.m_mapAppToVOD.get(e);
		}
		const r = `${o.TS.STORE_BASE_URL}video/details/${e}/0`;
		const n = {};
		try {
			let s = await i.get(r, {
				params: n,
				withCredentials: true,
				cancelToken: t ? t.token : undefined,
			});
			if (t && t.token.reason) {
				return null;
			}
			if (
				s &&
				s.status == 200 &&
				s.data &&
				(s.data.success == 1 || s.data.success == "ready")
			) {
				let t = sH({
					appid: e,
					video_url: s.data.video_url,
					bookmark: s.data.bookmark,
				});
				if (s.data.bookmark) {
					l.t.Get().SetBookmarkForApp(e, s.data.bookmark);
				} else {
					l.t.Get().InitializeBookmarkForApp(e);
				}
				this.m_mapAppToVOD.set(e, t);
				return t;
			}
		} catch (e) {
			let t = H(e);
			console.error(
				`CVideoOnDemandStore:LoadVODForAppID: Failed ${t.strErrorMsg}`,
				t,
			);
		}
		return null;
	}
	static Get() {
		if (!K.s_VODStore) {
			K.s_VODStore = new K();
			K.s_VODStore.Init();
		}
		return K.s_VODStore;
	}
	Init() {}
}
