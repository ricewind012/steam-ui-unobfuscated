import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { useCallback } from "./63696.js";
import a from "./52451.js";
import s from "./96593.js";
import o from "./91486.js";
import l, { mK } from "./13869.js";
import c from "./10606.js";
import m from "./64608.js";
import u, { PA } from "./41230.js";
import { q3 } from "./90095.js";
import A from "./35062.js";
import g, { A as A_1 } from "./90765.js";
import C from "./87935.js";
import { aF, AH, jy } from "./5808.js";
import f from "./22639.js";
import b, { Np } from "./32700.js";
import { R7 } from "./11131.js";
import S, { br } from "./18869.js";
import w from "./90985.js";
import B from "./23783.js";
import v, { Qn, rP } from "./72476.js";
import I from "./69164.js";
import E, { $2 } from "./96680.js";
import M from "./88750.js";
import { lX } from "./31084.js";
import R from "./35488.js";
import { Qt } from "./18057.js";
import D from "./93681.js";
const _p = A;
class F extends i.Component {
	TwoDigitDurationString(e) {
		return `0${e}`.slice(-2);
	}
	HoursMinuteSecondsDisplayString(e) {
		let t = e;
		let r = Math.floor(t / 3600);
		t -= r * 3600;
		let n = Math.floor(t / 60);
		t -= n * 60;
		let i = t;
		if (r > 0) {
			return `${r}:${this.TwoDigitDurationString(
				n,
			)}:${this.TwoDigitDurationString(i)}`;
		} else {
			return `${n}:${this.TwoDigitDurationString(i)}`;
		}
	}
	render() {
		return <>{this.HoursMinuteSecondsDisplayString(this.props.seconds)}</>;
	}
}
let G = class extends i.Component {
	render() {
		const e = f.ET.GetSoundtrackDetails(this.props.appid).m_nTotalTrackCount;
		if (e) {
			return <>{Localize("#AppDetails_Soundtrack_TrackCount", e)}</>;
		} else {
			return null;
		}
	}
};
G = Cg([u.PA], G);
let O = class extends i.Component {
	render() {
		return (
			<>
				<F
					seconds={
						f.ET.GetSoundtrackDetails(this.props.appid).m_nTotalDurationSeconds
					}
				/>
			</>
		);
	}
};
O = Cg([u.PA], O);
export let F9 = class extends i.Component {
	render() {
		let e = f.ET.GetSoundtrackDetails(this.props.appid).m_Metadata;
		if (e && e.m_strArtist) {
			return <>{e.m_strArtist}</>;
		} else {
			return null;
		}
	}
};
F9 = Cg([u.PA], F9);
export let P = class extends i.Component {
	render() {
		if (f.ET.GetSoundtrackDetails(this.props.appid).m_nTotalTrackCount) {
			return (
				<>
					<G appid={this.props.appid} />
					{" / "}
					<O appid={this.props.appid} />
				</>
			);
		} else {
			return null;
		}
	}
};
P = Cg([u.PA], P);
export let J2 = class extends i.Component {
	render() {
		const e = s.tw.GetAppOverviewByAppID(this.props.appid);
		if (e) {
			return (
				<>
					<o.z app={e} eAssetType={7} className={this.props.className} />
				</>
			);
		} else {
			return null;
		}
	}
};
J2 = Cg([u.PA], J2);
const X = (e) => {
	const { appid, track, trackNumber, independentTrackNumber } = e;
	const s = R7();
	let o = q3(() => w.l.playbackState);
	let l = false;
	if (
		o?.uSoundtrackAppId == appid &&
		independentTrackNumber - 1 == o?.nActiveTrack
	) {
		l = true;
	}
	return (
		<I.Z
			key={track.displayName + trackNumber}
			onActivate={() => aF(appid, s.ownerWindow, independentTrackNumber)}
		>
			<div
				className={A_1(_p.TrackListing, l && _p.Playing)}
				key={`track${track.displayName}`}
			>
				<div className={_p.TrackNumber}>{trackNumber}.</div>
				<div
					className={_p.TrackName}
					dangerouslySetInnerHTML={{
						__html: track.displayName,
					}}
				/>
				<div className={_p.TrackLength}>
					<F seconds={track.durationSeconds} />
				</div>
			</div>
		</I.Z>
	);
};
let U = class extends i.Component {
	render() {
		let e = f.ET.GetSoundtrackDetails(this.props.appid).m_DiscInfo;
		if (!e || e.size == 0) {
			return null;
		}
		let t = [];
		let r = 1;
		e.forEach((e, n) => {
			let a = [];
			e.trackInfo.forEach((e, t) => {
				a.push(
					<X
						key={e.displayName + t}
						appid={this.props.appid}
						track={e}
						trackNumber={t}
						independentTrackNumber={r}
					/>,
				);
				r++;
			});
			t.push(
				<i.Fragment key={`disc${n}`}>
					<div className={_p.Disc}>
						{Localize("#AppDetails_Soundtrack_DiscNumber", n)}
					</div>
					{a}
				</i.Fragment>,
			);
		});
		return <I.Z className={_p.TrackListContainer}>{t}</I.Z>;
	}
};
U = Cg([u.PA], U);
export const gR = PA((e) => {
	const { overview, details, appid } = e;
	const a = br();
	const l = s.tw.GetAppOverviewByAppID(overview.optional_parent_app_id);
	const c = l ? (
		<div
			className={_p.ParentAppName}
			onClick={() => a.App(overview.optional_parent_app_id)}
		>
			<o.z app={l} eAssetType={4} className={_p.ParentGameIcon} />
			{l.display_name}
		</div>
	) : undefined;
	const m = $2();
	const u = AH(m, overview, "selected");
	const A = Qn();
	const t_installed = overview.installed;
	const f = q3(() => w.l.playbackState);
	function B_1() {
		return (
			<div className={_p.Header}>
				<div className={_p.AlbumArtAndTitle}>
					<J2 className={_p.AlbumArt} appid={overview.appid} />
					<div className={_p.TitleAndArtist}>
						<div className={_p.AlbumName}>{overview.display_name}</div>
						<div className={_p.ArtistName}>
							<F9 appid={overview.appid} />
						</div>
						<div className={_p.StatsAndParent}>
							<div className={_p.ParentGameLinkContainer}>
								<div className={_p.ParentGameLink}>
									{LocalizeReact("#AppDetails_Soundtrack_ParentAppLink")}
								</div>
								{c}
							</div>
							<div className={_p.AlbumStatsContainer}>
								{LocalizeReact("#AppDetails_Soundtrack_TotalLength")}
								<div className={_p.AlbumStats}>
									<P appid={overview.appid} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={A_1(_p.MainPanel, _p.SoundtrackPanel)}>
			<div className={_p.BackgroundContainer}>
				<J2 className={_p.BackgroundBlurArt} appid={overview.appid} />
			</div>
			<div className={_p.SoundtrackContainer}>
				<I.Z className={_p.Content} flow-children="row">
					{A && <B_1 />}
					<div className={_p.Columns}>
						<I.Z className={A_1(_p.LeftColumn, t_installed && _p.WithControls)}>
							{!A && <B_1 />}
							{A && <V appid={overview.appid} currentTrack={f?.nActiveTrack} />}
							<H primaryAction={u} overview={overview} details={details} />
						</I.Z>
						<I.Z
							className={A_1(_p.RightColumn, t_installed && _p.WithControls)}
						>
							<U appid={overview.appid} />
						</I.Z>
					</div>
					{!A && t_installed && (
						<div className={_p.DesktopControls}>
							<B.TF appid={overview.appid} bFloatingControls />
							<V appid={overview.appid} currentTrack={f?.nActiveTrack} />
						</div>
					)}
				</I.Z>
			</div>
		</div>
	);
});
function V(e) {
	const { appid } = e;
	const r = q3(() => f.ET.GetTrackDetails(appid, e.currentTrack));
	const n = r?.displayName;
	const a = q3(() => w.l.playbackState);
	const s = !a || a.uSoundtrackAppId != e.appid;
	const o = A_1(_p.CurrentTrackContainer, s && _p.PlayingOnCurrentAlbum);
	return (
		<div className={o}>
			<R.Music />
			<div className={_p.CurrentTrack}>
				<D.r>
					{" "}
					<span
						dangerouslySetInnerHTML={{
							__html: n,
						}}
					/>{" "}
				</D.r>
			</div>
		</div>
	);
}
function H(e) {
	const { primaryAction, overview, details } = e;
	const r_installed = overview.installed;
	const { ownerWindow } = R7();
	const o = Qn();
	const c = rP();
	const u = !v.TS.IN_GAMESCOPE && !c.IN_VR;
	const A = useCallback(
		(e) => {
			jy(e, overview, "selected", 100, ownerWindow)();
		},
		[overview, ownerWindow],
	);
	const g = [];
	if (primaryAction == "PlayMusic") {
		if (!r_installed) {
			g.push(
				<m.jn
					key="playAlbumAction"
					className={_p.PlayButton}
					onClick={() => aF(overview.appid, ownerWindow)}
				>
					{Localize("#AppDetails_Soundtrack_PlayAlbum")}
				</m.jn>,
			);
		}
		if (!o) {
			g.push(
				<m.$n
					key="viewOnDiskAction"
					className={_p.PlayButton}
					onClick={() => A("BrowseLocalFiles")}
				>
					{Localize("#AppDetails_Soundtrack_ViewOnDisk")}
				</m.$n>,
			);
		}
	} else if (primaryAction) {
		const e =
			primaryAction == "Install"
				? Localize("#AppDetails_Soundtrack_DownloadAlbum")
				: Np(primaryAction);
		g.push(
			<m.jn
				key="action"
				className={_p.PlayButton}
				onClick={() => A(primaryAction)}
			>
				{e}
			</m.jn>,
		);
	}
	const S = q3(
		() =>
			f.ET.GetSoundtrackDetails(overview.appid).m_vecAdditionalImageAssetURLs,
	);
	if (S && S.length > 0 && details) {
		const e = (e) =>
			(async (e, t, r, n, a) => {
				let s;
				let o;
				let c = new Promise((e, t) => {
					s = e;
					o = t;
				});
				try {
					let m = await SteamClient.Apps.GetSoundtrackDetails(e.appid);
					await mK(
						<J
							details={n}
							overview={e}
							soundtrackDetailsObj={m}
							window={a}
							nMaxScreenPercentage={t}
							onImageLoad={s}
							onImageError={o}
						>
							{r}
						</J>,
						a,
						{
							promiseRenderComplete: c,
						},
					);
				} catch (e) {
					console.log(e);
					console.error("ERROR DISPLAYING ARTWORK");
				}
			})(overview, 0.8, null, details, GetOwningWindowForEvent(e));
		g.push(
			<m.$n key="viewAdditionalArtwork" className={_p.PlayButton} onClick={e}>
				{Localize("#AppDetails_Soundtrack_ViewAdditionalArtwork")}
			</m.$n>,
		);
	}
	const w = Qt(`steam://store/${overview.appid}`);
	const E = Qt(C.B7.BuildSteamURL("HelpAppPage", overview.appid));
	const R = i.useCallback(
		(e) => {
			lX(
				<M.tz>
					{u && (
						<M.kt
							key="viewOnDiskAction"
							onSelected={() => A("BrowseLocalFiles")}
						>
							{" "}
							{Localize("#AppDetails_Soundtrack_ViewOnDisk")}{" "}
						</M.kt>
					)}
					<M.kt key="showInStoreAction" onSelected={w}>
						{" "}
						{Localize("#AppDetails_Soundtrack_ViewStorePage")}{" "}
					</M.kt>
					<M.kt key="showSupportAction" onSelected={E}>
						{" "}
						{Localize("#AppDetails_Soundtrack_Support")}{" "}
					</M.kt>
				</M.tz>,
				e,
			);
		},
		[u, A, w, E],
	);
	return (
		<I.Z>
			{o && r_installed && <B.TF appid={overview.appid} />}
			{g}
			<div key="spacerDiv" className={_p.SoundtrackButtonDivider} />
			{r_installed && o && (
				<m.$n onClick={R}> {Localize("#AppDetails_Soundtrack_SeeMore")}</m.$n>
			)}
			{!r_installed && o && (
				<>
					<a key="showInStoreAction" href={`steam://store/${overview.appid}`}>
						<m.$n key="showInStoreAction" className={_p.PlayButton}>
							{Localize("#AppDetails_Soundtrack_ViewStorePage")}
						</m.$n>
					</a>
					<a
						key="showSupportAction"
						href={C.B7.BuildSteamURL("HelpAppPage", overview.appid)}
					>
						<m.$n key="showSupportAction" className={_p.PlayButton}>
							{Localize("#AppDetails_Soundtrack_Support")}
						</m.$n>
					</a>
				</>
			)}
		</I.Z>
	);
}
class J extends i.Component {
	constructor(e) {
		super(e);
		this.state = {
			visibleImageIndex: 0,
		};
	}
	OnCancel() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	OnOK() {
		if (this.props.closeModal) {
			this.props.closeModal();
		}
	}
	OnNextAvailableImage() {
		const e =
			(this.state.visibleImageIndex + 1) %
			this.props.soundtrackDetailsObj.vecAdditionalImageAssetURLs.length;
		this.setState({
			visibleImageIndex: e,
		});
	}
	render() {
		const e =
			this.props.window.screen.availHeight *
			(this.props.nMaxScreenPercentage ? this.props.nMaxScreenPercentage : 0.8);
		const t =
			this.props.window.screen.availWidth *
			(this.props.nMaxScreenPercentage ? this.props.nMaxScreenPercentage : 0.8);
		let r = `${C.B7.GetCommunityImageURL()}images/apps/${
			this.props.overview.appid
		}/${
			this.props.soundtrackDetailsObj.vecAdditionalImageAssetURLs[
				this.state.visibleImageIndex
			]
		}.jpg`;
		return (
			<c.x_ onEscKeypress={this.OnCancel} className={_p.AlbumArtworkModal}>
				<div className={_p.ModalBox}>
					<div className={_p.ArtworkModalContainer}>
						<div className={_p.ArtworkContainer}>
							<img
								className={_p.ArtworkImage}
								style={{
									maxWidth: t,
									maxHeight: e,
								}}
								src={r}
								onLoad={this.props.onImageLoad}
								onError={this.props.onImageError}
								onClick={this.OnNextAvailableImage}
							/>
						</div>
						<div className={_p.ArtworkModalDetails}>
							<div className={_p.Header}>
								<m.jn className={_p.ModalArtCloseButton} onClick={this.OnOK}>
									{Localize("#Generic_Close")}
								</m.jn>
							</div>
							<div className={_p.ChildrenContainer}>{this.props.children}</div>
						</div>
					</div>
				</div>
			</c.x_>
		);
	}
}
Cg([a.oI], J.prototype, "OnCancel", null);
Cg([a.oI], J.prototype, "OnOK", null);
Cg([a.oI], J.prototype, "OnNextAvailableImage", null);
