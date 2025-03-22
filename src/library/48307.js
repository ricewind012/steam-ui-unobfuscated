var r = require(/*webcrack:missing*/ "./58663.js");
export const qM = r.BinaryReader.prototype;
export const gp = r.BinaryWriter.prototype;
export function w0(e) {
	const t = {};
	const { fields: n } = e;
	for (const e in n) {
		const r = n[e];
		t[r.n] = r;
	}
	return t;
}
export function Uq(e, t) {
	const { proto: n, fields: i } = e;
	const s = new n();
	if (t == null) {
		return s;
	}
	for (const e in i) {
		const { n, c: o, r: a, d: c, q: l } = i[e];
		if (!Object.prototype.hasOwnProperty.call(t, e)) {
			continue;
		}
		const u = t[e];
		if (o) {
			if (a) {
				r.Message.setRepeatedWrapperField(
					s,
					n,
					Array.isArray(u) ? u.map((e) => o.fromObject(e)) : [],
				);
			} else {
				r.Message.setWrapperField(s, n, o.fromObject(u));
			}
		} else {
			r.Message.setField(s, n, u);
		}
	}
	return s;
}
export function BT(e, t, n) {
	const { proto: i, fields: s } = e;
	const o = {};
	for (const e in s) {
		const { n: i, c: a, r: c, d: l, q: u } = s[e];
		if (a) {
			if (c) {
				o[e] = r.Message.toObjectList(
					r.Message.getRepeatedWrapperField(n, a, i),
					a.toObject,
					t,
				);
			} else {
				const s = r.Message.getWrapperField(n, a, i, u ? 1 : 0);
				if (s) {
					o[e] = a.toObject(t, s);
				}
			}
		} else {
			const t = r.Message.getFieldWithDefault(n, i, l !== undefined ? l : null);
			if (t !== null || u) {
				o[e] = t;
			}
		}
	}
	if (t) {
		o.$jspbMessageInstance = n;
	}
	return o;
}
export function zj(e, t, n) {
	while (n.nextField() && !n.isEndGroup()) {
		const i = e[n.getFieldNumber()];
		if (i) {
			const { n: e, c: s, r: o, d: a, q: c, br: l } = i;
			if (s) {
				const i = new s();
				n.readMessage(i, s.deserializeBinaryFromReader);
				if (o) {
					r.Message.addToRepeatedWrapperField(t, e, i, s);
				} else {
					r.Message.setWrapperField(t, e, i);
				}
			} else if (l) {
				const i = l.call(n);
				if (o) {
					r.Message.addToRepeatedField(t, e, i);
				} else {
					r.Message.setField(t, e, i);
				}
			} else {
				console.assert(
					!!l,
					`Reader func not set for field number ${e} in class ${s}`,
				);
				n.skipField();
			}
		} else {
			n.skipField();
		}
	}
	return t;
}
export function i0(e, t, n) {
	const { fields: i } = e;
	for (const e in i) {
		const { n: s, c: o, r: a, d: c, q: l, bw: u } = i[e];
		if (o) {
			if (a) {
				const e = r.Message.getRepeatedWrapperField(t, o, s);
				if ((e && e.length) || l) {
					n.writeRepeatedMessage(s, e, o.serializeBinaryToWriter);
				}
			} else {
				const e = r.Message.getWrapperField(t, o, s, l ? 1 : 0);
				if (e) {
					n.writeMessage(s, e, o.serializeBinaryToWriter);
				}
			}
		} else if (u) {
			const e = r.Message.getField(t, s);
			if (e !== undefined) {
				u.call(n, s, e);
			}
		} else {
			console.assert(
				!!u,
				`Writer func not set for field number ${s} in class ${o}`,
			);
		}
	}
}
export function Sg(e) {
	const t = e.proto;
	for (const n in e.fields) {
		const i = e.fields[n];
		const { n: s, c: o, r: a, d: c, q: l } = i;
		if (Object.prototype.hasOwnProperty.call(i, "d")) {
			t.prototype[n] = d(r.Message.getFieldWithDefault, s, c);
		} else {
			t.prototype[n] = o
				? a
					? d(r.Message.getRepeatedWrapperField, o, s)
					: h(o, s)
				: d(r.Message.getField, s);
		}
		t.prototype[`set_${n}`] = p(
			o
				? a
					? r.Message.setRepeatedWrapperField
					: r.Message.setWrapperField
				: r.Message.setField,
			s,
		);
		if (a) {
			t.prototype[`add_${n}`] = g(s, o);
		}
	}
}
function d(e, ...t) {
	return function () {
		return e(this, ...t);
	};
}
function h(e, t) {
	return function (n = true) {
		return r.Message.getWrapperField(this, e, t, n ? 1 : 0);
	};
}
function p(e, t) {
	return function (n) {
		return e(this, t, n);
	};
}
function g(e, t) {
	if (t) {
		return function (n, i) {
			return r.Message.addToRepeatedWrapperField(this, e, n, t, i);
		};
	} else {
		return function (t, n) {
			r.Message.addToRepeatedField(this, e, t, n);
		};
	}
}
