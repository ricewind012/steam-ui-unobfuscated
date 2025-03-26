var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./44234.js");
var a = require("./95773.js");
var s = require("./52912.js");
var o = require("./70839.js");
var l = require("./15855.js");
var c = require("./92564.js");
var m = require("./54747.js");
var u = require(/*webcrack:missing*/ "./63696.js");
var d = require(/*webcrack:missing*/ "./41230.js");
import {
	CopyTextToClipboard,
	GetOwningWindowForEvent,
} from "../../actual_src/utils/domutils.js";
var _p = require(/*webcrack:missing*/ "./83957.js");
var g = _p;
var h = require(/*webcrack:missing*/ "./89193.js");
var C = require("./93023.js");
var _ = require(/*webcrack:missing*/ "./8573.js");
var f = require(/*webcrack:missing*/ "./49455.js");
var b = require("./16154.js");
var y = require(/*webcrack:missing*/ "./72476.js");
class S {
	constructor() {
		(0, h.Gn)(this);
	}
	m_mapProfiles = new Map();
	m_mapProfilesLoading = new Map();
	async LoadProfiles(e, t) {
		(0, f.w)(
			e.length <= 500,
			"Check LoadProfiles, requesting too many steam IDs",
		);
		let r = e.filter(
			(e) => !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
		);
		if (r.length == 0) {
			return this.m_mapProfilesLoading.get(e[0]);
		}
		let n = y.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers";
		let i = g.get(n, {
			params: {
				steamids: r.join(","),
			},
			withCredentials: true,
			cancelToken: t?.token,
		});
		r.forEach((e) => this.m_mapProfilesLoading.set(e, i));
		let a = await i;
		if (a.data && a.status == 200) {
			a.data.forEach((e) => {
				e.avatar_hash = e.avatar_url;
				e.avatar_url_medium = (0, C.t)(e.avatar_url, "medium");
				e.avatar_url_full = (0, C.t)(e.avatar_url, "full");
				e.avatar_url = (0, C.t)(e.avatar_url);
				this.m_mapProfiles.set(e.steamid, e);
				this.m_mapProfilesLoading.delete(e.steamid);
			});
		}
	}
	GetProfile(e) {
		return this.m_mapProfiles.get(e);
	}
	GetProfileByAccountID(e) {
		return this.m_mapProfiles.get(
			_.b.InitFromAccountID(e).ConvertTo64BitString(),
		);
	}
	GetProfileBySteamID(e) {
		return this.m_mapProfiles.get(e.ConvertTo64BitString());
	}
	BHasProfile(e) {
		return this.m_mapProfiles.has(e);
	}
	BHasProfileByAccountID(e) {
		return this.m_mapProfiles.has(
			_.b.InitFromAccountID(e).ConvertTo64BitString(),
		);
	}
	BHasProfileBySteamID(e) {
		return this.m_mapProfiles.has(e.ConvertTo64BitString());
	}
	BHasAllProfilesBySteamID(e) {
		return !e.some((e) => !this.BHasProfileBySteamID(e));
	}
	GetProfileURLBySteamID(e) {
		const t = this.GetProfileBySteamID(e);
		if (t && t.profile_url) {
			return y.TS.COMMUNITY_BASE_URL + "id/" + t.profile_url;
		} else {
			return y.TS.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
		}
	}
	GetPersonaNameBySteamID(e) {
		const t = this.GetProfileBySteamID(e);
		if (t && t.persona_name) {
			return t.persona_name;
		} else {
			return "";
		}
	}
}
(0, n.Cg)([h.sH], S.prototype, "m_mapProfiles", undefined);
const w = new S();
function B(e) {
	return (function (e) {
		const t = u.useMemo(
			() => (e ? (typeof e == "string" ? new _.b(e) : e) : null),
			[e],
		);
		const [r, n] = (0, u.useState)(!!t && !w.BHasProfileBySteamID(t));
		(0, u.useEffect)(() => {
			const e = g.CancelToken.source();
			if (t && !w.BHasProfileBySteamID(t)) {
				w.LoadProfiles([t.ConvertTo64BitString()])
					.catch((e) => {
						const r = (0, b.H)(e);
						console.error(
							"useUserProfile failed to load profile for " +
								t.ConvertTo64BitString() +
								": " +
								r.strErrorMsg,
							r,
						);
					})
					.finally(() => {
						if (!e.token.reason) {
							n(false);
						}
					});
			}
			return () => e.cancel("unmounting useUserProfile");
		}, [e]);
		return [r, !!t && w.GetProfileBySteamID(t)];
	})(u.useMemo(() => (e ? _.b.InitFromAccountID(e) : null), [e]));
}
var v = require(/*webcrack:missing*/ "./52451.js");
var I = require("./64608.js");
import {
	Localize,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
var M = require("./7822.js");
var T = M;
var R = require(/*webcrack:missing*/ "./50376.js");
var k = require(/*webcrack:missing*/ "./90242.js");
class D extends u.Component {
	state = {
		invite_token: "",
		input_search: "",
		friend_code_copied: false,
		invite_copied: false,
	};
	async componentDidMount() {
		const e = await g.get(y.TS.COMMUNITY_BASE_URL + "invites/ajaxgetall", {
			params: {
				sessionid: y.TS.SESSIONID,
			},
		});
		if (e && e.data && e.data.tokens) {
			const t = e.data.tokens.filter((e) => e.valid);
			if (t.length) {
				this.setState({
					invite_token: t[0].invite_token,
				});
			} else {
				this.OnCreateInviteLink();
			}
		} else {
			this.OnCreateInviteLink();
		}
	}
	async OnCreateInviteLink() {
		const e = new FormData();
		e.append("sessionid", y.TS.SESSIONID);
		e.append("steamid_user", y.iA.steamid);
		e.append("duration", (2592000).toString());
		const t = await g.post(y.TS.COMMUNITY_BASE_URL + "invites/ajaxcreate", e);
		if (t && t.data && t.data.invite) {
			this.setState({
				invite_token: t.data.invite.invite_token,
			});
		}
	}
	OnCopy(e, t) {
		if (e === "friend_code") {
			this.setState({
				friend_code_copied: true,
			});
			setTimeout(
				() =>
					this.setState({
						friend_code_copied: false,
					}),
				1000,
			);
		}
		if (e === "invite") {
			this.setState({
				invite_copied: true,
			});
			setTimeout(
				() =>
					this.setState({
						invite_copied: false,
					}),
				1000,
			);
		}
		CopyTextToClipboard(t);
	}
	async OnAddFriend(e) {
		const t = new FormData();
		t.append("sessionID", y.TS.SESSIONID);
		t.append("steamid", e);
		t.append("accept_invite", "0");
		try {
			const e = await g.post(
				y.TS.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
				t,
			);
			return e && e.data && e.data.success == 1;
		} catch {
			return false;
		}
	}
	OnSearchChange(e) {
		this.setState({
			input_search: e.target.value,
		});
	}
	OnSearchKeyDown(e) {
		if (e.keyCode === 13) {
			this.OnSearchSubmit();
		}
	}
	OnSearchSubmit() {
		window.open(
			y.TS.COMMUNITY_BASE_URL +
				"search/users/#text=" +
				encodeURIComponent(this.state.input_search),
			"_self",
		);
	}
	render() {
		const e = y.iA.short_url + "/" + this.state.invite_token;
		return u.createElement(
			"div",
			null,
			u.createElement(
				"div",
				{
					className: T.HeaderBlock,
				},
				(0, Localize)("#ManageFriends_AddAFriend"),
			),
			u.createElement(
				"div",
				{
					className: T.Background,
				},
				u.createElement(
					"h1",
					{
						className: T.Heading,
					},
					(0, Localize)("#ManageFriends_YourFriendCode"),
				),
				u.createElement(
					"div",
					{
						className: T.CopyContainer,
					},
					u.createElement(
						"h1",
						{
							className: T.Text,
						},
						y.iA.accountid,
					),
					u.createElement(
						I.jn,
						{
							autoFocus: true,
							className: T.Button,
							onClick: () => this.OnCopy("friend_code", String(y.iA.accountid)),
						},
						this.state.friend_code_copied
							? (0, Localize)("#ManageFriends_Copied")
							: (0, Localize)("#ManageFriends_Copy"),
					),
				),
				u.createElement(
					"p",
					{
						className: T.Body,
					},
					(0, Localize)("#ManageFriends_EnterFriendCode"),
				),
				u.createElement(N, {
					onButtonClick: this.OnAddFriend,
					buttonText: (0, Localize)("#ManageFriends_SendInvite"),
					bDisableForSelf: true,
					bDisableForFriends: true,
					bShowStatus: true,
				}),
			),
			u.createElement(
				"div",
				{
					className: T.DimBackground,
				},
				u.createElement(
					"h1",
					{
						className: T.Heading,
					},
					(0, Localize)("#ManageFriends_OrSendQuickInvite"),
				),
				u.createElement(
					"p",
					{
						className: T.Body,
					},
					(0, Localize)("#ManageFriends_QuickInviteDescription"),
				),
				u.createElement(
					"p",
					{
						className: T.Body,
					},
					(0, Localize)("#ManageFriends_QuickInviteNote"),
				),
				u.createElement(
					"div",
					{
						className: T.CopyContainer,
					},
					Boolean(this.state.invite_token) &&
						u.createElement(
							"div",
							{
								className: T.Link,
							},
							e,
						),
					u.createElement(
						I.jn,
						{
							className: T.Button,
							onClick: () => this.OnCopy("invite", e),
						},
						this.state.invite_copied
							? (0, Localize)("#ManageFriends_Copied")
							: (0, Localize)("#ManageFriends_Copy"),
					),
				),
				u.createElement(
					I.$n,
					{
						className: T.GenerateLinkButton,
						onClick: this.OnCreateInviteLink,
					},
					(0, Localize)("#ManageFriends_CreateInviteLink"),
				),
			),
			u.createElement(
				"div",
				{
					className: T.Background,
				},
				u.createElement(
					"h1",
					{
						className: T.Heading,
					},
					(0, Localize)("#ManageFriends_OrSearch"),
				),
				u.createElement("br", null),
				u.createElement(
					"div",
					{
						style: {
							display: "flex",
							alignItems: "center",
							maxWidth: "598px",
							position: "relative",
						},
					},
					u.createElement(
						"div",
						{
							style: {
								width: "100%",
							},
						},
						u.createElement(I.pd, {
							className: T.Input,
							onKeyDown: this.OnSearchKeyDown,
							value: this.state.input_search,
							onChange: this.OnSearchChange,
							placeholder: (0, Localize)("#ManageFriends_EnterProfileName"),
						}),
					),
					u.createElement(
						"div",
						{
							id: "searchIcon",
							style: {
								position: "absolute",
								right: "10px",
								cursor: "pointer",
							},
							onClick: this.OnSearchSubmit,
						},
						u.createElement(R.eSy, null),
					),
				),
			),
		);
	}
}
(0, n.Cg)([v.oI], D.prototype, "OnCreateInviteLink", null);
(0, n.Cg)([v.oI], D.prototype, "OnCopy", null);
(0, n.Cg)([v.oI], D.prototype, "OnAddFriend", null);
(0, n.Cg)([v.oI], D.prototype, "OnSearchChange", null);
(0, n.Cg)([v.oI], D.prototype, "OnSearchKeyDown", null);
(0, n.Cg)([v.oI], D.prototype, "OnSearchSubmit", null);
class N extends u.Component {
	state = {
		input_friend_code: "",
		disable_send_invite: false,
		searchResult: null,
		invite_status: "pending",
	};
	m_currentRequest = 0;
	async OnFriendCodeChange(e) {
		const t = e.target.value.split(",")[0];
		this.setState({
			input_friend_code: t,
			invite_status: "pending",
		});
		window.clearTimeout(this.m_currentRequest);
		this.m_currentRequest = window.setTimeout(() => this.LoadProfile(t), 500);
	}
	async LoadProfile(e) {
		if (e) {
			const t = _.b.InitFromAccountID(Number(e));
			await w.LoadProfiles([t.ConvertTo64BitString()]);
			const r = w.GetProfile(t.ConvertTo64BitString());
			if (r) {
				this.setState({
					searchResult: r,
					disable_send_invite:
						y.iA.is_limited ||
						(this.props.bDisableForFriends && r.is_friend) ||
						(this.props.bDisableForSelf && r.steamid === y.iA.steamid),
				});
			} else {
				this.setState({
					searchResult: null,
				});
			}
		} else {
			this.setState({
				searchResult: null,
			});
		}
	}
	async OnActionClick(e) {
		const t = new FormData();
		t.append("sessionID", y.TS.SESSIONID);
		t.append("steamid", e);
		t.append("accept_invite", "0");
		this.setState({
			disable_send_invite: true,
		});
		if (await this.props.onButtonClick(e)) {
			this.setState({
				input_friend_code: "",
				invite_status: "success",
			});
			setTimeout(
				() =>
					this.setState({
						searchResult: null,
					}),
				3000,
			);
		} else {
			this.setState({
				invite_status: "failure",
				disable_send_invite: false,
			});
		}
	}
	render() {
		return u.createElement(
			"div",
			{
				className: T.FriendCodeSelector,
			},
			u.createElement(I.pd, {
				className: T.Input,
				value: this.state.input_friend_code,
				onChange: this.OnFriendCodeChange,
				placeholder: (0, Localize)("#ManageFriends_EnterFriendCodePlaceholder"),
			}),
			u.createElement(
				F,
				{
					searchResult: this.state.searchResult,
					invite_status: this.state.invite_status,
					bShowStatus: this.props.bShowStatus,
				},
				u.createElement(
					I.jn,
					{
						className: T.SendInviteButton,
						onClick: () => this.OnActionClick(this.state.searchResult.steamid),
						disabled: this.state.disable_send_invite,
					},
					this.props.buttonText,
				),
			),
		);
	}
}
(0, n.Cg)([v.oI], N.prototype, "OnFriendCodeChange", null);
(0, n.Cg)([v.oI], N.prototype, "LoadProfile", null);
(0, n.Cg)([v.oI], N.prototype, "OnActionClick", null);
const F = (e) => {
	const { searchResult: t, invite_status: r, bShowStatus: n, children: i } = e;
	const a = (0, y.Qn)();
	if (Boolean(t)) {
		return u.createElement(
			"div",
			{
				className: T.ProfileCard,
			},
			u.createElement(
				"div",
				{
					className: T.UserContainer,
				},
				u.createElement(
					"div",
					{
						className: T.Image,
					},
					u.createElement("img", {
						style: {
							width: "100%",
							height: "100%",
						},
						src: t.avatar_url_full,
					}),
				),
				u.createElement(
					"div",
					{
						className: T.ProfileContent,
					},
					u.createElement(
						"h1",
						{
							className: T.Heading,
						},
						t.persona_name,
					),
					u.createElement(
						"div",
						{
							className: T.ProfileLink,
						},
						u.createElement(
							k.Ii,
							{
								target: a ? undefined : "_blank",
								href: y.TS.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
							},
							(0, Localize)("#ManageFriends_ProfileLink"),
						),
						u.createElement("br", null),
						u.createElement(
							"span",
							{
								className: T.Body,
							},
							t.real_name,
							u.createElement("br", null),
							`${t.city}${t.city ? "," : ""} ${t.state}${t.state ? "," : ""} ${t.country}`,
						),
					),
				),
				i,
			),
			u.createElement(
				"div",
				{
					className: T.ProfileLink,
				},
				t.is_friend &&
					u.createElement(
						"div",
						null,
						(0, Localize)("#ManageFriends_IsFriend"),
					),
				t.friends_in_common != 0 &&
					u.createElement(
						"div",
						null,
						u.createElement(
							k.Ii,
							{
								target: a ? undefined : "_blank",
								href:
									y.TS.COMMUNITY_BASE_URL +
									"profiles/" +
									t.steamid +
									"/friendscommon",
							},
							t.friends_in_common === 1
								? (0, Localize)(
										"#ManageFriends_FriendsInCommonSingular",
										t.friends_in_common,
									)
								: (0, Localize)(
										"#ManageFriends_FriendsInCommon",
										t.friends_in_common,
									),
						),
					),
				n &&
					r === "failure" &&
					u.createElement(
						"div",
						{
							className: T.Failure,
						},
						(0, Localize)("#ManageFriends_InviteFailure"),
					),
				n &&
					r === "success" &&
					u.createElement(
						"div",
						{
							className: T.Success,
						},
						(0, Localize)("#ManageFriends_InviteSuccess", t.persona_name),
					),
			),
		);
	} else {
		return null;
	}
};
var G = require("./78060.js");
var O = require("./97422.js");
var P = require("./10606.js");
var L = require(/*webcrack:missing*/ "./26853.js");
var z = require(/*webcrack:missing*/ "./69164.js");
var x = require("./98829.js");
var U = require("./51095.js");
var W = require("./13869.js");
var V = require("./59704.js");
var H = require("./46649.js");
function j(e, t, r, n) {
	(0, O.tj)(
		e,
		{
			friendGroup: t,
		},
		r,
		n,
	);
}
async function q(e, t) {
	return (await e.RemoveFriend(t)) == 1;
}
const Q = (e) => {
	const { friendGroup: t, friend: r } = e;
	return u.createElement(x.bP, {
		className: H.InvitesFriend,
		focusable: false,
		childFocusDisabled: true,
		friend: r,
		context: {
			friendGroup: t,
		},
	});
};
const Z = (e) => {
	const { friends: t, children: r } = e;
	return u.createElement(
		"div",
		{
			className: H.InvitesSectionHeader,
		},
		u.createElement(
			"div",
			{
				className: H.Text,
			},
			t.name,
			"\xA0(",
			t.member_list.length,
			")",
		),
		r,
	);
};
const Y = (e) => {
	const { friendStore: t, setMutualFriends: r, closeModal: n } = e;
	const i = Array.from(r.values()).map((e) => t.GetFriend(e));
	const a = u.useCallback(
		(e, t) => {
			let r = t.GetCommunityProfileURL();
			(0, V.EP)(GetOwningWindowForEvent(e), r);
			n();
		},
		[n],
	);
	const s = i.map((e) =>
		u.createElement(
			z.Z,
			{
				key: e.accountid,
				className: H.MutualFriendRow,
				noFocusRing: true,
				onActivate: (t) => a(t, e),
				onOKActionDescription: (0, Localize)("#Friend_Menu_ViewProfile"),
			},
			u.createElement(x.bP, {
				className: H.InvitesFriend,
				focusable: false,
				friend: e,
				context: {},
			}),
		),
	);
	return u.createElement(
		P.o0,
		{
			className: "friendsui-container",
			strTitle: (0, Localize)("#Friend_Invites_MutualFriends"),
			onOK: n,
			onCancel: n,
			bAlertDialog: true,
		},
		u.createElement(I.nB, null, s),
	);
};
const K = (0, d.PA)((e) => {
	const { friendStore: t, context: r, friends: n } = e;
	const i = u.useCallback(
		(e, t) => {
			const r = n.map_steamid_to_mutual_friends.get(e.steamid64)?.size || 0;
			return (
				(n.map_steamid_to_mutual_friends.get(t.steamid64)?.size || 0) - r ||
				(0, U.lY)(e.display_name, t.display_name)
			);
		},
		[n],
	);
	if (n.member_count == 0) {
		return null;
	}
	const a = n.member_list
		.slice()
		.sort(i)
		.map((e, i) => {
			(0, f.w)(
				e.efriendrelationship == 2,
				"Incorrect friend type in IncomingInvites",
			);
			const a = n.map_steamid_to_mutual_friends.get(e.steamid64);
			const s = a?.size
				? {
						onOptionsActionDescription: (0, Localize)(
							"#Friend_Invites_ViewMutual",
						),
						onOptionsButton: (e) => {
							(async function (e, t, r) {
								const n = GetOwningWindowForEvent(r);
								(0, W.pg)(
									u.createElement(Y, {
										friendStore: e,
										setMutualFriends: t,
									}),
									n,
								);
							})(t, a, e);
						},
					}
				: undefined;
			return u.createElement(
				z.Z,
				{
					key: e.accountid,
					className: H.InvitesRow,
					...s,
					onMenuButton: (t) => j(r, n, e, t),
					onMenuActionDescription: (0, Localize)("#Friend_Menu_Open"),
				},
				u.createElement(Q, {
					friendGroup: n,
					friend: e,
				}),
				u.createElement(
					I.$n,
					{
						onClick: (r) =>
							(async function (e, t, r) {
								const n = GetOwningWindowForEvent(r);
								if (
									!(await (0, G.WQ)(
										n,
										(0, Localize)("#Friend_Menu_BlockAllCommunication"),
										(0, Localize)("#Friend_Block_Confirm", t.display_name),
										(0, Localize)("#Button_Confirm"),
									))
								) {
									return;
								}
								if ((await e.BlockPlayer(t)) != 5) {
									(0, G.Ic)(
										n,
										(0, Localize)("#Friend_Menu_BlockIncomingInvite"),
										(0, Localize)(
											"#Friend_BlockIncomingInvite_Error",
											t.display_name,
										),
									);
								}
							})(t, e, r),
					},
					(0, Localize)("#Button_Block"),
				),
				u.createElement(
					I.$n,
					{
						onClick: (r) =>
							(async function (e, t, r) {
								let { eResult: n, eFriendRelationship: i } =
									await e.SendFriendInvite(t);
								if (i != 3) {
									const e = GetOwningWindowForEvent(r);
									(0, O.Jw)(e, n, i, t.display_name);
								}
							})(t, e, r),
					},
					(0, Localize)("#Button_Accept"),
				),
				u.createElement(
					I.$n,
					{
						onClick: (r) =>
							(async function (e, t, r) {
								if (!(await q(e, t))) {
									const e = GetOwningWindowForEvent(r);
									(0, G.Ic)(
										e,
										(0, Localize)("#Friend_Menu_IgnoreIncomingInvite"),
										(0, Localize)(
											"#Friend_IgnoreIncomingInvite_Error",
											t.display_name,
										),
									);
								}
							})(t, e, r),
					},
					(0, Localize)("#Button_Ignore"),
				),
			);
		});
	return u.createElement(
		z.Z,
		{
			className: H.IncomingInvites,
			"flow-children": "grid",
			retainFocus: true,
		},
		u.createElement(I._E, {
			className: H.Divider,
		}),
		u.createElement(
			Z,
			{
				friends: n,
			},
			n.member_list.length > 1 &&
				u.createElement(
					I.$n,
					{
						onClick: (e) =>
							(async function (e, t, r) {
								const n = GetOwningWindowForEvent(r);
								if (
									!(await (0, G.WQ)(
										n,
										(0, Localize)("#Friend_Invites_IgnoreAllTitle"),
										(0, Localize)(
											"#Friend_Invites_IgnoreAllDescription",
											t.length,
										),
										(0, Localize)("#Button_Confirm"),
									))
								) {
									return;
								}
								const i = t.map((t) => q(e, t));
								let a = 0;
								(await Promise.all(i)).forEach((e) => {
									if (!e) {
										a++;
									}
								});
								if (a > 0) {
									(0, G.Ic)(
										n,
										(0, Localize)("#Error_Generic"),
										LocalizePlural("#Friend_Invites_FailedToDecline", a),
									);
								}
							})(t, n.member_list, e),
					},
					(0, Localize)("#FriendGroup_AllIgnore"),
				),
		),
		a,
	);
});
const X = (0, d.PA)((e) => {
	const { friendStore: t, context: r, friends: n } = e;
	if (n.member_count == 0) {
		return null;
	}
	const i = n.member_list.map((e, i) => {
		(0, f.w)(
			e.efriendrelationship == 4,
			"Incorrect friend type in OutgoingInvites",
		);
		return u.createElement(
			z.Z,
			{
				key: e.accountid,
				className: H.InvitesRow,
				onMenuButton: (t) => j(r, n, e, t),
				onMenuActionDescription: (0, Localize)("#Friend_Menu_Open"),
			},
			u.createElement(Q, {
				friendGroup: n,
				friend: e,
			}),
			u.createElement(
				I.$n,
				{
					onClick: (r) =>
						(async function (e, t, r) {
							const n = GetOwningWindowForEvent(r);
							if (
								!(await (0, G.WQ)(
									n,
									(0, Localize)("#Friend_Invites_CancelInvite"),
									(0, Localize)(
										"#Friend_CancelInvitation_Confirm",
										t.display_name,
									),
									(0, Localize)("#Button_Confirm"),
								))
							) {
								return;
							}
							const i = await e.RemoveFriend(t);
							if (i == 3 || i == 6) {
								(0, G.Ic)(
									n,
									(0, Localize)("#Friend_Menu_CancelInvitation"),
									(0, Localize)(
										"#Friend_CancelInvitation_Error",
										t.display_name,
									),
								);
							}
						})(t, e, r),
				},
				(0, Localize)("#Friend_Invites_CancelInvite"),
			),
		);
	});
	return u.createElement(
		z.Z,
		{
			className: H.OutgoingInvites,
			"flow-children": "grid",
			retainFocus: true,
		},
		u.createElement(I._E, {
			className: H.Divider,
		}),
		u.createElement(Z, {
			friends: n,
		}),
		i,
	);
});
const J = (e) => {
	const { friendStore: t } = e;
	return u.createElement(
		"div",
		{
			className: H.FriendCodeSection,
		},
		u.createElement(
			"div",
			{
				className: H.FriendCode,
			},
			u.createElement(
				"div",
				{
					className: H.Code,
				},
				t.self.persona.GetAccountID(),
			),
		),
		u.createElement(
			"div",
			{
				className: H.Caption,
			},
			(0, Localize)("#FriendInvites_YourFriendCode"),
		),
	);
};
const $ = (e) => {
	const { friendStore: t } = e;
	const r = u.useRef();
	const n = u.useCallback(
		(e) => {
			let n = GetOwningWindowForEvent(e);
			e.preventDefault();
			const i = parseInt(r.current?.value);
			if (i) {
				(0, W.pg)(
					u.createElement(ee, {
						friendStore: t,
						accountID: i,
						ownerWindow: n,
					}),
					n,
				);
			}
			return true;
		},
		[t],
	);
	return u.createElement(
		"div",
		{
			className: H.AddFriendSection,
		},
		u.createElement(
			"div",
			{
				className: H.Title,
			},
			(0, Localize)("#FriendInvites_AddFriend_Title"),
		),
		u.createElement(
			"div",
			{
				className: H.Description,
			},
			(0, Localize)("#FriendInvites_AddFriend_Description"),
		),
		u.createElement(
			"form",
			{
				className: H.InputForm,
				onSubmit: n,
			},
			u.createElement(I.pd, {
				autoFocus: true,
				ref: r,
				className: H.Input,
				placeholder: (0, Localize)("#FriendInvites_AddFriend_Placeholder"),
			}),
			u.createElement(
				I.$n,
				{
					className: H.SubmitButton,
					type: "submit",
				},
				(0, Localize)("#Button_OK"),
			),
		),
	);
};
const ee = (0, d.PA)((e) => {
	const { friendStore: t, accountID: r, ownerWindow: n, closeModal: i } = e;
	const [a, s] = B(r);
	const o = u.useCallback(async () => {
		const { eResult: e, eFriendRelationship: a } =
			await t.SendFriendInviteBySteamID(_.b.InitFromAccountID(r));
		if (e == 1) {
			if (a == 4) {
				(0, G.Ic)(
					n,
					(0, Localize)("#Friend_Menu_AddToFriendsList"),
					(0, Localize)("#Friend_InviteSent"),
				);
			} else if (a == 3) {
				(0, G.Ic)(
					n,
					(0, Localize)("#Friend_Menu_AddToFriendsList"),
					(0, Localize)("#Friend_MutualInviteSent", s.persona_name),
				);
			}
		} else {
			(0, O.Jw)(n, e, a, s.persona_name);
		}
		i();
	}, [r, s, i, n, t]);
	let l = u.createElement(L.t, null);
	let c = false;
	if (!a) {
		if (s) {
			l = u.createElement(F, {
				searchResult: s,
				bShowStatus: false,
			});
			c = !s.is_friend && s.accountid != t.self.steamid.GetAccountID();
		} else {
			l = u.createElement(
				"div",
				{
					className: H.SearchError,
				},
				(0, Localize)("#Friend_Invites_NotFound"),
			);
		}
	}
	return u.createElement(
		P.o0,
		{
			className: "friendsui-container",
			strTitle: (0, Localize)("#Friend_Invites_SearchTitle", r),
			onOK: o,
			onCancel: i,
			strOKButtonText: (0, Localize)("#ManageFriends_SendInvite"),
			strCancelButtonText: (0, Localize)("#Button_Close"),
			bOKDisabled: !c,
		},
		u.createElement(I.nB, null, l),
	);
});
const te = (e) => {
	const { friendStore: t, scrollableElement: r } = e;
	const n = u.useCallback(
		(e) => {
			if (e) {
				r.current?.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}
		},
		[r],
	);
	return u.createElement(
		z.Z,
		{
			className: H.TopSection,
			onFocusWithin: n,
		},
		u.createElement($, {
			friendStore: t,
		}),
		u.createElement(J, {
			friendStore: t,
		}),
	);
};
const re = (0, d.PA)((e) => {
	const { friends: t, browserContext: r } = e;
	const n = u.useRef();
	const i = t.FriendGroupStore.incoming_invites_group;
	const a = t.FriendGroupStore.outgoing_invites_group;
	u.useEffect(() => {
		t.FriendGroupStore.EnsureMutualFriendsForIncomingInvites();
		t.ClanStore.EnsureInitialStateForClanInvites();
	}, [t]);
	return u.createElement(
		z.Z,
		{
			ref: n,
			className: H.InvitesList,
			"flow-children": "grid",
		},
		u.createElement(te, {
			friendStore: t,
			scrollableElement: n,
		}),
		u.createElement(K, {
			friendStore: t,
			context: r,
			friends: i,
		}),
		u.createElement(X, {
			friendStore: t,
			context: r,
			friends: a,
		}),
	);
});
var ne = require("./64587.js");
var ie = require(/*webcrack:missing*/ "./90095.js");
var ae = require(/*webcrack:missing*/ "./90765.js");
import { Seconds } from "../../actual_src/utils/time.js";
var oe = require("./66146.js");
var le = require("./8653.js");
var ce = require("./29502.js");
function me(e) {
	let { chats: t, onActivate: r, ...n } = e;
	let i = (0, ie.q3)(() => {
		let e = 0;
		let t = a.xm.GetServerRTime32() - Seconds.PerWeek * 2;
		const r = a.xm.ChatStore.GetRecentChats();
		for (const n of r) {
			if (n instanceof le.s) {
				e += n.unread_message_count;
			} else if (n instanceof oe.a$) {
				n.chatRoomList.forEach((r) => {
					if (r.has_unread_messages && r.time_last_ack > t) {
						let t = r.unread_message_count;
						if (t > 0) {
							e += t;
						}
					}
				});
			}
		}
		return e;
	});
	if (i == 0) {
		return null;
	}
	return u.createElement(
		z.Z,
		{
			className: (0, ae.A)(
				ce.NotificationUnreadMentionContainer,
				i > 0 && ce.HasMessages,
			),
			onActivate: (e) => {
				if (r) {
					r(e);
				}
				a.xm.UIStore.FriendsListSteamDeckActiveTab = o.Jw.RecentMessages;
			},
			...n,
		},
		u.createElement(R.wbc, null),
		u.createElement(
			"div",
			{
				className: ce.Header_NotificationUnreadMention,
			},
			i,
		),
	);
}
var ue = require("./3756.js");
var de = require("./53414.js");
var Ae = require("./70479.js");
function pe(e) {
	let { chats: t, className: r, ...n } = e;
	let i = (0, ie.q3)(() => t.GetActiveVoiceChat());
	const s = i instanceof le.s ? i : undefined;
	const o = s?.GetMember(s.accountid_partner);
	const l = i instanceof ue.d ? i : undefined;
	const c = (0, ie.q3)(
		() => t.VoiceChat.IsMicMuted() || t.VoiceChat.GetVoiceInputGain() == 0,
	);
	const m = (0, ie.q3)(
		() => t.VoiceChat.IsOutputMuted() || t.VoiceChat.GetVoiceOutputGain() == 0,
	);
	const d = (0, ie.q3)(() => t.FriendChatStore.GetAllChats());
	let A = false;
	const p = (0, ie.q3)(() =>
		d.filter((e) => {
			let t = a.xm.VoiceStore.BPartnerHasRequestedAndIsInOneOnOneChat(
				e.accountid_partner,
			);
			if (s?.accountid_partner == e.accountid_partner) {
				t = false;
			}
			return t;
		}),
	);
	p.forEach((e) => {
		A ||= a.xm.VoiceStore.BSelfHadPreviouslyJoinedOneOnOneChat(
			e?.accountid_partner,
		);
	});
	if (!t.VoiceChat.IsAnyVoiceActive() && !i && p.length == 0) {
		return null;
	}
	const g = s != null;
	const h = l != null;
	const C = p.length != 0;
	const _ = (0, ae.A)(
		r,
		Ae.VoiceChatHeader,
		i && Ae.ActiveCall,
		g && Ae.FriendVoice,
		h && Ae.GroupVoice,
		C && Ae.IncomingCall,
		A && Ae.CallOnHold,
	);
	let f = {};
	if (g) {
		f.onSecondaryButton = () => t.VoiceChat.OnUserEndVoiceChat();
		f.onSecondaryActionDescription = (0, Localize)("#VoiceChat_Leave");
	} else if (h) {
		f.onSecondaryButton = () => t.VoiceChat.OnUserEndVoiceChat();
		f.onSecondaryActionDescription = (0, Localize)("#VoiceChat_LeaveVoiceRoom");
	} else if (C) {
		let e = p[0];
		f.onSecondaryButton = () =>
			a.xm.VoiceStore.OnRejectOneOnOneVoiceChatForPartner(e.accountid_partner);
		f.onSecondaryActionDescription = (0, Localize)("#Voice_DeclineVoiceChat");
	}
	return u.createElement(
		z.Z,
		{
			className: _,
			...n,
			...f,
		},
		u.createElement("div", {
			className: Ae.VoiceChatStatusBackground,
		}),
		p.map((e) => {
			let t = e.chat_partner;
			return u.createElement(x.bP, {
				key: e.unique_id,
				noActions: true,
				bHideGameName: true,
				bHidePersona: true,
				bHideStatusInfo: true,
				showVoiceLevel: true,
				friend: t,
				context: {
					chat: e,
					chatContext: "friendslist",
				},
				avatarSize: "Medium",
				statusPosition: "right",
			});
		}),
		p.length != 0 &&
			u.createElement(
				"div",
				{
					className: "WaitingForYouFirstTime",
				},
				A ? u.createElement(R.fpT, null) : u.createElement(R.BeN, null),
				!A &&
					u.createElement(
						"div",
						{
							className: "Sonar",
						},
						u.createElement("div", {
							className: "SonarCircle",
						}),
					),
			),
		s &&
			u.createElement(x.bP, {
				noActions: true,
				bHideGameName: true,
				bHidePersona: true,
				bHideStatusInfo: true,
				showVoiceLevel: true,
				friend: o,
				context: {
					chat: s,
					chatContext: "friendslist",
				},
				avatarSize: "Medium",
				statusPosition: "right",
			}),
		l &&
			u.createElement(de.I, {
				group: l.GetGroup(),
				small: true,
			}),
		(s || l) &&
			u.createElement(R.LeN, {
				off: m,
				className: m ? "Muted" : undefined,
			}),
		(s || l) &&
			u.createElement(R.EQ9, {
				off: c,
				className: c ? "Muted" : undefined,
			}),
	);
}
class ge extends u.Component {
	m_refTextInput = null;
	constructor(e) {
		super(e);
		this.state = {
			error: 1,
			strPIN: "",
		};
	}
	componentDidMount() {
		this.m_refTextInput.focus();
	}
	BindTextInput(e) {
		this.m_refTextInput = e;
	}
	OnPINInput(e) {
		this.setState({
			strPIN: e.target.value,
		});
	}
	onOK(e) {
		e.preventDefault();
		a.xm.ParentalStore.Unlock(this.state.strPIN).then((e) => {
			if (e != 1) {
				this.setState({
					error: e,
				});
			}
		});
		return true;
	}
	render() {
		let e = "";
		switch (this.state.error) {
			case 1:
				break;
			case 25:
				e = (0, Localize)("#FamilyView_TooManyAttempts");
				break;
			default:
				e = (0, Localize)("#FamilyView_BadPIN");
		}
		return u.createElement(
			"div",
			null,
			u.createElement(
				"div",
				{
					className: "FamilyViewTitle",
				},
				(0, Localize)("#FamilyView_Title"),
			),
			u.createElement(
				"div",
				{
					className: "FamilyViewInstructions",
				},
				(0, Localize)("#FamilyView_Unlock_Instructions"),
			),
			u.createElement(
				"form",
				{
					onSubmit: this.onOK,
				},
				u.createElement("input", {
					type: "password",
					maxLength: 4,
					className: "pinInput",
					ref: this.BindTextInput,
					value: this.state.strPIN,
					onChange: this.OnPINInput,
				}),
				u.createElement(
					"button",
					{
						type: "submit",
					},
					(0, Localize)("#Button_OK"),
				),
			),
			e &&
				u.createElement(
					"p",
					{
						className: "error_text",
					},
					e,
				),
		);
	}
}
(0, n.Cg)([v.oI], ge.prototype, "BindTextInput", null);
(0, n.Cg)([v.oI], ge.prototype, "OnPINInput", null);
(0, n.Cg)([v.oI], ge.prototype, "onOK", null);
var he = require(/*webcrack:missing*/ "./7470.js");
var Ce = require(/*webcrack:missing*/ "./23038.js");
var _e = require(/*webcrack:missing*/ "./85243.js");
var fe = require(/*webcrack:missing*/ "./28987.js");
var be = require(/*webcrack:missing*/ "./46382.js");
var ye = require(/*webcrack:missing*/ "./73870.js");
var Se = require(/*webcrack:missing*/ "./11131.js");
var we = require(/*webcrack:missing*/ "./67808.js");
var Be = require(/*webcrack:missing*/ "./88750.js");
var _ve = require(/*webcrack:missing*/ "./42318.js");
var Ie = require(/*webcrack:missing*/ "./91435.js");
var Ee = require(/*webcrack:missing*/ "./27773.js");
var Me = require("./19696.js");
var Te = require(/*webcrack:missing*/ "./31958.js");
var Re = require(/*webcrack:missing*/ "./75144.js");
var ke = require("./17656.js");
var De = ke;
var Ne = require("./83857.js");
var Fe = require("./83665.js");
function Ge() {
	const e = (0, s._k)((0, Se.R7)().ownerWindow);
	if (e.m_eUIMode === undefined) {
		return {
			...e,
			m_eUIMode: 4,
		};
	} else {
		return e;
	}
}
export function wE(e, t, r) {
	const n = window;
	const i = (0, s._k)(n);
	he.H(r).render(
		u.createElement(
			Ze,
			{
				ownerWindow: n,
			},
			u.createElement(Ye, null),
			u.createElement(Ke, {
				friends: e,
				chats: t,
				browserContext: i,
				elTarget: r,
			}),
		),
	);
}
export function p5(e, t, r) {
	const n = (0, ie.q3)(() => a.xm.ready_to_render);
	const i = Ge();
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(Xe, {
			key: "throbber",
			fadeOut: n,
			className: De.throbberContainerSteamDeckFriendsQuickAccess,
		}),
		n
			? u.createElement(x.l$, {
					bQuickAccess: true,
					friends: e,
					chats: t,
					browserContext: i,
					collapsed: false,
				})
			: null,
	);
}
export function p(e, t) {
	const r = (0, ie.q3)(() => a.xm.ready_to_render);
	const n = Ge();
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(Xe, {
			key: "throbber",
			fadeOut: r,
			className: De.throbberContainerSteamDeckFriendsQuickAccess,
		}),
		r
			? u.createElement(re, {
					friends: e,
					browserContext: n,
				})
			: null,
	);
}
export function Yg(e, t, r) {
	const n = (0, ie.q3)(() => a.xm.ready_to_render);
	const i = Ge();
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(Xe, {
			key: "throbber",
			fadeOut: n,
			className: De.throbberContainerSteamDeckFriends,
		}),
		n
			? u.createElement(x.l$, {
					bQuickAccess: false,
					friends: e,
					chats: t,
					browserContext: i,
					collapsed: false,
				})
			: null,
	);
}
export function vT(e, t, r) {
	const n = (0, ie.q3)(() => a.xm.ready_to_render);
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(Xe, {
			key: "throbber",
			fadeOut: n,
			className: De.throbberContainerSteamDeckFriendsQuickAccess,
		}),
		n ? u.createElement("div", null, "(out of date client)") : null,
	);
}
export function CN(e, t, r) {
	const n = (0, ie.q3)(() => a.xm.ready_to_render);
	const i = Ge();
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(Xe, {
			key: "throbber",
			fadeOut: n,
			className: De.throbberContainerSteamDeckFriends,
		}),
		n
			? u.createElement(x.hv, {
					children: r.children,
					friends: e,
					chats: t,
					browserContext: i,
				})
			: null,
	);
}
export function as(e) {
	const t = Ge();
	let r = a.xm.UIStore.GetDefaultTabSetForContext(t);
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(c.yA, {
			tabs: r,
			ResponsiveWindowState: null,
		}),
	);
}
export function RM(e, t) {
	const r = Ge();
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(m.rN, {
			browserContext: r,
		}),
	);
}
export function nf(e, t) {
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(ne.$, {
			chats: e,
		}),
	);
}
export function cQ(e, t) {
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(pe, {
			chats: e,
			...t,
		}),
	);
}
export function V8(e, t) {
	return u.createElement(
		y.ss,
		{
			IN_GAMEPADUI: true,
		},
		u.createElement(me, {
			chats: e,
			...t,
		}),
	);
}
function Qe(e) {
	e.preventDefault();
}
function Ze(e) {
	const { ownerWindow: t, children: r } = e;
	t.document;
	const n = u.useCallback(() => a.xm?.CMInterface, []);
	const i = (0, v.bs)(u.useCallback(() => new ye.A(), []));
	(0, v.l6)(window, "dragover", Qe);
	(0, v.l6)(window, "dragenter", Qe);
	(0, v.l6)(window, "drop", Qe);
	const s = u.useCallback((e) => {
		if (e === "visible") {
			a.xm.OnWindowBecameVisible();
		}
	}, []);
	(0, v.o4)(t.document, s);
	return u.createElement(
		Re.s,
		null,
		u.createElement(
			y.ss,
			{
				IN_GAMEPADUI: false,
			},
			u.createElement(
				Se.kc,
				{
					ownerWindow: t,
				},
				u.createElement(
					we.p,
					{
						body_class: "friendsui-container",
					},
					u.createElement(
						be.VQ,
						{
							useActiveCMInterface: n,
							useStorage: i,
						},
						r,
					),
				),
			),
		),
	);
}
function Ye() {
	return u.createElement(_ve.wC, null, u.createElement(Ne.L, null));
}
const Ke = (0, d.PA)(function (e) {
	const { browserContext: t, friends: r, chats: n, elTarget: i } = e;
	const [o] = u.useState(() => new s.kP(i.ownerDocument.defaultView));
	let l = null;
	let c = null;
	let m = a.xm.ready_to_render;
	if (m) {
		l = a.xm.UIStore.GetDefaultTabSetForContext(t);
		c = a.xm.UIStore.GetPerContextChatData(t);
	}
	u.useEffect(() => {
		if (c) {
			c.SetFriendsListWindow(o);
		}
	}, [c, o]);
	return u.createElement(
		u.Fragment,
		null,
		u.createElement(Xe, {
			fadeOut: m,
		}),
		m &&
			u.createElement(nt, {
				friends: r,
				chats: n,
				tabset: l,
				container: o,
			}),
	);
});
function Xe(e) {
	const { fadeOut: t, className: r } = e;
	const [n, i] = u.useState(t);
	const a = u.useCallback(
		(e) => {
			if (e.target == e.currentTarget && t && e.propertyName == "opacity") {
				i(true);
			}
		},
		[t],
	);
	if (n) {
		return null;
	}
	let s = De.throbberContainer;
	if (t) {
		s += ` ${De["throbberContainer-exit-active"]}`;
	}
	return u.createElement(
		"div",
		{
			className: (0, ae.A)(s, r),
			onTransitionEnd: a,
		},
		u.createElement(
			"div",
			{
				className: "WaitingForInterFaceReadyContainer",
			},
			u.createElement(
				"div",
				{
					className: "WaitingForInterFaceReadyThrobber",
				},
				u.createElement(L.t, {
					className: "Throbber_Blur",
					size: "xlarge",
				}),
				u.createElement(L.t, {
					size: "xlarge",
				}),
			),
		),
	);
}
class Je extends Se.K9 {
	constructor(e, t, r, n) {
		super(e, t, r, n);
	}
	GetSavedDimensionsKey() {
		if (this.BIsInOverlay()) {
			let e = a.xm.UIStore.GetPerContextChatData(
				this.m_rgParams.target_browser,
			).screen_info;
			return (
				"Overlay_" +
				(e && e.width && e.height ? e.width + "x" + e.height + "_" : "") +
				this.m_strSavedDimensionsKey
			);
		}
		return this.m_strSavedDimensionsKey;
	}
}
export const Y$ = 226;
export const rS = 400;
export const KO = Y$ * 3;
export class ve extends Je {
	m_friends;
	m_chats;
	m_browserContext;
	m_fnOnClose;
	m_reactRoot;
	constructor(e, t, r, n, i) {
		let a = Se.Wf.Resizable;
		if (n && !(0, y.Pr)()) {
			a |= Se.Wf.Minimized;
		}
		let o = 300;
		let l = 650;
		let c = false;
		if (i) {
			if (i.width) {
				o = i.width;
				c = true;
			}
			if (i.height) {
				l = i.height;
				c = true;
			}
		}
		super(
			"friendslist",
			"PopupFriendsListDimensions",
			{
				dimensions: {
					width: o,
					height: l,
				},
				minWidth: Y$,
				minHeight: rS,
				title: (0, Localize)("#WindowTitle_FriendsList"),
				html_class:
					"friendsui-container client_chat_frame fullheight SavedDimensionsPopup",
				body_class: "fullheight",
				target_browser: r,
				eCreationFlags: a,
				bIgnoreSavedDimensions: c,
			},
			false,
		);
		this.m_friends = e;
		this.m_chats = t;
		if (s.ZM.m_strLoaderWindowRestoreDetails) {
			this.SaveWindowPosition(s.ZM.m_strLoaderWindowRestoreDetails);
			s.ZM.m_strLoaderWindowRestoreDetails = undefined;
		}
	}
	Render(e, t) {
		t.setAttribute("class", "fullheight popup_chat_frame");
		let r = new s.kP(e);
		let n = this.browser_info || a.xm.GetDefaultBrowserContext();
		let i = a.xm.UIStore.GetDefaultTabSetForContext(n);
		this.m_browserContext = n;
		if (
			a.xm.UIStore.BIsFriendsListSingleWindow(n) &&
			e.SteamClient.Window.SetMinSize
		) {
			e.SteamClient.Window.SetMinSize(KO, rS);
		}
		this.m_reactRoot = he.H(t);
		this.m_reactRoot.render(
			u.createElement(
				Ze,
				{
					ownerWindow: this.window,
				},
				u.createElement(nt, {
					popup: this,
					friends: this.m_friends,
					chats: this.m_chats,
					tabset: i,
					container: r,
				}),
			),
		);
	}
	OnResizeComplete(e) {
		super.OnResizeComplete(e);
		window.parent.postMessage(
			{
				message: "FriendsListRestoreDetailsChanged",
				data: e,
			},
			"https://steamloopback.host",
		);
	}
	OnClose() {
		super.OnClose();
		this.m_reactRoot.unmount();
		window.parent.postMessage(
			{
				message: "FriendsListRestoreDetailsChanged",
				data: this.m_rgParams.strRestoreDetails,
			},
			"https://steamloopback.host",
		);
		if (this.m_browserContext) {
			a.xm.OnFriendsListClosed(this.m_browserContext);
		}
		if (this.m_fnOnClose) {
			this.m_fnOnClose();
		}
	}
	SetOnClose(e) {
		this.m_fnOnClose = e;
	}
}
let nt = class extends u.Component {
	m_nInlineChatWidth;
	m_bUsePopups = false;
	m_browserContext;
	m_ResponsiveWindowState;
	m_unTimerWindowTitleUnreadCycle;
	m_nWindowTitleUnreadCycleCount = 0;
	m_popupActionDisposer;
	m_popupFocusDisposer;
	m_elFriendsListContainer;
	m_refChatDialog = u.createRef();
	m_refRoot = u.createRef();
	m_lastFocusElement = null;
	constructor(e) {
		super(e);
		(0, h.Gn)(this);
		this.m_browserContext =
			this.props.popup && this.props.popup.browser_info
				? this.props.popup.browser_info
				: a.xm.GetDefaultBrowserContext();
		let t = a.xm.UIStore.GetPerContextChatData(this.m_browserContext);
		this.m_bUsePopups = t.BUsePopups();
		if (this.m_bUsePopups) {
			this.m_nInlineChatWidth = 640;
		} else {
			this.m_nInlineChatWidth = 530;
			this.m_ResponsiveWindowState = a.xm.UIStore.GetResponsiveWindowState(
				this.m_browserContext,
			);
		}
		this.state = {
			bIsResizingWindow: false,
		};
	}
	OnCopy(e) {
		if (this.m_refChatDialog && this.m_refChatDialog.current) {
			this.m_refChatDialog.current.OnCopy(e);
		}
	}
	BindWindowHandlers() {
		const e = this.props.container;
		const t = this.props.tabset;
		this.m_popupActionDisposer = (0, h.fm)(() => {
			if (!i.TS.IN_CLIENT) {
				let t =
					a.xm.ChatStore.FriendChatStore.GetUnfilteredFriendsWithUnreadMessages();
				if (t.length && this.m_unTimerWindowTitleUnreadCycle === undefined) {
					this.m_unTimerWindowTitleUnreadCycle = window.setInterval(() => {
						this.m_nWindowTitleUnreadCycleCount =
							(this.m_nWindowTitleUnreadCycleCount + 1) % 1000;
					}, 2000);
				} else if (
					!t.length &&
					this.m_unTimerWindowTitleUnreadCycle !== undefined
				) {
					window.clearInterval(this.m_unTimerWindowTitleUnreadCycle);
					this.m_unTimerWindowTitleUnreadCycle = undefined;
				}
				let r = 1 + t.length;
				let n = this.m_nWindowTitleUnreadCycleCount % r;
				if (n > 0) {
					let r = t[n - 1];
					e.title = (0, Localize)("#WindowTitle_UnreadMessage", r.name);
					return;
				}
			}
			if (
				a.xm.UIStore.BIsFriendsListSingleWindow(this.m_browserContext) &&
				t.GetTitle()
			) {
				if (i.TS.IN_CLIENT) {
					e.title =
						(0, Localize)("#WindowTitle_FriendsList") + " - " + t.GetTitle();
				} else {
					e.title = t.GetTitle();
				}
			} else {
				e.title = (0, Localize)("#WindowTitle_FriendsList");
			}
		});
		this.m_popupFocusDisposer = e.OnFocus(() => {
			if (a.xm.UIStore.BIsFriendsListSingleWindow(this.m_browserContext)) {
				this.props.tabset.OnWindowFocus();
			}
		});
	}
	UnbindWindowHandlers() {
		if (this.m_popupActionDisposer) {
			this.m_popupActionDisposer();
			this.m_popupActionDisposer = undefined;
		}
		if (this.m_popupFocusDisposer) {
			this.m_popupFocusDisposer.unregister();
			this.m_popupFocusDisposer = undefined;
		}
	}
	componentWillUnmount() {
		this.UnbindWindowHandlers();
	}
	componentDidMount() {
		this.BindWindowHandlers();
		if (
			this.m_browserContext.m_eBrowserType == _e.W.EBrowserType_OpenVROverlay ||
			this.m_browserContext.m_eBrowserType ==
				_e.W.EBrowserType_OpenVROverlay_Dashboard
		) {
			this.m_refRoot.current.addEventListener("focusin", this.OnFocusIn);
			this.m_refRoot.current.addEventListener("focusout", this.OnFocusOut);
		}
	}
	OnFocusIn(e) {
		let t = false;
		switch (e.target.tagName) {
			case "TEXTAREA":
				t = true;
				break;
			case "INPUT":
				t = e.target.type == "text";
		}
		if (t) {
			e.currentTarget.ownerDocument.defaultView.SteamClient.OpenVR.ShowKeyboard();
			console.log("Showing VR Keyboard");
			this.m_lastFocusElement = e.target;
			this.m_lastFocusElement.addEventListener("click", this.OnTextInputClick);
		}
	}
	OnFocusOut(e) {
		if (e.target == this.m_lastFocusElement) {
			e.currentTarget.ownerDocument.defaultView.SteamClient.OpenVR.HideKeyboard();
			this.m_lastFocusElement.removeEventListener(
				"click",
				this.OnTextInputClick,
			);
			this.m_lastFocusElement = null;
			console.log("Hiding VR Keyboard");
		}
	}
	OnTextInputClick(e) {
		e.currentTarget.ownerDocument.defaultView.SteamClient.OpenVR.ShowKeyboard();
	}
	BindFriendsListContainer(e) {
		this.m_elFriendsListContainer = e;
	}
	OnGrabberMouseDown(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		this.setState({
			bIsResizingWindow: true,
		});
		t.addEventListener("mousemove", this.HandleMouseMove);
		t.addEventListener("mouseup", this.UnregisterFriendsListDragEvents);
	}
	OnGrabberTouchStart(e) {
		let t = e.currentTarget.ownerDocument.defaultView;
		t.addEventListener("touchmove", this.HandleTouchMove);
		t.addEventListener("touchend", this.UnregisterFriendsListDragEvents);
	}
	HandleTouchMove(e) {
		if (e.touches.length >= 1) {
			this.InternalAdjustFriendsListContainerOnDrag(e.touches[0].clientX);
		}
	}
	HandleMouseMove(e) {
		this.InternalAdjustFriendsListContainerOnDrag(e.clientX);
	}
	InternalAdjustFriendsListContainerOnDrag(e) {
		if (!this.m_elFriendsListContainer) {
			return;
		}
		let t = this.m_elFriendsListContainer.getBoundingClientRect().left;
		this.SetFriendsListSingleWindowWidth(e - t);
	}
	SetFriendsListSingleWindowWidth(e) {
		let t = (this.props.popup ? this.props.popup.window : window).innerWidth;
		let r = (0, Te.OQ)(t - 400, 200, 440);
		e = (0, Te.OQ)(e, 200, r);
		s.ZM.SetUIDisplayPref("nFriendsListSingleWindowWidthPx", e);
	}
	UnregisterFriendsListDragEvents(e) {
		this.setState({
			bIsResizingWindow: false,
		});
		e.view.removeEventListener("mousemove", this.HandleMouseMove);
		e.view.removeEventListener("touchmove", this.HandleTouchMove);
		e.view.removeEventListener("mouseup", this.UnregisterFriendsListDragEvents);
		e.view.removeEventListener(
			"touchend",
			this.UnregisterFriendsListDragEvents,
		);
	}
	render() {
		let e = true;
		let t = true;
		let r = a.xm.UIStore.BIsFriendsListSingleWindow(this.m_browserContext);
		let n = a.xm.UIStore.GetPerContextChatData(this.m_browserContext);
		let m = false;
		let d = false;
		if (!r) {
			if (this.m_ResponsiveWindowState) {
				let r = this.m_ResponsiveWindowState.GetActiveView();
				e = r == o.OC.FriendsList;
				t = r == o.OC.Chat;
			} else {
				t = false;
			}
		}
		let A = a.xm.UIStore.GetTheaterMode();
		let p = !i.TS.IN_CLIENT && !A && !i.TS.IN_TENFOOT && !window.__bHideHeader;
		let g = "chat_main fullheight";
		let h = null;
		if (e && t) {
			if (this.props.tabset.tabCount > 0) {
				d = true;
				m = a.xm.UIStore.BIsFriendsListCollapsed(this.m_browserContext);
			}
			g += " singlewindow";
			h = u.createElement("div", {
				className: "singleWindowDivider" + (m ? " friendsListCollapsed" : ""),
				onMouseDown: this.OnGrabberMouseDown,
				onTouchStart: this.OnGrabberTouchStart,
			});
		} else if (e) {
			g += " responsive_friends";
		} else if (t) {
			g += " responsive_chats";
		}
		if (this.state.bIsResizingWindow) {
			g += " resizingSingleWindow";
		}
		if (A) {
			g += " TheaterMode";
		}
		if (this.props.popup && this.props.popup.focused) {
			g += " focused";
		}
		if (
			a.xm.CMInterface.BDisconnected() &&
			!a.xm.FriendStore.BIsOfflineMode()
		) {
			g += " errorDisconnected";
		}
		let C = this.props.popup && this.props.popup.window;
		let _ = m
			? {
					width: 0,
					transition: "width 0.32s ease-in-out, opacity 0.32s ease-in-out",
				}
			: {
					width: s.ZM.UIDisplayPrefs.nFriendsListSingleWindowWidthPx + "px",
				};
		if (a.xm.SettingsStore.IsSteamInTournamentMode()) {
			return u.createElement(
				"div",
				{
					className: g,
					ref: this.m_refRoot,
				},
				u.createElement(
					_ve.tH,
					null,
					u.createElement(lt, {
						popup: this.props.popup ? this.props.popup.window : undefined,
					}),
				),
			);
		} else if (a.xm.ParentalStore.BIsFriendsBlocked()) {
			if (i.TS.IN_CLIENT) {
				return u.createElement(
					"div",
					{
						className: g,
					},
					u.createElement(ge, null),
				);
			} else {
				location.reload();
				return u.createElement("div", null);
			}
		} else {
			return u.createElement(
				"div",
				{
					className: g,
					onContextMenu: Be.aE,
					ref: this.m_refRoot,
				},
				u.createElement(
					_ve.tH,
					null,
					u.createElement(lt, {
						popup: this.props.popup ? this.props.popup.window : undefined,
					}),
				),
				p &&
					u.createElement(it, {
						friends: this.props.friends,
					}),
				u.createElement(
					z.Z,
					{
						className: "chat_main_flex displayRow",
						onCopy: this.OnCopy,
					},
					a.xm.ready_to_render &&
						u.createElement(
							_ve.tH,
							null,
							u.createElement(
								Ie.EO,
								{
									browserInfo: this.m_browserContext,
									bUsePopups: n.BUsePopups(),
								},
								e &&
									u.createElement(
										l.D,
										{
											className:
												"friendsListContainer fullheight " +
												(m ? "collapsed" : ""),
											style: t ? _ : null,
											ref: this.BindFriendsListContainer,
											rgAcceptedTypes: [],
											bAcceptsFiles: true,
										},
										u.createElement(x.i$, {
											friends: this.props.friends,
											chats: this.props.chats,
											popup: C,
											browserContext: this.m_browserContext,
											collapsible: d,
											collapsed: m,
										}),
									),
								h,
								t &&
									u.createElement(c.yA, {
										tabs: this.props.tabset,
										popup: C,
										ref: this.m_refChatDialog,
										ResponsiveWindowState: e
											? null
											: this.m_ResponsiveWindowState,
										showOpenFriendsList: d && m,
									}),
								this.props.popup &&
									i.TS.IN_CLIENT &&
									u.createElement(Me.Z, {
										popup: C,
									}),
								u.createElement("div", {
									className: "singleWindowFocusBar chatSingleWindowFocusBar",
								}),
							),
						),
				),
			);
		}
	}
};
(0, n.Cg)([h.sH], nt.prototype, "m_nWindowTitleUnreadCycleCount", undefined);
(0, n.Cg)([v.oI], nt.prototype, "OnCopy", null);
(0, n.Cg)([v.oI], nt.prototype, "OnFocusIn", null);
(0, n.Cg)([v.oI], nt.prototype, "OnFocusOut", null);
(0, n.Cg)([v.oI], nt.prototype, "OnTextInputClick", null);
(0, n.Cg)([v.oI], nt.prototype, "BindFriendsListContainer", null);
(0, n.Cg)([v.oI], nt.prototype, "OnGrabberMouseDown", null);
(0, n.Cg)([v.oI], nt.prototype, "OnGrabberTouchStart", null);
(0, n.Cg)([v.oI], nt.prototype, "HandleTouchMove", null);
(0, n.Cg)([v.oI], nt.prototype, "HandleMouseMove", null);
(0, n.Cg)([v.oI], nt.prototype, "UnregisterFriendsListDragEvents", null);
nt = (0, n.Cg)([d.PA], nt);
let it = class extends u.Component {
	render() {
		let e = this.props.friends.self;
		let t = i.TS.EREALM === fe.TU.k_ESteamRealmChina;
		return u.createElement(
			"div",
			{
				className: De.SteamPageHeader,
			},
			u.createElement(
				"a",
				{
					href: `${i.TS.STORE_BASE_URL}`,
				},
				u.createElement("div", {
					className: (0, ae.A)(
						De.SteamPageHeaderShortLogo,
						i.TS.EREALM == fe.TU.k_ESteamRealmChina
							? De.LogoChina
							: De.LogoGlobal,
					),
				}),
			),
			u.createElement(at, {
				text: (0, Localize)("#StoreLink_Label"),
				href: `${i.TS.STORE_BASE_URL}`,
			}),
			!t &&
				u.createElement(at, {
					text: (0, Localize)("#CommunityLink_Label"),
					href: `${i.TS.COMMUNITY_BASE_URL}`,
				}),
			u.createElement(at, {
				text: e.primary_display_name,
				href: e.GetCommunityProfileURL(),
			}),
			u.createElement(at, {
				text: (0, Localize)("#SupportLink_Label"),
				href: `${i.TS.HELP_BASE_URL}`,
			}),
		);
	}
};
function at(e) {
	return u.createElement(
		"a",
		{
			className: De.SteamPageHeaderTopLink,
			href: e.href,
		},
		e.text,
	);
}
it = (0, n.Cg)([d.PA], it);
export class IO extends Je {
	m_tabSet;
	m_chats;
	m_popupActionDisposer;
	m_popupFocusDisposer;
	m_reactRoot;
	constructor(e, t, r, n, i, a, s) {
		let o = {
			title: "",
			html_class: "friendsui-container client_chat_frame fullheight ChatPopup",
			body_class: "fullheight",
			minWidth: 400,
			minHeight: 400,
			strRestoreDetails: i,
			dimensions: {
				width: 740,
				height: 650,
			},
			target_browser: e,
			eCreationFlags: Se.Wf.Resizable,
		};
		if (s) {
			o.eCreationFlags |= Se.Wf.Minimized;
		}
		if (a) {
			Object.assign(o.dimensions, a);
			o.bIgnoreSavedDimensions = true;
		}
		super("chat_" + t, r.GetTabSetIdentifier(), o, true);
		this.m_tabSet = r;
		this.m_chats = n;
	}
	SetTitle() {
		if (this.m_popup && this.m_popup.document && this.m_tabSet) {
			let e = this.m_tabSet.GetTitle();
			this.m_popup.document.title = e;
		}
	}
	OnFocus() {
		this.m_tabSet.OnWindowFocus();
	}
	BindWindowHandlers() {
		this.m_popupActionDisposer ||= (0, h.fm)(this.SetTitle);
	}
	UnbindWindowHandlers() {
		if (this.m_popupActionDisposer) {
			this.m_popupActionDisposer();
			this.m_popupActionDisposer = undefined;
		}
	}
	get tab_set() {
		return this.m_tabSet;
	}
	ClearTabSet() {
		this.m_tabSet = undefined;
	}
	OnResize() {
		a.xm.UIStore.OnTabSetResized(this.m_tabSet);
		super.OnResize();
	}
	OnBeforeUnload() {
		if (this.m_tabSet) {
			super.SetSavedDimensionsKey(this.m_tabSet.GetTabSetIdentifier());
		}
		super.OnBeforeUnload();
	}
	OnClose() {
		if (this.m_tabSet) {
			let e = false;
			if (
				this.m_popup.window != null &&
				this.m_popup.window.SteamClient &&
				this.m_popup.window.SteamClient.Window &&
				this.m_popup.window.SteamClient.Window.ProcessShuttingDown
			) {
				e = this.m_popup.window.SteamClient.Window.ProcessShuttingDown();
			}
			this.m_tabSet.OnPopupClosed(e);
		}
		this.UnbindWindowHandlers();
		this.m_reactRoot.unmount();
	}
	Render(e, t) {
		t.setAttribute("class", "fullheight popup_chat_frame");
		this.BindWindowHandlers();
		this.m_reactRoot = he.H(t);
		this.m_reactRoot.render(
			u.createElement(ot, {
				popup: this,
				chatTabs: this.m_tabSet,
			}),
		);
	}
}
(0, n.Cg)([v.oI], IO.prototype, "SetTitle", null);
let ot = class extends u.Component {
	render() {
		let e = this.props.popup.window;
		let t = this.props.chatTabs;
		let r = "popup_chat_frame fullheight";
		if (this.props.popup.focused) {
			r += " focused";
		}
		if (a.xm.UIStore.GetTheaterMode()) {
			r += " TheaterMode";
		}
		if (a.xm.CMInterface.BDisconnected()) {
			r += " errorDisconnected";
		}
		return u.createElement(
			Ze,
			{
				ownerWindow: e,
			},
			u.createElement(
				"div",
				{
					className: r,
					onContextMenu: Be.aE,
				},
				u.createElement(lt, {
					popup: this.props.popup.window,
				}),
				u.createElement(
					Ie.EO,
					{
						browserInfo: this.props.popup.browser_info,
					},
					u.createElement(c.yA, {
						tabs: t,
						popup: e,
						ResponsiveWindowState: null,
					}),
				),
				i.TS.IN_CLIENT &&
					u.createElement(Me.Z, {
						popup: e,
					}),
			),
		);
	}
};
ot = (0, n.Cg)([d.PA], ot);
let lt = class extends u.Component {
	OnKeyDown(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	render() {
		if (i.TS.IN_CLIENT) {
			if (
				a.xm.CMInterface.BDisconnected() &&
				!a.xm.FriendStore.BIsOfflineMode()
			) {
				return u.createElement(
					"div",
					{
						className: "ConnectionTrouble",
						tabIndex: 0,
						onKeyDown: this.OnKeyDown,
					},
					u.createElement(
						"div",
						{
							className: "ConnectionTroubleContent",
						},
						u.createElement(Ee.c, {
							hideMin: true,
							hideMax: true,
							popup: this.props.popup,
						}),
						u.createElement(
							"div",
							{
								className: "ConnectionTroubleMessage",
							},
							(0, Localize)("#ConnectionTrouble_CurrentlyDisconnected"),
						),
					),
				);
			} else {
				return null;
			}
		} else {
			return u.createElement(ct, null);
		}
	}
};
(0, n.Cg)([v.oI], lt.prototype, "OnKeyDown", null);
lt = (0, n.Cg)([d.PA], lt);
let ct = class extends u.Component {
	m_iIntervalDelayedStartup;
	m_iIntervalUpdateReconnectStatus;
	m_bRequestingNotificationPermission = false;
	constructor(e) {
		super(e);
		this.state = {
			bShouldRequestNotificationPermission: true,
			bShowStartupDelayMessage: false,
			bShowReconnectWaitMessage: false,
			cReconnectWaitSeconds: 0,
		};
	}
	componentDidMount() {
		if (!a.xm.ready_to_render) {
			let e = performance.now() - a.xm.GetStartupTime();
			this.m_iIntervalDelayedStartup = window.setTimeout(() => {
				this.setState({
					bShowStartupDelayMessage: true,
				});
				this.m_iIntervalDelayedStartup = undefined;
			}, 1500 - e);
		}
	}
	componentWillUnmount() {
		if (this.m_iIntervalDelayedStartup) {
			window.clearTimeout(this.m_iIntervalDelayedStartup);
			this.m_iIntervalDelayedStartup = undefined;
		}
		if (this.m_iIntervalUpdateReconnectStatus) {
			window.clearInterval(this.m_iIntervalUpdateReconnectStatus);
			this.m_iIntervalUpdateReconnectStatus = undefined;
		}
	}
	IntervalUpdateReconnectWaitStatus() {
		let e = s.ZM.WebLogonManager;
		if (e.BIsWaitingToReconnect()) {
			let t = Math.ceil(e.GetMSUntilNextReconnectAttempt() / 1000);
			if (t != this.state.cReconnectWaitSeconds) {
				this.setState({
					bShowReconnectWaitMessage: true,
					cReconnectWaitSeconds: t,
				});
			}
		} else {
			window.clearInterval(this.m_iIntervalUpdateReconnectStatus);
			this.m_iIntervalUpdateReconnectStatus = undefined;
			this.setState({
				bShowReconnectWaitMessage: false,
				cReconnectWaitSeconds: 0,
			});
		}
	}
	StartReconnectUpdateInterval() {
		this.m_iIntervalUpdateReconnectStatus ||= window.setInterval(
			this.IntervalUpdateReconnectWaitStatus,
			250,
		);
	}
	OnReconnectNowClick() {
		s.ZM.WebLogonManager.ReconnectNow();
	}
	OnLoginClick() {
		window.location.href = window.location.href;
	}
	render() {
		let e = s.ZM.WebLogonManager;
		(0, f.w)(e, "No WebLogonManager in WebConnectionTroubleOverlay");
		if (!e) {
			return null;
		}
		let t = null;
		let r = e.web_logon_state;
		let n =
			!a.xm.NotificationManager.BNotificationsPermitted() &&
			this.state.bShouldRequestNotificationPermission;
		if (r != 9 || n) {
			let i;
			let s = "";
			let o = false;
			let l = false;
			if (r != 9) {
				if (
					a.xm.ready_to_render ||
					this.state.bShowStartupDelayMessage ||
					!e.BIsInInitialConnect()
				) {
					switch (r) {
						case 1:
						case 3:
							i = (0, Localize)("#ConnectionTrouble_Connecting");
							l = true;
							break;
						case 5:
						case 7:
							i = (0, Localize)("#ConnectionTrouble_LoggingIn");
							l = true;
							break;
						case 11:
							i = (0, Localize)("#ConnectionTrouble_RetrievingLogin");
							l = true;
							break;
						case 2:
						case 4:
						case 12:
							i = (0, Localize)("#ConnectionTrouble_FailedToConnect");
							break;
						case 8:
						case 6:
							i = (0, Localize)("#ConnectionTrouble_FailedToLogIn");
							break;
						case 10:
							i = (0, Localize)("#ConnectionTrouble_DisconnectedFinal");
							break;
						case 13:
							i = (0, Localize)("#ConnectionTrouble_LoginLost");
							o = true;
							break;
						case 14:
							i = (0, Localize)("#ConnectionTrouble_LoginChanged");
							o = true;
							break;
						case 15:
							i = (0, Localize)("#ConnectionTrouble_LoggedOnElsewhere");
							break;
						default:
							(0, f.w)(false, `No message for trouble state ${r}`);
					}
				} else {
					s = "InitialConnect";
				}
			} else if (n) {
				if (!this.m_bRequestingNotificationPermission) {
					a.xm.NotificationManager.RequestNotificationPermission().then(() => {
						this.m_bRequestingNotificationPermission = false;
						this.setState({
							bShouldRequestNotificationPermission: false,
						});
					});
					this.m_bRequestingNotificationPermission = true;
				}
				s = "NotificationBrowserWarning";
				i = (0, Localize)("#NotificationBrowserWarning");
			}
			let c = e.BIsWaitingToReconnect();
			let m = e.BWillAutoReconnect();
			if (!this.state.bShowReconnectWaitMessage && m) {
				this.StartReconnectUpdateInterval();
			}
			if (!!i || !a.xm.ready_to_render) {
				t = u.createElement(
					Fe.M,
					{
						classNames: "modalbg-anim",
						timeout: 300,
					},
					(t) =>
						u.createElement(
							"div",
							{
								ref: t,
								className:
									"ConnectionTrouble WebConnectionTrouble" +
									(a.xm.ready_to_render ? "" : " NotReadyToRender"),
							},
							u.createElement("div", {
								className: "" + s,
							}),
							u.createElement(
								"div",
								{
									className: "ConnectionTroubleContent",
								},
								u.createElement(
									"div",
									{
										className: "ConnectionTroubleMessage " + s,
									},
									u.createElement(
										"div",
										{
											className: "errorMessageContainer",
										},
										u.createElement(
											"div",
											{
												className:
													"connectionThrobber" + (l ? " showThrobber" : ""),
											},
											l &&
												u.createElement(L.t, {
													size: "small",
												}),
											" ",
										),
										u.createElement(
											"div",
											null,
											a.xm.ready_to_render
												? i
												: (0, Localize)("#ConnectionTrouble_Connecting"),
										),
									),
									c &&
										m &&
										u.createElement(
											"div",
											{
												className: "ReconnectWaitMessage",
											},
											LocalizePlural(
												"#ConnectionTrouble_ReconnectingInSeconds",
												Math.ceil(e.GetMSUntilNextReconnectAttempt() / 1000),
											),
										),
									c &&
										u.createElement(
											"div",
											{
												className: "ConnectionTroubleReconnectMessage",
											},
											u.createElement(
												"div",
												{
													className: "ReconnectNow",
												},
												u.createElement(
													"button",
													{
														type: "button",
														className: "DialogButton Primary",
														onClick: this.OnReconnectNowClick,
													},
													(0, Localize)("#ConnectionTrouble_ReconnectNow"),
												),
											),
										),
									o &&
										u.createElement(
											"div",
											{
												className: "ConnectionTroubleReconnectMessage",
											},
											u.createElement(
												"div",
												{
													className: "ReconnectNow",
												},
												u.createElement(
													"button",
													{
														type: "button",
														className: "DialogButton Primary",
														onClick: this.OnLoginClick,
													},
													(0, Localize)(
														r != 14
															? "#ConnectionTrouble_LoginAgain"
															: "#ConnectionTrouble_LoginChanged_Reload",
													),
												),
											),
										),
								),
							),
						),
				);
			}
		}
		return u.createElement(Ce.A, null, t);
	}
};
(0, n.Cg)([v.oI], ct.prototype, "IntervalUpdateReconnectWaitStatus", null);
(0, n.Cg)([v.oI], ct.prototype, "OnReconnectNowClick", null);
(0, n.Cg)([v.oI], ct.prototype, "OnLoginClick", null);
ct = (0, n.Cg)([d.PA], ct);
