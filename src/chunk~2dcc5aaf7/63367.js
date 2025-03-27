import n, { Cg } from "./34629.js";
import i from "./52451.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
class s {
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
Cg([i.oI], s.prototype, "OnUIModeChanged", null);
export const Dt = new s();
export function zK(e, t) {
	const r = {
		strProtocol: "",
		strSteamURL: "",
		strRest: "",
		rgParts: [],
		params: {},
	};
	const n = new URL(t).protocol;
	const i = `${n}//${e}`;
	if (!t.startsWith(i)) {
		return r;
	}
	let a = t.slice(i.length);
	if (a.startsWith("/")) {
		a = a.slice(1);
	}
	r.strRest = a;
	const [s, o] = a.split("?");
	r.rgParts = s.split("/").filter(Boolean);
	new URLSearchParams(o).forEach((e, t) => (r.params[t] = e));
	r.strProtocol = n;
	r.strSteamURL = e;
	return r;
}
