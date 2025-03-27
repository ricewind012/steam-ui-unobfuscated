export let V;
let i;
((e) => {
	e[(e.k_EVRError_None = 0)] = "k_EVRError_None";
	e[(e.k_EVRError_VRSkipParam = 1)] = "k_EVRError_VRSkipParam";
	e[(e.k_EVRError_ComponentNotInstalled = 2)] =
		"k_EVRError_ComponentNotInstalled";
	e[(e.k_EVRError_ComponentBusy = 3)] = "k_EVRError_ComponentBusy";
	e[(e.k_EVRError_CrashProtection = 4)] = "k_EVRError_CrashProtection";
	e[(e.k_EVRError_HmdError = 5)] = "k_EVRError_HmdError";
	e[(e.k_EVRError_PathChanged = 6)] = "k_EVRError_PathChanged";
})((V ||= {}));
((e) => {
	e[(e.VRInitError_None = 0)] = "VRInitError_None";
	e[(e.VRInitError_Unknown = 1)] = "VRInitError_Unknown";
	e[(e.VRInitError_Init_InstallationNotFound = 100)] =
		"VRInitError_Init_InstallationNotFound";
	e[(e.VRInitError_Init_InstallationCorrupt = 101)] =
		"VRInitError_Init_InstallationCorrupt";
	e[(e.VRInitError_Init_VRClientDLLNotFound = 102)] =
		"VRInitError_Init_VRClientDLLNotFound";
	e[(e.VRInitError_Init_FileNotFound = 103)] = "VRInitError_Init_FileNotFound";
	e[(e.VRInitError_Init_FactoryNotFound = 104)] =
		"VRInitError_Init_FactoryNotFound";
	e[(e.VRInitError_Init_InterfaceNotFound = 105)] =
		"VRInitError_Init_InterfaceNotFound";
	e[(e.VRInitError_Init_InvalidInterface = 106)] =
		"VRInitError_Init_InvalidInterface";
	e[(e.VRInitError_Init_UserConfigDirectoryInvalid = 107)] =
		"VRInitError_Init_UserConfigDirectoryInvalid";
	e[(e.VRInitError_Init_HmdNotFound = 108)] = "VRInitError_Init_HmdNotFound";
	e[(e.VRInitError_Init_NotInitialized = 109)] =
		"VRInitError_Init_NotInitialized";
	e[(e.VRInitError_Init_PathRegistryNotFound = 110)] =
		"VRInitError_Init_PathRegistryNotFound";
	e[(e.VRInitError_Init_NoConfigPath = 111)] = "VRInitError_Init_NoConfigPath";
	e[(e.VRInitError_Init_NoLogPath = 112)] = "VRInitError_Init_NoLogPath";
	e[(e.VRInitError_Init_PathRegistryNotWritable = 113)] =
		"VRInitError_Init_PathRegistryNotWritable";
	e[(e.VRInitError_Init_AppInfoInitFailed = 114)] =
		"VRInitError_Init_AppInfoInitFailed";
	e[(e.VRInitError_Init_Retry = 115)] = "VRInitError_Init_Retry";
	e[(e.VRInitError_Init_InitCanceledByUser = 116)] =
		"VRInitError_Init_InitCanceledByUser";
	e[(e.VRInitError_Init_AnotherAppLaunching = 117)] =
		"VRInitError_Init_AnotherAppLaunching";
	e[(e.VRInitError_Init_SettingsInitFailed = 118)] =
		"VRInitError_Init_SettingsInitFailed";
	e[(e.VRInitError_Init_ShuttingDown = 119)] = "VRInitError_Init_ShuttingDown";
	e[(e.VRInitError_Init_TooManyObjects = 120)] =
		"VRInitError_Init_TooManyObjects";
	e[(e.VRInitError_Init_NoServerForBackgroundApp = 121)] =
		"VRInitError_Init_NoServerForBackgroundApp";
	e[(e.VRInitError_Init_NotSupportedWithCompositor = 122)] =
		"VRInitError_Init_NotSupportedWithCompositor";
	e[(e.VRInitError_Init_NotAvailableToUtilityApps = 123)] =
		"VRInitError_Init_NotAvailableToUtilityApps";
	e[(e.VRInitError_Init_Internal = 124)] = "VRInitError_Init_Internal";
	e[(e.VRInitError_Init_HmdDriverIdIsNone = 125)] =
		"VRInitError_Init_HmdDriverIdIsNone";
	e[(e.VRInitError_Init_HmdNotFoundPresenceFailed = 126)] =
		"VRInitError_Init_HmdNotFoundPresenceFailed";
	e[(e.VRInitError_Init_VRMonitorNotFound = 127)] =
		"VRInitError_Init_VRMonitorNotFound";
	e[(e.VRInitError_Init_VRMonitorStartupFailed = 128)] =
		"VRInitError_Init_VRMonitorStartupFailed";
	e[(e.VRInitError_Init_LowPowerWatchdogNotSupported = 129)] =
		"VRInitError_Init_LowPowerWatchdogNotSupported";
	e[(e.VRInitError_Init_InvalidApplicationType = 130)] =
		"VRInitError_Init_InvalidApplicationType";
	e[(e.VRInitError_Init_NotAvailableToWatchdogApps = 131)] =
		"VRInitError_Init_NotAvailableToWatchdogApps";
	e[(e.VRInitError_Init_WatchdogDisabledInSettings = 132)] =
		"VRInitError_Init_WatchdogDisabledInSettings";
	e[(e.VRInitError_Init_VRDashboardNotFound = 133)] =
		"VRInitError_Init_VRDashboardNotFound";
	e[(e.VRInitError_Init_VRDashboardStartupFailed = 134)] =
		"VRInitError_Init_VRDashboardStartupFailed";
	e[(e.VRInitError_Init_VRHomeNotFound = 135)] =
		"VRInitError_Init_VRHomeNotFound";
	e[(e.VRInitError_Init_VRHomeStartupFailed = 136)] =
		"VRInitError_Init_VRHomeStartupFailed";
	e[(e.VRInitError_Init_RebootingBusy = 137)] =
		"VRInitError_Init_RebootingBusy";
	e[(e.VRInitError_Init_FirmwareUpdateBusy = 138)] =
		"VRInitError_Init_FirmwareUpdateBusy";
	e[(e.VRInitError_Init_FirmwareRecoveryBusy = 139)] =
		"VRInitError_Init_FirmwareRecoveryBusy";
	e[(e.VRInitError_Init_USBServiceBusy = 140)] =
		"VRInitError_Init_USBServiceBusy";
	e[(e.VRInitError_Init_VRWebHelperStartupFailed = 141)] =
		"VRInitError_Init_VRWebHelperStartupFailed";
	e[(e.VRInitError_Init_TrackerManagerInitFailed = 142)] =
		"VRInitError_Init_TrackerManagerInitFailed";
	e[(e.VRInitError_Init_AlreadyRunning = 143)] =
		"VRInitError_Init_AlreadyRunning";
	e[(e.VRInitError_Init_FailedForVrMonitor = 144)] =
		"VRInitError_Init_FailedForVrMonitor";
	e[(e.VRInitError_Init_PropertyManagerInitFailed = 145)] =
		"VRInitError_Init_PropertyManagerInitFailed";
	e[(e.VRInitError_Init_WebServerFailed = 146)] =
		"VRInitError_Init_WebServerFailed";
	e[(e.VRInitError_Init_IllegalTypeTransition = 147)] =
		"VRInitError_Init_IllegalTypeTransition";
	e[(e.VRInitError_Init_MismatchedRuntimes = 148)] =
		"VRInitError_Init_MismatchedRuntimes";
	e[(e.VRInitError_Init_InvalidProcessId = 149)] =
		"VRInitError_Init_InvalidProcessId";
	e[(e.VRInitError_Init_VRServiceStartupFailed = 150)] =
		"VRInitError_Init_VRServiceStartupFailed";
	e[(e.VRInitError_Init_PrismNeedsNewDrivers = 151)] =
		"VRInitError_Init_PrismNeedsNewDrivers";
	e[(e.VRInitError_Init_PrismStartupTimedOut = 152)] =
		"VRInitError_Init_PrismStartupTimedOut";
	e[(e.VRInitError_Init_CouldNotStartPrism = 153)] =
		"VRInitError_Init_CouldNotStartPrism";
	e[(e.VRInitError_Init_PrismClientInitFailed = 154)] =
		"VRInitError_Init_PrismClientInitFailed";
	e[(e.VRInitError_Init_PrismClientStartFailed = 155)] =
		"VRInitError_Init_PrismClientStartFailed";
	e[(e.VRInitError_Init_PrismExitedUnexpectedly = 156)] =
		"VRInitError_Init_PrismExitedUnexpectedly";
	e[(e.VRInitError_Init_BadLuid = 157)] = "VRInitError_Init_BadLuid";
	e[(e.VRInitError_Init_NoServerForAppContainer = 158)] =
		"VRInitError_Init_NoServerForAppContainer";
	e[(e.VRInitError_Init_DuplicateBootstrapper = 159)] =
		"VRInitError_Init_DuplicateBootstrapper";
	e[(e.VRInitError_Init_VRDashboardServicePending = 160)] =
		"VRInitError_Init_VRDashboardServicePending";
	e[(e.VRInitError_Init_VRDashboardServiceTimeout = 161)] =
		"VRInitError_Init_VRDashboardServiceTimeout";
	e[(e.VRInitError_Init_VRDashboardServiceStopped = 162)] =
		"VRInitError_Init_VRDashboardServiceStopped";
	e[(e.VRInitError_Init_VRDashboardAlreadyStarted = 163)] =
		"VRInitError_Init_VRDashboardAlreadyStarted";
	e[(e.VRInitError_Init_VRDashboardCopyFailed = 164)] =
		"VRInitError_Init_VRDashboardCopyFailed";
	e[(e.VRInitError_Init_VRDashboardTokenFailure = 165)] =
		"VRInitError_Init_VRDashboardTokenFailure";
	e[(e.VRInitError_Init_VRDashboardEnvironmentFailure = 166)] =
		"VRInitError_Init_VRDashboardEnvironmentFailure";
	e[(e.VRInitError_Init_VRDashboardPathFailure = 167)] =
		"VRInitError_Init_VRDashboardPathFailure";
	e[(e.VRInitError_Driver_Failed = 200)] = "VRInitError_Driver_Failed";
	e[(e.VRInitError_Driver_Unknown = 201)] = "VRInitError_Driver_Unknown";
	e[(e.VRInitError_Driver_HmdUnknown = 202)] = "VRInitError_Driver_HmdUnknown";
	e[(e.VRInitError_Driver_NotLoaded = 203)] = "VRInitError_Driver_NotLoaded";
	e[(e.VRInitError_Driver_RuntimeOutOfDate = 204)] =
		"VRInitError_Driver_RuntimeOutOfDate";
	e[(e.VRInitError_Driver_HmdInUse = 205)] = "VRInitError_Driver_HmdInUse";
	e[(e.VRInitError_Driver_NotCalibrated = 206)] =
		"VRInitError_Driver_NotCalibrated";
	e[(e.VRInitError_Driver_CalibrationInvalid = 207)] =
		"VRInitError_Driver_CalibrationInvalid";
	e[(e.VRInitError_Driver_HmdDisplayNotFound = 208)] =
		"VRInitError_Driver_HmdDisplayNotFound";
	e[(e.VRInitError_Driver_TrackedDeviceInterfaceUnknown = 209)] =
		"VRInitError_Driver_TrackedDeviceInterfaceUnknown";
	e[(e.VRInitError_Driver_HmdDriverIdOutOfBounds = 211)] =
		"VRInitError_Driver_HmdDriverIdOutOfBounds";
	e[(e.VRInitError_Driver_HmdDisplayMirrored = 212)] =
		"VRInitError_Driver_HmdDisplayMirrored";
	e[(e.VRInitError_Driver_HmdDisplayNotFoundLaptop = 213)] =
		"VRInitError_Driver_HmdDisplayNotFoundLaptop";
	e[(e.VRInitError_Driver_PeerDriverNotInstalled = 214)] =
		"VRInitError_Driver_PeerDriverNotInstalled";
	e[(e.VRInitError_Driver_WirelessHmdNotConnected = 215)] =
		"VRInitError_Driver_WirelessHmdNotConnected";
	e[(e.VRInitError_IPC_ServerInitFailed = 300)] =
		"VRInitError_IPC_ServerInitFailed";
	e[(e.VRInitError_IPC_ConnectFailed = 301)] = "VRInitError_IPC_ConnectFailed";
	e[(e.VRInitError_IPC_SharedStateInitFailed = 302)] =
		"VRInitError_IPC_SharedStateInitFailed";
	e[(e.VRInitError_IPC_CompositorInitFailed = 303)] =
		"VRInitError_IPC_CompositorInitFailed";
	e[(e.VRInitError_IPC_MutexInitFailed = 304)] =
		"VRInitError_IPC_MutexInitFailed";
	e[(e.VRInitError_IPC_Failed = 305)] = "VRInitError_IPC_Failed";
	e[(e.VRInitError_IPC_CompositorConnectFailed = 306)] =
		"VRInitError_IPC_CompositorConnectFailed";
	e[(e.VRInitError_IPC_CompositorInvalidConnectResponse = 307)] =
		"VRInitError_IPC_CompositorInvalidConnectResponse";
	e[(e.VRInitError_IPC_ConnectFailedAfterMultipleAttempts = 308)] =
		"VRInitError_IPC_ConnectFailedAfterMultipleAttempts";
	e[(e.VRInitError_IPC_ConnectFailedAfterTargetExited = 309)] =
		"VRInitError_IPC_ConnectFailedAfterTargetExited";
	e[(e.VRInitError_IPC_NamespaceUnavailable = 310)] =
		"VRInitError_IPC_NamespaceUnavailable";
	e[(e.VRInitError_Compositor_Failed = 400)] = "VRInitError_Compositor_Failed";
	e[(e.VRInitError_Compositor_D3D11HardwareRequired = 401)] =
		"VRInitError_Compositor_D3D11HardwareRequired";
	e[(e.VRInitError_Compositor_FirmwareRequiresUpdate = 402)] =
		"VRInitError_Compositor_FirmwareRequiresUpdate";
	e[(e.VRInitError_Compositor_OverlayInitFailed = 403)] =
		"VRInitError_Compositor_OverlayInitFailed";
	e[(e.VRInitError_Compositor_ScreenshotsInitFailed = 404)] =
		"VRInitError_Compositor_ScreenshotsInitFailed";
	e[(e.VRInitError_Compositor_UnableToCreateDevice = 405)] =
		"VRInitError_Compositor_UnableToCreateDevice";
	e[(e.VRInitError_Compositor_SharedStateIsNull = 406)] =
		"VRInitError_Compositor_SharedStateIsNull";
	e[(e.VRInitError_Compositor_NotificationManagerIsNull = 407)] =
		"VRInitError_Compositor_NotificationManagerIsNull";
	e[(e.VRInitError_Compositor_ResourceManagerClientIsNull = 408)] =
		"VRInitError_Compositor_ResourceManagerClientIsNull";
	e[(e.VRInitError_Compositor_MessageOverlaySharedStateInitFailure = 409)] =
		"VRInitError_Compositor_MessageOverlaySharedStateInitFailure";
	e[(e.VRInitError_Compositor_PropertiesInterfaceIsNull = 410)] =
		"VRInitError_Compositor_PropertiesInterfaceIsNull";
	e[(e.VRInitError_Compositor_CreateFullscreenWindowFailed = 411)] =
		"VRInitError_Compositor_CreateFullscreenWindowFailed";
	e[(e.VRInitError_Compositor_SettingsInterfaceIsNull = 412)] =
		"VRInitError_Compositor_SettingsInterfaceIsNull";
	e[(e.VRInitError_Compositor_FailedToShowWindow = 413)] =
		"VRInitError_Compositor_FailedToShowWindow";
	e[(e.VRInitError_Compositor_DistortInterfaceIsNull = 414)] =
		"VRInitError_Compositor_DistortInterfaceIsNull";
	e[(e.VRInitError_Compositor_DisplayFrequencyFailure = 415)] =
		"VRInitError_Compositor_DisplayFrequencyFailure";
	e[(e.VRInitError_Compositor_RendererInitializationFailed = 416)] =
		"VRInitError_Compositor_RendererInitializationFailed";
	e[(e.VRInitError_Compositor_DXGIFactoryInterfaceIsNull = 417)] =
		"VRInitError_Compositor_DXGIFactoryInterfaceIsNull";
	e[(e.VRInitError_Compositor_DXGIFactoryCreateFailed = 418)] =
		"VRInitError_Compositor_DXGIFactoryCreateFailed";
	e[(e.VRInitError_Compositor_DXGIFactoryQueryFailed = 419)] =
		"VRInitError_Compositor_DXGIFactoryQueryFailed";
	e[(e.VRInitError_Compositor_InvalidAdapterDesktop = 420)] =
		"VRInitError_Compositor_InvalidAdapterDesktop";
	e[(e.VRInitError_Compositor_InvalidHmdAttachment = 421)] =
		"VRInitError_Compositor_InvalidHmdAttachment";
	e[(e.VRInitError_Compositor_InvalidOutputDesktop = 422)] =
		"VRInitError_Compositor_InvalidOutputDesktop";
	e[(e.VRInitError_Compositor_InvalidDeviceProvided = 423)] =
		"VRInitError_Compositor_InvalidDeviceProvided";
	e[(e.VRInitError_Compositor_D3D11RendererInitializationFailed = 424)] =
		"VRInitError_Compositor_D3D11RendererInitializationFailed";
	e[(e.VRInitError_Compositor_FailedToFindDisplayMode = 425)] =
		"VRInitError_Compositor_FailedToFindDisplayMode";
	e[(e.VRInitError_Compositor_FailedToCreateSwapChain = 426)] =
		"VRInitError_Compositor_FailedToCreateSwapChain";
	e[(e.VRInitError_Compositor_FailedToGetBackBuffer = 427)] =
		"VRInitError_Compositor_FailedToGetBackBuffer";
	e[(e.VRInitError_Compositor_FailedToCreateRenderTarget = 428)] =
		"VRInitError_Compositor_FailedToCreateRenderTarget";
	e[(e.VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429)] =
		"VRInitError_Compositor_FailedToCreateDXGI2SwapChain";
	e[(e.VRInitError_Compositor_FailedtoGetDXGI2BackBuffer = 430)] =
		"VRInitError_Compositor_FailedtoGetDXGI2BackBuffer";
	e[(e.VRInitError_Compositor_FailedToCreateDXGI2RenderTarget = 431)] =
		"VRInitError_Compositor_FailedToCreateDXGI2RenderTarget";
	e[(e.VRInitError_Compositor_FailedToGetDXGIDeviceInterface = 432)] =
		"VRInitError_Compositor_FailedToGetDXGIDeviceInterface";
	e[(e.VRInitError_Compositor_SelectDisplayMode = 433)] =
		"VRInitError_Compositor_SelectDisplayMode";
	e[(e.VRInitError_Compositor_FailedToCreateNvAPIRenderTargets = 434)] =
		"VRInitError_Compositor_FailedToCreateNvAPIRenderTargets";
	e[(e.VRInitError_Compositor_NvAPISetDisplayMode = 435)] =
		"VRInitError_Compositor_NvAPISetDisplayMode";
	e[(e.VRInitError_Compositor_FailedToCreateDirectModeDisplay = 436)] =
		"VRInitError_Compositor_FailedToCreateDirectModeDisplay";
	e[(e.VRInitError_Compositor_InvalidHmdPropertyContainer = 437)] =
		"VRInitError_Compositor_InvalidHmdPropertyContainer";
	e[(e.VRInitError_Compositor_UpdateDisplayFrequency = 438)] =
		"VRInitError_Compositor_UpdateDisplayFrequency";
	e[(e.VRInitError_Compositor_CreateRasterizerState = 439)] =
		"VRInitError_Compositor_CreateRasterizerState";
	e[(e.VRInitError_Compositor_CreateWireframeRasterizerState = 440)] =
		"VRInitError_Compositor_CreateWireframeRasterizerState";
	e[(e.VRInitError_Compositor_CreateSamplerState = 441)] =
		"VRInitError_Compositor_CreateSamplerState";
	e[(e.VRInitError_Compositor_CreateClampToBorderSamplerState = 442)] =
		"VRInitError_Compositor_CreateClampToBorderSamplerState";
	e[(e.VRInitError_Compositor_CreateAnisoSamplerState = 443)] =
		"VRInitError_Compositor_CreateAnisoSamplerState";
	e[(e.VRInitError_Compositor_CreateOverlaySamplerState = 444)] =
		"VRInitError_Compositor_CreateOverlaySamplerState";
	e[(e.VRInitError_Compositor_CreatePanoramaSamplerState = 445)] =
		"VRInitError_Compositor_CreatePanoramaSamplerState";
	e[(e.VRInitError_Compositor_CreateFontSamplerState = 446)] =
		"VRInitError_Compositor_CreateFontSamplerState";
	e[(e.VRInitError_Compositor_CreateNoBlendState = 447)] =
		"VRInitError_Compositor_CreateNoBlendState";
	e[(e.VRInitError_Compositor_CreateBlendState = 448)] =
		"VRInitError_Compositor_CreateBlendState";
	e[(e.VRInitError_Compositor_CreateAlphaBlendState = 449)] =
		"VRInitError_Compositor_CreateAlphaBlendState";
	e[(e.VRInitError_Compositor_CreateBlendStateMaskR = 450)] =
		"VRInitError_Compositor_CreateBlendStateMaskR";
	e[(e.VRInitError_Compositor_CreateBlendStateMaskG = 451)] =
		"VRInitError_Compositor_CreateBlendStateMaskG";
	e[(e.VRInitError_Compositor_CreateBlendStateMaskB = 452)] =
		"VRInitError_Compositor_CreateBlendStateMaskB";
	e[(e.VRInitError_Compositor_CreateDepthStencilState = 453)] =
		"VRInitError_Compositor_CreateDepthStencilState";
	e[(e.VRInitError_Compositor_CreateDepthStencilStateNoWrite = 454)] =
		"VRInitError_Compositor_CreateDepthStencilStateNoWrite";
	e[(e.VRInitError_Compositor_CreateDepthStencilStateNoDepth = 455)] =
		"VRInitError_Compositor_CreateDepthStencilStateNoDepth";
	e[(e.VRInitError_Compositor_CreateFlushTexture = 456)] =
		"VRInitError_Compositor_CreateFlushTexture";
	e[(e.VRInitError_Compositor_CreateDistortionSurfaces = 457)] =
		"VRInitError_Compositor_CreateDistortionSurfaces";
	e[(e.VRInitError_Compositor_CreateConstantBuffer = 458)] =
		"VRInitError_Compositor_CreateConstantBuffer";
	e[(e.VRInitError_Compositor_CreateHmdPoseConstantBuffer = 459)] =
		"VRInitError_Compositor_CreateHmdPoseConstantBuffer";
	e[(e.VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer = 460)] =
		"VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer";
	e[(e.VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer = 461)] =
		"VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer";
	e[(e.VRInitError_Compositor_CreateOverlayConstantBuffer = 462)] =
		"VRInitError_Compositor_CreateOverlayConstantBuffer";
	e[(e.VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer = 463)] =
		"VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer";
	e[
		(e.VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer = 464)
	] = "VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer";
	e[
		(e.VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer = 465)
	] = "VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer";
	e[
		(e.VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer = 466)
	] = "VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer";
	e[
		(e.VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer = 467)
	] =
		"VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer";
	e[(e.VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer = 468)] =
		"VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer";
	e[(e.VRInitError_Compositor_CreateGeomConstantBuffer = 469)] =
		"VRInitError_Compositor_CreateGeomConstantBuffer";
	e[(e.VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470)] =
		"VRInitError_Compositor_CreatePanelMaskConstantBuffer";
	e[(e.VRInitError_Compositor_CreatePixelSimUBO = 471)] =
		"VRInitError_Compositor_CreatePixelSimUBO";
	e[(e.VRInitError_Compositor_CreateMSAARenderTextures = 472)] =
		"VRInitError_Compositor_CreateMSAARenderTextures";
	e[(e.VRInitError_Compositor_CreateResolveRenderTextures = 473)] =
		"VRInitError_Compositor_CreateResolveRenderTextures";
	e[(e.VRInitError_Compositor_CreateComputeResolveRenderTextures = 474)] =
		"VRInitError_Compositor_CreateComputeResolveRenderTextures";
	e[(e.VRInitError_Compositor_CreateDriverDirectModeResolveTextures = 475)] =
		"VRInitError_Compositor_CreateDriverDirectModeResolveTextures";
	e[(e.VRInitError_Compositor_OpenDriverDirectModeResolveTextures = 476)] =
		"VRInitError_Compositor_OpenDriverDirectModeResolveTextures";
	e[(e.VRInitError_Compositor_CreateFallbackSyncTexture = 477)] =
		"VRInitError_Compositor_CreateFallbackSyncTexture";
	e[(e.VRInitError_Compositor_ShareFallbackSyncTexture = 478)] =
		"VRInitError_Compositor_ShareFallbackSyncTexture";
	e[(e.VRInitError_Compositor_CreateOverlayIndexBuffer = 479)] =
		"VRInitError_Compositor_CreateOverlayIndexBuffer";
	e[(e.VRInitError_Compositor_CreateOverlayVertexBuffer = 480)] =
		"VRInitError_Compositor_CreateOverlayVertexBuffer";
	e[(e.VRInitError_Compositor_CreateTextVertexBuffer = 481)] =
		"VRInitError_Compositor_CreateTextVertexBuffer";
	e[(e.VRInitError_Compositor_CreateTextIndexBuffer = 482)] =
		"VRInitError_Compositor_CreateTextIndexBuffer";
	e[(e.VRInitError_Compositor_CreateMirrorTextures = 483)] =
		"VRInitError_Compositor_CreateMirrorTextures";
	e[(e.VRInitError_Compositor_CreateLastFrameRenderTexture = 484)] =
		"VRInitError_Compositor_CreateLastFrameRenderTexture";
	e[(e.VRInitError_Compositor_CreateMirrorOverlay = 485)] =
		"VRInitError_Compositor_CreateMirrorOverlay";
	e[(e.VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer = 486)] =
		"VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer";
	e[(e.VRInitError_Compositor_DisplayModeNotSupported = 487)] =
		"VRInitError_Compositor_DisplayModeNotSupported";
	e[(e.VRInitError_Compositor_CreateOverlayInvalidCall = 488)] =
		"VRInitError_Compositor_CreateOverlayInvalidCall";
	e[(e.VRInitError_Compositor_CreateOverlayAlreadyInitialized = 489)] =
		"VRInitError_Compositor_CreateOverlayAlreadyInitialized";
	e[(e.VRInitError_Compositor_FailedToCreateMailbox = 490)] =
		"VRInitError_Compositor_FailedToCreateMailbox";
	e[(e.VRInitError_Compositor_WindowInterfaceIsNull = 491)] =
		"VRInitError_Compositor_WindowInterfaceIsNull";
	e[(e.VRInitError_Compositor_SystemLayerCreateInstance = 492)] =
		"VRInitError_Compositor_SystemLayerCreateInstance";
	e[(e.VRInitError_Compositor_SystemLayerCreateSession = 493)] =
		"VRInitError_Compositor_SystemLayerCreateSession";
	e[(e.VRInitError_Compositor_CreateInverseDistortUVs = 494)] =
		"VRInitError_Compositor_CreateInverseDistortUVs";
	e[(e.VRInitError_Compositor_CreateBackbufferDepth = 495)] =
		"VRInitError_Compositor_CreateBackbufferDepth";
	e[(e.VRInitError_VendorSpecific_UnableToConnectToOculusRuntime = 1000)] =
		"VRInitError_VendorSpecific_UnableToConnectToOculusRuntime";
	e[(e.VRInitError_VendorSpecific_WindowsNotInDevMode = 1001)] =
		"VRInitError_VendorSpecific_WindowsNotInDevMode";
	e[(e.VRInitError_VendorSpecific_OculusLinkNotEnabled = 1002)] =
		"VRInitError_VendorSpecific_OculusLinkNotEnabled";
	e[(e.VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101)] =
		"VRInitError_VendorSpecific_HmdFound_CantOpenDevice";
	e[(e.VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102)] =
		"VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart";
	e[(e.VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103)] =
		"VRInitError_VendorSpecific_HmdFound_NoStoredConfig";
	e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104)] =
		"VRInitError_VendorSpecific_HmdFound_ConfigTooBig";
	e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105)] =
		"VRInitError_VendorSpecific_HmdFound_ConfigTooSmall";
	e[(e.VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106)] =
		"VRInitError_VendorSpecific_HmdFound_UnableToInitZLib";
	e[(e.VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107)] =
		"VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion";
	e[(e.VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108)] =
		"VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart";
	e[(e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109)] =
		"VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart";
	e[(e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110)] =
		"VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext";
	e[(e.VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111)] =
		"VRInitError_VendorSpecific_HmdFound_UserDataAddressRange";
	e[(e.VRInitError_VendorSpecific_HmdFound_UserDataError = 1112)] =
		"VRInitError_VendorSpecific_HmdFound_UserDataError";
	e[(e.VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113)] =
		"VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck";
	e[(e.VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114)] =
		"VRInitError_VendorSpecific_OculusRuntimeBadInstall";
	e[(e.VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115)] =
		"VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1";
	e[(e.VRInitError_Steam_SteamInstallationNotFound = 2000)] =
		"VRInitError_Steam_SteamInstallationNotFound";
	e[(e.VRInitError_LastError = 2001)] = "VRInitError_LastError";
})((i ||= {}));
