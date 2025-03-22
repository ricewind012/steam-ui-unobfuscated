var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./44846.js");
var s = require(/*webcrack:missing*/ "./28987.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require(/*webcrack:missing*/ "./53807.js");
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require(/*webcrack:missing*/ "./52451.js");
class u {
	m_bUserHasVolumePreference = false;
	m_flVolumePreference = 0;
	BUserHasVolumePreference() {
		return this.m_bUserHasVolumePreference;
	}
	SetVolumePreference(e) {
		this.m_flVolumePreference = e;
		this.m_bUserHasVolumePreference = true;
	}
	GetVolumePreference() {
		return this.m_flVolumePreference;
	}
	BVolumePreferenceMuted() {
		return this.m_flVolumePreference < 0.001;
	}
	static s_Singleton;
	static Get() {
		u.s_Singleton ||= new u();
		return u.s_Singleton;
	}
}
(0, n.Cg)([m.oI], u.prototype, "BUserHasVolumePreference", null);
(0, n.Cg)([m.oI], u.prototype, "SetVolumePreference", null);
export const L = (0, i.forwardRef)(function (e, t) {
	const { video: r, bAutoPlay: n, bControls: a, bLoop: s, bMuted: o } = e;
	const m = (0, i.useMemo)(
		() =>
			Boolean(
				r.rgVideoTracks?.some(
					(e) => e.sKind == "subtitles" || e.sKind == "captions",
				),
			),
		[r.rgVideoTracks],
	);
	const [d, h] = i.useState(false);
	if (!r.rgVideoSources || !r.rgVideoSources.length) {
		return null;
	}
	const C = (function (e) {
		return (
			!!(0, l.ZF)(e.sPoster) &&
			(!e.rgVideoSources ||
				!e.rgVideoSources.some((e) => !(0, l.ZF)(e.sURL))) &&
			(!e.rgVideoTracks || !e.rgVideoTracks.some((e) => !(0, l.ZF)(e.sURL)))
		);
	})(r);
	let _;
	if (!C || (m && c.TS.WEB_UNIVERSE == "public")) {
		_ = "anonymous";
	}
	const f = o || (n && u.Get().BVolumePreferenceMuted());
	const b = r.sPoster ? A(r.sPoster) : "";
	return i.createElement(
		"video",
		{
			width: "100%",
			height: "auto",
			autoPlay: n,
			muted: f,
			playsInline: true,
			controls: a,
			poster: b,
			loop: s,
			crossOrigin: _,
			onVolumeChange: (e) => {
				const t = e.target;
				const r = t.muted ? 0 : t.volume;
				if (d) {
					u.Get().SetVolumePreference(r);
				}
			},
			onPlay: (e) => {
				const t = e.target;
				const r = t.currentTime == 0;
				const i = u.Get().BUserHasVolumePreference();
				h(true);
				if (r) {
					if (i || n) {
						if (i) {
							t.volume = u.Get().GetVolumePreference();
							t.muted = u.Get().BVolumePreferenceMuted();
						}
					} else {
						const e = t.muted ? 0 : t.volume;
						u.Get().SetVolumePreference(e);
					}
				}
			},
			ref: t,
		},
		i.createElement(p, {
			rgVideoSources: r.rgVideoSources,
		}),
		i.createElement(g, {
			rgVideoTracks: r.rgVideoTracks,
		}),
	);
});
function A(e) {
	try {
		const t = new URL(e);
		t.search = (t.search ? t.search + "&" : "?") + "origin=" + (0, c.xv)();
		return t.toString();
	} catch {
		return e;
	}
}
function p(e) {
	const { rgVideoSources: t } = e;
	return t
		.filter((e) => Boolean(e.sURL))
		.map((e) =>
			i.createElement("source", {
				key: e.sURL,
				src: A(e.sURL),
				type: e.sFormat,
			}),
		);
}
function g(e) {
	const { rgVideoTracks: t } = e;
	if (t) {
		return t.map((e, r) =>
			i.createElement(h, {
				key: r,
				track: e,
				rgVideoTracks: t,
			}),
		);
	} else {
		return null;
	}
}
function h(e) {
	const { track: t, rgVideoTracks: r } = e;
	let n = t.eLanguage;
	if ((0, c.Y2)()) {
		if (o.A0.IsELanguageValidInRealm(n, s.TU.k_ESteamRealmChina)) {
			n = o.A0.GetELanguageFallback(n);
		} else {
			if (n !== 6) {
				return null;
			}
			if (r.find((e) => o.A0.GetELanguageFallback(e.eLanguage) === n)) {
				return null;
			}
		}
	} else if (!o.A0.IsELanguageValidInRealm(n, s.TU.k_ESteamRealmGlobal)) {
		return null;
	}
	return i.createElement("track", {
		src: A(t.sURL),
		kind: t.sKind,
		default: t.bDefault,
		srcLang: (0, a.ww)(n),
		label: (0, o.we)("#language_selection_" + (0, a.Lg)(n)),
	});
}
