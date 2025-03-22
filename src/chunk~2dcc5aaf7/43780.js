class n {
	type = 0;
	text = "";
	tag;
	args;
	ConvertMalformedNodeToText() {
		if (this.type == 3) {
			this.text = "[/" + this.text;
		} else if (this.type == 2) {
			this.text = "[" + this.text;
		}
		this.type = 1;
	}
}
export class Al {
	m_fnAccumulatorFactory;
	m_dictComponents;
	constructor(e, t) {
		this.m_dictComponents = e;
		this.m_fnAccumulatorFactory = t;
	}
	Parse(e, t, r = false) {
		const i = (function (e, t) {
			const r = [];
			let i = new n();
			let a = false;
			let s = false;
			let o = false;
			for (let n = 0; n < e.length; n++) {
				const l = e[n];
				switch (i.type) {
					case 0:
						if (l == "[") {
							i.type = 2;
							s = true;
						} else {
							i.type = 1;
							if (l == "\\" && t) {
								a = !a;
							} else {
								i.text += l;
							}
						}
						break;
					case 2:
					case 3:
						if (l == "/" && s) {
							i.type = 3;
							i.text = "";
							s = false;
						} else if (l != "[" || a) {
							if (l != "]" || a) {
								if (l == "\\" && t) {
									i.text += l;
									a = !a;
									s = false;
								} else {
									i.text += l;
									a = false;
									s = false;
								}
							} else {
								const e =
									i.type == 2 && i.text.toLocaleLowerCase() == "noparse";
								const t =
									i.type == 3 && i.text.toLocaleLowerCase() == "noparse";
								if (s || (o && !t)) {
									i.ConvertMalformedNodeToText();
									i.text += l;
								} else if (e) {
									o = true;
								} else if (t) {
									o = false;
								}
								i = c(r, i);
								s = false;
							}
						} else {
							i.ConvertMalformedNodeToText();
							i = c(r, i, 2);
							s = true;
						}
						break;
					case 1:
						if (l != "[" || a) {
							if (l == "\\" && t) {
								if (a) {
									i.text += l;
								}
								a = !a;
							} else {
								i.text += l;
								a = false;
							}
						} else {
							i = c(r, i, 2);
							s = true;
						}
				}
			}
			if (i.type != 0) {
				if (i.type == 2 || i.type == 3) {
					i.ConvertMalformedNodeToText();
				}
				r.push(i);
			}
			return r;
		})(e || "", r);
		return this.Parse_BuildElements(i, t);
	}
	Parse_BuildElements(e, t) {
		let r = this.m_fnAccumulatorFactory(undefined);
		const n = [];
		const i = () => (n.length < 1 ? undefined : n[n.length - 1]);
		const a = this.m_dictComponents;
		const s = (e) => !!e.tag && !!a.get(e.tag)?.autocloses;
		let o = false;
		let l = true;
		const c = (e, i) => {
			if (e && e.node.tag === i.text && a.get(e.node.tag)) {
				const i = a.get(e.node.tag);
				const s = n.map((e) => e.node.tag);
				const c = {
					parentTags: s,
					tagname: e.node.tag,
					args: e.node.args,
				};
				const m = t(i.Constructor, c, ...r.GetElements());
				r = e.accumulator;
				if (Array.isArray(m)) {
					m.forEach((e) => r.AppendNode(e));
				} else {
					r.AppendNode(m);
				}
				o = !!i.skipFollowingNewline;
				l = e.bWrapTextForCopying;
			} else if (e) {
				const t = e.accumulator;
				t.AppendText("[" + e.node.text + "]", false);
				r.GetElements().forEach((e) => t.AppendNode(e));
				t.AppendText("[/" + i.text + "]", false);
				r = t;
				l = e.bWrapTextForCopying;
			}
		};
		for (
			e.forEach((e, t) => {
				if (e.type == 1) {
					const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
					r.AppendText(t, l);
					o = false;
				} else if (e.type == 2) {
					const t = a.get(e.tag);
					if (t) {
						const s = i();
						if (s !== undefined) {
							const t = a.get(s.node.tag);
							if (t && t.autocloses && e.tag === s.node.tag) {
								c(n.pop(), s.node);
							}
						}
						n.push({
							accumulator: r,
							node: e,
							bWrapTextForCopying: l,
						});
						r = this.m_fnAccumulatorFactory(e);
						o = !!t.skipInternalNewline;
						l = t.allowWrapTextForCopying ?? false;
					} else {
						r.AppendText("[" + e.text + "]", n.length == 0);
					}
				} else if (e.type == 3) {
					while (i() && i().node.tag !== e.text && s(i().node)) {
						const e = n.pop();
						c(e, e.node);
					}
					if (i()?.node.tag == e.text) {
						const t = n.pop();
						c(t, e);
					} else {
						r.AppendText("[/" + e.text + "]", n.length == 0);
					}
				}
			});
			n.length > 0;
		) {
			const e = n.pop();
			c(e, e.node);
		}
		return r.GetElements();
	}
}
export function CS(e, t) {
	let r = "[" + e;
	if (t?.[""]) {
		r += `=${s("" + t[""])}`;
	}
	for (const e in t) {
		if (e !== "") {
			r += ` ${(((n = e)), n.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`;
		}
	}
	var n;
	r += "]";
	return r;
}
function s(e) {
	return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
}
export function op(e) {
	return `[/${e}]`;
}
export function vE(e) {
	return e.replace(/(\\|\[)/g, "\\$1");
}
function c(e, t, r = 0) {
	if (t.type == 2) {
		let e = t.text.indexOf("=");
		const r = t.text.indexOf(" ");
		if (r != -1 && (e == -1 || r < e)) {
			e = r;
		}
		if (e > 0) {
			t.tag = t.text.substr(0, e).toLocaleLowerCase();
			const r = t.text.substr(e);
			t.args = (function (e) {
				if (!e || e.length < 1) {
					return {};
				}
				const t = {};
				let r = "";
				let n = "";
				let i = 0;
				let a = 0;
				if (e[0] == "=") {
					i = 2;
				}
				let s = false;
				for (a++; a < e.length; a++) {
					const o = e[a];
					let l = true;
					let c = false;
					switch (i) {
						case 0:
							if (o == "=") {
								return {};
							}
							if (o == " ") {
								continue;
							}
							i = 1;
							break;
						case 1:
							if ((o == "=" || o == " ") && !s) {
								if (o == " ") {
									i = 0;
									c = true;
								} else {
									i = 2;
								}
								l = false;
							}
							break;
						case 2:
							if (o == " ") {
								i = 0;
								l = false;
								c = true;
							} else if (o == '"') {
								i = 4;
								l = false;
							} else {
								i = 3;
							}
							break;
						case 3:
						case 4:
							if ((o == " " && i != 4 && !s) || (o == '"' && i == 4 && !s)) {
								i = 0;
								l = false;
								c = true;
							}
					}
					if (l) {
						if (o != "\\" || s) {
							s = false;
							if (i == 1) {
								r += o;
							} else {
								if (i != 3 && i != 4) {
									throw new Error(
										"Not expecting to accumulate buffer in state " + i,
									);
								}
								n += o;
							}
						} else {
							s = true;
						}
					}
					if (c) {
						t[r] = n;
						r = "";
						n = "";
					}
				}
				if (i != 0) {
					t[r] = n;
				}
				return t;
			})(r);
		} else {
			t.args = {};
			t.tag = t.text.toLocaleLowerCase();
		}
	}
	e.push(t);
	const i = new n();
	i.type = r;
	return i;
}
