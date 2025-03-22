var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./93960.js");
var a = require(/*webcrack:missing*/ "./61657.js");
export class q extends a.nh {
	m_nAccumulatedMouseMovement = 0;
	m_bFirstMouseUpdate = true;
	m_nLastScreenX;
	m_nLastScreenY;
	m_lastButtonDown = a.pR.INVALID;
	constructor(e) {
		super();
		this.SetSourceType(a.Vz.MOUSE);
		e.addEventListener("mousedown", this.OnMouseDown);
		e.addEventListener("mouseup", this.OnMouseUp);
		e.addEventListener("mousemove", this.OnMouseMove);
		e.addEventListener("blur", this.Reset);
	}
	TranslateKey(e) {
		if (e.button === 3) {
			return a.pR.CANCEL;
		} else {
			return a.pR.INVALID;
		}
	}
	OnMouseDown(e) {
		if (e.defaultPrevented) {
			return;
		}
		const t = this.TranslateKey(e);
		if (t != a.pR.INVALID) {
			e.preventDefault();
			if (t != this.m_lastButtonDown) {
				this.Reset();
				this.OnButtonDown(t);
				this.m_lastButtonDown = t;
			}
			this.OnNavigationTypeChanged(a.Vz.MOUSE);
		}
	}
	OnMouseUp(e) {
		const t = this.TranslateKey(e);
		if (t != a.pR.INVALID) {
			this.OnButtonUp(t);
			this.m_lastButtonDown = a.pR.INVALID;
			e.preventDefault();
		}
	}
	OnMouseMove(e) {
		if (!e.defaultPrevented) {
			if (this.m_bFirstMouseUpdate) {
				this.m_nLastScreenX = e.screenX;
				this.m_nLastScreenY = e.screenY;
				this.m_bFirstMouseUpdate = false;
				return;
			}
			this.m_nAccumulatedMouseMovement +=
				Math.abs(e.screenX - this.m_nLastScreenX) +
				Math.abs(e.screenY - this.m_nLastScreenY);
			if (this.m_nAccumulatedMouseMovement > 500) {
				this.Reset();
				this.OnNavigationTypeChanged(a.Vz.MOUSE);
			}
		}
	}
	Reset() {
		this.m_nAccumulatedMouseMovement = 0;
		this.m_bFirstMouseUpdate = true;
		if (this.m_lastButtonDown != a.pR.INVALID) {
			this.OnButtonUp(this.m_lastButtonDown);
			this.m_lastButtonDown = a.pR.INVALID;
		}
	}
}
(0, n.Cg)([i.o], q.prototype, "TranslateKey", null);
(0, n.Cg)([i.o], q.prototype, "OnMouseDown", null);
(0, n.Cg)([i.o], q.prototype, "OnMouseUp", null);
(0, n.Cg)([i.o], q.prototype, "OnMouseMove", null);
(0, n.Cg)([i.o], q.prototype, "Reset", null);
