const n = "/routes";
export function C() {
	return n;
}
const a = "/library";
const s = "/appoverlay";
const o = "/settings";
const l = "/zoo";
const c = "/search";
const m = (e) => `/app/${e ?? ":appid"}/properties`;
const u = (e) => `/app/${e ?? ":appid"}/controllerconfigurator`;
const d = (e) => `${a}/app/${e ?? ":appid"}`;
export const B = {
	Library: {
		Root: () => a,
		Home: () => `${a}/home`,
		App: {
			Root: (e) => `${d(e)}`,
			Achievements: {
				Root: (e) => `${d(e)}/achievements`,
				My: {
					Root: (e) => `${d(e)}/achievements/my`,
					Individual: (e) => `${d(e)}/achievements/my/individual`,
					Global: (e) => `${d(e)}/achievements/my/global`,
				},
				Friend: {
					Root: (e, t) => `${d(e)}/achievements/friend/${t ?? ":accountid"}`,
					Individual: (e, t) =>
						`${d(e)}/achievements/friend/${t ?? ":accountid"}/individual`,
					Global: (e, t) =>
						`${d(e)}/achievements/friend/${t ?? ":accountid"}/global`,
				},
			},
		},
		AppInCollection: (e, t) =>
			`${a}/collection/${e ? encodeURIComponent(e) : ":collectionid"}/${
				t ?? ":appid"
			}`,
		Collection: (e) =>
			`${a}/collection/${e ? encodeURIComponent(e) : ":collectionid"}`,
		AllCollections: () => `${a}/collections`,
	},
	AppProperties: {
		Root: (e) => `${m(e)}`,
		General: (e) => `${m(e)}/general`,
		Compatibility: (e) => `${m(e)}/compatibility`,
		Updates: (e) => `${m(e)}/updates`,
		LocalFiles: (e) => `${m(e)}/localfiles`,
		Language: (e) => `${m(e)}/language`,
		Betas: (e) => `${m(e)}/betas`,
		Controller: (e) => `${m(e)}/controller`,
		Shortcut: (e) => `${m(e)}/shortcut`,
		DLC: (e) => `${m(e)}/dlc`,
		Workshop: (e) => `${m(e)}/workshop`,
		Feedback: (e) => `${m(e)}/feedback`,
		Privacy: (e) => `${m(e)}/privacy`,
		GameRecording: (e) => `${m(e)}/gamerecording`,
	},
	Init: () => "/init",
	Downloads: () => `${a}/downloads`,
	Console: () => "/console",
	Media: {
		Root: () => "/media",
		Grid: () => "/media/grid",
		List: () => "/media/list",
		Item: (e = ":type", t = ":id") => `/media/item/${e}/${t}`,
	},
	Browser: () => "/browser/",
	Settings: {
		Root: () => `${o}`,
		General: () => `${o}/general`,
		Display: () => `${o}/display`,
		Power: () => `${o}/power`,
		Internet: () => `${o}/internet`,
		Notifications: () => `${o}/notifications`,
		Bluetooth: () => `${o}/bluetooth`,
		Audio: () => `${o}/audio`,
		Storage: () => `${o}/storage`,
		System: () => `${o}/system`,
		Security: () => `${o}/security`,
		Internal: () => `${o}/internal`,
		Developer: () => `${o}/developer`,
		Controller: () => `${o}/controller`,
		Keyboard: () => `${o}/keyboard`,
		Customization: () => `${o}/customization`,
		Friends: () => `${o}/friends`,
		Downloads: () => `${o}/downloads`,
		Cloud: () => `${o}/cloud`,
		RemotePlay: () => `${o}/remoteplay`,
		Library: () => `${o}/library`,
		Family: () => `${o}/family`,
		Home: () => `${o}/home`,
		Account: () => `${o}/account`,
		InGame: () => `${o}/ingame`,
		Compatibility: () => `${o}/compatibility`,
		Interface: () => `${o}/interface`,
		Music: () => `${o}/music`,
		Broadcast: () => `${o}/broadcast`,
		Voice: () => `${o}/voice`,
		InGameVoice: () => `${o}/ingamevoice`,
		DesktopSecurity: () => `${o}/desktopsecurity`,
		GameRecording: () => `${o}/gamerecording`,
	},
	GamepadUI: {
		Login: () => "/login",
		CreateAccount: () => "/createaccount",
		Account: () => "/account",
		Setup: () => "/decksetup",
		AppRunning: () => "/apprunning",
		GameAPIOSK: () => "/gameapiosk",
		Error: () => "/error",
		ColorSettings: () => "/colorsettings",
		Library: {
			Tab: (e) => `${a}/tab/${e ?? ":id"}`,
		},
		App: {
			Tab: (e, t) => `${d(e)}/tab/${t ?? ":id"}`,
		},
		AppOverlay: {
			Keyboard: () => `${s}/keyboard`,
			AppRunningControls: () => `${s}/apprunningcontrols`,
		},
		ControllerConfigurator: {
			Standalone: () => "/standalonecontrollerconfigurator",
			Root: (e) => `${u(e)}`,
			Main: (e) => `${u(e)}/main`,
			Summary: (e) => `${u(e)}/summary`,
			Preview: (e) => `${u(e)}/preview`,
			SharedLayout: (e) => `${u(e)}/sharedlayout`,
			ActionSets: (e) => `${u(e)}/actionsets`,
			Buttons: (e) => `${u(e)}/buttons`,
			DPad: (e) => `${u(e)}/dpad`,
			Triggers: (e) => `${u(e)}/triggers`,
			Sticks: (e) => `${u(e)}/sticks`,
			Touchpads: (e) => `${u(e)}/touchpads`,
			Gyroscopes: (e) => `${u(e)}/gyroscopes`,
			VirtualMenus: (e) => `${u(e)}/virtualmenus`,
			ChooseBinding: (e) => `${u(e)}/choosebinding`,
			ModeSettings: (e, t, r, n, i, a, s, o) =>
				`${u(e)}/modesettings/${((e, t, r, n, i, a, s) =>
					`${t ?? ":strBaseActionSetKey"}/${r ?? ":strLayerActionSetKey"}/${
						n ?? ":eControllerSource"
					}/${e ?? ":modeKey"}/${i ?? ":modeId"}/${a ?? ":index"}/${
						s ?? ":modeshift"
					}`)(t, r, n, i, a, s, o)}`,
			MousePosition: (e) => `${u(e)}/mouseposition`,
			ChooseConfiguration: {
				Root: (e) => `${u(e)}/chooseconfiguration`,
				Community: (e) => `${u(e)}/chooseconfiguration/community`,
			},
		},
		Search: {
			Root: () => `${c}`,
			Tab: (e) => `${c}/tab/${e ?? ":id"}`,
		},
		ControllerDeviceBindInput: (e) =>
			`/controller/bindinput/${e ?? ":controllerIdx"}`,
		ControllerDeviceTestInput: (e) =>
			`/controller/devicesupport/${e ?? ":controllerIdx"}`,
		ControllerDeviceCalibration: {
			Root: (e) => `/controller/calibration/${e ?? ":controllerIdx"}`,
			General: (e) =>
				`/controller/calibration/${e ?? ":controllerIdx"}/General`,
			Inputs: (e) => `/controller/calibration/${e ?? ":controllerIdx"}/Inputs`,
			Trackpads: (e) =>
				`/controller/calibration/${e ?? ":controllerIdx"}/Trackpads`,
			Gyro: (e) => `/controller/calibration/${e ?? ":controllerIdx"}/Gyro`,
			GyroDemo: (e) =>
				`/controller/calibration/${e ?? ":controllerIdx"}/GyroDemo`,
			Sensors: (e) =>
				`/controller/calibration/${e ?? ":controllerIdx"}/Sensors`,
			Outputs: (e) =>
				`/controller/calibration/${e ?? ":controllerIdx"}/Outputs`,
			LEDs: (e) => `/controller/calibration/${e ?? ":controllerIdx"}/LEDs`,
		},
		SteamWeb: () => "/steamweb",
		ExternalWeb: () => "/externalweb",
		MicroTxnAuth: () => "/microtxnauth",
		About: () => "/about",
		Chat: () => "/chat",
		Invites: () => "/invites",
		Store: () => "/store",
		Workshop: () => "/workshop",
		Zoo: {
			Root: () => `${l}`,
			Dropdowns: () => `${l}/dropdowns`,
			Modals: () => `${l}/modals`,
			Buttons: () => `${l}/buttons`,
			Sliders: () => `${l}/sliders`,
			Toggles: () => `${l}/toggles`,
			ClientSettings: () => `${l}/clientsettings`,
			OtherControls: () => `${l}/misc`,
			Glyphs: () => `${l}/glyphs`,
			SVG: () => `${l}/svg`,
			Input: () => `${l}/input`,
			DeveloperOptions: () => `${l}/developeroptions`,
			VRDeveloperOptions: () => `${l}/vrdeveloperoptions`,
			AppSpotlight: () => `${l}/appspotlight`,
			PlayNext: () => `${l}/playnext`,
			Type: () => `${l}/type`,
			SoundTester: () => `${l}/soundtester`,
			WebLinks: () => `${l}/weblinks`,
			Interstitials: () => `${l}/interstitials`,
			DesktopAppShortcuts: () => `${l}/desktopappshortcuts`,
			ThreeJSTests: () => `${l}/threedeetests`,
			GraphEditor: () => `${l}/grapheditor`,
			Notifications: () => `${l}/notifications`,
			Share: () => `${l}/share`,
		},
	},
};
