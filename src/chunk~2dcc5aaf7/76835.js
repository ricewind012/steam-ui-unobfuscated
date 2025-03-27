export let il;
let i;
export function hT(e) {
	return e.type === "gamemode";
}
export function Te(e) {
	return e.type === "state_description";
}
export function zG(e) {
	return e.type === "event" && parseInt(e.duration) > 0;
}
export function eJ(e) {
	return e.type === "event";
}
export function xz(e) {
	return e.type === "achievement";
}
export function In(e) {
	return e.type === "error";
}
export function N$(e) {
	return e.type === "usermarker";
}
export function sX(e) {
	return e.type === "screenshot";
}
export function rU(e) {
	let t = {
		id: e.entry_id,
		time: e.time,
		type: undefined,
	};
	switch (e.type) {
		case 1: {
			let r = t;
			r.type = "gamemode";
			r.mode = e.game_mode;
			break;
		}
		case 5: {
			let r = t;
			r.type = "usermarker";
			r.icon = "steam_marker";
			r.priority = e.marker_priority;
			break;
		}
		case 4: {
			let r = t;
			r.type = "achievement";
			r.achievement_name = e.achievement_name;
			break;
		}
		case 7: {
			let r = t;
			r.type = "error";
			r.description = e.marker_description;
			break;
		}
		case 3: {
			let r = t;
			r.type = "state_description";
			r.title = e.timestamp_title;
			break;
		}
		case 2: {
			let r = t;
			r.type = "event";
			r.icon = e.marker_icon;
			r.title = e.range_title;
			r.description = e.marker_description;
			r.priority = e.marker_priority;
			r.duration = e.range_duration;
			r.possible_clip = e.range_possible_clip;
			break;
		}
		case 6: {
			let r = t;
			r.type = "screenshot";
			r.icon = e.marker_icon;
			r.priority = e.marker_priority;
			r.handle = e.screenshot_handle;
			break;
		}
		default: {
			return null;
		}
	}
	return t;
}
((e) => {
	e[(e.Invalid = 0)] = "Invalid";
	e[(e.Playing = 1)] = "Playing";
	e[(e.Staging = 2)] = "Staging";
	e[(e.Menus = 3)] = "Menus";
})((il ||= {}));
((e) => {
	e[(e.Invalid = 0)] = "Invalid";
	e[(e.None = 1)] = "None";
	e[(e.Standard = 2)] = "Standard";
	e[(e.Featured = 3)] = "Featured";
})((i ||= {}));
