import { useEffect, useCallback } from "react";
import { comparer, observable, action, makeAutoObservable } from "mobx";
import { useObserver } from "mobx-react-lite";
import { A as CStorage_Local } from "../../src/library/88696.js";
import { u as CFriendSettings } from "../../src/chunk~2dcc5aaf7/4563.js";
import { w as w_1 } from "../../src/library/12176.js";
import {
	B4 as CPlayer_CommunityPreferences,
	QA,
	tz as CPlayer_GetCommunityPreferences_Request,
	xt,
	pr as CPlayer_SetCommunityPreferences_Request,
} from "../../src/chunk~2dcc5aaf7/54946.js";
import {
	Eb,
	xf as CStore_GetStorePreferences_Request,
	nd,
} from "../../src/chunk~2dcc5aaf7/46948.js";
import {
	sC,
	aJ as CSteamNotification_GetPreferences_Request,
	Fn,
	Z8 as SteamNotificationPreference,
	gm as CSteamNotification_SetPreferences_Request,
} from "../../src/chunk~2dcc5aaf7/88475.js";
import { oI } from "../../src/library/52451.js";
import { SubscribableValue } from "../utils/callbackutils/index.js";
import { s as s_1 } from "../../src/library/81255.js";
import { Z5 as CMsgMonitorInfo } from "../../src/chunk~2dcc5aaf7/51297.js";
import {
	Message,
	BinaryReader,
	BinaryWriter,
} from "../../src/chunk~2dcc5aaf7/58663.js";
import { Sg, qM, gp, w0, BT, Uq, zj, i0 } from "../../src/library/48307.js";
import { oy } from "../../src/chunk~2dcc5aaf7/46422.js";
import { j7 } from "../../src/chunk~2dcc5aaf7/59401.js";
import { L } from "../../src/library/75144.js";
import { j$, JM, cr } from "../../src/chunk~2dcc5aaf7/63937.js";
import { iA as UserConfig } from "../../src/library/14628.js";

