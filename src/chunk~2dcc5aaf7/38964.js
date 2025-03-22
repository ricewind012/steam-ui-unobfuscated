var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./61657.js");
var a = require(/*webcrack:missing*/ "./85243.js");
var s = require("./84056.js");
var o = require(/*webcrack:missing*/ "./93960.js");
const l = {
	[s.H.GAMEPAD_BUTTON_A]: i.pR.OK,
	[s.H.GAMEPAD_BUTTON_B]: i.pR.CANCEL,
	[s.H.GAMEPAD_BUTTON_X]: i.pR.SECONDARY,
	[s.H.GAMEPAD_BUTTON_Y]: i.pR.OPTIONS,
	[s.H.GAMEPAD_BUTTON_SELECT]: i.pR.SELECT,
	[s.H.GAMEPAD_BUTTON_START]: i.pR.START,
	[s.H.GAMEPAD_BUTTON_LSHOULDER]: i.pR.BUMPER_LEFT,
	[s.H.GAMEPAD_BUTTON_RSHOULDER]: i.pR.BUMPER_RIGHT,
	[s.H.GAMEPAD_BUTTON_LTRIGGER]: i.pR.TRIGGER_LEFT,
	[s.H.GAMEPAD_BUTTON_RTRIGGER]: i.pR.TRIGGER_RIGHT,
	[s.H.GAMEPAD_LEFTSTICK_UP]: i.pR.DIR_UP,
	[s.H.GAMEPAD_LEFTSTICK_RIGHT]: i.pR.DIR_RIGHT,
	[s.H.GAMEPAD_LEFTSTICK_DOWN]: i.pR.DIR_DOWN,
	[s.H.GAMEPAD_LEFTSTICK_LEFT]: i.pR.DIR_LEFT,
	[s.H.GAMEPAD_LEFTSTICK_CLICK]: i.pR.LSTICK_CLICK,
	[s.H.GAMEPAD_RIGHTSTICK_CLICK]: i.pR.RSTICK_CLICK,
	[s.H.GAMEPAD_LEFTSTICK_TOUCH]: i.pR.LSTICK_TOUCH,
	[s.H.GAMEPAD_RIGHTSTICK_TOUCH]: i.pR.RSTICK_TOUCH,
	[s.H.GAMEPAD_BUTTON_LPAD_TOUCH]: i.pR.LPAD_TOUCH,
	[s.H.GAMEPAD_BUTTON_LPAD_CLICKED]: i.pR.LPAD_CLICK,
	[s.H.GAMEPAD_BUTTON_RPAD_TOUCH]: i.pR.RPAD_TOUCH,
	[s.H.GAMEPAD_BUTTON_RPAD_CLICKED]: i.pR.RPAD_CLICK,
	[s.H.GAMEPAD_BUTTON_LBACK_UPPER]: i.pR.REAR_LEFT_UPPER,
	[s.H.GAMEPAD_BUTTON_LBACK]: i.pR.REAR_LEFT_LOWER,
	[s.H.GAMEPAD_BUTTON_RBACK_UPPER]: i.pR.REAR_RIGHT_UPPER,
	[s.H.GAMEPAD_BUTTON_RBACK]: i.pR.REAR_RIGHT_LOWER,
};
const c = {
	[a.TR.SystemKey0]: i.pR.STEAM_GUIDE,
	[a.TR.SystemKey1]: i.pR.STEAM_QUICK_MENU,
};
export class E extends i.nh {
	m_rgControllers = new Map();
	constructor() {
		super();
		if (typeof SteamClient != "undefined") {
			SteamClient.Input?.RegisterForControllerInputMessages(
				this.HandleControllerInputMessages,
			);
			SteamClient.Input?.RegisterForControllerAnalogInputMessages(
				this.HandleControllerInputMessages,
			);
			SteamClient.System?.UI?.RegisterForSystemKeyEvents(
				this.HandleSystemKeyEvents,
			);
			SteamClient.Input?.RegisterForControllerListChanges(
				this.OnControllerListChanged,
			);
		}
		this.SetSourceType(i.Vz.GAMEPAD);
	}
	OnControllerListChanged(e) {
		this.m_rgControllers.forEach((t, r) => {
			if (e.findIndex((e) => e.nControllerIndex == r) == -1) {
				for (let e = 0; e in i.pR; e++) {
					if (t.activeButtons[e]) {
						this.OnButtonUp(e, r);
					}
				}
				this.OnAnalogPad(i.pR.LPAD_TOUCH, 0, 0, r);
				this.OnAnalogPad(i.pR.RPAD_TOUCH, 0, 0, r);
				this.m_rgControllers.delete(r);
			}
		});
	}
	HandleSystemKeyEvents(e) {
		const t = c[e.eKey];
		if (t) {
			this.OnSystemButtonPress(t, e.nControllerIndex);
		}
	}
	OnSystemButtonPress(e, t) {
		this.OnButtonDown(e, t);
		this.OnButtonUp(e, t);
	}
	GetController(e) {
		let t = this.m_rgControllers.get(e);
		if (!t) {
			t = {
				activeButtons: {},
			};
			this.m_rgControllers.set(e, t);
		}
		return t;
	}
	EnableAnalogInputMessages(e) {
		SteamClient.Input?.EnableControllerAnalogInputMessages(e);
	}
	HandleControllerInputMessages(e, t, r, n, a) {
		const o = l[t];
		const c = this.GetController(e);
		if (o != null) {
			if (r && !c.activeButtons[o]) {
				c.activeButtons[o] = true;
				this.OnButtonDown(o, e);
			} else if (!r && c.activeButtons[o]) {
				c.activeButtons[o] = false;
				this.OnButtonUp(o, e);
			}
		} else if (t != s.H.GAMEPAD_ANALOG_SCROLL) {
			if (t == s.H.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR) {
				if (c.activeButtons[i.pR.LPAD_TOUCH]) {
					this.OnAnalogPad(i.pR.LPAD_TOUCH, n, a, e);
				}
			} else if (
				t == s.H.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR &&
				c.activeButtons[i.pR.RPAD_TOUCH]
			) {
				this.OnAnalogPad(i.pR.RPAD_TOUCH, n, a, e);
			}
		}
	}
}
(0, n.Cg)([o.o], E.prototype, "OnControllerListChanged", null);
(0, n.Cg)([o.o], E.prototype, "HandleSystemKeyEvents", null);
(0, n.Cg)([o.o], E.prototype, "EnableAnalogInputMessages", null);
(0, n.Cg)([o.o], E.prototype, "HandleControllerInputMessages", null);
