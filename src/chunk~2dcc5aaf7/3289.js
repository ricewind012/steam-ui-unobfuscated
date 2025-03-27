import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { useCallback } from "./63696.js";
import i, { q3 } from "./90095.js";
import a, { Qt } from "./18057.js";
import s from "./50350.js";
import o from "./22091.js";
import l, { Id, Av, yt } from "./77347.js";
import c, { LK } from "./48289.js";
import m from "./34792.js";
import u, { qw } from "./89748.js";
import d from "./87935.js";
import A, { Tr } from "./74416.js";
import p, { $I } from "./89600.js";
import g from "./44846.js";
import h from "./69164.js";
import C from "./68608.js";
import _ from "./17231.js";
import _f from "./8573.js";
import b from "./64608.js";
import y from "./35488.js";
import S from "./10606.js";
import { mK, pg } from "./13869.js";
import B, { A as A_1 } from "./90765.js";
import _I from "./72476.js";
import E from "./81994.js";
import M from "./87913.js";
import { R7 } from "./11131.js";
import { k1 } from "./13688.js";
import D from "./1470.js";
import N from "./2306.js";
import F from "./13897.js";
import G from "./98087.js";
function O(e) {
	let { equippedItems } = e;
	if (!equippedItems?.mini_profile_background?.movie_webm) {
		return null;
	}
	let r = (i = equippedItems.mini_profile_background.movie_webm).startsWith(
		"https://",
	)
		? i
		: `${_I.TS.MEDIA_CDN_COMMUNITY_URL}images/${i}`;
	var i;
	return (
		<div className={G.CurrentUserProfileBackground}>
			<video
				className={G.CurrentUserProfileBackgroundImage}
				src={r}
				autoPlay
				loop
			/>
		</div>
	);
}
function P(e) {
	let { equippedItems } = e;
	const r = Id();
	const s = LK();
	let o = q3(() => c.O$.GetFriendState(new _f.b(c.O$.currentUserSteamID)));
	let u = (
		<div className={G.AvatarAndLabel}>
			<O equippedItems={equippedItems} />
			{r && (
				<_.xz
					className={G.Avatar}
					loopDuration="Infinite"
					size="Large"
					persona={o?.persona}
					animatedAvatar={equippedItems?.animated_avatar}
					avatarFrame={equippedItems?.avatar_frame}
					statusPosition="right"
				/>
			)}
			{!r && <_.Ul size="Large" strAvatarURL={s} />}
			<C.D
				className={G.LabelHolder}
				persona={o?.persona}
				eFriendRelationship={3}
				bIsSelf
				bCompactView={false}
				strNickname={o?.nickname}
				bParenthesizeNicknames={
					m.rV.communityPreferences.bParenthesizeNicknames
				}
			/>
		</div>
	);
	const A = Qt(d.B7.ResolveURL("SteamIDMyProfile"));
	return (
		<b.D0
			label={u}
			bottomSeparator="standard"
			childrenContainerWidth="fixed"
			autoFocus
		>
			<D.t feature={3} disabled={!r} onClick={A}>
				{Localize("#UserManagement_ViewProfile")}
			</D.t>
		</b.D0>
	);
}
function L() {
	const e = qw().BIsOfflineMode();
	const t = Av().eConnectivityTestResult;
	const r = Id();
	if (e) {
		return null;
	}
	let i = null;
	switch (t) {
		default:
		case g.ck.k_EConnectivityTestResult_Unknown: {
			break;
		}
		case g.ck.k_EConnectivityTestResult_Connected: {
			if (!r) {
				i = Localize("#Settings_Internet_Connected_To_Internet_But_Not_Steam");
			}
			break;
		}
		case g.ck.k_EConnectivityTestResult_CaptivePortal:
		case g.ck.k_EConnectivityTestResult_TimedOut:
		case g.ck.k_EConnectivityTestResult_Failed: {
			i = Localize("#Settings_Internet_Connected_To_Network_But_Not_Internet");
			break;
		}
		case g.ck.k_EConnectivityTestResult_WifiDisabled:
		case g.ck.k_EConnectivityTestResult_NoLAN: {
			i = Localize("#Settings_Internet_Not_Connected_To_Network");
		}
	}
	if (i) {
		return (
			<b.G5>
				<b.D0
					icon={<y.Caution className={G.NetworkWarning} />}
					label={i}
					bottomSeparator="standard"
					childrenContainerWidth="fixed"
				/>
			</b.G5>
		);
	} else {
		return null;
	}
}
function Z() {
	const e = q3(() => M.LN.loaded);
	const t = q3(() => M.LN.signedOut);
	const r = M.LN.GetCurrentUserStatusInterface();
	const a = e && !t && r ? r.GetPersonaState() : 0;
	const s = qw().BIsOfflineMode();
	const o = yt();
	const c = Id();
	if (s) {
		return (
			<b.D0
				label={Localize(
					_I.TS.ON_DECK
						? "#Settings_Internet_In_Offline_Mode_SteamDeck"
						: "#Settings_Internet_In_Offline_Mode",
				)}
				childrenContainerWidth="fixed"
			>
				<b.$n onClick={(e) => $I(e, o)}>{Localize("#GoOnline")}</b.$n>
			</b.D0>
		);
	}
	if (!c) {
		return null;
	}
	const m = [
		{
			data: 1,
			label: <b.aZ title={Localize("#PersonaStateOnline")} />,
		},
		{
			data: 3,
			label: <b.aZ title={Localize("#PersonaStateAway")} />,
		},
		{
			data: 7,
			label: (
				<b.aZ
					title={Localize("#PersonaStateInvisible")}
					description={Localize("#PersonaStateInvisibleDescriptor")}
				/>
			),
		},
		{
			data: 0,
			label: (
				<b.aZ
					title={Localize("#PersonaStateSignedOut")}
					description={Localize("#PersonaStateSignedOutDescriptor")}
				/>
			),
		},
	];
	return (
		<b.D0
			label={Localize("#UserManagement_FriendsStatus")}
			description={Localize("#UserManagement_FriendsStatus_Description")}
			bottomSeparator="standard"
			childrenContainerWidth="fixed"
		>
			<F.I
				feature={4}
				rgOptions={m}
				onChange={(e) => {
					t = e?.data;
					M.LN.SetDesiredPersonaState(t);
					return;
					var t;
				}}
				selectedOption={a}
				menuLabel={Localize("#UserManagement_FriendsStatus_Change")}
			/>
		</b.D0>
	);
}
function X() {
	const e = q3(() => M.LN.loaded);
	const t = q3(() => M.LN.signedOut);
	const r = Id();
	if (!e || t || t || !r) {
		return null;
	}
	const a = M.LN.GetCurrentUserStatusInterface();
	let s = a?.GetUserDoNotDisturb();
	return (
		<N.C
			feature={4}
			label={Localize("#User_ToggleDoNotDisturb")}
			description={Localize("#PersonaStateDoNotDisturbDescriptor")}
			checked={s}
			onChange={(e) => {
				if (a) {
					a.SetUserDoNotDisturb(e);
				}
			}}
		/>
	);
}
function U() {
	let e = q3(() => qw().GetCurrentUser());
	let t = R7();
	let r = t?.ownerWindow || window;
	return (
		<b.D0
			label={LocalizeReact(
				"#UserManagement_CurrentAccount",
				<div className={G.Highlight}>{e.strAccountName}</div>,
			)}
			childrenContainerWidth="fixed"
		>
			<b.$n
				onClick={() => {
					let e = Localize("#ChangeUser");
					let t = (
						<>
							{Localize("#ChangeUser_Desc1")}
							<br />
							<br />
							{Localize("#ChangeUser_Desc2")}
						</>
					);
					mK(
						<S.o0
							strTitle={e}
							strDescription={t}
							onOK={() => SteamClient.User.ChangeUser()}
						/>,
						r,
						{
							strTitle: e,
							bForcePopOut: true,
						},
					);
				}}
				className={G.ChangeAccountButton}
			>
				<y.Exit /> {Localize("#ChangeUser")}
			</b.$n>
		</b.D0>
	);
}
function W() {
	const e = q3(() => o.Fd.Get().GetControllers()).find(
		(e) => e.eControllerType == 4,
	);
	const t = e?.strSerialNumber ?? "unknown";
	const r = e?.strChipID ?? "unknown";
	const s = q3(() => A.iG.GetSteamDeckRegistration());
	const c = qw().BIsOfflineMode();
	const m = Id();
	const [p, setP] = n.useState(false);
	const C = Qt(`${d.B7.ResolveURL("SteamIDMyProfile")}edit/goldenprofile`);
	const _ = k1();
	const f = useCallback(() => _.Settings("General"), [_]);
	const y = n.useCallback(
		(e) => {
			let t = GetOwningWindowForEvent(e);
			let r = (
				<S.o0
					onOK={() => {
						setP(true);
						A.iG.IgnoreSteamDeckRewardsPrompt();
						setP(false);
					}}
					strDescription={Localize("#Settings_DeckRewards_IgnoreDesc")}
					strOKButtonText={Localize("#Settings_DeckRewards_IgnoreButton")}
				/>
			);
			pg(r, t, {
				strTitle: Localize("#Settings_DeckRewards_Title"),
			});
		},
		[setP],
	);
	const B = n.useCallback(
		(e) => {
			let i = GetOwningWindowForEvent(e);
			setP(true);
			A.iG.ClaimSteamDeckRewards(t, r).then((e) => {
				let { result, granted_profile_modifier } = e;
				let a = null;
				switch (result) {
					case 1: {
						let e = {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize("#Settings_DeckRewards_ClaimSuccess"),
							onOK: f,
							strOKButtonText: Localize(
								"#Settings_DeckRewards_GoToKeyboardSettings",
							),
						};
						if (granted_profile_modifier) {
							e.onMiddleButton = C;
							e.strMiddleButtonText = Localize(
								"#Settings_DeckRewards_EquipProfile",
							);
						}
						a = <S.o0 {...e} />;
						break;
					}
					case 29: {
						a = (
							<S.KG
								strTitle={Localize("#Settings_DeckRewards_Title")}
								strDescription={Localize(
									"#Settings_DeckRewards_ClaimError_Duplicate",
								)}
							/>
						);
						break;
					}
					case 8: {
						a = (
							<S.KG
								strTitle={Localize("#Settings_DeckRewards_Title")}
								strDescription={Localize(
									"#Settings_DeckRewards_ClaimError_InvalidParam",
								)}
							/>
						);
						break;
					}
					case 15: {
						a = (
							<S.KG
								strTitle={Localize("#Settings_DeckRewards_Title")}
								strDescription={Localize(
									"#Settings_DeckRewards_ClaimError_AccessDenied",
								)}
							/>
						);
						break;
					}
					case 24: {
						a = (
							<S.KG
								strTitle={Localize("#Settings_DeckRewards_Title")}
								strDescription={Localize(
									"#Settings_DeckRewards_ClaimError_InsufficientPrivilege",
								)}
							/>
						);
						break;
					}
					case 28: {
						a = (
							<S.KG
								strTitle={Localize("#Settings_DeckRewards_Title")}
								strDescription={Localize(
									"#Settings_DeckRewards_ClaimError_AlreadyRedeemed",
								)}
							/>
						);
						break;
					}
					default: {
						a = (
							<S.KG
								strTitle={Localize("#Settings_DeckRewards_Title")}
								strDescription={Localize("#Settings_DeckRewards_ClaimError")}
							/>
						);
					}
				}
				if (a) {
					pg(a, i, {
						strTitle: Localize("#Settings_DeckRewards_Title"),
					});
				}
				setP(false);
			});
		},
		[t, r, setP, C, f],
	);
	if (
		!e ||
		c ||
		c ||
		!m ||
		c ||
		!m ||
		s?.strSteamID == _I.iA.steamid ||
		c ||
		!m ||
		s?.strSteamID == _I.iA.steamid ||
		s?.bIgnoreRegistrationPrompt
	) {
		return null;
	}
	let E = (
		<>
			{Localize("#Settings_DeckRewards_Desc")}
			{"\xA0"}
			<span className={G.RewardsDisclaimer}>
				{Localize("#Settings_DeckRewards_Disclaimer")}
			</span>
		</>
	);
	let M = "#Settings_DeckRewards_ClaimButton";
	if (s?.bRegistered) {
		if (s.strSteamID.length != 0) {
			E = <>{Localize("#Settings_DeckRewards_ClaimedByOther_Desc")}</>;
			M = "#Settings_DeckRewards_ClaimForMeButton";
		} else {
			E = <>{Localize("#Settings_DeckRewards_Claimed_Desc")}</>;
		}
	}
	return (
		<b.D0 label={Localize("#Settings_DeckRewards_Title")} description={E}>
			<h.Z className={G.SteamDeckRewardsBtns}>
				<D.t feature={1} onClick={B} disabled={p}>
					{Localize(p ? "#Settings_DeckRewards_Claiming" : M)}
				</D.t>
				<D.t feature={1} onClick={y} disabled={p}>
					{Localize("#Settings_DeckRewards_IgnoreButton")}
				</D.t>
			</h.Z>
		</b.D0>
	);
}
function V() {
	const e = q3(() => qw().GetCurrentUser());
	const t = new _f.b(e.strSteamID);
	const r = k1();
	return (
		<b.D0
			label={LocalizeReact(
				"#UserManagement_FriendCode",
				<div className={G.Highlight}>{t.GetAccountID()}</div>,
			)}
			childrenContainerWidth="fixed"
		>
			<D.t feature={4} onClick={() => r.Invites()}>
				{Localize("#UserManagement_AddFriends")}
			</D.t>
		</b.D0>
	);
}
function H() {
	const e = q3(() => qw().BHasActiveSupportAlerts());
	const t = n.useCallback(() => qw().ShowSupportAlertsModal(), []);
	if (e) {
		return (
			<b.D0
				label={Localize("#UserManagement_ActiveSupportAlert")}
				childrenContainerWidth="fixed"
				className={G.HasActiveSupportAlert}
			>
				<b.$n onClick={t}>
					{Localize("#UserManagement_ViewSupportAlert")}
					<y.ExclamationPoint />
				</b.$n>
			</b.D0>
		);
	} else {
		return null;
	}
}
function J(e) {
	const { icon, label, details, children, className, ...o } = e;
	return (
		<D.t
			className={A_1(className, G.FatButton)}
			focusClassName={G.FatButtonFocus}
			{...o}
		>
			{icon}
			{label && <div className={G.Label}>{label}</div>}
			{details && <div className={G.Details}>{details}</div>}
			{children}
		</D.t>
	);
}
export function F_1(e) {
	const t = q3(() => qw().GetCurrentUser());
	const r = Qt(d.B7.ResolveURL("StoreAddFundsPage"));
	const s = Qt(d.B7.ResolveURL("SteamIDEditPrivacyPage"));
	const o = Qt(d.B7.ResolveURL("StoreAccount"));
	let l = <>{"\xA0"}</>;
	if (t.strAccountBalance?.length) {
		l = t.strAccountBalancePending?.length
			? LocalizeReact(
					"#UserManagement_WalletBalanceWithPending",
					<span className={G.Highlight}>{t.strAccountBalance}</span>,
					t.strAccountBalancePending,
				)
			: LocalizeReact(
					"#UserManagement_WalletBalance",
					<span className={G.Highlight}>{t.strAccountBalance}</span>,
				);
	}
	return (
		<b.BC
			spacingBetweenLabelAndChild="none"
			alignItems="space-between"
			itemMaxSize={e.itemMaxSize}
		>
			<J
				feature={1}
				onClick={r}
				icon={<y.Wallet />}
				label={Localize("#UserManagement_AddFunds")}
				details={l}
				className={e.buttonClass}
			/>
			<J
				feature={7}
				onClick={s}
				icon={<y.FeatureHidden />}
				label={Localize("#UserManagement_Privacy")}
				details={Localize("#UserManagement_Privacy_Description")}
				className={e.buttonClass}
			/>
			<J
				feature={7}
				onClick={o}
				icon={<y.Edit />}
				label={Localize("#UserManagement_AccountDetails")}
				details={Localize("#UserManagement_AccountDetails_Description")}
				className={e.buttonClass}
			/>
		</b.BC>
	);
}
export function I() {
	n.useEffect(() => {
		A.iG.ForceRefreshEquippedItems();
	}, []);
	const e = Tr();
	const t = q3(() => M.LN.loaded);
	if (Id() && !t) {
		return <E.j>{Localize("#UserManagement_SigningIn")}</E.j>;
	} else {
		return (
			<s.Sw
				headerVisibility="fadeInBackgroundOnScroll"
				padForHeader={false}
				minimumOpacity={0}
			>
				<b.G5 className={G.AccountPanelPage}>
					<L />
					<P equippedItems={e} />
					<H />
					<W />
					<Z />
					<X />
					<F_1 />
					<V />
					<U />
				</b.G5>
			</s.Sw>
		);
	}
}
