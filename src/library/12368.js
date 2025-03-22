export class P {
	async GetObject(e, t) {
		try {
			const n = await this.GetString(e);
			if (n) {
				return JSON.parse(n, t);
			} else {
				return null;
			}
		} catch {
			return null;
		}
	}
	async StoreObject(e, t) {
		return this.StoreString(e, JSON.stringify(t));
	}
}
