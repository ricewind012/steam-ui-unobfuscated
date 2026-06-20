import { AssertMsg } from "@actual_src/utils/assert.js";
import { bind } from "@actual_src/utils/bind.js";

class CSteamURLStore {
	m_uiMode;
	m_mapModeToCallbacks = new Map();
	m_mapRegisteredCallbacks = new Map();

	async InitWithoutUser() {
		SteamClient.UI.RegisterForUIModeChanged(this.OnUIModeChanged);
		return Promise.resolve();
	}

	RegisteredCallbackKey(e, t) {
		return `${t}:${e}`;
	}

	RegisterForRunSteamURL(e, t, r) {
		if (typeof e != "number") {
			const n = e.map((e) => this.RegisterForRunSteamURL(e, t, r));
			return {
				unregister: () => n.forEach((e) => e.unregister()),
			};
		}
		if (!this.m_mapModeToCallbacks.has(e)) {
			this.m_mapModeToCallbacks.set(e, new Map());
		}
		this.m_mapModeToCallbacks.get(e).set(t, r);
		if (this.m_uiMode == e) {
			this.RegisterForUIMode(e, t, r);
		}
		return {
			unregister: () => {
				const r = this.RegisteredCallbackKey(t, e);
				this.m_mapRegisteredCallbacks.get(r)?.unregister();
				this.m_mapRegisteredCallbacks.delete(r);
				this.m_mapModeToCallbacks.get(e)?.delete(t);
			},
		};
	}

	RegisterForUIMode(e, t, r) {
		if (this.m_mapModeToCallbacks.has(e)) {
			const n = this.RegisteredCallbackKey(t, e);
			AssertMsg(
				!this.m_mapRegisteredCallbacks.has(n),
				`Reregistering callback for ${t} in mode ${e}`,
			);
			if (!this.m_mapRegisteredCallbacks.has(n)) {
				this.m_mapRegisteredCallbacks.set(
					n,
					SteamClient.URL.RegisterForRunSteamURL(t, r),
				);
			}
		}
	}

	@bind
	OnUIModeChanged(e) {
		if (e !== this.m_uiMode) {
			this.m_mapRegisteredCallbacks.forEach((e, t) => {
				e.unregister();
			});
			this.m_mapRegisteredCallbacks.clear();
			this.m_uiMode = e;
			if (this.m_mapModeToCallbacks.has(e)) {
				this.m_mapModeToCallbacks.get(e).forEach((t, r) => {
					this.RegisterForUIMode(e, r, t);
				});
			}
			this.m_uiMode = e;
		}
	}
}

export const Dt = new CSteamURLStore();

export function zK(strSteamURL, t) {
	const r = {
		strProtocol: "",
		strSteamURL: "",
		strRest: "",
		rgParts: [],
		params: {},
	};
	const strProtocol = new URL(t).protocol;
	const i = `${strProtocol}//${strSteamURL}`;
	if (!t.startsWith(i)) {
		return r;
	}
	let strRest = t.slice(i.length);
	if (strRest.startsWith("/")) {
		strRest = strRest.slice(1);
	}
	r.strRest = strRest;
	const [s, o] = strRest.split("?");
	r.rgParts = s.split("/").filter(Boolean);
	new URLSearchParams(o).forEach((e, t) => (r.params[t] = e));
	r.strProtocol = strProtocol;
	r.strSteamURL = strSteamURL;
	return r;
}
