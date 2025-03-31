import { CCallbackList } from "../../actual_src/utils/callbackutils";
let r;
export let pR;
export let Vz;
class a {
	m_ActiveInputId;
	m_ActiveInputTimeout;
	m_config;
	constructor(e) {
		this.m_config = e;
	}
	Reset() {
		this.m_ActiveInputId = undefined;
		if (this.m_ActiveInputTimeout != null) {
			clearInterval(this.m_ActiveInputTimeout);
			this.m_ActiveInputTimeout = undefined;
		}
	}
	HandleInputButtonDown(e, t) {
		if (this.m_ActiveInputId !== e && t != null) {
			this.Reset();
			this.m_ActiveInputId = e;
			const n = () => {
				this.m_ActiveInputTimeout = window.setInterval(() => {
					t();
				}, this.m_config.repeatInterval_ms);
			};
			if (
				this.m_config.firstRepeatInterval_ms == null ||
				this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
			) {
				n();
			} else {
				this.m_ActiveInputTimeout = window.setTimeout(() => {
					t();
					n();
				}, this.m_config.firstRepeatInterval_ms);
			}
		}
	}
}
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Horizontal = 1)] = "Horizontal";
	e[(e.Vertical = 2)] = "Vertical";
})((r ||= {}));
class c {
	m_config;
	m_inputRepeatGenerator;
	m_repeatOnAxis = r.None;
	m_fnRepeatAllowed = () => true;
	constructor(e) {
		this.m_config = e;
		this.m_inputRepeatGenerator = new a(e);
	}
	Reset() {
		this.m_inputRepeatGenerator.Reset();
	}
	SetRepeatAllowed(e) {
		e ||= () => true;
		this.m_fnRepeatAllowed = e;
	}
	HandleInputButtonDown(e, t, n) {
		if (this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)) {
			if (this.m_repeatOnAxis == r.None) {
				if (e == pR.DIR_UP || e == pR.DIR_DOWN) {
					this.m_repeatOnAxis = r.Vertical;
				}
				if (e == pR.DIR_LEFT || e == pR.DIR_RIGHT) {
					this.m_repeatOnAxis = r.Horizontal;
				}
				t();
				this.m_inputRepeatGenerator.HandleInputButtonDown(e, n);
			}
		} else {
			t();
			this.m_inputRepeatGenerator.Reset();
		}
	}
	HandleInputButtonUp(e) {
		if (
			this.m_config.inputsThatRepeat.has(e) &&
			this.m_repeatOnAxis != r.None
		) {
			const t = e == pR.DIR_UP || e == pR.DIR_DOWN;
			const n = e == pR.DIR_LEFT || e == pR.DIR_RIGHT;
			if (
				(this.m_repeatOnAxis == r.Vertical && t) ||
				(this.m_repeatOnAxis == r.Horizontal && n)
			) {
				this.m_repeatOnAxis = r.None;
				this.m_inputRepeatGenerator.Reset();
			}
		} else {
			this.m_inputRepeatGenerator.Reset();
		}
	}
}
((e) => {
	e[(e.INVALID = 0)] = "INVALID";
	e[(e.OK = 1)] = "OK";
	e[(e.CANCEL = 2)] = "CANCEL";
	e[(e.SECONDARY = 3)] = "SECONDARY";
	e[(e.OPTIONS = 4)] = "OPTIONS";
	e[(e.BUMPER_LEFT = 5)] = "BUMPER_LEFT";
	e[(e.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT";
	e[(e.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT";
	e[(e.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT";
	e[(e.DIR_UP = 9)] = "DIR_UP";
	e[(e.DIR_DOWN = 10)] = "DIR_DOWN";
	e[(e.DIR_LEFT = 11)] = "DIR_LEFT";
	e[(e.DIR_RIGHT = 12)] = "DIR_RIGHT";
	e[(e.SELECT = 13)] = "SELECT";
	e[(e.START = 14)] = "START";
	e[(e.LSTICK_CLICK = 15)] = "LSTICK_CLICK";
	e[(e.RSTICK_CLICK = 16)] = "RSTICK_CLICK";
	e[(e.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH";
	e[(e.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH";
	e[(e.LPAD_TOUCH = 19)] = "LPAD_TOUCH";
	e[(e.LPAD_CLICK = 20)] = "LPAD_CLICK";
	e[(e.RPAD_TOUCH = 21)] = "RPAD_TOUCH";
	e[(e.RPAD_CLICK = 22)] = "RPAD_CLICK";
	e[(e.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER";
	e[(e.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER";
	e[(e.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER";
	e[(e.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER";
	e[(e.STEAM_GUIDE = 27)] = "STEAM_GUIDE";
	e[(e.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU";
})((pR ||= {}));
((e) => {
	e[(e.UNKNOWN = 0)] = "UNKNOWN";
	e[(e.GAMEPAD = 1)] = "GAMEPAD";
	e[(e.KEYBOARD_SIMULATOR = 2)] = "KEYBOARD_SIMULATOR";
	e[(e.MOUSE = 3)] = "MOUSE";
	e[(e.TOUCH = 4)] = "TOUCH";
	e[(e.LPAD = 5)] = "LPAD";
	e[(e.RPAD = 6)] = "RPAD";
})((Vz ||= {}));
export class nh {
	m_OnGamepadDetectedCallbacks = new CCallbackList();
	m_ButtonDownCallbacks = new CCallbackList();
	m_ButtonUpCallbacks = new CCallbackList();
	m_AnalogCallbacks = new CCallbackList();
	m_NavigationTypeChangeCallbacks = new CCallbackList();
	m_eNavigationSourceType;
	m_fLastActiveTime;
	m_nLastActiveControllerIndex = -1;
	m_ButtonRepeatHandler = new c({
		inputsThatRepeat: new Set([
			pR.DIR_UP,
			pR.DIR_DOWN,
			pR.DIR_LEFT,
			pR.DIR_RIGHT,
		]),
		firstRepeatInterval_ms: 400,
		repeatInterval_ms: 50,
	});
	m_bGamepadDetected = false;
	RegisterForGamepadDetected(e) {
		return this.m_OnGamepadDetectedCallbacks.Register(e);
	}
	RegisterForGamepadButtonDown(e) {
		return this.m_ButtonDownCallbacks.Register(e);
	}
	RegisterForGamepadButtonUp(e) {
		return this.m_ButtonUpCallbacks.Register(e);
	}
	RegisterForAnalog(e) {
		return this.m_AnalogCallbacks.Register(e);
	}
	RegisterForNavigationTypeChange(e) {
		return this.m_NavigationTypeChangeCallbacks.Register(e);
	}
	SetSourceType(e) {
		this.m_eNavigationSourceType = e;
	}
	GetSourceType() {
		return this.m_eNavigationSourceType;
	}
	SetControllerActive(e) {
		this.m_nLastActiveControllerIndex = e;
		this.m_fLastActiveTime = Date.now();
	}
	GetActiveControllerIndex() {
		return this.m_nLastActiveControllerIndex;
	}
	GetActiveControllerTime() {
		return this.m_fLastActiveTime;
	}
	SetRepeatAllowed(e) {
		this.m_ButtonRepeatHandler.SetRepeatAllowed(e);
	}
	OnGamepadDetected() {
		console.log("Gamepad detected");
		this.m_bGamepadDetected = true;
		this.m_OnGamepadDetectedCallbacks.Dispatch();
	}
	OnButtonDown(e, t = -1) {
		this.SetControllerActive(t);
		this.m_ButtonRepeatHandler.HandleInputButtonDown(
			e,
			() => this.DispatchButtonDown(e, false),
			() => this.DispatchButtonDown(e, true),
		);
	}
	OnButtonUp(e, t = -1) {
		this.SetControllerActive(t);
		this.m_ButtonRepeatHandler.HandleInputButtonUp(e);
		this.m_ButtonUpCallbacks.Dispatch(
			e,
			this.m_eNavigationSourceType,
			this.m_nLastActiveControllerIndex,
		);
	}
	DispatchButtonDown(e, t) {
		this.m_ButtonDownCallbacks.Dispatch(
			e,
			this.m_eNavigationSourceType,
			this.m_nLastActiveControllerIndex,
			t,
		);
	}
	OnAnalogPad(e, t, n, r = -1) {
		this.SetControllerActive(r);
		this.m_AnalogCallbacks.Dispatch(e, this.m_nLastActiveControllerIndex, t, n);
	}
	OnNavigationTypeChanged(e) {
		this.m_NavigationTypeChangeCallbacks.Dispatch(e);
	}
}
