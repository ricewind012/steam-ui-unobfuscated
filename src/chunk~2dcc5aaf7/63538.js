import n from "./63696.js";
import i from "./35488.js";
import a from "./50376.js";
import s from "./83247.js";
import o from "./69913.js";
import l from "./78057.js";
import { Y2 } from "./72476.js";
import { BGameRecordingFeatureEnabled } from "./4069.js";
const u = {
	[o.w9.FriendsList]: {
		tooltipToken: "#AppOverlay_Toolbar_Friends",
		svgicon: () => <i.Friends />,
		parentalFeature: 4,
	},
	[o.w9.Settings]: {
		tooltipToken: "#AppOverlay_Toolbar_Settings",
		svgicon: () => <a.wB_ />,
	},
	[o.w9.Guides]: {
		tooltipToken: "#AppOverlay_Toolbar_Guides",
		svgicon: () => <i.Guides />,
		parentalFeature: 2,
	},
	[o.w9.Achievements]: {
		tooltipToken: "#AppOverlay_Toolbar_Achievements",
		svgicon: () => <i.OverlayAchievements />,
		parentalFeature: 3,
		buttonDisabled: (e, t) => !(t?.achievements?.nTotal > 0),
	},
	[o.w9.Notes]: {
		tooltipToken: "#AppOverlay_Toolbar_Notes",
		svgicon: () => <i.Edit />,
	},
	[o.w9.Discussions]: {
		tooltipToken: "#AppOverlay_Toolbar_Discussions",
		svgicon: () => <i.Comment />,
		parentalFeature: 2,
		buttonDisabled: (e) => e.BIsShortcut(),
	},
	[o.w9.Controller]: {
		tooltipToken: "#AppOverlay_Toolbar_Controller",
		svgicon: () => <i.Controller type="generic" />,
	},
	[o.w9.SoundtrackPlayer]: {
		tooltipToken: "#AppOverlay_Toolbar_SoundtrackPlayer",
		svgicon: () => <i.OverlayMusic />,
	},
	[o.w9.GameOverview]: {
		tooltipToken: "#AppOverlay_Toolbar_AppSpotlight",
		svgicon: () => <i.Information />,
		parentalFeature: 3,
		buttonDisabled: (e) => e.BIsShortcut(),
	},
	[o.w9.Browser]: {
		tooltipToken: "#AppOverlay_Toolbar_Browser",
		svgicon: () => <i.Browse />,
		parentalFeature: 9,
	},
	[o.w9.Broadcast]: {},
	[o.w9.BroadcastChat]: {
		parentalFeature: 4,
	},
	[o.w9.BroadcastFirstTime]: {},
	[o.w9.Screenshots]: () => ({
		tooltipToken:
			Y2() || !BGameRecordingFeatureEnabled()
				? "#MediaManager_Dialog_Header_China"
				: "#MediaManager_Dialog_Header",

		svgicon: () => <i.RecordingsScreenshots />,
		parentalFeature: 3,
	}),
	[o.w9.Workshop]: {
		tooltipToken: "#AppOverlay_Toolbar_Workshop",
		svgicon: () => <i.Patch />,
		parentalFeature: 2,
		buttonVisible: (e, t) => t && l.H.BIsWorkshopVisible(t) && !e.BIsShortcut(),
	},
	[o.w9.DLC]: {
		tooltipToken: "#AppOverlay_Toolbar_DLC",
		svgicon: () => <a.xTY />,
		buttonVisible: (e, t) => !!(t?.vecDLC?.length > 0),
	},
	[o.w9.Players]: {},
	[o.w9.Timer]: {
		tooltipToken: "#AppOverlay_Toolbar_Timer",
		svgicon: () => <i.Timer />,
	},
	[o.w9.AIContentReport]: {
		tooltipToken: "#AppOverlay_Toolbar_AIContentReport",
		svgicon: () => <i.ReportAI />,
		buttonVisible: (e, t) => !!t?.bHasAIGeneratedContent,
	},
	[o.w9.Timeline]: {
		tooltipToken: "#OverlayButtonHeader_Timeline",
		svgicon: () => <s.vN />,
	},
	[o.w9.RemotePlayTogether]: {
		tooltipToken: "#AppOverlay_Toolbar_RemotePlayTogether",
		svgicon: () => <i.RemotePlayTogether />,
		buttonVisible: (e, t) => !!t?.bRemotePlayTogether,
	},
	[o.w9.MultiplayerSessionLinkShare]: {
		tooltipToken: "#AppOverlay_Toolbar_MultiplayerSessionLinkShare",
		svgicon: () => <i.JoinSession />,
		buttonVisible: (e, t) => true,
	},
};
export function f(e) {
	const u_e = u[e];
	if (typeof u_e == "function") {
		return u_e();
	} else {
		return u_e;
	}
}
