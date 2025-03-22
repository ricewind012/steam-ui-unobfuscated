var n = require("./10927.js");
var i = require("./30496.js");
var a = require("./96593.js");
function s(e, t) {
	return t.minutes_playtime_forever - e.minutes_playtime_forever;
}
function o(e, t) {
	return t.rt_last_time_played - e.rt_last_time_played;
}
function l(e, t) {
	return (t.metacritic_score || 0) - (e.metacritic_score || 0);
}
function c(e, t) {
	const r = e.GetCanonicalReleaseDate();
	const n = t.GetCanonicalReleaseDate();
	const i = r == 0 && e.BIsUnreleased();
	const a = n == 0 && t.BIsUnreleased();
	if (i && a) {
		return 0;
	} else if (i && !a) {
		return -1;
	} else if (!i && a) {
		return 1;
	} else {
		return n - r;
	}
}
function m(e, t) {
	if (e.installed && !t.installed) {
		return -1;
	} else if (t.installed && !e.installed) {
		return 1;
	} else {
		return (
			(t.size_on_disk ? Number(t.size_on_disk) : 0) -
			(e.size_on_disk ? Number(e.size_on_disk) : 0)
		);
	}
}
function u(e, t) {
	return (0, i.E1)(t.appid).length - (0, i.E1)(e.appid).length;
}
function d(e, t) {
	let r = n.y.GetAchievementProgress(e.appid);
	if (!n.y.BGameHasAchievements(e.appid)) {
		r = -1;
	}
	let i = n.y.GetAchievementProgress(t.appid);
	if (!n.y.BGameHasAchievements(t.appid)) {
		i = -1;
	}
	return i - r;
}
function A(e, t) {
	if (e.review_score == t.review_score) {
		return t.review_percentage - e.review_percentage;
	} else {
		return t.review_score - e.review_score;
	}
}
function p(e, t) {
	return (t.rt_purchased_time || 0) - (e.rt_purchased_time || 0);
}
export function g(e) {
	let t;
	if (e != 1) {
		switch (e) {
			case 4:
				t = s;
				break;
			case 5:
				t = o;
				break;
			case 9:
				t = l;
				break;
			case 6:
				t = c;
				break;
			case 8:
				t = m;
				break;
			case 10:
				t = u;
				break;
			case 2:
				t = d;
				break;
			case 11:
				t = A;
				break;
			case 7:
				t = p;
		}
	}
	return (e, r) => (t && t(e, r)) || a.tw.CompareSortAs(e, r);
}
