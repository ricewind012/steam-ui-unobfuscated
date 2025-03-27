import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";

import {
	Localize,
	Hq,
	LocalizeReact,
	LocalizePlural,
	LocalizeCalendarTime,
	LocalizeRtime32ToShortDate,
} from "../../actual_src/utils/localization.js";

import n, { Cg } from "./34629.js";
import i from "./60712.js";
import s from "./91486.js";
import o from "./15489.js";
import l, { br } from "./18869.js";
import c from "./93681.js";
import m from "./22091.js";
import u from "./10927.js";
import d from "./96000.js";
import A from "./52958.js";
import p, { bV } from "./48289.js";
import g, { VI } from "./34792.js";
import h from "./91745.js";
import C from "./46422.js";
import _, { Gn } from "./89193.js";
import f, { PA } from "./41230.js";
import b, { q3 } from "./90095.js";
import y from "./63696.js";
import { lX } from "./31084.js";
import w from "./69164.js";
import B, { er } from "./56655.js";
import v from "./46217.js";
import I from "./35488.js";
import E from "./50376.js";
import M from "./98995.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { A as A_1 } from "./90765.js";
import N, { dm } from "./34428.js";
import F, { l as l_1 } from "./80254.js";
import G, { vJ } from "./52451.js";
import O, { Qn } from "./72476.js";
import { $2 } from "./96680.js";
import L, { zq, AH, Kw, WB, Co, jy } from "./5808.js";
import z, { tx, zX } from "./28346.js";
import x from "./39287.js";
import W from "./56262.js";
import V from "./96593.js";
import H from "./27337.js";
import j from "./58254.js";
import q from "./97893.js";
import Q from "./57016.js";
import Z, { T as T_1 } from "./78057.js";
import Y from "./87935.js";
import K from "./5640.js";
import X from "./46424.js";
import J, { Bb } from "./32700.js";
import $, { ZC } from "./39147.js";
import ee from "./37567.js";
import re from "./96821.js";
import ie from "./36229.js";
import { j4 } from "./90076.js";
import Ae from "./42805.js";
import pe from "./36464.js";
import { IU } from "./89748.js";
const a = i;
const U = x;
const te = ee;
const ne = re;
function Se(e) {
	const { enabled, duration, className, ...i } = e;
	const a = {
		transitionDuration: `${duration / 1000}s`,
	};
	const SRef = y.useRef(null);
	return (
		<j.A
			nodeRef={SRef}
			in={enabled}
			appear
			unmountOnExit
			classNames={{
				enter: te.FadeInEnter,
				enterActive: te.FadeInEnterActive,
			}}
			timeout={duration}
			style={a}
		>
			<div ref={SRef} className={te.FadeIn}>
				{e.children}
			</div>
		</j.A>
	);
}
function oe(e) {
	return `${Y.B7.GetBaseURLSharedCDN()}store_item_assets/${e}`;
}
function Le(e) {
	const { appid, appOverview } = e;
	const [n] = g.rV.GetClientSetting("library_low_bandwidth_mode");
	const [i] = g.rV.GetClientSetting("library_low_perf_mode");
	const a = n || i;
	const { data } = j4(
		appOverview.BIsShortcut() || {
			appid: appid,
		},
	);
	const l = y.useMemo(() => {
		if (!data) {
			return [];
		}
		let e = data.all_ages_screenshots || [];
		if (a && e.length) {
			e = [e[Math.floor(Math.random() * e.length)]];
		}
		return e.map(
			({ filename }) =>
				`${filename.substring(0, filename.indexOf("."))}.600x338.jpg`,
		);
	}, [data, a]);
	const [c, setC] = y.useState(() => (l?.length ? 0 : undefined));
	let u;
	let d;
	let A;
	y.useEffect(() => {
		if (!l || !l.length) {
			setC(undefined);
			return;
		}
		const e = c === undefined ? 0 : (c + 1) % l.length;
		new Image().src = oe(l[e]);
		const t = window.setTimeout(() => setC(e), 1000);
		return () => window.clearTimeout(t);
	}, [l, c]);
	let p = {};
	const HRef = y.useRef(null);
	if (c !== undefined && l && c < l.length) {
		const l_c = l[c];
		d = l_c;
		p.backgroundImage = `url(${oe(l_c)})`;
		u = <div className={te.ScreenshotImg} ref={HRef} />;
	} else {
		d = String(appid);
		A = te.NoScreenshotFallback;
		u = (
			<div className={te.NoScreenshotFallbackWrapper} ref={HRef}>
				<s.z
					app={appOverview}
					eAssetType={3}
					className={te.NoScreenshotFallbackAsset}
				/>
			</div>
		);
	}
	return (
		<div className={te.ScreenshotCrossfade}>
			<Se duration={250} className={te.CrossfadeImage} enabled>
				<H.H
					childRef={HRef}
					keyExtractor={() => d}
					duration={250}
					style={p}
					className={A_1(te.CrossfadeImage, A)}
				>
					{u}
				</H.H>
			</Se>
		</div>
	);
}
const Ce_1 = PA((e) => {
	const { appOverview, appid, displayStatus } = e;
	let i = appOverview && Q.IB.GetAppImportantUpdate(appid);
	if (i) {
		const e = Date.now() / 1000 - i.date;
		const t = (0, Localize)(
			"#AppPortraitHover_DaysSinceLastUpdate",
			(0, Hq)(e),
		);
		return (
			<div className={A_1(te.AppStatus, te.GameUpdatedContainer)}>
				<div className={te.GameUpdatedCircle} />
				<div className={A_1(te.ImportantUpdate)}> {t} </div>
			</div>
		);
	}
	{
		let e = "";
		if (
			(appOverview && appOverview.BIsAppBlocked()) ||
			(!appOverview && appid && K.jR.BIsAppBlocked(appid))
		) {
			e = (0, Localize)("#DisplayStatus_ParentalBlocked");
		} else {
			switch (displayStatus) {
				case 1:
				case 2:
				case 3:
				case 5:
				case 6:
				case 7:
				case 22:
				case 18:
				case 25:
				case 21:
				case 12:
				case 17:
				case 37:
				case 26: {
					e = Bb(displayStatus, true);
					break;
				}
				case 10:
				case 13:
				case 16: {
					e = <W.RR app={appOverview} bCompact />;
				}
			}
		}
		e ||= <Ue appOverview={appOverview} />;
		return <div className={te.AppStatus}>{e}</div>;
	}
});
function Me(e) {
	const { steamid } = e;
	const r = new ie.b2(steamid).GetAccountID();
	return (
		bV(r) +
		(q3(() => p.O$.GetFriendState(r).is_display_name_nickname) ? "*" : "")
	);
}
function Ue(e) {
	const { appOverview } = e;
	const [r] = VI("show_copy_count_in_library");
	const n = p.O$.currentUserSteamID;
	const t_appid = appOverview.appid;
	const a = vJ(
		() => SteamClient.FamilySharing.GetAvailableLenders(t_appid),
		[t_appid],
	);
	const s = a?.filter((e) => e.steamid != n.ConvertTo64BitString());
	const o = T_1(t_appid);
	if (!a?.length || !o) {
		return null;
	}
	let l;
	const c = !appOverview.owner_account_id;
	const m = o.bHasDifferentCopies && s.length > 1;
	if (o.bHasDifferentCopies) {
		if (c && m) {
			l = (0, Localize)("#FamilyGames_FromTheLibraryOf_Header_Owned");
		} else if (c && !m) {
			l = LocalizeReact(
				"#FamilyGames_FromTheLibraryOf_Single_Owned",
				<Me steamid={s[0].steamid} />,
			);
		} else if (c || m) {
			if (!c && m) {
				l = (0, Localize)("#FamilyGames_FromTheLibraryOf_Header");
			}
		} else {
			l = LocalizeReact(
				"#FamilyGames_FromTheLibraryOf_Single",
				<Me steamid={s[0].steamid} />,
			);
		}
	} else if (!c || (r && appOverview.number_of_copies > 1)) {
		l = LocalizePlural(
			"#FamilyGroup_GameAvailable",
			appOverview.number_of_copies,
		);
	}
	return (
		<div className={te.Owners}>
			{l}
			{m && (
				<ul className={te.OwnerList}>
					{s.map((e) => (
						<li key={e.steamid} className={te.Owner}>
							<Me steamid={e.steamid} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
let De_1 = class extends y.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	m_bManageMenuVisible = false;
	OnClick(e) {
		this.m_bManageMenuVisible &&= false;
		e.stopPropagation();
	}
	GetDownloadStatusTitle() {
		if (this.props.displayStatus == 7) {
			return (0, Localize)("#AppPortraitHover_DownloadStatusTitle");
		} else if (this.props.displayStatus == 6) {
			return (0, Localize)("#AppPortraitHover_DownloadStatusTitle_Update");
		} else {
			return "";
		}
	}
	GetDownloadStatusDetails() {
		const e = q.hj.DownloadOverview;
		if (e.update_appid == this.props.appid) {
			switch (e.update_state) {
				case "Starting":
				case "Validating":
				case "Preallocating":
				case "Unpacking":
				case "Patching":
				case "Installing":
				case "Verifying":
				case "Finalizing":
				case "Stopping": {
					return (0, Localize)(`#Downloads_State_${e.update_state}`);
				}
				case "Downloading":
				case "Updating":
				case "Transferring":
				case "Preloading": {
					let t = q.hj.downloadTimeRemaining;
					if (t == "") {
						return (0, Localize)("#Downloads_State_Calculating");
					} else {
						return `@ ${ZC(e.update_network_bytes_per_second)} | ${t}`;
					}
				}
				case "None": {
					return (0, Localize)("#Downloads_State_Calculating");
				}
			}
		}
		return "";
	}
	get downloadStatusVisible() {
		return (
			!!this.props.appOverview &&
			(this.props.displayStatus == 7 || this.props.displayStatus == 6)
		);
	}
	render() {
		let e =
			this.props.appOverview &&
			V.tw.GetVerticalCapsuleURLForApp(this.props.appOverview) &&
			this.props.bHasVerticalCapsule !== false;
		let t = E1(this.props.appid).length;
		let r = t > 0;
		const n = this.props.appOverview && this.props.appOverview.app_type == 8192;
		const i = this.props.appOverview && !n;
		const a = this.props.appOverview && !n;
		const o =
			i &&
			l_1(
				this.props.appOverview.minutes_playtime_last_two_weeks,
				"#AppBox_RecentPlayTime_",
			);
		const l =
			i &&
			l_1(
				this.props.appOverview.minutes_playtime_forever,
				"#AppBox_TotalPlayTime_",
			);
		return (
			<div
				className={te.AppPortraitHover}
				onClick={this.OnClick}
				onContextMenu={this.OnClick}
			>
				<div className={te.CapsuleBackgroundContainer}>
					{this.props.appOverview && (
						<s.z
							app={this.props.appOverview}
							eAssetType={e ? 0 : 3}
							className={te.CapsuleBackground}
						/>
					)}
				</div>
				<div className={A_1(te.Content, r && te.FriendsPlaying)}>
					<div className={te.AppTitleContainer}>
						<div className={te.AppTitle} key="title">
							{this.props.displayName}
						</div>
					</div>
					{(r || h.hG.GetToggle(1)) && (
						<div className={te.FriendsContainer}>
							<div className={te.FriendsHeader}>
								<div className={te.FriendsCircle} />
								<div className={te.FriendsLabel}>
									{LocalizePlural("#AppPortraitHover_FriendsPlaying", t)}
								</div>
							</div>
							<div>
								<HF
									appid={this.props.appid}
									bPortraitHover
									nFriendsToShow={5}
								/>
							</div>
						</div>
					)}
					{a && (
						<Le appid={this.props.appid} appOverview={this.props.appOverview} />
					)}
					<Ce_1
						appid={this.props.appid}
						appOverview={this.props.appOverview}
						displayStatus={this.props.displayStatus}
					/>
					{this.downloadStatusVisible && (
						<div className={te.DownloadStatus}>
							<div className={te.DownloadContainer}>
								<div className={te.DownloadStatusTitle}>
									{this.GetDownloadStatusTitle()}
								</div>
								<W.Mm
									className={ne.PortraitBar}
									progressPct={this.props.appOverview.status_percentage}
									style={{
										width: "100%",
									}}
								/>
								<div className={te.DownloadStatusDetails}>
									{" "}
									{this.GetDownloadStatusDetails()}
								</div>
							</div>
						</div>
					)}
					{!this.downloadStatusVisible &&
						!!o &&
						!!l &&
						!this.props.fnRenderBlurb && (
							<div className={te.GameStatus}>
								<div className={te.PlaytimeDetails}>
									<div className={A_1(te.Header)}>
										{(0, Localize)("#AppBox_PlayTimeHeader")}
									</div>
									<div className={A_1(te.PlayedRecent)}>{o}</div>
									<div className={A_1(te.PlayedTotal)}>{l}</div>
								</div>
							</div>
						)}
					{n && (
						<div className={te.GameStatus}>
							<div className={te.PlaytimeDetails}>
								<X.p appid={this.props.appid} />
							</div>
						</div>
					)}
					{this.props.fnRenderBlurb && this.props.fnRenderBlurb()}
				</div>
			</div>
		);
	}
};
Cg([_.sH], De_1.prototype, "m_bManageMenuVisible", undefined);
Cg([G.oI], De_1.prototype, "OnClick", null);
De_1 = Cg([f.PA], De_1);
let Ge_1 = class extends y.Component {
	render() {
		const {
			className,
			rgFriends,
			nMaxIcons,
			bFeatured,
			bPortraitHover,
			avatarSize,
			bHideStatus,
			...o
		} = this.props;
		let l = [];
		const c = rgFriends.length <= nMaxIcons ? rgFriends.length : nMaxIcons - 1;
		const m = Math.max(0, rgFriends.length - c);
		for (let e = 0; e < c; ++e) {
			const r = rgFriends[e] && rgFriends[e].persona;
			const n = r ? r.m_steamid.GetAccountID() : `index ${e}`;
			l.push(
				<pe.fH
					key={n}
					friend={rgFriends[e]}
					size={avatarSize}
					statusPosition={bHideStatus ? "none" : "bottom"}
				/>,
			);
		}
		if (m > 0) {
			const t = A_1(
				U.IconsRestCount,
				className,
				bFeatured && U.Featured,
				bPortraitHover && U.PortraitHover,
				m > 9 && U.TwoDigits,
			);
			l.push(
				<div className={t} key="rest count ">
					+{m}
				</div>,
			);
		}
		return (
			<div
				{...o}
				className={A_1(
					U.FriendsBar,
					U.IconsView,
					className,
					bFeatured && U.Featured,
					bPortraitHover && U.PortraitHover,
				)}
			>
				{l}
			</div>
		);
	}
};
Ge_1 = Cg([f.PA], Ge_1);
let He = class extends y.Component {
	render() {
		const { className, nFriends, ...r } = this.props;
		return (
			<div {...r} className={A_1(U.FriendsBar, U.SummaryView, className)}>
				<div className={U.SummaryLeader} />
				<div className={U.SummaryCount}>{nFriends}</div>
			</div>
		);
	}
};
He = Cg([f.PA], He);
const _e = PA((e) => {
	const t = E1(e.appid).length;
	return t > 0 && <He nFriends={t} />;
});
export let HF = class extends y.Component {
	render() {
		const {
			bFeatured,
			rgFriends,
			bPortraitHover,
			bShortLayout,
			nFriendsToShow,
			appid,
			context,
		} = this.props;
		let o = [...(rgFriends || E1(appid))];
		if (h.hG.GetToggle(1)) {
			while (o.length < 30) {
				const e = p.O$.allFriends[o.length % p.O$.allFriends.length];
				if (!e) {
					break;
				}
				o.push(e);
			}
		}
		if (o.length == 0) {
			return null;
		}
		let l = nFriendsToShow;
		l ||= bShortLayout ? (bFeatured ? 3 : 2) : 4;
		return (
			<Ge_1
				className={A_1(
					bShortLayout && U.Short,
					context == 4 && U.InFriendsActivity,
				)}
				rgFriends={o}
				bHideStatus={context == 4}
				nMaxIcons={l}
				bFeatured={bFeatured}
				bPortraitHover={bPortraitHover}
				avatarSize={bShortLayout ? "X-Small" : "Small"}
			/>
		);
	}
};
export function E1(e) {
	return p.O$.GetFriendsInGame(e);
}
function Ye(e) {
	let t = e.app.display_status == 13;
	const r = l_1(
		e.app.minutes_playtime_last_two_weeks,
		"#AppBox_RecentPlayTime_",
	);
	const n = l_1(e.app.minutes_playtime_forever, "#AppBox_TotalPlayTime_");
	return (
		<div
			className={A_1(
				U.PlaytimeDetails,
				e.bShortLayout && U.Short,
				t && U.NotReleased,
			)}
		>
			{t ? (
				<div
					className={A_1(
						U.PlaytimeDetails,
						U.Header,
						e.bShortLayout && U.Short,
					)}
				>
					<W.RR app={e.app} />
				</div>
			) : (
				<>
					<div
						className={A_1(
							U.PlaytimeDetails,
							U.Header,
							e.bShortLayout && U.Short,
						)}
					>
						{(0, Localize)("#AppBox_PlayTimeHeader")}
					</div>
					<div
						className={A_1(
							U.PlaytimeDetails,
							U.PlayedRecent,
							e.bShortLayout && U.Short,
						)}
					>
						{r}
					</div>
					<div
						className={A_1(
							U.PlaytimeDetails,
							U.PlayedTotal,
							e.bShortLayout && U.Short,
						)}
					>
						{n}
					</div>
				</>
			)}
		</div>
	);
}
export function EL(e) {
	return (
		<div className={A_1(U.PortraitMessage, e.bShortLayout && U.Short)}>
			<c.r
				className={A_1(U.PortraitMessage, U.Message, e.bShortLayout && U.Short)}
			>
				{e.message}
			</c.r>
			{e.subMessage && (
				<div
					className={A_1(
						U.PortraitMessage,
						U.SubMessage,
						e.bShortLayout && U.Short,
					)}
				>
					{e.subMessage}
				</div>
			)}
		</div>
	);
}
function we(e) {
	switch (e.display_status) {
		case 3:
		case 9:
		case 7:
		case 13: {
			return true;
		}
	}
	return false;
}
function Be(e) {
	const { feature } = e;
	const r = tx(feature);
	let RSvg = r.svg;
	return (
		<div className={U.ControllerSupportIcon}>
			{r.sIconURL && !RSvg && (
				<img className={U.Icon} src={r.sIconURL} alt={r.sDisplayName} />
			)}
			{RSvg && <RSvg className={U.Icon} />}
		</div>
	);
}
function Ve(e) {
	const { overview } = e;
	const r = Qn();
	const n = !er() && r && !overview.BIsMusicAlbum();
	const i = m.Fd.Get().GetControllers();
	const a = i.length > 0 ? i[0] : 32;
	const s = q3(() => C.oy.MostRecentlyActiveController?.eControllerType ?? a);
	if (!n) {
		return null;
	}
	if (s == 34) {
		if (zX(overview, 17)) {
			return <Be feature={17} />;
		}
		if (zX(overview, 16)) {
			return <Be feature={16} />;
		}
	} else if (s == 45 || s == 48) {
		if (zX(overview, 19)) {
			return <Be feature={19} />;
		}
		if (zX(overview, 18)) {
			return <Be feature={18} />;
		}
	}
	if (zX(overview, 1)) {
		return <Be feature={1} />;
	} else if (zX(overview, 2)) {
		return <Be feature={2} />;
	} else if (zX(overview, 3)) {
		return <Be feature={3} />;
	} else {
		return (
			<div className={U.ControllerSupportIcon}>
				<E._2Q className={U.Icon} />
			</div>
		);
	}
}
HF = Cg([f.PA], HF);
export const TK = PA((e) => {
	const {
		bShortLayout,
		bShowFriendsAsIcons,
		app,
		strCollectionId,
		bFeatured,
		bShowAsHovered,
		sortByType,
		context,
		nWidth,
		bHideFooter,
		bHideBanners,
		bHidePortrait,
		bHideCopyCount,
		strMessage,
		strSubMessage,
		onClick,
		children,
		...E
	} = e;
	const M = Qn();
	const T = er();
	const KRef = y.useRef(undefined);
	const NRef = y.useRef(undefined);
	const F = $2();
	const [G] = VI("library_low_perf_mode");
	const [z] = VI("show_copy_count_in_library");
	const x = z && !bHideCopyCount;
	const W = IU();
	const V = br();
	const H = onClick
		? (e) => onClick(e)
		: (e) => {
				V.App(app.appid, {
					strCollectionId: strCollectionId,
				});
				e.stopPropagation();
			};
	const j = y.useCallback(
		(e) => {
			if (context == 6) {
				return;
			}
			const t = KRef.current
				? KRef.current.GetAssetImage()
				: NRef.current.GetAssetImage();
			lX(
				<L.uU
					overview={app}
					client="mostavailable"
					launchSource={1000}
					bInGamepadUI={M}
					hasCustomArtwork={t && t.is_custom_image}
					onChangeArtwork={t && t.OnChangeArtwork}
					strCollectionId={strCollectionId}
					ownerWindow={F?.BrowserWindow}
				/>,
				e,
				zq(),
			);
		},
		[app, context, strCollectionId, M, F],
	);
	const q = y.useCallback(
		() => (
			<De_1
				appid={app.appid}
				displayName={app.display_name}
				displayStatus={app.display_status}
				bHasVerticalCapsule={KRef.current?.BHasVerticalCapsule()}
				appOverview={app}
			/>
		),
		[app],
	);
	if (bHidePortrait) {
		return null;
	}
	const Q =
		sortByType == null ||
		sortByType == 10 ||
		sortByType == 10 ||
		sortByType == 1;
	const Z = bFeatured ? U.Landscape : U.Portrait;
	let Y;
	let K = app.app_type == 8192;
	let X = strCollectionId == d.A8.AppType_Soundtracks;
	switch (context) {
		case 1: {
			Y = U.InCollection;
			break;
		}
		case 2: {
			Y = U.InRecentGames;
			break;
		}
		case 3: {
			Y = U.InGameDetails;
			break;
		}
		case 4: {
			Y = U.InFriendsActivity;
			break;
		}
		case 5: {
			Y = U.InPlayNext;
			break;
		}
		case 6: {
			Y = U.InDownloads;
			break;
		}
		case 7: {
			Y = U.InLibraryManager;
		}
	}
	const J = A._.GetDragData("apps") && A._.GetDragData("apps").length > 0;
	const $ = A_1(
		U.LibraryItemBox,
		Z,
		Y,
		we(app) ? U.NotInstalled : null,
		bFeatured ? U.FeaturedCapsule : null,
		M && U.BasicMode,
		X && U.SoundtrackCollection,
		bShowAsHovered && U.ShowAsHovered,
	);
	const ee = A_1(
		U.Draggable,
		bShortLayout && U.Short,
		!J && U.HoversEnabled,
		K && U.Soundtrack,
		((e, t) => {
			if (!e) {
				return null;
			}
			switch (jF(e, t)) {
				case 1: {
					return U.Small;
				}
				case 2: {
					return U.Medium;
				}
				case 3: {
					return U.Large;
				}
				default: {
					return null;
				}
			}
		})(nWidth, M),
	);
	let te = app.BIsModOrShortcut();
	const re = !K && (M || context == 2 || context == 2 || context == 5);
	let ne = (
		<>
			{bFeatured ? (
				<Ee ref={NRef} {...e} />
			) : (
				<Mf ref={KRef} app={app} bShortLayout={bShortLayout} />
			)}
			{!bFeatured && !G && !M && (
				<div className={A_1(U.LibraryItemBoxShine, Z)} />
			)}
			<div className={U.LibraryItemOverlayOuterArea}>
				<div className={U.LibraryItemOverlayInnerArea}>
					<div className={U.LibraryBottomItems}>
						<div className={U.LibraryItemIcons}>
							{x && W && app.number_of_copies > 1 && (
								<div className={U.NumberOfCopies}>{app.number_of_copies}</div>
							)}
							{!bFeatured && re && <Ne app={app} />}
							{!bFeatured && Q && !bShowFriendsAsIcons && (
								<_e appid={app.appid} />
							)}
							{!bFeatured && M && <Ge app={app} />}
							{!te && T && (
								<B.$o
									className={U.SteamDeckCompatIcon}
									category={app.steam_deck_compat_category}
								/>
							)}
							<Ve overview={app} />
						</div>
						{context != 6 && <Fe app={app} />}
					</div>
				</div>
			</div>
			{M && <Te app={app} sortByType={sortByType} context={context} />}
		</>
	);
	const ie = (
		<>
			<o.z
				{...E}
				autoFocus={false}
				className={$}
				onClick={H}
				onContextMenu={j}
				hoverDelay={300}
				onOKButton={H}
				renderHover={q}
				bDisabled={J}
			>
				{ne}
			</o.z>
			{!bHideBanners && (
				<De {...e} context={context} bShortLayout={bShortLayout} />
			)}
			{Q && bShowFriendsAsIcons && (
				<HF
					appid={app.appid}
					bFeatured={bFeatured}
					bShortLayout={bShortLayout}
					context={context}
				/>
			)}
			{!M && <Te app={app} sortByType={sortByType} context={context} />}
		</>
	);
	if (M) {
		return (
			<w.Z
				noFocusRing
				navKey={`appportrait_${app.appid}`}
				focusable={false}
				onOKButton={H}
				className={ee}
				onMenuActionDescription={(0, Localize)("#ActionButtonLabelContextMenu")}
			>
				{ie}
				{children}
			</w.Z>
		);
	} else if (context == 6 || context == 7) {
		return (
			<div className={ee}>
				{ie}
				{children}
			</div>
		);
	} else {
		return (
			<Ae.Bj appid={app.appid} strCollectionId={strCollectionId} className={ee}>
				{ie}
				{children}
			</Ae.Bj>
		);
	}
});
let Ee = class extends y.Component {
	constructor(e) {
		super(e);
		Gn(this);
	}
	static contextType = O.QO;
	m_refAssetImage = y.createRef();
	OnLandscapeImageLoaded(e) {
		this.m_strImageURL = e.currentTarget.src;
	}
	GetAssetImage() {
		return this.m_refAssetImage.current;
	}
	m_strImageURL = undefined;
	GetLandscapeImageURL() {
		return this.m_strImageURL;
	}
	render() {
		const e = this.context?.IN_GAMEPADUI;
		const [t] = g.rV.GetClientSetting("library_low_perf_mode");
		return (
			<>
				<s.z
					ref={this.m_refAssetImage}
					app={this.props.app}
					eAssetType={3}
					className={A_1(U.PortraitImage, U.Landscape, U.NoCapsuleImage)}
					onLoad={this.OnLandscapeImageLoaded}
					bShortDisplay={this.props.bShortLayout}
				/>
				{!t && !e && (
					<div className={A_1(U.LibraryItemBoxShine, U.Landscape)} />
				)}
				{!e && (
					<Re
						app={this.props.app}
						context={this.props.context}
						bHideFooter={this.props.bHideFooter}
						bShortLayout={this.props.bShortLayout}
						landscapeURLSource={this}
						strMessage={this.props.strMessage}
						strSubMessage={this.props.strSubMessage}
					/>
				)}
			</>
		);
	}
};
Cg([G.oI], Ee.prototype, "OnLandscapeImageLoaded", null);
Cg([_.sH], Ee.prototype, "m_strImageURL", undefined);
Ee = Cg([f.PA], Ee);
export class Mf extends y.Component {
	m_refAssetImage = y.createRef();
	state = {
		nCurrentVerticalCapsuleAppId: undefined,
	};
	GetAssetImage() {
		return this.m_refAssetImage.current;
	}
	OnVerticalCapsuleLoad(e) {
		this.setState({
			nCurrentVerticalCapsuleAppId: e,
		});
	}
	OnVerticalCapsuleError() {
		console.log(
			"No vertical capsule for",
			this.props.app.appid,
			this.props.app.display_name,
		);
		this.setState({
			nCurrentVerticalCapsuleAppId: -1,
		});
	}
	BHasVerticalCapsule() {
		return (
			this.props.app &&
			this.props.app.appid == this.state.nCurrentVerticalCapsuleAppId
		);
	}
	render() {
		return (
			<s.z
				ref={this.m_refAssetImage}
				app={this.props.app}
				eAssetType={0}
				className={A_1(
					U.PortraitImage,
					U.Capsule,
					this.BHasVerticalCapsule() && U.CapsuleVisible,
				)}
				onLoad={() =>
					this.OnVerticalCapsuleLoad(this.props.app && this.props.app.appid)
				}
				onError={this.OnVerticalCapsuleError}
				bShortDisplay={this.props.bShortLayout}
			/>
		);
	}
}
Cg([G.oI], Mf.prototype, "OnVerticalCapsuleLoad", null);
Cg([G.oI], Mf.prototype, "OnVerticalCapsuleError", null);
Cg([G.oI], Mf.prototype, "BHasVerticalCapsule", null);
const Te = PA((e) => {
	const { app, sortByType, context } = e;
	if (sortByType == 1 || context != 1) {
		return null;
	}
	let i;
	let a = false;
	let s = null;
	switch (sortByType) {
		case 4: {
			if (app.minutes_playtime_forever == 0) {
				return null;
			}
			i = l_1(app.minutes_playtime_forever);
			break;
		}
		case 5: {
			if (!app.GetLastTimePlayed()) {
				return null;
			}
			i = LocalizeCalendarTime(app.GetLastTimePlayed());
			break;
		}
		case 9: {
			let t_metacritic_score = app.metacritic_score;
			if (t_metacritic_score === undefined) {
				return null;
			}
			s = U.MCGreen;
			if (t_metacritic_score < 70 && t_metacritic_score > 49) {
				s = U.MCOrange;
			} else if (t_metacritic_score < 50) {
				s = U.MCRed;
			}
			i = t_metacritic_score;
			break;
		}
		case 6: {
			if (app.GetCanonicalReleaseDate() == 0) {
				return null;
			}
			i = LocalizeRtime32ToShortDate(app.GetCanonicalReleaseDate());
			break;
		}
		case 8: {
			if (app.size_on_disk == null) {
				return null;
			}
			i = dm(parseFloat(app.size_on_disk), 2);
			if (app.library_id != null) {
				i = `${app.library_id} ${i}`;
			}
			break;
		}
		case 2: {
			if (u.y.BGameHasAchievements(app.appid)) {
				let e = u.y.GetAchievementProgress(app.appid);
				if (e == 100) {
					a = true;
				}
				i = (0, Localize)(
					"#Library_SortByPctAchievementsComplete_Tag",
					Math.floor(e),
				);
			} else {
				i = (0, Localize)("#Library_SortByPctAchievementsNoAchievements_Tag");
			}
			break;
		}
		case 7: {
			if (!(app.rt_purchased_time > 0)) {
				return null;
			}
			i = LocalizeRtime32ToShortDate(app.rt_purchased_time);
			break;
		}
		default: {
			return null;
		}
	}
	return (
		<div
			className={A_1(U.LibraryItemBoxSubscript, s, a ? U.ClassAllAchieved : "")}
		>
			{a && <E.OiG fullcolor />}
			{i}
		</div>
	);
});
const Re = PA((e) => {
	const {
		app,
		context,
		bHideFooter,
		bShortLayout,
		landscapeURLSource,
		strMessage,
		strSubMessage,
	} = e;
	const l = landscapeURLSource.GetLandscapeImageURL();
	const c = strMessage ? (
		<EL
			message={strMessage}
			subMessage={strSubMessage}
			bShortLayout={bShortLayout}
		/>
	) : (
		<Ye app={app} bShortLayout={bShortLayout} />
	);
	return (
		<>
			{(context == 2 || context == 5) && <Ke app={app} />}
			{!bHideFooter && (
				<div className={A_1(U.RecentGameFooter)}>
					{c}
					<div className={A_1(U.FooterBlurImageContainer)}>
						{l && <img className={U.FooterBlurImage} src={l} />}
					</div>
				</div>
			)}
		</>
	);
});
const Ke = PA((e) => {
	const { app, className, ...n } = e;
	const i = Qn();
	const a = $2();
	const s = AH(a, app, "mostavailable");
	const o = Kw(app, "mostavailable");
	const l = WB(s || o);
	if (!l) {
		console.warn("WARNING: No action icon for app action ", s);
	}
	const c = Co(s, U);
	let m = app.display_status == 13;
	const u = i;
	const d = A_1(
		className,
		U.LibraryItemActionButton,
		!u && U.Landscape,
		c,
		u && U.BasicPlayButton,
		!u && !s && U.Disabled,
		m && U.LockedGame,
	);
	return (
		<div
			{...n}
			className={d}
			key="action button"
			onMouseDown={
				u
					? (e) => {
							if (i) {
								e.stopPropagation();
								e.preventDefault();
							}
						}
					: null
			}
			onClick={(e) => {
				const r = GetOwningWindowForEvent(e);
				jy(s, app, "mostavailable", 100, r)();
				if (s != "Play" || i) {
					e.stopPropagation();
					e.preventDefault();
				}
			}}
		>
			{m ? <E.c_I /> : l}
		</div>
	);
});
let De = class extends y.Component {
	static contextType = O.QO;
	render() {
		let e;
		let t = this.props.bFeatured ? U.Landscape : U.Portrait;
		if (this.props.app.display_status == 13) {
			e = this.props.bShortLayout
				? "#AppBox_ComingSoon_Short"
				: "#AppBox_ComingSoon";
		} else if (this.props.app.display_status == 10) {
			e = "#GameAction_PreLoad";
		} else if (this.props.app.BIsNewToLibrary()) {
			e = this.props.bShortLayout
				? "#AppBox_NewToLibrary_Short"
				: "#AppBox_NewToLibrary";
		}
		if (e) {
			const r = this.context?.IN_GAMEPADUI;
			let n = this.props.context == 1;
			let i = this.props.app.display_status != 13;
			return (
				<div className={A_1(r && U.BasicMode, U.AppPortraitBannerContainer)}>
					<div
						className={A_1(
							!i && U.ComingSoonBanner,
							U.AppPortraitBanner,
							t,
							n ? U.InCollection : "",
						)}
					>
						{(0, Localize)(e)}
					</div>
				</div>
			);
		}
		return null;
	}
};
De = Cg([f.PA], De);
const Ne = PA((e) => {
	const { app } = e;
	const r = Qn();
	const n = $2();
	if (!we(app)) {
		return null;
	}
	let i = app.display_status != 13;
	let a = (
		<M.t1>
			<M.MA>
				{i
					? (0, Localize)("#GameAction_Install")
					: (0, Localize)("#DisplayStatus_Compact_PresaleOnly")}
			</M.MA>
		</M.t1>
	);
	const s = r;
	return (
		<M.m9
			bNavStop={false}
			bDisabled={s}
			direction="top"
			nDelayShowMS={100}
			toolTipContent={a}
			className={A_1(U.UninstalledIcon, !i && U.ComingSoonIcon)}
			onClick={(e) => {
				const r = AH(n, app, "mostavailable");
				const i = GetOwningWindowForEvent(e);
				jy(r, app, "mostavailable", 100, i)();
				if (r != "Play") {
					e.stopPropagation();
				}
			}}
			key="UninstalledIcon"
		>
			{i ? <v.f5 /> : <v.c_ />}
		</M.m9>
	);
});
const Fe = PA((e) => {
	const { app } = e;
	let r = app.display_status == 7;
	switch (app.display_status) {
		case 3:
		case 9:
		case 13:
		case 7: {
			break;
		}
		default: {
			return null;
		}
	}
	return (
		<div
			className={A_1(
				U.UninstalledBar,
				U.UninstalledBarBottom,
				r ? U.BarDownloading : null,
			)}
		>
			<div
				className={U.UninstalledProgressBar}
				style={{
					width: `${app.status_percentage}%`,
				}}
			/>
		</div>
	);
});
const Ge = PA((e) => {
	const { app } = e;
	const r = Qn();
	const n = $2();
	if (!((e, t) => AH(e, t, "mostavailable") == "Stream")(n, app)) {
		return null;
	}
	const i = r;
	return (
		<M.he
			bNavStop={false}
			bDisabled={i}
			direction="top"
			nDelayShowMS={100}
			className={A_1(U.UninstalledIcon)}
			onClick={(e) => {
				const r = AH(n, app, "mostavailable");
				const i = GetOwningWindowForEvent(e);
				const a = jy(r, app, "mostavailable", 100, i);
				if (a) {
					a();
				}
				if (r != "Stream") {
					e.stopPropagation();
				}
			}}
			key="StreamingIcon"
		>
			<I.WirelessNetwork />
		</M.he>
	);
});
function Oe(e) {
	if (e === 4) {
		return {
			Small: parseInt(U.GamepadPortraitWidthSmall),
			Medium: parseInt(U.GamepadPortraitWidthMedium),
			Large: parseInt(U.GamepadPortraitWidthLarge),
		};
	} else {
		return {
			Small: parseInt(U.PortraitWidthSmall),
			Medium: parseInt(U.PortraitWidthMedium),
			Large: parseInt(U.PortraitWidthLarge),
		};
	}
}
export function YQ(e, t) {
	if (
		e <= parseInt(a.GamepadUIBreakNarrow) ||
		t <= parseInt(a.GamepadUIBreakShort)
	) {
		return 1;
	} else if (e >= parseInt(a.GamepadUIBreakWide)) {
		return 3;
	} else {
		return 2;
	}
}
export function aH(e, t, r) {
	let n;
	let i;
	let a = false;
	let s = r == d.A8.AppType_Soundtracks;
	const o = Oe(t ? 4 : 7);
	switch (e) {
		case 1: {
			n = o.Small;
			a = true;
			break;
		}
		case 2: {
			n = o.Medium;
			break;
		}
		case 3: {
			n = o.Large;
			break;
		}
		default: {
			AssertMsg(false, "Invalid displaySize", e);
			n = o.Medium;
		}
	}
	i = n * (s ? 1 : 1.5);
	return {
		childWidth: n,
		childHeight: i,
		bShort: a,
	};
}
export function jF(e, t) {
	const r = Oe(t ? 4 : 7);
	switch (e) {
		case r.Small: {
			return 1;
		}
		case r.Medium: {
			return 2;
		}
		case r.Large: {
			return 3;
		}
	}
	AssertMsg(
		false,
		`Invalid childWidth ${e} passed to GetELibraryDisplaySizeForWidth`,
	);
	return 2;
}
