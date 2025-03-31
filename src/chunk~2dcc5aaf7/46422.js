import {
	FindAndRemove,
	ArrayEquals,
} from "../../actual_src/utils/arrayutils.js";
import {
	IsHTMLElement,
	IsHTMLInputElement,
	IsHTMLElementTextInput,
} from "../../actual_src/utils/domutils.js";
import { AssertMsg } from "../../actual_src/utils/assert.js";
import n, { Cg } from "./34629.js";
import i, { Gn, sH, h5, fm } from "./89193.js";
import a, { q3 } from "./90095.js";
import s from "./63696.js";
import o from "./78325.js";
import l, { B6 } from "./49519.js";
import c from "./88696.js";
import m from "./18057.js";
import u from "./64581.js";
import d, { VI } from "./34792.js";
import A from "./48042.js";
import p, { IA, AE } from "./20893.js";
import g from "./61657.js";
import h from "./10975.js";
import C from "./52451.js";
import {
	CScheduledFunc,
	e0,
	SubscribableValue,
	MappedSubscribableValue,
} from "../../actual_src/utils/callbackutils";
import f from "./90995.js";
import b from "./14722.js";
import y from "./33920.js";
import S from "./53624.js";
import w from "./20019.js";
import B from "./53316.js";
import v from "./14011.js";
import I from "./27998.js";
import E from "./66315.js";
import M from "./86969.js";
import T from "./23703.js";
import R from "./33421.js";
import k from "./17108.js";
import D from "./80324.js";
import N from "./28619.js";
import F from "./13015.js";
import G from "./14235.js";
import O from "./78235.js";
import P from "./25171.js";
import L from "./7289.js";
import z from "./83800.js";
import x from "./63300.js";
import U from "./44539.js";
import W from "./89948.js";
import V from "./35973.js";
import H, { ak } from "./44846.js";
import q from "./83599.js";
import K from "./96593.js";
import X from "./96000.js";
import J from "./48289.js";
import { qw } from "./89748.js";
import ee from "./61175.js";
import te from "./44191.js";
import re from "./79293.js";
import ne from "./47296.js";
import ie from "./38964.js";
import ae from "./2862.js";
import se from "./84838.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import ce from "./93960.js";
import { BSharedJSContextHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import de from "./4690.js";
import Ie from "./92031.js";
import Ee from "./8573.js";
import Me from "./72476.js";
import { $2 } from "./96680.js";
import { d4 } from "./93440.js";
import ke from "./55489.js";
import De from "./22091.js";
import Ne from "./9156.js";
import Fe from "./85243.js";
import Ge from "./13442.js";
import Oe from "./91745.js";
import Pe from "./45967.js";
import Le from "./58663.js";
import ze from "./48307.js";
import { I8 } from "./12176.js";
import { OI } from "./12251.js";
import Ze from "./49171.js";
import { dq } from "./13688.js";
import { lF } from "./79112.js";
import Xe from "./37905.js";
import Je from "./94496.js";
import $e from "./48332.js";
import et from "./97023.js";
import tt from "./60917.js";
import { SA } from "./33572.js";
import { s as s_1 } from "./81255.js";
import { RS } from "./14883.js";
const Q = new q.wd("GamepadAudio");
const H_qx = H.qx;
class Y {
	m_AudioPlaybackManager = new A.u();
	m_currentlyFocusedAppid = SubscribableValue();
	m_pendingSoundHandle;
	m_pendingSoundType = null;
	m_bCanPlaySound = true;
	m_fnGetUIMode;
	Init(e, t) {
		this.m_fnGetUIMode = t;
		this.m_currentlyFocusedAppid.Set(H_qx);
		h.eZ.RegisterCallbackOnPlaySound(this.PlayNavSound);
		e.RegisterForUnhandledButtonDownEvents(this.OnUnhandledButtonDownEvent);
		SteamClient.System.UI.RegisterForFocusChangeEvents(this.OnFocusChangeEvent);
	}
	RegisterFocusNavContext(e) {
		return e.FocusChangedCallbacks.Register(this.OnGamepadFocusChanged)
			.Unregister;
	}
	OnFocusChangeEvent(e) {
		if (this.m_currentlyFocusedAppid.Value != e.focusedApp.appid) {
			this.m_currentlyFocusedAppid.Set(e.focusedApp.appid);
		}
	}
	PlayNavSoundInternal(e) {
		const t = ((e, t) => {
			let r = t == 4;
			switch (e) {
				case h.PN.LaunchGame: {
					if (r) {
						return B.default;
					} else {
						return "";
					}
				}
				case h.PN.DefaultOk: {
					if (r) {
						return y.default;
					} else {
						return "";
					}
				}
				case h.PN.BasicNav: {
					if (r) {
						return I.default;
					} else {
						return "";
					}
				}
				case h.PN.FailedNav: {
					if (r) {
						return b.default;
					} else {
						return "";
					}
				}
				case h.PN.ToggleOn: {
					if (r) {
						return G.default;
					} else {
						return "";
					}
				}
				case h.PN.ToggleOff: {
					if (r) {
						return F.default;
					} else {
						return "";
					}
				}
				case h.PN.SliderUp: {
					if (r) {
						return N.default;
					} else {
						return "";
					}
				}
				case h.PN.SliderDown: {
					if (r) {
						return D.default;
					} else {
						return "";
					}
				}
				case h.PN.IntoGameDetail: {
					if (r) {
						return w.default;
					} else {
						return "";
					}
				}
				case h.PN.OutOfGameDetail: {
					if (r) {
						return M.default;
					} else {
						return "";
					}
				}
				case h.PN.OpenSideMenu: {
					if (r) {
						return R.default;
					} else {
						return "";
					}
				}
				case h.PN.CloseSideMenu: {
					if (r) {
						return k.default;
					} else {
						return "";
					}
				}
				case h.PN.ChangeTabs: {
					if (r) {
						return O.default;
					} else {
						return "";
					}
				}
				case h.PN.HideModal: {
					if (r) {
						return S.default;
					} else {
						return "";
					}
				}
				case h.PN.ShowModal: {
					if (r) {
						return T.default;
					} else {
						return "";
					}
				}
				case h.PN.VolSound: {
					if (r) {
						return x.default;
					} else {
						return "";
					}
				}
				case h.PN.PagedNavigation: {
					if (r) {
						return E.default;
					} else {
						return "";
					}
				}
				case h.PN.ToastMessage: {
					if (r) {
						return v.default;
					} else {
						return "";
					}
				}
				case h.PN.ToastAchievement: {
					if (r) {
						return f.default;
					} else {
						return L.default;
					}
				}
				case h.PN.ToastMisc: {
					if (r) {
						return P.default;
					} else {
						return L.default;
					}
				}
				case h.PN.ToastMiscShort: {
					if (r) {
						return "";
					} else {
						return z.default;
					}
				}
				case h.PN.FriendMessage: {
					if (r) {
						return "/sounds/ui_steam_message_old_smooth.m4a";
					} else {
						return "";
					}
				}
				case h.PN.FriendOnline: {
					if (r) {
						return "/sounds/ui_steam_smoother_friend_online.m4a";
					} else {
						return "";
					}
				}
				case h.PN.FriendInGame: {
					if (r) {
						return "/sounds/ui_steam_smoother_friend_join.m4a";
					} else {
						return "";
					}
				}
				case h.PN.ChatMessage: {
					if (r) {
						return "/sounds/steam_chatroom_notification.m4a";
					} else {
						return "";
					}
				}
				case h.PN.ChatMention: {
					if (r) {
						return "/sounds/steam_at_mention.m4a";
					} else {
						return "";
					}
				}
				case h.PN.Typing: {
					if (r) {
						return U.default;
					} else {
						return "";
					}
				}
				case h.PN.TimerExpired: {
					return W.default;
				}
				case h.PN.Screenshot: {
					return V.default;
				}
			}
		})(e, this.m_fnGetUIMode());
		if (t !== undefined) {
			this.m_bCanPlaySound = false;
			Q.Debug(`PlayNavSoundInternal playing '${h.PN[e]}'`);
			this.AudioPlaybackManager.PlayAudioURL(t);
			this.m_pendingSoundHandle = null;
			window.setTimeout(() => (this.m_bCanPlaySound = true), 50);
		} else {
			AssertMsg(false, `No sound configured for type '${h.PN[e]}'`);
		}
	}
	OnGamepadFocusChanged(e, t, r) {
		if (e == p.D$.GAMEPAD && r && !r.m_Properties.disableNavSounds) {
			this.PlayNavSound(h.PN.BasicNav);
		}
	}
	OnUnhandledButtonDownEvent(e) {
		switch (e.detail.button) {
			case g.pR.DIR_UP:
			case g.pR.DIR_DOWN:
			case g.pR.DIR_LEFT:
			case g.pR.DIR_RIGHT: {
				this.PlayNavSound(h.PN.FailedNav);
			}
		}
	}
	PlayNavSound(e, t) {
		if (d.rV?.clientSettings?.enable_ui_sounds ?? true) {
			if (this.m_bCanPlaySound) {
				if (this.m_pendingSoundHandle == null || e < this.m_pendingSoundType) {
					Q.Debug(
						this.m_pendingSoundHandle != null
							? `PlayNavSound requested to play '${
									h.PN[e]
								}', preemptying prior sound, ${
									t ? "playing immediately" : "now pending"
								}`
							: `PlayNavSound requested to play '${h.PN[e]}', ${
									t ? "playing immediately" : "now pending"
								}`,
					);
					window.clearTimeout(this.m_pendingSoundHandle);
					this.m_pendingSoundType = e;
					if (t) {
						this.PlayNavSoundInternal(e);
					} else {
						this.m_pendingSoundHandle = window.setTimeout(
							this.PlayNavSoundInternal.bind(this, e),
							1,
						);
					}
				} else {
					Q.Debug(
						`PlayNavSound requested to play '${h.PN[e]}', equal or higher pri sound already pending, skipping`,
					);
				}
			} else {
				Q.Debug(
					`PlayNavSound requested to play '${h.PN[e]}' a sounds was just played within 50 msec`,
				);
			}
		} else {
			Q.Debug(
				`PlayNavSound requested to play '${h.PN[e]}' but sounds are disabled`,
			);
		}
	}
	PlayAudioURL(...e) {
		return this.m_AudioPlaybackManager.PlayAudioURL(...e);
	}
	get AudioPlaybackManager() {
		return this.m_AudioPlaybackManager;
	}
}
Cg([C.oI], Y.prototype, "OnFocusChangeEvent", null);
Cg([C.oI], Y.prototype, "PlayNavSoundInternal", null);
Cg([C.oI], Y.prototype, "OnGamepadFocusChanged", null);
Cg([C.oI], Y.prototype, "OnUnhandledButtonDownEvent", null);
Cg([C.oI], Y.prototype, "PlayNavSound", null);
const Ae = new q.wd("FocusNavigation").Debug;
const pe = new q.wd("GamepadEvents").Debug;
class ge {
	m_Controller;
	m_context;
	m_window;
	m_ParentNavTree;
	m_rgChildNavTrees = [];
	m_ID;
	m_bIsMounted = false;
	m_bIsEnabled = false;
	m_tsLastActivated;
	m_Root;
	m_onActivateCallbacks = new CCallbackList();
	m_onDeactivateCallbacks = new CCallbackList();
	m_onActiveFocusStateChangedCallbacks = new CCallbackList();
	m_onChildTreesChanged = new CCallbackList();
	m_bVirtualFocus = false;
	m_bModal = false;
	m_bIsEmbeddedInLegacyTree = false;
	m_onGlobalButtonDown;
	m_onUnhandledButton;
	constructor(e, t, r, n) {
		this.m_Controller = e;
		this.m_context = t;
		this.m_ID = r;
		this.m_ParentNavTree = n;
		this.m_Root = new de.Bp(this, null, null);
		this.m_Root.SetProperties({
			layout: de.xj.COLUMN,
		});
	}
	SetUseVirtualFocus(e) {
		this.m_bVirtualFocus = e;
	}
	SetModal(e) {
		this.m_bModal = e;
	}
	get id() {
		return this.m_ID;
	}
	get Parent() {
		return this.m_ParentNavTree;
	}
	get ChildTrees() {
		return this.m_rgChildNavTrees;
	}
	get Root() {
		return this.m_Root;
	}
	get Controller() {
		return this.m_Controller;
	}
	get WindowContext() {
		return this.m_context;
	}
	get Window() {
		return this.m_window;
	}
	BUseVirtualFocus() {
		return this.m_bVirtualFocus;
	}
	BIsModal() {
		return this.m_bModal;
	}
	FindModalDescendant() {
		for (const e of this.m_rgChildNavTrees) {
			if (e.BIsModal() && e.BIsEnabled()) {
				return e;
			}
			const t = e.FindModalDescendant();
			if (t) {
				return t;
			}
		}
	}
	BIsContextActive() {
		return this.m_Controller.BIsInActiveContext(this);
	}
	CreateNode(e, t) {
		return new de.Bp(this, e, t);
	}
	RegisterNavigationItem(e, t) {
		e.OnMount(t);
		return () => e.OnUnmount();
	}
	OnChildActivated(e) {
		if (this.m_bIsMounted) {
			this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
		}
	}
	m_lastFocusNode;
	m_bWasActiveForLastFocusChange;
	m_lastFocusNodeXMovement = new he();
	m_lastFocusNodeYMovement = new he();
	GetLastFocusedNode() {
		return this.m_lastFocusNode;
	}
	GetLastFocusedMovementRect(e) {
		if (e == "x") {
			return this.m_lastFocusNodeXMovement.GetRect();
		} else if (e == "y") {
			return this.m_lastFocusNodeYMovement.GetRect();
		} else {
			return undefined;
		}
	}
	get OnActivateCallbacks() {
		return this.m_onActivateCallbacks;
	}
	get OnDeactivateCallbacks() {
		return this.m_onDeactivateCallbacks;
	}
	get OnChildTreesChangedCallbacks() {
		return this.m_onChildTreesChanged;
	}
	get OnActiveStateChangedCallbacks() {
		return this.m_onActiveFocusStateChangedCallbacks;
	}
	OnActivate(e) {
		this.m_tsLastActivated = performance.now();
		this.m_onActivateCallbacks.Dispatch(this, e);
		this.m_onActiveFocusStateChangedCallbacks.Dispatch(true, this);
	}
	OnDeactivate(e) {
		this.m_onDeactivateCallbacks.Dispatch(this, e);
		this.m_onActiveFocusStateChangedCallbacks.Dispatch(false, this);
		this.m_bWasActiveForLastFocusChange = false;
	}
	OnContextActiveStateChanged(e) {
		this.m_onActiveFocusStateChangedCallbacks.Dispatch(e, this);
	}
	IsActiveFocusNavTree() {
		return this.m_Controller.IsActiveFocusNavTree(this);
	}
	TakeFocus(e, t = false) {
		let r = false;
		if (t) {
			r = this.Root.BVisibleChildTakeFocus(e);
		} else if (this.m_lastFocusNode) {
			r = this.m_lastFocusNode.BTakeFocus(e);
		}
		r ||= this.Root.BTakeFocus(e);
		if (!r) {
			this.TransferFocus(e, this.Root);
		}
	}
	Activate(e = false) {
		this.m_Controller.OnGamepadNavigationTreeActivated(
			this.FindModalDescendant() ?? this,
			e,
		);
	}
	Deactivate() {
		this.m_Controller.BlurNavTree(this);
	}
	BIsEnabled() {
		return this.m_bIsEnabled;
	}
	BIsActive() {
		return (
			this.m_bIsMounted &&
			(this.m_Controller.IsActiveNavTree(this) ||
				this.m_Controller.IsActiveFocusNavTree(this))
		);
	}
	BIsActiveFocus() {
		return this.m_bIsMounted && this.m_Controller.IsActiveFocusNavTree(this);
	}
	BIsActiveWithinContext() {
		return (
			this.m_bIsMounted &&
			(this.m_context.m_LastActiveNavTree == this ||
				this.m_context.m_LastActiveFocusNavTree == this)
		);
	}
	GetTimeLastActivated() {
		return this.m_tsLastActivated;
	}
	MountNavTree(e) {
		this.m_window = e;
		const t = this.m_Root.Element;
		t.__nav_tree = this;
		if (t.__nav_wrapper) {
			t.__nav_wrapper.BindTree(this);
		}
		this.m_bIsMounted = true;
		const r = this.m_ParentNavTree
			? this.m_ParentNavTree.AddChildNavTree(this)
			: undefined;
		return () => {
			this.m_bIsMounted = false;
			if (r) {
				r();
			}
		};
	}
	SetIsEnabled(e) {
		if (this.m_bIsEnabled != e) {
			this.m_bIsEnabled = e;
			if (!this.m_bIsEnabled) {
				this.m_tsLastActivated = undefined;
			}
		}
	}
	SetIsEmbeddedInLegacyTree(e) {
		this.m_bIsEmbeddedInLegacyTree = e;
	}
	GetParentEmbeddedNavTree() {
		if (this.m_bIsEmbeddedInLegacyTree) {
			return this.m_ParentNavTree;
		} else {
			return undefined;
		}
	}
	SetOnUnhandledButtonCallback(e) {
		this.m_onUnhandledButton = e;
	}
	SetOnGlobalButtonDown(e) {
		this.m_onGlobalButtonDown = e;
	}
	OnRootButtonDown(e) {
		for (let t = this; t; t = t.Parent) {
			if (t.m_onGlobalButtonDown) {
				t.m_onGlobalButtonDown(e);
			}
			if (e.cancelBubble) {
				return false;
			}
		}
		return this.HandleButtonDownEventAsLogicalEvent(e);
	}
	HandleButtonDownEventAsLogicalEvent(e) {
		let { bUnhandled: t, bHadLogicalEventMapping: r } = IA(e);
		pe(
			`Logical gamepad Event fired: ${
				g.pR[e.detail.button]
			}, had logical event: ${r}, was handled: ${!t}`,
		);
		if (t && this.m_onUnhandledButton) {
			t = this.m_onUnhandledButton(e);
		}
		t &&= this.m_Controller.FireUnhandledGamepadEventCallbacks(e);
		e.stopPropagation();
		return t;
	}
	m_DeferredFocus = new Ce(this);
	get DeferredFocus() {
		return this.m_DeferredFocus;
	}
	AddChildNavTree(e) {
		this.m_rgChildNavTrees.push(e);
		this.OnChildTreesChangedCallbacks.Dispatch("add", e);
		return () => {
			FindAndRemove(this.m_rgChildNavTrees, e);
			this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
		};
	}
	TransferFocus(e, t, r) {
		this.m_Controller.BatchedUpdate(() => this.TransferFocusInternal(e, t, r));
	}
	TransferFocusInternal(e, t, r) {
		const n = this.m_lastFocusNode;
		if (n == t && (this.m_bWasActiveForLastFocusChange || !this.BIsActive())) {
			return;
		}
		Ae(
			`Transfer focus in ${this.id}, source: ${e && p.D$[e]}, from/to:`,
			n?.m_element,
			t?.m_element,
		);
		const i = {
			blurredNode: n,
			focusedNode: t,
			focusSource: e,
		};
		const a = ((e, t) => {
			if (!t || !e) {
				return null;
			}
			let r = t;
			let n = e;
			while (r.GetDepth() > n.GetDepth() && r.Parent) {
				r = r.Parent;
			}
			while (n.GetDepth() > r.GetDepth() && n.Parent) {
				n = n.Parent;
			}
			while (r != n && r && n) {
				r = r.Parent;
				n = n.Parent;
			}
			return r;
		})(n, t);
		if (n) {
			n.SetHasFocus(false);
			for (let e = n; e && e != a; e = e.Parent) {
				e.SetFocusWithin(false);
			}
		}
		if (t) {
			t.SetHasFocus(true);
			for (let e = t; e && e != a; e = e.Parent) {
				e.SetFocusWithin(true);
			}
		}
		let s = this.m_context.OnFocusChangeStart(e, this, n, t);
		if (t) {
			t.SetDOMFocusAndScroll(e, n);
		}
		if (n) {
			AE(n.Element, "vgp_onblur", i);
			if (!!n.m_FocusRing && (!t || n.m_FocusRing != t.m_FocusRing)) {
				n.m_FocusRing.OnBlur(e, n, t);
			}
		}
		if (t) {
			AE(t.Element, "vgp_onfocus", i);
			if (t.m_FocusRing) {
				if (n && t.m_FocusRing == n.m_FocusRing) {
					t.m_FocusRing.OnFocusChange(e, n, t);
				} else {
					t.m_FocusRing.OnFocus(e, t, n);
				}
			}
		}
		this.m_lastFocusNode = t;
		this.m_bWasActiveForLastFocusChange = this.BIsActive();
		if (r == "x") {
			this.m_lastFocusNodeXMovement.SetNode(t?.Element);
		} else if (r == "y") {
			this.m_lastFocusNodeYMovement.SetNode(t?.Element);
		} else {
			this.m_lastFocusNodeXMovement.Reset();
			this.m_lastFocusNodeYMovement.Reset();
		}
		this.m_context.OnFocusChangeComplete(s);
	}
}
class he {
	m_element;
	m_rect;
	SetNode(e) {
		this.m_element = e;
		this.m_rect = e ? e.getBoundingClientRect() : undefined;
	}
	Reset() {
		this.SetNode(undefined);
	}
	GetRect() {
		if (this.m_element?.isConnected) {
			return this.m_element.getBoundingClientRect();
		} else {
			return this.m_rect;
		}
	}
}
class Ce {
	m_tree;
	m_target;
	m_interval;
	m_schExecuteQueuedFocus = new CScheduledFunc();
	m_bSuppressed = false;
	constructor(e) {
		this.m_tree = e;
	}
	RequestFocus(e, t) {
		if (e) {
			this.m_target = {
				...t,
				node: e,
			};
			if (!this.m_interval && !this.m_bSuppressed) {
				this.m_schExecuteQueuedFocus.Schedule(1, () => {
					this.m_interval = undefined;
					this.ExecuteQueuedFocus();
				});
			}
		} else {
			this.m_target = undefined;
		}
	}
	BHasQueuedFocusNode() {
		return !!this.m_target;
	}
	BIsQueuedFocusNode(e) {
		return this.m_target && this.m_target.node == e;
	}
	SuppressFocus() {
		this.m_bSuppressed = true;
		this.ClearInterval();
	}
	Reset() {
		this.m_bSuppressed = false;
		this.m_target = undefined;
		this.ClearInterval();
	}
	ClearInterval() {
		this.m_schExecuteQueuedFocus.Cancel();
	}
	ExecuteQueuedFocus() {
		this.m_bSuppressed = false;
		if (this.m_target) {
			const { node: e, bFocusDescendant: t } = this.m_target;
			this.m_target = undefined;
			Ae(
				`DeferredFocus in ${this.m_tree.id} - focusing ${
					t ? "descendant of" : "node"
				} ${e.NavKey}`,
			);
			if (t) {
				if (!e.BChildTakeFocus(p.D$.APPLICATION)) {
					this.m_tree.TransferFocus(p.D$.APPLICATION, e);
				}
			} else {
				e.BTakeFocus(p.D$.APPLICATION);
			}
		}
	}
}
const fe = new q.wd("FocusNavigation").Debug;
class be {
	m_rootWindow;
	m_activeWindow;
	m_activeBrowserView;
	m_valueIsActive = SubscribableValue(false);
	m_controller;
	m_rgGamepadNavigationTrees = [];
	m_LastActiveNavTree;
	m_LastActiveFocusNavTree;
	m_bMounted = true;
	m_schDeferredActivate = new CScheduledFunc();
	m_FocusChangedCallbacks = new CCallbackList();
	m_bIsGamepadInputSuppressed = false;
	constructor(e, t, r) {
		this.m_controller = e;
		this.m_rootWindow = t;
		this.m_activeWindow = t;
		this.m_bIsGamepadInputSuppressed = r;
	}
	get RootWindow() {
		return this.m_rootWindow;
	}
	get ActiveWindow() {
		return this.m_activeWindow;
	}
	FindNavTreeInFocusedWindow() {
		for (let e = this.m_rgGamepadNavigationTrees.length - 1; e >= 0; e--) {
			const t = this.m_rgGamepadNavigationTrees[e];
			if (t.Window?.document.hasFocus()) {
				return t;
			}
		}
	}
	OnMount(e) {
		if (e == this.m_rootWindow) {
			this.m_bMounted = true;
		}
	}
	Destroy(e) {
		if (e == this.m_rootWindow) {
			fe(`${this.LogName(e)} Destroying context for window`);
			this.m_bMounted = false;
			this.m_schDeferredActivate.Cancel();
			this.SetActive(false, e);
		} else {
			fe(`${this.LogName(e)} Child window destroyed`);
		}
	}
	SetActive(e, t, r = undefined) {
		this.m_controller.BatchedUpdate(() => {
			const n = this.m_valueIsActive.Value != e;
			if (e) {
				this.m_activeWindow = t;
				this.m_activeBrowserView = r;
				this.m_controller.OnContextActivated(this);
			} else {
				this.m_activeBrowserView = undefined;
				this.m_controller.OnContextDeactivated(this, false);
			}
			this.m_valueIsActive.Set(e);
			if (n) {
				this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(e);
			}
		});
	}
	OnActivate(e) {
		if (
			!this.BIsActive() ||
			this.m_activeWindow != e ||
			this.m_activeWindow != e ||
			this.m_activeBrowserView !== undefined
		) {
			fe(
				`${this.LogName(e)} Activating context, there are ${
					this.m_rgGamepadNavigationTrees.length
				} trees in this context`,
			);
			this.SetActive(true, e);
		}
	}
	OnActivateBrowserView(e, t) {
		if (
			!this.BIsActive() ||
			this.m_activeWindow != e ||
			this.m_activeWindow != e ||
			this.m_activeBrowserView != t
		) {
			fe(`${this.LogName(e)} Browser View "${t}" activated in context`);
			this.SetActive(true, e, t);
		}
	}
	OnDeactivate(e) {
		if (this.m_activeWindow == e) {
			fe(`${this.LogName(e)} Deactivate context for window`);
			this.SetActive(false, e);
		} else {
			fe(
				`${this.LogName(e)} Blurred, but not deactivating because (${
					this.m_activeWindow?.name
				}) has focus.`,
			);
		}
	}
	OnDeactivateBrowserView(e, t) {
		fe(`${this.LogName(e)} Browser View "${t}" deactivated in context`);
		if (this.m_activeBrowserView == t) {
			this.SetActive(false, e, t);
		}
	}
	BIsGamepadInputSuppressed() {
		return this.m_bIsGamepadInputSuppressed;
	}
	BIsActive() {
		return this.m_valueIsActive.Value;
	}
	get IsActive() {
		return this.m_valueIsActive;
	}
	AddNavTree(e) {
		this.m_rgGamepadNavigationTrees.push(e);
	}
	LogName(e = undefined) {
		if (e && this.m_rootWindow != e) {
			return `(${this.m_rootWindow.name}) > (${e.name})`;
		} else {
			return `(${this.m_rootWindow.name})`;
		}
	}
	FindNavTreeToActivate() {
		for (let e = this.m_rgGamepadNavigationTrees.length - 1; e >= 0; e--) {
			const t = this.m_rgGamepadNavigationTrees[e];
			if (!t.BIsEnabled()) {
				continue;
			}
			return t.FindModalDescendant() ?? t;
		}
	}
	SetActiveNavTree(e, t = false) {
		if (e && this.m_LastActiveNavTree == e) {
			return;
		}
		const r = this.m_LastActiveNavTree;
		if (r) {
			FindAndRemove(this.m_rgGamepadNavigationTrees, r);
		}
		e ||= this.FindNavTreeToActivate();
		const n = this.m_LastActiveFocusNavTree == e;
		if (e) {
			FindAndRemove(this.m_rgGamepadNavigationTrees, e);
		}
		this.m_LastActiveNavTree = e;
		if (!e || !e.BUseVirtualFocus()) {
			this.m_LastActiveFocusNavTree = e;
		}
		fe(
			`${this.LogName(e?.Window)} Move from nav tree ${r?.id} to nav tree ${
				e?.id
			} ${t ? "taking focus" : "no focus"}`,
		);
		if (r) {
			this.m_rgGamepadNavigationTrees.push(r);
		}
		if (e) {
			this.m_rgGamepadNavigationTrees.push(e);
			if (!n && !!t && !e.DeferredFocus.BHasQueuedFocusNode()) {
				e.DeferredFocus.RequestFocus(e.Root);
			}
		}
		if (r && r != this.m_LastActiveFocusNavTree) {
			r.OnDeactivate(e);
		}
		if (e && !n) {
			e.OnActivate(r);
		}
	}
	BlurNavTree(e) {
		if (this.m_LastActiveNavTree == e) {
			this.SetActiveNavTree(undefined, true);
		}
		FindAndRemove(this.m_rgGamepadNavigationTrees, e);
		this.m_rgGamepadNavigationTrees.unshift(e);
	}
	UnregisterGamepadNavigationTree(e) {
		FindAndRemove(this.m_rgGamepadNavigationTrees, e);
		fe(
			`(${this.m_rootWindow.name}) Unregister tree ${e?.id} ${
				this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"
			}`,
		);
		if (this.m_LastActiveNavTree == e) {
			this.m_LastActiveNavTree = undefined;
			if (this.m_bMounted) {
				this.m_schDeferredActivate.Schedule(1, () => {
					if (!this.m_LastActiveNavTree) {
						this.SetActiveNavTree(undefined, true);
					}
				});
			}
		}
	}
	get FocusChangedCallbacks() {
		return this.m_FocusChangedCallbacks;
	}
	m_iFocusChangeStack = 0;
	m_ActiveFocusChange;
	OnFocusChangeStart(e, t, r, n) {
		if (this.m_iFocusChangeStack == 0) {
			this.m_ActiveFocusChange = {
				source: e,
				from: r || undefined,
				to: n || undefined,
			};
		} else if (this.m_ActiveFocusChange) {
			if (!this.m_ActiveFocusChange.from && r) {
				this.m_ActiveFocusChange.from = r;
			}
			if (n) {
				this.m_ActiveFocusChange.to = n;
			}
		}
		return this.m_iFocusChangeStack++;
	}
	OnFocusChangeComplete(e) {
		this.m_iFocusChangeStack--;
		AssertMsg(e == this.m_iFocusChangeStack, "out of order focus pop");
		if (this.m_iFocusChangeStack == 0) {
			const { source: e, from: t, to: r } = this.m_ActiveFocusChange ?? {};
			this.m_FocusChangedCallbacks.Dispatch(e, t, r);
		}
	}
}
const ye = new q.wd("FocusNavigation").Debug;
const Se = new q.wd("FocusNavigation").Assert;
const we = "focus-nav-show-debug-focus-ring";
function Be(e, t) {
	return (
		e?.eActivationSourceType === t?.eActivationSourceType &&
		e?.nActiveGamepadIndex === t?.nActiveGamepadIndex &&
		e?.nLastActiveGamepadIndex === t?.nLastActiveGamepadIndex
	);
}
class ve {
	m_rgGamepadInputSources = [];
	m_DefaultContext;
	m_rgAllContexts = [];
	m_ActiveContext;
	m_LastActiveContext;
	m_fnCatchAllGamepadInput = null;
	m_UnhandledButtonEventsCallbacks = new CCallbackList();
	m_navigationSource = SubscribableValue(
		{
			eActivationSourceType: g.Vz.UNKNOWN,
			nActiveGamepadIndex: -1,
			nLastActiveGamepadIndex: -1,
		},
		Be,
	);
	m_navigationSourceSupportsFocus = MappedSubscribableValue(
		this.m_navigationSource,
		(e) =>
			e?.eActivationSourceType === g.Vz.GAMEPAD ||
			e?.eActivationSourceType === g.Vz.KEYBOARD_SIMULATOR,
	);
	m_bShowDebugFocusRing = SubscribableValue(false);
	m_bRestoringHistory = false;
	m_fnGamepadEventUpdateBatcher = (e) => e();
	constructor() {
		window.FocusNavController = this;
	}
	Init() {
		this.m_bShowDebugFocusRing.Set(sessionStorage.getItem(we) == "shown");
	}
	CreateContext(e, t) {
		const r = new be(this, e, t);
		this.m_rgAllContexts.push(r);
		return r;
	}
	GetDefaultContext() {
		this.m_DefaultContext ||= this.CreateContext(window, false);
		return this.m_DefaultContext;
	}
	GetActiveContext() {
		return this.m_ActiveContext;
	}
	FindAnActiveContext() {
		if (!this.m_ActiveContext && this.m_rgAllContexts.length != 0) {
			console.warn("No active context; finding one");
			for (const e of this.m_rgAllContexts) {
				const t = e.FindNavTreeInFocusedWindow();
				if (t) {
					ye(
						`${e.LogName(
							t.Window,
						)} Found a focused window; setting this context as active.`,
					);
					this.m_ActiveContext = e;
					this.m_ActiveContext.OnActivate(t.Window);
					break;
				}
			}
		}
		if (!this.m_ActiveContext && this.m_LastActiveContext) {
			ye(
				`Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
			);
			this.m_ActiveContext = this.m_LastActiveContext;
			this.m_ActiveContext.OnActivate(
				this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
			);
		}
		return this.m_ActiveContext;
	}
	SetShowDebugFocusRing(e) {
		this.m_bShowDebugFocusRing.Set(e);
		((e) => {
			if (e) {
				sessionStorage.setItem(we, "shown");
			} else {
				sessionStorage.removeItem(we);
			}
		})(e);
	}
	GetShowDebugFocusRing() {
		return this.m_bShowDebugFocusRing;
	}
	RegisterInputSource(e) {
		let t = new e0();
		this.m_rgGamepadInputSources.push(e);
		t.PushArrayRemove(this.m_rgGamepadInputSources, e);
		t.Push(e.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister);
		t.Push(e.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister);
		t.Push(
			e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange).Unregister,
		);
		e.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? false);
		t.Push(() => e.SetRepeatAllowed());
		if (e.GetSourceType() == g.Vz.GAMEPAD) {
			this.UpdateDefaultSourceToGamepad();
		}
		return t.GetUnregisterFunc();
	}
	UpdateDefaultSourceToGamepad() {
		if (this.m_navigationSource.Value.eActivationSourceType == g.Vz.UNKNOWN) {
			this.m_navigationSource.Set({
				...this.m_navigationSource.Value,
				eActivationSourceType: g.Vz.GAMEPAD,
			});
		}
	}
	SetGamepadEventUpdateBatcher(e) {
		this.m_fnGamepadEventUpdateBatcher = e;
	}
	get NavigationSource() {
		return this.m_navigationSource;
	}
	get NavigationSourceSupportsFocus() {
		return this.m_navigationSourceSupportsFocus;
	}
	DispatchVirtualButtonClick(e, t) {
		let r;
		if (t) {
			r = this.GetActiveContext() ?? this.FindAnActiveContext();
		}
		this.OnButtonDown(e, g.Vz.GAMEPAD, -1, undefined, t, r, true);
		this.OnButtonUp(e, g.Vz.GAMEPAD, -1, undefined, t, r, true);
	}
	DispatchVirtualGamepad(e, t) {
		switch (e) {
			case "vgp_onbuttondown": {
				this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
				break;
			}
			case "vgp_onbuttonup": {
				this.OnButtonUp(t.button, t.source, -1);
			}
		}
	}
	BGlobalGamepadButton(e) {
		return (
			e === g.pR.STEAM_GUIDE ||
			e === g.pR.STEAM_QUICK_MENU ||
			e === g.pR.STEAM_QUICK_MENU ||
			e === g.pR.CANCEL
		);
	}
	GetEventTarget(e, t, r = false) {
		let n = this.GetActiveContext();
		if (!n && r) {
			n = this.FindAnActiveContext();
		}
		let i = n?.ActiveWindow?.document.activeElement;
		if (n?.m_LastActiveNavTree) {
			t ||= this.m_navigationSource?.Value?.eActivationSourceType;
			if (
				!n.m_LastActiveNavTree.GetLastFocusedNode() &&
				(t == g.Vz.GAMEPAD || t == g.Vz.KEYBOARD_SIMULATOR) &&
				!(ye(
					`GetEventTarget: Context ${n.LogName()} tree ${
						n.m_LastActiveNavTree.id
					} has no focused node, ${r ? "finding one" : "will not find one"}`,
				),
				r && n.m_LastActiveNavTree.TakeFocus(p.D$.GAMEPAD, true),
				this.BGlobalGamepadButton(e))
			) {
				return [undefined, n];
			}
			if (n.m_LastActiveNavTree.GetLastFocusedNode()) {
				i = n.m_LastActiveNavTree?.GetLastFocusedNode()?.Element;
			} else {
				ye(
					`GetEventTarget: Context ${n.LogName()} tree ${
						n.m_LastActiveNavTree.id
					} still has no focused node - will fall back to document.activeElement`,
				);
			}
		}
		return [i, n];
	}
	ChangeNavigationSource(e, t) {
		let r = this.m_navigationSource.Value;
		let n = r.nLastActiveGamepadIndex;
		if (r.nActiveGamepadIndex && r.nActiveGamepadIndex >= 0) {
			n = r.nActiveGamepadIndex;
		}
		this.m_navigationSource.Set({
			eActivationSourceType: e,
			nActiveGamepadIndex: t,
			nLastActiveGamepadIndex: n,
		});
		if (
			e != g.Vz.MOUSE &&
			BSharedJSContextHasMethod("Browser.HideCursorUntilMouseEvent")
		) {
			SteamClient.Browser.HideCursorUntilMouseEvent();
		}
		return r.eActivationSourceType != e;
	}
	OnButtonActionInternal(e, t, r, n, i, a, s, o) {
		if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t)) {
			if (e) {
				ye(
					"Ignoring button press - gamepad input is suppressed by parent window",
				);
			}
			return;
		}
		Se(
			!!a == !!s,
			"Must set both overrideContext and overrideElement or neither",
		);
		let l = a;
		let c = s;
		if (l == null || c == null) {
			[l, c] = this.GetEventTarget(t, r, e);
		}
		if (!c?.BIsGamepadInputSuppressed() || o) {
			this.ChangeNavigationSource(r, n);
			if (e) {
				ye(`Firing ${g.pR[t]} in tree ${c?.m_LastActiveNavTree?.id} at `, l);
			}
			this.BatchedUpdate(() =>
				AE(l, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
					button: t,
					source: r,
					is_repeat: i,
				}),
			);
		} else {
			ye(
				`Suppressing ${g.pR[t]} input on element ${l?.className} because tree ${c?.m_LastActiveNavTree?.id} has it disabled`,
			);
		}
	}
	OnButtonDown(e, t, r, n, i, a, s) {
		this.OnButtonActionInternal(true, e, t, r, n, i, a, s);
	}
	OnButtonUp(e, t, r, n, i, a, s) {
		this.OnButtonActionInternal(false, e, t, r, false, i, a, s);
	}
	BatchedUpdate(e) {
		this.m_fnGamepadEventUpdateBatcher(e);
	}
	OnNavigationTypeChange(e) {
		if (
			this.ChangeNavigationSource(e, -1) &&
			document.hasFocus() &&
			(e == g.Vz.MOUSE || e == g.Vz.TOUCH) &&
			this.m_ActiveContext?.m_LastActiveNavTree
		) {
			const e = this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode();
			const t = ((e) => {
				if (!IsHTMLElement(e)) {
					return false;
				}
				const t = e.tagName;
				const r = IsHTMLInputElement(e) ? e.type : undefined;
				return IsHTMLElementTextInput(t, r);
			})(e?.Element)
				? e
				: null;
			this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
				p.D$.APPLICATION,
				t,
			);
		}
	}
	NewGamepadNavigationTree(e, t, r) {
		return new ge(this, e, t, r);
	}
	RegisterGamepadNavigationTree(e, t) {
		const r = e.WindowContext;
		r.AddNavTree(e);
		const n = e.MountNavTree(t);
		if (!e.Parent && e.BIsEnabled()) {
			r.SetActiveNavTree(e, true);
			this.m_LastActiveContext = r;
			this.m_ActiveContext = r;
		}
		return () => {
			n();
			r.UnregisterGamepadNavigationTree(e);
		};
	}
	OnGamepadNavigationTreeActivated(e, t = false) {
		e.WindowContext.SetActiveNavTree(e, t);
	}
	OnGamepadNavigationTreeFocused(e, t, r = false) {
		const n = e.WindowContext;
		if (n != this.m_ActiveContext) {
			ye(`(${n.LogName(e.Window)}) Focus event in inactive window`);
		}
		if (e != n.m_LastActiveFocusNavTree && e != n.m_LastActiveNavTree) {
			if (
				n.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
				e.GetParentEmbeddedNavTree() == n.m_LastActiveFocusNavTree
			) {
				ye(
					`There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
				);
				e.Activate();
			} else {
				ye(
					`There was a focus event in ${e.id}, but the active nav tree is ${
						n.m_LastActiveFocusNavTree?.id
					} so it is being ignored.  Source: ${t && p.D$[t]}.`,
				);
			}
		}
	}
	BlurNavTree(e) {
		e.WindowContext.BlurNavTree(e);
	}
	IsActiveFocusNavTree(e) {
		return Boolean(e && e == this.m_ActiveContext?.m_LastActiveFocusNavTree);
	}
	IsActiveNavTree(e) {
		return Boolean(e && e == this.m_ActiveContext?.m_LastActiveNavTree);
	}
	BIsInActiveContext(e) {
		return Boolean(e && e.WindowContext == this.m_ActiveContext);
	}
	RegisterForUnhandledButtonDownEvents(e) {
		return this.m_UnhandledButtonEventsCallbacks.Register(e);
	}
	FireUnhandledGamepadEventCallbacks(e) {
		return (
			!this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
			(this.m_UnhandledButtonEventsCallbacks.Dispatch(e), false)
		);
	}
	SetSuppressGamepadInput(e) {
		this.m_fnCatchAllGamepadInput = e ? () => true : null;
	}
	SetCatchAllGamepadInput(e) {
		this.m_fnCatchAllGamepadInput = e;
	}
	TakeFocusChangingIFrame() {
		window.focus();
		let e =
			this.m_ActiveContext?.m_LastActiveFocusNavTree ||
			this.m_ActiveContext?.m_LastActiveNavTree;
		if (e) {
			e.TakeFocus(p.D$.APPLICATION);
		}
	}
	OnContextActivated(e) {
		this.m_ActiveContext = e;
		this.m_LastActiveContext = e;
	}
	OnContextDeactivated(e, t) {
		if (t) {
			if (this.m_LastActiveContext == e) {
				this.m_LastActiveContext = undefined;
			}
			FindAndRemove(this.m_rgAllContexts, e);
		}
		if (this.m_ActiveContext == e) {
			this.m_ActiveContext = undefined;
		}
	}
	BIsRestoringHistory() {
		return this.m_bRestoringHistory;
	}
	async RestoreHistoryTransaction(e) {
		this.m_bRestoringHistory = true;
		try {
			await e();
		} finally {
			this.m_bRestoringHistory = false;
		}
	}
}
Cg([ce.o], ve.prototype, "OnButtonDown", null);
Cg([ce.o], ve.prototype, "OnButtonUp", null);
Cg([ce.o], ve.prototype, "OnNavigationTypeChange", null);
const We = Le.Message;
class Ve extends We {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		We.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ve.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new Ve();
	}
	static deserializeBinary(e) {
		let t = new Le.BinaryReader(e);
		let r = new Ve();
		return Ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new Le.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new Le.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSharedJSContext_GetDesiredSteamUIWindows_Request";
	}
}
class He extends We {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!He.prototype.id) {
			ze.Sg(He.M());
		}
		We.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		He.sm_m ||= {
			proto: He,
			fields: {
				id: {
					n: 1,
					br: ze.qM.readInt32,
					bw: ze.gp.writeInt32,
				},
				pid: {
					n: 2,
					br: ze.qM.readInt32,
					bw: ze.gp.writeInt32,
				},
				browser_id: {
					n: 3,
					br: ze.qM.readInt32,
					bw: ze.gp.writeInt32,
				},
				window_type: {
					n: 4,
					br: ze.qM.readInt32,
					bw: ze.gp.writeInt32,
				},
				x: {
					n: 5,
					br: ze.qM.readInt32,
					bw: ze.gp.writeInt32,
				},
				y: {
					n: 6,
					br: ze.qM.readInt32,
					bw: ze.gp.writeInt32,
				},
				appid: {
					n: 7,
					br: ze.qM.readUint64String,
					bw: ze.gp.writeUint64String,
				},
				parent_window_handle: {
					n: 8,
					br: ze.qM.readUint64String,
					bw: ze.gp.writeUint64String,
				},
				app_name: {
					n: 9,
					br: ze.qM.readString,
					bw: ze.gp.writeString,
				},
				gamepadui_via_gamescope: {
					n: 10,
					br: ze.qM.readBool,
					bw: ze.gp.writeBool,
				},
			},
		};
		return He.sm_m;
	}
	static MBF() {
		He.sm_mbf ||= ze.w0(He.M());
		return He.sm_mbf;
	}
	toObject(e = false) {
		return He.toObject(e, this);
	}
	static toObject(e, t) {
		return ze.BT(He.M(), e, t);
	}
	static fromObject(e) {
		return ze.Uq(He.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Le.BinaryReader(e);
		let r = new He();
		return He.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return ze.zj(He.MBF(), e, t);
	}
	serializeBinary() {
		const e = new Le.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		ze.i0(He.M(), e, t);
	}
	serializeBase64String() {
		const e = new Le.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamUIBrowserWindow";
	}
}
class je extends We {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!je.prototype.windows) {
			ze.Sg(je.M());
		}
		We.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		je.sm_m ||= {
			proto: je,
			fields: {
				windows: {
					n: 1,
					c: He,
					r: true,
					q: true,
				},
			},
		};
		return je.sm_m;
	}
	static MBF() {
		je.sm_mbf ||= ze.w0(je.M());
		return je.sm_mbf;
	}
	toObject(e = false) {
		return je.toObject(e, this);
	}
	static toObject(e, t) {
		return ze.BT(je.M(), e, t);
	}
	static fromObject(e) {
		return ze.Uq(je.M(), e);
	}
	static deserializeBinary(e) {
		let t = new Le.BinaryReader(e);
		let r = new je();
		return je.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return ze.zj(je.MBF(), e, t);
	}
	serializeBinary() {
		const e = new Le.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		ze.i0(je.M(), e, t);
	}
	serializeBase64String() {
		const e = new Le.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSharedJSContext_GetDesiredSteamUIWindows_Response";
	}
}
let qe;
((e) => {
	e.GetDesiredSteamUIWindowsHandler = {
		name: "SharedJSContext.GetDesiredSteamUIWindows#1",
		request: Ve,
		response: je,
	};
	e.GetDesiredSteamUIWindows = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SharedJSContext.GetDesiredSteamUIWindows#1",
				I8(Ve, e),
				je,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetDesiredSteamUIWindows = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SharedJSContext.GetDesiredSteamUIWindows#1",
				I8(Ve, e),
				je,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
})((qe ||= {}));
class Qe {
	m_Parent;
	m_mapAppWindows = new i.Es();
	m_mapOverlayPopupByPID = i.sH.map();
	m_mapDesiredWindows = new Map();
	m_mapDesiredWindowInstances = new i.Es();
	m_mapAppOverlayPosition = new Map();
	m_simulatedVRGamepadUIOnDesktopInstance = undefined;
	constructor(e) {
		Gn(this);
		this.m_Parent = e;
	}
	async InitWithoutUser() {
		Ne.Q.RegisterForBrowserCreated(this.OnOverlayBrowserCreated);
		Ne.Q.RegisterForBrowserClosed(this.OnOverlayBrowserClosed);
		Ne.Q.RegisterForBrowserUpdated(this.OnOverlayBrowserUpdated);
		Ne.Q.RegisterForNotificationPositionChanged(
			this.OnOverlayNotificationPositionChanged,
		);
		SteamClient.UI.RegisterDesiredSteamUIWindowsChanged(
			this.OnDesiredSteamUIWindowsChanged,
		);
	}
	get MainWindowInstance() {
		let e = Array.from(this.m_mapDesiredWindowInstances.values()).find(
			(e) =>
				e.WindowType == Fe.W7.MainGamepadUI ||
				e.WindowType == Fe.W7.MainDesktopUI,
		);
		if (e == null) {
			e = this.GamepadUIVRWindowInstance;
		}
		return e;
	}
	get GamepadUIMainWindowInstance() {
		return this.GetSteamUIWindowByType(Fe.W7.MainGamepadUI);
	}
	get GamepadUIVRWindowInstance() {
		return this.GetSteamUIWindowByType(Fe.W7.VR);
	}
	BHasAppWindow(e) {
		return this.GetAppWindowIDs(e).length != 0;
	}
	OnAppNoLongerRunning(e) {
		this.m_mapAppWindows.delete(e);
		this.m_mapAppOverlayPosition.delete(e);
	}
	AddTestWindowsOverlayBrowser(e) {
		let t = {
			m_unPID: 0,
			m_nBrowserID: -1,
			m_eBrowserType: Fe.W.EBrowserType_OffScreen,
			m_unAppID: e,
		};
		this.OnOverlayBrowserCreated(t, 1280, 800, 1);
	}
	BHasOverlayWindowForApp(e) {
		return this.GetOverlayInstances(e).length != 0;
	}
	OnDesiredSteamUIWindowsChanged() {
		SteamClient.UI.GetDesiredSteamUIWindows()
			.then((e) => {
				this.UpdateDesiredWindows(e);
			})
			.catch((e) => {
				console.error("Failed GetDesiredSteamUIWindows:", e);
			});
	}
	async DEBUG_DumpDesiredSteamUIWindows() {
		const e = await qe.GetDesiredSteamUIWindows({});
		console.log(e.Body().toObject());
		return e;
	}
	UpdateDesiredWindows(e) {
		let t = new Map(this.m_mapDesiredWindows);
		for (let r of e) {
			t.delete(r.unID);
			if (!this.m_mapDesiredWindows.get(r.unID)) {
				this.m_mapDesiredWindows.set(r.unID, r);
				let e = {
					m_unPID: r.unPID,
					m_nBrowserID: r.nBrowserID,
					m_unAppID: r.appid,
					m_eUIMode: -1,
				};
				switch (r.windowType) {
					case Fe.W7.MainGamepadUI: {
						e.m_eUIMode = 4;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateMainGamepadUIWindow(e),
						);
						break;
					}
					case Fe.W7.Keyboard: {
						e.m_eUIMode = 4;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateStandaloneKeyboardWindow(e, r.x, r.y),
						);
						break;
					}
					case Fe.W7.ControllerConfigurator: {
						e.m_eUIMode = 4;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateStandaloneControllerConfiguratorWindow(
								e,
								r.appid,
								r.strAppName,
							),
						);
						break;
					}
					case Fe.W7.MainDesktopUI: {
						e.m_eUIMode = 7;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateMainDesktopWindow(e),
						);
						break;
					}
					case Fe.W7.VR: {
						e.m_eUIMode = 4;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateVRWindow(e, r.bVRGamepadUIViaGamescope),
						);
						break;
					}
					case Fe.W7.DesktopLogin: {
						e.m_eUIMode = 7;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateDesktopLoginWindow(e),
						);
						break;
					}
					case Fe.W7.SteamChinaReviewLauncher: {
						e.m_eUIMode = 7;
						this.m_mapDesiredWindowInstances.set(
							r.unID,
							this.CreateSteamChinaReviewLauncherWindow(e),
						);
					}
				}
			}
		}
		t.forEach((e, t) => {
			this.m_mapDesiredWindows.delete(t);
			this.m_mapDesiredWindowInstances.delete(t);
		});
	}
	OnOverlayBrowserCreated(e, t, r, n) {
		const a = oy.MainInstanceUIMode;
		if (a != 4 && a != 7 && a != 0) {
			return;
		}
		const [s] = d.rV.GetClientSetting("always_use_gamepadui_overlay");
		const o = De.Fd.Get().GetControllers().length > 0;
		let l;
		l =
			a == 4 || (s && o)
				? new Ge.T(
						sH({
							browserInfo: e,
							eWindowType: Fe.W7.OverlayGamepadUI,
							strUserAgentIdentifier: "Valve Steam Gamepad",
							appid: e.m_unAppID,
							gameid: e.m_gameID,
							nScreenWidth: t,
							nScreenHeight: r,
							flDisplayScale: n,
						}),
					)
				: new Ge.T(
						sH({
							browserInfo: e,
							eWindowType: Fe.W7.OverlayDesktopUI,
							strUserAgentIdentifier: "Valve Steam Client",
							appid: e.m_unAppID,
							gameid: e.m_gameID,
							nScreenWidth: t,
							nScreenHeight: r,
							flDisplayScale: n,
						}),
					);
		if (this.m_mapAppOverlayPosition.has(e.m_unAppID)) {
			let t = this.m_mapAppOverlayPosition.get(e.m_unAppID);
			l.SetNotificationPosition(t.position, t.horizontalInset, t.verticalInset);
		}
		this.m_mapOverlayPopupByPID.set(e.m_unPID, l);
	}
	OnOverlayBrowserClosed(e) {
		this.m_mapOverlayPopupByPID.delete(e.m_unPID);
	}
	OnOverlayBrowserUpdated(e, t, r, n) {
		let i = this.m_mapOverlayPopupByPID.get(e.m_unPID);
		if (i) {
			i.params.nScreenWidth = t;
			i.params.nScreenHeight = r;
			i.params.flDisplayScale = n;
		}
	}
	OnOverlayNotificationPositionChanged(e, t, r, n) {
		this.m_mapAppOverlayPosition.set(e, {
			position: t,
			horizontalInset: r,
			verticalInset: n,
		});
		this.GetOverlayInstances(e).forEach((e) =>
			e.SetNotificationPosition(t, r, n),
		);
	}
	GetWindowInstanceFromWindow(e) {
		let t = this.SteamUIWindows.filter((t) => t.BrowserWindow == e);
		if (t.length != 0) {
			return t[0];
		} else {
			return null;
		}
	}
	GetControllerConfiguratorWindowFromAppID(e) {
		return Array.from(this.m_mapDesiredWindowInstances.values()).find(
			(t) => t.IsControllerConfiguratorWindow() && t.params.appid == e,
		);
	}
	get SteamUIWindows() {
		const e = [];
		e.push(...this.m_mapOverlayPopupByPID.values());
		e.push(...this.m_mapDesiredWindowInstances.values());
		if (Oe.hG.GetToggle(20)) {
			this.m_simulatedVRGamepadUIOnDesktopInstance ||=
				this.CreateSimulatedVRWindow();
			e.push(this.m_simulatedVRGamepadUIOnDesktopInstance);
		}
		return e;
	}
	get OverlayWindows() {
		const e = [];
		e.push(...this.m_mapOverlayPopupByPID.values());
		return e;
	}
	GetSteamUIWindowByType(e) {
		return Array.from(this.m_mapDesiredWindowInstances.values()).find(
			(t) => t.WindowType == e,
		);
	}
	EnsureMainWindowCreated(e = true) {
		let t;
		switch (oy.MainInstanceUIMode) {
			case 7: {
				t = this.GetSteamUIWindowByType(Fe.W7.MainDesktopUI);
				break;
			}
			case 4: {
				t = this.GetSteamUIWindowByType(Fe.W7.MainGamepadUI);
			}
		}
		if (t?.BrowserWindow) {
			let r = e
				? H.iE.k_EWindowBringToFrontAndForceOS
				: H.iE.k_EWindowBringToFrontWithoutForcingOS;
			t?.BrowserWindow?.SteamClient.Window.BringToFront(r);
		} else {
			SteamClient.UI.EnsureMainWindowCreated();
		}
	}
	CreateMainGamepadUIWindow(e) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.MainGamepadUI,
			strUserAgentIdentifier: "Valve Steam Gamepad",
		});
	}
	CreateMainDesktopWindow(e) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.MainDesktopUI,
			strUserAgentIdentifier: "Valve Steam Client",
		});
	}
	CreateSteamChinaReviewLauncherWindow(e) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.SteamChinaReviewLauncher,
			strUserAgentIdentifier: "Valve Steam Client",
		});
	}
	CreateDesktopLoginWindow(e) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.DesktopLogin,
			strUserAgentIdentifier: "Valve Steam Client",
		});
	}
	CreateStandaloneKeyboardWindow(e, t, r) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.Keyboard,
			strUserAgentIdentifier: "Valve Steam Gamepad",
			initialX: t,
			initialY: r,
		});
	}
	CreateStandaloneControllerConfiguratorWindow(e, t, r) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.ControllerConfigurator,
			strUserAgentIdentifier: "Valve Steam Gamepad",
			appid: t,
			strAppName: r,
		});
	}
	BHasStandaloneConfiguratorWindow() {
		let e = this.m_mapDesiredWindowInstances.values();
		return (
			Array.from(e).findIndex((e) => e.IsControllerConfiguratorWindow()) >= 0
		);
	}
	BHasStandaloneKeyboard() {
		let e = this.m_mapDesiredWindowInstances.values();
		return Array.from(e).findIndex((e) => e.IsStandaloneKeyboardWindow()) >= 0;
	}
	BHasGamepadUIMainWindow() {
		return this.GamepadUIMainWindowInstance?.BrowserWindow != null;
	}
	BHasVRWindow() {
		let e = this.m_mapDesiredWindowInstances.values();
		return Array.from(e).findIndex((e) => e.IsVRWindow()) >= 0;
	}
	GetVRWindowInstance() {
		let e = this.m_mapDesiredWindowInstances.values();
		return Array.from(e).find((e) => e.IsVRWindow());
	}
	GetSimultedVRWindowInstance() {
		return this.m_simulatedVRGamepadUIOnDesktopInstance;
	}
	CreateVRWindow(e, t) {
		return new Ge.T({
			browserInfo: e,
			eWindowType: Fe.W7.VR,
			strUserAgentIdentifier: "Valve Steam Gamepad VR",
			bSimulateOnDesktop: false,
			bViaGamescope: t,
		});
	}
	CreateSimulatedVRWindow() {
		return new Ge.T({
			browserInfo: {
				m_unPID: 0,
				m_nBrowserID: -1,
				m_eUIMode: 4,
			},
			eWindowType: Fe.W7.VR,
			strUserAgentIdentifier: "Valve Steam Gamepad VR",
			bSimulateOnDesktop: true,
			bViaGamescope: false,
		});
	}
	GetOverlayInstance(e, t) {
		return Array.from(this.m_mapOverlayPopupByPID.values())
			.reverse()
			.find(
				(r) =>
					r.params.browserInfo.m_unAppID == e &&
					(t == 0 || r.params.browserInfo.m_unPID == t),
			);
	}
	GetOverlayInstances(e) {
		let t = Array.from(this.m_mapOverlayPopupByPID.values()).reverse();
		t = t.filter((t) => t.params.browserInfo.m_unAppID == e);
		return t;
	}
	GetOverlayInstanceWithFallback(e, t) {
		let r;
		r =
			Pe.qL.IsSteamVRRunning && Pe.qL.IsVRHMDAwake
				? this.GetVRWindowInstance()
				: r || this.GetOverlayInstance(e, t);
		return r || this.MainWindowInstance;
	}
	GetInstanceForPID(e) {
		if (e == 0) {
			return this.MainWindowInstance;
		}
		return this.m_mapOverlayPopupByPID.get(e);
	}
	SetFocusedAppWindowID(e, t) {
		t = t ?? 0;
		let r = this.m_mapAppWindows.get(e);
		if (!r) {
			r = {
				appid: e,
				focusedWindowID: t,
				windowids: t ? [t] : [],
			};
			this.m_mapAppWindows.set(e, r);
			return;
		}
		if (r.focusedWindowID != t) {
			r.focusedWindowID = t;
			this.m_mapAppWindows.set(e, r);
		}
	}
	get MainRunningAppWindowIDs() {
		let e = this.m_Parent.MainRunningAppID;
		return e && this.GetAppWindowIDs(e);
	}
	GetAppWindowIDs(e) {
		if (e) {
			let t = this.m_mapAppWindows.get(e);
			if (t) {
				return t.windowids;
			} else {
				return [];
			}
		}
		return [];
	}
	GetAppFocusedWindowID(e) {
		let t = 0;
		if (e) {
			let r = this.m_mapAppWindows.get(e);
			t = r?.focusedWindowID;
		}
		return t ?? 0;
	}
	SetRunningAppWindowIDs(e, t) {
		let r = this.m_mapAppWindows.get(e);
		if (!r) {
			r = {
				appid: e,
				focusedWindowID: 0,
				windowids: t,
			};
			this.m_mapAppWindows.set(e, r);
			return;
		}
		if (!ArrayEquals(t, r.windowids)) {
			r.windowids = t;
			if (r.focusedWindowID != 0 && !r.windowids.includes(r.focusedWindowID)) {
				r.focusedWindowID = 0;
			}
		}
	}
	RemoveRunningAppWindowIDs(e) {
		this.m_mapAppWindows.delete(e);
	}
}
Cg([ce.o], Qe.prototype, "OnDesiredSteamUIWindowsChanged", null);
Cg([i.XI], Qe.prototype, "UpdateDesiredWindows", null);
Cg([i.XI.bound], Qe.prototype, "OnOverlayBrowserCreated", null);
Cg([ce.o], Qe.prototype, "OnOverlayBrowserClosed", null);
Cg([i.XI.bound], Qe.prototype, "OnOverlayBrowserUpdated", null);
Cg([i.XI.bound], Qe.prototype, "OnOverlayNotificationPositionChanged", null);
Cg([i.EW], Qe.prototype, "SteamUIWindows", null);
Cg([i.EW], Qe.prototype, "OverlayWindows", null);
Cg([i.XI], Qe.prototype, "SetFocusedAppWindowID", null);
Cg([i.XI], Qe.prototype, "SetRunningAppWindowIDs", null);
Cg([i.XI], Qe.prototype, "RemoveRunningAppWindowIDs", null);
class it {
	m_mapLaunchOptions = new Map();
	m_rgPendingUpdates = [];
	constructor() {
		Gn(this);
	}
	GetLaunchOptionsForApp(e) {
		const t = this.m_mapLaunchOptions.get(e);
		if (t == null) {
			SteamClient?.Apps?.GetLaunchOptionsForApp(e)?.then((t) => {
				this.m_rgPendingUpdates.push({
					appid: e,
					options: t,
				});
				this.ApplyUpdates();
			});
			return;
		} else if (t == "loading") {
			return undefined;
		} else {
			return t;
		}
	}
	ApplyUpdates() {
		const e = this.m_rgPendingUpdates;
		this.m_rgPendingUpdates = [];
		h5(() => {
			for (const { appid: t, options: r } of e) {
				this.m_mapLaunchOptions.set(t, r);
			}
		});
	}
}
Cg([i.sH], it.prototype, "m_mapLaunchOptions", undefined);
Cg([s_1(50, false)], it.prototype, "ApplyUpdates", null);
const at = new it();
const ot = new q.wd("LibraryUIStore/BasicUIStore");
const lt = new q.wd("SteamClient");
const ct = "gamepadui_last_library_tab_and_collection";
let mt;
((e) => {
	e.Dropdowns = "Dropdowns";
	e.Modals = "Modals";
	e.Buttons = "Buttons";
	e.Sliders = "Sliders";
	e.Toggles = "Toggles";
	e.OtherControls = "Misc";
	e.Glyphs = "Glyphs";
	e.SVG = "SVG";
	e.Input = "Input";
	e.Type = "Type";
})((mt ||= {}));
export const Y_ = {
	[te.h.General]: m.BV.AppProperties.General,
	[te.h.Compatibility]: m.BV.AppProperties.Compatibility,
	[te.h.Updates]: m.BV.AppProperties.Updates,
	[te.h.LocalFiles]: m.BV.AppProperties.LocalFiles,
	[te.h.Language]: m.BV.AppProperties.Language,
	[te.h.Betas]: m.BV.AppProperties.Betas,
	[te.h.Controller]: m.BV.AppProperties.Controller,
	[te.h.Shortcut]: m.BV.AppProperties.Shortcut,
	[te.h.Dlc]: m.BV.AppProperties.DLC,
	[te.h.Workshop]: m.BV.AppProperties.Workshop,
	[te.h.Feedback]: m.BV.AppProperties.Feedback,
};
export const GA = {
	[mt.Dropdowns]: m.BV.GamepadUI.Zoo.Dropdowns,
	[mt.Modals]: m.BV.GamepadUI.Zoo.Modals,
	[mt.Buttons]: m.BV.GamepadUI.Zoo.Buttons,
	[mt.Sliders]: m.BV.GamepadUI.Zoo.Sliders,
	[mt.Toggles]: m.BV.GamepadUI.Zoo.Toggles,
	[mt.OtherControls]: m.BV.GamepadUI.Zoo.OtherControls,
	[mt.Glyphs]: m.BV.GamepadUI.Zoo.Glyphs,
	[mt.SVG]: m.BV.GamepadUI.Zoo.SVG,
	[mt.Input]: m.BV.GamepadUI.Zoo.Input,
	[mt.Type]: m.BV.GamepadUI.Zoo.Type,
	[re.PQ.DeveloperOptions]: m.BV.GamepadUI.Zoo.DeveloperOptions,
	[re.PQ.VRDeveloperOptions]: m.BV.GamepadUI.Zoo.VRDeveloperOptions,
	[re.PQ.AppSpotlight]: m.BV.GamepadUI.Zoo.AppSpotlight,
	[re.PQ.PlayNext]: m.BV.GamepadUI.Zoo.PlayNext,
	[re.PQ.Notifications]: m.BV.GamepadUI.Zoo.Notifications,
	[re.PQ.Share]: m.BV.GamepadUI.Zoo.Share,
};
export function LC(e = true) {
	const t = SA();
	s.useEffect(() => {
		if (e) {
			return t?.HideFooter()?.unhide;
		}
	}, [t, e]);
}
export function TP(e) {
	const t = $2();
	s.useEffect(() => {
		if (e && t) {
			t.SetShowingGlobalModal(true);
			return () => t.SetShowingGlobalModal(false);
		}
	});
}
let gt;
export let DT;
((e) => {
	e[(e.SteamUI = 0)] = "SteamUI";
	e[(e.BasicUI = 1)] = "BasicUI";
})((gt ||= {}));
((e) => {
	e[(e.Digital = 0)] = "Digital";
	e[(e.Cursor = 1)] = "Cursor";
})((DT ||= {}));
class Ct {
	m_GamepadUIAudioStore = new Y();
	m_appDetailsDisplayMode = gt.BasicUI;
	m_shutdownState = {
		eShutdownState: 0,
		appid: 0,
		bAllowForceQuit: false,
		bFailed: false,
	};
	m_LastLibraryTab = {
		strActiveTab: "",
	};
	m_eErrorCondition = undefined;
	m_eErrorConditionResult = undefined;
	m_bIsDeckFactoryImage = false;
	m_bPreviouslyNavigatedToRunningApp = false;
	m_bHomeAndQuickAccessButtonsEnabled = true;
	m_GamepadNavigationManager;
	m_navigationSource = undefined;
	m_bShowingLockScreen = false;
	m_runningAppIDs = [];
	m_streamingAppID = 0;
	m_bStreamingRemotePlayTogether = false;
	m_bConsoleEnabledByUser = false;
	m_nResumeStreamingInputTimeoutHandle = null;
	m_WindowStore = new Qe(this);
	m_mainInstanceUIMode = -1;
	m_ConfiguratorWidth = 0;
	m_textFilterStore = null;
	constructor() {
		Gn(this);
	}
	async InitWithoutUser() {
		this.m_GamepadNavigationManager = new ve();
		this.m_GamepadNavigationManager.RegisterForUnhandledButtonDownEvents(
			this.OnUnhandledButtonDownEvent,
		);
		this.m_GamepadNavigationManager.SetGamepadEventUpdateBatcher(
			o.unstable_batchedUpdates,
		);
		this.m_GamepadUIAudioStore.Init(this.m_GamepadNavigationManager, () =>
			this.IsGamepadUIWindowActive() ? 4 : 7,
		);
		SteamClient.UI.RegisterForUIModeChanged(this.OnUIModeChanged);
		if (Me.TS.IN_STEAMUI_SHARED_CONTEXT) {
			SteamClient.User.RegisterForShutdownStart(this.OnShutdownStart);
			SteamClient.User.RegisterForShutdownDone(this.OnShutdownDone);
			SteamClient.User.RegisterForShutdownState(this.OnShutdownState);
			SteamClient.User.RegisterForShutdownFailed(this.OnShutdownFailed);
			SteamClient.Input.RegisterForGameKeyboardMessages(
				this.OnGameKeyboardMessage,
			);
			SteamClient.Input.RegisterForUserKeyboardMessages(
				this.OnModalKeyboardMessage,
			);
			SteamClient.Input.RegisterForUserDismissKeyboardMessages(
				this.OnDismissKeyboardMessage,
			);
			SteamClient.Streaming.RegisterForStreamingClientStarted(
				this.StreamingClientStarted,
			);
			SteamClient.Streaming.RegisterForStreamingLaunchComplete(
				this.StreamingLaunchComplete,
			);
			SteamClient.Streaming.RegisterForStreamingClientFinished(
				this.StreamingClientFinished,
			);
			SteamClient.RemotePlay.RegisterForSessionStarted(
				this.RemotePlaySessionStarted,
			);
			SteamClient.RemotePlay.RegisterForSessionStopped(
				this.RemotePlaySessionStopped,
			);
			SteamClient.Messaging.RegisterForMessages(
				"Library",
				this.OnPostLibraryMessage,
			);
			SteamClient.Messaging.RegisterForMessages(
				"PostToSteamUI",
				this.OnPostSteamUIMessage,
			);
			SteamClient.UI.RegisterForErrorCondition(this.OnErrorCondition);
			SteamClient.Overlay.RegisterForMicroTxnAuth(this.OnMicroTxnAuth);
			SteamClient.Overlay.RegisterForOverlayActivated(this.OnOverlayActivated);
			SteamClient.Console.RegisterForSpewOutput(this.OnSteamConsoleSpew);
			lt.Info(
				"To see Steam Console output, enable SteamClient Debug spew with: %cEnableSteamConsole()",
				"font-family: monospace; background: black; color: white; font-weight: normal; padding: 0 1ch; border: solid 1px #666",
			);
			this.m_GamepadNavigationManager.RegisterInputSource(new ie.E());
			this.m_GamepadNavigationManager.RegisterInputSource(new ae.q(window));
			this.m_GamepadNavigationManager.RegisterInputSource(new se.K(window));
			this.m_GamepadNavigationManager.NavigationSource.Subscribe(
				this.OnNavigationSourceChange,
			);
			this.OnNavigationSourceChange(
				this.m_GamepadNavigationManager.NavigationSource.Value,
			);
			fm(this.OnGameRunStateChanged);
			fm(this.OnSideMenuChanged);
			SteamClient.UI.RegisterForKioskModeResetSignal(this.OnKioskModeReset);
		}
		this.m_bIsDeckFactoryImage = await SteamClient.System.IsDeckFactoryImage();
		await this.m_WindowStore.InitWithoutUser();
	}
	GetFocusedWindowInstance() {
		let e = this.m_GamepadNavigationManager?.GetActiveContext();
		if (e) {
			let t = this.m_WindowStore.GetWindowInstanceFromWindow(e.RootWindow);
			if (t) {
				return t;
			}
		}
		return null;
	}
	BIsAnyWindowFocused() {
		return !!this.GetFocusedWindowInstance();
	}
	get ActiveWindowInstance() {
		let e = this.GetFocusedWindowInstance();
		if (
			e &&
			(e.IsMainGamepadUIWindow() ||
				e.IsGamepadUIOverlayWindow() ||
				e.IsGamepadUIOverlayWindow() ||
				e.IsMainDesktopWindow() ||
				e.IsGamepadUIOverlayWindow() ||
				e.IsMainDesktopWindow() ||
				e.IsSteamChinaReviewLauncher() ||
				e.IsGamepadUIOverlayWindow() ||
				e.IsMainDesktopWindow() ||
				e.IsSteamChinaReviewLauncher() ||
				e.IsDesktopOverlayWindow() ||
				e.IsGamepadUIOverlayWindow() ||
				e.IsMainDesktopWindow() ||
				e.IsSteamChinaReviewLauncher() ||
				e.IsDesktopOverlayWindow() ||
				e.IsVRWindow())
		) {
			return e;
		}
		let t = Je.iP.GetFocusedOverlayAppID();
		if (t) {
			return this.m_WindowStore.GetOverlayInstanceWithFallback(
				t,
				Je.iP.GetFocusedOverlayPID(),
			);
		} else {
			return this.m_WindowStore.MainWindowInstance;
		}
	}
	GetWindowInstanceForPID(e) {
		return this.m_WindowStore.GetInstanceForPID(e);
	}
	async InitWithUser() {
		let e = new c.A();
		this.m_LastLibraryTab = (await e.GetObject(ct)) || {
			strActiveTab: "",
		};
		this.m_textFilterStore = new $e.s({
			BIsFriend: (e) => J.O$.GetFriendState(e)?.is_friend,
		});
		this.m_textFilterStore.Init(
			J.O$.currentUserSteamID?.GetAccountID(),
			null,
			e,
		);
	}
	SetConfiguratorWidth(e) {
		this.m_ConfiguratorWidth = e;
	}
	get ConfiguratorWidth() {
		return this.m_ConfiguratorWidth;
	}
	get ShouldZoomStandaloneConfigurator() {
		return this.m_ConfiguratorWidth > 1280;
	}
	get WindowStore() {
		return this.m_WindowStore;
	}
	RestoreNavigation() {
		const e = window.history.state?.gamepaduistore;
		if (e?.m_eSettingsPage) {
			let t = Object.keys(e);
			let r = this;
			for (let n of t) {
				r[n] = e[n];
			}
		}
	}
	PreserveNavigation() {
		fm(() => {
			const e = {
				m_appDetailsDisplayMode: this.m_appDetailsDisplayMode,
			};
			window.history.replaceState(
				{
					...(window.history.state ?? {}),
					gamepaduistore: e,
				},
				"",
			);
		});
	}
	Navigate(e, t = false, r = false) {
		this.WindowStore.EnsureMainWindowCreated();
		if (!r || !Ze.z.BRouteMatch(e)) {
			if (t) {
				Ze.z.m_history.replace(e);
			} else {
				Ze.z.m_history.push(e);
			}
		}
	}
	GetWindowForRunningAppNavigation() {
		return (
			this.m_WindowStore.GamepadUIMainWindowInstance ??
			this.m_WindowStore.GamepadUIVRWindowInstance
		);
	}
	NavigateToRunningApp(e = false) {
		const t = this.GetWindowForRunningAppNavigation();
		t?.Navigate(m.BV.GamepadUI.AppRunning(), e, true);
	}
	NavigateToLayoutPreview(e, t) {
		this.CloseSideMenus();
		const r = m.BV.GamepadUI.ControllerConfigurator.SharedLayout(e);
		if (
			t?.IsGamepadUIOverlayWindow() ||
			t?.IsMainGamepadUIWindow() ||
			t?.IsMainGamepadUIWindow() ||
			t?.IsVRWindow() ||
			t?.IsMainGamepadUIWindow() ||
			t?.IsVRWindow() ||
			t?.IsControllerConfiguratorWindow()
		) {
			t?.Navigate(r);
		} else {
			oy.SetStandaloneConfiguratorURL(r);
			SteamClient.Apps.ShowControllerConfigurator(H.mZ);
		}
	}
	StreamingClientStarted(e) {
		this.m_streamingAppID = e;
	}
	StreamingLaunchComplete(e, t) {
		if (e == ne.l.k_ERemoteClientLaunchOK) {
			this.SetRunningApp(this.m_streamingAppID);
			this.ScopeRunningApps();
		} else {
			this.StreamingClientFinished(2, "");
		}
	}
	StreamingClientFinished(e, t) {
		this.m_streamingAppID = 0;
		this.m_bStreamingRemotePlayTogether = false;
		this.ScopeRunningApps();
	}
	BIsStreamingRemotePlayTogether() {
		return this.m_bStreamingRemotePlayTogether;
	}
	BIsStreamingGame(e) {
		return e != 0 && e == this.m_streamingAppID;
	}
	BIsStreamingRemotePlayTogetherGame(e) {
		return this.BIsStreamingRemotePlayTogether() && this.BIsStreamingGame(e);
	}
	RemotePlayTogetherClientStarted(e) {
		this.m_bStreamingRemotePlayTogether = true;
		this.StreamingClientStarted(e);
		this.StreamingLaunchComplete(ne.l.k_ERemoteClientLaunchOK, "");
	}
	BRemotePlaySessionLocalClient(e) {
		let t = new Ee.b(e).GetAccountID();
		return t != 0 && t == J.O$.currentUserSteamID?.GetAccountID();
	}
	RemotePlaySessionStarted(e, t, r) {
		if (!this.BRemotePlaySessionLocalClient(e)) {
			return;
		}
		let n = Number(t);
		this.RemotePlayTogetherClientStarted(n);
		this.OnGameRunStateChanged();
	}
	RemotePlaySessionStopped(e, t) {
		if (this.BRemotePlaySessionLocalClient(e)) {
			this.StreamingClientFinished(1, "");
			this.OnGameRunStateChanged();
		}
	}
	OnPostLibraryMessage(e, t, r) {
		const n = lF();
		if (dq(n)) {
			n.LibraryTab(t);
		}
		if (t == "shared-apps") {
			const e = JSON.parse(r);
			ee.n6.ShowSharedAppsInLibrary(ee.n6.collectionsAppFilter, e);
		}
	}
	OnPostSteamUIMessage(e, t, r) {
		switch (t) {
			case "hide-main-window": {
				this.m_WindowStore.MainWindowInstance?.BrowserWindow?.SteamClient.Window.Minimize();
				break;
			}
			case "close-main-window": {
				this.m_WindowStore.MainWindowInstance?.BrowserWindow?.close();
				break;
			}
			case "show-main-window": {
				this.m_WindowStore.MainWindowInstance?.BrowserWindow?.SteamClient.Window.BringToFront();
			}
		}
	}
	IsGamepadUIWindowActive(e) {
		if ((e = e ?? this.ActiveWindowInstance)) {
			return e.IsGamepadUIWindow();
		} else {
			return this.m_mainInstanceUIMode == 4;
		}
	}
	IsDesktopUIWindowActive(e) {
		if ((e = e ?? this.ActiveWindowInstance)) {
			return e.IsDesktopUIWindow();
		} else {
			return this.m_mainInstanceUIMode == 7;
		}
	}
	get MainInstanceUIMode() {
		return this.m_mainInstanceUIMode;
	}
	get MainRunningApp() {
		const e = this.MainRunningAppID;
		if (e != null) {
			return K.tw.GetAppOverviewByAppID(e);
		}
	}
	IsAnyAppRunning() {
		return this.m_runningAppIDs.length > 0;
	}
	get MainRunningAppID() {
		if (this.m_runningAppIDs.length > 0) {
			return this.m_runningAppIDs[0];
		} else {
			return undefined;
		}
	}
	get RunningApps() {
		return this.m_runningAppIDs
			.map((e) => K.tw.GetAppOverviewByAppID(e))
			.filter((e) => e != null);
	}
	SetRunningApp(e) {
		if (this.m_runningAppIDs.length != 0 && e != this.m_runningAppIDs[0]) {
			FindAndRemove(this.m_runningAppIDs, e);
			this.m_runningAppIDs.unshift(e);
			this.m_WindowStore.SetFocusedAppWindowID(e, 0);
		} else {
			this.m_WindowStore.SetFocusedAppWindowID(e, 0);
		}
	}
	ScopeRunningApps() {
		let e = new Set();
		let t = new Set();
		const r = (e) => {
			switch (e.local_per_client_data?.display_status) {
				case 4:
				case 1: {
					return true;
				}
			}
			return (
				e.appid != ke.VE &&
				e.appid != H.s5 &&
				!!this.m_WindowStore.BHasAppWindow(e.appid) &&
				!!Me.TS.ON_DECK &&
				(ot.Debug(
					"ScopeRunningApps - App ",
					e.display_name,
					" still considered running, because it has a focusable window",
				),
				true)
			);
		};
		let n = K.tw.allApps.filter((e) => r(e)).map((e) => e.appid);
		if (this.m_streamingAppID > 0) {
			n.push(this.m_streamingAppID);
		}
		for (const t of this.m_runningAppIDs) {
			if (!n.includes(t)) {
				e.add(t);
			}
		}
		for (const e of n) {
			if (e != ke.VE && e != H.s5 && !this.m_runningAppIDs.includes(e)) {
				t.add(e);
			}
		}
		h5(() => {
			for (const t of Array.from(e)) {
				let e = this.m_runningAppIDs.indexOf(t);
				this.m_runningAppIDs.splice(e, 1);
				this.m_WindowStore.OnAppNoLongerRunning(t);
			}
			if (t.size > 0) {
				this.m_runningAppIDs.push(...Array.from(t));
			}
		});
	}
	get ForceBetaSectionVisible() {
		return localStorage.getItem("Internal_ForceBetaSectionVisible") != null;
	}
	set ForceBetaSectionVisible(e) {
		if (e) {
			localStorage.setItem("Internal_ForceBetaSectionVisible", "true");
		} else {
			localStorage.removeItem("Internal_ForceBetaSectionVisible");
		}
	}
	get RemainInBigPictureModeOnClose() {
		return (
			localStorage.getItem("Internal_RemainInBigPictureModeOnClose") != null
		);
	}
	set RemainInBigPictureModeOnClose(e) {
		if (e) {
			localStorage.setItem("Internal_RemainInBigPictureModeOnClose", "true");
		} else {
			localStorage.removeItem("Internal_RemainInBigPictureModeOnClose");
		}
	}
	get ActiveNavigationMode() {
		switch (this.ActiveNavigationSourceType) {
			case g.Vz.UNKNOWN:
			case g.Vz.GAMEPAD:
			case g.Vz.KEYBOARD_SIMULATOR: {
				return DT.Digital;
			}
			case g.Vz.MOUSE:
			case g.Vz.TOUCH:
			case g.Vz.LPAD:
			case g.Vz.RPAD: {
				return DT.Cursor;
			}
		}
	}
	BIsVrOnlyGame(e) {
		return e.vr_only || ak(e.appid);
	}
	BIsVROverlayApp(e) {
		if (!e.BSupportsVR()) {
			return false;
		}
		if (e.BIsShortcut()) {
			return false;
		}
		const t = at.GetLaunchOptionsForApp(e.appid);
		if (!t) {
			return true;
		}
		return t.every((e) => e.eType == et.oI.k_ELaunchOptionType_OpenVROverlay);
	}
	ExcludedTitlesForPlatform() {
		let e = X.md.GetCollection(X.A8.MyGames).allApps;
		e = e.filter((e) => {
			let t = true;
			let r = e.GetPerClientData("local");
			if (r && e.BIsPerClientDataLocal(r) && r.display_status == 14) {
				t = false;
			}
			return (
				!t ||
				e.steam_deck_compat_category == 1 ||
				e.steam_deck_compat_category == 1 ||
				oy.BIsVrOnlyGame(e)
			);
		});
		return e.map((e) => e.appid);
	}
	get BIsInOOBE() {
		return qw().BIsInOOBE();
	}
	get TextFilterStore() {
		return this.m_textFilterStore;
	}
	OnShutdownStart(e) {
		this.m_shutdownState.eShutdownState = 1;
		this.m_shutdownState.appid = 0;
		this.m_shutdownState.bAllowForceQuit = false;
		this.m_shutdownState.bFailed = false;
	}
	OnShutdownDone(e, t, r) {
		this.m_shutdownState.eShutdownState = e;
		this.m_shutdownState.appid = t;
	}
	OnShutdownState(e, t, r) {
		this.m_shutdownState.eShutdownState = e;
		this.m_shutdownState.appid = t;
		this.m_shutdownState.bAllowForceQuit = r;
	}
	OnShutdownFailed(e, t, r) {
		this.m_shutdownState.eShutdownState = e;
		this.m_shutdownState.appid = t;
		this.m_shutdownState.bFailed = !r;
	}
	BIsShuttingDown() {
		return this.m_shutdownState.eShutdownState != 0;
	}
	GetShutdownState() {
		return this.m_shutdownState;
	}
	ClearShutdownFailure() {
		this.m_shutdownState.appid = 0;
		this.m_shutdownState.bFailed = false;
	}
	OnErrorCondition(e, t) {
		this.m_eErrorCondition = e;
		this.m_eErrorConditionResult = t;
		if (e != 7) {
			if (this.IsGamepadUIWindowActive()) {
				if (e != 0) {
					this.Navigate(m.BV.GamepadUI.Error());
				}
			} else if (this.IsDesktopUIWindowActive()) {
				let t = false;
				switch (e) {
					case 1:
					case 2: {
						t = true;
					}
				}
				tt.Tu.PendingLoginRefresh(t);
			}
		}
	}
	ResetErrorCondition() {
		SteamClient.UI.ResetErrorCondition();
	}
	get ErrorCondition() {
		return this.m_eErrorCondition;
	}
	get ErrorConditionResult() {
		return this.m_eErrorConditionResult;
	}
	IsConsoleEnabled() {
		return (
			Xe.w.SHOW_CONSOLE ||
			Me.TS.DEV_MODE ||
			Me.TS.DEV_MODE ||
			this.m_bConsoleEnabledByUser
		);
	}
	SetConsoleEnabled() {
		this.m_bConsoleEnabledByUser = true;
	}
	OpenPowerMenu(e, t) {
		d4(e, t);
	}
	CloseSideMenus() {
		this.WindowStore.GamepadUIMainWindowInstance?.MenuStore.CloseSideMenus();
	}
	get NavigationManager() {
		return this.m_GamepadNavigationManager;
	}
	OnGameKeyboardMessage(e) {
		ot.Debug(
			`OnGameKeyboardMessage: appid: ${e.nAppID}, m_bOpen: ${e.m_bOpen}`,
		);
		let t = this.m_WindowStore.GetOverlayInstanceWithFallback(
			e.nAppID,
			e.m_dwOverlayPID,
		);
		if (t.IsGamepadUIOverlayWindow() || t.IsMainGamepadUIWindow()) {
			if (e.m_bOpen) {
				t.NavigateWithoutChangingFocus(
					m.BV.GamepadUI.GameAPIOSK(),
					false,
					true,
					e,
				);
			} else {
				t.NavigateWithoutChangingFocus(m.BV.GamepadUI.AppRunning());
			}
		}
	}
	OnModalKeyboardMessage(e) {
		ot.Debug(
			`OnModalKeyboardMessage: appid: ${e.nAppID}, bChordInvoked: ${e.bChordInvoked}`,
		);
		this.m_WindowStore.SteamUIWindows.forEach((t) => {
			if (!t.IsGamepadUIOverlayWindow() && !t.IsMainGamepadUIWindow()) {
				return;
			}
			if (t.BRouteMatch(m.BV.GamepadUI.GameAPIOSK())) {
				return;
			}
			if (!e.bChordInvoked && !t.BRouteMatch(m.BV.GamepadUI.AppRunning())) {
				return;
			}
			t.MenuStore.CloseSideMenus();
			if (
				e.bChordInvoked &&
				t.VirtualKeyboardManager.IsShowingVirtualKeyboard.Value
			) {
				t.VirtualKeyboardManager.SetVirtualKeyboardHidden();
				return;
			}
			if (e.nAppID != Ie.sc && t.MainRunningAppID != e.nAppID) {
				return;
			}
			const r = t.VirtualKeyboardManager;
			r.SetDismissOnEnterKey(e.bEnterDismissesKeyboard || e.bChordInvoked);
			r.SetTextFieldLocation(e.nXPosition, e.nYPosition, e.nWidth, e.nHeight);
			if (
				(oy.MainRunningApp?.display_status == 4 && Me.TS.IN_GAMESCOPE) ||
				t.IsGamepadUIOverlayWindow()
			) {
				r.SetVirtualKeyboardHidden();
				t.NavigateWithoutChangingFocus(
					m.BV.GamepadUI.AppOverlay.Keyboard(),
					true,
					true,
				);
			} else {
				r.SetVirtualKeyboardVisible();
			}
		});
	}
	OnDismissKeyboardMessage(e) {
		this.m_WindowStore.SteamUIWindows.forEach((e) =>
			e.VirtualKeyboardManager.SetVirtualKeyboardHidden(),
		);
	}
	BIsOverlayPath(e) {
		return !!B6(e, [
			m.BV.GamepadUI.AppRunning(),
			m.BV.GamepadUI.AppOverlay.Keyboard(),
			m.BV.GamepadUI.AppOverlay.AppRunningControls(),
			m.BV.GamepadUI.GameAPIOSK(),
			m.BV.GamepadUI.ControllerConfigurator.MousePosition(),
			m.BV.GamepadUI.ColorSettings(),
		]);
	}
	BIsTransparentBackgroundPath(e) {
		return (
			!!B6(e, [
				m.BV.GamepadUI.SteamWeb(),
				m.BV.GamepadUI.ExternalWeb(),
				m.BV.GamepadUI.MicroTxnAuth(),
			]) || this.BIsOverlayPath(e)
		);
	}
	SetShowingLockScreen(e) {
		this.m_bShowingLockScreen = e;
	}
	GetShowingLockScreen() {
		return this.m_bShowingLockScreen;
	}
	BCanNavigateToRunningApp() {
		if (!this.IsGamepadUIWindowActive()) {
			return false;
		}
		const e = this.GetWindowForRunningAppNavigation();
		if (e?.IsVRWindow() && !e?.IsVRWindowInGamescope()) {
			return false;
		}
		if (this.MainRunningApp?.display_status == 4) {
			return !ak(this.MainRunningApp.appid);
		}
		return (
			this.m_streamingAppID != null &&
			this.MainRunningApp?.appid == this.m_streamingAppID
		);
	}
	OnGameRunStateChanged() {
		const e = this.BCanNavigateToRunningApp();
		if (e != this.m_bPreviouslyNavigatedToRunningApp) {
			this.m_bPreviouslyNavigatedToRunningApp = e;
			if (e) {
				this.NavigateToRunningApp();
			}
		}
	}
	OnSideMenuChanged() {}
	ReopenPreModalSideMenu() {}
	OnModalCountChanged(e) {}
	OnUnhandledButtonDownEvent(e) {
		if (this.WindowStore.GamepadUIMainWindowInstance) {
			switch (e.detail.button) {
				case g.pR.STEAM_GUIDE: {
					this.WindowStore.GamepadUIMainWindowInstance.OnHomeButtonPressed();
					e.stopPropagation();
					break;
				}
				case g.pR.STEAM_QUICK_MENU: {
					this.WindowStore.GamepadUIMainWindowInstance.OnQuickAccessButtonPressed();
					e.stopPropagation();
				}
			}
		}
	}
	OnNavigationSourceChange(e) {
		this.m_navigationSource = {
			...e,
		};
	}
	get ActiveNavigationInfo() {
		let e = this.m_navigationSource.eActivationSourceType;
		let t = this.m_navigationSource.nActiveGamepadIndex;
		return {
			eMode: e == g.Vz.MOUSE || e == g.Vz.TOUCH ? DT.Cursor : DT.Digital,
			eSourceType: e,
			nControllerIndex: t,
		};
	}
	get ActiveControllerIndex() {
		return this.m_navigationSource.nActiveGamepadIndex;
	}
	BControllerIndexValid(e) {
		if (e < 0) {
			return false;
		}
		return (
			De.Fd.Get()
				.GetControllers()
				.find((t) => t.nControllerIndex === e) !== undefined
		);
	}
	get MostRecentlyActiveControllerIndex() {
		let e = this.m_navigationSource;
		if (this.BControllerIndexValid(e?.nActiveGamepadIndex)) {
			return e?.nActiveGamepadIndex;
		} else if (this.BControllerIndexValid(e?.nLastActiveGamepadIndex)) {
			return e?.nLastActiveGamepadIndex;
		} else if (De.Fd.Get().GetControllers().length > 0) {
			return De.Fd.Get().GetControllers()[0].nControllerIndex;
		} else {
			return 0;
		}
	}
	get MostRecentlyActiveController() {
		return De.Fd.Get()
			.GetControllers()
			?.find(
				(e) => e.nControllerIndex == this.MostRecentlyActiveControllerIndex,
			);
	}
	get ActiveNavigationSourceType() {
		return this.m_navigationSource.eActivationSourceType;
	}
	OnMicroTxnAuth(e, t, r, n) {
		let i = this.MainRunningApp?.appid;
		if (e != i) {
			return;
		}
		const a = oy.WindowStore.GetOverlayInstanceWithFallback(e, 0);
		if (
			a.IsMainGamepadUIWindow() ||
			a.IsGamepadUIOverlayWindow() ||
			a.IsGamepadUIOverlayWindow() ||
			a.IsVRWindow()
		) {
			u.UE.InitMicroTxnAuth(e, t, r);
			const i = a.Navigator;
			if (dq(i)) {
				i.MTXAuth(n);
			}
		}
	}
	OnOverlayActivated(e, t, r, n) {
		const i = oy.WindowStore.GetOverlayInstance(t, e);
		if (i) {
			if (i.IsGamepadUIOverlayWindow() && this.m_mainInstanceUIMode != 4) {
				SteamClient.Input.ForceConfiguratorFocus(r);
			}
			if (i.IsDesktopOverlayWindow()) {
				i.DesktopOverlay.SetIsOverlayActive(r);
			} else if (n && r) {
				i.MenuStore.OpenMainMenu();
			} else if (!r) {
				if (i.BRouteMatch(m.BV.GamepadUI.GameAPIOSK())) {
					i.NavigateBack();
				} else if (!i.BIsOverlayPath()) {
					ot.Debug(
						`${
							i.BrowserWindow?.document?.title
						}: overlay deactivated, navigate ${
							i.LocationPathName
						} => ${m.BV.GamepadUI.AppRunning()}`,
					);
					i.Navigate(m.BV.GamepadUI.AppRunning());
				}
			}
		}
	}
	OnUIModeChanged(e) {
		this.m_mainInstanceUIMode = e;
		this.OnDismissKeyboardMessage(undefined);
	}
	OnSteamConsoleSpew(e) {
		switch (e.spew_type) {
			default:
			case "info": {
				lt.Debug(e.spew);
				break;
			}
			case "warning":
			case "assert": {
				lt.Warning(e.spew);
				break;
			}
			case "error": {
				lt.Error(e.spew);
				break;
			}
			case "input": {
				lt.Debug(`] ${e.spew}`);
			}
		}
	}
	EnableHomeAndQuickAccessButtons() {
		this.m_bHomeAndQuickAccessButtonsEnabled = true;
	}
	DisableHomeAndQuickAccessButtons() {
		this.m_bHomeAndQuickAccessButtonsEnabled = false;
	}
	BHomeAndQuickAccessButtonsEnabled() {
		return this.m_bHomeAndQuickAccessButtonsEnabled;
	}
	IsDeckFactoryImage() {
		return this.m_bIsDeckFactoryImage;
	}
	get GamepadUIAudio() {
		return this.m_GamepadUIAudioStore;
	}
	GetLastLibraryTab() {
		return this.m_LastLibraryTab;
	}
	SetLastLibraryTab(e, t) {
		e = e || "";
		if (
			this.m_LastLibraryTab.strActiveTab == e &&
			this.m_LastLibraryTab.collectionid == t
		) {
			return;
		}
		this.m_LastLibraryTab = {
			strActiveTab: e,
			collectionid: t,
		};
		new c.A().StoreObject(ct, this.m_LastLibraryTab);
	}
	m_strStandaloneConfiguratorURL = null;
	SetStandaloneConfiguratorURL(e) {
		this.m_strStandaloneConfiguratorURL = e;
	}
	get StandaloneConfiguratorURL() {
		return this.m_strStandaloneConfiguratorURL;
	}
	OnKioskModeReset() {
		Ze.z.m_history.go(1 - Ze.z.m_history.length);
	}
	ClearSaleCache() {
		RS();
	}
}
export function gk() {
	const [e, t] = VI("developer_mode_enabled");
	return [e, t];
}
export function oM() {
	const [e] = gk();
	const t = d.rV.settings?.bIsValveEmail;
	return e && t;
}
export function FA() {
	const [e, t] = VI("show_advanced_update_channels");
	return [e, t];
}
export function Eb() {
	return q3(() => oy.BIsInOOBE);
}
export function Dl() {
	return q3(() => oy.MostRecentlyActiveController);
}
export function RP() {
	const e = $2();
	return q3(() => e.MainRunningAppID);
}
export function Qu() {
	const e = $2();
	return q3(() => e.MainRunningApp);
}
export function Un() {
	return q3(() => oy.IsAnyAppRunning());
}
export function Sn() {
	return q3(() => oy.IsConsoleEnabled());
}
export function xn() {
	return q3(() => oy.ErrorCondition);
}
Cg([i.sH], Ct.prototype, "m_appDetailsDisplayMode", undefined);
Cg([i.sH], Ct.prototype, "m_shutdownState", undefined);
Cg([i.sH], Ct.prototype, "m_eErrorCondition", undefined);
Cg([i.sH], Ct.prototype, "m_eErrorConditionResult", undefined);
Cg([i.sH], Ct.prototype, "m_navigationSource", undefined);
Cg([i.sH], Ct.prototype, "m_bShowingLockScreen", undefined);
Cg([i.sH], Ct.prototype, "m_runningAppIDs", undefined);
Cg([i.sH], Ct.prototype, "m_streamingAppID", undefined);
Cg([i.sH], Ct.prototype, "m_bStreamingRemotePlayTogether", undefined);
Cg([i.sH], Ct.prototype, "m_bConsoleEnabledByUser", undefined);
Cg([i.sH], Ct.prototype, "m_mainInstanceUIMode", undefined);
Cg([i.sH], Ct.prototype, "m_ConfiguratorWidth", undefined);
Cg([C.oI], Ct.prototype, "NavigateToLayoutPreview", null);
Cg([C.oI], Ct.prototype, "StreamingClientStarted", null);
Cg([C.oI], Ct.prototype, "StreamingLaunchComplete", null);
Cg([C.oI], Ct.prototype, "StreamingClientFinished", null);
Cg([C.oI], Ct.prototype, "RemotePlaySessionStarted", null);
Cg([C.oI], Ct.prototype, "RemotePlaySessionStopped", null);
Cg([C.oI], Ct.prototype, "OnPostLibraryMessage", null);
Cg([C.oI], Ct.prototype, "OnPostSteamUIMessage", null);
Cg([i.EW], Ct.prototype, "MainRunningApp", null);
Cg([i.EW], Ct.prototype, "RunningApps", null);
Cg([i.XI], Ct.prototype, "SetRunningApp", null);
Cg([i.XI.bound], Ct.prototype, "OnShutdownStart", null);
Cg([i.XI.bound], Ct.prototype, "OnShutdownDone", null);
Cg([i.XI.bound], Ct.prototype, "OnShutdownState", null);
Cg([i.XI.bound], Ct.prototype, "OnShutdownFailed", null);
Cg([i.XI.bound], Ct.prototype, "ClearShutdownFailure", null);
Cg([C.oI], Ct.prototype, "OnErrorCondition", null);
Cg([C.oI], Ct.prototype, "OpenPowerMenu", null);
Cg([C.oI], Ct.prototype, "OnGameKeyboardMessage", null);
Cg([C.oI], Ct.prototype, "OnModalKeyboardMessage", null);
Cg([C.oI], Ct.prototype, "OnDismissKeyboardMessage", null);
Cg([C.oI], Ct.prototype, "BIsOverlayPath", null);
Cg([C.oI], Ct.prototype, "BIsTransparentBackgroundPath", null);
Cg([C.oI], Ct.prototype, "OnGameRunStateChanged", null);
Cg([C.oI], Ct.prototype, "OnSideMenuChanged", null);
Cg([C.oI], Ct.prototype, "ReopenPreModalSideMenu", null);
Cg([C.oI], Ct.prototype, "OnModalCountChanged", null);
Cg([C.oI], Ct.prototype, "OnUnhandledButtonDownEvent", null);
Cg([i.XI.bound], Ct.prototype, "OnNavigationSourceChange", null);
Cg([i.EW], Ct.prototype, "MostRecentlyActiveController", null);
Cg([C.oI], Ct.prototype, "OnMicroTxnAuth", null);
Cg([C.oI], Ct.prototype, "OnOverlayActivated", null);
Cg([C.oI], Ct.prototype, "OnUIModeChanged", null);
Cg([i.XI.bound], Ct.prototype, "OnSteamConsoleSpew", null);
Cg([i.sH], Ct.prototype, "m_strStandaloneConfiguratorURL", undefined);
Cg([C.oI], Ct.prototype, "OnKioskModeReset", null);
export const oy = new Ct();
window.SteamUIStore = oy;
