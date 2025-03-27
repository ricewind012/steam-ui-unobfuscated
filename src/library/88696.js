import r from "./12368.js";
import { w } from "./49455.js";
import s from "./59139.js";
export class A extends r.P {
	async GetString(e) {
		try {
			w(
				s.W.BHasUser(),
				`Attempted to fetch key ${e} from user local config before a user was logged in`,
			);
			return await SteamClient.Storage.GetString(e);
		} catch (e) {
			return null;
		}
	}
	async StoreString(e, t) {
		w(
			s.W.BHasUser(),
			`Attempted to write key ${e} user local config before a user was logged in`,
		);
		return SteamClient.Storage.SetString(e, t);
	}
	async RemoveObject(e) {
		try {
			w(
				s.W.BHasUser(),
				`Attempted to remove key ${e} user local config before a user was logged in`,
			);
			return await SteamClient.Storage.DeleteKey(e);
		} catch (e) {}
	}
}
