var r = require("./12368.js");
var i = require("./49455.js");
var s = require("./59139.js");
export class A extends r.P {
	async GetString(e) {
		try {
			(0, i.w)(
				s.W.BHasUser(),
				`Attempted to fetch key ${e} from user local config before a user was logged in`,
			);
			return await SteamClient.Storage.GetString(e);
		} catch (e) {
			return null;
		}
	}
	async StoreString(e, t) {
		(0, i.w)(
			s.W.BHasUser(),
			`Attempted to write key ${e} user local config before a user was logged in`,
		);
		return SteamClient.Storage.SetString(e, t);
	}
	async RemoveObject(e) {
		try {
			(0, i.w)(
				s.W.BHasUser(),
				`Attempted to remove key ${e} user local config before a user was logged in`,
			);
			return await SteamClient.Storage.DeleteKey(e);
		} catch (e) {}
	}
}
