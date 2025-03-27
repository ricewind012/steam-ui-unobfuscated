import { DistanceBetweenRects } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { D7 } from "./33572.js";
import a, { Gn } from "./89193.js";
import s from "./63696.js";
import o from "./10975.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import c, { Jc } from "./79769.js";
import u from "./83599.js";
import { gc, x2 } from "./52451.js";
import A, { Pr } from "./72476.js";
import p from "./34776.js";
import g from "./41537.js";
export let FN = g.FN;
export const I7 = new u.wd("VirtualKeyboard").Debug;
export class PE {
	k_rgKeyboardLocations = A.TS.ON_DECK
		? ["center-bottom", "center-top"]
		: [
				"center-bottom",
				"lower-left",
				"upper-left",
				"center-top",
				"upper-right",
				"lower-right",
			];
	k_nKeyboardWindowOffset = 10;
	m_currentVirtualKeyboardRef = null;
	m_lastActiveVirtualKeyboardRef = null;
	m_bIsInlineVirtualKeyboardOpen = Jc(false);
	m_bIsVirtualKeyboardModal = Jc(false);
	m_OnActiveElementChanged = new c.lu();
	m_OnActiveElementClicked = new c.lu();
	m_bDismissOnEnter = false;
	m_strDeadKeyPending = null;
	m_strDeadKeyNext = null;
	m_strDeadKeyCombined = null;
	m_bUseVRKeyboard = false;
	m_ownerWindow;
	m_ActiveElementProps;
	m_iKeyboardLocation = 0;
	m_textFieldLocation = null;
	m_KeyboardOwners = new Set();
	m_OnTextEntered = new c.lu();
	constructor() {
		Gn(this);
	}
	Init(e, t) {
		this.m_bUseVRKeyboard = e;
		this.m_ownerWindow = t;
	}
	BIsVRKeyboard() {
		return this.m_bUseVRKeyboard;
	}
	SetVirtualKeyboardVisible() {
		this.SetVirtualKeyboardShownInternal(true);
	}
	SetVirtualKeyboardHidden() {
		this.SetVirtualKeyboardShownInternal(false);
	}
	SetVirtualKeyboardShownInternal(e) {
		if (
			this.m_KeyboardOwners.size != 0 &&
			(this.m_bIsInlineVirtualKeyboardOpen.Value != e ||
				this.m_bUseVRKeyboard ||
				this.m_bUseVRKeyboard ||
				!e)
		) {
			if (!e) {
				this.ResetDeadKeyState();
				this.ClearCurrentVirtualKeyboardRef();
			}
			if (this.m_bUseVRKeyboard) {
				if (e) {
					this.m_ownerWindow.SteamClient.OpenVR.Keyboard.Show();
				} else {
					this.m_ownerWindow.SteamClient.OpenVR.Keyboard.Hide();
				}
			} else {
				this.m_bIsInlineVirtualKeyboardOpen.Set(e);
				if (this.m_ActiveElementProps) {
					const { onKeyboardShow } = this.m_ActiveElementProps;
					if (onKeyboardShow != null) {
						onKeyboardShow();
					}
					const { onKeyboardFullyVisible } = this.m_ActiveElementProps;
					if (onKeyboardFullyVisible != null) {
						setTimeout(() => onKeyboardFullyVisible(), 300);
					}
				}
			}
		}
	}
	SetVirtualKeyboardDone() {
		AssertMsg(
			this.m_bUseVRKeyboard,
			"We should only be showing the Done button on VR keyboards",
		);
		this.m_ownerWindow.SteamClient.OpenVR.Keyboard.SendDone();
		this.SetVirtualKeyboardHidden();
	}
	SetDismissOnEnterKey(e) {
		this.m_bDismissOnEnter = e;
	}
	CreateVirtualKeyboardRef(e) {
		const t = {};
		Object.assign(t, {
			ShowVirtualKeyboard: () => this.ShowVirtualKeyboard(t, e, false),
			ShowModalKeyboard: () => this.ShowVirtualKeyboard(t, e, true),
			SetAsCurrentVirtualKeyboardTarget: () =>
				this.SetActiveVirtualKeyboardTarget(t, e),
			HideVirtualKeyboard: () => this.SetVirtualKeyboardHidden(),
			DelayHideVirtualKeyboard: (e = 100) => {
				if (e) {
					this.ClearCurrentVirtualKeyboardRef();
					window.setTimeout(() => {
						if (!this.m_currentVirtualKeyboardRef) {
							this.SetVirtualKeyboardHidden();
						}
					}, e);
				} else {
					this.SetVirtualKeyboardHidden();
				}
			},
			BIsActive: () =>
				this.m_currentVirtualKeyboardRef === t &&
				this.m_bIsInlineVirtualKeyboardOpen.Value,
			BIsElementValidForInput: () =>
				!e.BIsElementValidForInput || e.BIsElementValidForInput(),
			bInVR: this.m_bUseVRKeyboard,
		});
		return t;
	}
	ClearCurrentVirtualKeyboardRef() {
		if (this.m_currentVirtualKeyboardRef) {
			this.m_lastActiveVirtualKeyboardRef = this.m_currentVirtualKeyboardRef;
			this.m_currentVirtualKeyboardRef = null;
			this.m_ActiveElementProps = null;
			this.m_OnActiveElementChanged.Dispatch(null);
		}
		SteamClient.Input.SetKeyboardActionset(false, false);
	}
	AddVirtualKeyboardOwner(e) {
		this.m_KeyboardOwners.add(e);
	}
	RemoveVirtualKeyboardOwner(e) {
		this.m_KeyboardOwners.delete(e);
	}
	get IsShowingVirtualKeyboard() {
		return this.m_bIsInlineVirtualKeyboardOpen;
	}
	get IsVirtualKeyboardModal() {
		return this.m_bIsVirtualKeyboardModal;
	}
	get OnActiveElementChanged() {
		return this.m_OnActiveElementChanged;
	}
	get OnActiveElementClicked() {
		return this.m_OnActiveElementClicked;
	}
	get OnTextEntered() {
		return this.m_OnTextEntered;
	}
	SetActiveVirtualKeyboardTarget(e, t) {
		this.m_ActiveElementProps = t;
		this.SetVirtualKeyboardActiveRef(e);
	}
	ShowVirtualKeyboard(e, t, r) {
		I7("ShowVirtualKeyboard", {
			ref: e,
			props: t,
			bIsModal: r,
		});
		this.m_ActiveElementProps = t;
		this.m_bIsVirtualKeyboardModal.Set(r);
		this.SetVirtualKeyboardActiveRef(e);
		this.SetVirtualKeyboardVisible();
		o.eZ.PlayNavSound(o.PN.OpenSideMenu);
		setTimeout(
			() =>
				document.activeElement?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
				}),
			0,
		);
	}
	RestoreVirtualKeyboardForLastActiveElement() {
		if (
			!this.m_currentVirtualKeyboardRef &&
			this.m_lastActiveVirtualKeyboardRef &&
			this.m_lastActiveVirtualKeyboardRef.BIsElementValidForInput()
		) {
			this.m_lastActiveVirtualKeyboardRef.ShowVirtualKeyboard();
		}
	}
	SetVirtualKeyboardActiveRef(e) {
		if (this.m_currentVirtualKeyboardRef !== e) {
			this.m_currentVirtualKeyboardRef = e;
			this.m_OnActiveElementChanged.Dispatch(e);
		} else {
			this.m_OnActiveElementClicked.Dispatch(e);
		}
	}
	HandleNavOut(e) {
		const { onKeyboardNavOut } = this.m_ActiveElementProps;
		if (onKeyboardNavOut != null) {
			const e =
				typeof onKeyboardNavOut == "function"
					? onKeyboardNavOut()
					: onKeyboardNavOut;
			return !!e && (this.HandleVirtualKeyDown(e), true);
		}
		this.SetVirtualKeyboardHidden();
	}
	GetEnterKeyLabel() {
		return this.m_ActiveElementProps?.strEnterKeyLabel;
	}
	HandleDeadKeyDown(e, t, r) {
		if (this.m_strDeadKeyPending) {
			const e = this.m_strDeadKeyCombined;
			this.ResetDeadKeyState();
			if (r === e) {
				this.HandleVirtualKeyDown(r.charAt(0));
				this.HandleVirtualKeyDown(r.charAt(0));
				return;
			}
			this.HandleVirtualKeyDown(e.charAt(0));
		}
		AssertMsg(
			t.charAt(0) == " ",
			"Dead key characters should start with a space",
		);
		AssertMsg(r.length == t.length, "Dead key composition length mismatch");
		this.m_strDeadKeyPending = e;
		this.m_strDeadKeyNext = t;
		this.m_strDeadKeyCombined = r;
	}
	GetDeadKeyPending() {
		return this.m_strDeadKeyPending;
	}
	ResetDeadKeyState() {
		this.m_strDeadKeyPending = null;
		this.m_strDeadKeyNext = null;
		this.m_strDeadKeyCombined = null;
	}
	SendClientPasteCommand() {
		const e = Pr() ? 102 : 103;
		SteamClient.Input.ControllerKeyboardSetKeyState(e, true);
		SteamClient.Input.ControllerKeyboardSetKeyState(25, true);
		SteamClient.Input.ControllerKeyboardSetKeyState(25, false);
		SteamClient.Input.ControllerKeyboardSetKeyState(e, false);
	}
	HandleVirtualKeyDown(e, t) {
		I7(`VK > input: ${e}`);
		if (this.m_strDeadKeyPending) {
			const r = this.m_strDeadKeyNext;
			const n = this.m_strDeadKeyCombined;
			this.ResetDeadKeyState();
			const i = r.indexOf(e);
			if (i >= 0) {
				this.HandleVirtualKeyDown(n.charAt(i), t);
				return;
			}
		}
		if (e == "Enter") {
			if (this.m_ActiveElementProps?.onEnterKeyPress) {
				if (
					!(e =
						typeof this.m_ActiveElementProps.onEnterKeyPress == "function"
							? this.m_ActiveElementProps.onEnterKeyPress() || null
							: this.m_ActiveElementProps.onEnterKeyPress)
				) {
					return;
				}
			} else if (this.m_bDismissOnEnter) {
				I7("VKM.HandleVirtualKeyDown DismissOnEnter");
				this.DispatchKeypress(e);
				if (!t) {
					this.m_bDismissOnEnter = false;
					this.SetVirtualKeyboardHidden();
				}
				return;
			}
		}
		if (e == "VKClose") {
			I7("VKM.HandleVirtualKeyDown VKClose");
			this.SetVirtualKeyboardHidden();
			return;
		} else if (e == "VKDone") {
			I7("VKM.HandleVirtualKeyDown VKDone");
			this.SetVirtualKeyboardDone();
			return;
		} else if (e == "VKPaste") {
			I7("VKM.HandleVirtualKeyDown VKPaste");
			this.SendClientPasteCommand();
			return;
		} else {
			this.DispatchKeypress(e);
			return;
		}
	}
	DispatchKeypress(e) {
		this.OnTextEntered.Dispatch(e);
		if (this.m_ActiveElementProps?.onTextEntered) {
			this.m_ActiveElementProps.onTextEntered(e);
		} else if (this.m_bUseVRKeyboard) {
			_1(e);
		} else {
			iv(e);
		}
	}
	get KeyboardLocation() {
		return this.k_rgKeyboardLocations[this.m_iKeyboardLocation];
	}
	InitKeyboardLocation(e, t, r) {
		if (!e && !t) {
			return;
		}
		const n = e ? p.O.InitialLocationDesktop : p.O.InitialLocationOverlay;
		const i = this.k_rgKeyboardLocations.indexOf(n);
		this.RotateKeyboardLocation(e, r, i != -1 ? i : 0);
	}
	RotateKeyboardLocation(e, t, r = -1) {
		this.m_iKeyboardLocation =
			r >= 0
				? r
				: (this.m_iKeyboardLocation + 1) % this.k_rgKeyboardLocations.length;
		if (e) {
			t?.SteamClient.Window.MoveToLocation(
				this.KeyboardLocation,
				this.k_nKeyboardWindowOffset,
			);
		}
	}
	SetTextFieldLocation(e, t, r, n) {
		this.m_textFieldLocation = {
			top: t,
			right: e + r,
			bottom: t + n,
			left: e,
		};
	}
	SelectBestModalPosition(e) {
		if (!this.m_textFieldLocation) {
			return;
		}
		const t = e.parentElement.getBoundingClientRect();
		const r = (t.width - e.offsetWidth) / 2;
		const n = t.width - e.offsetWidth;
		const i = t.height - e.offsetHeight;
		const a = (t) => {
			let a = 0;
			let s = 0;
			switch (t) {
				case "center-bottom": {
					a = r;
					s = i;
					break;
				}
				case "lower-left": {
					a = 0;
					s = i;
					break;
				}
				case "upper-left": {
					a = 0;
					s = 0;
					break;
				}
				case "center-top": {
					a = r;
					s = 0;
					break;
				}
				case "upper-right": {
					a = n;
					s = 0;
					break;
				}
				case "lower-right": {
					a = n;
					s = i;
				}
			}
			let o = {
				top: s,
				left: a,
				bottom: s + e.offsetHeight,
				right: a + e.offsetWidth,
			};
			return DistanceBetweenRects(o, this.m_textFieldLocation);
		};
		if (a(this.KeyboardLocation) > 0) {
			this.m_textFieldLocation = null;
			return;
		}
		let s = this.m_iKeyboardLocation;
		let o = 0;
		for (let e = 0; e < this.k_rgKeyboardLocations.length; ++e) {
			let t = a(this.k_rgKeyboardLocations[e]);
			if (t > o) {
				o = t;
				s = e;
			}
		}
		if (s != this.m_iKeyboardLocation) {
			this.m_iKeyboardLocation = s;
		}
		this.m_textFieldLocation = null;
	}
}
export function iv(e) {
	switch (e) {
		case "Backspace": {
			e = "";
			break;
		}
		case "Enter": {
			e = "";
			break;
		}
		case "Tab": {
			e = "\t";
			break;
		}
		case "ArrowLeft": {
			e = "";
			break;
		}
		case "ArrowRight": {
			e = "";
			break;
		}
		case "ArrowUp": {
			e = "";
			break;
		}
		case "ArrowDown": {
			e = "";
		}
	}
	SteamClient.Input.ControllerKeyboardSendText(e);
}
export function _1(e) {
	switch (e) {
		case "Backspace": {
			e = "\b";
			break;
		}
		case "Enter": {
			e = "\n";
			break;
		}
		case "Tab": {
			e = "\t";
			break;
		}
		case "ArrowLeft": {
			e = "[D";
			break;
		}
		case "ArrowRight": {
			e = "[C";
			break;
		}
		case "ArrowUp": {
			e = "[A";
			break;
		}
		case "ArrowDown": {
			e = "[B";
		}
	}
	if (e !== "") {
		SteamClient.OpenVR.Keyboard.SendText(e);
	}
}
export function u6() {
	const e = D7();
	return gc(e.IsShowingVirtualKeyboard);
}
export function Nr() {
	const e = D7();
	return gc(e.IsVirtualKeyboardModal);
}
export function dv(e) {
	const t = D7();
	x2(t.IsShowingVirtualKeyboard, e);
}
export function a1(e, t) {
	s.useEffect(() => {
		e.AddVirtualKeyboardOwner(t);
		return () => e.RemoveVirtualKeyboardOwner(t);
	}, [e, t]);
}
export function jg(e) {
	const t = D7();
	s.useEffect(() => {
		if (e) {
			return t.OnTextEntered.Register(e).Unregister;
		}
	}, [t, e]);
}
Cg([a.sH], PE.prototype, "m_strDeadKeyPending", undefined);
Cg([a.sH], PE.prototype, "m_iKeyboardLocation", undefined);
const v = "DEBUG_StickyKeyboard";
export function f0() {
	return false;
}
export function hk(e) {
	if (e) {
		window.sessionStorage.setItem(v, "true");
	} else {
		window.sessionStorage.removeItem(v);
	}
}