const C_Message = Message;
class CMsgHotkey extends C_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CMsgHotkey.prototype.key_code) {
			Sg(CMsgHotkey.M());
		}
		C_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CMsgHotkey.sm_m ||= {
			proto: CMsgHotkey,
			fields: {
				key_code: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				alt_key: {
					n: 2,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				shift_key: {
					n: 3,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				ctrl_key: {
					n: 4,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				meta_key: {
					n: 5,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				display_name: {
					n: 6,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CMsgHotkey.sm_m;
	}
	static MBF() {
		CMsgHotkey.sm_mbf ||= w0(CMsgHotkey.M());
		return CMsgHotkey.sm_mbf;
	}
	toObject(e = false) {
		return CMsgHotkey.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CMsgHotkey.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CMsgHotkey.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CMsgHotkey();
		return CMsgHotkey.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CMsgHotkey.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CMsgHotkey.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CMsgHotkey.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CMsgHotkey.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgHotkey";
	}
}

class CMsgClientSettings extends C_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CMsgClientSettings.prototype.no_save_personal_info) {
			Sg(CMsgClientSettings.M());
		}
		C_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CMsgClientSettings.sm_m ||= {
			proto: CMsgClientSettings,
			fields: {
				no_save_personal_info: {
					n: 1,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				oobe_test_mode_enabled: {
					n: 2,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				in_client_beta: {
					n: 3,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_steam_sideloaded: {
					n: 4,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				preferred_monitor: {
					n: 5,
					br: qM.readString,
					bw: gp.writeString,
				},
				steam_cef_gpu_blocklist_disabled: {
					n: 6,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				bigpicture_windowed: {
					n: 7,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				display_name: {
					n: 8,
					br: qM.readString,
					bw: gp.writeString,
				},
				is_external_display: {
					n: 9,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steam_os_underscan_level: {
					n: 10,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				steam_os_underscan_enabled: {
					n: 11,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				min_scale_factor: {
					n: 12,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				max_scale_factor: {
					n: 13,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				auto_scale_factor: {
					n: 14,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				small_mode: {
					n: 16,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				skip_steamvr_install_dialog: {
					n: 19,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				always_show_user_chooser: {
					n: 20,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				os_version_unsupported: {
					n: 21,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_family_sharing_notifications: {
					n: 3000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_copy_count_in_library: {
					n: 3001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				overlay_fps_counter_corner: {
					n: 4000,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				overlay_fps_counter_high_contrast: {
					n: 4001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				overlay_key: {
					n: 4002,
					c: CMsgHotkey,
				},
				screenshot_key: {
					n: 4003,
					c: CMsgHotkey,
				},
				enable_overlay: {
					n: 4004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_screenshot_notification: {
					n: 4006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_screenshot_sound: {
					n: 4007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				save_uncompressed_screenshots: {
					n: 4008,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				screenshots_path: {
					n: 4009,
					br: qM.readString,
					bw: gp.writeString,
				},
				default_ping_rate: {
					n: 4010,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				server_ping_rate: {
					n: 4011,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				steam_networking_share_ip: {
					n: 4012,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				web_browser_home: {
					n: 4013,
					br: qM.readString,
					bw: gp.writeString,
				},
				voice_mic_device_name: {
					n: 4014,
					br: qM.readString,
					bw: gp.writeString,
				},
				voice_mic_input_gain: {
					n: 4015,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				voice_speaker_output_gain: {
					n: 4016,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				voice_push_to_talk_setting: {
					n: 4017,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				voice_push_to_talk_key: {
					n: 4018,
					c: CMsgHotkey,
				},
				overlay_toolbar_list_view: {
					n: 4019,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				always_use_gamepadui_overlay: {
					n: 4020,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				overlay_tabs: {
					n: 4021,
					br: qM.readString,
					bw: gp.writeString,
				},
				overlay_scale_interface: {
					n: 4022,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				overlay_restore_browser_tabs: {
					n: 4023,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_avif_screenshots: {
					n: 4024,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				smooth_scroll_webviews: {
					n: 5000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_gpu_accelerated_webviews: {
					n: 5001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_hardware_video_decoding: {
					n: 5003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				run_at_startup: {
					n: 5004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_dpi_scaling: {
					n: 5005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_marketing_messages: {
					n: 5006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				start_in_big_picture_mode: {
					n: 5007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				jumplist_flags: {
					n: 5008,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				enable_ui_sounds: {
					n: 5009,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				disable_all_toasts: {
					n: 6000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				disable_toasts_in_game: {
					n: 6001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				play_sound_on_toast: {
					n: 6002,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				library_display_size: {
					n: 7000,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				library_whats_new_show_only_product_updates: {
					n: 7001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_store_content_on_home: {
					n: 7002,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				start_page: {
					n: 7003,
					br: qM.readString,
					bw: gp.writeString,
				},
				library_low_bandwidth_mode: {
					n: 7004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				library_low_perf_mode: {
					n: 7005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				library_disable_community_content: {
					n: 7006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				library_display_icon_in_game_list: {
					n: 7007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				ready_to_play_includes_streaming: {
					n: 7008,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_steam_deck_info: {
					n: 7009,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_shader_precache: {
					n: 8000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				enable_shader_background_processing: {
					n: 8001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				shader_precached_size: {
					n: 8002,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				needs_steam_service_repair: {
					n: 8003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				download_peer_content: {
					n: 8004,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				download_rate_bits_per_s: {
					n: 8005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				restrict_auto_updates: {
					n: 8006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				restrict_auto_updates_start: {
					n: 8007,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				restrict_auto_updates_end: {
					n: 8008,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				download_region: {
					n: 8009,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				download_while_app_running: {
					n: 8010,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				download_throttle_while_streaming: {
					n: 8011,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				download_throttle_rate: {
					n: 8012,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				default_app_update_behavior: {
					n: 8013,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				cloud_enabled: {
					n: 10000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_screenshot_manager: {
					n: 10001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				music_volume: {
					n: 11000,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				music_pause_on_app_start: {
					n: 11001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				music_pause_on_voice_chat: {
					n: 11002,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				music_download_high_quality: {
					n: 11003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				music_playlist_notification: {
					n: 11004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				broadcast_permissions: {
					n: 12000,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				broadcast_output_width: {
					n: 12001,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				broadcast_output_height: {
					n: 12002,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				broadcast_bitrate: {
					n: 12003,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				broadcast_encoding_option: {
					n: 12004,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				broadcast_record_all_video: {
					n: 12005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				broadcast_record_all_audio: {
					n: 12006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				broadcast_record_microphone: {
					n: 12007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				broadcast_show_upload_stats: {
					n: 12008,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				broadcast_show_live_reminder: {
					n: 12009,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				broadcast_chat_corner: {
					n: 12010,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamestream_hardware_video_encode: {
					n: 13000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamestream_enable_video_h265: {
					n: 13001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steam_input_configurator_error_msg_enable: {
					n: 14001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_guide_button_focus_steam: {
					n: 14002,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_ps_support: {
					n: 14003,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				controller_xbox_support: {
					n: 14004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_xbox_driver: {
					n: 14005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_switch_support: {
					n: 14006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_generic_support: {
					n: 14007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_power_off_timeout: {
					n: 14008,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				turn_off_controller_on_exit: {
					n: 14009,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_combine_nintendo_joycons: {
					n: 14010,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_enable_chord: {
					n: 140011,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				controller_poll_rate: {
					n: 140012,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				startup_movie_id: {
					n: 16000,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				startup_movie_local_path: {
					n: 16001,
					br: qM.readString,
					bw: gp.writeString,
				},
				startup_movie_shuffle: {
					n: 16002,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				startup_movie_used_for_resume: {
					n: 16003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				game_notes_enable_spellcheck: {
					n: 17001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				screenshot_items_per_row: {
					n: 18000,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				g_background_path: {
					n: 18201,
					br: qM.readString,
					bw: gp.writeString,
				},
				g_background_max_keep: {
					n: 18202,
					br: qM.readString,
					bw: gp.writeString,
				},
				g_background_time_resolution: {
					n: 18203,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				g_background_mk: {
					n: 18207,
					c: CMsgHotkey,
				},
				g_background_tg: {
					n: 18208,
					c: CMsgHotkey,
				},
				g_background_a_m: {
					n: 18209,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamerecording_video_bitrate: {
					n: 18210,
					br: qM.readString,
					bw: gp.writeString,
				},
				g_background_a_s: {
					n: 18211,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				g_background_mode: {
					n: 18212,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				g_background_audio: {
					n: 18213,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				g_max_fps: {
					n: 18214,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_hotkey_ic: {
					n: 18215,
					c: CMsgHotkey,
				},
				gamerecording_ic_seconds: {
					n: 18216,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				gamerecording_export_limit_type: {
					n: 18217,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				gamerecording_export_limit_size_mb: {
					n: 18218,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_export_limit_bitrate: {
					n: 18219,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_export_limit_width: {
					n: 18220,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_export_limit_height: {
					n: 18221,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_export_limit_frame_rate: {
					n: 18222,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_export_directory: {
					n: 18223,
					br: qM.readString,
					bw: gp.writeString,
				},
				gamerecording_export_codec: {
					n: 18224,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				gamerecording_video_maxheight: {
					n: 18225,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamerecording_force_mic_mono: {
					n: 18226,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamerecording_automatic_gain_control: {
					n: 18227,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_timestamps_in_console: {
					n: 20000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				force_oobe: {
					n: 20001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				override_browser_composer_mode: {
					n: 20002,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				cef_remote_debugging_enabled: {
					n: 20003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				force_deck_perf_tab: {
					n: 20004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				force_fake_mandatory_update: {
					n: 20005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				hdr_compat_testing: {
					n: 20006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				developer_mode_enabled: {
					n: 20007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				show_advanced_update_channels: {
					n: 20008,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_hdr_visualization: {
					n: 21001,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				gamescope_app_target_framerate: {
					n: 21002,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamescope_enable_app_target_framerate: {
					n: 21003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_disable_framelimit: {
					n: 21004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_display_refresh_rate: {
					n: 21005,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				gamescope_use_game_refresh_rate_in_steam: {
					n: 21006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_disable_mura_correction: {
					n: 21007,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_include_steamui_in_screenshots: {
					n: 21008,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_allow_tearing: {
					n: 21009,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_composite_debug: {
					n: 21010,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_force_composite: {
					n: 21011,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				gamescope_game_resolution_global: {
					n: 21012,
					br: qM.readString,
					bw: gp.writeString,
				},
				gamescope_guide_hotkey: {
					n: 21013,
					c: CMsgHotkey,
				},
				gamescope_qam_hotkey: {
					n: 21014,
					c: CMsgHotkey,
				},
				gamescope_hdr_enabled: {
					n: 21015,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steamos_status_led_brightness: {
					n: 22000,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				steamos_tdp_limit_enabled: {
					n: 22001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steamos_tdp_limit: {
					n: 22002,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				steamos_cec_enabled: {
					n: 22003,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steamos_cec_wake_on_resume: {
					n: 22004,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steamos_wifi_debug: {
					n: 22005,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steamos_wifi_force_wpa_supplicant: {
					n: 22006,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				steamos_magnifier_scale: {
					n: 22007,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				setting_validation_bool: {
					n: 23001,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				setting_validation_enum: {
					n: 23002,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				setting_validation_int32: {
					n: 23003,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				setting_validation_uint32: {
					n: 23004,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				setting_validation_uint64: {
					n: 23005,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				setting_validation_float: {
					n: 23006,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
				setting_validation_string: {
					n: 23007,
					br: qM.readString,
					bw: gp.writeString,
				},
				setting_validation_hotkey: {
					n: 23008,
					c: CMsgHotkey,
				},
				system_bluetooth_enabled: {
					n: 24000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				vr_show_perf_graph_in_hmd: {
					n: 25000,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CMsgClientSettings.sm_m;
	}
	static MBF() {
		CMsgClientSettings.sm_mbf ||= w0(CMsgClientSettings.M());
		return CMsgClientSettings.sm_mbf;
	}
	toObject(e = false) {
		return CMsgClientSettings.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CMsgClientSettings.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CMsgClientSettings.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CMsgClientSettings();
		return CMsgClientSettings.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CMsgClientSettings.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CMsgClientSettings.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CMsgClientSettings.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CMsgClientSettings.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientSettings";
	}
}

const k_strCommunityPrefsKey = "CachedCommunityPreferences";
const k_strStorePrefsKey = "CachedStorePreferences";
const k_strBatteryPrefsKey = "CachedBatteryPreferences";
const k_strNotifPrefsKey = "CachedNotificationPreferences";

export function t0() {
	return useObserver(() => rV.settings);
}

export function Tr() {
	return useObserver(() => rV.communityPreferences);
}

export function Hg() {
	return useObserver(() => rV.notificationPreferences);
}

export function vL() {
	const e = useObserver(() => rV.BIsConnectedToSteam());
	const t = useObserver(() => rV.familySettings);
	useEffect(() => {
		if (t.bIsDeviceAuthorizedForFamilySharing === undefined) {
			SteamClient.Settings.RequestDeviceAuthInfo();
		}
	}, [e, t]);
	if (e && t.bIsDeviceAuthorizedForFamilySharing !== undefined) {
		return t;
	} else {
		return null;
	}
}

class CSettingsStore {
	m_localStorage = new CStorage_Local();
	m_CMInterface;
	@observable m_CommunityPreferences = undefined;
	@observable m_StorePreferences = undefined;
	@observable m_FriendSettings = CFriendSettings();
	@observable m_Settings = undefined;
	m_strTimeZoneID = SubscribableValue("");
	m_BatteryPreferences = SubscribableValue({
		bShowBatteryPercentage: false,
	});
	@observable m_MonitorInfo = undefined;
	@observable m_bWindowed = false;
	@observable m_ClientSettings = {};
	@observable m_setDeferredSettings = new Set();
	@observable m_NotificationSettings = undefined;
	@observable m_bSteamIsInTournamentMode = false;

	constructor() {
		makeAutoObservable(this);
		let communityPrefs = new CPlayer_CommunityPreferences();
		this.m_CommunityPreferences = {
			bParenthesizeNicknames: communityPrefs.parenthesize_nicknames(),
			eTextFilterSetting: communityPrefs.text_filter_setting(),
			bTextFilterIgnoreFriends: communityPrefs.text_filter_ignore_friends(),
			content_descriptor_preferences: undefined,
		};
		this.InitDefaultCommunityContentDescriptorPreferences();
		this.m_StorePreferences = {
			eReviewScorePreference: 0,
			content_descriptor_preferences: undefined,
			provide_deck_feedback: 0,
		};
		this.InitDefaultStoreContentDescriptorPreferences();
		SteamClient.Settings?.RegisterForSettingsChanges(
			this.OnClientSettingsChange,
		);
		SteamClient.Settings?.RegisterForSettingsArrayChanges(
			this.OnClientSettingsMsgChange,
		);
		SteamClient.Settings?.RegisterForTimeZoneChange(this.OnTimeZoneChange);
		SteamClient.Settings?.GetWindowed().then(
			(value) => (this.m_bWindowed = value),
		);
		this.m_bSteamIsInTournamentMode = false;
		SteamClient.System.IsSteamInTournamentMode().then(
			(value) => (this.m_bSteamIsInTournamentMode = value),
		);
	}

	InitDefaultCommunityContentDescriptorPreferences() {
		this.m_CommunityPreferences.content_descriptor_preferences ||= {
			content_descriptors_to_exclude: [
				{
					content_descriptorid: 1,
					timestamp_added: 0,
				},
				{
					content_descriptorid: 4,
					timestamp_added: 0,
				},
				{
					content_descriptorid: 3,
					timestamp_added: 0,
				},
			],
		};
	}

	InitDefaultStoreContentDescriptorPreferences() {
		this.m_StorePreferences.content_descriptor_preferences ||= {
			content_descriptors_to_exclude: [
				{
					content_descriptorid: 4,
					timestamp_added: 0,
				},
				{
					content_descriptorid: 3,
					timestamp_added: 0,
				},
			],
		};
	}

	async Init(cm) {
		this.m_CMInterface = cm;
		const t = [];
		t.push(
			this.m_localStorage.GetObject(k_strCommunityPrefsKey).then((e) => {
				if (e) {
					this.m_CommunityPreferences = e;
					this.InitDefaultCommunityContentDescriptorPreferences();
				}
			}),
		);
		t.push(
			this.m_localStorage.GetObject(k_strStorePrefsKey).then((e) => {
				if (e) {
					this.m_StorePreferences = e;
					this.InitDefaultCommunityContentDescriptorPreferences();
				}
			}),
		);
		t.push(
			this.m_localStorage.GetObject(k_strBatteryPrefsKey).then((e) => {
				if (e) {
					this.m_BatteryPreferences.Set(e);
				}
			}),
		);
		t.push(
			this.m_localStorage.GetObject(k_strNotifPrefsKey).then((e) => {
				if (e) {
					this.m_NotificationSettings = Object.assign(e);
				}
			}),
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			QA.NotifyCommunityPreferencesChangedHandler,
			(e) => {
				this.MergeCommunityPreferences(
					e.Body().preferences(),
					e.Body().content_descriptor_preferences(),
				);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			Eb.NotifyStorePreferencesChangedHandler,
			(e) => {
				this.MergeStorePreferences(
					e.Body().preferences(),
					e.Body().content_descriptor_preferences(),
				);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			sC.PreferencesUpdatedHandler,
			(e) => {
				this.MergeNotificationPreferences(e.Body().preferences());
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			j7.NotifyGroupChangedHandler,
			(e) => {
				const t = L;
				t.invalidateQueries({
					queryKey: j$(UserConfig.steamid),
				});
				t.invalidateQueries({
					queryKey: JM(e.Body().family_groupid()),
				});
				t.invalidateQueries({
					queryKey: cr(e.Body().family_groupid()),
				});
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			j7.NotifyInviteStatusHandler,
			(e) => {
				L.invalidateQueries({
					queryKey: j$(UserConfig.steamid),
				});
				return 1;
			},
		);
		return Promise.all(t)
			.catch()
			.then(() => {
				this.m_CMInterface.AddOnLogonCallback(() => {
					let e = w_1.Init(CPlayer_GetCommunityPreferences_Request);
					xt.GetCommunityPreferences(
						this.m_CMInterface.GetServiceTransport(),
						e,
					).then((msg) => {
						this.MergeCommunityPreferences(
							msg.Body().preferences(),
							msg.Body().content_descriptor_preferences(),
						);
					});
					let t = w_1.Init(CStore_GetStorePreferences_Request);
					nd.GetStorePreferences(
						this.m_CMInterface.GetServiceTransport(),
						t,
					).then((msg) => {
						this.MergeStorePreferences(
							msg.Body().preferences(),
							msg.Body().content_descriptor_preferences(),
						);
					});
					let r = w_1.Init(CSteamNotification_GetPreferences_Request);
					Fn.GetPreferences(this.m_CMInterface.GetServiceTransport(), r).then(
						(msg) => {
							this.MergeNotificationPreferences(msg.Body().preferences());
						},
					);
				});
				SteamClient.FriendSettings.RegisterForSettingsChanges(
					this.OnClientFriendsSettingsChange,
				);
				SteamClient.Messaging.RegisterForMessages(
					"Settings",
					this.OnPostMessage,
				);
			});
	}

	BIsConnectedToSteam() {
		return this.m_CMInterface.BIsConnected();
	}

	OnPostMessage(e, t, strData: string) {
		if (e == "Settings" && t == "CommunityPreferences") {
			let data = JSON.parse(strData);
			this.SetCommunityPreferences(data);
		}
	}

	IsSteamInTournamentMode() {
		return this.m_bSteamIsInTournamentMode;
	}

	get notificationPreferences() {
		return this.m_NotificationSettings;
	}
	get communityPreferences() {
		return this.m_CommunityPreferences;
	}
	get storePreferences() {
		return this.m_StorePreferences;
	}
	get excludedStoreContentDescriptors() {
		return this.m_StorePreferences.content_descriptor_preferences.content_descriptors_to_exclude.map(
			(e) => e.content_descriptorid,
		);
	}
	get excludedCommunityContentDescriptors() {
		return this.m_CommunityPreferences.content_descriptor_preferences.content_descriptors_to_exclude.map(
			(e) => e.content_descriptorid,
		);
	}
	get friendSettings() {
		return this.m_FriendSettings;
	}
	get settings() {
		return this.m_Settings;
	}
	get familySettings() {
		return this.m_Settings;
	}
	get clientSettings() {
		return this.m_ClientSettings;
	}

	GetClientSetting(e) {
		return [this.clientSettings[e], (t) => qt(e, t)];
	}

	SetDeferred(e) {
		this.m_setDeferredSettings.add(e);
	}

	IsDeferred(e) {
		return this.m_setDeferredSettings.has(e);
	}

	ToggleNotificationPreference(eNotifType: number, maybe_flag) {
		let bSend = false;
		for (let n of this.m_NotificationSettings) {
			if (eNotifType == n.notification_type) {
				n.notification_targets ^= maybe_flag;
				if ((n.notification_targets & 1) != 1) {
					n.notification_targets = 0;
				}
				bSend = true;
				break;
			}
		}
		if (bSend) {
			this.SendNotificationPreferencesToServer();
		}
	}

	UpdateCommunityPreference(k, v) {
		this.UpdateCommunityPreferences({
			...this.communityPreferences,
			[k]: v,
		});
	}

	UpdateCommunityPreferences(e) {
		this.SetCommunityPreferences(e);
		this.SendCommunityPreferencesToServer();
	}

	CommunityPreferencesToMessage(e) {
		let msg = new CPlayer_CommunityPreferences();
		msg.set_parenthesize_nicknames(e.bParenthesizeNicknames);
		msg.set_text_filter_setting(e.eTextFilterSetting);
		msg.set_text_filter_ignore_friends(e.bTextFilterIgnoreFriends);
		return msg;
	}

	async SendCommunityPreferencesToServer() {
		let msg = w_1.Init(CPlayer_SetCommunityPreferences_Request);
		msg
			.Body()
			.set_preferences(
				this.CommunityPreferencesToMessage(this.communityPreferences),
			);
		return xt.SetCommunityPreferences(
			this.m_CMInterface.GetServiceTransport(),
			msg,
		);
	}

	async SendNotificationPreferencesToServer() {
		let rgPrefs = [];
		for (const notif of this.m_NotificationSettings) {
			let msg = new SteamNotificationPreference();
			msg.set_notification_type(notif.notification_type);
			msg.set_notification_targets(notif.notification_targets);
			rgPrefs.push(msg);
		}
		let msg = w_1.Init(CSteamNotification_SetPreferences_Request);
		msg.Body().set_preferences(rgPrefs);
		return Fn.SetPreferences(this.m_CMInterface.GetServiceTransport(), msg);
	}

	SetCommunityPreferences(prefs) {
		this.m_CommunityPreferences = prefs;
		this.m_localStorage.StoreObject(k_strCommunityPrefsKey, prefs);
	}

	SetStorePreferences(prefs) {
		this.m_StorePreferences = prefs;
		this.m_localStorage.StoreObject(k_strStorePrefsKey, prefs);
	}

	UpdateFriendSetting(k, v) {
		this.UpdateFriendSettings({
			...this.friendSettings,
			[k]: v,
		});
	}

	UpdateFriendSettings(settings) {
		this.m_FriendSettings = settings;
		SteamClient.FriendSettings.SetFriendSettings(JSON.stringify(settings));
	}

	OnClientSettingsChange(settings) {
		if (!comparer.structural(this.m_Settings, settings)) {
			this.m_Settings = settings;
		}
	}

	OnClientSettingsMsgChange(data) {
		const obj = CMsgClientSettings.deserializeBinary(data).toObject();
		Object.assign(this.m_ClientSettings, obj);
	}

	get CurrentTimeZoneID() {
		return this.m_strTimeZoneID;
	}

	OnTimeZoneChange(tz: string) {
		this.m_strTimeZoneID.Set(tz);
	}

	GetBatteryPreferences() {
		return this.m_BatteryPreferences;
	}

	SetBatteryPreferences(prefs) {
		this.m_BatteryPreferences.Set(prefs);
		this.m_localStorage.StoreObject(k_strBatteryPrefsKey, prefs);
	}

	OnClientFriendsSettingsChange(e) {
		let t;
		let settings = CFriendSettings();
		t =
			typeof e != "string"
				? e.FriendsSettings
				: JSON.parse(e, (key, value) =>
						key.substring(0, 1) == "b" && typeof value == "number"
							? value != 0
							: value,
					);
		Object.assign(settings, t);
		this.m_FriendSettings = settings;
	}

	get monitorInfo() {
		return this.m_MonitorInfo;
	}

	RefreshMonitorInfo() {
		SteamClient.Settings.GetMonitorInfo().then((data) => {
			this.m_MonitorInfo = CMsgMonitorInfo.deserializeBinary(data).toObject();
		});
	}

	SetPreferredMonitor(e) {
		if (this.m_MonitorInfo) {
			this.m_MonitorInfo.selected_display_name = e;
		}
		SteamClient.Settings.SetPreferredMonitor(e);
	}

	get WindowedMode() {
		return this.m_bWindowed;
	}

	SetWindowedMode(bWindowed: boolean) {
		SteamClient.Settings.SetWindowed(bWindowed);
		let gamepadWnd = oy.WindowStore.GamepadUIMainWindowInstance?.BrowserWindow;
		if (gamepadWnd) {
			gamepadWnd.SteamClient.Window.ToggleFullScreen(!bWindowed);
		}
		this.m_bWindowed = bWindowed;
	}

	MergeCommunityPreferences(e, t) {
		let prefs = {
			...this.m_CommunityPreferences,
		};
		if (e.parenthesize_nicknames() !== undefined) {
			prefs.bParenthesizeNicknames = e.parenthesize_nicknames();
		}
		if (e.text_filter_setting() !== undefined) {
			prefs.eTextFilterSetting = e.text_filter_setting();
		}
		if (e.text_filter_ignore_friends !== undefined) {
			prefs.bTextFilterIgnoreFriends = e.text_filter_ignore_friends();
		}
		prefs.content_descriptor_preferences.content_descriptors_to_exclude.length = 0;
		for (let i = 0; i < t?.content_descriptors_to_exclude().length; i++) {
			const n = t.content_descriptors_to_exclude()[i];
			prefs.content_descriptor_preferences.content_descriptors_to_exclude.push({
				content_descriptorid: n.content_descriptorid(),
				timestamp_added: n.timestamp_added(),
			});
		}
		this.SetCommunityPreferences(prefs);
	}

	MergeStorePreferences(e, t) {
		let prefs = {
			...this.m_StorePreferences,
		};
		prefs.eReviewScorePreference = e.review_score_preference();
		prefs.content_descriptor_preferences.content_descriptors_to_exclude.length = 0;
		for (let e = 0; e < t?.content_descriptors_to_exclude().length; e++) {
			const n = t.content_descriptors_to_exclude()[e];
			prefs.content_descriptor_preferences.content_descriptors_to_exclude.push({
				content_descriptorid: n.content_descriptorid(),
				timestamp_added: n.timestamp_added(),
			});
		}
		prefs.provide_deck_feedback = e.provide_deck_feedback();
		this.SetStorePreferences(prefs);
	}

	MergeNotificationPreferences(rgNotifs) {
		this.m_NotificationSettings = [];
		for (const notif of rgNotifs) {
			this.m_NotificationSettings.push({
				notification_type: notif.notification_type(),
				notification_targets: notif.notification_targets(),
			});
		}
		this.m_localStorage.StoreObject(
			k_strNotifPrefsKey,
			this.m_NotificationSettings,
		);
	}
}

Cg([oI], CSettingsStore.prototype, "OnPostMessage", null);
Cg([action], CSettingsStore.prototype, "UpdateCommunityPreferences", null);
Cg(
	[s_1(250)],
	CSettingsStore.prototype,
	"SendCommunityPreferencesToServer",
	null,
);
Cg(
	[s_1(250)],
	CSettingsStore.prototype,
	"SendNotificationPreferencesToServer",
	null,
);
Cg([action], CSettingsStore.prototype, "UpdateFriendSettings", null);
Cg([oI], CSettingsStore.prototype, "OnClientSettingsChange", null);
Cg([oI], CSettingsStore.prototype, "OnClientSettingsMsgChange", null);
Cg([oI], CSettingsStore.prototype, "OnTimeZoneChange", null);
Cg([oI], CSettingsStore.prototype, "GetBatteryPreferences", null);
Cg([oI], CSettingsStore.prototype, "SetBatteryPreferences", null);
Cg([oI], CSettingsStore.prototype, "OnClientFriendsSettingsChange", null);
Cg([oI], CSettingsStore.prototype, "RefreshMonitorInfo", null);
Cg([oI], CSettingsStore.prototype, "SetPreferredMonitor", null);
Cg([oI], CSettingsStore.prototype, "SetWindowedMode", null);
Cg([action], CSettingsStore.prototype, "MergeCommunityPreferences", null);
Cg([action], CSettingsStore.prototype, "MergeStorePreferences", null);
Cg([action], CSettingsStore.prototype, "MergeNotificationPreferences", null);
export const rV = new CSettingsStore();

export function VI(e) {
	return [
		useObserver(() => rV.clientSettings[e]),
		useCallback((t) => qt(e, t), [e]),
		useObserver(() => rV.IsDeferred(e)),
		useCallback(() => {
			rV.SetDeferred(e);
		}, [e]),
	];
}

export function hX(setting) {
	return [useObserver(() => rV.clientSettings[setting])];
}

export function qt(k, v) {
	const r = new BinaryWriter();
	let n = {
		[k]: v,
	};
	CMsgClientSettings.serializeBinaryToWriter(
		CMsgClientSettings.fromObject(n),
		r,
	);
	const serialized = r.getResultBase64String();
	return SteamClient.Settings.SetSetting(serialized);
}

export function e_(setting) {
	const t = useCallback((t) => rV.UpdateFriendSetting(setting, t), [setting]);
	return useObserver(() => [rV.friendSettings[setting], t]);
}

export function I5(setting) {
	const t = useCallback(
		(t) => rV.UpdateCommunityPreference(setting, t),
		[setting],
	);
	return useObserver(() => [rV.communityPreferences[setting], t]);
}

export function sE(eNotifType: number, maybe_flag) {
	return useCallback(
		() => rV.ToggleNotificationPreference(eNotifType, maybe_flag),
		[eNotifType, maybe_flag],
	);
}

window.settingsStore = rV;
