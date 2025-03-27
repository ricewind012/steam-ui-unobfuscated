import n from "./12368.js";
import { w } from "./49455.js";
import a from "./59139.js";
export class O extends n.P {
	async GetString(e) {
		w(
			a.W.BHasUser(),
			`Attempted to fetch key ${e} from user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.GetString(e);
	}
	async StoreString(e, t) {
		w(
			a.W.BHasUser(),
			`Attempted to write key ${e} user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.SetString(e, t);
	}
	async RemoveObject(e) {
		w(
			a.W.BHasUser(),
			`Attempted to remove key ${e} user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.DeleteKey(e);
	}
	async GetObject(e) {
		w(
			a.W.BHasUser(),
			`Attempted to fetch key ${e} user roaming config before a user was logged in`,
		);
		const t = await SteamClient.RoamingStorage.GetJSON(e);
		return JSON.parse(t);
	}
	async StoreObject(e, t) {
		w(
			a.W.BHasUser(),
			`Attempted to write key ${e} user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.SetObject(e, t);
	}
}
