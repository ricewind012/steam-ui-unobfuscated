var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require("./17231.js");
var l = require("./68608.js");
var c = require(/*webcrack:missing*/ "./8573.js");
var m = require("./64608.js");
var u = require("./10606.js");
var d = require("./55116.js");
var A = require(/*webcrack:missing*/ "./69164.js");
var p = require("./21105.js");
var g = require("./48289.js");
var h = require("./34792.js");
var _C = require("./37499.js");
var _ = require("./46422.js");
var f = require("./73399.js");
var b = require("./1037.js");
var y = b;
var S = require("./99731.js");
var w = require("./46285.js");
var B = require(/*webcrack:missing*/ "./61657.js");
var v = require("./13869.js");
var I = require(/*webcrack:missing*/ "./54644.js");
var E = require("./93966.js");
var M = require("./17754.js");
function T(e) {
	return n.createElement(
		u.EN,
		{
			active: true,
		},
		n.createElement(
			w.M,
			{
				className: y.OverlayBrowserContainer,
				padding: "none",
			},
			n.createElement(R, {
				...e,
			}),
		),
	);
}
function R(e) {
	const { url: t, onClose: r, appid: i } = e;
	let [a, o] = (0, M.wB)(i, i, r);
	let l = (0, M.iT)(o, r);
	(0, E.WE)(l);
	(function (e, t) {
		const r = n.useCallback(
			(r, n, i, a) => {
				if (n == e && !i && a) {
					t();
				}
			},
			[e, t],
		);
		n.useEffect(() => {
			let e = SteamClient.Overlay.RegisterForOverlayActivated(r);
			return () => e.unregister();
		}, [r]);
	})(i, r);
	let [c, m] = (function (e) {
		let [t, r] = n.useState(false);
		let i = n.useCallback(
			(t) => {
				if (
					t.detail.button != B.pR.STEAM_GUIDE &&
					t.detail.button != B.pR.STEAM_QUICK_MENU
				) {
					return;
				}
				r(true);
				let i = () => e();
				let a = () => r(false);
				(function (e, t, r) {
					let i = n.createElement(u.o0, {
						strTitle: (0, s.we)("#Overlay_FriendInviteToGame_ReturnToGame"),
						strDescription: (0, s.we)("#Overlay_Browser_ReturnToGame"),
						onOK: t,
						onCancel: r,
					});
					(0, v.pg)(i, e, {
						strTitle: (0, s.we)("#Overlay_FriendInviteToGame_ReturnToGame"),
					});
				})((0, I.uX)(t), i, a);
				t.preventDefault();
				t.stopPropagation();
			},
			[r, e],
		);
		return [t, i];
	})(r);
	let d = n.useCallback(
		(e) => {
			a(e?.GetBrowser());
		},
		[a],
	);
	n.useEffect(() => {
		if (o.current) {
			let e = o.current;
			e.AddSteamURLCallback(_C.Q.OnSteamURL);
			return () => e.RemoveSteamURLCallback(_C.Q.OnSteamURL);
		}
		return () => {};
	}, [o]);
	return n.createElement(
		A.Z,
		{
			className: y.BrowserWrapper,
			onButtonDown: m,
			onCancelButton: l,
		},
		n.createElement(S.Pw, {
			refBrowser: d,
			name: "OverlayBrowser",
			url: t,
			visible: !c,
			autoFocus: true,
			displayURLBar: true,
		}),
	);
}
var k = require("./33572.js");
var D = require("./92031.js");
var N = require("./68292.js");
var F = require("./96593.js");
var G = require(/*webcrack:missing*/ "./50376.js");
var O = require("./36934.js");
var P = require("./98829.js");
var L = require("./6263.js");
function z(e) {
	let t = (0, i.q3)(() =>
		g.O$.GetFriendState(new c.b(e.request.steamidTarget)),
	);
	return n.createElement(
		u.EN,
		{
			active: true,
		},
		n.createElement(
			u.o0,
			{
				onOK: () => {
					e.onOK();
					_C.Q.RemoveDialogRequest(e.request);
				},
				onCancel: () => {
					_C.Q.RemoveDialogRequest(e.request);
				},
				strTitle: e.strTitle,
				strDescription: e.strDescription,
			},
			n.createElement(
				"div",
				{
					className: f.FriendOverlayDialogUser,
				},
				n.createElement(o.xz, {
					className: f.Avatar,
					loopDuration: "Infinite",
					size: "FillArea",
					persona: t?.persona,
				}),
				n.createElement(
					"div",
					{
						className: f.PersonaName,
					},
					t?.display_name,
				),
			),
		),
	);
}
export function eu(e) {
	let t = (0, s.we)("#Overlay_FriendAdd_Title");
	let r = (0, s.we)("#Overlay_FriendAdd_Body");
	return n.createElement(z, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onOK: () => _C.Q.AddFriend(e.request),
	});
}
export function Dy(e) {
	let t = (0, s.we)("#Overlay_FriendRemove_Title");
	let r = (0, s.we)("#Overlay_FriendRemove_Body");
	return n.createElement(z, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onOK: () => _C.Q.RemoveFriend(e.request),
	});
}
export function II(e) {
	let t = (0, s.we)("#Overlay_FriendAcceptRequest_Title");
	let r = (0, s.we)("#Overlay_FriendAcceptRequest_Body");
	return n.createElement(z, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onOK: () => _C.Q.AddFriend(e.request),
	});
}
export function C(e) {
	let t = (0, s.we)("#Overlay_FriendIgnoreRequest_Title");
	let r = (0, s.we)("#Overlay_FriendIgnoreRequest_Body");
	return n.createElement(z, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onOK: () => _C.Q.RemoveFriend(e.request),
	});
}
function H(e) {
	let { friend: t, rgInvitedSteamIDs: r, onSelectUser: i, onCancel: o } = e;
	let [c, m] = n.useState(false);
	const u =
		c ||
		r.some(
			(e) =>
				e.ConvertTo64BitString() == t.persona.m_steamid.ConvertTo64BitString(),
		);
	return n.createElement(
		A.Z,
		{
			key: t.persona.GetAccountID(),
			className: (0, a.A)(f.FriendSelector, u && f.Invited),
			focusable: !u,
			onActivate: () => {
				i(t.persona.m_steamid);
				m(true);
			},
			onCancelButton: o,
		},
		n.createElement(P.gv, {
			friend: t,
			context: {},
		}),
		n.createElement(l.D, {
			className: f.FullWidthPersona,
			persona: t.persona,
			eFriendRelationship: 3,
			bIsSelf: false,
			bCompactView: false,
			strNickname: t.nickname,
			bParenthesizeNicknames: h.rV.communityPreferences.bParenthesizeNicknames,
		}),
		u &&
			n.createElement(
				"div",
				{
					className: f.InvitedText,
				},
				(0, s.we)("#Overlay_FriendInviteToGame_Invited"),
			),
	);
}
function j(e) {
	return e?.sort((e, t) => {
		const r = e.display_name;
		const n = t.display_name;
		return r.localeCompare(n);
	});
}
function q(e) {
	let {
		bShowTitle: t,
		strTitle: r,
		rgFriends: i,
		onSelectUser: s,
		onCancel: o,
		strIconURL: l,
		rgInvitedSteamIDs: c,
	} = e;
	let [m, u] = n.useState(false);
	let [d, p] = n.useState(false);
	if (i && i.length != 0) {
		return n.createElement(
			n.Fragment,
			null,
			t &&
				n.createElement(
					A.Z,
					{
						focusable: true,
						onActivate: () => u(!m),
						className: (0, a.A)(f.CollapsableFriendGroupRow, m && f.Collapsed),
					},
					n.createElement(
						"div",
						{
							className: f.ExpandCollapseIndicator,
						},
						" ",
						n.createElement(G.f5w, {
							nocircle: true,
							minus: !m,
							className: f.CollapseSVG,
						}),
						" ",
					),
					l &&
						n.createElement("img", {
							className: f.GameIcon,
							alt: "",
							src: l,
						}),
					n.createElement("div", null, r),
					m &&
						n.createElement(
							"span",
							{
								className: m ? "groupCount collapsed" : "groupCount",
							},
							" (" + i.length + ")",
						),
				),
			n.createElement(
				"div",
				{
					className: (0, a.A)(f.FriendContainer, m && f.Collapsed),
				},
				i.map((e, t) =>
					n.createElement(H, {
						key: t,
						friend: e,
						onSelectUser: s,
						onCancel: o,
						rgInvitedSteamIDs: c,
					}),
				),
			),
		);
	} else {
		return null;
	}
}
function Q(e) {
	const t = (0, _.RP)();
	const r = j((0, g.OC)());
	let [i, a] = n.useState(r);
	let [o, l] = n.useState(undefined);
	let [c, h] = n.useState(false);
	let [b, y] = n.useState([]);
	const S = () => {
		_C.Q.RemoveDialogRequest(e.request);
	};
	const w = (t) => {
		e.onSelectUser(t);
		y([t, ...b]);
		_C.Q.RemoveDialogRequest(e.request);
	};
	const B = n.createElement(q, {
		bShowTitle: !c,
		strTitle: (0, s.we)("#Overlay_FriendInviteToGame_OnlineFriends"),
		rgFriends: i,
		onCancel: S,
		onSelectUser: w,
		rgInvitedSteamIDs: b,
	});
	const v = (0, N.PR)();
	const E = v.ChatStore();
	const M =
		E.GetActiveVoiceChat() instanceof N.sn ? E.GetActiveVoiceChat() : undefined;
	const T =
		E.GetActiveVoiceChat() instanceof N.dJ ? E.GetActiveVoiceChat() : undefined;
	let R;
	let k;
	let D;
	if (M) {
		let e = [M.chat_partner];
		R = n.createElement(q, {
			bShowTitle: !c,
			strTitle: (0, s.we)("#Overlay_FriendInviteToGame_VoiceChat"),
			rgFriends: j(e),
			onCancel: S,
			onSelectUser: w,
			rgInvitedSteamIDs: b,
		});
	} else if (T) {
		let e = T?.voice_active_member_list?.member_list
			?.filter(
				(e) =>
					e.steamid?.GetAccountID() != g.O$.currentUserSteamID?.GetAccountID(),
			)
			.map((e) => g.O$.GetFriendState(e.steamid));
		R = n.createElement(q, {
			bShowTitle: !c,
			strTitle: (0, s.we)("#Overlay_FriendInviteToGame_VoiceChat"),
			rgFriends: j(e),
			onCancel: S,
			onSelectUser: w,
			rgInvitedSteamIDs: b,
		});
	}
	const G = F.tw.GetAppOverviewByAppID(t);
	const P = O.Vw.GetAppInfo(t);
	const L = (0, g.Lb)();
	const z = r.filter((e) => e.persona.m_unGamePlayedAppID == t);
	let x = n.createElement(q, {
		bShowTitle: true,
		strTitle: G?.display_name,
		rgFriends: z,
		onCancel: S,
		onSelectUser: w,
		strIconURL: P?.icon_url,
		rgInvitedSteamIDs: b,
	});
	if (c) {
		k = B;
	} else {
		let e = L.filter((e) => e.persona.is_online);
		let t = n.createElement(q, {
			bShowTitle: true,
			strTitle: (0, s.we)("#Overlay_FriendInviteToGame_Favorites"),
			rgFriends: e,
			onCancel: S,
			onSelectUser: w,
			rgInvitedSteamIDs: b,
		});
		D = v.FriendGroupStore().user_groups.map((e, t) => {
			const i = e.member_list
				.filter((e) =>
					r.find(
						(t) =>
							t.persona.m_steamid.ConvertTo64BitString() ==
							e.steamid.ConvertTo64BitString(),
					),
				)
				.map((e) =>
					r.find(
						(t) =>
							t.persona.m_steamid.ConvertTo64BitString() ==
							e.steamid.ConvertTo64BitString(),
					),
				);
			return n.createElement(q, {
				key: t,
				bShowTitle: true,
				strTitle: e.name,
				rgFriends: i,
				onCancel: S,
				onSelectUser: w,
				rgInvitedSteamIDs: b,
			});
		});
		k = n.createElement(n.Fragment, null, R, x, t, D, B);
	}
	return n.createElement(
		u.EN,
		{
			active: true,
		},
		n.createElement(
			u.eV,
			{
				className: f.FriendInviteOverlayDialog,
				onOK: () => {},
				onCancel: S,
			},
			n.createElement(
				m.Y9,
				null,
				" ",
				e.strTitle || n.createElement(n.Fragment, null, "\xA0"),
				" ",
			),
			n.createElement("div", null, e.strDescription),
			n.createElement(m.pd, {
				className: f.SearchFriendInput,
				autoFocus: true,
				onChange: (e) => {
					let t = e.target.value || "";
					if (o) {
						clearTimeout(o);
					}
					let n = (0, I.uX)(e).setTimeout(() => {
						let e = r.filter(
							(e) => e.display_name.toLocaleLowerCase().indexOf(t) != -1,
						);
						a(e);
					}, 200);
					h(t.length > 0);
					l(n);
				},
				placeholder: (0, s.we)("#Overlay_FriendInviteToGame_Filter"),
			}),
			n.createElement(
				p.MS,
				{
					className: f.FriendsListContainer,
					scrollDirection: "y",
					scrollPaddingTop: 10,
					scrollPaddingBottom: 10,
				},
				n.createElement(
					A.Z,
					{
						className: f.FriendsList,
						onOKActionDescription: (0, s.we)(
							"#Overlay_FriendInviteToGame_Invite",
						),
						onCancelActionDescription: (0, s.we)(
							"#Overlay_FriendInviteToGame_ReturnToGame",
						),
					},
					n.createElement(d.g, null, k),
				),
			),
		),
	);
}
export function fR(e) {
	let t = (0, s.we)("#Overlay_FriendInviteToGame_Title");
	let r = (0, s.we)("#Overlay_FriendInviteToGame_Body");
	return n.createElement(Q, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onSelectUser: (t) => {
			_C.Q.InviteUserToGame(t, e.request);
		},
	});
}
export function Id(e) {
	let t = (0, s.we)("#Overlay_FriendInviteToCurrentGame_Title");
	let r = (0, s.we)("#Overlay_FriendInviteToCurrentGame_Body");
	return n.createElement(Q, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onSelectUser: (t) => {
			_C.Q.InviteUserToCurrentGame(t, e.request);
		},
	});
}
export function om(e) {
	let t = (0, s.we)(
		"#Overlay_FriendInviteToRemotePlayTogetherCurrentGame_Title",
	);
	let r = (0, s.we)(
		"#Overlay_FriendInviteToRemotePlayTogetherCurrentGame_Body",
	);
	return n.createElement(Q, {
		request: e.request,
		strTitle: t,
		strDescription: r,
		onSelectUser: (e) => {
			_C.Q.InviteUserToRemotePlayTogetherCurrentGame(e);
		},
	});
}
export function fe(e) {
	return n.createElement(
		u.EN,
		{
			active: true,
		},
		n.createElement(u.o0, {
			onOK: () => {
				SteamClient.User.SetAsyncNotificationEnabled(e.request.appid, true);
				_C.Q.RemoveDialogRequest(e.request);
			},
			strOKButtonText: (0, s.we)(
				"#Overlay_AsyncNotificationsRequestedDialog_Allow",
			),
			onCancel: () => {
				SteamClient.User.SetAsyncNotificationEnabled(e.request.appid, false);
				_C.Q.RemoveDialogRequest(e.request);
			},
			strCancelButtonText: (0, s.we)(
				"#Overlay_AsyncNotificationsRequestedDialog_Disallow",
			),
			strTitle: (0, s.we)("#Overlay_AsyncNotificationsRequestedDialog_Title"),
			strDescription: (0, s.we)(
				"#Overlay_AsyncNotificationsRequestedDialog_Desc",
			),
		}),
	);
}
export function SG(e) {
	const t = () => {
		_C.Q.RemoveDialogRequest(e.request);
	};
	return n.createElement(
		u.mt,
		{
			active: true,
			onDismiss: t,
		},
		n.createElement(L.db, {
			strDetails: e.request.strConnectString,
			onClose: t,
		}),
	);
}
export function jj(e) {
	let { appid: t } = e;
	let r = (0, k.oH)();
	if (
		(0, i.q3)(() => _.oy.WindowStore.BHasOverlayWindowForApp(t)) &&
		r &&
		r.forcedAppID != t
	) {
		t = D.sc;
	}
	let a = (0, _C.r)(t);
	(0, _.TP)(a.length != 0);
	if (a.length == 0) {
		return null;
	}
	let s = a[0];
	let o = null;
	switch (s.strDialog) {
		case "friendadd":
			o = n.createElement(eu, {
				request: s,
			});
			break;
		case "friendremove":
			o = n.createElement(Dy, {
				request: s,
			});
			break;
		case "friendrequestaccept":
			o = n.createElement(II, {
				request: s,
			});
			break;
		case "friendrequestignore":
			o = n.createElement(C, {
				request: s,
			});
			break;
		case "lobbyinvite":
			o = n.createElement(Id, {
				request: s,
			});
			break;
		case "remoteplaytogetherinvite":
			o = n.createElement(om, {
				request: s,
			});
			break;
		case "lobbyinviteconnectstring":
			o = n.createElement(fR, {
				request: s,
			});
			break;
		case "asyncnotificationsrequested":
			o = n.createElement(fe, {
				request: s,
			});
			break;
		case "requestplaytime":
			o = n.createElement(SG, {
				request: s,
			});
			break;
		default:
			if (s.bWebPage) {
				let e = () => _C.Q.RemoveDialogRequest(s);
				o = n.createElement(T, {
					key: s.unRequestingAppID.toString(),
					appid: s.unRequestingAppID,
					mode: s.eWebPageMode,
					url: s.strDialog,
					onClose: e,
				});
			}
	}
	return o;
}
