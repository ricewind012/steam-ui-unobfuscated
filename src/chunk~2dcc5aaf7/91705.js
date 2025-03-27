import n from "./1252.js";
import i from "./87935.js";
import a, { xv } from "./72476.js";
const s = {
	koreana: "korean",
	schinese: "simplified chinese",
	tchinese: "traditional chinese",
	brazilian: "portuguese (brazilian)",
	latam: "spanish",
};
export async function uc(e, t, r) {
	let o = i.B7.GetCommunityURL();
	let l = s[a.TS.LANGUAGE] || a.TS.LANGUAGE;
	const c = {
		origin: xv(),
		p: t,
		rgSections: [2, 4, 3, 9],
		filterLanguage: a.TS.LANGUAGE,
		languageTag: l,
		nMaxInappropriateScore: 1,
	};
	let m = await n.g.get(`${o}library/appcommunityfeed/${e}`, {
		params: c,
		retrycount: 1,
		cancelToken: r ? r.token : undefined,
	});
	if (!m || !m.hub) {
		console.log("LoadAppHubContent error", m);
		throw new Error("Invalid response");
	}
	for (let e of m.hub) {
		e.spoiler_tag = !!e.spoiler_tag;
	}
	return m.hub;
}
export function lm(e) {
	switch (e) {
		case 0:
		default: {
			return "Invalid";
		}
		case 1: {
			return "Screenshot";
		}
		case 2: {
			return "WorkshopAccount_Developer";
		}
		case 3: {
			return "WorkshopAccount_Public";
		}
		case 4: {
			return "PublishedFile_Developer";
		}
		case 5: {
			return "PublishedFile_Public";
		}
		case 6: {
			return "Test";
		}
		case 7: {
			return "ForumTopic";
		}
		case 8: {
			return "Recommendation";
		}
		case 9: {
			return "Video";
		}
		case 10: {
			return "Profile";
		}
		case 11: {
			return "NewsPost";
		}
		case 12: {
			return "Clan";
		}
		case 13: {
			return "ClanAnnouncement";
		}
		case 14: {
			return "ClanEvent";
		}
		case 15: {
			return "UserStatusPublished";
		}
		case 16: {
			return "UserReceivedNewGame";
		}
		case 17: {
			return "PublishedFile_Announcement";
		}
		case 18: {
			return "ModeratorMessage";
		}
		case 19: {
			return "ClanCuratedApp";
		}
	}
}
export let _Q;
((e) => {
	e[(e.Invalid = 0)] = "Invalid";
	e[(e.FriendAdded = 1)] = "FriendAdded";
	e[(e.AchievementUnlocked = 2)] = "AchievementUnlocked";
	e[(e.ReceivedNewGame = 3)] = "ReceivedNewGame";
	e[(e.JoinedGroup = 4)] = "JoinedGroup";
	e[(e.CommentByMe = 5)] = "CommentByMe";
	e[(e.FriendRemoved = 6)] = "FriendRemoved";
	e[(e.GroupCreated = 7)] = "GroupCreated";
	e[(e.CommentOnMe = 8)] = "CommentOnMe";
	e[(e.AddedGameToWishlist = 9)] = "AddedGameToWishlist";
	e[(e.RecommendedGame = 10)] = "RecommendedGame";
	e[(e.ScreenshotPublished_Deprecated = 11)] = "ScreenshotPublished_Deprecated";
	e[(e.VideoPublished_Deprecated = 12)] = "VideoPublished_Deprecated";
	e[(e.FilePublished_Screenshot = 13)] = "FilePublished_Screenshot";
	e[(e.FilePublished_Video = 14)] = "FilePublished_Video";
	e[(e.FilePublished_WorkshopItem = 15)] = "FilePublished_WorkshopItem";
	e[(e.UserStatus = 16)] = "UserStatus";
	e[(e.FilePublished_Collection = 17)] = "FilePublished_Collection";
	e[(e.FilePublished_GreenlightGame = 18)] = "FilePublished_GreenlightGame";
	e[(e.FilePublished_WorkshopAnnouncement = 19)] =
		"FilePublished_WorkshopAnnouncement";
	e[(e.FilePublished_WebGuide = 20)] = "FilePublished_WebGuide";
	e[(e.FilePublished_Screenshot_Tagged = 21)] =
		"FilePublished_Screenshot_Tagged";
	e[(e.FilePublished_Art = 22)] = "FilePublished_Art";
	e[(e.FileFavorited = 23)] = "FileFavorited";
	e[(e.PlayedGameFirstTime = 30)] = "PlayedGameFirstTime";
	e[(e.ClanAchievement = 1001)] = "ClanAchievement";
	e[(e.PostedAnnouncement = 1002)] = "PostedAnnouncement";
	e[(e.ScheduledEvent = 1003)] = "ScheduledEvent";
	e[(e.SelectedNewPOTW = 1004)] = "SelectedNewPOTW";
	e[(e.PromotedNewAdmin = 1005)] = "PromotedNewAdmin";
	e[(e.MessageOnClanPage = 1006)] = "MessageOnClanPage";
	e[(e.CuratorRecommendedGame = 1007)] = "CuratorRecommendedGame";
})((_Q ||= {}));
