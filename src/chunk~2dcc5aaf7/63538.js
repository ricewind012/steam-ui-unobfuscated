var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./35488.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require("./83247.js");
var o = require("./69913.js");
var l = require("./78057.js");
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require("./4069.js");
const u = {
	[o.w9.FriendsList]: {
		tooltipToken: "#AppOverlay_Toolbar_Friends",
		svgicon: () => n.createElement(i.Friends, null),
		parentalFeature: 4,
	},
	[o.w9.Settings]: {
		tooltipToken: "#AppOverlay_Toolbar_Settings",
		svgicon: () => n.createElement(a.wB_, null),
	},
	[o.w9.Guides]: {
		tooltipToken: "#AppOverlay_Toolbar_Guides",
		svgicon: () => n.createElement(i.Guides, null),
		parentalFeature: 2,
	},
	[o.w9.Achievements]: {
		tooltipToken: "#AppOverlay_Toolbar_Achievements",
		svgicon: () => n.createElement(i.OverlayAchievements, null),
		parentalFeature: 3,
		buttonDisabled: (e, t) => !(t?.achievements?.nTotal > 0),
	},
	[o.w9.Notes]: {
		tooltipToken: "#AppOverlay_Toolbar_Notes",
		svgicon: () => n.createElement(i.Edit, null),
	},
	[o.w9.Discussions]: {
		tooltipToken: "#AppOverlay_Toolbar_Discussions",
		svgicon: () => n.createElement(i.Comment, null),
		parentalFeature: 2,
		buttonDisabled: (e) => e.BIsShortcut(),
	},
	[o.w9.Controller]: {
		tooltipToken: "#AppOverlay_Toolbar_Controller",
		svgicon: () =>
			n.createElement(i.Controller, {
				type: "generic",
			}),
	},
	[o.w9.SoundtrackPlayer]: {
		tooltipToken: "#AppOverlay_Toolbar_SoundtrackPlayer",
		svgicon: () => n.createElement(i.OverlayMusic, null),
	},
	[o.w9.GameOverview]: {
		tooltipToken: "#AppOverlay_Toolbar_AppSpotlight",
		svgicon: () => n.createElement(i.Information, null),
		parentalFeature: 3,
		buttonDisabled: (e) => e.BIsShortcut(),
	},
	[o.w9.Browser]: {
		tooltipToken: "#AppOverlay_Toolbar_Browser",
		svgicon: () => n.createElement(i.Browse, null),
		parentalFeature: 9,
	},
	[o.w9.Broadcast]: {},
	[o.w9.BroadcastChat]: {
		parentalFeature: 4,
	},
	[o.w9.BroadcastFirstTime]: {},
	[o.w9.Screenshots]: () => ({
		tooltipToken:
			(0, c.Y2)() || !(0, m.BGameRecordingFeatureEnabled)()
				? "#MediaManager_Dialog_Header_China"
				: "#MediaManager_Dialog_Header",
		svgicon: () => n.createElement(i.RecordingsScreenshots, null),
		parentalFeature: 3,
	}),
	[o.w9.Workshop]: {
		tooltipToken: "#AppOverlay_Toolbar_Workshop",
		svgicon: () => n.createElement(i.Patch, null),
		parentalFeature: 2,
		buttonVisible: (e, t) => t && l.H.BIsWorkshopVisible(t) && !e.BIsShortcut(),
	},
	[o.w9.DLC]: {
		tooltipToken: "#AppOverlay_Toolbar_DLC",
		svgicon: () => n.createElement(a.xTY, null),
		buttonVisible: (e, t) => !!(t?.vecDLC?.length > 0),
	},
	[o.w9.Players]: {},
	[o.w9.Timer]: {
		tooltipToken: "#AppOverlay_Toolbar_Timer",
		svgicon: () => n.createElement(i.Timer, null),
	},
	[o.w9.AIContentReport]: {
		tooltipToken: "#AppOverlay_Toolbar_AIContentReport",
		svgicon: () => n.createElement(i.ReportAI, null),
		buttonVisible: (e, t) => !!t?.bHasAIGeneratedContent,
	},
	[o.w9.Timeline]: {
		tooltipToken: "#OverlayButtonHeader_Timeline",
		svgicon: () => n.createElement(s.vN, null),
	},
	[o.w9.RemotePlayTogether]: {
		tooltipToken: "#AppOverlay_Toolbar_RemotePlayTogether",
		svgicon: () => n.createElement(i.RemotePlayTogether, null),
		buttonVisible: (e, t) => !!t?.bRemotePlayTogether,
	},
	[o.w9.MultiplayerSessionLinkShare]: {
		tooltipToken: "#AppOverlay_Toolbar_MultiplayerSessionLinkShare",
		svgicon: () => n.createElement(i.JoinSession, null),
		buttonVisible: (e, t) => true,
	},
};
export function f(e) {
	const t = u[e];
	if (typeof t == "function") {
		return t();
	} else {
		return t;
	}
}
