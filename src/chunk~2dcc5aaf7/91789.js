import n from "./12368.js";
export class A extends n.P {
	async GetString(e) {
		try {
			return await SteamClient.Storage.GetString(e).then((t) => {
				if (t) {
					return t;
				}
				let r = localStorage.getItem(e);
				if (r) {
					SteamClient.Storage.SetString(e, r);
				}
				return r;
			});
		} catch (e) {
			return null;
		}
	}
	StoreString(e, t) {
		SteamClient.Storage.SetString(e, t);
		return Promise.resolve();
	}
	RemoveObject(e) {
		SteamClient.Storage.DeleteKey(e);
		return Promise.resolve();
	}
}
