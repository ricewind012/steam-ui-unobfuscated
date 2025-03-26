var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./93960.js");
import { IsHTMLElement } from "../../actual_src/utils/domutils.js";
var s = require(/*webcrack:missing*/ "./61657.js");
var o = require(/*webcrack:missing*/ "./43691.js");
export class Q extends s.nh {
	m_lastButtonDown = s.pR.INVALID;
	constructor(e) {
		super();
		this.SetSourceType(s.Vz.KEYBOARD_SIMULATOR);
		e.addEventListener("keydown", this.OnKeyDown);
		e.addEventListener("keyup", this.OnKeyUp);
		e.addEventListener("blur", this.Reset);
	}
	OnKeyDown(e) {
		const t = this.TranslateKey(e);
		if (t != s.pR.INVALID) {
			e.preventDefault();
			if (t != this.m_lastButtonDown) {
				this.Reset();
				this.OnButtonDown(t);
				this.m_lastButtonDown = t;
			}
		}
	}
	OnKeyUp(e) {
		const t = this.TranslateKey(e);
		if (t != s.pR.INVALID) {
			this.OnButtonUp(t);
			this.m_lastButtonDown = s.pR.INVALID;
			e.preventDefault();
		}
	}
	Reset() {
		if (this.m_lastButtonDown != s.pR.INVALID) {
			this.OnButtonUp(this.m_lastButtonDown);
			this.m_lastButtonDown = s.pR.INVALID;
		}
	}
	GetKeycodeFromEvent(e) {
		if (o.TS.PLATFORM === "linux" && e.key.length > 1) {
			return e.key || e.code;
		} else {
			return e.code || e.key;
		}
	}
	BShouldSwallowEventForTextInputWorkaround(e) {
		if (
			!IsHTMLElement(e.target) ||
			(e.target.nodeName !== "INPUT" &&
				e.target.nodeName !== "TEXTAREA" &&
				!e.target.hasAttribute("contenteditable"))
		) {
			return false;
		}
		if (e.target.hasAttribute("contenteditable")) {
			return true;
		}
		const t = this.GetKeycodeFromEvent(e);
		let r = e.target;
		const n = Array.from(
			r.ownerDocument.getElementsByClassName("gpfocus"),
		).some((e) =>
			Array.from(e.classList).some((e) => e.includes("virtualkeyboard")),
		);
		switch (t) {
			case "ArrowUp": {
				if (n) {
					return true;
				}
				let t = r?.value.indexOf("\n");
				return (
					e.target.nodeName === "TEXTAREA" &&
					t >= 0 &&
					t < (r?.selectionStart ?? 0)
				);
			}
			case "ArrowDown": {
				if (n) {
					return true;
				}
				let t = r?.value.lastIndexOf("\n");
				return (
					e.target.nodeName === "TEXTAREA" &&
					t >= 0 &&
					t >= (r?.selectionStart ?? 0) &&
					(r?.selectionEnd ?? 0) < r?.value.length
				);
			}
			case "ArrowLeft":
				return (
					!!n || ((r?.selectionStart ?? 0) > 0 && (r?.selectionEnd ?? 0) > 0)
				);
			case "ArrowRight":
				return (
					!!n ||
					((r?.selectionStart ?? 0) < r?.value.length &&
						(r?.selectionEnd ?? 0) < r?.value.length)
				);
			case "Enter":
			case "Backspace":
				return true;
			default:
				return false;
		}
	}
	TranslateKey(e) {
		const t = this.GetKeycodeFromEvent(e);
		const r = e.ctrlKey;
		const n = e.shiftKey;
		if (this.BShouldSwallowEventForTextInputWorkaround(e)) {
			return s.pR.INVALID;
		}
		if (r && n) {
			switch (t) {
				case "Digit4":
					return s.pR.TRIGGER_LEFT;
				case "Digit5":
					return s.pR.TRIGGER_RIGHT;
				default:
					return s.pR.INVALID;
			}
		}
		if (r) {
			switch (t) {
				case "Digit1":
					return s.pR.STEAM_GUIDE;
				case "Digit2":
					return s.pR.STEAM_QUICK_MENU;
				case "Digit3":
				case "Digit9":
					return s.pR.SELECT;
				case "Digit4":
					return s.pR.BUMPER_LEFT;
				case "Digit5":
					return s.pR.BUMPER_RIGHT;
				case "Digit6":
					return s.pR.LSTICK_CLICK;
				case "Digit7":
					return s.pR.RSTICK_CLICK;
				case "Digit8":
					return s.pR.OPTIONS;
				case "Digit0":
					return s.pR.START;
			}
		}
		switch (t) {
			case "Escape":
				return s.pR.CANCEL;
			case "Enter":
				return s.pR.OK;
			case "Backspace":
				return s.pR.SECONDARY;
			case "ArrowUp":
				return s.pR.DIR_UP;
			case "ArrowDown":
				return s.pR.DIR_DOWN;
			case "ArrowLeft":
				return s.pR.DIR_LEFT;
			case "ArrowRight":
				return s.pR.DIR_RIGHT;
		}
		return s.pR.INVALID;
	}
}
(0, n.Cg)([i.o], Q.prototype, "OnKeyDown", null);
(0, n.Cg)([i.o], Q.prototype, "OnKeyUp", null);
(0, n.Cg)([i.o], Q.prototype, "Reset", null);
