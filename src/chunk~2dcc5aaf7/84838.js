import { Cg } from "./34629.js";
import i from "./93960.js";
import a from "./61657.js";
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
Cg([i.o], K.prototype, "OnTouchStart", null);
Cg([i.o], K.prototype, "OnTouchEnd", null);
