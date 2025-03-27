import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./63367.js";
class s {
	m_playbackState = undefined;
	constructor() {
		Gn(this);
	}
	Init() {
		SteamClient.Music.RegisterForMusicPlaybackChanges((e) => {
			this.updatePlaybackState(e);
		});
		a.Dt.RegisterForRunSteamURL(7, "open/musicplayer", (e, t) => {});
		a.Dt.RegisterForRunSteamURL(4, "open/musicplayer", (e, t) => {});
	}
	updatePlaybackState(e) {
		this.m_playbackState = e || undefined;
	}
	get volume() {
		return this.m_playbackState.nVolume;
	}
	get percentageVolume() {
		return this.m_playbackState.nVolume / 100;
	}
	get playbackState() {
		return this.m_playbackState;
	}
	get currentActiveTrack() {
		return this.m_playbackState.nActiveTrack;
	}
}
Cg([i.sH], s.prototype, "m_playbackState", undefined);
Cg([i.XI], s.prototype, "updatePlaybackState", null);
Cg([i.EW], s.prototype, "volume", null);
Cg([i.EW], s.prototype, "percentageVolume", null);
Cg([i.EW], s.prototype, "playbackState", null);
Cg([i.EW], s.prototype, "currentActiveTrack", null);
export const l = new s();
