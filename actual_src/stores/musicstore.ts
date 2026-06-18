// Webpack module ID: 90985

import { action, computed, makeAutoObservable, observable } from "mobx";

import { Dt } from "./63367.js";

class CMusicStore {
	@observable m_playbackState = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	Init() {
		SteamClient.Music.RegisterForMusicPlaybackChanges((e) => {
			this.updatePlaybackState(e);
		});
		Dt.RegisterForRunSteamURL(7, "open/musicplayer", (e, t) => {});
		Dt.RegisterForRunSteamURL(4, "open/musicplayer", (e, t) => {});
	}

	@action updatePlaybackState(e) {
		this.m_playbackState = e || undefined;
	}

	@computed get volume() {
		return this.m_playbackState.nVolume;
	}
	@computed get percentageVolume() {
		return this.m_playbackState.nVolume / 100;
	}
	@computed get playbackState() {
		return this.m_playbackState;
	}
	@computed get currentActiveTrack() {
		return this.m_playbackState.nActiveTrack;
	}
}
export const l = new CMusicStore();
