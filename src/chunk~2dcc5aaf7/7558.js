var n = require(/*webcrack:missing*/ "./54644.js");
export class S2 {
	m_options;
	m_msStart;
	m_msEnd;
	m_bActive = false;
	m_fnBoundAnimationFunc = undefined;
	m_window;
	constructor(e, t) {
		this.m_window = e;
		this.m_options = {
			timing: "sine",
			...t,
		};
	}
	Start() {
		let e;
		this.m_msStart = performance.now();
		this.m_msEnd = this.m_msStart + this.m_options.msDuration;
		switch (this.m_options.timing) {
			case "linear":
				e = function (e) {
					return e;
				};
				break;
			case "cubic-in-out":
				e = function (e) {
					if (e < 0.5) {
						return e * 4 * e * e;
					} else {
						return (e - 1) * (e * 2 - 2) * (e * 2 - 2) + 1;
					}
				};
				break;
			default:
				e = function (e) {
					return 0.5 - Math.cos(e * Math.PI) / 2;
				};
		}
		this.m_bActive = true;
		this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e);
		this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
	}
	BIsActive() {
		return this.m_bActive;
	}
	End() {
		if (this.m_bActive) {
			try {
				this.Update(1);
			} catch {}
			this.ClearInterval();
			this.FireOnComplete();
		}
	}
	FireOnComplete() {
		if (this.m_options.onComplete) {
			this.m_options.onComplete();
		}
	}
	Cancel() {
		this.m_bActive = false;
	}
	OnInterval(e) {
		if (!this.m_bActive) {
			return;
		}
		let t = performance.now() - this.m_msStart;
		if (t >= this.m_options.msDuration) {
			this.End();
			return;
		}
		let r = t / this.m_options.msDuration;
		try {
			this.Update(e(r));
		} catch {}
		this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
	}
	ClearInterval() {
		this.m_bActive = false;
	}
}
export class Q8 extends S2 {
	m_fnCallback;
	constructor(e, t, r) {
		super(e, t);
		this.m_fnCallback = r;
	}
	Update(e) {
		this.m_fnCallback(e);
	}
}
export class JV extends S2 {
	m_object;
	m_propTargets;
	m_props = {};
	constructor(e, t, r) {
		super("ownerDocument" in e ? n.qf(e) : e, r);
		this.m_object = e;
		this.m_propTargets = t;
	}
	Start() {
		this.m_props = {};
		for (let e in this.m_propTargets) {
			let t = parseFloat(this.m_object[e]) || 0;
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
		for (let t in this.m_props) {
			let r = this.m_props[t];
			let n = r.start + (r.end - r.start) * e;
			this.m_object[t] = n;
		}
	}
}
