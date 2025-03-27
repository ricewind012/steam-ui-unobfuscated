import { Localize } from "../../actual_src/utils/localization.js";
import { Timestamp } from "../../actual_src/utils/time.js";
import n from "./63696.js";
import i from "./64608.js";
import a, { q3 } from "./90095.js";
import s from "./90985.js";
import o from "./84241.js";
import c from "./15521.js";
import m from "./35488.js";
import u, { A as A_1 } from "./90765.js";
import d, { lX } from "./31084.js";
import A from "./88750.js";
import { aF } from "./5808.js";
import { R7 } from "./11131.js";
import "./98995.js";
import h from "./22639.js";
import C, { Co } from "./96593.js";
import _, { br } from "./18869.js";
import f from "./69164.js";
import b from "./93681.js";
import y, { k1 } from "./13688.js";
import S from "./61175.js";
import w from "./4690.js";
import { uN } from "./52451.js";
import { Qn } from "./72476.js";
import M from "./91486.js";
const l = o;
export function TF(e) {
	const t = q3(() => s.l.playbackState);
	const { ownerWindow } = R7();
	const [o, d] = uN(t?.nVolume, (e) => SteamClient.Music.SetVolume(e));
	const A = !t || t.uSoundtrackAppId != e.appid;
	const h =
		t?.ePlaybackStatus == c.f.AudioPlayback_Idle ||
		t?.ePlaybackStatus == c.f.AudioPlayback_Paused ||
		t?.ePlaybackStatus == c.f.AudioPlayback_Paused ||
		A;
	const C = Qn();
	let _;
	let b;
	let y = 2;
	switch (t?.eRepeatStatus) {
		default:
		case 0: {
			_ = <m.Repeat />;
			y = 1;
			b = false;
			break;
		}
		case 1: {
			_ = <m.Repeat />;
			y = 2;
			b = true;
			break;
		}
		case 2: {
			_ = <m.RepeatOne />;
			y = 0;
			b = true;
		}
	}
	const e_bFloatingControls = e.bFloatingControls;
	const B = {
		onClick: () => SteamClient.Music.ToggleMuteVolume(),
	};
	return (
		<div
			className={A_1(
				l.ControlBlock,
				A && l.NotPlaying,
				e_bFloatingControls && l.FloatingLayout,
			)}
		>
			<K playbackState={t} disabled={A} />
			<div className={A_1(l.ControlsAndVolume, e_bFloatingControls && l.Row)}>
				<f.Z
					className={l.Controls}
					navEntryPreferPosition={w.iU.PREFERRED_CHILD}
				>
					<R
						focusable={!A}
						disabled={A}
						active={t?.bShuffle}
						onClick={() => SteamClient.Music.SetPlayingShuffled(!t?.bShuffle)}
					>
						<m.Shuffle />
					</R>
					<R
						focusable={!A}
						disabled={A}
						active
						onClick={() => SteamClient.Music.PlayPrevious()}
					>
						<m.PrevTrack />
					</R>
					<R
						active
						preferredFocus
						size="large"
						onClick={() => {
							if (A) {
								aF(e.appid, ownerWindow);
							} else {
								SteamClient.Music.TogglePlayPause();
							}
						}}
					>
						{h && <m.Play />}
						{!h && <m.Pause />}
					</R>
					<R
						focusable={!A}
						disabled={A}
						active
						onClick={() => SteamClient.Music.PlayNext()}
					>
						<m.NextTrack />
					</R>
					<R
						focusable={!A}
						disabled={A}
						active={b}
						onClick={() => SteamClient.Music.SetPlayingRepeatStatus(y)}
					>
						{_}
					</R>
				</f.Z>
				<i.d3
					className={l.VolumeControl}
					icon={
						t?.nVolume == 0 ? <m.VolumeMuted {...B} /> : <m.Volume {...B} />
					}
					disabled={A}
					value={o}
					showHandle={C}
					bottomSeparator="none"
					min={0}
					max={100}
					step={2}
					onChange={d}
				/>
			</div>
		</div>
	);
}
function R(e) {
	const { size = "standard", onClick, className, active, ...o } = e;
	return (
		<i.$n
			onClick={(t) => {
				t.stopPropagation();
				e.onClick?.(t);
			}}
			{...o}
			className={A_1(
				l.IconButton,
				active && l.Active,
				size == "large" && l.Large,
				className,
			)}
		>
			{e.children}
		</i.$n>
	);
}
function K(e) {
	const { playbackState, disabled } = e;
	const [a, setA] = n.useState();
	const o = Qn();
	n.useEffect(
		() => SteamClient.Music.RegisterForMusicPlaybackPosition(setA).unregister,
		[],
	);
	let c = 0;
	let m = 100;
	let u = "";
	if (!disabled) {
		u = Timestamp(a);
		c = a;
		m = playbackState.nLengthInMsec;
	}
	return (
		<f.Z className={l.Progress}>
			<div className={l.Text}>{u}</div>
			<i.A0
				disabled={e.disabled}
				value={c}
				showHandle={o}
				min={0}
				max={m}
				step={1000}
				onChangeComplete={(e) => {
					t = e;
					SteamClient.Music.SetPlaybackPosition(Math.round(t));
					return;
					var t;
				}}
			/>
		</f.Z>
	);
}
export function tx() {
	const e = q3(() => s.l.playbackState);
	return {
		bShouldShowIcon: !!e,
		onShowControls: (e) => {
			lX(<F />, e, {
				bPreferPopTop: false,
				bDisablePopTop: false,
				bForcePopup: true,
			});
		},
		playbackState: e,
	};
}
export function Pw(e) {
	const { appid } = e;
	const r = br();
	const s = Co(appid);
	const o = s?.display_name;
	const c = q3(() => h.ET.GetTrackDetails(appid, e.currentTrack));
	const m = c?.displayName;
	return (
		<i.cK
			className={l.CurrentTrack}
			onClick={() => {
				r.App(appid);
			}}
		>
			<div className={l.CurrentTrackContainer}>
				<div className={l.Art}>
					<M.z app={s} eAssetType={7} />
				</div>
				<div className={l.Details}>
					<div className={l.SoundtrackName}>
						<b.r>{o}</b.r>
					</div>
					<div className={l.TrackName}>
						<b.r>{m}</b.r>
					</div>
				</div>
			</div>
		</i.cK>
	);
}
function F(e) {
	const t = q3(() => s.l.playbackState);
	if (t && t.uSoundtrackAppId) {
		return (
			<A.tz>
				<div className={l.ContextMenu}>
					<TF appid={t.uSoundtrackAppId} />
					<Pw appid={t.uSoundtrackAppId} currentTrack={t.nActiveTrack} />
				</div>
			</A.tz>
		);
	} else {
		return null;
	}
}
export function SK() {
	const e = q3(() => s.l.playbackState);
	const t = k1();
	return (
		<f.Z className={l.QuickAccess}>
			{e?.uSoundtrackAppId && (
				<>
					<Pw appid={e.uSoundtrackAppId} currentTrack={e.nActiveTrack} />
					<TF appid={e.uSoundtrackAppId} />
				</>
			)}
			<i.$n
				onClick={() => {
					S.n6.SelectGamepadCollectionsAppFilterOption(0, 8192, true);
					t.LibraryTab("Soundtracks");
				}}
			>
				{(0, Localize)("#SoundtrackControls_Browse")}
			</i.$n>
		</f.Z>
	);
}
