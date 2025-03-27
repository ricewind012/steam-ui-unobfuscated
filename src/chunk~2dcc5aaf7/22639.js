import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./87935.js";
class s {
	displayName;
	durationSeconds;
}
class o {
	trackInfo = new Map();
}
class l {
	m_strArtist;
}
class c {
	m_nAppID;
	m_nTotalTrackCount;
	m_nTotalDurationSeconds;
	m_Metadata;
	m_DiscInfo;
	m_vecAdditionalImageAssetURLs;
	constructor(e, t) {
		this.m_nAppID = e;
		if (t) {
			const r = `${a.B7.GetCommunityImageURL()}images/apps/${e}/`;
			this.m_nTotalTrackCount = t.tracks.length;
			this.m_nTotalDurationSeconds = t.tracks.reduce(
				(e, t) => e + t.durationSeconds,
				0,
			);
			this.m_Metadata = new l();
			this.m_Metadata.m_strArtist = t.metadata.artist;
			this.m_vecAdditionalImageAssetURLs = t.vecAdditionalImageAssetURLs.map(
				(e) => `${r + e}.jpg`,
			);
			this.m_DiscInfo = this.ConvertLinearTrackListIntoStructuredDiscs(t);
		}
	}
	ConvertLinearTrackListIntoStructuredDiscs(e) {
		let t = new Map();
		Array.from(new Set(e.tracks.map((e) => e.discNumber))).forEach((r) => {
			let n = new o();
			e.tracks.forEach((e) => {
				if (e.discNumber == r) {
					let t = new s();
					t.displayName = e.trackDisplayName;
					t.durationSeconds = e.durationSeconds;
					n.trackInfo.set(e.trackNumber, t);
				}
			});
			t.set(r, n);
		});
		return t;
	}
}
class m {
	constructor() {
		Gn(this);
	}
	m_mapSoundtrackDetailsData = new Map();
	GetSoundtrackDetails(e) {
		if (!this.m_mapSoundtrackDetailsData.has(e)) {
			this.m_mapSoundtrackDetailsData.set(e, new c(e, null));
			this.FetchSoundtrackDetails(e);
		}
		return this.m_mapSoundtrackDetailsData.get(e);
	}
	async FetchSoundtrackDetails(e) {
		const t = await SteamClient.Apps.GetSoundtrackDetails(e);
		this.m_mapSoundtrackDetailsData.set(e, new c(e, t));
	}
	GetTrackDetails(e, t) {
		let r;
		let n = ET.GetSoundtrackDetails(e)?.m_DiscInfo;
		if (!n || n.size == 0) {
			return null;
		}
		let i = 0;
		n.forEach((e, n) => {
			e.trackInfo.forEach((e, n) => {
				if (i == t) {
					r = e;
				}
				i++;
			});
		});
		return r;
	}
}
Cg([i.sH.shallow], m.prototype, "m_mapSoundtrackDetailsData", undefined);
export const ET = new m();
