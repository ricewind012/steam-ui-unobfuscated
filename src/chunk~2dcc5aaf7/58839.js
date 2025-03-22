var n;
export function Rz(e) {
	switch (e) {
		case 0:
			return "app";
		case 2:
			return "bundle";
		case 1:
			return "package";
		case 3:
			return "mtx";
	}
	return "invalid";
}
export function SW(e) {
	switch (e) {
		case "sub":
			return 1;
		case "bundle":
			return 2;
		default:
			return 0;
	}
}
export function _4(e, t) {
	switch (e) {
		case 2:
			return "bundle";
		case 1:
			return "sub";
		default:
			switch (t) {
				case 0:
				default:
					return "game";
				case 12:
					return "beta";
				case 4:
					return "dlc";
				case 1:
					return "demo";
				case 6:
					return "software";
				case 7:
				case 3:
					return "video";
				case 10:
					return "hardware";
				case 11:
					return "music";
				case 13:
					return "tool";
				case 2:
					return "mod";
				case 9:
					return "episode";
				case 8:
					return "series";
			}
	}
}
(function (e) {
	e[(e.k_NotRejected = -1)] = "k_NotRejected";
	e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap";
	e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform";
	e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon";
	e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR";
	e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan";
	e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame";
	e[(e.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage";
	e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded";
	e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags";
	e[(e.k_RejectIgnoreContentDescriptors = 9)] =
		"k_RejectIgnoreContentDescriptors";
	e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess";
	e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware";
	e[(e.k_RejectDLC = 12)] = "k_RejectDLC";
	e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary";
	e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary";
	e[(e.k_RejectVideo = 15)] = "k_RejectVideo";
	e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount";
	e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed";
})((n ||= {}));
