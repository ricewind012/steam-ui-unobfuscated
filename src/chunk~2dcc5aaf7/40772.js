import {
	CLocalizationManager,
	Localize,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { forwardRef, useMemo } from "./63696.js";
import a, { ww, Lg } from "./44846.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
import { ZF } from "./53807.js";
import c, { xv, Y2 } from "./72476.js";
import m from "./52451.js";
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
Cg([m.oI], u.prototype, "BUserHasVolumePreference", null);
Cg([m.oI], u.prototype, "SetVolumePreference", null);
export const L = forwardRef((props, ref) => {
	const { video, bAutoPlay, bControls, bLoop, bMuted } = props;
	const m = useMemo(
		() =>
			Boolean(
				video.rgVideoTracks?.some(
					(e) => e.sKind == "subtitles" || e.sKind == "captions",
				),
			),
		[video.rgVideoTracks],
	);
	const [d, setD] = i.useState(false);
	if (!video.rgVideoSources || !video.rgVideoSources.length) {
		return null;
	}
	const C = ((e) =>
		!!ZF(e.sPoster) &&
		(!e.rgVideoSources || !e.rgVideoSources.some((e) => !ZF(e.sURL))) &&
		(!e.rgVideoTracks || !e.rgVideoTracks.some((e) => !ZF(e.sURL))))(video);
	let _;
	if (!C || (m && c.TS.WEB_UNIVERSE == "public")) {
		_ = "anonymous";
	}
	const f = bMuted || (bAutoPlay && u.Get().BVolumePreferenceMuted());
	const b = video.sPoster ? A(video.sPoster) : "";
	return (
		<video
			width="100%"
			height="auto"
			autoPlay={bAutoPlay}
			muted={f}
			playsInline
			controls={bControls}
			poster={b}
			loop={bLoop}
			crossOrigin={_}
			onVolumeChange={(e) => {
				const e_target = e.target;
				const r = e_target.muted ? 0 : e_target.volume;
				if (d) {
					u.Get().SetVolumePreference(r);
				}
			}}
			onPlay={(e) => {
				const e_target = e.target;
				const r = e_target.currentTime == 0;
				const i = u.Get().BUserHasVolumePreference();
				setD(true);
				if (r) {
					if (i || bAutoPlay) {
						if (i) {
							e_target.volume = u.Get().GetVolumePreference();
							e_target.muted = u.Get().BVolumePreferenceMuted();
						}
					} else {
						const e = e_target.muted ? 0 : e_target.volume;
						u.Get().SetVolumePreference(e);
					}
				}
			}}
			ref={ref}
		>
			<P rgVideoSources={video.rgVideoSources} />
			<G rgVideoTracks={video.rgVideoTracks} />
		</video>
	);
});
function A(e) {
	try {
		const t = new URL(e);
		t.search = `${t.search ? `${t.search}&` : "?"}origin=${xv()}`;
		return t.toString();
	} catch {
		return e;
	}
}
function P(e) {
	const { rgVideoSources } = e;
	return rgVideoSources
		.filter((e) => Boolean(e.sURL))
		.map((e) => <source key={e.sURL} src={A(e.sURL)} type={e.sFormat} />);
}
function G(e) {
	const { rgVideoTracks } = e;
	if (rgVideoTracks) {
		return rgVideoTracks.map((e, r) => (
			<H key={r} track={e} rgVideoTracks={rgVideoTracks} />
		));
	} else {
		return null;
	}
}
function H(e) {
	const { track, rgVideoTracks } = e;
	let t_eLanguage = track.eLanguage;
	if (Y2()) {
		if (
			CLocalizationManager.IsELanguageValidInRealm(
				t_eLanguage,
				ESteamRealm.k_ESteamRealmChina,
			)
		) {
			t_eLanguage = CLocalizationManager.GetELanguageFallback(t_eLanguage);
		} else {
			if (t_eLanguage !== 6) {
				return null;
			}
			if (
				rgVideoTracks.find(
					(e) =>
						CLocalizationManager.GetELanguageFallback(e.eLanguage) ===
						t_eLanguage,
				)
			) {
				return null;
			}
		}
	} else if (
		!CLocalizationManager.IsELanguageValidInRealm(
			t_eLanguage,
			ESteamRealm.k_ESteamRealmGlobal,
		)
	) {
		return null;
	}
	return (
		<track
			src={A(track.sURL)}
			kind={track.sKind}
			default={track.bDefault}
			srcLang={ww(t_eLanguage)}
			label={(0, Localize)(`#language_selection_${Lg(t_eLanguage)}`)}
		/>
	);
}
