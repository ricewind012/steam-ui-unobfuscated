var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./64608.js");
var o = require("./10606.js");
var l = require("./48289.js");
import {
	Localize,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
var m = require("./34792.js");
var u = require("./18057.js");
var d = require("./13869.js");
var A = require("./87935.js");
var p = require("./23924.js");
var g = p;
var h = require(/*webcrack:missing*/ "./11131.js");
var C = require(/*webcrack:missing*/ "./72476.js");
var _ = require("./51095.js");
var f = require(/*webcrack:missing*/ "./26853.js");
var b = require("./35488.js");
var y = require(/*webcrack:missing*/ "./90765.js");
var S = require("./57472.js");
var w = require("./5640.js");
var B = require("./89748.js");
var v = require("./63937.js");
var I = require("./98325.js");
var E = require(/*webcrack:missing*/ "./50376.js");
var M = require("./17231.js");
var T = require(/*webcrack:missing*/ "./8573.js");
var R = require("./17613.js");
var k = require(/*webcrack:missing*/ "./24295.js");
var D = require("./15918.js");
var N = require("./68608.js");
var F = require(/*webcrack:missing*/ "./12176.js");
var G = require("./54946.js");
var O = require(/*webcrack:missing*/ "./61416.js");
var P = require(/*webcrack:missing*/ "./46382.js");
var L = require(/*webcrack:missing*/ "./69164.js");
function z(e) {
	return n.createElement(E.d1w, null);
}
function x(e) {
	return n.createElement(E.Bir, null);
}
function U(e) {
	return n.createElement(
		"div",
		{
			className: (0, y.A)(I.RoleIcon, e.className),
		},
		e.role == 2 ? n.createElement(x, null) : n.createElement(z, null),
	);
}
function W(e) {
	const { strSteamID: t, role: r, persona: i, isSelf: a } = e;
	const s = new T.b(t);
	let o = e.size || "Large";
	const l = (0, D.M8)();
	const m = (function () {
		const e = (0, P.KV)();
		return (0, O.I)({
			queryKey: ["communitypreferences"],
			queryFn: async () => {
				const t = F.w.Init(G.tz);
				const r = await G.xt.GetCommunityPreferences(e, t);
				if (r.GetEResult() != 1) {
					throw new Error(
						`Error from GetCommunityPreferences: ${r.GetEResult()} ${r.GetErrorMessage()}`,
					);
				}
				return r.Body();
			},
		});
	})();
	const u = l.data?.get(s.GetAccountID());
	const d = m.data?.preferences().parenthesize_nicknames();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"a",
			{
				className: I.ProfileLink,
				href: i.GetCommunityProfileURL(),
				onClick: (e) => {
					e.stopPropagation();
				},
			},
			n.createElement(M.i8, {
				className: I.Avatar,
				persona: i,
				size: o,
				statusPosition: "right",
			}),
			n.createElement(N.D, {
				className: I.PlayerName,
				bIsSelf: a,
				bHideStatus: false,
				bHidePersona: false,
				bParenthesizeNicknames: d,
				bCompactView: false,
				persona: i,
				strNickname: u,
				eFriendRelationship: 3,
			}),
		),
		n.createElement(
			"div",
			{
				className: I.RoleAndIcon,
			},
			n.createElement(U, {
				className: I.ProfileRoleIcon,
				role: r,
			}),
			n.createElement(
				"div",
				{
					className: I.RoleName,
				},
				(0, Localize)(`#FamilyManagement_Role_${r}`),
			),
		),
	);
}
function V(e) {
	const { strSteamID: t, role: r, bInvitePending: i, children: a } = e;
	const s = (0, k.LH)();
	const [o, l] = (0, n.useState)(false);
	const m = s == t;
	const u = (0, R.js)(t);
	(0, v.p8)(u, "#FamilyManagement_ErrorLoadFamilyGeneric");
	if (!u.isSuccess) {
		return null;
	}
	const d = u.data;
	return n.createElement(
		L.Z,
		{
			className: (0, y.A)(I.FamilyMemberRow, m && I.ActiveFamilyMemberRow),
		},
		n.createElement(
			L.Z,
			{
				className: I.FamilyMemberRowTop,
				onActivate: a ? () => l(!o) : undefined,
			},
			n.createElement(
				"div",
				{
					className: I.Left,
				},
				n.createElement(W, {
					strSteamID: t,
					role: r,
					persona: d,
					isSelf: m,
				}),
				i &&
					n.createElement(
						"div",
						{
							className: I.InvitePending,
						},
						(0, Localize)("#FamilyManagement_InvitePending"),
					),
				m &&
					n.createElement(
						"span",
						{
							className: I.MeBadge,
						},
						(0, Localize)("#FamilyManagement_Me"),
					),
			),
			a &&
				n.createElement(H, {
					bExpanded: o,
					setExpanded: l,
				}),
		),
		o && a,
	);
}
function H(e) {
	const { bExpanded: t, setExpanded: r } = e;
	return n.createElement(
		s.wl,
		{
			className: (0, y.A)(I.ExpandRowButton, t && I.Selected),
			onClick: () => r(!t),
		},
		n.createElement(E.b8_, {
			direction: "down",
		}),
	);
}
var j = require("./77347.js");
var q = require(/*webcrack:missing*/ "./52451.js");
var Q = require("./3475.js");
var Z = require(/*webcrack:missing*/ "./26667.js");
var Y = require("./3651.js");
var K = require("./89600.js");
var X = require("./2306.js");
var J = require(/*webcrack:missing*/ "./90242.js");
var $ = require("./37086.js");
const ee = () => {
	const e = (0, u.bG)("ParentalSetup");
	return n.createElement(
		s.G5,
		null,
		n.createElement(
			$.WG,
			{
				label: (0, Localize)("#FamilySettings_FamilyView_Header"),
				description: (0, Localize)("#FamilySettings_FamilyView_Desc"),
				onClick: e,
			},
			(0, Localize)("#FamilySettings_Manage_ButtonText"),
		),
	);
};
const te = (e) => {
	const { settings: t } = e;
	(0, B.QR)();
	(0, j.Id)();
	const r = (0, i.q3)(
		() =>
			t &&
			t.vecFamilySharingUsers
				.map((e) => l.O$.GetFriendState(e.nAccountID))
				.reduce((e, t, r, n) => e && !!t?.display_name, true),
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(re, null),
		t !== null &&
			r &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(ne, {
					settings: t,
				}),
				n.createElement(ae, {
					settings: t,
				}),
				n.createElement(se, {
					settings: t,
				}),
			),
		t !== null &&
			!r &&
			n.createElement(
				"div",
				{
					className: g.ThrobberWrapper,
				},
				n.createElement(f.t, null),
			),
		t === null &&
			n.createElement(s.nB, null, (0, Localize)("#FamilySettings_Offline")),
	);
};
const re = () => {
	const e = (0, u.Qt)(A.B7.ResolveURL("FamilySharing"));
	return n.createElement(
		$.WG,
		{
			label: (0, Localize)("#FamilySettings_Header"),
			description: (0, Localize)("#FamilySettings_Description"),
			onClick: e,
		},
		(0, Localize)("#FamilySettings_Manage_ButtonText"),
	);
};
const ne = (e) => {
	const { bIsDeviceAuthorizedForFamilySharing: t, nMaxAuthorizedAccounts: r } =
		e.settings;
	const i = n.useRef(undefined);
	const a = (0, h.R7)();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(X.C, {
			feature: 7,
			ref: i,
			className: g.AuthorizeUserField,
			checked: t,
			label: (0, Localize)("#FamilySettings_AuthorizeLocalDevice"),
			description: (0, Localize)("#FamilySettings_UserListDescription", r),
			onChange: (e) => {
				if (e) {
					SteamClient.FamilySharing.AuthorizeLocalDevice().then((t) => {
						if (t != 1) {
							let r;
							switch (t) {
								case 18:
									r = (0, Localize)("#FamilySettings_SteamGuardRequired", t);
									break;
								case 25:
									r = (0, Localize)("#FamilySettings_LimitExceeded", t);
									break;
								default:
									r = (0, Localize)("#FamilySettings_FailedToAuthorize", t);
							}
							(0, d.pg)(
								n.createElement(o.KG, {
									strTitle: (0, Localize)("#Error_Generic"),
									strDescription: r,
								}),
								a.ownerWindow ?? window,
								{
									strTitle: (0, Localize)("#Error_Generic"),
									bForcePopOut: true,
								},
							);
							i.current.SetChecked(!e, false);
						}
					});
				} else {
					SteamClient.FamilySharing.DeauthorizeLocalDevice().then((t) => {
						if (t != 1) {
							(0, d.pg)(
								n.createElement(o.KG, {
									strTitle: (0, Localize)("#Error_Generic"),
									strDescription: (0, Localize)(
										"#FamilySettings_FailedToDeauthorize",
										t,
									),
								}),
								a.ownerWindow ?? window,
								{
									strTitle: (0, Localize)("#Error_Generic"),
									bForcePopOut: true,
								},
							);
							i.current.SetChecked(!e, false);
						}
					});
				}
			},
		}),
	);
};
const ie = (0, a.PA)((e) => {
	const { accountID: t, authorized: r, enabled: i, nMaxBorrowers: a } = e;
	const s = l.O$.GetFriendState(t);
	const m = n.useRef(undefined);
	const u = (0, h.R7)();
	if (!s.display_name) {
		return null;
	}
	return n.createElement(X.C, {
		feature: 7,
		ref: m,
		disabled: !i,
		className: g.User,
		label: s.display_name,
		checked: r,
		onChange: (e) => {
			SteamClient.FamilySharing.UpdateAuthorizedBorrower(t, e).then((t) => {
				if (t == 25) {
					(0, d.pg)(
						n.createElement(o.KG, {
							strTitle: (0, Localize)("#Error_Generic"),
							strDescription: (0, Localize)(
								"#FamilySettings_TooManyBorrowers",
								a,
							),
						}),
						u.ownerWindow ?? window,
						{
							strTitle: (0, Localize)("#Error_Generic"),
							bForcePopOut: true,
						},
					);
					m.current.SetChecked(!e, false);
				} else if (t != 1) {
					(0, d.pg)(
						n.createElement(o.KG, {
							strTitle: (0, Localize)("#Error_Generic"),
							strDescription: (0, Localize)(
								"#FamilySettings_FailedToUpdateBorrower",
								t,
							),
						}),
						u.ownerWindow ?? window,
						{
							strTitle: (0, Localize)("#Error_Generic"),
							bForcePopOut: true,
						},
					);
					m.current.SetChecked(!e, false);
				}
			});
		},
		bottomSeparator: "none",
	});
});
const ae = (e) => {
	const {
		bIsDeviceAuthorizedForFamilySharing: t,
		nMaxAuthorizedAccounts: r,
		vecFamilySharingUsers: i,
	} = e.settings;
	const a = new Map(i.map((e) => [e.nAccountID, e]));
	const [o, m] = n.useState(
		i
			.map((e) => e.nAccountID)
			.filter((e) => e != l.O$.currentUserSteamID.GetAccountID())
			.sort((e, t) => {
				const r = a.get(e);
				const n = a.get(t);
				if (r.bAuthorized && !n.bAuthorized) {
					return -1;
				} else if (n.bAuthorized && !r.bAuthorized) {
					return 1;
				} else {
					return (
						(0, _.lY)(
							l.O$.GetFriendState(e)?.display_name,
							l.O$.GetFriendState(t)?.display_name,
						) || e - t
					);
				}
			}),
	);
	if (!t) {
		return null;
	}
	let u;
	if (o.length == 0) {
		u = n.createElement(s.D0, {
			className: g.User,
			disabled: true,
			icon: n.createElement(b.BlockUser, null),
			label: (0, Localize)("#FamilySettings_UserList_NoAccounts"),
			bottomSeparator: "none",
		});
	} else {
		const e = i.reduce((e, t) => (t.bAuthorized ? e + 1 : e), 0);
		u = o.map((t) => {
			const i = a.get(t);
			return n.createElement(ie, {
				key: t,
				accountID: t,
				authorized: i?.bAuthorized,
				enabled: e < r || i?.bAuthorized,
				nMaxBorrowers: r,
			});
		});
	}
	return n.createElement(
		"div",
		{
			className: g.UserList,
		},
		n.createElement(
			"div",
			{
				className: g.UserListHeader,
			},
			n.createElement(
				"div",
				null,
				(0, Localize)("#FamilySettings_UserList_LeftColumn"),
			),
			n.createElement(
				"div",
				null,
				(0, Localize)("#FamilySettings_UserList_RightColumn"),
			),
		),
		u,
	);
};
const se = (e) => {
	const { bIsDeviceAuthorizedForFamilySharing: t } = e.settings;
	if (t) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(S.G, {
				feature: Q.uX,
				setting: "show_family_sharing_notifications",
				label: (0, Localize)("#FamilySettings_ShowNotifications"),
			}),
		);
	} else {
		return null;
	}
};
const oe = () => {
	const e = (0, B.qw)().GetFamilyGroupID();
	const t = (0, v.Hs)(e);
	const r = (0, C.Qn)();
	const i = (0, u.Qt)(
		A.B7.ResolveURL("FamilyManagement") + (r ? "?fromsettings=1" : ""),
	);
	if (t.isLoading) {
		return n.createElement(
			"div",
			{
				className: g.ThrobberContainer,
			},
			n.createElement(f.t, null),
		);
	}
	if (t.isError) {
		const e = n.createElement("b", null, (0, B.qw)().GetFamilyGroupName(), " ");
		return n.createElement(
			"div",
			null,
			" ",
			LocalizeReact("#FamilyGroup_QueryFailed", e),
			" ",
		);
	}
	const a = t.data
		.members()
		.findIndex((e) => e.steamid() === (0, B.qw)().GetCurrentUser().strSteamID);
	const s = t.data.members()[a];
	const o = t.data.members().slice();
	if (a !== -1) {
		o.splice(a, 1);
	}
	return n.createElement(
		"div",
		{
			className: g.FamilyGroup,
		},
		n.createElement(
			"div",
			{
				className: g.FamilyNameRow,
			},
			n.createElement(
				"span",
				{
					className: g.YourFamily,
				},
				(0, Localize)("#FamilyManagement_YourFamily"),
			),
			n.createElement(
				"div",
				{
					className: g.FamilyName,
				},
				t.data.name(),
			),
		),
		a !== -1 &&
			n.createElement(V, {
				strSteamID: s.steamid(),
				role: s.role(),
			}),
		o.map((e) =>
			n.createElement(V, {
				strSteamID: e.steamid(),
				role: e.role(),
				key: e.steamid(),
			}),
		),
		n.createElement(
			$.CS,
			{
				className: g.ManageFamilyButton,
				onClick: i,
			},
			(0, Localize)("#FamilyGroup_ManageFamily"),
		),
	);
};
function le() {
	const e = (0, B.QR)();
	const t = (0, j.Id)();
	const r = (0, j.yt)();
	const i = n.createElement("b", null, (0, B.qw)().GetFamilyGroupName(), " ");
	return n.createElement(
		n.Fragment,
		null,
		!t &&
			n.createElement(
				s.a3,
				null,
				LocalizeReact("#FamilyGroup_Offline", i),
				" ",
			),
		e &&
			n.createElement(
				"div",
				{
					className: g.OfflineButton,
				},
				n.createElement(
					s.$n,
					{
						onClick: (e) => (0, K.$I)(e, r),
					},
					(0, Localize)("#GoOnline"),
				),
			),
	);
}
export function Ci() {
	const e = (0, C.hf)();
	const t = (0, w.Wf)();
	const r = (0, w.mV)();
	const i = !(0, w.Wp)();
	const a = (0, B.IU)();
	const o = (0, j.Id)();
	const l = (0, u.Qt)(A.B7.ResolveURL("FamilyManagement"));
	const d = (0, v.ll)((0, B.qw)().GetFamilyGroupID());
	const p = (0, m.vL)();
	const h = p?.vecFamilySharingUsers.reduce(
		(e, t) => e || t.bAuthorized,
		false,
	);
	const _ = (!t || !i) && r;
	const f = h;
	if (a) {
		return n.createElement(
			$.sh,
			{
				className: g.FamilyPanel,
			},
			o && n.createElement(oe, null),
			!o && n.createElement(le, null),
			e && _ && d == 1 && n.createElement(ee, null),
		);
	} else {
		return n.createElement(
			$.sh,
			{
				className: g.FamilyPanel,
			},
			n.createElement(
				"div",
				null,
				" ",
				LocalizeInlineReactWithFallback(
					"#FamilyGroup_TrySteamFamilies",
					n.createElement(J.Ii, {
						onClick: l,
					}),
				),
			),
			n.createElement(
				"div",
				{
					className: g.TrySteamFamiliesButtonContainer,
				},
				n.createElement(
					s.jn,
					{
						className: g.TrySteamFamiliesButton,
						onClick: l,
					},
					(0, Localize)("#FamilyGroup_TrySteamFamilies_Button"),
				),
				n.createElement(
					"div",
					{
						className: g.Placeholder,
					},
					"\xA0",
				),
			),
			e && _ && n.createElement(ee, null),
			f &&
				n.createElement(te, {
					settings: p,
				}),
		);
	}
}
function me(e) {
	const { dlc: t, appidParent: r } = e;
	return n.createElement(
		"div",
		{
			className: g.AvailableLenderDLCRow,
		},
		n.createElement(
			"div",
			{
				className: g.Image,
			},
			n.createElement(Y.lx, {
				item: t,
				appidParent: r,
			}),
		),
		n.createElement(
			"div",
			{
				className: g.Name,
			},
			t.strName,
		),
	);
}
function ue(e) {
	const { steamid64: t } = e;
	const r = new T.b(t);
	const i = (0, l.KM)(r);
	const a = (0, l.gt)(r);
	const [s] = (0, m.I5)("bParenthesizeNicknames");
	return n.createElement(
		"div",
		{
			className: g.AvatarAndPersona,
		},
		n.createElement(M.i8, {
			className: g.Avatar,
			persona: a,
			statusPosition: "right",
		}),
		n.createElement(N.D, {
			className: g.PlayerName,
			bIsSelf: false,
			bParenthesizeNicknames: s,
			bHideStatus: true,
			bCompactView: false,
			persona: a,
			eFriendRelationship: 3,
			strNickname: i,
		}),
	);
}
function de(e) {
	const { vecDLC: t, appidParent: r, nRemaining: i, nCommon: a } = e;
	let s;
	if (t.length == 0) {
		s =
			a == 0
				? (0, Localize)("#FamilyGroup_ChoosePreferredLender_NoDLC")
				: (0, Localize)("#FamilyGroup_ChoosePreferredLender_CommonOnly", a);
	} else if (i > 0) {
		s = (0, Localize)("#FamilyGroup_ChoosePreferredLender_DLCAdditional", i);
	}
	return n.createElement(
		"div",
		{
			className: g.DLCList,
		},
		t.map((e) =>
			n.createElement(me, {
				dlc: e,
				appidParent: r,
				key: e.unAppID,
			}),
		),
		s &&
			n.createElement(
				"div",
				{
					className: g.AvailableLenderDLCRow,
				},
				s,
			),
	);
}
function Ae(e) {
	const {
		lender: t,
		selected: r,
		onClick: i,
		nTotalLenders: a,
		mapDLCCount: s,
		appidParent: o,
	} = e;
	const l = t.vecDLC.filter((e) => s.get(e.unAppID) != a);
	const m = t.vecDLC.length - l.length;
	l.sort(
		(e, t) =>
			s.get(e.unAppID) - s.get(t.unAppID) || (0, _.lY)(e.strName, t.strName),
	);
	let u = l;
	if (u.length > 3) {
		u = u.slice(0, 2);
	}
	let d = l.length - u.length;
	return n.createElement(
		L.Z,
		{
			className: (0, y.A)(g.AvailableLenderRow, r && g.Selected),
			onActivate: i,
			autoFocus: r,
		},
		n.createElement(
			"div",
			{
				className: g.TopRow,
			},
			n.createElement(ue, {
				steamid64: t.steamid,
			}),
			n.createElement(
				"div",
				{
					className: g.PreferredCopy,
				},
				r && (0, Localize)("#FamilyGroup_PreferredCopy"),
				n.createElement(
					"div",
					{
						className: g.Icon,
					},
					r && n.createElement(b.Star, null),
				),
			),
		),
		n.createElement(de, {
			vecDLC: u,
			appidParent: o,
			nRemaining: d,
			nCommon: m,
		}),
	);
}
function pe(e) {
	const {
		rgLenders: t,
		strPreferredLender: r,
		setPreferredLender: i,
		details: a,
		mapDLCCount: s,
	} = e;
	return n.createElement(
		"div",
		{
			className: g.AvailableLenderList,
		},
		t
			?.sort(
				(e, t) =>
					t.vecDLC.length - e.vecDLC.length || (0, _.lY)(e.steamid, t.steamid),
			)
			.map((e) =>
				n.createElement(Ae, {
					lender: e,
					selected: r == e.steamid,
					key: e.steamid,
					onClick: () => i(e.steamid),
					nTotalLenders: t.length,
					mapDLCCount: s,
					appidParent: a.unAppID,
				}),
			),
	);
}
function ge(e) {
	const { rgLenders: t } = e;
	const [r, i] = n.useState(new Map());
	n.useEffect(() => {
		if (t.length > 0) {
			const e = new Map();
			for (const r of t) {
				for (let t of r.vecDLC) {
					const r = (e.get(t.unAppID) || 0) + 1;
					e.set(t.unAppID, r);
				}
			}
			i(e);
		}
	}, [t]);
	const a = Array.from(r?.values()).reduce(
		(e, r) => e + (r == t.length ? 1 : 0),
		0,
	);
	return n.createElement(
		L.Z,
		{
			className: g.AvailableLenders,
		},
		n.createElement(pe, {
			...e,
			mapDLCCount: r,
			nCommonDLC: a,
		}),
		n.createElement(
			"div",
			{
				className: g.InCommon,
			},
			(0, Localize)("#FamilyGroup_ChoosePreferredLender_DLCInCommon", a),
		),
	);
}
function he(e) {
	const { onClose: t, details: r, appID: i, rgLenders: a } = e;
	const [o, l] = n.useState("");
	const [m, u] = n.useState("");
	A = i;
	const d = (0, Z.n)({
		mutationFn: async (e) =>
			await SteamClient.FamilySharing.SetPreferredLender(A, e),
	});
	var A;
	const p = (0, j.Id)();
	const h = (0, j.yt)();
	const C = r.eDisplayStatus == 4;
	const _ = p && !C;
	n.useEffect(() => {
		if (a.length > 0) {
			const e = a.find((e) => e.bPreferred)?.steamid || a[0].steamid;
			l(e);
		}
	}, [a]);
	const f = async () => {
		const e = new T.b(o);
		u("");
		if ((await d.mutateAsync(e.GetAccountID())) == 1) {
			if (t) {
				t();
			}
		} else {
			u((0, Localize)("#FamilyGroup_ChoosePreferredLender_Error"));
		}
	};
	return n.createElement(
		L.Z,
		{
			className: g.ChoosePreferredLenderDialog,
		},
		n.createElement(
			s.Y9,
			null,
			(0, Localize)("#FamilyGroup_ChoosePreferredLender_Title"),
		),
		n.createElement(
			s.f3,
			{
				className: g.Body,
				autoFocus: true,
				retainFocus: true,
			},
			m &&
				n.createElement(
					s.a3,
					{
						className: g.Error,
					},
					m,
				),
			_ &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						s.a3,
						{
							className: g.PreferredCopyDisc,
						},
						(0, Localize)("#FamilyGroup_ChoosePreferredLender_Text"),
					),
					n.createElement(ge, {
						rgLenders: a,
						strPreferredLender: o,
						setPreferredLender: l,
						details: r,
					}),
					n.createElement(
						s.wi,
						null,
						n.createElement(s.CB, {
							onOK: f,
							bOKDisabled: d.isPending,
							onCancel: t,
						}),
					),
				),
			!p &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						s.a3,
						null,
						LocalizeReact(
							"#FamilyGroup_Offline",
							n.createElement("b", null, (0, B.qw)().GetFamilyGroupName()),
						),
						" ",
					),
					n.createElement(
						s.wi,
						null,
						n.createElement(s.CB, {
							onOK: (e) => (0, K.$I)(e, h),
							strOKText: (0, Localize)("#GoOnline"),
							onCancel: t,
						}),
					),
				),
			p &&
				!_ &&
				n.createElement(
					n.Fragment,
					null,
					C &&
						n.createElement(
							s.a3,
							null,
							" ",
							(0, Localize)("#FamilyGroup_ChoosePreferredLender_AppRunning"),
							" ",
						),
					n.createElement(
						s.wi,
						{
							className: g.OfflineFooter,
						},
						n.createElement(
							s.jn,
							{
								onClick: f,
							},
							(0, Localize)("#Button_OK"),
						),
					),
				),
		),
	);
}
export function YZ(e) {
	const { active: t, onDismiss: r, appID: i, details: a } = e;
	const s = (0, q.vJ)(
		() => t && SteamClient.FamilySharing.GetAvailableLenders(i),
		[i, t, a],
	);
	return n.createElement(
		o.mt,
		{
			active: s?.length > 0 && t,
			onDismiss: r,
		},
		n.createElement(he, {
			appID: a.unAppID,
			details: a,
			rgLenders: s,
			onClose: r,
		}),
	);
}
