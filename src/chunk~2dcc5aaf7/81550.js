var n = {
	"./bumper_end.wav": 14758,
	"./camera1.wav": 35973,
	"./confirmation_negative.wav": 19724,
	"./confirmation_positive.wav": 16948,
	"./deck_ui_achievement_toast.wav": 90995,
	"./deck_ui_bumper_end_02.wav": 14722,
	"./deck_ui_default_activation.wav": 33920,
	"./deck_ui_hide_modal.wav": 53624,
	"./deck_ui_into_game_detail.wav": 20019,
	"./deck_ui_launch_game.wav": 53316,
	"./deck_ui_message_toast.wav": 14011,
	"./deck_ui_misc_01.wav": 988,
	"./deck_ui_misc_08.wav": 93469,
	"./deck_ui_misc_10.wav": 27998,
	"./deck_ui_navigation.wav": 66315,
	"./deck_ui_out_of_game_detail.wav": 86969,
	"./deck_ui_show_modal.wav": 23703,
	"./deck_ui_side_menu_fly_in.wav": 33421,
	"./deck_ui_side_menu_fly_out.wav": 17108,
	"./deck_ui_slider_down.wav": 80324,
	"./deck_ui_slider_up.wav": 28619,
	"./deck_ui_switch_toggle_off.wav": 13015,
	"./deck_ui_switch_toggle_on.wav": 14235,
	"./deck_ui_tab_transition_01.wav": 78235,
	"./deck_ui_tile_scroll.wav": 49130,
	"./deck_ui_toast.wav": 25171,
	"./deck_ui_typing.wav": 44539,
	"./deck_ui_volume.wav": 63300,
	"./desktop_toast_default.wav": 7289,
	"./desktop_toast_short.wav": 83800,
	"./pop_sound.wav": 71058,
	"./recording_highlight.wav": 45831,
	"./recording_start.wav": 12511,
	"./recording_stop.wav": 82201,
	"./timer_expired_alarm.wav": 89948,
};
function i(e) {
	var t = a(e);
	return require(t);
}
function a(e) {
	if (!require.o(n, e)) {
		var t = new Error("Cannot find module '" + e + "'");
		t.code = "MODULE_NOT_FOUND";
		throw t;
	}
	return n[e];
}
i.keys = function () {
	return Object.keys(n);
};
i.resolve = a;
module.exports = i;
i.id = 81550;
