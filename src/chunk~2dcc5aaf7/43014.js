export var g4;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./61657.js");
var s = require(/*webcrack:missing*/ "./83599.js");
var o = require(/*webcrack:missing*/ "./52451.js");
export function ck(e) {
	switch (e) {
		case g4.A:
			return a.pR.OK;
		case g4.B:
			return a.pR.CANCEL;
		case g4.X:
			return a.pR.SECONDARY;
		case g4.Y:
			return a.pR.OPTIONS;
		case g4.Left:
			return a.pR.DIR_LEFT;
		case g4.Right:
			return a.pR.DIR_RIGHT;
		case g4.Up:
			return a.pR.DIR_UP;
		case g4.Down:
			return a.pR.DIR_DOWN;
		case g4.HomeMenu:
			return a.pR.STEAM_GUIDE;
		case g4.QuickMenu:
			return a.pR.STEAM_QUICK_MENU;
		case g4.Select:
			return a.pR.SELECT;
		case g4.Start:
			return a.pR.START;
		case g4.LeftBumper:
			return a.pR.BUMPER_LEFT;
		case g4.RightBumper:
			return a.pR.BUMPER_RIGHT;
		case g4.LeftTrigger:
			return a.pR.TRIGGER_LEFT;
		case g4.RightTrigger:
			return a.pR.TRIGGER_RIGHT;
		default:
			return a.pR.INVALID;
	}
}
export function sr(e) {
	switch (e) {
		case a.pR.OK:
			return g4.A;
		case a.pR.CANCEL:
			return g4.B;
		case a.pR.SECONDARY:
			return g4.X;
		case a.pR.OPTIONS:
			return g4.Y;
		case a.pR.DIR_LEFT:
			return g4.Left;
		case a.pR.DIR_RIGHT:
			return g4.Right;
		case a.pR.DIR_UP:
			return g4.Up;
		case a.pR.DIR_DOWN:
			return g4.Down;
		case a.pR.STEAM_GUIDE:
			return g4.HomeMenu;
		case a.pR.STEAM_QUICK_MENU:
			return g4.QuickMenu;
		case a.pR.SELECT:
			return g4.Select;
		case a.pR.START:
			return g4.Start;
		case a.pR.BUMPER_LEFT:
			return g4.LeftBumper;
		case a.pR.BUMPER_RIGHT:
			return g4.RightBumper;
		case a.pR.TRIGGER_LEFT:
			return g4.LeftTrigger;
		case a.pR.TRIGGER_RIGHT:
			return g4.RightTrigger;
		default:
			return null;
	}
}
(function (e) {
	e[(e.A = 0)] = "A";
	e[(e.B = 1)] = "B";
	e[(e.X = 2)] = "X";
	e[(e.Y = 3)] = "Y";
	e[(e.Left = 4)] = "Left";
	e[(e.Right = 5)] = "Right";
	e[(e.Up = 6)] = "Up";
	e[(e.Down = 7)] = "Down";
	e[(e.HomeMenu = 8)] = "HomeMenu";
	e[(e.QuickMenu = 9)] = "QuickMenu";
	e[(e.Select = 10)] = "Select";
	e[(e.Start = 11)] = "Start";
	e[(e.LeftBumper = 12)] = "LeftBumper";
	e[(e.RightBumper = 13)] = "RightBumper";
	e[(e.LeftTrigger = 14)] = "LeftTrigger";
	e[(e.RightTrigger = 15)] = "RightTrigger";
	e[(e.LeftStick = 16)] = "LeftStick";
	e[(e.LeftStickClick = 17)] = "LeftStickClick";
	e[(e.RightStick = 18)] = "RightStick";
	e[(e.RightStickClick = 19)] = "RightStickClick";
	e[(e.LeftTrackpad = 20)] = "LeftTrackpad";
	e[(e.LeftTrackpadClick = 21)] = "LeftTrackpadClick";
	e[(e.RightTrackpad = 22)] = "RightTrackpad";
	e[(e.RightTrackpadClick = 23)] = "RightTrackpadClick";
	e[(e.RearLeftUpper = 24)] = "RearLeftUpper";
	e[(e.RearLeftLower = 25)] = "RearLeftLower";
	e[(e.RearRightUpper = 26)] = "RearRightUpper";
	e[(e.RearRightLower = 27)] = "RearRightLower";
})((g4 ||= {}));
export class Ww {
	m_boundActions = new Map();
	m_defaultActions = new Map();
	m_actionSubscriptions = new Map();
	m_actionDescriptionChangedCallbackRegistrations = [];
	static Log = new s.wd("ActionDescription").Debug;
	InitContext(e) {
		return e.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
			.Unregister;
	}
	BFromActiveNavTree(e, t) {
		let r = t?.Tree;
		r ||= e?.Tree;
		return r && r.Controller.IsActiveFocusNavTree(r);
	}
	OnFocusNavigationChanged(e, t, r) {
		if (this.BFromActiveNavTree(t, r)) {
			this.m_actionDescriptionChangedCallbackRegistrations.forEach((e) =>
				e.Unregister(),
			);
			this.m_actionDescriptionChangedCallbackRegistrations = [];
			if (r) {
				const e = () =>
					this.SetActionDescriptionsFromMap(
						r.GetActiveActionDescriptions() ?? {},
					);
				e();
				for (let t = r; t != null; t = t.Parent) {
					this.m_actionDescriptionChangedCallbackRegistrations.push(
						t.ActionDescriptionChangedCallbackList.Register(() => e()),
					);
				}
			} else {
				this.SetActionDescriptionsFromMap({
					[a.pR.OK]: null,
				});
			}
		}
	}
	GetActionDescription(e) {
		let t;
		if (this.m_boundActions.has(e)) {
			t = this.m_boundActions.get(e);
		} else if (this.m_defaultActions.has(e)) {
			t = this.m_defaultActions.get(e);
		}
		Ww.Log("GetActionDescription", t);
		return t;
	}
	NotifyUpdate(e) {
		if (this.m_actionSubscriptions.has(e)) {
			const t = this.GetActionDescription(e);
			this.m_actionSubscriptions.get(e).forEach((e) => e(t));
		}
	}
	NotifyAll() {
		Array.from(this.m_actionSubscriptions.keys()).forEach((e) => {
			this.NotifyUpdate(e);
		});
	}
	IsDefaultAction(e) {
		return this.GetActionDescription(e) === this.m_defaultActions.get(e);
	}
	SetDefaultAction(e, t) {
		if (t === undefined) {
			this.m_defaultActions.delete(e);
		} else {
			this.m_defaultActions.set(e, t);
		}
		if (!this.m_boundActions.has(e)) {
			this.NotifyUpdate(e);
		}
	}
	ClearActions() {
		Ww.Log("ClearActionDescriptions");
		this.m_boundActions.clear();
		this.NotifyAll();
	}
	SetActionsFromMap(e) {
		const t = Array.from(this.m_boundActions.keys());
		for (let r of t) {
			if (!e[r]) {
				this.SetAction(r, undefined);
			}
		}
		for (let t in e) {
			const r = parseInt(t);
			this.SetAction(r, e[r]);
		}
	}
	SetActionDescriptionsFromMap(e) {
		const t = {};
		for (const r in e) {
			const n = parseInt(r);
			t[sr(n)] = e[n];
		}
		this.SetActionsFromMap(t);
	}
	SetAction(e, t) {
		Ww.Log("SetActionDescription", e, t);
		if (t === undefined) {
			if (!this.m_boundActions.has(e)) {
				return;
			}
			this.m_boundActions.delete(e);
		} else {
			if (this.m_boundActions.get(e) === t) {
				return;
			}
			this.m_boundActions.set(e, t);
		}
		this.NotifyUpdate(e);
	}
	SubscribeToActionFunction(e, t) {
		if (!this.m_actionSubscriptions.has(e)) {
			this.m_actionSubscriptions.set(e, []);
		}
		this.m_actionSubscriptions.get(e).push(t);
		if (this.m_boundActions.has(e)) {
			t(this.m_boundActions.get(e));
		} else if (this.m_defaultActions.has(e)) {
			t(this.m_defaultActions.get(e));
		}
		return () => {
			const r = this.m_actionSubscriptions.get(e);
			const n = r.indexOf(t);
			if (n >= 0) {
				r.splice(n, 1);
			} else {
				console.error("Unsubscribing an action that was already unsubscribed");
			}
		};
	}
}
(0, i.Cg)([o.oI], Ww.prototype, "OnFocusNavigationChanged", null);
(0, i.Cg)([o.oI], Ww.prototype, "SetActionDescriptionsFromMap", null);
