export var TU;
export function nA(e) {
	return e === TU.k_ESteamRealmChina;
}
(function (e) {
	e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown";
	e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal";
	e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina";
})((TU ||= {}));
export class hw {
	m_rgHandles = [];
	Add(e) {
		if (e) {
			this.m_rgHandles.push(e);
		}
	}
	Unregister() {
		const e = this.m_rgHandles;
		this.m_rgHandles = [];
		for (const t of e) {
			if (t) {
				t.unregister();
			}
		}
	}
}
