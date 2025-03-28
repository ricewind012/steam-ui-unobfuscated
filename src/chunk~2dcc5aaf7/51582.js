import {
	Localize,
	LocalizeReact,
	LocalizeRtime32ToShorterDate,
	CLocalizationManager,
	LocalizeDateHumanReadable,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";

import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import {
	LocalizeTimeSince,
	ETimeSinceSuffix,
} from "../../actual_src/utils/localization/datetime.js";
import { Seconds, GetUnixTime } from "../../actual_src/utils/time.js";
import n from "./91486.js";
import i, { bG } from "./18057.js";
import a, { DJ } from "./40361.js";
import s from "./39649.js";
import o from "./94899.js";
import l, { hj, j1 } from "./31800.js";
import c from "./64581.js";
import m, { tk } from "./22091.js";
import u, { r } from "./37499.js";
import d from "./75140.js";
import A, { T as T_2 } from "./78057.js";
import p, { Co, _R } from "./96593.js";
import g from "./3963.js";
import h, { gt as gt_2, OU, TT } from "./48289.js";
import C, { hb } from "./5640.js";
import _, { I5, VI } from "./34792.js";
import f, { iZ, qw } from "./89748.js";
import b from "./46422.js";
import y from "./87935.js";
import S, { aS } from "./83718.js";
import w from "./22176.js";
import B, { useState, useEffect, useRef } from "./63696.js";
import v from "./64608.js";
import E from "./17231.js";
import M from "./68608.js";
import T, { q3 } from "./90095.js";
import R from "./99869.js";
import N, { xj } from "./28592.js";
import F from "./10709.js";
import G from "./34394.js";
import O from "./96000.js";
import P from "./79421.js";
import L from "./33000.js";
import z from "./90985.js";
import x from "./69164.js";
import U from "./23783.js";
import W from "./50376.js";
import V from "./67189.js";
import j from "./46424.js";
import q, { $2 } from "./96680.js";
import $ from "./32836.js";
import ee, { vx, B$, Mb, r2, wm, uA, W6 } from "./69913.js";
import te from "./10606.js";
import ne from "./52177.js";
import ie from "./48197.js";
import ae from "./37086.js";
import se from "./78325.js";
import oe from "./49519.js";
import le from "./56654.js";
import ce, { sf } from "./44846.js";
import me from "./85243.js";
import { lX } from "./31084.js";
import de, { yq, R7 } from "./11131.js";
import { o as o_2 } from "./73259.js";
import { QP } from "./45264.js";
import ge from "./3524.js";
import he from "./92251.js";
import Ce from "./8573.js";
import { BSteamClientHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import fe from "./88750.js";
import { Nr as Nr_2 } from "./42318.js";
import ye from "./35488.js";
import Se from "./91435.js";
import { pg } from "./13869.js";
import Be from "./27773.js";
import ve from "./98995.js";
import { A as A_2 } from "./90765.js";
import { dm } from "./34428.js";
import { Ue as Ue_2, dh, wY, $$, CH, hL } from "./52451.js";
import De from "./78055.js";
import Ne from "./32792.js";
import { jy } from "./5808.js";
import { $u, C4 } from "./56262.js";
import { TE } from "./13200.js";
import Pe from "./43873.js";
import Le from "./84108.js";
import ze from "./39054.js";
import xe from "./78721.js";
import Ue, { $0, oG } from "./2326.js";
import We from "./36464.js";
import { l as l_2 } from "./80254.js";
import { I } from "./61416.js";
import je from "./81546.js";
import { ex } from "./32179.js";
import { Qv } from "./57665.js";
import Ze from "./66732.js";
import Ye from "./3200.js";
import Ke from "./79671.js";
import Xe from "./13484.js";
import Je from "./43691.js";
import { Yb, gQ } from "./39002.js";
import { MZ } from "./3499.js";
import { bY } from "./67429.js";
import ft from "./26105.js";
import bt from "./60917.js";
import yt from "./79769.js";
import { f as f_2 } from "./63538.js";
import Tt from "./27897.js";
import kt, { hi } from "./9252.js";
import { OJ } from "./63439.js";
import Pt, { $A } from "./66127.js";
import { sH } from "./89193.js";
import zt, { Y2 } from "./72476.js";
import { q as q_2 } from "./29285.js";
import { O as O_2 } from "./85438.js";
import { br as br_2 } from "./18869.js";
import er from "./54747.js";
import tr from "./91306.js";
import rr from "./5482.js";
import ir from "./25014.js";
import sr from "./6263.js";
import { SO } from "./90685.js";
import cr from "./14982.js";
import { useHandleTimelineOverlayNotifications } from "./44216.js";
import {
	useBGameRecordingEnabledForGame,
	BGameRecordingFeatureEnabled,
} from "./4069.js";
import dr from "./36813.js";
import Ar from "./18914.js";
import pr from "./33572.js";
import gr from "./13442.js";
import hr from "./72636.js";
import Cr, { _Y } from "./60353.js";
function k(e) {
	const { value: t, selected: r, onSelected: n, children: i } = e;
	const a = t.toString();
	return B.createElement(
		"div",
		{
			className: R.BroadcastOption,
		},
		B.createElement("input", {
			type: "radio",
			id: a,
			value: t,
			checked: t == r,
			onChange: () => n(t),
		}),
		B.createElement(
			"label",
			{
				htmlFor: a,
			},
			i,
		),
	);
}
function D(e) {
	const { overview: t, requestingUserSteamID: r, onClose: n } = e;
	const [i] = I5("bParenthesizeNicknames");
	const [a, s] = VI("broadcast_permissions");
	const [o, l] = B.useState(a);
	const c = gt_2(r);
	const m = q3(() => h.O$.GetFriendState(r)?.nickname);
	const u = B.useCallback(() => {
		s(o).then((e) => {
			if (e) {
				SteamClient.Messaging.PostMessage("Broadcast", "FirstTimeComplete", "");
			}
			n();
		});
	}, [o, n, s]);
	return B.createElement(
		"div",
		{
			className: R.BroadcastFirstTimeDialog,
		},
		B.createElement(
			"div",
			{
				className: R.Welcome,
			},
			(0, Localize)("#BroadcastFirstTime_Welcome"),
		),
		B.createElement(
			"div",
			{
				className: R.Requestor,
			},
			B.createElement(E.i8, {
				persona: c,
				statusPosition: "right",
			}),
			B.createElement(
				"div",
				null,
				LocalizeReact(
					"#BroadcastFirstTime_Requestor",
					B.createElement(M.A, {
						persona: c,
						strNickname: m,
						bParenthesizeNicknames: i,
					}),
					t.display_name,
				),
			),
		),
		B.createElement(
			"div",
			{
				className: R.Settings,
			},
			B.createElement(
				"div",
				{
					className: R.SettingsHeader,
				},
				(0, Localize)("#BroadcastFirstTime_Settings_Header"),
			),
			B.createElement(
				k,
				{
					value: 0,
					selected: o,
					onSelected: l,
				},
				(0, Localize)("#BroadcastPrivacy_Disabled"),
			),
			B.createElement(
				k,
				{
					value: 1,
					selected: o,
					onSelected: l,
				},
				(0, Localize)("#BroadcastPrivacy_FriendsApprove"),
			),
			B.createElement(
				k,
				{
					value: 2,
					selected: o,
					onSelected: l,
				},
				(0, Localize)("#BroadcastPrivacy_FriendsAllowed"),
			),
			B.createElement(
				k,
				{
					value: 3,
					selected: o,
					onSelected: l,
				},
				(0, Localize)("#BroadcastPrivacy_Public"),
			),
		),
		B.createElement(
			"div",
			{
				className: R.Defaults,
			},
			(0, Localize)("#BroadcastFirstTime_Default"),
		),
		B.createElement(
			"div",
			{
				className: R.Footer,
			},
			B.createElement(
				"a",
				{
					href: "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497",
				},
				(0, Localize)("#BroadcastFirstTime_FAQ"),
			),
			B.createElement(
				v.$n,
				{
					className: R.OKButton,
					onClick: u,
				},
				(0, Localize)("#Button_OK"),
			),
		),
	);
}
const H = V;
function Q(e) {
	const t = q3(() => z.l.playbackState);
	const [r, n] = B.useState(false);
	return B.createElement(
		x.Z,
		{
			className: H.Overlay,
		},
		B.createElement(U.TF, {
			appid: t?.uSoundtrackAppId ?? 0,
		}),
		t &&
			B.createElement(U.pw, {
				appid: t.uSoundtrackAppId,
				currentTrack: t.nActiveTrack,
			}),
		B.createElement(
			v.$n,
			{
				onClick: () => n(!r),
			},
			(0, Localize)("#SoundtrackControls_Browse"),
		),
		r &&
			B.createElement(K, {
				onClose: () => n(false),
			}),
	);
}
const Z = 600;
const Y = 500;
function K(e) {
	const [t, r] = B.useState();
	const n = nv($2(), Z, Y);
	return B.createElement(
		S.rG,
		{
			strName: "#SoundtrackControls_OverlayLibrary_Title",
			updateParamsBeforeShow: n,
			onClose: e.onClose,
		},
		t &&
			B.createElement(X, {
				appid: t,
				onClearSelectedApp: () => r(undefined),
			}),
		!t &&
			B.createElement(J, {
				onSelectApp: (e) => {
					r(e);
				},
			}),
	);
}
function X(e) {
	const t = Co(e.appid);
	return B.createElement(
		"div",
		{
			className: H.Details,
		},
		B.createElement(
			v.$n,
			{
				onClick: e.onClearSelectedApp,
				className: H.Back,
			},
			B.createElement(W.Q38, {
				className: H.Icon,
			}),
			(0, Localize)("#SoundtrackControls_OverlayLibrary_Back"),
		),
		B.createElement(j.gR, {
			overview: t,
			details: undefined,
		}),
	);
}
function J(e) {
	const t = q3(() => O.md.GetCollection(O.A8.AppType_Soundtracks));
	let r = B.useRef(undefined);
	const [n, i] = B.useState(true);
	let a = t.visibleApps.filter((e) => !n || e.installed);
	return B.createElement(
		P.ix,
		{
			className: H.OuterContainer,
			scrollClassName: H.ContainerScroll,
			innerRef: r,
			strRememberScrollKey: `overlay-collection-${t.id}`,
		},
		B.createElement(
			"div",
			{
				className: H.OverlayLibrary,
			},
			B.createElement(v.Yh, {
				className: H.Checkbox,
				label: (0, Localize)("#SoundtrackControls_OverlayLibrary_Installed"),
				checked: n,
				onChange: i,
			}),
			B.createElement(L.IJ, {
				appOverviews: a,
				strCollectionId: O.A8.AppType_Soundtracks,
				elScrollElement: r.current,
				onSelectApp: e.onSelectApp,
				bShowFilterText: false,
			}),
		),
	);
}
function re(e) {
	const { app: t, onClose: r } = e;
	const [n, i] = B.useState(B.createElement(B.Fragment, null, "\xA0"));
	const [a, s] = B.useState("");
	const o = B.useCallback(
		(e) => {
			if (e.result === 29) {
				r();
			} else {
				i((0, Localize)("#AIContentReport_Error", e.result));
			}
		},
		[r],
	);
	const l = vx(t.appid, a, r, o);
	const c = B.useCallback(() => {
		l.mutate();
	}, [l]);
	return B.createElement(
		te.eV,
		{
			closeModal: r,
		},
		B.createElement(v.Y9, null, (0, Localize)("#AIContentReport_Title")),
		B.createElement(
			v.f3,
			{
				onCancelButton: r,
			},
			B.createElement(
				v.a3,
				null,
				B.createElement(
					"div",
					{
						className: $.ErrorText,
					},
					n,
				),
				B.createElement("div", null, (0, Localize)("#AIContentReport_Text")),
				B.createElement("textarea", {
					className: $.ReportText,
					value: a,
					onChange: (e) => s(e.target.value),
				}),
			),
			B.createElement(
				v.wi,
				null,
				B.createElement(v.CB, {
					onOK: c,
					strOKText: (0, Localize)("#Button_Submit"),
					onCancel: r,
				}),
			),
		),
	);
}
function rt() {
	const e = $2();
	return q3(() => e.DesktopOverlay.time_session_start);
}
function nt(e) {
	const { title: t, icon: r, onClick: n, bContainChildren: i, children: a } = e;
	return B.createElement(
		"div",
		{
			className: A_2(w.GameOverviewSection, i && w.HasBackground),
		},
		B.createElement(
			"div",
			{
				className: A_2(w.GameOverviewSectionHeader, n && w.Clickable),
				onClick: n,
			},
			B.createElement(
				"div",
				{
					className: w.GameOverviewSectionTitle,
				},
				B.createElement(ye.Rows, {
					className: w.DragHandle,
				}),
				B.createElement("div", null, t),
			),
			r,
		),
		a &&
			B.createElement(
				"div",
				{
					className: A_2(w.GameOverviewSectionChildren, i && w.ContainChildren),
				},
				a,
			),
	);
}
function it(e) {
	const { title: t, friends: r } = e;
	const n = $2().DesktopOverlay;
	const i = DJ();
	const s = B.useCallback(() => {
		n.SetWindowVisibility(ee.w9.FriendsList, ee.tc.Closed);
	}, [n]);
	if (r.length == 0) {
		return null;
	} else {
		return B.createElement(
			nt,
			{
				title: t,
				icon: B.createElement(ye.Friends, null),
				bContainChildren: true,
				onClick: s,
			},
			B.createElement(
				"div",
				{
					className: w.FriendsWhoPlayed,
				},
				r.map((e) => {
					let t = e.friend.persona;
					let r = e.friend;
					let n = e.friend.persona.m_steamid;
					return B.createElement(We.fH, {
						key: t.m_steamid.GetAccountID(),
						className: w.Friend,
						friend: r,
						size: "Small",
						statusPosition: "right",
						onClick: (e) => {
							i.SteamWeb(
								y.B7.ResolveURL("SteamIDPage", n.ConvertTo64BitString()),
							);
						},
					});
				}),
			),
		);
	}
}
function at(e) {
	const { appid: t } = e;
	const r = $0(t);
	return B.createElement(
		B.Fragment,
		null,
		r &&
			B.createElement(it, {
				title: (0, Localize)("#AppOverlay_GameOverview_FriendsInGame"),
				friends: r,
			}),
	);
}
function st(e) {
	const { appid: t } = e;
	const r = oG(t);
	return B.createElement(
		B.Fragment,
		null,
		r &&
			B.createElement(it, {
				title: (0, Localize)("#AppOverlay_GameOverview_FriendsRecentlyPlayed"),
				friends: r,
			}),
	);
}
function ot(e) {
	const { title: t, appid: r, useGuidesQuery: n } = e;
	const i = $2().DesktopOverlay;
	const s = DJ();
	let o = n(r, 1, 3);
	const l = B.useCallback(() => {
		i.SetWindowVisibility(ee.w9.Guides, ee.tc.Visible);
	}, [i]);
	if (
		o.isLoading ||
		!o.data ||
		!o.data ||
		o.data.publishedfiledetails.length == 0
	) {
		return null;
	} else {
		return B.createElement(
			nt,
			{
				title: t,
				icon: B.createElement(ye.Guides, null),
				onClick: l,
			},
			o.data.publishedfiledetails.map((e) =>
				B.createElement(
					"div",
					{
						key: e.publishedfileid,
						className: w.GuideListItem,
						onClick: (t) => {
							s.SteamWeb(
								y.B7.ResolveURL("CommunityFilePage", e.publishedfileid),
							);
						},
					},
					B.createElement(
						"div",
						{
							className: w.GuideTitle,
						},
						b.oy.TextFilterStore.FilterText(e.creator, e.title),
					),
					B.createElement(je.sn, {
						details: e,
					}),
				),
			),
		);
	}
}
function lt(e) {
	const { appid: t } = e;
	B.useEffect(() => {
		ze.BP(t);
	}, [t]);
	return B.createElement(
		B.Fragment,
		null,
		B.createElement(ot, {
			appid: t,
			title: (0, Localize)("#AppOverlay_GameOverview_FavoriteGuides"),
			useGuidesQuery: ze.zg,
		}),
	);
}
function ct(e) {
	const { appid: t } = e;
	return B.createElement(
		B.Fragment,
		null,
		B.createElement(ot, {
			appid: t,
			title: (0, Localize)("#AppOverlay_GameOverview_TopGuides"),
			useGuidesQuery: ze.a,
		}),
	);
}
function mt(e) {
	const { screenshot: t } = e;
	const r = $2().DesktopOverlay;
	const n = B.useCallback(() => {
		r.SetWindowVisibility(ee.w9.Screenshots, ee.tc.Visible);
	}, [r]);
	return B.createElement(
		"div",
		{
			className: w.Screenshot,
			onClick: n,
		},
		B.createElement("img", {
			src: xe.fu(t.strUrl),
		}),
	);
}
function ut(e) {
	const { appid: t } = e;
	const r = $2().DesktopOverlay;
	const n = rt();
	const { bLoadingInitialData: i, rgMedia: a } = MZ(
		{
			listSource: {
				type: "app",
				gameid: bY(t),
			},
			mediaType: "screenshot",
			uploadStatus: "all",
		},
		2,
	);
	const s = B.useCallback(() => {
		r.SetWindowVisibility(ee.w9.Screenshots, ee.tc.Visible);
	}, [r]);
	if (i || a.length == 0) {
		return null;
	}
	const o = n - 604800;
	const l = a.filter((e) => e.rtCreated > o);
	if (l.length == 0) {
		return null;
	} else {
		return B.createElement(
			nt,
			{
				title: (0, Localize)("#AppOverlay_GameOverview_YourScreenshots"),
				icon: B.createElement(ye.Screenshot, null),
				bContainChildren: true,
				onClick: s,
			},
			B.createElement(
				"div",
				{
					className: w.ScreenshotsList,
				},
				l.map((e) =>
					B.createElement(mt, {
						key: e.id,
						screenshot: e,
					}),
				),
			),
		);
	}
}
function dt(e) {
	const { achievement: t } = e;
	const r = Qv(t.bAchieved, t.flAchieved);
	const n = $2().DesktopOverlay;
	const i = B.useCallback(() => {
		n.SetWindowVisibility(ee.w9.Achievements, ee.tc.Visible);
	}, [n]);
	return B.createElement(
		"div",
		{
			className: w.RecentAchievement,
			onClick: i,
		},
		B.createElement(
			"div",
			{
				className: w.UnlockTime,
			},
			LocalizeRtime32ToShorterDate(t.rtUnlocked),
		),
		B.createElement(
			"div",
			{
				className: w.AchievementDetails,
			},
			B.createElement(Ze._, {
				glow: r,
				imgURL: t.strImage,
			}),
			B.createElement(
				"div",
				{
					className: w.AchievementContent,
				},
				B.createElement(
					"div",
					{
						className: w.AchievementTitle,
					},
					t.strName,
				),
				B.createElement(
					"div",
					{
						className: w.AchievementDescription,
					},
					t.strDescription,
				),
				B.createElement(Ye.T0, {
					className: w.AchievementGlobalPercentage,
					percentage: t.flAchieved,
				}),
			),
		),
	);
}
function At(e) {
	const { appid: t } = e;
	const r = $2().DesktopOverlay;
	const n = rt();
	const i = ex(t);
	const a = B.useCallback(() => {
		r.SetWindowVisibility(ee.w9.Achievements, ee.tc.Visible);
	}, [r]);
	if (i.loading || i.error) {
		return null;
	}
	const s = n - 604800;
	const { achieved: o } = i.data;
	const l = Object.keys(o)
		.map((e) => o[e])
		.filter((e) => e.rtUnlocked > s)
		.sort((e, t) => t.rtUnlocked - e.rtUnlocked);
	if (l.length == 0) {
		return null;
	}
	const c = l.slice(0, 3);
	return B.createElement(
		nt,
		{
			title: (0, Localize)("#AppOverlay_GameOverview_YourAchievements"),
			icon: B.createElement(ye.SteamAchievements, null),
			bContainChildren: true,
			onClick: a,
		},
		B.createElement(
			"div",
			{
				className: w.AchievementsList,
			},
			c.map((e) =>
				B.createElement(dt, {
					key: e.strID,
					achievement: e,
				}),
			),
		),
	);
}
function pt(e) {
	const t = $2().DesktopOverlay;
	let [r, n] = B$(t);
	const i = l_2(r, "#AppOverlay_GameOverview_TotalPlaytime_", true);
	const a = l_2(n, "#AppOverlay_GameOverview_LastTwoWeeksPlaytime_", true);
	return B.createElement(
		nt,
		{
			title: (0, Localize)("#AppOverlay_GameOverview_Playtime"),
			icon: B.createElement(ye.Clock, null),
			bContainChildren: true,
		},
		B.createElement(
			"div",
			{
				className: w.Playtime,
			},
			B.createElement("div", null, i),
			B.createElement("div", null, a),
		),
	);
}
function gt(e) {
	const { eventModel: t } = e;
	const r = sf(Je.TS.LANGUAGE);
	const n = DJ();
	const i = B.useCallback(() => {
		n.SteamWeb(
			y.B7.ResolveURL("EventAnnouncementPage", t.appid, t.AnnouncementGID),
		);
	}, [t, n]);
	return B.createElement(
		"div",
		{
			className: w.RecentNewsItem,
			onClick: i,
		},
		B.createElement(
			"div",
			{
				className: w.EventDetailTitle,
			},
			t.GetNameWithFallback(r),
		),
		B.createElement(
			"div",
			{
				className: w.PostedTime,
			},
			LocalizeRtime32ToShorterDate(t.GetPostTimeAndDateUnixSeconds()),
		),
	);
}
function ht(e) {
	const { appid: t } = e;
	const r = ((e) =>
		I({
			queryKey: [`GameOverviewNews${e}`],
			queryFn: async () => {
				Xe.O3.Init();
				return await Xe.O3.LoadAdjacentPartnerEvents(null, null, e, 0, 3);
			},
			staleTime: Seconds.PerDay * 1 * 1000,
		}))(t);
	const n = rt() - 2592000;
	const i = DJ();
	const s = B.useCallback(
		(e) => {
			i.SteamWeb(y.B7.ResolveURL("GameHubNews", t));
		},
		[t, i],
	);
	if (r.isLoading || r.isError || r.isError || !r.data) {
		return null;
	}
	if (r.data.filter((e) => e.GetPostTimeAndDateUnixSeconds() > n).length == 0) {
		return null;
	} else {
		return B.createElement(
			nt,
			{
				title: (0, Localize)("#AppOverlay_GameOverview_RecentNews"),
				icon: B.createElement(ye.StoreNews, null),
				onClick: s,
			},
			r.data.map((e) =>
				B.createElement(gt, {
					key: e.GID,
					eventModel: e,
				}),
			),
		);
	}
}
function Ct(e) {
	const { appid: t } = e;
	const r = $2().DesktopOverlay;
	const n = (() => {
		const [e, t] = B.useState();
		B.useEffect(() => {
			let e = () => {
				SteamClient.Friends.GetCoplayData().then((e) => {
					e.currentUsers?.map((e) => h.O$.GetFriendState(e.accountid));
					e.recentUsers?.map((e) => h.O$.GetFriendState(e.accountid));
					t(e);
				});
			};
			e();
			let r = window.setInterval(e, 60000);
			return () => window.clearInterval(r);
		}, []);
		return e;
	})();
	const i = DJ();
	const s = B.useCallback(() => {
		r.SetWindowVisibility(ee.w9.Players, ee.tc.Visible);
	}, [r]);
	return B.createElement(
		nt,
		{
			title: (0, Localize)("#AppOverlay_GameOverview_Players"),
			bContainChildren: true,
			icon: B.createElement(W.Yb3, null),
			onClick: s,
		},
		B.createElement(
			"div",
			{
				className: w.PlayersSection,
			},
			B.createElement(
				"div",
				{
					className: w.Players,
				},
				n?.currentUsers.map((e) => {
					let t = h.O$.GetFriendState(e.accountid);
					if (t) {
						let e = t.persona;
						let r = e.m_steamid;
						let n = (e) => {
							i.SteamWeb(
								y.B7.ResolveURL("SteamIDPage", r.ConvertTo64BitString()),
							);
						};
						return B.createElement(We.fH, {
							key: e.m_steamid.GetAccountID(),
							className: w.Player,
							friend: t,
							size: "Small",
							statusPosition: "right",
							onClick: n,
						});
					}
					return null;
				}),
			),
			B.createElement(
				v.$n,
				{
					className: w.ViewPlayersBtn,
					onClick: s,
				},
				(0, Localize)("#AppOverlay_GameOverview_Players_View"),
			),
		),
	);
}
const _t = Nr_2((e) => {
	const { appid: t } = e;
	const r = $2();
	const n = r.DesktopOverlay;
	const i = ee.w9.GameOverview;
	const a = q3(() => n.BWindowVisible(i));
	const [s, o] = B.useState();
	const l = ty(i);
	const c = Ue_2(o, l);
	const m = q3(() => n.game_overview_sections);
	const u = nv(r, 350, 475, 250, 300);
	const d = B.useCallback(() => {
		n.SetWindowVisibility(i, ee.tc.Closed);
	}, [i, n]);
	const A = B.useCallback(
		(e, t) => {
			if (!e.destination) {
				return;
			}
			let r = Yb(m, e.source.index, e.destination.index);
			n.SetSortedGameOverviewSections(r);
		},
		[n, m],
	);
	if (a) {
		return B.createElement(
			S.rG,
			{
				strName: "GameOverview",
				updateParamsBeforeShow: u,
				onClose: d,
				bUseSavedDimensions: true,
				refPopup: c,
			},
			B.createElement(
				"div",
				{
					className: w.OverviewTitle,
				},
				(0, Localize)("#AppOverlay_GameOverview_Title"),
			),
			s?.document?.head &&
				B.createElement(
					Ke.JY,
					{
						onDragEnd: A,
						stylesInsertionPoint: s?.document?.head,
					},
					B.createElement(
						Ke.gL,
						{
							droppableId: "droppable",
						},
						(e, r) =>
							B.createElement(
								"div",
								{
									className: A_2(
										w.GameOverview,
										r.isDraggingOver && w.IsDraggingOver,
									),
									...e.droppableProps,
									ref: e.innerRef,
								},
								m.map((e, r) => {
									let n = null;
									switch (e) {
										case ee.GO.Playtime: {
											n = B.createElement(pt, null);
											break;
										}
										case ee.GO.FriendsInGame: {
											n = B.createElement(at, {
												appid: t,
											});
											break;
										}
										case ee.GO.FriendsRecentlyPlayed: {
											n = B.createElement(st, {
												appid: t,
											});
											break;
										}
										case ee.GO.Achievements: {
											n = B.createElement(At, {
												appid: t,
											});
											break;
										}
										case ee.GO.Screenshots: {
											n = B.createElement(ut, {
												appid: t,
											});
											break;
										}
										case ee.GO.FavoriteGuides: {
											n = B.createElement(lt, {
												appid: t,
											});
											break;
										}
										case ee.GO.TopGuides: {
											n = B.createElement(ct, {
												appid: t,
											});
											break;
										}
										case ee.GO.News: {
											n = B.createElement(ht, {
												appid: t,
											});
											break;
										}
										case ee.GO.Players: {
											n = B.createElement(Ct, {
												appid: t,
											});
										}
									}
									return B.createElement(
										Ke.sx,
										{
											key: e,
											draggableId: e,
											index: r,
										},
										(e, t) =>
											B.createElement(
												"div",
												{
													className: A_2(t.isDragging && w.IsDragging),
													ref: e.innerRef,
													...e.draggableProps,
													...e.dragHandleProps,
													style: gQ(e.draggableProps.style),
												},
												n,
											),
									);
								}),
								e.placeholder,
							),
					),
				),
		);
	} else {
		return null;
	}
});
const St = 86400;
function wt(e) {
	const {
		appid: t,
		bShowPinnedView: r,
		flipped: n,
		settings: i,
		setSettings: a,
	} = e;
	const s = B.useMemo(() => new Et(t), [t]);
	const [o, l] = B.useState(i?.eClockTab ?? 0);
	const c = B.useCallback(
		(e) => {
			a({
				...i,
				eClockTab: e,
			});
			l(e);
		},
		[i, a],
	);
	return B.createElement(
		"div",
		{
			className: A_2(ft.OverlayClock, n && ft.Flipped),
		},
		B.createElement(
			"div",
			{
				className: A_2(ft.Tabs, r && ft.Hidden),
			},
			B.createElement(
				v.zW,
				{
					value: o,
					onChange: c,
					classNames: ft.TabHeader,
				},
				B.createElement(
					v.a,
					{
						value: 0,
					},
					(0, Localize)("#AppOverlay_Clock_ClockTab"),
				),
				B.createElement(
					v.a,
					{
						value: 1,
					},
					(0, Localize)("#AppOverlay_Clock_TimerTab"),
				),
			),
		),
		o == 0 &&
			B.createElement(Bt, {
				bShowPinnedView: r,
				flipped: n,
				settings: i,
				setSettings: a,
			}),
		o == 1 &&
			B.createElement(vt, {
				bShowPinnedView: r,
				timerStore: s,
			}),
	);
}
function Bt(e) {
	const { bShowPinnedView: t, flipped: r, settings: n, setSettings: i } = e;
	const [a, s] = B.useState(false);
	const [o, c] = B.useState(1000);
	const m = ((e) => {
		const [t, r] = B.useState(new Date());
		B.useEffect(() => {
			let t = window.setTimeout(() => r(new Date()), e);
			return () => clearTimeout(t);
		}, [t, e]);
		return t.getTime().toString();
	})(o);
	const u = B.useCallback(
		(e) => {
			if (e.ctrlKey && e.shiftKey) {
				s(!a);
			}
		},
		[a],
	);
	const d = hj();
	const A = n?.nClockFontSize ?? 48;
	const p = B.useRef(undefined);
	B.useEffect(() => {
		p.current?.style.setProperty("--clock-font-size", `${A}px`);
	}, [A]);
	const g = B.useCallback(
		(e) => {
			i({
				...n,
				nClockFontSize: e,
			});
		},
		[n, i],
	);
	return B.createElement(
		"div",
		{
			className: A_2(ft.TabClock, r && ft.Flipped),
			onDoubleClick: u,
		},
		B.createElement(
			"div",
			{
				className: A_2(ft.ResizeTextContainer, t && ft.Hidden),
			},
			B.createElement(
				v.JU,
				{
					className: ft.ResizeTextLabel,
				},
				(0, Localize)("#AppOverlay_Clock_ResizeLabel"),
			),
			B.createElement(v.Kc, {
				className: ft.ClockResizeSlider,
				min: 12,
				max: 60,
				value: A,
				onChange: g,
			}),
		),
		a &&
			B.createElement(
				"div",
				{
					className: A_2(ft.ResizeTextContainer, t && ft.Hidden),
				},
				B.createElement(
					v.JU,
					{
						className: ft.ResizeTextLabel,
					},
					"update interval",
				),
				B.createElement("input", {
					type: "text",
					className: ft.ClockResizeSlider,
					value: o,
					onChange: (e) => c(Number.parseInt(e.target.value)),
				}),
			),
		B.createElement(
			"div",
			{
				className: ft.CurrentTimeContainer,
			},
			B.createElement(
				"div",
				{
					className: ft.CurrentTime,
					ref: p,
				},
				a ? m : d,
			),
		),
	);
}
function vt(e) {
	const { bShowPinnedView: t, timerStore: r } = e;
	dh(r.EventsChanged());
	return B.createElement(
		x.Z,
		{
			retainFocus: true,
			className: A_2(ft.TabTimer),
		},
		B.createElement(It, {
			timerStore: r,
			bShowPinnedView: t,
		}),
		B.createElement(
			"div",
			{
				className: A_2(ft.ControlButtons, t && ft.Hidden),
			},
			B.createElement(
				v.$n,
				{
					className: A_2(ft.Repeat, r.Repeat() && ft.Active),
					onClick: () => r.SetRepeat(!r.Repeat()),
				},
				B.createElement(
					ve.he,
					{
						className: ft.Icon,
						toolTipContent: (0, Localize)("#AppOverlay_Timer_Repeat"),
					},
					B.createElement(ye.Repeat, null),
				),
			),
			B.createElement(
				v.$n,
				{
					className: ft.Reset,
					onClick: () => {
						if (r.BStarted()) {
							const e = Date.now();
							r.SetStartTime(e);
							if (r.BPaused()) {
								r.SetPauseTime(e);
							}
						}
					},
				},
				B.createElement(
					ve.he,
					{
						className: ft.Icon,
						toolTipContent: (0, Localize)("#AppOverlay_Timer_Reset"),
					},
					B.createElement(ye.ResetTimer, null),
				),
			),
			r.BRunning() &&
				B.createElement(
					v.$n,
					{
						className: A_2(ft.StartStop, "Primary"),
						onClick: () => r.SetPauseTime(Date.now()),
					},
					B.createElement(
						ve.he,
						{
							className: ft.Icon,
							toolTipContent: (0, Localize)("#AppOverlay_Timer_Pause"),
						},
						B.createElement(ye.Pause, null),
					),
				),
			!r.BRunning() &&
				B.createElement(
					v.$n,
					{
						className: A_2(ft.StartStop, "Primary"),
						onClick: () => {
							if (r.PauseTime()) {
								const e = Date.now() - r.PauseTime();
								r.SetStartTime(r.StartTime() + e);
								r.SetPauseTime(undefined);
							} else {
								r.SetStartTime(Date.now());
							}
						},
						disabled: r.Duration() <= 0,
					},
					B.createElement(
						ve.he,
						{
							className: ft.Icon,
							toolTipContent: (0, Localize)("#AppOverlay_Timer_Start"),
						},
						B.createElement(ye.Play, null),
					),
				),
		),
	);
}
function It(e) {
	const { timerStore: t, bShowPinnedView: r } = e;
	const n = t.RemainingSeconds();
	const i = Math.floor(n / 3600)
		.toFixed(0)
		.padStart(2, "0");
	const a = (Math.floor(n / 60) % 60).toFixed(0).padStart(2, "0");
	const s = (n % 60).toFixed(0).padStart(2, "0");
	const o = [i, a, s];
	const [l, c] = B.useState(false);
	const [m, u] = B.useState([i, a, s]);
	const d = B.useMemo(() => [undefined, undefined, undefined], []);
	d[0] = B.useRef(undefined);
	d[1] = B.useRef(undefined);
	d[2] = B.useRef(undefined);
	const A = B.useRef(undefined);
	const p = [
		(0, Localize)("#AppOverlay_Timer_Label_Hours"),
		(0, Localize)("#AppOverlay_Timer_Label_Minutes"),
		(0, Localize)("#AppOverlay_Timer_Label_Seconds"),
	];
	B.useEffect(() => {
		if (l && A.current !== undefined) {
			const e = d[A.current].current;
			if (e) {
				e.focus();
				e.setSelectionRange(0, e.value.length);
			}
		}
	}, [l, d]);
	const g = () => {
		A.current = undefined;
		setTimeout(() => {
			if (A.current === undefined) {
				c(false);
			}
		}, 0);
	};
	const h = (e) =>
		B.createElement(
			"div",
			{
				className: ft.ColonSegment,
			},
			B.createElement(
				"div",
				{
					className: ft.Colon,
				},
				(0, Localize)("#AppOverlay_Timer_TimeSeparator"),
			),
			B.createElement(
				"span",
				{
					className: A_2(ft.TimePartLabel, r && ft.Hidden),
				},
				"\xA0",
			),
		);
	if (l && !r) {
		return B.createElement(
			"div",
			{
				className: ft.Remaining,
			},
			d.map((e, r) =>
				B.createElement(
					B.Fragment,
					{
						key: r,
					},
					r > 0 && h(),
					B.createElement(
						"div",
						{
							className: ft.TimePartSegment,
						},
						B.createElement("input", {
							key: r,
							className: ft.TimePartEdit,
							type: "text",
							ref: e,
							value: m[r],
							onChange: (e) =>
								((e, r) => {
									if (
										/^\d{0,2}$/.test(e) &&
										((r == 0 && Number(e) >= 0 && Number(e) <= 24) ||
											(r == 1 && Number(e) >= 0 && Number(e) < 60) ||
											(r == 2 && Number(e) >= 0 && Number(e) < 60))
									) {
										const n = [...m];
										n[r] = e;
										u(n);
										t.SetDuration(
											Math.min(
												Number(n[0]) * 60 * 60 +
													Number(n[1]) * 60 +
													Number(n[2]),
												St,
											),
										);
									}
								})(e.target.value, r),
							onFocus: () => {
								e = r;
								c(true);
								u([i, a, s]);
								A.current = e;
								return;
								var e;
							},
							onBlur: g,
						}),
						B.createElement(
							"span",
							{
								className: ft.TimePartLabel,
							},
							p[r],
						),
					),
				),
			),
		);
	} else {
		return B.createElement(
			"div",
			{
				className: A_2(ft.Remaining, ft.AllowDrag),
			},
			d.map((e, n) =>
				B.createElement(
					B.Fragment,
					{
						key: n,
					},
					n > 0 && h(),
					B.createElement(
						"div",
						{
							className: ft.TimePartSegment,
						},
						B.createElement(
							"span",
							{
								className: A_2(ft.TimePart, (t.BRunning() || r) && ft.Running),
								onClick: () => {
									e = n;
									if (!t.BRunning()) {
										c(true);
										A.current = e;
									}
									return;
									var e;
								},
							},
							o[n],
						),
						B.createElement(
							"span",
							{
								className: A_2(ft.TimePartLabel, r && ft.Hidden),
							},
							p[n],
						),
					),
				),
			),
		);
	}
}
class Et {
	m_eventsChanged = new yt.lu();
	m_timerExpired = new yt.lu();
	m_currentInterval = undefined;
	m_appId;
	m_nDuration = 0;
	m_bRepeat = false;
	m_nStartTime = undefined;
	m_nPauseTime = undefined;
	m_nCurrentTime = undefined;
	m_nLastRemainingSeconds = undefined;
	constructor(e) {
		this.m_appId = e;
	}
	EventsChanged() {
		return this.m_eventsChanged;
	}
	TimerExpired() {
		return this.m_timerExpired;
	}
	BStarted() {
		return !!this.m_nStartTime;
	}
	BPaused() {
		return !!this.m_nPauseTime;
	}
	BRunning() {
		return this.m_nStartTime && !this.m_nPauseTime;
	}
	Duration() {
		return this.m_nDuration;
	}
	SetDuration(e) {
		this.m_nDuration = e;
		this.TimerSetupChanged();
	}
	Repeat() {
		return this.m_bRepeat;
	}
	SetRepeat(e) {
		this.m_bRepeat = e;
		this.TimerSetupChanged();
	}
	StartTime() {
		return this.m_nStartTime;
	}
	SetStartTime(e) {
		this.m_nStartTime = e;
		this.TimerSetupChanged();
	}
	PauseTime() {
		return this.m_nPauseTime;
	}
	SetPauseTime(e) {
		this.m_nPauseTime = e;
		this.TimerSetupChanged();
	}
	TimerSetupChanged() {
		if (this.m_currentInterval) {
			window.clearInterval(this.m_currentInterval);
			this.m_currentInterval = undefined;
		}
		if (this.m_nStartTime && !this.m_nPauseTime) {
			this.m_currentInterval = window.setInterval(() => this.Tick(), 200);
			this.m_nCurrentTime = Date.now();
		}
		this.m_nLastRemainingSeconds = this.RemainingSeconds();
		this.m_eventsChanged.Dispatch();
	}
	Tick() {
		const e = this.m_nStartTime + this.m_nDuration * 1000;
		const t = Date.now();
		if (t >= e) {
			this.OnTimerExpired();
			this.m_nCurrentTime = undefined;
		} else {
			this.m_nCurrentTime = t;
		}
		const r = this.RemainingSeconds();
		if (this.m_nLastRemainingSeconds != r) {
			this.m_nLastRemainingSeconds = r;
			this.m_eventsChanged.Dispatch();
		}
	}
	OnTimerExpired() {
		console.log("Bing Bong");
		bt.Tu.NotifyTimerExpired(this.m_appId);
		this.SetPauseTime(undefined);
		this.SetStartTime(this.Repeat() ? Date.now() : undefined);
		this.m_timerExpired.Dispatch();
	}
	RemainingSeconds() {
		if (this.m_nStartTime) {
			if (this.m_nPauseTime) {
				return Math.ceil(
					this.m_nDuration - (this.m_nPauseTime - this.m_nStartTime) / 1000,
				);
			}
			{
				const e =
					((this.m_nCurrentTime ?? this.m_nStartTime) - this.m_nStartTime) /
					1000;
				return Math.ceil(this.m_nDuration - e);
			}
		}
		return this.m_nDuration;
	}
}
const Rt = Tt;
const Nt = 1000;
const Ft = 5;
function Gt(e) {
	const { appid: t } = e;
	const r = $2();
	const [n, i] = Mb(r.DesktopOverlay);
	if (n) {
		return B.createElement(Ot, {
			appid: t,
			instance: r,
			onClear: i,
		});
	} else {
		return null;
	}
}
function Ot(e) {
	const { appid: t, instance: r, onClear: n } = e;
	const i = hi(true);
	let a = i.m_full.m_nWidth;
	let s = i.m_full.m_nHeight;
	let o = `durationcontrolinit_uid${t}`;
	const { popup: l, element: c } = OJ(o, {
		title: o,
		dimensions: {
			width: a,
			height: s,
		},
		body_class: Rt.DurationControlInit,
		browserType: undefined,
		target_browser: r.params.browserInfo,
		eCreationFlags:
			de.Wf.Composited |
			de.Wf.Hidden |
			yq(de.Dr.Notification) |
			de.Wf.ApplyBrowserScaleToDimensions |
			de.Wf.AlwaysOnTop,
	});
	const m = ((e, t, r, n) =>
		B.useCallback(
			(i) => {
				if (!e) {
					return;
				}
				let a = Math.ceil(i.borderBoxSize[0].inlineSize);
				let s = Math.ceil(i.borderBoxSize[0].blockSize);
				let o = t / 2 - a / 2;
				let l = r - s;
				e.SteamClient.Window.ResizeTo(a, s, true);
				e.SteamClient.Window.MoveTo(o, l, n);
				e.SteamClient.Window.ShowWindow();
			},
			[e, t, r, n],
		))(l, a, s, i.m_flDPI);
	const u = wY(m);
	((e, t, r) => {
		let n = B.useRef(r);
		let i = B.useRef(t);
		B.useEffect(() => {
			let t = e.BrowserWindow;
			let r = t.setTimeout(() => {
				if (i.current) {
					i.current.SteamClient.Window.HideWindow();
				}
				if (n.current) {
					n.current();
				}
			}, Ft * 1000);
			return () => t.clearTimeout(r);
		}, [e, n]);
	})(r, l, n);
	if (!c) {
		return null;
	}
	const d = {
		maxWidth: Math.min(a, Nt),
		maxHeight: s,
	};
	return se.createPortal(
		B.createElement(
			"div",
			{
				ref: u,
				style: d,
			},
			B.createElement(
				"div",
				{
					className: Rt.DurationControlStartupContents,
				},
				(0, Localize)("#SteamChina_Overlay_DurationControl_Init"),
			),
		),
		c,
	);
}
let xt = sH({
	map: null,
});
let Ut = false;
function Wt() {
	return q3(
		() =>
			!!xt.map ||
			((async () => {
				if (Ut) {
					return;
				}
				Ut = true;
				const e = zt.TS.LANGUAGE;
				let t = null;
				try {
					t = await require("./41809.js")(`./steampops_${e}.json`);
				} catch {}
				let n = null;
				try {
					const i = CLocalizationManager.GetLanguageFallback(e);
					if (i != e) {
						n = await require("./41809.js")(`./steampops_${i}.json`);
						for (const [e, r] of Object.entries(n)) {
							if (!(e in t)) {
								t[e] = r;
							}
						}
					}
				} catch {}
				let i = {};
				const a = /sdrpop_(\w+)/;
				const s = /([^\|]+)\|([^\|]+)\|([^\|]*)/;
				for (const [e, r] of Object.entries(t)) {
					const t = a.exec(e);
					if (!t) {
						continue;
					}
					const n = t[1];
					const o = s.exec(r);
					if (o) {
						i[n] = {
							popid: n,
							location: o[1],
							partner_name: o[2],
							partner_desc: o[3],
						};
					} else {
						console.error(`Invalid encoded POP loc data for '${n}': '${r}'`);
					}
				}
				xt.map = i;
			})(),
			false),
	);
}
function Vt(e) {
	if (e) {
		if (typeof e != "string") {
			return e;
		}
		if (xt.map) {
			return xt.map[e];
		}
	}
}
function Ht(e) {
	let t;
	t = typeof e == "string" ? Vt(e) : e;
	if (t) {
		return t.location.split(",")[0].trim();
	} else {
		return "";
	}
}
function jt(e, t) {
	let r;
	r = typeof e == "string" ? Vt(e) : e;
	if (!r) {
		return "";
	}
	const n = r.location.split(",");
	const i = n[0].trim();
	const a = t ? i : r.location;
	if (!r.partner_desc) {
		return a;
	}
	let s = r.partner_desc;
	if (!r.partner_desc.toLowerCase().includes(i.toLowerCase())) {
		s += ` (${a})`;
	} else if (n.length > 1 && !t) {
		s += " (";
		for (let e = 1; e < n.length; ++e) {
			if (e > 1) {
				s += ", ";
			}
			s += n[e].trim();
		}
		s += ")";
	}
	return s;
}
function qt(e) {
	const t = e.loc || e.popid;
	const r = ((e) => {
		Wt();
		return Vt(e);
	})(t);
	const n = ((e) => {
		if (e) {
			if (typeof e != "string") {
				e = e.popid;
			}
			return (0, Localize)("#SDRPOPID_GenericCode", e);
		} else {
			return "";
		}
	})(t);
	let i;
	let a;
	if (r) {
		i = `${n}: ${r.partner_name} ${jt(r, false)}`;
		a =
			e.detail == "city_only"
				? Ht(r)
				: e.detail == "partner_brief"
					? jt(r, true)
					: `${r.partner_name} ${jt(r, true)}`;
	} else {
		a = n;
	}
	return B.createElement(
		"span",
		{
			title: i,
			className: A_2(e.className, w.SDRPOPID),
		},
		a,
	);
}
let Qt;
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Connecting = 1)] = "Connecting";
	e[(e.FindingRoute = 2)] = "FindingRoute";
	e[(e.Connected = 3)] = "Connected";
	e[(e.ClosedByPeer = 4)] = "ClosedByPeer";
	e[(e.ProblemDetectedLocally = 5)] = "ProblemDetectedLocally";
})((Qt ||= {}));
let Zt = false;
function Yt(e) {
	const { summary: t } = e;
	const [r, n] = B.useState(0);
	Wt();
	const i = t.main_cxn?.connection_state == Qt.Connected ? t.main_cxn : null;
	const a =
		i?.transport_kind == Pt.WD.k_ESteamNetTransport_SDRHostedServer ? i : null;
	if (a?.ip_was_shared) {
		console.assert(
			Zt,
			`SDR connection shared our IP?  transport_kind=${a?.transport_kind} appid=${t?.appid}`,
		);
		Zt = true;
	}
	const s =
		i &&
		i.ping_ms >= 0 &&
		i.ping_default_internet_route > i.ping_ms &&
		i.ping_default_internet_route - i.ping_ms;
	let o;
	B.useEffect(() => {
		if (s > 2) {
			n(s);
		} else if (!(s > 0)) {
			n(0);
		}
	}, [s]);
	let l = "#OverlayNetworkStatus_IPShared_LearnMoreTooltip";
	if (t.ip_was_shared_with_nonfriend) {
		o = (0, Localize)("#OverlayNetworkStatus_IPShared_Yes");
	} else if (t.ip_was_shared_with_friend) {
		o = (0, Localize)("#OverlayNetworkStatus_IPShared_Friends");
	} else {
		o = B.createElement(
			B.Fragment,
			null,
			false,
			(0, Localize)("#OverlayNetworkStatus_IPShared_No"),
		);
		l = "#OverlayNetworkStatus_IPShared_NoLearnMoreTooltip";
	}
	let c = null;
	c =
		t.active_connections == 0
			? (0, Localize)("#OverlayNetworkStatus_NoActiveConnections")
			: t.active_connections == 1 && a
				? null
				: (0, Localize)(
						"#OverlayNetworkStatus_NumActiveConnections",
						t.active_connections,
					);
	let m = null;
	let u = null;
	if (a && a.sdrpop_remote) {
		if (a.sdrpop_local && a.sdrpop_remote != a.sdrpop_local) {
			const e = Vt(a.sdrpop_local);
			const t = Vt(a.sdrpop_remote);
			let r;
			if (e && t && Ht(e) == Ht(t)) {
				r = "partner_brief";
				if (e.partner_name != t.partner_name) {
					r = "full";
				}
			} else {
				r = "city_only";
			}
			m = B.createElement(qt, {
				popid: a.sdrpop_remote,
				detail: r,
			});
			u = B.createElement(qt, {
				popid: a.sdrpop_local,
				detail: r,
			});
		} else {
			m = B.createElement(qt, {
				popid: a.sdrpop_remote,
				detail: "city_only",
			});
		}
	}
	let d = null;
	if (r > 0) {
		d = B.createElement(
			"span",
			{
				className: w.PingReduced,
				title: (0, Localize)("#OverlayNetworkStatus_PingImprovedTooltip"),
			},
			" ",
			(0, Localize)("#OverlayNetworkStatus_PingImproved", r),
		);
	}
	const A = y.B7.BuildSteamURL("HelpFAQ", "1433-AD20-F11D-B71E");
	let p;
	let g;
	let h = "?";
	let C = "?";
	if (i) {
		if (i.packet_loss >= 0) {
			C = i.packet_loss.toString();
			g =
				i.packet_loss >= 5
					? w.Poor
					: i.packet_loss > 2
						? w.OK
						: i.packet_loss >= 1
							? w.Good
							: w.Great;
		}
		if (i.ping_ms >= 0) {
			h = i.ping_ms.toString();
		}
	}
	return B.createElement(
		"div",
		{
			className: w.NetworkStatus,
		},
		m &&
			B.createElement(
				"div",
				{
					className: w.NetworkStatusSDRServerInfo,
				},
				B.createElement(
					"span",
					{
						title: (0, Localize)("#OverlayNetworkStatus_ServerProtectedBySDR"),
					},
					B.createElement(ye.SDR, null),
				),
				LocalizeReact("#OverlayNetworkStatus_ConnectedToGameserverIn", m),
				":",
				B.createElement(
					"span",
					{
						className: A_2(w.PingMS, p),
						title: (0, Localize)("#OverlayNetworkStatus_PingTooltip"),
					},
					(0, Localize)("#OverlayNetworkStatus_Ping", h),
				),
				B.createElement(
					"span",
					{
						className: A_2(w.Loss, g),
						title: (0, Localize)("#OverlayNetworkStatus_LossTooltip"),
					},
					C,
					"%",
				),
			),
		u &&
			B.createElement(
				"div",
				{
					className: w.NetworkStatusRouteInfo,
				},
				u &&
					B.createElement(
						"span",
						null,
						" ",
						LocalizeReact("#OverlayNetworkStatus_ViaRelay", u),
					),
				d,
			),
		c &&
			B.createElement(
				"div",
				{
					className: w.NetworkStatusActiveConnections,
				},
				c,
			),
		B.createElement(
			"div",
			{
				className: w.IPShareStatus,
			},
			o,
			B.createElement(
				"span",
				{
					className: w.IPShareLearnMore,
					title: (0, Localize)(l),
					onClick: (e) => {
						GetOwningWindowForEvent(e).location.href = A;
					},
				},
				B.createElement(ye.Question, null),
			),
		),
		false,
	);
}
function Kt(e) {
	const { appid: t } = e;
	B.useEffect(() => {
		Pt.yC.Get().BeginAppSummaryUpdates(t);
		return () => Pt.yC.Get().EndAppSummaryUpdates(t);
	}, [t]);
	let r = $A(t);
	if (r) {
		return B.createElement(Yt, {
			summary: r,
		});
	} else {
		return null;
	}
}
function nr(e) {
	const { appid: t } = e;
	const r = OU(t);
	const { ownerWindow: n } = R7();
	return B.createElement(
		"div",
		{
			className: tr.DialogContents,
		},
		B.createElement(
			"div",
			{
				className: tr.LinkShareTitle,
			},
			"Invite a Friend to Play",
		),
		B.createElement(
			"div",
			{
				className: tr.Body,
			},
			r &&
				B.createElement(
					B.Fragment,
					null,
					B.createElement(
						"div",
						{
							className: tr.Description,
						},
						B.createElement(
							"div",
							null,
							"Share this QR code or the link below to invite a friend on Steam or any other participating platform to join the game.",
							B.createElement("br", null),
							B.createElement("br", null),
							"Your friend must own the game to join.",
						),
						B.createElement(
							"div",
							null,
							B.createElement(
								rr.rg,
								{
									className: tr.QRCode,
								},
								r,
							),
						),
					),
					B.createElement(
						"div",
						{
							className: tr.URLContainer,
						},
						B.createElement(
							"div",
							{
								className: tr.URLText,
							},
							r,
						),
						B.createElement(
							v.$n,
							{
								className: tr.LinkButton,
								onClick: () => {
									n.navigator.clipboard.writeText(r).catch((e) => {
										console.error("Failed to copy to clipboard:", e);
									});
								},
							},
							"Copy Link",
						),
					),
				),
		),
	);
}
const ar = ir;
function or(e) {
	const { nWarningSeconds: t = 300, className: r, ...n } = e;
	const [i, a] = B.useState(0);
	const [s, o] = B.useState(false);
	const l = Math.floor(i / 60 / 60);
	const c = Math.floor((i - l * 60 * 60) / 60);
	const m = i % 60;
	const u = l
		? `${l}:${c.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
		: `${c}:${m.toString().padStart(2, "0")}`;
	const d = B.useCallback((e) => {
		if (e > 1440) {
			e = 0;
		}
		a(e * 60);
	}, []);
	B.useEffect(
		() =>
			SteamClient.Parental.RegisterForParentalPlaytimeWarnings(d).unregister,
		[d],
	);
	const A = B.useCallback(() => {
		o(true);
	}, []);
	const p = B.useCallback(() => {
		o(false);
	}, []);
	$$(
		() => {
			a((e) => e - 1);
		},
		1000,
		[],
		i > 0,
	);
	if (i) {
		return B.createElement(
			x.Z,
			{
				onActivate: A,
				className: A_2(ar.ParentalPlaytime, r, i <= t && ar.Warning),
				...n,
			},
			(0, Localize)("#Parental_PlaytimeRemaining", u),
			s &&
				B.createElement(
					te.hM,
					{
						strTitle: (0, Localize)("#FamilyView_RequestPlaytime_Title"),
						popupWidth: 500,
						popupHeight: 350,
						onDismiss: p,
					},
					B.createElement(sr.db, {
						strDetails: "manual",
						onClose: p,
					}),
				),
		);
	} else {
		return null;
	}
}
const _r = B.lazy(() => require.e(7462).then(require.bind(require, 44216)));
function fr() {
	return $2().DesktopOverlay;
}
function br(e) {
	const { children: t } = e;
	(() => {
		const e = fr();
		B.useEffect(() => {
			e.EnterMinimalMode();
			return () => e.ExitMinimalMode();
		}, [e]);
	})();
	return B.createElement(B.Fragment, null, t);
}
function yr(e) {
	const { children: t } = e;
	const r = fr();
	if (q3(() => r.minimal_mode)) {
		return null;
	} else {
		return B.createElement(B.Fragment, null, t);
	}
}
export function $i(e) {
	const { gameid: t, width: r, height: n } = e;
	const i = $2();
	const a = (() => {
		const e = $2();
		return q3(() => e.DesktopOverlay.IsInitialized());
	})();
	const s = q3(() => i.DesktopOverlay.preview_pinned_mode);
	const o = _R(t);
	B.useEffect(() => {
		i.DesktopOverlay.Init();
		return () => i.DesktopOverlay.Shutdown();
	}, [i]);
	if (!a || !o) {
		return null;
	}
	const l = o.appid;
	return B.createElement(
		ge.b5,
		{
			ownerWindow: i.BrowserWindow,
		},
		B.createElement(
			"div",
			{
				className: A_2(w.Wrapper, s && w.PreviewPinnedView),
			},
			B.createElement(
				S.bj.Provider,
				{
					value: {
						width: r,
						height: n,
					},
				},
				B.createElement(
					Se.EO,
					{
						bCenterPopupsOnWindow: true,
						browserInfo: i.params.browserInfo,
						bRegisterManagersWithWindow: false,
					},
					B.createElement(Br, {
						appid: l,
					}),
				),
				B.createElement(
					Se.EO,
					{
						bCenterPopupsOnWindow: true,
						browserInfo: i.params.browserInfo,
						bOnlyPopups: true,
					},
					B.createElement($r, {
						appid: l,
					}),
					B.createElement(ie.k, {
						appid: l,
					}),
					B.createElement(Gt, {
						appid: l,
					}),
					B.createElement(ne.e, {
						bDesktopBanner: false,
					}),
					B.createElement(
						yr,
						null,
						B.createElement(vr, {
							appid: l,
						}),
						B.createElement(Ir, {
							gameID: t,
						}),
						B.createElement(Gr, {
							appid: l,
							overview: o,
						}),
						B.createElement(jr, {
							appid: l,
						}),
					),
				),
			),
		),
	);
}
function wr(e) {
	return B.useCallback(
		(t, r) => {
			const n = {
				bWebPage: true,
				appid: e,
				strDialog: t,
				eWebPageMode: ce.Sx.k_EActivateGameOverlayToWebPageMode_Modal,
				unRequestingAppID: e,
				steamidTarget: "0",
				eFlag: ce.SS.k_EOverlayToStoreFlag_None,
				strConnectString: "",
			};
			u.Q.AddWebPageRequest(n);
		},
		[e],
	);
}
const Br = Nr_2((e) => {
	const { appid: t } = e;
	const r = wr(t);
	const n = r(t);
	if (n.length == 0) {
		return null;
	}
	let i = n[0];
	let a = null;
	switch (i.strDialog) {
		case "friendadd": {
			a = B.createElement(s.eu, {
				request: i,
			});
			break;
		}
		case "friendremove": {
			a = B.createElement(s.Dy, {
				request: i,
			});
			break;
		}
		case "friendrequestaccept": {
			a = B.createElement(s.II, {
				request: i,
			});
			break;
		}
		case "friendrequestignore": {
			a = B.createElement(s.C, {
				request: i,
			});
			break;
		}
		case "lobbyinvite": {
			a = B.createElement(s.Id, {
				request: i,
			});
			break;
		}
		case "remoteplaytogetherinvite": {
			a = B.createElement(s.om, {
				request: i,
			});
			break;
		}
		case "lobbyinviteconnectstring": {
			a = B.createElement(s.fR, {
				request: i,
			});
			break;
		}
		case "asyncnotificationsrequested": {
			a = B.createElement(s.fe, {
				request: i,
			});
			break;
		}
		case "requestplaytime": {
			a = B.createElement(s.SG, {
				request: i,
			});
		}
	}
	if (a) {
		return B.createElement(br, null, a);
	} else {
		return B.createElement(
			br,
			null,
			n.map((e) => {
				if (e.bWebPage) {
					let n = () => u.Q.RemoveDialogRequest(e);
					return B.createElement(Le.f, {
						appid: t,
						key: `OverlayBrowser_${t}_${e.strDialog}`,
						strName: `OverlayBrowser_${t}_${e.strDialog}`,
						strInitialURL: e.strDialog,
						bCanChangeURL: false,
						bTemporary: true,
						onClose: n,
						onNewTab: r,
						bUseSavedSettings: false,
						bUseSavedDimensions: false,
					});
				}
				return null;
			}),
		);
	}
});
const vr = Nr_2((e) => {
	const { appid: t } = e;
	const r = fr();
	const n = q3(() => r.overlay_active);
	const i = q3(() => !d.Mf.AppsWithTouchMenusEnabled.includes(t));
	const a = q3(() => d.Mf.ActiveTouchMenus.some((e) => e.MenuState?.bActive));
	if (i || n) {
		return null;
	} else {
		return B.createElement(o.EB, {
			appID: t,
			bVisible: a,
		});
	}
});
const Ir = Nr_2((e) => {
	const { gameID: t } = e;
	const r = _R(t);
	const i = $2().DesktopOverlay;
	const a = br_2();
	const s = useBGameRecordingEnabledForGame(t);
	const [o] = VI("g_background_mode");
	const l = Y2() || o === 0;
	let c = A_2(w.TopSectionMiddle, l && w.ShowGameLogo);
	const [m, u] = useState();
	const d = B.useCallback((e) => {
		u(e.contentRect.width * 0.8);
	}, []);
	const A = wY(d);
	useEffect(() => {
		if (l) {
			i.SetFnChangeTimelineExpansion(() => a.Settings("GameRecording"));
		}
	}, [l, a, i]);
	return B.createElement(
		"div",
		{
			className: w.TopSection,
		},
		B.createElement(Mr, {
			app: r,
		}),
		B.createElement(
			"div",
			{
				ref: A,
				className: c,
			},
			l &&
				B.createElement(n.z, {
					eAssetType: 2,
					app: r,
					backgroundType: "transparent",
				}),
			!l &&
				BGameRecordingFeatureEnabled() &&
				s &&
				B.createElement(cn, {
					gameID: r.GetGameID(),
					timelineWidth: m,
				}),
		),
		B.createElement(
			"div",
			{
				className: w.TopSectionRightSide,
			},
			B.createElement(Er, {
				appid: r.appid,
			}),
			B.createElement(Kt, {
				appid: r.appid,
			}),
		),
	);
});
function Er(e) {
	const { appid: t } = e;
	const [r] = VI("overlay_key");
	const n = q3(() => p.tw.GetAppOverviewByAppID(t));
	const i = B.useCallback(() => {
		SteamClient.Overlay.SetOverlayState(n.gameid, me.I5.Hidden);
	}, [n]);
	return B.createElement(
		x.Z,
		{
			className: w.BackToGame,
		},
		B.createElement(
			"div",
			{
				className: w.TextContainer,
			},
			B.createElement(
				"div",
				{
					className: w.GameName,
				},
				(0, Localize)("#AppOverlay_BackToGame", n?.display_name),
			),
			B.createElement(
				"div",
				{
					className: w.KBShortcut,
				},
				`(${r?.display_name})`,
			),
		),
		B.createElement(v.$n, {
			className: w.BackToGameBtn,
			onClick: i,
			svgicon: () => B.createElement(ye.Close, null),
		}),
	);
}
function Mr(e) {
	const { app: t } = e;
	const r = hj();
	const n = (() => {
		const e = j1();
		return LocalizeDateHumanReadable(e.getTime() / 1000);
	})();
	const i = fr();
	const a = q3(() => i.time_session_start);
	const [s, o] = B.useState("");
	const c = b.oy.BIsStreamingRemotePlayTogetherGame(t.appid)
		? "#AppOverlay_StopStreaming"
		: "#AppOverlay_ExitGame";
	B.useEffect(() => {
		const e = () => {
			const e = GetUnixTime();
			const t = Math.floor((e - a) / 60);
			const r = (0, Localize)(
				"#AppOverlay_Playtime_ThisSession",
				(0, Localize)("#Played_Minutes", t),
			);
			o(r);
		};
		e();
		let t = window.setInterval(e, 60000);
		return () => window.clearInterval(t);
	}, [a]);
	return B.createElement(
		"div",
		{
			className: w.TimeStats,
		},
		B.createElement(
			"div",
			{
				className: w.TimeRow,
			},
			B.createElement(
				"div",
				{
					className: w.CurrentTime,
				},
				r,
			),
			B.createElement(
				"div",
				{
					className: w.BatteryIcon,
				},
				" ",
				B.createElement(l.ZN, {
					onClick: undefined,
				}),
			),
		),
		B.createElement(
			"div",
			{
				className: w.CurrentDate,
			},
			n,
		),
		B.createElement(
			"div",
			{
				className: w.PlaytimeCurrentSession,
			},
			s,
		),
		B.createElement(Tr, null),
		B.createElement(or, {
			className: w.PlaytimeCurrentSession,
		}),
		B.createElement(
			v.$n,
			{
				className: w.ExitGameBtn,
				onClick: (e) => {
					const r = jy("Stop", t, "selected", 100, GetOwningWindowForEvent(e));
					if (r) {
						r();
					}
				},
			},
			(0, Localize)(c),
		),
	);
}
function Tr(e) {
	const t = fr();
	const r = r2(t);
	if (!r || r.unSecondsAllowed == 0) {
		return null;
	}
	let n = Math.max(0, r.unSecondsAllowed - r.unSecondsPlayed);
	let i = (0, Localize)(
		"#AppOverlay_TimedTrial_Remaining",
		LocalizeTimeSince(n, {
			eSuffix: ETimeSinceSuffix.Remaining,
			bForceSingleUnits: false,
			bHighGranularity: false,
		}),
	);
	return B.createElement(
		"div",
		{
			className: w.TimeTrialRemaining,
		},
		i,
	);
}
export function ty(e) {
	const t = fr();
	return B.useCallback(
		(r) => {
			t.SetPopupForWindow(e, r);
		},
		[t, e],
	);
}
export function nv(e, t, r, n, i, a, s) {
	return B.useCallback(
		(o) => {
			const l = wm(e, t, r, n, i);
			const {
				screenWidth: c,
				screenHeight: m,
				usableWidth: u,
				dimensions: d,
			} = l;
			if (o.strRestoreDetails) {
				o.dimensions = d;
				o.minWidth = n;
				o.minHeight = i;
				return o;
			}
			let A = {
				...d,
			};
			if (a !== undefined) {
				A.maxWidth = a;
			}
			if (s !== undefined) {
				A.maxWidth = s;
			}
			let p = e.DesktopOverlay.GetPopupWindows();
			const g = 150;
			let h = m - g;
			let C = [];
			for (let e = 0; e < u; ++e) {
				let t = [];
				for (let e = 0; e < h; ++e) {
					t[e] = 1;
				}
				C[e] = t;
			}
			let _ = d.left;
			let f = d.left + u;
			let b = m;
			for (let e = 0; e < p.length; ++e) {
				let t = p[e].overlayPopupCachedDimensions;
				if (t) {
					let e = Math.max(t.x, _);
					let r = Math.min(t.x + t.width, f);
					let n = Math.max(t.y, 150);
					let i = Math.min(t.y + t.height, b);
					for (let t = e; t < r; ++t) {
						let e = t - _;
						for (let t = n; t < i; ++t) {
							let r = t - 150;
							C[e][r] = 0;
						}
					}
				}
			}
			let y = [];
			for (let e = 0; e < h; ++e) {
				for (let t = 0; t < u; ++t) {
					y[t] ||= [];
					let r = C[t][e];
					if (e > 0) {
						r += y[t][e - 1];
					}
					if (t > 0) {
						r += y[t - 1][e];
					}
					if (t > 0 && e > 0) {
						r -= y[t - 1][e - 1];
					}
					y[t][e] = r;
				}
			}
			const S = (e, t, r, n) => {
				let i = 0;
				let a = 0;
				let s = 0;
				let o = 0;
				if (e > 0 && t > 0) {
					i = y[e - 1][t - 1];
				}
				if (t > 0) {
					a = y[e + r - 1][t - 1];
				}
				if (e > 0) {
					s = y[e - 1][t + n - 1];
				}
				o = y[e + r - 1][t + n - 1];
				return o + i - a - s;
			};
			let w = d.left;
			let B = false;
			let v = d.width * d.height;
			for (let e = 0; e < h && e + d.height < h && !B; ++e) {
				for (let t = 0; t < u && t + d.width < u; ++t) {
					if (S(t, e, d.width, d.height) >= v) {
						A.left = t + w;
						A.top = e + 150;
						B = true;
						break;
					}
				}
			}
			if (!B) {
				A.left = d.left;
				A.top = g;
			}
			o.minWidth = l.minWidth;
			o.minHeight = l.minHeight;
			o.maxWidth = a;
			o.maxHeight = s;
			o.dimensions = A;
			return o;
		},
		[e, t, r, n, i, a, s],
	);
}
function Dr(e) {
	const { windowType: t, onToggleOn: r, ...n } = e;
	let i = B.useRef(undefined);
	const a = fr();
	const s = q3(() => a.BWindowVisible(t));
	const o = B.useCallback(() => {
		if (a.ToggleWindowVisibility(t) && r) {
			r();
		}
	}, [a, t, r]);
	const l = B.useCallback(() => {
		if (i.current == 0) {
			i.current = window.setTimeout(() => {
				if (a.BWindowVisible(t)) {
					let e = a.GetPopupForWindow(t);
					if (e) {
						e.SteamClient.Window.BringToFront();
					}
				}
			}, 250);
		}
	}, [a, t]);
	const c = B.useCallback(() => {
		if (i.current != 0) {
			window.clearTimeout(i.current);
			i.current = 0;
		}
	}, []);
	return B.createElement(Fr, {
		windowType: t,
		onToggle: o,
		bToggled: s,
		onMouseEnter: l,
		onMouseLeave: c,
		...n,
	});
}
function Nr(e) {
	const t = fr();
	const r = q3(() => t.has_minimized_windows);
	const n = B.useCallback(() => {
		if (r) {
			t.RestoreMinimizedWindows();
		} else {
			t.MinimizeAllWindows();
		}
	}, [t, r]);
	const i = Hr();
	const a = (0, Localize)(
		r
			? "#AppOverlay_Toolbar_RestoreMinimizeWindows"
			: "#AppOverlay_Toolbar_MinimizeWindows",
	);
	const s = r
		? B.createElement(ye.OverlayRestore, null)
		: B.createElement(ye.Minimize, null);
	if (i) {
		return B.createElement(
			"div",
			{
				className: w.ToolbarButtonAndLabel,
			},
			B.createElement(
				v.$n,
				{
					className: A_2(w.ToolbarButton),
					svgicon: () => s,
					onClick: n,
				},
				B.createElement(
					"span",
					{
						className: w.ToolbarToolTip,
					},
					a,
				),
			),
		);
	} else {
		return B.createElement(
			ve.m9,
			{
				toolTipContent: B.createElement(
					"div",
					{
						className: w.ToolbarToolTip,
					},
					" ",
					a,
					" ",
				),
				direction: "bottom",
				nBodyAlignment: 0.5,
				nBodyDistance: 0,
				nDelayShowMS: 25,
			},
			B.createElement(v.$n, {
				className: A_2(w.ToolbarButton),
				svgicon: () => s,
				onClick: n,
			}),
		);
	}
}
const Fr = B.forwardRef((e, t) => {
	const {
		windowType: r,
		bToggled: n,
		onToggle: i,
		onMouseEnter: a,
		onMouseLeave: s,
		disabled: o,
		className: l,
		hoveringContent: c,
		pulse: m,
	} = e;
	const u = f_2(r);
	const d = hb(u.parentalFeature);
	const A = Hr();
	const p = useRef(undefined);
	const g = Ue_2(p, t);
	if (!uA(r)) {
		return null;
	}
	const h =
		(c || m) &&
		B.createElement(
			he.g,
			{
				bTopmost: true,
				bEnablePointerEvents: true,
				target: p.current,
				direction: "top",
				nBodyDistance: 18,
			},
			c,
			m &&
				B.createElement(cr.kP, {
					radius: 5,
				}),
		);
	if (A) {
		return B.createElement(
			"div",
			{
				className: w.ToolbarButtonAndLabel,
				ref: g,
			},
			B.createElement(
				v.$n,
				{
					className: A_2(w.ToolbarButton, l, n && w.Toggled),
					svgicon: u.svgicon,
					onClick: i,
					disabled: o || d,
					onMouseEnter: a,
					onMouseLeave: s,
				},
				B.createElement(
					"span",
					{
						className: w.ToolbarToolTip,
					},
					(0, Localize)(u.tooltipToken),
				),
			),
			h,
		);
	} else {
		return B.createElement(
			ve.m9,
			{
				toolTipContent: B.createElement(
					"div",
					{
						className: w.ToolbarToolTip,
					},
					(0, Localize)(u.tooltipToken),
				),
				direction: "bottom",
				nBodyAlignment: 0.5,
				nBodyDistance: 0,
				nDelayShowMS: 25,
			},
			B.createElement(v.$n, {
				className: A_2(w.ToolbarButton, l, n && w.Toggled),
				svgicon: u.svgicon,
				onClick: i,
				disabled: o || d,
				onMouseEnter: a,
				onMouseLeave: s,
				ref: g,
			}),
			h,
		);
	}
});
const Gr = Nr_2((e) => {
	const { appid: t, overview: r } = e;
	return B.createElement(
		B.Fragment,
		null,
		B.createElement(_t, {
			appid: t,
		}),
		B.createElement(fn, {
			appid: t,
		}),
		B.createElement(sn, {
			appid: t,
		}),
		B.createElement(tn, {
			appid: t,
		}),
		B.createElement(gn, {
			appid: t,
		}),
		B.createElement(_n, {
			appid: t,
		}),
		B.createElement(un, {
			appid: t,
		}),
		B.createElement(pn, {
			overview: r,
		}),
		B.createElement(Sn, {
			appid: t,
		}),
		B.createElement(bn, {
			appid: t,
		}),
		B.createElement(Cn, {
			appid: t,
		}),
		B.createElement(yn, {
			appid: t,
		}),
		B.createElement(rn, {
			appid: t,
		}),
		B.createElement(nn, {
			appid: t,
		}),
		B.createElement(an, {
			appid: t,
		}),
		B.createElement(Pe.u, null),
		B.createElement(Ne.T, null),
		B.createElement(De.Y, null),
		B.createElement(on, {
			appid: t,
		}),
		B.createElement(mn, {
			appid: t,
		}),
		B.createElement(ln, {
			appid: t,
		}),
		B.createElement(wn, {
			appid: t,
		}),
	);
});
const Or = Nr_2((e) => {
	const { appid: t } = e;
	const r = tk().length > 0;
	return B.createElement(Fr, {
		windowType: ee.w9.Controller,
		onToggle: () => SteamClient.Apps.ShowControllerConfigurator(t),
		bToggled: false,
		disabled: !r,
	});
});
const Pr = Nr_2((e) => {
	const t = xj("steam://open/settings/ingame");
	return B.createElement(Fr, {
		windowType: ee.w9.Settings,
		onToggle: () => t(),
		bToggled: false,
	});
});
const Lr = Nr_2((e) => {
	const { app: t } = e;
	const r = fr();
	const n = q3(() => r.timeline_expanded);
	const i = B.useCallback(
		() => r.ChangeTimelineExpansion(!r.timeline_expanded),
		[r],
	);
	const { introStateQuery: a, markLinkDismissed: s } = O_2();
	const o = a.data && !a.data.rtSeen && !a.data.rtLinkDismissed;
	const l = useBGameRecordingEnabledForGame(t.gameid);
	return B.createElement(Fr, {
		windowType: ee.w9.Timeline,
		onToggle: i,
		bToggled: n,
		hoveringContent: o
			? B.createElement(zr, {
					onDismiss: s,
				})
			: undefined,
		disabled: !l,
	});
});
function zr(e) {
	const { onDismiss: t } = e;
	const r = br_2();
	return B.createElement(
		xr,
		{
			onRequestClose: t,
		},
		B.createElement(
			"div",
			{
				className: w.NewBadge,
			},
			(0, Localize)("#RecordingOverlayHint_New"),
		),
		B.createElement(
			Ur,
			null,
			(0, Localize)("#RecordingIntro_Short_FeatureName"),
		),
		B.createElement(Wr, null, (0, Localize)("#RecordingOverlayHint_Desc")),
		B.createElement(
			v.jn,
			{
				onClick: () => {
					r.Settings("GameRecording");
					t();
				},
			},
			(0, Localize)("#RecordingOverlayHint_GetStarted"),
		),
	);
}
function xr(e) {
	const { onRequestClose: t, children: r, hideArrow: n } = e;
	return B.createElement(
		"div",
		{
			className: A_2(w.TimelineHintContainer),
		},
		B.createElement(
			"div",
			{
				className: w.Content,
			},
			B.createElement(
				"div",
				{
					className: w.CloseButton,
					onClick: t,
				},
				B.createElement(W.sED, null),
			),
			r,
		),
		!n &&
			B.createElement("div", {
				className: w.Triangle,
			}),
	);
}
function Ur(e) {
	return B.createElement(
		"div",
		{
			className: w.ToolbarButtonHintTitle,
		},
		e.children,
	);
}
function Wr(e) {
	return B.createElement(
		"div",
		{
			className: w.ToolbarButtonHintText,
		},
		e.children,
	);
}
function Vr(e) {
	return B.createElement(
		"div",
		{
			className: w.ToolbarButtonHintActions,
		},
		e.children,
	);
}
function Hr() {
	const [e] = VI("overlay_toolbar_list_view");
	return e;
}
const jr = Nr_2((e) => {
	const { appid: t } = e;
	const r = Co(t);
	const n = T_2(t);
	const i = (() => {
		const [e] = VI("overlay_toolbar_list_view");
		if (e) {
			return w.LocationLeft;
		} else {
			return w.LocationBottom;
		}
	})();
	const { rTabs: a } = W6();
	const s = !q_2();
	const o = $2();
	const l = SO(o?.BrowserWindow);
	return B.createElement(
		"div",
		{
			className: w.ToolbarMaxWidthContainer,
		},
		B.createElement(
			"div",
			{
				className: A_2(w.ToolbarContainer, i),
			},
			s &&
				B.createElement(
					"div",
					{
						className: w.Toolbar,
					},
					a.map((e) => {
						if (!e.visible) {
							return null;
						}
						const t = {
							app: r,
							details: n,
							window: e.window,
						};
						if (e.window == ee.w9.Browser) {
							return B.createElement(Qr, {
								key: e.window,
								windowWidth: l,
								...t,
							});
						} else if (e.window == ee.w9.Controller) {
							return B.createElement(Zr, {
								key: e.window,
								windowWidth: l,
								...t,
							});
						} else if (e.window == ee.w9.Screenshots) {
							return B.createElement(Yr, {
								key: e.window,
								windowWidth: l,
								...t,
							});
						} else if (e.window == ee.w9.MultiplayerSessionLinkShare) {
							return B.createElement(Jr, {
								key: e.window,
								...t,
							});
						} else {
							return B.createElement(qr, {
								key: e.window,
								...t,
							});
						}
					}),
					l > 900 &&
						BGameRecordingFeatureEnabled() &&
						B.createElement(Lr, {
							app: r,
						}),
					B.createElement(Xr, {
						key: ee.w9.Settings,
						app: r,
						details: n,
						window: ee.w9.Settings,
						windowWidth: l,
					}),
					B.createElement(Nr, null),
				),
		),
	);
});
function qr(e) {
	const { app: t, details: r, window: n, ...i } = e;
	const a = f_2(n);
	const s = a.buttonVisible?.(t, r) ?? true;
	const o =
		e.bDisabled !== undefined
			? e.bDisabled
			: (a.buttonDisabled?.(t, r) ?? false);
	if (s) {
		return B.createElement(Dr, {
			windowType: n,
			className: n,
			disabled: o,
			...i,
		});
	} else {
		return null;
	}
}
function Qr(e) {
	const t = fr();
	const [r] = VI("web_browser_home");
	return qr({
		onToggleOn: B.useCallback(() => {
			if (t.web_requests.length == 0) {
				t.AddWebPageRequest(r);
			}
		}, [t, r]),
		...e,
	});
}
function Zr(e) {
	if (e.windowWidth <= 1280) {
		return B.createElement(Or, {
			appid: e.app.appid,
		});
	} else {
		return B.createElement(qr, {
			...e,
		});
	}
}
function Yr(e) {
	const t = fr();
	const r = q3(() => t.m_bShowClipSavedHint);
	const n = xj(`steam://open/screenshots/${e.app.appid}`);
	if (e.windowWidth <= 900) {
		return B.createElement(Fr, {
			windowType: ee.w9.Screenshots,
			onToggle: n,
			bToggled: false,
			pulse: r,
		});
	} else {
		return B.createElement(qr, {
			...e,
			pulse: r,
		});
	}
}
export function Tk(e) {
	const { onRequestClose: t, onViewClip: r } = e;
	const n = f_2(ee.w9.Screenshots).svgicon;
	return B.createElement(
		xr,
		{
			onRequestClose: t,
			hideArrow: true,
		},
		B.createElement(Ur, null, (0, Localize)("#Overlay_ClipHint_Title")),
		B.createElement(Wr, null, (0, Localize)("#Overlay_ClipHint_1")),
		B.createElement(
			Wr,
			null,
			LocalizeReact(
				"#Overlay_ClipHint_2",
				B.createElement(
					"span",
					{
						style: {
							fontWeight: 600,
						},
					},
					(0, Localize)("#Overlay_ClipHint_2_Link"),
				),
				B.createElement(
					"span",
					{
						style: {
							width: "14px",
							height: "14px",
							display: "inline-block",
						},
					},
					B.createElement(n, null),
				),
			),
		),
		B.createElement(
			Vr,
			null,
			B.createElement(
				v.jn,
				{
					onClick: r,
				},
				(0, Localize)("#Overlay_ClipHint_View"),
			),
			B.createElement(
				v.$n,
				{
					onClick: t,
				},
				(0, Localize)("#Button_Got_It"),
			),
		),
	);
}
function Xr(e) {
	if (e.windowWidth <= 900) {
		return B.createElement(Pr, null);
	} else {
		return B.createElement(qr, {
			...e,
		});
	}
}
function Jr(e) {
	const t = OU(e.app.appid);
	if (t === undefined) {
		return null;
	} else {
		return qr({
			bDisabled: !t,
			...e,
		});
	}
}
const $r = Nr_2((e) => {
	const { appid: t } = e;
	const [r, n] = B.useState(null);
	const i = B.useRef(undefined);
	const a = B.useRef(undefined);
	const s = B.useRef(undefined);
	s.current ||= new c.X4();
	const o = B.useCallback(
		(e, t) => {
			const r = "steam://checkout_return/paypal_cancel/";
			const n = t.indexOf(r);
			if (n != -1) {
				const e = t.substring(n + 38);
				let r = JSON.stringify({
					action: "paypal_cancel",
					transid: e,
				});
				i.current.Browser.PostMessage("Checkout", r);
			}
		},
		[i],
	);
	const l = B.useCallback(
		(e, t) => {
			const r = "steam://checkout_return/paypal_success/";
			const n = t.indexOf(r);
			if (n != -1) {
				const e = t.substring(n + 39);
				let r = JSON.stringify({
					action: "paypal_success",
					transid: e,
				});
				i.current.Browser.PostMessage("Checkout", r);
			}
		},
		[i],
	);
	B.useEffect(() => {
		let e = [];
		e.push(
			SteamClient.URL.RegisterForRunSteamURL(
				"checkout_return/paypal_cancel",
				o,
			),
		);
		e.push(
			SteamClient.URL.RegisterForRunSteamURL(
				"checkout_return/paypal_success",
				l,
			),
		);
		return () => e.forEach((e) => e.unregister());
	}, [o, l]);
	const m = wr(t);
	const u = B.useCallback(
		(e) => {
			if (e.indexOf("steam://close/authorize") == 0) {
				s.current.AuthorizeMicroTxn(true);
				return true;
			}
			if (e.indexOf("steam://close/cancel") == 0) {
				s.current.AuthorizeMicroTxn(false);
				return true;
			}
			{
				const t = "steam://openexternalforpid/";
				let r = e.indexOf(t);
				if (r != -1) {
					const n = e.substring(r + t.length);
					r = n.indexOf("/");
					if (r != -1) {
						const e = n.substring(r + 1);
						m(e, true);
						return true;
					}
				}
			}
			return false;
		},
		[m],
	);
	const d = B.useCallback(
		(e) => {
			i.current = e;
			if (e) {
				e.AddSteamURLCallback(u);
				return () => e?.RemoveSteamURLCallback(u);
			} else {
				return () => {};
			}
		},
		[u],
	);
	const A = B.useCallback(() => {
		n(null);
		s.current.AuthorizeMicroTxn(false);
		SteamClient.Overlay.SetOverlayState(t.toString(), me.I5.Hidden);
		SteamClient.OpenVR?.VROverlay.HideDashboard();
	}, [t]);
	const p = B.useCallback(
		(e, r, i, a) => {
			if (e == t) {
				s.current.InitMicroTxnAuth(e, r, i);
				n(a);
				SteamClient.Overlay.SetOverlayState(t.toString(), me.I5.Overlay);
			}
		},
		[t, n],
	);
	const g = B.useCallback(
		(e, r) => {
			if (e == t) {
				if (
					r == s.current.GetTransID() ||
					!s.current.GetTransID() ||
					s.current.GetTransID() == ce.kF
				) {
					A();
				}
			}
		},
		[t, A],
	);
	const h = B.useCallback(() => {
		if (s.current.GetTransID() != ce.kF) {
			if (a.current) {
				pg(
					B.createElement(te.o0, {
						strTitle: (0, Localize)("#Overlay_MicroTxnCancelDlgTitle"),
						strDescription: (0, Localize)("#Overlay_MicroTxnCancelDlgText"),
						strOKButtonText: (0, Localize)("#Overlay_MicroTxnCancelDlgOK"),
						strCancelButtonText: (0, Localize)(
							"#Overlay_MicroTxnCancelDlgCancel",
						),
						onOK: A,
						onCancel: () => i.current.Browser.SetVisible(true),
					}),
					a.current,
				);
				i.current.Browser.SetVisible(false);
			}
		} else {
			A();
		}
	}, [A]);
	B.useEffect(() => {
		let e = SteamClient.Overlay.RegisterForMicroTxnAuth(p);
		let t = SteamClient.Overlay.RegisterForMicroTxnAuthDismiss(g);
		return () => {
			e.unregister();
			t.unregister();
		};
	}, [p, g]);
	const C = B.useCallback(
		(e, t) => {
			m(e, t);
		},
		[m],
	);
	if (r) {
		return B.createElement(
			br,
			null,
			B.createElement(Le.f, {
				key: r,
				appid: t,
				strName: `MTXOverlayBrowser_${t}_${s.current.GetTransID()}`,
				strInitialURL: r,
				bCanChangeURL: false,
				bTemporary: true,
				onClose: h,
				onNewTab: C,
				refBrowserManager: d,
				refPopup: a,
				bUseSavedSettings: false,
				bUseSavedDimensions: false,
			}),
		);
	} else {
		return null;
	}
});
function en(e) {
	const {
		appid: t,
		windowType: r,
		strURL: n,
		bCanChangeURL: i,
		bPinnable: a,
	} = e;
	const s = fr();
	const o = q3(() => s.BWindowVisible(r));
	const l = ty(r);
	const c = B.useCallback(() => {
		s.SetWindowVisibility(r, ee.tc.Closed);
	}, [s, r]);
	const m = B.useCallback(
		(e, t) => {
			s.AddWebPageRequest(e, t);
		},
		[s],
	);
	let u = dn(r);
	if (!a) {
		u = {};
	}
	if (o) {
		return B.createElement(Le.f, {
			appid: t,
			refPopup: l,
			strName: `OverlayBrowser_${r.toString()}`,
			strInitialURL: n,
			bCanChangeURL: i,
			bTemporary: false,
			onClose: c,
			onNewTab: m,
			bUseSavedSettings: true,
			bUseSavedDimensions: true,
			pinnedProps: u,
		});
	} else {
		return null;
	}
}
function tn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.Settings;
	const i = q3(() => r.settings_page);
	const a = q3(() => r.BWindowVisible(n));
	const s = ty(n);
	const o = nv($2(), 850, 696);
	const l = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (a) {
		return B.createElement(
			S.rG,
			{
				refPopup: s,
				strName: "Settings",
				className: A_2(w.SettingsModalRoot, w.NoTitlebarSpacer),
				bFitToContent: true,
				updateParamsBeforeShow: o,
				onClose: l,
				bUseSavedDimensions: true,
				eCreationFlags: de.Wf.IgnoreSavedSize,
				titleBarClassName: w.SettingsTitleBar,
			},
			B.createElement(ae.bB, {
				initialRoute: i,
				hideTopBar: true,
			}),
		);
	} else {
		return null;
	}
}
function rn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.Broadcast;
	const a = aS(1, 1);
	const s = iZ();
	const o = bG("SteamIDBroadcastPage", s.strSteamID);
	const [l, c] = B.useState();
	const m = l?.bIsBroadcasting || l?.nRequests > 0;
	B.useEffect(() => {
		const e = SteamClient.Broadcast.RegisterForBroadcastStatus(c);
		return () => e.unregister();
	}, []);
	B.useEffect(() => {
		r.SetWindowVisibility(n, m ? ee.tc.Visible : ee.tc.Closed);
	}, [r, n, m]);
	const u = B.useCallback(() => {
		r.SetWindowVisibility(ee.w9.BroadcastChat, ee.tc.Visible);
	}, [r]);
	if (m) {
		return B.createElement(
			S.rG,
			{
				strName: "Broadcast",
				bUseSavedDimensions: true,
				bFitToContent: true,
				updateParamsBeforeShow: a,
				eCreationFlags: de.Wf.IgnoreSavedSize,
			},
			B.createElement(
				"div",
				{
					className: w.OverlayBroadcast,
				},
				B.createElement(
					"div",
					{
						className: w.Title,
					},
					(0, Localize)("#BroadcastControl_Title"),
				),
				B.createElement(
					"div",
					{
						className: w.ViewerCount,
					},
					LocalizePlural("#BroadcastControl_Viewers", l?.nViewers || 0),
				),
				B.createElement(
					"div",
					{
						className: w.Buttons,
					},
					B.createElement(
						v.$n,
						{
							onClick: () => o(),
						},
						(0, Localize)("#BroadcastControl_Button_Watch"),
					),
					B.createElement(
						v.$n,
						{
							onClick: u,
						},
						(0, Localize)("#BroadcastControl_Button_OpenChat"),
					),
					B.createElement(
						v.$n,
						{
							onClick: () => r.ShowSettings("Broadcast"),
						},
						(0, Localize)("#BroadcastControl_Button_Settings"),
					),
					B.createElement(
						v.$n,
						{
							onClick: () => SteamClient.Broadcast.StopBroadcasting(),
						},
						(0, Localize)("#BroadcastControl_Button_StopBroadcast"),
					),
				),
			),
		);
	} else {
		return null;
	}
}
function nn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.BroadcastChat;
	const i = q3(() => r.BWindowVisible(n));
	const a = nv($2(), 400, 150, 400, 150);
	const s = iZ();
	const [o, l] = B.useState();
	const c = o?.bIsBroadcasting;
	B.useEffect(() => {
		const e = SteamClient.Broadcast.RegisterForBroadcastStatus(l);
		return () => e.unregister();
	}, []);
	B.useEffect(() => {
		r.SetWindowVisibility(n, c ? ee.tc.Visible : ee.tc.Closed);
	}, [r, n, c]);
	const m = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (c && i) {
		return B.createElement(
			S.rG,
			{
				strName: "BroadcastChat",
				title: (0, Localize)("#BroadcastChat_Title_Viewers", o?.nViewers),
				updateParamsBeforeShow: a,
				bUseSavedDimensions: true,
				onClose: m,
			},
			B.createElement(
				"div",
				{
					className: w.OverlayBroadcastChat,
				},
				B.createElement(le.I, {
					steamID: s.strSteamID,
					broadcastID: o.broadcastid,
					watchLocation: 14,
					emoticonStore: g.Nb.EmoticonStore,
				}),
			),
		);
	} else {
		return null;
	}
}
function an(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.BroadcastFirstTime;
	const i = q3(() => r.BWindowVisible(n));
	const a = aS(400, 450, 400, 450);
	const [s, o] = B.useState();
	const l = TT(s);
	const c = Co(e.appid);
	B.useEffect(() => {
		const e = SteamClient.Messaging.RegisterForMessages(
			"Broadcast",
			(e, t, i) => {
				if (t == "ShowFirstTime") {
					r.SetWindowVisibility(n, ee.tc.Visible);
					o(new Ce.b(i));
				}
			},
		);
		return () => e.unregister();
	}, [r, n]);
	const m = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (i && l && c) {
		return B.createElement(
			S.rG,
			{
				strName: "BroadcastFirstTime",
				title: (0, Localize)("#BroadcastFirstTime_Title"),
				updateParamsBeforeShow: a,
				bUseSavedDimensions: true,
				onClose: m,
			},
			B.createElement(D, {
				overview: c,
				requestingUserSteamID: s,
				onClose: m,
			}),
		);
	} else {
		return null;
	}
}
function sn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.SoundtrackPlayer;
	const i = q3(() => r.BWindowVisible(n));
	const a = ty(n);
	const s = nv($2(), 278, 169);
	const o = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (i) {
		return B.createElement(
			S.rG,
			{
				refPopup: a,
				strName: "SoundtrackPlayer",
				updateParamsBeforeShow: s,
				bFitToContent: true,
				onClose: o,
				bUseSavedDimensions: true,
				eCreationFlags: de.Wf.IgnoreSavedSize,
			},
			B.createElement(Q, null),
		);
	} else {
		return null;
	}
}
function on(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.Timer;
	const i = q3(() => r.BWindowVisible(n));
	const a = ty(n);
	const s = nv($2(), 304, 200);
	const o = dn(n);
	const l = ((e) => {
		const t = fr();
		const r = q3(() => t.BWindowFlipped(e));
		const n = B.useCallback(() => {
			t.SetWindowFlipped(e, !r);
		}, [t, e, r]);
		return {
			onToggleFlip: n,
			bFlipped: r,
		};
	})(n);
	const c = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	const m = q3(() => r.clock_settings);
	const u = B.useCallback((e) => r.SetClockSettings(e), [r]);
	if (i) {
		return B.createElement(
			S.rG,
			{
				...o,
				...l,
				refPopup: a,
				strName: "OverlayTimer",
				updateParamsBeforeShow: s,
				bFitToContent: true,
				onClose: c,
				bUseSavedDimensions: true,
				eCreationFlags: de.Wf.IgnoreSavedSize,
			},
			B.createElement(wt, {
				appid: t,
				bShowPinnedView: o.bShowPinnedView,
				flipped: l.bFlipped,
				settings: m,
				setSettings: u,
			}),
		);
	} else {
		return null;
	}
}
function ln(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.RemotePlayTogether;
	const i = q3(() => r.BWindowVisible(n));
	const a = ty(n);
	const s = nv($2(), 512, 834, 512, 420, 512, undefined);
	const o = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (i) {
		return B.createElement(
			S.rG,
			{
				refPopup: a,
				strName: "OverlayRemotePlayTogether",
				updateParamsBeforeShow: s,
				onClose: o,
				bUseSavedDimensions: true,
			},
			B.createElement(er.br, null),
		);
	} else {
		return null;
	}
}
function cn(e) {
	const { gameID: t, timelineWidth: r } = e;
	const n = ty(ee.w9.Timeline);
	const [i, a] = useState(null);
	useHandleTimelineOverlayNotifications(t);
	const s = $2();
	const o = q3(() => s.params);
	const l = o.nScreenWidth;
	const c = o.nScreenHeight;
	B.useEffect(() => {
		if (i && l && c) {
			i.SteamClient.Window.ResizeTo(l, c, true);
		}
	}, [c, l, i]);
	let m = B.useCallback(
		(e) => {
			e.dimensions = {
				left: 0,
				top: 0,
				width: l,
				height: c,
			};
			return e;
		},
		[l, c],
	);
	let u = B.useCallback(
		(e) => {
			a(e);
			n(e);
		},
		[a, n],
	);
	if (r) {
		return B.createElement(
			S.rG,
			{
				refPopup: u,
				strName: "OverlayTimeline",
				updateParamsBeforeShow: m,
				bUseSavedDimensions: false,
				eCreationFlags: de.Wf.Composited,
				bHideResizeGrip: true,
				bHideWindowControls: true,
			},
			B.createElement(_r, {
				gameID: t,
				timelineWidth: r,
			}),
		);
	} else {
		return null;
	}
}
function mn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.AIContentReport;
	const i = q3(() => r.BWindowVisible(n));
	const a = aS(400, 450, 400, 450);
	const s = Co(e.appid);
	const o = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (i && s) {
		return B.createElement(
			S.rG,
			{
				strName: "AIContentReportDialog",
				updateParamsBeforeShow: a,
				bUseSavedDimensions: true,
				onClose: o,
			},
			B.createElement(re, {
				app: s,
				onClose: o,
			}),
		);
	} else {
		return null;
	}
}
function un(e) {
	const { appid: t } = e;
	const r = T_2(t);
	const n = q3(() => r && A.H.GetAchievements(t));
	const i = n && n.nTotal > 0;
	const a = fr();
	const s = ee.w9.Achievements;
	const o = q3(() => a.BWindowVisible(s));
	const l = ty(s);
	const c = nv($2(), 560, 500, 300, 100);
	const m = dn(s);
	const u = q3(() => a.GetPinnedWindowData(s));
	const d = B.useCallback(() => {
		a.SetWindowVisibility(s, ee.tc.Closed);
	}, [s, a]);
	const p = B.useCallback(
		(e) => {
			a.SetPinnedWindowData(s, e);
		},
		[s, a],
	);
	if (o && i) {
		return B.createElement(
			S.rG,
			{
				refPopup: l,
				strName: "Achievements",
				updateParamsBeforeShow: c,
				onClose: d,
				bUseSavedDimensions: true,
				...m,
			},
			B.createElement(F.Rp, {
				appid: t,
				bShowGameInfoInHeader: false,
				bShowInProgress: true,
				bPinnedView: m.bShowPinnedView,
				strDefaultTab: u,
				onSetTab: p,
			}),
		);
	} else {
		return null;
	}
}
function dn(e) {
	const t = fr();
	let r = B.useRef(undefined);
	const n = q3(() => t.BWindowPinned(e));
	const i = q3(() => t.GetPinnedWindowOpacity(e));
	const a = q3(() => t.overlay_active);
	const s = q3(() => t.preview_pinned_mode) || !a;
	const o = B.useCallback(() => {
		if (r.current) {
			if (BSteamClientHasMethod(r.current, "Overlay.SetWindowAlpha")) {
				if (s) {
					r.current.SteamClient.Overlay.SetWindowAlpha(i);
				} else {
					r.current.SteamClient.Overlay.SetWindowAlpha(1);
				}
			} else {
				console.debug(
					"usePinnedControls - window doesn't have Overlay.SetWindowAlpha. Should recover, but if a window doesn't have the right alpha, this might be why.",
				);
			}
		}
	}, [s, i]);
	const l = B.useCallback(
		(e) => {
			r.current = e;
			o();
		},
		[o],
	);
	B.useEffect(() => {
		o();
	}, [o]);
	const c = B.useCallback(() => {
		r.current.SteamClient.Overlay.SetWindowPinned(!n);
		t.SetWindowPinned(e, !n);
	}, [t, e, n]);
	const m = B.useCallback(
		(r) => {
			t.SetPreviewPinnedMode(true);
			let n = 0;
			const i = () => {
				t.SetPreviewPinnedMode(false);
			};
			let a = B.createElement(
				fe.tz,
				{
					onCancel: i,
				},
				[1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1].map((r, i) =>
					B.createElement(
						fe.kt,
						{
							key: i,
							onSelected: () =>
								((r) => {
									t.SetPreviewPinnedMode(false);
									t.SetPinnedWindowOpacity(e, r);
								})(r),
							onMouseOver: () =>
								((r) => {
									window.clearTimeout(n);
									n = window.setTimeout(
										() => t.SetPinnedWindowOpacity(e, r),
										100,
									);
								})(r),
						},
						(r * 100).toString(),
						"%",
					),
				),
			);
			lX(a, r, {
				bForcePopup: true,
			}).SetOnHideCallback(i);
		},
		[t, e],
	);
	return {
		onTogglePin: c,
		bShowPinnedView: s,
		bPinned: n,
		pinnedOpacity: i,
		onPinnedOpacity: m,
		refPinnedPopup: l,
	};
}
const An = B.lazy(() => require.e(1220).then(require.bind(require, 55518)));
function pn(e) {
	const { overview: t } = e;
	const r = fr();
	const n = ee.w9.Notes;
	const i = q3(() => r.BWindowVisible(n));
	const s = ty(n);
	const o = $2();
	const l = nv(o, 600, 500, 250, 255);
	const c = DJ();
	const m = (() => {
		let e = T_2(ce.oe);
		return e?.eCloudStatus ?? 2;
	})();
	const u = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	const d = B.useCallback(
		(e) => {
			c.SteamWeb(e);
		},
		[c],
	);
	const p = B.useCallback(
		(e) => {
			SteamClient.GameNotes.ResolveSyncConflicts(e).then((e) => {
				if (e === 1) {
				} else {
					pg(
						B.createElement(te.KG, {
							strTitle: (0, Localize)(
								"#AppOverlay_GameNotes_CloudSync_Error_Title",
							),
							strDescription: (0, Localize)(
								"#AppOverlay_GameNotes_CloudSync_Error_Desc",
							),
						}),
						o.BrowserWindow,
					);
				}
			});
		},
		[o],
	);
	const g = B.useCallback(() => {
		switch (m) {
			case 9: {
				TE(
					{
						bOnAppLaunch: false,
						appid: ce.oe,
						onCancel: () => {},
						keepLocal: () => p(true),
						keepRemote: () => p(false),
						onOK: () => {},
						customHeaderText: "#AppOverlay_GameNotes_CloudSync_Title",
						customDescriptionText: "#AppOverlay_GameNotes_CloudSync_Desc",
					},
					o.BrowserWindow,
				);
				break;
			}
			case 3: {
				SteamClient.GameNotes.GetQuota().then((e) => {
					pg(
						B.createElement(
							te.o0,
							{
								bAlertDialog: true,
								strTitle: (0, Localize)("#AppOverlay_GameNotes_Quota_Title"),
							},
							B.createElement(
								v.D0,
								{
									label: (0, Localize)("#AppOverlay_GameNotes_Quota_Storage"),
									description: (0, Localize)(
										"#AppOverlay_GameNotes_Quota_Storage_Desc",
									),
								},
								dm(e.bytesAvailable),
							),
							B.createElement(
								v.D0,
								{
									label: (0, Localize)("#AppOverlay_GameNotes_Quota_NumFiles"),
									description: (0, Localize)(
										"#AppOverlay_GameNotes_Quota_NumFiles_Desc",
									),
								},
								e.numFilesAvailable.toLocaleString(),
							),
						),
						o.BrowserWindow,
					);
				});
			}
		}
	}, [m, o, p]);
	const h = QP(t.appid, t.BIsShortcut() ? t.display_name : undefined);
	const C = B.useMemo(() => [o_2(h)], [h]);
	const _ = dn(n);
	let f = null;
	if (i) {
		const e = $u(m);
		const t = C4(m);
		f = B.createElement(
			Be.g,
			{
				className: w.CloudSyncButton,
				onClick: g,
			},
			B.createElement(
				ve.he,
				{
					className: w.WindowButtonTooltip,
					toolTipContent: t,
				},
				B.createElement(ye.CloudSync, {
					...e,
				}),
			),
		);
	}
	return B.createElement(
		oe.fS,
		{
			initialEntries: C,
		},
		B.createElement(
			G.A,
			{
				mode: "page",
				bPinnedView: _.bShowPinnedView,
				onClickURL: d,
			},
			i &&
				B.createElement(
					S.rG,
					{
						refPopup: s,
						className: w.NoTitlebarSpacer,
						strName: "GameNotes",
						updateParamsBeforeShow: l,
						onClose: u,
						bUseSavedDimensions: true,
						..._,
						extraTitleBarActions: f,
					},
					B.createElement(
						B.Suspense,
						{
							fallback: null,
						},
						B.createElement(An, {
							noteParent: h,
						}),
					),
				),
		),
	);
}
function gn(e) {
	const { appid: t } = e;
	const r = $2();
	const n = fr();
	const i = ee.w9.Screenshots;
	const a = q3(() => n.BWindowVisible(i));
	const {
		initialItem: s,
		initialView: o,
		initialFilter: l = {
			listSource: {
				type: "app",
				gameid: bY(t),
			},
		},
	} = q3(() => n.GetInitialMediaState());
	const c = ty(i);
	const m = nv(
		r,
		r.BrowserWindow.screen.availWidth * 0.8,
		r.BrowserWindow.screen.availHeight * 0.8,
		800,
		600,
	);
	const u = B.useCallback(() => {
		n.SetWindowVisibility(i, ee.tc.Closed);
	}, [i, n]);
	if (a) {
		return B.createElement(
			S.rG,
			{
				refPopup: c,
				strName: "ScreenshotManager",
				updateParamsBeforeShow: m,
				onClose: u,
			},
			B.createElement(N.YW, {
				initialFilter: l,
				initialItem: s,
				initialView: o,
				fnDismiss: u,
			}),
		);
	} else {
		return null;
	}
}
function hn(e) {
	const { appid: t, onClose: r } = e;
	const n = qw().cm;
	const a = $2();
	const {
		popup: s,
		element: o,
		configurator: l,
	} = ((e, t, r, n) => {
		const a = "ControllerConfiguratorPopupForOverlay";
		const s = B.useRef(undefined);
		s.current ||= new gr.T({
			browserInfo: r,
			eWindowType: me.W7.ControllerConfigurator,
			strUserAgentIdentifier: "Valve Steam Gamepad",
			appid: t,
			strAppName: a,
		});
		const o = () => {
			SteamClient.Input.ForceConfiguratorFocus(false);
			dr.UP.SetOverlayEscapeKeyHandling({
				gameid: t.toString(),
				should_handle: true,
			});
		};
		let l = me.W.EBrowserType_OffScreen;
		let c = {
			onClose: () => {
				o();
				n();
			},
			onResize: (e, t) => {
				b.oy.SetConfiguratorWidth(e.outerWidth);
			},
			onBlur: o,
			onFocus: () => {
				SteamClient.Input.ForceConfiguratorFocus(true);
				dr.UP.SetOverlayEscapeKeyHandling({
					gameid: t.toString(),
					should_handle: false,
				});
			},
		};
		const { popup: m, element: u } = _Y(
			"ControllerConfigurator",
			s.current,
			Cr.Uv.GamepadUI,
			{
				title: (0, Localize)("#SP_WindowTitle_Configurator", a),
				dimensions: {
					width: 1280,
					height: 800,
				},
				html_class: "client_chat_frame fullheight ModalDialogPopup",
				body_class: "fullheight ModalDialogBody",
				popup_class: "fullheight",
				replace_existing_popup: false,
				target_browser: r,
				strUserAgent: "Valve Steam Gamepad",
				browserType: l,
				eCreationFlags: de.Wf.Resizable,
			},
			c,
		);
		const d = B.useMemo(
			() => [
				i.BV.GamepadUI.ControllerConfigurator.Standalone(),
				i.BV.GamepadUI.ControllerConfigurator.Main(t),
			],
			[t],
		);
		return {
			popup: m,
			element: u,
			configurator: B.createElement(
				hr.O,
				{
					ownerWindow: m,
					instance: s.current,
				},
				B.createElement(
					i.NM,
					{
						initialEntries: d,
						initialIndex: 1,
					},
					B.createElement(Ar.Is, {
						cm: e,
						mode: pr._5.ControllerConfigurator,
						forcedAppID: t,
					}),
				),
			),
		};
	})(n, t, a.params.browserInfo, r);
	B.useEffect(() => {
		const e = ee.w9.Controller;
		a.DesktopOverlay.SetPopupForWindow(e, s);
	}, [a, s]);
	if (o && s) {
		return se.createPortal(
			B.createElement(
				"div",
				{
					className: w.OverlayPopup,
				},
				B.createElement(
					"div",
					{
						className: w.WindowControls,
					},
					B.createElement(Be.c, {
						popup: s,
						hideMin: true,
						hideMax: true,
					}),
				),
				B.createElement(
					x.Z,
					{
						className: w.ControllerConfiguratorWrapper,
					},
					l,
				),
			),
			o,
		);
	} else {
		return null;
	}
}
function Cn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.Controller;
	const i = q3(() => r.BWindowVisible(n));
	const a = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (i) {
		return B.createElement(hn, {
			appid: t,
			onClose: a,
		});
	} else {
		return null;
	}
}
function _n(e) {
	const { appid: t } = e;
	const r = y.B7.ResolveURL("GameHubGuides", t);
	return B.createElement(en, {
		appid: t,
		windowType: ee.w9.Guides,
		strURL: r,
		bPinnable: true,
	});
}
function fn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.Browser;
	const i = q3(() => r.BWindowVisible(n));
	const [a] = VI("web_browser_home");
	const s = B.useRef(undefined);
	const o = ty(n);
	const l = Ue_2(s, o);
	const c = CH();
	const m = dn(n);
	const u = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
		r.RemoveAllWebPageRequests();
	}, [r, n]);
	const d = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [r, n]);
	const A = q3(() => r.active_web_requestid);
	const p = r.web_requests;
	const g = B.useCallback(() => {
		c();
		if (s.current) {
			s.current.SteamClient.Window.BringToFront();
		}
	}, [c]);
	hL(r.GetWebPageRequestsChangedCallbackList(), g);
	const h = B.useCallback(
		(e) => {
			r.RemoveWebPageRequest(e);
			if (r.web_requests.length == 0) {
				r.SetWindowVisibility(n, ee.tc.Closed);
			}
		},
		[r, n],
	);
	const C = B.useCallback(
		(e) => {
			r.active_web_requestid = e;
		},
		[r],
	);
	const f = B.useCallback(
		(e) => {
			r.AddWebPageRequest(e ?? a);
		},
		[r, a],
	);
	const b = B.useCallback(
		(e, t) => {
			r.AddWebPageRequest(e, t);
		},
		[r],
	);
	const y = B.useCallback(
		(e, t) => {
			r.ReorderWebPageRequest(e, t);
		},
		[r],
	);
	const S = B.useCallback(
		(e, t, n) => {
			r.UpdateWebPageRequest(e, t, n);
		},
		[r],
	);
	if (i) {
		return B.createElement(Le.$, {
			strName: `OverlayBrowser_${n.toString()}`,
			appid: t,
			strHomeURL: a,
			bShowMin: true,
			onMinimize: d,
			onClose: u,
			onCloseTab: h,
			onSelectTab: C,
			onTabNavigate: S,
			onAddTab: f,
			onNewTab: b,
			onReorderTab: y,
			activeRequestID: A,
			rgPages: p,
			refPopup: l,
			pinnedProps: m,
		});
	} else {
		return null;
	}
}
function bn(e) {
	const { appid: t } = e;
	const r = y.B7.ResolveURL("GameHubDiscussions", t);
	return B.createElement(en, {
		appid: t,
		windowType: ee.w9.Discussions,
		strURL: r,
		bPinnable: true,
	});
}
function yn(e) {
	const { appid: t } = e;
	const r = y.B7.ResolveURL("SteamWorkshopPage", t);
	return B.createElement(en, {
		appid: t,
		windowType: ee.w9.Workshop,
		strURL: r,
	});
}
function Sn(e) {
	const { appid: t } = e;
	const r = y.B7.ResolveURL("StoreDlcPage", t);
	return B.createElement(en, {
		appid: t,
		windowType: ee.w9.DLC,
		strURL: r,
	});
}
function wn(e) {
	const { appid: t } = e;
	const r = fr();
	const n = ee.w9.MultiplayerSessionLinkShare;
	const i = q3(() => r.BWindowVisible(n));
	const a = ty(n);
	$2();
	const s = B.useCallback(() => {
		r.SetWindowVisibility(n, ee.tc.Closed);
	}, [n, r]);
	if (i) {
		return B.createElement(
			S.rG,
			{
				refPopup: a,
				strName: "OverlayMultiplayerSessionLinkShare",
				bHideResizeGrip: true,
				updateParamsBeforeShow: (e) => ({
					minWidth: 600,
					minHeight: 400,
					...e,
				}),
				onClose: s,
			},
			B.createElement(nr, {
				appid: t,
			}),
		);
	} else {
		return null;
	}
}
