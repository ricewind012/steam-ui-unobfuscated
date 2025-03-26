export var PP;
var i = require("./87935.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require(/*webcrack:missing*/ "./52451.js");
export class eA {
	static g_Singleton = null;
	m_mapStandardIconFilenames = new Map();
	m_mapAppIcons = new Map();
	m_URIContext = null;
	static Get() {
		if (eA.g_Singleton == null) {
			eA.g_Singleton = new eA();
			eA.g_Singleton.Init();
		}
		return eA.g_Singleton;
	}
	Init() {
		SteamClient.Input?.RegisterForActiveConfigLoadedMessages(
			this.OnConfigLoaded,
		);
	}
	FilenamesForCategory(e, t) {
		if (e == PP.AppIcons) {
			return (this.m_mapAppIcons.get(t) ?? []).map((e) => e.strFilename);
		}
		if (e == PP.User) {
			return (this.m_mapAppIcons.get(0) ?? []).map((e) => e.strFilename);
		}
		return this.m_mapStandardIconFilenames.get(e) ?? [];
	}
	URIForFilename(e, t) {
		const r = this.m_mapAppIcons
			.get(0)
			?.find((t) => t.strFilename == e)?.strURL;
		if (e == null || e == "") {
			return e;
		} else {
			return (
				r ||
				(e.startsWith("@")
					? this.m_mapAppIcons.get(t)?.find((t) => t.strFilename == e)?.strURL
					: e.startsWith("ghost") ||
						  e.startsWith("genesis") ||
						  e.startsWith("special_blank")
						? this.m_URIContext("./" + e).default
						: "")
			);
		}
	}
	BFilenameExists(e, t) {
		if (e == null) {
			return false;
		}
		if (e.startsWith("@")) {
			return (this.m_mapAppIcons.get(t) ?? [])
				.map((e) => e.strFilename)
				.includes(e);
		}
		return Array.from(this.m_mapStandardIconFilenames.values())
			.flat()
			.includes(e);
	}
	async LoadIconsForApp(e) {
		if (e == null || this.m_mapAppIcons.has(e)) {
			return true;
		}
		const t = await SteamClient.Input.GetTouchMenuIconsForApp(e);
		this.m_mapAppIcons.set(e, t);
		return true;
	}
	CategoryForFilename(e) {
		if (e == null) {
			return PP.Other;
		}
		if (e.startsWith("@") || e.startsWith(i.Uq.Controller.Icons)) {
			return PP.AppIcons;
		}
		if (
			!e.includes("ghost") &&
			!e.includes("special_blank") &&
			!e.includes("genesis")
		) {
			return PP.User;
		}
		const t = e.split("_");
		if (t[0] === "ghost") {
			switch (t[2]) {
				case "wpn":
					return PP.Weapons;
				case "ammo":
					return PP.Ammo;
				case "inv":
					return PP.Inventory;
				case "magic":
					return PP.Magic;
				case "act":
					return PP.Actions;
				case "move":
					return PP.Movement;
				case "menu":
					return PP.Menu;
				case "vehicle":
					return PP.Vehicle;
				case "setting":
				case "utility":
					return PP.Utility;
				case "input":
					return PP.Input;
				case "media":
					return PP.Media;
				case "target":
					return PP.Targets;
				case "social":
					return PP.Social;
			}
		}
		return PP.Other;
	}
	OnConfigLoaded(e, t, r) {
		if (r) {
			eA.Get().LoadIconsForApp(e);
			eA.Get().LoadIconsForApp(0);
		}
	}
	constructor() {
		this.m_URIContext = require("./33855.js");
		const e = this.m_URIContext
			.keys()
			.map((e) => (e.startsWith("./") ? e.substring(2) : e));
		for (const e of dS) {
			this.m_mapStandardIconFilenames.set(e, []);
		}
		e.forEach((e) => {
			const t = this.CategoryForFilename(e);
			this.m_mapStandardIconFilenames.get(t).push(e);
		});
	}
}
(function (e) {
	e[(e.AppIcons = 0)] = "AppIcons";
	e[(e.Weapons = 1)] = "Weapons";
	e[(e.Ammo = 2)] = "Ammo";
	e[(e.Inventory = 3)] = "Inventory";
	e[(e.Magic = 4)] = "Magic";
	e[(e.Actions = 5)] = "Actions";
	e[(e.Movement = 6)] = "Movement";
	e[(e.Menu = 7)] = "Menu";
	e[(e.Vehicle = 8)] = "Vehicle";
	e[(e.Utility = 9)] = "Utility";
	e[(e.Input = 10)] = "Input";
	e[(e.Media = 11)] = "Media";
	e[(e.Targets = 12)] = "Targets";
	e[(e.Social = 13)] = "Social";
	e[(e.Other = 14)] = "Other";
	e[(e.User = 15)] = "User";
})((PP ||= {}));
export const dS = Object.values(PP).filter((e) => typeof e == "number");
export function ZC(e) {
	switch (e) {
		case PP.AppIcons:
			return Localize("#ControllerConfigurator_IconCategory_AppIcons");
		case PP.Weapons:
			return Localize("#ControllerConfigurator_IconCategory_Weapons");
		case PP.Ammo:
			return Localize("#ControllerConfigurator_IconCategory_Ammo");
		case PP.Inventory:
			return Localize("#ControllerConfigurator_IconCategory_Inventory");
		case PP.Magic:
			return Localize("#ControllerConfigurator_IconCategory_Magic");
		case PP.Actions:
			return Localize("#ControllerConfigurator_IconCategory_Actions");
		case PP.Movement:
			return Localize("#ControllerConfigurator_IconCategory_Movement");
		case PP.Menu:
			return Localize("#ControllerConfigurator_IconCategory_Menu");
		case PP.Vehicle:
			return Localize("#ControllerConfigurator_IconCategory_Vehicle");
		case PP.Utility:
			return Localize("#ControllerConfigurator_IconCategory_Utility");
		case PP.Input:
			return Localize("#ControllerConfigurator_IconCategory_Input");
		case PP.Media:
			return Localize("#ControllerConfigurator_IconCategory_Media");
		case PP.Targets:
			return Localize("#ControllerConfigurator_IconCategory_Targets");
		case PP.Social:
			return Localize("#ControllerConfigurator_IconCategory_Social");
		case PP.Other:
			return Localize("#ControllerConfigurator_IconCategory_Other");
		case PP.User:
			return Localize("#ControllerConfigurator_IconCategory_User");
	}
}
export function j9(e, t) {
	return (0, s.vJ)(async () => {
		if (e != null) {
			if (e.startsWith("/") || e.startsWith("data:")) {
				return e;
			} else {
				if (e.startsWith("@")) {
					await eA.Get().LoadIconsForApp(t);
				}
				await eA.Get().LoadIconsForApp(0);
				return eA.Get().URIForFilename(e, t);
			}
		}
	}, [e, t]);
}
