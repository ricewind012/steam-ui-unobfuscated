var n = require(/*webcrack:missing*/ "./12368.js");
var i = require(/*webcrack:missing*/ "./49455.js");
var a = require(/*webcrack:missing*/ "./59139.js");
export class O extends n.P {
	async GetString(e) {
		(0, i.w)(
			a.W.BHasUser(),
			`Attempted to fetch key ${e} from user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.GetString(e);
	}
	async StoreString(e, t) {
		(0, i.w)(
			a.W.BHasUser(),
			`Attempted to write key ${e} user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.SetString(e, t);
	}
	async RemoveObject(e) {
		(0, i.w)(
			a.W.BHasUser(),
			`Attempted to remove key ${e} user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.DeleteKey(e);
	}
	async GetObject(e) {
		(0, i.w)(
			a.W.BHasUser(),
			`Attempted to fetch key ${e} user roaming config before a user was logged in`,
		);
		const t = await SteamClient.RoamingStorage.GetJSON(e);
		return JSON.parse(t);
	}
	async StoreObject(e, t) {
		(0, i.w)(
			a.W.BHasUser(),
			`Attempted to write key ${e} user roaming config before a user was logged in`,
		);
		return SteamClient.RoamingStorage.SetObject(e, t);
	}
}
