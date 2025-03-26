var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require("./18057.js");
var s = require("./50350.js");
var o = require("./22091.js");
var l = require("./77347.js");
var c = require("./48289.js");
var m = require("./34792.js");
var u = require("./89748.js");
var d = require("./87935.js");
var A = require("./74416.js");
var p = require("./89600.js");
var g = require(/*webcrack:missing*/ "./44846.js");
var h = require(/*webcrack:missing*/ "./69164.js");
var C = require("./68608.js");
var _ = require("./17231.js");
var _f = require(/*webcrack:missing*/ "./8573.js");
var b = require("./64608.js");
var y = require("./35488.js");
var S = require("./10606.js");
var w = require("./13869.js");
var B = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var _I = require(/*webcrack:missing*/ "./72476.js");
var E = require("./81994.js");
var M = require("./87913.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var R = require(/*webcrack:missing*/ "./11131.js");
var k = require("./13688.js");
var D = require("./1470.js");
var N = require("./2306.js");
var F = require("./13897.js");
var G = require("./98087.js");
function O(e) {
	let { equippedItems: t } = e;
	if (!t?.mini_profile_background?.movie_webm) {
		return null;
	}
	let r = (i = t.mini_profile_background.movie_webm).startsWith("https://")
		? i
		: _I.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + i;
	var i;
	return n.createElement(
		"div",
		{
			className: G.CurrentUserProfileBackground,
		},
		n.createElement("video", {
			className: G.CurrentUserProfileBackgroundImage,
			src: r,
			autoPlay: true,
			loop: true,
		}),
	);
}
function P(e) {
	let { equippedItems: t } = e;
	const r = (0, l.Id)();
	const s = (0, c.LK)();
	let o = (0, i.q3)(() =>
		c.O$.GetFriendState(new _f.b(c.O$.currentUserSteamID)),
	);
	let u = n.createElement(
		"div",
		{
			className: G.AvatarAndLabel,
		},
		n.createElement(O, {
			equippedItems: t,
		}),
		r &&
			n.createElement(_.xz, {
				className: G.Avatar,
				loopDuration: "Infinite",
				size: "Large",
				persona: o?.persona,
				animatedAvatar: t?.animated_avatar,
				avatarFrame: t?.avatar_frame,
				statusPosition: "right",
			}),
		!r &&
			n.createElement(_.Ul, {
				size: "Large",
				strAvatarURL: s,
			}),
		n.createElement(C.D, {
			className: G.LabelHolder,
			persona: o?.persona,
			eFriendRelationship: 3,
			bIsSelf: true,
			bCompactView: false,
			strNickname: o?.nickname,
			bParenthesizeNicknames: m.rV.communityPreferences.bParenthesizeNicknames,
		}),
	);
	const A = (0, a.Qt)(d.B7.ResolveURL("SteamIDMyProfile"));
	return n.createElement(
		b.D0,
		{
			label: u,
			bottomSeparator: "standard",
			childrenContainerWidth: "fixed",
			autoFocus: true,
		},
		n.createElement(
			D.t,
			{
				feature: 3,
				disabled: !r,
				onClick: A,
			},
			Localize("#UserManagement_ViewProfile"),
		),
	);
}
function L() {
	const e = (0, u.qw)().BIsOfflineMode();
	const t = (0, l.Av)().eConnectivityTestResult;
	const r = (0, l.Id)();
	if (e) {
		return null;
	}
	let i = null;
	switch (t) {
		default:
		case g.ck.k_EConnectivityTestResult_Unknown:
			break;
		case g.ck.k_EConnectivityTestResult_Connected:
			if (!r) {
				i = Localize("#Settings_Internet_Connected_To_Internet_But_Not_Steam");
			}
			break;
		case g.ck.k_EConnectivityTestResult_CaptivePortal:
		case g.ck.k_EConnectivityTestResult_TimedOut:
		case g.ck.k_EConnectivityTestResult_Failed:
			i = Localize("#Settings_Internet_Connected_To_Network_But_Not_Internet");
			break;
		case g.ck.k_EConnectivityTestResult_WifiDisabled:
		case g.ck.k_EConnectivityTestResult_NoLAN:
			i = Localize("#Settings_Internet_Not_Connected_To_Network");
	}
	if (i) {
		return n.createElement(
			b.G5,
			null,
			n.createElement(b.D0, {
				icon: n.createElement(y.Caution, {
					className: G.NetworkWarning,
				}),
				label: i,
				bottomSeparator: "standard",
				childrenContainerWidth: "fixed",
			}),
		);
	} else {
		return null;
	}
}
function z() {
	const e = (0, i.q3)(() => M.LN.loaded);
	const t = (0, i.q3)(() => M.LN.signedOut);
	const r = M.LN.GetCurrentUserStatusInterface();
	const a = e && !t && r ? r.GetPersonaState() : 0;
	const s = (0, u.qw)().BIsOfflineMode();
	const o = (0, l.yt)();
	const c = (0, l.Id)();
	if (s) {
		return n.createElement(
			b.D0,
			{
				label: Localize(
					_I.TS.ON_DECK
						? "#Settings_Internet_In_Offline_Mode_SteamDeck"
						: "#Settings_Internet_In_Offline_Mode",
				),
				childrenContainerWidth: "fixed",
			},
			n.createElement(
				b.$n,
				{
					onClick: (e) => (0, p.$I)(e, o),
				},
				Localize("#GoOnline"),
			),
		);
	}
	if (!c) {
		return null;
	}
	const m = [
		{
			data: 1,
			label: n.createElement(b.aZ, {
				title: Localize("#PersonaStateOnline"),
			}),
		},
		{
			data: 3,
			label: n.createElement(b.aZ, {
				title: Localize("#PersonaStateAway"),
			}),
		},
		{
			data: 7,
			label: n.createElement(b.aZ, {
				title: Localize("#PersonaStateInvisible"),
				description: Localize("#PersonaStateInvisibleDescriptor"),
			}),
		},
		{
			data: 0,
			label: n.createElement(b.aZ, {
				title: Localize("#PersonaStateSignedOut"),
				description: Localize("#PersonaStateSignedOutDescriptor"),
			}),
		},
	];
	return n.createElement(
		b.D0,
		{
			label: Localize("#UserManagement_FriendsStatus"),
			description: Localize("#UserManagement_FriendsStatus_Description"),
			bottomSeparator: "standard",
			childrenContainerWidth: "fixed",
		},
		n.createElement(F.I, {
			feature: 4,
			rgOptions: m,
			onChange: (e) => {
				t = e?.data;
				M.LN.SetDesiredPersonaState(t);
				return;
				var t;
			},
			selectedOption: a,
			menuLabel: Localize("#UserManagement_FriendsStatus_Change"),
		}),
	);
}
function x() {
	const e = (0, i.q3)(() => M.LN.loaded);
	const t = (0, i.q3)(() => M.LN.signedOut);
	const r = (0, l.Id)();
	if (!e || t || !r) {
		return null;
	}
	const a = M.LN.GetCurrentUserStatusInterface();
	let s = a?.GetUserDoNotDisturb();
	return n.createElement(N.C, {
		feature: 4,
		label: Localize("#User_ToggleDoNotDisturb"),
		description: Localize("#PersonaStateDoNotDisturbDescriptor"),
		checked: s,
		onChange: (e) => {
			if (a) {
				a.SetUserDoNotDisturb(e);
			}
		},
	});
}
function U() {
	let e = (0, i.q3)(() => (0, u.qw)().GetCurrentUser());
	let t = (0, R.R7)();
	let r = t?.ownerWindow || window;
	return n.createElement(
		b.D0,
		{
			label: LocalizeReact(
				"#UserManagement_CurrentAccount",
				n.createElement(
					"div",
					{
						className: G.Highlight,
					},
					e.strAccountName,
				),
			),
			childrenContainerWidth: "fixed",
		},
		n.createElement(
			b.$n,
			{
				onClick: () => {
					let e = Localize("#ChangeUser");
					let t = n.createElement(
						n.Fragment,
						null,
						Localize("#ChangeUser_Desc1"),
						n.createElement("br", null),
						n.createElement("br", null),
						Localize("#ChangeUser_Desc2"),
					);
					(0, w.mK)(
						n.createElement(S.o0, {
							strTitle: e,
							strDescription: t,
							onOK: () => SteamClient.User.ChangeUser(),
						}),
						r,
						{
							strTitle: e,
							bForcePopOut: true,
						},
					);
				},
				className: G.ChangeAccountButton,
			},
			n.createElement(y.Exit, null),
			" ",
			Localize("#ChangeUser"),
		),
	);
}
function W() {
	const e = (0, i.q3)(() => o.Fd.Get().GetControllers()).find(
		(e) => e.eControllerType == 4,
	);
	const t = e?.strSerialNumber ?? "unknown";
	const r = e?.strChipID ?? "unknown";
	const s = (0, i.q3)(() => A.iG.GetSteamDeckRegistration());
	const c = (0, u.qw)().BIsOfflineMode();
	const m = (0, l.Id)();
	const [p, g] = n.useState(false);
	const C = (0, a.Qt)(
		d.B7.ResolveURL("SteamIDMyProfile") + "edit/goldenprofile",
	);
	const _ = (0, k.k1)();
	const f = (0, n.useCallback)(() => _.Settings("General"), [_]);
	const y = n.useCallback(
		(e) => {
			let t = GetOwningWindowForEvent(e);
			let r = n.createElement(S.o0, {
				onOK: () => {
					g(true);
					A.iG.IgnoreSteamDeckRewardsPrompt();
					g(false);
				},
				strDescription: Localize("#Settings_DeckRewards_IgnoreDesc"),
				strOKButtonText: Localize("#Settings_DeckRewards_IgnoreButton"),
			});
			(0, w.pg)(r, t, {
				strTitle: Localize("#Settings_DeckRewards_Title"),
			});
		},
		[g],
	);
	const B = n.useCallback(
		(e) => {
			let i = GetOwningWindowForEvent(e);
			g(true);
			A.iG.ClaimSteamDeckRewards(t, r).then((e) => {
				let { result: t, granted_profile_modifier: r } = e;
				let a = null;
				switch (t) {
					case 1:
						let e = {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize("#Settings_DeckRewards_ClaimSuccess"),
							onOK: f,
							strOKButtonText: Localize(
								"#Settings_DeckRewards_GoToKeyboardSettings",
							),
						};
						if (r) {
							e.onMiddleButton = C;
							e.strMiddleButtonText = Localize(
								"#Settings_DeckRewards_EquipProfile",
							);
						}
						a = n.createElement(S.o0, {
							...e,
						});
						break;
					case 29:
						a = n.createElement(S.KG, {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize(
								"#Settings_DeckRewards_ClaimError_Duplicate",
							),
						});
						break;
					case 8:
						a = n.createElement(S.KG, {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize(
								"#Settings_DeckRewards_ClaimError_InvalidParam",
							),
						});
						break;
					case 15:
						a = n.createElement(S.KG, {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize(
								"#Settings_DeckRewards_ClaimError_AccessDenied",
							),
						});
						break;
					case 24:
						a = n.createElement(S.KG, {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize(
								"#Settings_DeckRewards_ClaimError_InsufficientPrivilege",
							),
						});
						break;
					case 28:
						a = n.createElement(S.KG, {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize(
								"#Settings_DeckRewards_ClaimError_AlreadyRedeemed",
							),
						});
						break;
					default:
						a = n.createElement(S.KG, {
							strTitle: Localize("#Settings_DeckRewards_Title"),
							strDescription: Localize("#Settings_DeckRewards_ClaimError"),
						});
				}
				if (a) {
					(0, w.pg)(a, i, {
						strTitle: Localize("#Settings_DeckRewards_Title"),
					});
				}
				g(false);
			});
		},
		[t, r, g, C, f],
	);
	if (
		!e ||
		c ||
		!m ||
		s?.strSteamID == _I.iA.steamid ||
		s?.bIgnoreRegistrationPrompt
	) {
		return null;
	}
	let E = n.createElement(
		n.Fragment,
		null,
		Localize("#Settings_DeckRewards_Desc"),
		"\xA0",
		n.createElement(
			"span",
			{
				className: G.RewardsDisclaimer,
			},
			Localize("#Settings_DeckRewards_Disclaimer"),
		),
	);
	let M = "#Settings_DeckRewards_ClaimButton";
	if (s?.bRegistered) {
		if (s.strSteamID.length != 0) {
			E = n.createElement(
				n.Fragment,
				null,
				Localize("#Settings_DeckRewards_ClaimedByOther_Desc"),
			);
			M = "#Settings_DeckRewards_ClaimForMeButton";
		} else {
			E = n.createElement(
				n.Fragment,
				null,
				Localize("#Settings_DeckRewards_Claimed_Desc"),
			);
		}
	}
	return n.createElement(
		b.D0,
		{
			label: Localize("#Settings_DeckRewards_Title"),
			description: E,
		},
		n.createElement(
			h.Z,
			{
				className: G.SteamDeckRewardsBtns,
			},
			n.createElement(
				D.t,
				{
					feature: 1,
					onClick: B,
					disabled: p,
				},
				Localize(p ? "#Settings_DeckRewards_Claiming" : M),
			),
			n.createElement(
				D.t,
				{
					feature: 1,
					onClick: y,
					disabled: p,
				},
				Localize("#Settings_DeckRewards_IgnoreButton"),
			),
		),
	);
}
function V() {
	const e = (0, i.q3)(() => (0, u.qw)().GetCurrentUser());
	const t = new _f.b(e.strSteamID);
	const r = (0, k.k1)();
	return n.createElement(
		b.D0,
		{
			label: LocalizeReact(
				"#UserManagement_FriendCode",
				n.createElement(
					"div",
					{
						className: G.Highlight,
					},
					t.GetAccountID(),
				),
			),
			childrenContainerWidth: "fixed",
		},
		n.createElement(
			D.t,
			{
				feature: 4,
				onClick: () => r.Invites(),
			},
			Localize("#UserManagement_AddFriends"),
		),
	);
}
function H() {
	const e = (0, i.q3)(() => (0, u.qw)().BHasActiveSupportAlerts());
	const t = n.useCallback(() => (0, u.qw)().ShowSupportAlertsModal(), []);
	if (e) {
		return n.createElement(
			b.D0,
			{
				label: Localize("#UserManagement_ActiveSupportAlert"),
				childrenContainerWidth: "fixed",
				className: G.HasActiveSupportAlert,
			},
			n.createElement(
				b.$n,
				{
					onClick: t,
				},
				Localize("#UserManagement_ViewSupportAlert"),
				n.createElement(y.ExclamationPoint, null),
			),
		);
	} else {
		return null;
	}
}
function j(e) {
	const { icon: t, label: r, details: i, children: a, className: s, ...o } = e;
	return n.createElement(
		D.t,
		{
			className: (0, B.A)(s, G.FatButton),
			focusClassName: G.FatButtonFocus,
			...o,
		},
		t,
		r &&
			n.createElement(
				"div",
				{
					className: G.Label,
				},
				r,
			),
		i &&
			n.createElement(
				"div",
				{
					className: G.Details,
				},
				i,
			),
		a,
	);
}
export function f(e) {
	const t = (0, i.q3)(() => (0, u.qw)().GetCurrentUser());
	const r = (0, a.Qt)(d.B7.ResolveURL("StoreAddFundsPage"));
	const s = (0, a.Qt)(d.B7.ResolveURL("SteamIDEditPrivacyPage"));
	const o = (0, a.Qt)(d.B7.ResolveURL("StoreAccount"));
	let l = n.createElement(n.Fragment, null, "\xA0");
	if (t.strAccountBalance?.length) {
		l = t.strAccountBalancePending?.length
			? LocalizeReact(
					"#UserManagement_WalletBalanceWithPending",
					n.createElement(
						"span",
						{
							className: G.Highlight,
						},
						t.strAccountBalance,
					),
					t.strAccountBalancePending,
				)
			: LocalizeReact(
					"#UserManagement_WalletBalance",
					n.createElement(
						"span",
						{
							className: G.Highlight,
						},
						t.strAccountBalance,
					),
				);
	}
	return n.createElement(
		b.BC,
		{
			spacingBetweenLabelAndChild: "none",
			alignItems: "space-between",
			itemMaxSize: e.itemMaxSize,
		},
		n.createElement(j, {
			feature: 1,
			onClick: r,
			icon: n.createElement(y.Wallet, null),
			label: Localize("#UserManagement_AddFunds"),
			details: l,
			className: e.buttonClass,
		}),
		n.createElement(j, {
			feature: 7,
			onClick: s,
			icon: n.createElement(y.FeatureHidden, null),
			label: Localize("#UserManagement_Privacy"),
			details: Localize("#UserManagement_Privacy_Description"),
			className: e.buttonClass,
		}),
		n.createElement(j, {
			feature: 7,
			onClick: o,
			icon: n.createElement(y.Edit, null),
			label: Localize("#UserManagement_AccountDetails"),
			details: Localize("#UserManagement_AccountDetails_Description"),
			className: e.buttonClass,
		}),
	);
}
export function I() {
	n.useEffect(() => {
		A.iG.ForceRefreshEquippedItems();
	}, []);
	const e = (0, A.Tr)();
	const t = (0, i.q3)(() => M.LN.loaded);
	if ((0, l.Id)() && !t) {
		return n.createElement(E.j, null, Localize("#UserManagement_SigningIn"));
	} else {
		return n.createElement(
			s.Sw,
			{
				headerVisibility: "fadeInBackgroundOnScroll",
				padForHeader: false,
				minimumOpacity: 0,
			},
			n.createElement(
				b.G5,
				{
					className: G.AccountPanelPage,
				},
				n.createElement(L, null),
				n.createElement(P, {
					equippedItems: e,
				}),
				n.createElement(H, null),
				n.createElement(W, null),
				n.createElement(z, null),
				n.createElement(x, null),
				n.createElement(f, null),
				n.createElement(V, null),
				n.createElement(U, null),
			),
		);
	}
}
