import n, { Cg } from "./34629.js";
import i, { useEffect, useCallback } from "./63696.js";
import a, { Gn } from "./89193.js";
import s, { q3 } from "./90095.js";
import o from "./88696.js";
import l from "./4563.js";
import c from "./12176.js";
import m from "./54946.js";
import u from "./46948.js";
import d from "./88475.js";
import A from "./52451.js";
import { SubscribableValue } from "../../actual_src/utils/callbackutils";
import { s as s_1 } from "./81255.js";
import h from "./51297.js";
import C from "./58663.js";
import _ from "./48307.js";
import S from "./46422.js";
import w from "./59401.js";
import B from "./75144.js";
import { j$, JM, cr } from "./63937.js";
import I from "./14628.js";
const C_Message = C.Message;
class b extends C_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.key_code) {
			_.Sg(b.M());
		}
		C_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				key_code: {
					n: 1,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				alt_key: {
					n: 2,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				shift_key: {
					n: 3,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				ctrl_key: {
					n: 4,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				meta_key: {
					n: 5,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				display_name: {
					n: 6,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= _.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new C.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new C.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgHotkey";
	}
}
class y extends C_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.no_save_personal_info) {
			_.Sg(y.M());
		}
		C_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				no_save_personal_info: {
					n: 1,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				oobe_test_mode_enabled: {
					n: 2,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				in_client_beta: {
					n: 3,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				is_steam_sideloaded: {
					n: 4,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				preferred_monitor: {
					n: 5,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				steam_cef_gpu_blocklist_disabled: {
					n: 6,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				bigpicture_windowed: {
					n: 7,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				display_name: {
					n: 8,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				is_external_display: {
					n: 9,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steam_os_underscan_level: {
					n: 10,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				steam_os_underscan_enabled: {
					n: 11,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				min_scale_factor: {
					n: 12,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				max_scale_factor: {
					n: 13,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				auto_scale_factor: {
					n: 14,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				small_mode: {
					n: 16,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				skip_steamvr_install_dialog: {
					n: 19,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				always_show_user_chooser: {
					n: 20,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				os_version_unsupported: {
					n: 21,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_family_sharing_notifications: {
					n: 3000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_copy_count_in_library: {
					n: 3001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				overlay_fps_counter_corner: {
					n: 4000,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				overlay_fps_counter_high_contrast: {
					n: 4001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				overlay_key: {
					n: 4002,
					c: b,
				},
				screenshot_key: {
					n: 4003,
					c: b,
				},
				enable_overlay: {
					n: 4004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_screenshot_notification: {
					n: 4006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_screenshot_sound: {
					n: 4007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				save_uncompressed_screenshots: {
					n: 4008,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				screenshots_path: {
					n: 4009,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				default_ping_rate: {
					n: 4010,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				server_ping_rate: {
					n: 4011,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				steam_networking_share_ip: {
					n: 4012,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				web_browser_home: {
					n: 4013,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				voice_mic_device_name: {
					n: 4014,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				voice_mic_input_gain: {
					n: 4015,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				voice_speaker_output_gain: {
					n: 4016,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				voice_push_to_talk_setting: {
					n: 4017,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				voice_push_to_talk_key: {
					n: 4018,
					c: b,
				},
				overlay_toolbar_list_view: {
					n: 4019,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				always_use_gamepadui_overlay: {
					n: 4020,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				overlay_tabs: {
					n: 4021,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				overlay_scale_interface: {
					n: 4022,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				overlay_restore_browser_tabs: {
					n: 4023,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_avif_screenshots: {
					n: 4024,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				smooth_scroll_webviews: {
					n: 5000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_gpu_accelerated_webviews: {
					n: 5001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_hardware_video_decoding: {
					n: 5003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				run_at_startup: {
					n: 5004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_dpi_scaling: {
					n: 5005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_marketing_messages: {
					n: 5006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				start_in_big_picture_mode: {
					n: 5007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				jumplist_flags: {
					n: 5008,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				enable_ui_sounds: {
					n: 5009,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				disable_all_toasts: {
					n: 6000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				disable_toasts_in_game: {
					n: 6001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				play_sound_on_toast: {
					n: 6002,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				library_display_size: {
					n: 7000,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				library_whats_new_show_only_product_updates: {
					n: 7001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_store_content_on_home: {
					n: 7002,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				start_page: {
					n: 7003,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				library_low_bandwidth_mode: {
					n: 7004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				library_low_perf_mode: {
					n: 7005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				library_disable_community_content: {
					n: 7006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				library_display_icon_in_game_list: {
					n: 7007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				ready_to_play_includes_streaming: {
					n: 7008,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_steam_deck_info: {
					n: 7009,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_shader_precache: {
					n: 8000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				enable_shader_background_processing: {
					n: 8001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				shader_precached_size: {
					n: 8002,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				needs_steam_service_repair: {
					n: 8003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				download_peer_content: {
					n: 8004,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				download_rate_bits_per_s: {
					n: 8005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				restrict_auto_updates: {
					n: 8006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				restrict_auto_updates_start: {
					n: 8007,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				restrict_auto_updates_end: {
					n: 8008,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				download_region: {
					n: 8009,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				download_while_app_running: {
					n: 8010,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				download_throttle_while_streaming: {
					n: 8011,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				download_throttle_rate: {
					n: 8012,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				default_app_update_behavior: {
					n: 8013,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				cloud_enabled: {
					n: 10000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_screenshot_manager: {
					n: 10001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				music_volume: {
					n: 11000,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				music_pause_on_app_start: {
					n: 11001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				music_pause_on_voice_chat: {
					n: 11002,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				music_download_high_quality: {
					n: 11003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				music_playlist_notification: {
					n: 11004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				broadcast_permissions: {
					n: 12000,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				broadcast_output_width: {
					n: 12001,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				broadcast_output_height: {
					n: 12002,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				broadcast_bitrate: {
					n: 12003,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				broadcast_encoding_option: {
					n: 12004,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				broadcast_record_all_video: {
					n: 12005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				broadcast_record_all_audio: {
					n: 12006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				broadcast_record_microphone: {
					n: 12007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				broadcast_show_upload_stats: {
					n: 12008,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				broadcast_show_live_reminder: {
					n: 12009,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				broadcast_chat_corner: {
					n: 12010,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamestream_hardware_video_encode: {
					n: 13000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamestream_enable_video_h265: {
					n: 13001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steam_input_configurator_error_msg_enable: {
					n: 14001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_guide_button_focus_steam: {
					n: 14002,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_ps_support: {
					n: 14003,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				controller_xbox_support: {
					n: 14004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_xbox_driver: {
					n: 14005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_switch_support: {
					n: 14006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_generic_support: {
					n: 14007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_power_off_timeout: {
					n: 14008,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				turn_off_controller_on_exit: {
					n: 14009,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_combine_nintendo_joycons: {
					n: 14010,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_enable_chord: {
					n: 140011,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				controller_poll_rate: {
					n: 140012,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				startup_movie_id: {
					n: 16000,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				startup_movie_local_path: {
					n: 16001,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				startup_movie_shuffle: {
					n: 16002,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				startup_movie_used_for_resume: {
					n: 16003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				game_notes_enable_spellcheck: {
					n: 17001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				screenshot_items_per_row: {
					n: 18000,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				g_background_path: {
					n: 18201,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				g_background_max_keep: {
					n: 18202,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				g_background_time_resolution: {
					n: 18203,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				g_background_mk: {
					n: 18207,
					c: b,
				},
				g_background_tg: {
					n: 18208,
					c: b,
				},
				g_background_a_m: {
					n: 18209,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamerecording_video_bitrate: {
					n: 18210,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				g_background_a_s: {
					n: 18211,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				g_background_mode: {
					n: 18212,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				g_background_audio: {
					n: 18213,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				g_max_fps: {
					n: 18214,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_hotkey_ic: {
					n: 18215,
					c: b,
				},
				gamerecording_ic_seconds: {
					n: 18216,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				gamerecording_export_limit_type: {
					n: 18217,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				gamerecording_export_limit_size_mb: {
					n: 18218,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_export_limit_bitrate: {
					n: 18219,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_export_limit_width: {
					n: 18220,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_export_limit_height: {
					n: 18221,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_export_limit_frame_rate: {
					n: 18222,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_export_directory: {
					n: 18223,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				gamerecording_export_codec: {
					n: 18224,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				gamerecording_video_maxheight: {
					n: 18225,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamerecording_force_mic_mono: {
					n: 18226,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamerecording_automatic_gain_control: {
					n: 18227,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_timestamps_in_console: {
					n: 20000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				force_oobe: {
					n: 20001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				override_browser_composer_mode: {
					n: 20002,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				cef_remote_debugging_enabled: {
					n: 20003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				force_deck_perf_tab: {
					n: 20004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				force_fake_mandatory_update: {
					n: 20005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				hdr_compat_testing: {
					n: 20006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				developer_mode_enabled: {
					n: 20007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				show_advanced_update_channels: {
					n: 20008,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_hdr_visualization: {
					n: 21001,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				gamescope_app_target_framerate: {
					n: 21002,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamescope_enable_app_target_framerate: {
					n: 21003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_disable_framelimit: {
					n: 21004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_display_refresh_rate: {
					n: 21005,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				gamescope_use_game_refresh_rate_in_steam: {
					n: 21006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_disable_mura_correction: {
					n: 21007,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_include_steamui_in_screenshots: {
					n: 21008,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_allow_tearing: {
					n: 21009,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_composite_debug: {
					n: 21010,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_force_composite: {
					n: 21011,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				gamescope_game_resolution_global: {
					n: 21012,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				gamescope_guide_hotkey: {
					n: 21013,
					c: b,
				},
				gamescope_qam_hotkey: {
					n: 21014,
					c: b,
				},
				gamescope_hdr_enabled: {
					n: 21015,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamos_status_led_brightness: {
					n: 22000,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				steamos_tdp_limit_enabled: {
					n: 22001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamos_tdp_limit: {
					n: 22002,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				steamos_cec_enabled: {
					n: 22003,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamos_cec_wake_on_resume: {
					n: 22004,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamos_wifi_debug: {
					n: 22005,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamos_wifi_force_wpa_supplicant: {
					n: 22006,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamos_magnifier_scale: {
					n: 22007,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				setting_validation_bool: {
					n: 23001,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				setting_validation_enum: {
					n: 23002,
					br: _.qM.readEnum,
					bw: _.gp.writeEnum,
				},
				setting_validation_int32: {
					n: 23003,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				setting_validation_uint32: {
					n: 23004,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				setting_validation_uint64: {
					n: 23005,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				setting_validation_float: {
					n: 23006,
					br: _.qM.readFloat,
					bw: _.gp.writeFloat,
				},
				setting_validation_string: {
					n: 23007,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				setting_validation_hotkey: {
					n: 23008,
					c: b,
				},
				system_bluetooth_enabled: {
					n: 24000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				vr_show_perf_graph_in_hmd: {
					n: 25000,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= _.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new C.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new C.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientSettings";
	}
}
const E = "CachedCommunityPreferences";
const M = "CachedStorePreferences";
const T = "CachedBatteryPreferences";
const R = "CachedNotificationPreferences";
export function t0() {
	return q3(() => rV.settings);
}
export function Tr() {
	return q3(() => rV.communityPreferences);
}
export function Hg() {
	return q3(() => rV.notificationPreferences);
}
export function vL() {
	const e = q3(() => rV.BIsConnectedToSteam());
	const t = q3(() => rV.familySettings);
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
class G {
	m_localStorage = new o.A();
	m_CMInterface;
	m_CommunityPreferences = undefined;
	m_StorePreferences = undefined;
	m_FriendSettings = l.u();
	m_Settings = undefined;
	m_strTimeZoneID = SubscribableValue("");
	m_BatteryPreferences = SubscribableValue({
		bShowBatteryPercentage: false,
	});
	m_MonitorInfo = undefined;
	m_bWindowed = false;
	m_ClientSettings = {};
	m_setDeferredSettings = new Set();
	m_NotificationSettings = undefined;
	m_bSteamIsInTournamentMode = false;
	constructor() {
		Gn(this);
		let e = new m.B4();
		this.m_CommunityPreferences = {
			bParenthesizeNicknames: e.parenthesize_nicknames(),
			eTextFilterSetting: e.text_filter_setting(),
			bTextFilterIgnoreFriends: e.text_filter_ignore_friends(),
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
		SteamClient.Settings?.GetWindowed().then((e) => (this.m_bWindowed = e));
		this.m_bSteamIsInTournamentMode = false;
		SteamClient.System.IsSteamInTournamentMode().then(
			(e) => (this.m_bSteamIsInTournamentMode = e),
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
	async Init(e) {
		this.m_CMInterface = e;
		const t = [];
		t.push(
			this.m_localStorage.GetObject(E).then((e) => {
				if (e) {
					this.m_CommunityPreferences = e;
					this.InitDefaultCommunityContentDescriptorPreferences();
				}
			}),
		);
		t.push(
			this.m_localStorage.GetObject(M).then((e) => {
				if (e) {
					this.m_StorePreferences = e;
					this.InitDefaultCommunityContentDescriptorPreferences();
				}
			}),
		);
		t.push(
			this.m_localStorage.GetObject(T).then((e) => {
				if (e) {
					this.m_BatteryPreferences.Set(e);
				}
			}),
		);
		t.push(
			this.m_localStorage.GetObject(R).then((e) => {
				if (e) {
					this.m_NotificationSettings = Object.assign(e);
				}
			}),
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			m.QA.NotifyCommunityPreferencesChangedHandler,
			(e) => {
				this.MergeCommunityPreferences(
					e.Body().preferences(),
					e.Body().content_descriptor_preferences(),
				);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			u.Eb.NotifyStorePreferencesChangedHandler,
			(e) => {
				this.MergeStorePreferences(
					e.Body().preferences(),
					e.Body().content_descriptor_preferences(),
				);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			d.sC.PreferencesUpdatedHandler,
			(e) => {
				this.MergeNotificationPreferences(e.Body().preferences());
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			w.j7.NotifyGroupChangedHandler,
			(e) => {
				const t = B.L;
				t.invalidateQueries({
					queryKey: j$(I.iA.steamid),
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
			w.j7.NotifyInviteStatusHandler,
			(e) => {
				B.L.invalidateQueries({
					queryKey: j$(I.iA.steamid),
				});
				return 1;
			},
		);
		return Promise.all(t)
			.catch()
			.then(() => {
				this.m_CMInterface.AddOnLogonCallback(() => {
					let e = c.w.Init(m.tz);
					m.xt
						.GetCommunityPreferences(
							this.m_CMInterface.GetServiceTransport(),
							e,
						)
						.then((e) => {
							this.MergeCommunityPreferences(
								e.Body().preferences(),
								e.Body().content_descriptor_preferences(),
							);
						});
					let t = c.w.Init(u.xf);
					u.nd
						.GetStorePreferences(this.m_CMInterface.GetServiceTransport(), t)
						.then((e) => {
							this.MergeStorePreferences(
								e.Body().preferences(),
								e.Body().content_descriptor_preferences(),
							);
						});
					let r = c.w.Init(d.aJ);
					d.Fn.GetPreferences(this.m_CMInterface.GetServiceTransport(), r).then(
						(e) => {
							this.MergeNotificationPreferences(e.Body().preferences());
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
	OnPostMessage(e, t, r) {
		if (e == "Settings" && t == "CommunityPreferences") {
			let e = JSON.parse(r);
			this.SetCommunityPreferences(e);
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
	ToggleNotificationPreference(e, t) {
		let r = false;
		for (let n of this.m_NotificationSettings) {
			if (e == n.notification_type) {
				n.notification_targets ^= t;
				if ((n.notification_targets & 1) != 1) {
					n.notification_targets = 0;
				}
				r = true;
				break;
			}
		}
		if (r) {
			this.SendNotificationPreferencesToServer();
		}
	}
	UpdateCommunityPreference(e, t) {
		this.UpdateCommunityPreferences({
			...this.communityPreferences,
			[e]: t,
		});
	}
	UpdateCommunityPreferences(e) {
		this.SetCommunityPreferences(e);
		this.SendCommunityPreferencesToServer();
	}
	CommunityPreferencesToMessage(e) {
		let t = new m.B4();
		t.set_parenthesize_nicknames(e.bParenthesizeNicknames);
		t.set_text_filter_setting(e.eTextFilterSetting);
		t.set_text_filter_ignore_friends(e.bTextFilterIgnoreFriends);
		return t;
	}
	async SendCommunityPreferencesToServer() {
		let e = c.w.Init(m.pr);
		e.Body().set_preferences(
			this.CommunityPreferencesToMessage(this.communityPreferences),
		);
		return m.xt.SetCommunityPreferences(
			this.m_CMInterface.GetServiceTransport(),
			e,
		);
	}
	async SendNotificationPreferencesToServer() {
		let e = [];
		for (const t of this.m_NotificationSettings) {
			let r = new d.Z8();
			r.set_notification_type(t.notification_type);
			r.set_notification_targets(t.notification_targets);
			e.push(r);
		}
		let t = c.w.Init(d.gm);
		t.Body().set_preferences(e);
		return d.Fn.SetPreferences(this.m_CMInterface.GetServiceTransport(), t);
	}
	SetCommunityPreferences(e) {
		this.m_CommunityPreferences = e;
		this.m_localStorage.StoreObject(E, e);
	}
	SetStorePreferences(e) {
		this.m_StorePreferences = e;
		this.m_localStorage.StoreObject(M, e);
	}
	UpdateFriendSetting(e, t) {
		this.UpdateFriendSettings({
			...this.friendSettings,
			[e]: t,
		});
	}
	UpdateFriendSettings(e) {
		this.m_FriendSettings = e;
		SteamClient.FriendSettings.SetFriendSettings(JSON.stringify(e));
	}
	OnClientSettingsChange(e) {
		if (!a.m3.structural(this.m_Settings, e)) {
			this.m_Settings = e;
		}
	}
	OnClientSettingsMsgChange(e) {
		const t = y.deserializeBinary(e).toObject();
		Object.assign(this.m_ClientSettings, t);
	}
	get CurrentTimeZoneID() {
		return this.m_strTimeZoneID;
	}
	OnTimeZoneChange(e) {
		this.m_strTimeZoneID.Set(e);
	}
	GetBatteryPreferences() {
		return this.m_BatteryPreferences;
	}
	SetBatteryPreferences(e) {
		this.m_BatteryPreferences.Set(e);
		this.m_localStorage.StoreObject(T, e);
	}
	OnClientFriendsSettingsChange(e) {
		let t;
		let r = l.u();
		t =
			typeof e != "string"
				? e.FriendsSettings
				: JSON.parse(e, (e, t) =>
						e.substring(0, 1) == "b" && typeof t == "number" ? t != 0 : t,
					);
		Object.assign(r, t);
		this.m_FriendSettings = r;
	}
	get monitorInfo() {
		return this.m_MonitorInfo;
	}
	RefreshMonitorInfo() {
		SteamClient.Settings.GetMonitorInfo().then((e) => {
			this.m_MonitorInfo = h.Z5.deserializeBinary(e).toObject();
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
	SetWindowedMode(e) {
		SteamClient.Settings.SetWindowed(e);
		let t = S.oy.WindowStore.GamepadUIMainWindowInstance?.BrowserWindow;
		if (t) {
			t.SteamClient.Window.ToggleFullScreen(!e);
		}
		this.m_bWindowed = e;
	}
	MergeCommunityPreferences(e, t) {
		let r = {
			...this.m_CommunityPreferences,
		};
		if (e.parenthesize_nicknames() !== undefined) {
			r.bParenthesizeNicknames = e.parenthesize_nicknames();
		}
		if (e.text_filter_setting() !== undefined) {
			r.eTextFilterSetting = e.text_filter_setting();
		}
		if (e.text_filter_ignore_friends !== undefined) {
			r.bTextFilterIgnoreFriends = e.text_filter_ignore_friends();
		}
		r.content_descriptor_preferences.content_descriptors_to_exclude.length = 0;
		for (let e = 0; e < t?.content_descriptors_to_exclude().length; e++) {
			const n = t.content_descriptors_to_exclude()[e];
			r.content_descriptor_preferences.content_descriptors_to_exclude.push({
				content_descriptorid: n.content_descriptorid(),
				timestamp_added: n.timestamp_added(),
			});
		}
		this.SetCommunityPreferences(r);
	}
	MergeStorePreferences(e, t) {
		let r = {
			...this.m_StorePreferences,
		};
		r.eReviewScorePreference = e.review_score_preference();
		r.content_descriptor_preferences.content_descriptors_to_exclude.length = 0;
		for (let e = 0; e < t?.content_descriptors_to_exclude().length; e++) {
			const n = t.content_descriptors_to_exclude()[e];
			r.content_descriptor_preferences.content_descriptors_to_exclude.push({
				content_descriptorid: n.content_descriptorid(),
				timestamp_added: n.timestamp_added(),
			});
		}
		r.provide_deck_feedback = e.provide_deck_feedback();
		this.SetStorePreferences(r);
	}
	MergeNotificationPreferences(e) {
		this.m_NotificationSettings = [];
		for (const t of e) {
			this.m_NotificationSettings.push({
				notification_type: t.notification_type(),
				notification_targets: t.notification_targets(),
			});
		}
		this.m_localStorage.StoreObject(R, this.m_NotificationSettings);
	}
}
Cg([a.sH.shallow], G.prototype, "m_CommunityPreferences", undefined);
Cg([a.sH.shallow], G.prototype, "m_StorePreferences", undefined);
Cg([a.sH.shallow], G.prototype, "m_FriendSettings", undefined);
Cg([a.sH.shallow], G.prototype, "m_Settings", undefined);
Cg([a.sH.shallow], G.prototype, "m_MonitorInfo", undefined);
Cg([a.sH], G.prototype, "m_bWindowed", undefined);
Cg([a.sH], G.prototype, "m_ClientSettings", undefined);
Cg([a.sH], G.prototype, "m_setDeferredSettings", undefined);
Cg([a.sH], G.prototype, "m_NotificationSettings", undefined);
Cg([a.sH], G.prototype, "m_bSteamIsInTournamentMode", undefined);
Cg([A.oI], G.prototype, "OnPostMessage", null);
Cg([a.XI], G.prototype, "UpdateCommunityPreferences", null);
Cg([s_1(250)], G.prototype, "SendCommunityPreferencesToServer", null);
Cg([s_1(250)], G.prototype, "SendNotificationPreferencesToServer", null);
Cg([a.XI], G.prototype, "UpdateFriendSettings", null);
Cg([A.oI], G.prototype, "OnClientSettingsChange", null);
Cg([A.oI], G.prototype, "OnClientSettingsMsgChange", null);
Cg([A.oI], G.prototype, "OnTimeZoneChange", null);
Cg([A.oI], G.prototype, "GetBatteryPreferences", null);
Cg([A.oI], G.prototype, "SetBatteryPreferences", null);
Cg([A.oI], G.prototype, "OnClientFriendsSettingsChange", null);
Cg([A.oI], G.prototype, "RefreshMonitorInfo", null);
Cg([A.oI], G.prototype, "SetPreferredMonitor", null);
Cg([A.oI], G.prototype, "SetWindowedMode", null);
Cg([a.XI], G.prototype, "MergeCommunityPreferences", null);
Cg([a.XI], G.prototype, "MergeStorePreferences", null);
Cg([a.XI], G.prototype, "MergeNotificationPreferences", null);
export const rV = new G();
export function VI(e) {
	return [
		q3(() => rV.clientSettings[e]),
		useCallback((t) => qt(e, t), [e]),
		q3(() => rV.IsDeferred(e)),
		useCallback(() => {
			rV.SetDeferred(e);
		}, [e]),
	];
}
export function hX(e) {
	return [q3(() => rV.clientSettings[e])];
}
export function qt(e, t) {
	const r = new C.BinaryWriter();
	let n = {
		[e]: t,
	};
	y.serializeBinaryToWriter(y.fromObject(n), r);
	const i = r.getResultBase64String();
	return SteamClient.Settings.SetSetting(i);
}
export function e_(e) {
	const t = useCallback((t) => rV.UpdateFriendSetting(e, t), [e]);
	return q3(() => [rV.friendSettings[e], t]);
}
export function I5(e) {
	const t = useCallback((t) => rV.UpdateCommunityPreference(e, t), [e]);
	return q3(() => [rV.communityPreferences[e], t]);
}
export function sE(e, t) {
	return useCallback(() => rV.ToggleNotificationPreference(e, t), [e, t]);
}
window.settingsStore = rV;
