import n from "./63696.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
export class mX extends n.Component {
	GetArgument(e, t = false) {
		if (!e || (t && this.props.args[e] === undefined)) {
			return this.props.args[""];
		} else {
			return this.props.args[e];
		}
	}
}
export class wr extends n.PureComponent {
	constructor(e) {
		super(e);
		this.state = {
			failedToRender: false,
		};
	}
	componentDidCatch(e, t) {
		this.setState({
			failedToRender: true,
		});
	}
	render() {
		if (this.state.failedToRender) {
			return this.props.bbcode;
		}
		{
			let e = this.props.bbcode;
			if (this.props.bSkipTrimInput !== true) {
				e = e.trim();
			}
			return this.props.parser.ParseBBCode(e, this.props.context);
		}
	}
}
function o(e, t, r = 0) {
	if (t.type == 2) {
		let e = t.text.indexOf("=");
		let r = t.text.indexOf(" ");
		if (r != -1 && (e == -1 || r < e)) {
			e = r;
		}
		if (e > 0) {
			t.tag = t.text.substr(0, e);
			let r = t.text.substr(e);
			t.args = ((e) => {
				if (!e || e.length < 1) {
					return {};
				}
				let t = {};
				let r = "";
				let n = "";
				let a = 0;
				let s = 0;
				if (e[0] == "=") {
					a = 2;
				}
				let o = false;
				for (s++; s < e.length; s++) {
					let e_s = e[s];
					let c = true;
					let m = false;
					switch (a) {
						case 0: {
							if (e_s == "=") {
								return {};
							}
							if (e_s == " ") {
								continue;
							}
							a = 1;
							break;
						}
						case 1: {
							if ((e_s == "=" || e_s == " ") && !o) {
								a = e_s == " " ? 0 : 2;
								c = false;
							}
							break;
						}
						case 2: {
							if (e_s == " ") {
								a = 0;
								c = false;
								m = true;
							} else if (e_s == '"') {
								a = 4;
								c = false;
							} else {
								a = 3;
							}
							break;
						}
						case 3:
						case 4: {
							if (
								(e_s == " " && a != 4 && !o) ||
								(e_s == '"' && a == 4 && !o)
							) {
								a = 0;
								c = false;
								m = true;
							}
						}
					}
					if (c) {
						if (e_s != "\\" || o) {
							o = false;
							if (a == 1) {
								r += e_s;
							} else if (a == 3 || a == 4) {
								n += e_s;
							} else {
								AssertMsg(
									false,
									"Not expecting to accumulate buffer in state %u",
									a,
								);
							}
						} else {
							o = true;
						}
					}
					if (m) {
						t[r] = n;
						r = "";
						n = "";
					}
				}
				if (a != 0) {
					t[r] = n;
				}
				return t;
			})(r);
		} else {
			t.args = {};
			t.tag = t.text;
		}
	}
	e.push(t);
	let n = new p();
	n.type = r;
	return n;
}
export function Hd(e) {
	let t = [];
	let r = new p();
	let n = false;
	let i = false;

	for (let s of e) {
		switch (r.type) {
			case 0: {
				if (s == "[") {
					r.type = 2;
					i = true;
				} else {
					r.type = 1;
					if (s == "\\") {
						n = !n;
					} else {
						r.text += s;
					}
				}
				break;
			}
			case 2:
			case 3: {
				if (s == "/" && i) {
					r.type = 3;
					r.text = "";
					i = false;
				} else if (s != "[" || n) {
					if (s != "]" || n) {
						if (s == "\\") {
							r.text += s;
							n = !n;
							i = false;
						} else {
							r.text += s;
							n = false;
							i = false;
						}
					} else {
						if (i) {
							r.ConvertMalformedNodeToText();
						}
						r = o(t, r);
						i = false;
					}
				} else {
					r.ConvertMalformedNodeToText();
					r = o(t, r, 2);
					i = true;
				}
				break;
			}
			case 1: {
				if (s != "[" || n) {
					if (s == "\\") {
						if (n) {
							r.text += s;
						}
						n = !n;
					} else {
						r.text += s;
						n = false;
					}
				} else {
					r = o(t, r, 2);
					i = true;
				}
			}
		}
	}

	if (r.type != 0) {
		if (r.type == 2 || r.type == 3) {
			r.ConvertMalformedNodeToText();
		}
		t.push(r);
	}
	return t;
}
class c {
	m_dictComponents;
	constructor(e) {
		this.m_dictComponents = e;
	}
	dictComponents() {
		return this.m_dictComponents;
	}
}
export class T4 extends c {
	constructor(e) {
		super(e);
	}
	ParseBBCode(e, t) {
		let r = Hd(e);
		return this.Parse_NotificationHandlers(r, t);
	}
	Parse_NotificationHandlers(e, t) {
		let r;
		let n;
		let i = this.dictComponents();
		let a = "";
		for (let t of e) {
			if (t.type == 2) {
				r ||= [];
				r.push(t);
			} else if (t.type == 3) {
				const e = r && r.pop();
				if (r.length === 0 && e && e.tag == t.text && i[e.tag]) {
					n = e;
				}
			} else if (t.type == 1) {
				a += t.text;
			}
		}
		if (n) {
			return i[n.tag]({
				context: t,
				tagname: n.tag,
				args: n.args,
				text: a,
			});
		}
	}
}
class u {
	m_rctElements = [];
	AppendText(e, t, r) {
		if (e.length) {
			if (t) {
				this.m_rctElements.push(
					<span
						data-copytext=""
						data-copystyle="merge-adjacent"
						bbcode-text={e}
					>
						{e}
					</span>,
				);
			} else {
				this.m_rctElements.push(e);
			}
		}
	}
	AppendNode(e, t) {
		this.m_rctElements.push(e);
	}
	GetElements(e) {
		return this.m_rctElements;
	}
}
export class OJ extends u {
	AppendText(e, t, r) {
		let i = e;
		let a = [];
		for (let e = i.indexOf("\n"); e !== -1; e = i.indexOf("\n")) {
			a.push(i.substr(0, e));
			a.push(n.createElement("br"));
			i = i.substr(e + 1);
		}
		if (i.length) {
			a.push(i);
		}
		if (t) {
			this.m_rctElements.push(
				<span data-copytext="" data-copystyle="merge-adjacent" bbcode-text={e}>
					{...a}
				</span>,
			);
		} else {
			this.m_rctElements.push(e);
		}
	}
}
export class o0 extends c {
	m_accumulatorType;
	constructor(e, t = u) {
		super(e);
		this.m_accumulatorType = t;
	}
	ParseBBCode(e, t) {
		if (e.startsWith("[pre]")) {
			const Component = this.dictComponents().pre;
			return <Component>{Yj(e)}</Component>;
		}
		if (e.startsWith("[code]")) {
			const Component = this.dictComponents().code;
			return <Component>{Yj(e)}</Component>;
		}
		let r = Hd(e);
		return this.Parse_BuildReactComponents(r, t);
	}
	Parse_BuildReactComponents(e, t) {
		let r;
		let i = new this.m_accumulatorType();
		let a = this.dictComponents();
		for (
			e.forEach((e, s) => {
				if (e.type == 1) {
					i.AppendText(e.text, !r || r.length == 0, t);
				} else if (e.type == 2) {
					r ||= [];
					r.push({
						accumulator: i,
						node: e,
					});
					i = new this.m_accumulatorType();
				} else if (e.type == 3) {
					let o = r && r.pop();
					if (
						o &&
						o.node.tag === e.text &&
						a.hasOwnProperty(o.node.tag) &&
						a[o.node.tag]
					) {
						const L = a[o.node.tag];
						const c = r.map((e) => e.node.tag);
						const m = {
							context: t,
							parentTags: c,
							tagname: o.node.tag,
							args: o.node.args,
							key: `${e.tag}_${s}`,
						};
						const u = <L {...m}>{...i.GetElements(e)}</L>;
						i = o.accumulator;
						i.AppendNode(u, e);
					} else if (o) {
						let o_accumulator = o.accumulator;
						o_accumulator.AppendText(`[${o.node.text}]`, false, t);
						i.GetElements(e).forEach((e) => o_accumulator.AppendNode(e));
						o_accumulator.AppendText(`[/${e.text}]`, false, t);
						i = o_accumulator;
					}
				}
			});
			r && r.length;

		) {
			let e = r.pop();
			let e_accumulator = e.accumulator;
			e_accumulator.AppendText(`[${e.node.text}]`, false, t);
			i.GetElements().forEach((e) => e_accumulator.AppendNode(e));
			i = e_accumulator;
		}
		let s = i.GetElements();
		if (s.length > 1) {
			return <>{...s}</>;
		} else if (s.length == 1) {
			return s[0];
		} else {
			return null;
		}
	}
}
class p {
	type = 0;
	text = "";
	tag;
	args;
	ConvertMalformedNodeToText() {
		if (this.type == 3) {
			this.text = `[/${this.text}`;
		} else if (this.type == 2) {
			this.text = `[${this.text}`;
		}
		this.type = 1;
	}
}
export function js(e) {
	return e.replace(/[\[\\]/g, "\\$&");
}
export function Yj(e) {
	let t = "";
	let r = Hd(e.trim());
	for (let e of r) {
		if (e.type == 1) {
			t += e.text;
		}
	}
	return t;
}
