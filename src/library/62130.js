var r = require(/*webcrack:missing*/ "./34629.js");
var i = require("./93960.js");
import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
export class Q {
	m_fnRender;
	m_rgLoadingLinks = [];
	constructor(e, t, n) {
		this.m_rgLoadingLinks = [];
		if (n) {
			for (let e = 0; e < n.length; e++) {
				this.AddLink(n[e], true);
			}
		} else if (e) {
			let t = e.getElementsByTagName("link");
			for (let e = 0; e < t.length; e++) {
				let n = t[e];
				this.AddLink(n, false);
			}
		}
	}
	AddLink(e, t) {
		if (t) {
			let t = false;
			try {
				if (!e.sheet || !e.sheet.cssRules || e.sheet.cssRules.length == 0) {
					t = true;
				}
			} catch (e) {}
			if (t) {
				e.addEventListener("load", this.OnLinkLoad);
				this.m_rgLoadingLinks.push(e);
			}
		} else {
			e.addEventListener("load", this.OnLinkLoad);
			this.m_rgLoadingLinks.push(e);
		}
	}
	SetTarget(e) {
		this.m_fnRender = e;
		if (this.m_rgLoadingLinks.length == 0) {
			this.m_fnRender();
			this.m_fnRender = undefined;
		}
	}
	OnLinkLoad(e) {
		e.currentTarget.removeEventListener("load", this.OnLinkLoad);
		FindAndRemove(this.m_rgLoadingLinks, e.currentTarget);
		if (this.m_rgLoadingLinks.length == 0) {
			this.m_fnRender?.();
			this.m_fnRender = undefined;
		}
	}
}
(0, r.Cg)([i.o], Q.prototype, "OnLinkLoad", null);
