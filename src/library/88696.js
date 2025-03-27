import r from "./12368.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import s from "./59139.js";
export class A extends r.P {
	async GetString(e) {
		try {
			AssertMsg(
				s.W.BHasUser(),
				`Attempted to fetch key ${e} from user local config before a user was logged in`,
			);
			return await SteamClient.Storage.GetString(e);
		} catch (e) {
			return null;
		}
	}
	async StoreString(e, t) {
		AssertMsg(
			s.W.BHasUser(),
			`Attempted to write key ${e} user local config before a user was logged in`,
		);
		return SteamClient.Storage.SetString(e, t);
	}
	async RemoveObject(e) {
		try {
			AssertMsg(
				s.W.BHasUser(),
				`Attempted to remove key ${e} user local config before a user was logged in`,
			);
			return await SteamClient.Storage.DeleteKey(e);
		} catch (e) {}
	}
}
