import r from "./63696.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import { hL } from "./52451.js";
import a from "./21440.js";
import { yk } from "./91435.js";
export class SZ {
	m_bUsePopups = true;
	m_bOnlyPopups = false;
	m_bCenterPopupsOnWindow = false;
	m_rgModals = [];
	m_OnModalCountChangedCallbacks = new CCallbackList();
	m_OnModalShownCallbacks = new CCallbackList();
	m_OnModalHiddenCallbacks = new CCallbackList();
	m_cMountedOverlays = 0;
	m_rgMeasureModalRequests = [];
	m_OnMeasureModal = new CCallbackList();
	m_rgLegacyPopupModals = [];
	m_OnLegacyPopupModalCountChanged = new CCallbackList();
	m_browserInfo;
	get ModalCountChangedCallbacks() {
		return this.m_OnModalCountChangedCallbacks;
	}
	get LegacyPopupModalCountChangedCallbacks() {
		return this.m_OnLegacyPopupModalCountChanged;
	}
	RegisterOnModalShownCallback(e) {
		return this.m_OnModalShownCallbacks.Register(e);
	}
	RegisterOnModalHiddenCallback(e) {
		return this.m_OnModalHiddenCallbacks.Register(e);
	}
	RegisterMeasureModalCallback(e) {
		return this.m_OnMeasureModal.Register(e);
	}
	TakeMeasureModalRequest() {
		if (this.m_rgMeasureModalRequests.length) {
			return this.m_rgMeasureModalRequests.shift();
		} else {
			return undefined;
		}
	}
	RegisterOverlay(e) {
		AssertMsg(
			this.m_cMountedOverlays == 0,
			"Duplicate modal DialogOverlay; modals will appear in both",
		);
		this.m_cMountedOverlays++;
		const t = this.m_OnModalCountChangedCallbacks.Register(e);
		return () => {
			this.m_cMountedOverlays--;
			t.Unregister();
		};
	}
	OnModalCountChanged(e) {
		if (e == "show" && this.m_cMountedOverlays == 0) {
			window.setTimeout(() => {
				AssertMsg(
					this.m_cMountedOverlays > 0,
					"Modal was shown but ModalManager has no associated DialogOverlay",
				);
			}, 50);
		}
		this.m_OnModalCountChangedCallbacks.Dispatch(this.m_rgModals.length);
		if (e == "show") {
			this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length);
		} else if (e == "hide") {
			this.m_OnModalHiddenCallbacks.Dispatch(this.m_rgModals.length);
		}
	}
	get modals() {
		return this.m_rgModals;
	}
	get active_modal() {
		if (this.m_rgModals.length) {
			return this.m_rgModals[this.m_rgModals.length - 1];
		} else {
			return undefined;
		}
	}
	ShowModal(e) {
		return this.ShowModalInternal(e);
	}
	RemoveModal(e) {
		let t = this.m_rgModals.indexOf(e);
		if (t != -1) {
			this.m_rgModals.splice(t, 1);
		}
		this.OnModalCountChanged("hide");
	}
	ShowModalInternal(e) {
		AssertMsg(
			!this.m_bOnlyPopups,
			"Attempting to show modal in popup-only modal manager; will not display.",
		);
		const t = new a._F(e);
		this.m_rgModals.push(t);
		const n = {
			Close: () => {
				this.RemoveModal(t);
			},
			Update: (e) => {
				t.UpdateModal(e);
			},
		};
		this.OnModalCountChanged("show");
		return n;
	}
	ShowPortalModal() {
		AssertMsg(
			!this.m_bOnlyPopups,
			"Attempting to show modal in popup-only modal manager; will not display.",
		);
		const e = new a.$9();
		this.m_rgModals.push(e);
		this.OnModalCountChanged("show");
		return {
			key: e.key,
			Close: () => {
				this.RemoveModal(e);
			},
			OnElementReadyCallbacks: e.OnElementReadyCallbacks,
			OnModalActiveCallbacks: e.OnModalActiveCallbacks,
		};
	}
	SetUsePopups(e) {
		this.m_bUsePopups = e;
	}
	BUsePopups() {
		return this.m_bUsePopups || this.m_bOnlyPopups;
	}
	SetOnlyPopups(e) {
		this.m_bOnlyPopups = e;
	}
	BOnlyPopups() {
		return this.m_bOnlyPopups;
	}
	SetBrowserInfo(e) {
		this.m_browserInfo = e;
	}
	GetBrowserInfo() {
		return this.m_browserInfo;
	}
	SetCenterPopupsOnWindow(e) {
		this.m_bCenterPopupsOnWindow = e;
	}
	BCenterPopupsOnWindow() {
		return this.m_bCenterPopupsOnWindow;
	}
	RequestModalMeasure(e, t, n) {
		this.m_rgMeasureModalRequests.push({
			rctToMeasure: e,
			fnResults: t,
			promiseContentReady: n,
		});
		this.m_OnMeasureModal.Dispatch();
	}
	get legacy_popup_modals() {
		return this.m_rgLegacyPopupModals;
	}
	ShowLegacyPopupModal(e, t, n, r) {
		const i = () => {
			let e = this.m_rgLegacyPopupModals.indexOf(s);
			if (e != -1) {
				this.m_rgLegacyPopupModals.splice(e, 1);
			}
			this.m_OnLegacyPopupModalCountChanged.Dispatch(
				this.m_rgLegacyPopupModals.length,
			);
			if (n.fnOnClose) {
				n.fnOnClose();
			}
		};
		const s = new a.IA(
			e,
			t,
			{
				...n,
				fnOnClose: i,
			},
			{
				bCenterOnWindow: this.m_bCenterPopupsOnWindow,
				...r,
			},
		);
		this.m_rgLegacyPopupModals.push(s);
		this.m_OnLegacyPopupModalCountChanged.Dispatch(
			this.m_rgLegacyPopupModals.length,
		);
		return {
			Close: i,
			Update: (e) => {
				s.UpdateModal(e);
			},
		};
	}
}
export const BR = new (class {
	m_mapModalManager = new WeakMap();
	GetModalManager(e) {
		let t = this.m_mapModalManager.get(e);
		if (!t) {
			console.assert(
				false,
				`Early access to modal manager, creating one for ${e.document.title}`,
			);
			t = new SZ();
			this.m_mapModalManager.set(e, t);
		}
		return t;
	}
	RegisterModalManager(e, t) {
		AssertMsg(
			!this.m_mapModalManager.has(t) || t == window,
			`Stomping CModalManager for ${t.document.title}!`,
		);
		const n = this.m_mapModalManager.get(t);
		this.m_mapModalManager.set(t, e);
		return () => {
			if (n) {
				this.m_mapModalManager.set(t, n);
			} else {
				this.m_mapModalManager.delete(t);
			}
		};
	}
	UnregisterModalManager(e) {
		this.m_mapModalManager.delete(e);
	}
})();
export function tx(e) {
	return BR.GetModalManager(e);
}
export function Ju(e = window) {
	const t = yk() || tx(e);
	const [n, setN] = r.useState(t.modals.length > 0);
	const s = r.useCallback(
		(e) => {
			setN(e > 0);
		},
		[setN],
	);
	hL(t.ModalCountChangedCallbacks, s);
	return n;
}
