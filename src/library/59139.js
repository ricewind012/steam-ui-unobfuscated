import r, { Cg } from "./34629.js";
import i from "./93960.js";
class s {
	m_eLoginState;
	constructor() {
		SteamClient.User?.RegisterForLoginStateChange?.(this.OnLoginStateChange);
	}
	OnLoginStateChange(e, t, n, r, i, s) {
		this.m_eLoginState = t;
	}
	BHasUser() {
		return this.m_eLoginState == 6 || this.m_eLoginState == 7;
	}
}
Cg([i.o], s.prototype, "OnLoginStateChange", null);
export const W = new s();
