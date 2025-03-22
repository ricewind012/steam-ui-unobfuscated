var _n = require(/*webcrack:missing*/ "./83599.js");
var i = require("./22091.js");
const a = new _n.wd("Haptics");
export var n;
(function (e) {
	e[(e.Tick = 1)] = "Tick";
	e[(e.Click = 2)] = "Click";
})((n ||= {}));
export const l = new (class {
	PlayHaptic(e, t, r, _n2, o = 0) {
		const l = i.Fd.Get().GetController(e);
		if (l?.eControllerType == 4) {
			a.Debug("Playing haptic", n[r], "on controllerIndex", e, {
				unIntensity: _n2,
				ndBGain: o,
			});
			SteamClient.Input.TriggerSimpleHapticEvent(e, t, r, _n2, o);
		} else if (l?.eControllerType == 2) {
			a.Debug("Playing legacy haptics", n[r], "on controllerIndex", e, {
				unIntensity: _n2,
				ndBGain: o,
			});
			SteamClient.Input.TriggerHapticPulse(e, t, 360);
		}
	}
	PlaySteamDeckHaptic(e, t, r, n) {
		const a = i.Fd.Get()
			.GetControllers()
			.find((e) => e.eControllerType == 4);
		if (a) {
			this.PlayHaptic(a.nControllerIndex, e, t, r, n);
		}
	}
})();
