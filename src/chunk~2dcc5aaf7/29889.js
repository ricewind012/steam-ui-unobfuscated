var n = require(/*webcrack:missing*/ "./54644.js");
var i = require("./7558.js");
export class w extends i.S2 {
	m_component;
	m_propTargets;
	m_props = {};
	m_setStateOnComplete;
	constructor(e, t, r) {
		super(n.qf(e.ref.current), r);
		this.m_component = e;
		this.m_propTargets = t;
		this.m_setStateOnComplete = r.setStateOnComplete;
	}
	Start() {
		this.m_props = {};
		for (let e in this.m_propTargets) {
			let t = parseFloat(this.m_component.state[e]) || 0;
			let r = this.m_propTargets[e];
			if (t != r) {
				this.m_props[e] = {
					start: t,
					end: r,
				};
			}
		}
		super.Start();
	}
	Update(e) {
		let t = {};
		for (let r in this.m_props) {
			let n = this.m_props[r];
			let i = n.start + (n.end - n.start) * e;
			t[r] = i;
		}
		this.m_component.setState(t);
	}
	FireOnComplete() {
		super.FireOnComplete();
		if (this.m_setStateOnComplete) {
			this.m_component.setState(this.m_setStateOnComplete);
		}
	}
}
