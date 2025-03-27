import {
	LocalizeReact,
	LocalizePlural,
	Localize,
} from "../../actual_src/utils/localization.js";
import n, { bg } from "./68292.js";
import i from "./26271.js";
import a, { ul, Cc } from "./36464.js";
import s, { bG, Qt } from "./18057.js";
import o, { br } from "./18869.js";
import l from "./87913.js";
import c from "./96593.js";
import m, { uU } from "./48289.js";
import u, { hb } from "./5640.js";
import d from "./34792.js";
import A from "./87935.js";
import p, { $2 } from "./96680.js";
import { PA } from "./41230.js";
import { q3 } from "./90095.js";
import C, { useMemo } from "./63696.js";
import { R7 } from "./11131.js";
import f from "./69164.js";
import b from "./72655.js";
import y from "./88724.js";
import S from "./68608.js";
import w from "./8573.js";
import { Nd } from "./15918.js";
import v from "./5859.js";
import { t7 } from "./82594.js";
import E from "./35488.js";
import M from "./17815.js";
import T, { S1 } from "./43520.js";
import { A as A_1 } from "./90765.js";
import D, { l as l_1 } from "./80254.js";
import { lY } from "./51095.js";
import F from "./56726.js";
import G from "./32735.js";
import P from "./1965.js";
import L from "./93050.js";
const O = G;
function z(e, t) {
	return `${A.B7.GetStoreURL()}wishlist/profiles/${e.persona.m_steamid.ConvertTo64BitString()}/?appid=${
		t.unAppID
	}`;
}
const X_1 = (e) => {
	const { appid, friendAndPlaytime } = e;
	const r_playtime = friendAndPlaytime.playtime;
	const [i] = t7(appid, v.A.k_DataRequest_Assets);
	if (!i || !r_playtime.minutes_played_forever) {
		return null;
	}
	const a = i.GetAssets().GetHeaderURL();
	const s = friendAndPlaytime.friend.persona.m_unGamePlayedAppID == appid;
	let o = (
		<span className={O.TimePlayed}>
			{l_1(r_playtime.minutes_played, "#Playtime_")}
		</span>
	);
	let l = (
		<span className={O.TimePlayed}>
			{l_1(r_playtime.minutes_played_forever, "#Playtime_")}
		</span>
	);
	return (
		<div className={A_1(O.PlaytimeSection, s && O.ForCurrentGame)}>
			{!s && a && <img className={O.GameLogo} src={a} />}
			<div className={O.PlaytimeContent}>
				{r_playtime.minutes_played && (
					<div>{LocalizeReact("#Playtime_Recently", o)} </div>
				)}
				{r_playtime.minutes_played != r_playtime.minutes_played_forever && (
					<div>{LocalizeReact("#Playtime_Total", l)}</div>
				)}
			</div>
		</div>
	);
};
function U(e, t) {
	const r = t.friend.persona.m_unGamePlayedAppID == e;
	const n = `playtime-section-${t.friend.persona.m_steamid.GetAccountID()}`;
	return [r, <X_1 key={n} appid={e} friendAndPlaytime={t} />];
}
export const A0 = PA((e) => {
	const {
		className,
		friend,
		appid,
		bHideRichPresence,
		bAlwaysShowGameName,
		renderStatus,
		renderPlaytime,
		onAvatarClick,
		...m
	} = e;

	const { persona, nickname } = friend;

	const p = R7();
	return (
		<div
			{...m}
			className={A_1(className, O.AvatarAndLabel)}
			onDoubleClick={(e) => {
				ul(friend);
			}}
			onContextMenu={(e) => {
				Cc(e, friend, p);
			}}
		>
			<a.fH
				friend={friend}
				size="Medium"
				statusPosition="right"
				onClick={onAvatarClick}
				renderPlaytime={renderPlaytime}
			/>
			<S.D
				className={O.LabelHolder}
				persona={persona}
				eFriendRelationship={3}
				bIsSelf={false}
				bCompactView={false}
				strNickname={nickname}
				bParenthesizeNicknames={
					d.rV.communityPreferences.bParenthesizeNicknames
				}
				bHideGameName={
					!bAlwaysShowGameName &&
					(!appid || persona.m_unGamePlayedAppID == appid)
				}
				renderStatus={renderStatus}
				bHideEnhancedRichPresenceLabel={bHideRichPresence}
				bNoMask
			/>
		</div>
	);
});
function V(e) {
	const { className, details, cFriends, strHeaderTag, children } = e;
	if (cFriends == 0) {
		return null;
	} else {
		return (
			<div className={A_1(O.Subsection, className)}>
				<div className={O.SubsectionHeader}>
					{LocalizePlural(strHeaderTag, cFriends, details.strDisplayName)}
				</div>
				<div className={A_1(O.Friends)}>{children}</div>
			</div>
		);
	}
}
function H(e) {
	const { playtime, type } = e;
	let n;
	n =
		type == "ever"
			? l_1(playtime.minutes_played_forever, "#Playtime_Total_")
			: l_1(playtime.minutes_played, "#Playtime_TwoWeeks_");
	return <div className={O.PlaytimeStatus}>{n}</div>;
}
function j(e) {
	const t = br();
	const e_steamid64 = e.steamid64;
	return C.useCallback(() => {
		t.SteamWeb(A.B7.BuildSteamURL("SteamIDPage", e_steamid64));
	}, [t, e_steamid64]);
}
function Q_1(e) {
	const { details, friendAndPlaytime } = e;
	const { friend, playtime } = friendAndPlaytime;
	const a = j(friend);
	return (
		<A0
			friend={friend}
			appid={details.unAppID}
			onAvatarClick={a}
			renderPlaytime={() => U(details.unAppID, friendAndPlaytime)}
		/>
	);
}
function Q(e) {
	const { details, friendAndPlaytime } = e;
	const { friend, playtime } = friendAndPlaytime;
	const a = j(friend);
	return (
		<A0
			friend={friend}
			appid={details.unAppID}
			onAvatarClick={a}
			renderStatus={() => <H playtime={playtime} type="recent" />}
			renderPlaytime={() => U(details.unAppID, friendAndPlaytime)}
			bHideRichPresence
		/>
	);
}
function Z(e) {
	const { details, friendAndPlaytime } = e;
	const { friend, playtime } = friendAndPlaytime;
	const s = j(friend);
	return (
		<a.fH
			friend={friend}
			size="Small"
			statusPosition="bottom"
			onClick={s}
			renderPlaytime={() => U(details.unAppID, friendAndPlaytime)}
		/>
	);
}
function Y(e) {
	const { details, friendAndPlaytime } = e;
	const { friend, playtime } = friendAndPlaytime;
	const s = ((e, t) => {
		const r = br();
		return C.useCallback(() => {
			r.SteamWeb(z(e, t));
		}, [r, e, t]);
	})(friend, details);
	return (
		<a.fH
			friend={friend}
			size="Small"
			statusPosition="bottom"
			onClick={s}
			renderPlaytime={() => U(details.unAppID, friendAndPlaytime)}
		/>
	);
}
function K(e) {
	const { nMaxRows, strExpandTag, children } = e;
	return (
		<M.S
			className={O.FriendsOverflow}
			nMaxRows={nMaxRows}
			classNameWhenHidden={A_1(O.FriendsActivityOverFlow)}
			classNameWhenExpanded={A_1(O.FriendsActivityOverFlow, O.Expanded)}
			collapseString={(0, Localize)("#AppDetails_FriendsLess")}
			expandString={(0, Localize)(strExpandTag)}
			suppressMask
			buttonClass={O.ShowMore}
		>
			{children}
		</M.S>
	);
}
function X(e) {
	return c.tw.GetAppOverviewByAppID(e).BIsApplicationOrTool();
}
function J(e) {
	return (t, r) => {
		const n = d.rV.communityPreferences.bParenthesizeNicknames;
		const i = !d.rV.friendSettings.bForceAlphabeticFriendSorting;
		let a = 0;
		if (
			e == "ingame" &&
			((a = y.Z.SortStatusComparator(i, t.friend.persona, r.friend.persona)),
			a != 0)
		) {
			return a;
		}
		if (e != "wishlist") {
			if (
				e != "ever" &&
				((a = r.playtime.minutes_played - t.playtime.minutes_played), a != 0)
			) {
				return a;
			}
			a = r.playtime.minutes_played_forever - t.playtime.minutes_played_forever;
			if (a != 0) {
				return a;
			}
		}
		if (n) {
			return lY(
				t.friend.persona.m_strPlayerName,
				r.friend.persona.m_strPlayerName,
			);
		} else {
			return lY(
				t.friend.nickname
					? t.friend.nickname
					: t.friend.persona.m_strPlayerName,
				r.friend.nickname
					? r.friend.nickname
					: r.friend.persona.m_strPlayerName,
			);
		}
	};
}
export const yj = PA((e) => {
	const {
		details: { unAppID: t },
	} = e;
	if (bg().BIsOfflineMode()) {
		return <Te appid={t} />;
	} else {
		return <Ee {...e} />;
	}
});
const Ee = PA((e) => {
	const { details } = e;
	const { unAppID } = details;
	const n = bG("CommunityFriendsThatPlay", unAppID);
	const i = $0(unAppID);
	const a = oG(unAppID);
	const o = Ce(unAppID);
	const l = _e(unAppID);
	if (i.length + a.length + o.length + l.length == 0) {
		return null;
	}
	const c = X(unAppID)
		? (0, Localize)("#AppDetails_SectionTitle_Friends_Software")
		: (0, Localize)("#AppDetails_SectionTitle_Friends");
	return (
		<P.n
			feature={4}
			primaryAction={{
				action: n,
				label: (0, Localize)("#AppDetails_Friends_ViewAll"),
			}}
			className={O.FriendsSection}
			label={c}
			rightColumnSection
		>
			<P.n.Body>
				<V
					className={O.InGame}
					details={details}
					strHeaderTag="#AppDetails_FriendsInGameNow"
					cFriends={i.length}
				>
					{i.map((e) => (
						<Q_1
							key={e.friend.accountid}
							details={details}
							friendAndPlaytime={e}
						/>
					))}
				</V>
				<V
					className={O.Recent}
					details={details}
					strHeaderTag="#AppDetails_FriendsPlayedRecently"
					cFriends={a.length}
				>
					<K
						nMaxRows={5}
						strExpandTag="#AppDetails_FriendsPlayedRecentlyExpand"
					>
						{a.map((e) => (
							<Q
								key={e.friend.accountid}
								details={details}
								friendAndPlaytime={e}
							/>
						))}
					</K>
				</V>
				<V
					className={O.Ever}
					details={details}
					strHeaderTag="#AppDetails_FriendsPlayed"
					cFriends={o.length}
				>
					<K
						nMaxRows={i.length + a.length < 5 ? 6 : 2}
						strExpandTag="#AppDetails_FriendsPlayedExpand"
					>
						{o.map((e) => (
							<Z
								key={e.friend.accountid}
								details={details}
								friendAndPlaytime={e}
							/>
						))}
					</K>
				</V>
				<V
					className={O.Wishlist}
					details={details}
					strHeaderTag="#AppDetails_FriendsWishlisted"
					cFriends={l.length}
				>
					<K nMaxRows={2} strExpandTag="#AppDetails_FriendsWishlistExpand">
						{l.map((e) => (
							<Y
								key={e.friend.accountid}
								details={details}
								friendAndPlaytime={e}
							/>
						))}
					</K>
				</V>
			</P.n.Body>
		</P.n>
	);
});
function Te(e) {
	const t = X(e.appid)
		? (0, Localize)("#AppDetails_SectionTitle_Friends_Software")
		: (0, Localize)("#AppDetails_SectionTitle_Friends");
	return (
		<P.n feature={4} className={O.FriendsSection} label={t} rightColumnSection>
			<P.n.Body>
				<F.bw
					onClick={() =>
						SteamClient.Messaging.PostMessage(
							"FriendsLoader",
							"SignInToFriends",
							"{}",
						)
					}
				>
					{LocalizeReact(
						"#AppDetails_SectionTitle_SignIn",
						<span
							style={{
								color: "white",
							}}
						>
							{(0, Localize)("#AppDetails_SectionTitle_SignIn_Pre")}
						</span>,
					)}
				</F.bw>
			</P.n.Body>
		</P.n>
	);
}
export function gr(e) {
	const { details } = e;
	const { unAppID } = details;
	const n = $2();
	const i = $0(unAppID);
	if (i.length === 0) {
		return null;
	} else {
		return (
			<P.n
				feature={4}
				label={LocalizePlural("#AppDetails_FriendsInGameNow_Short", i.length)}
				className={O.FriendsSectionPlayingNow}
				rightColumnSection
			>
				<P.n.Body className={O.PlayingNowBody}>
					<Ne friends={i}>
						{(e) => (
							<Be
								key={e.friend.persona.m_steamid.GetAccountID()}
								appid={unAppID}
								friendAndPlaytime={e}
								onActivate={() =>
									l.LN.ShowFriendChatDialog(n, e.friend.persona.m_steamid)
								}
								actionDescription={(0, Localize)(
									"#AppDetails_Friends_SendMessage",
								)}
							/>
						)}
					</Ne>
				</P.n.Body>
			</P.n>
		);
	}
}
function Ne(e) {
	const { children, friends } = e;
	const n = S1();
	return (
		<T.VJ>
			<f.Z flow-children="row">
				<i.Q
					className={O.SummaryCarouselContainer}
					leftMargin={32}
					edgeMask="none"
					fnUpdateArrows={() => {}}
					fnRenderScrollingDiv={({ htmlElementRef, ...t }) => (
						<div {...t} ref={htmlElementRef} style={n} />
					)}
				>
					{friends.map(children)}
					<div
						style={{
							width: "16px",
						}}
						data-carousel="ignore"
					/>
				</i.Q>
			</f.Z>
		</T.VJ>
	);
}
export function w4(e) {
	const t = $0(e.details.unAppID);
	const r = oG(e.details.unAppID);
	const n = _e(e.details.unAppID);
	const i = Ce(e.details.unAppID);
	if (hb(4)) {
		return null;
	}
	if (r.length === 0 && n.length === 0 && i.length === 0) {
		return null;
	}
	const a = t.length === 0;
	const s = n.length > 0 || i.length > 0;
	const o = i.length ? 10 : 21;
	const l = n.length ? 10 : 21;
	return (
		<div className={O.FriendsContainer}>
			{a && <L.w label={(0, Localize)("#AppDetails_FriendsSection_Title")} />}
			<Se {...e} friends={r} />
			{s && (
				<f.Z
					flow-children="row"
					style={{
						display: "flex",
						flexDirection: "row",
						gap: "12px",
						marginTop: "10px",
					}}
				>
					<Oe {...e} maxToShowCollapsed={l} friends={i} />
					<Le {...e} maxToShowCollapsed={o} friends={n} />
				</f.Z>
			)}
		</div>
	);
}
function Ae_1(e) {
	let { appid, friendAndPlaytime, mini } = e;
	let i = bG(
		"SteamIDPage",
		friendAndPlaytime.friend.persona.m_steamid.ConvertTo64BitString(),
	);
	return (
		<Be
			key={friendAndPlaytime.friend.persona.m_steamid.GetAccountID()}
			appid={appid}
			friendAndPlaytime={friendAndPlaytime}
			onActivate={i}
			actionDescription={(0, Localize)("#AppDetails_Friends_ViewProfile")}
			showStatus
			bHideRichPresence
			mini={mini}
		/>
	);
}
function Se(e) {
	const { details, friends } = e;
	const { unAppID } = details;
	if (friends.length === 0) {
		return null;
	} else {
		return (
			<P.n
				feature={4}
				className={O.RecentlyPlayedFriends}
				label={
					<Ce_1>
						{LocalizePlural(
							"#AppDetails_FriendsPlayedRecently",
							friends.length,
						)}
					</Ce_1>
				}
				rightColumnSection
			>
				<P.n.Body>
					<Ne friends={friends}>
						{(e) => (
							<Ae_1
								key={e.friend.persona.m_steamid.GetAccountID()}
								appid={unAppID}
								friendAndPlaytime={e}
							/>
						)}
					</Ne>
				</P.n.Body>
			</P.n>
		);
	}
}
function Oe(e) {
	const { details, maxToShowCollapsed, friends } = e;
	const { unAppID } = details;
	if (friends.length === 0) {
		return null;
	} else {
		return (
			<P.n
				feature={4}
				label={<Ce_1>{(0, Localize)("#AppDetails_FriendsPlayed_Short")}</Ce_1>}
				className={O.FriendsPlayingHalfSection}
				rightColumnSection
			>
				<b.hN>
					{(e) => (
						<P.n.Body>
							<f.Z flow-children="grid" className={O.FriendsPlayingAvatarGrid}>
								{(e ? friends : friends.slice(0, maxToShowCollapsed)).map(
									(e) => (
										<Ae_1
											key={e.friend.persona.m_steamid.GetAccountID()}
											appid={unAppID}
											friendAndPlaytime={e}
											mini
										/>
									),
								)}
							</f.Z>
						</P.n.Body>
					)}
				</b.hN>
			</P.n>
		);
	}
}
function Le(e) {
	const { details, maxToShowCollapsed, friends } = e;
	if (friends.length === 0) {
		return null;
	} else {
		return (
			<P.n
				feature={4}
				label={
					<Ce_1>{(0, Localize)("#AppDetails_FriendsWishlisted_Short")}</Ce_1>
				}
				className={O.FriendsPlayingHalfSection}
				rightColumnSection
			>
				<b.hN>
					{(e) => (
						<P.n.Body>
							<f.Z flow-children="grid" className={O.FriendsPlayingAvatarGrid}>
								{(e ? friends : friends.slice(0, maxToShowCollapsed)).map(
									(e) => (
										<Me
											key={e.friend.persona.m_steamid.GetAccountID()}
											friend={e}
											details={details}
										/>
									),
								)}
							</f.Z>
						</P.n.Body>
					)}
				</b.hN>
			</P.n>
		);
	}
}
function Ce_1(e) {
	return <div className={O.FriendsSectionSubHeading}>{e.children}</div>;
}
function Me(e) {
	const { friend, details } = e;
	const n = Qt(z(friend.friend, details));
	return (
		<Be
			key={friend.friend.persona.m_steamid.GetAccountID()}
			appid={details.unAppID}
			friendAndPlaytime={friend}
			onActivate={n}
			actionDescription={(0, Localize)("#AppDetails_Friends_ViewWishlist")}
			mini
		/>
	);
}
function ue(e, t, r = true) {
	return e.filter(({ friend }) =>
		r
			? friend.persona.m_unGamePlayedAppID === t
			: friend.persona.m_unGamePlayedAppID !== t,
	);
}
function de(e) {
	return e.filter((e) => !e.friend.is_blocked);
}
function Ae(e) {
	return {
		playtime: e,
		friend: m.O$.GetFriendState(new w.b(e.steamid)),
	};
}
function pe(e) {
	const { data } = Nd(e, {
		staleTime: 3600000,
	});
	return useMemo(
		() =>
			data && {
				in_game: data.in_game.map(Ae),
				played_recently: data.played_recently.map(Ae),
				played_ever: data.played_ever.map(Ae),
				in_wishlist: data.in_wishlist.map(Ae),
				owns: data.owns.map(Ae),
				your_info: data.your_info && Ae(data.your_info),
			},
		[data],
	);
}
export function $0(e) {
	const t = pe(e);
	return q3(() => {
		if (!t) {
			return [];
		}
		const r = [
			...ue(t.in_game, e),
			...ue(t.played_recently, e),
			...ue(t.played_ever, e),
		];
		const n = new Set(r.map(({ friend }) => friend.accountid));
		const i = ue(t.in_wishlist, e).filter(
			({ friend }) => !n.has(friend.accountid),
		);
		return de([...r, ...i]).sort(J("ingame"));
	});
}
export function oG(e) {
	const t = pe(e);
	return q3(() => {
		if (!t) {
			return [];
		}
		return de([
			...ue(t.in_game, e, false),
			...ue(t.played_recently, e, false),
		]).sort(J("recent"));
	});
}
function Ce(e) {
	const t = pe(e);
	return q3(() => {
		if (!t) {
			return [];
		}
		return de(ue(t.played_ever, e, false)).sort(J("ever"));
	});
}
function _e(e) {
	const t = pe(e);
	return q3(() => {
		if (!t) {
			return [];
		}
		return de(ue(t.in_wishlist, e, false)).sort(J("wishlist"));
	});
}
export function n8(e) {
	const t = uU(e.appid);
	if (t === 0) {
		return null;
	} else {
		return (
			<div
				className={A_1(
					O.FriendsPlayingNowBadge,
					e.bFriendsTabOverride && O.InFriendsTab,
					e.tabSelected && O.TabSelected,
				)}
			>
				<E.Friends className={O.Icon} />
				<div className={O.Count}>{t}</div>
			</div>
		);
	}
}
function Be(e) {
	const {
		mini,
		friendAndPlaytime,
		appid,
		showStatus,
		onActivate,
		actionDescription,
		bHideRichPresence,
	} = e;
	const c = mini ? (
		<a.fH
			friend={friendAndPlaytime.friend}
			size="Small"
			statusPosition="bottom"
			renderPlaytime={() => U(appid, friendAndPlaytime)}
		/>
	) : (
		<A0
			friend={friendAndPlaytime.friend}
			appid={appid}
			renderStatus={
				showStatus
					? () => (
							<div className={O.PlaytimeStatus}>
								{l_1(
									friendAndPlaytime.playtime.minutes_played,
									"#Playtime_TwoWeeks_",
								)}
							</div>
						)
					: undefined
			}
			renderPlaytime={() => U(appid, friendAndPlaytime)}
			className={O.GamepadFriendSectionItemLong}
			bHideRichPresence={bHideRichPresence}
		/>
	);
	return (
		<f.Z
			onActivate={onActivate}
			onOKActionDescription={actionDescription}
			focusable
		>
			{c}
		</f.Z>
	);
}
