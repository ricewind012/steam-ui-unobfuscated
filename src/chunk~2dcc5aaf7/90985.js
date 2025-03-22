var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require("./63367.js");
class s {
	m_playbackState = undefined;
	constructor() {
		(0, i.Gn)(this);
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
(0, n.Cg)([i.sH], s.prototype, "m_playbackState", undefined);
(0, n.Cg)([i.XI], s.prototype, "updatePlaybackState", null);
(0, n.Cg)([i.EW], s.prototype, "volume", null);
(0, n.Cg)([i.EW], s.prototype, "percentageVolume", null);
(0, n.Cg)([i.EW], s.prototype, "playbackState", null);
(0, n.Cg)([i.EW], s.prototype, "currentActiveTrack", null);
export const l = new s();
