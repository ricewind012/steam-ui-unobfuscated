import r from "./58663.js";
export const qM = r.BinaryReader.prototype;
export const gp = r.BinaryWriter.prototype;
export function w0(e) {
	const t = {};
	const { fields } = e;
	for (const e in fields) {
		const n_e = fields[e];
		t[n_e.n] = n_e;
	}
	return t;
}
export function Uq(e, t) {
	const { proto, fields } = e;
	const s = new proto();
	if (t == null) {
		return s;
	}
	for (const e in fields) {
		const { n, c: c_1, r: r_1, d: d_1, q } = fields[e];
		if (!Object.prototype.hasOwnProperty.call(t, e)) {
			continue;
		}
		const t_e = t[e];
		if (c_1) {
			if (r_1) {
				r.Message.setRepeatedWrapperField(
					s,
					n,
					Array.isArray(t_e) ? t_e.map((e) => c_1.fromObject(e)) : [],
				);
			} else {
				r.Message.setWrapperField(s, n, c_1.fromObject(t_e));
			}
		} else {
			r.Message.setField(s, n, t_e);
		}
	}
	return s;
}
export function BT(e, t, n) {
	const { proto, fields } = e;
	const o = {};
	for (const e in fields) {
		const { n: n_1, c: c_1, r: r_1, d: d_1, q } = fields[e];
		if (c_1) {
			if (r_1) {
				o[e] = r.Message.toObjectList(
					r.Message.getRepeatedWrapperField(n, c_1, n_1),
					c_1.toObject,
					t,
				);
			} else {
				const s = r.Message.getWrapperField(n, c_1, n_1, q ? 1 : 0);
				if (s) {
					o[e] = c_1.toObject(t, s);
				}
			}
		} else {
			const t = r.Message.getFieldWithDefault(
				n,
				n_1,
				d_1 !== undefined ? d_1 : null,
			);
			if (t !== null || q) {
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
			const { n: n_1, c: c_1, r: r_1, d: d_1, q, br } = i;
			if (c_1) {
				const i = new c_1();
				n.readMessage(i, c_1.deserializeBinaryFromReader);
				if (r_1) {
					r.Message.addToRepeatedWrapperField(t, n_1, i, c_1);
				} else {
					r.Message.setWrapperField(t, n_1, i);
				}
			} else if (br) {
				const i = br.call(n);
				if (r_1) {
					r.Message.addToRepeatedField(t, n_1, i);
				} else {
					r.Message.setField(t, n_1, i);
				}
			} else {
				console.assert(
					!!br,
					`Reader func not set for field number ${n_1} in class ${c_1}`,
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
	const { fields } = e;
	for (const e in fields) {
		const { n: n_1, c: c_1, r: r_1, d: d_1, q, bw } = fields[e];
		if (c_1) {
			if (r_1) {
				const e = r.Message.getRepeatedWrapperField(t, c_1, n_1);
				if ((e && e.length) || q) {
					n.writeRepeatedMessage(n_1, e, c_1.serializeBinaryToWriter);
				}
			} else {
				const e = r.Message.getWrapperField(t, c_1, n_1, q ? 1 : 0);
				if (e) {
					n.writeMessage(n_1, e, c_1.serializeBinaryToWriter);
				}
			}
		} else if (bw) {
			const e = r.Message.getField(t, n_1);
			if (e !== undefined) {
				bw.call(n, n_1, e);
			}
		} else {
			console.assert(
				!!bw,
				`Writer func not set for field number ${n_1} in class ${c_1}`,
			);
		}
	}
}
export function Sg(e) {
	const e_proto = e.proto;
	for (const n in e.fields) {
		const i = e.fields[n];
		const { n: n_1, c: c_1, r: r_1, d: d_1, q } = i;
		if (Object.prototype.hasOwnProperty.call(i, "d")) {
			e_proto.prototype[n] = d(r.Message.getFieldWithDefault, n_1, d_1);
		} else {
			e_proto.prototype[n] = c_1
				? r_1
					? d(r.Message.getRepeatedWrapperField, c_1, n_1)
					: h(c_1, n_1)
				: d(r.Message.getField, n_1);
		}
		e_proto.prototype[`set_${n}`] = p(
			c_1
				? r_1
					? r.Message.setRepeatedWrapperField
					: r.Message.setWrapperField
				: r.Message.setField,
			n_1,
		);
		if (r_1) {
			e_proto.prototype[`add_${n}`] = g(n_1, c_1);
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
