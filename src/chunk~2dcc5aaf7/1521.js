var n = require(/*webcrack:missing*/ "./85688.js");
var i = require(/*webcrack:missing*/ "./63696.js");
export class R8 {
	reactNodes = [];
	AppendText(e, t = false) {
		if (e.length) {
			if (t) {
				this.reactNodes.push(
					i.createElement(
						"span",
						{
							"data-copytext": "",
							"data-copystyle": "merge-adjacent",
							"bbcode-text": e,
						},
						e,
					),
				);
			} else {
				this.reactNodes.push(e);
			}
		}
	}
	AppendNode(e) {
		this.reactNodes.push(e);
	}
	GetElements() {
		return this.reactNodes;
	}
}
export class K0 {
	m_decoratedAccumulator;
	constructor(e) {
		(0, n.w)(e, "decorated accumulator cannot be null");
		this.m_decoratedAccumulator = e;
	}
	AppendText(e, t = false) {
		this.m_decoratedAccumulator.AppendText(e, t);
	}
	AppendNode(e) {
		this.m_decoratedAccumulator.AppendNode(e);
	}
	GetElements() {
		return this.m_decoratedAccumulator.GetElements();
	}
}
export class OJ extends K0 {
	m_nStartCursor = 1;
	constructor(e, t, r) {
		super(e);
		this.m_nStartCursor = t !== undefined ? t : 1;
	}
	AppendText(e) {
		let t = e;
		const r = [];
		for (
			let e = t.indexOf("\n", this.m_nStartCursor);
			e !== -1;
			e = t.indexOf("\n")
		) {
			r.push(t.substr(0, e));
			r.push(i.createElement("br"));
			t = t.substr(e + 1);
		}
		if (t.length) {
			r.push(t);
		}
		r.forEach((e) => {
			super.AppendNode(e);
		});
	}
}
