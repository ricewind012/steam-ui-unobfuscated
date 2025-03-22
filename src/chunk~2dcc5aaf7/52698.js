var n = require(/*webcrack:missing*/ "./12368.js");
export class g extends n.P {
	async GetString(e) {
		try {
			return await SteamClient.MachineStorage.GetString(e);
		} catch (e) {
			return null;
		}
	}
	async StoreString(e, t) {
		return SteamClient.MachineStorage.SetString(e, t);
	}
	async RemoveObject(e) {
		return SteamClient.MachineStorage.DeleteKey(e);
	}
}
