import { Localize } from "../../actual_src/utils/localization.js";
import { TS as Config } from "../library/72476.js";

/**
 * @inline
 */
export enum EReactionType {
	DeepThoughts = 1,
	Heartwarming,
	Hilarious,
	HotTake,
	Poetry,
	ExtraHelpful,
	GottaHaveIt,
	Michelangelo,
	Treasure,
	MindBlown,
	GoldenUnicorn,
	MadScientist,
	Clever,
	WarmBlanket,
	Saucy,
	SlowClap,
	TakeMyPoints,
	Wholesome,
	Jester,
	FancyPants,
	Whoa,
	SuperStar,
	Wild,
}

export function GetReactionImageURL(eType: EReactionType, bAnimated: boolean) {
	return `${Config.STORE_CDN_URL}public/images/loyalty/reactions/${
		bAnimated ? "animated" : "still"
	}/${eType}.png`;
}

export function GetLocTokenForReactionType(eType: EReactionType) {
	return Localize(`#RewardsReaction_${eType}`);
}
