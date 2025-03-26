var n;
function i(e, t, r) {
	if (e != null) {
		if (typeof e == "number") {
			this.fromNumber(e, t, r);
		} else if (t == null && typeof e != "string") {
			this.fromString(e, 256);
		} else {
			this.fromString(e, t);
		}
	}
}
function a() {
	return new i(null);
}
if (navigator.appName == "Microsoft Internet Explorer") {
	i.prototype.am = function (e, t, r, n, i, a) {
		var s = t & 32767;
		var o = t >> 15;
		while (--a >= 0) {
			var l = this[e] & 32767;
			var c = this[e++] >> 15;
			var m = o * l + c * s;
			i =
				((l = s * l + ((m & 32767) << 15) + r[n] + (i & 1073741823)) >>> 30) +
				(m >>> 15) +
				o * c +
				(i >>> 30);
			r[n++] = l & 1073741823;
		}
		return i;
	};
	n = 30;
} else if (navigator.appName != "Netscape") {
	i.prototype.am = function (e, t, r, n, i, a) {
		while (--a >= 0) {
			var s = t * this[e++] + r[n] + i;
			i = Math.floor(s / 67108864);
			r[n++] = s & 67108863;
		}
		return i;
	};
	n = 26;
} else {
	i.prototype.am = function (e, t, r, n, i, a) {
		var s = t & 16383;
		var o = t >> 14;
		while (--a >= 0) {
			var l = this[e] & 16383;
			var c = this[e++] >> 14;
			var m = o * l + c * s;
			i =
				((l = s * l + ((m & 16383) << 14) + r[n] + i) >> 28) +
				(m >> 14) +
				o * c;
			r[n++] = l & 268435455;
		}
		return i;
	};
	n = 28;
}
i.prototype.DB = n;
i.prototype.DM = (1 << n) - 1;
i.prototype.DV = 1 << n;
i.prototype.FV = Math.pow(2, 52);
i.prototype.F1 = 52 - n;
i.prototype.F2 = n * 2 - 52;
var s;
var o;
var l = "0123456789abcdefghijklmnopqrstuvwxyz";
var c = new Array();
s = "0".charCodeAt(0);
o = 0;
for (; o <= 9; ++o) {
	c[s++] = o;
}
s = "a".charCodeAt(0);
o = 10;
for (; o < 36; ++o) {
	c[s++] = o;
}
s = "A".charCodeAt(0);
o = 10;
for (; o < 36; ++o) {
	c[s++] = o;
}
function m(e) {
	return l.charAt(e);
}
function u(e, t) {
	var r = c[e.charCodeAt(t)];
	if (r == null) {
		return -1;
	} else {
		return r;
	}
}
function d(e) {
	var t = a();
	t.fromInt(e);
	return t;
}
function _A(e) {
	var t;
	var r = 1;
	if ((t = e >>> 16) != 0) {
		e = t;
		r += 16;
	}
	if ((t = e >> 8) != 0) {
		e = t;
		r += 8;
	}
	if ((t = e >> 4) != 0) {
		e = t;
		r += 4;
	}
	if ((t = e >> 2) != 0) {
		e = t;
		r += 2;
	}
	if ((t = e >> 1) != 0) {
		e = t;
		r += 1;
	}
	return r;
}
function p(e) {
	this.m = e;
}
function g(e) {
	this.m = e;
	this.mp = e.invDigit();
	this.mpl = this.mp & 32767;
	this.mph = this.mp >> 15;
	this.um = (1 << (e.DB - 15)) - 1;
	this.mt2 = e.t * 2;
}
function h(e, t) {
	return e & t;
}
function C(e, t) {
	return e | t;
}
function _(e, t) {
	return e ^ t;
}
function f(e, t) {
	return e & ~t;
}
function b(e) {
	if (e == 0) {
		return -1;
	}
	var t = 0;
	if ((e & 65535) == 0) {
		e >>= 16;
		t += 16;
	}
	if ((e & 255) == 0) {
		e >>= 8;
		t += 8;
	}
	if ((e & 15) == 0) {
		e >>= 4;
		t += 4;
	}
	if ((e & 3) == 0) {
		e >>= 2;
		t += 2;
	}
	if ((e & 1) == 0) {
		++t;
	}
	return t;
}
function y(e) {
	var t = 0;
	for (; e != 0; ) {
		e &= e - 1;
		++t;
	}
	return t;
}
function S() {}
function w(e) {
	return e;
}
function B(e) {
	this.r2 = a();
	this.q3 = a();
	i.ONE.dlShiftTo(e.t * 2, this.r2);
	this.mu = this.r2.divide(e);
	this.m = e;
}
p.prototype.convert = function (e) {
	if (e.s < 0 || e.compareTo(this.m) >= 0) {
		return e.mod(this.m);
	} else {
		return e;
	}
};
p.prototype.revert = function (e) {
	return e;
};
p.prototype.reduce = function (e) {
	e.divRemTo(this.m, null, e);
};
p.prototype.mulTo = function (e, t, r) {
	e.multiplyTo(t, r);
	this.reduce(r);
};
p.prototype.sqrTo = function (e, t) {
	e.squareTo(t);
	this.reduce(t);
};
g.prototype.convert = function (e) {
	var t = a();
	e.abs().dlShiftTo(this.m.t, t);
	t.divRemTo(this.m, null, t);
	if (e.s < 0 && t.compareTo(i.ZERO) > 0) {
		this.m.subTo(t, t);
	}
	return t;
};
g.prototype.revert = function (e) {
	var t = a();
	e.copyTo(t);
	this.reduce(t);
	return t;
};
g.prototype.reduce = function (e) {
	while (e.t <= this.mt2) {
		e[e.t++] = 0;
	}
	for (var t = 0; t < this.m.t; ++t) {
		var r = e[t] & 32767;
		var n =
			(r * this.mpl +
				(((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
			e.DM;
		for (
			e[(r = t + this.m.t)] += this.m.am(0, n, e, t, 0, this.m.t);
			e[r] >= e.DV;

		) {
			e[r] -= e.DV;
			e[++r]++;
		}
	}
	e.clamp();
	e.drShiftTo(this.m.t, e);
	if (e.compareTo(this.m) >= 0) {
		e.subTo(this.m, e);
	}
};
g.prototype.mulTo = function (e, t, r) {
	e.multiplyTo(t, r);
	this.reduce(r);
};
g.prototype.sqrTo = function (e, t) {
	e.squareTo(t);
	this.reduce(t);
};
i.prototype.copyTo = function (e) {
	for (var t = this.t - 1; t >= 0; --t) {
		e[t] = this[t];
	}
	e.t = this.t;
	e.s = this.s;
};
i.prototype.fromInt = function (e) {
	this.t = 1;
	this.s = e < 0 ? -1 : 0;
	if (e > 0) {
		this[0] = e;
	} else if (e < -1) {
		this[0] = e + DV;
	} else {
		this.t = 0;
	}
};
i.prototype.fromString = function (e, t) {
	var r;
	if (t == 16) {
		r = 4;
	} else if (t == 8) {
		r = 3;
	} else if (t == 256) {
		r = 8;
	} else if (t == 2) {
		r = 1;
	} else if (t == 32) {
		r = 5;
	} else {
		if (t != 4) {
			this.fromRadix(e, t);
			return;
		}
		r = 2;
	}
	this.t = 0;
	this.s = 0;
	for (var n = e.length, a = false, s = 0; --n >= 0; ) {
		var o = r == 8 ? e[n] & 255 : u(e, n);
		if (o < 0) {
			if (e.charAt(n) == "-") {
				a = true;
			}
		} else {
			a = false;
			if (s == 0) {
				this[this.t++] = o;
			} else if (s + r > this.DB) {
				this[this.t - 1] |= (o & ((1 << (this.DB - s)) - 1)) << s;
				this[this.t++] = o >> (this.DB - s);
			} else {
				this[this.t - 1] |= o << s;
			}
			if ((s += r) >= this.DB) {
				s -= this.DB;
			}
		}
	}
	if (r == 8 && (e[0] & 128) != 0) {
		this.s = -1;
		if (s > 0) {
			this[this.t - 1] |= ((1 << (this.DB - s)) - 1) << s;
		}
	}
	this.clamp();
	if (a) {
		i.ZERO.subTo(this, this);
	}
};
i.prototype.clamp = function () {
	for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; ) {
		--this.t;
	}
};
i.prototype.dlShiftTo = function (e, t) {
	var r;
	for (r = this.t - 1; r >= 0; --r) {
		t[r + e] = this[r];
	}
	for (r = e - 1; r >= 0; --r) {
		t[r] = 0;
	}
	t.t = this.t + e;
	t.s = this.s;
};
i.prototype.drShiftTo = function (e, t) {
	for (var r = e; r < this.t; ++r) {
		t[r - e] = this[r];
	}
	t.t = Math.max(this.t - e, 0);
	t.s = this.s;
};
i.prototype.lShiftTo = function (e, t) {
	var r;
	var n = e % this.DB;
	var i = this.DB - n;
	var a = (1 << i) - 1;
	var s = Math.floor(e / this.DB);
	var o = (this.s << n) & this.DM;
	for (r = this.t - 1; r >= 0; --r) {
		t[r + s + 1] = (this[r] >> i) | o;
		o = (this[r] & a) << n;
	}
	for (r = s - 1; r >= 0; --r) {
		t[r] = 0;
	}
	t[s] = o;
	t.t = this.t + s + 1;
	t.s = this.s;
	t.clamp();
};
i.prototype.rShiftTo = function (e, t) {
	t.s = this.s;
	var r = Math.floor(e / this.DB);
	if (r >= this.t) {
		t.t = 0;
	} else {
		var n = e % this.DB;
		var i = this.DB - n;
		var a = (1 << n) - 1;
		t[0] = this[r] >> n;
		for (var s = r + 1; s < this.t; ++s) {
			t[s - r - 1] |= (this[s] & a) << i;
			t[s - r] = this[s] >> n;
		}
		if (n > 0) {
			t[this.t - r - 1] |= (this.s & a) << i;
		}
		t.t = this.t - r;
		t.clamp();
	}
};
i.prototype.subTo = function (e, t) {
	for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; ) {
		n += this[r] - e[r];
		t[r++] = n & this.DM;
		n >>= this.DB;
	}
	if (e.t < this.t) {
		for (n -= e.s; r < this.t; ) {
			n += this[r];
			t[r++] = n & this.DM;
			n >>= this.DB;
		}
		n += this.s;
	} else {
		for (n += this.s; r < e.t; ) {
			n -= e[r];
			t[r++] = n & this.DM;
			n >>= this.DB;
		}
		n -= e.s;
	}
	t.s = n < 0 ? -1 : 0;
	if (n < -1) {
		t[r++] = this.DV + n;
	} else if (n > 0) {
		t[r++] = n;
	}
	t.t = r;
	t.clamp();
};
i.prototype.multiplyTo = function (e, t) {
	var r = this.abs();
	var n = e.abs();
	var a = r.t;
	for (t.t = a + n.t; --a >= 0; ) {
		t[a] = 0;
	}
	for (a = 0; a < n.t; ++a) {
		t[a + r.t] = r.am(0, n[a], t, a, 0, r.t);
	}
	t.s = 0;
	t.clamp();
	if (this.s != e.s) {
		i.ZERO.subTo(t, t);
	}
};
i.prototype.squareTo = function (e) {
	var t = this.abs();
	for (var r = (e.t = t.t * 2); --r >= 0; ) {
		e[r] = 0;
	}
	for (r = 0; r < t.t - 1; ++r) {
		var n = t.am(r, t[r], e, r * 2, 0, 1);
		if (
			(e[r + t.t] += t.am(r + 1, t[r] * 2, e, r * 2 + 1, n, t.t - r - 1)) >=
			t.DV
		) {
			e[r + t.t] -= t.DV;
			e[r + t.t + 1] = 1;
		}
	}
	if (e.t > 0) {
		e[e.t - 1] += t.am(r, t[r], e, r * 2, 0, 1);
	}
	e.s = 0;
	e.clamp();
};
i.prototype.divRemTo = function (e, t, r) {
	var n = e.abs();
	if (!(n.t <= 0)) {
		var s = this.abs();
		if (s.t < n.t) {
			if (t != null) {
				t.fromInt(0);
			}
			if (r != null) {
				this.copyTo(r);
			}
			return;
		}
		if (r == null) {
			r = a();
		}
		var o = a();
		var l = this.s;
		var c = e.s;
		var m = this.DB - _A(n[n.t - 1]);
		if (m > 0) {
			n.lShiftTo(m, o);
			s.lShiftTo(m, r);
		} else {
			n.copyTo(o);
			s.copyTo(r);
		}
		var u = o.t;
		var d = o[u - 1];
		if (d != 0) {
			var p = d * (1 << this.F1) + (u > 1 ? o[u - 2] >> this.F2 : 0);
			var g = this.FV / p;
			var h = (1 << this.F1) / p;
			var C = 1 << this.F2;
			var _ = r.t;
			var f = _ - u;
			var b = t == null ? a() : t;
			o.dlShiftTo(f, b);
			if (r.compareTo(b) >= 0) {
				r[r.t++] = 1;
				r.subTo(b, r);
			}
			i.ONE.dlShiftTo(u, b);
			b.subTo(o, o);
			while (o.t < u) {
				o[o.t++] = 0;
			}
			while (--f >= 0) {
				var y =
					r[--_] == d ? this.DM : Math.floor(r[_] * g + (r[_ - 1] + C) * h);
				if ((r[_] += o.am(0, y, r, f, 0, u)) < y) {
					o.dlShiftTo(f, b);
					r.subTo(b, r);
					while (r[_] < --y) {
						r.subTo(b, r);
					}
				}
			}
			if (t != null) {
				r.drShiftTo(u, t);
				if (l != c) {
					i.ZERO.subTo(t, t);
				}
			}
			r.t = u;
			r.clamp();
			if (m > 0) {
				r.rShiftTo(m, r);
			}
			if (l < 0) {
				i.ZERO.subTo(r, r);
			}
		}
	}
};
i.prototype.invDigit = function () {
	if (this.t < 1) {
		return 0;
	}
	var e = this[0];
	if ((e & 1) == 0) {
		return 0;
	}
	var t = e & 3;
	if (
		(t =
			((t =
				((t =
					((t = (t * (2 - (e & 15) * t)) & 15) * (2 - (e & 255) * t)) & 255) *
					(2 - (((e & 65535) * t) & 65535))) &
				65535) *
				(2 - ((e * t) % this.DV))) %
			this.DV) > 0
	) {
		return this.DV - t;
	} else {
		return -t;
	}
};
i.prototype.isEven = function () {
	return (this.t > 0 ? this[0] & 1 : this.s) == 0;
};
i.prototype.exp = function (e, t) {
	if (e > 4294967295 || e < 1) {
		return i.ONE;
	}
	var r = a();
	var n = a();
	var s = t.convert(this);
	var o = _A(e) - 1;
	for (s.copyTo(r); --o >= 0; ) {
		t.sqrTo(r, n);
		if ((e & (1 << o)) > 0) {
			t.mulTo(n, s, r);
		} else {
			var l = r;
			r = n;
			n = l;
		}
	}
	return t.revert(r);
};
i.prototype.toString = function (e) {
	if (this.s < 0) {
		return "-" + this.negate().toString(e);
	}
	var t;
	if (e == 16) {
		t = 4;
	} else if (e == 8) {
		t = 3;
	} else if (e == 2) {
		t = 1;
	} else if (e == 32) {
		t = 5;
	} else {
		if (e != 4) {
			return this.toRadix(e);
		}
		t = 2;
	}
	var r;
	var n = (1 << t) - 1;
	var i = false;
	var a = "";
	var s = this.t;
	var o = this.DB - ((s * this.DB) % t);
	if (s-- > 0) {
		for (
			o < this.DB && (r = this[s] >> o) > 0 && ((i = true), (a = m(r)));
			s >= 0;

		) {
			if (o < t) {
				r = (this[s] & ((1 << o) - 1)) << (t - o);
				r |= this[--s] >> (o += this.DB - t);
			} else {
				r = (this[s] >> (o -= t)) & n;
				if (o <= 0) {
					o += this.DB;
					--s;
				}
			}
			if (r > 0) {
				i = true;
			}
			if (i) {
				a += m(r);
			}
		}
	}
	if (i) {
		return a;
	} else {
		return "0";
	}
};
i.prototype.negate = function () {
	var e = a();
	i.ZERO.subTo(this, e);
	return e;
};
i.prototype.abs = function () {
	if (this.s < 0) {
		return this.negate();
	} else {
		return this;
	}
};
i.prototype.compareTo = function (e) {
	var t = this.s - e.s;
	if (t != 0) {
		return t;
	}
	var r = this.t;
	if ((t = r - e.t) != 0) {
		return t;
	}
	while (--r >= 0) {
		if ((t = this[r] - e[r]) != 0) {
			return t;
		}
	}
	return 0;
};
i.prototype.bitLength = function () {
	if (this.t <= 0) {
		return 0;
	} else {
		return this.DB * (this.t - 1) + _A(this[this.t - 1] ^ (this.s & this.DM));
	}
};
i.prototype.mod = function (e) {
	var t = a();
	this.abs().divRemTo(e, null, t);
	if (this.s < 0 && t.compareTo(i.ZERO) > 0) {
		e.subTo(t, t);
	}
	return t;
};
i.prototype.modPowInt = function (e, t) {
	var r;
	r = e < 256 || t.isEven() ? new p(t) : new g(t);
	return this.exp(e, r);
};
i.ZERO = d(0);
i.ONE = d(1);
S.prototype.convert = w;
S.prototype.revert = w;
S.prototype.mulTo = function (e, t, r) {
	e.multiplyTo(t, r);
};
S.prototype.sqrTo = function (e, t) {
	e.squareTo(t);
};
B.prototype.convert = function (e) {
	if (e.s < 0 || e.t > this.m.t * 2) {
		return e.mod(this.m);
	}
	if (e.compareTo(this.m) < 0) {
		return e;
	}
	var t = a();
	e.copyTo(t);
	this.reduce(t);
	return t;
};
B.prototype.revert = function (e) {
	return e;
};
B.prototype.reduce = function (e) {
	e.drShiftTo(this.m.t - 1, this.r2);
	if (e.t > this.m.t + 1) {
		e.t = this.m.t + 1;
		e.clamp();
	}
	this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
	this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
	while (e.compareTo(this.r2) < 0) {
		e.dAddOffset(1, this.m.t + 1);
	}
	for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; ) {
		e.subTo(this.m, e);
	}
};
B.prototype.mulTo = function (e, t, r) {
	e.multiplyTo(t, r);
	this.reduce(r);
};
B.prototype.sqrTo = function (e, t) {
	e.squareTo(t);
	this.reduce(t);
};
var v = [
	2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
	73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
	157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
	239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
	331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
	421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
	509,
];
var I = 67108864 / v[v.length - 1];
i.prototype.chunkSize = function (e) {
	return Math.floor((Math.LN2 * this.DB) / Math.log(e));
};
i.prototype.toRadix = function (e) {
	if (e == null) {
		e = 10;
	}
	if (this.signum() == 0 || e < 2 || e > 36) {
		return "0";
	}
	var t = this.chunkSize(e);
	var r = Math.pow(e, t);
	var n = d(r);
	var i = a();
	var s = a();
	var o = "";
	for (this.divRemTo(n, i, s); i.signum() > 0; ) {
		o = (r + s.intValue()).toString(e).substr(1) + o;
		i.divRemTo(n, i, s);
	}
	return s.intValue().toString(e) + o;
};
i.prototype.fromRadix = function (e, t) {
	this.fromInt(0);
	if (t == null) {
		t = 10;
	}
	var r = this.chunkSize(t);
	var n = Math.pow(t, r);
	var a = false;
	var s = 0;
	var o = 0;
	for (var l = 0; l < e.length; ++l) {
		var c = u(e, l);
		if (c < 0) {
			if (e.charAt(l) == "-" && this.signum() == 0) {
				a = true;
			}
		} else {
			o = t * o + c;
			if (++s >= r) {
				this.dMultiply(n);
				this.dAddOffset(o, 0);
				s = 0;
				o = 0;
			}
		}
	}
	if (s > 0) {
		this.dMultiply(Math.pow(t, s));
		this.dAddOffset(o, 0);
	}
	if (a) {
		i.ZERO.subTo(this, this);
	}
};
i.prototype.fromNumber = function (e, t, r) {
	if (typeof t == "number") {
		if (e < 2) {
			this.fromInt(1);
		} else {
			this.fromNumber(e, r);
			if (!this.testBit(e - 1)) {
				this.bitwiseTo(i.ONE.shiftLeft(e - 1), C, this);
			}
			if (this.isEven()) {
				this.dAddOffset(1, 0);
			}
			while (!this.isProbablePrime(t)) {
				this.dAddOffset(2, 0);
				if (this.bitLength() > e) {
					this.subTo(i.ONE.shiftLeft(e - 1), this);
				}
			}
		}
	} else {
		var n = new Array();
		var a = e & 7;
		n.length = 1 + (e >> 3);
		t.nextBytes(n);
		if (a > 0) {
			n[0] &= (1 << a) - 1;
		} else {
			n[0] = 0;
		}
		this.fromString(n, 256);
	}
};
i.prototype.bitwiseTo = function (e, t, r) {
	var n;
	var i;
	var a = Math.min(e.t, this.t);
	for (n = 0; n < a; ++n) {
		r[n] = t(this[n], e[n]);
	}
	if (e.t < this.t) {
		i = e.s & this.DM;
		n = a;
		for (; n < this.t; ++n) {
			r[n] = t(this[n], i);
		}
		r.t = this.t;
	} else {
		i = this.s & this.DM;
		n = a;
		for (; n < e.t; ++n) {
			r[n] = t(i, e[n]);
		}
		r.t = e.t;
	}
	r.s = t(this.s, e.s);
	r.clamp();
};
i.prototype.changeBit = function (e, t) {
	var r = i.ONE.shiftLeft(e);
	this.bitwiseTo(r, t, r);
	return r;
};
i.prototype.addTo = function (e, t) {
	for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; ) {
		n += this[r] + e[r];
		t[r++] = n & this.DM;
		n >>= this.DB;
	}
	if (e.t < this.t) {
		for (n += e.s; r < this.t; ) {
			n += this[r];
			t[r++] = n & this.DM;
			n >>= this.DB;
		}
		n += this.s;
	} else {
		for (n += this.s; r < e.t; ) {
			n += e[r];
			t[r++] = n & this.DM;
			n >>= this.DB;
		}
		n += e.s;
	}
	t.s = n < 0 ? -1 : 0;
	if (n > 0) {
		t[r++] = n;
	} else if (n < -1) {
		t[r++] = this.DV + n;
	}
	t.t = r;
	t.clamp();
};
i.prototype.dMultiply = function (e) {
	this[this.t] = this.am(0, e - 1, this, 0, 0, this.t);
	++this.t;
	this.clamp();
};
i.prototype.dAddOffset = function (e, t) {
	while (this.t <= t) {
		this[this.t++] = 0;
	}
	for (this[t] += e; this[t] >= this.DV; ) {
		this[t] -= this.DV;
		if (++t >= this.t) {
			this[this.t++] = 0;
		}
		++this[t];
	}
};
i.prototype.multiplyLowerTo = function (e, t, r) {
	var n;
	var i = Math.min(this.t + e.t, t);
	r.s = 0;
	r.t = i;
	while (i > 0) {
		r[--i] = 0;
	}
	for (n = r.t - this.t; i < n; ++i) {
		r[i + this.t] = this.am(0, e[i], r, i, 0, this.t);
	}
	for (n = Math.min(e.t, t); i < n; ++i) {
		this.am(0, e[i], r, i, 0, t - i);
	}
	r.clamp();
};
i.prototype.multiplyUpperTo = function (e, t, r) {
	--t;
	var n = (r.t = this.t + e.t - t);
	for (r.s = 0; --n >= 0; ) {
		r[n] = 0;
	}
	for (n = Math.max(t - this.t, 0); n < e.t; ++n) {
		r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
	}
	r.clamp();
	r.drShiftTo(1, r);
};
i.prototype.modInt = function (e) {
	if (e <= 0) {
		return 0;
	}
	var t = this.DV % e;
	var r = this.s < 0 ? e - 1 : 0;
	if (this.t > 0) {
		if (t == 0) {
			r = this[0] % e;
		} else {
			for (var n = this.t - 1; n >= 0; --n) {
				r = (t * r + this[n]) % e;
			}
		}
	}
	return r;
};
i.prototype.millerRabin = function (e) {
	var t = this.subtract(i.ONE);
	var r = t.getLowestSetBit();
	if (r <= 0) {
		return false;
	}
	var n = t.shiftRight(r);
	if ((e = (e + 1) >> 1) > v.length) {
		e = v.length;
	}
	var s = a();
	for (var o = 0; o < e; ++o) {
		s.fromInt(v[o]);
		var l = s.modPow(n, this);
		if (l.compareTo(i.ONE) != 0 && l.compareTo(t) != 0) {
			for (var c = 1; c++ < r && l.compareTo(t) != 0; ) {
				if ((l = l.modPowInt(2, this)).compareTo(i.ONE) == 0) {
					return false;
				}
			}
			if (l.compareTo(t) != 0) {
				return false;
			}
		}
	}
	return true;
};
i.prototype.clone = function () {
	var e = a();
	this.copyTo(e);
	return e;
};
i.prototype.intValue = function () {
	if (this.s < 0) {
		if (this.t == 1) {
			return this[0] - this.DV;
		}
		if (this.t == 0) {
			return -1;
		}
	} else {
		if (this.t == 1) {
			return this[0];
		}
		if (this.t == 0) {
			return 0;
		}
	}
	return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
};
i.prototype.byteValue = function () {
	if (this.t == 0) {
		return this.s;
	} else {
		return (this[0] << 24) >> 24;
	}
};
i.prototype.shortValue = function () {
	if (this.t == 0) {
		return this.s;
	} else {
		return (this[0] << 16) >> 16;
	}
};
i.prototype.signum = function () {
	if (this.s < 0) {
		return -1;
	} else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
		return 0;
	} else {
		return 1;
	}
};
i.prototype.toByteArray = function () {
	var e = this.t;
	var t = new Array();
	t[0] = this.s;
	var r;
	var n = this.DB - ((e * this.DB) % 8);
	var i = 0;
	if (e-- > 0) {
		for (
			n < this.DB &&
			(r = this[e] >> n) != (this.s & this.DM) >> n &&
			(t[i++] = r | (this.s << (this.DB - n)));
			e >= 0;

		) {
			if (n < 8) {
				r = (this[e] & ((1 << n) - 1)) << (8 - n);
				r |= this[--e] >> (n += this.DB - 8);
			} else {
				r = (this[e] >> (n -= 8)) & 255;
				if (n <= 0) {
					n += this.DB;
					--e;
				}
			}
			if ((r & 128) != 0) {
				r |= -256;
			}
			if (i == 0 && (this.s & 128) != (r & 128)) {
				++i;
			}
			if (i > 0 || r != this.s) {
				t[i++] = r;
			}
		}
	}
	return t;
};
i.prototype.equals = function (e) {
	return this.compareTo(e) == 0;
};
i.prototype.min = function (e) {
	if (this.compareTo(e) < 0) {
		return this;
	} else {
		return e;
	}
};
i.prototype.max = function (e) {
	if (this.compareTo(e) > 0) {
		return this;
	} else {
		return e;
	}
};
i.prototype.and = function (e) {
	var t = a();
	this.bitwiseTo(e, h, t);
	return t;
};
i.prototype.or = function (e) {
	var t = a();
	this.bitwiseTo(e, C, t);
	return t;
};
i.prototype.xor = function (e) {
	var t = a();
	this.bitwiseTo(e, _, t);
	return t;
};
i.prototype.andNot = function (e) {
	var t = a();
	this.bitwiseTo(e, f, t);
	return t;
};
i.prototype.not = function () {
	var e = a();
	for (var t = 0; t < this.t; ++t) {
		e[t] = this.DM & ~this[t];
	}
	e.t = this.t;
	e.s = ~this.s;
	return e;
};
i.prototype.shiftLeft = function (e) {
	var t = a();
	if (e < 0) {
		this.rShiftTo(-e, t);
	} else {
		this.lShiftTo(e, t);
	}
	return t;
};
i.prototype.shiftRight = function (e) {
	var t = a();
	if (e < 0) {
		this.lShiftTo(-e, t);
	} else {
		this.rShiftTo(e, t);
	}
	return t;
};
i.prototype.getLowestSetBit = function () {
	for (var e = 0; e < this.t; ++e) {
		if (this[e] != 0) {
			return e * this.DB + b(this[e]);
		}
	}
	if (this.s < 0) {
		return this.t * this.DB;
	} else {
		return -1;
	}
};
i.prototype.bitCount = function () {
	var e = 0;
	var t = this.s & this.DM;
	for (var r = 0; r < this.t; ++r) {
		e += y(this[r] ^ t);
	}
	return e;
};
i.prototype.testBit = function (e) {
	var t = Math.floor(e / this.DB);
	if (t >= this.t) {
		return this.s != 0;
	} else {
		return (this[t] & (1 << e % this.DB)) != 0;
	}
};
i.prototype.setBit = function (e) {
	return this.changeBit(e, C);
};
i.prototype.clearBit = function (e) {
	return this.changeBit(e, f);
};
i.prototype.flipBit = function (e) {
	return this.changeBit(e, _);
};
i.prototype.add = function (e) {
	var t = a();
	this.addTo(e, t);
	return t;
};
i.prototype.subtract = function (e) {
	var t = a();
	this.subTo(e, t);
	return t;
};
i.prototype.multiply = function (e) {
	var t = a();
	this.multiplyTo(e, t);
	return t;
};
i.prototype.divide = function (e) {
	var t = a();
	this.divRemTo(e, t, null);
	return t;
};
i.prototype.remainder = function (e) {
	var t = a();
	this.divRemTo(e, null, t);
	return t;
};
i.prototype.divideAndRemainder = function (e) {
	var t = a();
	var r = a();
	this.divRemTo(e, t, r);
	return new Array(t, r);
};
i.prototype.modPow = function (e, t) {
	var r;
	var n;
	var i = e.bitLength();
	var s = d(1);
	if (i <= 0) {
		return s;
	}
	r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6;
	n = i < 8 ? new p(t) : t.isEven() ? new B(t) : new g(t);
	var o = new Array();
	var l = 3;
	var c = r - 1;
	var m = (1 << r) - 1;
	o[1] = n.convert(this);
	if (r > 1) {
		var u = a();
		for (n.sqrTo(o[1], u); l <= m; ) {
			o[l] = a();
			n.mulTo(u, o[l - 2], o[l]);
			l += 2;
		}
	}
	var h;
	var C;
	var _ = e.t - 1;
	var f = true;
	var b = a();
	for (i = _A(e[_]) - 1; _ >= 0; ) {
		if (i >= c) {
			h = (e[_] >> (i - c)) & m;
		} else {
			h = (e[_] & ((1 << (i + 1)) - 1)) << (c - i);
			if (_ > 0) {
				h |= e[_ - 1] >> (this.DB + i - c);
			}
		}
		l = r;
		while ((h & 1) == 0) {
			h >>= 1;
			--l;
		}
		if ((i -= l) < 0) {
			i += this.DB;
			--_;
		}
		if (f) {
			o[h].copyTo(s);
			f = false;
		} else {
			while (l > 1) {
				n.sqrTo(s, b);
				n.sqrTo(b, s);
				l -= 2;
			}
			if (l > 0) {
				n.sqrTo(s, b);
			} else {
				C = s;
				s = b;
				b = C;
			}
			n.mulTo(b, o[h], s);
		}
		while (_ >= 0 && (e[_] & (1 << i)) == 0) {
			n.sqrTo(s, b);
			C = s;
			s = b;
			b = C;
			if (--i < 0) {
				i = this.DB - 1;
				--_;
			}
		}
	}
	return n.revert(s);
};
i.prototype.modInverse = function (e) {
	var t = e.isEven();
	if ((this.isEven() && t) || e.signum() == 0) {
		return i.ZERO;
	}
	for (
		var r = e.clone(), n = this.clone(), a = d(1), s = d(0), o = d(0), l = d(1);
		r.signum() != 0;

	) {
		while (r.isEven()) {
			r.rShiftTo(1, r);
			if (t) {
				if (!a.isEven() || !s.isEven()) {
					a.addTo(this, a);
					s.subTo(e, s);
				}
				a.rShiftTo(1, a);
			} else if (!s.isEven()) {
				s.subTo(e, s);
			}
			s.rShiftTo(1, s);
		}
		while (n.isEven()) {
			n.rShiftTo(1, n);
			if (t) {
				if (!o.isEven() || !l.isEven()) {
					o.addTo(this, o);
					l.subTo(e, l);
				}
				o.rShiftTo(1, o);
			} else if (!l.isEven()) {
				l.subTo(e, l);
			}
			l.rShiftTo(1, l);
		}
		if (r.compareTo(n) >= 0) {
			r.subTo(n, r);
			if (t) {
				a.subTo(o, a);
			}
			s.subTo(l, s);
		} else {
			n.subTo(r, n);
			if (t) {
				o.subTo(a, o);
			}
			l.subTo(s, l);
		}
	}
	if (n.compareTo(i.ONE) != 0) {
		return i.ZERO;
	} else if (l.compareTo(e) >= 0) {
		return l.subtract(e);
	} else if (l.signum() < 0) {
		l.addTo(e, l);
		if (l.signum() < 0) {
			return l.add(e);
		} else {
			return l;
		}
	} else {
		return l;
	}
};
i.prototype.pow = function (e) {
	return this.exp(e, new S());
};
i.prototype.gcd = function (e) {
	var t = this.s < 0 ? this.negate() : this.clone();
	var r = e.s < 0 ? e.negate() : e.clone();
	if (t.compareTo(r) < 0) {
		var n = t;
		t = r;
		r = n;
	}
	var i = t.getLowestSetBit();
	var a = r.getLowestSetBit();
	if (a < 0) {
		return t;
	}
	if (i < a) {
		a = i;
	}
	if (a > 0) {
		t.rShiftTo(a, t);
		r.rShiftTo(a, r);
	}
	while (t.signum() > 0) {
		if ((i = t.getLowestSetBit()) > 0) {
			t.rShiftTo(i, t);
		}
		if ((i = r.getLowestSetBit()) > 0) {
			r.rShiftTo(i, r);
		}
		if (t.compareTo(r) >= 0) {
			t.subTo(r, t);
			t.rShiftTo(1, t);
		} else {
			r.subTo(t, r);
			r.rShiftTo(1, r);
		}
	}
	if (a > 0) {
		r.lShiftTo(a, r);
	}
	return r;
};
i.prototype.isProbablePrime = function (e) {
	var t;
	var r = this.abs();
	if (r.t == 1 && r[0] <= v[v.length - 1]) {
		for (t = 0; t < v.length; ++t) {
			if (r[0] == v[t]) {
				return true;
			}
		}
		return false;
	}
	if (r.isEven()) {
		return false;
	}
	for (t = 1; t < v.length; ) {
		for (var n = v[t], i = t + 1; i < v.length && n < I; ) {
			n *= v[i++];
		}
		for (n = r.modInt(n); t < i; ) {
			if (n % v[t++] == 0) {
				return false;
			}
		}
	}
	return r.millerRabin(e);
};
const E = i;
function M(e, t) {
	this.modulus = new E(e, 16);
	this.encryptionExponent = new E(t, 16);
}
var T = {
	base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function (e) {
		if (!e) {
			return false;
		}
		var t;
		var r;
		var n;
		var i;
		var a;
		var s;
		var o;
		var l = "";
		var c = 0;
		do {
			i = (t = e.charCodeAt(c++)) >> 2;
			a = ((t & 3) << 4) | ((r = e.charCodeAt(c++)) >> 4);
			s = ((r & 15) << 2) | ((n = e.charCodeAt(c++)) >> 6);
			o = n & 63;
			if (isNaN(r)) {
				s = o = 64;
			} else if (isNaN(n)) {
				o = 64;
			}
			l +=
				this.base64.charAt(i) +
				this.base64.charAt(a) +
				this.base64.charAt(s) +
				this.base64.charAt(o);
		} while (c < e.length);
		return l;
	},
	decode: function (e) {
		if (!e) {
			return false;
		}
		e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		var t;
		var r;
		var n;
		var i;
		var a = "";
		var s = 0;
		do {
			t = this.base64.indexOf(e.charAt(s++));
			r = this.base64.indexOf(e.charAt(s++));
			n = this.base64.indexOf(e.charAt(s++));
			i = this.base64.indexOf(e.charAt(s++));
			a += String.fromCharCode((t << 2) | (r >> 4));
			if (n != 64) {
				a += String.fromCharCode(((r & 15) << 4) | (n >> 2));
			}
			if (i != 64) {
				a += String.fromCharCode(((n & 3) << 6) | i);
			}
		} while (s < e.length);
		return a;
	},
};
var R = {
	hex: "0123456789abcdef",
	encode: function (e) {
		if (!e) {
			return false;
		}
		var t;
		var r = "";
		var n = 0;
		do {
			t = e.charCodeAt(n++);
			r += this.hex.charAt((t >> 4) & 15) + this.hex.charAt(t & 15);
		} while (n < e.length);
		return r;
	},
	decode: function (e) {
		if (!e) {
			return false;
		}
		e = e.replace(/[^0-9abcdef]/g, "");
		var t = "";
		var r = 0;
		do {
			t += String.fromCharCode(
				((this.hex.indexOf(e.charAt(r++)) << 4) & 240) |
					(this.hex.indexOf(e.charAt(r++)) & 15),
			);
		} while (r < e.length);
		return t;
	},
};
export const A = {
	getPublicKey: function (e, t) {
		return new M(e, t);
	},
	encrypt: function (e, t) {
		return (
			!!t &&
			!!(e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)) &&
			!!(e = e.modPowInt(t.encryptionExponent, t.modulus)) &&
			(((e = e.toString(16)).length & 1) == 1 && (e = "0" + e),
			T.encode(R.decode(e)))
		);
	},
	pkcs1pad2: function (e, t) {
		if (t < e.length + 11) {
			return null;
		}
		var r = [];
		for (var n = e.length - 1; n >= 0 && t > 0; ) {
			r[--t] = e.charCodeAt(n--);
		}
		for (r[--t] = 0; t > 2; ) {
			r[--t] = Math.floor(Math.random() * 254) + 1;
		}
		r[--t] = 2;
		r[--t] = 0;
		return new E(r);
	},
};
