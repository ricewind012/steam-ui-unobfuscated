import r from "./37976.js";
import i from "./44846.js";
import s from "./72476.js";
export class b {
	m_ulSteamID;
	constructor(e = 0, t, n, i) {
		if (e instanceof b) {
			this.m_ulSteamID = e.m_ulSteamID;
		} else if (typeof e == "string") {
			this.m_ulSteamID = r.A.fromString(e, true);
		} else if (t && n && i !== undefined) {
			this.SetFromComponents(e ?? 0, i, n, t);
		} else {
			this.m_ulSteamID = e ? r.A.fromNumber(e, true) : r.A.UZERO;
		}
	}
	static InitFromAccountID(e) {
		return new b(Number(e), s.TS.EUNIVERSE, 1, i.ke);
	}
	static InitFromClanID(e) {
		return new b(Number(e), s.TS.EUNIVERSE, 7, 0);
	}
	GetAccountID() {
		return this.m_ulSteamID.getLowBitsUnsigned();
	}
	GetInstance() {
		return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
	}
	GetAccountType() {
		return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
	}
	GetUniverse() {
		return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
	}
	ConvertTo64BitString() {
		return this.m_ulSteamID.toString();
	}
	Render() {
		switch (this.GetAccountType()) {
			case 0: {
				return `[I:${this.GetUniverse()}:${this.GetAccountID()}]`;
			}
			case 7: {
				return `[g:${this.GetUniverse()}:${this.GetAccountID()}]`;
			}
			case 4: {
				return `[A:${this.GetUniverse()}:${this.GetAccountID()}:${this.GetInstance()}]`;
			}
			case 3: {
				return `[G:${this.GetUniverse()}:${this.GetAccountID()}]`;
			}
			case 2: {
				return `[M:${this.GetUniverse()}:${this.GetAccountID()}:${this.GetInstance()}]`;
			}
			case 5: {
				return `[P:${this.GetUniverse()}:${this.GetAccountID()}]`;
			}
			case 6: {
				return `[C:${this.GetUniverse()}:${this.GetAccountID()}]`;
			}
			default: {
				return `[U:${this.GetUniverse()}:${this.GetAccountID()}]`;
			}
		}
	}
	static InitFromString(e) {
		let t = new b();
		try {
			let [n, r, i, s, o] =
				e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [];
			let a = Number(i);
			let c = Number(s);
			let l = o ? Number(o) : 1;
			switch (r) {
				case "I": {
					t.SetFromComponents(c, l, 0, a);
				}
				case "g": {
					t.SetFromComponents(c, 0, 7, a);
				}
				case "A": {
					t.SetFromComponents(c, l, 4, a);
				}
				case "G": {
					t.SetFromComponents(c, l, 3, a);
				}
				case "M": {
					t.SetFromComponents(c, l, 2, a);
				}
				case "P": {
					t.SetFromComponents(c, l, 5, a);
				}
				case "C": {
					t.SetFromComponents(c, l, 6, a);
				}
				case "U": {
					t.SetFromComponents(c, l, 1, a);
				}
			}
		} catch (e) {}
		return t;
	}
	BIsValid() {
		let e = this.GetAccountType();
		if (e <= 0 || e >= 11) {
			return false;
		}
		let t = this.GetUniverse();
		if (t <= 0 || t >= 5) {
			return false;
		}
		if (e == 1) {
			if (this.GetAccountID() == 0 || this.GetInstance() > i.im) {
				return false;
			}
		} else if (e == 7) {
			if (this.GetAccountID() == 0 || this.GetInstance() != 0) {
				return false;
			}
		} else if (e == 3 && this.GetAccountID() == 0) {
			return false;
		}
		return true;
	}
	BIsIndividualAccount() {
		return this.GetAccountType() == 1;
	}
	BIsClanAccount() {
		return this.GetAccountType() == 7;
	}
	SetAccountID(e) {
		this.m_ulSteamID = new r.A(e, this.m_ulSteamID.getHighBitsUnsigned(), true);
	}
	SetInstance(e) {
		this.SetFromComponents(
			this.GetAccountID(),
			e,
			this.GetAccountType(),
			this.GetUniverse(),
		);
	}
	SetAccountType(e) {
		this.SetFromComponents(
			this.GetAccountID(),
			this.GetInstance(),
			e,
			this.GetUniverse(),
		);
	}
	SetUniverse(e) {
		this.SetFromComponents(
			this.GetAccountID(),
			this.GetInstance(),
			this.GetAccountType(),
			e,
		);
	}
	SetFromComponents(e, t, n, i) {
		let s = ((i & 255) << 24) + ((n & 15) << 20) + (t & 1048575);
		let o = e & 4294967295;
		this.m_ulSteamID = new r.A(o, s, true);
	}
}
