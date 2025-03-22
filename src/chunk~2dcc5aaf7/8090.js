var n = require(/*webcrack:missing*/ "./44846.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./1521.js");
var s = require("./43780.js");
export class B extends s.Al {
	m_renderingLanguage;
	constructor(e, t, r) {
		super(e, t ?? (() => new a.R8()));
		this.m_renderingLanguage = typeof r == "string" ? (0, n.sf)(r) : r;
	}
	UpdateOverrideLanguage(e) {
		this.m_renderingLanguage = e;
	}
	ParseBBCode(e, t, r = false) {
		let n = 0;
		const a = this.Parse(
			e,
			(e, r, ...a) =>
				i.createElement(
					e,
					{
						...r,
						context: t,
						language: this.m_renderingLanguage,
						key: "bbnode_" + n++,
					},
					...a,
				),
			r,
		);
		if (a.length > 1) {
			return i.createElement(i.Fragment, null, ...a);
		} else if (a.length == 1) {
			return a[0];
		} else {
			return null;
		}
	}
}
