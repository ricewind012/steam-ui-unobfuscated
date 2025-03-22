var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./93960.js");
var a = require(/*webcrack:missing*/ "./61657.js");
export class K extends a.nh {
	constructor(e) {
		super();
		this.SetSourceType(a.Vz.TOUCH);
		e.addEventListener("touchstart", this.OnTouchStart);
		e.addEventListener("touchend", this.OnTouchEnd);
	}
	OnTouchStart(e) {
		if (!e.defaultPrevented) {
			this.OnNavigationTypeChanged(a.Vz.TOUCH);
		}
	}
	OnTouchEnd(e) {
		if (!e.defaultPrevented) {
			this.OnNavigationTypeChanged(a.Vz.TOUCH);
		}
	}
}
(0, n.Cg)([i.o], K.prototype, "OnTouchStart", null);
(0, n.Cg)([i.o], K.prototype, "OnTouchEnd", null);
