import { CCallbackList } from "../../actual_src/utils/callbackutils";
export let PN;
((e) => {
	e[(e.LaunchGame = 0)] = "LaunchGame";
	e[(e.FriendMessage = 1)] = "FriendMessage";
	e[(e.ChatMention = 2)] = "ChatMention";
	e[(e.ChatMessage = 3)] = "ChatMessage";
	e[(e.ToastMessage = 4)] = "ToastMessage";
	e[(e.ToastAchievement = 5)] = "ToastAchievement";
	e[(e.ToastMisc = 6)] = "ToastMisc";
	e[(e.ToastMiscShort = 7)] = "ToastMiscShort";
	e[(e.FriendOnline = 8)] = "FriendOnline";
	e[(e.FriendInGame = 9)] = "FriendInGame";
	e[(e.VolSound = 10)] = "VolSound";
	e[(e.ShowModal = 11)] = "ShowModal";
	e[(e.HideModal = 12)] = "HideModal";
	e[(e.IntoGameDetail = 13)] = "IntoGameDetail";
	e[(e.OutOfGameDetail = 14)] = "OutOfGameDetail";
	e[(e.PagedNavigation = 15)] = "PagedNavigation";
	e[(e.ToggleOn = 16)] = "ToggleOn";
	e[(e.ToggleOff = 17)] = "ToggleOff";
	e[(e.SliderUp = 18)] = "SliderUp";
	e[(e.SliderDown = 19)] = "SliderDown";
	e[(e.ChangeTabs = 20)] = "ChangeTabs";
	e[(e.DefaultOk = 21)] = "DefaultOk";
	e[(e.OpenSideMenu = 22)] = "OpenSideMenu";
	e[(e.CloseSideMenu = 23)] = "CloseSideMenu";
	e[(e.BasicNav = 24)] = "BasicNav";
	e[(e.FailedNav = 25)] = "FailedNav";
	e[(e.Typing = 26)] = "Typing";
	e[(e.TimerExpired = 27)] = "TimerExpired";
	e[(e.Screenshot = 28)] = "Screenshot";
})((PN ||= {}));
export const eZ = new (class {
	m_fnCallbackOnPlaySound = new CCallbackList();
	RegisterCallbackOnPlaySound(e) {
		return this.m_fnCallbackOnPlaySound.Register(e);
	}
	PlayNavSound(e, t) {
		this.m_fnCallbackOnPlaySound.Dispatch(e, t);
	}
})();
