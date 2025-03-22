var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./58663.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./59351.js");
var l = require("./6630.js");
var c = require("./41485.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require("./62486.js");
var d = require("./46422.js");
var A = require(/*webcrack:missing*/ "./52451.js");
var p = require("./18057.js");
var g = require(/*webcrack:missing*/ "./83599.js");
var h = require("./49171.js");
var C = require(/*webcrack:missing*/ "./44846.js");
var _ = require("./79112.js");
var f = require(/*webcrack:missing*/ "./49519.js");
a.Message;
const b = new g.wd("ControllerConfigurator");
export function Ij(e) {
	return (
		e.eControllerSource +
		"-" +
		(e.baseActionSetKey ?? "0") +
		"-" +
		(e.layerActionSetKey ?? "0")
	);
}
class S {
	m_appId = undefined;
	m_lastValidAppId = undefined;
	m_unControllerIndex = undefined;
	m_mapLoadedConfigs = new Map();
	m_EditingConfiguration = undefined;
	m_PreviewConfiguration = undefined;
	m_ChordSummaryConfiguration = undefined;
	m_bIsUpdatingActiveConfiguration = false;
	m_bChordHintVisible = false;
	m_nEditNumber = 0;
	m_nLastSavedEditNumber = 0;
	m_updatingEditingConfigurationPromise = undefined;
	m_eSourceType;
	m_eControllerType;
	m_nCachedDeletedConfigs = [];
	m_nVirtualMenuPreviewKey = -1;
	m_controllerList = [];
	m_bSharedConfig = false;
	m_bCloudSavePending = true;
	m_bRemotePlayConfigPending = true;
	m_bCloudConflict = false;
	m_ControllerConfiguratorFocusInput = undefined;
	m_strSearch = "";
	m_strChooseBindingTab = "";
	m_mapAppConfigs = new Map();
	m_bConfigQueryInFlight = false;
	m_mapCurrentSelectedConfigs = new Map();
	m_ConfigSelectionChangeIdx = 0;
	m_CurrentEditedConfigSelectedIdx = -1;
	m_nControllerConfiguratorBaseSetIndex = 0;
	m_nControllerConfiguratorLayerSetIndex = undefined;
	m_CachedMsgs = {
		m_MsgControllerInputBinding: undefined,
		m_EditedControllerBinding: undefined,
		m_EditedControllerInputActivator: undefined,
		m_EditedControllerInputGroup: undefined,
	};
	m_EditedControllerInputGroupData = undefined;
	m_EditedControllerInputActivatorSettings = undefined;
	m_EditedControllerInputGroupSettings = new Map();
	m_bFilterOtherControllerTypes = true;
	m_history;
	m_locationPathname;
	m_arrBackstack = [];
	m_currentBackstackLevel = 0;
	constructor() {
		(0, s.Gn)(this);
		const e = g.fi.Get().IsDebugLogEnabled("ControllerConfiguratorStore");
		SteamClient.Input?.RegisterForControllerListChanges(
			this.OnControllerListChanged,
		);
		if (e && m.TS.DEV_MODE) {
			(0, o.pY)(this, (e, t) =>
				b.Debug(
					"%cdeepObserve(ControllerConfiguration):",
					"color: purple; font-weight: bold;",
					e,
					t,
				),
			);
		}
	}
	OnControllerListChanged(e) {
		this.m_controllerList.forEach((t) => {
			if (!e.find((e) => t.nControllerIndex == e.nControllerIndex)) {
				this.m_mapCurrentSelectedConfigs.delete(t.nControllerIndex);
			}
		});
		this.m_controllerList = e;
	}
	EditingConfigurationWillUpdate() {
		this.m_bIsUpdatingActiveConfiguration = true;
	}
	UpdateEditingConfiguration(e, t, r) {
		this.m_appId = e;
		this.m_lastValidAppId = e;
		this.m_unControllerIndex = t;
		this.m_CurrentEditedConfigSelectedIdx = this.m_ConfigSelectionChangeIdx;
		this.m_bIsUpdatingActiveConfiguration = false;
		if (!r || !r?.binding_handle) {
			return;
		}
		if (this.m_mapLoadedConfigs.get(r?.binding_handle)) {
			if (this.m_mapLoadedConfigs.get(r?.binding_handle) != r) {
				this.m_mapLoadedConfigs.set(r?.binding_handle, r);
			} else {
				b.Debug("Did NOT replace the config due to equality");
			}
		} else {
			this.m_mapLoadedConfigs.set(r?.binding_handle, r);
		}
		this.m_EditingConfiguration = r?.binding_handle;
		const n = this.m_controllerList.find(
			(e) => e.nControllerIndex == t,
		)?.eControllerType;
		this.m_bSharedConfig = !this.m_controllerList.some(
			(e) => e.nControllerIndex != t && e.eControllerType == n,
		);
	}
	UpdateChordSummaryConfiguration(e) {
		this.m_bIsUpdatingActiveConfiguration = false;
		if (e && e?.binding_handle) {
			if (this.m_mapLoadedConfigs.get(e?.binding_handle)) {
				if (this.m_mapLoadedConfigs.get(e?.binding_handle) != e) {
					this.m_mapLoadedConfigs.set(e?.binding_handle, e);
				} else {
					b.Debug("Did NOT replace the config due to equality");
				}
			} else {
				this.m_mapLoadedConfigs.set(e?.binding_handle, e);
			}
			this.m_ChordSummaryConfiguration = e?.binding_handle;
		}
	}
	UpdatePreviewedConfiguration(e, t, r) {
		this.m_appId = e;
		this.m_lastValidAppId = e;
		this.m_unControllerIndex = t;
		this.m_bIsUpdatingActiveConfiguration = false;
		if (r && r?.binding_handle) {
			if (this.m_mapLoadedConfigs.get(r?.binding_handle)) {
				if (this.m_mapLoadedConfigs.get(r?.binding_handle) != r) {
					this.m_mapLoadedConfigs.set(r?.binding_handle, r);
				} else {
					b.Debug("Did NOT replace the config due to equality");
				}
			} else {
				this.m_mapLoadedConfigs.set(r?.binding_handle, r);
			}
			this.m_PreviewConfiguration = r?.binding_handle;
			this.m_bSharedConfig = false;
		}
	}
	get IsUpdatingEditingConfiguration() {
		return this.m_bIsUpdatingActiveConfiguration;
	}
	get EditingConfiguration() {
		return this.PreviewedConfiguration ?? this.EditedConfiguration;
	}
	get EditedConfiguration() {
		if (this.m_PreviewConfiguration) {
			return this.m_mapLoadedConfigs.get(this.m_PreviewConfiguration);
		} else {
			return this.m_mapLoadedConfigs.get(this.m_EditingConfiguration);
		}
	}
	get PreviewedConfiguration() {
		return this.m_mapLoadedConfigs.get(this.m_PreviewConfiguration);
	}
	get ChordConfiguration() {
		return this.m_mapLoadedConfigs.get(this.m_ChordSummaryConfiguration);
	}
	get CurrentConfigInfo() {
		const e = this.m_PreviewConfiguration ?? this.m_EditingConfiguration;
		const t = this.m_mapLoadedConfigs.get(e);
		if (!t) {
			return null;
		}
		const r = t.url;
		return this.m_mapAppConfigs.get(this.m_appId)?.find((e) => e.URL == r);
	}
	ClearSelectedConfigCache(e) {
		if (e) {
			this.m_mapCurrentSelectedConfigs.forEach((t) => t.delete(e));
		} else {
			this.m_mapCurrentSelectedConfigs.clear();
		}
		this.SetFilterOtherControllerTypes(true);
		this.m_controllerList.forEach((e) =>
			SteamClient.Input.StopEditingControllerConfiguration(e.nControllerIndex),
		);
		this.m_appId = -1;
		this.m_ConfigSelectionChangeIdx -= 1;
	}
	get EditingConfigurationAppId() {
		return this.m_appId;
	}
	get StableAppId() {
		return this.m_lastValidAppId;
	}
	get EditingConfigurationControllerIndex() {
		return this.m_unControllerIndex;
	}
	SetChordHintVisible(e) {
		this.m_bChordHintVisible = e;
	}
	GetChordHintVisible() {
		return this.m_bChordHintVisible;
	}
	AddDeletedConfig(e) {
		this.m_nCachedDeletedConfigs.push(e);
	}
	IsDeletedConfig(e) {
		return this.m_nCachedDeletedConfigs.includes(e);
	}
	OnControllerCommandMessage(e) {
		switch (e.eAction) {
			case 52:
				if (h.z.BRouteMatch(p.BV.GamepadUI.ControllerConfigurator.Root())) {
					return;
				}
				if (!this.GetChordHintVisible()) {
					d.oy.CloseSideMenus();
				}
				this.SetChordHintVisible(true);
				break;
			case 53: {
				this.SetChordHintVisible(false);
				const e = d.oy.MainRunningApp?.appid;
				if (e) {
					const t =
						v3.EditingConfigurationControllerIndex ??
						d.oy.MostRecentlyActiveControllerIndex;
					v3.EnsureEditingConfiguration(e, t);
				}
				break;
			}
		}
	}
	ShowPreviewForConfig(e, t) {
		if (this.m_PreviewConfiguration) {
			return;
		}
		const r = (0, _.lF)();
		if (r) {
			r.App(e);
		}
		const n = "workshop://" + t;
		const i =
			v3.EditingConfigurationControllerIndex ??
			d.oy.MostRecentlyActiveControllerIndex;
		v3.GetActiveConfigForApp(e, i).then((t) => {
			this.PreviewConfiguration(e, i, n);
			d.oy.NavigateToLayoutPreview(e, d.oy.ActiveWindowInstance);
		});
	}
	ClearPreviewConfiguration(e, t) {
		if (
			this.m_PreviewConfiguration &&
			this.m_PreviewConfiguration != this.m_EditingConfiguration
		) {
			this.m_mapLoadedConfigs.delete(this.m_PreviewConfiguration);
			this.FreeControllerConfiguration(this.m_PreviewConfiguration);
		}
		this.m_PreviewConfiguration = undefined;
		this.m_ConfigSelectionChangeIdx = -1;
		this.EnsureEditingConfiguration(e, t);
	}
	ClearChordSummaryConfiguration() {
		if (
			this.m_ChordSummaryConfiguration &&
			this.m_ChordSummaryConfiguration != this.m_EditingConfiguration
		) {
			this.m_mapLoadedConfigs.delete(this.m_ChordSummaryConfiguration);
			this.FreeControllerConfiguration(this.m_ChordSummaryConfiguration);
		}
		this.m_ChordSummaryConfiguration = undefined;
	}
	EnsureEditingConfiguration(e, t) {
		e = e ?? this.m_appId;
		t = t ?? this.m_unControllerIndex;
		if (
			!this.m_bIsUpdatingActiveConfiguration &&
			(e != this.m_appId ||
				t != this.m_unControllerIndex ||
				this.m_CurrentEditedConfigSelectedIdx !=
					this.m_ConfigSelectionChangeIdx)
		) {
			if (e == null) {
				this.m_appId = undefined;
				this.m_unControllerIndex = undefined;
				this.m_EditingConfiguration = undefined;
				this.m_bIsUpdatingActiveConfiguration = false;
				this.m_CurrentEditedConfigSelectedIdx = 0;
				return;
			}
			this.m_nControllerConfiguratorBaseSetIndex = 0;
			this.m_nControllerConfiguratorLayerSetIndex = undefined;
			b.Debug("Loading controller config for appid", e);
			this.EditingConfigurationWillUpdate();
			this.m_updatingEditingConfigurationPromise =
				SteamClient.Input.StartEditingControllerConfigurationForAppIDAndControllerIndex(
					e,
					t,
				)
					.then((r) => {
						const n = c.ln.deserializeBinary(r).toObject();
						b.Debug("Loaded controller config for appid", e, r, n);
						(0, s.h5)(() => this.UpdateEditingConfiguration(e, t, n));
					})
					.catch((r) => {
						b.Debug("Loading controller config for appid rejected", e, r);
						(0, s.h5)(() => this.UpdateEditingConfiguration(e, t, null));
					});
		}
	}
	PreviewConfiguration(e, t, r) {
		e = e ?? this.m_appId;
		if ((t = t ?? this.m_unControllerIndex) == null) {
			console.error(
				"Controller Index Invalid when Previewing Config for app ",
				e,
			);
			t = this.m_controllerList[0]?.nControllerIndex;
		}
		if (!this.m_bIsUpdatingActiveConfiguration) {
			if (e == null) {
				this.m_appId = undefined;
				this.m_unControllerIndex = undefined;
				this.m_EditingConfiguration = undefined;
				this.m_bIsUpdatingActiveConfiguration = false;
				return;
			}
			this.m_nControllerConfiguratorBaseSetIndex = 0;
			this.m_nControllerConfiguratorLayerSetIndex = undefined;
			b.Debug("Loading controller config for appid", e);
			this.EditingConfigurationWillUpdate();
			this.m_updatingEditingConfigurationPromise =
				SteamClient.Input.PreviewConfigForAppAndController(e, t, r)
					.then((r) => {
						const n = c.ln.deserializeBinary(r).toObject();
						b.Debug("Loaded controller config for appid", e, r, n);
						(0, s.h5)(() => this.UpdatePreviewedConfiguration(e, t, n));
					})
					.catch((r) => {
						b.Debug("Loading controller config for appid rejected", e, r);
						(0, s.h5)(() => this.UpdatePreviewedConfiguration(e, t, null));
					});
		}
	}
	LoadChordConfig(e) {
		if (
			!this.m_bIsUpdatingActiveConfiguration &&
			!this.m_ChordSummaryConfiguration
		) {
			this.GetActiveConfigForApp(C.qh, e).then((t) => {
				(0, s.h5)(() => {
					this.EditingConfigurationWillUpdate();
					this.m_updatingEditingConfigurationPromise =
						SteamClient.Input.PreviewConfigForAppAndController(C.qh, e, t.URL)
							.then((e) => {
								const t = c.ln.deserializeBinary(e).toObject();
								b.Debug("Loaded chord config", e, t);
								(0, s.h5)(() => this.UpdateChordSummaryConfiguration(t));
							})
							.catch((e) => {
								b.Debug("Loading chord config for appid rejected", e);
								(0, s.h5)(() => this.UpdateChordSummaryConfiguration(null));
							});
				});
			});
		}
	}
	ClearEditingConfiguration() {
		this.m_appId = -1;
	}
	SaveEditingConfiguration(e, t) {
		e = e ?? this.m_appId;
		if (this.m_appId != -1 && e != this.m_appId) {
			b.Debug(
				"SaveEditingConfiguration SKIPPING for appID",
				e,
				"since this.m_appId is",
				this.m_appId,
			);
			if (t) {
				t();
			}
			return;
		}
		if (this.m_nLastSavedEditNumber == this.m_nEditNumber) {
			b.Debug(
				"SaveEditingConfiguration SKIPPING for appID",
				e,
				"since this.m_nEditNumber is the same",
			);
			if (t) {
				t();
			}
			return;
		}
		this.m_nLastSavedEditNumber = this.m_nEditNumber;
		const r = (r) => {
			if (this.EditingConfiguration != null) {
				b.Debug("SaveEditingConfiguration saving for appID", r);
				SteamClient.Input.SaveEditingControllerConfiguration(
					this.m_unControllerIndex,
					this.m_bSharedConfig,
				);
				this.m_appId = -1;
				this.m_EditedControllerInputGroupSettings.clear();
			} else {
				b.Debug(
					"SaveEditingConfiguration SKIPPING saving for appID",
					e,
					"since this.EditingConfiguration is undefined.",
				);
			}
			if (t) {
				t();
			}
		};
		if (this.m_updatingEditingConfigurationPromise == null) {
			r(e);
		} else {
			b.Debug(
				"SaveEditingConfiguration chaining promise to eventually save appID",
				e,
			);
			this.m_updatingEditingConfigurationPromise.then(() => r(e));
		}
	}
	FreeControllerConfiguration(e) {
		if (this.m_mapLoadedConfigs.delete(e)) {
			SteamClient.Input.FreeControllerConfig(e);
		}
	}
	ExportEditingConfiguration(e, t, r, n, i) {
		if (e == this.m_appId && this.EditingConfiguration != null) {
			SteamClient.Input.ExportCurrentControllerConfiguration(
				this.m_unControllerIndex,
				this.m_appId,
				t,
				r,
				n,
				i,
			);
		}
	}
	BSetIndicesAreOkFixingIfNeeded() {
		const e = this.EditingConfiguration?.sets;
		if (e == null) {
			return false;
		}
		const t = e[v3.ControllerConfiguratorBaseSetIndex];
		if (t == null) {
			v3.SetControllerConfiguratorBaseSetIndex(0);
			v3.SetControllerConfiguratorLayerSetIndex(undefined);
			return true;
		}
		const r = v3.ControllerConfiguratorLayerSetIndex;
		if (r != null) {
			const e = t.layers?.[r];
			if (e == null) {
				v3.SetControllerConfiguratorLayerSetIndex(undefined);
				return true;
			}
		}
		return true;
	}
	GetFlattenedActionSets() {
		if (!this.BSetIndicesAreOkFixingIfNeeded()) {
			return [];
		}
		const e = [];
		this.EditingConfiguration.sets.forEach((t, r) => {
			e.push({
				nActionSetIndex: r,
				strName: t.display_name,
			});
			t.layers.forEach((n, i) => {
				e.push({
					nActionSetIndex: r,
					nLayerIndex: i,
					strName: t.display_name + ": " + n.display_name,
				});
			});
		});
		return e;
	}
	GoToRelativeEditingConfigurationActionSetInFlattenedList(e) {
		const t = v3.ControllerConfiguratorBaseSetIndex;
		const r = v3.ControllerConfiguratorLayerSetIndex;
		const n = this.GetFlattenedActionSets();
		const i =
			n.findIndex((e) => e.nActionSetIndex == t && e.nLayerIndex == r) + e;
		return (
			!(i < 0) &&
			!(i >= n.length) &&
			(v3.SetControllerConfiguratorBaseSetIndex(n[i].nActionSetIndex),
			v3.SetControllerConfiguratorLayerSetIndex(n[i].nLayerIndex),
			true)
		);
	}
	SetEditingConfigurationValue(e, t, r, n) {
		const i = new a.BinaryWriter();
		r.serializeBinaryToWriter(r.fromObject(t), i);
		const o = i.getResultBase64String();
		b.Debug(
			"SetEditingConfigurationValue serializeBinaryToWriter",
			(0, s.HO)(t),
			o,
		);
		this.EditingConfigurationWillUpdate();
		this.m_updatingEditingConfigurationPromise = n(o)
			.then((t) => {
				if (t == null) {
					b.Debug("SetEditingConfigurationValue returned nothing.");
					(0, s.h5)(() =>
						this.UpdateEditingConfiguration(
							e,
							this.m_unControllerIndex,
							this.EditingConfiguration,
						),
					);
					return;
				}
				const r = c.ln.deserializeBinary(t).toObject();
				b.Debug(
					"SetEditingConfigurationValue returned controller configuration.",
					r,
				);
				this.UpdateEditingConfiguration(e, this.m_unControllerIndex, r);
				this.m_nEditNumber++;
				if (r.url.indexOf("autosave://") == -1) {
					this.SaveEditingConfiguration(e);
				}
			})
			.catch((e) => {
				b.Error(
					"SetEditingConfigurationValue fail:",
					n,
					l.uS(e.result),
					e.message,
				);
				this.m_bIsUpdatingActiveConfiguration = false;
			});
	}
	SetControllerActionSet(e, t) {
		this.SetEditingConfigurationValue(e, t, c.DL, (e) =>
			SteamClient.Input.SetEditingControllerConfigurationActionSet(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	SetControllerSourceMode(e, t) {
		if (t.new_setting) {
			const e =
				this.m_CachedMsgs.m_EditedControllerInputGroup?.settings.findIndex(
					(e) => e.key == t.new_setting.key,
				);
			if (e >= 0) {
				this.m_CachedMsgs.m_EditedControllerInputGroup.settings[e].int_value =
					t.new_setting.int_value;
				const r = Ij({
					eControllerSource: t.source_binding_key,
					baseActionSetKey: t.action_set_key,
					layerActionSetKey: t.action_set_layer_key ?? "",
				});
				const n = (0, u.X)(
					this.m_CachedMsgs.m_EditedControllerInputGroup?.settings,
					u.jg[this.m_CachedMsgs.m_EditedControllerInputGroup.mode],
					this.m_eSourceType,
					this.m_eControllerType,
				);
				b.Debug("GroupSettings REPLACE", r, "WITH", n);
				this.m_EditedControllerInputGroupSettings.set(r, n);
			}
		}
		b.Debug("sending to client");
		this.SetEditingConfigurationValue(e, t, c.Rh, (e) =>
			SteamClient.Input.SetEditingControllerConfigurationSourceMode(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	SetControllerModeShiftBinding(e, t) {
		this.SetEditingConfigurationValue(e, t, c.Yc, (e) =>
			SteamClient.Input.SetControllerConfigurationModeShiftBinding(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	DuplicateControllerSourceMode(e, t) {
		b.Debug("sending to client");
		this.SetEditingConfigurationValue(e, t, c.Rh, (e) =>
			SteamClient.Input.DuplicateControllerConfigurationSourceMode(
				this.m_unControllerIndex,
				e,
			),
		);
		this.SaveEditingConfiguration(e);
		this.EnsureEditingConfiguration();
	}
	SwapControllerConfigurationSourceModes(e, t) {
		b.Debug("Sending Souce Swap command to client");
		this.SetEditingConfigurationValue(e, t, c.$k, (e) =>
			SteamClient.Input.SwapControllerConfigurationSourceModes(
				this.m_unControllerIndex,
				e,
			),
		);
		this.SaveEditingConfiguration(e);
		this.EnsureEditingConfiguration();
	}
	SetControllerInputActivator(e, t) {
		if (t.new_setting) {
			const e =
				this.m_CachedMsgs.m_EditedControllerInputActivator.settings.findIndex(
					(e) => e.key == t.new_setting.key,
				);
			if (e >= 0) {
				this.m_CachedMsgs.m_EditedControllerInputActivator.settings[
					e
				].int_value = t.new_setting.int_value;
				this.m_EditedControllerInputActivatorSettings = (0, u.X)(
					this.m_CachedMsgs.m_EditedControllerInputActivator.settings,
					u.av[this.m_CachedMsgs.m_EditedControllerInputActivator?.activation],
					this.m_eSourceType,
					this.m_eControllerType,
				);
			}
		}
		this.SetEditingConfigurationValue(e, t, c.Ob, (e) =>
			SteamClient.Input.SetEditingControllerConfigurationInputActivator(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	SetControllerInputActivatorEnabled(e, t) {
		this.SetEditingConfigurationValue(e, t, c.XU, (e) =>
			SteamClient.Input.SetEditingControllerConfigurationInputActivatorEnabled(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	SetControllerInputBinding(e, t) {
		this.SetEditingConfigurationValue(e, t, c.u6, (e) =>
			SteamClient.Input.SetEditingControllerConfigurationInputBinding(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	SetControllerMiscSettings(e, t) {
		this.SetEditingConfigurationValue(e, t, c.u9, (e) =>
			SteamClient.Input.SetEditingControllerConfigurationMiscSetting(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	ReOrderModeInputs(e, t) {
		this.SetEditingConfigurationValue(e, t, c.xz, (e) =>
			SteamClient.Input.SwapControllerModeInputBindings(
				this.m_unControllerIndex,
				e,
			),
		);
	}
	onControllerConfigInfo(e) {
		e?.forEach((e) => {
			if (!this.m_mapAppConfigs.has(e.appID)) {
				this.m_mapAppConfigs.set(e.appID, []);
			}
			if (e?.bGameQueryDone) {
				this.m_bConfigQueryInFlight = false;
				return;
			}
			if (e?.bPersonalQueryDone) {
				return;
			}
			const t = this.m_mapAppConfigs.get(e.appID);
			const r = t.findIndex((t) => t.URL == e.URL);
			if (r >= 0) {
				t[r] = e;
			} else {
				t.push(e);
			}
		});
	}
	onControllerConfigCloudStateChange(e) {
		this.m_bCloudConflict = e.bSyncConflict;
		this.m_bCloudSavePending = !e.bSyncDone && !e.bSyncError;
	}
	onRemotePlayConfigChange() {
		this.m_bRemotePlayConfigPending = false;
	}
	OnShowControllerLayoutPreviewMessage(e) {
		v3.ShowPreviewForConfig(e.appId, e.ulConfigId);
	}
	SyncDownControllerConfigs() {
		this.m_bCloudSavePending = true;
		this.m_bCloudConflict = false;
		SteamClient.Input.SyncCloudedControllerConfigs();
	}
	RequestRemotePlayControllerConfigs(e) {
		this.m_bRemotePlayConfigPending = true;
		SteamClient.Input.RequestRemotePlayControllerConfigs(e);
	}
	UploadControllerConfigs() {
		if (this.m_appId == C.qh) {
			this.ClearChordSummaryConfiguration();
		}
		this.m_strChooseBindingTab = "";
		if (this.m_bCloudSavePending || this.m_bCloudConflict) {
			if (this.m_bCloudConflict) {
				SteamClient.Input.DecrementCloudedControllerConfigsCounter();
			}
		} else {
			SteamClient.Input.UploadChangesForCloudedControllerConfigs();
		}
		this.m_appId = undefined;
		this.m_unControllerIndex = undefined;
	}
	ResolveControllerConfig(e) {
		this.m_bCloudSavePending = false;
		this.m_bCloudConflict = false;
		SteamClient.Input.ResolveCloudedControllerConfigConflict(e);
	}
	get BControllerConfigCloudConflict() {
		return this.m_bCloudConflict;
	}
	get BControllerConfigCloudSyncPending() {
		return this.m_bCloudSavePending;
	}
	get BRemotePlayConfigFetchPending() {
		return this.m_bRemotePlayConfigPending;
	}
	get BConfigurationQueryInFlight() {
		return this.m_bConfigQueryInFlight;
	}
	QueryConfigsForApp(e, t) {
		this.m_bConfigQueryInFlight = true;
		this.m_mapAppConfigs.set(e, []);
		SteamClient.Input.QueryControllerConfigsForApp(
			e,
			t,
			this.m_bFilterOtherControllerTypes,
		);
	}
	GetConfigsForApp(e) {
		if (this.m_mapAppConfigs.has(e)) {
			return this.m_mapAppConfigs.get(e);
		} else {
			return [];
		}
	}
	GetOfficialConfigsForApp(e, t) {
		let r = this.GetConfigsForApp(e);
		const n = (e) =>
			e.nSortIdx +
			(e.nControllerType == t
				? -100
				: this.BControllerTypesEquivalent(t, e.nControllerType, false)
					? -50
					: 0);
		let i = r.filter(
			(e) =>
				e.bOfficial &&
				(!this.m_bFilterOtherControllerTypes ||
					this.BControllerTypesEquivalent(t, e.nControllerType, false)),
		);
		if (i.length == 0) {
			i = r.filter((e) => e.bOfficial);
		}
		return i.sort((e, t) => n(e) - n(t));
	}
	GetTemplateConfigsForApp(e, t) {
		let r = this.GetConfigsForApp(0);
		return this.GetConfigsForApp(e)
			.concat(r)
			.filter(
				(e) =>
					e.URL == "template://empty.vdf" ||
					(e.eExportType == 4 &&
						(!this.m_bFilterOtherControllerTypes ||
							this.BControllerTypesEquivalent(t, e.nControllerType, true))),
			);
	}
	GetWorkshopConfigsForApp(e, t) {
		return this.GetConfigsForApp(e).filter(
			(e) =>
				e.URL.startsWith("workshop") &&
				(!this.m_bFilterOtherControllerTypes ||
					this.BControllerTypesEquivalent(t, e.nControllerType, false)),
		);
	}
	GetUserConfigsForApp(e, t, r) {
		return this.GetConfigsForApp(e).filter(
			(e) =>
				e.accountID == r &&
				(!this.m_bFilterOtherControllerTypes || t == e.nControllerType),
		);
	}
	GetAllConfigs() {
		let e = [];
		this.m_mapAppConfigs.forEach((t, r) => {
			if (!(0, u.bp)(r)) {
				t.forEach((t) => e.push(t));
			}
		});
		return e;
	}
	async GetActiveConfigForApp(e, t) {
		if (!this.m_mapCurrentSelectedConfigs.get(t)) {
			this.m_mapCurrentSelectedConfigs.set(t, new Map());
		}
		let r = this.m_mapCurrentSelectedConfigs.get(t).get(e);
		if (
			this.m_CurrentEditedConfigSelectedIdx !=
				this.m_ConfigSelectionChangeIdx ||
			!r
		) {
			r = await SteamClient.Input.GetConfigForAppAndController(e, t);
			this.m_mapCurrentSelectedConfigs.get(t).set(e, r);
		}
		return r;
	}
	CurrentAppConfigInfo(e, t) {
		return this.m_mapCurrentSelectedConfigs.get(t)?.get(e);
	}
	SetActiveConfigForApp(e, t, r, n) {
		if (e == C.qh) {
			this.ClearChordSummaryConfiguration();
		}
		b.Debug("Settings active config for app ", e, t, r, n);
		const i = this.m_controllerList.find(
			(e) => e.nControllerIndex == t,
		)?.eControllerType;
		const a =
			this.m_controllerList.filter((e) => e.eControllerType == i).length <= 1;
		SteamClient.Input.SetSelectedConfigForApp(e, t, r, n, a);
		this.m_appId = -1;
	}
	BControllerTypesEquivalent(e, t, r) {
		if (e == t) {
			return true;
		}
		if (e == 3 && t == 2) {
			return true;
		}
		if (e == 46 && t == 32) {
			return true;
		}
		if (e == 49 && t == 38) {
			return true;
		}
		if (r) {
			return e == t;
		}
		switch (t) {
			case 2:
			case 3:
				return [2, 3, 4].some((t) => e === t);
			case 4:
			case 46:
				break;
			case 30:
			case 33:
			case 31:
			case 32:
				return [33, 31, 32, 46, 49].some((t) => e === t);
			case 34:
			case 45:
			case 48:
				return [4, 34, 45, 48].some((t) => e === t);
			default:
				return false;
		}
		return false;
	}
	get ActiveInputBinding() {
		return this.m_CachedMsgs.m_MsgControllerInputBinding;
	}
	get VirtualMenuPreviewKey() {
		return this.m_nVirtualMenuPreviewKey;
	}
	SetActiveInputBinding(e) {
		this.m_CachedMsgs.m_MsgControllerInputBinding = (0, s.HO)(e);
	}
	SetVirtualMenuPreviewKey(e) {
		if (this.m_nVirtualMenuPreviewKey != e) {
			this.m_nVirtualMenuPreviewKey = e;
		}
	}
	get CurrentEditedBinding() {
		return this.m_CachedMsgs.m_EditedControllerBinding;
	}
	SetEditedInputBinding(e) {
		this.m_CachedMsgs.m_EditedControllerBinding = (0, s.HO)(e);
	}
	SetActiveInputActivator(e, t, r, n) {
		this.m_CachedMsgs.m_EditedControllerInputActivator = e;
		if (
			this.m_CachedMsgs.m_EditedControllerInputActivator?.settings != null &&
			t != null
		) {
			this.m_eSourceType = r;
			this.m_eControllerType = n;
			this.m_EditedControllerInputActivatorSettings = (0, u.X)(
				e.settings,
				t,
				r,
				n,
			);
		}
	}
	get CurrentEditedActivator() {
		return this.m_CachedMsgs.m_EditedControllerInputActivator;
	}
	get CurrentEditedActivatorSettings() {
		return this.m_EditedControllerInputActivatorSettings;
	}
	SetEditedGroupSettings(e, t, r, n, i, a) {
		const s = Ij({
			eControllerSource: i,
			baseActionSetKey: e,
			layerActionSetKey: t ?? "",
		});
		const o = (0, u.X)(r, n, i, a);
		b.Debug("GroupSettings REPLACE", s, "WITH", o);
		this.m_EditedControllerInputGroupSettings.set(s, o);
	}
	SetActiveInputGroup(e, t, r, n, i, a, s) {
		this.m_CachedMsgs.m_EditedControllerInputGroup = r;
		this.m_EditedControllerInputGroupData = {
			baseActionSet: e,
			layerActionSet: t,
			eControllerSource: i,
			eControllerType: a,
			modeId: s,
		};
		this.m_nVirtualMenuPreviewKey = -1;
		if (
			this.m_CachedMsgs.m_EditedControllerInputGroup?.settings != null &&
			n != null
		) {
			this.m_eSourceType = i;
			this.m_eControllerType = a;
			this.SetEditedGroupSettings(e?.key, t?.key, r.settings, n, i, a);
		}
	}
	get CurrentEditedGroup() {
		return this.m_CachedMsgs.m_EditedControllerInputGroup;
	}
	get CurrentEditedGroupSettingsData() {
		return this.m_EditedControllerInputGroupData;
	}
	get CurrentEditedGroupSettings() {
		return this.m_EditedControllerInputGroupSettings;
	}
	get ControllerConfiguratorBaseSetIndex() {
		return this.m_nControllerConfiguratorBaseSetIndex;
	}
	SetControllerConfiguratorBaseSetIndex(e) {
		this.m_nControllerConfiguratorBaseSetIndex = e;
	}
	get ControllerConfiguratorLayerSetIndex() {
		return this.m_nControllerConfiguratorLayerSetIndex;
	}
	get BaseActionSet() {
		const e = this.m_nControllerConfiguratorBaseSetIndex ?? 0;
		return this.EditingConfiguration?.sets[e];
	}
	get LayerActionSet() {
		const e = this.ControllerConfiguratorBaseSetIndex ?? 0;
		const t = this.ControllerConfiguratorLayerSetIndex;
		const r = this.EditingConfiguration?.sets[e];
		if (r == null) {
			return undefined;
		} else {
			return r.layers[t];
		}
	}
	get ActionSet() {
		const e = this.ControllerConfiguratorBaseSetIndex ?? 0;
		const t = this.ControllerConfiguratorLayerSetIndex;
		const r = this.EditingConfiguration?.sets[e];
		return (r == null ? undefined : r.layers[t]) ?? r;
	}
	SetControllerConfiguratorLayerSetIndex(e) {
		this.m_nControllerConfiguratorLayerSetIndex = e;
	}
	get EditIdx() {
		return this.m_nEditNumber;
	}
	BControllerConfiguratorIsMatchingFocusInput(e) {
		return (
			this.m_ControllerConfiguratorFocusInput == e &&
			((this.m_ControllerConfiguratorFocusInput = undefined), true)
		);
	}
	SetControllerConfiguratorFocusInput(e) {
		this.m_ControllerConfiguratorFocusInput = e;
	}
	get SearchText() {
		return this.m_strSearch;
	}
	SetSearchText(e) {
		this.m_strSearch = e;
	}
	get ChooseBindingTab() {
		return this.m_strChooseBindingTab;
	}
	SetChooseBindingTab(e) {
		this.m_strChooseBindingTab = e;
	}
	OnConfigSelectionChanged(e, t) {
		this.GetActiveConfigForApp(e, t);
		this.m_ConfigSelectionChangeIdx++;
	}
	get SelectedConfigChangeIdx() {
		return this.m_ConfigSelectionChangeIdx;
	}
	Init() {
		SteamClient.Input.RegisterForControllerConfigInfoMessages(
			this.onControllerConfigInfo,
		);
		SteamClient.Input.RegisterForControllerConfigCloudStateChanges(
			this.onControllerConfigCloudStateChange,
		);
		SteamClient.Input.RegisterForControllerCommandMessages(
			this.OnControllerCommandMessage,
		);
		SteamClient.Input.RegisterForRemotePlayConfigChanges(
			this.onRemotePlayConfigChange,
		);
		SteamClient.Input.RegisterForShowControllerLayoutPreviewMessages(
			this.OnShowControllerLayoutPreviewMessage,
		);
		SteamClient.Input.RegisterForConfigSelectionChanges(
			this.OnConfigSelectionChanged,
		);
	}
	FilterText(e) {
		return d.oy.TextFilterStore.FilterText(undefined, e);
	}
	Navigate(e, t, r) {
		let n = this.m_arrBackstack.findIndex((e) => e == t);
		if (n >= 0) {
			e.go(n - this.m_currentBackstackLevel);
		} else if (r) {
			r();
		} else {
			e.push(t);
		}
	}
	InitHistory(e) {
		this.m_history = e;
		this.m_locationPathname = e.location.pathname;
		const t = this.m_history.listen((e, t) => {
			if (this.m_locationPathname != e.pathname) {
				this.m_locationPathname = e.pathname;
			}
			if (
				(0, f.B6)(
					this.m_locationPathname,
					p.BV.GamepadUI.ControllerConfigurator.Root(),
				)
			) {
				if (
					(0, f.B6)(
						this.m_locationPathname,
						p.BV.GamepadUI.ControllerConfigurator.ModeSettings(),
					)
				) {
					this.m_locationPathname = this.m_locationPathname.substring(
						0,
						this.m_locationPathname.indexOf("ing") + 4,
					);
				}
				switch (t) {
					case "POP": {
						let e = this.m_arrBackstack.findIndex(
							(e) => e == this.m_locationPathname,
						);
						if (e < 0) {
							this.m_arrBackstack = [this.m_locationPathname];
							this.m_currentBackstackLevel = 0;
						} else {
							this.m_arrBackstack = this.m_arrBackstack.slice(0, e + 1);
							this.m_currentBackstackLevel = e;
						}
						break;
					}
					case "PUSH": {
						let e = this.m_arrBackstack.findIndex(
							(e) => e == this.m_locationPathname,
						);
						if (e != -1) {
							this.m_currentBackstackLevel = e;
							this.m_arrBackstack = this.m_arrBackstack.slice(0, e + 1);
						} else {
							this.m_arrBackstack.push(this.m_locationPathname);
							this.m_currentBackstackLevel = this.m_arrBackstack.length - 1;
						}
						break;
					}
					case "REPLACE":
						this.m_arrBackstack.pop();
						this.m_arrBackstack.push(this.m_locationPathname);
				}
			} else {
				this.m_arrBackstack = [];
				this.m_currentBackstackLevel = 0;
			}
		});
		return () => {
			t();
			this.m_history = undefined;
		};
	}
	get BFilterOtherControllerTypes() {
		return this.m_bFilterOtherControllerTypes;
	}
	SetFilterOtherControllerTypes(e) {
		this.m_bFilterOtherControllerTypes = e;
	}
}
export function st(e, t) {
	const [r, n] = i.useState(null);
	const a = v3.SelectedConfigChangeIdx;
	const s = t ?? v3.EditingConfigurationControllerIndex;
	i.useEffect(() => {
		v3.GetActiveConfigForApp(e, s).then((e) => n(e));
	}, [e, s, a]);
	return r;
}
(0, n.Cg)([s.sH], S.prototype, "m_appId", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_lastValidAppId", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_unControllerIndex", undefined);
(0, n.Cg)([s.sH.deep], S.prototype, "m_mapLoadedConfigs", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_EditingConfiguration", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_PreviewConfiguration", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_ChordSummaryConfiguration", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_bIsUpdatingActiveConfiguration", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_bChordHintVisible", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_nEditNumber", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_nLastSavedEditNumber", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_nCachedDeletedConfigs", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_nVirtualMenuPreviewKey", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_controllerList", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_bCloudSavePending", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_bRemotePlayConfigPending", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_bCloudConflict", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_ControllerConfiguratorFocusInput", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_strSearch", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_strChooseBindingTab", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_mapAppConfigs", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_bConfigQueryInFlight", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_mapCurrentSelectedConfigs", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_ConfigSelectionChangeIdx", undefined);
(0, n.Cg)([s.sH], S.prototype, "m_CurrentEditedConfigSelectedIdx", undefined);
(0, n.Cg)(
	[s.sH],
	S.prototype,
	"m_nControllerConfiguratorBaseSetIndex",
	undefined,
);
(0, n.Cg)(
	[s.sH],
	S.prototype,
	"m_nControllerConfiguratorLayerSetIndex",
	undefined,
);
(0, n.Cg)([s.sH.deep], S.prototype, "m_CachedMsgs", undefined);
(0, n.Cg)(
	[s.sH],
	S.prototype,
	"m_EditedControllerInputActivatorSettings",
	undefined,
);
(0, n.Cg)(
	[s.sH],
	S.prototype,
	"m_EditedControllerInputGroupSettings",
	undefined,
);
(0, n.Cg)([s.sH], S.prototype, "m_bFilterOtherControllerTypes", undefined);
(0, n.Cg)([A.oI], S.prototype, "OnControllerListChanged", null);
(0, n.Cg)([s.XI.bound], S.prototype, "EditingConfigurationWillUpdate", null);
(0, n.Cg)([s.XI.bound], S.prototype, "UpdateEditingConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "UpdateChordSummaryConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "UpdatePreviewedConfiguration", null);
(0, n.Cg)([A.oI], S.prototype, "OnControllerCommandMessage", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ShowPreviewForConfig", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ClearPreviewConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ClearChordSummaryConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "EnsureEditingConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "PreviewConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "LoadChordConfig", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ClearEditingConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SaveEditingConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "FreeControllerConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ExportEditingConfiguration", null);
(0, n.Cg)([s.XI.bound], S.prototype, "BSetIndicesAreOkFixingIfNeeded", null);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"GoToRelativeEditingConfigurationActionSetInFlattenedList",
	null,
);
(0, n.Cg)([s.XI.bound], S.prototype, "SetControllerActionSet", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetControllerSourceMode", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetControllerModeShiftBinding", null);
(0, n.Cg)([s.XI.bound], S.prototype, "DuplicateControllerSourceMode", null);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"SwapControllerConfigurationSourceModes",
	null,
);
(0, n.Cg)([s.XI.bound], S.prototype, "SetControllerInputActivator", null);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"SetControllerInputActivatorEnabled",
	null,
);
(0, n.Cg)([s.XI.bound], S.prototype, "SetControllerInputBinding", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetControllerMiscSettings", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ReOrderModeInputs", null);
(0, n.Cg)([s.XI.bound], S.prototype, "onControllerConfigInfo", null);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"onControllerConfigCloudStateChange",
	null,
);
(0, n.Cg)([s.XI.bound], S.prototype, "onRemotePlayConfigChange", null);
(0, n.Cg)([A.oI], S.prototype, "OnShowControllerLayoutPreviewMessage", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SyncDownControllerConfigs", null);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"RequestRemotePlayControllerConfigs",
	null,
);
(0, n.Cg)([s.XI.bound], S.prototype, "UploadControllerConfigs", null);
(0, n.Cg)([s.XI.bound], S.prototype, "ResolveControllerConfig", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetActiveConfigForApp", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetActiveInputBinding", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetVirtualMenuPreviewKey", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetEditedInputBinding", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetActiveInputActivator", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetEditedGroupSettings", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetActiveInputGroup", null);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"SetControllerConfiguratorBaseSetIndex",
	null,
);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"SetControllerConfiguratorLayerSetIndex",
	null,
);
(0, n.Cg)(
	[s.XI.bound],
	S.prototype,
	"SetControllerConfiguratorFocusInput",
	null,
);
(0, n.Cg)([s.XI.bound], S.prototype, "SetSearchText", null);
(0, n.Cg)([s.XI.bound], S.prototype, "SetChooseBindingTab", null);
(0, n.Cg)([s.XI.bound], S.prototype, "OnConfigSelectionChanged", null);
export const v3 = new S();
